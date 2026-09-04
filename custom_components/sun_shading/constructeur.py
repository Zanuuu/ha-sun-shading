"""Lance le pipeline dans un sous-processus et suit sa progression.

Un sous-processus plutôt qu'un thread d'exécuteur : la construction est du
calcul Python pur pendant des dizaines de minutes, qui disputerait le GIL à
la boucle d'événements de Home Assistant, et son pic mémoire (jusqu'à ~900 Mo
sur la vue satellite d'une zone de 1 km) resterait dans le processus de HA.
Le sous-processus est lancé avec le même interpréteur, en priorité basse ; il
écrit des lignes `PROGRESSION<TAB>fraction<TAB>message` que l'on lit au fil de
l'eau pour alimenter le capteur d'état.

Une seule construction à la fois pour toute l'instance (verrou dans
hass.data) : deux prétraitements concurrents satureraient la mémoire et se
disputeraient le cache des dalles.
"""
import asyncio
import json
import logging
import os
import sys
import tempfile
from dataclasses import dataclass, field
from pathlib import Path

from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_send

from .const import (DOMAINE, ETAT_ERREUR, ETAT_INACTIF, ETAT_TERMINE,
                    ETAT_TRAVAIL, SIGNAL_CONSTRUCTION)

_LOGGER = logging.getLogger(__name__)

PIPELINE = Path(__file__).parent / "pipeline"


@dataclass
class EtatConstruction:
    """Ce que le capteur expose ; une instance par entrée."""
    etat: str = ETAT_INACTIF
    fraction: float = 0.0
    message: str = ""
    erreur: str = ""
    journal: list = field(default_factory=list)   # 200 dernières lignes


def etat_de(hass: HomeAssistant, entry_id: str) -> EtatConstruction:
    return hass.data[DOMAINE][entry_id].construction


def _verrou(hass: HomeAssistant) -> asyncio.Lock:
    return hass.data[DOMAINE].setdefault("_verrou", asyncio.Lock())


async def lance(hass: HomeAssistant, entry, etapes=None) -> bool:
    """Construit la zone de l'entrée à partir de sa configuration."""
    from .zone_entree import parametres_construits, specification
    spec = specification(hass, entry, etapes)
    ok = await construit(hass, entry, spec)
    if ok:
        # signature des paramètres : au prochain chargement de l'entrée, une
        # différence relance le pipeline, une égalité ne fait rien
        chemin = Path(spec["dossier"]) / "construit.json"
        await hass.async_add_executor_job(
            _ecrit_signature, chemin, parametres_construits(hass, entry))
    return ok


def _ecrit_signature(chemin: Path, parametres: dict) -> None:
    chemin.parent.mkdir(parents=True, exist_ok=True)
    chemin.write_text(json.dumps(parametres, sort_keys=True))


def signature_construite(dossier: Path):
    """Paramètres de la dernière construction réussie, ou None."""
    chemin = Path(dossier) / "construit.json"
    if not chemin.exists():
        return None
    try:
        return json.loads(chemin.read_text())
    except (OSError, ValueError):
        return None


async def construit(hass: HomeAssistant, entry, spec: dict) -> bool:
    """Construit la zone de l'entrée. Retourne True si tout s'est bien passé.

    La spécification est écrite dans un fichier temporaire : elle contient des
    chemins et des rayons, jamais un secret, mais la ligne de commande d'un
    processus est visible de toute la machine — un fichier en 600 l'est moins.
    """
    etat = etat_de(hass, entry.entry_id)
    async with _verrou(hass):
        etat.etat, etat.fraction, etat.erreur = ETAT_TRAVAIL, 0.0, ""
        etat.message = "démarrage"
        etat.journal.clear()
        _signale(hass, entry)
        fd, chemin = tempfile.mkstemp(suffix=".json", prefix="sun_shading_")
        try:
            with os.fdopen(fd, "w") as f:
                json.dump(spec, f)
            code = await _execute(hass, entry, etat, chemin)
        finally:
            os.unlink(chemin)

        if code == 0:
            etat.etat, etat.fraction, etat.message = ETAT_TERMINE, 1.0, "terminé"
        else:
            etat.etat = ETAT_ERREUR
            etat.message = etat.erreur or f"le pipeline a échoué (code {code})"
            _LOGGER.error("construction de %s : %s", entry.title, etat.message)
        _signale(hass, entry)
        return code == 0


async def _execute(hass, entry, etat, chemin_spec) -> int:
    proc = await asyncio.create_subprocess_exec(
        sys.executable, "-m", "pipeline.construire", chemin_spec,
        cwd=str(PIPELINE.parent),
        stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.STDOUT,
        # le pipeline importe `pipeline` comme paquet de premier niveau
        env={**os.environ, "PYTHONPATH": str(PIPELINE.parent)},
    )
    hass.data[DOMAINE][entry.entry_id].processus = proc
    try:
        while True:
            ligne = await proc.stdout.readline()
            if not ligne:
                break
            texte = ligne.decode("utf-8", "replace").rstrip()
            if texte.startswith("PROGRESSION\t"):
                _, fraction, message = texte.split("\t", 2)
                etat.fraction, etat.message = float(fraction), message
                _signale(hass, entry)
            elif texte.startswith("ERREUR\t"):
                etat.erreur = texte.split("\t", 1)[1]
            else:
                _LOGGER.debug("pipeline: %s", texte)
                etat.journal.append(texte)
                del etat.journal[:-200]
        return await proc.wait()
    except asyncio.CancelledError:
        proc.terminate()
        raise
    finally:
        hass.data[DOMAINE][entry.entry_id].processus = None


def _signale(hass: HomeAssistant, entry) -> None:
    async_dispatcher_send(hass, f"{SIGNAL_CONSTRUCTION}_{entry.entry_id}")
