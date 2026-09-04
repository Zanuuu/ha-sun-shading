"""Lecture d'un masque d'horizon.

**Aucun import Home Assistant ici, et c'est délibéré** : c'est la partie qui
décide si le soleil atteint une ouverture, donc celle qui doit être vérifiable
sans démarrer Home Assistant.

Un masque donne, pour chaque azimut, la BANDE d'élévations `[min, max]` où le
soleil atteint directement la fenêtre. Une bande et non un seuil : un débord
de toiture ou une corniche masque le soleil HAUT, et « au-dessus de tel angle
il y a du soleil » serait faux là.

Les masques sont calculés par la page (three.js + BVH sur la maquette), qui
les pousse par le service `set_opening`. Ici, on ne fait que les lire.
"""


def facteur_feuillaison(jour, bornes):
    """0 = feuillus nus, 1 = pleinement feuillés.

    `jour` est en base 0 (1er janvier = 0), comme `etat.jour` dans app.js.
    `bornes` = (début débourrement, fin débourrement, début chute, fin chute).

    Seule la FORME — deux rampes linéaires — vit ici ; les dates arrivent dans
    la charge utile du service. C'est ce qui limite au minimum ce qui est
    écrit deux fois entre la page et l'intégration.
    """
    deb0, deb1, chu0, chu1 = bornes
    if jour < deb0 or jour >= chu1:
        return 0.0
    if jour < deb1:
        return (jour - deb0) / (deb1 - deb0)
    if jour < chu0:
        return 1.0
    return 1.0 - (jour - chu0) / (chu1 - chu0)


def bande(masque, azimut, pas_azimut=1):
    """Bornes [min, max] à cet azimut, interpolées entre les deux échantillons
    encadrants. Le tableau boucle : l'azimut 359,7 interpole entre le dernier
    échantillon et le premier."""
    n = len(masque)
    t = (azimut % 360.0) / pas_azimut
    i = int(t) % n
    j = (i + 1) % n
    f = t - int(t)
    return (masque[i][0] + (masque[j][0] - masque[i][0]) * f,
            masque[i][1] + (masque[j][1] - masque[i][1]) * f)


def bornes(ouverture, azimut, jour):
    """Bornes du jour : bandes d'été et d'hiver mélangées par la feuillaison.

    Mélanger deux SEUILS d'élévation n'est pas identique à mélanger le
    coefficient d'extinction dont ils découlent : approximation assumée, sans
    effet hors des deux rampes de mars-avril et d'octobre-novembre.
    """
    f = facteur_feuillaison(jour, ouverture["foliation"])
    pas = ouverture.get("azimuth_step", 1)
    bas_e, haut_e = bande(ouverture["leafy"], azimut, pas)
    bas_h, haut_h = bande(ouverture["bare"], azimut, pas)
    return (bas_h + (bas_e - bas_h) * f, haut_h + (haut_e - haut_h) * f)


def au_soleil(ouverture, azimut, elevation, jour):
    """Le soleil atteint-il directement cette ouverture ?

    Une élévation de 90 sur les deux bornes signifie « jamais de soleil à cet
    azimut » : sous nos latitudes le soleil ne l'atteint pas, aucun cas
    particulier n'est donc nécessaire.
    """
    bas, haut = bornes(ouverture, azimut, jour)
    return bas <= elevation <= haut
