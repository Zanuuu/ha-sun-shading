"""Traduction d'une entrée de configuration en zone du pipeline.

Le pipeline ne connaît que des zones (`pipeline/zone.py`) ; le config flow ne
connaît que des champs de formulaire. Ce module fait le pont, et il est le
seul endroit où l'on décide comment les rayons se déduisent du rayon affiché
et où une zone construite est rangée sur le disque.
"""
import re
from pathlib import Path

from homeassistant.core import HomeAssistant

from .const import (CONF_DOSSIER, CONF_OBJ, CONF_ORTHO_PX, CONF_PHOTO,
                    CONF_PHOTO_RAYON, CONF_POSITION, CONF_RAYONS,
                    CONF_RELEVE_OMBRES, CONF_TITRE, DOSSIER_CACHE,
                    DOSSIER_RACINE, MARGES_RAYONS, MODE, MODE_EXTERNE,
                    PHOTO_RAYON_DEFAUT, RAYON_DEFAUT)


def reglage(entry, cle, defaut=None):
    """Les options priment sur les données initiales de l'entrée."""
    if cle in entry.options:
        return entry.options[cle]
    return entry.data.get(cle, defaut)


def slug(titre: str) -> str:
    """Nom de dossier et suffixe du livrable : minuscules, sans accent."""
    table = str.maketrans("àâäéèêëîïôöùûüÿçñ", "aaaeeeeiioouuuycn")
    net = re.sub(r"[^a-z0-9]+", "-", titre.lower().translate(table)).strip("-")
    return net or "zone"


def rayons(entry) -> dict:
    """Rayons du pipeline. L'utilisateur règle le rayon AFFICHÉ ; bâtiments,
    terrain et façades débordent d'une marge fixe (les ombres d'un bâtiment
    hors carte tombent dedans, et le terrain ne doit jamais montrer le bord du
    monde). La section avancée peut remplacer chacun."""
    position = reglage(entry, CONF_POSITION) or {}
    r = float(position.get("radius") or RAYON_DEFAUT)
    valeurs = {"carte": r}
    for cle, marge in MARGES_RAYONS.items():
        valeurs[cle] = r + marge
    valeurs["mnt_natif"] = min(r, 500.0)
    if reglage(entry, CONF_PHOTO):
        valeurs["photo"] = float(reglage(entry, CONF_PHOTO_RAYON) or PHOTO_RAYON_DEFAUT)
    valeurs.update({k: float(v) for k, v in (reglage(entry, CONF_RAYONS) or {}).items()
                    if v is not None})
    return valeurs


def dossier_zone(hass: HomeAssistant, entry) -> Path:
    """Où vivent les données de cette entrée : le dossier désigné en mode
    externe, sinon config/sun_shading/<slug>/ que l'intégration construit."""
    if reglage(entry, MODE) == MODE_EXTERNE:
        return Path(hass.config.path(reglage(entry, CONF_DOSSIER, DOSSIER_RACINE)))
    return Path(hass.config.path(DOSSIER_RACINE, slug(reglage(entry, CONF_TITRE, "zone"))))


def dossier_servi(hass: HomeAssistant, entry) -> Path:
    """Le dossier exposé en HTTP, celui qui contient manifest.json.

    En mode construit, le pipeline écrit dans <zone>/donnees/ et livre dans
    <zone>/dist/ : c'est le second qui est servi. En mode externe,
    l'utilisateur désigne directement le dossier livré."""
    dossier = dossier_zone(hass, entry)
    if reglage(entry, MODE) == MODE_EXTERNE:
        return dossier
    return dossier / "dist"


def dossier_cache(hass: HomeAssistant) -> Path:
    """Cache des dalles téléchargées, PARTAGÉ entre les entrées : une dalle de
    la maquette pèse ~107 Mo et sert à toutes les zones qu'elle recouvre."""
    return Path(hass.config.path(DOSSIER_RACINE, DOSSIER_CACHE))


def config_zone(entry) -> dict:
    """Le zone.json que le pipeline attend, dérivé de l'entrée."""
    position = reglage(entry, CONF_POSITION) or {}
    titre = reglage(entry, CONF_TITRE, "Sun Shading")
    return {
        "nom": slug(titre),
        "titre": titre,
        "lat": float(position["latitude"]),
        "lon": float(position["longitude"]),
        "rayons": rayons(entry),
    }


def specification(hass: HomeAssistant, entry, etapes=None) -> dict:
    """Ce que reçoit le sous-processus (`pipeline/construire.py`)."""
    dossier = dossier_zone(hass, entry)
    spec = {
        "zone": config_zone(entry),
        "dossier": str(dossier),
        "cache": str(dossier_cache(hass)),
        "panel_js": str(Path(__file__).parent / "frontend" / "panel.js"),
        "etapes": etapes or etapes_necessaires(hass, entry),
    }
    if reglage(entry, CONF_ORTHO_PX):
        spec["ortho_px"] = int(reglage(entry, CONF_ORTHO_PX))
    if reglage(entry, CONF_RELEVE_OMBRES) is not None:
        spec["gamma"] = float(reglage(entry, CONF_RELEVE_OMBRES))
    if reglage(entry, CONF_OBJ):
        spec["obj"] = hass.config.path(reglage(entry, CONF_OBJ))
    return spec


def etapes_necessaires(hass: HomeAssistant, entry) -> list:
    """Toutes les étapes demandées par la configuration, dans l'ordre."""
    etapes = ["maquette", "satellite"]
    if reglage(entry, CONF_PHOTO):
        etapes.append("photo")
    if reglage(entry, CONF_OBJ):
        etapes.append("obj")
    etapes.append("build")
    return etapes


def parametres_construits(hass: HomeAssistant, entry) -> dict:
    """Signature des paramètres qui exigent une reconstruction. Comparée à
    celle consignée dans le dossier après construction : au chargement de
    l'entrée, une différence relance le pipeline, une égalité ne fait rien."""
    return {
        "zone": config_zone(entry),
        "photo": bool(reglage(entry, CONF_PHOTO)),
        "ortho_px": reglage(entry, CONF_ORTHO_PX),
        "gamma": reglage(entry, CONF_RELEVE_OMBRES),
        "obj": reglage(entry, CONF_OBJ),
    }
