"""Le livrable d'une zone : zones/<nom>/dist/ — manifest.json, binaires à
noms hachés, copie de panel.js et page autonome de quelques lignes.

Partie du build indépendante de node : l'intégration l'exécute avec le
panel.js qu'elle livre ; sources/build.py y ajoute l'assemblage du bundle.
"""
import glob
import hashlib
import json
import os
import shutil


def construit_zone(z, js):
    donnees, dist = z.donnees, z.dist
    meta = z.meta()
    sat_meta = json.load(open(f"{donnees}/sat_meta.json"))
    chemin_pm3d = f"{donnees}/pm3d_meta.json"
    pm3d_meta = json.load(open(chemin_pm3d)) if os.path.exists(chemin_pm3d) else None
    chemin_dom = f"{donnees}/modele_meta.json"
    dom_meta = json.load(open(chemin_dom)) if os.path.exists(chemin_dom) else None
    # liste des volets : repli du sélecteur de la page quand /api/states ne
    # ramène rien, et source des noms — donc des entity_id des capteurs
    volets = z.volets()

    fichiers = (["donnees.bin.gz", "sat.bin.gz", "ortho.webp"]
                + (["modele.bin.gz"] if dom_meta else [])
                + [f"atlas{i}.webp" for i in range(sat_meta["n_atlas"])]
                + (["pm3d.bin.gz"]
                   + [f"pm3datlas{i}.webp" for i in range(pm3d_meta["n_atlas"])]
                   if pm3d_meta else []))

    os.makedirs(dist, exist_ok=True)
    for ancien in glob.glob(os.path.join(dist, "*")):
        os.remove(ancien)
    noms = {}
    for f in fichiers:
        h = hashlib.sha256(open(os.path.join(donnees, f), "rb").read()).hexdigest()[:10]
        base, ext = f.split(".", 1)
        noms[f] = f"{base}.{h}.{ext}"
        shutil.copyfile(os.path.join(donnees, f), os.path.join(dist, noms[f]))
    res = {
        "donnees": noms["donnees.bin.gz"],
        "sat": noms["sat.bin.gz"],
        "ortho": noms["ortho.webp"],
        "atlas": [noms[f"atlas{i}.webp"] for i in range(sat_meta["n_atlas"])],
    }
    if dom_meta:
        res["modele"] = noms["modele.bin.gz"]
    if pm3d_meta:
        res["pm3d"] = noms["pm3d.bin.gz"]
        res["pm3datlas"] = [noms[f"pm3datlas{i}.webp"]
                            for i in range(pm3d_meta["n_atlas"])]
    manifest = {
        "zone": z.nom, "titre": z.titre, "lieu": z.lieu,
        "donnees_meta": meta, "sat_meta": sat_meta, "pm3d_meta": pm3d_meta,
        "modele_meta": dom_meta, "volets": volets, "res": res,
    }
    with open(os.path.join(dist, "manifest.json"), "w") as f:
        json.dump(manifest, f)

    open(os.path.join(dist, "panel.js"), "w").write(js)

    # page autonome : un squelette qui monte le même élément
    skel = f"""<!doctype html>
<html lang="fr">
<meta charset="utf-8">
<title>{z.titre}</title>
<meta name="viewport" content="width=device-width, initial-scale=1, \
maximum-scale=1, user-scalable=no, viewport-fit=cover">
<style>
  html, body {{ height: 100%; margin: 0 }}
  sun-shading {{ display: block; height: 100% }}
</style>
<sun-shading></sun-shading>
<script type="module" src="panel.js"></script>
</html>
"""
    chemin = os.path.join(dist, z.livrable)
    open(chemin, "w").write(skel)
    print(chemin, os.path.getsize(chemin), "octets")
    print(f"  + manifest.json, panel.js, {len(fichiers)} binaires,",
          sum(os.path.getsize(os.path.join(dist, n)) for n in noms.values()), "octets")

