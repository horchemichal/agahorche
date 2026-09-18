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
 * OSTRZESZÓW — powiat ostrzeszowski (siedziba),
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 13 497 mieszkańców (GUS 31.12.2024), 12,1 km²,
 *   gęstość 1 112,7 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia powierzchni do 12,13].
 *   PODAJĘ.
 * CAŁA GMINA: 23 707 osób, 187,4 km², gęstość
 *   127 os./km² [ZW — DOMYKA SIĘ: 126,50 → 127.
 *   PODAJĘ].
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI W GMINIE: 34 (wsie, kolonie, osady
 *   leśne).
 * ⚠⚠⚠ DANYCH Z en-wiki NIE UŻYWAM — podaje gęstość
 *   „1,1/km²" (błąd publikacyjny) i ludność 13 933
 *   niezgodną z GUS. ŹRÓDŁEM JEST WYŁĄCZNIE GUS.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 51,417 / 17,933.
 *
 * ⚠⚠ ODMIANA — Ó→O:
 *   D. do OSTRZESZOWA · Ms. w OSTRZESZOWIE ·
 *   N. Ostrzeszowem.
 *   ⚠⚠⚠ BŁĄD: „do Ostrzeszowu". Typ -ów odmienia się
 *   jak Kraków → Krakowa.
 *   Przymiotnik: OSTRZESZOWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 * ⚠ KOLIZJA: mylony z OSTROWEM WIELKOPOLSKIM
 *   (sąsiedztwo, podobny początek nazwy).
 *   ROZGRANICZAM W FAQ.
 *
 * ⚠⚠⚠ DATY USTROJOWE — LOKACJA NIEZNANA:
 *   Źródła podają trzy warianty:
 *     — 1261–1283 (UM Ostrzeszów),
 *     — 1244–1279 (naszlaku.com),
 *     — 1283 — pierwsza wzmianka jako miasto królewskie.
 *   ⚠⚠⚠ URZĄD MIASTA WPROST PISZE, ŻE PRZYWILEJ
 *   LOKACYJNY ZNISZCZONO LUB ZAGINĄŁ.
 *   PISZĘ „między 1261 a 1283 rokiem, bo przywilej
 *   lokacyjny się nie zachował" I PODAJĘ 1283 JAKO
 *   PIERWSZĄ WZMIANKĘ O MIEŚCIE KRÓLEWSKIM.
 *   ⚠⚠ NIEPEWNOŚCI DATOWANIA NIE ROBIĘ KĄTEM — figura
 *   zajęta (Piława Górna, Radków).
 *   — RATUSZ MUROWANY: 1840 r.
 *   — STACJA KOLEJOWA: 1875 r. ⚠⚠ WYŁĄCZNIE DATA.
 *   — BANK LUDOWY: 1879 r. LUDNOŚĆ 1905: 4 946 osób.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ZMIANA KSZTAŁTU W POŁOWIE:
 *   BASZTA KAZIMIERZOWSKA:
 *     — WYSOKOŚĆ 24 m, PIĘĆ KONDYGNACJI,
 *     — WZNIESIONA NA PLANIE KWADRATU, KTÓRY PRZECHODZI
 *       W OŚMIOBOK NA WYSOKOŚCI 11 m,
 *     — mury 2,2–2,4 m grubości,
 *     — renowacja 1960 r.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 11 ÷ 24 = 45,8 %.
 *   PRZEJŚCIE WYPADA TUŻ PONIŻEJ POŁOWY WYSOKOŚCI.
 *   ⚠⚠⚠ FUNKCJI OBRONNEJ NIE OPISUJĘ I NIE SPEKULUJĘ
 *   O POWODACH ZMIANY KSZTAŁTU — WĄTEK MILITARNY
 *   WYKLUCZONY. OPISUJĘ WYŁĄCZNIE GEOMETRIĘ.
 *   ⚠ ZAŁOŻENIE ZAMKOWE: ok. 27 × 39 m.
 *   ⚠ WIEŻA CIŚNIEŃ: 1916 r., ok. 40 m — o 16 m wyższa
 *     od baszty i ok. 570 lat od niej młodsza.
 *     ⚠⚠ TEGO NIE ROBIĘ KĄTEM — figura „najwyższe nie
 *     znaczy wysokie" zajęta (Chodzież), a „nowsze
 *     i większe, a niższe" zajęta (Międzylesie).
 *     PODAJĘ JAKO GOŁY FAKT.
 *   ⚠⚠ ZUŻYCIA WODY (40–75 tys. m³) NIE UŻYWAM —
 *     przeliczenie na mieszkańca to średnia, a figura
 *     średniej zajęta (Oborniki).
 *
 * KĄT: ZMIENIA KSZTAŁT W POŁOWIE WYSOKOŚCI
 * — o tym, że nauka gotowania ma dwie fazy o zupełnie
 * innych zasadach. Kąt z baszty ostrzeszowskiej: kwadrat
 * do jedenastu metrów, ośmiobok wyżej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że baszta ma 24 metry i pięć kondygnacji, a jej
 *   plan zmienia się z kwadratu w ośmiobok na wysokości
 *   jedenastu metrów,
 * — ŻE TO NIE JEST PRZYPADEK ANI PRZERÓBKA — TAK JĄ
 *   ZBUDOWANO. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NIE SPEKULUJĘ, PO CO TAK ZROBIONO,
 * — ⚠⚠ ŻE NAUKA GOTOWANIA MA DOKŁADNIE TAKIE DWIE
 *   FAZY: dolna jest kwadratowa — gramy, minuty, przepis
 *   co do litery; górna jest ośmioboczna — na oko,
 *   na smak, bez odmierzania,
 * — ⚠⚠ ŻE BŁĄD POLEGA NA OCZEKIWANIU JEDNEGO KSZTAŁTU
 *   DO SAMEJ GÓRY: albo ktoś nigdy nie wychodzi
 *   z kwadratu, albo zaczyna od ośmioboku i nic mu
 *   nie wychodzi,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nazwij, w której fazie
 *   jesteś. Potrzebujesz jeszcze dokładnych gramów?
 *   Jesteś w kwadracie i nie ma w tym nic złego,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część osób zostaje
 *   w kwadracie na zawsze i gotuje znakomicie. Przejście
 *   nie jest obowiązkowe,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE — TO JEST PRAWDZIWY ZARZUT
 *   I MUSZĘ GO POSTAWIĆ: urządzenie jest narzędziem
 *   kwadratowym. Pracuje na dokładnych ilościach
 *   i czasach, więc POTRAFI OPÓŹNIĆ PRZEJŚCIE DO FAZY
 *   „na oko". Kto gotuje wyłącznie z prowadzonych
 *   przepisów, może nie wyrobić wyczucia.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KAŻDY KOLEJNY KROK IDZIE SZYBCIEJ — kąt
 *   zajęty (Niemcza). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam chodziło o TEMPO
 *   kolejnych kroków; tu o ZMIANĘ ZASAD w połowie drogi.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZERWY ROSNĄ — kąt zajęty (Węgliniec).
 * — ⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie).
 * — ⚠⚠ ZERO NAJWYŻSZE NIE ZNACZY WYSOKIE — kąt zajęty
 *   (Chodzież).
 * — ⚠⚠ ZERO PODZIEL PRZEZ TEMPO — kąt zajęty (Stronie
 *   Śląskie).
 * — ⚠⚠ ZERO SPORU O LICZBĘ — kąt zajęty (Szamotuły).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW. ⚠⚠⚠ SZCZEGÓLNIE
 *   OSTROŻNIE W TEJ SEKCJI — mowa o gramach i minutach
 *   OGÓLNIE, NIGDY KONKRETNIE.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO I OBRONNEGO · ZERO OBOZÓW · ZERO
 *   POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku lokacji — podaję przedział
 *   i mówię, że przywilej się nie zachował.
 * — NIE SPEKULUJĘ, po co baszta zmienia kształt.
 * — NIE UŻYWAM danych Ostrzeszowa z en-wiki.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Ostrzeszów jest siedzibą powiatu ostrzeszowskiego;
 *   miasto liczy 13 497 mieszkańców (GUS, 31.12.2024)
 *   na 12,1 km², czyli 1 112,7 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 23 707
 *   osób na 187,4 km², czyli 127 osób na kilometr,
 *   i obejmuje 34 miejscowości,
 * — miasto lokowano między 1261 a 1283 r. — przywilej
 *   lokacyjny się nie zachował; w 1283 r. Ostrzeszów
 *   jest wymieniany jako miasto królewskie,
 * — Baszta Kazimierzowska ma 24 m i pięć kondygnacji,
 *   mury grubości 2,2–2,4 m, a jej plan przechodzi
 *   z kwadratu w ośmiobok na wysokości 11 m; założenie
 *   zamkowe mierzy około 27 na 39 m, basztę odnowiono
 *   w 1960 r.,
 * — wieża ciśnień z 1916 r. ma około 40 m,
 * — murowany ratusz pochodzi z 1840 r., stacja kolejowa
 *   z 1875 r., Bank Ludowy założono w 1879 r.,
 *   a w 1905 r. mieszkało tu 4 946 osób.
 */
export const OSTRZESZOW: CityContent = {
  slug: "ostrzeszow",
  h1: "Thermomix Ostrzeszów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ostrzeszów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ostrzeszowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ostrzeszów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ostrzeszowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ostrzeszowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzydziestu czterech miejscowości w gminie.",

  highlights: highlightyStandardowe("Ostrzeszów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kwadrat do jedenastu metrów. Wyżej ośmiobok.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ostrzeszowie – jak wygląda prezentacja?",
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
      id: "zmiana-ksztaltu",
      heading: "Zmienia kształt w połowie wysokości",
      paragraphs: [
        "Baszta Kazimierzowska w Ostrzeszowie ma dwadzieścia cztery metry, pięć kondygnacji i mury grube na ponad dwa metry.",
        "I jedną cechę, o której łatwo nie zauważyć z dołu: do jedenastu metrów jest zbudowana na planie kwadratu, a wyżej — na planie ośmioboku.",
        "To nie jest przeróbka ani pomyłka. Tak ją postawiono. Po co — nie wiem i nie będę zgadywać. Wystarczy mi sam fakt, że ktoś zaplanował budowlę, która w połowie wysokości przechodzi na inne zasady.",
        "Bo nauka gotowania wygląda dokładnie tak samo i prawie nikt o tym nie mówi.",
        "Dolna część jest kwadratowa. Gramy, minuty, przepis co do litery, waga na blacie. To jest faza, w której trzeba ufać instrukcji bardziej niż sobie, i próba pominięcia jej kończy się serią nieudanych obiadów.",
        "Górna jest ośmioboczna. Na oko, na smak, dosypać jeszcze trochę, zdjąć wcześniej, bo widać, że gotowe. Tu przepis jest już tylko punktem wyjścia, a waga zostaje w szufladzie.",
        "Cały błąd polega na oczekiwaniu jednego kształtu do samej góry. Jedni nigdy nie wychodzą z kwadratu i po dwudziestu latach nadal nie ugotują zupy bez kartki. Inni zaczynają od ośmioboku — improwizują, zanim mają podstawę — i dziwią się, że nic nie wychodzi.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej, że kolejne kroki potrafią iść coraz szybciej. Tam chodziło o tempo. Tu o coś innego — o moment, w którym zmieniają się same zasady.",
        "Ruch jest jeden: nazwij, w której fazie jesteś, i przestań się z tego tłumaczyć. Potrzebujesz jeszcze dokładnych gramów? Jesteś w kwadracie i to jest w porządku. Gotujesz od lat z przepisu i nigdy nie spróbowałaś bez? Zrób jedno danie na oko i zobacz, co się stanie.",
        "Uczciwie o drugiej stronie: część osób zostaje w kwadracie na zawsze i gotuje znakomicie. Przejście nie jest obowiązkowe, nie jest oznaką awansu i nikomu nie trzeba go wmawiać.",
        "I uczciwie o sprzęcie — tu mam prawdziwy zarzut wobec urządzenia, które sprzedaję. Thermomix jest narzędziem kwadratowym. Pracuje na dokładnych ilościach i czasach, a to potrafi opóźnić przejście do fazy „na oko”. Kto gotuje wyłącznie z prowadzonych przepisów, może nie wyrobić sobie wyczucia. Da się temu zaradzić — raz na jakiś czas ugotować coś bez przepisu — ale trzeba o tym wiedzieć.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ostrzeszowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy gotujecie z przepisu, czy na oko. Pod to dobieram, co pokazuję na spotkaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ostrzeszowie"),
    sekcjaRaty("w Ostrzeszowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Ostrzeszowa",
      paragraphs: [
        "Ostrzeszów jest siedzibą powiatu ostrzeszowskiego. Samo miasto liczy 13 497 mieszkańców (GUS, 31.12.2024) na 12,1 kilometra kwadratowego, czyli tysiąc sto trzynaście osób na kilometr, a cała gmina miejsko-wiejska 23 707 osób na 187,4 kilometra, czyli sto dwadzieścia siedem osób na kilometr, i obejmuje trzydzieści cztery miejscowości — wsie, kolonie i osady leśne. Miasto lokowano między 1261 a 1283 rokiem; dokładnej daty nie sposób podać, bo przywilej lokacyjny się nie zachował, a w 1283 Ostrzeszów jest już wymieniany jako miasto królewskie. Baszta Kazimierzowska ma dwadzieścia cztery metry i pięć kondygnacji, mury grubości od dwóch i dwóch dziesiątych do dwóch i czterech dziesiątych metra, a całe założenie zamkowe mierzy około dwudziestu siedmiu na trzydzieści dziewięć metrów; basztę odnowiono w 1960 roku. Wieża ciśnień z 1916 roku ma około czterdziestu metrów. Murowany ratusz pochodzi z 1840, stacja kolejowa z 1875, a w 1905 roku mieszkało tu 4 946 osób.",
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

  districtsHeading: "Do których części Ostrzeszowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu czterech miejscowości w gminie — wsi, kolonii i osad leśnych. Wszędzie bez dopłaty.",
    "Gmina ma blisko sto dziewięćdziesiąt kilometrów kwadratowych, więc przy umawianiu warto podać nazwę miejscowości obok adresu.",
  ],
  districts: [],

  nearbyHeading: "Poza Ostrzeszów też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Kępna, Mikstatu, Grabowa nad Prosną, Ostrowa Wielkopolskiego i Sycowa — wszędzie bezpłatnie, tak samo jak w samym Ostrzeszowie.",
  ],
  nearbyTowns: ["Kępno", "Mikstat", "Grabów nad Prosną", "Ostrów Wielkopolski", "Syców"],

  about: blokOMnie("do Ostrzeszowa", "w Ostrzeszowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ostrzeszowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu czterech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: mówi się „do Ostrzeszowa”, a nie „do Ostrzeszowu”. I warto uważać przy wpisywaniu adresu — Ostrzeszów bywa mylony z Ostrowem Wielkopolskim, a to dwa różne miasta w tej samej okolicy.",
    },
    ...faqWspolne("w Ostrzeszowie"),
    {
      question: "Gotuję od lat z przepisu i nadal nie potrafię bez niego. Czy to źle?",
      answer:
        "Nie, to po prostu jedna z dwóch faz. Baszta w Ostrzeszowie do jedenastu metrów jest zbudowana na planie kwadratu, a wyżej na planie ośmioboku — dwie różne zasady w jednej budowli, i tak ją zaprojektowano. Nauka gotowania wygląda podobnie: najpierw gramy i minuty, potem na oko. Błędem jest tylko oczekiwanie jednego kształtu do samej góry. Jeśli chcesz spróbować przejścia, zacznij od jednego znanego dania zrobionego bez odmierzania.",
    },
    {
      question: "Czy Thermomix nauczy mnie gotować?",
      answer:
        "Nauczy Cię prowadzić konkretne dania do końca i to jest dużo. Ale powiem też rzecz, której sprzedawcy raczej nie mówią: to jest narzędzie pracujące na dokładnych ilościach i czasach, więc potrafi opóźnić moment, w którym zaczyna się gotować na wyczucie. Kto korzysta wyłącznie z prowadzonych przepisów, może tego wyczucia nie wyrobić. Da się temu zaradzić — co jakiś czas ugotować coś bez przepisu — ale warto o tym wiedzieć przed zakupem.",
    },
  ],

  geo: { lat: 51.417, lng: 17.933 },
};
