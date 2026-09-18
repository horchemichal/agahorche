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
 * SZAMOCIN — powiat chodzieski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ SZAMOCIN NIE MA.
 * MIASTO: 3 888 mieszkańców (GUS 31.12.2024), 4,7 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   832,5 os./km², iloraz daje 827,2. ROZBIEŻNOŚĆ 5,3.
 *   Gęstość policzono od 4,67 km², co potwierdza
 *   niezależne źródło. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP] — sprawdzone
 *   w pięciu serwisach bez wyniku.
 * CAŁA GMINA: 7 134 osoby, 127,1 km², gęstość
 *   56 os./km².
 *   ⚠ [ZW — 7 134 / 127,1 = 56,1 → 56. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ STRONA GMINY PODAJE 125,46 km² wobec 127,1
 *   z GUS — różnica 164 ha. PODAJĘ LICZBĘ GUS
 *   I O ROZBIEŻNOŚCI NIE PISZĘ (figura rejestrowa
 *   należy do Kleczewa, ta sama fala).
 * SOŁECTWA: 12 SOŁECTW (strona gminy) i 20
 *   MIEJSCOWOŚCI (ewidencja + wykaz wsi).
 *   ⚠⚠ 21 OBRĘBÓW EWIDENCYJNYCH — ⚠⚠⚠ RÓŻNICY 21/20
 *   NIE ROBIĘ KĄTEM (figura rejestrowa zajęta).
 *   ⚠ en.wikipedia podaje 33 wsie i osady — NIE UŻYWAM
 *   TEJ LICZBY.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 *   ⚠⚠ ROZBICIE Z 2006 R.: miasto 4 267, obszar wiejski
 *   3 025. PODAJĘ JAKO FAKT HISTORYCZNY.
 * JEZIORO SIEKIERA — miasto leży nad nim. PODAJĘ.
 * ⚠⚠ GEO: TRZY ŹRÓDŁA, ROZSTĘP OK. 300 M W DŁUGOŚCI.
 *   PRZYJMUJĘ 53,030 / 17,125 — mieści wszystkie trzy
 *   w granicach niepewności.
 *
 * ⚠⚠ ODMIANA — TYP NA -IN:
 *   D. do SZAMOCINA · Ms. w SZAMOCINIE ·
 *   N. Szamocinem · C. Szamocinowi.
 *   Przymiotnik: SZAMOCIŃSKI.
 *   ⚠⚠⚠ TO NAJLEPIEJ UDOKUMENTOWANY PRZYMIOTNIK
 *   W TEJ FALI — poświadczony dosłownie w formach
 *   „Szamocińskiego" i „szamocińskich" na stronie
 *   gminy. UŻYWAM GO SWOBODNIE.
 *   ⚠⚠⚠ BŁĄD 1: „do Szamocinu", „w Szamocinu" —
 *   kalka z typu „do Londynu".
 *   ⚠⚠⚠ BŁĄD 2, NAJGROŹNIEJSZY: przymiotnik
 *   „SZAMOTULSKI" — czyli przymiotnik od SZAMOTUŁ,
 *   innego miasta w tym samym województwie.
 *   WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ KOLIZJE NAZW:
 *   — SZAMOCIN, woj. MAZOWIECKIE — wieś w gminie
 *     Strachówka, powiat wołomiński. ZWERYFIKOWANE.
 *     PODAJĘ.
 *   — ⚠⚠⚠ NAJGROŹNIEJSZA PUŁAPKA: SZAMOTUŁY (powiat
 *     szamotulski, to samo województwo). Mieszane są
 *     zarówno przymiotniki (szamociński vs szamotulski),
 *     jak i powiaty (chodzieski vs szamotulski).
 *     ⚠⚠ SZAMOCIN LEŻY W POWIECIE CHODZIESKIM.
 *     PILNUJĘ TEGO.
 *   — W gminie jest wieś SZAMOTY — odrębna
 *     miejscowość, nie skrót od nazwy miasta ani
 *     od Szamotuł. WSPOMINAM.
 *   — W gminie są też JAKTOROWO i JAKTORÓWKO oraz
 *     JÓZEFOWICE, JÓZEFOWO i JÓZEFY — pary i trójki
 *     nazw o wspólnym rdzeniu. WSPOMINAM.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: ⚠⚠⚠ DWIE WERSJE, 1282 i 1364
 *     — ROZBIEŻNOŚĆ 82 LATA. PODAJĘ OBIE I NIE
 *     WYBIERAM.
 *     ⚠ Urząd roku nie podaje, ale podaje formę
 *     i charakter: „Szamoczino, osada rybacka
 *     na Pałukach". PODAJĘ TO — osada RYBACKA, nie
 *     rolnicza ani targowa.
 *     ⚠⚠ TEKSTY POPULARNE PRZYPISUJĄ SZAMOCIN
 *     DO KRAJNY. PISZĘ WYŁĄCZNIE „urząd lokuje ją
 *     na Pałukach" — NIE ROZSTRZYGAM.
 *   — PRAWA MIEJSKIE: 20 GRUDNIA 1745 R. — dziedzic
 *     „wydał wsi prawa miasta na prawie magdeburskim";
 *     29 LISTOPADA 1748 R. — król „potwierdził je
 *     i uzupełnił przywilejem lokacyjnym".
 *     ⚠⚠⚠ FIGURY „nadane dwa razy" (Wyrzysk)
 *     I „rocznicę liczono od późniejszej daty"
 *     (Odolanów) ZAJĘTE. PODAJĘ OBIE DATY JEDNYM
 *     ZDANIEM W CZĘŚCI O RODZINIE I NIC Z NICH
 *     NIE WYCIĄGAM.
 *     ⚠⚠ Powszechnie podawany rok 1748 to data
 *     potwierdzenia, nie nadania. MOGĘ TO ZAZNACZYĆ
 *     PÓŁ ZDANIEM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NAJMŁODSZY PRZY RYNKU:
 *   DATOWANE OBIEKTY PRZY RYNKU I W MIEŚCIE:
 *     budynek apteki we wschodniej pierzei rynku
 *       — 1840 R.
 *     RATUSZ — OK. 1887 R.
 *     szkoła — 1911 R.
 *     łazienki miejskie nad jeziorem Siekiera — 1935 R.
 *     nowa szkoła — oddana 2 WRZEŚNIA 1985 R.
 *   CZYLI: RATUSZ, budynek, który w każdym mieście
 *   uchodzi za najważniejszy i najstarszy przy rynku,
 *   JEST OK. 47 LAT MŁODSZY OD KAMIENICY APTECZNEJ.
 *   ⚠⚠⚠ NIE TWIERDZĘ, ŻE OBA STOJĄ W TEJ SAMEJ
 *   PIERZEI — źródło lokuje w pierzei wschodniej
 *   tylko aptekę. PISZĘ „przy rynku".
 *   ⚠⚠ RÓŻNICĘ 47 LAT PODAJĘ JAKO „około",
 *   bo data ratusza jest podana jako „ok. 1887".
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM — dotyczy
 *   to kościoła z lat 1827–1835 i kościoła z 1905 r.
 *
 * KĄT: NAJMŁODSZY PRZY RYNKU
 * — o tym, że rzecz, która wygląda na środek, przyszła
 * zwykle ostatnia. Kąt ze Szamocina: ratusz z około
 * 1887 r. jest o blisko pół wieku młodszy od kamienicy
 * aptecznej z 1840 r.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kamienica apteczna przy rynku pochodzi z 1840 r.,
 *   a ratusz z około 1887 — czyli jest o blisko
 *   pół wieku młodszy. TO JEST RDZEŃ,
 * — że dalej: szkoła 1911, łazienki miejskie nad
 *   jeziorem Siekiera 1935, nowa szkoła 2 września
 *   1985 r.,
 * — ⚠⚠ że nie twierdzę, że apteka i ratusz stoją
 *   w tej samej pierzei,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: rzecz, która stoi
 *   na środku blatu i wygląda na centrum kuchni, jest
 *   zwykle najnowsza,
 * — ⚠⚠ ŻE PRACĘ NIOSĄ RZECZY STARSZE I NIEEFEKTOWNE:
 *   jeden nóż, jedna patelnia, jedna deska, jedna
 *   drewniana łyżka,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: policz, ile lat mają trzy
 *   rzeczy, których używasz codziennie. Zwykle więcej
 *   niż to, co stoi najbardziej na widoku,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie znaczy, że nowe
 *   jest gorsze. Znaczy, że nowe musi sobie miejsce
 *   wypracować, a nie dostaje go z racji bycia nowym,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix jest najnowszą
 *   rzeczą, jaka stanie na Waszym blacie, i nie stanie
 *   się najstarszą. Nóż i patelnia go przeżyją.
 *   MÓWIĘ TO WPROST, choć sprzedaję urządzenie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO INSTYTUCJI MŁODSZEJ OD SWOICH ŚCIAN —
 *   kąt zajęty (Puszczykowo). ⚠⚠⚠ TO NAJBLIŻSZY
 *   SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam
 *   instytucja była młodsza od SWOJEGO budynku;
 *   TU budynek jest młodszy od SĄSIEDNICH budynków.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NOWEGO NA STARYM NOŚNYM — kąt zajęty
 *   (Czarnków). Tu nic nie stoi na cudzych
 *   fundamentach.
 * — ⚠⚠⚠ ZERO ROZEBRANEGO, ZANIM POWSTAŁO NOWE —
 *   kąt zajęty (Opalenica).
 * — ⚠⚠⚠ ZERO DRUGIEGO OBOK ZAMIAST NAPRAWY STAREGO —
 *   kąt zajęty (Grodzisk Wielkopolski). DLATEGO DWÓCH
 *   SZKÓŁ (1911 i 1985) NIE ROBIĘ FIGURĄ — podaję
 *   jako daty.
 * — ⚠⚠⚠ ZERO CZTERECH WYKONAWCÓW JEDNEGO OBIEKTU —
 *   kąt zajęty (Buk).
 * — ⚠⚠⚠ ZERO NADANEGO DWA RAZY — kąt zajęty (Wyrzysk).
 *   DLATEGO DAT 1745 I 1748 NIE ROZWIJAM.
 * — ⚠⚠ ZERO DOKUMENTU, KTÓRY ZOSTAŁ, A RZECZY NIE —
 *   kąt zajęty (Golina, ta sama fala). ⚠ UWAGA: tam
 *   nie zostało nic starego; TU rzeczy stoją, tylko
 *   w innej kolejności, niż się wydaje. ROZGRANICZAM.
 * — ⚠⚠ ZERO CZTERECH REJESTRÓW, CZTERECH LICZB —
 *   kąt zajęty (Kleczew, ta sama fala). DLATEGO
 *   O RÓŻNICY 21/20 I 125,46/127,1 NIE PISZĘ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK. ⚠ „apteka" to funkcja
 *   budynku, nie nazwa — WOLNO.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ SZCZEGÓLNIE:
 *   BUDYNEK APTECZNY PODAJĘ WYŁĄCZNIE JAKO DATOWANĄ
 *   KAMIENICĘ. ANI SŁOWA O LEKACH, LECZENIU
 *   I ZDROWIU.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO ODRADZANIA ZAKUPU NOWEGO SPRZĘTU.
 *   Sekcja porządkuje hierarchię, nie zniechęca.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   ROZBIOROWEGO · ZERO WĄTKU WYZNANIOWEGO I OBIEKTÓW
 *   SAKRALNYCH · ZERO WĄTKU MILITARNEGO · ZERO
 *   ALKOHOLU · ZERO POŻARÓW I POWODZI · ZERO
 *   BEZROBOCIA · ZERO HERBU · ZERO UZDROWISK
 *   (łazienki miejskie podaję jako datowany obiekt
 *   nad jeziorem, BEZ WĄTKU ZDROWOTNEGO).
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE TWIERDZĘ, że apteka i ratusz stoją w tej samej
 *   pierzei.
 * — NIE WYBIERAM między 1282 i 1364 r.
 * — NIE ROZSTRZYGAM, czy Szamocin leży na Pałukach
 *   czy na Krajnie — podaję tylko, co pisze urząd.
 * — NIE PODAJĘ największej wsi.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE WYMIENIAM obiektów sakralnych.
 * — NIE PODAJĘ liczby 33 wsi z en.wikipedii ani
 *   powierzchni 125,46 km².
 * — NIE PODAJĘ liczby obiektów w gminnej ewidencji
 *   zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Szamocin leży w powiecie chodzieskim, nad jeziorem
 *   Siekiera, i liczy 3 888 mieszkańców (GUS,
 *   31.12.2024) na 4,7 km²; cała gmina miejsko-wiejska
 *   to 7 134 osoby na 127,1 km², czyli 56 osób
 *   na kilometr kwadratowy, i obejmuje 12 sołectw
 *   oraz 20 miejscowości,
 * — pierwsza wzmianka podawana jest rozbieżnie: jedne
 *   źródła mówią o 1282 r., inne o 1364; strona gminy
 *   roku nie podaje, ale zapisuje najstarszą formę
 *   nazwy — „Szamoczino" — i określa osadę jako rybacką,
 *   lokując ją na Pałukach,
 * — prawa miasta na prawie magdeburskim wydał wsi
 *   dziedzic 20 grudnia 1745 r., a król potwierdził je
 *   i uzupełnił przywilejem lokacyjnym 29 listopada
 *   1748 r.,
 * — budynek apteki we wschodniej pierzei rynku
 *   pochodzi z 1840 r., ratusz z około 1887 r., szkoła
 *   z 1911 r., łazienki miejskie nad jeziorem Siekiera
 *   z 1935 r., a nową szkołę oddano 2 września 1985 r.,
 * — w rozbiciu z 2006 r. miasto liczyło 4 267
 *   mieszkańców, a obszar wiejski gminy 3 025,
 * — przymiotnik od nazwy miasta brzmi „szamociński"
 *   i jest poświadczony na stronie gminy,
 * — w gminie leżą m.in. Szamoty, Jaktorowo
 *   i Jaktorówko, a odrębna wieś Szamocin leży
 *   w gminie Strachówka w województwie mazowieckim.
 */
export const SZAMOCIN: CityContent = {
  slug: "szamocin",
  h1: "Thermomix Szamocin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szamocin — cena i prezentacja",
  seoDescription:
    "Thermomix w Szamocinie w powiecie chodzieskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szamocin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szamocinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szamocina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwunastu sołectw w gminie.",

  highlights: highlightyStandardowe("Szamocin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ratusz przy rynku jest młodszy od kamienicy obok. O pół wieku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szamocinie – jak wygląda prezentacja?",
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
      id: "najmlodszy-przy-rynku",
      heading: "Najmłodszy przy rynku",
      paragraphs: [
        "Przy rynku w Szamocinie stoi kamienica z 1840 roku, w której mieściła się apteka. Ratusz pochodzi z około 1887 roku. Czyli budynek, który w każdym mieście uchodzi za ten najważniejszy i zwykle najstarszy przy rynku, jest tu o blisko pół wieku młodszy od kamienicy obok. Nie twierdzę przy tym, że oba stoją w tej samej pierzei — źródło lokuje we wschodniej tylko tę pierwszą.",
        "Reszta datowana idzie dalej w tę samą stronę: szkoła 1911, łazienki miejskie nad jeziorem Siekiera 1935, nowa szkoła oddana 2 września 1985 roku.",
        "Piszę o tym, bo w kuchni układ jest identyczny i nikt go tak nie widzi.",
        "Rzecz, która stoi na środku blatu, wygląda na centrum kuchni. Jest największa, najbardziej widoczna, najczęściej pokazywana gościom. I prawie zawsze jest najnowsza.",
        "A pracę niosą rzeczy starsze i zupełnie nieefektowne. Jeden nóż, którym się kroi wszystko. Jedna patelnia, która jedna wie, jak się rozgrzewa. Jedna deska. Jedna drewniana łyżka, wyszczerbiona, której nikt nie wymienia, bo pasuje do ręki. Te rzeczy mają zwykle więcej lat niż cokolwiek, co stoi na widoku — i one ustawiają sposób, w jaki się u Was gotuje.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o instytucji młodszej od budynku, w którym siedzi. Tu chodzi o coś innego — nie o budynek wobec jego własnego lokatora, ale o budynek wobec sąsiadów, między którymi stanął jako ostatni.",
        "Ruch jest jeden i można go zrobić dzisiaj. Policzcie, ile lat mają trzy rzeczy, których używacie codziennie. Nie te najdroższe — te trzy, po które sięgacie odruchowo. Zwykle wychodzi więcej, niż się spodziewacie, i zwykle więcej niż to, co stoi najbardziej na środku.",
        "Uczciwie o drugiej stronie, bo to nie jest pochwała starego sprzętu. Nowe nie jest gorsze i ratusz z 1887 roku był w Szamocinie potrzebny. Chodzi o hierarchię: nowa rzecz musi sobie miejsce wypracować, a nie dostaje go z racji bycia nową i najdroższą. Sprzęt, który po roku stoi w szafce, nie zrobił tego, co obiecywał — i to nie jest wina osoby, która go kupiła.",
        "I uczciwie o sprzęcie, bo tu mam interes i nie zamierzam go ukrywać. Thermomix będzie najnowszą rzeczą na Waszym blacie i nie stanie się najstarszą. Nóż i patelnia go przeżyją. Kupujecie narzędzie, które ma przez kilkanaście lat zdejmować jedną konkretną uciążliwość — stanie przy garnku i pilnowanie — a nie nowy środek kuchni. Kto oczekuje drugiej rzeczy, będzie rozczarowany, i wolę to powiedzieć teraz.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szamocinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, po jakie trzy rzeczy w kuchni sięgacie odruchowo. Wokół nich ustawiamy, co warto na prezentacji pokazać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szamocinie"),
    sekcjaRaty("w Szamocinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Szamocina",
      paragraphs: [
        "Szamocin leży w powiecie chodzieskim, nad jeziorem Siekiera, i liczy 3 888 mieszkańców (GUS, 31.12.2024) na 4,7 kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo liczba ze źródła policzona jest od powierzchni niezaokrąglonej. Cała gmina miejsko-wiejska to 7 134 osoby na 127,1 kilometra kwadratowego, czyli pięćdziesiąt sześć osób na kilometr, i obejmuje dwanaście sołectw oraz dwadzieścia miejscowości. Pierwsza wzmianka podawana jest rozbieżnie — jedne źródła mówią o 1282 roku, inne o 1364 — i nie wybieram między nimi; strona gminy roku nie podaje, ale zapisuje najstarszą formę nazwy, „Szamoczino”, i określa osadę jako rybacką, lokując ją na Pałukach. Prawa miasta na prawie magdeburskim wydał wsi dziedzic 20 grudnia 1745 roku, a król potwierdził je i uzupełnił przywilejem lokacyjnym 29 listopada 1748 — powszechnie podawany rok 1748 jest więc datą potwierdzenia, nie nadania. W rozbiciu z 2006 roku miasto liczyło cztery tysiące dwieście sześćdziesiąt siedem osób, a obszar wiejski gminy trzy tysiące dwadzieścia pięć. W gminie leżą między innymi Szamoty, Jaktorowo i Jaktorówko.",
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

  districtsHeading: "Do których części Szamocina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwunastu sołectw w gminie, między innymi do Szamotów, Jaktorowa i Jaktorówka. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: mówi się „do Szamocina” i „w Szamocinie”, nie „do Szamocinu”, a przymiotnik brzmi „szamociński” — nie „szamotulski”, bo to przymiotnik od Szamotuł, całkiem innego miasta w tym samym województwie. Szamocin leży w powiecie chodzieskim. I praktyczna: w gminie jest wieś Szamoty, a odrębna wieś Szamocin leży w gminie Strachówka w mazowieckim, więc przy umawianiu warto dopowiedzieć powiat.",
  ],
  districts: [],

  nearbyHeading: "Poza Szamocin też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Chodzieży, Margonina, Gołańczy, Wyrzyska, Ujścia i Budzynia — wszędzie bezpłatnie, tak samo jak w samym Szamocinie.",
  ],
  nearbyTowns: ["Chodzież", "Margonin", "Gołańcz", "Wyrzysk", "Ujście", "Budzyń"],

  about: blokOMnie("do Szamocina", "w Szamocinie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szamocina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwunastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: poprawnie jest „do Szamocina” i „w Szamocinie”, a nie „do Szamocinu”; przymiotnik brzmi „szamociński” i to jedna z niewielu takich form, którą mam potwierdzoną na stronie gminy — nie mylić z „szamotulskim”, czyli przymiotnikiem od Szamotuł. Szamocin leży w powiecie chodzieskim. I praktyczna: odrębna wieś Szamocin jest w gminie Strachówka w mazowieckim, a w samej gminie Szamocin leży wieś Szamoty.",
    },
    ...faqWspolne("w Szamocinie"),
    {
      question: "Kupiłam kiedyś sprzęt, który miał zmienić moją kuchnię, a stoi w szafce. Dlaczego tak się dzieje?",
      answer:
        "Zwykle dlatego, że nowa rzecz dostała miejsce w środku, zanim je sobie wypracowała. Szamocin dobrze to pokazuje: przy rynku stoi kamienica z 1840 roku, a ratusz — budynek, który w każdym mieście uchodzi za najważniejszy i najstarszy — pochodzi z około 1887, czyli jest o blisko pół wieku młodszy od sąsiadki. To, co wygląda na środek, przyszło ostatnie. W kuchni pracę niosą rzeczy starsze i nieefektowne: jeden nóż, jedna patelnia, jedna drewniana łyżka. Policzcie, ile lat mają trzy przedmioty, po które sięgacie odruchowo — wyjdzie więcej niż to, co stoi na widoku. Sprzęt, który po roku stoi w szafce, po prostu nie zrobił tego, co obiecywał, i nie jest to wina osoby, która go kupiła.",
    },
    {
      question: "Czy Thermomix stanie się najważniejszą rzeczą w mojej kuchni?",
      answer:
        "Nie sądzę i nie będę tak mówić, choć sprzedaję urządzenia. Będzie najnowszą rzeczą na Waszym blacie i nie stanie się najstarszą — nóż i patelnia go przeżyją, bo mają prostszą konstrukcję i nic się w nich nie psuje. Kupujecie narzędzie, które przez kilkanaście lat ma zdejmować jedną konkretną uciążliwość: stanie przy garnku i pilnowanie, bo temperaturę i mieszanie prowadzi samo, a danie powstaje w jednym naczyniu. Jeśli ktoś oczekuje nowego środka kuchni, będzie rozczarowany — i lepiej wiedzieć to przed zakupem.",
    },
  ],

  geo: { lat: 53.03, lng: 17.125 },
};
