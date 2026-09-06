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
 * PIOTRKÓW TRYBUNALSKI — miasto, w którym przez ponad dwa wieki obradował
 * Trybunał Koronny, najwyższy sąd Rzeczypospolitej, a wcześniej zbierały
 * się sejmy. Drugi człon nazwy pochodzi właśnie stąd.
 *
 * KĄT: rozstrzyganie sporu. To jest jedyne miasto, w którym mogę napisać
 * sekcję, jakiej nie ma nigdzie indziej w serwisie — KONKRETNĄ METODĘ
 * DLA DWOJGA LUDZI, KTÓRZY NIE ZGADZAJĄ SIĘ CO DO TEGO ZAKUPU.
 * Bo tak wygląda to naprawdę: jedno chce, drugie uważa, że to fanaberia
 * za absurdalne pieniądze, i cała rozmowa kończy się cichym „to może
 * kiedyś". Sprzedawcy udają, że tego problemu nie ma, albo próbują
 * przekonać tę drugą osobę. Ja wolę dać metodę i wyjść z pokoju.
 *
 * WARUNEK: metoda musi być uczciwa, czyli musi realnie dopuszczać wynik
 * „nie kupujemy" — inaczej jest tylko techniką sprzedaży w przebraniu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Piotrkowie obradował Trybunał Koronny, najwyższy sąd dawnej
 *   Rzeczypospolitej, i stąd drugi człon nazwy miasta,
 * — wcześniej zbierały się tu sejmy,
 * — miasto leży przy głównych trasach w środku kraju.
 *
 * CZEGO NIE MA: dat, szczegółów ustrojowych, jakichkolwiek porad
 * dotyczących relacji — to nie jest poradnia, tylko sposób na policzenie
 * jednej konkretnej rzeczy.
 */
export const PIOTRKOW_TRYBUNALSKI: CityContent = {
  slug: "piotrkow-trybunalski",
  h1: "Thermomix Piotrków Trybunalski – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Piotrków Trybunalski — prezentacja i cena",
  seoDescription:
    "Thermomix w Piotrkowie Trybunalskim: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%, bez nacisku na decyzję. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piotrków Trybunalski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Piotrkowie. Prezentacja bezpłatna, decyzję podejmujecie sami.",

  lead:
    "Przyjeżdżam do Piotrkowa Trybunalskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych gmin.",

  highlights: highlightyStandardowe("Piotrków Trybunalski i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piotrkowie – jak wygląda prezentacja?",
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
      id: "jak-rozstrzygnac-spor",
      heading: "Miasto Trybunału — czyli jak rozstrzygnąć spór o ten zakup",
      paragraphs: [
        "W Piotrkowie przez ponad dwa stulecia obradował Trybunał Koronny, najwyższy sąd dawnej Rzeczypospolitej — stąd drugi człon nazwy miasta. Skoro więc piszę do miejsca, które zajmowało się rozstrzyganiem sporów, napiszę o sporze, który przy tym urządzeniu zdarza się najczęściej i o którym nikt nie pisze.",
        "Wygląda on zwykle tak. Jedna osoba chce. Druga uważa, że to fanaberia za absurdalne pieniądze i że garnek działa tak samo. Rozmowa kończy się cichym „to może kiedyś”, po którym nikt do tematu nie wraca, a temat i tak wisi w powietrzu przez pół roku.",
        "Nie zamierzam przekonywać tej drugiej osoby — to jej pieniądze i jej prawo do sceptycyzmu, a poza tym przekonywanie kogoś przy jego własnym stole jest po prostu nieprzyjemne. Dam za to sposób, który u moich klientek działa i który kończy sprawę w tę albo w tamtą stronę.",
        "Krok pierwszy: każde z Was zapisuje osobno, ile obiadów w tygodniu realnie gotujecie w domu. Nie ile wypadałoby, tylko ile naprawdę. Krok drugi: każde zapisuje trzy rzeczy, które przy gotowaniu męczą je najbardziej — konkretnie, na przykład „stanie i mieszanie”, „zmywanie po”, „codzienne wymyślanie, co zrobić”. Krok trzeci: porównujecie kartki. Zwykle okazuje się, że spieracie się o dwie różne rzeczy.",
        "Krok czwarty należy do mnie: przyjeżdżam, gotujemy i sprawdzamy, czy urządzenie rozwiązuje akurat to, co jest na Waszych kartkach. Jeśli nie rozwiązuje — powiem to głośno i pojadę dalej. Krok piąty jest najważniejszy: decyzję podejmujecie po moim wyjściu, bez mojej obecności w pokoju. Nie zostawiam formularza do podpisania na już i nie robię promocji, która „kończy się dzisiaj”.",
        "I jeszcze jedno, żeby było jasne: „nie” jest pełnoprawnym wynikiem tej procedury. Rozstrzygnięcie na moją niekorzyść jest rozstrzygnięciem, a nie porażką spotkania.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piotrkowie Trybunalskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli decyzję podejmujecie we dwoje, umówmy się na termin, w którym oboje jesteście w domu — inaczej jedna osoba i tak będzie potem wszystko powtarzać.",
        "Podaj dzielnicę albo miejscowość i kilka pasujących terminów. Umawiam się popołudniami, wieczorami i w weekendy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piotrkowie Trybunalskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla piotrkowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — i to zwykle ta sama, która o tym urządzeniu myśli.",
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

  districtsHeading: "Do których części Piotrkowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych gmin, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Wierzeje",
    "Szczekanica",
    "Bugaj",
    "Jeziorna",
    "Wronia",
    "Sadowa",
    "Belzatka",
    "Byki",
    "Meszcze",
  ],

  nearbyHeading: "Poza Piotrków też przyjadę",
  nearbyParagraphs: [
    "Sulejów, Wolbórz, Bełchatów, Tomaszów Mazowiecki i Kamieńsk są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sulejów", "Wolbórz", "Bełchatów", "Tomaszów Mazowiecki", "Kamieńsk", "Tuszyn"],

  about: blokOMnie("do Piotrkowa Trybunalskiego", "w Piotrkowie i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Piotrkowa Trybunalskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych gmin. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Piotrkowie Trybunalskim"),
    {
      question: "Mąż uważa, że to wyrzucanie pieniędzy. Przekonasz go?",
      answer:
        "Nie będę próbować i szczerze mówiąc, nie powinnam. Zamiast tego proponuję prostą rzecz: niech każde z Was zapisze osobno, ile obiadów w tygodniu naprawdę gotujecie i co przy tym męczy najbardziej. Potem ugotujemy i sprawdzimy, czy urządzenie rozwiązuje akurat to. Jeśli nie — powiem to głośno.",
    },
    {
      question: "Czy będziesz naciskać na decyzję tego samego dnia?",
      answer:
        "Nie. Nie zostawiam nic do podpisania „na już” i nie robię promocji, która kończy się dzisiaj wieczorem. Decyzję podejmujecie po moim wyjściu, a „nie” jest pełną i całkowicie normalną odpowiedzią.",
    },
  ],

  geo: { lat: 51.4053, lng: 19.7031 },
};
