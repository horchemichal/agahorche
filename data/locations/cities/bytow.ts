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
 * BYTÓW — miasto na zachodnich Kaszubach, z zamkiem i sporą liczbą
 * starszych domów jednorodzinnych; w okolicy wciąż wiele gospodarstw
 * ogrzewanych piecem.
 *
 * KĄT: dom z kuchnią węglową albo piecem. To jest jedyne miejsce
 * w serwisie na sytuację, o której nie pomyślał żaden folder: KUCHNIA,
 * W KTÓREJ PŁYTA GRZEJE PRZY OKAZJI OGRZEWANIA DOMU — i w której zimą
 * gotowanie jest praktycznie darmowe, a latem jest udręką.
 *
 * TEZA, KTÓRA MUSI PAŚĆ I JEST NIEWYGODNA: w takim domu ZIMĄ urządzenie
 * elektryczne wygrywa rzadziej, niż bym chciała. Zyskuje za to
 * zdecydowanie latem, gdy nikt nie chce rozpalać.
 *
 * DRUGA CZĘŚĆ, ISTOTNA I PRAKTYCZNA: kuchnia węglowa nie ma regulacji
 * temperatury. Wszystko, co wymaga stałych osiemdziesięciu stopni albo
 * łagodnego duszenia, jest przy niej loterią — i to jest realna przewaga
 * urządzenia z ustawianą temperaturą, niezależna od pory roku.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Bytów leży na Kaszubach i ma zamek,
 * — w okolicy jest dużo starszej zabudowy jednorodzinnej.
 *
 * CZEGO NIE MA: porad dotyczących ogrzewania, przepisów o emisjach,
 * doradzania w sprawie wymiany pieca — to nie moja dziedzina.
 */
export const BYTOW: CityContent = {
  slug: "bytow",
  h1: "Thermomix Bytów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Bytów — prezentacja i cena",
  seoDescription:
    "Thermomix w Bytowie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bytów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bytowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bytowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Bytów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bytowie – jak wygląda prezentacja?",
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
      id: "kuchnia-weglowa",
      heading: "Dom, w którym płyta grzeje przy okazji",
      paragraphs: [
        "W okolicy Bytowa wciąż jest sporo domów, w których zimą pali się w kuchni albo w piecu, a płyta grzeje przy okazji ogrzewania. To jest sytuacja, o której nie pomyślał żaden folder reklamowy, i wymaga innej rozmowy niż w bloku.",
        "Zacznę od zdania, które sprzedawcy nie wypada powiedzieć: zimą, w domu z palącą się kuchnią, urządzenie elektryczne wygrywa rzadziej, niż bym chciała. Skoro w płycie i tak jest ogień, bo trzeba ogrzać dom, to postawienie na niej garnka nic dodatkowo nie kosztuje. Nie będę udawać, że jest inaczej — w takim domu, w styczniu, zupa w garnku jest po prostu tańsza.",
        "Ale to nie jest cała prawda i dwie pozostałe części są mocniejsze.",
        "Pierwsza: lato. Latem nikt nie rozpala kuchni po to, żeby ugotować obiad — a wtedy zostaje albo osobna kuchenka, albo grzanie w domu, w którym już jest gorąco. Urządzenie, które grzeje tylko w zamkniętym naczyniu i nie ogrzewa przy tym pomieszczenia, jest wtedy dokładnie tym, czego brakuje. Sezon, w którym naprawdę zarabia na siebie w takim domu, to maj–wrzesień.",
        "Druga jest ważniejsza i dotyczy całego roku: kuchnia węglowa nie ma regulacji. Ma miejsca cieplejsze i chłodniejsze, ma godzinę, o której trzyma, i taką, o której gaśnie. Wszystko, co wymaga stałej, niskiej temperatury — łagodne duszenie, sos, który nie może się zagotować, mleko, budyń, masa, którą trzeba trzymać w cieple — jest przy niej loterią i albo się pilnuje, albo się przypala. Ustawiona temperatura rozwiązuje to raz na zawsze, niezależnie od tego, czy w kuchni się pali.",
        "Jeżeli u Was jest właśnie taki dom, powiedzcie mi to przy umawianiu. Przywiozę wtedy do ugotowania coś, co przy palenisku wychodzi najgorzej, a nie coś, co i tak wyjdzie w garnku.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bytowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bytowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bytowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności i że grzeje do ustawionej temperatury — także wtedy, gdy w kuchni nikt nie pali. Wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Bytów",
    "Niezabyszewo",
    "Udorpie",
    "Pomysk Wielki",
    "Gostkowo",
    "Rekowo",
    "Dąbie",
    "Płotowo",
    "Sierzno",
    "Mądrzechowo",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Miastko, Kościerzyna, Kartuzy i Lębork są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Miastko", "Kościerzyna", "Kartuzy", "Lębork", "Człuchów"],

  about: blokOMnie("do Bytowa", "w gminie Bytów i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bytowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bytowie"),
    {
      question: "Mamy kuchnię węglową. Czy taki sprzęt ma u nas sens?",
      answer:
        "Zimą mniejszy i powiem to wprost — skoro w płycie i tak jest ogień, garnek nic dodatkowo nie kosztuje. Sens robi się duży latem, gdy nikt nie chce rozpalać, oraz przez cały rok przy wszystkim, co wymaga stałej, niskiej temperatury: duszenie, sosy, mleko, masy. Kuchnia węglowa nie ma regulacji i to jest jej największe ograniczenie.",
    },
    {
      question: "Co najlepiej ugotować na spotkaniu w takim domu?",
      answer:
        "Coś, co przy palenisku wychodzi najgorzej, a nie coś, co i tak wyjdzie w garnku. Powiedz przy umawianiu, że pali się u Was w kuchni — dobiorę dania właśnie pod to.",
    },
  ],

  geo: { lat: 54.1706, lng: 17.4914 },
};
