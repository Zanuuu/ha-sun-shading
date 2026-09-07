"""Sun Shading — capteurs « soleil direct » par ouverture, et le panneau
qui les configure.

L'intégration fait trois choses :

- elle **construit** la zone (dalles 3D de l'Eurométropole → un dossier servi
  par HTTP), dans un sous-processus, ou sert un dossier déjà produit hors de
  Home Assistant par le même pipeline (`constructeur.py`, `pipeline/`) ;
- elle **sert** la carte : le module de l'élément <sun-shading>
  (frontend/panel.js, livré avec le composant) est enregistré comme panneau
  de la barre latérale, et les données de chaque zone lui sont servies sous
  /sun_shading/data/<entrée>/ ;
- elle **stocke** les masques d'horizon que la carte pousse par le service
  `set_opening` et les **évalue** à chaque mouvement du soleil.

Ce partage est délibéré : elle ne calcule aucune géométrie. Porter le lancer
de rayons ici imposerait une deuxième implémentation de « le soleil
atteint-il cette surface » ; il n'y en a qu'une, dans la page.
"""
import logging
import re
from dataclasses import dataclass, field
from pathlib import Path

import voluptuous as vol
from aiohttp import web
from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import HomeAssistantView, StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import ServiceValidationError
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.storage import Store
from homeassistant.loader import async_get_integration

from . import constructeur, entite
from .const import (CONF_ADMIN, CONF_FEUILLAISON, CONF_ICONE, CONF_OMBRES,
                    CONF_PAS_AZIMUT, CONF_SEUIL, CONF_TITRE, DOMAINE,
                    FEUILLAISON_DEFAUT, ICONE_PANNEAU, MODE, MODE_EXTERNE,
                    OMBRES_DEFAUT, PAS_AZIMUT_DEFAUT, SERVICE_DEFINIR,
                    SERVICE_RECONSTRUIRE, SERVICE_SUPPRIMER, SEUIL_DEFAUT,
                    SIGNAL_AJOUT, SIGNAL_MAJ, STOCKAGE_VERSION, TITRE_DEFAUT,
                    URL_DONNEES, URL_FRONTEND, URL_PANNEAU)
from .zone_entree import dossier_servi, reglage, slug

_LOGGER = logging.getLogger(__name__)

PLATEFORMES = [Platform.BINARY_SENSOR, Platform.SENSOR, Platform.BUTTON]

_TRIPLET = vol.All([vol.Coerce(float)], vol.Length(min=3, max=3))
_BANDE = vol.All([vol.Coerce(float)], vol.Length(min=2, max=2))
_MASQUE = vol.All([_BANDE], vol.Length(min=1))

SCHEMA_DEFINIR = vol.Schema({
    vol.Required("id"): cv.slug,
    vol.Required("name"): cv.string,
    vol.Optional("entry_id"): cv.string,
    vol.Optional("cover"): vol.Any(None, cv.entity_id),
    vol.Required("point"): _TRIPLET,
    vol.Required("normal"): _TRIPLET,
    vol.Required("leafy"): _MASQUE,
    vol.Required("bare"): _MASQUE,
    vol.Optional("azimuth_step", default=1): vol.Coerce(float),
    vol.Optional("threshold", default=0.5): vol.Coerce(float),
    vol.Optional("foliation", default=list(FEUILLAISON_DEFAUT)):
        vol.All([vol.Coerce(float)], vol.Length(min=4, max=4)),
})

SCHEMA_SUPPRIMER = vol.Schema({vol.Required("id"): cv.slug,
                               vol.Optional("entry_id"): cv.string})
SCHEMA_RECONSTRUIRE = vol.Schema({vol.Optional("entry_id"): cv.string})

# binaires à noms hachés du build : immuables, donc cache long ; le reste
# (manifest.json, page, panel.js copié) est revalidé à chaque fois
_HACHE = re.compile(r"\.[0-9a-f]{10}\.(bin\.gz|webp)$")


@dataclass
class Donnees:
    """Ce que l'intégration garde en mémoire pour une entrée."""
    depot: "Depot"
    construction: constructeur.EtatConstruction = field(
        default_factory=constructeur.EtatConstruction)
    processus: object = None
    tache: object = None


class Depot:
    """Les ouvertures et leurs masques, persistés entre deux démarrages.

    Un stockage par entrée : deux zones n'ont ni les mêmes fenêtres ni le
    même repère local."""

    def __init__(self, hass: HomeAssistant, entry_id: str):
        self._store = Store(hass, STOCKAGE_VERSION, f"{DOMAINE}.{entry_id}")
        self.ouvertures = {}

    async def charge(self):
        donnees = await self._store.async_load()
        self.ouvertures = (donnees or {}).get("ouvertures", {})

    async def enregistre(self):
        await self._store.async_save({"ouvertures": self.ouvertures})


class VueDonnees(HomeAssistantView):
    """Sert les dossiers de données des zones, une entrée par sous-chemin.

    Une vue plutôt qu'un chemin statique : le dossier d'une entrée se change
    par reconfiguration sans redémarrer, et les en-têtes de cache suivent le
    nommage du build (haché = immuable).

    Sans authentification, comme /local/ : le module et les données sont de
    l'open data, et un <script type="module"> comme un fetch() de la page ne
    portent pas de jeton. Le panneau, lui, est réservé aux administrateurs."""

    url = URL_DONNEES + "/{entree}/{fichier:.+}"
    name = f"{DOMAINE}:data"
    requires_auth = False

    def __init__(self, hass: HomeAssistant):
        self._hass = hass

    async def get(self, request: web.Request, entree: str,
                  fichier: str) -> web.StreamResponse:
        entry = self._hass.config_entries.async_get_entry(entree)
        if entry is None or entry.domain != DOMAINE:
            raise web.HTTPNotFound()
        racine = dossier_servi(self._hass, entry).resolve()
        chemin = (racine / fichier).resolve()
        # jamais hors du dossier déclaré, quel que soit le chemin demandé
        if racine not in chemin.parents or not chemin.is_file():
            raise web.HTTPNotFound()
        if _HACHE.search(chemin.name):
            cache = "public, max-age=31536000, immutable"
        else:
            cache = "no-cache"
        types = {".js": "text/javascript; charset=utf-8",
                 ".json": "application/json", ".gz": "application/gzip",
                 ".webp": "image/webp", ".html": "text/html; charset=utf-8"}
        return web.FileResponse(
            chemin, headers={"Cache-Control": cache,
                             "Content-Type": types.get(chemin.suffix,
                                                       "application/octet-stream")})


async def _installe_serveur(hass: HomeAssistant) -> None:
    """Chemins HTTP, enregistrés une seule fois par exécution de Home
    Assistant : un rechargement d'entrée ne doit pas dupliquer les routes."""
    etat = hass.data.setdefault(DOMAINE, {})
    if etat.get("_http"):
        return
    await hass.http.async_register_static_paths([
        StaticPathConfig(URL_FRONTEND, str(Path(__file__).parent / "frontend"),
                         cache_headers=True)])
    hass.http.register_view(VueDonnees(hass))
    etat["_http"] = True


def _url_panneau(entry: ConfigEntry) -> str:
    """Un panneau par entrée : /sun-shading pour la première, suffixée
    ensuite. Le chemin est stable tant que le titre ne change pas."""
    return f"{URL_PANNEAU}-{slug(reglage(entry, CONF_TITRE, entry.title))}"


async def _installe_panneau(hass: HomeAssistant, entry: ConfigEntry) -> None:
    version = entite.VERSION or "0"
    url = _url_panneau(entry)
    # un panneau du même chemin peut rester d'un chargement précédent
    frontend.async_remove_panel(hass, url, warn_if_unknown=False)
    await panel_custom.async_register_panel(
        hass,
        webcomponent_name="sun-shading",
        frontend_url_path=url,
        # le nom n'est pas haché : la version du composant sert de cache busting
        module_url=f"{URL_FRONTEND}/panel.js?v={version}",
        sidebar_title=reglage(entry, CONF_TITRE, TITRE_DEFAUT),
        sidebar_icon=reglage(entry, CONF_ICONE, ICONE_PANNEAU),
        require_admin=bool(reglage(entry, CONF_ADMIN, True)),
        config={
            # où l'élément trouve les données de CETTE zone, et de quoi
            # afficher l'avancement quand elles n'existent pas encore
            "data": f"{URL_DONNEES}/{entry.entry_id}/",
            "entry_id": entry.entry_id,
            "shadow_quality": int(reglage(entry, CONF_OMBRES, OMBRES_DEFAUT)),
            "foliation": reglage(entry, CONF_FEUILLAISON, FEUILLAISON_DEFAUT),
            "threshold": float(reglage(entry, CONF_SEUIL, SEUIL_DEFAUT)),
            "azimuth_step": float(reglage(entry, CONF_PAS_AZIMUT, PAS_AZIMUT_DEFAUT)),
        },
    )


async def _sur_options(hass: HomeAssistant, entry: ConfigEntry) -> None:
    await hass.config_entries.async_reload(entry.entry_id)


def _entree_visee(hass: HomeAssistant, appel: ServiceCall) -> ConfigEntry:
    """L'entrée que vise un appel de service : celle qu'il nomme, sinon
    l'unique entrée chargée. Avec plusieurs zones, le champ est obligatoire —
    publier le masque d'une fenêtre dans la mauvaise zone serait pire qu'une
    erreur."""
    entry_id = appel.data.get("entry_id")
    entrees = [e for e in hass.config_entries.async_entries(DOMAINE)
               if e.entry_id in hass.data.get(DOMAINE, {})]
    if entry_id:
        for e in entrees:
            if e.entry_id == entry_id:
                return e
        raise ServiceValidationError(f"aucune zone d'identifiant {entry_id}")
    if len(entrees) == 1:
        return entrees[0]
    raise ServiceValidationError(
        "plusieurs zones configurées : préciser entry_id "
        + ", ".join(f"{e.title} ({e.entry_id})" for e in entrees))


async def _installe_services(hass: HomeAssistant) -> None:
    if hass.data[DOMAINE].get("_services"):
        return

    async def definir(appel: ServiceCall) -> None:
        entry = _entree_visee(hass, appel)
        depot = hass.data[DOMAINE][entry.entry_id].depot
        d = dict(appel.data)
        d.pop("entry_id", None)
        cle = d.pop("id")
        attendu = round(360 / d["azimuth_step"])
        for saison in ("leafy", "bare"):
            if len(d[saison]) != attendu:
                raise ServiceValidationError(
                    f"masque « {saison} » : {len(d[saison])} bandes pour un pas "
                    f"de {d['azimuth_step']}°, {attendu} attendues")
        nouveau = cle not in depot.ouvertures
        depot.ouvertures[cle] = d
        await depot.enregistre()
        _LOGGER.info("ouverture %s %s (%d bandes)", cle,
                     "ajoutée" if nouveau else "mise à jour", attendu)
        async_dispatcher_send(hass,
                              f"{SIGNAL_AJOUT if nouveau else SIGNAL_MAJ}_{entry.entry_id}",
                              cle)

    async def supprimer(appel: ServiceCall) -> None:
        entry = _entree_visee(hass, appel)
        depot = hass.data[DOMAINE][entry.entry_id].depot
        cle = appel.data["id"]
        if depot.ouvertures.pop(cle, None) is None:
            _LOGGER.warning("ouverture %s inconnue, rien à supprimer", cle)
            return
        await depot.enregistre()
        async_dispatcher_send(hass, f"{SIGNAL_MAJ}_{entry.entry_id}", cle)

    async def reconstruire(appel: ServiceCall) -> None:
        entry = _entree_visee(hass, appel)
        if reglage(entry, MODE) == MODE_EXTERNE:
            raise ServiceValidationError(
                f"« {entry.title} » utilise un dossier de données externe : "
                "rien à construire")
        hass.async_create_task(constructeur.lance(hass, entry))

    hass.services.async_register(DOMAINE, SERVICE_DEFINIR, definir,
                                 schema=SCHEMA_DEFINIR)
    hass.services.async_register(DOMAINE, SERVICE_SUPPRIMER, supprimer,
                                 schema=SCHEMA_SUPPRIMER)
    hass.services.async_register(DOMAINE, SERVICE_RECONSTRUIRE, reconstruire,
                                 schema=SCHEMA_RECONSTRUIRE)
    hass.data[DOMAINE]["_services"] = True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    # la version du manifest sert deux fois : elle date l'appareil dans Home
    # Assistant et sert de cache busting au module du panneau
    integration = await async_get_integration(hass, DOMAINE)
    entite.VERSION = str(integration.version) if integration.version else None

    depot = Depot(hass, entry.entry_id)
    await depot.charge()
    hass.data.setdefault(DOMAINE, {})[entry.entry_id] = Donnees(depot=depot)

    await _installe_serveur(hass)
    await _installe_services(hass)
    await _installe_panneau(hass, entry)
    entry.async_on_unload(entry.add_update_listener(_sur_options))
    await hass.config_entries.async_forward_entry_setups(entry, PLATEFORMES)

    # La construction se lance APRÈS les plateformes : le capteur d'état
    # existe alors, et le panneau peut montrer l'avancement. Elle n'est
    # relancée que si les paramètres ont changé (ou si rien n'a été produit).
    if reglage(entry, MODE) != MODE_EXTERNE:
        hass.async_create_task(_construit_si_necessaire(hass, entry))
    return True


async def _construit_si_necessaire(hass: HomeAssistant, entry: ConfigEntry) -> None:
    from .zone_entree import dossier_zone, parametres_construits
    dossier = dossier_zone(hass, entry)
    signature = await hass.async_add_executor_job(
        constructeur.signature_construite, dossier)
    if signature == parametres_construits(hass, entry):
        _LOGGER.debug("zone %s à jour, rien à construire", entry.title)
        return
    _LOGGER.info("zone %s : construction (%s)", entry.title,
                 "première fois" if signature is None else "paramètres modifiés")
    await constructeur.lance(hass, entry)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    donnees = hass.data.get(DOMAINE, {}).get(entry.entry_id)
    if donnees and donnees.processus and donnees.processus.returncode is None:
        # une construction en cours n'a plus personne à qui rendre compte
        donnees.processus.terminate()
    ok = await hass.config_entries.async_unload_platforms(entry, PLATEFORMES)
    if ok:
        frontend.async_remove_panel(hass, _url_panneau(entry),
                                    warn_if_unknown=False)
        hass.data.get(DOMAINE, {}).pop(entry.entry_id, None)
        restantes = [e for e in hass.config_entries.async_entries(DOMAINE)
                     if e.entry_id in hass.data.get(DOMAINE, {})]
        if not restantes:
            for service in (SERVICE_DEFINIR, SERVICE_SUPPRIMER,
                            SERVICE_RECONSTRUIRE):
                hass.services.async_remove(DOMAINE, service)
            hass.data[DOMAINE].pop("_services", None)
    return ok
