import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * KÓRNIK — miasto z zamkiem, ogromną biblioteką zbieraną przez pokolenia
 * i arboretum, w którym rośnie największa w Polsce kolekcja drzew
 * i krzewów. Miejsce zbudowane wokół idei kolekcjonowania.
 *
 * KĄT: tysiąc przepisów, z których używa się dwudziestu. Miasto kolekcji
 * jest jedynym właściwym miejscem na uczciwą rozmowę o bazie przepisów:
 * DUŻA LICZBA PRZEPISÓW JEST ARGUMENTEM SPRZEDAŻOWYM, A NIE KUCHENNYM.
 * Nikt nie ugotuje tysiąca dań. Każdy dom kończy na kilkunastu.
 *
 * CO TA SEKCJA MA ZAŁATWIĆ NAPRAWDĘ: przestawić rozmowę z liczby przepisów
 * na pytanie, czy wśród nich są te, które AKURAT WY jecie. I podać
 * praktyczną radę: zbudować własną krótką listę zamiast przeglądać katalog.
 *
 * OSTROŻNIE: nie opisuję szczegółowo działania ani warunków subskrypcji
 * bazy przepisów, bo to się zmienia i nie wolno mi tego utrwalać na stronie.
 * Piszę o zjawisku, nie o regulaminie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Kórniku jest zamek z historyczną biblioteką oraz arboretum
 *   z bardzo dużą kolekcją drzew i krzewów.
 */
export const KORNIK: CityContent = {
  slug: "kornik",
  h1: "Thermomix Kórnik – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kórnik — prezentacja i cena",
  seoDescription:
    "Thermomix w Kórniku: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kórnik — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kórniku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kórnika z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Kórnik i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Domowa lemoniada przygotowana w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Na spotkaniu robimy też rzeczy proste — takie, które faktycznie robi się potem co tydzień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kórniku – jak wygląda prezentacja?",
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
      id: "kolekcja-przepisow",
      heading: "Miasto kolekcji — i przepisy, których nikt nigdy nie ugotuje",
      paragraphs: [
        "W Kórniku jest zamek z biblioteką zbieraną przez pokolenia i najstarsze w Polsce arboretum, z jedną z najbogatszych kolekcji dendrologicznych w kraju. To miasto zbudowane wokół gromadzenia — i dlatego właśnie tutaj chcę powiedzieć coś niepopularnego o liczbie przepisów.",
        "Na pokazach pada zwykle bardzo duża liczba: tyle a tyle tysięcy przepisów dostępnych w urządzeniu. Brzmi to imponująco i ma imponować. Tyle że jest to argument sprzedażowy, a nie kuchenny.",
        "Bo policzmy uczciwie. Nikt nie ugotuje tysiąca dań. Nawet osoba gotująca codziennie robi w ciągu roku około trzystu obiadów, a większość z nich to powtórki. W praktyce każdy dom kończy na kilkunastu daniach, które wchodzą na stałe, plus kilka na okazje. Tak było przed tym urządzeniem i tak jest po nim.",
        "Wielka baza ma więc jedną realną wartość i jedną realną pułapkę. Wartość: łatwiej znaleźć w niej te kilkanaście, które akurat Wam pasują, i dostajecie do nich gotowe czasy i temperatury. Pułapka: przeglądanie katalogu potrafi zastąpić gotowanie. Człowiek scrolluje piętnaście minut, nie może się zdecydować, w końcu robi makaron.",
        "Dlatego moja rada jest odwrotna do reklamowej. Nie zaczynajcie od przeglądania. Zacznijcie od kartki: wypiszcie dziesięć dań, które u Was są jedzone naprawdę. Potem sprawdźcie, ile z nich da się zrobić w tym urządzeniu i czy wersja z bazy jest lepsza od Waszej — czasem tak, czasem nie. To zajmie tydzień i da Wam więcej niż miesiąc przeglądania.",
        "I pytanie, które warto zadać przy zakupie, nie brzmi „ile jest przepisów”, tylko „czy są tam te, które my jemy”. Na spotkaniu chętnie to sprawdzę przy Was, na Waszej liście, a nie na mojej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kórniku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Wypisz wcześniej dziesięć dań, które u Was naprawdę się je. Sprawdzimy je razem, zamiast przeglądać katalog.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kórniku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kórnickiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że do dań, które i tak robicie, dostajecie gotowe czasy i temperatury. Gotowanie odbywa się w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Kórnik",
    "Bnin",
    "Borówiec",
    "Kamionki",
    "Robakowo",
    "Szczodrzykowo",
    "Dachowa",
    "Czmoń",
    "Radzewo",
    "Mościenica",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Śrem, Mosina, Swarzędz i Środa Wielkopolska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Śrem", "Mosina", "Swarzędz", "Środa Wielkopolska", "Puszczykowo", "Luboń"],

  about: blokOMnie("do Kórnika", "w gminie Kórnik i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kórnika bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kórniku"),
    {
      question: "Ile przepisów jest w urządzeniu i czy to ważne?",
      answer:
        "Jest ich bardzo dużo, ale to argument sprzedażowy, a nie kuchenny — nikt nie ugotuje tysiąca dań i każdy dom kończy na kilkunastu, które wchodzą na stałe. Lepsze pytanie brzmi: czy są tam te, które akurat Wy jecie. Sprawdzę to na spotkaniu na Waszej liście.",
    },
    {
      question: "Od czego zacząć po zakupie?",
      answer:
        "Nie od przeglądania katalogu, bo to potrafi zastąpić gotowanie. Wypiszcie dziesięć dań, które naprawdę u Was się je, i sprawdźcie, ile z nich da się w tym zrobić oraz czy wersja z bazy jest lepsza od Waszej. Tydzień takiej pracy daje więcej niż miesiąc przeglądania.",
    },
  ],

  geo: { lat: 52.2444, lng: 17.0944 },
};
