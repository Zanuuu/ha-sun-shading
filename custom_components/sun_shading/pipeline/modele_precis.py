#!/usr/bin/env python3
"""Modèle précis d'un bâtiment : ce qui ne dépend pas du bâtiment.

Un modèle précis remplace, dans la physique de la carte (sonde, BVH, ombres)
et dans le rendu en mode maquette, la TOITURE idéalisée par le LoD2 d'un
bâtiment — typiquement celui de l'utilisateur, dont les fenêtres de toit
sont l'objet de l'étude. Le corps (murs) reste celui de la maquette.

Ce module réunit la partie réutilisable de ce mécanisme :

- `Mesh` : maillage à sommets soudés, avec `solide()` (partition polygonale
  → un seul volume fermé), `prisme()`, `boite()`, `oriente()` (retournement
  des faces rentrantes par test de parité, composante par composante) et
  `bords()` (arêtes non appariées) ;
- `composante_lod2()` / `retire_lod2()` : le bâtiment de la maquette le plus
  proche d'un point, et ses triangles de toiture que le modèle remplace —
  paramétrés par `zone.json › modele_precis` ;
- `exporte_modele()` : sérialisation au format binaire lu par app.js.
  Contrat octet-exact (offsets, tailles, types non validés côté client) :
  une seule implémentation, partagée par le modèle procédural et par
  importe_toit_obj.py.

Deux voies produisent un modèle : un script procédural coté sur mesures
(coté sur des mesures, propre à une zone), ou l'import
d'une toiture modelée dans Blender via importe_toit_obj.py. Voir README.md.
"""
import gzip
import json
import math
import os
import struct
from collections import Counter

from . import zone as zones

Q = zones.Q


def aire(poly):
    s = 0.0
    for i in range(len(poly)):
        u0, v0 = poly[i]
        u1, v1 = poly[(i + 1) % len(poly)]
        s += u0 * v1 - u1 * v0
    return s / 2


# ============================== maillage ==============================
class Mesh:
    """Quads et polygones orientés, sommets soudés après quantification.
    bords() liste les arêtes qui ne servent pas exactement deux fois."""

    def __init__(self, q=Q, uv2xy=None):
        self.q = q                 # quantification (m)
        self._uv2xy = uv2xy        # (u, v) -> (x, y) : repère du bâtiment
        self.pos = []
        self.idx = []
        self._som = {}

    def _ajoute(self, cle):
        i = self._som.get(cle)
        if i is None:
            i = len(self.pos)
            self.pos.append(cle)
            self._som[cle] = i
        return i

    def V(self, u, v, z):
        x, y = self._uv2xy(u, v) if self._uv2xy else (u, v)
        return self.Vxy(x, y, z)

    def Vxy(self, x, y, z):
        """Comme V(), mais (x, y) déjà dans le repère global local (pas de
        rotation d'équerrage) : sert à importer un maillage externe qui n'est
        pas exprimé dans le repère u,v du bâtiment (cf. importe_toit_obj.py)."""
        q = self.q
        return self._ajoute((int(round(x / q)), int(round(y / q)), int(round(z / q))))

    def tri(self, a, b, c):
        if a != b and b != c and a != c:
            self.idx.append((a, b, c))

    def face(self, sommets):
        for i in range(1, len(sommets) - 1):
            self.tri(sommets[0], sommets[i], sommets[i + 1])

    def oriente(self):
        """Retourne les faces dont la normale rentre dans le solide, par test
        de parité : un rayon parti du centre d'une face le long de sa normale
        coupe le reste du maillage un nombre PAIR de fois s'il sort. Garantie
        indépendante de l'ordre des sommets — les conventions d'enroulement se
        contredisaient entre volumes et rendaient des faces invisibles (elles
        sont rendues en FrontSide), donc traversées par la sonde."""
        import numpy as np
        P = np.array([(a * self.q, b * self.q, c * self.q) for (a, b, c) in self.pos])
        T = np.array(self.idx)
        if not len(T):
            return 0
        V0, V1, V2 = P[T[:, 0]], P[T[:, 1]], P[T[:, 2]]
        E1, E2 = V1 - V0, V2 - V0
        N = np.cross(E1, E2)
        L = np.linalg.norm(N, axis=1)
        bon = L > 1e-12
        N[bon] /= L[bon][:, None]
        C = (V0 + V1 + V2) / 3
        # Composantes connexes : lucarnes, cheminées, aile et annexe sont des
        # volumes distincts qui s'interpénètrent avec le corps. Le test de
        # parité n'a de sens qu'à l'intérieur d'un même solide fermé — sinon
        # un rayon parti d'une lucarne traverse le toit et fausse le compte.
        parent = list(range(len(P)))

        def trouve(a):
            while parent[a] != a:
                parent[a] = parent[parent[a]]
                a = parent[a]
            return a

        for (a, b, c) in T:
            for x, y in ((a, b), (a, c)):
                ra, rb = trouve(x), trouve(y)
                if ra != rb:
                    parent[rb] = ra
        comp = np.array([trouve(int(a)) for a in T[:, 0]])
        # Vote sur plusieurs directions : un maillage n'est jamais parfaitement
        # étanche (arêtes verticales de largeur nulle, noues), et un rayon
        # unique passant par une micro-ouverture inverserait la face à tort.
        def dirs(n):
            axe = np.array([1.0, 0.0, 0.0])
            if abs(n[0]) > 0.9:
                axe = np.array([0.0, 1.0, 0.0])
            t1 = np.cross(n, axe)
            t1 /= np.linalg.norm(t1)
            t2 = np.cross(n, t1)
            out = [n]
            for k in range(3):
                a = 2 * math.pi * k / 3
                d = n + 0.25 * (math.cos(a) * t1 + math.sin(a) * t2)
                out.append(d / np.linalg.norm(d))
            return out

        retournes = 0
        for t in range(len(T)):
            if not bon[t]:
                continue
            meme = comp == comp[t]
            votes = 0
            for d in dirs(N[t]):
                o = C[t] + N[t] * 1e-4
                h = np.cross(d, E2)
                a = np.einsum('ij,ij->i', E1, h)
                m = np.abs(a) > 1e-12
                f = np.zeros_like(a)
                f[m] = 1.0 / a[m]
                sv = o - V0
                u = f * np.einsum('ij,ij->i', sv, h)
                q = np.cross(sv, E1)
                v = f * np.einsum('ij,ij->i', np.broadcast_to(d, sv.shape), q)
                tt = f * np.einsum('ij,ij->i', E2, q)
                touche = m & meme & (u >= 1e-9) & (v >= 1e-9) \
                    & (u + v <= 1 - 1e-9) & (tt > 1e-3)
                touche[t] = False
                votes += int(touche.sum()) % 2
            if votes >= 3:          # majorité des quatre rayons : face rentrante
                self.idx[t] = (self.idx[t][0], self.idx[t][2], self.idx[t][1])
                retournes += 1
        return retournes

    def bords(self):
        ar = Counter()
        for (a, b, c) in self.idx:
            for x, y in ((a, b), (b, c), (c, a)):
                ar[(min(x, y), max(x, y))] += 1
        return [k for k, n in ar.items() if n != 2]

    def solide(self, morceaux):
        """Assemble des morceaux jointifs (partition du plan) en UN solide :
        dessus et fond de chaque morceau, murs uniquement sur les arêtes qui
        ne sont pas partagées, ou dont les deux fonds diffèrent. Un prisme par
        morceau superposerait des faces verticales entre voisins — d'où le
        z-fighting qui striait les façades."""
        # Fusion des sommets proches (3 cm). Deux morceaux voisins issus de
        # découpes différentes doivent partager EXACTEMENT leurs sommets : les
        # trois plans d'un arêtier ne concourent qu'à quelques millimètres
        # près, et un simple arrondi laissait des sommets distincts. L'arête
        # commune n'était alors pas reconnue, chaque zone dressait son propre
        # mur jusqu'au sol, et le toit se hérissait de lames verticales.
        TOL = 0.03
        repres = []
        def rep(p):
            for q in repres:
                if abs(q[0] - p[0]) < TOL and abs(q[1] - p[1]) < TOL:
                    return q
            repres.append(p)
            return p
        polys = []
        for (poly, z_haut, z_bas) in morceaux:
            if len(poly) < 3:
                continue
            net = []
            for p in (rep(q) for q in poly):
                if not net or p != net[-1]:
                    net.append(p)
            if len(net) > 1 and net[0] == net[-1]:
                net.pop()
            if len(net) < 3 or abs(aire(net)) < 1e-4:
                continue
            if aire(net) < 0:
                net = net[::-1]
            polys.append((net, z_haut, z_bas))
        # Suppression des jonctions en T : une arête peut n'être partagée que
        # partiellement (une zone longe la limite sur 5 m, sa voisine sur 3),
        # auquel cas ni l'une ni l'autre ne la reconnaît et toutes deux
        # dressent un mur. On insère donc dans chaque arête les sommets des
        # autres polygones qui tombent dessus.
        # deux passes : l'insertion de sommets sur une arête peut en créer de
        # nouveaux à insérer chez un troisième voisin (cas des noues, où trois
        # zones se rejoignent)
        tous = {q for (poly, _, _) in polys for q in poly}
        decoupes = []
        for (poly, z_haut, z_bas) in polys:
            net = []
            for i in range(len(poly)):
                a, b = poly[i], poly[(i + 1) % len(poly)]
                net.append(a)
                ab = (b[0] - a[0], b[1] - a[1])
                lg2 = ab[0] ** 2 + ab[1] ** 2
                if lg2 < 1e-12:
                    continue
                sur = []
                for q in tous:
                    if q == a or q == b:
                        continue
                    t = ((q[0] - a[0]) * ab[0] + (q[1] - a[1]) * ab[1]) / lg2
                    if not (1e-6 < t < 1 - 1e-6):
                        continue
                    px, py = a[0] + t * ab[0], a[1] + t * ab[1]
                    if abs(px - q[0]) < TOL and abs(py - q[1]) < TOL:
                        sur.append((t, q))
                for _, q in sorted(sur):
                    if q != net[-1]:
                        net.append(q)
            decoupes.append((net, z_haut, z_bas))
        polys = decoupes
        for _ in range(2):
            tous = {q for (poly, _, _) in polys for q in poly}
            encore = []
            for (poly, z_haut, z_bas) in polys:
                net = []
                for i in range(len(poly)):
                    a, b = poly[i], poly[(i + 1) % len(poly)]
                    net.append(a)
                    ab = (b[0] - a[0], b[1] - a[1])
                    lg2 = ab[0] ** 2 + ab[1] ** 2
                    if lg2 < 1e-12:
                        continue
                    sur = []
                    for q in tous:
                        if q == a or q == b:
                            continue
                        t = ((q[0]-a[0])*ab[0] + (q[1]-a[1])*ab[1]) / lg2
                        if not (1e-6 < t < 1 - 1e-6):
                            continue
                        px, py = a[0] + t*ab[0], a[1] + t*ab[1]
                        if abs(px - q[0]) < TOL and abs(py - q[1]) < TOL:
                            sur.append((t, q))
                    for _, q in sorted(sur):
                        if q != net[-1]:
                            net.append(q)
                encore.append((net, z_haut, z_bas))
            polys = encore
        # index des arêtes : la clé est le couple de sommets arrondis au cm,
        # non orienté
        cle = lambda a, b: (min(a, b), max(a, b))
        voisins = {}
        for n, (poly, _, _) in enumerate(polys):
            for i in range(len(poly)):
                voisins.setdefault(cle(poly[i], poly[(i + 1) % len(poly)]),
                                   []).append(n)
        for n, (poly, z_haut, z_bas) in enumerate(polys):
            self.face([self.V(u, v, z_haut(u, v)) for (u, v) in poly])
            self.face([self.V(u, v, z_bas(u, v)) for (u, v) in poly][::-1])
            for i in range(len(poly)):
                a, b = poly[i], poly[(i + 1) % len(poly)]
                part = [k for k in voisins[cle(a, b)] if k != n]
                if part:
                    # marche entre deux pans de hauteurs différentes (noue de
                    # l'aile : 2,65 m d'écart). Sans ce mur le solide reste
                    # ouvert et l'on voit au travers.
                    zh_autre = polys[part[0]][1]
                    um, vm = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
                    if zh_autre(um, vm) < z_haut(um, vm) - 1e-6:
                        self.face([self.V(a[0], a[1], z_haut(*a)),
                                   self.V(a[0], a[1], zh_autre(*a)),
                                   self.V(b[0], b[1], zh_autre(*b)),
                                   self.V(b[0], b[1], z_haut(*b))][::-1])
                    # arête interne : mur seulement si les fonds diffèrent
                    zb_autre = polys[part[0]][2]
                    um, vm = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
                    if abs(zb_autre(um, vm) - z_bas(um, vm)) < 1e-6:
                        continue
                    if zb_autre(um, vm) > z_bas(um, vm):
                        continue          # le voisin le plus haut porte le mur
                    # mur sous un débord : le vide est du côté du morceau au
                    # fond le PLUS HAUT, donc à l'opposé de l'extérieur du
                    # contour — l'orientation s'inverse
                    haut = z_bas
                    bas = zb_autre
                    self.face([self.V(a[0], a[1], haut(*a)),
                               self.V(a[0], a[1], bas(*a)),
                               self.V(b[0], b[1], bas(*b)),
                               self.V(b[0], b[1], haut(*b))])
                    continue
                haut, bas = z_haut, z_bas
                self.face([self.V(a[0], a[1], haut(*a)),
                           self.V(a[0], a[1], bas(*a)),
                           self.V(b[0], b[1], bas(*b)),
                           self.V(b[0], b[1], haut(*b))][::-1])

    def prisme(self, poly, z_haut, z_bas):
        """Solide fermé : dessus donné par z_haut(u, v), fond par z_bas(u, v),
        murs verticaux sur le contour. Fermé quel que soit le polygone."""
        if len(poly) < 3:
            return
        if aire(poly) < 0:
            poly = poly[::-1]
        haut = [self.V(u, v, z_haut(u, v)) for (u, v) in poly]
        bas = [self.V(u, v, z_bas(u, v)) for (u, v) in poly]
        self.face(haut)
        self.face(bas[::-1])
        for i in range(len(poly)):
            j = (i + 1) % len(poly)
            # polygone anti-horaire : l'extérieur est à droite de l'arête i->j,
            # d'où cet ordre (l'inverse retournait les faces vers l'intérieur
            # et la sonde traversait les lucarnes)
            self.face([haut[i], bas[i], bas[j], haut[j]])

    def boite(self, u0, u1, v0, v1, z0, z1):
        self.prisme([(u0, v0), (u1, v0), (u1, v1), (u0, v1)],
                    lambda u, v: z1, lambda u, v: z0)




# ============================== bâtiment de la maquette ==============================
def lit_bati(z):
    """Positions/triangles quantifiés du bâti LoD2 (donnees.bin.gz, section
    'bati' — tous les bâtiments de la carte)."""
    meta = z.meta()
    buf = gzip.open(os.path.join(z.donnees, "donnees.bin.gz")).read()
    sec = meta["sections"]["bati"]
    nv, nt = sec["nv"], sec["nt"]
    pos = struct.unpack_from(f"<{nv * 3}h", buf, sec["pos_off"])
    dt = "I" if sec["isz"] == 4 else "H"
    tris = struct.unpack_from(f"<{nt * 3}{dt}", buf, sec["idx_off"])
    return nv, nt, pos, tris


def _parametres(z):
    p = dict(z.cfg.get("modele_precis") or {})
    p.setdefault("point", [0.0, 0.0])
    p.setdefault("z_toit_min", 0.0)
    p.setdefault("nz_min", 0.5)
    p.setdefault("taille_max", 40.0)
    return p


def composante_lod2(z):
    """(nv, nt, pos, tris, composante) : le maillage bati complet et les
    indices des triangles du seul bâtiment visé — la composante connexe dont
    un sommet est le plus proche de `modele_precis.point` (défaut : l'origine
    du repère local, c'est-à-dire le centre de la zone)."""
    from .extrait_pm3d import UnionFind
    prm = _parametres(z)
    px, py = prm["point"]
    nv, nt, pos, tris = lit_bati(z)
    uf = UnionFind()
    for t in range(nt):
        a, b, c = tris[t * 3], tris[t * 3 + 1], tris[t * 3 + 2]
        uf.union(a, b)
        uf.union(a, c)
    meilleur, d2min = 0, float("inf")
    for i in range(nv):
        d2 = (pos[i * 3] * Q - px) ** 2 + (pos[i * 3 + 1] * Q - py) ** 2
        if d2 < d2min:
            meilleur, d2min = i, d2
    racine = uf.find(meilleur)
    composante = [t for t in range(nt) if uf.find(tris[t * 3]) == racine]
    som = {tris[t * 3 + k] for t in composante for k in range(3)}
    xs = [pos[i * 3] * Q for i in som]
    ys = [pos[i * 3 + 1] * Q for i in som]
    if max(xs) - min(xs) > prm["taille_max"] or max(ys) - min(ys) > prm["taille_max"]:
        raise SystemExit("composante LoD2 suspecte (mitoyenne ?) : "
                         f"{max(xs) - min(xs):.0f} × {max(ys) - min(ys):.0f} m ; "
                         "ajuster modele_precis.point ou taille_max dans zone.json")
    return nv, nt, pos, tris, composante


def retire_lod2(z):
    """Triangles de TOITURE de la composante à remplacer : normale nettement
    montante (n.z > nz_min) et sommets au-dessus de z_toit_min (le niveau
    d'égout, en altitude locale). Les murs restent ceux de la maquette."""
    prm = _parametres(z)
    _, _, pos, tris, composante = composante_lod2(z)
    retire = []
    for t in composante:
        P = [(pos[i * 3] * Q, pos[i * 3 + 1] * Q, pos[i * 3 + 2] * Q)
             for i in (tris[t * 3], tris[t * 3 + 1], tris[t * 3 + 2])]
        ux, uy, uz = (P[1][k] - P[0][k] for k in range(3))
        vx, vy, vz = (P[2][k] - P[0][k] for k in range(3))
        nx, ny, nz = uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx
        norme = math.sqrt(nx * nx + ny * ny + nz * nz)
        if norme > 1e-9 and nz / norme > prm["nz_min"] \
                and min(p[2] for p in P) > prm["z_toit_min"]:
            retire.append(t)
    return retire


# ============================== export ==============================
def exporte_modele(z, mesh, retire, origine, source):
    """Sérialise mesh/retire au format lu par app.js (litMesh + litRetire) et
    écrit donnees/modele.bin.gz + modele_meta.json dans la zone."""
    nvx, nt = len(mesh.pos), len(mesh.idx)
    out = bytearray()
    for (qx, qy, qz) in mesh.pos:
        out += struct.pack("<hhH", qx, qy, max(0, qz))
    isz = 4 if nvx > 65535 else 2
    idx_off = len(out)
    dt = "I" if isz == 4 else "H"
    for (a, b, c) in mesh.idx:
        out += struct.pack(f"<3{dt}", a, b, c)
    sections = {"mesh": {"nv": nvx, "nt": nt, "isz": isz, "pos_off": 0,
                         "pos_len": idx_off, "idx_off": idx_off,
                         "idx_len": len(out) - idx_off}}
    off = len(out)
    out += struct.pack(f"<{len(retire)}I", *retire)
    sections["retire_bati"] = {"off": off, "len": len(out) - off,
                               "n": len(retire)}
    chemin = os.path.join(z.donnees, "modele.bin.gz")
    with open(chemin, "wb") as f:
        with gzip.GzipFile(fileobj=f, mode="wb", compresslevel=9, mtime=0) as g:
            g.write(bytes(out))
    json.dump({"zmin_ref": z.meta()["zmin_ref"], "q": mesh.q, "sections": sections,
               "etanche": not mesh.bords(), "origine": origine,
               "source": source},
              open(os.path.join(z.donnees, "modele_meta.json"), "w"))
    print(f"{chemin} : {os.path.getsize(chemin)} octets")
    return chemin


def resume(mesh, retire):
    """Bilan imprimé après construction ou import : étanchéité et retrait."""
    bords = mesh.bords()
    print(f"modèle : {len(mesh.pos)} sommets, {len(mesh.idx)} triangles ; "
          f"retrait LoD2 : {len(retire)} triangles")
    print(f"étanchéité : {len(bords)} arête(s) non appariée(s)")
    for (a, b) in bords[:10]:
        A, B = mesh.pos[a], mesh.pos[b]
        q = mesh.q
        print(f"    ({A[0]*q:+7.2f},{A[1]*q:+7.2f},{A[2]*q:6.2f}) -> "
              f"({B[0]*q:+7.2f},{B[1]*q:+7.2f},{B[2]*q:6.2f})")
    return bords
