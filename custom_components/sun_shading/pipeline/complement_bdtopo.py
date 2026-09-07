#!/usr/bin/env python3
"""Complément du bâti : les bâtiments absents de la Maquette 3D 2022.

La maquette de l'Eurométropole a une date ; une maison construite depuis n'y
est pas, ne porte aucune ombre et n'a aucune surface à sonder. La BD TOPO de
l'IGN (flux WFS public, Licence Ouverte 2.0, mise à jour en continu) connaît
ces bâtiments avec leur emprise et leurs cotes : `hauteur` est la hauteur à
l'ÉGOUT (altitude_minimale_toit − altitude_minimale_sol, vérifié sur les
données), `altitude_maximale_toit` le faîte.

Ce module lit ces emprises dans le rayon bâti de la zone, repère celles
qu'aucun bâtiment LoD2 ne couvre, et les extrude en volumes fermés ajoutés à
la section `bati` : un prisme jusqu'à l'égout, coiffé d'un tronc de toit
homothétique montant au faîte à une pente conventionnelle (PENTE). Les murs
sont donc à leur vraie hauteur — un OBJ de toiture peut s'y poser par le
mécanisme du modèle précis, dont retire_lod2() enlève le tronc (normale
montante) et garde les murs. Le fond descend sous le terrain (JUPE) : la
technique d'ombre de la carte (BackSide, sans auto-ombrage) décolle l'ombre
du pied d'un volume ouvert.

Les emprises partiellement couvertes (extension, décalage entre les deux
référentiels) sont ignorées et journalisées : on ne devine pas. Les trous
des polygones (cours intérieures) sont ignorés. Aucune dépendance hors
bibliothèque standard, comme tout le pipeline : il tourne dans Home Assistant.
"""
import datetime
import json
import math
import os
import urllib.parse
import urllib.request

WFS = "https://data.geopf.fr/wfs/ows"
COUCHE = "BDTOPO_V3:batiment"
PAGE = 1000               # bâtiments par requête (le serveur plafonne à 5000)
PENTE = math.radians(35.0)  # pente conventionnelle du tronc de toit
HAUTEUR_MIN = 2.0         # sous cela : abri, muret — ignoré
AIRE_MIN = 20.0           # sous cela : abri de jardin — la maquette n'est pas
                          # exhaustive sur les annexes (15 % d'absents sous
                          # 30 m², 1 % au-dessus de 60), leur ombre est
                          # négligeable et la grille à 1 m n'y est plus fiable
JUPE = 3.0                # profondeur du fond sous le sol (m)
CELLULE = 1.0             # grille d'occupation du LoD2 (m)
NZ_MIN = 0.2              # une face « couvre » si sa normale monte au moins ainsi
MARGE_BORD = 1.5          # érosion de l'emprise avant de mesurer sa couverture (m)
SEUIL_ABSENT = 0.15       # fraction d'emprise couverte en dessous de laquelle on ajoute
SEUIL_PRESENT = 0.85      # au-dessus : le bâtiment est déjà dans la maquette


# ============================== flux WFS ==============================
def url_requete(lon, lat, rayon, start):
    """Une page de bâtiments autour du point, directement en RGF93 / CC48
    (EPSG:3948, le repère de la maquette : rien à reprojeter). Le CQL de ce
    serveur attend le point en lat lon."""
    return WFS + "?" + urllib.parse.urlencode({
        "SERVICE": "WFS", "VERSION": "2.0.0", "REQUEST": "GetFeature",
        "TYPENAMES": COUCHE, "OUTPUTFORMAT": "application/json",
        "SRSNAME": "EPSG:3948", "COUNT": PAGE, "STARTINDEX": start,
        "CQL_FILTER": f"DWITHIN(geometrie,POINT({lat} {lon}),{int(rayon)},meters)",
    })


def telecharge(lon, lat, rayon):
    """Toutes les pages, concaténées."""
    feats, start = [], 0
    while True:
        with urllib.request.urlopen(url_requete(lon, lat, rayon, start), timeout=60) as r:
            page = json.load(r)
        lot = page.get("features") or []
        feats.extend(lot)
        if len(lot) < PAGE:
            return feats
        start += len(lot)


# ============================== géométrie plane ==============================
def aire(anneau):
    s = 0.0
    n = len(anneau)
    for i in range(n):
        x0, y0 = anneau[i]
        x1, y1 = anneau[(i + 1) % n]
        s += x0 * y1 - x1 * y0
    return s / 2.0


def anneau_direct(anneau):
    """Anneau ouvert (sans point de fermeture), sans doublons consécutifs, en
    sens trigonométrique : tout l'enroulement des volumes en découle."""
    pts = [(float(p[0]), float(p[1])) for p in anneau]
    if len(pts) > 1 and pts[0] == pts[-1]:
        pts.pop()
    net = []
    for p in pts:
        if not net or math.hypot(p[0] - net[-1][0], p[1] - net[-1][1]) > 1e-3:
            net.append(p)
    if len(net) > 1 and math.hypot(net[0][0] - net[-1][0], net[0][1] - net[-1][1]) <= 1e-3:
        net.pop()
    if aire(net) < 0:
        net.reverse()
    return net


def anneau_local(feature, cx, cy):
    """Anneau extérieur du plus grand polygone, en repère local."""
    geom = feature.get("geometry") or {}
    if geom.get("type") == "Polygon":
        polys = [geom["coordinates"]]
    elif geom.get("type") == "MultiPolygon":
        polys = geom["coordinates"]
    else:
        return []
    meilleur, aire_max = [], -1.0
    for poly in polys:
        if not poly:
            continue
        ring = anneau_direct([(p[0] - cx, p[1] - cy) for p in poly[0]])
        if len(ring) >= 3 and aire(ring) > aire_max:
            meilleur, aire_max = ring, aire(ring)
    return meilleur


def _dans_triangle(px, py, a, b, c):
    def cote(p, q):
        return (q[0] - p[0]) * (py - p[1]) - (q[1] - p[1]) * (px - p[0])
    return cote(a, b) >= -1e-9 and cote(b, c) >= -1e-9 and cote(c, a) >= -1e-9


def dans_polygone(px, py, anneau):
    """Test pair-impair (lancer de rayon vers +x)."""
    dedans = False
    n = len(anneau)
    for i in range(n):
        x0, y0 = anneau[i]
        x1, y1 = anneau[(i + 1) % n]
        if (y0 > py) != (y1 > py):
            x = x0 + (py - y0) * (x1 - x0) / (y1 - y0)
            if x > px:
                dedans = not dedans
    return dedans


def triangule(anneau):
    """Découpage d'oreilles d'un polygone simple en sens trigonométrique.
    Retourne des triplets d'indices dans `anneau`, tous de même sens."""
    pts = list(anneau)
    n = len(pts)
    if n < 3:
        return []
    idx = list(range(n))
    tris = []

    def cross(i, j, k):
        (x0, y0), (x1, y1), (x2, y2) = pts[i], pts[j], pts[k]
        return (x1 - x0) * (y2 - y0) - (y1 - y0) * (x2 - x0)

    garde = 0
    while len(idx) > 3 and garde < 10 * n:
        garde += 1
        coupe = False
        for p in range(len(idx)):
            i, j, k = idx[p - 1], idx[p], idx[(p + 1) % len(idx)]
            c = cross(i, j, k)
            if abs(c) < 1e-9:           # sommet aligné : oreille plate, on l'ôte
                idx.pop(p)
                coupe = True
                break
            if c < 0:
                continue                # sommet rentrant
            a, b, d = pts[i], pts[j], pts[k]
            if any(_dans_triangle(pts[m][0], pts[m][1], a, b, d)
                   for m in idx if m not in (i, j, k)):
                continue
            tris.append((i, j, k))
            idx.pop(p)
            coupe = True
            break
        if not coupe:
            # polygone dégénéré (auto-intersection) : on coupe la première
            # oreille convexe pour terminer, plutôt que d'échouer
            for p in range(len(idx)):
                i, j, k = idx[p - 1], idx[p], idx[(p + 1) % len(idx)]
                if cross(i, j, k) > 0:
                    tris.append((i, j, k))
                    idx.pop(p)
                    break
            else:
                break
    if len(idx) == 3:
        tris.append(tuple(idx))
    return tris


# ============================== occupation du LoD2 ==============================
def occupation(verts, tris, cx, cy):
    """Cellules (CELLULE m) dont le centre est sous une face montante du
    bâti : c'est l'emprise réellement couverte par la maquette."""
    cells = set()
    c = CELLULE
    for (a, b, d) in tris:
        (x1, y1, z1), (x2, y2, z2), (x3, y3, z3) = verts[a], verts[b], verts[d]
        ux, uy, uz = x2 - x1, y2 - y1, z2 - z1
        vx, vy, vz = x3 - x1, y3 - y1, z3 - z1
        nx, ny, nz = uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx
        norme = math.sqrt(nx * nx + ny * ny + nz * nz)
        if norme < 1e-9 or abs(nz) / norme < NZ_MIN:
            continue
        P = [(x1 - cx, y1 - cy), (x2 - cx, y2 - cy), (x3 - cx, y3 - cy)]
        if nz < 0:
            P.reverse()
        xs = [p[0] for p in P]
        ys = [p[1] for p in P]
        for i in range(int(math.floor(min(xs) / c)), int(math.floor(max(xs) / c)) + 1):
            for j in range(int(math.floor(min(ys) / c)), int(math.floor(max(ys) / c)) + 1):
                if _dans_triangle((i + 0.5) * c, (j + 0.5) * c, *P):
                    cells.add((i, j))
    return cells


def distance_bord(px, py, anneau):
    d = float("inf")
    n = len(anneau)
    for i in range(n):
        (x0, y0), (x1, y1) = anneau[i], anneau[(i + 1) % n]
        dx, dy = x1 - x0, y1 - y0
        l2 = dx * dx + dy * dy
        t = max(0.0, min(1.0, ((px - x0) * dx + (py - y0) * dy) / l2)) if l2 else 0.0
        d = min(d, math.hypot(px - (x0 + t * dx), py - (y0 + t * dy)))
    return d


def classe(anneau, cellules):
    """('absent' | 'partiel' | 'present', fraction couverte) d'une emprise.

    La fraction se mesure sur l'intérieur érodé de MARGE_BORD : les emprises
    IGN et LoD2 diffèrent d'un mètre ou deux, et sur une maison de 10 m ce
    seul décalage laisserait 20 % de cellules de bord découvertes. Un
    bâtiment trop étroit pour avoir un intérieur est jugé sur toute son
    emprise."""
    c = CELLULE
    xs = [p[0] for p in anneau]
    ys = [p[1] for p in anneau]
    total = couvertes = 0          # intérieur érodé
    total_b = couvertes_b = 0      # emprise entière, repli des petits
    for i in range(int(math.floor(min(xs) / c)), int(math.floor(max(xs) / c)) + 1):
        for j in range(int(math.floor(min(ys) / c)), int(math.floor(max(ys) / c)) + 1):
            x, y = (i + 0.5) * c, (j + 0.5) * c
            if not dans_polygone(x, y, anneau):
                continue
            dedans = (i, j) in cellules
            total_b += 1
            couvertes_b += dedans
            if distance_bord(x, y, anneau) >= MARGE_BORD:
                total += 1
                couvertes += dedans
    if total == 0:
        total, couvertes = total_b, couvertes_b
    fraction = couvertes / total if total else 0.0
    if fraction < SEUIL_ABSENT:
        return "absent", fraction
    if fraction >= SEUIL_PRESENT:
        return "present", fraction
    return "partiel", fraction


# ============================== extrusion ==============================
def extrude(anneau, z_sol, z_egout, z_faite=None):
    """Volume fermé et orienté vers l'extérieur : fond à z_sol − JUPE, murs
    jusqu'à l'égout, puis tronc de toit homothétique jusqu'au faîte (ou
    dessus plat à l'égout sans faîte). Coordonnées de l'anneau conservées ;
    sommets [(x, y, z)], triangles [(a, b, c)]."""
    ring = anneau_direct(anneau)
    n = len(ring)
    z_bas = z_sol - JUPE
    verts = [(x, y, z_bas) for (x, y) in ring] + [(x, y, z_egout) for (x, y) in ring]
    tris = []
    dessus = triangule(ring)
    # fond, normale vers le bas
    tris += [(c, b, a) for (a, b, c) in dessus]
    # murs
    for i in range(n):
        j = (i + 1) % n
        tris += [(i, j, n + j), (i, n + j, n + i)]

    montee = (z_faite - z_egout) if z_faite is not None else 0.0
    if montee <= 0.05:
        tris += [(n + a, n + b, n + c) for (a, b, c) in dessus]
        return verts, tris

    # tronc de toit : anneau réduit vers le centroïde, largeur estimée par
    # 4·aire/périmètre (= le côté d'un carré, le petit côté d'un rectangle
    # à peu de chose près)
    A = aire(ring)
    perimetre = sum(math.hypot(ring[(i + 1) % n][0] - ring[i][0],
                               ring[(i + 1) % n][1] - ring[i][1]) for i in range(n))
    largeur = 4.0 * A / perimetre if perimetre > 0 else 0.0
    retrait = montee / math.tan(PENTE)
    facteur = max(0.0, 1.0 - 2.0 * retrait / largeur) if largeur > 0 else 0.0
    gx = sum((ring[i][0] + ring[(i + 1) % n][0])
             * (ring[i][0] * ring[(i + 1) % n][1] - ring[(i + 1) % n][0] * ring[i][1])
             for i in range(n)) / (6.0 * A)
    gy = sum((ring[i][1] + ring[(i + 1) % n][1])
             * (ring[i][0] * ring[(i + 1) % n][1] - ring[(i + 1) % n][0] * ring[i][1])
             for i in range(n)) / (6.0 * A)
    if facteur <= 1e-6:
        # pyramide : un seul sommet au faîte
        apex = len(verts)
        verts.append((gx, gy, z_faite))
        for i in range(n):
            j = (i + 1) % n
            tris.append((n + i, n + j, apex))
        return verts, tris
    haut = 2 * n
    verts += [(gx + facteur * (x - gx), gy + facteur * (y - gy), z_faite) for (x, y) in ring]
    for i in range(n):
        j = (i + 1) % n
        tris += [(n + i, n + j, haut + j), (n + i, haut + j, haut + i)]
    tris += [(haut + a, haut + b, haut + c) for (a, b, c) in dessus]
    return verts, tris


# ============================== enchaînement ==============================
def _hauteur(props):
    h = props.get("hauteur")
    if h is None and props.get("altitude_minimale_toit") is not None \
            and props.get("altitude_minimale_sol") is not None:
        h = props["altitude_minimale_toit"] - props["altitude_minimale_sol"]
    return h


def _montee(props):
    a, b = props.get("altitude_maximale_toit"), props.get("altitude_minimale_toit")
    if a is None or b is None:
        return None
    return a - b


def construit(z, bati, tin, cx, cy, progression=None, telecharge=telecharge,
              cache=None):
    """Ajoute à l'accumulateur `bati` les bâtiments BD TOPO absents du LoD2
    et rend le compte rendu à consigner dans meta.json (`complement`).

    `tin` : InterpolateurTIN du MNT (repère local) ; `cx`, `cy` : centre CC48.
    `cache` : chemin d'une copie de la réponse — écrite après chaque
    téléchargement, relue seulement si le réseau manque. La zone n'échoue
    jamais pour un flux indisponible : elle se construit sans complément et
    le dit."""
    rayon = z.rayons["bati"]
    rapport = {"source": "IGN BD TOPO", "couche": COUCHE,
               "date": datetime.date.today().isoformat(),
               "tris": [len(bati.tris), len(bati.tris)], "batiments": [], "ignores": {}}
    try:
        feats = telecharge(z.lon, z.lat, rayon)
        if cache:
            os.makedirs(os.path.dirname(cache), exist_ok=True)
            json.dump({"type": "FeatureCollection", "features": feats}, open(cache, "w"))
    except (OSError, ValueError) as e:
        if cache and os.path.exists(cache):
            feats = json.load(open(cache)).get("features") or []
            print(f"BD TOPO injoignable ({e}) : copie en cache utilisée ({len(feats)} bâtiments)")
            rapport["cache"] = True
        else:
            print(f"BD TOPO injoignable ({e}) : zone construite SANS complément")
            rapport["erreur"] = str(e)
            return rapport
    print(f"BD TOPO : {len(feats)} bâtiments dans {rayon:g} m")

    cellules = occupation(bati.verts, bati.tris, cx, cy)
    ignores = {}
    r2 = rayon * rayon
    for f in feats:
        props = f.get("properties") or {}
        ring = anneau_local(f, cx, cy)
        if len(ring) < 3:
            continue
        if min(x * x + y * y for (x, y) in ring) > r2:
            continue
        if props.get("etat_de_l_objet") == "En projet":
            ignores["projet"] = ignores.get("projet", 0) + 1
            continue
        h = _hauteur(props)
        if h is None or h < HAUTEUR_MIN or abs(aire(ring)) < AIRE_MIN:
            ignores["petit"] = ignores.get("petit", 0) + 1
            continue
        etat, fraction = classe(ring, cellules)
        if etat != "absent":
            ignores[etat] = ignores.get(etat, 0) + 1
            if etat == "partiel":
                print(f"  {props.get('cleabs')} : emprise couverte à {fraction:.0%}, ignorée")
            continue
        z_sol = min(tin.z(x, y) for (x, y) in ring)
        z_egout = z_sol + h
        montee = _montee(props)
        z_faite = z_egout + montee if montee is not None and montee > 0.05 else None
        verts, tris = extrude(ring, z_sol, z_egout, z_faite)
        bati.add([(x + cx, y + cy, zz) for (x, y, zz) in verts], tris, 1e9)
        gx = sum(p[0] for p in ring) / len(ring)
        gy = sum(p[1] for p in ring) / len(ring)
        rapport["batiments"].append({
            "id": props.get("cleabs"), "x": round(gx, 2), "y": round(gy, 2),
            "sol": round(z_sol, 2), "egout": round(z_egout, 2),
            "faite": round(z_faite, 2) if z_faite is not None else None})
        print(f"  + {props.get('cleabs')} ({gx:+.0f}, {gy:+.0f}) égout {h:.1f} m"
              + (f", faîte +{montee:.1f}" if z_faite is not None else ""))
    rapport["tris"][1] = len(bati.tris)
    rapport["ignores"] = ignores
    print(f"complément : {len(rapport['batiments'])} bâtiment(s) ajouté(s), "
          f"ignorés {ignores}")
    return rapport
