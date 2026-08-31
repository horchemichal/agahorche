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
 * LIMANOWA — GMINA WIEJSKA w powiecie limanowskim. TERYT 1207072.
 * ⚠️⚠️ TO ODRĘBNA GMINA OD MIASTA LIMANOWA (TERYT 1207011).
 * 26 118 mieszkańców (GUS, 31.12.2024), 152,2 km², 170 os./km²,
 * +16,5% od 2002, ŚREDNI WIEK 37,1 (miasto: 41,0),
 * saldo migracji +60, REGON 2 331 (2 136 samozatrudnionych;
 * budownictwo 38,5%, handel 17,7%). Lesistość 28,9%.
 * 23 SOŁECTWA przy 21 wsiach — Siekierczyna i Stara Wieś dzielą się
 * na po dwa sołectwa. Gmina rozciąga się NA 40 KM z północy
 * na południe. Siedziba: ul. Matki Boskiej Bolesnej 18B w Limanowej.
 * Wójt: Jan Szczepan Skrzekut.
 *
 * OŚ STRONY: NAJDŁUŻSZY TUNEL KOLEJOWY W POLSCE DRĄŻONY POD JEJ
 * WSIAMI. 3 750 m pod grzbietem między MĘCINĄ a MORDARKĄ — obie to
 * sołectwa tej gminy. Tarcza TBM „Jadwiga” przebiła się
 * 14 KWIETNIA 2026, po dziesięciu miesiącach drążenia.
 * ⚠️⚠️ TO NIE JEST OŚ KOLEJOWA W SENSIE ROZKŁADU JAZDY — takie mają
 * ZABIERZÓW (przystanki), LISIA GÓRA (nieczynna linia) i BRZEŹNICA.
 * Tutaj chodzi o REKORD BUDOWLANY POD WŁASNYMI POLAMI, o robotę
 * w toku, a nie o połączenie.
 * ⚠️⚠️ TO NIE JEST OŚ „URZĄD W MIEŚCIE, DO KTÓREGO NIE NALEŻY” —
 * ta należy do GMINY TARNÓW. Fakt wolno podać, ale nie jako tezę.
 * ⚠️ NABIAŁ Z NAZWĄ MIASTA (śmietana i zsiadłe mleko z Limanowej,
 * oba wpisy 17.02.2017) NALEŻY DO STRONY MIASTA. Nie potwierdzono,
 * czy zgłaszający ma siedzibę w gminie wiejskiej. Gmina ma własny,
 * jednoznaczny wpis — chleb męciński — i to on tu wchodzi.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — TUNEL: Męcina–Mordarka, 3 750 m, NAJDŁUŻSZY TUNEL KOLEJOWY
 *   W POLSCE. Drążenie od czerwca 2025, PRZEBICIE 14.04.2026;
 *   tunel ewakuacyjny gotowy 25.03.2026. Tarcza „Jadwiga”: 2 500 t,
 *   średnica 11 m, REKORD DOBOWY 46 m. Drugą tarczą był „Kinga”
 *   (tunel ewakuacyjny). Kontrakt: odcinek Limanowa – bocznica
 *   Klęczany linii 104, konsorcjum Budimex + Gülermak, umowa
 *   marzec 2024, PONAD 1,9 MLD ZŁ NETTO, finansowanie z KPO
 *   (PLK, rp.pl, glos24),
 * — NOWA STACJA W MĘCINIE (przeniesiona w nowe miejsce) i NOWY
 *   PRZYSTANEK W MORDARCE. Pociągi do Męciny: termin przesunięty
 *   z września 2026 na MARZEC 2027; cały odcinek Limanowa–Klęczany
 *   w drugiej połowie 2027. Odcinek Tymbark–Limanowa: umowa
 *   ok. 1,6 mld zł brutto, 36 miesięcy, 14 km nowego toru,
 *   17 mostów i wiaduktów, tunel między Tymbarkiem a KOSZARAMI,
 *   NOWY PRZYSTANEK KOSZARY, wiadukt ok. 2 km nad doliną Sowlinki
 *   o średniej wysokości 9 m. Docelowo Kraków–Nowy Sącz ok. 60 min
 *   zamiast trzech godzin; z Limanowej ok. 20 min do Nowego Sącza
 *   i ok. 40 min do Krakowa, prędkość do 160 km/h,
 * — 23 SOŁECTWA (gminalimanowa.pl): Bałażówka, Kanina, Kisielówka,
 *   Kłodne, Koszary, Lipowe, Łososina Górna, Makowica, Męcina,
 *   Młynne, Mordarka, Nowe Rybie, Pasierbiec, Pisarzowa, Rupniów,
 *   Siekierczyna I, Siekierczyna II, Sowliny, Stara Wieś I,
 *   Stara Wieś II, Stare Rybie, Walowa Góra, Wysokie. Największa wieś
 *   Stara Wieś (2 117,30 ha), najmniejsza Bałażówka (81,61 ha),
 * — ⭐ CHLEB MĘCIŃSKI — Lista Produktów Tradycyjnych MRiRW,
 *   WPIS 1.12.2010. To WŁASNY wpis gminy wiejskiej, z jej sołectwa
 *   Męcina. Wypiekają HALINA I MAREK PIWOWAROWIE; laureat
 *   ogólnopolskiego konkursu „Pieczywo – kromka.pl” (2024);
 *   regularnie reprezentuje powiat w akcji „Regionalne Smaki Powiatu
 *   Limanowskiego” — ostatnio 7 sierpnia 2026 na rynku w Limanowej,
 * — 16 KÓŁ GOSPODYŃ (gminalimanowa.pl): Kłodne, Lipowe, Łososina
 *   Górna, Makowica, Męcina, Pasierbiec, Pisarzowa, Rupniów-Bednarki,
 *   Rupniów-Centrum, Sowliny, Stara Wieś I, Stara Wieś II,
 *   Siekierczyna 1, Bałażówka, Wysokie, Kanina,
 * — PRZEGLĄD DOROBKU KULTURALNEGO I KULINARNEGO KGW: XXVI edycja
 *   13.07.2025 W PISARZOWEJ przy stadionie LKS Olimpia, 13 KÓŁ.
 *   KONKURS KULINARNY 2025: potrawa, w której GŁÓWNYM SKŁADNIKIEM
 *   JEST ZIEMNIAK — m.in. „mascone zimnioki” i moskole; do tego
 *   chleb ze smalcem i wypieki na stoiskach,
 * — MĘCINA — HISTORIA: pierwsza wzmianka 1326, już jako duża wieś
 *   z własną parafią; ślady kultury łużyckiej; drewniany kościół
 *   św. Antoniego z końca XVII w., DZWON ODLANY W GDAŃSKU W 1711 R.
 *   Po II wojnie Męcina zasłynęła PRODUKCJĄ KIJÓW HOKEJOWYCH
 *   BRONISŁAWA SMOLENIA — używanych przez reprezentacje Polski,
 *   Kanady, Czechosłowacji i ZSRR, obecnych na igrzyskach w Calgary,
 *   Albertville i Seulu. Zespół „Mali Męcinianie” promuje kulturę
 *   LACHÓW,
 * — DROGI: DK28 (Zator–Krosno–Przemyśl), DW965 (Bochnia–Limanowa).
 *   ⚠️ DK75 NIE PRZECHODZI przez tę gminę. Powiat prowadzi ponad
 *   70 linii autobusowych,
 * — INNE WPISY POWIATOWE (tło): bundz/bunc (10.10.2005), mleko
 *   od krowy rasy polskiej czerwonej (14.12.2012), miód spadziowy
 *   z Beskidu Wyspowego (11.10.2017),
 * — WSPÓŁRZĘDNE (UG): 49,70568 / 20,42526.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NABIAŁU Z NAZWĄ „Z LIMANOWEJ”. To oś MIASTA. Nie potwierdzono,
 *   czy zgłaszający jest z gminy wiejskiej,
 * — „URZĘDU W MIEŚCIE” JAKO OSI. To oś gminy Tarnów,
 * — ROZKŁADU JAZDY I POŁĄCZEŃ JAKO OSI. To Zabierzów i Lisia Góra,
 * — NAZWANYCH PRACODAWCÓW. ⚠️ Nie znaleziono ANI JEDNEGO zakładu
 *   w gminie wiejskiej, który dałoby się nazwać z liczbą
 *   zatrudnionych. „Tartak Limanowa” ma adres w mieście,
 * — LICZBY KURSÓW AUTOBUSOWYCH,
 * — CZY GMINA DOMYKA PIERŚCIEŃ wokół miasta w pełni. Nie użyto
 *   słowa „obwarzankowa”,
 * — OSUWISK, W TYM KŁODNEGO 2010 (17 zniszczonych domów). Kłodne
 *   jest sołectwem tej gminy. ŚWIADOMIE POMINIĘTE, zgodnie
 *   z decyzją przy poprzedniej fali limanowskiej,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 6 922,29 zł
 *   i 7,1% IDENTYCZNIE dla gminy wiejskiej Limanowa, gminy wiejskiej
 *   Mszana Dolna i MIASTA Limanowa. To dane POWIATOWE. Tak samo
 *   struktura 29,4 / 27,8 / 16,4 / 1,4.
 *
 * PUŁAPKI:
 * — ⚠️ zpp.pl/gmina/1207011 opisuje MIASTO Limanowa (ul. Jana Pawła
 *   II 9) i jest pierwszym wynikiem na zapytanie „gmina Limanowa”.
 *   Adres urzędu GMINY to ul. Matki Boskiej Bolesnej 18B,
 * — 23 SOŁECTWA PRZY 21 WSIACH — Siekierczyna i Stara Wieś mają
 *   po dwa sołectwa,
 * — GMINA CIĄGNIE SIĘ 40 KM z północy na południe — to bardzo dużo
 *   przy planowaniu dojazdu.
 */

export const LIMANOWA_GMINA: CityContent = {
  slug: "limanowa-gmina",
  h1: "Thermomix gmina Limanowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix gmina Limanowa — prezentacja",
  seoDescription:
    "Thermomix w gminie wiejskiej Limanowa: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix gmina Limanowa — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie wiejskiej Limanowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Męciny, Mordarki, Pisarzowej, Starej Wsi i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie dwadzieścia trzy sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Limanowa – jak wygląda prezentacja?",
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
      heading: "Najdłuższy tunel kolejowy w Polsce leży pod tymi wsiami",
      paragraphs: [
        "Czternastego kwietnia dwa tysiące dwudziestego szóstego roku tarcza drążąca o nazwie Jadwiga przebiła się przez grzbiet między Męciną a Mordarką. Obie te miejscowości są sołectwami tej gminy.",
        "Tunel ma trzy tysiące siedemset pięćdziesiąt metrów i jest najdłuższym tunelem kolejowym w Polsce. Drążenie zajęło dziesięć miesięcy — zaczęło się w czerwcu dwa tysiące dwudziestego piątego roku. Sama tarcza waży dwa i pół tysiąca ton i ma jedenaście metrów średnicy; w rekordowej dobie pokonała czterdzieści sześć metrów. Równolegle druga maszyna, nazwana Kinga, wydrążyła tunel ewakuacyjny, gotowy trzy tygodnie wcześniej.",
        "Cały odcinek — od Limanowej do bocznicy w Klęczanach — buduje konsorcjum Budimeksu i tureckiego Gülermaku za ponad miliard dziewięćset milionów złotych netto, ze środków Krajowego Planu Odbudowy. Umowę podpisano w marcu dwa tysiące dwudziestego czwartego roku.",
        "Dla mieszkańców tej gminy zmieni to dwie konkretne rzeczy. W Męcinie powstaje nowa stacja, przeniesiona w inne miejsce niż stara, a w Mordarce zupełnie nowy przystanek. Pociągi mają tam dojechać w marcu dwa tysiące dwudziestego siódmego roku — termin przesunięto z września dwa tysiące dwudziestego szóstego. Cały odcinek do Klęczan ma być gotowy w drugiej połowie dwa tysiące dwudziestego siódmego.",
        "Drugi kontrakt, na odcinek z Tymbarku do Limanowej, opiewa na około miliarda sześciuset milionów złotych i przewiduje czternaście kilometrów nowego toru, siedemnaście mostów i wiaduktów, kolejny tunel — tym razem pod Koszarami, też tutejszym sołectwem — nowy przystanek Koszary i dwukilometrowy wiadukt nad doliną Sowlinki, średnio dziewięć metrów nad ziemią.",
        "Docelowo z Krakowa do Nowego Sącza ma się jechać około godziny zamiast trzech. Z Limanowej do Nowego Sącza dwadzieścia minut, do Krakowa czterdzieści.",
        "To jest gmina, która przez trzy lata ma pod sobą największy plac budowy kolejowej w Polsce — i której trzy sołectwa dostaną z tego stacje albo przystanki.",
        "Poza budową gmina jest wyjątkowo rozciągnięta: czterdzieści kilometrów z północy na południe, dwadzieścia trzy sołectwa przy dwudziestu jeden wsiach, bo Siekierczyna i Stara Wieś dzielą się na po dwa. Najmniejsza, Bałażówka, ma osiemdziesiąt jeden hektarów; największa, Stara Wieś, ponad dwa tysiące sto.",
        "I jeszcze jedna liczba, która mówi o niej najwięcej: średni wiek mieszkańca wynosi tu trzydzieści siedem lat i jedną dziesiątą, przy czterdziestu jeden w sąsiednim mieście. Od dwa tysiące drugiego roku gmina urosła o szesnaście i pół procenta.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Limanowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo, koniecznie. Gmina ciągnie się czterdzieści kilometrów z północy na południe, więc różnica między jednym a drugim krańcem to nie kilka minut, tylko realny kawałek drogi. Kosztu to nie zmienia — dojazd jest bez dopłat wszędzie.",
        "Przy Siekierczynie i Starej Wsi warto dodać, czy chodzi o pierwszą, czy o drugą. To jedna miejscowość podzielona na dwa sołectwa i numeracja bywa myląca.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Limanowa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Chleb, który ma numer w rejestrze",
      paragraphs: [
        "W Męcinie, jednym z sołectw tej gminy, wypieka się chleb wpisany pierwszego grudnia dwa tysiące dziesiątego roku na ministerialną Listę Produktów Tradycyjnych. Robią go Halina i Marek Piwowarowie, a w dwa tysiące dwudziestym czwartym chleb męciński wygrał ogólnopolski konkurs pieczywa.",
        "To rzadka sytuacja: gmina wiejska z własnym, jednoznacznym wpisem, niezależnym od tego, co ma sąsiednie miasto. I dobry punkt wyjścia, żeby powiedzieć coś o domowym pieczeniu, bo pytanie o chleb pada u mnie najczęściej ze wszystkich.",
        "Zacznę od uczciwego zastrzeżenia: urządzenie nie upiecze chleba. Do pieczenia potrzebny jest piekarnik i nic tego nie zastąpi. Robi natomiast całą część przed piekarnikiem, i to jest dokładnie ta część, przez którą większość ludzi w ogóle nie zaczyna.",
        "Wyrabianie ciasta to kilka minut zamiast kwadransa ręcznie — a przy cieście żytnim na zakwasie, gęstym i ciężkim, ręce naprawdę bolą. To jest zwykle moment, w którym ktoś zaczyna piec regularnie, a nie raz na miesiąc.",
        "Druga rzecz to zakwas. Trzeba go dokarmiać w miarę równych proporcjach i trzymać w miarę stałej temperaturze, a jedno i drugie robi się tu z wagą wbudowaną w naczynie i z ustawionym podgrzewaniem. Zakwas, który się nie udaje, zwykle nie udaje się właśnie z tych dwóch powodów.",
        "Trzecia to wszystko, co się do chleba dokłada. Smalec ze skwarkami i cebulą, pasty, twarożek, chrzan — powstają w kilkadziesiąt sekund z rzeczy, które i tak są w domu.",
        "A czwarta jest lokalna: konkurs kulinarny kół gospodyń tej gminy miał w dwa tysiące dwudziestym piątym roku za temat potrawę, w której głównym składnikiem jest ziemniak. Startowały mascone zimnioki i moskole. Ziemniaki utarte albo zmielone w kilkanaście sekund zamiast kwadransa nad tarką to przy takich plackach różnica między przepisem na święto a przepisem na wtorek.",
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
    heading: "Gmina Limanowa i gotowanie — chleb męciński i szesnaście kół gospodyń",
    paragraphs: [
      "Ta gmina ma własny wpis na ministerialnej Liście Produktów Tradycyjnych: chleb męciński, zarejestrowany pierwszego grudnia dwa tysiące dziesiątego roku. Wypiekają go Halina i Marek Piwowarowie z Męciny, a w dwa tysiące dwudziestym czwartym roku zdobył pierwsze miejsce w ogólnopolskim konkursie pieczywa. Regularnie reprezentuje powiat na akcji Regionalne Smaki Powiatu Limanowskiego — ostatnio siódmego sierpnia dwa tysiące dwudziestego szóstego na rynku w Limanowej.",
      "Warto to rozróżnić: śmietana i zsiadłe mleko z Limanowej, oba wpisane w lutym dwa tysiące siedemnastego roku, noszą nazwę miasta i tam należą. Chleb męciński jest produktem gminy wiejskiej, z jej sołectwa.",
      "Kół gospodyń działa tu szesnaście: w Kłodnem, Lipowem, Łososinie Górnej, Makowicy, Męcinie, Pasierbcu, Pisarzowej, Rupniowie-Bednarkach, Rupniowie-Centrum, Sowlinach, Starej Wsi pierwszej i drugiej, Siekierczynie, Bałażówce, Wysokiem i Kaninie.",
      "Raz w roku spotykają się na Przeglądzie Dorobku Kulturalnego i Kulinarnego Kół Gospodyń Wiejskich. Dwudziesta szósta edycja odbyła się trzynastego lipca dwa tysiące dwudziestego piątego roku w Pisarzowej i wzięło w niej udział trzynaście kół. Konkurs kulinarny miał wtedy jasno postawiony temat: potrawa, w której głównym składnikiem jest ziemniak. Na stołach stanęły między innymi mascone zimnioki i moskole, a przy tym chleb ze smalcem i wypieki.",
      "W powiecie limanowskim zarejestrowane są też bundz, mleko od krowy rasy polskiej czerwonej i miód spadziowy z Beskidu Wyspowego — to jednak wpisy powiatowe, nie tej gminy.",
      "Dla urządzenia najsensowniejsze jest tu wyrabianie ciasta na chleb, prowadzenie zakwasu przy stałej temperaturze i wszystko, co robi się z ziemniaków: tarcie, mielenie, ciasto na placki. Czego nie zrobi, mówię wprost: nie upiecze chleba, bo do tego potrzebny jest piekarnik. Zabiera tę część roboty, która jest wyłącznie czasem i siłą w rękach.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Limanowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu trzech, bez żadnej dopłaty za odległość. Gmina liczy ponad dwadzieścia sześć tysięcy mieszkańców na stu pięćdziesięciu dwóch kilometrach kwadratowych i rozciąga się na czterdzieści kilometrów z północy na południe.",
    "Sołectwa to: Bałażówka, Kanina, Kisielówka, Kłodne, Koszary, Lipowe, Łososina Górna, Makowica, Męcina, Młynne, Mordarka, Nowe Rybie, Pasierbiec, Pisarzowa, Rupniów, Siekierczyna pierwsza i druga, Sowliny, Stara Wieś pierwsza i druga, Stare Rybie, Walowa Góra i Wysokie. Wsi jest dwadzieścia jeden — Siekierczyna i Stara Wieś dzielą się na po dwa sołectwa.",
    "Urząd gminy mieści się przy ulicy Matki Boskiej Bolesnej w Limanowej, czyli w mieście, które do gminy nie należy.",
    "Pod grzbietem między Męciną a Mordarką powstaje najdłuższy tunel kolejowy w Polsce — trzy tysiące siedemset pięćdziesiąt metrów, przebity czternastego kwietnia dwa tysiące dwudziestego szóstego roku. W Męcinie budowana jest nowa stacja, w Mordarce nowy przystanek, a w Koszarach kolejny.",
    "W Męcinie stoi drewniany kościół świętego Antoniego z końca siedemnastego wieku z dzwonem odlanym w Gdańsku w tysiąc siedemset jedenastym roku. Sama wieś pojawia się w dokumentach w tysiąc trzysta dwudziestym szóstym, a po wojnie zasłynęła produkcją kijów hokejowych Bronisława Smolenia, używanych przez reprezentacje Polski, Kanady, Czechosłowacji i Związku Radzieckiego.",
    "Dojazd: przez gminę biegną droga krajowa dwadzieścia osiem i droga wojewódzka dziewięćset sześćdziesiąt pięć. Powiat prowadzi ponad siedemdziesiąt linii autobusowych.",
  ],
  districts: [
    "Męcina",
    "Mordarka",
    "Pisarzowa",
    "Stara Wieś",
    "Siekierczyna",
    "Łososina Górna",
    "Sowliny",
    "Kanina",
    "Młynne",
    "Rupniów",
    "Pasierbiec",
    "Kłodne",
    "Koszary",
    "Lipowe",
    "Makowica",
    "Nowe Rybie",
    "Stare Rybie",
    "Walowa Góra",
    "Wysokie",
    "Kisielówka",
    "Bałażówka",
  ],

  nearbyHeading: "Limanowa, Tymbark i Słopnice też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z miastem Limanowa oraz z Tymbarkiem, Słopnicami, Laskową, Jodłownikiem, Łukowicą, Łososiną Dolną, Chełmcem, Podegrodziem, Łapanowem i Trzcianą. Dojeżdżam do wszystkich gmin powiatu limanowskiego bez doliczania kosztu dojazdu.",
    "Uwaga na nazwę: gmina wiejska Limanowa to odrębna jednostka od miasta Limanowa. Miasto do gminy nie należy, choć mieści jej urząd. Śmietana i zsiadłe mleko z Limanowej, wpisane na listę produktów tradycyjnych, noszą nazwę miasta; gmina ma własny wpis — chleb męciński.",
  ],
  nearbyTowns: [
    "Limanowa",
    "Tymbark",
    "Słopnice",
    "Laskowa",
    "Jodłownik",
    "Łukowica",
    "Łososina Dolna",
  ],

  about: blokOMnie("do gminy Limanowa", "w powiecie limanowskim"),

  faq: [
    {
      question: "Mieszkam w Męcinie albo w Pisarzowej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dwadzieścia trzy sołectwa traktuję dokładnie tak samo. Gmina ciągnie się czterdzieści kilometrów z północy na południe, więc przy umawianiu nazwa wsi jest naprawdę potrzebna — ale wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Limanowa"),
    {
      question: "Czy Thermomix upiecze chleb taki jak męciński?",
      answer:
        "Nie upiecze żadnego chleba i nie udaję, że tak — do pieczenia potrzebny jest piekarnik, a chleb męciński ma swoich piekarzy i swój wpis do rejestru. Robi natomiast całą pracę przed piekarnikiem, i to jest ta część, przez którą ludzie w domu nie zaczynają: wyrabia ciasto w kilka minut zamiast kwadransa ręcznie, także ciasto żytnie na zakwasie, przy którym ręce naprawdę bolą. Pomaga też prowadzić sam zakwas, bo trzyma stałą temperaturę i ma wbudowaną wagę — a zakwas, który się nie udaje, zwykle nie udaje się właśnie z tych dwóch powodów.",
    },
  ],

  geo: { lat: 49.70568, lng: 20.42526 },
};
