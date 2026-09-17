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
 * SZKLARSKA PORĘBA — powiat karkonoski, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — NIE MA WSI. Nie piszę „i wsie
 *   w gminie". W tekście: dzielnice i przysiółki miasta.
 * ⚠⚠⚠ POWIAT KARKONOSKI, NIE JELENIOGÓRSKI — nazwę
 *   zmieniono 1 stycznia 2021 r. Starsze źródła podają
 *   „jeleniogórski". UŻYWAM WYŁĄCZNIE NOWEJ NAZWY.
 * MIASTO/GMINA: 5 716 mieszkańców (GUS 31.12.2024),
 *   75,4 km², gęstość 75,8 os./km².
 *   ⚠ DOMYKA SIĘ WZOROWO: 5 716 / 75,4 = 75,81.
 *   PODAJĘ GĘSTOŚĆ JAKO FAKT.
 *   ⚠ Bardzo niska gęstość jak na miasto — to skutek
 *   ogromnej powierzchni leśnej i górskiej.
 *   NIE ROBIĘ Z TEGO KĄTA.
 * ⚠ WYSOKOŚCI: zabudowa 440–886 m n.p.m. (rozpiętość
 *   446 m); Szrenica 1 362 m; Wysoki Kamień 1 058 m.
 *   ⚠⚠ „JEDNA NAZWA, TRZYSTA DWADZIEŚCIA METRÓW RÓŻNICY"
 *   — kąt zajęty (SZCZYTNA, TA SAMA FALA, TA SAMA FIGURA
 *   ROZPIĘTOŚCI WYSOKOŚCI). ⚠⚠⚠ ROZPIĘTOŚCI 446 M
 *   NIE ROBIĘ KĄTEM I NIE BUDUJĘ NA NIEJ MORAŁU.
 *   PODAJĘ JAKO FAKT GEOGRAFICZNY W SEKCJI „RODZINA".
 * ⚠ GEO: 50,8283 / 15,5222.
 *
 * ⚠⚠ ODMIANA — OBA CZŁONY SIĘ ODMIENIAJĄ:
 *   D. do Szklarskiej Poręby · Ms. w Szklarskiej Porębie ·
 *   B. Szklarską Porębę.
 * ⚠⚠⚠ PRZYMIOTNIKA „SZKLARSKI" NIE TWORZĘ I NIE UŻYWAM
 *   W ZNACZENIU „DOTYCZĄCY MIASTA" — w polszczyźnie
 *   „szklarski" znaczy „dotyczący szklarza". Kolizja
 *   jest tu podwójnie dotkliwa, bo tekst mówi o szkle.
 *   ⚠⚠⚠ ZAWSZE KONSTRUKCJA PRZYIMKOWA: „huta
 *   w Szklarskiej Porębie", „spis ze Szklarskiej Poręby".
 *   NIGDY „szklarska huta". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠ KOLIZJA: PORĘBA — osobne miasto w woj. śląskim,
 *   powiat zawierciański. ROZGRANICZAM W FAQ.
 *   ⚠ Wewnętrzny podział miasta: Szklarska Poręba Dolna,
 *   Średnia, Górna i Huta. TO CZĘŚCI JEDNEGO MIASTA,
 *   nie osobne miejscowości.
 *
 * ⚠⚠ DATY USTROJOWE — RÓŻNICA 593 LATA:
 *   — PIERWSZA WZMIANKA: 7 sierpnia 1366 r. — dokument
 *     sprzedaży huty szkła, nazwa „Schribirshau" [ZW],
 *   — PRAWA MIEJSKIE: 1959 r. [ZW].
 *   ⚠⚠⚠ TO JEST PUŁAPKA „NADANIE KONTRA PIERWSZA
 *   WZMIANKA" — serwisy statystyczne wpisują 1366
 *   w rubrykę „prawa miejskie". PODAJĘ OBIE DATY
 *   Z JAWNYM ROZRÓŻNIENIEM.
 *   ⚠⚠ RÓŻNICY 593 LAT NIE ROBIĘ KĄTEM — figura wielokrotnie
 *   użyta w cyklu. PODAJĘ JAKO FAKT.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SPIS ZAWODÓW Z 1800 ROKU:
 *   14 szlifierzy · 5 obcinaczy · 6 pozłotników ·
 *   5 wydmuchiwaczy · 9 wytwórców · 2 producentów luster ·
 *   10 kupców = 51 OSÓB W SIEDMIU ZAWODACH [ZW].
 *   ⚠⚠⚠ SPRAWDZONA ARYTMETYKA: 14+5+6+5+9+2+10 = 51.
 *   ⚠⚠⚠ TYLKO PIĘCIU WYDMUCHIWACZY ROBIŁO SAMO SZKŁO.
 *   POZOSTAŁYCH CZTERDZIESTU SZEŚCIU ROBIŁO COŚ
 *   ZE SZKŁEM JUŻ ZROBIONYM. To jest cały kąt.
 *   ⚠⚠ NIE TWIERDZĘ, że pozostali „nie pracowali przy
 *   szkle" — twierdzę, że NIE WYTWARZALI GO.
 *   ⚠ „Wytwórcy" to osobna kategoria ze spisu i NIE WIEM,
 *   co dokładnie obejmowała. NIE DOPOWIADAM.
 *   Liczę jako „robiących samo szkło" WYŁĄCZNIE
 *   pięciu wydmuchiwaczy.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — SIEDEM LOKALIZACJI HUT w latach 1366–1842 — hutnictwo
 *   przenosiło się w miarę wyczerpywania drewna [ZW].
 *   ⚠ TO DRUGA SIÓDEMKA W TEKŚCIE. ⚠⚠ NIE ZESTAWIAM JEJ
 *   Z SIEDMIOMA ZAWODAMI — to przypadkowa zbieżność
 *   i sugerowanie związku byłoby nieuczciwe.
 *   ROZDZIELAM JE NA RÓŻNE SEKCJE.
 * — HUTA „JOSEPHINE": założona 1842, w latach 40. XIX w.
 *   135 robotników i dwa piece; złoty medal na wystawie
 *   w Londynie w 1851 r.; pracowała do 1994 r., czyli
 *   152 lata.
 *   ⚠⚠ NAZWY HUTY UŻYWAM — to nazwa historyczna zakładu
 *   sprzed dwustu lat, nie marka działającej firmy.
 *   ⚠ NIE PISZĘ, co się z nią dzieje dziś.
 * — WODOSPADY: Kamieńczyka 27 m w trzech kaskadach;
 *   Szklarki 13,3 m jednym progiem.
 *   ⚠⚠ „JEDNA SKALA NIE WYSTARCZYŁA" — kąt zajęty
 *   (Kowary). NIE ZESTAWIAM WODOSPADÓW JAKO MORAŁU.
 * — WĄWÓZ KAMIEŃCZYKA: ok. 100 m długości, ściany ponad
 *   25 m, szerokość miejscami 4 m.
 * — ODLEGŁOŚCI [ZW]: Jelenia Góra 18 km, Kłodzko 126 km.
 *
 * KĄT: SIEDEM NAZW NA JEDEN PRZEDMIOT
 * — o tym, że nie da się skrócić czegoś, co nie ma nazwy.
 * Kąt od spisu z 1800 roku: pięćdziesiąt jeden osób
 * pracowało tu przy szkle w siedmiu osobno nazwanych
 * zawodach, a samo szkło robiło pięć z nich. Nazwanie
 * kroków pokazuje, że praca nie leży tam, gdzie nazwa
 * całości sugeruje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że spis z 1800 roku wymienia czternastu szlifierzy,
 *   pięciu obcinaczy, sześciu pozłotników, pięciu
 *   wydmuchiwaczy, dziewięciu wytwórców, dwóch
 *   producentów luster i dziesięciu kupców — pięćdziesiąt
 *   jeden osób w siedmiu nazwanych zawodach,
 * — ŻE SAMO SZKŁO ROBIŁO PIĘCIU. Reszta robiła coś
 *   ze szkłem już zrobionym. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI MAMY NA TO WSZYSTKO JEDNO SŁOWO:
 *   „ogarniam kuchnię". Jedna nazwa na kilkanaście
 *   różnych czynności,
 * — ⚠⚠ ŻE PÓKI TO JEST JEDNO SŁOWO, NIE DA SIĘ TEGO ANI
 *   ZMIERZYĆ, ANI SKRÓCIĆ — bo nie wiadomo, która część
 *   trwa najdłużej,
 * — ⚠⚠ ŻE PO NAZWANIU KROKÓW wychodzi zwykle to samo,
 *   co w spisie: gotowanie, czyli ta czynność, od której
 *   nazwaliśmy całość, jest najkrótszą z nich.
 *   Dłużej trwa planowanie, dokupowanie, rozpakowywanie,
 *   obieranie, krojenie, nakrywanie i sprzątanie,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ROBI SIĘ GO RAZ: przy
 *   najbliższym obiedzie wypisz na kartce same nazwy
 *   kroków. Bez czasów, bez ocen. Same nazwy,
 * — ⚠⚠ ŻE DOPIERO MAJĄC NAZWY, MOŻNA COKOLWIEK Z TYM
 *   ZROBIĆ — skrócić jeden krok, przesunąć drugi
 *   na wieczór wcześniej albo stwierdzić, że trzeci
 *   jest zbędny,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: samo nazwanie niczego nie
 *   skraca. Bywa wręcz przykre, bo lista wychodzi
 *   dłuższa, niż się wydawało. To narzędzie do patrzenia,
 *   nie do naprawiania,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie skraca kroki
 *   ze środka listy — siekanie, mieszanie, pilnowanie,
 *   część zmywania — a NIE SKRACA planowania, zakupów
 *   ani nakrywania do stołu. MÓWIĘ WPROST, że jeśli
 *   u kogoś czas idzie głównie na te ostatnie,
 *   to zmiana będzie mniejsza, niż się spodziewa.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO JEDNEJ NAZWY OBEJMUJĄCEJ KILKA MIEJSC —
 *   kąt zajęty (SZCZYTNA, TA SAMA FALA). ⚠⚠⚠ TO NAJBLIŻSZY
 *   OBSZAR I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tamten tekst
 *   mówi o NAZWIE ZBIORCZEJ MIEJSCA, ten o BRAKU NAZW
 *   DLA KROKÓW PRACY. JEDNO ZDANIE ROZGRANICZAJĄCE
 *   W TEKŚCIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO MOMENTU PRZEKAZANIA I PODZIAŁU PRACY MIĘDZY
 *   OSOBY — kąt zajęty (ŻMIGRÓD, TA SAMA FALA).
 *   ⚠⚠⚠ TEN TEKST NIE MÓWI ANI SŁOWA O TYM, KTO CO ROBI.
 *   Mówi WYŁĄCZNIE o nazywaniu kroków, żeby je zobaczyć.
 *   ⚠⚠ ZAKAZ SŁÓW: „podziel się", „kto robi", „umówcie
 *   się, kto". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 * — ⚠⚠⚠ ZERO KOLEJNOŚCI OPERACJI — kąt zajęty (Milicz).
 *   Nie mówię, W JAKIEJ KOLEJNOŚCI robić kroki.
 * — ⚠⚠ ZERO PRZELICZANIA SKALI — kąt zajęty (Kowary).
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno).
 * — ⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra).
 * — ⚠⚠ ZERO ZAPISZ WARUNEK, NIE ZDARZENIE — kąt zajęty
 *   (Gryfów Śląski, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ⚠⚠⚠ ŻADNYCH LICZB MINUTOWYCH PRZY KROKACH KUCHENNYCH
 *   — nie wymyślam, ile trwa obieranie czy nakrywanie.
 *   Mówię WYŁĄCZNIE o kolejności wielkości („najkrótsza
 *   z nich"), bez ani jednej liczby.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ GOTOWEJ LISTY KROKÓW DO PRZEPISANIA — wymieniam
 *   przykłady w zdaniu ciągłym, nie daję szablonu.
 * — ŻADNYCH NAZW FIRM I MAREK (nazwa huty z 1842 r.
 *   to wyjątek opisany wyżej).
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKIEJ NAZWY
 *   MIASTA (nazwa „Schribirshau" z 1366 r. to zapis
 *   źródłowy sprzed sześciuset lat — DOPUSZCZAM).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO WYPADKÓW, KATASTROF I ZAGROŻEŃ W GÓRACH.
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠ ZERO UPADKU PRZEMYSŁU, BEZROBOCIA I DEMOGRAFII
 *   WSPÓŁCZESNEJ — o zamknięciu huty w 1994 r. piszę
 *   WYŁĄCZNIE jako o dacie końca stu pięćdziesięciu
 *   dwóch lat pracy, bez ani jednego zdania o skutkach.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE TWIERDZĘ, że czterdziestu sześciu ludzi ze spisu
 *   nie pracowało przy szkle — tylko że go nie wytwarzali.
 * — NIE DOPOWIADAM, co obejmowała kategoria „wytwórcy".
 * — NIE ZESTAWIAM siedmiu zawodów z siedmioma
 *   lokalizacjami hut — zbieżność jest przypadkowa.
 * — NIE PODAJĘ ani jednej liczby minut przy krokach
 *   kuchennych.
 * — NIE TWIERDZĘ, że nazwanie kroków cokolwiek skraca.
 * — NIE UŻYWAM przymiotnika „szklarski" o mieście.
 * — NIE PISZĘ o dzisiejszym stanie huty.
 * — NIE PODAJĘ odległości innych niż Jelenia Góra
 *   i Kłodzko.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Szklarska Poręba jest gminą miejską w powiecie
 *   karkonoskim; liczy 5 716 mieszkańców (GUS,
 *   31.12.2024) na 75,4 km², czyli 75,8 osoby
 *   na kilometr kwadratowy,
 * — zabudowa rozciąga się od 440 do 886 m n.p.m.;
 *   Szrenica ma 1 362 m, Wysoki Kamień 1 058 m,
 * — pierwsza wzmianka pochodzi z 7 sierpnia 1366 r. —
 *   z dokumentu sprzedaży huty szkła, gdzie miejscowość
 *   zapisano jako „Schribirshau"; prawa miejskie miasto
 *   otrzymało w 1959 r.,
 * — w latach 1366–1842 huty działały tu kolejno
 *   w siedmiu różnych miejscach, przenosząc się w miarę
 *   wyczerpywania drewna,
 * — spis z 1800 r. wymienia czternastu szlifierzy, pięciu
 *   obcinaczy, sześciu pozłotników, pięciu wydmuchiwaczy,
 *   dziewięciu wytwórców, dwóch producentów luster
 *   i dziesięciu kupców — razem pięćdziesiąt jeden osób
 *   w siedmiu zawodach,
 * — hutę „Josephine" założono w 1842 r.; w latach
 *   czterdziestych XIX w. zatrudniała 135 robotników
 *   i miała dwa piece, w 1851 r. zdobyła złoty medal
 *   na wystawie w Londynie, a pracowała przez 152 lata,
 *   do 1994 r.,
 * — wodospad Kamieńczyka ma 27 m i spada trzema
 *   kaskadami, wodospad Szklarki 13,3 m jednym progiem,
 * — wąwóz Kamieńczyka liczy około 100 m długości, jego
 *   ściany mają ponad 25 m, a miejscami jest szeroki
 *   na cztery metry,
 * — do Jeleniej Góry jest stąd 18 km, do Kłodzka 126 km.
 */
export const SZKLARSKA_POREBA: CityContent = {
  slug: "szklarska-poreba",
  h1: "Thermomix Szklarska Poręba – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szklarska Poręba — prezentacja i cena",
  seoDescription:
    "Thermomix w Szklarskiej Porębie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szklarska Poręba — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szklarskiej Porębie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szklarskiej Poręby z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do Dolnej, Średniej, Górnej i Huty tak samo.",

  highlights: highlightyStandardowe("Szklarska Poręba"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pięćdziesiąt jeden osób przy szkle. Szkło robiło pięć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szklarskiej Porębie – jak wygląda prezentacja?",
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
      id: "siedem-nazw",
      heading: "Siedem nazw na jeden przedmiot",
      paragraphs: [
        "Spis ludności z 1800 roku wymienia, kto w Szklarskiej Porębie pracował przy szkle. Czternastu szlifierzy. Pięciu obcinaczy. Sześciu pozłotników. Pięciu wydmuchiwaczy. Dziewięciu wytwórców. Dwóch producentów luster. Dziesięciu kupców.",
        "Pięćdziesiąt jeden osób. Siedem osobno nazwanych zawodów. Jeden przedmiot.",
        "A teraz najciekawsze: samo szkło robiło pięciu. Wydmuchiwacze. Pozostali robili coś ze szkłem już zrobionym — szlifowali je, obcinali, złocili, oprawiali w lustra, sprzedawali.",
        "Czynność, od której nazywamy całość, była zajęciem jednej dziesiątej ludzi.",
        "W kuchni mamy na to wszystko jedno słowo. „Ogarniam kuchnię.” Albo „robię obiad”. Jedna nazwa na kilkanaście różnych czynności.",
        "I dopóki to jest jedno słowo, nie da się z tym zrobić absolutnie nic. Nie da się zmierzyć, bo nie wiadomo, co mierzyć. Nie da się skrócić, bo nie wiadomo, co skracać.",
        "Kiedy się te kroki nazwie — planowanie, dokupowanie, rozpakowywanie, obieranie, krojenie, gotowanie, nakrywanie, sprzątanie — wychodzi zwykle to samo, co w spisie z 1800 roku. Gotowanie, czyli ta czynność, od której nazwaliśmy całość, jest najkrótszą z nich.",
        "Ruch jest jeden i robi się go raz. Przy najbliższym obiedzie wypisz na kartce same nazwy kroków. Bez czasów, bez ocen, bez porządkowania. Same nazwy, w kolejności, w jakiej przyjdą do głowy.",
        "Dopiero mając nazwy, można cokolwiek zrobić: skrócić jeden krok, przesunąć drugi na wieczór wcześniej, stwierdzić, że trzeci jest zbędny i robisz go z przyzwyczajenia.",
        "Dopowiem dwie rzeczy, bo obie leżą blisko. Po pierwsze: nie chodzi o to, że jedna nazwa obejmuje kilka różnych miejsc — chodzi o coś innego, o to, że kroki pracy w ogóle nie mają nazw. Po drugie: nie piszę tu ani słowa o tym, kto ma co robić. To zupełnie osobna sprawa. Ta lista jest do patrzenia, nie do dzielenia.",
        "Uczciwie o drugiej stronie: samo nazwanie niczego nie skraca. Bywa wręcz przykre, bo lista wychodzi dłuższa, niż się wydawało, i pierwsza reakcja to zmęczenie samym jej widokiem. To narzędzie do zobaczenia, nie do naprawienia.",
        "I uczciwie o sprzęcie. Thermomix skraca kroki ze środka listy: siekanie, mieszanie, pilnowanie garnka, część zmywania. Nie skraca planowania, zakupów ani nakrywania do stołu. Jeśli u Was czas idzie głównie na te ostatnie, zmiana będzie mniejsza, niż się spodziewacie — i lepiej wiedzieć to przed zakupem niż po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szklarskiej Porębie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj przy umawianiu, czy to Dolna, Średnia, Górna czy Huta — miasto jest rozciągnięte i to realnie zmienia czas dojazdu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szklarskiej Porębie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Szklarskiej Poręby",
      paragraphs: [
        "Szklarska Poręba jest gminą miejską w powiecie karkonoskim — nazwa powiatu zmieniła się z jeleniogórskiego na karkonoski z początkiem 2021 roku, więc starsze mapy podają inną. Miasto liczy 5 716 mieszkańców (GUS, 31.12.2024) na siedemdziesięciu pięciu i czterech dziesiątych kilometra kwadratowego, czyli niecałe siedemdziesiąt sześć osób na kilometr — jak na miasto bardzo rzadko, bo większość tej powierzchni to las i góry. Zabudowa rozciąga się od czterystu czterdziestu do ośmiuset osiemdziesięciu sześciu metrów nad poziomem morza; Szrenica ma tysiąc trzysta sześćdziesiąt dwa metry, Wysoki Kamień tysiąc pięćdziesiąt osiem. Pierwsza wzmianka pochodzi z 7 sierpnia 1366 roku, z dokumentu sprzedaży huty szkła, gdzie miejscowość zapisano jako „Schribirshau”; prawa miejskie miasto otrzymało dopiero w 1959 roku. Między 1366 a 1842 rokiem huty działały tu kolejno w siedmiu różnych miejscach, przenosząc się w miarę wyczerpywania drewna. Hutę „Josephine” założono w 1842 roku; w latach czterdziestych dziewiętnastego wieku zatrudniała stu trzydziestu pięciu robotników i miała dwa piece, a w 1851 zdobyła złoty medal na wystawie w Londynie. Pracowała sto pięćdziesiąt dwa lata, do 1994 roku. Wodospad Kamieńczyka ma dwadzieścia siedem metrów i spada trzema kaskadami, a wodospad Szklarki trzynaście metrów z okładem jednym progiem. Wąwóz Kamieńczyka liczy około stu metrów długości, jego ściany mają ponad dwadzieścia pięć metrów, a miejscami jest szeroki na cztery. Do Jeleniej Góry jest stąd osiemnaście kilometrów, do Kłodzka sto dwadzieścia sześć.",
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

  districtsHeading: "Do których części Szklarskiej Poręby dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta: Dolnej, Średniej, Górnej i Huty. Wszędzie bez dopłaty, mimo że miasto zajmuje ponad siedemdziesiąt pięć kilometrów kwadratowych, a zabudowa rozciąga się na czterysta czterdzieści sześć metrów różnicy wysokości.",
    "Powiedz przy umawianiu, która to część i czy podjazd pod dom bywa zimą trudny. Wolę o tym wiedzieć wcześniej, niż stać pod górką z pełnymi rękami.",
  ],
  districts: [],

  nearbyHeading: "Poza Szklarską Porębę też przyjadę",
  nearbyParagraphs: [
    "Do Jeleniej Góry jest stąd osiemnaście kilometrów. Dojeżdżam też do Piechowic, Karpacza, Mirska i Świeradowa-Zdroju — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Jelenia Góra", "Piechowice", "Karpacz", "Mirsk", "Świeradów-Zdrój"],

  about: blokOMnie("do Szklarskiej Poręby", "w Szklarskiej Porębie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szklarskiej Poręby bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — Dolnej, Średniej, Górnej i Huty. Dojazd jest bezpłatny tak samo jak sama prezentacja, mimo że miasto zajmuje ponad siedemdziesiąt pięć kilometrów kwadratowych. Uwaga nazewnicza, bo bywa mylnie: Poręba bez pierwszego członu to osobne miasto w województwie śląskim, w powiecie zawierciańskim. To zupełnie inna miejscowość, kilkaset kilometrów stąd.",
    },
    ...faqWspolne("w Szklarskiej Porębie"),
    {
      question: "Wydaje mi się, że gotowanie zajmuje mi całe popołudnie. Jak to sprawdzić?",
      answer:
        "Nazwać kroki. Spis ludności Szklarskiej Poręby z 1800 roku wymienia pięćdziesiąt jeden osób pracujących przy szkle w siedmiu osobno nazwanych zawodach — a samo szkło robiło pięcioro z nich, reszta zajmowała się szkłem już zrobionym. W kuchni jest tak samo, tylko my mamy na to wszystko jedno słowo. Wypisz przy najbliższym obiedzie same nazwy kroków, bez czasów i ocen. Zwykle okazuje się, że gotowanie jest najkrótszym z nich, a czas idzie na planowanie, dokupowanie i sprzątanie. Zastrzeżenie: samo nazwanie niczego nie skróci — pokaże tylko, gdzie patrzeć.",
    },
    {
      question: "Które z tych kroków Thermomix faktycznie skraca?",
      answer:
        "Te ze środka listy: siekanie, mieszanie, pilnowanie garnka i część zmywania, bo większość dania powstaje w jednym naczyniu. Nie skraca planowania, zakupów ani nakrywania do stołu — i mówię to wprost, bo jeśli u Was czas idzie głównie na te rzeczy, różnica będzie mniejsza, niż obiecuje większość opisów. Na prezentacji łatwo to zweryfikować: gotujemy normalny obiad i sami widzicie, która część się skróciła.",
    },
  ],

  geo: { lat: 50.8283, lng: 15.5222 },
};
