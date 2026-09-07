#!/usr/bin/env python3
"""Prétraitement des données EMS pour la carte d'ensoleillement.

Les dalles de la Maquette 3D 2022 et le filaire de circulation sont
téléchargés automatiquement (API data.strasbourg.eu, cache dans
~/.cache/sun-shading/maquette2022/, ~45 Mo par dalle, partagé
entre les zones : une dalle ne se télécharge qu'une fois).

Usage : python3 sources/preprocess.py --zone <nom>
Sortie dans zones/<nom>/donnees/ : donnees.bin.gz (binaire quantifié) +
meta.json. Repère local : origine au centre de la zone (zone.json), X=est,
Y=nord, Z=altitude NGF (m).
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

from . import complement_bdtopo
from . import zone as zones
from .progression import Progression

OFF_X, OFF_Y = 2034999.975, 7254999.975        # offset des OBJ de la maquette
CELL_MNT = 10.0    # grille d'agrégation du MNT lointain (m)

# posés par construit() : le cache dépend de qui appelle (CLI ou intégration)
CACHE = BASE = None
API = "https://data.strasbourg.eu/api/explore/v2.1/catalog/datasets"

# Posés par principal() depuis zone.json. Variables de module plutôt que
# paramètres : elles traversent une dizaine de fonctions et n'y changent pas.
ZONE = None
CX = CY = 0.0
R_MAP = R_BUILD = R_TERRAIN = R_TREES = R_MNT_NATIF = 0.0
Q = zones.Q
FILAIRE = DONNEES = None


def assure_sources(progression):
    """Télécharge dalles maquette et filaire manquants (cache local)."""
    os.makedirs(BASE, exist_ok=True)
    # dalles de 409,6 m : tout ce qui intersecte le disque R_TERRAIN a son
    # centre à moins de R_TERRAIN + 290 m (demi-diagonale)
    where = (f"within_distance(geo_point_2d, geom'POINT({ZONE.lon} "
             f"{ZONE.lat})', {int(R_TERRAIN + 300)}m)")
    url = (f"{API}/odata3d_maquette_2022/records?"
           + urllib.parse.urlencode({"where": where, "limit": 99,
                                     "select": "dalle,url"}))
    with urllib.request.urlopen(url, timeout=30) as r:
        dalles = json.load(r)["results"]
    print(f"{len(dalles)} dalles maquette nécessaires")
    for i, d in enumerate(dalles):
        progression.compte(i, len(dalles), f"dalle {d['dalle']} ({i + 1}/{len(dalles)})")
        if os.path.isdir(os.path.join(BASE, d["dalle"])):
            continue
        print(f"  téléchargement {d['dalle']}…", flush=True)
        with urllib.request.urlopen(d["url"], timeout=300) as r:
            zipfile.ZipFile(io.BytesIO(r.read())).extractall(BASE)
    # le filaire est propre à la zone (export filtré par emprise)
    if not os.path.exists(FILAIRE):
        where = (f"within_distance(geo_point_2d, geom'POINT({ZONE.lon} "
                 f"{ZONE.lat})', {int(R_MAP + 410)}m)")
        url = (f"{API}/filaire-de-circulation/exports/geojson?"
               + urllib.parse.urlencode({"where": where}))
        print("téléchargement du filaire de circulation…", flush=True)
        urllib.request.urlretrieve(url, FILAIRE)


def parse_obj(path):
    """Retourne (verts [(x,y,z) coords CC48 complets], tris [(a,b,c)])."""
    verts = []
    tris = []
    with open(path) as f:
        for line in f:
            if line.startswith("v "):
                p = line.split()
                verts.append((float(p[1]) + OFF_X, float(p[2]) + OFF_Y, float(p[3])))
            elif line.startswith("f "):
                idx = []
                for tok in line.split()[1:]:
                    i = tok.split("/")[0]
                    idx.append(int(i) - 1)
                for k in range(1, len(idx) - 1):
                    tris.append((idx[0], idx[k], idx[k + 1]))
    return verts, tris


def dist2(x, y):
    return (x - CX) ** 2 + (y - CY) ** 2


class MeshAccum:
    """Accumule des triangles avec soudure de sommets (grille 1 cm)."""

    def __init__(self):
        self.vmap = {}
        self.verts = []
        self.tris = []

    def add(self, verts, tris, keep_r):
        r2 = keep_r * keep_r
        remap = {}
        for (a, b, c) in tris:
            va, vb, vc = verts[a], verts[b], verts[c]
            if (dist2(va[0], va[1]) > r2 and dist2(vb[0], vb[1]) > r2
                    and dist2(vc[0], vc[1]) > r2):
                continue
            ids = []
            for vi, v in ((a, va), (b, vb), (c, vc)):
                if vi in remap:
                    ids.append(remap[vi])
                    continue
                key = (round(v[0] * 100), round(v[1] * 100), round(v[2] * 100))
                gi = self.vmap.get(key)
                if gi is None:
                    gi = len(self.verts)
                    self.verts.append(v)
                    self.vmap[key] = gi
                remap[vi] = gi
                ids.append(gi)
            if ids[0] != ids[1] and ids[1] != ids[2] and ids[0] != ids[2]:
                self.tris.append(tuple(ids))

    def clear_file_state(self):
        pass


def decime_lointain(acc, r_natif, cellule):
    """Vertex clustering au-delà de r_natif : les sommets sont fusionnés sur
    une grille de `cellule` m (z moyen), les triangles dégénérés supprimés."""
    r2 = r_natif * r_natif
    cluster = {}   # clé grille -> [sx, sy, sz, n]
    remap = {}     # ancien indice -> nouvel indice
    verts = []
    for i, (x, y, z) in enumerate(acc.verts):
        if dist2(x, y) <= r2:
            remap[i] = len(verts)
            verts.append((x, y, z))
        else:
            key = (int(x // cellule), int(y // cellule))
            cluster.setdefault(key, []).append(i)
    for key, ids in cluster.items():
        gi = len(verts)
        n = len(ids)
        verts.append((sum(acc.verts[i][0] for i in ids) / n,
                      sum(acc.verts[i][1] for i in ids) / n,
                      sum(acc.verts[i][2] for i in ids) / n))
        for i in ids:
            remap[i] = gi
    tris = []
    vus = set()
    for (a, b, c) in acc.tris:
        t = (remap[a], remap[b], remap[c])
        if t[0] == t[1] or t[1] == t[2] or t[0] == t[2]:
            continue
        cle = tuple(sorted(t))
        if cle in vus:
            continue
        vus.add(cle)
        tris.append(t)
    print(f"  décimation : {len(acc.verts)} -> {len(verts)} sommets, "
          f"{len(acc.tris)} -> {len(tris)} tris")
    acc.verts, acc.tris = verts, tris


def build_mesh_bytes(acc, zmin_ref):
    n = len(acc.verts)
    pos = bytearray()
    for (x, y, z) in acc.verts:
        qx = round((x - CX) / Q)
        qy = round((y - CY) / Q)
        qz = round((z - zmin_ref) / Q)
        assert -32768 <= qx <= 32767 and -32768 <= qy <= 32767, (qx, qy)
        qz = max(0, min(65535, qz))
        pos += struct.pack("<hhH", qx, qy, qz)
    idx = bytearray()
    fmt = "<I" if n > 65535 else "<H"
    for t in acc.tris:
        for i in t:
            idx += struct.pack(fmt, i)
    return bytes(pos), bytes(idx), n, len(acc.tris), (4 if n > 65535 else 2)


def read_shp_points(shp_path):
    data = open(shp_path, "rb").read()
    pts = []
    pos = 100
    while pos < len(data):
        (_, clen) = struct.unpack(">2i", data[pos:pos + 8])
        st = struct.unpack("<i", data[pos + 8:pos + 12])[0]
        if st == 11:
            x, y, z = struct.unpack("<3d", data[pos + 12:pos + 36])
            pts.append((x, y, z))
        pos += 8 + clen * 2
    return pts


def read_dbf(dbf_path):
    data = open(dbf_path, "rb").read()
    n = struct.unpack("<I", data[4:8])[0]
    hdr = struct.unpack("<H", data[8:10])[0]
    rlen = struct.unpack("<H", data[10:12])[0]
    fields = []
    pos = 32
    while data[pos] != 0x0D:
        name = data[pos:pos + 11].split(b"\x00")[0].decode()
        length = data[pos + 16]
        fields.append((name, length))
        pos += 32
    recs = []
    for i in range(n):
        rec = data[hdr + i * rlen: hdr + (i + 1) * rlen]
        vals = {}
        p = 1
        for (name, length) in fields:
            raw = rec[p:p + length].strip()
            try:
                vals[name] = float(raw) if raw else 0.0
            except ValueError:
                vals[name] = 0.0
            p += length
        recs.append(vals)
    return recs


LARGEURS = {
    "autoroute": lambda nb: max(nb, 2) * 3.5 + 2.0,
    "bretelle d'accès": lambda nb: 4.5,
    "route": lambda nb: max(nb, 1) * 3.0 + 1.5,
    "voie cyclable": lambda nb: 2.2,
    "chemin": lambda nb: 2.5,
    "sentier": lambda nb: 1.5,
}
NATURES_TERRE = {"chemin", "sentier"}
Z_ROUTE = 0.18


class InterpolateurTIN:
    """Altitude du MNT en un point : interpolation linéaire dans le triangle
    du TIN qui le contient, sinon sommet le plus proche. Remplace
    scipy.interpolate (Delaunay sur les sommets) par le maillage réel, ce qui
    est plus fidèle et ne coûte aucune dépendance — l'intégration doit
    tourner dans Home Assistant avec la bibliothèque standard.

    Index spatial : une grille de cellules, chaque triangle inscrit dans
    toutes les cellules de sa boîte englobante."""

    CELLULE = 8.0

    def __init__(self, verts, tris, cx, cy):
        self.v = [(x - cx, y - cy, z) for (x, y, z) in verts]
        self.tris = tris
        self.cellules = {}
        c = self.CELLULE
        v = self.v
        for t, (a, b, d) in enumerate(tris):
            xs = (v[a][0], v[b][0], v[d][0])
            ys = (v[a][1], v[b][1], v[d][1])
            for i in range(int(min(xs) // c), int(max(xs) // c) + 1):
                for j in range(int(min(ys) // c), int(max(ys) // c) + 1):
                    self.cellules.setdefault((i, j), []).append(t)

    def z(self, x, y):
        c = self.CELLULE
        v = self.v
        for t in self.cellules.get((int(x // c), int(y // c)), ()):
            a, b, d = self.tris[t]
            (x1, y1, z1), (x2, y2, z2), (x3, y3, z3) = v[a], v[b], v[d]
            det = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3)
            if abs(det) < 1e-12:
                continue
            l1 = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / det
            l2 = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / det
            l3 = 1.0 - l1 - l2
            if l1 >= -1e-9 and l2 >= -1e-9 and l3 >= -1e-9:
                return l1 * z1 + l2 * z2 + l3 * z3
        return self._plus_proche(x, y)

    def _plus_proche(self, x, y):
        """Hors du TIN (bord de dalle manquante) : sommet le plus proche des
        cellules voisines, en élargissant l'anneau jusqu'à en trouver un."""
        c = self.CELLULE
        i0, j0 = int(x // c), int(y // c)
        for r in range(0, 200):
            meilleur, d2min = None, float("inf")
            for i in range(i0 - r, i0 + r + 1):
                for j in range(j0 - r, j0 + r + 1):
                    if max(abs(i - i0), abs(j - j0)) != r:
                        continue
                    for t in self.cellules.get((i, j), ()):
                        for k in self.tris[t]:
                            vx, vy, vz = self.v[k]
                            d2 = (vx - x) ** 2 + (vy - y) ** 2
                            if d2 < d2min:
                                meilleur, d2min = vz, d2
            if meilleur is not None:
                return meilleur
        raise ValueError(f"aucun sommet MNT près de ({x:.0f}, {y:.0f})")


def construit_routes(tin):
    """Rubans de voirie drapés sur le MNT (InterpolateurTIN, partagé avec le
    complément BD TOPO). Retourne (accum asphalte, accum terre)."""

    def z_sol(x, y):
        return tin.z(x, y) + Z_ROUTE

    feats = json.load(open(FILAIRE))["features"]
    asphalte, terre = MeshAccum(), MeshAccum()
    r2 = (R_MAP + 10.0) ** 2
    for f in feats:
        p = f["properties"]
        if p.get("niveau") == "tunnel" or p.get("niveau") == "pont":
            continue
        nature = p.get("nature") or "route"
        try:
            nb = int(p.get("voiture_nb_voie") or 0)
        except ValueError:
            nb = 0
        w2 = LARGEURS.get(nature, LARGEURS["route"])(nb) / 2.0
        acc = terre if nature in NATURES_TERRE else asphalte
        geom = f["geometry"]
        lines = geom["coordinates"] if geom["type"] == "MultiLineString" else [geom["coordinates"]]
        for line in lines:
            # projection locale + sous-division à 8 m
            loc = []
            for (lo, la) in line:
                x, y = zones.wgs84_vers_cc48(lo, la)
                loc.append((x - CX, y - CY))
            dense = [loc[0]]
            for i in range(1, len(loc)):
                x0, y0 = loc[i - 1]
                x1, y1 = loc[i]
                d = math.hypot(x1 - x0, y1 - y0)
                n = max(1, int(d // 8) + 1)
                for k in range(1, n + 1):
                    dense.append((x0 + (x1 - x0) * k / n, y0 + (y1 - y0) * k / n))
            dense = [q for q in dense]
            # quads par segment + disques aux sommets
            verts, tris = [], []

            def ajoute(v):
                verts.append((v[0] + CX, v[1] + CY, v[2]))
                return len(verts) - 1

            for i in range(1, len(dense)):
                x0, y0 = dense[i - 1]
                x1, y1 = dense[i]
                if x0 * x0 + y0 * y0 > r2 and x1 * x1 + y1 * y1 > r2:
                    continue
                dx, dy = x1 - x0, y1 - y0
                d = math.hypot(dx, dy)
                if d < 0.01:
                    continue
                nx, ny = -dy / d * w2, dx / d * w2
                z0, z1 = z_sol(x0, y0), z_sol(x1, y1)
                a = ajoute((x0 + nx, y0 + ny, z0))
                b = ajoute((x0 - nx, y0 - ny, z0))
                c = ajoute((x1 - nx, y1 - ny, z1))
                e = ajoute((x1 + nx, y1 + ny, z1))
                tris += [(a, b, c), (a, c, e)]
            for (x0, y0) in dense:
                if x0 * x0 + y0 * y0 > r2:
                    continue
                z0 = z_sol(x0, y0)
                centre = ajoute((x0, y0, z0))
                ring = [ajoute((x0 + w2 * math.cos(t * math.pi / 4),
                                y0 + w2 * math.sin(t * math.pi / 4), z0))
                        for t in range(8)]
                for t in range(8):
                    tris.append((centre, ring[t], ring[(t + 1) % 8]))
            acc.add(verts, tris, 1e9)
    return asphalte, terre


def construit(z, progression=None):
    """Maquette 3D → donnees.bin.gz + meta.json dans z.donnees."""
    global ZONE, CX, CY, R_MAP, R_BUILD, R_TERRAIN, R_TREES, R_MNT_NATIF
    global FILAIRE, DONNEES, CACHE, BASE
    progression = progression or Progression()
    CACHE = zones.dossier_cache("maquette2022")
    BASE = os.path.join(CACHE, "extracted")
    ZONE = z
    CX, CY = ZONE.cx, ZONE.cy
    R_MAP, R_BUILD = ZONE.rayons["carte"], ZONE.rayons["bati"]
    R_TERRAIN, R_TREES = ZONE.rayons["terrain"], ZONE.rayons["arbres"]
    R_MNT_NATIF = ZONE.rayons["mnt_natif"]
    FILAIRE = os.path.join(CACHE, f"filaire-{ZONE.nom}.geojson")
    DONNEES = ZONE.donnees
    os.makedirs(DONNEES, exist_ok=True)
    print(f"zone {ZONE.nom} : centre CC48 ({CX:.3f} ; {CY:.3f}), "
          f"rayon {R_MAP:g} m")
    progression.etape("téléchargement de la maquette 3D", 0.0, 0.6)
    assure_sources(progression)
    progression.etape("lecture des dalles", 0.6, 0.85)
    tiles = sorted(os.listdir(BASE))
    bati = MeshAccum()
    mnt = MeshAccum()
    ponts = MeshAccum()
    trees = []

    r2_build = R_BUILD ** 2
    for n_tile, tile in enumerate(tiles):
        progression.compte(n_tile, len(tiles), f"dalle {tile}")
        tdir = os.path.join(BASE, tile)
        # bâtiments : un OBJ par bâtiment -> filtre rapide sur bbox
        for objf in glob.glob(os.path.join(tdir, "BATI3D_LOD2", "*.obj")):
            verts, tris = parse_obj(objf)
            if not verts:
                continue
            if min(dist2(v[0], v[1]) for v in verts) > r2_build:
                continue
            bati.add(verts, tris, R_BUILD)
        for objf in glob.glob(os.path.join(tdir, "PONTS", "*.obj")):
            verts, tris = parse_obj(objf)
            if not verts:
                continue
            if min(dist2(v[0], v[1]) for v in verts) > r2_build:
                continue
            ponts.add(verts, tris, R_BUILD)
        for objf in glob.glob(os.path.join(tdir, "MNT", "*.obj")):
            verts, tris = parse_obj(objf)
            mnt.add(verts, tris, R_TERRAIN)
        # arbres
        for shpf in glob.glob(os.path.join(tdir, "VEGET3D_LOD2", "*.shp")):
            pts = read_shp_points(shpf)
            recs = read_dbf(shpf[:-4] + ".dbf")
            for (p, rec) in zip(pts, recs):
                if dist2(p[0], p[1]) <= R_TREES ** 2:
                    trees.append((p[0], p[1], p[2],
                                  rec.get("HAUTEUR", 0.0),
                                  rec.get("DIAMHOUPP", 0.0)))
        print(tile, "ok — bati v:", len(bati.verts), "mnt v:", len(mnt.verts),
              "arbres:", len(trees))

    # le TIN sert au drapage de la voirie ET au sol des bâtiments ajoutés ;
    # construit sur le MNT natif, avant sa décimation lointaine
    tin = InterpolateurTIN(mnt.verts, mnt.tris, CX, CY)

    # bâtiments postérieurs à la maquette 2022 (BD TOPO), sauf refus explicite
    complement = None
    if (ZONE.cfg.get("complement") or {}).get("bdtopo", True):
        progression.etape("bâtiments récents (BD TOPO)", 0.85, 0.88)
        print("complément BD TOPO…")
        complement = complement_bdtopo.construit(
            ZONE, bati, tin, CX, CY, progression,
            cache=os.path.join(CACHE, f"bdtopo-{ZONE.nom}.geojson"))

    progression.etape("drapage de la voirie", 0.88, 0.92)
    print("drapage de la voirie…")
    asphalte, terre = construit_routes(tin)
    print("voirie : asphalte", len(asphalte.verts), "v /", len(asphalte.tris),
          "tris ; terre", len(terre.verts), "v /", len(terre.tris), "tris")

    progression.etape("décimation et écriture", 0.92, 1.0)
    print("décimation du MNT lointain…")
    decime_lointain(mnt, R_MNT_NATIF, CELL_MNT)

    zmin = min(v[2] for v in mnt.verts)
    zmin_ref = math.floor(zmin) - 2.0

    out = bytearray()
    sections = {}
    for name, acc in (("bati", bati), ("mnt", mnt), ("ponts", ponts),
                      ("routes", asphalte), ("chemins", terre)):
        pos_b, idx_b, nv, nt, isz = build_mesh_bytes(acc, zmin_ref)
        sections[name] = {"nv": nv, "nt": nt, "isz": isz,
                          "pos_off": len(out), "pos_len": len(pos_b)}
        out += pos_b
        sections[name]["idx_off"] = len(out)
        sections[name]["idx_len"] = len(idx_b)
        out += idx_b

    tree_b = bytearray()
    for (x, y, z, h, d) in trees:
        qx = round((x - CX) / Q)
        qy = round((y - CY) / Q)
        qz = max(0, min(65535, round((z - zmin_ref) / Q)))
        qh = max(0, min(255, round(h * 4)))       # hauteur, pas de 25 cm
        qd = max(0, min(255, round(d * 4)))       # houppier, pas de 25 cm
        tree_b += struct.pack("<hhHBB", qx, qy, qz, qh, qd)
    sections["arbres"] = {"n": len(trees), "off": len(out), "len": len(tree_b)}
    out += tree_b

    meta = {
        "zone": ZONE.nom,
        "centre_cc48": [CX, CY],
        "centre_wgs84": [ZONE.lon, ZONE.lat],
        "zmin_ref": zmin_ref,
        "q": Q,
        "r_map": R_MAP,
        "r_bati": R_BUILD,
        "r_terrain": R_TERRAIN,
        "r_arbres": R_TREES,
        "sections": sections,
    }
    if complement is not None:
        meta["complement"] = complement
    with gzip.open(os.path.join(DONNEES, "donnees.bin.gz"), "wb",
                   compresslevel=9) as f:
        f.write(out)
    with open(os.path.join(DONNEES, "meta.json"), "w") as f:
        json.dump(meta, f)
    print("---")
    print("bati:", sections["bati"]["nv"], "v /", sections["bati"]["nt"], "tris")
    print("mnt:", sections["mnt"]["nv"], "v /", sections["mnt"]["nt"], "tris")
    print("ponts:", sections["ponts"]["nv"], "v /", sections["ponts"]["nt"], "tris")
    print("arbres:", len(trees))
    print("brut:", len(out), "octets ; gzip:",
          os.path.getsize(os.path.join(DONNEES, "donnees.bin.gz")))
    print("zmin_ref:", zmin_ref)
    progression.avance(1.0, "maquette prête")
    return meta


def principal():
    p = zones.argument_zone(argparse.ArgumentParser(
        description=__doc__.splitlines()[0]))
    construit(zones.resout(p.parse_args().zone))


if __name__ == "__main__":
    principal()
