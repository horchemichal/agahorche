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
 * TRZEMESZNO — powiat gnieźnieński, woj. wielkopolskie.
 * ⚠ WITKOWO (ten sam powiat) JEST OPISANE W TYM CYKLU.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ TRZEMESZNO NIE MA —
 *   w powiecie gnieźnieńskim dublet dotyczy GNIEZNA.
 *   SPRAWDZONE PRZEZ ZLICZENIE UNIKALNYCH GMIN.
 * MIASTO: 7 247 mieszkańców (GUS 31.12.2024), 5,5 km²,
 *   gęstość 1 327,3 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia do 5,46 km², wartość
 *   potwierdzona niezależnie]. PODAJĘ.
 * CAŁA GMINA: 13 666 osób, 175,2 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — PRZYPADEK
 *   PODRĘCZNIKOWY: 13 666 ÷ 175,2 = 78,00 dokładnie,
 *   a źródło podaje 79. Różnica to równo jeden.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI W GMINIE: 48.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,5617 / 17,8226.
 * WODA: JEZIORO POPIELEWSKIE (miasto na jego wschodnim
 *   brzegu), w dorzeczu Noteci. ⚠ RZEKI NIE USTALONO.
 *
 * ⚠⚠⚠ BAZYLIKA POMINIĘTA CAŁKOWICIE — wątek wyznaniowy
 *   wykluczony, choć jest to główny zabytek miasta.
 *   ANI SŁOWA, ANI ALUZJI.
 *
 * ⚠⚠ ODMIANA — RODZAJ NIJAKI:
 *   D. do TRZEMESZNA · Ms. w TRZEMESZNIE ·
 *   N. Trzemesznem.
 *   ⚠⚠⚠ BŁĘDY: „do Trzemeszno" (nieodmienianie),
 *   „w Trzemesznej", „do Trzemeszny".
 *   ⚠⚠⚠ PRZYMIOTNIK: TRZEMESZEŃSKI — nigdy
 *   „trzemesznowski". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJA NAZW — POTWIERDZONA:
 *   WIEŚ TRZEMESZNO (221 mieszkańców) leży w gminie
 *   Rozdrażew, POWIAT KROTOSZYŃSKI — TYM SAMYM, w którym
 *   leży KOŹMIN WIELKOPOLSKI, opisany W TEJ SAMEJ FALI.
 *   ⚠⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ TRZEMESZNO LUBUSKIE [NP].
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — GRÓD OBRONNY: X–XI w. ⚠⚠ FUNKCJI OBRONNEJ
 *     NIE ROZWIJAM.
 *   — PIERWSZA WZMIANKA: 1145 r.
 *   — PRAWA MIEJSKIE: „przed 1368 r." ⚠⚠⚠ [SP — inne
 *     źródła podają „przed 1382" albo „około 1382"].
 *     PISZĘ „przed 1368 rokiem, choć część źródeł podaje
 *     około 1382". NADAWCY NIE USTALONO.
 *   — Utraty praw nie ustalono.
 *   ⚠⚠ WYDARZEŃ 1794 I 1848 R. NIE OPISUJĘ — wątek
 *     militarny i powstańczy.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ZGADZAMY SIĘ CO DO TEGO, CZEGO
 *   NIE WIDAĆ:
 *   JEZIORO POPIELEWSKIE:
 *     — GŁĘBOKOŚĆ MAKSYMALNA 45,8 m — NAJGŁĘBSZE
 *       JEZIORO W WIELKOPOLSCE, dziesiąte pod względem
 *       głębokości w Polsce. ⚠⚠⚠ TA LICZBA JEST ZGODNA
 *       W TRZECH NIEZALEŻNYCH ŹRÓDŁACH,
 *     — POWIERZCHNIA: 279 ha albo 292,5 ha albo
 *       „od 292,5 do 308,5 ha" — TRZY RÓŻNE WARTOŚCI,
 *       rozrzut 29,5 ha,
 *     — GŁĘBOKOŚĆ ŚREDNIA: 11,6 albo 12,4 m,
 *     — ZWIERCIADŁO WODY: 94,9 albo 96,0 m n.p.m.
 *   ⚠⚠⚠ PARAMETR NIEWIDOCZNY (największa głębokość)
 *   JEST USTALONY. PARAMETRY WIDOCZNE Z BRZEGU
 *   (powierzchnia, poziom wody) — SPORNE.
 *   To jest cały kąt.
 *   ⚠⚠ POWIERZCHNI NIE PODAJĘ JAKO LICZBY — wymieniam
 *   trzy warianty jako fakt o rozbieżności.
 *   ⚠⚠ ŚREDNIEJ GŁĘBOKOŚCI NIE UŻYWAM JAKO LICZBY —
 *   figura średniej zajęta (Oborniki).
 *   ⚠ Jezioro rynnowe, połączone strugami z czterema
 *     innymi zbiornikami: Ostrowickim, Szydłowskim,
 *     Malicz i Folusz.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — Jan Kiliński urodził się w Trzemesznie w 1760 r.,
 *   przy ulicy wówczas Psiej, dziś gen. Henryka
 *   Dąbrowskiego; zmarł 28 stycznia 1819 r. w Warszawie.
 *   ⚠ Urząd podaje, że dokładna data urodzenia jest
 *   nieznana — zachował się tylko zapis chrztu.
 *   PODAJĘ TO JAKO FAKT.
 *   ⚠⚠⚠ DWUZNACZNOŚCI ZAPISU „28 10-bris" NIE ROBIĘ
 *   KĄTEM — figury „skrót zjada różnicę" (Kostrzyn)
 *   i „spór o liczbę" (Szamotuły) zajęte.
 *   ⚠⚠ ZAWODU KILIŃSKIEGO NIE ROZWIJAM — spis rzemiosł
 *   jest kątem Jastrowia (poprzednia fala).
 *   ⚠⚠ DATY 1794 R. NIE PODAJĘ.
 * — ⚠⚠ „MIASTA SIEDMIU PLACÓW" NIE UŻYWAM JAKO KĄTA —
 *   figura „obietnica w nazwie" zajęta (Międzychód).
 *   ⚠ Dwa z siedmiu obiektów mają patronów religijnych
 *   — NIE WYMIENIAM ICH W OGÓLE.
 * — ⚠⚠ POMNIKA KILIŃSKIEGO NIE OPISUJĘ — wymiary
 *   z jednego źródła, a figura „dwa materiały" zajęta
 *   (Świerzawa).
 * — ⚠ ODLEGŁOŚCI: jedno źródło z wykazanym błędem
 *   faktograficznym. NIE PODAJĘ ŻADNEJ.
 *
 * KĄT: ZGADZAMY SIĘ CO DO TEGO, CZEGO NIE WIDAĆ
 * — o tym, że w domu spory toczą się o rzeczy widoczne,
 * a co do najważniejszych jest zgoda. Kąt z Jeziora
 * Popielewskiego: głębokość 45,8 m jest ustalona,
 * powierzchnia — nie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Jezioro Popielewskie ma 45,8 metra głębokości
 *   i jest najgłębszym jeziorem Wielkopolski, a ta
 *   liczba jest zgodna w trzech źródłach,
 * — że jego POWIERZCHNIA ma w tych samych źródłach trzy
 *   wartości, a poziom wody dwie,
 * — ŻE TO, CZEGO NIE WIDAĆ, JEST USTALONE, A TO, CO
 *   WIDAĆ Z BRZEGU — SPORNE. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NIE TWIERDZĘ, IŻ TAK JEST ZAWSZE — opisuję
 *   jedno jezioro,
 * — ⚠⚠ ŻE W DOMU WYGLĄDA TO PODOBNIE: nikt się nie
 *   kłóci o to, że obiad ma być, że siadamy razem
 *   i że dzieci mają jeść. Kłócimy się o deskę,
 *   o zmywarkę i o to, kto zostawił kubek,
 * — ⚠⚠ ŻE SPORY O WIDOCZNE SĄ MĘCZĄCE WŁAŚNIE DLATEGO,
 *   że dotyczą rzeczy drugorzędnych — i że łatwo z nich
 *   wyciągnąć fałszywy wniosek o całości,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: gdy spór w kuchni się
 *   zapętla, powiedz na głos, na co się zgadzacie.
 *   Zwykle na więcej, niż się w tej chwili wydaje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: bywa, że spór o widoczne
 *   jest naprawdę sporem o głębokie — o to, kto
 *   w tym domu pracuje więcej. Wtedy przenoszenie
 *   rozmowy na „zgadzamy się co do zasad" jest
 *   unikaniem tematu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie rozwiązuje
 *   wyłącznie rzeczy widoczne. MÓWIĘ WPROST, że sporu
 *   o podział obowiązków nie rozstrzygnie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE:
 *   tam dwa pomiary były poprawne i różniły się
 *   granicą; tu chodzi o to, KTÓRE parametry są sporne,
 *   a które nie — i że układa się to odwrotnie, niż
 *   można by sądzić. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO CO NAPRAWDĘ TRZYMA KONSTRUKCJĘ — kąt
 *   zajęty (Nowy Tomyśl). ⚠⚠ TAM NIEWIDOCZNE NIOSŁO
 *   CIĘŻAR; TU NIEWIDOCZNE JEST PO PROSTU BEZSPORNE.
 * — ⚠⚠ ZERO NAJWYŻSZE NIE ZNACZY WYSOKIE — kąt zajęty
 *   (Chodzież).
 * — ⚠⚠ ZERO OPISANE SĄ TYLKO NAJWIĘKSZE — kąt zajęty
 *   (Wronki). ŻADNEGO LICZENIA JEZIOR.
 * — ⚠⚠ ZERO SZEROKIE A PŁYTKIE — kąt zajęty (Pniewy).
 *   ⚠⚠⚠ TAM TEŻ JEST JEZIORO I GŁĘBOKOŚĆ. TU NIE MÓWIĘ
 *   O REPERTUARZE ANI O UMIEJĘTNOŚCIACH.
 * — ⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   ANI O KĄPIELI.
 * — ⚠⚠⚠ ŻADNEGO ROZSTRZYGANIA DOMOWYCH SPORÓW ANI
 *   OCENIANIA, KTO MA RACJĘ. Opisuję mechanizm.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO (BAZYLIKA
 *   POMINIĘTA) · ZERO WĄTKU MILITARNEGO I POWSTAŃCZEGO ·
 *   ZERO POWODZI I POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ powierzchni jeziora jako jednej liczby.
 * — NIE PODAJĘ średniej głębokości ani poziomu wody.
 * — NIE PODAJĘ roku nadania praw jako pewnego.
 * — NIE PISZĘ ani słowa o bazylice.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Trzemeszno leży w powiecie gnieźnieńskim, na
 *   wschodnim brzegu Jeziora Popielewskiego; miasto
 *   liczy 7 247 mieszkańców (GUS, 31.12.2024) na
 *   5,5 km², czyli 1 327,3 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 13 666
 *   osób na 175,2 km² i obejmuje 48 miejscowości,
 * — pierwsza wzmianka pochodzi z 1145 r., a prawa
 *   miejskie miasto otrzymało przed 1368 r. — część
 *   źródeł podaje około 1382 r.; nadawcy nie ustalono,
 * — Jezioro Popielewskie ma 45,8 m głębokości
 *   maksymalnej i jest najgłębszym jeziorem
 *   Wielkopolski oraz dziesiątym pod tym względem
 *   w Polsce; jest jeziorem rynnowym, połączonym
 *   strugami z jeziorami Ostrowickim, Szydłowskim,
 *   Malicz i Folusz,
 * — jego powierzchnia podawana jest w źródłach jako
 *   279 ha, 292,5 ha albo przedział od 292,5 do
 *   308,5 ha,
 * — Jan Kiliński urodził się w Trzemesznie w 1760 r.
 *   przy ulicy wówczas Psiej, dziś gen. Henryka
 *   Dąbrowskiego, a zmarł 28 stycznia 1819 r.
 *   w Warszawie; dokładna data jego urodzenia nie jest
 *   znana, bo zachował się tylko zapis chrztu.
 */
export const TRZEMESZNO: CityContent = {
  slug: "trzemeszno",
  h1: "Thermomix Trzemeszno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Trzemeszno — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Trzemesznie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Trzemeszno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Trzemesznie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Trzemeszna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czterdziestu ośmiu miejscowości w gminie.",

  highlights: highlightyStandardowe("Trzemeszno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Głębokość ustalona. Powierzchnia sporna.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Trzemesznie – jak wygląda prezentacja?",
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
      id: "zgoda-co-do-niewidocznego",
      heading: "Zgadzamy się co do tego, czego nie widać",
      paragraphs: [
        "Jezioro Popielewskie, na którego wschodnim brzegu leży Trzemeszno, ma czterdzieści pięć metrów i osiemdziesiąt centymetrów głębokości. Jest najgłębszym jeziorem Wielkopolski i dziesiątym pod tym względem w Polsce.",
        "Ta liczba jest zgodna w trzech niezależnych źródłach. Do przecinka.",
        "Za to powierzchnia tego samego jeziora podawana jest jako dwieście siedemdziesiąt dziewięć hektarów, dwieście dziewięćdziesiąt dwa i pół — albo jako przedział od dwustu dziewięćdziesięciu dwóch do trzystu ośmiu. Poziom wody ma dwie wartości, różniące się o ponad metr.",
        "Czyli: to, czego nie widać, jest ustalone. To, co widać z brzegu, jest sporne.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o dwóch pomiarach, które oba były poprawne i różniły się przyjętą granicą. Tu nie o to chodzi. Tu chodzi o to, KTÓRE rzeczy są sporne — i że układa się to odwrotnie, niż można by sądzić.",
        "W domu jest zadziwiająco podobnie, i warto to raz zobaczyć.",
        "Bo nikt w żadnej kuchni nie kłóci się o to, że obiad ma być. Że siadamy razem. Że dzieci mają jeść i że nie zostawiamy nikogo bez kolacji. Te rzeczy są ustalone tak głęboko, że nawet się ich nie wypowiada.",
        "Kłócimy się o deskę położoną w złym miejscu, o to, kto nie włączył zmywarki, i o kubek na blacie. O rzeczy widoczne, policzalne, leżące na wierzchu — i drugorzędne. A potem z tych sporów wyciągamy wniosek o całości: że nic tu nie działa.",
        "Ruch jest jeden i jest zaskakująco skuteczny. Kiedy spór w kuchni zaczyna się zapętlać, powiedz na głos, na co się zgadzacie. Nie po to, żeby kogoś przekonać — po to, żeby usłyszeć, jak długa jest ta lista. Zwykle jest dłuższa, niż w tej chwili wygląda.",
        "Uczciwie o drugiej stronie: bywa, że spór o deskę naprawdę jest sporem o coś głębokiego — o to, kto w tym domu pracuje więcej. Wtedy przenoszenie rozmowy na „przecież zgadzamy się co do zasad” jest zwykłym unikaniem tematu i nikomu nie pomaga. Rozróżnik: czy ta sama kłótnia wraca co tydzień o tę samą rzecz.",
        "I uczciwie o sprzęcie. Thermomix rozwiązuje wyłącznie rzeczy widoczne: mniej naczyń, mniej stania przy garnku, mniej decyzji co do tego, czy już gotowe. Sporu o podział obowiązków nie rozstrzygnie i nie będę udawać, że rozstrzygnie. Zdarza się, że ułatwia — bo do urządzenia łatwiej namówić kogoś, kto nie gotuje — ale to nie to samo.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Trzemesznie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o co w Waszej kuchni wraca ta sama rozmowa. Nie muszę znać szczegółów — wystarczy, żebym wiedziała, czego nie obiecywać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Trzemesznie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Trzemeszna",
      paragraphs: [
        "Trzemeszno leży w powiecie gnieźnieńskim, na wschodnim brzegu Jeziora Popielewskiego, w dorzeczu Noteci. Samo miasto liczy 7 247 mieszkańców (GUS, 31.12.2024) na 5,5 kilometra kwadratowego, czyli tysiąc trzysta dwadzieścia siedem osób na kilometr, a cała gmina miejsko-wiejska 13 666 osób na 175,2 kilometra i obejmuje czterdzieści osiem miejscowości. Gęstości dla gminy nie podaję — to przypadek podręcznikowy: dzielenie daje równo siedemdziesiąt osiem, a źródło pisze siedemdziesiąt dziewięć. Pierwsza wzmianka o Trzemesznie pochodzi z 1145 roku, prawa miejskie miasto otrzymało przed 1368 — choć część źródeł podaje około 1382, a nadawcy nie udało się ustalić. Jezioro Popielewskie jest jeziorem rynnowym, połączonym strugami z czterema innymi: Ostrowickim, Szydłowskim, Malicz i Folusz. W Trzemesznie urodził się w 1760 roku Jan Kiliński — przy ulicy wówczas Psiej, dziś generała Henryka Dąbrowskiego; zmarł 28 stycznia 1819 w Warszawie. Dokładnej daty jego urodzenia nikt nie zna, bo zachował się tylko zapis chrztu.",
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

  districtsHeading: "Do których części Trzemeszna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu ośmiu miejscowości w gminie: Kruchowa, Popielewa, Niewolna, Wydartowa, Kamieńca, Jastrzębowa, Duszna, Miał, Zieleni i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto dopisać powiat gnieźnieński. W powiecie krotoszyńskim, po drugiej stronie województwa, leży wieś o nazwie Trzemeszno — i wyszukiwarki mieszają je regularnie.",
  ],
  districts: [],

  nearbyHeading: "Poza Trzemeszno też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Gniezna, Witkowa, Mogilna, Kłecka i Gąsawy — wszędzie bezpłatnie, tak samo jak w samym Trzemesznie.",
  ],
  nearbyTowns: ["Gniezno", "Witkowo", "Mogilno", "Kłecko", "Gąsawa"],

  about: blokOMnie("do Trzemeszna", "w Trzemesznie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Trzemeszna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu ośmiu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi: mówi się „do Trzemeszna” i „w Trzemesznie”, a przymiotnik brzmi „trzemeszeński”, nie „trzemesznowski”. I warto dopisać powiat gnieźnieński, bo w powiecie krotoszyńskim jest wieś o tej samej nazwie.",
    },
    ...faqWspolne("w Trzemesznie"),
    {
      question: "W naszej kuchni wciąż wracają te same kłótnie o drobiazgi. Czy da się to jakoś ustawić?",
      answer:
        "Pomaga jedna rzecz: powiedzieć na głos, na co się zgadzacie. Jezioro Popielewskie pod Trzemesznem ma czterdzieści pięć metrów i osiemdziesiąt centymetrów głębokości i ta liczba jest zgodna w trzech źródłach — a jego powierzchnia ma w tych samych źródłach trzy różne wartości. To, czego nie widać, jest ustalone; to, co widać z brzegu, sporne. W domu też: nikt nie kłóci się o to, że obiad ma być, tylko o kubek na blacie. Warto usłyszeć, jak długa jest ta pierwsza lista.",
    },
    {
      question: "Czy Thermomix pomoże nam podzielić obowiązki w kuchni?",
      answer:
        "Nie rozstrzygnie tego i nie będę udawać, że rozstrzygnie. Urządzenie rozwiązuje rzeczy widoczne: mniej naczyń do umycia, mniej stania przy garnku, mniej wątpliwości, czy coś jest już gotowe. Zdarza się, że pomaga ubocznie — bo do prowadzonego przepisu łatwiej namówić kogoś, kto normalnie nie gotuje, i wtedy obiad może zrobić ktoś inny. Ale to skutek, nie obietnica, i mówię o nim ostrożnie.",
    },
  ],

  geo: { lat: 52.5617, lng: 17.8226 },
};
