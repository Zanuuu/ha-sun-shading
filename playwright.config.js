const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "tests",
  timeout: 90000,
  // WebGL2 requis : le rendu logiciel SwiftShader du chromium de Playwright suffit
  use: { headless: true },
});
