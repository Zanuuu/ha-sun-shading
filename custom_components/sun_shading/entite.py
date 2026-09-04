"""L'appareil auquel se rattachent les entités d'une entrée.

Un appareil par zone : ses capteurs d'ouverture, son état de construction et
son bouton de reconstruction se retrouvent sur une seule page, et une
instance peut suivre plusieurs adresses sans que tout se mélange.
"""
from homeassistant.config_entries import ConfigEntry
from homeassistant.helpers.device_registry import DeviceInfo

from .const import DOMAINE


def appareil(entry: ConfigEntry) -> DeviceInfo:
    return DeviceInfo(
        identifiers={(DOMAINE, entry.entry_id)},
        name=entry.title,
        manufacturer="Eurométropole de Strasbourg (open data)",
        model="Sun Shading",
        entry_type=None,
    )
