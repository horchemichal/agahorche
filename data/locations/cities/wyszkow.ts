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
 * WYSZKÓW — miasto nad Bugiem, na skraju Puszczy Białej, mocno
 * zniszczone w czasie wojny i odbudowane. W okolicy stale coś się
 * buduje i wykańcza.
 *
 * KĄT: kuchnia tymczasowa. Gotowanie w domu w trakcie budowy albo
 * remontu, gdy nie ma jeszcze normalnej kuchni — a jeść trzeba
 * codziennie. Sytuacja, o której nie pisze nikt, choć trwa miesiącami.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — do pracy urządzenie potrzebuje gniazdka i kawałka stabilnego blatu,
 *   i to jest w takiej sytuacji jego realna zaleta,
 * — gotowanie odbywa się w zamkniętym naczyniu, więc nie ma przy tym
 *   otwartego ognia ani rozpryskiwania — w prowizorycznej kuchni
 *   to ma znaczenie,
 * — CZEGO NIE ZROBIĘ: nie doradzę nic w sprawach instalacji, obciążenia
 *   gniazdek, przedłużaczy ani prowizorki elektrycznej,
 * — i uczciwa rada: nie kupujcie „na przyszłą kuchnię" z rocznym
 *   wyprzedzeniem, jeśli teraz i tak nie będziecie z tego korzystać.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD ELEKTRYCZNYCH. To jest dziedzina, w której zła rada
 *   kończy się pożarem — kierować do elektryka, kropka.
 * — ŻADNYCH TWIERDZEŃ O POBORZE PRĄDU, mocy ani o tym, co wytrzyma
 *   dana instalacja.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU ŻYWNOŚCI w warunkach remontowych
 *   (zasada ze Skierniewic).
 *
 * ROZGRANICZENIE. Tarnowskie Góry mówią o nowej, urządzanej kuchni
 * (co w niej postawić), Dobrodzień o rozmowie przed montażem mebli,
 * Będzin o małej kuchni. Tutaj chodzi o OKRES BEZ KUCHNI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Wyszków leży nad Bugiem, przy Puszczy Białej, i został odbudowany
 *   po zniszczeniach wojennych.
 */
export const WYSZKOW: CityContent = {
  slug: "wyszkow",
  h1: "Thermomix Wyszków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wyszków — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wyszkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wyszków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wyszkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wyszkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Wyszków i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Danie przygotowane w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Gniazdko i kawałek stabilnego blatu — tyle wystarczy, żeby ugotować obiad.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wyszkowie – jak wygląda prezentacja?",
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
      id: "kuchnia-tymczasowa",
      heading: "Miasto odbudowane i wciąż budowane — i kuchnia, której jeszcze nie ma",
      paragraphs: [
        "Wyszków odbudowywano po wojnie, a w okolicy do dziś stale coś się stawia i wykańcza. Wykorzystam to do sytuacji, która trwa miesiącami, a nie pisze o niej nikt: dom jest w budowie albo w remoncie, kuchni jeszcze nie ma, a jeść trzeba codziennie.",
        "To jest jeden z niewielu przypadków, w których takie urządzenie ma przewagę wynikającą wprost z jego budowy. Do pracy potrzebuje gniazdka i kawałka stabilnego blatu — nie kuchenki, nie okapu, nie zabudowy. W domu, w którym stoi jeszcze pusto, a kuchnia to stół warsztatowy i czajnik, to jest różnica między obiadem a kolejnym daniem na wynos.",
        "Druga rzecz jest praktyczna: gotowanie odbywa się w zamkniętym naczyniu. Nie ma otwartego ognia i nie ma rozpryskiwania na wszystkie strony. W prowizorycznych warunkach, gdzie wszędzie jest pył i nic nie stoi na swoim miejscu, ma to znaczenie większe niż w gotowej kuchni.",
        "Teraz rzecz, przy której jestem stanowcza. Nie doradzę Wam nic w sprawach elektrycznych: ani co podłączyć do której instalacji, ani czy dane gniazdko wytrzyma, ani czy można to podpiąć pod przedłużacz w budowie. To jest dziedzina, w której zła rada kończy się pożarem, a ja nie jestem elektrykiem. Z takim pytaniem trzeba iść do kogoś, kto zna Waszą instalację i widzi ją na własne oczy.",
        "Nie doradzę też, jak i gdzie w takich warunkach trzymać jedzenie — to osobna dziedzina, w której też nie mam kompetencji i wolę o tym milczeć, niż powiedzieć coś na wyczucie.",
        "I rada uczciwa, choć niewygodna dla mnie: nie kupujcie z myślą o kuchni, która powstanie za rok. Jeżeli przez najbliższe miesiące i tak nie będziecie z tego korzystać, to są to pieniądze wydane na coś, co stoi w kartonie. Sprzęt kupuje się na teraz. Jeśli jednak gotujecie w prowizorce już od pół roku i jeszcze trochę to potrwa, to akurat jest dobry moment, a nie zły.",
      ],
      links: [{ href: "/thermomix/funkcje", label: "Funkcje TM7" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wyszkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Prowizoryczna kuchnia mi nie przeszkadza — potrzebny jest tylko stabilny blat i gniazdko. Nie musicie niczego sprzątać na tę okazję.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wyszkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wyszkowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Wyszkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Latoszek",
    "Osiedle Polonez",
    "Rybienko Leśne",
    "Rybienko Stare",
    "Osiedle Słoneczne",
    "Nadgórze",
  ],

  nearbyHeading: "Poza Wyszków też przyjadę",
  nearbyParagraphs: [
    "Radzymin, Serock, Brok i Długosiodło są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radzymin", "Serock", "Brok", "Ostrów Mazowiecka", "Wołomin", "Warszawa"],

  about: blokOMnie("do Wyszkowa", "w Wyszkowie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wyszkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wyszkowie"),
    {
      question: "Jesteśmy w trakcie budowy i nie mamy jeszcze kuchni. Czy to ma sens?",
      answer:
        "To jeden z niewielu przypadków, w których taki sprzęt ma przewagę wprost z budowy: potrzebuje gniazdka i kawałka stabilnego blatu, a nie kuchenki i zabudowy. Gotuje w zamkniętym naczyniu, więc nie ma otwartego ognia ani rozpryskiwania — w prowizorce to ma znaczenie.",
    },
    {
      question: "Czy mogę podłączyć to pod przedłużacz na budowie?",
      answer:
        "Nie doradzę w sprawach elektrycznych — ani co podłączyć, ani czy dane gniazdko wytrzyma. To dziedzina, w której zła rada kończy się pożarem, a ja nie jestem elektrykiem. Zapytajcie kogoś, kto zna Waszą instalację i widzi ją na miejscu.",
    },
  ],

  geo: { lat: 52.5928, lng: 21.4581 },
};
