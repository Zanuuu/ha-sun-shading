#!/usr/bin/env python3
"""Extrait du Photomaillage 3D 2022 de l'EMS autour du centre du projet.

Alimente le mode « Photo 3D » de la carte : un maillage photogrammétrique
texturé sur 200 m de rayon, au-delà duquel la vue satellite (orthophoto drapée
et façades texturées) prend le relais. Produit un maillage quantifié au format
de litMeshUV (int16 x,y + uint16 z,u,v, 10 octets/sommet), réparti en autant de
sections que d'atlas, et les listes de retrait des bâtiments texturés de la vue
satellite qu'il remplace (par composante connexe) ainsi que des arbres stylisés
de son emprise.

Deux partis pris dimensionnent la sortie :

- la résolution de chaque îlot UV décroît avec sa distance au centre (§ PALIERS).
  À résolution native (~1,7 cm/px), 200 m de rayon demanderaient plus de 2 Go de
  VRAM ; or à 150 m de distance caméra un pixel écran couvre déjà ~12 cm au sol ;
- les textures photogrammétriques portent l'éclairage de la prise de vue de juin
  2022. Sans correction, ces ombres cuites s'ajoutent aux ombres simulées. Un
  relèvement des basses lumières (--releve-ombres) les atténue en laissant les
  hautes lumières intactes.

Les dalles OBJ (100 m de côté, ~24 Mo pièce : un OBJ et une texture 8192²) sont
mises en cache dans ~/.cache/sun-shading/pm3d/ ; seules les manquantes
sont téléchargées. Compter ~1 Go de cache et 20-30 min pour un rayon de 200 m.

Usage : python3 sources/extrait_pm3d.py --zone <nom>   (après preprocess_sat.py)
Sorties dans zones/<nom>/donnees/ : pm3d.bin.gz, pm3d_meta.json,
pm3datlas<i>.webp.
"""
import argparse
import glob
import gzip
import io
import json
import math
import os
import struct
import urllib.parse
import urllib.request
import zipfile

from PIL import Image

Image.MAX_IMAGE_PIXELS = None  # atlas de dalle : 67 Mpx, au-dessus du garde-fou PIL

from . import zone as zones
from .progression import Progression

CACHE = None     # posé par construit()

OFF_X, OFF_Y = 2034999.975, 7254999.975  # offset des OBJ (maquette et pm3d)
API = ("https://data.strasbourg.eu/api/explore/v2.1/catalog/datasets/"
       "pm3d_2022/records")

# Posés par principal() depuis zone.json (rayon « photo ») et meta.json
R = 0.0          # rayon affiché du photomaillage
R_EXT = 0.0      # marge : un bâtiment remplacé n'est jamais coupé (R + 30)
R_TROU = 0.0     # perçage du MNT : recouvert par le photomaillage (R - 2)
DONNEES = None
META = None
CX_CC48 = CY_CC48 = LON = LAT = ZMIN_REF = 0.0
Q = zones.Q
CXO = CYO = 0.0  # centre dans le repère local des OBJ
ATLAS_PX = 4096
Q_WEBP = 80
PAD = 2                # marge en pixels autour de chaque îlot UV
MARGE_EMPREINTE = 1.0  # dilatation (m) de l'empreinte des bâtiments retirés
PAS_GRILLE = 0.5
GAMMA_DEFAUT = 0.78    # relèvement des ombres cuites de la prise de vue

# échelle de texture selon la distance de l'îlot au centre
PALIERS = ((60.0, 0.5), (130.0, 0.25), (float("inf"), 0.125))



def echelle(d):
    for limite, ech in PALIERS:
        if d <= limite:
            return ech
    return PALIERS[-1][1]


# ============================== dalles ==============================
def liste_dalles(rayon):
    """Dalles dont le centre est à moins de rayon+80 m (dalles de 100 m)."""
    where = (f"within_distance(geo_point_2d, geom'POINT({LON} {LAT})', "
             f"{int(rayon + 80)}m)")
    url = API + "?" + urllib.parse.urlencode({"where": where, "limit": 100})
    with urllib.request.urlopen(url, timeout=30) as r:
        res = json.load(r)["results"]
    return {d["numdalle"]: d["pm22_url"] for d in res}


def assure_dalle(num, url):
    d = os.path.join(CACHE, num)
    if not glob.glob(os.path.join(d, "**", f"PE_{num}_*.obj"), recursive=True):
        os.makedirs(CACHE, exist_ok=True)
        print(f"  téléchargement dalle {num}…", flush=True)
        with urllib.request.urlopen(url, timeout=300) as r:
            data = r.read()
        zipfile.ZipFile(io.BytesIO(data)).extractall(d)
    return glob.glob(os.path.join(d, "**", f"PE_{num}_*.obj"), recursive=True)[0]


def charge_obj(path):
    """(verts locaux centrés, vts, faces [(sommets, matériau)])."""
    verts, vts, faces = [], [], []
    mat = None
    for line in open(path):
        if line.startswith("v "):
            p = line.split()
            verts.append((float(p[1]) - CXO, float(p[2]) - CYO, float(p[3])))
        elif line.startswith("vt "):
            p = line.split()
            vts.append((float(p[1]), float(p[2])))
        elif line.startswith("usemtl"):
            mat = line.split()[1]
        elif line.startswith("f "):
            face = []
            for tok in line.split()[1:]:
                parts = tok.split("/")
                face.append((int(parts[0]) - 1, int(parts[1]) - 1))
            for k in range(1, len(face) - 1):
                faces.append(((face[0], face[k], face[k + 1]), mat))
    return verts, vts, faces


def charge_mtl(path):
    maps, cur = {}, None
    for line in open(path):
        p = line.split()
        if not p:
            continue
        if p[0] == "newmtl":
            cur = p[1]
        elif p[0] == "map_Kd" and cur:
            maps[cur] = p[1]
    return maps


# ============================== maquette ==============================
class UnionFind:
    def __init__(self):
        self.p = {}

    def find(self, a):
        p = self.p
        while p.setdefault(a, a) != a:
            p[a] = p[p[a]]
            a = p[a]
        return a

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra != rb:
            self.p[rb] = ra


class Shelf:
    """Rangement en étagères dans un atlas ATLAS_PX² (cf. preprocess_sat.py)."""

    def __init__(self):
        self.x = self.y = self.h = 0

    def place(self, w, h):
        if self.x + w > ATLAS_PX:
            self.y += self.h
            self.x = 0
            self.h = 0
        if self.y + h > ATLAS_PX:
            return None
        pos = (self.x, self.y)
        self.x += w
        self.h = max(self.h, h)
        return pos


def lit_section_mesh(buf, sec):
    """Positions (m, repère scène) et triangles d'une section donnees/sat."""
    stride = 6 if "uv" not in sec.get("fmt", "") else 10
    pos = []
    for i in range(sec["nv"]):
        o = sec["pos_off"] + i * stride
        x, y = struct.unpack_from("<hh", buf, o)
        z = struct.unpack_from("<H", buf, o + 4)[0]
        pos.append((x * Q, y * Q, z * Q))
    n = sec["nt"] * 3
    idx = struct.unpack_from(f"<{n}{'I' if sec['isz'] == 4 else 'H'}",
                             buf, sec["idx_off"])
    tris = [(idx[i], idx[i + 1], idx[i + 2]) for i in range(0, n, 3)]
    return pos, tris


def lit_arbres(buf, sec):
    """Positions XY des arbres stylisés (8 octets par arbre)."""
    out = []
    for i in range(sec["n"]):
        o = sec["off"] + i * 8
        x, y = struct.unpack_from("<hh", buf, o)
        out.append((x * Q, y * Q))
    return out


def tris_dans_disque(pos, tris, r):
    """Triangles dont les trois sommets tiennent dans le disque."""
    r2 = r * r
    dedans = [x * x + y * y <= r2 for (x, y, _) in pos]
    return [t for t, (a, b, c) in enumerate(tris)
            if dedans[a] and dedans[b] and dedans[c]]


def composantes_retirees(pos, tris, r, soudure=None, r_ext=None):
    """Indices des triangles des composantes ayant un sommet dans r.

    soudure : arrondi optionnel des positions pour souder les sommets
    dupliqués (sections satellite, sommets dédoublés par UV).
    r_ext : une composante qui déborde de ce rayon n'est pas couverte par le
    photomaillage — la retirer ouvrirait un trou, donc on la conserve."""
    cle = ((lambda i: (round(pos[i][0] / soudure), round(pos[i][1] / soudure),
                       round(pos[i][2] / soudure)))
           if soudure else (lambda i: i))
    uf = UnionFind()
    for (a, b, c) in tris:
        uf.union(cle(a), cle(b))
        uf.union(cle(a), cle(c))
    r2 = r * r
    dedans = set()
    for i, (x, y, _) in enumerate(pos):
        if x * x + y * y <= r2:
            dedans.add(uf.find(cle(i)))
    if r_ext is not None:
        rmax = {}
        for i, (x, y, _) in enumerate(pos):
            ra = uf.find(cle(i))
            if ra in dedans:
                d = math.hypot(x, y)
                if d > rmax.get(ra, 0.0):
                    rmax[ra] = d
        garde = {ra for ra in dedans if rmax.get(ra, 0.0) > r_ext}
        if garde:
            print(f"    {len(garde)} composante(s) débordant de r_ext "
                  "conservée(s) (un retrait laisserait un trou)")
        dedans -= garde
    return [t for t, (a, b, c) in enumerate(tris) if uf.find(cle(a)) in dedans]


def empreinte(pos, tris, retires):
    """Grille (PAS_GRILLE) de l'empreinte XY des triangles retirés, dilatée."""
    cells = set()
    dil = int(math.ceil(MARGE_EMPREINTE / PAS_GRILLE))
    for t in retires:
        a, b, c = tris[t]
        xs = (pos[a][0], pos[b][0], pos[c][0])
        ys = (pos[a][1], pos[b][1], pos[c][1])
        for ix in range(int(min(xs) / PAS_GRILLE) - dil,
                        int(max(xs) / PAS_GRILLE) + dil + 1):
            for iy in range(int(min(ys) / PAS_GRILLE) - dil,
                            int(max(ys) / PAS_GRILLE) + dil + 1):
                cells.add((ix, iy))
    return cells


# ============================== textures ==============================
def releve_ombres(img, gamma):
    """Remonte les basses lumières en laissant teinte et saturation intactes.

    Puissance sur la seule valeur (HSV) : 1**g == 1, les hautes lumières ne
    bougent pas. Les puissances se composent, d'où le réglage a posteriori
    possible par --atlas-seulement."""
    if abs(gamma - 1.0) < 1e-6:
        return img
    table = [round(255 * (i / 255) ** gamma) for i in range(256)]
    h, s, v = img.convert("HSV").split()
    return Image.merge("HSV", (h, s, v.point(table))).convert("RGB")


def ajuste_atlas(cible):
    """Ré-applique un autre relèvement aux atlas déjà produits (réglage rapide)."""
    chemin_meta = os.path.join(DONNEES, "pm3d_meta.json")
    meta = json.load(open(chemin_meta))
    courant = meta.get("releve_ombres", 1.0)
    if abs(cible - courant) < 1e-6:
        print(f"relèvement déjà à {cible}")
        return
    residuel = cible / courant
    print(f"relèvement {courant} -> {cible} (exposant résiduel {residuel:.4f})")
    for i in range(meta["n_atlas"]):
        p = os.path.join(DONNEES, f"pm3datlas{i}.webp")
        img = releve_ombres(Image.open(p).convert("RGB"), residuel)
        img.save(p, "WEBP", quality=Q_WEBP, method=5)
        print(f"  pm3datlas{i}.webp {os.path.getsize(p)} octets")
    meta["releve_ombres"] = cible
    json.dump(meta, open(chemin_meta, "w"))


# ============================== extraction ==============================
def extrait(dalles, buf_donnees, buf_sat, sat_meta, gamma, progression):
    print(f"— photomaillage : r={R} m, r_ext={R_EXT} m")

    # bâtiments de la maquette dans l'emprise : leur empreinte au sol étend la
    # découpe pm3d (jusqu'à R_EXT) pour ne jamais couper un bâtiment remplacé
    retire = {}
    pos_b, tris_b = lit_section_mesh(buf_donnees, META["sections"]["bati"])
    bati_remplaces = composantes_retirees(pos_b, tris_b, R, r_ext=R_EXT)
    # les bâtiments ajoutés depuis la BD TOPO sont postérieurs au
    # photomaillage 2022 : rien ne les y remplace, ils restent
    plage = (META.get("complement") or {}).get("tris")
    if plage:
        avant = len(bati_remplaces)
        bati_remplaces = [t for t in bati_remplaces if not plage[0] <= t < plage[1]]
        if avant != len(bati_remplaces):
            print(f"    {avant - len(bati_remplaces)} triangle(s) du complément "
                  "BD TOPO conservé(s) dans le disque photo")
    cells = empreinte(pos_b, tris_b, bati_remplaces)

    # retraits appliqués aux façades texturées de la vue satellite
    for nom_sec, sec in sat_meta["sections"].items():
        sec = dict(sec, fmt="" if nom_sec.endswith("reste") else "uv")
        pos_s, tris_s = lit_section_mesh(buf_sat, sec)
        retire["sat_" + nom_sec] = composantes_retirees(pos_s, tris_s, R,
                                                        soudure=0.02,
                                                        r_ext=R_EXT)
    # terrain percé sous le disque : le MNT (sol nu LiDAR drapé de l'ortho) et
    # le photomaillage sont deux reconstructions indépendantes du même sol, qui
    # divergent de 10 à 50 cm — un polygonOffset ne corrige que la coplanarité,
    # l'ortho transpercerait le photomaillage par plaques
    pos_m, tris_m = lit_section_mesh(buf_donnees, META["sections"]["mnt"])
    retire["mnt"] = tris_dans_disque(pos_m, tris_m, R_TROU)

    # arbres stylisés de l'emprise : le photomaillage porte les arbres réels
    r2 = R * R
    retire["arbres"] = [i for i, (x, y) in
                        enumerate(lit_arbres(buf_donnees, META["sections"]["arbres"]))
                        if x * x + y * y <= r2]
    print("  retraits :", {k: len(v) for k, v in retire.items()})

    # ---- sélection pm3d, dalle par dalle ----
    re2 = R_EXT * R_EXT
    ilots, geom, vmap_g = [], [], {}
    progression.etape("découpe des dalles du photomaillage", 0.4, 0.8)
    for n_dalle, (num, obj_path) in enumerate(sorted(dalles.items())):
        progression.compte(n_dalle, len(dalles), f"dalle {num}")
        verts, vts, faces = charge_obj(obj_path)
        maps = charge_mtl(obj_path[:-4] + ".mtl")
        keep = []
        for f, m in faces:
            x = sum(verts[vi][0] for vi, _ in f) / 3
            y = sum(verts[vi][1] for vi, _ in f) / 3
            d2 = x * x + y * y
            if d2 <= r2 or (d2 <= re2 and
                            (int(x / PAS_GRILLE), int(y / PAS_GRILLE)) in cells):
                keep.append((f, m))
        if not keep:
            continue
        for f, _m in keep:
            for vi, _ in f:
                if (num, vi) not in vmap_g:
                    vmap_g[(num, vi)] = len(geom)
                    geom.append(verts[vi])

        # îlots UV = composantes connexes dans l'espace des textures
        uf = UnionFind()
        for f, m in keep:
            (_, t0), (_, t1), (_, t2) = f
            uf.union((m, t0), (m, t1))
            uf.union((m, t0), (m, t2))
        groupes = {}
        for f, m in keep:
            groupes.setdefault(uf.find((m, f[0][1])), []).append((f, m))

        base = os.path.dirname(obj_path)
        images = {}
        for elems in groupes.values():
            mat = elems[0][1]
            tris = [f for f, _ in elems]
            if mat not in images:
                images[mat] = Image.open(os.path.join(base, maps[mat]))
            src = images[mat]
            W, H = src.size
            tset = {ti for tri in tris for _, ti in tri}
            us = [vts[ti][0] for ti in tset]
            ws = [vts[ti][1] for ti in tset]
            px0 = max(0, int(min(us) * W) - PAD)
            px1 = min(W, int(math.ceil(max(us) * W)) + PAD)
            py0 = max(0, int((1 - max(ws)) * H) - PAD)
            py1 = min(H, int(math.ceil((1 - min(ws)) * H)) + PAD)
            if px1 <= px0 or py1 <= py0:
                continue
            # échelle d'après la distance du centroïde de l'îlot au centre
            vset = {vi for tri in tris for vi, _ in tri}
            cx = sum(verts[vi][0] for vi in vset) / len(vset)
            cy = sum(verts[vi][1] for vi in vset) / len(vset)
            ech = echelle(math.hypot(cx, cy))
            # borné : un îlot doit tenir dans un atlas, marge de 1 px comprise
            w = max(1, min(ATLAS_PX - 2, int(math.ceil((px1 - px0) * ech))))
            h = max(1, min(ATLAS_PX - 2, int(math.ceil((py1 - py0) * ech))))
            # crop et redimensionnement immédiats : garder une référence vers
            # l'image de dalle ferait tenir 28 textures de 67 Mpx en mémoire
            cr = src.crop((px0, py0, px1, py1))
            if cr.size != (w, h):
                cr = cr.resize((w, h), Image.LANCZOS)
            ilots.append({"dalle": num, "tris": tris,
                          "uv": {ti: vts[ti] for ti in tset},
                          "src": (px0, py0, px1, py1), "w": w, "h": h,
                          "img": cr, "W": W, "H": H})
        for im in images.values():
            im.close()
        del verts, vts, faces, keep, groupes, images
        print(f"  dalle {num} : {len(ilots)} îlots cumulés", flush=True)

    nt_total = sum(len(i["tris"]) for i in ilots)
    print(f"  {nt_total} triangles, {len(geom)} sommets, {len(ilots)} îlots UV")

    # ---- orientation des faces et normales soudées ----
    # Orientation : la carte d'ombre est rendue par les faces arrière ; un
    # maillage tourné vers l'intérieur ne projetterait plus aucune ombre.
    # Normales : les sommets sont dédoublés par couple (sommet, uv) et les
    # îlots UV du photomaillage sont minuscules (~3 triangles), si bien qu'un
    # computeVertexNormals ferait de chaque frontière d'îlot une arête vive et
    # faciliterait tout le maillage. On les calcule donc ici, soudées par
    # position quantifiée, et on les expédie dans le binaire (3 octets/sommet).
    haut = bas = 0
    faces = []
    for il in ilots:
        d = il["dalle"]
        for (a, _), (b, _), (c, _) in il["tris"]:
            pa, pb, pc = (geom[vmap_g[(d, a)]], geom[vmap_g[(d, b)]],
                          geom[vmap_g[(d, c)]])
            ux, uy, uz = pb[0] - pa[0], pb[1] - pa[1], pb[2] - pa[2]
            vx, vy, vz = pc[0] - pa[0], pc[1] - pa[1], pc[2] - pa[2]
            nx, ny, nz = (uy * vz - uz * vy, uz * vx - ux * vz,
                          ux * vy - uy * vx)
            ln = math.sqrt(nx * nx + ny * ny + nz * nz)
            if ln < 1e-12:
                continue
            if abs(nz / ln) > 0.8:  # triangles quasi horizontaux
                if nz > 0:
                    haut += 1
                else:
                    bas += 1
            faces.append((pa, pb, pc, nx, ny, nz))
    part = 100 * haut / max(1, haut + bas)
    print(f"  orientation : {part:.1f} % de faces plates montantes "
          f"({haut} / {bas})")
    inverse = haut < bas
    if inverse:
        print("  maillage inversé -> inversion de l'enroulement")
        for il in ilots:
            il["tris"] = [(t[0], t[2], t[1]) for t in il["tris"]]

    normales = {}
    sgn = -1.0 if inverse else 1.0
    for pa, pb, pc, nx, ny, nz in faces:
        nx, ny, nz = nx * sgn, ny * sgn, nz * sgn
        for pt in (pa, pb, pc):
            k = (round(pt[0] / Q), round(pt[1] / Q), round(pt[2] / Q))
            acc = normales.get(k)
            if acc is None:
                normales[k] = [nx, ny, nz]
            else:
                acc[0] += nx
                acc[1] += ny
                acc[2] += nz
    del faces
    print(f"  {len(normales)} normales soudées")

    # ---- packing multi-atlas ----
    ilots.sort(key=lambda i: -i["h"])
    lots, shelf, cur = [], Shelf(), []
    for il in ilots:
        pos = shelf.place(il["w"] + 2, il["h"] + 2)
        if pos is None:
            lots.append(cur)
            cur, shelf = [], Shelf()
            pos = shelf.place(il["w"] + 2, il["h"] + 2)
            assert pos is not None, "îlot plus grand qu'un atlas"
        il["dst"] = (pos[0] + 1, pos[1] + 1)
        cur.append(il)
    lots.append(cur)
    print(f"  {len(lots)} atlas de {ATLAS_PX}²")

    progression.etape("atlas du photomaillage", 0.8, 0.95)
    for i, lot in enumerate(lots):
        progression.compte(i, len(lots), f"pm3datlas{i}.webp")
        at = Image.new("RGB", (ATLAS_PX, ATLAS_PX), (150, 148, 142))
        surf = 0
        for il in lot:
            at.paste(il["img"], il["dst"])
            surf += il["w"] * il["h"]
        at = releve_ombres(at, gamma)
        p = os.path.join(DONNEES, f"pm3datlas{i}.webp")
        at.save(p, "WEBP", quality=Q_WEBP, method=5)
        at.close()
        print(f"  pm3datlas{i}.webp ({surf / ATLAS_PX ** 2 * 100:.0f} % rempli) "
              f"{os.path.getsize(p)} octets")

    # ---- quantification, une section par atlas ----
    out = bytearray()
    sections = {}
    for i, lot in enumerate(lots):
        paires, pos_q, uv_q, index = {}, [], [], []
        for il in lot:
            px0, py0, px1, py1 = il["src"]
            dx, dy = il["dst"]
            W, H = il["W"], il["H"]
            sx = il["w"] / (px1 - px0)
            sy = il["h"] / (py1 - py0)
            for tri in il["tris"]:
                for vi, ti in tri:
                    k = (il["dalle"], vi, ti)
                    if k not in paires:
                        paires[k] = len(pos_q)
                        xg, yg, zg = geom[vmap_g[(il["dalle"], vi)]]
                        u, w = il["uv"][ti]
                        nu = ((u * W - px0) * sx + dx) / ATLAS_PX
                        nw = 1 - (((1 - w) * H - py0) * sy + dy) / ATLAS_PX
                        acc = normales[(round(xg / Q), round(yg / Q),
                                        round(zg / Q))]
                        ln = math.sqrt(acc[0] ** 2 + acc[1] ** 2 + acc[2] ** 2)
                        ln = ln if ln > 1e-12 else 1.0
                        pos_q.append((
                            round(xg / Q), round(yg / Q),
                            min(65535, max(0, round((zg - ZMIN_REF) / Q))),
                            max(-127, min(127, round(acc[0] / ln * 127))),
                            max(-127, min(127, round(acc[1] / ln * 127))),
                            max(-127, min(127, round(acc[2] / ln * 127)))))
                        uv_q.append((min(65535, max(0, round(nu * 65535))),
                                     min(65535, max(0, round(nw * 65535)))))
                    index.append(paires[k])
        nv, nt = len(pos_q), len(index) // 3
        isz = 4 if nv > 65535 else 2
        pos_off = len(out)
        for (x_, y_, z_, nx_, ny_, nz_), (u_, v_) in zip(pos_q, uv_q):
            out += struct.pack("<hhHHHbbb", x_, y_, z_, u_, v_, nx_, ny_, nz_)
        idx_off = len(out)
        out += struct.pack(f"<{len(index)}{'I' if isz == 4 else 'H'}", *index)
        sections[f"pm3d_tex{i}"] = {
            "nv": nv, "nt": nt, "isz": isz,
            "pos_off": pos_off, "pos_len": idx_off - pos_off,
            "idx_off": idx_off, "idx_len": len(out) - idx_off}
        print(f"  section pm3d_tex{i} : {nv} sommets / {nt} tris")

    # ---- listes de retrait (uint32) ----
    for k, lst in retire.items():
        off = len(out)
        out += struct.pack(f"<{len(lst)}I", *lst)
        sections["retire_" + k] = {"n": len(lst), "off": off,
                                   "len": len(out) - off}

    bin_path = os.path.join(DONNEES, "pm3d.bin.gz")
    with gzip.open(bin_path, "wb", compresslevel=9) as f:
        f.write(bytes(out))
    meta = {
        "r": R, "r_ext": R_EXT, "zmin_ref": ZMIN_REF, "q": Q,
        "n_atlas": len(lots), "atlas_px": ATLAS_PX, "releve_ombres": gamma,
        "stride": 13,  # int16 x,y ; uint16 z,u,v ; int8 nx,ny,nz
        "paliers": [[p, e] for p, e in PALIERS if p != float("inf")],
        "sections": sections,
        "source": "Photomaillage 3D 2022, Ville et Eurométropole de "
                  "Strasbourg (FEDER / DataGrandEst)",
        "dalles": sorted(dalles),
    }
    json.dump(meta, open(os.path.join(DONNEES, "pm3d_meta.json"), "w"))
    print(f"  pm3d.bin.gz {os.path.getsize(bin_path)} octets")


def construit(z, gamma=GAMMA_DEFAUT, progression=None, atlas_seulement=None):
    """Photomaillage → pm3d.bin.gz, pm3d_meta.json, pm3datlas<i>.webp."""
    global R, R_EXT, R_TROU, DONNEES, META, CX_CC48, CY_CC48, LON, LAT
    global ZMIN_REF, CXO, CYO, CACHE
    progression = progression or Progression()
    CACHE = zones.dossier_cache("pm3d")
    R = float(z.rayons["photo"])
    R_EXT, R_TROU = R + 30.0, R - 2.0
    DONNEES = z.donnees
    META = z.meta()
    CX_CC48, CY_CC48 = META["centre_cc48"]
    LON, LAT = META["centre_wgs84"]
    ZMIN_REF = META["zmin_ref"]
    CXO, CYO = CX_CC48 - OFF_X, CY_CC48 - OFF_Y

    if atlas_seulement is not None:
        ajuste_atlas(atlas_seulement)
        return

    progression.etape("téléchargement du photomaillage", 0.0, 0.4)
    dalles_urls = liste_dalles(R_EXT)
    print(f"{len(dalles_urls)} dalles couvrent le rayon {R_EXT} m")
    dalles = {}
    for i, (num, url) in enumerate(sorted(dalles_urls.items())):
        progression.compte(i, len(dalles_urls), f"dalle {num} ({i + 1}/{len(dalles_urls)})")
        dalles[num] = assure_dalle(num, url)

    buf_donnees = gzip.open(os.path.join(DONNEES, "donnees.bin.gz"), "rb").read()
    buf_sat = gzip.open(os.path.join(DONNEES, "sat.bin.gz"), "rb").read()
    sat_meta = json.load(open(os.path.join(DONNEES, "sat_meta.json")))
    extrait(dalles, buf_donnees, buf_sat, sat_meta, gamma, progression)
    progression.avance(1.0, "photomaillage prêt")


def principal():
    p = zones.argument_zone(argparse.ArgumentParser(
        description=__doc__.split("\n")[0]))
    p.add_argument("--releve-ombres", type=float, default=GAMMA_DEFAUT,
                   help="exposant de relèvement des ombres cuites (1 = aucun)")
    p.add_argument("--atlas-seulement", type=float, metavar="GAMMA",
                   help="ré-applique un relèvement aux atlas déjà produits")
    args = p.parse_args()
    construit(zones.resout(args.zone), args.releve_ombres,
              atlas_seulement=args.atlas_seulement)


if __name__ == "__main__":
    principal()
