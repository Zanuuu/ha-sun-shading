// Serveur HTTP local sur le dist/ d'une zone, comme le fait Home Assistant :
// partagé par les vérifications automatisées et par le calcul des masques.
const path = require("path");
const http = require("http");
const fs = require("fs");

const RACINE = path.resolve(__dirname, "..");
const ZONES = path.join(RACINE, "zones");

/* Même résolution que sources/zone.py : --zone <nom|chemin>, sinon $ZONE,
   sinon l'unique zone de zones/. */
function resoutZone(spec) {
  spec = spec || process.env.ZONE;
  let chemin;
  if (spec) {
    chemin = fs.existsSync(path.join(spec, "zone.json")) ? path.resolve(spec)
      : path.join(ZONES, spec);
  } else {
    const presentes = fs.existsSync(ZONES)
      ? fs.readdirSync(ZONES).filter((d) => fs.existsSync(path.join(ZONES, d, "zone.json")))
      : [];
    if (presentes.length !== 1) {
      throw new Error(`préciser la zone (ZONE=<nom>) ; présentes : ${presentes.join(", ") || "aucune"}`);
    }
    chemin = path.join(ZONES, presentes[0]);
  }
  const cfg = JSON.parse(fs.readFileSync(path.join(chemin, "zone.json")));
  const nom = cfg.nom || path.basename(chemin);
  const ouvertures = path.join(chemin, "ouvertures.json");
  return {
    nom, chemin, cfg,
    dist: path.join(chemin, "dist"),
    page: `sun-shading-${nom}.html`,
    masques: path.join(chemin, "masques", `${nom}.json`),
    ouvertures: fs.existsSync(ouvertures) ? JSON.parse(fs.readFileSync(ouvertures))
      : { ouvertures: [], volets: [] },
  };
}

/* Home Assistant sert les données sous un chemin de l'intégration alors que le
   panneau vit à l'URL /sun-shading : les assets ne sont PAS à côté du
   document. Les hôtes de test reproduisent cet écart — sans lui, tout se
   résout à la racine et un chemin relatif faux passe inaperçu. */
const PREFIXE = "/sun_shading/data/";
const TYPES = {
  ".html": "text/html; charset=utf-8",
  // sans ce type, un <script type="module"> est refusé par le navigateur
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".gz": "application/gzip",
  ".webp": "image/webp",
};

const HASS = (etats) => `{
  states: ${JSON.stringify(etats)},
  themes: { darkMode: true },
  services: { light: { turn_on: {} },
              sun_shading: { set_opening: {}, remove_opening: {} } },
  callService(domaine, service, donnees) {
    window.__appels.push({ domaine, service, donnees });
    return Promise.resolve();
  },
}`;

/* Page parente de test : imite l'interface Home Assistant qui embarque la
   carte en iframe. Servie depuis la même origine, elle permet de vérifier le
   chemin privilégié — l'objet `hass` du parent — sans jeton ni REST. */
function pageParente(page, etats) {
  return `<!doctype html><meta charset="utf-8"><title>HA</title>
<home-assistant></home-assistant>
<iframe id="carte" src="/${page}" style="width:1000px;height:800px;border:0"></iframe>
<script>
window.__appels = [];
document.querySelector("home-assistant").hass = ${HASS(etats)};
<\/script>`;
}

/* Hôte de test du panneau : ce que fait panel_custom — importer panel.js,
   créer l'élément, lui poser `panel` (dont config.data : où sont les
   données) et `hass` en propriétés, puis l'insérer. Aucun jeton, aucune API
   REST. Le module est importé depuis un AUTRE chemin que les données : c'est
   config.data qui doit les faire trouver, pas import.meta.url. */
function pageHote(etats) {
  return `<!doctype html><meta charset="utf-8"><title>Panneau</title>
<style>html,body{height:100%;margin:0}sun-shading{display:block;height:100%}</style>
<script type="module">
import "/__frontend/panel.js";
window.__appels = [];
const el = document.createElement("sun-shading");
el.id = "panneau";
el.panel = { config: { data: "${PREFIXE}" } };
el.hass = ${HASS(etats)};
document.body.appendChild(el);
<\/script>`;
}

/* Hôte dépouillé : l'élément dans un conteneur SANS hauteur définie, comme
   peut l'être celui d'un panneau Home Assistant. La carte doit s'y afficher
   quand même — sinon elle se monte parfaitement et reste invisible. */
function pageNue() {
  return `<!doctype html><meta charset="utf-8"><title>Hôte nu</title>
<div><sun-shading></sun-shading></div>
<script type="module" src="${PREFIXE}panel.js"><\/script>`;
}

/* Hôte DÉCALÉ : la carte n'occupe pas le coin haut-gauche de la fenêtre, comme
   dans un panneau Home Assistant (en-tête au-dessus, barre latérale à gauche).
   C'est ce qui met à l'épreuve la conversion des coordonnées de pointeur. */
function pageDecalee() {
  return `<!doctype html><meta charset="utf-8"><title>Hôte décalé</title>
<style>
  html,body{height:100%;margin:0}
  #entete{height:64px;background:#333}
  #corps{display:flex;height:calc(100% - 64px)}
  #barre{width:200px;background:#444}
  #zone{flex:1;min-width:0}
  sun-shading{display:block;height:100%}
</style>
<div id="entete"></div>
<div id="corps"><div id="barre"></div>
  <div id="zone"><sun-shading></sun-shading></div></div>
<script type="module" src="${PREFIXE}panel.js"><\/script>`;
}

async function sert(zone = resoutZone()) {
  const racine = zone.dist;
  if (!fs.existsSync(path.join(racine, zone.page))) {
    throw new Error(`${zone.page} absent de ${racine} : lancer python3 sources/build.py --zone ${zone.nom}`);
  }
  const serveur = http.createServer((req, res) => {
    const route = req.url.split("?")[0];
    const html = (corps) => {
      res.writeHead(200, { "Content-Type": TYPES[".html"] });
      res.end(corps);
    };
    if (route === "/__decale.html") return html(pageDecalee());
    if (route === "/__nu.html") return html(pageNue());
    if (route === "/__panneau.html" || route === "/__parent.html") {
      // les états voyagent dans l'URL : pas de course avec l'iframe
      const q = new URL(req.url, "http://x").searchParams.get("etats");
      const etats = q ? JSON.parse(q) : {};
      return html(route === "/__panneau.html" ? pageHote(etats)
        : pageParente(zone.page, etats));
    }
    let chemin = decodeURIComponent(route);
    // le module du panneau est servi ailleurs que les données, comme dans HA
    if (chemin === "/__frontend/panel.js") chemin = "/panel.js";
    if (chemin.startsWith(PREFIXE)) chemin = chemin.slice(PREFIXE.length - 1);
    const f = path.join(racine, chemin.slice(1));
    fs.readFile(f, (err, data) => {
      if (err) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" });
      res.end(data);
    });
  });
  await new Promise((r) => serveur.listen(0, "127.0.0.1", r));
  const origine = `http://127.0.0.1:${serveur.address().port}`;
  return {
    origine,
    zone,
    page_url: `${origine}/${zone.page}`,
    parent_url: `${origine}/__parent.html`,
    panneau_url: `${origine}/__panneau.html`,
    nu_url: `${origine}/__nu.html`,
    decale_url: `${origine}/__decale.html`,
    ferme: () => new Promise((r) => serveur.close(r)),
  };
}

module.exports = { sert, resoutZone, PREFIXE };
