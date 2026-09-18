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
 * NIEMCZA — powiat dzierżoniowski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 673 mieszkańców (GUS 31.12.2024), 19,8 km²,
 *   gęstość 134,9 os./km² [ZW — domyka się: 2 673 / 19,8
 *   = 135,0]. PODAJĘ.
 * CAŁA GMINA: 5 011 osób, 71,9 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 5 011 / 71,9 = 69,7,
 *   a serwis podaje 71. NIE DOMYKA SIĘ.
 *   ⚠ DZIESIĘĆ WSI. ⚠⚠⚠ NIE WYMIENIAM ICH WSZYSTKICH
 *   Z NAZWY — jedna z nich ma człon „-Zdrój" i wątek
 *   uzdrowiskowy jest wykluczony w całym cyklu.
 *   PODAJĘ LICZBĘ I KILKA NAZW BEZPIECZNYCH.
 *   ⚠ Miasto zajmuje 27,5 % powierzchni gminy — najwięcej
 *   z tej fali. PODAJĘ JAKO FAKT, ⚠⚠ BEZ KĄTA.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ WYSOKOŚĆ: 224 m n.p.m.
 * ⚠ GEO: 50,7197 / 16,8357.
 *
 * ⚠⚠⚠ ODMIANA — TRZY PRZYPADKI IDENTYCZNE:
 *   D. = C. = Ms. „NIEMCZY" („z Niemczy", „ku Niemczy",
 *   „w Niemczy") — rozróżnia je wyłącznie przyimek.
 *   B. NIEMCZĘ (⚠⚠ nie „Niemczą" — bardzo częsty błąd).
 *   N. Niemczą.
 *   ⚠⚠⚠ PRZYMIOTNIK: NIEMCZAŃSKI. NIGDY „NIEMIECKI".
 *   Korekta automatyczna potrafi to „poprawić" —
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠⚠ KOLIZJA KRYTYCZNA: „NIEMCZA" vs „NIEMCY".
 *   Wyszukiwarki interpretują jedno jako drugie.
 *   ⚠⚠⚠ OBSŁUGUJĘ TO WYŁĄCZNIE JAKO PROBLEM
 *   WYSZUKIWANIA — w tytule i lidzie dopowiadam
 *   „powiat dzierżoniowski". ⚠⚠⚠⚠ NIE TŁUMACZĘ,
 *   SKĄD NAZWA. WĄTEK ETYMOLOGICZNY I NARODOWOŚCIOWY
 *   JEST WYKLUCZONY W CAŁOŚCI.
 *   ⚠ Pozostałe kolizje: NIEMCE (lubelskie, duża wieś
 *   gminna), NIEMCZ (kujawsko-pomorskie), ⚠ NOWA WIEŚ
 *   NIEMCZAŃSKA — wieś w tej samej gminie.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 990 r., w kronice czeskiej
 *     [ZW]. ⚠⚠⚠ TREŚCI ZAPISU NIE CYTUJĘ — dotyczy
 *     zdarzenia zbrojnego. Podaję WYŁĄCZNIE ROK
 *     i fakt, że to jedna z najstarszych poświadczonych
 *     miejscowości w Polsce.
 *   — PRAWA MIEJSKIE: 1282 r., HENRYK IV PROBUS [ZW].
 *   ⚠⚠ RÓŻNICY 292 LAT NIE ROBIĘ KĄTEM — figura zajęta
 *   (Szklarska Poręba).
 *   ⚠⚠⚠⚠ OBRONA GRODU W 1017 R. I OBLĘŻENIE Z 1093 —
 *   WYKLUCZONE CAŁKOWICIE. ANI SŁOWA.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ŁAŃCUCH SAMORZĄDOWY Z MALEJĄCYMI
 *   ODSTĘPAMI:
 *   — 1282 — prawa miejskie,
 *   — 1369 — rada miejska (87 LAT PÓŹNIEJ),
 *   — 1424 — burmistrz rezyduje w mieście (55 LAT),
 *   — 1474 — wzniesiono ratusz (50 LAT).
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1369−1282 = 87;
 *   1424−1369 = 55; 1474−1424 = 50.
 *   ⚠⚠⚠ KAŻDY KOLEJNY KROK ZAJĄŁ MNIEJ CZASU NIŻ
 *   POPRZEDNI, CHOĆ KAŻDY DOTYCZY RZECZY BARDZIEJ
 *   MATERIALNEJ. To jest cały kąt.
 *   ⚠⚠ DATY 1383 (prawo wyższego sądu) NIE PODAJĘ —
 *   wątek sądowniczy wykluczony, a bez niej łańcuch
 *   jest czystszy.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE TO PRAWIDŁOWOŚĆ HISTORYCZNA —
 *   twierdzę WYŁĄCZNIE, że w tym jednym łańcuchu
 *   odstępy maleją.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — MURY MIEJSKIE: grubość od 0,6 do 1 m; zachowane
 *   odcinki sięgają dziś niecałych 3 m wysokości;
 *   w XVI w. dołożono zewnętrzny pas muru;
 *   najprawdopodobniej na całej długości NIE BYŁO BASZT.
 *   ⚠⚠ „CIENKIE, ALE PIERWSZE" — kąt ZAJĘTY (Kąty
 *   Wrocławskie). ⚠⚠ „ROZRZUT W OBRĘBIE JEDNEGO
 *   OBIEKTU" ociera się o „średnią kontra maksimum"
 *   (Węgorzyno). PODAJĘ JAKO FAKTY, BEZ MORAŁU.
 * — FORTYFIKACJE 1295 r.: „dwie bramy i cztery furty".
 *   Bramy: Górna (od południa) i Dolna (od północy),
 *   rozebrane w 1849 i 1862 r.
 *   ⚠⚠ „UDOKUMENTOWANO TYLKO TO, CO DUŻE" — ociera się
 *   o „używane od dawna, zapisane późno" (Zawidów).
 *   PODAJĘ LICZBY JAKO FAKT.
 * — RATUSZ: obecny budowany 1853–1862 według projektu
 *   Friedricha Stülera. Pierwszy stał pośrodku rynku,
 *   obecny nie. Rynek ma kształt wydłużonego prostokąta.
 *   Fontannę ustawiono w 1973 r.
 *   ⚠⚠ POŻARÓW Z 1853 I 1859 R. NIE WYMIENIAM W OGÓLE —
 *   nie są potrzebne, a wątek żywiołu jest wykluczony.
 * — ⚠⚠ ZAMKU I KAPLIC NIE OPISUJĘ — druga kaplica
 *   to wątek wyznaniowy, a zniszczenie z 1430 r.
 *   prowadzi w wątek zbrojny.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: KAŻDY KOLEJNY KROK IDZIE SZYBCIEJ
 * — o tym, że pierwszy krok jest najwolniejszy i nie jest
 * prognozą dla następnych. Kąt od niemczańskiego łańcucha
 * samorządowego: od praw miejskich do rady 87 lat,
 * od rady do rezydującego burmistrza 55, od burmistrza
 * do ratusza 50.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Niemcza dostała prawa miejskie w 1282 r., radę
 *   miejską w 1369, rezydującego burmistrza w 1424,
 *   a ratusz w 1474,
 * — ŻE ODSTĘPY MALEJĄ: 87, 55, 50 LAT — MIMO ŻE KAŻDY
 *   KOLEJNY KROK DOTYCZY RZECZY BARDZIEJ NAMACALNEJ.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE PIERWSZY KROK ZAJĄŁ NAJWIĘCEJ, BO MUSIAŁ
 *   DOPIERO STWORZYĆ WARUNKI DLA WSZYSTKICH NASTĘPNYCH,
 * — ⚠⚠ ŻE W KUCHNI PIERWSZY RAZ ZAWSZE TRWA
 *   NIEPROPORCJONALNIE DŁUGO: nowe danie, nowy układ
 *   szafek, nowy sposób robienia zakupów. I że to
 *   właśnie wtedy przychodzi myśl „to się nie opłaca",
 * — ⚠⚠ ŻE TA MYŚL JEST OPARTA NA NAJGORSZYM MOŻLIWYM
 *   POMIARZE — na jedynym podejściu, w którym trzeba
 *   było jeszcze wszystko wymyślić,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: oceniaj zmianę po trzecim
 *   powtórzeniu, nie po pierwszym. I nie przedłużaj
 *   kosztu pierwszego razu na resztę,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie wszystko przyspiesza.
 *   Zakupy i zmywanie trwają tyle samo za każdym razem,
 *   bo nie ma się tam czego nauczyć. Przyspiesza to,
 *   w czym jest element wprawy — reszta to po prostu
 *   praca,
 * — ⚠ UCZCIWIE O SPRZĘCIE: pierwsze tygodnie z każdym
 *   nowym urządzeniem są WOLNIEJSZE niż gotowanie
 *   bez niego. MÓWIĘ TO WPROST, bo to jest dokładnie
 *   ten osiemdziesięciosiedmioletni krok — i lepiej
 *   wiedzieć o nim przed zakupem niż uznać po tygodniu,
 *   że to była pomyłka.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TRZECI RAZ TO JUŻ WŁAŚCIWOŚĆ — kąt zajęty
 *   (Mirsk, TA SAMA FALA). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tamten tekst mówi,
 *   ŻEBY PO TRZECIEJ PORAŻCE ZMIENIĆ UKŁAD; ten mówi,
 *   ŻEBY PO PIERWSZEJ PRÓBIE NIE WYDAWAĆ WYROKU.
 *   Są komplementarne i tak to opisuję.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice). Tam chodzi o TERMIN SPRAWDZENIA,
 *   tu o TO, ŻE PIERWSZY POMIAR JEST NIEREPREZENTATYWNY.
 * — ⚠⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna).
 * — ⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk).
 * — ⚠⚠ ZERO CIENKIE, ALE PIERWSZE — kąt zajęty (Kąty
 *   Wrocławskie). Dlatego grubość murów zostaje faktem.
 * — ⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów). Dlatego bramy i furty zostają
 *   faktem.
 * — ⚠⚠ ZERO X LAT BEZ STATUSU MIEJSKIEGO — kąt zajęty
 *   (Szklarska Poręba).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNYCH LICZB MINUTOWYCH PRZY CZYNNOŚCIACH
 *   KUCHENNYCH.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠⚠ ZERO OBRONY GRODU Z 1017 R. I OBLĘŻENIA
 *   Z 1093. ZERO CYTATU Z KRONIKI.
 * — ⚠⚠⚠⚠ ZERO ETYMOLOGII NAZWY I WĄTKU
 *   NARODOWOŚCIOWEGO.
 * — ⚠⚠⚠ ZERO WĄTKU UZDROWISKOWEGO (wieś z członem
 *   „-Zdrój" w tej gminie).
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU (1853, 1859).
 * — ⚠⚠ ZERO SĄDOWNICTWA (1383).
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠ ZERO DEMOGRAFII WSPÓŁCZESNEJ I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE CYTUJĘ treści zapisu z 990 r.
 * — NIE TŁUMACZĘ pochodzenia nazwy.
 * — NIE TWIERDZĘ, że malejące odstępy to prawidłowość
 *   historyczna — opisuję jeden łańcuch.
 * — NIE WYMIENIAM wszystkich wsi gminy z nazwy.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika
 *   „niemiecki" w odniesieniu do tego miasta.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Niemcza leży w powiecie dzierżoniowskim, na wysokości
 *   224 m n.p.m.; miasto liczy 2 673 mieszkańców (GUS,
 *   31.12.2024) na 19,8 km², czyli 134,9 osoby
 *   na kilometr kwadratowy, a cała gmina miejsko-wiejska
 *   5 011 osób na 71,9 km², z dziesięcioma wsiami;
 *   samo miasto zajmuje 27,5 % powierzchni gminy,
 * — pierwsza wzmianka pochodzi z 990 r. i czyni Niemczę
 *   jedną z najstarszych poświadczonych miejscowości
 *   w Polsce; prawa miejskie nadał w 1282 r. Henryk IV
 *   Probus,
 * — radę miejską odnotowano w 1369 r., rezydującego
 *   w mieście burmistrza w 1424, a ratusz wzniesiono
 *   w 1474,
 * — opis fortyfikacji z 1295 r. wymienia dwie bramy
 *   i cztery furty; bramę Dolną rozebrano w 1849 r.,
 *   Górną w 1862,
 * — mury miejskie miały grubość od 0,6 do 1 m,
 *   najprawdopodobniej nie było w nich baszt, a zachowane
 *   odcinki sięgają dziś niecałych 3 m; w XVI w. dołożono
 *   zewnętrzny pas muru,
 * — obecny ratusz budowano w latach 1853–1862 według
 *   projektu Friedricha Stülera; pierwszy stał pośrodku
 *   rynku, obecny nie, a fontannę ustawiono w 1973 r.
 */
export const NIEMCZA: CityContent = {
  slug: "niemcza",
  h1: "Thermomix Niemcza – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Niemcza — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Niemczy (powiat dzierżoniowski): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Niemcza — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Niemczy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Niemczy w powiecie dzierżoniowskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Niemcza"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Osiemdziesiąt siedem lat, pięćdziesiąt pięć, pięćdziesiąt.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Niemczy – jak wygląda prezentacja?",
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
      id: "kazdy-krok-szybciej",
      heading: "Każdy kolejny krok idzie szybciej",
      paragraphs: [
        "Niemcza dostała prawa miejskie w 1282 roku. Rada miejska pojawiła się w 1369 — osiemdziesiąt siedem lat później.",
        "Burmistrz zaczął rezydować w mieście w 1424. Pięćdziesiąt pięć lat od rady.",
        "Ratusz wzniesiono w 1474. Pięćdziesiąt lat od burmistrza.",
        "Osiemdziesiąt siedem, pięćdziesiąt pięć, pięćdziesiąt. Odstępy maleją — i to mimo że każdy kolejny krok dotyczy rzeczy bardziej namacalnej. Najdłużej trwało to, co najmniej widoczne.",
        "Powód jest prosty: pierwszy krok musiał dopiero stworzyć warunki dla wszystkich następnych. Nie miał na czym stanąć.",
        "W kuchni działa to identycznie i każdy to zna.",
        "Pierwszy raz zawsze trwa nieproporcjonalnie długo. Nowe danie, przy którym co chwilę zaglądasz do przepisu. Przestawione szafki, w których przez tydzień niczego nie możesz znaleźć. Nowy sposób robienia zakupów, który pierwszym razem zabiera cały wieczór.",
        "I to właśnie wtedy, w tym najgorszym momencie, przychodzi myśl: „to się nie opłaca”.",
        "Tyle że ta myśl opiera się na najgorszym możliwym pomiarze — na jedynym podejściu, w którym trzeba było jeszcze wszystko wymyślić.",
        "Ruch jest jeden: oceniaj zmianę po trzecim powtórzeniu, nie po pierwszym. I nie przedłużaj kosztu pierwszego razu na całą resztę, bo to jest dokładnie ta prognoza, która się nie sprawdza.",
        "Dopowiem, bo to leży blisko i jest dopełnieniem: gdzie indziej pisałam, że po trzeciej porażce trzeba zmienić układ, a nie próbować mocniej. To nie jest sprzeczność. Po pierwszej próbie nie wydaje się wyroku, po trzeciej — już trzeba działać. Jedno mówi, kiedy nie oceniać; drugie, kiedy przestać czekać.",
        "Uczciwie o drugiej stronie: nie wszystko przyspiesza. Zakupy trwają tyle samo za każdym razem. Zmywanie też. Przyspiesza to, w czym jest element wprawy — reszta jest po prostu pracą i żadne powtarzanie jej nie skróci.",
        "I uczciwie o sprzęcie, bo to jest ten sam mechanizm. Pierwsze tygodnie z każdym nowym urządzeniem są wolniejsze niż gotowanie bez niego: trzeba się nauczyć kolejności, ekranu, tego, co gdzie stoi. To jest ten osiemdziesięciosiedmioletni krok. Mówię o tym przed zakupem, bo najgorsze, co może się zdarzyć, to uznanie po tygodniu, że to była pomyłka — akurat wtedy, kiedy wszystko jeszcze idzie najwolniej.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Niemczy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy próbowaliście już kiedyś czegoś zmienić w kuchni i odpuściliście po pierwszym razie. To częstsze, niż się wydaje, i warto o tym pogadać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Niemczy"),
    sekcjaRaty("w Niemczy"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Niemczy",
      paragraphs: [
        "Niemcza leży w powiecie dzierżoniowskim, na dwustu dwudziestu czterech metrach nad poziomem morza. Samo miasto liczy 2 673 mieszkańców (GUS, 31.12.2024) na nieco poniżej dwudziestu kilometrów kwadratowych, czyli sto trzydzieści pięć osób na kilometr, a cała gmina miejsko-wiejska 5 011 osób na siedemdziesięciu dwóch, z dziesięcioma wsiami — wśród nich Gilowem, Wilkowem Wielkim, Kietlinem i Podlesiem. Ciekawostka administracyjna: samo miasto zajmuje ponad dwadzieścia siedem procent powierzchni całej gminy, czyli znacznie więcej niż zwykle bywa. Pierwsza wzmianka pochodzi z 990 roku i czyni Niemczę jedną z najstarszych poświadczonych miejscowości w Polsce; prawa miejskie nadał w 1282 roku Henryk IV Probus. Radę miejską odnotowano w 1369, rezydującego w mieście burmistrza w 1424, a ratusz wzniesiono w 1474. Opis fortyfikacji z 1295 roku wymienia dwie bramy i cztery furty — czyli sześć przejść; bramę Dolną rozebrano w 1849 roku, Górną w 1862. Mury miejskie miały grubość od sześćdziesięciu centymetrów do metra, najprawdopodobniej nie było w nich ani jednej baszty, a zachowane odcinki sięgają dziś niecałych trzech metrów; w szesnastym wieku dołożono zewnętrzny pas muru. Obecny ratusz budowano w latach 1853–1862 według projektu Friedricha Stülera — pierwszy stał pośrodku rynku, ten nie stoi. Fontannę na rynku ustawiono dopiero w 1973 roku.",
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

  districtsHeading: "Do których części Niemczy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziesięciu wsi w gminie, między innymi do Gilowa, Wilkowa Wielkiego, Kietlina, Podlesia i Ruszkowic. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać nazwę miejscowości — w gminie jest też Nowa Wieś Niemczańska, którą przez telefon łatwo pomylić z samą Niemczą.",
  ],
  districts: [],

  nearbyHeading: "Poza Niemczę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Dzierżoniowa, Ząbkowic Śląskich, Piławy Górnej, Strzelina i Wrocławia — wszędzie bezpłatnie, tak samo jak w samej Niemczy.",
  ],
  nearbyTowns: ["Dzierżoniów", "Ząbkowice Śląskie", "Piława Górna", "Strzelin", "Wrocław"],

  about: blokOMnie("do Niemczy", "w Niemczy i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Niemczy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziesięciu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Doprecyzuję, bo ta nazwa myli wyszukiwarki jak żadna inna: chodzi o Niemczę w powiecie dzierżoniowskim, na Dolnym Śląsku. Przymiotnik od niej brzmi „niemczański”. Niemce to duża wieś gminna w lubelskiem, a Niemcz — wieś w kujawsko-pomorskiem. W samej gminie jest jeszcze Nowa Wieś Niemczańska, więc przy umawianiu warto podać pełną nazwę.",
    },
    ...faqWspolne("w Niemczy"),
    {
      question: "Próbowałam zmienić coś w kuchni, pierwszy raz zajął mi cały wieczór i odpuściłam. Co robić?",
      answer:
        "Nie oceniać po pierwszym razie. Niemcza dostała prawa miejskie w 1282 roku, radę miejską w 1369, rezydującego burmistrza w 1424, a ratusz w 1474 — odstępy wyniosły osiemdziesiąt siedem, pięćdziesiąt pięć i pięćdziesiąt lat. Najdłużej trwał pierwszy krok, bo nie miał na czym stanąć. W kuchni jest tak samo: pierwsze podejście do nowego dania czy nowego układu jest najwolniejsze i właśnie wtedy przychodzi myśl, że to się nie opłaca. Ta myśl opiera się na najgorszym możliwym pomiarze. Oceniaj po trzecim powtórzeniu.",
    },
    {
      question: "Czy z Thermomixem od razu będzie szybciej?",
      answer:
        "Nie i mówię to wprost przed zakupem. Pierwsze tygodnie z każdym nowym urządzeniem są wolniejsze niż gotowanie bez niego — trzeba się nauczyć kolejności, ekranu i tego, co gdzie stoi. To normalny koszt pierwszego kroku, nie oznaka, że sprzęt jest zły ani że coś robicie źle. Najgorsze, co może się zdarzyć, to uznać po tygodniu, że to pomyłka — akurat wtedy, gdy wszystko jeszcze idzie najwolniej. Dlatego na prezentacji pokazuję też, co bywa trudne na początku, a nie tylko to, co robi wrażenie.",
    },
  ],

  geo: { lat: 50.7197, lng: 16.8357 },
};
