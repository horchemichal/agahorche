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
 * WIERZCHOSŁAWICE — GMINA WIEJSKA w powiecie tarnowskim.
 * 10 465 mieszkańców (GUS, 31.12.2024; strona gminy podaje 10 411
 * na 31.12.2025), 74,84 km², 141 os./km². Wójt: Małgorzata Jadwiga Moskal.
 * 11 SOŁECTW.
 *
 * OŚ STRONY: ADRES PREMIERA. To jedyna wieś w Polsce, pod której adresem
 * mieszkał trzykrotny premier — i pod którą wciąż stoi jego dom.
 * ⚠️⚠️ OŚ MUSI BYĆ O CZŁOWIEKU I POLITYCE, nie o spółdzielczości ani
 * o „wsi, która nauczyła się gospodarować” — to oś CZERNICHOWA
 * (najstarsza szkoła rolnicza, pierwsza kasa Stefczyka). Witos był
 * działaczem ruchu ludowego, ale tutaj liczy się BIOGRAFIA I NAJWYŻSZY
 * URZĄD W PAŃSTWIE, a nie instytucje spółdzielcze.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — WITOS: ur. 21 STYCZNIA 1874 w Wierzchosławicach, w przysiółku
 *   DWUDNIAKI; zm. 31 PAŹDZIERNIKA 1945 w Krakowie; pochowany na
 *   cmentarzu parafialnym w Wierzchosławicach, w kaplicy rodzinnej
 *   (dzieje.pl, wierzchoslawice.pl). ⚠️ Jedno źródło podaje 22 stycznia —
 *   dwa mocniejsze podają 21. Użyta data 21 stycznia,
 * — TRZY RZĄDY (dzieje.pl): 24 lipca 1920 – 13 września 1921 — RZĄD
 *   OBRONY NARODOWEJ, powołany w szczytowym momencie wojny
 *   polsko-bolszewickiej; 28 maja – 16 grudnia 1923; 10 maja 1926 —
 *   obalony po czterech dniach przez przewrót majowy,
 * — PROCES BRZESKI: aresztowany we wrześniu 1930, skazany na 2,5 roku
 *   (złagodzone do 18 miesięcy). Emigracja do Czechosłowacji od końca
 *   września 1933; POWRÓT DO POLSKI 31 MARCA 1939,
 * — POGRZEB: kondukt przeszedł PONAD 90 KM Z KRAKOWA do Wierzchosławic
 *   (listopad 1945). ⚠️ Liczba „ponad 100 tys. uczestników” pochodzi
 *   ze źródła popularnego — w treści użyta z zastrzeżeniem „wedle
 *   przekazów”,
 * — TESTAMENT (cytat ze strony gminy): „Pragnę spocząć na zawsze wśród
 *   tych, z których wyszedłem, którym zawdzięczam swoje wywyższenie,
 *   z którymi pracowałem przez całe życie”,
 * — ZJAZDY: 15 sierpnia 1925 Dożynki Reymontowskie, ok. 25 000
 *   uczestników; 30 kwietnia 1933 — 25-lecie pracy parlamentarnej Witosa,
 *   ok. 60 000 uczestników,
 * — MUZEUM: oddział MUZEUM ZIEMI TARNOWSKIEJ (dawn. Muzeum Okręgowe
 *   w Tarnowie), Wierzchosławice 698. Powstało w 1971 r. ze współpracy
 *   działaczy ludowych i rodziny; jubileusz 50-lecia 11 września 2022.
 *   DWA OBIEKTY: STARA ZAGRODA (dom rodzinny) Z 1814 R. w przysiółku
 *   Dwudniaki — drewniany dom o glinianych ścianach, strzecha, sień,
 *   izba duża, komora, izdebka; oraz NOWA ZAGRODA zbudowana PRZEZ
 *   SAMEGO WITOSA w latach 1905–1913 — zespół pięciu drewnianych
 *   budynków w czworobok. Dom rodzinny sprzedany w 1921, odkupiony
 *   w 1971. Remonty: 2015 i 2024 (koszt ok. 100 000 zł: dach i strzecha,
 *   klepisko, ogrodzenie, studnia z żurawiem). Zbiory: gabinet Witosa,
 *   kuchnia z piecem chlebowym, ekspozycja etnograficzna z 2. poł. XIX w.,
 *   sztandary organizacji ludowych — najstarszy z 1928 r.,
 * — CENTRUM KULTURY WSI POLSKIEJ im. Wincentego Witosa — gminna
 *   instytucja kultury w budynku DAWNEGO UNIWERSYTETU LUDOWEGO
 *   (ukończony koniec 1952). 22 pokoje, 53 miejsca noclegowe, 3 sale
 *   konferencyjne do 180 osób, restauracja. 13 września 1982 odsłonięcie
 *   popiersia Witosa przed budynkiem,
 * — ZADUSZKI WITOSOWE — corocznie 31 października,
 * — ŚWIĘTO KARPIA WIERZCHOSŁAWICKIEGO — impreza kulinarna jesienią
 *   przy CKWP; historyczne stawy hodowlane w gminie,
 * — FASOLA „PIĘKNY JAŚ” Z DOLINY DUNAJCA — ChNP, rejestracja
 *   27 PAŹDZIERNIKA 2011, 32. polski produkt w systemie unijnym.
 *   OBSZAR OBEJMUJE 11 GMIN, w tym WIERZCHOSŁAWICE. Masa 1000 nasion
 *   1 100–1 500 g, białko 20–24%, wilgotność do 18%, w gwarze lokalnej
 *   zwana „groch piechotny”,
 * — ZABYTKI: kościół parafialny 1811–1818 (miejsce chrztu Witosa),
 *   kaplica rodzinna Witosów, cmentarz wojenny nr 215 z I wojny
 *   (132 żołnierzy), Dom Ludowy z 1924 r.,
 * — DOJAZD: STACJA BOGUMIŁOWICE (sołectwo gminy) na linii nr 91
 *   Kraków–Medyka. Bogumiłowice–Kraków Główny 1 h 8 min – 1 h 11 min,
 *   Bogumiłowice–Tarnów ok. 8 minut, obsługa Koleje Małopolskie.
 *   AUTOSTRADA A4 PRZECINA GMINĘ, węzeł Tarnów Zachód / Wierzchosławice.
 *   DW 975, DK 94,
 * — GOSPODARKA: 28 czerwca 2023 uchwalono MPZP dla 52,8 HA TERENÓW
 *   INWESTYCYJNYCH przy zjeździe autostradowym; działa zakład produkcji
 *   betonu Strunbet,
 * — WSPÓŁRZĘDNE: 50,0200 / 20,8533.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — SPÓŁDZIELCZOŚCI I KÓŁEK ROLNICZYCH JAKO OSI. To oś Czernichowa.
 *   Wątek „Witos był wójtem przez ponad 20 lat i założył kółko rolnicze”
 *   pochodzi ze źródła popularnego i został pominięty,
 * — DATY PONOWNEGO OTWARCIA Starej Zagrody po remoncie 2024. Nie
 *   potwierdzona — nie podana,
 * — RELACJI CKWP ↔ Gminne Centrum Kultury. To prawdopodobnie DWIE różne
 *   jednostki. Nie mieszać,
 * — NAZWY GOSPODARSTWA RYBACKIEGO i wielkości stawów. Niepotwierdzone,
 * — PRACODAWCÓW poza Strunbetem. Brak danych,
 * — POSTOJÓW POCIĄGÓW PRZYSPIESZONYCH w Bogumiłowicach jako stanu
 *   obecnego. To była sytuacja z 2020 r., wywołana zamknięciem mostu
 *   na Dunajcu. Nie zakładać, że trwa,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA, identyczna
 *   dla wszystkich gmin powiatu tarnowskiego.
 *
 * PUŁAPKI:
 * — WITOS to postać ruchu ludowego, ale oś tej strony NIE jest
 *   o spółdzielczości (Czernichów) ani o rolnictwie (Zakliczyn),
 * — SOŁECTWA pochodzą z oficjalnej strony gminy, NIE ze statutu
 *   (BIP Małopolska blokuje roboty),
 * — ROZBIEŻNOŚĆ LUDNOŚCI: GUS 10 465 (31.12.2024) vs gmina 10 411
 *   (31.12.2025). Obie mogą być prawdziwe,
 * — STACJA BOGUMIŁOWICE leży w gminie Wierzchosławice, ale nazwa nie
 *   zawiera nazwy gminy — łatwo ją przeoczyć przy planowaniu dojazdu.
 */

export const WIERZCHOSLAWICE: CityContent = {
  slug: "wierzchoslawice",
  h1: "Thermomix Wierzchosławice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Wierzchosławice — prezentacja",
  seoDescription:
    "Thermomix w gminie Wierzchosławice: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich 11 sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Wierzchosławice — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Wierzchosławice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Wierzchosławic, Bogumiłowic, Łętowic, Mikołajowic i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie jedenaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wierzchosławicach – jak wygląda prezentacja?",
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
      heading: "Adres premiera",
      paragraphs: [
        "Dwudziestego pierwszego stycznia tysiąc osiemset siedemdziesiątego czwartego roku w przysiółku Dwudniaki, w drewnianym domu o glinianych ścianach i pod strzechą, urodził się Wincenty Witos. Dom stoi do dziś. Postawiono go w tysiąc osiemset czternastym roku.",
        "Witos trzy razy stał na czele rządu Rzeczypospolitej. Pierwszy raz od dwudziestego czwartego lipca tysiąc dziewięćset dwudziestego, w szczytowym momencie wojny z bolszewikami — to był Rząd Obrony Narodowej. Drugi raz w tysiąc dziewięćset dwudziestym trzecim. Trzeci w maju tysiąc dziewięćset dwudziestego szóstego, przez cztery dni, do przewrotu majowego.",
        "Potem przyszedł proces brzeski. Aresztowany we wrześniu tysiąc dziewięćset trzydziestego, skazany na dwa i pół roku więzienia, wyjechał do Czechosłowacji. Wrócił do Polski trzydziestego pierwszego marca tysiąc dziewięćset trzydziestego dziewiątego roku, pięć miesięcy przed wojną.",
        "Zmarł trzydziestego pierwszego października tysiąc dziewięćset czterdziestego piątego w Krakowie. I tu historia się domyka: kondukt żałobny przeszedł ponad dziewięćdziesiąt kilometrów, z Krakowa aż tutaj. Wedle przekazów szło za nim około stu tysięcy ludzi.",
        "W testamencie napisał: pragnę spocząć na zawsze wśród tych, z których wyszedłem, którym zawdzięczam swoje wywyższenie, z którymi pracowałem przez całe życie. Leży w kaplicy rodzinnej na miejscowym cmentarzu parafialnym, kilkaset metrów od kościoła, w którym go ochrzczono.",
        "Wieś pamiętała o nim jeszcze za jego życia, i to na skalę, która dziś trudno sobie wyobrazić. Piętnastego sierpnia tysiąc dziewięćset dwudziestego piątego odbyły się tu Dożynki Reymontowskie, na które przyjechało około dwudziestu pięciu tysięcy osób. Osiem lat później, na dwudziestopięciolecie jego pracy parlamentarnej — około sześćdziesięciu tysięcy.",
        "Dziś w Wierzchosławicach są dwa domy do zobaczenia. Stara zagroda w Dwudniakach, ta z tysiąc osiemset czternastego, w której się urodził — sprzedana w tysiąc dziewięćset dwudziestym pierwszym, odkupiona pół wieku później przez rodzinę i działaczy ludowych, w dwa tysiące dwudziestym czwartym roku wyremontowana za około sto tysięcy złotych, razem z klepiskiem, strzechą i studnią z żurawiem. I nowa zagroda, którą Witos zbudował sam w latach tysiąc dziewięćset pięć do tysiąc dziewięćset trzynaście: pięć drewnianych budynków ustawionych w czworobok. Obie są oddziałem Muzeum Ziemi Tarnowskiej i działają jako muzeum od tysiąc dziewięćset siedemdziesiątego pierwszego roku.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Wierzchosławice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich jedenaście, a gmina rozciąga się na siedemdziesięciu pięciu kilometrach kwadratowych po obu stronach autostrady. Z Ostrowa do Rudki trasa wygląda inaczej niż z Bogumiłowic do Komorowa, choć koszt jest ten sam, czyli żaden.",
        "Warto wiedzieć, że gmina ma dwa kody pocztowe: trzydzieści trzy sto dwadzieścia jeden dla poczty Bogumiłowice i trzydzieści trzy sto dwadzieścia dwa dla Wierzchosławic Tarnowskich. Przy zamawianiu czegokolwiek do domu to bywa istotne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Wierzchosławice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Karp i to, co z niego zostaje",
      paragraphs: [
        "W gminie z historycznymi stawami hodowlanymi ryba nie jest daniem od święta, tylko czymś, co po prostu bywa w domu. Raz w roku odbywa się tu nawet Święto Karpia Wierzchosławickiego, a restauracja przy Centrum Kultury Wsi Polskiej ma karpia w karcie na stałe.",
        "Ryba ma jednak w kuchni dwie wady i obie da się obejść. Pierwsza to zapach, który zostaje w całym mieszkaniu. Druga to resztki — z jednego karpia zostaje więcej, niż zjada się za jednym razem, a odgrzana smażona ryba jest już tylko cieniem siebie.",
        "Na pierwsze pomaga gotowanie na parze. Ryba w koszu nad wodą, z ziołami i cytryną, gotuje się bez tłuszczu i bez smrodu smażenia, a wychodzi delikatniejsza niż z patelni. Do tego można w tym samym czasie ugotować piętro niżej ziemniaki albo warzywa.",
        "Na drugie — pasta rybna. Z resztek gotowanej ryby, z jajkiem, odrobiną masła i cebulką powstaje w kilkadziesiąt sekund smarowidło na kanapki, które jest w domu do drugiego dnia. To jedna z tych rzeczy, przy których urządzenie zwyczajnie oszczędza jedzenie.",
        "Trzecia rzecz to wywar. Z głowy i ości robi się bazę zupy rybnej, gotowaną bez pilnowania i bez wykipień. Potem wystarczy przecedzić i zmiksować warzywa.",
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
    heading: "Wierzchosławice i gotowanie — karp, fasola z doliny Dunajca, stół po zaduszkach",
    paragraphs: [
      "Ta gmina leży w obszarze objętym Chronioną Nazwą Pochodzenia fasoli Piękny Jaś z Doliny Dunajca — jednego z niewielu polskich produktów z tym najmocniejszym unijnym oznaczeniem. Rejestrację uzyskała dwudziestego siódmego października dwa tysiące jedenastego roku jako trzydziesty drugi polski produkt w systemie.",
      "Warto wiedzieć, czym się ta fasola różni od zwykłej. Nasiona są bardzo duże — tysiąc sztuk waży od tysiąca stu do tysiąca pięciuset gramów — mają cienką, miękką okrywę, wysoką zawartość białka i, co w kuchni najważniejsze, krótszy czas gotowania. W miejscowej gwarze nazywa się ją grochem piechotnym.",
      "Drugim tutejszym produktem jest karp. Gmina ma historyczne stawy hodowlane, a raz w roku odbywa się Święto Karpia Wierzchosławickiego, organizowane przy Centrum Kultury Wsi Polskiej.",
      "Jest jeszcze jeden stały punkt kalendarza, tylko nie kulinarny: Zaduszki Witosowe, obchodzone tu co roku trzydziestego pierwszego października, w rocznicę śmierci premiera. Msza, wizyta na cmentarzu i program kulturalny — a po nich, jak to bywa, spotkania w domach.",
      "Dla urządzenia najsensowniejsze są tu ryba na parze, pasty i wywary z resztek oraz gotowanie fasoli, która przy tak grubym ziarnie i tak potrzebuje swojego czasu. Czego nie zrobi, mówię wprost: nie usmaży karpia po wigilijnemu i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Wierzchosławice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich jedenastu, bez żadnej dopłaty za odległość. Gmina liczy około dziesięciu i pół tysiąca mieszkańców na siedemdziesięciu pięciu kilometrach kwadratowych.",
    "Sołectwa to: Bobrowniki Małe, Bogumiłowice, Gosławice, Kępa Bogumiłowicka, Komorów, Łętowice, Mikołajowice, Ostrów, Rudka, Sieciechowice i Wierzchosławice.",
    "W samych Wierzchosławicach jest muzeum Wincentego Witosa — dwa obiekty: stara zagroda z tysiąc osiemset czternastego roku w przysiółku Dwudniaki, w której premier się urodził, i nowa zagroda, którą zbudował sam na początku dwudziestego wieku. Obok kościół z lat tysiąc osiemset jedenaście do osiemnaście, w którym go ochrzczono, i cmentarz z kaplicą rodzinną, w której spoczął.",
    "Działa tu również Centrum Kultury Wsi Polskiej imienia Wincentego Witosa, mieszczące się w budynku dawnego Uniwersytetu Ludowego. Przed wejściem stoi popiersie premiera, odsłonięte w tysiąc dziewięćset osiemdziesiątym drugim roku.",
    "Dojazd: w Bogumiłowicach, jednym z sołectw gminy, jest stacja na linii kolejowej numer dziewięćdziesiąt jeden. Do Tarnowa jedzie się stąd około ośmiu minut, do Krakowa Głównego nieco ponad godzinę. Przez gminę przechodzi też autostrada A4 z węzłem Tarnów Zachód.",
  ],
  districts: [
    "Wierzchosławice",
    "Bogumiłowice",
    "Łętowice",
    "Mikołajowice",
    "Ostrów",
    "Komorów",
    "Sieciechowice",
    "Gosławice",
    "Rudka",
    "Bobrowniki Małe",
    "Kępa Bogumiłowicka",
  ],

  nearbyHeading: "Radłów, Wojnicz i Żabno też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Radłowem, Wojniczem, Żabnem, Borzęcinem, Pleśną i gminą wiejską Tarnów. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu; do samego Tarnowa jest stąd bardzo blisko.",
    "Warto pamiętać, że fasola Piękny Jaś z Doliny Dunajca ma obszar chroniony obejmujący jedenaście gmin, a Wierzchosławice są jedną z nich — razem z sąsiednim Radłowem, Wojniczem i Żabnem.",
  ],
  nearbyTowns: [
    "Radłów",
    "Wojnicz",
    "Żabno",
    "Borzęcin",
    "Pleśna",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Wierzchosławice", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Bogumiłowicach albo w Ostrowie. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie jedenaście sołectw traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Wierzchosławice"),
    {
      question: "Czy w Thermomixie da się ugotować fasolę Piękny Jaś?",
      answer:
        "Da się i wychodzi dobrze, ale bez cudów: fasola o tak grubym ziarnie i tak potrzebuje namoczenia przez noc i swojego czasu gotowania. Zysk jest gdzie indziej — urządzenie gotuje ją bez pilnowania i bez wykipień, samo się wyłącza, a potem w tym samym naczyniu robi się z niej pastę, zupę krem albo farsz. Warto też wiedzieć, że ta odmiana ma cieńszą okrywę i gotuje się krócej niż zwykła fasola tyczna, więc czasy z przepisów bywają zawyżone.",
    },
  ],

  geo: { lat: 50.02, lng: 20.8533 },
};
