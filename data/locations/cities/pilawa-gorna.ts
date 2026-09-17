import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * PIŁAWA GÓRNA — powiat dzierżoniowski, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — MIASTO JEST CAŁĄ GMINĄ. Nie ma wsi
 *   ani sołectw. Nie piszę „i wsie w gminie".
 * MIASTO/GMINA: 5 864 mieszkańców (GUS 31.12.2024),
 *   20,9 km², gęstość ok. 280 os./km².
 *   ⚠ DOMYKA SIĘ: 5 864 / 20,9 = 280,6, serwis podaje
 *   280,2 (przy powierzchni 20,93 km² wychodzi dokładnie).
 *   PODAJĘ ZAOKRĄGLONE SŁOWNIE — „około dwustu
 *   osiemdziesięciu".
 *   ⚠⚠⚠ NIE PODAJĘ „ok. 6 400" ANI „ok. 6 700" —
 *   to liczby z materiałów urzędu i portali turystycznych
 *   sprzed kilkunastu lat. WYŁĄCZNIE GUS 31.12.2024.
 * ⚠ WYSOKOŚĆ: 289–376 m n.p.m. (rozpiętość 87 m).
 *   ⚠⚠ ROZPIĘTOŚCI NIE ROBIĘ KĄTEM — zajęte (Szczytna).
 * ⚠ GEO: 50,683 / 16,733.
 *
 * ⚠⚠ ODMIANA — OBA CZŁONY SIĘ ODMIENIAJĄ [ZW, SJP PWN]:
 *   D. do Piławy Górnej · Ms. w Piławie Górnej ·
 *   B. Piławę Górną.
 * ⚠⚠⚠ PRZYMIOTNIKA „PIŁAWSKI" NIE UŻYWAM SAMODZIELNIE —
 *   jest wspólny dla Piławy Górnej, Piławy Dolnej, DWÓCH
 *   rzek Piława i historycznej Piławy nad Bałtykiem.
 *   ZAWSZE KONSTRUKCJA PRZYIMKOWA: „w Piławie Górnej".
 *   ⚠ WYJĄTEK: „piławit-(Y)" to urzędowa nazwa minerału
 *   i JEJ UŻYWAM — to nie jest przymiotnik.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP na ile jest
 *   utrwalona w praktyce].
 *
 * ⚠⚠⚠ CZŁON „GÓRNA" NIE OZNACZA GÓRY. To przeciwstawienie
 *   do Piławy DOLNEJ — położenie w górze biegu rzeki.
 *   ⚠⚠⚠ DLATEGO NIE POWTARZAM FIGURY „GÓRA, KTÓRA NIE
 *   JEST GÓRĄ" (Góra, Kamienna Góra, Jelenia Góra,
 *   Zielona Góra, Twardogóra — WSZYSTKIE OPISANE).
 *   ROZRÓŻNIENIE PODAJĘ W FAQ JAKO FAKT NAZEWNICZY,
 *   BEZ MORAŁU.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE — POCZWÓRNE:
 *   — PIŁAWA DOLNA: wieś w gminie Dzierżoniów, TEN SAM
 *     POWIAT, bezpośrednie sąsiedztwo. ⚠ ODLEGŁOŚCI
 *     NIE PODAJĘ — nieustalona.
 *   — PIŁAWA: rzeka dolnośląska, dopływ Bystrzycy, ok. 45 km.
 *   — PIŁAWA: rzeka w zachodniopomorskiem i wielkopolskiem,
 *     dopływ Gwdy, ok. 82 km. DWIE RZEKI O TEJ SAMEJ
 *     NAZWIE W DWÓCH KOŃCACH POLSKI.
 *   — ⚠⚠ PIŁA (wielkopolskie) — ryzyko przejęzyczenia.
 *     Przymiotnik od Piły to „pilski", NIE „piławski".
 *   ⚠⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ HISTORYCZNEJ PIŁAWY NAD BAŁTYKIEM NIE WYMIENIAM —
 *   prowadzi w wątki wykluczone.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: XII WIEK, forma „Pilava
 *     Superius" [ZW dla stulecia]. ⚠⚠⚠ ROKU 1189
 *     NIE PODAJĘ — jedno źródło popularne, oficjalna
 *     strona miasta mówi tylko „XII wiek".
 *   — PRAWA MIEJSKIE: 18 LIPCA 1962 r. [ZW, data dzienna].
 *     ⚠⚠ NADAWCĘ PODAJĘ OGÓLNIE („decyzją rządu") —
 *     numeru aktu nie ustalono.
 *   ⚠⚠ PUŁAPKA: prawa miejskie nadano PRZEZ POŁĄCZENIE
 *   TRZECH MIEJSCOWOŚCI — Piławy, Kośminy i Kopanicy.
 *   To nie było podniesienie wsi do rangi miasta.
 *   ⚠⚠⚠ „MIASTO ZSZYTE Z KILKU MIEJSCOWOŚCI" — figura
 *   zajęta (Szczytna, Piechowice). PODAJĘ JAKO FAKT
 *   W SEKCJI „RODZINA", BEZ MORAŁU.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — MINERAŁY Z PEGMATYTÓW:
 *   — PONAD 100 GATUNKÓW minerałów stwierdzonych [ZW],
 *   — PONAD 20 rozpoznanych PO RAZ PIERWSZY W POLSCE [ZW],
 *   — 5–7 NIEZNANYCH FAZ wciąż w opracowaniu w 2013 r.,
 *   — badania ruszyły w 2008 r.,
 *   — STYCZEŃ 2014: Komisja Nowych Minerałów IMA
 *     zatwierdza PIŁAWIT-(Y). Odkrywcy: dr Eligiusz
 *     Szełęg i zespół prof. Adama Pieczki, z udziałem
 *     kilku polskich uczelni,
 *   — znaleziony materiał to „zaledwie kilka ziaren".
 *   ⚠⚠⚠ SZEŚĆ LAT OD ROZPOCZĘCIA BADAŃ DO JEDNEJ
 *   ZATWIERDZONEJ NAZWY. To jest cały kąt.
 *   ⚠⚠ NIE TWIERDZĘ, że pozostałe fazy nie zostały
 *   zatwierdzone później — twierdzę, że W 2013 R. BYŁY
 *   W OPRACOWANIU.
 *   ⚠ WYMIARÓW ZIAREN NIE PODAJĘ — nieustalone.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — KAMIENIARSTWO: tradycje wydobycia i obróbki kamienia
 *   datowane na 1740 r.
 *   ⚠⚠⚠ LICZBY „PONAD 100 ZAKŁADÓW KAMIENIARSKICH"
 *   NIE PODAJĘ — jedno źródło, niedatowane. Bez tej
 *   liczby przelicznik „jeden zakład na 59 mieszkańców"
 *   też odpada.
 *   ⚠⚠ ŻADNYCH NAZW DZIAŁAJĄCYCH ZAKŁADÓW.
 * — ŻYŁY PEGMATYTOWE: do 100 m długości przy 6 m
 *   miąższości [SP — jedno źródło]. ⚠ PODAJĘ
 *   Z ZASTRZEŻENIEM „według opracowania urzędu",
 *   NIE JAKO FAKT BEZWARUNKOWY.
 * — ⚠⚠ WYROBISKA (320 × 140 m, ściany 8–25 m)
 *   NIE PODAJĘ — źródło opisuje geostanowisko, które
 *   może być innym obiektem niż czynna kopalnia.
 *   RYZYKO POMYLENIA DWÓCH WYROBISK.
 * — ⚠⚠ KOLEI (1858 / 1894 / 1898) NIE ROBIĘ KĄTEM —
 *   „kolej w kilku rzutach" to figura użyta w Pieńsku
 *   W TEJ SAMEJ FALI. PODAJĘ DATY W SEKCJI „RODZINA".
 * — ⚠⚠ PAŁACU I KOŚCIOŁA NIE OPISUJĘ — pierwszy ma
 *   niepewne datowanie, drugi jest wyznaniowy.
 * — ⚠⚠ CMENTARZA NIE WYMIENIAM — wątek pogrzebowy
 *   i wyznaniowy naraz.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO DLA ŻADNEGO
 *   KIERUNKU. ANI JEDNEJ LICZBY KILOMETRÓW.
 *
 * KĄT: ZNALEZIONE TO NIE POTWIERDZONE
 * — o tym, że jedno udane podejście to jeszcze nie metoda.
 * Kąt od piławskich pegmatytów: ponad sto gatunków
 * minerałów, ponad dwadzieścia po raz pierwszy w kraju,
 * a od rozpoczęcia badań do jednej zatwierdzonej nazwy
 * minęło sześć lat.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w pegmatytach Piławy Górnej stwierdzono ponad sto
 *   gatunków minerałów, ponad dwadzieścia po raz pierwszy
 *   w Polsce, a pięć do siedmiu faz w 2013 r. wciąż było
 *   w opracowaniu,
 * — że badania ruszyły w 2008 r., a w styczniu 2014
 *   zatwierdzono JEDNĄ nazwę: piławit-(Y), z materiału
 *   opisanego jako „zaledwie kilka ziaren". SZEŚĆ LAT
 *   NA JEDNO POTWIERDZENIE. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY ODWROTNIE: coś wychodzi RAZ
 *   i od razu mówimy „o, tak trzeba", zapisujemy to
 *   i przekazujemy dalej,
 * — ⚠⚠ ŻE PIERWSZE UDANE PODEJŚCIE NIE ODRÓŻNIA SIĘ
 *   NICZYM OD PRZYPADKU — bo przy pierwszym razie
 *   zmienia się wszystko naraz i nie wiadomo, co zadziałało,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I NIE WYMAGA NICZEGO POZA
 *   CIERPLIWOŚCIĄ: zanim powiesz komuś „tak się to robi",
 *   zrób to jeszcze dwa razy,
 * — ⚠⚠ ŻE DRUGI RAZ ZWYKLE WYCHODZI GORZEJ, I TO JEST
 *   NAJWAŻNIEJSZA INFORMACJA W CAŁYM PROCESIE — pokazuje,
 *   że pierwszy raz miał w sobie coś, czego nie zauważyłaś,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie chodzi o to, żeby nie
 *   dzielić się tym, co wyszło. Chodzi o to, jak się o tym
 *   mówi — „wyszło mi raz, spróbuj" zamiast „tak się
 *   to robi",
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie z zaprogramowanym
 *   przebiegiem ułatwia POWTÓRZENIE, a nie trafienie
 *   za pierwszym razem. MÓWIĘ WPROST, że to zupełnie
 *   inna obietnica niż „zawsze wyjdzie".
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZAPISZ WARUNEK, NIE ZDARZENIE — kąt zajęty
 *   (Gryfów Śląski). ⚠⚠ TO NAJBLIŻSZY OBSZAR: tamten
 *   tekst mówi, CO ZAPISAĆ przy nieudanej próbie; ten
 *   mówi, ILE RAZY POWTÓRZYĆ, ZANIM UZNASZ COŚ ZA PEWNE.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra).
 * — ⚠⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt zajęty
 *   (Szklarska Poręba). ⚠⚠ NIE ROBIĘ Z NAZWANIA MINERAŁU
 *   MORAŁU O NAZYWANIU. Chodzi o POTWIERDZENIE,
 *   nie o nazwę.
 * — ⚠⚠ ZERO EGZEMPLARZA KONTRA KATEGORII — kąt zajęty
 *   (Polanica-Zdrój). ⚠⚠⚠ „STO GATUNKÓW, JEDEN
 *   ZATWIERDZONY" OCIERA SIĘ O TAMTO. DLATEGO LICZBY
 *   PODAJĘ, ALE MORAŁ BUDUJĘ WYŁĄCZNIE NA CZASIE
 *   POTRZEBNYM DO POTWIERDZENIA.
 * — ⚠⚠ ZERO JEDNEJ NAZWY OBEJMUJĄCEJ KILKA MIEJSC —
 *   kąt zajęty (Szczytna).
 * — ⚠⚠ ZERO GÓRY, KTÓRA NIE JEST GÓRĄ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO SYSTEMU PRÓB — podaję WYŁĄCZNIE zasadę:
 *   jeszcze dwa razy.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO I POGRZEBOWEGO.
 * — ⚠⚠ ZERO WYPADKÓW I ZAGROŻEŃ W KOPALNI.
 * — ⚠ ZERO DEMOGRAFII WSPÓŁCZESNEJ I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku 1189 — źródła nie są zgodne.
 * — NIE PODAJĘ liczby zakładów kamieniarskich.
 * — NIE PODAJĘ wymiarów wyrobiska — ryzyko pomylenia
 *   dwóch obiektów.
 * — NIE PODAJĘ wymiarów ziaren piławitu.
 * — NIE TWIERDZĘ, ile faz zatwierdzono po 2013 r.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM przymiotnika „piławski" samodzielnie.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Piława Górna jest gminą miejską w powiecie
 *   dzierżoniowskim; liczy 5 864 mieszkańców (GUS,
 *   31.12.2024) na 20,9 km², czyli około 280 osób
 *   na kilometr kwadratowy; leży na wysokości
 *   289–376 m n.p.m.,
 * — pierwsza wzmianka pochodzi z XII w., w formie
 *   „Pilava Superius"; prawa miejskie nadano 18 lipca
 *   1962 r., przez połączenie Piławy, Kośminy
 *   i Kopanicy,
 * — tradycje wydobycia i obróbki kamienia sięgają
 *   1740 r.,
 * — w tutejszych pegmatytach stwierdzono ponad 100
 *   gatunków minerałów, z czego ponad 20 rozpoznano
 *   po raz pierwszy w Polsce, a 5–7 faz w 2013 r. wciąż
 *   było w opracowaniu; badania ruszyły w 2008 r.,
 * — w styczniu 2014 r. Komisja Nowych Minerałów IMA
 *   zatwierdziła piławit-(Y), odkryty przez zespół
 *   dr. Eligiusza Szełęga i prof. Adama Pieczki;
 *   materiał opisano jako „zaledwie kilka ziaren",
 * — według opracowania urzędu miasta tutejsze żyły
 *   pegmatytowe sięgają 100 m długości przy 6 m
 *   miąższości,
 * — połączenia kolejowe otwierano w 1858, 1894
 *   i 1898 r.
 */
export const PILAWA_GORNA: CityContent = {
  slug: "pilawa-gorna",
  h1: "Thermomix Piława Górna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Piława Górna — prezentacja i cena",
  seoDescription:
    "Thermomix w Piławie Górnej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piława Górna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Piławie Górnej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Piławy Górnej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Piława Górna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sześć lat badań. Jedna zatwierdzona nazwa. Kilka ziaren.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piławie Górnej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "znalezione-nie-potwierdzone",
      heading: "Znalezione to nie potwierdzone",
      paragraphs: [
        "W pegmatytach pod Piławą Górną stwierdzono ponad sto gatunków minerałów. Ponad dwadzieścia z nich rozpoznano w tym miejscu po raz pierwszy w Polsce. Pięć do siedmiu faz w 2013 roku wciąż było w opracowaniu — nikt jeszcze nie wiedział, czym są.",
        "Badania ruszyły w 2008 roku. W styczniu 2014 zatwierdzono jedną nazwę: piławit-(Y). Sześć lat.",
        "Materiał, na którym to zrobiono, opisano jako „zaledwie kilka ziaren”.",
        "Można to przeczytać jako historię o cierpliwości naukowców. Ale mnie interesuje coś prostszego: ile czasu dzieli „znaleźliśmy” od „potwierdzone”. Sześć lat dla kilku ziaren.",
        "W kuchni robimy dokładnie odwrotnie i robimy to wszyscy.",
        "Coś wychodzi raz. Ciasto jest puszyste, sos gładki, mięso miękkie. I od razu: „o, tak trzeba”. Zapisujemy to, opowiadamy o tym, przekazujemy dalej jako metodę.",
        "Rzecz w tym, że pierwsze udane podejście niczym się nie różni od przypadku. Przy pierwszym razie zmienia się wszystko naraz — inny przepis, inne składniki, inny nastrój, inna pora — i nie ma jak ustalić, co właściwie zadziałało.",
        "Ruch jest jeden i nie wymaga niczego poza cierpliwością. Zanim powiesz komuś „tak się to robi”, zrób to jeszcze dwa razy.",
        "Drugi raz zwykle wychodzi gorzej. I to jest najcenniejsza informacja w całej sprawie, choć w chwili, gdy się pojawia, jest po prostu irytująca. Gorszy wynik mówi, że za pierwszym razem było coś, czego nie zauważyłaś — i dopiero teraz masz szansę zgadnąć co.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, co zapisać przy nieudanej próbie. Chodzi o coś innego — o to, ile razy trzeba powtórzyć, zanim w ogóle uznasz coś za pewne.",
        "Uczciwie o drugiej stronie: nie namawiam, żeby nie dzielić się tym, co wyszło. Chodzi tylko o to, jak się o tym mówi. „Wyszło mi raz, spróbuj” jest uczciwe i równie użyteczne co „tak się to robi” — a nie stawia nikogo w sytuacji, w której jego niepowodzenie wygląda na jego winę.",
        "I uczciwie o sprzęcie. Thermomix ułatwia powtórzenie, a nie trafienie za pierwszym razem. To zupełnie inna obietnica niż „zawsze wyjdzie” i nie będę udawać, że to to samo. Kiedy raz coś wyjdzie dobrze, łatwiej to odtworzyć — bo temperatura i czas się nie wahają. Ale pierwszy raz nadal jest pierwszym razem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piławie Górnej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy jest danie, które wyszło Wam raz i od tamtej pory nie chce się powtórzyć. Takie najlepiej ugotować razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piławie Górnej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Piławy Górnej",
      paragraphs: [
        "Piława Górna jest gminą miejską w powiecie dzierżoniowskim — miasto jest tu całą gminą, nie ma żadnych wsi. Liczy 5 864 mieszkańców (GUS, 31.12.2024) na niecałych dwudziestu jeden kilometrach kwadratowych, czyli około dwustu osiemdziesięciu osób na kilometr; podaję akurat tę liczbę, bo w materiałach miejskich krąży starsza, wyższa o kilkaset osób. Miasto leży między dwustu osiemdziesięcioma dziewięcioma a trzystu siedemdziesięcioma sześcioma metrami nad poziomem morza. Pierwsza wzmianka pochodzi z dwunastego wieku, w formie „Pilava Superius”, a prawa miejskie nadano 18 lipca 1962 roku — nie przez podniesienie wsi do rangi miasta, tylko przez połączenie trzech miejscowości: Piławy, Kośminy i Kopanicy. Tradycje wydobycia i obróbki kamienia sięgają tu 1740 roku. W tutejszych pegmatytach stwierdzono ponad sto gatunków minerałów, z czego ponad dwadzieścia rozpoznano po raz pierwszy w Polsce, a pięć do siedmiu faz w 2013 roku wciąż było w opracowaniu; badania ruszyły w 2008. W styczniu 2014 Komisja Nowych Minerałów IMA zatwierdziła piławit-(Y), odkryty przez zespół doktora Eligiusza Szełęga i profesora Adama Pieczki — z materiału opisanego jako „zaledwie kilka ziaren”. Według opracowania urzędu miasta tutejsze żyły pegmatytowe sięgają stu metrów długości przy sześciu metrach miąższości. Połączenia kolejowe otwierano tu w 1858, 1894 i 1898 roku.",
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

  districtsHeading: "Do których części Piławy Górnej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — Piława Górna jest gminą miejską bez wsi, więc sprawa jest prosta: gdziekolwiek mieszkasz w granicach miasta, dojazd jest bezpłatny.",
    "Miasto powstało z połączenia Piławy, Kośminy i Kopanicy, więc starsze nazwy części miasta wciąż bywają w użyciu. Jeśli podasz taką, będę wiedziała, o co chodzi.",
  ],
  districts: [],

  nearbyHeading: "Poza Piławę Górną też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Dzierżoniowa, Bielawy, Niemczy, Ząbkowic Śląskich i Świdnicy — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Dzierżoniów", "Bielawa", "Niemcza", "Ząbkowice Śląskie", "Świdnica"],

  about: blokOMnie("do Piławy Górnej", "w Piławie Górnej i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Piławy Górnej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto przy umawianiu powiedzieć wyraźnie „Górna”, bo Piława Dolna to osobna wieś w sąsiedniej gminie. I uwaga na nazwę: człon „Górna” nie ma tu nic wspólnego z górą — to przeciwstawienie do Dolnej, czyli położenie w górze biegu rzeki Piławy. Samych Piław w Polsce jest zresztą kilka, łącznie z dwiema rzekami o tej nazwie, w dwóch różnych końcach kraju.",
    },
    ...faqWspolne("w Piławie Górnej"),
    {
      question: "Danie wyszło mi raz idealnie, a potem już nigdy. Co poszło nie tak?",
      answer:
        "Najprawdopodobniej nic — po prostu pierwszy raz był pierwszym razem. W pegmatytach Piławy Górnej stwierdzono ponad sto gatunków minerałów, ale od rozpoczęcia badań w 2008 roku do zatwierdzenia jednej nazwy, piławitu-(Y), minęło sześć lat. Znalezione to nie potwierdzone. W kuchni działa ta sama zasada: zanim uznasz, że tak właśnie się to robi, zrób to jeszcze dwa razy. Drugi raz zwykle wychodzi gorzej i dopiero wtedy widać, co za pierwszym razem zadziałało przypadkiem.",
    },
    {
      question: "Czy Thermomix sprawi, że uda mi się za pierwszym razem?",
      answer:
        "Nie i nie będę tego obiecywać. Ułatwia coś innego: powtórzenie tego, co raz wyszło — bo temperatura, czas i tempo mieszania nie wahają się między jednym a drugim razem. To zupełnie inna obietnica niż „zawsze wyjdzie” i nie warto ich mylić przed zakupem. Na prezentacji gotujemy normalne danie, bez próby generalnej, więc widzicie, jak wygląda pierwszy raz.",
    },
  ],

  geo: { lat: 50.683, lng: 16.733 },
};
