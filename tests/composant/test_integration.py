"""Le composant chargé : panneau, entités, services, reconstruction.

Ces vérifications tiennent le contrat que la page attend — le nom de
l'élément, le chemin des données, les attributs des capteurs — et le
comportement qui coûte cher à découvrir en production : ne pas reconstruire
une zone déjà à jour, ne pas laisser une seconde construction démarrer.
"""
import json

import pytest
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import ServiceValidationError
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.sun_shading.const import (CONF_DOSSIER, CONF_POSITION,
                                                 CONF_TITRE, DOMAINE,
                                                 ETAT_INACTIF, MODE,
                                                 MODE_CONSTRUIT, MODE_EXTERNE,
                                                 SERVICE_DEFINIR,
                                                 SERVICE_RECONSTRUIRE,
                                                 SERVICE_SUPPRIMER)

MASQUE = [[10.0, 80.0]] * 360


def ouverture(**extra):
    d = {"id": "salon", "name": "Salon", "cover": "cover.salon",
         "point": [1.0, 2.0, 3.0], "normal": [0.0, 0.0, 1.0],
         "leafy": MASQUE, "bare": MASQUE}
    d.update(extra)
    return d


async def entree_externe(hass: HomeAssistant, tmp_path, titre="Maison"):
    """Une entrée en mode « données externes » : elle ne construit rien, donc
    elle exerce tout le reste sans toucher au pipeline."""
    dossier = tmp_path / "zone"
    dossier.mkdir(parents=True, exist_ok=True)
    (dossier / "manifest.json").write_text(json.dumps({"zone": "essai"}))
    entry = MockConfigEntry(domain=DOMAINE, title=titre, data={
        MODE: MODE_EXTERNE, CONF_DOSSIER: str(dossier), CONF_TITRE: titre})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry, dossier


async def test_panneau_et_entites(hass: HomeAssistant, tmp_path):
    entry, _ = await entree_externe(hass, tmp_path)

    from homeassistant.components.frontend import DATA_PANELS
    panneau = next(p for p in hass.data[DATA_PANELS].values()
                   if p.component_name == "custom")
    cfg = panneau.config["_panel_custom"]
    # ce que lit l'élément : nom du composant web et emplacement des données
    assert cfg["name"] == "sun-shading"
    assert panneau.config["data"] == f"/sun_shading/data/{entry.entry_id}/"
    assert panneau.require_admin is True

    etat = hass.states.get("sensor.maison_build_state")
    assert etat is not None and etat.state == ETAT_INACTIF
    # en mode externe, rien à reconstruire : pas de bouton
    assert hass.states.get("button.maison_rebuild") is None


async def test_service_publie_une_ouverture(hass: HomeAssistant, tmp_path):
    """Le contrat de la page : un appel de service crée le capteur, avec les
    attributs que la carte relit pour se reconnaître et tout recalculer."""
    entry, _ = await entree_externe(hass, tmp_path)
    await hass.services.async_call(DOMAINE, SERVICE_DEFINIR, ouverture(),
                                   blocking=True)
    await hass.async_block_till_done()

    etat = hass.states.get("binary_sensor.maison_direct_sun_salon")
    assert etat is not None, [e for e in hass.states.async_entity_ids("binary_sensor")]
    assert etat.attributes["opening"] == "salon"
    assert etat.attributes["cover"] == "cover.salon"
    assert etat.attributes["point"] == [1.0, 2.0, 3.0]
    assert etat.attributes["normal"] == [0.0, 0.0, 1.0]
    assert "elevation_min" in etat.attributes and "foliage" in etat.attributes

    await hass.services.async_call(DOMAINE, SERVICE_SUPPRIMER, {"id": "salon"},
                                   blocking=True)
    await hass.async_block_till_done()
    assert hass.states.get("binary_sensor.maison_direct_sun_salon") is None


async def test_nom_de_l_ouverture_republiable(hass: HomeAssistant, tmp_path):
    """La carte republie le nom qu'elle lit ; il ne doit pas se gonfler.

    Vécu en production le 04/09/2026 : avec `has_entity_name`, le
    `friendly_name` vaut « <appareil> Soleil direct <nom> ». La carte le
    relisait comme nom d'ouverture et le republiait, si bien que chaque
    « Tout recalculer » ajoutait un préfixe de plus. D'où cet attribut
    dédié, qui porte le nom BRUT."""
    await entree_externe(hass, tmp_path)
    await hass.services.async_call(DOMAINE, SERVICE_DEFINIR, ouverture(),
                                   blocking=True)
    await hass.async_block_till_done()
    etat = hass.states.get("binary_sensor.maison_direct_sun_salon")
    assert etat.attributes["opening_name"] == "Salon"
    assert etat.attributes["opening_name"] != etat.attributes.get("friendly_name")


async def test_masque_incoherent_refuse(hass: HomeAssistant, tmp_path):
    """360 bandes pour un pas de 1° : un masque tronqué serait lu de travers
    sur tout le tour, sans aucun symptôme visible."""
    await entree_externe(hass, tmp_path)
    with pytest.raises(ServiceValidationError):
        await hass.services.async_call(
            DOMAINE, SERVICE_DEFINIR, ouverture(leafy=[[10.0, 80.0]] * 180),
            blocking=True)


async def test_deux_zones_exigent_entry_id(hass: HomeAssistant, tmp_path):
    """Publier le masque d'une fenêtre dans la mauvaise zone serait pire
    qu'une erreur : le repère local n'est pas le même."""
    await entree_externe(hass, tmp_path / "a", "Maison")
    b, _ = await entree_externe(hass, tmp_path / "b", "Bureau")
    with pytest.raises(ServiceValidationError):
        await hass.services.async_call(DOMAINE, SERVICE_DEFINIR, ouverture(),
                                       blocking=True)
    await hass.services.async_call(
        DOMAINE, SERVICE_DEFINIR, ouverture(entry_id=b.entry_id), blocking=True)
    await hass.async_block_till_done()
    assert hass.states.get("binary_sensor.bureau_direct_sun_salon") is not None


async def test_reconstruction_refusee_en_mode_externe(hass: HomeAssistant, tmp_path):
    await entree_externe(hass, tmp_path)
    with pytest.raises(ServiceValidationError):
        await hass.services.async_call(DOMAINE, SERVICE_RECONSTRUIRE, {},
                                       blocking=True)


async def test_zone_a_jour_non_reconstruite(hass: HomeAssistant, tmp_path,
                                            _pas_de_construction, monkeypatch):
    """Au démarrage, une zone dont la signature n'a pas bougé ne relance pas
    des dizaines de minutes de calcul."""
    from custom_components.sun_shading import constructeur
    from custom_components.sun_shading.zone_entree import parametres_construits

    donnees = {MODE: MODE_CONSTRUIT, CONF_TITRE: "Maison",
               CONF_POSITION: {"latitude": 48.6, "longitude": 7.75, "radius": 800.0}}
    entry = MockConfigEntry(domain=DOMAINE, title="Maison", data=donnees)
    entry.add_to_hass(hass)
    monkeypatch.setattr(hass.config, "config_dir", str(tmp_path))

    # première fois : rien de construit, le pipeline doit être appelé
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    assert len(_pas_de_construction) == 1

    # signature à jour : au rechargement, plus rien
    dossier = tmp_path / "sun_shading" / "maison"
    dossier.mkdir(parents=True, exist_ok=True)
    (dossier / "construit.json").write_text(
        json.dumps(parametres_construits(hass, entry), sort_keys=True))
    await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done()
    assert len(_pas_de_construction) == 1, "une zone à jour ne se reconstruit pas"

    # paramètre changé : reconstruction
    hass.config_entries.async_update_entry(
        entry, data={**donnees, CONF_POSITION: {"latitude": 48.61,
                                                "longitude": 7.75, "radius": 800.0}})
    await hass.async_block_till_done()
    assert len(_pas_de_construction) == 2, "un changement de position reconstruit"


async def test_donnees_servies_en_http(hass: HomeAssistant, tmp_path,
                                       hass_client_no_auth):
    """La page charge son manifest par HTTP, sans jeton (comme /local/).

    Vérifié ici parce que le 404 est silencieux côté carte : elle affiche
    « aucune zone à cet emplacement » et rien dans le journal de Home
    Assistant ne dit pourquoi. C'est exactement ce qui est arrivé le
    04/09/2026 — la vue servait le dossier de la zone, alors que le livrable
    est dans son sous-dossier dist/."""
    entry, dossier = await entree_externe(hass, tmp_path)
    (dossier / "donnees.abcdef0123.bin.gz").write_bytes(b"\x1f\x8b\x00")
    client = await hass_client_no_auth()

    rep = await client.get(f"/sun_shading/data/{entry.entry_id}/manifest.json")
    assert rep.status == 200
    assert (await rep.json())["zone"] == "essai"
    assert rep.headers["Cache-Control"] == "no-cache"

    # un binaire haché ne change jamais de contenu : cache immuable
    rep = await client.get(
        f"/sun_shading/data/{entry.entry_id}/donnees.abcdef0123.bin.gz")
    assert rep.status == 200 and "immutable" in rep.headers["Cache-Control"]

    # jamais hors du dossier déclaré, ni pour une entrée inconnue
    assert (await client.get(
        f"/sun_shading/data/{entry.entry_id}/../../secrets.yaml")).status == 404
    assert (await client.get("/sun_shading/data/inconnu/manifest.json")).status == 404
