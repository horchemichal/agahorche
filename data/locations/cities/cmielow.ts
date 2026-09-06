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
 * ĆMIELÓW — małe miasto pod Ostrowcem, znane w całej Polsce z porcelany.
 * Zakład działa tu od początku XIX wieku, a ćmielowskie figurki i serwisy
 * są rozpoznawalne również poza krajem. W mieście działa Żywe Muzeum
 * Porcelany, są też ruiny zamku.
 *
 * KĄT: talerz. To jedyne miejsce w Polsce, gdzie można napisać stronę
 * o gotowaniu, zaczynając od NACZYNIA, a nie od jedzenia — i gdzie nie
 * będzie to pretensjonalne, tylko po prostu miejscowe. Praktyczny haczyk
 * jest taki: porcelanowy serwis wyjmuje się na gości, a OBIAD DLA GOŚCI
 * to najbardziej stresujący posiłek w roku, bo wszystko musi być gotowe
 * naraz i naraz gorące. I o tym jest ta sekcja — nie o estetyce.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Ćmielowie od początku XIX wieku produkuje się porcelanę,
 * — ćmielowskie figurki i serwisy są rozpoznawalne w całej Polsce,
 * — działa tu Żywe Muzeum Porcelany, gdzie można zobaczyć produkcję,
 * — w mieście zachowały się ruiny zamku,
 * — Ćmielów leży między Ostrowcem Świętokrzyskim, Ożarowem i Opatowem.
 *
 * CZEGO NIE MA: nazw serii i wzorów, danych o zatrudnieniu, cen wyrobów,
 * twierdzeń o tym, kto w mieście gdzie pracuje.
 */
export const CMIELOW: CityContent = {
  slug: "cmielow",
  h1: "Thermomix Ćmielów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Ćmielów — prezentacja i cena",
  seoDescription:
    "Thermomix w Ćmielowie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ćmielów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ćmielowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ćmielowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Brzóstowej, Krzczonowic, Podgrodzia i pozostałych sołectw.",

  highlights: highlightyStandardowe("Ćmielów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ćmielowie – jak wygląda prezentacja?",
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
      id: "serwis-na-gosci",
      heading: "Miasto, które robi talerze — i obiad, na który się je wyjmuje",
      paragraphs: [
        "Ćmielów robi porcelanę od początku dziewiętnastego wieku i robi ją do dziś. Ćmielowskie figurki i serwisy stoją w witrynach w całej Polsce — także w domach ludzi, którzy nigdy nie byli w tym mieście i nie wiedzą, skąd to pochodzi.",
        "Ale w Ćmielowie porcelana nie jest pamiątką. Jest czymś, co się zna od podszewki — i dlatego akurat tutaj mogę zacząć od naczynia, a nie od jedzenia. Serwisu nie wyjmuje się na co dzień. Wyjmuje się go na gości, na święta, na chrzciny, na osiemnastkę cioci. Czyli dokładnie wtedy, kiedy gotowanie jest najtrudniejsze.",
        "Bo obiad dla gości ma jedną cechę, której nie ma żaden inny posiłek w roku: wszystko musi być gotowe naraz i naraz gorące. Zupa, mięso, dodatek, sos, deser. Płyta ma cztery palniki, piekarnik jedną komorę, a osoba, która to prowadzi, jedną parę rąk. Dlatego przy takim obiedzie gospodyni albo gospodarz zwykle nie siada — stoi.",
        "Urządzenie nie rozwiązuje tego magicznie, ale zdejmuje jedno naczynie z płyty i jedną rzecz z głowy. Sos, zupa albo krem gotują się same, obok, bez pilnowania i bez ryzyka, że przywrą do dna w najgorszym momencie. Ciasto i farsz można zrobić dzień wcześniej. A jeśli trzeba coś podgrzać w ostatniej chwili, para robi to bez wysuszenia.",
        "To jest różnica między obiadem, przy którym stoisz, a obiadem, przy którym siadasz razem z gośćmi. I na tym serwisie warto to sprawdzić.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ćmielowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Ćmielowem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ćmielowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ćmielowskiej rodziny",
      paragraphs: [
        "Na co dzień obiad musi powstać w oknie między pracą, szkołą i wieczorem, a robi go zwykle jedna osoba. Od święta zmienia się tylko liczba osób przy stole — i to jest ten moment, w którym normalna kuchnia zaczyna być za mała.",
        "Thermomix pomaga w obu przypadkach tym samym: nie wymaga obecności, a większa porcja nie kosztuje więcej pilnowania. Danie gotuje się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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
    "Ćmielów",
    "Brzóstowa",
    "Krzczonowice",
    "Podgrodzie",
    "Wiktoryn",
    "Wola Grójecka",
    "Grójec",
    "Przeuszyn",
    "Stoki Duże",
    "Piaski Brzóstowskie",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Ostrowiec Świętokrzyski, Ożarów, Opatów, Kunów i Sandomierz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ostrowiec Świętokrzyski", "Ożarów", "Opatów", "Kunów", "Sandomierz", "Zawichost"],

  about: blokOMnie("do Ćmielowa", "w Ćmielowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ćmielowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ćmielowie"),
    {
      question: "Czy urządzenie przyda się przy większym obiedzie na gości?",
      answer:
        "Najbardziej właśnie wtedy. Jedno danie gotuje się samo obok, bez zajmowania palnika i bez pilnowania, a ciasto i farsz da się zrobić dzień wcześniej. To nie znaczy, że wszystko zrobi się samo — znaczy, że masz o jedną rzecz mniej do przypilnowania w najgorszym momencie.",
    },
    {
      question: "Czy da się w tym gotować w mniejszych ilościach, dla dwóch osób?",
      answer:
        "Tak, choć powiem uczciwie: przy bardzo małych porcjach część przepisów wymaga zmiany proporcji, żeby nożom było co mieszać. Na prezentacji ugotujemy coś w Waszej wielkości porcji, a nie w mojej — wtedy od razu zobaczysz, czy to działa u Was.",
    },
  ],

  geo: { lat: 50.8917, lng: 21.5169 },
};
