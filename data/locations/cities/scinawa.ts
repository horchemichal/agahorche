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
 * ŚCINAWA — powiat lubiński, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 5 245 mieszkańców (GUS 31.12.2024), 13,5 km²,
 *   gęstość 387,4 os./km² [ZW, domyka się przy
 *   powierzchni 13,54 km²]. PODAJĘ.
 * CAŁA GMINA: 9 345 osób, 164,4 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 9 345 / 164,4 = 56,8,
 *   a serwis podaje 58. NIE DOMYKA SIĘ.
 *   ⚠ Miasto to 56,1 % ludności gminy na 8,2 % jej
 *   powierzchni. ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM —
 *   ta figura wypadła już w Pieńsku, Głuszycy i Lubawce.
 *   ⚠⚠ LICZBY WSI NIE PODAJĘ JAKO PEWNEJ: jedno źródło
 *   wymienia dwadzieścia, drugie dziewiętnaście (bez
 *   Dąbrowy Dolnej). PISZĘ „OKOŁO DWUDZIESTU WSI".
 *   ⚠ PARA BLIŹNIACZA: Dąbrowa Dolna i Dąbrowa Środkowa
 *   — ⚠⚠ i BRAK Dąbrowy Górnej. To ciekawostka
 *   nazewnicza, PODAJĘ JĄ W SEKCJI O DZIELNICACH.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ NIE PODAJĘ „5 500" — to liczba z opracowania
 *   krajoznawczego, przestarzała.
 * ⚠ WYSOKOŚCI MIASTA N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 51,41111 / 16,42306.
 *
 * ⚠ ODMIANA — REGULARNA, BEZ PUŁAPEK:
 *   D. do Ścinawy · Ms. w Ścinawie · B. Ścinawę.
 *   Przymiotnik: ŚCINAWSKI [ZW] (por. księstwo
 *   ścinawskie, powiat ścinawski).
 *   ⚠⚠ ALE PRZYMIOTNIK JEST KOLIZYJNY — odnosi się też
 *   do ŚCINAWKI (dolina Ścinawki, powiat kłodzki).
 *   UŻYWAM GO OSZCZĘDNIE I TYLKO TAM, GDZIE KONTEKST
 *   JEST JEDNOZNACZNY.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠⚠ KOLIZJE NAZEWNICZE — BARDZO GĘSTE POLE:
 *   — ⚠⚠⚠ ŚCINAWKA ŚREDNIA, GÓRNA I DOLNA — trzy wsie
 *     w gminie Radków, powiat kłodzki, TO SAMO
 *     WOJEWÓDZTWO. GŁÓWNA KOLIZJA.
 *   — ⚠⚠ ŚCINAWKA — rzeka, dopływ Nysy Kłodzkiej.
 *   — ⚠⚠ ŚCINAWA MAŁA i ŚCINAWA NYSKA (opolskie) —
 *     wsie zawierające całą nazwę miasta; „Ścinawa Mała"
 *     bywa skracana do „Ścinawa".
 *   — ŚCINAWA POLSKA i ŚCINAWA NIEMODLIŃSKA (opolskie).
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ POWIAT ŚCINAWSKI istniał do 1932 r. — starsze
 *   źródła posługują się nim jako jednostką.
 *
 * ⚠⚠⚠ DATY USTROJOWE — NAJTRUDNIEJSZY PRZYPADEK FALI:
 *   — PIERWSZA WZMIANKA: 1202 r., dokument papieża
 *     Innocentego III [ZW, dwa źródła],
 *   — PRAWA MIEJSKIE: TRZY KONKURENCYJNE DATY —
 *     1243, 1248–1259 i 1263. ⚠⚠⚠ ŻADNEJ NIE WYBIERAM.
 *   — ⚠⚠⚠ JEDYNY TWARDY DOWÓD: dokument z 1259 r.,
 *     który NIE NADAJE praw miejskich, tylko POTWIERDZA,
 *     ŻE WÓJTOSTWO JUŻ ISTNIEJE. Wyznacza więc
 *     NAJPÓŹNIEJSZY MOŻLIWY MOMENT, a nie moment
 *     faktyczny.
 *   ⚠⚠⚠ PISZĘ „PRAWA MIEJSKIE PRZED 1259 R." I WPROST
 *   ZAZNACZAM, ŻE DOKŁADNA DATA NIE JEST ZNANA.
 *   ⚠⚠ IMIENIA KSIĘCIA NIE PODAJĘ — źródła podają
 *   Konrada I albo Konrada II głogowskiego.
 *   ⚠⚠ „DOKUMENT MÓWI »JUŻ BYŁO«" BYŁBY DOBRYM KĄTEM,
 *   ALE TO DRUGI KĄT W JEDNYM TEKŚCIE. PODAJĘ JAKO FAKT
 *   Z ZASTRZEŻENIEM.
 *   ⚠⚠⚠ NIE PISZĘ „jedno z najstarszych miast w Polsce"
 *   — pozycji w rankingu lokacji NIE USTALONO.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — MOST DROGOWY PRZEZ ODRĘ:
 *   Budowa 1900–1903 [ZW ze źródła technicznego;
 *   ⚠ inne źródło podaje 1900–1907 — PODAJĘ PIERWSZĄ
 *   WERSJĘ, bo opis techniczny jest mocniejszy].
 *   Projektanci: inżynierowie wrocławscy Keller i Schnapp.
 *   Konstrukcja stalowa, kratownicowa.
 *   Długość całkowita: 350,20 m.
 *   ⚠⚠⚠ TO NIE JEST JEDEN MOST, TYLKO DWA:
 *   — MOST GŁÓWNY, NAD ODRĄ: TRZY przęsła, kratownicowa
 *     belka Gerbera, rozpiętości 55,00 + 89,40 + 55,00 m
 *     = 199,40 m; rozstaw dźwigarów 6,60 m,
 *   — MOST NAD PRZYBRZEŻNYM TERENEM ZALEWOWYM: PIĘĆ
 *     przęseł po 30,00 m = 150,00 m, przęsła zawieszone
 *     po 18,00 m; rozstaw dźwigarów 5,50 m.
 *   ⚠⚠⚠ TRZY PRZĘSŁA NAD WODĄ, PIĘĆ NAD SUCHYM.
 *   NAJWIĘKSZA ROZPIĘTOŚĆ 89,40 M, NAJMNIEJSZA 18,00 M
 *   — PRAWIE PIĘCIOKROTNA RÓŻNICA W JEDNYM OBIEKCIE.
 *   Każde przęsło ma rozmiar przeszkody pod sobą.
 *   To jest cały kąt.
 *   ⚠⚠⚠ RÓŻNICY 80 CM (349,40 sumy rozpiętości wobec
 *   350,20 długości całkowitej) NIE UŻYWAM W TEKŚCIE:
 *   „dwie liczby mierzące co innego" to kąt ZAJĘTY
 *   (Twardogóra). Odnotowuję tu, że liczby się domykają,
 *   i na tym koniec.
 *   ⚠⚠ WĄTKU POWODZIOWEGO NIE DOTYKAM. „Teren zalewowy"
 *   to nazwa części konstrukcji i używam jej wyłącznie
 *   w tej roli, bez ani jednego zdania o żywiole.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — PRZEBUDOWY MOSTU: koniec lat 40. — podniesienie
 *   przęsła zawieszonego; 1975–1976 — wymiana pomostu
 *   na żelbetowy z płyt prefabrykowanych; 1994 —
 *   wzmocnienie filara nurtowego.
 *   ⚠⚠ „DOŁOŻONE PO LATACH UŻYWANIA" — kąt zajęty
 *   (Syców). PODAJĘ DATY BEZ MORAŁU.
 * — MOST KOLEJOWY przez Odrę: 1873–1874 — o 27 lat
 *   wcześniejszy od drogowego.
 *   ⚠⚠⚠ „NAJPIERW DROGA, POTEM RUCH" — kąt ZAJĘTY
 *   (Pieńsk). ⚠⚠ NIE BUDUJĘ NA TYM NICZEGO. Podaję datę
 *   w sekcji „rodzina" i ani słowa więcej.
 * — OBWAROWANIA: wał ziemno-drewniany pod koniec
 *   XIII w., mur kamienno-ceglany ok. 1310 r.
 * — 13 STYCZNIA 1348 r. — dokument udzielający PRAWA
 *   DO BUDOWY RATUSZA. ⚠⚠ DATY ZBUDOWANIA ŹRÓDŁA
 *   NIE PODAJĄ W OGÓLE. Podaję to wprost jako fakt.
 * — KOLEJ: linia Wrocław – Rudna Gwizdanów otwarta
 *   1874 r.; linia Legnica – Rawicz 1898 r.
 * — SEMINARIUM NAUCZYCIELSKIE: 1850–1926, czyli 76 lat.
 * — ⚠⚠ KSIĘSTWA ŚCINAWSKIEGO (1274–1289 i 1316/17–
 *   1361/64, z przerwą) NIE ROZWIJAM: „łańcuch
 *   z luką" to kąt ZAJĘTY (Żmigród). Wymieniam sam fakt
 *   istnienia księstwa, bez dat i bez luki.
 * — ⚠⚠⚠ SERII LUDNOŚCIOWEJ NIE PODAJĘ W OGÓLE.
 *   Liczba z 2024 r. jest niższa od tej z 1939 r.,
 *   a wątek wyludniania jest wykluczony. NIE PODAJĘ
 *   ANI JEDNEJ LICZBY HISTORYCZNEJ LUDNOŚCI.
 * — ⚠⚠ ZNISZCZENIA Z 1343 R. POMIJAM — wątek zbrojny.
 * — ODLEGŁOŚCI [ZW]: Wrocław — trzy warianty: 79 km
 *   w 1 godz. 28 min, 83 km w 1 godz. 14 min, 92 km
 *   w 1 godz. 20 min.
 *   ⚠⚠ „KRÓTSZA DROGA NIE JEST PROPORCJONALNIE SZYBSZA"
 *   — kąt ZAJĘTY (Sobótka). ⚠⚠⚠ DLATEGO PODAJĘ TYLKO
 *   JEDEN WARIANT (83 km) I NIE ZESTAWIAM TRZECH.
 *   POZOSTAŁYCH KIERUNKÓW NIE PODAJĘ.
 *
 * KĄT: NIE KAŻDE PRZĘSŁO MA TĘ SAMĄ ROZPIĘTOŚĆ
 * — o tym, że jeden obiekt składa się z części o różnych
 * rozmiarach, bo każda pokonuje inną przeszkodę. Kąt
 * od mostu przez Odrę: osiem przęseł, z czego trzy nad
 * wodą i pięć nad suchym, największe 89,40 m, najmniejsze
 * 18,00 m.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że most drogowy przez Odrę ma 350,20 m i osiem
 *   przęseł, ale są to właściwie dwa mosty: nad rzeką
 *   trzy przęsła o rozpiętościach 55,00, 89,40 i 55,00 m,
 *   a nad przybrzeżnym terenem zalewowym pięć po 30,00 m,
 *   z przęsłami zawieszonymi po 18,00 m,
 * — ŻE NAJWIĘKSZA ROZPIĘTOŚĆ JEST OD NAJMNIEJSZEJ PRAWIE
 *   PIĘCIOKROTNIE WIĘKSZA, BO KAŻDE PRZĘSŁO MA ROZMIAR
 *   PRZESZKODY POD SOBĄ. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE OBIAD PLANUJEMY ODWROTNIE — jako jednolity blok
 *   („zrobię obiad"), w którym wszystkie części traktujemy
 *   jednakowo,
 * — ⚠⚠ ŻE W KAŻDYM POSIŁKU JEST JEDNO PRZĘSŁO DŁUGIE:
 *   ta jedna rzecz, która potrzebuje swojego czasu
 *   i nie da się jej przyspieszyć ani przestawić.
 *   Reszta to przęsła krótkie,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ROBI SIĘ GO PRZED, NIE
 *   W TRAKCIE: zanim zaczniesz, wskaż tę jedną rzecz.
 *   Wszystko inne ustawia się wokół niej,
 * — ⚠⚠ ŻE NAJCZĘSTSZY BŁĄD TO TRAKTOWANIE DŁUGIEGO
 *   PRZĘSŁA JAK KRÓTKIEGO — zabranie się za nie
 *   na końcu, jakby było takie samo jak reszta,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część posiłków naprawdę
 *   jest jednolita — pięć równych przęseł i nic, co by
 *   dominowało. Wtedy nie ma czego szukać i całe to
 *   rozważanie jest stratą czasu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie skraca przęsła
 *   krótkie — siekanie, mieszanie, pilnowanie — a długiego
 *   nie skraca prawie wcale. MÓWIĘ WPROST, że to zmienia
 *   proporcje w posiłku, ale nie znosi przęsła głównego.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt zajęty
 *   (Szklarska Poręba). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tamten tekst mówi,
 *   ŻEBY KROKI W OGÓLE NAZWAĆ; ten mówi, że wśród nich
 *   JEDEN JEST STRUKTURALNIE WIĘKSZY OD POZOSTAŁYCH.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE W TEKŚCIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO KOLEJNOŚCI OPERACJI — kąt zajęty (Milicz).
 *   NIE MÓWIĘ, W JAKIEJ KOLEJNOŚCI robić — mówię, KTÓRA
 *   CZĘŚĆ JEST NAJWIĘKSZA.
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno).
 * — ⚠⚠⚠ ZERO DWÓCH LICZB MIERZĄCYCH CO INNEGO — kąt
 *   zajęty (Twardogóra). Dlatego 80 cm różnicy nie wchodzi
 *   do tekstu.
 * — ⚠⚠⚠ ZERO KRÓTSZA DROGA NIE JEST PROPORCJONALNIE
 *   SZYBSZA — kąt zajęty (Sobótka). Dlatego podaję jeden
 *   wariant odległości do Wrocławia, nie trzy.
 * — ⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk).
 * — ⚠⚠ ZERO ŁAŃCUCHA Z LUKĄ — kąt zajęty (Żmigród).
 * — ⚠⚠ ZERO CIENKIE, ALE PIERWSZE — kąt zajęty (Kąty
 *   Wrocławskie).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ⚠⚠⚠ ŻADNYCH LICZB MINUTOWYCH PRZY CZYNNOŚCIACH
 *   KUCHENNYCH — nie wymyślam, ile co trwa. Mówię
 *   wyłącznie „dłuższe" i „krótsze".
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU POWODZIOWEGO. „Teren zalewowy"
 *   występuje WYŁĄCZNIE jako nazwa części konstrukcji.
 * — ⚠⚠⚠ ZERO SERII LUDNOŚCIOWEJ I WYLUDNIANIA.
 * — ⚠⚠ ZERO ZNISZCZEŃ Z 1343 R. I WĄTKÓW ZBROJNYCH.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠ ZERO BEZROBOCIA I DEMOGRAFII WSPÓŁCZESNEJ.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ liczby wsi jako pewnej.
 * — NIE WYBIERAM jednej daty nadania praw miejskich.
 * — NIE PODAJĘ imienia księcia — źródła się różnią.
 * — NIE PISZĘ, że Ścinawa jest jednym z najstarszych
 *   miast w Polsce.
 * — NIE PODAJĘ daty zbudowania ratusza — znamy tylko
 *   datę pozwolenia.
 * — NIE PODAJĘ wysokości miasta n.p.m.
 * — NIE PODAJĘ ani jednej historycznej liczby ludności.
 * — NIE PODAJĘ trzech wariantów trasy do Wrocławia.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Ścinawa leży w powiecie lubińskim, nad Odrą; miasto
 *   liczy 5 245 mieszkańców (GUS, 31.12.2024) na 13,5 km²,
 *   czyli 387,4 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 9 345 osób na 164,4 km²,
 *   z około dwudziestoma wsiami,
 * — pierwsza wzmianka pochodzi z 1202 r., z dokumentu
 *   papieża Innocentego III; prawa miejskie nadano przed
 *   1259 r., ale dokładna data nie jest znana — dokument
 *   z 1259 r. jedynie potwierdza, że wójtostwo już
 *   istniało,
 * — miasto otoczono wałem ziemno-drewnianym pod koniec
 *   XIII w., a murem kamienno-ceglanym około 1310 r.,
 * — 13 stycznia 1348 r. Ścinawa otrzymała prawo
 *   do wzniesienia ratusza; daty jego zbudowania źródła
 *   nie podają,
 * — most drogowy przez Odrę, zaprojektowany przez
 *   wrocławskich inżynierów Kellera i Schnappa,
 *   zbudowano w latach 1900–1903; ma 350,20 m długości
 *   i osiem kratownicowych przęseł: trzy nad rzeką
 *   o rozpiętościach 55,00, 89,40 i 55,00 m oraz pięć
 *   nad przybrzeżnym terenem zalewowym po 30,00 m,
 *   z przęsłami zawieszonymi po 18,00 m; rozstaw
 *   dźwigarów wynosi 6,60 m w części głównej i 5,50 m
 *   w zalewowej,
 * — most przebudowywano pod koniec lat 40., w latach
 *   1975–1976 (wymiana pomostu na żelbetowy z płyt
 *   prefabrykowanych) i w 1994 r. (wzmocnienie filara
 *   nurtowego),
 * — most kolejowy przez Odrę powstał wcześniej, w latach
 *   1873–1874; linię Wrocław – Rudna Gwizdanów otwarto
 *   w 1874 r., a Legnica – Rawicz w 1898,
 * — seminarium nauczycielskie działało tu w latach
 *   1850–1926, czyli 76 lat,
 * — do Wrocławia jest stąd 83 km.
 */
export const SCINAWA: CityContent = {
  slug: "scinawa",
  h1: "Thermomix Ścinawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ścinawa — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Ścinawie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ścinawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ścinawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ścinawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Ścinawa"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Osiem przęseł, od osiemnastu do osiemdziesięciu dziewięciu metrów.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ścinawie – jak wygląda prezentacja?",
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
      id: "nie-kazde-przeslo",
      heading: "Nie każde przęsło ma tę samą rozpiętość",
      paragraphs: [
        "Most drogowy przez Odrę w Ścinawie, zbudowany w latach 1900–1903, ma trzysta pięćdziesiąt metrów i osiem kratownicowych przęseł. Ale to właściwie dwa mosty postawione w jednej linii.",
        "Nad samą rzeką stoją trzy przęsła: pięćdziesiąt pięć metrów, osiemdziesiąt dziewięć metrów czterdzieści centymetrów i znowu pięćdziesiąt pięć. Nad przybrzeżnym terenem zalewowym — pięć przęseł po trzydzieści metrów, z odcinkami zawieszonymi po osiemnaście.",
        "Największa rozpiętość jest od najmniejszej prawie pięciokrotnie większa. W jednym obiekcie, zaprojektowanym przez jednych ludzi, w jednym czasie.",
        "Powód jest oczywisty, kiedy się go nazwie: każde przęsło ma rozmiar przeszkody pod sobą. Nad nurtem nie da się postawić podpory, więc przęsło musi być długie. Nad suchym brzegiem można stawiać podpory co trzydzieści metrów, więc się stawia.",
        "Obiad planujemy dokładnie odwrotnie. Jako jednolity blok: „zrobię obiad”. Wszystkie części traktujemy tak samo, jakby miały tę samą rozpiętość.",
        "A w prawie każdym posiłku jest jedno przęsło długie. Ta jedna rzecz, która potrzebuje swojego czasu i której nie da się ani przyspieszyć, ani przestawić na później. Cała reszta to przęsła krótkie — można je stawiać jedno po drugim, byle zdążyć.",
        "Ruch jest jeden i robi się go przed, nie w trakcie. Zanim cokolwiek zaczniesz, wskaż tę jedną rzecz. Wszystko inne ustawia się wokół niej.",
        "Najczęstszy błąd to potraktowanie długiego przęsła jak krótkiego — zabranie się za nie na końcu, w kolejności przypadkowej, jakby było takie samo jak reszta. Wtedy cały posiłek czeka na jeden element, a to, co gotowe, stygnie.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, żeby kroki w ogóle nazwać. To osobna sprawa i robi się ją wcześniej. Tu chodzi o coś węższego — o to, że wśród nazwanych już kroków jeden jest strukturalnie większy od pozostałych.",
        "Uczciwie o drugiej stronie: część posiłków naprawdę jest jednolita. Pięć równych przęseł, nic, co by dominowało, kanapki i sałatka. Wtedy nie ma czego szukać i całe to rozważanie jest stratą czasu.",
        "I uczciwie o sprzęcie. Thermomix skraca przęsła krótkie — siekanie, mieszanie, pilnowanie garnka — a długiego nie skraca prawie wcale. Rzecz, która potrzebuje swojego czasu, będzie go potrzebowała dalej. To zmienia proporcje wewnątrz posiłku, i to sporo, ale nie znosi przęsła głównego i nie będę twierdzić, że znosi.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ścinawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy u Was obiad ma zwykle jeden element, który trzyma wszystko w miejscu. Dobiorę wtedy danie tak, żeby dało się na nim ten układ pokazać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ścinawie"),
    sekcjaRaty("w Ścinawie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Ścinawy",
      paragraphs: [
        "Ścinawa leży nad Odrą, w powiecie lubińskim. Samo miasto liczy 5 245 mieszkańców (GUS, 31.12.2024) na trzynastu i pół kilometra kwadratowego, czyli trzysta osiemdziesiąt siedem osób na kilometr, a cała gmina miejsko-wiejska 9 345 osób na stu sześćdziesięciu czterech, z około dwudziestoma wsiami — piszę „około”, bo źródła różnią się o jedną pozycję. Pierwsza wzmianka pochodzi z 1202 roku, z dokumentu papieża Innocentego III. Z prawami miejskimi jest trudniej i wolę powiedzieć to wprost: podaje się trzy różne daty, a jedyny twardy dowód to dokument z 1259 roku, który niczego nie nadaje — potwierdza tylko, że wójtostwo już istniało. Wyznacza więc najpóźniejszy możliwy moment, nie faktyczny. Miasto otoczono wałem ziemno-drewnianym pod koniec trzynastego wieku, a murem kamienno-ceglanym około 1310 roku. 13 stycznia 1348 roku Ścinawa dostała prawo do wzniesienia ratusza; daty, w której ratusz stanął, źródła nie podają w ogóle. Most drogowy przez Odrę, zaprojektowany przez wrocławskich inżynierów Kellera i Schnappa, zbudowano w latach 1900–1903: trzysta pięćdziesiąt metrów i osiem kratownicowych przęseł — trzy nad rzeką o rozpiętościach pięćdziesięciu pięciu, osiemdziesięciu dziewięciu z górą i znów pięćdziesięciu pięciu metrów, oraz pięć nad przybrzeżnym terenem zalewowym po trzydzieści, z odcinkami zawieszonymi po osiemnaście. Rozstaw dźwigarów wynosi sześć metrów sześćdziesiąt w części głównej i pięć pięćdziesiąt w zalewowej. Most przebudowywano pod koniec lat czterdziestych, w latach 1975–1976, kiedy wymieniono pomost na żelbetowy z płyt prefabrykowanych, i w 1994, kiedy wzmocniono filar nurtowy. Most kolejowy przez Odrę powstał wcześniej, w latach 1873–1874. Linię Wrocław – Rudna Gwizdanów otwarto w 1874 roku, a Legnica – Rawicz w 1898. Seminarium nauczycielskie działało tu przez siedemdziesiąt sześć lat, od 1850 do 1926. Do Wrocławia jest stąd osiemdziesiąt trzy kilometry.",
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

  districtsHeading: "Do których części Ścinawy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Przychowej, Tymowej, Dziewina, Turowa, Parszowic, Krzyżowej, Lasowic, Wielowsi, Zaborowa i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę: w gminie są Dąbrowa Dolna i Dąbrowa Środkowa — i żadnej Dąbrowy Górnej, co przez telefon potrafi zaskoczyć obie strony.",
  ],
  districts: [],

  nearbyHeading: "Poza Ścinawę też przyjadę",
  nearbyParagraphs: [
    "Do Wrocławia jest stąd osiemdziesiąt trzy kilometry. Dojeżdżam też do Lubina, Wołowa, Legnicy i Prochowic — wszędzie bezpłatnie, tak samo jak w samej Ścinawie.",
  ],
  nearbyTowns: ["Lubin", "Wołów", "Legnica", "Prochowice", "Wrocław"],

  about: blokOMnie("do Ścinawy", "w Ścinawie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ścinawy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga na mylące nazwy, bo jest ich tu wyjątkowo dużo: Ścinawka Średnia, Górna i Dolna to wsie w powiecie kłodzkim, w tym samym województwie, ale zupełnie gdzie indziej; Ścinawka to również rzeka w tamtych stronach; a Ścinawa Mała i Ścinawa Nyska leżą w województwie opolskim. Ta Ścinawa to ta nad Odrą, w powiecie lubińskim.",
    },
    ...faqWspolne("w Ścinawie"),
    {
      question: "Obiad zawsze wychodzi mi nierówno — jedno gotowe, drugie jeszcze nie. Jak to poukładać?",
      answer:
        "Wskazując najpierw najdłuższy element. Most przez Odrę w Ścinawie ma osiem przęseł, ale nie są równe: trzy nad rzeką mają pięćdziesiąt pięć, osiemdziesiąt dziewięć i pięćdziesiąt pięć metrów, a pięć nad suchym brzegiem po trzydzieści. Każde ma rozmiar przeszkody pod sobą. W posiłku jest zwykle jedna rzecz, która potrzebuje swojego czasu i nie da się jej przyspieszyć — to jest przęsło główne. Reszta ustawia się wokół niej. Błąd polega na traktowaniu jej jak każdej innej i zabieraniu się za nią na końcu.",
    },
    {
      question: "Czy Thermomix skróci przygotowanie obiadu?",
      answer:
        "Skróci część, i warto wiedzieć którą. Skraca to, co krótkie i powtarzalne: siekanie, mieszanie, pilnowanie garnka, część zmywania, bo większość dania powstaje w jednym naczyniu. Nie skraca tego jednego elementu, który po prostu potrzebuje swojego czasu — i nie będę twierdzić, że skraca. Zmienia się natomiast proporcja: reszta obiadu przestaje konkurować z tym elementem o Waszą uwagę. Na prezentacji widać to na zwykłym daniu, bez przyspieszania.",
    },
  ],

  geo: { lat: 51.4111, lng: 16.4231 },
};
