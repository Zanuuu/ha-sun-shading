"""Config flow : tout se règle depuis l'interface, y compris la construction.

Deux façons d'avoir une carte, choisies au premier pas :

- **construire** — l'intégration télécharge les dalles de l'Eurométropole et
  produit la zone elle-même. C'est long (des dizaines de minutes) et cela se
  dit avant de commencer : une étape de récapitulatif annonce le nombre de
  dalles, le volume à télécharger, le disque occupé et une durée estimée sur
  CETTE machine. La position et le rayon sont préremplis avec ceux de Home
  Assistant : dans le cas courant, il n'y a rien à saisir ;
- **désigner un dossier** déjà produit hors de Home Assistant par le pipeline
  (`sources/build.py`), pour qui a une zone au modèle précis ou veut éviter
  le calcul sur un Raspberry Pi.

L'entrée est créée AVANT que la construction se termine : la carte n'existe
pas encore, mais le panneau, le capteur d'avancement et le bouton
« reconstruire » sont là, et le panneau affiche l'avancement. Attendre la fin
dans le flux laisserait une boîte de dialogue ouverte pendant une heure.

Les ouvertures — quelles fenêtres, où, avec quel masque — n'ont rien à faire
ici : elles arrivent par le service `set_opening`, appelé par la carte.
"""
import logging
import os

import voluptuous as vol
from homeassistant.config_entries import (ConfigEntry, ConfigFlow,
                                          OptionsFlow)
from homeassistant.core import callback
from homeassistant.data_entry_flow import section
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers import selector

from . import estimation
from .const import (CONF_ADMIN, CONF_COMPLEMENT, CONF_DOSSIER, CONF_FEUILLAISON,
                    CONF_ICONE, CONF_OBJ, CONF_OMBRES, CONF_ORTHO_PX, CONF_PAS_AZIMUT,
                    CONF_PHOTO, CONF_PHOTO_RAYON, CONF_POSITION, CONF_RAYONS,
                    CONF_RELEVE_OMBRES, CONF_SEUIL, CONF_TITRE, DOMAINE,
                    FEUILLAISON_DEFAUT, ICONE_PANNEAU, MARGES_RAYONS, MODE,
                    MODE_CONSTRUIT, MODE_EXTERNE, OMBRES_DEFAUT,
                    PAS_AZIMUT_DEFAUT, PHOTO_RAYON_DEFAUT, RAYON_DEFAUT,
                    RAYON_MAX, RAYON_MIN, SEUIL_DEFAUT)
from .zone_entree import rayons, reglage

_LOGGER = logging.getLogger(__name__)


def _nombre(mini, maxi, pas=1, unite=None, mode="box"):
    # unit_of_measurement n'accepte pas None : la clé doit être absente
    cfg = {"min": mini, "max": maxi, "step": pas, "mode": mode}
    if unite:
        cfg["unit_of_measurement"] = unite
    return selector.NumberSelector(selector.NumberSelectorConfig(**cfg))


def schema_construction(defauts: dict) -> vol.Schema:
    """Position, titre, et une section avancée repliée pour le reste.

    Chaque champ avancé a un coût, décrit dans `data_description` : c'est la
    seule façon d'informer en continu, un formulaire Home Assistant n'ayant
    pas de script côté navigateur."""
    avance = defauts.get(CONF_RAYONS) or {}
    return vol.Schema({
        vol.Required(CONF_POSITION, default=defauts[CONF_POSITION]):
            selector.LocationSelector(
                selector.LocationSelectorConfig(radius=True, icon=ICONE_PANNEAU)),
        vol.Required(CONF_TITRE, default=defauts[CONF_TITRE]): str,
        vol.Required("advanced"): section(vol.Schema({
            vol.Optional(CONF_PHOTO, default=defauts.get(CONF_PHOTO, False)): bool,
            vol.Optional(CONF_PHOTO_RAYON,
                         default=defauts.get(CONF_PHOTO_RAYON, PHOTO_RAYON_DEFAUT)):
                _nombre(50, 400, 10, "m"),
            vol.Optional(CONF_ORTHO_PX, default=str(defauts.get(CONF_ORTHO_PX, 8192))):
                selector.SelectSelector(selector.SelectSelectorConfig(
                    options=["4096", "8192"], mode=selector.SelectSelectorMode.DROPDOWN)),
            vol.Optional(CONF_RELEVE_OMBRES,
                         default=defauts.get(CONF_RELEVE_OMBRES, 0.78)):
                _nombre(0.5, 1.0, 0.01),
            vol.Optional(CONF_OBJ, default=defauts.get(CONF_OBJ, "")): str,
            vol.Optional(CONF_COMPLEMENT, default=defauts.get(CONF_COMPLEMENT, True)): bool,
            vol.Optional("r_bati", default=avance.get("bati", 0)): _nombre(0, RAYON_MAX + 100, 10, "m"),
            vol.Optional("r_terrain", default=avance.get("terrain", 0)): _nombre(0, RAYON_MAX + 100, 10, "m"),
            vol.Optional("r_arbres", default=avance.get("arbres", 0)): _nombre(0, RAYON_MAX + 100, 10, "m"),
            vol.Optional("r_textures", default=avance.get("textures", 0)): _nombre(0, RAYON_MAX + 100, 10, "m"),
            vol.Optional("r_mnt_natif", default=avance.get("mnt_natif", 0)): _nombre(0, RAYON_MAX + 100, 10, "m"),
        }), {"collapsed": True}),
    })


def schema_externe(defauts: dict) -> vol.Schema:
    return vol.Schema({
        vol.Required(CONF_DOSSIER, default=defauts.get(CONF_DOSSIER, "sun_shading")): str,
        vol.Required(CONF_TITRE, default=defauts.get(CONF_TITRE, "Sun Shading")): str,
    })


def _saisie_vers_donnees(saisie: dict) -> dict:
    """Aplatit la section avancée : les rayons explicites (0 = déduire du
    rayon affiché) vont dans un sous-dictionnaire, le reste à la racine."""
    avance = dict(saisie.pop("advanced", {}) or {})
    explicites = {cle: avance.pop(f"r_{cle}")
                  for cle in ("bati", "terrain", "arbres", "textures", "mnt_natif")
                  if avance.get(f"r_{cle}")}
    donnees = {MODE: MODE_CONSTRUIT, **saisie, **avance, CONF_RAYONS: explicites}
    if donnees.get(CONF_ORTHO_PX):
        donnees[CONF_ORTHO_PX] = int(donnees[CONF_ORTHO_PX])
    if not donnees.get(CONF_OBJ):
        donnees.pop(CONF_OBJ, None)
    return donnees


class FluxSunShading(ConfigFlow, domain=DOMAINE):
    VERSION = 1

    def __init__(self):
        self._donnees = {}

    # ---- création ----
    async def async_step_user(self, user_input=None):
        return self.async_show_menu(step_id="user",
                                    menu_options=["build", "external"])

    async def async_step_build(self, user_input=None):
        erreurs = {}
        if user_input is not None:
            donnees = _saisie_vers_donnees(dict(user_input))
            erreurs = await self._valide(donnees)
            if not erreurs:
                self._donnees = donnees
                return await self.async_step_estimate()
        return self.async_show_form(
            step_id="build", errors=erreurs,
            data_schema=self.add_suggested_values_to_schema(
                schema_construction(self._defauts()), user_input),
        )

    async def async_step_estimate(self, user_input=None):
        """Ce que la construction va coûter, avant de la lancer."""
        if user_input is not None:
            position = self._donnees[CONF_POSITION]
            await self.async_set_unique_id(
                f"{position['latitude']:.5f},{position['longitude']:.5f}")
            self._abort_if_unique_id_configured()
            return self.async_create_entry(title=self._donnees[CONF_TITRE],
                                           data=self._donnees)
        return self.async_show_form(
            step_id="estimate", data_schema=vol.Schema({}),
            description_placeholders=await self._estimation())

    async def async_step_external(self, user_input=None):
        erreurs = {}
        if user_input is not None:
            chemin = self.hass.config.path(user_input[CONF_DOSSIER])
            if not await self.hass.async_add_executor_job(
                    os.path.exists, os.path.join(chemin, "manifest.json")):
                erreurs[CONF_DOSSIER] = "no_manifest"
            else:
                await self.async_set_unique_id(f"dossier:{user_input[CONF_DOSSIER]}")
                self._abort_if_unique_id_configured()
                return self.async_create_entry(
                    title=user_input[CONF_TITRE],
                    data={MODE: MODE_EXTERNE, **user_input})
        return self.async_show_form(
            step_id="external", errors=erreurs,
            data_schema=self.add_suggested_values_to_schema(
                schema_externe({}), user_input))

    # ---- reconfiguration ----
    async def async_step_reconfigure(self, user_input=None):
        entree = self._get_reconfigure_entry()
        if reglage(entree, MODE) == MODE_EXTERNE:
            return await self.async_step_reconfigure_external(user_input)
        erreurs = {}
        if user_input is not None:
            donnees = _saisie_vers_donnees(dict(user_input))
            erreurs = await self._valide(donnees)
            if not erreurs:
                # le rechargement de l'entrée relance la construction si les
                # paramètres qui la déterminent ont changé (cf. __init__.py)
                return self.async_update_reload_and_abort(
                    entree, title=donnees[CONF_TITRE], data_updates=donnees)
        courant = {**entree.data, **entree.options}
        avance = courant.get(CONF_RAYONS) or {}
        suggere = user_input or {
            CONF_POSITION: courant[CONF_POSITION], CONF_TITRE: courant[CONF_TITRE],
            "advanced": {
                CONF_PHOTO: courant.get(CONF_PHOTO, False),
                CONF_PHOTO_RAYON: courant.get(CONF_PHOTO_RAYON, PHOTO_RAYON_DEFAUT),
                CONF_ORTHO_PX: str(courant.get(CONF_ORTHO_PX, 8192)),
                CONF_RELEVE_OMBRES: courant.get(CONF_RELEVE_OMBRES, 0.78),
                CONF_OBJ: courant.get(CONF_OBJ, ""),
                **{f"r_{k}": avance.get(k, 0) for k in MARGES_RAYONS},
                "r_mnt_natif": avance.get("mnt_natif", 0),
            },
        }
        return self.async_show_form(
            step_id="reconfigure", errors=erreurs,
            data_schema=self.add_suggested_values_to_schema(
                schema_construction(self._defauts()), suggere))

    async def async_step_reconfigure_external(self, user_input=None):
        entree = self._get_reconfigure_entry()
        erreurs = {}
        if user_input is not None:
            chemin = self.hass.config.path(user_input[CONF_DOSSIER])
            if not await self.hass.async_add_executor_job(
                    os.path.exists, os.path.join(chemin, "manifest.json")):
                erreurs[CONF_DOSSIER] = "no_manifest"
            else:
                return self.async_update_reload_and_abort(
                    entree, title=user_input[CONF_TITRE],
                    data_updates={MODE: MODE_EXTERNE, **user_input})
        return self.async_show_form(
            step_id="reconfigure_external", errors=erreurs,
            data_schema=self.add_suggested_values_to_schema(
                schema_externe({**entree.data, **entree.options}), user_input))

    # ---- outils ----
    def _defauts(self) -> dict:
        return {
            CONF_POSITION: {"latitude": self.hass.config.latitude,
                            "longitude": self.hass.config.longitude,
                            "radius": RAYON_DEFAUT},
            CONF_TITRE: self.hass.config.location_name or "Sun Shading",
        }

    async def _valide(self, donnees: dict) -> dict:
        """Rayon dans les bornes, point couvert par la maquette, OBJ présent."""
        erreurs = {}
        position = donnees[CONF_POSITION]
        rayon = float(position.get("radius") or RAYON_DEFAUT)
        if not RAYON_MIN <= rayon <= RAYON_MAX:
            erreurs[CONF_POSITION] = "radius_out_of_range"
        elif not await self.hass.async_add_executor_job(
                estimation.couverture, position["longitude"], position["latitude"]):
            erreurs[CONF_POSITION] = "out_of_coverage"
        if donnees.get(CONF_OBJ) and not await self.hass.async_add_executor_job(
                os.path.exists, self.hass.config.path(donnees[CONF_OBJ])):
            erreurs["advanced"] = "obj_not_found"
        return erreurs

    async def _estimation(self) -> dict:
        """Chiffres du récapitulatif ; en cas de réseau muet, on le dit."""
        entree = _EntreeFictive(self._donnees)
        try:
            valeurs = await self.hass.async_add_executor_job(
                estimation.estime,
                self._donnees[CONF_POSITION]["longitude"],
                self._donnees[CONF_POSITION]["latitude"],
                rayons(entree),
                bool(self._donnees.get(CONF_PHOTO)),
                0,
                await self.hass.async_add_executor_job(estimation.facteur_processeur),
            )
        except OSError as err:
            _LOGGER.warning("estimation impossible : %s", err)
            valeurs = {"tiles": "?", "photo_tiles": "?", "download_gb": "?",
                       "disk_mb": "?", "duration": "?", "cache_gb": "?"}
        valeurs["title"] = self._donnees[CONF_TITRE]
        # la ligne du photomaillage n'existe que s'il est demandé : une ligne
        # « 0 dalle » dans le récapitulatif ferait douter du reste
        valeurs["photo_tiles_line"] = (
            f"\nPhotomesh tiles: {valeurs['photo_tiles']}"
            if self._donnees.get(CONF_PHOTO) else "")
        return valeurs

    @staticmethod
    @callback
    def async_get_options_flow(entry: ConfigEntry) -> OptionsFlow:
        return OptionsSunShading()


class _EntreeFictive:
    """Le temps du flux, l'entrée n'existe pas encore ; `rayons()` n'a besoin
    que de `.data` et `.options`."""

    def __init__(self, donnees):
        self.data = donnees
        self.options = {}


class OptionsSunShading(OptionsFlow):
    """Ce qui se change sans rien reconstruire : le panneau et les réglages
    d'évaluation des masques."""

    async def async_step_init(self, user_input=None):
        if user_input is not None:
            donnees = dict(user_input)
            donnees[CONF_FEUILLAISON] = [
                float(v) for v in str(donnees[CONF_FEUILLAISON]).replace(";", ",").split(",")
            ]
            return self.async_create_entry(title="", data=donnees)
        courant = {**self.config_entry.data, **self.config_entry.options}
        feuillaison = courant.get(CONF_FEUILLAISON, FEUILLAISON_DEFAUT)
        return self.async_show_form(step_id="init", data_schema=vol.Schema({
            vol.Required(CONF_TITRE, default=courant.get(CONF_TITRE, "Sun Shading")): str,
            vol.Required(CONF_ICONE, default=courant.get(CONF_ICONE, ICONE_PANNEAU)):
                selector.IconSelector(),
            vol.Required(CONF_ADMIN, default=courant.get(CONF_ADMIN, True)): bool,
            vol.Required(CONF_OMBRES, default=str(courant.get(CONF_OMBRES, OMBRES_DEFAUT))):
                selector.SelectSelector(selector.SelectSelectorConfig(
                    options=["2048", "4096", "8192"],
                    mode=selector.SelectSelectorMode.DROPDOWN)),
            vol.Required("advanced"): section(vol.Schema({
                vol.Optional(CONF_FEUILLAISON,
                             default=", ".join(str(int(v)) for v in feuillaison)): str,
                vol.Optional(CONF_SEUIL, default=courant.get(CONF_SEUIL, SEUIL_DEFAUT)):
                    _nombre(0.1, 0.9, 0.05),
                vol.Optional(CONF_PAS_AZIMUT,
                             default=courant.get(CONF_PAS_AZIMUT, PAS_AZIMUT_DEFAUT)):
                    _nombre(0.25, 10, 0.25, "°"),
            }), {"collapsed": True}),
        }))
