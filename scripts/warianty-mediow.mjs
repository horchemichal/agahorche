#!/usr/bin/env node
/**
 * Jednorazowe (i bezpieczne do powtorzenia) uzupelnienie wariantow dla zdjec
 * wgranych przez panel ZANIM upload zaczal je tworzyc sam. Uruchamiac w
 * kontenerze, bo tam jest wolumen z mediami:
 *   docker compose exec -T agahorche node - < scripts/warianty-mediow.mjs
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";

const sharp = createRequire(path.join(process.cwd(), "package.json"))("sharp");
const KATALOG = process.env.MEDIA_STORAGE_DIR || path.join(process.cwd(), "storage", "media");
const SZEROKOSCI = [480, 768, 1200];
const WARIANT = /-(480|768|1200)\.webp$/;
const plikMapy = path.join(KATALOG, "_warianty.json");

let mapa = {};
try { mapa = JSON.parse(await readFile(plikMapy, "utf8")); } catch { mapa = {}; }
let nowych = 0;
let przed = 0;
let mobilnie = 0;
for (const nazwa of (await readdir(KATALOG)).filter((n) => n.endsWith(".webp") && !WARIANT.test(n))) {
  const bajty = await readFile(path.join(KATALOG, nazwa));
  const meta = await sharp(bajty).metadata();
  if (!meta.width) continue;
  const baza = nazwa.replace(/\.webp$/, "");
  const v = [];
  for (const w of SZEROKOSCI) {
    if (w >= meta.width || `${baza}-${w}`.length > 80) continue;
    const out = await sharp(bajty).resize({ width: w }).webp({ quality: 74 }).toBuffer();
    await writeFile(path.join(KATALOG, `${baza}-${w}.webp`), out);
    if (w === 480) mobilnie += out.length;
    v.push(w);
  }
  if (!v.includes(480)) mobilnie += bajty.length;
  przed += bajty.length;
  if (!mapa[nazwa]) nowych++;
  mapa[nazwa] = { w: meta.width, h: meta.height, v };
}
await writeFile(plikMapy, JSON.stringify(mapa));
console.log(`media: ${Object.keys(mapa).length} zdjec (${nowych} nowych), pelne ${(przed / 1024).toFixed(0)} kB, na telefonie ${(mobilnie / 1024).toFixed(0)} kB`);
