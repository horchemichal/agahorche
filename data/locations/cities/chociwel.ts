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
 * CHOCIWEL — powiat stargardzki,
 * woj. zachodniopomorskie, nad Krąpielą, przy jeziorze
 * Starzyc. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 974 mieszkańców (GUS 31.12.2024), 3,7 km²,
 * gęstość 810,4 os./km² — NAJWYŻSZA W TEJ FALI.
 * CAŁA GMINA: 5 433 osoby, 160,8 km², 20 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,4669 / 15,3333 (polskawliczbach).
 *   ⚠ en.wikipedia podaje 53,4661 / 15,3397 — różnica
 *   poniżej pół kilometra. Używam polskawliczbach.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 *
 * ⭐ ODMIANA — POTWIERDZONA UŻYCIEM URZĘDOWYM:
 *   D. CHOCIWLA („Burmistrz Chociwla"),
 *   Ms. W CHOCIWLU („Urząd Miejski w Chociwlu").
 *   ⚠⚠ E RUCHOME — nie „Chociwela", nie „w Chociwelu".
 *   ⚠⚠ NIE POTWIERDZONE W PWN, ale użycie urzędowe
 *   jest jednoznaczne.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   w sekcji rodzinnej piszę „dla rodziny z Chociwla".
 * ⚠ HOMONIM: Chociwel istnieje też w woj. dolnośląskim.
 *   ROZGRANICZAM W FAQ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — od 1190 r. — osadnictwo; 1321 — pierwsza pisana
 *   wzmianka o zorganizowanym ośrodku miejskim.
 * — 12 MARCA 1338 — PRAWA MIEJSKIE (prawo magdeburskie)
 *   nadane przez braci Wedlów. ⚠ DATA DZIENNA, PEWNA.
 * — 1600 — ponowna lokacja na prawie lubeckim.
 * — ⚠⚠⚠ RDZEŃ KĄTA — JARMARKI:
 *   W XIV–XV W. ODBYWAŁY SIĘ CZTERY JARMARKI ROCZNIE.
 *   W XIX W. BYŁO ICH JUŻ OSIEM — PO DWA DNI KWARTALNIE.
 *   Handlowano PROSIĘTAMI, GĘŚMI I TOWARAMI OGÓLNYMI.
 *   ⚠⚠ RDZENIEM NIE JEST PODWOJENIE LICZBY JARMARKÓW,
 *   TYLKO TO, ŻE HANDLOWANO ŻYWYMI ZWIERZĘTAMI —
 *   czyli CAŁOŚCIAMI, nie kawałkami.
 *   ⚠⚠⚠ DATY „do 1939" NIE PODAJĘ — prowadzi do wątku
 *   wysiedleń. Piszę „w XIX wieku".
 * — 1628 — 93 domy mieszkalne i 50 innych budynków.
 *   ⚠ PODAJĘ JAKO FAKT, bez robienia z tego kąta
 *   (proporcje ze spisu to kąt zajęty — Górzno).
 * — ZABYTKI: kaplica św. Ducha z XIV w.; zamek z XIV w.;
 *   KOŚCIÓŁ FARNY budowany od 1. połowy XV w.
 *   PRZEZ PONAD PIĘĆDZIESIĄT LAT; ratusz ryglowy
 *   z około 1750 r. i murowany z lat 1817–1818;
 *   mury obronne z kamienia; DWIE BRAMY — WYSOKA
 *   i MŁYŃSKA — ROZEBRANE W 1852 R.
 *   ⚠ ZAMEK WYMIENIAM JAKO BUDOWLĘ Z DATĄ.
 * — jezioro Starzyc, rzeka Krąpiel.
 * — ⚠⚠ ETYMOLOGII NAZWY NIE PODAJĘ — wiąże się
 *   ze zmianą nazwy po 1945 r.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   nie znaleziono produktu przypisanego do gminy
 *   Chociwel. NIE SUGERUJĘ ISTNIENIA TAKIEGO PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: CAŁOŚĆ KONTRA KAWAŁEK — co się naprawdę zmienia,
 * gdy kupuje się w całości zamiast w porcjach.
 * Kąt od chociwelskich jarmarków: osiem razy w roku,
 * po dwa dni kwartalnie, handlowano tu prosiętami
 * i gęśmi. Nikt nie kupował kawałka — kupowało się sztukę
 * i cała reszta roboty zostawała po stronie kupującego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w XIV i XV w. odbywały się tu cztery jarmarki
 *   rocznie, a w XIX już osiem — po dwa dni kwartalnie —
 *   i że handlowano na nich prosiętami, gęśmi i towarami
 *   ogólnymi,
 * — ŻE KUPOWAŁO SIĘ CAŁOŚĆ, A NIE KAWAŁEK — to jest
 *   rdzeń. Podział przedmiotu zakupu na porcje jest
 *   wynalazkiem późniejszym niż sam handel,
 * — ⚠⚠ ŻE DZIŚ WYBÓR MIĘDZY CAŁOŚCIĄ A KAWAŁKIEM
 *   ISTNIEJE PRAWIE PRZY KAŻDYM PRODUKCIE i że różnica
 *   jest większa, niż sugeruje cena za kilogram,
 * — ⚠⚠ ŻE SPROWADZA SIĘ ONA DO TRZECH RZECZY, PODANYCH
 *   BEZ ŻADNYCH LICZB:
 *   (1) CAŁOŚĆ WYMAGA PRACY, KTÓREJ KTOŚ INNY JUŻ NIE
 *       WYKONAŁ — i ta praca ma swój czas,
 *   (2) CAŁOŚĆ DAJE TEŻ TO, CZEGO SIĘ NIE PLANOWAŁO —
 *       części, których nie było w zamierzeniu, a które
 *       trzeba jakoś zagospodarować,
 *   (3) CAŁOŚĆ WYMAGA MIEJSCA OD RAZU, a kawałek
 *       dopasowuje się do tego, co jest,
 * — ⚠⚠ ŻE Z TEGO WYNIKA UCZCIWY WNIOSEK: całość
 *   opłaca się tym, którzy MAJĄ CZAS I MIEJSCE,
 *   a nie tym, którzy po prostu chcą zapłacić mniej.
 *   Oszczędność liczona samą ceną jest złudzeniem,
 *   bo pomija pracę,
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO PRODUKTU Z NAZWY, ŻADNYCH
 *   CEN I ŻADNYCH INSTRUKCJI ROZBIORU. To byłyby albo
 *   porady kulinarne, albo porady o bezpieczeństwie
 *   żywności. TWARDA GRANICA BEZWZGLĘDNA,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: KAWAŁEK NIE JEST GORSZYM
 *   WYBOREM. Kupowanie w porcjach jest racjonalne
 *   wszędzie tam, gdzie brakuje czasu albo miejsca,
 *   i nie ma w tym niczego do usprawiedliwiania,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie przesuwa część
 *   pracy z pierwszej kategorii — rozdrabnianie
 *   i mielenie dzieją się bez udziału rąk. ⚠⚠ NIE
 *   ZMIENIA ZA TO DWÓCH POZOSTAŁYCH: nie rozwiąże
 *   problemu części, których się nie planowało,
 *   ani problemu miejsca. Dwa z trzech powodów zostają.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MIELENIA MIĘSA I MASZYNKI — kąt zajęty
 *   (Miastko). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o TO, CZYM URZĄDZENIE NIE JEST; TUTAJ o DECYZJĘ
 *   ZAKUPOWĄ: całość czy porcja. Ani jednego zdania
 *   o mieleniu jako czynności. TWARDA GRANICA.
 * — ⚠⚠ ZERO PRODUKTÓW GOTOWYCH KONTRA ROBIONYCH SAMEMU
 *   — kąt zajęty (Łabiszyn), i ZERO „DOMOWE KONTRA
 *   PRZEMYSŁOWE" — kąt zajęty (Mrągowo). TUTAJ chodzi
 *   o SUROWIEC W CAŁOŚCI KONTRA SUROWIEC PODZIELONY,
 *   nie o gotowe danie.
 * — ⚠⚠ ZERO PROPORCJI ZAPASU — kąt zajęty (Górzno).
 * — ⚠⚠ ZERO PRZECHOWYWANIA — kąt zajęty (Dobiegniew),
 *   a przy „całości" to jednocześnie ryzyko porady
 *   o bezpieczeństwie żywności.
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS I MROŻENIA — kąt zajęty
 *   (Stopnica). Punkt o „częściach, których się nie
 *   planowało" kończę na stwierdzeniu, że trzeba je
 *   zagospodarować — BEZ ANI JEDNEGO SŁOWA JAK.
 * — ⚠⚠ ZERO ZAKUPÓW I LIST ZAKUPÓW — kąty zajęte (Kock,
 *   Czeladź, Opole, Wejherowo, Goniądz). Piszę o JEDNEJ
 *   DECYZJI przy jednym produkcie, nie o robieniu
 *   zakupów.
 * — ⚠ ZERO WYTŁOKÓW I TEGO, CO ZOSTAJE — kąt zajęty
 *   (Nasielsk).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO PRODUKTU Z NAZWY, ŻADNYCH CEN, ŻADNYCH
 *   INSTRUKCJI ROZBIORU.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   przy temacie kupowania w całości to ryzyko numer
 *   jeden. NIE PISZĘ, jak cokolwiek dzielić, trzymać
 *   ani jak długo. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO LICZB LUDNOŚCI Z LAT 1939 I 1946.
 *   Źródło podaje spadek z 3 406 do 402 osób —
 *   to jest wprost wątek wysiedleń. NIE WSPOMINAM.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ROKU 1945, ZERO ZMIANY NAZWY MIASTA
 *   I ZERO NIEMIECKIEJ NAZWY HISTORYCZNEJ.
 * — ⚠⚠ ZERO POSTACI HISTORYCZNYCH ZWIĄZANYCH Z MIASTEM
 *   — wszystkie pochodzą sprzed 1945 r. i ciągną
 *   za sobą ten kontekst.
 * — ⚠⚠ ZERO UBOJU I ROZBIORU ZWIERZĄT. Jarmarki
 *   opisuję jako HANDEL, w jednym zdaniu, bez wchodzenia
 *   w to, co działo się dalej. TWARDA GRANICA.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI (−9,9 % w latach
 *   2002–2024).
 * — ⚠ ZERO MURÓW I ZAMKU JAKO WĄTKU OBRONNEGO.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PODAJĘ etymologii nazwy miasta.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE PODAJĘ ŻADNEGO PRODUKTU Z NAZWY ANI CENY.
 * — NIE PISZĘ, JAK COKOLWIEK DZIELIĆ ANI PRZECHOWYWAĆ.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Chociwel leży nad Krąpielą, przy jeziorze Starzyc,
 *   w powiecie stargardzkim; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 2 974 mieszkańców
 *   (GUS, 31.12.2024) na 3,7 km², przy gęstości ponad
 *   ośmiuset osób na kilometr kwadratowy, a cała gmina
 *   5 433 osoby na 160,8 km² w 20 miejscowościach,
 * — osadnictwo sięga tu 1190 r., pierwsza pisana wzmianka
 *   o zorganizowanym ośrodku miejskim pochodzi z 1321 r.,
 *   prawa miejskie na prawie magdeburskim nadali miastu
 *   12 marca 1338 r. bracia Wedlowie, a w 1600 r.
 *   nastąpiła ponowna lokacja na prawie lubeckim,
 * — w XIV i XV w. odbywały się tu cztery jarmarki
 *   rocznie, a w XIX było ich już osiem — po dwa dni
 *   kwartalnie; handlowano prosiętami, gęśmi i towarami
 *   ogólnymi,
 * — spis z 1628 r. wykazał w mieście 93 domy mieszkalne
 *   i 50 innych budynków,
 * — stoją tu kaplica św. Ducha z XIV w., zamek z XIV w.,
 *   kościół farny budowany od pierwszej połowy XV w.
 *   przez ponad pięćdziesiąt lat, ratusz ryglowy
 *   z około 1750 r. i murowany z lat 1817–1818 oraz mury
 *   obronne z kamienia; dwie bramy miejskie — Wysoka
 *   i Młyńska — zostały rozebrane w 1852 r.
 */
export const CHOCIWEL: CityContent = {
  slug: "chociwel",
  h1: "Thermomix Chociwel – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Chociwel — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Chociwlu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chociwel — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chociwlu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chociwla z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Chociwel"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Całość opłaca się tym, którzy mają czas i miejsce — nie tym, którzy chcą zapłacić mniej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chociwlu – jak wygląda prezentacja?",
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
      id: "calosc-czy-kawalek",
      heading: "Osiem jarmarków w roku",
      paragraphs: [
        "W czternastym i piętnastym wieku odbywały się w Chociwlu cztery jarmarki rocznie. W dziewiętnastym było ich już osiem — po dwa dni kwartalnie. Handlowano prosiętami, gęśmi i towarami ogólnymi.",
        "I tu jest szczegół, który dziś wydaje się nieoczywisty: kupowało się sztukę. Nie kawałek. Podział przedmiotu zakupu na porcje jest wynalazkiem znacznie późniejszym niż sam handel — przez większość historii kupowało się całość i cała reszta roboty zostawała po stronie kupującego.",
        "Dziś ten wybór istnieje przy prawie każdym produkcie. I różnica między całością a kawałkiem jest znacznie większa, niż sugeruje cena za kilogram.",
        "Sprowadza się do trzech rzeczy.",
        "Pierwsza: całość wymaga pracy, której ktoś inny za nas nie wykonał. Ta praca ma swój czas i ten czas jest realny, nawet jeśli nie widnieje na paragonie.",
        "Druga, najczęściej pomijana: całość daje też to, czego się nie planowało. Części, których nie było w zamierzeniu, a które trzeba jakoś zagospodarować — bo inaczej oszczędność zamienia się w stratę.",
        "Trzecia: całość wymaga miejsca, i to od razu. Kawałek dopasowuje się do tego, co jest; całość trzeba gdzieś zmieścić w dniu zakupu.",
        "Z tego wynika wniosek, który mówię wprost, bo rzadko się go słyszy: całość opłaca się tym, którzy mają czas i miejsce. Nie tym, którzy po prostu chcą zapłacić mniej. Oszczędność policzona samą ceną jest złudzeniem, bo pomija pracę — a praca jest tu największą pozycją.",
        "Nie podam przykładów produktów ani cen i nie napiszę, jak cokolwiek dzielić. To byłyby albo porady kulinarne, albo porady dotyczące bezpieczeństwa jedzenia, a od żadnej z tych rzeczy nie jestem. Chodzi o sam rachunek.",
        "Uczciwie o drugiej stronie, bo to ważne: kawałek nie jest gorszym wyborem. Kupowanie w porcjach jest całkowicie racjonalne wszędzie tam, gdzie brakuje czasu albo miejsca, i nie ma w tym absolutnie niczego do usprawiedliwiania. Ktoś już tę pracę wykonał i został za nią zapłacony — to jest normalna transakcja, nie kompromis.",
        "Na koniec o urządzeniu, konkretnie i bez przesady. Ono przesuwa część pierwszej pozycji: rozdrabnianie dzieje się bez udziału rąk, więc ta praca kosztuje mniej uwagi niż wcześniej.",
        "Dwóch pozostałych nie zmienia i nie będę twierdzić inaczej. Nie rozwiąże problemu części, których się nie planowało, ani problemu miejsca. Dwa z trzech powodów zostają dokładnie tam, gdzie były.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chociwlu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy kupujecie raczej w całości, czy w porcjach — to zmienia dobór dań bardziej, niż się wydaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chociwlu"),
    sekcjaRaty("w Chociwlu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Chociwla",
      paragraphs: [
        "Chociwel leży nad Krąpielą, przy jeziorze Starzyc, w powiecie stargardzkim, i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko trzy tysiące mieszkańców na trzech i siedmiu dziesiątych kilometra kwadratowego — przy gęstości ponad ośmiuset osób na kilometr kwadratowy — a cała gmina ponad pięć tysięcy osób na stu sześćdziesięciu kilometrach kwadratowych, w dwudziestu miejscowościach. Osadnictwo sięga tu 1190 roku, pierwsza pisana wzmianka o zorganizowanym ośrodku miejskim pochodzi z 1321, prawa miejskie na prawie magdeburskim nadali miastu dwunastego marca 1338 roku bracia Wedlowie, a w 1600 nastąpiła ponowna lokacja na prawie lubeckim. W czternastym i piętnastym wieku odbywały się tu cztery jarmarki rocznie, a w dziewiętnastym było ich już osiem — po dwa dni kwartalnie; handlowano prosiętami, gęśmi i towarami ogólnymi. Spis z 1628 roku wykazał w mieście dziewięćdziesiąt trzy domy mieszkalne i pięćdziesiąt innych budynków. Stoją tu kaplica świętego Ducha z czternastego wieku, zamek z tego samego stulecia, kościół farny budowany od pierwszej połowy piętnastego wieku przez ponad pięćdziesiąt lat, ratusz ryglowy z około 1750 roku i murowany z lat 1817–1818 oraz mury obronne z kamienia; dwie bramy miejskie — Wysoka i Młyńska — zostały rozebrane w 1852 roku.",
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

  districtsHeading: "Do których części Chociwla dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Chociwel też przyjadę",
  nearbyParagraphs: [
    "Stargard jest dwadzieścia cztery kilometry stąd, Maszewo tuż obok, a Nowogard i Szczecin mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Stargard", "Maszewo", "Nowogard", "Szczecin"],

  about: blokOMnie("do Chociwla", "w Chociwlu", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chociwla bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Chociwel w powiecie stargardzkim w województwie zachodniopomorskim — miejscowość o tej samej nazwie jest też w dolnośląskiem.",
    },
    ...faqWspolne("w Chociwlu"),
    {
      question: "Czy opłaca się kupować w całości zamiast w porcjach?",
      answer:
        "Tym, którzy mają czas i miejsce — tak. Tym, którzy po prostu chcą zapłacić mniej — niekoniecznie. Różnica sprowadza się do trzech rzeczy: całość wymaga pracy, której ktoś inny za nas nie wykonał; daje też to, czego się nie planowało, a co trzeba jakoś zagospodarować; i wymaga miejsca od razu. Oszczędność policzona samą ceną pomija pracę, a to zwykle największa pozycja.",
    },
    {
      question: "Czy Thermomix sprawia, że kupowanie w całości się opłaca?",
      answer:
        "Częściowo. Przesuwa jedną z trzech pozycji: rozdrabnianie dzieje się bez udziału rąk, więc ta praca kosztuje mniej uwagi. Nie rozwiąże natomiast problemu części, których się nie planowało, ani problemu miejsca — dwa z trzech powodów zostają dokładnie tam, gdzie były.",
    },
  ],

  geo: { lat: 53.4669, lng: 15.3333 },
};
