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
 * CIĘŻKOWICE — GMINA MIEJSKO-WIEJSKA w powiecie tarnowskim.
 * Gmina: 10 987 mieszkańców (GUS, 31.12.2024), 103,4 km², 107 os./km²,
 * −0,3% od 2002, średni wiek 39,8, REGON 1 017 (852 osoby fizyczne).
 * Miasto: 2 475 mieszkańców, +4,5% od 2002, średni wiek 40,7.
 * 12 WSI + miasto.
 *
 * OŚ STRONY: JEDYNY NA ŚWIECIE ZACHOWANY DOM PADEREWSKIEGO — Kąśna Dolna.
 * Ignacy Jan Paderewski kupił majątek w 1897 r. i mieszkał w nim do 1903 r.
 * Jego szwajcarską rezydencję Riond Bosson WYBURZONO W 1965 R. przy budowie
 * drogi nad Jeziorem Genewskim, więc Kąśna Dolna została jedynym
 * autentycznym, zachowanym domem pianisty i premiera.
 * ⚠️⚠️ OŚ ŚWIADOMIE OMIJA PRAWA MIEJSKIE. Ciężkowice mają wzorzec
 * IDENTYCZNY z Czchowem (1928→2000) i Skałą: lokacja 1348 → utrata 1934 →
 * odzyskanie 1998. Daty wolno podać w treści historycznej, ale NIE budować
 * na nich narracji strony.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — PADEREWSKI (centrumpaderewskiego.pl): kupił Kąśną Dolną w 1897 r.,
 *   mieszkał do 1903 r.; sprzedał z powodu sporów o zarząd i strat.
 *   Riond Bosson w Szwajcarii (kupiona 1899) WYBURZONA W 1965 R.
 *   Centrum Paderewskiego określa Kąśną jako „jedyne autentyczne,
 *   zachowane w niezmienionej formie” miejsce spośród jego rezydencji
 *   NA ŚWIECIE. ⚠️ To twierdzenie instytucji zarządzającej obiektem —
 *   w treści podane Z ATRYBUCJĄ. Po 1945 majątek rozparcelowano, dwór
 *   popadł w ruinę; od 1976 r. Towarzystwo Muzyczne w Tarnowie prowadzi
 *   prace ratunkowe; PIERWSZY KONCERT 1983, pierwszy recital 1984.
 *   Festiwal Bravo Maestro OD 1996; Tydzień Talentów; Viva Polonia,
 * — HISTORIA: 1123–1125 pierwsza wzmianka jako „Cecouici”; koniec XI w.
 *   Judyta, żona Władysława Hermana, nadaje osadę benedyktynom z Tyńca;
 *   29 LUTEGO 1348 przywilej lokacyjny Kazimierza Wielkiego, do miasta
 *   włączono Bogoniowice i Ostruszę; 1830 wielki pożar; 1836 murowany
 *   ratusz; 1876/1877 linia kolejowa Tarnów–Nowy Sącz i poczta
 *   (⚠️ rozbieżność źródeł); 1934 utrata praw miejskich; 1998 odzyskanie
 *   w 650. rocznicę lokacji. Rynek czworoboczny na wzgórzu, otoczony
 *   PODCIENIOWYMI DOMAMI z przełomu XVIII/XIX w.,
 * — SKAMIENIAŁE MIASTO: rezerwat utworzony 12 LIPCA 1974, powierzchnia
 *   14,91 ha; OD 1931 R. skały objęte ochroną jako pomnik przyrody;
 *   materiał: piaskowiec ciężkowicki. Nazwy skał m.in. Ratusz,
 *   Czarownica, Piramidy, Grzybek, BASZTA PADEREWSKIEGO, Borsuk,
 *   Warownia, Grunwald, Pustelnia, Jajo Żółwia, Pianino, Orzeł.
 *   Trasa ok. 1,5 km, przewyższenie ok. 115 m. Wodospad Ciężkowicki
 *   jako osobny pomnik przyrody ok. 200 m na płn.-wsch.,
 * — CIĘŻKOWICKO-ROŻNOWSKI PARK KRAJOBRAZOWY: utworzony 1995,
 *   17 634 ha; rezerwaty Skamieniałe Miasto, Diable Skały, Diabla Dziura
 *   (jaskinia szczelinowa dł. 320 m); ok. 900 gatunków roślin
 *   naczyniowych, 310 GATUNKÓW MOTYLI w rezerwacie Skamieniałe Miasto;
 *   13 ŹRÓDEŁ MINERALNYCH — wody siarczkowe i chlorkowe,
 * — ATRAKCJE: Park Zdrojowy w Ciężkowicach, Ścieżka w Koronach Drzew,
 *   Małopolskie Centrum Edukacji Ekologicznej, Muzeum Przyrodnicze
 *   im. Krystyny i Włodzimierza Tomków,
 * — KOLEJ: stacja nosi nazwę „BOGONIOWICE CIĘŻKOWICE”, km 36,257
 *   linii nr 96 Tarnów–Leluchów, i leży w Bogoniowicach,
 * — WSPÓŁRZĘDNE (UG, ul. Tysiąclecia 19): 49,7835203 / 20,9739470.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — PRAW MIEJSKICH JAKO OSI. Identyczny wzorzec ma CZCHÓW (1928→2000)
 *   i SKAŁA (1870→1987). Daty użyte wyłącznie w akapicie historycznym,
 * — „UZDROWISKA CIĘŻKOWICE”. Park Zdrojowy i baseny mineralne istnieją,
 *   ale statusu uzdrowiska statutowego NIE POTWIERDZONO. Nie pisać,
 * — NAZWANYCH PRACODAWCÓW. Wyszukiwanie zwróciło wyłącznie portale
 *   ogłoszeń. Nie zidentyfikowano żadnego znaczącego zakładu,
 * — FREKWENCJI TURYSTYCZNEJ Skamieniałego Miasta. Brak liczb,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono żadnego,
 * — DATY ZAŁOŻENIA Centrum Paderewskiego jako instytucji. W 2025 r.
 *   media pisały o 35-leciu, co sugeruje ok. 1990 r., ale niepotwierdzone,
 * — SOŁECTW ZE STATUTU. Lista 12 wsi pochodzi z GUS; BIP blokuje roboty,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA, identyczna
 *   dla wszystkich gmin powiatu tarnowskiego.
 *
 * PUŁAPKI:
 * — STACJA NAZYWA SIĘ „BOGONIOWICE CIĘŻKOWICE” i leży w BOGONIOWICACH,
 *   nie w mieście. Nie pisać „stacja Ciężkowice”,
 * — polskawliczbach podaje „prawa miejskie 1998” — to data ODZYSKANIA,
 *   nadanie to 1348,
 * — CIĘŻKOWICE W MAŁOPOLSCE mylą się z Ciężkowicami koło Jaworzna
 *   i Trzebini. Przy wyszukiwaniach wyniki się mieszają,
 * — NAZWY SKAŁ w Skamieniałym Mieście pochodzą z podania o zapadłym
 *   mieście, nie z geologii,
 * — DATA KOLEI: dnidziedzictwa podaje 1876, Encyklopedia Ciężkowic 1877.
 */

export const CIEZKOWICE: CityContent = {
  slug: "ciezkowice",
  h1: "Thermomix Ciężkowice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Ciężkowice — prezentacja i cena",
  seoDescription:
    "Thermomix w Ciężkowicach i całej gminie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich wsi bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Ciężkowice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Ciężkowicach i okolicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Ciężkowic, Kąśnej Dolnej, Zborowic, Jastrzębi i pozostałych wsi gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie dwanaście wsi, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ciężkowicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
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
      heading: "Dom Paderewskiego stoi w tej gminie",
      paragraphs: [
        "W Kąśnej Dolnej stoi dwór, który Ignacy Jan Paderewski kupił w tysiąc osiemset dziewięćdziesiątym siódmym roku i w którym mieszkał przez sześć lat, do tysiąc dziewięćset trzeciego. Sprzedał go potem, zniechęcony sporami o zarząd majątkiem i stratami, jakie przynosił.",
        "I to jest jedyny zachowany dom Paderewskiego na świecie. Jego szwajcarską rezydencję Riond Bosson nad Jeziorem Genewskim, kupioną dwa lata po Kąśnej, wyburzono w tysiąc dziewięćset sześćdziesiątym piątym przy budowie drogi. Centrum Paderewskiego, które opiekuje się dworem, określa go jako jedyne autentyczne, zachowane w niezmienionej formie miejsce spośród wszystkich rezydencji pianisty i premiera.",
        "Przetrwał zresztą o włos. Po wojnie majątek rozparcelowano, a dwór popadł w ruinę. Dopiero od tysiąc dziewięćset siedemdziesiątego szóstego roku Towarzystwo Muzyczne w Tarnowie zaczęło go ratować. Pierwszy koncert zabrzmiał tu w tysiąc dziewięćset osiemdziesiątym trzecim, rok później pierwszy recital.",
        "Dziś dwór znów gra przez cały rok. Od tysiąc dziewięćset dziewięćdziesiątego szóstego odbywa się tu festiwal Bravo Maestro poświęcony muzyce kameralnej, do tego Tydzień Talentów i Viva Polonia.",
        "Jest jeszcze jeden detal, który spina obie największe atrakcje gminy. Dwie doliny dalej leży rezerwat Skamieniałe Miasto — kilkanaście hektarów piaskowcowych ostańców z nazwami wziętymi ze starego podania o zapadłym mieście: Ratusz, Czarownica, Piramidy, Grzybek, Warownia. Jedna z tych skał nazywa się Baszta Paderewskiego.",
        "Same skały chroniono jako pomnik przyrody już od tysiąc dziewięćset trzydziestego pierwszego roku, a rezerwat utworzono dwunastego lipca tysiąc dziewięćset siedemdziesiątego czwartego. Leżą w Ciężkowicko-Rożnowskim Parku Krajobrazowym, gdzie rośnie około dziewięciuset gatunków roślin naczyniowych, żyje trzysta dziesięć gatunków motyli i bije trzynaście źródeł mineralnych — wód siarczkowych i chlorkowych.",
        "Miasto samo w sobie też jest stare. Pierwsza wzmianka pochodzi z lat dwudziestych dwunastego wieku, a przywilej lokacyjny wydał Kazimierz Wielki dwudziestego dziewiątego lutego tysiąc trzysta czterdziestego ósmego roku. Rynek na wzgórzu zachował układ czworoboczny i otaczają go podcieniowe domy z przełomu osiemnastego i dziewiętnastego wieku — rzadki widok w tej części Małopolski.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Ciężkowice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość. Gmina ma dwanaście wsi rozłożonych na stu trzech kilometrach kwadratowych pogórza — z Bruśnika do Zborowic jedzie się zauważalnie dłużej, niż wynikałoby z odległości na mapie.",
        "Jeśli mieszkasz w Bogoniowicach i orientujesz się stacją kolejową, warto wiedzieć, że nazywa się ona Bogoniowice Ciężkowice, ale leży właśnie u Was, a nie w mieście. To jedna z rzeczy, które mylą przyjezdnych i nawigację.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ciężkowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Wieczory, które trwają dłużej",
      paragraphs: [
        "W gminie, w której od czterdziestu lat gra się muzykę kameralną w dworze, wieczór po koncercie ma swoją tradycję: siada się i rozmawia. A do tego potrzebne są dwie rzeczy — kawa i coś słodkiego.",
        "To akurat obszar, w którym urządzenie zmienia najwięcej, i to nie dlatego, że piecze lepiej, tylko dlatego, że skraca dokładnie te czynności, przez które ciasto odkłada się na kiedy indziej.",
        "Ucieranie masy na sernik czy babkę to kilka minut zamiast kwadransa z mikserem w ręku. Ubijanie piany, ucieranie żółtek z cukrem, rozdrabnianie orzechów i migdałów, kruszonka — wszystko w jednym naczyniu, bez zmieniania końcówek i bez trzech misek do zmywania.",
        "Druga rzecz to kremy i masy, w których najłatwiej o pomyłkę. Krem budyniowy, karmel, ganasz czy masa do bezów wymagają utrzymania temperatury i ciągłego mieszania, żeby się nie zwarzyły. Tu ustawia się temperaturę i zostawia — a to jest różnica między pewnym wynikiem a nerwowym staniem nad garnkiem.",
        "Trzecia jest bardzo prozaiczna: lody i sorbety z mrożonych owoców, robione w kilkadziesiąt sekund, bez maszyny i bez cukru dosypywanego na oślep. Latem, kiedy w gminie jest pełno turystów, to rzecz, po którą sięga się najczęściej.",
        "Rodzicom najmłodszych dzieci przydaje się przy tym to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Ciężkowice i gotowanie — kawa po koncercie, woda ze źródeł, kuchnia pogórzańska",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z gminy Ciężkowice na ministerialnej Liście Produktów Tradycyjnych. Nie będę więc wymieniać rzeczy, których nie sprawdziłam — sąsiednie gminy mają takie wpisy i łatwo byłoby je tu przepisać.",
      "To, co o tutejszym jedzeniu da się powiedzieć na pewno, wynika z dwóch rzeczy. Pierwsza to woda: w Ciężkowicko-Rożnowskim Parku Krajobrazowym bije trzynaście źródeł mineralnych, siarczkowych i chlorkowych, a w samych Ciężkowicach działa Park Zdrojowy z basenami mineralnymi. To nie jest uzdrowisko statutowe i nie będę go tak nazywać, ale wody tu naprawdę są.",
      "Druga to ruch turystyczny. Skamieniałe Miasto, Ścieżka w Koronach Drzew, Muzeum Przyrodnicze i koncerty w Kąśnej Dolnej ściągają ludzi przez cały sezon — a to znaczy, że w wielu domach gotuje się dla gości częściej niż tylko od święta.",
      "Poza tym kuchnia jest tu pogórzańska i solidna: ziemniaki, kapusta, fasola, gęste zupy, kluski, ciasto drożdżowe, przetwory z jesieni. Rzeczy, które się przechowuje i które grzeją.",
      "Dla urządzenia najsensowniejsze są tu wypieki i desery — ucieranie mas, kremy, które nie mogą się zwarzyć, lody z mrożonych owoców — oraz dania jednogarnkowe robione w większej ilości. Czego nie zrobi, mówię wprost: nie upiecze ciasta, bo do tego potrzebny jest piekarnik, i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i siłą w rękach.",
    ],
  },

  districtsHeading: "Do których miejscowości gminy Ciężkowice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina liczy blisko jedenaście tysięcy mieszkańców na stu trzech kilometrach kwadratowych, z czego w mieście mieszka niecałe dwa i pół tysiąca.",
    "Wsie to: Bogoniowice, Bruśnik, Falkowa, Jastrzębia, Kipszna, Kąśna Dolna, Kąśna Górna, Ostrusza, Pławna, Siekierczyna, Tursko i Zborowice. Bogoniowice i Ostruszę włączono do miasta już przy lokacji w tysiąc trzysta czterdziestym ósmym roku.",
    "W Kąśnej Dolnej stoi dwór Ignacego Jana Paderewskiego — jedyny zachowany dom pianisty i premiera. Odbywają się w nim koncerty, w tym festiwal Bravo Maestro organizowany od tysiąc dziewięćset dziewięćdziesiątego szóstego roku.",
    "Rezerwat Skamieniałe Miasto zajmuje niecałe piętnaście hektarów, a trasa przez niego liczy około półtora kilometra przy stu piętnastu metrach przewyższenia. Nieopodal jest Wodospad Ciężkowicki, chroniony jako osobny pomnik przyrody.",
    "Dojazd: przez gminę przechodzi linia kolejowa numer dziewięćdziesiąt sześć z Tarnowa do Leluchowa. Uwaga na nazwę stacji — brzmi ona Bogoniowice Ciężkowice i leży w Bogoniowicach, nie w samym mieście.",
  ],
  districts: [
    "Ciężkowice",
    "Kąśna Dolna",
    "Kąśna Górna",
    "Zborowice",
    "Bogoniowice",
    "Jastrzębia",
    "Siekierczyna",
    "Bruśnik",
    "Ostrusza",
    "Pławna",
    "Tursko",
    "Falkowa",
    "Kipszna",
  ],

  nearbyHeading: "Gromnik, Zakliczyn i Bobowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Gromnikiem, Zakliczynem, Rzepiennikiem Strzyżewskim, Bobową i Gródkiem nad Dunajcem. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu; blisko jest też do Tarnowa i do Nowego Sącza.",
    "Uwaga na nazwę: to Ciężkowice w powiecie tarnowskim, nad Białą Tarnowską, a nie Ciężkowice koło Jaworzna i Trzebini. Wyszukiwarki potrafią te miejscowości mylić.",
  ],
  nearbyTowns: [
    "Gromnik",
    "Zakliczyn",
    "Rzepiennik Strzyżewski",
    "Bobowa",
    "Gródek nad Dunajcem",
    "Tuchów",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Ciężkowice", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Kąśnej Dolnej albo w Zborowicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dwanaście wsi traktuję tak samo jak samo miasto. Przy umawianiu podaj nazwę miejscowości — potrzebuję jej wyłącznie do zaplanowania trasy, bo gmina jest rozległa i pagórkowata.",
    },
    ...faqWspolne("w Ciężkowicach"),
    {
      question: "Czy Thermomix upiecze ciasto?",
      answer:
        "Nie upiecze i nie udaję, że tak — do pieczenia potrzebny jest piekarnik. Robi natomiast całą pracę przed piekarnikiem, i to jest ta część, przez którą ciasto najczęściej odkłada się na kiedy indziej: uciera masę, ubija pianę, rozdrabnia orzechy i migdały, wyrabia ciasto drożdżowe w kilka minut. Osobno warto wiedzieć o kremach — budyniowym, karmelu, masie do bezów — bo tam trzeba pilnować temperatury i ciągle mieszać, żeby się nie zwarzyło. Tu ustawia się temperaturę i można odejść.",
    },
  ],

  geo: { lat: 49.7835203, lng: 20.973947 },
};
