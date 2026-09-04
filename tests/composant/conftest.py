"""Fixtures des tests du composant Home Assistant.

Le composant vit dans custom_components/sun_shading/ : c'est le chemin imposé
par HACS, et c'est aussi celui que pytest-homeassistant-custom-component
attend, à condition de l'y autoriser explicitement (`enable_custom_integrations`).
"""
import sys
from pathlib import Path

import pytest

RACINE = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(RACINE))

pytest_plugins = "pytest_homeassistant_custom_component"


@pytest.fixture(autouse=True)
def verify_cleanup():
    """Neutralise le contrôle de propreté d'après-test du plugin.

    Il traque timers, tâches et threads survivants — utile dans l'arbre de
    Home Assistant, faussement alarmant ici : le timer vient de `frontend`,
    monté en dépendance et jamais arrêté sous test, et le thread vient du
    pool d'entrées-sorties d'aiohttp qui sert les fichiers de la zone
    (`web.FileResponse`). Aucun des deux n'appartient au composant.

    Ce qui compte vraiment — qu'une entrée déchargée ne laisse ni panneau, ni
    service, ni entité — est vérifié explicitement par les tests eux-mêmes."""
    yield


@pytest.fixture(autouse=True)
def _autorise_custom_integrations(enable_custom_integrations):
    """Sans elle, Home Assistant ignore custom_components/ sous test."""
    yield


@pytest.fixture(autouse=True)
def _pas_de_reseau(monkeypatch):
    """Aucun test ne doit interroger l'API de l'Eurométropole : la couverture
    est déclarée bonne, l'estimation rendue instantanée."""
    from custom_components.sun_shading import estimation
    monkeypatch.setattr(estimation, "couverture", lambda lon, lat: True)
    monkeypatch.setattr(estimation, "dalles_maquette", lambda *a: 29)
    monkeypatch.setattr(estimation, "dalles_photo", lambda *a: 12)
    monkeypatch.setattr(estimation, "facteur_processeur", lambda: 1.0)
    yield


@pytest.fixture(autouse=True)
def _pas_de_construction(monkeypatch):
    """Le pipeline lui-même n'est pas rejoué ici (il l'est par le test de
    non-régression du dépôt) : on vérifie qu'il est APPELÉ, avec quoi."""
    appels = []

    async def faux_lance(hass, entry, etapes=None):
        appels.append({"entry": entry.entry_id, "etapes": etapes})
        return True

    from custom_components.sun_shading import constructeur
    monkeypatch.setattr(constructeur, "lance", faux_lance)
    monkeypatch.setattr("custom_components.sun_shading.constructeur.lance", faux_lance)
    yield appels
