import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * LIDZBARK — gmina miejsko-wiejska w powiecie DZIAŁDOWSKIM.
 * Zwany LIDZBARKIEM WELSKIM (od rzeki Wel).
 * GMINA ok. 13 000 (dane GUS przez geoportale: 12 903
 * i 13 066). 24 SOŁECTWA. Powierzchnia 255 km².
 * ⚠ LUDNOŚCI SAMEGO MIASTA NIE PODAJĘ — nie potwierdzono.
 *
 * ⚠⚠ NAJGROŹNIEJSZA KOLIZJA NAZW W CAŁYM PROJEKCIE:
 * LIDZBARK (pow. działdowski) TO NIE LIDZBARK WARMIŃSKI
 * (pow. lidzbarski). Dwa odrębne miasta w tym samym
 * województwie, o zupełnie różnej historii. W treści
 * konsekwentnie doprecyzowuję: „Lidzbark Welski" albo
 * „Lidzbark w powiecie działdowskim".
 *
 * PRAWA MIEJSKIE — ŹRÓDŁA SPRZECZNE:
 * — 1301 — wersja powtarzana powszechnie, ale SŁOWNIK
 *   HISTORYCZNO-GEOGRAFICZNY IH PAN STWIERDZA WPROST:
 *   „Założenie L. w 1301 nie znajduje potwierdzenia".
 * — 1399 — pierwsza wzmianka o Lidzbarku JAKO MIEŚCIE.
 * — ok. 1415 — WIELKI MISTRZ MICHAŁ KÜCHMEISTER nadał
 *   miastu wieś Nowy Dwór i prawo rybołówstwa; prawo
 *   chełmińskie bez obowiązku szarwarku.
 * PISZĘ WERSJĘ IH PAN i wprost zaznaczam, że rok 1301
 * jest niepotwierdzony.
 * WYSTAWCA: ZAKON KRZYŻACKI, nie biskup.
 * PRZYNALEŻNOŚĆ: ziemia chełmińska / michałowska,
 * komturstwo brodnickie; od 1570 własność królewska.
 * NIE WARMIA, NIE MAZURY, NIE ZIEMIA LUBAWSKA.
 * OBALONE: „Lidzbark to miasto biskupów" — to Lidzbark
 * WARMIŃSKI. Tu było miasto krzyżackie, potem królewskie.
 *
 * BASZTA ZAMKOWA — 1405 r., gotycka, kamienno-ceglana;
 * odbudowana po 1766 r. w formach barokowych.
 * MURY OBRONNE 1405–1407. Zachowany średniowieczny układ
 * urbanistyczny wokół PLACU HALLERA.
 * KOŚCIÓŁ ŚW. WOJCIECHA — ukończony 1752 r. po pożarze
 * miasta; orientowany, salowy, dach mansardowy.
 * Św. Wojciech patronem miasta od 1997 r.
 * KOŚCIÓŁ EWANGELICKO-AUGSBURSKI 1829, DWORZEC 1889,
 * WIEŻA WODOCIĄGOWA 1909.
 * WELSKI PARK KRAJOBRAZOWY — utworzony rozporządzeniem
 * nr 24/95 Wojewody Ciechanowskiego z 18 GRUDNIA 1995 r.
 * Powierzchnia ok. 20 400 ha + otulina (źródła podają
 * 20 444 ha i 20 023 ha — PISZĘ „ponad dwadzieścia tysięcy
 * hektarów"). Obejmuje gminy Grodziczno, Lidzbark, Rybno,
 * Płośnica. Rezerwaty: Bagno Koziana, Piekiełko, Ostrów
 * Tarczyński, Jezioro Neliwa — DAT UTWORZENIA NIE PODAJĘ.
 * W parku 13 większych jezior polodowcowych.
 * RZEKA WEL — silnie meandruje, MIEJSCAMI MA CHARAKTER
 * RZEKI GÓRSKIEJ, z bystrzami i kamienistym dnem.
 * To jest podstawa kąta.
 * JEZIORO LIDZBARSKIE ok. 122 ha, przepływa przez nie Wel.
 * Drugi park: GÓRZNIEŃSKO-LIDZBARSKI PARK KRAJOBRAZOWY.
 * CYKLICZNIE: Jarmark Lidzbarski (lipiec), Dni Lidzbarka
 * (ostatni weekend lipca).
 * ⚠ „Piknik Country" NIE JEST POTWIERDZONY dla tego miasta
 * — wyniki dotyczą Lidzbarka Warmińskiego. NIE WYMIENIAM.
 *
 * KĄT: WOLNO CZY SZYBKO — o prędkości pracy, bez podawania
 * ustawień. Kąt od rzeki Wel: cieku, który raz płynie
 * leniwie w zakolach, a raz bystrzem po kamieniach.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wybór prędkości to najczęściej zaniedbywana decyzja,
 *   bo ludzie ustawiają „jak w przepisie" i nie wiedzą,
 *   po co,
 * — że są dwa przeciwne cele: ROZBIJANIE i ŁĄCZENIE BEZ
 *   NISZCZENIA, i że wymagają czegoś przeciwnego,
 * — że wolno chodzi się tam, gdzie struktura ma zostać:
 *   gulasz z kawałkami, bigos, farsz, sos z warzywami,
 *   ciasto, delikatne masy,
 * — że szybko chodzi się tam, gdzie ma zniknąć: kremy,
 *   pasty, przeciery, twarde surowce, mielenie na sucho,
 * — że najczęstszy błąd to szybko tam, gdzie powinno być
 *   wolno — bo wtedy z gulaszu robi się zupa krem,
 * — że przy gorącej zawartości pośpiech jest ryzykowny,
 *   i tu odsyłam do instrukcji zamiast doradzać,
 * — i ODMOWA: nie podaję żadnych ustawień ani numerów
 *   obrotów.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, NUMERÓW OBROTÓW, CZASÓW ANI TEMPERATUR.
 *   To jest strona o zasadzie, nie o liczbach.
 * — ŻADNYCH PORAD o bezpieczeństwie pracy z gorącą
 *   zawartością poza odesłaniem do instrukcji.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ ludności samego miasta.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945 i zniszczeń miasta.
 * — ZERO roku 1920 i wątku plebiscytowego.
 * — ZERO historii społeczności żydowskiej.
 * — ZERO wątków wojskowych, w tym wizyt oficerów w 1939 r.
 * — ZERO wysiedleń i akcji „Wisła".
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Konsystencja: gładko
 * czy z kawałkami" (Stryków) dotyczy EFEKTU i decyzji
 * smakowej. Tutaj chodzi o MECHANIKĘ: o to, dlaczego
 * prędkość jest osobnym narzędziem i jak myśleć o wyborze
 * między rozbijaniem a łączeniem. „Noże i ostrzenie"
 * (Drzewica) dotyczą ostrza. „Twarde rzeczy" (Nidzica)
 * dotyczą granicy wytrzymałości.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku 1301 jako daty praw miejskich.
 * — NIE PODAJĘ ludności samego miasta.
 * — NIE PODAJĘ dokładnej powierzchni Welskiego Parku
 *   Krajobrazowego — źródła rozbieżne.
 * — NIE PODAJĘ dat utworzenia rezerwatów.
 * — NIE WYMIENIAM Pikniku Country — nie dotyczy tego miasta.
 * — NIE PRZYPISUJĘ Lidzbarkowi produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina liczy około trzynastu tysięcy mieszkańców,
 *   ma 24 sołectwa i 255 km²,
 * — Lidzbark po raz pierwszy wzmiankowany jako miasto
 *   w 1399 r.; około 1415 r. wielki mistrz krzyżacki Michał
 *   Küchmeister nadał mu wieś Nowy Dwór i prawo rybołówstwa;
 *   rok 1301, powtarzany jako data założenia, nie znajduje
 *   potwierdzenia w Słowniku historyczno-geograficznym PAN,
 * — historycznie to ziemia chełmińska i michałowska,
 *   komturstwo brodnickie; od 1570 własność królewska,
 * — baszta zamkowa z 1405 r., mury obronne z lat 1405–1407,
 * — kościół świętego Wojciecha ukończony w 1752 r.;
 *   święty Wojciech jest patronem miasta od 1997 r.,
 * — Welski Park Krajobrazowy utworzono 18 grudnia 1995 r.;
 *   ma ponad dwadzieścia tysięcy hektarów i obejmuje gminy
 *   Grodziczno, Lidzbark, Rybno i Płośnica; są w nim
 *   rezerwaty Bagno Koziana, Piekiełko, Ostrów Tarczyński
 *   i Jezioro Neliwa oraz trzynaście większych jezior,
 * — rzeka Wel silnie meandruje i miejscami ma charakter
 *   rzeki górskiej, z bystrzami i kamienistym dnem,
 * — jezioro Lidzbarskie ma około 122 ha,
 * — cyklicznie odbywają się Jarmark Lidzbarski i Dni
 *   Lidzbarka.
 */
export const LIDZBARK: CityContent = {
  slug: "lidzbark",
  h1: "Thermomix Lidzbark – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lidzbark Welski (pow. działdowski) — przedstawiciel",
  seoDescription:
    "Thermomix w Lidzbarku w powiecie działdowskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lidzbark — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lidzbarku Welskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lidzbarka w powiecie działdowskim — tego nad Welem — z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("Lidzbark i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rozbijanie i łączenie to dwa przeciwne cele. Wymagają czego innego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lidzbarku – jak wygląda prezentacja?",
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
      id: "wolno-czy-szybko",
      heading: "Rzeka, która raz płynie leniwie, a raz bystrzem — czyli wolno czy szybko",
      paragraphs: [
        "Przez Lidzbark w powiecie działdowskim płynie Wel — rzeka o zaskakująco zmiennym charakterze. Na jednych odcinkach leniwie meandruje przez łąki, na innych ma bystrza i kamieniste dno, jak potok górski. Od niej bierze się zresztą określenie Lidzbark Welski, którym warto się posługiwać, bo bez niego miasto myli się z Lidzbarkiem Warmińskim, leżącym sto kilkadziesiąt kilometrów stąd i mającym zupełnie inną historię. Ten Lidzbark był miastem krzyżackim, potem królewskim; wzmiankowany jako miasto w 1399 roku, a przywileje dostał około 1415 od wielkiego mistrza Michała Küchmeistra. Rok 1301, który podaje pół internetu, nie znajduje potwierdzenia w Słowniku historyczno-geograficznym Polskiej Akademii Nauk.",
        "Rzeka o dwóch prędkościach dobrze pasuje do tematu, który w tym urządzeniu jest najbardziej zaniedbywany: wyboru prędkości pracy.",
        "Bo prawie wszyscy robią z tym to samo — ustawiają tak, jak podaje przepis, i nie zastanawiają się dlaczego. A kiedy przepisu nie ma albo trzeba coś zrobić po swojemu, zaczyna się zgadywanie. Od razu uprzedzam: nie podam tu żadnych liczb ani ustawień. Chcę tylko, żebyście rozumieli zasadę, bo ona jest prosta.",
        "Prędkość służy dwóm przeciwnym celom i to jest sedno sprawy. Pierwszy to rozbijanie — chcecie, żeby coś przestało być sobą i zamieniło się w jednolitą masę. Drugi to łączenie bez niszczenia — chcecie, żeby składniki się połączyły, ale zostały tym, czym są. To są cele przeciwne i wymagają czegoś przeciwnego.",
        "Wolno chodzi się więc wszędzie tam, gdzie struktura ma zostać: gulasz z kawałkami mięsa, bigos, farsz, sos z warzywami, dania duszone, ciasto, delikatne masy, wszystko, co ma się tylko przemieszać, a nie zmienić. Szybko — tam, gdzie struktura ma zniknąć: kremy, pasty, przeciery, mielenie na sucho, twarde surowce, rozdrabnianie na proszek.",
        "Najczęstszy błąd wynika wprost z tego rozróżnienia i widzę go stale: szybko tam, gdzie powinno być wolno. Wtedy z gulaszu robi się zupa krem, a z bigosu pasta. Przy odwrotnej pomyłce nic złego się nie dzieje — po prostu trwa dłużej i trzeba puścić jeszcze raz. Dlatego przy wątpliwości zawsze warto zacząć wolniej.",
        "Jest jeszcze druga oś, o której warto pamiętać: czas i prędkość wymieniają się między sobą tylko do pewnego stopnia. Dłużej i wolniej to nie zawsze to samo co krócej i szybciej — przy delikatnych składnikach długa wolna praca również je rozdrobni, tylko powoli.",
        "I granica: przy gorącej zawartości nie doradzam nic. Praca z gorącym płynem ma swoje reguły opisane w instrukcji urządzenia i to jest jedyne miejsce, w którym powinniście ich szukać. Nie podam tu ani ustawień, ani wyjątków, ani żadnych „sposobów” — bo to jest sprzęt, w którym pośpiech przy gorącym potrafi się skończyć poparzeniem.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lidzbarku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przy umawianiu warto powiedzieć wprost, że chodzi o Lidzbark w powiecie działdowskim — bo dwa miasta o tej nazwie w jednym województwie potrafią zamieszać w kalendarzu bardziej, niż się wydaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lidzbarku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lidzbarskiej rodziny",
      paragraphs: [
        "Gmina Lidzbark liczy około trzynastu tysięcy mieszkańców, ma dwadzieścia cztery sołectwa i dwieście pięćdziesiąt pięć kilometrów kwadratowych. Historycznie to ziemia chełmińska i michałowska, komturstwo brodnickie, a od 1570 roku własność królewska — nie Warmia i nie Mazury. Jako miasto Lidzbark wzmiankowany jest od 1399 roku. Zachowały się baszta zamkowa z 1405 roku, fragmenty murów z lat 1405–1407 i średniowieczny układ ulic wokół Placu Hallera, a także kościół świętego Wojciecha ukończony w 1752 roku. Największym atutem okolicy jest jednak przyroda: Welski Park Krajobrazowy, utworzony 18 grudnia 1995 roku, obejmuje ponad dwadzieścia tysięcy hektarów, cztery rezerwaty i trzynaście większych jezior; przez jezioro Lidzbarskie o powierzchni około stu dwudziestu dwóch hektarów przepływa Wel.",
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

  districtsHeading: "Do których części gminy Lidzbark dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu czterech sołectw gminy — także tych leżących w granicach Welskiego Parku Krajobrazowego. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Lidzbark też przyjadę",
  nearbyParagraphs: [
    "Działdowo, Brodnica, Rybno, Nidzica i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Działdowo", "Nidzica", "Lubawa"],

  about: blokOMnie("do Lidzbarka", "w Lidzbarku i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Lidzbarka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu czterech sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Najważniejsze rozróżnienie: chodzi o Lidzbark w powiecie działdowskim, nad Welem, zwany Lidzbarkiem Welskim — a nie o Lidzbark Warmiński, który jest osobnym miastem w tym samym województwie. Do obu przyjeżdżam, ale to dwie zupełnie różne trasy.",
    },
    ...faqWspolne("w Lidzbarku"),
    {
      question: "Kiedy pracować wolno, a kiedy szybko?",
      answer:
        "Wolno wszędzie tam, gdzie struktura ma zostać: gulasz z kawałkami, bigos, farsz, sos z warzywami, ciasto, delikatne masy. Szybko tam, gdzie ma zniknąć: kremy, pasty, przeciery, mielenie na sucho. To są dwa przeciwne cele i wymagają czegoś przeciwnego.",
    },
    {
      question: "Jaki jest najczęstszy błąd przy prędkości?",
      answer:
        "Szybko tam, gdzie powinno być wolno — wtedy z gulaszu robi się zupa krem, a z bigosu pasta. Przy odwrotnej pomyłce nic złego się nie dzieje, po prostu trwa dłużej. Dlatego przy wątpliwości warto zacząć wolniej.",
    },
    {
      question: "Podasz konkretne ustawienia?",
      answer:
        "Nie podaję żadnych ustawień ani liczb — to strona o zasadzie, nie o parametrach. Przy gorącej zawartości tym bardziej odsyłam do instrukcji urządzenia: pośpiech przy gorącym płynie potrafi się skończyć poparzeniem i nie zamierzam w tej sprawie improwizować.",
    },
  ],

  geo: { lat: 53.2617, lng: 19.8236 },
};
