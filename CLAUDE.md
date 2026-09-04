# Sun Shading — notes techniques

Intégration Home Assistant : masques d'horizon par fenêtre, calculés sur la
maquette 3D de l'Eurométropole de Strasbourg, servis comme `binary_sensor`
pour piloter des volets. Ce fichier est la mémoire technique du projet — le
pourquoi des choix, et les pièges déjà payés. Le README, lui, s'adresse à
l'utilisateur.

Le code, les commentaires et l'interface de la carte sont en **français** ;
le contrat public (domaine, services, attributs, chemins HTTP) est en
**anglais**. Le pipeline ne couvre que l'Eurométropole de Strasbourg.

## Structure
- `zones/<nom>/` — l'unité du pipeline : `zone.json` (lat, lon, titre,
  rayons, `controle` pour le test de fumée, `modele_precis` facultatif),
  `ouvertures.json` (volets et points de référence), `masques/`, `donnees/`
  (sorties des prétraitements) et `dist/` (sortie de `build.py`, ignoré).
  Tous les scripts prennent `--zone <nom|chemin>`, sinon `$ZONE`, sinon
  l'unique zone présente (`pipeline/zone.py`, `tests/serveur.js`).
- `custom_components/sun_shading/pipeline/` (05/09/2026) — LE pipeline,
  livré avec l'intégration et **sans import Home Assistant** : `zone.py`,
  `preprocess.py`, `preprocess_sat.py`, `extrait_pm3d.py`, `modele_precis.py`,
  `importe_toit_obj.py`, `build.py` (partie zone), `progression.py`,
  `construire.py` (enchaînement depuis une spécification JSON, lignes
  `PROGRESSION` sur stdout — l'entrée du sous-processus de l'intégration).
  Chaque module expose `construit(zone, progression)` et garde son état de
  module : un processus ne construit qu'une zone à la fois. Les scripts de
  `sources/` du même nom sont des enveloppes CLI (`_pipeline.py` ajoute le
  composant au chemin et importe `pipeline` en paquet de premier niveau,
  sans charger HA). Cache des dalles : `$SUN_SHADING_CACHE`, sinon
  `~/.cache/sun-shading/`. **`scipy` n'est plus une dépendance** : le drapage
  de la voirie interpole dans le TIN réel du MNT (`InterpolateurTIN`, grille
  de 8 m) au lieu d'une Delaunay sur ses sommets — seule la section voirie
  de `donnees.bin.gz` diffère du rejeu, et la voirie n'est pas dans le BVH.
- `pipeline/preprocess.py` — dalles Maquette 3D 2022 (LoD2, MNT, ponts),
  végétation, filaire de circulation → `donnees.bin.gz` + `meta.json`
  (qui porte aussi `zone`, `r_bati`, `r_terrain`, `r_arbres`).
  Télécharge automatiquement les sources manquantes (API data.strasbourg.eu,
  cache `~/.cache/sun-shading/maquette2022/`, ~1,7 Go pour 1 km,
  partagé entre zones ; filaire par zone). Rayons par défaut : carte
  1000 m, bâtiments/ponts 1050, terrain 1080, arbres 1000 ; MNT natif
  jusqu'à 500 m puis aggloméré (grille 10 m) pour tenir le budget. Tout est
  plafonné à ~1600 m par la quantification int16.
- `pipeline/preprocess_sat.py` — atlas orthophoto + atlas façades →
  `ortho.webp`, `atlas*.webp`, `sat.bin.gz`, `sat_meta.json`. Demi-étendue
  de l'atlas terrain = rayon terrain + 40 m.
- `pipeline/extrait_pm3d.py` — photomaillage photogrammétrique (jeu `pm3d_2022`,
  dalles de 100 m, ~24 Mo pièce, cache `~/.cache/sun-shading/pm3d/`,
  ~1 Go pour 200 m) → `pm3d.bin.gz`, `pm3datlas*.webp`, `pm3d_meta.json`.
  Rayon `photo` de la zone (r_ext = +30, trou du MNT = −2). Dépend de
  `donnees.bin.gz`, `sat.bin.gz` et `sat_meta.json` : il en dérive ses
  listes de retrait, donc à relancer après tout changement des deux
  prétraitements ci-dessus.
- `sources/masque_horizon.js` — masques d'horizon des ouvertures (Node +
  Playwright) : pilote la page construite en headless et lui fait calculer,
  pour chaque azimut, la bande d'élévations où le soleil atteint la fenêtre.
  Entrée `zones/<nom>/ouvertures.json`, sortie `zones/<nom>/masques/<nom>.json`.
  Dépend de `dist/`, donc à relancer après tout changement de la géométrie
  ou de `app.js`.
- `custom_components/sun_shading/` — composant Home Assistant (chemin imposé
  par HACS ; stdlib + Pillow) : il CONSTRUIT la zone (05/09/2026), la SERT et
  STOCKE les masques poussés par la page pour les ÉVALUER ; il ne calcule
  aucune géométrie d'ombre.
  `config_flow.py` : menu construire / données externes, sélecteur de carte
  prérempli sur `hass.config`, section avancée repliée (`data_entry_flow.section`),
  étape `estimate` qui chiffre dalles, gigaoctets, disque et durée AVANT de
  créer l'entrée (`estimation.py` : requête de comptage à l'API EMS +
  micro-étalonnage du processeur — un formulaire HA n'a pas de script client,
  l'indication dynamique se fait donc par une étape, pas au fil de la frappe),
  `async_step_reconfigure`, et un OptionsFlow qui ne reconstruit jamais.
  `constructeur.py` : sous-processus `python -m pipeline.construire` (pas un
  thread — des dizaines de minutes de Python pur disputeraient le GIL à la
  boucle d'événements, et le pic mémoire du prétraitement, ~900 Mo, resterait
  dans le processus de HA), verrou global, lignes `PROGRESSION` lues au fil de
  l'eau, `construit.json` écrit après succès. `zone_entree.py` : la seule
  traduction entrée → zone du pipeline (rayons dérivés du rayon affiché,
  dossiers, signature de reconstruction). `sensor.py` (état de construction,
  ENUM), `button.py` (reconstruire), `entite.py` (un appareil par zone).
  **Multi-entrées** : un panneau, un appareil et un stockage
  (`.storage/sun_shading.<entry_id>`) par zone ; les services prennent
  `entry_id` dès qu'il y en a plusieurs. `masque.py` n'importe rien de Home
  Assistant, à dessein — c'est la partie qui décide, donc celle qui doit être
  vérifiable sans démarrer HA. `masque.py` n'importe
  rien de Home Assistant, à dessein — c'est la partie qui décide, donc celle
  qui doit être vérifiable sans démarrer HA. Services `set_opening` /
  `remove_opening`. `frontend/panel.js` y est l'artefact généré par
  `build.py`, versionné parce que HACS ne construit rien ;
  `tests/test_masque.py` vérifie qu'il est identique au dernier build.
- `sources/app.js` — application three.js (voir « Faits techniques »). Ne
  connaît AUCUNE zone : `monte(racine, hote, base)` charge d'abord
  `manifest.json` (revalidé à chaque fois, `cache: "no-cache"`) et en tire
  métadonnées, ressources hachées, volets, titre, lieu, `LAT`/`LON`/`Q`,
  rayons (`R_AFF`, `R_BATI`, `EX_T`). Sans manifest à cet emplacement, la
  page l'écrit noir sur blanc au lieu d'échouer en silence.
- `sources/page-template.html` — interface, styles, thèmes clair/sombre/auto ;
  titre et lieu sont des emplacements (`#charge-titre`, `#titre-h1`,
  `#titre-lieu`) remplis au montage.
- `sources/build.py --zone` — assemble `panel.js` (module ES, three.js et
  three-mesh-bvh inlinés, LE MÊME pour toutes les zones), écrit dans
  `custom_components/…/frontend/` et copié dans `zones/<nom>/dist/` avec
  `manifest.json`, les binaires à noms hachés (cache busting) et la page
  autonome de quelques lignes qui monte l'élément — repli, URL directe, tests
  et `masque_horizon.js`. L'élément lit `panel.config.data` (posé par
  l'intégration) pour situer les données, sinon `import.meta.url` ; le
  montage est différé d'une microtâche pour que `panel` puisse arriver après
  l'insertion. Le photomaillage et le modèle précis sont facultatifs.
- `sources/deploie_ha.py --zone --hote` — dépose `zones/<nom>/dist/` dans
  `config/<dossier>/` (défaut `sun_shading/`, celui que
  l'intégration sert) via smbclient (identifiants hors dépôt dans
  `~/.config/sun-shading/smb_auth`, hôte par `--hote` ou
  `$SUN_SHADING_HOTE`, aucune valeur personnelle dans le code) et purge les
  binaires hachés périmés.
- `README.md` — documentation utilisateur du dossier (schéma Mermaid du
  workflow complet, procédure d'édition manuelle de la toiture, workflow des
  masques d'horizon).

## Faits techniques
- Projection : EPSG:3948 (RGF93 CC48), écrite en bibliothèque standard
  (`pipeline/zone.py`) — Lambert conique conforme à deux parallèles, GRS80,
  vérifiée à 0,0 m contre pyproj. Offset des OBJ de la maquette :
  (2034999,975 ; 7254999,975). Le centre local d'une zone est DÉRIVÉ de ses
  coordonnées WGS84, jamais saisi.
- Repère local : X = est, Y = nord, Z = altitude ; quantification 5 cm en
  int16/uint16 ; `zmin_ref = 131,0` m.
- Position solaire : algorithme NOAA complet (déclinaison, équation du temps,
  réfraction). Heure légale Europe/Paris via `Intl.DateTimeFormat` (DST géré).
- Rendu : three.js 0.152.2 (build UMD, avertissement de dépréciation retiré au
  build), three-mesh-bvh 0.6.8 (UMD). Rendu à la demande (pas de boucle de
  rendu permanente) ; `shadowMap.autoUpdate = false`, recalcul uniquement quand
  le soleil bouge. Ombres PCFSoft 2048/4096/8192 (8192 plafonné à 4096 en mode
  photo, cf. budget mémoire), frustum d'ombre adaptatif :
  la caméra d'ombre suit la cible et se dimensionne sur l'étendue AU SOL
  réellement visible (projection des coins de l'écran sur le plan du sol —
  jamais la seule distance caméra : en vue oblique la carte d'ombre
  déborderait et ses texels de bord s'étireraient en fausses ombres ; horizon
  visible → rayon proportionné au zoom) ; ±80 m à ±1150 m. Carte d'ombre en
  shadowSide BackSide sur bâti, terrain et arbres : aucune surface ne
  s'auto-ombre (zéro acné à biais minimal) et la frontière d'ombre d'un mur
  naît à son pied exact quel que soit le biais (fin du peter-panning qui
  décollait les ombres de ~3 m). normalBias d'un demi-texel + bias de
  profondeur POSITIF de ~2 texels qui recentre la pénombre PCF dans le mur
  (sans lui, sa moitié claire dessine un liseré de lumière au pied des
  façades) ; recalcul à seuil. Contrepartie assumée : le micro-relief du
  terrain ne porte plus d'ombre (négligeable en plaine).
- Sonde : BVH (bâtiments, terrain, ponts) + houppiers en transmittance
  analytique (Beer-Lambert sur la traversée de l'ellipsoïde, coefficient
  saisonnier : feuillus nus de novembre à mars, tout est traité feuillu faute
  d'essence dans les données) ; pas de 1 min, index angulaire des arbres vus
  du point sondé (indispensable à 14 000 arbres), tranches de rAF. Disque
  solaire échantillonné (0,53°, 7 points, adaptatif : 3 rayons hors pénombre)
  par appels BVH directs raycastFirst en DoubleSide — le DoubleSide corrige
  aussi les fuites de l'ancien test FrontSide à travers les faces arrière des
  toits (le soleil rasant du soir en cour était surestimé). Résultat en
  fraction 0-1 par minute : frise en niveaux, total pondéré.
  **La sonde est une surface, pas un point** : un carré de 50 cm de côté déposé
  à plat sur la face visée (la normale de la face touchée est retenue quel que
  soit le maillage, et retournée vers la caméra — l'enroulement n'est pas
  fiable d'un maillage à l'autre). Base du carré : t1 horizontal, t2 dans la
  ligne de plus grande pente. Échantillonné sur une grille 3×3 de centres de
  cellule, parcourue centre → coins → milieux d'arête ; si les cinq premiers
  s'accordent à 2 % près, les quatre derniers ne sont pas tirés. Chacun des
  9 points porte son propre échantillonnage du disque solaire, d'où 15 rayons
  par minute hors pénombre et jusqu'à 63 aux transitions : tranches de rAF
  ramenées de 40 à 15 minutes. Classement de la surface : `sol` au-dessus de
  cos(12°), `facade` sous |n.z| < 0,5, `pente` entre les deux (titre du
  panneau : rose des vents et inclinaison). Marqueur : le carré à l'échelle
  réelle (3 px à 180 m de recul) plus une épingle le long de la normale, de
  taille écran constante (~55 px), remise à l'échelle à chaque rendu.
- Masques d'horizon : pour chaque ouverture, la **bande** d'élévations
  `[min, max]` où le soleil l'atteint directement, azimut par azimut (pas de
  1°). Une bande, pas un seuil : une corniche masque le soleil HAUT, et « au-
  dessus de tel angle il y a du soleil » y serait faux. **Le calcul est fait
  par la page elle-même**, pilotée en headless — même BVH, mêmes maillages,
  même modèle de feuillage, même NOAA que la sonde. Une seule implémentation
  de « le soleil atteint-il cette surface », donc rien à faire coïncider ; un
  portage Python aurait imposé une validation croisée permanente. Rendu
  possible par l'extraction de `sondeur()` hors de `calculeSonde()` : une
  fabrique qui capture point, normale, carré de 50 cm et cibles BVH, et rend
  `(dir, kFeuille, rapide) → fraction 0-1`. La sonde l'appelle par minute, le
  masque par direction. Algorithme : balayage grossier au degré à un seul
  rayon (il ne sert qu'à ENCADRER), puis chaque frontière affinée par
  dichotomie à l'échantillonnage complet (9 points × disque solaire), seuil
  0,5. `[90, 90]` = jamais de soleil (l'élévation ne l'atteint jamais sous
  cette latitude, donc aucun cas particulier côté Python). Deux masques par
  ouverture (feuillé `K_ETE`, nu `K_HIVER`). Vérifié : la course du soleil de
  la page concorde avec `sun.sun` à 0,05° près, élévation ET azimut.
- Configuration depuis l'interface : la sonde au clic, un choix de volet, et
  la page publie le masque dans Home Assistant. **Aucun copier-coller, aucun
  fichier, aucun rechargement.** Servie par l'intégration, la page est sur la
  MÊME origine que le frontend, ce qui ouvre trois voies essayées dans cet
  ordre : **`hass` en propriété** quand elle tourne en `panel_custom` — le
  contrat documenté ; sinon **`hass` du parent**
  (`window.parent.document.querySelector("home-assistant").hass`) en iframe —
  états à jour et WebSocket déjà authentifiée, mais structure interne du
  frontend, pas API publique ; sinon le **jeton de session**
  (`localStorage.hassTokens`, renouvelé via `/auth/token`) avec l'API REST.
  Les deux replis ont été ajoutés sur constat, pas par principe : dans
  l'application compagnon iOS, `hassTokens` est lisible au chargement puis
  disparaît au clic suivant, et `/api/states` ne ramène aucune entité `cover.`
  alors que `/api/services` répond. Le parent, lui, est toujours là. La voie
  retenue s'affiche dans le diagnostic du panneau. Servie ailleurs (test,
  serveur statique), le réglage « Ouvertures HA » reste caché et rien n'est
  tenté. La page ne garde AUCUN état de configuration : elle relit les volets
  par `/api/states` et les ouvertures par l'attribut `opening` des entités,
  d'où le bouton « Tout recalculer » qui rejoue les points mémorisés après un
  changement de géométrie. `calculeMasque()` est découpé en tranches de rAF à
  budget de temps (12 ms) : un masque coûte ~2 s de lancer de rayons, ce qui
  gèlerait l'interface d'un bloc.
- Modèle précis d'un bâtiment (facultatif) : le LoD2 idéalise les toitures
  (pyramides sans lucarnes, faîtes approximatifs), ce qui fausse la sonde sur
  les ouvertures de toit. `pipeline/modele_precis.py` permet de remplacer la
  toiture d'UN bâtiment : `composante_lod2()` retrouve sa composante connexe,
  `retire_lod2()` sort ses triangles de toiture de l'index (normale montante,
  sommets au-dessus d'une cote), et le maillage fourni les remplace —
  physique (sonde, BVH, ombres) dans tous les modes, visuel en maquette
  seulement. La voie générique est l'import d'un OBJ
  (`pipeline/importe_toit_obj.py`). Trois pièges payés, à ne pas
  réintroduire : `Mesh.solide()` assemble des morceaux jointifs en UN volume
  (dessus, fond, murs UNIQUEMENT sur les arêtes non partagées — un prisme par
  morceau superposerait des faces verticales, d'où du z-fighting), les
  sommets voisins doivent être **fusionnés par proximité** (3 cm : trois plans
  ne concourent qu'à quelques millimètres près) et les **jonctions en T**
  supprimées en insérant dans chaque arête les sommets des polygones voisins
  qui tombent dessus — sans quoi chaque zone dresse son propre mur jusqu'au
  sol et le toit se hérisse de lames verticales. Le volume doit descendre
  franchement sous le terrain : la technique d'ombre (BackSide, sans
  auto-ombrage) décollerait sinon les ombres du pied des murs conservés.
- Orientation des faces : ne pas se fier aux conventions d'enroulement, elles
  se contredisent d'un volume à l'autre. `Mesh.oriente()` retourne les faces
  par **test de parité, composante connexe par composante connexe** — un rayon
  parti du centre d'une face le long de sa normale coupe le reste de SA
  composante un nombre pair de fois s'il sort. La restriction à la composante
  est indispensable : lucarnes, souches et annexes s'interpénètrent avec le
  corps, et un test global les retournait à tort. Enjeu réel : une face
  retournée reste visible au rendu (matériau en FrontSide côté caméra) mais
  **la sonde la traverse**, et l'ombrage disparaît en silence. Seul endroit du
  pipeline à demander `numpy`.
- Offsets de la sonde resserrés à 0,15/0,10 m (depuis 0,6/0,3 m) pour que
  joues de lucarnes et casquettes comptent.
- Navigation : orbite au glisser (1 doigt/clic), pan au clic droit/Maj ou au
  glisser à deux doigts, zoom molette/pincement, rotation au pivotement des
  deux doigts, double-tap (ou double-clic, sonde inactive) = recentrage sur le
  point visé ; cible bornée à ±1050 m. Le réglage « Commandes » inverse ce
  partage (voir ci-dessus). Vue initiale à 180 m de recul ; trajet du soleil
  au rayon maximal par défaut.
- Élément personnalisé et shadow DOM : l'application se monte sur une racine
  (`racine`) et un hôte (`hote`) plutôt que sur le document — `$`, `largeur()`,
  `hauteur()`, `getComputedStyle(hote)`, `hote.dataset.theme`. Une instance par
  page : la portée module suffit et évite d'indenter 2000 lignes. **Le shadow
  DOM n'est pas un choix** : le CSS porte `*{…}`, `html,body{…}` et `body{…}`,
  qui saccageraient l'interface de HA en DOM clair. D'où `:root` → `:host`,
  `position:fixed` → `absolute` (sinon les panneaux débordent sur l'en-tête de
  HA), et `ResizeObserver` au lieu de `resize` — la fenêtre ne bouge pas quand
  la barre latérale de HA s'ouvre, l'hôte si. Limite connue : les `@media
  (max-width…)` s'évaluent sur la fenêtre, pas sur l'hôte ; un panneau étroit
  sur grand écran garderait la disposition large. Les deux builds UMD sont
  appelés avec un `this` explicite (`.call(globalThis)`) plutôt qu'en comptant
  sur leur détection de global, qui diffère d'un build à l'autre.
- Vue étroite et sens des commandes (05/09/2026) : Home Assistant pose
  `narrow` sur le panneau quand sa barre latérale est repliée (sous 870 px) ;
  l'élément le relaie en `data-etroit` sur l'hôte, ce qui montre `#btn-menu`,
  lequel émet `hass-toggle-menu` (`bubbles`, `composed` — sinon l'événement
  reste dans le shadow root). Sans lui, un panneau plein écran sur téléphone
  est un cul-de-sac. Les `@media` ne peuvent pas le remplacer : elles
  s'évaluent sur la FENÊTRE, pas sur l'hôte. Réglage « Commandes » :
  `normales` (un doigt / clic gauche = rotation) ou `inversees` (un doigt /
  clic gauche = déplacement, deux doigts = zoom + rotation + inclinaison,
  clic droit = rotation), mémorisé dans `localStorage.commandes`. Maj reste
  le raccourci du déplacement dans les deux sens.
- Panneau servi par l'intégration (04/09/2026, refondu le 05/09) : `async_setup_entry`
  enregistre un chemin statique pour `frontend/` du composant, une
  `HomeAssistantView` sans authentification pour le dossier de données
  (`VueDonnees` : dossier relu à chaque requête, donc changeable dans les
  options sans redémarrer ; jamais de sortie du dossier ; `Cache-Control`
  immuable pour les noms hachés, `no-cache` pour le reste), puis
  `panel_custom.async_register_panel` avec `config={"donnees": …}` et
  `module_url` versionné (`?v=<version du manifest>`). Chemins HTTP posés
  une fois par exécution de HA (drapeau dans `hass.data`), panneau retiré
  et reposé à chaque (re)chargement de l'entrée. Sans authentification à
  dessein : un `<script type="module">` et les `fetch` de la page ne portent
  pas de jeton, comme `/local/` ; le panneau, lui, exige un administrateur.
  Le YAML `panel_custom` et la copie dans `www/` sont obsolètes (gardés dans
  `docs/panel_custom.yaml` pour mémoire, migration de l'instance à faire).
- Capteurs : un `binary_sensor` par ouverture, créé par l'intégration, avec
  de vrais attributs (`elevation_min`, `elevation_max`, `margin`, `foliage`,
  `cover`, `point`, `normal` — contrat public en anglais depuis le 04/09/2026,
  domaine `sun_shading`). Écarté après essai : le paquet YAML de
  capteurs template (livré puis retiré le 31/08/2026) — 9 Ko de gabarit Jinja
  répété trois fois par capteur, sans attributs possibles, et un
  copier-coller à chaque retouche. Écarté aussi : les Template helpers créés
  par config flow, qui n'ont pas de champ `attributes`. Destiné à l'entrée
  `shading_custom_sensor` du blueprint CCA, qui exige un état binaire strict
  (vérifié par son `check_config`) — donc un `binary_sensor`, pas un
  `sensor`. `cond_custom` est déjà dans les listes par défaut
  `shading_conditions_start_and` et `shading_conditions_end_or`, que les
  automatisations de volets n'écrasent pas : renseigner la seule entrée
  `shading_custom_sensor` suffit à l'activer.
- **`elevation_min`/`elevation_max` sont un instantané à l'azimut solaire
  courant, pas un résumé du masque.** `OuvertureAuSoleil._recalcule()`
  (`binary_sensor.py`) appelle `masque.bornes(o, azimut, jour)` avec
  l'azimut ACTUEL de `sun.sun`, et c'est cette bande-là qu'exposent les
  attributs. Une façade est affiche donc `[90, 90]` (jamais de soleil à CET
  azimut) dès le début d'après-midi, l'après-midi entier, sans que le masque
  sous-jacent soit en cause — c'est un résultat normal, pas un défaut à
  corriger. Piège vécu le 04/09/2026 : trois capteurs est/sud lus
  l'après-midi affichaient `[90, 90]`, lecture d'abord prise pour trois
  masques cassés ; en sondant les mêmes points avec `window.__test.masque()`
  (bande complète sur les 360 azimuts) le résultat était parfaitement
  plausible, et l'azimut solaire courant confirmait l'après-midi. Pour
  juger un masque, toujours relire la bande ENTIÈRE (`masque()` ou
  `masques/<zone>.json`), jamais les attributs d'un seul instant.
- Duplication assumée, et tenue par un test : la lecture d'un masque
  (interpolation entre azimuts encadrants) existe en JS pour la relecture en
  créneaux, et en Python pour la décision. `tests/test_masque.py` les
  confronte sur ~1000 azimuts — écart mesuré 4×10⁻¹³ — et ancre le tout sur
  une valeur relevée en production (63,92° à l'azimut 304,65 le 31/08).
  Seule la FORME de la courbe de feuillaison vit côté Python ; ses quatre
  dates voyagent dans la charge utile du service, depuis la constante
  `FEUILLAISON` de `app.js`.
- Vue satellite : matériau terrain alternatif (ortho 44 cm/px, WebP) +
  bâtiments texturés jusqu'à 1050 m (atlas 4096², résolution dégressive
  avec la distance : 256/96/64 px) + reste blanc ; décodage différé au
  premier usage.
- Mode « Photo 3D » : photomaillage photogrammétrique 2022 sur un disque de
  200 m (r_ext 230 m), posé sur la vue satellite qui prend le relais au-delà.
  1,51 M triangles, 3 atlas de 4096². Résolution de texture dégressive par
  distance de l'îlot UV au centre (/2 jusqu'à 60 m, /4 jusqu'à 130, /8 ensuite) :
  à résolution native (1,7 cm/px) le disque demanderait plus de 2 Go de VRAM,
  alors qu'à 150 m de caméra un pixel écran couvre déjà ~12 cm au sol.
  Normales soudées par position et expédiées dans le binaire (13 o/sommet) —
  les îlots UV font ~3 triangles et les sommets sont dédoublés par couple
  (sommet, uv), donc un computeVertexNormals faciliterait tout le maillage.
  Le MNT est percé sous le disque (`retire_mnt`) : sol nu LiDAR drapé et
  photomaillage sont deux reconstructions divergentes de 10 à 50 cm, qu'un
  polygonOffset — correctif de coplanarité — ne peut pas réconcilier. Les
  façades texturées recouvertes et les arbres stylisés du disque sont masqués.
  Textures dé-ombrées au prétraitement (relèvement des basses lumières sur la
  seule valeur HSV, `--releve-ombres`, réglable après coup par
  `--atlas-seulement`) et éclairage adouci en mode photo (direct ×0,85,
  hémisphérique ×1,4) : sans cela, les ombres cuites de juin 2022 s'ajoutent
  aux ombres simulées.
- Rendu proche du photomaillage : le matériau est fondu de près (arête
  ~40 cm), c'est intrinsèque et sans remède. Une bascule automatique vers la
  vue satellite sous 80 m avait été essayée puis retirée (août 2026) : changer
  de fond de carte sous les doigts s'est révélé plus gênant que le flou qu'elle
  évitait. Le mode photo tient donc jusqu'à la borne de zoom (60 m) ; c'est une
  vue faite pour la plongée, et le sélecteur le dit.
- Budget mémoire, le vrai plafond du mode photo (textures décodées en RGBA8,
  mipmaps inclus) : ortho 5632² 169 Mo + 4 atlas de façades 357 Mo + 3 atlas de
  photomaillage 268 Mo + géométrie pm3d 98 Mo ≈ 890 Mo, auxquels s'ajoute la
  carte d'ombre — ~117 Mo à 4096 mais **~470 Mo à 8192**, le plus gros poste
  unique de la scène (three empaquette la profondeur en RGBA et ajoute un
  tampon de profondeur ; le coût va au carré). Photo 3D + « Très fines » tuait
  l'onglet sur iPhone. Trois réponses : carte d'ombre plafonnée à 4096 en mode
  photo (`Q_OMBRE_PHOTO` — sans perte visible : l'ombre y est portée par un
  maillage dix fois plus grossier que son texel, et le choix de l'utilisateur
  reprend effet en sortant du mode) ; textures chargées en `ImageBitmap`,
  téléversées par `renderer.initTexture` puis `close()` (un HTMLImageElement
  référencé par sa Texture laisse le navigateur seul juge de garder ~600 Mo de
  bitmaps décodés) ; tampons CPU du photomaillage rendus via `onUpload`
  (~100 Mo) — réservé à `litMeshPM`, dont le maillage n'est ni raycasté ni
  refiltré. Contrepartie : un contexte WebGL perdu ne peut plus être repeuplé,
  d'où le bandeau `#contexte-perdu` et le rechargement à la restauration.

## Propriété intellectuelle
- three.js 0.152.2 porte son propre en-tête `@license` MIT dans le build UMD ;
  **three-mesh-bvh 0.6.8 n'en a aucun**. `build.py` pose donc un bandeau
  `/*! nom version | copyright | MIT | url */` devant chaque bibliothèque
  inlinée, lu dans le `LICENSE` de `node_modules/` (jamais recopié à la main :
  il suivrait mal les versions épinglées), et `THIRD_PARTY_LICENSES` reprend
  les deux textes complets. C'est ce qu'exige la clause de la licence MIT pour
  un bundle redistribué.
- Données : Eurométropole de Strasbourg, Licence Ouverte 2.0 — crédit affiché
  en permanence dans la page (`page-template.html`), photomaillage mentionné
  avec le soutien FEDER / DataGrandEst. Position solaire : NOAA, domaine
  public. Playwright (Apache-2.0) et pytest-homeassistant-custom-component ne
  servent qu'aux tests. Aucune police ni ressource externe n'est chargée.

## Contraintes
- La page ne fait AUCUNE requête vers des services externes (polices
  système comprises). Seules les requêtes vers l'hôte qui la sert — Home
  Assistant — sont autorisées, et elle ne charge les données d'un mode qu'au
  moment où l'utilisateur le choisit.
- Fichiers produits : noms en français, sans accent ni espace.
- Home Assistant est un système en production : toute écriture dans sa
  configuration se fait après validation explicite de l'utilisateur.
- Relire l'état réel (fichiers, dépôt) avant d'agir ; demander avant toute
  suppression ou tout écrasement.
