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
 * PŁOTY — powiat gryficki, woj. zachodniopomorskie,
 * nad Regą. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 691 mieszkańców (GUS 31.12.2024), 4,1 km²,
 * gęstość 895,9 os./km².
 * CAŁA GMINA: 8 035 osób, 239,2 km², 34 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,8015 / 15,2673.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 * ⚠⚠⚠ PUŁAPKA POTWIERDZONA W PRAKTYCE: serwis
 *   geoportalowy podał dla „Płotów" liczbę 8 004 —
 *   to jest ludność GMINY podpisana jako ludność MIASTA.
 *   Właściwa liczba dla miasta to 3 691.
 *   To dokładnie ten błąd, przed którym pilnuję się
 *   na każdej stronie.
 *
 * ⚠ ODMIANA: PLURALE TANTUM.
 *   D. PŁOTÓW, Ms. W PŁOTACH.
 *   ⭐ NAZWA MIESZKAŃCA: PŁOCIANIN / PŁOCIANKA /
 *   PŁOCIANIE — potwierdzona w słowniku SJP,
 *   ⚠⚠ ALE NIE W PWN. Dodatkowo forma „płocianin"
 *   brzmi myląco blisko mieszkańca PŁOCKA.
 *   DLATEGO JEJ NIE UŻYWAM. W sekcji rodzinnej piszę
 *   „dla rodziny z Płotów".
 *   ⚠ PRZYMIOTNIKA NIE USTALONO — też nie używam.
 * ⚠ HOMONIM: istnieje wieś PŁOTY w woj. lubuskim.
 *   ROZGRANICZAM W FAQ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1277 — PRAWA MIEJSKIE nadane przez rycerza Dobiesława
 *   z Otoka, władającego grodem. ⚠ SAM ROK.
 * — XII w. — pierwsze założenie grodu: plan zbliżony
 *   do kwadratu o BOKU 40 M, w widłach Rekowicy i Regi;
 *   szeroka, nawodniona fosa.
 * — 1284 — Ludwik Wedel rozpoczyna budowę kamiennego muru
 *   ZAMKU; 1294 — Jan Heydebreck przesuwa mur,
 *   powiększając teren.
 * — WIEŻA MIESZKALNA: 12,7 × 16,9 M, około 18 M
 *   WYSOKOŚCI; dolna partia, wysoka na 6 m, z kamienia,
 *   wyższe z cegły.
 *   ⚠⚠ WYMIARÓW CAŁEGO ZAŁOŻENIA NIE PODAJĘ —
 *   źródła podają 28 × 36 m ALBO 28 × 45 m i nie
 *   wiadomo, czy mierzą to samo.
 * — 1465 — zamek zdobyty i spalony, później odbudowany.
 *   ⚠⚠ NIE UŻYWAM — wątek przemocy.
 * — ok. 1540 — dwupiętrowy budynek z wykuszem;
 *   1577–1580 — RENESANSOWA PRZEBUDOWA przez ród
 *   Blücherów: z obiektu obronnego na rezydencję.
 * — SALA RYCERSKA ze sklepieniem dwuprzęsłowym opartym
 *   NA JEDNEJ KOLUMNIE.
 * — dziś w zamku mieszczą się filia archiwum
 *   państwowego i biblioteka miejska.
 * — ⚠⚠⚠ RDZEŃ KĄTA: MIASTO NIGDY NIE ZBUDOWAŁO MURÓW
 *   MIEJSKICH — prawdopodobnie ze względu na położenie
 *   na ważnym szlaku handlowym. Obronność skupiono
 *   PUNKTOWO, w zamkach po obu stronach rzeki,
 *   a samo miasto zostało otwarte.
 *   ⚠ ŹRÓDŁO PISZE „prawdopodobnie" — POWTARZAM
 *   TO ZASTRZEŻENIE, nie podaję przyczyny jako pewnej.
 * — 1882 — połączenie kolejowe; do początku XX w. węzeł
 *   linii Szczecin–Kołobrzeg oraz Wysoka Kamieńska–Runowo.
 * — 1924 — uruchomienie automatycznej centrali
 *   telefonicznej.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   nie znaleziono produktu przypisanego do gminy Płoty.
 *   NIE SUGERUJĘ ISTNIENIA TAKIEGO PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: POD RĘKĄ CZY SCHOWANE — o tym, że dostępność
 * i porządek ciągną w przeciwne strony, i że trzeba
 * wybrać świadomie.
 * Kąt od Płotów: miasto leżało na ważnym szlaku handlowym
 * i prawdopodobnie właśnie dlatego nigdy nie zbudowało
 * murów. Obronność skupiono w dwóch zamkach, a samo miasto
 * zostawiono otwarte. Ktoś policzył, że dostępność jest
 * warta więcej niż mur.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Płoty dostały prawa miejskie w 1277 r. i że —
 *   prawdopodobnie ze względu na położenie na szlaku
 *   handlowym — nigdy nie zbudowały murów miejskich;
 *   obronność skupiono w zamkach po obu stronach rzeki,
 * — ŻE TO BYŁ ŚWIADOMY WYBÓR MIĘDZY DOSTĘPNOŚCIĄ
 *   A ZABEZPIECZENIEM — to jest rdzeń,
 * — ⚠⚠ ŻE W KUCHNI TEN SAM WYBÓR ROBI SIĘ CODZIENNIE,
 *   tylko nikt go tak nie nazywa: rzeczy stojące
 *   na wierzchu są pod ręką, ale robią wrażenie bałaganu;
 *   schowane wyglądają lepiej, ale kosztują ruch
 *   za każdym razem,
 * — ⚠⚠ ŻE NIE MA TU DOBREJ ODPOWIEDZI DLA WSZYSTKICH
 *   I ŻE KAŻDY, KTO JĄ SPRZEDAJE, COŚ SPRZEDAJE.
 *   Jest za to prosty sposób rozstrzygnięcia: rzecz
 *   używana codziennie należy do pierwszej kategorii,
 *   reszta do drugiej — i to jedyne kryterium, jakie
 *   działa,
 * — ⚠⚠ ŻE BŁĄD POLEGA PRAWIE ZAWSZE NA TYM SAMYM:
 *   na trzymaniu na wierzchu rzeczy, które ładnie
 *   wyglądają, zamiast tych, po które sięga się
 *   najczęściej. Blat zapełnia się wtedy ozdobami,
 *   a rzeczy codzienne lądują w szafce,
 *   ⚠⚠⚠ NIE WYMIENIAM ŻADNEGO KONKRETNEGO PRZEDMIOTU —
 *   to zależy od tego, co kto gotuje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: OTWARTE MA SWÓJ KOSZT.
 *   Rzecz na wierzchu kurzy się, zajmuje blat i sprawia,
 *   że kuchnia wygląda na zajętą nawet wtedy, gdy nikt
 *   w niej nie gotuje. Płoty też za brak murów czymś
 *   zapłaciły,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TO URZĄDZENIE JEST DOKŁADNIE
 *   W ŚRODKU TEGO WYBORU i mówię o tym przed zakupem.
 *   Jest za duże, żeby chować je bez wysiłku, więc
 *   praktycznie zawsze zostaje na wierzchu. Kto nie chce
 *   niczego na blacie, powinien o tym wiedzieć
 *   z góry — a kto zdecyduje się je zostawić, dostanie
 *   sprzęt, po który sięga się bez namysłu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO UKŁADU KUCHNI I TEGO, GDZIE CO STOI —
 *   kąt zajęty (Myślibórz). ⚠⚠ TO JEST NAJBLIŻSZY KĄT
 *   I RÓŻNICA MUSI BYĆ WIDOCZNA: tam chodzi o ROZMIESZCZENIE
 *   (blisko tego, gdzie się używa) i o przestawianie
 *   po jednej półce; TUTAJ wyłącznie o WYBÓR MIĘDZY
 *   WIERZCHEM A SCHOWANIEM. Ani jednego zdania
 *   o przestawianiu ani o tym, co gdzie postawić.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO RZECZY NIEUŻYWANYCH — kąt zajęty (Nowogard).
 * — ⚠⚠ ZERO DWÓCH TAKICH SAMYCH RZECZY — kąt zajęty
 *   (Sianów, ta sama fala).
 * — ⚠⚠ ZERO UŻYWANIA SPRZĘTU NIEZGODNIE Z PRZEZNACZENIEM
 *   — kąt zajęty (Karlino, ta sama fala).
 * — ⚠⚠ ZERO MAŁEJ KUCHNI I BRAKU MIEJSCA — kąt zajęty
 *   (Zawichost). Tu nie chodzi o metraż.
 * — ⚠⚠ ZERO PRZECHOWYWANIA ŻYWNOŚCI — kąt zajęty
 *   (Dobiegniew). Piszę wyłącznie o SPRZĘTACH
 *   I NACZYNIACH, nigdy o produktach.
 * — ⚠ ZERO KUCHNI NA WYMIAR I ZABUDOWY — kąt zajęty
 *   (Dobrodzień).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO KONKRETNEGO PRZEDMIOTU Z NAZWY.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠ ŻADNYCH PORAD O CZYSTOŚCI I BEZPIECZEŃSTWIE
 *   ŻYWNOŚCI — przy „kurzeniu się na blacie" to realne
 *   ryzyko. Wspominam kurz JEDNYM SŁOWEM jako koszt
 *   wygody i nie rozwijam.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ZDOBYCIA I SPALENIA ZAMKU W 1465 R. —
 *   wątek przemocy.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠⚠ ZERO SPADKU LICZBY LUDNOŚCI (−10,8 % w latach
 *   2002–2024) I ZERO MEDIANY WIEKU — obie liczby
 *   prowadzą do wątku starzenia się miasta.
 * — ⚠ ZERO ZAMKU JAKO WĄTKU OBRONNEGO — opisuję go
 *   jako budowlę z wymiarami i jako dzisiejszą siedzibę
 *   archiwum i biblioteki.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — ⚠⚠ NIE MIESZAM liczb miasta (3 691) i gminy (8 035) —
 *   przy tym mieście to potwierdzona pułapka.
 * — NIE PODAJĘ wymiarów całego założenia zamkowego —
 *   źródła podają dwie różne pary liczb.
 * — NIE TWIERDZĘ na pewno, dlaczego nie zbudowano murów —
 *   źródło pisze „prawdopodobnie".
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE WYMIENIAM ŻADNEGO PRZEDMIOTU Z NAZWY.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Płoty leżą nad Regą w powiecie gryfickim; są miastem
 *   w gminie miejsko-wiejskiej i liczą 3 691 mieszkańców
 *   (GUS, 31.12.2024) na 4,1 km², a cała gmina 8 035 osób
 *   na 239,2 km² w 34 miejscowościach,
 * — pierwsze założenie grodu, z XII w., miało plan
 *   zbliżony do kwadratu o boku 40 m, leżało w widłach
 *   Rekowicy i Regi i było otoczone szeroką, nawodnioną
 *   fosą,
 * — prawa miejskie nadał miastu w 1277 r. rycerz
 *   Dobiesław z Otoka,
 * — w 1284 r. Ludwik Wedel rozpoczął budowę kamiennego
 *   muru zamku, a w 1294 Jan Heydebreck przesunął go,
 *   powiększając teren; wieża mieszkalna ma 12,7 na 16,9 m
 *   i około 18 m wysokości — dolna partia, wysoka
 *   na sześć metrów, jest kamienna, wyższe ceglane,
 * — około 1540 r. dobudowano dwupiętrowy budynek
 *   z wykuszem, a w latach 1577–1580 ród Blücherów
 *   przebudował zamek w stylu renesansowym, zmieniając go
 *   z obiektu obronnego w rezydencję; sala rycerska ma
 *   sklepienie dwuprzęsłowe oparte na jednej kolumnie,
 *   a dziś mieszczą się w zamku filia archiwum
 *   państwowego i biblioteka miejska,
 * — miasto — prawdopodobnie z powodu położenia na ważnym
 *   szlaku handlowym — nigdy nie zbudowało murów miejskich;
 *   obronność skupiono w zamkach po obu stronach rzeki,
 * — połączenie kolejowe Płoty otrzymały w 1882 r.
 *   i do początku XX w. stały się węzłem linii
 *   Szczecin–Kołobrzeg oraz Wysoka Kamieńska–Runowo,
 *   a w 1924 uruchomiono tu automatyczną centralę
 *   telefoniczną.
 */
export const PLOTY: CityContent = {
  slug: "ploty",
  h1: "Thermomix Płoty – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Płoty — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Płotach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Płoty — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Płotach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Płotów z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Płoty"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dostępność i porządek ciągną w przeciwne strony. Warto wybrać świadomie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Płotach – jak wygląda prezentacja?",
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
      id: "pod-reka-czy-schowane",
      heading: "Miasto, które nie zbudowało murów",
      paragraphs: [
        "Płoty dostały prawa miejskie w 1277 roku od rycerza Dobiesława z Otoka. Stały na ważnym szlaku handlowym i prawdopodobnie właśnie dlatego nigdy nie zbudowały murów miejskich.",
        "Obronność skupiono punktowo — w zamkach po obu stronach rzeki. Samo miasto zostało otwarte.",
        "Podkreślam „prawdopodobnie”, bo tak piszą źródła i nie chcę udawać pewności, której nie ma. Ale kierunek decyzji jest czytelny: ktoś policzył, że dostępność jest tu warta więcej niż mur.",
        "Dokładnie ten wybór robi się w kuchni codziennie — tylko nikt go tak nie nazywa.",
        "Rzeczy stojące na wierzchu są pod ręką, ale robią wrażenie bałaganu. Rzeczy schowane wyglądają lepiej, ale kosztują ruch za każdym razem: otworzyć, wyjąć, po wszystkim schować. Te dwie wartości ciągną w przeciwne strony i nie da się mieć obu naraz.",
        "Nie ma tu dobrej odpowiedzi dla wszystkich, a każdy, kto taką sprzedaje, po prostu coś sprzedaje — zwykle pojemniki albo zabudowę.",
        "Jest natomiast kryterium, które działa i mieści się w jednym zdaniu: rzecz używana codziennie należy na wierzch, cała reszta do szafki. Nic więcej.",
        "Błąd polega prawie zawsze na tym samym. Na wierzchu trzymamy to, co ładnie wygląda, a nie to, po co sięgamy najczęściej. Blat zapełnia się wtedy rzeczami, które są tam dla widoku, a te używane codziennie wędrują do szafki — i każdego dnia płacimy za to kilkanaście dodatkowych ruchów, nie zauważając tego ani razu.",
        "Uczciwie o drugiej stronie, bo otwarte ma swój koszt i nie ma sensu go ukrywać. Rzecz stojąca na wierzchu kurzy się, zajmuje blat i sprawia, że kuchnia wygląda na zajętą nawet wtedy, gdy nikt w niej nie gotuje. Płoty za brak murów też czymś zapłaciły — wybór to wybór, nie darmowy zysk.",
        "I na koniec o urządzeniu, bo stoi dokładnie w środku tego wyboru. Jest za duże, żeby chować je bez wysiłku, więc w praktyce zawsze zostaje na wierzchu.",
        "Mówię to przed zakupem, nie po. Kto nie chce mieć niczego na blacie, powinien wiedzieć o tym z góry, bo to realny koszt i nie zniknie. A kto zdecyduje się je zostawić, dostanie sprzęt, po który sięga się bez namysłu — i to jest właśnie ta różnica, która decyduje, czy będzie używany.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Płotach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile miejsca na blacie realnie macie — to pytanie brzmi prozaicznie, a rozstrzyga więcej niż połowa rozmowy o funkcjach.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Płotach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Płotów",
      paragraphs: [
        "Płoty leżą nad Regą w powiecie gryfickim i są miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko trzy i siedem dziesiątych tysiąca mieszkańców na czterech i jednej dziesiątej kilometra kwadratowego, a cała gmina ponad osiem tysięcy osób na dwustu trzydziestu dziewięciu kilometrach kwadratowych, w trzydziestu czterech miejscowościach. Pierwsze założenie grodu, z dwunastego wieku, miało plan zbliżony do kwadratu o boku czterdziestu metrów, leżało w widłach Rekowicy i Regi i było otoczone szeroką, nawodnioną fosą. Prawa miejskie nadał miastu w 1277 roku rycerz Dobiesław z Otoka. W 1284 Ludwik Wedel rozpoczął budowę kamiennego muru zamku, a w 1294 Jan Heydebreck przesunął go, powiększając teren; tutejsza wieża mieszkalna ma dwanaście metrów siedemdziesiąt na szesnaście dziewięćdziesiąt i około osiemnastu metrów wysokości — dolna partia, wysoka na sześć metrów, jest kamienna, wyższe ceglane. Około 1540 roku dobudowano dwupiętrowy budynek z wykuszem, a w latach 1577–1580 ród Blücherów przebudował zamek w stylu renesansowym, zmieniając go z obiektu obronnego w rezydencję; sala rycerska ma sklepienie dwuprzęsłowe oparte na jednej kolumnie, a dziś mieszczą się w zamku filia archiwum państwowego i biblioteka miejska. Samo miasto — prawdopodobnie ze względu na położenie na ważnym szlaku handlowym — nigdy nie zbudowało murów miejskich. Połączenie kolejowe Płoty otrzymały w 1882 roku i do początku dwudziestego wieku stały się węzłem linii ze Szczecina do Kołobrzegu oraz z Wysokiej Kamieńskiej do Runowa, a w 1924 uruchomiono tu automatyczną centralę telefoniczną.",
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

  districtsHeading: "Do których części Płotów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Regi — i do wszystkich trzydziestu czterech miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Płoty też przyjadę",
  nearbyParagraphs: [
    "Gryfice i Resko są tuż obok, Kołobrzeg pięćdziesiąt kilometrów stąd, a Nowogard mieści się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gryfice", "Resko", "Kołobrzeg", "Nowogard"],

  about: blokOMnie("do Płotów", "w Płotach", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Płotów bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu czterech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Płoty nad Regą w powiecie gryfickim — jest też wieś o tej samej nazwie w lubuskiem.",
    },
    ...faqWspolne("w Płotach"),
    {
      question: "Co trzymać na wierzchu, a co chować do szafki?",
      answer:
        "Kryterium jest jedno i mieści się w zdaniu: rzecz używana codziennie należy na wierzch, cała reszta do szafki. Błąd polega prawie zawsze na tym samym — na wierzchu trzymamy to, co ładnie wygląda, a nie to, po co sięgamy najczęściej. Uczciwie: otwarte ma swój koszt, bo rzecz na blacie kurzy się i zajmuje miejsce. To wybór, nie darmowy zysk.",
    },
    {
      question: "Czy Thermomix trzeba trzymać na blacie?",
      answer:
        "W praktyce tak — jest za duży, żeby chować go bez wysiłku, więc zawsze zostaje na wierzchu. Mówię to przed zakupem, nie po: kto nie chce mieć niczego na blacie, powinien wiedzieć z góry, że to realny koszt i nie zniknie. Za to sprzęt, po który sięga się bez namysłu, jest sprzętem faktycznie używanym — i to zwykle ta różnica decyduje.",
    },
  ],

  geo: { lat: 53.8015, lng: 15.2673 },
};
