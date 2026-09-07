"""L'appareil auquel se rattachent les entités d'une entrée.

Un appareil par zone : ses capteurs d'ouverture, son état de construction et
son bouton de reconstruction se retrouvent sur une seule page, et une
instance peut suivre plusieurs adresses sans que tout se mélange.
"""
from homeassistant.config_entries import ConfigEntry
from homeassistant.helpers.device_registry import DeviceInfo

from .const import DOMAINE

# Version du composant (manifest.json), posée par async_setup_entry avant que
# les plateformes ne créent leurs entités. Attribut de module plutôt que
# paramètre : appareil() est appelé depuis trois constructeurs d'entités, qui
# n'ont pas `hass` sous la main.
VERSION = None


def appareil(entry: ConfigEntry) -> DeviceInfo:
    return DeviceInfo(
        identifiers={(DOMAINE, entry.entry_id)},
        name=entry.title,
        # l'AUTEUR de l'intégration, pas la source des données : le crédit de
        # l'Eurométropole et de l'IGN est porté par la page elle-même
        manufacturer="Zanuuu",
        model="Sun Shading",
        sw_version=VERSION,
        entry_type=None,
    )
