import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * FRAMPOL — miasto w powiecie biłgorajskim, 1 330 mieszkańców
 * (31.12.2024, GUS). Założone przez Marka Antoniego Butlera
 * (osada od 1705 r.), prawa miejskie odzyskane w 1993 r.
 * Rynek pierwotnie 225 × 225 m, w latach 1851–1852 ZMNIEJSZONY
 * do dzisiejszych ok. 140 × 140 m.
 *
 * KĄT: jak to wygląda na zdjęciu, a jak na talerzu. Frampol jest
 * do tego jedynym właściwym miejscem, bo jest miastem, które
 * DWA RAZY jest czym innym, niż się o nim myśli: jego rynek jest
 * dziś wyraźnie mniejszy niż w legendzie, a dla milionów czytelników
 * Frampol istnieje wyłącznie jako miejsce FIKCYJNE z opowiadań
 * Singera, w którym pisarz nigdy nie mieszkał.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zdjęcia dań są stylizowane i to nie jest oszustwo, tylko
 *   zawód — ale trzeba o tym wiedzieć, zanim się porówna,
 * — że najczęstsze „mnie nie wyszło" to nie jest błąd w gotowaniu,
 *   tylko porównanie z obrazkiem, który nikomu nie wychodzi
 *   sam z siebie,
 * — że urządzenie daje POWTARZALNOŚĆ PROCESU, a nie powtarzalność
 *   wyglądu — i że to są dwie zupełnie różne rzeczy,
 * — i najtrudniejsze: że zdjęcia w bazie przepisów urządzenia,
 *   które sprzedaję, TEŻ są zdjęciami reklamowymi.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO WYŚMIEWANIA osób, które gotują „pod zdjęcie" ani tych,
 *   które publikują swoje dania. To zawód i pasja, nie wada.
 * — ŻADNEJ KRYTYKI konkretnych blogów, kont ani wydawnictw.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD Z DZIEDZINY FOTOGRAFII. Nie znam się i nie będę
 *   udawać, że wiem, jak ustawić światło.
 * — ŻADNEGO SUGEROWANIA, że dania z urządzenia wyglądają lepiej
 *   niż z garnka. Nie wyglądają.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Danie nie wyszło i nie wiadomo
 * dlaczego" (inne miasto) to LISTA DIAGNOSTYCZNA — co sprawdzić
 * po kolei. Tutaj chodzi o coś przeciwnego: o sytuację, w której
 * danie WYSZŁO, a wrażenie porażki bierze się z porównania
 * z obrazkiem. „Powtarzalność" (miasto wzorów) dotyczy tego, żeby
 * za każdym razem wyszło TAK SAMO — tu piszę wprost, że dotyczy
 * to procesu, nie wyglądu. „Odmiany" (Józefów nad Wisłą) tłumaczą
 * różnicę SKŁADNIKIEM; tu chodzi o różnicę między talerzem
 * a fotografią tego samego dania.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — ZNISZCZENIE FRAMPOLA 13 WRZEŚNIA 1939 r. w ĆWICZEBNYM nalocie
 *   Luftwaffe. Fakt sprawdzony (skala: źródła podają 60% albo 90%
 *   zabudowy). NIE UŻYWAM GO. Miasto zbombardowane na próbę nie
 *   jest ozdobnikiem do strony o sprzęcie AGD i nie ma zdania,
 *   którym dałoby się to zrobić przyzwoicie.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ ROKU NADANIA PRAW MIEJSKICH. Krążą 1736, 1738, 1773
 *   i 1789, a część historyków uważa, że właściwy akt lokacyjny
 *   nigdy nie został wydany. Podaję tylko pewne: odzyskanie w 1993 r.
 *   (zgodne w trzech niezależnych źródłach),
 * — NIE PODAJĘ ROKU UTRATY PRAW. Źródła podają 1864 albo 1869,
 * — NIE PISZĘ „jeden z największych rynków w Europie" ANI nie
 *   porównuję go z krakowskim. Zdanie o Europie pojawia się
 *   w wiarygodnym źródle regionalnym, ale BEZ zestawienia
 *   liczbowego z czymkolwiek. To dokładnie ten typ frazy, którą
 *   w tym serwisie odrzucam. Podaję za to same wymiary — i to,
 *   że rynek został zmniejszony, bo to jest sprawdzone i ciekawsze,
 * — NIE ŁĄCZĘ FRAMPOLA Z SITARSTWEM. To rzemiosło należy
 *   do BIŁGORAJA. Tkactwo we Frampolu jest natomiast potwierdzone
 *   (cechy tkacki, szewski i garncarski w 1773 r., tkacze z Krosna
 *   w 1820 r.) — i to jest w tekście,
 * — NIE PISZĘ, że Singer „pochodził z Frampola" ani że miał z nim
 *   związek biograficzny. NIE MIAŁ. Frampol występuje w jego prozie
 *   jako miejsce fikcyjne i dokładnie tak jest to w tekście
 *   opisane — to zresztą jest sedno całego kąta,
 * — NIE PISZĘ o Zrzeszeniu Producentów Owoców i Warzyw „Fram-Pol"
 *   jako o czynnym zakładzie. Sprawdzone: jest W UPADŁOŚCI,
 * — NIE PISZĘ o zakładzie Frost Line. Firma jest aktywna
 *   i rekrutuje we Frampolu, ale nie udało się potwierdzić,
 *   że produkcja fizycznie stoi w mieście (siedziba w Lublinie),
 * — NIE PRZYPISUJĘ FRAMPOLOWI PIROGA BIŁGORAJSKIEGO. Ten wpis
 *   na Liście Produktów Tradycyjnych należy do ZIEMI BIŁGORAJSKIEJ
 *   jako regionu, a nie do tego miasta. Dla samego Frampola nie ma
 *   ani jednego wpisu,
 * — NIE wymyślam osiedli. Brak wykazu w BIP. districts to PUSTA
 *   TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — rynek pierwotnie 225 × 225 m, po przebudowie 1851–1852 ok.
 *   140 × 140 m; autor pierwotnego planu nieznany,
 * — miasto założone przez Marka Antoniego Butlera, osada od 1705 r.,
 *   nazwa od imienia jego żony Franciszki,
 * — prawa miejskie odzyskane w 1993 r.,
 * — tkactwo: cechy tkacki, szewski i garncarski w 1773 r.,
 * — Frampol jako miejsce FIKCYJNE w opowiadaniach Isaaca Bashevisa
 *   Singera („Pan z Krakowa", „Opowieść o trzech życzeniach"),
 * — 1 330 mieszkańców (31.12.2024).
 */
export const FRAMPOL: CityContent = {
  slug: "frampol",
  h1: "Thermomix Frampol – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Frampol — przedstawiciel i cena",
  seoDescription:
    "Thermomix we Frampolu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Frampol — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Frampolu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Frampola z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Frampol i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wyszło dobrze. Po prostu nie wygląda jak na zdjęciu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Frampolu – jak wygląda prezentacja?",
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
      id: "zdjecie",
      heading: "Miasto, które jest czym innym, niż się o nim myśli — i danie, które nie wygląda jak na zdjęciu",
      paragraphs: [
        "Frampol jest znany z rynku. Był pierwotnie ogromny — pierzeje po dwieście dwadzieścia pięć metrów, w miasteczku, które nigdy nie miało nawet dwóch tysięcy mieszkańców. Tyle że w latach 1851–1852 wytyczono w nim dwa dodatkowe bloki zabudowy i rynek zmniejszył się do dzisiejszych mniej więcej stu czterdziestu metrów. Ten drugi fakt podaje się znacznie rzadziej niż pierwszy.",
        "Do tego Frampol istnieje w wyobraźni ludzi, którzy nigdy tu nie byli — bo pisał o nim Isaac Bashevis Singer. Tylko że Singer nie pochodził z Frampola i nie ma z nim związku biograficznego. Jego Frampol jest miejscem fikcyjnym, tłem dla opowieści. Dla wielu czytelników na świecie prawdziwy Frampol to ten z książki, a nie ten, który stoi w powiecie biłgorajskim.",
        "Piszę o tym, bo dokładnie to samo dzieje się z jedzeniem — i to jest najczęstsza przyczyna zdania „mnie to nie wyszło”, jakie słyszę.",
        "Zdjęcia dań są stylizowane. Wszystkie. Sos jest gęstszy, niż byłby po ugotowaniu, bo tak lepiej leży na talerzu. Kolory są poprawione. Danie stoi na jednym z kilkudziesięciu ujęć. To nie jest oszustwo — to jest zawód, tak samo jak zawodem jest robienie zdjęć samochodów albo ubrań. Ale trzeba o tym wiedzieć, zanim postawi się swój talerz obok telefonu i uzna, że coś poszło źle.",
        "Bardzo często nic nie poszło źle. Danie jest ugotowane dobrze, smakuje tak, jak miało smakować, i po prostu wygląda jak obiad, a nie jak fotografia obiadu.",
        "Teraz rzecz o urządzeniu, którą powinnam powiedzieć wprost, chociaż jest niewygodna. Thermomix daje powtarzalność PROCESU: ta sama temperatura, ten sam czas, to samo mieszanie, więc następnym razem wyjdzie tak samo. Nie daje powtarzalności WYGLĄDU. To są dwie różne rzeczy i mieszanie ich to główny sposób, w jaki cała ta branża — moja branża — robi ludziom nadzieje, których potem nie ma kto spełnić.",
        "I najtrudniejsze zdanie na tej stronie: zdjęcia w bazie przepisów urządzenia, które sprzedaję, też są zdjęciami reklamowymi. Robił je ktoś, kto się na tym zna, w świetle, którego nie macie w kuchni. Wasze danie z tego samego przepisu będzie smakować tak samo i wyglądać inaczej. Wolę to powiedzieć teraz niż udawać zaskoczoną trzy miesiące po zakupie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Frampolu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli jest danie, które próbowaliście z przepisu i uznaliście, że nie wyszło — powiedzcie mi o nim. Zrobimy je razem i zobaczycie, czy problem był w gotowaniu, czy w porównaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Frampolu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla frampolskiej rodziny",
      paragraphs: [
        "Frampol liczy nieco ponad tysiąc trzysta mieszkańców — to jedno z najmniejszych miast w tej części kraju. Prawa miejskie odzyskał w 1993 roku. Tkactwo, z którego kiedyś żył, ma tu potwierdzone cechy już w 1773 roku; sitarstwo, które czasem się tu dokleja, należy do Biłgoraja i nie do Frampola.",
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

  districtsHeading: "Do których części Frampola dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Frampol też przyjadę",
  nearbyParagraphs: [
    "Biłgoraj, Janów Lubelski, Modliborzyce, Zwierzyniec i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Biłgoraj", "Janów Lubelski", "Modliborzyce", "Zwierzyniec", "Szczebrzeszyn", "Zamość"],

  about: blokOMnie("do Frampola", "we Frampolu i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Frampola bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("we Frampolu"),
    {
      question: "Robię z przepisu, a moje danie nigdy nie wygląda jak na zdjęciu. Co robię źle?",
      answer:
        "Najczęściej nic. Zdjęcia dań są stylizowane — sos gęstszy, kolory poprawione, jedno ujęcie z kilkudziesięciu. To zawód, nie oszustwo, ale porównywanie z nim własnego talerza kończy się zawsze tak samo. Jeśli danie smakuje tak, jak miało, to wyszło. Jeśli podejrzewacie coś innego, jest osobna lista rzeczy do sprawdzenia po kolei — i chętnie zrobię takie danie z Wami na prezentacji.",
    },
    {
      question: "Czy dania z Thermomixa wyglądają lepiej niż z garnka?",
      answer:
        "Nie. Urządzenie daje powtarzalność procesu — tę samą temperaturę, ten sam czas, to samo mieszanie, więc następnym razem wyjdzie tak samo. Wygląd zależy od tego, jak coś ułożycie na talerzu, i to się nie zmienia. Zdjęcia w bazie przepisów samego urządzenia też są reklamowe i wolę powiedzieć to od razu.",
    },
  ],

  geo: { lat: 50.6772, lng: 22.6708 },
};
