import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * KRZYŻ WIELKOPOLSKI — powiat czarnkowsko-trzcianecki,
 * woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ KRZYŻ WIELKOPOLSKI
 *   NIE MA.
 * MIASTO: 5 856 mieszkańców (GUS 31.12.2024), 5,8 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 007,9 os./km², iloraz daje 1 009,7. Rozbieżność
 *   1,8 I W ODWROTNĄ STRONĘ NIŻ ZWYKLE. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚĆ: 31 m n.p.m. PODAJĘ.
 *   ⚠⚠⚠ ŚREDNIEGO WIEKU (42,1) I WSKAŹNIKA FEMINIZACJI
 *   NIE PODAJĘ — to wątki demograficzne, których nie
 *   ruszam.
 *   ⚠ DRUGIE ŹRÓDŁO PODAJE 5,83 km² wobec 5,8 z GUS.
 *   PODAJĘ TYLKO LICZBĘ GUS.
 * CAŁA GMINA: 8 194 osoby, 174,3 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — źródło podaje 48,
 *   iloraz daje 47,0. Rozbieżność DOKŁADNIE 1,0, czyli
 *   na granicy. TRZECIE ŹRÓDŁO (geoportal) podaje 46,7
 *   przy 8 132 osobach. TRZY RÓŻNE WARTOŚCI — NIE
 *   PODAJĘ ŻADNEJ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * STRUKTURA GMINY (samorzad.gov.pl): ogółem 174,50 km²
 *   — LASY 101,00 km², UŻYTKI ROLNE 59,00 km²,
 *   POZOSTAŁE 14,50 km². PODAJĘ — sumuje się dokładnie.
 *   ⚠ Udziału procentowego NIE LICZĘ SAM, podaję
 *   kilometry.
 *   ⚠⚠⚠ TRZY RÓŻNE POWIERZCHNIE GMINY W TRZECH
 *   REJESTRACH: 174,3 / 174,50 / 174 km².
 *   ROZBIEŻNOŚCI NIE ROBIĘ KĄTEM — figura „dwie liczby
 *   na to samo" ma zajętych sąsiadów. MOGĘ WSPOMNIEĆ
 *   JEDNYM ZDANIEM, ŻE PODAJĘ JEDNĄ Z NICH.
 * WSIE: wykaz GUS podaje 19, a wymienia 18 nazw —
 *   Bielice Nowe, Brzegi, Dębina, Huta Szklana,
 *   Kuźnica Żelichowska, Lubcz Mały, Lubcz Wielki,
 *   Nowe Osieczno, Pestkownica, Przesieki, Stefanowo,
 *   Topno, Wizany, Zacisze, Zwierzyniec, Łokacz Mały,
 *   Łokacz Wielki, Żelichowo.
 *   ⚠⚠⚠ ROZBIEŻNOŚCI NIE ROZSTRZYGAM I LICZBY NIE
 *   PODAJĘ. Piszę „wszystkie wsie w gminie".
 *   ⚠⚠ SOŁECTW NIE USTALONO [NP].
 *   ⚠⚠ „HUTA SZKLANA" TO NAZWA WSI, NIE ZAKŁAD.
 *   PILNUJĘ TEGO — przy nazwach firm/zakładów mam
 *   zakaz, a tu chodzi o toponim.
 * ⚠ GEO: 52,8792 / 16,0083.
 *
 * ⚠⚠⚠ ODMIANA — OBA CZŁONY SIĘ ODMIENIAJĄ:
 *   D. do KRZYŻA WIELKOPOLSKIEGO ·
 *   Ms. w KRZYŻU WIELKOPOLSKIM ·
 *   C. Krzyżowi Wielkopolskiemu ·
 *   N. Krzyżem Wielkopolskim · B. = M.
 *   ⚠⚠⚠ BŁĄD: „w Krzyż Wielkopolski" (nieodmienianie
 *   drugiego członu) — najczęstszy w rozkładach jazdy
 *   i adresach. WSPOMINAM.
 *   ⚠⚠⚠ PRZYMIOTNIKA OD NAZWY MIASTA NIE UŻYWAM —
 *   źródła podają „krzyżowski", ale spotyka się też
 *   „krzyski" i ROZSTRZYGNIĘCIA NIE MAM [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — Słowniki traktują „KRZYŻ" jako odrębną nazwę
 *     miejscową, różną od Krzyża Wielkopolskiego.
 *     ⚠ PEŁNEJ LISTY POLSKICH „KRZYŻY" NIE USTALONO
 *     [NP] — NIE PODAJĘ LICZBY.
 *   — W gminie są DWA ŁOKACZE (Mały i Wielki) i DWA
 *     LUBCZE (Mały i Wielki).
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: 1936 r. Dwa źródła zgodne.
 *   — CZŁON „WIELKOPOLSKI" DODANY W 1991 R. — czyli
 *     55 lat po nadaniu praw miejskich. PODAJĘ.
 *     ⚠⚠ TEJ RÓŻNICY NIE ROBIĘ RDZENIEM KĄTA — figury
 *     nazewnicze zajęte (Kostrzyn, Międzychód, Kłodawa).
 *     PODAJĘ JAKO FAKT WSPIERAJĄCY.
 *   — ZMIANA NAZWY WSI NA „KRZYŻ": 1851 r.
 *   — Utraty praw nie ustalono [NP].
 *   ⚠⚠⚠ NIEMIECKIEJ FORMY NAZWY NIE PODAJĘ — wątek
 *     wykluczony. Piszę o skrzyżowaniu linii
 *     kolejowych jako o źródle nazwy, BEZ OBCOJĘZYCZNEJ
 *     FORMY.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WZIĘTE Z CZĘŚCI, A CAŁOŚĆ ZOSTAŁA:
 *   Krzyż powstał Z CZĘŚCI WSI OLĘDERSKIEJ ŁOKACZ.
 *   Osada startowa: 17 DOMÓW I 350 MIESZKAŃCÓW.
 *   A Łokacz NIE ZNIKŁ — w tej samej gminie do dziś
 *   leżą ŁOKACZ MAŁY i ŁOKACZ WIELKI.
 *   CZYLI: wydzielono część, część urosła w miasto
 *   (5 856 osób w 2024 r.), A ŹRÓDŁO ZOSTAŁO NA MIEJSCU
 *   — w dwóch egzemplarzach.
 *   KRZYWA WZROSTU: 430 (1880) → 2 400 (1910) →
 *   4 774 (1925) → 5 856 (2024).
 *   ⚠⚠ KROTNOŚCI I TEMPA NIE LICZĘ — figura „podziel
 *   przez tempo" zajęta (Stronie Śląskie).
 *   ⚠⚠ DAT 1848 / 1851 / 1899 / 1904 (linie kolejowe)
 *   PODAJĘ WYBIÓRCZO — wystarczy 1851 jako data
 *   otwarcia jednej z linii i rok zmiany nazwy wsi.
 *   ⚠⚠ PORTU NA NOTECI (1912–1913) NIE ROBIĘ KĄTEM —
 *   figura „drugie obok zamiast naprawy" zajęta
 *   (Grodzisk). MOGĘ PODAĆ JEDNYM ZDANIEM.
 *
 * KĄT: WZIĘTE Z CZĘŚCI, A CAŁOŚĆ ZOSTAŁA
 * — o tym, że wzięcie jednej rzeczy z czegoś nie
 * oznacza rezygnacji z resztą. Kąt z Krzyża: miasto
 * powstało z części wsi Łokacz, a Łokacz leży w tej
 * samej gminie do dziś — w dwóch egzemplarzach.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Krzyż powstał z części wsi olęderskiej Łokacz,
 *   jako osada 17 domów i 350 mieszkańców,
 * — że Łokacz Mały i Łokacz Wielki leżą w tej samej
 *   gminie do dziś. TO JEST RDZEŃ,
 * — że w 1851 r. zmieniono nazwę wsi na Krzyż,
 *   a prawa miejskie przyszły w 1936 r.; człon
 *   „Wielkopolski" dodano w 1991 r.,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: można wziąć jedną
 *   rzecz z nowego sposobu gotowania i NIE ODDAWAĆ
 *   reszty,
 * — ⚠⚠ ŻE NAJCZĘSTSZY OPÓR PRZED URZĄDZENIEM BRZMI
 *   „nie chcę, żeby mi to zastąpiło całą kuchnię" —
 *   i że to nie jest warunek zakupu,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wybierz JEDNĄ czynność,
 *   którą oddajesz. Resztę zostaw dokładnie tam, gdzie
 *   jest,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: jeśli oddana część
 *   zacznie rosnąć, trzeba to zauważyć i zdecydować
 *   świadomie — a nie obudzić się z kuchnią, której
 *   się nie wybrało,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zabiera
 *   garnków ani patelni. Jeśli ktoś chce, żeby zabrało
 *   — też się da, ale to osobna decyzja, nie skutek
 *   uboczny.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SCALONEGO Z TRZECH, O RÓŻNYM WIEKU —
 *   kąt zajęty (Koźmin Wielkopolski). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE:
 *   tam trzy osady scalono W JEDNO; tu jedną wieś
 *   ROZDZIELONO, a oba kawałki istnieją osobno.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO SKRÓTU, KTÓRY ZJADA RÓŻNICĘ — kąt zajęty
 *   (Kostrzyn). DLATEGO CZŁONU „WIELKOPOLSKI" NIE
 *   ROBIĘ RDZENIEM.
 * — ⚠⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód).
 * — ⚠⚠⚠ ZERO WSZYSTKIEGO NAZWANEGO OD JEDNEJ RZECZY —
 *   kąt zajęty (Kłodawa).
 * — ⚠⚠ ZERO DRUGIEGO OBOK ZAMIAST NAPRAWY STAREGO —
 *   kąt zajęty (Grodzisk Wielkopolski). DLATEGO PORT
 *   PODAJĘ TYLKO JAKO DATĘ.
 * — ⚠⚠ ZERO MAŁEGO BEZ DUŻEGO — kąt zajęty (Prusice).
 *   ⚠ UWAGA: w gminie są Łokacz Mały i Wielki oraz
 *   Lubcz Mały i Wielki. NIE ROBIĘ Z TEJ PARY FIGURY
 *   „małe bez dużego" — wymieniam nazwy i tyle.
 * — ⚠⚠ ZERO PRZERWY, KTÓRA NIE KASUJE POCZĄTKU — kąt
 *   zajęty (Trzcianka).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO NAMAWIANIA NA WYRZUCANIE SPRZĘTU.
 *   Sekcja ma zdejmować presję „wszystko albo nic",
 *   nie tworzyć nowej.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO ALKOHOLU · ZERO POŻARÓW
 *   I POWODZI · ZERO BEZROBOCIA · ZERO HERBU ·
 *   ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta ani gminy.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby wsi ani sołectw.
 * — NIE PODAJĘ przymiotnika od nazwy miasta.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ obcojęzycznej formy nazwy.
 * — NIE PODAJĘ średniego wieku ani feminizacji.
 * — NIE LICZĘ krotności ani tempa wzrostu.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Krzyż Wielkopolski leży w powiecie
 *   czarnkowsko-trzcianeckim, liczy 5 856 mieszkańców
 *   (GUS, 31.12.2024) na 5,8 km² i leży 31 m n.p.m.,
 * — cała gmina miejsko-wiejska to 8 194 osoby na
 *   174,3 km²; w strukturze gminy lasy zajmują
 *   101,00 km², użytki rolne 59,00 km², pozostałe
 *   14,50 km²,
 * — miasto powstało z części wsi olęderskiej Łokacz,
 *   jako osada 17 domów i 350 mieszkańców; Łokacz Mały
 *   i Łokacz Wielki leżą w tej samej gminie do dziś,
 * — nazwę wsi zmieniono na Krzyż w 1851 r., w tym samym
 *   roku, w którym otwarto przechodzącą tu linię
 *   kolejową; nazwa pochodzi od krzyżowania się dwóch
 *   linii,
 * — prawa miejskie nadano w 1936 r., a człon
 *   „Wielkopolski" dodano do nazwy w 1991 r.,
 * — ludność: 430 osób w 1880 r., 2 400 w 1910 r.,
 *   4 774 w 1925 r., 5 856 w 2024 r.,
 * — budowę portu rzecznego na Noteci rozpoczęto
 *   w 1912 r., a dworzec przeładunkowy powstał
 *   w latach 1912–1913,
 * — w gminie leżą m.in. Żelichowo, Huta Szklana,
 *   Kuźnica Żelichowska, Lubcz Mały, Lubcz Wielki,
 *   Nowe Osieczno, Zwierzyniec i Dębina.
 */
export const KRZYZ_WIELKOPOLSKI: CityContent = {
  slug: "krzyz-wielkopolski",
  h1: "Thermomix Krzyż Wielkopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krzyż Wielkopolski — cena i prezentacja",
  seoDescription:
    "Thermomix w Krzyżu Wielkopolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krzyż Wielkopolski — prezentacja u Ciebie",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krzyżu Wielkopolskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krzyża Wielkopolskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Krzyż Wielkopolski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wzięto część wsi. Wieś została — w dwóch egzemplarzach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krzyżu Wielkopolskim – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "wziete-z-czesci",
      heading: "Wzięte z części, a całość została",
      paragraphs: [
        "Krzyż Wielkopolski powstał z części wsi olęderskiej Łokacz. Na początku była to osada siedemnastu domów i trzystu pięćdziesięciu mieszkańców.",
        "I tu jest rzecz, którą lubię najbardziej: Łokacz nie zniknął. W tej samej gminie do dziś leżą Łokacz Mały i Łokacz Wielki. Wzięto część, część urosła w miasto — a źródło zostało na miejscu, w dwóch egzemplarzach.",
        "Reszta poszła szybko. W 1851 roku zmieniono nazwę wsi na Krzyż; wzięła się od krzyżowania dwóch linii kolejowych, z których jedną otwarto właśnie w tym roku. W 1880 roku było tu czterystu trzydziestu mieszkańców, w 1910 — dwa tysiące czterysta, w 1925 — cztery tysiące siedemset siedemdziesiąt czterech. Prawa miejskie przyszły w 1936 roku. Człon „Wielkopolski” dodano do nazwy dopiero w 1991.",
        "Piszę o tym, bo najczęstszy opór, jaki słyszę przed zakupem, brzmi dokładnie tak: „nie chcę, żeby mi to zastąpiło całą kuchnię”.",
        "I dobrze, że tak brzmi — bo to słuszny odruch. Tylko że nikt nie stawia takiego warunku. Można wziąć z nowego sposobu gotowania jedną rzecz i nie oddać reszty. Zupy w urządzeniu, a kotlety dalej na patelni. Ciasta w urządzeniu, a rosół dalej w garnku po babci. Część idzie osobną drogą i może nawet urosnąć — a całość zostaje tam, gdzie była.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście scalonym z trzech osobnych osad. Tam chodziło o łączenie w jedno. Tu jest odwrotnie — o wydzielenie części, po którym oba kawałki istnieją osobno i oba mają swoje nazwy.",
        "Ruch jest jeden. Wybierz jedną czynność, którą oddajesz. Najlepiej tę, której najbardziej nie lubisz albo która najczęściej Ci się nie udaje. Resztę zostaw dokładnie tam, gdzie jest, i nie planuj niczego więcej.",
        "Uczciwie o drugiej stronie, bo to się zdarza. Oddana część bywa, że rośnie — z jednej zupy robi się pięć dań, potem większość tygodnia. Nie ma w tym nic złego, ale warto to zauważyć i zdecydować świadomie, a nie obudzić się z kuchnią, której się nie wybierało. Jeśli po pół roku okaże się, że garnki stoją nieużywane, to niech to będzie Wasza decyzja, nie skutek uboczny.",
        "I uczciwie o sprzęcie. Thermomix nie zabiera garnków ani patelni i nie ma takiego zamiaru. Piekarnik zostaje, patelnia zostaje, drewniana łyżka zostaje. Jeśli ktoś chce, żeby urządzenie przejęło wszystko — też się da, ale to osobna decyzja, którą podejmuje się później i na spokojnie.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krzyżu Wielkopolskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, której czynności w kuchni najbardziej nie lubisz. Od niej zaczynamy — nie od całego tygodnia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krzyżu Wielkopolskim"),
    sekcjaRaty("w Krzyżu Wielkopolskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Krzyża Wielkopolskiego",
      paragraphs: [
        "Krzyż Wielkopolski leży w powiecie czarnkowsko-trzcianeckim, liczy 5 856 mieszkańców (GUS, 31.12.2024) na 5,8 kilometra kwadratowego i leży trzydzieści jeden metrów nad poziomem morza; gęstości dla miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 8 194 osoby na 174,3 kilometra kwadratowego — i tu też gęstości nie podaję, bo trzy różne rejestry podają trzy różne wartości. Za to struktura gminy zgadza się co do dziesiątej: lasy zajmują sto jeden kilometrów kwadratowych, użytki rolne pięćdziesiąt dziewięć, pozostałe czternaście i pół. Budowę portu rzecznego na Noteci rozpoczęto w 1912 roku, a dworzec przeładunkowy powstał w latach 1912–1913. W gminie leżą między innymi Żelichowo, Huta Szklana, Kuźnica Żelichowska, Nowe Osieczno, Zwierzyniec i Dębina.",
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

  districtsHeading: "Do których części Krzyża Wielkopolskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Łokacza Małego i Wielkiego, Lubcza Małego i Wielkiego, Żelichowa, Kuźnicy Żelichowskiej, Huty Szklanej, Nowego Osieczna, Zwierzyńca, Dębiny, Bielic Nowych, Brzegów, Pestkownicy, Przesiek, Stefanowa, Topna i Zacisza, a także Wizany. Wszędzie bez dopłaty.",
    "Jedna uwaga językowa: odmieniają się oba członki nazwy — „do Krzyża Wielkopolskiego” i „w Krzyżu Wielkopolskim”. Forma „w Krzyż Wielkopolski” z nieodmienionym drugim członem to najczęstszy błąd, spotykany nawet w adresach i rozkładach jazdy.",
  ],
  districts: [],

  nearbyHeading: "Poza Krzyż Wielkopolski też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Wielenia, Trzcianki, Czarnkowa, Sierakowa, Wronek i Jastrowia — wszędzie bezpłatnie, tak samo jak w samym Krzyżu Wielkopolskim.",
  ],
  nearbyTowns: ["Wieleń", "Trzcianka", "Czarnków", "Sieraków", "Wronki", "Jastrowie"],

  about: blokOMnie("do Krzyża Wielkopolskiego", "w Krzyżu Wielkopolskim i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krzyża Wielkopolskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga językowa: odmieniają się oba członki nazwy, czyli „do Krzyża Wielkopolskiego” i „w Krzyżu Wielkopolskim”, a nie „w Krzyż Wielkopolski”. Przymiotnika od nazwy miasta świadomie nie używam — źródła podają różne formy i nie mam rozstrzygnięcia.",
    },
    ...faqWspolne("w Krzyżu Wielkopolskim"),
    {
      question: "Nie chcę, żeby urządzenie zastąpiło mi całą kuchnię. Da się wziąć tylko część?",
      answer:
        "Da się i nikt nie stawia innego warunku. Krzyż Wielkopolski jest tu dobrym obrazem: miasto powstało z części wsi olęderskiej Łokacz, jako osada siedemnastu domów i trzystu pięćdziesięciu mieszkańców — a Łokacz nie zniknął, bo Łokacz Mały i Łokacz Wielki leżą w tej samej gminie do dziś. Wzięcie części nie zużywa całości. W kuchni to znaczy: zupy w urządzeniu, kotlety dalej na patelni, rosół dalej w garnku po babci. Wybierz jedną czynność, którą oddajesz, najlepiej tę, której nie lubisz — i nie planuj niczego więcej. Jedno tylko warto obserwować: jeśli po pół roku garnki stoją nieużywane, niech to będzie Wasza decyzja, a nie skutek uboczny.",
    },
    {
      question: "Czy po zakupie trzeba pozbyć się garnków i patelni?",
      answer:
        "Nie i nie będę do tego namawiać. Piekarnik zostaje, patelnia zostaje, drewniana łyżka zostaje — są rzeczy, które robią to lepiej, na przykład wszystko, co ma być przyrumienione albo zapieczone. Thermomix wchodzi tam, gdzie trzeba mieszać, pilnować temperatury, zmielić albo zważyć, i tam zdejmuje z Was stanie przy garnku. To podział pracy, nie wymiana wyposażenia.",
    },
  ],

  geo: { lat: 52.8792, lng: 16.0083 },
};
