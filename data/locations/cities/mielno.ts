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
 * MIELNO — powiat koszaliński, woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 754 mieszkańców (GUS 31.12.2024), 33,5 km²,
 *   gęstość 82,3 os./km².
 * CAŁA GMINA: 4 641 osób, 62,1 km², gęstość 77 os./km².
 * ⚠⚠ RÓŻNICA MIASTO/GMINA TO 1 887 OSÓB.
 *   NIE MIESZAM TYCH LICZB. TWARDA GRANICA.
 * ⚠ GEO: 54,2596 / 16,0616.
 *
 * ⚠⚠ NAJMŁODSZE MIASTO WOJEWÓDZTWA — PRAWA MIEJSKIE
 *   OD 1 STYCZNIA 2017 R. Miasto powstało z połączenia
 *   Mielna z Unieściem; Unieście jest dziś osiedlem.
 *   ⚠ WYNIKÓW KONSULTACJI NIE PODAJĘ — liczby w źródle
 *   nie domykają się (429 + 21 + 3 ≠ 575 ankiet).
 *
 * ⚠⚠ HOMONIM: w gminie Węgorzyno (pow. łobeski) leży
 *   JEZIORO MIELNO o powierzchni 74 ha. Jest też wieś
 *   Mielno w wielkopolskiem i w mazowieckiem.
 *   ⚠ ROZGRANICZAM W FAQ — podaję powiat koszaliński.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI — „to Mielno".
 *   D. MIELNA, Ms. W MIELNIE.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — forma regularna
 *   i zgodna z użyciem urzędowym.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Mielna".
 *
 * HISTORIA I GEOGRAFIA — FAKTY UŻYTE:
 * — 1266 — nazwa „Moellen" po raz pierwszy, w dokumencie
 *   lokacyjnym Koszalina.
 * — Do 1333 własność rodziny Schlieffów z Kołobrzegu,
 *   potem przez 450 lat w rękach Damitzów.
 * — Wieś rybacka; przekształcanie w kurort od połowy
 *   XIX w.; nazwa urzędowa „Mielno" od 1947 r.
 * — Jezioro Jamno: głębokość maksymalna 3,9 m (dwa
 *   źródła zgodne), głębokość średnia 1,4 m, linia
 *   brzegowa 34,17 km, lustro wody 0,2 m n.p.m.
 *   ⚠⚠ POWIERZCHNI JEZIORA NIE PODAJĘ — źródła podają
 *   2 373,6 ha ALBO 2 205–2 240 ha. Piszę opisowo.
 * — Jezioro łączy się z Bałtykiem kanałem Jamieński
 *   Nurt o długości ok. 0,7 km; nazwa nadana w 1949 r.
 * — ⚠⚠⚠ RDZEŃ KĄTA — WROTA SZTORMOWE (2013):
 *   CZTERY PARY WRÓT, KONSTRUKCJA 5,6 M WYSOKOŚCI
 *   I 17 M SZEROKOŚCI, KOSZT 22,6 MLN ZŁ.
 *   ⚠⚠ ZAMYKAJĄ SIĘ AUTOMATYCZNIE, GDY STAN MORZA
 *   PRZEKROCZY 6° W SKALI BEAUFORTA. To jest cały kąt.
 * — Zabytki: gotycki kościół z XV w.; aleja bukowa,
 *   część parku dworskiego z początku XIX w., obwody
 *   pni do 300 cm.
 *   ⚠ KOŚCIOŁÓW NIE OPISUJĘ — wątek wyznaniowy.
 *   Używam wyłącznie alei bukowej.
 * — Koszalin 12 km, ok. 15 minut.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   żaden wpis nie jest przypisany gminie Mielno,
 *   także regionalnie. NIE SUGERUJĘ ISTNIENIA TAKIEGO
 *   PRODUKTU.
 * ⚠ HERBU NIE ZWERYFIKOWANO — NIE OPISUJĘ GO.
 * ⚠ OSIEDLE UNIEŚCIE PODAJĘ JAKO JEDYNĄ NAZWANĄ CZĘŚĆ
 *   MIASTA — jest potwierdzona.
 *
 * KĄT: PRÓG USTALONY Z GÓRY — o tym, żeby decyzję
 * o złym dniu podjąć wcześniej, a nie w trakcie.
 * Kąt od wrót sztormowych na Jamieńskim Nurcie: nikt ich
 * nie zamyka ręcznie i nikt nie ocenia sytuacji na
 * bieżąco. Próg ustalono raz — sześć stopni w skali
 * Beauforta — i od tego momentu konstrukcja działa sama.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 2013 r. na Jamieńskim Nurcie stanęły cztery
 *   pary wrót o wysokości pięciu metrów sześćdziesięciu
 *   i szerokości siedemnastu metrów,
 * — ŻE ZAMYKAJĄ SIĘ SAME PO PRZEKROCZENIU SZEŚCIU
 *   STOPNI BEAUFORTA — to jest rdzeń,
 * — ⚠⚠ ŻE NAJWAŻNIEJSZĄ CZĘŚCIĄ TEJ BUDOWY NIE BYŁ BETON,
 *   TYLKO USTALENIE LICZBY. Ktoś musiał zdecydować, przy
 *   którym stanie morza wrota mają się zamknąć — i zrobił
 *   to w spokojny dzień, przy biurku, a nie w czasie
 *   sztormu,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY ODWROTNIE: każdego dnia od nowa
 *   negocjujemy sami ze sobą, czy dziś gotujemy, czy nie.
 *   Ta rozmowa odbywa się zawsze o siedemnastej, zawsze
 *   po całym dniu i zawsze wtedy, gdy jesteśmy najmniej
 *   zdolni do rozsądnej oceny,
 * — ⚠⚠ ŻE ROZWIĄZANIEM NIE JEST SILNIEJSZE POSTANOWIENIE,
 *   TYLKO PRÓG USTALONY WCZEŚNIEJ: konkretny warunek,
 *   po którym przechodzę na najprostszą wersję obiadu
 *   albo w ogóle nie gotuję. Ustalony w niedzielę, nie
 *   w środę o siedemnastej,
 * — ⚠⚠ ŻE PRÓG MUSI BYĆ SPRAWDZALNY, A NIE UZNANIOWY.
 *   „Jak będę bardzo zmęczona" to nie jest próg, bo
 *   podlega negocjacji. Godzina powrotu, liczba rzeczy
 *   do zrobienia wieczorem, fakt, że rano nie było czasu
 *   na zakupy — to są progi, bo albo zaszły, albo nie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: PRÓG USTAWIONY ZA NISKO
 *   ZAMYKA WROTA CODZIENNIE. Jeśli warunek spełnia się
 *   pięć razy w tygodniu, to nie jest próg, tylko nowy
 *   domyślny plan — i trzeba go przesunąć albo uczciwie
 *   nazwać tym, czym jest,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie ustawia progu
 *   za Ciebie i nie podejmuje decyzji. Przesuwa za to
 *   granicę, przy której obiad przestaje być możliwy —
 *   bo obniża koszt ugotowania czegokolwiek. MÓWIĘ TO
 *   WPROST: próg dalej trzeba ustalić samemu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO STAŁYCH WARUNKÓW ZAMIAST PILNOWANIA — kąt
 *   zajęty (Kalisz Pomorski). ⚠⚠ TO JEST NAJBLIŻSZY KĄT
 *   W CAŁYM SERWISIE. Tam chodzi o TO, ŻE STAŁA
 *   TEMPERATURA ZWALNIA Z NADZORU NAD PROCESEM;
 *   TUTAJ o TO, ŻE DECYZJĘ PODEJMUJE SIĘ ZAWCZASU,
 *   A NIE W MOMENCIE PRÓBY. Ani jednego zdania
 *   o przechowywaniu, o stałej temperaturze ani
 *   o pilnowaniu garnka. ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO TRZECIEGO TYGODNIA I KOŃCA ZAPAŁU — kąt
 *   zajęty (Konin).
 * — ⚠⚠ ZERO NAJGORSZEGO TYGODNIA JAKO MIARY — kąt zajęty
 *   (Maszewo). Tam pytanie brzmi „czy to przetrwa zły
 *   tydzień"; TUTAJ chodzi o to, co ma się stać W TRAKCIE
 *   złego dnia. Nie używam słowa „cykl".
 * — ⚠⚠ ZERO OKRESU PRÓBNEGO I LICZBY PODEJŚĆ — kąt zajęty
 *   (Sławno).
 * — ⚠⚠ ZERO NIERÓWNEGO ROZKŁADU WYSIŁKU NA TYDZIEŃ — kąt
 *   zajęty (Lipiany).
 * — ⚠ ZERO BAŁAGANU WOKÓŁ URZĄDZENIA I SPRZĄTANIA — kąt
 *   zajęty (Koluszki).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO PROGU DLA CZYTELNIKA — podaję
 *   WYŁĄCZNIE kryterium, po czym poznać dobry próg.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (poza „Moellen" z 1266 r. jako zapisem źródłowym).
 * — ⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów i figury
 *   Madonny nie wprowadzam.
 * — ⚠ ZERO POWIERZCHNI JEZIORA JAMNO — źródła rozbieżne.
 * — ⚠ ZERO WYNIKÓW KONSULTACJI — liczby się nie domykają.
 * — ⚠ ZERO HERBU — nie zweryfikowany.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PISZĘ, że Mielno jest najrzadziej zaludnionym
 *   miastem w Polsce — nie zweryfikowane.
 * — NIE PODAJĘ powierzchni jeziora Jamno.
 * — NIE PODAJĘ zasolenia jeziora ani parametrów mierzei.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ ŻADNEGO GOTOWEGO PROGU.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mielno leży w powiecie koszalińskim, dwanaście
 *   kilometrów od Koszalina, i jest najmłodszym miastem
 *   województwa: prawa miejskie otrzymało 1 stycznia
 *   2017 r., powstając z połączenia Mielna z Unieściem,
 * — miasto liczy 2 754 mieszkańców (GUS, 31.12.2024)
 *   na 33,5 km², a cała gmina 4 641 osób na 62,1 km²,
 * — nazwa pojawiła się po raz pierwszy w 1266 r.,
 *   w dokumencie lokacyjnym Koszalina; do 1333 r. wieś
 *   należała do Schlieffów, a potem przez czterysta
 *   pięćdziesiąt lat do Damitzów; w kurort zaczęła się
 *   przekształcać od połowy XIX w., a nazwę Mielno nosi
 *   urzędowo od 1947 r.,
 * — jezioro Jamno ma 3,9 m głębokości maksymalnej i 1,4 m
 *   średniej, 34,17 km linii brzegowej i lustro wody
 *   0,2 m n.p.m.; z Bałtykiem łączy je kanał Jamieński
 *   Nurt o długości około siedmiuset metrów, nazwany
 *   tak w 1949 r.,
 * — w 2013 r. na kanale stanęły wrota sztormowe:
 *   cztery pary, konstrukcja 5,6 m wysokości i 17 m
 *   szerokości, koszt 22,6 mln zł; zamykają się
 *   automatycznie, gdy stan morza przekroczy sześć
 *   stopni w skali Beauforta,
 * — na skraju Koszalińskiego Pasa Nadmorskiego rośnie
 *   aleja bukowa, pozostałość parku dworskiego
 *   z początku XIX w.; obwody pni sięgają trzystu
 *   centymetrów.
 */
export const MIELNO: CityContent = {
  slug: "mielno",
  h1: "Thermomix Mielno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mielno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mielnie (powiat koszaliński): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto z Unieściem i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mielno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mielnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mielna w powiecie koszalińskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta razem z Unieściem i do wsi w gminie.",

  highlights: highlightyStandardowe("Mielno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wrót na Jamieńskim Nurcie nikt nie zamyka ręcznie. Próg ustalono raz.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mielnie – jak wygląda prezentacja?",
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
      id: "prog-ustalony-wczesniej",
      heading: "Sześć stopni w skali Beauforta",
      paragraphs: [
        "Jezioro Jamno łączy się z Bałtykiem wąskim kanałem — Jamieńskim Nurtem, około siedmiuset metrów długości, noszącym tę nazwę od 1949 roku. Przy sztormie morze potrafi tym kanałem wejść do jeziora.",
        "W 2013 roku stanęły tam wrota sztormowe: cztery pary, konstrukcja pięć metrów sześćdziesiąt wysokości i siedemnaście metrów szerokości, dwadzieścia dwa i sześć dziesiątych miliona złotych. Zamykają się automatycznie, gdy stan morza przekroczy sześć stopni w skali Beauforta.",
        "I najważniejszą częścią tej budowy nie był beton.",
        "Najważniejsze było ustalenie liczby. Ktoś musiał zdecydować, przy którym stanie morza wrota mają się zamknąć — i zrobił to w spokojny dzień, przy biurku, z mapą i danymi. Nie w czasie sztormu, na brzegu, po ciemku, zastanawiając się, czy to już, czy jeszcze nie.",
        "W kuchni robimy dokładnie odwrotnie.",
        "Codziennie od nowa negocjujemy sami ze sobą, czy dziś gotujemy, czy zamawiamy, czy będą kanapki. Ta rozmowa odbywa się zawsze o siedemnastej, zawsze po całym dniu i zawsze dokładnie wtedy, gdy jesteśmy najmniej zdolni do rozsądnej oceny czegokolwiek. A potem dziwimy się, że wychodzi z niej różnie.",
        "Rozwiązaniem nie jest silniejsze postanowienie. Rozwiązaniem jest próg ustalony wcześniej: konkretny warunek, po którym przechodzę na najprostszą wersję obiadu albo dziś nie gotuję w ogóle. Ustalony w niedzielę na spokojnie, nie w środę o siedemnastej.",
        "Tylko taki próg musi być sprawdzalny, a nie uznaniowy — i to jest cała różnica między progiem a postanowieniem. „Jak będę bardzo zmęczona” progiem nie jest, bo podlega negocjacji i zawsze można sobie wmówić, że jednak nie aż tak. Godzina powrotu do domu. Liczba rzeczy, które i tak trzeba zrobić wieczorem. To, że rano nie było czasu na zakupy. To są progi, bo albo zaszły, albo nie zaszły, i nie ma o czym dyskutować.",
        "Uczciwie o drugiej stronie: próg ustawiony za nisko zamyka wrota codziennie. Jeśli warunek spełnia się pięć razy w tygodniu, to nie jest próg — to jest nowy domyślny plan i trzeba go albo przesunąć wyżej, albo uczciwie nazwać tym, czym się stał. Wrota, które są zawsze zamknięte, nie chronią jeziora. One po prostu odcinają je od morza.",
        "Na koniec o urządzeniu, bez obietnic. Ono nie ustawi progu za Ciebie i nie podejmie decyzji o siedemnastej.",
        "Robi coś węższego: przesuwa granicę, przy której obiad w ogóle przestaje być możliwy. Skoro ugotowanie czegokolwiek kosztuje mniej wysiłku, to warunek, przy którym rezygnujesz, może być ostrzejszy niż dotąd. Ale sam warunek dalej trzeba wymyślić i zapisać samemu — w spokojny dzień, przy stole, tak jak liczbę sześć na Jamieńskim Nurcie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mielnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o której zwykle wracacie do domu — pod taką godzinę dobiorę dania, bo tylko one mają szansę powtórzyć się później.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mielnie"),
    sekcjaRaty("w Mielnie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Mielna",
      paragraphs: [
        "Mielno leży w powiecie koszalińskim, dwanaście kilometrów od Koszalina, i jest najmłodszym miastem województwa: prawa miejskie otrzymało 1 stycznia 2017 roku, powstając z połączenia Mielna z Unieściem. Samo miasto liczy ponad dwa tysiące siedmiuset mieszkańców (GUS, 31.12.2024) na trzydziestu trzech i pół kilometra kwadratowego, a cała gmina ponad cztery i pół tysiąca osób na sześćdziesięciu dwóch. Nazwa pojawiła się po raz pierwszy w 1266 roku, w dokumencie lokacyjnym Koszalina; do 1333 wieś należała do Schlieffów, a potem przez czterysta pięćdziesiąt lat do Damitzów. W kurort zaczęła się przekształcać od połowy dziewiętnastego wieku, a nazwę Mielno nosi urzędowo od 1947. Jezioro Jamno ma trzy metry dziewięćdziesiąt głębokości maksymalnej i metr czterdzieści średniej, trzydzieści cztery kilometry linii brzegowej, a lustro wody dwadzieścia centymetrów nad poziomem morza. Na skraju Koszalińskiego Pasa Nadmorskiego rośnie aleja bukowa, pozostałość parku dworskiego z początku dziewiętnastego wieku — obwody pni sięgają tam trzystu centymetrów.",
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

  districtsHeading: "Do których części Mielna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — razem z Unieściem, które od 2017 roku jest jego osiedlem — i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Unieście"],

  nearbyHeading: "Poza Mielno też przyjadę",
  nearbyParagraphs: [
    "Koszalin jest dwanaście kilometrów stąd, kwadrans drogi. Do Sianowa, Darłowa i Kołobrzegu też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Koszalin", "Sianów", "Darłowo", "Kołobrzeg"],

  about: blokOMnie("do Mielna", "w Mielnie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mielna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta razem z Unieściem i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Mielno w powiecie koszalińskim w województwie zachodniopomorskim — warto to doprecyzować, bo w gminie Węgorzyno w tym samym województwie leży jezioro Mielno, a wsie o tej nazwie są też w wielkopolskiem i mazowieckiem.",
    },
    ...faqWspolne("w Mielnie"),
    {
      question: "Jak przestać codziennie decydować, czy dziś gotuję?",
      answer:
        "Ustalić próg wcześniej, a nie o siedemnastej. Wrota sztormowe na Jamieńskim Nurcie zamykają się same po przekroczeniu sześciu stopni w skali Beauforta — liczbę ustalono raz, w spokojny dzień. W kuchni działa to samo: konkretny, sprawdzalny warunek, po którym przechodzisz na najprostszą wersję obiadu. Sprawdzalny, czyli taki, który albo zaszedł, albo nie — godzina powrotu, a nie „bardzo duże zmęczenie”.",
    },
    {
      question: "Czy Thermomix rozwiązuje problem złych dni w kuchni?",
      answer:
        "Nie podejmuje decyzji za Ciebie i nie ustawia progu. Przesuwa za to granicę, przy której obiad przestaje być możliwy — skoro ugotowanie czegokolwiek kosztuje mniej wysiłku, warunek rezygnacji może być ostrzejszy niż dotąd. Sam warunek trzeba jednak wymyślić i zapisać samemu.",
    },
  ],

  geo: { lat: 54.2596, lng: 16.0616 },
};
