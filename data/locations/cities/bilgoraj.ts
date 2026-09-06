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
 * BIŁGORAJ — miasto na skraju Puszczy Solskiej, przez stulecia polska
 * stolica sitarstwa. Wyplatane tu sita rozwoziło po Europie całe pokolenie
 * wędrownych sitarzy; pamiątką po tym jest Zagroda Sitarska.
 *
 * KĄT: sito. Miasto, które robiło narzędzia do oddzielania tego, co się
 * przyda, od tego, co trzeba odrzucić, jest jedynym właściwym miejscem
 * na sekcję, której nie ma nigdzie indziej w serwisie: PRZESIANIE
 * OBIETNIC, KTÓRE SŁYSZY SIĘ O THERMOMIXIE. Prawda, półprawda, nieprawda
 * — wypisane punktami i podpisane własnym nazwiskiem.
 *
 * DLACZEGO TO JEST DOBRA SPRZEDAŻ, A NIE STRZAŁ W STOPĘ: klientka, która
 * usłyszy „to nieprawda” o rzeczy, którą ktoś jej wcześniej obiecywał,
 * zaczyna wierzyć w resztę. A klientka, która kupiła na podstawie
 * obietnicy nie do spełnienia, odda urządzenie albo zostanie z żalem.
 *
 * SEKCJA UŻYWA `bullets` — to jedyna strona miasta, która korzysta z tego
 * pola. Świadomie: lista przesiewająca ma wyglądać jak lista.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Biłgoraj był ośrodkiem sitarstwa, a wędrowni sitarze sprzedawali
 *   tutejsze wyroby w wielu krajach,
 * — zachowała się Zagroda Sitarska,
 * — miasto leży na skraju Puszczy Solskiej.
 *
 * CZEGO NIE MA: dat, liczby warsztatów, opisu techniki wyplatania.
 */
export const BILGORAJ: CityContent = {
  slug: "bilgoraj",
  h1: "Thermomix Biłgoraj – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Biłgoraj — prezentacja i cena",
  seoDescription:
    "Thermomix w Biłgoraju: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0% i uczciwe rozdzielenie obietnic od faktów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Biłgoraj — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Biłgoraju. Prezentacja bezpłatna, bez obietnic bez pokrycia.",

  lead:
    "Przyjeżdżam do Biłgoraja z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Biłgoraj i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Biłgoraju – jak wygląda prezentacja?",
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
      id: "sito-na-obietnice",
      heading: "Miasto sitarzy — więc przesiejmy to, co się o tym urządzeniu mówi",
      paragraphs: [
        "Biłgoraj przez stulecia wyplatał sita i rozwoził je po Europie. Sito robi jedną rzecz: oddziela to, co ma przejść dalej, od tego, co trzeba odrzucić. Skoro więc piszę do miasta, które z tego żyło, zrobię to samo z obietnicami, które usłyszycie o Thermomixie — ode mnie, od koleżanki i z internetu.",
        "Poniżej jest lista i podpisuję się pod nią własnym nazwiskiem. Jeśli któraś z tych rzeczy została Wam obiecana inaczej, to obietnica była na wyrost.",
      ],
      bullets: [
        "„Gotuje samo” — PRAWDA połowicznie. Gotuje bez Waszej obecności, ale składniki nadal trzeba przygotować i włożyć. Nie obierze ziemniaków.",
        "„Zastąpi całą kuchnię” — NIEPRAWDA. Nie zastąpi patelni, piekarnika ani garnka na duży rosół.",
        "„Zaoszczędzisz mnóstwo czasu” — PRAWDA połowicznie. Gotowanie trwa tyle samo; oszczędzacie stanie przy garnku i część zmywania.",
        "„Będziecie jeść zdrowiej” — NIEPRAWDA jako obietnica urządzenia. To Wy decydujecie, co gotujecie. Sprzęt nie zmienia jadłospisu za Was.",
        "„Dzieci zaczną jeść warzywa” — NIEPRAWDA. Znam ten argument i uważam go za nieuczciwy.",
        "„Wszystko robi się jednym przyciskiem” — PRAWDA przy przepisach prowadzonych krok po kroku. Przy własnym gotowaniu ustawiacie wszystko sami.",
        "„Zwróci się” — TO ZALEŻY i tylko od jednego: od tego, jak często gotujecie. Przy gotowaniu od święta się nie zwróci.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Biłgoraju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Jeżdżę po mieście i po okolicy, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Biłgoraju"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla biłgorajskiej rodziny",
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

  districtsHeading: "Do których części miasta i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Puszcza Solska",
    "Bojary",
    "Rożnówka",
    "Ogrody",
    "Nadstawna",
    "Piaski",
    "Sole",
    "Dąbrowica",
    "Gromada",
  ],

  nearbyHeading: "Poza Biłgoraj też przyjadę",
  nearbyParagraphs: [
    "Tarnogród, Frampol, Józefów, Zwierzyniec, Szczebrzeszyn i Janów Lubelski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Tarnogród", "Frampol", "Józefów", "Zwierzyniec", "Szczebrzeszyn", "Janów Lubelski"],

  about: blokOMnie("do Biłgoraja", "w Biłgoraju i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Biłgoraja bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Biłgoraju"),
    {
      question: "Słyszałam, że dzięki temu dzieci zaczynają jeść warzywa. To prawda?",
      answer:
        "Nie i uważam ten argument za nieuczciwy. Urządzenie nie zmienia niczyich upodobań. Może natomiast sprawić, że zupa krem albo warzywa na parze powstają szybciej i częściej — ale to nadal Wy decydujecie, co ląduje na stole.",
    },
    {
      question: "Czy to się zwróci?",
      answer:
        "Tylko wtedy, gdy gotujecie często. Przy codziennym gotowaniu dla kilku osób rachunek wygląda zupełnie inaczej niż przy gotowaniu od święta. Policzymy to na spotkaniu na Waszym przykładzie, a jeśli wyjdzie, że się nie broni, powiem to wprost.",
    },
  ],

  geo: { lat: 50.5389, lng: 22.7222 },
};
