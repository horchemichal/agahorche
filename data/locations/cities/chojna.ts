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
 * CHOJNA — powiat gryfiński, woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 7 311 mieszkańców (GUS 31.12.2024), 12,6 km²,
 * gęstość 581,2 os./km².
 * CAŁA GMINA: 13 051 osób, 332,3 km², 25 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 52,9640 / 14,4278.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 * ⚠ ROZBIEŻNOŚĆ: serwis geoportalowy podaje dla gminy
 *   13 061 (różnica 10 osób — pomijalna). BIP gminy
 *   zwracał 403, więc danych urzędowych NIE
 *   ZWERYFIKOWANO. Używam liczb GUS.
 * ⚠ NIE ISTNIEJE ODRĘBNA GMINA WIEJSKA CHOJNA.
 *
 * ⚠ ODMIANA: RODZAJ ŻEŃSKI. D. CHOJNY, Ms. W CHOJNIE.
 *   ⚠⚠ NIE POTWIERDZONE BEZPOŚREDNIO W PWN w sesji
 *   researchu, ale odmiana jest regularna.
 *   ⚠⚠ PRZYMIOTNIKA I NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   niepotwierdzone. W nagłówku sekcji rodzinnej piszę
 *   „dla rodziny z Chojny", nie „dla chojeńskiej rodziny".
 * ⚠⚠⚠ HOMONIMY KRYTYCZNE — TRZY MIASTA:
 *   CHOJNA (zachodniopomorskie, powiat gryfiński)
 *   ≠ CHOJNICE (pomorskie)
 *   ≠ CHOJNÓW (dolnośląskie).
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1244 — pierwsza wzmianka pisemna.
 * — ⚠⚠ PRAW MIEJSKICH Z 1255 R. NIE PODAJĘ JAKO DATY
 *   PEWNEJ — w źródłach pobranych w researchu nie
 *   zacytowano dokumentu lokacyjnego. Piszę „w połowie
 *   XIII wieku".
 * — RATUSZ: przełom XIV/XV w., odbudowa 1980–1986.
 * — BRAMY MIEJSKIE: BARNKOWSKA i ŚWIECKA, obie z XV w.
 * — KOŚCIÓŁ MARIACKI: plan 55,50 × 28 m, wysokość
 *   wnętrza ok. 18 m, podstawa wieży 10,59 × 10,59 m,
 *   trójnawowy, halowy, pierwotnie SZEŚĆ PRZĘSEŁ;
 *   budowa w fazach od ok. 1270 do lat 1451–1459;
 *   średniowieczną wieżę rozebrano w 1843 r., nową,
 *   neogotycką, zaprojektował Friedrich August Stüler
 *   i wzniesiono ją w latach 1859–1861.
 *   ⚠⚠⚠ WYSOKOŚCI WIEŻY NIE PODAJĘ — TRZY ŹRÓDŁA PODAJĄ
 *   95 M, 102 M I 102,6 M, a dla wieży dzisiejszej 98 m.
 *   ROZBIEŻNOŚĆ JEST ZA DUŻA. NIE WYBIERAM ŻADNEJ
 *   LICZBY I NIE PODAJĘ PRZEDZIAŁU. TWARDA GRANICA.
 *   Odbudowa powojenna w fazach: 1990/1994–1997,
 *   stabilizacja wieży 1998–1999, wnętrze 2007–2009.
 * — ⚠⚠⚠ RDZEŃ KĄTA — „WIELKI PLATAN":
 *   WIEK OKOŁO 300 LAT, WYSOKOŚĆ 35 M,
 *   OBWÓD PNIA PONAD 10 M.
 *   Trzy liczby, jeden organizm, zero wątków wrażliwych.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE POTWIERDZONO
 *   wpisu. NIE TWIERDZĘ ANI ŻE JEST, ANI ŻE NIE MA.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: CO ROŚNIE NIEZAUWAŻALNIE — o tym, że wprawa
 * w kuchni przyrasta w tempie, którego nie widać z dnia
 * na dzień, i jak to u siebie zauważyć.
 * Kąt od Wielkiego Platanu: około trzystu lat, trzydzieści
 * pięć metrów wysokości, ponad dziesięć metrów obwodu pnia.
 * Nikt nigdy nie widział, jak rośnie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w Chojnie rośnie platan o wieku około trzystu lat,
 *   wysokości trzydziestu pięciu metrów i obwodzie pnia
 *   ponad dziesięciu metrów,
 * — ŻE TEMPO TEGO WZROSTU JEST PONIŻEJ PROGU
 *   ZAUWAŻALNOŚCI — to jest rdzeń. Nie da się zobaczyć
 *   różnicy z dnia na dzień ani z miesiąca na miesiąc,
 *   a po trzystu latach różnica jest dziesięciometrowa,
 * — ⚠⚠ ŻE WPRAWA W KUCHNI PRZYRASTA DOKŁADNIE TAK SAMO
 *   i że stąd bierze się bardzo częste, bardzo krzywdzące
 *   przekonanie „ja się do tego nie nadaję". Ono powstaje
 *   z porównywania siebie z dziś do siebie z wczoraj —
 *   a na tym odcinku nigdy nic nie widać,
 * — ⚠⚠ ŻE JEDYNYM SPOSOBEM JEST ZMIANA ODCINKA
 *   PORÓWNANIA, I PODAJĘ KONKRETNY: ugotować danie,
 *   którego nie robiło się od roku albo dwóch — takie,
 *   które kiedyś sprawiało kłopot. Nie po to, żeby je
 *   zjeść, tylko po to, żeby zobaczyć, ile rzeczy
 *   przestało wymagać zastanowienia,
 * — ⚠⚠ ŻE TO, CO PRZYRASTA, TO ZWYKLE NIE SĄ PRZEPISY,
 *   TYLKO DROBIAZGI, KTÓRYCH NIKT NIE NAZYWA: pewność
 *   ręki, wiedza, czego się spodziewać, mniej zaglądania
 *   do przepisu, mniej stresu przy kilku rzeczach naraz,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: WPRAWA NIE ROŚNIE SAMA
 *   OD SAMEGO UPŁYWU CZASU. Rośnie od gotowania.
 *   Dziesięć lat odgrzewania nie robi nikomu wprawy
 *   i nie będę udawać, że robi,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie przyspiesza jeden
 *   rodzaj wprawy — ten dotyczący powtarzalnego wykonania
 *   — i realnie odsuwa część rzeczy, które trzeba
 *   pamiętać. ⚠⚠ ALE CZĘŚĆ WPRAWY PRZEJMUJE ZA
 *   CZŁOWIEKA I TO TRZEBA POWIEDZIEĆ: ktoś, kto pięć lat
 *   gotuje wyłącznie urządzeniem, nie nabiera wprawy
 *   w rzeczach, które urządzenie robi za niego.
 *   To nie jest zarzut wobec sprzętu, tylko fakt,
 *   o którym warto wiedzieć, decydując, co zostawić sobie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO OKRESU PRÓBNEGO I LICZBY PODEJŚĆ — kąt
 *   zajęty (Sławno, ta sama fala). ⚠⚠ NAJBLIŻSZY KĄT.
 *   Tam chodzi o WYZNACZENIE SOBIE Z GÓRY OKRESU
 *   NIŻSZYCH WYMAGAŃ NA STARCIE; TUTAJ o ZAUWAŻENIE
 *   PO FAKCIE, ILE JUŻ PRZYROSŁO. Jeden patrzy w przód,
 *   drugi wstecz. Ani jednego zdania o wyznaczaniu sobie
 *   liczby prób. TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠⚠ ZERO TRZECIEGO TYGODNIA I KOŃCA PIERWSZEGO
 *   ZAPAŁU — kąt zajęty (Konin). ⚠⚠ DRUGI NAJBLIŻSZY.
 *   Ani jednego zdania o tym, że zapał mija.
 * — ⚠⚠ ZERO ZNUDZENIA SIĘ SPRZĘTEM — kąt zajęty
 *   (Żyrardów).
 * — ⚠⚠ ZERO POGŁĘBIANIA JEDNEGO DANIA — kąt zajęty
 *   (Połczyn-Zdrój, ta sama fala). Tam chodzi o ŚWIADOME
 *   EKSPERYMENTOWANIE; TUTAJ o MIMOWOLNY PRZYROST.
 * — ⚠⚠ ZERO RZECZY NIEUŻYWANYCH I PIERWSZEGO RAZU —
 *   kąt zajęty (Nowogard, ta sama fala).
 * — ⚠ ZERO „NIE UMIEM GOTOWAĆ" JAKO PUNKTU WYJŚCIA —
 *   kąt zajęty (Żary). Tam chodzi o osobę, która NIGDY
 *   NIE ZACZĘŁA; TUTAJ o osobę, która gotuje od lat
 *   i nie widzi własnego postępu.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO KONKRETNEGO DANIA Z NAZWY.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI PSYCHOLOGICZNYCH
 *   — przy temacie „nie nadaję się" łatwo zsunąć się
 *   w diagnozowanie kogokolwiek. Piszę o TYM, ŻE ODCINEK
 *   PORÓWNANIA JEST ZŁY, i o niczym więcej.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU ZAKONNEGO: zero klasztoru augustianów,
 *   zero joannitów, zero konfliktu mieszczan z zakonem,
 *   zero komandora uwięzionego w wieży, zero kaplicy
 *   szpitalnej, zero reformacji. To jest najobficiej
 *   udokumentowany wątek o Chojnie i w całości
 *   wyznaniowy. Kościół opisuję WYŁĄCZNIE jako budowlę
 *   z wymiarami. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO BITWY POD CEDYNIĄ — Cedynia leży obok
 *   i wyskakuje w każdym materiale o okolicy.
 *   NIE WSPOMINAM ANI BITWY, ANI SAMEJ CEDYNI.
 * — ⚠⚠ ZERO ROKU 1945 I ZNISZCZEŃ WOJENNYCH — to one
 *   są powodem odbudowy ratusza i kościoła. Odbudowy
 *   wymieniam BEZ PODAWANIA PRZYCZYNY.
 * — ⚠ ZERO WYSOKOŚCI WIEŻY — patrz wyżej.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ wysokości wieży kościoła.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM przymiotnika ani nazwy mieszkańca.
 * — NIE TWIERDZĘ, że gmina ma albo nie ma wpisu na Liście
 *   Produktów Tradycyjnych.
 * — NIE PODAJĘ ŻADNEGO DANIA Z NAZWY.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Chojna leży w powiecie gryfińskim, jest miastem
 *   w gminie miejsko-wiejskiej i liczy 7 311 mieszkańców
 *   (GUS, 31.12.2024) na 12,6 km²; cała gmina ma
 *   13 051 osób na 332,3 km² w 25 miejscowościach,
 * — pierwsza wzmianka pisemna o mieście pochodzi
 *   z 1244 r., a prawa miejskie miasto otrzymało
 *   w połowie XIII wieku,
 * — ratusz wzniesiono na przełomie XIV i XV w.
 *   i odbudowano w latach 1980–1986; z murów zachowały
 *   się dwie bramy z XV w. — Barnkowska i Świecka,
 * — kościół Mariacki jest trójnawowy i halowy, ma plan
 *   55,50 na 28 metrów, wnętrze wysokie na około 18 metrów
 *   i pierwotnie sześć przęseł; budowano go w fazach
 *   od około 1270 r. do lat 1451–1459, a podstawa jego
 *   wieży ma 10,59 na 10,59 metra. Średniowieczną wieżę
 *   rozebrano w 1843 r., a nową, neogotycką, według
 *   projektu Friedricha Augusta Stülera wzniesiono
 *   w latach 1859–1861; kościół odbudowywano w fazach
 *   w latach dziewięćdziesiątych, następnie stabilizowano
 *   wieżę w latach 1998–1999, a wnętrze ukończono
 *   w latach 2007–2009,
 * — w mieście rośnie „Wielki Platan” o wieku około
 *   trzystu lat, wysokości 35 metrów i obwodzie pnia
 *   przekraczającym 10 metrów.
 */
export const CHOJNA: CityContent = {
  slug: "chojna",
  h1: "Thermomix Chojna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Chojna — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Chojnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chojna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chojnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chojny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Chojna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nikt nigdy nie zobaczył, jak rośnie trzystuletnie drzewo. Urosło mimo to.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chojnie – jak wygląda prezentacja?",
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
      id: "co-rosnie",
      heading: "Platan, którego nikt nie widział rosnąć",
      paragraphs: [
        "W Chojnie rośnie platan, którego wiek szacuje się na około trzysta lat. Ma trzydzieści pięć metrów wysokości i ponad dziesięć metrów obwodu pnia.",
        "I ani jedna osoba przez te trzysta lat nie widziała, jak on rośnie. Nie dlatego, że nikt nie patrzył — tylko dlatego, że tempo tego wzrostu jest poniżej progu, na którym cokolwiek widać. Z dnia na dzień nic. Z miesiąca na miesiąc nic. A po trzystu latach różnica jest dziesięciometrowa.",
        "Wprawa w kuchni przyrasta dokładnie w tym samym tempie i stąd bierze się jedno z najbardziej krzywdzących przekonań, jakie słyszę w domach: „ja się do tego po prostu nie nadaję”.",
        "To przekonanie prawie nigdy nie jest prawdą o osobie. Jest za to zawsze prawdą o odcinku porównania. Bo porównuje się siebie z dziś do siebie z wczoraj — a na tym odcinku nigdy nic nie widać. U nikogo.",
        "Jedyne, co na to działa, to zmienić odcinek. I da się to zrobić w jeden wieczór.",
        "Ugotuj danie, którego nie robiłaś od roku albo dwóch — najlepiej takie, które kiedyś sprawiało Ci kłopot. Nie po to, żeby je zjeść. Po to, żeby zobaczyć, ile rzeczy w nim przestało wymagać zastanowienia.",
        "Bo to, co przez te lata przyrosło, to zwykle nie są przepisy. To są drobiazgi, których nikt nie nazywa i których się nie liczy: pewność ręki, wiedza, czego się spodziewać za chwilę, coraz rzadsze zaglądanie do zapisu, mniejszy popłoch, gdy dzieją się trzy rzeczy naraz. Tego nie da się policzyć, ale przy takim porównaniu widać to natychmiast.",
        "Uczciwie o drugiej stronie, bo bez niej byłoby to pocieszanie, a nie prawda. Wprawa nie rośnie od samego upływu czasu. Rośnie od gotowania. Dziesięć lat odgrzewania nie robi nikomu wprawy i nie będę udawać, że robi — drzewo też rośnie dlatego, że stoi w ziemi i coś z niej bierze, a nie dlatego, że mija czas.",
        "Na koniec o urządzeniu i tu mam do powiedzenia rzecz, której nie usłyszycie od sprzedawcy.",
        "Ono przyspiesza jeden rodzaj wprawy — ten dotyczący powtarzalnego wykonania — i naprawdę zdejmuje z głowy sporo rzeczy, które trzeba było pamiętać.",
        "Ale część wprawy przejmuje za człowieka i to też jest prawda. Ktoś, kto przez pięć lat gotuje wyłącznie urządzeniem, nie nabiera wprawy w tych rzeczach, które urządzenie robi za niego. To nie jest zarzut wobec sprzętu — sprzęt po to jest. To jest informacja przydatna przy decyzji, co chcecie zostawić sobie, a co oddać, bo warto podjąć ją świadomie, a nie odkryć po pięciu latach.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chojnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co kiedyś sprawiało Wam kłopot w kuchni, a dziś już nie — to dobra podpowiedź, od czego zacząć wspólne gotowanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chojnie"),
    sekcjaRaty("w Chojnie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Chojny",
      paragraphs: [
        "Chojna leży w powiecie gryfińskim i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad siedem tysięcy mieszkańców na dwunastu i sześciu dziesiątych kilometra kwadratowego, a cała gmina ponad trzynaście tysięcy osób na trzystu trzydziestu dwóch kilometrach kwadratowych, w dwudziestu pięciu miejscowościach. Pierwsza wzmianka pisemna o mieście pochodzi z 1244 roku, a prawa miejskie Chojna otrzymała w połowie trzynastego wieku. Ratusz wzniesiono na przełomie czternastego i piętnastego wieku, a odbudowano w latach 1980–1986; z murów zachowały się dwie bramy z piętnastego wieku — Barnkowska i Świecka. Kościół Mariacki jest trójnawowy i halowy: ma plan pięćdziesiąt pięć i pół na dwadzieścia osiem metrów, wnętrze wysokie na około osiemnaście metrów i pierwotnie sześć przęseł, a podstawa jego wieży mierzy dziesięć metrów pięćdziesiąt dziewięć na dziesięć pięćdziesiąt dziewięć. Budowano go w fazach od około 1270 roku do lat 1451–1459. Średniowieczną wieżę rozebrano w 1843 roku, a nową, neogotycką, według projektu Friedricha Augusta Stülera wzniesiono w latach 1859–1861; kościół odbudowywano etapami w latach dziewięćdziesiątych, wieżę stabilizowano w latach 1998–1999, a wnętrze ukończono w latach 2007–2009. W mieście rośnie „Wielki Platan” — około trzystu lat, trzydzieści pięć metrów wysokości i ponad dziesięć metrów obwodu pnia.",
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

  districtsHeading: "Do których części Chojny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu pięciu miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Chojnę też przyjadę",
  nearbyParagraphs: [
    "Gryfino jest około dwudziestu pięciu kilometrów stąd, Myślibórz jeszcze bliżej, a Szczecin i Pyrzyce mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gryfino", "Myślibórz", "Szczecin", "Pyrzyce"],

  about: blokOMnie("do Chojny", "w Chojnie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chojny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu pięciu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo te trzy nazwy mylą się nagminnie: Chojna leży w powiecie gryfińskim w województwie zachodniopomorskim — a Chojnice są w pomorskiem, Chojnów w dolnośląskiem.",
    },
    ...faqWspolne("w Chojnie"),
    {
      question: "Skąd wiadomo, czy robi się w kuchni jakieś postępy?",
      answer:
        "Nie da się tego zobaczyć, porównując siebie z dziś do siebie z wczoraj — na tym odcinku nigdy nic nie widać, u nikogo. Trzeba zmienić odcinek: ugotować danie, którego nie robiłaś od roku albo dwóch, najlepiej takie, które kiedyś sprawiało kłopot. Nie po to, żeby je zjeść — po to, żeby zobaczyć, ile rzeczy przestało wymagać zastanowienia.",
    },
    {
      question: "Czy Thermomix pomaga nabrać wprawy?",
      answer:
        "W jednym rodzaju wprawy tak — tej dotyczącej powtarzalnego wykonania — i zdejmuje z głowy sporo rzeczy, które trzeba było pamiętać. Ale część wprawy przejmuje za człowieka i to też jest prawda: kto przez pięć lat gotuje wyłącznie urządzeniem, nie nabiera wprawy w tym, co urządzenie robi za niego. To nie zarzut wobec sprzętu, tylko informacja przydatna przy decyzji, co chcecie zostawić sobie.",
    },
  ],

  geo: { lat: 52.964, lng: 14.4278 },
};
