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
 * ANDRYCHÓW — gmina miejsko-wiejska, ok. 41–42 tys. mieszkańców.
 * Największa gmina powiatu wadowickiego. Miasto Andrychów (ok. 18 tys.)
 * jest LICZNIEJSZE niż miasto Wadowice (ok. 17 tys.), mimo że stolicą
 * powiatu są Wadowice.
 *
 * OŚ STRONY: andrychowscy drelicharze. To jest najlepszy materiał
 * w całej fali wadowickiej i chyba jeden z najlepszych w całym
 * serwisie. Pańszczyźniani chłopi, którzy w XVIII w. prowadzili
 * własny handel eksportowy — od Stambułu po Amsterdam — zawiązując
 * spółki zwane „kolegacjami”. Tkactwo trwa w Andrychowie do dziś.
 *
 * Dlaczego to działa na TEJ stronie: to historia o ludziach, którzy
 * robili rzecz porządnie i sprzedawali ją dalej, niż ktokolwiek by
 * się spodziewał. Dokładnie ten rejestr, w którym chcę mówić
 * o kupowaniu sprzętu na lata.
 *
 * FAKTY UŻYTE I ŹRÓDŁA (za: „Andrychów — historia lnem tkana”,
 * M. Kulczykowski, Wadoviana nr 19; Małopolski Instytut Kultury):
 * — październik 1674 — pierwsza wzmianka o tkactwie w Andrychowie,
 * — ośrodek obejmował Andrychów oraz Roczyny, Inwałd, Sułkowice,
 *   Targanice, Wieprz i Zagórnik,
 * — chłopscy kupcy-domokrążcy zwani DRELICHARZAMI sprzedawali płótno
 *   m.in. w Stambule, Smyrnie, Aleksandrii, Wenecji, Marsylii,
 *   Barcelonie, Lubece, Hamburgu, Amsterdamie, Gdańsku i Moskwie;
 *   składy handlowe m.in. w Wenecji, Hamburgu i Lubece;
 *   ponad 80% produkcji szło na eksport,
 * — KOLEGACJE — chłopskie spółki handlowe dzielące koszty i zyski
 *   z wypraw trwających tygodnie lub miesiące,
 * — 1798 — najstarsze wpisy do księgi przyjęć cechu tkackiego,
 * — powiedzenie: „Nasz Andrychów, chociaż lichy, przyodziewa świat
 *   w drelichy!”,
 * — CIĄGŁOŚĆ: 7 maja 1907 rejestracja spółki braci Czeczowiczka,
 *   otwarcie tkalni 23 maja 1908, przed I wojną 850 pracowników.
 *   Dziś Andropol S.A. — ponad 25 000 m² powierzchni produkcyjnej,
 *   ponad 7 mln metrów tkanin rocznie, ok. 349 pracowników
 *   (rok obrotowy 2025). UWAGA na rozbieżność: firma używa
 *   oznaczenia „1906”, źródło naukowe podaje 1907/1908 — DLATEGO
 *   W TEKŚCIE NIE PADA ŻADEN Z TYCH ROKÓW, piszę „od przełomu
 *   pierwszej dekady XX wieku”,
 * — Małopolski Instytut Kultury wydał grę planszową „Chłopska Szkoła
 *   Biznesu” inspirowaną wprost historią andrychowskich tkaczy,
 *   z mechaniką kolegacji; używana w szkołach w całej Polsce,
 * — SOŁECTWA (8): Brzezinka, Inwałd, Roczyny, Rzyki,
 *   Sułkowice-Bolęcina, Sułkowice-Łęg, Targanice, Zagórnik,
 * — KGW: KGW Zagórnik zdobyło Grand Prix XXV Konkursu Potraw
 *   Regionalnych „Stół Wielkanocny” 29 marca 2025 r. w Centrum
 *   Kultury w Andrychowie. Konkurs organizuje Stowarzyszenie
 *   Gospodyń Wiejskich w Andrychowie od 2000 r.; bliźniaczy
 *   „Stół Wigilijny” miał w 2025 r. XXVI edycję, wystąpiło w niej
 *   25 kół. 13 grudnia 2025 Stowarzyszenie i jego prezes Czesława
 *   Wojewodzic otrzymali odznakę „Zasłużony dla Kultury Polskiej”,
 * — KUCHNIA: placki ziemniaczane — mieszkańców nazywano
 *   „Plackorzami” („Mapa Smaków Ziemi Wadowickiej”, IT Wadowice,
 *   lipiec 2017),
 * — KOLEJ: linia 117, stacja Andrychów. Od 14 grudnia 2025 trzy
 *   przyspieszone pociągi POLREGIO do Krakowa Głównego:
 *   6:22→7:46 (84 min), 16:20→17:38 (78 min), 18:57→20:23 (86 min),
 * — DROGA: ok. 60 km, ok. 1 h 10; A4, DK7 od Głogoczowa, DK52,
 * — mediana wieku 41,5 — MŁODSZA niż gmina Wadowice (42,2),
 * — mieszkania: 14 449, średnia powierzchnia 83,0 m², 4,24 izby,
 * — Inwałd: Park Miniatur „Świat Marzeń”; Rzyki: ośrodki narciarskie
 *   w Beskidzie Małym.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DEPOPULACJA MIASTA. Ludność miasta Andrychów spadła o 17,8%
 *   w latach 2002–2024. To prawda i to bardzo dużo, ale nie jest
 *   moją rolą przypominać ludziom, że ich miasto się wyludnia,
 *   na stronie o gotowaniu. Nie dotykam,
 * — UPADEK ANDORII. Wytwórnia Silników Wysokoprężnych „Andoria” S.A.
 *   jest w likwidacji i upadłości. Historia zakładu jest ciekawa,
 *   ale pisanie o niej to pisanie o utraconej pracy. Nie dotykam.
 *   I absolutnie nie wymieniać Andorii jako dzisiejszego pracodawcy,
 * — LICZBA KGW W SAMEJ GMINIE. Nieznana — 18 kół w Stowarzyszeniu
 *   (2013) i 25 kół w konkursie (2025) obejmują też gminy ościenne.
 *   Dlatego piszę o konkursie i o nagrodzie, nigdy o liczbie kół,
 * — PRAWA MIEJSKIE. Źródła podają 1767 albo 1768. Nie podaję roku.
 *
 * PUŁAPKI:
 * — ANDROPOL DZIAŁA i to jest sedno strony. Nie napisać, że tkactwo
 *   w Andrychowie „było kiedyś”,
 * — ANDORIA ≠ ANDROPOL. To dwie zupełnie różne firmy: silniki
 *   (upadłość) i tkaniny (działa),
 * — Sułkowice-Bolęcina i Sułkowice-Łęg to DWA odrębne sołectwa,
 * — Groń NIE jest sołectwem, tylko przysiółkiem Rzyk,
 * — WIEPRZ należał do historycznego ośrodka tkackiego, ale jest
 *   dziś osobną gminą. Wymieniam go w tym kontekście świadomie,
 * — placki nie są na Liście Produktów Tradycyjnych — nie sprawdzone,
 *   nie podnosić rangi. „Lokalna specjalność”, nie „produkt
 *   tradycyjny”.
 */

export const ANDRYCHOW: CityContent = {
  slug: "andrychow",
  h1: "Thermomix Andrychów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Andrychów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Andrychów: bezpłatna prezentacja TM7 u Ciebie w kuchni — miasto, Inwałd, Rzyki, Roczyny i pozostałe sołectwa. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Andrychów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Andrychów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Andrychów przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do miasta i do wszystkich sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Andrychów, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Andrychowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w mieszkaniu w Andrychowie, jak w domu w Rzykach czy w Inwałdzie.",
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
      heading: "Miasto, którego chłopi handlowali w Stambule",
      paragraphs: [
        "To jest moim zdaniem najlepsza historia w całym powiecie i mało kto poza Andrychowem ją zna. W osiemnastym wieku tutejsi tkacze — ludzie formalnie pańszczyźniani, bez wolności osobistej — sprzedawali własne płótno w Stambule, Smyrnie, Aleksandrii, Wenecji, Marsylii, Barcelonie, Lubece, Hamburgu i Amsterdamie. Utrzymywali własne składy handlowe za granicą. Ponad osiemdziesiąt procent tego, co wytkali, szło na eksport.",
        "Nazywano ich drelicharzami. Żeby to unieść, zawiązywali spółki — mówiło się na nie kolegacje — w których dzielili koszty i zyski z wypraw trwających tygodnie albo miesiące. Chłopi z podbeskidzkiej wsi prowadzili zorganizowany handel międzynarodowy, ze wspólnym kapitałem i podziałem ryzyka. Małopolski Instytut Kultury zrobił o tym grę planszową, w którą gra się dziś w szkołach w całej Polsce.",
        "Najważniejsze jest jednak to, co z tego zostało: w Andrychowie nadal się tka. Fabryczna tkalnia działa tu od przełomu pierwszej dekady dwudziestego wieku i pracuje do dziś — ponad siedem milionów metrów tkanin rocznie, na ponad dwudziestu pięciu tysiącach metrów kwadratowych hal. Tkaniny mundurowe, ochronne, medyczne, hotelowe.",
        "Piszę o tym na stronie o kuchennym urządzeniu, bo to jest ten sam rejestr rozmowy. Robić rzecz porządnie, kupować raz i na lata, znać się na tym, co się ma w domu — to nie jest hasło reklamowe w miejscu, w którym ludzie od trzystu lat żyją z jakości wykonania. Andrychowianie potrafią ocenić sprzęt i zwykle to robią, zanim ja zdążę cokolwiek powiedzieć.",
        "Praktycznie: miasto ma prawie osiemnaście tysięcy mieszkańców, a cała gmina ponad czterdzieści. Do Krakowa jedzie się godzinę i dziesięć minut, ale od grudnia dwa tysiące dwudziestego piątego roku ze stacji w Andrychowie odchodzą też przyspieszone pociągi wprost do Krakowa Głównego — najszybszy jest na miejscu w niecałe osiemdziesiąt minut.",
        "Mówię wprost, czego Thermomix nie zrobi: nie zastąpi wprawy. W gminie, w której koła gospodyń zdobywają Grand Prix konkursów kulinarnych, tej wprawy akurat nie brakuje. Zabiera dwie rzeczy — stanie obok garnka i te czynności, przez które gotowanie od zera odkłada się na później.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Andrychów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, gdzie mieszkasz: w mieście czy w którymś z sołectw. To ma znaczenie praktyczne, bo gmina rozciąga się od Kotliny Oświęcimskiej po grzbiety Beskidu Małego — do Rzyk czy Targanic jedzie się pod górę i dłużej, niż wynikałoby z kilometrów.",
        "Wieczory w tygodniu i weekendy są tu równie normalnymi terminami. Jeśli wracasz z Krakowa albo z Bielska, po prostu powiedz, o której jesteś w domu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Andrychów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Zmiany, dojazdy i obiad, który musi poczekać",
      paragraphs: [
        "Andrychów jest gminą przemysłową i to widać w kuchni bardziej, niż mogłoby się wydawać. Praca zmianowa oznacza, że w jednym domu ktoś wraca po czternastej, ktoś po dwudziestej drugiej, a ktoś wychodzi, kiedy inni siadają do stołu. Obiad nie jest tu jednym wydarzeniem — jest czymś, co musi przetrwać kilkanaście godzin i kilka powrotów.",
        "Najbardziej praktyczna rzecz w takim domu to nie szybkość, tylko możliwość odłożenia. Danie ugotowane w niedzielę, które w środę nadal nadaje się do odgrzania. Zupa zrobiona wieczorem, po którą ktoś sięgnie o szóstej rano przed zmianą. To zwykłe planowanie, tylko zwykle brakuje na nie siły akurat wtedy, kiedy trzeba je zrobić.",
        "Urządzenie zabiera z tego planowania najbardziej odpychającą część: pilnowanie. Sos gotuje się w stałej temperaturze i sam się wyłącza. Ciasto wyrabia się bez ubrudzonego blatu. Dwa kilo warzyw zamienia się w zupę do zamrożenia w czasie, w którym normalnie dopiero kończy się krojenie. Nie trzeba przy tym stać, więc da się to zrobić po pracy, a nie zamiast wolnego dnia.",
        "Osobno warto powiedzieć o osobach, które jedzą same, o innej godzinie niż reszta domu — a przy pracy zmianowej to codzienność. Ugotowanie jednej porcji od zera zwykle się „nie opłaca” i kończy kanapką albo czymś z torebki. Kiedy w lodówce stoi gotowa baza, ten rachunek wygląda inaczej.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — i w domu, w którym rodzic bywa na zmianie, to potrafi być większa zmiana niż wszystko inne.",
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
    heading: "Andrychów i gotowanie — placki, stół wielkanocny i Grand Prix",
    paragraphs: [
      "Mieszkańców Andrychowa nazywano Plackorzami — od placków ziemniaczanych, potrawy, którą robi się dla całego stołu, stojąc przy patelni i podając partiami, bo najlepsze są prosto z ognia. Przezwisko zapisano w „Mapie Smaków Ziemi Wadowickiej”, wydanej przez wadowicką Informację Turystyczną. Sąsiedzi mieli swoje: wadowiczanie byli Flacorzami, kalwarianie Ogórcorzami.",
      "Ale to, co dzieje się w tej gminie dziś, jest ciekawsze niż przezwisko. Od dwa tysiące pierwszego roku Stowarzyszenie Gospodyń Wiejskich w Andrychowie organizuje dwa konkursy potraw regionalnych — „Stół Wielkanocny” na wiosnę i „Stół Wigilijny” w grudniu. W dwa tysiące dwudziestym piątym roku wielkanocny miał dwudziestą piątą edycję, a wigilijny dwudziestą szóstą, z udziałem dwudziestu pięciu kół gospodyń.",
      "Grand Prix wielkanocnej edycji w marcu dwa tysiące dwudziestego piątego roku zdobyło koło gospodyń z Zagórnika. W grudniu tego samego roku samo Stowarzyszenie i jego wieloletnia prezes zostali odznaczeni przez ministra kultury odznaką „Zasłużony dla Kultury Polskiej”. To jest ćwierć wieku nieprzerwanej pracy nad tym, żeby lokalne gotowanie miało gdzie się pokazać.",
      "Piszę o tym, bo zmienia to charakter moich spotkań w tej gminie. Kiedy przyjeżdżam do domu, w którym ktoś gotuje na takim poziomie, nie mam nikogo niczego uczyć. Rozmowa idzie w inną stronę: co da się zrobić szybciej, co większą partią, i czego nie trzeba już pilnować. Placków urządzenie nie usmaży — i nie będę udawać, że usmaży. Ale całe przygotowanie przestaje zajmować pół przedpołudnia.",
    ],
  },

  districtsHeading: "Gdzie w gminie Andrychów dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich ośmiu sołectw, bez żadnej dopłaty za odległość: Brzezinka, Inwałd, Roczyny, Rzyki, Sułkowice-Bolęcina, Sułkowice-Łęg, Targanice i Zagórnik.",
    "Gmina jest wyjątkowo zróżnicowana wysokościowo — na północy sięga Kotliny Oświęcimskiej, na południu wspina się w Beskid Mały. Rzyki leżą już wysoko, z ośrodkami narciarskimi nad wsią, i zimą dojazd tam wygląda inaczej niż latem. Warto o tym powiedzieć przy umawianiu.",
    "Inwałd jest z kolei najbardziej ruchliwą miejscowością gminy poza samym miastem — to tam działa park miniatur i tam w sezonie robi się tłoczno na drodze. Jeśli umawiamy się w weekend, biorę na to poprawkę.",
    "Dojazd z Krakowa: około sześćdziesięciu kilometrów, godzina z dziesięcioma minutami — autostradą, potem drogą krajową od Głogoczowa przez Biertowice i Wadowice. Albo pociągiem: od grudnia dwa tysiące dwudziestego piątego roku ze stacji w Andrychowie odchodzą przyspieszone pociągi wprost do Krakowa Głównego.",
  ],
  districts: [
    "Andrychów",
    "Inwałd",
    "Roczyny",
    "Rzyki",
    "Targanice",
    "Zagórnik",
    "Sułkowice-Bolęcina",
    "Sułkowice-Łęg",
    "Brzezinka",
  ],

  nearbyHeading: "Wadowice, Wieprz i Kalwaria też są na mojej trasie",
  nearbyParagraphs: [
    "Do Wadowic mam stąd kilkanaście kilometrów, do Wieprza jeszcze bliżej, do Kalwarii Zebrzydowskiej i Tomic trochę dalej, ale wciąż w tym samym powiecie. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Ciekawostka, która akurat tu ma sens: Wieprz i Roczyny należały kiedyś do tego samego ośrodka tkackiego co Andrychów. Dziś to osobne gminy, ale dla mnie to nadal jedna trasa. Jeśli mieszkasz na granicy i nie masz pewności, po której stronie, po prostu zapytaj.",
  ],
  nearbyTowns: [
    "Wadowice",
    "Wieprz",
    "Kalwaria Zebrzydowska",
    "Tomice",
    "Kraków",
  ],

  about: blokOMnie("do Andrychowa", "w powiecie wadowickim"),

  faq: [
    {
      question: "Mieszkam w Rzykach, wysoko. Przyjedziesz zimą?",
      answer:
        "Przyjadę i bez dopłaty za odległość. Powiedz tylko przy umawianiu, jak wygląda ostatni odcinek drogi do Was, bo w gminie sięgającej grzbietów Beskidu Małego to realnie zmienia czas dojazdu — i wolę wyjechać wcześniej, niż kazać Ci czekać.",
    },
    ...faqWspolne("w gminie Andrychów"),
    {
      question: "Czy mogę zaprosić panie z koła gospodyń?",
      answer:
        "Jak najbardziej i w tej gminie to najwygodniejsza forma — koła są tu wyjątkowo aktywne, a jedno z nich zdobyło w tym roku Grand Prix konkursu potraw regionalnych. Powiedz przy umawianiu, ile osób będzie i gdzie się spotykacie, żebym dobrała przepisy, wzięła więcej składników i wiedziała, na jakim blacie pracujemy.",
    },
    {
      question: "Wracam pociągiem po pracy. O której możesz przyjechać?",
      answer:
        "Dopasuję się do Twojego rozkładu — powiedz, o której realnie jesteś w domu, a resztę ułożę wokół tego. Od zeszłego grudnia ze stacji w Andrychowie jeżdżą przyspieszone pociągi do Krakowa i sporo osób umawia się właśnie po powrocie takim składem. Prezentacja trwa około dwóch godzin, więc spokojnie mieści się w wieczorze.",
    },
  ],

  geo: { lat: 49.8549, lng: 19.341 },
};
