"""Rend importable le paquet `pipeline` de l'intégration depuis sources/.

Le pipeline vit dans custom_components/sun_shading/pipeline/ (livré par HACS,
exécuté par l'intégration) ; les scripts de sources/ en sont les entrées en
ligne de commande. Importer `custom_components.sun_shading` chargerait Home
Assistant : on ajoute le dossier du composant au chemin et on importe
`pipeline` comme paquet de premier niveau — ses imports sont relatifs, il
fonctionne dans les deux cas.
"""
import os
import sys

COMPOSANT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                         "custom_components", "sun_shading")
if COMPOSANT not in sys.path:
    sys.path.insert(0, COMPOSANT)
