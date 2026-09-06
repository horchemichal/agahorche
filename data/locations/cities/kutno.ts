import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * KUTNO — duży węzeł kolejowy w centrum kraju, gdzie krzyżują się linie
 * wschód–zachód i północ–południe. Wokół miasta wyrosła strefa
 * przemysłowa i magazynowa. Kutno jest też znane z corocznego Święta Róży.
 *
 * KĄT: dwunastogodzinna zmiana. To jest rytm, którego nie opisałam
 * nigdzie indziej, bo nigdzie indziej nie był tak typowy — a różni się
 * od ośmiogodzinnej zmiany bardziej, niż wynikałoby z arytmetyki.
 * Przy dwunastkach dzień pracy jest STRACONY W CAŁOŚCI: wychodzi się
 * przed świtem, wraca po ciemku, i nie ma w nim miejsca na nic poza pracą
 * i snem. Za to potem są dwa albo trzy dni wolne z rzędu. Gotowanie
 * przestaje więc być codzienną czynnością, a staje się czymś, co robi się
 * W BLOKACH — i to jest zupełnie inna rozmowa niż „obiad o siedemnastej".
 *
 * OSTROŻNOŚĆ: piszę warunkowo („jeśli u Was pracuje się w dwunastkach"),
 * bez twierdzeń o tym, ilu mieszkańców tak pracuje, i bez żadnych porad
 * zdrowotnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kutno jest jednym z ważniejszych węzłów kolejowych w Polsce,
 * — wokół miasta działa strefa przemysłowa i magazynowa,
 * — odbywa się tu coroczne Święto Róży,
 * — praca w systemie dwunastogodzinnym jest w magazynach i produkcji
 *   rozwiązaniem powszechnym.
 *
 * CZEGO NIE MA: nazw firm, danych o zatrudnieniu, opisu konkretnych
 * grafików, porad dotyczących zdrowia przy pracy zmianowej.
 */
export const KUTNO: CityContent = {
  slug: "kutno",
  h1: "Thermomix Kutno – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kutno — prezentacja i cena",
  seoDescription:
    "Thermomix w Kutnie: bezpłatna prezentacja TM7 u Ciebie w domu, terminy pod grafik dwunastogodzinny. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kutno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kutnie. Prezentacja bezpłatna, termin dopasowany do zmian.",

  lead:
    "Przyjeżdżam do Kutna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Kutno i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kutnie – jak wygląda prezentacja?",
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
      id: "dwunastki",
      heading: "Dwunastka to nie jest dłuższa ósemka",
      paragraphs: [
        "Kutno leży tam, gdzie krzyżują się główne linie kolejowe kraju, a wokół miasta wyrosły magazyny i zakłady. Tam, gdzie jest przeładunek i produkcja, pracuje się najczęściej w dwunastkach — i jeśli u Was tak jest, to reszta tego akapitu nie będzie dla Was odkryciem.",
        "Bo dwunastogodzinna zmiana nie jest po prostu dłuższą ósemką. Ona zjada cały dzień. Wychodzi się przed świtem, wraca po ciemku, i w tym dniu nie mieści się nic poza pracą, dojazdem i snem. Nie ma w nim miejsca na gotowanie i nie ma sensu udawać, że jest.",
        "Za to po dwóch albo trzech takich dniach przychodzą dni wolne — i to one są całym Waszym tygodniem. Wszystko dzieje się wtedy: zakupy, pranie, dzieci, rodzice, naprawy. I gotowanie też, tylko że na zapas, bo jutro znów nikogo nie będzie.",
        "Dlatego akurat tutaj ta część, którą na innych stronach nazwałam mniej istotną — gotowanie do przodu — jest sednem sprawy. Zupa w dużym garnku, drugie danie w porcjach, coś, co da się odgrzać. Urządzenie robi tu dwie rzeczy: gotuje bez pilnowania, więc w dzień wolny można się w tym czasie zająć czymkolwiek innym, a większa porcja nie kosztuje więcej pracy niż mała.",
        "Druga rzecz jest równie prozaiczna. Odgrzewanie na parze nie wysusza, więc to, co ugotowane w niedzielę, we wtorek nadal nadaje się do jedzenia — a nie ląduje w koszu, bo „już nie to samo”. Przy gotowaniu w blokach to jest różnica między systemem, który działa, a takim, który po dwóch tygodniach się rozsypuje.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kutnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Najprościej podać po prostu swoje dni wolne — umawiam się także w środku tygodnia i w środku dnia.",
        "Powiedz też, czy ktoś u Was śpi po nocnej dwunastce. Przyjadę o porze, która nikogo nie obudzi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kutnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kutnowskiej rodziny",
      paragraphs: [
        "Gdy jedna osoba pracuje w dwunastkach, a reszta domu ma stałe godziny, jedzenie musi powstawać z wyprzedzeniem i przetrwać kilka dni — a robi je zwykle ta sama osoba, w swoje dni wolne.",
        "Thermomix pomaga tym, że nie wymaga obecności, a większa porcja nie oznacza większego pilnowania. Danie gotuje się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Kutna i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Sklęczki",
    "Grunwald",
    "Łąkoszyn",
    "Piaski",
    "Kotliska",
    "Dybów",
    "Raszew",
    "Gnojno",
    "Bielawki",
  ],

  nearbyHeading: "Poza Kutno też przyjadę",
  nearbyParagraphs: [
    "Krośniewice, Żychlin, Łęczyca, Ozorków i Łowicz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krośniewice", "Żychlin", "Łęczyca", "Ozorków", "Łowicz"],

  about: blokOMnie("do Kutna", "w Kutnie i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kutna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kutnie"),
    {
      question: "Pracuję w dwunastkach — kiedy możesz przyjechać?",
      answer:
        "Podaj po prostu swoje dni wolne, choćby były w środku tygodnia. Umawiam się także rano i w środku dnia roboczego, i wolę dopasować się do Waszego grafiku, niż prosić, żebyście brali wolne.",
    },
    {
      question: "Gotuję raz na kilka dni, na zapas. Czy to urządzenie się do tego nadaje?",
      answer:
        "Do tego nadaje się najlepiej. Większa porcja nie wymaga większego pilnowania, a odgrzewanie na parze nie wysusza, więc to, co ugotowane w niedzielę, we wtorek nadal się nadaje. Ugotujemy na spotkaniu w Waszej wielkości porcji, żebyś zobaczyła to na własnych oczach.",
    },
  ],

  geo: { lat: 52.2306, lng: 19.3644 },
};
