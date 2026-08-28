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
 * TRZCIANA — gmina, która pnie się w górę i ma najmłodszą metrykę
 * samorządową w okolicy.
 *
 * Dwie osie, obie prawdziwe i obie nie do powtórzenia gdzie indziej:
 * 1) teren od 226 do ponad 800 m n.p.m. — gmina zaczyna się na pogórzu,
 *    a kończy w Beskidzie Wyspowym. Siedem dużych wsi na stoku,
 *    nie kilkanaście małych w dolinie,
 * 2) gmina została REAKTYWOWANA 1 stycznia 1995 r. przez podział gminy
 *    Żegocina. To najmłodsza wspólnota samorządowa w tej okolicy i sama
 *    o tym pamięta — 30-lecie obchodzono niedawno.
 *
 * Świadomy kontrast wobec Łapanowa: tam jedna droga i dolina, tu siedem
 * wsi rozłożonych po stokach, a sama siedziba gminy leży POZA siecią
 * dróg wojewódzkich.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 7 sołectw z liczbami mieszkańców (stan 30.06.2023, trzciana.pl):
 *   Trzciana 1 633, Łąkta Dolna 1 113, Kamionna 912, Leszczyna 829,
 *   Kierlikówka 522, Ujazd 397, Rdzawa 266,
 * — położenie „u podnóża Beskidu Wyspowego”, w południowej części
 *   powiatu bocheńskiego (trzciana.pl/gmina),
 * — teren od 226 m n.p.m. (ujście potoku Cichawka) do ponad 800 m;
 *   gmina leży na granicy dwóch krain — pogórza na północy i Beskidu
 *   Wyspowego na południu (Studium uwarunkowań gminy Trzciana;
 *   powiatbochenski.pl),
 * — Kamionna 801 m n.p.m. — najwyższe wzniesienie masywu (Studium),
 * — potoki: Sanecki, Przeginia, Cichawka — wszystkie w zlewni Raby
 *   (Studium),
 * — z Bochni ok. 21 km, dojazd DW965, potem DW966, a na końcu drogą
 *   powiatową — sama wieś Trzciana leży poza siecią dróg wojewódzkich
 *   (conadrogach.pl; trzciana.pl),
 * — DW966 przechodzi przez gminę w sołectwie Leszczyna (conadrogach.pl),
 * — wzrost liczby ludności o 14,1% w latach 2002–2024; saldo migracji
 *   w 2024 r. lekko ujemne (polskawliczbach.pl, dane GUS),
 * — gmina określa się jako „zaplecze żywnościowe i teren agroturystyki”;
 *   wiodące kierunki: sadownictwo i hodowla drobiu (Studium),
 * — reaktywacja gminy: rozporządzenie Rady Ministrów z 1 grudnia 1994,
 *   w życie 1 stycznia 1995; powstała przez podział gminy Żegocina;
 *   pierwsze wybory do rady 5 marca 1995, urząd ruszył 1 kwietnia 1995
 *   (trzciana.pl, „30 lat od reaktywacji Gminy Trzciana”),
 * — w rejestrze zabytków 7 wpisów, z czego 5 to cmentarze wojenne
 *   z I wojny światowej (WUOZ Kraków, czerwiec 2024),
 * — kościół par. św. Małgorzaty w Trzcianie: parafia od XIII w. pod
 *   dawną nazwą Libichowa, kościół murowany, późnogotycka kamienna
 *   chrzcielnica z 1497 r. (WUOZ; tarnowskiekoscioly.net),
 * — drewniany kościół NMP Królowej Polski w Kamionnej, zbudowany
 *   w 1934 r., konstrukcja zrębowa (WUOZ; zabytki.powiatbochenski.pl),
 * — rezerwat „Kamionna”: leśny, utworzony 25 lipca 1997, ok. 64 ha,
 *   położony w dwóch gminach — Trzciana i Żegocina.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — wieży widokowej „w gminie Trzciana”. Wieża (29 m, otwarta w styczniu
 *   2024) stoi na szczycie Kamionnej, a SZCZYT LEŻY W GMINIE LIMANOWA.
 *   Trzciana była jedną z czterech gmin, które ją współfinansowały.
 *   Wieś Kamionna to co innego niż szczyt Kamionna,
 * — sanktuarium. W gminie Trzciana NIE POTWIERDZONO żadnego,
 * — produktu z ministerialnej Listy Produktów Tradycyjnych. „Pierożki
 *   Babci Władzi” figurują na promocyjnej liście starostwa bocheńskiego,
 *   która NIE JEST rejestrem ministerialnym i nie podaje dat wpisu,
 * — dokładnych wysokości Góry Pasierbieckiej: gmina podaje 769 m,
 *   Studium 763,6 m. Rozbieżność nierozstrzygnięta,
 * — dokładnej liczby mieszkańców: w obiegu są trzy wartości
 *   (5 645, 5 672 i 5 713).
 *
 * PUŁAPKA NR 1: Łąkta DOLNA leży w gminie Trzciana, a Łąkta GÓRNA
 * w gminie Żegocina. To najczęstsza pomyłka w tekstach o tym rejonie.
 *
 * PUŁAPKA NR 2: przez gminę Trzciana NIE przechodzi DW965 — ta biegnie
 * przez Żegocinę. Przez Trzcianę przechodzi DW966, i to tylko przez
 * jedno sołectwo.
 */
export const TRZCIANA: CityContent = {
  slug: "trzciana",
  h1: "Thermomix Trzciana – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Trzciana — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Trzciana: bezpłatna prezentacja TM7 u Ciebie w kuchni — Łąkta Dolna, Kamionna, Leszczyna, Kierlikówka, Ujazd, Rdzawa. Tel. 517 185 691.",
  ogTitle: "Thermomix Trzciana — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Trzciana. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead:
    "Do gminy Trzciana przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedmiu sołectw, także tych najwyżej położonych.",

  highlights: highlightyStandardowe("cała gmina Trzciana, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Trzcianie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Trzcianie, jak w Rdzawie na końcu gminy.",
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
      heading: "Gmina, która wspina się od 226 do ponad 800 metrów",
      paragraphs: [
        "Trzciana jest wyjątkowa w skali powiatu pod jednym względem: mieści w sobie dwa różne krajobrazy. Północ, przy ujściu potoku Cichawka, leży na wysokości niewiele ponad dwustu metrów — to jeszcze pogórze. Południe wchodzi już w Beskid Wyspowy i sięga powyżej ośmiuset. Między jednym a drugim jest siedem wsi rozłożonych na stokach.",
        "Siedem — to też jest nietypowe. Sąsiedni Łapanów ma siedemnaście sołectw, Drwinia trzynaście. Tutaj wsi jest mało, ale są duże: sama Trzciana to ponad tysiąc sześćset osób, Łąkta Dolna ponad tysiąc sto, Kamionna prawie dziewięćset. To znaczy, że gmina nie rozsypuje się na przysiółki — ma kilka wyraźnych ośrodków, z których każdy ma swój kościół, swoją szkołę i swoje życie.",
        "Praktyczny skutek położenia jest taki, że sama Trzciana leży poza siecią dróg wojewódzkich. Z Bochni jedzie się przez Nowy Wiśnicz i Muchówkę, a na końcu trzeba zjechać na drogę powiatową. To niecałe pół godziny, ale nie jest to trasa, którą pokonuje się przypadkiem — tu trzeba chcieć przyjechać. Ja chcę i przyjeżdżam.",
        "Trzcianie zdarza się jeszcze jedno, o czym rzadko się pamięta: to najmłodsza gmina w tej okolicy. Została reaktywowana pierwszego stycznia 1995 roku, po podziale gminy Żegocina. Trzydzieści lat samodzielności to niewiele w skali wsi, które istnieją od średniowiecza — i widać po tej gminie, że to, co ma, zbudowała sobie sama i stosunkowo niedawno.",
        "Gospodarczo jest to zaplecze żywnościowe: sadownictwo, drób, gospodarstwa niewielkie i prowadzone przy okazji pracy gdzie indziej. W kuchniach oznacza to zwykle jedno — gotuje się dużo, sezonowo i z własnego. Urządzenie, które przywożę, nie ma tego zastąpić. Ma zabrać godzinę mieszania przy powidłach i pilnowanie garnka, kiedy trzeba wyjść do obejścia.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Trzciana?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w którym sołectwie mieszkasz. W gminie rozłożonej na stoku ma to konkretne znaczenie: dojazd do Rdzawy albo w wyższe partie Kamionnej wygląda inaczej niż dojazd do Leszczyny przy drodze wojewódzkiej. Zimą proszę też o słowo, w jakim stanie jest droga pod dom — wolę wiedzieć wcześniej niż utknąć na podjeździe.",
        "Jeśli w domu jest kilka osób zainteresowanych, powiedz od razu ile — dobiorę przepisy i wezmę więcej składników.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Trzciana"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny, która gotuje z własnego",
      paragraphs: [
        "W gminie z sadami i drobiem sezon nie rozkłada się równo. Latem i wczesną jesienią w kuchni dzieje się wszystko naraz: przetwory, obiad, coś na jutro. Zimą jest spokojniej, ale gotuje się codziennie i dla kilku osób.",
        "Najbardziej praktyczne bywa to, że zupa albo danie jednogarnkowe może się gotować, kiedy Ty jesteś w obejściu albo siedzisz z dzieckiem nad lekcjami. Nie trzeba stać obok, nie trzeba mieszać, a urządzenie samo wyłącza się w odpowiednim momencie.",
        "Rodzicom najmłodszych dzieci najczęściej przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci z kolei często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać.",
        "Osobno pokazuję to, co w takich domach sprawdza się najlepiej: przecieranie, powidła, soki i zupy do zamrożenia. Tam, gdzie normalnie trzeba mieszać przez godzinę nad gorącym garnkiem, urządzenie robi to samo i samo pilnuje temperatury.",
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

  districtsHeading: "Gdzie w gminie Trzciana dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu sołectw i bez żadnej dopłaty za odległość — do Trzciany, Łąkty Dolnej, Kamionnej, Leszczyny, Kierlikówki, Ujazdu i Rdzawy.",
    "Leszczyna leży przy drodze wojewódzkiej i jest najłatwiejsza do trafienia. Reszta wymaga zjazdu w drogi powiatowe i gminne, a im dalej na południe, tym wyżej i bardziej stromo. Kamionna, Rdzawa i Ujazd to już podnóża Beskidu Wyspowego — dojeżdżam tam tak samo, tylko rezerwuję więcej czasu na trasę.",
    "W Kamionnej stoi drewniany kościół z lat trzydziestych, w Trzcianie murowany kościół świętej Małgorzaty, w którym zachowała się kamienna chrzcielnica z końca XV wieku. To najlepsze punkty orientacyjne w gminie i tak najczęściej się tu umawiamy.",
    "Warto wiedzieć o jednej rzeczy, bo bywa myląca: wieś Kamionna należy do gminy Trzciana, ale sam szczyt Kamionnej wraz z wieżą widokową leży już w gminie Limanowa. Trzciana była jedną z gmin, które wieżę współfinansowały. Piszę o tym, żeby nikt nie szukał wieży pod niewłaściwym adresem.",
  ],
  districts: ["Trzciana", "Łąkta Dolna", "Kamionna", "Leszczyna", "Kierlikówka", "Ujazd", "Rdzawa"],

  nearbyHeading: "Sąsiednie gminy też obsługuję",
  nearbyParagraphs: [
    "Trzciana graniczy z Żegociną, Łapanowem, Nowym Wiśniczem i gminą Limanowa. Do wszystkich tych kierunków dojeżdżam, więc jeśli ktoś z rodziny mieszka po drugiej stronie granicy gminy, to dla mnie nadal ta sama trasa.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Bochnia",
    "Żegocina",
    "Łapanów",
    "Nowy Wiśnicz",
    "Lipnica Murowana",
    "Limanowa",
    "Gdów",
    "Kraków",
  ],

  about: blokOMnie("do Trzciany", "w gminach wokół Bochni"),

  faq: [
    {
      question: "Czy dojeżdżasz do wyżej położonych sołectw?",
      answer:
        "Tak — do Kamionnej, Rdzawy i Ujazdu tak samo jak do Leszczyny przy drodze wojewódzkiej. Dojazd jest bezpłatny niezależnie od wysokości i od stanu drogi; proszę tylko o uprzedzenie zimą, jeśli podjazd bywa trudny.",
    },
    ...faqWspolne("w gminie Trzciana"),
    {
      question: "Mieszkam daleko od drogi wojewódzkiej. Czy to problem?",
      answer:
        "Nie. Sama siedziba gminy leży poza siecią dróg wojewódzkich, więc zjeżdżanie w drogi powiatowe jest tu normą, a nie wyjątkiem. Wystarczy, że przy umawianiu podasz sołectwo i krótki opis dojazdu.",
    },
    {
      question: "Robimy dużo przetworów. Czy zobaczę to na prezentacji?",
      answer:
        "Jeśli jest sezon i macie ochotę — tak, mogę pokazać przecieranie albo gotowanie owoców zamiast klasycznego deseru. To zwykle bardziej przekonujące niż standardowy pokaz, bo od razu widać, ile mieszania urządzenie z Was zdejmuje.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki?",
      answer:
        "Jak najbardziej. Przy siedmiu dużych wsiach często tak to tutaj wygląda — jedno spotkanie i kilka osób naraz. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 49.8452, lng: 20.371 },
};
