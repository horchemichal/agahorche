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
 * PIECHOWICE — powiat jeleniogórski, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — MIASTO JEST CAŁĄ GMINĄ. Brak wsi
 *   i sołectw. Nie piszę „i wsie w gminie".
 * MIASTO/GMINA: 5 725 mieszkańców (GUS 31.12.2024),
 *   43,2 km², gęstość 132,5 os./km².
 *   ⚠ DOMYKA SIĘ WZOROWO: 5 725 / 43,2 = 132,52.
 *   PODAJĘ JAKO FAKT.
 *   ⚠ 43,2 km² to nietypowo dużo jak na gminę miejską
 *   tej wielkości — bo miasto wchłonęło pięć wsi i sięga
 *   w głąb gór.
 * ⚠ ZABUDOWA: 360–480 m n.p.m.
 *   ⚠⚠⚠ ROZPIĘTOŚCI DO 1 509 M N.P.M. NIE UŻYWAM JAKO
 *   TEMATU. Góry, wysokości i wodospady to domena
 *   Szklarskiej Poręby i Kowar. Wymieniam JEDNĄ KLAUZULĄ,
 *   że granica sięga w góry, i nic poza tym.
 * ⚠ GEO: 50,850 / 15,583.
 *
 * ⚠⚠⚠ ODMIANA — NAZWA PLURALNA (tylko liczba mnoga,
 *   jak Katowice, Gliwice):
 *   D. do PIECHOWIC (BEZ KOŃCÓWKI) · Ms. w Piechowicach ·
 *   B. Piechowice · N. Piechowicami.
 *   ⚠⚠⚠ BŁĘDY: „do Piechowicy", „do Piechowiców".
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: PIECHOWICKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP, forma
 *   nieutrwalona słownikowo].
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — ⚠⚠⚠ PIECHOWICE — WIEŚ W WOJ. POMORSKIM, gmina
 *     Dziemiany, powiat kościerski, 455 mieszkańców
 *     (NSP 2021). IDENTYCZNA NAZWA, DRUGI KONIEC POLSKI.
 *     ⚠ ODLEGŁOŚCI NIE PODAJĘ — nieustalona.
 *   — PIECHOCICE i PIERZCHOWICE — mylące brzmienie.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — POCZĄTKI: przełom XIII i XIV w., wieś łańcuchowa
 *     [ZW dla okresu]; w 1305 r. odnotowana jako
 *     istniejąca [SP — jedno źródło].
 *     ⚠⚠ PISZĘ „odnotowana jako istniejąca w 1305",
 *     NIE „pierwsza wzmianka 1305".
 *   — PRAWA MIEJSKIE: 1967 r. [ZW, trzy źródła].
 *     ⚠ DATY DZIENNEJ NIE USTALONO — NIE PODAJĘ.
 *   ⚠⚠ PUŁAPKA: prawa miejskie objęły PIECHOWICE PLUS
 *   PIĘĆ SĄSIEDNICH WSI — Górzyniec, Pakoszów, Piastów,
 *   Michałowice i przejściowo Jagniątków. Kolonie
 *   powstawały w różnym czasie: Michałowice w XVII w.,
 *   Górzyniec w 1705 r.
 *   ⚠⚠⚠ „JEDNA NAZWA OBEJMUJĄCA KILKA MIEJSC" — kąt
 *   ZAJĘTY (Szczytna). PODAJĘ JAKO FAKT, BEZ MORAŁU.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JAGNIĄTKÓW, DWADZIEŚCIA DWA LATA:
 *   — 1967 — Piechowice powstają ze scalenia pięciu wsi,
 *   — 1976 — JAGNIĄTKÓW zostaje przyłączony
 *     do Piechowic (dziewięć lat po powstaniu miasta),
 *   — 1998 — Jagniątków staje się dzielnicą JELENIEJ GÓRY.
 *   ⚠⚠⚠ DWADZIEŚCIA DWA LATA. Miasto, które samo powstało
 *   ze scalenia, dostało jeszcze jedną miejscowość
 *   i po dwóch dekadach ją oddało. To jest cały kąt.
 *   ⚠⚠ [SP] — to samo źródło wspomina, że „w połowie
 *   lat 70." Jagniątków był najpierw wcielony
 *   do Sobieszowa. KOLEJNOŚĆ NIEJASNA. ⚠⚠⚠ PODAJĘ
 *   WYŁĄCZNIE DWIE PEWNE DATY: 1976 → Piechowice,
 *   1998 → Jelenia Góra. NIE OPOWIADAM, co było wcześniej.
 *   ⚠⚠ NIE PODAJĘ PRZYCZYN ANI JEDNEJ, ANI DRUGIEJ
 *   ZMIANY — nieustalone. NIE SPEKULUJĘ.
 *   ⚠ Jagniątków jest DZIŚ dzielnicą Jeleniej Góry —
 *   piszę o nim w czasie przeszłym w kontekście Piechowic.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — KOLEJ: 1891 — linia Jelenia Góra – Piechowice;
 *   1902 — przedłużenie do Szklarskiej Poręby.
 *   Przez jedenaście lat Piechowice były końcem linii.
 *   ⚠⚠ „NAJPIERW DROGA, POTEM RUCH" — kąt zajęty
 *   (Pieńsk, TA SAMA FALA). PODAJĘ DATY BEZ MORAŁU.
 * — ⚠⚠⚠ PAPIERNICTWA NIE ROBIĘ KĄTEM: młyn papierniczy
 *   Georga Kahla z 1672 r. jest faktem [ZW] i tylko tyle
 *   podaję. Ciąg wydajności (34 t/dobę, 10 tys. t/rok,
 *   600 m/min) ma SIEDEM RÓŻNYCH JEDNOSTEK MIARY —
 *   ⚠⚠⚠ a „dwie liczby mierzące co innego" to kąt zajęty
 *   (Twardogóra), papiernia zaś to kąt Dusznik-Zdroju.
 *   PODWÓJNA KOLIZJA. ANI JEDNEJ LICZBY WYDAJNOŚCI.
 *   ⚠⚠ ŻADNYCH NAZW DZIAŁAJĄCYCH ZAKŁADÓW.
 * — ⚠⚠⚠ WĄTKU SZKLARSKIEGO NIE DOTYKAM W OGÓLE
 *   (szlifiernia z 1690 r. z dwunastoma warsztatami,
 *   huty z 1862 i 1879 r.). Szklarska Poręba ma kąt
 *   oparty na spisie zawodów przy szkle. TO JEST
 *   BEZPOŚREDNIE SĄSIEDZTWO I BEZPOŚREDNIA KOLIZJA.
 * — ⚠⚠ PAŁACU W PAKOSZOWIE NIE OPISUJĘ: łańcuch sześciu
 *   właścicieli z luką to kąt Żmigrodu, a dane pochodzą
 *   ze strony obiektu, który dziś działa komercyjnie.
 *   PODWÓJNY POWÓD.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO DLA ŻADNEGO
 *   KIERUNKU. ANI JEDNEJ LICZBY KILOMETRÓW.
 *
 * KĄT: PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE
 * — o tym, że rzecz dołożona do gospodarstwa nie zrasta
 * się z nim automatycznie i trzeba to po jakimś czasie
 * sprawdzić. Kąt od Jagniątkowa: przyłączony do Piechowic
 * w 1976 roku, oddany Jeleniej Górze w 1998. Dwadzieścia
 * dwa lata to dużo jak na próbę i mało jak na zrośnięcie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Piechowice powstały w 1967 r. ze scalenia pięciu
 *   wsi, w 1976 dostały jeszcze Jagniątków, a w 1998
 *   Jagniątków stał się dzielnicą Jeleniej Góry,
 * — ŻE MIĘDZY PRZYŁĄCZENIEM A ODEJŚCIEM MINĘŁY
 *   DWADZIEŚCIA DWA LATA. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DOKŁADAMY RZECZY I NAWYKI TAK SAMO:
 *   nowy sprzęt, nowy sposób robienia zakupów, nowy
 *   pomysł na obiady — i zakładamy, że skoro weszło,
 *   to zostało,
 * — ⚠⚠ ŻE CZĘŚĆ Z TYCH RZECZY NIGDY SIĘ NIE ZRASTA:
 *   działa przez chwilę, potem cicho przechodzi do szafki
 *   i zajmuje miejsce przez lata, bo nikt nie ogłosił,
 *   że to koniec,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ROBI SIĘ GO PRZY DOKŁADANIU,
 *   NIE POTEM: umów się sama ze sobą na termin, w którym
 *   sprawdzisz, czy rzecz wrosła. Dwa miesiące, trzy —
 *   byle konkretny,
 * — ⚠⚠ ŻE SPRAWDZENIE MA JEDNO PYTANIE: czy w ostatnim
 *   tygodniu sięgnęłaś po to bez zastanowienia. Nie „czy
 *   to dobre", nie „czy się przyda" — czy sięgnęłaś,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część rzeczy wrasta wolniej
 *   i termin wypadnie za wcześnie. Dlatego to ma być
 *   sprawdzenie, a nie wyrok — można przesunąć termin
 *   raz, świadomie. Nie trzy razy,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE — TO MUSI PADAĆ WPROST:
 *   to dotyczy także Thermomixa. Urządzenie, po które
 *   nie sięga się bez zastanowienia, nie wrosło — i żadna
 *   cena tego nie zmienia. MÓWIĘ, że warto ustalić ten
 *   termin PRZED zakupem, nie po.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NARZĘDZIA USTAWIONEGO NA STAŁE I KOSZTU
 *   ROZSTAWIANIA — kąt zajęty (Lubawka, TA SAMA FALA).
 *   ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tamten tekst mówi, GDZIE RZECZ MA STAĆ,
 *   żeby w ogóle była używana; ten mówi, KIEDY SPRAWDZIĆ,
 *   CZY JEST UŻYWANA. JEDNO ZDANIE ROZGRANICZAJĄCE
 *   W TEKŚCIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO MOMENTU PRZEKAZANIA — kąt zajęty (Żmigród).
 * — ⚠⚠⚠ ZERO JEDNEJ NAZWY OBEJMUJĄCEJ KILKA MIEJSC —
 *   kąt zajęty (Szczytna). Scalenie z 1967 r. ociera się
 *   o to wprost. PODAJĘ JE JAKO FAKT, BEZ MORAŁU.
 * — ⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców).
 * — ⚠⚠ ZERO ZAPASOWE POWINNO BYĆ INNE — kąt zajęty
 *   (Chocianów).
 * — ⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO SYSTEMU PRZEGLĄDÓW SZAFEK — podaję
 *   WYŁĄCZNIE zasadę: jeden termin, jedno pytanie.
 * — ⚠⚠ ŻADNEGO NAMAWIANIA DO WYRZUCANIA RZECZY — mówię
 *   o sprawdzeniu, nie o pozbywaniu się.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO WYPADKÓW I ZAGROŻEŃ W GÓRACH.
 * — ⚠⚠ ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU.
 * — ⚠ ZERO UPADKU PRZEMYSŁU, BEZROBOCIA I DEMOGRAFII
 *   WSPÓŁCZESNEJ.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty dziennej nadania praw miejskich.
 * — NIE OPOWIADAM losów Jagniątkowa sprzed 1976 r. —
 *   źródła są niespójne.
 * — NIE PODAJĘ przyczyn przyłączenia ani odejścia
 *   Jagniątkowa.
 * — NIE PODAJĘ ani jednej liczby o wydajności papierni.
 * — NIE DOTYKAM wątku szklarskiego.
 * — NIE OPISUJĘ pałacu w Pakoszowie.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Piechowice są gminą miejską w powiecie
 *   jeleniogórskim; liczą 5 725 mieszkańców (GUS,
 *   31.12.2024) na 43,2 km², czyli 132,5 osoby
 *   na kilometr kwadratowy; zabudowa leży na wysokości
 *   360–480 m n.p.m., a granica miasta sięga w góry,
 * — osada powstała na przełomie XIII i XIV w. jako wieś
 *   łańcuchowa i w 1305 r. jest odnotowana jako
 *   istniejąca; prawa miejskie nadano w 1967 r., obejmując
 *   nimi Piechowice oraz Górzyniec, Pakoszów, Piastów,
 *   Michałowice i przejściowo Jagniątków,
 * — Michałowice powstały w XVII w., a Górzyniec
 *   w 1705 r.,
 * — Jagniątków przyłączono do Piechowic w 1976 r.,
 *   a w 1998 r. stał się dzielnicą Jeleniej Góry,
 * — w 1672 r. Georg Kahl postawił nad Kamienną młyn
 *   papierniczy,
 * — linię kolejową z Jeleniej Góry doprowadzono w 1891 r.,
 *   a w 1902 przedłużono ją do Szklarskiej Poręby — przez
 *   jedenaście lat Piechowice były końcem linii.
 */
export const PIECHOWICE: CityContent = {
  slug: "piechowice",
  h1: "Thermomix Piechowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Piechowice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Piechowicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piechowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Piechowicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Piechowic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, łącznie z Górzyńcem, Pakoszowem, Piastowem i Michałowicami.",

  highlights: highlightyStandardowe("Piechowice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwadzieścia dwa lata to dużo jak na próbę i mało jak na zrośnięcie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piechowicach – jak wygląda prezentacja?",
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
      id: "przylaczone-nie-znaczy-wrosniete",
      heading: "Przyłączone nie znaczy wrośnięte",
      paragraphs: [
        "Piechowice powstały w 1967 roku ze scalenia kilku sąsiadujących wsi. Dziewięć lat później, w 1976, dostały jeszcze jedną miejscowość — Jagniątków.",
        "W 1998 roku Jagniątków stał się dzielnicą Jeleniej Góry.",
        "Dwadzieścia dwa lata. Nie wiem, dlaczego go przyłączono, i nie wiem, dlaczego odszedł — źródła tego nie podają, a zgadywać nie będę. Zostaje sama liczba, i ona wystarczy: dwadzieścia dwa lata to stanowczo za dużo, żeby nazwać to próbą, i wyraźnie za mało, żeby coś zrosło się na stałe.",
        "W kuchni dokładamy rzeczy dokładnie w tym trybie.",
        "Nowy sprzęt. Nowy sposób robienia zakupów. Nowy pomysł na obiady na kilka dni do przodu. Coś wchodzi do domu i od tej chwili zakładamy, że skoro weszło, to zostało.",
        "Część z tych rzeczy nigdy się nie zrasta. Działa przez miesiąc, potem jeszcze przez chwilę z poczucia obowiązku, a potem cicho przechodzi do szafki i stoi tam latami — bo nikt nigdy nie ogłosił, że to koniec. Rzeczy nie odchodzą same. Trzeba je odprawić.",
        "Ruch jest jeden i robi się go przy dokładaniu, nie potem. Umawiając się na coś nowego, umów się od razu na termin, w którym sprawdzisz, czy to wrosło. Dwa miesiące, trzy — byle konkretny dzień, a nie „kiedyś zobaczymy”.",
        "Samo sprawdzenie ma jedno pytanie. Czy w ostatnim tygodniu sięgnęłaś po to bez zastanowienia? Nie „czy to dobre”, nie „czy się jeszcze przyda”, nie „czy było drogie”. Czy sięgnęłaś.",
        "Dopowiem, bo to leży blisko: to nie jest pytanie o to, gdzie rzecz ma stać. To osobna sprawa i rozstrzyga się ją wcześniej. Tutaj chodzi tylko o moment, w którym sprawdzasz, czy jest używana.",
        "Uczciwie o drugiej stronie: część rzeczy wrasta wolniej i termin czasem wypada za wcześnie. Dlatego to ma być sprawdzenie, a nie wyrok. Termin można przesunąć raz, świadomie, z podaniem nowej daty. Nie trzy razy — przy trzecim przesunięciu odpowiedź już znasz.",
        "I uczciwie o sprzęcie, bo to dotyczy też mojego. Thermomix, po który nie sięga się bez zastanowienia, nie wrósł — i żadna cena, żadna rata ani żadna liczba funkcji tego nie zmieni. Dlatego namawiam, żeby ten termin ustalić przed zakupem, a nie po. Dwa miesiące od dostawy, konkretny dzień w kalendarzu, jedno pytanie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piechowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy kupowaliście już kiedyś sprzęt kuchenny, który skończył w szafce. Naprawdę wolę o tym wiedzieć — to zmienia dobór dań na spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piechowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Piechowic",
      paragraphs: [
        "Piechowice są gminą miejską w powiecie jeleniogórskim — miasto jest tu całą gminą. Liczą 5 725 mieszkańców (GUS, 31.12.2024) na czterdziestu trzech kilometrach kwadratowych, czyli sto trzydzieści dwie osoby na kilometr. Ta powierzchnia jest jak na miasto tej wielkości nietypowo duża, bo granica sięga daleko w góry; sama zabudowa leży między trzystu sześćdziesięcioma a czterystu osiemdziesięcioma metrami nad poziomem morza. Osada powstała na przełomie trzynastego i czternastego wieku jako wieś łańcuchowa i w 1305 roku jest odnotowana jako istniejąca. Prawa miejskie nadano w 1967 roku, obejmując nimi Piechowice oraz Górzyniec, Pakoszów, Piastów, Michałowice i przejściowo Jagniątków — przy czym te miejscowości powstawały w różnych stuleciach: Michałowice w siedemnastym wieku, Górzyniec w 1705 roku. Jagniątków przyłączono do Piechowic w 1976 roku, a w 1998 stał się dzielnicą Jeleniej Góry. W 1672 roku Georg Kahl postawił nad Kamienną młyn papierniczy. Linię kolejową z Jeleniej Góry doprowadzono w 1891 roku, a w 1902 przedłużono ją do Szklarskiej Poręby — przez jedenaście lat Piechowice były końcem linii.",
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

  districtsHeading: "Do których części Piechowic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, łącznie z Górzyńcem, Pakoszowem, Piastowem i Michałowicami — to dziś części Piechowic, a nie osobne miejscowości. Wszędzie bez dopłaty.",
    "Miasto zajmuje ponad czterdzieści kilometrów kwadratowych i jest mocno rozciągnięte, więc przy umawianiu warto podać, o którą część chodzi.",
  ],
  districts: [],

  nearbyHeading: "Poza Piechowice też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Jeleniej Góry, Szklarskiej Poręby, Karpacza, Kowar i Świeradowa-Zdroju — wszędzie bezpłatnie, tak samo jak w samych Piechowicach.",
  ],
  nearbyTowns: ["Jelenia Góra", "Szklarska Poręba", "Karpacz", "Kowary", "Świeradów-Zdrój"],

  about: blokOMnie("do Piechowic", "w Piechowicach i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Piechowic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — również do Górzyńca, Pakoszowa, Piastowa i Michałowic, które od 1967 roku są jego częściami. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi: nazwa jest w liczbie mnogiej, więc mówi się „do Piechowic”, a nie „do Piechowicy”. I uwaga na mylącą zbieżność — Piechowice to także wieś w województwie pomorskim, w powiecie kościerskim, kilkaset kilometrów stąd.",
    },
    ...faqWspolne("w Piechowicach"),
    {
      question: "Kupiłam już kiedyś sprzęt, który skończył w szafce. Jak tego uniknąć?",
      answer:
        "Ustalając termin sprawdzenia przy zakupie, a nie po. Jagniątków przyłączono do Piechowic w 1976 roku, a w 1998 stał się dzielnicą Jeleniej Góry — dwadzieścia dwa lata to za dużo na próbę i za mało na zrośnięcie. Rzeczy same nie odchodzą, trzeba je odprawić. Umów się sama ze sobą na konkretny dzień, dwa albo trzy miesiące po zakupie, i zadaj jedno pytanie: czy w ostatnim tygodniu sięgnęłam po to bez zastanowienia. Nie „czy to dobre”, tylko „czy sięgnęłam”. To dotyczy również Thermomixa i mówię to świadomie.",
    },
    {
      question: "Co zrobić, jeśli po dwóch miesiącach odpowiedź brzmi „nie”?",
      answer:
        "Można przesunąć termin raz, świadomie, z nową datą — część rzeczy wrasta wolniej i pierwszy termin bywa za wczesny. Ale nie trzy razy; przy trzecim przesunięciu odpowiedź już znasz i chodzi tylko o to, żeby jej nie wypowiadać. W przypadku urządzenia, które kupiliście ode mnie, po prostu zadzwońcie. Zwykle okazuje się, że brakuje dwóch albo trzech dań, które wchodzą w codzienny rytm, i to da się naprawić jednym spotkaniem.",
    },
  ],

  geo: { lat: 50.85, lng: 15.583 },
};
