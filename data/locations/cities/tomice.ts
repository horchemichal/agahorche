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
 * TOMICE — gmina wiejska, 8 303 mieszkańców (GUS, 31.12.2024),
 * 41,5 km², powiat wadowicki. Sześć sołectw.
 *
 * OŚ STRONY: DWA WPISY NA LIŚCIE PRODUKTÓW TRADYCYJNYCH MRiRW.
 * To jest pierwsza gmina w całym dotychczasowym zasięgu serwisu,
 * która ma cokolwiek na tej liście — a ma dwie rzeczy naraz.
 * Przez sześćdziesiąt kilka stron pisałam „ta gmina nie ma wpisu
 * na Liście Produktów Tradycyjnych”. Tutaj wreszcie mogę napisać
 * coś odwrotnego i to jest cała oś tej strony.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — RADOCZAŃSKI JABŁECZNIK — wpis na LPT 2 marca 2016, kategoria
 *   wyroby piekarnicze i cukiernicze. Zgłaszający: Zespół Szkół
 *   Centrum Kształcenia Ustawicznego w Radoczy. Trójwarstwowe
 *   ciasto: kruchy spód, nadzienie jabłkowe i KONFITURA
 *   Z PŁATKÓW RÓŻY. Legenda rodzinna: przepis od prababki,
 *   kucharki w Galicji,
 * — KŁADZIONKI ZIEMNIACZANE WITANOWICKIE — wpis na LPT
 *   22 września 2016, kategoria gotowe dania i potrawy.
 *   Zgłaszający: KOŁO GOSPODYŃ WIEJSKICH W WITANOWICACH.
 *   Placek z ugotowanych ziemniaków z cebulą, mąką, jajami, solą
 *   i pieprzem; owalny, ok. 10 cm szerokości i 2 cm wysokości;
 *   z zewnątrz złocistobrązowe, w środku miękkie. Podawane
 *   z kwaśnym mlekiem, śmietaną lub surówkami, także do mięs
 *   w sosie,
 * — obie potrawy zgłoszone ODDOLNIE (szkoła i koło gospodyń),
 *   obie w tym samym roku. To jest sedno: nie marka turystyczna,
 *   tylko dwie grupy ludzi, którym się chciało,
 * — KGW W TOMICACH założone 13 listopada 1932 r. przez Wiktorię
 *   Sapińską, kierowniczkę tutejszej szkoły podstawowej.
 *   85-lecie obchodzono 25 listopada 2017, obecnych 65 członkiń.
 *   W TEKŚCIE PISZĘ „od 1932 roku”, NIE wyliczam wieku,
 * — SOŁECTWA (6): Lgota, Radocza, Tomice, Witanowice, Woźniki,
 *   Zygodowice,
 * — RADOCZA: drewniany kościół z 1535 r. (konstrukcja zrębowa,
 *   rokokowa polichromia, XVIII-wieczna Pieta); parafia od 1356 r.;
 *   SZKOŁA WIKLINIARSKA działała w latach 1921–1927,
 * — WITANOWICE: pierwsza wzmianka 1317 r.; w rejestrach
 *   świętopietrza 1325–1327; w XVI–XVII w. kościół funkcjonował
 *   jako zbór kalwiński; drewniany kościół z 1663 r. spłonął
 *   w 1963 r., ocalała XVI-wieczna figura św. Anny,
 * — DEMOGRAFIA: saldo migracji wewnętrznych +85 przy przyroście
 *   naturalnym +5. Gmina rośnie prawie wyłącznie napływem.
 *   Mediana wieku 38,9. Mieszkania 2 445, oddane w 2024: 39,
 *   średnia powierzchnia 105,9 m². REGON 1 039, budownictwo 24,2%,
 * — Rodzinny Rajd Rowerowy — 23. edycja 19 maja 2024. W TEKŚCIE
 *   NIE PODAJĘ numeru bieżącej edycji, bo go nie potwierdzono,
 * — gmina należy do Doliny Karpia (marka lokalna / LGD), leży
 *   w zasięgu obszaru Natura 2000 „Dolina Dolnej Skawy”.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DWÓR W RADOCZY. W ewidencji figuruje „budynek dawnego dworu”,
 *   ale nic nie wskazuje na działający obiekt czy park do
 *   odwiedzenia. Nie piszę o „zabytkowym dworze z parkiem”,
 * — WIKLINIARSTWO JAKO ŻYWE RZEMIOSŁO. Potwierdzona jest tylko
 *   szkoła z lat 1921–1927 i plantacje wikliny w krajobrazie.
 *   Wymieniam szkołę jako fakt historyczny, nie sugeruję ciągłości,
 * — NUMER DROGI KRAJOWEJ i czas dojazdu z Krakowa. Nie
 *   potwierdzone. Piszę o sąsiedztwie Wadowic i o kierunkach,
 *   bez numerów i minut,
 * — ZBÓR KALWIŃSKI w Witanowicach. Fakt historyczny, ale to
 *   religia i konflikt wyznaniowy — nie mój temat na stronie
 *   o gotowaniu. Pomijam,
 * — POŻAR KOŚCIOŁA w 1963 r. Nie dotykam.
 *
 * PUŁAPKI:
 * — TOMICE NIE SĄ objęte unijnym oznaczeniem ChNP „Karp zatorski”.
 *   Obszar chroniony to Zator, Przeciszów i Spytkowice. Tomice są
 *   w Dolinie Karpia jako marce lokalnej / obszarze LGD — to co
 *   innego. NIE MYLIĆ TYCH DWÓCH RZECZY,
 * — gmina sama o sobie pisze nieaktualnie (7 853 mieszkańców,
 *   „blisko 400 podmiotów”) — rzeczywistość to 8 303 i 1 039.
 *   Nie cytować autoopisu gminy jako danych,
 * — Rodzinny Rajd Rowerowy: 23. edycja była w 2024. NIE
 *   ekstrapolować na 2026,
 * — kładzionki to NIE placki ziemniaczane w andrychowskim sensie.
 *   Tam surowe ziemniaki i patelnia, tu GOTOWANE ziemniaki
 *   i inna konsystencja. Nie mieszać.
 */

export const TOMICE: CityContent = {
  slug: "tomice",
  h1: "Thermomix Tomice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Tomice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Tomice: bezpłatna prezentacja TM7 u Ciebie w kuchni — Tomice, Radocza, Witanowice, Woźniki. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tomice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Tomice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Tomice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich sześciu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Tomice, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Tomice – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Tomicach, jak w Radoczy, Witanowicach czy Zygodowicach.",
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
      heading: "Jedyna gmina w okolicy z dwoma daniami w rejestrze",
      paragraphs: [
        "Napiszę to od razu, bo to najważniejsze zdanie na tej stronie i sama byłam zaskoczona, kiedy je sprawdziłam. Gmina Tomice ma dwa wpisy na ministerialnej Liście Produktów Tradycyjnych. Nie jeden — dwa. Żadna inna gmina, do której dotąd jeżdżę z Thermomixem, nie ma na tej liście ani jednego.",
        "Pierwszy to radoczański jabłecznik, wpisany w marcu dwa tysiące szesnastego roku. Drugi to kładzionki ziemniaczane witanowickie, wpisane pół roku później. I to jest w tym najciekawsze: obu zgłoszeń nie zrobił żaden urząd ani agencja promocji. Jabłecznik zgłosiła szkoła z Radoczy. Kładzionki zgłosiło koło gospodyń wiejskich z Witanowic.",
        "Ta gmina nie ma zamku, uzdrowiska ani sanktuarium. Nie ma nawet własnej drogi krajowej w folderze. Ma za to dwie potrawy, które ktoś tutaj uznał za warte opisania, spisania i przepchnięcia przez ministerialną procedurę — a to jest praca, której nikt nie robi dla poklasku.",
        "Warto przy tym wiedzieć, że koło gospodyń w Tomicach działa od tysiąc dziewięćset trzydziestego drugiego roku. Założyła je Wiktoria Sapińska, kierowniczka tutejszej szkoły podstawowej. Kiedy w dwa tysiące siedemnastym obchodzono osiemdziesięciopięciolecie, na sali było sześćdziesiąt pięć członkiń.",
        "Drugi wątek jest zupełnie inny i dotyczy dzisiejszego dnia. Tomice rosną — i to prawie wyłącznie dlatego, że ludzie się tu wprowadzają. Saldo migracji jest wyraźnie dodatnie, przyrost naturalny ledwie na plusie, średni wiek mieszkańca niecałe trzydzieści dziewięć lat, a przeciętne mieszkanie ma ponad sto pięć metrów. To znaczy: nowe domy, młode rodziny, sąsiedztwo Wadowic tuż za miedzą.",
        "Praktycznie mam więc w tej gminie dwa zupełnie różne rodzaje spotkań. Jedne w domach, gdzie kładzionki robi się od zawsze i nie potrzeba mnie do niczego poza pokazaniem, co da się skrócić. Drugie u ludzi, którzy wprowadzili się dwa lata temu i dopiero układają sobie kuchnię od nowa. Jedni i drudzy pytają o co innego i to jest w tej gminie najciekawsze.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Tomice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w którym sołectwie mieszkasz. Gmina jest niewielka i wszędzie mam blisko, ale Radocza, Witanowice i Zygodowice leżą w różnych stronach, więc od tego zależy godzina, o której realnie u Ciebie jestem.",
        "Jeśli dopiero się tu wprowadziliście i kuchnia nie jest jeszcze skończona — to żaden problem. Potrzebuję wolnego kawałka blatu i gniazdka, reszta może być w budowie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Tomice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Nowy dom, nowa kuchnia, stare przepisy",
      paragraphs: [
        "W gminie, do której ludzie się wprowadzają, częsty jest układ, o którym rzadko się mówi: dom jest nowy, kuchnia dopiero się dociera, a przepisy przyjeżdżają z domu rodzinnego, czasem z zupełnie innej części Polski. Pierwsze lata to układanie tego w jedną całość.",
        "Praktyczne bywa tu przede wszystkim to, że przepis prowadzi krok po kroku i nie trzeba pamiętać proporcji ani pilnować czasu. Osoba, która wcześniej gotowała rzadko albo tylko na wakacjach u babci, jest w stanie zrobić porządny obiad od pierwszego tygodnia — a to zwykle jest ten moment, w którym gotowanie w nowym domu albo się zaczyna, albo nie zaczyna wcale.",
        "Druga rzecz to gotowanie większą partią. Zupa na dwa dni, sos do zamrożenia, ciasto na pierogi, pasta kanapkowa, chleb — da się to robić seriami, w jednym naczyniu, bez rozstawiania połowy kuchni. W domu, w którym trwa jeszcze wykańczanie i nic nie jest na swoim miejscu, to znaczy mniej bałaganu, a nie tylko mniej czasu.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować — i w gminie z tak niską średnią wieku zdarza się to częściej niż gdzie indziej.",
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
    heading: "Kładzionki i jabłecznik — dwa dania z ministerialnej listy",
    paragraphs: [
      "Kładzionki ziemniaczane witanowickie trafiły na Listę Produktów Tradycyjnych we wrześniu dwa tysiące szesnastego roku, zgłoszone przez koło gospodyń wiejskich z Witanowic. To placki z ugotowanych — nie surowych — ziemniaków, z cebulą, mąką, jajami, solą i pieprzem. Owalne, około dziesięciu centymetrów szerokości i dwóch wysokości. Z wierzchu złocistobrązowe, w środku miękkie i jednolite. Podaje się je z kwaśnym mlekiem, ze śmietaną, z surówką albo do mięsa w sosie.",
      "To ważne rozróżnienie, bo kładzionek nie należy mylić z plackami ziemniaczanymi, które robi się z surowych ziemniaków na patelni. Tu punktem wyjścia są ziemniaki ugotowane i cała konsystencja jest inna. Kto je jadł, wie od razu; kto nie jadł, zwykle myśli, że to to samo.",
      "Radoczański jabłecznik wszedł na listę pół roku wcześniej, w marcu tego samego roku, a zgłosiła go szkoła z Radoczy. Jest trójwarstwowy: kruchy spód, nadzienie jabłkowe i — to najciekawsze — konfitura z płatków róży. Według rodzinnej opowieści przepis pochodzi od prababki, kucharki jeszcze z czasów galicyjskich, która na Boże Narodzenie piekła strudel z jabłkami i różą.",
      "Powiem uczciwie, co w tych dwóch daniach urządzenie robi, a czego nie. Kładzionek nie usmaży — to patelnia i cierpliwość, i tak ma zostać. Ale ugotowanie ziemniaków, rozdrobnienie cebuli i połączenie masy to jest dokładnie ta część, przy której najłatwiej stracić przedpołudnie. Przy jabłeczniku jest odwrotnie: kruchy spód wyrabia się w kilkadziesiąt sekund bez ubrudzonego blatu, jabłka rozdrabnia się w jednym naczyniu, a konfitura z płatków róży gotuje się w stałej temperaturze bez pilnowania i bez przypalania.",
      "Wspomnę jeszcze o jednym, bo to rzadkość. Przez kilkadziesiąt stron o gminach Małopolski pisałam to samo zdanie: „ta gmina nie ma wpisu na Liście Produktów Tradycyjnych”. Tomice są pierwszą, przy której mogę napisać coś odwrotnego — i to dwa razy. Obie potrawy zgłosili ludzie stąd, nie żadna agencja promocji.",
    ],
  },

  districtsHeading: "Gdzie w gminie Tomice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu sołectw, bez żadnej dopłaty za odległość: Tomice, Radocza, Witanowice, Woźniki, Zygodowice i Lgota.",
    "Radocza jest drugą co do wielkości miejscowością gminy i ma najstarszy tutejszy zabytek — drewniany kościół z tysiąc pięćset trzydziestego piątego roku, z rokokową polichromią i osiemnastowieczną Pietą. Parafia istnieje tam od czternastego wieku. Ciekawostka, o której mało kto pamięta: w latach dwudziestych działała w Radoczy szkoła wikliniarska.",
    "Witanowice są jeszcze starsze — pierwsza wzmianka pochodzi z tysiąc trzysta siedemnastego roku. To stamtąd pochodzą kładzionki i to tamtejsze koło gospodyń zgłosiło je na ministerialną listę.",
    "Gmina leży w dolinie Skawy, na pograniczu Pogórza Wielickiego i Śląskiego, w wysokościach od dwustu czterdziestu do czterystu jedenastu metrów. Sąsiaduje bezpośrednio z Wadowicami, a stąd jest blisko zarówno w stronę Krakowa przez Skawinę, jak i w stronę Oświęcimia przez Zator.",
  ],
  districts: [
    "Tomice",
    "Radocza",
    "Witanowice",
    "Woźniki",
    "Zygodowice",
    "Lgota",
  ],

  nearbyHeading: "Wadowice, Spytkowice i Brzeźnica też są na mojej trasie",
  nearbyParagraphs: [
    "Wadowice mam stąd tuż za miedzą, do Spytkowic, Brzeźnicy i Wieprza też jest blisko, a Andrychów i Kalwaria Zebrzydowska są w zasięgu tego samego wyjazdu. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Gmina należy do Doliny Karpia i leży w obszarze Natura 2000 „Dolina Dolnej Skawy”, więc krajobraz jest tu stawowy — podobnie jak u sąsiadów w Spytkowicach. Jeśli mieszkasz na granicy gminy i nie masz pewności, po której stronie, po prostu zapytaj.",
  ],
  nearbyTowns: [
    "Wadowice",
    "Spytkowice",
    "Brzeźnica",
    "Wieprz",
    "Andrychów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Tomice", "w powiecie wadowickim"),

  faq: [
    {
      question: "Robię kładzionki od lat. Co mi tu doda Thermomix?",
      answer:
        "Przy samym smażeniu nic i nie będę udawać, że dodaje — to patelnia i Twoja wprawa. Pomaga wcześniej: ugotowanie ziemniaków, rozdrobnienie cebuli i połączenie masy dzieje się w jednym naczyniu i bez stania nad garnkiem. To akurat ta część, przez którą kładzionki robi się „jak będzie czas”, a nie w środku tygodnia. Na prezentacji chętnie zrobię to na Twoim przepisie, nie na moim.",
    },
    ...faqWspolne("w gminie Tomice"),
    {
      question: "Dopiero się wprowadziliśmy i kuchnia nie jest skończona. Da się?",
      answer:
        "Da się i zdarza mi się to w tej gminie często — Tomice rosną głównie napływem, więc trafiam do domów w trakcie wykańczania. Potrzebuję wolnego kawałka blatu i gniazdka, resztę przywożę ze sobą, łącznie z naczyniami. Reszta kuchni może spokojnie być w budowie.",
    },
    {
      question: "Czy mogę zaprosić panie z koła gospodyń?",
      answer:
        "Jak najbardziej i akurat w tej gminie to szczególnie sensowne — koło z Witanowic doprowadziło swoje kładzionki na ministerialną Listę Produktów Tradycyjnych, a koło w Tomicach działa od tysiąc dziewięćset trzydziestego drugiego roku. Powiedz przy umawianiu, ile osób będzie i gdzie się spotykacie, żebym dobrała przepisy, wzięła więcej składników i wiedziała, na jakim blacie pracujemy.",
    },
  ],

  geo: { lat: 49.8817, lng: 19.4356 },
};
