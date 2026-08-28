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
 * TYMBARK — jedyna gmina w całym korytarzu, w której praca jest
 * na miejscu, a nie za trzydzieści kilometrów. To jest oś tej strony.
 *
 * Najmniejsza powierzchniowo (32,7 km²), najgęściej zaludniona
 * (196 os./km²), pięć sołectw i jeden zakład zatrudniający 730 osób.
 * Do tego rynek po dawnym mieście lokowanym przez Kazimierza Wielkiego
 * i przebudowywana stacja kolejowa. Tekst jest pisany dla kogoś, kto
 * do pracy ma kilometr, a nie godzinę — bo to zupełnie inny dzień
 * niż w Jodłowniku czy Dobrej.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 6 362 mieszkańców wg GUS na 31.12.2024; ewidencja gminna podaje
 *   6 480 stałych mieszkańców (różnica 118 osób wynika z tego, że GUS
 *   liczy ludność faktycznie zamieszkałą, a gmina zameldowaną),
 * — 5 sołectw, ewidencja gminna 2024: Tymbark 2 740, Podłopień 1 691,
 *   Zamieście 887, Piekiełko 720, Zawadka 442,
 * — powierzchnia 32,7 km², gęstość 196 os./km², lesistość 30,6%
 *   (GUS 2019); średni wiek 38,3 lat; bezrobocie 7,1%,
 * — 1353 — Kazimierz Wielki lokuje miasto „Jodłowa Góra” na prawie
 *   magdeburskim; nazwa spolszczona w XVI w.; prawa miejskie utracone
 *   w 1934 r. na mocy ustawy Sejmu II RP, która wymagała 5 tys.
 *   mieszkańców (Tymbark liczył ok. 1,5 tys.); herb: gotyckie „K”
 *   z koroną,
 * — zakład: Spółdzielnia Owocarska założona w 1936 r. przez inż. Józefa
 *   Marka; upaństwowienie 1950; od 1999 r. własność Grupy Maspex
 *   z Wadowic (potwierdzone historią akwizycji Maspexu),
 * — zatrudnienie w zakładzie i magazynie w Tymbarku: 730 osób
 *   (stan na czerwiec 2025),
 * — 3.06.2025 — otwarcie centrum logistyczno-magazynowego: 165 mln zł,
 *   ponad 6 600 m², 27 000 miejsc paletowych, ponad 8 000 palet dziennie,
 * — Zespół Szkół im. KEN — otwarty 1.10.1948 jako Spółdzielcze Liceum
 *   Przetwórstwa i Handlu Ogrodniczego, pierwsza szkoła tej specjalności
 *   w kraju, z inicjatywy Józefa Marka,
 * — DK28 przechodzi przez Tymbark; odcinek Limanowa–Mszana Dolna
 *   (przez Tymbark, Dobrą i Gruszowiec) to 31 km / ok. 32 min;
 *   do Limanowej ok. 9–10 km, do Nowego Sącza 35 km / ok. 42 min,
 * — stacja Tymbark na linii kolejowej nr 104; odcinek Tymbark–Limanowa:
 *   umowa z 12.03.2026, 1,635 mld zł, tunel ok. 2 km pod Piekiełkiem,
 *   estakada ponad 2 km, przebudowa stacji Tymbark z przejściem
 *   podziemnym; prędkość do 150 km/h,
 * — ruch pasażerski wraca etapami: 14.06.2026 Nowy Sącz–Marcinkowice,
 *   wrzesień 2026 do Męciny; do Tymbarku termin nieokreślony,
 * — Święto Gminy Tymbark — lipiec, turnieje sportowe, bieg górski,
 *   koncerty; Strażacka Orkiestra Dęta „Tymbarski Ton”,
 * — „zsiadłe mleko z Limanowej” — Lista Produktów Tradycyjnych, wpis
 *   2017, obszar obejmuje także Tymbark,
 * — szczyty otaczające: Łopień (951 m wg gminy, 960 m wg Korony
 *   Beskidu Wyspowego), Zęzów 705 m, Paproć 645 m.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — zdania o pracy zmianowej w zakładzie jako o fakcie. Produkcja
 *   napojów zwykle idzie w ruchu ciągłym, ale ŻADNE ŹRÓDŁO tego dla
 *   Tymbarku nie potwierdza. Piszę ogólnie o rytmie zakładowym,
 * — spadku urodzeń z 71 w 2023 do 40 w 2024 i ujemnego salda migracji
 *   (−41). Dane są prawdziwe i wrażliwe; na stronie handlowej nie mają
 *   czego szukać,
 * — bezrobocia w powiecie i poziomu wynagrodzeń,
 * — obietnicy powrotu pociągów z datą. Prace trwają, terminu dla
 *   Tymbarku nikt nie podał,
 * — daty założenia klubu sportowego. Źródła podają 1948 i 1949,
 * — dokładnej odległości do Krakowa w kilometrach — kalkulator podaje
 *   53 km, co wygląda na zaniżone. Piszę opisowo,
 * — smogu, mimo że gmina prowadzi własny monitoring powietrza.
 *
 * PUŁAPKA: DK28 to nie jest „droga Wadowice–Nowy Sącz”. Biegnie
 * od Zatora przez Mszanę Dolną, Tymbark i Limanową aż do Medyki.
 */
export const TYMBARK: CityContent = {
  slug: "tymbark",
  h1: "Thermomix Tymbark – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Tymbark — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Tymbark: bezpłatna prezentacja TM7 u Ciebie w kuchni — Tymbark, Podłopień, Zamieście, Piekiełko, Zawadka. Tel. 517 185 691.",
  ogTitle: "Thermomix Tymbark — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Tymbark. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Tymbark przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich pięciu sołectw.",

  highlights: highlightyStandardowe("cała gmina Tymbark, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tymbarku – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w domu przy rynku, jak na końcu Zawadki.",
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
      heading: "Gmina, w której do pracy jedzie się kilometr, a nie godzinę",
      paragraphs: [
        "Tymbark jest w tej okolicy wyjątkiem. Wszystkie sąsiednie gminy dojeżdżają — do Limanowej, do Nowego Sącza, do Krakowa. Tutaj praca jest na miejscu: w zakładzie sokowym pracuje siedemset trzydzieści osób, czyli mniej więcej co dziewiąty mieszkaniec gminy. Do tego dochodzą ludzie z Dobrej, Jodłownika i Słopnic, którzy przyjeżdżają tu rano, a nie stąd wyjeżdżają.",
        "Ten zakład ma zresztą swoją historię, którą tu wszyscy znają. Spółdzielnię Owocarską założył w 1936 roku inżynier Józef Marek — ten sam, z którego inicjatywy dwanaście lat później otwarto w Tymbarku szkołę przetwórstwa i handlu ogrodniczego, pierwszą tej specjalności w kraju. Ludzie uczyli się tu zawodu, żeby zaraz potem pracować kilkaset metrów dalej. Od 1999 roku zakład należy do grupy z Wadowic, a dwa lata temu doszło do niego wielkie, zautomatyzowane centrum magazynowe.",
        "Gmina jest przy tym najmniejsza i najgęściej zaludniona w całym korytarzu: trzydzieści dwa kilometry kwadratowe, pięć sołectw, prawie dwustu mieszkańców na kilometr. Wszystko jest blisko wszystkiego — i to naprawdę zmienia dzień. Nie ma tu godziny na dojazd rano i godziny wieczorem, a więc nie ma też typowego dla okolicy pytania „kiedy ja mam to ugotować”.",
        "Jest za to pytanie inne, i słyszę je w Tymbarku częściej niż gdziekolwiek: co zrobić, żeby obiad nie był codziennie ten sam. Kiedy dzień jest przewidywalny i wraca się o stałej porze, kuchnia szybko wchodzi w rutynę — te same pięć obiadów w kółko, bo są sprawdzone i szybkie.",
        "Na to akurat urządzenie odpowiada dobrze, ale nie magicznie. Nie ugotuje za Ciebie i nie zastąpi wprawy. Daje natomiast przepisy prowadzone krok po kroku, co sprawia, że sięga się po rzeczy, których inaczej by się nie próbowało — bo nie było kiedy stać i pilnować. To jest różnica między „umiem ugotować pięć obiadów” a „mogę ugotować dowolny”.",
        "Jest jeszcze jedna rzecz, o której warto wiedzieć, choć nie dotyczy kuchni. Przez Tymbark biegnie krajowa dwudziestka ósma i tędy jedzie się z Limanowej do Mszany Dolnej. A na tutejszej stacji trwa właśnie wielka przebudowa linii kolejowej — z tunelem pod Piekiełkiem i estakadą przez dolinę. Pociągi jeszcze nie jeżdżą i nikt nie podał daty, ale za kilka lat dzień w tej gminie będzie wyglądał inaczej niż dziś.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Tymbark?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w którym sołectwie mieszkasz i ile osób będzie na spotkaniu. Gmina jest niewielka, więc trasa jest prosta, ale liczba osób ma znaczenie: od niej zależy, ile składników wezmę i ile miejsca będzie mi potrzebne na blacie.",
        "Jeśli pracujesz w zakładzie i wracasz o stałej porze, podaj tę godzinę wprost. Wolę przyjechać kwadrans po Tobie niż zastać Cię w drzwiach. W Tymbarku umawiam się najczęściej na wczesne wieczory, ale sobotnie przedpołudnia też wchodzą w grę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Tymbark"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w domu, w którym obiad jest o stałej porze",
      paragraphs: [
        "Kiedy wszyscy wracają mniej więcej o tej samej godzinie, obiad jest jeden i o jednej porze — i to jest komfort, którego sąsiednie gminy nie mają. Problem, który zostaje, jest inny: między powrotem a posiłkiem jest może czterdzieści minut, a w tym czasie trzeba jeszcze odebrać dzieci, wypakować zakupy i ogarnąć dom.",
        "Praktyczne bywa tu przede wszystkim to, że gotowanie może iść równolegle do reszty. Zupa albo danie jednogarnkowe pracuje samo, urządzenie pilnuje czasu i temperatury i wyłącza się w odpowiednim momencie. Nie chodzi o to, żeby zaoszczędzić dziesięć minut, tylko żeby te czterdzieści minut dało się wykorzystać na dwie rzeczy naraz.",
        "Druga sprawa to powtarzalność. W domach, gdzie dzień jest przewidywalny, menu bardzo szybko się zawęża. Przepisy prowadzone krok po kroku odwracają to w drugą stronę — nie trzeba pamiętać proporcji ani pilnować, więc próbuje się rzeczy, których wcześniej się nie robiło. To akurat efekt, o którym klientki mówią częściej niż o oszczędzonym czasie.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować — a w gminie, gdzie do szkoły i do domu jest kilka minut, popołudnie realnie na to pozwala.",
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

  districtsHeading: "Gdzie w gminie Tymbark dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu sołectw i bez żadnej dopłaty: do Tymbarku, Podłopienia, Zamieścia, Piekiełka i Zawadki. To najmniejsza gmina w tej części powiatu, więc realnie mówimy o kilku minutach różnicy między jednym adresem a drugim.",
    "Sam Tymbark skupia ponad czterdzieści procent mieszkańców gminy, a drugi co do wielkości Podłopień ponad ćwierć. To znaczy, że dwa na trzy spotkania odbywają się w tych dwóch miejscowościach — ale do Zawadki, najmniejszej z pięciu, jadę dokładnie na tych samych warunkach.",
    "Warto wiedzieć, że Tymbark ma rynek — prawdziwy, miejski, lekko pochyły i kwadratowy. Nie jest to przypadek: w 1353 roku Kazimierz Wielki lokował tu miasto o nazwie Jodłowa Góra, a praw miejskich Tymbark nie stracił ani przy rozbiorach, ani w wojnę, tylko w 1934 roku, kiedy ustawa wymagała pięciu tysięcy mieszkańców, a było ich półtora.",
    "Przez gminę biegnie krajowa dwudziestka ósma, więc dojazd jest tu łatwiejszy niż w sąsiedniej Dobrej czy w Jodłowniku. Na stacji kolejowej trwa jednak wielka przebudowa — z tunelem i estakadą — i to potrafi zmieniać organizację ruchu z tygodnia na tydzień. Jeśli umawiamy się na porę szczytu, zostawiam sobie kwadrans zapasu.",
  ],
  districts: ["Tymbark", "Podłopień", "Zamieście", "Piekiełko", "Zawadka"],

  nearbyHeading: "Limanowa, Dobra i reszta okolicy też są na mojej trasie",
  nearbyParagraphs: [
    "Tymbark leży w środku mojej limanowskiej trasy: do Limanowej mam stąd kilkanaście minut, do Dobrej i Słopnic podobnie, do Jodłownika i Mszany Dolnej niewiele więcej. Do żadnej z tych gmin nie doliczam dojazdu.",
    "Jeśli umawiasz się razem z koleżanką z pracy albo z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Limanowa",
    "Dobra",
    "Słopnice",
    "Jodłownik",
    "Mszana Dolna",
    "Łukowica",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do Tymbarku", "w powiecie limanowskim"),

  faq: [
    {
      question:
        "Czy dojeżdżasz do Podłopienia, Zamieścia, Piekiełka i Zawadki?",
      answer:
        "Tak, do wszystkich czterech i na dokładnie tych samych warunkach co do samego Tymbarku. Dojazd jest bezpłatny, a gmina jest na tyle niewielka, że różnica w czasie to kilka minut.",
    },
    ...faqWspolne("w gminie Tymbark"),
    {
      question: "Wracam z pracy o stałej porze. Kiedy najlepiej się umówić?",
      answer:
        "Wczesnym wieczorem, kwadrans po Twoim powrocie — tak umawiam się w Tymbarku najczęściej. Powiedz przy ustalaniu, o której realnie jesteś w domu, żebym nie zastała Cię w drzwiach z torbami. Sobotnie przedpołudnia też są u mnie normalnym terminem.",
    },
    {
      question: "Gotuję w kółko to samo pięć dań. Czy to coś zmieni?",
      answer:
        "Najczęściej tak i to jest chyba główny powód, dla którego ludzie się na to decydują. Przepis prowadzi krok po kroku, urządzenie pilnuje czasu i temperatury, więc sięga się po rzeczy, których wcześniej się nie próbowało — bo nie było kiedy stać przy garnku i uważać. Na prezentacji pokazuję to na konkretnym daniu, nie na deklaracjach.",
    },
    {
      question: "Czy mogę zaprosić na prezentację koleżanki z pracy?",
      answer:
        "Jak najbardziej i w Tymbarku często tak to wygląda. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników — przy większej grupie potrzebuję też trochę więcej miejsca na blacie.",
    },
  ],

  geo: { lat: 49.729444, lng: 20.325278 },
};
