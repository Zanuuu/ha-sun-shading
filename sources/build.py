#!/usr/bin/env python3
"""Assemble l'élément <sun-shading> et le livrable d'une zone.

Usage : python3 sources/build.py --zone <nom>

Un seul bundle, indépendant de la zone — panel.js, module ES qui
enregistre l'élément personnalisé. Il inline three.js et three-mesh-bvh
(épinglés dans package.json, node_modules/ à la racine du dépôt), le gabarit
HTML et app.js. Écrit à deux endroits :

- custom_components/sun_shading/frontend/panel.js — livré avec
  l'intégration Home Assistant (HACS ne construit rien : l'artefact est
  versionné). L'intégration l'enregistre comme panneau et lui indique où
  sont les données ;
- zones/<nom>/dist/panel.js — copie servie à côté des données, pour la
  page autonome sun-shading-<nom>.html (URL directe, tests
  Playwright, masque_horizon.js, repli si le panneau casse).

Le reste de zones/<nom>/dist/ est propre à la zone : manifest.json (les
métadonnées que le bundle inlinait autrefois, plus titre et lieu) et les
binaires à noms hachés — le cache long de Home Assistant ne retélécharge
que ce qui change, et un mode ne charge ses données qu'à son premier usage.
Le photomaillage et le modèle précis sont facultatifs : sans leurs
métadonnées, la page se construit sans le mode « Photo 3D » ou avec la
toiture LoD2. Déployé par deploie_ha.py.
"""
import argparse
import json
import os
import re

import _pipeline  # noqa: F401  (ajoute le paquet du pipeline au chemin)
from pipeline import zone as zones
from pipeline.build import construit_zone

RACINE = zones.RACINE
SOURCES = os.path.join(RACINE, "sources")
MODULES = os.path.join(RACINE, "node_modules")
FRONTEND = os.path.join(RACINE, "custom_components", "sun_shading",
                        "frontend")


def bundle():
    """panel.js : le module de l'élément, sans rien de la zone."""
    tpl = open(f"{SOURCES}/page-template.html").read()
    assert "fonts.googleapis" not in tpl
    three = open(f"{MODULES}/three/build/three.min.js").read()
    # retire l'avertissement de dépréciation du build UMD (bundle embarqué, pas de CDN)
    warn = re.search(r"console\.warn\(\s*'Scripts \"build/three\.js\"[^)]*\)", three)
    assert warn, "avertissement three.js introuvable"
    three = three.replace(warn.group(0), "void 0")
    bvh = open(f"{MODULES}/three-mesh-bvh/build/index.umd.cjs").read()
    app = open(f"{SOURCES}/app.js").read()
    # Les deux bibliothèques sont des builds UMD : appelées avec un `this`
    # explicite plutôt qu'en comptant sur leur détection de global, qui diffère
    # d'un build à l'autre et n'a rien d'évident dans un module ES.
    # Bandeaux de licence : le build UMD de three.js porte le sien, celui de
    # three-mesh-bvh n'en a AUCUN. Un bundle redistribué doit garder les avis
    # de droits de ses composants (clause de la licence MIT) : on les pose
    # ici, à partir des LICENSE de node_modules, plutôt que de les recopier à
    # la main dans un fichier qui divergerait des versions épinglées.
    def bandeau(nom, version, url):
        lic = open(f"{MODULES}/{nom}/LICENSE").read()
        droits = next((l.strip() for l in lic.splitlines()
                       if l.lower().startswith("copyright")), "")
        return (f"/*! {nom} v{version} | {droits} | MIT | {url}\n"
                f"   Inliné par sources/build.py ; texte complet dans "
                f"THIRD_PARTY_LICENSES. */\n")

    b_three = bandeau("three", "0.152.2", "https://threejs.org/")
    b_bvh = bandeau("three-mesh-bvh", "0.6.8",
                    "https://github.com/gkjohnson/three-mesh-bvh")
    return f"""/* Sun Shading — élément personnalisé <sun-shading>.
   Généré par sources/build.py : ne pas éditer. */
/* Les données d'une zone sont servies dans un dossier que l'hôte indique
   (panneau Home Assistant : config.data) ; à défaut, à côté de ce module.
   Dans un panneau, l'URL du document (/sun-shading) n'a rien à voir avec
   celle des assets : import.meta.url est la seule référence valable. */
const BASE_MODULE = new URL(".", import.meta.url).href;
{b_three}(function () {{
{three}
}}).call(globalThis);
{b_bvh}(function () {{
{bvh}
}}).call(globalThis);
const GABARIT={json.dumps(tpl)};
{app}
/* L'élément : injecte le gabarit dans un shadow root — obligatoire, le CSS
   porte des sélecteurs (*, html, body) qui saccageraient l'interface de Home
   Assistant en DOM clair — puis monte l'application dessus. */
class SunShading extends HTMLElement {{
  connectedCallback() {{
    if (this._monte) return;
    this._monte = true;
    // panel_custom pose `panel` et `hass` en propriétés dans la même tâche
    // que l'insertion, avant ou après elle : on laisse passer la microtâche
    // pour lire config.data quel que soit l'ordre.
    queueMicrotask(() => {{
      const r = this.attachShadow({{ mode: "open" }});
      r.innerHTML = GABARIT;
      const cfg = this._panel && this._panel.config;
      monte(r, this, (cfg && cfg.data) || BASE_MODULE, cfg || null);
    }});
  }}
  /* panel_custom écrit `hass` à chaque changement d'état : on mémorise, on ne
     redessine rien. C'est la voie d'accès privilégiée à Home Assistant. */
  set hass(h) {{ poseHass(h); }}
  get hass() {{ return litHass(); }}
  set panel(p) {{ this._panel = p; }}
  get panel() {{ return this._panel; }}
  /* Home Assistant pose `narrow` quand sa barre latérale est repliée : c'est
     la seule façon de savoir qu'il faut proposer le bouton de menu, les
     @media du shadow DOM s'évaluant sur la fenêtre et non sur l'hôte. */
  set narrow(v) {{ this._narrow = v; poseEtroit(v); }}
  get narrow() {{ return this._narrow; }}
}}
if (!customElements.get("sun-shading")) {{
  customElements.define("sun-shading", SunShading);
}}
"""


def principal():
    p = zones.argument_zone(argparse.ArgumentParser(
        description=__doc__.splitlines()[0]))
    args = p.parse_args()
    z = zones.resout(args.zone)
    js = bundle()
    os.makedirs(FRONTEND, exist_ok=True)
    chemin_js = os.path.join(FRONTEND, "panel.js")
    open(chemin_js, "w").write(js)
    print(chemin_js, os.path.getsize(chemin_js), "octets")
    construit_zone(z, js)


if __name__ == "__main__":
    principal()
