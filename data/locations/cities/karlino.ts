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
 * KARLINO — powiat białogardzki, woj. zachodniopomorskie,
 * nad Radwią (dopływem Parsęty).
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 5 463 mieszkańców (GUS 31.12.2024), 9,4 km²,
 * gęstość 581,2 os./km², 14 M N.P.M. — NAJNIŻEJ POŁOŻONE
 * Z TEJ FALI.
 * CAŁA GMINA: 8 470 osób, 141,0 km², 28 SOŁECTW.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 54,0335 / 15,8770.
 * ⚠ NIE ISTNIEJE ODRĘBNA GMINA WIEJSKA KARLINO.
 *
 * ⚠⚠⚠ ODMIANA — RODZAJ NIJAKI. „TO KARLINO".
 *   D. KARLINA, C. KARLINU, N. KARLINEM, Ms. W KARLINIE,
 *   przym. KARLIŃSKI.
 *   ⚠⚠ PISZE SIĘ „PIĘKNE KARLINO", nie „piękny Karlino".
 *   To realna pułapka redakcyjna.
 *   ⚠⚠ NIE POTWIERDZONE BEZPOŚREDNIO W PWN, ale wzór
 *   jest ten sam co w Wejherowie czy Ustroniu.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 * ⚠ HOMONIM: KARLINO (zachodniopomorskie) ≠ KARLIN
 *   (wieś w łódzkiem, także dzielnica Pragi w Czechach).
 *   ROZGRANICZAM W FAQ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1240 — założenie osady.
 * — ⚠ PRAWA MIEJSKIE 1385 R. Źródło podaje SAM ROK,
 *   bez daty dziennej. Piszę „w 1385 roku".
 * — ⚠⚠⚠ RDZEŃ KĄTA — ZAMEK I TO, CO PO NIM:
 *   — 1308 — pierwszy zapis o zamku („castrum nostrum
 *     Corlin") w dokumencie biskupa Wachholtza,
 *   — 1481 — zamek zniszczony przez mieszczan okolicznych
 *     miast; 1486 — ODBUDOWANY PO ZAPŁACENIU
 *     ODSZKODOWANIA,
 *   — rozbudowy w latach 1450–1575 i 1602–1618,
 *   — 1761 — SPŁONĄŁ DOSZCZĘTNIE; ruiny rozebrano,
 *     zachowało się TYLKO NAJNIŻSZE PIĘTRO ZE SKLEPIENIAMI,
 *   — XIX W. — NA TYCH FUNDAMENTACH POSTAWIONO BROWAR,
 *   — DZIŚ — teren prywatny, obiekt hotelowo-rekreacyjny
 *     („Wyspa Biskupia"),
 *   — przy pracach archeologicznych odkryto RZADKI
 *     DWUSTRONNY KOMINEK.
 *   ⚠⚠ REZYDENCJI BISKUPIEJ NIE ROZWIJAM — wątek
 *   wyznaniowy. Piszę o zamku jako o budowli.
 *   ⚠⚠ BROWARU WYMIENIAM JAKO ZMIANĘ PRZEZNACZENIA
 *   BUDYNKU, BEZ ANI JEDNEGO SŁOWA O PIWIE ANI
 *   O PRODUKCJI — alkohol jest tematem wykluczonym.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — WYSPA BISKUPIA — fragment miasta otoczony ramionami
 *   Radwi.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE POTWIERDZONO
 *   wpisu dla gminy Karlino. NIE PRZYPISUJĘ PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: DO CZEGO TO WŁAŚCIWIE SŁUŻY — o sprzętach
 * używanych niezgodnie z przeznaczeniem i o tym, że
 * to nie jest oszustwo wobec producenta.
 * Kąt od jednego miejsca w Karlinie: stał tam zamek
 * z 1308 r., spłonął w 1761, na jego fundamentach
 * postawiono w XIX wieku browar, a dziś stoi tam obiekt
 * hotelowy. Ten sam fundament, trzy zupełnie różne
 * przeznaczenia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zamek zapisano po raz pierwszy w 1308 r., że
 *   w 1481 zniszczyli go mieszczanie okolicznych miast,
 *   a w 1486 odbudowano po zapłaceniu odszkodowania;
 *   że spłonął doszczętnie w 1761 i zostało po nim
 *   najniższe piętro ze sklepieniami, na którym w XIX w.
 *   postawiono zupełnie inny budynek, a dziś stoi tam
 *   jeszcze inny,
 * — ŻE PRZEZNACZENIE NIE JEST WŁASNOŚCIĄ RZECZY —
 *   to jest rdzeń. Jest własnością tego, kto jej używa,
 *   i zmienia się szybciej niż sama rzecz,
 * — ⚠⚠ ŻE W KUCHNI NAJLEPIEJ PRACUJĄCE SPRZĘTY CZĘSTO
 *   ROBIĄ NIE TO, DO CZEGO ZOSTAŁY KUPIONE, i że ludzie
 *   mówią o tym półgłosem, jakby to było oszustwo wobec
 *   producenta. Nie jest,
 * — ⚠⚠ ŻE JEDYNE OGRANICZENIA SĄ DWA I OBA SĄ TWARDE:
 *   (1) instrukcja bezpieczeństwa — czego producent
 *       WPROST zabrania, tego się nie robi, kropka,
 *   (2) materiał i konstrukcja — rzecz nie zrobi tego,
 *       na co nie pozwala jej budowa.
 *   Poza tymi dwiema granicami to kwestia pomysłu,
 *   nie pozwolenia,
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO PRZYKŁADU UŻYCIA
 *   NIEZGODNEGO Z PRZEZNACZENIEM. Każdy taki przykład
 *   byłby albo instrukcją kulinarną, albo poradą
 *   dotyczącą bezpieczeństwa. TWARDA GRANICA BEZWZGLĘDNA,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: TO DZIAŁA W OBIE STRONY.
 *   Sprzęt kupiony do jednej konkretnej rzeczy i używany
 *   wyłącznie do niej bywa najlepiej wydanymi pieniędzmi
 *   w całej kuchni. Wszechstronność nie jest wartością
 *   samą w sobie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TO URZĄDZENIE JEST
 *   WIELOZADANIOWE Z ZAŁOŻENIA i dlatego nie jest
 *   przykładem do tej sekcji. ⚠⚠ MÓWIĘ TEŻ WPROST,
 *   ŻE TU AKURAT INSTRUKCJI TRZYMAM SIĘ BEZ WYJĄTKÓW:
 *   przy urządzeniu z gorącym naczyniem i nożami
 *   pomysłowość kończy się tam, gdzie zaczyna się
 *   instrukcja. TO JEST JEDYNE MIEJSCE, W KTÓRYM
 *   ZAPRZECZAM WŁASNEJ SEKCJI — I ROBIĘ TO ŚWIADOMIE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SPRZĘTU JEDNOZADANIOWEGO I DECYZJI
 *   O ZAKUPIE — kąt zajęty (Łasin). ⚠⚠ TO JEST
 *   NAJBLIŻSZY KĄT. Tam rozstrzyga się, CZY KUPIĆ;
 *   TUTAJ o rzeczach JUŻ POSIADANYCH i o tym, do czego
 *   wolno ich używać. Ani jednego zdania o decyzji
 *   zakupowej. TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO RZECZY NIEUŻYWANYCH — kąt zajęty (Nowogard).
 * — ⚠⚠ ZERO DWÓCH TAKICH SAMYCH RZECZY — kąt zajęty
 *   (Sianów, ta sama fala).
 * — ⚠⚠ ZERO GARNKÓW ODZIEDZICZONYCH — kąt zajęty
 *   (Krośniewice).
 * — ⚠⚠ ZERO INSTRUKCJI, KTÓREJ NIKT NIE CZYTA — kąt
 *   zajęty (Świecie). Instrukcję wymieniam WYŁĄCZNIE
 *   jako granicę bezpieczeństwa, nie jako temat.
 * — ⚠ ZERO WARSTW POD SPODEM — kąt zajęty (Pakość).
 *   Piszę o ZMIANIE PRZEZNACZENIA, nie o tym,
 *   co jest pod spodem.
 * — ⚠ ZERO UKŁADU KUCHNI — kąt zajęty (Myślibórz).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNEGO PRZYKŁADU UŻYCIA SPRZĘTU NIEZGODNIE
 *   Z PRZEZNACZENIEM. Podaję wyłącznie DWIE GRANICE.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE — ani żywności,
 *   ani obsługi sprzętu. Przy tym kącie to ryzyko numer
 *   jeden. Mówię WYŁĄCZNIE „co producent zabrania, tego
 *   się nie robi", i odsyłam do instrukcji. Nie oceniam
 *   żadnego konkretnego przypadku.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ERUPCJI ROPY I POŻARU Z LAT 1980–1981.
 *   To jest najbardziej znany fakt o Karlinie i w całości
 *   katastrofa przemysłowa: trzydzieści pięć dni pożaru,
 *   płomień stu dwudziestu metrów, tysiąc pięćset
 *   ratowników. NIE WSPOMINAM ANI JEDNYM SŁOWEM.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO PIWA, BROWARU JAKO ZAKŁADU I PRODUKCJI
 *   ALKOHOLU. Browar wymieniam WYŁĄCZNIE jako budynek,
 *   który stanął na cudzych fundamentach.
 * — ⚠⚠ ZERO ZNISZCZENIA ZAMKU JAKO AKTU PRZEMOCY —
 *   podaję rok 1481 i odszkodowanie z 1486, bez opisu
 *   zajścia.
 * — ⚠⚠ ZERO WOJNY SIEDMIOLETNIEJ — pożar z 1761 r.
 *   podaję jako sam fakt, bez kontekstu wojennego.
 * — ⚠⚠ ZERO REZYDENCJI BISKUPIEJ I WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ daty dziennej praw miejskich.
 * — NIE PISZĘ ANI SŁOWA O PIWIE.
 * — NIE PODAJĘ PRZYKŁADÓW UŻYCIA NIEZGODNEGO
 *   Z PRZEZNACZENIEM.
 * — NIE OCENIAM ŻADNEGO KONKRETNEGO PRZYPADKU POD KĄTEM
 *   BEZPIECZEŃSTWA.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PRZYPISUJĘ Karlinu produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Karlino leży nad Radwią, dopływem Parsęty, w powiecie
 *   białogardzkim; jest miastem w gminie miejsko-wiejskiej
 *   i liczy 5 463 mieszkańców (GUS, 31.12.2024) na 9,4 km²,
 *   czternaście metrów nad poziomem morza, a cała gmina
 *   8 470 osób na 141 km² w 28 sołectwach,
 * — osadę założono w 1240 r., a prawa miejskie miasto
 *   otrzymało w 1385 r.,
 * — zamek zapisano po raz pierwszy w 1308 r. w dokumencie
 *   biskupa Wachholtza jako „castrum nostrum Corlin";
 *   w 1481 r. zniszczyli go mieszczanie okolicznych miast,
 *   a w 1486 odbudowano po zapłaceniu odszkodowania;
 *   rozbudowywano go w latach 1450–1575 i 1602–1618,
 * — w 1761 r. zamek spłonął doszczętnie; ruiny rozebrano
 *   i zachowało się wyłącznie najniższe piętro
 *   ze sklepieniami, na którym w XIX w. postawiono inny
 *   budynek, a dziś stoi tam obiekt hotelowy,
 * — podczas prac archeologicznych odkryto tam rzadki
 *   dwustronny kominek,
 * — Wyspa Biskupia to fragment miasta otoczony ramionami
 *   Radwi.
 */
export const KARLINO: CityContent = {
  slug: "karlino",
  h1: "Thermomix Karlino – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Karlino — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Karlinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Karlino — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Karlinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Karlina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Karlino"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przeznaczenie nie jest własnością rzeczy. Jest własnością tego, kto jej używa.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Karlinie – jak wygląda prezentacja?",
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
      id: "do-czego-sluzy",
      heading: "Jedne fundamenty, trzy przeznaczenia",
      paragraphs: [
        "W Karlinie jest miejsce, które w ciągu siedmiu wieków było trzema zupełnie różnymi rzeczami.",
        "Najpierw zamkiem. Zapisano go po raz pierwszy w 1308 roku, w dokumencie biskupa Wachholtza, jako „castrum nostrum Corlin”. W 1481 zniszczyli go mieszczanie okolicznych miast, a w 1486 odbudowano — po zapłaceniu odszkodowania. Rozbudowywano go potem w latach 1450–1575 i jeszcze raz na początku siedemnastego wieku.",
        "W 1761 roku spłonął doszczętnie. Ruiny rozebrano i z całego zamku zostało najniższe piętro ze sklepieniami.",
        "I na tym właśnie piętrze, w dziewiętnastym wieku, postawiono zupełnie inny budynek. Dziś stoi tam jeszcze inny — obiekt hotelowy. Te same fundamenty, trzy przeznaczenia, żadne z nich nie było przewidziane przez poprzednika.",
        "Z tego wynika rzecz, którą warto powiedzieć głośno: przeznaczenie nie jest własnością rzeczy. Jest własnością tego, kto jej używa — i zmienia się znacznie szybciej niż sama rzecz.",
        "W kuchni widać to na co dzień. Sprzęty, które pracują u kogoś najlepiej, bardzo często robią nie to, do czego zostały kupione. Ludzie mówią mi o tym półgłosem i z lekkim zażenowaniem, jakby to było drobne oszustwo wobec producenta.",
        "Nie jest. Producent opisał, do czego rzecz jest przeznaczona, a nie do czego wolno jej używać — to dwa różne zdania.",
        "Granice są przy tym dwie i obie są twarde. Pierwsza: instrukcja bezpieczeństwa. Czego producent wprost zabrania, tego się nie robi — bez dyskusji i bez „przecież raz się udało”. Druga: materiał i konstrukcja. Rzecz nie zrobi tego, na co nie pozwala jej budowa, i zwykle kończy się to jej zniszczeniem, a czasem gorzej.",
        "Poza tymi dwiema granicami to jest kwestia pomysłu, a nie pozwolenia. Nie będę podawać przykładów — bo każdy taki przykład byłby albo instrukcją kulinarną, albo poradą dotyczącą bezpieczeństwa, a ja nie jestem od żadnej z tych rzeczy. Rzecz w samej zasadzie, nie w liście.",
        "Uczciwie o drugiej stronie, bo ta działa równie mocno. Sprzęt kupiony do jednej konkretnej rzeczy i używany wyłącznie do niej bywa najlepiej wydanymi pieniędzmi w całej kuchni. Wszechstronność nie jest wartością samą w sobie — jest tylko jedną z możliwych zalet i czasem kosztuje więcej, niż daje.",
        "Na koniec o tym urządzeniu i tu muszę sama sobie zaprzeczyć — świadomie.",
        "Ono jest wielozadaniowe z założenia, więc nie jest przykładem do tej sekcji: nie trzeba wymyślać mu zastosowań, bo ma je opisane. Ale ważniejsze jest co innego. Przy urządzeniu, w którym naczynie bywa gorące, a w środku są noże, pomysłowość kończy się tam, gdzie zaczyna się instrukcja. Tego akurat trzymam się bez wyjątków i tego samego oczekuję od siebie, kiedy gotuję u Was na prezentacji.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Karlinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was w kuchni pracuje najczęściej — nieważne, czy do tego było kupione.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Karlinie"),
    sekcjaRaty("w Karlinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla karlińskiej rodziny",
      paragraphs: [
        "Karlino leży nad Radwią, dopływem Parsęty, w powiecie białogardzkim, i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko pięć i pół tysiąca mieszkańców na dziewięciu i czterech dziesiątych kilometra kwadratowego, zaledwie czternaście metrów nad poziomem morza, a cała gmina ponad osiem tysięcy osób na stu czterdziestu jeden kilometrach kwadratowych, w dwudziestu ośmiu sołectwach. Osadę założono w 1240 roku, a prawa miejskie miasto otrzymało w 1385. Tutejszy zamek zapisano po raz pierwszy w 1308 roku, w dokumencie biskupa Wachholtza, jako „castrum nostrum Corlin”; w 1481 zniszczyli go mieszczanie okolicznych miast, a w 1486 odbudowano po zapłaceniu odszkodowania. Rozbudowywano go w latach 1450–1575 i ponownie w latach 1602–1618. W 1761 roku spłonął doszczętnie, ruiny rozebrano i zachowało się wyłącznie najniższe piętro ze sklepieniami — w dziewiętnastym wieku postawiono na nim zupełnie inny budynek, a dziś stoi tam jeszcze inny. Podczas prac archeologicznych odkryto w tym miejscu rzadki dwustronny kominek. Wyspa Biskupia to fragment miasta otoczony ramionami Radwi.",
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

  districtsHeading: "Do których części Karlina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — także na Wyspę Biskupią, otoczoną ramionami Radwi — i do wszystkich dwudziestu ośmiu sołectw w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Karlino też przyjadę",
  nearbyParagraphs: [
    "Białogard jest jedenaście kilometrów stąd, a Kołobrzeg, Koszalin i Połczyn-Zdrój mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Białogard", "Kołobrzeg", "Koszalin", "Połczyn-Zdrój"],

  about: blokOMnie("do Karlina", "w Karlinie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Karlina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu ośmiu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi na marginesie: Karlino to nie Karlin w łódzkiem, a nazwa jest rodzaju nijakiego — mówi się „piękne Karlino”, nie „piękny”.",
    },
    ...faqWspolne("w Karlinie"),
    {
      question: "Czy można używać sprzętu kuchennego niezgodnie z przeznaczeniem?",
      answer:
        "Producent opisuje, do czego rzecz jest przeznaczona — a nie do czego wolno jej używać. To dwa różne zdania. Granice są dwie i obie twarde: czego instrukcja bezpieczeństwa wprost zabrania, tego się nie robi, i rzecz nie zrobi tego, na co nie pozwala jej budowa. Poza tymi dwiema granicami to kwestia pomysłu, nie pozwolenia. Przykładów nie podaję — każdy byłby albo instrukcją kulinarną, albo poradą o bezpieczeństwie.",
    },
    {
      question: "Czy to samo dotyczy Thermomixa?",
      answer:
        "Tu akurat sama sobie zaprzeczam i robię to świadomie. Urządzenie jest wielozadaniowe z założenia, więc nie trzeba wymyślać mu zastosowań. Ważniejsze jest co innego: przy sprzęcie, w którym naczynie bywa gorące, a w środku są noże, pomysłowość kończy się tam, gdzie zaczyna się instrukcja. Trzymam się tego bez wyjątków, także gotując u Was na prezentacji.",
    },
  ],

  geo: { lat: 54.0335, lng: 15.877 },
};
