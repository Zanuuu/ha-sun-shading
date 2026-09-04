#!/usr/bin/env python3
"""Dépose les données d'une zone dans la configuration de Home Assistant.

Usage : python3 sources/deploie_ha.py --zone <nom> --hote <ip|nom> [--dossier …]

Copie zones/<nom>/dist/ (manifest, binaires à noms hachés, page autonome,
copie de panel.js — produit par build.py) vers //<hote>/<partage>/<dossier>/,
le dossier que l'intégration sun_shading sert sous /sun_shading/data/
(dossier choisi à sa configuration, défaut sun_shading/ à la racine de
config/). Vérifie d'abord que le build
n'est pas plus vieux que les sources ; purge ensuite les binaires distants
périmés (noms hachés absents du build courant). smbclient évite montage et
sudo ; les identifiants du partage Samba vivent dans un fichier local hors
dépôt (format smbclient -A : lignes « username = … », « password = … »).

Le script n'écrit rien d'autre dans config/ : Home Assistant est en
production. Sans Samba, copier le dossier à la main revient au même.
"""
import argparse
import os
import re
import subprocess
import sys

import zone as zones

RACINE = zones.RACINE
AUTH_DEFAUT = os.path.expanduser("~/.config/sun-shading/smb_auth")


def erreur(msg):
    print(f"erreur : {msg}", file=sys.stderr)
    sys.exit(1)


def mtime_max(dossier):
    pires = 0.0
    for racine, _, fichiers in os.walk(dossier):
        for f in fichiers:
            pires = max(pires, os.path.getmtime(os.path.join(racine, f)))
    return pires


def smbclient(args_ns, commandes, tolere_echec=False):
    cmd = ["smbclient", f"//{args_ns.hote}/{args_ns.partage}",
           "-A", args_ns.auth, "-c", commandes]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
    if r.returncode != 0 and not tolere_echec:
        erreur(f"smbclient a échoué ({' '.join(cmd[:2])}) :\n{r.stdout}{r.stderr}")
    return r


def principal():
    p = zones.argument_zone(argparse.ArgumentParser(
        description=__doc__.splitlines()[0]))
    p.add_argument("--hote", default=os.environ.get("SUN_SHADING_HOTE"),
                   help="hôte Samba de Home Assistant (défaut : $SUN_SHADING_HOTE)")
    p.add_argument("--partage", default="config")
    p.add_argument("--dossier", default=os.environ.get("SUN_SHADING_DOSSIER",
                                                       "sun_shading"),
                   help="dossier de données dans config/, celui déclaré à "
                        "l'intégration (défaut : %(default)s)")
    p.add_argument("--auth", default=os.environ.get("SUN_SHADING_AUTH", AUTH_DEFAUT),
                   help="fichier d'identifiants smbclient (défaut : %(default)s)")
    p.add_argument("--reconstruire", action="store_true",
                   help="lance build.py avant la copie si le livrable est périmé")
    args = p.parse_args()
    if not args.hote:
        erreur("hôte inconnu : --hote ou SUN_SHADING_HOTE")
    z = zones.resout(args.zone)

    nom = z.livrable
    dist = z.dist
    livrable = os.path.join(dist, nom)
    if not os.path.exists(livrable):
        erreur(f"livrable absent : {livrable} "
               f"(exécute python3 sources/build.py --zone {z.nom})")
    if not os.path.exists(args.auth):
        erreur(f"fichier d'identifiants absent : {args.auth}")

    # le build doit être plus récent que ce qui y entre
    # (liste explicite : deploie_ha.py et les prétraitements n'en font pas partie)
    entrees = [os.path.join(RACINE, "sources", f)
               for f in ("build.py", "page-template.html", "app.js")]
    sources = max(mtime_max(z.donnees), os.path.getmtime(z.ouvertures)
                  if os.path.exists(z.ouvertures) else 0,
                  *(os.path.getmtime(f) for f in entrees))
    if os.path.getmtime(livrable) < sources:
        if not args.reconstruire:
            erreur("le build est plus vieux que les sources ; relance avec "
                   f"--reconstruire ou exécute python3 sources/build.py --zone {z.nom}")
        r = subprocess.run([sys.executable, os.path.join(RACINE, "sources", "build.py"),
                            "--zone", z.chemin])
        if r.returncode != 0:
            erreur("échec de build.py")

    fichiers = sorted(os.listdir(dist))
    dossier = args.dossier.strip("/")

    # mkdir échoue si le dossier existe déjà : toléré
    smbclient(args, f"mkdir {dossier}", tolere_echec=True)
    puts = " ; ".join(f"put {f}" for f in fichiers)
    smbclient(args, f"cd {dossier} ; lcd {dist} ; {puts}")

    # relecture de la taille distante du manifest pour attester la copie :
    # c'est lui qui nomme les binaires, un manifest périmé casse tout
    TEMOIN = "manifest.json"
    taille = os.path.getsize(os.path.join(dist, TEMOIN))
    r = smbclient(args, f"cd {dossier} ; allinfo {TEMOIN}")
    m = re.search(r"stream:.*?(\d+) bytes|size:\s*(\d+)", r.stdout, re.I)
    distant = int(next(g for g in (m.groups() if m else ()) if g)) if m else None
    if distant is not None and distant != taille:
        erreur(f"taille distante {distant} ≠ locale {taille}")

    # purge des assets hachés périmés (uniquement nos motifs, rien d'autre)
    r = smbclient(args, f"cd {dossier} ; ls")
    motif = re.compile(
        r"^(donnees|sat|ortho|atlas\d+|pm3datlas\d+|pm3d|modele)"
        r"\.[0-9a-f]{10}\.(bin\.gz|webp)$")
    distants = [ligne.split()[0] for ligne in r.stdout.splitlines()
                if ligne.strip() and motif.match(ligne.split()[0])]
    perimes = [f for f in distants if f not in fichiers]
    if perimes:
        dels = " ; ".join(f"del {f}" for f in perimes)
        smbclient(args, f"cd {dossier} ; {dels}")

    print(f"copié : {len(fichiers)} fichiers dans {args.partage}/{dossier}/"
          + (f" ; {len(perimes)} asset(s) périmé(s) purgé(s)" if perimes else ""))
    print("panneau : /sun-shading (barre latérale) ; page autonome : "
          f"/sun_shading/data/{nom}")
    print("le manifest est relu à chaque chargement et les binaires ont des "
          "noms hachés : aucun rechargement forcé n'est nécessaire")


if __name__ == "__main__":
    principal()
