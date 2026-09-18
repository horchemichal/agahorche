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
 * CZEMPIŃ — powiat kościański, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ CZEMPIŃ NIE MA.
 * MIASTO: 5 070 mieszkańców (GUS 31.12.2024), 3,3 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 527,1 os./km², iloraz daje 1 536,4. ROZBIEŻNOŚĆ
 *   9,3. Przy 3,3 km² zaokrąglenie powierzchni waży
 *   dziesiątki osób na kilometr. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚĆ: 71 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 11 416 osób, 142,2 km², gęstość
 *   80 os./km².
 *   ⚠ [ZW — 11 416 / 142,2 = 80,3 → 80. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA I WSIE — TRZY RÓŻNE LICZBY:
 *   urząd podaje 22 SOŁECTWA, polskawliczbach 33
 *   MIEJSCOWOŚCI, en.wikipedia 30 MIEJSCOWOŚCI poza
 *   miastem.
 *   ⚠⚠⚠ ŻADNEJ Z TYCH LICZB NIE PODAJĘ. Piszę
 *   „wszystkie wsie w gminie".
 *   NAZWY ZE ŹRÓDEŁ: Betkowo, Bieczyny, Borowo,
 *   Donatowo, Gorzyce, Piechanin, Piotrkowo Pierwsze,
 *   Srocko Wielkie, Zadory.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 52,1426 / 16,7592.
 *
 * ⚠⚠⚠ ODMIANA — MIĘKKIE -Ń:
 *   D. do CZEMPINIA · Ms. w CZEMPINIU ·
 *   N. Czempiniem · C. Czempiniowi.
 *   Przymiotnik: CZEMPIŃSKI.
 *   ⚠⚠⚠ BŁĄD: traktowanie -ń jako twardego -n —
 *   „do Czempina", „w Czempinie". WSPOMINAM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — Innych Czempiniów w Polsce nie ustalono [NP].
 *   — ⚠⚠⚠ PIECHANIN — DZIŚ ODRĘBNA MIEJSCOWOŚĆ
 *     W GMINIE CZEMPIŃ, a historycznie poprzednik
 *     miasta. FAKTY O PRAWACH MIEJSKICH Z 1401 R.
 *     DOTYCZĄ PIECHANINA, NIE CZEMPINIA. TO RDZEŃ
 *     KĄTA — I JEDNOCZEŚNIE NAJWIĘKSZA PUŁAPKA
 *     ŹRÓDŁOWA.
 *     ⚠ Źródła podają trzy warianty nazwy: Piechynin
 *     Wielki, Piechanin, Piechlin. UŻYWAM FORMY
 *     „PIECHANIN" — tej, która figuruje na dzisiejszym
 *     wykazie miejscowości gminy.
 *
 * ⚠⚠⚠ DATY USTROJOWE — TRZY ŹRÓDŁA, TRZY ODPOWIEDZI:
 *   — urząd: pierwsze wzmianki o mieście 1399 r.;
 *     „Piechynin Wielki, czyli Piechanin albo Piechlin,
 *     prawa miejskie otrzymał w 1401 roku";
 *     „w 1561 roku starosta wałecki ostatecznie
 *     potwierdził prawa miejskie Czempinia".
 *   — drugie źródło: „prawa miejskie Czempiń otrzymał
 *     jeszcze przed 1399 rokiem".
 *   — trzecie źródło: „pierwsze informacje pochodzą
 *     z 1399 roku, kiedy nadano prawa miejskie".
 *   ROZSTĘP SKRAJNYCH DAT: 1399 — 1561 = 162 LATA.
 *   ⚠⚠⚠ NIE WYBIERAM MIĘDZY NIMI. PODAJĘ WSZYSTKIE
 *   TRZY I MÓWIĘ, ŻE SIĘ NIE ZGADZAJĄ.
 *   — PRZYWILEJ TARGOWY: 10 stycznia 1562 r., wydany
 *     w Łomży — targi w każdy czwartek i 4 jarmarki
 *     rocznie. PODAJĘ.
 *   — SPIS PRUSKI PO II ROZBIORZE: miasto liczyło
 *     „jedynie 608 mieszkańców". PODAJĘ LICZBĘ,
 *     ⚠⚠ BEZ KONTEKSTU ROZBIOROWEGO — piszę „w spisie
 *     z końca XVIII wieku".
 *   — KOLEJ: linia przez Czempiń 1856 r., odnoga
 *     do Śremu 1885 r. PODAJĘ.
 *   ⚠⚠⚠ PAŁACU NIE UŻYWAM — figura „nowe na starym
 *     nośnym" zajęta (Czarnków), a pałac stanął
 *     na fundamentach wcześniejszej budowli.
 *     POMIJAM CAŁKOWICIE.
 *   ⚠⚠ LICZBY 4 OBIEKTÓW ZABYTKOWYCH ZE STRONY URZĘDU
 *     NIE PODAJĘ — to wykaz wybranych, nie rejestr.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — AKT DOTYCZY SĄSIADA:
 *   Data najczęściej przywoływana przy Czempiniu —
 *   1401 r. — DOTYCZY PIECHANINA, sąsiedniej
 *   miejscowości, która dziś jest zwykłą wsią w gminie
 *   Czempiń.
 *   Prawa miejskie samego Czempinia „ostatecznie
 *   potwierdzono" według strony urzędu dopiero
 *   w 1561 r.
 *   CZYLI: dokument, na który się powołujemy, opisuje
 *   INNE MIEJSCE — a to, które nosi dziś nazwę, ma
 *   własną, znacznie późniejszą datę.
 *   ⚠⚠⚠ NIE TWIERDZĘ, ŻE CZEMPIŃ NIE BYŁ MIASTEM
 *   PRZED 1561 R. — źródła mówią o wzmiankach z 1399
 *   i o prawach „przed 1399". Twierdzę tylko, że
 *   DATY 1401 NIE WOLNO PRZYPISYWAĆ CZEMPINIOWI.
 *
 * KĄT: AKT DOTYCZY SĄSIADA
 * — o tym, że zasada, na którą się powołujemy, bywa
 * przyniesiona z innego domu. Kąt z Czempinia: prawa
 * miejskie z 1401 r. dostał Piechanin, dziś wieś
 * w tej samej gminie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że data 1401 dotyczy Piechanina, nie Czempinia,
 *   a Piechanin jest dziś wsią w gminie Czempiń,
 * — że prawa samego Czempinia potwierdzono według
 *   urzędu w 1561 r., a inne źródła mówią o 1399
 *   i „przed 1399" — 162 lata rozstępu. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: „u nas zawsze się
 *   tak robiło" bywa zasadą przyniesioną z innego domu
 *   — od teściowej, od sąsiadki, z pracy,
 * — ⚠⚠ ŻE NIKT TEJ ZASADY NIGDY NIE SPRAWDZIŁ, bo
 *   brzmiała jak własna,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przy następnym „zawsze"
 *   spytaj, czyje to „zawsze" i od kiedy,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część przyniesionych
 *   zasad jest dobra i warto je zatrzymać. Chodzi
 *   o to, żeby były wybrane, nie odziedziczone
 *   bez czytania,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie rozstrzygnie,
 *   czyja zasada jest słuszna. Za to ułatwia sprawdzenie
 *   drugiego sposobu, bo próba jest tańsza w wysiłku.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZEPISU NAPISANEGO DLA INNEJ KUCHNI —
 *   kąt zajęty (Wolin). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło
 *   o technikę, która nie przenosi się między
 *   warunkami; TU o zasadę, która jest CUDZA
 *   I NIESPRAWDZONA, choć brzmi jak własna.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły).
 * — ⚠⚠⚠ ZERO LEGENDY, KTÓRA LICZY WIĘCEJ NIŻ REJESTR
 *   — kąt zajęty (Śmigiel, poprzednia fala).
 * — ⚠⚠⚠ ZERO LISTY KANONICZNEJ, KTÓRA NIE JEST SPISEM
 *   — kąt zajęty (Mosina).
 * — ⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód).
 * — ⚠⚠ ZERO WZIĘTEGO Z CZĘŚCI, A CAŁOŚĆ ZOSTAŁA —
 *   kąt zajęty (Krzyż Wielkopolski).
 * — ⚠⚠ ZERO NOWEGO NA STARYM NOŚNYM — kąt zajęty
 *   (Czarnków). DLATEGO POMIJAM PAŁAC.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OBWINIANIA TEŚCIOWYCH, MATEK
 *   ANI SĄSIADEK. Sekcja ma dawać prawo do sprawdzenia
 *   zasady, nie do pretensji.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO
 *   WĄTKU ROZBIOROWEGO I POWSTAŃCZEGO · ZERO WĄTKU
 *   WYZNANIOWEGO (kaplicy i kościoła NIE WYMIENIAM) ·
 *   ZERO WĄTKU MILITARNEGO · ZERO ALKOHOLU · ZERO
 *   POŻARÓW · ZERO BEZROBOCIA · ZERO HERBU · ZERO
 *   UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ liczby wsi ani sołectw.
 * — NIE WYBIERAM między 1399, „przed 1399" i 1561.
 * — NIE PRZYPISUJĘ Czempiniowi daty 1401.
 * — NIE TWIERDZĘ, że Czempiń nie był miastem przed
 *   1561 r.
 * — NIE PODAJĘ pałacu ani obiektów sakralnych.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Czempiń leży w powiecie kościańskim, liczy 5 070
 *   mieszkańców (GUS, 31.12.2024) na 3,3 km² i leży
 *   71 m n.p.m.; cała gmina miejsko-wiejska to 11 416
 *   osób na 142,2 km², czyli 80 osób na kilometr
 *   kwadratowy,
 * — według strony urzędu prawa miejskie w 1401 r.
 *   otrzymał Piechanin, dziś odrębna miejscowość
 *   w gminie Czempiń, a prawa miejskie samego
 *   Czempinia „ostatecznie potwierdził" w 1561 r.
 *   starosta wałecki,
 * — inne źródła podają, że Czempiń miał prawa miejskie
 *   już przed 1399 r. albo że nadano je w 1399 r.,
 * — przywilej targowy wydano 10 stycznia 1562 r.
 *   w Łomży: targi w każdy czwartek i cztery jarmarki
 *   rocznie,
 * — w spisie z końca XVIII w. miasto liczyło 608
 *   mieszkańców,
 * — linię kolejową przez Czempiń otwarto w 1856 r.,
 *   a odnogę do Śremu w 1885 r.,
 * — w gminie leżą m.in. Borowo, Bieczyny, Donatowo,
 *   Gorzyce, Srocko Wielkie, Piotrkowo Pierwsze,
 *   Betkowo, Zadory i Piechanin.
 */
export const CZEMPIN: CityContent = {
  slug: "czempin",
  h1: "Thermomix Czempiń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czempiń — cena i prezentacja",
  seoDescription:
    "Thermomix w Czempiniu w powiecie kościańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czempiń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czempiniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Czempinia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Czempiń"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prawa z 1401 roku dostał sąsiad. Dziś jest wsią.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czempiniu – jak wygląda prezentacja?",
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
      id: "akt-dotyczy-sasiada",
      heading: "Akt dotyczy sąsiada",
      paragraphs: [
        "Przy Czempiniu najczęściej przywołuje się rok 1401 i prawa miejskie. Tylko że według strony samego urzędu prawa miejskie w 1401 roku dostał nie Czempiń, a Piechanin — sąsiednia miejscowość, dziś zwykła wieś w gminie Czempiń.",
        "Prawa miejskie samego Czempinia ta sama strona opisuje inaczej: „ostatecznie potwierdził” je w 1561 roku starosta wałecki. Inne opracowania twierdzą z kolei, że Czempiń miał je już przed 1399 rokiem albo że nadano je w 1399. Między skrajnymi datami jest sto sześćdziesiąt dwa lata i nie zamierzam wybierać za historyków.",
        "Jedno jest pewne i tylko to mnie tu interesuje: dokument, na który wszyscy się powołują, opisuje inne miejsce.",
        "Piszę o tym, bo w kuchni mam z tym do czynienia codziennie i to jest jedna z najbardziej uwalniających rzeczy, jakie da się zauważyć.",
        "„U nas zawsze się tak robiło.” Zupy nie miksuje się blenderem. Ciasto musi odpoczywać. Nie gotuje się na zapas. Obiad musi być z dwóch dań. Mięsa nie łączy się z owocami. Brzmi jak zasada domu — a bywa zasadą przyniesioną z innego domu. Od teściowej, od mamy koleżanki, z gastronomii, w której ktoś kiedyś pracował, z czasów, gdy nie było zamrażalnika.",
        "Nikt jej nigdy nie sprawdził, bo nie brzmiała jak cudza. Brzmiała jak własna.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o technikach, które nie przenoszą się między kuchniami, bo warunki są inne. Tu chodzi o coś innego — nie o to, że zasada nie działa, ale o to, że jest cudza i nigdy nie została przeczytana.",
        "Ruch jest jeden i mieści się w jednym pytaniu. Przy następnym „zawsze” spytaj: czyje to „zawsze” i od kiedy. Czasem odpowiedź brzmi „mojej babci, bo nie miała miksera”. Czasem „nie wiem”. Obie odpowiedzi są dobre, bo obie zdejmują z zasady status prawa.",
        "Uczciwie o drugiej stronie, bo nie chcę, żeby to zabrzmiało jak wezwanie do zerwania z rodzinną kuchnią. Część przyniesionych zasad jest po prostu dobra — bywa, że mądrzejsza od wszystkiego, co przeczytacie w internecie. Chodzi tylko o to, żeby były wybrane, a nie odziedziczone bez czytania. I żeby nie było w tym pretensji do nikogo: ludzie przekazują to, co im przekazano, i robią to w dobrej wierze.",
        "I uczciwie o sprzęcie. Thermomix nie rozstrzygnie, czyja zasada jest słuszna, i nie ma takiego zadania. Robi jedno: sprawia, że sprawdzenie drugiego sposobu kosztuje mniej wysiłku — bo nie trzeba stać przy garnku, a danie powstaje w jednym naczyniu. Kiedy próba jest tania, łatwiej sprawdzić, czy zasada trzyma.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czempiniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego u Was „się nie robi” w kuchni. Nie po to, żeby to podważać — po to, żeby nie ugotować czegoś, co u Was nie przejdzie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czempiniu"),
    sekcjaRaty("w Czempiniu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Czempinia",
      paragraphs: [
        "Czempiń leży w powiecie kościańskim, liczy 5 070 mieszkańców (GUS, 31.12.2024) na 3,3 kilometra kwadratowego i leży siedemdziesiąt jeden metrów nad poziomem morza; gęstości dla samego miasta nie podaję, bo przy tak małej powierzchni zaokrąglenie do jednej dziesiątej kilometra waży dziesiątki osób i liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 11 416 osób na 142,2 kilometra kwadratowego, czyli osiemdziesiąt osób na kilometr — i ta gęstość się domyka. Przywilej targowy wydano 10 stycznia 1562 roku w Łomży: targi w każdy czwartek i cztery jarmarki rocznie. W spisie z końca osiemnastego wieku miasto liczyło sześciuset ośmiu mieszkańców. Linię kolejową przez Czempiń otwarto w 1856 roku, a odnogę do Śremu w 1885. W gminie leżą między innymi Borowo, Bieczyny, Donatowo, Gorzyce, Srocko Wielkie, Piotrkowo Pierwsze i Piechanin.",
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

  districtsHeading: "Do których części Czempinia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Borowa, Bieczyn, Donatowa, Gorzyc, Srocka Wielkiego, Piotrkowa Pierwszego, Betkowa, Zadorów i Piechanina. Wszędzie bez dopłaty.",
    "Jedna uwaga językowa: nazwa kończy się miękkim „ń”, więc mówi się „do Czempinia” i „w Czempiniu”, a nie „do Czempina” ani „w Czempinie”. Przymiotnik brzmi „czempiński”.",
  ],
  districts: [],

  nearbyHeading: "Poza Czempiń też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Kościana, Śmigla, Mosiny, Stęszewa, Puszczykowa i Poznania — wszędzie bezpłatnie, tak samo jak w samym Czempiniu.",
  ],
  nearbyTowns: ["Kościan", "Śmigiel", "Mosina", "Stęszew", "Puszczykowo", "Poznań"],

  about: blokOMnie("do Czempinia", "w Czempiniu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czempinia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga językowa: nazwa kończy się miękkim „ń”, więc poprawnie jest „do Czempinia” i „w Czempiniu”, a nie „do Czempina” ani „w Czempinie”. Przymiotnik od nazwy miasta brzmi „czempiński”.",
    },
    ...faqWspolne("w Czempiniu"),
    {
      question: "W mojej rodzinie jest dużo kuchennych zasad, których nikt nie tłumaczy. Trzeba się ich trzymać?",
      answer:
        "Warto najpierw sprawdzić, czyje one są. Czempiń jest tu dobrym przykładem: najczęściej przywoływana przy tym mieście data, rok 1401 i prawa miejskie, według strony samego urzędu dotyczy Piechanina — sąsiedniej miejscowości, dziś zwykłej wsi w gminie. Prawa samego Czempinia ta sama strona opisuje jako „ostatecznie potwierdzone” w 1561 roku, a inne źródła mówią o 1399 albo „przed 1399”. Dokument, na który wszyscy się powołują, opisuje inne miejsce. Z zasadami kuchennymi bywa identycznie: „u nas zawsze się tak robiło” to często zasada przyniesiona z innego domu, której nikt nie sprawdził, bo nie brzmiała jak cudza. Przy następnym „zawsze” wystarczy spytać: czyje to „zawsze” i od kiedy. Część zasad zostanie i dobrze — ale wtedy będą wybrane, nie odziedziczone bez czytania.",
    },
    {
      question: "Czy Thermomix zmusi mnie do zmiany sposobu gotowania?",
      answer:
        "Nie, i nie ma czym zmusić. Nie rozstrzyga, która metoda jest lepsza — robi tylko to, co mu ustawicie. Zmienia jedną rzecz: cenę próby. Skoro nie trzeba stać przy garnku i pilnować, a danie powstaje w jednym naczyniu, sprawdzenie drugiego sposobu kosztuje znacznie mniej wysiłku. Jeśli po próbie okaże się, że stary sposób był lepszy, to też jest wynik i nic się nie stało.",
    },
  ],

  geo: { lat: 52.1426, lng: 16.7592 },
};
