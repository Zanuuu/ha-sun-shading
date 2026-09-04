#!/usr/bin/env node
/* Masques d'horizon des ouvertures : pour chaque azimut, la bande d'élévations
   où le soleil atteint directement la fenêtre, relief, bâtiments et arbres
   compris. 360 couples par ouverture, consommés par Home Assistant
   (intégration sun_shading → binary_sensor « soleil direct »).

   Le calcul est fait PAR LA PAGE elle-même, pilotée en headless : même BVH,
   mêmes maillages (dont le modèle précis d'un bâtiment), même modèle de
   feuillage, même position solaire que la sonde au clic. Une réimplémentation
   côté Python aurait demandé de faire coïncider deux géométries ; ici il n'y
   en a qu'une.

   Entrée : zones/<zone>/ouvertures.json (points de référence, cf. bouton
   « Copier le point »). Sortie : zones/<zone>/masques/<zone>.json.

   Usage : node sources/masque_horizon.js [--zone <nom>] [--pas-az 1] [--seuil 0.5]
*/
const path = require("path");
const fs = require("fs");
const { chromium } = require("@playwright/test");
const { sert, resoutZone } = require("../tests/serveur");

const arg = (nom, def) => {
  const i = process.argv.indexOf(nom);
  return i > 0 ? process.argv[i + 1] : def;
};
const PAS_AZ = Number(arg("--pas-az", 1));
// fraction du carré de 50 cm × disque solaire au-delà de laquelle on déclare
// l'ouverture au soleil : plus de la moitié de la surface éclairée
const SEUIL = Number(arg("--seuil", 0.5));

/* Créneaux de soleil direct d'une journée, lus dans le masque : la position
   solaire vient de la page (même NOAA que la sonde), le masque décide.
   Interpolation linéaire des bornes entre les deux azimuts encadrants. */
/* Bornes [min, max] du masque à un azimut, interpolées entre les deux
   échantillons encadrants (le tableau boucle). Sortie de creneauxDe pour être
   confrontée à son homologue Python de l'intégration — c'est la seule logique
   écrite dans les deux langages, et tests/test_masque.py la tient. */
function bandeAz(bandes, az, pasAz) {
  const n = bandes.length;
  const t = ((az % 360) + 360) % 360 / pasAz;
  const i = Math.floor(t) % n, j = (i + 1) % n, f = t - Math.floor(t);
  return [bandes[i][0] + (bandes[j][0] - bandes[i][0]) * f,
          bandes[i][1] + (bandes[j][1] - bandes[i][1]) * f];
}

function creneauxDe(bandes, course, pasAz) {
  const bande = (az) => bandeAz(bandes, az, pasAz);
  const creneaux = [];
  let debut = null;
  for (let i = 0; i < course.length; i++) {
    const [az, el] = course[i];
    const [lo, hi] = bande(az);
    const au = el >= lo && el <= hi;
    if (au && debut === null) debut = i;
    if (!au && debut !== null) { creneaux.push([debut, i - 1]); debut = null; }
  }
  if (debut !== null) creneaux.push([debut, course.length - 1]);
  return creneaux;
}

const hhmm = (t) => `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
const decrisCreneaux = (c) =>
  c.length ? c.map(([a, b]) => `${hhmm(a)}-${hhmm(b)}`).join(",") : "aucun";

async function principal() {
  const zone = resoutZone(arg("--zone", null));
  const entree = zone.ouvertures;
  if (!entree.ouvertures.length) throw new Error(`${zone.nom} : ouvertures.json vide ou absent`);

  const serveur = await sert(zone);

  const navigateur = await chromium.launch();
  const page = await navigateur.newPage();
  page.on("pageerror", (e) => { console.error("erreur page :", String(e)); });
  await page.goto(serveur.page_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });
  const k = await page.evaluate(() => window.__test.feuillage());
  // trois dates de contrôle, pour relire chaque masque en créneaux horaires
  const DATES = [[6, 21, "21 juin"], [9, 22, "equinoxe"], [12, 21, "21 dec"]];
  const courses = {};
  for (const [m, d, nom] of DATES) {
    courses[nom] = await page.evaluate(([m, d]) => window.__test.soleilJour(m, d), [m, d]);
  }

  const resultat = {
    zone: zone.nom,
    genere: new Date().toISOString().slice(0, 19) + "Z",
    pas_azimut: PAS_AZ,
    seuil: SEUIL,
    extinction: k,
    convention: "elevation en degres ; [90, 90] = jamais de soleil direct a cet azimut",
    ouvertures: {},
  };

  for (const o of entree.ouvertures) {
    const pose = await page.evaluate(
      (o) => window.__test.sondeEn(o.x, o.y, o.z, o.nx, o.ny, o.nz), o);
    const saisons = {};
    for (const [nom, kf] of [["ete", k.ete], ["hiver", k.hiver]]) {
      const t0 = Date.now();
      const m = await page.evaluate(
        ([pas, seuil, kf]) => window.__test.masque(pas, seuil, kf),
        [PAS_AZ, SEUIL, kf]);
      const bandes = m.bandes.map((b) => [b.elMin, b.elMax]);
      // le nombre d'azimuts « au soleil » ne veut rien dire pour un pan de
      // toit (il les voit presque tous) : ce qui se lit, ce sont les créneaux
      const creneaux = DATES.map(([, , d]) =>
        `${d} ${decrisCreneaux(creneauxDe(bandes, courses[d], PAS_AZ))}`).join(" | ");
      console.log(`${o.id} / ${nom} : ${creneaux}`
        + ` — ${m.nFragmente} azimut(s) fragmente(s), ${m.nIncertain} frontiere(s)`
        + ` non encadree(s), ${((Date.now() - t0) / 1000).toFixed(1)} s`);
      saisons[nom] = bandes;
      saisons[nom + "_fragmente"] = m.bandes.filter((b) => b.fragmente).map((b) => b.az);
    }
    resultat.ouvertures[o.id] = Object.assign(
      { nom: o.nom, mode: pose.mode, volet: o.volet, automatisation: o.automatisation,
        point: [o.x, o.y, o.z], normale: [o.nx, o.ny, o.nz] }, saisons);
  }

  await navigateur.close();
  await serveur.ferme();

  const sortie = zone.masques;
  fs.mkdirSync(path.dirname(sortie), { recursive: true });
  fs.writeFileSync(sortie, JSON.stringify(resultat, null, 1) + "\n");
  console.log(sortie, fs.statSync(sortie).size, "octets");
}

// requis comme module par tests/masques.spec.js, qui rejoue la lecture du masque
module.exports = { creneauxDe, bandeAz, hhmm, decrisCreneaux };
if (require.main === module) principal();
