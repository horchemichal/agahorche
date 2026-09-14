import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
  blokOMnie,
  faqWspolne,
  highlightyStandardowe,
  sekcjaCena,
  sekcjaCoUgotujesz,
  sekcjaRaty,
  sekcjaTm7,
  sekcjaTradycyjneGotowanie,
} from "./wspolne";

/**
 * KONSTANCIN-JEZIORNA — powiat piaseczyński, woj. mazowieckie.
 * MIASTO 16 857 (GUS 31.12.2024), 17,7 km², 950,2 os./km².
 *
 * ⚠ HOMONIMY: KONSTANCIN-JEZIORNA ≠ KONSTANTYNÓW ŁÓDZKI
 *   ≠ KONSTANTYNÓW (lubelskie). FAQ to rozróżnia.
 *
 * HISTORIA:
 * — 1760 — MŁYN PAPIERNICZY W JEZIORNIE, modernizacja
 *   w latach 70. XVIII w.; zabudowania Mirkowskiej Fabryki
 *   Papieru ok. 1900. ⚠ TO PAPIERNIA, NIE MŁYN ZBOŻOWY.
 *   ⚠ KĄT „PAPIER W KUCHNI" (Cybinka) JEST ZAJĘTY —
 *     papierni NIE ROBIĘ TEMATEM.
 * — 1897 — osada Konstancin z parcelacji hr. Witolda
 *   Skórzewskiego: 261 działek; nazwa na cześć matki
 *   Konstancji; w tym samym roku rozplanowano PARK ZDROJOWY,
 * — 1900 — pierwsze pensjonaty letniskowe w Skolimowie,
 * — 1917 — prawa uzdrowiskowe, nazwa „Osada i Uzdrowisko
 *   Konstancin",
 * — 1969 — miasto Konstancin-Jeziorna w obecnym kształcie
 *   (Chylice, Skolimów, Konstancin i miasto Jeziorna
 *   z dzielnicą Mirków).
 *
 * ⚠⚠ TĘŻNIA SOLANKOWA — PODSTAWA KĄTA:
 * — zbudowana Z GAŁĘZI TARNINY, kryta drewnianym daszkiem,
 * — ⚠ POWSTAŁA DOPIERO W LATACH 1977–1980 (podkowa otwarta
 *   1978) — TO NIE JEST ZABYTEK XIX-WIECZNY. NIE PISZĘ,
 *   ŻE JEST STARA. TWARDA GRANICA,
 * — solanka chlorkowo-sodowa, bromkowa, jodkowa i żelazista;
 *   stężenie 7,5%; temperatura wypływu 29°C; odwiert
 *   ok. 1600 m,
 * — ⚠ ZŁOŻA SOLANKI ODKRYTO PRZYPADKIEM DOPIERO W 1965 r.
 *   podczas wierceń geologicznych — uzdrowisko przez pierwsze
 *   pół wieku działało bez niej.
 *
 * ⚠⚠⚠ ZDROWIE — TWARDA GRANICA ABSOLUTNA:
 * TĘŻNIĘ I UZDROWISKO OPISUJĘ WYŁĄCZNIE JAKO OBIEKT
 * I JAKO ZJAWISKO FIZYCZNE (parowanie z dużej powierzchni).
 * ZERO tez o leczeniu, inhalacjach, drogach oddechowych,
 * jodzie, mikroklimacie i jakimkolwiek działaniu na zdrowie.
 * ZERO słowa „lecznicze". ZERO sanatoriów jako tematu.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE POTWIERDZONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH. ⚠ NIE TWIERDZĘ, ŻE GO NIE MA —
 *   po prostu nie wymieniam żadnego.
 * — DOŻYNKI GMINNE 2026 w Słomczynie (30 sierpnia 2026),
 *   pierwsze w tej wsi po dwunastu latach przerwy; konkurs
 *   wieńców, VII Turniej Sołectw i Osiedli.
 * — gmina ma 23 sołectwa i 2 osiedla; sołectwa nadwiślańskie
 *   to m.in. Kępa Oborska, Kępa Okrzewska, Gassy, Ciszyca,
 *   Łęg, Habdzin.
 *
 * KĄT: POWIERZCHNIA STYKU — dlaczego cienka warstwa
 * zmienia wszystko.
 * Kąt od tężni: to urządzenie nie „robi" soli i niczego nie
 * podgrzewa. Rozkłada solankę po gałęziach tarniny na jak
 * największą powierzchnię, żeby woda odchodziła szybciej.
 * W kuchni ta sama zasada rządzi połową tego, co robimy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w kuchni rzadko myślimy o powierzchni, a ona decyduje
 *   o tempie prawie wszystkiego: parowania, stygnięcia,
 *   rumienienia, rozmrażania, marynowania,
 * — ŻE ZASADA JEST JEDNA: im większy stosunek powierzchni
 *   do objętości, tym szybciej cokolwiek się dzieje,
 * — GDZIE TO WIDAĆ NA CO DZIEŃ:
 *   — SOS ODPARUJE SZYBCIEJ W SZEROKIM RONDLU niż w wysokim
 *     garnku — i to bez zmiany ognia,
 *   — WARZYWA NA BLASZE W JEDNEJ WARSTWIE się rumienią,
 *     a usypane w kopiec — duszą,
 *   — ZUPA W PŁASKIM NACZYNIU STYGNIE SZYBCIEJ — co ma
 *     znaczenie, gdy chcemy ją schować,
 *   — MARYNATA DZIAŁA TYLKO NA POWIERZCHNI, więc rozmiar
 *     kawałka decyduje bardziej niż czas,
 *   — MROŻENIE NA PŁASKO to szybsze mrożenie i szybsze
 *     rozmrażanie,
 * — ŻE DLATEGO „ZA MAŁA PATELNIA" JEST NAJCZĘSTSZYM BŁĘDEM
 *   W DOMOWEJ KUCHNI — nie za słaby ogień, tylko za mało
 *   miejsca,
 * — ŻE DZIAŁA TO TAKŻE ODWROTNIE: jeśli czegoś NIE chcemy
 *   wysuszyć, zmniejszamy powierzchnię — pieczeń w całości
 *   zamiast w plastrach, chleb przechowywany bochenkiem,
 *   a nie pokrojony,
 * — ŻE STĄD BIERZE SIĘ RÓŻNICA MIĘDZY KOSTKĄ, SŁUPKAMI
 *   I PLASTRAMI ⚠ JEDNYM ZDANIEM, bo to osobny temat,
 * — UCZCIWIE: urządzenie tej zasady nie zmienia — naczynie
 *   ma stałą szerokość i wąskie dno, więc odparowanie idzie
 *   wolniej niż w szerokim rondlu,
 * — ale ma przewagę w drugą stronę: skoro stale miesza,
 *   ciepło rozkłada się równo w całej objętości, więc tam,
 *   gdzie zależy nam na braku przypalenia, a nie na szybkim
 *   odparowaniu, wąskie naczynie jest zaletą.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ANI O TĘŻNI,
 *   ANI O SOLANCE, ANI O JEDZENIU. TWARDA GRANICA.
 * — ⚠ ZERO TEMATU SOLI JAKO SKŁADNIKA — kąt „sól"
 *   ZAJĘTY. Solanka to tu wyłącznie ciecz, która paruje.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO tematu zamożności miasta i cen nieruchomości.
 *   TWARDA GRANICA — Konstancin ma taką reputację
 *   i celowo jej nie poruszam.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „TO, CO ZBIERA SIĘ NA POWIERZCHNI" (Orneta) dotyczy
 *   PIANY I SZUMOWIN.
 * — „WIELKOŚĆ KAWAŁKÓW" (Orzysz) dotyczy RÓWNOŚCI KROJENIA
 *   I CZASU DOCHODZENIA.
 * — „MOC" (Bledzew) dotyczy SIŁY GRZANIA.
 * — „ZAGĘSZCZANIE" dotyczy DODATKÓW WIĄŻĄCYCH PŁYN.
 * — „ILE WODY NAPRAWDĘ POTRZEBA" dotyczy ILOŚCI PŁYNU.
 * TUTAJ chodzi o STOSUNEK POWIERZCHNI DO OBJĘTOŚCI —
 * o kształt naczynia i grubość warstwy, nie o ilość
 * ani o moc.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że tężnia jest zabytkiem ani że jest stara.
 * — NIE PISZĘ NIC o leczniczym działaniu czegokolwiek.
 * — NIE ROBIĘ TEMATU z papierni ani z soli.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE MYLĘ KONSTANCINA-JEZIORNY z KONSTANTYNOWEM ŁÓDZKIM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — osada Konstancin powstała w 1897 r. z parcelacji
 *   hrabiego Witolda Skórzewskiego na 261 działek, a nazwę
 *   nadano na cześć jego matki Konstancji; w tym samym roku
 *   rozplanowano Park Zdrojowy,
 * — pierwsze pensjonaty letniskowe stanęły w Skolimowie
 *   w 1900 r., prawa uzdrowiskowe miejscowość otrzymała
 *   w 1917 r., a miasto w obecnym kształcie — z Chylic,
 *   Skolimowa, Konstancina oraz miasta Jeziorna z dzielnicą
 *   Mirków — powstało w 1969 r.,
 * — w Jeziornie już w 1760 r. działał młyn papierniczy,
 *   zmodernizowany w latach siedemdziesiątych XVIII w.;
 *   zabudowania Mirkowskiej Fabryki Papieru pochodzą
 *   z około 1900 r.,
 * — tężnia solankowa zbudowana jest z gałęzi tarniny i kryta
 *   drewnianym daszkiem; powstała w latach 1977–1980,
 *   a solankę czerpie z odwiertu o głębokości około
 *   tysiąca sześciuset metrów, odkrytego przypadkiem
 *   w 1965 r. podczas wierceń geologicznych; solanka ma
 *   stężenie 7,5% i temperaturę wypływu 29°C,
 * — w mieście zachowały się willa Hugonówka z lat 1902–1903,
 *   wieża ciśnień z 1899 r., willa Szwajcarka z 1899 r.
 *   i kościół Wniebowzięcia NMP z lat 1911–1913,
 * — gmina liczy 23 sołectwa i 2 osiedla, w tym nadwiślańskie
 *   Kępę Oborską, Kępę Okrzewską, Gassy, Ciszycę, Łęg
 *   i Habdzin; dożynki gminne 2026 odbywają się w Słomczynie
 *   — pierwsze w tej wsi po dwunastu latach przerwy —
 *   z konkursem wieńców i Turniejem Sołectw i Osiedli.
 */
export const KONSTANCIN_JEZIORNA: CityContent = {
  slug: "konstancin-jeziorna",
  h1: "Thermomix Konstancin-Jeziorna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Konstancin-Jeziorna — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Konstancinie-Jeziornie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Konstancin-Jeziorna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Konstancinie-Jeziornie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Konstancina-Jeziorny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Konstancin-Jeziorna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Za mała patelnia psuje więcej obiadów niż za słaby ogień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Konstancinie-Jeziornie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "powierzchnia",
      heading: "Tężnia z gałęzi tarniny — czyli o powierzchni styku",
      paragraphs: [
        "Konstancińska tężnia jest urządzeniem zaskakująco prostym. Solankę z odwiertu o głębokości około tysiąca sześciuset metrów puszcza się po ścianie z gałęzi tarniny i pozwala jej spływać. Nic się nie podgrzewa, nic nie kręci, nic nie pompuje ponad to, co konieczne. Cała konstrukcja robi jedną rzecz: rozkłada ciecz na możliwie największą powierzchnię, żeby woda odchodziła z niej szybciej. Gałęzie tarniny są tam dlatego, że mają dużo drobnych rozgałęzień.",
        "To jest zasada, która w kuchni rządzi połową tego, co robimy — a prawie nikt o niej nie myśli, bo w przepisach nie ma na nią miejsca. Brzmi tak: im większy stosunek powierzchni do objętości, tym szybciej cokolwiek się dzieje. Parowanie, stygnięcie, rumienienie, rozmrażanie, marynowanie — wszystko.",
        "Najbardziej praktyczny przykład: sos odparuje szybciej w szerokim rondlu niż w wysokim garnku. Przy tym samym ogniu, przy tej samej ilości płynu. Jeśli sos nie chce zgęstnieć, to zanim sięgniecie po mąkę albo śmietanę, warto przelać go do czegoś szerszego. Bardzo często to wystarczy.",
        "Drugi przykład jest jeszcze częstszy. Warzywa rozłożone na blasze w jednej warstwie rumienią się. Te same warzywa usypane w kopiec — duszą się we własnej parze i wychodzą miękkie, blade i mokre. To nie kwestia piekarnika ani temperatury: para po prostu nie ma dokąd uciec. Dwie blachy zamiast jednej rozwiązują ten problem całkowicie.",
        "Stąd bierze się też rzecz, którą powtarzam najczęściej ze wszystkich: „za mała patelnia” jest w domowej kuchni częstszym błędem niż „za słaby ogień”. Zimne składniki wrzucone hurtem na ciasną patelnię wychładzają ją i zamiast smażenia zaczyna się duszenie. Zwiększanie ognia tego nie odwróci — trzeba dać im miejsce albo smażyć partiami.",
        "Kilka mniejszych zastosowań tej samej zasady. Zupa przelana do płaskiego naczynia stygnie wyraźnie szybciej, co ma znaczenie, kiedy chcemy ją schować, a nie czekać pół wieczoru. Marynata działa właściwie tylko na powierzchni, więc o wyniku decyduje bardziej wielkość kawałka niż liczba godzin. A jedzenie zamrożone na płasko zamarza szybciej i rozmraża się szybciej — dlatego mięso mielone czy zupę lepiej zamrażać w płaskiej torebce niż w pojemniku-kostce.",
        "Zasada działa oczywiście również w drugą stronę i to bywa równie użyteczne. Kiedy czegoś nie chcemy wysuszyć, zmniejszamy powierzchnię. Pieczeń trzyma się w całości i kroi dopiero przed podaniem. Chleb przechowuje się bochenkiem, a nie pokrojony. Ser w kawałku wysycha wolniej niż ser w plastrach. To są te same fizyczne prawa, tylko wykorzystane odwrotnie.",
        "Z tego wynika też różnica między kostką, słupkami i plastrami tego samego warzywa — ale o wielkości kawałków pisałam już osobno, bo to zasługuje na własne miejsce.",
        "Teraz uczciwie o sprzęcie, i będzie to po części na jego niekorzyść. Thermomix tej zasady nie unieważnia. Jego naczynie ma stałą szerokość i dość wąskie dno, więc odparowanie idzie w nim wolniej niż w szerokim rondlu. Jeśli komuś zależy na szybkim zredukowaniu sosu, patelnia wygra.",
        "Ma za to przewagę tam, gdzie liczy się coś przeciwnego. Skoro miesza bez przerwy, ciepło rozkłada się równo w całej objętości i nic nie siedzi na gorącym dnie. Wąskie, głębokie naczynie, które ciągle miesza, jest więc zaletą wszędzie tam, gdzie zależy nam na tym, żeby się nie przypaliło — przy gęstych sosach, budyniach, masach i kremach. Trzeba tylko wiedzieć, w którym z tych dwóch przypadków się właśnie jest.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Konstancinie-Jeziornie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie sos albo zupę, które nigdy nie chcą zgęstnieć — powiedzcie przy umawianiu. Zrobimy je razem i pokażę, gdzie leży różnica.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Konstancinie-Jeziornie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla konstancińskiej rodziny",
      paragraphs: [
        "Konstancin-Jeziorna liczy blisko siedemnaście tysięcy mieszkańców na niespełna osiemnastu kilometrach kwadratowych. Osada Konstancin powstała w 1897 roku z parcelacji hrabiego Witolda Skórzewskiego na dwieście sześćdziesiąt jeden działek, a nazwę nadano na cześć jego matki Konstancji; w tym samym roku rozplanowano Park Zdrojowy. Pierwsze pensjonaty letniskowe stanęły w Skolimowie w 1900 roku, prawa uzdrowiskowe miejscowość otrzymała w 1917, a miasto w obecnym kształcie — z Chylic, Skolimowa, Konstancina oraz miasta Jeziorna z dzielnicą Mirków — powstało w 1969 roku. Jeziorna jest przy tym znacznie starsza: już w 1760 roku działał tu młyn papierniczy, zmodernizowany w latach siedemdziesiątych XVIII wieku, a zabudowania Mirkowskiej Fabryki Papieru pochodzą z około 1900 roku. Tężnia solankowa, zbudowana z gałęzi tarniny i kryta drewnianym daszkiem, powstała w latach 1977–1980 i czerpie solankę z odwiertu o głębokości około tysiąca sześciuset metrów, odkrytego przypadkiem w 1965 roku podczas wierceń geologicznych. Zachowały się tu willa Hugonówka z lat 1902–1903, wieża ciśnień i willa Szwajcarka z 1899 roku oraz kościół Wniebowzięcia Najświętszej Marii Panny z lat 1911–1913. Gmina liczy dwadzieścia trzy sołectwa i dwa osiedla, w tym nadwiślańskie Kępę Oborską, Kępę Okrzewską, Gassy, Ciszycę, Łęg i Habdzin; dożynki gminne odbywają się w Słomczynie, z konkursem wieńców i Turniejem Sołectw i Osiedli.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Konstancina-Jeziorny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do Konstancina, Jeziorny, Skolimowa, Chylic, Mirkowa, Grapy, Borowiny, Czarnowa i Kierszku. Dojeżdżam też do wsi w gminie: Słomczyna, Obór, Cieciszewa, Gassów, Habdzina, Okrzeszyna i kęp nadwiślańskich.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Konstancin", "Jeziorna", "Skolimów", "Chylice", "Mirków", "Grapa"],

  nearbyHeading: "Poza Konstancin-Jeziornę też przyjadę",
  nearbyParagraphs: [
    "Piaseczno, Góra Kalwaria, Karczew, Warszawa i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Piaseczno", "Góra Kalwaria", "Karczew", "Warszawa"],

  about: blokOMnie("do Konstancina-Jeziorny", "w Konstancinie-Jeziornie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Konstancina-Jeziorny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — Konstancina, Jeziorny, Skolimowa, Chylic i Mirkowa — oraz do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Konstancin-Jeziornę w powiecie piaseczyńskim, a nie o Konstantynów Łódzki.",
    },
    ...faqWspolne("w Konstancinie-Jeziornie"),
    {
      question: "Dlaczego sos nie chce zgęstnieć?",
      answer:
        "Często dlatego, że gotuje się w za wąskim naczyniu. Sos odparowuje szybciej w szerokim rondlu niż w wysokim garnku — przy tym samym ogniu i tej samej ilości płynu. Zanim sięgniecie po mąkę czy śmietanę, warto po prostu przelać go do czegoś szerszego.",
    },
    {
      question: "Dlaczego pieczone warzywa wychodzą mokre zamiast rumiane?",
      answer:
        "Bo leżały na blasze w kopcu, a nie w jednej warstwie — para nie miała dokąd uciec i warzywa udusiły się we własnym soku. To samo dotyczy patelni: zbyt ciasno ułożone składniki wychładzają ją i zaczynają się dusić. Dwie blachy zamiast jednej rozwiązują ten problem całkowicie.",
    },
    {
      question: "Jak przechowywać jedzenie, żeby nie wysychało?",
      answer:
        "Zmniejszając powierzchnię. Pieczeń trzyma się w całości i kroi przed podaniem, chleb przechowuje bochenkiem, a nie pokrojony, ser w kawałku zamiast w plastrach. To ta sama zasada co przy odparowaniu, tylko wykorzystana odwrotnie.",
    },
  ],

  geo: { lat: 52.0939, lng: 21.1178 },
};
