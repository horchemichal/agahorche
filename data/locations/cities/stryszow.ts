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
 * STRYSZÓW — gmina wiejska, 6 776 mieszkańców (GUS, 31.12.2024),
 * 45,9 km², powiat wadowicki. Sześć miejscowości.
 *
 * OŚ STRONY: DWÓR W STRYSZOWIE JEST ODDZIAŁEM ZAMKU KRÓLEWSKIEGO
 * NA WAWELU. Potwierdzone na stronie Wawelu. Ekspozycja stała
 * „Wnętrza dworu polskiego w XIX wieku”, wszystkie eksponaty
 * ze zbiorów wawelskich. Oddziałem od ponad czterdziestu lat.
 * To jest fakt, którego nie ma żadna inna gmina wiejska
 * w Małopolsce: wieś licząca dwa tysiące mieszkańców ma u siebie
 * filię Wawelu.
 *
 * Druga oś: gmina leży nad Jeziorem Mucharskim (jego zachodnia
 * granica), przystań w Dąbrówce.
 * Trzecia: KOLEJ DZIAŁA — stacja Stryszów, linia 97, bezpośrednie
 * pociągi do Krakowa 1 h 13 – 1 h 20.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DWÓR: oddział Zamku Królewskiego na Wawelu (potwierdzone
 *   na wawel.krakow.pl). Ekspozycja stała „Wnętrza dworu polskiego
 *   w XIX wieku” — salon, gabinet, jadalnia, sypialnia; wszystkie
 *   eksponaty ze zbiorów Wawelu. Oddziałem od ponad 40 lat.
 *   Adres: Stryszów 508. Poniedziałki nieczynne, WTORKI WSTĘP
 *   WOLNY. Sam dwór z XVII w., wpis do rejestru 31.12.1959 —
 *   jeden z najstarszych wpisów w regionie; spichlerz z XIX w.
 *   (wpis 3.02.1971),
 *   ⚠️ GODZIN I CEN NIE PODAJĘ w tekście — pochodzą z portalu IT
 *   powiatu, nie z Wawelu, i mogą się zmienić. Piszę tylko
 *   o poniedziałkach i wtorkach, bo to informacja stabilna,
 * — POZOSTAŁE DWORY: zespół dworski w Zakrzowie (2. ćw. XIX w.,
 *   wpis 1980 — dwór, brama, mur, park); dwór w Dąbrówce (koniec
 *   XVIII w., wpis 9.03.1981). W Zakrzowie dwa stanowiska
 *   archeologiczne wpisane w 1986: zamek średniowieczny
 *   i GRODZISKO STOŻKOWATE. Kościół w Stryszowie z 1748 r.
 *   (wpis 3.02.1971), kapliczka z 1819 r. (wpis 19.01.2011),
 * — JEZIORO MUCHARSKIE stanowi ZACHODNIĄ GRANICĘ gminy.
 *   Zbiornik obejmuje gminy Mucharz, Stryszów i Zembrzyce.
 *   Miejscowość gminy nad zbiornikiem: DĄBRÓWKA — lokalizacja
 *   przystani. Powierzchnia 1 035 ha, pojemność 161 mln m³,
 *   długość ok. 11 km, zapora 604 m × 54 m,
 *   ⚠️ ROKU NAPEŁNIENIA NIE PODAJĘ — nie potwierdzony,
 * — KOLEJ: linia 97 Skawina–Żywiec, w gminie TRZY stacje
 *   pasażerskie. Stacja Stryszów (km 33,115), przystanek Stronie
 *   (km 28,994), trzeci prawdopodobnie w Zakrzowie.
 *   Stryszów → Kraków Główny: bezpośrednie pociągi regionalne,
 *   pierwszy 5:27, ostatni 20:28, czas 1 h 13 – 1 h 20.
 *   Stacja przystosowana dla osób o ograniczonej mobilności,
 *   ⚠️ ROZKŁADU DLA STRONIA Z OSOBNA NIE POTWIERDZONO. Piszę
 *   o stacji Stryszów i o tym, że stacji pasażerskich jest kilka,
 * — nowa linia autobusowa Kalwaria Zebrzydowska – Lanckorona –
 *   Stryszów – Wadowice, rozkład na 2026, dofinansowana z Funduszu
 *   Rozwoju Przewozów Autobusowych,
 * — MIEJSCOWOŚCI (6): Stryszów 2 000, Łękawica 1 410, Stronie
 *   1 265, Zakrzów 1 224, Dąbrówka 650, Leśnica 309.
 *   Gmina WIELOBIEGUNOWA — siedziba to tylko ok. 29,5% ludności,
 * — DEMOGRAFIA: ludność +1,6% (2002–2024) — stagnacja. Mediana
 *   wieku 40,4. Mieszkania 100,4 m², 4,61 izby. 1 029 osób
 *   wyjeżdża do pracy poza gminę, 89 przyjeżdża,
 * — odległości: Kalwaria Zebrzydowska 6 km, Wadowice 11,4 km,
 *   Kraków ok. 35 km.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — GODZINY I CENY BILETÓW do dworu. Zmienne, ze źródła
 *   pośredniego. Odsyłam do sprawdzenia, nie podaję,
 * — POTRAWA LOKALNA. Sprawdzone: BRAK. Sekcja `culinary` mówi
 *   o tym wprost,
 * — DUŻA IMPREZA CYKLICZNA. GOK prowadzi głównie konkursy
 *   dziecięco-młodzieżowe, bez numeracji. Stryszów NIE MA
 *   odpowiednika lanckorońskiego festiwalu i nie udaję, że ma,
 * — KGW. Nie znaleziono wykazu ani nagród. Nie wymyślam,
 * — „PONAD 70 OBIEKTÓW ZABYTKOWYCH”. To niemal na pewno gminna
 *   EWIDENCJA, nie rejestr. Nie mieszam tych pojęć — piszę
 *   o konkretnych wpisach do rejestru, które znam,
 * — SYPIALNIANOŚĆ jako zarzut. 1 029 wyjeżdża, 89 przyjeżdża —
 *   to fakt, ale nie robię z niego diagnozy o gminie. Używam go
 *   tylko do opisania rytmu dnia,
 * — DUŻY PRACODAWCA. Brak. Nie wymyślam.
 *
 * PUŁAPKI:
 * — DWÓR W STRYSZOWIE TO ODDZIAŁ WAWELU — potwierdzone, można
 *   pisać wprost. To najmocniejszy fakt tej strony,
 * — ODCINEK SKAWINA–SUCHA (nasz) MA NORMALNY RUCH. Odcinek
 *   Sucha–Żywiec praktycznie nie. NIE MYLIĆ ich — doniesienia
 *   o „szczątkowym ruchu na linii 97” dotyczą tamtego odcinka,
 * — powierzchnia jeziora: 1 035 ha to maksymalne piętrzenie,
 *   767 ha podają portale wędkarskie (stan normalny). Podaję
 *   1 035 albo żadnej,
 * — ludność: GUS 6 776, Stowarzyszenie Gmin Babiogórskich 6 735.
 *   W TEKŚCIE NIE PADA ŻADNA LICZBA,
 * — Stryszów to tylko 29,5% ludności gminy. Nie traktować jako
 *   oczywistego środka ciężkości.
 */

export const STRYSZOW: CityContent = {
  slug: "stryszow",
  h1: "Thermomix Stryszów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Stryszów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Stryszów: bezpłatna prezentacja TM7 u Ciebie w kuchni — Stryszów, Łękawica, Stronie, Zakrzów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stryszów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Stryszów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Stryszów przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich miejscowości gminy, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Stryszów, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Stryszów – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Stryszowie, jak w Łękawicy, Stroniu czy Zakrzowie.",
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
      heading: "Wieś, która ma u siebie oddział Wawelu",
      paragraphs: [
        "To brzmi jak przesada, a nie jest. Dwór w Stryszowie jest oddziałem Zamku Królewskiego na Wawelu i działa jako taki od ponad czterdziestu lat. Mieści ekspozycję stałą „Wnętrza dworu polskiego w dziewiętnastym wieku” — salon, gabinet, jadalnia, sypialnia — a wszystkie prezentowane tam przedmioty pochodzą ze zbiorów wawelskich.",
        "Sam dwór jest siedemnastowieczny i został wpisany do rejestru zabytków w tysiąc dziewięćset pięćdziesiątym dziewiątym roku — to jeden z najstarszych wpisów w całym regionie. Obok stoi dziewiętnastowieczny spichlerz, też objęty ochroną. Wtorki są dniem bezpłatnym, poniedziałki są nieczynne; godziny i ceny warto sprawdzić przed wyjazdem, bo bywają zmieniane.",
        "I to nie jest w tej gminie jedyny dwór. W Zakrzowie stoi zespół dworski z dziewiętnastego wieku, z bramą, murem i parkiem, w Dąbrówce dwór z końca osiemnastego. W samym Zakrzowie są jeszcze dwa stanowiska archeologiczne wpisane do rejestru: średniowieczny zamek i grodzisko stożkowate. Trzy dwory i grodzisko na czterdziestu sześciu kilometrach kwadratowych — to nie zdarza się często.",
        "Druga rzecz jest zupełnie nowa. Zachodnią granicę gminy stanowi dziś Jezioro Mucharskie — ponad tysiąc hektarów wody, jedenaście kilometrów długości. Przystań po stryszowskiej stronie jest w Dąbrówce. To zmiana, która nastąpiła w tym pokoleniu i której nie ma jeszcze na starszych mapach.",
        "Praktycznie ważniejsze bywa jednak co innego: ze stacji w Stryszowie jeżdżą bezpośrednie pociągi do Krakowa Głównego, pierwszy przed wpół do szóstej rano, ostatni po dwudziestej. Przejazd trwa około godziny i kwadransa. W gminie jest kilka stacji pasażerskich na tej samej linii, a od tego roku kursuje też nowa linia autobusowa łącząca Stryszów z Wadowicami przez Lanckoronę i Kalwarię.",
        "To wszystko układa się w jeden obraz: ponad tysiąc osób wyjeżdża stąd codziennie do pracy poza gminę. Wieczór po takim dniu wygląda zwykle podobnie — trzeba coś zjeść, a nie ma już siły stać przy garnku. I to jest cała rzecz, którą pokazuję na prezentacji: nie to, że urządzenie ugotuje coś wymyślnego, tylko że obiad może się gotować sam, kiedy Ty jeszcze jesteś w drodze.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Stryszów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której miejscowości mieszkasz. Ta gmina nie ma jednego wyraźnego środka — w samym Stryszowie mieszka niecała jedna trzecia mieszkańców, a Łękawica, Stronie i Zakrzów są niewiele mniejsze i leżą w różnych stronach.",
        "Jeśli wracasz pociągiem albo dojeżdżasz do Krakowa, po prostu powiedz, o której realnie jesteś w domu. Wieczorne spotkania są tu codziennością, weekendy też.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Stryszów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Sześć wsi, jedna gmina, żadnego wspólnego środka",
      paragraphs: [
        "Ta gmina jest zbudowana inaczej niż większość: nie ma jednego ośrodka, wokół którego kręci się reszta. Stryszów, Łękawica, Stronie i Zakrzów są porównywalnej wielkości i leżą osobno. W praktyce znaczy to, że po zakupy, do szkoły i do lekarza jeździ się w różne strony, często poza gminę, i że dzień składa się z większej liczby przejazdów niż gdzie indziej.",
        "Przy takim rozproszeniu najczęściej gubi się jedna rzecz: wspólny posiłek o stałej porze. Ktoś wraca ze szkoły w Wadowicach, ktoś z pracy w Kalwarii, ktoś dopiero po ósmej. Nie chodzi więc o to, żeby ugotować szybko — chodzi o to, żeby ugotować raz i żeby to przetrwało cały ten rozjazd.",
        "Praktyczne bywa tu przede wszystkim to, że można zrobić większą partię czegoś, co dobrze znosi odgrzewanie, i mieć spokój na kilka dni. Zupa, gulasz, sos, kasza — wszystko w jednym naczyniu, bez stania nad garnkiem i bez pilnowania, żeby nie przywarło. Urządzenie samo się wyłącza, więc można w tym czasie po prostu kogoś odebrać.",
        "Domy są tu duże — przeciętne mieszkanie ma ponad sto metrów przy blisko pięciu izbach. W weekend przy stole zwykle siada więcej osób niż w tygodniu, czasem znacznie więcej. Umiejętność szybkiego przejścia ze skali „dla trojga” na „dla dziesięciorga”, bez rozstawiania połowy kuchni, przydaje się tu bardziej niż jakikolwiek pojedynczy przepis.",
        "Dzieciom w wieku szkolnym pomaga jeszcze co innego: przepis prowadzi krok po kroku, więc starsze dziecko jest w stanie samo zrobić sobie obiad, kiedy rodziców nie ma jeszcze w domu. W gminie, z której ponad tysiąc osób codziennie wyjeżdża do pracy, to bywa najbardziej odczuwalna zmiana ze wszystkich.",
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
    heading: "Stryszów i gotowanie — bez wymyślonej potrawy lokalnej",
    paragraphs: [
      "Zacznę od tego, czego tu nie ma, bo to uczciwsze. Gmina Stryszów nie ma wpisu na ministerialnej Liście Produktów Tradycyjnych i nie znalazłam udokumentowanej potrawy, którą można by nazwać wyłącznie tutejszą. Mogłabym wpisać w to miejsce jakieś ogólne danie beskidzkie i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "Powiem też drugą rzecz, którą łatwo byłoby przemilczeć: Stryszów nie ma swojego dużego, dorocznego święta. Sąsiednia Lanckorona ma festiwal z ponad dwudziestoletnią historią, a tutejszy ośrodek kultury prowadzi głównie konkursy dla dzieci i młodzieży. To nie jest wada — po prostu ta gmina żyje inaczej i nie zamierzam dorabiać jej imprezy, której nie ma.",
      "Za to jest tu coś, czego nie ma nigdzie indziej i co z jedzeniem wiąże się bardziej, niż się wydaje. W tutejszym dworze — oddziale wawelskim — ekspozycja pokazuje wnętrza dziewiętnastowiecznego dworu polskiego, łącznie z jadalnią. Jeśli ktoś chce zobaczyć, jak wyglądał stół, przy którym jadano w takim domu dwieście lat temu, ma to na miejscu, a we wtorki za darmo.",
      "W praktyce kuchnia w tej gminie jest kuchnią domu, z którego się dojeżdża — gotuje się w niej wieczorami i w weekendy, na kilka dni do przodu. Najbardziej liczy się więc nie tempo, tylko to, żeby dało się coś zrobić bez pilnowania: zupa, która gotuje się, kiedy rozpakowujesz zakupy, sos, który się nie przypali, ciasto wyrobione o wpół do dziewiątej wieczorem.",
      "I jeszcze jedno, sezonowe. Odkąd zachodnią granicą gminy jest jezioro, w Dąbrówce i okolicy latem pojawiają się ludzie. Dla domu blisko wody znaczy to gości, którzy wpadają bez zapowiedzi — a wtedy najbardziej przydaje się możliwość zrobienia czegoś porządnego bez trzydniowego planowania.",
    ],
  },

  districtsHeading: "Gdzie w gminie Stryszów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu miejscowości, bez żadnej dopłaty za odległość: Stryszów, Łękawica, Stronie, Zakrzów, Dąbrówka i Leśnica.",
    "Ta gmina nie ma jednego wyraźnego środka i warto o tym wiedzieć. W samym Stryszowie mieszka niecała jedna trzecia mieszkańców gminy, a Łękawica, Stronie i Zakrzów są niewiele mniejsze. Leśnica jest najmniejsza — mieszka tam nieco ponad trzysta osób.",
    "Dwie miejscowości warto znać z innego powodu. W Stryszowie stoi siedemnastowieczny dwór, będący oddziałem Zamku Królewskiego na Wawelu, z ekspozycją wnętrz dziewiętnastowiecznego dworu polskiego. W Zakrzowie jest dziewiętnastowieczny zespół dworski z parkiem, a obok stanowiska archeologiczne: średniowieczny zamek i grodzisko stożkowate.",
    "Dojazd: do Kalwarii Zebrzydowskiej sześć kilometrów, do Wadowic jedenaście, do Krakowa około trzydziestu pięciu. Przez gminę biegnie linia kolejowa ze Skawiny w stronę Suchej Beskidzkiej — ze stacji Stryszów jeżdżą bezpośrednie pociągi do Krakowa Głównego, około godziny i kwadransa jazdy, pierwszy przed wpół do szóstej rano. Od tego roku kursuje też autobus do Wadowic przez Lanckoronę i Kalwarię.",
  ],
  districts: [
    "Stryszów",
    "Łękawica",
    "Stronie",
    "Zakrzów",
    "Dąbrówka",
    "Leśnica",
  ],

  nearbyHeading: "Mucharz, Kalwaria i Lanckorona też są na mojej trasie",
  nearbyParagraphs: [
    "Mucharz mam tuż obok — to druga gmina leżąca nad tym samym jeziorem. Do Kalwarii Zebrzydowskiej jest stąd sześć kilometrów, do Lanckorony i Wadowic też blisko. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Od tego roku kursuje zresztą autobus łączący Stryszów, Lanckoronę, Kalwarię i Wadowice — czyli dokładnie tę trasę, którą i tak jeżdżę. Jeśli mieszkasz na granicy gminy i nie masz pewności, po której stronie, po prostu zapytaj.",
  ],
  nearbyTowns: [
    "Mucharz",
    "Kalwaria Zebrzydowska",
    "Lanckorona",
    "Wadowice",
    "Kraków",
  ],

  about: blokOMnie("do Stryszowa", "w powiecie wadowickim"),

  faq: [
    {
      question: "Wracam pociągiem po pracy. O której możesz przyjechać?",
      answer:
        "Dopasuję się do Twojego rozkładu — powiedz, o której realnie jesteś w domu, a resztę ułożę wokół tego. Ze stacji w Stryszowie jeżdżą bezpośrednie pociągi do Krakowa i sporo osób umawia się właśnie po powrocie. Prezentacja trwa około dwóch godzin, więc spokojnie mieści się w wieczorze.",
    },
    ...faqWspolne("w gminie Stryszów"),
    {
      question: "Mieszkam w Leśnicy, najmniejszej wsi w gminie. Przyjedziesz?",
      answer:
        "Przyjadę i bez dopłaty za odległość — do wszystkich sześciu miejscowości tak samo. Ta gmina nie ma jednego środka i traktuję ją w całości. Powiedz przy umawianiu, którą drogą najwygodniej do Was dojechać, bo teren jest pagórkowaty i kilometry bywają mylące.",
    },
    {
      question: "Przyjeżdżają do nas goście nad jezioro. Da się ugotować dla większej liczby osób?",
      answer:
        "Da się i to jest mocna strona tego sprzętu — ciasto, sos czy zupę robi się partiami w jednym naczyniu, bez rozstawiania połowy kuchni. Powiedz przy umawianiu, dla ilu osób zwykle gotujesz w szczycie sezonu, a dobiorę przepisy pod te ilości, a nie pod cztery porcje z folderu.",
    },
  ],

  geo: { lat: 49.825, lng: 19.625 },
};
