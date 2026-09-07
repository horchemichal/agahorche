import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * KARTUZY — stolica Kaszub, miasto wśród jezior, ośrodek regionu z żywym
 * językiem i bardzo silną ciągłością rodzinną.
 *
 * KĄT: trzy pokolenia pod jednym dachem. To jest jedyne miejsce w serwisie
 * na układ domowy, który w tej okolicy jest zwyczajny, a nigdzie indziej
 * nie został opisany: DOM, W KTÓRYM GOTUJĄ DWIE GOSPODYNIE — babcia
 * i córka albo synowa — i w którym zmiana sprzętu jest sprawą polityczną,
 * a nie techniczną.
 *
 * SEKCJA MA NAZWAĆ RZECZ WPROST I BEZ KPINY: nowe urządzenie w kuchni,
 * w której ktoś gotuje od czterdziestu lat, bywa odebrane jako ocena jej
 * gotowania. To nie jest przewrażliwienie, tylko normalna ludzka reakcja
 * i trzeba się z nią liczyć.
 *
 * PRAKTYCZNY WNIOSEK, KTÓRY MUSI PAŚĆ: na spotkanie zapraszamy OBIE
 * osoby, a gotuje ta starsza. I nie robimy na nim dania, które jest jej
 * popisem — bo to byłoby wystawienie jej na porównanie.
 *
 * CZEGO TU NIE MA I BYĆ NIE MOŻE: opowiadania Kaszubom o Kaszubach,
 * używania kaszubskich słów jako ozdobnika ani udawania, że znam tutejszą
 * kuchnię. Jedno zdanie o regionie i przechodzimy do rzeczy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kartuzy są ośrodkiem Kaszub i leżą wśród jezior.
 */
export const KARTUZY: CityContent = {
  slug: "kartuzy",
  h1: "Thermomix Kartuzy – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kartuzy — prezentacja i cena",
  seoDescription:
    "Thermomix w Kartuzach: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kartuzy — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kartuzach. Zapraszam na spotkanie całą kuchnię, nie jedną osobę.",

  lead:
    "Przyjeżdżam do Kartuz z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Kartuzy i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kartuzach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś, co u Was w domu robi się od lat. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "trzy-pokolenia",
      heading: "Kuchnia, w której gotują dwie gospodynie",
      paragraphs: [
        "W tej okolicy nadal jest sporo domów, w których pod jednym dachem mieszkają trzy pokolenia, a w kuchni rządzą właściwie dwie osoby: babcia i córka albo synowa. O Kaszubach nie będę pisać nic więcej, bo to nie mój temat i nie moja wiedza. Napiszę o tej jednej kuchni, bo wchodzę do niej regularnie i wiem, że nowy sprzęt jest tam sprawą delikatniejszą, niż wygląda.",
        "Rzecz, której sprzedawcy nie widzą: postawienie nowego urządzenia w kuchni, w której ktoś gotuje od czterdziestu lat, potrafi zabrzmieć jak ocena jej gotowania. Nikt tego nie mówi na głos, ale to siedzi w powietrzu — i to nie jest przewrażliwienie, tylko całkiem normalna reakcja. Kuchnia jest jej terenem i jej dorobkiem.",
        "Widziałam, jak to się kończy w obie strony. Kiedy młodsza kupuje sprzęt i wstawia go do wspólnej kuchni bez rozmowy, urządzenie stoi w kącie, a obiad nadal powstaje po staremu. Kiedy natomiast starsza osoba zobaczy je pierwsza i sama czegoś na nim spróbuje, potrafi zostać jego najbardziej przekonanym użytkownikiem — bo ma najwięcej powodów, żeby oszczędzić plecy i ręce.",
        "Dlatego u Was proszę o dwie rzeczy, i to jest cała moja rada.",
        "Po pierwsze: niech na spotkaniu będą obie osoby, a gotuje ta starsza. Nie ja, nie młodsza. Ta, która w tej kuchni rządzi.",
        "Po drugie: nie róbmy dania, które jest jej popisem. To byłoby wystawienie jej na porównanie i skończyłoby się źle, nawet gdyby wyszło dobrze. Zróbmy coś, czego nikt w tym domu nie robi — wtedy nikt niczego nie broni i wszyscy patrzą na to samo.",
        "Jeżeli po takim spotkaniu starsza pani powie „no, w tym coś jest” — sprawa jest załatwiona lepiej niż jakimkolwiek argumentem, który miałabym w zanadrzu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kartuzach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Napisz, ile osób gotuje w tej kuchni. Dobiorę porę tak, żeby mogły być wszystkie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kartuzach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kartuskiej rodziny",
      paragraphs: [
        "W domu, w którym mieszka kilka pokoleń, obiad jest większy, powstaje częściej i robi go zwykle ta sama osoba — często najstarsza.",
        "Thermomix pomaga tym, że nie wymaga obecności ani siły: nie trzeba stać, mieszać, szatkować ani dźwigać rozgrzanego garnka. Gotowanie odbywa się w jednym naczyniu, z ustawioną temperaturą.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla całego domu.",
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
    "Kartuzy",
    "Kiełpino",
    "Dzierżążno",
    "Grzybno",
    "Sianowo",
    "Prokowo",
    "Mirachowo",
    "Staniszewo",
    "Brodnica Górna",
    "Borowo",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Żukowo, Kościerzyna, Bytów i Sierakowice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żukowo", "Kościerzyna", "Bytów", "Wejherowo", "Sopot"],

  about: blokOMnie("do Kartuz", "w gminie Kartuzy i na Kaszubach", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kartuz bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kartuzach"),
    {
      question: "Mieszkamy z teściową i to ona gotuje. Jak to ugryźć?",
      answer:
        "Niech będzie na spotkaniu i niech to ona obsługuje urządzenie — nie ja i nie Ty. Nowy sprzęt wstawiony do cudzej kuchni bez rozmowy zwykle stoi w kącie, a obiad powstaje po staremu. Kiedy starsza osoba sama czegoś spróbuje, często zostaje najbardziej przekonanym użytkownikiem, bo ma najwięcej powodów, żeby oszczędzić plecy i ręce.",
    },
    {
      question: "Co ugotować na takim spotkaniu?",
      answer:
        "Nie danie, które jest jej popisem — to byłoby wystawienie jej na porównanie i skończyłoby się źle nawet przy dobrym wyniku. Lepiej zrobić coś, czego w tym domu nikt nie robi: wtedy nikt niczego nie broni i wszyscy patrzą na to samo.",
    },
  ],

  geo: { lat: 54.3339, lng: 18.1972 },
};
