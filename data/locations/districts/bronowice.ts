import type { DistrictContent } from "./typy";

/**
 * BRONOWICE (VI) — dzielnica o najstarszej strukturze wieku w Krakowie.
 *
 * Fakty potwierdzone i użyte:
 * — średnia wieku ok. 43,3 lat — najwyższa wśród dzielnic Krakowa,
 * — ok. 28% mieszkańców to osoby w wieku poemerytalnym,
 * — obszary: Bronowice Małe, Bronowice Nowe, Mydlniki, Bronowice
 *   (dawna wieś), os. Widok,
 * — Galeria Bronowice (otwarta 2013) i sąsiadujące wielkopowierzchniowe
 *   sklepy jako punkt orientacyjny,
 * — Rydlówka i tradycja „Wesela” Wyspiańskiego — Bronowice Małe,
 * — brak strefy płatnego parkowania,
 * — dojazd: ul. Armii Krajowej, węzeł Ofiar Katynia, linia kolejowa
 *   z przystankiem Kraków Mydlniki.
 *
 * NIE przypisuję tu metraży ani typów kuchni „z rocznika” tam, gdzie
 * zabudowa jest mieszana — piszę o tym jakościowo.
 */
export const KRAKOW_BRONOWICE: DistrictContent = {
  slug: "krakow-bronowice",
  urlPath: "/thermomix/krakow/bronowice",
  nazwa: "Bronowice",
  miejscownik: "Bronowicach",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Bronowice — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Bronowice — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix w Bronowicach: bezpłatna prezentacja TM7 u Ciebie w kuchni — Bronowice Małe, Bronowice Nowe, Mydlniki, os. Widok. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam do Bronowic Małych i Nowych, na osiedle Widok i do Mydlnik. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i spokojna — bez pośpiechu.",

  osiedla: [
    "Bronowice Małe",
    "Bronowice Nowe",
    "os. Widok",
    "Mydlniki",
    "Bronowice",
    "os. Bronowice Nowe",
  ],

  sections: [
    {
      id: "tempo",
      heading: "Najstarsza dzielnica Krakowa — i to zmienia sposób spotkania",
      paragraphs: [
        "Bronowice mają najwyższą średnią wieku spośród krakowskich dzielnic, a blisko co czwarta osoba jest tu w wieku poemerytalnym. To nie jest ciekawostka statystyczna, tylko coś, co realnie zmienia przebieg prezentacji.",
        "U starszych klientów spotkanie idzie wolniej i o inne rzeczy. Rzadziej pada pytanie o aplikację i przepisy z chmury, częściej o to, czy da się obsłużyć urządzenie bez telefonu, czy trzeba dużo czytać z ekranu i co się stanie, jeśli coś się zepsuje po gwarancji. Odpowiadam na wszystkie i nie spieszę się — wolę wyjść po dwóch godzinach z wyjaśnionymi wątpliwościami niż po czterdziestu minutach z podpisem.",
        "Pokazuję też ustawianie po kolei, wolno, i zostawiam kartkę z tym, co ustaliliśmy. Jeśli umawiasz spotkanie dla rodzica albo dziadków, powiedz o tym przy umawianiu — przyjadę z takim nastawieniem.",
      ],
    },
    {
      id: "kuchnia",
      heading: "Od domu w Bronowicach Małych po blok na Widoku",
      paragraphs: [
        "Zabudowa jest tu mieszana i nie da się jej sprowadzić do jednego typu. Bronowice Małe i Mydlniki to w dużej mierze domy jednorodzinne z dawnej wsi, z kuchniami większymi niż niejeden salon w bloku. Osiedle Widok i Bronowice Nowe to zabudowa blokowa, gdzie kuchnia jest zwykle osobna i węższa. Do tego dochodzą nowsze inwestycje przy Armii Krajowej.",
        "W domu jednorodzinnym rozmowa idzie zwykle o gotowaniu dla większej liczby osób, o przetworach i o świętach. W bloku — o miejscu na blacie i o liczbie naczyń do umycia. Oba spotkania są sensowne, tylko inne, więc przy umawianiu pytam o konkretny adres.",
        "W starszej zabudowie warto wiedzieć jedno: urządzenie pobiera około tysiąca pięciuset watów, więc nie włączam go równocześnie z czajnikiem i piekarnikiem na tym samym obwodzie. Jeśli u Ciebie z prądem bywa różnie, wystarczy, że powiesz o tym wcześniej.",
      ],
    },
    {
      id: "dojazd",
      heading: "Galeria pod bokiem, parkowanie bezpłatne",
      paragraphs: [
        "Strefy płatnego parkowania w Bronowicach nie ma i podjechanie pod adres zwykle nie jest problemem — poza bezpośrednim sąsiedztwem galerii i sklepów wielkopowierzchniowych w weekendy.",
        "Bliskość Galerii Bronowice ma jeszcze jedną konsekwencję, o której warto powiedzieć wprost: łatwo tu skończyć z zakupami gotowych dań i jedzeniem na mieście zamiast obiadu w domu. Nie namawiam, żeby przestać tam jeździć. Mówię tylko, że po zakupie zwykle robi się to rzadziej, bo obiad przestaje być wysiłkiem.",
        "Do centrum jest stąd blisko — Armią Krajową albo tramwajem — a węzeł Ofiar Katynia daje szybki wyjazd na obwodnicę. Przy terminach popołudniowych i tak wyjeżdżam z zapasem.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy prezentacja jest odpowiednia dla osoby starszej?",
      answer:
        "Tak i takich spotkań mam w Bronowicach sporo. Idziemy wolniej, pokazuję obsługę krok po kroku, bez zakładania, że wszystko ogarnia się przez telefon. Zostawiam też kartkę z tym, co ustaliliśmy.",
    },
    {
      question: "Czy dojeżdżasz do Mydlnik?",
      answer:
        "Tak, do Mydlnik, Bronowic Małych i Nowych oraz na osiedle Widok. Dojazd jest bezpłatny w całej dzielnicy.",
    },
    {
      question: "Czy trzeba coś przygotować przed spotkaniem?",
      answer:
        "Wolne gniazdko i kawałek blatu albo stołu. Składniki przywożę, ale jeśli chcesz ugotować coś konkretnego z własnych produktów, powiedz przy umawianiu.",
    },
  ],

  geo: { lat: 50.0808, lng: 19.8781 },
};
