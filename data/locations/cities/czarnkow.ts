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
 * CZARNKÓW — powiat czarnkowsko-trzcianecki (siedziba),
 * woj. wielkopolskie. ⚠⚠⚠ GMINA MIEJSKA — miasto jest
 * osobną gminą.
 * MIASTO: 9 838 mieszkańców (GUS 31.12.2024), 10,2 km²,
 *   gęstość 967,4 os./km² [ZW — domyka się po cofnięciu
 *   zaokrąglenia powierzchni do 10,17 km²]. PODAJĘ.
 *   ⚠⚠ BIP powiatu podaje 9,7 km² i ludność z 2007 r.
 *   NIE UŻYWAM TYCH DANYCH.
 * ⚠⚠⚠ ODRĘBNA GMINA WIEJSKA CZARNKÓW — 11 167 osób,
 *   347,5 km², gęstość 32 os./km² [ZW — DOMYKA SIĘ:
 *   32,13 → 32]. PODAJĘ.
 *   ⚠⚠⚠ MA SIEDZIBĘ W MIEŚCIE, KTÓRE DO NIEJ NIE NALEŻY.
 *   I JEST LUDNIEJSZA OD MIASTA. ⚠⚠ TEJ PROPORCJI
 *   NIE ROBIĘ KĄTEM.
 *   ⚠⚠⚠ NIGDY „gmina Czarnków liczy 11 167 mieszkańców"
 *   bez słowa WIEJSKA.
 *   MIEJSCOWOŚCI GMINY WIEJSKIEJ: ponad trzydzieści
 *   [SP — źródło deklaruje 34, odczytano 25].
 * POWIAT: 83 182 osoby, 1 806 km², 46 os./km², 8 gmin.
 *   ⚠ WŁADZE POWIATU URZĘDUJĄ W CZARNKOWIE
 *   I W TRZCIANCE (miasto opisane w tym cyklu).
 * WYSOKOŚĆ: ok. 50 m n.p.m. Rzeka NOTEĆ — miasto
 *   na LEWYM brzegu. Skraj Puszczy Noteckiej.
 * ⚠ GEO: 52,9053 / 16,5657.
 *
 * ⚠⚠ ODMIANA — Ó→O:
 *   D. do CZARNKOWA · Ms. w CZARNKOWIE ·
 *   N. Czarnkowem.
 *   ⚠⚠⚠ BŁĄD: „do Czarnkowu".
 *   Przymiotnik miasta: CZARNKOWSKI.
 *   ⚠⚠⚠ PRZYMIOTNIK POWIATU: CZARNKOWSKO-TRZCIANECKI
 *   — NIGDY „czarnkowsko-trzciankowski".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠⚠ NAZWISKA RODU (Czarnkowscy) NIE MIESZAM
 *   z przymiotnikiem miejskim.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — miasto CZARNKÓW vs gmina wiejska CZARNKÓW
 *     (ROZGRANICZAM W FAQ),
 *   — CZARNKOWO (inne województwa) — NIE MYLIĆ,
 *   — wieś GÓRA NAD NOTECIĄ w gminie wiejskiej ≠ miasto
 *     GÓRA w dolnośląskim (opisane w tym cyklu).
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1025 r. ⚠⚠⚠ [SP — data
 *     legendarna, niepotwierdzona dokumentem]. PISZĘ
 *     „podawana bywa na 1025 rok, ale nie potwierdza
 *     jej żaden dokument".
 *   — 1107 ALBO 1108 r. — zdobycie warowni „Carncou"
 *     przez Bolesława Krzywoustego ⚠ [SP, rozjazd
 *     o rok]. ⚠⚠ SAMEGO ZDOBYCIA NIE OPISUJĘ — wątek
 *     militarny. PODAJĘ WYŁĄCZNIE, ŻE NAZWA POJAWIA SIĘ
 *     W ŹRÓDŁACH NA POCZĄTKU XII W.
 *   — koniec XIII w. — Władysław Łokietek nadał
 *     Czarnków Nałęczom.
 *   — 1. połowa XIV w. — lokacja na prawie magdeburskim.
 *   — 1397 r. — data podawana jako uzyskanie praw
 *     miejskich ⚠ [SP — rozjazd z lokacją].
 *     PISZĘ OBA I MÓWIĘ, ŻE ŹRÓDŁA SIĘ RÓŻNIĄ.
 *     ⚠⚠ TEJ ROZBIEŻNOŚCI NIE ROBIĘ KĄTEM.
 *   — Czarnkowscy władali miastem do 1727 r.;
 *     siedzibą powiatu od 1816 r.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NOWY MOST NA STARYM PRZĘŚLE:
 *   MOST NA NOTECI W CZARNKOWIE:
 *     — zbudowany w 1953 r.,
 *     — ⚠⚠⚠ Z WYKORZYSTANIEM PRZĘSŁA MOSTU
 *       FORDOŃSKIEGO Z 1891 R. — czyli elementu
 *       przywiezionego z przeprawy przez WISŁĘ.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1953 − 1891 = 62 LATA.
 *   CZĘŚĆ NOŚNA JEST STARSZA OD MOSTU, KTÓRY TWORZY,
 *   I POCHODZI Z INNEJ RZEKI. To jest cały kąt.
 *   ⚠⚠⚠ POWODÓW PRZENIESIENIA NIE PODAJĘ I NIE
 *   SPEKULUJĘ — prowadziłyby do lat wykluczonych
 *   w całym cyklu. ANI SŁOWA.
 *   ⚠⚠ NIE OPISUJĘ losów mostu Fordońskiego. PODAJĘ
 *   WYŁĄCZNIE: rok 1891 i to, że stał nad Wisłą.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — skocznia narciarska — jedyna na Niżu Polskim,
 *   w mieście leżącym na ok. 50 m n.p.m.
 *   ⚠ WYMIARÓW I REKORDU NIE USTALONO — NIE PODAJĘ.
 * — ratusz murowany, trzykondygnacyjny: 4. ćwierć
 *   XIX w. Poczta 1893, szpital 1895, gazownia
 *   1900–1902, starostwo ok. 1910, dworzec 1911.
 *   ⚠⚠ CIĄGU TYCH DAT NIE ROBIĘ KĄTEM.
 * — ⚠⚠ WÓD GEOTERMALNYCH NIE PODAJĘ — źródło podaje
 *   dwie wartości w jednym akapicie.
 * — ⚠⚠ CZOŁPY NIE WYMIENIAM — jedno źródło.
 * — ⚠⚠ WYSOKOŚCI WZGÓRZ (70–90 m nad doliną)
 *   NIE PODAJĘ — jedno źródło.
 * — ⚠ ODLEGŁOŚCI: źródła mieszają konwencje (Trzcianka
 *   23 km drogą vs 16,7 km w linii prostej).
 *   NIE PODAJĘ ŻADNEJ.
 *
 * KĄT: NOWE NA STARYM NOŚNYM
 * — o tym, że przy przebudowie nie trzeba robić
 * wszystkiego od nowa. Kąt z czarnkowskiego mostu:
 * powstał w 1953 r. na przęśle z 1891 r., przywiezionym
 * z przeprawy przez Wisłę.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że most na Noteci zbudowano w 1953 r., ale jego
 *   przęsło pochodzi z 1891 r. i z mostu nad Wisłą,
 * — ŻE CZĘŚĆ NOŚNA JEST O SZEŚĆDZIESIĄT DWA LATA
 *   STARSZA OD MOSTU I Z INNEJ RZEKI. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE POWODÓW NIE PODAJĘ I NIE ZGADUJĘ,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: przy każdej przebudowie
 *   nawyków można zostawić element nośny — metodę
 *   po mamie, jedno stare naczynie, porę posiłku,
 *   która działa od lat,
 * — ⚠⚠ ŻE WŁAŚNIE DLATEGO „NOWE POCZĄTKI" SIĘ SYPIĄ:
 *   ludzie wymieniają jednocześnie pokład i przęsło,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zmieniając cokolwiek
 *   w kuchni, nazwij jeden element, który zostaje
 *   nietknięty. To jest Twoje przęsło,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: przęsło z innej rzeki
 *   czasem nie pasuje do nowego obciążenia. Metoda
 *   z domu, w którym gotowało się dla siedmiu osób,
 *   może nie działać przy dwóch — i wtedy trzeba ją
 *   wymienić, choć jest w dobrym stanie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest pokładem,
 *   nie przęsłem. MÓWIĘ WPROST, że kładzie się je
 *   na istniejącym nawyku i że samo nawyku nie
 *   zastąpi.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO CO NAPRAWDĘ TRZYMA KONSTRUKCJĘ — kąt
 *   zajęty (Nowy Tomyśl). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam pytanie
 *   brzmiało, CO niesie ciężar; tu wiadomo, co niesie,
 *   a pytanie brzmi, SKĄD TO WZIĘTO — bo z drugiej ręki
 *   i z innego miejsca. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty
 *   (Trzcianka, to samo miasto powiatowe!). ⚠⚠ TAM
 *   CHODZI O CZAS, TU O POCHODZENIE CZĘŚCI. PILNOWAĆ.
 * — ⚠⚠⚠ ZERO NIE KAŻDE PRZĘSŁO MA TĘ SAMĄ ROZPIĘTOŚĆ —
 *   kąt zajęty (Ścinawa). ⚠⚠⚠ TAM TEŻ JEST PRZĘSŁO
 *   I MOST. ŻADNEGO PORÓWNYWANIA ROZPIĘTOŚCI. NIE
 *   PODAJĘ ANI JEDNEGO WYMIARU PRZĘSŁA.
 * — ⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów).
 * — ⚠⚠ ZERO DROGIE TAM, GDZIE KRAWĘDŹ — kąt zajęty
 *   (Świerzawa).
 * — ⚠⚠ ZERO DRUGIE OBOK ZAMIAST NAPRAWY STAREGO — kąt
 *   zajęty (Grodzisk Wielkopolski).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I LAT WOJNY · ZERO
 *   PRZESIEDLEŃ I NIEMIECKICH NAZW · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO I ZDOBYWANIA
 *   WAROWNI · ZERO POWODZI I POŻARÓW JAKO ŻYWIOŁU ·
 *   ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „gmina Czarnków" bez słowa WIEJSKA,
 *   gdy chodzi o gminę obwarzankową.
 * — NIE UŻYWAM danych miasta z BIP powiatu.
 * — NIE PODAJĘ roku 1025 jako pewnego.
 * — NIE OPISUJĘ zdobycia warowni.
 * — NIE PODAJĘ powodów przeniesienia przęsła.
 * — NIE PODAJĘ wymiarów przęsła ani mostu.
 * — NIE PODAJĘ wymiarów skoczni.
 * — NIE PODAJĘ wód geotermalnych ani wysokości wzgórz.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Czarnków jest jedną z dwóch siedzib powiatu
 *   czarnkowsko-trzcianeckiego i osobną gminą miejską;
 *   leży na lewym brzegu Noteci, na wysokości około
 *   50 m n.p.m., na skraju Puszczy Noteckiej,
 * — miasto liczy 9 838 mieszkańców (GUS, 31.12.2024)
 *   na 10,2 km², czyli 967,4 osoby na kilometr
 *   kwadratowy; otaczająca je gmina wiejska Czarnków
 *   jest odrębną jednostką: 11 167 osób na 347,5 km²,
 *   czyli 32 osoby na kilometr, i ponad trzydzieści
 *   miejscowości,
 * — nazwa pojawia się w źródłach na początku XII w.;
 *   pierwszą wzmiankę podaje się czasem na 1025 r.,
 *   ale nie potwierdza jej żaden dokument. Pod koniec
 *   XIII w. Władysław Łokietek nadał Czarnków Nałęczom,
 *   lokacja na prawie magdeburskim nastąpiła
 *   w 1. połowie XIV w., a jako datę uzyskania praw
 *   miejskich podaje się też 1397 r. Ród Czarnkowskich
 *   władał miastem do 1727 r., siedzibą powiatu jest
 *   ono od 1816 r.,
 * — most na Noteci zbudowano w 1953 r., wykorzystując
 *   przęsło mostu Fordońskiego z 1891 r., czyli
 *   przeprawy przez Wisłę,
 * — w mieście działa jedyna skocznia narciarska na Niżu
 *   Polskim,
 * — murowany, trzykondygnacyjny ratusz pochodzi
 *   z 4. ćwierci XIX w., poczta z 1893 r., szpital
 *   z 1895 r., gazownia z lat 1900–1902, starostwo
 *   z około 1910 r., a dworzec z 1911 r.
 */
export const CZARNKOW: CityContent = {
  slug: "czarnkow",
  h1: "Thermomix Czarnków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czarnków — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Czarnkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czarnków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czarnkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Czarnkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Czarnków"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Most z 1953 roku. Przęsło z 1891 i z innej rzeki.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czarnkowie – jak wygląda prezentacja?",
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
      id: "nowe-na-starym",
      heading: "Nowe na starym nośnym",
      paragraphs: [
        "Most na Noteci w Czarnkowie zbudowano w 1953 roku. Jego przęsło jest z 1891 — i pochodzi z mostu Fordońskiego, czyli z przeprawy przez Wisłę.",
        "Sześćdziesiąt dwa lata różnicy. Część nośna jest starsza od mostu, który tworzy, i przyjechała z innej rzeki. Powodów nie podaję, bo ich nie znam i nie zamierzam zgadywać.",
        "Zostaje sama zasada, a jest to jedna z najbardziej praktycznych, jakie znam: przy przebudowie nie trzeba robić wszystkiego od nowa. Nośne może być używane.",
        "W kuchni ta zasada rozstrzyga o powodzeniu każdej zmiany.",
        "Bo element nośny zwykle już macie. Sposób robienia jednej zupy, którym umiecie posługiwać się bez myślenia. Pora, o której wszyscy siadają do stołu i która trzyma się od lat. Jeden garnek, dwudziestoletni, po który sięga się odruchowo. Blacha, na której ciasto zawsze wychodzi.",
        "I właśnie dlatego „nowe początki” tak często się sypią: ludzie wymieniają jednocześnie pokład i przęsło. Nowe przepisy, nowy plan, nowy sprzęt, nowa pora posiłków, wszystko od poniedziałku. Nie ma na czym oprzeć pierwszego tygodnia.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że to, co niesie ciężar, bywa niewidoczne. Tam pytanie brzmiało, CO niesie. Tu wiadomo, co niesie — pytanie brzmi, skąd to wzięto. Bo przęsło może być z drugiej ręki i to nie wada.",
        "Ruch jest jeden i trwa minutę. Zmieniając cokolwiek w kuchni, nazwij jeden element, który zostaje nietknięty. To jest Wasze przęsło. Wszystko nowe kładzie się na nim.",
        "Uczciwie o drugiej stronie: przęsło z innej rzeki czasem nie pasuje do nowego obciążenia. Metoda z domu, w którym gotowało się dla siedmiu osób, może nie działać przy dwóch. Nawyk zbudowany przy pracy na etacie rozsypie się przy pracy zmianowej. Wtedy przęsło trzeba wymienić, choć jest w dobrym stanie — i to też jest uczciwa decyzja.",
        "I uczciwie o sprzęcie. Thermomix jest pokładem, nie przęsłem. Kładzie się go na nawyku, który już działa, i wtedy potrafi zmienić bardzo dużo. Sam nawyku nie zastąpi i nie udźwignie kuchni, w której nie ma na czym stanąć — to trzeba wiedzieć przed zakupem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czarnkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co w Waszej kuchni działa od lat i czego nie chcecie ruszać. Od tego zaczniemy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czarnkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Czarnkowa",
      paragraphs: [
        "Czarnków jest jedną z dwóch siedzib powiatu czarnkowsko-trzcianeckiego i osobną gminą miejską. Leży na lewym brzegu Noteci, na wysokości około pięćdziesięciu metrów nad poziomem morza, na skraju Puszczy Noteckiej. Miasto liczy 9 838 mieszkańców (GUS, 31.12.2024) na 10,2 kilometra kwadratowego, czyli dziewięćset sześćdziesiąt siedem osób na kilometr. Otaczająca je gmina wiejska Czarnków to osobna jednostka — 11 167 osób na 347,5 kilometra, czyli trzydzieści dwie osoby na kilometr, i ponad trzydzieści miejscowości. Nazwa miasta pojawia się w źródłach na początku dwunastego wieku; pierwszą wzmiankę podaje się czasem na 1025 rok, ale nie potwierdza jej żaden dokument. Pod koniec trzynastego wieku Władysław Łokietek nadał Czarnków Nałęczom, lokacja na prawie magdeburskim nastąpiła w pierwszej połowie czternastego wieku, a jako datę uzyskania praw miejskich podaje się też 1397 — źródła nie są tu zgodne. Ród Czarnkowskich władał miastem do 1727 roku, siedzibą powiatu jest ono od 1816. W mieście działa jedyna skocznia narciarska na Niżu Polskim. Murowany, trzykondygnacyjny ratusz pochodzi z ostatniej ćwierci dziewiętnastego wieku, poczta z 1893 roku, szpital z 1895, gazownia z lat 1900–1902, starostwo z około 1910, a dworzec z 1911.",
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

  districtsHeading: "Do których części Czarnkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — nad Noteć, do centrum i na osiedla na zboczach — bez dopłaty.",
    "Dojeżdżam też do wsi otaczającej gminy wiejskiej: Śmieszkowa, Kuźnicy Czarnkowskiej, Romanowa Dolnego i Górnego, Sarbi i Sarbki, Gębic, Białężyna, Brzeźna, Ciszkowa, Walkowic, Jędrzejewa i pozostałych. Przy umawianiu warto podać pełną nazwę — jedna ze wsi nazywa się Góra nad Notecią i nie ma nic wspólnego z miastem Górą.",
  ],
  districts: [],

  nearbyHeading: "Poza Czarnków też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Trzcianki, Ujścia, Wielenia, Wronek i Chodzieży — wszędzie bezpłatnie, tak samo jak w samym Czarnkowie.",
  ],
  nearbyTowns: ["Trzcianka", "Ujście", "Wieleń", "Wronki", "Chodzież"],

  about: blokOMnie("do Czarnkowa", "w Czarnkowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czarnkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w otaczającej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: mówi się „do Czarnkowa”, a nie „do Czarnkowu”, a przymiotnik powiatu brzmi „czarnkowsko-trzcianecki” — nie „czarnkowsko-trzciankowski”. I warto podać nazwę wsi, bo miasto Czarnków i gmina wiejska Czarnków to dwie osobne jednostki.",
    },
    ...faqWspolne("w Czarnkowie"),
    {
      question: "Chcę zmienić sposób gotowania w domu, ale za każdym razem po tygodniu wracam do starego. Dlaczego?",
      answer:
        "Bo prawdopodobnie wymieniasz wszystko naraz. Most na Noteci w Czarnkowie zbudowano w 1953 roku, ale jego przęsło jest z 1891 i pochodzi z przeprawy przez Wisłę — część nośna jest starsza od mostu i z drugiej ręki, i to nie jest wada. Zmieniając cokolwiek w kuchni, nazwij jeden element, który zostaje nietknięty: porę posiłku, jedno danie robione bez myślenia, jeden garnek. Na tym dopiero kładź nowe. Nowe początki sypią się wtedy, gdy nie ma na czym stanąć.",
    },
    {
      question: "Czy Thermomix wprowadzi w domu nowy porządek?",
      answer:
        "Sam z siebie nie — jest pokładem, nie przęsłem. Kładzie się go na nawyku, który już działa: na stałej porze obiadu, na zakupach robionych raz w tygodniu, na daniach, które i tak gotujecie. Wtedy potrafi zmienić bardzo dużo. W kuchni, w której nie ma na czym stanąć, będzie tylko kolejnym sprzętem. Na prezentacji pytam najpierw, co u Was działa od lat, i od tego zaczynam.",
    },
  ],

  geo: { lat: 52.9053, lng: 16.5657 },
};
