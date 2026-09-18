import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * LWÓWEK ŚLĄSKI — powiat lwówecki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Lwówek Śląski — powiat lwówecki ma
 *   pięć gmin i wszystkie są miejsko-wiejskie.
 * MIASTO: 8 072 mieszkańców (GUS 31.12.2024), 16,7 km²,
 *   gęstość 484,8 os./km² (domyka się, 0,3 %).
 * CAŁA GMINA: 15 968 osób, 240,2 km², 28 wsi.
 *   ⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — 15 968 / 240,2 = 66,5,
 *   a serwis podaje 68. NIE DOMYKA SIĘ.
 *   ⚠⚠ ODSETKA LUDNOŚCI POWIATU NIE PODAJĘ — źródło podaje
 *   34,3 %, a iloraz daje 37,5 %. PISZĘ „około jednej
 *   trzeciej powiatu" albo nic.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ GEO: 51,1128 / 15,5836.
 *
 * ⚠⚠⚠ PUŁAPKA NAJWYŻSZEJ WAGI — LWÓWEK ŚLĄSKI ≠ LWÓWEK.
 *   Lwówek (woj. wielkopolskie, powiat nowotomyski) to
 *   osobne miasto: 2 912 mieszkańców, 3,2 km², prawa
 *   miejskie 1406. OBIE GMINY SĄ MIEJSKO-WIEJSKIE,
 *   A PRZYMIOTNIK OD OBU BRZMI „LWÓWECKI".
 *   ⚠⚠⚠ NIGDY NIE PISZĘ SAMEGO „LWÓWEK" ANI SAMEGO
 *   „LWÓWECKI" BEZ OKREŚLENIA WOJEWÓDZTWA LUB POWIATU.
 *   ⚠⚠ Druga warstwa: rdzeń „lw-" uruchamia skojarzenie
 *   ze LWOWEM. W tekście o kuchni przymiotnik „lwowski"
 *   mógłby paść przy potrawach — ⚠⚠⚠ NIE UŻYWAM GO
 *   ANI RAZU. TWARDA GRANICA.
 *
 * ⚠⚠ ODMIANA: D. LWÓWKA ŚLĄSKIEGO, Ms. W LWÓWKU ŚLĄSKIM.
 *   ⚠ Ruchome „e": Lwówek → Lwówka (ó zostaje, e wypada).
 *   Zapis „Lwóweka" jest błędem.
 *   ⚠⚠ FORMA MIEJSCOWNIKA SPORNA: strona urzędu używa
 *   „w Lwówku Śląskim", norma sugerowałaby „we Lwówku".
 *   NIE ROZSTRZYGNIĘTE W SŁOWNIKU. ⚠⚠⚠ PRZYJMUJĘ FORMĘ
 *   URZĘDOWĄ „W LWÓWKU ŚLĄSKIM" I TRZYMAM JĄ KONSEKWENTNIE
 *   W CAŁYM PLIKU. SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: LWÓWECKI (powiat lwówecki, Lwóweckie Lato
 *   Agatowe — formy urzędowe), ale patrz ostrzeżenie wyżej.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠ PUŁAPKA WEWNĘTRZNA: WIEŚ BRUNÓW LEŻY ZARÓWNO
 *   W GMINIE LWÓWEK ŚLĄSKI, JAK I W GMINIE CHOCIANÓW
 *   (opisywanej w tej samej fali!). ROZGRANICZAM W FAQ.
 *   ⚠ Płóczki Górne (źródło agatów) — istnieją też
 *   Płóczki Dolne. ⚠ Płakowice to dziś część miasta.
 *   ⚠ Brama Lubańska prowadziła do Lubania — czytelnik
 *   może wziąć nazwę za odniesienie do innego miasta.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1209 — przywileje od księcia Henryka I Brodatego.
 * — 1217 — PRAWA MIEJSKIE na wzór magdeburski.
 *   ⚠ Trzy źródła zgodne, BRAK SPRZECZNOŚCI — rzadkość.
 *   Jedna z najstarszych dat lokacyjnych na Śląsku.
 * — RATUSZ: XIII w.; Sala Ślubów wykonana w 1905 r.
 *   przez artystów z wrocławskiej ASP; loch pod budynkiem
 *   głęboki na 6 m.
 *   ⚠⚠⚠ IZBY TORTUR NIE WYMIENIAM — wątek kar.
 *   ⚠ WYSOKOŚCI WIEŻY W METRACH ŹRÓDŁO NIE PODAJE —
 *   i to jest sedno kąta, patrz niżej.
 * — MOST KAMIENNY NA BOBRZE: 1558, przebudowany
 *   pod koniec XVIII w. — służył bez przebudowy
 *   ponad 230 lat.
 * — DWORZEC KOLEJOWY: zespół budynków z 1885 r.
 * — SZWAJCARIA LWÓWECKA: urwiska piaskowca wysokie
 *   na 30 m. ⚠⚠ SUPERLATYWU „największe zgrupowanie form
 *   skalnych w Zachodnich Sudetach" NIE CYTUJĘ.
 * — ⚠⚠ ZŁOTA NIE ROZWIJAM — żadne źródło nie podaje
 *   ani jednej liczby (ilości, lat, sztolni). Wymieniam
 *   wyłącznie mini-muzeum złota w ratuszu jako fakt.
 * — ⚠⚠ LUDNOŚCI HISTORYCZNEJ (1329 — ponad 11 tys.)
 *   NIE PODAJĘ — ciąg zsuwa się w narrację wyludniania.
 * — ⚠⚠ KAMPANII NAPOLEOŃSKIEJ 1813 NIE WYMIENIAM.
 * — ⚠⚠ KOŚCIOŁA NMP (budowa od 1209) NIE OPISUJĘ —
 *   wątek wyznaniowy.
 *
 * LWÓWECKIE LATO AGATOWE — FAKTY:
 * — Trzy dni; ponad 200 stoisk, w tym ponad 80
 *   z minerałami i skamieniałościami; około 50 000
 *   odwiedzających; osobne stanowisko bezpłatnej wyceny
 *   kamieni jubilerskich; agaty pochodzą m.in.
 *   z Płóczek Górnych.
 * — ⚠⚠ LICZBY EDYCJI ANI ROKU PIERWSZEJ NIE PODAJĘ —
 *   rachunek z dwóch źródeł nie domyka się (XV edycja
 *   w 2012, XXVII w 2026 — dwie edycje wypadły).
 * — ⚠⚠ PRZELICZNIKA „sześciokrotność populacji miasta"
 *   NIE PODAJĘ JAKO FAKTU — to mój rachunek. Podaję
 *   obie liczby osobno.
 * — ⚠⚠ STANOWISKA WYCENY NIE UŻYWAM JAKO KĄTA —
 *   „przegląd wymaga osobnego czasu" ociera się o próg
 *   ustalony z góry (Mielno) i o ustaloną procedurę
 *   (Środa Śląska). PODAJĘ JAKO FAKT.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — CO OCALAŁO Z MURÓW:
 *   Lwówek Śląski miał DWA KONCENTRYCZNE PIERŚCIENIE
 *   MURÓW (wewnętrzny z drugiej połowy XIV w., zewnętrzny
 *   z połowy XV w. — około stu lat odstępu),
 *   23 BASZTY i TRZY BRAMY: Bolesławiecką, Złotoryjską
 *   i Lubańską.
 *   ⚠⚠⚠ DO DZIŚ STOI 15 BASZT Z 23 — prawie dwie trzecie.
 *   BRAM NIE OCALAŁA ANI JEDNA: po dwóch zostały baszty
 *   bramne, po Złotoryjskiej nie ma nic.
 *   PRZETRWAŁO TO, CZEGO BYŁO WIELE. ZNIKNĘŁO TO,
 *   CZEGO BYŁO PO JEDNYM. To jest cały kąt.
 *   ⚠⚠ DŁUGOŚCI OBWODU, GRUBOŚCI ANI WYSOKOŚCI MURU
 *   NIE USTALONO — siedem prób, ani jednego wymiaru.
 *   NIE PODAJĘ.
 *   ⚠⚠ ŹRÓDŁA TURYSTYCZNE WYMIENIAJĄ „dwie baszty" —
 *   to tylko obiekty nazwane. PISZĘ „23 baszty,
 *   z których stoi 15", nigdy „dwie baszty".
 *
 * KĄT: NAJSZYBCIEJ ZNIKA TO, CZEGO JEST PO JEDNYM
 * — o tym, że w kuchni giną nie rzeczy najdroższe,
 * tylko te, których jest jedna sztuka. Kąt od lwóweckich
 * murów: z dwudziestu trzech baszt stoi piętnaście,
 * z trzech bram nie ocalała żadna.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że miasto miało 23 baszty i 3 bramy, że baszt stoi
 *   dziś 15, a bram nie ma ani jednej,
 * — ŻE PRZETRWAŁO TO, CO BYŁO POWTARZALNE I SERYJNE,
 *   A ZNIKNĘŁO TO, CO BYŁO JEDYNE W SWOIM RODZAJU.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA DOKŁADNIE TA SAMA REGUŁA:
 *   łyżek jest osiem, więc łyżka zawsze się znajdzie;
 *   ale otwieracz jest jeden, termometr jest jeden,
 *   łopatka do naleśników jest jedna, sitko jest jedno,
 * — ⚠⚠ ŻE RZECZY WYSTĘPUJĄCE W KILKU EGZEMPLARZACH
 *   PILNUJĄ SIĘ SAME — brak jednej niczego nie blokuje
 *   i nikt go nie zauważa,
 * — ⚠⚠ ŻE UNIKAT NIE MA TEJ OSŁONY: ginie, zostaje
 *   u kogoś, wypada za szufladę, znajduje się po roku —
 *   i za każdym razem blokuje całą czynność,
 * — ⚠⚠ ŻE PRAKTYCZNY RUCH JEST JEDEN I ZAJMUJE KWADRANS:
 *   wypisz rzeczy, których masz po jednej sztuce.
 *   Lista będzie krótka. TYLKO IM przydziel miejsca
 *   imienne, do których wracają zawsze,
 * — ⚠⚠ ŻE TO NIE JEST TEKST O TYM, CO TRZYMAĆ BLISKO
 *   ANI ILE RZECZY MIEĆ — ROZGRANICZAM WPROST, BO OBA
 *   TE OBSZARY SĄ ZAJĘTE,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część unikatów jest
 *   unikatami dlatego, że są rzadko potrzebne —
 *   i wtedy stałe miejsce nic nie kosztuje, ale też
 *   niewiele daje. Reguła dotyczy tych pojedynczych
 *   rzeczy, których używa się CZĘSTO,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest z definicji
 *   unikatem — jest jedno i nie ma zastępstwa.
 *   MÓWIĘ TO WPROST jako argument OSTROŻNOŚCI: jeśli
 *   coś w nim przestanie działać, nie ma drugiego
 *   egzemplarza w szufladzie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). Nie mówię, ile rzeczy mieć ani czego się
 *   pozbyć. Mówię, którym przydzielić miejsce.
 * — ⚠⚠⚠ ZERO POD RĘKĄ KONTRA SCHOWANE — kąt zajęty
 *   (Płoty). ⚠⚠ TO JEST NAJBLIŻSZY OBSZAR: tamten tekst
 *   mówi, CO trzymać blisko; ten mówi, CZEMU przydzielić
 *   ADRES. ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM.
 * — ⚠⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW I FUNKCJI MIEJSC —
 *   kąt zajęty (Tychowo). Nie przypisuję funkcji
 *   miejscom ani nie dzielę kuchni na strefy.
 * — ⚠⚠ ZERO ODEJMOWANIA — kąt zajęty (Strzegom).
 * — ⚠⚠ ZERO LICZENIA CZĘŚCI — kąt zajęty (Pieszyce).
 * — ⚠⚠ ZERO MURÓW JAKO OBWODU, GRANICY I PUNKTÓW
 *   WEJŚCIA — kąty zajęte (Recz, Moryń, Resko).
 *   ⚠⚠⚠ TO JEST DRUGIE DUŻE RYZYKO, BO PISZĘ O MURACH.
 *   Mury podaję WYŁĄCZNIE jako zbiór policzalnych
 *   elementów — 23 i 3 — nigdy jako granicę, ochronę
 *   ani wejście.
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty
 *   (Kamienna Góra). Dlatego NIE UŻYWAM proporcji
 *   ratusza (1:3, wieża równa elewacji) jako kąta.
 *   PODAJĘ JAKO FAKT.
 * — ⚠⚠ ZERO ETYKIET I OPISYWANIA RZECZY — kąt zajęty
 *   (Oborniki Śląskie). „Miejsce imienne" to adres,
 *   nie podpis — nie piszę o naklejkach.
 * — ⚠⚠ ZERO GĘSTOŚCI I PRZESTRZENI KUCHNI.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ GOTOWEJ LISTY UNIKATÓW — podaję kilka
 *   przykładów i zasadę, nie listę do skopiowania.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ALKOHOLU. ⚠⚠⚠ GMINA MA WPIS NA KRAJOWEJ
 *   LIŚCIE PRODUKTÓW TRADYCYJNYCH, ALE DOTYCZY NAPOJU
 *   ALKOHOLOWEGO. ⚠⚠⚠ DLATEGO TEMAT LISTY PRODUKTÓW
 *   TRADYCYJNYCH NIE POJAWIA SIĘ W TYM TEKŚCIE W OGÓLE —
 *   nie mogę napisać „ma", bo musiałbym wymienić,
 *   i nie wolno mi napisać „nie ma", bo to nieprawda.
 *   MILCZENIE JEST JEDYNYM UCZCIWYM WYJŚCIEM.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WOJENNEGO (kampania 1813, husyci).
 * — ⚠⚠ ZERO KAR I SĄDOWNICTWA — izby tortur nie
 *   wymieniam.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO WYLUDNIANIA I DEMOGRAFII HISTORYCZNEJ.
 * — ⚠ ZERO PRZYMIOTNIKA „LWOWSKI".
 * — ⚠ ZERO SUPERLATYWÓW O SZWAJCARII LWÓWECKIEJ.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ odsetka ludności powiatu.
 * — NIE PODAJĘ długości, grubości ani wysokości murów —
 *   nie ustalono ani jednego wymiaru.
 * — NIE PODAJĘ wysokości wieży ratusza w metrach —
 *   źródło podaje wyłącznie proporcje.
 * — NIE PODAJĘ liczby edycji Lwóweckiego Lata Agatowego
 *   ani roku pierwszej — rachunek się nie domyka.
 * — NIE PODAJĘ żadnych liczb o wydobyciu złota —
 *   nie ustalono.
 * — NIE CYTUJĘ superlatywów o formach skalnych.
 * — NIE PISZĘ ANI SŁOWA o Liście Produktów Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE MYLĘ Lwówka Śląskiego z Lwówkiem wielkopolskim.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lwówek Śląski jest siedzibą powiatu lwóweckiego;
 *   miasto liczy 8 072 mieszkańców (GUS, 31.12.2024)
 *   na 16,7 km², a cała gmina miejsko-wiejska 15 968 osób
 *   na 240,2 km², z dwudziestoma ośmioma wsiami,
 * — książę Henryk I Brodaty nadał miejscowości przywileje
 *   w 1209 r., a prawa miejskie na wzór magdeburski
 *   miasto otrzymało w 1217 — to jedna z najstarszych
 *   dat lokacyjnych na Śląsku,
 * — miasto otaczały dwa koncentryczne pierścienie murów:
 *   wewnętrzny z drugiej połowy XIV w. i zewnętrzny
 *   z połowy XV; było 23 baszty i trzy bramy —
 *   Bolesławiecka, Złotoryjska i Lubańska, nazwane
 *   od miast, do których prowadziły; do dziś stoi
 *   15 baszt, a z bram nie zachowała się żadna —
 *   po dwóch pozostały baszty bramne,
 * — ratusz pochodzi z XIII w.; źródła nie podają jego
 *   wymiarów, tylko proporcje: bryła ma stosunek 1 : 3,
 *   a wieża jest wysoka dokładnie tyle, ile długa jest
 *   południowa elewacja; pod budynkiem jest loch głęboki
 *   na 6 m, a Salę Ślubów wykonali w 1905 r. artyści
 *   z wrocławskiej Akademii Sztuk Pięknych; wewnątrz
 *   działa mini-muzeum złota,
 * — kamienny most na Bobrze wzniesiono w 1558 r.
 *   i przebudowano dopiero pod koniec XVIII w.; zespół
 *   budynków dworca pochodzi z 1885 r., a piaskowcowe
 *   urwiska Szwajcarii Lwóweckiej mają do 30 m wysokości,
 * — Lwóweckie Lato Agatowe trwa trzy dni, ma ponad
 *   200 stoisk — w tym ponad 80 z minerałami
 *   i skamieniałościami — i ściąga około 50 000 osób;
 *   w programie jest osobne stanowisko bezpłatnej wyceny
 *   kamieni jubilerskich, a prezentowane agaty pochodzą
 *   między innymi z Płóczek Górnych.
 */
export const LWOWEK_SLASKI: CityContent = {
  slug: "lwowek-slaski",
  h1: "Thermomix Lwówek Śląski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lwówek Śląski — prezentacja i cena",
  seoDescription:
    "Thermomix w Lwówku Śląskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lwówek Śląski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lwówku Śląskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lwówka Śląskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu ośmiu wsi w gminie.",

  highlights: highlightyStandardowe("Lwówek Śląski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Z dwudziestu trzech baszt stoi piętnaście. Z trzech bram — ani jedna.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lwówku Śląskim – jak wygląda prezentacja?",
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
      id: "co-jest-po-jednym",
      heading: "Najszybciej znika to, czego jest po jednym",
      paragraphs: [
        "Lwówek Śląski otaczały dwa koncentryczne pierścienie murów — wewnętrzny z drugiej połowy czternastego wieku, zewnętrzny z połowy piętnastego. Było w nich dwadzieścia trzy baszty i trzy bramy: Bolesławiecka, Złotoryjska i Lubańska, każda nazwana od miasta, do którego prowadziła.",
        "Dziś stoi piętnaście baszt z dwudziestu trzech. Prawie dwie trzecie.",
        "Bram nie ocalała ani jedna. Po dwóch zostały baszty bramne, po Złotoryjskiej nie ma nic.",
        "Przetrwało to, czego było wiele i co było do siebie podobne. Zniknęło to, czego było po jednym i co było jedyne w swoim rodzaju.",
        "W kuchni działa dokładnie ta sama reguła i prawie nikt jej nie zauważa.",
        "Łyżek jest osiem, więc łyżka zawsze się znajdzie. Widelców tyle samo. Ścierek kilka, kubków kilkanaście. Brak jednej sztuki z takiego kompletu niczego nie blokuje i nikt go w ogóle nie odnotowuje.",
        "Ale otwieracz jest jeden. Termometr jest jeden. Łopatka do naleśników jest jedna. Sitko do herbaty jest jedno. Obieraczka — jedna.",
        "I to właśnie te rzeczy giną. Zostają u kogoś po wypożyczeniu, wypadają za szufladę, lądują w torbie z rzeczami na działkę, znajdują się po roku za pojemnikiem, o którego istnieniu też się zapomniało. Za każdym razem blokują całą czynność, bo nie ma czym ich zastąpić.",
        "Rzeczy w kilku egzemplarzach pilnują się same. Unikat nie ma tej osłony.",
        "Ruch, który to rozwiązuje, zajmuje kwadrans: wypisz rzeczy, których masz po jednej sztuce. Lista będzie krótsza, niż myślisz — zwykle mieści się na pół kartki. I tylko tym przydziel miejsce imienne, do którego wracają zawsze, bez wyjątku.",
        "Dopowiem, bo temat leży blisko dwóch innych: to nie jest tekst o tym, co trzymać pod ręką, ani o tym, ile rzeczy w ogóle mieć. Nie mówię, żeby czegokolwiek się pozbywać. Mówię tylko, którym rzeczom przydzielić stały adres — i że lista jest krótka właśnie dlatego, że dotyczy pojedynczych sztuk.",
        "Uczciwie o drugiej stronie: część unikatów jest unikatami dlatego, że są rzadko potrzebne. Jedna foremka używana raz w roku nie wymaga żadnego rytuału — stałe miejsce nic dla niej nie kosztuje, ale też niewiele daje. Reguła dotyczy tych pojedynczych rzeczy, po które sięgasz często.",
        "Na koniec o urządzeniu, i to nie jest argument za zakupem.",
        "Thermomix jest z definicji unikatem: jest jeden i nie ma go czym zastąpić w szufladzie. To argument za ostrożnością, nie za entuzjazmem — jeśli coś w nim przestanie działać, nie ma drugiego egzemplarza. Dlatego przy zakupie warto zapytać nie o funkcje, tylko o to, kto odbierze telefon, gdy trzeba będzie zgłosić serwis. U mnie to ta sama osoba, która przyjedzie na prezentację.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lwówku Śląskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego u Was w kuchni szuka się najczęściej. Zwykle okazuje się, że to jedna konkretna rzecz — i zwykle jest jedyna w swoim rodzaju.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lwówku Śląskim"),
    sekcjaRaty("w Lwówku Śląskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Lwówka Śląskiego",
      paragraphs: [
        "Lwówek Śląski jest siedzibą powiatu lwóweckiego. Samo miasto liczy 8 072 mieszkańców (GUS, 31.12.2024) na niecałych siedemnastu kilometrach kwadratowych, a cała gmina miejsko-wiejska blisko szesnaście tysięcy osób na dwustu czterdziestu, z dwudziestoma ośmioma wsiami. Książę Henryk I Brodaty nadał miejscowości przywileje w 1209 roku, a prawa miejskie na wzór magdeburski miasto otrzymało w 1217 — to jedna z najstarszych dat lokacyjnych na Śląsku i, co rzadkie, wszystkie sprawdzone źródła podają ją zgodnie. Miasto otaczały dwa koncentryczne pierścienie murów: wewnętrzny z drugiej połowy czternastego wieku i zewnętrzny z połowy piętnastego, a więc stawiane w odstępie mniej więcej stulecia. Baszt było dwadzieścia trzy, bram trzy — Bolesławiecka, Złotoryjska i Lubańska, każda nazwana od miasta, do którego prowadziła. Do dziś stoi piętnaście baszt, a z bram nie zachowała się żadna. Ratusz pochodzi z trzynastego wieku i jest opisany w źródłach nie wymiarami, lecz proporcjami: bryła ma stosunek jeden do trzech, a wieża jest wysoka dokładnie tyle, ile długa jest południowa elewacja. Pod budynkiem jest loch głęboki na sześć metrów, Salę Ślubów wykonali w 1905 roku artyści z wrocławskiej Akademii Sztuk Pięknych, a wewnątrz działa mini-muzeum złota. Kamienny most na Bobrze wzniesiono w 1558 roku i przebudowano dopiero pod koniec osiemnastego wieku — służył bez zmian ponad dwieście trzydzieści lat. Zespół budynków dworca pochodzi z 1885 roku, a piaskowcowe urwiska Szwajcarii Lwóweckiej mają do trzydziestu metrów wysokości. Lwóweckie Lato Agatowe trwa trzy dni, ma ponad dwieście stoisk — w tym ponad osiemdziesiąt z minerałami i skamieniałościami — i ściąga około pięćdziesięciu tysięcy osób; prezentowane agaty pochodzą między innymi z Płóczek Górnych.",
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

  districtsHeading: "Do których części Lwówka Śląskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu ośmiu wsi w gminie — a gmina ma dwieście czterdzieści kilometrów kwadratowych. Do Płóczek Górnych i do najdalszych miejscowości też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Lwówek Śląski też przyjadę",
  nearbyParagraphs: [
    "Trzy dawne bramy miejskie nazwano od miast, do których prowadziły: Bolesławiecka na północ, Złotoryjska na wschód, Lubańska na zachód. Do wszystkich trzech dojeżdżam, tak samo jak do Gryfowa Śląskiego, Lubomierza, Mirska i Wlenia — wszędzie bezpłatnie.",
  ],
  nearbyTowns: ["Bolesławiec", "Złotoryja", "Lubań", "Gryfów Śląski", "Jelenia Góra"],

  about: blokOMnie("do Lwówka Śląskiego", "w Lwówku Śląskim i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lwówka Śląskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu ośmiu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Ważne, żeby przy umawianiu podać pełną nazwę z członem „Śląski”: Lwówek bez tego członu to osobne miasto w Wielkopolsce, w powiecie nowotomyskim, a przymiotnik „lwówecki” odnosi się do obu. W gminie leży też wieś Brunów — wieś o tej samej nazwie jest również w gminie Chocianów, więc przy niej warto dodać gminę.",
    },
    ...faqWspolne("w Lwówku Śląskim"),
    {
      question: "Ciągle gubię drobne narzędzia kuchenne. Co z tym zrobić?",
      answer:
        "Zauważ najpierw, które to są — to prawie zawsze rzeczy, których masz po jednej sztuce. W Lwówku Śląskim z dwudziestu trzech baszt stoi piętnaście, a z trzech bram nie ocalała ani jedna: przetrwało to, czego było wiele. Łyżek jest osiem, więc łyżka zawsze się znajdzie; ale otwieracz, termometr, łopatka do naleśników i sitko są po jednym i to one giną, blokując za każdym razem całą czynność. Wypisz rzeczy, których masz po jednej sztuce — lista mieści się zwykle na pół kartki — i tylko im przydziel stałe miejsce, do którego wracają zawsze.",
    },
    {
      question: "Co jeśli Thermomix się zepsuje? Nie ma przecież drugiego.",
      answer:
        "To uczciwe pytanie i odpowiedź brzmi: nie ma. Urządzenie jest jedno i nie ma go czym zastąpić w szufladzie — to argument za ostrożnością przy zakupie, nie przeciwko niemu. Dlatego warto pytać nie o funkcje, tylko o to, kto odbierze telefon przy zgłoszeniu serwisowym. U mnie to ta sama osoba, która przyjeżdża na prezentację, i numer zostaje ten sam.",
    },
  ],

  geo: { lat: 51.1128, lng: 15.5836 },
};
