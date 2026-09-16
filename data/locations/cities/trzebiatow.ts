import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * TRZEBIATÓW — powiat gryficki, woj. zachodniopomorskie,
 * nad Regą, ok. 10 km od Bałtyku.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 9 274 mieszkańców (GUS 31.12.2024), 10,3 km²,
 * gęstość 904,8 os./km², 2–17 m n.p.m.
 * CAŁA GMINA: 14 795 osób, 226,8 km².
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 54,0612 / 15,2648.
 * ⚠ ROZBIEŻNOŚĆ: serwis geoportalowy podaje dla gminy
 *   14 744 (różnica ok. 50 osób, inny moment odczytu
 *   z BDL). Używam 14 795 za polskawliczbach/GUS.
 * ⚠⚠ LICZBY SOŁECTW NIE USTALONO — strona gminy
 *   zwracała błąd 429. Piszę opisowo.
 *
 * ⚠ ODMIANA: D. TRZEBIATOWA, Ms. W TRZEBIATOWIE,
 *   przym. TRZEBIATOWSKI.
 *   ⚠⚠ NIE POTWIERDZONE BEZPOŚREDNIO W PWN w sesji
 *   researchu (domena niedostępna), ale odmiana jest
 *   regularna dla nazw na -ów, jak Kraków → w Krakowie.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 * ⚠ HOMONIM: TRZEBIATÓW (miasto) ≠ TRZEBIATOWO (wieś).
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 6 MAJA 1277 — LOKACJA MIASTA (książę Barnim I,
 *   jego syn Bogusław IV i opat Thomas).
 *   ⚠ OPATA WYMIENIAM TYLKO W KOMENTARZU — w treści
 *   pomijam, żeby nie otwierać wątku zakonnego.
 * — 1287 — prawo lubeckie, port Rogoujście i wolna
 *   żegluga na Redze; 1303 — prawo składu;
 *   1309 — prawo połowu na Bałtyku; 1416 — Hanza.
 *   ⚠⚠ ROKU 1465 (WYKLUCZENIE Z HANZY) NIE UŻYWAM —
 *   ten sam motyw wykorzystano już przy Gryficach
 *   w tej samej fali.
 * — MURY: budowa 1299–1337; W 1337 R. DOSTARCZONO
 *   84 000 CEGIEŁ; obwód pierwotny ok. 2,5 km,
 *   zachowane ok. 1,6 km, czyli około 70 %.
 *   ⚠ ŚREDNICY BASZTY PROCHOWEJ NIE PODAJĘ — źródła
 *   podają 5,6 m ALBO 4 m.
 * — UKŁAD SZACHOWNICOWY: 22 KWARTAŁY na module lubeckim
 *   4,5 M, typowa szerokość fasady 9 M; rynek 96 × 105 M.
 *   ⚠⚠ MODUŁU NIE ROBIĘ KĄTEM — „własna, powtarzalna
 *   miara" jest zajęta (Gryfice, ta sama fala),
 *   a „jedna baza, z której robi się wszystko" (Gniew).
 *   Podaję liczby w bloku faktograficznym.
 * — ⚠⚠⚠ RDZEŃ KĄTA — KOŚCIÓŁ MARIACKI:
 *   budowa 1305–1370, wymiary 62 × 28 m,
 *   WIEŻA OKOŁO 90 M, KTÓRA PEŁNIŁA FUNKCJĘ LATARNI
 *   MORSKIEJ, CHOĆ MIASTO LEŻY OKOŁO 10 KM OD MORZA,
 *   oraz DZWON „MARIA" Z 1515 R. O MASIE 3 700 KG.
 *   ⚠ „prawie 90 m" — podaję jako „około dziewięćdziesiąt".
 * — SGRAFFITO SŁONIA na kamienicy przy Rynku: namalowane
 *   w 1639 r., ODKRYTE PRZYPADKIEM PODCZAS REMONTU
 *   W 1914 R., czyli po 275 latach. Dotyczy słonicy
 *   Hansken, pokazywanej w europejskim tournée.
 *   ⚠⚠ NIE ROBIĘ Z TEGO KĄTA — wątek „ile funkcji
 *   naprawdę używasz" jest zajęty (Świecie: czego ludzie
 *   nie wiedzą o własnym urządzeniu po roku).
 *   Wymieniam jako ciekawostkę w bloku faktograficznym,
 *   ⚠ BEZ WYLICZANIA SZTUCZEK ZWIERZĘCIA.
 * — 1864 gazownia, 1882 kolej do Szczecina i Kołobrzegu,
 *   1925 elektrownia wodna.
 * — 1996 — miasto objęte rządowym programem ratowania
 *   miast historycznych, jako jedno z siedmiu w Polsce.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE POTWIERDZONO —
 *   bazy MRiRW nie udało się przeszukać (wymaga
 *   JavaScriptu). NIE TWIERDZĘ ANI ŻE JEST, ANI ŻE NIE MA
 *   WPISU. NIE PRZYPISUJĘ PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: SKĄD WIADOMO, ŻE GOTOWE — sygnał kontra
 * sprawdzanie, i dlaczego minutnik odpowiada na inne
 * pytanie, niż nam się wydaje.
 * Kąt od wieży kościoła Mariackiego: około dziewięćdziesiąt
 * metrów, widoczne z morza mimo dziesięciu kilometrów
 * odległości, i od dzwonu „Maria" z 1515 r., który waży
 * trzy tysiące siedemset kilogramów. Dwa sygnały — jeden
 * dla oka, drugi dla ucha — obydwa działające na odległość.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wieża ma około dziewięćdziesięciu metrów i służyła
 *   za punkt orientacyjny dla żeglugi, choć do morza jest
 *   stąd około dziesięciu kilometrów, a dzwon „Maria"
 *   z 1515 r. waży trzy tysiące siedemset kilogramów,
 * — ŻE SYGNAŁ DZIAŁA NA ODLEGŁOŚĆ, A SPRAWDZANIE
 *   WYMAGA OBECNOŚCI — to jest rdzeń i na tym opiera się
 *   cała różnica,
 * — ⚠⚠ ŻE W KUCHNI SĄ DWA RÓŻNE PYTANIA, KTÓRE STALE
 *   SIĘ MYLI:
 *   (1) ILE TO JUŻ TRWA — na to odpowiada minutnik
 *       i odpowiada dobrze,
 *   (2) CZY JUŻ GOTOWE — na to minutnik NIE ODPOWIADA,
 *       bo mierzy czas, a nie stan.
 *   Dlatego dzwonek nie znaczy „gotowe", tylko „idź
 *   sprawdzić",
 * — ⚠⚠ ŻE PRZY DANIU ZNANYM CZAS WYSTARCZA, BO ZNA SIĘ
 *   ZALEŻNOŚĆ; PRZY NOWYM NIE WYSTARCZA NIGDY,
 * — ⚠⚠ ŻE WARTO ZAPAMIĘTAĆ SYGNAŁ, A NIE LICZBĘ:
 *   przy większości dań jest jakiś moment, po którym
 *   widać albo słychać, że rzecz przeszła na drugą stronę.
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO KONKRETNEGO PRZYKŁADU
 *   TAKIEGO SYGNAŁU — to byłaby instrukcja kulinarna,
 *   a od tego nie jestem. Piszę WYŁĄCZNIE, że warto
 *   go u siebie zauważyć i zanotować,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie pilnuje czasu
 *   i temperatury, czyli odpowiada na pierwsze pytanie
 *   bardzo dobrze. NA DRUGIE NIE ODPOWIADA — nie wie,
 *   czy danie jest takie, jak chcecie. Dlatego sygnał
 *   końca to dalej „idź sprawdzić", a nie „gotowe",
 *   i uczciwiej jest to powiedzieć przed zakupem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO INSTRUKCJI, KTÓREJ NIKT NIE CZYTA,
 *   I ZERO NIEZNANYCH FUNKCJI URZĄDZENIA — kąt zajęty
 *   (Świecie). ⚠⚠ TO JEST NAJBLIŻSZE SĄSIEDZTWO.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO PRZERWY W ŚRODKU GOTOWANIA — kąt zajęty
 *   (Pasłęk). Tam chodzi o WYJŚCIE Z DOMU; TUTAJ
 *   o ROZPOZNANIE KOŃCA.
 * — ⚠⚠ ZERO RYTMU DNIA I GODZIN POWROTU Z PRACY —
 *   kąty zajęte (Głogów Małopolski i inne).
 * — ⚠⚠ ZERO DANIA, KTÓRE NIE WYSZŁO — kąt zajęty
 *   (Barlinek, ta sama fala).
 * — ⚠ ZERO WŁASNEJ MIARY — kąt zajęty (Gryfice, ta sama
 *   fala). Piszę o CZASIE I STANIE, nigdy o ilościach.
 * — ⚠ ZERO ROSOŁU I WYWARU — kąt zajęty (Gniew).
 * — ⚠⚠⚠ ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR —
 *   przy kącie o minutniku to najkrótsza droga do wpadki.
 *   NIE PADA ANI JEDNA LICZBA MINUT ANI STOPNI.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH SYGNAŁÓW ROZPOZNAWANIA DANIA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *   Przy pytaniu „czy już gotowe" to ryzyko numer jeden
 *   na tej stronie. NIE PISZĘ ANI SŁOWA o tym, czy coś
 *   jest dogotowane, dopieczone ani czy nadaje się
 *   do zjedzenia. Piszę wyłącznie o RÓŻNICY MIĘDZY
 *   MIERZENIEM CZASU A SPRAWDZANIEM STANU.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945 I ZNISZCZEŃ WOJENNYCH.
 * — ⚠⚠ ZERO KLASZTORU BENEDYKTYNEK Z 1224 R. — wątek
 *   zakonny. Kościół wymieniam jako budowlę z wymiarami.
 * — ⚠ ZERO SZTUCZEK SŁONICY — wyliczanie tresury
 *   zwierzęcia nie jest materiałem na tę stronę.
 *   Sgraffito wymieniam jako malowidło odkryte w 1914 r.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ średnicy Baszty Prochowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE TWIERDZĘ, że gmina ma albo nie ma wpisu na Liście
 *   Produktów Tradycyjnych.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE PODAJĘ ŻADNEGO CZASU ANI TEMPERATURY.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Trzebiatów leży nad Regą, około dziesięciu kilometrów
 *   od morza, w powiecie gryfickim; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 9 274 mieszkańców
 *   (GUS, 31.12.2024) na 10,3 km², od 2 do 17 m n.p.m.,
 *   a cała gmina 14 795 osób na 226,8 km²,
 * — lokacja miasta nastąpiła 6 maja 1277 r.; w 1287 r.
 *   miasto dostało prawo lubeckie i wolną żeglugę
 *   na Redze, w 1303 prawo składu, w 1309 prawo połowu
 *   na Bałtyku, a w 1416 weszło do Hanzy,
 * — mury budowano w latach 1299–1337; w samym 1337 r.
 *   dostarczono na budowę 84 000 cegieł, a z pierwotnych
 *   około 2,5 km zachowało się około 1,6 km,
 * — miasto ma szachownicowy układ 22 kwartałów oparty
 *   na module 4,5 m, typową szerokość fasady 9 m
 *   i rynek o wymiarach 96 na 105 metrów,
 * — kościół Mariacki budowano w latach 1305–1370, ma
 *   62 na 28 metrów, a jego wieża — około dziewięćdziesięciu
 *   metrów — służyła za punkt orientacyjny dla żeglugi;
 *   dzwon „Maria" z 1515 r. waży 3 700 kg,
 * — na jednej z kamienic przy Rynku odkryto w 1914 r.,
 *   podczas remontu, sgraffito ze słoniem namalowane
 *   w 1639 r. — ukryte przez 275 lat,
 * — gazownia powstała w 1864 r., kolej do Szczecina
 *   i Kołobrzegu w 1882, a elektrownia wodna w 1925;
 *   w 1996 r. miasto objęto rządowym programem ratowania
 *   miast historycznych jako jedno z siedmiu w Polsce.
 */
export const TRZEBIATOW: CityContent = {
  slug: "trzebiatow",
  h1: "Thermomix Trzebiatów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Trzebiatów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Trzebiatowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Trzebiatów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Trzebiatowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Trzebiatowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Trzebiatów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dzwonek minutnika nie znaczy „gotowe”. Znaczy „idź sprawdzić”.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Trzebiatowie – jak wygląda prezentacja?",
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
      id: "skad-wiadomo",
      heading: "Wieża, dzwon i pytanie, skąd wiadomo, że gotowe",
      paragraphs: [
        "Wieża kościoła Mariackiego w Trzebiatowie ma około dziewięćdziesięciu metrów i przez wieki służyła za punkt orientacyjny dla żeglugi — mimo że od miasta do morza jest około dziesięciu kilometrów. A w kościele wisi dzwon „Maria” z 1515 roku, ważący trzy tysiące siedemset kilogramów.",
        "Dwa sygnały, jeden dla oka, drugi dla ucha, i obydwa mają tę samą cechę: działają na odległość. Nie trzeba być na miejscu, żeby je odebrać.",
        "I właśnie na tej cesze opiera się różnica, którą w kuchni myli się codziennie.",
        "Sygnał działa na odległość. Sprawdzanie wymaga obecności. To są dwie zupełnie różne rzeczy — a w gotowaniu stale bierzemy jedną za drugą.",
        "Bo w kuchni są dwa pytania i tylko wygląda na to, że są jednym. Pierwsze brzmi: ile to już trwa. Drugie: czy już gotowe.",
        "Minutnik odpowiada na pierwsze i odpowiada na nie znakomicie — po to powstał. Na drugie nie odpowiada wcale, bo mierzy czas, a nie stan. Nie wie, co jest w garnku. Wie tylko, ile go już tam było.",
        "Dlatego dzwonek nie znaczy „gotowe”. Znaczy „idź sprawdzić”. To jest cała różnica i warto ją mieć z tyłu głowy przy każdym daniu, którego jeszcze nie robiłaś.",
        "Przy daniu znanym czas naprawdę wystarcza — nie dlatego, że czas jest miarą gotowości, tylko dlatego, że w tej jednej kuchni, przy tym jednym sprzęcie i tej jednej ilości ta zależność została już wielokrotnie sprawdzona. Ktoś ją zna, choćby nie umiał jej nazwać.",
        "Przy nowym nie wystarcza nigdy i nie ma sensu udawać, że wystarczy.",
        "Z tego wynika jedyna rada, jaką mam w tej sprawie: warto zapamiętywać sygnał, a nie liczbę. Przy większości dań jest jakiś moment, po którym widać albo słychać, że rzecz przeszła na drugą stronę. Nie napiszę Wam, jaki to moment przy którym daniu — nie jestem od dawania instrukcji kulinarnych i każda kuchnia ma tu trochę swoje. Napiszę tylko, że ten moment warto u siebie zauważyć raz i zanotować przy przepisie, bo potem służy latami, a liczba minut zestarzeje się przy pierwszej zmianie sprzętu.",
        "Uczciwie o urządzeniu, bo dzieli się dokładnie według tych dwóch pytań. Na pierwsze odpowiada lepiej niż człowiek: pilnuje czasu i temperatury, nie zapomina, nie odchodzi, nie myli się o pięć minut.",
        "Na drugie nie odpowiada i nie będę twierdzić, że odpowiada. Nie wie, czy danie jest takie, jak Wy je lubicie — bo tego nie da się zmierzyć. Sygnał końca dalej znaczy „idź sprawdzić”, tylko że przez ten czas nie trzeba było przy garnku stać.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Trzebiatowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, przy którym daniu nigdy nie jesteście pewni, czy już wystarczy — przy takim najlepiej stanąć obok i zobaczyć to razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Trzebiatowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla trzebiatowskiej rodziny",
      paragraphs: [
        "Trzebiatów leży nad Regą, około dziesięciu kilometrów od morza, w powiecie gryfickim, i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad dziewięć tysięcy mieszkańców na dziesięciu i trzech dziesiątych kilometra kwadratowego, od dwóch do siedemnastu metrów nad poziomem morza, a cała gmina blisko piętnaście tysięcy osób na dwustu dwudziestu sześciu kilometrach kwadratowych. Lokacja miasta nastąpiła szóstego maja 1277 roku; w 1287 Trzebiatów dostał prawo lubeckie i wolną żeglugę na Redze, w 1303 prawo składu, w 1309 prawo połowu na Bałtyku, a w 1416 wszedł do Hanzy. Mury budowano w latach 1299–1337 — w samym 1337 dostarczono na budowę osiemdziesiąt cztery tysiące cegieł, a z pierwotnych dwóch i pół kilometra zachowało się około kilometra sześciuset metrów. Miasto ma szachownicowy układ dwudziestu dwóch kwartałów oparty na module czterech i pół metra, typową szerokość fasady dziewięciu metrów i rynek o wymiarach dziewięćdziesiąt sześć na sto pięć metrów. Kościół Mariacki budowano w latach 1305–1370; ma sześćdziesiąt dwa na dwadzieścia osiem metrów, jego wieża mierzy około dziewięćdziesięciu metrów i służyła za punkt orientacyjny dla żeglugi, a dzwon „Maria” z 1515 roku waży trzy tysiące siedemset kilogramów. Na jednej z kamienic przy Rynku odkryto w 1914 roku, podczas remontu, sgraffito ze słoniem namalowane w 1639 — ukrywało się przez dwieście siedemdziesiąt pięć lat. Gazownia powstała w 1864 roku, kolej do Szczecina i Kołobrzegu w 1882, elektrownia wodna w 1925, a w 1996 miasto objęto rządowym programem ratowania miast historycznych jako jedno z siedmiu w Polsce.",
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

  districtsHeading: "Do których części Trzebiatowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w obrębie murów i poza nimi — oraz do wszystkich wsi w gminie, łącznie z nadmorską częścią. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Trzebiatów też przyjadę",
  nearbyParagraphs: [
    "Gryfice są dziesięć kilometrów stąd, Kołobrzeg około trzydziestu, a Kamień Pomorski i Szczecin mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gryfice", "Kołobrzeg", "Kamień Pomorski", "Szczecin"],

  about: blokOMnie("do Trzebiatowa", "w Trzebiatowie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Trzebiatowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie, łącznie z częścią nadmorską. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Trzebiatów nad Regą w powiecie gryfickim — nie o wieś Trzebiatowo.",
    },
    ...faqWspolne("w Trzebiatowie"),
    {
      question: "Czy minutnik wystarczy, żeby wiedzieć, że danie jest gotowe?",
      answer:
        "Odpowiada na inne pytanie, niż nam się wydaje. Minutnik mierzy, ile coś trwa, a nie w jakim jest stanie — nie wie, co jest w garnku. Dlatego dzwonek nie znaczy „gotowe”, tylko „idź sprawdzić”. Przy daniu znanym czas wystarcza, bo tę zależność ktoś w domu już wielokrotnie sprawdził; przy nowym nie wystarcza nigdy.",
    },
    {
      question: "Czy Thermomix sam pozna, że danie jest gotowe?",
      answer:
        "Nie — i to jest uczciwa odpowiedź. Pilnuje czasu i temperatury lepiej niż człowiek: nie zapomina i nie odchodzi od garnka. Ale nie wie, czy danie jest takie, jak Wy je lubicie, bo tego nie da się zmierzyć. Sygnał końca dalej znaczy „idź sprawdzić” — z tą różnicą, że przez cały ten czas nie trzeba było stać przy garnku.",
    },
  ],

  geo: { lat: 54.0612, lng: 15.2648 },
};
