"""Constantes partagées du composant."""

DOMAINE = "sun_shading"

STOCKAGE_CLE = "sun_shading"
STOCKAGE_VERSION = 1

SERVICE_DEFINIR = "set_opening"
SERVICE_SUPPRIMER = "remove_opening"
SERVICE_RECONSTRUIRE = "rebuild"

SIGNAL_AJOUT = f"{DOMAINE}_ajout"
SIGNAL_MAJ = f"{DOMAINE}_maj"
SIGNAL_CONSTRUCTION = f"{DOMAINE}_construction"

# Bornes de feuillaison par défaut (jours en base 0), reprises de
# facteurFeuillaison() dans sources/app.js. La page les transmet à chaque
# appel : ce défaut ne sert qu'aux données écrites avant leur ajout.
FEUILLAISON_DEFAUT = [90, 120, 288, 320]

# ---- config flow ----
# Deux façons d'avoir une zone : la construire ici depuis des coordonnées, ou
# désigner un dossier déjà produit hors de Home Assistant par le pipeline.
MODE = "mode"
MODE_CONSTRUIT = "build"
MODE_EXTERNE = "external"

CONF_TITRE = "title"
CONF_POSITION = "location"          # sélecteur carte : latitude, longitude, radius
CONF_DOSSIER = "folder"             # mode externe : dossier relatif à config/
CONF_RAYONS = "radii"               # section avancée : bati, terrain, arbres…
CONF_PHOTO = "photomesh"
CONF_PHOTO_RAYON = "photomesh_radius"
CONF_ORTHO_PX = "ortho_px"
CONF_RELEVE_OMBRES = "shadow_lift"
CONF_OBJ = "obj_path"
CONF_COMPLEMENT = "bdtopo"          # bâtiments récents depuis la BD TOPO (IGN)

# ---- options (aucune reconstruction) ----
CONF_ICONE = "sidebar_icon"
CONF_ADMIN = "require_admin"
CONF_OMBRES = "shadow_quality"
CONF_FEUILLAISON = "foliation"
CONF_SEUIL = "threshold"
CONF_PAS_AZIMUT = "azimuth_step"

OMBRES_DEFAUT = 4096
SEUIL_DEFAUT = 0.5
PAS_AZIMUT_DEFAUT = 1.0

# Rayon affiché : ce que règle l'utilisateur ; les autres s'en déduisent
# (mêmes marges qu'en ligne de commande, cf. pipeline/zone.py).
RAYON_DEFAUT = 1000.0
RAYON_MAX = 1500.0
RAYON_MIN = 100.0
MARGES_RAYONS = {"bati": 50.0, "terrain": 80.0, "arbres": 0.0, "textures": 50.0}
PHOTO_RAYON_DEFAUT = 200.0

# ---- construction ----
ETAT_INACTIF = "idle"
ETAT_TRAVAIL = "building"
ETAT_TERMINE = "done"
ETAT_ERREUR = "error"

DOSSIER_RACINE = "sun_shading"      # config/sun_shading/
DOSSIER_CACHE = "cache"             # config/sun_shading/cache/, partagé

# ---- panneau et données ----
TITRE_DEFAUT = "Sun Shading"
URL_PANNEAU = "sun-shading"                    # /sun-shading dans la barre latérale
URL_FRONTEND = f"/{DOMAINE}/frontend"          # sert frontend/ du composant
URL_DONNEES = f"/{DOMAINE}/data"               # sert les dossiers de données
ICONE_PANNEAU = "mdi:weather-sunny"
