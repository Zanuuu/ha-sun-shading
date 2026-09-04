// Cohérence du masque d'horizon avec la sonde de la page.
//
// Les deux sortent du même code (sondeur), donc ce test ne compare pas deux
// implémentations : il vérifie la REPRÉSENTATION. Un masque réduit chaque
// azimut à une bande [elMin, elMax] ; ce que cette réduction perd — bande
// fragmentée, frontière mal encadrée par le balayage grossier — ne se voit
// qu'en rejouant une journée entière contre la frise minute par minute.
const { test, expect } = require("@playwright/test");
const fs = require("fs");
const { sert } = require("./serveur");
const { creneauxDe, decrisCreneaux } = require("../sources/masque_horizon");

let serveur = null;
let MASQUES = null;

test.beforeAll(async () => { serveur = await sert(); MASQUES = serveur.zone.masques; });
test.afterAll(async () => { if (serveur) await serveur.ferme(); });

// 21 juin : feuillaison pleine (facteur 1) → masque d'été.
// 21 décembre : feuillus nus (facteur 0) → masque d'hiver.
// Les équinoxes sont évités : la frise y interpole l'extinction, le masque non.
const DATES = [[6, 21, "ete"], [12, 21, "hiver"]];

test("masques : créneaux du masque conformes à la frise de la sonde", async ({ page }) => {
  test.skip(!fs.existsSync(MASQUES),
            `${MASQUES} absent : lancer node sources/masque_horizon.js`);
  const m = JSON.parse(fs.readFileSync(MASQUES));

  await page.goto(serveur.page_url);
  await page.waitForFunction(() => window.__test && window.__test.pret, null,
                             { timeout: 120000 });

  for (const [id, o] of Object.entries(m.ouvertures)) {
    await page.evaluate((p) => window.__test.sondeEn(...p),
                        [...o.point, ...o.normale]);
    for (const [mois, jour, saison] of DATES) {
      await page.evaluate(([mo, jo]) => {
        window.__test.regle(mo, jo, 720);
        window.__test.calculeSonde();
      }, [mois, jour]);
      const fractions = await page.waitForFunction(
        () => window.__test.fractions(), null, { timeout: 120000 })
        .then((h) => h.jsonValue());

      // frise : une minute compte pour du soleil direct au même seuil que le masque
      const frise = [];
      let debut = null;
      for (let i = 0; i < fractions.length; i++) {
        const au = fractions[i] >= m.seuil;
        if (au && debut === null) debut = i;
        if (!au && debut !== null) { frise.push([debut, i - 1]); debut = null; }
      }
      if (debut !== null) frise.push([debut, fractions.length - 1]);

      const course = await page.evaluate(([mo, jo]) => window.__test.soleilJour(mo, jo),
                                         [mois, jour]);
      const duMasque = creneauxDe(o[saison], course, m.pas_azimut);

      // on compare les bornes du créneau utile (premier début, dernier fin) :
      // les micro-trous d'une seconde d'arbre ne sont pas l'objet du test
      const bornes = (c) => (c.length ? [c[0][0], c[c.length - 1][1]] : null);
      const a = bornes(frise), b = bornes(duMasque);
      const contexte = `${id} / ${saison} — frise ${decrisCreneaux(frise)}`
        + ` vs masque ${decrisCreneaux(duMasque)}`;
      expect(a === null, contexte).toBe(b === null);
      if (a) {
        expect(Math.abs(a[0] - b[0]), contexte).toBeLessThanOrEqual(4);
        expect(Math.abs(a[1] - b[1]), contexte).toBeLessThanOrEqual(4);
      }
    }
  }
});
