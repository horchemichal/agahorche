import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * Miejscowości, do których Aga realnie dojeżdża z prezentacją — te same, które
 * wymienia pasek „Prezentacje w całej Małopolsce” (components/marketing/
 * content-blocks.tsx) oraz sekcja „Najczęściej obsługuję” na stronie głównej.
 *
 * Dlaczego osobny plik, a nie dopisanie do `miasta.ts`: tamten zbiór to próbka
 * ogólnopolska dobrana według wielkości miasta (Warszawa, Gdańsk, Szczecin…).
 * Ten jest dobrany według tego, gdzie Aga faktycznie pracuje, i dlatego ma
 * wyższy priorytet SEO niż ogólnopolski Tier B — dla przedstawicielki
 * z Małopolski Bochnia jest ważniejsza niż Szczecin, niezależnie od liczby
 * mieszkańców.
 *
 * `seo.indexable` jest `false` dla wszystkich. To nie jest przeoczenie:
 * strona miejscowości bez własnej, prawdziwej treści lokalnej nie powinna
 * trafiać do indeksu (spec §9/§47). Publikacja to osobna decyzja per miasto,
 * po napisaniu treści. Konkurencja robi odwrotnie — publikuje dziesiątki
 * miast z jednym szablonem i podmienioną nazwą, przez co na stronie Krakowa
 * zostaje zdanie o Katowicach.
 *
 * Liczby mieszkańców są zaokrąglone i oznaczone jako do weryfikacji — tak
 * samo jak w `miasta.ts`. Nie są nigdzie pokazywane użytkownikowi; służą
 * wyłącznie do porządkowania listy.
 */
function miastoAgi(input: {
  name: string;
  slug: string;
  population: number;
  neighborSlugs?: string[];
  largerCitySlug?: string;
}): Location {
  const now = "2026-08-25T00:00:00.000Z";
  const maTresc = CITIES_WITH_CONTENT.includes(input.slug);
  return {
    locationId: `miasto-${input.slug}`,
    name: input.name,
    slug: input.slug,
    unitType: "miasto",
    wojewodztwoSlug: "malopolskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Małopolska",
    population: input.population,
    populationSource:
      "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    // Niżej niż ogólnopolski Tier B (30) i tuż za Tier A (10) — to jest
    // rzeczywista kolejność ważności dla tego serwisu.
    seoPriority: 15,
    tier: "B",
    // INDEKSOWANIE WYNIKA Z TREŚCI, NIE Z RĘCZNEJ FLAGI.
    //
    // Reguła serwisu brzmi: strona miejscowości idzie do Google dopiero
    // wtedy, gdy ma własną, napisaną treść lokalną. Wcześniej flagi były tu
    // wpisane na sztywno jako `false` z komentarzem „publikacja to osobna
    // decyzja per miasto" — i to działało dopóki wiersze wjeżdżały do bazy
    // ręcznie, bo przy okazji ustawiało się je poprawnie SQL-em.
    //
    // Od kiedy repozytorium dosiewa nowe miasta samo, sztywne `false`
    // znaczyłoby, że każde nowo dopisane miasto ląduje na produkcji jako
    // noindex i poza sitemapą — czyli cicho, bez żadnego sygnału, że coś
    // jest nie tak. Dlatego pytamy wprost o to, co i tak jest warunkiem:
    // czy dla tego sluga istnieje wpis w `city-content`.
    seo: maTresc
      ? {
          indexable: true,
          inSitemap: true,
          contentStatus: "published" as const,
        }
      : { indexable: false, inSitemap: false, contentStatus: "draft" as const },
    urlPath: `/thermomix/${input.slug}`,
    createdAt: now,
    updatedAt: now,
  };
}

export const MALOPOLSKA_AGI: Location[] = [
  miastoAgi({
    name: "Bochnia",
    slug: "bochnia",
    population: 29_000,
    neighborSlugs: ["brzesko", "nowy-wisnicz", "gdow"],
  }),
  miastoAgi({
    name: "Brzesko",
    slug: "brzesko",
    population: 16_500,
    neighborSlugs: ["bochnia", "wojnicz", "zakliczyn"],
  }),
  // SIERPIEŃ 2026 — Wieliczka przeniesiona TUTAJ z hierarchy-demo.ts.
  // Wcześniej stała pod /thermomix/malopolskie/krakowski/wieliczka, czyli
  // pod adresem, który powstał po to, żeby pokazać, że routing hierarchiczny
  // działa. Do demonstracji był w porządku; dla strony, którą realnie
  // promujemy, jest zły: dłuższy, trudniejszy do zapamiętania i niespójny
  // z /thermomix/krakow. Routing głęboki dalej działa — udowadnia to kod
  // resolvera, a nie obecność jednego miasta w danych.
  // UWAGA: adres w bazie trzeba zmienić osobno (locations.url_path);
  // ten plik to seed, a źródłem prawdy jest tabela.
  miastoAgi({
    name: "Wieliczka",
    slug: "wieliczka",
    population: 24_000,
    neighborSlugs: ["niepolomice", "gdow", "swiatniki-gorne"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Niepołomice",
    slug: "niepolomice",
    population: 13_000,
    neighborSlugs: ["wieliczka", "bochnia"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Nowy Wiśnicz",
    slug: "nowy-wisnicz",
    population: 2_700,
    neighborSlugs: ["bochnia"],
    largerCitySlug: "bochnia",
  }),
  miastoAgi({
    name: "Tarnów",
    slug: "tarnow",
    population: 105_000,
    neighborSlugs: ["wojnicz", "zakliczyn", "brzesko"],
  }),
  miastoAgi({
    name: "Dobczyce",
    slug: "dobczyce",
    population: 6_500,
    neighborSlugs: ["myslenice", "gdow"],
  }),
  miastoAgi({
    name: "Limanowa",
    slug: "limanowa",
    population: 15_000,
    neighborSlugs: ["nowy-sacz", "myslenice"],
  }),
  miastoAgi({
    name: "Myślenice",
    slug: "myslenice",
    population: 18_000,
    neighborSlugs: ["dobczyce", "skawina"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Nowy Sącz",
    slug: "nowy-sacz",
    population: 82_000,
    neighborSlugs: ["limanowa"],
  }),
  miastoAgi({
    name: "Gdów",
    slug: "gdow",
    population: 2_400,
    neighborSlugs: ["bochnia", "dobczyce"],
  }),
  miastoAgi({
    name: "Zakliczyn",
    slug: "zakliczyn",
    population: 1_600,
    neighborSlugs: ["brzesko", "tarnow"],
  }),
  miastoAgi({
    name: "Wojnicz",
    slug: "wojnicz",
    population: 3_500,
    neighborSlugs: ["tarnow", "brzesko"],
  }),
  miastoAgi({
    name: "Skawina",
    slug: "skawina",
    population: 24_000,
    neighborSlugs: ["myslenice"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Proszowice",
    slug: "proszowice",
    population: 6_000,
    neighborSlugs: ["niepolomice"],
    largerCitySlug: "krakow",
  }),
  // Zachodnia Malopolska, na granicy ze Slaskiem - jedyny taki kierunek
  // w tym zestawie. Sasiadem w naszej bazie jest Skawina, bo pozostale
  // gminy powiatu chrzanowskiego nie maja tu wlasnych wpisow.
  miastoAgi({
    name: "Chrzanów",
    slug: "chrzanow",
    population: 34_000,
    neighborSlugs: ["skawina"],
    largerCitySlug: "krakow",
  }),
  // Pierscien gmin wokol Krakowa. Wszystkie byly dotad martwym tekstem
  // w sekcji "Obszar dzialania" na stronie Krakowa - teraz maja wlasne strony.
  miastoAgi({
    name: "Zielonki",
    slug: "zielonki",
    population: 25_000,
    neighborSlugs: ["michalowice"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Michałowice",
    slug: "michalowice",
    population: 13_500,
    neighborSlugs: ["zielonki"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Zabierzów",
    slug: "zabierzow",
    population: 29_700,
    neighborSlugs: ["krzeszowice"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Krzeszowice",
    slug: "krzeszowice",
    population: 31_800,
    neighborSlugs: ["zabierzow", "chrzanow"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Mogilany",
    slug: "mogilany",
    population: 16_400,
    neighborSlugs: ["swiatniki-gorne", "skawina"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Świątniki Górne",
    slug: "swiatniki-gorne",
    population: 11_200,
    neighborSlugs: ["mogilany", "wieliczka"],
    largerCitySlug: "krakow",
  }),
  // Pierscien gmin wokol Bochni. Kazda ma wlasna, napisana strone lokalna;
  // wszystkie ciagna do Bochni, ale kazda innym korytarzem: Rzezawa
  // autostrada i kolej, Drwinia droga wojewodzka przez puszcze, Lapanow
  // dolina Stradomki, Trzciana i Zegocina droga na Limanowa, Lipnica
  // Murowana droga na Tymowa.
  miastoAgi({
    name: "Rzezawa",
    slug: "rzezawa",
    population: 11_500,
    neighborSlugs: ["bochnia", "brzesko", "drwinia"],
    largerCitySlug: "bochnia",
  }),
  miastoAgi({
    name: "Drwinia",
    slug: "drwinia",
    population: 6_400,
    neighborSlugs: ["bochnia", "niepolomice", "rzezawa"],
    largerCitySlug: "bochnia",
  }),
  miastoAgi({
    name: "Łapanów",
    slug: "lapanow",
    population: 8_600,
    neighborSlugs: ["gdow", "trzciana", "zegocina"],
    largerCitySlug: "bochnia",
  }),
  miastoAgi({
    name: "Trzciana",
    slug: "trzciana",
    population: 5_700,
    neighborSlugs: ["lapanow", "zegocina", "nowy-wisnicz"],
    largerCitySlug: "bochnia",
  }),
  miastoAgi({
    name: "Żegocina",
    slug: "zegocina",
    population: 5_500,
    neighborSlugs: ["trzciana", "lapanow", "lipnica-murowana"],
    largerCitySlug: "bochnia",
  }),
  miastoAgi({
    name: "Lipnica Murowana",
    slug: "lipnica-murowana",
    population: 5_500,
    neighborSlugs: ["nowy-wisnicz", "zegocina", "brzesko"],
    largerCitySlug: "bochnia",
  }),
  // Fala zachodnia — powiat chrzanowski i oswiecimski. To jedyny kierunek
  // w calej bazie, w ktorym ludzie codziennie ciagna na Slask, a nie do
  // Krakowa: z Oswiecimia do Katowic jest blizej niz do Krakowa. Kazda
  // z tych gmin ma inny powod istnienia strony — Trzebinia wezel kolejowy
  // i dwadziescia kilka jednostek pomocniczych, Libiaz jeden zaklad
  // i praca zmianowa, Oswiecim system czterobrygadowy i starzejace sie
  // osiedla, Chelmek miasto Baty, Alwernia rozproszona wies bez kolei.
  miastoAgi({
    name: "Trzebinia",
    slug: "trzebinia",
    population: 32_200,
    neighborSlugs: ["chrzanow", "libiaz", "krzeszowice", "alwernia"],
    largerCitySlug: "chrzanow",
  }),
  miastoAgi({
    name: "Libiąż",
    slug: "libiaz",
    population: 21_000,
    neighborSlugs: ["chrzanow", "trzebinia", "chelmek"],
    largerCitySlug: "chrzanow",
  }),
  miastoAgi({
    name: "Oświęcim",
    slug: "oswiecim",
    population: 35_400,
    neighborSlugs: ["chelmek", "libiaz"],
  }),
  miastoAgi({
    name: "Chełmek",
    slug: "chelmek",
    population: 12_300,
    neighborSlugs: ["oswiecim", "libiaz"],
    largerCitySlug: "oswiecim",
  }),
  miastoAgi({
    name: "Alwernia",
    slug: "alwernia",
    population: 12_300,
    neighborSlugs: ["chrzanow", "trzebinia", "krzeszowice"],
    largerCitySlug: "chrzanow",
  }),
  // Korytarz Bochnia-Limanowa i pierscien wokol Limanowej. Osiem gmin
  // powiatu limanowskiego, ktore domykaja droge z pierscienia bochenskiego
  // az po Gorce. To najmlodszy demograficznie kawalek calej bazy: powiat
  // limanowski jest drugim najmlodszym powiatem w Polsce, wiec strony sa
  // pisane pod rodziny z dziecmi, a nie pod gospodarstwa jednoosobowe.
  // Kazda gmina ma inna os: Jodlownik klasztor i kolacz z serem, Tymbark
  // prace na miejscu, Dobra przelecz i las, Laskowa suske sechlonska,
  // Slopnice najwiecej dzieci, Lukowica sady i kierunek na Nowy Sacz,
  // Mszana Dolna kuchnie zagorzanska, Kamienica koniec drogi.
  // UWAGA: gmina wiejska Limanowa NIE ma tu wlasnego wpisu - kanibalizowalaby
  // /thermomix/limanowa. Jej wsie obsluguje strona miasta.
  miastoAgi({
    name: "Jodłownik",
    slug: "jodlownik",
    population: 8_800,
    neighborSlugs: ["dobra", "tymbark", "zegocina"],
    largerCitySlug: "limanowa",
  }),
  miastoAgi({
    name: "Tymbark",
    slug: "tymbark",
    population: 6_400,
    neighborSlugs: ["limanowa", "dobra", "slopnice", "jodlownik"],
    largerCitySlug: "limanowa",
  }),
  miastoAgi({
    name: "Dobra",
    slug: "dobra",
    population: 10_100,
    neighborSlugs: ["tymbark", "jodlownik", "mszana-dolna", "slopnice"],
    largerCitySlug: "limanowa",
  }),
  miastoAgi({
    name: "Laskowa",
    slug: "laskowa",
    population: 8_200,
    neighborSlugs: ["limanowa", "zegocina", "lipnica-murowana"],
    largerCitySlug: "limanowa",
  }),
  miastoAgi({
    name: "Słopnice",
    slug: "slopnice",
    population: 7_000,
    neighborSlugs: ["limanowa", "tymbark", "dobra", "kamienica"],
    largerCitySlug: "limanowa",
  }),
  miastoAgi({
    name: "Łukowica",
    slug: "lukowica",
    population: 10_200,
    neighborSlugs: ["limanowa", "nowy-sacz", "laskowa"],
    largerCitySlug: "nowy-sacz",
  }),
  // Populacja to miasto (7 817) plus odrebna gmina wiejska (17 652) - strona
  // obsluguje obie jednostki, bo dla klientki to jedno miejsce na mapie.
  miastoAgi({
    name: "Mszana Dolna",
    slug: "mszana-dolna",
    population: 25_500,
    neighborSlugs: ["dobra", "kamienica", "limanowa"],
    largerCitySlug: "limanowa",
  }),
  // Po wydzieleniu gminy Szczawa 1.01.2025: 4 solectwa, ok. 5 988 osob.
  miastoAgi({
    name: "Kamienica",
    slug: "kamienica",
    population: 6_000,
    neighborSlugs: ["mszana-dolna", "slopnice", "lukowica"],
    largerCitySlug: "limanowa",
  }),
  // ---------------------------------------------------------------------
  // FALA OLKUSKA (28.08.2026) - caly powiat olkuski, 6 gmin.
  // Ludnosc: GUS BDL, stan 31.12.2025. Sumy gminne zgadzaja sie z suma
  // powiatowa (103 887) w dwoch niezaleznych zrodlach.
  // ---------------------------------------------------------------------
  miastoAgi({
    name: "Olkusz",
    slug: "olkusz",
    population: 44_782,
    neighborSlugs: ["boleslaw", "bukowno", "klucze", "wolbrom", "trzyciaz"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Wolbrom",
    slug: "wolbrom",
    population: 21_566,
    neighborSlugs: ["olkusz", "klucze", "trzyciaz"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Klucze",
    slug: "klucze",
    population: 14_206,
    neighborSlugs: ["olkusz", "boleslaw", "wolbrom"],
    largerCitySlug: "olkusz",
  }),
  // Gmina MIEJSKA, bez solectw. Prawa miejskie od 1962 r.
  miastoAgi({
    name: "Bukowno",
    slug: "bukowno",
    population: 9_104,
    neighborSlugs: ["olkusz", "boleslaw", "trzebinia"],
    largerCitySlug: "olkusz",
  }),
  // UWAGA: w Malopolsce sa DWIE gminy Boleslaw. Ta jest w powiecie
  // olkuskim (7 353) i dostaje goly slug. Ta w powiecie dabrowskim
  // (2 614) dostanie slug "boleslaw-dabrowski".
  miastoAgi({
    name: "Bolesław",
    slug: "boleslaw",
    population: 7_353,
    neighborSlugs: ["olkusz", "bukowno", "klucze"],
    largerCitySlug: "olkusz",
  }),
  miastoAgi({
    name: "Trzyciąż",
    slug: "trzyciaz",
    population: 6_876,
    neighborSlugs: ["olkusz", "wolbrom"],
    largerCitySlug: "krakow",
  }),

  // ---------------------------------------------------------------------
  // FALA WADOWICKA — powiat wadowicki
  // Pierwsze cztery z dziesieciu gmin. Pozostale szesc (Lanckorona,
  // Stryszow, Spytkowice, Tomice, Brzeznica, Mucharz) czeka na research.
  // UWAGA: miasto Andrychow (ok. 18 tys.) jest LICZNIEJSZE niz miasto
  // Wadowice (ok. 17 tys.), mimo ze stolica powiatu sa Wadowice.
  // ---------------------------------------------------------------------
  miastoAgi({
    name: "Andrychów",
    slug: "andrychow",
    population: 41_840,
    neighborSlugs: ["wadowice", "wieprz", "kalwaria-zebrzydowska"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Wadowice",
    slug: "wadowice",
    population: 36_327,
    neighborSlugs: ["andrychow", "wieprz", "kalwaria-zebrzydowska"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Kalwaria Zebrzydowska",
    slug: "kalwaria-zebrzydowska",
    population: 19_825,
    neighborSlugs: ["wadowice", "andrychow", "skawina"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Wieprz",
    slug: "wieprz",
    population: 12_797,
    neighborSlugs: ["andrychow", "wadowice"],
    largerCitySlug: "wadowice",
  }),

  // ---------------------------------------------------------------------
  // FALA WADOWICKA cz. 2 — powiat wadowicki domkniety, 10/10 gmin.
  // UWAGA: w Malopolsce sa DWIE gminy Spytkowice. Ta jest w powiecie
  // wadowickim (ok. 10 tys., nad Wisla) i dostaje goly slug. Ta
  // w powiecie nowotarskim (4 703, Podhale) dostanie slug
  // "spytkowice-nowotarskie" przy fali nowotarskiej — i WTEDY trzeba
  // dopisac na obu stronach zdanie odsylajace do tej drugiej.
  // ---------------------------------------------------------------------
  miastoAgi({
    name: "Brzeźnica",
    slug: "brzeznica",
    population: 10_876,
    neighborSlugs: ["spytkowice", "tomice", "skawina", "wadowice"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Spytkowice",
    slug: "spytkowice",
    population: 9_953,
    neighborSlugs: ["tomice", "brzeznica", "alwernia"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Tomice",
    slug: "tomice",
    population: 8_303,
    neighborSlugs: ["wadowice", "spytkowice", "brzeznica", "wieprz"],
    largerCitySlug: "wadowice",
  }),
  miastoAgi({
    name: "Stryszów",
    slug: "stryszow",
    population: 6_776,
    neighborSlugs: ["mucharz", "kalwaria-zebrzydowska", "lanckorona", "wadowice"],
    largerCitySlug: "wadowice",
  }),
  miastoAgi({
    name: "Lanckorona",
    slug: "lanckorona",
    population: 6_251,
    neighborSlugs: ["kalwaria-zebrzydowska", "stryszow", "skawina"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Mucharz",
    slug: "mucharz",
    population: 4_175,
    neighborSlugs: ["stryszow", "wadowice"],
    largerCitySlug: "wadowice",
  }),
];
