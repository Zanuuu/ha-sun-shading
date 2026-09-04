"""Reconstruire la zone à la demande.

Utile après une mise à jour des données de l'Eurométropole, ou quand une
construction a échoué (réseau coupé, disque plein) : rien d'autre à faire que
d'appuyer, les dalles déjà téléchargées ne le sont pas deux fois.
"""
from homeassistant.components.button import ButtonEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import (DOMAINE, ETAT_TRAVAIL, MODE, MODE_EXTERNE,
                    SIGNAL_CONSTRUCTION)
from .entite import appareil
from .zone_entree import reglage


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry,
                            ajoute: AddEntitiesCallback) -> None:
    # en mode « données externes », l'intégration ne construit rien
    if reglage(entry, MODE) == MODE_EXTERNE:
        return
    ajoute([BoutonReconstruire(hass, entry)])


class BoutonReconstruire(ButtonEntity):
    _attr_has_entity_name = True
    _attr_translation_key = "rebuild"
    _attr_icon = "mdi:refresh"
    _attr_should_poll = False

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry):
        self._entry = entry
        self._etat = hass.data[DOMAINE][entry.entry_id].construction
        self._attr_unique_id = f"{entry.entry_id}_rebuild"
        self._attr_device_info = appareil(entry)

    async def async_added_to_hass(self) -> None:
        self.async_on_remove(async_dispatcher_connect(
            self.hass, f"{SIGNAL_CONSTRUCTION}_{self._entry.entry_id}",
            self._sur_maj))

    @callback
    def _sur_maj(self) -> None:
        self.async_write_ha_state()

    @property
    def available(self) -> bool:
        # pas deux constructions à la fois pour la même zone
        return self._etat.etat != ETAT_TRAVAIL

    async def async_press(self) -> None:
        from .constructeur import lance
        await lance(self.hass, self._entry)
