import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * PAKOŚĆ — powiat inowrocławski,
 * woj. kujawsko-pomorskie, nad NOTECIĄ.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 5 116 mieszkańców (GUS 31.12.2024), 3,5 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 9 121 osób, 86,5 km².
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ PAKOŚĆ.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠⚠ ZAWYŻENIE NA TRZECH POZIOMACH NARAZ — REKORD
 *   TEJ FALI:
 *   — powiat i BIP gminy: „ponad 10 000" wobec 9 121
 *     w GUS (+9,6%),
 *   — portale: „ok. 6 tys." dla miasta wobec 5 116
 *     w GUS (+17,3%),
 *   — BIP gminy podaje też powierzchnię 82,9 km²
 *     wobec 86,5 w GUS.
 *   UŻYWAM WYŁĄCZNIE GUS. TWARDA GRANICA.
 * ⚠ ODMIANA: D. PAKOŚCI, Ms. W PAKOŚCI,
 *   przym. PAKOSKI (nie „pakościański").
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO SŁOWNIKOWO —
 *   NIE UŻYWAM ŻADNEJ.
 *   ⚠ NIEMIECKIEJ NAZWY MIASTA NIE USTALONO I NIE UŻYWAM.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — PRAWA MIEJSKIE 9 LUTEGO 1359 R. (data dzienna).
 * — ⚠⚠ RDZEŃ KĄTA — ZAMEK BUDOWANY W LATACH 1326–1330:
 *   NA PLANIE KWADRATU O BOKU OK. 30 M,
 *   POSTAWIONY NA FUNDAMENCIE Z GŁAZÓW ERATYCZNYCH.
 *   ⚠⚠ TO FUNDAMENT JEST TU ISTOTNY, NIE KSZTAŁT —
 *   kąt „kształt naczynia" jest zajęty (Szubin).
 *   O KWADRACIE WSPOMINAM JEDNYM ZDANIEM W RYSIE
 *   HISTORYCZNYM I NIE ROZWIJAM. TWARDA GRANICA.
 * — MIASTO LEŻY PO OBU BRZEGACH NOTECI, NA HISTORYCZNEJ
 *   GRANICY WIELKOPOLSKI I KUJAW.
 *   ⚠ ZERO ROZWIJANIA WĄTKU GRANICY — kąt zajęty
 *   w kilku miastach. Podaję jako fakt geograficzny.
 * — RATUSZ Z 1907 R., projektu Altmana i Soszyńskiego.
 * ⚠⚠ TO NAJUBOŻSZE W LICZBY MIASTO Z CAŁEJ FALI:
 *   SPISÓW RZEMIEŚLNIKÓW, LICZBY DOMÓW, DNI TARGOWYCH
 *   ANI WYKAZU CECHÓW NIE USTALONO. NIE ZGADUJĘ
 *   I NIE UZUPEŁNIAM. TWARDA GRANICA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Pakość.
 *   ⚠⚠ PUŁAPKA ROZBROJONA: „gęś biała kołudzka" wiąże się
 *   z Kołudą w GMINIE JANIKOWO, nie z Pakością.
 *   NIE PRZYPISUJĘ. TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: CO JEST POD SPODEM — warstwa, której się nie je.
 * Kąt od zamku z lat 1326–1330: ceglane mury postawiono
 * na fundamencie z głazów eratycznych, czyli z kamieni
 * przyniesionych tu przez lądolód. Fundamentu nikt nigdy
 * nie oglądał i nie po to go kładziono. W kuchni istnieje
 * cała kategoria rzeczy, które kładzie się na dno naczynia
 * nie po to, żeby je zjeść.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zamek w Pakości budowano w latach 1326–1330
 *   i że jego ceglane mury postawiono na fundamencie
 *   z głazów eratycznych — kamieni przyniesionych tu
 *   przez lądolód i zebranych z pól,
 * — ŻE FUNDAMENTU NIKT NIGDY NIE OGLĄDAŁ I NIE PO TO
 *   GO KŁADZIONO: jego jedynym zadaniem było utrzymać
 *   to, co nad nim,
 * — ⚠⚠ ŻE W KUCHNI ISTNIEJE CAŁA TAKA KATEGORIA
 *   I ŻE PRAWIE NIKT JEJ TAK NIE NAZYWA — TO JEST RDZEŃ:
 *   rzeczy kładzione na dno naczynia NIE PO TO,
 *   ŻEBY JE ZJEŚĆ,
 * — CO TO KONKRETNIE JEST:
 *   — WARSTWA GRUBO POKROJONYCH WARZYW POD PIECZENIĄ —
 *     unosi mięso nad dno, więc spód nie siedzi
 *     we własnym soku i nie robi się gąbczasty;
 *     przy okazji sok zbiera się między warzywami
 *     zamiast przypalać na blasze,
 *   — KOŚĆ ALBO GRUBY PLASTER CEBULI pod kawałkiem,
 *     który ma leżeć wyżej,
 *   — PAPIER DO PIECZENIA — najprostszy fundament,
 *     jaki istnieje,
 *   — SIATKA ALBO RUSZT W NACZYNIU DO GOTOWANIA
 *     NA PARZE: produkt nie może dotykać wody, bo wtedy
 *     się gotuje, a nie parzy — to jest cała różnica
 *     i cały sens tej kratki,
 * — ⚠⚠ ŻE WSPÓLNA ZASADA JEST JEDNA: SPÓD POTRZEBUJE
 *   PRZERWY. Wszystko, co leży płasko na gorącym dnie
 *   albo we własnym płynie, zachowuje się inaczej niż
 *   reszta kawałka — i to jest ta jedna strona, która
 *   potem nie wychodzi,
 * — ŻE FUNDAMENT WOLNO POTEM ZJEŚĆ ALBO WYRZUCIĆ
 *   i że to nie zmienia jego roli: warzywa spod pieczeni
 *   bywają najlepszą częścią obiadu, ale nie po to
 *   tam leżały,
 * — ⚠ UCZCIWIE O SPRZĘCIE: koszyczek i taca Varoma
 *   to dokładnie ten sam pomysł — konstrukcja, która
 *   trzyma jedzenie NAD płynem, a nie w nim. Kto to
 *   rozumie, przestaje się dziwić, dlaczego produkt
 *   leżący w wodzie wychodzi inaczej niż ten nad nią.
 *   ⚠ ODSYŁAM DO STRONY O DNIE NACZYNIA,
 *   NIE ROZWIJAM PRZYWIERANIA.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Szubin).
 *   Kwadratowy zarys zamku to JEDNO ZDANIE w rysie.
 * — ⚠⚠ ZERO PRZYWIERANIA I PRZYPALANIA JAKO TEMATU —
 *   kąt zajęty (Dobre Miasto). Odsyłam jednym zdaniem.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO DAŃ UKŁADANYCH WARSTWAMI — kąt zajęty
 *   (Nowe Miasto Lubawskie). Tam chodzi o KOLEJNOŚĆ
 *   WARSTW, KTÓRE SIĘ JE; tutaj o JEDNĄ WARSTWĘ,
 *   KTÓREJ SIĘ NIE JE. TWARDA GRANICA.
 * — ⚠ ZERO GRANICY REGIONÓW JAKO TEMATU — kąt zajęty.
 * — ⚠ ZERO POWIERZCHNI STYKU — kąt zajęty
 *   (Konstancin-Jeziorna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO KALWARII PAKOSKIEJ I CAŁEJ WARSTWY
 *   WYZNANIOWEJ. Temat dominuje praktycznie wszystkie
 *   wyniki wyszukiwania o tym mieście, łącznie z BIP-em
 *   gminy. Dlatego cały tekst opieram na zamku
 *   i na geografii — to jest świadoma decyzja, a nie
 *   przeoczenie. TWARDA GRANICA BEZWZGLĘDNA —
 *   NAJWAŻNIEJSZA NA TEJ STRONIE.
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków narodowościowych.
 * — ZERO wyludniania i bezrobocia.
 * — ZERO okoliczności zniszczenia zamku.
 * — ZERO niemieckiej nazwy miasta.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „DNO NACZYNIA — PRZYWIERANIE I PRZYPALANIE"
 *   (Dobre Miasto) dotyczy TEGO, CO ZOSTAJE NA DNIE
 *   I JAK TO ZESKROBAĆ. ⚠⚠ TO JEST NAJBLIŻSZY KĄT.
 *   TUTAJ chodzi o TO, CO SIĘ NA DNO KŁADZIE CELOWO,
 *   ŻEBY UNIOSŁO RESZTĘ. Odsyłam tam wprost.
 * — „DANIA UKŁADANE WARSTWAMI" (Nowe Miasto Lubawskie)
 *   dotyczy KOLEJNOŚCI WARSTW DANIA.
 * — „SZKLIWO" (Kruszwica) dotyczy MATERIAŁU ŚCIANY
 *   NACZYNIA.
 * — „ŚCIĘTY NAROŻNIK" (Szubin) dotyczy KSZTAŁTU FORMY.
 * TUTAJ chodzi o WARSTWĘ POD SPODEM, KTÓREJ SIĘ NIE JE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczb ze strony powiatu ani z BIP gminy.
 * — NIE PRZYPISUJĘ Pakości gęsi kołudzkiej.
 * — NIE PODAJĘ spisów rzemieślników ani liczby domów —
 *   nie ustalono i nie zgaduję.
 * — NIE ROZWIJAM kształtu zamku.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pakość leży nad Notecią, w powiecie inowrocławskim,
 *   jest miastem w gminie miejsko-wiejskiej i liczy 5 116
 *   mieszkańców (GUS, 31.12.2024) na 3,5 km²; cała gmina
 *   ma 9 121 osób na 86,5 km²,
 * — prawa miejskie miasto otrzymało 9 lutego 1359 roku,
 * — zamek budowano w latach 1326–1330 na planie kwadratu
 *   o boku około trzydziestu metrów, a jego ceglane mury
 *   postawiono na fundamencie z głazów eratycznych,
 * — miasto leży po obu brzegach Noteci, na historycznej
 *   granicy Wielkopolski i Kujaw,
 * — ratusz pochodzi z 1907 roku i zaprojektowali go
 *   Altman i Soszyński.
 */
export const PAKOSC: CityContent = {
  slug: "pakosc",
  h1: "Thermomix Pakość – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pakość — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Pakości: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pakość — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pakości. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pakości z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Pakość"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Spód potrzebuje przerwy. Od dna, od płynu, od gorąca.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pakości – jak wygląda prezentacja?",
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
      id: "co-pod-spodem",
      heading: "Kamienie, których nikt nigdy nie zobaczył",
      paragraphs: [
        "Zamek w Pakości budowano w latach 1326–1330. Mury były ceglane, ale postawiono je na fundamencie z głazów eratycznych — kamieni przyniesionych tu przez lądolód i zebranych z okolicznych pól.",
        "Tego fundamentu nikt nigdy nie oglądał i nie po to go kładziono. Miał jedno zadanie: utrzymać to, co nad nim. Skuteczność mierzyło się tym, że nie było o nim mowy.",
        "W kuchni istnieje cała taka kategoria i prawie nikt jej tak nie nazywa: rzeczy, które kładzie się na dno naczynia nie po to, żeby je zjeść.",
        "Warstwa grubo pokrojonych warzyw pod pieczenią to najczystszy przykład. Unosi mięso nad dno, więc spód nie siedzi we własnym soku i nie robi się gąbczasty. Przy okazji sok zbiera się między warzywami zamiast zasychać bezpośrednio na blasze — o samym dnie naczynia i o tym, co się do niego przykleja, pisałam osobno przy innym mieście.",
        "Ta sama funkcja, tylko mniejsza: kość albo gruby plaster cebuli podłożony pod kawałek, który ma leżeć wyżej. Papier do pieczenia, czyli najprostszy fundament, jaki istnieje. I siatka albo ruszt zakładane w naczyniu do gotowania na parze.",
        "Ten ostatni przypadek jest najważniejszy, bo najczęściej się go lekceważy. Produkt nie może dotykać wody — jeśli dotyka, to się gotuje, a nie parzy. To są dwie różne rzeczy dające dwa różne efekty, i cała różnica bierze się z kilku centymetrów przerwy.",
        "Zasada wspólna dla wszystkich tych przypadków brzmi prosto: spód potrzebuje przerwy. Wszystko, co leży płasko na gorącym dnie albo we własnym płynie, zachowuje się inaczej niż reszta kawałka — i to jest zwykle ta jedna strona, która potem nie wychodzi.",
        "Fundament wolno potem zjeść albo wyrzucić i to niczego nie zmienia. Warzywa spod pieczeni bywają najlepszą częścią obiadu, ale nie po to tam leżały — i dobrze o tym pamiętać przy dobieraniu ich grubości.",
        "Uczciwie o sprzęcie, bo tu akurat sprawa jest elegancka. Koszyczek i taca Varoma to dokładnie ten sam pomysł: konstrukcja, która trzyma jedzenie nad płynem, a nie w nim.",
        "Kto to rozumie, przestaje się dziwić, czemu produkt leżący w wodzie wychodzi inaczej niż ten zawieszony nad nią. A to jest jedna z pierwszych rzeczy, o które ludzie pytają po zakupie — więc wolę powiedzieć ją przed.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Funkcje Thermomixa" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pakości?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz zobaczyć na własne oczy różnicę między gotowaniem a parowaniem — powiedz to przy umawianiu. To się pokazuje w kilkanaście minut i zwykle zapada w pamięć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pakości"),
    sekcjaRaty("w Pakości"),
    {
      id: "rodzina",
      heading: "Thermomix dla pakoskiej rodziny",
      paragraphs: [
        "Pakość leży nad Notecią, w powiecie inowrocławskim, jest miastem w gminie miejsko-wiejskiej i liczy ponad pięć tysięcy mieszkańców na trzech i pół kilometra kwadratowego; cała gmina ma ponad dziewięć tysięcy osób na osiemdziesięciu sześciu i pół kilometra kwadratowego. Prawa miejskie miasto otrzymało 9 lutego 1359 roku. Zamek budowano tu w latach 1326–1330, na planie kwadratu o boku około trzydziestu metrów, a jego ceglane mury postawiono na fundamencie z głazów eratycznych — kamieni przyniesionych przez lądolód. Miasto leży po obu brzegach Noteci, na historycznej granicy Wielkopolski i Kujaw. Ratusz pochodzi z 1907 roku i zaprojektowali go Altman i Soszyński.",
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

  districtsHeading: "Do których części Pakości dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, po obu brzegach Noteci — jest niewielkie, trzy i pół kilometra kwadratowego. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Pakość też przyjadę",
  nearbyParagraphs: [
    "Inowrocław, Janikowo, Barcin, Kruszwica, Strzelno, Gniewkowo i Mogilno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Inowrocław", "Janikowo", "Barcin", "Kruszwica"],

  about: blokOMnie("do Pakości", "w Pakości", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pakości bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta po obu brzegach Noteci i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Pakość jest miastem w gminie miejsko-wiejskiej w powiecie inowrocławskim.",
    },
    ...faqWspolne("w Pakości"),
    {
      question: "Po co kłaść warzywa pod pieczeń?",
      answer:
        "Żeby unieść mięso nad dno. Spód nie siedzi wtedy we własnym soku i nie robi się gąbczasty, a sok zbiera się między warzywami zamiast zasychać na blasze. To ta sama funkcja, którą pełni kość, gruby plaster cebuli albo papier do pieczenia — spód potrzebuje przerwy.",
    },
    {
      question: "Czym różni się gotowanie od gotowania na parze?",
      answer:
        "Tym, czy produkt dotyka wody. Jeśli dotyka — gotuje się; jeśli jest zawieszony nad nią — parzy się. To dwie różne rzeczy dające dwa różne efekty, a cała różnica bierze się z kilku centymetrów przerwy. Koszyczek i taca Varoma robią dokładnie to: trzymają jedzenie nad płynem, a nie w nim.",
    },
  ],

  geo: { lat: 52.8014, lng: 18.0852 },
};
