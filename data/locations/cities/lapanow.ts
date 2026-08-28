import type { CityContent } from "../city-content";
import {
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
 * ŁAPANÓW — gmina, która żyje wzdłuż rzeki i wzdłuż jednej drogi.
 *
 * Oś tekstu: woda. Stradomka, zalew z kąpieliskiem, wały, dwie powodzie
 * w pamięci jednego pokolenia (2010 i czerwiec 2020). To sprawia, że
 * w wielu domach kuchnia jest młodsza od domu — a moment urządzania
 * kuchni od nowa jest jedynym momentem, w którym rozmowa o sprzęcie
 * ma sens sama z siebie.
 *
 * O powodzi piszę wstrzemięźliwie i bez ani jednego zdjęcia w tle.
 * To temat, który tu wciąż boli; wolę go wspomnieć uczciwie raz,
 * niż udawać, że go nie ma, albo robić z niego argument sprzedażowy.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 17 sołectw: Boczów, Brzezowa, Chrostowa, Cichawka, Grabie, Kamyk,
 *   Kępanów, Kobylec, Lubomierz, Łapanów, Sobolów, Tarnawa, Ubrzeż,
 *   Wieruszyce, Wola Wieruszycka, Wolica, Zbydniów (lapanow.pl,
 *   „Położenie” oraz „Statystyka mieszkańców”),
 * — gmina leży w dolinie Stradomki, na Pogórzu Karpackim; grzbiety
 *   wznoszą się ponad 150 m ponad dna dolin (lapanow.pl),
 * — z Bochni 19 km jedną drogą — DW966 od początku do końca
 *   (conadrogach.pl); ta sama droga prowadzi dalej na Gdów i Wieliczkę,
 * — wzrost liczby ludności o 17,8% w latach 2002–2024, dodatnie saldo
 *   migracji w 2024 r. (polskawliczbach.pl, dane GUS),
 * — dominująca funkcja rolnicza, duże rozdrobnienie gruntów, średnia
 *   wielkość gospodarstwa ok. 3,5 ha (lapanow.pl),
 * — powodzie: 2010 oraz 21–22 czerwca 2020, gdy woda weszła do centrum
 *   Łapanowa, zalała rynek, sklepy, plebanię i zabytkowy kościół;
 *   kulminacja fali 596 cm (Gazeta Krakowska),
 * — decyzja wojewody z 2024 r. o rozbudowie ok. 3 km wałów na Stradomce
 *   w Kobylcu, Łapanowie, Wolicy i Boczowie (Gazeta Krakowska),
 * — zalew powstał pod koniec lat 70. XX w.; działa jako Kompleks
 *   Sportowo-Rekreacyjny „ZALEW” ze strzeżonym kąpieliskiem, plażą,
 *   sprzętem wodnym i zapleczem sportowym (lapanow.pl; Serwis
 *   Kąpieliskowy GIS),
 * — kościół par. św. Bartłomieja w Łapanowie: drewniany, gotycki,
 *   wg gminy wzniesiony w 1529 r.; w rejestrze zabytków wraz z dzwonnicą
 *   (WUOZ Kraków; zabytek.pl / NID),
 * — kościół w Sobolowie: drewniany, konstrukcja zrębowa, konsekrowany
 *   w 1594 r. (lapanow.pl; WUOZ),
 * — cztery zespoły dworsko-parkowe w rejestrze: Wieruszyce (dwór obronny
 *   z terenem wzgórza zamkowego), Grabie, Zbydniów, Dąbrowica-Chrostowa.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — powodzi z 2014 roku. Takiej w Łapanowie NIE BYŁO — potwierdzone są
 *   2010 i czerwiec 2020. Data 2014 krąży po internecie błędnie,
 * — opisu zalewu jako zbiornika przeciwpowodziowego. To obiekt
 *   REKREACYJNY, a eksperci Wód Polskich wskazywali go po 2020 r. jako
 *   czynnik zwiększający ryzyko. Nie moja rola, żeby to rozstrzygać —
 *   moja rola, żeby tego nie przekręcić,
 * — zwiedzania dworów w Wieruszycach, Grabiu, Zbydniowie i Dąbrowicy.
 *   Wpis do rejestru zabytków nie znaczy, że obiekt jest udostępniony;
 *   dostępności żadnego z nich NIE POTWIERDZONO,
 * — produktu z ministerialnej Listy Produktów Tradycyjnych. Dla gminy
 *   Łapanów NIE POTWIERDZONO żadnego wpisu. UWAGA: „śliwowica wyborna
 *   z Łapczycy” pochodzi z gminy BOCHNIA. Łapczyca ≠ Łapanów,
 * — dokładnej liczby mieszkańców: gmina podaje 8 298 (koniec 2023),
 *   GUS 8 614 (2024). Różnica ponad 300 osób.
 *
 * PUŁAPKA: poprawna pisownia sołectwa to „Ubrzeż”, choć na jednej
 * podstronie gminy pojawia się wariant „Ubrzeź”.
 */
export const LAPANOW: CityContent = {
  slug: "lapanow",
  h1: "Thermomix Łapanów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Łapanów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Łapanów: bezpłatna prezentacja TM7 u Ciebie w kuchni — Kobylec, Sobolów, Tarnawa, Grabie i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Łapanów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Łapanów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead:
    "Do gminy Łapanów przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedemnastu sołectw.",

  highlights: highlightyStandardowe("cała gmina Łapanów, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łapanowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Kobylcu, jak w Tarnawie na drugim końcu gminy.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Gmina nad Stradomką — i kuchnie młodsze od domów",
      paragraphs: [
        "Łapanów rozłożył się w dolinie Stradomki, wzdłuż jednej drogi, która prowadzi z Bochni przez Gdów aż do Wieliczki. Dziewiętnaście kilometrów, cały czas prosto, bez zjeżdżania. To jedna z najprostszych tras w całej mojej okolicy i mówię o tym na początku, bo wiele osób zakłada, że skoro to gmina wiejska w dolinie, to musi być trudno dojechać. Nie jest.",
        "Gmina rośnie — od 2002 roku przybyło tu prawie jedna piąta mieszkańców, a saldo migracji jest dodatnie. Buduje się, wraca, zostaje. Przy siedemnastu sołectwach i średnim gospodarstwie wielkości kilku hektarów daje to obraz gminy rolniczej, w której coraz więcej domów nie jest już gospodarstwami.",
        "Jest też druga rzecz, o której trudno tu nie powiedzieć, choć powiem ją raz i bez rozwijania. W czerwcu 2020 roku woda weszła do centrum Łapanowa i zalała rynek, sklepy i zabytkowy kościół — dziesięć lat po poprzedniej powodzi. W wielu domach kuchnia jest dziś po prostu młodsza od domu, bo trzeba było ją zrobić od nowa.",
        "Dla mnie ma to jedno praktyczne znaczenie i tylko takie: w nowo urządzonej kuchni łatwiej jest znaleźć urządzeniu stałe miejsce niż wciskać je między sprzęty, które stoją tam od piętnastu lat. Jeśli akurat układacie kuchnię, to jest dobry moment, żeby zobaczyć, ile realnie zajmuje miejsca na blacie — i tyle. Nie namawiam nikogo na zakup dlatego, że kupował już meble.",
        "Poza tym Łapanów żyje latem wokół zalewu. Kąpielisko, plaża, boiska, ludzie z całej okolicy przez cały lipiec i sierpień. Wtedy najtrudniej złapać wolne popołudnie i wtedy najczęściej umawiam się na wieczory albo na przedpołudnia w tygodniu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Łapanów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w którym sołectwie mieszkasz i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę, drugie — dobrać dania i wziąć odpowiednio więcej składników. Sołectw jest tu siedemnaście i sam „Łapanów” to za mało, żebym wiedziała, czy jadę do centrum, czy pod Lubomierz.",
        "W lipcu i sierpniu warto umawiać się z kilkudniowym wyprzedzeniem — to najbardziej zajęte miesiące w tej gminie po obu stronach.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Łapanów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny w gminie, która się rozbudowuje",
      paragraphs: [
        "W gminie, w której od dwudziestu lat przybywa mieszkańców, sporo domów jest w trakcie — dobudowywanych, wykańczanych, urządzanych etapami. Kuchnia bywa wtedy ostatnia w kolejce, a gotuje się w niej codziennie i dla kilku osób.",
        "W takim domu najbardziej liczy się to, że obiad może powstawać sam, kiedy Ty robisz coś zupełnie innego — malujesz, układasz, jedziesz po materiały. Urządzenie pilnuje czasu i temperatury, a potem po prostu się wyłącza. Nikt nie musi nad nim stać.",
        "Przy najmłodszych dzieciach ratuje to, że jedno naczynie wystarcza do ugotowania i zmiksowania porcji — nie trzeba przelewać gorących rzeczy między garnkami w kuchni, w której i tak jest ciasno. Starsze dzieci szybko zaczynają korzystać z tego same, bo przepis prowadzi je krok po kroku.",
        "W domach wielopokoleniowych, a takich jest tu sporo, dochodzi jeszcze jedna rzecz: gotowanie na parze piętro wyżej. Obiad dla dorosłych na dole, delikatniejsza porcja dla dziecka albo dla babci w Varomie, wszystko naraz i w jednym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Łapanów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedemnastu sołectw i bez żadnej dopłaty za odległość — od Kobylca i Wolicy przy samej rzece, przez Sobolów, Tarnawę i Grabie, po Lubomierz, Kamyk i Ubrzeż na obrzeżach gminy.",
    "Sam Łapanów to mniej niż jedna szósta mieszkańców gminy. Reszta mieszka w sołectwach rozrzuconych po dolinie i po grzbietach, które wznoszą się kilkadziesiąt metrów nad dnem doliny. Podjazdy bywają strome i wąskie, zwłaszcza zimą — dlatego proszę o nazwę sołectwa i, jeśli to możliwe, o krótki opis dojazdu.",
    "Sobolów, Tarnawa i sam Łapanów mają zabytkowe kościoły, dwa z nich drewniane. To najlepsze punkty orientacyjne w gminie i tak zwykle się tu umawiamy — „przy kościele w Sobolowie” działa lepiej niż numer domu.",
    "W kilku sołectwach stoją dawne dwory i zespoły dworsko-parkowe: w Wieruszycach, Grabiu, Zbydniowie i Chrostowej. Są wpisane do rejestru zabytków, ale nie są obiektami turystycznymi i nie zakładam, że da się je zwiedzić — wspominam o nich wyłącznie dlatego, że łatwo po nich trafić.",
  ],
  districts: [
    "Łapanów",
    "Kobylec",
    "Sobolów",
    "Tarnawa",
    "Grabie",
    "Zbydniów",
    "Cichawka",
    "Brzezowa",
    "Kamyk",
    "Boczów",
    "Wolica",
    "Chrostowa",
    "Ubrzeż",
    "Lubomierz",
    "Kępanów",
    "Wola Wieruszycka",
    "Wieruszyce",
  ],

  nearbyHeading: "Cała droga z Bochni na Gdów jest na mojej trasie",
  nearbyParagraphs: [
    "Łapanów leży w połowie drogi między Bochnią a Gdowem i to jest dokładnie ta trasa, którą i tak jeżdżę. Do Bochni, Gdowa, Wieliczki i Nowego Wiśnicza dojeżdżam na co dzień, a granica gminy nie zmienia niczego w warunkach.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Bochnia",
    "Gdów",
    "Trzciana",
    "Żegocina",
    "Nowy Wiśnicz",
    "Wieliczka",
    "Dobczyce",
    "Kraków",
  ],

  about: blokOMnie("do Łapanowa", "w gminach wokół Bochni"),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich sołectw gminy Łapanów?",
      answer:
        "Tak — do wszystkich siedemnastu, od Kobylca i Wolicy po Lubomierz, Kamyk i Ubrzeż. Dojazd jest bezpłatny i nie zależy od tego, jak wysoko i jak daleko od drogi wojewódzkiej mieszkasz.",
    },
    ...faqWspolne("w gminie Łapanów"),
    {
      question: "Urządzamy kuchnię od nowa. Czy to dobry moment na prezentację?",
      answer:
        "Zwykle tak, bo wtedy najłatwiej ocenić, ile miejsca urządzenie realnie zajmuje i gdzie stanie na stałe. Na prezentacji zobaczysz to na własnym blacie, zanim cokolwiek zamontujecie. Nie oznacza to jednak, że musisz decydować teraz — kuchnię można urządzić i wrócić do tematu później.",
    },
    {
      question: "Ile trwa dojazd z Bochni do Łapanowa?",
      answer:
        "To dziewiętnaście kilometrów jedną drogą wojewódzką, w praktyce niecałe pół godziny. Dla mnie to bliska trasa, którą i tak jeżdżę — dlatego dojazd tutaj jest bezpłatny i nie ma żadnego minimum zamówienia.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki?",
      answer:
        "Jak najbardziej i w tej gminie często tak to wygląda. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 49.871, lng: 20.3132 },
};
