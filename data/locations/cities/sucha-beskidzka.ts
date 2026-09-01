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
 * SUCHA BESKIDZKA — gmina miejska, stolica powiatu suskiego.
 * Miasto bez sołectw, ok. 8,8 tys. mieszkańców na 27,5 km².
 *
 * OŚ STRONY: FIDELTRONIK. W miasteczku liczącym niecałe dziewięć tysięcy
 * mieszkańców ma siedzibę największy polski dostawca usług kontraktowej
 * produkcji elektroniki, zatrudniający średnio ponad tysiąc trzysta osób.
 * To znaczy, że w tej jednej firmie pracuje więcej ludzi niż co ósmy
 * mieszkaniec miasta. ŚWIADOMIE NIE zamek i NIE karczma „Rzym” —
 * na te dwie frazy pisze każdy przewodnik, a poza tym legenda
 * o Twardowskim jest hipotezą, nie faktem (patrz PUŁAPKI).
 *
 * Druga oś: praca zmianowa i dojazdy. Miasto ma dwie czynne stacje
 * kolejowe i jest węzłem dawnej Galicyjskiej Kolei Transwersalnej.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — FIDELTRONIK POLAND Sp. z o.o., KRS 0000085589, siedziba w Suchej
 *   Beskidzkiej. Grupa założona w 1986 r. przez Zbigniewa Fidelusa.
 *   Zatrudnienie średnie wg sprawozdania: 1 311 osób (2025),
 *   1 372 osoby (2024). Przychody 1,492 mld zł (2025).
 *   W 2022 r. ogłoszono inwestycję ponad 90 mln zł w halę 12 000 m²,
 * — DWIE CZYNNE STACJE: „Sucha Beskidzka” (pociągi regionalne
 *   do Krakowa Głównego, najszybszy ok. 1 h 27 min, pierwszy 5:13,
 *   ostatni 20:14) oraz „Sucha Beskidzka Zamek” (ok. 21 odjazdów
 *   dziennie, głównie PKP Intercity w kierunku Zakopanego i wybrzeża),
 * — WĘZEŁ KOLEJOWY: dworzec budowany 1881–82; 16 grudnia 1884 r.
 *   otwarto odcinek Żywiec–Sucha–Chabówka–Nowy Sącz Galicyjskiej Kolei
 *   Transwersalnej. Krzyżują się tu linie 97 (Skawina–Żywiec)
 *   i 98 (Sucha Beskidzka–Chabówka),
 * — SAMOCHODEM do Krakowa ok. 56 km, ok. 1 h 08 min,
 * — GOSPODARKA (GUS, 31.12.2024): 1 435 podmiotów REGON, w tym
 *   1 021 osób fizycznych; 1 367 mikro, 50 małych, 16 średnich
 *   i 2 duże. Bezrobocie rejestrowane 4,4%,
 * — SZPITAL: ZOZ w Suchej Beskidzkiej zajął 8. miejsce w Polsce
 *   w rankingu „Liderzy Zarządzania — najlepiej zarządzane szpitale
 *   publiczne” (listopad 2025), w kategorii szpitali z kontraktem NFZ
 *   200–399 mln zł,
 * — STOWARZYSZENIE „SKARBIEC SUSKI”, zał. 2016, KRS 0000628595,
 *   siedziba Błądzonka 73 — startuje w konkursach kulinarnych,
 * — DNI ZIEMI SUSKIEJ 2026: 19–21 czerwca, w programie Zamkowy
 *   Jarmark Staroci. Organizator nie podaje numeru edycji,
 * — LOKACJA 1405 r., prawa miejskie nadane przez władze austriackie
 *   w 1896 r.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LEGENDY O TWARDOWSKIM JAKO FAKTU. Oficjalna strona miasta stawia
 *   to jako pytanie: „być może suska karczma stała się pierwowzorem”.
 *   Karczma jest z drugiej połowy XVIII w. i to jest jedyna pewna rzecz.
 *   W tekście piszę o niej jako o budynku i o hipotezie, nigdy
 *   jako o miejscu, „w którym diabły porwały Twardowskiego”,
 * — LICZBY „PRAWIE DZIESIĘĆ TYSIĘCY MIESZKAŃCÓW”. Tak pisze urząd
 *   miasta, ale GUS na 31.12.2024 podaje 8 801. Rozbieżność wynosi
 *   około tysiąca osób. Podaję liczbę GUS albo nie podaję żadnej,
 * — ROKU ZMIANY NAZWY. Urząd podaje 1964, część źródeł 1965.
 *   Nie podaję,
 * — LICZBY „OKOŁO 1500 PRACOWNIKÓW FIDELTRONIKA” — to dane
 *   ze strony stowarzyszenia gmin. Używam liczby ze sprawozdania
 *   finansowego, czyli 1 311,
 * — NUMERU EDYCJI DNI ZIEMI SUSKIEJ. Organizator go nie publikuje.
 *
 * PUŁAPKI:
 * — „SUSKA SECHLOŃSKA” TO NIE JEST PRODUKT Z SUCHEJ BESKIDZKIEJ.
 *   To śliwka suszona z Sechnej koło Laskowej w powiecie limanowskim,
 *   z chronionym oznaczeniem geograficznym UE. Nazwa myli i to jest
 *   najgroźniejsza pułapka w tym temacie. Strona mówi o tym wprost,
 * — MIASTO MA DWIE STACJE, nie jedną. Nie pisać „stacja kolejowa
 *   w Suchej Beskidzkiej” w liczbie pojedynczej,
 * — W SAMYM MIEŚCIE NIE MA POTWIERDZONEGO KGW. Koła działają
 *   w sąsiednich gminach (Zembrzyce, Stryszawa, Budzów, Bystra-Sidzina).
 *   Nie przypisywać ich Suchej,
 * — NAGRODA W KONKURSIE „O ZŁOTĄ WARZECHĘ” TO NIE WPIS NA LISTĘ
 *   PRODUKTÓW TRADYCYJNYCH. Konkurs organizuje zresztą GOK w Stryszawie,
 *   nie Sucha,
 * — TO GMINA MIEJSKA BEZ SOŁECTW. Nazwy części miasta poniżej są
 *   potoczne, nie administracyjne — strona mówi o tym wprost.
 */

export const SUCHA_BESKIDZKA: CityContent = {
  slug: "sucha-beskidzka",
  h1: "Thermomix Sucha Beskidzka – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Sucha Beskidzka — prezentacja",
  seoDescription:
    "Thermomix w Suchej Beskidzkiej: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sucha Beskidzka — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Suchej Beskidzkiej. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Suchej Beskidzkiej przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Umawiam się też na godziny, które pasują do pracy zmianowej.",

  highlights: highlightyStandardowe("całe miasto i okolica, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Suchej Beskidzkiej – jak wygląda prezentacja?",
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
      heading: "Miasteczko, w którym jedna firma zatrudnia tysiąc trzysta osób",
      paragraphs: [
        "Sucha Beskidzka liczy niecałe dziewięć tysięcy mieszkańców. Ma zamek, dwie stacje kolejowe i tytuł stolicy powiatu. Ma też coś, czego po miasteczku tej wielkości nikt się nie spodziewa: siedzibę największego polskiego producenta elektroniki kontraktowej.",
        "Firma powstała tutaj w tysiąc dziewięćset osiemdziesiątym szóstym roku i dziś zatrudnia średnio ponad tysiąc trzysta osób. Proszę to zestawić z liczbą mieszkańców: to tak, jakby w tej jednej hali pracował co ósmy suszanin. Roczne przychody idą w półtora miliarda złotych — z miasta, w którym z jednego końca na drugi idzie się kwadrans.",
        "Dla mnie ma to bardzo praktyczne znaczenie i to jest powód, dla którego o tym piszę. Duży zakład produkcyjny to praca zmianowa. To znaczy domy, w których ktoś wychodzi o piątej rano, ktoś inny wraca o dwudziestej drugiej, a obiad musi być jadalny w kilku różnych porach dnia i przez nikogo nie pilnowany.",
        "Do tego dochodzi drugi rytm: szpital powiatowy. To duży pracodawca w skali miasta — w listopadzie dwa tysiące dwudziestego piątego roku znalazł się na ósmym miejscu w Polsce w rankingu najlepiej zarządzanych szpitali publicznych w swojej kategorii. Praca na dyżury wygląda w kuchni podobnie jak praca na zmiany.",
        "W takich domach najbardziej przeszkadza nie to, że gotowanie jest trudne, tylko że wymaga obecności. Trzeba stać, mieszać, wracać co dziesięć minut. Urządzenie, które gotuje samo i samo się wyłącza, robi różnicę wtedy, gdy ktoś w domu śpi po nocce, a ktoś inny właśnie wychodzi.",
        "Mówię od razu, czego to nie zrobi: nie ugotuje bez Ciebie i nie sprawi, że przestaniesz planować zakupy. Zabiera stanie przy garnku i te czynności, przez które obiad odkłada się na wolny dzień.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Suchej Beskidzkiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Jeśli pracujesz na zmiany, powiedz to od razu. Umawiam się na przedpołudnia w dni robocze równie chętnie jak na wieczory — dla mnie to bez różnicy, a dla Ciebie to bywa jedyny sensowny termin. Weekendy też są normalną opcją.",
        "Powiedz też, czy mieszkasz w bloku, czy w domu. W Suchej jest i jedno, i drugie, a od tego zależy tylko tyle, gdzie się zaparkuje i którędy wniosę sprzęt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Suchej Beskidzkiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Obiad, który musi być dobry o trzech różnych porach",
      paragraphs: [
        "W domu, w którym ktoś pracuje na zmiany, obiad przestaje być wydarzeniem o czternastej. Staje się czymś, co ma czekać: na tego, kto wróci po dwudziestej drugiej, i na tego, kto zje o siódmej rano, bo dla niego to kolacja.",
        "To zmienia sposób gotowania bardziej, niż się wydaje. Sprawdzają się dania, które dobrze znoszą odgrzewanie i nie robią się gorsze drugiego dnia: gulasze, zupy, sosy, dania jednogarnkowe, potrawki. Gorzej wychodzą rzeczy, które trzeba zjeść od razu.",
        "Praktyczna korzyść jest tu bardzo konkretna. Danie jednogarnkowe gotuje się, kiedy Ty robisz coś innego albo śpisz, i samo się wyłącza. Nie trzeba wracać do kuchni zamieszać. To nie jest wygoda dla wygody — to jest różnica między obiadem ugotowanym a obiadem odłożonym.",
        "Druga rzecz to gotowanie z zapasem. Podwójna porcja zupy, sos na trzy dni, ciasto na pierogi, pasty kanapkowe do lodówki. W jednym naczyniu, bez rozstawiania połowy kuchni. W domu pracującym na zmiany zapas w lodówce jest wart więcej niż świeżo ugotowany obiad, którego nikt nie zdąży zjeść.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają coś robić, bo przepis prowadzi krok po kroku — a w domu, w którym rodzice bywają na różnych zmianach, to bywa realnie potrzebne.",
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
    heading: "Sucha Beskidzka i gotowanie — oraz pewne nieporozumienie",
    paragraphs: [
      "Zacznę od sprostowania, bo to jedno z tych nieporozumień, które chodzą po internecie i brzmią sensownie. Suska sechlońska, czyli suszona śliwka z chronionym oznaczeniem geograficznym Unii Europejskiej, nie ma nic wspólnego z Suchą Beskidzką. Pochodzi z Sechnej koło Laskowej w powiecie limanowskim, czyli z zupełnie innego końca Małopolski. Podobieństwo nazw jest przypadkowe.",
      "Skoro już przy uczciwości: nie znalazłam żadnego wpisu z Suchej Beskidzkiej na ministerialnej Liście Produktów Tradycyjnych. Mogłabym w to miejsce wpisać jakieś ogólne danie beskidzkie i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "Jest za to coś prawdziwego i lokalnego: konkurs potraw regionalnych „O Złotą Warzechę”, w którym startują koła gospodyń z całego powiatu suskiego. Nagradzano tam między innymi gęś po zembrzycku z kluskami z topinamburu, roladę serową z rydzami czy babę ziemniaczaną z żeberkami. To są nagrody konkursowe, nie wpisy prawne — i tak właśnie należy o nich mówić.",
      "Co z tego wynika dla urządzenia? Tyle, że w tej kuchni pracochłonne są rzeczy proste: ciasto na kluski trzeba wyrobić, farsz posiekać, sos zabielić tak, żeby się nie zwarzył. Żadna z tych czynności nie jest trudna. Wszystkie wymagają stania w kuchni. I dokładnie to urządzenie zabiera — nie smak, tylko czas spędzony przy blacie.",
    ],
  },

  districtsHeading: "Gdzie w Suchej Beskidzkiej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, bez żadnej dopłaty za odległość. Sucha Beskidzka jest gminą miejską i formalnie nie ma sołectw ani dzielnic — nazwy poniżej są potoczne i używam ich tylko po to, żeby łatwiej się dogadać przy umawianiu.",
    "Miasto leży w widłach Skawy i Stryszawki, w kotlinie otoczonej wzgórzami, i jest na tyle zwarte, że dojazd w każdy jego punkt zajmuje kilka minut. Lasy zajmują blisko połowę powierzchni gminy, co przy dwudziestu siedmiu kilometrach kwadratowych oznacza, że zabudowa jest naprawdę skupiona.",
    "Dojazd koleją jest tu wyjątkowo dobry jak na Beskidy i warto wiedzieć, że stacje są dwie. Ze stacji Sucha Beskidzka jadą pociągi regionalne wprost do Krakowa Głównego — najszybszy pokonuje trasę w niecałe półtorej godziny, pierwszy odjeżdża po piątej rano, ostatni po dwudziestej. Druga stacja, Sucha Beskidzka Zamek, obsługuje głównie pociągi dalekobieżne w stronę Zakopanego i wybrzeża.",
    "Ten węzeł ma zresztą swoją historię: dworzec zbudowano na początku lat osiemdziesiątych dziewiętnastego wieku, a w grudniu tysiąc osiemset osiemdziesiątego czwartego roku otwarto tędy odcinek Galicyjskiej Kolei Transwersalnej. Do dziś krzyżują się tu dwie linie. Samochodem do Krakowa jest około pięćdziesięciu sześciu kilometrów, czyli mniej więcej godzina drogi.",
  ],
  districts: [
    "Centrum i Rynek",
    "Błądzonka",
    "Osiedle Na Stawach",
    "Osiedle Beskidzkie",
    "Okolice dworca",
  ],

  nearbyHeading: "Zembrzyce, Stryszawa i Maków Podhalański też są na mojej trasie",
  nearbyParagraphs: [
    "Sucha Beskidzka jest stolicą powiatu i naturalnym punktem, z którego rozjeżdżam się po okolicy. Do Zembrzyc, Stryszawy, Makowa Podhalańskiego i Budzowa mam stąd po kilkanaście–dwadzieścia minut. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy miasta i gminy Stryszawa albo Zembrzyce i nie masz pewności, po której stronie, po prostu zapytaj. Dla mnie to i tak jedna trasa.",
  ],
  nearbyTowns: [
    "Zembrzyce",
    "Stryszawa",
    "Maków Podhalański",
    "Budzów",
    "Zawoja",
    "Kraków",
  ],

  about: blokOMnie("do Suchej Beskidzkiej", "w powiecie suskim"),

  faq: [
    {
      question: "Pracuję na zmiany. Da się umówić prezentację rano w tygodniu?",
      answer:
        "Da się i to bardzo częsty termin w Suchej. Przedpołudnie w dzień roboczy jest dla mnie równie normalne jak wieczór — powiedz po prostu, kiedy masz spokojne dwie godziny. Jeśli w domu ktoś śpi po nocce, też to uwzględnimy: prezentacja nie musi być głośna.",
    },
    ...faqWspolne("w Suchej Beskidzkiej"),
    {
      question: "Czy suska sechlońska pochodzi z Suchej Beskidzkiej?",
      answer:
        "Nie, i to jest częste nieporozumienie. Suska sechlońska to suszona śliwka z Sechnej koło Laskowej w powiecie limanowskim, wpisana na unijną listę chronionych oznaczeń geograficznych. Z Suchą Beskidzką łączy ją wyłącznie podobieństwo nazwy. Piszę to wprost, bo wolę prostować niż powtarzać.",
    },
    {
      question: "Mieszkam w bloku. Czy to problem przy prezentacji?",
      answer:
        "Żaden. Potrzebuję kawałka blatu i gniazdka — reszta to moja sprawa. Urządzenie i składniki przynoszę sam(a), a po gotowaniu sprzątam po sobie. Jeśli winda jest nieczynna albo mieszkasz wysoko, uprzedź mnie przy umawianiu, to po prostu przyjadę odpowiednio wcześniej.",
    },
  ],

  geo: { lat: 49.7411, lng: 19.5919 },
};
