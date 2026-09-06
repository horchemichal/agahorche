import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * ZDUŃSKA WOLA — miasto, którego nazwa pochodzi od zdunów, czyli rzemieślników
 * stawiających piece. Później rozwinęło się jako ośrodek tkacki. W dzielnicy
 * Karsznice powstało osiedle kolejowe przy magistrali węglowej.
 *
 * KĄT: piec. To jedyne miasto w Polsce, którego nazwa mówi wprost o ludziach
 * budujących to, na czym się gotowało — i dlatego jedyne, w którym mogę
 * napisać sekcję o TYM, CO PIEC ROBIŁ, A CZEGO ŻADNE URZĄDZENIE NIE ROBI.
 * Piec kaflowy grzał dom i gotował jednocześnie, był jednym punktem, wokół
 * którego kręciło się mieszkanie. Dziś te funkcje są rozdzielone, a Thermomix
 * przejmuje kawałek jednej z nich. Napisanie tego wprost stawia urządzenie
 * we właściwej skali: to nie jest serce domu, tylko jedno z narzędzi.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — nazwa Zduńskiej Woli pochodzi od zdunów, rzemieślników stawiających piece,
 * — miasto rozwinęło się jako ośrodek tkacki,
 * — w Karsznicach powstało osiedle kolejowe przy magistrali węglowej,
 * — piec kaflowy ogrzewał mieszkanie i służył do gotowania jednocześnie.
 *
 * CZEGO NIE MA: dat, historii rzemiosła zduńskiego, danych o mieście.
 */
export const ZDUNSKA_WOLA: CityContent = {
  slug: "zdunska-wola",
  h1: "Thermomix Zduńska Wola – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Zduńska Wola — prezentacja i cena",
  seoDescription:
    "Thermomix w Zduńskiej Woli: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zduńska Wola — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zduńskiej Woli. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zduńskiej Woli z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, łącznie z Karsznicami.",

  highlights: highlightyStandardowe("Zduńska Wola i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zduńskiej Woli – jak wygląda prezentacja?",
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
      id: "miasto-zdunow",
      heading: "Miasto zdunów — czyli o tym, co potrafił piec",
      paragraphs: [
        "Nazwa Zduńskiej Woli pochodzi od zdunów: rzemieślników, którzy stawiali piece. To chyba jedyne miasto w Polsce, którego nazwa mówi wprost o ludziach budujących to, na czym się gotowało. Trudno o lepsze miejsce, żeby przez chwilę popatrzeć na kuchnię z dystansu.",
        "Piec kaflowy robił bowiem coś, czego nie robi dziś żadne pojedyncze urządzenie. Ogrzewał mieszkanie i gotował jednocześnie. Był jednym punktem, wokół którego układało się całe życie domu — przy nim się siadało, suszyło rzeczy, przy nim było ciepło. Kuchnia nie była osobnym pomieszczeniem z zestawem sprzętów; była miejscem, w którym stał piec.",
        "Dziś te funkcje są rozdzielone i to jest po prostu inny świat: ogrzewa kaloryfer, gotuje płyta, piecze piekarnik, a przy tym stoi jeszcze pięć urządzeń. Żadne z nich nie jest sercem domu i nie udaję, że któreś nim jest.",
        "Thermomix przejmuje kawałek jednej z tych funkcji — tej związanej z gotowaniem, i to nie całej. Warto mieć to w głowie, bo w reklamach tego typu sprzęt bywa pokazywany tak, jakby wracał do roli pieca: centrum, wokół którego kręci się dom. Nie wraca. Jest narzędziem, które robi konkretną robotę: gotuje bez pilnowania, miksuje, wyrabia ciasto i skupia to wszystko w jednym naczyniu.",
        "Jeśli po tej rozmowie brzmi to skromniej niż na filmiku — to dobrze. Wolę, żeby ktoś kupił narzędzie, którego się spodziewa, niż serce domu, którego nie dostanie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zduńskiej Woli?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę — do Karsznic też dojeżdżam, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zduńskiej Woli"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zduńskowolskiej rodziny",
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

  districtsHeading: "Do których części miasta i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Karsznice",
    "Nowe Miasto",
    "Zduny",
    "Michałów",
    "Krobanów",
    "Ochraniew",
    "Piaski",
    "Poręby",
    "Kolonia Zduńska Wola",
  ],

  nearbyHeading: "Poza Zduńską Wolę też przyjadę",
  nearbyParagraphs: [
    "Sieradz, Łask, Szadek i Zelów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sieradz", "Łask", "Szadek", "Zelów", "Pabianice"],

  about: blokOMnie("do Zduńskiej Woli", "w Zduńskiej Woli i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zduńskiej Woli bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta, łącznie z Karsznicami, i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zduńskiej Woli"),
    {
      question: "Czy Thermomix zastąpi mi kuchenkę?",
      answer:
        "Nie. Gotuje, dusi i gotuje na parze bez pilnowania, ale smażenie zostaje na patelni, a pieczenie w piekarniku. To jedno z narzędzi w kuchni, a nie zamiennik całej kuchni — i lepiej wiedzieć to przed zakupem.",
    },
    {
      question: "Czy to naprawdę zmieni sposób, w jaki gotujemy?",
      answer:
        "Zmieni tyle, że codzienne gotowanie mniej kosztuje: nie trzeba stać przy garnku i zostaje mniej naczyń. Nie obiecuję rewolucji ani tego, że stanie się sercem domu — jeśli ktoś Wam to obiecuje, sprzedaje wrażenie, a nie sprzęt.",
    },
  ],

  geo: { lat: 51.5992, lng: 18.9394 },
};
