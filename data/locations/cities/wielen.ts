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
 * WIELEŃ — powiat czarnkowsko-trzcianecki,
 * woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ WIELEŃ DZIŚ NIE MA.
 *   ⚠⚠⚠ ALE W LATACH 1973–1977 ISTNIAŁY DWIE:
 *   WIELEŃ I WIELEŃ PÓŁNOCNY. TO RDZEŃ KĄTA.
 * MIASTO: 5 629 mieszkańców (GUS 31.12.2024), 4,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 262,1 os./km², iloraz daje 1 250,9. ROZBIEŻNOŚĆ
 *   11,2 — NAJWIĘKSZA W CAŁYM CYKLU. Gęstość liczona
 *   jest od powierzchni ok. 4,46 km², a wyświetlana
 *   od 4,5. NIE PODAJĘ ANI GĘSTOŚCI, ANI ILORAZU.
 *   ⚠⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ DRUGIE ŹRÓDŁO PODAJE 4,32 km². PODAJĘ TYLKO
 *   LICZBĘ GUS (4,5).
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 11 604 osoby, 430,0 km², gęstość
 *   27 os./km².
 *   ⚠ [ZW — 11 604 / 430,0 = 26,99 → 27. DOMYKA SIĘ
 *   IDEALNIE. PODAJĘ.]
 *   ⚠⚠ ŹRÓDŁO TURYSTYCZNE PODAJE 29 os./km² —
 *   TO STARSZE DANE. NIE UŻYWAM.
 *   ⚠ LASY ZAJMUJĄ 66% TERENU GMINY. PODAJĘ —
 *   to liczba ze źródła, nie moje przeliczenie.
 *   ⚠ Wariant precyzyjny powierzchni: 430,09 km².
 *   PODAJĘ 430,0 (GUS).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠ NAJWIĘKSZA OBSZAROWO GMINA TEJ FALI (430 km²)
 *   I NAJRZADZIEJ ZALUDNIONA (27 os./km²).
 *   ⚠⚠⚠ NIE ROBIĘ Z TEGO FIGURY „szerokie a płytkie" —
 *   kąt zajęty (Pniewy). PODAJĘ LICZBY I TYLE.
 * WSIE: wykaz GUS podaje 33 wsie i osady leśne,
 *   a wymienia 30 nazw — Biała, Brzezinki, Brzeźno,
 *   Dzierżążno Małe, Dzierżążno Wielkie, Dębogóra,
 *   Folsztyn, Gieczynek, Gulcz, Hamrzysko, Herburtowo,
 *   Jaryń, Jeleniec, Kałądek, Kocień Wielki, Kuźniczka,
 *   Lipinki, Marianowo, Miały, Mniszek, Mężyk, Nowe
 *   Dwory, Ogrodzieniec, Osina, Rosko, Siklawa,
 *   Wrzeszczyna, Zawada, Zielonowo, Łaski.
 *   ⚠⚠⚠ ROZBIEŻNOŚCI NIE ROZSTRZYGAM I LICZBY NIE
 *   PODAJĘ. Piszę „wszystkie wsie i osady w gminie".
 *   ⚠⚠ SOŁECTW NIE USTALONO [NP].
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 *   ⚠ PUŁAPKA: wieś OGRODZIENIEC ma nazwę identyczną
 *   z miastem w śląskim. WSPOMINAM.
 * ⚠ GEO: 52,8922 / 16,1736.
 *
 * ⚠⚠⚠ ODMIANA — MIĘKKIE -Ń:
 *   D. do WIELENIA · Ms. w WIELENIU ·
 *   N. Wieleniem · C. Wieleniowi.
 *   Przymiotnik: WIELEŃSKI.
 *   ⚠⚠⚠ BŁĄD: „Wieleńa" (niezmienione ń) oraz mianownik
 *   „Wielen" bez kreski. WSPOMINAM OBA.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — forma
 *   rekonstruowana gramatycznie.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — NAJGROŹNIEJSZA W TEJ FALI:
 *   — WIELEŃ ZAOBRZAŃSKI — wieś w gminie Przemęt,
 *     powiat wolsztyński, TO SAMO WOJEWÓDZTWO
 *     WIELKOPOLSKIE, 200 mieszkańców.
 *     ⚠⚠⚠ DŁUGOŚĆ GEOGRAFICZNA NIEMAL IDENTYCZNA
 *     (16,18 wobec 16,17), różni się tylko szerokość —
 *     ok. 105 km na południe. WSPOMINAM OBOWIĄZKOWO
 *     W CZĘŚCI O DOJAZDACH.
 *   — WIELEŃ PÓŁNOCNY — NIE JEST ODRĘBNĄ
 *     MIEJSCOWOŚCIĄ. To nazwa historycznej gminy
 *     (1973–1977), a dziś część miasta po północnej
 *     stronie Noteci. Zabytki opisywane „w Wieleniu
 *     Północnym" LEŻĄ W WIELENIU.
 *   — Wielenia w innym województwie nie potwierdzono
 *     [NP].
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: dwa źródła podają 1108 r.
 *     i 1239 r. — ROZBIEŻNOŚĆ 131 LAT. PODAJĘ OBIE
 *     I MÓWIĘ WPROST, ŻE NIE WYBIERAM.
 *   — PRAWA MIEJSKIE: „między 1331 a 1350 rokiem" —
 *     dwa źródła zgodne co do przedziału, nie co
 *     do roku. PODAJĘ PRZEDZIAŁ.
 *   — SIEDZIBA POWIATU: 1887–1920. Budynek starostwa
 *     z 1895 r. PODAJĘ — bez kontekstu granicznego.
 *   ⚠⚠⚠ PAŁACU (1749, nieukończony, skrzydła rozebrane
 *     w XVIII w., odbudowa w latach 70.–80. XX w.)
 *     NIE UŻYWAM — figury „rozebrane, zanim powstało
 *     nowe" (Opalenica) i „plan przekracza całość"
 *     (Murowana Goślina) ZAJĘTE. POMIJAM CAŁKOWICIE.
 *   ⚠⚠⚠ WIEŻY Z 1902 R. NIE WYMIENIAM — jej nazwa
 *     upamiętnia postać polityczną. POMIJAM.
 *   ⚠⚠⚠ CMENTARZY RODOWYCH I MAUZOLEUM NIE UŻYWAM.
 *   ⚠⚠⚠ BRACTWA KURKOWEGO (1645) NIE UŻYWAM — wątek
 *     militarno-strzelecki.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PODZIAŁ ZNIESIONY, NAZWA ZOSTAŁA:
 *   W 1973 R. z jednego Wielenia utworzono DWIE
 *   ODRĘBNE GMINY: WIELEŃ i WIELEŃ PÓŁNOCNY.
 *   W 1977 R. PODZIAŁ ZNIESIONO.
 *   ALE NAZWA „WIELEŃ PÓŁNOCNY" ZOSTAŁA — funkcjonuje
 *   do dziś jako określenie części miasta po północnej
 *   stronie Noteci.
 *   SKUTEK PRAKTYCZNY: obiekty opisywane w wykazach
 *   jako „w Wieleniu Północnym" turysta szuka poza
 *   Wieleniem, choć leżą w Wieleniu.
 *   CZYLI: układ administracyjny trwał CZTERY LATA,
 *   a jego nazwa trwa PONAD CZTERDZIEŚCI OSIEM.
 *   ⚠⚠ LICZBY „48 lat" NIE PODAJĘ JAKO LICZBY —
 *   piszę „od 1977 roku do dziś", żeby nie zamrażać
 *   wyliczenia w tekście.
 *
 * KĄT: PODZIAŁ ZNIESIONY, NAZWA ZOSTAŁA
 * — o tym, że nazwa przeżywa układ, który ją stworzył.
 * Kąt z Wielenia: gminę rozdzielono na dwie w 1973 r.
 * i zlepiono w 1977, a nazwa „Wieleń Północny" została
 * na stałe.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1973 r. utworzono dwie gminy, Wieleń i Wieleń
 *   Północny, a w 1977 r. podział zniesiono,
 * — że nazwa „Wieleń Północny" została i dziś oznacza
 *   część miasta po północnej stronie Noteci,
 * — że dlatego obiekty opisane „w Wieleniu Północnym"
 *   leżą w Wieleniu. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: zostają nazwy
 *   układów, których już nie ma. „Obiad” o czternastej
 *   w domu, w którym nikt o czternastej nie jest;
 *   „niedzielne gotowanie” w tygodniu pracy zmianowej;
 *   „danie dla dzieci” dla dzieci, które mają
 *   dwadzieścia lat,
 * — ⚠⚠ ŻE TE NAZWY KOSZTUJĄ: pod nimi planuje się
 *   zakupy, czas i poczucie winy za układ, którego już
 *   nie ma,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nazwać na głos, co jest
 *   teraz, i sprawdzić, które słowo z kuchennego
 *   słownika opisuje układ sprzed lat,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie każda stara nazwa
 *   szkodzi. Część trzyma rodzinę razem i jest warta
 *   zachowania mimo nieaktualności — rozróżnik to
 *   pytanie, czy nazwa czemuś służy, czy tylko
 *   rozlicza,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zmieni
 *   nazw. Może za to sprawić, że „obiad” przestanie
 *   być przywiązany do godziny, bo da się go zrobić
 *   wtedy, kiedy ktoś faktycznie wraca.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DWÓCH GMIN O TEJ SAMEJ NAZWIE, IDĄCYCH
 *   W PRZECIWNE STRONY — figura zajęta (Bochnia).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam dwie gminy o jednej nazwie istnieją
 *   RÓWNOLEGLE DZIŚ; tu podział był CZTEROLETNI
 *   I ZNIESIONY, a został po nim wyłącznie wyraz.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód). Tu nazwa nie obiecuje — tylko
 *   przetrwała.
 * — ⚠⚠⚠ ZERO WSZYSTKIEGO NAZWANEGO OD JEDNEJ RZECZY —
 *   kąt zajęty (Kłodawa).
 * — ⚠⚠⚠ ZERO SKRÓTU, KTÓRY ZJADA RÓŻNICĘ — kąt zajęty
 *   (Kostrzyn).
 * — ⚠⚠ ZERO SCALONEGO Z TRZECH — kąt zajęty (Koźmin).
 * — ⚠⚠ ZERO WZIĘTEGO Z CZĘŚCI, A CAŁOŚĆ ZOSTAŁA —
 *   kąt zajęty (Krzyż Wielkopolski, TA SAMA FALA).
 *   ⚠⚠⚠ MUSZĘ UWAŻAĆ: oba miasta są w tym samym
 *   powiecie i oba mają wątek podziału. TAM chodzi
 *   o wydzielenie części, która urosła; TU o nazwę,
 *   która przeżyła zniesiony podział. NIE MIESZAM.
 * — ⚠⚠ ZERO PRZERWY, KTÓRA NIE KASUJE POCZĄTKU — kąt
 *   zajęty (Trzcianka).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA RODZINNYCH TRADYCJI.
 *   Sekcja ma dawać prawo do zmiany nazwy, nie nakaz.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO I STRZELECKIEGO · ZERO POSTACI
 *   POLITYCZNYCH · ZERO CMENTARZY I MAUZOLEÓW ·
 *   ZERO ALKOHOLU · ZERO POWODZI · ZERO BEZROBOCIA ·
 *   ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ liczby wsi ani sołectw.
 * — NIE WYBIERAM między 1108 a 1239 r.
 * — NIE PODAJĘ jednego roku praw miejskich.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PODAJĘ pałacu ani wieży.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE TWIERDZĘ, że Wieleń Północny jest odrębną
 *   miejscowością.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wieleń leży w powiecie czarnkowsko-trzcianeckim,
 *   liczy 5 629 mieszkańców (GUS, 31.12.2024) na
 *   4,5 km²; cała gmina miejsko-wiejska to 11 604 osoby
 *   na 430,0 km², czyli 27 osób na kilometr kwadratowy,
 *   a lasy zajmują 66% terenu gminy,
 * — pierwsza wzmianka podawana jest rozbieżnie: jedne
 *   źródła mówią o 1108 r., inne o 1239 r.,
 * — prawa miejskie miasto otrzymało między 1331
 *   a 1350 rokiem — źródła nie podają jednego roku,
 * — Wieleń był siedzibą powiatu w latach 1887–1920,
 *   a budynek starostwa pochodzi z 1895 r.,
 * — w 1973 r. z Wielenia utworzono dwie odrębne gminy,
 *   Wieleń i Wieleń Północny, a w 1977 r. podział
 *   zniesiono; nazwa „Wieleń Północny" funkcjonuje
 *   do dziś jako określenie części miasta po północnej
 *   stronie Noteci,
 * — w gminie leżą m.in. Rosko, Miały, Gulcz, Mężyk,
 *   Herburtowo, Dzierżążno Małe i Wielkie, Kocień
 *   Wielki, Marianowo i Ogrodzieniec,
 * — Wieleń Zaobrzański to odrębna wieś w gminie
 *   Przemęt, powiat wolsztyński, w tym samym
 *   województwie, liczy 200 mieszkańców i leży
 *   ok. 105 km na południe.
 */
export const WIELEN: CityContent = {
  slug: "wielen",
  h1: "Thermomix Wieleń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wieleń — cena i prezentacja",
  seoDescription:
    "Thermomix w Wieleniu w powiecie czarnkowsko-trzcianeckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wieleń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wieleniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wielenia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi i osad w gminie.",

  highlights: highlightyStandardowe("Wieleń"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Podział trwał cztery lata. Nazwa została na stałe.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wieleniu – jak wygląda prezentacja?",
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
      id: "nazwa-zostala",
      heading: "Podział zniesiony, nazwa została",
      paragraphs: [
        "W 1973 roku z jednego Wielenia zrobiono dwie odrębne gminy: Wieleń i Wieleń Północny. W 1977 roku podział zniesiono i znowu był jeden Wieleń.",
        "Została nazwa. „Wieleń Północny” funkcjonuje do dziś — już nie jako gmina, tylko jako określenie części miasta po północnej stronie Noteci. Ma to całkiem praktyczny skutek: obiekty opisane w wykazach jako leżące „w Wieleniu Północnym” bywają szukane poza Wieleniem, chociaż leżą w Wieleniu.",
        "Cztery lata trwał układ. Nazwa trwa od 1977 roku do dziś.",
        "Piszę o tym, bo w kuchniach mam z tym do czynienia częściej niż z czymkolwiek innym. Zostają nam nazwy układów, których już nie ma.",
        "„Obiad” o czternastej — w domu, w którym o czternastej nie ma nikogo. „Niedzielne gotowanie” — przy pracy zmianowej, gdzie niedziela bywa dniem roboczym. „Danie dla dzieci” — dla dzieci, które mają po dwadzieścia lat i same robią sobie kolację. „Zapasy na tydzień” — od czasów, gdy sklep był daleko, a nie za rogiem.",
        "Te nazwy nie są niewinne, bo pod nimi planuje się konkretne rzeczy: zakupy, godziny, ilości. I poczucie winy, że się nie zdążyło z obiadem na czternastą — do układu, który dawno się rozwiązał.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o dwóch gminach o tej samej nazwie, które istnieją równolegle i idą w różne strony. Tu jest inaczej — podział był czteroletni i został zniesiony, a przetrwało po nim wyłącznie słowo.",
        "Ruch jest jeden i można go zrobić przy stole, bez żadnych zmian w kuchni. Powiedzcie na głos, jak wygląda teraz zwykły dzień: kto kiedy wraca, kto je sam, kto w ogóle nie je w domu. A potem sprawdźcie, które słowo z Waszego kuchennego słownika opisuje układ, który już był, a nie ten, który jest.",
        "Uczciwie o drugiej stronie, bo nie każda stara nazwa szkodzi. Część trzyma ludzi razem i jest warta zachowania właśnie dlatego, że jest nieaktualna — „niedzielny obiad” raz w miesiącu bywa jedynym powodem, żeby wszyscy przyjechali. Rozróżnik jest jeden: czy nazwa czemuś służy, czy tylko rozlicza. Tę pierwszą zostawcie. Z tą drugą nie macie żadnego zobowiązania.",
        "I uczciwie o sprzęcie. Thermomix nie zmieni ani jednej nazwy w Waszym domu. Może za to odwiązać „obiad” od godziny: danie gotuje się z ustawioną temperaturą i mieszaniem, bez stania przy garnku, więc da się je zrobić wtedy, kiedy ktoś faktycznie wraca — a nie wtedy, kiedy tak było kiedyś.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wieleniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o której u Was realnie się je — nie o której „powinno się”. Pod to dobieram dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wieleniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Wielenia",
      paragraphs: [
        "Wieleń leży w powiecie czarnkowsko-trzcianeckim i liczy 5 629 mieszkańców (GUS, 31.12.2024) na 4,5 kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo rozbieżność między liczbą ze źródła a ilorazem jest tu największa, jaką widziałam, i wynika z zaokrąglenia powierzchni. Cała gmina miejsko-wiejska to 11 604 osoby na 430 kilometrach kwadratowych, czyli dwadzieścia siedem osób na kilometr, a lasy zajmują dwie trzecie jej terenu — dokładnie sześćdziesiąt sześć procent. Pierwsza wzmianka podawana jest rozbieżnie: jedne źródła mówią o 1108 roku, inne o 1239, i nie wybieram między nimi. Prawa miejskie przypadły na przedział między 1331 a 1350 rokiem — jednego roku nie podaje żadne źródło. W latach 1887–1920 Wieleń był siedzibą powiatu, a budynek starostwa pochodzi z 1895 roku. W gminie leżą między innymi Rosko, Miały, Gulcz, Mężyk, Herburtowo, Marianowo i Kocień Wielki.",
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

  districtsHeading: "Do których części Wielenia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Noteci, także do części nazywanej Wieleniem Północnym — i do wszystkich wsi i osad w gminie: Roska, Miałów, Gulcza, Mężyka, Herburtowa, Marianowa, Kocienia Wielkiego, Dzierżążna Małego i Wielkiego, Białej, Brzeźna, Dębogóry, Lipinek, Mniszka, Osiny, Zawady, Zielonowa, Wrzeszczyny i pozostałych. Wszędzie bez dopłaty.",
    "Dwie uwagi praktyczne. Wieleń Północny to nie odrębna miejscowość, tylko część miasta — nazwa została po gminie, która istniała w latach 1973–1977. I druga: w tym samym województwie leży wieś Wieleń Zaobrzański w powiecie wolsztyńskim, około stu pięciu kilometrów na południe i niemal na tej samej długości geograficznej, więc przy umawianiu warto dopowiedzieć powiat.",
  ],
  districts: [],

  nearbyHeading: "Poza Wieleń też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Krzyża Wielkopolskiego, Czarnkowa, Trzcianki, Sierakowa, Wronek i Międzychodu — wszędzie bezpłatnie, tak samo jak w samym Wieleniu.",
  ],
  nearbyTowns: ["Krzyż Wielkopolski", "Czarnków", "Trzcianka", "Sieraków", "Wronki", "Międzychód"],

  about: blokOMnie("do Wielenia", "w Wieleniu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wielenia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta po obu stronach Noteci i do wszystkich wsi i osad w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: mówi się „do Wielenia” i „w Wieleniu”, a przymiotnik brzmi „wieleński”; miękkie „ń” przechodzi tu w „ni”, więc forma „Wieleńa” jest błędna, podobnie jak mianownik „Wielen” bez kreski. I praktyczna: w tym samym województwie jest jeszcze Wieleń Zaobrzański w powiecie wolsztyńskim, więc warto dopowiedzieć powiat.",
    },
    ...faqWspolne("w Wieleniu"),
    {
      question: "Czy Wieleń Północny to osobna miejscowość?",
      answer:
        "Nie, to część miasta Wieleń po północnej stronie Noteci — i nazwa z ciekawą historią. W 1973 roku z jednego Wielenia utworzono dwie odrębne gminy, Wieleń i Wieleń Północny, a w 1977 podział zniesiono. Układ trwał cztery lata, nazwa została do dziś. Ma to praktyczny skutek: obiekty opisane w wykazach jako leżące „w Wieleniu Północnym” bywają szukane poza Wieleniem, choć leżą w Wieleniu. Ja dojeżdżam bezpłatnie do obu części miasta, więc przy umawianiu nie musicie tego rozstrzygać.",
    },
    {
      question: "U nas nikt nie je o tej samej godzinie. Czy Thermomix w czymś pomoże?",
      answer:
        "W jednej konkretnej rzeczy: odwiązuje obiad od godziny. Danie gotuje się z ustawioną temperaturą i mieszaniem, bez stania przy garnku, więc może powstać wtedy, kiedy ktoś faktycznie wraca — a nie wtedy, kiedy „się powinno”. Nazw urządzenie nie zmieni; to robi się przy stole, rozmową o tym, jak wygląda zwykły dzień teraz, a nie jak wyglądał kiedyś. Warto przy tym oddzielić nazwy, które czemuś służą — na przykład niedzielny obiad raz w miesiącu, który jest jedynym powodem, żeby wszyscy przyjechali — od tych, które już tylko rozliczają.",
    },
  ],

  geo: { lat: 52.8922, lng: 16.1736 },
};
