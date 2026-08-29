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
 * LUBIEŃ — gmina wiejska, powiat myślenicki, dolina Raby,
 * Beskid Wyspowy i Beskid Średni (= Makowski). 10 109 mieszkańców
 * (31.12.2024) na 75,1 km², gęstość 134 os./km². Cztery sołectwa.
 *
 * OŚ STRONY: DZIEŃ, W KTÓRYM ZAKOPIANKA PRZESTAŁA JECHAĆ ŚRODKIEM
 * WSI. 12 listopada 2022 r. otwarto tunel pod Luboniem Małym —
 * dwie nawy po 2 058 m, główny element odcinka S7 Naprawa–Skomielna
 * Biała. Do tego czasu strategia gminy (przyjęta 15.06.2022) pisała
 * wprost o „dużym natężeniu ruchu" i o korkach wymuszonych zjazdem
 * z S7 na jednojezdniową krajówkę.
 * ⚠️ SAM TUNEL LEŻY W NAPRAWIE (gm. Jordanów, pow. suski)
 * i wychodzi w Skomielnej Białej — NIE W LUBNIU.
 *
 * DRUGA OŚ: gmina rośnie (+11,9% ludności 2002–2024), ma dodatni
 * przyrost naturalny (+13) i dodatnie saldo migracji (+18) w 2024 r.
 * Budownictwo to 461 z 1 009 podmiotów REGON — 45,7%.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 10 109
 *   mieszkańców, 75,1 km², 134 os./km², średni wiek 38,4 lat.
 *   W 2024: 89 urodzeń, 76 zgonów (+13), saldo migracji +18
 *   (wewnętrzne +17, zagraniczne +1). Wzrost o 11,9% w latach
 *   2002–2024. Struktura wieku: przedprodukcyjny 22,7%,
 *   produkcyjny 59,4%, poprodukcyjny 17,9%,
 * — SOŁECTWA (4, dane gminy, ok. 2020): Lubień 3 783 os. / 2 770 ha,
 *   Skomielna Biała 2 916 / 1 400 ha, Tenczyn 2 407 / 2 180 ha,
 *   Krzeczów 960 / 1 150 ha. Przysiółki Lubnia: Zarębki i Smugawa,
 * — POŁOŻENIE: Lubień w dolinie Raby na wys. 350 m n.p.m.,
 *   Skomielna Biała ok. 570 m. Cieki: Raba, Lubieńka, Tenczynka,
 *   potok Krzeczowski. Szczyty: Luboń Wielki 1022 m, Szczebel 977 m,
 *   Zembalowa 858 m, Kiczora 726 m. Jaskinia „Zimna Dziura"
 *   na Szczeblu (7 m długości). ⚠️ Beskid Średni = Beskid Makowski,
 *   to ta sama jednostka pod dwiema nazwami,
 * — TUNEL POD LUBONIEM MAŁYM: otwarty w sobotę 12 LISTOPADA 2022 R.
 *   Dwie równoległe nawy po 2 058 m, wysokość 4,7 m, szerokość
 *   użytkowa 14,9 m. Główny element odcinka S7 Naprawa–Skomielna
 *   Biała. Drążony metodą górniczą (nie TBM): 180 t materiałów
 *   wybuchowych, 600 000 m³ urobku, 190 000 m³ betonu, 48 000 t
 *   stali. 10 przejść ewakuacyjnych, 119 ROP, 239 czujek dymu,
 *   170 kamer, całodobowe centrum sterowania przy węźle Skomielna.
 *   Otwarcie przekładano trzykrotnie (osuwisko w Skomielnej Białej,
 *   potem pandemia). Pierwszy przejazd: 18.01.2021,
 * — STAN SPRZED OTWARCIA — udokumentowany: Strategia Rozwoju Gminy
 *   Lubień 2022–2031 (uchwała XXXIX/352/2022 z 15.06.2022) pisała
 *   o „dużym natężeniu ruchu na przebiegającej przez obszar gminy
 *   DK nr 7/S7" i o tym, że budowany wtedy odcinek Lubień–Skomielna
 *   Biała „generuje konieczność opuszczenia S7 i powrotu
 *   na jednojezdniową drogę krajową", co sprzyja korkom.
 *   ⚠️ TWARDEGO DOWODU (pomiarów ruchu) NA ZANIK TRANZYTU
 *   PRZEZ LUBIEŃ NIE MA — piszę o tym ostrożnie,
 * — KOŚCIÓŁ ŚW. WOJCIECHA W KRZECZOWIE: DREWNIANY, zbudowany
 *   pierwotnie w Łętowni, przeniesiony do Krzeczowa; datowanie
 *   budowy 1760–1765. WPISANY DO REJESTRU ZABYTKÓW W 1969 R.
 *   wraz z otoczeniem; 21 zabytków ruchomych, w tym trzy barokowe
 *   ołtarze z końca XVII w. i późnogotycki obraz Matki Bożej
 *   z początku XVI w. NA SZLAKU ARCHITEKTURY DREWNIANEJ.
 *   Obok ponad 500-letni dąb,
 * — KAROL WOJTYŁA: odbudowany kościół w Lubniu (parafia
 *   św. Jana Chrzciciela) KONSEKROWAŁ W 1960 R. KS. KAROL WOJTYŁA.
 *   Przez gminę biegnie Szlak Papieski w Beskidzie Wyspowym,
 * — WOJNA: 3–4 września 1939 Niemcy spalili kościół i ok. 160 domów
 *   w Lubniu, zginęło 9 osób; 20 czerwca 1943 — PACYFIKACJA
 *   KRZECZOWA: 20 osób przetrzymywanych w szkole i rozstrzelanych
 *   przy cmentarzu, 6 aresztowanych (w tym dwóch księży).
 *   W Skomielnej Białej we wrześniu 1939 spłonął modrzewiowy kościół,
 * — GOSPODARKA (31.12.2024): 1 009 podmiotów REGON, 988 mikrofirm,
 *   867 osób fizycznych. BUDOWNICTWO — 461 podmiotów, 45,7%;
 *   rolnictwo tylko 9 (0,9%). Bezrobocie ok. 3,1%. Dynamika:
 *   660 podmiotów (2013) → 871 (2020) → 1 009 (2024).
 *   Bezrobotnych: 458 (2013) → 164 (2020), spadek o 62,2%,
 * — ZESPOŁY REGIONALNE (4): „Toporzanie" (Tenczyn, zał. 1973),
 *   „Zagórzanie" (Lubień, zał. 2000), „Cyrniawa" (Krzeczów,
 *   zał. luty 2011), „Korpiołki". Do tego 2 orkiestry dęte, chóry,
 *   Amatorski Teatr im. F. Macioła,
 * — GRUPA ETNOGRAFICZNA — OSTROŻNIE: gmina pisze o tradycjach
 *   KLISZCZACKICH w Tenczynie, zespół z Lubnia nazywa się
 *   „ZAGÓRZANIE", a w Skomielnej Białej działa ZWIĄZEK PODHALAN.
 *   Uprawniony wniosek: gmina leży na styku trzech wpływów.
 *   Nie przypisuję jej jednej grupy,
 * — WYDARZENIA (kalendarz 2026): Święto Gminy Lubień 4.07,
 *   „Beskidzkie Rytmy i Smaki" w Tenczynie 26.07, Dożynki Gminne
 *   w Krzeczowie 23.08, Folkowa Majówka i Dzień Dziecka 23.05,
 *   Piknik Rugby Lubień nad Rabą 9.05, obchody 11 Listopada
 *   w Skomielnej Białej,
 * — KWAŚNICA — potrawa lokalna; konkurs na kwaśnicę odbył się
 *   na dożynkach gminnych w 2011 r.,
 * — AGROTURYSTYKA: 8 gospodarstw z adresami (Skomielna Biała,
 *   Tenczyn, Lubień),
 * — GMINY PARTNERSKIE: Malatiná (Słowacja), Catenay (Francja),
 *   Penkun (Niemcy), Kolno,
 * — SĄSIEDZI (6): Jordanów (wiejska), Mszana Dolna (wiejska), Pcim,
 *   Raba Wyżna, Rabka-Zdrój, Tokarnia. ⚠️ Strona gminy podaje tylko
 *   cztery kierunki i pomija Tokarnię oraz Rabę Wyżną,
 * — LGD: „Turystyczna Podkowa".
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WPISU NA MINISTERIALNĄ LISTĘ PRODUKTÓW TRADYCYJNYCH.
 *   Nie udało się zweryfikować (gov.pl blokuje pobieranie),
 * — NAZW PRACODAWCÓW I DANYCH O DOJAZDACH DO PRACY,
 * — DAT ODDANIA POZOSTAŁYCH ODCINKÓW S7 (Lubień–Naprawa,
 *   Skomielna Biała–Chabówka). Potwierdzona jest tylko data tunelu,
 * — TWARDEGO DOWODU NA ZANIK RUCHU TRANZYTOWEGO przez Lubień
 *   (brak pomiarów). Piszę o tym opisowo,
 * — NAJBLIŻSZEJ STACJI KOLEJOWEJ I CZASÓW PRZEJAZDU,
 * — NAZW KÓŁ GOSPODYŃ I PRODUCENTÓW ŻYWNOŚCI. Nie potwierdzone,
 * — HODOWLI OWIEC I REDYKU W TEJ GMINIE. Jesienny Redyk Rodzinny
 *   odbywa się w sąsiedniej RABCE-ZDROJU,
 * — PRZYPISANIA GMINIE JEDNEJ GRUPY ETNOGRAFICZNEJ.
 *
 * PUŁAPKI:
 * — SKOMIELNA BIAŁA (gm. Lubień) ≠ SKOMIELNA CZARNA (gm. Tokarnia).
 *   Obie w powiecie myślenickim, kilkanaście km od siebie,
 * — LUBIEŃ MAŁOPOLSKI ≠ LUBIEŃ KUJAWSKI (miasto, kujawsko-pomorskie).
 *   W Polsce jest co najmniej osiem innych wsi Lubień,
 * — LUBOŃ WIELKI I LUBOŃ MAŁY TO SZCZYTY, nie miejscowości.
 *   Tunel „pod Luboniem Małym" biegnie POD GÓRĄ, a administracyjnie
 *   leży w NAPRAWIE (gm. Jordanów, pow. suski),
 * — LUBOŃ ≠ LUBIEŃ. Luboń to miasto pod Poznaniem,
 * — NAPRAWA to wieś w gminie JORDANÓW, nie w Lubniu,
 * — TENCZYN (gm. Lubień) ≠ TENCZYNEK (gm. Krzeszowice)
 *   ≠ ZAMEK TENCZYN w Rudnie,
 * — „ZAGÓRZANIE" to nazwa zespołu z Lubnia I nazwa grupy
 *   etnograficznej spod Mszany Dolnej — nie utożsamiać,
 * — KS LUBOŃ SKOMIELNA BIAŁA nazwany jest od góry, nie od wsi.
 */

export const LUBIEN: CityContent = {
  slug: "lubien",
  h1: "Thermomix Lubień – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Lubień — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Lubień: bezpłatna prezentacja TM7 u Ciebie w kuchni — Lubień, Skomielna Biała, Tenczyn, Krzeczów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubień — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Lubień. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Lubień przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do Lubnia, Skomielnej Białej, Tenczyna i Krzeczowa, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie cztery sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Lubień – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Lubniu, jak w Skomielnej Białej, Tenczynie czy Krzeczowie.",
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
      heading: "Dwa tysiące pięćdziesiąt osiem metrów, które zmieniły tę gminę",
      paragraphs: [
        "Dwunastego listopada dwa tysiące dwudziestego drugiego roku otwarto tunel pod Luboniem Małym — dwie równoległe nawy po dwa tysiące pięćdziesiąt osiem metrów, główny element odcinka ekspresowej siódemki między Naprawą a Skomielną Białą. Drążono go metodą górniczą: sto osiemdziesiąt ton materiałów wybuchowych, sześćset tysięcy metrów sześciennych urobku, sto dziewięćdziesiąt tysięcy metrów sześciennych betonu.",
        "Uczciwie od razu: sam tunel leży w Naprawie, w gminie Jordanów, i wychodzi w Skomielnej Białej. Nie jest „w Lubniu”. Ale to jego otwarcie zmieniło tę gminę bardziej niż cokolwiek innego w ostatnim ćwierćwieczu.",
        "Wiadomo to z dokumentu, który powstał pół roku wcześniej. Strategia rozwoju gminy przyjęta piętnastego czerwca dwa tysiące dwudziestego drugiego roku pisała wprost o dużym natężeniu ruchu na przechodzącej przez gminę siódemce i o tym, że budowany wtedy odcinek zmusza kierowców do zjazdu z drogi ekspresowej na jednojezdniową krajówkę, co sprzyja korkom. To jest opis stanu sprzed otwarcia, spisany przez samą gminę.",
        "Nie mam pomiarów ruchu, które pokazywałyby, ile tranzytu ubyło, więc nie będę udawać, że wiem. Każdy, kto tu mieszka, i tak wie lepiej ode mnie, jak wyglądały sierpniowe soboty przed tunelem i jak wyglądają teraz.",
        "Poza zakopianką ta gmina ma coś znacznie starszego. W Krzeczowie stoi drewniany kościół świętego Wojciecha, zbudowany w latach tysiąc siedemset sześćdziesiąt–sześćdziesiąt pięć, przeniesiony tu z Łętowni i wpisany do rejestru zabytków w tysiąc dziewięćset sześćdziesiątym dziewiątym roku wraz z otoczeniem. W środku dwadzieścia jeden zabytków ruchomych, w tym trzy barokowe ołtarze z końca siedemnastego wieku i późnogotycki obraz Matki Bożej z początku szesnastego. Obok rośnie ponad pięćsetletni dąb.",
        "Jest tu też ślad, który w tej okolicy znaczy więcej niż gdzie indziej: odbudowany po wojnie kościół w Lubniu konsekrował w tysiąc dziewięćset sześćdziesiątym roku ksiądz Karol Wojtyła. Przez gminę biegnie Szlak Papieski w Beskidzie Wyspowym.",
        "A wojna zostawiła tu ślady bardzo konkretne. Trzeciego i czwartego września tysiąc dziewięćset trzydziestego dziewiątego roku Niemcy spalili w Lubniu kościół i około stu sześćdziesięciu domów; zginęło dziewięć osób. Dwudziestego czerwca tysiąc dziewięćset czterdziestego trzeciego spacyfikowali Krzeczów — dwadzieścioro ludzi przetrzymywano w szkole i rozstrzelano przy cmentarzu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Lubień?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę wsi: Lubień, Skomielna Biała, Tenczyn albo Krzeczów. Sołectw jest tylko cztery, ale są rozległe — samo Lubień to dwa tysiące siedemset siedemdziesiąt hektarów, a Tenczyn dwa tysiące sto osiemdziesiąt. Przy okazji przydaje się punkt orientacyjny; do Zarębek i Smugawy też dojeżdżam.",
        "Jeśli pracujecie w budownictwie — a to prawie połowa firm w tej gminie — powiedzcie to od razu. Wieczór po sezonie i sobotnie przedpołudnie sprawdzają się wtedy najlepiej, a zimą jest u Was zwykle spokojniej niż latem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Lubień"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której prawie co druga firma to budowlanka",
      paragraphs: [
        "W gminie Lubień działa tysiąc dziewięć zarejestrowanych podmiotów, z czego czterysta sześćdziesiąt jeden — czyli prawie połowa — w budownictwie. To jest ta gmina, w której mąż wyjeżdża na budowę o piątej rano i wraca po siedemnastej, często sezonowo i często daleko.",
        "W takim domu obiad jest problemem organizacyjnym, nie kulinarnym. Nie chodzi o to, żeby ugotować coś wykwintnego, tylko o to, żeby ciepłe jedzenie w ogóle było, kiedy ktoś wraca o nieprzewidywalnej porze. I na to urządzenie odpowiada najprościej: wstawiasz danie jednogarnkowe, wychodzisz, ono gotuje się samo, wyłącza się i czeka. Bez pilnowania i bez ryzyka, że przywrze do dna.",
        "Druga rzecz to gotowanie z zapasem, które przy pracy sezonowej ma sens szczególny. W tygodniu, w którym wszyscy wracają późno, zupa na cztery dni, sos, pasty kanapkowe i mrożonki zrobione w jedną niedzielę są warte więcej niż codzienne dobre chęci.",
        "Trzecia rzecz to dzieci, których jest tu sporo: przedprodukcyjnych mieszkańców gmina ma prawie dwadzieścia trzy procent, a średni wiek to trzydzieści osiem lat. Nastolatek, który zostaje po szkole sam, jest w stanie wstawić obiad, bo przepis prowadzi krok po kroku, nie ma otwartego ognia i nie ma rozgrzanej patelni. Dla wielu rodziców to jest właściwy powód zakupu.",
        "Czwarta rzecz wynika z gór. Lubień leży na trzystu pięćdziesięciu metrach, Skomielna Biała na blisko sześciuset, a zabudowa idzie w górę po zboczach. Zimą do sklepu jedzie się, a nie idzie — i wtedy każde gotowanie z zapasem oszczędza nie tylko czas, ale i kurs samochodem.",
        "I rzecz, którą mówię wprost: nie zastąpi to gotowania na weselu ani na dożynkach, a w tej gminie takich okazji jest sporo, bo działają tu cztery zespoły regionalne, dwie orkiestry dęte i teatr amatorski. Urządzenie zabiera z tego siekanie, ucieranie i mieszanie — czyli tę część, przy której schodzi całe przedpołudnie.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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
    heading: "Lubień i gotowanie — kwaśnica i trzy tradycje naraz",
    paragraphs: [
      "Ta gmina leży dokładnie tam, gdzie stykają się trzy wpływy, i widać to po nazwach jej własnych zespołów. W Tenczynie gmina pisze o tradycjach kliszczackich, zespół z Lubnia nazywa się „Zagórzanie”, a w Skomielnej Białej działa Związek Podhalan. Nie przypiszę więc tej gminie jednej grupy etnograficznej, bo byłoby to nieprawdą — to jest pogranicze i tak trzeba o nim mówić.",
      "Z kuchni potwierdzona jest kwaśnica: konkurs na nią odbył się na dożynkach gminnych, a wygrał go zespół „Cyrniawa” z Krzeczowa. To zupa na kiszonej kapuście i na wywarze — góralska w rodowodzie, ale w tej okolicy zwyczajnie domowa.",
      "Uczciwie oznaczę granicę tego, co wiem. Nie udało mi się zweryfikować, czy z gminy Lubień pochodzi jakikolwiek wpis na ministerialnej Liście Produktów Tradycyjnych, bo ministerialna baza była dla mnie niedostępna. Nie potwierdziłam też ani jednego producenta żywności z nazwy, ani żadnego koła gospodyń — i dlatego żadnego nie wymieniam.",
      "To, co w tej gminie naprawdę żyje wokół jedzenia, to festiwal. „Beskidzkie Rytmy i Smaki” w Tenczynie, w kalendarzu na dwudziestego szóstego lipca — muzyka, taniec i kuchnia regionalna w jednym. Do tego Święto Gminy w lipcu i Dożynki Gminne w Krzeczowie w sierpniu.",
      "Co z tego wynika dla urządzenia? Kwaśnicy nie zrobi lepiej niż Wasza teściowa i nie będę tego obiecywać — kiszona kapusta i wywar na wędzonce to nie jest zadanie dla elektryczności, tylko dla czasu. Zrobi natomiast całą resztę tego, co się do takiego obiadu podaje: purée, sos, farsz do pierogów, ciasto na kluski, pasty i przetwory. To jest rozdrabnianie i podgrzewanie w stałej temperaturze, czyli dokładnie jego robota.",
    ],
  },

  districtsHeading: "Gdzie w gminie Lubień dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich czterech sołectw, bez żadnej dopłaty za odległość: Lubnia, Skomielnej Białej, Tenczyna i Krzeczowa. Do przysiółków Lubnia — Zarębek i Smugawy — też.",
    "Gmina zajmuje siedemdziesiąt pięć kilometrów kwadratowych i liczy ponad dziesięć tysięcy mieszkańców. Sołectw jest tylko cztery, ale są duże: Lubień to dwa tysiące siedemset siedemdziesiąt hektarów, Tenczyn dwa tysiące sto osiemdziesiąt, Skomielna Biała tysiąc czterysta, Krzeczów tysiąc sto pięćdziesiąt.",
    "Leżymy w dolinie Raby, na styku Beskidu Wyspowego i Beskidu Średniego — to ta sama jednostka, którą część map nazywa Beskidem Makowskim. Lubień jest na trzystu pięćdziesięciu metrach, Skomielna Biała na około pięciuset siedemdziesięciu. Nad gminą stoją Luboń Wielki tysiąc dwadzieścia dwa metry i Szczebel dziewięćset siedemdziesiąt siedem, a na Szczeblu jest siedmiometrowa jaskinia „Zimna Dziura”.",
    "Przez gminę biegnie zakopianka. Od listopada dwa tysiące dwudziestego drugiego roku, po otwarciu tunelu pod Luboniem Małym, ruch tranzytowy jedzie inaczej niż wcześniej — sam tunel leży już w Naprawie, w gminie Jordanów, a przy węźle Skomielna działa całodobowe centrum sterowania nim. Kolei w gminie nie ma; odległości do najbliższej stacji nie podam, bo nie znalazłam wiarygodnego źródła. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "I rozstrzygnięcie, o które proszę przy umawianiu: Skomielna Biała należy do gminy Lubień i leży przy zakopiance, a Skomielna Czarna to już gmina Tokarnia. To dwie różne wsie, kilkanaście kilometrów od siebie, i mylą się nagminnie.",
  ],
  districts: ["Lubień", "Skomielna Biała", "Tenczyn", "Krzeczów", "Zarębki", "Smugawa"],

  nearbyHeading: "Pcim, Tokarnia, Rabka i Mszana Dolna też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Lubień graniczy z sześcioma gminami: Pcimiem i Tokarnią z powiatu myślenickiego, Mszaną Dolną i Rabą Wyżną, Rabką-Zdrojem oraz Jordanowem z powiatu suskiego. Do każdej z nich dojeżdżam i do żadnej nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Lubień, czy już Tokarnia albo Rabka — po prostu zapytaj. Dla mnie to jedna trasa wzdłuż siódemki i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Pcim",
    "Tokarnia",
    "Mszana Dolna",
    "Jordanów",
    "Myślenice",
    "Rabka-Zdrój",
  ],

  about: blokOMnie("do gminy Lubień", "w powiecie myślenickim"),

  faq: [
    {
      question: "Mieszkam w Skomielnej Białej. To ta przy zakopiance?",
      answer:
        "Tak — Skomielna Biała należy do gminy Lubień i leży przy zakopiance; to tam wychodzi tunel pod Luboniem Małym i tam działa centrum sterowania nim przy węźle Skomielna. Skomielna Czarna to zupełnie inna wieś, w gminie Tokarnia, kilkanaście kilometrów stąd. Do obu dojeżdżam bez dopłaty, ale warto to rozróżnić przy umawianiu.",
    },
    ...faqWspolne("w gminie Lubień"),
    {
      question: "Pracuję na budowie, wracam o różnych porach. Kiedy się umówić?",
      answer:
        "Wieczorem albo w sobotę — i to jest w tej gminie sytuacja domyślna, nie wyjątek: prawie połowa zarejestrowanych tu firm to budownictwo. Zimą, poza sezonem, umawiam się też chętnie w dzień roboczy. Powiedzcie po prostu, kiedy macie spokojne dwie godziny; resztę dopasuję.",
    },
    {
      question: "Czy Thermomix ugotuje kwaśnicę?",
      answer:
        "Ugotuje, ale powiem uczciwie: kwaśnica na dobrym wywarze i porządnej kiszonej kapuście to zadanie dla czasu, nie dla urządzenia, i nikt Wam tu nie poprawi tego, co robicie od pokoleń. Urządzenie sprawdza się przy całej reszcie takiego obiadu — purée, sos, farsz do pierogów, ciasto na kluski — czyli tam, gdzie chodzi o rozdrabnianie i mieszanie bez stania przy garnku.",
    },
  ],

  geo: { lat: 49.733, lng: 19.983 },
};
