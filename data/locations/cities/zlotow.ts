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
 * ZŁOTÓW — powiat złotowski (siedziba),
 * woj. wielkopolskie. ⚠⚠⚠ GMINA MIEJSKA — miasto jest
 * osobną gminą.
 * MIASTO: 18 025 mieszkańców (GUS 31.12.2024), 11,6 km²
 *   (faktycznie 11,58), gęstość 1 556,6 os./km²
 *   [ZW, domyka się w obu wariantach]. PODAJĘ.
 * ⚠⚠⚠ ODRĘBNA GMINA WIEJSKA ZŁOTÓW — 10 032 osoby,
 *   292,3 km², gęstość 34 os./km² [ZW, domyka się].
 *   ⚠⚠⚠ NIE OBEJMUJE MIASTA. Gmina obwarzankowa.
 *   43 wsie i osady: m.in. Radawnica, Sławianowo,
 *   Stawnica, Kleszczyna, Blękwit, Dzierzążenko,
 *   Górzna, Święta, Nowa Święta, Klukowo, Zalesie.
 *   ⚠⚠⚠ NIGDY „gmina Złotów liczy 10 032 mieszkańców"
 *   bez słowa WIEJSKA.
 *   ⚠ TRZY JEDNOSTKI „ZŁOTÓW": miasto, gmina wiejska,
 *   powiat. NIE MYLIĆ.
 * ⚠⚠⚠ UDZIAŁU LUDNOŚCIOWEGO GMINY WIEJSKIEJ
 *   W POWIECIE NIE PODAJĘ — nie domyka się (14,4 %
 *   w źródle, 14,96 % z dzielenia).
 * WYSOKOŚĆ: 110 m n.p.m. Rzeka: Głomia.
 * ⚠ GEO: 53,3638 / 17,0406.
 *
 * ⚠⚠ ODMIANA — REGULARNA, Ó→O:
 *   D. do ZŁOTOWA · Ms. w ZŁOTOWIE · N. Złotowem.
 *   Przymiotnik: ZŁOTOWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZW — LICZNE:
 *   ZŁOTORYJA (dolnośląskie, opisana w tym cyklu) ·
 *   ZŁOTY STOK (dolnośląskie) · ZŁOTORIA (dwie wsie:
 *   kuj.-pom. i podlaska) · ZŁOTNIKI (wiele).
 *   ⚠ ROZGRANICZAM W FAQ.
 *   ⚠ Wieś WĄSOSZ w gminie wiejskiej Złotów ≠ WĄSOSZ
 *     (miasto w dolnośląskim, opisane w tym cyklu).
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — GRODZISKO: ok. 700 r. n.e.
 *   — PIERWSZA WZMIANKA: 1370 r.
 *   — PRAWA MIEJSKIE: „przed 1370 r." albo „2. połowa
 *     XIV w." ⚠⚠⚠ [SP]. ŹRÓDŁA ZGADZAJĄ SIĘ CO DO
 *     STULECIA, NIE CO DO ROKU.
 *     ⚠⚠⚠ NIE PODAJĘ 1370 JAKO ROKU LOKACJI — to rok
 *     pierwszej wzmianki. PISZĘ „w drugiej połowie
 *     XIV wieku".
 *   — KOLEJ: 1871 r. ⚠⚠ WYŁĄCZNIE DATA W TLE.
 *   — RATUSZ: 1912–1913 r. ⚠ Pierwszego ratusza
 *     i jego zniszczenia NIE OPISUJĘ — pożar jako
 *     żywioł wykluczony.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — OPISU WIĘCEJ NIŻ RZECZY:
 *   SZLAK ZŁOTOWSKIEGO JELENIA:
 *     — DZIEWIĘĆ PRZYSTANKÓW,
 *     — DWANAŚCIE TABLIC INFORMACYJNYCH,
 *     — 3 km, ok. 60 minut.
 *   ⚠⚠⚠ TRZY TABLICE PONAD LICZBĘ PRZYSTANKÓW.
 *   ARYTMETYKA SPRAWDZONA: 12 − 9 = 3.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE TO BŁĄD ANI ŻE TABLICE SĄ
 *   ZBĘDNE. Wprost dopuszczam, że trzy dodatkowe mogą
 *   być wstępem, mapą i podsumowaniem. Kąt jest
 *   o proporcji, nie o zarzucie.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — promenada nad Jeziorem Miejskim: 4 km;
 *   pięć parków miejskich,
 * — wody 9 %, lasy 18 %, tereny zielone 10 % —
 *   razem 37 % powierzchni miasta.
 *   ⚠ SUMA SIĘ ZGADZA (9+18+10=37). PODAJĘ.
 *   ⚠⚠⚠ POWIERZCHNI JEZIOR NIE SUMUJĘ — tam suma się
 *   NIE zgadza, a figura „spis, który się nie sumuje"
 *   jest zajęta (Międzybórz).
 * — ⚠⚠ KOŚCIOŁÓW, SYNAGOGI I LAPIDARIUM NIE OPISUJĘ
 *   — wyznaniowe. ANI SŁOWA.
 * — ⚠⚠ WIEŻY BISMARCKA NIE WYMIENIAM — nazwa
 *   niemiecka.
 * — ⚠⚠ ZARAZY 1709–1711 NIE UŻYWAM.
 * — ⚠⚠ SPALENIA MIASTA (1455, 1657) NIE UŻYWAM.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW POZA DŁUGOŚCIĄ SZLAKU
 *   I PROMENADY.
 *
 * KĄT: WIĘCEJ TABLIC NIŻ PRZYSTANKÓW
 * — o tym, że opis potrafi rosnąć szybciej niż rzecz,
 * którą opisuje. Kąt ze Szlaku Złotowskiego Jelenia:
 * dziewięć przystanków, dwanaście tablic.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że szlak ma dziewięć przystanków i dwanaście
 *   tablic informacyjnych na trzech kilometrach,
 * — ŻE TABLIC JEST O TRZY WIĘCEJ NIŻ PUNKTÓW, KTÓRE
 *   OPISUJĄ. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE TO NIE JEST ZARZUT — trzy dodatkowe mogą być
 *   wstępem, mapą i podsumowaniem, i tak bywa
 *   sensownie,
 * — ⚠⚠ ŻE W KUCHNI TA PROPORCJA POTRAFI SIĘ WYMKNĄĆ:
 *   zapisanych przepisów bywa dziesięć razy więcej niż
 *   ugotowanych, list zakupowych więcej niż zakupów,
 *   a planów tygodnia więcej niż tygodni,
 * — ⚠⚠ ŻE TO NIE JEST LENISTWO, tylko złudzenie
 *   posuwania się naprzód: opisywanie przypomina
 *   robienie i daje podobną ulgę,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: policz oba. Ile przepisów
 *   zapisałaś w tym miesiącu i ile z nich ugotowałaś.
 *   Jeśli pierwsza liczba rośnie szybciej, to nie brak
 *   wiedzy Cię zatrzymuje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część opisu naprawdę
 *   pracuje — lista zakupów jest opisem, który oszczędza
 *   drugi wyjazd do sklepu. ROZRÓŻNIK: czy ten opis
 *   uruchamia działanie, czy je zastępuje,
 * — ⚠ UCZCIWIE O SPRZĘCIE: z urządzeniem przychodzi
 *   ogromny zbiór przepisów i BARDZO ŁATWO SPĘDZIĆ
 *   WIĘCEJ CZASU NA PRZEGLĄDANIU NIŻ NA GOTOWANIU.
 *   MÓWIĘ TO WPROST — to realne ryzyko, nie drobiazg.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam chodziło o nadmiar
 *   przedmiotów wobec możliwości ich użycia; tu
 *   o nadmiar opisu wobec rzeczy, którą opisuje.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO CZTERDZIESTU PIĘCIU HEKTARÓW BEZ
 *   KATEGORII — kąt zajęty (Międzybórz). ŻADNEGO
 *   SUMOWANIA, KTÓRE SIĘ NIE ZGADZA.
 * — ⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt
 *   zajęty (Bierutów).
 * — ⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły, ta sama fala).
 * — ⚠⚠ ZERO NAJWYŻSZE NIE ZNACZY WYSOKIE — kąt zajęty
 *   (Chodzież, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM, MAREK I PLATFORM Z PRZEPISAMI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW I ZARAZ · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „gmina Złotów" bez słowa WIEJSKA, gdy
 *   chodzi o gminę obwarzankową.
 * — NIE PODAJĘ 1370 jako roku nadania praw miejskich.
 * — NIE TWIERDZĘ, że trzy dodatkowe tablice są zbędne.
 * — NIE SUMUJĘ powierzchni jezior.
 * — NIE PODAJĘ udziału gminy wiejskiej w ludności
 *   powiatu.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Złotów jest siedzibą powiatu złotowskiego i osobną
 *   gminą miejską; miasto liczy 18 025 mieszkańców
 *   (GUS, 31.12.2024) na 11,6 km², czyli 1 556,6 osoby
 *   na kilometr kwadratowy, leży nad Głomią na wysokości
 *   110 m n.p.m.,
 * — otaczająca gmina wiejska Złotów jest odrębną
 *   jednostką: 10 032 osoby na 292,3 km², czyli 34 osoby
 *   na kilometr, i 43 wsie oraz osady,
 * — grodzisko powstało tu około 700 r. n.e., pierwsza
 *   wzmianka pochodzi z 1370 r., a prawa miejskie
 *   miasto otrzymało w drugiej połowie XIV w.,
 * — kolej dotarła w 1871 r., ratusz pochodzi z lat
 *   1912–1913,
 * — wody zajmują 9 %, lasy 18 %, a tereny zielone 10 %
 *   powierzchni miasta — razem 37 %; nad Jeziorem
 *   Miejskim biegnie czterokilometrowa promenada,
 *   a w mieście jest pięć parków,
 * — Szlak Złotowskiego Jelenia liczy dziewięć
 *   przystanków, dwanaście tablic informacyjnych,
 *   3 km i zajmuje około godziny.
 */
export const ZLOTOW: CityContent = {
  slug: "zlotow",
  h1: "Thermomix Złotów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Złotów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Złotowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Złotów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Złotowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Złotowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Złotów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dziewięć przystanków. Dwanaście tablic.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Złotowie – jak wygląda prezentacja?",
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
      id: "wiecej-tablic",
      heading: "Więcej tablic niż przystanków",
      paragraphs: [
        "Szlak Złotowskiego Jelenia ma trzy kilometry, zajmuje około godziny i prowadzi przez dziewięć przystanków.",
        "Tablic informacyjnych jest dwanaście.",
        "Nie robię z tego zarzutu i nie twierdzę, że trzy dodatkowe są zbędne — całkiem możliwe, że to wstęp, mapa i podsumowanie, a wtedy wszystko jest w porządku. Zatrzymuję się przy samej proporcji, bo w kuchni wymyka się ona częściej, niż ktokolwiek chce przyznać.",
        "Przepisów zapisanych „na kiedyś” bywa dziesięć razy więcej niż ugotowanych. Zdjęć potraw w telefonie więcej niż potraw. Planów tygodnia więcej niż tygodni, w których ten plan przetrwał do czwartku.",
        "I to nie jest lenistwo — to jest złudzenie posuwania się naprzód. Zapisanie przepisu przypomina zrobienie czegoś w sprawie obiadu i daje bardzo podobną ulgę. Tyle że obiad z tego nie powstaje.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że narzędzi bywa więcej niż rąk. Tam chodziło o nadmiar przedmiotów wobec możliwości ich użycia. Tu o coś innego — o nadmiar opisu wobec rzeczy, którą opisuje.",
        "Ruch jest jeden i jest nieprzyjemnie prosty. Policz oba. Ile przepisów zapisałaś w tym miesiącu i ile z nich naprawdę ugotowałaś. Jeśli pierwsza liczba rośnie szybciej od drugiej, to znaczy, że nie zatrzymuje Cię brak wiedzy — a przez brak wiedzy zwykle właśnie tłumaczymy sobie ten stan.",
        "Uczciwie o drugiej stronie: część opisu naprawdę pracuje. Lista zakupów jest opisem, który oszczędza drugi wyjazd do sklepu. Zapisana kolejność czynności potrafi skrócić obiad o kwadrans. Rozróżnik jest jeden: czy ten opis uruchamia działanie, czy je zastępuje.",
        "I uczciwie o sprzęcie, bo to akurat jego słaby punkt. Z Thermomixem przychodzi ogromny zbiór przepisów i bardzo łatwo spędzić więcej czasu na przeglądaniu niż na gotowaniu. Widziałam to wiele razy i uważam za realne ryzyko, nie za drobiazg. Radzę od początku ustawić to odwrotnie: najpierw pięć dań, które i tak robicie, a przeglądanie dopiero wtedy, gdy któreś się znudzi.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Złotowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie danie od dawna chcecie zrobić i ciągle nie robicie. Bardzo możliwe, że zrobimy je na spotkaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Złotowie"),
    sekcjaRaty("w Złotowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Złotowa",
      paragraphs: [
        "Złotów jest siedzibą powiatu złotowskiego i osobną gminą miejską. Miasto liczy 18 025 mieszkańców (GUS, 31.12.2024) na 11,6 kilometra kwadratowego, czyli tysiąc pięćset pięćdziesiąt sześć osób na kilometr, i leży nad Głomią na wysokości stu dziesięciu metrów nad poziomem morza. Otaczająca je gmina wiejska Złotów to osobna jednostka — 10 032 osoby na 292,3 kilometra, czyli trzydzieści cztery osoby na kilometr, i czterdzieści trzy wsie oraz osady. Wody zajmują dziewięć procent powierzchni miasta, lasy osiemnaście, a tereny zielone dziesięć — razem trzydzieści siedem procent; nad Jeziorem Miejskim biegnie czterokilometrowa promenada, a parków jest pięć. Grodzisko powstało tu około siedemsetnego roku, pierwsza wzmianka pochodzi z 1370 roku, a prawa miejskie miasto otrzymało w drugiej połowie czternastego wieku — samego roku lokacji źródła nie podają zgodnie. Kolej dotarła w 1871, ratusz pochodzi z lat 1912–1913.",
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

  districtsHeading: "Do których części Złotowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — nad Jezioro Miejskie, na osiedla i do centrum — bez dopłaty.",
    "Dojeżdżam też do wsi otaczającej gminy wiejskiej: Radawnicy, Sławianowa i Sławianówka, Stawnicy, Kleszczyny, Blękwitu, Dzierzążenka, Górznej, Świętej i Nowej Świętej, Klukowa, Zalesia i pozostałych. Przy umawianiu warto podać pełną nazwę — kilka wsi występuje w parach różniących się końcówką.",
  ],
  districts: [],

  nearbyHeading: "Poza Złotów też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Krajenki, Jastrowia, Okonka, Łobżenicy i Piły — wszędzie bezpłatnie, tak samo jak w samym Złotowie.",
  ],
  nearbyTowns: ["Krajenka", "Jastrowie", "Okonek", "Łobżenica", "Piła"],

  about: blokOMnie("do Złotowa", "w Złotowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Złotowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w otaczającej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: miasto Złotów i gmina wiejska Złotów to dwie osobne jednostki, więc warto podać nazwę wsi. I łatwo pomylić Złotów ze Złotoryją albo Złotym Stokiem — to miasta w województwie dolnośląskim.",
    },
    ...faqWspolne("w Złotowie"),
    {
      question: "Mam zapisane setki przepisów i nic z nich nie gotuję. Co robię źle?",
      answer:
        "Prawdopodobnie mylisz opis z działaniem — i to bardzo powszechne. Szlak Złotowskiego Jelenia ma dziewięć przystanków i dwanaście tablic: opisu bywa więcej niż rzeczy. W kuchni ta proporcja potrafi urosnąć do absurdu, bo zapisanie przepisu przypomina zrobienie czegoś w sprawie obiadu i daje podobną ulgę. Policz jedno i drugie: ile przepisów zapisałaś w tym miesiącu i ile ugotowałaś. Jeśli pierwsza liczba rośnie szybciej, to nie brak wiedzy Cię zatrzymuje.",
    },
    {
      question: "Czy z Thermomixem dostaje się przepisy?",
      answer:
        "Tak, i to bardzo dużo — co jest zaletą i jednocześnie jego słabym punktem. Widziałam sporo osób, które spędzały więcej czasu na przeglądaniu niż na gotowaniu. Radzę ustawić to odwrotnie: zacznijcie od pięciu dań, które i tak robicie co tydzień, i przenieście je do urządzenia. Przeglądanie zostawcie na moment, w którym któreś z nich się znudzi. Na prezentacji pokazuję dokładnie ten sposób.",
    },
  ],

  geo: { lat: 53.3638, lng: 17.0406 },
};
