"""Où en est la construction de la zone.

Une construction dure des dizaines de minutes et n'affiche rien par elle-même :
sans ce capteur, l'utilisateur qui vient de valider le config flow n'aurait
qu'un panneau vide et aucun moyen de savoir si quelque chose se passe. Le
panneau le lit aussi pour afficher son écran d'attente.
"""
from homeassistant.components.sensor import SensorDeviceClass, SensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import (DOMAINE, ETAT_ERREUR, ETAT_INACTIF, ETAT_TERMINE,
                    ETAT_TRAVAIL, SIGNAL_CONSTRUCTION)
from .entite import appareil


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry,
                            ajoute: AddEntitiesCallback) -> None:
    ajoute([EtatConstructionCapteur(hass, entry)])


class EtatConstructionCapteur(SensorEntity):
    _attr_has_entity_name = True
    _attr_translation_key = "build_state"
    _attr_icon = "mdi:progress-wrench"
    _attr_should_poll = False
    # un état parmi quatre : device_class ENUM, sinon Home Assistant refuse
    # la liste d'options et l'entité ne naît jamais
    _attr_device_class = SensorDeviceClass.ENUM
    _attr_options = [ETAT_INACTIF, ETAT_TRAVAIL, ETAT_TERMINE, ETAT_ERREUR]

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry):
        self._entry = entry
        self._etat = hass.data[DOMAINE][entry.entry_id].construction
        self._attr_unique_id = f"{entry.entry_id}_build"
        self._attr_device_info = appareil(entry)

    async def async_added_to_hass(self) -> None:
        self.async_on_remove(async_dispatcher_connect(
            self.hass, f"{SIGNAL_CONSTRUCTION}_{self._entry.entry_id}",
            self._sur_maj))

    @callback
    def _sur_maj(self) -> None:
        self.async_write_ha_state()

    @property
    def native_value(self):
        return self._etat.etat

    @property
    def extra_state_attributes(self):
        return {
            "progress": round(self._etat.fraction, 3),
            "percent": round(self._etat.fraction * 100),
            "step": self._etat.message,
            "error": self._etat.erreur or None,
        }
