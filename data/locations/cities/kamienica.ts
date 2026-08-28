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
 * KAMIENICA — gmina na końcu drogi, w dolinie rozdzielającej dwa
 * grzbiety Gorczańskiego Parku Narodowego. Najdalej położona
 * w całym moim obszarze: do Krakowa realnie dwie godziny.
 * To jest oś tej strony — i to jest argument za mną, nie przeciw.
 *
 * UWAGA STRUKTURALNA, NAJWAŻNIEJSZA NA TEJ STRONIE:
 * 1 stycznia 2025 r. z gminy Kamienica wydzielono nową gminę Szczawa.
 * Gmina Kamienica ma dziś CZTERY sołectwa i ok. 5 988 mieszkańców,
 * a nie pięć i 7 800. Wszystkie dane GUS na 31.12.2024 dotyczą jeszcze
 * starej, większej gminy i NIE WOLNO ich tu użyć bez zastrzeżenia.
 * Napisanie „gmina Kamienica, w tym Szczawa” natychmiast pokazuje,
 * że materiał jest nieaktualny.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — podział: rozporządzenie Rady Ministrów przyjęte 1.10.2024,
 *   w życie 1.01.2025; Szczawa to 42,4 km² i 1 830 mieszkańców;
 *   Małopolska ma od tego czasu 183 gminy zamiast 182,
 * — 4 sołectwa, ewidencja gminna 31.12.2025: Kamienica 3 497,
 *   Zalesie 1 047, Zbludza 790, Zasadne 654 — razem 5 988,
 * — powierzchnia po podziale ok. 53 km² (95,2 minus 42,4 km² Szczawy),
 * — lesistość 61,7% (GUS 2019, 111. miejsce w Polsce) — najwyższa
 *   w całym moim obszarze,
 * — średnia wieku 37,6 lat (GUS 2024, jeszcze dla starej gminy);
 *   przyrost naturalny 2024 dodatni (+13). Powiat limanowski jest
 *   drugim najmłodszym powiatem w Polsce (mediana 36,4 lat, GUS 2020),
 * — budżet gminy 2025: dochody 49,35 mln zł, wydatki 52,14 mln zł,
 *   zerowe zadłużenie, majątek 148 mln zł,
 * — położenie: dolina rzeki Kamienicy, między Gorcami a Beskidem
 *   Wyspowym; rzeka ma źródła w rejonie Turbacza (1 310 m); nazwa wsi
 *   prawdopodobnie od dużych głazów w korycie,
 * — Gorczański Park Narodowy: 7 029 ha, ok. 14% masywu Gorców,
 *   ok. 40% pod ochroną ścisłą, lasy ok. 95% powierzchni parku;
 *   dwa główne grzbiety — Turbacz–Gorc i Turbacz–Kudłoń — rozdziela
 *   dolina Kamienicy; rezerwat leśny „Turbacz” chroniony od 1927 r.;
 *   74 km szlaków pieszych, 63 km tras konnych; wejście od strony
 *   gminy: Lubomierz-Rzeki, dwie ścieżki edukacyjne,
 * — Kudłoń 1 274 m, Gorc 1 228 m, Turbacz 1 310 m,
 * — ETNOGRAFIA: Górale Biali (Łącko-Kamieniccy), subregion kamienicki
 *   Górali Sądeckich — NIE Zagórzanie. Centrum kulturowe grupy: Łącko.
 *   Nazwa od białych sukiennych gurman; gwara łącka. Cechy subregionu
 *   kamienickiego: bogatszy haft (czerwień plus ciemnoniebieski,
 *   zielony i żółty), zachowane kwadratowe „łoktuse”, czapki baranie
 *   z główką pokrytą niebieskim suknem,
 * — zespoły: „Gorce” (1952) — LAUREAT NAGRODY KOLBERGA 2022 w kategorii
 *   zespołów folklorystycznych; „Młode Gorce” (1999); „Gronicki”
 *   (dziecięcy, 1954); „Zasadnioki” (dziecięcy, 2004). „Gorce”
 *   wystąpiły m.in. w Bułgarii, Szwecji, we Włoszech, Chorwacji,
 *   Francji, Belgii, Niemczech, na Węgrzech i Słowacji; wydały płyty
 *   i śpiewnik pieśni regionalnych; przekaz ustny, nie z nut,
 * — tańce lokalne: obyrtany, walc kamienicki, sztajerek, polka
 *   starodawna, zbójnicki, hajduk,
 * — historia: lokacja 1297 przez księżną Gryfinę, wdowę po Leszku
 *   Czarnym; ponowna lokacja na prawie magdeburskim przez klaryski
 *   ze Starego Sącza; 1782 konfiskata dóbr klasztornych przez władze
 *   austriackie; 1830 majątek nabywa Józef Kirchner, przekazuje zięciowi
 *   Maksymilianowi Marszałkowiczowi — „złoty wiek”: huty, huta szkła,
 *   papiernia; granice gminy pokrywają się z granicami dawnej parafii,
 * — gospodarka: 48,2% samozatrudnionych w budownictwie — najwyższy
 *   udział w powiecie; rolnictwo 29,4% pracujących; 693 podmioty
 *   gospodarcze, niemal wyłącznie mikrofirmy poniżej 10 osób; lokalny
 *   tartak; 6 szkół podstawowych, średnia liczebność klasy 14 uczniów,
 * — gminny dom kultury: 30 wydarzeń w 2024 r., ok. 4 300 uczestników,
 * — komunikacja: jedyna droga wyższej kategorii to DW968 (Lubień –
 *   Mszana Dolna – Kamienica – Zabrzeż, ok. 44 km); brak drogi
 *   krajowej; brak kolei — najbliższe stacje Mszana Dolna (~22 km,
 *   w przebudowie) i Nowy Sącz (~40 km); autobusy: linia Szczawa –
 *   Kamienica – Łącko – Stary Sącz – Nowy Sącz (przystanki w Kamienicy:
 *   Łęgi, Kurzejówka, Tartak, Rynek, Dolna, Wieś), linia Szczawa –
 *   Kamienica Rynek – Limanowa, linia Zasadne – Limanowa,
 *   linia Zasadne – Łącko – Nowy Sącz,
 * — odległości: Mszana Dolna ~22 km, Limanowa ~30 km, Nowy Sącz
 *   ~40 km, Kraków ~90 km i realnie ok. dwóch godzin,
 * — Gminne Święto Plonów — dożynki rotacyjnie w sołectwach, konkurs
 *   wieńców i konkurs na najlepsze ciasto owocowe, z udziałem Kół
 *   Gospodyń Wiejskich; Dni Gorczańskie,
 * — wieża widokowa na Mogielicy powstała w 2008 r. ze wspólnej
 *   inicjatywy gmin Dobra, Kamienica i Słopnice.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — jakiegokolwiek komentarza do podziału gminy. Wieś Zasadne
 *   publicznie protestowała przeciw włączeniu części swojego obszaru
 *   do nowej gminy Szczawa („Gazdujcie na swoim”). Rodziny i sąsiedzi
 *   zostali rozdzieleni granicą. Stan faktyczny znam i stosuję,
 *   ale go nie oceniam i nie komentuję ani słowem,
 * — Szczawy jako części gminy — od 2025 r. to osobna gmina. Nie piszę
 *   też o tamtejszej orkiestrze dętej jako o „naszej”,
 * — nazywania mieszkanek Zagórzankami. To Górale Biali. Pomylenie tego
 *   jest tu czytelnym błędem, a Mszana Dolna leży o dolinę dalej,
 * — procentu powierzchni gminy leżącego w Gorczańskim Parku Narodowym
 *   — takiej danej nie ma. Piszę opisowo,
 * — osuwisk i powodzi. Powiat limanowski jest jednym z najbardziej
 *   osuwiskowych obszarów w Polsce; wiele rodzin straciło domy.
 *   Na stronie sprzedażowej AGD nie ma na to miejsca,
 * — historii partyzanckiej Kamienicy z czasów II wojny,
 * — bezrobocia i poziomu wynagrodzeń (80,2% średniej regionalnej),
 * — produktów z Listy Produktów Tradycyjnych. Z tej gminy NIE MA
 *   ANI JEDNEGO. Bundz i miód spadziowy z Beskidu Wyspowego są
 *   wpisane jako powiatowe, bez przypisania do gminy — i tak je
 *   opisuję. Kuchni „kamienickiej” nie ma udokumentowanej osobno,
 *   więc nie wymyślam nazw potraw,
 * — liczby KGW. Wiadomo, że działają w każdym sołectwie, ale
 *   imiennej listy nie ma. Piszę „w każdym sołectwie”, bez cyfry.
 *
 * PUŁAPKA: Mogielica (1 171 m) nie leży w tej gminie — jest na styku
 * gmin Słopnice, Dobra i Jurków. Kamienica współfinansowała wieżę.
 */
export const KAMIENICA: CityContent = {
  slug: "kamienica",
  h1: "Thermomix Kamienica – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Kamienica — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Kamienica: bezpłatna prezentacja TM7 u Ciebie w kuchni — Kamienica, Zalesie, Zbludza, Zasadne. Dojazd bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Kamienica — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Kamienica. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Kamienica przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do Kamienicy, Zalesia, Zbludzy i Zasadnego — bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Kamienica, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kamienicy – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Kamienicy przy rynku, jak na końcu Zasadnego.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading:
        "Gmina na końcu drogi — i dlaczego to argument za, a nie przeciw",
      paragraphs: [
        "Kamienica leży w dolinie rzeki, która rozdziela dwa główne grzbiety Gorczańskiego Parku Narodowego, między Gorcami a Beskidem Wyspowym. Ponad sześćdziesiąt procent gminy to las — najwięcej w całej okolicy. Przez teren biegnie jedna droga wyższej kategorii, wojewódzka, i to na jej końcu, przed Zabrzeżem. Nie ma tu drogi krajowej i nie ma kolei.",
        "W liczbach wygląda to tak: do Mszany Dolnej ponad dwadzieścia kilometrów, do Limanowej trzydzieści, do Nowego Sącza czterdzieści, a do Krakowa realnie dwie godziny drogi. Z Zasadnego jeszcze kwadrans dłużej. To najdalej położona gmina w całym obszarze, w którym pracuję.",
        "I dokładnie dlatego ta strona w ogóle istnieje. Do salonu z takim sprzętem nikt stąd nie pojedzie „przy okazji” — dwie godziny w jedną stronę to cały dzień. Jeśli więc urządzenie ma być kupione świadomie, a nie z internetu w ciemno, to ktoś musi je tutaj przywieźć. Przywożę i nie liczę za to ani złotówki.",
        "Druga rzecz to układ pracy, który jest tu inny niż gdziekolwiek indziej w powiecie. Prawie połowa osób prowadzących własną działalność w tej gminie pracuje w budownictwie — najwięcej w całym powiecie. To znaczy murarze, cieśle, dekarze, często w delegacji, w tygodniu poza domem. Do tego rolnictwo, las i tartak. Nie ma tu jednego dużego zakładu; jest sześćset kilkadziesiąt mikrofirm.",
        "W praktyce zostaje z tego bardzo konkretny rytm domu: przez tydzień gotuje się dla siebie i dla dzieci, a w weekend dla wszystkich naraz i zwykle więcej. Do tego dochodzą zapasy, bo do porządnego sklepu jest kawałek, a zimą w dolinie kawałek robi się dłuższy.",
        "Mówię więc wprost, czego to urządzenie nie zrobi: nie ugotuje za Was i nie zastąpi wprawy — tej w gminie, która wystawia zespół nagrodzony Nagrodą Kolberga, na pewno nie brakuje. Zabiera dwie rzeczy. Konieczność stania obok garnka: zupa gotuje się, kiedy Ty jesteś przy zwierzętach albo przy dzieciach, i sama się wyłącza. I te czynności, przez które gotowanie na zapas odkłada się na później — rozdrabnianie, ucieranie, mieszanie, żeby nie przywarło.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Kamienica?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w którym sołectwie mieszkasz: Kamienica, Zalesie, Zbludza czy Zasadne. Do Zasadnego jedzie się wyraźnie dłużej niż do samej Kamienicy, więc od tego zależy godzina, o której realnie u Ciebie jestem. Jeśli dojazd pod dom jest trudny, powiedz też o tym — nie jest to problem, o ile wiem wcześniej.",
        "Do tej gminy jadę z daleka, więc najczęściej układam dzień z kilku spotkań w okolicy. Jeśli masz elastyczny termin, powiedz o tym przy umawianiu — łatwiej mi wtedy dopasować godzinę do Ciebie, a nie odwrotnie. Weekendy są tu równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Kamienica"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading:
        "Thermomix w domu, w którym w tygodniu gotuje się inaczej niż w weekend",
      paragraphs: [
        "W gminie, gdzie tak wielu mężczyzn pracuje w budowlance i bywa w tygodniu poza domem, kuchnia ma dwa tryby. Od poniedziałku do piątku gotuje się mniej i szybciej, głównie dla dzieci. W weekend odwrotnie: pełny stół, więcej osób i zwykle coś, co wymaga czasu.",
        "Praktyczne bywa tu przede wszystkim to, że oba te tryby wychodzą tym samym urządzeniem. W tygodniu zupa albo danie jednogarnkowe gotuje się bez nadzoru i czeka, aż dzieci wrócą. W weekend ten sam garnek robi się większy, a najbardziej żmudna część — rozdrabnianie, ucieranie, mieszanie — przestaje zajmować pół przedpołudnia.",
        "Druga rzecz to zapasy. Przy takiej odległości do sklepu zakupy robi się rzadziej i większe, a spiżarnia jest realnym elementem gospodarstwa, nie ozdobą. Chleb, ciasto na pierogi, pasty kanapkowe, sosy, przetwory z tego, co obrodziło — to wszystko da się robić partiami, w jednym naczyniu, bez rozstawiania pół kuchni.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — a w gminie, gdzie szkolny autobus wyznacza cały dzień i gdzie klasa liczy średnio czternaścioro uczniów, popołudnie realnie na to pozwala.",
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

  districtsHeading: "Gdzie w gminie Kamienica dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich czterech sołectw i bez żadnej dopłaty za odległość: do Kamienicy, Zalesia, Zbludzy i Zasadnego. Sama Kamienica skupia ponad połowę mieszkańców gminy; Zasadne jest najmniejsze i leży najdalej — i tam też jadę na tych samych warunkach.",
    "Piszę „cztery”, bo od pierwszego stycznia 2025 roku Szczawa jest osobną gminą. To zmiana, o której wciąż nie wszystkie serwisy wiedzą, a której nie wypada nie znać: dziś w gminie Kamienica mieszka blisko sześć tysięcy osób, nie prawie osiem. Do Szczawy oczywiście też dojeżdżam — tylko już jako do sąsiedniej gminy.",
    "Wszystko rozłożyło się wzdłuż doliny rzeki Kamienicy, między Gorcami a Beskidem Wyspowym. To najbardziej zalesiona gmina w całej mojej okolicy — lasy zajmują ponad sześćdziesiąt procent powierzchni — a dolina rozdziela dwa główne grzbiety Gorczańskiego Parku Narodowego. Praktyczna konsekwencja jest taka, że jedzie się tu jedną drogą, wzdłuż wody, i nie ma skrótów.",
    "Autobusy z Kamienicy jeżdżą w dwie strony: przez Łącko do Starego i Nowego Sącza oraz przez Szczawę do Limanowej; z Zasadnego kursują osobne linie. Jeśli wracasz konkretnym kursem, powiedz którym — to najprostszy sposób, żebym przyjechała po Tobie, a nie przed Tobą.",
  ],
  districts: ["Kamienica", "Zalesie", "Zbludza", "Zasadne"],

  nearbyHeading: "Mszana Dolna, Limanowa i Nowy Sącz też są na mojej trasie",
  nearbyParagraphs: [
    "Kamienica leży na uboczu, ale nie poza moim obszarem. Do Mszany Dolnej mam stąd niecałe pół godziny doliną, do Limanowej i Łukowicy trochę dłużej, do Nowego Sącza przez Łącko. Do Szczawy — od 2025 roku osobnej gminy — również dojeżdżam. Do żadnej z tych miejscowości nie doliczam kosztu dojazdu.",
    "Warto wiedzieć, że wieża widokowa na Mogielicy, najwyższym szczycie Beskidu Wyspowego, powstała w 2008 roku ze wspólnej inicjatywy trzech gmin: Kamienicy, Dobrej i Słopnic. Sam szczyt leży już poza granicami gminy, ale ta wieża jest po części tutejsza.",
  ],
  nearbyTowns: [
    "Mszana Dolna",
    "Limanowa",
    "Słopnice",
    "Łukowica",
    "Dobra",
    "Nowy Sącz",
    "Tymbark",
    "Kraków",
  ],

  about: blokOMnie("do Kamienicy", "w powiecie limanowskim"),

  faq: [
    {
      question: "Mieszkamy daleko, na końcu Zasadnego. Naprawdę przyjedziesz?",
      answer:
        "Tak i bez żadnej dopłaty za odległość. Kamienica jest najdalej położoną gminą w moim obszarze, więc dojazdy planuję tu z wyprzedzeniem i najczęściej układam z kilku spotkań jednego dnia. Powiedz przy umawianiu, jak trafić pod dom i czy da się podjechać — resztę biorę na siebie.",
    },
    ...faqWspolne("w gminie Kamienica"),
    {
      question: "Ile sołectw ma dziś gmina Kamienica?",
      answer:
        "Cztery: Kamienicę, Zalesie, Zbludzę i Zasadne. Szczawa od 1 stycznia 2025 roku jest osobną gminą, więc dziś w gminie Kamienica mieszka blisko sześć tysięcy osób. Do Szczawy też dojeżdżam — tylko już jako do sąsiedniej gminy, na tych samych warunkach.",
    },
    {
      question: "Mąż pracuje w tygodniu poza domem. Czy to coś zmienia?",
      answer:
        "Zmienia tyle, że kuchnia ma tu dwa tryby: skromniejszy w tygodniu i pełny w weekend. Oba wychodzą tym samym urządzeniem — w tygodniu zupa gotuje się sama i czeka, aż dzieci wrócą, a w weekend ten sam garnek robi się po prostu większy. Na prezentacji pokazuję jedno i drugie.",
    },
    {
      question: "Czy mogę zaprosić sąsiadki albo panie z koła gospodyń?",
      answer:
        "Jak najbardziej i w tej gminie to najwygodniejsza forma — koła działają w każdym sołectwie. Powiedz przy umawianiu, ile osób będzie i gdzie się spotykacie, żebym dobrała przepisy, wzięła więcej składników i wiedziała, na jakim blacie pracujemy.",
    },
  ],

  geo: { lat: 49.5744, lng: 20.345 },
};
