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
 * MARKI — miasto, które wyrosło wokół dziewiętnastowiecznej przędzalni.
 * Przez dziesięciolecia żyło z przerabiania surowca na coś użytecznego.
 *
 * KĄT: resztki. Co zrobić z tym, co zostało po obiedzie i co leży
 * w lodówce trzeci dzień. Temat, o którym nie mówi żaden materiał
 * sprzedażowy, bo nie brzmi atrakcyjnie — a dotyczy każdej kuchni.
 *
 * SEKCJA MA BYĆ KONKRETNA:
 * — co realnie da się zrobić: zupa krem z warzyw, które zostały; pasta
 *   z resztki mięsa albo z twarogu; przecier z owoców, które już nie
 *   nadają się do jedzenia na surowo,
 * — czego urządzenie NIE zrobi: nie przedłuża świeżości i nie „ratuje”
 *   niczego, co jest już zepsute,
 * — i rzecz najuczciwsza: to nie jest oszczędność, którą warto liczyć
 *   w pieniądzach; to jest po prostu mniej wyrzucania.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH ZALECEŃ DOTYCZĄCYCH BEZPIECZEŃSTWA ŻYWNOŚCI. Ile dni,
 *   co jeszcze nadaje się do zjedzenia, jak rozpoznać zepsute — to jest
 *   dziedzina, w której zła rada szkodzi (zasada ze Skierniewic).
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI w złotówkach. Liczenie oszczędności
 *   na jedzeniu jest na liście chwytów, których Aga nie używa (Jarocin).
 *
 * ROZGRANICZENIE. Sulechów mówi o przerobie DUŻEJ ilości własnych owoców
 * we wrześniu, Stargard o gotowaniu dla dwóch domów. Tutaj chodzi
 * o codzienne resztki z własnego obiadu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Marki wyrosły wokół dawnej przędzalni.
 */
export const MARKI: CityContent = {
  slug: "marki",
  h1: "Thermomix Marki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Marki — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Markach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Marki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Markach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Marek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Marki i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Danie przygotowane w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Najczęściej używa się tego do rzeczy najprostszych — także do tego, co zostało.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Markach – jak wygląda prezentacja?",
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
      id: "resztki",
      heading: "Miasto, które żyło z przerabiania — i co zrobić z tym, co zostało",
      paragraphs: [
        "Marki wyrosły wokół przędzalni: przez dziesięciolecia całe miasto zajmowało się przerabianiem surowca na coś użytecznego. Wykorzystam to do tematu, którego nie porusza żaden materiał sprzedażowy, bo nie brzmi atrakcyjnie, a dotyczy każdej kuchni bez wyjątku: resztek.",
        "Chodzi o te trzy łyżki ryżu, pół miski ugotowanych warzyw, kawałek pieczonego mięsa i owoce, które już nie nadają się do jedzenia na surowo, ale jeszcze są dobre. W większości domów kończą w koszu, i to nie z lenistwa — po prostu robienie z nich czegoś sensownego wymaga wyciągnięcia blendera, garnka i chęci, a wieczorem nie ma żadnej z tych trzech rzeczy.",
        "Konkretnie, co da się z tym zrobić w jednym naczyniu i bez stania nad garnkiem. Z warzyw, które zostały, wychodzi zupa krem — rozdrabnianie i podgrzewanie dzieje się w tym samym miejscu, więc cała robota to wrzucić i włączyć. Z resztki mięsa albo z twarogu robi się pasta do chleba w dwie minuty. Owoce, które zmiękły, idą na przecier albo mus. To są dokładnie te czynności, przy których normalnie brakuje energii, żeby zacząć.",
        "Powiem od razu, czego to nie robi, bo tu łatwo obiecać za dużo. Urządzenie niczego nie przedłuża i niczego nie ratuje. Jedzenie, które jest już zepsute, pozostaje zepsute — zmiksowanie nie zmienia w tej sprawie absolutnie nic. Nie doradzam też, co jeszcze nadaje się do zjedzenia, a co nie: to jest dziedzina, w której zła rada realnie komuś szkodzi, a ja nie jestem od tego. Kierujcie się tym, czym kierowaliście się dotąd.",
        "I rzecz ostatnia, uczciwa: nie będę Wam liczyć, ile na tym zaoszczędzicie. Liczenie oszczędności na jedzeniu to jeden z tych chwytów, których nie używam, bo wychodzą z niego liczby dopasowane do tezy. Prawdziwy zysk jest inny i trudniej go zapisać w tabelce — po prostu mniej rzeczy ląduje w koszu, bo próg wejścia w „zrobię z tego coś” zrobił się niski.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Markach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie, zróbmy na spotkaniu coś z tego, co macie akurat w lodówce — to uczciwszy test niż danie z moich składników.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Markach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mareckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Warszawy.",
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

  districtsHeading: "Do których części Marek dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Pustelnik",
    "Struga",
    "Czarna Struga",
    "Nowe Marki",
    "Lisi Jar",
    "Kosynierów",
    "Szkolna",
    "Sosnowa",
    "Duża",
  ],

  nearbyHeading: "Poza Marki też przyjadę",
  nearbyParagraphs: [
    "Ząbki, Zielonka, Kobyłka i Radzymin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ząbki", "Zielonka", "Kobyłka", "Radzymin", "Warszawa", "Wołomin"],

  about: blokOMnie("do Marek", "w Markach i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Marek bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Markach"),
    {
      question: "Czy przyda się do resztek z obiadu?",
      answer:
        "To jedno z częstszych zastosowań, choć mało efektowne. Z warzyw, które zostały, wychodzi zupa krem — rozdrabnianie i podgrzewanie w jednym naczyniu. Z resztki mięsa albo twarogu pasta do chleba w dwie minuty. Z owoców, które zmiękły — przecier.",
    },
    {
      question: "Czy dzięki temu jedzenie dłużej się trzyma?",
      answer:
        "Nie. Urządzenie niczego nie przedłuża i niczego nie ratuje — to, co jest zepsute, pozostaje zepsute. Nie doradzam też, co jeszcze nadaje się do zjedzenia; to dziedzina, w której zła rada szkodzi, a ja nie jestem od tego.",
    },
  ],

  geo: { lat: 52.3208, lng: 21.1058 },
};
