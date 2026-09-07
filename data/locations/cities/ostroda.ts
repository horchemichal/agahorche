import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * OSTRÓDA — miasto rozłożone nad jeziorem Drwęckim, otoczone wodą
 * i lasem. Część domów w gminie stoi tam, gdzie zasięg bywa kapryśny.
 *
 * KĄT: czy to musi być podłączone do internetu. Pytanie praktyczne,
 * które pada często i bywa zbywane ogólnikiem, a od odpowiedzi zależy,
 * czy sprzęt w ogóle nadaje się do konkretnego domu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — nie będę opisywać z pamięci, co dokładnie wymaga połączenia,
 *   a co nie: to się zmienia i pomyłka byłaby kosztowna,
 * — zamiast opisu — TEST na spotkaniu: wyłączamy połączenie i po prostu
 *   sprawdzamy, co się da zrobić bez niego,
 * — gotowanie z ustawionym czasem i temperaturą to podstawa działania
 *   urządzenia i tego dotyczy większość codziennego użycia,
 * — i uczciwie: jeśli w domu zasięg jest naprawdę słaby, trzeba to
 *   sprawdzić PRZED zakupem, a nie zakładać, że jakoś będzie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TWIERDZEŃ O TYM, KTÓRE FUNKCJE DZIAŁAJĄ OFFLINE. Nie znam
 *   tego na tyle pewnie, żeby to pisać, a ktoś by na tym polegał.
 * — ŻADNYCH OBIETNIC O KONCIE, SUBSKRYPCJI, aktualizacjach ani o tym,
 *   co będzie działać w przyszłości.
 * — ŻADNYCH PORAD TECHNICZNYCH o routerach, wzmacniaczach i zasięgu.
 *
 * ROZGRANICZENIE. Dzierżoniów mówi o oporze wobec ekranu dotykowego
 * (czy dam radę to obsłużyć), Mława o awarii. Tutaj chodzi wyłącznie
 * o POŁĄCZENIE Z INTERNETEM w domu, w którym zasięg bywa słaby.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Ostróda leży nad jeziorem Drwęckim, wśród jezior i lasów.
 */
export const OSTRODA: CityContent = {
  slug: "ostroda",
  h1: "Thermomix Ostróda – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ostróda — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ostródzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ostróda — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ostródzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ostródy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Ostróda i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zamiast opisywać — sprawdzamy na miejscu, u Was.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ostródzie – jak wygląda prezentacja?",
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
      id: "czy-potrzebny-internet",
      heading: "Miasto nad jeziorem i lasem — i pytanie, czy to musi mieć internet",
      paragraphs: [
        "Ostróda leży nad Drwęckim, a spora część domów w gminie stoi między wodą a lasem, gdzie zasięg potrafi być kapryśny i różny w dwóch pokojach tego samego domu. Dlatego akurat tutaj napiszę o pytaniu, które pada często, a bywa zbyte ogólnikiem: czy to urządzenie musi być podłączone do internetu?",
        "Zacznę od tego, czego nie zrobię, choć byłoby to wygodniejsze dla nas obu. Nie będę wypisywać z pamięci, co dokładnie działa bez połączenia, a co nie. Takie rzeczy się zmieniają, moja pamięć nie jest tu wiarygodnym źródłem, a Wy podjęlibyście na tej podstawie decyzję za duże pieniądze. To jest dokładnie ten rodzaj informacji, przy którym pomyłka jest kosztowna.",
        "Zamiast opisu proponuję coś lepszego, i tak właśnie robię na spotkaniach w okolicy: sprawdzamy na miejscu. Wyłączamy połączenie i po prostu patrzymy, co da się zrobić bez niego, u Was w kuchni i przy Waszym zasięgu. Godzina takiego testu jest warta więcej niż wszystko, co mogłabym o tym napisać — także dlatego, że sprawdzacie własne warunki, a nie moje.",
        "Jedno mogę powiedzieć spokojnie: gotowanie z ustawionym czasem, temperaturą i mieszaniem to podstawa działania tego urządzenia i tego właśnie dotyczy większość codziennego użycia. Zupa, sos, ciasto, gotowanie na parze — to jest ta część, którą robi się najczęściej.",
        "Nie obiecam Wam za to niczego na temat konta, aktualizacji ani tego, jak to będzie wyglądać za rok. Nie doradzę też w sprawach routera, wzmacniaczy i poprawiania zasięgu — nie jestem od tego i nie chcę udawać, że się na tym znam.",
        "Jeśli macie w domu naprawdę słaby zasięg, potraktujcie to jako rzecz do sprawdzenia przed zakupem, a nie po. Powiedzcie mi o tym przy umawianiu — przyjadę przygotowana na taki test i nie będę udawać, że problem nie istnieje.",
      ],
      links: [{ href: "/thermomix/funkcje", label: "Funkcje TM7" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ostródzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was zasięg bywa słaby, uprzedźcie mnie — zrobimy na spotkaniu test bez połączenia zamiast rozmowy o tym.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ostródzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ostródzkiej rodziny",
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

  districtsHeading: "Do których części Ostródy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Kajkowo",
    "Grunwaldzka",
    "Osiedle Młodych",
    "Zatorze",
    "Drwęcka",
    "Plebiscytowa",
  ],

  nearbyHeading: "Poza Ostródę też przyjadę",
  nearbyParagraphs: [
    "Iława, Morąg, Miłomłyn i Olsztynek są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Iława", "Morąg", "Miłomłyn", "Olsztynek", "Olsztyn", "Dąbrówno"],

  about: blokOMnie("do Ostródy", "w Ostródzie i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Ostródy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ostródzie"),
    {
      question: "Czy urządzenie musi być podłączone do internetu?",
      answer:
        "Nie będę wypisywać z pamięci, co dokładnie działa bez połączenia — takie rzeczy się zmieniają, a Wy podjęlibyście na tej podstawie decyzję za duże pieniądze. Zamiast tego na spotkaniu wyłączamy połączenie i sprawdzamy u Was, przy Waszym zasięgu. Godzina takiego testu jest warta więcej niż mój opis.",
    },
    {
      question: "Mamy w domu bardzo słaby zasięg. Co robić?",
      answer:
        "Uprzedźcie mnie przy umawianiu — przyjadę przygotowana na test bez połączenia. To jest rzecz do sprawdzenia przed zakupem, a nie po. Nie doradzę za to w sprawach routera ani wzmacniaczy: nie jestem od tego.",
    },
  ],

  geo: { lat: 53.6958, lng: 19.9653 },
};
