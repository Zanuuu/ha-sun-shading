#!/usr/bin/env python3
"""Vérifications du complément BD TOPO (stdlib seule, aucun réseau).

La Maquette 3D date de 2022 : un bâtiment construit depuis n'y est pas. Le
complément lit les emprises de la BD TOPO (IGN), repère celles qu'aucun
bâtiment LoD2 ne couvre et les extrude en volumes fermés ajoutés au bâti.
Ces tests fixent ce qui rend le résultat exploitable par la carte : des
volumes étanches et orientés (ombres BackSide), des cotes égout/faîte
tirées des champs IGN, une détection qui n'ajoute ni les bâtiments déjà
présents ni les emprises partielles, et une compatibilité avec le modèle
précis (retire_lod2 ne garde que murs et fond du prisme).

Usage : python3 tests/test_complement.py
"""
import gzip
import json
import os
import struct
import sys
import tempfile

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(RACINE, "custom_components", "sun_shading"))
from pipeline import complement_bdtopo as cb  # noqa: E402
from pipeline import modele_precis, zone as zones  # noqa: E402
from pipeline.preprocess import InterpolateurTIN, MeshAccum  # noqa: E402

essais = []


def essai(fn):
    essais.append(fn)
    return fn


def proche(a, b, tol=1e-6):
    assert abs(a - b) <= tol, f"{a} != {b} (tolérance {tol})"


# ============================== outils géométriques ==============================
def aire_polygone(anneau):
    s = 0.0
    for i in range(len(anneau)):
        x0, y0 = anneau[i]
        x1, y1 = anneau[(i + 1) % len(anneau)]
        s += x0 * y1 - x1 * y0
    return s / 2.0


def aire_triangles(anneau, tris):
    return sum(aire_polygone([anneau[i] for i in t]) for t in tris)


def volume_signe(verts, tris):
    v = 0.0
    for (a, b, c) in tris:
        (x1, y1, z1), (x2, y2, z2), (x3, y3, z3) = verts[a], verts[b], verts[c]
        v += (x1 * (y2 * z3 - y3 * z2) - x2 * (y1 * z3 - y3 * z1)
              + x3 * (y1 * z2 - y2 * z1))
    return v / 6.0


def aretes_non_appariees(tris):
    """Un volume fermé et orienté : chaque arête (a,b) a son inverse (b,a)."""
    aretes = {}
    for (a, b, c) in tris:
        for (u, w) in ((a, b), (b, c), (c, a)):
            aretes[(u, w)] = aretes.get((u, w), 0) + 1
    return [(u, w) for (u, w), n in aretes.items()
            if n != 1 or aretes.get((w, u), 0) != 1]


def tin_plat(z=140.0, demi=200.0):
    """MNT plat : deux triangles sur un carré de ±demi m autour de l'origine
    locale (coordonnées absolues CX, CY = 0 pour rester lisible)."""
    verts = [(-demi, -demi, z), (demi, -demi, z), (demi, demi, z), (-demi, demi, z)]
    return InterpolateurTIN(verts, [(0, 1, 2), (0, 2, 3)], 0.0, 0.0)


def boite_lod2(x0, y0, x1, y1, z0, z1):
    """Un bâtiment LoD2 minimal : dessus + quatre murs (pas de fond, comme la
    maquette), coordonnées absolues avec CX = CY = 0."""
    v = [(x0, y0, z0), (x1, y0, z0), (x1, y1, z0), (x0, y1, z0),
         (x0, y0, z1), (x1, y0, z1), (x1, y1, z1), (x0, y1, z1)]
    t = [(4, 5, 6), (4, 6, 7),
         (0, 1, 5), (0, 5, 4), (1, 2, 6), (1, 6, 5),
         (2, 3, 7), (2, 7, 6), (3, 0, 4), (3, 4, 7)]
    return v, t


def feature(cleabs, anneau, hauteur=6.3, egout=146.3, faite=148.1, sol=140.0,
            etat="En service"):
    return {"type": "Feature",
            "properties": {"cleabs": cleabs, "hauteur": hauteur,
                           "altitude_minimale_sol": sol,
                           "altitude_minimale_toit": egout,
                           "altitude_maximale_toit": faite,
                           "etat_de_l_objet": etat},
            "geometry": {"type": "MultiPolygon",
                         "coordinates": [[[[x, y, egout] for (x, y) in anneau]
                                          + [[anneau[0][0], anneau[0][1], egout]]]]}}


CARRE = [(20.0, 0.0), (30.0, 0.0), (30.0, 10.0), (20.0, 10.0)]


# ============================== triangulation ==============================
@essai
def triangule_un_carre():
    tris = cb.triangule(CARRE)
    assert len(tris) == 2, tris
    proche(aire_triangles(CARRE, tris), 100.0)


@essai
def triangule_un_polygone_concave():
    """Un L : le découpage d'oreilles doit couvrir exactement l'aire, avec
    des triangles tous dans le sens de l'anneau (aucun retourné)."""
    L = [(0, 0), (10, 0), (10, 4), (4, 4), (4, 10), (0, 10)]
    tris = cb.triangule(L)
    assert len(tris) == 4, tris
    proche(aire_triangles(L, tris), aire_polygone(L))
    for t in tris:
        assert aire_polygone([L[i] for i in t]) > 0, f"triangle retourné {t}"


@essai
def triangule_accepte_un_anneau_horaire():
    """La BD TOPO n'impose pas le sens : un anneau horaire est remis en
    sens trigonométrique par anneau_direct(), jamais par triangule()."""
    horaire = list(reversed(CARRE))
    direct = cb.anneau_direct(horaire)
    assert aire_polygone(direct) > 0
    assert cb.anneau_direct(CARRE) == CARRE


# ============================== extrusion ==============================
@essai
def extrude_un_volume_ferme_et_oriente():
    verts, tris = cb.extrude(CARRE, z_sol=140.0, z_egout=146.3, z_faite=148.1)
    assert not aretes_non_appariees(tris), aretes_non_appariees(tris)[:5]
    assert volume_signe(verts, tris) > 0, "normales rentrantes"
    proche(min(v[2] for v in verts), 140.0 - cb.JUPE)
    proche(max(v[2] for v in verts), 148.1)


@essai
def extrude_respecte_egout_et_faite():
    """Les murs s'arrêtent à l'égout, le tronc de toit monte au faîte ; le
    volume vaut le prisme jusqu'à l'égout plus le tronc de pyramide."""
    verts, tris = cb.extrude(CARRE, z_sol=140.0, z_egout=146.3, z_faite=148.1)
    z_murs = sorted({round(v[2], 3) for v in verts})
    assert z_murs[0] == round(140.0 - cb.JUPE, 3) and 146.3 in z_murs and 148.1 in z_murs, z_murs
    prisme = 100.0 * (146.3 - (140.0 - cb.JUPE))
    assert volume_signe(verts, tris) > prisme, "le toit n'ajoute aucun volume"
    assert volume_signe(verts, tris) < prisme + 100.0 * 1.8, "le toit n'est pas un tronc"


@essai
def extrude_sans_faite_donne_un_toit_plat():
    verts, tris = cb.extrude(CARRE, z_sol=140.0, z_egout=146.3, z_faite=None)
    assert not aretes_non_appariees(tris)
    proche(max(v[2] for v in verts), 146.3)
    proche(volume_signe(verts, tris), 100.0 * (146.3 - (140.0 - cb.JUPE)))


@essai
def extrude_une_petite_emprise_en_pyramide():
    """Montée trop forte pour le côté : l'anneau du faîte se réduit à un
    point, le volume reste fermé (sommets confondus soudés)."""
    petit = [(0.0, 0.0), (2.0, 0.0), (2.0, 2.0), (0.0, 2.0)]
    verts, tris = cb.extrude(petit, z_sol=140.0, z_egout=143.0, z_faite=146.0)
    assert not aretes_non_appariees(tris), aretes_non_appariees(tris)[:5]
    assert volume_signe(verts, tris) > 0
    sommets_faite = {v[:2] for v in verts if abs(v[2] - 146.0) < 1e-6}
    assert len(sommets_faite) == 1, sommets_faite


# ============================== détection ==============================
def cellules_lod2():
    v, t = boite_lod2(0.0, 0.0, 10.0, 10.0, 140.0, 147.0)
    return cb.occupation(v, t, 0.0, 0.0)


@essai
def detecte_present_absent_et_partiel():
    cellules = cellules_lod2()
    present = [(0.0, 0.0), (10.0, 0.0), (10.0, 10.0), (0.0, 10.0)]
    partiel = [(5.0, 0.0), (15.0, 0.0), (15.0, 10.0), (5.0, 10.0)]
    assert cb.classe(present, cellules)[0] == "present"
    assert cb.classe(CARRE, cellules)[0] == "absent"
    assert cb.classe(partiel, cellules)[0] == "partiel"


@essai
def detecte_present_malgre_un_decalage_d_un_metre():
    """Les emprises IGN et LoD2 ne coïncident pas au mètre près : une maison
    de 10 m décalée de 1 m n'est couverte qu'à ~80 % cellule par cellule.
    La fraction se mesure sur l'intérieur érodé (MARGE_BORD), sinon la
    moitié du parc ressort « partiel » — constaté sur une zone réelle
    (80 sur 480, dont 57 par ce seul effet de bord)."""
    cellules = cellules_lod2()
    decale = [(1.0, 1.0), (11.0, 1.0), (11.0, 11.0), (1.0, 11.0)]
    assert cb.classe(decale, cellules)[0] == "present"
    # une vraie extension (moitié hors LoD2) reste partielle
    partiel = [(5.0, 0.0), (15.0, 0.0), (15.0, 10.0), (5.0, 10.0)]
    assert cb.classe(partiel, cellules)[0] == "partiel"


@essai
def detecte_un_petit_batiment_sans_interieur():
    """Trop étroit pour avoir une cellule à MARGE_BORD du bord : on retombe
    sur la fraction brute, un appentis absent doit encore être ajouté."""
    cellules = cellules_lod2()
    abri = [(20.0, 0.0), (22.5, 0.0), (22.5, 2.5), (20.0, 2.5)]
    assert cb.classe(abri, cellules)[0] == "absent"
    abri_present = [(0.0, 0.0), (2.5, 0.0), (2.5, 2.5), (0.0, 2.5)]
    assert cb.classe(abri_present, cellules)[0] == "present"


@essai
def occupation_ignore_les_murs():
    """Seules les faces montantes comptent : un mur seul n'occupe rien, sinon
    un bâtiment mitoyen « couvrirait » son voisin absent par sa façade."""
    v = [(0.0, 0.0, 140.0), (10.0, 0.0, 140.0), (10.0, 0.0, 147.0), (0.0, 0.0, 147.0)]
    assert cb.occupation(v, [(0, 1, 2), (0, 2, 3)], 0.0, 0.0) == set()


# ============================== construit() ==============================
def zone_test(chemin, rayon_bati=100.0):
    cfg = {"nom": "test", "lat": 48.5, "lon": 7.7,
           "rayons": {"carte": rayon_bati - 50, "bati": rayon_bati}}
    return zones.Zone.depuis_dict(cfg, chemin)


@essai
def construit_n_ajoute_que_les_absents():
    """Trois emprises : une déjà dans le LoD2, une à cheval, une absente.
    Seule la dernière devient un volume ; la plage de triangles est contiguë
    en fin de section et décrite dans le compte rendu."""
    bati = MeshAccum()
    v, t = boite_lod2(0.0, 0.0, 10.0, 10.0, 140.0, 147.0)
    bati.add(v, t, 1e9)
    nt_avant = len(bati.tris)
    present = [(0.0, 0.0), (10.0, 0.0), (10.0, 10.0), (0.0, 10.0)]
    partiel = [(5.0, 0.0), (15.0, 0.0), (15.0, 10.0), (5.0, 10.0)]
    feats = [feature("PRESENT", present), feature("PARTIEL", partiel),
             feature("ABSENT", CARRE)]
    with tempfile.TemporaryDirectory() as d:
        z = zone_test(d)
        rapport = cb.construit(z, bati, tin_plat(), 0.0, 0.0,
                               telecharge=lambda lon, lat, r: feats)
    assert [b["id"] for b in rapport["batiments"]] == ["ABSENT"], rapport
    assert rapport["tris"] == [nt_avant, len(bati.tris)], rapport["tris"]
    assert len(bati.tris) > nt_avant
    assert rapport["ignores"] == {"present": 1, "partiel": 1}, rapport["ignores"]
    b = rapport["batiments"][0]
    proche(b["egout"], 146.3)
    proche(b["faite"], 148.1)


@essai
def construit_ecarte_les_petits_et_les_projets():
    bati = MeshAccum()
    feats = [feature("ABRI", CARRE, hauteur=1.5),
             feature("PROJET", CARRE, etat="En projet")]
    with tempfile.TemporaryDirectory() as d:
        rapport = cb.construit(zone_test(d), bati, tin_plat(), 0.0, 0.0,
                               telecharge=lambda lon, lat, r: feats)
    assert rapport["batiments"] == [] and len(bati.tris) == 0


@essai
def construit_ecarte_les_abris_de_jardin():
    """Sous AIRE_MIN, un abri absent du LoD2 n'est pas ajouté : la maquette
    n'est pas exhaustive sur les annexes (mesuré : 15 % d'absents sous
    30 m², 1 % au-dessus de 60 m²), leur ombre est négligeable, et la grille
    d'occupation à 1 m n'est plus fiable à cette taille."""
    bati = MeshAccum()
    abri = [(20.0, 0.0), (24.0, 0.0), (24.0, 4.0), (20.0, 4.0)]      # 16 m²
    garage = [(40.0, 0.0), (46.0, 0.0), (46.0, 4.0), (40.0, 4.0)]    # 24 m²
    feats = [feature("ABRI", abri, hauteur=2.5), feature("GARAGE", garage, hauteur=2.8)]
    with tempfile.TemporaryDirectory() as d:
        rapport = cb.construit(zone_test(d), bati, tin_plat(), 0.0, 0.0,
                               telecharge=lambda lon, lat, r: feats)
    assert [b["id"] for b in rapport["batiments"]] == ["GARAGE"], rapport
    assert rapport["ignores"] == {"petit": 1}, rapport["ignores"]


@essai
def construit_deduit_la_hauteur_des_altitudes():
    """`hauteur` absente : altitude_minimale_toit − altitude_minimale_sol."""
    bati = MeshAccum()
    feats = [feature("SANS_H", CARRE, hauteur=None, egout=146.3, sol=140.0)]
    with tempfile.TemporaryDirectory() as d:
        rapport = cb.construit(zone_test(d), bati, tin_plat(), 0.0, 0.0,
                               telecharge=lambda lon, lat, r: feats)
    proche(rapport["batiments"][0]["egout"], 146.3)


@essai
def construit_pose_le_sol_sur_le_mnt():
    """L'égout est sol MNT + hauteur, pas l'altitude IGN : c'est le terrain
    de la carte qui fait foi, les deux références peuvent différer."""
    bati = MeshAccum()
    feats = [feature("ABSENT", CARRE, hauteur=6.3, sol=141.0, egout=147.3, faite=149.1)]
    with tempfile.TemporaryDirectory() as d:
        rapport = cb.construit(zone_test(d), bati, tin_plat(z=140.0), 0.0, 0.0,
                               telecharge=lambda lon, lat, r: feats)
    proche(rapport["batiments"][0]["egout"], 146.3)
    proche(rapport["batiments"][0]["faite"], 148.1)


@essai
def construit_survit_a_un_reseau_absent():
    bati = MeshAccum()

    def panne(lon, lat, r):
        raise OSError("réseau indisponible")

    with tempfile.TemporaryDirectory() as d:
        rapport = cb.construit(zone_test(d), bati, tin_plat(), 0.0, 0.0,
                               telecharge=panne)
    assert rapport["batiments"] == [] and rapport.get("erreur")


@essai
def requete_wfs_demande_du_cc48_autour_du_point():
    # cathédrale de Strasbourg : un lieu public, jamais une adresse privée
    url = cb.url_requete(7.750833, 48.581944, 1050.0, 0)
    assert "SRSNAME=EPSG%3A3948" in url, url
    assert "DWITHIN%28geometrie%2CPOINT%2848.581944+7.750833%29%2C1050%2Cmeters%29" in url, url
    assert "STARTINDEX=0" in url and "COUNT=" in url


# ============================== modèle précis sur le prisme ==============================
def ecrit_zone_avec_bati(d, verts, tris, zmin_ref=131.0):
    """donnees.bin.gz + meta.json minimaux (section bati seule), au format
    lu par modele_precis.lit_bati."""
    q = zones.Q
    out = bytearray()
    for (x, y, z) in verts:
        out += struct.pack("<hhH", round(x / q), round(y / q),
                           max(0, round((z - zmin_ref) / q)))
    idx_off = len(out)
    for t in tris:
        out += struct.pack("<3H", *t)
    donnees = os.path.join(d, "donnees")
    os.makedirs(donnees)
    with gzip.open(os.path.join(donnees, "donnees.bin.gz"), "wb") as f:
        f.write(out)
    json.dump({"zmin_ref": zmin_ref, "q": q,
               "sections": {"bati": {"nv": len(verts), "nt": len(tris), "isz": 2,
                                     "pos_off": 0, "idx_off": idx_off}}},
              open(os.path.join(donnees, "meta.json"), "w"))


@essai
def retire_lod2_ne_garde_que_murs_et_fond_du_prisme():
    """Un OBJ de toiture doit pouvoir se poser sur le prisme : le retrait
    enlève le tronc et le dessus (normale montante), laisse murs et fond."""
    centre = [(-5.0, -5.0), (5.0, -5.0), (5.0, 5.0), (-5.0, 5.0)]
    verts, tris = cb.extrude(centre, z_sol=140.0, z_egout=146.3, z_faite=148.1)
    with tempfile.TemporaryDirectory() as d:
        ecrit_zone_avec_bati(d, verts, tris)
        z = zones.Zone.depuis_dict({"nom": "t", "lat": 48.5, "lon": 7.7}, d)
        retire = modele_precis.retire_lod2(z)
    restants = [t for i, t in enumerate(tris) if i not in set(retire)]
    assert retire, "rien retiré"
    for (a, b, c) in restants:
        zs = (verts[a][2], verts[b][2], verts[c][2])
        assert max(zs) <= 146.3 + 1e-6, f"face de toit conservée {zs}"
    assert any(max(verts[i][2] for i in t) > 146.0 for t in restants), "murs perdus"


@essai
def retire_lod2_ne_touche_pas_un_voisin_lointain():
    """Aucun bâtiment à moins de DISTANCE_MAX du point visé : rien à
    remplacer — le modèle importé sera AJOUTÉ, jamais mis à la place du
    voisin le plus proche."""
    loin = [(60.0, 60.0), (70.0, 60.0), (70.0, 70.0), (60.0, 70.0)]
    verts, tris = cb.extrude(loin, z_sol=140.0, z_egout=146.3, z_faite=148.1)
    with tempfile.TemporaryDirectory() as d:
        ecrit_zone_avec_bati(d, verts, tris)
        z = zones.Zone.depuis_dict({"nom": "t", "lat": 48.5, "lon": 7.7}, d)
        assert modele_precis.retire_lod2(z) == []


if __name__ == "__main__":
    echecs = 0
    for fn in essais:
        try:
            fn()
            print(f"  ok   {fn.__name__}")
        except AssertionError as e:
            echecs += 1
            print(f"  ECHEC {fn.__name__} : {e}")
    print(f"{len(essais) - echecs}/{len(essais)} vérifications passées")
    sys.exit(1 if echecs else 0)
