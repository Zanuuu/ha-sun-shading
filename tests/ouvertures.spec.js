// Contrat entre la page et l'intégration Home Assistant, vérifié contre un
// Home Assistant simulé : c'est le seul moyen de contrôler la charge utile du
// service AVANT de l'envoyer à une instance en production.
//
// Vérifie aussi la dégradation : sans session HA, la fonction n'apparaît pas
// et la page ne tente aucun appel.
const { test, expect } = require("@playwright/test");
const { sert } = require("./serveur");

let serveur = null;
// Le volet et le point sondé viennent de la zone : son ouvertures.json, ou à
// défaut un volet fictif et la surface visée par le centre de l'écran.
let VOLET = "cover.salon_fenetre", NOM = "Fenêtre du salon", ID = "salon_fenetre";
let VOLETS_DEPOT = [];
let POINT = null;
let ETATS = [];

test.beforeAll(async () => {
  serveur = await sert();
  const z = serveur.zone.ouvertures;
  VOLETS_DEPOT = z.volets.map((v) => v.volet).sort();
  if (z.volets.length) { VOLET = z.volets[0].volet; NOM = z.volets[0].nom; }
  ID = VOLET.split(".")[1];
  const o = z.ouvertures[0];
  if (o) POINT = [o.x, o.y, o.z, o.nx, o.ny, o.nz];
  ETATS = [
    { entity_id: VOLET, state: "open", attributes: { friendly_name: "Nom HA" } },
    { entity_id: "cover.autre_volet", state: "open",
      attributes: { friendly_name: "Autre volet" } },
    // volet absent d'ouvertures.json : il doit s'ajouter à la liste du dépôt
    { entity_id: "cover.garage", state: "closed",
      attributes: { friendly_name: "Garage" } },
    { entity_id: "sensor.autre_chose", state: "12", attributes: {} },
  ];
});
test.afterAll(async () => { if (serveur) await serveur.ferme(); });

/* Pose la sonde : sur le point de référence de la zone, sinon sur la surface
   sous le centre de l'écran. */
async function poseSonde(page, evaluer = (fn, arg) => page.evaluate(fn, arg)) {
  if (POINT) return evaluer((p) => window.__test.sondeEn(...p), POINT);
  return evaluer(() => {
    const v = window.__test.viseCentre();
    return window.__test.sondeEn(v.x, v.y, v.z, 0, 0, 1);
  });
}

const SERVICES = [
  { domain: "light", services: { turn_on: {} } },
  { domain: "sun_shading",
    services: { set_opening: {}, remove_opening: {} } },
];

async function simuleHA(page, surAppel, etats) {
  await page.addInitScript(() => {
    localStorage.setItem("hassTokens", JSON.stringify({
      access_token: "jeton-de-test", token_type: "Bearer",
      expires: Date.now() + 3600000, clientId: "http://exemple/",
    }));
  });
  await page.route("**/api/states", (route) =>
    route.fulfill({ json: etats || ETATS }));
  await page.route("**/api/services", (route) =>
    route.fulfill({ json: SERVICES }));
  await page.route("**/api/services/sun_shading/**", (route) => {
    surAppel(route.request().postDataJSON(),
             route.request().headers().authorization);
    route.fulfill({ json: [] });
  });
}

test("ouvertures : hors Home Assistant, la fonction reste invisible", async ({ page }) => {
  const horsOrigine = [];
  page.on("request", (r) => {
    if (!r.url().startsWith(serveur.origine) && !r.url().startsWith("data:")) {
      horsOrigine.push(r.url());
    }
  });
  await page.goto(serveur.page_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });
  const ha = await page.evaluate(() => window.__test.ha());
  expect(ha.session).toBe(false);
  expect(ha.dispo).toBe(false);
  expect(ha.visible, "le réglage ne doit pas s'afficher sans HA").toBe(false);
  await expect(page.locator("#ouvertures")).toBeHidden();
  expect(horsOrigine).toEqual([]);
});

test("ouvertures : publication du masque dans Home Assistant", async ({ page }) => {
  test.setTimeout(180000); // deux masques à calculer, ~1400 rayons par azimut
  let charge = null, autorisation = null;
  await simuleHA(page, (c, a) => { charge = c; autorisation = a; });

  await page.goto(serveur.page_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });
  await page.waitForFunction(() => window.__test.ha().dispo, null,
                             { timeout: 30000 });
  expect(await page.evaluate(() => window.__test.ha().visible)).toBe(true);

  // l'autocomplétion propose les volets du dépôt, complétés par ceux vus en
  // direct ; les entités d'un autre domaine sont écartées
  const volets = await page.locator("#liste-volets option")
    .evaluateAll((os) => os.map((o) => o.value));
  const attendus = new Set([...VOLETS_DEPOT, VOLET, "cover.autre_volet", "cover.garage"]);
  expect(volets.sort()).toEqual([...attendus].sort());
  if (VOLETS_DEPOT.length) {
    // le nom du dépôt fait foi : c'est lui qui détermine l'entity_id du capteur
    const nom = await page.locator(`#liste-volets option[value='${VOLET}']`)
      .getAttribute("label");
    expect(nom).toBe(NOM);
  }

  // sondeEn pose le point sans ouvrir le panneau (c'est sondeClic qui le fait
  // au clic) : on l'ouvre ici, le bloc d'association y est déjà démasqué
  await poseSonde(page);
  await page.locator("#sonde").evaluate((el) => { el.hidden = false; });
  await expect(page.locator("#sonde-assoc")).toBeVisible();
  await page.fill("#sonde-volet", VOLET);
  await page.fill("#sonde-nom", NOM);
  await page.click("#sonde-enregistrer");
  await expect(page.locator("#sonde-assoc-etat"))
    .toContainText(/Publié/, { timeout: 150000 });

  expect(autorisation).toBe("Bearer jeton-de-test");
  expect(charge.id).toBe(ID);
  expect(charge.name).toBe(NOM);
  expect(charge.cover).toBe(VOLET);
  expect(charge.azimuth_step).toBe(1);
  expect(charge.threshold).toBe(0.5);
  // les bornes de feuillaison voyagent : l'intégration n'implémente que la
  // forme de la courbe, pas ses dates
  expect(charge.foliation).toEqual([90, 120, 288, 320]);
  const pt = await page.evaluate(() => window.__test.sondePoint());
  expect(charge.point.map((v) => Math.round(v * 1000)))
    .toEqual([pt.x, pt.y, pt.z].map((v) => Math.round(v * 1000)));
  expect(charge.normal.map((v) => Math.round(v * 1000)))
    .toEqual([pt.nx, pt.ny, pt.nz].map((v) => Math.round(v * 1000)));
  for (const saison of ["leafy", "bare"]) {
    expect(charge[saison], saison).toHaveLength(360);
    for (const b of charge[saison]) {
      expect(b).toHaveLength(2);
      expect(b[0]).toBeGreaterThanOrEqual(0);
      expect(b[1]).toBeLessThanOrEqual(90);
      expect(b[0]).toBeLessThanOrEqual(b[1]);
    }
  }
});

test.describe.configure({ timeout: 180000 });

test("ouvertures : sans volet dans la réponse, la saisie directe reste possible",
  async ({ page }) => {
    // cas rencontré en production : /api/services répond, mais /api/states ne
    // ramène aucun cover. Le champ ne doit pas rester vide et muet.
    let charge = null;
    await simuleHA(page, (c) => { charge = c; },
                   [{ entity_id: "sensor.rien", state: "1", attributes: {} }]);
    await page.goto(serveur.page_url);
    await page.waitForFunction(() => window.__test && window.__test.pret, null,
                               { timeout: 120000 });
    await page.waitForFunction(() => window.__test.ha().dispo, null,
                               { timeout: 30000 });
    const ha = await page.evaluate(() => window.__test.ha());
    expect(ha.direct, "aucun volet en direct").toBe(0);
    expect(ha.covers, "la liste du dépôt prend le relais").toBe(VOLETS_DEPOT.length);
    expect(ha.nEtats).toBe(1);
    await expect(page.locator("#sonde-assoc-etat"))
      .toContainText("Liste du dépôt (1 entités lues");
    // la saisie manuelle de l'entity_id doit rester praticable
    await poseSonde(page);
    await page.locator("#sonde").evaluate((el) => { el.hidden = false; });
    await page.fill("#sonde-volet", VOLET);
    await page.fill("#sonde-nom", NOM);
    await page.click("#sonde-enregistrer");
    await expect(page.locator("#sonde-assoc-etat"))
      .toContainText(/Publié/, { timeout: 150000 });
    expect(charge.cover).toBe(VOLET);
    expect(charge.id).toBe(ID);
  });

test("ouvertures : en iframe, tout passe par l'objet hass du parent", async ({ page }) => {
  test.setTimeout(180000);
  // Aucun jeton n'est posé : ce chemin ne doit dépendre ni de
  // localStorage.hassTokens ni de l'API REST — tous deux pris en défaut dans
  // l'application compagnon iOS (01/09/2026).
  const etats = {};
  for (const e of ETATS) etats[e.entity_id] = e;
  const url = `${serveur.parent_url}?etats=${encodeURIComponent(JSON.stringify(etats))}`;
  const restAppelee = [];
  await page.route("**/api/**", (route) => {
    restAppelee.push(route.request().url());
    route.fulfill({ status: 500, json: {} });
  });

  await page.goto(url);
  const carte = page.frameLocator("#carte");
  await page.waitForFunction(
    () => { const f = document.querySelector("#carte").contentWindow;
            return f.__test && f.__test.pret; }, null, { timeout: 120000 });
  const ha = await page.evaluate(
    () => document.querySelector("#carte").contentWindow.__test.ha());
  expect(ha.parent, "l'objet hass du parent doit être trouvé").toBe(true);
  expect(ha.session, "aucun jeton n'a été posé").toBe(false);
  expect(ha.voie).toBe("iframe");
  expect(ha.dispo).toBe(true);
  expect(ha.direct).toBe(3);

  await poseSonde(page, (fn, arg) => page.evaluate(
    ([src, a]) => new Function("window", "arg", `return (${src})(arg)`)(
      document.querySelector("#carte").contentWindow, a),
    [fn.toString(), arg]));
  await carte.locator("#sonde").evaluate((el) => { el.hidden = false; });
  await carte.locator("#sonde-volet").fill(VOLET);
  await carte.locator("#sonde-nom").fill(NOM);
  await carte.locator("#sonde-enregistrer").click();
  await expect(carte.locator("#sonde-assoc-etat"))
    .toContainText(/Publié/, { timeout: 150000 });

  const appels = await page.evaluate(() => window.__appels);
  expect(appels).toHaveLength(1);
  expect(appels[0].domaine).toBe("sun_shading");
  expect(appels[0].service).toBe("set_opening");
  expect(appels[0].donnees.id).toBe(ID);
  expect(appels[0].donnees.leafy).toHaveLength(360);
  expect(restAppelee, "aucun appel REST ne doit être tenté").toEqual([]);
});

test("ouvertures : en panneau, hass arrive en propriété de l'élément", async ({ page }) => {
  test.setTimeout(180000);
  // Ce que fait panel_custom : l'élément reçoit hass en propriété. C'est le
  // contrat documenté, là où l'iframe fouille le DOM du parent et où le jeton
  // dépend d'un localStorage que l'application compagnon iOS ne tient pas.
  const etats = {};
  for (const e of ETATS) etats[e.entity_id] = e;
  const url = `${serveur.panneau_url}?etats=${encodeURIComponent(JSON.stringify(etats))}`;
  const restAppelee = [];
  await page.route("**/api/**", (route) => {
    restAppelee.push(route.request().url());
    route.fulfill({ status: 500, json: {} });
  });

  await page.goto(url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });
  await page.waitForFunction(() => window.__test.ha().dispo, null,
                             { timeout: 30000 });
  const ha = await page.evaluate(() => window.__test.ha());
  expect(ha.voie, "la voie panneau prime sur les autres").toBe("panneau");
  expect(ha.session, "aucun jeton n'a été posé").toBe(false);
  expect(ha.direct).toBe(3);
  // les données ont été trouvées par panel.config.data, pas à côté du module
  const z = await page.evaluate(() => window.__test.zone());
  expect(z.base).toContain("/sun_shading/data/");

  // « auto » doit suivre le thème de Home Assistant, ici sombre
  await expect(page.locator("sun-shading"))
    .toHaveAttribute("data-theme", "dark");

  await poseSonde(page);
  await page.locator("#sonde").evaluate((el) => { el.hidden = false; });
  await page.locator("#sonde-volet").fill(VOLET);
  await page.locator("#sonde-nom").fill(NOM);
  await page.locator("#sonde-enregistrer").click();
  await expect(page.locator("#sonde-assoc-etat"))
    .toContainText(/Publié/, { timeout: 150000 });

  const appels = await page.evaluate(() => window.__appels);
  expect(appels).toHaveLength(1);
  expect(appels[0].service).toBe("set_opening");
  expect(appels[0].donnees.leafy).toHaveLength(360);
  expect(restAppelee, "aucun appel REST ne doit être tenté").toEqual([]);
});
