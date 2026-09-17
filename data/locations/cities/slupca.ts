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
 * SŁUPCA — powiat słupecki (siedziba),
 * woj. wielkopolskie. ⚠⚠⚠ GMINA MIEJSKA — miasto jest
 * osobną gminą.
 * MIASTO: 12 855 mieszkańców (GUS 31.12.2024), 10,3 km²,
 *   gęstość 1 248,1 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia powierzchni do 10,2996].
 *   PODAJĘ.
 * ⚠⚠⚠ ODRĘBNA GMINA WIEJSKA SŁUPCA — 9 952 osoby,
 *   144,8 km². TA SAMA NAZWA, TEN SAM POWIAT, TA SAMA
 *   SIEDZIBA, DWA ODRĘBNE TERYT-Y. MIASTO DO NIEJ
 *   NIE NALEŻY.
 *   ⚠⚠⚠ GĘSTOŚCI GMINY WIEJSKIEJ NIE PODAJĘ — nie
 *   domyka się (68 w źródle, 68,73 z dzielenia; poprawne
 *   zaokrąglenie to 69).
 *   ⚠⚠⚠ NIGDY „gmina Słupca liczy 9 952 mieszkańców"
 *   bez słowa WIEJSKA.
 *   MIEJSCOWOŚCI GMINY WIEJSKIEJ: około sześćdziesięciu
 *   [SP — odczytano 57 z deklarowanych 60]. PISZĘ
 *   „około sześćdziesięciu".
 * WYSOKOŚĆ: 92–96 m n.p.m. — CAŁE MIASTO MIEŚCI SIĘ
 *   W CZTERECH METRACH.
 * ⚠ GEO: 52,2873 / 17,8721. Rzeka MESZNA; Jezioro
 *   Słupeckie (powierzchni nie ustalono).
 *   ⚠ MESZNA to także nazwa jednej z miejscowości gminy
 *     wiejskiej. PODAJĘ TO W SEKCJI DZIELNIC.
 *
 * ⚠⚠ ODMIANA:
 *   D. do SŁUPCY · Ms. w SŁUPCY · N. Słupcą.
 *   ⚠⚠⚠ BŁĘDY: „w Słupcu", „do Słupca".
 *   ⚠⚠⚠ PRZYMIOTNIK: SŁUPECKI — NIGDY „słupski"
 *   (to Słupsk). Powiat słupecki.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZW: SŁUPSK (przym. słupski) ·
 *   NOWA SŁUPIA (świętokrzyskie) · wsie SŁUPIA.
 *   ROZGRANICZAM W FAQ.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1282 r.
 *   — LOKACJA: 15 listopada 1290 r., za zgodą Przemysła
 *     II. PONOWNA LOKACJA: 1296 r.
 *     ⚠⚠⚠ WZORCÓW PRAWNYCH NIE PODAJĘ — trzy źródła
 *     przypisują tym dwóm aktom trzy różne systemy
 *     i żadne dwa się nie zgadzają. PODAJĘ SAME DATY.
 *   — PRZYWILEJ MENNICY: 11 listopada 1314 r.
 *   — SIEDZIBA POWIATU: 1867 r.
 *   — Utraty praw nie potwierdzono.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — METR OBWODU NA MIESZKAŃCA:
 *   — OBWAROWANIA WOKÓŁ MIASTA: budowane 1375–1382,
 *     długość ok. 1100 m, objęły ok. 9 ha,
 *   — LUDNOŚĆ W CZASACH LOKACJI: ok. 1000 osób.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1100 m ÷ 1000 osób =
 *   1,1 M NA OSOBĘ. To jest cały kąt.
 *   ⚠⚠⚠ OPISUJĘ TO WYŁĄCZNIE JAKO DŁUGOŚĆ DO
 *   ZBUDOWANIA I UTRZYMANIA — ANI SŁOWA O FUNKCJI
 *   OBRONNEJ, OBLĘŻENIACH CZY WOJNIE. WĄTEK MILITARNY
 *   WYKLUCZONY BEZWZGLĘDNIE.
 *   ⚠⚠ LUDNOŚĆ Z CZASÓW LOKACJI (1290) I MURY
 *   (1375–82) TO RÓŻNE DATY — PISZĘ TO WPROST
 *   I TRAKTUJĘ PROPORCJĘ JAKO PRZYBLIŻENIE, NIE POMIAR.
 *   ⚠⚠ GĘSTOŚCI WEWNĄTRZ MURÓW NIE PODAJĘ — to byłoby
 *   mieszanie miar; poza tym porównanie do dziś nie jest
 *   kątem.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — cztery przejścia w obwarowaniach: Toruńskie
 *   i Pyzdrskie były bramami, Poznańskie i Konińskie
 *   tylko furtami.
 *   ⚠⚠⚠ TEGO NIE ROBIĘ KĄTEM — figura „trzy bramy, dwa
 *   przedmieścia" zajęta (Radków). PODAJĘ JAKO GOŁY
 *   FAKT W BLOKU O MIEŚCIE, BEZ MORAŁU.
 * — grodzisko na wyspie Jeziora Słupeckiego, okres
 *   halsztacki 750–400 p.n.e.
 *   ⚠⚠ TEGO NIE ROBIĘ KĄTEM — figura „najstarsze leży
 *   na obrzeżu" zajęta (Kępno, ta sama fala).
 * — ⚠⚠ MINIATURY MECHANIZMU ZEGAROWEGO NIE UŻYWAM —
 *   jedno źródło, a figura „opis zamiast rzeczy" zajęta
 *   (Złotów).
 * — ⚠ ODLEGŁOŚCI [SP, w linii prostej] — NIE PODAJĘ.
 *
 * KĄT: ILE UTRZYMANIA NA OSOBĘ
 * — o tym, że w kuchni liczy się nie ilość sprzętu,
 * a ilość sprzętu podzielona przez liczbę osób, które go
 * ogarniają. Kąt ze Słupcy: tysiąc sto metrów obwarowań
 * przy około tysiącu mieszkańców.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że obwarowania z lat 1375–1382 miały około tysiąca
 *   stu metrów i objęły około dziewięciu hektarów,
 *   a miasto w czasach lokacji liczyło około tysiąca
 *   osób,
 * — ŻE TO WYCHODZI POCO NAD METR NA OSOBĘ. TO JEST
 *   RDZEŃ,
 * — ⚠⚠ ŻE TO PRZYBLIŻENIE, BO LUDNOŚĆ JEST Z INNEJ
 *   DATY NIŻ MURY — piszę to wprost,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: nie liczy się, ile masz
 *   garnków, tylko ile ich masz na jedną osobę, która
 *   je myje i odkłada,
 * — ⚠⚠ ŻE DZIELNIK POTRAFI SIĘ ZMIENIĆ BEZ UPRZEDZENIA:
 *   dzieci wyjeżdżają, ktoś zaczyna pracować na zmiany,
 *   a kuchnia zostaje ta sama — i obciążenie na osobę
 *   rośnie, choć nic nie dokupiono,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: policz rzeczy w kuchni, które
 *   wymagają Twojej uwagi, i podziel przez liczbę osób,
 *   które w niej PRACUJĄ — nie przez liczbę osób, które
 *   w niej jedzą. To jest cała różnica,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem obwód musi zostać
 *   duży — przy święta, przy wnukach, przy gościach.
 *   Wtedy to jest świadomy koszt, a nie przeoczenie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie DOKŁADA się do
 *   obwodu — to kolejna rzecz do umycia i odstawienia.
 *   MÓWIĘ WPROST, że opłaca się tylko wtedy, gdy zabiera
 *   z obwodu więcej, niż dokłada.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam chodziło o to, że nie da
 *   się używać wszystkiego naraz; tu ilość może być
 *   w porządku, a zmienia się DZIELNIK — liczba osób,
 *   które to utrzymują. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PODZIEL PRZEZ TEMPO — kąt zajęty (Stronie
 *   Śląskie).
 * — ⚠⚠⚠ ZERO TRZECH BRAM, DWÓCH PRZEDMIEŚĆ — kąt zajęty
 *   (Radków).
 * — ⚠⚠ ZERO DROŻSZE TAM, GDZIE KRAWĘDŹ — kąt zajęty
 *   (Świerzawa).
 * — ⚠⚠ ZERO MAŁY DYSTANS, DUŻY KOSZT — kąt zajęty
 *   (Pleszew).
 * — ⚠⚠ ZERO ŚREDNIEJ JAKO PUŁAPKI — kąt zajęty
 *   (Oborniki). ⚠ TU DZIELENIE JEST NARZĘDZIEM
 *   ŚWIADOMYM, NIE PUŁAPKĄ. PILNOWAĆ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA PODZIAŁU OBOWIĄZKÓW.
 *   Opisuję arytmetykę, nie wskazuję winnych.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO, OBRONNEGO I OBLĘŻEŃ · ZERO POŻARÓW
 *   JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „gmina Słupca" bez słowa WIEJSKA, gdy
 *   chodzi o gminę obwarzankową.
 * — NIE PODAJĘ gęstości gminy wiejskiej.
 * — NIE PODAJĘ dokładnej liczby miejscowości.
 * — NIE PODAJĘ wzorców prawnych obu lokacji.
 * — NIE TWIERDZĘ, że proporcja 1,1 m na osobę to pomiar
 *   — to przybliżenie z dwóch różnych dat.
 * — NIE PODAJĘ powierzchni Jeziora Słupeckiego.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Słupca jest siedzibą powiatu słupeckiego i osobną
 *   gminą miejską; miasto liczy 12 855 mieszkańców
 *   (GUS, 31.12.2024) na 10,3 km², czyli 1 248,1 osoby
 *   na kilometr kwadratowy, i mieści się w przedziale
 *   wysokości 92–96 m n.p.m.,
 * — otaczająca je gmina wiejska Słupca jest odrębną
 *   jednostką o tej samej nazwie i tej samej siedzibie:
 *   9 952 osoby na 144,8 km² i około sześćdziesięciu
 *   miejscowości,
 * — pierwsza wzmianka pochodzi z 1282 r., lokacja
 *   nastąpiła 15 listopada 1290 r. za zgodą Przemysła
 *   II, ponowna w 1296 r., przywilej mennicy miasto
 *   otrzymało 11 listopada 1314 r., a siedzibą powiatu
 *   zostało w 1867 r.,
 * — obwarowania wznoszono w latach 1375–1382; miały
 *   około 1100 m i objęły około 9 ha, a w czasach
 *   lokacji miasto liczyło około tysiąca mieszkańców,
 * — w obwarowaniach były cztery przejścia: Toruńskie
 *   i Pyzdrskie jako bramy, Poznańskie i Konińskie jako
 *   furty,
 * — na wyspie Jeziora Słupeckiego znaleziono ślady grodu
 *   z okresu halsztackiego (750–400 p.n.e.).
 */
export const SLUPCA: CityContent = {
  slug: "slupca",
  h1: "Thermomix Słupca – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Słupca — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Słupcy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Słupca — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Słupcy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Słupcy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Słupca"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Tysiąc sto metrów obwodu. Tysiąc osób.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Słupcy – jak wygląda prezentacja?",
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
      id: "ile-na-osobe",
      heading: "Ile utrzymania na osobę",
      paragraphs: [
        "Obwarowania Słupcy wznoszono w latach 1375–1382. Miały około tysiąca stu metrów i objęły około dziewięciu hektarów. W czasach lokacji miasto liczyło około tysiąca mieszkańców.",
        "Tysiąc sto metrów na tysiąc osób. Ponad metr na osobę.",
        "To jest przybliżenie, nie pomiar — ludność jest z innej daty niż mury i piszę to uczciwie. Ale sama proporcja jest czymś, o czym w kuchni prawie nikt nie myśli, choć rozstrzyga o tym, czy w danym domu da się wytrzymać.",
        "Bo nie liczy się, ile masz garnków. Liczy się, ile masz garnków na jedną osobę, która je myje, wyciera i odkłada na miejsce.",
        "I tu jest rzecz najważniejsza: dzielnik potrafi się zmienić bez uprzedzenia, a obwód zostaje. Dzieci wyjeżdżają na studia i kuchnia urządzona dla pięciu osób obsługuje dwie — z tą samą liczbą garnków, tym samym metrażem blatu i tą samą szafką pełną form do ciasta. Ktoś zaczyna pracować na zmiany i nagle to samo wszystko spada na jedną parę rąk zamiast dwóch. Nic nie dokupiono, a obciążenie na osobę się podwoiło.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej, że narzędzi bywa więcej niż rąk. Tam chodziło o to, że nie da się używać wszystkiego naraz. Tu ilość może być całkiem sensowna — zmienia się dzielnik, czyli liczba osób, które to utrzymują.",
        "Ruch jest jeden i trzeba go zrobić uczciwie. Policz rzeczy w kuchni, które wymagają Twojej uwagi, i podziel przez liczbę osób, które w tej kuchni pracują. Nie przez liczbę osób, które w niej jedzą — to jest cała różnica i to ona zwykle boli.",
        "Uczciwie o drugiej stronie: czasem obwód musi zostać duży. Przy świętach, przy wnukach, przy rodzinie, która przyjeżdża dwa razy w roku i wtedy trzeba nakryć dla dwanaściorga. Wtedy ten duży obwód jest świadomym kosztem, a nie przeoczeniem, i ma pełne prawo zostać.",
        "I uczciwie o sprzęcie. Thermomix dokłada się do obwodu: to kolejna rzecz do umycia, odstawienia i pilnowania. Opłaca się tylko wtedy, gdy zabiera z obwodu więcej, niż dokłada — a zabiera wtedy, gdy zastępuje kilka naczyń i kilka czynności naraz. Jeśli miałby po prostu dojść do tego, co już jest, będzie kolejnym metrem muru do utrzymania.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Słupcy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile osób realnie pracuje w Waszej kuchni. Nie ile w niej je — ile pracuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Słupcy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Słupcy",
      paragraphs: [
        "Słupca jest siedzibą powiatu słupeckiego i osobną gminą miejską. Miasto liczy 12 855 mieszkańców (GUS, 31.12.2024) na 10,3 kilometra kwadratowego, czyli tysiąc dwieście czterdzieści osiem osób na kilometr, leży nad Mesznią i całe mieści się w przedziale od dziewięćdziesięciu dwóch do dziewięćdziesięciu sześciu metrów nad poziomem morza — cztery metry różnicy na dziesięć kilometrów kwadratowych. Otaczająca je gmina wiejska Słupca to osobna jednostka o tej samej nazwie i tej samej siedzibie: 9 952 osoby na 144,8 kilometra i około sześćdziesięciu miejscowości. Pierwsza wzmianka pochodzi z 1282 roku, lokacja nastąpiła 15 listopada 1290 za zgodą Przemysła II, ponowna w 1296. Przywilej mennicy miasto otrzymało 11 listopada 1314, a siedzibą powiatu zostało w 1867. W obwarowaniach z lat 1375–1382 były cztery przejścia: Toruńskie i Pyzdrskie jako bramy, Poznańskie i Konińskie jako furty. Na wyspie Jeziora Słupeckiego znaleziono ślady grodu z okresu halsztackiego, czyli z lat 750–400 przed naszą erą.",
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

  districtsHeading: "Do których części Słupcy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do centrum, na osiedla i nad jezioro — bez dopłaty.",
    "Dojeżdżam też do wsi otaczającej gminy wiejskiej: Cienina, Kotuni, Koszut, Kowalewa, Młodojewa, Wierzbna, Wilcznej, Drążnej, Kamienia, Mesznej i pozostałych. Przy umawianiu warto podać pełną nazwę — Meszna to zarówno rzeka Słupcy, jak i jedna z tych wsi, a Cieninów i Kowalewów jest w gminie po kilka.",
  ],
  districts: [],

  nearbyHeading: "Poza Słupcę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Zagórowa, Goliny, Pyzdr, Wrześni i Konina — wszędzie bezpłatnie, tak samo jak w samej Słupcy.",
  ],
  nearbyTowns: ["Zagórów", "Golina", "Pyzdry", "Września", "Konin"],

  about: blokOMnie("do Słupcy", "w Słupcy i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Słupcy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w otaczającej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi: mówi się „do Słupcy” i „w Słupcy”, a przymiotnik brzmi „słupecki” — nie „słupski”, bo to od Słupska. I warto podać nazwę wsi, bo miasto Słupca i gmina wiejska Słupca to dwie osobne jednostki o tej samej nazwie.",
    },
    ...faqWspolne("w Słupcy"),
    {
      question: "Dzieci wyjechały, gotuję dla dwóch osób, a w kuchni jest jeszcze więcej roboty niż kiedyś. Dlaczego?",
      answer:
        "Bo obwód został, a dzielnik się zmienił. Obwarowania Słupcy miały około tysiąca stu metrów przy około tysiącu mieszkańców — ponad metr na osobę, i każdy z tych metrów ktoś musiał utrzymać. W kuchni jest tak samo: liczy się nie liczba garnków, tylko liczba garnków na jedną osobę, która je myje i odkłada. Kiedy z domu ubywa ludzi, a wyposażenie zostaje to samo, obciążenie na osobę rośnie, choć nic nie dokupiono. Warto wtedy świadomie skrócić obwód.",
    },
    {
      question: "Czy Thermomix to nie będzie kolejna rzecz do mycia?",
      answer:
        "Będzie — i to jest uczciwa odpowiedź. Trzeba go umyć po każdym daniu i trzeba mu dać miejsce na blacie. Opłaca się wtedy i tylko wtedy, gdy zabiera z kuchni więcej pracy, niż do niej dokłada: zastępuje kilka naczyń, garnek, tarkę i miskę, i zdejmuje stanie nad garnkiem. Jeśli po prostu dołożyłby się do tego, co już jest, byłby kolejnym metrem do utrzymania. Na prezentacji staram się to policzyć na Waszym zwykłym obiedzie.",
    },
  ],

  geo: { lat: 52.2873, lng: 17.8721 },
};
