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
 * CHODZIEŻ — powiat chodzieski (siedziba),
 * woj. wielkopolskie. ⚠⚠⚠ GMINA MIEJSKA — miasto jest
 * osobną gminą.
 * MIASTO: 17 173 mieszkańców (GUS 31.12.2024), 12,8 km²
 *   (faktycznie 12,77), gęstość 1 344,8 os./km²
 *   [ZW, domyka się w obu wariantach]. PODAJĘ.
 * ⚠⚠⚠ ODRĘBNA GMINA WIEJSKA CHODZIEŻ — 6 164 osoby,
 *   213,0 km², gęstość 29 os./km² [ZW, domyka się].
 *   ⚠⚠⚠ NIE OBEJMUJE MIASTA. To gmina obwarzankowa.
 *   ⚠⚠⚠ NIGDY NIE PISZĘ „gmina Chodzież liczy 6 164
 *   mieszkańców" bez słowa WIEJSKA. NAJCZĘSTSZY BŁĄD
 *   W ŹRÓDŁACH.
 *   25 miejscowości: m.in. Milcz, Podanin, Rataje,
 *   Stróżewo, Stróżewko, Stróżewice, Studzieniec,
 *   Strzelce, Strzelęcin, Zacharzyn, Nietuszkowo,
 *   Oleśnica, Kamionka.
 * WYSOKOŚĆ MIASTA: 62 m n.p.m.
 * ⚠ GEO: 52,9953 / 16,9199.
 *
 * ⚠⚠⚠ ODMIANA — PUŁAPKA PRZYMIOTNIKOWA:
 *   D. do CHODZIEŻY · Ms. w CHODZIEŻY (FORMY
 *   IDENTYCZNE) · N. Chodzieżą.
 *   ⚠⚠⚠ PRZYMIOTNIK: CHODZIESKI. NIGDY „chodzieżski".
 *   POWIAT CHODZIESKI. SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠⚠ BŁĄD: „w Chodzieżu".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZW: CHODECZ (kuj.-pom., opisany w tym
 *   cyklu), CHOCZ i CHODÓW (wielkopolskie).
 *   ⚠ CHOCZ jest w wielkopolskiej liście do opisania —
 *   NIE MYLIĆ.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1403 r. ⚠ [SP — źródła podają
 *     też 1406 i 1409]. PISZĘ „1403 r., choć źródła
 *     podają też lata 1406 i 1409".
 *   — PRAWA MIEJSKIE: 3 MARCA 1434 r., prawo
 *     magdeburskie, Władysław Jagiełło.
 *     ⚠ ZGODNE WE WSZYSTKICH ŹRÓDŁACH — rzadkość.
 *     PODAJĘ Z DATĄ DZIENNĄ.
 *   — Utraty praw nie odnotowano.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SUPERLATYW, KTÓRY NIE MÓWI
 *   O ROZMIARZE:
 *   GONTYNIEC — 192 m n.p.m., opisywany jako
 *   NAJWYŻSZE WZNIESIENIE PÓŁNOCNEJ POLSKI.
 *   MIASTO CHODZIEŻ — 62 m n.p.m.
 *   ⚠⚠⚠ RÓŻNICA: 130 M. ARYTMETYKA SPRAWDZONA:
 *   192 − 62 = 130.
 *   ⚠⚠⚠ SEDNO: 192 metry to „najwyższe" wyłącznie
 *   w obrębie zbioru. W innym zbiorze nie byłoby to
 *   nawet wzgórze. STOPIEŃ NAJWYŻSZY OPISUJE MIEJSCE
 *   W ZBIORZE, NIE POZIOM.
 *   ⚠⚠ WYSOKOŚĆ SPORNA [SP]: 192 m (en-wiki)
 *   albo 194 m (prasa regionalna). PISZĘ „192 albo 194"
 *   I MÓWIĘ, ŻE ŹRÓDŁA SIĘ RÓŻNIĄ. ⚠⚠ TEJ ROZBIEŻNOŚCI
 *   NIE ROBIĘ KĄTEM.
 *   ⚠⚠⚠ GONTYNIEC LEŻY W GMINIE WIEJSKIEJ, NIE
 *   W MIEŚCIE. PISZĘ TO WPROST.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — jeziora w granicach miasta: Miejskie, Karczewnik,
 *   Strzeleckie. ⚠⚠⚠ ICH POWIERZCHNI NIE SUMUJĘ —
 *   figura „spis, który się nie sumuje" zajęta
 *   (Międzybórz). WYMIENIAM SAME NAZWY.
 * — ⚠⚠⚠ CIĄGU DAT GOSPODARCZYCH (1656 → 1805 → 1852
 *   → 1879 → 1897) NIE UŻYWAM — malejące odstępy
 *   kolidują z Węglińcem i Niemczą.
 * — ⚠⚠ FABRYK FAJANSU I PORCELANY NIE OPISUJĘ —
 *   wątek przemysłowy i ryzyko porad o naczyniach.
 * — ⚠⚠ KOŚCIOŁÓW I DZWONNICY NIE OPISUJĘ —
 *   wyznaniowe.
 * — ⚠⚠ SPISU Z 1458 R. (dwóch żołnierzy) NIE UŻYWAM
 *   — WĄTEK MILITARNY, WYKLUCZONY.
 * — ⚠⚠ POŻARU MIASTA (1798) NIE UŻYWAM.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: NAJWYŻSZE NIE ZNACZY WYSOKIE
 * — o tym, że stopień najwyższy opisuje miejsce
 * w zbiorze, a nie poziom. Kąt z Gontyńca: najwyższe
 * wzniesienie północnej Polski ma 192 metry.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Gontyniec w gminie wiejskiej Chodzież bywa
 *   nazywany najwyższym wzniesieniem północnej Polski
 *   i ma 192 albo 194 metry, a samo miasto leży na 62,
 * — ŻE „NAJWYŻSZE" JEST TU PRAWDĄ O ZBIORZE, NIE
 *   O WYSOKOŚCI. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE TO NIE JEST ZARZUT WOBEC GONTYŃCA —
 *   sto trzydzieści metrów nad miastem to realna
 *   różnica i widać ją gołym okiem,
 * — ⚠⚠ ŻE W KUCHNI SUPERLATYWY DZIAŁAJĄ TAK SAMO:
 *   „mój najlepszy obiad", „najszybsze danie",
 *   „najgorsze, co gotuję" — wszystkie opisują pozycję
 *   w Twoim zbiorze, a nie poziom bezwzględny,
 * — ⚠⚠ ŻE DZIAŁA TO W OBIE STRONY I DRUGA STRONA JEST
 *   WAŻNIEJSZA: „najgorsze, co gotuję" bywa daniem,
 *   które u kogoś innego byłoby zupełnie w porządku,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: kiedy używasz stopnia
 *   najwyższego, dopowiedz zbiór. „Najszybsze danie,
 *   jakie znam" to zupełnie inne zdanie niż
 *   „najszybsze danie",
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: mały zbiór to nie wada.
 *   Cztery dania, które wszyscy lubią, są lepsze niż
 *   dwadzieścia, z których połowa się nie udaje,
 * — ⚠ UCZCIWIE O SPRZĘCIE: „najlepsze urządzenie"
 *   to zawsze zdanie o zbiorze. MÓWIĘ WPROST, że nie
 *   znam wszystkich sprzętów na rynku i że pytanie
 *   brzmi, czy pasuje do Waszej kuchni, a nie czy
 *   wygrywa ranking.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły, TA SAMA FALA).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam dwie osoby liczyły tę samą rzecz
 *   od innej granicy; tu liczba jest bezsporna, a myli
 *   dopiero słowo, które się do niej dokłada.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PIĘTNASTU EGZEMPLARZY, NIE GATUNKÓW —
 *   kąt zajęty (Polanica-Zdrój).
 * — ⚠⚠ ZERO STAŻ NIE PRZEKŁADA SIĘ NA ROZMIAR — kąt
 *   zajęty (Nowogrodziec).
 * — ⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie).
 * — ⚠⚠ ZERO DZIESIĘCIU METRÓW DROGI NA METR W GÓRĘ —
 *   kąt zajęty (Szczawno-Zdrój). ⚠⚠⚠ TAM TEŻ SĄ METRY
 *   WYSOKOŚCI. ŻADNYCH PROPORCJI NACHYLENIA W TEJ
 *   SEKCJI.
 * — ⚠⚠ ZERO MAŁE BEZ DUŻEGO — kąt zajęty (Prusice).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH PORÓWNAŃ DO KONKURENCYJNYCH URZĄDZEŃ.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA CZYJEGOŚ GOTOWANIA.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   UPADKU PRZEMYSŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „gmina Chodzież" bez słowa WIEJSKA,
 *   gdy chodzi o gminę obwarzankową.
 * — NIE SUMUJĘ powierzchni jezior.
 * — NIE PODAJĘ wysokości Gontyńca jako pewnej.
 * — NIE TWIERDZĘ, że Gontyniec leży w mieście.
 * — NIE PODAJĘ roku pierwszej wzmianki jako pewnego.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PORÓWNUJĘ Thermomixa z innymi urządzeniami.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Chodzież jest siedzibą powiatu chodzieskiego
 *   i osobną gminą miejską; miasto liczy 17 173
 *   mieszkańców (GUS, 31.12.2024) na 12,8 km², czyli
 *   1 344,8 osoby na kilometr kwadratowy, i leży
 *   na wysokości 62 m n.p.m.,
 * — otaczająca je gmina wiejska Chodzież jest odrębną
 *   jednostką: 6 164 osoby na 213,0 km², czyli 29 osób
 *   na kilometr, i 25 miejscowości,
 * — pierwsza wzmianka pochodzi z 1403 r. (źródła podają
 *   też 1406 i 1409), a prawa miejskie na prawie
 *   magdeburskim nadał 3 marca 1434 r. Władysław
 *   Jagiełło,
 * — w granicach miasta leżą jeziora Miejskie, Karczewnik
 *   i Strzeleckie,
 * — Gontyniec w gminie wiejskiej, opisywany jako
 *   najwyższe wzniesienie północnej Polski, ma 192 albo
 *   194 m n.p.m. — źródła się różnią.
 */
export const CHODZIEZ: CityContent = {
  slug: "chodziez",
  h1: "Thermomix Chodzież – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Chodzież — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Chodzieży: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chodzież — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chodzieży. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chodzieży z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Chodzież"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najwyższe wzniesienie północnej Polski ma 192 metry.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chodzieży – jak wygląda prezentacja?",
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
      id: "najwyzsze-a-nie-wysokie",
      heading: "Najwyższe nie znaczy wysokie",
      paragraphs: [
        "Gontyniec, wzniesienie w gminie wiejskiej pod Chodzieżą, bywa nazywany najwyższym wzniesieniem północnej Polski. Ma sto dziewięćdziesiąt dwa metry. Albo sto dziewięćdziesiąt cztery — źródła się różnią o dwa metry i nie potrafię rozstrzygnąć które.",
        "Samo miasto leży na sześćdziesięciu dwóch metrach.",
        "Sto trzydzieści metrów różnicy to dużo i widać to gołym okiem, więc nie jest to żaden zarzut wobec Gontyńca. Rzecz w czymś innym. Słowo „najwyższe” mówi prawdę o zbiorze, a nie o wysokości. W innym zbiorze — powiedzmy w Sudetach — te sto dziewięćdziesiąt dwa metry nie byłyby nawet wzgórzem godnym nazwy.",
        "W kuchni stopień najwyższy zachowuje się identycznie i robi znacznie więcej szkody.",
        "„Mój najlepszy obiad”. „Najszybsze danie, jakie robię”. „Najgorsze, co gotuję”. Każde z tych zdań opisuje pozycję w Twoim zbiorze, a nie poziom. I dopóki nikt nie dopowie, jaki to zbiór, wszyscy rozumieją je inaczej.",
        "Druga strona jest tu ważniejsza od pierwszej. „Najgorsze, co gotuję” to bardzo często danie, które u kogoś innego byłoby zupełnie w porządku — zjadane, ciepłe, zrobione po pracy. Zostało nazwane najgorszym tylko dlatego, że w Waszym zbiorze jest pięć dań, a ono jest piąte. To nie jest ocena, to jest ranking o długości pięciu pozycji.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o sporach, w których dwie osoby liczą tę samą rzecz od innej granicy. Tu liczba jest bezsporna — sto dziewięćdziesiąt dwa metry to sto dziewięćdziesiąt dwa metry. Myli dopiero słowo, które się do niej dokłada.",
        "Ruch jest jeden i jest banalny. Kiedy używasz stopnia najwyższego, dopowiedz zbiór. „Najszybsze danie, jakie znam” to zupełnie inne zdanie niż „najszybsze danie” — pierwsze jest prawdziwe i skromne, drugie jest fałszywe i niepotrzebnie ciężkie.",
        "Uczciwie o drugiej stronie: mały zbiór to nie jest wada. Cztery dania, które wszyscy w domu lubią i które wychodzą za każdym razem, są lepsze niż dwadzieścia, z których połowa się nie udaje. Nie ma powodu powiększać zbioru tylko po to, żeby superlatywy brzmiały poważniej.",
        "I uczciwie o sprzęcie. „Najlepsze urządzenie” to też zdanie o zbiorze i nie zamierzam go wygłaszać. Nie znam wszystkiego, co jest na rynku, a pytanie i tak brzmi inaczej: czy to pasuje do Waszej kuchni, Waszego rytmu i Waszych czterech albo dwudziestu dań. Na prezentacji staram się odpowiadać na to pytanie, a nie na ranking.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chodzieży?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie cztery dania robicie najczęściej. Nie te najlepsze — te najczęstsze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chodzieży"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Chodzieży",
      paragraphs: [
        "Chodzież jest siedzibą powiatu chodzieskiego i osobną gminą miejską. Miasto liczy 17 173 mieszkańców (GUS, 31.12.2024) na 12,8 kilometra kwadratowego, czyli tysiąc trzysta czterdzieści pięć osób na kilometr, i leży na wysokości sześćdziesięciu dwóch metrów nad poziomem morza. Otaczająca je gmina wiejska Chodzież to osobna jednostka — 6 164 osoby na 213 kilometrach kwadratowych, czyli dwadzieścia dziewięć osób na kilometr, i dwadzieścia pięć miejscowości. W granicach miasta leżą trzy jeziora: Miejskie, Karczewnik i Strzeleckie. Pierwsza wzmianka pochodzi z 1403 roku, choć źródła podają też lata 1406 i 1409; prawa miejskie na prawie magdeburskim nadał 3 marca 1434 roku Władysław Jagiełło — i akurat ta data jest zgodna we wszystkich źródłach, co przy takich rocznikach zdarza się rzadko.",
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

  districtsHeading: "Do których części Chodzieży dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — nad jeziora, na osiedla i do centrum — bez dopłaty.",
    "Dojeżdżam też do wszystkich wsi otaczającej gminy wiejskiej: Milcza, Podanina, Ratajów, Stróżewa, Stróżewka i Stróżewic, Studzieńca, Strzelec, Zacharzyna, Nietuszkowa i pozostałych. Przy umawianiu warto podać pełną nazwę — trzy Stróżewa różnią się jedną końcówką.",
  ],
  districts: [],

  nearbyHeading: "Poza Chodzież też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Szamocina, Margonina, Ujścia, Budzynia i Wągrowca — wszędzie bezpłatnie, tak samo jak w samej Chodzieży.",
  ],
  nearbyTowns: ["Szamocin", "Margonin", "Ujście", "Budzyń", "Wągrowiec"],

  about: blokOMnie("do Chodzieży", "w Chodzieży i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chodzieży bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w otaczającej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi językowe: mówi się „do Chodzieży” i „w Chodzieży” — obie formy brzmią tak samo — a przymiotnik to „chodzieski”, nie „chodzieżski”. Warto też pamiętać, że miasto i gmina wiejska Chodzież to dwie osobne jednostki.",
    },
    ...faqWspolne("w Chodzieży"),
    {
      question: "Wstydzę się swojego gotowania — moje najlepsze danie to nic specjalnego. Jak to zmienić?",
      answer:
        "Zacznę od tego, że to zdanie prawdopodobnie mówi mniej, niż się wydaje. Gontyniec pod Chodzieżą bywa nazywany najwyższym wzniesieniem północnej Polski i ma sto dziewięćdziesiąt dwa metry — „najwyższe” jest tu prawdą o zbiorze, nie o wysokości. „Mój najlepszy obiad” działa tak samo: opisuje pozycję w Waszym zbiorze, a nie poziom. I działa to w obie strony, bo „najgorsze, co gotuję” bywa daniem zupełnie w porządku, które dostało tę etykietę tylko dlatego, że w rankingu długości pięciu pozycji wypadło piąte.",
    },
    {
      question: "Czy Thermomix to najlepsze urządzenie kuchenne?",
      answer:
        "Nie wygłoszę takiego zdania, bo to zawsze zdanie o zbiorze, a ja nie znam wszystkiego, co jest na rynku. Sensowne pytanie brzmi inaczej: czy to pasuje do Waszej kuchni, Waszego rytmu i dań, które naprawdę robicie. Na prezentacji gotujemy Wasze zwykłe jedzenie i po godzinie zwykle widać odpowiedź. Jeśli wyjdzie, że nie pasuje, powiem to wprost.",
    },
  ],

  geo: { lat: 52.9953, lng: 16.9199 },
};
