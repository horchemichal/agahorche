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
 * POBIEDZISKA — powiat poznański, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠ ODRĘBNEJ GMINY WIEJSKIEJ POBIEDZISKA NIE MA.
 * MIASTO: 9 890 mieszkańców (GUS 31.12.2024), 10,2 km²,
 *   gęstość 965,8 os./km² [ZW — domyka się po cofnięciu
 *   zaokrąglenia do 10,24 km²]. PODAJĘ.
 * CAŁA GMINA: 21 426 osób, 189,7 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (112 w źródle, 112,95 z dzielenia).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * PODZIAŁ: 23 sołectwa; miejscowości źródła podają 56
 *   albo 57, obrębów ewidencyjnych 36, wsi i osad 40.
 *   ⚠⚠⚠ PISZĘ „ponad pięćdziesiąt miejscowości
 *   w dwudziestu trzech sołectwach" I NIE KOMENTUJĘ
 *   ROZJAZDU — figury „spór o liczbę" (Szamotuły)
 *   i „opisane są tylko największe" (Wronki) zajęte.
 * LESISTOŚĆ GMINY: 24,3 % (GUS 2019).
 *   Ścieżki rowerowe: 12,6 km (2019).
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,4947 / 17,2672.
 * JEZIORA: Biezdruchowskie, Małe, Dobre.
 *   ⚠⚠ ICH POWIERZCHNI NIE PODAJĘ — nie ustalono.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM:
 *   M. POBIEDZISKA SĄ / LEŻĄ / LICZĄ ·
 *   D. do POBIEDZISK (bez końcówki -ów!) ·
 *   Ms. w POBIEDZISKACH · N. Pobiedziskami.
 *   ⚠⚠⚠ BŁĘDY: „do Pobiedzisków", „w Pobiedzisku",
 *   „Pobiedziska liczy". ORZECZENIE ZAWSZE W LICZBIE
 *   MNOGIEJ. SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: POBIEDZISKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   POBIEDNA i POBIEDNO — mylone realnie
 *     w wyszukiwarkach. ROZGRANICZAM W FAQ.
 *   ⚠ Wieś GÓRA w gminie Pobiedziska ≠ miasto GÓRA
 *     w dolnośląskim (opisane w tym cyklu).
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1048 r.
 *   — PRAWA MIEJSKIE: 1257 r., nadał Przemysł I.
 *     ⚠ Skutkiem było uwolnienie od kasztelanii
 *     na Ostrowie Lednickim.
 *   — Praw miejskich miasto nie utraciło [SP].
 *   ⚠⚠ RÓŻNICY 1048 → 1257 NIE ROBIĘ KĄTEM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SKALA 1:20, MATERIAŁ 1:1:
 *   SKANSEN MINIATUR SZLAKU PIASTOWSKIEGO
 *   (otwarty w maju 1998 r.):
 *     — cała ekspozycja w JEDNOLITEJ SKALI 1:20,
 *     — makiety wykonane z tworzyw sztucznych, metalu,
 *       drewna i szkła,
 *     — ⚠⚠⚠ ALE „niektóre fragmenty są realizowane
 *       z materiałów identycznych jak w przypadku
 *       obiektów oryginalnych" — czyli WYMIAR JEST
 *       ZMNIEJSZONY DWUDZIESTOKROTNIE, A MATERIAŁ
 *       NIE JEST ZMNIEJSZONY WCALE.
 *   ⚠⚠⚠ TO JEST CAŁY KĄT: nie wszystko skaluje się
 *   razem.
 *   ⚠ największa makieta: ratusz poznański;
 *     wśród makiet jest też rynek i ratusz
 *     w Pobiedziskach.
 *   ⚠⚠⚠ LICZBY BUDOWLI NIE PODAJĘ — źródła podają 35
 *   albo 37. PISZĘ TO WPROST.
 *   ⚠⚠⚠ TEGO, ŻE CZĘŚĆ MAKIET POWSTAŁA PRZED OTWARCIEM
 *   SKANSENU, NIE UŻYWAM — figura „instytucja młodsza
 *   od swoich ścian" zajęta (Puszczykowo).
 *   ⚠⚠ MAKIETY POBIEDZISK W POBIEDZISKACH NIE ROBIĘ
 *   WĄTKIEM — figura „licz to, co i tak jest policzone"
 *   zajęta (Bierutów). WYMIENIAM JEDNYM ZDANIEM.
 *   ⚠ POWIERZCHNI SKANSENU NIE USTALONO — NIE PODAJĘ.
 *
 * KĄT: NIE WSZYSTKO SKALUJE SIĘ RAZEM
 * — o tym, że zmniejszenie porcji nie zmniejsza pracy
 * proporcjonalnie. Kąt ze skansenu w Pobiedziskach:
 * makiety są w skali jeden do dwudziestu, a część
 * materiału w skali jeden do jednego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że cała ekspozycja jest w jednolitej skali 1:20,
 * — ŻE CZĘŚĆ FRAGMENTÓW WYKONANO Z MATERIAŁÓW
 *   IDENTYCZNYCH JAK W ORYGINAŁACH — czyli wymiar
 *   zmniejszono dwudziestokrotnie, a materiał wcale.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO IDENTYCZNIE: połowa
 *   porcji nie oznacza połowy pracy,
 * — ⚠⚠ ŻE SKALUJĄ SIĘ SKŁADNIKI, A NIE SKALUJĄ SIĘ:
 *   zmywanie, krojenie, pilnowanie i decyzja, co
 *   ugotować,
 * — ⚠⚠ ŻE DLATEGO GOTOWANIE DLA JEDNEJ OSOBY JEST
 *   NIEPROPORCJONALNIE DROGIE W CZASIE, i że to nie
 *   wina tej osoby,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zmniejszając cokolwiek,
 *   wypisz osobno to, co się zmniejszyło, i to, co
 *   zostało takie samo. Planuj pod drugą listę,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część rzeczy skaluje się
 *   lepiej, niż się wydaje — mała porcja szybciej się
 *   nagrzewa i łatwiej ją schować,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie prawie zeruje
 *   pilnowanie, ale NIE SKALUJE MYCIA. MÓWIĘ WPROST:
 *   jedna mała porcja to i tak całe naczynie do umycia,
 *   więc przy bardzo małych ilościach zysk bywa
 *   niewielki.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PODZIEL PRZEZ TEMPO — kąt zajęty (Stronie
 *   Śląskie). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam dzielenie było narzędziem
 *   do policzenia czegoś; tu chodzi o to, że przy
 *   dzieleniu nie wszystko dzieli się w tym samym
 *   stosunku. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie). ⚠⚠ TAM DWIE OSIE ROZCHODZIŁY SIĘ
 *   W PRZECIWNE STRONY; TU JEDNA SIĘ SKALUJE, A DRUGA
 *   STOI.
 * — ⚠⚠ ZERO KUPIONE ZA MAŁE — kąt zajęty (Wolsztyn).
 * — ⚠⚠ ZERO ILE UTRZYMANIA NA OSOBĘ — kąt zajęty
 *   (Słupca).
 * — ⚠⚠ ZERO INSTYTUCJA MŁODSZA OD SWOICH ŚCIAN — kąt
 *   zajęty (Puszczykowo).
 * — ⚠⚠ ZERO CO NAPRAWDĘ TRZYMA KONSTRUKCJĘ — kąt zajęty
 *   (Nowy Tomyśl). ⚠⚠⚠ TAM TEŻ CHODZI O MATERIAŁ.
 *   ŻADNEGO WĄTKU „CO NIESIE CIĘŻAR".
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW. ⚠⚠⚠ SZCZEGÓLNA
 *   OSTROŻNOŚĆ: mowa o „połowie porcji" OGÓLNIE,
 *   NIGDY o konkretnych ilościach.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA OSÓB GOTUJĄCYCH DLA SIEBIE.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ liczby miejscowości ani liczby makiet.
 * — NIE PODAJĘ powierzchni skansenu ani jezior.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pobiedziska leżą w powiecie poznańskim; miasto
 *   liczy 9 890 mieszkańców (GUS, 31.12.2024) na
 *   10,2 km², czyli 965,8 osoby na kilometr kwadratowy,
 *   a cała gmina miejsko-wiejska 21 426 osób
 *   na 189,7 km² i dzieli się na 23 sołectwa obejmujące
 *   ponad pięćdziesiąt miejscowości,
 * — lasy zajmują 24,3 % powierzchni gminy, a ścieżek
 *   rowerowych jest 12,6 km (dane z 2019 r.); w gminie
 *   leżą jeziora Biezdruchowskie, Małe i Dobre,
 * — pierwsza wzmianka pochodzi z 1048 r., a prawa
 *   miejskie nadał w 1257 r. Przemysł I; ich skutkiem
 *   było uwolnienie miasta od kasztelanii na Ostrowie
 *   Lednickim,
 * — Skansen Miniatur Szlaku Piastowskiego otwarto
 *   w maju 1998 r.; cała ekspozycja jest w skali 1:20,
 *   makiety wykonano z tworzyw sztucznych, metalu,
 *   drewna i szkła, a niektóre fragmenty z materiałów
 *   identycznych jak w obiektach oryginalnych;
 *   największa makieta przedstawia ratusz poznański,
 *   a w zbiorze jest też rynek i ratusz w Pobiedziskach.
 */
export const POBIEDZISKA: CityContent = {
  slug: "pobiedziska",
  h1: "Thermomix Pobiedziska – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pobiedziska — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Pobiedziskach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pobiedziska — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pobiedziskach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pobiedzisk z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Pobiedziska"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wymiar zmniejszony dwudziestokrotnie. Materiał wcale.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pobiedziskach – jak wygląda prezentacja?",
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
      id: "nie-wszystko-skaluje",
      heading: "Nie wszystko skaluje się razem",
      paragraphs: [
        "Skansen Miniatur Szlaku Piastowskiego w Pobiedziskach otwarto w maju 1998 roku. Cała ekspozycja jest w jednolitej skali jeden do dwudziestu — liczby budowli nie podaję, bo źródła mówią raz o trzydziestu pięciu, raz o trzydziestu siedmiu.",
        "Makiety wykonano z tworzyw sztucznych, metalu, drewna i szkła. A niektóre fragmenty — jak czytamy w opisie ekspozycji — z materiałów identycznych jak w obiektach oryginalnych.",
        "Czyli wymiar zmniejszono dwudziestokrotnie, a materiał nie zmniejszył się wcale. Największa makieta przedstawia ratusz poznański; w zbiorze jest też rynek i ratusz w samych Pobiedziskach.",
        "To jest najbardziej niedoceniana rzecz w gotowaniu i przyczyna sporej części zniechęcenia.",
        "Bo połowa porcji nie oznacza połowy pracy. Skalują się składniki — i tylko one. Nie skaluje się zmywanie: to samo naczynie, ta sama deska, ta sama łyżka. Nie skaluje się krojenie, bo żeby pokroić mniej, i tak trzeba wyjąć nóż i deskę. Nie skaluje się pilnowanie. I zupełnie nie skaluje się decyzja, co ugotować — jedna osoba wymyśla obiad dokładnie tyle samo czasu, co dla pięciu.",
        "Dlatego gotowanie dla jednej osoby jest nieproporcjonalnie drogie w czasie. Nie dlatego, że ktoś jest niezorganizowany, tylko dlatego, że stała część pracy została taka sama, a ta zmienna spadła do piątej części. I dlatego tak wiele osób gotujących dla siebie przestaje gotować — a potem uważa to za swoją słabość.",
        "Dopowiem, bo to leży blisko: pisałam gdzie indziej, że warto podzielić liczbę przez tempo. Tam dzielenie było narzędziem, żeby coś policzyć. Tu chodzi o coś innego — o to, że przy dzieleniu nie wszystko dzieli się w tym samym stosunku.",
        "Ruch jest jeden. Zmniejszając cokolwiek, wypisz osobno dwie listy: co naprawdę się zmniejszyło i co zostało takie samo. Potem planuj pod drugą — bo to ona zjada czas.",
        "Uczciwie o drugiej stronie: część rzeczy skaluje się lepiej, niż się wydaje. Mała porcja szybciej się nagrzewa, łatwiej ją schować i rzadziej się psuje. Mała kuchnia bywa wygodniejsza, bo wszystko jest w zasięgu ręki. Nie każde zmniejszenie jest stratą.",
        "I uczciwie o sprzęcie. Thermomix niemal zeruje pilnowanie — a tego właśnie nie da się zmniejszyć innym sposobem. Ale nie skaluje mycia: jedna mała porcja to i tak całe naczynie do umycia. Przy bardzo małych ilościach zysk bywa więc niewielki, i mówię to osobom gotującym dla siebie zawsze, zanim zapytają o cenę.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pobiedziskach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, dla ilu osób gotujecie. Jeśli dla jednej albo dwóch, dobiorę dania tak, żeby nie było resztek na trzy dni.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pobiedziskach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Pobiedzisk",
      paragraphs: [
        "Pobiedziska leżą w powiecie poznańskim. Samo miasto liczy 9 890 mieszkańców (GUS, 31.12.2024) na 10,2 kilometra kwadratowego, czyli dziewięćset sześćdziesiąt sześć osób na kilometr, a cała gmina miejsko-wiejska 21 426 osób na 189,7 kilometra i dzieli się na dwadzieścia trzy sołectwa obejmujące ponad pięćdziesiąt miejscowości. Gęstości dla gminy nie podaję, bo liczby ze źródeł się nie domykają. Lasy zajmują niemal jedną czwartą powierzchni gminy, a ścieżek rowerowych jest ponad dwanaście kilometrów. W gminie leżą jeziora Biezdruchowskie, Małe i Dobre. Pierwsza wzmianka pochodzi z 1048 roku, a prawa miejskie nadał w 1257 Przemysł I — ich skutkiem było uwolnienie miasta od kasztelanii na Ostrowie Lednickim.",
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

  districtsHeading: "Do których części Pobiedzisk dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie: Biskupic, Jerzykowa, Bednar, Wronczyna, Węglewa, Promna, Kocanowa, Pomarzanowic, Wagowa, Krześlic, Stęszewka, Polskiej Wsi i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać nazwę miejscowości — gmina ma ponad pięćdziesiąt. Jedna ze wsi nazywa się Góra i nie ma nic wspólnego z miastem Górą w dolnośląskim.",
  ],
  districts: [],

  nearbyHeading: "Poza Pobiedziska też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Swarzędza, Murowanej Gośliny, Kostrzyna, Kłecka i Gniezna — wszędzie bezpłatnie, tak samo jak w samych Pobiedziskach.",
  ],
  nearbyTowns: ["Swarzędz", "Murowana Goślina", "Kostrzyn", "Kłecko", "Gniezno"],

  about: blokOMnie("do Pobiedzisk", "w Pobiedziskach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pobiedzisk bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi językowe: Pobiedziska są w liczbie mnogiej, więc „Pobiedziska leżą” i „Pobiedziska liczą”, a dopełniacz brzmi „do Pobiedzisk”, nie „do Pobiedzisków”. I łatwo pomylić nazwę z Pobiedną albo Pobiednem — to inne miejscowości.",
    },
    ...faqWspolne("w Pobiedziskach"),
    {
      question: "Gotuję dla jednej osoby i zajmuje mi to prawie tyle samo czasu co dla całej rodziny. Czy coś robię źle?",
      answer:
        "Nie, tak to po prostu działa. W skansenie w Pobiedziskach makiety są w skali jeden do dwudziestu, ale część fragmentów wykonano z materiałów identycznych jak w oryginałach — wymiar się zmniejszył, materiał nie. W kuchni skalują się składniki i tylko one. Nie skaluje się zmywanie, krojenie, pilnowanie ani decyzja, co ugotować. Dlatego gotowanie dla jednej osoby jest nieproporcjonalnie drogie w czasie — i to nie jest niczyja wina.",
    },
    {
      question: "Czy Thermomix ma sens przy gotowaniu dla jednej osoby?",
      answer:
        "Odpowiem uczciwie: bywa, że mniejszy niż w dużym domu. Urządzenie niemal zeruje pilnowanie i stanie nad garnkiem, co jest sporą zaletą także dla jednej osoby. Ale nie skaluje mycia — jedna mała porcja to całe naczynie do umycia — więc przy bardzo małych ilościach rachunek robi się ciasny. Na prezentacji staram się to policzyć na Waszych prawdziwych porcjach, a nie na pokazowych.",
    },
  ],

  geo: { lat: 52.4947, lng: 17.2672 },
};
