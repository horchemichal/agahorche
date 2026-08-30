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

  // ---------------------------------------------------------------------
  // FALA SUSKA — caly powiat suski, wszystkie 9 gmin.
  //
  // UWAGA NA DWA JORDANOWY: `jordanow` to gmina MIEJSKA (ok. 5,4 tys.),
  // `jordanow-gmina` to osobna gmina WIEJSKA (ponad 11 tys., piec solectw),
  // ktorej urzad miesci sie w tym samym miescie. Nie ma wsi Jordanow.
  //
  // UWAGA NA BYSTRA: chodzi o Bystra Podhalanska w powiecie suskim,
  // NIE o Bystra kolo Bielska-Bialej (gmina Wilkowice, slaskie).
  // ---------------------------------------------------------------------
  miastoAgi({
    name: "Sucha Beskidzka",
    slug: "sucha-beskidzka",
    population: 8_801,
    neighborSlugs: ["zembrzyce", "stryszawa", "makow-podhalanski", "budzow"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Maków Podhalański",
    slug: "makow-podhalanski",
    population: 15_693,
    neighborSlugs: ["sucha-beskidzka", "zawoja", "budzow", "stryszawa"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Jordanów",
    slug: "jordanow",
    population: 5_389,
    neighborSlugs: ["jordanow-gmina", "bystra-sidzina", "makow-podhalanski"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Gmina Jordanów",
    slug: "jordanow-gmina",
    population: 11_186,
    neighborSlugs: ["jordanow", "bystra-sidzina", "makow-podhalanski"],
    largerCitySlug: "jordanow",
  }),
  miastoAgi({
    name: "Zawoja",
    slug: "zawoja",
    population: 8_774,
    neighborSlugs: ["makow-podhalanski", "stryszawa", "bystra-sidzina"],
    largerCitySlug: "makow-podhalanski",
  }),
  miastoAgi({
    name: "Stryszawa",
    slug: "stryszawa",
    population: 11_940,
    neighborSlugs: ["sucha-beskidzka", "zembrzyce", "zawoja"],
    largerCitySlug: "sucha-beskidzka",
  }),
  miastoAgi({
    name: "Zembrzyce",
    slug: "zembrzyce",
    population: 5_412,
    neighborSlugs: ["sucha-beskidzka", "mucharz", "stryszow", "budzow"],
    largerCitySlug: "sucha-beskidzka",
  }),
  miastoAgi({
    name: "Budzów",
    slug: "budzow",
    population: 8_834,
    neighborSlugs: ["zembrzyce", "sucha-beskidzka", "makow-podhalanski"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Bystra-Sidzina",
    slug: "bystra-sidzina",
    population: 6_811,
    neighborSlugs: ["jordanow-gmina", "jordanow", "zawoja"],
    largerCitySlug: "jordanow",
  }),

  // ---------------------------------------------------------------------
  // FALA MIECHOWSKA — caly powiat miechowski (7 gmin) plus SLOMNIKI.
  //
  // UWAGA: SLOMNIKI NALEZA DO POWIATU KRAKOWSKIEGO, nie miechowskiego.
  // Trafily tu, bo granicza z gmina Miechow i maja unijne ChOG na czosnek.
  // Nie mylic ze SLABOSZOWEM, ktory jest w powiecie miechowskim.
  //
  // UWAGA NA KOZLOW: Kozlowow jest w Polsce kilka. Ten jest miechowski.
  // UWAGA NA KSIAZ WIELKI: to NIE zamek Ksiaz w Walbrzychu.
  // ---------------------------------------------------------------------
  miastoAgi({
    name: "Miechów",
    slug: "miechow",
    population: 18_640,
    neighborSlugs: ["charsznica", "raclawice", "ksiaz-wielki", "golcza", "slaboszow"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Słomniki",
    slug: "slomniki",
    population: 13_671,
    neighborSlugs: ["miechow", "golcza", "krakow"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Charsznica",
    slug: "charsznica",
    population: 7_038,
    neighborSlugs: ["miechow", "kozlow", "ksiaz-wielki", "golcza"],
    largerCitySlug: "miechow",
  }),
  miastoAgi({
    name: "Gołcza",
    slug: "golcza",
    population: 5_907,
    neighborSlugs: ["miechow", "slomniki", "charsznica", "trzyciaz"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Książ Wielki",
    slug: "ksiaz-wielki",
    population: 5_019,
    neighborSlugs: ["miechow", "charsznica", "kozlow", "slaboszow"],
    largerCitySlug: "miechow",
  }),
  miastoAgi({
    name: "Kozłów",
    slug: "kozlow",
    population: 4_403,
    neighborSlugs: ["charsznica", "ksiaz-wielki", "miechow"],
    largerCitySlug: "miechow",
  }),
  miastoAgi({
    name: "Słaboszów",
    slug: "slaboszow",
    population: 3_293,
    neighborSlugs: ["miechow", "raclawice", "ksiaz-wielki"],
    largerCitySlug: "miechow",
  }),
  miastoAgi({
    name: "Racławice",
    slug: "raclawice",
    population: 2_426,
    neighborSlugs: ["miechow", "slaboszow", "charsznica"],
    largerCitySlug: "miechow",
  }),

  // ---------------------------------------------------------------------
  // FALA TATRZANSKA — caly powiat tatrzanski (5 gmin).
  //
  // OSIE ROZLACZNE, bo to najgestszy klaster podobienstwa w projekcie:
  //   Zakopane — miasto bez miejsca na zabudowe i na mieszkania,
  //   Koscielisko — doliny i jaskinie,
  //   Poronin — muzeum urzadzone w zlym domu,
  //   Bukowina Tatrzanska — folklor jako konkurs, termy jako spolka,
  //   Bialy Dunajec — pstrag w herbie.
  //
  // UWAGA: Chocholow i Termy Chocholowskie to gmina CZARNY DUNAJEC
  // (pow. nowotarski), ale Dolina Chocholowska jest w Koscielisku.
  // Morskie Oko i Lysa Polana leza w gminie Bukowina Tatrzanska.
  // ---------------------------------------------------------------------
  miastoAgi({
    name: "Zakopane",
    slug: "zakopane",
    population: 25_100,
    neighborSlugs: ["koscielisko", "poronin", "bukowina-tatrzanska", "bialy-dunajec"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Bukowina Tatrzańska",
    slug: "bukowina-tatrzanska",
    population: 13_568,
    neighborSlugs: ["poronin", "bialy-dunajec", "zakopane"],
    largerCitySlug: "zakopane",
  }),
  miastoAgi({
    name: "Poronin",
    slug: "poronin",
    population: 11_784,
    neighborSlugs: ["bialy-dunajec", "zakopane", "bukowina-tatrzanska", "koscielisko"],
    largerCitySlug: "zakopane",
  }),
  miastoAgi({
    name: "Kościelisko",
    slug: "koscielisko",
    population: 9_095,
    neighborSlugs: ["zakopane", "poronin"],
    largerCitySlug: "zakopane",
  }),
  miastoAgi({
    name: "Biały Dunajec",
    slug: "bialy-dunajec",
    population: 6_828,
    neighborSlugs: ["poronin", "zakopane", "bukowina-tatrzanska"],
    largerCitySlug: "zakopane",
  }),
  // -------------------------------------------------------------------
  // FALA BRZESKA - domkniecie powiatu brzeskiego (6 gmin).
  //   Czchow - miasto, ktore stracilo prawa miejskie w 1928 i odzyskalo
  //            je w 2000; fasola z ChNP Doliny Dunajca,
  //   Debno - gmina sypialnia (saldo dojazdow -886), zamek ZAMKNIETY do 2028,
  //   Gnojnik - kukielka uszewska, jedyny wpis na Liste Produktow
  //            Tradycyjnych w calym powiecie,
  //   Iwkowa - 185 z 677 suszarni obszaru suski sechlonskiej,
  //   Borzecin - las i grzyby, najwieksza wies powiatu, Mrozek,
  //   Szczurowa - najwieksza powierzchniowo i najrzadziej zaludniona
  //            gmina powiatu, 21 solectw, powodz 2010.
  //
  // UWAGA: suska sechlonska NIE jest z Czchowa ani z Gnojnika - obszar
  // ChOG to Laskowa, Iwkowa, Lososina Dolna i Zegocina. Fasola "Piekny
  // Jas z Doliny Dunajca" obejmuje z tego powiatu TYLKO Czchow.
  // -------------------------------------------------------------------
  miastoAgi({
    name: "Dębno",
    slug: "debno",
    population: 14_498,
    neighborSlugs: ["brzesko", "borzecin", "czchow", "gnojnik", "wojnicz"],
    largerCitySlug: "brzesko",
  }),
  miastoAgi({
    name: "Czchów",
    slug: "czchow",
    population: 9_699,
    neighborSlugs: ["iwkowa", "gnojnik", "lipnica-murowana", "zakliczyn", "debno"],
    largerCitySlug: "brzesko",
  }),
  miastoAgi({
    name: "Szczurowa",
    slug: "szczurowa",
    population: 9_080,
    neighborSlugs: ["brzesko", "borzecin", "rzezawa", "drwinia", "bochnia"],
    largerCitySlug: "brzesko",
  }),
  miastoAgi({
    name: "Borzęcin",
    slug: "borzecin",
    population: 8_117,
    neighborSlugs: ["brzesko", "debno", "szczurowa", "wojnicz"],
    largerCitySlug: "brzesko",
  }),
  miastoAgi({
    name: "Gnojnik",
    slug: "gnojnik",
    population: 8_099,
    neighborSlugs: ["brzesko", "czchow", "debno", "nowy-wisnicz", "lipnica-murowana"],
    largerCitySlug: "brzesko",
  }),
  miastoAgi({
    name: "Iwkowa",
    slug: "iwkowa",
    population: 6_650,
    neighborSlugs: ["czchow", "lipnica-murowana", "laskowa", "zegocina"],
    largerCitySlug: "brzesko",
  }),
  miastoAgi({
    name: "Sułkowice",
    slug: "sulkowice",
    population: 15_232,
    neighborSlugs: ["myslenice", "pcim", "kalwaria-zebrzydowska", "lanckorona", "skawina"],
    largerCitySlug: "myslenice",
  }),
  miastoAgi({
    name: "Pcim",
    slug: "pcim",
    population: 11_091,
    neighborSlugs: ["myslenice", "lubien", "tokarnia", "wisniowa", "sulkowice"],
    largerCitySlug: "myslenice",
  }),
  miastoAgi({
    name: "Siepraw",
    slug: "siepraw",
    population: 9_667,
    neighborSlugs: ["myslenice", "dobczyce", "swiatniki-gorne", "wieliczka", "gdow"],
    largerCitySlug: "myslenice",
  }),
  miastoAgi({
    name: "Lubień",
    slug: "lubien",
    population: 9_600,
    neighborSlugs: ["pcim", "tokarnia", "mszana-dolna", "jordanow-gmina", "myslenice"],
    largerCitySlug: "myslenice",
  }),
  miastoAgi({
    name: "Tokarnia",
    slug: "tokarnia",
    population: 8_777,
    neighborSlugs: ["pcim", "lubien", "sulkowice", "jordanow", "budzow"],
    largerCitySlug: "myslenice",
  }),
  miastoAgi({
    name: "Wiśniowa",
    slug: "wisniowa",
    population: 7_100,
    neighborSlugs: ["pcim", "raciechowice", "dobczyce", "myslenice", "mszana-dolna"],
    largerCitySlug: "myslenice",
  }),
  miastoAgi({
    name: "Raciechowice",
    slug: "raciechowice",
    population: 6_444,
    neighborSlugs: ["wisniowa", "dobczyce", "gdow", "jodlownik", "myslenice"],
    largerCitySlug: "myslenice",
  }),
  miastoAgi({
    name: "Biskupice",
    slug: "biskupice",
    population: 11_842,
    neighborSlugs: ["wieliczka", "gdow", "dobczyce", "niepolomice", "swiatniki-gorne"],
    largerCitySlug: "wieliczka",
  }),
  miastoAgi({
    name: "Kłaj",
    slug: "klaj",
    population: 11_218,
    neighborSlugs: ["niepolomice", "drwinia", "gdow", "bochnia", "rzezawa"],
    largerCitySlug: "wieliczka",
  }),
  miastoAgi({
    name: "Babice",
    slug: "babice",
    population: 8_988,
    neighborSlugs: ["chrzanow", "alwernia", "libiaz", "spytkowice", "trzebinia"],
    largerCitySlug: "chrzanow",
  }),
  miastoAgi({
    name: "Niedźwiedź",
    slug: "niedzwiedz",
    population: 7_282,
    neighborSlugs: ["mszana-dolna", "kamienica", "limanowa", "tymbark", "dobra"],
    largerCitySlug: "mszana-dolna",
  }),
  miastoAgi({
    name: "Nowe Brzesko",
    slug: "nowe-brzesko",
    population: 5_625,
    neighborSlugs: ["proszowice", "koszyce", "drwinia", "niepolomice", "radziemice"],
    largerCitySlug: "proszowice",
  }),
  miastoAgi({
    name: "Koszyce",
    slug: "koszyce",
    population: 5_212,
    neighborSlugs: ["proszowice", "nowe-brzesko", "drwinia", "szczurowa", "palecznica"],
    largerCitySlug: "proszowice",
  }),
  miastoAgi({
    name: "Pałecznica",
    slug: "palecznica",
    population: 3_436,
    neighborSlugs: ["raclawice", "radziemice", "proszowice", "miechow", "koszyce"],
    largerCitySlug: "proszowice",
  }),
  miastoAgi({
    name: "Radziemice",
    slug: "radziemice",
    population: 3_169,
    neighborSlugs: ["raclawice", "miechow", "palecznica", "proszowice", "slomniki"],
    largerCitySlug: "proszowice",
  }),

  // ---------------------------------------------------------------------
  // FALA NOWOTARSKA cz. 1 — piec gmin powiatu nowotarskiego.
  // Osie rozlaczne: Jablonka = Orawa jako region; Lipnica Wielka =
  // granica przez wies i Piotr Borowy; Szaflary = geotermia;
  // Ochotnica Dolna = ksiazka kucharska KGW i dlugosc doliny;
  // Czorsztyn = wies zbudowana od nowa.
  // ---------------------------------------------------------------------
  miastoAgi({
    name: "Gorlice",
    slug: "gorlice",
    population: 25_367,
    neighborSlugs: ["gorlice-gmina", "ropa", "sekowa"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Gmina Gorlice",
    slug: "gorlice-gmina",
    population: 16_906,
    neighborSlugs: ["gorlice", "ropa", "luzna"],
    largerCitySlug: "gorlice",
  }),
  miastoAgi({
    name: "Biecz",
    slug: "biecz",
    population: 16_016,
    neighborSlugs: ["gorlice-gmina", "lipinki", "moszczenica"],
    largerCitySlug: "gorlice",
  }),
  miastoAgi({
    name: "Bobowa",
    slug: "bobowa",
    population: 9_606,
    neighborSlugs: ["grybow-gmina", "korzenna", "luzna"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Uście Gorlickie",
    slug: "uscie-gorlickie",
    population: 6_771,
    neighborSlugs: ["ropa", "sekowa", "krynica-zdroj"],
    largerCitySlug: "gorlice",
  }),
  miastoAgi({
    name: "Lipinki",
    slug: "lipinki",
    population: 6_661,
    neighborSlugs: ["gorlice", "biecz", "sekowa"],
    largerCitySlug: "gorlice",
  }),
  miastoAgi({
    name: "Łużna",
    slug: "luzna",
    population: 8_285,
    neighborSlugs: ["gorlice-gmina", "moszczenica", "bobowa"],
    largerCitySlug: "gorlice",
  }),
  miastoAgi({
    name: "Moszczenica",
    slug: "moszczenica",
    population: 4_897,
    neighborSlugs: ["luzna", "biecz", "gorlice-gmina"],
    largerCitySlug: "gorlice",
  }),
  miastoAgi({
    name: "Ropa",
    slug: "ropa",
    population: 5_509,
    neighborSlugs: ["gorlice-gmina", "uscie-gorlickie", "sekowa"],
    largerCitySlug: "gorlice",
  }),
  miastoAgi({
    name: "Sękowa",
    slug: "sekowa",
    population: 4_909,
    neighborSlugs: ["gorlice", "uscie-gorlickie", "ropa"],
    largerCitySlug: "gorlice",
  }),
  miastoAgi({
    name: "Dąbrowa Tarnowska",
    slug: "dabrowa-tarnowska",
    population: 20_883,
    neighborSlugs: ["olesno", "radgoszcz", "szczucin"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Szczucin",
    slug: "szczucin",
    population: 12_392,
    neighborSlugs: ["dabrowa-tarnowska", "boleslaw-dabrowski", "medrzechow"],
    largerCitySlug: "dabrowa-tarnowska",
  }),
  miastoAgi({
    name: "Olesno",
    slug: "olesno",
    population: 7_627,
    neighborSlugs: ["dabrowa-tarnowska", "boleslaw-dabrowski", "greboszow"],
    largerCitySlug: "dabrowa-tarnowska",
  }),
  miastoAgi({
    name: "Sułoszowa",
    slug: "suloszowa",
    population: 5_651,
    neighborSlugs: ["skala", "jerzmanowice-przeginia", "trzyciaz", "wolbrom"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Skała",
    slug: "skala",
    population: 10_957,
    neighborSlugs: ["suloszowa", "jerzmanowice-przeginia", "wielka-wies", "zielonki", "iwanowice", "slomniki"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Jerzmanowice-Przeginia",
    slug: "jerzmanowice-przeginia",
    population: 11_170,
    neighborSlugs: ["suloszowa", "skala", "wielka-wies", "zabierzow", "krzeszowice", "olkusz"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Wielka Wieś",
    slug: "wielka-wies",
    population: 17_171,
    neighborSlugs: ["zielonki", "zabierzow", "jerzmanowice-przeginia", "skala", "michalowice"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Liszki",
    slug: "liszki",
    population: 18_690,
    neighborSlugs: ["czernichow", "zabierzow", "skawina", "krzeszowice", "alwernia"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Czernichów",
    slug: "czernichow",
    population: 15_453,
    neighborSlugs: ["liszki", "krzeszowice", "skawina", "alwernia", "brzeznica"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Iwanowice",
    slug: "iwanowice",
    population: 9_843,
    neighborSlugs: ["slomniki", "skala", "michalowice", "zielonki", "kocmyrzow-luborzyca", "golcza"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Kocmyrzów-Luborzyca",
    slug: "kocmyrzow-luborzyca",
    population: 18_516,
    neighborSlugs: ["igolomia-wawrzenczyce", "michalowice", "slomniki", "iwanowice", "proszowice"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Igołomia-Wawrzeńczyce",
    slug: "igolomia-wawrzenczyce",
    population: 7_851,
    neighborSlugs: ["kocmyrzow-luborzyca", "nowe-brzesko", "niepolomice", "drwinia", "proszowice"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Tuchów",
    slug: "tuchow",
    population: 17_916,
    neighborSlugs: ["gromnik", "ryglice", "plesna", "szerzyny", "rzepiennik-strzyzewski", "ciezkowice"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Żabno",
    slug: "zabno",
    population: 18_345,
    neighborSlugs: ["radlow", "wietrzychowice", "greboszow", "olesno", "dabrowa-tarnowska", "lisia-gora"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Ciężkowice",
    slug: "ciezkowice",
    population: 10_987,
    neighborSlugs: ["gromnik", "zakliczyn", "rzepiennik-strzyzewski", "bobowa", "grodek-nad-dunajcem", "tuchow"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Wierzchosławice",
    slug: "wierzchoslawice",
    population: 10_465,
    neighborSlugs: ["radlow", "wojnicz", "zabno", "borzecin", "plesna", "tarnow-gmina"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Radłów",
    slug: "radlow",
    population: 9_398,
    neighborSlugs: ["wierzchoslawice", "zabno", "wietrzychowice", "wojnicz", "borzecin", "szczurowa"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Wietrzychowice",
    slug: "wietrzychowice",
    population: 3_697,
    neighborSlugs: ["radlow", "zabno", "greboszow", "szczurowa", "wojnicz", "koszyce"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Ryglice",
    slug: "ryglice",
    population: 11_165,
    neighborSlugs: ["tuchow", "szerzyny", "skrzyszow", "rzepiennik-strzyzewski", "gromnik"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Gromnik",
    slug: "gromnik",
    population: 8_737,
    neighborSlugs: ["ciezkowice", "tuchow", "rzepiennik-strzyzewski", "plesna", "zakliczyn", "ryglice"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Rzepiennik Strzyżewski",
    slug: "rzepiennik-strzyzewski",
    population: 6_505,
    neighborSlugs: ["gromnik", "ciezkowice", "szerzyny", "tuchow", "bobowa", "ryglice"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Szerzyny",
    slug: "szerzyny",
    population: 7_491,
    neighborSlugs: ["ryglice", "rzepiennik-strzyzewski", "tuchow", "biecz", "gromnik"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Gmina Tarnów",
    slug: "tarnow-gmina",
    population: 26_483,
    neighborSlugs: ["lisia-gora", "skrzyszow", "plesna", "wierzchoslawice", "wojnicz", "zabno"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Lisia Góra",
    slug: "lisia-gora",
    population: 15_655,
    neighborSlugs: ["zabno", "skrzyszow", "dabrowa-tarnowska", "tarnow-gmina", "wierzchoslawice"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Skrzyszów",
    slug: "skrzyszow",
    population: 14_180,
    neighborSlugs: ["lisia-gora", "ryglice", "tuchow", "tarnow-gmina", "plesna"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Pleśna",
    slug: "plesna",
    population: 11_740,
    neighborSlugs: ["tuchow", "gromnik", "zakliczyn", "wojnicz", "skrzyszow", "tarnow-gmina"],
    largerCitySlug: "tarnow",
  }),
  miastoAgi({
    name: "Radgoszcz",
    slug: "radgoszcz",
    population: 7_432,
    neighborSlugs: ["dabrowa-tarnowska", "szczucin", "medrzechow"],
    largerCitySlug: "dabrowa-tarnowska",
  }),
  miastoAgi({
    name: "Gręboszów",
    slug: "greboszow",
    population: 3_147,
    neighborSlugs: ["olesno", "boleslaw-dabrowski", "dabrowa-tarnowska"],
    largerCitySlug: "dabrowa-tarnowska",
  }),
  miastoAgi({
    name: "Mędrzechów",
    slug: "medrzechow",
    population: 3_269,
    neighborSlugs: ["szczucin", "boleslaw-dabrowski", "radgoszcz"],
    largerCitySlug: "dabrowa-tarnowska",
  }),
  miastoAgi({
    name: "Bolesław (powiat dąbrowski)",
    slug: "boleslaw-dabrowski",
    population: 2_614,
    neighborSlugs: ["greboszow", "medrzechow", "olesno"],
    largerCitySlug: "dabrowa-tarnowska",
  }),
  miastoAgi({
    name: "Stary Sącz",
    slug: "stary-sacz",
    population: 23_498,
    neighborSlugs: ["nowy-sacz", "podegrodzie", "rytro"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Podegrodzie",
    slug: "podegrodzie",
    population: 13_640,
    neighborSlugs: ["stary-sacz", "lacko", "nowy-sacz"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Łącko",
    slug: "lacko",
    population: 16_670,
    neighborSlugs: ["podegrodzie", "stary-sacz", "kroscienko"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Chełmiec",
    slug: "chelmiec",
    population: 29_811,
    neighborSlugs: ["nowy-sacz", "stary-sacz", "kamionka-wielka"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Krynica-Zdrój",
    slug: "krynica-zdroj",
    population: 15_521,
    neighborSlugs: ["muszyna", "labowa", "piwniczna-zdroj"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Muszyna",
    slug: "muszyna",
    population: 11_103,
    neighborSlugs: ["krynica-zdroj", "piwniczna-zdroj", "labowa"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Piwniczna-Zdrój",
    slug: "piwniczna-zdroj",
    population: 9_905,
    neighborSlugs: ["rytro", "muszyna", "stary-sacz"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Rytro",
    slug: "rytro",
    population: 3_641,
    neighborSlugs: ["piwniczna-zdroj", "stary-sacz", "nawojowa"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Grybów",
    slug: "grybow",
    population: 5_928,
    neighborSlugs: ["grybow-gmina", "kamionka-wielka", "korzenna"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Gmina Grybów",
    slug: "grybow-gmina",
    population: 25_344,
    neighborSlugs: ["grybow", "korzenna", "kamionka-wielka"],
    largerCitySlug: "grybow",
  }),
  miastoAgi({
    name: "Kamionka Wielka",
    slug: "kamionka-wielka",
    population: 10_496,
    neighborSlugs: ["nowy-sacz", "nawojowa", "chelmiec"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Korzenna",
    slug: "korzenna",
    population: 14_445,
    neighborSlugs: ["chelmiec", "grybow-gmina", "grodek-nad-dunajcem"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Nawojowa",
    slug: "nawojowa",
    population: 8_883,
    neighborSlugs: ["nowy-sacz", "labowa", "kamionka-wielka"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Łabowa",
    slug: "labowa",
    population: 6_034,
    neighborSlugs: ["nawojowa", "krynica-zdroj", "kamionka-wielka"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Gródek nad Dunajcem",
    slug: "grodek-nad-dunajcem",
    population: 9_193,
    neighborSlugs: ["lososina-dolna", "korzenna", "chelmiec"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Łososina Dolna",
    slug: "lososina-dolna",
    population: 11_211,
    neighborSlugs: ["grodek-nad-dunajcem", "chelmiec", "laskowa"],
    largerCitySlug: "nowy-sacz",
  }),
  miastoAgi({
    name: "Nowy Targ",
    slug: "nowy-targ",
    population: 33_000,
    neighborSlugs: ["nowy-targ-gmina", "szaflary", "czarny-dunajec"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Czarny Dunajec",
    slug: "czarny-dunajec",
    population: 22_160,
    neighborSlugs: ["nowy-targ", "jablonka", "szaflary"],
    largerCitySlug: "nowy-targ",
  }),
  miastoAgi({
    name: "Gmina Nowy Targ",
    slug: "nowy-targ-gmina",
    population: 23_500,
    neighborSlugs: ["nowy-targ", "szaflary", "lapsze-nizne"],
    largerCitySlug: "nowy-targ",
  }),
  miastoAgi({
    name: "Rabka-Zdrój",
    slug: "rabka-zdroj",
    population: 16_485,
    neighborSlugs: ["raba-wyzna", "spytkowice-nowotarskie"],
    largerCitySlug: "nowy-targ",
  }),
  miastoAgi({
    name: "Raba Wyżna",
    slug: "raba-wyzna",
    population: 14_464,
    neighborSlugs: ["rabka-zdroj", "spytkowice-nowotarskie", "jordanow"],
    largerCitySlug: "nowy-targ",
  }),
  miastoAgi({
    name: "Łapsze Niżne",
    slug: "lapsze-nizne",
    population: 9_252,
    neighborSlugs: ["czorsztyn", "bukowina-tatrzanska", "nowy-targ-gmina"],
    largerCitySlug: "nowy-targ",
  }),
  miastoAgi({
    name: "Krościenko nad Dunajcem",
    slug: "kroscienko",
    population: 6_630,
    neighborSlugs: ["szczawnica", "czorsztyn", "ochotnica-dolna"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Szczawnica",
    slug: "szczawnica",
    population: 6_623,
    neighborSlugs: ["kroscienko", "czorsztyn"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Spytkowice (powiat nowotarski)",
    slug: "spytkowice-nowotarskie",
    population: 4_719,
    neighborSlugs: ["raba-wyzna", "rabka-zdroj", "jordanow"],
    largerCitySlug: "nowy-targ",
  }),
  miastoAgi({
    name: "Jabłonka",
    slug: "jablonka",
    population: 19_195,
    neighborSlugs: ["lipnica-wielka", "zawoja"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Szaflary",
    slug: "szaflary",
    population: 11_336,
    neighborSlugs: ["bialy-dunajec", "poronin", "zakopane"],
    largerCitySlug: "zakopane",
  }),
  miastoAgi({
    name: "Ochotnica Dolna",
    slug: "ochotnica-dolna",
    population: 8_499,
    neighborSlugs: ["czorsztyn"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Czorsztyn",
    slug: "czorsztyn",
    population: 7_645,
    neighborSlugs: ["ochotnica-dolna"],
    largerCitySlug: "krakow",
  }),
  miastoAgi({
    name: "Lipnica Wielka",
    slug: "lipnica-wielka",
    population: 6_056,
    neighborSlugs: ["jablonka", "zawoja"],
    largerCitySlug: "jablonka",
  }),
];
