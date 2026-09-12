import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * OLECKO — gmina miejsko-wiejska w powiecie oleckim.
 * MIASTO 15 617, GMINA 20 871 (GUS 31.12.2024).
 * ⚠ BIP gminy podaje 20 195 — ROZBIEŻNE. Używam GUS.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ: BIP deklaruje 34, a opublikowana
 * tam lista ma 35 pozycji.
 *
 * PRAWA MIEJSKIE 1560 r., książę ALBRECHT HOHENZOLLERN.
 * OBALONE: to MAZURY, nie Warmia — prawa nadał książę pruski,
 * a nie biskup warmiński. Rozróżnienie ma znaczenie i piszę
 * o nim wprost.
 *
 * Rzeka LEGA, JEZIORO OLECKIE WIELKIE, zabytkowe MOLO.
 * Kościoły: Podwyższenia Krzyża Świętego oraz NMP Królowej
 * Polski, na wzgórzu w północnej części PLACU WOLNOŚCI.
 * OBALONE: „największy rynek w Polsce/Europie" — źródło mówi
 * ostrożnie „jeden z największych", BEZ PODANIA POWIERZCHNI.
 * NIE POWTARZAM WERSJI SUPERLATYWNEJ.
 * OBALONE: „powiat olecko-gołdapski" — podział w 2002 r.
 * Gmina powstała 1 stycznia 1973 r.
 * CYKLICZNIE (aktualności na 2026 NIE POTWIERDZONO —
 * PISZĘ OSTROŻNIE, BEZ DAT I BEZ OBIETNIC): Przystanek
 * Olecko, Mazurskie Spotkania z Folklorem, Festiwal Mleka
 * i Miodu.
 *
 * KĄT: BLANSZOWANIE — krótkie zanurzenie we wrzątku i po co
 * się je robi. Kąt od miasta nad jeziorem z zabytkowym molem:
 * krótkie zanurzenie jako obraz i jako technika.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że blanszowanie to nie jest gotowanie „trochę" — to
 *   osobna technika o innym celu,
 * — po co się je robi: żeby zdjąć skórkę, zatrzymać kolor,
 *   zmiękczyć na tyle, żeby coś się dało zwinąć, i przygotować
 *   warzywa przed mrożeniem,
 * — że kluczowy jest DRUGI etap, o którym wszyscy zapominają:
 *   natychmiastowe schłodzenie, bez którego blanszowanie
 *   zamienia się w gotowanie,
 * — że tego drugiego etapu urządzenie NIE ZROBI — nie chłodzi,
 *   i tu odsyłam do osobnej strony,
 * — że najlepiej sprawdza się przy pomidorach, migdałach,
 *   fasolce, brokułach, liściach kapusty i botwince,
 * — że najczęstszy błąd to zostawienie warzyw w gorącej wodzie
 *   „jeszcze chwilę",
 * — i ODMOWA: nie doradzam nic o mrożeniu i przechowywaniu
 *   po blanszowaniu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD o mrożeniu, trwałości i przechowywaniu.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani odżywczych — także
 *   żadnego „zachowuje witaminy". To jest tu szczególnie
 *   kuszące i szczególnie zakazane.
 * — ŻADNYCH TWIERDZEŃ o miodzie i mleku z festiwalu.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ liczby sołectw ani powierzchni Placu Wolności.
 *
 * ⚠ ETYKA — OLECKO JEST SZCZEGÓLNIE OBCIĄŻONE:
 * — NIE UŻYWAM ŻADNEJ z niemieckich nazw miasta. Jedna z nich
 *   została nadana w 1928 r. na pamiątkę „wierności" Niemcom
 *   w plebiscycie i jest nazwą jawnie nacjonalistyczną.
 * — ZERO PLEBISCYTU 1920 r.
 * — ZERO roku 1945, ucieczki i wysiedleń ludności mazurskiej
 *   i niemieckiej.
 * — ZERO akcji „Wisła" 1947.
 * — ZERO granicy, przejść granicznych, wojska, NATO
 *   i „przesmyku suwalskiego".
 * — NIE ROBIĘ TŁA z demografii, nawet korzystnej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Urządzenie grzeje, nie
 * chłodzi" (Władysławowo) dotyczy braku funkcji chłodzenia —
 * i tu wprost odsyłam. „Ciepło, które zostaje" (Błaszki)
 * dotyczy dochodzenia po wyłączeniu. „Surowe kontra gotowane"
 * (Biała Rawska) dotyczy wyboru między jednym a drugim.
 * „Gotowanie z mrożonek" dotyczy produktu gotowego. Tutaj
 * chodzi o JEDNĄ TECHNIKĘ i o jej dwuetapowość.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw (34 czy 35 — źródła sprzeczne).
 * — NIE PODAJĘ powierzchni Placu Wolności ani jego miejsca
 *   w rankingu.
 * — NIE OBIECUJĘ, że festiwale odbędą się w 2026 r.
 * — NIE PRZYPISUJĘ Olecku produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego, mimo że nazwa
 *   festiwalu to sugeruje.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 15 617, gmina 20 871 mieszkańców,
 * — prawa miejskie z 1560 r. od księcia Albrechta
 *   Hohenzollerna; Olecko leży na Mazurach, nie na Warmii,
 * — przez miasto płynie Lega, nad Jeziorem Oleckim Wielkim
 *   stoi zabytkowe molo,
 * — kościoły Podwyższenia Krzyża Świętego i NMP Królowej
 *   Polski przy Placu Wolności,
 * — Plac Wolności jest jednym z większych rynków w Polsce,
 * — gmina w obecnym kształcie istnieje od 1 stycznia 1973 r.,
 * — w 2002 r. dotychczasowy powiat podzielono na olecki
 *   i gołdapski,
 * — odbywają się tu Mazurskie Spotkania z Folklorem
 *   oraz Festiwal Mleka i Miodu.
 */
export const OLECKO: CityContent = {
  slug: "olecko",
  h1: "Thermomix Olecko – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Olecko (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Olecku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Olecko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Olecku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Olecka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Olecko i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Blanszowanie ma dwa etapy. Drugi jest ważniejszy i wszyscy o nim zapominają.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Olecku – jak wygląda prezentacja?",
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
      id: "blanszowanie",
      heading: "Zabytkowe molo nad Jeziorem Oleckim — czyli o krótkim zanurzeniu",
      paragraphs: [
        "Olecko leży nad Jeziorem Oleckim Wielkim, ma zabytkowe molo i jeden z większych rynków w Polsce — choć od razu prostuję, bo internet lubi tu przesadzać: „jeden z większych” to wszystko, co da się rzetelnie powiedzieć, bo powierzchni nikt nie podaje. Prawa miejskie miasto dostało w 1560 roku od księcia Albrechta Hohenzollerna, i to też warto uściślić: Olecko to Mazury, nie Warmia. Warmińskim miastom prawa nadawali biskupi, tutejszym — książę pruski. Przez miasto płynie Lega.",
        "Miasto z molem jest dobrym miejscem na stronę o krótkim zanurzeniu — bo dokładnie tym jest blanszowanie, technika, o której mówi się mało i którą prawie wszyscy robią w połowie.",
        "Zacznijmy od tego, czym blanszowanie nie jest. To nie jest gotowanie „przez chwilę”. To osobna technika o zupełnie innym celu: nie chodzi w niej o ugotowanie czegokolwiek, tylko o wywołanie jednej konkretnej zmiany i natychmiastowe zatrzymanie reszty.",
        "Po co się to robi. Żeby zdjąć skórkę z pomidorów, brzoskwiń albo migdałów — po kilkunastu sekundach schodzi sama, bez noża i bez strat. Żeby zatrzymać kolor fasolki szparagowej, brokułów czy szpinaku, które inaczej robią się szare. Żeby zmiękczyć liście kapusty na tyle, by dały się zwinąć bez pękania. I żeby przygotować warzywa przed włożeniem do zamrażarki.",
        "A teraz najważniejsze i to jest część, którą pomija dziewięć osób na dziesięć: blanszowanie ma dwa etapy. Pierwszy to wrzątek. Drugi to natychmiastowe schłodzenie — zimna woda, najlepiej z lodem. Bez drugiego etapu pierwszy nie ma sensu, bo warzywo zabrane z wrzątku dalej się gotuje własnym ciepłem i po chwili jest po prostu ugotowane. Cała technika polega na zatrzymaniu, nie na zanurzeniu.",
        "I tu muszę powiedzieć rzecz, której sprzedawca zwykle nie mówi: tego drugiego etapu to urządzenie nie zrobi. Ono grzeje i nie chłodzi — pisałam o tym osobno i to jest jedno z jego realnych ograniczeń. Wrzątek i pracę z warzywami weźmie na siebie, ale miska z zimną wodą musi stać obok i przygotować ją musicie sami, zanim zaczniecie.",
        "Najczęstszy błąd wynika wprost z tego, co napisałam: zostawienie warzyw „jeszcze na chwilę”, bo wyglądają na twarde. Wyglądają, bo mają wyglądać. Blanszowanie kończy się wcześniej, niż podpowiada odruch.",
        "I granica: nie doradzę Wam nic o tym, jak długo blanszowane warzywa mogą leżeć w zamrażarce ani jak je przechowywać. To jest bezpieczeństwo żywności, a nie technika kuchenna — a ja mówię tylko o tym drugim. Nie napiszę też ani słowa o tym, co blanszowanie „zachowuje”, bo to już byłyby twierdzenia o wartościach odżywczych, na które nie mam kompetencji.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Olecku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli przygotowujecie warzywa na zimę — powiedzcie przy umawianiu. Pokażę tę część roboty, której nikt nie lubi, zamiast dania, które ładnie wygląda na zdjęciu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Olecku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla oleckiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad piętnaście i pół tysiąca mieszkańców, a cała gmina blisko dwadzieścia jeden tysięcy — dane urzędowe i statystyczne różnią się tu o kilkaset osób, więc podaję te z GUS-u za koniec 2024 roku. Olecko dostało prawa miejskie w 1560 roku od księcia Albrechta Hohenzollerna. Leży nad Jeziorem Oleckim Wielkim, ma zabytkowe molo, a przez gminę płynie Lega. Nad Placem Wolności, jednym z większych rynków w Polsce, stoją dwa kościoły — Podwyższenia Krzyża Świętego oraz Najświętszej Marii Panny Królowej Polski na zadrzewionym wzgórzu. Gmina w obecnym kształcie działa od 1973 roku, a w 2002 dotychczasowy powiat podzielono na olecki i gołdapski. Odbywają się tu Mazurskie Spotkania z Folklorem i Festiwal Mleka i Miodu.",
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

  districtsHeading: "Do których części gminy Olecko dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Olecko też przyjadę",
  nearbyParagraphs: [
    "Gołdap, Ełk, Suwałki, Węgorzewo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gołdap", "Ełk", "Węgorzewo", "Orzysz"],

  about: blokOMnie("do Olecka", "w Olecku i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Olecka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Olecko leży na Mazurach, w powiecie oleckim — powiat olecko-gołdapski nie istnieje od 2002 roku, więc stare mapy bywają mylące.",
    },
    ...faqWspolne("w Olecku"),
    {
      question: "Co to jest blanszowanie i po co się je robi?",
      answer:
        "To krótkie zanurzenie we wrzątku, nie gotowanie. Robi się je, żeby zdjąć skórkę z pomidorów, brzoskwiń albo migdałów, zatrzymać kolor fasolki i brokułów, zmiękczyć liście kapusty na tyle, by dały się zwinąć, albo przygotować warzywa przed mrożeniem.",
    },
    {
      question: "Czy Thermomix zblanszuje warzywa?",
      answer:
        "Pierwszy etap tak, drugiego nie. Blanszowanie ma dwie części: wrzątek i natychmiastowe schłodzenie w zimnej wodzie. Urządzenie grzeje i nie chłodzi, więc miska z lodowatą wodą musi stać obok i trzeba ją przygotować przed startem. Bez tego warzywo dochodzi własnym ciepłem i po prostu się gotuje.",
    },
    {
      question: "Jak długo mogę trzymać zblanszowane warzywa w zamrażarce?",
      answer:
        "Tego Wam nie powiem. Przechowywanie i trwałość to bezpieczeństwo żywności, a ja mówię wyłącznie o technice kuchennej. Nie napiszę też, co blanszowanie „zachowuje” — twierdzenia o wartościach odżywczych zostawiam dietetykom.",
    },
  ],

  geo: { lat: 54.0337, lng: 22.5069 },
};
