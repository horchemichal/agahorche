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
 * PRZEDECZ — powiat kolski, woj. wielkopolskie.
 *   ⚠ TEN SAM POWIAT CO DĄBIE.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA (TERYT
 *   3009114 / 3009113).
 * MIASTO: 1 513 mieszkańców (GUS 31.12.2024),
 *   2,98 km², gęstość 507,7 os./km².
 *   ⚠⚠⚠ POWIERZCHNIĘ PODAJĘ Z DOKŁADNOŚCIĄ DO SETNYCH.
 *   PRZY 3,0 km² ILORAZ DAJE 504,3, ROZBIEŻNOŚĆ 3,4.
 *   PRZY 2,98 km² ILORAZ DAJE 507,72 — ROZBIEŻNOŚĆ
 *   0,02. PODAJĘ 2,98 I GĘSTOŚĆ RAZEM.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   WYSOKOŚĆ: 111 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 3 890 osób, 76,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — źródło podaje 52,
 *   iloraz daje 50,85. ROZBIEŻNOŚĆ 1,15, POWYŻEJ PROGU.
 *   PODAJĘ LUDNOŚĆ I POWIERZCHNIĘ, BEZ GĘSTOŚCI.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 14 SOŁECTW i 21 MIEJSCOWOŚCI.
 *   ⚠⚠ OBRĘBÓW NIE USTALONO [NP].
 *   MIEJSCOWOŚCI (część): Zbijewek, Zbijewo-Kolonia,
 *   Dziwie, Pod Dziwiem, Zalesie, Katarzyna,
 *   Rybno, Żarowo.
 *   ⚠⚠⚠ „ZBIJEWEK I ZBIJEWO-KOLONIA BEZ ZBIJEWA"
 *   ORAZ „POD DZIWIEM" — FIGUR Z TEGO NIE ROBIĘ:
 *   kąty „numeracja zaczyna się od drugiego" (Książ
 *   Wielkopolski) i nazwa-wyrażenie przyimkowe
 *   (Jutrosin, ta sama fala) ZAJĘTE. WYMIENIAM
 *   W SEKCJI ADRESOWEJ.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 14,0 %. PODAJĘ.
 * ⚠ GEO: 52,3343 / 18,8991.
 *
 * ⚠⚠⚠ ODMIANA — „E" WYPADA Z TEMATU:
 *   D. do PRZEDCZA (⚠⚠⚠ NIE „Przedecza") ·
 *   Ms. w PRZEDCZU (⚠⚠⚠ NIE „w Przedeczu") ·
 *   N. Przedczem.
 *   ⚠ POTWIERDZENIA: „mieszkańcy Przedcza",
 *   „w Przedczu", „ratusze w Dąbiu, Kłodawie
 *   i Przedczu".
 *   ⚠⚠⚠ TO NAJCZĘSTSZY BŁĄD PRZY TEJ NAZWIE.
 *   WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — niepotwierdzony [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1136 R.
 *   — PRAWA MIEJSKIE: ⚠⚠⚠ ŹRÓDŁA SIĘ RÓŻNIĄ.
 *     Rejestr zapisuje „1363–1867, ponownie od 1919".
 *     Encyklopedia podaje 1365.
 *     ⚠⚠⚠ NIE ROZSTRZYGAM I MÓWIĘ TO WPROST —
 *     TO JEST RDZEŃ KĄTA.
 *     ⚠⚠⚠ FIGURY Z PRZERWY 1867–1919 NIE ROBIĘ —
 *     kąt „przerwa nie kasuje początku" ZAJĘTY,
 *     a to dodatkowo wątek zaborczy. ZERO TEGO.
 *     PODAJĘ WYŁĄCZNIE DWIE SPORNE DATY NADANIA.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠ RZEKI I JEZIORA NIE USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWIE WERSJE, ŻADNEJ NIE TRZEBA
 *   UNIEWAŻNIAĆ:
 *   DWA POWAŻNE ŹRÓDŁA PODAJĄ DWA RÓŻNE LATA NADANIA
 *   PRAW MIEJSKICH: 1363 I 1365. RÓŻNICA WYNOSI
 *   DWA LATA.
 *   NIE MAM TRZECIEGO ŹRÓDŁA, KTÓRE BY TO ROZSTRZYGNĘŁO,
 *   WIĘC NIE WYBIERAM. PODAJĘ OBIE I MÓWIĘ, ŻE OBIE
 *   SĄ W OBIEGU.
 *   ⚠⚠ NIE SUGERUJĘ, KTÓRA JEST BARDZIEJ PRAWDOPODOBNA.
 *   ⚠⚠ NIE OCENIAM ŻADNEGO ZE ŹRÓDEŁ I NIE WYMIENIAM
 *   ICH NAZW.
 *
 * KĄT: DWIE WERSJE, ŻADNEJ NIE TRZEBA UNIEWAŻNIAĆ
 * — o rodzinnych przepisach, które w dwóch domach
 * mają dwie wersje, i o tym, że nie trzeba ustalać,
 * która jest „ta prawdziwa". Kąt z Przedcza: dwa
 * źródła, dwa lata, żadnego rozstrzygnięcia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dwa źródła podają 1363 i 1365, że nie mam
 *   trzeciego i że nie wybieram. TO JEST RDZEŃ,
 * — że pierwsza wzmianka o Przedczu jest z 1136 r.
 *   i co do niej źródła są zgodne,
 * — ⚠⚠ ŻE W RODZINIE JEST TAK SAMO: to samo danie
 *   robi się u mamy inaczej niż u teściowej,
 *   i obie wersje są „ta prawdziwa",
 * — ⚠⚠ ŻE SPÓR O TO, KTÓRA JEST WŁAŚCIWA, NIE MA
 *   ROZSTRZYGNIĘCIA, bo nie ma trzeciego źródła
 *   — nie było żadnego oryginału z podpisem,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zapisać obie i podpisać,
 *   czyja jest która. Wtedy przestaje to być sporem,
 *   a staje się dwoma przepisami,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem różnica ma
 *   znaczenie i trzeba wybrać — bo ktoś czegoś nie
 *   je albo bo dwa sposoby nie dają się połączyć
 *   w jednym garnku. Wtedy wybiera się na dziś,
 *   a nie unieważnia drugiej wersji,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie rozstrzygnie
 *   takiego sporu. Zrobi dokładnie tę wersję, którą
 *   mu się poda — i najwyżej pozwoli zrobić obie
 *   i porównać.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DATA PRZYJĘTA, NIE ZNALEZIONA — kąt
 *   zajęty (Krobia). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam z braku dokumentów
 *   PRZYJĘTO JEDNĄ DATĘ; tu są DWIE I OBIE SĄ
 *   W OBIEGU. JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NIE WSZYSTKO MUSI MIEĆ DATĘ POCZĄTKU —
 *   kąt zajęty (Jutrosin, ta sama fala). Tam NIE MA
 *   ŻADNEJ DATY; tu są dwie. ROZGRANICZAM DRUGIM
 *   ZDANIEM — OBOWIĄZKOWO, bo to ta sama fala.
 * — ⚠⚠⚠ ZERO CZTERY REJESTRY, CZTERY LICZBY — kąt
 *   zajęty (Kleczew).
 * — ⚠⚠ ZERO LICZBA NIEZGODNA SAMA ZE SOBĄ — kąt zajęty
 *   (Rychwał). Tam jedna liczba BYŁA BŁĘDNA; tu obie
 *   mogą być dobre.
 * — ⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW. ⚠⚠⚠ TU RYZYKO
 *   PODWYŻSZONE, BO KĄT DOTYCZY PRZEPISÓW RODZINNYCH.
 *   PISZĘ O TYM, ŻEBY ZAPISAĆ OBIE WERSJE, NIGDY
 *   O TYM, CO MA W NICH BYĆ.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ RODZINY,
 *   TEŚCIOWYCH ANI CZYICHŚ PRZEPISÓW. ⚠⚠⚠ PISZĘ
 *   O TYM CIEPŁO I BEZ ŻARTÓW Z KOGOKOLWIEK.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH · ZERO WĄTKU ZABORCZEGO.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ powierzchni miasta 3,0 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE WYBIERAM między 1363 a 1365.
 * — NIE OCENIAM źródeł i nie wymieniam ich nazw.
 * — NIE OPISUJĘ przerwy w prawach miejskich.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE PODAJĘ największej wsi ani rzeki.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Przedecz leży w powiecie kolskim, liczy 1 513
 *   mieszkańców (GUS, 31.12.2024) na 2,98 km², czyli
 *   507,7 osoby na kilometr kwadratowy, i leży 111 m
 *   n.p.m.,
 * — cała gmina miejsko-wiejska to 3 890 osób
 *   na 76,5 km², przy lesistości 14 %,
 * — gmina ma 14 sołectw i 21 miejscowości,
 * — pierwsza wzmianka pochodzi z 1136 r.,
 * — dwa źródła podają dwa różne lata nadania praw
 *   miejskich: 1363 i 1365; nie mam trzeciego źródła
 *   i nie rozstrzygam,
 * — w gminie leżą m.in. Zbijewek, Zbijewo-Kolonia,
 *   Dziwie, Pod Dziwiem, Zalesie, Katarzyna, Rybno
 *   i Żarowo.
 */
export const PRZEDECZ: CityContent = {
  slug: "przedecz",
  h1: "Thermomix Przedecz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Przedecz — cena i prezentacja",
  seoDescription:
    "Thermomix w Przedczu w powiecie kolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Przedecz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Przedczu pod Kołem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Przedcza w powiecie kolskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czternastu sołectw w gminie.",

  highlights: highlightyStandardowe("Przedecz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwa źródła, dwa lata, żadnego rozstrzygnięcia. I nic się nie stało.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Przedczu – jak wygląda prezentacja?",
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
      id: "dwie-wersje",
      heading: "Dwie wersje, żadnej nie trzeba unieważniać",
      paragraphs: [
        "Pierwsza wzmianka o Przedczu pochodzi z 1136 roku i co do niej źródła są zgodne. Gorzej z prawami miejskimi: jedno poważne źródło podaje rok 1363, drugie 1365. Różnica wynosi dwa lata.",
        "Nie mam trzeciego źródła, które by to rozstrzygnęło, więc nie wybieram. Podaję obie daty i mówię wprost, że obie są w obiegu — nie sugeruję też, która jest bardziej prawdopodobna, bo nie mam po czym tego oceniać.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, które swoją datę lokacji przyjęło w dwudziestoleciu międzywojennym z braku dokumentów — tam jedną datę wybrano i się jej trzymano. I o mieście, dla którego nie znalazłam żadnej daty. Tutaj jest trzeci przypadek: daty są dwie, obie poważne, i nikt ich nie pogodził.",
        "Piszę o tym, bo w rodzinach dzieje się dokładnie to samo i potrafi to psuć święta.",
        "To samo danie robi się u mamy inaczej niż u teściowej. U jednej gęstsze, u drugiej rzadsze. U jednej z jednym dodatkiem, u drugiej bez. Obie robią je od trzydziestu lat i obie wiedzą, że robią to tak, jak się robi. I obie mają rację, bo obie wersje są prawdziwe.",
        "Spór o to, która jest „ta właściwa”, nie ma rozstrzygnięcia — dokładnie z tego samego powodu co spór o rok. Nie ma trzeciego źródła. Nie było żadnego oryginału z podpisem, od którego obie wersje by się odłączyły. Były dwie kuchnie, dwie osoby i trzydzieści lat.",
        "Ruch jest jeden i bardzo prosty: zapisać obie i podpisać, czyja jest która. „Zupa mamy” i „zupa babci Ireny”. W tym momencie przestaje to być sporem, a staje się dwoma przepisami — i nikt nie musi ustępować, żeby zrobić miejsce drugiemu.",
        "Uczciwie o drugiej stronie, bo czasem różnica naprawdę ma znaczenie i trzeba wybrać. Ktoś czegoś nie je. Dwa sposoby nie dają się połączyć w jednym garnku. Na stół idzie jedna waza, nie dwie. Wtedy się wybiera — ale wybiera się na dziś, a nie unieważnia drugiej wersji na zawsze. To nie to samo i w rodzinie ta różnica jest odczuwalna.",
        "I uczciwie o sprzęcie, bo nie rozwiąże tego żadne urządzenie. Thermomix zrobi dokładnie tę wersję, którą mu podacie, i nie ma zdania na temat tego, która jest lepsza. Jedyne, co realnie daje, to możliwość zrobienia obu tak samo starannie i porównania ich obok siebie — czasem po takim porównaniu okazuje się, że różnica jest mniejsza, niż wszyscy sądzili.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Przedczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Przedczu"),
    sekcjaRaty("w Przedczu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Przedcza",
      paragraphs: [
        "Przedecz leży w powiecie kolskim, liczy 1 513 mieszkańców (GUS, 31.12.2024) na dwóch i dziewięćdziesięciu ośmiu setnych kilometra kwadratowego, czyli pięćset siedem i siedem dziesiątych osoby na kilometr kwadratowy, i leży sto jedenaście metrów nad poziomem morza; powierzchnię podaję z dokładnością do setnych, bo tylko z nią gęstość się domyka. Cała gmina miejsko-wiejska to 3 890 osób na siedemdziesięciu sześciu i pięciu dziesiątych kilometra kwadratowego, przy lesistości czternastu procent — gęstości gminy nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Gmina ma czternaście sołectw i dwadzieścia jeden miejscowości. Pierwsza wzmianka o Przedczu pochodzi z 1136 roku, a co do roku nadania praw miejskich źródła podają 1363 albo 1365 i tego nie rozstrzygam.",
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

  districtsHeading: "Do których części gminy Przedecz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czternastu sołectw w gminie. W gminie leżą między innymi: Zbijewek, Zbijewo-Kolonia, Dziwie, Pod Dziwiem, Zalesie, Katarzyna, Rybno i Żarowo. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa: są tu osobno Zbijewek i Zbijewo-Kolonia, a także Dziwie i Pod Dziwiem — „Pod Dziwiem” to pełna urzędowa nazwa miejscowości, a nie wskazówka dojazdowa. „Katarzyna” również jest nazwą wsi, nie imieniem. Nazwa Zalesie występuje też w sąsiedniej gminie Dąbie. Druga, językowa i najważniejsza przy tej nazwie: „e” wypada z odmiany, więc mówi się „do Przedcza” i „w Przedczu”, a nie „do Przedecza” ani „w Przedeczu”.",
  ],
  districts: [],

  nearbyHeading: "Poza Przedecz też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Kłodawy, Koła, Dąbia, Izbicy Kujawskiej, Sompolna i Chodcza — wszędzie bezpłatnie, tak samo jak w samym Przedczu.",
  ],
  nearbyTowns: ["Kłodawa", "Koło", "Dąbie", "Izbica Kujawska", "Sompolno", "Chodecz"],

  about: blokOMnie("do Przedcza", "w Przedczu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Przedcza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czternastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga językowa, bo przy tej nazwie błąd jest bardzo częsty: „e” wypada z odmiany, więc poprawnie jest „do Przedcza” i „w Przedczu”, a nie „do Przedecza” ani „w Przedeczu”. Adresowo warto pamiętać, że „Pod Dziwiem” to pełna nazwa miejscowości, a nie wskazówka dojazdowa.",
    },
    ...faqWspolne("w Przedczu"),
    {
      question: "U mamy i u teściowej to samo danie robi się inaczej. Która wersja jest prawdziwa?",
      answer:
        "Obie — i ten spór po prostu nie ma rozstrzygnięcia. Przedecz jest tu dobrym obrazem: jedno poważne źródło podaje rok nadania praw miejskich 1363, drugie 1365, a trzeciego, które by to rozsądziło, nie ma. W rodzinie jest identycznie: nie było żadnego oryginału z podpisem, od którego obie wersje by się odłączyły — były dwie kuchnie, dwie osoby i trzydzieści lat. Ruch jest prosty: zapiszcie obie i podpiszcie, czyja jest która. Wtedy przestaje to być sporem, a staje się dwoma przepisami. Czasem oczywiście trzeba wybrać, bo na stół idzie jedna waza — ale wybiera się wtedy na dziś, a nie unieważnia drugiej wersji na zawsze.",
    },
    {
      question: "Czy Thermomix rozstrzygnie, jak powinno się coś robić?",
      answer:
        "Nie i nie ma takiej ambicji. Zrobi dokładnie tę wersję, którą mu podacie, i nie ma zdania na temat tego, która jest właściwa. Jedyne, co realnie daje przy takich sporach, to powtarzalność: możecie zrobić obie wersje równie starannie i porównać je obok siebie, zamiast opierać się na wspomnieniu smaku sprzed roku. Czasem po takim porównaniu okazuje się, że różnica jest mniejsza, niż wszyscy sądzili — a czasem że jest duża i każdy zostaje przy swojej. Obie odpowiedzi są w porządku.",
    },
  ],

  geo: { lat: 52.3343, lng: 18.8991 },
};
