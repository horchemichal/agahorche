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
 * BIAŁY BÓR — powiat szczecinecki,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 130 mieszkańców (GUS 31.12.2024), 12,8 km²,
 *   gęstość 166,1 os./km².
 * CAŁA GMINA: 4 950 osób, 270,0 km², 44 miejscowości.
 * ⚠⚠ RÓŻNICA 2,32×. NIE MIESZAM TYCH LICZB.
 * ⚠ GEO: 53,8964 / 16,8352.
 *
 * ⚠⚠ HOMONIM: nazwa złożona z dwóch pospolitych słów —
 *   istnieją inne miejscowości Biały Bór (m.in.
 *   w mazowieckiem) oraz uroczyska leśne o tej nazwie.
 *   ≠ BIAŁOGARD ≠ BOBOLICE (sąsiednia gmina).
 *   ROZGRANICZAM W FAQ.
 *
 * ⚠⚠ ODMIANA: ODMIENIAJĄ SIĘ OBA CZŁONY.
 *   „w BIAŁYM BORZE", „do BIAŁEGO BORU".
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Białego Boru".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1382 — lokacja na prawie chełmińskim (trzy źródła).
 * — 1394 — najstarsza znana pieczęć miasta.
 * — 1395 — potwierdzenie praw miejskich dokumentem
 *   lokacyjnym. ⚠ WYSTAWCY NIE WYMIENIAM — wielki mistrz
 *   zakonu, wątek militarno-zakonny.
 * — 1408 — wielki pożar miasta.
 * — ⚠⚠ POŻAR XV-WIECZNY: spłonęło 74 domy, kościół,
 *   ratusz, młyny i 20 stodół. ⚠⚠⚠ ŹRÓDŁO NIE PODAJE
 *   ROKU — tylko „w następnym stuleciu" po 1408.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — zapasy i narzędzia
 *   w jednej szafce prowadzą w obszar zajęty (Płoty,
 *   Polanów, Dobrzany). Wymieniam co najwyżej jako fakt
 *   w sekcji rodzinnej.
 * — 1805 — nowa szkoła; 1833 — szkoła rolnicza.
 * — 1878 — gmach sądu grodzkiego oraz kolej.
 *   ⚠⚠ NIE ŁĄCZĘ TYCH FAKTÓW PRZYCZYNOWO — źródła
 *   podają je osobno, zbieżność roku jest przypadkowa.
 * — Miasto było lokalnym ośrodkiem
 *   handlowo-rzemieślniczym obsługującym okolicę rolniczą.
 * — Zachowane pozostałości młyna wodnego.
 * — ⚠⚠ KOŚCIOŁÓW I CERKWI NIE OPISUJĘ — wątek
 *   wyznaniowy. ⚠⚠⚠ CERKWI NOWOSIELSKIEGO (1992–1997)
 *   NIE WPROWADZAM MIMO WARTOŚCI ARCHITEKTONICZNEJ —
 *   wątek wyznaniowy i mniejszościowy. TWARDA GRANICA.
 * — ⚠⚠ POMNIKA NA RYNKU NIE PODAJĘ — źródła podają
 *   600-lecie (1982) ALBO 630-lecie (2012).
 * — ⚠⚠ HERBU NIE OPISUJĘ — blazon („niewiasta
 *   pomiędzy rogami jelenia, złota piłka") kłóci się
 *   z opisem gminnym („dziewczyna z wiankiem").
 *   SPRZECZNOŚĆ NIEROZSTRZYGNIĘTA.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — GÓRA KRAJOZNAWCÓW:
 *   NAJWYŻSZY SZCZYT WOJEWÓDZTWA ZACHODNIOPOMORSKIEGO,
 *   LEŻY W GMINIE BIAŁY BÓR, na Pojezierzu Bytowskim,
 *   między wsiami Błogowo, Bagniewko, Kosobudy i Kołtki.
 *   ⚠⚠ WYSOKOŚĆ: 245 M N.P.M. wg trzech źródeł
 *   (rowery.wzp.pl, strona gminy, mynaszlaku.pl)
 *   ALBO 227 M wg innej podstrony TEJ SAMEJ strony gminy.
 *   ⚠⚠⚠ PODAJĘ 245 M, ALE MÓWIĘ WPROST, ŻE ŹRÓDŁA
 *   RÓŻNIĄ SIĘ. Nie robię z rozbieżności tematu —
 *   kąt „co da się policzyć" jest zajęty (Dobrzany).
 *   ⚠⚠ NIE PROWADZI DO NIEJ ŻADEN SZLAK TURYSTYCZNY;
 *   dojście z Kołtek to około 3,2 km, mniej więcej
 *   czterdzieści pięć minut. TO JEST CAŁY KĄT.
 *   ⚠ Program „Korona Polski" — najwyższe punkty
 *   szesnastu województw, rozpiętość od 188,8 m
 *   do 2 499 m.
 *   ⚠⚠ PUŁAPKA: Góra Rozwaliny (241 m) bywa błędnie
 *   nazywana najwyższym punktem województwa —
 *   NIE POWIELAM. ⚠⚠ „Pomorska Góra Piasku" (ok. 250 m)
 *   to sztuczny nasyp — NIE MIESZAM.
 *
 * GEOGRAFIA — POZOSTAŁE FAKTY:
 * — Lesistość gminy 50,1 % (GUS).
 * — 17 nazwanych jezior; 6 wód płynących (Bielska
 *   Struga, Dołga, Chechło, Białka, Biała, Gnilec).
 * — Jezioro Łobez: 48,7 ha, dł. 1,8 km, szer. maks.
 *   400 m, gł. maks. 15 m, gł. śr. 5,6 m.
 *   ⚠⚠ GŁĘBOKOŚCI ŚREDNIEJ I MAKSYMALNEJ NIE ZESTAWIAM —
 *   kąt zajęty (Węgorzyno). Podaję samą powierzchnię
 *   i długość.
 * — ⚠⚠ JEZIORA BIELSKO NIE PODAJĘ — źródła podają
 *   268 ha ALBO 257,9–258,7 ha.
 * — Dwa rezerwaty, razem 28,6 ha; obszary chronionego
 *   krajobrazu 8 018 ha; 9 pomników przyrody
 *   (⚠ bez gatunków i obwodów); 13 użytków
 *   ekologicznych.
 * — Kolonia czapli siwej: około 70 par lęgowych
 *   koło wsi Kazimierz.
 * — Szlaki: czarny rowerowy 42,6 km, niebieski 34,1 km,
 *   ścieżka przyrodniczo-leśna nad Łobzem 3,4 km.
 *   ⚠⚠ ŻADEN Z NICH NIE PROWADZI NA GÓRĘ KRAJOZNAWCÓW —
 *   to wzmacnia kąt i podaję to wprost.
 * — Bobolice 16,2 km, Koczała 17,0, Miastko 17,1,
 *   Szczecinek 21,1, Grzmiąca 24,2.
 *   ⚠ TO ODLEGŁOŚCI W LINII PROSTEJ — podaję „około".
 *   ⚠ Koczała i Miastko leżą w woj. pomorskim.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NA LIŚCIE MRiRW
 *   NIE MA WPISU PRZYPISANEGO GMINIE BIAŁY BÓR.
 *   ⚠⚠⚠ NIE PISZĘ „GMINA NIE MA PRODUKTÓW
 *   TRADYCYJNYCH" — to brak dowodu, nie dowód braku.
 *   TEMAT NIE POJAWIA SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: NAJWYŻSZY, ALE BEZ DROGI — o tym, że wiedza,
 * co się chce umieć, i istnienie drogi do tego to dwie
 * osobne rzeczy, a brakuje zwykle tej drugiej.
 * Kąt od Góry Krajoznawców: najwyższy punkt całego
 * województwa leży w gminie Biały Bór i nie prowadzi
 * do niego żaden wytyczony szlak.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najwyższy szczyt województwa zachodniopomorskiego,
 *   Góra Krajoznawców, leży w gminie Biały Bór, między
 *   czterema wsiami, i ma około 245 m n.p.m.,
 * — ŻE NIE PROWADZI DO NIEGO ŻADEN SZLAK — to jest
 *   rdzeń. Gmina ma czterdzieści dwa kilometry szlaku
 *   rowerowego, trzydzieści cztery pieszego i ścieżkę
 *   przyrodniczą, a na najwyższy punkt województwa
 *   trzeba iść bez oznaczeń, jakieś trzy kilometry
 *   z Kołtek,
 * — ⚠⚠ ŻE TO NIE JEST ZANIEDBANIE, TYLKO CZĘSTA
 *   KOLEJNOŚĆ RZECZY: szlaki wytycza się tam, gdzie
 *   ktoś już chodzi, a nie tam, gdzie jest najwyżej,
 * — ⚠⚠ ŻE W KUCHNI WYGLĄDA TO IDENTYCZNIE. Większość
 *   ludzi bez wahania powie, co chciałaby umieć zrobić.
 *   I prawie nikt nie umie powiedzieć, jaki byłby
 *   pierwszy krok — bo do tego celu nikt nie wytyczył
 *   drogi,
 * — ⚠⚠ ŻE Z TEGO BIERZE SIĘ ZŁE ROZPOZNANIE: uznajemy,
 *   że brakuje nam chęci albo czasu, podczas gdy
 *   brakuje trasy. To są zupełnie różne problemy
 *   i tylko jeden z nich da się rozwiązać w niedzielę
 *   wieczorem,
 * — ⚠⚠ ŻE WYTYCZENIE TRASY JEST PROSTSZE, NIŻ WYGLĄDA:
 *   nie polega na planie nauki, tylko na odpowiedzi
 *   na jedno pytanie — co dokładnie robię jako pierwsze
 *   i kiedy. Data i czynność. Bez tego cel zostaje
 *   punktem na mapie bez dojścia,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: BEZ SZLAKU TEŻ SIĘ
 *   WCHODZI. Ludzie chodzą na Górę Krajoznawców mimo
 *   braku oznaczeń — po prostu mniej osób i rzadziej.
 *   Brak drogi nie jest zakazem, tylko kosztem,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie wytycza
 *   trasy i nie odpowiada na pytanie, co chcesz umieć.
 *   Skraca za to odcinek — bo obniża koszt pierwszego
 *   podejścia do rzeczy, których się dotąd nie robiło.
 *   MÓWIĘ TO WPROST: to nadal jest droga, tylko krótsza.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TRZECIEGO TYGODNIA I KOŃCA ZAPAŁU — kąt
 *   zajęty (Konin). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam
 *   chodzi o TO, ŻE NOWOŚĆ SIĘ KOŃCZY; TUTAJ o TO,
 *   ŻE NIE MA OD CZEGO ZACZĄĆ. Ani słowa o zapale,
 *   o nowości i o tym, co się dzieje po kilku
 *   tygodniach. ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO PRZYROSTU WPRAWY — kąt zajęty (Chojna).
 *   Nie piszę o tym, jak się uczysz, tylko o tym,
 *   że nie masz którędy zacząć.
 * — ⚠⚠ ZERO OKRESU PRÓBNEGO I LICZBY PODEJŚĆ — kąt
 *   zajęty (Sławno).
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno). ⚠ Tam chodzi o WARUNEK REZYGNACJI;
 *   tutaj o PIERWSZY KROK.
 * — ⚠⚠ ZERO CO DA SIĘ POLICZYĆ, A CZEGO NIE — kąt
 *   zajęty (Dobrzany). Rozbieżność 245/227 m podaję
 *   jako zastrzeżenie w jednym zdaniu, nigdy jako temat.
 * — ⚠⚠ ZERO ZAPASÓW I NARZĘDZI W JEDNEJ SZAFCE —
 *   obszar zajęty (Płoty, Polanów, Dobrzany).
 *   Pożar z 74 domami i 20 stodołami podaję wyłącznie
 *   jako fakt historyczny.
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno). Głębokości jeziora Łobez nie podaję.
 * — ⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI — kąt
 *   zajęty (Międzyzdroje).
 * — ⚠ ZERO SKALI I DBAŁOŚCI — kąt zajęty (Cedynia).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO PLANU NAUKI ANI LISTY UMIEJĘTNOŚCI —
 *   podaję WYŁĄCZNIE pytanie o pierwszy krok.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO CERKWI, PARAFII GREKOKATOLICKIEJ,
 *   FESTIWALU I POMNIKA TARASA SZEWCZENKI —
 *   wątek wyznaniowy i mniejszościowy.
 *   ⚠⚠⚠ ZERO AKCJI „WISŁA" I PRZESIEDLEŃ.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ZAKONU I WIELKIEGO MISTRZA — wątek
 *   militarno-zakonny. Podaję sam rok 1395.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów nie opisuję.
 * — ⚠ ZERO POŻARÓW JAKO WĄTKU EMOCJONALNEGO.
 * — ⚠ ZERO HERBU — opisy sprzeczne.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl, parseta.org.pl
 *   w zakresie najwyższego punktu województwa.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ wysokości Góry Krajoznawców jako liczby
 *   bezdyskusyjnej — źródła podają 245 albo 227 m.
 * — NIE PISZĘ, że Góra Rozwaliny jest najwyższym punktem
 *   województwa — to nieprawda, ma 241 m.
 * — NIE PODAJĘ roku pożaru z 74 domami — źródło go
 *   nie podaje.
 * — NIE ŁĄCZĘ kolei z budową sądu w 1878 r.
 * — NIE PODAJĘ powierzchni jeziora Bielsko.
 * — NIE OPISUJĘ herbu.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE PODAJĘ ŻADNEGO PLANU NAUKI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Biały Bór leży w powiecie szczecineckim; miasto liczy
 *   2 130 mieszkańców (GUS, 31.12.2024) na 12,8 km²,
 *   a cała gmina 4 950 osób na 270 km², z czterdziestoma
 *   czterema miejscowościami; lasy zajmują 50,1 %
 *   jej powierzchni,
 * — lokacja miasta nastąpiła w 1382 r. na prawie
 *   chełmińskim, najstarsza znana pieczęć pochodzi
 *   z 1394 r., a prawa miejskie potwierdzono dokumentem
 *   lokacyjnym w 1395 r.; w 1408 r. miasto strawił
 *   wielki pożar,
 * — w 1805 r. wybudowano nową szkołę, w 1833 r. szkołę
 *   rolniczą, a w 1878 r. gmach sądu grodzkiego;
 *   w tym samym roku dotarła tu kolej,
 * — w gminie jest siedemnaście nazwanych jezior i sześć
 *   wód płynących — Bielska Struga, Dołga, Chechło,
 *   Białka, Biała i Gnilec; jezioro Łobez ma 48,7 ha
 *   i 1,8 km długości,
 * — w gminie są dwa rezerwaty o łącznej powierzchni
 *   28,6 ha, obszary chronionego krajobrazu o areale
 *   8 018 ha, dziewięć pomników przyrody i trzynaście
 *   użytków ekologicznych; koło wsi Kazimierz gniazduje
 *   kolonia czapli siwej licząca około siedemdziesięciu
 *   par lęgowych,
 * — przez gminę prowadzą szlaki: czarny rowerowy
 *   o długości 42,6 km, niebieski pieszy 34,1 km
 *   i ścieżka przyrodniczo-leśna nad jeziorem Łobez
 *   o długości 3,4 km,
 * — Góra Krajoznawców, najwyższy szczyt województwa
 *   zachodniopomorskiego, leży w gminie Biały Bór
 *   na Pojezierzu Bytowskim, między wsiami Błogowo,
 *   Bagniewko, Kosobudy i Kołtki; ma około 245 m n.p.m.,
 *   nie prowadzi do niej żaden szlak turystyczny,
 *   a dojście z Kołtek zajmuje około 3,2 km i mniej
 *   więcej czterdzieści pięć minut; wchodzi w skład
 *   programu Korona Polski, obejmującego najwyższe
 *   punkty szesnastu województw — od 188,8 m do 2 499 m.
 */
export const BIALY_BOR: CityContent = {
  slug: "bialy-bor",
  h1: "Thermomix Biały Bór – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Biały Bór — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Białym Borze (powiat szczecinecki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Biały Bór — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Białym Borze. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Białego Boru w powiecie szczecineckim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Biały Bór"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najwyższy punkt województwa leży w tej gminie. I nie prowadzi do niego żaden szlak.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Białym Borze – jak wygląda prezentacja?",
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
      id: "szczyt-bez-szlaku",
      heading: "Najwyższy punkt województwa, do którego nie ma drogi",
      paragraphs: [
        "Najwyższy szczyt całego województwa zachodniopomorskiego leży w gminie Biały Bór. Nazywa się Góra Krajoznawców i stoi na Pojezierzu Bytowskim, pomiędzy czterema wsiami: Błogowem, Bagniewkiem, Kosobudami i Kołtkami. Ma około dwustu czterdziestu pięciu metrów — mówię „około”, bo źródła podają dwie różne liczby i nikt tego dotąd nie rozstrzygnął.",
        "I nie prowadzi do niej żaden szlak.",
        "Nie chodzi o to, że gmina nie ma szlaków. Ma czarny rowerowy na czterdzieści dwa kilometry, niebieski pieszy na trzydzieści cztery i ścieżkę przyrodniczo-leśną nad jeziorem Łobez. Żaden z nich nie prowadzi na najwyższy punkt województwa. Z Kołtek trzeba iść na własną rękę, jakieś trzy kilometry, mniej więcej czterdzieści pięć minut, bez jednego oznaczenia po drodze.",
        "To nie jest zaniedbanie. To jest zwykła kolejność rzeczy: szlaki wytycza się tam, gdzie ktoś już chodzi, a nie tam, gdzie jest najwyżej.",
        "W kuchni wygląda to identycznie i kosztuje więcej, niż się wydaje.",
        "Zapytajcie kogokolwiek, co chciałby umieć zrobić, a odpowie bez wahania. Prawie każdy ma taką jedną rzecz — ciasto, którego nigdy nie próbował, danie, które je tylko na mieście, coś, co robiła jedna osoba w rodzinie. Cel jest jasny jak słup na mapie.",
        "A teraz zapytajcie o pierwszy krok. Tu zaczyna się cisza — bo do tego punktu nikt nie wytyczył drogi.",
        "I stąd bierze się złe rozpoznanie. Uznajemy, że brakuje nam chęci albo czasu. Tymczasem brakuje trasy, a to jest zupełnie inny problem — i akurat ten jeden da się rozwiązać w niedzielę wieczorem, przy stole, w pięć minut.",
        "Wytyczenie trasy jest prostsze, niż wygląda, bo nie polega na żadnym planie nauki. Polega na odpowiedzi na jedno pytanie: co dokładnie robię jako pierwsze i kiedy. Czynność i data. Nie „nauczę się piec chleb”, tylko „w sobotę rano kupuję mąkę”. Bez tego cel zostaje punktem na mapie bez dojścia — widocznym, wysokim i nieodwiedzanym.",
        "Uczciwie o drugiej stronie: bez szlaku też się wchodzi. Ludzie chodzą na Górę Krajoznawców mimo braku oznaczeń, po prostu rzadziej i mniej ich jest. Brak drogi nie jest zakazem. Jest kosztem — i warto wiedzieć, że się go płaci.",
        "Na koniec o urządzeniu, bez obietnic. Ono nie wytyczy trasy i na pewno nie odpowie za Was na pytanie, co chcecie umieć.",
        "Skraca natomiast sam odcinek. Obniża koszt pierwszego podejścia do rzeczy, których się dotąd nie robiło — a przy pierwszym podejściu koszt jest zawsze najwyższy. To nadal jest droga, tylko krótsza, i nie udaję, że jest inaczej.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Białym Borze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co chcielibyście umieć zrobić, a dotąd nie próbowaliście. Właśnie to możemy ugotować razem — to najlepszy sposób na pierwszy krok.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Białym Borze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Białego Boru",
      paragraphs: [
        "Biały Bór leży w powiecie szczecineckim: samo miasto liczy ponad dwa tysiące stu mieszkańców (GUS, 31.12.2024) na dwunastu i ośmiu dziesiątych kilometra kwadratowego, a cała gmina blisko pięć tysięcy osób na dwustu siedemdziesięciu, z czterdziestoma czterema miejscowościami — lasy zajmują połowę jej powierzchni. Lokacja miasta nastąpiła w 1382 roku na prawie chełmińskim, najstarsza znana pieczęć pochodzi z 1394, a prawa miejskie potwierdzono dokumentem lokacyjnym w 1395; w 1408 miasto strawił wielki pożar, a w kolejnym stuleciu spłonęło tu siedemdziesiąt cztery domy, kościół, ratusz, młyny i dwadzieścia stodół. W 1805 roku wybudowano nową szkołę, w 1833 szkołę rolniczą, a w 1878 gmach sądu grodzkiego — w tym samym roku dotarła tu kolej. W gminie jest siedemnaście nazwanych jezior i sześć wód płynących: Bielska Struga, Dołga, Chechło, Białka, Biała i Gnilec; jezioro Łobez ma blisko czterdzieści dziewięć hektarów i prawie dwa kilometry długości. Są tu też dwa rezerwaty o łącznej powierzchni dwudziestu ośmiu hektarów, obszary chronionego krajobrazu liczące ponad osiem tysięcy, dziewięć pomników przyrody i trzynaście użytków ekologicznych, a koło wsi Kazimierz gniazduje kolonia czapli siwej — około siedemdziesięciu par lęgowych.",
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

  districtsHeading: "Do których części Białego Boru dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu czterech miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość — gmina ma dwieście siedemdziesiąt kilometrów kwadratowych, w połowie leśnych.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Biały Bór też przyjadę",
  nearbyParagraphs: [
    "Bobolice są około szesnastu kilometrów stąd, Miastko siedemnaście, Szczecinek dwadzieścia jeden. Do Grzmiącej i Barwic też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Szczecinek", "Bobolice", "Miastko", "Barwice", "Czarne"],

  about: blokOMnie("do Białego Boru", "w Białym Borze", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Białego Boru bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu czterech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Biały Bór w powiecie szczecineckim w województwie zachodniopomorskim — nazwa jest złożona z dwóch pospolitych słów i noszą ją też inne miejscowości w Polsce oraz uroczyska leśne, więc przy umawianiu warto podać powiat.",
    },
    ...faqWspolne("w Białym Borze"),
    {
      question: "Chcę nauczyć się gotować coś konkretnego, ale nigdy nie zaczynam. Dlaczego?",
      answer:
        "Najczęściej dlatego, że jest cel, a nie ma trasy — i mylimy jedno z drugim. Najwyższy szczyt województwa leży w gminie Biały Bór i nie prowadzi do niego żaden szlak; chodzi się tam, ale rzadko. W kuchni to samo: łatwo powiedzieć, co chciałoby się umieć, a trudno powiedzieć, jaki byłby pierwszy krok. Pomaga jedno pytanie — co dokładnie robię jako pierwsze i kiedy. Czynność i data, nie postanowienie.",
    },
    {
      question: "Czy na prezentacji możemy ugotować coś, czego nigdy nie robiłam?",
      answer:
        "Najlepiej właśnie to. Powiedz przy umawianiu, co od dawna chodzi Wam po głowie, a nigdy nie doszło do skutku — przywiozę składniki i zrobimy to razem. Pierwsze podejście do nowej rzeczy kosztuje najwięcej i to jest dokładnie ten odcinek, który warto przejść z kimś.",
    },
  ],

  geo: { lat: 53.8964, lng: 16.8352 },
};
