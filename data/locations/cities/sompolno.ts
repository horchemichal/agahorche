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
 * SOMPOLNO — powiat koniński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ SOMPOLNO NIE MA.
 * MIASTO: 3 301 mieszkańców (GUS 31.12.2024), 6,2 km²,
 *   gęstość 531,6 os./km².
 *   ⚠ [ZW — 3 301 / 6,2 = 532,4 wobec 531,6. Różnica
 *   0,8, W GRANICACH. PODAJĘ OBIE.]
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 10 009 osób, 137,4 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — źródło podaje 74,
 *   iloraz daje 72,8. ROZBIEŻNOŚĆ 1,2. NIE PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Powierzchnia w czterech rejestrach: 137,4 /
 *   137,36 / 137,44 / 137. PODAJĘ 137,4 (GUS).
 *   ⚠⚠ RÓŻNIC NIE ROBIĘ KĄTEM — figura „cztery
 *   rejestry, cztery liczby" zajęta (Kleczew).
 * SOŁECTWA: 22 SOŁECTWA i 41 MIEJSCOWOŚCI —
 *   ZGODNIE W TRZECH ŹRÓDŁACH (GUS Vademecum,
 *   geoportal, raport o stanie gminy). PODAJĘ OBIE.
 *   ⚠ Obrębów ewidencyjnych 29 — ⚠⚠ TEJ LICZBY
 *   NIE PODAJĘ, żeby nie wchodzić w figurę rejestrową.
 *   SOŁECTWA: Belny, Biele, Janowice, Kolonia Lipiny,
 *   Koszary, Lubstów, Lubstówek, Marcjanki,
 *   Marianowo, Mąkolno, Mostki, Nowa Wieś, Ostrówek,
 *   Ośno Górne, Police, Przystronie, Racięcice,
 *   Sompolinek, Stefanowo, Sycewo, Wierzbie,
 *   Zakrzewek.
 *   ⚠ NAJWIĘKSZA WIEŚ: LUBSTÓW — 753 mieszkańców
 *   wg raportu za 2018 r., 750 wg raportu za 2021.
 *   ⚠⚠ PODAJĘ Z ZASTRZEŻENIEM I BEZ DOKŁADNEJ DATY:
 *   piszę „około siedmiuset pięćdziesięciu".
 *   ⚠ LESISTOŚĆ GMINY: 12,3%. PODAJĘ.
 * ⚠⚠⚠ GEO — DWA RÓŻNE PUNKTY:
 *   MIASTO: 52,3883 / 18,5030.
 *   centroid GMINY: 52,3436 / 18,4908 — ok. 5 km
 *   na południe. UŻYWAM WYŁĄCZNIE PUNKTU MIASTA.
 *
 * ⚠⚠ ODMIANA — RODZAJ NIJAKI:
 *   D. do SOMPOLNA · Ms. w SOMPOLNIE ·
 *   N. Sompolnem · C. Sompolnu.
 *   ⚠ POTWIERDZENIA URZĘDOWE: „Urząd Miejski
 *   w Sompolnie", „Rada Miejska w Sompolnie",
 *   „do Sompolna".
 *   ⚠⚠⚠ BŁĄD 1: traktowanie jak rodzaju męskiego —
 *   „do Sompolno", „w Sompolno".
 *   ⚠⚠ BŁĄD 2: „w Sompolnej" pod wpływem sąsiedniego
 *   Sompolinka.
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — urząd konsekwentnie
 *   go unika, a formy poświadczonej nie mam [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — SOMPOLINEK — odrębna wieś i sołectwo W TEJ SAMEJ
 *     GMINIE. WSPOMINAM.
 *   — Pary: LUBSTÓW / LUBSTÓWEK; OŚNO GÓRNE bez
 *     „Ośna Dolnego".
 *   — ⚠⚠⚠ BIELE, MARIANOWO i MOSTKI to nazwy sołectw
 *     występujące TAKŻE w sąsiednich gminach (Ślesin,
 *     Gołańcz). WSPOMINAM W CZĘŚCI O DOJAZDACH.
 *   — Innych miejscowości Sompolno NIE USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NAZWA NADANA PRZEGRAŁA
 *   Z UŻYWANĄ:
 *   Miasto lokowano w 1477 R. i nadano mu urzędową
 *   nazwę DĘBNO — od herbu fundatora.
 *   NAZWA SIĘ NIE PRZYJĘŁA. Od 1526 R. w źródłach
 *   występuje już SOMPOLNO.
 *   CZYLI: nazwa nadana przegrała z nazwą używaną
 *   W NIESPEŁNA PÓŁ WIEKU.
 *   ⚠⚠⚠ HERBU NIE OPISUJĘ I NIE NAZYWAM — piszę
 *   wyłącznie „od znaku fundatora" albo pomijam
 *   przyczynę. ZERO HERALDYKI.
 *   ⚠⚠⚠ NAZWISKA FUNDATORA NIE PODAJĘ — wchodzi
 *   w wątek wykluczony.
 *   ⚠⚠ RAMY CHRONOLOGICZNE (pierwsza wzmianka 1242,
 *   utrata praw 1870, odzyskanie 1973) PODAJĘ JAKO
 *   TŁO W CZĘŚCI O RODZINIE, NIE W SEKCJI KĄTOWEJ —
 *   figury „przerwa" ZAJĘTE (Trzcianka, Wyrzysk).
 *
 * KĄT: NAZWA NADANA PRZEGRAŁA Z UŻYWANĄ
 * — o tym, że to, co zapisane, przegrywa z tym, co
 * robione — i że to jest informacja, nie porażka.
 * Kąt z Sompolna: miasto lokowano w 1477 r. pod nazwą
 * Dębno, a od 1526 w źródłach jest już Sompolno.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy lokacji w 1477 r. miasto dostało urzędową
 *   nazwę Dębno,
 * — że nazwa się nie przyjęła i od 1526 r. w źródłach
 *   jest Sompolno — niespełna pół wieku. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: jadłospis napisany
 *   w niedzielę przegrywa z tym, co faktycznie
 *   ugotowano w środę,
 * — ⚠⚠ ŻE TO NIE JEST DOWÓD BRAKU DYSCYPLINY —
 *   to informacja o tym, jak naprawdę wygląda tydzień,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przez dwa tygodnie zapisuj
 *   nie to, co planujesz, tylko to, co ugotowałaś.
 *   Ta lista jest lepszym planem niż plan,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: plany nie są bezużyteczne.
 *   Są dobre do zakupów i do tego, żeby nie stać
 *   o osiemnastej przed pustą lodówką. Złe są tylko
 *   jako miara, z której się rozliczamy,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie sprawi,
 *   że zaczniecie trzymać się planu. Skraca za to
 *   dystans między „nie mam pomysłu" a „jest obiad",
 *   bo nie trzeba przy nim stać.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAZWISKA OD MIEJSCA, NIE MIEJSCA
 *   OD NAZWISKA — kąt zajęty (Miłosław, poprzednia
 *   fala). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam chodziło o KIERUNEK
 *   nazwania, kto od kogo bierze nazwę; TU o to,
 *   że nazwa NADANA przegrała z nazwą UŻYWANĄ.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód).
 * — ⚠⚠⚠ ZERO WSZYSTKIEGO NAZWANEGO OD JEDNEJ RZECZY —
 *   kąt zajęty (Kłodawa).
 * — ⚠⚠⚠ ZERO SKRÓTU, KTÓRY ZJADA RÓŻNICĘ — kąt zajęty
 *   (Kostrzyn).
 * — ⚠⚠⚠ ZERO DOWODU W SĄSIEDNIEJ NAZWIE — kąt zajęty
 *   (Skoki).
 * — ⚠⚠ ZERO LISTY KANONICZNEJ, KTÓRA NIE JEST SPISEM —
 *   kąt zajęty (Mosina). ⚠ UWAGA: mówię o listach
 *   dań, więc MUSZĘ UWAŻAĆ — tam chodziło o to, czego
 *   na liście NIE MA; tu o to, że lista PRZEGRYWA
 *   z praktyką. ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠ ZERO PRZERWY, KTÓRA NIE KASUJE POCZĄTKU —
 *   kąt zajęty (Trzcianka). DLATEGO UTRATY I ODZYSKANIA
 *   PRAW NIE ROZWIJAM.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW. ⚠⚠⚠ UWAGA: mówię
 *   o jadłospisie. WOLNO WYMIENIĆ NAZWY DAŃ,
 *   NIE WOLNO PODAĆ ANI JEDNEJ PROPORCJI.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ SZCZEGÓLNIE:
 *   ANI SŁOWA O PLANOWANIU POSIŁKÓW JAKO DIECIE.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO WYŚMIEWANIA PLANOWANIA ANI OSÓB,
 *   KTÓRE PLANUJĄ.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO
 *   HERALDYKI I HERBU · ZERO WĄTKU WYZNANIOWEGO ·
 *   ZERO WĄTKU MILITARNEGO · ZERO GÓRNICTWA WĘGLA
 *   BRUNATNEGO, ODKRYWEK I ZWAŁOWISK · ZERO ALKOHOLU ·
 *   ZERO POŻARÓW · ZERO BEZROBOCIA · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości gminy.
 * — NIE OPISUJĘ herbu ani nie podaję nazwiska
 *   fundatora.
 * — NIE PODAJĘ dokładnej liczby mieszkańców Lubstowa.
 * — NIE PODAJĘ przymiotnika ani nazwy mieszkańca.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM centroidu gminy jako punktu miasta.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Sompolno leży w powiecie konińskim, liczy 3 301
 *   mieszkańców (GUS, 31.12.2024) na 6,2 km², czyli
 *   531,6 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 10 009 osób
 *   na 137,4 km² i obejmuje 22 sołectwa oraz 41
 *   miejscowości; lasy zajmują 12,3% jej terenu,
 * — przy lokacji w 1477 r. miasto otrzymało urzędową
 *   nazwę Dębno, ale nazwa się nie przyjęła i od
 *   1526 r. w źródłach występuje Sompolno,
 * — pierwsza wzmianka o osadzie pochodzi z 1242 r.,
 *   prawa miejskie utracono w 1870, a odzyskano
 *   w 1973 r.,
 * — największą wsią gminy jest Lubstów, liczący około
 *   siedmiuset pięćdziesięciu mieszkańców,
 * — w gminie leżą m.in. Mąkolno, Racięcice, Lubstówek,
 *   Ostrówek, Police, Przystronie, Sycewo, Zakrzewek
 *   i Sompolinek.
 */
export const SOMPOLNO: CityContent = {
  slug: "sompolno",
  h1: "Thermomix Sompolno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sompolno — cena i prezentacja",
  seoDescription:
    "Thermomix w Sompolnie w powiecie konińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sompolno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sompolnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sompolna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu dwóch sołectw w gminie.",

  highlights: highlightyStandardowe("Sompolno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nadano nazwę Dębno. Przyjęła się inna.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sompolnie – jak wygląda prezentacja?",
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
      id: "nazwa-uzywana",
      heading: "Nazwa nadana przegrała z używaną",
      paragraphs: [
        "Kiedy w 1477 roku lokowano tu miasto, dostało ono urzędową nazwę: Dębno. Tak było zapisane w dokumencie.",
        "Nazwa się nie przyjęła. Już od 1526 roku w źródłach występuje Sompolno — i tak zostało do dziś. Niespełna pół wieku wystarczyło, żeby nazwa używana wygrała z nazwą nadaną, i to mimo że ta druga miała za sobą dokument.",
        "Piszę o tym, bo w kuchni dokładnie ten sam mecz rozgrywa się co tydzień i prawie zawsze kończy się tym samym wynikiem.",
        "Jadłospis napisany w niedzielę na cały tydzień. Zeszyt z rozpiską. Lista na lodówce. A w środę i tak jest makaron, bo ktoś wrócił później, bo zabrakło jednego składnika, bo nagle nikt nie miał ochoty na to, co było zaplanowane.",
        "I teraz rzecz najważniejsza: to nie jest dowód braku dyscypliny. To informacja. Rozjazd między planem a wykonaniem mówi Wam coś prawdziwego o tym, jak wygląda Wasz tydzień — a plan mówił tylko, jak chcielibyście, żeby wyglądał.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o kierunku nazywania — o tym, kto od kogo bierze nazwę. Tu chodzi o coś innego: nie o kierunek, tylko o to, że zapisane przegrywa z robionym. I jeszcze jedno rozróżnienie: pisałam też o listach, na których czegoś brakuje. Tu lista jest kompletna — po prostu przegrywa z praktyką.",
        "Ruch jest jeden i przez pierwsze dwa tygodnie jest wręcz leniwy. Zamiast planować, zapisujcie. Nie to, co macie ugotować — to, co ugotowaliście. Po dwóch tygodniach będziecie mieć listę dziesięciu, może dwunastu dań i to jest Wasz prawdziwy repertuar. Ta lista jest lepszym planem niż jakikolwiek plan, bo już raz wygrała.",
        "Uczciwie o drugiej stronie, bo nie zamierzam wyśmiewać planowania. Plany są dobre do zakupów i do tego, żeby nie stać o osiemnastej przed pustą lodówką — w tej roli działają świetnie i sama je robię. Złe są wyłącznie jako miara, z której się rozliczamy pod koniec tygodnia.",
        "I uczciwie o sprzęcie. Thermomix nie sprawi, że zaczniecie trzymać się planu, i nikt tego nie powinien obiecywać. Skraca za to dystans między „nie mam pomysłu” a „jest obiad”, bo przy gotowaniu nie trzeba stać i pilnować — a dokładnie ten dystans jest powodem, dla którego plany się rozsypują w środku tygodnia.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sompolnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was faktycznie wyszło w tym tygodniu — nie co było w planie. Pod to dobieram dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sompolnie"),
    sekcjaRaty("w Sompolnie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Sompolna",
      paragraphs: [
        "Sompolno leży w powiecie konińskim i liczy 3 301 mieszkańców (GUS, 31.12.2024) na 6,2 kilometra kwadratowego, czyli pięciuset trzydziestu dwóch na kilometr — obie liczby podaję, bo zgadzają się z ilorazem. Cała gmina miejsko-wiejska to 10 009 osób na 137,4 kilometra kwadratowego i obejmuje dwadzieścia dwa sołectwa oraz czterdzieści jeden miejscowości; gęstości dla gminy nie podaję, bo liczba ze źródła nie domyka się z ilorazem. Lasy zajmują dwanaście procent jej terenu. Największą wsią jest Lubstów, liczący około siedmiuset pięćdziesięciu mieszkańców. Pierwsza wzmianka o osadzie pochodzi z 1242 roku, prawa miejskie miasto utraciło w 1870, a odzyskało w 1973. W gminie leżą między innymi Mąkolno, Racięcice, Lubstówek, Ostrówek, Police, Sycewo i Sompolinek.",
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

  districtsHeading: "Do których części Sompolna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dwóch sołectw w gminie. Nazywają się: Belny, Biele, Janowice, Kolonia Lipiny, Koszary, Lubstów, Lubstówek, Marcjanki, Marianowo, Mąkolno, Mostki, Nowa Wieś, Ostrówek, Ośno Górne, Police, Przystronie, Racięcice, Sompolinek, Stefanowo, Sycewo, Wierzbie i Zakrzewek. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: nazwa jest rodzaju nijakiego, więc mówi się „do Sompolna” i „w Sompolnie”, a nie „do Sompolno”. Przymiotnika od nazwy miasta nie używam, bo sam urząd go unika i nie znalazłam poświadczonej formy. I praktyczna: w gminie leży odrębna wieś Sompolinek, a nazwy Biele, Marianowo i Mostki powtarzają się w sąsiednich gminach — przy adresie warto podać gminę.",
  ],
  districts: [],

  nearbyHeading: "Poza Sompolno też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Ślesina, Kleczewa, Konina, Kłodawy, Izbicy Kujawskiej i Goliny — wszędzie bezpłatnie, tak samo jak w samym Sompolnie.",
  ],
  nearbyTowns: ["Ślesin", "Kleczew", "Konin", "Kłodawa", "Izbica Kujawska", "Golina"],

  about: blokOMnie("do Sompolna", "w Sompolnie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sompolna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dwóch sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: nazwa jest rodzaju nijakiego, więc poprawnie jest „do Sompolna” i „w Sompolnie”, a nie „do Sompolno” ani „w Sompolno”; przymiotnika nie używam, bo sam urząd go unika. I praktyczna: w gminie leży odrębna wieś Sompolinek, a nazwy Biele, Marianowo i Mostki powtarzają się w sąsiednich gminach.",
    },
    ...faqWspolne("w Sompolnie"),
    {
      question: "Piszę jadłospis na tydzień i nigdy się go nie trzymam. Co robię źle?",
      answer:
        "Prawdopodobnie nic — po prostu zapisane przegrywa z robionym, i tak jest zwykle. Sompolno jest tu dobrym przykładem: przy lokacji w 1477 roku miasto dostało urzędową nazwę Dębno, zapisaną w dokumencie, a od 1526 roku w źródłach jest już Sompolno. Nazwa używana wygrała z nadaną w niespełna pół wieku. Rozjazd między planem a wykonaniem nie jest dowodem braku dyscypliny, tylko informacją o tym, jak naprawdę wygląda Wasz tydzień. Przez dwa tygodnie zapisujcie nie to, co planujecie, ale to, co ugotowaliście — dostaniecie listę dziesięciu, dwunastu dań i to jest Wasz prawdziwy repertuar. Plany zostawcie do zakupów, tam działają świetnie.",
    },
    {
      question: "Czy Thermomix pomoże mi trzymać się planu posiłków?",
      answer:
        "W trzymaniu się planu — nie, i nie znam urządzenia, które by pomogło. Zmienia co innego: skraca dystans między „nie mam dziś pomysłu” a „jest obiad”. Przy gotowaniu nie trzeba stać i pilnować, bo temperaturę i mieszanie prowadzi samo, a danie powstaje w jednym naczyniu, więc i zmywania jest mniej. Plany rozsypują się zwykle właśnie w tym miejscu — w środku tygodnia, przy zmęczeniu — i to jest jedyne miejsce, w którym sprzęt naprawdę coś zmienia.",
    },
  ],

  geo: { lat: 52.3883, lng: 18.503 },
};
