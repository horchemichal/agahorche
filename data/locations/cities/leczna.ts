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
 * ŁĘCZNA — dawne miasteczko jarmarczne z jednym z największych rynków
 * w regionie, które w drugiej połowie XX wieku urosło wraz z kopalnią
 * węgla. Jedyny taki ośrodek na Lubelszczyźnie: górnictwo w środku
 * krainy rolniczej.
 *
 * KĄT: obiad zjadany PRZED wyjściem. To jest odwrócenie tego, o czym
 * mówi każda inna strona miasta w tym serwisie — wszędzie indziej
 * wąskim gardłem jest wieczór po powrocie. W domu, w którym ktoś schodzi
 * na zmianę, najważniejszy posiłek dnia bywa zjadany o czwartej rano
 * albo o dziesiątej wieczorem, PRZED wyjściem, a nie po. Kuchnia jest
 * więc zorganizowana wokół wyjścia, nie wokół powrotu — i to zmienia
 * wszystko: co ma być gotowe, o której i jak długo ma się trzymać.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Łęczna rozwinęła się wraz z kopalnią węgla kamiennego i jest
 *   jedynym takim ośrodkiem na Lubelszczyźnie,
 * — dawna Łęczna była miastem jarmarcznym z bardzo dużym rynkiem,
 * — kopalnie pracują w ruchu ciągłym, na zmiany,
 * — okolica ma charakter rolniczy, a niedaleko leży Pojezierze Łęczyńskie.
 *
 * CZEGO NIE MA: nazwy kopalni, danych o zatrudnieniu, opisu systemu
 * zmianowego w konkretnym zakładzie.
 */
export const LECZNA: CityContent = {
  slug: "leczna",
  h1: "Thermomix Łęczna – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Łęczna — prezentacja i cena",
  seoDescription:
    "Thermomix w Łęcznej: bezpłatna prezentacja TM7 u Ciebie w domu, terminy pod grafik zmianowy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łęczna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łęcznej. Prezentacja bezpłatna, termin dopasowany do zmian.",

  lead:
    "Przyjeżdżam do Łęcznej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Łęczna i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łęcznej – jak wygląda prezentacja?",
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
      id: "posilek-przed-wyjsciem",
      heading: "Tutaj najważniejszy posiłek je się przed wyjściem",
      paragraphs: [
        "Łęczna jest na Lubelszczyźnie przypadkiem osobnym: górnictwo w środku krainy rolniczej. Dawne miasteczko jarmarczne z ogromnym rynkiem urosło wokół kopalni i od tamtej pory ma w sobie dwa różne zegary — jeden chodzi według pór roku, drugi według zmian. I to ten drugi robi w kuchni rzecz, o której nie pisze nikt.",
        "Na wszystkich stronach miast, które napisałam, wąskim gardłem jest wieczór po powrocie. Tutaj jest odwrotnie. W domu, w którym ktoś schodzi na dół, najważniejszy posiłek dnia bywa zjadany PRZED wyjściem — o czwartej rano, o dwunastej albo o dziesiątej wieczorem. Musi być konkretny, bo ma wystarczyć na wiele godzin ciężkiej pracy, i musi być gotowy na czas, bo na zmianę się nie spóźnia.",
        "Kuchnia jest więc zorganizowana wokół wyjścia, a nie wokół powrotu. To zmienia wszystko: co ma być ugotowane, o której, i jak długo ma się trzymać ciepłe albo zdatne do odgrzania. A ponieważ przez pół miesiąca ta godzina wypada w środku nocy, gotuje to zwykle ktoś, kto sam wtedy nie je.",
        "Urządzenie odpowiada na to jedną, bardzo prozaiczną rzeczą: danie może powstać wtedy, gdy jest czas, a nie wtedy, gdy jest potrzebne. Gotuje się bez pilnowania, więc da się je zrobić po południu na nocną zmianę. Odgrzewanie na parze nie wysusza, więc porcja o czwartej rano jest nadal jedzeniem, a nie karą. I wszystko dzieje się w jednym naczyniu — co o północy znaczy więcej niż w południe.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łęcznej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli w domu ktoś pracuje na zmiany, podajcie kilka terminów z różnych tygodni — dopasuję się, także rano i w środku dnia roboczego.",
        "Powiedzcie też, czy ktoś u Was śpi po nocce. Przyjadę o porze, która nikogo nie obudzi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łęcznej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łęczyńskiej rodziny",
      paragraphs: [
        "Gdy jedna osoba pracuje na zmiany, a reszta domu chodzi do szkoły i pracy o stałych godzinach, jeden obiad musi obsłużyć dwa różne rozkłady dnia.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wtedy, gdy akurat jest czas, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których części miasta i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Osiedle Samsonowicza",
    "Osiedle Niepodległości",
    "Bobrowniki",
    "Podzamcze",
    "Stara Wieś",
    "Ciechanki",
    "Zofiówka",
    "Nowogród",
    "Trębaczów",
  ],

  nearbyHeading: "Poza Łęczną też przyjadę",
  nearbyParagraphs: [
    "Świdnik, Lubartów, Ostrów Lubelski i Chełm są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świdnik", "Lubartów", "Ostrów Lubelski", "Chełm", "Lublin", "Parczew"],

  about: blokOMnie("do Łęcznej", "w Łęcznej i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Łęcznej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Łęcznej"),
    {
      question: "Gotuję na nocną zmianę, o dziwnych porach. Czy to coś zmienia?",
      answer:
        "Zmienia tyle, że danie da się przygotować wcześniej — gotuje się bez pilnowania, więc może powstać po południu i doczekać do wyjścia. Odgrzewanie na parze nie wysusza, więc porcja zjadana w środku nocy nadal jest normalnym jedzeniem.",
    },
    {
      question: "Pracuję na zmiany — czy przyjedziesz o nietypowej porze?",
      answer:
        "Tak, łącznie z porankiem i środkiem dnia roboczego. Podajcie kilka terminów z różnych tygodni, a wybiorę z nich — i powiedzcie, jeśli ktoś u Was śpi po nocce.",
    },
  ],

  geo: { lat: 51.3011, lng: 22.8814 },
};
