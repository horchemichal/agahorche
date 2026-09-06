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
 * RUDNIK NAD SANEM — polska stolica wikliniarstwa. Plecionkarstwo jest tu
 * tradycją od XIX wieku, działa Centrum Wikliniarstwa, a wyroby z Rudnika
 * są znane w kraju i za granicą.
 *
 * KĄT: to jest miasto pracy wykonywanej W DOMU. Wiklinę plecie się
 * przy stole, w kuchni albo w warsztacie obok, często całą rodziną
 * i o różnych porach. Dom nie jest tu wyłącznie miejscem odpoczynku
 * — jest też miejscem pracy, i to zmienia kuchnię bardziej, niż widać
 * na pierwszy rzut oka: gotuje się między jednym a drugim, w przerwie,
 * z rękami zajętymi czym innym.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Rudnik nad Sanem jest uznawany za polską stolicę wikliniarstwa;
 *   tradycja plecionkarska sięga tu XIX wieku,
 * — w mieście działa Centrum Wikliniarstwa,
 * — Rudnik leży nad Sanem, w powiecie niżańskim,
 * — okolica jest w dużej mierze rolnicza i leśna,
 * — miasto sąsiaduje z Niskiem, Ulanowem i Leżajskiem.
 *
 * CZEGO NIE MA: liczby zakładów i osób zajmujących się wikliną, danych
 * o eksporcie, twierdzeń o tym, ile rodzin pracuje w domu.
 */
export const RUDNIK_NAD_SANEM: CityContent = {
  slug: "rudnik-nad-sanem",
  h1: "Thermomix Rudnik nad Sanem – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Rudnik nad Sanem — prezentacja i cena",
  seoDescription:
    "Thermomix w Rudniku nad Sanem: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%, elastyczne terminy. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rudnik nad Sanem — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rudniku. Prezentacja bezpłatna, termin dopasowany do Waszego dnia.",

  lead:
    "Przyjeżdżam do Rudnika nad Sanem z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Ulanowa, Kopek, Przędzela i okolicznych wsi.",

  highlights: highlightyStandardowe("Rudnik i okoliczne miejscowości"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rudniku – jak wygląda prezentacja?",
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
      id: "praca-w-domu",
      heading: "Miasto, w którym pracuje się w domu",
      paragraphs: [
        "Rudnik jest polską stolicą wikliniarstwa i tradycja plecionkarska sięga tu XIX wieku. Ważniejsze od samej ciekawostki jest to, jak taka praca wygląda: wiklinę plecie się przy stole, w kuchni albo w warsztacie obok, często całą rodziną i o porach, które nie mają nic wspólnego z ośmioma godzinami.",
        "Dom nie jest więc tutaj wyłącznie miejscem odpoczynku — jest też miejscem pracy. A to zmienia kuchnię bardziej, niż widać na pierwszy rzut oka. Nie ma wyraźnej granicy „wróciłam i gotuję”. Gotuje się między jednym a drugim, w przerwie, często z rękami zajętymi czymś innym i z robotą rozłożoną na stole.",
        "Właśnie dlatego argument, który tu naprawdę działa, jest bardzo prosty: urządzenie gotuje samo. Nastawiasz, wracasz do swojego, a po ustawionym czasie obiad jest gotowy. Nie trzeba przerywać pracy co dziesięć minut, żeby zamieszać, i nie trzeba stać przy kuchence, gdy się śpieszy z zamówieniem.",
        "Druga rzecz, równie praktyczna: wszystko dzieje się w jednym naczyniu. W domu, w którym stół bywa zajęty przez robotę, mniejszy bałagan w kuchni nie jest drobiazgiem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rudniku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli pracujecie w domu i dzień układa się nietypowo, powiedzcie po prostu, kiedy macie godzinę spokoju — dopasuję się, także w środku dnia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Rudnikiem. Jeżdżę po całej okolicy, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rudniku nad Sanem"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rudnickiej rodziny",
      paragraphs: [
        "Gdy dom jest jednocześnie warsztatem, obiad rzadko powstaje w jednym ciągu. Częściej jest czymś, co trzeba wcisnąć między inne rzeczy — i zwykle robi to ta sama osoba.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy Ty robisz coś innego, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których części gminy dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stróże",
    "Kopki",
    "Przędzel",
    "Chałupki",
    "Nowa Wieś",
    "Rudnik-Osiedle",
  ],

  nearbyHeading: "Okolica Rudnika",
  nearbyParagraphs: [
    "Ulanów, Nisko, Leżajsk, Stalowa Wola i Krzeszów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nisko", "Ulanów", "Leżajsk", "Stalowa Wola", "Nowa Sarzyna"],

  about: blokOMnie("do Rudnika", "w Rudniku i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rudnika nad Sanem bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rudniku nad Sanem"),
    {
      question: "Pracujemy w domu i dzień układa się nietypowo — kiedy możesz przyjechać?",
      answer:
        "Wtedy, kiedy Wam pasuje, łącznie ze środkiem dnia roboczego. Powiedzcie przy umawianiu, o której macie godzinę spokoju — dopasuję się do Waszego rytmu, a nie odwrotnie.",
    },
    {
      question: "Czy prezentacja bardzo zajmie stół?",
      answer:
        "Potrzebuję kawałka blatu i gniazdka, a nie całego stołu. Jeśli w kuchni jest ciasno albo stół jest zajęty, powiedzcie o tym przy umawianiu — przywiozę mniej naczyń i ugotujemy prościej.",
    },
  ],

  geo: { lat: 50.4364, lng: 22.2494 },
};
