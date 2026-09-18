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
 * SZAMOTUŁY — powiat szamotulski (siedziba),
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 18 178 mieszkańców (GUS 31.12.2024), 11,1 km²,
 *   gęstość 1 640,6 os./km² [ZW, domyka się]. PODAJĘ.
 * CAŁA GMINA: 29 973 osoby, 175,5 km², gęstość
 *   171 os./km² [ZW — DOMYKA SIĘ. PODAJĘ].
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI W GMINIE: 38.
 *   ⚠ en-wiki podaje 49 — ROZBIEŻNOŚĆ. Trzymam się
 *   liczby z polskawliczbach (38) i nie komentuję.
 * ⚠⚠ POWIERZCHNI MIASTA W WERSJI en-wiki (10,11 km²)
 *   NIE UŻYWAM — to inny pomiar, nie zaokrąglenie.
 *   PODAJĘ WYŁĄCZNIE 11,1 km² ZA GUS.
 * WYSOKOŚĆ: 115 m n.p.m.
 * ⚠ GEO: 52,6117 / 16,5779.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM (LICZBA MNOGA):
 *   M. SZAMOTUŁY SĄ · D. do SZAMOTUŁ (bezkońcówkowy!) ·
 *   Ms. w SZAMOTUŁACH · N. Szamotułami.
 *   ⚠⚠⚠ BŁĄD: „do Szamotułów". SPRAWDZIĆ OSOBNYM
 *   PRZEBIEGIEM. ORZECZENIE ZAWSZE W LICZBIE MNOGIEJ.
 *   Przymiotnik: SZAMOTULSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1231 r., zapis „de Samotul".
 *   — PRAWA MIEJSKIE: 1383 r. ⚠⚠⚠ [SP]. Część źródeł
 *     podaje 1231 — to mylenie praw z pierwszą
 *     wzmianką. PISZĘ „1383 r., choć źródła nie są
 *     zgodne".
 *   ⚠⚠ RÓŻNICY 1231→1383 NIE ROBIĘ KĄTEM — figura
 *   „x lat bez statusu" zajęta (Szklarska Poręba).
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEDEN OBIEKT, DWA LICZENIA:
 *   BASZTA HALSZKI, zespół zamkowy:
 *     — zamek.org.pl: „CZTERY KONDYGNACJE
 *       (piwnica + 3 piętra)",
 *     — zabytek.pl: „TRZYKONDYGNACYJNA budowla
 *       z wysoką piwnicą".
 *   ⚠⚠⚠ TO NIE JEST SPRZECZNOŚĆ CO DO FAKTU. Oba
 *   opisy mówią to samo o tym samym budynku. RÓŻNIĄ
 *   SIĘ TYM, CZY PIWNICĘ SIĘ LICZY.
 *   ⚠⚠ NIE ROZSTRZYGAM, KTÓRE LICZENIE JEST LEPSZE.
 *   To jest sedno kąta.
 *   ⚠ DATOWANIE BASZTY ROZBIEŻNE [SP]: XIV w.
 *     (zabytek.pl) albo XV w. (zamek.org.pl).
 *     PISZĘ „XIV albo XV wiek" I MÓWIĘ, ŻE ŹRÓDŁA
 *     SIĘ RÓŻNIĄ. ⚠⚠ TEJ ROZBIEŻNOŚCI NIE ROBIĘ
 *     KĄTEM — kąt jest o kondygnacjach.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — park na sztucznym wzniesieniu: 4,2 ha,
 * — ciąg przebudów zespołu: 1405 → 1513 → 1549–1553
 *   → 1921–1926 → lata 80. XX w.
 *   ⚠⚠ ODSTĘPÓW MIĘDZY NIMI NIE LICZĘ — figury
 *   rosnących i malejących przerw zajęte (Węgliniec,
 *   Niemcza).
 * — ⚠⚠⚠ KRUCYFIKSU, KOŚCIOŁA I KOLEKCJI IKON
 *   NIE OPISUJĘ — wyznaniowe. ANI SŁOWA.
 * — ⚠⚠ TRZECH MATERIAŁÓW ZESPOŁU NIE OPISUJĘ — kąt
 *   materiałowy zajęty (Świerzawa).
 * — ⚠⚠ HALSZKI NIE OPISUJĘ — uwięzienie osoby, wątek
 *   wykluczony.
 * — ⚠ ODLEGŁOŚĆ DO POZNANIA SPORNA (32 albo 35 km).
 *   NIE PODAJĘ ŻADNEJ LICZBY KILOMETRÓW.
 *
 * KĄT: SPÓR O LICZBĘ, KTÓRY JEST SPOREM O DEFINICJĘ
 * — o kłótniach, w których obie strony mają rację, bo
 * liczą co innego. Kąt z baszty Halszki: jedno źródło
 * widzi trzy kondygnacje, drugie cztery, a budynek
 * jest ten sam.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że jedno źródło opisuje basztę jako
 *   czterokondygnacyjną, a drugie jako trzykondygnacyjną
 *   z wysoką piwnicą,
 * — ŻE OBA MÓWIĄ TO SAMO — różnią się tylko tym, czy
 *   piwnicę się liczy. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI TAK WYGLĄDA WIĘKSZOŚĆ DOMOWYCH
 *   SPORÓW O LICZBY: „ile razy w tygodniu gotujesz"
 *   zależy od tego, czy odgrzanie się liczy,
 * — ⚠⚠ ŻE LUDZIE KŁÓCĄ SIĘ O WYNIK, a różnią się
 *   definicją — i dlatego ta kłótnia nie ma końca,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zanim zaczniesz się spierać
 *   o liczbę, ustal na głos, co się do niej wlicza.
 *   Zwykle wtedy okazuje się, że nie ma sporu,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem różnica
 *   w definicji jest realną różnicą zdań o tym, co
 *   się liczy jako praca. Wtedy trzeba rozmawiać
 *   o tym, a nie o liczbie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: przy wyborze urządzenia to
 *   samo. „Oszczędza godzinę dziennie" zależy od tego,
 *   czy liczymy mycie i chowanie. MÓWIĘ WPROST, ŻE
 *   LICZĘ JE ZAWSZE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PIĘTNASTU EGZEMPLARZY, NIE GATUNKÓW —
 *   kąt zajęty (Polanica-Zdrój). ⚠⚠⚠ TO NAJBLIŻSZY
 *   SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam jedno
 *   liczenie było po prostu błędne; tu oba są poprawne
 *   i różnią się wyłącznie przyjętą granicą.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO CZTERDZIESTU PIĘCIU HEKTARÓW BEZ
 *   KATEGORII — kąt zajęty (Międzybórz).
 * — ⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt
 *   zajęty (Bierutów).
 * — ⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt
 *   zajęty (Szklarska Poręba).
 * — ⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie). ⚠ TAM CHODZIŁO O OŚ PORÓWNANIA,
 *   TU O GRANICĘ ZLICZANIA. NIE MIESZAĆ.
 * — ⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt
 *   zajęty (Piława Górna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA PODZIAŁU OBOWIĄZKÓW
 *   W CZYIMŚ DOMU. Opisuję mechanizm sporu, nie
 *   rozstrzygam, kto ma rację.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE ROZSTRZYGAM, ile kondygnacji ma baszta.
 * — NIE PODAJĘ roku nadania praw jako pewnego.
 * — NIE PODAJĘ powierzchni miasta w wersji en-wiki.
 * — NIE PODAJĘ ŻADNEJ ODLEGŁOŚCI W KILOMETRACH.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Szamotuły leżą w powiecie szamotulskim, którego są
 *   siedzibą, na wysokości 115 m n.p.m.; miasto liczy
 *   18 178 mieszkańców (GUS, 31.12.2024) na 11,1 km²,
 *   czyli 1 640,6 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 29 973 osoby na 175,5 km²,
 *   czyli 171 osób na kilometr, i obejmuje
 *   38 miejscowości,
 * — pierwsza wzmianka pochodzi z 1231 r. („de Samotul"),
 *   prawa miejskie podaje się na 1383 r., choć źródła
 *   nie są zgodne,
 * — baszta Halszki w zespole zamkowym opisywana jest
 *   raz jako czterokondygnacyjna (piwnica i trzy
 *   piętra), raz jako trzykondygnacyjna z wysoką
 *   piwnicą; jej datowanie też bywa różne — XIV albo
 *   XV wiek,
 * — zespół przebudowywano w 1405, 1513, 1549–1553,
 *   1921–1926 i w latach 80. XX w.,
 * — park założono na sztucznym wzniesieniu i ma 4,2 ha.
 */
export const SZAMOTULY: CityContent = {
  slug: "szamotuly",
  h1: "Thermomix Szamotuły – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szamotuły — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Szamotułach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szamotuły — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szamotułach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szamotuł z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Szamotuły"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy kondygnacje czy cztery? Zależy, czy liczyć piwnicę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szamotułach – jak wygląda prezentacja?",
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
      id: "spor-o-definicje",
      heading: "Spór o liczbę, który jest sporem o definicję",
      paragraphs: [
        "Baszta Halszki w szamotulskim zespole zamkowym ma cztery kondygnacje. Albo trzy.",
        "Jedno poważne źródło pisze: cztery kondygnacje — piwnica i trzy piętra. Drugie, równie poważne: budowla trzykondygnacyjna z wysoką piwnicą. Przy okazji różnią się też o stulecie w datowaniu, ale to inna sprawa.",
        "Zwróć uwagę, że w sprawie kondygnacji nie ma między nimi żadnej sprzeczności co do faktu. Oba opisy mówią dokładnie to samo o tym samym budynku. Różnią się wyłącznie tym, czy piwnicę się wlicza.",
        "Jeśli kiedykolwiek kłóciliście się w domu o liczbę, to prawie na pewno o to właśnie.",
        "„Ile razy w tygodniu gotujesz?” — zależy, czy odgrzanie się liczy. „Ile czasu zajmuje obiad?” — zależy, czy liczymy zakupy i zmywanie, czy tylko czas przy garnku. „Ile miejsca mamy w kuchni?” — zależy, czy szafka nad lodówką, do której nikt nie sięga, jest miejscem.",
        "Za każdym razem obie strony liczą uczciwie i obie dostają inny wynik. Kłócą się o wynik, a różnią się definicją — i dlatego ta kłótnia nie ma końca, bo nikt nigdy nie dojdzie do sedna, licząc jeszcze raz.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o liczeniu, które było po prostu błędne, bo dotyczyło czegoś innego, niż się wydawało. Tu jest inaczej — oba liczenia są poprawne. Różni je tylko przyjęta granica.",
        "Ruch jest jeden i trwa dziesięć sekund. Zanim zaczniesz spór o liczbę, powiedz na głos, co się do niej wlicza. Bardzo często okazuje się, że sporu nie ma.",
        "Uczciwie o drugiej stronie: czasem różnica w definicji jest realną różnicą zdań o tym, co w domu liczy się jako praca. Jeśli jedna osoba nie wlicza pamiętania o zakupach, a druga wlicza, to nie jest spór arytmetyczny i nie da się go rozstrzygnąć liczeniem. Wtedy trzeba rozmawiać o tym, a nie o wyniku.",
        "I uczciwie o sprzęcie, bo tu obowiązuje dokładnie ta sama zasada. Zdanie „oszczędza godzinę dziennie” zależy od tego, czy liczymy mycie naczynia i odstawienie go na miejsce. Ja liczę zawsze — i dlatego na prezentacji podaję czasy, które wyglądają skromniej niż w reklamach. Wolę, żebyście potem nie mieli poczucia, że ktoś naciągnął rachunek.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szamotułach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile razy w tygodniu gotujecie — i od razu dopowiedz, czy liczysz w tym odgrzewanie. To naprawdę zmienia odpowiedź.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szamotułach"),
    sekcjaRaty("w Szamotułach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Szamotuł",
      paragraphs: [
        "Szamotuły leżą w powiecie szamotulskim, którego są siedzibą, na wysokości stu piętnastu metrów nad poziomem morza. Samo miasto liczy 18 178 mieszkańców (GUS, 31.12.2024) na 11,1 kilometra kwadratowego, czyli tysiąc sześćset czterdzieści osób na kilometr, a cała gmina miejsko-wiejska 29 973 osoby na 175,5 kilometra, czyli sto siedemdziesiąt jeden osób na kilometr, i obejmuje trzydzieści osiem miejscowości. Pierwsza wzmianka pochodzi z 1231 roku, w zapisie „de Samotul”; prawa miejskie podaje się zwykle na 1383 rok, choć źródła nie są tu zgodne. Zespół zamkowy przebudowywano w 1405, 1513, w latach 1549–1553, potem w latach 1921–1926 i w latach osiemdziesiątych dwudziestego wieku, a park założono na sztucznym wzniesieniu i ma cztery i dwie dziesiąte hektara.",
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

  districtsHeading: "Do których części Szamotuł dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie: Baborowa i Baborówka, Brodziszewa, Gałowa, Otorowa, Pamiątkowa, Przyborowa i Przyborówka, Śmiłowa, Kępy, Lipnicy, Rudnika i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę miejscowości — kilka z nich występuje w parach różniących się jedną literą, jak Baborowo i Baborówko albo Przyborowo i Przyborówko.",
  ],
  districts: [],

  nearbyHeading: "Poza Szamotuły też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Obornik, Pniew, Wronek, Obrzycka i Rokietnicy — wszędzie bezpłatnie, tak samo jak w samych Szamotułach.",
  ],
  nearbyTowns: ["Oborniki", "Pniewy", "Wronki", "Obrzycko", "Rokietnica"],

  about: blokOMnie("do Szamotuł", "w Szamotułach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szamotuł bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga językowa: Szamotuły są w liczbie mnogiej i dopełniacz brzmi „do Szamotuł”, a nie „do Szamotułów”. Miejscownik to „w Szamotułach”, przymiotnik — „szamotulski”.",
    },
    ...faqWspolne("w Szamotułach"),
    {
      question: "W domu wiecznie się spieramy, ile czasu zajmuje gotowanie. Jak to rozstrzygnąć?",
      answer:
        "Najprawdopodobniej nie da się tego rozstrzygnąć liczeniem, bo spór nie jest o liczbę. Basztę Halszki w Szamotułach jedno źródło opisuje jako czterokondygnacyjną, a drugie jako trzykondygnacyjną z wysoką piwnicą — oba mówią to samo o tym samym budynku, tylko jedno wlicza piwnicę, a drugie nie. W domu jest identycznie: „ile trwa obiad” zależy od tego, czy liczymy zakupy i zmywanie. Ustalcie najpierw na głos, co się wlicza. Zwykle wtedy okazuje się, że sporu nie było.",
    },
    {
      question: "Ile czasu realnie oszczędza Thermomix?",
      answer:
        "Zależy, co liczymy — i ja liczę wszystko, łącznie z umyciem naczynia i odstawieniem go na miejsce. Przy takim rachunku wychodzą liczby skromniejsze niż w reklamach, bo urządzenie trzeba umyć po każdym daniu. Za to znika stanie nad garnkiem, czyli ten czas, w którym trzeba być w kuchni i nie można robić nic innego. Na prezentacji pokazuję to na konkretnym obiedzie, a nie na obietnicy.",
    },
  ],

  geo: { lat: 52.6117, lng: 16.5779 },
};
