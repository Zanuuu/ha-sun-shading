/* Sun Shading — application three.js de l'élément <sun-shading>.
   Données : Eurométropole de Strasbourg, Maquette 3D 2022 (Licence Ouverte).
   Repère local : X = est, Y = nord, Z = altitude (m, NGF - zmin_ref), origine
   au centre de la zone. Le bundle ne connaît AUCUNE zone : tout ce qui en
   dépend arrive par manifest.json au montage (cf. monte()). */
"use strict";

/* L'application vit dans une racine DOM et un élément hôte plutôt que dans le
   document : c'est ce qui lui permet d'être montée aussi bien dans une page
   autonome que dans un shadow root, comme panneau personnalisé de Home
   Assistant. Une seule instance par page — la portée module suffit, et évite
   d'indenter deux mille lignes pour rien. */
let racine = null;   // Document ou ShadowRoot : où vivent les éléments
let hote = null;     // élément portant le thème, les dimensions et les styles
const $ = (id) => racine.getElementById(id);
const largeur = () => hote.clientWidth;
const hauteur = () => hote.clientHeight;

/* Un panneau Home Assistant ne donne pas toujours de hauteur définie à
   l'élément : « height:100% » vaut alors 0, et la carte est parfaitement
   montée mais invisible. Aucune règle CSS ne sait exprimer « seulement si mon
   parent ne me donne pas de hauteur » : on mesure, une fois, et on occupe
   l'espace restant sous l'hôte si personne ne nous en donne. */
function calibreHauteur() {
  if (hote.clientHeight > 0) return; // le parent fournit la hauteur
  const applique = () => {
    hote.style.height =
      Math.max(200, innerHeight - hote.getBoundingClientRect().top) + "px";
  };
  applique();
  addEventListener("resize", applique);
}

/* Métadonnées de la zone, lues dans manifest.json par monte() : le même
   bundle sert toutes les zones, et Home Assistant le livre avec l'intégration
   alors que les données, elles, sont déposées par l'utilisateur. */
let DONNEES_META = null, SAT_META = null, PM3D_META = null, MODELE_META = null;
let VOLETS_META = [], RES = null;
let LAT = 0, LON = 0, Q = 0.05;
let R_AFF = 1000;   // rayon d'affichage (r_map) : trajet du soleil, bornes de pan
let R_BATI = 1050;  // bâtiments porteurs d'ombre conservés jusqu'ici
let EX_T = 1120;    // demi-étendue du terrain (+ marge) : grilles d'index

const RAD = Math.PI / 180;

/* ============================== Position solaire (NOAA) ============================== */
function positionSolaire(utcMs, lat, lon) {
  const jd = utcMs / 86400000 + 2440587.5;
  const T = (jd - 2451545.0) / 36525.0;
  const L0 = ((280.46646 + T * (36000.76983 + 0.0003032 * T)) % 360 + 360) % 360;
  const M = 357.52911 + T * (35999.05029 - 0.0001537 * T);
  const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T);
  const C = Math.sin(M * RAD) * (1.914602 - T * (0.004817 + 0.000014 * T))
        + Math.sin(2 * M * RAD) * (0.019993 - 0.000101 * T)
        + Math.sin(3 * M * RAD) * 0.000289;
  const trueLong = L0 + C;
  const omega = 125.04 - 1934.136 * T;
  const lambda = trueLong - 0.00569 - 0.00478 * Math.sin(omega * RAD);
  const eps0 = 23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60;
  const eps = eps0 + 0.00256 * Math.cos(omega * RAD);
  const decl = Math.asin(Math.sin(eps * RAD) * Math.sin(lambda * RAD)) / RAD;
  const y2 = Math.tan((eps / 2) * RAD) ** 2;
  const eot = 4 / RAD * (y2 * Math.sin(2 * L0 * RAD) - 2 * e * Math.sin(M * RAD)
        + 4 * e * y2 * Math.sin(M * RAD) * Math.cos(2 * L0 * RAD)
        - 0.5 * y2 * y2 * Math.sin(4 * L0 * RAD)
        - 1.25 * e * e * Math.sin(2 * M * RAD)); // minutes
  const minutesUTC = ((utcMs / 60000) % 1440 + 1440) % 1440;
  const tst = (minutesUTC + eot + 4 * lon + 1440) % 1440;
  let H = tst / 4 - 180;
  if (H < -180) H += 360;
  const latR = lat * RAD, declR = decl * RAD, HR = H * RAD;
  let cosZen = Math.sin(latR) * Math.sin(declR) + Math.cos(latR) * Math.cos(declR) * Math.cos(HR);
  cosZen = Math.min(1, Math.max(-1, cosZen));
  const zen = Math.acos(cosZen) / RAD;
  const elGeom = 90 - zen;
  // réfraction atmosphérique (NOAA)
  let refr = 0;
  if (elGeom <= 85) {
    const te = Math.tan(elGeom * RAD);
    if (elGeom > 5) refr = 58.1 / te - 0.07 / te ** 3 + 0.000086 / te ** 5;
    else if (elGeom > -0.575) refr = 1735 + elGeom * (-518.2 + elGeom * (103.4 + elGeom * (-12.79 + elGeom * 0.711)));
    else refr = -20.774 / te;
    refr /= 3600;
  }
  let az;
  const denom = Math.cos(latR) * Math.sin(zen * RAD);
  if (Math.abs(denom) > 1e-9) {
    let cosAz = (Math.sin(latR) * cosZen - Math.sin(declR)) / denom;
    cosAz = Math.min(1, Math.max(-1, cosAz));
    az = Math.acos(cosAz) / RAD;
    az = H > 0 ? (az + 180) % 360 : (540 - az) % 360;
  } else az = lat > 0 ? 180 : 0;
  return { azimut: az, elevation: elGeom + refr, elevationGeom: elGeom, declinaison: decl, eot };
}

/* ============================== Heure légale Europe/Paris ============================== */
const fmtOffset = new Intl.DateTimeFormat("en-US", {
  timeZone: "Europe/Paris", hourCycle: "h23",
  year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric",
});
function decalageParisMin(utcMs) {
  const p = {};
  for (const x of fmtOffset.formatToParts(utcMs)) p[x.type] = x.value;
  const wall = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute);
  return Math.round((wall - Math.floor(utcMs / 60000) * 60000) / 60000);
}
function utcDepuisParis(y, m, d, minutes) {
  const guess = Date.UTC(y, m - 1, d, 0, minutes);
  const utc1 = guess - decalageParisMin(guess) * 60000;
  return guess - decalageParisMin(utc1) * 60000;
}

/* ============================== État temporel ============================== */
const maintenant = new Date();
const ANNEE = maintenant.getFullYear();
const etat = {
  jour: 0,       // index 0..364 depuis le 1er janvier
  minutes: 720,  // minutes locales 0..1439
  lecture: false,
  ephemerides: null, // {leverMin, coucherMin, midiMin} en minutes locales, ou null
};
function dateDuJour(j) { const d = new Date(Date.UTC(ANNEE, 0, 1 + j)); return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate() }; }
function jourDepuisDate(m, d) { return Math.round((Date.UTC(ANNEE, m - 1, d) - Date.UTC(ANNEE, 0, 1)) / 86400000); }
function utcCourant() { const { y, m, d } = dateDuJour(etat.jour); return utcDepuisParis(y, m, d, etat.minutes); }

function calculeEphemerides() {
  const { y, m, d } = dateDuJour(etat.jour);
  let prev = null, lever = null, coucher = null, midi = { el: -90, min: 720 };
  for (let t = 0; t <= 1440; t += 2) {
    const s = positionSolaire(utcDepuisParis(y, m, d, t), LAT, LON);
    const el = s.elevationGeom + 0.833; // seuil lever/coucher
    if (prev !== null) {
      if (prev <= 0 && el > 0 && lever === null) lever = t - 2 + 2 * (-prev) / (el - prev);
      if (prev > 0 && el <= 0 && coucher === null) coucher = t - 2 + 2 * prev / (prev - el);
    }
    if (s.elevationGeom > midi.el) midi = { el: s.elevationGeom, min: t };
    prev = el;
  }
  etat.ephemerides = {
    lever: lever === null ? null : Math.round(lever),
    coucher: coucher === null ? null : Math.round(coucher),
    midi: midi.min, elMax: midi.el,
  };
}

/* ============================== Décodage des données ============================== */
/* Les binaires sont servis à côté du MODULE, pas à côté du document. Dans un
   panneau Home Assistant l'URL de la page est /sun-shading alors que les
   assets vivent sous /sun_shading/data/ : résoudre en relatif du
   document y donne un 404. BASE_ASSETS est posée par monte() : le dossier de
   données de la zone (panneau : config.data fournie par l'intégration ;
   page autonome : à côté du module, import.meta.url). */
let BASE_ASSETS = null;
const urlAsset = (ref) => new URL(ref, BASE_ASSETS).href;

/* Ressource binaire gzip servie à côté du module, sous un nom haché : les
   données lourdes ne sont donc chargées qu'au moment où un mode les demande. */
async function chargeGz(ref) {
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Navigateur sans DecompressionStream : utiliser un navigateur récent.");
  }
  const rep = await fetch(urlAsset(ref));
  if (!rep.ok) throw new Error(`chargement ${ref} : HTTP ${rep.status}`);
  return new Response(rep.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();
}
function litMesh(buf, sec) {
  const dv = new DataView(buf, sec.pos_off, sec.pos_len);
  const pos = new Float32Array(sec.nv * 3);
  for (let i = 0; i < sec.nv; i++) {
    pos[i * 3] = dv.getInt16(i * 6, true) * Q;
    pos[i * 3 + 1] = dv.getInt16(i * 6 + 2, true) * Q;
    pos[i * 3 + 2] = dv.getUint16(i * 6 + 4, true) * Q;
  }
  const ibuf = buf.slice(sec.idx_off, sec.idx_off + sec.idx_len);
  const idx = sec.isz === 4 ? new Uint32Array(ibuf) : new Uint16Array(ibuf);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeVertexNormals();
  return g;
}
function litArbres(buf, sec) {
  const dv = new DataView(buf, sec.off, sec.len);
  const arbres = [];
  for (let i = 0; i < sec.n; i++) {
    const o = i * 8;
    arbres.push({
      x: dv.getInt16(o, true) * Q, y: dv.getInt16(o + 2, true) * Q,
      z: dv.getUint16(o + 4, true) * Q,
      h: dv.getUint8(o + 6) / 4 || 8, d: dv.getUint8(o + 7) / 4 || 4,
    });
  }
  return arbres;
}

/* ============================== Scène ============================== */
let renderer, scene, camera, sunLight, hemi, soleilDisque, trajetGroupe, groupeArbres;
let groupeArbresDisque;
let terrainMesh = null;
let batiMesh, pontsMesh, routesMesh, cheminsMesh, anneauLigne;
let modeleMesh = null; // toiture mesurée (remplace celle du LoD2)
let haloSprite, ligneSoleil, arcMesh = null, matArc;
let centreDomicile = new THREE.Vector3(0, 0, 10);
let trajetR = 1300;
const ancres = { lever: null, coucher: null };
let arbresData = [];
let besoinRendu = true;
let contextePerdu = false;
function invalide() { besoinRendu = true; if (renderer) planifie(); }
const cible = new THREE.Vector3(0, 0, 12);
const orbite = { az: 0.6, pol: 0.82, dist: 180 }; // az: 0 = vue depuis le sud vers le nord

function initScene(buf, bufDom) {
  const canvas = $("scene");
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(largeur(), hauteur());
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false; // recalcul uniquement quand le soleil bouge
  // dépassement de mémoire graphique : sans cela la vue devient noire sans un
  // mot. La restauration passe par un rechargement — les tampons CPU des
  // textures et du photomaillage ont été rendus, il n'y a plus de quoi
  // repeupler le contexte en place.
  const bandeauPerdu = $("contexte-perdu");
  bandeauPerdu.querySelector("button")
    .addEventListener("click", () => location.reload());
  canvas.addEventListener("webglcontextlost", (ev) => {
    ev.preventDefault();
    contextePerdu = true;
    bandeauPerdu.hidden = false;
  });
  canvas.addEventListener("webglcontextrestored", () => location.reload());

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87b5d9);
  scene.fog = new THREE.Fog(0x87b5d9, 2200, 5200);

  camera = new THREE.PerspectiveCamera(45, largeur() / hauteur(), 2, 6000);
  camera.up.set(0, 0, 1);

  hemi = new THREE.HemisphereLight(0xbcd4ea, 0x55503f, 0.55);
  hemi.position.set(0, 0, 1);
  scene.add(hemi);

  sunLight = new THREE.DirectionalLight(0xffffff, 1.05);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(4096, 4096);
  const sc = sunLight.shadow.camera;
  sc.left = -1150; sc.right = 1150; sc.top = 1150; sc.bottom = -1150; sc.near = 100; sc.far = 4000;
  // pas de biais en profondeur : sur 3 900 m de plage il vaudrait ~0,8 m et
  // décollerait les ombres du pied des murs ; le normalBias par texel suffit
  sunLight.shadow.normalBias = 1.2;
  sunLight.target.position.set(0, 0, 0);
  scene.add(sunLight, sunLight.target);

  // terrain
  const gTerrain = litMesh(buf, DONNEES_META.sections.mnt);
  const mTerrain = new THREE.MeshStandardMaterial({ color: 0x8d9180, roughness: 1, metalness: 0 });
  // faces arrière seulement dans la carte d'ombre : aucune surface ne
  // s'auto-ombre, donc aucune acné même à biais minimal (contrepartie
  // négligeable en plaine : le micro-relief du terrain ne porte plus d'ombre)
  mTerrain.shadowSide = THREE.BackSide;
  terrainMesh = new THREE.Mesh(gTerrain, mTerrain);
  terrainMesh.castShadow = true; terrainMesh.receiveShadow = true;
  scene.add(terrainMesh);

  // bâtiments
  const gBati = litMesh(buf, DONNEES_META.sections.bati);
  const mBati = new THREE.MeshStandardMaterial({ color: 0xd2ccbf, roughness: 0.95, metalness: 0, flatShading: true });
  // volumes fermés : la carte d'ombre stocke les faces arrière -> l'ombre
  // portée naît au pied exact du mur (pas de peter-panning), sans acné
  mBati.shadowSide = THREE.BackSide;
  batiMesh = new THREE.Mesh(gBati, mBati);
  batiMesh.castShadow = true; batiMesh.receiveShadow = true;
  scene.add(batiMesh);

  // modèle précis d'un bâtiment (pipeline/modele_precis.py) : le LoD2 idéalise
  // ce toit (pas de lucarnes ni casquette, faîte 70 cm trop bas) et fausserait
  // la sonde sur les ouvertures. Sa composante LoD2 sort de l'index — avant
  // tout BVH et tout rendu — et le modèle coté au LiDAR 2025 la remplace,
  // dans la physique comme dans la maquette.
  if (bufDom && typeof MODELE_META !== "undefined" && MODELE_META) {
    gBati.setIndex(new THREE.BufferAttribute(filtreIndex(
      gBati.index.array,
      litRetire(bufDom, MODELE_META.sections.retire_bati)), 1));
    modeleMesh = new THREE.Mesh(litMesh(bufDom, MODELE_META.sections.mesh), mBati);
    modeleMesh.castShadow = modeleMesh.receiveShadow = true;
    scene.add(modeleMesh);
  }

  // ponts / ouvrages
  const gPonts = litMesh(buf, DONNEES_META.sections.ponts);
  const mPonts = new THREE.MeshStandardMaterial({ color: 0xb5ad9f, roughness: 1, metalness: 0, flatShading: true });
  pontsMesh = new THREE.Mesh(gPonts, mPonts);
  pontsMesh.castShadow = true; pontsMesh.receiveShadow = true;
  scene.add(pontsMesh);

  // voirie drapée sur le terrain (filaire de circulation EMS)
  const mRoutes = new THREE.MeshStandardMaterial({ color: 0x707076, roughness: 1, metalness: 0,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  routesMesh = new THREE.Mesh(litMesh(buf, DONNEES_META.sections.routes), mRoutes);
  routesMesh.receiveShadow = true;
  scene.add(routesMesh);
  const mChemins = new THREE.MeshStandardMaterial({ color: 0xa39270, roughness: 1, metalness: 0,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  cheminsMesh = new THREE.Mesh(litMesh(buf, DONNEES_META.sections.chemins), mChemins);
  cheminsMesh.receiveShadow = true;
  scene.add(cheminsMesh);

  // arbres (instanciés)
  const arbres = litArbres(buf, DONNEES_META.sections.arbres);
  groupeArbres = new THREE.Group();
  const gTronc = new THREE.CylinderGeometry(1, 1, 1, 6); gTronc.rotateX(Math.PI / 2);
  const gHouppier = new THREE.SphereGeometry(0.5, 8, 6);
  const mTronc = new THREE.MeshStandardMaterial({ color: 0x6a5138, roughness: 1 });
  const mHouppier = new THREE.MeshStandardMaterial({ color: 0x55763f, roughness: 1 });
  mTronc.shadowSide = THREE.BackSide;
  mHouppier.shadowSide = THREE.BackSide;
  // deux lots d'instances : hors et dans l'emprise du photomaillage. Celui-ci
  // porte les arbres réels de la prise de vue, les arbres stylisés de son
  // disque sont donc masqués en mode photo (arbresData les garde tous : la
  // sonde travaille sur la maquette quel que soit le mode affiché).
  const r2Photo = PM3D_META ? PM3D_META.r * PM3D_META.r : 0;
  const dedans = arbres.map((a) => a.x * a.x + a.y * a.y <= r2Photo);
  const nD = dedans.reduce((s, v) => s + (v ? 1 : 0), 0);
  const iTronc = new THREE.InstancedMesh(gTronc, mTronc, arbres.length - nD);
  const iHouppier = new THREE.InstancedMesh(gHouppier, mHouppier, arbres.length - nD);
  const iTroncD = new THREE.InstancedMesh(gTronc, mTronc, nD);
  const iHouppierD = new THREE.InstancedMesh(gHouppier, mHouppier, nD);
  const M = new THREE.Matrix4(), P = new THREE.Vector3(), S = new THREE.Vector3(), QI = new THREE.Quaternion();
  const couleur = new THREE.Color();
  let kH = 0, kD = 0;
  for (let i = 0; i < arbres.length; i++) {
    const a = arbres[i];
    const tronc = dedans[i] ? iTroncD : iTronc;
    const houppier = dedans[i] ? iHouppierD : iHouppier;
    const k = dedans[i] ? kD++ : kH++;
    const ch = Math.max(a.h * 0.62, 2);
    const ht = Math.max(a.h - ch * 0.55, 1);
    const r = Math.max(0.14, a.d * 0.05);
    P.set(a.x, a.y, a.z + ht / 2); S.set(r, r, ht);
    M.compose(P, QI, S); tronc.setMatrixAt(k, M);
    P.set(a.x, a.y, a.z + Math.max(a.h - ch / 2, ch / 2 + 0.5));
    S.set(Math.max(a.d, 1.5), Math.max(a.d, 1.5), ch);
    M.compose(P, QI, S); houppier.setMatrixAt(k, M);
    arbresData.push({ cx: P.x, cy: P.y, cz: P.z, rx: S.x / 2, rz: ch / 2 });
    const t = ((i * 2654435761) % 1000) / 1000;
    couleur.setHSL(0.26 + 0.05 * t, 0.32 + 0.12 * t, 0.30 + 0.08 * t);
    houppier.setColorAt(k, couleur);
  }
  for (const m of [iTronc, iHouppier, iTroncD, iHouppierD]) {
    m.castShadow = m.receiveShadow = true;
  }
  groupeArbresDisque = new THREE.Group();
  groupeArbresDisque.add(iTroncD, iHouppierD);
  groupeArbres.add(iTronc, iHouppier, groupeArbresDisque);
  scene.add(groupeArbres);

  // altitude du terrain : grille moyenne (pas 4 m) construite en une passe
  // sur les sommets du MNT — remplace les raycasts sans BVH qui coûtaient
  // ~5 s au chargement (161 rayons × 367 k triangles pour l'anneau)
  const PAS_Z = 4, NZ = Math.ceil(2 * EX_T / PAS_Z);
  const zSomme = new Float32Array(NZ * NZ), zN = new Uint16Array(NZ * NZ);
  {
    const p = gTerrain.getAttribute("position");
    for (let i = 0; i < p.count; i++) {
      const gx = Math.floor((p.getX(i) + EX_T) / PAS_Z), gy = Math.floor((p.getY(i) + EX_T) / PAS_Z);
      if (gx >= 0 && gx < NZ && gy >= 0 && gy < NZ) {
        zSomme[gy * NZ + gx] += p.getZ(i);
        zN[gy * NZ + gx]++;
      }
    }
  }
  const zTerrain = (x, y) => {
    const gx = Math.floor((x + EX_T) / PAS_Z), gy = Math.floor((y + EX_T) / PAS_Z);
    for (let r = 0; r < 8; r++) { // cellule vide : élargit la recherche
      let s = 0, n = 0;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const c = (gy + dy) * NZ + gx + dx;
          if (c >= 0 && c < NZ * NZ && zN[c]) { s += zSomme[c]; n += zN[c]; }
        }
      }
      if (n) return s / n;
    }
    return 10;
  };
  const zSol = zTerrain(0, 0);
  cible.z = zSol + 8;

  // anneau du rayon d'affichage, posé sur le terrain
  const nSeg = 160;
  const ringPts = [];
  for (let i = 0; i <= nSeg; i++) {
    const a = (i / nSeg) * Math.PI * 2;
    const x = Math.cos(a) * R_AFF, y = Math.sin(a) * R_AFF;
    ringPts.push(new THREE.Vector3(x, y, zTerrain(x, y) + 0.8));
  }
  anneauLigne = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(ringPts),
    new THREE.LineBasicMaterial({ color: 0xf0b347, transparent: true, opacity: 0.55 }));
  scene.add(anneauLigne);

  centreDomicile = new THREE.Vector3(0, 0, zSol + 2);

  // trajet du soleil : arc, disque + halo, ligne pointillée
  trajetGroupe = new THREE.Group();
  scene.add(trajetGroupe);
  matArc = new THREE.MeshBasicMaterial({ color: 0xf5a93c, transparent: true, opacity: 0.9, fog: false });
  soleilDisque = new THREE.Mesh(
    new THREE.SphereGeometry(1, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0xffd97a, fog: false }));
  const haloCv = document.createElement("canvas");
  haloCv.width = haloCv.height = 128;
  const hctx = haloCv.getContext("2d");
  const grd = hctx.createRadialGradient(64, 64, 8, 64, 64, 64);
  grd.addColorStop(0, "rgba(255,205,100,0.9)");
  grd.addColorStop(0.35, "rgba(255,190,80,0.35)");
  grd.addColorStop(1, "rgba(255,180,60,0)");
  hctx.fillStyle = grd;
  hctx.fillRect(0, 0, 128, 128);
  haloSprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(haloCv), transparent: true, depthWrite: false, fog: false }));
  const gLigne = new THREE.BufferGeometry();
  gLigne.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3));
  ligneSoleil = new THREE.Line(gLigne, new THREE.LineDashedMaterial({
    color: 0xf0b347, dashSize: 5, gapSize: 3.5, transparent: true, opacity: 0.9, fog: false }));
  soleilDisque.visible = haloSprite.visible = ligneSoleil.visible = false;
  trajetGroupe.add(soleilDisque, haloSprite, ligneSoleil);

  // ResizeObserver et non « resize » : dans un panneau Home Assistant, la
  // fenêtre ne bouge pas quand la barre latérale s'ouvre — l'hôte, si.
  new ResizeObserver(() => {
    if (!largeur() || !hauteur()) return; // panneau masqué
    camera.aspect = largeur() / hauteur();
    camera.updateProjectionMatrix();
    renderer.setSize(largeur(), hauteur());
    invalide();
  }).observe(hote);
}

/* Trajet du soleil pour la date choisie (arc centré sur la sonde ou le centre) */
function trajetCentre() {
  if (sondeEtat.point) {
    const c = sondeEtat.point.clone();
    c.z += 2;
    return c;
  }
  return centreDomicile.clone();
}

const ROSE_ABR = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];

function majTrajet() {
  if (arcMesh) {
    trajetGroupe.remove(arcMesh);
    arcMesh.geometry.dispose();
    arcMesh = null;
  }
  ancres.lever = ancres.coucher = null;
  const actif = $("opt-trajet").checked;
  if (actif) {
    const { y, m, d } = dateDuJour(etat.jour);
    const c = trajetCentre();
    const e = etat.ephemerides;
    if (e && e.lever !== null) {
      const pts = [];
      const pas = Math.max(4, (e.coucher - e.lever) / 110);
      for (let t = e.lever; t <= e.coucher; t += pas) {
        const s = positionSolaire(utcDepuisParis(y, m, d, t), LAT, LON);
        if (s.elevation < -0.6) continue;
        pts.push(c.clone().addScaledVector(dirSoleil(s), trajetR));
      }
      if (pts.length > 3) {
        const tube = new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(pts), 100,
          Math.max(0.3, trajetR * 0.006), 6, false);
        arcMesh = new THREE.Mesh(tube, matArc);
        trajetGroupe.add(arcMesh);
        ancres.lever = pts[0].clone();
        ancres.coucher = pts[pts.length - 1].clone();
        $("eti-lever").textContent = "☀\n" + fmtMin(e.lever);
        $("eti-coucher").textContent = "☀\n" + fmtMin(e.coucher);
      }
    }
  }
  majSoleilKit();
}

/* Disque, halo, ligne pointillée et badge suivant l'heure courante */
function majSoleilKit() {
  const sol = positionSolaire(utcCourant(), LAT, LON);
  const actif = $("opt-trajet").checked && sol.elevation > -1.5;
  const c = trajetCentre();
  soleilDisque.visible = actif;
  haloSprite.visible = actif;
  ligneSoleil.visible = actif && sol.elevation > 0;
  if (actif) {
    const p = c.clone().addScaledVector(dirSoleil(sol), trajetR);
    soleilDisque.position.copy(p);
    soleilDisque.scale.setScalar(Math.max(2, trajetR * 0.045));
    haloSprite.position.copy(p);
    haloSprite.scale.setScalar(Math.max(8, trajetR * 0.24));
    const pa = ligneSoleil.geometry.attributes.position;
    pa.setXYZ(0, c.x, c.y, c.z);
    pa.setXYZ(1, p.x, p.y, p.z);
    pa.needsUpdate = true;
    ligneSoleil.geometry.computeBoundingSphere();
    ligneSoleil.computeLineDistances();
    ligneSoleil.material.dashSize = Math.max(1.5, trajetR * 0.028);
    ligneSoleil.material.gapSize = Math.max(1, trajetR * 0.02);
    const azA = ROSE_ABR[Math.round(sol.azimut / 45) % 8];
    $("badge-soleil").textContent =
      `☀ ${azA} ${Math.round(sol.azimut)}°, ${Math.round(sol.elevation)}°`;
  }
}

/* Étiquettes HTML projetées à l'écran (badge du soleil, lever, coucher) */
const V_PROJ = new THREE.Vector3();
function majEtiquettes() {
  const visible = trajetGroupe.visible !== false;
  const items = [
    ["badge-soleil", soleilDisque.visible ? soleilDisque.position : null, -0.055],
    ["eti-lever", visible ? ancres.lever : null, 0.03],
    ["eti-coucher", visible ? ancres.coucher : null, 0.03],
  ];
  for (const [id, p, dy] of items) {
    const el = $(id);
    if (!p || !$("opt-trajet").checked) {
      el.style.display = "none";
      continue;
    }
    V_PROJ.copy(p).project(camera);
    if (V_PROJ.z > 1 || Math.abs(V_PROJ.x) > 1.15 || Math.abs(V_PROJ.y) > 1.15) {
      el.style.display = "none";
      continue;
    }
    el.style.display = "block";
    let x = (V_PROJ.x * 0.5 + 0.5) * largeur();
    if (id === "badge-soleil") {
      // le badge reste lisible en bord d'écran (téléphone) au lieu d'être coupé
      const demi = el.offsetWidth / 2 + 8;
      x = Math.min(largeur() - demi, Math.max(demi, x));
    }
    el.style.left = x + "px";
    el.style.top = ((-V_PROJ.y * 0.5 + 0.5 + dy) * hauteur()) + "px";
  }
}

/* Ambiance (ciel, lumières) selon l'élévation solaire */
const C_NUIT = new THREE.Color(0x0d1322), C_AUBE = new THREE.Color(0x5a6d95),
      C_OR = new THREE.Color(0xd9a05e), C_JOUR = new THREE.Color(0x87b5d9);
function majLumieres(sol) {
  const el = sol.elevation;
  const ciel = new THREE.Color();
  if (el <= -8) ciel.copy(C_NUIT);
  else if (el <= 0) ciel.lerpColors(C_NUIT, C_AUBE, (el + 8) / 8);
  else if (el <= 8) ciel.lerpColors(C_AUBE, C_JOUR, el / 8).lerp(C_OR, Math.max(0, 1 - el / 8) * 0.25);
  else ciel.copy(C_JOUR);
  scene.background = ciel;
  scene.fog.color = ciel;

  const jour = Math.max(0, Math.min(1, (el + 0.833) / 6));
  // les textures du photomaillage portent déjà l'éclairage de la prise de vue
  // (juin 2022) : on adoucit l'ombrage simulé pour ne pas cumuler deux ombres
  const kPhoto = photoActif ? 1 : 0;
  sunLight.intensity = 1.65 * jour * (1 - 0.15 * kPhoto);
  const chaud = Math.max(0, 1 - Math.max(0, el) / 15);
  sunLight.color.setHSL(0.09, 0.55 * chaud, 1 - 0.22 * chaud);
  hemi.intensity = (0.11 + 0.30 * jour) * (1 + 0.40 * kPhoto);

  ombrage.dir.set(
    Math.cos(el * RAD) * Math.sin(sol.azimut * RAD),
    Math.cos(el * RAD) * Math.cos(sol.azimut * RAD),
    Math.sin(el * RAD));
  sunLight.position.copy(ombrage.dir).multiplyScalar(1600)
    .add(sunLight.target.position);
  sunLight.castShadow = el > -0.5;
  renderer.shadowMap.needsUpdate = true;
}

/* Frustum d'ombre adapté à la vue : la caméra d'ombre se resserre sur la zone
   regardée (texels fins en zoom serré au lieu de 56 cm sur tout le disque).
   Le frustum orthographique est aligné sur les rayons du soleil : les
   porteurs d'ombre situés entre le soleil et la zone restent inclus, même
   hors cadrage. Recalcul à seuil pour ne pas re-rendre la carte d'ombre à
   chaque pixel de déplacement. */
const ombrage = { r: 0, cx: 0, cy: 0, dir: new THREE.Vector3(0, 0, 1) };
const V_COIN = new THREE.Vector3();
function rayonVisible() {
  // étendue au sol réellement couverte par la vue : projection des coins de
  // l'écran sur le plan du sol (en vue oblique, elle dépasse largement la
  // distance caméra ; un frustum d'ombre plus étroit ferait déborder la
  // carte d'ombre, dont les texels de bord s'étirent en fausses ombres)
  camera.updateMatrixWorld(); // unproject avant le rendu : matrices à jour
  let r = orbite.dist * 0.6;
  for (const sx of [-1, 1]) {
    for (const sy of [-1, 1]) {
      V_COIN.set(sx, sy, 0.5).unproject(camera).sub(camera.position).normalize();
      if (V_COIN.z >= -0.03) {
        // horizon visible : couvrir large mais proportionné au zoom — sauter
        // à ±1150 gonflerait le texel (et son biais) même en vue rapprochée
        return Math.min(1150, Math.max(400, orbite.dist * 2.2));
      }
      const t = (cible.z - camera.position.z) / V_COIN.z;
      const dx = camera.position.x + V_COIN.x * t - cible.x;
      const dy = camera.position.y + V_COIN.y * t - cible.y;
      r = Math.max(r, Math.hypot(dx, dy));
    }
  }
  return Math.min(1150, Math.max(80, r * 1.05));
}

function majOmbrage() {
  const r = rayonVisible();
  if (Math.abs(r - ombrage.r) <= ombrage.r * 0.15
      && Math.hypot(cible.x - ombrage.cx, cible.y - ombrage.cy) <= r * 0.12) {
    return;
  }
  ombrage.r = r;
  ombrage.cx = cible.x;
  ombrage.cy = cible.y;
  const sc = sunLight.shadow.camera;
  sc.left = -r; sc.right = r; sc.top = r; sc.bottom = -r;
  sc.updateProjectionMatrix();
  // biais proportionnels au texel : normalBias minimal (le BackSide élimine
  // l'acné), et un bias de profondeur POSITIF qui recentre la pénombre PCF
  // dans le mur — sans lui, sa moitié claire dessine un liseré de lumière
  // au pied des façades (plage de profondeur near..far = 3 900 m)
  const texel = 2 * r / sunLight.shadow.mapSize.x;
  sunLight.shadow.normalBias = Math.max(0.05, texel * 0.5);
  sunLight.shadow.bias = (texel * 1.8) / 3900;
  sunLight.target.position.set(ombrage.cx, ombrage.cy, 0);
  sunLight.position.copy(ombrage.dir).multiplyScalar(1600)
    .add(sunLight.target.position);
  renderer.shadowMap.needsUpdate = true;
  invalide();
}

/* Qualité des ombres. La carte d'ombre coûte au carré de sa résolution — three
   y empaquette la profondeur en RGBA et y ajoute un tampon de profondeur, soit
   ~470 Mo à 8192 contre ~117 à 4096, le plus gros poste de toute la scène. En
   mode photo elle est plafonnée à 4096 : l'ombre y est portée par un maillage
   dont l'arête fait ~40 cm, dix fois plus grossier que le texel d'ombre
   correspondant. 8192 quadruplerait le coût sans rien changer de visible, et
   fait sortir les appareils mobiles de leur budget mémoire. Le choix de
   l'utilisateur n'est pas modifié : il reprend son plein effet hors mode photo. */
const Q_OMBRE_PHOTO = 4096;
function appliqueOmbres() {
  const choix = +$("opt-ombres").value;
  const q = photoActif ? Math.min(choix, Q_OMBRE_PHOTO) : choix;
  if (q === sunLight.shadow.mapSize.x) return;
  sunLight.shadow.mapSize.set(q, q);
  if (sunLight.shadow.map) { sunLight.shadow.map.dispose(); sunLight.shadow.map = null; }
  ombrage.r = 0; // le biais par texel dépend de la résolution : recadrage forcé
  majOmbrage();
  renderer.shadowMap.needsUpdate = true;
  invalide();
}

/* ============================== Contrôles caméra ============================== */
function majEtatCarte(txt) {
  const e = $("etat-carte");
  if (e) e.textContent = txt || "";
}

function majCamera() {
  const sp = Math.sin(orbite.pol), cp = Math.cos(orbite.pol);
  camera.position.set(
    cible.x - orbite.dist * sp * Math.sin(orbite.az),
    cible.y - orbite.dist * sp * Math.cos(orbite.az),
    cible.z + orbite.dist * cp);
  camera.lookAt(cible);
  majOmbrage();
  const deg = -orbite.az / RAD;
  $("boussole-svg").style.transform = `rotate(${deg}deg)`;
  invalide();
}
/* Sens des commandes. « Normales » : le geste simple fait tourner la vue,
   comme dans un visualiseur 3D. « Inversées » : le geste simple déplace la
   carte et la rotation demande deux doigts ou le clic droit, comme dans une
   application de cartographie. Le choix est personnel et durable, donc
   mémorisé par navigateur. */
let commandesInversees = false;

function litCommandes() {
  try { return localStorage.getItem("commandes") === "inversees"; }
  catch (e) { return false; }
}

function initControles() {
  const el = renderer.domElement;
  let mode = null, px = 0, py = 0;
  let clicDepart = null;
  const pointers = new Map();
  let pinchDist = 0, pinchAngle = 0, pinchCX = 0, pinchCY = 0;
  let dernierTap = null; // double-tap tactile -> recentrage
  const LIM_PAN = R_BATI;

  const deplaceCible = (dx, dy) => {
    const k = orbite.dist * 0.0011;
    const ca = Math.cos(orbite.az), sa = Math.sin(orbite.az);
    cible.x = Math.min(LIM_PAN, Math.max(-LIM_PAN, cible.x + (-dx * ca + dy * sa) * k));
    cible.y = Math.min(LIM_PAN, Math.max(-LIM_PAN, cible.y + (dx * sa + dy * ca) * k));
  };
  const mesurePinch = () => {
    const p = [...pointers.values()];
    return {
      d: Math.hypot(p[0][0] - p[1][0], p[0][1] - p[1][1]),
      a: Math.atan2(p[1][1] - p[0][1], p[1][0] - p[0][0]),
      cx: (p[0][0] + p[1][0]) / 2, cy: (p[0][1] + p[1][1]) / 2,
    };
  };

  el.addEventListener("pointerdown", (e) => {
    el.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, [e.clientX, e.clientY]);
    clicDepart = pointers.size === 1 ? [e.clientX, e.clientY] : null;
    if (pointers.size === 2) {
      ({ d: pinchDist, a: pinchAngle, cx: pinchCX, cy: pinchCY } = mesurePinch());
      mode = "pinch";
    } else {
      // Maj reste le raccourci du déplacement dans les deux sens ; c'est le
      // couple (gauche, droit) qui s'échange.
      const secondaire = e.button === 2 || e.shiftKey;
      mode = (secondaire !== commandesInversees) ? "pan" : "rot";
      px = e.clientX; py = e.clientY;
    }
  });
  el.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, [e.clientX, e.clientY]);
    if (mode === "pinch" && pointers.size === 2) {
      // geste à deux doigts : pincement = zoom, translation = déplacement,
      // rotation des doigts = rotation de la vue
      const m = mesurePinch();
      if (pinchDist > 0) orbite.dist = Math.min(1800, Math.max(60, orbite.dist * pinchDist / m.d));
      let da = m.a - pinchAngle;
      if (da > Math.PI) da -= 2 * Math.PI; else if (da < -Math.PI) da += 2 * Math.PI;
      orbite.az -= da;
      if (commandesInversees) {
        // le déplacement est déjà pris par un doigt : deux doigts inclinent
        orbite.pol = Math.min(1.5, Math.max(0.08,
                                            orbite.pol - (m.cy - pinchCY) * 0.005));
      } else {
        deplaceCible(m.cx - pinchCX, m.cy - pinchCY);
      }
      ({ d: pinchDist, a: pinchAngle, cx: pinchCX, cy: pinchCY } = m);
      majCamera();
      return;
    }
    if (!mode) return;
    const dx = e.clientX - px, dy = e.clientY - py;
    px = e.clientX; py = e.clientY;
    if (mode === "rot") {
      orbite.az -= dx * 0.005;
      orbite.pol = Math.min(1.5, Math.max(0.08, orbite.pol - dy * 0.005));
    } else if (mode === "pan") {
      deplaceCible(dx, dy);
    }
    if (mode === "tilt") {
      // deux doigts en mode inversé : le glissé vertical incline la vue
      orbite.pol = Math.min(1.5, Math.max(0.08, orbite.pol - dy * 0.005));
    }
    majCamera();
  });
  // double-tap : recentre la vue sur le point touché (quand la sonde est inactive)
  const recentre = (cx, cy) => {
    prepareBVH();
    const ndc = new THREE.Vector2((cx / largeur()) * 2 - 1, -(cy / hauteur()) * 2 + 1);
    const rc = new THREE.Raycaster();
    rc.firstHitOnly = true;
    rc.setFromCamera(ndc, camera);
    const h = rc.intersectObjects([terrainMesh, batiMesh, routesMesh, cheminsMesh, pontsMesh], false)[0];
    if (!h) return;
    cible.x = Math.min(LIM_PAN, Math.max(-LIM_PAN, h.point.x));
    cible.y = Math.min(LIM_PAN, Math.max(-LIM_PAN, h.point.y));
    cible.z = h.point.z + 6;
    majCamera();
  };
  const fin = (e) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2 && mode === "pinch") mode = null;
    if (pointers.size === 0) mode = null;
    if (clicDepart && pointers.size === 0
        && Math.hypot(e.clientX - clicDepart[0], e.clientY - clicDepart[1]) < 6) {
      const sondeActive = $("opt-sonde").checked;
      if (sondeActive) {
        sondeClic(...local(e));
      } else if (dernierTap && performance.now() - dernierTap.t < 350
                 && Math.hypot(e.clientX - dernierTap.x, e.clientY - dernierTap.y) < 30) {
        recentre(...local(e));
        dernierTap = null;
      } else {
        dernierTap = { t: performance.now(), x: e.clientX, y: e.clientY };
      }
      clicDepart = null;
    }
  };
  el.addEventListener("pointerup", fin);
  el.addEventListener("pointercancel", fin);
  el.addEventListener("wheel", (e) => {
    e.preventDefault();
    orbite.dist = Math.min(1800, Math.max(60, orbite.dist * Math.exp(e.deltaY * 0.0012)));
    majCamera();
  }, { passive: false });
  el.addEventListener("contextmenu", (e) => e.preventDefault());

  const boussole = $("boussole");
  const nordEnHaut = () => { orbite.az = 0; majCamera(); };
  boussole.addEventListener("click", nordEnHaut);
  boussole.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") nordEnHaut(); });
}

/* ============================== Modes de carte ============================== */
/* Trois rendus au choix : maquette abstraite, vue satellite (orthophoto drapée
   et façades texturées jusqu'à 1 km), et photomaillage photogrammétrique posé
   au centre de cette vue satellite. Chaque mode charge ses données au premier
   usage : elles sont servies à côté de la page, jamais embarquées. */
let satEtat = null;
let photoEtat = null;
let modeCarte = "abstrait";
let photoActif = false; // photomaillage chargé et affiché

function litMeshUV(buf, sec) {
  const dv = new DataView(buf, sec.pos_off, sec.pos_len);
  const pos = new Float32Array(sec.nv * 3);
  const uv = new Float32Array(sec.nv * 2);
  for (let i = 0; i < sec.nv; i++) {
    const o = i * 10;
    pos[i * 3] = dv.getInt16(o, true) * Q;
    pos[i * 3 + 1] = dv.getInt16(o + 2, true) * Q;
    pos[i * 3 + 2] = dv.getUint16(o + 4, true) * Q;
    uv[i * 2] = dv.getUint16(o + 6, true) / 65535;
    uv[i * 2 + 1] = dv.getUint16(o + 8, true) / 65535;
  }
  const ibuf = buf.slice(sec.idx_off, sec.idx_off + sec.idx_len);
  const idx = sec.isz === 4 ? new Uint32Array(ibuf) : new Uint16Array(ibuf);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeVertexNormals();
  return g;
}

/* Photomaillage : 13 octets par sommet (int16 x,y ; uint16 z,u,v ; int8
   nx,ny,nz). Les normales viennent du prétraitement, soudées par position :
   les sommets étant dédoublés par couple (sommet, uv) et les îlots UV faisant
   ~3 triangles, un computeVertexNormals faciliterait tout le maillage. */
function litMeshPM(buf, sec) {
  const dv = new DataView(buf, sec.pos_off, sec.pos_len);
  const pos = new Float32Array(sec.nv * 3);
  const uv = new Float32Array(sec.nv * 2);
  const nrm = new Float32Array(sec.nv * 3);
  for (let i = 0; i < sec.nv; i++) {
    const o = i * 13;
    pos[i * 3] = dv.getInt16(o, true) * Q;
    pos[i * 3 + 1] = dv.getInt16(o + 2, true) * Q;
    pos[i * 3 + 2] = dv.getUint16(o + 4, true) * Q;
    uv[i * 2] = dv.getUint16(o + 6, true) / 65535;
    uv[i * 2 + 1] = dv.getUint16(o + 8, true) / 65535;
    nrm[i * 3] = dv.getInt8(o + 10) / 127;
    nrm[i * 3 + 1] = dv.getInt8(o + 11) / 127;
    nrm[i * 3 + 2] = dv.getInt8(o + 12) / 127;
  }
  const ibuf = buf.slice(sec.idx_off, sec.idx_off + sec.idx_len);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  g.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
  g.setIndex(new THREE.BufferAttribute(
    sec.isz === 4 ? new Uint32Array(ibuf) : new Uint16Array(ibuf), 1));
  // 2,5 M sommets : ~100 Mo de tampons dont plus rien n'a besoin une fois
  // téléversés. Réservé à ce maillage : il n'est ni raycasté ni refiltré,
  // contrairement au terrain et aux façades satellite dont preparePhoto relit
  // les index. La sphère englobante se calcule pendant qu'ils existent encore.
  g.computeBoundingSphere();
  for (const a of [g.getAttribute("position"), g.getAttribute("uv"),
                   g.getAttribute("normal"), g.getIndex()]) {
    a.onUpload(function () { this.array = null; });
  }
  return g;
}

/* Les huit atlas de la page pèsent ~600 Mo une fois décodés — autant que les
   textures qu'ils alimentent sur le GPU. En ImageBitmap ils sont téléversés
   tout de suite puis fermés : la mémoire est rendue de façon certaine, là où un
   HTMLImageElement référencé par sa Texture laisse le navigateur seul juge de
   la garder. Contrepartie assumée : un contexte WebGL perdu ne peut plus être
   repeuplé, d'où le rechargement de page à sa restauration (initScene). */
async function chargeTexture(src) {
  const regle = (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    t.needsUpdate = true;
    return t;
  };
  if (typeof createImageBitmap !== "function") {
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res(regle(new THREE.Texture(img)));
      img.onerror = rej;
      img.src = urlAsset(src);
    });
  }
  const rep = await fetch(urlAsset(src));
  if (!rep.ok) throw new Error(`chargement ${src} : HTTP ${rep.status}`);
  // l'orientation est appliquée au bitmap : flipY neutralisé côté texture pour
  // retrouver la convention des UV du prétraitement
  const bmp = await createImageBitmap(await rep.blob(), { imageOrientation: "flipY" });
  const t = regle(new THREE.Texture(bmp));
  t.flipY = false;
  renderer.initTexture(t);
  bmp.close();
  return t;
}

async function prepareSatellite() {
  if (satEtat) return satEtat.promesse;
  const promesse = (async () => {
    const buf = await chargeGz(RES.sat);
    const orthoTex = await chargeTexture(RES.ortho);
    const mTerrainSat = new THREE.MeshStandardMaterial({ map: orthoTex, roughness: 1, metalness: 0 });
    mTerrainSat.shadowSide = THREE.BackSide;
    // uv du terrain : projection linéaire monde -> atlas
    const gT = terrainMesh.geometry;
    if (!gT.getAttribute("uv")) {
      const p = gT.getAttribute("position");
      const uvs = new Float32Array(p.count * 2);
      const ex = SAT_META.ex_t;
      for (let i = 0; i < p.count; i++) {
        uvs[i * 2] = (p.getX(i) + ex) / (2 * ex);
        uvs[i * 2 + 1] = (p.getY(i) + ex) / (2 * ex);
      }
      gT.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    }
    const meshes = [];
    for (let i = 0; i < SAT_META.n_atlas; i++) {
      const tex = await chargeTexture(RES.atlas[i]);
      const m = new THREE.Mesh(
        litMeshUV(buf, SAT_META.sections["bati_tex" + i]),
        new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, metalness: 0, flatShading: true,
          shadowSide: THREE.BackSide }));
      m.castShadow = m.receiveShadow = true;
      m.visible = false;
      scene.add(m);
      meshes.push(m);
    }
    const mReste = new THREE.Mesh(
      litMesh(buf, SAT_META.sections.bati_reste),
      new THREE.MeshStandardMaterial({ color: 0xd2ccbf, roughness: 0.95, metalness: 0, flatShading: true,
        shadowSide: THREE.BackSide }));
    mReste.castShadow = mReste.receiveShadow = true;
    mReste.visible = false;
    scene.add(mReste);
    meshes.push(mReste);
    satEtat.mTerrainNormal = terrainMesh.material;
    satEtat.mTerrainSat = mTerrainSat;
    satEtat.meshes = meshes;
    satEtat.pret = true;
  })();
  satEtat = { promesse, pret: false, meshes: [], mTerrainSat: null, mTerrainNormal: null };
  return promesse;
}

/* Index privé des triangles retirés : les façades texturées recouvertes par le
   photomaillage ne doivent pas être dessinées deux fois. */
function filtreIndex(idx, retire) {
  const marque = new Uint8Array(idx.length / 3);
  let n = 0;
  for (const t of retire) {
    if (t < marque.length && !marque[t]) { marque[t] = 1; n++; }
  }
  const out = new idx.constructor(idx.length - n * 3);
  let k = 0;
  for (let t = 0; t < marque.length; t++) {
    if (marque[t]) continue;
    out[k++] = idx[t * 3];
    out[k++] = idx[t * 3 + 1];
    out[k++] = idx[t * 3 + 2];
  }
  return out;
}

function litRetire(buf, sec) {
  // sections non alignées sur 4 octets : copie obligatoire
  return new Uint32Array(buf.slice(sec.off, sec.off + sec.len));
}

/* Copie d'une géométrie privée de certains triangles : les attributs sont
   PARTAGÉS (un seul tampon GPU), seul l'index diffère. Sert au terrain, dont
   l'original doit rester intact — la sonde le raycaste même invisible. */
function geoSansTriangles(g, retire) {
  const r = new THREE.BufferGeometry();
  for (const nom of ["position", "uv", "normal"]) {
    const a = g.getAttribute(nom);
    if (a) r.setAttribute(nom, a);
  }
  r.setIndex(new THREE.BufferAttribute(filtreIndex(g.getIndex().array, retire), 1));
  g.computeBoundingSphere();
  r.boundingSphere = g.boundingSphere; // tous les sommets sont conservés
  return r;
}

async function preparePhoto() {
  if (photoEtat) return photoEtat.promesse;
  const promesse = (async () => {
    await prepareSatellite();
    const buf = await chargeGz(RES.pm3d);
    const meshes = [];
    for (let i = 0; i < PM3D_META.n_atlas; i++) {
      const tex = await chargeTexture(RES.pm3datlas[i]);
      // texture pré-éclairée traitée en albédo ; le MNT est percé sous le
      // disque (retire_mnt), l'offset ne couvre plus que la bande de
      // recouvrement de quelques mètres au bord du trou
      const mat = new THREE.MeshStandardMaterial({
        map: tex, roughness: 1, metalness: 0, polygonOffset: true,
        polygonOffsetFactor: -1, polygonOffsetUnits: -1,
      });
      mat.shadowSide = THREE.BackSide;
      const m = new THREE.Mesh(
        litMeshPM(buf, PM3D_META.sections["pm3d_tex" + i]), mat);
      m.castShadow = m.receiveShadow = true;
      m.visible = false;
      scene.add(m);
      meshes.push(m);
    }
    // deux index par mesh satellite : complet, ou privé des façades recouvertes
    const complets = [], filtres = [];
    for (let i = 0; i < satEtat.meshes.length; i++) {
      const nom = i < SAT_META.n_atlas
        ? "retire_sat_bati_tex" + i : "retire_sat_bati_reste";
      const g = satEtat.meshes[i].geometry;
      complets.push(g.index);
      filtres.push(new THREE.BufferAttribute(
        filtreIndex(g.index.array, litRetire(buf, PM3D_META.sections[nom])), 1));
    }
    // terrain percé sous le disque : MNT (sol nu drapé de l'ortho) et
    // photomaillage sont deux reconstructions du même sol, divergentes de
    // 10 à 50 cm — sans perçage, l'ortho transpercerait par plaques
    const tp = new THREE.Mesh(
      geoSansTriangles(terrainMesh.geometry,
                       litRetire(buf, PM3D_META.sections.retire_mnt)),
      satEtat.mTerrainSat);
    tp.castShadow = tp.receiveShadow = true;
    tp.visible = false;
    scene.add(tp);
    photoEtat.terrain = tp;
    photoEtat.meshes = meshes;
    photoEtat.complets = complets;
    photoEtat.filtres = filtres;
    photoEtat.pret = true;
  })();
  photoEtat = { promesse, pret: false, meshes: [], complets: [], filtres: [],
                terrain: null };
  return promesse;
}

function appliqueCarte(mode) {
  modeCarte = mode;
  const sat = mode !== "abstrait";
  if (sat && (!satEtat || !satEtat.pret)) return;
  const photo = mode === "photo" && photoEtat !== null && photoEtat.pret;
  photoActif = photo;
  batiMesh.visible = !sat;
  if (modeleMesh) modeleMesh.visible = !sat;
  routesMesh.visible = !sat;
  cheminsMesh.visible = !sat;
  if (satEtat && satEtat.pret) {
    for (let i = 0; i < satEtat.meshes.length; i++) {
      satEtat.meshes[i].visible = sat;
      if (photoEtat && photoEtat.pret) {
        satEtat.meshes[i].geometry.setIndex(
          photo ? photoEtat.filtres[i] : photoEtat.complets[i]);
      }
    }
    terrainMesh.material = sat ? satEtat.mTerrainSat : satEtat.mTerrainNormal;
  }
  // le terrain reste dans la scène même masqué : la sonde le raycaste
  terrainMesh.visible = !photo;
  if (photoEtat && photoEtat.pret) {
    photoEtat.terrain.visible = photo;
    for (const m of photoEtat.meshes) m.visible = photo;
  }
  groupeArbresDisque.visible = !photo;
  appliqueOmbres();
  majLumieres(positionSolaire(utcCourant(), LAT, LON));
  renderer.shadowMap.needsUpdate = true;
  invalide();
}

/* ============================== Analyses : heures de soleil & sonde ============================== */
function dirSoleil(sol) {
  return new THREE.Vector3(
    Math.cos(sol.elevation * RAD) * Math.sin(sol.azimut * RAD),
    Math.cos(sol.elevation * RAD) * Math.cos(sol.azimut * RAD),
    Math.sin(sol.elevation * RAD));
}

let bvhPret = false;
function prepareBVH() {
  if (bvhPret) return;
  THREE.BufferGeometry.prototype.computeBoundsTree = MeshBVHLib.computeBoundsTree;
  THREE.BufferGeometry.prototype.disposeBoundsTree = MeshBVHLib.disposeBoundsTree;
  THREE.Mesh.prototype.raycast = MeshBVHLib.acceleratedRaycast;
  for (const m of [terrainMesh, batiMesh, pontsMesh, routesMesh, cheminsMesh,
                   ...(modeleMesh ? [modeleMesh] : [])]) {
    m.geometry.computeBoundsTree();
  }
  bvhPret = true;
}

/* ---- feuillage : transmittance saisonnière (Beer-Lambert) ----
   Les houppiers sont des ellipsoïdes ; le soleil qui les traverse est atténué
   selon la longueur du trajet et la densité du feuillage. Pas d'essence dans
   les données : tout est traité en feuillu (nu l'hiver). */
const K_ETE = 0.9, K_HIVER = 0.18; // coefficients d'extinction (m⁻¹)
/* Jours (base 0) : début et fin du débourrement, début et fin de la chute.
   Constante et non valeurs en dur, parce qu'elles voyagent jusqu'à
   l'intégration Home Assistant, qui n'implémente que la FORME de la courbe
   (deux rampes linéaires) et reçoit ses dates d'ici. */
const FEUILLAISON = [90, 120, 288, 320];
function facteurFeuillaison(jour) {
  const [deb0, deb1, chu0, chu1] = FEUILLAISON;
  if (jour < deb0 || jour >= chu1) return 0;              // hiver
  if (jour < deb1) return (jour - deb0) / (deb1 - deb0);  // débourrement
  if (jour < chu0) return 1;                              // feuillé
  return 1 - (jour - chu0) / (chu1 - chu0);               // chute
}

/* Index angulaire des houppiers vus du point sondé : chaque arbre pertinent
   est réduit à une fenêtre (azimut ± demi-angle, élévations min/max) ; un
   rayon ne teste l'ellipsoïde exacte que s'il tombe dans la fenêtre.
   Indispensable depuis le disque à 1 km (14 000 arbres). */
function indexeArbres(o) {
  const marge = 0.6 * RAD; // couvre le rayon du disque solaire échantillonné
  const idx = [];
  for (let i = 0; i < arbresData.length; i++) {
    const a = arbresData[i];
    const dx = a.cx - o.x, dy = a.cy - o.y;
    const dh = Math.hypot(dx, dy);
    const elMax = Math.atan2(a.cz + a.rz - o.z, Math.max(0.1, dh - a.rx));
    if (elMax < -0.02) continue; // jamais au-dessus de l'horizon local
    const elMin = Math.atan2(a.cz - a.rz - o.z, dh + a.rx);
    const az = Math.atan2(dx, dy);
    const demi = (dh <= a.rx ? Math.PI : Math.asin(Math.min(1, a.rx / dh))) + marge;
    idx.push({ a, az, demi, elMin: elMin - marge, elMax: elMax + marge });
  }
  return idx;
}

function transmittanceArbres(idx, azR, elR, ox, oy, oz, dx, dy, dz, k) {
  let t = 1;
  for (let i = 0; i < idx.length; i++) {
    const e = idx[i];
    if (elR < e.elMin || elR > e.elMax) continue;
    let da = azR - e.az;
    if (da > Math.PI) da -= 2 * Math.PI; else if (da < -Math.PI) da += 2 * Math.PI;
    if (Math.abs(da) > e.demi) continue;
    const a = e.a;
    const qx = (ox - a.cx) / a.rx, qy = (oy - a.cy) / a.rx, qz = (oz - a.cz) / a.rz;
    const vx = dx / a.rx, vy = dy / a.rx, vz = dz / a.rz;
    const A = vx * vx + vy * vy + vz * vz;
    const B = 2 * (qx * vx + qy * vy + qz * vz);
    const C = qx * qx + qy * qy + qz * qz - 1;
    const disc = B * B - 4 * A * C;
    if (disc <= 0) continue;
    const rd = Math.sqrt(disc);
    const t1 = (-B - rd) / (2 * A), t2 = (-B + rd) / (2 * A);
    if (t2 <= 0.5) continue;
    t *= Math.exp(-k * (t2 - Math.max(t1, 0.5))); // longueur traversée (m)
    if (t < 0.003) return 0;
  }
  return t;
}

/* ---- sonde au clic ---- */
/* La sonde n'est pas un point mais un carré de 50 cm de côté déposé à plat sur
   la surface visée — sol, façade, vitrage, pan de toit sous une fenêtre. C'est
   l'ordre de grandeur d'une ouverture, et ce qui n'en ombrage qu'une partie
   (joue de lucarne, casquette, tronc) compte à proportion. */
const SONDE_COTE = 0.5;
/* Grille 3×3 de centres de cellule, ordonnée centre → coins → milieux d'arête :
   les cinq premiers suffisent tant que le carré est éclairé uniformément. */
const SONDE_GRILLE = (() => {
  const d = SONDE_COTE / 3;
  return [[0, 0], [-d, -d], [d, -d], [d, d], [-d, d], [0, -d], [d, 0], [0, d], [-d, 0]];
})();
const SONDE_TOL = 0.02;   // dispersion des 5 premiers points sous laquelle on ne raffine pas
const SONDE_PENTE = 0.978; // cos(12°) — au-delà, la surface n'est plus « du sol »

const sondeEtat = { point: null, normale: null, t1: null, t2: null, mode: null,
                    marqueur: null, epingle: null, jeton: 0, fractions: null };
const ROSE = ["nord", "nord-est", "est", "sud-est", "sud", "sud-ouest", "ouest", "nord-ouest"];

/* Classement de la surface d'après sa normale : sert au titre du panneau et
   au choix des offsets. Partagé par la sonde au clic et la pose directe. */
function classeSurface(nrm) {
  return Math.abs(nrm.z) < 0.5 ? "facade" : (nrm.z >= SONDE_PENTE ? "sol" : "pente");
}

/* Base du carré dans le plan de la surface : t1 horizontal, t2 dans la ligne
   de plus grande pente. Sur une surface horizontale, t1 = est et t2 = nord. */
function baseTangente(nrm) {
  const t1 = new THREE.Vector3().crossVectors(nrm, new THREE.Vector3(0, 0, 1));
  if (t1.lengthSq() < 1e-8) t1.set(1, 0, 0); else t1.normalize();
  const t2 = new THREE.Vector3().crossVectors(nrm, t1).normalize();
  return { t1, t2 };
}

function placeMarqueur(p, nrm, t1, t2) {
  if (!sondeEtat.marqueur) {
    const grp = new THREE.Group();
    const plan = new THREE.Mesh(
      new THREE.PlaneGeometry(SONDE_COTE, SONDE_COTE),
      new THREE.MeshBasicMaterial({ color: 0xf0b347, fog: false, transparent: true,
                                    opacity: 0.55, side: THREE.DoubleSide,
                                    depthWrite: false }));
    const bord = new THREE.LineSegments(
      new THREE.EdgesGeometry(plan.geometry),
      new THREE.LineBasicMaterial({ color: 0x63400a, fog: false }));
    // épingle : le carré ne fait que 3 px à 180 m de recul, il faut un repère
    // de taille écran constante pour retrouver la sonde de loin
    const epingle = new THREE.Group();
    epingle.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1)]),
      new THREE.LineBasicMaterial({ color: 0xf0b347, fog: false })));
    const tete = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.14),
      new THREE.MeshBasicMaterial({ color: 0xf0b347, fog: false }));
    tete.position.z = 1;
    epingle.add(tete);
    grp.add(plan, bord, epingle);
    grp.renderOrder = 5;
    sondeEtat.epingle = epingle;
    sondeEtat.marqueur = grp;
    scene.add(grp);
  }
  const g = sondeEtat.marqueur;
  // 3 cm de décollement : la quantification du bâti est à 5 cm, sans marge le
  // carré se battrait en profondeur avec la surface qui le porte
  g.position.copy(p).addScaledVector(nrm, 0.03);
  g.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(t1, t2, nrm));
  g.visible = true;
  majMarqueurSonde();
}

/* Épingle à taille écran constante (~55 px) : jamais encombrante de près,
   toujours repérable de loin. Appelée juste avant chaque rendu. */
function majMarqueurSonde() {
  const g = sondeEtat.marqueur;
  if (!g || !g.visible || !camera) return;
  const d = camera.position.distanceTo(g.position);
  const mParPx = 2 * Math.tan(camera.fov * RAD / 2) * d / hauteur();
  sondeEtat.epingle.scale.setScalar(Math.min(14, Math.max(0.2, 55 * mParPx)));
}

/* Pose la sonde depuis des coordonnées monde plutôt qu'un clic écran :
   rejoue exactement un point mémorisé (attributs d'une entité HA, ou fixture
   de test) sans dépendre de la caméra. */
function poseSonde(x, y, z, nx, ny, nz) {
  prepareBVH();
  const nrm = new THREE.Vector3(nx, ny, nz).normalize();
  const { t1, t2 } = baseTangente(nrm);
  sondeEtat.jeton++; // annule un calcul de frise en cours
  sondeEtat.fractions = null;
  sondeEtat.point = new THREE.Vector3(x, y, z);
  sondeEtat.normale = nrm;
  sondeEtat.t1 = t1;
  sondeEtat.t2 = t2;
  sondeEtat.mode = classeSurface(nrm);
  return { mode: sondeEtat.mode };
}

/* Les événements de pointeur donnent des coordonnées FENÊTRE. La scène ne
   commence plus en haut à gauche de celle-ci dès que la carte est un panneau
   Home Assistant : elle démarre sous l'en-tête et à droite de la barre
   latérale. Seuls les usages ABSOLUS sont concernés — les déplacements
   d'orbite et de pan sont des différences, insensibles à l'origine.
   `sondeClic` et `recentre` attendent des coordonnées relatives à l'hôte,
   comme en rend `projette`. */
function local(e) {
  const r = hote.getBoundingClientRect();
  return [e.clientX - r.left, e.clientY - r.top];
}

function sondeClic(cx, cy) {
  const suite = () => {
    prepareBVH();
    const ndc = new THREE.Vector2((cx / largeur()) * 2 - 1, -(cy / hauteur()) * 2 + 1);
    const rc = new THREE.Raycaster();
    rc.firstHitOnly = true;
    rc.setFromCamera(ndc, camera);
    const cibles = [batiMesh, terrainMesh, routesMesh, cheminsMesh, pontsMesh];
    if (modeleMesh) cibles.push(modeleMesh);
    const hits = rc.intersectObjects(cibles, false);
    if (!hits.length) return;
    const h = hits[0];
    // la normale sert désormais quelle que soit la surface : elle porte le
    // carré de mesure. Retournée vers la caméra — l'enroulement des faces
    // n'est pas fiable d'un maillage à l'autre, et on sonde ce qu'on voit.
    const nrm = h.face.normal.clone().normalize();
    if (nrm.dot(camera.position.clone().sub(h.point)) < 0) nrm.negate();
    const mode = classeSurface(nrm);
    const { t1, t2 } = baseTangente(nrm);
    sondeEtat.point = h.point.clone();
    sondeEtat.normale = nrm;
    sondeEtat.t1 = t1;
    sondeEtat.t2 = t2;
    sondeEtat.mode = mode;
    placeMarqueur(h.point, nrm, t1, t2);
    $("sonde-json").hidden = true;
    $("sonde-assoc-etat").textContent = "";
    delete $("sonde-nom").dataset.edite;
    $("sonde-nom").value = "";
    $("sonde-volet").dispatchEvent(new Event("input"));
    $("sonde").hidden = false;
    calculeSonde();
    majTrajet();
    invalide();
  };
  if (!bvhPret) {
    $("sonde").hidden = false;
    $("sonde-titre").textContent = "Sonde";
    $("sonde-info").textContent = "Préparation du calcul (première utilisation)…";
    setTimeout(suite, 30);
  } else suite();
}

/* Échantillonnage du disque solaire (diamètre apparent 0,53°) : centre puis
   hexagone équi-aire. Les trois premiers points (centre, haut, bas) suffisent
   hors pénombre ; les quatre autres ne sont évalués qu'aux transitions. */
const DISQUE_SOLAIRE = (() => {
  const r = 0.00327; // rad — anneau à 0,707 × rayon apparent (équi-aire)
  const pts = [[0, 0], [0, r], [0, -r]];
  for (const a of [30, 150, 210, 330]) {
    pts.push([Math.cos(a * RAD) * r, Math.sin(a * RAD) * r]);
  }
  return pts;
})();

/* Échantillonneur attaché à une position de sonde : rend une fonction
   (dir, kFeuille, rapide) → fraction 0-1 du disque solaire vue par le carré.
   Sorti de calculeSonde pour être partagé avec le masque d'horizon, qui
   l'appelle par direction au lieu de par minute. Une seule implémentation de
   « le soleil atteint-il cette surface » : rien à faire coïncider ensuite. */
function sondeur(point, nrm, t1, t2, arbresActifs) {
  prepareBVH();
  // les 9 points de mesure du carré, figés dans le plan de la surface
  const pos = SONDE_GRILLE.map(([a, b]) =>
    point.clone().addScaledVector(t1, a).addScaledVector(t2, b));
  const oref = point.clone().addScaledVector(nrm, 0.1);
  // appels directs au BVH (meshes à transformation identité) : bien moins
  // d'allocations que Raycaster.intersectObjects, ~7 rayons/minute en pénombre
  const bvhCibles = [batiMesh, terrainMesh, pontsMesh]
    .concat(modeleMesh ? [modeleMesh] : [])
    .map((m) => m.geometry.boundsTree);
  const ray = new THREE.Ray();
  const bloque = () => {
    for (const bt of bvhCibles) {
      if (bt.raycastFirst(ray, THREE.DoubleSide)) return true;
    }
    return false;
  };
  let idxArbres = null; // construit au premier appel éclairé
  const u = new THREE.Vector3(), v = new THREE.Vector3();
  const Z = new THREE.Vector3(0, 0, 1), e = new THREE.Vector3();
  const o = new THREE.Vector3(); // origine du rayon, réutilisée point après point
  const val = new Float32Array(DISQUE_SOLAIRE.length);
  let kF = 0;
  const echantillon = (k, dir) => {
    const [du, dv] = DISQUE_SOLAIRE[k];
    e.copy(dir).addScaledVector(u, du).addScaledVector(v, dv).normalize();
    if (e.z <= 0) return 0; // sous l'horizon géométrique
    ray.origin.copy(o);
    ray.direction.copy(e);
    if (bloque()) return 0;
    return arbresActifs
      ? transmittanceArbres(idxArbres, Math.atan2(e.x, e.y), Math.asin(e.z),
                            o.x, o.y, o.z, e.x, e.y, e.z, kF)
      : 1;
  };
  // départ du rayon à 0,15 m du point (0,10 le long de la normale) : assez
  // pour ne pas réintersecter sa propre surface (quantification 5 cm),
  // assez près pour que joues de lucarne et casquette comptent
  const place = (k, dir) => {
    o.copy(pos[k]).addScaledVector(dir, 0.15).addScaledVector(nrm, 0.1);
  };
  // fraction du disque solaire vue depuis le point k du carré
  const fractionPoint = (k, dir) => {
    place(k, dir);
    val[0] = echantillon(0, dir);
    val[1] = echantillon(1, dir);
    val[2] = echantillon(2, dir);
    if ((val[0] > 0) === (val[1] > 0) && (val[1] > 0) === (val[2] > 0)) {
      return (val[0] + val[1] + val[2]) / 3;
    }
    // pénombre : les quatre échantillons restants affinent la fraction
    let somme = val[0] + val[1] + val[2];
    for (let j = 3; j < DISQUE_SOLAIRE.length; j++) somme += echantillon(j, dir);
    return somme / DISQUE_SOLAIRE.length;
  };
  /* rapide : un seul rayon, centre du carré et centre du disque. Réservé au
     balayage grossier du masque d'horizon, qui n'a qu'à encadrer les
     transitions — elles sont ensuite affinées à l'échantillonnage complet. */
  return function fraction(dir, kFeuille, rapide) {
    if (dir.dot(nrm) <= 0.02) return 0; // soleil derrière la surface sondée
    kF = kFeuille;
    if (arbresActifs && !idxArbres) idxArbres = indexeArbres(oref);
    // base du disque : u horizontal, v vers le haut du disque
    u.crossVectors(dir, Z);
    if (u.lengthSq() < 1e-6) u.set(1, 0, 0); else u.normalize();
    v.crossVectors(u, dir);
    if (rapide) {
      place(0, dir);
      return echantillon(0, dir);
    }
    // le carré est parcouru centre puis coins ; s'ils s'accordent, inutile
    // d'aller chercher les milieux d'arête
    let somme = 0, mini = 2, maxi = -1;
    for (let k = 0; k < SONDE_GRILLE.length; k++) {
      const f = fractionPoint(k, dir);
      somme += f;
      if (f < mini) mini = f;
      if (f > maxi) maxi = f;
      if (k === 4 && maxi - mini <= SONDE_TOL) { somme *= SONDE_GRILLE.length / 5; break; }
    }
    return somme / SONDE_GRILLE.length;
  };
}

function calculeSonde() {
  if (!sondeEtat.point) return;
  const jeton = ++sondeEtat.jeton;
  sondeEtat.fractions = null; // la frise précédente ne vaut plus rien
  const { y, m, d } = dateDuJour(etat.jour);
  const pas = 1; // minute
  const n = 1440 / pas;
  const fractions = new Float32Array(n);
  const fraction = sondeur(sondeEtat.point, sondeEtat.normale,
                           sondeEtat.t1, sondeEtat.t2, groupeArbres.visible);
  const kFeuille = K_HIVER + (K_ETE - K_HIVER) * facteurFeuillaison(etat.jour);
  const dir = new THREE.Vector3();
  $("sonde-info").textContent = "Calcul…";
  let i = 0;
  function tranche() {
    if (jeton !== sondeEtat.jeton) return;
    // tranches courtes : chaque minute coûte 5 à 9 points de mesure
    const fin = Math.min(n, i + 15);
    for (; i < fin; i++) {
      const sol = positionSolaire(utcDepuisParis(y, m, d, i * pas), LAT, LON);
      if (sol.elevation <= -0.3) continue; // disque entièrement sous l'horizon
      dir.copy(dirSoleil(sol));
      fractions[i] = fraction(dir, kFeuille, false);
    }
    if (i < n) requestAnimationFrame(tranche);
    else afficheSonde(fractions, pas);
  }
  tranche();
}

/* ---- masque d'horizon d'une ouverture ----
   Pour chaque azimut, la BANDE d'élévations [elMin, elMax] où le soleil
   atteint directement la surface sondée. Une borne basse seule ne suffirait
   pas : la corniche à ressauts de la façade ouest masque le soleil HAUT, et
   un « au-dessus de tel angle, il y a du soleil » serait faux là.
   Sortie destinée à Home Assistant (binary_sensor « soleil direct »).
   Azimut sans aucun soleil : [90, 90] — l'élévation ne l'atteint jamais
   sous cette latitude, le capteur reste donc éteint sans cas particulier. */
function calculeMasque(pasAz, seuil, kFeuille, surProgres) {
  if (!sondeEtat.point) return Promise.resolve(null);
  const fraction = sondeur(sondeEtat.point, sondeEtat.normale,
                           sondeEtat.t1, sondeEtat.t2, groupeArbres.visible);
  const dir = new THREE.Vector3();
  const vise = (az, el, rapide) => {
    const c = Math.cos(el * RAD);
    dir.set(c * Math.sin(az * RAD), c * Math.cos(az * RAD), Math.sin(el * RAD));
    return fraction(dir, kFeuille, rapide);
  };
  // frontière entre une élévation sombre et une élévation éclairée, au
  // dixième de degré près, à l'échantillonnage complet du carré
  const affine = (az, sombre, clair) => {
    if ((vise(az, sombre, false) >= seuil) === (vise(az, clair, false) >= seuil)) {
      return { el: (sombre + clair) / 2, sur: false };
    }
    let a = sombre, b = clair;
    for (let it = 0; it < 8; it++) {
      const m = (a + b) / 2;
      if (vise(az, m, false) >= seuil) b = m; else a = m;
    }
    return { el: (a + b) / 2, sur: true };
  };
  const bandes = [];
  let nFragmente = 0, nIncertain = 0;
  const unAzimut = (az) => {
    // balayage grossier au degré, un rayon par pas : il ne sert qu'à encadrer
    const eclaire = [];
    for (let el = 0; el <= 90; el++) eclaire.push(vise(az, el, true) >= seuil);
    // plus longue plage éclairée contiguë
    let deb = -1, fin = -1, d0 = -1, nPlages = 0;
    for (let el = 0; el <= 90; el++) {
      if (eclaire[el]) {
        if (d0 < 0) { d0 = el; nPlages++; }
        if (el === 90 || !eclaire[el + 1]) {
          if (deb < 0 || el - d0 > fin - deb) { deb = d0; fin = el; }
          d0 = -1;
        }
      }
    }
    if (deb < 0) { bandes.push({ az, elMin: 90, elMax: 90, fragmente: false }); return; }
    if (nPlages > 1) nFragmente++;
    let elMin = 0, elMax = 90;
    if (deb > 0) {
      const r = affine(az, deb - 1, deb);
      elMin = r.el; if (!r.sur) nIncertain++;
    }
    if (fin < 90) {
      const r = affine(az, fin + 1, fin);
      elMax = r.el; if (!r.sur) nIncertain++;
    }
    bandes.push({ az, elMin: Math.round(elMin * 100) / 100,
                  elMax: Math.round(elMax * 100) / 100, fragmente: nPlages > 1 });
  };
  // découpé en tranches : un masque coûte ~2 s de lancer de rayons, ce qui
  // gèlerait l'interface d'un bloc. Budget de temps plutôt que nombre fixe
  // d'azimuts — leur coût varie du simple au triple selon les transitions.
  const azimuts = [];
  for (let az = 0; az < 360; az += pasAz) azimuts.push(az);
  let k = 0;
  return new Promise((resolve) => {
    const tranche = () => {
      const t0 = performance.now();
      do { unAzimut(azimuts[k++]); } while (k < azimuts.length
                                            && performance.now() - t0 < 12);
      if (surProgres) surProgres(k / azimuts.length);
      if (k < azimuts.length) requestAnimationFrame(tranche);
      else resolve({ bandes, nFragmente, nIncertain });
    };
    tranche();
  });
}

function afficheSonde(fractions, pas) {
  sondeEtat.fractions = fractions; // relu par les vérifications automatisées
  const n = fractions.length;
  let total = 0, premier = null, dernier = null;
  for (let i = 0; i < n; i++) {
    total += fractions[i] * pas;
    if (fractions[i] >= 0.25) {
      if (premier === null) premier = i * pas;
      dernier = i * pas;
    }
  }
  const nr = sondeEtat.normale;
  const azf = ((Math.atan2(nr.x, nr.y) / RAD) + 360) % 360;
  const rose = ROSE[Math.round(azf / 45) % 8];
  let titre = "Sonde — surface horizontale";
  if (sondeEtat.mode === "facade") {
    titre = `Sonde — façade ${rose} (${azf.toFixed(0)}°)`;
  } else if (sondeEtat.mode === "pente") {
    const pente = Math.acos(Math.min(1, Math.max(-1, nr.z))) / RAD;
    titre = nr.z > 0
      ? `Sonde — pente ${rose} ${pente.toFixed(0)}°`
      : `Sonde — sous-face ${rose} (${pente.toFixed(0)}°)`;
  }
  $("sonde-titre").textContent = titre;
  const tot = Math.round(total);
  $("sonde-info").innerHTML = tot === 0
    ? "Aucun soleil direct ce jour-là."
    : `Soleil direct : <b>${Math.floor(tot / 60)} h ${String(tot % 60).padStart(2, "0")}</b>` +
      ` (carré de 50 cm, pénombre et feuillage pondérés)` +
      (premier === null ? "" : ` — de ${fmtMin(premier)} à ${fmtMin(dernier)}`);
  const cv = $("sonde-frise"), ctx = cv.getContext("2d");
  const st = getComputedStyle(hote);
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = "rgba(127,127,127,.25)";
  ctx.fillRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = st.getPropertyValue("--or").trim() || "#f0b347";
  for (let i = 0; i < n; i++) {
    if (fractions[i] > 0.01) {
      ctx.globalAlpha = Math.min(1, 0.15 + 0.85 * fractions[i]);
      ctx.fillRect(i / n * cv.width, 0, cv.width / n + 0.5, cv.height);
    }
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = st.getPropertyValue("--muted").trim();
  ctx.font = "9px " + st.getPropertyValue("--font-ui");
  for (const h of [6, 12, 18]) {
    ctx.fillRect(h / 24 * cv.width, 0, 1, cv.height);
  }
}

function fermeSonde() {
  $("sonde").hidden = true;
  $("sonde-json").hidden = true;
  sondeEtat.point = null;
  sondeEtat.jeton++;
  if (sondeEtat.marqueur) sondeEtat.marqueur.visible = false;
  majTrajet();
  invalide();
}

/* ============================== Home Assistant ============================== */
/* Servie sous /local/, la page est sur la MÊME origine que l'interface Home
   Assistant : elle réutilise le jeton de la session ouverte plutôt que
   d'exiger un secret durable. Toutes les requêtes ci-dessous sont relatives,
   donc de même origine — la contrainte réseau du projet tient. Servie
   ailleurs (test, serveur statique), il n'y a pas de session : le panneau
   reste caché et rien n'est tenté. */
const HA_DOMAINE = "sun_shading";
const MASQUE_PAS_AZ = 1;
const MASQUE_SEUIL = 0.5; // plus de la moitié du carré de 50 cm éclairée

/* Volets connus du dépôt (ouvertures.json, inliné au build). Ils amorcent le
   sélecteur : sur l'instance, /api/states peut ne rien ramener — vu en
   production le 31/08/2026 — et la saisie ne doit pas en dépendre. Le direct,
   quand il répond, complète la liste sans écraser ces noms : ce sont eux qui
   déterminent l'entity_id des capteurs. */
let VOLETS_CONNUS = [];   // posé par monte() depuis le manifest
const haEtat = { dispo: false, raison: "", nEtats: 0, ouvertures: [], voie: null,
                 covers: [] };

function haFusionneCovers(direct) {
  const parId = new Map();
  for (const v of VOLETS_CONNUS) parId.set(v.volet, { id: v.volet, nom: v.nom });
  for (const c of direct) if (!parId.has(c.id)) parId.set(c.id, c);
  return [...parId.values()].sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
}

/* Voie privilégiée : montée en panel_custom, l'élément reçoit `hass` en
   propriété. C'est le contrat documenté de Home Assistant, là où les deux
   voies suivantes s'appuient sur des structures internes ou sur un jeton. */
let hassPanneau = null;
let surPremierHass = null; // posé par initUI, si hass arrive après elle
let surThemeHass = null;   // idem, pour suivre le thème de Home Assistant

function poseHass(h) {
  const premier = !hassPanneau && h;
  hassPanneau = h;
  // écrit à chaque changement d'état : ne rien redessiner ici
  if (premier && surPremierHass) surPremierHass();
  else if (hassPanneau && surThemeHass) surThemeHass();
}

function litHass() { return hassPanneau; }

/* Vue étroite : Home Assistant replie sa barre latérale sous 870 px et pose
   `narrow` sur le panneau. Sans le burger qui va avec, un panneau plein écran
   sur téléphone est un cul-de-sac — on ne peut plus revenir aux dashboards. */
let etroit = false;

function poseEtroit(v) {
  etroit = !!v;
  if (hote) {
    if (etroit) hote.dataset.etroit = "";
    else delete hote.dataset.etroit;
  }
}

function ouvreMenuHass() {
  // l'événement documenté du frontend ; il remonte jusqu'à <home-assistant>
  hote.dispatchEvent(new CustomEvent("hass-toggle-menu",
                                     { bubbles: true, composed: true }));
}

function haPanneau() {
  return hassPanneau && hassPanneau.states && hassPanneau.callService
    ? hassPanneau : null;
}

/* Chemin de repli : la page est en iframe DANS l'interface Home Assistant,
   sur la même origine. L'élément <home-assistant> du parent porte l'objet
   `hass` — états à jour et WebSocket déjà authentifiée. Ni jeton à lire, ni
   REST à interroger.
   Constaté en production le 01/09/2026 : dans l'application compagnon iOS,
   `localStorage.hassTokens` est lisible au chargement puis disparaît, et
   /api/states ne ramène aucune entité. Le parent, lui, est toujours là. */
function haParent() {
  try {
    if (window.parent === window) return null;
    const el = window.parent.document.querySelector("home-assistant");
    const h = el && el.hass;
    return h && h.states && h.callService ? h : null;
  } catch (e) {
    return null; // origine différente : pas notre cas, mais on ne casse pas
  }
}

function haSession() {
  try {
    const brut = localStorage.getItem("hassTokens");
    const t = brut ? JSON.parse(brut) : null;
    return t && t.access_token ? t : null;
  } catch (e) { return null; }
}

async function haJeton() {
  const t = haSession();
  if (!t) return null;
  // relu à chaque appel plutôt que mis en cache : le frontend le renouvelle
  // de son côté. S'il a expiré et qu'on a un refresh_token, on renouvelle.
  if (t.expires && Date.now() > t.expires - 30000 && t.refresh_token) {
    try {
      const r = await fetch("/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: t.refresh_token,
          client_id: t.clientId || `${location.origin}/`,
        }),
      });
      if (r.ok) return (await r.json()).access_token;
    } catch (e) { /* jeton en place : on tente quand même */ }
  }
  return t.access_token;
}

async function haAppel(chemin, options) {
  const jeton = await haJeton();
  if (!jeton) throw new Error("aucune session Home Assistant");
  const o = options || {};
  const r = await fetch(chemin, Object.assign({}, o, {
    headers: Object.assign({ Authorization: `Bearer ${jeton}`,
                             "Content-Type": "application/json" }, o.headers),
  }));
  if (!r.ok) throw new Error(`${chemin} : HTTP ${r.status}`);
  return r.status === 204 ? null : r.json();
}

/* Relit l'état de Home Assistant : les volets disponibles et les ouvertures
   déjà définies. La page ne garde AUCUN état de configuration ; la source de
   vérité est l'intégration, ce qui rend le panneau juste après un F5 comme
   après six mois. */
/* panneau puis iframe : les deux exposent la même interface (states,
   services, callService), le repli REST vient après */
function haObjet() { return haPanneau() || haParent(); }

async function haEtats() {
  const h = haObjet();
  return h ? Object.values(h.states) : haAppel("/api/states");
}

async function haDomainesDeServices() {
  const h = haObjet();
  return h ? Object.keys(h.services)
           : (await haAppel("/api/services")).map((s) => s.domain);
}

async function haAppelService(domaine, service, donnees) {
  const h = haObjet();
  if (h) return h.callService(domaine, service, donnees);
  return haAppel(`/api/services/${domaine}/${service}`,
                 { method: "POST", body: JSON.stringify(donnees) });
}

function haAccessible() { return haObjet() !== null || haSession() !== null; }

async function haRafraichit() {
  haEtat.dispo = false;
  haEtat.voie = haPanneau() ? "panneau"
    : (haParent() ? "iframe" : (haSession() ? "jeton" : null));
  if (!haEtat.voie) {
    haEtat.raison = "Ouvrez la carte depuis Home Assistant pour configurer les ouvertures.";
    return false;
  }
  try {
    const etats = await haEtats();
    haEtat.nEtats = Array.isArray(etats) ? etats.length : -1;
    haEtat.covers = haFusionneCovers(etats
      .filter((e) => e.entity_id.startsWith("cover."))
      .map((e) => ({ id: e.entity_id,
                     nom: (e.attributes && e.attributes.friendly_name) || e.entity_id })));
    haEtat.nDirect = etats.filter((e) => e.entity_id.startsWith("cover.")).length;
    // nos entités se reconnaissent à l'attribut « opening », pas à leur nom
    haEtat.ouvertures = etats
      .filter((e) => e.attributes && e.attributes.opening)
      .map((e) => ({
        id: e.attributes.opening, entite: e.entity_id, etat: e.state,
        nom: e.attributes.friendly_name, volet: e.attributes.cover,
        point: e.attributes.point, normale: e.attributes.normal,
        elMin: e.attributes.elevation_min, elMax: e.attributes.elevation_max,
      }))
      .sort((a, b) => (a.nom || "").localeCompare(b.nom || "", "fr"));
    if (!(await haDomainesDeServices()).includes(HA_DOMAINE)) {
      haEtat.raison = "Intégration « Sun Shading » absente : "
        + "la copier dans custom_components/ et redémarrer Home Assistant.";
      return false;
    }
    haEtat.dispo = true;
    haEtat.raison = "";
    return true;
  } catch (err) {
    haEtat.raison = String((err && err.message) || err);
    return false;
  }
}

/* Calcule les deux masques de la sonde courante et les pousse dans
   l'intégration. Les bornes de feuillaison partent avec : l'intégration
   n'implémente que la forme de la courbe. */
async function haEnregistreOuverture(id, nom, volet, surProgres) {
  const progres = surProgres || (() => {});
  const ete = await calculeMasque(MASQUE_PAS_AZ, MASQUE_SEUIL, K_ETE,
                                  (p) => progres(p * 0.5));
  const hiver = await calculeMasque(MASQUE_PAS_AZ, MASQUE_SEUIL, K_HIVER,
                                    (p) => progres(0.5 + p * 0.5));
  const r = (x) => Math.round(x * 1000) / 1000;
  const p = sondeEtat.point, n = sondeEtat.normale;
  await haAppelService(HA_DOMAINE, "set_opening", {
      id, name: nom, cover: volet,
      point: [r(p.x), r(p.y), r(p.z)],
      normal: [r(n.x), r(n.y), r(n.z)],
      leafy: ete.bandes.map((b) => [b.elMin, b.elMax]),
      bare: hiver.bandes.map((b) => [b.elMin, b.elMax]),
      azimuth_step: MASQUE_PAS_AZ, threshold: MASQUE_SEUIL, foliation: FEUILLAISON,
  });
  return { fragmente: ete.nFragmente + hiver.nFragmente,
           incertain: ete.nIncertain + hiver.nIncertain };
}

/* ---- panneau « Ouvertures » ---- */
const ouvEtat = { occupe: false };

function ouvIdDepuisVolet(entityId) {
  return entityId.replace(/^cover\./, "").replace(/[^a-z0-9_]/g, "_");
}

function ouvMessage(txt) { $("ouvertures-etat").textContent = txt; }

function ouvDessine() {
  const ul = $("ouvertures-liste");
  ul.textContent = "";
  if (!haEtat.ouvertures.length) {
    ouvMessage(haEtat.dispo
      ? "Aucune ouverture définie. Activez « Sonde au clic », visez une fenêtre, puis associez-la à son volet."
      : haEtat.raison);
  } else if (haEtat.dispo) {
    ouvMessage(`${haEtat.ouvertures.length} ouverture(s) définie(s) — `
      + `${haEtat.voie}, ${haEtat.nEtats} entités lues, `
      + `${haEtat.nDirect || 0} volet(s) en direct, `
      + `${haEtat.covers.length} proposé(s).`);
  }
  for (const o of haEtat.ouvertures) {
    const li = document.createElement("li");
    const etat = document.createElement("b");
    etat.textContent = o.etat === "on" ? "au soleil" : "à l'ombre";
    li.append(o.nom || o.id, " — ", etat);
    if (typeof o.elMin === "number") {
      li.append(` (seuil ${o.elMin.toFixed(1)}°)`);
    }
    ul.append(li);
  }
  $("ouvertures-recalcul").disabled = !haEtat.dispo
    || !haEtat.ouvertures.length || ouvEtat.occupe;
}

async function ouvRecharge() {
  await haRafraichit();
  // le sélecteur de volet du panneau de sonde suit la liste de HA
  const liste = $("liste-volets");
  liste.textContent = "";
  for (const c of haEtat.covers) {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.label = c.nom;
    liste.append(opt);
  }
  $("sonde-assoc").hidden = !haEtat.dispo;
  if (haEtat.dispo && !haEtat.nDirect) {
    // le repli du dépôt a pris la main : le dire, sans bloquer la saisie
    $("sonde-assoc-etat").textContent =
      `Liste du dépôt (${haEtat.nEtats} entités lues, aucun volet en direct).`;
  }
  ouvDessine();
}

/* Rejoue les points relus depuis les attributs des entités : après un
   changement de géométrie (nouveau LiDAR, toiture retouchée), tout se
   recalcule d'un clic sans repointer quoi que ce soit. */
async function ouvRecalculeTout() {
  if (ouvEtat.occupe) return;
  ouvEtat.occupe = true;
  ouvDessine();
  const liste = haEtat.ouvertures.slice();
  try {
    for (let i = 0; i < liste.length; i++) {
      const o = liste[i];
      if (!o.point || !o.normale) continue;
      poseSonde(o.point[0], o.point[1], o.point[2],
                o.normale[0], o.normale[1], o.normale[2]);
      await haEnregistreOuverture(o.id, o.nom.replace(/^Soleil direct /, ""),
        o.volet, (p) => ouvMessage(
          `${o.nom} — ${Math.round((i + p) / liste.length * 100)} %`));
    }
    await haRafraichit();
    ouvMessage(`${liste.length} masque(s) recalculé(s).`);
  } catch (err) {
    ouvMessage(`Échec : ${(err && err.message) || err}`);
  } finally {
    ouvEtat.occupe = false;
    ouvDessine();
  }
}

/* ============================== Interface ============================== */
const fmtDate = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
function fmtMin(t) {
  if (t === null) return "—";
  const tot = Math.min(1439, Math.round(t));
  const h = Math.floor(tot / 60), m = tot % 60;
  return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
}

function majPisteJour() {
  const e = etat.ephemerides;
  const p = (t) => (t / 1440 * 100).toFixed(2) + "%";
  const nuit = "#232a36", aube = "#6d5a46", jour = "#c7a35c";
  let g;
  if (e.lever !== null && e.coucher !== null) {
    g = `linear-gradient(90deg, ${nuit} 0%, ${nuit} ${p(e.lever - 25)}, ${aube} ${p(e.lever)}, ${jour} ${p(e.lever + 40)}, ${jour} ${p(e.coucher - 40)}, ${aube} ${p(e.coucher)}, ${nuit} ${p(e.coucher + 25)}, ${nuit} 100%)`;
  } else {
    g = etat.ephemerides.elMax > 0 ? jour : nuit;
  }
  $("piste-jour").style.background = g;
}

function majUI() {
  const { y, m, d } = dateDuJour(etat.jour);
  const sol = positionSolaire(utcCourant(), LAT, LON);
  $("lect-heure").textContent = fmtMin(etat.minutes);
  $("lect-date").textContent = fmtDate.format(new Date(Date.UTC(y, m - 1, d)));
  $("lect-azimut").textContent = sol.azimut.toFixed(1).replace(".", ",") + "°";
  $("lect-elevation").textContent = sol.elevation.toFixed(1).replace(".", ",") + "°";
  const e = etat.ephemerides;
  $("lect-lever").textContent = fmtMin(e.lever);
  $("lect-coucher").textContent = fmtMin(e.coucher);
  $("lect-midi").textContent = fmtMin(e.midi);
  if (sol.elevation > 0.5) {
    const k = 1 / Math.tan(sol.elevation * RAD);
    $("lect-ombre").textContent = (k >= 10 ? k.toFixed(0) : k.toFixed(1).replace(".", ",")) + " × h";
  } else $("lect-ombre").textContent = "—";
  majLumieres(sol);
  majSoleilKit();
  invalide();
  return sol;
}

function surChangementJour() {
  calculeEphemerides();
  majPisteJour();
  majTrajet();
  majUI();
  if (sondeEtat.point) calculeSonde();
}

function initUI() {
  $("curseur-heure").addEventListener("input", (ev) => { etat.minutes = +ev.target.value; majUI(); });
  $("curseur-jour").addEventListener("input", (ev) => { etat.jour = +ev.target.value; surChangementJour(); });
  for (const b of racine.querySelectorAll(".presets button[data-jm]")) {
    b.addEventListener("click", () => {
      const [d, m] = b.dataset.jm.split("-").map(Number);
      etat.jour = jourDepuisDate(m, d);
      $("curseur-jour").value = etat.jour;
      surChangementJour();
    });
  }
  $("btn-aujourdhui").addEventListener("click", () => {
    const off = decalageParisMin(Date.now());
    const loc = new Date(Date.now() + off * 60000);
    etat.jour = Math.min(364, Math.round((Date.UTC(loc.getUTCFullYear(), loc.getUTCMonth(), loc.getUTCDate()) - Date.UTC(ANNEE, 0, 1)) / 86400000));
    etat.minutes = loc.getUTCHours() * 60 + loc.getUTCMinutes();
    $("curseur-jour").value = etat.jour;
    $("curseur-heure").value = etat.minutes;
    surChangementJour();
  });
  // thème de l'interface
  let themeInitial = "auto";
  try { themeInitial = localStorage.getItem("theme") || "auto"; } catch (e) {}
  /* « auto » suit Home Assistant en panneau, la préférence système sinon :
     basculer HA en sombre doit basculer la carte, sans rechargement. */
  const appliqueTheme = (v) => {
    if (v !== "auto") { hote.dataset.theme = v; return; }
    const h = haPanneau();
    if (h && h.themes && typeof h.themes.darkMode === "boolean") {
      hote.dataset.theme = h.themes.darkMode ? "dark" : "light";
    } else {
      delete hote.dataset.theme;
    }
  };
  surThemeHass = () => {
    if ($("opt-theme").value === "auto") appliqueTheme("auto");
  };
  appliqueTheme(themeInitial);
  $("opt-theme").value = themeInitial;
  $("opt-theme").addEventListener("change", (ev) => {
    appliqueTheme(ev.target.value);
    try { localStorage.setItem("theme", ev.target.value); } catch (e) {}
  });
  // sens des commandes de navigation
  commandesInversees = litCommandes();
  $("opt-commandes").value = commandesInversees ? "inversees" : "normales";
  $("opt-commandes").addEventListener("change", (ev) => {
    commandesInversees = ev.target.value === "inversees";
    try { localStorage.setItem("commandes", ev.target.value); } catch (e) {}
  });
  $("btn-menu").addEventListener("click", ouvreMenuHass);
  const btn = $("btn-lecture"), ico = $("ico-lecture");
  const iconePlay = '<path d="M3 1.5 L14 8 L3 14.5 Z" fill="currentColor"/>';
  const iconePause = '<rect x="2.5" y="2" width="4" height="12" fill="currentColor"/><rect x="9.5" y="2" width="4" height="12" fill="currentColor"/>';
  btn.addEventListener("click", () => {
    etat.lecture = !etat.lecture;
    ico.innerHTML = etat.lecture ? iconePause : iconePlay;
    planifie();
  });
  $("opt-ombres").addEventListener("change", appliqueOmbres);
  $("opt-arbres").addEventListener("change", (ev) => {
    groupeArbres.visible = ev.target.checked;
    renderer.shadowMap.needsUpdate = true;
    if (sondeEtat.point) calculeSonde();
    invalide();
  });
  // page construite sans photomaillage : le mode n'est pas proposé
  if (!RES.pm3d) $("opt-carte").querySelector('option[value="photo"]').remove();
  $("opt-carte").addEventListener("change", async (ev) => {
    const sel = ev.target;
    const mode = sel.value;
    // chaque mode charge ses données au premier usage (satellite ~9 Mo,
    // photomaillage ~14 Mo de plus) : le contrôle attend, désactivé
    const aCharger = (mode === "satellite" && (!satEtat || !satEtat.pret))
      || (mode === "photo" && (!photoEtat || !photoEtat.pret));
    if (aCharger) {
      sel.disabled = true;
      majEtatCarte("chargement…");
      try {
        await (mode === "photo" ? preparePhoto() : prepareSatellite());
      } catch (err) {
        majEtatCarte("erreur");
        sel.disabled = false;
        return;
      }
      sel.disabled = false;
    }
    appliqueCarte(mode);
    majEtatCarte();
  });
  $("opt-sonde").addEventListener("change", (ev) => {
    if (!ev.target.checked) fermeSonde();
  });
  $("sonde-fermer").addEventListener("click", fermeSonde);

  /* ---- ouvertures Home Assistant ----
     Le réglage n'apparaît que si une session HA est détectable : servie
     ailleurs, la page ne montre pas une fonction qu'elle ne peut pas rendre. */
  surPremierHass = () => {
    $("lbl-ouvertures").hidden = false;
    ouvRecharge();
    if ($("opt-theme").value === "auto") appliqueTheme("auto");
  };
  if (haAccessible()) surPremierHass();
  $("opt-ouvertures").addEventListener("change", async (ev) => {
    $("ouvertures").hidden = !ev.target.checked;
    if (ev.target.checked) await ouvRecharge();
  });
  $("ouvertures-fermer").addEventListener("click", () => {
    $("ouvertures").hidden = true;
    $("opt-ouvertures").checked = false;
  });
  $("ouvertures-recalcul").addEventListener("click", ouvRecalculeTout);

  $("sonde-volet").addEventListener("input", (ev) => {
    // le nom suit le volet choisi tant que l'utilisateur n'y a pas touché
    const champ = $("sonde-nom");
    if (champ.dataset.edite) return;
    const c = haEtat.covers.find((x) => x.id === ev.target.value);
    if (c) champ.value = c.nom;
  });
  $("sonde-nom").addEventListener("input", (ev) => {
    ev.target.dataset.edite = "1";
  });
  $("sonde-enregistrer").addEventListener("click", async () => {
    if (ouvEtat.occupe || !sondeEtat.point) return;
    const volet = $("sonde-volet").value;
    const nom = $("sonde-nom").value.trim();
    if (!volet || !nom) {
      $("sonde-assoc-etat").textContent = "Choisir un volet et un nom.";
      return;
    }
    ouvEtat.occupe = true;
    $("sonde-enregistrer").disabled = true;
    try {
      const bilan = await haEnregistreOuverture(
        ouvIdDepuisVolet(volet), nom, volet,
        (p) => { $("sonde-assoc-etat").textContent =
          `Calcul du masque — ${Math.round(p * 100)} %`; });
      await ouvRecharge();
      $("sonde-assoc-etat").textContent = bilan.fragmente
        ? `Publié. ${bilan.fragmente} azimut(s) à bandes multiples, à vérifier.`
        : "Publié dans Home Assistant.";
    } catch (err) {
      $("sonde-assoc-etat").textContent = `Échec : ${(err && err.message) || err}`;
    } finally {
      ouvEtat.occupe = false;
      $("sonde-enregistrer").disabled = false;
    }
  });
  // saisie des ouvertures pour ouvertures.json (masques d'horizon) : le champ
  // sélectionnable est le moyen principal, l'API presse-papiers un bonus —
  // elle est indisponible hors contexte sécurisé, ce qu'est la page servie
  // en http par Home Assistant.
  $("sonde-copier").addEventListener("click", () => {
    if (!sondeEtat.point) return;
    const r = (x) => Math.round(x * 1000) / 1000;
    const p = sondeEtat.point, n = sondeEtat.normale;
    const txt = JSON.stringify({
      id: "", nom: "", x: r(p.x), y: r(p.y), z: r(p.z),
      nx: r(n.x), ny: r(n.y), nz: r(n.z),
      volet: "", automatisation: "",
    });
    const champ = $("sonde-json");
    champ.value = txt;
    champ.hidden = false;
    champ.select();
    if (navigator.clipboard) navigator.clipboard.writeText(txt).catch(() => {});
  });
  // écrans contraints : réglages derrière un bouton, timeline repliable
  const regl = $("reglages"), btnRegl = $("btn-reglages");
  btnRegl.addEventListener("click", () => {
    btnRegl.setAttribute("aria-expanded", regl.classList.toggle("ouvert"));
  });
  renderer.domElement.addEventListener("pointerdown", () => {
    regl.classList.remove("ouvert");
    btnRegl.setAttribute("aria-expanded", "false");
  });
  const chrono = $("timeline"), btnRepli = $("btn-replier");
  btnRepli.addEventListener("click", () => {
    btnRepli.setAttribute("aria-expanded", !chrono.classList.toggle("replie"));
  });
  $("opt-trajet").addEventListener("change", () => { majTrajet(); invalide(); });
  $("opt-trajet-r").addEventListener("input", (ev) => {
    trajetR = (+ev.target.value) / 2;
    majTrajet();
    invalide();
  });
  addEventListener("keydown", (e) => {
    if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const pas = e.shiftKey ? 60 : 10;
      etat.minutes = Math.min(1439, Math.max(0, etat.minutes + (e.key === "ArrowRight" ? pas : -pas)));
      $("curseur-heure").value = etat.minutes;
      majUI();
    } else if (e.key === " ") { e.preventDefault(); btn.click(); }
  });
}

/* ============================== Boucle ============================== */
/* La boucle rAF s'endort complètement au repos (rien à rendre, pas de
   lecture) : zéro réveil CPU quand la page reste ouverte dans un dashboard.
   invalide() et le bouton lecture la relancent. */
let tPrec = 0;
let rafPrevu = false;
function planifie() {
  if (!rafPrevu && !contextePerdu) {
    rafPrevu = true;
    tPrec = performance.now();
    requestAnimationFrame(boucle);
  }
}
function boucle(t) {
  rafPrevu = false;
  const dt = Math.min(0.1, (t - tPrec) / 1000); tPrec = t;
  if (etat.lecture) {
    etat.minutes += (+$("opt-vitesse").value) * dt;
    if (etat.minutes >= 1440) {
      etat.minutes -= 1440;
      etat.jour = (etat.jour + 1) % 365;
      $("curseur-jour").value = etat.jour;
      surChangementJour();
    }
    $("curseur-heure").value = Math.floor(etat.minutes);
    majUI();
  }
  if (besoinRendu) {
    besoinRendu = false;
    majMarqueurSonde();
    renderer.render(scene, camera);
    majEtiquettes();
  }
  if (etat.lecture || besoinRendu) planifie();
}

/* ============================== Démarrage ============================== */
/* Montage : appelé une fois par la page autonome comme par l'élément
   personnalisé, avec la racine où le gabarit a été injecté. */
async function monte(r, h, base) {
  racine = r;
  hote = h;
  // `narrow` peut avoir été posé avant le montage : le réappliquer sur l'hôte
  poseEtroit(etroit);
  calibreHauteur();
  BASE_ASSETS = new URL(base, location.href).href;
  // Le manifest n'est pas haché (c'est lui qui nomme les binaires hachés) :
  // revalidé à chaque chargement, pour ne pas subir le cache long de HA.
  let man = null;
  try {
    const rep = await fetch(urlAsset("manifest.json"), { cache: "no-cache" });
    if (!rep.ok) throw new Error(`HTTP ${rep.status}`);
    man = await rep.json();
  } catch (err) {
    $("charge-etat").innerHTML = "Aucune zone à cet emplacement : <code>"
      + BASE_ASSETS + "</code> (" + err.message + ").<br>Construire une zone "
      + "(<code>build.py --zone …</code>) et y déposer son dossier "
      + "<code>dist/</code>.";
    window.__test = { pret: false, erreur: String(err) };
    return;
  }
  DONNEES_META = man.donnees_meta;
  SAT_META = man.sat_meta;
  PM3D_META = man.pm3d_meta || null;
  MODELE_META = man.modele_meta || null;
  VOLETS_META = man.volets || [];
  RES = man.res;
  LAT = DONNEES_META.centre_wgs84[1];
  LON = DONNEES_META.centre_wgs84[0];
  Q = DONNEES_META.q;
  R_AFF = DONNEES_META.r_map;
  R_BATI = DONNEES_META.r_bati || R_AFF + 50;
  EX_T = (DONNEES_META.r_terrain || R_AFF + 80) + 40;
  VOLETS_CONNUS = VOLETS_META;
  haEtat.covers = VOLETS_CONNUS.map((v) => ({ id: v.volet, nom: v.nom }));
  $("charge-titre").textContent = man.titre;
  $("titre-h1").textContent = man.titre;
  $("titre-lieu").textContent = man.lieu;
  try {
    const buf = await chargeGz(RES.donnees);
    const bufDom = RES.modele ? await chargeGz(RES.modele) : null;
    $("charge-etat").textContent = "Construction de la scène…";
    await new Promise((r) => setTimeout(r, 30));
    initScene(buf, bufDom);
    initControles();
    // date/heure initiales : maintenant (heure de Paris)
    const off = decalageParisMin(Date.now());
    const loc = new Date(Date.now() + off * 60000);
    etat.jour = Math.min(364, Math.round((Date.UTC(loc.getUTCFullYear(), loc.getUTCMonth(), loc.getUTCDate()) - Date.UTC(ANNEE, 0, 1)) / 86400000));
    etat.minutes = loc.getUTCHours() * 60 + loc.getUTCMinutes();
    $("curseur-jour").value = etat.jour;
    $("curseur-heure").value = etat.minutes;
    initUI();
    surChangementJour();
    majCamera();
    planifie();
    const ch = $("chargement");
    ch.style.opacity = "0";
    setTimeout(() => ch.remove(), 450);
  } catch (err) {
    $("charge-etat").textContent = "Erreur : " + err.message;
  }
  // accès de test (vérifications automatisées)
  window.__test = {
    // ce que le panneau expose de son intégration : vue étroite (burger) et
    // sens des commandes, tous deux invisibles depuis le DOM seul
    hote() { return { etroit, commandes: commandesInversees ? "inversees" : "normales" }; },
    regle(m, d, minutes) {
      etat.jour = jourDepuisDate(m, d); etat.minutes = minutes;
      $("curseur-jour").value = etat.jour; $("curseur-heure").value = minutes;
      surChangementJour();
      return positionSolaire(utcCourant(), LAT, LON);
    },
    soleil() { return positionSolaire(utcCourant(), LAT, LON); },
    utc() { return utcCourant(); },
    camera(az, pol, dist) { orbite.az = az; orbite.pol = pol; orbite.dist = dist; majCamera(); },
    /* Ce que la navigation a fait de la caméra : le seul moyen de vérifier
       qu'un geste tourne au lieu de déplacer, ou l'inverse. */
    vue() { return { az: orbite.az, pol: orbite.pol, dist: orbite.dist,
                     cible: { x: cible.x, y: cible.y, z: cible.z } }; },
    sonde(cx, cy) { sondeClic(cx, cy); },
    carte() { return $("opt-carte").value; },
    modele() {
      return {
        pret: modeleMesh !== null,
        nt: modeleMesh ? modeleMesh.geometry.index.count / 3 : 0,
        triBati: batiMesh.geometry.index.count / 3,
      };
    },
    projette(x, y, z) {
      const p = new THREE.Vector3(x, y, z).project(camera);
      return { cx: (p.x + 1) / 2 * largeur(), cy: (1 - p.y) / 2 * hauteur() };
    },
    ombres() { return sunLight.shadow.mapSize.x; },
    marqueur() {
      const g = sondeEtat.marqueur;
      if (!g || !g.visible) return null;
      const plan = g.children[0].geometry.parameters;
      return { l: plan.width, h: plan.height, epingle: sondeEtat.epingle.scale.x };
    },
    photo() {
      return {
        pret: photoEtat !== null && photoEtat.pret,
        visible: photoActif,
        cpuLibere: photoEtat !== null && photoEtat.pret
          && photoEtat.meshes.every((m) => m.geometry.getAttribute("position").array === null),
        nt: photoEtat && photoEtat.pret
          ? photoEtat.meshes.reduce((n, m) => n + m.geometry.index.count / 3, 0)
          : 0,
        triSat: satEtat && satEtat.pret
          ? satEtat.meshes.reduce((n, m) => n + m.geometry.index.count / 3, 0)
          : 0,
        r: PM3D_META ? PM3D_META.r : 0,
      };
    },
    sondeEn(x, y, z, nx, ny, nz) { return poseSonde(x, y, z, nx, ny, nz); },
    zone() { return { titre: man.titre, lieu: man.lieu, rMap: R_AFF, base: BASE_ASSETS }; },
    /* premier point de la scène sous le centre de l'écran : une cible valable
       pour tester le clic quelle que soit la zone */
    viseCentre() {
      prepareBVH();
      const rc = new THREE.Raycaster();
      rc.firstHitOnly = true;
      rc.setFromCamera(new THREE.Vector2(0, 0), camera);
      const cibles = [batiMesh, terrainMesh, routesMesh, cheminsMesh, pontsMesh];
      if (modeleMesh) cibles.push(modeleMesh);
      const h = rc.intersectObjects(cibles, false)[0];
      return h ? { x: h.point.x, y: h.point.y, z: h.point.z,
                   cx: largeur() / 2, cy: hauteur() / 2 } : null;
    },
    ha() {
      return { session: haSession() !== null, parent: haParent() !== null,
               voie: haEtat.voie, dispo: haEtat.dispo,
               raison: haEtat.raison, nEtats: haEtat.nEtats,
               covers: haEtat.covers.length, direct: haEtat.nDirect || 0,
               visible: !$("lbl-ouvertures").hidden };
    },
    masque(pasAz, seuil, kFeuille) { return calculeMasque(pasAz, seuil, kFeuille); },
    /* course du soleil d'une journée, minute par minute : sert à relire un
       masque en créneaux horaires sans réimplémenter NOAA hors de la page */
    soleilJour(m, d) {
      const { y, m: mm, d: dd } = dateDuJour(jourDepuisDate(m, d));
      const out = [];
      for (let i = 0; i < 1440; i++) {
        const sol = positionSolaire(utcDepuisParis(y, mm, dd, i), LAT, LON);
        out.push([Math.round(sol.azimut * 100) / 100,
                  Math.round(sol.elevation * 100) / 100]);
      }
      return out;
    },
    calculeSonde() { calculeSonde(); },
    fractions() {
      return sondeEtat.fractions ? Array.from(sondeEtat.fractions) : null;
    },
    feuillage() { return { ete: K_ETE, hiver: K_HIVER }; },
    sondePoint() {
      return sondeEtat.point
        ? {
          x: sondeEtat.point.x, y: sondeEtat.point.y, z: sondeEtat.point.z,
          mode: sondeEtat.mode, cote: SONDE_COTE,
          nx: sondeEtat.normale.x, ny: sondeEtat.normale.y, nz: sondeEtat.normale.z,
        }
        : null;
    },
    pret: true,
  };
}
