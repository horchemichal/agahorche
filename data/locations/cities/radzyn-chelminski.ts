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
 * RADZYŃ CHEŁMIŃSKI — powiat grudziądzki,
 * woj. kujawsko-pomorskie, ZIEMIA CHEŁMIŃSKA.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 779 mieszkańców (GUS 31.12.2024), 1,8 km²,
 * gęstość 999,4 os./km² — NAJWYŻSZA Z TEJ FALI.
 * CAŁA GMINA MIEJSKO-WIEJSKA: 4 393 osoby, 91,2 km²,
 * 49 os./km².
 * ⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — źródła rozbieżne
 *   (18 wsi i osad kontra 16 wsi + miasto wg spisu 2006).
 *   Piszę „wsie w gminie". Liczby sołectw NIE USTALONO.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ RADZYŃ CHEŁMIŃSKI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ✅ URZĄD NIE ZAWYŻA. Serwis regionalny podaje „nieco
 *   mniej niż 1 800 mieszkańców" — praktycznie zgodne
 *   z GUS. Archiwalna strona urzędu mówi o „blisko dwóch
 *   tysiącach", czyli zaokrągla w górę o ok. 12 %,
 *   ale bez podania liczby. UŻYWAM GUS.
 * ✅ en.wikipedia podaje 1 763 (2025) wobec 1 779 u GUS
 *   (2024) — różnica −0,9 %, w granicach rocznego spadku.
 *   To NAJLEPSZA ZGODNOŚĆ z całej fali.
 * ⚠ GEO: 53,3856 / 18,9364.
 * ⚠ ODLEGŁOŚCI DO GRUDZIĄDZA NIE PODAJĘ — trzy źródła
 *   dają trzy wartości (15, 19 i 20 km).
 * ⚠ ODMIANA: D. RADZYNIA CHEŁMIŃSKIEGO,
 *   Ms. W RADZYNIU CHEŁMIŃSKIM, przym. RADZYŃSKI.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — hasła nie ma w słowniku.
 *   Odmiana jest regularna, ale podaję ją jako
 *   rekonstrukcję popartą uzusem.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *   (Nazwa klubu sportowego to nie potwierdzenie
 *   słownikowe.)
 * ⚠⚠ RYZYKA POMYLENIA:
 *   RADZYŃ PODLASKI — miasto powiatowe w lubelskim,
 *   ok. 15 tys. mieszkańców, TRZYSTA CZTERDZIEŚCI
 *   KILOMETRÓW stąd. Wyszukiwarki mieszają oba nagminnie.
 *   ZAWSZE PEŁNA NAZWA „RADZYŃ CHEŁMIŃSKI".
 *   ⚠⚠ RADZYŃ-WIEŚ i RADZYŃ-WYBUDOWANIE to ODRĘBNE WSIE
 *   W TEJ SAMEJ GMINIE. WIATRAK STOI W RADZYNIU-
 *   -WYBUDOWANIU, NIE W MIEŚCIE — pisząc o nim, zawsze
 *   to zaznaczam.
 *   RADZYŃ w lubuskim to wieś; RADZIEJÓW to miasto
 *   powiatowe w tym samym województwie.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1234 — nadanie praw miejskich; w tym samym czasie
 *   powstała warownia drewniano-ziemna.
 *   ⚠ DATY DZIENNEJ NIE USTALONO — żadne z sześciu
 *   sprawdzonych źródeł jej nie podaje.
 *   ⚠⚠ BEZ WYSTAWCY DOKUMENTU I BEZ ZAKONU.
 *   TWARDA GRANICA — p. sekcja ETYKA.
 * — 1466 — powrót do Polski i ustanowienie siedziby
 *   starostwa. ⚠ SAM FAKT PRAWNY, bez ciągu wojennego.
 * — ZAMEK, FAZY BUDOWY: warownia drewniana 1234 →
 *   mur ceglany na przełomie XIII i XIV w. → główna faza
 *   ok. 1320–1350 → fortyfikacje zewnętrzne w drugiej
 *   połowie XIV w.
 * — ⚠⚠⚠ RDZEŃ KĄTA — WYMIARY WNĘTRZ ZAMKU WYSOKIEGO:
 *   KAPLICA 20,7 × 8,7 M
 *   REFEKTARZ 18,1 × 8,7 M
 *   KAPITULARZ 14,3 × 8,8 M
 *   Trzy sale o zupełnie różnym przeznaczeniu mają
 *   NIEMAL IDENTYCZNĄ SZEROKOŚĆ: 8,7–8,8 m. Szerokość
 *   narzucało sklepienie; długość była do dyspozycji.
 *   ⚠ TO JEST MOJE ODCZYTANIE TRZECH WYMIARÓW, nie cytat
 *   ze źródła. Piszę o nim jako o własnym wniosku.
 * — DALSZE WYMIARY ZAMKU: dwór górny to czworobok
 *   ok. 49 × 50 m; cztery narożne wieżyczki po ok. 6 m
 *   boku; korona murów 28 m; wieża ośmioboczna
 *   ok. 48 m (wysokość domniemana); fosa 15 m od południa
 *   i wschodu, 35 m od północy i zachodu; mur parchamu
 *   5–6 m; przedzamcze ok. 100 × 200 m.
 *   ⚠⚠ ROZBIEŻNOŚĆ: en.wikipedia podaje 52 × 51 m,
 *   inne źródło mówi o 36-metrowych wieżach narożnych,
 *   co kłóci się z 28-metrową koroną murów. PODAJĘ
 *   OK. 49 × 50 M za źródłem najbardziej wyspecjalizowanym
 *   i NIE PODAJĘ TRZECH WARTOŚCI NARAZ.
 *   ⚠⚠⚠ ZERO GDANISKA I ZERO DOLNEJ IZBY W WIEŻY
 *   (1,4 × 1,4 m) — to wieża ustępowa i cela więzienna.
 *   Kuszące wymiary, obie wykluczone.
 * — 1780 — NAKAZ ROZBIÓRKI ZAMKU; 1837 — WSTRZYMANIE
 *   ROZBIÓRKI. PIĘĆDZIESIĄT SIEDEM LAT.
 *   ⚠ To decyzja administracyjna, nie zniszczenie wojenne
 *   — fakt bezpieczny i ładny.
 * — 1961–1968 — prace restauracyjne.
 * — KOŚCIÓŁ ŚW. ANNY: nawa 15,9 × 25,2 m (ok. 1340),
 *   prezbiterium 11,7 × 19,4 m (ok. 1310), wieża
 *   9,6 × 6,2 m (ok. 1340). Budowla powstawała etapami
 *   przez około dwieście lat.
 * — 1278 — potwierdzona parafia w Radzyniu.
 * — KAPLICA CMENTARNA ŚW. JERZEGO, 1340.
 *   ⚠ NIE UŻYWAM — wątek cmentarny.
 * — WIATRAK HOLENDERSKI w Radzyniu-Wybudowaniu:
 *   prawdopodobnie 1895, cegła, OBROTOWA CZAPA (skrzydła
 *   ustawia się do wiatru bez obracania całego budynku),
 *   wpis do rejestru zabytków 1980, ok. 1 km od drogi
 *   wojewódzkiej nr 534.
 *   ⚠ WYSOKOŚCI, LICZBY KONDYGNACJI I WYDAJNOŚCI
 *   NIE USTALONO.
 * — ⚠ LICZBY MŁYNÓW, CECHÓW, RZEMIEŚLNIKÓW, DOMÓW,
 *   DNI TARGOWYCH, DAT JARMARKÓW ORAZ DAT URUCHOMIENIA
 *   WODOCIĄGÓW, GAZOWNI, ELEKTROWNI I MLECZARNI
 *   NIE USTALONO.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Radzyń Chełmiński. Sprawdzono wszystkie dziesięć
 *   kategorii wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ PUŁAPKA BLISKA GEOGRAFICZNIE: gmina STOLNO
 *   (powiat chełmiński, ta sama ziemia chełmińska) ma
 *   na Liście „chleb z kminkiem ze Stolna" i „chleb
 *   z makiem ze Stolna" (oba 03.06.2018) oraz
 *   „stoleński razowiec ze słonecznikiem".
 *   TO NIE JEST GMINA RADZYŃ CHEŁMIŃSKI. NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: WYMIAR NARZUCONY I WYMIAR WOLNY — który
 * z wymiarów przepisu da się negocjować, a który nie.
 * Kąt od trzech sal zamkowych: kaplica 20,7 × 8,7 m,
 * refektarz 18,1 × 8,7 m, kapitularz 14,3 × 8,8 m.
 * Trzy różne funkcje, trzy różne długości — i praktycznie
 * jedna szerokość, bo dalej nie dało się przesklepić.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że trzy sale zamku mają niemal identyczną szerokość
 *   przy zupełnie różnej długości, i że to wynika
 *   ze sklepienia — ⚠ zaznaczam, że to moje odczytanie
 *   wymiarów, nie zapisana intencja budowniczych,
 * — ⚠⚠ ŻE KAŻDE DANIE MA WYMIARY NARZUCONE I WYMIARY
 *   WOLNE, A WIĘKSZOŚĆ KŁOPOTÓW BIERZE SIĘ Z PRÓBY
 *   NEGOCJOWANIA TYCH PIERWSZYCH — TO JEST RDZEŃ,
 * — CO JEST NARZUCONE: średnica patelni, szerokość blachy,
 *   wysokość komory piekarnika, pojemność naczynia.
 *   Tych liczb nie zmienisz i nie ma sensu z nimi walczyć,
 * — CO JEST WOLNE: ile czego rozkładasz WZDŁUŻ, jak grubo
 *   kroisz, ile tur robisz, w jakiej kolejności,
 * — ⚠⚠ PRAKTYCZNA KONSEKWENCJA: ZANIM ZACZNIESZ ZMIENIAĆ
 *   PRZEPIS, SPRAWDŹ, KTÓRY WYMIAR JEST KTÓRYM.
 *   To zwykle rozstrzyga jedno konkretne pytanie: czy
 *   potrzebne będą dwie blachy, czy wystarczy jedna,
 * — ⚠ PRZYKŁAD, KTÓRY TO PORZĄDKUJE: podwojenie przepisu
 *   w tym samym naczyniu to próba zmiany wymiaru
 *   narzuconego. Podwojenie przepisu w dwóch turach
 *   to użycie wymiaru wolnego. Ta sama ilość, dwa różne
 *   wyniki,
 * — ⚠ UCZCIWIE O SPRZĘCIE: naczynie urządzenia też jest
 *   wymiarem narzuconym i to działa w OBIE STRONY —
 *   nie tylko górną granicą przy dużej porcji, ale też
 *   dolną przy bardzo małej, która nie sięga tam, gdzie
 *   powinna.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO ROZMIARU NACZYNIA JAKO TEMATU — kąt zajęty.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi o DOBÓR
 *   GARNKA; TUTAJ o ROZRÓŻNIENIE, KTÓRE LICZBY DA SIĘ
 *   ZMIENIAĆ, A KTÓRYCH NIE — i to rozróżnienie,
 *   nie sam garnek, jest tematem. Rozgraniczam wprost.
 * — ⚠⚠ ZERO ODSTĘPU MIĘDZY KAWAŁKAMI — kąt zajęty
 *   (Kowalewo Pomorskie).
 * — ⚠⚠ ZERO PIERWSZEJ I DRUGIEJ BLACHY — kąt zajęty
 *   (Barcin). Dwie tury wymieniam jako rozwiązanie
 *   jednym zdaniem i nie rozwijam różnicy między nimi.
 * — ⚠⚠ ZERO PRZELICZANIA PORCJI — kąt zajęty. Podwojenie
 *   przepisu pojawia się WYŁĄCZNIE jako przykład wymiaru
 *   narzuconego, nie jako temat.
 * — ⚠ ZERO WIELKOŚCI KAWAŁKÓW — kąt zajęty (Orzysz).
 * — ⚠ ZERO UKŁADU KUCHNI — kąt zajęty (Michałowo).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠⚠ Na tej stronie jest dużo liczb w metrach —
 *   PILNUJĘ, żeby ani jedna nie dotyczyła obróbki.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO CIĄGU KRZYŻACKO-WOJENNEGO. To jest
 *   najtrudniejsze miasto tej fali: każde źródło o zamku
 *   zaczyna od zakonu, komturii i oblężeń. W obiegu są
 *   daty 1410, 1454 i 1628 oraz zdania o tym, ile trwało
 *   zdobycie warowni. ZAMEK OPISUJĘ WYŁĄCZNIE JAKO
 *   BUDOWLĘ O ZMIERZONYCH WYMIARACH — bez tego, kto go
 *   stawiał, przeciw komu i co się z nim działo w czasie
 *   wojen. TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z 1939 R. — trzeci akapit
 *   en.wikipedii mówi o Intelligenzaktion, aresztowaniach
 *   i mordzie w lasach. ZERO POMNIKA OFIAR NA RYNKU.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ — Wirtualny Sztetl
 *   w pierwszej dziesiątce wyników.
 * — ⚠⚠ ZERO TOWARZYSTWA JASZCZURCZEGO (24 lutego 1397) —
 *   podawane jako jedna z czterech głównych dat miasta,
 *   ale to organizacja spiskowa i prowadzi prosto
 *   do wojen.
 * — ⚠⚠ ZERO LOCHU W WIEŻY (1,4 × 1,4 m) I ZERO GDANISKA.
 * — ⚠ ZERO KAPLICY CMENTARNEJ ŚW. JERZEGO — wątek
 *   cmentarny.
 * — ⚠ ZERO PARAFII I KOŚCIOŁA jako wątku wyznaniowego —
 *   kościół św. Anny wyłącznie jako architektura
 *   z wymiarami i datami.
 * — ⚠ ZERO BEZROBOCIA (11,0 %).
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl (wypłynął w wynikach dla tego
 *   miasta), gminya1.pl, nonsa.pl.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ROZMIAR NACZYNIA" dotyczy WYBORU GARNKA.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ nie doradzam
 *   żadnego naczynia — pokazuję, jak odróżnić liczbę,
 *   której nie zmienisz, od tej, którą zmieniasz swobodnie.
 * — „PRZESTRZEŃ MIĘDZY" (Kowalewo Pomorskie) dotyczy
 *   ODLEGŁOŚCI MIĘDZY KAWAŁKAMI.
 * — „DRUGA PARTIA" (Barcin) dotyczy RÓŻNICY MIĘDZY TURAMI.
 * — „PRZELICZANIE PORCJI" dotyczy MNOŻNIKA PRZEPISU.
 * TUTAJ chodzi o PODZIAŁ WSZYSTKICH LICZB PRZEPISU
 * NA DWIE GRUPY — narzucone i wolne — I O TO, ŻE WALCZY
 * SIĘ ZWYKLE Z NIEWŁAŚCIWĄ GRUPĄ.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby miejscowości w gminie — źródła
 *   rozbieżne.
 * — NIE PODAJĘ odległości do Grudziądza — trzy różne
 *   wartości.
 * — NIE PODAJĘ daty dziennej praw miejskich.
 * — NIE PISZĘ, kto zbudował zamek ani co się z nim działo
 *   w czasie wojen.
 * — NIE PODAJĘ wymiaru 52 × 51 m ani wysokości 36 m —
 *   to wartości sprzeczne z resztą pomiarów.
 * — NIE PODAJĘ wysokości ani wydajności wiatraka.
 * — NIE PRZYPISUJĘ miastu wiatraka — stoi
 *   w Radzyniu-Wybudowaniu.
 * — NIE PRZYPISUJĘ Radzyniowi chlebów ze Stolna.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Radzyń Chełmiński leży na ziemi chełmińskiej,
 *   w powiecie grudziądzkim; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 1 779 mieszkańców
 *   (GUS, 31.12.2024) na 1,8 km², czyli blisko tysiąc
 *   osób na kilometr kwadratowy; cała gmina ma 4 393
 *   osoby na 91,2 km²,
 * — prawa miejskie miasto dostało w 1234 roku, a w 1466
 *   wróciło do Polski i stało się siedzibą starostwa,
 * — zamek zaczynał jako warownia drewniano-ziemna
 *   z 1234 roku, mur ceglany postawiono na przełomie
 *   XIII i XIV wieku, główna faza budowy przypadła
 *   na lata około 1320–1350, a fortyfikacje zewnętrzne
 *   na drugą połowę XIV wieku,
 * — dwór górny zamku to czworobok o boku około
 *   czterdziestu dziewięciu i pięćdziesięciu metrów,
 *   z czterema narożnymi wieżyczkami po około sześć
 *   metrów boku i koroną murów na wysokości dwudziestu
 *   ośmiu metrów; fosa ma piętnaście metrów szerokości
 *   od południa i wschodu, a trzydzieści pięć od północy
 *   i zachodu; przedzamcze mierzyło około stu na dwieście
 *   metrów,
 * — wewnątrz: kaplica 20,7 na 8,7 metra, refektarz
 *   18,1 na 8,7 metra, kapitularz 14,3 na 8,8 metra,
 * — w 1780 roku wydano nakaz rozbiórki zamku, a w 1837
 *   rozbiórkę wstrzymano — trwała pięćdziesiąt siedem
 *   lat i nie została dokończona; prace restauracyjne
 *   prowadzono w latach 1961–1968,
 * — kościół św. Anny ma nawę 15,9 na 25,2 metra,
 *   prezbiterium 11,7 na 19,4 metra i wieżę 9,6 na
 *   6,2 metra; prezbiterium powstało około 1310 roku,
 *   nawa i wieża około 1340, a cała budowla powstawała
 *   etapami przez jakieś dwieście lat,
 * — w Radzyniu-Wybudowaniu, osobnej wsi w tej samej
 *   gminie, stoi ceglany wiatrak holenderski
 *   prawdopodobnie z 1895 roku, z obrotową czapą —
 *   skrzydła ustawia się do wiatru bez obracania całego
 *   budynku; do rejestru zabytków wpisano go w 1980 roku.
 */
export const RADZYN_CHELMINSKI: CityContent = {
  slug: "radzyn-chelminski",
  h1: "Thermomix Radzyń Chełmiński – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Radzyń Chełmiński — prezentacja i cena",
  seoDescription:
    "Thermomix w Radzyniu Chełmińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radzyń Chełmiński — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Radzyniu Chełmińskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Radzynia Chełmińskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Radzyń Chełmiński"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Większość kłopotów bierze się z walki z wymiarem, którego i tak się nie zmieni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Radzyniu Chełmińskim – jak wygląda prezentacja?",
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
      id: "wymiar-narzucony",
      heading: "Trzy sale, trzy długości, jedna szerokość",
      paragraphs: [
        "W zamku w Radzyniu Chełmińskim zmierzono trzy główne sale. Kaplica ma dwadzieścia siedem dziesiątych metra na osiem i siedem. Refektarz osiemnaście i jeden na osiem i siedem. Kapitularz czternaście i trzy na osiem i osiem.",
        "Trzy pomieszczenia o zupełnie różnym przeznaczeniu i trzy różne długości — a szerokość praktycznie jedna: osiem metrów siedemdziesiąt kilka.",
        "To moje odczytanie tych liczb, nie zapisana intencja budowniczych, ale trudno o inne wyjaśnienie: szerokość narzucało sklepienie. Dalej po prostu nie dało się przesklepić. Długość była do dyspozycji i dlatego się różni.",
        "Kuchnia działa dokładnie tak samo, tylko nikt tego nie nazywa — a większość kłopotów bierze się z tego, że walczymy z niewłaściwą liczbą.",
        "Wymiary narzucone to średnica patelni, szerokość blachy, wysokość komory piekarnika, pojemność naczynia. Tych nie zmienisz. Możesz kupić inną patelnię, ale dziś, przy tym obiedzie, ta liczba jest stała jak sklepienie.",
        "Wymiary wolne to wszystko inne: ile czego rozłożysz wzdłuż, jak grubo pokroisz, w ilu turach to zrobisz, w jakiej kolejności. Tu masz pełną swobodę i zwykle z niej nie korzystasz.",
        "Praktyczna konsekwencja jest jedna i warto ją mieć w głowie, zanim zacznie się przerabiać przepis: sprawdź, który wymiar jest którym. To rozstrzyga konkretne pytanie — czy potrzebne będą dwie blachy, czy wystarczy jedna.",
        "Najczystszy przykład to podwojenie przepisu. Podwojenie w tym samym naczyniu jest próbą zmiany wymiaru narzuconego i kończy się tak, jak musi: coś się nie mieści, nie miesza albo nie dochodzi. Podwojenie w dwóch turach jest użyciem wymiaru wolnego. Ta sama ilość, dwa zupełnie różne wyniki.",
        "Uczciwie o sprzęcie. Naczynie urządzenia jest wymiarem narzuconym i to działa w obie strony — nie tylko jako górna granica przy dużej porcji, ale też jako dolna przy bardzo małej, która nie sięga tam, gdzie powinna.",
        "Nie ma powodu tego ukrywać. Lepiej wiedzieć z góry, gdzie jest sklepienie, niż odkrywać to przy trzecim daniu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Radzyniu Chełmińskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie danie najczęściej Wam się nie mieści — zwykle okazuje się, że problem siedzi w jednej liczbie i da się go pokazać na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Radzyniu Chełmińskim"),
    sekcjaRaty("w Radzyniu Chełmińskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla radzyńskiej rodziny",
      paragraphs: [
        "Radzyń Chełmiński leży na ziemi chełmińskiej, w powiecie grudziądzkim; jest miastem w gminie miejsko-wiejskiej i liczy blisko tysiąc osiemset mieszkańców na niecałych dwóch kilometrach kwadratowych — prawie tysiąc osób na kilometr, najgęściej w okolicy; cała gmina ma niecałe cztery i pół tysiąca osób na dziewięćdziesięciu jeden kilometrach kwadratowych. Prawa miejskie miasto dostało w 1234 roku, a w 1466 wróciło do Polski i stało się siedzibą starostwa. Zamek zaczynał jako warownia drewniano-ziemna z 1234 roku; mur ceglany postawiono na przełomie XIII i XIV wieku, główna faza budowy przypadła na lata około 1320–1350, a fortyfikacje zewnętrzne na drugą połowę XIV wieku. Dwór górny to czworobok o boku około czterdziestu dziewięciu i pięćdziesięciu metrów, z czterema narożnymi wieżyczkami po około sześć metrów boku i koroną murów na wysokości dwudziestu ośmiu metrów; fosa ma piętnaście metrów szerokości od południa i wschodu, a trzydzieści pięć od północy i zachodu, przedzamcze zaś mierzyło około stu na dwieście metrów. Wewnątrz: kaplica dwadzieścia siedem dziesiątych na osiem i siedem metra, refektarz osiemnaście i jeden na osiem i siedem, kapitularz czternaście i trzy na osiem i osiem. W 1780 roku wydano nakaz rozbiórki zamku, a w 1837 ją wstrzymano — trwała pięćdziesiąt siedem lat i nie została dokończona; prace restauracyjne prowadzono w latach 1961–1968. Kościół św. Anny ma nawę piętnaście dziewięć na dwadzieścia pięć dwa metra, prezbiterium jedenaście siedem na dziewiętnaście cztery i wieżę dziewięć sześć na sześć dwa — prezbiterium powstało około 1310 roku, nawa i wieża około 1340, a całość budowano etapami przez jakieś dwieście lat. W Radzyniu-Wybudowaniu, osobnej wsi w tej samej gminie, stoi ceglany wiatrak holenderski prawdopodobnie z 1895 roku, z obrotową czapą — skrzydła ustawia się do wiatru bez obracania całego budynku.",
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

  districtsHeading: "Do których części Radzynia Chełmińskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — ma niecałe dwa kilometry kwadratowe i jest bardzo zwarte. Dojeżdżam też do wsi w gminie, w tym do Radzynia-Wsi i Radzynia-Wybudowania.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Radzyń Chełmiński też przyjadę",
  nearbyParagraphs: [
    "Grudziądz, Łasin, Wąbrzeźno, Jabłonowo Pomorskie i Kowalewo Pomorskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Grudziądz", "Łasin", "Wąbrzeźno", "Jabłonowo Pomorskie"],

  about: blokOMnie("do Radzynia Chełmińskiego", "w Radzyniu Chełmińskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Radzynia Chełmińskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie, w tym do Radzynia-Wsi i Radzynia-Wybudowania. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Radzyń Chełmiński jest miastem w gminie miejsko-wiejskiej w powiecie grudziądzkim — i to zupełnie inne miasto niż Radzyń Podlaski, oddalony o trzysta czterdzieści kilometrów.",
    },
    ...faqWspolne("w Radzyniu Chełmińskim"),
    {
      question: "Dlaczego podwojony przepis nie mieści się w naczyniu?",
      answer:
        "Bo podwojenie w tym samym naczyniu jest próbą zmiany wymiaru, którego zmienić się nie da. Średnica patelni, szerokość blachy i pojemność naczynia to liczby narzucone — tak jak szerokość sklepionej sali. Wolne jest co innego: ile czego rozłożysz wzdłuż, jak grubo pokroisz i w ilu turach to zrobisz. Podwojenie w dwóch turach daje zupełnie inny wynik niż podwojenie w jednym naczyniu, choć ilość jest ta sama.",
    },
    {
      question: "Czy w Thermomixie zmieści się wszystko?",
      answer:
        "Nie i wolę powiedzieć to wprost. Naczynie ma jeden, narzucony rozmiar, który działa w obie strony: jest górną granicą przy dużej porcji i dolną przy bardzo małej, bo za mała ilość nie sięga tam, gdzie powinna. Lepiej wiedzieć o tym przed zakupem, a najlepiej sprawdzić na spotkaniu, na porcji takiej, jaką gotujecie naprawdę.",
    },
  ],

  geo: { lat: 53.3856, lng: 18.9364 },
};
