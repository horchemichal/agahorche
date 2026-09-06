import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * BĘDZIN — historyczna stolica Zagłębia Dąbrowskiego, z zamkiem
 * Kazimierza Wielkiego na wzgórzu i miastem rozpiętym na stokach.
 *
 * KĄT: Będzin to miasto blokowisk z lat 60. i 70. — Syberka, Warpie,
 * Zamkowe. Kuchnie w tej zabudowie są bardzo małe i to jest realny,
 * codzienny problem, o którym nikt nie pisze na stronach sprzedażowych:
 * nie „czy warto", tylko „gdzie to postawić". Uczciwa odpowiedź jest tu
 * nietypowa — Thermomix częściej ZWALNIA miejsce, niż je zajmuje, bo
 * zastępuje kilka osobnych sprzętów. Ale tylko wtedy, gdy naprawdę
 * z tamtych korzystasz, i to trzeba powiedzieć wprost.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — zamek w Będzinie to warownia z czasów Kazimierza Wielkiego, jeden
 *   z zamków Szlaku Orlich Gniazd,
 * — Będzin leży w Zagłębiu Dąbrowskim, a historyczna granica ze Śląskiem
 *   biegła rzeką Brynicą,
 * — miasto jest rozpięte na wzgórzach, a duża część zabudowy mieszkaniowej
 *   pochodzi z lat 60. i 70. XX wieku (Syberka, Warpie, Zamkowe),
 * — Będzin graniczy bezpośrednio z Sosnowcem, Dąbrową Górniczą, Czeladzią
 *   i Siemianowicami.
 *
 * CZEGO NIE MA: metrażu mieszkań podanego jako fakt, dat budowy osiedli,
 * danych o liczbie mieszkań.
 */
export const BEDZIN: CityContent = {
  slug: "bedzin",
  h1: "Thermomix Będzin – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Będzin — prezentacja i cena",
  seoDescription:
    "Thermomix w Będzinie: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Będzin — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Będzinie. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Będzina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Syberce, Warpiu, Ksawerze czy w Grodźcu. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Będzin, wszystkie osiedla"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Będzinie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków. Wystarczy blat, gniazdko i godzina spokoju.",
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
      id: "mala-kuchnia",
      heading: "Mała kuchnia w bloku — czyli pytanie „gdzie to postawić”",
      paragraphs: [
        "Duża część Będzina to osiedla z lat sześćdziesiątych i siedemdziesiątych — Syberka, Warpie, Zamkowe. Kuchnie są w nich małe, blat krótki, a gniazdek tyle, ile przewidziano wtedy, gdy w kuchni stała czajnik i mikser. Pierwsze pytanie nie brzmi więc „czy warto”, tylko „gdzie to w ogóle stanie”.",
        "Odpowiedź jest tu nietypowa i warto ją usłyszeć uczciwie. Thermomix w wielu takich kuchniach nie zabiera miejsca, tylko je zwalnia, bo zastępuje kilka osobnych sprzętów: blender, mikser, wagę, parowar, czasem robot do ciasta. Jeżeli faktycznie z nich korzystasz, na blacie zostaje jedna rzecz zamiast czterech, a szafka się opróżnia.",
        "Ale jeżeli w Twojej kuchni stoi tylko czajnik i naprawdę nie masz tych sprzętów, to ten argument Cię nie dotyczy — i wtedy będzie to po prostu nowe urządzenie na krótkim blacie. Powiem to na miejscu, patrząc na Twój blat, a nie na zdjęcie z folderu. Wolę stracić sprzedaż niż sprzedać coś, co za miesiąc trafi do piwnicy.",
      ],
    },
    {
      id: "zaglebie",
      heading: "Będzin to Zagłębie",
      paragraphs: [
        "Zamek na wzgórzu stoi tu nie przypadkiem — Będzin pilnował granicy, a Brynica oddzielała Zagłębie od Śląska przez stulecia. Dla ludzi stąd ta różnica nadal ma znaczenie, nawet jeśli mapa województwa niczego takiego nie pokazuje.",
        "Dlatego nie przyjeżdżam z „regionalnym zestawem śląskim” i nie zakładam z góry, co się u Was gotuje. Pytam, co jecie w środę i co w niedzielę — to znacznie prostsza droga do prezentacji, która czemuś służy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Będzinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj osiedle i piętro — Będzin jest rozpięty na wzgórzach, a przy sprzęcie w walizce informacja, czy w bloku jest winda, naprawdę mi się przydaje. Na cenę spotkania nie wpływa to w żaden sposób.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Będzinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla będzińskiej rodziny",
      paragraphs: [
        "Będzin, Sosnowiec, Czeladź i Dąbrowa to praktycznie jedno miasto, jeśli chodzi o dojazdy — bardzo wiele osób mieszka tu, a pracuje kilka kilometrów dalej i wraca o różnych porach. Obiad przestaje być jednym wydarzeniem.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. Gotowanie i miksowanie dzieje się w jednym naczyniu, więc po zupie nie zostaje garnek, blender i sitko — co w małej kuchni ma znaczenie większe niż w dużej.",
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

  districtsHeading: "Do których dzielnic Będzina dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do Grodźca i Łagiszy, które leżą daleko od centrum.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Syberka",
    "Warpie",
    "Zamkowe",
    "Ksawera",
    "Gzichów",
    "Małobądz",
    "Łagisza",
    "Grodziec",
    "Podłosie",
  ],

  nearbyHeading: "Zagłębie i okolice",
  nearbyParagraphs: [
    "Będzin sąsiaduje z Sosnowcem, Czeladzią, Dąbrową Górniczą, Siemianowicami i Wojkowicami — to jedna trasa i spokojnie dwa spotkania w jedno popołudnie.",
  ],
  nearbyTowns: [
    "Sosnowiec",
    "Czeladź",
    "Dąbrowa Górnicza",
    "Wojkowice",
    "Siemianowice Śląskie",
    "Piekary Śląskie",
    "Katowice",
  ],

  about: blokOMnie("do Będzina", "w Będzinie i całym Zagłębiu", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Będzina bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Będzina jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Będzinie"),
    {
      question: "Mam bardzo mały blat w kuchni — czy prezentacja ma sens?",
      answer:
        "Ma, i to większy niż w dużej kuchni. Właśnie w małej trzeba na miejscu sprawdzić, gdzie urządzenie stanie i czy nie zasłoni gniazdka — a tego nie da się rozstrzygnąć przez telefon. Powiedz przy umawianiu, że kuchnia jest ciasna, a przywiozę mniej naczyń.",
    },
    {
      question: "Czy Thermomix naprawdę zastąpi mi inne sprzęty?",
      answer:
        "Zastąpi te, z których korzystasz do miksowania, ubijania, wyrabiania ciasta, ważenia i gotowania na parze. Nie zastąpi piekarnika ani patelni — i jeśli ktoś twierdzi inaczej, mija się z prawdą. Na prezentacji przejdziemy przez to, co faktycznie masz w kuchni.",
    },
  ],

  geo: { lat: 50.3265, lng: 19.1258 },
};
