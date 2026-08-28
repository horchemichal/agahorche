import type { DistrictContent } from "./typy";

/**
 * PRĄDNIK BIAŁY (IV) — najludniejsza dzielnica Krakowa (ok. 70 tys.)
 * i ta o największym kontraście między starym a nowym zasobem.
 *
 * Fakty potwierdzone i użyte:
 * — wielka płyta z lat 60. i 70.: Azory, os. XXX-lecia, Prądnik Biały,
 *   Krowodrza Górka,
 * — domy jednorodzinne: Witkowice, Witkowice Nowe, Tonie, Bronowice
 *   Wielkie — tereny pierwotnie rolnicze, włączone do Krakowa w 1941,
 * — Górka Narodowa: duże, wieloetapowe osiedla deweloperskie po 2000,
 * — plac targowy Imbramowski to największe targowisko w Krakowie
 *   (ok. 21 tys. m²),
 * — brak strefy płatnego parkowania w całej dzielnicy,
 * — 5 linii tramwajowych i 26 autobusowych.
 *
 * PUŁAPKA NAZEWNICZA opisana w treści, bo jest realnym źródłem nieporozumień:
 * osiedle Krowodrza Górka leży w Dzielnicy IV Prądnik Biały, a nie
 * w Dzielnicy V Krowodrza. Ludzie mówią „mieszkam na Krowodrzy Górce”
 * i mają na myśli tę dzielnicę.
 */
export const KRAKOW_PRADNIK_BIALY: DistrictContent = {
  slug: "krakow-pradnik-bialy",
  urlPath: "/thermomix/krakow/pradnik-bialy",
  nazwa: "Prądnik Biały",
  miejscownik: "Prądniku Białym",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Prądnik Biały — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Prądnik Biały — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Prądniku Białym: bezpłatna prezentacja TM7 u Ciebie w kuchni — Azory, Krowodrza Górka, Górka Narodowa, Witkowice. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na Azory, Krowodrzę Górkę, os. XXX-lecia, Górkę Narodową, do Witkowic i Toni. Przywożę Thermomix TM7 i gotujemy razem u Ciebie. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: [
    "Azory",
    "Krowodrza Górka",
    "os. XXX-lecia",
    "os. Gotyk",
    "Żabiniec",
    "Górka Narodowa",
    "Górka Narodowa Wschód",
    "Witkowice",
    "Witkowice Nowe",
    "Tonie",
    "Bronowice Wielkie",
    "Prądnik Biały",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Od Azorów po Górkę Narodową — trzy zupełnie różne kuchnie",
      paragraphs: [
        "To najludniejsza dzielnica Krakowa i ma w sobie trzy warstwy zabudowy, które nie mają ze sobą nic wspólnego. Azory, osiedle XXX-lecia i Krowodrza Górka to wielka płyta z lat sześćdziesiątych i siedemdziesiątych: kuchnia osobna, wąska, blat krótki, obwód zwykle na szesnaście amperów. Górka Narodowa to osiedla stawiane po dwutysięcznym roku: aneks otwarty na salon, często z półwyspem, nowa instalacja. Witkowice, Tonie i Bronowice Wielkie to dawne tereny rolnicze i domy jednorodzinne, gdzie kuchnia bywa większa niż niejeden salon w bloku.",
        "Dlatego przy umawianiu pytam o osiedle, nie o dzielnicę. Na Azorach zakładam, że gotujemy przy krótkim blacie i część rzeczy robimy przy stole. Na Górce Narodowej planuję spotkanie przy wyspie. W domu w Toniach rozmowa idzie zwykle o gotowaniu dla większej liczby osób i o przetworach, a nie o oszczędzaniu miejsca.",
      ],
      bullets: [
        "Azory, os. XXX-lecia, Krowodrza Górka — kuchnia osobna, ciasna, blat krótki",
        "Górka Narodowa i nowe inwestycje — aneks kuchenny, dużo miejsca",
        "Witkowice, Tonie, Bronowice Wielkie — domy, duże kuchnie",
      ],
    },
    {
      id: "nazwa",
      heading: "Krowodrza Górka to nie Krowodrza",
      paragraphs: [
        "Warto to powiedzieć, bo bywa źródłem nieporozumień przy umawianiu. Osiedle Krowodrza Górka leży w dzielnicy Prądnik Biały, a nie w sąsiedniej dzielnicy Krowodrza. Ludzie mówią „mieszkam na Krowodrzy Górce” i mają na myśli właśnie to miejsce.",
        "Dla mnie to bez znaczenia — dojeżdżam i tu, i tam. Piszę o tym tylko po to, żebyś nie musiała się zastanawiać, którą stronę otworzyć.",
      ],
    },
    {
      id: "targ",
      heading: "Największe targowisko w Krakowie masz pod ręką",
      paragraphs: [
        "Plac Imbramowski to około dwudziestu jeden tysięcy metrów kwadratowych — największe targowisko w mieście. Dla kuchni to ma konkretne konsekwencje: warzywa i owoce kupuje się tu częściej i w większych ilościach niż z listy w dyskoncie, a potem trzeba je czymś przerobić.",
        "I właśnie przy tym urządzenie pokazuje się z najlepszej strony — nie przy efektownych deserach, tylko przy zupach, przecierach i przetworach, czyli robocie, która polega na pilnowaniu garnka. Jeśli robisz zakupy na Imbramowskim, powiedz o tym przy umawianiu; chętnie ugotujemy coś z tego, co faktycznie przyniosłaś.",
        "Parkowanie w całej dzielnicy jest bezpłatne — strefy tu nie ma. Realnym wąskim gardłem są korki na ulicach wylotowych w godzinach szczytu, więc przy terminach popołudniowych wyjeżdżam z zapasem.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy dojeżdżasz na Azory i Krowodrzę Górkę?",
      answer:
        "Tak, na oba, a także na osiedle XXX-lecia, Żabiniec, Gotyk, Górkę Narodową oraz do Witkowic, Toni i Bronowic Wielkich. Dojazd jest bezpłatny.",
    },
    {
      question: "Mieszkam na Górce Narodowej w nowym bloku. Czy to dobre miejsce na prezentację?",
      answer:
        "Bardzo dobre. Aneks kuchenny daje ciągły blat i miejsce, żeby stanąć obok siebie, a instalacja jest nowa, więc nie ma tematu przeciążonego obwodu.",
    },
    {
      question: "Czy w tej dzielnicy trzeba płacić za parkowanie?",
      answer:
        "Nie, strefy płatnego parkowania tu nie ma. Dla Ciebie i tak nie ma to znaczenia — za dojazd nie płacisz nigdzie.",
    },
  ],

  geo: { lat: 50.0956, lng: 19.9256 },
};
