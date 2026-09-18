import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * PILAWA — powiat garwoliński, woj. mazowieckie.
 * MIASTO 4 423 (GUS 31.12.2024), 6,7 km², 664,1 os./km².
 * Gmina miejsko-wiejska: 10 543 osoby, 77,1 km².
 * Leży na Równinie Garwolińskiej, ok. 150 m n.p.m.
 * ⚠ ŚREDNI WIEK 38,9 W MIEŚCIE — najmłodsze miasto tej fali,
 *   a gmina od 2002 r. urosła. DOBRY, BEZPIECZNY FAKT.
 *
 * ⚠⚠⚠ NAJWIĘKSZE RYZYKO TEJ STRONY — PISOWNIA:
 *   PILAWA (przez „l") ≠ PIŁAWA (przez „ł").
 *   Przez „ł" piszą się WSZYSTKIE obiekty dolnośląskie:
 *   Piława Górna (miasto), Piława Dolna (wieś), wieś Piława,
 *   rzeka Piława — dopływ Bystrzycy.
 *   ⚠ TEN BŁĄD POPEŁNIAJĄ NAWET ŹRÓDŁA BRANŻOWE — serwis
 *   o linii Skierniewice–Łuków konsekwentnie pisze „Piława"
 *   o mazowieckiej Pilawie. PRZY KAŻDYM WYSTĄPIENIU
 *   SPRAWDZIĆ LITERĘ. TWARDA GRANICA.
 * ⚠ Istnieje też WIEŚ PILAWA w powiecie piaseczyńskim
 *   (mazowieckie!) — w tym samym powiecie, w którym leży
 *   Tarczyn z tej samej fali.
 * ⚠⚠ „PILAW" / „PILAF" to POTRAWA RYŻOWA i NIE MA ŻADNEGO
 *   ZWIĄZKU ETYMOLOGICZNEGO Z MIASTEM. ⚠ NIE SUGERUJĘ,
 *   ŻE JEST. NIE ROBIĘ Z TEGO ŻARTU ANI KĄTA.
 *   TWARDA GRANICA.
 * Odmiana: „do Pilawy", „w Pilawie", „pilawski".
 *   ⚠ Formy nazwy mieszkańca NIE POTWIERDZONO słownikowo —
 *   NIE UŻYWAM JEJ W OGÓLE.
 *
 * HISTORIA — KOLEJ JEST TU WSZYSTKIM:
 * — ⚠⚠ POCHODZENIE NAZWY — DWIE WERSJE, OBIE Z TEGO SAMEGO
 *   ŹRÓDŁA: (a) od słowa „PIŁA", źle wymawianego przez
 *   niemieckich osadników, (b) od HERBU PILAWA hrabiów
 *   Potockich, w których dobrach miejscowość pojawia się
 *   w XVIII w. ⚠ PODAJĘ OBIE. NIE ROZSTRZYGAM.
 *   TO JEST PODSTAWA KĄTA I MUSI BYĆ UCZCIWIE POSTAWIONA.
 * — 1865 początek budowy Kolei Nadwiślańskiej,
 * — 1877 otwarcie linii; powstają DREWNIANY DWORZEC
 *   (zachowany), rampy przeładunkowe i PAROWOZOWNIA;
 *   to praktyczna data założycielska miasta,
 * — zachowała się też MUROWANA WIEŻA CIŚNIEŃ,
 * — 1910 — prywatny TARTAK,
 * — 1923 — fabryka chemiczna, osiem osób załogi,
 * — 1954 — Pilawa staje się WĘZŁEM TRZECH LINII KOLEJOWYCH,
 *   ⚠⚠ GENEZA JEDNEJ Z NICH JEST MILITARNA. PISZĘ WYŁĄCZNIE
 *   „w 1954 roku Pilawa stała się węzłem trzech linii
 *   kolejowych". ZERO KONTEKSTU. TWARDA GRANICA.
 * — 1959–1963 budowa fabryki farb i lakierów,
 * — 1984 — NADANIE PRAW MIEJSKICH.
 *
 * DZIŚ: dominującą gałęzią jest produkcja farb i lakierów.
 * ⚠⚠ TO JEST ZAKŁAD CHEMICZNY. PRZY STRONIE O GOTOWANIU
 *   NIE ŁĄCZĘ TEJ BRANŻY Z JEDZENIEM ANI JEDNYM ZDANIEM.
 *   Wymieniam jako największego pracodawcę i nic więcej,
 *   bez nazwy i bez szczegółów produkcji. TWARDA GRANICA.
 * Rolnictwo powiatu garwolińskiego: 63% powierzchni to użytki
 * rolne, zboża i ziemniaki, hodowla bydła i trzody.
 * Obszar Chronionego Krajobrazu Nadwiślański obejmuje
 * 70 070 ha w jedenastu gminach powiatu, w tym 7 855 ha
 * lasów ochronnych; lasy sosnowe.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK wpisu z gminy Pilawa.
 *   Sprawdzone wszystkie kategorie mazowieckie.
 *   NIE WYMIENIAM ŻADNEGO PRODUKTU.
 * ⚠ JEDNOSTKI POMOCNICZE MIASTA — POTWIERDZONE W BIP:
 *   Samorząd Mieszkańców Pilawy oraz Samorząd Mieszkańców
 *   OSIEDLA CZECHY. Gmina ma ponadto 11 sołectw: Gocław,
 *   Jaźwiny, Kalonka, Lipówki, Łucznica, Niesadna,
 *   Niesadna-Przecinka, Puznówka, Trąbki, Wygoda, Żelazna.
 *   ⚠ „Osiedle Czechy" to NAZWA OFICJALNA — mogę jej użyć.
 *
 * KĄT: PIŁOWAĆ CZY NACISKAĆ — dwa różne ruchy noża.
 * Kąt od jednej z dwóch wersji pochodzenia nazwy miasta,
 * wywodzonej od słowa „piła", i od tartaku z 1910 roku.
 * W kuchni ruch piłujący i ruch naciskający dają zupełnie
 * inny wynik na tym samym produkcie — i to jest różnica,
 * której prawie nikt nie nazywa.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że nazwę Pilawy wywodzi się dwojako: od słowa „piła"
 *   albo od herbu Pilawa hrabiów Potockich, i że nie da się
 *   tego rozstrzygnąć — ⚠ PODAJĘ OBIE WERSJE UCZCIWIE,
 * — ŻE W 1910 ROKU DZIAŁAŁ TU PRYWATNY TARTAK,
 * — ⚠⚠ ŻE W KUCHNI SĄ DWA RÓŻNE RUCHY NOŻA I DAJĄ RÓŻNY
 *   WYNIK: NACISK (ostrze idzie w dół, przez produkt)
 *   i PIŁOWANIE (ostrze idzie w przód i w tył, po produkcie).
 *   TO JEST RDZEŃ CAŁEGO TEKSTU,
 * — ŻE NACISK DZIAŁA TAM, GDZIE PRODUKT JEST JEDNORODNY:
 *   warzywa korzeniowe, ser, mięso, ciasto,
 * — ŻE PIŁOWANIE DZIAŁA TAM, GDZIE JEST TWARDA SKÓRKA
 *   I MIĘKKI ŚRODEK: pieczywo, pomidor, świeża bułka,
 *   ciasto z kruchym wierzchem,
 * — ŻE NACISK NA TAKI PRODUKT GO ZGNIATA, ZANIM PRZETNIE —
 *   i stąd zmiażdżony pomidor oraz spłaszczona kromka.
 *   To nie jest wina noża ani braku siły,
 * — ŻE DLATEGO NÓŻ ZĄBKOWANY ISTNIEJE: on nie jest
 *   „gorszym nożem", tylko narzędziem do innego ruchu.
 *   Ząbki zaczepiają o skórkę zamiast się po niej ślizgać,
 * — ŻE TEN SAM POMIDOR TNIE SIĘ BEZ PROBLEMU BARDZO OSTRYM
 *   NOŻEM GŁADKIM — bo wtedy ostrze wchodzi, zanim zdąży
 *   zgnieść. Czyli: albo bardzo ostry i naciskać, albo
 *   ząbkowany i piłować; najgorsze jest pośrodku,
 * — ŻE PRZY KROJENIU CIASTA I DELIKATNYCH RZECZY PIŁUJE SIĘ
 *   BEZ DOCISKANIA — ciężar noża wystarczy,
 * — ⚠ ODSYŁAM DO STRONY O NOŻACH I OSTRZENIU, NIE ROZWIJAM
 *   TEMATU SAMEGO OSTRZA ANI KONSERWACJI,
 * — ⚠ UCZCIWIE O SPRZĘCIE: nóż w tym urządzeniu nie kroi —
 *   on uderza i rozdrabnia w kółko, więc daje kawałki
 *   nierówne i z czasem coraz drobniejsze. Nie zastąpi
 *   deski i noża wszędzie tam, gdzie kawałki mają wyglądać
 *   jak kawałki. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE PRZY KROJENIU,
 *   O CHWYCIE NOŻA, O UŁOŻENIU PALCÓW. Ktoś się skaleczy
 *   i będzie to moja porada. TWARDA GRANICA.
 * — ŻADNYCH PORAD O OSTRZENIU I KONSERWACJI NOŻY —
 *   kąt zajęty (drzewica.ts).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH NAZW FIRM, MAREK I MODELI NOŻY.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠ ZERO ŻARTÓW Z PILAWU/PILAFU. TWARDA GRANICA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO militarnej genezy linii Skierniewice–Łuków
 *   i wszystkiego, co z nią związane. TWARDA GRANICA.
 * — ZERO szczegółów produkcji zakładu chemicznego
 *   i zero łączenia tej branży z jedzeniem.
 * — ZERO prywatyzacji lat 90. i zmian właścicielskich.
 * — ZERO legendy o osadnikach sprowadzonych po najeździe —
 *   wątek najazdu pomijam, zostaje samo osadnictwo.
 * — ZERO bezrobocia i ujemnego przyrostu naturalnego.
 * — ZERO tematów wojennych i wyznaniowych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „NOŻE I OSTRZENIE" (Drzewica) dotyczy SAMEGO OSTRZA:
 *   jakości, ostrzenia i tego, czego nóż w urządzeniu
 *   nie robi. TUTAJ chodzi o RUCH RĘKI, a nie o narzędzie.
 *   Strony wprost się do siebie odsyłają.
 * — „SZATKOWANIE WARZYW NA SUROWO" (Pilzno) dotyczy
 *   SURÓWEK.
 * — „WIELKOŚĆ KAWAŁKÓW" (Orzysz) dotyczy WPŁYWU WIELKOŚCI
 *   NA GOTOWANIE.
 * — „KONSYSTENCJA — GŁADKO CZY Z KAWAŁKAMI" (Stryków)
 *   dotyczy STOPNIA ROZDROBNIENIA.
 * — „KIERUNEK CIĘCIA" (Szydłowiec) dotyczy TEGO, WZDŁUŻ
 *   CZEGO SIĘ TNIE.
 * TUTAJ chodzi o DWA RÓŻNE RUCHY: nacisk kontra piłowanie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „Piława" o Pilawie.
 * — NIE ROZSTRZYGAM pochodzenia nazwy miasta.
 * — NIE ŁĄCZĘ nazwy miasta z potrawą ryżową.
 * — NIE PISZĘ o genezie linii kolejowej z 1954 r.
 * — NIE PODAJĘ nazwy zakładu chemicznego.
 * — NIE UŻYWAM niepotwierdzonej nazwy mieszkańca.
 * — NIE DORADZAM nic w sprawie bezpiecznego chwytu noża.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pilawa liczy 4 423 mieszkańców (GUS, 31.12.2024)
 *   na 6,7 km², a cała gmina miejsko-wiejska 10 543 osoby
 *   na 77,1 km²; miasto leży na Równinie Garwolińskiej,
 *   na wysokości około stu pięćdziesięciu metrów, a średni
 *   wiek mieszkańca wynosi tu niespełna trzydzieści
 *   dziewięć lat,
 * — nazwę miasta wywodzi się dwojako: od słowa „piła"
 *   albo od herbu Pilawa hrabiów Potockich, w których
 *   dobrach miejscowość pojawia się w XVIII wieku,
 * — budowę Kolei Nadwiślańskiej rozpoczęto w 1865 roku,
 *   a linię otwarto w 1877; powstały wtedy drewniany
 *   dworzec, który zachował się do dziś, rampy przeładunkowe
 *   i parowozownia, a obok stoi murowana wieża ciśnień,
 * — w 1910 roku działał tu prywatny tartak, w 1923 powstała
 *   niewielka fabryka chemiczna zatrudniająca osiem osób,
 *   w 1954 roku Pilawa stała się węzłem trzech linii
 *   kolejowych, a w latach 1959–1963 zbudowano fabrykę farb
 *   i lakierów, która jest dziś największym pracodawcą
 *   w mieście,
 * — prawa miejskie Pilawa otrzymała w 1984 roku,
 * — miasto ma dwie jednostki pomocnicze: Samorząd
 *   Mieszkańców Pilawy i Samorząd Mieszkańców Osiedla
 *   Czechy, a gmina liczy jedenaście sołectw,
 * — Obszar Chronionego Krajobrazu Nadwiślański obejmuje
 *   ponad siedemdziesiąt tysięcy hektarów w jedenastu
 *   gminach powiatu garwolińskiego, w tym blisko osiem
 *   tysięcy hektarów lasów ochronnych.
 */
export const PILAWA: CityContent = {
  slug: "pilawa",
  h1: "Thermomix Pilawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pilawa — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Pilawie w powiecie garwolińskim: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pilawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pilawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pilawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, na Czechy i do wsi w gminie.",

  highlights: highlightyStandardowe("Pilawa"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zgnieciony pomidor to nie wina noża, tylko złego ruchu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pilawie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "pilowanie",
      heading: "Piłować czy naciskać — dwa różne ruchy noża",
      paragraphs: [
        "Nazwę Pilawy wywodzi się dwojako i nie da się tego rozstrzygnąć. Jedna wersja mówi, że pochodzi od słowa „piła”, źle wymawianego przez niemieckich osadników; druga wywodzi ją od herbu Pilawa hrabiów Potockich, w których dobrach miejscowość pojawia się w XVIII wieku. Obie wersje podają te same źródła i żadna nie jest pewniejsza. Za pierwszą przemawia tyle, że w 1910 roku działał tu prywatny tartak.",
        "Zostańmy przy piłowaniu, bo to prowadzi do rzeczy, o której w kuchni prawie nikt nie mówi: nóż ma dwa zupełnie różne ruchy i one dają różny wynik na tym samym produkcie.",
        "Pierwszy to nacisk — ostrze idzie w dół, przez produkt. Drugi to piłowanie — ostrze idzie w przód i w tył, po produkcie. To nie są warianty tej samej czynności. To dwie różne czynności.",
        "Nacisk działa tam, gdzie produkt jest jednorodny: marchew, seler, ziemniak, ser, mięso, ciasto. Ostrze wchodzi i przecina, bo po drodze nie napotyka niczego, co stawiałoby inny opór.",
        "Piłowanie działa tam, gdzie jest twarda skórka i miękki środek. Pieczywo, pomidor, świeża bułka, ciasto z kruchym wierzchem. I tu jest sedno: nacisk na taki produkt najpierw go zgniata, a dopiero potem przecina. Pomidor ucieka spod ostrza, potem się poddaje i wypływa; kromka chleba spłaszcza się na pół centymetra, zanim nóż przejdzie przez skórkę.",
        "To nie jest ani wina noża, ani brak siły w rękach. To jest zły ruch wobec tego konkretnego produktu.",
        "Dlatego istnieje nóż ząbkowany i dlatego nie jest on „gorszym nożem” ani nożem dla tych, którzy nie umieją. Jest narzędziem do innego ruchu: ząbki zaczepiają o gładką, napiętą skórkę zamiast się po niej ślizgać, i nadpiłowują ją, zanim zdąży się ugiąć.",
        "Jest jednak drugie wyjście i warto je znać: ten sam pomidor przetnie się bez najmniejszego problemu bardzo ostrym nożem gładkim. Wtedy ostrze wchodzi w skórkę, zanim zdąży cokolwiek zgnieść. Czyli reguła brzmi: albo bardzo ostry nóż gładki i nacisk, albo nóż ząbkowany i piłowanie. Najgorzej jest pośrodku — tępawym gładkim nożem, dociskanym z całych sił.",
        "Jeszcze jedna rzecz przy kruchych i delikatnych wypiekach: piłuje się tam bez dociskania. Ciężar samego noża wystarczy, a każdy dodatkowy nacisk zamienia porcję ciasta w porcję okruchów.",
        "O samych nożach i o ich ostrzeniu pisałam osobno i nie będę tego powtarzać — tutaj chodzi wyłącznie o ruch ręki.",
        "Na koniec uczciwie o urządzeniu. Nóż w Thermomixie nie kroi w tym sensie, o którym cały czas mówimy. On uderza i rozdrabnia w kółko, więc efektem są kawałki nierówne, a im dłużej pracuje, tym drobniejsze.",
        "To jest znakomite tam, gdzie i tak wszystko ma być drobne albo gładkie: zupy krem, farsze, pasty, siekana cebula do dania, w którym i tak się rozpadnie. Ale nie zastąpi deski i noża wszędzie tam, gdzie kawałki mają wyglądać jak kawałki — w sałatce, na desce, w daniu, które się podaje, a nie tylko zjada. Warto wiedzieć, po której stronie tej granicy stoi to, co się najczęściej gotuje w domu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pilawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz sprawdzić, jak urządzenie radzi sobie z siekaniem i co z tego wychodzi naprawdę — powiedz to przy umawianiu. Pokażę na surowo, bez upiększania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pilawie"),
    sekcjaRaty("w Pilawie"),
    {
      id: "rodzina",
      heading: "Thermomix dla pilawskiej rodziny",
      paragraphs: [
        "Pilawa liczy blisko cztery i pół tysiąca mieszkańców na niespełna siedmiu kilometrach kwadratowych, a cała gmina miejsko-wiejska ponad dziesięć i pół tysiąca osób na siedemdziesięciu siedmiu kilometrach. Miasto leży na Równinie Garwolińskiej, na wysokości około stu pięćdziesięciu metrów, a średni wiek mieszkańca wynosi tu niespełna trzydzieści dziewięć lat. Nazwę wywodzi się dwojako: od słowa „piła” albo od herbu Pilawa hrabiów Potockich, w których dobrach miejscowość pojawia się w XVIII wieku. Budowę Kolei Nadwiślańskiej rozpoczęto w 1865 roku, a linię otwarto w 1877; powstały wtedy drewniany dworzec, który zachował się do dziś, rampy przeładunkowe i parowozownia, a obok stoi murowana wieża ciśnień. W 1910 roku działał tu prywatny tartak, w 1923 powstała niewielka fabryka chemiczna zatrudniająca osiem osób, w 1954 roku Pilawa stała się węzłem trzech linii kolejowych, a w latach 1959–1963 zbudowano fabrykę farb i lakierów, dziś największego pracodawcę w mieście. Prawa miejskie Pilawa otrzymała w 1984 roku. Miasto ma dwie jednostki pomocnicze — Samorząd Mieszkańców Pilawy i Samorząd Mieszkańców Osiedla Czechy — a gmina liczy jedenaście sołectw. Obszar Chronionego Krajobrazu Nadwiślański obejmuje ponad siedemdziesiąt tysięcy hektarów w jedenastu gminach powiatu garwolińskiego, w tym blisko osiem tysięcy hektarów lasów ochronnych.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Pilawy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w tym na Osiedle Czechy, które ma własny samorząd mieszkańców — oraz do okolic dworca i domów przy wylotach dróg. Dojeżdżam też do wsi w gminie, między innymi do Trąbek, Łucznicy, Puznówki i Niesadnej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Pilawę też przyjadę",
  nearbyParagraphs: [
    "Garwolin, Osieck, Kołbiel, Sobienie-Jeziory, Otwock, Celestynów i Mińsk Mazowiecki są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Garwolin", "Otwock", "Mińsk Mazowiecki", "Łaskarzew"],

  about: blokOMnie("do Pilawy", "w Pilawie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pilawy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta razem z Osiedlem Czechy i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Pilawę przez „l”, miasto w powiecie garwolińskim — nie o Piławę Górną ani Piławę Dolną na Dolnym Śląsku.",
    },
    ...faqWspolne("w Pilawie"),
    {
      question: "Dlaczego pomidor i chleb gniotą się pod nożem?",
      answer:
        "Bo mają twardą skórkę i miękki środek, a nacisk najpierw je zgniata, zanim przetnie. Takie produkty się piłuje — ostrzem w przód i w tył — i po to właśnie istnieje nóż ząbkowany. Drugie wyjście to bardzo ostry nóż gładki, który wchodzi w skórkę, zanim zdąży cokolwiek zgnieść. Najgorzej wypada wariant pośredni: tępawy gładki nóż dociskany z całej siły.",
    },
    {
      question: "Czy Thermomix pokroi warzywa jak nóż na desce?",
      answer:
        "Nie w ten sposób. Jego nóż nie tnie, tylko uderza i rozdrabnia w kółko, więc kawałki wychodzą nierówne i z czasem coraz drobniejsze. Świetnie sprawdza się tam, gdzie wszystko ma być drobne albo gładkie — zupy krem, farsze, pasty — ale przy sałatce czy daniu, w którym kawałki mają wyglądać jak kawałki, deska i nóż zostają.",
    },
  ],

  geo: { lat: 51.9591, lng: 21.5307 },
};
