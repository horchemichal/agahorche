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
 * OCHOTNICA DOLNA — gmina wiejska, powiat nowotarski. Cztery
 * miejscowości, 8 499 mieszkańców (2024) na ok. 141 km².
 *
 * OŚ STRONY: KSIĄŻKA KUCHARSKA NAPISANA PRZEZ KOŁO GOSPODYŃ.
 * Koło w Ochotnicy Górnej działa od 1916 r., liczy ok. 50 członkiń
 * (najstarsze do ok. 90 lat) i w 2020 r. WYDAŁO WŁASNĄ KSIĄŻKĘ
 * KUCHARSKĄ: „Dawna kuchnia górali gorczańskich w rytmie czterech
 * pór roku”. To najlepszy materiał kulinarny w całym serwisie —
 * po raz pierwszy oś strony o gotowaniu JEST książką o gotowaniu,
 * napisaną przez mieszkanki.
 *
 * Drugi wątek: LOKACJA NA PRAWIE WOŁOSKIM z 1416 r.
 *
 * ⚠️ SPÓJNOŚĆ Z ZAWOJĄ (`zawoja.ts`). Na stronie Zawoi napisałam,
 * że Biuro Rekordów stawia Ochotnicę na pierwszym miejscu (~25 km),
 * a Zawoję na drugim (18–19 km). Research to POTWIERDZIŁ, ale
 * z zastrzeżeniem: te 25 km to CAŁA DOLINA, czyli dwie formalnie
 * odrębne wsie razem (rozdzielone w 1910 r.). BEZPIECZNA FORMUŁA,
 * użyta na tej stronie: „Biuro Rekordów stawia Ochotnicę na pierwszym
 * miejscu, licząc całą dolinę”. NIGDY nie pisać, że najdłuższą wsią
 * jest Ochotnica Górna albo Dolna z osobna — źródła tego nie
 * rozstrzygają.
 *
 * ⚠️ PASTERSTWO I REDYK TO OŚ ZAWOI. Tutaj używam wyłącznie wątku
 * lokacji i prawa wołoskiego, bez redyku i bez wypasu jako tematu.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KGW W OCHOTNICY GÓRNEJ: założone 1916 r., ok. 50 członkiń,
 *   przewodnicząca Janina Król. W 2020 r. wydały książkę „Dawna
 *   kuchnia górali gorczańskich w rytmie czterech pór roku”.
 *   I miejsce za wypieki w Kościelisku (2018), wyróżniona grochówka.
 *   Działa też KGW Tylmanowa,
 * — LOKACJA: 1416 r., przywilej Władysława Jagiełły dla DAWIDA
 *   WOŁOCHA, na prawie wołoskim, „na surowym korzeniu”. Czynsz
 *   płacony nabiałem, owcami i wieprzami. Najstarsze osadnictwo
 *   wołoskie na Podhalu. Nazwa od staropolskiego „ochodzić”;
 *   rzeka Ochodnik w dokumencie z 1336 r.,
 * — DŁUGOŚĆ: droga główna doliny ok. 20 km; z 17 dolinami bocznymi
 *   zabudowa rozciąga się łącznie na ok. 38 km. Biuro Rekordów
 *   podaje ok. 25 km dla całej Ochotnicy i stawia ją przed Zawoją,
 * — PRZYSIÓŁKI (nazwy udokumentowane): Forendówki, Jaszcze, Jamne,
 *   Skrodne, Gorcowe, Młynne; w Ochotnicy Górnej Babieniec
 *   (2. poł. XVI w.), Ustrzyk, Skałka, Pod Magurką, Holina.
 *   ⚠️ DOKŁADNEJ LICZBY PRZYSIÓŁKÓW NIE POTWIERDZONO,
 * — GORCZAŃSKI PARK NARODOWY: 7 037,56 ha (30.06.2022), leży
 *   w 5 gminach; gmina Ochotnica Dolna to 14% powierzchni parku,
 *   czyli ok. 985 ha,
 * — KRWAWA WIGILIA, 23 grudnia 1944 r. — pacyfikacja przez
 *   SS-Kampfgruppe Jagdkommando Matingen. IPN: 50 zabitych,
 *   18 rannych. Inne źródła: 56 osób. Pomnik z 1964 r. dłuta
 *   Henryka Burzeca. ⚠️ NA STRONIE TYLKO JEDNO ZDANIE, z liczbą
 *   IPN i formułą „około”. To strona o urządzeniu kuchennym —
 *   rozwijanie tego tematu byłoby niestosowne, a pominięcie
 *   nieuczciwe,
 * — MIEJSCOWOŚCI (4): Tylmanowa, Ochotnica Dolna, Ochotnica Górna
 *   i czwarta, podawana rozbieżnie jako Młynne albo Górniki.
 *   ⚠️ Ludności per sołectwo NIE ZNALEZIONO,
 * — POWIERZCHNIA 141 km², ludność 8 499 (2024),
 * — GOSPODARKA: 814 podmiotów REGON (2024). BUDOWNICTWO 49,5%,
 *   handel 13,6%. Wynagrodzenie 6 883 zł brutto, bezrobocie ok. 4,8%.
 *   DOJAZDY DO PRACY: 319 wyjeżdża, 140 przyjeżdża,
 * — DOJAZD: KOLEI W GMINIE NIE MA. Samochodem ok. 92 km, 1 h 40 min.
 *   Komunikacją zbiorczą ok. 3 h 10 min z przesiadką w Nowym Targu;
 *   brak połączeń bezpośrednich,
 * — WATRA OCHOTNICKA — 29. edycja. OCHO! Festiwal — potwierdzone
 *   edycje V i VI.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — UTRUDNIEŃ BYTOWYCH (dowóz do szkoły, odśnieżanie, karetka).
 *   Szukano celowo — ZERO ŹRÓDEŁ. To był najbardziej kuszący wątek
 *   i dlatego go nie ma: nie wypełniam go domysłami,
 * — LICZBY PRZYSIÓŁKÓW,
 * — LUDNOŚCI POSZCZEGÓLNYCH SOŁECTW,
 * — NAZWY CZWARTEGO SOŁECTWA jako pewnej (Młynne vs Górniki) —
 *   wymieniam trzy pewne i piszę „cztery miejscowości”,
 * — DATY WATRY OCHOTNICKIEJ. Źródło nie podaje roku,
 * — NAZW DUŻYCH PRACODAWCÓW. Niepotwierdzone,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak.
 *
 * PUŁAPKI:
 * — NIE PISAĆ „NAJDŁUŻSZA WIEŚ” O POJEDYNCZEJ MIEJSCOWOŚCI
 *   (patrz wyżej). Formuła bezpieczna jest w tekście,
 * — OFIARY KRWAWEJ WIGILII: 50 (IPN) vs 56 (inne). Używam „około
 *   pięćdziesięciu” i wskazuję IPN,
 * — REDYK I WYPAS to oś Zawoi — nie dublować,
 * — OCHOTNICA DOLNA to nazwa GMINY i jednej z jej wsi.
 */

export const OCHOTNICA_DOLNA: CityContent = {
  slug: "ochotnica-dolna",
  h1: "Thermomix Ochotnica Dolna – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Ochotnica Dolna — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Ochotnica Dolna: bezpłatna prezentacja TM7 u Ciebie w kuchni — Ochotnica Dolna, Górna, Tylmanowa. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ochotnica Dolna — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Ochotnica Dolna. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Ochotnica Dolna przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam w całą dolinę, także w boczne przysiółki, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała dolina i przysiółki, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Ochotnica Dolna – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Ochotnicy Dolnej, jak w Górnej czy w Tylmanowej.",
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
      heading: "Koło gospodyń, które napisało własną książkę kucharską",
      paragraphs: [
        "Koło gospodyń wiejskich w Ochotnicy Górnej działa od tysiąc dziewięćset szesnastego roku. Liczy dziś około pięćdziesięciu członkiń, a najstarsze mają blisko dziewięćdziesiąt lat. W dwa tysiące dwudziestym roku wydały książkę kucharską pod tytułem „Dawna kuchnia górali gorczańskich w rytmie czterech pór roku”.",
        "Piszę o tym z osobną przyjemnością, bo na przeszło osiemdziesięciu stronach tego serwisu spotkałam mnóstwo kół gospodyń, mnóstwo konkursów potraw i mnóstwo nagród. Ale to pierwsze, które usiadło i spisało własną kuchnię w formie książki — z podziałem na pory roku, czyli dokładnie tak, jak ta kuchnia naprawdę działała, zanim pojawiły się całoroczne warzywa w sklepie.",
        "Sto dziewięć lat istnienia to zresztą kawał czasu jak na organizację bez budżetu, biura i etatów. Koło przetrwało dwie wojny, okupację, zmianę ustroju i wyludnianie się wsi. Zdobyło też pierwsze miejsce za wypieki na konkursie w Kościelisku, a osobne wyróżnienie dostała ich grochówka.",
        "Sama wieś jest równie stara. W tysiąc czterysta szesnastym roku Władysław Jagiełło nadał przywilej lokacyjny Dawidowi Wołochowi — na prawie wołoskim, „na surowym korzeniu”, czyli w miejscu, gdzie wcześniej nie było nic. Czynsz płacono wtedy nabiałem, owcami i wieprzami. To najstarsze osadnictwo wołoskie na Podhalu.",
        "Ochotnica słynie z długości. Biuro Rekordów stawia ją na pierwszym miejscu wśród najdłuższych wsi w Polsce, z około dwudziestoma pięcioma kilometrami — z tym że liczy całą dolinę, a więc dwie formalnie odrębne wsie, rozdzielone w tysiąc dziewięćset dziesiątym roku. Sama droga przez dolinę ma jakieś dwadzieścia kilometrów, a razem z siedemnastoma dolinami bocznymi zabudowa ciągnie się na trzydzieści osiem.",
        "To znaczy, że przyjeżdżając tu na prezentację, nie pytam o adres, tylko o przysiółek. Forendówki, Jaszcze, Jamne, Skrodne, Gorcowe, Babieniec, Ustrzyk, Holina — te nazwy mówią mi znacznie więcej niż numer domu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Ochotnica Dolna?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę przysiółka, nie tylko wsi. To jest tutaj naprawdę istotne: zabudowa ciągnie się przez całą dolinę i rozchodzi w kilkanaście bocznych dolin, a numeracja domów niewiele mi powie. Dojazd wszędzie jest bez dopłaty, także w górne przysiółki.",
        "Zimą uprzedź mnie, jeśli dojazd pod dom bywa trudny. Nie po to, żeby odmówić — po to, żeby wyjechać wcześniej i przyjechać na czas.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Ochotnica Dolna"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Połowa firm to budowlanka, a trzystu ludzi wyjeżdża do pracy",
      paragraphs: [
        "W tej gminie prawie połowa zarejestrowanych działalności to budownictwo — czterdzieści dziewięć i pół procenta. Handel daje kolejne trzynaście. Dużego zakładu nie ma, a z gminy wyjeżdża do pracy trzysta dziewiętnaście osób przy stu czterdziestu przyjeżdżających.",
        "Budowlanka ma bardzo konkretny wpływ na kuchnię i rzadko się o tym pisze. Praca zaczyna się wcześnie, kończy o różnych porach, a zimą bywa jej mniej albo nie ma jej wcale. Do tego dochodzą wyjazdy — czasem na tydzień, czasem dłużej.",
        "W takim domu obiad musi umieć czekać i musi umieć powstać bez tej osoby, która zwykle gotuje. Danie jednogarnkowe wstawia się i wychodzi; gotuje się bez nikogo, samo się wyłącza i nie przypala. A ponieważ przepis prowadzi krok po kroku, ugotować może ktokolwiek — także nastolatek albo mąż, który dotąd nie gotował.",
        "Druga rzecz to gotowanie z zapasem, wyjątkowo sensowne przy pracy sezonowej. Zimą, kiedy budowa stoi, jest czas na przygotowanie zup do zamrożenia, sosów, past kanapkowych i ciasta na pierogi — seriami, w jednym naczyniu, na miesiące, w których czasu nie będzie.",
        "Trzecia rzecz wynika z geografii. Przy zabudowie rozciągniętej na kilkadziesiąt kilometrów po bocznych dolinach sklep nie jest za rogiem. Umiejętność zrobienia chleba, pasty czy zupy z tego, co jest w domu, ma tu inną wartość niż w mieście — i to jest, nawiasem mówiąc, dokładnie ta sama logika, którą kierowały się autorki tutejszej książki kucharskiej, układając przepisy według pór roku.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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
    heading: "Kuchnia w rytmie czterech pór roku",
    paragraphs: [
      "Tytuł książki wydanej przez tutejsze koło gospodyń brzmi „Dawna kuchnia górali gorczańskich w rytmie czterech pór roku” — i ten podtytuł jest ważniejszy niż się wydaje. Bo kuchnia górska była kuchnią sezonową nie z wyboru, tylko z konieczności. Wiosną jadło się co innego niż jesienią, bo zimą po prostu nie było czego jeść świeżego.",
      "To jest zresztą coś, co dzisiejsza kuchnia w dużej mierze utraciła i co powoli wraca. Zima to były kiszonki, suszone owoce, mąka, ziemniaki i to, co przetrwało w piwnicy. Lato to zielenina, mleko, jagody. Jesień to przetwarzanie wszystkiego naraz, żeby starczyło do wiosny.",
      "Muszę dodać uczciwe zastrzeżenie, które powtarzam wszędzie: nie znalazłam wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych. Nagrody koła gospodyń — pierwsze miejsce za wypieki, wyróżnienie za grochówkę — to konkursy, nie rejestr prawny.",
      "Co z tego wynika dla urządzenia? Najwięcej przy tej jesiennej części roku, czyli przy przetwarzaniu. Powidła, przeciery, dżemy, zupy do zamrożenia, kiszonki do słoików — to wszystko trzeba rozdrobnić, a potem długo gotować, mieszając, żeby nie przywarło. Urządzenie robi jedno i drugie bez Twojej obecności. Przy pięciu słoikach różnicy nie ma. Przy pięćdziesięciu jest ogromna.",
      "Czego nie zrobi, powiem wprost: nie upiecze chleba w piecu, nie zastąpi wprawy w rękach i nie ukisi kapusty — kiszenie robi sól i czas. I jeszcze jedno: nie zastąpi tej książki. Przepisy zbierane przez sto lat są warte więcej niż jakikolwiek sprzęt, który je wykona.",
    ],
  },

  districtsHeading: "Gdzie w gminie Ochotnica Dolna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich miejscowości gminy i do przysiółków, bez żadnej dopłaty za odległość: Ochotnicy Dolnej, Ochotnicy Górnej i Tylmanowej, a w nich do Forendówek, Jaszcz, Jamnego, Skrodnego, Gorcowego, Babieńca, Ustrzyka, Skałki, Pod Magurką i Holiny.",
    "To gmina rozciągnięta bardziej niż jakakolwiek inna, do której jeżdżę. Sama droga przez dolinę ma około dwudziestu kilometrów, a licząc siedemnaście dolin bocznych, zabudowa ciągnie się łącznie na trzydzieści osiem. Dlatego przy umawianiu proszę o nazwę przysiółka — bez niej mogłabym szukać naprawdę długo.",
    "Cała gmina zajmuje sto czterdzieści jeden kilometrów kwadratowych i liczy blisko osiem i pół tysiąca mieszkańców. Czternaście procent powierzchni Gorczańskiego Parku Narodowego leży właśnie tutaj, czyli około dziewięciuset osiemdziesięciu hektarów.",
    "Jest w tej dolinie także miejsce trudne, o którym wypada wspomnieć, choćby krótko. Dwudziestego trzeciego grudnia tysiąc dziewięćset czterdziestego czwartego roku Niemcy spacyfikowali Ochotnicę Dolną i okoliczne osiedla; według Instytutu Pamięci Narodowej zginęło wtedy około pięćdziesięciu osób. Pomnik z tysiąc dziewięćset sześćdziesiątego czwartego roku stoi we wsi do dziś.",
    "O dojeździe uczciwie: kolei w gminie nie ma i nie ma też bezpośredniego połączenia autobusowego z Krakowem. Samochodem jest stąd około dziewięćdziesięciu dwóch kilometrów, czyli mniej więcej godzina czterdzieści. Komunikacją zbiorową, z przesiadką w Nowym Targu, trzeba liczyć ponad trzy godziny. Ja przyjeżdżam samochodem i nie doliczam za to ani złotówki.",
  ],
  districts: [
    "Ochotnica Dolna",
    "Ochotnica Górna",
    "Tylmanowa",
    "Forendówki",
    "Jaszcze",
    "Jamne",
    "Skrodne",
    "Gorcowe",
    "Babieniec",
    "Ustrzyk",
    "Holina",
  ],

  nearbyHeading: "Krościenko, Czorsztyn i Nowy Targ też są na mojej trasie",
  nearbyParagraphs: [
    "Do Krościenka nad Dunajcem i Czorsztyna mam stąd blisko, do Nowego Targu trochę dalej. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz w Tylmanowej, bliżej Ci bywa w stronę Łącka i Nowego Sącza niż do Nowego Targu — dolina otwiera się w tamtą stronę. Dla umówienia prezentacji nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Krościenko nad Dunajcem",
    "Czorsztyn",
    "Nowy Targ",
    "Szczawnica",
    "Kraków",
  ],

  about: blokOMnie("do gminy Ochotnica Dolna", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Mieszkam w bocznym przysiółku, wysoko. Dojedziesz?",
      answer:
        "Dojadę i bez dopłaty. Proszę tylko o nazwę przysiółka zamiast samego numeru domu — zabudowa tej gminy ciągnie się przez całą dolinę i rozchodzi w siedemnaście bocznych dolin, więc adres bez tej wskazówki naprawdę niewiele mi mówi. Zimą uprzedź mnie, jeśli podjazd bywa trudny.",
    },
    ...faqWspolne("w gminie Ochotnica Dolna"),
    {
      question: "Czy Ochotnica to najdłuższa wieś w Polsce?",
      answer:
        "Biuro Rekordów stawia ją na pierwszym miejscu, z około dwudziestoma pięcioma kilometrami — ale liczy przy tym całą dolinę, czyli Ochotnicę Dolną i Górną razem, a formalnie są to dwie odrębne wsie od tysiąc dziewięćset dziesiątego roku. Sama droga przez dolinę ma około dwudziestu kilometrów. Drugie miejsce w tym zestawieniu zajmuje Zawoja, do której też dojeżdżam.",
    },
    {
      question: "Pracuję na budowie, zimą bywa przestój. Kiedy się umówimy?",
      answer:
        "Kiedy Ci pasuje — także zimą, i akurat wtedy bywa najspokojniej. W tej gminie prawie połowa firm to budownictwo, więc ten rytm dobrze znam. Powiedz po prostu, kiedy masz dwie spokojne godziny; nie mam sezonowych promocji, więc nic nie tracisz, czekając na dogodniejszy termin.",
    },
  ],

  geo: { lat: 49.5236, lng: 20.3239 },
};
