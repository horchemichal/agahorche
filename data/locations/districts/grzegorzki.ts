import type { DistrictContent } from "./typy";

/**
 * GRZEGÓRZKI (II) — dzielnica o bardzo zróżnicowanej zabudowie
 * i z jednym mocnym, codziennym punktem odniesienia: Halą Targową.
 *
 * Fakty potwierdzone i użyte:
 * — obszary: Dąbie, Grzegórzki, os. Oficerskie, Olsza (część), Wesoła (część),
 * — os. Oficerskie to zabudowa międzywojenna — wille i kamienice,
 * — popularne są małe mieszkania 30–50 m² na niższych piętrach
 *   (potwierdzone),
 * — Wesoła przekształcana przez miasto w „zieloną dzielnicę kreatywną”,
 * — dzielnica objęta strefą płatnego parkowania (podstrefy B11, B12,
 *   C15, C16); deficyt miejsc pogłębiają przebudowa Hali Targowej
 *   i rewitalizacja placu Grzegórzeckiego,
 * — węzły korkowe: rondo Grzegórzeckie i rondo Mogilskie,
 * — Hala Targowa i Park Strzelecki jako punkty orientacyjne.
 */
export const KRAKOW_GRZEGORZKI: DistrictContent = {
  slug: "krakow-grzegorzki",
  urlPath: "/thermomix/krakow/grzegorzki",
  nazwa: "Grzegórzki",
  miejscownik: "Grzegórzkach",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Grzegórzki — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Grzegórzki — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Grzegórzkach: bezpłatna prezentacja TM7 u Ciebie w kuchni — Dąbie, os. Oficerskie, Wesoła. Bez dopłat za dojazd. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na Grzegórzki, Dąbie, osiedle Oficerskie i Wesołą. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: ["Grzegórzki", "Dąbie", "os. Oficerskie", "Wesoła", "Olsza"],

  sections: [
    {
      id: "kuchnia",
      heading: "Trzydzieści kilka metrów albo willa z międzywojnia",
      paragraphs: [
        "Ta dzielnica ma zaskakująco szeroki rozstrzał. Z jednej strony popularne są tu niewielkie mieszkania, trzydzieści do pięćdziesięciu metrów, często na niższych piętrach — z aneksem albo małą, osobną kuchnią. Z drugiej stoi osiedle Oficerskie z zabudową międzywojenną: wille i kamienice z przestronnymi wnętrzami, dużą ilością zieleni i kuchniami, w których miejsca jest pod dostatkiem.",
        "Do tego dochodzą nowe inwestycje nad Wisłą i w rejonie Dąbia — tam standardem jest aneks kuchenny otwarty na salon.",
        "Praktyczna konsekwencja jest prosta: przy umawianiu pytam o konkretny adres i piętro, a nie o dzielnicę. W trzydziestometrowym mieszkaniu planuję spotkanie tak, żeby część rzeczy zrobić przy stole. Na Oficerskim po prostu gotujemy przy blacie.",
      ],
    },
    {
      id: "hala",
      heading: "Hala Targowa to nie tylko punkt orientacyjny",
      paragraphs: [
        "Dla mieszkańców Grzegórzek Hala Targowa i plac targowy obok są tym, czym dla innych dzielnic osiedlowy dyskont — miejscem, w którym kupuje się warzywa i owoce, i to zwykle w ilościach większych, niż wynikałoby z listy zakupów.",
        "To jest dokładnie ten rodzaj zakupów, przy którym urządzenie robi największą różnicę. Nie przy efektownych deserach, tylko przy zupach, przecierach i wszystkim, co trzeba przerobić, zanim się zepsuje. Jeśli robisz zakupy w Hali, powiedz o tym przy umawianiu — ugotujemy coś z tego, co faktycznie masz w domu, zamiast ze standardowego zestawu.",
      ],
    },
    {
      id: "dojazd",
      heading: "Ronda, remonty i strefa",
      paragraphs: [
        "Grzegórzki są objęte strefą płatnego parkowania, a miejsc ubywa: przebudowa Hali Targowej ograniczyła ruch na Grzegórzeckiej, a rewitalizacja placu Grzegórzeckiego zabrała część miejsc postojowych. Dla Ciebie to bez znaczenia — postój to mój koszt i nic nie doliczam.",
        "Zmienia to jednak planowanie. Rondo Grzegórzeckie i rondo Mogilskie to dwa najbardziej zakorkowane punkty w okolicy; do centrum bywa dziesięć minut, a bywa i trzydzieści. Przy terminach popołudniowych wyjeżdżam odpowiednio wcześniej.",
        "Jeśli masz miejsce postojowe pod adresem, to najbardziej użyteczna informacja, jaką możesz mi podać przy umawianiu.",
      ],
    },
  ],

  faq: [
    {
      question: "Mam mieszkanie około czterdziestu metrów. Czy warto?",
      answer:
        "Warto, choćby po to, żeby zobaczyć, ile miejsca urządzenie realnie zajmuje i co z blatu może w zamian zniknąć — bo zastępuje kilka sprzętów naraz. Prezentacja jest bezpłatna, więc nic nie ryzykujesz poza dwiema godzinami.",
    },
    {
      question: "Czy dojeżdżasz na osiedle Oficerskie?",
      answer:
        "Tak, jak do wszystkich części dzielnicy. To akurat jedne z najwygodniejszych kuchni do gotowania w tej okolicy.",
    },
    {
      question: "Czy muszę zapewnić miejsce do parkowania?",
      answer:
        "Nie musisz. Jeśli masz — powiedz, bo to skraca mój dojazd. Jeśli nie, po prostu wyjeżdżam wcześniej i zostawiam auto w strefie na własny koszt.",
    },
  ],

  geo: { lat: 50.0611, lng: 19.9583 },
};
