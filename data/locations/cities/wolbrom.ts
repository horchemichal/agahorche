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
 * WOLBROM — gmina miejsko-wiejska, 21 566 mieszkańców (GUS BDL,
 * 31.12.2025). Druga gmina powiatu olkuskiego.
 *
 * OŚ STRONY: targ czwartkowy nieprzerwanie od 1485 roku
 * plus koła gospodyń, które w lipcu 2026 wygrały konkurs kulinarny.
 * To najlepszy w pełni potwierdzony konkret kulinarny w całym powiecie
 * i nie ma powodu, żeby go nie postawić na środku.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ponad dwadzieścia sołectw. UWAGA: lista imienna UMiG daje 26,
 *   ale w innym miejscu ta sama strona sugeruje 31. DLATEGO W TEKŚCIE
 *   NIE PADA ŻADNA LICZBA — piszę „ponad dwadzieścia”. Do sprawdzenia
 *   w BIP przed ewentualną korektą,
 * — sołectwa wymienione w treści (z listy imiennej): Boża Wola,
 *   Brzozówka, Budzyń, Chełm, Chrząstowice, Dłużec, Domaniewice,
 *   Gołaczewy, Jeżówka, Kaliś, Kąpiele Wielkie, Kąpiołki, Lgota Wielka,
 *   Lgota Wolbromska, Łobzów, Miechówka, Podlesice II, Poręba Dzierżna,
 *   Poręba Górna, Strzegowa, Sulisławice, Wierzchowisko, Zabagnie,
 *   Załęże, Zarzecze, Zasępiec,
 * — największe sołectwa (dane 2018 — jedyne znalezione, więc w tekście
 *   bez liczb): Gołaczewy ~1 467, Zarzecze ~1 183, Łobzów z Wymysłowem
 *   ~1 068; najmniejsza Miechówka ~76 osób,
 * — TARG: przywilej Kazimierza Jagiellończyka z 1485 r., targ czwartkowy
 *   odbywa się do dziś,
 * — lokacja: 1311 Władysław Łokietek nadaje braciom Wolframowi
 *   i Hilaremu, mieszczanom krakowskim, prawo karczunku lasu;
 *   1327 nadanie własności; nazwa miasta od imienia Wolframa;
 *   1400 przywilej Władysława Jagiełły — kupcy z Krakowa do Wielkopolski
 *   musieli jechać przez Wolbrom; prawa miejskie odzyskane w 1931 r.,
 * — KONKURS: lipiec 2026, „Polska Smakuje” (dawna „Bitwa Regionów”) —
 *   I miejsce KGW z Wierzchowiska za danie „Śliwka w bielu i purpurze”,
 *   III miejsce KGW z Budzynia; awans do etapu wrześniowego,
 * — Dni Wolbromia 2026: 21–23 sierpnia, stadion WKS Przebój, dom kultury
 *   i baseny; catering przygotowywały lokalne koła gospodyń,
 * — przemysł gumowy: SumiRiko Poland (dawniej TRI Poland, od 1999,
 *   obecna nazwa od 2017) — komponenty gumowe dla motoryzacji, dostawy
 *   do 19 krajów, ponad 800 pracowników w Wolbromiu; FTT Wolbrom S.A. —
 *   taśmy przenośnikowe; FAGUMIT — węże gumowe i tworzywa sztuczne,
 * — położenie: ok. 20 km na północny wschód od Olkusza, ok. 40 km
 *   na północ od Krakowa; DW783 (Olkusz–Wolbrom–Miechów–Skalbmierz)
 *   i DW794 (na Kraków przez Trzyciąż i Skałę oraz na Pilicę);
 *   wybudowano trzy etapy obwodnicy Wolbromia,
 * — KOLEJ CZYNNA: stacja Wolbrom po modernizacji, nowy przystanek
 *   Wolbrom Zachodni, dodatkowo przystanki Gajówka, Jeżówka, Zarzecze,
 *   Chrząstowice; pociągi do Krakowa przez Tunel,
 * — krajobraz: północno-wschodni skraj Jury; skały i jaskinie jurajskie
 *   w rejonie Strzegowej, tam też ruiny zamku,
 * — mediana wieku 43,3 lat — najniższa spośród miast powiatu.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ZAGŁADA WOLBROMSKICH ŻYDÓW. W 1941 r. getto, ok. 8 000 osób,
 *   deportacje do Bełżca od września 1942, wojnę przeżyło ok. 300 osób.
 *   Przedwojenny Wolbrom był w większości żydowski. Nie dotykam w żadnej
 *   formie — ani wprost, ani przez „wielokulturową historię”, ani przez
 *   „dawnych mieszkańców”. Ta sama zasada co przy Oświęcimiu,
 * — HISTORIA KLĘSK: epidemia cholery 1892, pożary, zniszczenia po
 *   potopie szwedzkim (1660: 85 domów, poniżej 500 mieszkańców),
 * — ZALEŻNOŚĆ OD JEDNEGO PRACODAWCY. Nie piszę „całe miasto pracuje
 *   w SumiRiko” ani niczego w tym duchu. W tekście, po którym następuje
 *   rozmowa o racie rozłożonej na lata, takie zdanie brzmi jak groźba.
 *   Trzy zakłady wymieniam jako fakt, bez sugerowania monokultury,
 * — UBYWANIE MIESZKAŃCÓW. Lokalny portal prowadzi cykl „Wolbromian nadal
 *   ubywa”. Nie powtarzam tej ramy,
 * — BRAK DROGI KRAJOWEJ jako „odcięcie”. Mieszkańcy są na to wyczuleni.
 *   Piszę o drogach wojewódzkich i o kolei neutralnie, jako o faktach.
 *
 * PUŁAPKA:
 * — WOLBROM NIE LEŻY PRZY DK94 i przez gminę nie przechodzi żadna droga
 *   krajowa. DK94 idzie przez Olkusz, dwadzieścia kilometrów dalej,
 * — DW783 to Olkusz–Wolbrom–Miechów–Skalbmierz, NIE „Kraków–Kielce”,
 * — do Krakowa jedzie się DW794 przez Trzyciąż i Skałę, NIE przez Olkusz,
 * — KOLEJ JEST i to po modernizacji, z nowym przystankiem Wolbrom
 *   Zachodni. Nie napisać „Wolbrom nie ma pociągu”,
 * — FTT WOLBROM, SUMIRIKO I FAGUMIT to trzy różne firmy. SumiRiko to
 *   dawne TRI Poland — nie „Stomil”,
 * — liczba mieszkańców: nie brać 22 635 (2018) ani 23 454 (2006)
 *   ze starszych źródeł,
 * — żadna gmina powiatu olkuskiego nie ma produktu na Liście Produktów
 *   Tradycyjnych. Nagroda KGW to konkurs, nie wpis na listę —
 *   nie mylić tych dwóch rzeczy.
 */

export const WOLBROM: CityContent = {
  slug: "wolbrom",
  h1: "Thermomix Wolbrom – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Wolbrom — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Wolbrom: bezpłatna prezentacja TM7 u Ciebie w kuchni — miasto i sołectwa. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wolbrom — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Wolbrom. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Wolbrom przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do miasta i do wszystkich sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Wolbrom, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wolbromiu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w mieszkaniu w Wolbromiu, jak w domu w Gołaczewach czy w Strzegowej.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce albo przywiozłaś z czwartkowego targu. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje.",
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
      heading: "Miasto, w którym handluje się w czwartki od 1485 roku",
      paragraphs: [
        "Wolbrom dostał przywilej targowy od Kazimierza Jagiellończyka w tysiąc czterysta osiemdziesiątym piątym roku i targ odbywa się tu do dziś, w ten sam dzień tygodnia. To rzecz, której nie ma prawie nigdzie w okolicy: pięćset czterdzieści lat ciągłości jednego zwyczaju, i to zwyczaju, który dotyczy jedzenia.",
        "Dla tej strony ma to konkretne znaczenie, bo układa tydzień. W czwartek jedzie się na targ, w piątek albo w sobotę gotuje się z tego, co się przywiozło. Rytm zakupów jest tu inny niż w mieście, gdzie chodzi się do sklepu codziennie po trochu — kupuje się rzadziej, więcej, i trzeba to potem przerobić.",
        "Drugi wątek to praca. W Wolbromiu są trzy zakłady przemysłu gumowego — komponenty dla motoryzacji, taśmy przenośnikowe, węże — i to jest tu spory kawałek zatrudnienia. Reszta dojeżdża: do Olkusza dwadzieścia kilometrów, do Krakowa czterdzieści drogą wojewódzką przez Trzyciąż i Skałę.",
        "Kto woli nie prowadzić, jedzie pociągiem. Stacja Wolbrom jest po modernizacji, doszedł przystanek Wolbrom Zachodni, a w gminie zatrzymują się pociągi także w Jeżówce, Zarzeczu i Chrząstowicach. To zaskakująco dobre połączenie jak na gminę tej wielkości i naprawdę warto o nim wiedzieć.",
        "Wieczór po dojeździe wygląda zwykle podobnie niezależnie od tego, czym się wracało: trzeba coś zjeść, a nie ma już siły stać przy garnku. I to jest cała rzecz, którą pokazuję na prezentacji — nie to, że urządzenie ugotuje coś wymyślnego, tylko że obiad może się gotować sam, kiedy Ty jeszcze jesteś w drodze.",
        "Mówię też wprost, czego Thermomix nie zrobi: nie zastąpi wprawy. W gminie, której koła gospodyń wygrywają konkursy kulinarne, tej wprawy akurat nie brakuje. Zabiera dwie rzeczy — stanie obok garnka i te czynności, przez które gotowanie na zapas odkłada się na później.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Wolbrom?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, gdzie mieszkasz: w samym Wolbromiu czy w którymś z sołectw. Gmina jest rozległa i do Strzegowej, Dłużca czy Poręby Dzierżnej jedzie się wyraźnie inaczej niż do miasta — od tego zależy godzina, o której realnie u Ciebie jestem.",
        "Czwartek bywa tu dniem zajętym z powodu targu, więc jeśli akurat wtedy Ci nie pasuje, po prostu powiedz. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Wolbrom"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kuchnia, która pracuje partiami",
      paragraphs: [
        "Kiedy zakupy robi się raz w tygodniu, a nie codziennie po drodze, kuchnia zaczyna działać inaczej. Gotuje się większymi partiami, część się mrozi, część przerabia na kolejne dni. To nie jest gorszy sposób prowadzenia domu — po prostu inny, dopasowany do tego, jak wygląda tydzień.",
        "Praktyczne bywa tu przede wszystkim to, że najbardziej żmudna część takiego gotowania przestaje zajmować pół przedpołudnia. Rozdrabnianie, ucieranie, mieszanie, żeby nie przywarło — to wszystko dzieje się bez stania nad garnkiem. Zupa gotuje się, kiedy Ty jesteś w innym pokoju, i sama się wyłącza.",
        "Druga rzecz to przetwory i zapasy. Ciasto na pierogi, pasty kanapkowe, sosy, zupy do zamrożenia, chleb — da się to robić seriami, w jednym naczyniu, bez rozstawiania połowy kuchni. W domu, gdzie i tak kupuje się większymi partiami, ta różnica jest odczuwalna od pierwszego tygodnia.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — i to jest zwykle pierwsza rzecz, którą rodzice zauważają po miesiącu.",
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
    heading: "Wolbrom i gotowanie — targ, koła gospodyń i nagroda z tego lata",
    paragraphs: [
      "W lipcu tego roku koło gospodyń wiejskich z Wierzchowiska wygrało wojewódzki etap konkursu kulinarnego „Polska Smakuje” daniem o nazwie „Śliwka w bielu i purpurze”. Trzecie miejsce zajęło koło z Budzynia. Oba awansowały do etapu wrześniowego. To nie jest ozdobnik do tekstu — to jest najlepszy potwierdzony konkret kulinarny w całym powiecie olkuskim.",
      "Piszę o tym, bo zmienia to charakter moich spotkań w tej gminie. Kiedy przyjeżdżam do domu, w którym ktoś gotuje na takim poziomie, nie mam nikogo niczego uczyć. Rozmowa idzie w zupełnie inną stronę: co da się zrobić szybciej, co da się zrobić większą partią i czego nie trzeba już pilnować.",
      "Drugi filar to targ. Czwartkowy handel odbywa się w Wolbromiu od tysiąc czterysta osiemdziesiątego piątego roku, więc sezonowość jest tu czymś naturalnym, a nie modą — kupuje się to, co akurat jest. Urządzenie, które w kilka minut przerabia dwa kilo owoców na przetwory albo warzywa na zupę do zamrożenia, wpisuje się w to bez naciągania.",
      "Uczciwie dodam, czego w tej gminie nie ma: żadna gmina powiatu olkuskiego nie ma wpisu na ministerialnej Liście Produktów Tradycyjnych. Nagroda w konkursie to co innego niż wpis na listę i nie zamierzam tych dwóch rzeczy mylić, choćby brzmiało to lepiej.",
    ],
  },

  districtsHeading: "Gdzie w gminie Wolbrom dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich sołectw, bez żadnej dopłaty za odległość. Gmina jest rozległa — ponad dwadzieścia wsi rozłożonych na północno-wschodnim skraju Jury — więc odległości bywają tu spore, ale traktuję je tak samo.",
    "Największe miejscowości poza miastem to Gołaczewy, Zarzecze i Łobzów. Dalej Boża Wola, Brzozówka, Budzyń, Chełm, Chrząstowice, Dłużec, Domaniewice, Jeżówka, Kaliś, Kąpiele Wielkie, Kąpiołki, Lgota Wielka, Lgota Wolbromska, Miechówka, Podlesice, Poręba Dzierżna, Poręba Górna, Strzegowa, Sulisławice, Wierzchowisko, Zabagnie, Załęże i Zasępiec.",
    "Strzegowa leży już w krajobrazie czysto jurajskim — skały, jaskinie i ruiny zamku nad wsią. Z drugiej strony gminy jest zupełnie inaczej: równiej, rolniczo, bliżej do Miechowa niż do Olkusza. To jedna gmina, ale dwa różne światy i warto o tym powiedzieć przy umawianiu.",
    "Dojazd: przez gminę biegną dwie drogi wojewódzkie — na Olkusz i Miechów oraz na Kraków i Pilicę. Do Krakowa jedzie się przez Trzyciąż i Skałę, nie przez Olkusz. Jest też kolej: stacja Wolbrom po modernizacji, przystanek Wolbrom Zachodni, a w gminie zatrzymują się pociągi również w Jeżówce, Zarzeczu i Chrząstowicach.",
  ],
  districts: [
    "Wolbrom",
    "Gołaczewy",
    "Zarzecze",
    "Łobzów",
    "Strzegowa",
    "Dłużec",
    "Poręba Dzierżna",
    "Chełm",
    "Budzyń",
    "Wierzchowisko",
    "Jeżówka",
    "Kąpiele Wielkie",
    "Sulisławice",
    "Załęże",
  ],

  nearbyHeading: "Olkusz, Trzyciąż i Klucze też są na mojej trasie",
  nearbyParagraphs: [
    "Do Olkusza mam stąd dwadzieścia kilometrów, do Trzyciąża i Klucz jeszcze bliżej, do Bukowna i Bolesławia trochę dalej, ale wciąż w tym samym powiecie. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Na południe droga wojewódzka prowadzi przez Trzyciąż i Skałę wprost do Krakowa, a po drodze mijam gminy, w których pracuję od dawna — Zielonki, Michałowice, Krzeszowice. Jeśli mieszkasz na granicy gminy i nie masz pewności, po której stronie, po prostu zapytaj.",
  ],
  nearbyTowns: [
    "Olkusz",
    "Trzyciąż",
    "Klucze",
    "Bukowno",
    "Bolesław",
    "Zielonki",
    "Michałowice",
    "Kraków",
  ],

  about: blokOMnie("do Wolbromia", "w powiecie olkuskim"),

  faq: [
    {
      question: "Mieszkam w sołectwie, kilkanaście kilometrów od Wolbromia. Przyjedziesz?",
      answer:
        "Tak i bez dopłaty za odległość — do wszystkich sołectw gminy, od Gołaczew i Zarzecza po Strzegową, Dłużec i Porębę Dzierżną. Powiedz przy umawianiu, gdzie dokładnie mieszkasz i którędy najwygodniej dojechać, bo gmina jest rozległa i różnice w czasie dojazdu są tu realne.",
    },
    ...faqWspolne("w gminie Wolbrom"),
    {
      question: "Czy mogę zaprosić panie z koła gospodyń?",
      answer:
        "Jak najbardziej i w tej gminie to najwygodniejsza forma — koła są tu aktywne, a jedno z nich wygrało w tym roku wojewódzki etap konkursu kulinarnego. Powiedz przy umawianiu, ile osób będzie i gdzie się spotykacie, żebym dobrała przepisy, wzięła więcej składników i wiedziała, na jakim blacie pracujemy.",
    },
    {
      question: "Kupujemy raz w tygodniu, na targu. Czy to coś zmienia?",
      answer:
        "Zmienia tyle, że kuchnia pracuje partiami — gotuje się większe ilości, część mrozi, część przerabia na kolejne dni. Akurat w tym urządzenie pomaga najbardziej: rozdrabnianie i mieszanie przestają zajmować pół przedpołudnia, a zupa czy przetwory gotują się bez stania nad garnkiem. Na prezentacji chętnie pokażę to na tym, co przywiozłaś w czwartek.",
    },
    {
      question: "Wracam pociągiem po pracy. O której możesz przyjechać?",
      answer:
        "Dopasuję się do Twojego rozkładu — powiedz, o której realnie jesteś w domu, a resztę ułożę wokół tego. Wieczorne spotkania są tu codziennością, bo sporo osób dojeżdża do Olkusza i do Krakowa. Prezentacja trwa około dwóch godzin.",
    },
  ],

  geo: { lat: 50.3792, lng: 19.7597 },
};
