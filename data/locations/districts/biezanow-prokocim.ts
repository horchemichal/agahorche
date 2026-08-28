import type { DistrictContent } from "./typy";

/**
 * BIEŻANÓW-PROKOCIM (XII) — dzielnica o największym rozstrzale warunków
 * kuchennych w całym Krakowie i to jest jej temat przewodni.
 *
 * Fakty potwierdzone i użyte:
 * — Kozłówek: pierwszy budynek oddany w sierpniu 1967, główna faza
 *   1968–1973; metraże M-3 ≈ 34 m² i M-4 ≈ 44 m² (to akurat jedyne
 *   twarde metraże, jakie udało się potwierdzić dla krakowskich osiedli
 *   z tego okresu — dlatego padają w treści),
 * — część bloków Kozłówka pierwotnie nie miała balkonów, dobudowywano je
 *   dopiero od ok. 2015,
 * — Złocień to osiedle deweloperskie powstałe po 2000 — drugi biegun,
 * — tory linii Kraków–Dębica (1856) dzielą dzielnicę na „dwie strony torów”,
 * — Szpital Uniwersytecki w Prokocimiu jako punkt orientacyjny nr 1,
 * — dwa place targowe, cztery linie tramwajowe, trzy stacje kolejowe.
 */
export const KRAKOW_BIEZANOW_PROKOCIM: DistrictContent = {
  slug: "krakow-biezanow-prokocim",
  urlPath: "/thermomix/krakow/biezanow-prokocim",
  nazwa: "Bieżanów-Prokocim",
  miejscownik: "Bieżanowie i Prokocimiu",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Bieżanów-Prokocim — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Bieżanów-Prokocim — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix w Bieżanowie i Prokocimiu: bezpłatna prezentacja TM7 u Ciebie w kuchni — Kozłówek, Nowy Bieżanów, Rżąka, Złocień. Bez dopłat. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na Kozłówek, do Nowego Bieżanowa i Nowego Prokocimia, na Rżąkę i Złocień, a także do starych, jednorodzinnych części dzielnicy. Przywożę Thermomix TM7 i gotujemy u Ciebie. Prezentacja jest bezpłatna.",

  osiedla: [
    "Kozłówek",
    "Nowy Bieżanów",
    "Stary Bieżanów",
    "Nowy Prokocim",
    "Stary Prokocim",
    "Rżąka",
    "Złocień",
    "os. Kolejowe",
    "os. Medyków",
    "os. Nad Potokiem",
    "os. Parkowe",
    "Bieżanów Kolonia",
    "Kaim",
    "Łazy",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Trzydzieści cztery metry albo siedemdziesiąt — tu obie wersje są obok siebie",
      paragraphs: [
        "Ta dzielnica ma największą rozpiętość warunków kuchennych w Krakowie i warto to powiedzieć wprost. Na Kozłówku, gdzie pierwszy blok oddano w sierpniu 1967 roku, mieszkanie M-3 ma około trzydziestu czterech metrów, a M-4 około czterdziestu czterech. Przy takich metrażach kuchnia jest osobnym, wąskim pomieszczeniem, w którym blat roboczy kończy się szybciej, niż by się chciało.",
        "Kilka kilometrów dalej, na Złocieniu, stoją mieszkania z aneksem kuchennym otwartym na salon, z nową instalacją i miejscem na wyspę. To jest ten sam adres pocztowy „Kraków” i zupełnie inne spotkanie.",
        "Dlatego przy umawianiu pytam nie o dzielnicę, tylko o osiedle. Na Kozłówku czy w Nowym Prokocimiu zakładam, że gotujemy przy krótkim blacie i część rzeczy robimy na stole w pokoju — i to jest zupełnie w porządku, bo urządzenie potrzebuje tylko gniazdka. Na Złocieniu czy w domu na Rżące planuję spotkanie inaczej, bo miejsca jest pod dostatkiem.",
      ],
      bullets: [
        "Kozłówek, Nowy Prokocim, Nowy Bieżanów — kuchnia osobna i ciasna, blat krótki",
        "Złocień i nowe inwestycje — aneks kuchenny, dużo miejsca",
        "Stary Bieżanów, Stary Prokocim, Łazy, Rżąka — domy, duże kuchnie",
      ],
    },
    {
      id: "prad",
      heading: "Jeden bezpiecznik, trzy urządzenia",
      paragraphs: [
        "W blokach z przełomu lat sześćdziesiątych i siedemdziesiątych instalacja jest zwykle aluminiowa, a obwód kuchenny bywa zabezpieczony na szesnaście amperów. Thermomix pobiera około tysiąca pięciuset watów. Sam w sobie to żaden problem — problemem bywa dopiero czajnik i piekarnik włączone w tej samej chwili na tym samym obwodzie.",
        "Mówię o tym, bo to jedyna rzecz, która potrafi przerwać prezentację w starszym bloku, i bo łatwo jej uniknąć: po prostu nie uruchamiamy wszystkiego naraz. W nowym budownictwie na Złocieniu ten temat w ogóle nie istnieje.",
      ],
    },
    {
      id: "dojazd",
      heading: "Po której stronie torów mieszkasz?",
      paragraphs: [
        "Linia kolejowa dzieli tę dzielnicę na pół i mieszkańcy sami mówią o „dwóch stronach torów”. Dla umawiania spotkania to konkret: przejazd z jednej strony na drugą potrafi zająć więcej czasu, niż wynika z mapy, więc przy planowaniu trasy pytam o to od razu.",
        "Poza tym jest tu wygodnie. Strefy płatnego parkowania nie ma, cztery linie tramwajowe jeżdżą co kilka minut, a przy pętli Nowy Bieżanów działa parking. Na starych osiedlach miejsca postojowe bywają zajęte po południu — dlatego jeśli masz wybór, wcześniejsza godzina jest łatwiejsza dla nas obu.",
      ],
    },
  ],

  faq: [
    {
      question: "Mieszkam na Kozłówku w M-3. Czy Thermomix się tam w ogóle zmieści?",
      answer:
        "Zmieści. Urządzenie zajmuje mniej więcej tyle miejsca co większy czajnik z podstawką i zastępuje kilka sprzętów naraz — miksuje, gotuje, waży i wyrabia ciasto w jednym naczyniu. Na prezentacji zobaczysz je na swoim blacie, więc od razu ocenisz, ile realnie zabiera miejsca.",
    },
    {
      question: "Czy dojeżdżasz na Złocień?",
      answer:
        "Tak, na Złocień i na wszystkie pozostałe osiedla dzielnicy — Kozłówek, Nowy i Stary Bieżanów, Nowy i Stary Prokocim, Rżąkę, os. Medyków i Kolejowe. Dojazd jest bezpłatny.",
    },
    {
      question: "Czy trzeba mieć coś przygotowanego w kuchni?",
      answer:
        "Nie. Przywożę urządzenie, produkty i w razie potrzeby naczynia. Po Twojej stronie zostaje wolny kawałek blatu albo stołu i gniazdko.",
    },
  ],

  geo: { lat: 50.0169, lng: 20.0361 },
};
