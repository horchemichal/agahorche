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
 * BRZEŹNICA — gmina wiejska, 10 876 mieszkańców (GUS, 31.12.2024),
 * 66,5 km², powiat wadowicki.
 *
 * OŚ STRONY: KOLEJ. Ze stacji Brzeźnica jedzie się do Krakowa
 * Głównego ok. 45 minut, ponad trzydziestoma pociągami dziennie,
 * bez przesiadki. To jest lepszy dojazd niż z niejednej dzielnicy
 * Krakowa i lepszy niż z większości gmin, o których dotąd pisałam.
 * Dlatego to jest oś, a nie ozdobnik.
 *
 * Druga oś, wspierająca: gmina ROŚNIE mimo ujemnego przyrostu
 * naturalnego — wyłącznie napływem (+75 saldo migracji wewn.),
 * a nowe domy mają średnio 131,8 m². To jest ten sam wzorzec,
 * który zagrał w Zielonkach: ludzie wyprowadzają się z Krakowa,
 * ale chcą do niego dojeżdżać.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KOLEJ: stacja Brzeźnica na linii nr 94 Kraków Płaszów–Oświęcim,
 *   obsługiwana przez Koleje Małopolskie. Rozkład na 29.08.2026:
 *   ponad 30 kursów bezpośrednich do Krakowa Głównego w dzień
 *   roboczy, czas przejazdu 45–46 min (pojedyncze do 59 min),
 *   pierwszy ok. 4:50, ostatni ok. 22:56.
 *   UWAGA: w tekście piszę „ponad trzydzieści pociągów” i „około
 *   czterdziestu pięciu minut”, NIE podaję dokładnej liczby 34,
 *   bo rozkład zmienia się w grudniu,
 * — DROGA: DK44 (Kraków–Zator–Oświęcim) przez gminę, łączy się
 *   z A4 za Skawiną. Odległości wg gminy: Kraków 33 km,
 *   Wadowice 15 km, Kalwaria Zebrzydowska 14 km, Oświęcim 35 km.
 *   CZASU PRZEJAZDU AUTEM NIE PODAJĘ — nie potwierdzony,
 * — 13 WSI: Łączany 1 580, Brzeźnica 1 430, Sosnowice 1 338,
 *   Tłuczań 1 079, Marcyporęba 1 065, Paszkówka 1 049, Bęczyn 627,
 *   Kossowa 537, Nowe Dwory 482, Chrząstowice 452, Brzezinka 438,
 *   Wyźrał 367, Kopytówka 283,
 * — PAŁAC W PASZKÓWCE: wzniesiony 1865–1870 dla Leonarda Wężyka,
 *   proj. Feliks Księżarski (architekt Collegium Novum UJ),
 *   neogotyk angielski, park w stylu angielskim. Rejestr zabytków
 *   A-722/96 z 6.02.1996,
 * — KOŚCIÓŁ ŚW. MARCINA W MARCYPORĘBIE: drewniany, zbudowany
 *   1670, konsekrowany 1677, na Szlaku Architektury Drewnianej.
 *   Gotycki krucyfiks z XV w., renesansowa chrzcielnica z 1545 r.,
 *   klasycystyczna dzwonnica parawanowa z 1831 r. Pierwsza
 *   wzmianka o Marcyporębie: 1337 r.,
 * — DEMOGRAFIA: +8,2% ludności (2002–2024) mimo przyrostu
 *   naturalnego −25; saldo migracji wewnętrznych +75. Mediana
 *   wieku 39,8. Mieszkania 99,9 m²; NOWE oddane w 2024 średnio
 *   131,8 m², 85,5% na cele indywidualne,
 * — GOSPODARKA: 1 193 podmioty REGON, w tym 1 006 osób fizycznych.
 *   1 171 mikro, 20 małych, 2 średnie, ZERO powyżej 249 osób,
 * — Kanał Łączański (żeglowny) odgałęzia się od Wisły.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — PAŁAC W PASZKÓWCE JAKO DZIAŁAJĄCY HOTEL. Pałac mieścił hotel
 *   i centrum konferencyjne, ALE w 2026 r. ukazały się doniesienia
 *   o licytacjach komorniczych. NIE PISZĘ, że hotel działa.
 *   Opisuję pałac jako zabytek i nic ponadto,
 * — LICZBA SOŁECTW. Serwis gminy sam sobie przeczy: nagłówek mówi
 *   „14 sołectw”, a lista wymienia 13 nazw. Dlatego w tekście
 *   NIE PADA ŻADNA LICZBA — piszę „trzynaście wsi”, bo tyle nazw
 *   jest potwierdzonych, i nie nazywam ich sołectwami,
 * — DOKŁADNA LICZBA POCIĄGÓW. Zliczyłam 34 w rozkładzie na
 *   sierpień 2026, ale rozkład zmienia się w grudniu. Piszę
 *   „ponad trzydzieści”,
 * — POTRAWA LOKALNA. Sprawdzone: BRAK udokumentowanej potrawy
 *   lokalnej i brak wpisu na Liście Produktów Tradycyjnych.
 *   Sekcja `culinary` mówi o tym wprost i przechodzi do tego,
 *   co realne: gotowanie w domu, z którego się dojeżdża,
 * — KGW i IMPREZY. Istnieją Dożynki Gminne rotujące między wsiami
 *   (potwierdzone w Tłuczani i Wyźrale), ale bez numerów edycji.
 *   Wspominam ogólnie, bez liczb.
 *
 * PUŁAPKI:
 * — TO NIE JEST Brzeźnica podkarpacka, lubelska, pomorska ani
 *   dolnośląska. Ta jest w powiecie wadowickim, TERYT 1218022,
 * — WIEŚ BRZEŹNICA TO TYLKO 13% LUDNOŚCI GMINY (1 430 z 10 876).
 *   Największa jest ŁĄCZANY (1 580). Strona nie może traktować
 *   siedziby jako głównego tematu — ten sam problem co przy
 *   Grybowie w planie,
 * — linia kolejowa to nr 94 Kraków Płaszów–Oświęcim, NIE „linia
 *   do Oświęcimia” w domyśle Auschwitz. Nie dotykam tego skojarzenia,
 * — nie potwierdzono, czy w gminie są inne przystanki poza samą
 *   Brzeźnicą. Nie sugeruję, że jest tylko jeden.
 */

export const BRZEZNICA: CityContent = {
  slug: "brzeznica",
  h1: "Thermomix Brzeźnica – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Brzeźnica — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Brzeźnica: bezpłatna prezentacja TM7 u Ciebie w kuchni — Łączany, Paszkówka, Marcyporęba i pozostałe wsie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brzeźnica — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Brzeźnica. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Brzeźnica przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich wsi gminy, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Brzeźnica, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Brzeźnica – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Brzeźnicy, jak w Łączanach, Paszkówce czy Marcyporębie.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje.",
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
      heading: "Czterdzieści pięć minut do Krakowa Głównego",
      paragraphs: [
        "Zacznę od rzeczy, która najbardziej opisuje tę gminę i o której zaskakująco mało się mówi. Ze stacji w Brzeźnicy jedzie się do Krakowa Głównego około czterdziestu pięciu minut, bez przesiadki, ponad trzydziestoma pociągami dziennie. Pierwszy odjeżdża przed piątą rano, ostatni wraca około jedenastej w nocy.",
        "To jest lepszy dojazd niż z niejednej dzielnicy samego Krakowa i zdecydowanie lepszy niż z większości gmin, o których pisałam na tej stronie. Do tego przez gminę biegnie droga krajowa łącząca się z autostradą za Skawiną, a do Wadowic jest stąd kilkanaście kilometrów.",
        "Widać to w liczbach ludności i to jest może najciekawsza rzecz o tej gminie. Brzeźnica ma ujemny przyrost naturalny — rodzi się tu mniej dzieci, niż umiera ludzi. A mimo to gmina rośnie: od dwa tysiące drugiego roku przybyło ponad osiem procent mieszkańców. Cały ten wzrost bierze się z tego, że ludzie się tu wprowadzają.",
        "I widać, jak się wprowadzają. Nowe mieszkania oddane do użytku w dwa tysiące dwudziestym czwartym roku miały średnio ponad sto trzydzieści metrów kwadratowych, a ponad osiemdziesiąt pięć procent z nich powstało na cele indywidualne. To znaczy: domy jednorodzinne, budowane dla siebie, przez ludzi, którzy podjęli decyzję na dwadzieścia lat do przodu.",
        "Praktycznie oznacza to bardzo konkretny rytm dnia, który znam z wielu takich gmin. Wyjście z domu przed siódmą, powrót po siedemnastej albo później. Dziecko odebrane po drodze. I wieczór, w którym trzeba coś zjeść, a nie ma już siły stać przy garnku — bo dzień zaczął się na peronie.",
        "To jest właśnie to, co pokazuję na prezentacji. Nie to, że urządzenie ugotuje coś wymyślnego, tylko że obiad może się gotować sam i sam się wyłączyć, kiedy Ty jeszcze jesteś w pociągu. Mówię też wprost, czego nie zrobi: nie zastąpi wprawy ani chęci. Zabiera stanie obok garnka, nie umiejętność gotowania.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Brzeźnica?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której wsi mieszkasz. Gmina jest rozłożona na trzynaście miejscowości i naprawdę nie jest wszystko jedno, czy jadę do Łączan, do Paszkówki, czy do Kopytówki na drugim końcu.",
        "Jeśli dojeżdżasz do Krakowa, po prostu powiedz, o której realnie jesteś w domu — wieczorne spotkania są tu codziennością i nie robię z tego problemu. Weekendy są równie normalnym terminem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Brzeźnica"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, w którym dzień zaczyna się na peronie",
      paragraphs: [
        "W gminie, z której codziennie odjeżdża do Krakowa ponad trzydzieści pociągów, sporo domów działa w rytmie wyznaczonym przez rozkład jazdy. Wyjście przed siódmą, powrót po siedemnastej albo później, a między jednym a drugim dwanaście godzin, w których w kuchni nikogo nie ma.",
        "Najbardziej praktyczna rzecz w takim domu to nie szybkość, tylko możliwość przygotowania czegoś z wyprzedzeniem. Danie ugotowane w niedzielę, które w środę wciąż nadaje się do odgrzania. Zupa zrobiona wieczorem, po którą ktoś sięgnie rano. To zwykłe planowanie — tylko zwykle brakuje na nie siły akurat wtedy, kiedy trzeba je zrobić.",
        "Urządzenie zabiera z tego planowania najbardziej odpychającą część: pilnowanie. Sos gotuje się w stałej temperaturze i sam się wyłącza. Ciasto wyrabia się bez ubrudzonego blatu. Dwa kilo warzyw zamienia się w zupę do zamrożenia w czasie, w którym normalnie dopiero kończy się krojenie. Nie trzeba przy tym stać, więc da się to zrobić po pracy, a nie zamiast wolnego dnia.",
        "Druga rzecz dotyczy domów, które dopiero powstają — a w tej gminie powstają duże, po sto trzydzieści metrów. W nowym domu kuchnia zwykle jest lepsza niż poprzednia, ale dzień wcale nie robi się dłuższy. Sprzęt, który pozwala nie stać przy garnku, ma tam więcej sensu niż kolejna szafka.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — i w domu, w którym rodzic wraca pociągiem o osiemnastej, to potrafi być większa zmiana niż wszystko inne.",
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
    heading: "Brzeźnica i gotowanie — bez wymyślonej potrawy lokalnej",
    paragraphs: [
      "Zacznę od tego, czego tu nie ma, bo to uczciwsze niż udawanie. Gmina Brzeźnica nie ma żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych i nie znalazłam udokumentowanej potrawy, którą można by nazwać wyłącznie tutejszą. Mogłabym wpisać w to miejsce jakieś ogólne danie małopolskie i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "Kuchnia w tej gminie ma za to inną, bardzo wyraźną cechę, która nie ma nic wspólnego z folklorem: jest kuchnią domu, z którego się dojeżdża. Gotuje się w niej wieczorami i w weekendy, na kilka dni do przodu, bo w tygodniu po prostu nie ma kiedy. To nie jest gorszy sposób prowadzenia kuchni — po prostu inny niż ten, o którym pisze się w folderach.",
      "Praktycznie znaczy to, że najważniejsze staje się nie tempo, tylko to, żeby dało się coś zrobić bez pilnowania. Zupa, która gotuje się, kiedy Ty rozpakowujesz zakupy. Sos, który się nie przypali, bo nikt nad nim nie stoi. Ciasto wyrobione w kilkadziesiąt sekund, kiedy jest już wpół do dziewiątej wieczorem i i tak trzeba jeszcze zrobić kanapki na jutro.",
      "Jest w tej gminie coś, co warto zobaczyć przy okazji, choć z gotowaniem nie ma związku: w Marcyporębie stoi drewniany kościół z tysiąc sześćset siedemdziesiątego roku, na Szlaku Architektury Drewnianej, z gotyckim krucyfiksem z piętnastego wieku i renesansową chrzcielnicą z tysiąc pięćset czterdziestego piątego. Obok klasycystyczna dzwonnica z tysiąc osiemset trzydziestego pierwszego. W Paszkówce zaś stoi neogotycki pałac zbudowany w latach sześćdziesiątych dziewiętnastego wieku, zaprojektowany przez architekta krakowskiego Collegium Novum.",
    ],
  },

  districtsHeading: "Gdzie w gminie Brzeźnica dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzynastu wsi, bez żadnej dopłaty za odległość: Brzeźnica, Łączany, Sosnowice, Tłuczań, Marcyporęba, Paszkówka, Bęczyn, Kossowa, Nowe Dwory, Chrząstowice, Brzezinka, Wyźrał i Kopytówka.",
    "Warto od razu powiedzieć jedno, bo bywa mylące: sama Brzeźnica nie jest największą miejscowością gminy. Więcej ludzi mieszka w Łączanach, a Sosnowice, Tłuczań, Marcyporęba i Paszkówka mają po tysiąc i więcej mieszkańców. To gmina bez wyraźnego środka ciężkości i tak też ją traktuję przy planowaniu tras.",
    "Dwie miejscowości warto znać także z innego powodu. W Marcyporębie stoi drewniany kościół z siedemnastego wieku na Szlaku Architektury Drewnianej — pierwsza wzmianka o samej wsi pochodzi z tysiąc trzysta trzydziestego siódmego roku. W Paszkówce jest neogotycki pałac z parkiem w stylu angielskim, wpisany do rejestru zabytków.",
    "Dojazd: przez gminę biegnie droga krajowa z Krakowa przez Zator do Oświęcimia, łącząca się z autostradą za Skawiną — do Krakowa jest stąd około trzydziestu trzech kilometrów, do Wadowic piętnaście, do Kalwarii Zebrzydowskiej czternaście. A przede wszystkim jest kolej: ponad trzydzieści pociągów dziennie ze stacji Brzeźnica wprost do Krakowa Głównego, około czterdziestu pięciu minut jazdy.",
  ],
  districts: [
    "Brzeźnica",
    "Łączany",
    "Sosnowice",
    "Tłuczań",
    "Marcyporęba",
    "Paszkówka",
    "Bęczyn",
    "Kossowa",
    "Nowe Dwory",
    "Chrząstowice",
    "Brzezinka",
    "Wyźrał",
    "Kopytówka",
  ],

  nearbyHeading: "Spytkowice, Tomice i Skawina też są na mojej trasie",
  nearbyParagraphs: [
    "Brzeźnica graniczy ze Skawiną, Czernichowem, Spytkowicami, Tomicami, Wadowicami i Kalwarią Zebrzydowską — czyli praktycznie ze wszystkim, co mam po drodze z Krakowa. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "To zresztą jedna z wygodniejszych gmin w moim zasięgu, bo leży dokładnie na trasie, którą i tak jeżdżę. Jeśli mieszkasz na granicy gminy i nie masz pewności, po której stronie, po prostu zapytaj.",
  ],
  nearbyTowns: [
    "Spytkowice",
    "Tomice",
    "Skawina",
    "Wadowice",
    "Kalwaria Zebrzydowska",
    "Kraków",
  ],

  about: blokOMnie("do gminy Brzeźnica", "w powiecie wadowickim"),

  faq: [
    {
      question: "Wracam pociągiem z Krakowa po siedemnastej. Zdążysz przyjechać?",
      answer:
        "Zdążę i to jest w tej gminie najczęstszy scenariusz — ze stacji w Brzeźnicy jedzie do Krakowa ponad trzydzieści pociągów dziennie, więc trafiam tu głównie wieczorami. Powiedz, o której realnie jesteś w domu, a resztę ułożę wokół tego. Prezentacja trwa około dwóch godzin, więc spokojnie mieści się w wieczorze.",
    },
    ...faqWspolne("w gminie Brzeźnica"),
    {
      question: "Mieszkam w Kopytówce, na końcu gminy. Przyjedziesz?",
      answer:
        "Przyjadę i bez dopłaty za odległość — do wszystkich trzynastu wsi gminy tak samo. Gmina jest rozłożona szeroko i bez wyraźnego środka, więc przy umawianiu proszę o nazwę wsi i ewentualnie punkt orientacyjny. Wolę wyjechać wcześniej, niż kazać Ci czekać.",
    },
    {
      question: "Budujemy się i kuchnia nie jest jeszcze gotowa. Ma sens umawiać się teraz?",
      answer:
        "Ma i w tej gminie zdarza się to często — nowe domy powstają tu duże, średnio po sto trzydzieści metrów. Do prezentacji potrzebuję tylko wolnego kawałka blatu i gniazdka, resztę przywożę ze sobą. Czasem nawet lepiej zobaczyć urządzenie przed skończeniem kuchni niż po, bo wtedy jeszcze da się zaplanować dla niego miejsce.",
    },
  ],

  geo: { lat: 49.9649, lng: 19.619 },
};
