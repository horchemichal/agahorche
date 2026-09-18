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
 * WOJCIESZÓW — powiat złotoryjski, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — MIASTO JEST CAŁĄ GMINĄ. Brak wsi
 *   i sołectw.
 * MIASTO/GMINA: 3 423 mieszkańców (GUS 31.12.2024),
 *   32,2 km², gęstość 106,4 os./km² [ZW — domyka się:
 *   3 423 / 32,2 = 106,3]. PODAJĘ.
 *   ⚠ Zabudowa ciągnie się ponad 7 km wzdłuż doliny
 *   Kaczawy — stąd duża powierzchnia przy małej liczbie
 *   ludzi.
 *   ⚠⚠ PORÓWNANIA POWIERZCHNI Z INNYMI MIASTAMI TEJ FALI
 *   NIE ROBIĘ KĄTEM — figura proporcji wypadła już
 *   wielokrotnie.
 * ⚠ GEO: 50,9517 / 15,9221.
 *
 * ⚠ ODMIANA — REGULARNA:
 *   D. do Wojcieszowa · Ms. w WOJCIESZOWIE ·
 *   N. Wojcieszowem. ⚠⚠ BŁĄD: „w Wojcieszowiu".
 *   Przymiotnik: WOJCIESZOWSKI.
 *   ⚠ Części miasta: WOJCIESZÓW GÓRNY i WOJCIESZÓW
 *   DOLNY — odmieniają się dwuczłonowo („w Wojcieszowie
 *   Górnym", „z Wojcieszowa Dolnego").
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZEWNICZE — NAJSILNIEJSZE W FALI:
 *   — ⚠⚠⚠ WOJCIESZYN — WIEŚ W GMINIE NOWOGRODZIEC,
 *     TO SAMO WOJEWÓDZTWO. ⚠ NOWOGRODZIEC MA WŁASNĄ
 *     STRONĘ W TYM CYKLU. Wyszukiwarki regularnie
 *     podstawiają Wojcieszyn zamiast Wojcieszowa —
 *     potwierdzone przy zbieraniu materiału.
 *   — WOJCIESZYCE (lubuskie i dolnośląskie),
 *     WOJCIESZKÓW (lubelskie), WOJCIECHÓW (liczne).
 *   ⚠⚠⚠ W LIDZIE I FAQ ZAWSZE DOPOWIADAM „w powiecie
 *   złotoryjskim" ALBO „w Górach Kaczawskich".
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1268 r. [ZW].
 *   — PRAWA MIEJSKIE: 1973 r. [ZW]. Nadawca: rząd
 *     [SP co do aktu — PODAJĘ OGÓLNIE].
 *   ⚠⚠⚠ ODSTĘP 705 LAT — NIE UŻYWAM JAKO KĄTA.
 *   „X lat bez statusu miejskiego" to figura ZAJĘTA
 *   (Szklarska Poręba). PODAJĘ OBIE DATY JAKO FAKTY.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — GŁĘBOKOŚĆ LICZONA OD OTWORU,
 *   KTÓREGO KIEDYŚ NIE BYŁO:
 *   — JASKINIA PÓŁNOCNA WIELKA na Połomie: otwór
 *     na ok. 580 m n.p.m., GŁĘBOKOŚĆ 31 M, boczny
 *     korytarz 14 m,
 *   — jaskinię odkryto w 1924 r. — PRZYPADKIEM, PRZY
 *     PRACACH W KAMIENIOŁOMIE, nie przez poszukiwanie,
 *   — szczyt Połomu: ok. 667 m n.p.m. [SP — część
 *     opracowań podaje 666 m; PISZĘ „OKOŁO"].
 *   ⚠⚠⚠ MIĘDZY WIERZCHOŁKIEM A OTWOREM JEST OKOŁO
 *   87 METRÓW, KTÓRYCH ŻADEN OPIS JASKINI NIE
 *   UWZGLĘDNIA. „Trzydzieści jeden metrów głębokości"
 *   liczy się od poziomu, do którego doszła ściana
 *   wyrobiska. To jest cały kąt.
 *   ⚠⚠⚠ TO JEST KĄT O PUNKCIE ODNIESIENIA POMIARU,
 *   NIE O ZŁOŻU I NIE O WYDOBYCIU. Strzegom ma kąt
 *   o twardości kamienia, Stronie Śląskie o zasobach
 *   podzielonych przez tempo. ANI SŁOWA O ZŁOŻU.
 *   ⚠⚠ NIE TWIERDZĘ, że pomiar jest błędny — jest
 *   poprawny. Twierdzę, że jego punkt zerowy powstał
 *   niedawno i przy innej okazji.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — SZCZYTY W GRANICACH MIASTA: Połom ok. 667 m,
 *   Miłek 566 m, Meszna 580 m, Chmielarz 580 m,
 *   Młynica 456 m.
 *   ⚠⚠⚠ ROZPIĘTOŚCI WYSOKOŚCI NIE ROBIĘ KĄTEM —
 *   figura ZAJĘTA (Szczytna). Podaję wysokości
 *   jako fakty.
 *   ⚠ Meszna i Chmielarz mają tę samą podawaną wysokość
 *   (580 m) — i tę samą co otwór jaskini. WYMIENIAM
 *   TĘ ZBIEŻNOŚĆ, bo wzmacnia kąt: poziom 580 nie jest
 *   niczym szczególnym w tej górze.
 * — REZYDENCJE: dwór renesansowy w Wojcieszowie Górnym
 *   z 1596 r., przebudowany na pałac pod koniec XIX w.;
 *   pałac w Wojcieszowie Dolnym z przełomu XVIII
 *   i XIX w.
 *   ⚠⚠ „LICZBA SIEDZIB ODPOWIADA LICZBIE DAWNYCH
 *   CZĘŚCI" JAKO KĄT — NIE UŻYWAM: ociera się o „jedna
 *   nazwa obejmująca kilka miejsc" (Szczytna).
 * — WAPNO: pierwszy dokument o wypalaniu wapna
 *   pochodzi z 1529 r.
 *   ⚠⚠⚠ PODAJĘ WYŁĄCZNIE TĘ JEDNĄ DATĘ. ZERO
 *   O ZŁOŻU, WYDOBYCIU, ZATRUDNIENIU I ZAKŁADACH.
 * — ⚠⚠⚠ RUIN SZUBIENICY NIE WYMIENIAM — wątek
 *   penitencjarny, wykluczony.
 * — ⚠⚠ KOŚCIOŁÓW NIE OPISUJĘ — wyznaniowe.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: OD CZEGO LICZYMY
 * — o tym, że punkt zerowy pomiaru bywa ustawiony przez
 * kogoś, niedawno i przy zupełnie innej okazji. Kąt
 * od Jaskini Północnej Wielkiej: jej trzydzieści jeden
 * metrów głębokości liczy się od otworu, który powstał
 * w 1924 roku przy pracach w kamieniołomie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Jaskinia Północna Wielka na Połomie ma 31 m
 *   głębokości, a jej otwór leży na około 580 m n.p.m.,
 * — że ten otwór nie istniał naturalnie — pojawił się
 *   w 1924 r., przypadkiem, przy pracach w kamieniołomie,
 * — ŻE SZCZYT GÓRY MA OKOŁO 667 M, WIĘC MIĘDZY NIM
 *   A PUNKTEM, OD KTÓREGO LICZY SIĘ GŁĘBOKOŚĆ, LEŻY
 *   OKOŁO 87 METRÓW, KTÓRYCH ŻADEN OPIS NIE UWZGLĘDNIA.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE POMIAR NIE JEST PRZEZ TO BŁĘDNY. Jest
 *   poprawny — tylko jego zero ustawił ktoś inny,
 *   niedawno i w innym celu,
 * — ⚠⚠ ŻE W KUCHNI MAMY MNÓSTWO TAKICH ZER: „normalna
 *   porcja", „zwykły czas", „tyle się zwykle wydaje".
 *   Każde skądś przyszło — z książki kucharskiej,
 *   z domu, w którym się dorastało, z rozmiaru garnka,
 *   który ktoś kiedyś miał,
 * — ⚠⚠ ŻE PRAWIE ŻADNEGO Z NICH NIE WYBRAŁAŚ ŚWIADOMIE,
 *   a mimo to porównujesz się do nich codziennie,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: kiedy coś wydaje Ci się
 *   „za dużo", „za długo" albo „za drogo", zapytaj
 *   najpierw, WZGLĘDEM CZEGO. I skąd to „względem"
 *   się wzięło,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie da się sprawdzać
 *   wszystkich punktów odniesienia i nie warto —
 *   większość jest w porządku, a rewidowanie ich
 *   po kolei to własna forma marnowania czasu.
 *   Robi się to tylko tam, gdzie coś uwiera regularnie,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE — TO MUSI PADAĆ WPROST:
 *   „oszczędza czas" ZAWSZE jest porównaniem do czegoś,
 *   a w materiałach sprzedażowych tym czymś bywa
 *   robienie wszystkiego ręcznie. MÓWIĘ, że Wasze
 *   prawdziwe zero to sposób, w jaki gotujecie DZIŚ,
 *   i że tylko względem niego warto liczyć różnicę.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tamten tekst mówi o JEDNOSTCE
 *   POMIARU, ten o PUNKCIE ZEROWYM. JEDNO ZDANIE
 *   ROZGRANICZAJĄCE W TEKŚCIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO TWARDSZE ZUŻYWA SZYBCIEJ NARZĘDZIA —
 *   kąt zajęty (Strzegom). ANI SŁOWA O KAMIENIU
 *   JAKO SUROWCU.
 * — ⚠⚠⚠ ZERO PODZIEL PRZEZ TEMPO — kąt zajęty (Stronie
 *   Śląskie). ANI SŁOWA O ZASOBACH I WYDOBYCIU.
 * — ⚠⚠⚠ ZERO ROZPIĘTOŚCI WYSOKOŚCI — kąt zajęty
 *   (Szczytna).
 * — ⚠⚠ ZERO X LAT BEZ STATUSU MIEJSKIEGO — kąt zajęty
 *   (Szklarska Poręba).
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno).
 * — ⚠⚠ ZERO RÓŻNICA SIEDZI PO JEDNEJ STRONIE — kąt
 *   zajęty (Olszyna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNYCH LICZB MINUTOWYCH ANI KWOTOWYCH przy
 *   przykładach kuchennych — mówię „za dużo", „za długo",
 *   „za drogo", bez ani jednej wartości.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU PENITENCJARNEGO (ruiny szubienicy).
 * — ⚠⚠ ZERO WYPADKÓW I ZAGROŻEŃ W KAMIENIOŁOMIE
 *   I W JASKINI.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW
 *   (nazwa jaskini z 1924 r. — NIE WYMIENIAM).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠ ZERO UPADKU PRZEMYSŁU, ZATRUDNIENIA I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE TWIERDZĘ, że pomiar głębokości jaskini jest
 *   błędny.
 * — NIE PODAJĘ wysokości Połomu jako liczby pewnej —
 *   źródła podają 666 albo 667.
 * — NIE PODAJĘ nazwy jaskini z 1924 r.
 * — NIE PISZĘ o złożu, wydobyciu ani zatrudnieniu.
 * — NIE WYMIENIAM ruin szubienicy.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wojcieszów jest gminą miejską w powiecie
 *   złotoryjskim, w Górach Kaczawskich; liczy
 *   3 423 mieszkańców (GUS, 31.12.2024) na 32,2 km²,
 *   czyli 106,4 osoby na kilometr kwadratowy,
 *   a zabudowa ciągnie się ponad 7 km wzdłuż doliny
 *   Kaczawy,
 * — pierwsza wzmianka pochodzi z 1268 r., a prawa
 *   miejskie miasto otrzymało dopiero w 1973,
 * — Jaskinia Północna Wielka na Połomie ma 31 m
 *   głębokości i boczny korytarz długi na 14 m; jej
 *   otwór leży na około 580 m n.p.m. i powstał
 *   w 1924 r. przy pracach w kamieniołomie,
 * — szczyt Połomu ma około 667 m n.p.m.; pozostałe
 *   wzniesienia w granicach miasta to Miłek 566 m,
 *   Meszna i Chmielarz po 580 m oraz Młynica 456 m,
 * — w Wojcieszowie Górnym stoi dwór renesansowy
 *   z 1596 r., przebudowany na pałac pod koniec XIX w.,
 *   a w Wojcieszowie Dolnym pałac z przełomu XVIII
 *   i XIX w.,
 * — pierwszy dokument o wypalaniu wapna w tej
 *   miejscowości pochodzi z 1529 r.
 */
export const WOJCIESZOW: CityContent = {
  slug: "wojcieszow",
  h1: "Thermomix Wojcieszów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wojcieszów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Wojcieszowie (powiat złotoryjski): bezpłatna prezentacja TM7 u Ciebie w domu. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wojcieszów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wojcieszowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wojcieszowa w Górach Kaczawskich z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do Górnego i Dolnego tak samo.",

  highlights: highlightyStandardowe("Wojcieszów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzydzieści jeden metrów w dół. Od poziomu, który ktoś zrobił w 1924.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wojcieszowie – jak wygląda prezentacja?",
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
      id: "od-czego-liczymy",
      heading: "Od czego liczymy",
      paragraphs: [
        "Jaskinia Północna Wielka na Połomie ma trzydzieści jeden metrów głębokości. Jej otwór leży na około pięciuset osiemdziesięciu metrach nad poziomem morza.",
        "Tyle że ten otwór nie istniał naturalnie. Pojawił się w 1924 roku — przypadkiem, przy pracach w kamieniołomie. Nikt go nie szukał.",
        "Szczyt Połomu ma około sześciuset sześćdziesięciu siedmiu metrów. Między wierzchołkiem góry a poziomem, od którego liczy się tę głębokość, leży więc jakieś osiemdziesiąt siedem metrów, których żaden opis jaskini nie uwzględnia. Poziom pięćset osiemdziesiąt nie jest w tej górze niczym szczególnym — akurat tam doszła ściana wyrobiska.",
        "Pomiar nie jest przez to błędny. Jest całkiem poprawny. Tylko jego zero ustawił ktoś inny, niedawno i przy zupełnie innej okazji.",
        "W kuchni mamy takich zer mnóstwo i prawie żadnego nie ustawiłyśmy same.",
        "„Normalna porcja.” „Zwykły czas.” „Tyle się zwykle wydaje na zakupy.” Każde z tych odniesień skądś przyszło: z książki kucharskiej, z domu, w którym się dorastało, z pojemności garnka, który ktoś kiedyś dostał w prezencie.",
        "Żadne nie zostało wybrane świadomie. A porównujemy się do nich codziennie i codziennie wychodzi, że coś jest „za dużo” albo „za długo”.",
        "Ruch jest jeden i to pytanie, nie zadanie. Kiedy coś wydaje Ci się za duże, za długie albo za drogie, zapytaj najpierw: względem czego? I skąd to „względem” się w ogóle wzięło.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, w jakich jednostkach mierzysz. To osobna sprawa. Tutaj chodzi o punkt zerowy — o to, od czego liczysz, a nie czym.",
        "Uczciwie o drugiej stronie: nie da się sprawdzać wszystkich punktów odniesienia i nie warto próbować. Większość jest w porządku, a rewidowanie ich po kolei byłoby własną formą marnowania wieczoru. Robi się to tylko tam, gdzie coś uwiera regularnie.",
        "I uczciwie o sprzęcie, bo to jest dokładnie ten przypadek. „Oszczędza czas” zawsze jest porównaniem do czegoś — a w materiałach sprzedażowych tym czymś bywa robienie wszystkiego ręcznie, od siekania po zmywanie trzech garnków. Wasze prawdziwe zero to sposób, w jaki gotujecie dziś, ze swoimi skrótami i przyzwyczajeniami. Tylko względem niego warto liczyć różnicę, i tylko tak liczę ją na spotkaniu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wojcieszowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy chodzi o Wojcieszów Górny, czy Dolny — miasto ciągnie się ponad siedem kilometrów wzdłuż doliny i to realnie zmienia dojazd.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wojcieszowie"),
    sekcjaRaty("w Wojcieszowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Wojcieszowa",
      paragraphs: [
        "Wojcieszów jest gminą miejską w powiecie złotoryjskim, w Górach Kaczawskich — miasto jest tu całą gminą, bez wsi. Liczy 3 423 mieszkańców (GUS, 31.12.2024) na trzydziestu dwóch kilometrach kwadratowych, czyli sto sześć osób na kilometr; ta rzadkość bierze się stąd, że zabudowa ciągnie się ponad siedem kilometrów wzdłuż doliny Kaczawy, a granice obejmują stoki po obu stronach. Pierwsza wzmianka pochodzi z 1268 roku, a prawa miejskie miasto otrzymało dopiero w 1973. Jaskinia Północna Wielka na Połomie ma trzydzieści jeden metrów głębokości i boczny korytarz długi na czternaście; jej otwór leży na około pięciuset osiemdziesięciu metrach nad poziomem morza i powstał w 1924 roku przy pracach w kamieniołomie. Szczyt Połomu ma około sześciuset sześćdziesięciu siedmiu metrów — piszę „około”, bo część opracowań podaje o metr mniej. Pozostałe wzniesienia w granicach miasta to Miłek pięćset sześćdziesiąt sześć metrów, Meszna i Chmielarz po pięćset osiemdziesiąt oraz Młynica czterysta pięćdziesiąt sześć; ciekawe, że dwa z nich mają dokładnie tę samą podawaną wysokość co otwór jaskini. W Wojcieszowie Górnym stoi dwór renesansowy z 1596 roku, przebudowany na pałac pod koniec dziewiętnastego wieku, a w Wojcieszowie Dolnym pałac z przełomu osiemnastego i dziewiętnastego. Pierwszy dokument o wypalaniu wapna w tej miejscowości pochodzi z 1529 roku.",
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

  districtsHeading: "Do których części Wojcieszowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — i do Wojcieszowa Górnego, i do Dolnego. Wszędzie bez dopłaty, mimo że miasto zajmuje ponad trzydzieści dwa kilometry kwadratowe i ciągnie się przez siedem kilometrów doliny.",
    "Przy umawianiu warto powiedzieć, która to część, i czy podjazd pod dom bywa zimą trudny.",
  ],
  districts: [],

  nearbyHeading: "Poza Wojcieszów też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Złotoryi, Jeleniej Góry, Bolkowa, Kamiennej Góry i Legnicy — wszędzie bezpłatnie, tak samo jak w samym Wojcieszowie.",
  ],
  nearbyTowns: ["Złotoryja", "Jelenia Góra", "Bolków", "Kamienna Góra", "Legnica"],

  about: blokOMnie("do Wojcieszowa", "w Wojcieszowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wojcieszowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — do Wojcieszowa Górnego i Dolnego tak samo. Dojazd jest bezpłatny jak sama prezentacja. Uwaga nazewnicza, bo ta akurat myli się najczęściej ze wszystkich: chodzi o Wojcieszów w powiecie złotoryjskim, w Górach Kaczawskich. Wojcieszyn to wieś w gminie Nowogrodziec, w tym samym województwie, a Wojcieszyce, Wojcieszków i Wojciechów leżą jeszcze gdzie indziej. Wyszukiwarki podstawiają je jedne za drugie.",
    },
    ...faqWspolne("w Wojcieszowie"),
    {
      question: "Ciągle mam wrażenie, że gotuję za długo albo wydaję za dużo. Jak to sprawdzić?",
      answer:
        "Najpierw sprawdzając, względem czego. Jaskinia Północna Wielka na Połomie ma trzydzieści jeden metrów głębokości — ale liczonych od otworu, który powstał przypadkiem w 1924 roku przy pracach w kamieniołomie; do szczytu góry jest stamtąd jeszcze jakieś osiemdziesiąt siedem metrów, których nikt nie wlicza. Pomiar jest poprawny, tylko jego zero ustawił ktoś inny i przy innej okazji. „Normalna porcja” i „zwykły czas” też skądś przyszły — z książki, z domu rodzinnego, z rozmiaru czyjegoś garnka. Zanim uznasz, że coś jest za dużo, zapytaj, skąd wzięło się to „za”.",
    },
    {
      question: "O ile Thermomix skraca gotowanie?",
      answer:
        "To pytanie nie ma odpowiedzi bez podania punktu odniesienia i uważam, że warto to powiedzieć wprost. W materiałach sprzedażowych porównuje się zwykle do robienia wszystkiego ręcznie — z siekaniem, staniem przy garnku i zmywaniem trzech naczyń. Wasze prawdziwe zero to sposób, w jaki gotujecie dziś, ze swoimi skrótami. Dlatego na prezentacji gotuję zwyczajny obiad w Waszym tempie, zamiast pokazywać, o ile szybciej da się coś zrobić od wersji, której i tak nikt nie robi.",
    },
  ],

  geo: { lat: 50.9517, lng: 15.9221 },
};
