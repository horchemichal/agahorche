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
 * GNIEWKOWO — powiat inowrocławski,
 * woj. kujawsko-pomorskie, KUJAWY.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 6 639 mieszkańców (GUS 31.12.2024), 9,2 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 13 532 osoby, 179,6 km²,
 * 23 sołectwa; użytki rolne 63%, lasy 25%.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ GNIEWKOWO.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ W OBIEGU SĄ CZTERY RÓŻNE LICZBY LUDNOŚCI GMINY —
 *   TYLKO JEDNA JEST POPRAWNA:
 *   ✅ 13 532 — GUS, 31.12.2024 — TEJ UŻYWAM;
 *   13 466 — źródło wtórne bez dnia bilansowego;
 *   14 388 — GUS, ale DANE ZA 2019 R.;
 *   ⚠ 14 905 — strona powiatu inowrocławskiego,
 *   zawyżenie o +10,1%. NIE UŻYWAM. TWARDA GRANICA.
 * ⚠ ODMIANA: D. GNIEWKOWA, Ms. W GNIEWKOWIE,
 *   przym. GNIEWKOWSKI (poświadczony nazwami
 *   historycznymi: księstwo gniewkowskie, województwo
 *   gniewkowskie).
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO SŁOWNIKOWO —
 *   NIE UŻYWAM ŻADNEJ.
 * ⚠⚠ RYZYKO POMYLENIA NAJWYŻSZE Z TEJ FALI:
 *   GNIEWKOWO to także wieś w MAZOWIECKIM i w
 *   WARMIŃSKO-MAZURSKIM; istnieją też GNIEW (pomorskie),
 *   GNIEWINO (pomorskie), GNIEWOSZÓW (mazowieckie),
 *   GNIEWKÓWIEC i GNIEWNO. ZAWSZE „powiat inowrocławski".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1185 — pierwsza wzmianka.
 * — 1268 — lokacja miejska, książę inowrocławski Siemomysł
 *   ⚠ ŹRÓDŁA PODAJĄ ZAMIENNIE PRAWO MAGDEBURSKIE
 *   I CHEŁMIŃSKIE — NIE ROZSTRZYGAM, NIE PODAJĘ PRAWA.
 * — 1450 — potwierdzenie lokacji przez Kazimierza
 *   Jagiellończyka.
 * — ⚠ 1504 — Aleksander Jagiellończyk nadaje przywilej
 *   organizowania TARGÓW RAZ W TYGODNIU
 *   ⚠ DNIA TYGODNIA ŹRÓDŁO NIE PODAJE — NIE ZGADUJĘ.
 * — 1312–1390 — księstwo gniewkowskie; do 1420 istniało
 *   województwo gniewkowskie; 1420–1772 starostwo
 *   niegrodowe.
 *   ⚠⚠ PODAJĘ WYŁĄCZNIE JAKO FAKT ADMINISTRACYJNY.
 *   ZERO NARRACJI O UPADKU I DEGRADACJI — patrz etyka.
 * — ⚠⚠ LICZBA DOMÓW I MIESZKAŃCÓW — CIĄG Z PARADOKSEM:
 *   1567 — 97 DOMÓW, ok. 220 osób;
 *   1673 — 250 osób;
 *   1765 — 43 DOMY, ok. 300 osób;
 *   1858 — 1 381 osób; 1910 — 3 451; 1989 — 7 519.
 *   ⚠ MIĘDZY 1567 A 1765 LICZBA DOMÓW SPADŁA Z 97 DO 43 —
 *   O PONAD POŁOWĘ — A LICZBA MIESZKAŃCÓW WZROSŁA
 *   Z OK. 220 DO OK. 300.
 *   ⚠⚠ JEDNO ŹRÓDŁO. ZAZNACZAM TO W TEKŚCIE.
 *   ⚠⚠ NIE TŁUMACZĘ PRZYCZYNY SPADKU — nie jest znana,
 *   a wszystkie prawdopodobne prowadzą do wojen i zaraz.
 *   TWARDA GRANICA.
 * — ⚠⚠⚠ RDZEŃ KĄTA — SPIS RZEMIEŚLNIKÓW 1858 R.:
 *   Z RZEMIOSŁA UTRZYMYWAŁO SIĘ 120 OSÓB,
 *   A JEDNA TRZECIA Z NICH PRACOWAŁA W BRANŻY SPOŻYWCZEJ:
 *   MŁYNARZE, PIEKARZE, RZEŹNICY.
 *   W mieście liczącym wtedy 1 381 mieszkańców.
 * — STRUKTURA ZAKŁADÓW 1907 R.: łącznie 134 zakłady —
 *   51 WARSZTATÓW JEDNOOSOBOWYCH (bez sił najemnych),
 *   64 MAŁE WARSZTATY, 19 WIĘKSZYCH ZAKŁADÓW;
 *   dodatkowo 72 zakłady handlowe i gastronomiczne.
 * — lata 70. XIX w. — młyny parowe i tartaki.
 * — ZABYTKI: najstarszy budynek mieszkalny z końca XVIII w.,
 *   wieża wodociągowa i ratusz z początku XX w.
 *   ⚠ ZERO BOŻNICY — patrz etyka.
 * — ZAMEK: zbudowany ok. 1332 r., zniszczony w XIV w.
 *   ⚠⚠ „Brak zachowanych opisów zupełnie uniemożliwia
 *   odtworzenie jego wyglądu" — WYMIARÓW I MATERIAŁU
 *   NIE DA SIĘ USTALIĆ. Jedyny ślad to nazwa ulicy
 *   Zamkowej. ⚠ ZERO OKOLICZNOŚCI ZNISZCZENIA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Gniewkowo. Sprawdzono pełną listę wojewódzką.
 *   NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 * ⚠ DNIA TYGODNIA TARGU, LICZBY WIATRAKÓW, SPISÓW
 *   CECHOWYCH I WYMIARÓW RYNKU NIE USTALONO.
 *
 * KĄT: CO TRZECI — ile miejsca w tygodniu zajmuje jedzenie.
 * Kąt od spisu z 1858 r.: z rzemiosła utrzymywało się
 * w Gniewkowie 120 osób, a co trzecia z nich pracowała
 * przy jedzeniu. Ta proporcja nigdy się nie zmieniła —
 * zmieniło się tylko to, że dziś nikt jej nie liczy,
 * bo cała ta praca przeniosła się do domu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1858 roku z rzemiosła utrzymywało się
 *   w Gniewkowie sto dwadzieścia osób, a jedna trzecia
 *   z nich pracowała w branży spożywczej — młynarze,
 *   piekarze, rzeźnicy; miasto liczyło wtedy 1 381
 *   mieszkańców,
 * — ŻE TO BYŁ ZAWÓD, A NIE DOMOWY OBOWIĄZEK: mielenie,
 *   pieczenie i rozbieranie mięsa robił ktoś, komu się
 *   za to płaciło,
 * — ⚠⚠ ŻE TA PRACA NIE ZNIKNĘŁA, TYLKO SIĘ PRZENIOSŁA —
 *   TO JEST RDZEŃ TEKSTU. Dziś nikt nie liczy godzin,
 *   bo nikt za nie nie wystawia rachunku,
 * — CO SIĘ NA TO SKŁADA, KONKRETNIE — i tego się zwykle
 *   nie sumuje:
 *   — zakupy i planowanie, co w ogóle kupić,
 *   — same gotowanie,
 *   — sprzątanie po gotowaniu,
 *   — decyzja „co dziś", powtarzana siedem razy w tygodniu,
 * — ⚠⚠ ŻE NAJDROŻSZA JEST TA OSTATNIA POZYCJA, chociaż
 *   trwa najkrócej: decyzja podejmowana codziennie od zera
 *   męczy bardziej niż samo gotowanie i to ona odpowiada
 *   za większość wieczornych kapitulacji,
 * — ŻE UCZCIWE POLICZENIE TEGO JEST WARTE GODZINY:
 *   nie po to, żeby się przerazić, tylko żeby wiedzieć,
 *   który z czterech kawałków naprawdę boli — bo każdy
 *   z nich skraca się czym innym,
 * — ⚠ ŻE PLANOWANIE TYGODNIA TO OSOBNY TEMAT
 *   ⚠ ODSYŁAM, NIE ROZWIJAM,
 * — ⚠ UCZCIWIE O SPRZĘCIE — TO MUSI PAŚĆ WPROST:
 *   urządzenie skraca CZĘŚĆ DRUGĄ, czyli samo gotowanie,
 *   i trochę część trzecią, bo naczyń jest mniej.
 *   NIE SKRACA ZAKUPÓW ANI DECYZJI — a to są dwie
 *   z czterech pozycji i często te najcięższe.
 *   Kto kupuje je z nadzieją, że przestanie myśleć,
 *   co ugotować, będzie rozczarowany. Mówię to przed
 *   zakupem, nie po.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO PLANOWANIA TYGODNIA JAKO TEMATU —
 *   kąt zajęty. Odsyłam jednym zdaniem.
 * — ⚠⚠ ZERO MŁYNARSTWA, PIEKARSTWA I MIĘSA JAKO TEMATÓW —
 *   trzy zawody występują WYŁĄCZNIE jako pozycje
 *   w wyliczeniu ze spisu. TWARDA GRANICA.
 * — ⚠ ZERO GOTOWANIA DLA JEDNEJ OSOBY — kąt zajęty
 *   (Lubań).
 * — ⚠ ZERO LICZBY NARZĘDZI — kąt zajęty (Lipno).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNYCH KONKRETNYCH LICZB GODZIN TYGODNIOWO —
 *   nie mam ich z badań i NIE WYMYŚLAM. Mówię
 *   o czterech pozycjach do policzenia, nie o wyniku.
 *   TWARDA GRANICA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO EKSTERMINACJI MIESZKAŃCÓW. Strona powiatu
 *   wymienia wśród zabytków obelisk upamiętniający cztery
 *   tysiące pomordowanych — liczba tego rzędu przy mieście,
 *   które w 1910 r. miało 3 451 mieszkańców, oznacza
 *   zbrodnię obejmującą całą okolicę. TWARDA GRANICA
 *   BEZWZGLĘDNA — NAJWAŻNIEJSZA NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ I ZERO BOŻNICY.
 *   Portale poświęcone tej historii mają dla Gniewkowa
 *   dwa osobne hasła i wypadają w pierwszej dziesiątce
 *   wyników. TWARDA GRANICA.
 * — ⚠⚠ ZERO SPALENIA GRODU W 1332 R. i wojen XIV w.,
 *   w których zniszczono zamek.
 * — ⚠⚠ ZERO NARRACJI O UPADKU: sprzedaż księstwa w 1376,
 *   jego likwidacja w 1390, utrata statusu województwa
 *   w 1420. Podaję daty administracyjne bez komentarza
 *   albo wcale.
 * — ⚠⚠ ZERO UPADŁYCH ZAKŁADÓW z połowy XX w. i wystaw
 *   im poświęconych.
 * — ZERO depopulacji (−9,7%) i bezrobocia.
 * — ZERO przyczyn spadku liczby domów w XVII–XVIII w.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „PLANOWANIE TYGODNIA" dotyczy UKŁADANIA MENU.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi o POLICZENIE,
 *   ILE TEGO WSZYSTKIEGO JEST — a nie o to, jak to ułożyć.
 *   Odsyłam tam wprost.
 * — „GOTOWANIE DLA JEDNEJ OSOBY" (Lubań) dotyczy SYTUACJI
 *   ŻYCIOWEJ.
 * — „SZUFLADA" (Lipno) dotyczy LICZBY NARZĘDZI.
 * — „WĄSKIE GARDŁO" (Wąbrzeźno) dotyczy JEDNEGO ETAPU
 *   WEWNĄTRZ OBIADU. ⚠ TUTAJ chodzi o CAŁY TYDZIEŃ
 *   i o cztery różne rodzaje pracy.
 * TUTAJ chodzi o RACHUNEK: ile miejsca w tygodniu
 * zajmuje jedzenie i która część z tego naprawdę boli.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby 14 905 ani 14 388.
 * — NIE PODAJĘ prawa, na którym lokowano miasto.
 * — NIE PODAJĘ dnia tygodnia targu — nie ustalono.
 * — NIE TŁUMACZĘ spadku liczby domów.
 * — NIE PODAJĘ wymiarów zamku — nie da się ustalić.
 * — NIE PODAJĘ konkretnych liczb godzin tygodniowo.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Gniewkowo leży na Kujawach, jest miastem w gminie
 *   miejsko-wiejskiej w powiecie inowrocławskim i liczy
 *   6 639 mieszkańców (GUS, 31.12.2024) na 9,2 km²;
 *   cała gmina ma 13 532 osoby na 179,6 km² i dwadzieścia
 *   trzy sołectwa, a lasy zajmują jedną czwartą jej
 *   powierzchni,
 * — pierwsza wzmianka pochodzi z 1185 roku, lokacja miejska
 *   z 1268, a potwierdził ją Kazimierz Jagiellończyk
 *   w 1450 roku; w 1504 Aleksander Jagiellończyk nadał
 *   miastu przywilej organizowania targów raz w tygodniu,
 * — w latach 1312–1390 istniało księstwo gniewkowskie,
 *   a do 1420 roku — województwo gniewkowskie,
 * — w 1567 roku stało w mieście dziewięćdziesiąt siedem
 *   domów przy około dwustu dwudziestu mieszkańcach,
 *   a w 1765 — czterdzieści trzy domy przy około trzystu
 *   mieszkańcach; dane pochodzą z jednego źródła,
 * — w 1858 roku z rzemiosła utrzymywało się tu sto
 *   dwadzieścia osób, a jedna trzecia z nich pracowała
 *   w branży spożywczej: młynarze, piekarze i rzeźnicy;
 *   miasto liczyło wtedy 1 381 mieszkańców,
 * — w 1907 roku działały w Gniewkowie sto trzydzieści
 *   cztery zakłady: pięćdziesiąt jeden jednoosobowych,
 *   sześćdziesiąt cztery małe i dziewiętnaście większych,
 *   a do tego siedemdziesiąt dwa zakłady handlowe
 *   i gastronomiczne; w latach siedemdziesiątych XIX wieku
 *   pracowały tu młyny parowe i tartaki,
 * — najstarszy budynek mieszkalny pochodzi z końca XVIII
 *   wieku, a wieża wodociągowa i ratusz z początku XX.
 */
export const GNIEWKOWO: CityContent = {
  slug: "gniewkowo",
  h1: "Thermomix Gniewkowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gniewkowo — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Gniewkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gniewkowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gniewkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gniewkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Gniewkowo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ta praca nie zniknęła. Przeniosła się do domu i przestała być liczona.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gniewkowie – jak wygląda prezentacja?",
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
      id: "co-trzeci",
      heading: "Co trzeci rzemieślnik pracował przy jedzeniu",
      paragraphs: [
        "W 1858 roku z rzemiosła utrzymywało się w Gniewkowie sto dwadzieścia osób. Jedna trzecia z nich pracowała w branży spożywczej: młynarze, piekarze, rzeźnicy. Miasto liczyło wtedy tysiąc trzysta osiemdziesiąt jeden mieszkańców.",
        "Co trzeci rzemieślnik w mieście zajmował się jedzeniem. I — to jest istotne — robił to za pieniądze. Mielenie, pieczenie i rozbieranie mięsa było zawodem, nie domowym obowiązkiem.",
        "Ta praca nigdzie nie zniknęła. Ona się przeniosła.",
        "Dziś nikt nie liczy godzin, które w domu idą na jedzenie, bo nikt za nie nie wystawia rachunku. A gdyby policzyć uczciwie, składają się na to cztery zupełnie różne rzeczy.",
        "Pierwsza: zakupy razem z ustalaniem, co w ogóle kupić. Druga: samo gotowanie. Trzecia: sprzątanie po gotowaniu, którego prawie nikt nie dolicza, choć bywa dłuższe niż gotowanie. I czwarta: decyzja „co dziś”, podejmowana siedem razy w tygodniu.",
        "Najdroższa jest ta ostatnia, chociaż trwa najkrócej.",
        "Decyzja podejmowana codziennie od zera męczy bardziej niż samo stanie przy garnku, bo wymaga uwagi w momencie, w którym uwagi już nie ma. To ona odpowiada za większość wieczornych kapitulacji — nie brak czasu, tylko brak gotowej odpowiedzi o osiemnastej. O układaniu menu na kilka dni pisałam osobno, bo to temat sam w sobie.",
        "Policzenie tych czterech pozycji jest warte godziny. Nie po to, żeby się przerazić — po to, żeby wiedzieć, która z nich naprawdę boli. Bo każda skraca się czym innym i każda inna inwestycja ją skraca.",
        "I tu muszę powiedzieć rzecz, której na pokazach się nie mówi, a która jest dla mnie najważniejsza w całej tej rozmowie.",
        "Urządzenie skraca część drugą — samo gotowanie. Trochę skraca też trzecią, bo naczyń jest mniej. Nie skraca zakupów i nie skraca decyzji.",
        "To są dwie z czterech pozycji i bardzo często właśnie te najcięższe. Kto kupuje Thermomix z nadzieją, że przestanie myśleć, co ugotować, będzie rozczarowany — i wolę, żeby usłyszał to ode mnie przed zakupem niż odkrył sam w trzecim tygodniu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gniewkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, która część tygodnia męczy Cię najbardziej — zakupy, gotowanie, sprzątanie czy samo wymyślanie. To realnie zmienia, co warto pokazać, i czasem kończy się tym, że odradzam zakup.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gniewkowie"),
    sekcjaRaty("w Gniewkowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla gniewkowskiej rodziny",
      paragraphs: [
        "Gniewkowo leży na Kujawach, jest miastem w gminie miejsko-wiejskiej w powiecie inowrocławskim i liczy ponad sześć i pół tysiąca mieszkańców na dziewięciu kilometrach kwadratowych; cała gmina ma ponad trzynaście tysięcy osób i dwadzieścia trzy sołectwa, a lasy zajmują jedną czwartą jej powierzchni. Pierwsza wzmianka pochodzi z 1185 roku, lokacja miejska z 1268, a potwierdził ją Kazimierz Jagiellończyk w 1450; w 1504 roku Aleksander Jagiellończyk nadał miastu przywilej organizowania targów raz w tygodniu. W latach 1312–1390 istniało tu księstwo gniewkowskie, a do 1420 — województwo gniewkowskie. W 1567 roku stało w mieście dziewięćdziesiąt siedem domów przy około dwustu dwudziestu mieszkańcach, a w 1765 — czterdzieści trzy domy przy około trzystu; te dane pochodzą z jednego źródła. W 1858 roku z rzemiosła utrzymywało się sto dwadzieścia osób, a jedna trzecia z nich pracowała w branży spożywczej. W 1907 działały tu sto trzydzieści cztery zakłady: pięćdziesiąt jeden jednoosobowych, sześćdziesiąt cztery małe i dziewiętnaście większych, a do tego siedemdziesiąt dwa zakłady handlowe i gastronomiczne. Najstarszy budynek mieszkalny pochodzi z końca XVIII wieku, a wieża wodociągowa i ratusz z początku XX.",
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

  districtsHeading: "Do których części Gniewkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic ratusza i wieży wodociągowej po osiedla przy wylotach dróg. Dojeżdżam też do wszystkich dwudziestu trzech sołectw gminy.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Gniewkowo też przyjadę",
  nearbyParagraphs: [
    "Inowrocław, Toruń, Aleksandrów Kujawski, Ciechocinek, Janikowo, Pakość i Nieszawa są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Inowrocław", "Toruń", "Aleksandrów Kujawski", "Janikowo"],

  about: blokOMnie("do Gniewkowa", "w Gniewkowie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gniewkowa bez dodatkowej opłaty?",
      answer:
        "Tak — do miasta i do każdego z dwudziestu trzech sołectw gminy, bez dopłaty za odległość. Prezentacja też nic nie kosztuje. Dla porządku: chodzi o Gniewkowo w powiecie inowrocławskim, bo miejscowości o tej samej nazwie są jeszcze w mazowieckim i warmińsko-mazurskim.",
    },
    ...faqWspolne("w Gniewkowie"),
    {
      question: "Ile czasu w tygodniu naprawdę zajmuje jedzenie?",
      answer:
        "Nie podam Ci liczby, bo nie mam jej z badań i nie chcę zmyślać. Ale warto policzyć u siebie cztery osobne pozycje: zakupy z planowaniem, samo gotowanie, sprzątanie po gotowaniu i decyzję „co dziś”, podejmowaną siedem razy w tygodniu. Ta ostatnia trwa najkrócej, a męczy najbardziej.",
    },
    {
      question: "Czy Thermomix załatwia problem wymyślania, co ugotować?",
      answer:
        "Nie. Urządzenie skraca samo gotowanie i trochę sprzątanie, bo naczyń jest mniej. Nie skraca zakupów i nie skraca decyzji — a to dwie z czterech pozycji i często te najcięższe. Kto kupuje je z nadzieją, że przestanie myśleć, co ugotować, będzie rozczarowany. Wolę to powiedzieć przed zakupem.",
    },
  ],

  geo: { lat: 52.8946, lng: 18.4076 },
};
