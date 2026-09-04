"""Ce que va coûter une construction : dalles, téléchargement, disque, durée.

Un formulaire Home Assistant n'exécute aucun script côté navigateur : il ne
peut pas réagir à la frappe. L'indication de coût est donc calculée APRÈS la
saisie, dans une étape de récapitulatif, à partir du nombre réel de dalles
que couvre le rayon demandé (une requête à l'API de l'Eurométropole) et d'un
étalonnage du processeur de la machine — un Raspberry Pi met cinq à dix fois
plus longtemps qu'un PC de bureau, et l'annoncer évite de croire à un
blocage.

Toutes les valeurs sont des ordres de grandeur mesurés sur la zone de
démonstration (Strasbourg cathédrale, centre-ville dense, 04/09/2026).
"""
import json
import math
import time
import urllib.parse
import urllib.request

API = "https://data.strasbourg.eu/api/explore/v2.1/catalog/datasets"

# Mesures de référence (PC de bureau, WSL, Python 3.12) pour 29 dalles :
# preprocess 1 min 40, preprocess_sat 4 min 50, 25 Mo produits hors photo.
DALLES_REF = 29
SECONDES_REF = 390.0
MO_PAR_DALLE = 107.0          # archive maquette décompressée
MO_PAR_DALLE_PHOTO = 24.0     # dalle de photomaillage (100 m)
MO_PRODUITS_REF = 25.0
SECONDES_PHOTO_REF = 1500.0   # 20-30 min pour 200 m de photomaillage


def _dalles(lon, lat, rayon, dataset, marge, limite=100):
    """Nombre de dalles du jeu qui couvrent le disque (requête à l'API)."""
    where = (f"within_distance(geo_point_2d, geom'POINT({lon} {lat})', "
             f"{int(rayon + marge)}m)")
    url = (f"{API}/{dataset}/records?"
           + urllib.parse.urlencode({"where": where, "limit": limite,
                                     "select": "geo_point_2d"}))
    with urllib.request.urlopen(url, timeout=30) as r:
        return int(json.load(r).get("total_count", 0))


def dalles_maquette(lon, lat, rayon_terrain):
    return _dalles(lon, lat, rayon_terrain, "odata3d_maquette_2022", 300)


def dalles_photo(lon, lat, rayon_photo):
    return _dalles(lon, lat, rayon_photo + 30, "pm3d_2022", 80)


def couverture(lon, lat):
    """L'Eurométropole couvre-t-elle ce point ? Sans dalle de maquette dans un
    rayon d'un kilomètre, le pipeline ne produirait ni bâtiments ni terrain :
    autant le dire au moment de la saisie."""
    try:
        return dalles_maquette(lon, lat, 500) > 0
    except OSError:
        return True     # réseau indisponible : ne pas bloquer la configuration


def facteur_processeur():
    """Vitesse de CETTE machine rapportée à celle de l'étalonnage.

    Une boucle arithmétique courte suffit : le pipeline est du Python pur, et
    c'est bien l'interpréteur que l'on veut mesurer."""
    debut = time.perf_counter()
    x = 0.0
    for i in range(200_000):
        x += math.sqrt(i)
    ecoule = time.perf_counter() - debut
    return max(0.2, min(20.0, ecoule / 0.045))   # 45 ms sur la machine de référence


def estime(lon, lat, rayons, photo, dalles_en_cache=0, facteur=1.0):
    """Dictionnaire des ordres de grandeur, prêt pour l'affichage."""
    n_maquette = dalles_maquette(lon, lat, rayons["terrain"])
    n_photo = dalles_photo(lon, lat, rayons["photo"]) if photo else 0
    a_telecharger = max(0, n_maquette - dalles_en_cache)
    go = (a_telecharger * MO_PAR_DALLE + n_photo * MO_PAR_DALLE_PHOTO) / 1024.0
    secondes = SECONDES_REF * (n_maquette / DALLES_REF) * facteur
    if photo:
        secondes += SECONDES_PHOTO_REF * facteur
    produits = MO_PRODUITS_REF * (rayons["carte"] / 1000.0) ** 2
    if photo:
        produits += 45.0 * (rayons["photo"] / 200.0) ** 2
    return {
        "tiles": n_maquette,
        "photo_tiles": n_photo,
        "download_gb": f"{go:.1f}",
        "disk_mb": f"{produits:.0f}",
        "duration": duree_lisible(secondes),
        "cache_gb": f"{(n_maquette * MO_PAR_DALLE) / 1024.0:.1f}",
    }


def duree_lisible(secondes):
    if secondes < 90:
        return f"{round(secondes)} s"
    if secondes < 5400:
        return f"{round(secondes / 60)} min"
    return f"{secondes / 3600:.1f} h"
