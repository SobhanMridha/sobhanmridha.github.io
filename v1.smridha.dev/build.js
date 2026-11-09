// Static site generator: `node build.js` renders src/pages.js into the HTML files.
const fs = require("fs");
const path = require("path");
const { layout } = require("./src/layout");
const pages = require("./src/pages");

for (const p of pages) {
  const file = path.join(__dirname, p.out);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, layout(p));
  console.log("built", p.out);
}
