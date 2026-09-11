import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * SĘDZISZÓW — miasto w powiecie jędrzejowskim, woj. ŚWIĘTOKRZYSKIE,
 * 6 083 mieszkańców (31.12.2024, GUS). Miasto uformowało się wokół
 * stacji kolejowej z 1885 r., a prawa miejskie dostało w 1990 r. —
 * to jedno z najmłodszych miast w Polsce.
 *
 * UWAGA — DWA SĘDZISZOWY. Ten (świętokrzyski, powiat jędrzejowski)
 * i SĘDZISZÓW MAŁOPOLSKI (podkarpackie), który ma prawa miejskie
 * NIEPRZERWANIE od 1483 r. i ma w tym serwisie własną stronę.
 * Przy każdym fakcie trzeba sprawdzać województwo.
 *
 * KĄT: strączki — fasola, groch, ciecierzyca, soczewica. Jedyne
 * miejsce w serwisie, gdzie ten surowiec jest tematem. Młode miasto
 * zbudowane wokół zakładu i stacji, zamieszkane przez ludzi, którzy
 * przyjechali tu do pracy, jest dobrym miejscem na jedzenie tanie,
 * sycące i wymagające wyłącznie cierpliwości.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie zdejmuje PILNOWANIE (nie przywrze, nie wykipi),
 *   ale NIE SKRÓCI MOCZENIA — a moczenie to większość tej roboty,
 * — że to jest inne ograniczenie niż przy kaszy: tam problemem jest
 *   konsystencja, tu CZAS, którego nie da się przeskoczyć,
 * — że z ugotowanych strączków robi się w tym samym naczyniu pasty
 *   i hummus i to jest realna wygoda,
 * — i uczciwie: puszka jest szybsza i nie będę udawać, że nie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW MOCZENIA ANI GOTOWANIA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (białko roślinne, błonnik,
 *   „zamiennik mięsa"). To nie jest strona dietetyczna.
 * — ŻADNYCH PORAD O WZDĘCIACH, TRAWIENIU ani o tym, co komu
 *   „służy". To dziedzina medyczna.
 * — ŻADNYCH PORAD O SUROWEJ FASOLI i jej bezpieczeństwie — to
 *   dziedzina bezpieczeństwa żywności, nie moja, i zakaz jest tu
 *   szczególnie ostry, bo pytanie pada często.
 * — ŻADNEJ KRYTYKI strączków z puszki ani producentów.
 * — ŻADNEGO IDEOLOGIZOWANIA. Nie namawiam nikogo na jedzenie
 *   roślinne ani od niego nie odwodzę.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Kasza" (Dukla) dotyczy ziarna
 * zbożowego, a problemem jest tam KONSYSTENCJA. „Czego nie da się
 * przyspieszyć" (miasto browaru) dotyczy WARZENIA I FERMENTACJI,
 * czyli procesów biologicznych — moczenie to zwykłe nasiąkanie wodą
 * i tekst mówi o tym wprost, żeby się nie powtarzać. „Gotowanie
 * postne" dotyczy powodu, dla którego ktoś nie je mięsa, a nie
 * surowca. „Ziemniaki" (Nowa Sarzyna) to inny składnik podstawowy.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — BOMBARDOWANIE POCIĄGÓW EWAKUACYJNYCH na stacji w Sędziszowie
 *   we wrześniu 1939 r. Fakt sprawdzony. NIE UŻYWAM GO — to nie
 *   jest ozdobnik do strony o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, ŻE SĘDZISZÓW „ODZYSKAŁ" PRAWA MIEJSKIE. Oficjalna
 *   historia gminy nie wspomina o żadnej wcześniejszej utracie —
 *   wszystko wskazuje na PIERWSZE NADANIE w 1990 r. To była
 *   hipoteza robocza i została obalona,
 * — NIE PODAJĘ DZIENNEJ DATY nadania praw miejskich. Trzy źródła
 *   podają trzy różne daty w 1990 r. (1 stycznia, 14 lutego,
 *   30 czerwca). Podaję tylko rok,
 * — NIE PISZĘ, że Sędziszów leży przy Centralnej Magistrali
 *   Kolejowej. NIE LEŻY. To linia nr 8 (Warszawa–Kraków),
 *   modernizowana do ok. 2030 r. CMK to linia nr 4 — inna trasa.
 *   Hipoteza sprawdzona i obalona,
 * — NIE PODAJĘ liczby zatrudnionych w tutejszej fabryce kotłów.
 *   Nie ustalono. Piszę tylko, że zakład działa — bez nazwy, bo
 *   nie reklamuję cudzych działalności,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Sędziszowa nic nie znaleziono,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — stacja kolejowa z 1885 r., wokół której uformowało się miasto,
 * — prawa miejskie w 1990 r. — jedno z najmłodszych miast w Polsce,
 * — miasto leży przy linii kolejowej nr 8 Warszawa–Kraków,
 *   modernizowanej do ok. 2030 r.,
 * — działa tu fabryka kotłów,
 * — 6 083 mieszkańców (31.12.2024).
 */
export const SEDZISZOW: CityContent = {
  slug: "sedziszow",
  h1: "Thermomix Sędziszów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sędziszów (świętokrzyskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sędziszowie w świętokrzyskiem: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sędziszów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sędziszowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sędziszowa w świętokrzyskiem z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Sędziszów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pilnowania nie będzie. Moczenia — owszem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sędziszowie – jak wygląda prezentacja?",
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
      id: "straczki",
      heading: "Miasto, które wyrosło przy stacji — czyli o fasoli, grochu i ciecierzycy",
      paragraphs: [
        "Sędziszów w świętokrzyskiem jest jednym z najmłodszych miast w Polsce — prawa miejskie dostał dopiero w 1990 roku, i to po raz pierwszy, a nie w ramach odzyskiwania czegoś, co kiedyś miał. Wyrósł wokół stacji kolejowej otwartej w 1885 roku i wokół pracy, którą ta stacja przyniosła. Do dziś działa tu fabryka kotłów, a linia Warszawa–Kraków, przy której miasto leży, jest w trakcie modernizacji.",
        "Warto tu dodać jedno zdanie, bo to częsta pomyłka: Sędziszów Małopolski to zupełnie inne miasto, w podkarpackiem, z prawami miejskimi nieprzerwanie od 1483 roku. Ma w tym serwisie własną stronę.",
        "Napiszę tutaj o jedzeniu, które pasuje do miasta zbudowanego wokół pracy: o strączkach. Fasola, groch, ciecierzyca, soczewica.",
        "To jest jedzenie tanie, sycące i w zasadzie niewymagające umiejętności — wymaga tylko cierpliwości. I dokładnie w tym miejscu urządzenie robi połowę roboty, a drugiej nie ruszy, więc powiem, która jest która.",
        "Co zdejmuje: pilnowanie. Fasola i groch przywierają do dna i kipią, a robią to zwykle wtedy, gdy ktoś wyszedł z kuchni na dziesięć minut. W zamkniętym naczyniu z trzymaną temperaturą to po prostu nie ma jak się zdarzyć. Nastawiacie i wychodzicie — i to jest przy tym akurat jedzeniu duża rzecz, bo gotuje się długo.",
        "Czego nie zdejmie, i tu jestem bezwzględna: moczenia. Fasola musi się namoczyć i żaden sprzęt tego nie przeskoczy, bo to nie jest kwestia mocy ani temperatury, tylko tego, ile czasu ziarno potrzebuje, żeby nasiąknąć wodą. Kto planuje obiad o osiemnastej, a decyzję podejmuje o siedemnastej, ten i tak zje coś innego. To jest jedyne ograniczenie tej strony i nie da się go obejść.",
        "Co dochodzi na końcu i jest naprawdę wygodne: z ugotowanych strączków robi się w tym samym naczyniu pasty. Hummus, pasta z białej fasoli, pasta z soczewicy — bez przekładania, bez drugiego sprzętu, bez mycia trzech rzeczy. Gotowanie i miksowanie dzieją się w jednym miejscu i to jest ta część, dla której w ogóle warto.",
        "I uczciwie, na koniec: puszka jest szybsza. Jeśli ktoś je ciecierzycę raz na miesiąc, puszka wygra i nie będę udawać inaczej. Sens zaczyna się przy regularności — gdy strączki są u Was co tydzień i gotuje się je od razu większą ilością.",
        "Czego nie doradzę: niczego o surowej fasoli i jej bezpieczeństwie ani niczego o trawieniu i wzdęciach. Pierwsze to dziedzina bezpieczeństwa żywności, drugie — medycyna. Ani jedno, ani drugie nie jest pytaniem do przedstawicielki handlowej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sędziszowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przy umawianiu warto zaznaczyć, że chodzi o Sędziszów w świętokrzyskiem — bo drugie miasto o tej nazwie leży w podkarpackiem i też do niego jeżdżę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sędziszowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sędziszowskiej rodziny",
      paragraphs: [
        "Sędziszów liczy nieco ponad sześć tysięcy mieszkańców i jest miastem dopiero od 1990 roku — to jedno z najmłodszych miast w kraju. Uformował się wokół stacji kolejowej z 1885 roku i wokół pracy, którą ona przyniosła.",
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

  districtsHeading: "Do których części Sędziszowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Sędziszów też przyjadę",
  nearbyParagraphs: [
    "Jędrzejów, Włoszczowa, Małogoszcz, Wodzisław, Miechów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Jędrzejów", "Włoszczowa", "Małogoszcz", "Miechów", "Kielce", "Szczekociny"],

  about: blokOMnie("do Sędziszowa", "w Sędziszowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sędziszowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu warto zaznaczyć, że chodzi o Sędziszów w świętokrzyskiem — drugie miasto o tej nazwie leży w podkarpackiem.",
    },
    ...faqWspolne("w Sędziszowie"),
    {
      question: "Czy ugotuję w tym fasolę bez moczenia?",
      answer:
        "Nie. Moczenia nie da się przeskoczyć żadnym sprzętem — to nie jest kwestia mocy ani temperatury, tylko tego, ile czasu ziarno potrzebuje, żeby nasiąknąć wodą. Urządzenie zdejmuje natomiast pilnowanie: fasola nie przywrze i nie wykipi, bo naczynie jest zamknięte, a temperatura trzymana. Nastawiacie i wychodzicie z kuchni.",
    },
    {
      question: "Czy warto gotować strączki samemu, skoro są w puszkach?",
      answer:
        "Przy jednym daniu na miesiąc — puszka wygra i nie będę udawać inaczej. Sens zaczyna się przy regularności: gdy gotujecie od razu większą ilość, a potem z tego samego naczynia robicie hummus albo pastę, bez przekładania i bez drugiego sprzętu. To ta końcówka jest wygodna, nie samo gotowanie.",
    },
  ],

  geo: { lat: 50.5589, lng: 20.0575 },
};
