#!/usr/bin/env node
/**
 * content/poradniki/*.md -> data/poradniki.generated.json (prebuild).
 * Plik .md: na górze obiekt JSON (metadane), potem linia "---", potem treść
 * w składni SimpleContent (## nagłówki, listy "- ", tabele "|", [link](/sciezka), **pogrubienie**).
 */
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const KATALOG = "content/poradniki";
const wynik = [];
let pliki = [];
try {
  pliki = (await readdir(KATALOG)).filter((n) => n.endsWith(".md")).sort();
} catch {
  pliki = [];
}
for (const f of pliki) {
  const t = (await readFile(path.join(KATALOG, f), "utf8")).replace(/\r\n/g, "\n");
  const i = t.indexOf("\n---\n");
  if (i < 0) throw new Error(f + ": brak separatora ---");
  let meta;
  try {
    meta = JSON.parse(t.slice(0, i));
  } catch (e) {
    throw new Error(f + ": błędny JSON nagłówka: " + e.message);
  }
  for (const k of ["slug", "path", "seoTitle", "seoDescription", "h1", "lead", "published", "updated", "breadcrumbs"]) {
    if (!meta[k]) throw new Error(f + ": brak pola " + k);
  }
  wynik.push({ ...meta, body: t.slice(i + 5).trim() });
}
const sciezki = new Set();
for (const p of wynik) {
  if (sciezki.has(p.path)) throw new Error("zdublowana ścieżka " + p.path);
  sciezki.add(p.path);
}
await mkdir("data", { recursive: true });
await writeFile("data/poradniki.generated.json", JSON.stringify(wynik, null, 1) + "\n");
console.log("poradniki: " + wynik.length + " stron");
