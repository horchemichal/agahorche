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
 * PNIEWY — powiat szamotulski, woj. wielkopolskie.
 * ⚠ SZAMOTUŁY i WRONKI (ten sam powiat) SĄ OPISANE
 *   W TYM CYKLU.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ PNIEWY W TYM POWIECIE
 *   NIE MA — taki dublet dotyczy OBRZYCKA. SPRAWDZONE.
 * MIASTO: 8 058 mieszkańców (GUS 31.12.2024), 9,3 km²,
 *   gęstość 864,6 os./km² [ZW — domyka się po cofnięciu
 *   zaokrąglenia do 9,32 km²]. PODAJĘ.
 * CAŁA GMINA: 12 345 osób, 158,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (79 w źródle, 77,89 z dzielenia; niezależny
 *   geoportal podaje 77).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: około dwudziestu [źródła podają 20 albo 21].
 *   ⚠ Miejscowości 35 albo 38 — LICZBY NIE PODAJĘ.
 * LESISTOŚĆ GMINY: 16,0 % (GUS 2019).
 *   Ścieżki rowerowe: 7,0 km (2019).
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,517 / 16,267.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM:
 *   M. PNIEWY SĄ / LEŻĄ · D. do PNIEW (bez -ów!) ·
 *   Ms. w PNIEWACH · N. Pniewami.
 *   ⚠⚠⚠ BŁĘDY: „do Pniewów", „w Pniewie", „Pniewy
 *   leży". ORZECZENIE ZAWSZE W LICZBIE MNOGIEJ.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: PNIEWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJA NAZW — POTWIERDZONA I TWARDA:
 *   ISTNIEJĄ DWIE GMINY PNIEWY:
 *     — PNIEWY, gmina MIEJSKO-WIEJSKA, powiat
 *       szamotulski, WIELKOPOLSKIE — 158,5 km²,
 *       12 345 osób, z miastem Pniewy. TO NASZA.
 *     — PNIEWY, gmina WIEJSKA, powiat grójecki,
 *       MAZOWIECKIE — 102 km², 4 864 osoby,
 *       BEZ MIASTA o tej nazwie.
 *   ⚠⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ Przymiotnik „pniewski" jest wspólny dla obu.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1256 r. — „Pniewy zostały
 *     wymienione z nazwy w roku 1256" (urząd).
 *     Początki osady: XII w.
 *   — PRAWA MIEJSKIE: „prawdopodobnie już z końcem
 *     XIII wieku" ⚠⚠⚠ [SP]. URZĄD WPROST STWIERDZA:
 *     PRZYWILEJ LOKACYJNY SIĘ NIE ZACHOWAŁ. PISZĘ TO.
 *     ⚠⚠ BRAKU DOKUMENTU NIE ROBIĘ KĄTEM — figura
 *     zajęta (Prusice, Grodzisk Wielkopolski).
 *   — 1950 r. — zniesienie funkcji burmistrza
 *     i starosty; 1954 r. — gromady; styczeń 1973 r. —
 *     zniesienie gromadzkich rad narodowych.
 *   — Utraty praw nie ustalono.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEZIORO PNIEWSKIE, ROZLEGŁE
 *   I PŁYTKIE:
 *     — powierzchnia 59,7 ha,
 *     — DŁUGOŚĆ 1 120 m, SZEROKOŚĆ 800 m,
 *     — GŁĘBOKOŚĆ MAKSYMALNA 3,3 m, ŚREDNIA 1,5 m.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1 120 ÷ 3,3 = 339.
 *   JEZIORO JEST TRZYSTA TRZYDZIEŚCI DZIEWIĘĆ RAZY
 *   DŁUŻSZE, NIŻ NAJGŁĘBSZE. Do głębokości średniej:
 *   1 120 ÷ 1,5 = 747.
 *   ⚠⚠⚠ [SP — JEDNO ŹRÓDŁO. PISZĘ TO W TEKŚCIE].
 *   ⚠⚠ OBJĘTOŚCI NIE WYLICZAM I NIE PODAJĘ —
 *   to byłoby moje własne szacowanie.
 *   ⚠⚠ NIE PORÓWNUJĘ Z ŻADNYM INNYM JEZIOREM
 *   Z TEGO CYKLU.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — pierwsze Kółko Rolnicze 1875 r.; Bank Ludowy
 *   uruchomiony 16 stycznia 1883 r.; spółdzielnia
 *   rolnicza 1895 r.; Polskie Koło Śpiewacze założone
 *   31 lipca 1891 r., godło otrzymało w 1896 r.
 *   ⚠⚠ ODSTĘPU PIĘCIU LAT (koło bez godła) NIE ROBIĘ
 *   KĄTEM — figura „używane od dawna, zapisane późno"
 *   zajęta (Zawidów).
 * — 1927 r. — Wystawa Przemysłowo-Rolnicza w Pniewach.
 * — ⚠⚠⚠ BRACTWA KURKOWEGO NIE OPISUJĘ — wątek
 *   wykluczony.
 * — ⚠⚠ FABRYKI WODOMIERZY NIE OPISUJĘ — prowadzi
 *   do nazwy firmy.
 * — ⚠⚠ SPADKU LUDNOŚCI GMINY PO 2019 R. NIE UŻYWAM —
 *   wątek wyludnienia wykluczony.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO — ANI JEDNEJ
 *   LICZBY KILOMETRÓW POZA WYMIARAMI JEZIORA.
 *
 * KĄT: SZEROKIE A PŁYTKIE
 * — o repertuarze rozległym i cienkim, i o tym, kiedy
 * to wada, a kiedy nie. Kąt z Jeziora Pniewskiego:
 * tysiąc sto dwadzieścia metrów długości i trzy metry
 * głębokości.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Jezioro Pniewskie ma 59,7 ha, 1 120 m długości
 *   i 800 m szerokości, a głębokość maksymalną 3,3 m
 *   i średnią 1,5 m,
 * — ŻE JEST TRZYSTA TRZYDZIEŚCI DZIEWIĘĆ RAZY DŁUŻSZE,
 *   NIŻ NAJGŁĘBSZE. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE TO JEDNO ŹRÓDŁO,
 * — ⚠⚠ ŻE W KUCHNI TAK WYGLĄDA WIĘKSZOŚĆ REPERTUARÓW:
 *   trzydzieści dań umianych po łebkach i ani jednego
 *   umianego na pamięć,
 * — ⚠⚠ ŻE TO NIE JEST WADA SAMA W SOBIE — płytkie
 *   jezioro szybciej się nagrzewa i łatwiej po nim
 *   chodzić. Szeroki repertuar daje wybór,
 * — ⚠⚠ ŻE WADĄ JEST DOPIERO BRAK CHOĆBY JEDNEGO
 *   GŁĘBOKIEGO MIEJSCA: dania, które robisz bez
 *   patrzenia, w najgorszy dzień, bez decyzji,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wybierz jedno danie
 *   i pogłęb je. Zrób je dziesięć razy, aż przestanie
 *   wymagać myślenia,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: są domy, w których
 *   głębokie miejsce jest jedno i to za mało — wszyscy
 *   mają już dość tego jednego dania. Wtedy trzeba
 *   rozszerzać, nie pogłębiać. ROZRÓŻNIK: ile masz dań
 *   robionych bez patrzenia,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie sprzyja
 *   ROZSZERZANIU, nie pogłębianiu — prowadzone przepisy
 *   zachęcają do próbowania nowego. MÓWIĘ WPROST,
 *   że to zaleta i ryzyko naraz.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LISTY KANONICZNEJ — kąt zajęty (Mosina).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam chodziło o to, ILE dań naprawdę
 *   gotujesz; tu o to, JAK DOBRZE umiesz którekolwiek
 *   z nich. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NIE WSZYSTKO SKALUJE SIĘ RAZEM — kąt
 *   zajęty (Pobiedziska, ta sama fala).
 * — ⚠⚠ ZERO OPISANE SĄ TYLKO NAJWIĘKSZE — kąt zajęty
 *   (Wronki). ⚠⚠⚠ TAM TEŻ SĄ JEZIORA. ŻADNEGO
 *   PORÓWNYWANIA JEZIOR.
 * — ⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt zajęty
 *   (Złotów).
 * — ⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód).
 * — ⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty
 *   (Trzcianka).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   ANI O KĄPIELI.
 * — ⚠⚠ ŻADNEGO OCENIANIA CZYJEGOŚ REPERTUARU.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO I BRACTW · ZERO POWODZI I POŻARÓW JAKO
 *   ŻYWIOŁU · ZERO WYLUDNIENIA · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ liczby miejscowości.
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE WYLICZAM objętości jeziora.
 * — NIE PORÓWNUJĘ jeziora z innymi z tego cyklu.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pniewy leżą w powiecie szamotulskim; miasto liczy
 *   8 058 mieszkańców (GUS, 31.12.2024) na 9,3 km²,
 *   czyli 864,6 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 12 345 osób na 158,5 km²
 *   i dzieli się na około dwadzieścia sołectw,
 * — lasy zajmują 16 % powierzchni gminy, a ścieżek
 *   rowerowych jest 7 km (dane z 2019 r.),
 * — Pniewy wymieniono z nazwy w 1256 r., a początki
 *   osady sięgają XII w.; prawa miejskie miasto
 *   otrzymało prawdopodobnie pod koniec XIII w. —
 *   przywilej lokacyjny się nie zachował,
 * — Jezioro Pniewskie ma 59,7 ha, 1 120 m długości
 *   i 800 m szerokości, przy głębokości maksymalnej
 *   3,3 m i średniej 1,5 m,
 * — pierwsze Kółko Rolnicze założono w 1875 r., Bank
 *   Ludowy uruchomiono 16 stycznia 1883 r., spółdzielnię
 *   rolniczą w 1895 r., a Polskie Koło Śpiewacze
 *   31 lipca 1891 r.; w 1927 r. odbyła się tu Wystawa
 *   Przemysłowo-Rolnicza,
 * — w 1950 r. zniesiono funkcje burmistrza i starosty,
 *   a w styczniu 1973 r. gromadzkie rady narodowe,
 * — istnieje też gmina wiejska Pniewy w województwie
 *   mazowieckim (powiat grójecki), o powierzchni 102 km²
 *   i 4 864 mieszkańcach; nie ma w niej miasta o tej
 *   nazwie.
 */
export const PNIEWY: CityContent = {
  slug: "pniewy",
  h1: "Thermomix Pniewy – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pniewy — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Pniewach w powiecie szamotulskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pniewy — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pniewach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pniew z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw w gminie.",

  highlights: highlightyStandardowe("Pniewy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Tysiąc sto metrów długości. Trzy metry głębokości.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pniewach – jak wygląda prezentacja?",
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
      id: "szerokie-a-plytkie",
      heading: "Szerokie a płytkie",
      paragraphs: [
        "Jezioro Pniewskie ma niecałe sześćdziesiąt hektarów, tysiąc sto dwadzieścia metrów długości i osiemset szerokości. A głębokość maksymalną trzy metry z kawałkiem; średnią — metr pięćdziesiąt.",
        "Podzielmy: jest trzysta trzydzieści dziewięć razy dłuższe, niż najgłębsze. Te wymiary znalazłam w jednym miejscu i nie udało mi się ich potwierdzić drugim, więc traktuję je jako przybliżenie.",
        "Rozległe i płytkie. Tak wygląda większość domowych repertuarów, o jakich słyszę przy stole.",
        "Trzydzieści dań umianych po łebkach — każde raz albo dwa razy zrobione, każde wymagające przepisu, telefonu w ręku i uważności. I ani jednego umianego na pamięć.",
        "Nie nazwę tego wadą samą w sobie, bo nie jest. Płytkie jezioro szybciej się nagrzewa i łatwiej po nim chodzić — a szeroki repertuar daje wybór i chroni od nudy. Wadą jest dopiero coś innego: brak choćby jednego głębokiego miejsca.",
        "Głębokie miejsce to danie, które robisz bez patrzenia. W najgorszy dzień, po dwunastu godzinach, bez jednej decyzji do podjęcia — ręka wie, po co sięgnąć i w jakiej kolejności. Dom bez takiego dania jest kuchnią, w której każdy obiad jest małym projektem.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że „umiem tylko trzy rzeczy” jest zwykle nieprawdą, bo przez kuchnię przechodzi znacznie więcej dań. Tam pytanie brzmiało, ILE ich jest. Tu brzmi inaczej: jak dobrze umiesz którekolwiek z nich.",
        "Ruch jest jeden i jest niepozorny. Wybierz jedno danie i pogłęb je. Zrób je dziesięć razy — nie dziesięć różnych, dziesięć razy to samo — aż przestanie wymagać myślenia. Po dziesiątym razie zauważysz, że nie sięgasz już po przepis.",
        "Uczciwie o drugiej stronie: są domy, w których głębokie miejsce jest jedno i to za mało. Wszyscy mają już dość tej jednej zupy i nikt nie chce jej widzieć. Wtedy trzeba rozszerzać, nie pogłębiać. Rozróżnik jest prosty: ile macie dań robionych bez patrzenia. Jeśli zero — pogłębiaj. Jeśli jedno i wszystkich męczy — rozszerzaj.",
        "I uczciwie o sprzęcie. Thermomix sprzyja raczej rozszerzaniu niż pogłębianiu: prowadzone przepisy zachęcają, żeby co tydzień spróbować czegoś nowego, i łatwo skończyć z jeszcze szerszym, jeszcze płytszym jeziorem. To jest zaleta i ryzyko naraz. Radzę więc zacząć odwrotnie niż wszyscy — od przeniesienia jednego dania, które już znacie, i zrobienia go kilka razy.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pniewach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, które danie robicie bez patrzenia. Jeśli żadne — to też ważna odpowiedź i od niej zaczniemy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pniewach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Pniew",
      paragraphs: [
        "Pniewy leżą w powiecie szamotulskim. Samo miasto liczy 8 058 mieszkańców (GUS, 31.12.2024) na 9,3 kilometra kwadratowego, czyli osiemset sześćdziesiąt pięć osób na kilometr, a cała gmina miejsko-wiejska 12 345 osób na 158,5 kilometra i dzieli się na około dwadzieścia sołectw. Gęstości dla gminy nie podaję, bo liczba ze źródła się nie domyka. Lasy zajmują szesnaście procent powierzchni gminy, ścieżek rowerowych jest siedem kilometrów. Pniewy wymieniono z nazwy w 1256 roku, a początki osady sięgają dwunastego wieku; prawa miejskie miasto otrzymało prawdopodobnie pod koniec trzynastego wieku — przywilej lokacyjny się nie zachował, więc dokładnej daty po prostu nie ma. Jezioro Pniewskie ma niecałe sześćdziesiąt hektarów przy głębokości maksymalnej trzech i trzech dziesiątych metra. Pierwsze Kółko Rolnicze założono w 1875 roku, Bank Ludowy uruchomiono 16 stycznia 1883, spółdzielnię rolniczą w 1895, a Polskie Koło Śpiewacze 31 lipca 1891. W 1927 odbyła się tu Wystawa Przemysłowo-Rolnicza.",
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

  districtsHeading: "Do których części Pniew dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sołectw w gminie: Nojewa, Lubosiny i Lubosinka, Chełmna, Buszewa i Buszewka, Koszanowa, Lubocześnicy, Psarskiego, Zamorza, Turowa, Szymanowa i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu koniecznie dopisz powiat szamotulski albo województwo wielkopolskie. Istnieje druga gmina Pniewy — wiejska, w powiecie grójeckim na Mazowszu — i wyszukiwarki mieszają je regularnie.",
  ],
  districts: [],

  nearbyHeading: "Poza Pniewy też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Szamotuł, Międzychodu, Lwówka, Wronek i Opalenicy — wszędzie bezpłatnie, tak samo jak w samych Pniewach.",
  ],
  nearbyTowns: ["Szamotuły", "Międzychód", "Lwówek", "Wronki", "Opalenica"],

  about: blokOMnie("do Pniew", "w Pniewach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pniew bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: Pniewy są w liczbie mnogiej, więc „Pniewy leżą”, „do Pniew” i „w Pniewach” — nie „do Pniewów”. I praktyczna: chodzi o Pniewy w powiecie szamotulskim, bo istnieje też gmina wiejska Pniewy na Mazowszu, w powiecie grójeckim, i wyszukiwarki mieszają je regularnie.",
    },
    ...faqWspolne("w Pniewach"),
    {
      question: "Znam dużo przepisów, ale żadnego nie zrobię bez zaglądania. Czy to problem?",
      answer:
        "Zależy, ile macie dań robionych bez patrzenia. Jezioro Pniewskie ma tysiąc sto dwadzieścia metrów długości i trzy metry głębokości — jest trzysta trzydzieści dziewięć razy dłuższe, niż najgłębsze. Szeroki i płytki repertuar nie jest wadą sam w sobie, bo daje wybór. Wadą jest brak choćby jednego głębokiego miejsca: dania, które zrobisz w najgorszy dzień bez jednej decyzji. Jeśli nie macie żadnego — wybierzcie jedno i zrobicie je dziesięć razy, nie dziesięć różnych.",
    },
    {
      question: "Czy z Thermomixem będę gotować bardziej różnorodnie?",
      answer:
        "Najprawdopodobniej tak — i dlatego uprzedzam, że to zaleta i ryzyko naraz. Prowadzone przepisy zachęcają, żeby co tydzień spróbować czegoś nowego, i łatwo skończyć z jeszcze szerszym, jeszcze płytszym repertuarem: dużo rzeczy zrobionych raz i nic umianego na pamięć. Radzę zacząć odwrotnie: przenieść do urządzenia jedno danie, które już znacie, i zrobić je kilka razy. Nowości potem.",
    },
  ],

  geo: { lat: 52.517, lng: 16.267 },
};
