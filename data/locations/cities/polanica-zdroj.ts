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
 * POLANICA-ZDRÓJ — powiat kłodzki, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — NIE MA WSI. Nie piszę „i wsie
 *   w gminie".
 * MIASTO/GMINA: 5 884 mieszkańców (GUS 31.12.2024),
 *   17,2 km², gęstość ok. 341,7 os./km².
 *   ⚠⚠⚠ NIE PISZĘ „PRAWIE SIEDEM TYSIĘCY" ANI ŻADNEJ
 *   LICZBY Z MATERIAŁÓW TURYSTYCZNYCH — są przestarzałe
 *   o kilkanaście lat. WYŁĄCZNIE GUS 31.12.2024.
 *   ⚠ Gęstość podaję zaokrągloną słownie („ponad trzysta
 *   czterdzieści"), bo iloraz 5 884 / 17,2 = 342,1
 *   różni się od podawanej wartości o pół osoby.
 * ⚠ GEO: 50,4053 / 16,5122.
 *
 * ⚠⚠⚠ ODMIANA — ŁĄCZNIK OBOWIĄZKOWY, OBA CZŁONY
 *   ODMIENIANE: D. do Polanicy-Zdroju · Ms. w Polanicy-
 *   -Zdroju (TE SAME FORMY) · B. Polanicę-Zdrój.
 *   ⚠⚠⚠ BŁĘDY: „Polanica Zdrój" bez łącznika,
 *   „w Polanicy Zdrój" z nieodmienionym drugim członem.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *   ⚠ Przymiotnika od nazwy NIE TWORZĘ.
 *
 * ⚠⚠⚠ KOLIZJA POTWIERDZONA DOŚWIADCZALNIE:
 *   POŁCZYN-ZDRÓJ (zachodniopomorskie, powiat świdwiński)
 *   — JUŻ OPISANY. Nazwy różnią się dwiema literami.
 *   ⚠⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠⚠ TRÓJKA ZDROJÓW KŁODZKICH: Kudowa-Zdrój,
 *   Duszniki-Zdrój i Polanica-Zdrój — WSZYSTKIE TRZY
 *   MAJĄ JUŻ STRONY W TYM CYKLU. Nie powtarzam żadnej
 *   z tamtych figur.
 *
 * ⚠⚠⚠⚠ CAŁY WĄTEK UZDROWISKOWY JEST WYKLUCZONY.
 *   ZERO WÓD, ZERO PIJALNI, ZERO KURACJI, ZERO ZABIEGÓW,
 *   ZERO SANATORIÓW, ZERO WŁAŚCIWOŚCI CZEGOKOLWIEK.
 *   Nie piszę nawet, że miasto jest uzdrowiskiem.
 *   ⚠⚠⚠ TO JEST TWARDA GRANICA — twierdzenia zdrowotne.
 *   TO SAMO ZASTOSOWANO W DUSZNIKACH-ZDROJU.
 *   ⚠ Człon „-Zdrój" w nazwie własnej ZOSTAJE — to nazwa.
 *
 * ⚠⚠ DATY USTROJOWE — RÓŻNICA 598 LAT:
 *   — PIERWSZA WZMIANKA: 1347 r., kłodzkie księgi
 *     sądowe [ZW],
 *   — PRAWA MIEJSKIE: 1945 r. [ZW].
 *   ⚠⚠ PUŁAPKA „NADANIE KONTRA WZMIANKA" — rozróżniam
 *   jawnie. RÓŻNICY NIE ROBIĘ KĄTEM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWIE LICZBY O PARKU:
 *   — 73 GATUNKI drzew i krzewów w parku (27 rodzimych,
 *     19 północnoamerykańskich, 14 dalekowschodnich,
 *     13 europejskich) [ZW].
 *     ⚠ ARYTMETYKA SPRAWDZONA: 27+19+14+13 = 73.
 *   — 15 POMNIKÓW PRZYRODY — czyli konkretnych,
 *     pojedynczych egzemplarzy [ZW].
 *   ⚠⚠⚠ OCHRONA NIE DOTYCZY GATUNKU, TYLKO EGZEMPLARZA.
 *   Nie „buki są chronione", tylko „ten buk jest
 *   pomnikiem". To jest cały kąt.
 *   ⚠⚠ NIE TWIERDZĘ, że pomniki to wyłącznie drzewa
 *   z tych 73 gatunków — nie ustalono, czym są
 *   wszystkie piętnaście. PISZĘ OSTROŻNIE.
 *   ⚠ PARK: 12,97 ha, założony w 1906 r.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — FONTANNA W PARKU: 726 dysz, 16 reflektorów,
 *   strumień do 12 m wysokości [ZW].
 * — TEATR: projekt Otto Büttnera, otwarty 26 maja 1925 r.;
 *   modernizacja od kwietnia 2010 do listopada 2011
 *   (dwadzieścia miesięcy), ponowne otwarcie
 *   11 listopada 2011 r.
 *   ⚠⚠ „343 LATA RĘKĄ, 34 MASZYNĄ" — kąt zajęty
 *   (Duszniki-Zdrój). NIE ZESTAWIAM 1925 z 2011.
 *   ⚠⚠ „DOŁOŻONE PO LATACH UŻYWANIA" — kąt zajęty
 *   (Syców). PODAJĘ DATY BEZ MORAŁU.
 * — PAPIERNIA: uruchomiona w latach 1864–1866 [SP
 *   w datowaniu — PODAJĘ PRZEDZIAŁ]; w 1914 r. miała dwa
 *   czteroprasowe ścieraki i turbiny o mocy 50 KM.
 *   ⚠⚠⚠ POZOSTAŁYCH LICZB (lata 20. — jeden ścierak
 *   i do 3 t; 1950 — czterech ludzi i 150–200 kg)
 *   NIE PODAJĘ. To trzy różne typy wielkości (urządzenia,
 *   tonaż, zatrudnienie) i zestawienie ich jako ciągu
 *   byłoby nieuczciwe. PODAJĘ JEDEN PRZEKRÓJ: 1914.
 *   ⚠⚠ DUSZNIKI-ZDRÓJ MAJĄ KĄT PAPIERNICZY. ⚠⚠⚠ DLATEGO
 *   PAPIERNIĘ WYMIENIAM WYŁĄCZNIE W SEKCJI „RODZINA",
 *   JEDNYM ZDANIEM, I NIE DOTYKAM JEJ W SEKCJI KĄTA.
 * — KOLEJ: 1890 r.
 * — ODLEGŁOŚCI [ZW]: Kłodzko 13 km, Wrocław 102 km.
 *
 * KĄT: PIĘTNAŚCIE EGZEMPLARZY, NIE PIĘTNAŚCIE GATUNKÓW
 * — o tym, że zasada przypięta do kategorii ma wyjątki
 * i się sypie, a zasada przypięta do konkretnego
 * przedmiotu nie ma żadnych. Kąt od parku w Polanicy-
 * -Zdroju: rośnie w nim siedemdziesiąt trzy gatunki,
 * a pomników przyrody jest piętnaście — bo chroni się
 * egzemplarz, nie gatunek.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w parku rośnie 73 gatunki drzew i krzewów,
 *   a pomników przyrody jest 15,
 * — ŻE TE LICZBY NIE SĄ ZE SOBĄ SPRZECZNE, BO MÓWIĄ
 *   O DWÓCH RÓŻNYCH RZECZACH: gatunek to kategoria,
 *   pomnik to konkretny egzemplarz z konkretnym miejscem.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI UCZYMY DOMOWNIKÓW WYŁĄCZNIE ZASAD
 *   KATEGORIALNYCH: „patelni nie myje się w zmywarce",
 *   „noży nie wkłada się do zlewu", „szkła nie stawia się
 *   na gorącym",
 * — ⚠⚠ ŻE KAŻDA TAKA ZASADA MA WYJĄTKI, domownik szybko
 *   je znajduje — i wtedy przestaje ufać całej zasadzie,
 *   bo skoro ta patelnia może, to może każda,
 * — ⚠⚠ ŻE ZASADA PRZYPIĘTA DO PRZEDMIOTU NIE MA TEGO
 *   PROBLEMU: „TA patelnia nie idzie do zmywarki"
 *   jest sprawdzalne, niepodważalne i nie wymaga
 *   rozumienia dlaczego,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zamiast uczyć reguły o klasie
 *   przedmiotów, wskaż palcem te dwa albo trzy, których
 *   dotyczy. Zwykle jest ich mniej, niż się wydaje —
 *   tak jak piętnaście przy siedemdziesięciu trzech,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: zasady kategorialne mają
 *   jedną przewagę — przenoszą się na przedmioty, których
 *   jeszcze nie ma w domu. Przy nowym sprzęcie
 *   z kategorialną i tak trzeba zacząć,
 * — ⚠ UCZCIWIE O SPRZĘCIE: przy urządzeniu kuchennym
 *   właściwe pytanie brzmi nie „jak się dba o takie
 *   urządzenia", tylko „co z TYM konkretnym".
 *   MÓWIĘ WPROST, że na takie pytania odpowiadam
 *   z instrukcji producenta, a nie z pamięci,
 *   i że na spotkaniu można je zadać.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO UNIKATÓW I STAŁYCH ADRESÓW — kąt zajęty
 *   (Lwówek Śląski). ⚠⚠ TO NAJBLIŻSZY OBSZAR: tamten
 *   tekst mówi, że rzeczy jedyne w swoim rodzaju giną
 *   najszybciej i dlatego potrzebują stałego miejsca;
 *   ten mówi, ŻE ZASADĘ PRZYPINA SIĘ DO EGZEMPLARZA,
 *   A NIE DO KATEGORII. ROZGRANICZAM JAWNIE, JEDNYM
 *   ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt zajęty
 *   (Szklarska Poręba, ta sama fala).
 * — ⚠⚠⚠ ZERO OPISYWANIA WIELKOŚCIĄ, KTÓRA SIĘ ZMIENIA —
 *   kąt zajęty (Oborniki Śląskie).
 * — ⚠⚠ ZERO PUNKTÓW, KTÓRYCH NIE PRZESUNIESZ — kąt zajęty
 *   (Kudowa-Zdrój, SĄSIEDNIE MIASTO).
 * — ⚠⚠ ZERO 343 LATA RĘKĄ, 34 MASZYNĄ — kąt zajęty
 *   (Duszniki-Zdrój, SĄSIEDNIE MIASTO).
 * — ⚠⚠ ZERO LICZENIA SZWÓW ZAMIAST FUNKCJI — kąt zajęty
 *   (Pieszyce).
 * — ⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ⚠⚠⚠ ŻADNYCH KONKRETNYCH ZALECEŃ PIELĘGNACYJNYCH —
 *   nie piszę, co wolno, a czego nie wolno myć
 *   w zmywarce. Używam tych zdań WYŁĄCZNIE jako
 *   przykładów FORMY zasady, nie jako porad.
 *   Zaznaczam to w tekście wprost.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠⚠ ZERO WĄTKU UZDROWISKOWEGO W CAŁOŚCI.
 * — ⚠⚠ ZERO ROKU 1945 JAKO CEZURY HISTORYCZNEJ,
 *   PRZESIEDLEŃ, NIEMIECKIEJ NAZWY MIASTA. Rok 1945
 *   pojawia się WYŁĄCZNIE jako data nadania praw
 *   miejskich, bez kontekstu.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU.
 * — ⚠ ZERO DEMOGRAFII WSPÓŁCZESNEJ I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby mieszkańców z materiałów
 *   turystycznych.
 * — NIE TWIERDZĘ, czym są wszystkie piętnaście pomników
 *   przyrody.
 * — NIE ZESTAWIAM liczb papierni z różnych lat —
 *   to różne typy wielkości. Podaję jeden przekrój.
 * — NIE PODAJĘ jednej daty uruchomienia papierni —
 *   źródła podają przedział.
 * — NIE PISZĘ ANI SŁOWA o uzdrowisku, wodach i kuracjach.
 * — NIE DAJĘ zaleceń pielęgnacyjnych — przykłady zasad
 *   służą pokazaniu ich formy.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika
 *   od nazwy miasta.
 * — NIE PODAJĘ odległości innych niż Kłodzko i Wrocław.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Polanica-Zdrój jest gminą miejską w powiecie
 *   kłodzkim; liczy 5 884 mieszkańców (GUS, 31.12.2024)
 *   na 17,2 km², czyli ponad 340 osób na kilometr
 *   kwadratowy,
 * — pierwsza wzmianka pochodzi z 1347 r. z kłodzkich
 *   ksiąg sądowych, a prawa miejskie miasto otrzymało
 *   w 1945 r.,
 * — park założono w 1906 r.; ma 12,97 ha i rośnie w nim
 *   73 gatunki drzew i krzewów: 27 rodzimych,
 *   19 północnoamerykańskich, 14 dalekowschodnich
 *   i 13 europejskich; ustanowiono tu 15 pomników
 *   przyrody,
 * — parkowa fontanna ma 726 dysz i 16 reflektorów,
 *   a strumień sięga 12 m,
 * — teatr według projektu Otto Büttnera otwarto 26 maja
 *   1925 r.; modernizacja trwała od kwietnia 2010
 *   do listopada 2011 r., a ponowne otwarcie odbyło się
 *   11 listopada 2011 r.,
 * — papiernię uruchomiono w latach 1864–1866; w 1914 r.
 *   miała dwa czteroprasowe ścieraki i turbiny o mocy
 *   50 KM,
 * — kolej dotarła tu w 1890 r.,
 * — do Kłodzka jest stąd 13 km, do Wrocławia 102 km.
 */
export const POLANICA_ZDROJ: CityContent = {
  slug: "polanica-zdroj",
  h1: "Thermomix Polanica-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Polanica-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Polanicy-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Polanica-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Polanicy-Zdroju. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Polanicy-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Polanica-Zdrój"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Siedemdziesiąt trzy gatunki, piętnaście pomników. To nie sprzeczność.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Polanicy-Zdroju – jak wygląda prezentacja?",
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
      id: "egzemplarz-nie-gatunek",
      heading: "Piętnaście egzemplarzy, nie piętnaście gatunków",
      paragraphs: [
        "W parku w Polanicy-Zdroju rośnie siedemdziesiąt trzy gatunki drzew i krzewów: dwadzieścia siedem rodzimych, dziewiętnaście północnoamerykańskich, czternaście dalekowschodnich i trzynaście europejskich.",
        "Pomników przyrody jest w tym parku piętnaście.",
        "Te dwie liczby nie są ze sobą sprzeczne, bo mówią o dwóch zupełnie różnych rzeczach. Gatunek to kategoria. Pomnik przyrody to konkretny egzemplarz, rosnący w konkretnym miejscu, z własnym numerem. Chroni się to drzewo, nie gatunek, do którego należy.",
        "I tu jest coś, co przydaje się w kuchni bardziej, niż wygląda.",
        "Domowników uczymy wyłącznie zasad kategorialnych. „Patelni nie myje się w zmywarce.” „Noży nie wrzuca się do zlewu.” „Szkła nie stawia się na gorącym.” Piszę te przykłady jako przykłady formy, nie jako zalecenia — u każdego w domu prawda wygląda inaczej.",
        "Problem z taką zasadą jest zawsze ten sam. Ma wyjątki. Domownik je znajduje — zwykle w tygodniu — i od tej chwili nie ufa już całej zasadzie. Skoro ta patelnia może, to dlaczego tamta nie może. Reguła się sypie, a razem z nią dwa lata tłumaczenia.",
        "Zasada przypięta do przedmiotu nie ma tego problemu. „Ta patelnia nie idzie do zmywarki” jest sprawdzalne, niepodważalne i — co najważniejsze — nie wymaga od nikogo rozumienia dlaczego.",
        "Ruch jest jeden. Zamiast uczyć reguły o klasie przedmiotów, wskaż palcem te dwa albo trzy, których naprawdę dotyczy.",
        "Zwykle jest ich dużo mniej, niż się wydaje. Tak jak piętnaście przy siedemdziesięciu trzech.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, żeby rzeczy jedyne w swoim rodzaju miały stałe miejsce. Chodzi o coś innego — o to, do czego przypinasz zasadę. Do półki czy do przedmiotu.",
        "Uczciwie o drugiej stronie: zasady kategorialne mają jedną realną przewagę. Przenoszą się na przedmioty, których jeszcze nie ma w domu. Kiedy kupujecie coś nowego, i tak zaczynacie od reguły ogólnej, bo nic innego nie ma. Dopiero potem warto ją zwęzić do konkretów.",
        "I uczciwie o sprzęcie. Przy urządzeniu kuchennym właściwe pytanie brzmi nie „jak się dba o takie urządzenia”, tylko „co z tym konkretnym”. Na takie pytania odpowiadam z instrukcji producenta, a nie z pamięci — i na spotkaniu można je zadać, łącznie z tymi o części, które trafiają do zmywarki.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Polanicy-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli masz pytania o konkretne części urządzenia — co się myje jak i co wchodzi do zmywarki — powiedz przy umawianiu, żebym wzięła instrukcję i odpowiedziała z niej, a nie z głowy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Polanicy-Zdroju"),
    sekcjaRaty("w Polanicy-Zdroju"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Polanicy-Zdroju",
      paragraphs: [
        "Polanica-Zdrój jest gminą miejską w powiecie kłodzkim i liczy 5 884 mieszkańców (GUS, 31.12.2024) na siedemnastu i dwóch dziesiątych kilometra kwadratowego — czyli ponad trzysta czterdzieści osób na kilometr. Podaję akurat tę liczbę, bo w materiałach turystycznych krąży inna, starsza o kilkanaście lat i wyższa o tysiąc z górą. Pierwsza wzmianka pochodzi z 1347 roku, z kłodzkich ksiąg sądowych, a prawa miejskie miasto otrzymało dopiero w 1945 — sześćset lat później, co w tej okolicy nie jest wyjątkiem. Park założono w 1906 roku; ma niecałe trzynaście hektarów, rośnie w nim siedemdziesiąt trzy gatunki drzew i krzewów — dwadzieścia siedem rodzimych, dziewiętnaście północnoamerykańskich, czternaście dalekowschodnich i trzynaście europejskich — a ustanowiono tu piętnaście pomników przyrody. Parkowa fontanna ma siedemset dwadzieścia sześć dysz i szesnaście reflektorów, a strumień sięga dwunastu metrów. Teatr według projektu Otto Büttnera otwarto 26 maja 1925 roku; jego modernizacja trwała od kwietnia 2010 do listopada 2011, a ponowne otwarcie odbyło się 11 listopada 2011 roku. Miejscową papiernię uruchomiono gdzieś w latach 1864–1866 — źródła podają dwie daty, więc podaję przedział — a w 1914 roku miała dwa czteroprasowe ścieraki i turbiny o mocy pięćdziesięciu koni mechanicznych. Kolej dotarła tu w 1890 roku. Do Kłodzka jest stąd trzynaście kilometrów, do Wrocławia sto dwa.",
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

  districtsHeading: "Do których części Polanicy-Zdroju dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — Polanica-Zdrój jest gminą miejską bez wsi, więc sprawa jest prosta: gdziekolwiek mieszkasz w granicach miasta, dojazd jest bezpłatny.",
    "Przy umawianiu wystarczy adres. Jeśli dojazd pod dom bywa wąski albo trudny do zaparkowania, powiedz o tym od razu.",
  ],
  districts: [],

  nearbyHeading: "Poza Polanicę-Zdrój też przyjadę",
  nearbyParagraphs: [
    "Do Kłodzka jest stąd trzynaście kilometrów, do Wrocławia sto dwa. Dojeżdżam też do Dusznik-Zdroju, Kudowy-Zdroju, Bystrzycy Kłodzkiej i Nowej Rudy — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Kłodzko", "Duszniki-Zdrój", "Kudowa-Zdrój", "Bystrzyca Kłodzka", "Nowa Ruda"],

  about: blokOMnie("do Polanicy-Zdroju", "w Polanicy-Zdroju i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Polanicy-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi, bo obie bywają mylące. Po pierwsze nazwa: pisze się z łącznikiem i odmienia oba człony — „do Polanicy-Zdroju”, „w Polanicy-Zdroju”, nie „w Polanicy Zdrój”. Po drugie: Połczyn-Zdrój to zupełnie inne miasto, w województwie zachodniopomorskim, ponad pięćset kilometrów stąd. Nazwy różnią się dwiema literami i mylą się naprawdę często.",
    },
    ...faqWspolne("w Polanicy-Zdroju"),
    {
      question: "Tłumaczę domownikom, czego nie wkładać do zmywarki, i nic z tego nie wynika. Dlaczego?",
      answer:
        "Bo prawdopodobnie uczysz zasady o kategorii, a nie o przedmiocie. W parku w Polanicy-Zdroju rośnie siedemdziesiąt trzy gatunki drzew i krzewów, a pomników przyrody jest piętnaście — bo chroni się konkretny egzemplarz, nie gatunek. Zasada kategorialna zawsze ma wyjątek, domownik go znajduje i przestaje ufać całej regule. „Ta patelnia nie idzie do zmywarki” działa lepiej niż „patelni się nie myje w zmywarce”, bo nie ma wyjątków i nie wymaga rozumienia dlaczego. Zwykle takich przedmiotów jest dwa albo trzy, nie dwadzieścia.",
    },
    {
      question: "Jak dba się o Thermomix na co dzień?",
      answer:
        "Na takie pytania odpowiadam z instrukcji producenta, a nie z pamięci — i uważam, że to jedyny uczciwy sposób, bo szczegóły różnią się między częściami i między modelami. Na prezentacji mam instrukcję ze sobą i możemy przejść konkretne pytania: ta część, tamta część, to i tamto mycie. Wolę powiedzieć „sprawdzę” niż zgadywać, zwłaszcza przy sprzęcie, który ma służyć kilkanaście lat.",
    },
  ],

  geo: { lat: 50.4053, lng: 16.5122 },
};
