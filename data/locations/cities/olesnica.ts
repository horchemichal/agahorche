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
 * OLEŚNICA — zamek książąt oleśnickich rozbudowywany przez kolejne
 * pokolenia: każdy władca dostawiał swoje skrzydło i przerabiał to,
 * co zastał. Nie było momentu, w którym budowla była „gotowa".
 *
 * KĄT: „a może poczekać na następny model?". Pytanie, które zatrzymuje
 * decyzję na miesiące i którego sprzedawcy nie lubią, bo jedyna uczciwa
 * odpowiedź nie jest korzystna dla sprzedaży.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — nie wiem, co i kiedy się pojawi, i nawet gdybym wiedziała, nie moja
 *   to rzecz, żeby o tym mówić,
 * — nowsza wersja pojawi się kiedyś na pewno — to jest cecha każdego
 *   sprzętu, a nie wada tego konkretnego,
 * — jedyne sensowne kryterium: czy potrzebujecie tego w najbliższym roku,
 *   czy to jest zachcianka „kiedyś",
 * — Aga NIE używa argumentu „ceny idą w górę, kupujcie teraz".
 *
 * TWARDE GRANICE:
 * — ŻADNYCH SPEKULACJI O PLANACH PRODUCENTA, premierach, terminach
 *   ani kolejnych modelach. Nie wiem tego i wymyślanie byłoby szkodliwe.
 * — ŻADNYCH PROGNOZ CENOWYCH ani straszenia podwyżką.
 * — ŻADNYCH OBIETNIC O DŁUGOŚCI WSPARCIA, aktualizacjach czy tym,
 *   jak długo model będzie „aktualny".
 *
 * ROZGRANICZENIE. Bolesławiec mówi „masz starszy model, często nie warto
 * wymieniać" (ktoś JUŻ MA), Jarocin o chwytach sprzedażowych, Sieradz
 * o wycofaniu się po podpisie. Tutaj chodzi o ODWLEKANIE zakupu
 * w oczekiwaniu na nowszą wersję.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — zamek w Oleśnicy był rozbudowywany etapami przez kolejnych władców.
 */
export const OLESNICA: CityContent = {
  slug: "olesnica",
  h1: "Thermomix Oleśnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Oleśnica — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Oleśnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Oleśnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Oleśnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Oleśnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Oleśnica i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie namawiam do pośpiechu i nie straszę podwyżkami.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Oleśnicy – jak wygląda prezentacja?",
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
      id: "czekac-na-nowszy-model",
      heading: "Zamek, który nigdy nie był skończony — i pytanie „może poczekam na nowszy model?”",
      paragraphs: [
        "Oleśnicki zamek rozbudowywali kolejni władcy: każdy dostawiał swoje skrzydło i przerabiał to, co zastał po poprzedniku. Nie da się wskazać roku, w którym był gotowy, bo takiego roku nie było. Wykorzystam to do pytania, które zatrzymuje ludzi na całe miesiące, a bywa zbywane byle jak: a może poczekać, aż wyjdzie coś nowszego?",
        "Zacznę od tego, czego nie zrobię. Nie będę spekulować o tym, co i kiedy się pojawi. Nie wiem tego, a nawet gdybym coś słyszała, nie byłoby moją rzeczą rozpowiadanie tego na stronie internetowej. Wymyślanie terminów premier należy do najbardziej szkodliwych rzeczy, jakie sprzedawca może zrobić, bo ktoś na tym oprze swoją decyzję.",
        "Pewne jest natomiast co innego i to mogę powiedzieć spokojnie: kiedyś pojawi się coś nowszego. Zawsze się pojawia. To jest cecha każdego sprzętu z prądem, a nie wada akurat tego, i czekanie na moment, w którym nic lepszego już nie wyjdzie, jest czekaniem na coś, co nie nastąpi. Dokładnie jak z tym zamkiem: nie było roku, w którym można było powiedzieć „teraz jest kompletny”.",
        "Sensowne kryterium jest w moim przekonaniu tylko jedno i nie dotyczy w ogóle techniki. Czy potrzebujecie tego w najbliższym roku? Jeśli tak — bo w domu jest małe dziecko, bo obiad wypada po dziewiętnastej, bo gotuje jedna osoba dla pięciu — to rok czekania jest rokiem straconym na coś, co miało pomagać codziennie. Jeśli to jest raczej zachcianka na „kiedyś”, to naprawdę nie ma po co się spieszyć i powiem to samo na spotkaniu.",
        "Nie usłyszycie ode mnie, że trzeba się decydować teraz, bo ceny idą w górę. Nie wiem, jak będą się zmieniać, a używanie tego jako argumentu jest zwykłym popychaniem do decyzji strachem. Nie obiecam też, jak długo ten model będzie „aktualny” ani co dostanie w przyszłości — to są rzeczy, których po prostu nie wiem.",
        "Jeśli wahacie się właśnie z tego powodu, umówmy spotkanie i potraktujcie je jako rozpoznanie, a nie jako moment decyzji. Zobaczycie sprzęt na żywo, dostaniecie liczby i wrócicie do tego, kiedy zechcecie. Prezentacja niczego nie zobowiązuje, a decyzja podjęta bez pośpiechu jest lepsza także dla mnie.",
      ],
      links: [{ href: "/thermomix/tm7-vs-tm6", label: "TM7 a TM6 — czym się różnią" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Oleśnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie tylko zobaczyć sprzęt i wrócić do tematu później, powiedzcie to wprost przy umawianiu — przyjadę tak samo chętnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Oleśnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla oleśnickiej rodziny",
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

  districtsHeading: "Do których części Oleśnicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Lucień",
    "Rataje",
    "Osiedle Wądoły",
    "Zielona Dolina",
    "Spalice",
    "Osiedle Sportowe",
  ],

  nearbyHeading: "Poza Oleśnicę też przyjadę",
  nearbyParagraphs: [
    "Bierutów, Twardogóra, Syców i Długołęka są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bierutów", "Twardogóra", "Syców", "Międzybórz", "Wrocław", "Oława"],

  about: blokOMnie("do Oleśnicy", "w Oleśnicy i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Oleśnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Oleśnicy"),
    {
      question: "Może lepiej poczekać na następny model?",
      answer:
        "Nie będę spekulować, co i kiedy się pojawi — nie wiem tego, a wymyślanie terminów byłoby szkodliwe, bo ktoś oparłby na tym decyzję. Pewne jest tylko, że kiedyś pojawi się coś nowszego; tak jest z każdym sprzętem. Sensowne kryterium brzmi inaczej: czy potrzebujecie tego w najbliższym roku, czy to raczej zachcianka na „kiedyś”.",
    },
    {
      question: "Czy ceny pójdą w górę? Czy warto się pospieszyć?",
      answer:
        "Nie wiem, jak będą się zmieniać, i nie użyję tego jako argumentu — to zwykłe popychanie do decyzji strachem. Nie obiecam też, jak długo ten model będzie aktualny ani co dostanie w przyszłości.",
    },
  ],

  geo: { lat: 51.2094, lng: 17.3897 },
};
