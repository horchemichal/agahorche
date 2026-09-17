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
 * LUBAWKA — powiat kamiennogórski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 5 500 mieszkańców (GUS 31.12.2024), 22,4 km²,
 *   gęstość 245,1 os./km² [ZW, domyka się przy
 *   powierzchni 22,44 km²]. PODAJĘ.
 * CAŁA GMINA: 10 072 osoby, 138,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 10 072 / 138,1 = 72,9,
 *   a serwis podaje 74. NIE DOMYKA SIĘ.
 *   ⚠⚠⚠ NIE PODAJĘ „ok. 13 tysięcy" — liczba z portalu,
 *   nieaktualna o kilkanaście lat. WYŁĄCZNIE GUS.
 *   ⚠ CZTERNAŚCIE WSI wymienionych w wykazie GUS:
 *   Bukówka, Błażejów, Błażkowa, Chełmsko Śląskie,
 *   Jarkowice, Miszkowice, Niedamirów, Okrzeszyn, Opawa,
 *   Paczyn, Paprotki, Stara Białka, Szczepanów, Uniemyśl.
 *   ⚠⚠ PISZĘ „wymienia czternaście wsi", NIE „czternaście
 *   sołectw" — liczba sołectw [NP].
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ PROPORCJI „mało powierzchni, dużo ludzi"
 *   NIE ROBIĘ — ta figura wypada w Pieńsku i Głuszycy
 *   W TEJ SAMEJ FALI. PODAJĘ SUROWE LICZBY.
 * ⚠ GEO: 50,700 / 16,000.
 *
 * ⚠⚠ ODMIANA — PRZEGŁOS W MIEJSCOWNIKU:
 *   D. do Lubawki · Ms. w LUBAWCE (k → c) · B. Lubawkę.
 *   ⚠⚠⚠ BŁĄD: „w Lubawki". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠⚠⚠ NAJPOWAŻNIEJSZA KOLIZJA CAŁEJ FALI:
 *   PRZYMIOTNIK „LUBAWSKI" NALEŻY PRZEDE WSZYSTKIM
 *   DO LUBAWY (woj. warmińsko-mazurskie) — MIASTA, KTÓRE
 *   MA JUŻ STRONĘ W TYM SERWISIE. Utrwalone wyrażenia:
 *   „ziemia lubawska", „Nowe Miasto Lubawskie".
 *   ⚠⚠⚠ W TYM PLIKU NIE UŻYWAM PRZYMIOTNIKA „LUBAWSKI"
 *   SAMODZIELNIE. ZAWSZE: „w Lubawce", „mieszkańcy
 *   Lubawki", „spis z Lubawki".
 *   ⚠ WYJĄTEK: „Brama Lubawska" i „Przełęcz Lubawska"
 *   to nazwy geograficzne odnoszące się DO LUBAWKI —
 *   dopuszczam, ale tylko jako nazwy własne.
 *   ⚠⚠ ROZGRANICZAM LUBAWKĘ OD LUBAWY W FAQ —
 *   OBOWIĄZKOWO.
 *   ⚠ POZOSTAŁE KOLIZJE: Lubaczów (podkarpackie), Lubań
 *   (ten sam region), Lubsko (lubuskie).
 *
 * ⚠⚠ DATY USTROJOWE — RÓŻNICA OSIEM LAT:
 *   — PIERWSZA WZMIANKA: 1284 r., forma „Lubavia"
 *     [SP — jedno źródło],
 *   — PRAWA MIEJSKIE: 1292 r., nadał BOLKO I ŚWIDNICKI
 *     [ZW dla roku, SP dla nadawcy].
 *   ⚠⚠ OSIEM LAT TO ODWROTNOŚĆ WZORCA POZOSTAŁYCH MIAST
 *   TEJ FALI (Pieńsk, Piława Górna, Piechowice, Głuszyca
 *   — od 550 do blisko 1000 lat).
 *   ⚠⚠⚠ ALE KĄTA Z TEGO NIE ROBIĘ — „nadanie a pierwsza
 *   wzmianka" to figura wielokrotnie użyta w cyklu.
 *   PODAJĘ OBIE DATY JAKO FAKTY.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SPIS Z 1784 ROKU:
 *   101 TKACZY · 149 KROSIEN · 269 DOMÓW, w tym
 *   8 budynków użyteczności publicznej [SP — jedno
 *   źródło, ale pozostałe daty z tego artykułu (1284,
 *   1292, 1734, 1848, 1857, 1865, 1867) są spójne
 *   z innymi źródłami; wiarygodność wysoka].
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 149 / 101 = 1,475.
 *   POŁOWA TKACZY MIAŁA WIĘCEJ NIŻ JEDNO KROSNO.
 *   To jest cały kąt.
 *   ⚠⚠⚠ PRZYCZYNY NIE ZNAM Z ŹRÓDŁA I NIE PODAJĘ JEJ
 *   JAKO FAKTU HISTORYCZNEGO. Piszę o niej JAKO
 *   O WŁASNYM ODCZYTANIU, wprost oznaczonym („tak to
 *   czytam"), bo krosno raz nawleczone zostaje nawleczone.
 *   ⚠⚠ NIE TWIERDZĘ, ile dokładnie osób miało po dwa
 *   krosna — rozkładu nie znam. Twierdzę tylko, że
 *   krosien było o 48 więcej niż tkaczy.
 *   ⚠ 101 tkaczy przy 269 domach podaję jako fakt,
 *   BEZ przeliczania na „co drugi dom" — to byłby
 *   wniosek, nie fakt.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — CHEŁMSKO ŚLĄSKIE (WIEŚ W GMINIE, nie miasto!):
 *   — 1707 — opat Dominik Geyer zleca budowę DWUNASTU
 *     domów tkaczy przy dzisiejszej ul. Sądeckiej 13–23,
 *     zwanych „Dwunastu Apostołów"; tkacze sprowadzeni
 *     z Czech. ZACHOWAŁO SIĘ JEDENAŚCIE [ZW],
 *   — 1763 — drugi zespół, „Siedmiu Braci", dla tkaczy
 *     adamaszku sprowadzonych z Bawarii. ZACHOWAŁ SIĘ
 *     JEDEN [ZW].
 *   ⚠⚠⚠ PRZYCZYNY STRAT (pożary) NIE PODAJĘ ANI SŁOWEM.
 *   Podaję wyłącznie liczby zbudowanych i zachowanych.
 *   NIE TWIERDZĘ, dlaczego jedne przetrwały, a drugie nie.
 *   ⚠⚠ „STARSZE PRZETRWAŁO LEPIEJ" JAKO MORAŁ —
 *   NIE UŻYWAM. To drugi kąt, a jeden tekst to jeden kąt.
 *   PODAJĘ LICZBY, CZYTELNIK SAM ZOBACZY.
 *   ⚠⚠ ZAWSZE PISZĘ „w Chełmsku Śląskim, wsi w gminie
 *   Lubawka" — nie przypisuję tego miastu.
 * — PRZĘDZALNIE I KOLEJ: 1857 i 1865 — pierwsze
 *   przędzalnie mechaniczne; 1867 — linia kolejowa.
 *   ⚠⚠ „MASZYNY PRZED TORAMI" JAKO KĄT — NIE UŻYWAM:
 *   ociera się o „najpierw droga, potem ruch" (Pieńsk,
 *   TA SAMA FALA). PODAJĘ DATY BEZ MORAŁU.
 * — KALWARIA NA ŚWIĘTEJ GÓRZE: 701 m n.p.m.;
 *   ⚠⚠⚠ WĄTKU WYZNANIOWEGO NIE ROZWIJAM — podaję
 *   WYŁĄCZNIE wysokość wzniesienia jako punkt
 *   w krajobrazie, bez opisu obiektów.
 *   ⚠ Rozważałem datowanie 1740/1839/1868/1880 —
 *   ODRZUCAM, bo to obiekty kultu.
 * — ⚠⚠⚠ RATUSZA NIE OPISUJĘ: dwa źródła podają
 *   nieuzgadnialne daty (budowa 1726 vs 1723–1725,
 *   pożar 1735 vs 1734, wieża 1784 vs 1862 — RÓŻNICA
 *   78 LAT). NIE PODAJĘ ŻADNEJ Z TYCH DAT.
 * — ⚠⚠⚠ ZBIORNIKA BUKÓWKA NIE OPISUJĘ: powierzchnia
 *   podawana jako 200 ha albo 126 ha — RÓŻNICA 60 %.
 *   NIE PODAJĘ ŻADNEJ LICZBY. Wymieniam co najwyżej
 *   nazwę wsi Bukówka w wykazie miejscowości.
 * — ODLEGŁOŚĆ: Kamienna Góra 9 km [SP — jedno źródło].
 *   PODAJĘ Z ZAOKRĄGLENIEM SŁOWNYM („dziewięć
 *   kilometrów"). POZOSTAŁYCH KIERUNKÓW NIE PODAJĘ.
 *
 * KĄT: WIĘCEJ NARZĘDZI NIŻ RĄK
 * — o tym, że narzędzie ustawione na stałe to zupełnie
 * inne narzędzie niż to samo narzędzie chowane po użyciu.
 * Kąt od spisu z 1784 roku: stu jeden tkaczy miało sto
 * czterdzieści dziewięć krosien. Nie dlatego, że było ich
 * stać — dlatego, że rozstawianie kosztuje więcej
 * niż sprzęt.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że spis z 1784 r. notuje w Lubawce stu jeden tkaczy,
 *   sto czterdzieści dziewięć krosien i dwieście
 *   sześćdziesiąt dziewięć domów, w tym osiem budynków
 *   użyteczności publicznej,
 * — ŻE KROSIEN BYŁO O CZTERDZIEŚCI OSIEM WIĘCEJ
 *   NIŻ TKACZY, choć nikt nie tka na dwóch naraz.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE TAK TO CZYTAM (jawnie oznaczone jako moje
 *   odczytanie, nie fakt ze źródła): krosno raz nawleczone
 *   zostaje nawleczone. Drugie krosno nie jest luksusem,
 *   tylko sposobem na niepowtarzanie przygotowania,
 * — ⚠⚠ ŻE W KUCHNI OBOWIĄZUJE TA SAMA ARYTMETYKA
 *   I LICZY SIĘ W NIEJ NIE CENA PRZEDMIOTU, TYLKO CZAS
 *   JEGO ROZSTAWIANIA,
 * — ⚠⚠ ŻE DLATEGO PYTANIE PRZED KAŻDYM ZAKUPEM
 *   DO KUCHNI BRZMI NIE „CZY TO PRZYDATNE", TYLKO
 *   „CZY TO BĘDZIE STAŁO GOTOWE, CZY TRZEBA BĘDZIE
 *   TO ZA KAŻDYM RAZEM WYJMOWAĆ",
 * — ⚠⚠ ŻE RZECZY, KTÓRE TRZEBA WYJMOWAĆ, SKŁADAĆ
 *   I CHOWAĆ, UŻYWA SIĘ DUŻO RZADZIEJ, NIŻ WYNIKAŁOBY
 *   Z ICH PRZYDATNOŚCI — i nie ma w tym lenistwa,
 *   tylko zwykły rachunek,
 * — ⚠⚠ ŻE DZIAŁA TO TAKŻE W DRUGĄ STRONĘ: druga deska
 *   albo druga miska to nie rozrzutność, tylko oszczędzone
 *   mycie w połowie gotowania,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: blat jest skończony
 *   i wszystkiego na nim nie postawisz. Trzeba wybrać,
 *   co zostaje na wierzchu — i to jest prawdziwa decyzja
 *   zakupowa, trudniejsza niż sam wybór sprzętu,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE — TO MUSI PADAĆ WPROST
 *   I JEST NIEWYGODNE: Thermomix działa tylko wtedy, gdy
 *   stoi na blacie. Chowany do szafki będzie używany
 *   ułamek tego, co mógłby. MÓWIĘ, że wolne miejsce
 *   na blacie trzeba sprawdzić PRZED zakupem i że jest
 *   to ważniejsze pytanie niż cena.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice, TA SAMA FALA). ⚠⚠⚠ TO NAJBLIŻSZY
 *   OBSZAR I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tamten tekst
 *   mówi, KIEDY SPRAWDZIĆ, czy rzecz jest używana;
 *   ten mówi, GDZIE MA STAĆ, żeby w ogóle była.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE W TEKŚCIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠ ZERO NIE MUSI WYGLĄDAĆ JEDNOLICIE — kąt zajęty
 *   (Głuszyca, ta sama fala). ⚠ Tamten tekst też wspomina
 *   o blacie, ale w kontekście WYMIARÓW STYKAJĄCYCH SIĘ
 *   RZECZY. Tu chodzi o KOSZT ROZSTAWIANIA.
 * — ⚠⚠ ZERO ZAPASOWE POWINNO BYĆ INNE — kąt zajęty
 *   (Chocianów).
 * — ⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt zajęty
 *   (Szklarska Poręba). ⚠⚠⚠ TKACTWO I SPIS ZAWODÓW
 *   OCIERAJĄ SIĘ O TAMTO WPROST. DLATEGO NIE ROZBIJAM
 *   PRACY TKACKIEJ NA ETAPY I NIE WYMIENIAM ZAWODÓW.
 *   Liczę WYŁĄCZNIE ludzi i urządzenia.
 * — ⚠⚠ ZERO EGZEMPLARZA KONTRA KATEGORII — kąt zajęty
 *   (Polanica-Zdrój).
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty (Kamienna
 *   Góra, MIASTO POWIATOWE TEJ GMINY).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH ZALECEŃ, CO KUPIĆ — podaję
 *   WYŁĄCZNIE pytanie: stoi gotowe czy trzeba wyjmować.
 * — ⚠⚠ ŻADNYCH WYMIARÓW URZĄDZENIA W CENTYMETRACH —
 *   nie podaję liczb, których nie zweryfikowałam.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU — ani przy domach
 *   tkaczy, ani przy ratuszu.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kalwaria, kościoły
 *   i pałac opacki zostają poza tekstem.
 * — ⚠⚠ ZERO ZMIAN ZWIERZCHNOŚCI PAŃSTWOWEJ (1392, 1525)
 *   — prowadzi w wątki polityczne i wojenne.
 * — ⚠ ZERO UPADKU WŁÓKIENNICTWA, BEZROBOCIA
 *   I WYLUDNIENIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ liczby „13 tysięcy" ani żadnej liczby
 *   spoza GUS.
 * — NIE PODAJĘ liczby sołectw jako urzędowej.
 * — NIE TWIERDZĘ, ilu tkaczy miało po dwa krosna.
 * — NIE PODAJĘ przyczyny, dla której krosien było więcej
 *   niż tkaczy — oznaczam to jako własne odczytanie.
 * — NIE PODAJĘ przyczyn strat wśród domów tkaczy.
 * — NIE PODAJĘ żadnej daty dotyczącej ratusza.
 * — NIE PODAJĘ powierzchni zbiornika Bukówka.
 * — NIE UŻYWAM przymiotnika „lubawski" samodzielnie.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lubawka leży w powiecie kamiennogórskim; miasto liczy
 *   5 500 mieszkańców (GUS, 31.12.2024) na 22,4 km²,
 *   czyli 245 osób na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 10 072 osoby na 138,1 km²; wykaz GUS
 *   wymienia w niej czternaście wsi,
 * — pierwsza wzmianka pochodzi z 1284 r., w formie
 *   „Lubavia", a prawa miejskie nadał w 1292 r. książę
 *   Bolko I świdnicki — osiem lat później,
 * — spis z 1784 r. notuje w mieście 101 tkaczy,
 *   149 krosien oraz 269 domów, w tym 8 budynków
 *   użyteczności publicznej,
 * — w Chełmsku Śląskim, wsi w tej gminie, opat Dominik
 *   Geyer zlecił w 1707 r. budowę dwunastu domów tkaczy
 *   przy dzisiejszej ulicy Sądeckiej, zwanych „Dwunastu
 *   Apostołów"; zachowało się jedenaście. Drugi zespół,
 *   „Siedmiu Braci", powstał w 1763 r. dla tkaczy
 *   adamaszku; zachował się jeden budynek,
 * — pierwsze przędzalnie mechaniczne uruchomiono w 1857
 *   i 1865 r., a linię kolejową doprowadzono w 1867,
 * — Święta Góra ma 701 m n.p.m.,
 * — do Kamiennej Góry jest stąd około 9 km.
 */
export const LUBAWKA: CityContent = {
  slug: "lubawka",
  h1: "Thermomix Lubawka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lubawka — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Lubawce: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubawka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubawce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lubawki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czternastu wsi w gminie.",

  highlights: highlightyStandardowe("Lubawka"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Stu jeden tkaczy, sto czterdzieści dziewięć krosien.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lubawce – jak wygląda prezentacja?",
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
      id: "wiecej-narzedzi-niz-rak",
      heading: "Więcej narzędzi niż rąk",
      paragraphs: [
        "Spis z 1784 roku notuje w Lubawce stu jeden tkaczy. Krosien — sto czterdzieści dziewięć. Domów było dwieście sześćdziesiąt dziewięć, w tym osiem budynków użyteczności publicznej.",
        "Czterdzieści osiem krosien więcej niż tkaczy. A nikt nie tka na dwóch naraz.",
        "Tak to czytam — i zaznaczam, że to moje odczytanie, nie zdanie ze źródła: krosno raz nawleczone zostaje nawleczone. Przygotowanie do jednej roboty trwa tak długo, że taniej jest mieć drugie krosno, niż rozbierać i składać pierwsze. Drugie krosno nie było luksusem. Było sposobem na niepowtarzanie przygotowania.",
        "W kuchni obowiązuje dokładnie ta sama arytmetyka i liczy się w niej nie cena przedmiotu, tylko czas jego rozstawiania.",
        "Dlatego pytanie przed każdym zakupem do kuchni brzmi nie „czy to przydatne”, tylko „czy to będzie stało gotowe, czy trzeba to będzie za każdym razem wyjmować”.",
        "Rzeczy, które trzeba wyjąć z szafki, złożyć, użyć, umyć, rozłożyć i schować, używa się dużo rzadziej, niż wynikałoby z ich przydatności. I nie ma w tym lenistwa — jest zwykły rachunek. Kiedy przygotowanie trwa dłużej niż sama robota, człowiek robi to inaczej.",
        "Działa to też w drugą stronę, i to jest ta przyjemniejsza. Druga deska nie jest rozrzutnością. Druga miska nie jest rozrzutnością. To jest mycie, którego nie musisz robić w połowie gotowania — czyli dokładnie to samo, co drugie krosno.",
        "Dopowiem, bo to leży blisko: to nie jest pytanie o to, kiedy sprawdzić, czy rzecz się przyjęła. To osobna sprawa i rozstrzyga się ją później. Tutaj chodzi tylko o to, gdzie rzecz będzie stała.",
        "Uczciwie o drugiej stronie: blat jest skończony i wszystkiego na nim nie postawisz. Trzeba wybrać, co zostaje na wierzchu, a to jest prawdziwa decyzja — trudniejsza niż sam wybór sprzętu i zwykle odkładana, bo nikt nie lubi się przyznać, że czegoś nie będzie używał.",
        "I uczciwie o moim sprzęcie, bo to akurat jest niewygodne. Thermomix działa tylko wtedy, gdy stoi na blacie. Chowany po każdym użyciu do szafki będzie używany ułamek tego, co mógłby — i nie zmieni tego ani cena, ani liczba funkcji. Dlatego uważam, że wolne miejsce na blacie trzeba sprawdzić przed zakupem i że jest to ważniejsze pytanie niż rata.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubawce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was stoi na blacie na stałe. To pytanie brzmi dziwnie przez telefon, ale mówi o kuchni więcej niż jej metraż.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubawce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Lubawki",
      paragraphs: [
        "Lubawka leży w powiecie kamiennogórskim. Samo miasto liczy 5 500 mieszkańców (GUS, 31.12.2024) na dwudziestu dwóch kilometrach kwadratowych z okładem, czyli dwieście czterdzieści pięć osób na kilometr, a cała gmina miejsko-wiejska 10 072 osoby na stu trzydziestu ośmiu. Podaję akurat te liczby, bo w portalach krąży „około trzynastu tysięcy” — to dane sprzed kilkunastu lat. Wykaz GUS wymienia w gminie czternaście wsi, wśród nich Chełmsko Śląskie, Miszkowice, Uniemyśl i Bukówkę. Pierwsza wzmianka pochodzi z 1284 roku, w formie „Lubavia”, a prawa miejskie nadał w 1292 książę Bolko I świdnicki — osiem lat później, co w tej okolicy jest ewenementem, bo sąsiednie miasta czekały na nie po kilkaset lat. Spis z 1784 roku notuje w mieście stu jeden tkaczy, sto czterdzieści dziewięć krosien i dwieście sześćdziesiąt dziewięć domów, w tym osiem budynków użyteczności publicznej. W Chełmsku Śląskim, wsi w tej gminie, opat Dominik Geyer zlecił w 1707 roku budowę dwunastu domów tkaczy przy dzisiejszej ulicy Sądeckiej, nazwanych „Dwunastu Apostołów” — zachowało się jedenaście. Drugi zespół, „Siedmiu Braci”, powstał w 1763 roku dla tkaczy adamaszku; zachował się jeden budynek. Pierwsze przędzalnie mechaniczne uruchomiono w 1857 i 1865 roku, a linię kolejową doprowadzono w 1867. Święta Góra ma siedemset jeden metrów nad poziomem morza. Do Kamiennej Góry jest stąd około dziewięciu kilometrów.",
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

  districtsHeading: "Do których części Lubawki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czternastu wsi w gminie: Bukówki, Błażejowa, Błażkowej, Chełmska Śląskiego, Jarkowic, Miszkowic, Niedamirowa, Okrzeszyna, Opawy, Paczyna, Paprotek, Starej Białki, Szczepanowa i Uniemyśla. Wszędzie bez dopłaty.",
    "Gmina ma sto trzydzieści osiem kilometrów kwadratowych i ciągnie się aż do granicy, więc przy umawianiu warto podać nazwę miejscowości, a nie samą gminę.",
  ],
  districts: [],

  nearbyHeading: "Poza Lubawkę też przyjadę",
  nearbyParagraphs: [
    "Do Kamiennej Góry jest stąd około dziewięciu kilometrów. Dojeżdżam też do Wałbrzycha, Jeleniej Góry, Kowar i Boguszowa-Gorc — wszędzie bezpłatnie, tak samo jak w samej Lubawce.",
  ],
  nearbyTowns: ["Kamienna Góra", "Wałbrzych", "Jelenia Góra", "Kowary", "Boguszów-Gorce"],

  about: blokOMnie("do Lubawki", "w Lubawce i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubawki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czternastu wsi w gminie — łącznie z Chełmskiem Śląskim, Uniemyślem, Miszkowicami i Bukówką. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: mówi się „w Lubawce”, a nie „w Lubawki”. I ważniejsza — Lubawka to nie Lubawa. Lubawa leży w województwie warmińsko-mazurskim, kilkaset kilometrów stąd, i to do niej odnoszą się określenia „ziemia lubawska” czy „Nowe Miasto Lubawskie”. Do Lubawy też jeżdżę, ale to zupełnie inne strony Polski.",
    },
    ...faqWspolne("w Lubawce"),
    {
      question: "Jak ocenić przed zakupem, czy sprzęt kuchenny będzie faktycznie używany?",
      answer:
        "Zapytać, gdzie będzie stał. Spis z Lubawki z 1784 roku notuje stu jeden tkaczy i sto czterdzieści dziewięć krosien — czterdzieści osiem więcej niż ludzi, którzy przy nich pracowali. Tak to czytam: krosno raz nawleczone zostaje nawleczone, bo rozstawianie kosztuje więcej niż samo urządzenie. W kuchni jest identycznie. Rzeczy, które trzeba wyjmować, składać i chować, używa się ułamek tego, na co zasługują. Dlatego pytanie brzmi nie „czy to przydatne”, tylko „czy to będzie stało gotowe”.",
    },
    {
      question: "Czy Thermomix musi stać na blacie?",
      answer:
        "Żeby miał sens — tak, i mówię to wprost, choć nie działa to na moją korzyść. Chowany do szafki po każdym użyciu będzie używany rzadko, bo samo wyjmowanie i chowanie zjada tę wygodę, za którą się płaci. Dlatego wolne miejsce na blacie warto sprawdzić przed zakupem, a nie po dostawie — uważam to za ważniejsze pytanie niż wysokość raty. Na prezentacji zobaczycie to od razu, bo urządzenie stanie u Was na blacie i będzie tam stało przez całe spotkanie.",
    },
  ],

  geo: { lat: 50.7, lng: 16.0 },
};
