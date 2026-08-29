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
 * WIŚNIOWA — gmina wiejska, powiat myślenicki, dolina Krzyworzeki
 * między masywami Lubomira i Cietnia. 7 542 mieszkańców (31.12.2024)
 * na 67,1 km², gęstość 112 os./km². Siedem sołectw.
 *
 * OŚ STRONY: OBSERWATORIUM ASTRONOMICZNE NA LUBOMIRZE.
 * Zbudowane 1922, spalone przez Niemców 15 września 1944,
 * odbudowane i otwarte 6 października 2007. Stąd, 3 kwietnia 1925 r.,
 * Lucjan Orkisz odkrył kometę C/1925 G1 — PIERWSZĄ KOMETĘ ODKRYTĄ
 * PRZEZ POLAKA. OBIE ODKRYTE TU KOMETY SĄ W HERBIE GMINY.
 * To jedyne obserwatorium w Polsce stale udostępniane zwiedzającym.
 *
 * DRUGA OŚ: gmina rośnie (+13,5% ludności 2002–2024), ma dodatni
 * przyrost naturalny (+7) i dodatnie saldo migracji (+8) w 2024 r.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 7 542
 *   mieszkańców, 67,1 km², 112 os./km², średni wiek 38,6 lat
 *   (Polska: 42,7). W 2024: 78 urodzeń, 71 zgonów (+7), saldo
 *   migracji +8. Wzrost o 13,5% w latach 2002–2024,
 * — SOŁECTWA (7, ludność wg rejestru gminnego, stan 03.07.2024):
 *   Wiśniowa 2 293, Lipnik 1 710, Węglówka 1 311, Wierzbanowa 667,
 *   Poznachowice Dolne 518, Kobielnik 508, Glichów 457,
 * — GÓRY: Lubomir 903,6 m n.p.m. (wybitność 349 m), Łysina 891 m,
 *   Ciecień 829 m (wybitność 324 m). ⚠️ Pasmo Lubomira i Łysiny
 *   bywa zaliczane do Beskidu Wyspowego (Kondracki 1998) ALBO
 *   do Beskidu Makowskiego (mapy, Solon 2018). Sam urząd gminy pisze
 *   „na pograniczu Beskidu Średniego i Beskidu Wyspowego" — i tak
 *   też piszę na stronie,
 * — OBSERWATORIUM: inicjatywa prof. Tadeusza Banachiewicza; książę
 *   Kazimierz Lubomirski podarował 10 ha lasu i leśniczówkę na
 *   szczycie zwanym wtedy Łysiną — NAZWĘ LUBOMIR NADANO W 1932 R.
 *   na jego cześć. Budowę ukończono w 1922, stację oddano
 *   2 czerwca 1922. Kierownicy: Jan Gadomski (1922–1924),
 *   Lucjan Orkisz (1924–1927), Władysław Tęcza (1936–1944).
 *   KOMETA C/1925 G1 (Orkisz) — 3 kwietnia 1925, PIERWSZA KOMETA
 *   ODKRYTA PRZEZ POLAKA. Kometa C/1936 O1 (Kaho-Kozik-Lis) —
 *   współodkryta 17 lipca 1936 przez WŁADYSŁAWA LISA, pracownika
 *   gospodarczego obserwatorium. OBIE KOMETY SĄ W HERBIE GMINY.
 *   ZNISZCZENIE: 15 września 1944 — spalone przez Niemców wraz
 *   z biblioteką, w odwecie za działalność partyzancką. Ocalały
 *   betonowe schody i podstawa teleskopu. ODBUDOWA: komitet
 *   22.03.2003, pozwolenie 26.02.2004, kamień węgielny 17.07.2006
 *   (w 70. rocznicę odkrycia Lisa), nadanie imienia Banachiewicza
 *   18.04.2007, OTWARCIE 6 PAŹDZIERNIKA 2007. Właściciel: Gmina
 *   Wiśniowa; obsługa: Zespół Placówek Oświatowych w Węglówce.
 *   Sezon kwiecień–listopad, soboty i niedziele. ⚠️ Obserwatorium
 *   leży administracyjnie we wsi WĘGLÓWKA, nie w Wiśniowej,
 * — WĘGLÓWKA — „NAJPIĘKNIEJSZA MAŁOPOLSKA WIEŚ 2024" w konkursie
 *   Województwa Małopolskiego; 60 tys. zł nagrody; startowało
 *   37 sołectw (informacja z 4 lipca 2024),
 * — KOŚCIÓŁ ŚW. MARCINA w Wiśniowej: DREWNIANY, konstrukcji zrębowej,
 *   ok. 1730 r., konsekracja 1747; XVII-wieczny obraz Matki Boskiej;
 *   dzwon z 1726 r. z pracowni Kaspra Kramnitza. W rejestrze zabytków
 *   także bożnica w Wiśniowej oraz dwa cmentarze z I wojny światowej
 *   (nr 373 i nr 374),
 * — PACYFIKACJA WIŚNIOWEJ 17–18 września 1944 r. ⚠️ LICZBA OFIAR
 *   ROZBIEŻNA: 76 (Fajkowski/Religa 1981) albo 78 (serwis gminy).
 *   Nie podaję liczby. Wieś odznaczona Orderem Krzyża Grunwaldu
 *   II klasy. 12 września 1944 — bitwa o „most glichowski",
 * — GOSPODARKA (2024): 889 podmiotów REGON, 759 osób fizycznych;
 *   przemysł i budownictwo 44,7%, rolnictwo tylko 12 podmiotów
 *   (1,3%). ⚠️ BEZROBOCIE: to samo źródło podaje 3,1% i 3,6% —
 *   nie podaję liczby. Pracujących 555 osób (2021),
 * — DOJAZDY DO PRACY: 605 wyjeżdża, 131 przyjeżdża. ⚠️ Rok pomiaru
 *   nie jest jednoznaczny — podaję kierunek zjawiska, nie liczby,
 * — KGW: SIEDEM, po jednym na sołectwo — Wiśniowa, Glichów,
 *   Poznachowice Dolne, Kobielnik, Węglówka, Wierzbanowa, Lipnik,
 * — DW964 (Kasina Wielka – Biskupice Radłowskie) — główna oś gminy;
 *   przez Wierzbanową, Wiśniową i Poznachowice Dolne. Wiśniowa–
 *   Dobczyce ok. 12,9 km po DW964. Za Wiśniową droga wznosi się
 *   przez Przełęcz Wierzbanowską i Przełęcz Wielkie Drogi,
 * — KOLEJ: w gminie nie ma linii. Najbliższa infrastruktura to
 *   przystanek Kasina Wielka (ok. 11 km) — ale jest NIECZYNNY,
 *   podobnie jak stacja Mszana Dolna (linia 104 w modernizacji).
 *   PRAKTYCZNIE GMINA NIE MA DOSTĘPU DO CZYNNEJ KOLEI PASAŻERSKIEJ,
 * — BUSY: Koleje Małopolskie A9 (Wieliczka–Dobczyce–Wiśniowa)
 *   i A11 (Mszana Dolna–Wiśniowa–Myślenice); przewoźnicy prywatni
 *   do Krakowa i Myślenic,
 * — SĄSIEDZI (7): Dobczyce, Dobra, Jodłownik, Mszana Dolna,
 *   Myślenice, Pcim, Raciechowice. Dobra, Jodłownik i Mszana Dolna
 *   leżą w powiecie limanowskim,
 * — ZESPÓŁ REGIONALNY „BANDABUREK" (Wiśniowa).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WPISU NA MINISTERIALNĄ LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie
 *   znaleziono żadnego z tej gminy, ale pełnego rejestru nie udało
 *   się otworzyć — piszę ostrożnie,
 * — NAZW PRACODAWCÓW. Struktura REGON wskazuje na gospodarkę
 *   mikrofirm; żadnej nazwy nie potwierdzono,
 * — NAZW PRODUCENTÓW ŻYWNOŚCI. Nie potwierdzone,
 * — LICZBY OFIAR PACYFIKACJI 1944. Źródła podają 76 i 78,
 * — STOPY BEZROBOCIA. To samo źródło podaje dwie wartości,
 * — CZASÓW PRZEJAZDU DO MYŚLENIC, KRAKOWA I LIMANOWEJ. Nie
 *   potwierdzone; podaję tylko odległości wyliczalne z pikietażu DW964,
 * — NAZWY I TERMINU ZLOTU PARALOTNIARZY na Cietniu. Nie potwierdzone,
 * — KIERUNKÓW PRODUKCJI ROLNEJ. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — DOMENA wisniowa.pl TO INNA GMINA — Wiśniowa w powiecie
 *   strzyżowskim, województwo podkarpackie. Wyszukiwarki zwracają
 *   przede wszystkim tamtą,
 * — POZNACHOWICE DOLNE (gm. Wiśniowa) ≠ POZNACHOWICE GÓRNE
 *   (gm. Raciechowice),
 * — WĘGLÓWKA jest też w powiecie krośnieńskim (podkarpackie),
 * — KUDŁACZE I SCHRONISKO PTTK leżą administracyjnie w GMINIE PCIM,
 * — STACJA NARCIARSKA ŚNIEŻNICA to Kasina Wielka, gmina Mszana Dolna,
 * — SZCZYRZYC Z KLASZTOREM CYSTERSÓW to gmina Jodłownik,
 * — „JABŁKA Z RACIECHOWIC" I „JODŁOWNICKI KOŁACZ Z SEREM" to produkty
 *   gmin sąsiednich, nie tutejsze,
 * — OBSERWATORIUM JEST NA LUBOMIRZE, ADMINISTRACYJNIE W WĘGLÓWCE,
 * — WÓJT-INICJATOR ODBUDOWY: źródła podają „Julian" i „Juliusz"
 *   Murzyn — nie podaję imienia.
 */

export const WISNIOWA: CityContent = {
  slug: "wisniowa",
  h1: "Thermomix Wiśniowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Wiśniowa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Wiśniowa (pow. myślenicki): bezpłatna prezentacja TM7 u Ciebie w kuchni — Wiśniowa, Lipnik, Węglówka, Kobielnik. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wiśniowa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Wiśniowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Wiśniowa w powiecie myślenickim przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedmiu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie siedem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Wiśniowa – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Wiśniowej, jak w Lipniku, Węglówce, Kobielniku czy Glichowie.",
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
      heading: "Gmina, która ma dwie komety w herbie",
      paragraphs: [
        "W herbie gminy Wiśniowa są dwie komety. To nie jest ozdobnik ani wymyślona legenda — obie zostały odkryte tu, na szczycie Lubomira, z obserwatorium astronomicznego, które stoi na wysokości dziewięciuset czterech metrów.",
        "Historia jest krótka i dramatyczna. Obserwatorium powstało z inicjatywy profesora Tadeusza Banachiewicza, a książę Kazimierz Lubomirski oddał na nie dziesięć hektarów lasu i leśniczówkę na szczycie, który wtedy nazywał się jeszcze Łysiną — nazwę Lubomir nadano mu w tysiąc dziewięćset trzydziestym drugim roku na cześć darczyńcy. Stację oddano do użytku drugiego czerwca tysiąc dziewięćset dwudziestego drugiego.",
        "Trzeciego kwietnia tysiąc dziewięćset dwudziestego piątego roku Lucjan Orkisz odkrył stąd kometę — pierwszą kometę odkrytą przez Polaka. Jedenaście lat później, siedemnastego lipca tysiąc dziewięćset trzydziestego szóstego, drugą współodkrył Władysław Lis, pracownik gospodarczy obserwatorium. Nie astronom, nie profesor: człowiek zatrudniony do pracy przy budynku.",
        "Piętnastego września tysiąc dziewięćset czterdziestego czwartego roku Niemcy spalili obserwatorium wraz z biblioteką, w odwecie za działalność partyzancką w tym paśmie. Ocalały betonowe schody i podstawa teleskopu. Dwa dni później, siedemnastego i osiemnastego września, spacyfikowali samą Wiśniową; wieś została później odznaczona Orderem Krzyża Grunwaldu drugiej klasy.",
        "Odbudowę zaczęto dopiero w dwa tysiące trzecim roku. Kamień węgielny wmurowano siedemnastego lipca dwa tysiące szóstego, w siedemdziesiątą rocznicę odkrycia Lisa, a szóstego października dwa tysiące siódmego obserwatorium otwarto ponownie. Prowadzi je gmina, a obsługuje zespół szkół w Węglówce — i jest dziś jedynym obserwatorium w Polsce stale udostępnianym zwiedzającym, od kwietnia do listopada, w soboty i niedziele.",
        "Sama gmina też ma się dobrze. Siedem tysięcy pięćset czterdzieści dwie osoby, wzrost o trzynaście i pół procenta od dwa tysiące drugiego roku, dodatni przyrost naturalny i dodatnie saldo migracji w dwa tysiące dwudziestym czwartym, średni wiek trzydzieści osiem i pół roku przy krajowych czterdziestu trzech. A Węglówka, ta sama wieś, która obsługuje obserwatorium, wygrała w lipcu dwa tysiące dwudziestego czwartego roku tytuł Najpiękniejszej Małopolskiej Wsi — na trzydzieści siedem startujących sołectw.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Wiśniowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa: Wiśniowa, Lipnik, Węglówka, Wierzbanowa, Poznachowice Dolne, Kobielnik albo Glichów. Gmina jest górzysta i rozciągnięta wzdłuż doliny Krzyworzeki, więc nazwa wsi naprawdę pomaga mi ułożyć trasę. Dopłaty za odległość nie ma nigdzie.",
        "Jeśli dojeżdżasz do pracy — a stąd wyjeżdża sześćset pięć osób przy stu trzydziestu jeden przyjeżdżających — powiedz to od razu. Wieczór w tygodniu i sobotnie przedpołudnie są tu najczęściej wybieranymi terminami.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Wiśniowa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Młoda gmina, w której z pracy wraca się przez przełęcz",
      paragraphs: [
        "Wiśniowa jest gminą młodą: średni wiek mieszkańca to trzydzieści osiem i pół roku, a dzieci do czternastego roku życia jest dwadzieścia dwa i pół procenta populacji. To znaczy, że jeżdżę tu głównie do domów z dziećmi — i to zmienia rozmowę o kuchni.",
        "Jednocześnie miejsc pracy na miejscu jest mało: pięćset pięćdziesiąt pięć osób pracujących w gminie, a sześćset pięć wyjeżdżających poza nią. Do Myślenic albo Dobczyc jedzie się drogą wojewódzką przez przełęcze, a zimą to nie jest ta sama droga co latem. Powrót po siedemnastej jest tu regułą, nie wyjątkiem.",
        "Praktyczna korzyść jest wtedy zawsze ta sama i wolę ją powiedzieć bez ozdobników. Wstawiasz danie jednogarnkowe rano albo dziecko wstawia po szkole, urządzenie prowadzi przepis krok po kroku, samo się wyłącza i czeka. Wracasz i jest ciepły obiad — a nie kanapka zjedzona na stojąco o dwudziestej.",
        "Druga rzecz to dzieci, które mogą gotować same. W domu, z którego oboje rodzice dojeżdżają, nastolatek zostaje po szkole na kilka godzin. Przepis prowadzony krok po kroku, brak otwartego ognia i brak rozgrzanej patelni oznaczają, że jest w stanie wstawić obiad, a nie tylko odgrzać. To jest, w moim doświadczeniu, najczęstszy realny powód zakupu w takich gminach.",
        "Trzecia rzecz to gotowanie z zapasem, które w górach ma dodatkowy sens. Do sklepu nie skoczy się tu na dół, a zimą droga przez przełęcz bywa trudna. Zupa na kilka dni, sos, pasty kanapkowe, ciasto i mrożonki robione seriami w jednym naczyniu oszczędzają nie tylko czas, ale i kursy samochodem.",
        "I rzecz czwarta, o której mówię wprost: w domu dwuosobowym nie zaoszczędzicie godziny dziennie, bo tej godziny tam nie ma. Zmienia się co innego — łatwiej ugotować porządnie, kiedy nie chce się stać w kuchni, a na niedzielę da się zrobić duży obiad bez spędzania przy nim całego przedpołudnia.",
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
    heading: "Wiśniowa i gotowanie — siedem sołectw, siedem kół gospodyń",
    paragraphs: [
      "Nie znalazłam żadnego produktu z gminy Wiśniowa na ministerialnej Liście Produktów Tradycyjnych i nie potwierdziłam ani jednego producenta żywności z nazwy. Mogłabym w to miejsce wstawić coś ogólnie beskidzkiego i pewnie nikt by nie sprawdził — nie zrobię tego.",
      "Od razu prostuję dwie rzeczy, które w tej okolicy mieszają się najczęściej. „Jabłka z Raciechowic” pochodzą z gminy Raciechowice, a „jodłownicki kołacz z serem” — z gminy Jodłownik. Obie sąsiadują z Wiśniową i obie bywają opisywane jako „specjały Beskidu Wyspowego”, ale to nie są produkty tutejsze.",
      "Za to coś, co w tej gminie naprawdę jest i co mnie zaskoczyło: siedem kół gospodyń wiejskich na siedem sołectw. Wiśniowa, Glichów, Poznachowice Dolne, Kobielnik, Węglówka, Wierzbanowa i Lipnik — po jednym w każdej wsi, bez wyjątku. Do tego zespół regionalny „Bandaburek”, kultywujący lokalny taniec.",
      "To jest, moim zdaniem, uczciwszy opis tutejszej kuchni niż wymyślony „przysmak regionalny”: gmina, w której gotuje się wspólnie, na dożynki, na festyny i na przeglądy, w każdej wsi osobno.",
      "Co z tego wynika dla urządzenia? Tyle, co zawsze przy gotowaniu na większą liczbę osób, a koła gospodyń robią to kilka razy w roku. Ciasto trzeba wyrobić, farsz posiekać, masę utrzeć — po wielokroć, i to jest ta część, która zjada całe przedpołudnie. Urządzenie zabiera dokładnie ją. Przepisu, wprawy ani rąk do pracy nie zastąpi.",
    ],
  },

  districtsHeading: "Gdzie w gminie Wiśniowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu sołectw, bez żadnej dopłaty za odległość: Wiśniowej, Lipnika, Węglówki, Wierzbanowej, Poznachowic Dolnych, Kobielnika i Glichowa.",
    "Gmina zajmuje sześćdziesiąt siedem kilometrów kwadratowych i liczy siedem tysięcy pięćset czterdzieści dwie osoby. Leży w dolinie Krzyworzeki, między masywami Lubomira i Cietnia — sam urząd gminy opisuje to położenie jako pogranicze Beskidu Średniego i Beskidu Wyspowego, i tak też o tym piszę, bo geografowie dzielą tu pasma różnie.",
    "Główną osią jest droga wojewódzka numer dziewięćset sześćdziesiąt cztery, z Kasiny Wielkiej przez Wierzbanową, Wiśniową i Poznachowice Dolne do Dobczyc i dalej Wieliczki. Z Wiśniowej do Dobczyc jest tą drogą niecałe trzynaście kilometrów. Za Wiśniową droga wznosi się przez Przełęcz Wierzbanowską i Przełęcz Wielkie Drogi — zimą warto to wziąć pod uwagę.",
    "O kolei uczciwie: w gminie nie ma linii kolejowej, a najbliższy przystanek, Kasina Wielka, jest nieczynny — podobnie jak stacja w Mszanie Dolnej, bo linia jest w modernizacji. W praktyce gmina nie ma dziś dostępu do czynnej kolei pasażerskiej. Kursują natomiast busy: Koleje Małopolskie do Wieliczki przez Dobczyce oraz do Myślenic przez Węglówkę, Kobielnik i Lipnik. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Dwie uwagi porządkowe. Obserwatorium na Lubomirze leży administracyjnie w Węglówce, nie w Wiśniowej — to kilka kilometrów różnicy. A Poznachowice Dolne to gmina Wiśniowa; Poznachowice Górne należą już do Raciechowic.",
  ],
  districts: [
    "Wiśniowa",
    "Lipnik",
    "Węglówka",
    "Wierzbanowa",
    "Poznachowice Dolne",
    "Kobielnik",
    "Glichów",
  ],

  nearbyHeading: "Dobczyce, Myślenice, Pcim i Raciechowice też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Wiśniowa graniczy z siedmioma gminami: Dobczycami, Myślenicami, Pcimiem i Raciechowicami z powiatu myślenickiego oraz Dobrą, Jodłownikiem i Mszaną Dolną z powiatu limanowskiego. Do każdej z nich dojeżdżam i do żadnej nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Wiśniowa, czy już Raciechowice albo Jodłownik — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Dobczyce",
    "Raciechowice",
    "Myślenice",
    "Jodłownik",
    "Limanowa",
    "Gdów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Wiśniowa", "w powiecie myślenickim"),

  faq: [
    {
      question: "Czy obserwatorium na Lubomirze jest w Wiśniowej?",
      answer:
        "Na Lubomirze, czyli w granicach gminy Wiśniowa — ale administracyjnie we wsi Węglówka, kilka kilometrów od samej Wiśniowej. To zresztą jedyne obserwatorium w Polsce stale udostępniane zwiedzającym, od kwietnia do listopada w soboty i niedziele. Prowadzi je gmina, a obsługuje zespół szkół w Węglówce. Obie komety odkryte tu przed wojną są w herbie gminy.",
    },
    ...faqWspolne("w gminie Wiśniowa"),
    {
      question: "Mieszkam w Poznachowicach Dolnych. Dojedziesz?",
      answer:
        "Dojadę, bez dopłaty, tak samo jak do Wiśniowej. Obsługuję wszystkie siedem sołectw. Przy umawianiu proszę tylko o pełną nazwę: Poznachowice Dolne należą do gminy Wiśniowa, a Poznachowice Górne — do sąsiedniej gminy Raciechowice. Do obu i tak dojeżdżam, ale trasę układam inaczej.",
    },
    {
      question: "Zimą droga przez przełęcz bywa trudna. Czy to problem?",
      answer:
        "Nie jest. Jeżdżę tu przez cały rok i dojazd wliczam w prezentację, niezależnie od pory roku i pogody. Jeśli warunki są naprawdę złe, dzwonię wcześniej i proponuję przełożenie — ale to moja decyzja i mój koszt, a nie Wasz. Przy umawianiu warto mi tylko powiedzieć, którą stroną najlepiej dojechać.",
    },
  ],

  geo: { lat: 49.7874, lng: 20.115 },
};
