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
 * KALWARIA ZEBRZYDOWSKA — gmina miejsko-wiejska, ok. 19,8 tys.
 * mieszkańców. Samo miasto to tylko ok. 4,3 tys. — czyli MNIEJ niż
 * Chocznia, która jest sołectwem gminy Wadowice.
 *
 * OŚ STRONY: NIE sanktuarium i NIE UNESCO. Oś to CECH — nieprzerwana,
 * udatowana tradycja rzemieślnicza: stolarstwo i szewstwo. To jest
 * właściwy wybór, bo sanktuarium opisuje pielgrzymów, a cech opisuje
 * mieszkańców. Strona ma trafiać do tych drugich.
 *
 * FAKTY UŻYTE I ŹRÓDŁA (Cech Rzemiosł Różnych w Kalwarii
 * Zebrzydowskiej, meblekalwaria.eu):
 * — 1786 — w Kalwarii pracuje 40 stolarzy,
 * — 1896 — 72 stolarzy przy ok. 1 500 mieszkańcach miasta.
 *   TO JEST NAJMOCNIEJSZA LICZBA NA TEJ STRONIE: co dwudziesty
 *   mieszkaniec był stolarzem,
 * — 15 grudnia 1885 — pierwszy wpis do rejestru stowarzyszenia
 *   rzemieślników; rejestracja sądowa 21 lutego 1887,
 * — 1887 — Krajowa Szkoła Stolarska, pierwsza publiczna placówka
 *   kształcąca meblarzy w technikach artystycznych,
 * — 1930 — pierwsze Targi Kalwaryjskie,
 * — 1949 — zawieszenie działalności cechu; 12 sierpnia 1955 —
 *   wznowienie. UWAGA: przerwy nie ukrywam, ale też nie rozwijam
 *   politycznego tła. Piszę o niej neutralnie albo pomijam,
 * — DZIŚ: cech zrzesza ok. 280 zakładów (stolarskich, tapicerskich,
 *   szewskich i pokrewnych); salon wystawowy przy ul. Jagiellońskiej,
 *   ponad 1000 m² ekspozycji,
 * — OBUWNICTWO: 10 kwietnia 2025 otwarto Branżowe Centrum
 *   Umiejętności w dziedzinie obuwnictwa przy Zespole Szkół
 *   im. KEN. Wartość ponad 11 mln zł, z czego ponad 10 mln zł z KPO.
 *   Wyposażenie m.in. ćwiekarki i sale VR,
 * — 157 podmiotów gospodarczych na 1000 mieszkańców — bardzo wysoko,
 *   spójne z rozdrobnionym rzemiosłem,
 * — SOŁECTWA (11): Barwałd Górny, Barwałd Średni, Brody, Bugaj,
 *   Leńcze, Podolany, Przytkowice, Stanisław Dolny, Zarzyce Małe,
 *   Zarzyce Wielkie, Zebrzydowice,
 * — KUCHNIA: OGÓREK KALWARYJSKI. Kiszony, historycznie sprzedawany
 *   pielgrzymom przy odpuście sierpniowym. Festiwal Ogórka
 *   Kalwaryjskiego: III edycja 24.08.2024, IV 9.08.2025,
 *   V 8.08.2026 — stadion MKS Kalwarianka. Stały element: konkurs
 *   potraw z ogórka dla KGW i warsztaty kiszenia w Brodach,
 * — przezwisko mieszkańców: Ogórcorze („Mapa Smaków Ziemi
 *   Wadowickiej”, IT Wadowice, lipiec 2017),
 * — KGW „Swojskie Klimaty” z Barwałdu Średniego — II miejsce
 *   w kategorii „Kobieta Gospodarna i Wyjątkowa” w finale
 *   wojewódzkim „Polska od Kuchni”, Kraków, 17 lipca 2022,
 * — KOLEJ: stacja Kalwaria Zebrzydowska Lanckorona (otwarta 1884)
 *   to WĘZEŁ — leży na linii 97 Skawina–Żywiec i jest stacją
 *   początkową linii 117 do Bielska-Białej. Od 15 grudnia 2025
 *   dwanaście pociągów dziennie Kraków–Bielsko-Biała, w tym trzy
 *   pary przyspieszonych. Kraków Główny → Kalwaria: 32–62 min,
 * — mediana wieku gminy 40,7 (miasto 42,5); średnia powierzchnia
 *   mieszkania ok. 100 m²; przeciętne gospodarstwo 3,21 osoby,
 * — 2002–2024: gmina +3,4%, ale samo miasto −5,4%,
 * — sanktuarium: założone 1600 przez Mikołaja Zebrzydowskiego,
 *   42 kaplice, UNESCO od 1999.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — SANKTUARIUM JAKO OŚ. Wspominam jednym zdaniem, bo pomijanie
 *   byłoby dziwactwem, ale nie buduję na tym strony. To strona
 *   dla mieszkańców, nie dla pielgrzymów,
 * — „CO PIĄTA PARA POLSKICH BUTÓW”. To cytat prasowy z 2021 r.,
 *   nie statystyka. Nie używam,
 * — „JEDYNE TAKIE CENTRUM W POLSCE” o BCU. To deklaracja branży;
 *   BCU tworzone są po jednym na dziedzinę, więc formalnie prawda,
 *   ale brzmi jak przechwałka. Piszę o kwocie i o tym, co tam jest,
 * — KRYZYS BRANŻY OBUWNICZEJ. Tytuł prasowy mówił o „Golgocie
 *   szewców”. Nie dotykam — to strona o gotowaniu, nie o tym,
 *   że komuś słabo idzie w firmie,
 * — DEPOPULACJA MIASTA (−5,4%). Nie dotykam.
 *
 * PUŁAPKI:
 * — OGÓREK KALWARYJSKI NIE JEST na ministerialnej Liście Produktów
 *   Tradycyjnych — nie potwierdzono. Piszę „lokalna specjalność”,
 *   nigdy „produkt tradycyjny”. Media mylą te dwie rzeczy,
 * — STACJA NAZYWA SIĘ „Kalwaria Zebrzydowska Lanckorona” i NIE LEŻY
 *   w gminie Lanckorona. Nazwa jest myląca. Jest też drugi
 *   przystanek, „Kalwaria Zebrzydowska”, na linii 117,
 * — miasto ma ok. 4,3 tys. mieszkańców — mniej niż niejedno
 *   sołectwo sąsiednich gmin. Nie pisać o „mieście” tak, jakby to
 *   był ośrodek. Gmina to głównie wsie,
 * — cech zrzesza NIE TYLKO stolarzy: także tapicerów i szewców.
 */

export const KALWARIA_ZEBRZYDOWSKA: CityContent = {
  slug: "kalwaria-zebrzydowska",
  h1: "Thermomix Kalwaria Zebrzydowska – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Kalwaria Zebrzydowska — cena",
  seoDescription:
    "Thermomix w gminie Kalwaria Zebrzydowska: bezpłatna prezentacja TM7 u Ciebie w kuchni — miasto i sołectwa. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kalwaria Zebrzydowska — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Kalwaria Zebrzydowska. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Kalwaria Zebrzydowska przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do miasta i do wszystkich sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Kalwaria, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kalwarii Zebrzydowskiej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w mieście, jak w Przytkowicach, Leńczach czy Barwałdzie Średnim.",
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
      heading: "Gmina, w której co dwudziesty mieszkaniec był stolarzem",
      paragraphs: [
        "O Kalwarii wszyscy wiedzą jedno: sanktuarium, Dróżki, lista światowego dziedzictwa. To prawda i nie ma sensu tego pomijać. Ale to opowieść o ludziach, którzy tu przyjeżdżają, a nie o tych, którzy tu mieszkają. Mieszkańców opisuje coś zupełnie innego — cech.",
        "W tysiąc osiemset dziewięćdziesiątym szóstym roku w Kalwarii pracowało siedemdziesięciu dwóch stolarzy przy około półtora tysiąca mieszkańców miasta. Co dwudziesty człowiek robił meble. Sto lat wcześniej, w tysiąc siedemset osiemdziesiątym szóstym, było ich czterdziestu. Rejestr stowarzyszenia rzemieślników założono tu w tysiąc osiemset osiemdziesiątym piątym roku, a dwa lata później powstała Krajowa Szkoła Stolarska — pierwsza publiczna szkoła kształcąca meblarzy w technikach artystycznych.",
        "I to nie jest historia zamknięta. Kalwaryjski cech zrzesza dziś około dwustu osiemdziesięciu zakładów: stolarskich, tapicerskich i szewskich. W kwietniu dwa tysiące dwudziestego piątego roku otwarto tu Branżowe Centrum Umiejętności w dziedzinie obuwnictwa — inwestycja za ponad jedenaście milionów złotych, z ćwiekarkami i salami do projektowania butów. W gminie liczącej niespełna dwadzieścia tysięcy mieszkańców.",
        "Widać to w statystyce najzwyczajniej: na tysiąc mieszkańców przypada tu sto pięćdziesiąt siedem zarejestrowanych firm. To bardzo dużo. Praktycznie oznacza to, że w wielu domach, do których przyjeżdżam, ktoś prowadzi warsztat albo jednoosobową działalność — a to zupełnie inny rytm dnia niż praca od ósmej do szesnastej.",
        "Kiedy warsztat jest przy domu albo w domu, granica między pracą a resztą dnia się zaciera. Obiad wypada wtedy, kiedy wypadnie, i często ktoś je sam, o innej porze niż reszta. To jest właśnie ten układ, w którym gotowanie odkłada się na później i kończy czymś odgrzanym z torebki.",
        "Mówię wprost, czego Thermomix nie zrobi: nie zastąpi wprawy. Zabiera dwie rzeczy — stanie obok garnka i te czynności, przez które gotowanie od zera przestaje się mieścić w dniu. Jeśli w domu ktoś ma ręce zajęte pracą, to akurat jest różnica, którą widać od razu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Kalwaria Zebrzydowska?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, gdzie mieszkasz: w mieście czy w którymś z sołectw. Gmina jest rozłożona szeroko — od Barwałdów po Leńcze i Przytkowice — i to realnie zmienia godzinę, o której u Ciebie jestem.",
        "Jeśli prowadzisz warsztat albo firmę, powiedz po prostu, kiedy kończysz. Wieczorne terminy i weekendy są tu zupełnie normalne i nie robię z tego problemu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Kalwaria Zebrzydowska"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, w którym praca jest za ścianą",
      paragraphs: [
        "W gminie z tak dużą liczbą warsztatów i jednoosobowych firm częsty jest układ, w którym praca dzieje się kilka kroków od kuchni. To wygodne pod wieloma względami, ale ma jeden koszt: dzień nie ma wyraźnego końca, a obiad wypada wtedy, kiedy akurat da radę.",
        "Praktyczne bywa tu przede wszystkim to, że danie może dochodzić samo, kiedy Ty jesteś w warsztacie, i samo się wyłączyć. Nie trzeba wracać co dziesięć minut zamieszać. Rozdrabnianie, ucieranie, gotowanie w jednym naczyniu — to wszystko dzieje się bez stania przy garnku.",
        "Druga rzecz to gotowanie większą partią. Zupa na dwa dni, sos do zamrożenia, ciasto na pierogi, pasta kanapkowa, chleb — da się to robić seriami, bez rozstawiania połowy kuchni. W domu, w którym trudno przewidzieć, o której się je, gotowy zapas w lodówce zmienia więcej niż jakikolwiek przepis.",
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
    heading: "Kalwaria i gotowanie — ogórek, którego kiszą tu od pokoleń",
    paragraphs: [
      "Mieszkańców Kalwarii nazywano Ogórcorzami i to przezwisko ma bardzo konkretne źródło: kiszony ogórek kalwaryjski sprzedawano tu pielgrzymom przy sierpniowym odpuście. Nie było to danie od święta, tylko towar — coś, co robiono w dużych ilościach, bo w sierpniu przez miasteczko przechodziły tłumy.",
      "Ta tradycja nie tylko przetrwała, ale została świadomie odbudowana. Od kilku lat odbywa się tu Festiwal Ogórka Kalwaryjskiego — w sierpniu dwa tysiące dwudziestego czwartego roku była trzecia edycja, rok później czwarta, a w sierpniu dwa tysiące dwudziestego szóstego piąta. Stałym punktem jest konkurs potraw z ogórka dla kół gospodyń i warsztaty kiszenia w Brodach.",
      "Kiszenie to jedna z niewielu rzeczy, w których urządzenie naprawdę niewiele wnosi, i powiem to wprost, zamiast naciągać. Ogórki kisi się w słoju, solą i czasem, i Thermomix nie ma tu nic do roboty. Ale wszystko dookoła — zalewy, pasty, sosy, zupy z tego, co zostało z sezonu, przetwory na zimę robione partiami — to już jest dokładnie ta praca, której nie chce się nikomu robić ręcznie w środku sierpniowego upału.",
      "Uczciwie dodam jeszcze jedno: ogórek kalwaryjski nie jest wpisany na ministerialną Listę Produktów Tradycyjnych — sprawdzałam i nie znalazłam potwierdzenia. Media czasem piszą „produkt tradycyjny”, ale to znaczy co innego. To lokalna specjalność z udokumentowaną historią i własnym festiwalem, i to zupełnie wystarczy.",
    ],
  },

  districtsHeading: "Gdzie w gminie Kalwaria Zebrzydowska dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich sołectw, bez żadnej dopłaty za odległość: Barwałd Górny, Barwałd Średni, Brody, Bugaj, Leńcze, Podolany, Przytkowice, Stanisław Dolny, Zarzyce Małe, Zarzyce Wielkie i Zebrzydowice.",
    "Warto od razu powiedzieć jedno: samo miasto ma niewiele ponad cztery tysiące mieszkańców, więc większość gminy to wsie i tam też najczęściej jeżdżę. Przytkowice i Leńcze leżą już wyraźnie na wschód, bliżej Skawiny niż Wadowic, i dojazd wygląda stamtąd zupełnie inaczej.",
    "Gmina jest rozłożona na pagórkach między doliną Skawinki a wzgórzami kalwaryjskimi, więc kilometry bywają mylące. Powiedz przy umawianiu, którą drogą najwygodniej do Was dojechać — wolę wyjechać wcześniej, niż kazać Ci czekać.",
    "Dojazd z Krakowa jest tu wyjątkowo dobry, i to koleją. Stacja Kalwaria Zebrzydowska Lanckorona jest węzłem: przecinają się na niej dwie linie, a od grudnia dwa tysiące dwudziestego piątego roku kursuje tędy dwanaście pociągów dziennie na trasie Kraków–Bielsko-Biała. Z Krakowa Głównego jedzie się nawet nieco ponad pół godziny.",
  ],
  districts: [
    "Kalwaria Zebrzydowska",
    "Przytkowice",
    "Leńcze",
    "Zebrzydowice",
    "Barwałd Górny",
    "Barwałd Średni",
    "Brody",
    "Bugaj",
    "Podolany",
    "Stanisław Dolny",
    "Zarzyce Wielkie",
    "Zarzyce Małe",
  ],

  nearbyHeading: "Wadowice, Lanckorona i Skawina też są na mojej trasie",
  nearbyParagraphs: [
    "Kalwaria leży dokładnie w połowie drogi między Krakowem a Wadowicami, więc stąd blisko we wszystkie strony: Lanckorona i Stryszów tuż obok, Wadowice kilkanaście kilometrów, Skawina i Mogilany po drugiej stronie. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Uwaga na nazwę stacji: „Kalwaria Zebrzydowska Lanckorona” brzmi tak, jakby obsługiwała obie gminy, ale leży po kalwaryjskiej stronie. Jeśli mieszkasz w Lanckoronie i umawiamy się „koło dworca”, warto to doprecyzować.",
  ],
  nearbyTowns: [
    "Wadowice",
    "Lanckorona",
    "Stryszów",
    "Skawina",
    "Mogilany",
    "Kraków",
  ],

  about: blokOMnie("do Kalwarii Zebrzydowskiej", "w powiecie wadowickim"),

  faq: [
    {
      question: "Mieszkam w Przytkowicach, nie w mieście. Przyjedziesz?",
      answer:
        "Tak i bez dopłaty za odległość — do wszystkich jedenastu sołectw gminy. Przytkowice i Leńcze leżą zresztą po wschodniej stronie, bliżej Skawiny, więc często jestem tam po drodze z Krakowa. Powiedz przy umawianiu, którą drogą najwygodniej do Was dojechać.",
    },
    ...faqWspolne("w gminie Kalwaria Zebrzydowska"),
    {
      question: "Prowadzę warsztat przy domu i nie mam stałych godzin. Da się?",
      answer:
        "Da się i to bardzo częsty przypadek w tej gminie. Powiedz po prostu, kiedy realnie kończysz — dopasuję się, także jeśli to późne popołudnie albo sobota. Prezentacja trwa około dwóch godzin i wolę przyjechać wtedy, kiedy naprawdę masz spokój, niż wcisnąć się w przerwę między jednym a drugim zleceniem.",
    },
    {
      question: "Kiszę ogórki po swojemu. Thermomix w tym pomoże?",
      answer:
        "W samym kiszeniu nie i nie będę udawać, że pomoże — ogórki robi sól i czas, w słoju, bez żadnego urządzenia. Pomaga w tym, co jest dookoła: w zalewach, pastach, sosach, zupach i przetworach robionych partiami w sezonie. To akurat ta praca, której nikomu nie chce się robić ręcznie w sierpniowy upał.",
    },
  ],

  geo: { lat: 49.8667, lng: 19.6833 },
};
