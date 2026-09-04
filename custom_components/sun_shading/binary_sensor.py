"""Un capteur binaire par ouverture : « le soleil l'atteint-il en ce moment ».

Destiné à l'entrée `shading_custom_sensor` du blueprint Cover Control
Automation, qui exige un état strictement binaire. Il remplace la fenêtre
d'azimut fixe, qui ignore bâtiments voisins, arbres, débords et lucarnes.
"""
import logging

from homeassistant.components.binary_sensor import (BinarySensorDeviceClass,
                                                    BinarySensorEntity)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.event import async_track_state_change_event
from homeassistant.util import dt as dt_util

from . import masque
from .const import DOMAINE, SIGNAL_AJOUT, SIGNAL_MAJ
from .entite import appareil

_LOGGER = logging.getLogger(__name__)

SOLEIL = "sun.sun"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry,
                            ajoute: AddEntitiesCallback) -> None:
    depot = hass.data[DOMAINE][entry.entry_id].depot
    ajoute([OuvertureAuSoleil(entry, depot, cle) for cle in depot.ouvertures])

    @callback
    def sur_ajout(cle: str) -> None:
        # une ouverture définie alors que Home Assistant tourne déjà
        ajoute([OuvertureAuSoleil(entry, depot, cle)])

    entry.async_on_unload(async_dispatcher_connect(
        hass, f"{SIGNAL_AJOUT}_{entry.entry_id}", sur_ajout))


class OuvertureAuSoleil(BinarySensorEntity):
    _attr_device_class = BinarySensorDeviceClass.LIGHT
    _attr_icon = "mdi:weather-sunny"
    _attr_should_poll = False
    _attr_has_entity_name = True
    _attr_translation_key = "direct_sun"

    def __init__(self, entry, depot, cle: str):
        self._depot = depot
        self._cle = cle
        self._attr_unique_id = f"{entry.entry_id}_{cle}"
        self._attr_device_info = appareil(entry)
        self._entry_id = entry.entry_id
        # nom traduit (« Direct sun … » / « Soleil direct … ») : l'entity_id
        # généré suit la langue de l'instance
        self._attr_translation_placeholders = {"name": depot.ouvertures[cle]["name"]}
        self._bornes = (90.0, 90.0)
        self._feuillage = "bare"

    async def async_added_to_hass(self) -> None:
        # le soleil est la seule entrée : pas de sondage, on suit son état
        self.async_on_remove(async_track_state_change_event(
            self.hass, [SOLEIL], self._sur_soleil))
        self.async_on_remove(async_dispatcher_connect(
            self.hass, f"{SIGNAL_MAJ}_{self._entry_id}", self._sur_maj))
        self._recalcule()

    @callback
    def _sur_soleil(self, _event) -> None:
        self._recalcule()
        self.async_write_ha_state()

    @callback
    def _sur_maj(self, cle: str) -> None:
        if cle != self._cle:
            return
        if cle not in self._depot.ouvertures:
            self.hass.async_create_task(self.async_remove(force_remove=True))
            return
        self._attr_translation_placeholders = {"name": self._depot.ouvertures[cle]["name"]}
        self._recalcule()
        self.async_write_ha_state()

    @callback
    def _recalcule(self) -> None:
        o = self._depot.ouvertures.get(self._cle)
        etat = self.hass.states.get(SOLEIL) if self.hass else None
        if o is None or etat is None:
            self._attr_available = False
            return
        azimut = etat.attributes.get("azimuth")
        elevation = etat.attributes.get("elevation")
        if azimut is None or elevation is None:
            # au démarrage, sun.sun existe avant ses attributs
            self._attr_available = False
            return
        self._attr_available = True
        # jour en base 0, comme etat.jour dans app.js
        jour = dt_util.now().timetuple().tm_yday - 1
        self._bornes = masque.bornes(o, azimut, jour)
        facteur = masque.facteur_feuillaison(jour, o["foliation"])
        self._feuillage = "leafy" if facteur > 0.5 else "bare"
        bas, haut = self._bornes
        self._attr_is_on = bas <= elevation <= haut

    @property
    def extra_state_attributes(self):
        o = self._depot.ouvertures.get(self._cle, {})
        bas, haut = self._bornes
        etat = self.hass.states.get(SOLEIL) if self.hass else None
        elevation = etat.attributes.get("elevation") if etat else None
        attributs = {
            # la carte reconnaît ses entités à cet attribut, pas à leur nom
            "opening": self._cle,
            # nom BRUT de l'ouverture : la carte le republie tel quel, alors
            # que friendly_name porterait en plus le nom de l'appareil
            "opening_name": o.get("name"),
            "elevation_min": round(bas, 2),
            "elevation_max": round(haut, 2),
            "foliage": self._feuillage,
            "cover": o.get("cover"),
            # relus par la carte pour reposer la sonde et tout recalculer
            "point": o.get("point"),
            "normal": o.get("normal"),
        }
        if elevation is not None:
            # combien de degrés séparent le soleil de la borne franchie :
            # positif quand il éclaire, négatif quand il manque
            attributs["margin"] = round(min(elevation - bas, haut - elevation), 2)
        return attributs
