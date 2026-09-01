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
 * BIECZ — GMINA MIEJSKO-WIEJSKA w powiecie gorlickim.
 * Gmina 16 016 mieszkańców (31.12.2024), 98,2 km².
 * MIASTO: tylko 4 290 mieszkańców, 17,7 km².
 *
 * OŚ STRONY: MIASTO, KTÓRE BYŁO CZYMŚ WIĘKSZYM — I DLATEGO
 * PRZETRWAŁO W KAMIENIU. Upadek zakonserwował tkankę.
 * ⚠️ NIE POWTARZAĆ FRAZ „MAŁY KRAKÓW” ANI „POLSKIE CARCASSONNE”
 * jako faktów — to epitety turystyczne, nikt nie podaje autora.
 * ⚠️ FRAZA „PERŁA PODKARPACIA” JEST BŁĘDNA — Biecz leży
 * w MAŁOPOLSCE. Krąży po blogach. NIE UŻYWAĆ.
 * ⚠️ Krościenko (`kroscienko.ts`) ma oś „dawne miasto 1348–1932” —
 * ale ono prawa STRACIŁO. Biecz je ZACHOWAŁ i ma mury. Inna historia.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⚠️⚠️ SZKOŁA KATÓW TO LEGENDA — POTWIERDZONE TRZEMA ŹRÓDŁAMI:
 *   (1) Gazeta Krakowska: „nie istniała żadna formalna instytucja
 *   kształcąca katów w Bieczu”; legenda powstała prawdopodobnie
 *   w XIX w., być może zainspirowana masową egzekucją zbójników
 *   w 1614 r. Kaci uczyli się przez terminowanie u mistrza.
 *   (2) Badania archeologiczne Baszty Katowskiej prowadzone przez
 *   Instytut Archeologii UNIWERSYTETU RZESZOWSKIEGO: „legenda
 *   nieznajdująca potwierdzenia w źródłach historycznych”.
 *   (3) SAM URZĄD MIEJSKI W BIECZU publikuje PDF pt. „LEGENDA
 *   o Bieckiej Szkole Katów na przestrzeni wieków”.
 *   ⚠️ „KAT JURKO” — sam urząd pisze „wg legendy”. NIE POSTAĆ
 *   HISTORYCZNA. Dzisiejsza „Szkoła Katów” to WSPÓŁCZESNA atrakcja
 *   turystyczna w piwnicach ratusza,
 * — CO JEST UDOKUMENTOWANE: 1600 królewski rozkaz tłumienia
 *   zbójnictwa; 1616 ZYGMUNT III WAZA NADAJE BIECZOWI „PRAWO
 *   MIECZA”. Biecz miał własny urząd kata od XIV w. i był ośrodkiem
 *   sądowniczym regionu. ⭐ NAJTWARDSZY DOWÓD NA RENOMĘ BIECKICH
 *   KATÓW: KSIĘGA MIEJSKA CZCHOWA notuje WYPOŻYCZANIE PRZEZ
 *   CZCHOWSKI URZĄD MISTRZA TORTUR Z BIECZA,
 * — ⚠️ „DOM KATA” — TAKIEGO ZABYTKU NIE MA na oficjalnej liście.
 *   Jest BASZTA KATOWSKA (badana przez UR) i „DOM Z BASZTĄ”
 *   (= Kamienica Barianów Rokickich, 1523, muzeum, ekspozycja
 *   aptekarska). NIE ZLEPIAĆ TYCH NAZW,
 * — PRAWA MIEJSKIE: Bolesław Wstydliwy, POŁOWA XIII W.
 *   ⚠️ część źródeł podaje 1257, urząd tylko „ok. połowy XIII w.”
 *   1363 potwierdzenie przez Kazimierza Wielkiego,
 * — ⭐ WRZESIEŃ 1311 – KWIECIEŃ 1312: WŁADYSŁAW ŁOKIETEK PRZENIÓSŁ
 *   TU SWÓJ DWÓR podczas buntu wójta Alberta w Krakowie.
 *   ⚠️ Stąd publicystyczne „stolica Polski” — to skrót, nie fakt,
 * — XIV W.: OK. 3 000 MIESZKAŃCÓW i 30 CECHÓW rzemieślniczych
 *   (dominowało sukiennictwo i płóciennictwo). XV–XVI w.:
 *   OK. 150 BIECZAN STUDIOWAŁO W AKADEMII KRAKOWSKIEJ,
 * — MARCIN KROMER (1512–1589) — ur. w Bieczu, historyk, geograf,
 *   dyplomata, BISKUP WARMIŃSKI. WACŁAW POTOCKI — poeta barokowy,
 *   pochowany w krypcie klasztoru reformatów,
 * — MURY OBRONNE — XIV w., PIERWSZA WZMIANKA ŹRÓDŁOWA 1399;
 *   17 BASZT obsługiwanych przez cechy. Zachowane: Rajcowska,
 *   Rzeźnicka, Kowalska,
 * — WIEŻA RATUSZOWA — RENESANSOWA, 1569, sgraffito, NAJWYŻSZA
 *   BUDOWLA MIASTA: 56 M. ⚠️ inne źródło podaje 58 m — UŻYWAM 56
 *   ZA URZĘDEM. Ratusz gotycki z 2. poł. XV w., obecna bryła 1830,
 * — KAMIENICE: „KROMERÓWKA” 1519 (siedziba Muzeum Ziemi Bieckiej),
 *   Kamienica Barianów Rokickich 1523,
 * — KOLEGIATA BOŻEGO CIAŁA — późnogotycka, prezbiterium sprzed 1480.
 *   Klasztor Franciszkanów — fundacja 1624, kościół 1645–1663,
 * — SZPITAL ŚW. DUCHA — fundacja KRÓLOWEJ JADWIGI.
 *   ⚠️ DATY ROZBIEŻNE: 1395 albo 1399. ⚠️ SUPERLATYW „najstarszy
 *   szpital w Polsce” NIE POTWIERDZONY przez źródło urzędowe.
 *   Wrzesień 2024 — gmina przejęła budynek w darowiźnie,
 * — ⭐ UNESCO: KOŚCIÓŁ ŚW. MICHAŁA ARCHANIOŁA W BINAROWEJ
 *   (sołectwo tej gminy) — na Liście Światowego Dziedzictwa od 2003,
 *   w grupie „Drewniane kościoły południowej Małopolski” (razem
 *   z Blizne, Dębnem Podhalańskim, Haczowem, Lipnicą Murowaną
 *   i SĘKOWĄ). Zbudowany OK. 1500 ze świerka, z modrzewiowymi
 *   półbelkami; wieża ok. sto lat później. Wnętrze szczelnie pokryte
 *   malowidłami: 21 SCEN PASJI, Sąd Ostateczny, siedem sakramentów,
 *   XVII-WIECZNY WIDOK BIECZA, anioł z wąsami,
 * — 10 SOŁECTW: Binarowa, Bugaj, Głęboka, Grudna Kępska, Korczyna,
 *   Libusza, Racławice, Rożnowice, Sitnica, Strzeszyn. Plus miasto
 *   z trzema komitetami osiedlowymi. Największe: Biecz 4 426
 *   i Libusza 3 303; najmniejsze Głęboka 442 i Bugaj 446 (2022),
 * — SENIORZY 61+ STANOWIĄ 23,14% mieszkańców gminy (2022),
 * — RUCH TURYSTYCZNY 2022: 33 380 osób w muzeach i punktach
 *   informacji,
 * — ROŻNOWICE wyróżnione w konkursie „Małopolska Wieś 2025”,
 * — REGON: 1 198 podmiotów (2024), w tym 962 osoby fizyczne,
 * — KGW: Korczyna (udział w konkursie Agro Gorlice); „Koło Gospodyń
 *   i Gospodarzy Wiejskich z gminy Biecz” wystąpiło w cyklu
 *   „Małopolska Smakuje na Wielkanoc”. ⚠️ PEŁNEJ NAZWY TEGO
 *   DRUGIEGO NIE USTALONO,
 * — KOLEJ: linia 108 Stróże–Krościenko, stacja Biecz. ⚠️ REGULARNY
 *   RUCH PASAŻERSKI PRZEZ BIECZ — STAN NA 2026 NIE POTWIERDZONY.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Potwierdzono tylko IRONMAT
 *   (zakład w Libuszy) — ale to inwestycja tworząca DWA nowe etaty.
 *   NIE NAZYWAĆ GO „DUŻYM PRACODAWCĄ”,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (6,3%, 6 707,16 zł),
 *   potwierdzone empirycznie jako identyczne z Gorlicami.
 *
 * PUŁAPKI:
 * — „ZBÓJ BECZ” jako legendarny założyciel miasta TO LEGENDA,
 * — NIE MYLIĆ SĘKOWEJ (UNESCO 2003, kościół) z OWCZARAMI
 *   (UNESCO 2013, cerkiew) — obie w gminie Sękowa (`sekowa.ts`).
 */

export const BIECZ: CityContent = {
  slug: "biecz",
  h1: "Thermomix Biecz – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Biecz — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Biecz: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do miasta i wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Biecz — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Biecz. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Biecza, Libuszy, Binarowej i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bieczu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
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
      heading: "Cztery tysiące mieszkańców i siedemnaście baszt",
      paragraphs: [
        "Biecz liczy dziś cztery tysiące dwieście dziewięćdziesiąt osób. W czternastym wieku miał trzy tysiące — czyli niewiele mniej — ale wtedy było to bardzo dużo, działało tu trzydzieści cechów rzemieślniczych, a przez dwa stulecia około stu pięćdziesięciu bieczan studiowało w Akademii Krakowskiej.",
        "Ta dysproporcja tłumaczy, dlaczego miasteczko wygląda, jak wygląda. Kiedy w dziewiętnastym i dwudziestym wieku rozwijały się Gorlice, Biecz nie nadążył — i właśnie dlatego nikt nie zburzył tu murów, żeby zrobić miejsce. Zostały: obwarowania wzmiankowane w tysiąc trzysta dziewięćdziesiątym dziewiątym roku, siedemnaście baszt obsługiwanych niegdyś przez poszczególne cechy, z których trzy stoją do dziś, renesansowa wieża ratuszowa z tysiąc pięćset sześćdziesiątego dziewiątego roku o wysokości pięćdziesięciu sześciu metrów, kamienica Kromerówka z tysiąc pięćset dziewiętnastego i Dom z basztą z tysiąc pięćset dwudziestego trzeciego.",
        "Miasto ma też epizod, o którym mało kto wie. Od września tysiąc trzysta jedenastego do kwietnia następnego roku Władysław Łokietek przeniósł tu swój dwór, kiedy w Krakowie trwał bunt wójta Alberta. Publicyści robią z tego czasem „stolicę Polski” — to skrót myślowy, ale sam fakt jest prawdziwy.",
        "A teraz rzecz, którą chcę powiedzieć wprost, bo wszyscy piszą inaczej. Słynna biecka szkoła katów nie istniała. Potwierdzają to trzy niezależne źródła: prasa regionalna, archeolodzy z Uniwersytetu Rzeszowskiego badający Basztę Katowską — i sam urząd miejski, który publikuje na ten temat dokument zatytułowany wprost „Legenda o Bieckiej Szkole Katów”. Kaci uczyli się fachu przez terminowanie u mistrza, nie w szkole. Legenda powstała prawdopodobnie w dziewiętnastym wieku.",
        "Udokumentowane jest natomiast coś ciekawszego. W tysiąc sześćset szesnastym roku Zygmunt III Waza nadał Bieczowi prawo miecza, czyli prawo skazywania i wykonywania wyroków śmierci; własny urząd kata miasto miało już od czternastego wieku. A w księdze miejskiej Czchowa zapisano, że tamtejszy urząd wypożyczał sobie mistrza tortur właśnie z Biecza. To prawdziwy dowód na renomę tutejszego rzemiosła — i nikt go nie cytuje, bo legenda jest efektowniejsza.",
        "Jest tu wreszcie zabytek, o którym w opisach Biecza prawie się nie mówi, choć ma najwyższy możliwy status. Kościół świętego Michała Archanioła w Binarowej, jednym z sołectw gminy, figuruje od dwa tysiące trzeciego roku na Liście Światowego Dziedzictwa UNESCO. Zbudowano go około tysiąc pięćsetnego roku ze świerka, a wnętrze jest szczelnie pokryte malowidłami: dwadzieścia jeden scen Pasji, Sąd Ostateczny, siedem sakramentów, siedemnastowieczny widok Biecza i anioł z wąsami.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Biecz?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o samo miasto, czy o jedno z dziesięciu sołectw. Libusza ma ponad trzy tysiące mieszkańców i jest niewiele mniejsza od Biecza; Głęboka i Bugaj mają po niecałe pięćset. Trasa wygląda w związku z tym inaczej, cena nie.",
        "W samym Bieczu przydaje się informacja, czy to starówka, czy zabudowa poza murami — w wąskich uliczkach parkowanie bywa trudniejsze i wolę o tym wiedzieć wcześniej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bieczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której prawie co czwarty mieszkaniec ma ponad sześćdziesiąt lat",
      paragraphs: [
        "W gminie Biecz osoby po sześćdziesiątym pierwszym roku życia stanowią ponad dwadzieścia trzy procent mieszkańców. To jedna z tych liczb, które zmieniają wszystko, co można sensownie powiedzieć o kuchni — bo gotowanie dla dwojga sześćdziesięciolatków wygląda inaczej niż dla rodziny z trójką dzieci.",
        "Problemy są zupełnie inne i warto je nazwać. Nie chodzi o czas, tylko o proporcje: przy dwóch osobach nie opłaca się rozstawiać połowy kuchni, a to, co się ugotuje na zapas, często się marnuje. Do tego dochodzi wysiłek fizyczny — krojenie, tarcie, ucieranie, dźwiganie garnków — który po latach zaczyna przeszkadzać bardziej niż samo stanie przy kuchni.",
        "Pierwsza praktyczna rzecz jest więc taka: całe rozdrabnianie robi maszyna. Warzywa, mięso, mak, orzechy, ciasto — bez tarki, bez noża, bez maszynki. Dla kogoś, kto ma słabsze nadgarstki albo bolące stawy, to nie jest wygoda, tylko różnica między gotowaniem a niegotowaniem.",
        "Druga to porcje. Można ugotować mało i dobrze, a nie tylko dużo. A jeśli ktoś chce zrobić większą partię i podzielić na pojemniki, urządzenie liczy czas i temperaturę samo, więc nic nie trzeba pilnować ani sprawdzać.",
        "Trzecia dotyczy tych domów, w których dzieci wyjechały, a wracają na święta i weekendy. Wtedy nagle trzeba ugotować dla dziesięciu osób — i to jest właśnie moment, w którym seryjne przygotowanie ciasta, farszu czy zupy oszczędza kilka godzin i sporo pleców.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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

  culinary: {
    heading: "Biecz i gotowanie — kuchnia miasteczka, które było większe",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie. Potwierdzone jest natomiast koło gospodyń w Korczynie oraz to, że gospodynie z gminy Biecz wystąpiły w regionalnym cyklu kulinarnym na Wielkanoc.",
      "Ciekawsze jest tło historyczne, bo tłumaczy, czemu tutejsza kuchnia jest mieszczańska, a nie tylko wiejska. W czternastym wieku działało w Bieczu trzydzieści cechów, a miasto leżało na szlaku handlowym na Węgry. Przez taką miejscowość przechodziły przyprawy, wino i towary, których w okolicznych wsiach nie znano.",
      "Zostało po tym coś, co widać do dziś w Domu z basztą: ekspozycja aptekarska. Apteka w dawnym mieście była miejscem, gdzie przyprawa i lekarstwo były często tym samym towarem — i to jest chyba najstarszy związek Biecza z kuchnią, jaki da się udokumentować.",
      "Dziś gotuje się tu jak w całym Pogórzu: ziemniaki, kapusta, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe, przetwory. Z jedną różnicą, o której już pisałam — w gminie, gdzie co czwarty mieszkaniec ma ponad sześćdziesiąt lat, gotuje się częściej w małych porcjach niż w wielkich garnkach.",
      "Dla urządzenia najważniejsze jest tu więc nie tempo, tylko odciążenie rąk: mielenie, tarcie, ucieranie mas na ciasta, wyrabianie. Czego nie zrobi, mówię wprost: nie ulepi pierogów, nie upiecze chleba i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie wysiłkiem i czasem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Biecz dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich dziesięciu sołectw, bez żadnej dopłaty za odległość. Gmina liczy ponad szesnaście tysięcy mieszkańców na dziewięćdziesięciu ośmiu kilometrach kwadratowych, z czego samo miasto ma ich cztery i pół tysiąca na siedemnastu.",
    "Sołectwa to: Binarowa, Bugaj, Głęboka, Grudna Kępska, Korczyna, Libusza, Racławice, Rożnowice, Sitnica i Strzeszyn. Największa jest Libusza z ponad trzema tysiącami mieszkańców — niewiele mniej niż samo miasto. Rożnowice wyróżniono w konkursie Małopolska Wieś w dwa tysiące dwudziestym piątym roku.",
    "Najważniejszy zabytek gminy stoi jednak nie w mieście, tylko w Binarowej: kościół świętego Michała Archanioła z około tysiąc pięćsetnego roku, wpisany na Listę Światowego Dziedzictwa UNESCO w dwa tysiące trzecim, z wnętrzem pokrytym malowidłami — w tym siedemnastowiecznym widokiem Biecza.",
    "W samym mieście: rynek z gotyckim ratuszem i renesansową wieżą z tysiąc pięćset sześćdziesiątego dziewiątego roku, mury obronne z trzema zachowanymi basztami, kolegiata Bożego Ciała, klasztor franciszkanów z fundacji z tysiąc sześćset dwudziestego czwartego, Kromerówka z Muzeum Ziemi Bieckiej i Dom z basztą z ekspozycją aptekarską. Szpital świętego Ducha z fundacji królowej Jadwigi gmina przejęła we wrześniu dwa tysiące dwudziestego czwartego roku.",
    "Dojazd: przez gminę biegnie linia kolejowa ze Stróż do Krościenka ze stacją w Bieczu. Nie podaję rozkładu, bo aktualnego stanu ruchu pasażerskiego na tym odcinku nie udało mi się potwierdzić. Samochodem najłatwiej od strony Gorlic.",
  ],
  districts: [
    "Biecz — Rynek i starówka",
    "Biecz — zabudowa poza murami",
    "Libusza",
    "Binarowa",
    "Rożnowice",
    "Korczyna i Sitnica",
    "Racławice i Strzeszyn",
    "Głęboka, Bugaj, Grudna Kępska",
  ],

  nearbyHeading: "Gorlice, Lipinki i Moszczenica też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Gorlicami, Lipinkami, Moszczenicą i Rzepiennikiem Strzyżewskim. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Warto wiedzieć, że kościół w Binarowej jest jednym z sześciu obiektów w grupie UNESCO „Drewniane kościoły południowej Małopolski” — a drugi z tej samej grupy, w Sękowej, stoi kilkanaście kilometrów dalej, w sąsiedniej gminie.",
  ],
  nearbyTowns: [
    "Gorlice",
    "Lipinki",
    "Moszczenica",
    "Sękowa",
    "Bobowa",
    "Nowy Sącz",
  ],

  about: blokOMnie("do Biecza", "w powiecie gorlickim"),

  faq: [
    {
      question: "Mieszkam w Libuszy albo Binarowej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dziesięć sołectw gminy traktuję dokładnie tak samo jak samo miasto. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w Bieczu"),
    {
      question: "Gotuję dla dwóch osób. Czy to się w ogóle opłaca?",
      answer:
        "Opłaca się, tylko z innego powodu niż w dużej rodzinie. Przy dwóch osobach nie chodzi o czas, tylko o wysiłek i porcje: całe krojenie, tarcie, mielenie i ucieranie robi maszyna, a ugotować da się mało i dobrze, bez rozstawiania połowy kuchni. Na prezentacji chętnie ugotuję dokładnie tyle, ile realnie zjadacie, a nie pokazową porcję na sześć osób.",
    },
  ],

  geo: { lat: 49.7355, lng: 21.2633 },
};
