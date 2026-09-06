import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * LESKO — niewielkie miasto nad Sanem, brama Bieszczadów, z zamkiem,
 * jedną z najstarszych zachowanych synagog w Polsce i starym cmentarzem
 * żydowskim. Siedziba powiatu leskiego.
 *
 * KĄT: listopad. Ustrzyki dostały sezon — pracę na pełnych obrotach,
 * gdy dom przyjmuje gości. Lesko dostaje jego drugą połowę: osiem
 * miesięcy, w których miasto jest wyłącznie dla swoich. Wtedy nie ma
 * gdzie wyjść na obiad, bo połowa lokali jest zamknięta do wiosny,
 * a najbliższe większe zakupy są w Sanoku. Gotowanie w domu nie jest
 * wtedy wyborem stylu życia — jest jedyną opcją, i to jest zupełnie
 * inna rozmowa niż w mieście, gdzie zawsze można coś zamówić.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Lesko leży nad Sanem i jest siedzibą powiatu leskiego,
 * — synagoga w Lesku należy do najstarszych zachowanych w Polsce,
 *   a przy mieście znajduje się stary cmentarz żydowski,
 * — miasto jest jedną z bram Bieszczadów; ruch turystyczny jest tu
 *   wyraźnie sezonowy,
 * — najbliższym większym ośrodkiem jest Sanok,
 * — powiat leski obejmuje m.in. Baligród, Cisną, Olszanicę i Solinę.
 *
 * CZEGO NIE MA: danych o ruchu turystycznym, liczby lokali, twierdzeń
 * o tym, co jest otwarte zimą w konkretnym roku.
 */
export const LESKO: CityContent = {
  slug: "lesko",
  h1: "Thermomix Lesko – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Lesko — prezentacja i cena",
  seoDescription:
    "Thermomix w Lesku: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat leski i Bieszczady. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lesko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lesku i w Bieszczadach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Leska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Baligrodu, Olszanicy, Soliny i Cisnej.",

  highlights: highlightyStandardowe("Lesko i cały powiat leski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lesku – jak wygląda prezentacja?",
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
      id: "listopad",
      heading: "Osiem miesięcy, w których miasto jest tylko dla swoich",
      paragraphs: [
        "O Bieszczadach pisze się zwykle latem — pełne kwatery, ruch, tłok nad Soliną. Ale lato to tu cztery miesiące. Przez pozostałe osiem Lesko jest miastem wyłącznie dla swoich, i to jest ta część roku, w której naprawdę się tu mieszka.",
        "Kuchennie zmienia to jedną rzecz zasadniczo. Zimą nie ma opcji „nie chce mi się dziś gotować, zamówimy coś” — bo część lokali jest zamknięta do wiosny, a większe zakupy robi się w Sanoku, nie za rogiem. Gotowanie w domu nie jest wtedy wyborem stylu życia ani modą. Jest jedyną opcją, siedem dni w tygodniu, przez pół roku.",
        "I dlatego akurat tutaj urządzenie warto oceniać po czymś innym niż liczba funkcji. Po tym, czy sprawia, że codzienne gotowanie da się wytrzymać: czy nie trzeba przy nim stać, czy zostaje jedno naczynie zamiast trzech, czy z tych samych podstawowych produktów wychodzi coś innego w środę niż w poniedziałek. To brzmi skromnie, ale w listopadzie waży więcej niż cokolwiek z reklamy.",
        "Latem sytuacja się odwraca i jeśli przyjmujecie gości, prezentacja wygląda inaczej — wtedy rozmawiamy o powtarzalności i o tym, co da się przygotować wieczorem.",
      ],
    },
    {
      id: "uczciwie-o-dojezdzie",
      heading: "Uczciwie o dojeździe",
      paragraphs: [
        "Bieszczady to najdalszy zakątek, po którym jeżdżę. Dojazd jest bezpłatny tak samo jak wszędzie, ale wyjazd tutaj planuję osobno i z wyprzedzeniem — nie da się tu wpaść po drodze, bo tędy żadna droga nie prowadzi.",
        "Zimą proszę dodatkowo o zapas czasu i wolę podać przedział godzin niż konkretną minutę. Skoro i tak jadę kawał drogi, chętnie umawiam tego samego dnia kilka spotkań — jeśli ktoś z sąsiedztwa albo z rodziny też chce zobaczyć urządzenie, powiedzcie od razu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lesku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — najlepiej z kilkoma pasującymi Wam terminami, bo wtedy od razu dogadamy konkret.",
        "Podaj miejscowość. Cisna i Solina to inny kierunek niż Olszanica, a przy takich odległościach planuję trasę z góry.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lesku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla leskiej rodziny",
      paragraphs: [
        "Obiad jest tu zwykle jednym wspólnym posiłkiem, gotowanym z zapasu i z własnych produktów, a przygotowuje go ta sama osoba — codziennie i przez cały rok.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie trzech naczyń po jednej zupie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których części gminy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy, bez dopłaty za dojazd.",
    "Przy umawianiu przydaje mi się nazwa miejscowości — w Bieszczadach odległości bywają mylące i wolę zaplanować dzień uczciwie.",
  ],
  districts: [
    "Centrum",
    "Posada Leska",
    "Łukawica",
    "Jankowce",
    "Huzele",
    "Bezmiechowa Górna",
    "Bezmiechowa Dolna",
    "Weremień",
    "Manasterzec",
    "Glinne",
  ],

  nearbyHeading: "Cały powiat leski i Bieszczady",
  nearbyParagraphs: [
    "Baligród, Cisna, Olszanica, Solina i Polańczyk są w zasięgu tej samej trasy — a skoro i tak jadę w góry, chętnie umawiam kilka spotkań na jeden dzień.",
  ],
  nearbyTowns: [
    "Sanok",
    "Ustrzyki Dolne",
    "Zagórz",
    "Solina",
    "Baligród",
    "Cisna",
  ],

  about: blokOMnie("do Leska", "w Lesku i całych Bieszczadach", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Leska bez dodatkowej opłaty?",
      answer:
        "Tak, do Leska i w głąb Bieszczadów — dojazd jest bezpłatny niezależnie od odległości. Proszę tylko o umówienie terminu z wyprzedzeniem i o zapas czasu zimą; takie wyjazdy planuję osobno.",
    },
    ...faqWspolne("w Lesku"),
    {
      question: "Zimą i tak muszę gotować codziennie — czy to urządzenie coś zmieni?",
      answer:
        "Nie zmieni tego, że trzeba gotować. Zmienia to, ile Cię to kosztuje: nie trzeba stać przy garnku, po zupie zostaje jedno naczynie zamiast trzech, a z tych samych podstawowych produktów wychodzi w środę coś innego niż w poniedziałek. Przy pół roku codziennego gotowania to nie jest drobiazg — ale nie będę udawać, że to rewolucja.",
    },
    {
      question: "Przyjmuję gości latem — kiedy najlepiej umówić prezentację?",
      answer:
        "Poza sezonem, jeśli tylko możesz. Latem i tak nie masz godziny spokoju, a wtedy prezentacja jest kolejnym obowiązkiem zamiast czymś, z czego coś wyniesiesz.",
    },
  ],

  geo: { lat: 49.4694, lng: 22.3306 },
};
