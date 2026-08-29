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
 * KOZŁÓW — gmina wiejska, powiat miechowski. 12 sołectw,
 * 4 403 mieszkańców na 85,84 km², gęstość ok. 52 os./km².
 *
 * OŚ STRONY: DUŻA STACJA W MAŁEJ GMINIE. Przez Kozłów przejeżdża
 * pół Polski — krzyżują się tu linia nr 8 (Warszawa–Kraków)
 * i linia nr 64 prowadząca na Centralną Magistralę Kolejową —
 * a sama gmina nie ma kanalizacji, praktycznie nie ma gazu
 * i wyludnia się o kilkanaście procent na dekadę.
 *
 * Druga oś, domykająca: ELEWATOR, KTÓREGO NIE MA. Państwowe Zakłady
 * Zbożowe w Kozłowie zatrudniały ok. 300 osób i mieściły 32,5 tys.
 * ton zboża. Działalność ustała w 2000 r., upadłość 2009, rozbiórka
 * 2021. Został tylko obiekt, który sam w sobie jest znakomitym
 * detalem: MUZEUM ZAKŁADÓW ZBOŻOWYCH prowadzone przez stowarzyszenie
 * dawnych pracowników.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — STACJA KOZŁÓW leży w gminie, ale fizycznie na gruntach wsi
 *   PRZYSIEKA. Krzyżują się tu linia nr 8 (Warszawa Zach.–Kraków Gł.)
 *   i linia nr 64 (Kozłów–Koniecpol, prowadząca na CMK).
 *   Trzy perony, sześć krawędzi peronowych,
 * — 30 września 2025 r. odjeżdżało stąd 49 pociągów — do Krakowa,
 *   Kielc i Sosnowca Głównego. Zatrzymują się TYLKO POLREGIO
 *   i Koleje Małopolskie; PKP Intercity nie zatrzymuje się tu,
 * — MODERNIZACJA stacji za 287 mln zł, od czerwca 2024 r. do 2032 r.,
 *   z tunelem i windami zamiast kładki,
 * — HISTORIA STACJI: otwarta w 1892 r., pierwotna nazwa PRZYSIEKA.
 *   Linia nr 64 oddana 28 grudnia 1971 r., zelektryfikowana
 *   19 grudnia 1973 r.,
 * — PZZ KOZŁÓW: decyzja o budowie 1952 r., pierwsze obiekty
 *   1955–1957. Elewator na 32,5 tys. ton (12 tys. plus dobudowane
 *   silosy 20 tys.), ok. 300 pracowników, 75 t kaszy i 300 t mąki
 *   dziennie. Prywatyzacja 1997 r., zaprzestanie działalności
 *   październik 2000 r., upadłość 2009 r., nakaz wyburzenia 2020 r.,
 *   ROZBIÓRKA 2021 r.,
 * — MUZEUM ZAKŁADÓW ZBOŻOWYCH w Kozłowie (Kozłów 19), prowadzone
 *   przez Stowarzyszenie „PZM-PZZ” Kozłów, KRS 0000052078,
 * — SOŁECTWA (12): Bogdanów, Bryzdzyn, Kamionka, Karczowice, Kępie,
 *   Kozłów, Marcinowice, Przybysławice, Przysieka, Rogów, Wierzbica,
 *   Wolica. Kozłów 916 mieszk. (20,6% gminy), Przysieka 535,
 *   Kępie 463, Wolica 272 (NSP 2021),
 * — DEMOGRAFIA: 4 403 mieszkańców (2024), spadek o 13,2%
 *   w latach 2002–2024; Wolica −22,3%, Przysieka −21,1%
 *   (1998–2021). Przyrost naturalny −26 (2024), saldo migracji −28.
 *   Mediana wieku 43,9 lat,
 * — INFRASTRUKTURA: gaz sieciowy 0,24%, kanalizacja 0%.
 *   1 678 mieszkań o średniej powierzchni 82 m²,
 * — GOSPODARKA: 272 podmioty REGON (2019), 76 firm na 1000
 *   mieszkańców. Rolnictwo 44,4% zatrudnienia. Pola uprawne 70%
 *   powierzchni gminy, lesistość 10,1%. Bezrobocie 5,2%,
 * — REZERWATY: Biała Góra (11,25 ha, stepowy) i Kępie na Wyżynie
 *   Miechowskiej (45,52 ha, grądowy). Biała Góra 415,5 m n.p.m.
 *   to najwyższy punkt gminy,
 * — DROGA: 59–60 km do Krakowa, ok. 1 h 6 min, przez DK7/S7,
 * — DNI GMINY KOZŁÓW: 15–16 sierpnia 2026 r.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LICZBY POŁĄCZEŃ I CZASU PRZEJAZDU KOZŁÓW–KRAKÓW. Dane
 *   w wyszukiwarkach są niespójne (od godziny do trzech,
 *   część z przesiadką w Sędziszowie). Piszę o 49 odjazdach
 *   ze stacji ogółem i odsyłam do rozkładu,
 * — NAZW PRACODAWCÓW. Po upadku zakładów zbożowych gmina nie ma
 *   zakładu przemysłowego,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ. Potwierdzone jest KGW w Wierzbicy
 *   (wieniec dożynkowy 2021), reszta nieznana,
 * — POTRAWY LOKALNEJ. Brak udokumentowanej. Nie wymyślam,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak,
 * — NUMERU EDYCJI DNI GMINY.
 *
 * PUŁAPKI:
 * — KOZŁÓW JEST W POLSCE WIELE: w świętokrzyskim, śląskim,
 *   lubelskim, wielkopolskim, mazowieckim. Jest też GMINA KOZŁOWO
 *   w warmińsko-mazurskim. Ten Kozłów to powiat miechowski,
 *   województwo małopolskie,
 * — STACJA KOZŁÓW LEŻY WE WSI PRZYSIEKA. Nie pisać „stacja
 *   w centrum Kozłowa”,
 * — TUNEL POD BIAŁĄ GÓRĄ leży NA GRANICY dwóch gmin: Uniejów-Rędziny
 *   (gmina Charsznica) i Kępie (gmina Kozłów). Nie przypisywać
 *   go wyłącznie Kozłowowi. Stacja o nazwie „Tunel” jest w gminie
 *   Charsznica. Długość tunelu podawana rozbieżnie (764 m i 810 m) —
 *   nie podaję jej,
 * — KAPUSTA CHARSZNICKA to nie produkt gminy Kozłów,
 * — PZZ NIE ISTNIEJĄ. Nie pisać o nich w czasie teraźniejszym.
 *   Istnieje tylko muzeum.
 */

export const KOZLOW: CityContent = {
  slug: "kozlow",
  h1: "Thermomix Kozłów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Kozłów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Kozłów: bezpłatna prezentacja TM7 u Ciebie w kuchni — Kozłów, Przysieka, Kępie, Wolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kozłów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Kozłów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Kozłów przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dwunastu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie dwanaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Kozłów – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Kozłowie, jak w Przysiece, Kępiu czy Wolicy.",
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
      heading: "Przez tę gminę przejeżdża pół Polski",
      paragraphs: [
        "W gminie liczącej cztery i pół tysiąca mieszkańców stoi stacja kolejowa z trzema peronami i sześcioma krawędziami peronowymi. Krzyżują się na niej dwie linie: magistrala z Warszawy do Krakowa i odgałęzienie prowadzące na Centralną Magistralę Kolejową w stronę Śląska. Ostatniego dnia września dwa tysiące dwudziestego piątego roku odjechało stąd czterdzieści dziewięć pociągów.",
        "Trzeba jednak dodać rzecz, która o tej gminie mówi wszystko: pociągi dalekobieżne się tu nie zatrzymują. Stają wyłącznie regionalne. Ekspresy przejeżdżają.",
        "Sama stacja jest starsza niż jej dzisiejsza nazwa — otwarto ją w tysiąc osiemset dziewięćdziesiątym drugim roku jako Przysieka i, co ciekawe, do dziś fizycznie leży na gruntach tej właśnie wsi, a nie Kozłowa. Trwa jej modernizacja za dwieście osiemdziesiąt siedem milionów złotych; kładkę zastąpi tunel z windami.",
        "Kiedyś ta kolej miała tu bardzo konkretne przełożenie na pracę. W tysiąc dziewięćset pięćdziesiątym drugim zdecydowano o budowie Państwowych Zakładów Zbożowych, a w latach pięćdziesiątych stanął elewator na trzydzieści dwa i pół tysiąca ton. Pracowało tu około trzystu osób, wychodziło stąd siedemdziesiąt pięć ton kaszy i trzysta ton mąki dziennie.",
        "Zakłady sprywatyzowano w tysiąc dziewięćset dziewięćdziesiątym siódmym, działalność ustała w dwa tysiące, upadłość ogłoszono w dwa tysiące dziewiątym, a w dwa tysiące dwudziestym pierwszym elewator rozebrano. Została jedna rzecz i jest ona, moim zdaniem, najlepszym, co można było z tym zrobić: dawni pracownicy założyli Muzeum Zakładów Zbożowych i prowadzą je do dziś, pod numerem dziewiętnastym w Kozłowie.",
        "Dzisiejsza gmina jest rolnicza — pola zajmują siedemdziesiąt procent powierzchni, a w rolnictwie pracuje czterdzieści cztery procent zatrudnionych — i wyludnia się szybko: od dwa tysiące drugiego roku ubyło tu ponad trzynaście procent mieszkańców, a w Wolicy i Przysiece ponad dwadzieścia. Kanalizacji zbiorczej nie ma wcale, gazu sieciowego praktycznie też nie.",
        "Piszę o tym wprost, bo to tłumaczy, jak wyglądają tutejsze kuchnie: opalane, samodzielne, przywykłe do tego, że wszystko robi się u siebie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Kozłów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa. Gmina jest niewielka i przejechanie jej zajmuje kilkanaście minut, a dojazd wszędzie jest bez dopłaty. Uprzedzę tylko, że nazwy Wolica, Rogów i Przybysławice powtarzają się w Małopolsce w kilku miejscach — przy umawianiu wystarczy, że dodasz „gmina Kozłów”.",
        "Jeśli masz gospodarstwo, powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się do prac polowych, nie odwrotnie. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Kozłów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, który radzi sobie sam",
      paragraphs: [
        "Kilka liczb, które razem układają się w bardzo konkretny obraz. Kanalizacja zbiorcza w tej gminie: zero procent. Gaz sieciowy: niecały procent. Zakład przemysłowy: żaden, od dwudziestu pięciu lat. Pola uprawne: siedemdziesiąt procent powierzchni.",
        "To jest opis domu, który radzi sobie sam. Woda z własnego ujęcia albo z wodociągu, ścieki do przydomowej oczyszczalni, ogrzewanie własne, warzywa z ogrodu, mięso często też z własnego. Taki dom nie kupuje wygody — on ją sobie organizuje.",
        "Mówię o tym, bo w takim domu argument „zaoszczędzisz czas” brzmi płytko, jeśli nie powie się, na czym konkretnie. Więc powiem konkretnie: danie jednogarnkowe wstawia się i wychodzi w pole. Gotuje się bez nikogo, samo się wyłącza, nie przypala i czeka. W gospodarstwie, gdzie dzień zaczyna się przed świtem i nie ma stałej pory obiadu, to jest różnica między obiadem ugotowanym a odpuszczonym.",
        "Druga rzecz to przerabianie własnych zbiorów. Powidła, przeciery, zupy do zamrożenia, sosy, pasty, kiszonki do słoików — to i tak się w takim domu dzieje, każdej jesieni. Chodzi tylko o to, żeby zajmowało pół dnia zamiast całego, i żeby nie trzeba było przy tym stać i mieszać, żeby nie przywarło.",
        "Trzecia rzecz to wypieki i ciasto. Chleb, kluski, pierogi, ciasto drożdżowe — wyrabianie jest w kuchni czynnością codzienną, a nie odświętną, i to właśnie ona zabiera najwięcej siły w rękach. Ciasto wyrabia się w naczyniu samo.",
        "I na koniec uczciwie, czego to nie zrobi: nie zastąpi wprawy, nie ugotuje bez Ciebie i nie sprawi, że gospodarstwo będzie mniej pracochłonne. Zabiera jedną konkretną rzecz — stanie przy garnku.",
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
    heading: "Kozłów i gotowanie — mąka, kasza i muzeum po elewatorze",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu z gminy Kozłów na ministerialnej Liście Produktów Tradycyjnych ani udokumentowanej potrawy, którą można by nazwać wyłącznie tutejszą. Mogłabym wpisać w to miejsce coś ogólnie małopolskiego i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "Za to sam związek tej gminy z jedzeniem jest wyjątkowo konkretny, tylko trzeba go opowiedzieć w czasie przeszłym. Przez pół wieku stał tutaj elewator na trzydzieści dwa i pół tysiąca ton zboża, a zakład wypuszczał dziennie siedemdziesiąt pięć ton kaszy i trzysta ton mąki. To znaczy, że przez Kozłów przechodziło zboże z całej okolicy i wyjeżdżało stąd koleją jako mąka.",
      "Elewatoru już nie ma — rozebrano go w dwa tysiące dwudziestym pierwszym roku. Ale dawni pracownicy założyli w Kozłowie Muzeum Zakładów Zbożowych i to jest jedna z tych inicjatyw, które szczerze lubię: nikt tego nie zlecił ani nie dofinansował z programu, po prostu ludzie nie chcieli, żeby po pięćdziesięciu latach pracy nie zostało nic.",
      "Dla kuchni ma to zresztą przełożenie bardzo praktyczne, bo tutejsza kuchnia jest dokładnie taka, jak to zboże: mączna i kaszana. Kluski, pierogi, chleb, kasza, placki, zacierki. Wszystko proste, wszystko pracochłonne, wszystko oparte na wyrabianiu i rozdrabnianiu.",
      "I dokładnie w tym miejscu urządzenie coś wnosi. Ciasto wyrabia się samo — na kluski, na pierogi, na chleb. Kasza gotuje się bez pilnowania i nie przywiera. Zupy z zacierkami czy krupnik nie wymagają stania nad garnkiem. To nie jest zmiana tej kuchni. To jest odzyskanie godzin, które ona zabiera.",
    ],
  },

  districtsHeading: "Gdzie w gminie Kozłów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwunastu sołectw, bez żadnej dopłaty za odległość: Kozłowa, Przysieki, Kępia, Wolicy, Bogdanowa, Bryzdzyna, Kamionki, Karczowic, Marcinowic, Przybysławic, Rogowa i Wierzbicy.",
    "Sam Kozłów liczy nieco ponad dziewięćset mieszkańców, czyli około jednej piątej gminy, a więc siedziba jest tu największą miejscowością — co w tej okolicy wcale nie jest regułą. Dalej są Przysieka z pięcioma setkami osób i Kępie z czterema i pół. Cała gmina to niecałe cztery i pół tysiąca ludzi na osiemdziesięciu sześciu kilometrach kwadratowych.",
    "Warto wiedzieć jedną rzecz o tutejszej geografii: stacja kolejowa nazywa się Kozłów, ale fizycznie leży na gruntach Przysieki. To dziedzictwo po pierwotnej nazwie stacji, którą przy otwarciu w tysiąc osiemset dziewięćdziesiątym drugim roku ochrzczono właśnie Przysieką. W gminie są też dwa rezerwaty przyrody: stepowa Biała Góra, najwyższy punkt gminy, i grądowe Kępie na Wyżynie Miechowskiej.",
    "Dojazd: ze stacji Kozłów jeżdżą pociągi Polregio i Kolei Małopolskich w stronę Krakowa, Kielc i Sosnowca — pociągi dalekobieżne się tu nie zatrzymują. Czasu przejazdu do Krakowa świadomie nie podaję, bo dane w wyszukiwarkach są niespójne, a stacja jest w przebudowie; sprawdź aktualny rozkład. Samochodem jest stąd do Krakowa około sześćdziesięciu kilometrów, czyli nieco ponad godzinę.",
  ],
  districts: [
    "Kozłów",
    "Przysieka",
    "Kępie",
    "Wolica",
    "Bogdanów",
    "Bryzdzyn",
    "Kamionka",
    "Karczowice",
    "Marcinowice",
    "Przybysławice",
    "Rogów",
    "Wierzbica",
  ],

  nearbyHeading: "Charsznica, Książ Wielki i Miechów też są na mojej trasie",
  nearbyParagraphs: [
    "Do Charsznicy i Książa Wielkiego mam stąd najbliżej, do Miechowa i Słaboszowa trochę dalej. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Gmina leży na północnym skraju Małopolski, przy granicy ze świętokrzyskim, więc część spraw załatwia się tu równie często w Jędrzejowie co w Miechowie. Dla umówienia prezentacji to bez znaczenia — przyjeżdżam tak samo.",
  ],
  nearbyTowns: [
    "Charsznica",
    "Książ Wielki",
    "Miechów",
    "Słaboszów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Kozłów", "w powiecie miechowskim"),

  faq: [
    {
      question: "Czy to Kozłów w Małopolsce, czy w świętokrzyskim?",
      answer:
        "W Małopolsce, w powiecie miechowskim, przy samej granicy ze świętokrzyskim. Kozłowów jest w Polsce kilka — w świętokrzyskim, śląskim, lubelskim, wielkopolskim i mazowieckim — a w warmińsko-mazurskim jest jeszcze gmina Kozłowo. Ten jest ten, w którym krzyżują się linie kolejowe i który sąsiaduje z Charsznicą i Książem Wielkim.",
    },
    ...faqWspolne("w gminie Kozłów"),
    {
      question: "Czy stacja Kozłów jest w samym Kozłowie?",
      answer:
        "Nie, i to ciekawostka, którą warto znać przy umawianiu. Stacja nazywa się Kozłów, ale fizycznie leży na gruntach sąsiedniej wsi Przysieka — przy otwarciu w tysiąc osiemset dziewięćdziesiątym drugim roku nazywała się zresztą właśnie Przysieka. Zatrzymują się na niej pociągi Polregio i Kolei Małopolskich; dalekobieżne przejeżdżają bez postoju.",
    },
    {
      question: "Nie mamy gazu ani kanalizacji. Czy to problem dla urządzenia?",
      answer:
        "Żaden. Thermomix potrzebuje wyłącznie gniazdka elektrycznego — nie gazu, nie podłączenia do wody, nie odpływu. Wodę nalewa się do naczynia, a po gotowaniu myje się je w zlewie jak każdy garnek. W gminie, w której kanalizacji zbiorczej praktycznie nie ma, to bywa realne pytanie, więc odpowiadam wprost: wystarczy prąd.",
    },
  ],

  geo: { lat: 50.4786, lng: 20.0192 },
};
