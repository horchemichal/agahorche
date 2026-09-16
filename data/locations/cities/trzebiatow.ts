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
 * ⚠⚠⚠ HISTORIA WERSJI TEJ STRONY — WAŻNE:
 *   PIERWSZA WERSJA MIAŁA KĄT „SKĄD WIADOMO, ŻE GOTOWE"
 *   (minutnik mierzy czas, nie stan). ZOSTAŁ ODRZUCONY
 *   PO KONTROLI KOLIZJI: MOŃKI mają kąt „CZAS W PRZEPISIE
 *   — dlaczego minuty są najmniej wiarygodną liczbą
 *   i po czym naprawdę poznaje się gotowość". To jest
 *   ta sama teza i ta sama rada.
 *   ⚠⚠ NIE WRACAĆ DO TEGO KĄTA W TYM MIEŚCIE.
 *   Wieża jako punkt orientacyjny zostaje w bloku
 *   faktograficznym; motyw sygnału i sprawdzania — NIE.
 *
 * KĄT: RAZ A DOBRZE — o rzeczach, które kosztują jeden
 * wieczór, a potem oddają codziennie.
 * Kąt od dzwonu „Maria" z 1515 r.: trzy tysiące siedemset
 * kilogramów, które trzeba było raz odlać i raz wciągnąć
 * na wieżę. Potem przez pięćset lat wystarczyło pociągnąć
 * za sznur.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dzwon „Maria" z 1515 r. waży 3 700 kg i wisi
 *   w wieży, która ma około dziewięćdziesięciu metrów,
 * — ŻE CAŁY CIĘŻAR TEJ RZECZY PRZYPADŁ NA JEDEN DZIEŃ,
 *   A POŻYTEK ROZŁOŻYŁ SIĘ NA PIĘĆSET LAT — to jest rdzeń,
 * — ⚠⚠ ŻE W KUCHNI ISTNIEJE DOKŁADNIE TA SAMA KATEGORIA
 *   ROBÓT: takich, które robi się RAZ, są niewdzięczne
 *   i nudne, a potem oddają przy każdym gotowaniu,
 * — ⚠⚠ ŻE PRZEGRYWAJĄ ONE ZAWSZE Z TYM, CO PILNE,
 *   bo nic nie wymusza ich zrobienia. Nikt nie zauważy,
 *   że ich nie ma — zauważa się dopiero, ile kosztuje
 *   ich brak, i to dopiero po latach,
 * — ⚠⚠ ŻE ROZPOZNAJE SIĘ JE PO JEDNYM PYTANIU: czy tę
 *   samą irytację przeżywam za każdym razem. Jeśli tak,
 *   to jest robota do zrobienia raz, a nie rzecz,
 *   do której trzeba się przyzwyczaić,
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO PRZYKŁADU TAKIEJ ROBOTY
 *   — zależy od kuchni, a moja lista byłaby instrukcją,
 *   o którą nikt nie prosił,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE KAŻDA TAKA ROBOTA
 *   SIĘ ZWRACA. Jeśli coś powtarza się raz na kwartał,
 *   to jeden wieczór poświęcony na usprawnienie tego
 *   jest po prostu stracony. Liczy się CZĘSTOTLIWOŚĆ,
 *   nie uciążliwość,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TO URZĄDZENIE JEST TAKĄ
 *   ROBOTĄ W WERSJI DROGIEJ — jeden duży koszt na starcie
 *   i oddawanie przez lata. MÓWIĘ TEŻ WPROST, ŻE TA
 *   ARYTMETYKA DZIAŁA TYLKO PRZY REGULARNYM GOTOWANIU
 *   i że przy gotowaniu od święta nie działa wcale.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MINUT, MINUTNIKA I ROZPOZNAWANIA
 *   GOTOWOŚCI — kąt zajęty (Mońki). To był powód
 *   przepisania tej strony. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO INSTRUKCJI, KTÓREJ NIKT NIE CZYTA — kąt
 *   zajęty (Świecie).
 * — ⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI I ZACZYNANIA
 *   OD KAWAŁKA — kąt zajęty (Międzyzdroje, ta sama fala).
 *   Tam chodzi o ZMNIEJSZENIE ZAKRESU, ŻEBY ZACZĄĆ;
 *   TUTAJ o JEDNORAZOWY NAKŁAD, KTÓRY ZWRACA SIĘ POTEM.
 *   Rozgraniczam wprost.
 * — ⚠⚠ ZERO SUMOWANIA SIĘ DROBNYCH ZYSKÓW — kąt zajęty
 *   (Bobolice, ta sama fala). Tam chodzi o WIELE MAŁYCH
 *   POWTARZALNYCH OSZCZĘDNOŚCI; TUTAJ o JEDEN NAKŁAD
 *   NA POCZĄTKU.
 * — ⚠⚠ ZERO STAŁYCH WARUNKÓW ZAMIAST PILNOWANIA — kąt
 *   zajęty (Kalisz Pomorski, ta sama fala).
 * — ⚠⚠ ZERO UKŁADU KUCHNI I TEGO, GDZIE CO STOI — kąty
 *   zajęte (Myślibórz, Płoty).
 * — ⚠ ZERO PROPORCJI ZAPASU — kąt zajęty (Górzno).
 * — ⚠ ZERO OKRESU PRÓBNEGO — kąt zajęty (Sławno).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNEGO PRZYKŁADU ROBOTY „RAZ A DOBRZE".
 *   Podaję WYŁĄCZNIE pytanie rozpoznawcze.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
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
 * — NIE PODAJĘ PRZYKŁADÓW ROBOT „RAZ A DOBRZE".
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
    caption: "Trzy tysiące siedemset kilogramów wciągnięto raz. Potem wystarczał sznur.",
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
      id: "raz-a-dobrze",
      heading: "Trzy tysiące siedemset kilogramów, raz",
      paragraphs: [
        "W wieży kościoła Mariackiego w Trzebiatowie wisi dzwon „Maria” z 1515 roku. Waży trzy tysiące siedemset kilogramów. Sama wieża ma około dziewięćdziesięciu metrów.",
        "Cały ciężar tej rzeczy przypadł na jeden dzień. Trzeba ją było raz odlać, raz przywieźć i raz wciągnąć na górę — i był to bez wątpienia najgorszy dzień w całej tej historii.",
        "A potem przez pięćset lat wystarczyło pociągnąć za sznur.",
        "W kuchni istnieje dokładnie ta sama kategoria robót i prawie nikt o niej nie mówi, bo nie ma w niej nic efektownego.",
        "To rzeczy, które robi się raz. Są niewdzięczne, nudne i nie widać po nich żadnego natychmiastowego efektu. Za to potem oddają przy każdym gotowaniu, po cichu, nie przypominając o sobie ani razu.",
        "I dlatego przegrywają zawsze — z tym, co pilne. Nic ich nie wymusza. Nikt nie zauważy, że nie zostały zrobione; zauważa się tylko, ile kosztuje ich brak, i to dopiero po kilku latach, kiedy nikt już nie kojarzy przyczyny.",
        "Rozpoznaje się je po jednym pytaniu i nie trzeba do tego żadnej listy: czy tę samą irytację przeżywam za każdym razem. Jeśli tak — to nie jest rzecz, do której trzeba się przyzwyczaić. To jest robota do zrobienia raz.",
        "Nie podam przykładów i robię to świadomie. W każdej kuchni to co innego, a moja lista byłaby instrukcją, o którą nikt nie prosił. Pytanie działa lepiej niż lista, bo zna odpowiedź tylko ten, kto w tej kuchni stoi.",
        "Uczciwie o drugiej stronie, bo to ważne zastrzeżenie: nie każda taka robota się zwraca. Jeśli coś powtarza się raz na kwartał, to wieczór poświęcony na usprawnienie tego jest po prostu wieczorem straconym — choćby było najbardziej irytujące. Liczy się częstotliwość, nie uciążliwość, a myli się je nagminnie.",
        "Na koniec o urządzeniu, bez owijania: ono jest dokładnie taką robotą, tylko w wersji drogiej. Jeden duży koszt na starcie i oddawanie przez lata.",
        "I ta arytmetyka działa wyłącznie przy regularnym gotowaniu. Przy gotowaniu od święta nie działa wcale — bo dzwon, za który ktoś zapłacił, ma sens tylko wtedy, gdy się go używa. Dlatego zanim zaczniemy rozmawiać o cenie, pytam, ile razy w tygodniu naprawdę gotujecie.",
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
        "Powiedz przy umawianiu, co u Was w kuchni irytuje za każdym razem — nie raz na jakiś czas, tylko za każdym. To zwykle najlepszy punkt wyjścia.",
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
      question: "Które roboty w kuchni warto zrobić raz, a które odpuścić?",
      answer:
        "Rozpoznaje się je po jednym pytaniu: czy tę samą irytację przeżywasz za każdym razem. Jeśli tak, to nie jest rzecz, do której trzeba się przyzwyczaić — to robota do zrobienia raz. Ale uczciwie: jeśli coś powtarza się raz na kwartał, wieczór poświęcony na usprawnienie tego jest wieczorem straconym, choćby było najbardziej irytujące. Liczy się częstotliwość, nie uciążliwość.",
    },
    {
      question: "Czy Thermomix zwraca się każdemu?",
      answer:
        "Nie i nie będę tego obiecywać. To jeden duży koszt na starcie, który oddaje przez lata — ale ta arytmetyka działa wyłącznie przy regularnym gotowaniu. Przy gotowaniu od święta nie działa wcale. Dlatego zanim zaczniemy rozmawiać o cenie, pytam, ile razy w tygodniu naprawdę gotujecie — nie ile byście chcieli.",
    },
  ],

  geo: { lat: 54.0612, lng: 15.2648 },
};
