import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * SKARŻYSKO-KAMIENNA — duży węzeł kolejowy, w którym schodzą się kierunki
 * na Warszawę, Kraków, Kielce i Lublin. Miasto powstało w 1928 roku
 * ze scalenia Kamiennej i sąsiednich osad. Jest tu sanktuarium Matki Bożej
 * Ostrobramskiej — wierna kopia wileńskiej Ostrej Bramy — oraz muzeum
 * z plenerową ekspozycją sprzętu wojskowego.
 *
 * KĄT: dom, w którym ktoś śpi w dzień. O pracy zmianowej pisałam już
 * kilka razy, więc kąt musi iść dalej niż „grafik”. W mieście kolejowym
 * rozkład dnia układa nie zmiana, tylko dyżur i rozkład jazdy — a to daje
 * konsekwencję, której nie ma nigdzie indziej: KTOŚ REGULARNIE ŚPI
 * W ŚRODKU DNIA. Kuchnia musi wtedy być cicha, a to zmienia rozmowę
 * o urządzeniu w sposób, którego żadna broszura nie przewiduje.
 *
 * UCZCIWOŚĆ: Thermomix nie jest cichy i nie wolno tego przemilczeć.
 * Prawdziwy argument brzmi inaczej — hałasuje krótko i w jednym miejscu,
 * zamiast dwudziestu minut stukania pokrywkami. Tak to trzeba napisać.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Skarżysko-Kamienna jest węzłem kolejowym z kierunkami na Warszawę,
 *   Kraków, Kielce i Lublin,
 * — miasto powstało w 1928 roku ze scalenia Kamiennej i okolicznych osad,
 * — działa tu sanktuarium Matki Bożej Ostrobramskiej, wzorowane
 *   na wileńskiej Ostrej Bramie,
 * — w mieście jest muzeum z plenerową wystawą sprzętu wojskowego,
 * — dzielnice: Śródmieście, Dolna Kamienna, Górna Kamienna, Rejów, Bzin,
 *   Milica, Łyżwy, Książęce, Osiedle Zachodnie, Pogorzałe.
 *
 * CZEGO NIE MA: nazw pracodawców, danych o zatrudnieniu na kolei,
 * twierdzeń o rozkładach jazdy i o tym, ilu mieszkańców dojeżdża.
 */
export const SKARZYSKO_KAMIENNA: CityContent = {
  slug: "skarzysko-kamienna",
  h1: "Thermomix Skarżysko-Kamienna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Skarżysko-Kamienna — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Skarżysku-Kamiennej: bezpłatna prezentacja TM7 u Ciebie w domu, także rano i w środku dnia. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skarżysko-Kamienna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skarżysku. Prezentacja bezpłatna, termin dopasowany do dyżurów.",

  lead:
    "Przyjeżdżam do Skarżyska-Kamiennej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, także rano i w środku dnia roboczego.",

  highlights: highlightyStandardowe("Skarżysko i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skarżysku – jak wygląda prezentacja?",
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
      id: "ktos-spi-w-dzien",
      heading: "Dom, w którym ktoś śpi w środku dnia",
      paragraphs: [
        "Skarżysko jest węzłem — schodzą się tu kierunki na Warszawę, Kraków, Kielce i Lublin, i tak jest od ponad stu lat. W mieście, przez które przechodzi kolej, dzień układa nie zmiana w zakładzie, tylko dyżur i rozkład jazdy. A to daje skutek, którego nie ma w żadnym innym rytmie pracy: ktoś regularnie kładzie się spać o dziesiątej rano i wstaje po południu.",
        "Jeśli u Was tak jest, wiecie, o czym mówię. Kuchnia w takim domu ma dodatkowy warunek, o którym nie myśli nikt, kto tego nie przeżył: musi być cicha. Nie da się w południe robić obiadu przy pełnej kuchence, z pokrywkami, blenderem i wyciąganiem garnków z dolnej szafki, jeśli za ścianą śpi człowiek, który jutro ma odpowiadać za pociąg.",
        "I tu muszę być uczciwa, bo inaczej ta strona byłaby nic niewarta. Thermomix nie jest cichy. Miksowanie na wysokich obrotach słychać przez ścianę i nie będę udawać, że jest inaczej. Prawdziwa różnica jest gdzie indziej: hałasuje krótko i tylko w tych momentach, kiedy miksuje. Reszta — gotowanie, duszenie, gotowanie na parze — dzieje się właściwie bezgłośnie, w jednym zamkniętym naczyniu, bez wyjmowania i mycia trzech garnków.",
        "W praktyce oznacza to, że obiad da się zrobić w porze, w której ktoś śpi, jeśli głośną część zrobi się wcześniej albo później. To niewiele, ale w takim domu niewiele znaczy sporo.",
      ],
    },
    {
      id: "wezel-w-cztery-strony",
      heading: "Cztery kierunki — i rodzina rozrzucona po nich",
      paragraphs: [
        "Węzeł ma drugi skutek, mniej oczywisty. Z miasta, z którego łatwo dojechać w cztery strony, ludzie w cztery strony wyjeżdżają: do szkoły, na studia, do pracy. Rodzina bywa więc rozłożona między Warszawą, Krakowem i Kielcami, a zjeżdża się na weekend albo na święta.",
        "Kuchennie to znaczy dwa różne tryby w jednym domu. Przez pięć dni gotuje się dla dwóch osób, a w sobotę nagle dla ośmiu — i to jest ten moment, w którym normalna kuchnia zaczyna być za mała.",
        "Przy urządzeniu ta różnica jest mniejsza, niż się wydaje: większa porcja nie wymaga większego pilnowania, a ciasto i farsz można przygotować dzień wcześniej, zamiast wstawać w sobotę o szóstej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skarżysku-Kamiennej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — najlepiej z kilkoma terminami z różnych dni, bo wtedy od razu znajdziemy taki, który mieści się między dyżurami.",
        "Umawiam się także rano i w środku dnia roboczego. Jeśli u Was ktoś śpi po nocy, powiedzcie o tym przy umawianiu — przyjadę o porze, która nikogo nie obudzi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Skarżysku-Kamiennej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla skarżyskiej rodziny",
      paragraphs: [
        "Gdy jedna osoba w domu pracuje w dyżurach, wspólny obiad o stałej porze po prostu nie istnieje. Jedzenie musi powstać wcześniej i doczekać — czasem do dwudziestej drugiej, czasem do piątej rano.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wtedy, gdy akurat jest chwila, a odgrzewanie na parze sprawia, że po kilku godzinach nadal nadaje się do jedzenia.",
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

  districtsHeading: "Do których dzielnic Skarżyska dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Dolna Kamienna",
    "Górna Kamienna",
    "Rejów",
    "Bzin",
    "Milica",
    "Łyżwy",
    "Książęce",
    "Osiedle Zachodnie",
    "Pogorzałe",
  ],

  nearbyHeading: "Okolica Skarżyska",
  nearbyParagraphs: [
    "Suchedniów, Wąchock, Starachowice, Stąporków i Końskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Suchedniów", "Wąchock", "Starachowice", "Stąporków", "Końskie", "Kielce"],

  about: blokOMnie("do Skarżyska", "w Skarżysku i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Skarżyska-Kamiennej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych gmin. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Skarżysku-Kamiennej"),
    {
      question: "Czy Thermomix jest głośny?",
      answer:
        "Podczas miksowania na wysokich obrotach tak — i nie będę twierdzić inaczej. Ale to trwa kilkanaście sekund, a nie pół godziny. Samo gotowanie, duszenie i para są praktycznie bezgłośne, bo dzieją się w zamkniętym naczyniu. Na prezentacji usłyszysz to na własne uszy, we własnej kuchni.",
    },
    {
      question: "Pracuję w dyżurach — czy przyjedziesz o nietypowej porze?",
      answer:
        "Tak, łącznie z porankiem i środkiem dnia roboczego. Podajcie kilka terminów z różnych tygodni, a wybiorę z nich. Wolę dopasować się do Waszego rozkładu, niż prosić, żebyście dopasowali się do mojego.",
    },
  ],

  geo: { lat: 51.1147, lng: 20.8794 },
};
