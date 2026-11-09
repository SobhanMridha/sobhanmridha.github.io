// Static page generator: node build.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { pages } from "./src/pages.mjs";
import { layout } from "./src/templates.mjs";

for (const p of pages) {
  mkdirSync(dirname(p.file) || ".", { recursive: true });
  writeFileSync(p.file, layout(p));
  console.log("built", p.file);
}
