import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * JELENIA GÓRA — miasto w kotlinie otoczonej górami, u stóp Karkonoszy.
 * W jego granicach leży Cieplice, jedno z najstarszych uzdrowisk w Polsce,
 * z gorącymi źródłami czynnymi od stuleci.
 *
 * KĄT: co to znaczy „zdrowo" — i czego urządzenie NIE robi. Miasto,
 * które ma uzdrowisko w swoich granicach, jest jedynym właściwym miejscem
 * na najczęstszy nieuczciwy chwyt w tej branży: sprzedawanie Thermomixa
 * jako narzędzia do zdrowia albo do odchudzania.
 *
 * ŻELAZNA GRANICA TEJ SEKCJI. Nie wolno mi tu udzielać porad zdrowotnych,
 * dietetycznych ani sugerować, że gotowanie w tym urządzeniu na cokolwiek
 * wpływa medycznie. Wolno mi napisać dokładnie tyle: URZĄDZENIE NIE JEST
 * DIETĄ, NIE ODCHUDZA I NIE LECZY, a to, co realnie robi, jest zupełnie
 * przyziemne — ułatwia gotowanie od zera i odmierza dokładnie. Jeśli ktoś
 * kiedyś zechce „wzmocnić" tę stronę zdaniami o zdrowiu — nie należy tego
 * robić. To byłaby zarówno nieuczciwość, jak i wejście w cudze kompetencje.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Cieplice są dzielnicą Jeleniej Góry i jednym z najstarszych uzdrowisk
 *   w Polsce, z gorącymi źródłami,
 * — miasto leży w kotlinie u stóp Karkonoszy.
 *
 * CZEGO NIE MA: właściwości wód, wskazań leczniczych, jakichkolwiek
 * twierdzeń o wpływie gotowania na zdrowie.
 */
export const JELENIA_GORA: CityContent = {
  slug: "jelenia-gora",
  h1: "Thermomix Jelenia Góra – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Jelenia Góra — prezentacja i cena",
  seoDescription:
    "Thermomix w Jeleniej Górze: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i Kotlina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jelenia Góra — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jeleniej Górze. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jeleniej Góry z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości w Kotlinie.",

  highlights: highlightyStandardowe("Jelenia Góra i Kotlina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jeleniej Górze – jak wygląda prezentacja?",
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
      id: "zdrowo-czyli-jak",
      heading: "Miasto z uzdrowiskiem w granicach — i uczciwie o słowie „zdrowo”",
      paragraphs: [
        "W granicach Jeleniej Góry leżą Cieplice, jedno z najstarszych uzdrowisk w Polsce, z gorącymi źródłami czynnymi od stuleci. Nie będę o nich pisać nic więcej, bo nie jestem od zdrowia i nie zamierzam udawać, że jestem. Wspominam o tym, bo w mieście, które ma uzdrowisko u siebie, wypada wreszcie powiedzieć głośno rzecz, którą w tej branży nagminnie się przemilcza.",
        "Thermomix nie jest dietą. Nie odchudza, nie leczy, nie „oczyszcza” i nie wpływa na nic w organizmie. Jeżeli ktoś sprzedaje go jako urządzenie do zdrowia, mówi rzecz nieprawdziwą — i jest to nieuczciwość, która ma potem konkretne skutki, bo klientka kupiła co innego, niż dostała.",
        "To, co urządzenie robi naprawdę, jest znacznie skromniejsze i całkiem przyziemne. Po pierwsze: obniża próg wejścia w gotowanie od podstaw. Zupa z warzyw, sos z pomidorów, hummus, pasta na kanapki, obiad z surowego mięsa i kaszy — to wszystko robi się w nim na tyle prosto, że częściej się to robi, zamiast kupować gotowe. Po drugie: odmierza dokładnie, więc wiecie, co dokładnie włożyliście, co bywa istotne, jeśli ktoś w domu musi czegoś pilnować.",
        "I na tym koniec. Cała reszta zależy od tego, co ugotujecie. W tym urządzeniu da się zrobić warzywa na parze i da się zrobić krem z pół litra śmietany — sprzęt nie ma na ten temat zdania.",
        "Jeżeli ktoś w domu ma jeść inaczej ze względów zdrowotnych, to jest rozmowa z lekarzem albo dietetykiem, nie ze mną. Ja mogę pomóc w tej drugiej części: jak ugotować to, co Wam zalecono, bez stania przy garnku pół wieczoru. To potrafię i o tym chętnie pogadam.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jeleniej Górze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość w Kotlinie. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jeleniej Górze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jeleniogórskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że gotowanie od zera przestaje być wieczornym projektem. Danie gotuje się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których dzielnic Jeleniej Góry dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Cieplice",
    "Sobieszów",
    "Jagniątków",
    "Zabobrze",
    "Cieplice Zdrój",
    "Czarne",
    "Maciejowa",
    "Goduszyn",
    "Grabary",
  ],

  nearbyHeading: "Poza Jelenią Górę też przyjadę",
  nearbyParagraphs: [
    "Kowary, Karpacz, Szklarska Poręba, Piechowice i Lwówek Śląski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kowary", "Karpacz", "Szklarska Poręba", "Piechowice", "Lwówek Śląski", "Gryfów Śląski"],

  about: blokOMnie("do Jeleniej Góry", "w Jeleniej Górze i Kotlinie", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jeleniej Góry bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości w Kotlinie. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Jeleniej Górze"),
    {
      question: "Czy dzięki Thermomixowi będę jeść zdrowiej?",
      answer:
        "Samo urządzenie nie odchudza, nie leczy i nie jest dietą — kto twierdzi inaczej, sprzedaje coś, czego nie dostaniesz. Realnie ułatwia gotowanie od zera i odmierza dokładnie, więc częściej robi się rzeczy z surowych składników zamiast kupować gotowe. Co z tego ugotujesz, zależy wyłącznie od Ciebie.",
    },
    {
      question: "Mam zalecenia dietetyczne od lekarza. Pomożesz je ułożyć?",
      answer:
        "Nie, bo to nie moje kompetencje i nie będę udawać, że są. Mogę pomóc w drugiej części: jak ugotować to, co Wam zalecono, bez stania przy garnku przez pół wieczoru — powiedz przy umawianiu, czego nie wolno, a dobiorę dania na spotkanie.",
    },
  ],

  geo: { lat: 50.9044, lng: 15.7194 },
};
