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
 * MALBORK — miasto z największym ceglanym zamkiem na świecie, wpisanym
 * na listę UNESCO; przez cały sezon pełne zwiedzających.
 *
 * KĄT: sprzedawanie własnych wypieków. To jest jedyne miejsce w serwisie
 * na pytanie, które pada częściej, niż się wydaje: „CZY MOGĘ NA TYM
 * ZARABIAĆ — PIEC CIASTA NA SPRZEDAŻ, ROBIĆ TORTY NA ZAMÓWIENIE".
 *
 * ŻELAZNE OGRANICZENIE: NIE UDZIELAM PORAD PRAWNYCH ANI SANITARNYCH.
 * Nie piszę, jakie warunki trzeba spełnić, co wolno sprzedawać z domu,
 * jak zarejestrować działalność ani czego wymaga sanepid. Odsyłam
 * do właściwych urzędów i mówię wprost, że to nie moja dziedzina.
 * Wypowiadam się WYŁĄCZNIE o tym, na czym się znam: czy urządzenie
 * nadaje się do takiej roboty i gdzie leży jego granica.
 *
 * ROZGRANICZENIE. Karpacz mówi o kwaterze i obsłudze gości noclegowych.
 * Gniezno — o jednorazowej uroczystości rodzinnej. Tutaj chodzi o pracę
 * zarobkową, powtarzalną, na zamówienie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Malborku stoi zamek krzyżacki wpisany na listę UNESCO,
 * — miasto przyjmuje w sezonie dużo zwiedzających.
 */
export const MALBORK: CityContent = {
  slug: "malbork",
  h1: "Thermomix Malbork – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Malbork — prezentacja i cena",
  seoDescription:
    "Thermomix w Malborku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Malbork — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Malborku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Malborka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Malbork i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Drożdżowa plecionka z kruszonką przygotowana z ciasta wyrobionego w Thermomixie",
    caption: "Ciasto drożdżowe wyrabia się samo — to jedna z rzeczy, które najłatwiej sprawdzić na miejscu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Malborku – jak wygląda prezentacja?",
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
      id: "piec-na-sprzedaz",
      heading: "„Chcę piec na zamówienie” — gdzie leży granica tego sprzętu",
      paragraphs: [
        "Malbork w sezonie żyje z ludzi, którzy przyjeżdżają obejrzeć zamek, a to znaczy, że sporo osób dorabia tu przy jedzeniu. Dlatego pytanie, które i tak dostaję często, tutaj pada regularnie: czy na tym urządzeniu da się zarabiać — piec ciasta na zamówienie, robić torty, dostarczać wypieki.",
        "Najpierw rzecz, której nie zrobię. Nie powiem Wam, co wolno sprzedawać z domowej kuchni, jakich warunków wymaga sanepid ani jak zarejestrować taką działalność. Nie znam się na tym i udawanie, że jest inaczej, mogłoby Was kosztować znacznie więcej niż całe urządzenie. To jest rozmowa z urzędem i z księgową, nie ze mną.",
        "Powiem natomiast to, na czym się znam, czyli gdzie leży granica samego sprzętu.",
        "Do wyrabiania ciasta jest bardzo dobry i to jest jego najmocniejsza strona przy takiej pracy. Ciasto drożdżowe, kruche, na pierogi, na pizzę — wychodzi za każdym razem tak samo, bo waga jest wbudowana, a proporcje nie zależą od tego, jak ktoś nabrał mąki. Przy pracy na zamówienie powtarzalność jest ważniejsza niż wszystko inne.",
        "Bardzo dobrze radzi sobie też z masami i kremami, w tym z tymi, które trzeba jednocześnie grzać i mieszać — a to jest ta część roboty, przy której zwykle stoi się bez ruchu z termometrem i nie da się robić nic innego.",
        "A teraz granica, którą trzeba znać przed zakupem, a nie po pierwszym większym zamówieniu. Naczynie mieści około dwóch litrów, więc ciasto robi się partiami. Przy jednym torcie to nie ma znaczenia; przy dwudziestu kilogramach ciasta tygodniowo zaczyna mieć duże. To jest sprzęt domowy pracujący w rytmie domowym — nie zastąpi miksera planetarnego o dużej misie ani pieca. I nie piecze: pieczenie nadal odbywa się w piekarniku.",
        "Uczciwe podsumowanie: do dorabiania na małą skalę nadaje się bardzo dobrze i wielu osobom właśnie do tego służy. Do robienia z tego pełnego zawodu — jest jednym z narzędzi, a nie całą pracownią.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Malborku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli myślisz o pieczeniu na zamówienie, powiedz to — zrobimy na spotkaniu ciasto, a nie obiad.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Malborku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla malborskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności i że ciasto wyrabia się samo. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Malborka i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Piaski",
    "Wielbark",
    "Kałdowo",
    "Rakowiec",
    "Południe",
    "Zieleniec",
    "Nowa Wieś",
    "Lasowice",
  ],

  nearbyHeading: "Poza Malbork też przyjadę",
  nearbyParagraphs: [
    "Sztum, Nowy Staw, Dzierzgoń i Tczew są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sztum", "Nowy Staw", "Dzierzgoń", "Tczew", "Nowy Dwór Gdański", "Kwidzyn"],

  about: blokOMnie("do Malborka", "w Malborku i na Żuławach", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Malborka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Malborku"),
    {
      question: "Chcę piec ciasta na zamówienie. Czy ten sprzęt się nada?",
      answer:
        "Do dorabiania na małą skalę bardzo dobrze — ciasto wychodzi za każdym razem tak samo, bo waga jest wbudowana, a masy i kremy powstają bez stania z termometrem. Granicą jest pojemność: naczynie mieści około dwóch litrów, więc ciasto robi się partiami, a pieczenie nadal odbywa się w piekarniku. To narzędzie, nie cała pracownia.",
    },
    {
      question: "Co z wymogami sanitarnymi i formalnościami?",
      answer:
        "Tego Ci nie powiem, bo się na tym nie znam, a udawanie mogłoby kosztować Cię więcej niż całe urządzenie. To rozmowa z odpowiednim urzędem i z księgową. Ja wypowiadam się wyłącznie o tym, co sprzęt potrafi.",
    },
  ],

  geo: { lat: 54.0359, lng: 19.0266 },
};
