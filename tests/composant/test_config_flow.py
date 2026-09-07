"""Le config flow : c'est par lui que tout se configure, donc le seul chemin
par lequel une erreur atteint l'utilisateur avant même la première carte."""
import pytest
from homeassistant import config_entries, data_entry_flow
from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.sun_shading import estimation
from custom_components.sun_shading import zone_entree
from custom_components.sun_shading.const import (CONF_COMPLEMENT, CONF_DOSSIER,
                                                 CONF_OBJ, CONF_PHOTO,
                                                 CONF_POSITION, CONF_RAYONS,
                                                 CONF_TITRE, DOMAINE, MODE,
                                                 MODE_CONSTRUIT, MODE_EXTERNE)

# cathédrale de Strasbourg : le point de la zone de démonstration, et un
# lieu public — un test ne doit pas figer une adresse privée
POSITION = {"latitude": 48.581944, "longitude": 7.750833, "radius": 1000.0}


def saisie(**extra):
    avance = {"photomesh": False, "photomesh_radius": 200, "ortho_px": "8192",
              "shadow_lift": 0.78, "obj_path": "", "r_bati": 0, "r_terrain": 0,
              "r_arbres": 0, "r_textures": 0, "r_mnt_natif": 0}
    avance.update(extra.pop("advanced", {}))
    return {CONF_POSITION: dict(POSITION, **extra.pop("position", {})),
            CONF_TITRE: extra.pop("titre", "Maison"), "advanced": avance}


async def ouvre(hass: HomeAssistant, etape: str):
    flux = await hass.config_entries.flow.async_init(
        DOMAINE, context={"source": config_entries.SOURCE_USER})
    assert flux["type"] is data_entry_flow.FlowResultType.MENU
    return await hass.config_entries.flow.async_configure(
        flux["flow_id"], {"next_step_id": etape})


async def test_construction_complete(hass: HomeAssistant):
    """Le chemin nominal : menu, formulaire, récapitulatif chiffré, entrée."""
    form = await ouvre(hass, "build")
    assert form["step_id"] == "build"

    resume = await hass.config_entries.flow.async_configure(
        form["flow_id"], saisie())
    assert resume["step_id"] == "estimate"
    # le récapitulatif annonce des chiffres, pas des points d'interrogation
    p = resume["description_placeholders"]
    assert p["tiles"] == 29 and p["duration"] and p["download_gb"] != "?"
    assert p["photo_tiles_line"] == "", "sans photomaillage, pas de ligne"

    entree = await hass.config_entries.flow.async_configure(resume["flow_id"], {})
    assert entree["type"] is data_entry_flow.FlowResultType.CREATE_ENTRY
    assert entree["title"] == "Maison"
    assert entree["data"][MODE] == MODE_CONSTRUIT
    assert entree["data"][CONF_RAYONS] == {}, "aucun rayon forcé"


async def test_photomaillage_annonce_ses_dalles(hass: HomeAssistant):
    form = await ouvre(hass, "build")
    resume = await hass.config_entries.flow.async_configure(
        form["flow_id"], saisie(advanced={"photomesh": True}))
    assert "12" in resume["description_placeholders"]["photo_tiles_line"]


async def test_hors_couverture(hass: HomeAssistant, monkeypatch):
    """Un point hors Eurométropole doit être refusé À LA SAISIE : sinon la
    construction tourne des minutes pour produire une carte vide."""
    monkeypatch.setattr(estimation, "couverture", lambda lon, lat: False)
    form = await ouvre(hass, "build")
    r = await hass.config_entries.flow.async_configure(
        form["flow_id"], saisie(position={"latitude": 43.6, "longitude": 1.44}))
    assert r["errors"] == {CONF_POSITION: "out_of_coverage"}


async def test_rayon_hors_bornes(hass: HomeAssistant):
    """Au-delà de 1500 m, le repère local quantifié en int16 déborde."""
    form = await ouvre(hass, "build")
    r = await hass.config_entries.flow.async_configure(
        form["flow_id"], saisie(position={"radius": 2500.0}))
    assert r["errors"] == {CONF_POSITION: "radius_out_of_range"}


async def test_obj_introuvable(hass: HomeAssistant):
    form = await ouvre(hass, "build")
    r = await hass.config_entries.flow.async_configure(
        form["flow_id"], saisie(advanced={"obj_path": "absent/toiture.obj"}))
    assert r["errors"] == {"advanced": "obj_not_found"}


async def test_rayons_explicites_conserves(hass: HomeAssistant):
    form = await ouvre(hass, "build")
    resume = await hass.config_entries.flow.async_configure(
        form["flow_id"], saisie(advanced={"r_terrain": 1200}))
    entree = await hass.config_entries.flow.async_configure(resume["flow_id"], {})
    assert entree["data"][CONF_RAYONS] == {"terrain": 1200}


async def test_meme_zone_deux_fois(hass: HomeAssistant):
    for attendu in (data_entry_flow.FlowResultType.CREATE_ENTRY,
                    data_entry_flow.FlowResultType.ABORT):
        form = await ouvre(hass, "build")
        resume = await hass.config_entries.flow.async_configure(
            form["flow_id"], saisie())
        r = await hass.config_entries.flow.async_configure(resume["flow_id"], {})
        assert r["type"] is attendu
    assert r["reason"] == "already_configured"


async def test_dossier_externe(hass: HomeAssistant, tmp_path):
    """Le mode « données externes » exige un vrai dossier de build."""
    form = await ouvre(hass, "external")
    r = await hass.config_entries.flow.async_configure(
        form["flow_id"], {CONF_DOSSIER: "absent", CONF_TITRE: "Zone"})
    assert r["errors"] == {CONF_DOSSIER: "no_manifest"}

    dossier = tmp_path / "zone"
    dossier.mkdir()
    (dossier / "manifest.json").write_text("{}")
    r = await hass.config_entries.flow.async_configure(
        form["flow_id"], {CONF_DOSSIER: str(dossier), CONF_TITRE: "Zone"})
    assert r["type"] is data_entry_flow.FlowResultType.CREATE_ENTRY
    assert r["data"][MODE] == MODE_EXTERNE


async def test_complement_bdtopo_active_par_defaut(hass: HomeAssistant):
    """La maquette 2022 vieillit : sans rien cocher, les bâtiments récents
    de la BD TOPO sont ajoutés, et la zone du pipeline le sait."""
    form = await ouvre(hass, "build")
    resume = await hass.config_entries.flow.async_configure(form["flow_id"], saisie())
    entree = await hass.config_entries.flow.async_configure(resume["flow_id"], {})
    assert entree["data"][CONF_COMPLEMENT] is True
    entry = MockConfigEntry(domain=DOMAINE, title="Maison", data=entree["data"])
    assert zone_entree.config_zone(entry)["complement"] == {"bdtopo": True}


async def test_complement_bdtopo_refusable(hass: HomeAssistant):
    """Décoché : la zone le porte, et c'est un paramètre de reconstruction."""
    form = await ouvre(hass, "build")
    resume = await hass.config_entries.flow.async_configure(
        form["flow_id"], saisie(advanced={"bdtopo": False}))
    entree = await hass.config_entries.flow.async_configure(resume["flow_id"], {})
    assert entree["data"][CONF_COMPLEMENT] is False
    entry = MockConfigEntry(domain=DOMAINE, title="Maison", data=entree["data"])
    assert zone_entree.config_zone(entry)["complement"] == {"bdtopo": False}
    assert zone_entree.parametres_construits(hass, entry)["zone"]["complement"] == {"bdtopo": False}
