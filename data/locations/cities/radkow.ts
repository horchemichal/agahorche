import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * RADKÓW — powiat kłodzki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 237 mieszkańców (GUS 31.12.2024), 15,0 km²,
 *   gęstość 148,8 os./km² [ZW, domyka się]. PODAJĘ.
 * CAŁA GMINA: 8 360 osób, 140,0 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (59,7 z dzielenia wobec 61 w źródle).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * WSIE W GMINIE: 12 — Gajów, Karłów, Pasterka, Raszków,
 *   Ratno Dolne, Ratno Górne, Suszyna, Tłumaczów,
 *   Wambierzyce, Ścinawka Dolna, Ścinawka Górna,
 *   Ścinawka Średnia.
 *   ⚠⚠⚠ KOLIZJA: ŚCINAWKI ≠ ŚCINAWA (osobne miasto,
 *   opisane w tym cyklu, pow. lubiński). ROZGRANICZAM
 *   W SEKCJI DZIELNIC — OBOWIĄZKOWO.
 * WYSOKOŚĆ: 367 m n.p.m.
 * ⚠ GEO: 50,5041 / 16,4015.
 *
 * ⚠⚠ ODMIANA — Ó→O:
 *   D. do RADKOWA · Ms. w RADKOWIE · N. Radkowem.
 *   Przymiotnik: RADKOWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 * ⚠⚠ KOLIZJA NAZW: RADKÓW to także wieś gminna
 *   w woj. świętokrzyskim. ŻADNEGO ODNIESIENIA.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1290 r.
 *   — PRAWA MIEJSKIE: „ok. 1320 r." ⚠⚠⚠ ŹRÓDŁO PODAJE
 *     PRZEDZIAŁ, NIE ROK. PISZĘ „około 1320 roku"
 *     — NIGDY samego „1320".
 *   — POTWIERDZENIE PRAW: 27 czerwca 1418 r., Wacław IV.
 *   — RATUSZ: 1543 r. MURY: XV w.
 *   — KOLEJ: 1903 r. ⚠⚠ WYŁĄCZNIE DATA W TLE.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZY BRAMY, DWA PRZEDMIEŚCIA:
 *   BRAMY MIEJSKIE:
 *     — Brama Górna (zwana też Broumowską),
 *     — Brama Dolna (zwana też Wrocławską),
 *     — Brama Kłodzka.
 *   PRZEDMIEŚCIA, KTÓRE WYROSŁY:
 *     — Przedmieście Kłodzkie,
 *     — Przedmieście Wrocławskie.
 *   ⚠⚠⚠ TRZY WYJŚCIA, DWA ROZROSTY. Przy trzeciej
 *   bramie nie wyrosło nic.
 *   ⚠⚠⚠ [SP — JEDNO ŹRÓDŁO. PISZĘ „według zachowanych
 *   opisów" I NIE UDAJĘ PEWNOŚCI].
 *   ⚠⚠ NIE TWIERDZĘ, ŻE TO REGUŁA MIAST — opisuję
 *   jeden układ.
 *   ⚠⚠ NIE ROZWIJAM KIERUNKU BROUMOWSKIEGO — nazwa
 *   bramy i tyle. ZERO WĄTKU GRANICZNEGO.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ⚠⚠⚠ KAMIENIOŁOMU NIE OPISUJĘ ANI SŁOWEM — wątek
 *   wydobywczy wykluczony w całym cyklu (Wojcieszów).
 * — ⚠⚠⚠ PRZYWILEJU PIWOWARSKIEGO (85 z 86 domów)
 *   NIE UŻYWAM — ALKOHOL, WYKLUCZONE BEZWZGLĘDNIE.
 * — ⚠⚠ WAMBIERZYC NIE OPISUJĘ jako miejsca kultu —
 *   wyznaniowe. Nazwa wsi i tyle.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: TO, CO SIĘ ROZROSŁO, POKAZUJE, KTÓRĘDY CHODZONO
 * — o tym, że prawdziwą trasę widać po zużyciu, a nie
 * po planie. Kąt z układu Radkowa: trzy bramy, ale
 * przedmieścia wyrosły tylko przy dwóch.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że miasto miało trzy bramy: Górną, Dolną i Kłodzką,
 * — ŻE PRZEDMIEŚCIA WYROSŁY TYLKO DWA: Kłodzkie
 *   i Wrocławskie. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE WYJŚCIA BYŁY TRZY I KAŻDE JEDNAKOWO OTWARTE,
 *   a rozrosło się to, którędy naprawdę chodzono,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: plan mówi jedno, a zużycie
 *   drugie. Szuflada, która jest zawsze otwarta.
 *   Patelnia, po którą naprawdę się sięga. I sprzęt
 *   kupiony do trasy, którą się miało chodzić,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zanim dołożysz cokolwiek
 *   do kuchni, sprawdź, które trzy rzeczy są w niej
 *   najbardziej zużyte. To jest Twoja prawdziwa trasa,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem przy bramie nie
 *   wyrosło nic nie dlatego, że nikt tamtędy nie
 *   chodził, tylko dlatego, że nie było gdzie.
 *   Rozróżnia się to jednym pytaniem: czy było miejsce,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie pomaga tylko na
 *   trasie, którą naprawdę się chodzi. MÓWIĘ WPROST,
 *   że jeśli gotujecie trzy dania w kółko, to obsłuży
 *   te trzy — i że to nie jest wada.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam pytanie brzmiało, co jest
 *   pierwsze; tu wszystkie trzy bramy były od początku
 *   i jednakowo otwarte, więc pytanie brzmi, które
 *   z równych możliwości zostały wybrane.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO RÓŻNICA SIEDZI PO JEDNEJ STRONIE — kąt
 *   zajęty (Olszyna).
 * — ⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka).
 * — ⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna). Dlatego „według zachowanych opisów"
 *   jest zastrzeżeniem, a nie tematem.
 * — ⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU GRANICZNEGO · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO ALKOHOLU · ZERO WYDOBYCIA
 *   I KAMIENIOŁOMU · ZERO POWODZI I POŻARÓW JAKO
 *   ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ roku nadania praw jako pewnego —
 *   piszę „około 1320 roku".
 * — NIE TWIERDZĘ, że układ bram i przedmieść to reguła.
 * — NIE PISZĘ ANI SŁOWA o kamieniołomie i o przywileju
 *   piwowarskim.
 * — NIE OPISUJĘ Wambierzyc poza samą nazwą wsi.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Radków leży w powiecie kłodzkim, na wysokości
 *   367 m n.p.m.; miasto liczy 2 237 mieszkańców
 *   (GUS, 31.12.2024) na 15,0 km², czyli 148,8 osoby
 *   na kilometr kwadratowy, a cała gmina miejsko-wiejska
 *   8 360 osób na 140,0 km²,
 * — gmina obejmuje dwanaście wsi,
 * — pierwsza wzmianka pochodzi z 1290 r., prawa miejskie
 *   miasto otrzymało około 1320 r., a potwierdził je
 *   Wacław IV 27 czerwca 1418 r.,
 * — ratusz pochodzi z 1543 r., mury miejskie z XV w.,
 *   kolej dotarła w 1903 r.,
 * — miasto miało trzy bramy — Górną (zwaną Broumowską),
 *   Dolną (zwaną Wrocławską) i Kłodzką — a przedmieścia
 *   wyrosły dwa: Kłodzkie i Wrocławskie.
 */
export const RADKOW: CityContent = {
  slug: "radkow",
  h1: "Thermomix Radków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Radków — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Radkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Radkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Radkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwunastu wsi w gminie.",

  highlights: highlightyStandardowe("Radków"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy bramy. Dwa przedmieścia.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Radkowie – jak wygląda prezentacja?",
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
      id: "ktoredy-chodzono",
      heading: "To, co się rozrosło, pokazuje, którędy chodzono",
      paragraphs: [
        "Radków miał trzy bramy: Górną, zwaną też Broumowską, Dolną, zwaną Wrocławską, i Kłodzką.",
        "Przedmieścia wyrosły dwa: Kłodzkie i Wrocławskie. Tak przynajmniej wynika z zachowanych opisów — źródło jest jedno, więc mówię o tym ostrożniej niż o liczbach z GUS-u.",
        "Wyjścia były trzy i każde jednakowo otwarte. Rozrosło się to, którędy naprawdę chodzono.",
        "To jest najuczciwszy audyt kuchni, jaki znam, i nie wymaga żadnej tabelki.",
        "Plan mówi jedno: miało być zdrowo, różnorodnie, z tym wielkim garnkiem na rosół i z maszynką, którą dostaliście na ślub. Zużycie mówi drugie. Szuflada, która jest zawsze otwarta. Jedna deska, po którą sięgasz odruchowo, choć masz trzy. Patelnia z porysowanym dnem obok dwóch nietkniętych.",
        "Brama, przy której nic nie wyrosło, to sprzęt kupiony do trasy, którą się miało chodzić. Nie jest zły. Po prostu nikt tamtędy nie chodzi.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej, że najpierw powstaje droga, a dopiero potem ruch. Tam chodziło o kolejność. Tu o coś innego — wszystkie trzy bramy stały od początku i były równie dostępne, a mimo to wybrano dwie. Pytanie nie brzmi, co było pierwsze, tylko co zostało wybrane spośród równych możliwości.",
        "Ruch jest jeden. Zanim dołożysz do kuchni cokolwiek nowego, sprawdź, które trzy rzeczy są w niej najbardziej zużyte. To jest Twoja prawdziwa trasa i tylko na niej cokolwiek się przyjmie.",
        "Uczciwie o drugiej stronie: czasem przy bramie nie wyrasta nic nie dlatego, że nikt tamtędy nie chodzi, tylko dlatego, że nie ma gdzie. W kuchni wygląda to tak, że czegoś nie używasz, bo stoi na najwyższej półce za trzema innymi rzeczami. Rozróżnik to jedno pytanie: czy w ogóle było miejsce, żeby się to przyjęło.",
        "I uczciwie o sprzęcie. Thermomix pomaga na trasie, którą naprawdę chodzicie. Jeśli gotujecie trzy dania w kółko, obsłuży te trzy — szybciej i bez stania nad garnkiem — ale nie zrobi z Was ludzi, którzy gotują dwadzieścia. Kto kupuje urządzenie po to, żeby zmienić swoje nawyki, zwykle zostaje z tymi samymi nawykami i nowym sprzętem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Radkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, po co w Waszej kuchni sięgacie najczęściej. Pod to dobiorę dania na spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Radkowie"),
    sekcjaRaty("w Radkowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Radkowa",
      paragraphs: [
        "Radków leży w powiecie kłodzkim, na wysokości trzystu sześćdziesięciu siedmiu metrów nad poziomem morza. Samo miasto liczy 2 237 mieszkańców (GUS, 31.12.2024) na piętnastu kilometrach kwadratowych, czyli sto czterdzieści dziewięć osób na kilometr, a cała gmina miejsko-wiejska 8 360 osób na stu czterdziestu kilometrach i obejmuje dwanaście wsi: Gajów, Karłów, Pasterkę, Raszków, Ratno Dolne i Górne, Suszynę, Tłumaczów, Wambierzyce oraz Ścinawkę Dolną, Górną i Średnią. Gęstości dla całej gminy nie podaję, bo liczby ze źródeł się nie domykają. Pierwsza wzmianka o mieście pochodzi z 1290 roku, prawa miejskie otrzymało około 1320 — źródła podają przedział, nie rok — a potwierdził je Wacław IV 27 czerwca 1418 roku. Ratusz stoi od 1543 roku, mury miejskie pochodzą z piętnastego wieku, kolej dotarła tu w 1903.",
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

  districtsHeading: "Do których części Radkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwunastu wsi w gminie: Gajowa, Karłowa, Pasterki, Raszkowa, Ratna Dolnego i Górnego, Suszyny, Tłumaczowa, Wambierzyc oraz Ścinawki Dolnej, Górnej i Średniej. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę. Ścinawki w gminie Radków są trzy i żadna z nich nie jest Ścinawą — to osobne miasto w powiecie lubińskim, kawałek drogi stąd.",
  ],
  districts: [],

  nearbyHeading: "Poza Radków też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Nowej Rudy, Kłodzka, Polanicy-Zdroju, Ząbkowic Śląskich i Głuszycy — wszędzie bezpłatnie, tak samo jak w samym Radkowie.",
  ],
  nearbyTowns: ["Nowa Ruda", "Kłodzko", "Polanica-Zdrój", "Ząbkowice Śląskie", "Głuszyca"],

  about: blokOMnie("do Radkowa", "w Radkowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Radkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwunastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga praktyczna: przy umawianiu warto podać pełną nazwę miejscowości, bo Ścinawki w gminie są trzy — Dolna, Górna i Średnia — a Ścinawa to zupełnie inne miasto, w powiecie lubińskim.",
    },
    ...faqWspolne("w Radkowie"),
    {
      question: "Mam w kuchni sprzęt, którego prawie nie używam. Czy nowe urządzenie skończy tak samo?",
      answer:
        "To jest właściwe pytanie i warto je zadać przed zakupem, nie po. Radków miał trzy bramy, a przedmieścia wyrosły przy dwóch — rozrosło się to, którędy naprawdę chodzono. W kuchni jest tak samo: przyjmuje się tylko to, co trafia na trasę, którą już chodzicie. Sprawdzian: które trzy rzeczy w Waszej kuchni są najbardziej zużyte. Jeśli Thermomix wchodzi w miejsce którejś z nich, przyjmie się. Jeśli miałby otworzyć trasę, której dotąd nie było — bądźcie ostrożni.",
    },
    {
      question: "Czy Thermomix sprawi, że zaczniemy gotować bardziej różnorodnie?",
      answer:
        "Sam z siebie nie. Obsłuży to, co i tak gotujecie — szybciej i bez stania nad garnkiem — a różnorodność bierze się z decyzji, nie ze sprzętu. U części osób jedno pociąga drugie, bo gdy gotowanie przestaje męczyć, łatwiej spróbować czegoś nowego. Ale obiecywać tego nie będę. Na prezentacji wolę pokazać, co realnie zmieni się w Waszych stałych daniach.",
    },
  ],

  geo: { lat: 50.5041, lng: 16.4015 },
};
