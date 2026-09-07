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
 * PIASTÓW — jedno z najmniejszych powierzchniowo miast w Polsce,
 * wciśnięte między Pruszków a Warszawę. Wszystko jest tu blisko
 * i wszystko musi się zmieścić.
 *
 * KĄT: co się zmienia na liście zakupów po takim zakupie. Pytanie
 * praktyczne, którego nikt nie zadaje przed decyzją, a które wraca
 * w pierwszym tygodniu przy półce w sklepie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — w większości nic się nie zmienia i to jest dobra wiadomość:
 *   gotujecie z tego samego, z czego gotowaliście,
 * — kilka rzeczy zaczyna się opłacać w innej postaci: całe przyprawy
 *   zamiast mielonych, kostka zamiast startego, całe orzechy — bo
 *   rozdrobnienie przestaje być problemem,
 * — czego NIE trzeba: kupować żadnych specjalnych produktów
 *   ani „dedykowanych" składników. Takich nie ma,
 * — i uczciwie: nie policzę Wam, ile na tym zaoszczędzicie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI w złotówkach (zasada z Jarocina),
 *   także w wersji „mielona przyprawa kosztuje tyle, a cała tyle".
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani o wartości odżywczej — że coś
 *   jest lepsze, świeższe albo zdrowsze. Nie mam do tego kompetencji.
 * — ŻADNYCH POLECEŃ KONKRETNYCH MAREK ani sklepów.
 * — ŻADNYCH USTAWIEŃ ani czasów rozdrabniania.
 *
 * ROZGRANICZENIE. Gdynia mówi o tym, co jest w pudełku i gdzie to
 * trzymać, Luboń o dzieleniu przepisu na mniejszą porcję, Marki
 * o resztkach. Tutaj chodzi o LISTĘ ZAKUPÓW.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Piastów jest jednym z najmniejszych powierzchniowo miast w Polsce
 *   i leży między Pruszkowem a Warszawą.
 */
export const PIASTOW: CityContent = {
  slug: "piastow",
  h1: "Thermomix Piastów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Piastów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Piastowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piastów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Piastowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Piastowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Piastów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gotuje się z tego samego, z czego gotowaliście do tej pory.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piastowie – jak wygląda prezentacja?",
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
      id: "lista-zakupow",
      heading: "Miasto, w którym wszystko jest blisko — i co się zmienia na liście zakupów",
      paragraphs: [
        "Piastów jest jednym z najmniejszych powierzchniowo miast w Polsce: wszystko jest tu blisko i wszystko musi się zmieścić na niewielkim obszarze. Wykorzystam to do pytania, którego nikt nie zadaje przed zakupem, a które wraca w pierwszym tygodniu, przy półce w sklepie: czy teraz trzeba kupować coś innego?",
        "Odpowiedź, którą uważam za najważniejszą: w większości nie i to jest dobra wiadomość. Gotujecie dalej z tego samego, z czego gotowaliście. Nie ma żadnych „dedykowanych” produktów, żadnych specjalnych składników i żadnej listy rzeczy, które trzeba teraz dokupić. Gdyby ktoś Wam takie rzeczy sprzedawał, warto zapytać, na jakiej podstawie.",
        "Zmienia się natomiast kilka drobiazgów i te warto znać, bo są prawdziwe. Rozdrobnienie przestaje być problemem, więc niektóre rzeczy zaczyna się kupować w innej postaci: przyprawy w całości zamiast mielonych, ser w kostce zamiast startego, orzechy całe zamiast płatków, cukier zwykły zamiast pudru. To nie są zakupy dodatkowe — to te same produkty, tylko w innej formie.",
        "Druga zmiana dotyczy ilości. Skoro pewne rzeczy robicie w domu, część gotowych produktów przestaje trafiać do koszyka sama z siebie — u każdego inne, więc nie będę zgadywać, które u Was. To się dzieje samo w ciągu kilku tygodni i nie wymaga żadnego planowania.",
        "Nie policzę Wam natomiast, ile na tym zaoszczędzicie, i nie zrobię tego także w wersji „przyprawa mielona kosztuje tyle, a cała tyle”. Liczenie oszczędności na jedzeniu należy do chwytów, których nie używam, bo z takich wyliczeń zawsze wychodzi liczba dopasowana do tezy. Nie powiem też, że domowe jest zdrowsze albo świeższe — to nie moja dziedzina i nie mam podstaw do takich twierdzeń.",
        "Nie polecę Wam też żadnych konkretnych marek ani sklepów. Nie mam z nikim takich układów i nie zamierzam ich mieć, bo od tego zaczyna się doradzanie pod cudzy interes zamiast pod Wasz. Jeśli chcecie zobaczyć różnicę w praktyce, przynieście na spotkanie to, co macie w szafce — zrobimy z tego coś i sami ocenicie, czy warto cokolwiek zmieniać.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piastowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Nie róbcie żadnych zakupów przed spotkaniem — przywożę składniki, a jeśli chcecie, zrobimy coś z tego, co macie w szafce.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piastowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla piastowskiej rodziny",
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

  districtsHeading: "Do których części Piastowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Osiedle Bohaterów Wolności",
    "Piastów Południe",
    "Piastów Północ",
    "Osiedle Warszawska",
    "Sowińskiego",
    "Osiedle Ogińskiego",
    "Al. Krakowska",
  ],

  nearbyHeading: "Poza Piastów też przyjadę",
  nearbyParagraphs: [
    "Pruszków, Brwinów, Ursus i Michałowice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pruszków", "Brwinów", "Warszawa", "Michałowice", "Grodzisk Mazowiecki", "Milanówek"],

  about: blokOMnie("do Piastowa", "w Piastowie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Piastowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Piastowie"),
    {
      question: "Czy po zakupie trzeba kupować inne produkty?",
      answer:
        "W większości nie — gotujecie dalej z tego samego. Nie ma żadnych „dedykowanych” składników i żadnej listy rzeczy do dokupienia. Zmienia się kilka drobiazgów: przyprawy w całości zamiast mielonych, ser w kostce zamiast startego, cukier zwykły zamiast pudru. To te same produkty, tylko w innej formie.",
    },
    {
      question: "Ile na tym zaoszczędzę?",
      answer:
        "Nie policzę tego i nie zrobię tego także w wersji „mielona przyprawa kosztuje tyle, a cała tyle”. Liczenie oszczędności na jedzeniu należy do chwytów, których nie używam — zawsze wychodzi z tego liczba dopasowana do tezy.",
    },
  ],

  geo: { lat: 52.1836, lng: 20.8403 },
};
