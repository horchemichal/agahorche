import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * CHODECZ — powiat włocławski, woj. kujawsko-pomorskie, KUJAWY.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 681 mieszkańców (GUS 31.12.2024), 1,9 km²,
 * gęstość 884,7 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 5 395 osób, 122,1 km²,
 * 45 os./km².
 * ⚠ LICZBY WSI W GMINIE NIE PODAJĘ — dostępna wartość
 *   (63 wsie i osady) pochodzi ze spisu z 2006 r.
 *   Piszę „wsie w gminie". Liczby sołectw NIE USTALONO.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ CHODECZ.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 *
 * ⚠⚠ DWA NIEZALEŻNE BŁĘDY W DANYCH PODSTAWOWYCH —
 *   NAJGORSZY PRZYPADEK W CAŁEJ FALI:
 *   1. STRONA URZĘDU podaje „6911 osób" wobec 5 395 u GUS,
 *      czyli ZAWYŻENIE O 28,1 %. Ta sama strona pisze
 *      o „blisko 7 tysiącach mieszkańców" i podaje
 *      powierzchnię miasta 1,31 km² wobec 1,9 u GUS
 *      (zaniżenie o 31 %).
 *   2. EN.WIKIPEDIA podaje w infoboksie 2 244 (2021),
 *      1,39 km² i gęstość 1 610/km². Wobec GUS
 *      to ZAWYŻENIE LUDNOŚCI O 33,5 %. Kontrola krzyżowa:
 *      w 2006 r. miasto miało 1 936 osób, a spadek
 *      2002–2024 wyniósł 13,4 % — przy takim trendzie
 *      2 244 w roku 2021 jest NIEMOŻLIWE.
 *   UŻYWAM WYŁĄCZNIE GUS: MIASTO 1 681, GMINA 5 395.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠ GEO: 52,4047 / 19,0275 — przeliczone z 52°24′17″N
 *   19°01′39″E. en.wikipedia podaje tylko trzy miejsca
 *   po przecinku.
 *
 * ⚠⚠⚠ ODMIANA — NAJWAŻNIEJSZA RZECZ JĘZYKOWA
 *   NA TEJ STRONIE:
 *   MIEJSCOWNIK BRZMI „W CHODCZU", NIE „W CHODECZU".
 *   Nazwa ma E RUCHOME, które ginie przy odmianie.
 *   D. CHODCZA, C. CHODCZOWI, N. CHODCZEM,
 *   Ms. W CHODCZU, przym. CHODECKI.
 *   POTWIERDZENIA: hasło PWN zapisane „Chodecz -d•cza"
 *   (kropka oznacza e ruchome); prof. Jan Miodek wprost:
 *   „z Chodcza, do Chodcza, Chodczem, w Chodczu";
 *   słownik ortograficzny; uzus lokalny („parafia
 *   w Chodczu").
 *   ⚠⚠ FORMA „W CHODECZU" JEST BŁĘDNA. Automatyczne
 *   streszczarki odczytują „-d•cza" jako „Chodecza" —
 *   to typowy błąd maszynowy, nie wariant normatywny.
 *   PRZED PUBLIKACJĄ SPRAWDZIĆ KAŻDE WYSTĄPIENIE.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 * ⚠⚠ RYZYKA POMYLENIA: CHODECZEK i CHODECZEK-WIEŚ
 *   to DWIE ODRĘBNE MIEJSCOWOŚCI W TEJ SAMEJ GMINIE
 *   (gmina powstała 1.01.1973 z połączenia miasta
 *   z gromadą Chodeczek); HUTA CHODECKA to trzecia.
 *   CHODZIEŻ to miasto powiatowe w wielkopolskim.
 *   CHOCZ i CHODÓW (wielkopolskie) wychodzą w wynikach
 *   na zapytanie o gminę Chodecz.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1442 — nadanie praw miejskich.
 * — koniec 1812 — utrata praw miejskich.
 * — ⚠⚠⚠ RDZEŃ KĄTA — 2 KWIETNIA 1822:
 *   PRZYWRÓCENIE PRAW MIEJSKICH, ALE Z ZALICZENIEM
 *   DO „MIAST V RZĘDU" — najniższej kategorii
 *   w ówczesnej klasyfikacji administracyjnej.
 *   ⭐ JEDYNA DATA DZIENNA TEGO MIASTA.
 *   ⚠ TO NIE BYŁA OCENA MIASTA, TYLKO KLASYFIKACJA
 *   WEDŁUG WIELKOŚCI I DOCHODÓW. Tak to opisuję
 *   i nie dorabiam do tego żadnej krzywdy ani dumy.
 * — 1867 albo 1870 — ponowna utrata praw, zamiana
 *   na osadę. ⚠⚠ ŹRÓDŁA ROZBIEŻNE — NIE ROZSTRZYGAM,
 *   piszę „w drugiej połowie XIX wieku".
 *   ⚠⚠⚠ BEZ POWODU — en.wikipedia podaje go wprost
 *   jako karę po powstaniu styczniowym. TWARDA GRANICA.
 * — 1921 — ponowne nadanie praw miejskich.
 * — 1666 — dokument Jana Kazimierza dodał do czterech
 *   wcześniejszych jarmarków jeszcze trzy: Z 4 NA 7.
 * — 1776 — Stanisław August nadał prawo odbywania
 *   SZEŚCIU JARMARKÓW rocznie.
 *   ⚠ DNIA TYGODNIA TARGU I DAT JARMARKÓW NIE USTALONO.
 * — 1860 — szosa sieradzko-włocławska.
 * — 1862 — ukończenie linii kolejowej warszawsko-bydgoskiej,
 *   która przebiega obok; najbliższa stacja to KALISKA
 *   KUJAWSKIE. ⚠ MIASTO NIE MA WŁASNEJ STACJI.
 * — 1937–1938 — zbudowano MLECZARNIĘ.
 *   ⚠⚠ ŹRÓDŁO WYMIENIA JĄ RAZEM Z RZEŹNIĄ. PODAJĘ
 *   WYŁĄCZNIE MLECZARNIĘ. TWARDA GRANICA.
 * — 1969 — kąpielisko nad Jeziorem Chodeckim;
 *   1972 — amfiteatr.
 * — RZEMIOSŁO, jedyne policzalne dane: 1981 —
 *   17 zakładów rzemieślniczych i 27 zatrudnionych;
 *   1985 — 21 zakładów i 30 pracowników.
 * — Kościół św. Dominika, NEOGOTYK, 1849–1850;
 *   kaplica św. Jakuba, PÓŹNY BAROK, 1799.
 * — ⚠ JEZIORO CHODECKIE wymieniam BEZ LICZB. Dostępne
 *   wartości (powierzchnia 37,5–40,3 ha — rozbieżne
 *   w samym źródle, głębokość 20,5 m, linia brzegowa
 *   4 050 m, 106 m n.p.m.) pochodzą z jednego słabego
 *   źródła i wymagają drugiego potwierdzenia.
 *   NIE PODAJĘ ICH.
 * — ⚠ GAZOWNI, WODOCIĄGÓW, ELEKTROWNI, CEGIELNI, MŁYNÓW
 *   I WIATRAKÓW NIE USTALONO. Liczby cechów
 *   i rzemieślników sprzed rozbiorów — NIE USTALONO.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Chodecz. Sprawdzono wszystkie dziesięć kategorii
 *   wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ Chodecz leży na Kujawach, więc przyciąga
 *   kilkadziesiąt produktów z przymiotnikiem „kujawski"
 *   (żur kujawski, czarnina kujawska, podpiwek kujawski,
 *   zakwas kujawski i inne). WSZYSTKIE MAJĄ ZASIĘG
 *   REGIONALNY, a ich karty NIE WYMIENIAJĄ ŻADNEJ GMINY.
 *   NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: MIASTO V RZĘDU — oznaczenia, które opisują
 * właściwość, a nie jakość.
 * Kąt od 2 kwietnia 1822 r.: Chodecz odzyskał wtedy prawa
 * miejskie i został zaliczony do miast piątego rzędu.
 * Brzmi jak ocena, a było klasyfikacją: numer opisywał
 * wielkość i dochody, nie to, czy miasto jest dobre.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że 2 kwietnia 1822 r. miasto wróciło na listę miast
 *   jako „miasto V rzędu" i że numer opisywał wielkość,
 *   nie wartość,
 * — ⚠⚠ ŻE W KUCHNI CZYTAMY NUMERY I KLASY ODWROTNIE,
 *   NIŻ ZOSTAŁY POMYŚLANE — TO JEST RDZEŃ. Bierzemy je
 *   za stopnie jakości, a one opisują WŁAŚCIWOŚĆ,
 * — TRZY KONKRETNE PRZYKŁADY, KTÓRE ROZSTRZYGAJĄ
 *   NAJWIĘCEJ:
 *   — TYP MĄKI (450, 550, 650, 750, 1850, 2000) to miara
 *     tego, ILE Z ZIARNA ZOSTAŁO. Wyższy typ znaczy
 *     ciemniejszą mąkę, więcej otrąb, inne zachowanie
 *     przy wodzie i wolniejsze wyrastanie. NIE ZNACZY
 *     „lepsza". To jest mąka DO CZEGO INNEGO,
 *   — ROZMIAR JAJEK (S, M, L, XL) to MASA, nie klasa
 *     jakości. Przepisy pisze się zwykle na średnie
 *     albo duże, a przy trzech jajkach różnica między
 *     rozmiarami robi się w cieście widoczna,
 *   — KLASA WARZYW I OWOCÓW (I i II) opisuje WYGLĄD
 *     I KSZTAŁT, nie smak. Druga klasa to krzywa
 *     marchewka, a nie gorsza marchewka,
 * — ⚠⚠ PRAKTYCZNA ZASADA: sprawdzić, jaki numer zakłada
 *   przepis, a gdy nie podaje — przyjąć ten najczęstszy
 *   i zapisać u siebie, na czym naprawdę się gotuje.
 *   Wyższy numer nie jest awansem, tylko innym narzędziem,
 * — ⚠⚠⚠ ŻE NIE OCENIAM, CO JEST ZDROWSZE. Przy mące
 *   pełnoziarnistej to pierwsze skojarzenie i wprost
 *   piszę, że się na ten temat nie wypowiadam.
 *   TWARDA GRANICA BEZWZGLĘDNA,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie czyta etykiet.
 *   Mąka o wyższym typie pije więcej wody i ciasto
 *   wychodzi inne — żadne urządzenie tego za Ciebie
 *   nie skoryguje, bo nie wie, co wsypałaś.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO SKŁADNIKÓW, KTÓRE ŁATWO POMYLIĆ W SKLEPIE —
 *   kąt zajęty (Zalewo). Piszę o CZYTANIU LICZB
 *   NA OPAKOWANIU, nie o myleniu produktów.
 * — ⚠⚠ ZERO NIEPRECYZYJNEGO JĘZYKA PRZEPISÓW — kąt zajęty
 *   (Pelplin). Tam chodzi o „szczyptę" i „do smaku";
 *   TUTAJ o LICZBY, KTÓRE SĄ PRECYZYJNE, tylko znaczą
 *   co innego, niż się wydaje. Rozgraniczam.
 * — ⚠⚠ ZERO SZKLANKI KONTRA WAGI — kąt zajęty (Chełmno).
 * — ⚠⚠ ZERO ZAMIENNIKÓW — kąt zajęty (Kwidzyn). Nie piszę,
 *   czym zastąpić mąkę, tylko co znaczy jej numer.
 * — ⚠ ZERO MĄKI I MIELENIA JAKO TEMATU — kąt zajęty
 *   (Tarnogród). Mąka jest tu JEDNYM Z TRZECH PRZYKŁADÓW,
 *   nie tematem strony.
 * — ⚠ ZERO OBIETNIC BRANŻOWYCH I ICH ROZBIERANIA — kąt
 *   zajęty (Biłgoraj, Międzyrzec Podlaski).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK — ⚠⚠ na tej stronie ryzyko
 *   jest podwyższone, bo mowa o opakowaniach. PISZĘ
 *   WYŁĄCZNIE O OZNACZENIACH, NIGDY O WYTWÓRCACH.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — przy mące
 *   pełnoziarnistej i klasie warzyw to najkrótsza droga
 *   do wpadki. TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO POWODU UTRATY PRAW MIEJSKICH. en.wikipedia
 *   podaje wprost, że odebrano je jako karę po powstaniu
 *   styczniowym — a zdanie to stoi tuż obok dat, po które
 *   trzeba sięgnąć. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z LAT 1939–1945 I ZERO NAZWY
 *   OKUPACYJNEJ — to jeden z czterech akapitów sekcji
 *   historycznej en.wikipedii.
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ — Wirtualny Sztetl
 *   jest w pierwszej dziesiątce wyników o historii miasta.
 * — ⚠⚠ ZERO POŻARU Z 1733 R. I ZERO CZOPOWEGO OD PIWA.
 *   Jedno zdanie na stronie urzędu łączy katastrofę
 *   z alkoholem — a jest kuszące, bo ma datę i konkret.
 * — ⚠⚠ ZERO RZEŹNI Z LAT 1937–38.
 * — ⚠ ZERO STRAJKÓW ROBOTNIKÓW ROLNYCH 1905.
 * — ⚠ ZERO „WYZWOLENIA 19 STYCZNIA 1945".
 * — ⚠ ZERO WOJEN SZWEDZKICH I PODUPADANIA MIASTA.
 * — ⚠ ZERO KOŚCIOŁA I KAPLICY jako wątku wyznaniowego —
 *   wyłącznie jako architektury z datą.
 * — ⚠ ZERO BEZROBOCIA I UJEMNEGO PRZYROSTU NATURALNEGO.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „NIEPRECYZYJNY JĘZYK PRZEPISÓW" (Pelplin) dotyczy
 *   SŁÓW NIEOSTRYCH. ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ
 *   liczby są całkowicie precyzyjne — problem polega
 *   na tym, że mierzą co innego, niż czytelnik zakłada.
 * — „SKŁADNIKI MYLONE W SKLEPIE" (Zalewo) dotyczy
 *   POMYLENIA PRODUKTU.
 * — „SZKLANKA CZY WAGA" (Chełmno) dotyczy JEDNOSTEK.
 * — „MĄKA I MIELENIE" (Tarnogród) dotyczy SAMEJ MĄKI.
 * TUTAJ chodzi o NUMER I KLASĘ NA OPAKOWANIU —
 * I O TO, ŻE OPISUJĄ WŁAŚCIWOŚĆ, A NIE STOPIEŃ JAKOŚCI.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE UŻYWAM liczb ze strony urzędu ani z en.wikipedii.
 * — NIE PISZĘ „w Chodeczu".
 * — NIE PODAJĘ liczby wsi w gminie — dane są z 2006 r.
 * — NIE ROZSTRZYGAM, czy prawa utracono w 1867 czy 1870.
 * — NIE PISZĘ, dlaczego je utracono.
 * — NIE PODAJĘ liczb Jeziora Chodeckiego.
 * — NIE OCENIAM, która mąka, które jajko ani która klasa
 *   warzyw jest zdrowsza.
 * — NIE PODAJĘ nazw firm ani marek.
 * — NIE PRZYPISUJĘ Chodczowi żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Chodecz leży na Kujawach, w powiecie włocławskim;
 *   jest miastem w gminie miejsko-wiejskiej i liczy
 *   1 681 mieszkańców (GUS, 31.12.2024) na 1,9 km²;
 *   cała gmina ma 5 395 osób na 122,1 km²,
 * — prawa miejskie miasto dostało w 1442 roku, straciło
 *   je pod koniec 1812, a 2 kwietnia 1822 odzyskało —
 *   z zaliczeniem do miast piątego rzędu; w drugiej
 *   połowie XIX wieku straciło je ponownie i wróciło
 *   na listę miast w 1921 roku,
 * — w 1666 roku dokument Jana Kazimierza dołożył
 *   do czterech wcześniejszych jarmarków jeszcze trzy,
 *   a w 1776 Stanisław August nadał prawo odbywania
 *   sześciu jarmarków rocznie,
 * — w 1860 roku powstała szosa sieradzko-włocławska,
 *   a w 1862 ukończono linię kolejową
 *   warszawsko-bydgoską, która przebiega obok miasta —
 *   najbliższa stacja to Kaliska Kujawskie,
 * — w latach 1937–1938 zbudowano w Chodczu mleczarnię,
 *   w 1969 kąpielisko nad Jeziorem Chodeckim,
 *   a w 1972 amfiteatr,
 * — w 1981 roku działało tu siedemnaście zakładów
 *   rzemieślniczych zatrudniających dwadzieścia siedem
 *   osób, a w 1985 — dwadzieścia jeden zakładów
 *   i trzydziestu pracowników,
 * — kościół św. Dominika jest neogotycki, z lat
 *   1849–1850, a późnobarokowa kaplica św. Jakuba
 *   pochodzi z 1799 roku.
 */
export const CHODECZ: CityContent = {
  slug: "chodecz",
  h1: "Thermomix Chodecz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Chodecz — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Chodczu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chodecz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chodczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chodcza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Chodecz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wyższy numer na opakowaniu nie jest awansem. Jest innym narzędziem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chodczu – jak wygląda prezentacja?",
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
      id: "miasto-v-rzedu",
      heading: "Miasto piątego rzędu",
      paragraphs: [
        "2 kwietnia 1822 roku Chodecz wrócił na listę miast — i od razu został zaliczony do miast piątego rzędu, czyli do najniższej kategorii ówczesnej klasyfikacji.",
        "Brzmi jak ocena, a było zwykłym podziałem administracyjnym: numer opisywał wielkość i dochody, nie to, czy miasto jest dobre albo złe. Nikt nie napisał tam „gorsze” — napisano „mniejsze i uboższe w dochody”, tylko krócej.",
        "Piszę o tym, bo w kuchni czytamy numery i klasy dokładnie odwrotnie, niż zostały pomyślane. Bierzemy je za stopnie jakości, a one prawie zawsze opisują właściwość.",
        "Najlepszy przykład to typ mąki. Czterysta pięćdziesiąt, pięćset pięćdziesiąt, sześćset pięćdziesiąt, siedemset pięćdziesiąt, tysiąc osiemset pięćdziesiąt, dwa tysiące. Ten numer mówi, ile z ziarna zostało w worku.",
        "Im wyższy, tym ciemniejsza mąka i tym więcej otrąb — a to znaczy, że inaczej pije wodę i wolniej wyrasta. Nie znaczy „lepsza” ani „gorsza”. Znaczy: do czego innego. Dwa tysiące w miejscu, gdzie przepis zakłada pięćset pięćdziesiąt, da zbite ciasto i nikt nie będzie winny poza numerem, którego się nie sprawdziło.",
        "I od razu uczciwie, bo to pierwsze skojarzenie: nie napiszę Wam, która mąka jest zdrowsza. Nie jestem dietetyczką, nie mam do tego kompetencji i nie zamierzam udawać, że mam. Piszę wyłącznie o tym, jak ten numer zachowuje się w cieście.",
        "Drugi przykład to rozmiar jajek. Litery S, M, L i XL to przedziały masy, a nie klasy jakości. Przepisy pisze się zwykle na jajka średnie albo duże i przy jednym jajku nikt różnicy nie zauważy — ale przy trzech albo czterech robi się z tego kilkadziesiąt gramów i ciasto to widzi.",
        "Trzeci to klasa warzyw i owoców. Pierwsza i druga klasa opisują wygląd i kształt: dopuszczalną krzywiznę, wielkość, jednolitość. Druga klasa to krzywa marchewka, a nie gorsza marchewka. Do zupy krem różnica jest żadna, a cena bywa wyraźna.",
        "Zasada jest jednozdaniowa: sprawdź, jaki numer zakłada przepis. Gdy nie podaje — przyjmij ten najczęstszy i zapisz u siebie, na czym naprawdę gotujesz. To dwie minuty raz, a tłumaczy połowę „nieudanych” ciast.",
        "Uczciwie o sprzęcie. Urządzenie nie czyta etykiet i nie wie, co wsypałaś. Mąka o wyższym typie weźmie więcej wody, ciasto wyjdzie gęstsze i żadna elektronika tego za Ciebie nie skoryguje — bo korekta musiałaby się zacząć od informacji, której urządzenie nie ma.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chodczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jaką mąkę macie zwykle w domu — to naprawdę wpływa na to, co warto ugotować na spotkaniu, i chętnie pokażę dlaczego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chodczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla chodeckiej rodziny",
      paragraphs: [
        "Chodecz leży na Kujawach, w powiecie włocławskim; jest miastem w gminie miejsko-wiejskiej i liczy niecałe tysiąc siedemset mieszkańców na niecałych dwóch kilometrach kwadratowych, a cała gmina — ponad pięć tysięcy osób na stu dwudziestu dwóch kilometrach kwadratowych. Prawa miejskie miasto dostało w 1442 roku, straciło je pod koniec 1812, a 2 kwietnia 1822 odzyskało — z zaliczeniem do miast piątego rzędu; w drugiej połowie XIX wieku straciło je ponownie i wróciło na listę miast w 1921. W 1666 roku dokument Jana Kazimierza dołożył do czterech wcześniejszych jarmarków jeszcze trzy, a w 1776 Stanisław August nadał prawo odbywania sześciu jarmarków rocznie. W 1860 powstała szosa sieradzko-włocławska, a w 1862 ukończono linię kolejową warszawsko-bydgoską, która przebiega obok — najbliższa stacja to Kaliska Kujawskie. W latach 1937–1938 zbudowano mleczarnię, w 1969 kąpielisko nad Jeziorem Chodeckim, a w 1972 amfiteatr. W 1981 roku działało tu siedemnaście zakładów rzemieślniczych zatrudniających dwadzieścia siedem osób, a w 1985 — dwadzieścia jeden zakładów i trzydziestu pracowników. Kościół św. Dominika jest neogotycki, z lat 1849–1850, a późnobarokowa kaplica św. Jakuba pochodzi z 1799 roku.",
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

  districtsHeading: "Do których części Chodcza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — ma niecałe dwa kilometry kwadratowe, więc wszędzie jest blisko. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Chodecz też przyjadę",
  nearbyParagraphs: [
    "Lubraniec, Lubień Kujawski, Izbica Kujawska, Kowal i Włocławek są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubraniec", "Lubień Kujawski", "Izbica Kujawska", "Włocławek"],

  about: blokOMnie("do Chodcza", "w Chodczu", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chodcza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Chodecz jest miastem w gminie miejsko-wiejskiej w powiecie włocławskim, a miejscownik od tej nazwy brzmi „w Chodczu” — z e, które ginie przy odmianie.",
    },
    ...faqWspolne("w Chodczu"),
    {
      question: "Co właściwie znaczy typ mąki?",
      answer:
        "Mówi, ile z ziarna zostało w worku. Im wyższy numer, tym ciemniejsza mąka i więcej otrąb, a to zmienia dwie rzeczy: więcej wody wchodzi w ciasto i wolniej ono wyrasta. Wyższy typ nie jest awansem — jest inną mąką, do czego innego. Jeśli przepis zakłada pięćset pięćdziesiąt, a użyjesz dwóch tysięcy, ciasto wyjdzie zbite i nie będzie to niczyja wina poza numerem, którego się nie sprawdziło. O tym, która mąka jest zdrowsza, nie wypowiadam się — to nie moja dziedzina.",
    },
    {
      question: "Czy warzywa klasy drugiej są gorsze?",
      answer:
        "Nie w smaku. Klasa opisuje wygląd i kształt — dopuszczalną krzywiznę, wielkość, jednolitość — a nie to, jak coś smakuje. Druga klasa to krzywa marchewka, a nie gorsza marchewka, i do zupy krem czy do sosu różnica jest żadna. Podobnie litery na jajkach: S, M, L i XL to przedziały masy, nie stopnie jakości.",
    },
  ],

  geo: { lat: 52.4047, lng: 19.0275 },
};
