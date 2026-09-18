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
 * MIEJSKA GÓRKA — powiat rawicki, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ MIEJSKA GÓRKA NIE MA.
 * MIASTO: 3 041 mieszkańców (GUS 31.12.2024), 3,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   968,5 os./km², iloraz daje 981,0. ROZBIEŻNOŚĆ
 *   12,5 — NAJWIĘKSZA W TEJ FALI. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠⚠ DRUGIE ŹRÓDŁO PODAJE 3,09 km². PODAJĘ TYLKO
 *   LICZBĘ GUS (3,1).
 *   ⚠⚠⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP] — jedyne
 *   miasto tej fali bez tej danej.
 * CAŁA GMINA: 8 777 osób, 103,5 km², gęstość
 *   85 os./km².
 *   ⚠ [ZW — 8 777 / 103,5 = 84,8 → 85. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ INNE ŹRÓDŁA PODAJĄ 8 731, 8 675 i 9 249 osób.
 *   PODAJĘ WYŁĄCZNIE GUS Z DATĄ.
 * SOŁECTWA: 17 SOŁECTW i 24 MIEJSCOWOŚCI
 *   (GUS Vademecum). PODAJĘ OBIE.
 *   ⚠ Ewidencja podaje 17 obrębów i 26 miejscowości —
 *   ⚠⚠ RÓŻNICY NIE ROBIĘ KĄTEM (Kleczew).
 *   WSIE: Annopol, Antoniewo, Dąbrowa, Dłoń,
 *   Gostkowo, Jagodnia, Karolinki, Kołaczkowice,
 *   Konary, Melanowo, Niemarzyn, Oczkowice, Piaski,
 *   Roszkówko, Roszkowo, Rozstępniewo, Rzyczkowo,
 *   Sobiałkowo, Topólka, Woszczkowo, Zakrzewo,
 *   Zalesie, Zmysłowo, Zwierzęcina.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠⚠⚠ GEO — DWA RÓŻNE PUNKTY, ok. 2,4 km od siebie:
 *   MIASTO: 51,6552 / 16,9560.
 *   centroid GMINY: 51,6705 / 16,9806.
 *   UŻYWAM WYŁĄCZNIE PUNKTU MIASTA.
 *
 * ⚠⚠⚠ ODMIANA — ODMIENIAJĄ SIĘ OBA CZŁONY:
 *   M. MIEJSKA GÓRKA ·
 *   D. MIEJSKIEJ GÓRKI · B. MIEJSKĄ GÓRKĘ ·
 *   Ms. w MIEJSKIEJ GÓRCE (⚠ k→c) ·
 *   N. Miejską Górką.
 *   ⚠ POTWIERDZENIA: „Centrum Miejskiej Górki",
 *   „Miejską Górkę włączono", „w Miejskiej Górce".
 *   ⚠⚠⚠ BŁĄD 1: nieodmienianie PIERWSZEGO członu —
 *   „w Miejska Górce", „do Miejska Górki".
 *   ⚠⚠ BŁĄD 2: „w Miejskiej Górkie" zamiast „Górce".
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — żadna forma nie
 *   wystąpiła w źródłach [NP]. Urząd stosuje wyłącznie
 *   konstrukcje opisowe i ja też.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZW:
 *   — ⚠⚠⚠ „GÓRKA" TO BARDZO POSPOLITY CZŁON NAZW
 *     W POLSCE. OBOWIĄZKOWO PISZĘ „MIEJSKA GÓRKA
 *     W POWIECIE RAWICKIM".
 *   — ⚠⚠ WIEŚ GÓRKA leży w gminie KOBYLIN, o której
 *     piszę w tej samej fali. WSPOMINAM.
 *   — ⚠⚠ MIASTO GÓRA (powiat górowski, dolnośląskie)
 *     to inne miasto — wyszukiwarki je mylą.
 *   — SOBIAŁKOWO — odrębna wieś tej gminy; historyczna
 *     nazwa „Górka Sobiałkowo" rozpadła się na dwie
 *     żywe miejscowości. PODAJĘ TEN FAKT.
 *   — ROSZKOWO / ROSZKÓWKO — para w gminie.
 *   — ZALESIE — nazwa powtarza się też w gminie
 *     Kobylin (Zalesie Małe i Wielkie).
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA O OSADZIE „GÓRKA": 1. połowa
 *     XIII w.
 *   — PRAWA MIEJSKIE: 1428 R. (dwa źródła polskie).
 *     ⚠⚠⚠ ŹRÓDŁA PODAJĄ TEŻ 1284 (jako hipotezę),
 *     1422 i „przed 1406". FIGURA „data przyjęta,
 *     nie znaleziona" ZAJĘTA (Krobia). PODAJĘ 1428
 *     I JEDNYM ZDANIEM ZAZNACZAM, ŻE ŹRÓDŁA SIĘ
 *     RÓŻNIĄ. NIC WIĘCEJ.
 *   — WIATRAK KOŹLAK: typ z XVI w., ZREKONSTRUOWANY
 *     W 1976 R. PODAJĘ.
 *   — 1844: PIEC DO WYPALANIA CEGŁY. PODAJĘ.
 *   ⚠⚠⚠ BANKU LUDOWEGO Z 1871 R. NIE WYMIENIAM —
 *     nazwa instytucji finansowej.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠⚠⚠ WĄTKU OKUPACYJNEGO NIE DOTYKAM W OGÓLE.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — CZTERY NAROŻA, SZEŚĆ ULIC:
 *   CYTAT ZE STRONY URZĘDU: „Centrum Miejskiej Górki
 *   stanowi czworoboczny rynek, w wylotami sześciu
 *   ulic z naroży".
 *   CZWOROBOK MA CZTERY NAROŻA. WYLOTÓW JEST SZEŚĆ.
 *   Klasyczny rynek lokacyjny ma po dwie ulice
 *   na naroże (osiem) albo po jednej (cztery).
 *   SZEŚĆ OZNACZA UKŁAD NIEPEŁNY: dwa naroża po dwie
 *   ulice, dwa po jednej.
 *   ⚠⚠ LICZBY „1,5 ULICY NA NAROŻE" NIE PODAJĘ JAKO
 *   WYNIKU DZIELENIA — to liczba, która nie opisuje
 *   żadnego naroża. MOGĘ POWIEDZIEĆ, ŻE ŚREDNIA
 *   NIE OPISUJE TU NICZEGO, ⚠⚠⚠ ALE OSTROŻNIE:
 *   figura „średnia opisuje ciąg, którego nie było"
 *   ZAJĘTA (Oborniki). LEPIEJ NIE LICZYĆ WCALE.
 *   ⚠⚠⚠ CYTAT ZAWIERA LITERÓWKĘ („w wylotami") —
 *   NIE CYTUJĘ GO DOSŁOWNIE, streszczam.
 *
 * KĄT: CZTERY NAROŻA, SZEŚĆ ULIC
 * — o tym, że nie wszystko da się podzielić równo
 * i że wymuszanie symetrii kosztuje więcej, niż daje.
 * Kąt z Miejskiej Górki: z czterech naroży
 * czworobocznego rynku wychodzi sześć ulic.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że rynek jest czworoboczny, a wylotów ulic z jego
 *   naroży jest sześć,
 * — że przy czterech narożach oznacza to układ
 *   niesymetryczny: dwa naroża po dwie ulice, dwa
 *   po jednej. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: obowiązków nie da
 *   się podzielić po połowie, bo nie składają się
 *   z równych części,
 * — ⚠⚠ ŻE PRÓBA PODZIAŁU „PÓŁ NA PÓŁ" KOŃCZY SIĘ
 *   LICZENIEM I ŻALEM, bo zawsze któraś połowa okazuje
 *   się cięższa,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: dzielcie CAŁOŚCIAMI, nie
 *   połówkami — ktoś bierze zakupy w całości, ktoś
 *   obiady w całości, ktoś zmywanie w całości,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: podział całościami
 *   bywa niesprawiedliwy i trzeba go co jakiś czas
 *   przestawiać. Ale niesprawiedliwy podział, o którym
 *   się mówi, jest lepszy od sprawiedliwego, którego
 *   nie da się wykonać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie dzieli
 *   obowiązków. Zmniejsza jedną całość — gotowanie —
 *   i przez to zmienia to, co jest do podziału.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GRANICY, KTÓREJ NIE USTALONO PRZEZ
 *   PÓŁ WIEKU — kąt zajęty (Okonek). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE:
 *   tam granicy NIE BYŁO WCALE; tu granica jest,
 *   tylko NIE DA SIĘ JEJ POPROWADZIĆ RÓWNO.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ GŁOS —
 *   kąt zajęty (Gołańcz). Tam chodziło o liczbę
 *   decydentów; tu o kształt podziału pracy.
 *   ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO ŚREDNIEJ, KTÓRA OPISUJE CIĄG, KTÓREGO
 *   NIE BYŁO — kąt zajęty (Oborniki). DLATEGO NIE
 *   LICZĘ ULIC NA NAROŻE.
 * — ⚠⚠⚠ ZERO DATY PRZYJĘTEJ, NIE ZNALEZIONEJ — kąt
 *   zajęty (Krobia). DLATEGO ROZBIEŻNOŚCI DAT
 *   LOKACYJNYCH NIE ROZWIJAM.
 * — ⚠⚠ ZERO ZMIANY KSZTAŁTU W POŁOWIE WYSOKOŚCI —
 *   kąt zajęty (Ostrzeszów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM, MAREK I INSTYTUCJI
 *   FINANSOWYCH.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO PRZYPISYWANIA RÓL PŁCIOWYCH
 *   I ŻADNEGO ROZSTRZYGANIA, KTO W DOMU MA CO ROBIĆ.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, OKUPACJI I PRZESIEDLEŃ ·
 *   ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO ·
 *   ZERO HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW ·
 *   ZERO BEZROBOCIA · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE LICZĘ ulic na naroże.
 * — NIE ROZSTRZYGAM daty praw miejskich.
 * — NIE PODAJĘ przymiotnika ani nazwy mieszkańca.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PODAJĘ największej wsi.
 * — NIE UŻYWAM centroidu gminy jako punktu miasta.
 * — NIE PODAJĘ powierzchni 3,09 km².
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Miejska Górka leży w powiecie rawickim i liczy
 *   3 041 mieszkańców (GUS, 31.12.2024) na 3,1 km²;
 *   cała gmina miejsko-wiejska to 8 777 osób
 *   na 103,5 km², czyli 85 osób na kilometr
 *   kwadratowy, i obejmuje 17 sołectw oraz 24
 *   miejscowości,
 * — centrum miasta stanowi czworoboczny rynek,
 *   z którego naroży wychodzi sześć ulic,
 * — pierwsza wzmianka o osadzie Górka pochodzi
 *   z pierwszej połowy XIII w., a prawa miejskie
 *   podawane są najczęściej pod rokiem 1428, choć
 *   źródła podają też inne daty,
 * — dawna nazwa Górka Sobiałkowo rozpadła się na dwie
 *   dzisiejsze miejscowości: miasto Miejska Górka
 *   i wieś Sobiałkowo,
 * — wiatrak koźlak reprezentuje typ z XVI w.,
 *   a zrekonstruowano go w 1976 r.; w 1844 r. powstał
 *   tu piec do wypalania cegły,
 * — w gminie leżą m.in. Dłoń, Sobiałkowo, Konary,
 *   Oczkowice, Kołaczkowice, Roszkowo, Roszkówko,
 *   Zalesie i Karolinki.
 */
export const MIEJSKA_GORKA: CityContent = {
  slug: "miejska-gorka",
  h1: "Thermomix Miejska Górka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Miejska Górka — cena i prezentacja",
  seoDescription:
    "Thermomix w Miejskiej Górce w powiecie rawickim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Miejska Górka — prezentacja u Ciebie",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Miejskiej Górce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Miejskiej Górki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich siedemnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Miejska Górka"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Cztery naroża rynku, sześć wylotów ulic.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Miejskiej Górce – jak wygląda prezentacja?",
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
      id: "cztery-naroza",
      heading: "Cztery naroża, sześć ulic",
      paragraphs: [
        "Centrum Miejskiej Górki stanowi czworoboczny rynek — tak opisuje go strona urzędu — a z jego naroży wychodzi sześć ulic.",
        "Czworobok ma cztery naroża. Ulic jest sześć. W klasycznym rynku lokacyjnym z każdego naroża wychodzą albo dwie ulice, albo jedna, więc razem osiem albo cztery. Sześć oznacza układ niepełny: dwa naroża obsłużone podwójnie, dwa pojedynczo. Nie da się tego rozłożyć równo i nikt nigdy nie próbował.",
        "Piszę o tym, bo w domach próbujemy tego bez przerwy — i to jest chyba najczęstsze źródło kuchennych pretensji, jakie znam.",
        "„Podzielmy się po połowie.” Brzmi uczciwie i jest niewykonalne, bo praca w kuchni nie składa się z równych części. Zakupy trwają godzinę raz w tygodniu, obiad dwadzieścia minut codziennie, zmywanie dziesięć minut trzy razy dziennie, a wymyślanie, co jeść, nie trwa mierzalnie wcale i męczy najbardziej. Tego się nie przetnie na pół.",
        "I wtedy zaczyna się liczenie. Kto ile razy. Kto wczoraj. Kto tylko odgrzał. Liczenie zawsze kończy się tak samo: obie strony mają rację i obie mają żal.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o granicy, której przez pół wieku nikt nie wyznaczył. Tu jest inny problem — granica jest, tylko nie da się jej poprowadzić równo. I jeszcze jedno rozróżnienie: pisałam też o tym, ilu ma być decydentów przy jednej decyzji; tu chodzi nie o decydowanie, ale o kształt samego podziału pracy.",
        "Ruch jest jeden i polega na zmianie jednostki. Dzielcie całościami, nie połówkami. Ktoś bierze zakupy — całe, z listą i noszeniem. Ktoś obiady. Ktoś zmywanie i porządek po. Całość ma tę zaletę, że widać, kiedy ktoś jej nie zrobił, a przy połówkach nie widać nic.",
        "Uczciwie o drugiej stronie, bo podział całościami bywa niesprawiedliwy. Ktoś dostanie kawałek cięższy i po pół roku będzie to czuł, więc trzeba go co jakiś czas przestawiać — najlepiej zanim ktoś się odezwie, a nie po. Ale niesprawiedliwy podział, o którym się rozmawia, jest i tak lepszy od sprawiedliwego, którego nie da się wykonać.",
        "I uczciwie o sprzęcie. Thermomix niczego nie dzieli i nie rozstrzygnie żadnego domowego sporu. Zmniejsza jedną z tych całości — gotowanie — bo nie trzeba przy nim stać, a danie powstaje w jednym naczyniu. To zmienia rozmiar kawałka do podziału, a nie sam podział.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Miejskiej Górce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, która część kuchennej roboty najbardziej Was męczy. Rzadko jest to samo gotowanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Miejskiej Górce"),
    sekcjaRaty("w Miejskiej Górce"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Miejskiej Górki",
      paragraphs: [
        "Miejska Górka leży w powiecie rawickim i liczy 3 041 mieszkańców (GUS, 31.12.2024) na 3,1 kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo rozbieżność między liczbą ze źródła a ilorazem jest tu największa w okolicy i bierze się z zaokrąglenia powierzchni. Cała gmina miejsko-wiejska to 8 777 osób na 103,5 kilometra kwadratowego, czyli osiemdziesiąt pięć osób na kilometr — i ta gęstość się domyka. Gmina obejmuje siedemnaście sołectw i dwadzieścia cztery miejscowości. Pierwsza wzmianka o osadzie Górka pochodzi z pierwszej połowy trzynastego wieku, a prawa miejskie podawane są najczęściej pod rokiem 1428, choć źródła różnią się i nie rozstrzygam między nimi. Dawna nazwa Górka Sobiałkowo rozpadła się z czasem na dwie dzisiejsze miejscowości: miasto i wieś Sobiałkowo. Tutejszy wiatrak koźlak reprezentuje typ z szesnastego wieku, a zrekonstruowano go w 1976 roku; w 1844 powstał w mieście piec do wypalania cegły.",
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

  districtsHeading: "Do których części Miejskiej Górki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedemnastu sołectw w gminie: Dłoni, Sobiałkowa, Konar, Oczkowic, Kołaczkowic, Roszkowa, Roszkówka, Zalesia, Karolinek, Niemarzyna, Gostkowa, Dąbrowy, Piasków, Topólki i pozostałych. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: odmieniają się oba członki nazwy — „do Miejskiej Górki” i „w Miejskiej Górce”, nigdy „w Miejska Górce”; w miejscowniku „k” przechodzi w „c”. Przymiotnika od nazwy świadomie nie używam, bo nie znalazłam go w żadnym źródle. I praktyczna: „Górka” to bardzo pospolity człon nazw w Polsce, a wieś o tej nazwie leży choćby w sąsiedniej gminie Kobylin — przy umawianiu warto powiedzieć „Miejska Górka w powiecie rawickim”.",
  ],
  districts: [],

  nearbyHeading: "Poza Miejską Górkę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Rawicza, Jutrosina, Bojanowa, Kobylina, Ponieca i Krobi — wszędzie bezpłatnie, tak samo jak w samej Miejskiej Górce.",
  ],
  nearbyTowns: ["Rawicz", "Jutrosin", "Bojanowo", "Kobylin", "Poniec", "Krobia"],

  about: blokOMnie("do Miejskiej Górki", "w Miejskiej Górce i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Miejskiej Górki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedemnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: odmieniają się oba członki nazwy — poprawnie jest „do Miejskiej Górki” i „w Miejskiej Górce”, a nie „w Miejska Górce” ani „w Miejskiej Górkie”. Przymiotnika od nazwy nie używam, bo nie udało mi się go znaleźć w żadnym źródle. I praktyczna: „Górka” to bardzo pospolity człon nazw, a wieś Górka leży w sąsiedniej gminie Kobylin — warto więc mówić „Miejska Górka w powiecie rawickim”.",
    },
    ...faqWspolne("w Miejskiej Górce"),
    {
      question: "Jak sprawiedliwie podzielić obowiązki w kuchni?",
      answer:
        "Całościami, nie połówkami — i Miejska Górka podpowiada dlaczego. Centrum miasta stanowi czworoboczny rynek, ale ulic wychodzi z jego naroży sześć: przy czterech narożach oznacza to, że dwa są obsłużone podwójnie, a dwa pojedynczo. Tego układu nie da się rozłożyć równo. Praca w kuchni wygląda tak samo: zakupy to godzina raz w tygodniu, obiad dwadzieścia minut codziennie, zmywanie po dziesięć minut trzy razy dziennie, a wymyślanie, co jeść, nie trwa mierzalnie wcale i męczy najbardziej. Podział „po połowie” kończy się liczeniem i żalem po obu stronach. Lepiej: ktoś bierze całe zakupy, ktoś całe obiady, ktoś zmywanie — i co jakiś czas przestawiacie to, zanim ktoś się odezwie.",
    },
    {
      question: "Czy Thermomix zdejmie ze mnie część obowiązków?",
      answer:
        "Jedną z nich i tylko w części — wolę to powiedzieć wprost. Zmniejsza gotowanie: nie trzeba stać przy garnku i pilnować, bo temperaturę i mieszanie prowadzi samo urządzenie, a danie powstaje w jednym naczyniu, więc i zmywania jest mniej. Nie dotyka natomiast zakupów, planowania ani decydowania, co jeść — a u wielu osób to właśnie te części męczą najbardziej. Dlatego przy umawianiu pytam, która część roboty jest u Was najcięższa.",
    },
  ],

  geo: { lat: 51.6552, lng: 16.956 },
};
