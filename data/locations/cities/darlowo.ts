import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * DARŁOWO — powiat sławieński, woj. zachodniopomorskie,
 * u ujścia Wieprzy do Bałtyku.
 * ⚠⚠⚠ GMINA MIEJSKA — MIASTO JEST SAMODZIELNĄ GMINĄ.
 * MIASTO: 12 466 mieszkańców (GUS 31.12.2024), 20,2 km²,
 * gęstość 616,8 os./km².
 *
 * ⚠⚠⚠ DWIE PUŁAPKI NARAZ:
 * (1) ISTNIEJE ODRĘBNA GMINA WIEJSKA DARŁOWO:
 *     7 563 mieszkańców, 269,4 km², 31 sołectw
 *     / 46 miejscowości. TO ROZŁĄCZNE JEDNOSTKI.
 *     NIE SUMOWAĆ. ⚠⚠ NIE PISZĘ „CAŁA GMINA MA…".
 * (2) ⚠⚠ TRZY RÓŻNE LICZBY MIESZKAŃCÓW W OBIEGU:
 *     GUS/polskawliczbach 12 466 (31.12.2024),
 *     UM Darłowo 11 984 (31.12.2023, rejestr PESEL),
 *     en.wikipedia 13 324 (31.12.2021).
 *     RÓŻNICA GUS/URZĄD TO DWIE RÓŻNE METODY (bilans
 *     ludności wg faktycznego zamieszkania kontra rejestr
 *     zameldowań) — OBIE MOGĄ BYĆ POPRAWNE.
 *     ⚠⚠ DLATEGO W TREŚCI PISZĘ „PONAD DWANAŚCIE TYSIĘCY",
 *     ZAOKRĄGLONE, Z PODANIEM ŹRÓDŁA W KOMENTARZU.
 *     NIE ROZSTRZYGAM SPORU I NIE PODAJĘ TRZECH LICZB.
 * ⚠ GEO: 54,4211 / 16,4106.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI. D. DARŁOWA,
 *   Ms. W DARŁOWIE. ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   „darłowianin" nie ma osobnego hasła w PWN.
 * ⚠⚠ PUŁAPKA WEWNĘTRZNA: DARŁÓWKO TO NIE OSOBNA
 *   MIEJSCOWOŚĆ, tylko osiedle w granicach miasta
 *   (nadmorska część z portem). Materiały turystyczne
 *   przedstawiają je jako odrębny kurort — TO BŁĄD.
 *   Rozgraniczam w sekcji dzielnicowej.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ok. 100 n.e. — osadnictwo u ujścia Wieprzy.
 * — 1270 lub 1271 — założenie miasta przez księcia
 *   Wisława II. ⚠ ŹRÓDŁA PODAJĄ OBA LATA —
 *   piszę „około 1270 roku".
 * — 1312 — NADANIE PRAWA LUBECKIEGO (osobna data
 *   od założenia).
 * — 1412 — pełne członkostwo w Hanzie.
 * — 1715 — pierwsza latarnia morska.
 * — 1878 — połączenie kolejowe.
 * ⚠⚠ ZAMEK: sześć faz rozbudowy 1352–ok. 1624,
 *   wymiary 32 × 34 m, mur ok. 14 m, wieża 26 m.
 *   ⚠⚠⚠ NIE UŻYWAM ZAMKU JAKO KĄTA — „budowla
 *   dokładana przez pokolenia" prowadzi prosto w obszar
 *   przepisu przekazywanego w rodzinie, a ten jest zajęty
 *   pięciokrotnie (Golub-Dobrzyń, Kamień Krajeński, Puck,
 *   Suraż, Radziejów). Zamek wymieniam wyłącznie
 *   w bloku faktograficznym, z wymiarami, bez morału.
 *   ⚠⚠ ERYKA POMORSKIEGO NIE WPROWADZAM — wątek
 *   monarszy bez wartości dla strony o kuchni.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PORT MORSKI, PEŁNY ZESTAW LIMITÓW:
 * — łączna długość nabrzeży 5 307 m (z falochronami),
 * — DZIESIĘĆ RÓŻNYCH NABRZEŻY, KAŻDE O INNEJ DŁUGOŚCI:
 *   Pilotowe 189 m, Usteckie 211 m, Dorszowe I 240 m,
 *   Dorszowe II 297 m, Skarpowe 297 m, Gdańskie 190 m,
 *   Gdyńskie 194 m, Szczecińskie 179 m, Rybackie 141 m,
 *   Koszalińskie 55 m, Słupskie I i II razem 128 m,
 * — kanał portowy 2,5 km, głębokość robocza 5,5 m,
 * — tor podejściowy 926 m, szerokość dna 60 m,
 *   głębokość 8 m,
 * — OBROTNICA O ŚREDNICY 110 M,
 * — ⚠⚠⚠ LIMIT STATKU: DŁUGOŚĆ 75 M, ZANURZENIE 4 M.
 *   TOR MA 8 M GŁĘBOKOŚCI, KANAŁ 5,5 M, A STATEK MOŻE
 *   MIEĆ 4 M ZANURZENIA — O CAŁOŚCI DECYDUJE
 *   NAJPŁYTSZE MIEJSCE, NIE NAJGŁĘBSZE.
 *   TO JEST DOKŁADNIE TEN FAKT, NA KTÓRYM STOI KĄT.
 * — magazyny zbożowe 14 600 ton, 116 słupów oświetlenia.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu dla Darłowa i gminy wiejskiej Darłowo.
 *   NIE WYMYŚLAM ŻADNEGO.
 *
 * KĄT: NAJWĘŻSZE MIEJSCE DECYDUJE O CAŁOŚCI —
 * czyli dlaczego obiad trwa tyle, ile trwa jego
 * najwolniejszy element, a nie tyle, ile średnio.
 * Kąt od portu: tor podejściowy ma osiem metrów
 * głębokości, kanał pięć i pół, a do portu wejdzie statek
 * o zanurzeniu czterech metrów. O limicie decyduje
 * najpłytszy odcinek, nie najgłębszy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że port ma dziesięć nabrzeży o różnych długościach,
 *   tor podejściowy o głębokości 8 m i kanał o 5,5 m,
 *   a mimo to limit dla statku to 4 m zanurzenia
 *   i 75 m długości,
 * — ŻE CAŁOŚĆ NIE JEST ŚREDNIĄ SWOICH CZĘŚCI —
 *   to jest rdzeń. Rozstrzyga najwęższe miejsce,
 *   a nie to, jak wygląda reszta,
 * — ⚠⚠ ŻE W KUCHNI NAJWĘŻSZE MIEJSCE JEST PRAWIE ZAWSZE
 *   TO SAMO I DA SIĘ JE WSKAZAĆ:
 *   (1) JEDEN PIEKARNIK — dwie rzeczy, które mają
 *       się piec w różnych warunkach, nie upieką się
 *       jednocześnie,
 *   (2) LICZBA PALNIKÓW — czterech garnków naraz nie
 *       obsłuży się na dwóch palnikach, choćby wszystko
 *       inne było gotowe,
 *   (3) JEDNA PARA RĄK — to jest ten limit, o którym się
 *       nie mówi, a który przesądza najczęściej,
 * — ⚠⚠ ŻE PLANOWANIE OBIADU POLEGA NA ZNALEZIENIU TEGO
 *   MIEJSCA, A NIE NA PRZYSPIESZANIU RESZTY. Skracanie
 *   kroków, które i tak nie są wąskim gardłem, nie daje
 *   nic — a dokładnie to robimy najczęściej,
 * — ⚠⚠ ŻE NAJPROSTSZE ROZWIĄZANIE TO PRZESUNIĘCIE
 *   W CZASIE, NIE W TEMPIE: to, co nie musi być gorące,
 *   robi się wcześniej i wąskie gardło znika samo.
 *   ⚠ TO JEDNO ZDANIE — „gotowanie z wyprzedzeniem"
 *   sąsiaduje z kątem zajętym (Stopnica), więc
 *   NIE ROZWIJAM,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie usuwa jedno
 *   konkretne wąskie gardło — parę rąk, bo pracuje bez
 *   pilnowania. NIE USUWA piekarnika ani palników,
 *   bo ich nie zastępuje. Kto liczy, że rozwiąże całość,
 *   przeceni je; kto wie, które ogniwo odblokowuje,
 *   dostanie dokładnie to.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO POJEMNOŚCI I SKALOWANIA PORCJI — kąt zajęty
 *   (Świdwin, ta sama fala). Tam chodzi o LICZBĘ OSÓB;
 *   TUTAJ o KOLEJNOŚĆ I RÓWNOLEGŁOŚĆ CZYNNOŚCI.
 *   Rozgraniczam wprost.
 * — ⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Choszczno,
 *   ta sama fala).
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS I MROŻENIA — kąt zajęty
 *   (Stopnica). Jedno zdanie o przesunięciu w czasie
 *   i ani słowa więcej.
 * — ⚠⚠ ZERO PRZERWY W ŚRODKU GOTOWANIA — kąt zajęty
 *   (Pasłęk).
 * — ⚠ ZERO BRAKU PIEKARNIKA — kąt zajęty (Zdzieszowice).
 *   Piszę o piekarniku, KTÓRY JEST, ale jest jeden.
 * — ⚠ ZERO RYB I PRZETWÓRSTWA RYBNEGO — mimo że to
 *   miasto portowe. Port opisuję wyłącznie jako
 *   infrastrukturę z parametrami.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH CZASÓW GOTOWANIA POTRAW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO POLIGONU ARTYLERII Z 1935 R. I ZERO
 *   JAKICHKOLWIEK WĄTKÓW WOJSKOWYCH.
 * — ⚠⚠⚠ ZERO 7 MARCA 1945 I ZERO PRZESIEDLEŃ.
 * — ⚠⚠ ZERO EKONOMII RYBOŁÓWSTWA — kwoty połowowe,
 *   kryzys, upadłości. Port opisuję jako budowlę,
 *   nie jako branżę.
 * — ⚠ ZERO WĄTKU MONARSZEGO (Eryk Pomorski).
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — ⚠⚠ NIE PODAJĘ DOKŁADNEJ LICZBY MIESZKAŃCÓW —
 *   trzy źródła, trzy wartości, dwie metody. Piszę
 *   „ponad dwanaście tysięcy" za GUS.
 * — NIE SUMUJĘ miasta i gminy wiejskiej Darłowo.
 * — NIE PODAJĘ jednego roku założenia — 1270 albo 1271.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PRZEDSTAWIAM Darłówka jako osobnej miejscowości.
 * — NIE PRZYPISUJĘ Darłowu produktu z Listy.
 * — NIE PODAJĘ ŻADNEGO CZASU GOTOWANIA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Darłowo leży u ujścia Wieprzy do Bałtyku w powiecie
 *   sławieńskim, jest gminą miejską i liczy ponad
 *   dwanaście tysięcy mieszkańców (GUS, 31.12.2024)
 *   na 20,2 km²; osobną jednostką jest gmina wiejska
 *   Darłowo — 7 563 osoby, 269,4 km², 46 miejscowości,
 * — Darłówko to osiedle w granicach miasta, nie odrębna
 *   miejscowość,
 * — osadnictwo u ujścia Wieprzy sięga około 100 r. n.e.,
 *   miasto założono około 1270 r., a prawo lubeckie
 *   otrzymało w 1312 r.; w 1412 r. weszło do Hanzy,
 * — zamek zaczęto wznosić po 1352 r. na planie
 *   32 na 34 metry, z murem wysokim na około 14 metrów
 *   i wieżą podniesioną później do 26 metrów,
 * — pierwsza latarnia morska stanęła w 1715 r.,
 *   a kolej dotarła tu w 1878 r.,
 * — port ma 5 307 metrów nabrzeży w dziesięciu odcinkach
 *   o różnych długościach, kanał portowy długi na 2,5 km
 *   i głęboki na 5,5 m, tor podejściowy o długości 926 m
 *   i głębokości 8 m, obrotnicę o średnicy 110 m oraz
 *   magazyny zbożowe na 14 600 ton; do portu może wejść
 *   statek o długości do 75 m i zanurzeniu do 4 m.
 */
export const DARLOWO: CityContent = {
  slug: "darlowo",
  h1: "Thermomix Darłowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Darłowo — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Darłowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto z Darłówkiem i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Darłowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Darłowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Darłowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd nic nie kosztują — w całym mieście, z Darłówkiem włącznie.",

  highlights: highlightyStandardowe("Darłowo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Obiad trwa tyle, ile jego najwolniejszy element — nie tyle, ile średnio.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Darłowie – jak wygląda prezentacja?",
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
      id: "najwezsze-miejsce",
      heading: "Cztery metry zanurzenia, czyli najwęższe miejsce decyduje",
      paragraphs: [
        "Port w Darłowie ma pięć tysięcy trzysta siedem metrów nabrzeży, rozłożonych na dziesięć odcinków o zupełnie różnych długościach — od pięćdziesięciu pięciu metrów po prawie trzysta. Tor podejściowy ma osiem metrów głębokości, kanał portowy pięć i pół, a obrotnica sto dziesięć metrów średnicy.",
        "A do portu wejdzie statek o długości do siedemdziesięciu pięciu metrów i zanurzeniu do czterech.",
        "Ten limit nie bierze się z żadnej z podanych wyżej liczb z osobna. Bierze się z najpłytszego miejsca na całej drodze — bo statek musi przejść wszędzie, a nie średnio.",
        "Kuchnia działa dokładnie tak samo i to jest jedyna rzecz, którą warto z tej strony zapamiętać.",
        "Obiad trwa tyle, ile trwa jego najwolniejszy element. Nie tyle, ile średnio trwają wszystkie czynności razem wzięte. Można przygotować dziewięć rzeczy błyskawicznie i i tak czekać, bo dziesiąta trzyma całość.",
        "W praktyce najwęższe miejsce jest prawie zawsze jednym z trzech i da się je wskazać bez żadnej analizy.",
        "Pierwsze: jeden piekarnik. Dwie rzeczy, które mają się piec w różnych warunkach, po prostu nie upieką się jednocześnie — a bardzo wiele świątecznych planów rozbija się właśnie o to i o nic innego.",
        "Drugie: liczba palników. Czterech garnków naraz nie obsłuży się na dwóch palnikach, choćby wszystko inne było pokrojone, odmierzone i gotowe.",
        "Trzecie, najczęstsze i najrzadziej wymieniane: jedna para rąk. Jeśli każdy krok wymaga, żeby ktoś przy nim stał, to nieważne, ile jest garnków — wszystko i tak ustawia się w kolejkę do tej jednej osoby.",
        "I z tego wynika rzecz, którą robimy najczęściej na odwrót. Planowanie obiadu polega na znalezieniu tego najwęższego miejsca, a nie na przyspieszaniu reszty. Skracanie kroków, które i tak nie są wąskim gardłem, nie daje absolutnie nic — a większość „usprawnień” w kuchni to właśnie to: szybsze krojenie przy zajętym piekarniku.",
        "Najprostsze rozwiązanie nie polega zresztą na tempie, tylko na czasie: to, co nie musi być gorące, robi się wcześniej i wąskie gardło znika samo, bez żadnego przyspieszania.",
        "Uczciwie o urządzeniu, bo tu da się powiedzieć bardzo konkretnie, co ono robi. Usuwa dokładnie jedno wąskie gardło z trzech — parę rąk. Danie gotuje się z trzymaną temperaturą i mieszaniem, więc nie wymaga, żeby ktoś przy nim stał, i przestaje zajmować miejsce w kolejce do jedynej osoby w kuchni.",
        "Nie usuwa dwóch pozostałych i nie będę twierdzić inaczej. Piekarnik dalej jest jeden, palniki dalej są dwa albo cztery. Kto liczy, że jeden sprzęt rozwiąże całość, przeceni go. Kto wie, które konkretnie ogniwo odblokowuje, dostanie dokładnie to — i zwykle jest to właśnie to ogniwo, które psuło najwięcej.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Darłowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, na czym zwykle się u Was korkuje obiad — na piekarniku, na palnikach czy na tym, że wszystko czeka na jedną osobę. To trzy różne rozmowy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Darłowie"),
    sekcjaRaty("w Darłowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla darłowskiej rodziny",
      paragraphs: [
        "Darłowo leży u ujścia Wieprzy do Bałtyku, w powiecie sławieńskim, i jest gminą miejską: liczy ponad dwanaście tysięcy mieszkańców na dwudziestu i dwóch dziesiątych kilometra kwadratowego. Osobną jednostką jest gmina wiejska Darłowo — ponad siedem i pół tysiąca osób na dwustu sześćdziesięciu dziewięciu kilometrach kwadratowych, w czterdziestu sześciu miejscowościach. Osadnictwo u ujścia rzeki sięga około setnego roku naszej ery, miasto założono około 1270 roku, a prawo lubeckie otrzymało w 1312; w 1412 weszło do Hanzy. Zamek zaczęto wznosić po 1352 roku na planie trzydziestu dwóch na trzydzieści cztery metry, z murem wysokim na około czternaście metrów i wieżą podniesioną później do dwudziestu sześciu. Pierwsza latarnia morska stanęła w 1715 roku, a kolej dotarła tu w 1878. Port ma dziś pięć tysięcy trzysta siedem metrów nabrzeży rozłożonych na dziesięć odcinków, kanał portowy długi na dwa i pół kilometra i głęboki na pięć i pół metra, tor podejściowy o długości dziewięciuset dwudziestu sześciu metrów i głębokości ośmiu metrów, obrotnicę o średnicy stu dziesięciu metrów oraz magazyny zbożowe na czternaście tysięcy sześćset ton; wejść może do niego statek o długości do siedemdziesięciu pięciu metrów i zanurzeniu do czterech.",
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

  districtsHeading: "Do których części Darłowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, razem z Darłówkiem — które wbrew temu, co sugerują foldery, nie jest osobną miejscowością, tylko nadmorskim osiedlem w granicach Darłowa. Przyjeżdżam też do wsi w otaczającej miasto gminie wiejskiej Darłowo, których jest czterdzieści sześć.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Darłowo też przyjadę",
  nearbyParagraphs: [
    "Koszalin jest trzydzieści pięć kilometrów stąd, Kołobrzeg około siedemdziesięciu, a Sławno i Białogard mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Koszalin", "Kołobrzeg", "Sławno", "Białogard"],

  about: blokOMnie("do Darłowa", "w Darłowie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Darłowa i Darłówka bez dodatkowej opłaty?",
      answer:
        "Tak — i dla porządku: Darłówko nie jest osobną miejscowością, tylko nadmorskim osiedlem w granicach Darłowa, choć foldery turystyczne sugerują inaczej. Przyjeżdżam do całego miasta oraz do wsi w otaczającej je gminie wiejskiej Darłowo. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Darłowie"),
    {
      question: "Dlaczego obiad trwa dłużej, niż wynikałoby z przepisów?",
      answer:
        "Bo trwa tyle, ile jego najwolniejszy element, a nie tyle, ile średnio trwają wszystkie czynności. Najwęższe miejsce w kuchni jest prawie zawsze jednym z trzech: jeden piekarnik, liczba palników albo jedna para rąk. Planowanie polega na znalezieniu tego miejsca, a nie na przyspieszaniu reszty — szybsze krojenie przy zajętym piekarniku nie daje nic.",
    },
    {
      question: "Które z tych ograniczeń Thermomix realnie usuwa?",
      answer:
        "Dokładnie jedno z trzech: parę rąk. Danie gotuje się z trzymaną temperaturą i mieszaniem, więc nie wymaga, żeby ktoś przy nim stał, i przestaje zajmować miejsce w kolejce do jedynej osoby w kuchni. Piekarnik dalej jest jeden, a palniki dalej dwa albo cztery — tego nie zastępuje i nie będę twierdzić inaczej.",
    },
  ],

  geo: { lat: 54.4211, lng: 16.4106 },
};
