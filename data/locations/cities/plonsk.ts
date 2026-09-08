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
 * PŁOŃSK — miasto nad Płonką, węzeł dróg krajowych, a współcześnie
 * ośrodek przetwórstwa rolno-spożywczego: owoców i warzyw, w tym
 * mrożonek.
 *
 * KĄT: gotowanie z mrożonek. Temat pomijany, bo nie brzmi ambitnie,
 * a dotyczy większości domów — zwłaszcza zimą.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — mrożone warzywa i owoce trafiają wprost do naczynia, bez wcześniejszego
 *   krojenia — to jest realna oszczędność czynności, nie czasu gotowania,
 * — najlepiej wychodzą z nich zupy, przeciery, musy i sorbety,
 * — czego NIE zrobi: nie zamrozi i nie rozmrozi „bezpiecznie" — nie ma
 *   tu żadnej funkcji, którą mogłabym w tej sprawie obiecać,
 * — i granica: nie doradzam, co i jak długo mrozić ani jak rozmrażać.
 *
 * TWARDE GRANICE — TU BARDZO ISTOTNE:
 * — ŻADNYCH PORAD O MROŻENIU, ROZMRAŻANIU, TERMINACH PRZYDATNOŚCI
 *   I BEZPIECZEŃSTWIE ŻYWNOŚCI (zasada ze Skierniewic). Zła rada w tej
 *   dziedzinie realnie szkodzi.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani porównań wartości odżywczej
 *   mrożonek i świeżych warzyw. Nie mam do tego kompetencji.
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI w złotówkach (zasada z Jarocina).
 *
 * ROZGRANICZENIE. Sulechów mówi o przerobie własnych owoców we wrześniu,
 * Marki o resztkach z obiadu, Wałcz o gotowaniu w upale, Kwidzyn
 * o zamiennikach. Tutaj chodzi wyłącznie o PRODUKT Z ZAMRAŻARKI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Płońsk leży nad Płonką, dopływem Wkry,
 * — jest węzłem dróg krajowych (m.in. trasa nr 7, DK10, DK50),
 * — współcześnie działa tu przetwórstwo rolno-spożywcze: owoce
 *   i warzywa, w tym mrożonki.
 */
export const PLONSK: CityContent = {
  slug: "plonsk",
  h1: "Thermomix Płońsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Płońsk — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Płońsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Płońsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Płońsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Płońska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Płońsk i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mrożone warzywa idą wprost do naczynia — bez deski i bez noża.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Płońsku – jak wygląda prezentacja?",
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
      id: "mrozonki",
      heading: "Miasto przetwórstwa — i gotowanie z tego, co jest w zamrażarce",
      paragraphs: [
        "W Płońsku i okolicy działa przetwórstwo owoców i warzyw, w tym mrożonek. Skoro to jest tutejszy temat, napiszę o rzeczy, którą materiały sprzedażowe omijają, bo nie brzmi ambitnie, a dotyczy większości domów — zwłaszcza od listopada do marca: o gotowaniu z zamrażarki.",
        "Realna korzyść jest tu prosta i konkretna. Mrożone warzywa i owoce trafiają wprost do naczynia — nie trzeba ich myć, obierać ani kroić, bo ktoś zrobił to wcześniej. Znika deska, nóż i cały ten etap, który w środku tygodnia jest najbardziej zniechęcający. To jest oszczędność czynności, a nie czasu samego gotowania, i tak to nazywam.",
        "Najlepiej wychodzą z tego rzeczy, w których i tak wszystko ma być rozdrobnione: zupy kremy z mrożonych warzyw, przeciery i musy z mrożonych owoców, sorbety. Przy nich mrożonka nie jest gorszym wyborem, tylko po prostu wygodniejszym — całą robotę i tak wykonuje urządzenie.",
        "Powiem od razu, czego to nie robi, żeby nie było nieporozumienia. Nie zamraża i nie rozmraża. Nie ma tu żadnej funkcji, którą mogłabym Wam w tej sprawie obiecać, a gdyby ktoś ją obiecywał, warto zapytać, na jakiej podstawie.",
        "I rzecz, przy której jestem stanowcza. Nie doradzam, co można mrozić, jak długo trzymać, jak rozmrażać ani co jeszcze nadaje się do zjedzenia po wyjęciu z zamrażarki. To jest dziedzina, w której zła podpowiedź komuś realnie szkodzi, a ja nie jestem od tego — od tego są opakowanie produktu i ktoś, kto zna się na tym lepiej ode mnie.",
        "Nie powiem też, że mrożone jest lepsze albo gorsze od świeżego pod względem wartości odżywczej. Widuję to twierdzenie w obie strony i w obie brzmi przekonująco — a ja nie mam kompetencji, żeby je rozstrzygnąć, więc go nie używam. Nie policzę też oszczędności w złotówkach, bo takie wyliczenia zawsze wychodzą pod tezę.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Płońsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie, zróbmy na spotkaniu zupę wprost z Waszej zamrażarki — to uczciwszy test niż danie z moich świeżych składników.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Płońsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla płońskiej rodziny",
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

  districtsHeading: "Do których części Płońska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Osiedla w Płońsku są numerowane, więc przy umawianiu wystarczy podać numer albo ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: ["Centrum", "Poświętne"],

  nearbyHeading: "Poza Płońsk też przyjadę",
  nearbyParagraphs: [
    "Raciąż, Sochocin, Baboszewo i Nowe Miasto są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Raciąż", "Sochocin", "Czerwińsk nad Wisłą", "Glinojeck", "Nasielsk", "Ciechanów"],

  about: blokOMnie("do Płońska", "w Płońsku i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Płońska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Płońsku"),
    {
      question: "Czy da się gotować wprost z mrożonek?",
      answer:
        "Tak i to jedno z wygodniejszych zastosowań. Mrożone warzywa i owoce trafiają wprost do naczynia — nie trzeba ich myć, obierać ani kroić, więc znika deska, nóż i cały etap, który w środku tygodnia najbardziej zniechęca. Najlepiej wychodzą zupy kremy, przeciery, musy i sorbety.",
    },
    {
      question: "Czy urządzenie rozmrozi albo zamrozi produkty?",
      answer:
        "Nie. Nie ma tu funkcji, którą mogłabym w tej sprawie obiecać. Nie doradzam też, co można mrozić, jak długo trzymać ani jak rozmrażać — to dziedzina, w której zła podpowiedź realnie szkodzi, a ja nie jestem od tego.",
    },
  ],

  geo: { lat: 52.6231, lng: 20.3706 },
};
