#!/usr/bin/env node
/**
 * Strażnik treści stron lokalnych.
 *
 * Dwa błędy złapały nas już po dwa razy każdy i oba przechodzą przez
 * code review niezauważone, bo wyglądają niewinnie w edytorze:
 *
 * 1. NIEDOMKNIĘTY CUDZYSŁÓW POLSKI. Zapis „jak będzie czas" — otwierający
 *    typograficzny, zamykający ASCII — kończy string JavaScriptu w losowym
 *    miejscu. Efektem jest kaskada kilkunastu błędów TS1005/TS1002 wskazujących
 *    na zupełnie inne linie niż ta z usterką. Zdarzyło się przy Wolbromiu
 *    i przy Tomicach.
 *
 * 2. MARKDOWNOWE POGRUBIENIE W `paragraphs`. Komponent
 *    `components/ui/simple-content.tsx` renderuje akapity jako czysty tekst —
 *    celowo, bez `dangerouslySetInnerHTML`, żeby nie otwierać XSS. Zapis
 *    **tak** wyświetli się użytkownikowi dosłownie, z gwiazdkami. Zdarzyło się
 *    przy Tomicach i przy Spytkowicach.
 *
 * Uruchomienie:
 *   node scripts/sprawdz-tresc-lokalna.mjs
 *
 * Kod wyjścia 1, gdy cokolwiek znaleziono — nadaje się do pre-commita i CI.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const KATALOG = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "data",
  "locations",
  "cities",
);

/** Usuwa komentarze blokowe, żeby `/** …` nie udawało pogrubienia. */
function bezKomentarzy(tekst) {
  // Zachowujemy znaki nowej linii, żeby numeracja linii się nie rozjechała.
  return tekst.replace(/\/\*[\s\S]*?\*\//g, (m) =>
    m.replace(/[^\n]/g, " "),
  );
}

const znaleziska = [];

for (const plik of readdirSync(KATALOG).filter((n) => n.endsWith(".ts"))) {
  if (plik === "index.ts" || plik === "wspolne.ts") continue;

  const surowy = readFileSync(join(KATALOG, plik), "utf8");
  const tresc = bezKomentarzy(surowy);
  const linie = tresc.split("\n");

  // --- 1. cudzysłowy ---
  // Liczymy globalnie w pliku: każdy „ musi mieć swoje ”.
  const otwarte = (tresc.match(/„/g) ?? []).length;
  const zamkniete = (tresc.match(/”/g) ?? []).length;

  if (otwarte !== zamkniete) {
    // Wskazujemy linie, w których „ nie doczekało się ” do końca linii.
    linie.forEach((linia, i) => {
      const o = (linia.match(/„/g) ?? []).length;
      const z = (linia.match(/”/g) ?? []).length;
      if (o !== z) {
        znaleziska.push({
          plik,
          linia: i + 1,
          typ: "cudzysłów",
          opis: `„=${o} ”=${z} — niedomknięty cudzysłów polski`,
          fragment: linia.trim().slice(0, 100),
        });
      }
    });
  }

  // --- 2. markdownowe pogrubienie ---
  linie.forEach((linia, i) => {
    if (/\*\*\S/.test(linia)) {
      znaleziska.push({
        plik,
        linia: i + 1,
        typ: "markdown",
        opis: "** wyświetli się dosłownie — simple-content.tsx nie parsuje HTML",
        fragment: linia.trim().slice(0, 100),
      });
    }
  });
}

if (znaleziska.length === 0) {
  const ile = readdirSync(KATALOG).filter((n) => n.endsWith(".ts")).length - 2;
  console.log(`OK — ${ile} plików miast, zero usterek.`);
  process.exit(0);
}

console.error(`Znaleziono ${znaleziska.length} usterek:\n`);
for (const z of znaleziska) {
  console.error(`  ${z.plik}:${z.linia}  [${z.typ}]  ${z.opis}`);
  console.error(`    ${z.fragment}\n`);
}
process.exit(1);
