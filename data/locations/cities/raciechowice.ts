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
 * RACIECHOWICE — gmina wiejska, powiat myślenicki, Beskid Wyspowy.
 * 6 444 mieszkańców (31.12.2024) na 61,2 km², gęstość 105 os./km² —
 * jedna z najrzadziej zaludnionych gmin powiatu. PIĘTNAŚCIE SOŁECTW.
 *
 * OŚ STRONY: JABŁKA. Sady zajmują ok. 1 000 ha, czyli mniej więcej
 * jedną szóstą powierzchni gminy i JEDNĄ TRZECIĄ wszystkich użytków
 * rolnych. Same jabłonie to 800 ha, ok. 1,6 mln drzewek i ok. 30 tys.
 * ton jabłek rocznie. Tradycja sięga połowy XIX w. — owoce dworskie
 * pakowano pojedynczo i wysyłano DO WIEDNIA.
 *
 * DRUGA OŚ: gmina, która ROŚNIE (+7,7% ludności w latach 2002–2024)
 * i ma dodatni przyrost naturalny (+11 w 2024 r.) — rzadkość
 * w wiejskiej, podgórskiej Małopolsce.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 6 444
 *   mieszkańców, 61,2 km², 105 os./km², średni wiek 39,3 lat.
 *   W 2024: 67 urodzeń, 56 zgonów (+11). Wzrost ludności o ok. 7,7%
 *   w latach 2002–2024. ⚠️ Strona gminy podaje 6 521 bez daty —
 *   używam liczby GUS z datą,
 * — SOŁECTWA (15): Bojańczyce, Czasław, Dąbie, Gruszów, Kawec,
 *   Komorniki, Krzesławice, Krzyworzeka, Kwapinka, Mierzeń,
 *   Poznachowice Górne, Raciechowice, Sawa, Zegartowice, Żerosławice,
 * — SADOWNICTWO (raciechowice.pl/sadownictwo.html): użytki rolne
 *   3 750 ha = ok. 63% powierzchni gminy; SADY TO 1/3 UŻYTKÓW ROLNYCH,
 *   ok. 1 000 ha upraw sadowniczych i ok. 1,6 MLN DRZEWEK; JABŁONIE
 *   800 HA; ŚREDNI ROCZNY ZBIÓR OK. 30 000 TON JABŁEK. Odmiany
 *   wskazywane przez gminę: jonagold i jonagored. Wsie sadownicze:
 *   Mierzeń, Raciechowice, Komorniki, Zegartowice, Żerosławice,
 *   Czasław, Kawec. Pierwsze wzmianki o sadach — POŁOWA XIX W.;
 *   jabłka wożono wozami do Krakowa, Wieliczki i Zakopanego, owoce
 *   dworskie pakowano pojedynczo I WYSYŁANO DO WIEDNIA. Intensywny
 *   rozwój od lat 50. XX w.,
 * — GOSPODARKA (2024): 715 podmiotów REGON, 578 osób fizycznych;
 *   692 mikrofirmy, 21 małych, 2 średnie, ZERO DUŻYCH. Bezrobocie
 *   3,1%. Wynagrodzenie 7 256,80 zł brutto. Pracujących 104 na 1000
 *   mieszkańców (2021),
 * — DOJAZDY DO PRACY: 390 wyjeżdża, 139 przyjeżdża, saldo −251,
 * — SZKOŁA MUZYCZNA I STOPNIA im. Oskara Kolberga w Raciechowicach
 *   (Raciechowice 197) — pełnoprawna szkoła muzyczna w gminie
 *   liczącej 6,4 tys. mieszkańców,
 * — I FESTIWAL MAŁOPOLSKICH TRADYCJI WIELKANOCNYCH: 13 kwietnia
 *   2025 r., sala GOKiS; konkurs palm po mszy w kościele
 *   pw. św. Jakuba Apostoła; konkursy KGW z powiatów myślenickiego
 *   i bocheńskiego (babka wielkanocna, potrawy z jajek),
 * — DOŻYNKI PARAFIALNO-GMINNE: 15 sierpnia 2026 w Krzesławicach,
 *   msza w kościele w Górze Świętego Jana, korowód traktorów
 *   z wieńcami. Wieniec tradycyjny — KGW Krzesławice, współczesny —
 *   KGW Raciechowice. Pierwsze od lat dożynki gminne: sierpień 2022,
 * — OSP: 8 jednostek, 5 w KSRG (Raciechowice, Gruszów, Dąbie,
 *   Czasław, Krzesławice),
 * — LGD: gmina należy do Stowarzyszenia „Turystyczna Podkowa"
 *   (siedziba Siepraw) razem z Dobczycami, Lubniem, Pcimiem,
 *   Sieprawiem, Tokarnią i Wiśniową,
 * — KOLEJ: w gminie NIE MA stacji. Trwa budowa linii Podłęże–Piekiełko
 *   (etap II, odc. Podłęże–Gdów); przez Czasław, Raciechowice,
 *   Komorniki i Dąbie jedzie TRANSPORT MATERIAŁÓW, ok. 200 ciężarówek
 *   dziennie. SAMA LINIA NIE BIEGNIE PRZEZ GMINĘ,
 * — ODLEGŁOŚCI (między centroidami gmin, nie drogowe): Wiśniowa
 *   6,1 km, Dobczyce 7,1 km, Gdów 8,6 km, Jodłownik 8,8 km,
 *   Myślenice 15,6 km.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WPISU NA MINISTERIALNĄ LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie udało
 *   się zweryfikować (gov.pl blokuje pobieranie). Nie piszę ani
 *   że jest, ani że go nie ma,
 * — NAZW GRUP PRODUCENCKICH I CHŁODNI poza Spółdzielnią Ogrodniczą
 *   „Grodzisko", której strona jest niedostępna. Nie podaję jej
 *   parametrów ani daty założenia,
 * — NAZW PRODUCENTÓW SOKÓW I TŁOCZNI. Nie potwierdzone,
 * — „ŚWIĘTA KWITNĄCEJ JABŁONI" ANI „ŚWIĘTA JABŁKA" W TEJ GMINIE.
 *   Przeszukano aktualności gminy i prasę — ani jednej wzmianki.
 *   Święto Kwitnącej Jabłoni kojarzy się z ŁĄCKIEM,
 * — DWORU, KOŚCIOŁÓW DREWNIANYCH ANI WPISÓW DO REJESTRU ZABYTKÓW.
 *   Nie potwierdzone. Potwierdzone są tylko wezwania: św. Jakuba
 *   Apostoła w Raciechowicach i kościół w Górze Świętego Jana,
 * — NUMERU DROGI WOJEWÓDZKIEJ, NAJBLIŻSZEJ STACJI KOLEJOWEJ
 *   I CZASÓW PRZEJAZDU. Nie potwierdzone,
 * — PEŁNEJ LISTY GMIN GRANICZĄCYCH. Potwierdzone są tylko gminy
 *   najbliższe: Wiśniowa, Dobczyce, Gdów, Jodłownik.
 *
 * PUŁAPKI:
 * — LUBOMIR (903,6 m) I OBSERWATORIUM ASTRONOMICZNE LEŻĄ W GMINIE
 *   WIŚNIOWA, nie w Raciechowicach. To najczęstszy błąd,
 * — POZNACHOWICE GÓRNE (gm. Raciechowice) ≠ POZNACHOWICE DOLNE
 *   (gm. Wiśniowa),
 * — KRZESŁAWICE to także dzielnica Krakowa z dworkiem Matejki,
 * — GÓRA ŚWIĘTEGO JANA ma kościół i gości dożynki, ale NIE JEST
 *   odrębnym sołectwem — nie liczyć jej jako szesnastego,
 * — SOŁECTWO ZAPISYWANE JEST RAZ JAKO „DĄBIE", RAZ „DĄB",
 * — BUDOWA LINII PODŁĘŻE–PIEKIEŁKO nie oznacza stacji w gminie.
 */

export const RACIECHOWICE: CityContent = {
  slug: "raciechowice",
  h1: "Thermomix Raciechowice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Raciechowice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Raciechowice: bezpłatna prezentacja TM7 u Ciebie w kuchni — Raciechowice, Czasław, Gruszów, Krzesławice, Zegartowice. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Raciechowice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Raciechowice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Raciechowice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich piętnastu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 15 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Raciechowice – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Raciechowicach, jak w Czasławiu, Gruszowie, Krzesławicach czy Zegartowicach.",
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
      heading: "Milion sześćset tysięcy drzewek na sześciu tysiącach ludzi",
      paragraphs: [
        "Gmina Raciechowice ma około tysiąca hektarów sadów. Przy sześćdziesięciu jeden kilometrach kwadratowych powierzchni oznacza to, że sady zajmują mniej więcej jedną szóstą całej gminy i jedną trzecią wszystkich użytków rolnych. Same jabłonie to osiemset hektarów, około miliona sześciuset tysięcy drzewek i średnio trzydzieści tysięcy ton jabłek rocznie.",
        "Na sześć i pół tysiąca mieszkańców wypada więc dwieście pięćdziesiąt drzew na osobę. To nie jest gmina, w której ktoś ma sad — to gmina, która jest sadem, z Mierzeniem, Komornikami, Zegartowicami, Żerosławicami, Czasławiem i Kawcem jako głównymi wsiami sadowniczymi.",
        "Tradycja jest starsza, niż się wydaje. Pierwsze wzmianki o tutejszych sadach pochodzą z połowy dziewiętnastego wieku: jabłka wożono wozami do Krakowa, Wieliczki i Zakopanego, a owoce dworskie pakowano pojedynczo i wysyłano do Wiednia. Intensywny rozwój przyszedł w latach pięćdziesiątych dwudziestego wieku i trwa do dziś.",
        "Sama gmina tłumaczy jakość tutejszych jabłek położeniem: Beskid Wyspowy, stoki południowe i duże amplitudy dobowe, które dają wybarwienie i smak. Odmiany, które wskazuje jako tutejsze i dobrze się przechowujące, to jonagold i jonagored.",
        "Gmina jest przy tym najrzadziej zaludnioną częścią powiatu myślenickiego — sto pięć osób na kilometr kwadratowy przy stu dziewięćdziesięciu trzech dla całego powiatu — i jednocześnie rośnie. Od dwa tysiące drugiego do dwa tysiące dwudziestego czwartego roku ludność zwiększyła się o niecałe osiem procent, a w samym dwa tysiące dwudziestym czwartym urodziło się sześćdziesiąt siedmioro dzieci przy pięćdziesięciu sześciu zgonach. W wiejskiej, podgórskiej Małopolsce to rzadkość.",
        "Jest tu jeszcze coś, czego się w gminie tej wielkości nie spodziewałam: pełnoprawna szkoła muzyczna pierwszego stopnia imienia Oskara Kolberga. W miejscowości, w której mieszka sześć i pół tysiąca ludzi, i to na piętnastu sołectwach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Raciechowice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Nazwa sołectwa bardzo pomaga, bo jest ich tu piętnaście: Raciechowice, Czasław, Gruszów, Krzesławice, Zegartowice, Komorniki, Mierzeń, Żerosławice, Kawec, Krzyworzeka, Kwapinka, Dąbie, Bojańczyce, Sawa i Poznachowice Górne. Dopłaty za odległość nie ma nigdzie.",
        "Jeśli macie sad, powiedzcie to od razu. Wrzesień i październik to u Was zbiór i sama proponuję wtedy przełożenie terminu na spokojniejszy tydzień. Zimą i wczesną wiosną umawiam się o dowolnej porze, także w dzień roboczy przed południem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Raciechowice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom z sadem i rok podzielony na zbiór i resztę",
      paragraphs: [
        "W gminie, w której sady zajmują jedną trzecią użytków rolnych, rok układa się wokół owoców. Wiosną kwitnienie i opryski, latem doglądanie, we wrześniu i październiku zbiór, potem sortowanie i przechowywanie. W tym czasie nikt nie gotuje porządnie — i nie ma się co oszukiwać.",
        "To jest sytuacja, w której urządzenie gotujące bez obecności ma sens zupełnie praktyczny. Wstawiasz zupę albo danie jednogarnkowe rano, wychodzisz w sad, a ono gotuje się samo, wyłącza i czeka. Wracasz o dowolnej porze i jest ciepły obiad. Nie „szybszy obiad” — obiad zamiast kanapki zjedzonej na stojąco.",
        "Druga rzecz to jabłka, których w tej gminie po zbiorze jest wszędzie. Mus, przecier, sok, powidła, prażone jabłka do słoików, nadzienie do szarlotki, jabłka suszone — to jest rozdrabnianie i podgrzewanie w stałej temperaturze, czyli dokładnie to, do czego naczynie służy. I przy czym najbardziej boli nie trudność, tylko liczba godzin mieszania, żeby nie przywarło do dna.",
        "Powiem od razu, czego nie zrobi, bo w gminie sadowniczej to pytanie pada pierwsze. Nie obierze jabłek i nie wydrąży gniazd nasiennych — to zostaje po Waszej stronie. Nie wytłoczy też soku z całych owoców tak, jak robi to prasa; zrobi natomiast przecier i mus, i zrobi je bez stania przy garnku.",
        "Trzecia rzecz to dojazdy. Pracujących na miejscu jest tu sto czterech na tysiąc mieszkańców, a trzysta dziewięćdziesiąt osób wyjeżdża do pracy poza gminę przy stu trzydziestu dziewięciu przyjeżdżających. To znaczy powrót po siedemnastej i wybór między gotowaniem a odgrzaniem — ten sam, który opisałam wyżej.",
        "I rzecz, o której warto powiedzieć, bo gmina rośnie: przybywa tu młodych rodzin. W domu z małym dzieckiem najbardziej przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami, a starsze dziecko jest w stanie samo wstawić obiad, bo przepis prowadzi krok po kroku.",
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
    heading: "Raciechowice i gotowanie — trzydzieści tysięcy ton jabłek rocznie",
    paragraphs: [
      "Trudno o gminę, w której związek między krajobrazem a kuchnią byłby bardziej dosłowny. Osiemset hektarów jabłoni, około miliona sześciuset tysięcy drzewek i średnio trzydzieści tysięcy ton jabłek rocznie — to nie jest tło dla kuchni, to jest jej główny składnik.",
      "Sadownictwo ma tu metrykę z połowy dziewiętnastego wieku. Jabłka wożono stąd wozami do Krakowa, Wieliczki i Zakopanego, a owoce z dworów pakowano pojedynczo i wysyłano do Wiednia. To jest szczegół, który mówi o jakości więcej niż jakikolwiek folder: wiedeński kupiec nie brał byle czego.",
      "Uczciwie oznaczę granice tego, co wiem. Nie udało mi się zweryfikować, czy z tej gminy pochodzi jakikolwiek wpis na ministerialnej Liście Produktów Tradycyjnych — ministerialna baza była dla mnie niedostępna, więc nie napiszę ani że jest, ani że go nie ma. Nie potwierdziłam też żadnej tłoczni ani producenta soków z nazwy, więc żadnego nie wymieniam.",
      "To, co potwierdzone, to koła gospodyń, i to bardzo aktywne. Na dożynkach parafialno-gminnych w Krzesławicach w sierpniu dwa tysiące dwudziestego szóstego roku wieniec tradycyjny wygrało koło z Krzesławic, a współczesny — koło z Raciechowic. Wcześniej, w kwietniu dwa tysiące dwudziestego piątego, gmina zorganizowała pierwszy Festiwal Małopolskich Tradycji Wielkanocnych, z konkursami dla kół gospodyń z dwóch powiatów na babkę wielkanocną i potrawy z jajek.",
      "Co z tego wynika dla urządzenia? Przy jabłkach — bardzo dużo. Mus, przecier, powidła, prażone jabłka do słoików, nadzienie do szarlotki, sos do mięsa: wszystko to jest rozdrabnianie plus podgrzewanie w stałej temperaturze, z mieszaniem, które trzeba prowadzić godzinami, żeby nie przywarło. Tę część roboty urządzenie zabiera w całości.",
      "Czego nie zabierze: obierania i drylowania. Kto ma sad, ten wie, że to jest ta godzina, która i tak zostanie. I przy babce wielkanocnej ani przy dożynkowym wieńcu też nikogo nie wyręczy — wyrobi za to ciasto, a to jest w tej robocie część najbardziej męcząca.",
    ],
  },

  districtsHeading: "Gdzie w gminie Raciechowice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich piętnastu sołectw, bez żadnej dopłaty za odległość: Raciechowic, Czasławia, Gruszowa, Krzesławic, Zegartowic, Komornik, Mierzenia, Żerosławic, Kawca, Krzyworzeki, Kwapinki, Dąbia, Bojańczyc, Sawy i Poznachowic Górnych.",
    "Gmina zajmuje sześćdziesiąt jeden kilometrów kwadratowych i liczy sześć tysięcy czterysta czterdzieści cztery osoby — sto pięć na kilometr kwadratowy, czyli najmniej w całym powiecie myślenickim. Właśnie dlatego przy umawianiu proszę o nazwę wsi: trasę i tak przejadę, ale wolę ją ułożyć z wyprzedzeniem.",
    "Leżymy w Beskidzie Wyspowym. Do Wiśniowej mamy stąd około sześciu kilometrów, do Dobczyc siedem, do Gdowa i Jodłownika po niecałe dziewięć, do Myślenic około szesnastu. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Kolei w gminie nie ma i nie będzie, mimo że przez Czasław, Raciechowice, Komorniki i Dąbie jeździ dziś ciężki transport materiałów na budowę linii Podłęże–Piekiełko — około dwustu ciężarówek dziennie. Sama linia biegnie gdzie indziej; przez gminę przejeżdża tylko budowa. Warto o tym wiedzieć, planując dojazd tymi drogami.",
    "I dwa rozstrzygnięcia, o które warto zadbać przy umawianiu. Poznachowice Górne to gmina Raciechowice, a Poznachowice Dolne — już Wiśniowa. Góra Świętego Jana ma kościół, w którym odprawiana jest msza dożynkowa, ale nie jest osobnym sołectwem.",
  ],
  districts: [
    "Raciechowice",
    "Czasław",
    "Gruszów",
    "Krzesławice",
    "Zegartowice",
    "Komorniki",
    "Mierzeń",
    "Żerosławice",
    "Kawec",
    "Krzyworzeka",
    "Kwapinka",
    "Dąbie",
    "Bojańczyce",
    "Sawa",
    "Poznachowice Górne",
  ],

  nearbyHeading: "Wiśniowa, Dobczyce, Gdów i Jodłownik też są na mojej trasie",
  nearbyParagraphs: [
    "Do Wiśniowej, Dobczyc, Gdowa i Jodłownika mam stąd kilka do dziewięciu kilometrów, do Myślenic około szesnastu. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Raciechowice, czy już Wiśniowa albo Dobczyce — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Wiśniowa",
    "Dobczyce",
    "Gdów",
    "Jodłownik",
    "Myślenice",
    "Łapanów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Raciechowice", "w powiecie myślenickim"),

  faq: [
    {
      question: "Mamy sad. Czy to się przyda przy jabłkach?",
      answer:
        "Najbardziej właśnie przy nich, i w tej gminie to pytanie pada częściej niż gdziekolwiek indziej. Mus, przecier, powidła, prażone jabłka do słoików, nadzienie do szarlotki i sos do mięsa to rozdrabnianie plus podgrzewanie w stałej temperaturze z ciągłym mieszaniem — czyli dokładnie to, do czego naczynie służy, i to, przy czym najłatwiej coś przypalić na dnie garnka. Obierania i drylowania natomiast nie zabierze i nie będę tego obiecywać.",
    },
    ...faqWspolne("w gminie Raciechowice"),
    {
      question: "Kiedy najlepiej się umówić, jeśli pracujemy w sadzie?",
      answer:
        "Poza wrześniem i październikiem — i sama to proponuję, zamiast namawiać w środku zbioru. Zimą, wczesną wiosną i w lipcu umawiam się o dowolnej porze, także w dzień roboczy przed południem. Powiedzcie po prostu, kiedy macie spokojne dwie godziny.",
    },
    {
      question: "Mieszkam w Poznachowicach Górnych. Dojedziesz?",
      answer:
        "Dojadę, bez dopłaty, tak samo jak do Raciechowic. Obsługuję wszystkie piętnaście sołectw gminy. Przy umawianiu proszę tylko o dokładną nazwę: Poznachowice Górne należą do gminy Raciechowice, a Poznachowice Dolne — już do gminy Wiśniowa. Do obu i tak dojeżdżam, ale trasę układam inaczej.",
    },
  ],

  geo: { lat: 49.8447, lng: 20.1375 },
};
