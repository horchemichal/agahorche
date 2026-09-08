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
 * WIELUŃ — miasto zbombardowane pierwszego września 1939 r., a dziś
 * przede wszystkim miasto mleczarni: spółdzielnia z pięcioma setkami
 * dostawców mleka i serkiem, który zbiera nagrody.
 *
 * KĄT: mleko i nabiał. Co urządzenie robi z mlekiem i nabiałem,
 * a czego kategorycznie NIE robi — i twarda odmowa doradzania
 * w sprawie mleka surowego i bezpieczeństwa nabiału.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — co robi: jogurt i twarożek z gotowego, kupionego produktu; kremy,
 *   sosy i budynie na mleku, mieszane bez przywierania; masło z gotowej
 *   śmietanki; mleko roślinne z orzechów i płatków,
 * — czego NIE robi: nie pasteryzuje, nie dojrzewa serów, nie zastępuje
 *   lodówki ani żadnej kontroli bezpieczeństwa,
 * — ODMOWA: nie doradzam nic o mleku prosto od krowy, o tym, czy je
 *   przegotować, jak długo trzymać i co jeszcze nadaje się do zjedzenia,
 * — i granica: żadnych porównań wartości odżywczej.
 *
 * TWARDE GRANICE — TU BARDZO ISTOTNE:
 * — ŻADNYCH PORAD O MLEKU SUROWYM, PASTERYZACJI, PRZECHOWYWANIU
 *   I BEZPIECZEŃSTWIE ŻYWNOŚCI (zasada ze Skierniewic). W gminie
 *   rolniczej z pięcioma setkami dostawców mleka to nie jest teoria —
 *   zła rada realnie szkodzi.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani porównań „domowe kontra sklepowe".
 *
 * ROZGRANICZENIE. Płońsk mówi o mrożonkach, Sulechów o przerobie owoców,
 * Goleniów o grzybach, Skierniewice o zasadzie odmowy. Tutaj chodzi
 * wyłącznie o NABIAŁ.
 *
 * OSTROŻNIE Z 1 WRZEŚNIA. Bombardowanie Wielunia jest faktem, ale trzy
 * rzeczy są sporne między historykami: godzina (4:40 czy 5:40), tytuł
 * „pierwsze zbombardowane miasto" (wobec Westerplatte i mostu w Tczewie)
 * oraz liczba ofiar (IPN potwierdził 127 „ponad wszelką wątpliwość",
 * szacunki sięgają dwóch tysięcy). W tekście wspominam o tym krótko,
 * z zaznaczeniem sporu, i NIE robię z tego wątku kuchennego.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy ponad dwadzieścia tysięcy mieszkańców, gmina ponad
 *   dwadzieścia dziewięć tysięcy (GUS, 31.12.2024),
 * — gmina ma 20 sołectw; osiedla w mieście są numerowane, bez nazw,
 * — Spółdzielnia Dostawców Mleka skupia ok. 500 dostawców, przerabia
 *   do 600 tys. litrów na dobę; serek „Mój Ulubiony" to ponad 40%
 *   produkcji zakładu, w dwunastu wariantach,
 * — mleczarstwo w Wieluniu sięga Towarzystwa Mleczarskiego z lat
 *   1911–1912; obecna spółdzielnia powstała w 1990 r.,
 * — użytki rolne to blisko 70% powierzchni gminy,
 * — pierwsza wzmianka 1282, prawa miejskie 1283,
 * — kolegiatę wysadzili Niemcy w 1940 r. — bomba z 1 września
 *   uszkodziła tylko część nawy,
 * — trzy produkty z powiatu są na ministerialnej Liście Produktów
 *   Tradycyjnych, ale WSZYSTKIE pochodzą z gminy Osjaków, nie z Wielunia.
 */
export const WIELUN: CityContent = {
  slug: "wielun",
  h1: "Thermomix Wieluń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wieluń — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wieluniu: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i sołectwa. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wieluń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wieluniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wielunia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich dwudziestu sołectw gminy.",

  highlights: highlightyStandardowe("Wieluń i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "O mleku prosto od krowy nie doradzam. Mówię to od razu, nie na końcu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wieluniu – jak wygląda prezentacja?",
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
      id: "nabial",
      heading: "Miasto mleczarni — i co urządzenie robi z nabiałem",
      paragraphs: [
        "W Wieluniu działa spółdzielnia mleczarska skupiająca około pięciuset dostawców mleka, o mocy przerobowej do sześciuset tysięcy litrów na dobę. Mleczarstwo jest tu starsze niż wolna Polska — Towarzystwo Mleczarskie założono jeszcze przed pierwszą wojną. Serek z tutejszej spółdzielni to ponad czterdzieści procent jej produkcji i występuje w dwunastu smakach. Skoro to jest miejsce, w którym nabiał jest zawodem, a nie tematem, zacznę od granicy, nie od zalet.",
        "Nie doradzam nic o mleku prosto od krowy. Ani czy je przegotować, ani jak długo można je trzymać, ani co się z nim dzieje w cieple. To jest dziedzina, w której zła podpowiedź szkodzi realnie i konkretnie, a ja jestem przedstawicielką handlową, nie technologiem żywności. Od tego są służby weterynaryjne, sanepid i ludzie, którzy się na tym uczyli.",
        "Idzie za tym druga rzecz, o której trzeba powiedzieć wprost: urządzenie nie pasteryzuje. Nie ma tu funkcji, którą mogłabym w tej sprawie obiecać, i nie należy go traktować jako czegokolwiek, co zabezpiecza mleko. Gdyby ktoś Wam to sugerował, warto zapytać, na jakiej podstawie.",
        "Teraz część, o której mogę mówić — czyli co urządzenie robi z nabiałem, który już jest bezpieczny i kupiony. Jogurt i twarożek: z gotowego, sprawdzonego produktu, w jednym naczyniu, z równomiernym mieszaniem. Kremy, budynie, sosy na mleku i beszamele: to jest chyba najuczciwszy przykład, bo cała trudność takiego sosu polega na tym, że trzeba stać i mieszać, żeby nie przywarł — a tu nie trzeba. Masło z gotowej śmietanki kręci się w kilka minut. Do tego napoje roślinne z orzechów, migdałów czy płatków, jeśli ktoś w domu nie pije krowiego.",
        "Czego nie zrobi, poza pasteryzacją. Nie dojrzeje sera — dojrzewanie to czas, temperatura i warunki, których żadne urządzenie kuchenne nie zastąpi. Nie zastąpi lodówki. I nie zrobi z Was serowara, bo to jest rzemiosło, którego uczą się latami ludzie pracujący w takim zakładzie jak tutejszy.",
        "Na koniec zdanie, którego nie powiem, choć w tej okolicy pewnie dobrze by się sprzedało. Nie napiszę, że domowy jogurt jest zdrowszy od kupionego. Widuję to twierdzenie w obie strony i w obie brzmi przekonująco, a ja nie mam kompetencji, żeby je rozstrzygnąć. Mówię wyłącznie o tym, ile pracy zabiera zrobienie czegoś samemu.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wieluniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie, na spotkaniu zrobimy sos na mleku albo krem — to najlepiej pokazuje różnicę, bo w tych daniach cała robota polega na staniu i mieszaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wieluniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wieluńskiej rodziny",
      paragraphs: [
        "Blisko siedemdziesiąt procent powierzchni gminy to użytki rolne, więc w wielu domach dzień układa się wokół gospodarstwa, a nie wokół zegara. Obiad powstaje wtedy, kiedy da się do niego wrócić.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy jesteś przy zwierzętach albo w polu, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których części Wielunia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sołectw, bez dopłaty za dojazd.",
    "Osiedla w mieście są numerowane i nie mają nazw własnych, więc przy umawianiu najprościej podać ulicę albo nazwę wsi.",
  ],
  districts: [],

  nearbyHeading: "Poza Wieluń też przyjadę",
  nearbyParagraphs: [
    "Osjaków, Mokrsko, Pątnów i Czarnożyły są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Osjaków", "Mokrsko", "Pątnów", "Czarnożyły", "Wierzchlas", "Skomlin"],

  about: blokOMnie("do Wielunia", "w Wieluniu i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wielunia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wieluniu"),
    {
      question: "Zrobię w tym jogurt albo twarożek z własnego mleka?",
      answer:
        "O mleku prosto od krowy nie doradzam — ani czy je przegotować, ani jak długo trzymać. To dziedzina, w której zła rada realnie szkodzi, a ja nie jestem technologiem żywności. Urządzenie nie pasteryzuje i nie należy go tak traktować. Z gotowego, bezpiecznego produktu jogurt i twarożek zrobicie bez problemu.",
    },
    {
      question: "Czy z Wielunia jest coś na ministerialnej Liście Produktów Tradycyjnych?",
      answer:
        "W powiecie tak — ogórek kwaszony spod Wielunia, szynka wieluńska z lagi i chrzan nadwarciański. Ale wszystkie trzy pochodzą z gminy Osjaków, nie z Wielunia, mimo że nazwy mogą sugerować co innego. Z samej gminy Wieluń nie znalazłam żadnego wpisu i wolę to powiedzieć, niż naciągnąć.",
    },
  ],

  geo: { lat: 51.2206, lng: 18.5697 },
};
