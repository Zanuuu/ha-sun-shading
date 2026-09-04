"""Le pipeline de la carte : des dalles open data de l'Eurométropole de
Strasbourg au dossier `dist/` servi par Home Assistant.

Aucun import Home Assistant ici, à dessein : le pipeline s'exécute aussi bien
en ligne de commande (`sources/*.py --zone …`) que dans un sous-processus
lancé par l'intégration (`construire.py`). Les modules gardent chacun leur
état de module : un processus ne construit qu'une zone à la fois.
"""
