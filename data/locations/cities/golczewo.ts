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
 * GOLCZEWO — powiat kamieński,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 501 mieszkańców (GUS 31.12.2024), 7,4 km²,
 *   gęstość 337,1 os./km².
 * CAŁA GMINA: 5 489 osób, 175,3 km².
 * ⚠⚠ RÓŻNICA 2,19×. NIE MIESZAM TYCH LICZB.
 *   ⚠⚠⚠ NIGDY „Golczewo liczy ponad pięć tysięcy" —
 *   to liczba GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,8242 / 14,9784.
 * ⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — źródła podają
 *   28 ALBO 29. Piszę opisowo.
 *
 * ⚠⚠ HOMONIM: Golczewo ≠ GOŁCZEWO (jedna litera!)
 *   ≠ Golczowice ≠ Golce (wieś w pow. wałeckim).
 *   ⚠ W TEJ SAMEJ GMINIE leży GOLCZEWO-GAJ — osobna
 *   miejscowość. ROZGRANICZAM W FAQ.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI — „to Golczewo".
 *   D. GOLCZEWA, Ms. W GOLCZEWIE.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — forma regularna
 *   dla nazw na -ewo.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Golczewa".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ PRAWA MIEJSKIE: 1 STYCZNIA 1990 R. — zgodne
 *   w trzech źródłach. Golczewo jest jednym
 *   z najmłodszych miast w Polsce.
 * — ⚠⚠ DATA BUDOWY ZAMKU: TRZY WERSJE — „ok. 1284",
 *   „1302–1317", „koniec XIII w.".
 *   ⚠⚠⚠ PISZĘ „PRZEŁOM XIII I XIV WIEKU".
 * — 1304 — pierwsza wzmianka dokumentowa.
 * — ok. 1840 — rozbiórka zamku; ocalała tylko wieża.
 * — 1895 i 1929 — prace konserwatorskie, odtworzenie
 *   krenelażu. 2010 — zakończenie rewitalizacji,
 *   punkt widokowy.
 * — ⚠⚠ SYNODU DIECEZJALNEGO Z 1454 R., BISKUPÓW
 *   I KSIĄŻĄT NIE WPROWADZAM — wątek wyznaniowy
 *   i własnościowy. POMIJAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WIEŻA ZAMKOWA:
 *   KONSTRUKCJA MIESZANA — W PRZYZIEMIU CZWOROKĄTNA,
 *   Z KAMIENNYCH GŁAZÓW; WYŻEJ OKRĄGŁA, Z CEGŁY.
 *   SZEŚĆ KONDYGNACJI, W TYM LOCH.
 *   ⚠⚠ WYSOKOŚĆ: PIERWOTNIE 24 M, PO REKONSTRUKCJI
 *   33 M — to rozstrzyga sprzeczność między źródłami.
 *   PODAJĘ OBIE LICZBY Z WYJAŚNIENIEM.
 *   ⚠ Założenie zamkowe ok. 40 × 40 m; skrzydło
 *   mieszkalne 12 × 25 m.
 *   ⚠⚠ „NAJWYŻSZEJ WIEŻY ZAMKOWEJ NA POMORZU
 *   ZACHODNIM" NIE POWTARZAM — twierdzenie z jednego
 *   źródła, nieporównane.
 *
 * — Kościół z XV w., jednonawowy, z kamienia; nowa
 *   wieża 1882. ⚠ NIE OPISUJĘ — wątek wyznaniowy.
 * — ⚠⚠ OŁTARZA I AMBONY Z 1661 R. NIE UŻYWAM —
 *   wyposażenie kościelne.
 * — Grodzisko pierścieniowate nad jeziorem Okonie —
 *   IX wiek. Dom ryglowy — XVIII w. Studnia
 *   artezyjska — XVII w.
 * — Wiatrak holenderski w Kłębach — 1865 r.
 * — Jezioro Okonie: 51,31 ha, głębokość średnia 1,0 m,
 *   maksymalna 1,8 m, obwód 2,85 km.
 *   Jezioro Szczucze: 33,68 ha, głębokość średnia 4,6 m,
 *   maksymalna 8,7 m.
 *   Miasto leży na przesmyku między nimi.
 *   ⚠⚠⚠ ZESTAWIENIA GŁĘBOKOŚCI TYCH DWÓCH JEZIOR
 *   NIE UŻYWAM JAKO KĄTA — kąt zajęty (Węgorzyno,
 *   poprzednia fala: średnia kontra maksimum).
 *   ⚠⚠ PODAJĘ POWIERZCHNIE I POŁOŻENIE NA PRZESMYKU,
 *   ANI SŁOWA O GŁĘBOKOŚCI. TWARDA GRANICA.
 * — Lesistość gminy prawie 45 %; wiele drzew przekracza
 *   150 lat. Leśny Szlak Golczewski 30 km.
 * — Kamień Pomorski ok. 21 km, Szczecin ok. 53 km.
 *   ⚠ POZOSTAŁE ODLEGŁOŚCI NIEZWERYFIKOWANE —
 *   podaję je bez kilometrów.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE USTALONO.
 *   ⚠⚠ TO JEST BRAK DOWODU, NIE DOWÓD BRAKU.
 *   NIE PISZĘ, ŻE GMINA NIE MA WPISU, ANI ŻE MA.
 *   TEMAT NIE POJAWIA SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: INNA METODA NA INNYM ETAPIE — o tym, że jedna
 * czynność potrafi wymagać dwóch różnych sposobów
 * pracy, zależnie od tego, gdzie się w niej jest.
 * Kąt od wieży w Golczewie: w przyziemiu jest
 * czworokątna i zbudowana z kamiennych głazów, a wyżej
 * okrągła i ceglana. Jedna budowla, dwie konstrukcje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wieża w Golczewie ma sześć kondygnacji i zmienia
 *   konstrukcję w połowie wysokości: dół czworokątny
 *   z głazów, góra okrągła z cegły,
 * — ŻE TO NIE JEST NIEKONSEKWENCJA, TYLKO DWA RÓŻNE
 *   ZADANIA — to jest rdzeń. Dół ma unieść wszystko,
 *   co nad nim; góra ma być jak najlżejsza,
 * — ⚠⚠ ŻE W KUCHNI JEST DOKŁADNIE TAK SAMO, A MY
 *   PRÓBUJEMY PRACOWAĆ CAŁY CZAS TAK SAMO. Początek
 *   obiadu i koniec obiadu to dwie różne czynności,
 *   rządzące się innymi zasadami,
 * — ⚠⚠ ŻE POCZĄTEK ZNOSI PRZERWY, A KONIEC NIE.
 *   Na początku można odejść, odebrać telefon, wrócić.
 *   Ostatnie dziesięć minut wymaga bycia przy garnku
 *   i nie da się ich rozciągnąć,
 * — ⚠⚠ ŻE Z TEGO WYNIKA PRAKTYCZNY WNIOSEK O PLANOWANIU
 *   DNIA, A NIE O PRZEPISIE: rzeczy, które trzeba
 *   pogodzić z czymkolwiek innym, robi się na dole
 *   wieży. Na górze już nie,
 * — ⚠⚠ ŻE NAJCZĘSTSZY BŁĄD POLEGA NA ODWROTNEJ
 *   KOLEJNOŚCI — zaczynamy w największym pośpiechu,
 *   a kończymy, gdy już nic nie goni. Wtedy
 *   najtrudniejsze minuty wypadają w najgorszym
 *   momencie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE KAŻDE DANIE MA TAKĄ
 *   BUDOWĘ. Są takie, które są równe od początku
 *   do końca — i wtedy cały ten podział jest do niczego
 *   niepotrzebny,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie znosi tego
 *   podziału. Przesuwa za to granicę między dołem
 *   a górą wyżej — bo część rzeczy, które trzeba było
 *   robić przy garnku, dzieje się bez patrzenia.
 *   MÓWIĘ TO WPROST: górna kondygnacja robi się krótsza,
 *   nie znika.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM I GŁĘBOKOŚCI
 *   JEZIOR — kąt zajęty (Węgorzyno, poprzednia fala).
 *   Golczewo ma dwa jeziora, które aż się o to proszą.
 *   NIE PODAJĘ ICH GŁĘBOKOŚCI ANI RAZU.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO ODTWARZANIA, PRZEPISÓW RODZINNYCH
 *   I DOKŁADANIA PIĘTRA, KTÓREGO NIE BYŁO — obszar
 *   zajęty PIĘCIOKROTNIE (Golub-Dobrzyń, Kamień
 *   Krajeński, Puck, Suraż, Radziejów). ⚠⚠ Rekonstrukcja
 *   z 24 na 33 m aż się o to prosi. PODAJĘ TE LICZBY
 *   WYŁĄCZNIE JAKO FAKT BUDOWLANY, bez morału.
 * — ⚠⚠ ZERO ZAPROJEKTOWANIA NARAZ KONTRA DOKŁADANIA
 *   PO KOLEI — kąt zajęty (Zamość).
 * — ⚠⚠ ZERO WZMACNIANIA TAM, GDZIE OBCIĄŻENIE — kąt
 *   zajęty (Lipiany). ⚠⚠ TO JEST NAJBLIŻSZY KĄT.
 *   Tam chodzi o TO, GDZIE WŁOŻYĆ WIĘCEJ MATERIAŁU;
 *   TUTAJ o TO, ŻE NA DWÓCH ETAPACH PRACUJE SIĘ INACZEJ.
 *   Nie używam słowa „obciążenie" ani razu
 *   i nie piszę o grubości. ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO GRUBOŚCI DNA I MURÓW — kąt zajęty (Resko).
 * — ⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Choszczno).
 *   Czworokąt i koło opisują konstrukcję wieży,
 *   nigdy naczynia.
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno).
 * — ⚠⚠ ZERO CZEGO NIE WIDAĆ NA TALERZU — kąt zajęty
 *   (Mirosławiec).
 * — ⚠ ZERO STAŁYCH WARUNKÓW ZAMIAST PILNOWANIA — kąt
 *   zajęty (Kalisz Pomorski). Piszę o tym, KIEDY trzeba
 *   być przy garnku, nie o tym, jak przestać pilnować.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO PLANU DNIA — podaję WYŁĄCZNIE
 *   kryterium podziału.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ZAMKU JAKO TEMATU OBRONNEGO ANI LOCHU JAKO
 *   MIEJSCA UWIĘZIENIA — loch wymieniam wyłącznie jako
 *   najniższą kondygnację.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — synodu, biskupów,
 *   kościoła i jego wyposażenia nie wprowadzam.
 * — ⚠ ZERO DEMOGRAFII — także spadku o 8 % w latach
 *   2002–2024.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH — nie ustalono.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ daty budowy zamku — trzy wersje.
 * — NIE POWTARZAM, że to najwyższa wieża zamkowa
 *   na Pomorzu Zachodnim — jedno źródło.
 * — NIE PODAJĘ liczby miejscowości w gminie — 28 albo 29.
 * — NIE PODAJĘ głębokości jezior.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych — nie ustalono.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE PODAJĘ ŻADNEGO GOTOWEGO PLANU DNIA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Golczewo leży w powiecie kamieńskim, około
 *   dwudziestu jeden kilometrów od Kamienia Pomorskiego
 *   i pięćdziesięciu trzech od Szczecina, na przesmyku
 *   między jeziorami Okonie (51,31 ha) i Szczucze
 *   (33,68 ha),
 * — miasto liczy 2 501 mieszkańców (GUS, 31.12.2024)
 *   na 7,4 km², a cała gmina 5 489 osób na 175,3 km²;
 *   lasy zajmują prawie 45 % jej powierzchni, a wiele
 *   drzew przekracza 150 lat,
 * — prawa miejskie Golczewo otrzymało 1 stycznia 1990 r.
 *   i jest jednym z najmłodszych miast w Polsce,
 * — zamek zbudowano na przełomie XIII i XIV w.,
 *   a pierwsza wzmianka dokumentowa pochodzi z 1304 r.;
 *   założenie miało około 40 × 40 m, a skrzydło
 *   mieszkalne 12 × 25 m,
 * — około 1840 r. zamek rozebrano i ocalała z niego
 *   tylko wieża: sześć kondygnacji wraz z lochem,
 *   w przyziemiu czworokątna, zbudowana z kamiennych
 *   głazów, a wyżej okrągła i ceglana; pierwotnie
 *   miała 24 m, a po rekonstrukcji osiągnęła 33 m,
 * — prace konserwatorskie prowadzono w 1895 i 1929 r.,
 *   odtwarzając krenelaż, a rewitalizację zakończono
 *   w 2010 r., urządzając w wieży punkt widokowy,
 * — nad jeziorem Okonie zachowało się grodzisko
 *   pierścieniowate z IX w.; w mieście stoi dom ryglowy
 *   z XVIII w. i studnia artezyjska z XVII w.,
 *   a w Kłębach wiatrak holenderski z 1865 r.,
 * — przez gminę prowadzi Leśny Szlak Golczewski
 *   o długości trzydziestu kilometrów.
 */
export const GOLCZEWO: CityContent = {
  slug: "golczewo",
  h1: "Thermomix Golczewo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Golczewo — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Golczewie (powiat kamieński): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Golczewo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Golczewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Golczewa w powiecie kamieńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Golczewo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dół wieży jest czworokątny i kamienny. Góra okrągła i ceglana. To nie pomyłka.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Golczewie – jak wygląda prezentacja?",
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
      id: "dwie-konstrukcje",
      heading: "Jedna wieża, dwie konstrukcje",
      paragraphs: [
        "Z całego zamku w Golczewie została jedna rzecz. Resztę rozebrano około 1840 roku, a wieża stoi do dziś — sześć kondygnacji razem z lochem, pierwotnie dwadzieścia cztery metry, po rekonstrukcji trzydzieści trzy.",
        "Najciekawsze jest w niej to, że zmienia się w połowie wysokości. W przyziemiu jest czworokątna i zbudowana z kamiennych głazów. Wyżej — okrągła i ceglana.",
        "To nie jest niekonsekwencja ani ślad po dwóch budowniczych, którzy się nie dogadali. To są po prostu dwa różne zadania. Dół ma unieść wszystko, co nad nim, więc jest z najcięższego materiału, jaki był pod ręką. Góra ma być jak najlżejsza, więc jest z cegły i okrągła.",
        "W kuchni jest dokładnie tak samo — tylko że my próbujemy pracować cały czas jednakowo.",
        "Początek obiadu i koniec obiadu to nie jest ta sama czynność. Rządzą się innymi prawami i mają inną odporność na przerwy.",
        "Na początku można odejść. Odebrać telefon, wstawić pranie, wrócić po pięciu minutach — nic się nie stanie, bo rzeczy się moczą, rozmrażają, grzeją, czekają. Ostatnie dziesięć minut wymaga bycia przy garnku. Tych minut nie da się rozciągnąć, przesunąć ani podzielić, i każda przerwa kosztuje.",
        "Z tego wynika rzecz praktyczna, i to nie o przepisie, tylko o godzinach.",
        "Wszystko, co trzeba pogodzić z czymkolwiek innym — odbieranie dziecka, telefon, który musi się odbyć, ostatnia rzecz do wysłania — robi się na dole wieży. Na górze już nie. Jeśli ostatnie dziesięć minut obiadu przypada dokładnie na moment, w którym ktoś wchodzi do domu i o coś pyta, to nie jest pech. To jest źle rozłożona kolejność.",
        "A najczęstszy błąd polega na odwrotnym ułożeniu całości: zaczynamy w największym pośpiechu, bo dopiero wtedy przypominamy sobie o obiedzie, a kończymy wtedy, gdy już właściwie nic nie goni. Wychodzi z tego wieża postawiona do góry nogami — najtrudniejsze minuty w najgorszym momencie dnia.",
        "Uczciwie o drugiej stronie: nie każde danie ma taką budowę. Są takie, które są równe od pierwszej minuty do ostatniej i wtedy cały ten podział jest do niczego niepotrzebny. Warto tylko wiedzieć, które robicie najczęściej.",
        "Na koniec o urządzeniu, bez obietnic. Ono nie znosi podziału na dół i górę.",
        "Przesuwa granicę między nimi wyżej — bo część rzeczy, które trzeba było robić stojąc przy garnku, dzieje się bez patrzenia. Górna kondygnacja robi się przez to krótsza i węższa. Nie znika i nie udaję, że znika.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Golczewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o której u Was zwykle robi się najbardziej nerwowo. Pod to ułożę kolejność dań, a nie odwrotnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Golczewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Golczewa",
      paragraphs: [
        "Golczewo leży w powiecie kamieńskim, około dwudziestu jeden kilometrów od Kamienia Pomorskiego i pięćdziesięciu trzech od Szczecina, na przesmyku między dwoma jeziorami: Okoniem, które ma pięćdziesiąt jeden hektarów, i Szczuczym — niecałe trzydzieści cztery. Samo miasto liczy ponad dwa i pół tysiąca mieszkańców (GUS, 31.12.2024) na siedmiu i czterech dziesiątych kilometra kwadratowego, a cała gmina blisko pięć i pół tysiąca osób na stu siedemdziesięciu pięciu; lasy zajmują prawie czterdzieści pięć procent jej powierzchni, a wiele drzew przekracza sto pięćdziesiąt lat. Prawa miejskie Golczewo otrzymało 1 stycznia 1990 roku i jest jednym z najmłodszych miast w Polsce — choć zamek stał tu już na przełomie trzynastego i czternastego wieku, a pierwsza wzmianka dokumentowa pochodzi z 1304. Założenie zamkowe miało około czterdziestu metrów na czterdzieści, a skrzydło mieszkalne dwanaście na dwadzieścia pięć. Około 1840 roku zamek rozebrano; została wieża — sześć kondygnacji wraz z lochem, w przyziemiu czworokątna z kamiennych głazów, wyżej okrągła i ceglana. Prace konserwatorskie prowadzono w 1895 i 1929, a rewitalizację zakończono w 2010, urządzając na górze punkt widokowy. Nad Okoniem zachowało się grodzisko pierścieniowate z dziewiątego wieku, w mieście stoi dom ryglowy z osiemnastego i studnia artezyjska z siedemnastego, a w Kłębach wiatrak holenderski z 1865 roku.",
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

  districtsHeading: "Do których części Golczewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość — gmina ma ponad sto siedemdziesiąt kilometrów kwadratowych, w dużej części leśnych.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Golczewo też przyjadę",
  nearbyParagraphs: [
    "Kamień Pomorski jest około dwudziestu jeden kilometrów stąd, Szczecin pięćdziesiąt trzy. Do Nowogardu, Płotów, Wolina i Gryfic też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Kamień Pomorski", "Nowogard", "Płoty", "Wolin", "Gryfice"],

  about: blokOMnie("do Golczewa", "w Golczewie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Golczewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto zwrócić uwagę na pisownię: Golczewo przez „l”, w powiecie kamieńskim — nie Gołczewo. W tej samej gminie leży też osobna miejscowość Golczewo-Gaj, więc przy umawianiu wystarczy dopowiedzieć, o którą chodzi.",
    },
    ...faqWspolne("w Golczewie"),
    {
      question: "Dlaczego koniec gotowania zawsze wypada w najgorszym momencie?",
      answer:
        "Bo zwykle robimy to w odwrotnej kolejności, niż wynikałoby z samego dania. Początek obiadu znosi przerwy — rzeczy się moczą, grzeją, czekają, można odejść. Ostatnie dziesięć minut wymaga bycia przy garnku i nie da się ich rozciągnąć. Wszystko, co trzeba pogodzić z czymkolwiek innym, warto więc zmieścić na początku, a nie na końcu.",
    },
    {
      question: "Czy Thermomix skraca ten najbardziej napięty moment obiadu?",
      answer:
        "Skraca go, ale nie likwiduje — i nie usłyszycie ode mnie inaczej. Część rzeczy, które trzeba było robić stojąc przy garnku, dzieje się z ustawioną temperaturą i mieszaniem, więc można w tym czasie zająć się czymś innym. Ostatnie minuty nadal są ostatnimi minutami, tylko jest ich mniej.",
    },
  ],

  geo: { lat: 53.8242, lng: 14.9784 },
};
