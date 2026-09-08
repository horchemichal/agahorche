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
 * KAZIMIERZA WIELKA — najdalej na południowy zachód wysunięte miasto
 * województwa świętokrzyskiego, przy samej granicy z Małopolską.
 * Okolica rolnicza, przez dekady związana z cukrownią; dziś powiat
 * kazimierski jest jednym z najmniejszych w kraju.
 *
 * KĄT: kierunek. To jedyne miasto w tej fali, dla którego stolica własnego
 * województwa NIE JEST najbliższym dużym miastem — do Krakowa jest stąd
 * bliżej niż do Kielc, a sąsiednie Proszowice, Skalbmierz i Koszyce leżą
 * już częściowo w Małopolsce, gdzie strony u nas są od dawna. Z tego
 * wynika konkretna sprawa, którą warto powiedzieć wprost: MIESZKAŃCY
 * PATRZĄ NA KRAKOWSKIE CENY I OFERTY, więc pytanie brzmi, czy „na wsi"
 * dostaje się gorsze warunki. Odpowiedź jest prosta i uczciwa: nie,
 * bo cenę ustala producent i jest jedna w całej Polsce.
 *
 * UWAGA REDAKCYJNA: nie robimy z tej strony kolejnego tekstu o warzywach.
 * Sąsiednie Proszowice, Koniusza i Słomniki dostały już strony o skrzynce
 * warzyw, kapuście i czosnku — czwarta wersja tego samego byłaby
 * powtórzeniem, a nie treścią lokalną.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kazimierza Wielka leży przy granicy województwa świętokrzyskiego
 *   z małopolskim, w południowo-zachodnim krańcu regionu,
 * — Kraków leży bliżej niż Kielce,
 * — miasto i okolica przez dekady były związane z cukrownią,
 * — powiat kazimierski jest jednym z najmniejszych w Polsce,
 * — okolica ma charakter rolniczy,
 * — do gminy należą m.in. Cudzynowice, Odonów, Donosy, Gorzków, Wielgus.
 *
 * CZEGO NIE MA: dat zamknięcia cukrowni, danych o zatrudnieniu, czasów
 * przejazdu w minutach, liczb dotyczących upraw.
 */
export const KAZIMIERZA_WIELKA: CityContent = {
  slug: "kazimierza-wielka",
  h1: "Thermomix Kazimierza Wielka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kazimierza Wielka — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kazimierzy Wielkiej: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kazimierza Wielka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kazimierzy Wielkiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kazimierzy Wielkiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Cudzynowic, Odonowa, Donos i pozostałych sołectw.",

  highlights: highlightyStandardowe("Kazimierza Wielka i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kazimierzy Wielkiej – jak wygląda prezentacja?",
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
      id: "blizej-krakowa",
      heading: "Miasto, które patrzy w stronę Krakowa, a nie Kielc",
      paragraphs: [
        "Kazimierza Wielka leży w rogu województwa i ma cechę, której nie ma tu żadne inne miasto: stolica własnego regionu nie jest najbliższym dużym miastem. Do Krakowa jest stąd bliżej niż do Kielc, a Proszowice, Koszyce i Skalbmierz leżą tuż obok, częściowo już po małopolskiej stronie granicy.",
        "W codzienności widać to wyraźnie. Na studia, do lekarza specjalisty, na większe zakupy i do pracy jedzie się częściej na zachód niż na północ. Ludzie stąd znają krakowskie ceny, krakowskie oferty i krakowskie promocje — bo je po prostu widzą.",
        "I z tego bierze się pytanie, które słyszę w takich miejscach częściej niż gdziekolwiek indziej, zwykle zadane półżartem: „a na wsi to pewnie drożej?”. Odpowiem wprost, żeby nie było wątpliwości. Nie. Cenę Thermomixa ustala producent i jest ona jedna w całej Polsce — taka sama w Kazimierzy, w Krakowie i w Warszawie. Promocje też są ogólnopolskie i obowiązują w tych samych terminach.",
        "Ode mnie dochodzi jedna rzecz, która akurat mogłaby kosztować: dojazd. Nie kosztuje. Przyjeżdżam do miasta i do każdego sołectwa gminy za darmo, tak samo jak do bloku w centrum dużego miasta. Jedyne, co zmienia odległość, to pora, o której u Was jestem.",
      ],
      links: [
        { href: "/thermomix/proszowice", label: "Thermomix Proszowice" },
        { href: "/thermomix/krakow", label: "Thermomix Kraków" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kazimierzy Wielkiej?",
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
    sekcjaCena("w Kazimierzy Wielkiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Kazimierza Wielka",
      paragraphs: [
        "Gdy praca albo szkoła są kilkadziesiąt kilometrów dalej, dzień robi się długi, a obiad powstaje po powrocie — czyli wtedy, gdy sił jest najmniej.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a wszystko dzieje się w jednym naczyniu.",
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
    "Kazimierza Wielka",
    "Cudzynowice",
    "Odonów",
    "Donosy",
    "Gorzków",
    "Wielgus",
    "Zagórzyce",
    "Broniszów",
    "Sieradzice",
    "Krzyszkowice",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Skalbmierz, Działoszyce, Pińczów, a po małopolskiej stronie Proszowice i Koszyce — wszystko w zasięgu jednej trasy i wszędzie dojazd bezpłatny.",
  ],
  nearbyTowns: ["Skalbmierz", "Działoszyce", "Pińczów", "Proszowice", "Koszyce", "Busko-Zdrój"],

  about: blokOMnie("do Kazimierzy Wielkiej", "w gminie i na pograniczu z Małopolską", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kazimierzy Wielkiej bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kazimierzy Wielkiej"),
    {
      question: "Czy w małej miejscowości cena jest wyższa?",
      answer:
        "Nie. Cenę i promocje ustala producent i są takie same w całej Polsce — w Kazimierzy dokładnie jak w Krakowie. Ode mnie nie dochodzi żadna dopłata, także za dojazd.",
    },
    {
      question: "Mieszkam po małopolskiej stronie granicy — przyjedziesz?",
      answer:
        "Tak, granica województwa nie ma tu żadnego znaczenia. Jeżdżę po obu stronach, a Proszowice i Koszyce mam po drodze. Podaj miejscowość przy umawianiu, a dopasuję porę do trasy.",
    },
  ],

  geo: { lat: 50.2653, lng: 20.4917 },
};
