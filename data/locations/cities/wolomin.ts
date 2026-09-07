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
 * WOŁOMIN — miasto, które wyrosło przy linii kolejowej poprowadzonej
 * przez kogoś z zewnątrz. Najpierw była stacja, potem miasto —
 * i dopiero z czasem poszło własną drogą.
 *
 * KĄT: własne przepisy kontra przepisy z urządzenia. Pytanie, czy da się
 * na tym gotować PO SWOJEMU, czy tylko według gotowych, prowadzonych
 * krok po kroku instrukcji.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — tak, można gotować własne przepisy: to jest garnek z mieszadłem
 *   i grzaniem, a nie automat z zamkniętą listą dań,
 * — ale wymaga to przetłumaczenia przepisu na własną rękę i pierwsze
 *   podejście bywa nieudane — to normalne i trzeba to powiedzieć przed,
 *   a nie po,
 * — prowadzone przepisy są wygodne, ale nie są jedynym sposobem
 *   używania urządzenia,
 * — i najuczciwsze: przy prowadzonym przepisie urządzenie pilnuje
 *   za Was, przy własnym pilnujecie sami.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH KONKRETNYCH USTAWIEŃ Z PAMIĘCI: stopni, obrotów, minut,
 *   przeliczników „na TM7 to jest tyle a tyle”. Zasada obowiązująca
 *   na wszystkich stronach.
 * — ŻADNEGO OPISYWANIA FUNKCJI, KTÓRYCH NIE JESTEM PEWNA, ani obietnic
 *   o zapisywaniu, edytowaniu czy importowaniu przepisów.
 *
 * ROZGRANICZENIE. Łomża mówi o rodzinnym przepisie bez miar, przekazanym
 * ustnie. Tutaj chodzi o coś innego: o SPOSÓB UŻYWANIA urządzenia —
 * prowadzony krok po kroku kontra własny — a nie o konkretny przepis
 * po babci.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Wołomin rozwinął się przy linii kolejowej, wokół stacji.
 */
export const WOLOMIN: CityContent = {
  slug: "wolomin",
  h1: "Thermomix Wołomin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wołomin — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wołominie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wołomin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wołominie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wołomina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Wołomin i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-7.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Można gotować z prowadzonego przepisu i można po swojemu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wołominie – jak wygląda prezentacja?",
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
      id: "wlasne-przepisy",
      heading: "Miasto, które wyrosło przy cudzej linii — i gotowanie po swojemu",
      paragraphs: [
        "Wołomin zaczął się od stacji: linię poprowadzono tędy z zewnątrz, a miasto ułożyło się wokół niej i dopiero z czasem poszło własną drogą. Wykorzystam to do pytania, które pada na prezentacjach właściwie zawsze, a odpowiedź bywa udzielana wymijająco: czy na tym da się gotować po swojemu, czy tylko według gotowych przepisów prowadzonych krok po kroku?",
        "Da się po swojemu. To nie jest automat z zamkniętą listą dań, tylko naczynie, które podgrzewa i miesza w zadanym tempie — a co do niego wrzucicie i w jakiej kolejności, zależy wyłącznie od Was. Można ugotować własną zupę, własny sos i własne ciasto, nie zaglądając do żadnego przepisu z urządzenia.",
        "Powiem jednak od razu, jak to naprawdę wygląda, bo tu łatwo o rozczarowanie. Własny przepis trzeba sobie przetłumaczyć: rozpisać, co dzieje się po kolei i jak długo, zamiast po prostu włączyć. Pierwsze podejście bywa nieudane — coś wyjdzie za rzadkie, coś za gęste, coś się rozdrobni bardziej, niż chcieliście. Drugie podejście jest już dobre i potem robicie to bez zastanawiania. Tak to działa u wszystkich i wolę Wam to powiedzieć przed zakupem niż po.",
        "Nie podam Wam za to żadnych ustawień z pamięci: ile stopni, jaka prędkość, ile minut. Nie dlatego, że są tajemnicą, tylko dlatego, że wymyślona z głowy liczba psuje danie i marnuje składniki, a ja bym się o tym nawet nie dowiedziała. Takie rzeczy sprawdza się przy urządzeniu, nie na stronie internetowej.",
        "Różnica między jednym a drugim sposobem jest w tym, kto pilnuje. Przy przepisie prowadzonym krok po kroku pilnuje urządzenie: mówi, co dosypać i kiedy, i trudno się pomylić. Przy własnym pilnujecie sami — tak jak przy garnku. Obie drogi są w porządku i większość osób używa obu naraz: prowadzonych, gdy jest pośpiech albo gotuje ktoś inny w domu, własnych, gdy chodzi o coś swojego.",
        "Jeśli macie przepis, na którym Wam zależy, weźcie go na spotkanie. Spróbujemy go razem przy urządzeniu i zobaczycie na własne oczy, jak to idzie — łącznie z tym, co trzeba będzie poprawić za drugim razem.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wołominie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie sprawdzić konkretny własny przepis, powiedzcie o tym przy umawianiu — przywiozę do niego składniki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wołominie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wołomińskiej rodziny",
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

  districtsHeading: "Do których części Wołomina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Sławek",
    "Lipiny",
    "Nowa Wieś",
    "Górki",
    "Wołominek",
    "Osiedle Niepodległości",
    "Zagościniec",
  ],

  nearbyHeading: "Poza Wołomin też przyjadę",
  nearbyParagraphs: [
    "Kobyłka, Marki, Radzymin i Zielonka są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kobyłka", "Marki", "Radzymin", "Zielonka", "Ząbki", "Warszawa"],

  about: blokOMnie("do Wołomina", "w Wołominie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wołomina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wołominie"),
    {
      question: "Czy mogę gotować własne przepisy, czy tylko te z urządzenia?",
      answer:
        "Własne też. To naczynie, które podgrzewa i miesza w zadanym tempie, a nie automat z zamkniętą listą dań. Trzeba tylko przetłumaczyć sobie przepis na kolejność czynności — pierwsze podejście bywa nieudane, drugie jest zwykle dobre.",
    },
    {
      question: "Możesz podać ustawienia do mojego przepisu?",
      answer:
        "Nie podam ich z pamięci na stronie, bo liczba wzięta z głowy psuje danie i marnuje składniki. Takie rzeczy sprawdza się przy urządzeniu — weźcie przepis na spotkanie, spróbujemy go razem.",
    },
  ],

  geo: { lat: 52.3405, lng: 21.2411 },
};
