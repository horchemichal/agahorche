import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * ŚWIDNICA — miasto z Kościołem Pokoju wpisanym na listę UNESCO.
 * Świątynię postawiono w siedemnastym wieku pod warunkami, które miały ją
 * uniemożliwić: tylko z drewna, gliny i słomy, bez wieży, poza murami
 * i w ciągu jednego roku. Zbudowano ją mimo to i stoi do dziś.
 *
 * KĄT: gotowanie z narzuconymi ograniczeniami. Miasto, którego symbol
 * powstał z listy zakazów, jest jedynym właściwym miejscem na temat
 * pomijany na każdym pokazie: CO ROBIĆ, GDY Z JADŁOSPISU TRZEBA COŚ
 * WYKREŚLIĆ — bo ktoś w domu czegoś nie może albo nie chce jeść.
 *
 * ŻELAZNA GRANICA: ani słowa porady zdrowotnej, dietetycznej ani żadnej
 * sugestii medycznej. Nie wymieniam chorób, nie doradzam eliminacji,
 * nie oceniam czyichkolwiek wyborów żywieniowych. Piszę wyłącznie
 * o technice kuchennej: gotowaniu od zera, znajomości składu i o tym,
 * że urządzenie nie ma w tej sprawie żadnego zdania.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kościół Pokoju w Świdnicy jest na liście UNESCO i został zbudowany
 *   z drewna, gliny i słomy, w narzuconym z góry, bardzo krótkim czasie.
 *
 * CZEGO NIE MA: kontekstu wyznaniowego ponad jedno zdanie, dat, wymiarów.
 */
export const SWIDNICA: CityContent = {
  slug: "swidnica",
  h1: "Thermomix Świdnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Świdnica — prezentacja i cena",
  seoDescription:
    "Thermomix w Świdnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świdnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świdnicy. Powiedz, czego nie jecie — dobiorę dania pod Was.",

  lead:
    "Przyjeżdżam do Świdnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Świdnica i okolica"),

  heroPhoto: {
    src: "/zdjecia/thermomix-tm7-varoma.webp",
    alt: "Thermomix TM7 z nasadką Varoma — gotowanie na parze",
    caption: "Varoma pozwala ugotować osobną porcję równolegle z resztą obiadu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świdnicy – jak wygląda prezentacja?",
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
      id: "gdy-czegos-nie-wolno",
      heading: "Budowla z listy zakazów — i kuchnia, z której trzeba coś wykreślić",
      paragraphs: [
        "Kościół Pokoju w Świdnicy powstał pod warunkami, które miały uniemożliwić jego budowę: tylko drewno, glina i słoma, bez wieży, poza murami i wszystko w ciągu jednego roku. Zbudowano go mimo to, a dziś stoi na liście UNESCO. To jest budowla, którą określa lista rzeczy, których było nie wolno.",
        "Wracam z tym do kuchni, bo taką listę ma coraz więcej domów. Ktoś czegoś nie może, ktoś czegoś nie chce, ktoś odstawił jeden składnik i cała reszta rodziny musi się z tym ułożyć. Nie będę pisać, czego i dlaczego — to nie moja sprawa i nie moje kompetencje, a od doradzania w tych rzeczach są lekarze i dietetycy.",
        "Napiszę o czymś, o czym mogę mówić z pełnym prawem: o robocie, którą to oznacza w kuchni. A oznacza dwie rzeczy. Pierwsza: koniec z produktami gotowymi, bo w gotowym sosie czy przyprawie zawsze siedzi coś, czego akurat nie wolno. Druga: częste gotowanie dwóch wersji tego samego obiadu, żeby ktoś nie jadł osobno jak wyrzutek.",
        "Przy pierwszej rzeczy urządzenie pomaga wyraźnie, bo robienie od zera przestaje być projektem na wieczór. Sos pomidorowy z puszki pomidorów, bulion warzywny z warzyw, pasta do kanapek, mleko roślinne, mąka mielona z płatków — to są rzeczy, przy których zwykle się kapituluje z braku czasu, i to one wracają na stół.",
        "Przy drugiej pomaga Varoma. Nad gotującą się zawartością naczynia można równolegle ugotować na parze osobną porcję — bez drugiego garnka i bez drugiej tury. Nie jest to cud, tylko wygoda, ale akurat w takim domu ta wygoda dotyczy każdego dnia.",
        "I rzecz najważniejsza: urządzenie nie ma na ten temat żadnego zdania. Zrobi to, co mu każecie, w składzie, który sami ustalicie. Powiedzcie mi tylko przy umawianiu, czego u Was nie ma na stole — przywiozę składniki tak dobrane, żeby wszyscy jedli to samo.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świdnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz od razu, czego u Was się nie je. Wolę wiedzieć wcześniej, niż stanąć w kuchni z niewłaściwym koszykiem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świdnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla świdnickiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — i to ona pilnuje, żeby każdy dostał to, co może jeść.",
        "Thermomix pomaga tym, że gotowanie od zera przestaje zabierać wieczór, i tym, że nie wymaga obecności. Wszystko dzieje się w jednym naczyniu, z ustawioną temperaturą i mieszaniem.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla całego domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Świdnicy i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Zawiszów",
    "Zarzecze",
    "Kraszowice",
    "Osiedle Młodych",
    "Zachód",
    "Słowiańskie",
    "Kolonia",
    "Bojanice",
  ],

  nearbyHeading: "Poza Świdnicę też przyjadę",
  nearbyParagraphs: [
    "Wałbrzych, Świebodzice, Strzegom, Jaworzyna Śląska i Dzierżoniów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wałbrzych", "Świebodzice", "Strzegom", "Jaworzyna Śląska", "Dzierżoniów", "Żarów"],

  about: blokOMnie("do Świdnicy", "w Świdnicy i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Świdnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Świdnicy"),
    {
      question: "U nas ktoś nie może jeść pewnych produktów. Czy to coś zmienia?",
      answer:
        "Zmienia tyle, że powiedz mi o tym przy umawianiu, a przywiozę składniki tak dobrane, żeby wszyscy jedli to samo. Urządzenie nie ma w tej sprawie żadnego zdania — robi to, co mu każesz, w składzie, który sama ustalasz. O tym, co wolno, a czego nie, rozmawiaj z lekarzem albo dietetykiem, nie ze mną.",
    },
    {
      question: "Czy da się ugotować dwie wersje jednego obiadu naraz?",
      answer:
        "Tak, i to jest tu najbardziej użyteczna rzecz. Nad gotującą się zawartością naczynia stawia się Varomę i gotuje na parze osobną porcję — bez drugiego garnka i bez drugiej tury.",
    },
  ],

  geo: { lat: 50.8437, lng: 16.4894 },
};
