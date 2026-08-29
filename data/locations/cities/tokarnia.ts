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
 * TOKARNIA — gmina wiejska, powiat myślenicki, na styku Beskidu
 * Makowskiego i Beskidu Wyspowego, w dolinie potoku Krzczonówka.
 * 8 777 mieszkańców (31.12.2025, GUS BDL) na 68,6 km²,
 * gęstość ok. 128 os./km². Sześć sołectw.
 *
 * OŚ STRONY: KLISZCZACY. To grupa etnograficzna pogranicza —
 * nazwę wprowadził do literatury WINCENTY POL W 1851 R., a sama
 * gmina opisuje ich jako „ani górale podhalańscy, ani krakowiacy".
 * Region Kliszczaków to trójkąt Myślenice – Rabka-Zdrój –
 * Sucha Beskidzka. Działa Zespół Regionalny „Kliszczacy" z Tokarni
 * i „Mali Kliszczacy".
 *
 * DRUGA OŚ: KALWARIA TOKARSKA — dwadzieścia jeden rzeźb dłuta
 * Józefa Wrony na zboczu Urbaniej Góry, tworzonych od 1982 roku
 * przez około trzydzieści lat. Jeden człowiek, trzy dekady.
 *
 * FAKTY UŻYTE I ŹRÓDŁA (dane demograficzne: GUS Bank Danych
 * Lokalnych, API, jednostka 011212009082):
 * — LUDNOŚĆ: 2025 — 8 777; 2024 — 8 784; 2020 — 8 861 (szczyt);
 *   2015 — 8 581; 2005 — 8 052; 1995 — 7 548. TREND 20-LETNI
 *   (2005→2025): +725 osób, czyli +9,0%. Od 2021 łagodny spadek
 *   (−84 od szczytu, −0,9%),
 * — URODZENIA/ZGONY (BDL): 2024 — 92/58; 2025 — 74/78.
 *   PRZYROST NATURALNY: 2023 +12, 2024 +34, 2025 −4 (PIERWSZY
 *   UJEMNY W SZEREGU). SALDO MIGRACJI: 2024 −50, 2025 0,
 * — ŚREDNI WIEK 36,3 lat (dane gminy za 2017) — wyraźnie poniżej
 *   średniej krajowej,
 * — POWIERZCHNIA: 68,6 km² (gmina; na innej podstronie „69 km²").
 *   Rozciągłość ok. 12 km wschód–zachód i 7 km północ–południe,
 * — SZCZYTY: Koskowa Góra 866 m, Zbębalowa 858 m, Kotoń 857 m,
 *   Parszywka 842 m,
 * — SOŁECTWA (6): Tokarnia, Krzczonów, Skomielna Czarna,
 *   Bogdanówka, Więciórka, Zawadka. ⚠️ Podstrona „Gmina w liczbach"
 *   wymienia tylko 4 — to błąd tej podstrony; reszta serwisu
 *   podaje 6,
 * — PIERWSZE WZMIANKI: Krzczonów 1414 (najstarsza wieś gminy),
 *   Tokarnia 1455 (nazwa od miejsca godów cietrzewi), Więciórka
 *   1365, Skomielna Czarna początek XVI w., Bogdanówka przełom
 *   XVI/XVII w. (w 1729 r. 20 domów), Zawadka 1675 (najmłodsza),
 * — KLISZCZACY: nazwę wprowadził Wincenty Pol w 1851 r.; region
 *   to trójkąt Myślenice–Rabka-Zdrój–Sucha Beskidzka, obejmujący
 *   gminy Tokarnia i Pcim oraz przyległe wsie gmin Lubień
 *   i Jordanów. Wpływy krakowskie (obyczaj, rzemiosło, strój),
 *   sądeckie i podhalańskie. Zespół Regionalny „Kliszczacy"
 *   z Tokarni (kier. artystyczny Stanisław Funk) i „Mali
 *   Kliszczacy"; koncerty m.in. we Francji i na Kaszubach,
 * — KALWARIA TOKARSKA: 21 rzeźb dłuta JÓZEFA WRONY na zboczu
 *   Urbaniej Góry, tworzonych OD 1982 R. przez ok. 30 lat;
 *   prowadzi do niej czarny szlak,
 * — ZESPÓŁ DWORSKI W SKOMIELNEJ CZARNEJ (ok. 1770): drewniana
 *   kaplica słupowa z wieżą + dwór drewniany przebudowany w 1908 r.;
 *   dziś ośrodek rekolekcyjny Braci Mniejszych Kapucynów.
 *   W kaplicy obraz Matki Boskiej z Kołomyi — wg opisu gminy
 *   pierwsza kopia obrazu jasnogórskiego z koronami Władysława IV,
 *   namalowana w 1635 r., przywieziona przez repatriantów w 1946,
 * — DWÓR TARGOWSKICH W TOKARNI: początek XIX w., przebudowany
 *   w 1907 r. przez arch. Franciszka Mączyńskiego; dziś przedszkole
 *   samorządowe i sala wystawowa. Przy dworze park — miejsce
 *   Festiwalu Kultury Beskidu Wyspowego,
 * — WOJNA: 20.11.1944 partyzanci „Odwet" i „Żelbet" BEZKRWAWO
 *   rozbroili w tokarskim dworze 64-osobową jednostkę niemiecką;
 *   29.11.1944 Niemcy zaatakowali ok. 300 partyzantów w Zawadce;
 *   4.12.1944 PACYFIKACJA ZAWADKI — ok. 60 spalonych domów.
 *   W 1946 r. ZAWADKA OTRZYMAŁA ORDER KRZYŻA GRUNWALDU III KLASY,
 * — KOŚCIOŁY I KAPLICE: Krzczonów — kaplica 1886, kościół 1930,
 *   pierwsza parafia w gminie 1936, wizytacja kard. Karola Wojtyły
 *   w 1976 r.; Więciórka — kościół 1950–1951 (projekt i budowa:
 *   Walenty Knap, mieszkaniec wsi), kaplica św. Anny na Polanie
 *   1885, rozbudowana 1905; Bogdanówka — murowana kaplica
 *   św. Jana Chrzciciela 1892 (budulec ufundowała księżna Cecylia
 *   Lubomirska w 1882), ZABYTKOWA KUŹNIA ok. 1940 przy szkole
 *   z ekspozycją kowalską; Zawadka — kapliczki 1867, 1869, 1889,
 * — GOSPODARKA (BDL): podmioty REGON 2018 — 671, 2024 — 870,
 *   2025 — 869. WZROST O OK. 30% W SIEDEM LAT. Bezrobotni
 *   zarejestrowani: 2015 — 223, 2024 — 83, 2025 — 96,
 * — WYDARZENIA: Festiwal Kultury Beskidu Wyspowego „Beskidzkie
 *   Rytmy i Smaki" w parku dworskim; Ogólnopolski Konkurs Poetycki
 *   „O kwiat Dziewięćsiła" (GOKiS Filia Skomielna Czarna, XVII
 *   edycja w 2026); akcja „Odkryj Beskid Wyspowy"; Niedziela
 *   Palmowa z konkursem palm; wyciąg narciarski w Skomielnej
 *   Czarnej ok. 700 m, oświetlony i naśnieżany; ścieżka
 *   przyrodniczo-leśna „Tokarnia – Groń" 1,5 km, 11 przystanków,
 * — KGW POTWIERDZONE: Zawadka, Krzczonów, Gminne KGW w Tokarni,
 * — SĄSIEDZI (5): Pcim, Lubień (pow. myślenicki), Jordanów,
 *   Budzów, Maków Podhalański (pow. suski),
 * — LGD: „Turystyczna Podkowa".
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WPISU NA MINISTERIALNĄ LISTĘ PRODUKTÓW TRADYCYJNYCH.
 *   Nie udało się zweryfikować (gov.pl blokuje pobieranie).
 *   Nie piszę ani że jest, ani że go nie ma,
 * — TWIERDZENIA, ŻE KOŚCIOŁY Z GMINY SĄ NA SZLAKU ARCHITEKTURY
 *   DREWNIANEJ. Nie potwierdzone,
 * — NAZW PRACODAWCÓW, DANYCH O DOJAZDACH DO PRACY I STOPY
 *   BEZROBOCIA W PROCENTACH. Nie potwierdzone,
 * — NUMERÓW DRÓG KRAJOWYCH I WOJEWÓDZKICH PRZEZ GMINĘ.
 *   Potwierdzone jest tylko położenie „na zachód od drogi
 *   Kraków–Zakopane",
 * — NAJBLIŻSZEJ STACJI KOLEJOWEJ I CZASÓW PRZEJAZDU.
 *   Nie potwierdzone,
 * — NAZW PRODUCENTÓW ŻYWNOŚCI I KIERUNKÓW PRODUKCJI ROLNEJ,
 * — MATERIAŁU I DATY BUDOWY KOŚCIOŁA PARAFIALNEGO W TOKARNI.
 *   Potwierdzone jest tylko wezwanie: Matki Boskiej Śnieżnej.
 *
 * PUŁAPKI:
 * — TOKARNIA ŚWIĘTOKRZYSKA ≠ TOKARNIA MAŁOPOLSKA. W świętokrzyskiem
 *   (gmina Chęciny) jest PARK ETNOGRAFICZNY / SKANSEN Muzeum Wsi
 *   Kieleckiej. W małopolskiej Tokarni SKANSENU NIE MA.
 *   Odległość ok. 120 km. „Gmina Tokarnia" istnieje tylko jedna,
 * — SKOMIELNA CZARNA (gm. Tokarnia) ≠ SKOMIELNA BIAŁA (gm. Lubień).
 *   Skomielna Biała leży przy zakopiance i to o niej mowa
 *   przy tunelu na S7,
 * — KLISZCZACY, NIE ZAGÓRZANIE. Zagórzanie to grupa z okolic
 *   Mszany Dolnej,
 * — KRZCZONÓW jest też w województwie lubelskim,
 * — KRZCZONÓWKA to potok, nie miejscowość,
 * — „KALWARIA TOKARSKA" ≠ KALWARIA ZEBRZYDOWSKA,
 * — LICZBA 8 730 krąży jako „aktualna liczba mieszkańców" —
 *   to stan na 2017 r.
 */

export const TOKARNIA: CityContent = {
  slug: "tokarnia",
  h1: "Thermomix Tokarnia – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Tokarnia — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Tokarnia (pow. myślenicki): bezpłatna prezentacja TM7 u Ciebie w kuchni — Tokarnia, Krzczonów, Skomielna Czarna, Bogdanówka. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tokarnia — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Tokarnia. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Tokarnia w powiecie myślenickim przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich sześciu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie sześć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Tokarnia – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Tokarni, jak w Krzczonowie, Skomielnej Czarnej, Bogdanówce, Więciórce czy Zawadce.",
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
      heading: "Ani górale, ani krakowiacy — Kliszczacy",
      paragraphs: [
        "Gmina Tokarnia leży w środku regionu Kliszczaków — grupy etnograficznej pogranicza, którą sama gmina opisuje najkrócej i najcelniej: ani górale podhalańscy, ani krakowiacy. Nazwę wprowadził do literatury Wincenty Pol w tysiąc osiemset pięćdziesiątym pierwszym roku, a region to trójkąt między Myślenicami, Rabką-Zdrojem i Suchą Beskidzką.",
        "To nie jest folklor odgrzany na potrzeby turystów. W Tokarni działa Zespół Regionalny „Kliszczacy”, a przy nim „Mali Kliszczacy” — dzieci, które uczą się tego samego repertuaru. Zespół koncertował między innymi we Francji i na Kaszubach.",
        "Druga rzecz, którą warto o tej gminie wiedzieć, jest zupełnie inna. Na zboczu Urbaniej Góry stoi dwadzieścia jeden rzeźb — Kalwaria Tokarska, dzieło jednego człowieka, Józefa Wrony, tworzone od tysiąc dziewięćset osiemdziesiątego drugiego roku przez około trzydzieści lat. Prowadzi do niej czarny szlak. Trzydzieści lat pracy jednego rzeźbiarza to nie jest atrakcja, tylko biografia.",
        "Historia gminy ma solidne metryki. Krzczonów wzmiankowano w tysiąc czterysta czternastym roku, Tokarnię w tysiąc czterysta pięćdziesiątym piątym — nazwa pochodzi od miejsca godów cietrzewi. Najmłodsza wieś, Zawadka, ma metrykę z tysiąc sześćset siedemdziesiątego piątego, a jej nazwa oznacza po prostu miejsce trudno dostępne.",
        "I to Zawadka ma tu najcięższą historię. Dwudziestego listopada tysiąc dziewięćset czterdziestego czwartego roku partyzanci oddziałów „Odwet” i „Żelbet” bezkrwawo rozbroili w tokarskim dworze sześćdziesięciu czterech Niemców. Dziewięć dni później Niemcy zaatakowali w Zawadce około trzystu partyzantów, a czwartego grudnia spacyfikowali wieś, paląc około sześćdziesięciu domów. W tysiąc dziewięćset czterdziestym szóstym roku Zawadka otrzymała Order Krzyża Grunwaldu trzeciej klasy.",
        "Gmina jest przy tym młoda — średni wiek mieszkańca to trzydzieści sześć lat — i rosła przez trzy dekady: z siedmiu i pół tysiąca osób w tysiąc dziewięćset dziewięćdziesiątym piątym do prawie ośmiu tysięcy dziewięciuset w dwa tysiące dwudziestym. Od dwa tysiące dwudziestego pierwszego roku ludność łagodnie spada, ale firm przybywa: z sześciuset siedemdziesięciu jeden w dwa tysiące osiemnastym do ośmiuset siedemdziesięciu w dwa tysiące dwudziestym czwartym, czyli o prawie jedną trzecią w siedem lat.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Tokarnia?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa: Tokarnia, Krzczonów, Skomielna Czarna, Bogdanówka, Więciórka albo Zawadka. Gmina jest rozciągnięta na dwanaście kilometrów ze wschodu na zachód, a zabudowa idzie w górę po zboczach, więc nazwa wsi i osiedla naprawdę pomaga mi trafić. Dopłaty za odległość nie ma nigdzie.",
        "Jeśli pracujecie w gospodarstwie albo dojeżdżacie do pracy, powiedzcie to od razu. Wieczór w tygodniu i sobotnie przedpołudnie są tu najczęściej wybieranymi terminami, ale dopasowuję się do Was, nie odwrotnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Tokarnia"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Młoda gmina, w której zabudowa idzie w górę po zboczach",
      paragraphs: [
        "Średni wiek mieszkańca Tokarni to trzydzieści sześć lat — jeden z najniższych, jakie widziałam, pisząc te strony. To znaczy, że jeżdżę tu głównie do domów z dziećmi, często kilkorgiem, i że rozmowa o kuchni jest tu rozmową o rodzinie, a nie o wygodzie.",
        "W takim domu najbardziej przydaje się jedna rzecz: obiad, który może powstać bez Was. Wstawiasz danie jednogarnkowe rano albo starsze dziecko wstawia po szkole, urządzenie prowadzi przepis krok po kroku, samo się wyłącza i czeka. Bez otwartego ognia, bez rozgrzanej patelni i bez ryzyka, że coś się przypali.",
        "Druga rzecz to karmienie kilkorga dzieci naraz. Zupa, sos, pasta kanapkowa, kasza, budyń, ciasto — robione seriami raz na kilka dni zamiast codziennie po trochu. W domu z trójką dzieci to nie jest oszczędność czasu, tylko różnica między jedzeniem ugotowanym a jedzeniem kupionym.",
        "Trzecia rzecz wynika z geografii. Zabudowa w tej gminie idzie w górę po zboczach, przysiółkami — do sklepu nie skoczy się tu na dół, a zimą droga do domu bywa własnym problemem. Gotowanie z zapasem oszczędza więc nie tylko czas przy garnku, ale i kursy samochodem po zaśnieżonej drodze.",
        "Rodzicom najmłodszych przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. A w gminie, w której działa zespół regionalny z dziecięcą sekcją i w której gotuje się na przeglądy i festyny, warto powiedzieć jeszcze jedno: urządzenie wyrabia ciasto i uciera masy, czyli zabiera z gotowania na większą liczbę osób dokładnie tę część, która zjada całe przedpołudnie.",
        "Czego nie zrobi, mówię wprost: nie upiecze. Piec należy do piekarnika, a wędzenie i pieczenie na ogniu zostają tam, gdzie były.",
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
    heading: "Tokarnia i gotowanie — kuchnia pogranicza, nie góralska i nie krakowska",
    paragraphs: [
      "Kliszczacy są grupą pogranicza i tak samo wygląda tutejsza kuchnia. Gmina opisuje wpływy krakowskie w obyczaju, rzemiośle i stroju, obok sądeckich i podhalańskich — to znaczy, że nie ma tu jednego „dania regionalnego”, tylko mieszanka, w której każdy element skądś przyszedł.",
      "Uczciwie powiem, czego nie wiem. Nie udało mi się zweryfikować, czy z gminy Tokarnia pochodzi jakikolwiek wpis na ministerialnej Liście Produktów Tradycyjnych — ministerialna baza była dla mnie niedostępna. Nie napiszę więc ani że jest, ani że go nie ma. Nie potwierdziłam też żadnego producenta żywności z nazwy.",
      "To, co potwierdzone, to koła gospodyń: w Zawadce, w Krzczonowie i gminne w Tokarni. To one gotują na festynach i przeglądach, i to jest realne życie kulinarne tej gminy — nie wymyślony przysmak.",
      "Jest też Festiwal Kultury Beskidu Wyspowego „Beskidzkie Rytmy i Smaki”, który odbywa się w parku przy dworze Targowskich w Tokarni. Sama nazwa mówi, jak to działa: muzyka i jedzenie razem, bo w tej okolicy jedno bez drugiego nie występuje.",
      "Z lasu bierze się tu reszta. Gmina ma dużą lesistość, a jej własny opis przyrodniczego dziedzictwa wymienia zbiór grzybów i borówki czarnej. To jest kuchnia sezonowa w najbardziej dosłownym sensie: sierpień i wrzesień wyglądają inaczej niż luty.",
      "Co z tego wynika dla urządzenia? Przy grzybach i jagodach — duszenie, sosy, farsze do pierogów, przeciery, dżemy i mrożonki, czyli rozdrabnianie plus podgrzewanie w stałej temperaturze bez pilnowania. Przy gotowaniu na większą okazję — wyrobienie ciasta i utarcie masy, ta część roboty, której nikomu się nie chce. Czyszczenia grzybów ani zbierania jagód natomiast nikt Wam nie zabierze.",
    ],
  },

  districtsHeading: "Gdzie w gminie Tokarnia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu sołectw, bez żadnej dopłaty za odległość: Tokarni, Krzczonowa, Skomielnej Czarnej, Bogdanówki, Więciórki i Zawadki.",
    "Gmina zajmuje niecałe sześćdziesiąt dziewięć kilometrów kwadratowych i liczy osiem tysięcy siedemset siedemdziesiąt siedem osób. Rozciąga się na dwanaście kilometrów ze wschodu na zachód i siedem z północy na południe, w dolinie potoku Krzczonówka, na styku Beskidu Makowskiego i Beskidu Wyspowego. Otaczają ją szczyty: Koskowa Góra osiemset sześćdziesiąt sześć metrów, Zbębalowa osiemset pięćdziesiąt osiem, Kotoń osiemset pięćdziesiąt siedem.",
    "Zabudowa idzie tu w górę po zboczach, osiedlami i przysiółkami, więc przy umawianiu proszę nie tylko o nazwę wsi, ale i o punkt orientacyjny — kościół, szkołę, sklep. Trasę i tak przejadę, ale wolę ułożyć ją z wyprzedzeniem.",
    "O dojeździe uczciwie: gmina leży na zachód od zakopianki, czyli drogi Kraków–Zakopane. Numerów dróg przez samą gminę ani odległości do najbliższej stacji kolejowej nie podam, bo nie znalazłam na nie wiarygodnego źródła i wolę tego nie zgadywać. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "I jedno rozstrzygnięcie, o które warto zadbać. Skomielna Czarna należy do gminy Tokarnia; Skomielna Biała to już gmina Lubień i to ona leży przy zakopiance. Do obu dojeżdżam, ale to dwie różne wsie kilkanaście kilometrów od siebie.",
  ],
  districts: [
    "Tokarnia",
    "Krzczonów",
    "Skomielna Czarna",
    "Bogdanówka",
    "Więciórka",
    "Zawadka",
  ],

  nearbyHeading: "Pcim, Lubień, Jordanów i Budzów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Tokarnia graniczy z pięcioma gminami: Pcimiem i Lubniem z powiatu myślenickiego oraz Jordanowem, Budzowem i Makowem Podhalańskim z powiatu suskiego. Do każdej z nich dojeżdżam i do żadnej nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Tokarnia, czy już Pcim albo Budzów — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Pcim",
    "Lubień",
    "Jordanów",
    "Budzów",
    "Maków Podhalański",
    "Myślenice",
    "Sucha Beskidzka",
  ],

  about: blokOMnie("do gminy Tokarnia", "w powiecie myślenickim"),

  faq: [
    {
      question: "Czy w Tokarni jest skansen?",
      answer:
        "Nie i to najczęstsza pomyłka przy tej gminie. Park Etnograficzny, czyli skansen Muzeum Wsi Kieleckiej, znajduje się w Tokarni w województwie świętokrzyskim, około stu dwudziestu kilometrów stąd. W tokarskiej gminie w Małopolsce jest za to Kalwaria Tokarska — dwadzieścia jeden rzeźb dłuta Józefa Wrony na zboczu Urbaniej Góry, tworzonych od tysiąc dziewięćset osiemdziesiątego drugiego roku przez około trzydzieści lat.",
    },
    ...faqWspolne("w gminie Tokarnia"),
    {
      question: "Mieszkam w Skomielnej Czarnej. Czy to ta przy zakopiance?",
      answer:
        "Nie — przy zakopiance leży Skomielna Biała, w gminie Lubień. Skomielna Czarna należy do gminy Tokarnia i to dwie różne wsie oddalone od siebie o kilkanaście kilometrów. Do obu dojeżdżam bez dopłaty, ale przy umawianiu warto to rozróżnić, bo trasę układam zupełnie inaczej.",
    },
    {
      question: "Mamy dom na zboczu, dojazd bywa trudny zimą. To problem?",
      answer:
        "Nie jest. Zabudowa w tej gminie w dużej części idzie w górę po zboczach i osiedlach, więc to sytuacja typowa, nie wyjątkowa. Proszę tylko o punkt orientacyjny przy umawianiu — kościół, szkołę, sklep — i o informację, którą stroną najlepiej podjechać. Dojazd wliczam w prezentację niezależnie od pory roku.",
    },
  ],

  geo: { lat: 49.7269, lng: 19.8714 },
};
