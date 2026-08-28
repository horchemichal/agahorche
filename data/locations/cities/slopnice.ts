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
 * SŁOPNICE — najmłodsza gmina w całym zestawie i jedyna z dodatnim
 * saldem migracji. Wieś rozciągnięta na dwanaście kilometrów pod
 * najwyższym szczytem Beskidu Wyspowego. To są dwie osie tej strony.
 *
 * Średnia wieku 34,8 lat, osiemdziesiąt osiem urodzeń wobec
 * czterdziestu jeden zgonów, wzrost o 23% od 2002 r. To jest gmina
 * małych dzieci — i o tym ma być ta strona, a nie o górach.
 * Do Limanowej jest stąd siedem kilometrów, najbliżej z całego
 * powiatu; do Tymbarku, gdzie jest praca, dziesięć.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 7 027 mieszkańców wg GUS na 31.12.2024; ewidencja gminna podaje
 *   7 128 (różnica 101 osób — GUS liczy ludność faktycznie zamieszkałą,
 *   gmina zameldowaną); w 1998 r. było 5 571,
 * — wzrost o 23,1% w latach 2002–2024 — najszybszy w okolicy,
 * — średnia wieku 34,8 lat; 65+ tylko 10,7%; dzieci 0–14 lat 21,9%;
 *   88 urodzeń wobec 41 zgonów w 2024 r.; saldo migracji wewnętrznych
 *   +3 — jedyne dodatnie w tej trójce; 77 małżeństw w 2024 r.,
 * — powiat limanowski jest drugim najmłodszym powiatem w Polsce
 *   (mediana 36,4 lat wg GUS 2020, po powiecie kartuskim),
 * — 5 sołectw, ewidencja gminna na 31.12.2024: Słopnice Dolne
 *   Szlacheckie 2 013, Słopnice Dolne Królewskie 1 963, Słopnice Górne
 *   1 642, Granice 772, Mogielica 739,
 * — powierzchnia 56,9 km², gęstość ok. 122 os./km², lesistość 39,9%;
 *   centrum na 451 m n.p.m.,
 * — 12 km od krańca do krańca gminy — od Zamieścia do Zapowiednicy
 *   (slopnice.pl),
 * — szczyty: Mogielica 1 171 m (najwyższy w Beskidzie Wyspowym),
 *   Łopień 960 m, Cichoń 926 m, Ostra 925 m; wieś leży w kotlinie,
 * — rezerwat przyrody Mogielica: utworzony 12 marca 2011 r., 50,44 ha
 *   plus otulina 90,69 ha, na terenie gmin Słopnice i Dobra; chroni
 *   głuszca i jego biotop,
 * — wieża widokowa na Mogielicy powstała w 2008 r. ze wspólnej
 *   inicjatywy gmin Dobra, Kamienica i Słopnice,
 * — osadnictwo od połowy XIV w., rozwój podczas migracji wołoskich
 *   w XV w.; historyczne zajęcia: pasterstwo, rolnictwo, garncarstwo,
 *   młynarstwo,
 * — drewniany kościół św. Andrzeja Apostoła z lat 1774–1776,
 * — Koło Gospodyń Wiejskich działa od ok. 1950 r.; wydało „Kulinarną
 *   Księgę — Przepisy ze Słopnic”,
 * — zespół regionalny „Słopniczanie” od 1978 r.,
 * — Złaz Turystyczny Mogielica — ostatnia niedziela sierpnia,
 *   w 2026 r. XXVII edycja; Święto Gminy Słopnice; Dożynki Gminne,
 * — przez gminę nie przebiega droga krajowa ani wojewódzka; dojazd
 *   drogami powiatowymi 1613K Zamieście–Słopnice–Zalesie
 *   i 1614K Słopnice–Chyszówki do DK28,
 * — do Limanowej 7 km / ok. 10 min — najkrócej w całym powiecie;
 *   do Tymbarku ok. 10 km,
 * — powiatowa linia autobusowa Słopnice Granice – Stara Wieś –
 *   Limanowa – Łososina Górna,
 * — kolei brak; najbliższa stacja w Limanowej, w przebudowie.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — zdania „najdłuższa wieś w Polsce”. Gmina używa tego tytułu, ale
 *   Biuro Rekordów wskazuje Ochotnicę (ok. 25 km) i Zawoję, a Słopnic
 *   tam nie ma. Piszę „12 km od krańca do krańca” — to liczba ze
 *   strony gminy i jest bezpieczna,
 * — historii partyzanckiej: 1 Pułk Strzelców Podhalańskich AK,
 *   cichociemni, ścieżka historyczna, a przede wszystkim pacyfikacja
 *   przysiółka przez Niemców w 1942 r. To żywa pamięć rodzinna, a nie
 *   atrakcja turystyczna. Na stronie handlowej nie ma na to miejsca,
 * — osuwisk i powodzi z 2010 r. Powiat limanowski jest jednym
 *   z najbardziej osuwiskowych obszarów w Polsce; wiele rodzin
 *   straciło domy. Nie dotykam tego nawet neutralnie,
 * — bezrobocia i poziomu wynagrodzeń w powiecie,
 * — liczby zatrudnionych w zakładzie w Tymbarku — na tej stronie
 *   piszę tylko, że praca jest tam, bez cyfr,
 * — smogu: brak danych pomiarowych dla gminy,
 * — emigracji zarobkowej — brak liczb; wiadomo tylko, że dotyczy
 *   głównie mężczyzn, co samo w sobie nie jest treścią na stronę.
 *
 * PUŁAPKA: „Mogielica” to i szczyt (1 171 m, na styku trzech gmin),
 * i nazwa jednego z pięciu sołectw Słopnic. W tekście trzeba
 * za każdym razem wiadomo, o którą chodzi.
 */
export const SLOPNICE: CityContent = {
  slug: "slopnice",
  h1: "Thermomix Słopnice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Słopnice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Słopnice: bezpłatna prezentacja TM7 u Ciebie w kuchni — Słopnice Dolne, Górne, Granice i Mogielica. Tel. 517 185 691.",
  ogTitle: "Thermomix Słopnice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Słopnice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Słopnic przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich pięciu sołectw, od Zamieścia po Zapowiednicę.",

  highlights: highlightyStandardowe("cała gmina Słopnice, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Słopnicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Słopnicach Dolnych, jak na samym końcu Górnych.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading:
        "Gmina, w której rodzi się dwa razy więcej dzieci, niż umiera ludzi",
      paragraphs: [
        "Słopnice mają najniższą średnią wieku w całej okolicy — niecałe trzydzieści pięć lat. W 2024 roku urodziło się tu osiemdziesiąt ośmioro dzieci, a zmarło czterdzieści jeden osób. Ludzi po sześćdziesiątym piątym roku życia jest tylko co dziesiąty, przy niemal co piątym w skali kraju. I jako jedyna gmina w okolicy Słopnice mają dodatnie saldo migracji: ludzie się tu wprowadzają, a nie wyprowadzają. Od 2002 roku przybyło ich prawie jedna czwarta.",
        "To wszystko znaczy jedno: to jest gmina małych dzieci. W bardzo wielu domach gotuje się codziennie, dla czterech, pięciu albo sześciu osób, przy czym najmłodsze potrzebują czegoś innego niż reszta. Nie ma tu problemu „ugotować dla siebie” — jest problem „ugotować dużo, szybko i tak, żeby wszyscy to zjedli”.",
        "Druga rzecz to geografia. Wieś ciągnie się dwanaście kilometrów od Zamieścia po Zapowiednicę, w kotlinie zamkniętej od zachodu Mogielicą i Łopieniem, a od południa grzbietem Cichonia. Mogielica ma tysiąc sto siedemdziesiąt jeden metrów i jest najwyższym szczytem Beskidu Wyspowego; od 2011 roku część jej stoków jest rezerwatem chroniącym głuszca. Wieża widokowa na szczycie stanęła w 2008 roku ze wspólnej inicjatywy trzech gmin — naszej, Dobrej i Kamienicy.",
        "Trzecia, i najbardziej praktyczna: do Limanowej jest stąd siedem kilometrów, czyli najkrócej z całego powiatu. Do Tymbarku, gdzie jest największy zakład w okolicy, dziesięć. Przez samą gminę nie przechodzi jednak żadna droga krajowa ani wojewódzka — jedzie się drogami powiatowymi do dwudziestki ósmej. Blisko, ale nie po autostradzie.",
        "Dla kuchni oznacza to konkretną porę dnia: powrót około szesnastej albo siedemnastej, dzieci już w domu, i czterdzieści minut na to, żeby powstał obiad, który wystarczy również na jutro. Nie chodzi o gotowanie szybciej — chodzi o to, żeby dało się gotować i jednocześnie zajmować się dzieckiem.",
        "I to jest dokładnie ta rzecz, którą urządzenie zdejmuje z głowy. Nie ugotuje za Was i nie zastąpi wprawy, której — sądząc po tutejszej książce kucharskiej — w tej wsi nie brakuje. Ale zupa może się gotować, kiedy Ty jesteś w drugim pokoju, i wyłączy się sama.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Słopnicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której części wsi mieszkasz — Dolne Szlacheckie, Dolne Królewskie, Górne, Granice czy Mogielica. Przy dwunastu kilometrach od krańca do krańca to naprawdę robi różnicę w czasie dojazdu, a numer domu bez nazwy sołectwa niewiele mi mówi.",
        "Podaj też, ile osób będzie i czy w domu są małe dzieci. Pierwsze pozwala mi dobrać przepisy i wziąć więcej składników, drugie — ustawić godzinę tak, żeby nie wypadła w porze snu albo kąpieli. W tej gminie to pytanie zadaję prawie zawsze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Słopnice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w domu, w którym są małe dzieci",
      paragraphs: [
        "W gminie o takiej strukturze wieku typowy dom to dwoje dorosłych i dwójka albo trójka dzieci, często w bardzo różnym wieku. Obiad musi być jeden, ale zjadalny dla wszystkich — a najmłodsze i tak potrzebuje czegoś osobnego, bez soli i rozdrobnionego.",
        "Najbardziej praktyczne jest tu to, że oba te posiłki mogą powstawać jednocześnie. Obiad dla reszty domu gotuje się w naczyniu, a porcja dla dziecka na parze piętro wyżej, w Varomie. Nic nie trzeba przelewać, nic nie trzeba pilnować i nie stoją przy tym trzy garnki naraz.",
        "Druga rzecz to zupy i dania jednogarnkowe, które mogą się ugotować z wyprzedzeniem i po prostu poczekać. Każdy nakłada sobie porcję, kiedy wchodzi — a w domu z dziećmi w różnym wieku „kiedy wchodzi” bywa rozciągnięte na dwie godziny.",
        "Trzecia to samodzielność starszych dzieci. Przepis prowadzi krok po kroku i nie trzeba nad nikim stać, więc dziesięciolatek jest w stanie zrobić sobie podwieczorek albo naleśniki dla młodszego rodzeństwa. W gminie, gdzie autobus i szkoła wyznaczają cały dzień, to bywa realną pomocą, nie ciekawostką.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Słopnice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu sołectw i bez żadnej dopłaty: Słopnic Dolnych Szlacheckich, Słopnic Dolnych Królewskich, Słopnic Górnych, Granic i Mogielicy.",
    "Nazwy sołectw bywają mylące dla kogoś z zewnątrz, bo cztery z pięciu to w istocie części jednej, bardzo długiej wsi. Od Zamieścia do Zapowiednicy jest dwanaście kilometrów — to jedna z najdłuższych miejscowości w Beskidzie Wyspowym. Dlatego przy umawianiu proszę o nazwę sołectwa, a nie o same „Słopnice”: od tego zależy, o której realnie u Ciebie jestem.",
    "Dwa sołectwa Dolne — Szlacheckie i Królewskie — skupiają razem ponad połowę mieszkańców gminy i leżą najbliżej drogi na Limanową. Górne, Granice i Mogielica ciągną się wyżej, w stronę grzbietów, z rzadszą zabudową i dłuższymi podjazdami. Dojeżdżam wszędzie, tylko trasa i czas wyglądają inaczej.",
    "Warto wiedzieć, że przez gminę nie przechodzi żadna droga krajowa ani wojewódzka — jedzie się drogami powiatowymi do krajowej dwudziestki ósmej. Do Limanowej jest jednak stąd siedem kilometrów, czyli najkrócej z całego powiatu, więc nie jest to gmina odcięta. Kursuje też powiatowy autobus ze Słopnic Granic przez Starą Wieś do Limanowej.",
  ],
  districts: [
    "Słopnice Dolne Szlacheckie",
    "Słopnice Dolne Królewskie",
    "Słopnice Górne",
    "Granice",
    "Mogielica",
  ],

  nearbyHeading: "Limanowa, Tymbark i Dobra też są na mojej trasie",
  nearbyParagraphs: [
    "Słopnice leżą najbliżej Limanowej z całego powiatu, a do Tymbarku i Dobrej mam stąd kilkanaście minut. Do Kamienicy i Mszany Dolnej jeżdżę tak samo — to dla mnie jedna trasa i granica gminy nie zmienia niczego w warunkach.",
    "Jeśli umawiasz się razem z siostrą, sąsiadką albo koleżankami z koła, powiedz o tym od razu. Często da się ustawić kilka spotkań jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim — a przy wsi rozciągniętej na dwanaście kilometrów to naprawdę pomaga.",
  ],
  nearbyTowns: [
    "Limanowa",
    "Tymbark",
    "Dobra",
    "Kamienica",
    "Mszana Dolna",
    "Łukowica",
    "Laskowa",
    "Nowy Sącz",
  ],

  about: blokOMnie("do Słopnic", "w powiecie limanowskim"),

  faq: [
    {
      question: "Wieś jest bardzo długa. Dojedziesz na sam koniec?",
      answer:
        "Dojeżdżam do wszystkich pięciu sołectw, od Zamieścia po Zapowiednicę, i dojazd jest bezpłatny niezależnie od odległości. Powiedz tylko przy umawianiu, w której części mieszkasz — przy dwunastu kilometrach różnicy to zmienia godzinę, o której u Ciebie jestem.",
    },
    ...faqWspolne("w gminie Słopnice"),
    {
      question:
        "Mam małe dziecko. Czy da się gotować dla niego i dla reszty domu naraz?",
      answer:
        "Tak i to jest chyba najczęściej pokazywana przeze mnie rzecz w tej gminie. Obiad dla dorosłych gotuje się w naczyniu, a porcja dla dziecka na parze w Varomie, piętro wyżej — jednocześnie, bez przelewania gorących rzeczy i bez trzech garnków na blacie.",
    },
    {
      question: "Czy prezentacja przeszkodzi dzieciom w rytmie dnia?",
      answer:
        "Nie powinna i po to pytam przy umawianiu o ich wiek. Dobieram godzinę tak, żeby nie wypadła w porze kąpieli albo snu, a jeśli dzieci chcą się kręcić przy stole albo pomagać przy gotowaniu, to tylko dobrze. Prezentacja trwa około dwóch godzin i nie wymaga od Ciebie ciszy w domu.",
    },
    {
      question: "Czy mogę zaprosić koleżanki albo panie z koła gospodyń?",
      answer:
        "Jak najbardziej. Koło w Słopnicach działa od lat pięćdziesiątych i ma nawet własną książkę z przepisami, więc spotkania grupowe są tu naturalne. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 49.698592, lng: 20.351559 },
};
