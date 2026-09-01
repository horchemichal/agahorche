import type { CityContent } from "../city-content";
import {
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
 * NOWY WIŚNICZ — bardzo małe miasto (samo miasto to niecałe trzy tysiące
 * osób) i duża, rozproszona gmina wokół niego. Sześć kilometrów do Bochni
 * sprawia, że w praktyce jest to zaplecze mieszkaniowe Bochni, z drugim
 * kierunkiem na Kraków. Uwaga przy pisaniu: to gmina o wysokim udziale
 * przemysłu i budownictwa oraz z mnóstwem jednoosobowych firm — nie jest
 * to gmina czysto rolnicza i nie należy jej tak opisywać.
 *
 * Fakty użyte w tekście:
 * — 11 sołectw; miasto stanowi osobną jednostkę pomocniczą,
 * — zamek Kmitów i Lubomirskich, klasztor karmelitów bosych zamieniony
 *   na zakład karny, „Koryznówka” z pamiątkami po Janie Matejce,
 * — rynek na regularnym planie z lokacji z 1616 r.; drewniana zabudowa
 *   spłonęła w pożarze w 1863 r.,
 * — wiśnicki makaron domowy tradycyjny i chleb żarnowy z Łomnej na
 *   ministerialnej Liście Produktów Tradycyjnych (Łomna to sołectwo tej
 *   właśnie gminy — dlatego wolno o nim tu pisać),
 * — Wiśnicko-Lipnicki Park Krajobrazowy.
 */
export const NOWY_WISNICZ: CityContent = {
  slug: "nowy-wisnicz",
  h1: "Thermomix Nowy Wiśnicz – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Nowy Wiśnicz — prezentacja i cena",
  seoDescription:
    "Thermomix w Nowym Wiśniczu: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0,6%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowy Wiśnicz — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowym Wiśniczu lub w gminie. Bez dopłat za dojazd, bez zobowiązania.",

  lead:
    "Do Nowego Wiśnicza i całej gminy dojeżdżam bez dopłaty za dojazd. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Nowy Wiśnicz i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Drożdżowa plecionka z kruszonką przygotowana z ciasta wyrobionego w Thermomixie",
    caption: "Prezentacja odbywa się u Ciebie — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Wiśniczu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam kompletnie wyposażona: urządzenie, produkty, a gdyby zabrakło czegoś w kuchni — także naczynia. Twoje przygotowania kończą się na zwolnieniu kawałka blatu i wskazaniu gniazdka.",
        "Potem gotujemy. Robimy pełny obiad, coś słodkiego i chętnie jeszcze coś z tego, co akurat masz w domu — jeśli w Waszej kuchni często powstaje ciasto albo makaron, powiedz o tym wcześniej, bo wtedy właśnie to warto zobaczyć. Przyda mi się też informacja, ile osób jada u Was i czego nie jecie.",
        "Na końcu liczby: cena, aktualna promocja i wysokość raty przy kilku okresach spłaty. Nie zostawiam nikogo z presją decyzji — spotkanie jest bezpłatne, a „przemyślę to” jest normalną odpowiedzią.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Sześć kilometrów do pracy, cała gmina po stokach",
      paragraphs: [
        "Nowy Wiśnicz jest bardzo małym miastem z bardzo dużą gminą wokół siebie — jedenaście sołectw rozłożonych po pogórzu, w Wiśnicko-Lipnickim Parku Krajobrazowym. Do Bochni jest stąd raptem kilka kilometrów, do Krakowa niecała godzina autostradą — i w te dwie strony jeździ do pracy wiele osób stąd.",
        "Charakterystyczne jest tu coś jeszcze: bardzo dużo jednoosobowych firm, głównie budowlanych i usługowych. Praca na własny rachunek oznacza dzień, który nie kończy się o siedemnastej, i wieczór, w którym najpierw trzeba dokończyć papiery. Kuchnia dostaje wtedy tyle uwagi, ile zostanie — czyli niewiele.",
        "Thermomix nie skraca dnia pracy, ale wyjmuje z niego jedną rzecz do zrobienia. Obiad da się nastawić i zostawić; gotuje się bez mieszania i bez pilnowania, a większą porcję robi się tym samym nakładem pracy co mniejszą. W domu, w którym wszyscy wracają o różnych porach, to jest realna różnica.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Wiśniczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — to zajmuje chwilę i zwykle od razu mamy termin. Dla osób, które wolą nie dzwonić, na dole strony jest formularz z polem na dogodną porę kontaktu.",
        "Powiedz od razu, w której miejscowości mieszkasz i ile osób będzie na spotkaniu. Gmina rozciąga się po stokach — Królówka, Muchówka czy Połom Duży to zupełnie inne dojazdy niż sam Wiśnicz — więc konkret pozwala mi ułożyć realny plan dnia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Wiśniczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Nowy Wiśnicz",
      paragraphs: [
        "Mieszka się tu przede wszystkim we własnych domach, często wielopokoleniowych, z ogrodem i z kuchnią, w której jest miejsce. Gotuje się więc na więcej osób i częściej od zera niż w mieście — a to znaczy więcej obierania, siekania i mieszania.",
        "Thermomix zabiera dokładnie tę część pracy. Sieka, gotuje i miksuje w jednym naczyniu, więc znika przekładanie gorących rzeczy i część zmywania. Zupa krem powstaje w jednym garnku zamiast w garnku plus blenderze, a ciasto wyrabia się bez ubrudzenia rąk.",
        "Przy małym dziecku dochodzi Varoma — porcja na parze powstaje równolegle z obiadem dla reszty domu, bez drugiego garnka i bez pilnowania dwóch rzeczy naraz.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Jedno urządzenie, dwa posiłki naraz.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Wiśnicz i to, co się tu je",
    paragraphs: [
      "Gmina Nowy Wiśnicz ma na ministerialnej Liście Produktów Tradycyjnych dwie pozycje i obie są o mące. Wiśnicki makaron domowy tradycyjny to ciasto z mąki pszennej i świeżo ubijanych jaj, wałkowane i krojone ręcznie. Chleb żarnowy z Łomnej — a Łomna to sołectwo tej właśnie gminy — piecze się z mąki mielonej na żarnach, bez dodatków, w piecu opalanym drewnem.",
      "To nie są dania efektowne, tylko takie, które robi się w domu, jeśli ktoś ma na to czas. I to jest sedno: obie te rzeczy zaczynają się od ciasta, a wyrabianie ciasta to najbardziej odstraszający etap całej roboty — najbrudniejszy i najbardziej męczący.",
      "Akurat tu Thermomix ma prostą, jednoznaczną przewagę: zagniata ciasto sam, w zamkniętym naczyniu, w kilka minut i bez ubrudzenia blatu. Reszta zostaje po Twojej stronie — wałkowanie, krojenie, pieczenie — ale zaczyna się od punktu, w którym ciasto już jest. Jeśli chcesz, na prezentacji zrobimy właśnie to zamiast standardowego zestawu.",
    ],
  },

  districtsHeading: "Gdzie w gminie Nowy Wiśnicz dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — do miasta i do wszystkich jedenastu sołectw. Za dojazd nie doliczam ani złotówki, niezależnie od tego, czy mieszkasz przy rynku, czy w Leksandrowej.",
    "Jeśli Twojej miejscowości nie ma na liście, po prostu zapytaj. Przy dalszych trasach umawiam kilka spotkań w jednym rejonie tego samego dnia, więc czasem zaproponuję termin nieco późniejszy, ale za to pewny.",
  ],
  districts: [
    "Nowy Wiśnicz — rynek i centrum",
    "Stary Wiśnicz",
    "Wiśnicz Mały",
    "Kopaliny",
    "Chronów",
    "Kobyle",
    "Królówka",
    "Leksandrowa",
    "Łomna",
    "Muchówka",
    "Olchawa",
    "Połom Duży",
  ],

  nearbyHeading: "Bochnia i okolica",
  nearbyParagraphs: [
    "Do Bochni jest stąd kilka kilometrów, więc jestem w tej okolicy regularnie. Dojeżdżam też w stronę Lipnicy Murowanej, Żegociny i Trzciany, a na wschód do Brzeska.",
  ],
  nearbyTowns: [
    "Bochnia",
    "Lipnica Murowana",
    "Trzciana",
    "Żegocina",
    "Rzezawa",
    "Gnojnik",
    "Brzesko",
    "Łapanów",
    "Kraków",
  ],

  about: blokOMnie("do Nowego Wiśnicza", "w Nowym Wiśniczu, Bochni i Brzesku"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Nowego Wiśnicza bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do miasta i do wszystkich sołectw gminy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nowym Wiśniczu"),
    {
      question: "Czy dojeżdżasz do sołectw, na przykład do Królówki albo Łomnej?",
      answer:
        "Tak, do wszystkich jedenastu. Przy umawianiu podaj miejscowość — gmina rozciąga się po stokach, więc trasę układam z wyprzedzeniem.",
    },
    {
      question: "Czy Thermomix wyrabia ciasto na makaron i na chleb?",
      answer:
        "Tak, zagniata ciasto w zamkniętym naczyniu w kilka minut, bez ubrudzenia blatu i rąk. Wałkowanie, krojenie i pieczenie zostają po Twojej stronie — urządzenie zdejmuje najbardziej męczący etap, a nie całą pracę.",
    },
    {
      question: "Czy da się umówić późnym popołudniem?",
      answer:
        "Tak. Wieczory w tygodniu i sobotnie przedpołudnia to najczęściej wybierane terminy — powiedz po prostu, o której realnie kończysz.",
    },
  ],

  geo: { lat: 49.9155, lng: 20.4661 },
};
