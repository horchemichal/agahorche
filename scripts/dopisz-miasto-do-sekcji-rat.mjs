#!/usr/bin/env node
/**
 * JEDNORAZOWA MIGRACJA TREŚCI — wrzesień 2026.
 * Nazwa miejscowości w nagłówkach sekcji „cena” i „raty”.
 *
 * PO CO TO JEST.
 * Nagłówki brzmiały „Ile kosztuje Thermomix TM7?” i „Thermomix na raty —
 * jak to policzyć” na wszystkich 959 stronach miast, mimo że treść pod nimi
 * jest o konkretnej miejscowości („w Stawiszynie zapłacisz tyle samo”).
 * Nagłówek ma opisywać to, co pod nim stoi — a przy okazji trafia wtedy
 * w realne zapytanie („ile kosztuje thermomix w Krakowie”).
 *
 * SKĄD BIERZE ODMIANĘ — I DLACZEGO NIE MOŻE JEJ POMYLIĆ.
 * Skrypt NIE odmienia niczego sam. W każdym pliku miasta stoi już
 * `sekcjaCena("w Stawiszynie")` z miejscownikiem sprawdzonym ręcznie przy
 * pisaniu tej strony. Skrypt kopiuje DOKŁADNIE ten literał do
 * `sekcjaRaty(...)`, a `sekcjaCena` wstawia go sobie do nagłówka sama.
 * Jedynym źródłem odmiany jest więc forma, która już przeszła weryfikację —
 * nie da się tu wygenerować „w Stawiszyn” ani „w Dolsk”.
 *
 * CZEGO ŚWIADOMIE NIE ROBI.
 * Nie dopisuje miejscowości do nagłówków sekcji, które są o URZĄDZENIU
 * (sekcjaTm7, sekcjaCoUgotujesz, sekcjaTradycyjneGotowanie) — tam nie
 * byłoby to opisem treści, tylko upychaniem frazy.
 * Nie wstawia „0%” do nagłówka o ratach: raty 0% są okresowe, nie stałe,
 * więc taki nagłówek byłby nieprawdziwy przez większość roku.
 *
 * ZABEZPIECZENIA.
 * — Każde podstawienie w plikach wspólnych musi trafić DOKŁADNIE RAZ;
 *   przy innej liczbie trafień skrypt przerywa i nic nie zapisuje.
 * — Plik miasta bez dokładnie jednego `sekcjaCena("...")` jest pomijany
 *   i zgłaszany, zamiast zgadywać.
 * — Skrypt jest idempotentny: drugie uruchomienie nic nie zmienia.
 *
 * Po wdrożeniu ten plik można usunąć — zostaje w repozytorium wyłącznie
 * jako zapis tego, co i na jakiej podstawie zostało zmienione.
 *
 * Uruchomienie z katalogu głównego repozytorium:
 *   node scripts/dopisz-miasto-do-sekcji-rat.mjs
 */

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** Podstawienia w plikach wspólnych. Wygenerowane i zweryfikowane co do bajtu. */
const PODSTAWIENIA = {
  "wspolne": [
    [
      "    id: \"cena\",\n    heading: \"Ile kosztuje Thermomix TM7?\",",
      "    id: \"cena\",\n    // Nazwa miejscowości w nagłówku, bo TREŚĆ TEJ SEKCJI JEST O MIEJSCU:\n    // jej sedno to zdanie „${miejscownik} zapłacisz tyle samo”. Nagłówek\n    // opisuje więc to, co pod nim faktycznie stoi, i przy okazji trafia\n    // w realne zapytanie („ile kosztuje thermomix w Krakowie”). Nie\n    // dopisujemy miasta do nagłówków sekcji, które są o URZĄDZENIU\n    // (sekcjaTm7, sekcjaCoUgotujesz, sekcjaTradycyjneGotowanie) — tam\n    // byłoby to upychanie frazy bez pokrycia w treści.\n    heading: `Ile kosztuje Thermomix TM7 ${miejscownik}?`,"
    ],
    [
      "/** Raty. Kalkulator stoi POD tą sekcją — stąd „poniżej”. */\nexport function sekcjaRaty(): CitySection {\n  return {\n    id: \"raty\",\n    heading: \"Thermomix na raty — jak to policzyć\",\n    paragraphs: [\n      \"Dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.\",\n      \"Warto policzyć to przed spotkaniem, na spokojnie i bez nikogo nad głową. Na prezentacji wracamy do tych samych liczb, tylko z dokładnymi danymi.\",\n    ],",
      "/**\n * Raty. Kalkulator stoi POD tą sekcją — stąd „poniżej”.\n *\n * `miejscownik` jest opcjonalny wyłącznie po to, żeby dopisanie go nie\n * wywróciło żadnego starego wywołania. Podawaj go zawsze — bez niego\n * nagłówek wraca do wersji bez miejscowości.\n *\n * ŚWIADOMIE NIE MA „0%” W NAGŁÓWKU. Raty 0% są okresowe, nie stałe\n * (mówi to wprost pierwszy akapit). Nagłówek obiecujący 0% byłby\n * nieprawdziwy przez większość roku — a to jest dokładnie ten rodzaj\n * drobnego kłamstwa pod frazę, którego ta strona nie uprawia.\n */\nexport function sekcjaRaty(miejscownik?: string): CitySection {\n  return {\n    id: \"raty\",\n    heading: miejscownik\n      ? `Thermomix na raty ${miejscownik} — jak to policzyć`\n      : \"Thermomix na raty — jak to policzyć\",\n    paragraphs: [\n      \"Dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.\",\n      miejscownik\n        ? `Warto policzyć to przed spotkaniem, na spokojnie i bez nikogo nad głową. Na prezentacji ${miejscownik} wracamy do tych samych liczb, tylko z dokładnymi danymi.`\n        : \"Warto policzyć to przed spotkaniem, na spokojnie i bez nikogo nad głową. Na prezentacji wracamy do tych samych liczb, tylko z dokładnymi danymi.\",\n    ],"
    ]
  ],
  "cityContent": [
    [
      "      heading: \"Ile kosztuje Thermomix TM7?\",\n      paragraphs: [\n        \"Cena Thermomixa jest jedna w całej Polsce — ustala ją Vorwerk, nie przedstawiciel. W Krakowie",
      "      heading: \"Ile kosztuje Thermomix TM7 w Krakowie?\",\n      paragraphs: [\n        \"Cena Thermomixa jest jedna w całej Polsce — ustala ją Vorwerk, nie przedstawiciel. W Krakowie"
    ],
    [
      "      heading: \"Czy Thermomix można kupić na raty?\",",
      "      heading: \"Czy Thermomix w Krakowie można kupić na raty?\","
    ],
    [
      "      heading: \"Ile kosztuje Thermomix TM7?\",\n      paragraphs: [\n        \"Cenę ustala Vorwerk i jest identyczna w całej Polsce — w Wieliczce",
      "      heading: \"Ile kosztuje Thermomix TM7 w Wieliczce?\",\n      paragraphs: [\n        \"Cenę ustala Vorwerk i jest identyczna w całej Polsce — w Wieliczce"
    ],
    [
      "      heading: \"Ile kosztuje Thermomix TM7?\",\n      paragraphs: [\n        \"Cenę ustala Vorwerk i jest identyczna w całym kraju — w Niepołomicach",
      "      heading: \"Ile kosztuje Thermomix TM7 w Niepołomicach?\",\n      paragraphs: [\n        \"Cenę ustala Vorwerk i jest identyczna w całym kraju — w Niepołomicach"
    ],
    [
      "      heading: \"Ile kosztuje Thermomix TM7?\",\n      paragraphs: [\n        \"Cenę ustala Vorwerk i jest identyczna w całej Polsce — w Skawinie",
      "      heading: \"Ile kosztuje Thermomix TM7 w Skawinie?\",\n      paragraphs: [\n        \"Cenę ustala Vorwerk i jest identyczna w całej Polsce — w Skawinie"
    ],
    [
      "      heading: \"Thermomix na raty — jak to policzyć\",\n      paragraphs: [\n        \"Dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.\",\n        \"Warto policzyć to przed spotkaniem, na spokojnie i bez nikogo nad głową. Na prezentacji zwykle wracamy do tych samych liczb, tylko z dokładnymi danymi.\",",
      "      heading: \"Thermomix na raty w Wieliczce — jak to policzyć\",\n      paragraphs: [\n        \"Dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.\",\n        \"Warto policzyć to przed spotkaniem, na spokojnie i bez nikogo nad głową. Na prezentacji w Wieliczce zwykle wracamy do tych samych liczb, tylko z dokładnymi danymi.\","
    ],
    [
      "      heading: \"Thermomix na raty — jak to policzyć\",\n      paragraphs: [\n        \"Dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.\",\n        \"Policz to przed spotkaniem, bez nikogo nad głową. Na prezentacji wracamy do tych samych liczb, tylko z dokładnymi danymi.\",",
      "      heading: \"Thermomix na raty w Niepołomicach — jak to policzyć\",\n      paragraphs: [\n        \"Dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.\",\n        \"Policz to przed spotkaniem, bez nikogo nad głową. Na prezentacji w Niepołomicach wracamy do tych samych liczb, tylko z dokładnymi danymi.\","
    ],
    [
      "      heading: \"Thermomix na raty — jak to policzyć\",\n      paragraphs: [\n        \"Dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.\",\n        \"Warto policzyć to przed spotkaniem, na spokojnie. Na prezentacji wracamy do tych samych liczb, tylko z dokładnymi danymi.\",",
      "      heading: \"Thermomix na raty w Skawinie — jak to policzyć\",\n      paragraphs: [\n        \"Dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.\",\n        \"Warto policzyć to przed spotkaniem, na spokojnie. Na prezentacji w Skawinie wracamy do tych samych liczb, tylko z dokładnymi danymi.\","
    ]
  ]
};

function zastosuj(sciezka, pary) {
  const przed = readFileSync(sciezka, "utf8");
  let s = przed;
  let juz = 0;

  for (const [stary, nowy] of pary) {
    if (s.includes(nowy) && !s.includes(stary)) {
      juz += 1;
      continue;
    }
    const n = s.split(stary).length - 1;
    if (n !== 1) {
      throw new Error(`${sciezka}: fragment wystąpił ${n} raz(y), oczekiwano 1 — ${stary.slice(0, 60).replace(/\n/g, "\\n")}`);
    }
    s = s.replace(stary, nowy);
  }

  if (s === przed) {
    console.log(`${sciezka}: bez zmian (${juz}/${pary.length} podstawień już zastosowanych)`);
    return 0;
  }
  writeFileSync(sciezka, s, "utf8");
  console.log(`${sciezka}: zapisano (${pary.length - juz} podstawień)`);
  return 1;
}

zastosuj("data/locations/cities/wspolne.ts", PODSTAWIENIA.wspolne);
zastosuj("data/locations/city-content.ts", PODSTAWIENIA.cityContent);

const KATALOG = "data/locations/cities";
const POMIJANE = new Set(["wspolne.ts", "index.ts"]);

const pliki = readdirSync(KATALOG)
  .filter((n) => n.endsWith(".ts") && !POMIJANE.has(n))
  .sort();

let zmienione = 0;
let juzGotowe = 0;
const problemy = [];

for (const nazwa of pliki) {
  const sciezka = join(KATALOG, nazwa);
  const tresc = readFileSync(sciezka, "utf8");

  if (!tresc.includes("sekcjaRaty()")) {
    if (/sekcjaRaty\("/.test(tresc)) juzGotowe += 1;
    continue;
  }

  const trafienia = [...tresc.matchAll(/sekcjaCena\((".*?")\)/g)];
  if (trafienia.length !== 1) {
    problemy.push(`${nazwa}: sekcjaCena z literałem wystąpiła ${trafienia.length} raz(y)`);
    continue;
  }

  const miejscownik = trafienia[0][1];
  writeFileSync(sciezka, tresc.replaceAll("sekcjaRaty()", `sekcjaRaty(${miejscownik})`), "utf8");
  zmienione += 1;
}

console.log("");
console.log(`plikow miast:      ${pliki.length}`);
console.log(`zmienionych:       ${zmienione}`);
console.log(`juz z argumentem:  ${juzGotowe}`);
console.log(`problemow:         ${problemy.length}`);
for (const p of problemy) console.log(`  ! ${p}`);

if (problemy.length > 0) process.exitCode = 1;
