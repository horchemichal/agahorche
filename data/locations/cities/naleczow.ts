import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * NAŁĘCZÓW — miasto w powiecie puławskim, 3 590 mieszkańców
 * (31.12.2024, GUS), spadek o 19,3% od 2002 r., średni wiek 47,3.
 * Prawa miejskie 1963 r. W mieście butelkuje się wodę mineralną
 * noszącą jego nazwę — rozlewnia stoi NA MIEJSCU, co jest tu
 * kluczowe (patrz niżej).
 *
 * KĄT: napoje robione w domu — i jedna rzecz, której to urządzenie
 * NIE zrobi. Miasto, które żyje z butelkowania wody, jest jedynym
 * właściwym miejscem na stronę, która zaczyna się od granicy:
 * wody mineralnej nie da się zrobić w kuchni i nigdy nie będę
 * twierdzić inaczej. Dopiero za tą granicą zaczyna się to,
 * co faktycznie da się zrobić samemu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że woda mineralna jest mineralna dlatego, skąd pochodzi,
 *   a nie dlatego, co się z nią zrobi w kuchni — żaden sprzęt
 *   tego nie zastąpi,
 * — że to, co DA się zrobić, to napoje: kompoty, lemoniady,
 *   syropy owocowe, napary, mleko roślinne,
 * — że jedyna rzeczywista przewaga domowego napoju to wiedza,
 *   co w nim jest, i możliwość zrobienia go mniej słodkim,
 * — i uczciwie: że przy jednej butelce to się nie opłaca,
 *   a zaczyna mieć sens dopiero przy regularności.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. Ani o wodzie, ani o cukrze,
 *   ani o domowych napojach kontra kupowane. To jest miasto
 *   uzdrowiskowe i pokusa jest tu największa w całym serwisie —
 *   dlatego zakaz jest tu wpisany najostrzej.
 * — ANI SŁOWA o profilu leczniczym uzdrowiska, o kuracjach,
 *   o wskazaniach. Sprawdziłem te informacje i ŚWIADOMIE ich
 *   nie używam. Przedstawicielka handlowa nie pisze o leczeniu.
 * — ŻADNEJ NAZWY WŁAŚCICIELA rozlewni. Uzasadnienie niżej.
 * — ŻADNEGO PORÓWNANIA domowego napoju z konkretną marką.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I TRWAŁOŚCI domowych napojów —
 *   to dziedzina bezpieczeństwa żywności, nie moja. Ta sama
 *   rodzina odmów co przetwory w Hrubieszowie i podroby w Piaskach.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Twarda woda" (inne miasto)
 * dotyczy KAMIENIA I SPRZĘTU, nie napojów. „Soki i moszcze"
 * (region winorośli) dotyczą PRZEROBU WŁASNYCH OWOCÓW na zapas.
 * „Mleko i nabiał" to osobny kąt o nabiale zwierzęcym. Tutaj
 * chodzi o NAPÓJ JAKO NAPÓJ — to, co się nalewa do szklanki.
 *
 * ŚWIADOME POMINIĘCIA — ODNOTOWANE, NIEUŻYTE:
 * — DEPORTACJA społeczności żydowskiej Nałęczowa wiosną 1942 r.
 *   Fakt sprawdzony. NIE UŻYWAM GO — to nie jest ozdobnik
 *   do strony o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ NAZWY WŁAŚCICIELA ROZLEWNI. Strona gminy wymienia
 *   konkretną firmę, ale fragment nie ma daty, a branża wód
 *   butelkowanych w Polsce przechodziła w ostatnich latach
 *   transakcje. Sam FAKT, że butelkowanie odbywa się w Nałęczowie,
 *   pochodzi ze źródła gminnego i jest w tekście. Właściciela nie
 *   podaję, dopóki nie potwierdzę go na 2026 r.,
 * — NIE piszę „jedyne w Polsce uzdrowisko o profilu kardiologicznym".
 *   To zdanie krąży, ale nie znalazłem porównania z pozostałymi
 *   uzdrowiskami. Do tego jest to twierdzenie zdrowotne — odpada
 *   podwójnie,
 * — NIE podaję roku nadania statusu uzdrowiska ani podstawy prawnej.
 *   Nie udało się tego zweryfikować w źródle pierwotnym,
 * — NIE wymieniam Henryka Sienkiewicza wśród gości Nałęczowa. Ani
 *   strona gminy, ani encyklopedia go tu nie wspominają — to
 *   wygląda na legendę turystyczną. Prus i Żeromski są potwierdzeni
 *   i tylko oni są w tekście,
 * — NIE podaję żadnego produktu z Listy Produktów Tradycyjnych.
 *   Nie udało się sprawdzić rejestru, więc nie ma go w tekście,
 * — NIE wymyślam osiedli. BIP gminy pokazuje sołectwa (teren
 *   wiejski gminy), nie dzielnice miasta. districts to PUSTA
 *   TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — butelkowanie wody mineralnej odbywa się w samym Nałęczowie
 *   (źródło: strona gminy),
 * — Bolesław Prus przyjeżdżał tu przez trzy dekady (1882–1912);
 *   w mieście jest jego muzeum,
 * — Stefan Żeromski był częstym gościem; zachowana Chata
 *   Żeromskiego,
 * — pałac Małachowskich powstał w latach 1771–1773,
 * — prawa miejskie 1963 r.,
 * — 3 590 mieszkańców (31.12.2024), średni wiek 47,3.
 */
export const NALECZOW: CityContent = {
  slug: "naleczow",
  h1: "Thermomix Nałęczów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nałęczów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nałęczowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nałęczów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nałęczowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nałęczowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Nałęczów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zacznę od tego, czego to urządzenie nie zrobi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nałęczowie – jak wygląda prezentacja?",
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
      id: "napoje",
      heading: "Miasto, które butelkuje wodę — czyli o napojach i o jednej rzeczy, której nie zrobię",
      paragraphs: [
        "W Nałęczowie butelkuje się wodę mineralną, która nosi nazwę tego miasta i stoi w sklepach w całej Polsce. Rozlewnia jest tutaj, nie gdzie indziej — to akurat rzadkie, bo bardzo często marka nosi nazwę miejsca, z którym nie ma już nic wspólnego.",
        "Dlatego tę stronę zacznę od granicy, a nie od obietnicy. Wody mineralnej nie da się zrobić w kuchni. Jest mineralna dlatego, skąd pochodzi i przez co przeszła w ziemi, a nie dlatego, co ktoś z nią zrobi w garnku. Żadne urządzenie tego nie zmieni i nie spotkacie mnie mówiącej inaczej — ani na prezentacji, ani tutaj.",
        "To powiedziawszy: napoje to jedna z rzeczy, które w tym urządzeniu robi się najczęściej, a mówi się o nich najmniej. Kompoty. Lemoniady. Syropy z owoców. Napary, które trzeba podgrzać i utrzymać w cieple. Mleko roślinne — migdałowe, owsiane — czyli rzecz, którą dużo osób kupuje w kartonie, nie wiedząc, że robi się ją z garści składników.",
        "Co realnie zyskujecie, robiąc to samodzielnie? Jedno i konkretne: wiecie, co w tym jest, i decydujecie, ile w tym cukru. Tyle. Nie napiszę tu ani słowa o tym, czy to jest zdrowsze — jestem przedstawicielką handlową, nie dietetyczką, a to jest miasto, w którym o zdrowiu wypowiadają się ludzie z zupełnie innym wykształceniem niż moje.",
        "I druga uczciwa uwaga, tym razem o pieniądzach: przy jednej butelce lemoniady w roku to się nie opłaca. Robienie napojów w domu zaczyna mieć sens dopiero wtedy, gdy dzieje się regularnie — gdy w domu są dzieci, które piją to codziennie, albo gdy ktoś i tak co tydzień nastawia kompot. Przy okazjonalnym użyciu prościej jest kupić.",
        "Czego nie doradzę: niczego o przechowywaniu i trwałości domowych napojów. Ile stoją, w czym, w jakiej temperaturze — to jest dziedzina bezpieczeństwa żywności i nie moja. Po tę wiedzę idźcie do rzetelnego źródła, nie do osoby, która sprzedaje sprzęt.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nałęczowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć akurat napój — lemoniadę, mleko roślinne, kompot — powiedzcie przy umawianiu. To jest krótkie i dobrze widać całą drogę od składników do szklanki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nałęczowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nałęczowskiej rodziny",
      paragraphs: [
        "Nałęczów liczy niespełna trzy tysiące sześćset mieszkańców i od dwóch dekad ich ubywa, a średni wiek przekracza czterdzieści siedem lat. To miasto znane w całym kraju i jednocześnie mniejsze, niż większość ludzi zakłada.",
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

  districtsHeading: "Do których części Nałęczowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Nałęczów też przyjadę",
  nearbyParagraphs: [
    "Puławy, Kazimierz Dolny, Bełżyce, Poniatowa i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Puławy", "Kazimierz Dolny", "Bełżyce", "Poniatowa", "Lublin", "Opole Lubelskie"],

  about: blokOMnie("do Nałęczowa", "w Nałęczowie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Nałęczowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nałęczowie"),
    {
      question: "Czy w tym urządzeniu da się zrobić wodę mineralną albo jakoś ulepszyć wodę?",
      answer:
        "Nie i nie będę udawać, że tak. Woda mineralna jest mineralna przez to, skąd pochodzi, a nie przez to, co się z nią zrobi w kuchni. Urządzenie podgrzewa wodę i gotuje w niej — nic poza tym. Napoje owocowe, kompoty, lemoniady, syropy i mleko roślinne to co innego i te robi się w nim bardzo dobrze.",
    },
    {
      question: "Czy domowe napoje wychodzą taniej niż kupowane?",
      answer:
        "Zależy, jak często. Przy jednym kompocie na kwartał — nie warto liczyć. Sens pojawia się przy regularności: gdy w domu codziennie ktoś to pije. I nie powiem, czy są zdrowsze, bo to nie jest pytanie do przedstawicielki handlowej. Jedyne, co mogę powiedzieć pewnie: wiecie, co w nich jest, i sami decydujecie o ilości cukru.",
    },
  ],

  geo: { lat: 51.2856, lng: 22.2153 },
};
