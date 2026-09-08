import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * GŁOGÓW MAŁOPOLSKI — miasteczko na północ od Rzeszowa, na skraju
 * Puszczy Sandomierskiej. Tuż obok, w Jasionce, leży port lotniczy
 * Rzeszów-Jasionka i przylegająca do niego strefa przemysłowa.
 *
 * KĄT: lotnisko. To jedyne miejsce w obu falach, gdzie w wielu domach
 * pracuje się w rytmie, który nie ma nic wspólnego ani ze zmianą
 * w zakładzie, ani z etatem od ósmej: obsługa lotniska i strefy chodzi
 * na dyżury o porach wyznaczonych przez rozkład lotów, a nie przez
 * zegar. Kuchennie znaczy to coś konkretnego i rzadko nazywanego:
 * TYDZIEŃ NIE MA STAŁEGO KSZTAŁTU. Nie da się „gotować w niedzielę
 * na tydzień", bo w każdym tygodniu godziny są inne.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — port lotniczy Rzeszów-Jasionka leży w gminie Trzebownisko,
 *   w bezpośrednim sąsiedztwie gminy Głogów Małopolski,
 * — przy lotnisku funkcjonuje strefa przemysłowa i park technologiczny,
 * — Głogów Małopolski leży na skraju Puszczy Sandomierskiej, na północ
 *   od Rzeszowa,
 * — miasto ma zachowany historyczny układ urbanistyczny z rynkiem,
 * — do gminy należą m.in. Rudna Mała, Wysoka Głogowska, Przewrotne,
 *   Budy Głogowskie, Pogwizdów Nowy, Styków.
 *
 * CZEGO NIE MA: rozkładów lotów, nazw firm ze strefy, danych
 * o zatrudnieniu, liczby pasażerów.
 */
export const GLOGOW_MALOPOLSKI: CityContent = {
  slug: "glogow-malopolski",
  h1: "Thermomix Głogów Małopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Głogów Małopolski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Głogowie Małopolskim: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Cena, raty 0%, elastyczne terminy. Aga, 517 185 691.",
  ogTitle: "Thermomix Głogów Małopolski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Głogowie Małopolskim. Prezentacja bezpłatna, termin pod Wasz grafik.",

  lead:
    "Przyjeżdżam do Głogowa Małopolskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Rudnej Małej, Wysokiej Głogowskiej, Przewrotnego i pozostałych sołectw.",

  highlights: highlightyStandardowe("Głogów Małopolski i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Głogowie Małopolskim – jak wygląda prezentacja?",
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
      id: "tydzien-bez-ksztaltu",
      heading: "Tydzień, który za każdym razem wygląda inaczej",
      paragraphs: [
        "Tuż obok gminy leży lotnisko w Jasionce, a przy nim strefa przemysłowa. W wielu tutejszych domach ktoś pracuje właśnie tam — i to jest rytm, który nie przypomina ani zmiany w zakładzie, ani etatu od ósmej do szesnastej. Godziny wyznacza grafik, a grafik wyznacza rozkład, więc bywają dyżury o świcie, bywają wieczorne, a w przyszłym tygodniu wszystko jest przestawione.",
        "Kuchennie oznacza to coś, o czym prawie nikt nie pisze, bo wszystkie poradniki zakładają stały tydzień. Tutaj nie da się „ugotować w niedzielę na tydzień”, bo nie wiadomo jeszcze, jak ten tydzień będzie wyglądał. Nie da się też ustalić stałej pory obiadu, skoro co siedem dni jest inna.",
        "Rzecz, która przy takim układzie realnie pomaga, jest bardzo prozaiczna: możliwość ugotowania czegoś wtedy, gdy akurat jest chwila — o dziewiątej rano albo o dwudziestej drugiej — bez robienia z tego wydarzenia. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc nie trzeba przy nim stać; powstaje w jednym naczyniu, więc nie ma po nim godziny sprzątania. A odgrzewanie na parze sprawia, że to, co czeka w lodówce na kogoś wracającego po dyżurze, nadal nadaje się do jedzenia.",
        "To nie jest planowanie posiłków z tabelką. To raczej odwrotność: mniejszy koszt ugotowania czegokolwiek w losowym momencie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Głogowie Małopolskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli pracujecie w grafiku, po prostu podajcie kilka terminów, które Wam pasują — dopasuję się, także w środku dnia roboczego albo w weekend.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Głogowem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Głogowie Małopolskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla głogowskiej rodziny",
      paragraphs: [
        "Gdy jedno z rodziców pracuje w zmiennym grafiku, a dzieci mają stałe godziny szkoły, obiad musi być gotowy niezależnie od tego, kto akurat jest w domu.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Głogów Małopolski",
    "Rudna Mała",
    "Wysoka Głogowska",
    "Przewrotne",
    "Budy Głogowskie",
    "Pogwizdów Nowy",
    "Pogwizdów Stary",
    "Styków",
    "Hucisko",
    "Lipie",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Rzeszów, Sokołów Małopolski, Kolbuszowa, Łańcut i Boguchwała są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Rzeszów",
    "Sokołów Małopolski",
    "Kolbuszowa",
    "Łańcut",
    "Boguchwała",
    "Nowa Dęba",
  ],

  about: blokOMnie("do Głogowa Małopolskiego", "w gminie i okolicy Rzeszowa", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Głogowa Małopolskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Głogowie Małopolskim"),
    {
      question: "Pracuję w zmiennym grafiku — kiedy możesz przyjechać?",
      answer:
        "Wtedy, kiedy Wam pasuje: rano, wieczorem, w środku dnia roboczego albo w weekend. Podajcie kilka terminów, a wybiorę z nich. Wolę dopasować się do Waszego grafiku, niż prosić, żebyście dopasowali się do mojego.",
    },
    {
      question: "Nie da się u nas planować posiłków na tydzień — czy to problem?",
      answer:
        "Nie i nie będę Was do tego namawiać. Przy zmiennym grafiku sens jest odwrotny: chodzi o to, żeby ugotowanie czegoś w losowym momencie kosztowało mało — bez stania przy garnku i bez godziny sprzątania po. To pokażę na prezentacji.",
    },
  ],

  geo: { lat: 50.1417, lng: 21.9639 },
};
