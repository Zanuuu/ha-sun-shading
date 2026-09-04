#!/usr/bin/env python3
"""Importe une toiture modelée à la main (Blender, ou tout outil exportant du
Wavefront OBJ) comme modèle précis du bâtiment de la zone.

C'est LA voie générique pour un modèle précis : le toit est dessiné dans un
outil 3D, ce script le sérialise, et la carte remplace par lui la toiture
LoD2 du bâtiment désigné par zone.json › modele_precis (par défaut, celui
du centre de la zone).

Repère attendu : X=est, Y=nord, Z=altitude locale (mètres au-dessus de
zmin_ref, cf. meta.json), origine au centre de la zone. AUCUNE conversion
d'axe n'est appliquée ici : si Blender a changé la convention (Y-avant/Z-haut
par défaut selon les versions), les coordonnées seront fausses en silence.
Premier usage conseillé : un aller-retour à blanc — import dans Blender d'un
OBJ connu, export immédiat sans modification, puis ce script — pour vérifier
que la géométrie revient inchangée.

Le volume doit être FERMÉ et descendre sous le terrain : la technique
d'ombre de la carte (BackSide, sans auto-ombrage) décolle les ombres du pied
d'un mur ouvert. Le script imprime les arêtes non appariées.

Usage : python3 sources/importe_toit_obj.py --zone <nom> toiture.obj [--note …]
Écrit zones/<nom>/donnees/modele.bin.gz + modele_meta.json, en écrasant
tout modèle précédent (jamais de fusion).
"""
import argparse
import datetime
import os

from . import zone as zones
from .modele_precis import Mesh, Q, exporte_modele, resume, retire_lod2


def lit_obj(chemin):
    """dict nom -> (positions [(x,y,z)], triangles [(a,b,c)]), triangulé en
    éventail si les faces ne sont pas déjà des triangles."""
    objets = {}
    nom, pos, tris = "toiture", [], []
    with open(chemin) as f:
        for ligne in f:
            if ligne.startswith("o "):
                if pos or tris:
                    objets[nom] = (pos, tris)
                nom, pos, tris = ligne.split(None, 1)[1].strip(), [], []
            elif ligne.startswith("v "):
                x, y, z = (float(v) for v in ligne.split()[1:4])
                pos.append((x, y, z))
            elif ligne.startswith("f "):
                idx = [int(tok.split("/")[0]) - 1 for tok in ligne.split()[1:]]
                for k in range(1, len(idx) - 1):
                    tris.append((idx[0], idx[k], idx[k + 1]))
    if pos or tris:
        objets[nom] = (pos, tris)
    return objets


def choisit_toiture(objets):
    candidats = [n for n in objets if "toiture" in n.lower()]
    if candidats:
        return objets[candidats[0]]
    if len(objets) == 1:
        return next(iter(objets.values()))
    raise SystemExit(
        "plusieurs objets dans l'OBJ et aucun nommé « toiture » : "
        f"{sorted(objets)} — supprimer l'objet de référence avant l'export "
        "final depuis Blender, ou nommer l'objet édité explicitement")


def principal():
    p = zones.argument_zone(argparse.ArgumentParser(
        description=__doc__.splitlines()[0]))
    p.add_argument("obj", help="fichier OBJ édité (export Blender)")
    p.add_argument("--note", help="description de la modification, "
                                   "consignée dans modele_meta.json")
    args = p.parse_args()
    importe(zones.resout(args.zone), args.obj, args.note)


def importe(z, chemin_obj, note=None):
    """Sérialise l'OBJ comme modèle précis de la zone (modele.bin.gz)."""
    pos, tris = choisit_toiture(lit_obj(chemin_obj))
    if not pos or not tris:
        raise SystemExit(f"{chemin_obj} : aucun sommet ou triangle lu")

    mesh = Mesh(Q)
    idx = [mesh.Vxy(x, y, zz) for (x, y, zz) in pos]
    for (a, b, c) in tris:
        mesh.tri(idx[a], idx[b], idx[c])

    n_ret = mesh.oriente()
    retire = retire_lod2(z)
    print(f"orientation : {n_ret} face(s) retournée(s)")
    if resume(mesh, retire):
        print("  ATTENTION : un volume non fermé peut décoller les ombres du "
              "pied des murs (technique d'ombre BackSide sans auto-ombrage, "
              "cf. CLAUDE.md « Faits techniques »). Vérifier que ces bords "
              "correspondent bien à la jupe basse et à rien d'autre.")

    note = note or (
        f"Toiture éditée manuellement (Blender), importée depuis "
        f"{os.path.basename(chemin_obj)} le "
        f"{datetime.date.today().isoformat()}.")
    return exporte_modele(z, mesh, retire, "manuel-blender", note)


if __name__ == "__main__":
    principal()
