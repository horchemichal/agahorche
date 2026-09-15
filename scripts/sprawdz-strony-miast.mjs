import { readFileSync, readdirSync } from "node:fs";
import { basename } from "node:path";

// UZYCIE:
//   node qa.mjs                      -> sprawdza WSZYSTKIE pliki miast
//   node qa.mjs a.ts b.ts            -> sprawdza tylko podane
//   node qa.mjs data/.../lipno.ts    -> sciezki tez dzialaja
//
// ⚠ POPRAWKA 2026-09-15: poprzednia wersja IGNOROWALA argumenty i zawsze
//   sprawdzala zaszyta liste dziesieciu plikow. Pliki przekazywane z linii
//   polecen NIE BYLY sprawdzane. Teraz argumenty dzialaja, a brak argumentow
//   oznacza pelny przemiat katalogu.

const DIR = "data/locations/cities";
const wszystkie = readdirSync(DIR).filter(
  (f) => f.endsWith(".ts") && f !== "index.ts" && f !== "wspolne.ts",
);

const args = process.argv.slice(2).map((a) => basename(a).replace(/\.ts$/, ""));
const CEL = args.length ? args : wszystkie.map((f) => f.replace(/\.ts$/, ""));

let bledy = 0;
let ostrzezenia = 0;
const zdaniaWszystkie = new Map();

function paragrafy(t) {
  const out = [];
  const re = /"((?:[^"\\]|\\.){60,})"/g;
  let m;
  while ((m = re.exec(t))) out.push(m[1]);
  return out;
}

// indeks zdan autorskich ze WSZYSTKICH plikow
for (const f of wszystkie) {
  const slug = f.replace(/\.ts$/, "");
  const t = readFileSync(`${DIR}/${f}`, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  for (const p of paragrafy(t)) {
    for (const z of p.split(/(?<=[.?!])\s+/)) {
      if (z.length < 70) continue;
      if (!zdaniaWszystkie.has(z)) zdaniaWszystkie.set(z, new Set());
      zdaniaWszystkie.get(z).add(slug);
    }
  }
}

// slugi i geo z calego katalogu — do wykrywania duplikatow
const slugi = new Map();
const geo = new Map();
for (const f of wszystkie) {
  const slug = f.replace(/\.ts$/, "");
  const raw = readFileSync(`${DIR}/${f}`, "utf8");
  const s = raw.match(/slug: "([^"]+)"/);
  if (s) {
    if (!slugi.has(s[1])) slugi.set(s[1], []);
    slugi.get(s[1]).push(slug);
  }
  const g = raw.match(/geo: \{ lat: ([-\d.]+), lng: ([-\d.]+) \}/);
  if (g) {
    const k = `${g[1]},${g[2]}`;
    if (!geo.has(k)) geo.set(k, []);
    geo.get(k).push(slug);
  }
}

const WSPOLNE = new Set([
  "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję.",
]);

for (const slug of CEL) {
  const plik = `${DIR}/${slug}.ts`;
  let raw;
  try {
    raw = readFileSync(plik, "utf8");
  } catch {
    console.log("  ✗", slug, "PLIK NIE ISTNIEJE");
    bledy++;
    continue;
  }
  const t = raw.replace(/\/\*[\s\S]*?\*\//g, "");
  const say = (m) => {
    console.log("  ✗", slug, m);
    bledy++;
  };
  const warn = (m) => {
    console.log("  ~", slug, m);
    ostrzezenia++;
  };

  // --- NOWE: cyrylica w calym pliku (takze w komentarzu) ---
  const cyr = [...new Set(raw.match(/[Ѐ-ӿ]/g) || [])];
  if (cyr.length) say("CYRYLICA w pliku: " + cyr.join(""));

  // --- NOWE: inne podejrzane znaki niealfabetyczne ---
  const greka = [...new Set(raw.match(/[Ͱ-Ͽ]/g) || [])];
  if (greka.length) warn("znaki greckie: " + greka.join(""));

  if (!new RegExp(`slug: "${slug}"`).test(t)) say("slug niezgodny z nazwa pliku");
  if (/\*\*/.test(t)) say("markdown ** w tresci");

  // cudzyslowy: zamykajacy musi byc ” a nie "
  for (const m of t.matchAll(/„[^"”]{1,120}"/g))
    say("zly cudzyslow zamykajacy: " + m[0].slice(0, 50));

  // --- NOWE: osierocony ” bez otwierajacego „ w tej samej linii ---
  for (const linia of t.split("\n")) {
    const otw = (linia.match(/„/g) || []).length;
    const zam = (linia.match(/”/g) || []).length;
    if (otw !== zam && (otw || zam))
      warn("niezbilansowane cudzyslowy w linii: " + linia.trim().slice(0, 60));
  }

  // id sekcji ASCII i unikalne
  const ids = [...t.matchAll(/^\s+id: "([^"]+)"/gm)].map((m) => m[1]);
  const zle = ids.filter((i) => !/^[a-z0-9-]+$/.test(i));
  if (zle.length) say("id nie-ASCII: " + zle.join(","));
  const dup = ids.filter((i, n) => ids.indexOf(i) !== n);
  if (dup.length) say("powtorzone id: " + dup.join(","));

  // --- NOWE: wymagane pola ---
  for (const pole of ["h1", "seoTitle", "seoDescription", "lead", "geo"])
    if (!new RegExp(`\\b${pole}:`).test(t)) say("brak pola " + pole);

  // seoTitle / seoDescription
  const st = t.match(/seoTitle:\s*\n?\s*"([^"]+)"/);
  if (st && st[1].length > 60) say(`seoTitle ${st[1].length} znakow: ${st[1]}`);
  const sd = t.match(/seoDescription:\s*\n?\s*"([^"]+)"/);
  if (sd && sd[1].length > 170) say(`seoDescription ${sd[1].length} znakow — ZA DLUGI`);
  else if (sd && sd[1].length < 105)
    warn(`seoDescription ${sd[1].length} znakow — krotszy niz optimum (105-170)`);

  // --- NOWE: duplikat slug w katalogu ---
  const s = t.match(/slug: "([^"]+)"/);
  if (s && slugi.get(s[1])?.length > 1)
    say("slug uzyty takze w: " + slugi.get(s[1]).filter((x) => x !== slug).join(","));

  // --- NOWE: duplikat wspolrzednych ---
  const g = raw.match(/geo: \{ lat: ([-\d.]+), lng: ([-\d.]+) \}/);
  if (g) {
    const k = `${g[1]},${g[2]}`;
    // miasto i okalajaca je gmina wiejska maja te sama siedzibe, wiec
    // identyczne wspolrzedne sa POPRAWNE (np. gorlice / gorlice-gmina)
    const rdzen = slug.replace(/-gmina$/, "");
    const inne = (geo.get(k) || [])
      .filter((x) => x !== slug)
      .filter((x) => x.replace(/-gmina$/, "") !== rdzen);
    if (inne.length) say("identyczne geo co: " + inne.join(","));
    const lat = parseFloat(g[1]);
    const lng = parseFloat(g[2]);
    if (lat < 49 || lat > 55 || lng < 14 || lng > 24.2)
      say(`geo poza granicami Polski: ${lat},${lng}`);
  } else {
    say("brak lub nietypowy zapis geo");
  }

  // --- NOWE: miasto we wlasnym nearbyTowns ---
  const h1 = t.match(/h1: "Thermomix ([^–]+) –/);
  const nt = t.match(/nearbyTowns: \[([^\]]*)\]/s);
  if (h1 && nt) {
    const miasto = h1[1].trim();
    if (new RegExp(`"${miasto}"`).test(nt[1]))
      say(`miasto "${miasto}" jest we wlasnym nearbyTowns`);
  }

  // --- NOWE: telefon spojny ---
  const tel = [...new Set([...raw.matchAll(/\b(\d{3} \d{3} \d{3})\b/g)].map((m) => m[1]))];
  const zlyTel = tel.filter((x) => x !== "517 185 691");
  if (zlyTel.length) warn("inny numer telefonu: " + zlyTel.join(","));

  // powtorzone zdania autorskie
  for (const p of paragrafy(t)) {
    for (const z of p.split(/(?<=[.?!])\s+/)) {
      if (z.length < 70) continue;
      const gdzie = zdaniaWszystkie.get(z);
      if (gdzie && gdzie.size > 1 && !WSPOLNE.has(z)) {
        const inne = [...gdzie].filter((x) => x !== slug);
        if (gdzie.size <= 2 && !/^Danie przygotowane|^Obiad musi tu powstać/.test(z))
          say("zdanie powtorzone z [" + inne.join(",") + "]: " + z.slice(0, 70));
      }
    }
  }
}

console.log(
  `\nQA: sprawdzono ${CEL.length} plikow — ` +
    (bledy === 0 ? "0 bledow" : `${bledy} BLEDOW`) +
    `, ${ostrzezenia} ostrzezen`,
);
