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
 * PYZDRY — powiat wrzesiński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ PYZDRY NIE MA.
 * MIASTO: 2 935 mieszkańców (GUS 31.12.2024), 12,2 km²,
 *   gęstość 241,4 os./km².
 *   ⚠ [ZW — 2 935 / 12,2 = 240,6 wobec 241,4. Różnica
 *   0,83, W GRANICACH. PODAJĘ OBIE.]
 *   ⚠ POWIERZCHNIĘ POTWIERDZA STRONA GMINY: „w tym
 *   miasto 12 km2".
 *   ⚠⚠ NAJWIĘKSZE OBSZAROWO I NAJRZADZIEJ ZALUDNIONE
 *   MIASTO TEJ FALI. MOGĘ POWIEDZIEĆ.
 *   ⚠ WYSOKOŚĆ: 90 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 6 476 osób, 137,8 km², gęstość
 *   47 os./km².
 *   ⚠ [ZW — 6 476 / 137,8 = 46,995 → 47. RÓŻNICA
 *   0,005 — NAJDOKŁADNIEJSZE DOMKNIĘCIE W CAŁYM
 *   CYKLU. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ INNE ŹRÓDŁA PODAJĄ 6 954, 6 452 i 6 937 osób.
 *   PODAJĘ WYŁĄCZNIE GUS Z DATĄ.
 *   ⚠⚠⚠ LICZBY „7 240 mieszkańców miasta w 2006 r."
 *   Z EN.WIKIPEDII NIE UŻYWAM — przekracza dzisiejszą
 *   ludność całej gminy. ŹRÓDŁO BŁĘDNE.
 * SOŁECTWA: 20 SOŁECTW i 35 MIEJSCOWOŚCI
 *   (GUS Vademecum). PODAJĘ OBIE.
 *   ⚠⚠ Rejestr obszaru wiejskiego wylicza 36 pozycji
 *   w sześciu kategoriach (wieś, osada, osada leśna,
 *   przysiółek, kolonia, część) — ⚠⚠⚠ RÓŻNICY NIE
 *   ROBIĘ KĄTEM (Kleczew).
 *   MIEJSCOWOŚCI (wybór): Białobrzeg, Białobrzeg
 *   Ratajski, Ciemierów, Ciemierów-Kolonia, Dolne
 *   Grądy, Górne Grądy, Lisewo, Kolonia Lisewo,
 *   Lisiaki, Pietrzyków, Pietrzyków-Kolonia, Rataje,
 *   Tarnowiec, Wrąbczynkowskie Holendry, Zamość.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 30,5%. PODAJĘ.
 *   ⚠⚠ POWIERZCHNI LASU W KM² NIE LICZĘ — piszę
 *   „obszar kilkakrotnie większy od całego miasta",
 *   bo 30,5% ze 137,8 km² to około 42 km² wobec
 *   12,2 km² miasta. ⚠⚠⚠ LICZBY 42 NIE PODAJĘ,
 *   bo to moje przeliczenie.
 * ⚠ GEO: 52,1706 / 17,6901 (miasto i gmina identyczne).
 * ⚠⚠⚠ RZEKI NIE PODAJĘ — serwis gminy jej nie wymienia,
 *   a bez potwierdzenia nie piszę [NP].
 *
 * ⚠⚠ ODMIANA — PLURALE TANTUM:
 *   M. PYZDRY · D. PYZDR (⚠⚠⚠ NIE „Pyzdrów") ·
 *   Ms. w PYZDRACH · N. Pyzdrami · C. Pyzdrom.
 *   ⚠ POTWIERDZENIA: „powierzchnia Pyzdr", „gęstość
 *   zaludnienia Pyzdr", „ile osób mieszka w Pyzdrach".
 *   ⚠⚠⚠ BŁĄD 1: „do Pyzdrów" — zbitka „-zdr" na końcu
 *   wyrazu wywołuje odruch dodania końcówki.
 *   ⚠⚠⚠ BŁĄD 2: liczba pojedyncza — „Pyzdry leży",
 *   „w Pyzdrze". Poprawnie „PYZDRY LEŻĄ".
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — „pyzdrski"
 *   niepotwierdzony [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZW — WEWNĄTRZGMINNE, CZTERY PARY:
 *   Białobrzeg / Białobrzeg Ratajski ·
 *   Ciemierów / Ciemierów-Kolonia ·
 *   Pietrzyków / Pietrzyków-Kolonia ·
 *   Dolne Grądy / Górne Grądy.
 *   Plus trójka: Lisewo / Kolonia Lisewo / Lisiaki.
 *   ⚠⚠ ZAMOŚĆ — wieś w tej gminie, nazwa identyczna
 *   z miastem powiatowym w lubelskim. WSPOMINAM.
 *   ⚠ RATAJE — nazwa powtarza się jako dzielnica
 *   Poznania.
 *   — Innych Pyzdr w Polsce NIE USTALONO [NP].
 *
 * ⚠⚠ DATY:
 *   — ⚠⚠⚠ REJESTR PODAJE TĘ SAMĄ WARTOŚĆ W DWÓCH
 *     POLACH: „przed 1257" jako DATĘ ZAŁOŻENIA
 *     i „przed 1257" jako DATĘ UZYSKANIA PRAW
 *     MIEJSKICH. To jedyne miasto tej fali, dla którego
 *     rejestr nie zna żadnego momentu istnienia sprzed
 *     miejskości. PODAJĘ TEN FAKT JAKO WSPIERAJĄCY.
 *   — Rok 1257 potwierdza obchodzone w 2007 r.
 *     750-lecie lokacji.
 *   ⚠⚠⚠ ROCZNICY Z 2008 R. („625 rocznica pierwszego
 *     użycia broni palnej") NIE WYMIENIAM — wątek
 *     militarny.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NIELICZONE JEST WIĘKSZE
 *   OD LICZONEGO:
 *   MIASTO PYZDRY ZAJMUJE 12,2 km².
 *   LASY W GMINIE ZAJMUJĄ 30,5% JEJ POWIERZCHNI —
 *   przy gminie liczącej 137,8 km² to obszar
 *   KILKAKROTNIE WIĘKSZY OD CAŁEGO MIASTA.
 *   CZYLI: rzecz, której nikt nie liczy jako „miasta",
 *   jest wielokrotnie większa od tego, co się liczy.
 *   ⚠⚠⚠ DOKŁADNEJ POWIERZCHNI LASU NIE PODAJĘ —
 *   to byłoby moje przeliczenie procentu.
 *   PISZĘ „KILKAKROTNIE".
 *
 * KĄT: NIELICZONE JEST WIĘKSZE OD LICZONEGO
 * — o tym, że praca wokół gotowania jest wielokrotnie
 * większa od samego gotowania, a liczy się tylko to
 * drugie. Kąt z Pyzdr: lasy w gminie zajmują obszar
 * kilkakrotnie większy od całego miasta.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że miasto zajmuje 12,2 km², a lasy 30,5% gminy
 *   liczącej 137,8 km², czyli obszar kilkakrotnie
 *   większy. TO JEST RDZEŃ,
 * — ⚠⚠ że dokładnej powierzchni lasu nie podaję,
 *   bo byłoby to moje przeliczenie,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: „gotowanie" liczy
 *   się od postawienia garnka na ogniu, a cała reszta
 *   nie liczy się wcale,
 * — ⚠⚠ ŻE TĄ RESZTĄ SĄ: zaplanowanie, ustalenie,
 *   czego kto nie je, zakupy, wyjęcie z zamrażalnika,
 *   sprzątnięcie blatu przed, zmywanie po, i pilnowanie
 *   w głowie, żeby nic się nie zmarnowało,
 * — ⚠⚠ ŻE DLATEGO ZDANIE „PRZECIEŻ TO TYLKO GODZINA"
 *   JEST NIEPRAWDZIWE — liczy tylko część widoczną,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nazwijcie tę resztę
 *   na głos, przy stole. Samo nazwanie zmienia więcej,
 *   niż się wydaje, bo dopiero nazwane da się komuś
 *   oddać,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: ta niewidoczna część
 *   nie zniknie i nie da się jej całej zlikwidować.
 *   Da się ją rozdzielić i da się ją skrócić, ale
 *   ktoś zawsze będzie musiał wiedzieć, co jest
 *   w lodówce,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zmniejsza część
 *   widoczną, czyli tę mniejszą. Części niewidocznej
 *   prawie nie rusza. MÓWIĘ TO WPROST, choć sprzedaję
 *   sprzęt.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO CO NAPRAWDĘ TRZYMA KONSTRUKCJĘ — kąt
 *   zajęty (Nowy Tomyśl). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło o to,
 *   CO niesie ciężar; tu o to, ŻE CZĘŚĆ PRACY W OGÓLE
 *   NIE JEST LICZONA. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ZGADZANIA SIĘ CO DO TEGO, CZEGO NIE
 *   WIDAĆ — kąt zajęty (Trzemeszno). ROZGRANICZAM
 *   DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO SZEROKIEGO A PŁYTKIEGO — kąt zajęty
 *   (Pniewy).
 * — ⚠⚠⚠ ZERO MAŁEJ CAŁOŚCI, DUŻEJ ROZPIĘTOŚCI —
 *   kąt zajęty (Ujście).
 * — ⚠⚠ ZERO CZTERECH NAROŻY, SZEŚCIU ULIC — kąt zajęty
 *   (Miejska Górka, TA SAMA FALA). Tam chodzi o to,
 *   że podziału nie da się zrobić równo; tu o to,
 *   że część w ogóle nie wchodzi do rachunku.
 * — ⚠⚠ ZERO POŁĄCZONEGO W JEDEN UKŁAD — kąt zajęty
 *   (Ślesin).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *   ⚠⚠⚠ SZCZEGÓLNIE: NIC O MARNOWANIU ŻYWNOŚCI JAKO
 *   O KWESTII BEZPIECZEŃSTWA — piszę o pamiętaniu,
 *   co jest w lodówce, nie o terminach.
 * — ⚠⚠⚠ ŻADNEGO PRZYPISYWANIA RÓL PŁCIOWYCH.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POWODZI · ZERO
 *   BEZROBOCIA · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni lasów w km².
 * — NIE PODAJĘ rzeki.
 * — NIE PODAJĘ przymiotnika ani nazwy mieszkańca.
 * — NIE PODAJĘ największej wsi.
 * — NIE UŻYWAM liczby 7 240 z en.wikipedii.
 * — NIE WYMIENIAM rocznicy z 2008 r. ani obiektów
 *   sakralnych.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pyzdry leżą w powiecie wrzesińskim, liczą 2 935
 *   mieszkańców (GUS, 31.12.2024) na 12,2 km², czyli
 *   241,4 osoby na kilometr kwadratowy, i leżą
 *   90 m n.p.m.,
 * — cała gmina miejsko-wiejska to 6 476 osób
 *   na 137,8 km², czyli 47 osób na kilometr
 *   kwadratowy, i obejmuje 20 sołectw oraz 35
 *   miejscowości; lasy zajmują 30,5% jej powierzchni,
 * — rejestr podaje dla Pyzdr tę samą wartość jako datę
 *   założenia i jako datę uzyskania praw miejskich:
 *   „przed 1257"; rok 1257 potwierdza obchodzone
 *   w 2007 r. 750-lecie lokacji,
 * — w gminie leżą m.in. Ciemierów i Ciemierów-Kolonia,
 *   Pietrzyków i Pietrzyków-Kolonia, Białobrzeg
 *   i Białobrzeg Ratajski, Dolne Grądy i Górne Grądy,
 *   Lisewo, Rataje, Tarnowiec i Zamość.
 */
export const PYZDRY: CityContent = {
  slug: "pyzdry",
  h1: "Thermomix Pyzdry – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pyzdry — cena i prezentacja",
  seoDescription:
    "Thermomix w Pyzdrach w powiecie wrzesińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pyzdry — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pyzdrach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pyzdr z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu sołectw w gminie.",

  highlights: highlightyStandardowe("Pyzdry"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "To, czego nikt nie liczy, bywa kilka razy większe.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pyzdrach – jak wygląda prezentacja?",
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
      id: "nieliczone",
      heading: "Nieliczone jest większe od liczonego",
      paragraphs: [
        "Pyzdry zajmują dwanaście i dwie dziesiąte kilometra kwadratowego. To sporo jak na miasto tej wielkości — więcej niż niejedno miasto o połowę ludniejsze.",
        "A lasy w gminie zajmują trzydzieści i pół procenta jej powierzchni, przy gminie liczącej sto trzydzieści siedem i osiem dziesiątych kilometra. To obszar kilkakrotnie większy od całego miasta. Dokładnej liczby nie podam, bo musiałabym ją sama wyliczyć z procentu, a wolę tego nie robić — ale proporcja jest wyraźna i nie zmienia jej żaden sposób liczenia.",
        "Kiedy mówi się „Pyzdry”, ma się na myśli te dwanaście kilometrów. Reszta jest, zajmuje kilka razy więcej miejsca i nie wchodzi do zdania.",
        "Piszę o tym, bo w kuchni mamy dokładnie taki sam rachunek i on krzywdzi konkretne osoby.",
        "„Gotowanie” liczy się od postawienia garnka na ogniu do wyłączenia. Godzina, czasem czterdzieści minut. I to jest ta część, o której się mówi.",
        "A wokół niej jest cała reszta, której nikt nie liczy: wymyślenie, co w ogóle ugotować, i to przy pamiętaniu, kto czego nie je. Sprawdzenie, co zostało. Zakupy, z listą i z noszeniem. Wyjęcie mięsa z zamrażalnika poprzedniego wieczoru. Sprzątnięcie blatu przed. Zmywanie po. I to ciągłe trzymanie w głowie, co jest w lodówce i co trzeba zjeść w pierwszej kolejności.",
        "Dlatego zdanie „przecież to tylko godzina” jest nieprawdziwe — nie dlatego, że ktoś kłamie, tylko dlatego, że liczy wyłącznie część widoczną.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, co naprawdę niesie ciężar konstrukcji, i osobno o rzeczach niewidocznych, co do których wszyscy się zgadzają. Tu chodzi o coś innego niż jedno i drugie — o to, że cała część pracy w ogóle nie wchodzi do rachunku, choć wszyscy o niej wiedzą.",
        "Ruch jest jeden i można go zrobić przy stole, bez zmian w kuchni. Nazwijcie tę resztę na głos i po kolei. Dopiero nazwane da się komuś oddać; dopóki „obiad” znaczy wyłącznie godzinę przy garnku, nikt nie przejmie reszty, bo nikt nie wie, że ona istnieje.",
        "Uczciwie o drugiej stronie, bo ta część nie zniknie. Da się ją rozdzielić i da się ją skrócić, ale ktoś w domu zawsze będzie musiał wiedzieć, co jest w lodówce i kto czego nie je. Ta wiedza jest pracą i warto, żeby nie spoczywała zawsze na tej samej osobie.",
        "I uczciwie o sprzęcie, bo tu mam interes. Thermomix zmniejsza część widoczną — czyli tę mniejszą. Nie trzeba stać przy garnku, a danie powstaje w jednym naczyniu, więc i zmywania jest mniej. Części niewidocznej prawie nie rusza: nie zrobi zakupów, nie wymyśli, co jeść, i nie zapamięta, co trzeba zjeść w pierwszej kolejności.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pyzdrach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile czasu zajmują u Was zakupy i planowanie. Nie samo gotowanie — to zwykle najmniejsza część.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pyzdrach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Pyzdr",
      paragraphs: [
        "Pyzdry leżą w powiecie wrzesińskim, liczą 2 935 mieszkańców (GUS, 31.12.2024) na 12,2 kilometra kwadratowego, czyli dwustu czterdziestu jeden na kilometr, i leżą dziewięćdziesiąt metrów nad poziomem morza — to największe obszarowo i najrzadziej zaludnione miasto, o jakim pisałam w tej okolicy, a obie liczby zgadzają się z ilorazem. Cała gmina miejsko-wiejska to 6 476 osób na 137,8 kilometra kwadratowego, czyli czterdzieści siedem osób na kilometr; to najdokładniejsze domknięcie liczb, jakie widziałam — różnica wynosi pięć tysięcznych. Gmina obejmuje dwadzieścia sołectw i trzydzieści pięć miejscowości, a lasy zajmują trzydzieści i pół procenta jej powierzchni. Ciekawostka z rejestru: przy Pyzdrach ta sama wartość, „przed 1257”, figuruje i jako data założenia, i jako data uzyskania praw miejskich — rejestr nie zna tu żadnego momentu sprzed miejskości. Rok 1257 potwierdza obchodzone w 2007 roku 750-lecie lokacji. W gminie leżą między innymi Ciemierów, Pietrzyków, Białobrzeg, Dolne i Górne Grądy, Lisewo, Rataje i Tarnowiec.",
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

  districtsHeading: "Do których części Pyzdr dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sołectw w gminie. Nazywają się między innymi: Ciemierów, Ciemierów-Kolonia, Pietrzyków, Pietrzyków-Kolonia, Białobrzeg, Białobrzeg Ratajski, Dolne Grądy, Górne Grądy, Lisewo, Rataje, Tarnowiec i Zamość. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: nazwa występuje tylko w liczbie mnogiej, a dopełniacz nie ma końcówki — mówi się „do Pyzdr”, nie „do Pyzdrów”, i „w Pyzdrach”, nie „w Pyzdrze”; poprawnie jest też „Pyzdry leżą”, nie „leży”. Przymiotnika od nazwy nie używam, bo nie udało mi się go potwierdzić. I praktyczna: w gminie jest kilka par nazw różniących się jednym członem, a wieś Zamość nosi nazwę identyczną z miastem powiatowym w lubelskim — przy adresie warto podać gminę.",
  ],
  districts: [],

  nearbyHeading: "Poza Pyzdry też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Wrześni, Miłosławia, Zagórowa, Rychwała, Słupcy i Środy Wielkopolskiej — wszędzie bezpłatnie, tak samo jak w samych Pyzdrach.",
  ],
  nearbyTowns: ["Września", "Miłosław", "Zagórów", "Rychwał", "Słupca", "Środa Wielkopolska"],

  about: blokOMnie("do Pyzdr", "w Pyzdrach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pyzdr bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: nazwa występuje tylko w liczbie mnogiej, a dopełniacz jest bezkońcówkowy — poprawnie jest „do Pyzdr”, a nie „do Pyzdrów”, oraz „w Pyzdrach” i „Pyzdry leżą”. Przymiotnika od nazwy nie używam, bo nie znalazłam potwierdzenia. I praktyczna: w gminie jest kilka par nazw różniących się jednym członem, a wieś Zamość ma nazwę identyczną z miastem w lubelskim.",
    },
    ...faqWspolne("w Pyzdrach"),
    {
      question: "Dlaczego gotowanie męczy mnie bardziej, niż wynika z zegarka?",
      answer:
        "Bo zegarek mierzy najmniejszą część. Pyzdry dają tu niezłe porównanie: samo miasto zajmuje dwanaście i dwie dziesiąte kilometra kwadratowego, a lasy w gminie — trzydzieści i pół procenta jej powierzchni, czyli obszar kilkakrotnie większy od całego miasta. Kiedy mówi się „Pyzdry”, ma się na myśli te dwanaście kilometrów; reszta jest i nie wchodzi do zdania. Z gotowaniem jest identycznie: liczy się godzinę przy garnku, a nie liczy się wymyślania, co ugotować, pamiętania, kto czego nie je, zakupów, wyjmowania z zamrażalnika i trzymania w głowie, co jest w lodówce. Nazwijcie tę resztę na głos i po kolei — dopiero nazwane da się komuś oddać.",
    },
    {
      question: "Którą część tej pracy Thermomix realnie zdejmuje?",
      answer:
        "Tę widoczną, czyli mniejszą — i wolę to powiedzieć wprost, choć sprzedaję urządzenia. Nie trzeba stać przy garnku i pilnować, bo temperaturę i mieszanie prowadzi samo, a danie powstaje w jednym naczyniu, więc zmywania jest mniej. Nie zrobi natomiast zakupów, nie wymyśli, co jeść, i nie zapamięta, co trzeba zjeść w pierwszej kolejności. Jeśli u Was najcięższa jest właśnie ta część, urządzenie pomoże mniej, niż się spodziewacie.",
    },
  ],

  geo: { lat: 52.1706, lng: 17.6901 },
};
