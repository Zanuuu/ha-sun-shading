// Test de fumée du livrable : chargement sans erreur console, aucune requête
// vers un service externe (seul l'hôte servant la page est admis), valeurs
// solaires de contrôle de la zone (zone.json › controle).
//
// La page est servie en HTTP depuis le dist/ de la zone ($ZONE), comme le
// fait Home Assistant : c'est la seule forme du livrable.
const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");
const { sert } = require("./serveur");

let serveur = null;
let origine = "";
let page_url = "";
let controle = null;

test.beforeAll(async () => {
  serveur = await sert();
  origine = serveur.origine;
  page_url = serveur.page_url;
  controle = serveur.zone.cfg.controle;
  if (!controle) throw new Error("zone.json sans bloc « controle »");
});

test.afterAll(async () => {
  if (serveur) await serveur.ferme();
});

const enMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// Écoute les erreurs et les requêtes sortant de l'origine servant la page.
const surveille = (page) => {
  const erreurs = [];
  const horsOrigine = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") erreurs.push(msg.text());
  });
  page.on("pageerror", (err) => erreurs.push(String(err)));
  page.on("request", (req) => {
    const url = req.url();
    if (!url.startsWith(origine) && !url.startsWith("data:")) horsOrigine.push(url);
  });
  return { erreurs, horsOrigine };
};

test("fumée : chargement, réseau, valeurs solaires", async ({ page }) => {
  const { erreurs, horsOrigine } = surveille(page);

  await page.goto(page_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null, {
    timeout: 60000,
  });
  // l'écran de chargement doit avoir disparu (démarrage sans exception)
  await expect(page.locator("#chargement")).toHaveCount(0, { timeout: 5000 });

  // le titre et le lieu viennent du manifest de la zone, pas du bundle
  const z = await page.evaluate(() => window.__test.zone());
  await expect(page.locator("#titre-h1")).toHaveText(z.titre);
  expect(z.titre.length).toBeGreaterThan(3);
  await expect(page.locator("#titre-lieu")).toHaveText(z.lieu);

  // 21 juin : lever et coucher (seuil géométrique −0,833°), ±1 min car
  // l'application travaille sur l'année courante
  await page.evaluate(() => window.__test.regle(6, 21, 720));
  const lever = await page.locator("#lect-lever").textContent();
  const coucher = await page.locator("#lect-coucher").textContent();
  const midiEte = await page.locator("#lect-midi").textContent();
  expect(Math.abs(enMinutes(lever) - enMinutes(controle.lever_21_06))).toBeLessThanOrEqual(1);
  expect(Math.abs(enMinutes(coucher) - enMinutes(controle.coucher_21_06))).toBeLessThanOrEqual(1);

  // élévation au midi solaire, solstice d'été
  const solEte = await page.evaluate(
    (min) => window.__test.regle(6, 21, min),
    enMinutes(midiEte.trim())
  );
  expect(solEte.elevation).toBeGreaterThan(controle.elevation_midi_21_06 - 0.15);
  expect(solEte.elevation).toBeLessThan(controle.elevation_midi_21_06 + 0.15);

  // solstice d'hiver
  await page.evaluate(() => window.__test.regle(12, 21, 720));
  const midiHiver = await page.locator("#lect-midi").textContent();
  const solHiver = await page.evaluate(
    (min) => window.__test.regle(12, 21, min),
    enMinutes(midiHiver.trim())
  );
  expect(solHiver.elevation).toBeGreaterThan(controle.elevation_midi_21_12 - 0.15);
  expect(solHiver.elevation).toBeLessThan(controle.elevation_midi_21_12 + 0.15);

  expect(erreurs, "erreurs console/page").toEqual([]);
  expect(horsOrigine, "requêtes vers des services externes interdites").toEqual([]);
});

// Écrans contraints (référence iPhone 14 Pro : 393×852, paysage sous
// l'en-tête HA Companion ≈ 852×340) : réglages derrière le bouton,
// timeline repliable, pas de chevauchement titre/timeline en paysage.
test("mobile : réglages, timeline repliable, paysage", async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto(page_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null, {
    timeout: 60000,
  });

  // portrait : réglages masqués, ouverts par le bouton, refermés par la scène
  await expect(page.locator("#reglages")).toBeHidden();
  await expect(page.locator("#btn-reglages")).toBeVisible();
  await page.locator("#btn-reglages").click();
  await expect(page.locator("#reglages")).toBeVisible();
  await page.mouse.click(60, 400);
  await expect(page.locator("#reglages")).toBeHidden();

  // timeline repliable sur une ligne, puis redéployée
  await expect(page.locator("#btn-replier")).toBeVisible();
  await page.locator("#btn-replier").click();
  await expect(page.locator(".rangee-date")).toBeHidden();
  await expect(page.locator("#btn-lecture")).toBeVisible();
  await page.locator("#btn-replier").click();
  await expect(page.locator(".rangee-date")).toBeVisible();

  // paysage bas : réglages toujours repliés, titre au-dessus de la timeline
  await page.setViewportSize({ width: 852, height: 340 });
  await expect(page.locator("#reglages")).toBeHidden();
  const titre = await page.locator("#titre").boundingBox();
  const timeline = await page.locator("#timeline").boundingBox();
  expect(titre.y + titre.height).toBeLessThan(timeline.y);
});

// Chargements différés : les données lourdes ne sont demandées qu'à l'activation
// du mode qui les utilise, et toujours sur la même origine.
const rendu = (page) => page.evaluate(() =>
  new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));

// Les locators Playwright traversent les shadow roots ouverts, contrairement
// à document.getElementById dans un page.evaluate : l'application vit
// désormais dans le shadow root de <sun-shading>.
const choisitCarte = async (page, mode) => {
  await page.locator("#opt-carte").selectOption(mode);
  await expect(page.locator("#opt-carte")).toBeEnabled({ timeout: 150000 });
  await expect(page.locator("#etat-carte"))
    .not.toHaveText("chargement…", { timeout: 150000 });
};

test("modes de carte : chargement différé, retraits, vue rapprochée", async ({ page }) => {
  test.setTimeout(300000); // décodage logiciel de 8 textures sous SwiftShader
  const { erreurs, horsOrigine } = surveille(page);

  await page.goto(page_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null, {
    timeout: 60000,
  });
  await expect(page.locator("#chargement")).toHaveCount(0, { timeout: 5000 });

  // vue satellite : couvre les fetch différés (sat, ortho, atlas)
  await choisitCarte(page, "satellite");
  expect(await page.evaluate(() => window.__test.carte())).toBe("satellite");
  const triPlein = await page.evaluate(() => window.__test.photo().triSat);

  // zone construite sans photomaillage : le mode n'est pas proposé, et c'est
  // tout ce qu'il y a à vérifier
  const manifest = JSON.parse(fs.readFileSync(path.join(serveur.zone.dist, "manifest.json")));
  if (!manifest.res.pm3d) {
    await expect(page.locator('#opt-carte option[value="photo"]')).toHaveCount(0);
    expect(erreurs, "erreurs console/page").toEqual([]);
    expect(horsOrigine, "requêtes hors origine interdites").toEqual([]);
    return;
  }

  // photo 3D : photomaillage par-dessus la vue satellite
  await choisitCarte(page, "photo");
  const c = await page.evaluate(() => window.__test.photo());
  expect(c.pret, "photomaillage chargé").toBe(true);
  expect(c.visible, "photomaillage affiché").toBe(true);
  expect(c.nt, "triangles du photomaillage").toBeGreaterThan(100000);
  // les façades recouvertes ne sont plus dessinées deux fois
  expect(c.triSat, "façades satellite réduites").toBeLessThan(triPlein);

  // le mode ne se dérobe plus de près : à 60 m, borne basse du zoom, le
  // photomaillage tient et les façades qu'il recouvre restent hors index
  await page.evaluate(() => window.__test.camera(0.6, 0.9, 60));
  await rendu(page);
  const p = await page.evaluate(() => window.__test.photo());
  expect(p.visible, "photomaillage maintenu de près").toBe(true);
  expect(p.triSat, "façades satellite toujours filtrées").toBeLessThan(triPlein);

  // ~100 Mo de tampons rendus après téléversement (three.js onUploadCallback :
  // dépendance interne, d'où ce garde-fou)
  expect(p.cpuLibere, "tampons CPU du photomaillage libérés").toBe(true);

  // retour au satellite : géométrie pleine restaurée
  await choisitCarte(page, "satellite");
  const r = await page.evaluate(() => window.__test.photo());
  expect(r.visible).toBe(false);
  expect(r.triSat).toBe(triPlein);

  // carte d'ombre plafonnée en Photo 3D (~470 Mo à 8192 contre ~117 à 4096),
  // sans toucher au choix de l'utilisateur, qui reprend effet en sortant
  await page.locator("#opt-ombres").selectOption("8192");
  expect(await page.evaluate(() => window.__test.ombres())).toBe(8192);
  await choisitCarte(page, "photo");
  expect(await page.evaluate(() => window.__test.ombres()),
    "8192 refusé en Photo 3D").toBe(4096);
  expect(await page.locator("#opt-ombres").inputValue()).toBe("8192");
  await choisitCarte(page, "satellite");
  expect(await page.evaluate(() => window.__test.ombres())).toBe(8192);

  expect(erreurs, "erreurs console/page").toEqual([]);
  expect(horsOrigine, "requêtes hors origine interdites").toEqual([]);
});

test("panneau : visible même dans un hôte sans hauteur définie", async ({ page }) => {
  // Constaté en production le 01/09/2026 : dans un panneau Home Assistant,
  // l'élément se montait parfaitement — __test.pret vrai, shadow root peuplé —
  // mais « height:100% » valait 0 faute de hauteur au parent, et la carte
  // était invisible. Aucune règle CSS ne sait exprimer « seulement si mon
  // parent ne me donne pas de hauteur » : la calibration se fait au montage.
  await page.goto(serveur.nu_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });
  const t = await page.evaluate(() => {
    const el = document.querySelector("sun-shading");
    const cv = el.shadowRoot.getElementById("scene");
    return { hote: el.clientHeight, canvas: cv.clientHeight, tampon: cv.height };
  });
  expect(t.hote, "l'hôte doit occuper l'espace restant").toBeGreaterThan(200);
  expect(t.canvas, "le canvas doit suivre l'hôte").toBeGreaterThan(200);
  expect(t.tampon, "le tampon de rendu doit être dimensionné").toBeGreaterThan(200);
});

test("panneau : la sonde tombe où l'on clique, hôte décalé", async ({ page }) => {
  // Constaté en production le 01/09/2026 : dans un panneau Home Assistant, la
  // sonde se posait ailleurs que sous le curseur. Les événements de pointeur
  // donnent des coordonnées FENÊTRE, et la scène ne commence plus en haut à
  // gauche de celle-ci. Les tests existants appelaient __test.sonde(cx, cy)
  // directement : ils court-circuitaient justement le chemin fautif.
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(serveur.decale_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });
  await page.locator("#opt-sonde").check();
  await page.evaluate(() => { window.__test.regle(6, 21, 720);
                              window.__test.camera(0, 1.1, 60); });

  // la surface visée par le centre de l'écran, quelle que soit la zone
  const v = await page.evaluate(() => window.__test.viseCentre());
  expect(v, "une surface sous le centre de l'écran").not.toBeNull();
  const CIBLE = [v.x, v.y, v.z];
  const p = await page.evaluate((c) => window.__test.projette(...c), CIBLE);
  const r = await page.locator("sun-shading").boundingBox();
  expect(r.x, "l'hôte est décalé horizontalement").toBeGreaterThan(100);
  expect(r.y, "l'hôte est décalé verticalement").toBeGreaterThan(50);

  // clic RÉEL aux coordonnées fenêtre correspondantes
  await page.mouse.click(r.x + p.cx, r.y + p.cy);
  await expect(page.locator("#sonde-info"))
    .toHaveText(/Soleil direct|Aucun soleil/, { timeout: 90000 });

  const pt = await page.evaluate(() => window.__test.sondePoint());
  expect(pt, "la sonde a accroché un point").not.toBeNull();
  const ecart = Math.hypot(pt.x - CIBLE[0], pt.y - CIBLE[1], pt.z - CIBLE[2]);
  expect(ecart, `sonde en (${pt.x}, ${pt.y}, ${pt.z}) au lieu de ${CIBLE}`)
    .toBeLessThan(1.5);
});

test("navigation : le sens des commandes s'inverse et se mémorise", async ({ page }) => {
  // Constat d'usage : un visualiseur 3D fait tourner au premier doigt, une
  // application de cartographie déplace. Les deux écoles existent, et le
  // choix doit survivre au rechargement — sinon il est refait à chaque visite.
  await page.goto(serveur.page_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });
  await page.evaluate(() => window.__test.camera(0, 1.0, 400));

  const vue = () => page.evaluate(() => window.__test.vue());
  const glisse = async (bouton) => {
    const r = await page.locator("sun-shading").boundingBox();
    const [cx, cy] = [r.x + r.width / 2, r.y + r.height / 2];
    await page.mouse.move(cx, cy);
    await page.mouse.down({ button: bouton });
    await page.mouse.move(cx + 120, cy, { steps: 4 });
    await page.mouse.up({ button: bouton });
  };

  expect((await page.evaluate(() => window.__test.hote())).commandes).toBe("normales");
  const depart = await vue();
  await glisse("left");
  const apresGauche = await vue();
  expect(Math.abs(apresGauche.az - depart.az),
         "commandes normales : le clic gauche fait tourner").toBeGreaterThan(0.1);

  await page.locator("#opt-commandes").selectOption("inversees");
  const avant = await vue();
  await glisse("left");
  const apres = await vue();
  expect(Math.abs(apres.az - avant.az),
         "commandes inversées : le clic gauche ne tourne plus").toBeLessThan(0.01);
  expect(Math.hypot(apres.cible.x - avant.cible.x, apres.cible.y - avant.cible.y),
         "commandes inversées : le clic gauche déplace").toBeGreaterThan(1);

  // le réglage doit survivre au rechargement
  await page.reload();
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });
  expect((await page.evaluate(() => window.__test.hote())).commandes).toBe("inversees");
  await expect(page.locator("#opt-commandes")).toHaveValue("inversees");
});

test("panneau : le bouton de menu n'apparaît qu'en vue étroite", async ({ page }) => {
  // Un panneau plein écran sur téléphone masque la barre latérale de Home
  // Assistant : sans ce bouton, l'utilisateur ne peut plus en sortir.
  await page.goto(serveur.panneau_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });
  await expect(page.locator("#btn-menu")).toBeHidden();

  await page.evaluate(() => { document.getElementById("panneau").narrow = true; });
  await expect(page.locator("#btn-menu")).toBeVisible();

  // le clic doit émettre l'événement que le frontend de HA écoute
  const vu = await page.evaluate(async () => {
    const el = document.getElementById("panneau");
    const recu = new Promise((r) => document.addEventListener(
      "hass-toggle-menu", () => r(true), { once: true }));
    el.shadowRoot.getElementById("btn-menu").click();
    return Promise.race([recu, new Promise((r) => setTimeout(() => r(false), 500))]);
  });
  expect(vu, "l'événement hass-toggle-menu doit remonter hors du shadow DOM").toBe(true);

  await page.evaluate(() => { document.getElementById("panneau").narrow = false; });
  await expect(page.locator("#btn-menu")).toBeHidden();
});
