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
 * WITKOWO — powiat gnieźnieński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ WITKOWO NIE MA —
 *   w powiecie gnieźnieńskim taki dublet dotyczy
 *   GNIEZNA. SPRAWDZONE.
 * MIASTO: 7 399 mieszkańców (GUS 31.12.2024), 8,3 km²,
 *   gęstość 890,4 os./km² [ZW — domyka się po cofnięciu
 *   zaokrąglenia do 8,31 km², wartość potwierdzona
 *   niezależnie]. PODAJĘ.
 * CAŁA GMINA: 12 997 osób, 184,6 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (71 w źródle, 70,41 z dzielenia; niezależny
 *   geoportal podaje 70,2).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 26. ⚠ Miejscowości źródło podaje 40 —
 *   PISZĘ „dwadzieścia sześć sołectw".
 * LASY GMINY: 3 914 ha, czyli 21,23 % powierzchni.
 * ROLNICTWO: 12 147 ha użytków rolnych w klasach II–IV;
 *   900 gospodarstw indywidualnych, średnia 15 ha.
 *   ⚠⚠ ŚREDNIEJ NIE ROBIĘ KĄTEM — figura zajęta
 *   (Oborniki). PODAJĘ JAKO GOŁY FAKT ALBO POMIJAM.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,4364 / 17,7742.
 * JEZIORA: NIEDZIĘGIEL (zwane też SKORZĘCIŃSKIM),
 *   BIAŁE, CZARNE; odpływ przez NOTEĆ ZACHODNIĄ.
 *   ⚠⚠⚠ POWIERZCHNI JEZIORA NIEDZIĘGIEL NIE PODAJĘ
 *   ANI RAZU — pięć źródeł podaje pięć różnych wartości
 *   (550,9 / 602,5 / 630 / 637,7 / 641,3 ha), a także
 *   dwie wysokości tafli i dwie objętości. ⚠⚠⚠ TEJ
 *   ROZBIEŻNOŚCI NIE ROBIĘ KĄTEM — figura „spór
 *   o liczbę" zajęta (Szamotuły).
 *   ⚠ Jezioro Białe: 46 ha, głębokość średnia 4,7 m,
 *     maksymalna 10,2 m — TE LICZBY SĄ ZGODNE, PODAJĘ.
 *
 * ⚠⚠ ODMIANA — RODZAJ NIJAKI:
 *   D. do WITKOWA · Ms. w WITKOWIE · N. Witkowem.
 *   ⚠⚠⚠ BŁĘDY: „do Witkowego", „w Witkowym".
 *   Przymiotnik: WITKOWSKI. NIE plurale tantum.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — GĘSTE:
 *   WITKOWO występuje jako nazwa wielu wsi w Polsce,
 *   m.in. w zachodniopomorskim i kujawsko-pomorskim
 *   (Witkowo Pierwsze / Witkowo Drugie) [SP] ·
 *   WITKOWICE (małopolskie, śląskie) [NP].
 *   ⚠⚠ Przymiotnik „witkowski" odnosił się też do
 *   POWIATU WITKOWSKIEGO (1887–1927), który obejmował
 *   inny obszar. ROZGRANICZAM W FAQ.
 *   ⚠ W latach 1975–1998 Witkowo należało do
 *     województwa konińskiego, nie poznańskiego.
 *
 * ⚠⚠ DATY USTROJOWE — SIEDEM DATOWAŃ [SP]:
 *   — PIERWSZA WZMIANKA: 1363 r.
 *   — PRAWA MIEJSKIE: „około 1676 r." — ⚠⚠⚠ ŹRÓDŁO
 *     SAMO NAZYWA TĘ DATĘ NIEDOKUMENTOWANĄ,
 *   — 1680 r. — przypuszczalna lokacja,
 *   — 1684 r. — pierwsze użycie słowa „miasto"
 *     w źródłach; przywilej jarmarczny,
 *   — 1688 r. — UTRATA statusu miasta,
 *   — 1740 r. — kolejny przywilej lokacyjny,
 *   — 1772 r. — odnowienie praw miejskich,
 *   — 1782 r. — ponowienie lokacji zatwierdzone przez
 *     Stanisława Augusta.
 *   ⚠⚠⚠ CAŁEGO TEGO CIĄGU NIE ROBIĘ KĄTEM — figury
 *   „trzeci raz to już właściwość" (Mirsk), „x lat bez
 *   statusu" (Szklarska Poręba) i „przerwa nie kasuje
 *   początku" (Trzcianka) są zajęte. PODAJĘ SKRÓCONY
 *   CIĄG W BLOKU FAKTÓW, Z ZASTRZEŻENIEM [SP],
 *   I BEZ MORAŁU.
 *   — 1995 r. — z gminy wyłączono gminę Powidz.
 *     ⚠⚠ LICZB TEGO WYŁĄCZENIA NIE PODAJĘ.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WIĘCEJ LUDZI, MNIEJ DOMÓW:
 *   — 1811 r.: 1 599 mieszkańców, 187 DOMÓW,
 *   — 1831 r.: 1 937 mieszkańców, 169 DOMÓW,
 *   — 1893 r.: 1 583 mieszkańców, 159 DOMÓW.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA:
 *   1 937 ÷ 1 599 = +21,1 %; 169 ÷ 187 = −9,6 %.
 *   NA DOM: 1811 — 8,55; 1831 — 11,46; 1893 — 9,96.
 *   W CIĄGU DWUDZIESTU LAT LUDZI PRZYBYŁO O PONAD
 *   JEDNĄ PIĄTĄ, A DOMÓW UBYŁO O DZIESIĄTĄ CZĘŚĆ.
 *   ⚠⚠⚠ [SP — JEDNO ŹRÓDŁO, opracowanie lokalne.
 *   PISZĘ TO W TEKŚCIE].
 *   ⚠⚠ PRZYCZYN NIE ZNAM I NIE ZGADUJĘ. ⚠⚠⚠ ANI SŁOWA
 *   O BIEDZIE, CIASNOCIE JAKO PROBLEMIE SPOŁECZNYM
 *   CZY WARUNKACH ŻYCIA — TO WĄTKI WYKLUCZONE.
 *   OPISUJĘ DWIE MIARY IDĄCE W PRZECIWNE STRONY.
 *
 * KĄT: WIĘCEJ LUDZI, MNIEJ MIEJSCA
 * — o tym, że kiedy w domu przybywa osób, kuchnia się
 * nie powiększa. Kąt z Witkowa: między 1811 a 1831 r.
 * mieszkańców przybyło o ponad jedną piątą, a domów
 * ubyło.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1811 r. było tu 1 599 osób i 187 domów,
 *   a w 1831 — 1 937 osób i 169 domów,
 * — ŻE LUDZI PRZYBYŁO O PONAD JEDNĄ PIĄTĄ, A DOMÓW
 *   UBYŁO O DZIESIĄTĄ CZĘŚĆ. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE TO JEDNO ŹRÓDŁO i że przyczyn nie znam,
 * — ⚠⚠ ŻE W DOMU DZIEJE SIĘ TO SAMO I NIKT TEGO NIE
 *   ZAPISUJE: rodzi się dziecko, wraca ktoś na studia,
 *   przyjeżdża babcia — a kuchnia jest ta sama,
 * — ⚠⚠ ŻE ROŚNIE NIE ILOŚĆ PRACY, TYLKO LICZBA RZECZY
 *   DZIEJĄCYCH SIĘ JEDNOCZEŚNIE w tej samej
 *   przestrzeni,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przy większej liczbie osób
 *   nie dokupuj sprzętu, tylko rozsuń czynności
 *   w czasie. Jedna rzecz naraz w kuchni, w której
 *   wcześniej robiło się dwie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: więcej osób to też
 *   więcej rąk. Jeśli nowa osoba w domu nic w kuchni
 *   nie robi, problemem nie jest metraż,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie POZWALA ZEJŚĆ
 *   Z DROGI — pracuje samo, bez stania nad nim, więc
 *   zwalnia miejsce przy blacie. Ale ZAJMUJE BLAT
 *   NA STAŁE. MÓWIĘ OBIE STRONY.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ILE UTRZYMANIA NA OSOBĘ — kąt zajęty
 *   (Słupca). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam wyposażenie zostawało,
 *   a UBYWAŁO osób, które je utrzymują; tu osób
 *   PRZYBYWA, a miejsce zostaje takie samo.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie).
 * — ⚠⚠⚠ ZERO NIE WSZYSTKO SKALUJE SIĘ RAZEM — kąt
 *   zajęty (Pobiedziska, ta sama fala).
 * — ⚠⚠ ZERO STABILNEJ SUMY — kąt zajęty (Wąsosz).
 * — ⚠⚠ ZERO PLAN PRZEKRACZA CAŁOŚĆ — kąt zajęty
 *   (Murowana Goślina).
 * — ⚠⚠ ZERO PRZYGOTOWANE, NIE TYLKO ISTNIEJĄCE — kąt
 *   zajęty (Rogoźno).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO WĄTKU BIEDY, CIASNOTY MIESZKANIOWEJ
 *   ANI WARUNKÓW ŻYCIA — ANI HISTORYCZNIE, ANI DZIŚ.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   HERBU · ZERO BIEDY I WARUNKÓW MIESZKANIOWYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ powierzchni jeziora Niedzięgiel.
 * — NIE PODAJĘ liczby miejscowości.
 * — NIE PODAJĘ dat lokacji jako pewnych.
 * — NIE ZGADUJĘ, dlaczego ubyło domów.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Witkowo leży w powiecie gnieźnieńskim; miasto liczy
 *   7 399 mieszkańców (GUS, 31.12.2024) na 8,3 km²,
 *   czyli 890,4 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 12 997 osób na 184,6 km²
 *   i dzieli się na 26 sołectw,
 * — lasy zajmują 3 914 ha, czyli 21,23 % powierzchni
 *   gminy, a użytki rolne 12 147 ha w klasach II–IV,
 *   przy 900 gospodarstwach indywidualnych,
 * — w gminie leżą jeziora Niedzięgiel (zwane też
 *   Skorzęcińskim), Białe i Czarne, a odpływ prowadzi
 *   przez Noteć Zachodnią; Jezioro Białe ma 46 ha,
 *   głębokość średnią 4,7 m i maksymalną 10,2 m,
 * — pierwsza wzmianka pochodzi z 1363 r.; prawa miejskie
 *   datuje się na około 1676 r., miasto utraciło je
 *   w 1688 r., a odnawiano je w 1740, 1772 i 1782 r. —
 *   źródła nie są tu zgodne,
 * — w latach 1975–1998 Witkowo należało do województwa
 *   konińskiego,
 * — w 1811 r. mieszkało tu 1 599 osób w 187 domach,
 *   w 1831 r. — 1 937 osób w 169 domach, a w 1893 r. —
 *   1 583 osoby w 159 domach.
 */
export const WITKOWO: CityContent = {
  slug: "witkowo",
  h1: "Thermomix Witkowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Witkowo — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Witkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Witkowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Witkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Witkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu sześciu sołectw w gminie.",

  highlights: highlightyStandardowe("Witkowo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "O jedną piątą więcej ludzi. O dziesiątą część mniej domów.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Witkowie – jak wygląda prezentacja?",
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
      id: "wiecej-ludzi-mniej-miejsca",
      heading: "Więcej ludzi, mniej miejsca",
      paragraphs: [
        "W 1811 roku w Witkowie mieszkało 1 599 osób w stu osiemdziesięciu siedmiu domach. W 1831 — 1 937 osób w stu sześćdziesięciu dziewięciu.",
        "Ludzi przybyło o ponad jedną piątą. Domów ubyło o dziesiątą część. Podaję to za jednym opracowaniem, więc mówię ostrożniej niż o danych z GUS-u, i przyczyn nie znam.",
        "Dwie miary tej samej rzeczy, idące w przeciwne strony. I to jest sytuacja, w której znajduje się prędzej czy później prawie każdy dom.",
        "Bo dom rośnie skokami i nikt tego nie zapisuje. Rodzi się dziecko. Wraca ktoś ze studiów, na chwilę, na dwa lata. Przyjeżdża babcia. Wprowadza się partner z własnym sposobem gotowania. A kuchnia jest ta sama: ten sam blat, ta sama liczba palników, ten sam metr kwadratowy między lodówką a stołem.",
        "Zwróć uwagę, że rośnie wtedy nie tyle ilość pracy, ile liczba rzeczy dziejących się jednocześnie. Ktoś kroi, ktoś szuka szklanki, ktoś stawia czajnik, dziecko siedzi na blacie. Kuchnia, w której spokojnie pracowała jedna osoba, przy trzech przestaje działać — nie z braku sprzętu, tylko z braku miejsca na równoczesność.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o wyposażeniu, które zostaje takie samo, gdy z domu ubywa ludzi — i o tym, że obciążenie na osobę wtedy rośnie. Tu jest odwrotnie: osób przybywa, a miejsce zostaje.",
        "Ruch jest jeden i nic nie kosztuje. Przy większej liczbie osób nie dokupuj sprzętu — rozsuń czynności w czasie. Jedna rzecz naraz w kuchni, w której wcześniej robiło się dwie. Obiad wstawiony pół godziny wcześniej, zanim wszyscy wrócą. Nakrywanie do stołu przed gotowaniem, nie w trakcie.",
        "Uczciwie o drugiej stronie: więcej osób to też więcej rąk, i to bywa prawdziwym rozwiązaniem. Jeśli nowa osoba w domu nie robi w kuchni nic, to problemem nie jest metraż — i żadne przestawianie garnków tego nie naprawi.",
        "I uczciwie o sprzęcie, w obie strony. Thermomix pozwala zejść kuchni z drogi: pracuje sam, więc nie trzeba przy nim stać, a to zwalnia miejsce przy blacie w najgorętszym momencie. Ale zajmuje blat na stałe, także wtedy, gdy nie pracuje. W małej kuchni to realny koszt i trzeba go policzyć przed zakupem, a nie po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Witkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile osób bywa w kuchni jednocześnie o osiemnastej. To inne pytanie niż „ile osób mieszka”.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Witkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Witkowa",
      paragraphs: [
        "Witkowo leży w powiecie gnieźnieńskim, a w latach 1975–1998 należało do województwa konińskiego. Samo miasto liczy 7 399 mieszkańców (GUS, 31.12.2024) na 8,3 kilometra kwadratowego, czyli osiemset dziewięćdziesiąt osób na kilometr, a cała gmina miejsko-wiejska 12 997 osób na 184,6 kilometra i dzieli się na dwadzieścia sześć sołectw. Gęstości dla gminy nie podaję, bo liczba ze źródła się nie domyka. Lasy zajmują 3 914 hektarów, czyli przeszło dwadzieścia jeden procent gminy, a użytki rolne 12 147 hektarów w klasach od drugiej do czwartej, przy dziewięciuset gospodarstwach indywidualnych. W gminie leżą jeziora Niedzięgiel — zwane też Skorzęcińskim — Białe i Czarne, z odpływem przez Noteć Zachodnią; Jezioro Białe ma czterdzieści sześć hektarów, głębokość średnią czterech i siedmiu dziesiątych metra i maksymalną dziesięciu i dwóch dziesiątych. Pierwsza wzmianka pochodzi z 1363 roku. Z prawami miejskimi jest tu wyjątkowo zawile: datuje się je na około 1676, miasto utraciło je w 1688, a odnawiano w 1740, 1772 i 1782 — i żadne z tych datowań nie jest w źródłach pewne.",
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

  districtsHeading: "Do których części Witkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sześciu sołectw w gminie: Skorzęcina, Kołaczkowa, Gorzykowa, Chłądowa, Jaworowa, Dębiny, Kamionki, Gaju i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto dopisać powiat gnieźnieński — Witkowo to nazwa kilku wsi w innych częściach Polski, a przymiotnik „witkowski” odnosił się dawniej także do powiatu, który obejmował inny obszar niż dzisiejsza gmina.",
  ],
  districts: [],

  nearbyHeading: "Poza Witkowo też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Gniezna, Trzemeszna, Czerniejewa, Kłecka i Słupcy — wszędzie bezpłatnie, tak samo jak w samym Witkowie.",
  ],
  nearbyTowns: ["Gniezno", "Trzemeszno", "Czerniejewo", "Kłecko", "Słupca"],

  about: blokOMnie("do Witkowa", "w Witkowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Witkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sześciu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: mówi się „do Witkowa” i „w Witkowie”, a nie „do Witkowego”. I warto dopisać powiat gnieźnieński, bo Witkowo to nazwa kilku wsi w innych województwach.",
    },
    ...faqWspolne("w Witkowie"),
    {
      question: "Od kiedy w domu jest więcej osób, kuchnia zrobiła się nie do wytrzymania. Co zmienić?",
      answer:
        "Najpierw zauważyć, co się właściwie zmieniło. W Witkowie między 1811 a 1831 rokiem mieszkańców przybyło o ponad jedną piątą, a domów ubyło o dziesiątą część — dwie miary poszły w przeciwne strony. W kuchni rośnie zwykle nie ilość pracy, tylko liczba rzeczy dziejących się jednocześnie w tej samej przestrzeni. Dlatego nie dokupujcie sprzętu, a rozsuńcie czynności w czasie: obiad pół godziny wcześniej, nakrywanie przed gotowaniem, jedna rzecz naraz.",
    },
    {
      question: "Mam małą kuchnię i dużo osób. Czy Thermomix pomoże, czy przeszkodzi?",
      answer:
        "Jedno i drugie, więc powiem obie strony. Pomaga tym, że pracuje sam — nie trzeba przy nim stać, więc w najgorętszym momencie zwalnia miejsce przy blacie dla kogoś innego. Przeszkadza tym, że zajmuje kawałek blatu na stałe, także wtedy, gdy nie pracuje. W małej kuchni ten koszt jest realny i trzeba go policzyć przed zakupem. Na prezentacji zwykle po prostu stawiamy urządzenie tam, gdzie miałoby stać, i widać, czy się to spina.",
    },
  ],

  geo: { lat: 52.4364, lng: 17.7742 },
};
