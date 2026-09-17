import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * SIERAKÓW — powiat międzychodzki, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ SIERAKÓW NIE MA.
 *   Źródło cytuje wprost: „Gmina Sieraków to gmina
 *   miejsko-wiejska".
 * MIASTO: 5 797 mieszkańców (GUS 31.12.2024), 14,1 km²,
 *   gęstość 411,7 os./km².
 *   ⚠ [ZW — 5 797 / 14,1 = 411,1 wobec 411,7. Różnica
 *   0,6, domyka się po cofnięciu zaokrąglenia. PODAJĘ.]
 *   ⚠⚠ NAJWIĘKSZE OBSZAROWO MIASTO TEJ FALI przy niemal
 *   identycznej ludności co pozostałe cztery — 14,1 km²
 *   wobec 4,5–5,8 km². MOGĘ WSPOMNIEĆ, ALE NIE ROBIĘ
 *   Z TEGO KĄTU (figura „szerokie a płytkie" zajęta —
 *   Pniewy).
 * CAŁA GMINA: 8 481 osób, 203,1 km², gęstość
 *   42 os./km².
 *   ⚠ [ZW — 8 481 / 203,1 = 41,8 → 42. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠ Gmina to 22,9% ludności i 27,6% powierzchni
 *   powiatu międzychodzkiego. PODAJĘ — obie liczby
 *   z jednego źródła.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * WSIE: 16 nazwanych w wykazie GUS — Bucharzewo,
 *   Chalin, Chorzępowo, Grobia, Góra, Izdebno,
 *   Jabłonowo, Kaczlin, Kobylarnia, Kłosowice, Lutom,
 *   Lutomek, Przemyśl, Tuchola, Ławica.
 *   ⚠⚠ WYKAZ PODAJE 16, A WYMIENIA 15 NAZW —
 *   ROZBIEŻNOŚCI NIE ROZSTRZYGAM I LICZBY NIE PODAJĘ.
 *   Piszę „wszystkie wsie w gminie".
 *   ⚠⚠ SOŁECTW NIE USTALONO [NP].
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 *   ⚠⚠⚠ PUŁAPKA: wsie PRZEMYŚL i TUCHOLA w tej gminie
 *   mają nazwy identyczne z miastami na Podkarpaciu
 *   i w kujawsko-pomorskim. WSPOMINAM W CZĘŚCI
 *   O DOJAZDACH, bo przy umawianiu to realne źródło
 *   pomyłki.
 * ⚠ WYSOKOŚĆ: 31 m n.p.m. PODAJĘ.
 * ⚠⚠⚠ GEO: 52,65 / 16,10 — ŹRÓDŁO PODAJE TYLKO DWA
 *   MIEJSCA PO PRZECINKU. DOKŁADNIEJSZYCH NIE
 *   USTALONO [NP]. W TEKŚCIE WSPÓŁRZĘDNYCH NIE
 *   WYMIENIAM ANI RAZU.
 *
 * ⚠⚠ ODMIANA:
 *   D. do SIERAKOWA · Ms. w SIERAKOWIE ·
 *   N. Sierakowem · C. Sierakowowi.
 *   Przymiotnik: SIERAKOWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — forma
 *   rekonstruowana gramatycznie.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — CZTERY, NAJWIĘCEJ W TEJ FALI:
 *   — SIERAKÓW ŚLĄSKI — gmina Ciasna, powiat
 *     lubliniecki, woj. śląskie.
 *   — SIERAKÓW — wieś w gminie Dobczyce, powiat
 *     myślenicki, woj. małopolskie.
 *   — SIERAKÓWKO — odrębna miejscowość w wielkopolskim.
 *   — plus wsie PRZEMYŚL i TUCHOLA wewnątrz gminy.
 *   ⚠⚠ W CZĘŚCI O DOJAZDACH MÓWIĘ WPROST, ŻE CHODZI
 *   O SIERAKÓW W POWIECIE MIĘDZYCHODZKIM.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: przed 1388 r.; status odnowił
 *     WŁADYSŁAW JAGIEŁŁO w 1416 r. Dwa źródła zgodne.
 *     PODAJĘ OBIE DATY Z ZASTRZEŻENIEM „przed".
 *   — NAZWA: Syrakowo → Sierakowo → SIERAKÓW od 1580 r.
 *     PODAJĘ.
 *   — Utraty praw nie ustalono [NP].
 *   ⚠⚠⚠ ZAKUPU MIASTA W 1591 R. ZA 60 TYS. FLORENÓW
 *     NIE PODAJĘ — figura „kupione za małe" zajęta
 *     (Wolsztyn), a kwoty historyczne przeliczane
 *     na dziś są niesprawdzalne.
 *   ⚠⚠⚠ SZKOŁY RYBACKIEJ Z KWIETNIA 1939 R. NIE PODAJĘ —
 *     data ociera się o wątek wykluczony, a sam fakt
 *     nie jest potrzebny do kąta.
 *   ⚠⚠⚠ DANYCH „8 768 mieszkańców, 622 os./km² (2012)"
 *     Z EN.WIKIPEDII NIE UŻYWAM — to dane GMINY
 *     podstawione pod MIASTO. ŹRÓDŁO BŁĘDNE, NIE
 *     CYTUJĘ.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — OCALAŁE DOSTAŁO NAJMNIEJSZĄ FUNKCJĘ:
 *   ZAMEK OPALIŃSKICH w Sierakowie — pierwsza wzmianka
 *   o zamku 1397 r. Budowla spłonęła w 1817 r.
 *   OCALAŁO SKRZYDŁO POŁUDNIOWE — I PRZEZNACZONO JE
 *   NA LODOWNIĘ.
 *   Decyzję o odnowieniu podjęto w 1991 r.
 *   MUZEUM OTWARTO W CZERWCU 1995 R.
 *   CZYLI 178 LAT MIĘDZY POŻAREM A PRZYWRÓCENIEM
 *   OCALAŁEJ CZĘŚCI DUŻEJ FUNKCJI.
 *   ⚠⚠⚠ POŻARU NIE OPISUJĘ JAKO ŻYWIOŁU ANI DRAMATU —
 *   JEDNO ZDANIE, DATA, BEZ PRZYMIOTNIKÓW, BEZ OFIAR,
 *   BEZ PRZYCZYNY. To fakt architektoniczny, nie wątek
 *   katastroficzny. OBOWIĄZKOWO NEUTRALNIE.
 *   ⚠⚠ „LODOWNIA" TO FUNKCJA GOSPODARCZA, NIE OBELGA —
 *   nie piszę, że skrzydło „upadło" ani że je
 *   „poniżono". Piszę, że dostało najmniejszą
 *   z możliwych funkcji.
 *
 * KĄT: OCALAŁE DOSTAŁO NAJMNIEJSZĄ FUNKCJĘ
 * — o tym, że to, co przetrwa trudny okres, dostaje
 * zwykle najmniejsze zadanie — i że to nie jest wyrok.
 * Kąt z zamku w Sierakowie: ocalałe skrzydło przerobiono
 * na lodownię, a dużą funkcję odzyskało po 178 latach.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pierwsza wzmianka o zamku pochodzi z 1397 r.,
 *   budowla spłonęła w 1817 r., a ocalałe skrzydło
 *   południowe przeznaczono na lodownię,
 * — że decyzję o odnowieniu podjęto w 1991 r., muzeum
 *   otwarto w czerwcu 1995 r. — 178 lat po pożarze.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: po trudnym okresie
 *   z gotowania zostaje zwykle jedna najprostsza
 *   czynność — odgrzanie, kanapka, jedno danie
 *   w kółko,
 * — ⚠⚠ ŻE TA JEDNA CZYNNOŚĆ NIE JEST MIARĄ TEGO,
 *   CO UMIESZ. Jest miarą tego, ile miejsca zostało,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nie odbudowuj wszystkiego.
 *   Przywróć jednej rzeczy większą funkcję niż ma teraz,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: 178 lat to nie jest
 *   wzór do naśladowania. Im dłużej coś stoi
 *   w najmniejszej funkcji, tym trudniej wraca —
 *   i warto to wiedzieć,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie przywraca
 *   funkcji za Was. Obniża próg wejścia do większej
 *   czynności, bo nie trzeba przy niej stać.
 *   MÓWIĘ WPROST, ŻE PRÓG TO NIE TO SAMO CO DECYZJA.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO INSTYTUCJI MŁODSZEJ OD SWOICH ŚCIAN —
 *   kąt zajęty (Puszczykowo). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło
 *   o różnicę wieku między budynkiem a instytucją;
 *   tu o to, JAKĄ FUNKCJĘ dostało to, co ocalało.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ROZEBRANEGO, ZANIM POWSTAŁO NOWE — kąt
 *   zajęty (Opalenica). Tu nic nie rozbierano pod nowe.
 * — ⚠⚠⚠ ZERO NOWEGO NA STARYM NOŚNYM — kąt zajęty
 *   (Czarnków).
 * — ⚠⚠ ZERO KUPIONEGO ZA MAŁE — kąt zajęty (Wolsztyn).
 *   DLATEGO POMIJAM ZAKUP Z 1591 R.
 * — ⚠⚠ ZERO PRZERWY, KTÓRA NIE KASUJE POCZĄTKU — kąt
 *   zajęty (Trzcianka). Tu 178 lat nie jest przerwą
 *   w istnieniu, tylko okresem w mniejszej funkcji.
 *   ROZGRANICZAM.
 * — ⚠⚠ ZERO PRZERW, KTÓRE ROSNĄ — kąt zajęty
 *   (Węgliniec).
 * — ⚠⚠ ZERO JEDNEJ RZECZY, DWÓCH FUNKCJI NARAZ — kąt
 *   zajęty (Zbąszyń). Tu funkcje są PO SOBIE, nie
 *   jednocześnie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ SZCZEGÓLNIE:
 *   ANI SŁOWA O ZDROWIU PSYCHICZNYM, O „TRUDNYM
 *   OKRESIE" JAKO STANIE CHOROBOWYM, O SAMOOCENIE
 *   JAKO OBJAWIE. Piszę o zmęczeniu i braku miejsca,
 *   nie o diagnozach.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA, ŻE KTOŚ „PRZESTAŁ GOTOWAĆ".
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   POŻARU JAKO ŻYWIOŁU (data i jedno zdanie —
 *   TO WSZYSTKO) · ZERO ALKOHOLU · ZERO UZDROWISK ·
 *   ZERO HERBU · ZERO BEZROBOCIA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby wsi ani sołectw.
 * — NIE PODAJĘ współrzędnych w tekście.
 * — NIE PODAJĘ przyczyny pożaru z 1817 r.
 * — NIE PODAJĘ kwoty zakupu z 1591 r.
 * — NIE PODAJĘ danych en.wikipedii dla miasta.
 * — NIE TWIERDZĘ, że lodownia była wyrokiem ani
 *   że ktoś zaniedbał zamek.
 * — NIE PODAJĘ liczby jezior w gminie ani powierzchni
 *   parku krajobrazowego.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Sieraków leży w powiecie międzychodzkim, liczy
 *   5 797 mieszkańców (GUS, 31.12.2024) na 14,1 km²,
 *   czyli 411,7 osoby na kilometr kwadratowy, i leży
 *   31 m n.p.m.,
 * — cała gmina miejsko-wiejska to 8 481 osób na
 *   203,1 km², czyli 42 osoby na kilometr kwadratowy;
 *   to 22,9% ludności i 27,6% powierzchni powiatu,
 * — prawa miejskie Sieraków miał już przed 1388 r.,
 *   a ich status odnowił w 1416 r. Władysław Jagiełło,
 * — nazwa przechodziła przez formy Syrakowo
 *   i Sierakowo, a dzisiejsza obowiązuje od 1580 r.,
 * — pierwsza wzmianka o zamku pochodzi z 1397 r.;
 *   budowla spłonęła w 1817 r., a ocalałe skrzydło
 *   południowe przeznaczono na lodownię; decyzję
 *   o odnowieniu podjęto w 1991 r., a muzeum otwarto
 *   w czerwcu 1995 r.,
 * — w gminie leżą m.in. Lutom, Lutomek, Chalin,
 *   Chorzępowo, Bucharzewo, Izdebno, Kaczlin, Kłosowice,
 *   Ławica, a także wsie Przemyśl i Tuchola.
 */
export const SIERAKOW: CityContent = {
  slug: "sierakow",
  h1: "Thermomix Sieraków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sieraków — cena i prezentacja",
  seoDescription:
    "Thermomix w Sierakowie w powiecie międzychodzkim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sieraków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sierakowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sierakowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Sieraków"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ocalałe skrzydło. Sto siedemdziesiąt osiem lat w małej funkcji.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sierakowie – jak wygląda prezentacja?",
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
      id: "ocalale-skrzydlo",
      heading: "Ocalałe dostało najmniejszą funkcję",
      paragraphs: [
        "Pierwsza wzmianka o zamku w Sierakowie pochodzi z 1397 roku. Budowla spłonęła w 1817 roku. Ocalało skrzydło południowe.",
        "I temu ocalałemu skrzydłu przypisano nową funkcję: lodownię. Miejsce, w którym trzyma się lód. Z całej budowli została jedna część, a ta część dostała najmniejsze zadanie, jakie dało się jej dać.",
        "Decyzję o odnowieniu podjęto w 1991 roku. Muzeum otwarto w czerwcu 1995 roku. Sto siedemdziesiąt osiem lat między pożarem a chwilą, w której ocalała część odzyskała dużą funkcję.",
        "Piszę o tym, bo w kuchniach widzę dokładnie ten sam mechanizm i prawie nikt go tak nie nazywa.",
        "Po naprawdę trudnym okresie — długiej pracy na zmiany, małym dziecku, przeprowadzce, opiece nad kimś bliskim — z gotowania zostaje zwykle jedna czynność. Odgrzanie. Kanapka. Jedno danie w kółko, bo tylko to wchodzi bez myślenia. Reszta nie zniknęła: po prostu przestała być używana.",
        "I wtedy zaczyna się najgorszy błąd oceniania siebie. Patrzysz na tę jedną czynność i traktujesz ją jak miarę tego, co umiesz. A ona jest miarą czegoś zupełnie innego — miarą tego, ile zostało miejsca. Ocalałe skrzydło nie było gorszą architekturą, bo stał w nim lód.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o budynku starszym od instytucji, która w nim siedzi. Tam chodziło o różnicę wieku. Tu chodzi o coś innego — o to, jaką funkcję dostaje to, co ocalało, i jak długo w niej zostaje.",
        "Ruch jest jeden i jest mały. Nie odbudowuj wszystkiego. Wybierz jedną rzecz i daj jej funkcję o jeden stopień większą niż ma teraz. Jeśli teraz odgrzewasz — ugotuj jedno. Jeśli gotujesz jedno — ugotuj podwójną porcję. Nic ponad to.",
        "Uczciwie o drugiej stronie, bo 178 lat nie jest tu żadnym wzorem. Im dłużej coś stoi w najmniejszej funkcji, tym trudniej z niej wychodzi — pojawia się nawyk, znika sprzęt, zapomina się kolejność. To realna cena czekania i wolę ją powiedzieć wprost, niż udawać, że można wrócić kiedykolwiek równie łatwo.",
        "I uczciwie o sprzęcie. Thermomix nie przywraca funkcji za Was i nie podejmie tej decyzji. Robi jedno: obniża próg wejścia w większą czynność, bo przy niej nie trzeba stać — temperaturę i mieszanie prowadzi sam. Ale próg to nie to samo co decyzja, i to Wy ją podejmujecie.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sierakowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was zostało z gotowania — nawet jeśli to jedna rzecz. Od niej zaczynamy, nie od wyobrażenia o pełnej kuchni.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sierakowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Sierakowa",
      paragraphs: [
        "Sieraków leży w powiecie międzychodzkim, liczy 5 797 mieszkańców (GUS, 31.12.2024) na 14,1 kilometra kwadratowego, czyli czterystu jedenastu na kilometr, i leży trzydzieści jeden metrów nad poziomem morza. Cała gmina miejsko-wiejska to 8 481 osób na 203,1 kilometra kwadratowego, czyli czterdzieści dwie osoby na kilometr — jedna czwarta powierzchni całego powiatu i niecała czwarta jego ludności. Prawa miejskie Sieraków miał już przed 1388 rokiem, a ich status odnowił w 1416 Władysław Jagiełło; sama nazwa przeszła drogę od Syrakowa przez Sierakowo, a dzisiejsza forma obowiązuje od 1580 roku. W gminie leżą między innymi Lutom, Lutomek, Chalin, Chorzępowo, Bucharzewo, Izdebno i Ławica.",
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

  districtsHeading: "Do których części Sierakowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Lutomia, Lutomka, Chalina, Chorzępowa, Bucharzewa, Izdebna, Kaczlina, Kłosowic, Ławicy, Góry, Grobi, Jabłonowa, Kobylarni i pozostałych. Wszędzie bez dopłaty.",
    "Dwie uwagi praktyczne. Sierakowów jest w Polsce więcej — jest Sieraków Śląski w powiecie lublinieckim i Sieraków w powiecie myślenickim, a w samym wielkopolskim jeszcze Sierakówko; przy umawianiu warto dopowiedzieć „Sieraków w powiecie międzychodzkim”. I druga: w tej gminie leżą wsie o nazwach Przemyśl i Tuchola, identycznych z miastami na Podkarpaciu i w kujawsko-pomorskim, więc adres warto podać z gminą.",
  ],
  districts: [],

  nearbyHeading: "Poza Sieraków też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Międzychodu, Wronek, Pniew, Wielenia, Obrzycka i Szamotuł — wszędzie bezpłatnie, tak samo jak w samym Sierakowie.",
  ],
  nearbyTowns: ["Międzychód", "Wronki", "Pniewy", "Wieleń", "Obrzycko", "Szamotuły"],

  about: blokOMnie("do Sierakowa", "w Sierakowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sierakowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: mówi się „do Sierakowa” i „w Sierakowie”, a przymiotnik od nazwy miasta brzmi „sierakowski”. I praktyczna: Sierakowów w Polsce jest kilka — Sieraków Śląski w lublinieckim, Sieraków w myślenickim i Sierakówko w wielkopolskim — więc przy umawianiu warto powiedzieć „Sieraków w powiecie międzychodzkim”.",
    },
    ...faqWspolne("w Sierakowie"),
    {
      question: "Po trudnym okresie zostało mi z gotowania odgrzewanie. Da się z tego wyjść?",
      answer:
        "Da się, tylko nie od razu do pełnej kuchni. Zamek w Sierakowie jest tu dobrym obrazem: po pożarze w 1817 roku ocalało jedno skrzydło i dostało funkcję lodowni — najmniejszą, jaką dało się mu dać. Dużą funkcję odzyskało po stu siedemdziesięciu ośmiu latach, gdy w czerwcu 1995 roku otwarto tam muzeum. Ocalała część nie była gorsza, bo stał w niej lód. Jedna czynność, która Wam została, jest miarą tego, ile zostało miejsca, a nie tego, co umiecie. Ruch jest mały: dać jednej rzeczy funkcję o stopień większą niż ma teraz. Ale powiem też drugą stronę — im dłużej coś stoi w najmniejszej funkcji, tym trudniej wraca.",
    },
    {
      question: "Czy Thermomix sprawi, że znowu zacznę gotować?",
      answer:
        "Sam z siebie nie. Nie podejmie decyzji za Was i nie mam zamiaru obiecywać inaczej. Robi jedno, konkretne: obniża próg wejścia, bo przy gotowaniu nie trzeba stać i patrzeć — temperaturę i mieszanie prowadzi urządzenie, a danie powstaje w jednym naczyniu, więc zmywania jest mniej. Dla osób, u których przeszkodą było „nie mam siły stać przy garnku”, to zdejmuje dokładnie tę przeszkodę. Dla osób, u których przeszkodą jest brak chęci, nie zdejmie nic — i lepiej wiedzieć to przed zakupem.",
    },
  ],

  geo: { lat: 52.65, lng: 16.1 },
};
