import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * NYSA — drugie co do wielkości miasto województwa, dawniej nazywane
 * Śląskim Rzymem ze względu na liczbę kościołów i kolegium jezuickie.
 * W 1945 roku miasto zostało zniszczone w ogromnym stopniu i odbudowane,
 * a jego mieszkańcy w większości przyjechali tu po wojnie z innych stron.
 * Obok leży Jezioro Nyskie.
 *
 * KĄT: kuchnia, która przyjechała w walizkach. Praktyczna konsekwencja
 * jest taka, że w tym mieście NIE MA JEDNEJ ODPOWIEDZI na pytanie „co się
 * u Was gotuje w niedzielę" — w jednej klatce mogą mieszkać rodziny, które
 * przywiozły trzy różne kuchnie. To zmienia sposób, w jaki umawiam
 * prezentację: nie zakładam nic z góry i pytam, zamiast przywozić gotowy
 * zestaw dań „regionalnych".
 *
 * ROZGRANICZENIE WOBEC PRZEMYŚLA. Tam kąt brzmiał „kuchnia pogranicza
 * i dlaczego nie przywożę gotowej opowieści" — chodziło o mieszankę,
 * która powstawała na miejscu przez stulecia. Tu jest inaczej i o czym
 * innym: o nieciągłości, o tym, że tradycja zaczęła się właściwie od nowa,
 * i o tym, że sąsiad przy tej samej klatce gotuje zupełnie co innego.
 *
 * TON: żadnej historii politycznej, żadnych ocen, jedno rzeczowe zdanie
 * o roku 1945 i tyle. Piszę o kuchni, nie o przesiedleniach.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Nysa była nazywana Śląskim Rzymem ze względu na liczbę kościołów,
 * — miasto zostało w 1945 roku zniszczone w bardzo dużym stopniu,
 *   a po wojnie zasiedlone w większości przez ludzi z innych regionów,
 * — obok miasta leży Jezioro Nyskie,
 * — Nysa jest siedzibą powiatu i drugim co do wielkości miastem regionu.
 *
 * CZEGO NIE MA: procentów zniszczeń, historii przesiedleń, nazw regionów
 * pochodzenia mieszkańców, ocen historycznych.
 */
export const NYSA: CityContent = {
  slug: "nysa",
  h1: "Thermomix Nysa – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Nysa — prezentacja i cena",
  seoDescription:
    "Thermomix w Nysie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nysa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nysie. Prezentacja bezpłatna — gotujemy to, co u Was się je.",

  lead:
    "Przyjeżdżam do Nysy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Nysa i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nysie – jak wygląda prezentacja?",
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
      id: "kuchnia-w-walizkach",
      heading: "Miasto, w którym każda rodzina przywiozła własną kuchnię",
      paragraphs: [
        "Nysę nazywano kiedyś Śląskim Rzymem — od liczby kościołów i od kolegium, które tu działało. W czterdziestym piątym miasto zostało zburzone niemal doszczętnie, a potem odbudowane przez ludzi, którzy w większości przyjechali tu skądinąd. Tyle historii, bo znają ją Państwo lepiej ode mnie.",
        "Interesuje mnie z tego jedna rzecz i jest zupełnie kuchenna. W mieście, którego mieszkańcy zjechali z różnych stron, nie ma jednej odpowiedzi na pytanie „co się u Was gotuje w niedzielę”. W jednej klatce potrafią mieszkać trzy rodziny, w których niedzielny obiad wygląda zupełnie inaczej — inne zupy, inne ciasto na święta, inne proporcje w tym samym daniu.",
        "Dla mnie to ma bardzo praktyczny skutek. Do miast, w których jest jedna wyraźna tradycja, mogę przyjechać z gotowym pomysłem na to, co ugotujemy. Tutaj byłoby to zwyczajnie głupie — bo trafiłabym w gust jednej rodziny na trzy, a pozostałym pokazała coś, czego u siebie nie robią.",
        "Dlatego przy umawianiu pytam więcej niż gdzie indziej: co u Was jada się najczęściej, co robi się na święta i która potrawa zabiera najwięcej czasu. Potem przywożę składniki właśnie na to. Nie po to, żeby uczyć Państwa ich własnych dań — na to nie mam ani prawa, ani kompetencji. Po to, żeby sprawdzić, czy urządzenie skróci akurat tę robotę, którą i tak wykonujecie co tydzień.",
        "To jest zresztą jedyna uczciwa próba, jaką znam. Danie z folderu wyjdzie zawsze. Dopiero Wasze pokaże prawdę.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nysie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Powiedz przy okazji, co u Was gotuje się najczęściej — przywiozę składniki na to danie.",
        "Podaj dzielnicę albo miejscowość, jeśli mieszkasz poza samą Nysą. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nysie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nyskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — i to ona zna wszystkie rodzinne przepisy na pamięć.",
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

  districtsHeading: "Do których części miasta i gminy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sołectw gminy, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Zawodzie",
    "Górna Wieś",
    "Podzamcze",
    "Biała Nyska",
    "Konradowa",
    "Goświnowice",
    "Niwnica",
    "Złotogłowice",
    "Wierzbięcice",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Otmuchów, Paczków, Głuchołazy, Korfantów i Grodków są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Otmuchów", "Paczków", "Głuchołazy", "Korfantów", "Grodków", "Prudnik"],

  about: blokOMnie("do Nysy", "w Nysie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nysy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nysie"),
    {
      question: "Czy możemy ugotować nasze danie, a nie Twoje?",
      answer:
        "Bardzo proszę i sama o to zabiegam. Powiedz przy umawianiu, co u Was robi się najczęściej, a przywiozę składniki właśnie na to. Danie z folderu wyjdzie zawsze — dopiero Wasze pokaże, czy urządzenie ma u Was sens.",
    },
    {
      question: "Czy pokażesz przepisy „regionalne”?",
      answer:
        "Wolę tego nie obiecywać, bo w Nysie każda rodzina ma trochę inną tradycję i nie zamierzam nikomu opowiadać o jego własnej kuchni. Pokażę, jak urządzenie radzi sobie z tym, co Wy gotujecie — to jest uczciwsze i po prostu bardziej przydatne.",
    },
  ],

  geo: { lat: 50.4744, lng: 17.3333 },
};
