#!/usr/bin/env python3
"""Vue satellite : atlas ortho du MNT + bâtiments LoD2 texturés.

Usage : python3 sources/preprocess_sat.py --zone <nom>   (après preprocess.py)
Sorties dans zones/<nom>/donnees/ :
  ortho.webp          atlas terrain, monde [-EX_T, EX_T]²
  atlas<i>.webp       atlas de façades
  sat.bin.gz          maillages quantifiés (bati_tex par atlas + bati_reste)
  sat_meta.json
"""
import argparse
import glob
import gzip
import json
import math
import os
import struct

from PIL import Image

from . import zone as zones
from .progression import Progression

OFF_X, OFF_Y = 2034999.975, 7254999.975
TUILE = 409.6
Q = zones.Q
ORTHO_PX = 8192
ATLAS_PX = 4096
MARGE_ATLAS = 40.0    # l'atlas terrain déborde le rayon du MNT de cette marge
# taille max conservée par texture de bâtiment, dégressive avec la distance
def max_tex(d):
    return 256 if d <= 470 else (96 if d <= 800 else 64)

# dalles téléchargées par preprocess.py (à lancer en premier) ; posé par construit()
BASE = None

# Posés par principal() depuis zone.json et meta.json (cf. preprocess.py)
CX = CY = 0.0
EX_T = R_TEX = R_BUILD = 0.0   # demi-étendue de l'atlas terrain ; rayons
ZMIN_REF = 0.0                 # même référence altimétrique que donnees.bin.gz
COMPLEMENT = None              # compte rendu du complément BD TOPO (meta.json)
OUT = None

Image.MAX_IMAGE_PIXELS = None


def construit_ortho(progression):
    ech = ORTHO_PX / (2 * EX_T)  # px par mètre
    atlas = Image.new("RGB", (ORTHO_PX, ORTHO_PX), (141, 145, 128))
    for jf in glob.glob(os.path.join(BASE, "*", "MNT", "*.jpg")):
        dalle = os.path.basename(jf).replace("MNT_", "").replace(".jpg", "")
        x0 = int(dalle.split("_")[0]) / 1000.0
        y0 = int(dalle.split("_")[1]) / 1000.0
        # coins de la dalle en coordonnées locales
        lx0, ly0 = x0 - CX, y0 - CY
        im = Image.open(jf)
        # dimension cible de la dalle dans l'atlas
        w = int(round(TUILE * ech))
        im = im.resize((w, w), Image.LANCZOS)
        # position dans l'atlas : x vers l'est, y image vers le bas = sud -> nord en haut
        ax = int(round((lx0 + EX_T) * ech))
        ay = int(round((EX_T - (ly0 + TUILE)) * ech))
        atlas.paste(im, (ax, ay))
    atlas = atlas.resize((5632, 5632), Image.LANCZOS)
    atlas.save(os.path.join(OUT, "ortho.webp"), "WEBP", quality=68, method=5)
    print("ortho.webp", os.path.getsize(os.path.join(OUT, "ortho.webp")), "octets,",
          round(2 * EX_T / 5632 * 100), "cm/px")


def parse_obj_uv(path):
    """(verts locaux, uvs, faces [(vi,ti)x3...]) — triangulation en éventail."""
    vs, ts, faces = [], [], []
    with open(path) as f:
        for line in f:
            if line.startswith("v "):
                p = line.split()
                vs.append((float(p[1]) + OFF_X - CX, float(p[2]) + OFF_Y - CY, float(p[3])))
            elif line.startswith("vt "):
                p = line.split()
                ts.append((float(p[1]), float(p[2])))
            elif line.startswith("f "):
                c = []
                for tok in line.split()[1:]:
                    a = tok.split("/")
                    vi = int(a[0]) - 1
                    ti = int(a[1]) - 1 if len(a) > 1 and a[1] else 0
                    c.append((vi, ti))
                for k in range(1, len(c) - 1):
                    faces.append((c[0], c[k], c[k + 1]))
    return vs, ts, faces


class Shelf:
    """Rangement en étagères dans un atlas ATLAS_PX²."""

    def __init__(self):
        self.x = 0
        self.y = 0
        self.h = 0

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


def ajoute_complement(reste):
    """Triangles du complément BD TOPO (plage `complement.tris` de meta.json),
    relus dans donnees.bin.gz et versés dans le bâti non texturé. Retourne le
    nombre de bâtiments ajoutés."""
    plage = (COMPLEMENT or {}).get("tris")
    if not plage or plage[1] <= plage[0]:
        return 0
    meta = json.load(open(os.path.join(OUT, "meta.json")))
    sec = meta["sections"]["bati"]
    buf = gzip.open(os.path.join(OUT, "donnees.bin.gz")).read()
    dt = "I" if sec["isz"] == 4 else "H"
    remap = {}
    for t in range(plage[0], plage[1]):
        idx = struct.unpack_from(f"<3{dt}", buf, sec["idx_off"] + t * 3 * sec["isz"])
        ids = []
        for i in idx:
            gi = remap.get(i)
            if gi is None:
                qx, qy, qz = struct.unpack_from("<hhH", buf, sec["pos_off"] + i * 6)
                gi = len(reste["verts"])
                reste["verts"].append((qx * Q, qy * Q, qz * Q + ZMIN_REF))
                remap[i] = gi
            ids.append(gi)
        reste["tris"].append(tuple(ids))
    return len(COMPLEMENT.get("batiments") or [])


def construit_facades(progression):
    os.makedirs(OUT, exist_ok=True)

    reste = {"verts": [], "tris": []}
    r2tex, r2build = R_TEX ** 2, R_BUILD ** 2
    a_texturer = []
    n_reste = 0

    tiles = sorted(os.listdir(BASE))
    for n_tile, tile in enumerate(tiles):
        progression.compte(n_tile, len(tiles), f"façades de la dalle {tile}")
        for objf in glob.glob(os.path.join(BASE, tile, "BATI3D_LOD2", "*.obj")):
            vs, ts, faces = parse_obj_uv(objf)
            if not vs:
                continue
            d2 = min(v[0] * v[0] + v[1] * v[1] for v in vs)
            if d2 > r2build:
                continue
            jf = objf[:-4] + ".jpg"
            if d2 <= r2tex and os.path.exists(jf) and ts:
                im = Image.open(jf).convert("RGB")
                w, h = im.size
                mt = max_tex(math.sqrt(d2))
                if max(w, h) > mt:
                    k = mt / max(w, h)
                    im = im.resize((max(1, int(w * k)), max(1, int(h * k))), Image.LANCZOS)
                a_texturer.append((im, vs, ts, faces))
            else:
                n_reste += 1
                base = len(reste["verts"])
                remap = {}
                for tri in faces:
                    ids = []
                    for (vi, _) in tri:
                        gi = remap.get(vi)
                        if gi is None:
                            gi = len(reste["verts"])
                            reste["verts"].append(vs[vi])
                            remap[vi] = gi
                        ids.append(gi)
                    if ids[0] != ids[1] and ids[1] != ids[2] and ids[0] != ids[2]:
                        reste["tris"].append(tuple(ids))
        print(tile, "ok")

    # bâtiments ajoutés depuis la BD TOPO : ils ne sont dans aucune dalle,
    # et la vue satellite cache le bâti de la maquette — sans eux ici, une
    # maison récente disparaîtrait en changeant de fond de carte
    n_complement = ajoute_complement(reste)

    # rangement des textures par hauteur décroissante pour un bon remplissage
    a_texturer.sort(key=lambda e: -e[0].size[1])
    atlases = [Image.new("RGB", (ATLAS_PX, ATLAS_PX), (180, 175, 165))]
    shelves = [Shelf()]
    tex = [{"verts": [], "tris": []}]
    n_tex = 0
    for (im, vs, ts, faces) in a_texturer:
        w, h = im.size
        pos = shelves[-1].place(w + 2, h + 2)
        if pos is None:
            atlases.append(Image.new("RGB", (ATLAS_PX, ATLAS_PX), (180, 175, 165)))
            shelves.append(Shelf())
            tex.append({"verts": [], "tris": []})
            pos = shelves[-1].place(w + 2, h + 2)
        ax, ay = pos[0] + 1, pos[1] + 1
        atlases[-1].paste(im, (ax, ay))
        acc = tex[-1]
        n_tex += 1
        remap = {}
        for tri in faces:
            ids = []
            for (vi, ti) in tri:
                key = (vi, ti)
                gi = remap.get(key)
                if gi is None:
                    x, y, z = vs[vi]
                    if ti < len(ts):
                        u0 = min(max(ts[ti][0], 0.0), 1.0)
                        v0 = min(max(ts[ti][1], 0.0), 1.0)
                    else:
                        u0 = v0 = 0.0
                    ua = (ax + u0 * w) / ATLAS_PX
                    va = 1.0 - (ay + (1.0 - v0) * h) / ATLAS_PX
                    gi = len(acc["verts"])
                    acc["verts"].append((x, y, z, ua, va))
                    remap[key] = gi
                ids.append(gi)
            if ids[0] != ids[1] and ids[1] != ids[2] and ids[0] != ids[2]:
                acc["tris"].append(tuple(ids))

    out = bytearray()
    sections = {}
    for i, acc in enumerate(tex):
        nv = len(acc["verts"])
        pos_b = bytearray()
        for (x, y, z, u, v) in acc["verts"]:
            pos_b += struct.pack("<hhHHH",
                                 round(x / Q), round(y / Q),
                                 max(0, min(65535, round((z - ZMIN_REF) / Q))),
                                 max(0, min(65535, round(u * 65535))),
                                 max(0, min(65535, round(v * 65535))))
        fmt = "<I" if nv > 65535 else "<H"
        idx_b = bytearray()
        for t in acc["tris"]:
            for j in t:
                idx_b += struct.pack(fmt, j)
        sections[f"bati_tex{i}"] = {
            "nv": nv, "nt": len(acc["tris"]), "isz": 4 if nv > 65535 else 2,
            "pos_off": len(out), "pos_len": len(pos_b)}
        out += pos_b
        sections[f"bati_tex{i}"]["idx_off"] = len(out)
        sections[f"bati_tex{i}"]["idx_len"] = len(idx_b)
        out += idx_b

    nv = len(reste["verts"])
    pos_b = bytearray()
    for (x, y, z) in reste["verts"]:
        pos_b += struct.pack("<hhH", round(x / Q), round(y / Q),
                             max(0, min(65535, round((z - ZMIN_REF) / Q))))
    fmt = "<I" if nv > 65535 else "<H"
    idx_b = bytearray()
    for t in reste["tris"]:
        for j in t:
            idx_b += struct.pack(fmt, j)
    sections["bati_reste"] = {"nv": nv, "nt": len(reste["tris"]),
                              "isz": 4 if nv > 65535 else 2,
                              "pos_off": len(out), "pos_len": len(pos_b)}
    out += pos_b
    sections["bati_reste"]["idx_off"] = len(out)
    sections["bati_reste"]["idx_len"] = len(idx_b)
    out += idx_b

    progression.etape("écriture des atlas", 0.8, 1.0)
    for i, a in enumerate(atlases):
        progression.compte(i, len(atlases), f"atlas{i}.webp")
        a.save(os.path.join(OUT, f"atlas{i}.webp"), "WEBP",
               quality=78, method=5)

    meta = {"ex_t": EX_T, "n_atlas": len(atlases), "q": Q, "zmin_ref": ZMIN_REF,
            "sections": sections}
    with gzip.open(os.path.join(OUT, "sat.bin.gz"), "wb",
                   compresslevel=9) as f:
        f.write(out)
    with open(os.path.join(OUT, "sat_meta.json"), "w") as f:
        json.dump(meta, f)
    print("bâtiments texturés:", n_tex,
          "| blancs:", n_reste, "| BD TOPO:", n_complement, "| atlas:", len(atlases))
    for i in range(len(atlases)):
        print(f"atlas{i}.webp",
              os.path.getsize(os.path.join(OUT, f"atlas{i}.webp")))
    print("sat.bin.gz", os.path.getsize(os.path.join(OUT, "sat.bin.gz")))
    for k, s in sections.items():
        print(k, s["nv"], "v /", s["nt"], "tris")


def construit(z, progression=None, ortho_px=None):
    """Vue satellite → ortho.webp, atlas<i>.webp, sat.bin.gz, sat_meta.json."""
    global CX, CY, EX_T, R_TEX, R_BUILD, ZMIN_REF, OUT, BASE, ORTHO_PX, COMPLEMENT
    progression = progression or Progression()
    BASE = os.path.join(zones.dossier_cache("maquette2022"), "extracted")
    if ortho_px:
        ORTHO_PX = int(ortho_px)
    meta = z.meta()
    CX, CY = meta["centre_cc48"]
    ZMIN_REF = meta["zmin_ref"]
    COMPLEMENT = meta.get("complement")
    EX_T = z.rayons["terrain"] + MARGE_ATLAS
    R_TEX, R_BUILD = z.rayons["textures"], z.rayons["bati"]
    OUT = z.donnees
    print(f"zone {z.nom} : atlas terrain ±{EX_T:g} m, façades texturées "
          f"jusqu'à {R_TEX:g} m")
    progression.etape("orthophoto", 0.0, 0.25)
    construit_ortho(progression)
    progression.etape("façades texturées", 0.25, 0.8)
    construit_facades(progression)
    progression.avance(1.0, "vue satellite prête")


def principal():
    p = zones.argument_zone(argparse.ArgumentParser(
        description=__doc__.splitlines()[0]))
    construit(zones.resout(p.parse_args().zone))


if __name__ == "__main__":
    principal()
