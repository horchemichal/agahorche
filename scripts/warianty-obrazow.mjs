#!/usr/bin/env node
/**
 * Generuje lzejsze warianty kazdego zdjecia w public/zdjecia i public/oferty
 * (Core Web Vitals). Telefon pobiera wariant 480 px zamiast pelnego pliku.
 *
 * Odpala sie samo przed `next build` (hook `prebuild` w package.json), wiec
 * kazde nowe zdjecie wrzucone do tych katalogow dostaje warianty bez
 * pamietania o tym. Pliki JPG/PNG sa konwertowane do WebP (oryginal zostaje,
 * ale strona i tak dostaje WebP przez srcSet). Skrypt jest idempotentny.
 */
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const KATALOGI = ["public/zdjecia", "public/oferty"];
const SZEROKOSCI = [480, 768, 1200];
const MAX_ORYGINAL = 1600;
const JAKOSC_WARIANTU = 74;
const JAKOSC_ORYGINALU = 80;
const WARIANT = /-(480|768|1200)\.webp$/;
const RASTER = /\.(webp|jpe?g|png|avif)$/i;

const manifest = {};
let przed = 0;
let po = 0;

for (const katalog of KATALOGI) {
  let pliki;
  try {
    pliki = await readdir(katalog);
  } catch {
    continue;
  }
  for (const nazwa of pliki.filter((n) => RASTER.test(n) && !WARIANT.test(n)).sort()) {
    const sciezka = path.join(katalog, nazwa);
    const surowe = await readFile(sciezka);
    let meta = await sharp(surowe).metadata();
    const jestWebp = nazwa.toLowerCase().endsWith(".webp");
    const baza = nazwa.replace(RASTER, "");
    let bajty = surowe;

    // Oryginal za szeroki albo nie-WebP: przytnij i przekoduj do WebP.
    if ((meta.width ?? 0) > MAX_ORYGINAL || !jestWebp) {
      bajty = await sharp(surowe)
        .rotate()
        .resize({ width: MAX_ORYGINAL, withoutEnlargement: true })
        .webp({ quality: JAKOSC_ORYGINALU })
        .toBuffer();
      if (jestWebp && bajty.length >= surowe.length) bajty = surowe;
      await writeFile(path.join(katalog, `${baza}.webp`), bajty);
      meta = await sharp(bajty).metadata();
    }
    przed += surowe.length;
    po += bajty.length;

    const dostepne = [];
    for (const w of SZEROKOSCI) {
      if (w >= (meta.width ?? 0)) continue;
      const out = await sharp(bajty).resize({ width: w }).webp({ quality: JAKOSC_WARIANTU }).toBuffer();
      await writeFile(path.join(katalog, `${baza}-${w}.webp`), out);
      dostepne.push(w);
    }
    const wpis = { w: meta.width, h: meta.height, v: dostepne, webp: `/${path.relative("public", path.join(katalog, baza + ".webp"))}` };
    manifest[`/${path.relative("public", sciezka)}`] = wpis;
  }
}

await mkdir("data", { recursive: true });
await writeFile("data/warianty-obrazow.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(
  `warianty-obrazow: ${Object.keys(manifest).length} zdjec, oryginaly ${(przed / 1024).toFixed(0)} kB -> ${(po / 1024).toFixed(0)} kB`,
);
