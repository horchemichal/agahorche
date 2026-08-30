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
 * SPYTKOWICE — gmina wiejska, 9 953 mieszkańców (ewidencja gminna,
 * 31.12.2024), 51,56 km², powiat wadowicki. Najbardziej na północ
 * wysunięta gmina powiatu, granica północna to Wisła.
 *
 * ⚠️ KOLIZJA NAZW: w Małopolsce są DWIE gminy Spytkowice. Ta jest
 * w powiecie wadowickim (ok. 10 tys.) i dostaje goły slug.
 * Ta w powiecie nowotarskim (4 703, Podhale) dostanie slug
 * "spytkowice-nowotarskie" przy fali nowotarskiej — i wtedy TRZEBA
 * dopisać na obu stronach zdanie odsyłające do tej drugiej.
 *
 * OŚ STRONY: KARP. Gmina Spytkowice leży w obszarze unijnej
 * Chronionej Nazwy Pochodzenia „Karp zatorski” — rozporządzenie
 * Komisji (UE) nr 485/2011 z 9 czerwca 2011 r. Obszar obejmuje
 * TRZY gminy: Zator, Przeciszów i Spytkowice, łącznie 134 km².
 * To jest pierwszy w tym serwisie przypadek gminy objętej
 * OZNACZENIEM UNIJNYM, a nie tylko krajową listą.
 *
 * Druga oś: CZTERY przystanki kolejowe w jednej gminie wiejskiej
 * (Półwieś, Ryczów, Spytkowice Kępki, Spytkowice), SKA2 od
 * 1 października 2022, ok. 36 minut do Krakowa.
 *
 * Trzecia, kontrapunktowa: mimo tego wszystkiego gmina SIĘ KURCZY
 * — przyrost naturalny −21, saldo migracji −33. To odwrotność
 * sąsiednich Tomic. NIE ROBIĘ Z TEGO OSI i nie piszę o tym wprost
 * na stronie (patrz „czego tu nie ma”), ale wiem o tym, pisząc.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ChNP „KARP ZATORSKI”: rejestracja 9 czerwca 2011,
 *   rozporządzenie Komisji (UE) nr 485/2011. Obszar: gminy Zator
 *   (pow. oświęcimski), Przeciszów (pow. oświęcimski)
 *   i SPYTKOWICE (pow. wadowicki), 134 km². Karp zatorski jest też
 *   na krajowej Liście Produktów Tradycyjnych (2011),
 *   ⚠️ NAJWIĘKSZA PRODUKCJA ODBYWA SIĘ W GMINIE ZATOR. Dlatego
 *   piszę „gmina leży w obszarze chronionej nazwy pochodzenia”,
 *   a NIGDY „karp zatorski pochodzi ze Spytkowic”,
 * — STAWY: ośrodki hodowli w Dolinie Karpia to kompleksy
 *   w Przerębie, Spytkowicach, Bugaju i Rudzu. Tradycja hodowli
 *   ponad 700 lat. Kompleks „Stawy Spytkowice” — nazwane stawy
 *   m.in. Orłownik, Kempnik, Bagiennik, Jakubowiec, Grabnik.
 *   ⚠️ ok. 2 000 ha stawów to liczba dla CAŁEJ Doliny Karpia,
 *   NIE dla gminy Spytkowice. Nie podaję jej,
 * — NATURA 2000 „Dolina Dolnej Skawy” PLB120005, obszar specjalnej
 *   ochrony ptaków: bąk, bączek, rybitwa białowąsa, perkoz,
 *   błotniak stawowy; żerowisko bocianów białych,
 * — SOŁECTWA (6): Spytkowice 3 875, Ryczów 2 534, Bachowice 2 315,
 *   Miejsce 640, Półwieś 513, Lipowa 76,
 * — KOLEJ: SKA2 od 1 października 2022. CZTERY punkty zatrzymania
 *   w gminie: Półwieś, Ryczów, Spytkowice Kępki, Spytkowice.
 *   Czas Kraków Główny – Spytkowice ok. 36 min (komunikat gminy
 *   z 2022). Stacja Spytkowice, ul. Jana Pawła II, przystosowana
 *   dla osób o ograniczonej mobilności.
 *   ⚠️ AKTUALNEJ LICZBY PAR POCIĄGÓW NIE POTWIERDZONO — w tekście
 *   NIE PADA żadna liczba połączeń, tylko liczba przystanków,
 * — ZAMEK: dwór obronny z końca XV w., obecna bryła trójskrzydłowa
 *   z dwiema wieżami przed 1630 r. Właściciele: Opalińscy,
 *   Lubomirscy, Potoccy. Od 1995 r. oddział Archiwum Narodowego
 *   w Krakowie. 9 października 2023 r. przekazany Muzeum
 *   Narodowemu w Krakowie (użytkowanie wieczyste, 1 zł rocznie).
 *   ⚠️ NIE POTWIERDZONO, czy i kiedy będzie dostępny do zwiedzania
 *   — w tekście NIE PISZĘ, że można go zwiedzać,
 * — 5 KGW: Spytkowice, Ryczów, Bachowice, Miejsce, Półwieś.
 *   W gminie 29 organizacji społecznych,
 * — DROGA: DK44 (Gliwice–Kraków) przez teren gminy. Odległości wg
 *   gminy: Kraków 40 km, Wadowice 20 km, Oświęcim 22 km,
 * — GOSPODARKA: 978 podmiotów REGON, budownictwo 40,2% (393),
 *   handel 22,0%, rolnictwo tylko 1,4% (14 podmiotów).
 *   Mieszkania 2 754, oddane w 2024: 23, średnia 110,7 m².
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KURCZENIE SIĘ GMINY. Przyrost naturalny −21, saldo migracji
 *   −33, spadek −0,54% r/r. To prawda, ale nie jest moją rolą
 *   mówić ludziom, że ich gmina się wyludnia, na stronie
 *   o gotowaniu, po której następuje rozmowa o racie na lata.
 *   Ta sama zasada co przy Andrychowie i Wolbromiu,
 * — ZWIEDZANIE ZAMKU. Nie potwierdzone. Piszę o zamku jako
 *   o obiekcie i o zmianie właściciela, bez zapraszania do środka,
 * — LICZBA POCIĄGÓW. Nie potwierdzona dla 2026. Piszę o czterech
 *   przystankach (potwierdzone) i o czasie ok. 36 min z zastrzeżeniem,
 * — LICZBY EDYCJI IMPREZ GOK. Numeracja urywa się ok. 2017.
 *   NIE ekstrapoluję,
 * — DUŻY PRACODAWCA. Nie ustalono żadnego. Nie wymyślam.
 *
 * PUŁAPKI:
 * — TO NIE SĄ Spytkowice nowotarskie (Podhale, 4 703 mieszk.).
 *   Jeśli w źródle jest Podhale, Orawa, Rabka, Chabówka albo Nowy
 *   Targ — to zła gmina,
 * — NIE PISAĆ, że karp zatorski „pochodzi ze Spytkowic”. Gmina
 *   leży w obszarze chronionym; produkcja głównie w Zatorze,
 * — sąsiednie TOMICE NIE SĄ objęte ChNP — są w Dolinie Karpia
 *   jako marce lokalnej. To co innego,
 * — zamek NIE mieści już Archiwum Narodowego (od 2023 należy do MNK),
 * — 2 000 ha stawów to cała Dolina Karpia, nie gmina.
 */

export const SPYTKOWICE: CityContent = {
  slug: "spytkowice",
  h1: "Thermomix Spytkowice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Spytkowice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Spytkowice (powiat wadowicki): bezpłatna prezentacja TM7 u Ciebie w kuchni — Ryczów, Bachowice, Półwieś. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Spytkowice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Spytkowice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Spytkowice w powiecie wadowickim przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich sześciu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Spytkowice, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Spytkowice – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Spytkowicach, jak w Ryczowie, Bachowicach czy Półwsi.",
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
      heading: "Gmina w obszarze chronionym przez Unię — i cztery przystanki",
      paragraphs: [
        "Zacznę od rzeczy, której nie ma żadna inna gmina, do której jeżdżę. Spytkowice leżą w obszarze Chronionej Nazwy Pochodzenia „Karp zatorski”, zarejestrowanej przez Komisję Europejską w czerwcu dwa tysiące jedenastego roku. Obszar obejmuje trzy sąsiadujące gminy — Zator, Przeciszów i właśnie Spytkowice — łącznie sto trzydzieści cztery kilometry kwadratowe.",
        "Napiszę od razu, czego to nie znaczy, bo łatwo tu przesadzić. Największa produkcja odbywa się w gminie Zator i nie będę udawać, że jest inaczej. Spytkowice są częścią obszaru chronionego, nie jego środkiem. Ale to i tak rzadkość: oznaczenie unijne to zupełnie inna kategoria niż lokalny folder z przepisami, a hodowla karpia ma tu ponad siedemset lat.",
        "Krajobraz jest temu podporządkowany. Kompleks Stawy Spytkowice to woda ciągnąca się przez znaczną część gminy — stawy mają tu własne nazwy: Orłownik, Kempnik, Bagiennik, Jakubowiec, Grabnik. Cały teren należy do obszaru Natura 2000 „Dolina Dolnej Skawy”, chroniącego ptaki: bąka, bączka, rybitwę białowąsą, błotniaka stawowego. Gmina od północy kończy się na Wiśle.",
        "Druga rzecz jest zupełnie współczesna i praktyczna. W gminie Spytkowice są cztery punkty zatrzymania pociągu: Półwieś, Ryczów, Spytkowice Kępki i sama stacja Spytkowice. Cztery, w gminie wiejskiej. Od października dwa tysiące dwudziestego drugiego roku jeżdżą tędy Koleje Małopolskie, a przejazd do Krakowa zajmuje według gminy około trzydziestu sześciu minut.",
        "Praktycznie znaczy to, że do bardzo wielu domów w tej gminie da się dojechać pociągiem i wielu ludzi tak właśnie jeździ do pracy. Wieczór po takim dniu wygląda zwykle podobnie: trzeba coś zjeść, a nie ma już siły stać przy garnku. I to jest cała rzecz, którą pokazuję na prezentacji — nie to, że urządzenie ugotuje coś wymyślnego, tylko że obiad może się gotować sam, kiedy Ty jeszcze jesteś w drodze.",
        "Mówię też wprost, czego Thermomix nie zrobi: nie zastąpi wprawy. W gminie, w której działa pięć kół gospodyń, tej wprawy akurat nie brakuje. Zabiera stanie obok garnka i te czynności, przez które gotowanie od zera odkłada się na „kiedy indziej”.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Spytkowice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w którym sołectwie mieszkasz: Spytkowice, Ryczów i Bachowice to trzy spore miejscowości leżące w różnych częściach gminy, a Miejsce, Półwieś i Lipowa są znacznie mniejsze. Od tego zależy godzina, o której realnie u Ciebie jestem.",
        "Jeśli dojeżdżasz koleją, po prostu powiedz, o której wracasz — wieczorne spotkania są tu normalne. Weekendy też.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
        {
          href: "/thermomix/spytkowice-nowotarskie",
          label: "Szukasz Spytkowic na Podhalu? Tu jest ich strona",
        },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Spytkowice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kuchnia w domu nad stawami",
      paragraphs: [
        "W gminie, gdzie jedni dojeżdżają koleją do Krakowa, drudzy pracują w okolicy, a jeszcze inni prowadzą własną działalność — a takich jest tu sporo, bo na tysiąc mieszkańców przypada blisko sto firm — rzadko wszyscy siadają do stołu o tej samej godzinie. Obiad musi przetrwać kilka powrotów albo powstać w dwóch turach.",
        "Praktyczne bywa tu przede wszystkim to, że danie da się ugotować wcześniej i odgrzać bez pilnowania, albo zaplanować tak, żeby dochodziło samo, kiedy nikogo jeszcze nie ma w domu. Rozdrabnianie, ucieranie, mieszanie, żeby nie przywarło — to wszystko dzieje się bez stania nad garnkiem.",
        "Osobno warto powiedzieć o świętach, bo w tej okolicy mają one bardzo konkretny kształt. Karp na Wigilię nie jest tu abstrakcją z reklamy, tylko rybą z sąsiedztwa. A przygotowanie ryby to sporo pracy dookoła: farsze, sosy, buliony, ciasta. Urządzenie nie usmaży karpia i nie będę udawać, że usmaży — ale wszystko, co się przy nim robi, przestaje wymagać stania w kuchni przez pół dnia.",
        "Druga rzecz to gotowanie większą partią przez cały rok. Zupa na dwa dni, sos do zamrożenia, ciasto na pierogi, pasta kanapkowa, chleb — da się to robić seriami, w jednym naczyniu, bez rozstawiania połowy kuchni.",
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
    heading: "Karp zatorski — oznaczenie unijne, nie folder promocyjny",
    paragraphs: [
      "Gmina Spytkowice leży w obszarze Chronionej Nazwy Pochodzenia „Karp zatorski”, zarejestrowanej rozporządzeniem Komisji Europejskiej w czerwcu dwa tysiące jedenastego roku. Obszar chroniony obejmuje trzy gminy: Zator, Przeciszów i Spytkowice. Karp zatorski jest też wpisany na krajową Listę Produktów Tradycyjnych.",
      "Warto rozumieć, co to znaczy, bo to jest zupełnie inna kategoria niż zwykła lokalna specjalność. Chroniona Nazwa Pochodzenia to najmocniejsze z unijnych oznaczeń — obejmuje produkt, którego cały proces powstawania jest związany z konkretnym terenem. W całej Małopolsce takich produktów jest garść.",
      "Dodam od razu uczciwe zastrzeżenie: największa produkcja odbywa się w gminie Zator, nie w Spytkowicach. Gmina Spytkowice jest częścią obszaru chronionego i to jest fakt — ale byłoby przesadą pisać, że karp zatorski „pochodzi ze Spytkowic”. Nie zamierzam podciągać niczego pod lepiej brzmiące zdanie.",
      "Dla kuchni ma to bardzo praktyczne znaczenie, zwłaszcza w grudniu. Karp na Wigilię jest tu rybą z sąsiedztwa, a nie z reklamy, i przygotowuje się go poważnie. Sama ryba to patelnia albo piekarnik i urządzenie nie ma tu nic do roboty — powiem to wprost, zamiast naciągać. Ale wszystko dookoła już tak: farsze, sosy, bulion na zupę, ciasto na pierogi, masy na ciasta. To jest ta część wigilijnego gotowania, która zwykle zjada cały dzień.",
      "Poza sezonem zostaje sam krajobraz, który też coś zmienia. Stawy oznaczają latem gości i weekendy, kiedy nagle gotuje się dla większej liczby osób niż zwykle. Możliwość zrobienia czegoś porządnego bez trzydniowego planowania przydaje się wtedy bardziej niż jakikolwiek przepis.",
    ],
  },

  districtsHeading: "Gdzie w gminie Spytkowice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu sołectw, bez żadnej dopłaty za odległość: Spytkowice, Ryczów, Bachowice, Miejsce, Półwieś i Lipowa.",
    "Trzy pierwsze są duże — w każdym mieszka od dwóch do prawie czterech tysięcy osób — a trzy pozostałe znacznie mniejsze, przy czym w Lipowej mieszka niecała setka ludzi. To jedna gmina, ale skala miejscowości jest bardzo różna i warto o tym powiedzieć przy umawianiu.",
    "Wygodna rzecz, o której nie wszyscy wiedzą: w gminie są cztery punkty zatrzymania pociągu — Półwieś, Ryczów, Spytkowice Kępki i stacja Spytkowice. Cztery, w gminie wiejskiej. Od października dwa tysiące dwudziestego drugiego roku kursują tędy Koleje Małopolskie, a przejazd do Krakowa zajmuje według gminy około trzydziestu sześciu minut.",
    "Autem jedzie się drogą krajową z Krakowa w stronę Oświęcimia — do Krakowa jest stąd około czterdziestu kilometrów, do Wadowic dwadzieścia. W samych Spytkowicach stoi zamek: dwór obronny z końca piętnastego wieku, przebudowany przed tysiąc sześćset trzydziestym rokiem, przez lata siedziba oddziału Archiwum Narodowego, a od dwa tysiące dwudziestego trzeciego roku własność Muzeum Narodowego w Krakowie.",
  ],
  districts: [
    "Spytkowice",
    "Ryczów",
    "Bachowice",
    "Miejsce",
    "Półwieś",
    "Lipowa",
  ],

  nearbyHeading: "Tomice, Brzeźnica i Zator też są na mojej trasie",
  nearbyParagraphs: [
    "Spytkowice graniczą z Zatorem, Tomicami, Brzeźnicą, Alwernią i Czernichowem — czyli z gminami, w których pracuję od dawna. Do żadnej z nich nie doliczam kosztu dojazdu.",
    "Jedna uwaga, żeby nie było nieporozumienia: to jest strona gminy Spytkowice w powiecie wadowickim, nad Wisłą. W Małopolsce jest jeszcze druga gmina o tej samej nazwie, na Podhalu w powiecie nowotarskim. Jeśli szukasz tamtej, to niestety nie ta strona.",
  ],
  nearbyTowns: [
    "Tomice",
    "Brzeźnica",
    "Zator",
    "Alwernia",
    "Wadowice",
    "Kraków",
  ],

  about: blokOMnie("do gminy Spytkowice", "w powiecie wadowickim"),

  faq: [
    {
      question: "Czy to Spytkowice pod Wadowicami, czy te na Podhalu?",
      answer:
        "Pod Wadowicami — te nad Wisłą, ze stawami i zamkiem, w powiecie wadowickim. W Małopolsce są dwie gminy o tej nazwie i łatwo je pomylić. Do obu zresztą dojeżdżam, ale to jest strona tej wadowickiej.",
    },
    ...faqWspolne("w gminie Spytkowice"),
    {
      question: "Robimy karpia na Wigilię. Thermomix w tym pomoże?",
      answer:
        "W samym smażeniu czy pieczeniu ryby nie i nie będę udawać, że pomaga — to patelnia albo piekarnik. Pomaga we wszystkim dookoła: farsze, sosy, bulion na zupę, ciasto na pierogi, masy na ciasta. To akurat ta część wigilijnego gotowania, która zjada cały dzień. Na prezentacji chętnie pokażę to na Twoich przepisach, nie na moich.",
    },
    {
      question: "Wracam pociągiem do Ryczowa. O której możesz przyjechać?",
      answer:
        "Dopasuję się do Twojego rozkładu — powiedz, o której realnie jesteś w domu, a resztę ułożę wokół tego. W tej gminie są aż cztery przystanki, więc sporo osób umawia się właśnie po powrocie pociągiem. Prezentacja trwa około dwóch godzin, więc spokojnie mieści się w wieczorze.",
    },
  ],

  geo: { lat: 49.9951, lng: 19.4765 },
};
