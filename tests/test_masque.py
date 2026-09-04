#!/usr/bin/env python3
"""Vérifications de la lecture des masques d'horizon (stdlib seule).

Le point capital est le dernier test : l'interpolation du masque existe en
DEUX langages — en JavaScript pour la relecture en créneaux dans la page, en
Python pour la décision de l'intégration Home Assistant. C'est la seule
duplication de l'architecture, et elle doit être tenue par un test plutôt que
par la relecture. Le balayage y est plus dur qu'une année de positions
solaires : il couvre tous les azimuts, pas seulement ceux que le soleil visite.

Usage : python3 tests/test_masque.py
"""
import ast
import json
import math
import os
import re
import subprocess
import sys
import tempfile

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(RACINE, "custom_components", "sun_shading"))
import masque  # noqa: E402
from pipeline import zone as zones  # noqa: E402

ZONE = zones.resout()
MASQUES = os.path.join(ZONE.masques, f"{ZONE.nom}.json")
FEUILLAISON = (90, 120, 288, 320)
essais = []


def essai(fn):
    essais.append(fn)
    return fn


def proche(a, b, tol=1e-9):
    assert abs(a - b) <= tol, f"{a} != {b} (tolérance {tol})"


@essai
def interpolation():
    b = [[10, 90], [20, 90], [30, 90], [40, 90]]
    proche(masque.bande(b, 0, 90)[0], 10)
    proche(masque.bande(b, 45, 90)[0], 15)
    proche(masque.bande(b, 180, 90)[0], 30)
    # boucle : entre le dernier échantillon (270°) et le premier (0°)
    proche(masque.bande(b, 350, 90)[0], 40 + (10 - 40) * (350 - 270) / 90)
    # un azimut hors [0, 360) est ramené dans le tour
    proche(masque.bande(b, 405, 90)[0], masque.bande(b, 45, 90)[0])
    proche(masque.bande(b, -315, 90)[0], masque.bande(b, 45, 90)[0])


@essai
def feuillaison():
    f = lambda j: masque.facteur_feuillaison(j, FEUILLAISON)
    proche(f(0), 0.0)
    proche(f(89), 0.0)
    proche(f(90), 0.0)      # début du débourrement
    proche(f(105), 0.5)
    proche(f(120), 1.0)
    proche(f(287), 1.0)
    proche(f(288), 1.0)     # début de la chute
    proche(f(304), 0.5)
    proche(f(320), 0.0)
    proche(f(364), 0.0)


@essai
def melange_saisonnier():
    o = {"leafy": [[10, 80]] * 4, "bare": [[30, 60]] * 4,
         "azimuth_step": 90, "foliation": FEUILLAISON}
    proche(masque.bornes(o, 0, 200)[0], 10)   # feuillé : bande d'été
    proche(masque.bornes(o, 0, 0)[0], 30)     # nu : bande d'hiver
    bas, haut = masque.bornes(o, 0, 105)      # à mi-débourrement
    proche(bas, 20)
    proche(haut, 70)


@essai
def jamais_de_soleil():
    """[90, 90] est la convention « aucun soleil à cet azimut » : sous nos
    latitudes l'élévation ne l'atteint jamais, donc aucun cas particulier."""
    o = {"leafy": [[90, 90]] * 4, "bare": [[90, 90]] * 4,
         "azimuth_step": 90, "foliation": FEUILLAISON}
    assert not masque.au_soleil(o, 0, 64.8, 172)   # midi au solstice d'été
    assert not masque.au_soleil(o, 0, 89.9, 172)


@essai
def bande_bornee_des_deux_cotes():
    """Une corniche masque le soleil HAUT : la borne supérieure doit compter."""
    o = {"leafy": [[10, 40]] * 4, "bare": [[10, 40]] * 4,
         "azimuth_step": 90, "foliation": FEUILLAISON}
    assert not masque.au_soleil(o, 0, 5, 200)
    assert masque.au_soleil(o, 0, 25, 200)
    assert not masque.au_soleil(o, 0, 45, 200)


@essai
def contrat_des_attributs():
    """Ce que la carte LIT doit être ce que l'intégration ÉCRIT.

    Le test de la page tourne contre un Home Assistant simulé, donc contre
    des attributs que l'on écrit soi-même : il ne peut pas voir un attribut
    oublié côté intégration. C'est arrivé une fois (« opening », sur lequel
    la carte reconnaît ses entités), et le panneau serait resté vide sans
    aucune erreur. Ce contrôle-ci lit les deux vraies sources.
    """
    src = open(os.path.join(RACINE, "custom_components", "sun_shading",
                            "binary_sensor.py")).read()
    arbre = ast.parse(src)
    ecrits = set()
    for noeud in ast.walk(arbre):
        if isinstance(noeud, ast.FunctionDef) and \
                noeud.name == "extra_state_attributes":
            for n in ast.walk(noeud):
                if isinstance(n, ast.Dict):
                    ecrits |= {c.value for c in n.keys
                               if isinstance(c, ast.Constant)}
                elif isinstance(n, ast.Subscript) and \
                        isinstance(n.slice, ast.Constant):
                    ecrits.add(n.slice.value)
    assert ecrits, "aucun attribut trouvé dans extra_state_attributes"

    app = open(os.path.join(RACINE, "sources", "app.js")).read()
    # la carte lit les attributs des entités dans haRafraichit()
    debut = app.index("haEtat.ouvertures = etats")
    lus = set(re.findall(r"e\.attributes\.(\w+)",
                         app[debut:debut + 900]))
    manquants = lus - ecrits - {"friendly_name"}
    assert not manquants, (
        f"la carte lit {sorted(manquants)}, que l'intégration n'écrit pas")
    print(f"    intégration écrit {len(ecrits)}, carte lit {len(lus)} — "
          f"contrat tenu")


@essai
def accord_avec_le_javascript():
    """Python et JavaScript doivent lire le même masque à l'identique."""
    if not os.path.exists(MASQUES):
        print(f"    (ignoré : {MASQUES} absent — "
              "lancer node sources/masque_horizon.js)")
        return
    m = json.load(open(MASQUES))
    pas = m["pas_azimut"]
    # pas irrationnel : tombe entre les échantillons, jamais dessus
    azimuts = [i * 360.0 / (997 * math.pi) * math.pi for i in range(997)]
    azimuts += [0.0, 359.999, 89.5, 90.0, 270.25]
    ecart_max = 0.0
    for cle, o in m["ouvertures"].items():
        for saison in ("ete", "hiver"):
            with tempfile.NamedTemporaryFile("w", suffix=".json",
                                             delete=False) as f:
                json.dump({"bandes": o[saison], "az": azimuts, "pas": pas}, f)
                chemin = f.name
            try:
                sortie = subprocess.run(
                    ["node", "-e",
                     "const {bandeAz}=require('./sources/masque_horizon.js');"
                     "const d=require(process.argv[1]);"
                     "console.log(JSON.stringify("
                     "d.az.map(a=>bandeAz(d.bandes,a,d.pas))));",
                     chemin],
                    cwd=RACINE, capture_output=True, text=True, check=True)
            finally:
                os.unlink(chemin)
            js = json.loads(sortie.stdout)
            for az, (jb, jh) in zip(azimuts, js):
                pb, ph = masque.bande(o[saison], az, pas)
                ecart_max = max(ecart_max, abs(pb - jb), abs(ph - jh))
                proche(pb, jb, 1e-9)
                proche(ph, jh, 1e-9)
        print(f"    {cle} : {len(azimuts)} azimuts × 2 saisons, "
              f"écart max {ecart_max:.2e}")


@essai
def bundle_du_composant_a_jour():
    """custom_components/…/frontend/panel.js est un artefact généré et
    versionné (HACS ne construit rien). build.py l'écrit en même temps que la
    copie de la zone : les deux doivent être identiques, sinon un build a été
    oublié avant le commit."""
    comp = os.path.join(RACINE, "custom_components", "sun_shading",
                        "frontend", "panel.js")
    dist = os.path.join(ZONE.dist, "panel.js")
    if not os.path.exists(dist):
        print("    (ignoré : zone non construite)")
        return
    assert os.path.exists(comp), f"{comp} absent : lancer build.py"
    assert open(comp, "rb").read() == open(dist, "rb").read(), \
        "frontend/panel.js diffère du dernier build : relancer build.py"


if __name__ == "__main__":
    echecs = 0
    for fn in essais:
        try:
            fn()
            print(f"  ok   {fn.__name__}")
        except AssertionError as e:
            echecs += 1
            print(f"  ECHEC {fn.__name__} : {e}")
    print(f"{len(essais) - echecs}/{len(essais)} vérifications passées")
    sys.exit(1 if echecs else 0)
