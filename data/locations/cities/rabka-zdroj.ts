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
 * RABKA-ZDRÓJ — GMINA MIEJSKO-WIEJSKA w powiecie nowotarskim.
 * 16 485 mieszkańców (31.12.2024), 69,2 km².
 *
 * OŚ STRONY: SÓL. Nie „uzdrowisko dziecięce” w ogóle, tylko jedna
 * konkretna, weryfikowalna rzecz, z której to uzdrowisko wyrosło —
 * solanka jodowo-bromowa i eksploatacja soli udokumentowana od XIII w.
 * Rozłączna z każdą inną stroną w projekcie.
 *
 * ⚠️ NAJWAŻNIEJSZE: RABKA NIE LEŻY NA PODHALU. To Beskid Wyspowy
 * i Gorce, etnograficznie ZAGÓRZANIE. NIE STOSOWAĆ FRAZEOLOGII
 * PODHALAŃSKIEJ ani góralskiej gwary z Podhala.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — SÓL: lata 30. XIII w. wojewoda krakowski Teodor Gryfita upoważnia
 *   cystersów do osadnictwa i eksploatacji soli; zapis „Sal in Rabschyca”
 *   w dokumencie Bolesława Wstydliwego, odnotowany u Długosza,
 * — 1858 — analiza chemiczna solanek, dr Fryderyk Skobel: wysokie
 *   stężenia jodu i bromu,
 * — 1861 — oczyszczenie zasypanych źródeł: Maria, Rafaela, Krakus,
 *   Kazimierz, Helena,
 * — 1864 — oficjalne otwarcie uzdrowiska, Julian Zubrzycki,
 * — 1889 — Zubrzycki przekazuje parcelę pod kolonię dla dzieci;
 *   stąd późniejsza specjalizacja dziecięca,
 * — KURACJUSZE: 1914 — 6 729; 1934 — 20 339; 1938 — 27 452;
 *   1939 — 30 153,
 * — 21 WRZEŚNIA 1953 R. — PRAWA MIEJSKIE; 1999 — zmiana nazwy
 *   na Rabka-Zdrój,
 * — 1 CZERWCA 1996 R. — tytuł „Miasto Dzieci Świata”, nadany WSPÓLNIE
 *   przez Kapitułę Orderu Uśmiechu, UNESCO i Wojewodę Nowosądeckiego.
 *   ⚠️ NIE PISAĆ „tytuł UNESCO” — to skrót myślowy krążący w sieci,
 * — 3 SOŁECTWA: Chabówka, Ponice, Rdzawka (plus miasto Rabka-Zdrój),
 * — REGON: 2 220 podmiotów (2024), w tym 1 724 osoby fizyczne,
 * — MUZEUM IM. WŁADYSŁAWA ORKANA: założone 1936, mieści się
 *   w drewnianym kościele św. Marii Magdaleny z 1606 r., ok. 5000
 *   eksponatów z terenu Zagórzan, organy z 1778 r.,
 * — KGW: Stowarzyszenie Koło Gospodyń Wiejskich w Chabówce,
 *   Koło Gospodyń Wiejskich w Rdzawce,
 * — ŚWIĘTO RABCZAŃSKIEJ SOLANKI — 19 lipca 2026 r., amfiteatr
 *   przy ul. Chopina, organizator Uzdrowisko Rabka S.A.,
 * — DOŻYNKI GMINNE — 15 sierpnia, rotacyjnie w sołectwach,
 * — KOLEJ: Chabówka to węzeł trzech linii — 98 (Sucha Beskidzka),
 *   99 (Zakopane), 104 (Nowy Sącz). Linia transwersalna otwarta
 *   16.12.1884, odcinek do Zakopanego 25.10.1899,
 * — SKANSEN TABORU KOLEJOWEGO W CHABÓWCE: otwarty 11.06.1993,
 *   od 2003 w strukturach PKP Cargo,
 * — DROGI: skrzyżowanie DK47 (zakopianka) i DK28.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — BEZROBOCIA, WYNAGRODZEŃ I STRUKTURY ZATRUDNIENIA. Serwis
 *   statystyczny podaje IDENTYCZNE wartości dla wszystkich gmin
 *   powiatu — to dane POWIATOWE, nie gminne. NIE CYTOWAĆ,
 * — LICZBY ZATRUDNIONYCH W UZDROWISKU. Nieujawniona,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — RUCHU PASAŻERSKIEGO NA LINII 104 DO NOWEGO SĄCZA.
 *   Zawieszony 22.03.2004, stan po modernizacji niepewny.
 *   NIE PISAĆ „pociągiem do Nowego Sącza”.
 *
 * PUŁAPKI:
 * — RABA WYŻNA TO INNA GMINA (plik `raba-wyzna.ts`), sąsiadująca,
 * — CHABÓWKA JEST SOŁECTWEM TEJ GMINY, nie gminy Raba Wyżna,
 * — UZDROWISKO RABKA S.A. to spółka Skarbu Państwa — nie mylić
 *   z prywatnym uzdrowiskiem w Szczawnicy,
 * — SOLANKA JEST LECZNICZA, NIE KUCHENNA. Nie sugerować, że się nią
 *   soli obiad.
 */

export const RABKA_ZDROJ: CityContent = {
  slug: "rabka-zdroj",
  h1: "Thermomix Rabka-Zdrój – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Rabka-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Rabce-Zdroju: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do miasta i sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rabka-Zdrój — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Rabce-Zdroju. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Rabki-Zdroju, Chabówki, Ponic i Rdzawki przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rabce-Zdroju – jak wygląda prezentacja?",
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
      heading: "Wszystko zaczęło się od soli",
      paragraphs: [
        "Rabka jest dziś znana jako uzdrowisko dziecięce, ale to jest koniec historii, nie jej początek. Początkiem była sól. Już w latach trzydziestych trzynastego wieku wojewoda krakowski Teodor Gryfita upoważnił cystersów do osadnictwa i eksploatacji soli w tej okolicy, a w dokumencie Bolesława Wstydliwego pojawia się zapis o soli w Rabszczycy, odnotowany później przez Długosza.",
        "Przez kilkaset lat była to więc po prostu wieś, w której wydobywało się i warzyło sól. Zmiana przyszła w tysiąc osiemset pięćdziesiątym ósmym roku, kiedy doktor Fryderyk Skobel przebadał tutejsze solanki i stwierdził w nich bardzo wysokie stężenie jodu i bromu.",
        "Trzy lata później oczyszczono zasypane źródła — pięć, każde z własnym imieniem: Maria, Rafaela, Krakus, Kazimierz i Helena. W tysiąc osiemset sześćdziesiątym czwartym Julian Zubrzycki otworzył uzdrowisko. Ćwierć wieku potem przekazał parcelę pod kolonię dla chorych dzieci i od tego zaczęła się specjalizacja, z której miasto jest znane do dziś.",
        "Skala rosła szybko. W tysiąc dziewięćset czternastym roku przyjechało tu niecałe siedem tysięcy kuracjuszy, w tysiąc dziewięćset trzydziestym dziewiątym ponad trzydzieści tysięcy. Prawa miejskie Rabka dostała dopiero w tysiąc dziewięćset pięćdziesiątym trzecim, a człon „Zdrój” doszedł do nazwy w tysiąc dziewięćset dziewięćdziesiątym dziewiątym.",
        "Jest jeszcze jeden tytuł, przy którym warto być precyzyjnym, bo krąży w skróconej i mylącej wersji. Pierwszego czerwca tysiąc dziewięćset dziewięćdziesiątego szóstego roku Rabka otrzymała miano Miasta Dzieci Świata, ale nadały je wspólnie trzy podmioty: Kapituła Orderu Uśmiechu, UNESCO i ówczesny wojewoda nowosądecki. To nie był sam tytuł UNESCO, choć często się tak pisze.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rabce-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o miasto, czy o jedno z trzech sołectw — Chabówkę, Ponice albo Rdzawkę. Od tego zależy tylko planowanie trasy, bo dopłaty za dojazd nie ma nigdzie.",
        "Jeśli pracujesz w uzdrowisku albo w turystyce, wspomnij o tym od razu. Wasze grafiki bywają zmianowe i wtedy najłatwiej znaleźć termin poza szczytem sezonu albo w środku tygodnia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rabce-Zdroju"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kuchnia w mieście, które żyje z gości",
      paragraphs: [
        "W Rabce zarejestrowanych jest ponad dwa tysiące dwieście podmiotów gospodarczych, z czego prawie tysiąc siedemset to działalności osób fizycznych. Do tego dochodzi uzdrowisko z ponad sześciuset miejscami noclegowymi. To miasto, w którym bardzo wiele domów pracuje przy gościach.",
        "Praca przy gościach ma jedną cechę, którą znają wszyscy, którzy ją wykonują: nie da się jej przewidzieć co do godziny. Ktoś wraca z popołudniowej zmiany, ktoś inny sprząta pokoje rano, a w sezonie dzień rozciąga się od świtu do wieczora. Domowy obiad zwykle przegrywa z tym rozkładem.",
        "Najbardziej praktyczna rzecz jest tu prosta. Danie jednogarnkowe wstawia się i wychodzi z domu — gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie przypala się i nie stygnie w garnku od południa.",
        "Druga to gotowanie z zapasem. Podwójna porcja zupy, sos na kilka dni, pasta kanapkowa, chleb — zrobione seriami w jednym naczyniu, w wolne przedpołudnie. W sezonie to bywa jedyny sposób, żeby w domu w ogóle było ciepłe jedzenie.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek inny, kto akurat jest w domu. Nie trzeba do tego wprawy ani obecności tej jednej osoby, która zwykle stoi przy kuchni.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Rabka i gotowanie — sól, ale nie ta do garnka",
    paragraphs: [
      "Zacznę od zastrzeżenia, żeby nie robić nieporozumienia. Rabczańska solanka jest lecznicza, jodowo-bromowa, i pije się ją w pijalni albo wdycha w inhalacjach. Nie jest to sól, którą się soli obiad, i nie będę udawać, że jest.",
      "Ale sam fakt, że to miejsce od siedmiuset lat kręci się wokół soli, mówi coś o tutejszej kuchni. Sól to najstarszy sposób przechowywania jedzenia, jaki znamy — starszy niż lodówka i niż mrożenie. Kiszenie kapusty i ogórków, peklowanie, solenie masła i sera to wszystko jedna rodzina domowych praktyk, które tu nigdy nie wyszły z użycia.",
      "Powiem też uczciwie, czego nie znalazłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie. Za to są dwa działające koła gospodyń, w Chabówce i w Rdzawce, dożynki gminne piętnastego sierpnia i lipcowe Święto Rabczańskiej Solanki z degustacjami w amfiteatrze.",
      "Jedna rzecz, o której warto pamiętać, pisząc o Rabce: to nie jest Podhale. To Beskid Wyspowy i Gorce, a etnograficznie ziemia Zagórzan — co widać choćby w Muzeum imienia Orkana, założonym w tysiąc dziewięćset trzydziestym szóstym roku w drewnianym kościele z tysiąc sześćset szóstego, gdzie zebrano około pięciu tysięcy eksponatów właśnie zagórzańskich. Kuchnia też jest tu bliższa beskidzkiej niż podhalańskiej.",
      "Dla urządzenia najciekawsze jest to, co robi się seriami. Kiszonki, przetwory, ciasta, zupy na zapas — a więc dokładnie ta część roboty, która polega na rozdrabnianiu, siekaniu i mieszaniu. Czego nie zrobi, mówię wprost: nie ukisi za Ciebie beczki kapusty i nie zastąpi wprawy. Zabiera tę część, która jest tylko czasem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Rabka-Zdrój dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzech sołectw: Chabówki, Ponic i Rdzawki. Bez żadnej dopłaty za odległość.",
    "Gmina liczy około szesnastu i pół tysiąca mieszkańców na sześćdziesięciu dziewięciu kilometrach kwadratowych, z czego ponad czterdzieści procent to lasy. Miasto leży na wysokości od pięciuset do sześciuset metrów nad poziomem morza.",
    "Chabówka jest tu miejscem osobnym i warto o tym wiedzieć. To węzeł kolejowy, w którym schodzą się trzy linie: od Suchej Beskidzkiej, od Zakopanego i od Nowego Sącza. Pierwszy pociąg przyjechał tu szesnastego grudnia tysiąc osiemset osiemdziesiątego czwartego roku, a odcinek do Zakopanego otwarto w tysiąc osiemset dziewięćdziesiątym dziewiątym. Od tysiąc dziewięćset dziewięćdziesiątego trzeciego działa tam skansen taboru kolejowego.",
    "Świadomie nie podaję połączeń kolejowych do Nowego Sącza — ruch pasażerski na tej linii zawieszono w dwa tysiące czwartym roku, a linia była później modernizowana i nie chcę podawać rozkładu, którego nie sprawdziłam. Samochodem: w Rabce krzyżują się zakopianka i droga z Bielska-Białej do Nowego Sącza.",
  ],
  districts: [
    "Rabka-Zdrój — centrum i park zdrojowy",
    "Rabka-Zdrój — pozostałe osiedla",
    "Chabówka",
    "Ponice",
    "Rdzawka",
  ],

  nearbyHeading: "Raba Wyżna, Nowy Targ i Mszana Dolna też są na mojej trasie",
  nearbyParagraphs: [
    "Od razu rozróżnienie, bo bywa mylone: Rabka-Zdrój to nie Raba Wyżna. To dwie sąsiadujące, ale osobne gminy — dojeżdżam do obu.",
    "Dalej są Nowy Targ, Jordanów, Spytkowice i Bystra-Sidzina. Do żadnej z tych gmin nie doliczam kosztu dojazdu, a przy umawianiu wystarczy adres.",
  ],
  nearbyTowns: [
    "Raba Wyżna",
    "Nowy Targ",
    "Jordanów",
    "Bystra-Sidzina",
    "Zawoja",
    "Kraków",
  ],

  about: blokOMnie("do Rabki-Zdroju", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Mieszkam w Chabówce albo Rdzawce. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Chabówka, Ponice i Rdzawka to sołectwa gminy Rabka-Zdrój i traktuję je dokładnie tak samo jak samo miasto. Przy umawianiu podaj tylko nazwę miejscowości, żebym dobrze rozplanowała trasę.",
    },
    ...faqWspolne("w Rabce-Zdroju"),
    {
      question: "Wynajmuję pokoje gościom. Kiedy da się umówić?",
      answer:
        "Najlepiej poza szczytem sezonu albo w środku tygodnia, ale dopasowuję się do Waszego grafiku, także wieczorami. Powiedz po prostu, kiedy masz dwie spokojne godziny. Jeśli gotujesz też dla gości, powiedz o tym — pokażę wtedy raczej gotowanie w większych porcjach niż jeden obiad na dwie osoby.",
    },
  ],

  geo: { lat: 49.605, lng: 19.9667 },
};
