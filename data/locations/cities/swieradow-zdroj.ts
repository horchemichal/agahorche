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
 * ŚWIERADÓW-ZDRÓJ — powiat lubański, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — MIASTO JEST CAŁĄ GMINĄ. Brak wsi.
 * MIASTO/GMINA: 3 936 mieszkańców (GUS 31.12.2024),
 *   20,7 km², gęstość 190,1 os./km² [ZW — DOMYKA SIĘ:
 *   3 936 / 20,7 = 190,1]. PODAJĘ.
 * ⚠ WYSOKOŚĆ: 450–710 m n.p.m.
 *   ⚠⚠⚠ ROZPIĘTOŚCI WYSOKOŚCI NIE ROBIĘ KĄTEM — figura
 *   ZAJĘTA (Szczytna). PODAJĘ JAKO FAKT.
 * ⚠ GEO: 50,9087 / 15,343.
 *
 * ⚠⚠⚠ ODMIANA — OBA CZŁONY, ŁĄCZNIK OBOWIĄZKOWY:
 *   D. do Świeradowa-Zdroju · Ms. w Świeradowie-Zdroju ·
 *   B. Świeradów-Zdrój · N. Świeradowem-Zdrojem.
 *   ⚠⚠⚠ BŁĘDY: „Świeradów Zdrój" (bez łącznika —
 *   dominuje w serwisach turystycznych), „w Świeradów-
 *   -Zdrój" (nieodmieniony), „w Świeradów-Zdroju"
 *   (odmieniony tylko drugi człon).
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: ŚWIERADOWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — ⚠⚠ CZERNIAWA-ZDRÓJ — DZIELNICA TEGO MIASTA,
 *     ale nadal osobna nazwa z członem „-Zdrój".
 *     KOLIZJA WEWNĘTRZNA: jedno miasto, dwa „Zdroje".
 *   — ŚWIERZAWA (dolnośląskie, pow. złotoryjski),
 *     ŚWIDNICA, ŚWIEBODZICE, ŚWIERKLANIEC.
 *   — ⚠⚠ WOJ. DOLNOŚLĄSKIE MA NAJWIĘCEJ W POLSCE NAZW
 *     Z CZŁONEM „-ZDRÓJ". W tym cyklu opisano już
 *     Duszniki-, Kudowę-, Polanicę-, Lądek-, Szczawno-
 *     i Jedlinę-. To SIÓDMA taka strona — nie powtarzam
 *     żadnej z tamtych figur.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠⚠⚠ CAŁY WĄTEK UZDROWISKOWY WYKLUCZONY — tak jak
 *   w sześciu poprzednich „Zdrojach". ⚠⚠ HALI SPACEROWEJ
 *   (80 m) NIE UŻYWAM MIMO WYMIARU — należy do zespołu
 *   zdrojowego. Człon „-Zdrój" w nazwie ZOSTAJE.
 * ⚠⚠⚠ WIEŻY I ŚCIEŻKI W KORONACH DRZEW NIE OPISUJĘ —
 *   to obiekt komercyjny działającej firmy.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: 1946 r. [ZW — serwis miasta
 *     i serwis statystyczny zgodnie].
 *     ⚠⚠⚠ OBIEGOWEJ DATY „1959" NIE UŻYWAM — nie ma
 *     potwierdzenia, to błąd wtórny w źródłach
 *     turystycznych.
 *   — CZERNIAWA-ZDRÓJ WŁĄCZONA: 1 stycznia 1973 r. [ZW].
 *     ⚠⚠ „PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE" — kąt ZAJĘTY
 *     (Piechowice). PODAJĘ JAKO FAKT, BEZ MORAŁU.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZY DATY, DWIE NAZWY, JEDNO MIEJSCE:
 *   — 1524 r. — pierwsza wzmianka pod nazwą FEGEBEUTEL,
 *   — 1550 albo 1559 r. — pierwsza wzmianka pod nazwą
 *     FLINSBERG.
 *   ⚠⚠⚠ DATA PIERWSZEJ WZMIANKI ZALEŻY OD TEGO, KTÓRĄ
 *   NAZWĘ UZNAMY ZA TĘ SAMĄ MIEJSCOWOŚĆ. Rozstęp:
 *   35 lat. To jest cały kąt.
 *   ⚠⚠⚠ CIĄGŁOŚĆ JEST TU DECYZJĄ, NIE FAKTEM — ktoś
 *   musiał uznać, że miejsce pod starą nazwą to to samo
 *   miejsce. MÓWIĘ TO W TEKŚCIE WPROST.
 *   ⚠⚠ NIE ROZSTRZYGAM, która data jest właściwa,
 *   i NIE TWIERDZĘ, że którakolwiek jest błędna.
 *   ⚠⚠ NAZW NIEMIECKICH UŻYWAM WYŁĄCZNIE jako zapisów
 *   źródłowych z XVI w. — bez kontekstu narodowościowego
 *   i bez ani jednego zdania o tym, co działo się później.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — KOLEJ: linia otwarta w 1909 r.; tory linii nr 284
 *   rozebrano w 1992 r.
 *   Trzy odcinki (opracowanie „Kolej Gór Izerskich"):
 *   — nr 336 Mirsk – Świeradów-Zdrój: 7,7 km, nachylenie
 *     18 ‰, różnica wysokości 177 m, wiadukt 65 m,
 *     cztery posterunki,
 *   — nr 284 Mirsk – Jindřichovice pod Smrkem: 10 km,
 *     8,8 ‰, różnica 54 m, wiadukt 20 m, cztery
 *     posterunki,
 *   — nr 317 Gryfów Śląski – Mirsk: 6,3 km, 3,3 ‰,
 *     różnica 29 m, wiadukt 30 m, cztery posterunki.
 *   ⚠⚠⚠ SPRZECZNOŚCI 18 ‰ WOBEC WYLICZONYCH 23 ‰
 *   (177 m na 7,7 km) NIE ROBIĘ KĄTEM — „średnia kontra
 *   maksimum" to figura ZAJĘTA (Węgorzyno).
 *   ⚠⚠ „NAJDŁUŻSZY WIADUKT NA NAJKRÓTSZYM ODCINKU" —
 *   ociera się o „nie każde przęsło ma tę samą
 *   rozpiętość" (Ścinawa). NIE UŻYWAM JAKO MORAŁU.
 *   ⚠⚠ „STAŁA LICZBA POSTERUNKÓW, ZMIENNY DYSTANS" —
 *   ociera się o „siedem nazw na jeden przedmiot"
 *   (Szklarska Poręba). NIE UŻYWAM.
 *   ⚠⚠⚠ WSZYSTKIE TE LICZBY PODAJĘ W SEKCJI „RODZINA"
 *   JAKO SUCHE FAKTY, BEZ ANI JEDNEGO MORAŁU.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: KIEDY TO JEST JESZCZE TO SAMO
 * — o tym, że ciągłość jest decyzją, nie faktem, i że
 * przekazując coś dalej, warto nazwać wersję. Kąt
 * od dat pierwszej wzmianki: 1524 pod jedną nazwą,
 * 1550 albo 1559 pod drugą — trzy daty, dwie nazwy,
 * jedno miejsce.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pierwszą wzmiankę o tym miejscu datuje się
 *   na 1524 r. pod jedną nazwą albo na 1550 lub 1559
 *   pod drugą,
 * — ŻE DATA ZALEŻY OD TEGO, KTÓRĄ NAZWĘ UZNAMY ZA TĘ
 *   SAMĄ MIEJSCOWOŚĆ — czyli że ciągłość jest tu
 *   decyzją, nie faktem. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI MAMY DOKŁADNIE TO SAMO PRZY DANIACH
 *   ROBIONYCH „OD ZAWSZE": zmieniła się kiełbasa,
 *   zniknęła śmietana, doszła inna patelnia. Po pięciu
 *   takich zmianach to nadal „to samo danie",
 * — ⚠⚠ ŻE DLATEGO DWIE OSOBY GOTUJĄCE „TO SAMO" POTRAFIĄ
 *   SIĘ SPIERAĆ, KTÓRA ROBI PRAWIDŁOWO — i obie mają
 *   rację, bo trzymają dwie wersje rzeczy, która się
 *   rozjechała,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I KOSZTUJE TRZY SŁOWA:
 *   przekazując przepis, nazwij wersję. „Wersja mamy,
 *   bez śmietany". „Nasza, z papryką". Nie „przepis
 *   na...",
 * — ⚠⚠ ŻE ROZJAZD SAM W SOBIE NIE JEST ZEPSUCIEM: danie,
 *   które zmieniło się pięć razy, nie jest gorszą wersją
 *   pierwotnego. Jest wersją, która przetrwała, bo
 *   pasowała do ludzi, którzy ją gotowali,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem rozjazd naprawdę
 *   jest stratą i ktoś ma prawo tego żałować.
 *   Nazwanie wersji nie cofa zmiany — pozwala tylko
 *   przestać się kłócić o to, która jest „prawdziwa",
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie ZMIENI Wasze
 *   wersje, i to szybko. MÓWIĘ WPROST, że pierwsze danie
 *   zrobione inaczej wywołuje u wielu osób poczucie,
 *   że coś zepsuły — i że warto wiedzieć o tym przed
 *   zakupem, a nie po.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów, TA SAMA FALA). ⚠⚠⚠ TO NAJBLIŻSZY
 *   OBSZAR I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tamten tekst
 *   mówi, ŻEBY W OGÓLE ZAPISAĆ; ten mówi, ŻEBY NAZWAĆ
 *   WERSJĘ. JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra).
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno). Dlatego sprzeczność nachyleń nie wchodzi
 *   do sekcji kątowej.
 * — ⚠⚠⚠ ZERO NIE KAŻDE PRZĘSŁO — kąt zajęty (Ścinawa).
 * — ⚠⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt zajęty
 *   (Szklarska Poręba).
 * — ⚠⚠ ZERO JEDNEJ NAZWY OBEJMUJĄCEJ KILKA MIEJSC —
 *   kąt zajęty (Szczytna).
 * — ⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice).
 * — ⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW — przykłady zmian
 *   („bez śmietany", „z papryką") są PRZYKŁADAMI FORMY
 *   NAZWANIA WERSJI, nie zaleceniami. Zaznaczam to.
 * — ⚠⚠ ŻADNEGO MORALIZOWANIA O RODZINIE I TRADYCJI —
 *   mówię o nazywaniu wersji przepisu, nie o tym, jak
 *   pielęgnować dziedzictwo. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠⚠ ZERO WĄTKU UZDROWISKOWEGO.
 * — ⚠⚠⚠ ZERO WĄTKU NARODOWOŚCIOWEGO I ROKU 1945.
 *   Nazwy z XVI w. podaję WYŁĄCZNIE jako zapisy
 *   źródłowe, bez ani jednego zdania o tym, co działo
 *   się później.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO WYPADKÓW I ZAGROŻEŃ W GÓRACH.
 * — ⚠⚠ ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU.
 * — ⚠ ZERO UPADKU PRZEMYSŁU, BEZROBOCIA I DEMOGRAFII
 *   WSPÓŁCZESNEJ — o rozebraniu torów w 1992 r. piszę
 *   WYŁĄCZNIE jako o dacie.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM, która data pierwszej wzmianki jest
 *   właściwa.
 * — NIE UŻYWAM daty „1959" jako roku praw miejskich.
 * — NIE OPISUJĘ wieży ani ścieżki w koronach drzew.
 * — NIE PISZĘ ANI SŁOWA o uzdrowisku i wodach.
 * — NIE ROBIĘ KĄTA ze sprzeczności nachyleń torów.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Świeradów-Zdrój jest gminą miejską w powiecie
 *   lubańskim; liczy 3 936 mieszkańców (GUS,
 *   31.12.2024) na 20,7 km², czyli 190,1 osoby
 *   na kilometr kwadratowy; leży na wysokości
 *   450–710 m n.p.m.,
 * — pierwszą wzmiankę datuje się na 1524 r. pod nazwą
 *   Fegebeutel albo na 1550 lub 1559 r. pod nazwą
 *   Flinsberg; prawa miejskie miasto otrzymało w 1946 r.,
 * — 1 stycznia 1973 r. włączono do miasta Czerniawę-Zdrój,
 * — kolej doprowadzono w 1909 r.; odcinek Mirsk –
 *   Świeradów-Zdrój (linia nr 336) ma 7,7 km, nachylenie
 *   18 ‰, 177 m różnicy wysokości i wiadukt długi
 *   na 65 m; odcinek Mirsk – Jindřichovice pod Smrkem
 *   (nr 284) — 10 km, 8,8 ‰, 54 m i wiadukt 20 m;
 *   odcinek Gryfów Śląski – Mirsk (nr 317) — 6,3 km,
 *   3,3 ‰, 29 m i wiadukt 30 m; każdy z trzech ma
 *   po cztery posterunki, a tory linii nr 284 rozebrano
 *   w 1992 r.
 */
export const SWIERADOW_ZDROJ: CityContent = {
  slug: "swieradow-zdroj",
  h1: "Thermomix Świeradów-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Świeradów-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Świeradowie-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świeradów-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świeradowie-Zdroju. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Świeradowa-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, łącznie z Czerniawą-Zdrojem.",

  highlights: highlightyStandardowe("Świeradów-Zdrój"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy daty, dwie nazwy, jedno miejsce. Ktoś musiał zdecydować.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świeradowie-Zdroju – jak wygląda prezentacja?",
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
      id: "kiedy-to-jest-jeszcze-to-samo",
      heading: "Kiedy to jest jeszcze to samo",
      paragraphs: [
        "Pierwszą wzmiankę o tym miejscu datuje się na 1524 rok — pod jedną nazwą. Albo na 1550 lub 1559 — pod drugą.",
        "Trzy daty, dwie nazwy, jedno miejsce. Rozstęp trzydziestu pięciu lat.",
        "Sprzeczności tu nie ma. Jest decyzja, którą ktoś kiedyś podjął: uznał, że miejscowość pod starą nazwą to ta sama miejscowość co pod nową. Gdyby uznał inaczej, miasto byłoby o trzydzieści pięć lat młodsze.",
        "Ciągłość nie jest faktem, który się odkrywa. Jest decyzją, którą się podejmuje — i o tym się zwykle zapomina.",
        "W kuchni dzieje się to samo, tylko szybciej.",
        "Danie robione „od zawsze” zmieniło się już kilka razy. Zmieniła się kiełbasa, bo tamtej nie ma. Zniknęła śmietana, bo ktoś przestał. Doszła inna patelnia, inny piekarnik, inna mąka. Po pięciu takich zmianach nadal mówimy „to samo danie”, i zwykle słusznie — ale nikt nigdy nie sprawdził, kiedy przestało nim być.",
        "Stąd bierze się spór, który zna każdy dom. Dwie osoby gotują „to samo” i każda uważa, że druga robi to źle. Obie mają rację. Trzymają dwie wersje rzeczy, która się po cichu rozjechała.",
        "Ruch jest jeden i kosztuje trzy słowa. Przekazując przepis, nazwij wersję. Nie „przepis na gulasz”, tylko „gulasz, wersja mamy, bez śmietany”. Piszę to jako przykład formy, nie jako zalecenie — u każdego wersje są inne.",
        "Warto przy tym powiedzieć rzecz, która wielu osobom przynosi ulgę: rozjazd sam w sobie nie jest zepsuciem. Danie, które zmieniło się pięć razy, nie jest gorszą wersją pierwotnego. Jest wersją, która przetrwała, bo pasowała do ludzi, którzy ją gotowali.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, żeby przepis w ogóle zapisać. To osobna sprawa. Tutaj chodzi o coś węższego — o to, żeby zapisując albo przekazując, nazwać, która to wersja.",
        "Uczciwie o drugiej stronie: czasem rozjazd naprawdę jest stratą i ktoś ma pełne prawo tego żałować. Nazwanie wersji niczego nie cofa. Pozwala tylko przestać się kłócić o to, która jest prawdziwa, i zacząć rozmawiać o tym, którą chcecie robić dalej.",
        "I uczciwie o sprzęcie. Thermomix zmieni Wasze wersje, i to dość szybko — inne rozdrobnienie, inne mieszanie, inna konsystencja. Pierwsze danie, które wyjdzie inaczej niż zawsze, wielu osobom daje poczucie, że coś zepsuły. Nie zepsuły; powstała kolejna wersja. Ale lepiej wiedzieć o tym przed zakupem niż po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świeradowie-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy jest u Was danie, o które ktoś w rodzinie się spiera. Chętnie ugotuję właśnie je — wtedy najlepiej widać, co się faktycznie zmienia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świeradowie-Zdroju"),
    sekcjaRaty("w Świeradowie-Zdroju"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Świeradowa-Zdroju",
      paragraphs: [
        "Świeradów-Zdrój jest gminą miejską w powiecie lubańskim — miasto jest tu całą gminą, bez wsi. Liczy 3 936 mieszkańców (GUS, 31.12.2024) na dwudziestu siedmiu dziesiątych kilometra kwadratowego, czyli sto dziewięćdziesiąt osób na kilometr. Zabudowa rozciąga się od czterystu pięćdziesięciu do siedmiuset dziesięciu metrów nad poziomem morza. Z datą pierwszej wzmianki jest kłopot, o którym piszę wyżej: podaje się 1524 rok pod jedną dawną nazwą albo 1550 czy 1559 pod drugą. Prawa miejskie miasto otrzymało w 1946 roku — nie w 1959, jak powtarza część materiałów turystycznych; obie oficjalne strony podają 1946. 1 stycznia 1973 roku do miasta włączono Czerniawę-Zdrój, więc od tego dnia jedno miasto ma w granicach dwie nazwy z członem „-Zdrój”. Kolej doprowadzono tu w 1909 roku. Trzy odcinki tutejszej linii mają bardzo różne parametry: Mirsk – Świeradów-Zdrój to siedem i siedem dziesiątych kilometra przy nachyleniu osiemnastu promili, stu siedemdziesięciu siedmiu metrach różnicy wysokości i wiadukcie długim na sześćdziesiąt pięć metrów; Mirsk – Jindřichovice pod Smrkem to dziesięć kilometrów, osiem i osiem dziesiątych promila, pięćdziesiąt cztery metry i wiadukt dwudziestometrowy; Gryfów Śląski – Mirsk to sześć i trzy dziesiąte kilometra, trzy i trzy dziesiąte promila, dwadzieścia dziewięć metrów i wiadukt trzydziestometrowy. Każdy z tych trzech odcinków ma po cztery posterunki, mimo że najdłuższy jest o blisko sześćdziesiąt procent dłuższy od najkrótszego. Tory linii do Jindřichovic rozebrano w 1992 roku.",
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

  districtsHeading: "Do których części Świeradowa-Zdroju dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, łącznie z Czerniawą-Zdrojem — od 1973 roku jest to część Świeradowa, a nie osobna miejscowość. Wszędzie bez dopłaty.",
    "Miasto jest rozciągnięte i rozpięte na dwustu sześćdziesięciu metrach różnicy wysokości, więc przy umawianiu warto powiedzieć, czy podjazd pod dom bywa zimą trudny.",
  ],
  districts: [],

  nearbyHeading: "Poza Świeradów-Zdrój też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Mirska, Gryfowa Śląskiego, Lubania, Szklarskiej Poręby i Olszyny — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Mirsk", "Gryfów Śląski", "Lubań", "Szklarska Poręba", "Olszyna"],

  about: blokOMnie("do Świeradowa-Zdroju", "w Świeradowie-Zdroju i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Świeradowa-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — łącznie z Czerniawą-Zdrojem, która od 1973 roku jest jego częścią. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga nazewnicza: pisze się z łącznikiem i odmienia oba człony — „do Świeradowa-Zdroju”, „w Świeradowie-Zdroju”, a nie „w Świeradów-Zdroju”. Na Dolnym Śląsku jest najwięcej w Polsce nazw z członem „-Zdrój”, więc przy umawianiu warto podać pełną, żeby nie pomylić miasta z żadnym innym.",
    },
    ...faqWspolne("w Świeradowie-Zdroju"),
    {
      question: "W rodzinie spieramy się, jak „prawidłowo” zrobić jedno danie. Kto ma rację?",
      answer:
        "Prawdopodobnie obie strony. Pierwszą wzmiankę o Świeradowie datuje się na 1524 rok pod jedną dawną nazwą albo na 1550 czy 1559 pod drugą — data zależy od tego, którą nazwę uzna się za to samo miejsce. Ciągłość bywa decyzją, nie faktem. Z daniem robionym „od zawsze” jest identycznie: zmieniła się kiełbasa, zniknęła śmietana, doszła inna patelnia, a nazwa została ta sama. Lekarstwo kosztuje trzy słowa — przekazując przepis, nazwij wersję. I warto pamiętać, że danie, które zmieniło się pięć razy, nie jest gorsze; jest tą wersją, która przetrwała.",
    },
    {
      question: "Czy Thermomix zmieni smak dań, które robimy od lat?",
      answer:
        "Tak, i wolę powiedzieć to wprost przed zakupem niż tłumaczyć po. Inne rozdrobnienie, inne mieszanie, inna konsystencja — pierwsze danie, które wyjdzie inaczej niż zawsze, daje wielu osobom poczucie, że coś zepsuły. Nie zepsuły: powstała kolejna wersja, tak jak powstawała za każdym razem, gdy zmieniał się piekarnik albo znikał jakiś składnik. Na prezentacji zwykle gotuję z Wami właśnie takie danie — wasze własne, nie z folderu — żeby ta różnica była widoczna od razu, a nie tydzień po dostawie.",
    },
  ],

  geo: { lat: 50.9087, lng: 15.343 },
};
