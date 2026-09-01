import type { CityContent } from "../city-content";
import {
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
 * UŚCIE GORLICKIE — GMINA WIEJSKA w powiecie gorlickim.
 * 6 771 mieszkańców (31.12.2024) — najmniej ludna w powiecie.
 * ⭐ 287,6 KM² — NAJWIĘKSZA GMINA POWIATU, 29,8% JEGO POWIERZCHNI,
 * przy zaledwie 6,2% ludności. GĘSTOŚĆ 24 OS./KM² — 45 razy rzadziej
 * niż miasto Gorlice (1 078). 120. największa gmina w Polsce.
 *
 * OŚ STRONY: DWIE CERKWIE UNESCO I OSIEM TABLIC W DWÓCH JĘZYKACH.
 * To STAN OBECNY, nie historia — cerkwie stoją, tablice wiszą,
 * Watra płonie. Odróżnia to od Łabowej (`labowa.ts` — pustka
 * po wysiedleniach) i od gminy Grybów (`grybow-gmina.ts` —
 * polityczna efemeryda Republiki Łemkowskiej 1918–1920).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐⭐ DWIE CERKWIE NA LIŚCIE UNESCO, wpis 2013 r., grupa
 *   „Drewniane cerkwie polskiego i ukraińskiego regionu Karpat”
 *   (16 obiektów: 8 w Polsce, 8 na Ukrainie):
 *   1. CERKIEW ŚW. PARASKEWY W KWIATONIU
 *   2. CERKIEW ŚW. MICHAŁA ARCHANIOŁA W BRUNARACH WYŻNYCH (1797)
 *   ⭐ TO CZYNI UŚCIE GORLICKIE JEDYNĄ GMINĄ W POLSCE Z DWIEMA
 *   CERKWIAMI Z TEJ LISTY — sprawdzone na pełnej liście ośmiu
 *   polskich obiektów (pozostałe: Chotyniec, Radruż, Smolnik,
 *   Turzańsk, Powroźnik w gm. Muszyna, Owczary w gm. Sękowa),
 *   ⚠️⚠️ PUŁAPKA: blog mywaytoheaven.pl BŁĘDNIE przypisuje status
 *   UNESCO także cerkwi W SAMYM UŚCIU GORLICKIM. TO NIEPRAWDA.
 *   Lista NID i dzieje.pl są jednoznaczne: TYLKO Kwiatoń i Brunary,
 * — ⚠️ ODRÓŻNIENIE OD SĘKOWEJ (`sekowa.ts`): tam JEDEN kościół
 *   z wpisu 2003 i JEDNA cerkiew z wpisu 2013 — dwa różne dobra.
 *   Tutaj DWIE cerkwie z JEDNEGO wpisu 2013. NIE MYLIĆ TEGO,
 * — POZOSTAŁE CERKWIE (nie UNESCO): Uście Gorlickie — cerkiew
 *   św. Paraskewy, OD 1997 PONOWNIE GRECKOKATOLICKA; Hańczowa —
 *   typ zachodniołemkowski, początek XIX w. (fragmenty drewna
 *   z 1664 znalezione przy remoncie), PLANOWANA ROZBIÓRKA W 1956
 *   ODWOŁANA PO POWROCIE RODZIN ŁEMKOWSKICH, odbudowa 1957–1960,
 *   parafia prawosławna od 1958; Czarna — św. Dymitra, 1764;
 *   Gładyszów — Wniebowstąpienia Pańskiego, 1938–39; Banica —
 *   śś. Kosmy i Damiana, poł. XVIII w.; Skwirtne,
 * — ⭐ DWUJĘZYCZNE TABLICE: LISTOPAD 2011 referenda w sołectwach,
 *   mieszkańcy 8 Z 9 WSI głosują za. KONIEC WRZEŚNIA 2012 stanęły
 *   tablice polsko-łemkowskie w OŚMIU WSIACH: Blechnarka, Gładyszów,
 *   Konieczna, Kunkowa, Nowica, Regietów, Ropki, Zdynia.
 *   W REGIETOWIE POPARCIE BYŁO JEDNOMYŚLNE — i Łemków, i Polaków.
 *   ⚠️ Wcześniej w Małopolsce tablice miała tylko BIELANKA
 *   (gm. Gorlice, 2009) — patrz `gorlice-gmina.ts`,
 * — ⭐ ŁEMKOWSKA WATRA: I EDYCJA 12–14 SIERPNIA 1983 R.,
 *   ⚠️ W CZARNEJ koło Uścia Gorlickiego — NIE w Zdyni!
 *   Pomysłodawcy: Jarosław Trochanowski, Piotr Trochanowski,
 *   Władysław Graban; organizator zespół „Łemkowyna”.
 *   Lokalizacje: 1983 Czarna → 1985 Hańczowa → 1986–1989 Bartne
 *   (gm. Sękowa) → OD 1990 ZDYNIA. 27 grudnia 1989 działki w Zdyni
 *   kupują Teofil Dubec, Piotr Czuchta, Stefan Dzamba.
 *   Od 1990 organizatorem jest Zjednoczenie Łemków. 43. Watra
 *   odbyła się bez przerw w ciągłości.
 *   ⭐ ŁADNY DETAL, KTÓREGO NIKT NIE UŻYWA: Watra zaczęła się
 *   W TEJ SAMEJ GMINIE, w Czarnej,
 * — WYSOWA-ZDRÓJ (TŁO, NIE OŚ — uzdrowiska zajęte przez Krynicę
 *   i Rabkę): 1359 Jan Gładysz dostaje od Kazimierza Wielkiego
 *   ziemie koło Ropy i Zdyni; początek XV w. składy WINA
 *   WĘGIERSKIEGO prowadzone przez kupców greckich i ormiańskich;
 *   DO 1848 KOMORA CELNA; poł. XVIII w. Maciej Lanckoroński
 *   przypisuje odzyskanie zdrowia tutejszym wodom; 1808 pierwsze
 *   łazienki i budynek na 8 pokoi; koniec XIX w. ok. 2 000
 *   kuracjuszy rocznie; 1921 najstarsze zachowane ujęcie („Józef I”);
 *   1963 MINISTERSTWO ZDROWIA UZNAJE WODY ZA LECZNICZE, w tym samym
 *   roku spłonęła stara pijalnia; 2006 nowa pijalnia.
 *   OSIEM ŹRÓDEŁ, wszystkie nazwane: Henryk, Franciszek, Aleksandra
 *   (najbogatsza, z bromem, jodem i żelazem), Józef I, Słone,
 *   Józef II, Bronisław, W-24 „Wysowianka”. Wszystkie to SZCZAWY
 *   wodorowęglanowe, borowe,
 * — PRACODAWCA POTWIERDZONY: UZDROWISKO WYSOWA S.A. — NAJWIĘKSZY
 *   PRACODAWCA GMINY, 96 osób na czas nieokreślony plus ok. 30
 *   na umowach krótkoterminowych. Prywatyzacja 30 listopada 2012,
 *   cena 8 759 625 zł, 87,36% akcji. Sanatoria „Biawena” i „Beskid”,
 *   rozlewnia z dwiema liniami produkcyjnymi,
 * — REGON: 740 podmiotów (2024), 110 na 1 000 mieszkańców,
 * — MIEJSCOWOŚCI — ⚠️ LISTY SIĘ RÓŻNIĄ i obie są niepełne.
 *   Potwierdzone przez oba źródła: Banica, Blechnarka, Brunary,
 *   Czarna, Gładyszów, Hańczowa, Izby, Konieczna, Kunkowa, Kwiatoń,
 *   Leszczyny, Nowica, Regietów, Ropki, Skwirtne, Smerekowiec,
 *   Stawisza, Uście Gorlickie, Wysowa-Zdrój, Zdynia, Śnietnica.
 *   ⚠️ DOKŁADNEJ LICZBY SOŁECTW NIE USTALONO — BIP blokowany.
 *   PISAĆ „ok. dwadzieścia miejscowości”, NIE PODAWAĆ LICZBY,
 * — GRANICA ZE SŁOWACJĄ na południu; przejście KONIECZNA,
 * — SĄSIEDZI: Gorlice, Grybów, Krynica-Zdrój, Ropa, Sękowa.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono imiennie,
 * — ⚠️ TWIERDZENIA, ŻE KUCHNIA ŁEMKOWSKA (fuczki, kwaśnica,
 *   proziaki, adzymała) JEST NA LIŚCIE PRODUKTÓW TRADYCYJNYCH.
 *   Można pisać o tradycji kulinarnej — NIE WOLNO pisać „wpisane
 *   na Listę”,
 * — DANYCH SPISU 2021 O LICZBIE ŁEMKÓW W GMINIE. Nie potwierdzone,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (6,3%, 6 707,16 zł).
 */

export const USCIE_GORLICKIE: CityContent = {
  slug: "uscie-gorlickie",
  h1: "Thermomix Uście Gorlickie – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Uście Gorlickie — cena",
  seoDescription:
    "Thermomix w gminie Uście Gorlickie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich wsi bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Uście Gorlickie — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Uście Gorlickie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Uścia Gorlickiego, Wysowej-Zdroju, Hańczowej, Zdyni i pozostałych wsi gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina, wszystkie wsie, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Uściu Gorlickim – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Dwie cerkwie z listy UNESCO i osiem wsi z drugą nazwą",
      paragraphs: [
        "Sprawdziłam to na pełnej liście i wynik jest jednoznaczny: Uście Gorlickie to jedyna gmina w Polsce, która ma dwie cerkwie wpisane na Listę Światowego Dziedzictwa UNESCO. Cerkiew świętej Paraskewy w Kwiatoniu i cerkiew świętego Michała Archanioła w Brunarach Wyżnych z tysiąc siedemset dziewięćdziesiątego siódmego roku trafiły tam w dwa tysiące trzynastym, w grupie szesnastu drewnianych cerkwi karpackich — ośmiu polskich i ośmiu ukraińskich.",
        "Zaznaczę od razu jedną rzecz, bo krąży błędna informacja: cerkiew w samym Uściu Gorlickim, choć piękna i od tysiąc dziewięćset dziewięćdziesiątego siódmego roku znów greckokatolicka, na tej liście nie figuruje. Są tylko te dwie.",
        "Cerkwi jest tu zresztą znacznie więcej: w Czarnej z tysiąc siedemset sześćdziesiątego czwartego, w Banicy z połowy osiemnastego wieku, w Gładyszowie z lat trzydziestych dwudziestego, w Skwirtnem, w Hańczowej. Ta ostatnia ma historię wartą osobnego zdania — w tysiąc dziewięćset pięćdziesiątym szóstym roku planowano ją rozebrać, a decyzję odwołano dlatego, że do wsi zaczęły wracać rodziny łemkowskie. Odbudowano ją w latach pięćdziesiątych i sześćdziesiątych.",
        "I to jest właśnie rzecz, która odróżnia tę gminę od sąsiadek. Gdzie indziej łemkowska historia to opowieść o tym, czego już nie ma. Tutaj jest stanem obecnym.",
        "Dowód jest urzędowy. W listopadzie dwa tysiące jedenastego roku przeprowadzono w sołectwach referenda; mieszkańcy ośmiu z dziewięciu wsi opowiedzieli się za wprowadzeniem dwujęzycznych nazw. Pod koniec września dwa tysiące dwunastego stanęły tablice polsko-łemkowskie w Blechnarce, Gładyszowie, Koniecznej, Kunkowej, Nowicy, Regietowie, Ropkach i Zdyni. W Regietowie za głosowali wszyscy — i Łemkowie, i Polacy.",
        "Trzecia rzecz dzieje się co roku w sierpniu. Łemkowska Watra w Zdyni jest największym spotkaniem tej społeczności w Polsce i odbywa się nieprzerwanie od czterdziestu z górą lat. Warto jednak wiedzieć, gdzie się zaczęła: pierwsza Watra odbyła się dwunastego, trzynastego i czternastego sierpnia tysiąc dziewięćset osiemdziesiątego trzeciego roku nie w Zdyni, tylko w Czarnej — w tej samej gminie. Do Zdyni przeniosła się dopiero w dziewięćdziesiątym.",
        "Do tego wszystkiego dochodzi przestrzeń, która sama w sobie jest wyróżnikiem. Gmina zajmuje dwieście osiemdziesiąt osiem kilometrów kwadratowych — prawie trzydzieści procent powierzchni całego powiatu — a mieszka w niej niecałe siedem tysięcy osób. Dwadzieścia cztery osoby na kilometr kwadratowy, czyli czterdzieści pięć razy rzadziej niż w Gorlicach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Uście Gorlickie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Koniecznie podaj miejscowość. To największa gmina powiatu, rozciągnięta na dwustu osiemdziesięciu ośmiu kilometrach kwadratowych aż po granicę ze Słowacją — jazda do Blechnarki to zupełnie co innego niż do Brunar. Na cenę to nie wpływa, ale na plan dnia bardzo.",
        "Jeśli pracujesz w uzdrowisku w Wysowej albo prowadzisz kwatery, wspomnij o tym od razu. Wtedy najprościej umówić się poza szczytem sezonu albo wieczorem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Uście Gorlickie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dwadzieścia cztery osoby na kilometr kwadratowy",
      paragraphs: [
        "Ta gmina jest najrzadziej zaludnionym miejscem w powiecie gorlickim i jednym z najrzadszych w Małopolsce. Wsie leżą daleko od siebie, w dolinach ciągnących się ku granicy, a między nimi są przełęcze i las. Zarejestrowanych podmiotów gospodarczych jest siedemset czterdzieści; największym pracodawcą jest uzdrowisko w Wysowej.",
        "Życie codzienne układa się wokół odległości. Do większego sklepu jedzie się kilkanaście, czasem dwadzieścia kilka kilometrów, zimą bywa to trudniejsze, a po drodze nie mija się prawie nikogo. Kupuje się więc rzadziej i większymi partiami.",
        "Kuchnia w takim miejscu musi być planowana i to jest tu najstarszy nawyk, jaki znam. Nie robi się „czegoś na dziś”, tylko zapas: garnek zupy na kilka dni, mięso duszone raz a porządnie, przetwory na zimę robione jesienią, kiedy jest z czego.",
        "Najbardziej praktyczna rzecz jest przy tym prosta. Danie jednogarnkowe gotuje się bez człowieka, samo się wyłącza i czeka — a podzielone na pojemniki obsługuje pół tygodnia bez dodatkowej pracy. Przy dwóch godzinach duszenia to jest różnica między gotowaniem a niegotowaniem.",
        "Druga rzecz to zamrażarka, w tej gminie po prostu podstawowa. Zupy, sosy, pasty, ciasto na pierogi, chleb — robione seriami w spokojne popołudnie, w jednym naczyniu, i odbierane wtedy, gdy nie ma czasu ani ochoty jechać po zakupy.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Kuchnia łemkowska — żywa, choć bez wpisu w rejestrze",
    paragraphs: [
      "Zacznę od zastrzeżenia, bo w tej sprawie łatwo o nadużycie. Kuchnia łemkowska jest tu obecna i opisywana — fuczki, kwaśnica, proziaki, adzymała — ale żadnego z tych dań nie udało mi się powiązać z wpisem na ministerialnej Liście Produktów Tradycyjnych przypisanym tej gminie. Piszę więc o tradycji kulinarnej, a nie o rejestrze.",
      "Ta tradycja ma za to coś rzadszego niż wpis: ciągłość. W ośmiu wsiach tej gminy wiszą urzędowe tablice w dwóch językach, a raz w roku w Zdyni odbywa się największe spotkanie Łemków w Polsce, z jedzeniem jako jednym z jego stałych elementów. Kuchnia nie została tu przeniesiona do muzeum, bo ludzie zostali albo wrócili.",
      "Składnikowo jest to kuchnia gór i biedy w najlepszym sensie tego słowa: mąka, ziemniaki, kapusta, mleko kwaśne, ser, grzyby, mięso rzadko i długo duszone. Proziaki piecze się na blasze z mąki i sody, fuczki smaży z kapusty i ciasta, kwaśnicę gotuje na kiszonej kapuście godzinami.",
      "I właśnie w tej ostatniej rzeczy urządzenie daje najwięcej. Dania długie — kwaśnica, duszone mięso, gęste zupy — potrzebują dwóch godzin w niskiej temperaturze i regularnego mieszania, żeby nic nie przywarło. To prowadzi bez człowieka i samo się wyłącza. Tak samo z przetworami robionymi jesienią seriami.",
      "Czego nie zrobi, mówię wprost i bez owijania: nie usmaży fuczek i nie upiecze proziaka na blasze. Nie zastąpi wprawy ani przepisu, który ktoś ma w głowie od babki. Zabiera przygotowanie — rozdrabnianie, wyrabianie, mieszanie i stanie przy garnku — a resztę zostawia Wam.",
    ],
  },

  districtsHeading: "Gdzie w gminie Uście Gorlickie dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich miejscowości gminy, bez żadnej dopłaty za odległość. Jest ich około dwudziestu, a gmina zajmuje dwieście osiemdziesiąt osiem kilometrów kwadratowych — prawie trzydzieści procent powierzchni powiatu gorlickiego.",
    "Miejscowości to między innymi: Uście Gorlickie, Wysowa-Zdrój, Hańczowa, Zdynia, Gładyszów, Brunary, Kwiatoń, Konieczna, Blechnarka, Regietów, Nowica, Kunkowa, Ropki, Banica, Czarna, Izby, Leszczyny, Skwirtne, Smerekowiec, Stawisza i Śnietnica. Dokładnej liczby sołectw świadomie nie podaję — nie udało mi się dotrzeć do oficjalnego wykazu.",
    "Dwa najważniejsze zabytki to cerkwie wpisane na listę UNESCO: świętej Paraskewy w Kwiatoniu i świętego Michała Archanioła w Brunarach Wyżnych z tysiąc siedemset dziewięćdziesiątego siódmego roku. Dwujęzyczne tablice polsko-łemkowskie wiszą od dwa tysiące dwunastego roku w ośmiu wsiach.",
    "Wysowa-Zdrój to uzdrowisko z ośmioma nazwanymi źródłami — Henryk, Franciszek, Aleksandra, Józef I i II, Słone, Bronisław oraz Wysowianka. Wody uznano za lecznicze w tysiąc dziewięćset sześćdziesiątym trzecim roku, a nową pijalnię otwarto w dwa tysiące szóstym. Miejscowość ma zresztą starszą historię handlową: do tysiąc osiemset czterdziestego ósmego działała tu komora celna, a na początku piętnastego wieku składy węgierskiego wina prowadzili kupcy greccy i ormiańscy.",
    "Dojazd: kolei w gminie nie ma. Na południu jest granica ze Słowacją i przejście graniczne w Koniecznej. Do Gorlic jest z Uścia około piętnastu kilometrów, do Krakowa ponad sto.",
  ],
  districts: [
    "Uście Gorlickie",
    "Wysowa-Zdrój",
    "Hańczowa",
    "Zdynia i Gładyszów",
    "Brunary",
    "Kwiatoń i Skwirtne",
    "Konieczna i Blechnarka",
    "Regietów, Nowica, Banica",
  ],

  nearbyHeading: "Ropa, Sękowa i Krynica-Zdrój też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Gorlicami, gminą wiejską Grybów, Krynicą-Zdrojem, Ropą i Sękową, a od południa ze Słowacją. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie na koniec, bo dotyczy tego samego dziedzictwa: sąsiednia Sękowa też ma dwa obiekty z listy UNESCO, ale z dwóch różnych wpisów — kościół katolicki z dwa tysiące trzeciego i cerkiew z dwa tysiące trzynastego. Tutaj są dwie cerkwie z tego samego wpisu.",
  ],
  nearbyTowns: [
    "Ropa",
    "Sękowa",
    "Krynica-Zdrój",
    "Gorlice",
    "Grybów",
    "Nowy Sącz",
  ],

  about: blokOMnie("do gminy Uście Gorlickie", "w powiecie gorlickim"),

  faq: [
    {
      question: "Mieszkam w Blechnarce albo Regietowie. Dojedziesz tak daleko?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. To najdalsze wsie gminy, przy samej granicy, ale traktuję je dokładnie tak samo jak Uście czy Wysową. Przy umawianiu podaj nazwę miejscowości — gmina jest ogromna i chodzi wyłącznie o zaplanowanie trasy.",
    },
    ...faqWspolne("w gminie Uście Gorlickie"),
    {
      question: "Gotujemy po łemkowsku. Ten sprzęt się do tego nada?",
      answer:
        "Nada się do części roboty i to tej najdłuższej. Kwaśnica czy duszone mięso potrzebują dwóch godzin w niskiej temperaturze i pilnowania, żeby nie przywarło — to urządzenie prowadzi bez człowieka i samo się wyłącza. Fuczek nie usmaży i proziaka na blasze nie upiecze, tego nie będę obiecywać. Na prezentacji chętnie ugotuję coś z Waszego repertuaru zamiast przepisu z folderu.",
    },
  ],

  geo: { lat: 49.5057, lng: 21.1836 },
};
