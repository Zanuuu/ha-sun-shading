"""Construit une zone de bout en bout, dans un processus dédié.

    python3 -m pipeline.construire <spec.json>

C'est l'entrée qu'utilise l'intégration : elle écrit la spécification, lance
ce module dans un sous-processus et lit son flux de sortie. Un processus à
part plutôt qu'un thread : des dizaines de minutes de calcul pur Python
disputeraient le GIL à la boucle d'événements de Home Assistant, et le pic
mémoire du prétraitement resterait dans son processus.

Spécification (JSON) :
    zone      dict au format de zone.json (nom, lat, lon, titre, rayons…)
    dossier   dossier de la zone (donnees/ et dist/ y sont écrits)
    cache     dossier de cache des dalles (partagé entre zones)
    panel_js  chemin du module panel.js à copier dans dist/
    etapes    sous-ensemble ordonné de ["maquette", "satellite", "photo",
              "obj", "build"] ; défaut : maquette, satellite, build
    ortho_px, gamma, obj  paramètres facultatifs des étapes

Sortie : les lignes du pipeline, plus des lignes de la forme
    PROGRESSION<TAB><fraction 0-1><TAB><message>
Code de retour 0 si tout s'est bien passé ; sinon 1 et une dernière ligne
    ERREUR<TAB><message>.
"""
import json
import os
import sys
import traceback

from . import zone as zones
from .progression import Progression

# poids relatifs des étapes dans la progression globale (mesurés sur la zone
# de démonstration : le photomaillage domine quand il est demandé)
POIDS = {"maquette": 3.0, "satellite": 4.0, "photo": 20.0, "obj": 0.2, "build": 0.3}


def rapporte(fraction, message):
    print(f"PROGRESSION\t{fraction:.4f}\t{message}", flush=True)


def construit(spec, rappel=rapporte):
    if spec.get("cache"):
        os.environ["SUN_SHADING_CACHE"] = spec["cache"]
    etapes = spec.get("etapes") or ["maquette", "satellite", "build"]
    z = zones.Zone.depuis_dict(spec["zone"], spec["dossier"])
    os.makedirs(z.donnees, exist_ok=True)

    total = sum(POIDS[e] for e in etapes)
    debut = 0.0
    for etape in etapes:
        fin = debut + POIDS[etape] / total
        # chaque étape cadre sa propre progression 0-1 entre debut et fin
        prog = Progression(lambda f, m, d=debut, w=fin - debut: rappel(d + w * f, m))
        prog.etape(etape, 0.0, 1.0)
        if etape == "maquette":
            from . import preprocess
            preprocess.construit(z, prog)
        elif etape == "satellite":
            from . import preprocess_sat
            preprocess_sat.construit(z, prog, ortho_px=spec.get("ortho_px"))
        elif etape == "photo":
            from . import extrait_pm3d
            extrait_pm3d.construit(z, spec.get("gamma", extrait_pm3d.GAMMA_DEFAUT), prog)
        elif etape == "obj":
            from . import importe_toit_obj
            importe_toit_obj.importe(z, spec["obj"], spec.get("obj_note"))
        elif etape == "build":
            from . import build
            build.construit_zone(z, open(spec["panel_js"]).read())
        else:
            raise ValueError(f"étape inconnue : {etape}")
        debut = fin
    rappel(1.0, "terminé")


def principal(argv=None):
    argv = argv if argv is not None else sys.argv[1:]
    if len(argv) != 1:
        print(__doc__)
        return 2
    spec = json.load(open(argv[0]))
    try:
        # priorité basse : Home Assistant garde la main sur le processeur
        try:
            os.nice(10)
        except (AttributeError, OSError):
            pass
        construit(spec)
    except Exception as e:  # noqa: BLE001 — tout doit remonter au parent
        traceback.print_exc()
        print(f"ERREUR\t{e}", flush=True)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(principal())
