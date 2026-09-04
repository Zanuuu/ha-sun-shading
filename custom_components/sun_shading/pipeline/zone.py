"""Une zone = un dossier, unité de tout le pipeline.

    zones/<nom>/
      zone.json         coordonnées, rayons, titre — la seule chose à saisir
      ouvertures.json   volets et points de référence (facultatif)
      masques/          sortie de masque_horizon.js
      donnees/          sortie des prétraitements
      dist/             sortie de build.py (non versionné)

Tous les scripts prennent --zone <nom|chemin>. Sans argument : la variable
d'environnement ZONE, sinon l'unique zone du dossier zones/. L'intégration,
elle, construit la zone depuis les paramètres de son entrée (`depuis_dict`) :
même objet, sans zone.json. Le centre en projection RGF93 / CC48 (EPSG:3948)
est DÉRIVÉ des coordonnées WGS84, jamais saisi : la projection conique
conforme est écrite ici en bibliothèque standard, vérifiée exacte au dixième
de millimètre contre pyproj sur le centre de la zone de référence — une
dépendance de moins pour qui construit sa carte.
"""
import json
import math
import os

# racine du dépôt (custom_components/sun_shading/pipeline/zone.py → 4 niveaux)
RACINE = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))))
ZONES = os.path.join(RACINE, "zones")

# Rayons par défaut (m). La carte affiche jusqu'à `carte` ; bâtiments et
# ponts sont gardés un peu au-delà pour porter leurs ombres dans la zone ; le
# terrain déborde encore pour ne jamais montrer le bord du monde. La
# quantification en int16 à 5 cm plafonne tout à ±1638 m.
RAYONS_DEFAUT = {
    "carte": 1000.0, "bati": 1050.0, "terrain": 1080.0, "arbres": 1000.0,
    "mnt_natif": 500.0,     # MNT à sa résolution native jusqu'ici, agrégé après
    "textures": 1050.0,     # façades texturées de la vue satellite
    "photo": 200.0,         # photomaillage (mode « Photo 3D »)
}
Q = 0.05                   # quantification (m)
LIMITE_INT16 = 32767 * Q   # portée du repère local quantifié


def dossier_cache(sous=""):
    """Cache des dalles téléchargées, partagé entre zones : $SUN_SHADING_CACHE
    (l'intégration y met config/sun_shading/cache), sinon ~/.cache/sun-shading."""
    base = os.environ.get("SUN_SHADING_CACHE") or os.path.expanduser("~/.cache/sun-shading")
    return os.path.join(base, sous) if sous else base


class Zone:
    def __init__(self, chemin, cfg=None):
        self.chemin = os.path.abspath(chemin)
        if cfg is None:
            fichier = os.path.join(self.chemin, "zone.json")
            if not os.path.exists(fichier):
                raise SystemExit(f"zone introuvable : {fichier}")
            cfg = json.load(open(fichier))
        self.cfg = cfg
        self.nom = cfg.get("nom") or os.path.basename(self.chemin)
        self.lat = float(cfg["lat"])
        self.lon = float(cfg["lon"])
        self.rayons = dict(RAYONS_DEFAUT, **cfg.get("rayons", {}))
        plus_grand = max(self.rayons["terrain"], self.rayons["bati"]) + 60
        if plus_grand > LIMITE_INT16:
            raise SystemExit(f"rayons trop grands pour la quantification int16 "
                             f"(max ~{LIMITE_INT16 - 60:.0f} m)")
        self.cx, self.cy = wgs84_vers_cc48(self.lon, self.lat)
        self.donnees = os.path.join(self.chemin, "donnees")
        self.dist = os.path.join(self.chemin, "dist")
        self.masques = os.path.join(self.chemin, "masques")
        self.ouvertures = os.path.join(self.chemin, "ouvertures.json")

    @classmethod
    def depuis_dict(cls, cfg, chemin):
        """La zone de l'intégration : ses paramètres viennent de l'entrée de
        configuration, son dossier est celui où elle construit."""
        return cls(chemin, cfg)

    @property
    def titre(self):
        return self.cfg.get("titre") or f"Ensoleillement {self.nom}"

    @property
    def lieu(self):
        """Sous-titre de la page : coordonnées et rayon, sauf texte fourni."""
        if self.cfg.get("lieu"):
            return self.cfg["lieu"]
        ns = "N" if self.lat >= 0 else "S"
        eo = "E" if self.lon >= 0 else "O"
        r = self.rayons["carte"]
        rayon = f"{r / 1000:g} km" if r >= 1000 else f"{r:g} m"
        return (f"{abs(self.lat):.4f} {ns} · {abs(self.lon):.4f} {eo} — "
                f"rayon {rayon}").replace(".", ",")

    @property
    def fuseau(self):
        return self.cfg.get("fuseau", "Europe/Paris")

    @property
    def livrable(self):
        return f"sun-shading-{self.nom}.html"

    def meta(self):
        """meta.json écrit par preprocess.py — référence altimétrique et
        sections du binaire, dont dépendent tous les autres prétraitements."""
        chemin = os.path.join(self.donnees, "meta.json")
        if not os.path.exists(chemin):
            raise SystemExit(f"{chemin} absent : lancer preprocess.py --zone "
                             f"{self.nom} d'abord")
        return json.load(open(chemin))

    def volets(self):
        if not os.path.exists(self.ouvertures):
            return []
        return json.load(open(self.ouvertures)).get("volets", [])


def resout(spec=None):
    """Chemin d'une zone : un dossier, un nom sous zones/, la variable ZONE,
    ou l'unique zone présente."""
    spec = spec or os.environ.get("ZONE")
    if spec:
        if os.path.isdir(spec):
            return Zone(spec)
        return Zone(os.path.join(ZONES, spec))
    presentes = sorted(d for d in os.listdir(ZONES)
                       if os.path.exists(os.path.join(ZONES, d, "zone.json"))) \
        if os.path.isdir(ZONES) else []
    if len(presentes) == 1:
        return Zone(os.path.join(ZONES, presentes[0]))
    raise SystemExit("préciser la zone : --zone <nom|chemin> ou ZONE=<nom> "
                     + (f"(présentes : {', '.join(presentes)})" if presentes
                        else "(aucune zone dans zones/)"))


def argument_zone(parser):
    parser.add_argument("--zone", metavar="NOM|CHEMIN",
                        help="dossier de zone (défaut : $ZONE, ou l'unique "
                             "zone de zones/)")
    return parser


# ---- RGF93 / CC48 (EPSG:3948) : Lambert conique conforme, 2 parallèles ----
# Paramètres du registre EPSG ; ellipsoïde GRS80. Vérifié contre pyproj sur le
# centre de la zone de référence : écart 0,0 m sur les deux axes.
_A = 6378137.0
_F = 1 / 298.257222101
_E = math.sqrt(2 * _F - _F * _F)
_LAT0, _LAT1, _LAT2, _LON0 = 48.0, 47.25, 48.75, 3.0
_X0, _Y0 = 1700000.0, 7200000.0


def _m(phi):
    return math.cos(phi) / math.sqrt(1 - _E * _E * math.sin(phi) ** 2)


def _t(phi):
    es = _E * math.sin(phi)
    return math.tan(math.pi / 4 - phi / 2) / ((1 - es) / (1 + es)) ** (_E / 2)


_P0, _P1, _P2 = (math.radians(v) for v in (_LAT0, _LAT1, _LAT2))
_N = ((math.log(_m(_P1)) - math.log(_m(_P2)))
      / (math.log(_t(_P1)) - math.log(_t(_P2))))
_FF = _m(_P1) / (_N * _t(_P1) ** _N)
_R0 = _A * _FF * _t(_P0) ** _N


def wgs84_vers_cc48(lon, lat):
    """(lon, lat) en degrés -> (x, y) EPSG:3948 en mètres."""
    r = _A * _FF * _t(math.radians(lat)) ** _N
    theta = _N * (math.radians(lon) - math.radians(_LON0))
    return _X0 + r * math.sin(theta), _Y0 + _R0 - r * math.cos(theta)


if __name__ == "__main__":
    import argparse
    p = argument_zone(argparse.ArgumentParser(description=__doc__.splitlines()[0]))
    z = resout(p.parse_args().zone)
    print(f"{z.nom} : {z.lat}, {z.lon} -> CC48 ({z.cx:.4f} ; {z.cy:.4f})")
    print(f"  rayons : {z.rayons}")
    print(f"  titre : {z.titre} — {z.lieu}")
