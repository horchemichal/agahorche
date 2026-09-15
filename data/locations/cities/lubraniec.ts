import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * LUBRANIEC — powiat włocławski, woj. kujawsko-pomorskie,
 * KUJAWY, przy drodze wojewódzkiej nr 270.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 656 mieszkańców (GUS 31.12.2024),
 * ⚠ 2,0 KM² — NAJMNIEJSZE OBSZAROWO MIASTO Z TEJ FALI,
 *   za to o NAJWYŻSZEJ GĘSTOŚCI: 1 348,2 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 8 561 osób, 148,0 km²,
 * 52 MIEJSCOWOŚCI i 33 sołectwa, 59 os./km².
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ LUBRANIEC.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ EN.WIKIPEDIA PODAJE 3 130 (2010) — to +17,8 % wobec
 *   GUS. Liczba jest wewnętrznie spójna, więc wygląda
 *   wiarygodnie, ale jest sprzed szesnastu lat.
 *   NIE UŻYWAM JEJ. UŻYWAM GUS: 2 656.
 * ⚠ Zawyżenia po stronie urzędu NIE USTALONO — raport
 *   o stanie gminy jest wyłącznie w PDF i nie udało się
 *   go odczytać. Geoportal podaje gminę 8 458, czyli
 *   o 1,2 % MNIEJ niż GUS. Nie ma podstaw, by pisać
 *   o zawyżaniu.
 * ⚠ GEO: 52,5413 / 18,8315 (polskawliczbach).
 *   en.wikipedia podaje 52,54194 / 18,83556 — różnica
 *   ok. 300 m. Używam polskawliczbach.
 * ⚠ ODMIANA: D. LUBRAŃCA, Ms. W LUBRAŃCU,
 *   przym. LUBRANIECKI.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — hasła „Lubraniec"
 *   w słowniku nie ma. Formy są zgodne z regularnym
 *   wzorcem („-niec" → „-ńca", „-ńcu"), ale podaję je
 *   jako rekonstrukcję.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 * ⚠⚠ RYZYKA POMYLENIA:
 *   LUBRANIEC-PARCELE to ODRĘBNA WIEŚ W TEJ SAMEJ GMINIE,
 *   z osobnym hasłem encyklopedycznym.
 *   LUBIEŃ KUJAWSKI to INNE MIASTO W TYM SAMYM POWIECIE
 *   WŁOCŁAWSKIM.
 *   ⚠⚠⚠ JAN LUBRAŃSKI I AKADEMIA LUBRAŃSKIEGO TO POZNAŃ,
 *   NIE LUBRANIEC. Nazwisko fundatora praw miejskich
 *   prowadzi wyszukiwarkę prosto do Poznania.
 *   NIE PRZYPISUJĘ MIASTU CUDZEJ UCZELNI.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1325, 1381 i 1399 — Lubraniec wymieniany
 *   w dokumentach.
 * — 1509 — NADANIE PRAW MIEJSKICH PRZEZ ZYGMUNTA I
 *   STAREGO (dwa źródła zgodne).
 *   ⚠ DATY DZIENNEJ NIE USTALONO.
 * — ⚠⚠⚠ RDZEŃ KĄTA — DWIE SĄSIADUJĄCE DATY:
 *   1826 — ZAŁOŻENIE PARKU KRAJOBRAZOWEGO.
 *   1827 — ZBUDOWANIE MUROWANEGO PAŁACU.
 *   PARK POWSTAŁ ROK WCZEŚNIEJ NIŻ DOM, PRZY KTÓRYM MIAŁ
 *   STAĆ. Drzewo potrzebuje dziesięcioleci, dom — roku.
 *   ⚠ TO JEST WNIOSEK Z KOLEJNOŚCI DAT, NIE CYTAT
 *   ZE ŹRÓDŁA. Piszę o nim jako o własnym odczytaniu,
 *   a nie jako o zapisanej intencji budowniczych.
 *   TWARDA GRANICA — nie wkładam nikomu w usta motywu.
 * — Oficyny pałacowe z XIX w.
 * — 1868 — Lubraniec przestaje być własnością szlachecką.
 * — 1870 — UTRATA PRAW MIEJSKICH, degradacja do statusu
 *   osady. ⚠⚠ BEZ POWODU I BEZ KONTEKSTU REPRESYJNEGO.
 * — 1916 — PRZYWRÓCENIE PRAW MIEJSKICH, po 46 LATACH.
 *   ⚠⚠ PODAJĘ SAM FAKT I LICZBĘ LAT. BEZ INFORMACJI,
 *   KTO JE PRZYWRÓCIŁ — to administracja zaborcza
 *   w czasie wojny i cały ten kontekst jest wyłączony.
 *   TWARDA GRANICA.
 * — 1906 — powstaje koło Polskiej Macierzy Szkolnej.
 * — 1924–1926 — budowa gmachu liceum (dwa lata).
 * — 1930 — Dom Ludowy.
 * — Najbliższa stacja kolejowa znajduje się we Włocławku;
 *   Lubraniec leży przy drodze wojewódzkiej nr 270.
 *   ⚠⚠ MIASTO NIE MA WŁASNEJ STACJI. NIE PRZYPISUJĘ MU
 *   ŻADNEJ KOLEI — kujawskie kolejki wąskotorowe
 *   (rozstaw 750 mm, linia Kruszwica–Stryków 160,4 km,
 *   30 grudnia 1914) NIE OBSŁUGIWAŁY LUBRAŃCA według
 *   źródła. NIE UŻYWAM TYCH LICZB.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Lubraniec. Sprawdzono wszystkie dziesięć kategorii
 *   wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ PUŁAPKA ROZBROJONA: „ser kozi z Mikanowa"
 *   (24.06.2013) leży najbliżej geograficznie i brzmi
 *   lokalnie, ale Mikanowo jest w GMINIE BRZEŚĆ KUJAWSKI.
 *   NIE PRZYPISUJĘ.
 *   ⚠⚠ Produkty z przymiotnikiem „kujawski" — zakwas
 *   kujawski, żur kujawski, czarnina kujawska, kujawskie
 *   pierniki z ziemniakami i kilkadziesiąt innych — mają
 *   ZASIĘG REGIONALNY i karty NIE WYMIENIAJĄ ŻADNEJ GMINY.
 *   Lubraniec leży na Kujawach, więc kuszą podwójnie.
 *   ŻADEN Z NICH NIE JEST PRODUKTEM LUBRAŃCA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: CZAS, KTÓREGO NIE DA SIĘ SKRÓCIĆ — różnica między
 * czasem pracy a czasem czekania.
 * Kąt od dwóch sąsiadujących dat: park w Lubrańcu założono
 * w 1826 roku, a murowany pałac postawiono w 1827.
 * Najpierw drzewa, potem dom. Dom można postawić w rok;
 * drzewa nie da się przyspieszyć żadnym nakładem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że park jest w Lubrańcu o rok starszy niż pałac,
 *   przy którym stoi — i że to moje odczytanie kolejności
 *   dat, nie zapisana intencja,
 * — ⚠⚠ ŻE KAŻDY PRZEPIS SKŁADA SIĘ Z DWÓCH RÓŻNYCH
 *   RODZAJÓW CZASU I ŻE MYLIMY JE NAGMINNIE —
 *   TO JEST RDZEŃ:
 *   CZAS PRACY (kroisz, mieszasz, smażysz) i CZAS CZEKANIA
 *   (namaczanie, wyrastanie, chłodzenie, odpoczynek,
 *   marynowanie),
 * — ⚠⚠ ŻE CZAS PRACY DA SIĘ SKRACAĆ — WPRAWĄ, LEPSZYM
 *   NOŻEM, URZĄDZENIEM — A CZASU CZEKANIA NIE DA SIĘ
 *   SKRÓCIĆ NICZYM. Nie ma sprzętu, który namoczy suchą
 *   fasolę w dziesięć minut,
 * — PRAKTYCZNY WNIOSEK, KTÓRY ZMIENIA PLANOWANIE:
 *   CZYTAJĄC PRZEPIS, NAJPIERW WYSZUKAJ W NIM CZEKANIE,
 *   NIE ROBOTĘ. To czekanie wyznacza godzinę, o której
 *   trzeba zacząć; reszta się w nie wpasuje,
 * — ⚠ KONKRETY: namaczanie strączków, wyrastanie ciasta,
 *   schłodzenie przed krojeniem, odpoczynek mięsa,
 *   rozmrażanie, marynowanie,
 * — ⚠⚠ UCZCIWIE I WPROST: URZĄDZENIE SKRACA CZAS PRACY,
 *   NIE CZAS CZEKANIA. To jest najczęstsze nieporozumienie
 *   przy tym sprzęcie i nie zamierzam go podtrzymywać.
 *   Obiad, w którym czekanie jest krótkie, robi się
 *   naprawdę dużo szybciej. Obiad, w którym czekanie jest
 *   długie, skróci się tylko o tę część, w której stoisz
 *   przy blacie,
 * — ⚠ ŻE TO NIE JEST ZARZUT WOBEC SPRZĘTU, TYLKO GRANICA
 *   FIZYCZNA — i że warto ją znać przed zakupem, a nie po.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO PÓŁPRODUKTÓW ROBIONYCH Z WYPRZEDZENIEM —
 *   kąt zajęty (Aleksandrów Kujawski). Tam chodzi o to,
 *   CO SIĘ PRZYGOTOWUJE WCZEŚNIEJ; TUTAJ o to, ŻE PEWNE
 *   RZECZY MUSZĄ POSTAĆ SAME Z SIEBIE. Rozgraniczam.
 * — ⚠⚠ ZERO PRZYGOTOWANIA PRZED GOTOWANIEM — kąt zajęty
 *   (Jabłonowo Pomorskie, poprzednia fala).
 * — ⚠⚠ ZERO CZASU W PRZEPISIE I MINUT GOTOWANIA — kąt
 *   zajęty (Mońki). Nie piszę o wiarygodności podanych
 *   minut ani o poznawaniu gotowości. TWARDA GRANICA.
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS — kąt zajęty (Stopnica).
 * — ⚠ ZERO ODPOCZYNKU PO UPIECZENIU jako tematu — kąt
 *   zajęty (Młynary). Wymieniam go jednym członem
 *   wyliczenia i nie rozwijam.
 * — ⚠ ZERO POWROTU DO GOTOWANIA PO LATACH — kąt zajęty
 *   (Nowa Sól). Przerwa 1870–1916 służy WYŁĄCZNIE jako
 *   fakt w sekcji o mieście, NIGDY jako kąt.
 *   TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠ Przy namaczaniu i wyrastaniu podaję WYŁĄCZNIE
 *   rzędy wielkości znane każdemu („przez noc"), nigdy
 *   konkretnych czasów ani temperatur.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠ w szczególności przy rozmrażaniu i marynowaniu
 *   piszę WYŁĄCZNIE o czasie, ZERO o tym, co jest
 *   bezpieczne. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SYNAGOGI I SPOŁECZNOŚCI ŻYDOWSKIEJ.
 *   Synagoga jest PIERWSZYM I JEDYNYM obiektem w gminnej
 *   ewidencji zabytków i PIERWSZYM na liście zabytków
 *   na stronie gminy — nie da się napisać o zabytkach
 *   Lubrańca, nie potykając się o to. DLATEGO NIE PISZĘ
 *   O ZABYTKACH W OGÓLE: wymieniam wyłącznie park (1826)
 *   i pałac (1827). TWARDA GRANICA BEZWZGLĘDNA —
 *   NAJWAŻNIEJSZA NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO NAZWISKA WŁAŚCICIELA DÓBR Z 1827 R.
 *   To postać wojskowa, której biografia prowadzi wprost
 *   do powstania listopadowego, a to samo nazwisko wraca
 *   przy Izbicy Kujawskiej. PISZĘ „ówczesny właściciel
 *   dóbr" ALBO NIE PISZĘ WCALE. TWARDA GRANICA.
 * — ⚠⚠ ZERO KOŚCIOŁA Z 1490 R. I KAPLICY Z 1834 R. —
 *   wątek wyznaniowy.
 * — ⚠⚠ ZERO POWODU UTRATY PRAW MIEJSKICH W 1870 R.
 *   i ZERO okoliczności ich przywrócenia w 1916.
 * — ⚠ ZERO PRZYPISYWANIA MIASTU KOLEI — nie ma tu stacji.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 * — ZERO bezrobocia, salda migracji, przyrostu naturalnego
 *   i porównań liczby mieszkańców między latami.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „PÓŁPRODUKT" (Aleksandrów Kujawski) dotyczy RZECZY
 *   ROBIONYCH SAMEMU Z WYPRZEDZENIEM. ⚠⚠ TO JEST
 *   NAJBLIŻSZY KĄT. TUTAJ nie ma ani słowa o robieniu
 *   czegoś wcześniej — jest wyłącznie CZAS, W KTÓRYM
 *   NIKT NIC NIE ROBI, a rzecz i tak się zmienia.
 * — „CZAS W PRZEPISIE" (Mońki) dotyczy MINUT I GOTOWOŚCI.
 * — „POWRÓT PO LATACH" (Nowa Sól) dotyczy CZŁOWIEKA,
 *   nie składnika.
 * — „ODPOCZYNEK PO UPIECZENIU" (Młynary) dotyczy JEDNEGO
 *   KONKRETNEGO KROKU.
 * TUTAJ chodzi o PODZIAŁ CAŁEGO PRZEPISU NA CZAS PRACY
 * I CZAS CZEKANIA — I O TO, ŻE TYLKO JEDEN Z NICH DA SIĘ
 * KUPIĆ ZA PIENIĄDZE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby 3 130 — jest sprzed szesnastu lat.
 * — NIE TWIERDZĘ, że urząd zawyża — nie ustalono.
 * — NIE PODAJĘ daty dziennej praw miejskich.
 * — NIE TWIERDZĘ, że park posadzono PO TO, by zdążył
 *   urosnąć — to moje odczytanie kolejności dat.
 * — NIE PODAJĘ nazwiska właściciela dóbr.
 * — NIE PISZĘ, dlaczego miasto straciło prawa w 1870 r.
 *   ani kto je przywrócił w 1916.
 * — NIE PRZYPISUJĘ Lubrańcowi kolei ani stacji.
 * — NIE PRZYPISUJĘ Lubrańcowi żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lubraniec leży na Kujawach, w powiecie włocławskim,
 *   przy drodze wojewódzkiej nr 270; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 2 656 mieszkańców
 *   (GUS, 31.12.2024) na zaledwie 2,0 km², czyli blisko
 *   tysiąc trzysta pięćdziesiąt osób na kilometr
 *   kwadratowy; cała gmina ma 8 561 osób, pięćdziesiąt dwie
 *   miejscowości i trzydzieści trzy sołectwa na 148,0 km²,
 * — miasto wymieniano w dokumentach w 1325, 1381
 *   i 1399 roku, a prawa miejskie nadał mu w 1509 roku
 *   Zygmunt I Stary,
 * — park krajobrazowy założono w 1826 roku, a murowany
 *   pałac postawiono rok później, w 1827; przy pałacu
 *   stoją dziewiętnastowieczne oficyny,
 * — w 1868 roku Lubraniec przestał być własnością
 *   szlachecką, w 1870 utracił prawa miejskie i odzyskał
 *   je dopiero w 1916 — po czterdziestu sześciu latach,
 * — w 1906 roku powstało tu koło Polskiej Macierzy
 *   Szkolnej, w latach 1924–1926 zbudowano gmach liceum,
 *   a w 1930 Dom Ludowy,
 * — najbliższa stacja kolejowa znajduje się we Włocławku.
 */
export const LUBRANIEC: CityContent = {
  slug: "lubraniec",
  h1: "Thermomix Lubraniec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lubraniec — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Lubrańcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubraniec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubrańcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lubrańca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Lubraniec"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Czas pracy da się skrócić. Czasu czekania nie skróci nic.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lubrańcu – jak wygląda prezentacja?",
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
      id: "czas-czekania",
      heading: "Park o rok starszy niż pałac",
      paragraphs: [
        "W Lubrańcu park krajobrazowy założono w 1826 roku, a murowany pałac postawiono rok później, w 1827. Najpierw drzewa, potem dom.",
        "Zaznaczam od razu, że to moje odczytanie kolejności dat, a nie zapisana intencja — nikt nie zostawił notatki z wyjaśnieniem. Ale kolejność jest wymowna, bo dom można postawić w rok, a drzewa nie da się przyspieszyć żadnym nakładem. Można wynająć więcej ludzi do muru. Do rosnącego drzewa nie ma kogo wynająć.",
        "I to jest rozróżnienie, które w kuchni gubi się właściwie codziennie. Każdy przepis składa się z dwóch zupełnie różnych rodzajów czasu, a my liczymy je jak jeden.",
        "Pierwszy to czas pracy: kroisz, mieszasz, smażysz, ucierasz. Stoisz przy blacie i coś robisz. Drugi to czas czekania: fasola się namacza, ciasto wyrasta, masa się schładza, mięso odpoczywa, coś się rozmraża albo marynuje. Nie robisz przy tym nic i właśnie o to chodzi.",
        "Różnica jest zasadnicza: czas pracy da się skracać. Wprawą, ostrzejszym nożem, lepszym sprzętem — realnie i zauważalnie. Czasu czekania nie skróci nic. Nie ma i nie będzie urządzenia, które namoczy suchą fasolę w dziesięć minut.",
        "Praktyczny wniosek jest jeden i zmienia planowanie bardziej niż wszystkie triki razem wzięte: czytając przepis, najpierw wyszukaj w nim czekanie, a nie robotę.",
        "Bo to czekanie wyznacza godzinę, o której trzeba zacząć. „Namoczyć przez noc” oznacza, że decyzja o jutrzejszym obiedzie zapada dzisiaj wieczorem. „Schłodzić, zanim pokroisz” oznacza, że ciasto na osiemnastą musi być gotowe o piętnastej. Reszta — całe krojenie, mieszanie i smażenie — wpasuje się w te ramy, bo jest elastyczna.",
        "Teraz część, którą muszę napisać wprost, bo to najczęstsze nieporozumienie przy tym sprzęcie i nie zamierzam go podtrzymywać.",
        "Urządzenie skraca czas pracy, nie czas czekania. Obiad, w którym czekania jest mało — zupa, danie jednogarnkowe, sos — robi się naprawdę dużo szybciej i to widać od pierwszego dnia. Obiad, w którym czekanie jest długie, skróci się tylko o tę część, w której stoisz przy blacie. Ciasto drożdżowe i tak będzie rosło tyle, ile rośnie.",
        "To nie jest zarzut wobec sprzętu, tylko granica fizyczna, którą warto znać przed zakupem, a nie po. Zresztą dobrze rozegrana działa na Twoją korzyść: czekanie jest jedynym czasem w kuchni, który i tak należy do Ciebie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubrańcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o której zwykle siadacie do obiadu — dobiorę dania, w których czekania jest mało, żeby było widać, ile realnie da się urwać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubrańcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubranieckiej rodziny",
      paragraphs: [
        "Lubraniec leży na Kujawach, w powiecie włocławskim, przy drodze wojewódzkiej numer 270; jest miastem w gminie miejsko-wiejskiej i liczy ponad dwa i pół tysiąca mieszkańców na zaledwie dwóch kilometrach kwadratowych — blisko tysiąc trzysta pięćdziesiąt osób na kilometr, najgęściej w okolicy. Cała gmina ma ponad osiem i pół tysiąca osób, pięćdziesiąt dwie miejscowości i trzydzieści trzy sołectwa na stu czterdziestu ośmiu kilometrach kwadratowych. Miasto wymieniano w dokumentach w 1325, 1381 i 1399 roku, a prawa miejskie nadał mu w 1509 Zygmunt I Stary. Park krajobrazowy założono w 1826 roku, a murowany pałac postawiono rok później, w 1827 — przy pałacu stoją dziewiętnastowieczne oficyny. W 1868 roku Lubraniec przestał być własnością szlachecką, w 1870 utracił prawa miejskie, a odzyskał je dopiero w 1916, po czterdziestu sześciu latach. W 1906 powstało tu koło Polskiej Macierzy Szkolnej, w latach 1924–1926 zbudowano gmach liceum, a w 1930 Dom Ludowy. Najbliższa stacja kolejowa znajduje się we Włocławku.",
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

  districtsHeading: "Do których części Lubrańca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — jest bardzo zwarte, ma raptem dwa kilometry kwadratowe, więc wszędzie jest blisko. Dojeżdżam też do wszystkich pięćdziesięciu dwóch miejscowości w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Lubraniec też przyjadę",
  nearbyParagraphs: [
    "Włocławek, Brześć Kujawski, Radziejów, Kowal i Aleksandrów Kujawski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Włocławek", "Brześć Kujawski", "Radziejów", "Kowal"],

  about: blokOMnie("do Lubrańca", "w Lubrańcu", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubrańca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich pięćdziesięciu dwóch miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Lubraniec jest miastem w gminie miejsko-wiejskiej w powiecie włocławskim — i nie należy go mylić z Lubieniem Kujawskim, który leży w tym samym powiecie.",
    },
    ...faqWspolne("w Lubrańcu"),
    {
      question: "Czy Thermomix skróci czas przygotowania obiadu o połowę?",
      answer:
        "Zależy od dania i wolę powiedzieć to wprost. Każdy przepis ma czas pracy — krojenie, mieszanie, smażenie — i czas czekania: namaczanie, wyrastanie, chłodzenie, odpoczynek. Urządzenie skraca pierwszy, drugiego nie skróci nic. Przy zupie, sosie czy daniu jednogarnkowym różnica jest duża i widać ją od razu. Przy cieście drożdżowym urwiesz tylko tę część, w której stoisz przy blacie.",
    },
    {
      question: "Jak planować gotowanie, żeby nie okazało się, że jest za późno?",
      answer:
        "Czytając przepis, najpierw wyszukaj w nim czekanie, a nie robotę. To czekanie wyznacza godzinę startu: „namoczyć przez noc” znaczy, że decyzja zapada dzień wcześniej, a „schłodzić przed krojeniem” — że ciasto na wieczór musi być gotowe po południu. Reszta jest elastyczna i sama się w te ramy wpasuje.",
    },
  ],

  geo: { lat: 52.5413, lng: 18.8315 },
};
