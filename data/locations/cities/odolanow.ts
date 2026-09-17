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
 * ODOLANÓW — powiat ostrowski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ ODOLANÓW NIE MA.
 * MIASTO: 4 925 mieszkańców (GUS 31.12.2024), 4,8 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 034,7 os./km², iloraz daje 1 026,0. ROZBIEŻNOŚĆ
 *   8,7. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚĆ: 116 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 14 462 osoby, 136,1 km², gęstość
 *   106 os./km².
 *   ⚠ [ZW — 14 462 / 136,1 = 106,3 → 106. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA — LICZBA POTWIERDZONA DWUKROTNIE:
 *   16 SOŁECTW i 29 MIEJSCOWOŚCI (GUS Vademecum
 *   + pełny wykaz na stronie gminy).
 *   PODAJĘ LICZBĘ 16 — to jedyna gmina tej fali,
 *   w której liczba sołectw zgadza się w dwóch
 *   niezależnych źródłach I MAM PEŁNĄ LISTĘ.
 *   LISTA: Baby, Boników, Garki, Gliśnica, Gorzyce
 *   Małe, Huta, Kaczory, Nabyszyce, Nadstawki,
 *   Raczyce, Świeca I, Świeca II, Tarchały Małe,
 *   Tarchały Wielkie, Uciechów, Wierzbno.
 *   ⚠⚠ ŚWIECA I i ŚWIECA II TO DWA ODRĘBNE SOŁECTWA —
 *   NIE SCALAM ICH W JEDNO. WSPOMINAM W CZĘŚCI
 *   O DOJAZDACH.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 51,5743 / 17,6739.
 *
 * ⚠⚠ ODMIANA:
 *   D. do ODOLANOWA (NIE „Odolanówa" — „ó" wypada) ·
 *   Ms. w ODOLANOWIE · C. Odolanowowi ·
 *   N. Odolanowem.
 *   Przymiotnik: ODOLANOWSKI.
 *   ⚠⚠⚠ BŁĄD 1: dopełniacz „Odolanówa" z zachowanym
 *   „ó". WSPOMINAM.
 *   ⚠⚠ BŁĄD 2: celownik „Odolanowu" zamiast
 *   „Odolanowowi".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ KOLIZJE — ADMINISTRACYJNA, NIE NAZWOWA:
 *   — Innych Odolanowów w Polsce nie ustalono [NP].
 *   — ⚠⚠⚠ POWIAT ODOLANOWSKI (1793–1932) TO NIE
 *     DZISIEJSZY POWIAT. Odolanów leży dziś
 *     w POWIECIE OSTROWSKIM. NIE PRZENOSZĘ NAZWY
 *     HISTORYCZNEJ DO ZDAŃ O DZISIEJSZEJ
 *     ADMINISTRACJI.
 *     ⚠⚠ Faktyczna siedziba tego powiatu mieściła się
 *     w Ostrowie. ⚠⚠⚠ TEGO NIE ROBIĘ KĄTEM — figura
 *     „siedziba nie tam, gdzie nazwa" byłaby zbyt
 *     bliska Nowym Skalmierzycom z tej samej fali.
 *     POMIJAM.
 *   — Odolanów i NOWE SKALMIERZYCE leżą w tym samym
 *     powiecie ostrowskim. ⚠ PILNUJĘ, ŻEBY NIE
 *     POMIESZAĆ LICZB: Odolanów 136,1 km²/14 462,
 *     Nowe Skalmierzyce 125,4 km²/16 006.
 *   — Sołectwa ŚWIECA I i ŚWIECA II.
 *
 * ⚠⚠⚠ DATY USTROJOWE — CZTERY WERSJE W OBIEGU:
 *   — ok. 1373 r. — „Bartosz Wezenborg prawdopodobnie
 *     w 1373 roku samowolnie lokował miasto",
 *   — „przed rokiem 1400" — ponowna lokacja,
 *   — 1400 r. — „prawa miejskie otrzymał w 1400 r.
 *     z nadania króla Władysława Jagiełły",
 *   — 1403 r. — „jest już odnotowane jako miasto
 *     królewskie".
 *   ⚠⚠⚠ RDZEŃ: W 2003 R. WZNIESIONO „BRAMĘ
 *   600-LECIA" — czyli liczono wiek miasta OD 1403 R.,
 *   od najpóźniejszej z czterech dat.
 *   ⚠⚠⚠ NIE TWIERDZĘ, ŻE TO BŁĄD URZĘDU ANI ŻE KTOŚ
 *   COŚ ZANIEDBAŁ. Twierdzę tylko, że wybrano datę
 *   NAJPÓŹNIEJSZĄ — pierwszą pewną wzmiankę w źródle
 *   pisanym — i że gdyby liczyć od lokacji z 1373 r.,
 *   sześćsetlecie wypadłoby CO NAJMNIEJ 30 LAT
 *   WCZEŚNIEJ.
 *   ⚠⚠ RÓŻNICY 1403 − 1373 = 30 LAT PODAJĘ JAKO
 *   „co najmniej trzydzieści", bo data 1373 jest
 *   podana z zastrzeżeniem „prawdopodobnie".
 *   — Utraty praw nie ustalono [NP].
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — „na początku XIV wieku liczyło ok. 20 domów,
 *   otoczonych murami",
 * — ludność: 148 (1721) → prawie 800 (1789) →
 *   ok. 1 000 (pocz. XIX w.) → blisko 2 500 (1914) →
 *   ok. 3 500 (lata 80. XX w.) → 5 tys. (pocz. XXI w.).
 *   ⚠⚠ KROTNOŚCI I TEMPA NIE LICZĘ — figura „podziel
 *   przez tempo" zajęta (Stronie Śląskie).
 * — ratusz z 1898 r.,
 * — linia kolejowa w 1909 r.
 * ⚠⚠⚠ DANYCH O POWIERZCHNI POWIATU (890 km² → 480 km²
 *   w 1887 r.) NIE UŻYWAM — dotyczą jednostki
 *   historycznej, a figura utraty części obszaru
 *   ociera się o wątki wykluczone.
 *
 * KĄT: ROCZNICĘ LICZONO OD PÓŹNIEJSZEJ DATY
 * — o tym, że początek datujemy od momentu, w którym
 * ktoś to zapisał, a nie od momentu, w którym się
 * zaczęło. Kąt z Odolanowa: „Brama 600-lecia" z 2003 r.
 * liczy wiek od 1403 r., choć miasto lokowano
 * prawdopodobnie już około 1373.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w obiegu są cztery daty: ok. 1373, przed 1400,
 *   1400 i 1403,
 * — że „Bramę 600-lecia" wzniesiono w 2003 r., licząc
 *   od 1403 — najpóźniejszej z nich. TO JEST RDZEŃ,
 * — ⚠⚠ że to nie jest zarzut: 1403 to pierwsza pewna
 *   wzmianka, a od pewnego się liczy bezpieczniej,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO, TYLKO PRZECIW NAM:
 *   liczymy „odkąd gotuję" od kursu, od książki,
 *   od zakupu sprzętu — a nie od pierwszej zupy
 *   zrobionej samodzielnie,
 * — ⚠⚠ ŻE PRZEZ TO MAMY SIĘ ZA POCZĄTKUJĄCYCH DŁUŻEJ,
 *   NIŻ TO PRAWDA,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: policz od pierwszej rzeczy,
 *   którą zrobiłaś sama i którą ktoś zjadł,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: liczenie od pewnej daty
 *   ma sens i nie każę go porzucać. Przy ocenie
 *   własnego doświadczenia jest jednak zwyczajnie
 *   krzywdzące,
 * — ⚠ UCZCIWIE O SPRZĘCIE: zakup urządzenia nie jest
 *   początkiem gotowania i nie sprzedaję go jako
 *   początku. Jest zmianą narzędzia w czymś, co już
 *   trwa.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LEGENDY, KTÓRA LICZY WIĘCEJ NIŻ REJESTR
 *   — kąt zajęty (Śmigiel, poprzednia fala).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam pamięć ZAWYŻAŁA liczbę; tu dokument
 *   ZANIŻA wiek. Przeciwne kierunki tego samego
 *   błędu. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZERWY, KTÓRA NIE KASUJE POCZĄTKU —
 *   kąt zajęty (Trzcianka). Tu nie ma przerwy, jest
 *   wybór daty.
 * — ⚠⚠⚠ ZERO AKTU, KTÓRY DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń, TA SAMA FALA). ⚠⚠⚠ MUSZĘ UWAŻAĆ: oba
 *   miasta mają konflikt dat lokacyjnych. Tam rzecz
 *   w tym, że dokument opisuje INNE MIEJSCE; tu w tym,
 *   że z kilku dat TEGO SAMEGO miejsca wybrano
 *   najpóźniejszą. NIE MIESZAM.
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły).
 * — ⚠⚠ ZERO SIEDZIBY NIE TAM, GDZIE NAZWA — będzie
 *   w Nowych Skalmierzycach (ta sama fala). DLATEGO
 *   POMIJAM WĄTEK SIEDZIBY POWIATU ODOLANOWSKIEGO
 *   W OSTROWIE.
 * — ⚠⚠ ZERO NAJWYŻSZE NIE ZNACZY WYSOKIE — kąt zajęty
 *   (Chodzież).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEJ KRYTYKI SAMORZĄDU ANI SUGESTII, ŻE
 *   ROCZNICĘ OBCHODZONO ŹLE.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   ROZBIOROWEGO I POWSTAŃCZEGO · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   MURÓW JAKO OBRONY (podaję tylko jako datowany
 *   element zabudowy) · ZERO ALKOHOLU · ZERO POŻARÓW ·
 *   ZERO BEZROBOCIA · ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE WYBIERAM jednej daty praw miejskich.
 * — NIE TWIERDZĘ, że data 1403 jest błędna.
 * — NIE PODAJĘ daty 1373 bez zastrzeżenia
 *   „prawdopodobnie".
 * — NIE PODAJĘ danych powiatu odolanowskiego.
 * — NIE LICZĘ krotności ani tempa wzrostu ludności.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Odolanów leży w powiecie ostrowskim, liczy 4 925
 *   mieszkańców (GUS, 31.12.2024) na 4,8 km² i leży
 *   116 m n.p.m.; cała gmina miejsko-wiejska to 14 462
 *   osoby na 136,1 km², czyli 106 osób na kilometr
 *   kwadratowy, i obejmuje 16 sołectw oraz 29
 *   miejscowości,
 * — w obiegu są cztery daty początku miasta: lokacja
 *   prawdopodobnie około 1373 r., ponowna lokacja
 *   przed 1400 r., nadanie praw miejskich w 1400 r.
 *   przez Władysława Jagiełłę i pierwsza wzmianka
 *   jako o mieście królewskim w 1403 r.,
 * — w 2003 r. wzniesiono w Odolanowie „Bramę
 *   600-lecia", licząc wiek miasta od 1403 r.,
 * — na początku XIV w. miasto liczyło około dwudziestu
 *   domów w obrębie murów,
 * — ludność: 148 osób w 1721 r., prawie 800 w 1789 r.,
 *   około tysiąca na początku XIX w., blisko 2 500
 *   w 1914 r., około 3 500 w latach 80. XX w.
 *   i około pięciu tysięcy na początku XXI w.,
 * — ratusz pochodzi z 1898 r., a linię kolejową miasto
 *   miało w 1909 r.,
 * — sołectwa gminy to Baby, Boników, Garki, Gliśnica,
 *   Gorzyce Małe, Huta, Kaczory, Nabyszyce, Nadstawki,
 *   Raczyce, Świeca I, Świeca II, Tarchały Małe,
 *   Tarchały Wielkie, Uciechów i Wierzbno.
 */
export const ODOLANOW: CityContent = {
  slug: "odolanow",
  h1: "Thermomix Odolanów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Odolanów — cena i prezentacja",
  seoDescription:
    "Thermomix w Odolanowie w powiecie ostrowskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Odolanów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Odolanowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Odolanowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich szesnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Odolanów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sześćsetlecie policzone od najpóźniejszej z czterech dat.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Odolanowie – jak wygląda prezentacja?",
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
      id: "rocznica-od-pozniejszej-daty",
      heading: "Rocznicę liczono od późniejszej daty",
      paragraphs: [
        "O początku Odolanowa krążą cztery daty. Miasto lokowano prawdopodobnie około 1373 roku. Potem lokowano je ponownie, przed rokiem 1400. Jedno opracowanie podaje, że prawa miejskie nadał w 1400 roku Władysław Jagiełło. I wreszcie w 1403 roku Odolanów jest już odnotowany jako miasto królewskie.",
        "W 2003 roku wzniesiono w mieście „Bramę 600-lecia”. Policzono więc od 1403 — od najpóźniejszej z czterech dat. Gdyby liczyć od lokacji około 1373 roku, sześćsetlecie wypadłoby co najmniej trzydzieści lat wcześniej.",
        "I zaraz dodam, żeby nie było wątpliwości: to nie jest zarzut. 1403 to pierwsza pewna wzmianka w źródle pisanym, a od pewnego liczy się bezpieczniej niż od „prawdopodobnie”. Każdy, kto kiedyś ustalał rocznicę, wybrałby tak samo.",
        "Piszę o tym, bo w kuchni robimy dokładnie to samo — tylko że przeciw sobie.",
        "„Gotuję od dwóch lat, odkąd kupiłam sprzęt.” „Zaczęłam po kursie.” „Na poważnie od tej książki.” I znowu liczymy od pierwszej pewnej daty — od czegoś, co da się wskazać, co ma paragon, dyplom albo okładkę. A nie od pierwszej zupy, którą ktoś zrobił sam i którą ktoś zjadł. Ta była wcześniej, czasem o dwadzieścia lat.",
        "Skutek jest jeden i dość ponury: mamy się za początkujących znacznie dłużej, niż to prawda. A z tego wynika wszystko inne — że „nie znam się”, że lepiej nie próbować przy gościach, że najpierw trzeba się douczyć.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, w którym legenda podawała znacznie większą liczbę niż rejestry, i o tym, że pamięć zawyża. Tu jest odwrotny kierunek tego samego błędu — to dokument zaniża, bo notuje dopiero od momentu, w którym coś dało się zapisać.",
        "Ruch jest jeden i można go zrobić w głowie, teraz. Policz od pierwszej rzeczy, którą zrobiłaś sama i którą ktoś zjadł. Nie od kursu, nie od sprzętu, nie od momentu, w którym uznałaś, że już Ci wychodzi. Ta liczba bywa zaskakująca.",
        "Uczciwie o drugiej stronie, bo liczenie od pewnej daty nie jest głupie. W historii, w księgowości i w dokumentach jest po prostu rozsądne — lepiej podać datę, której się nie podważy. Przy ocenie własnego doświadczenia jest jednak zwyczajnie krzywdzące, bo wycina z rachunku wszystko, co robiłaś, zanim ktoś to nazwał.",
        "I uczciwie o sprzęcie, bo tu mam interes i nie chcę go ukrywać. Zakup urządzenia nie jest początkiem gotowania i nie będę go tak sprzedawać. Jest zmianą narzędzia w czymś, co u Was już trwa — czasem od bardzo dawna. Kto kupuje Thermomix jako datę początkową, kupuje z niewłaściwym oczekiwaniem.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Odolanowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co umiecie zrobić z zamkniętymi oczami. Od tego zaczynamy — a nie od tego, czego jeszcze nie próbowaliście.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Odolanowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Odolanowa",
      paragraphs: [
        "Odolanów leży w powiecie ostrowskim, liczy 4 925 mieszkańców (GUS, 31.12.2024) na 4,8 kilometra kwadratowego i leży sto szesnaście metrów nad poziomem morza; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 14 462 osoby na 136,1 kilometra kwadratowego, czyli sto sześć osób na kilometr, i obejmuje szesnaście sołectw oraz dwadzieścia dziewięć miejscowości — to jedyna gmina w tej okolicy, w której liczba sołectw zgadza się w dwóch niezależnych źródłach i mam pełny wykaz. Dla skali historycznej: na początku czternastego wieku było tu około dwudziestu domów w obrębie murów, w 1721 roku sto czterdzieści osiem osób, w 1789 prawie osiemset, w 1914 blisko dwa i pół tysiąca, w latach osiemdziesiątych około trzech i pół tysiąca. Ratusz pochodzi z 1898 roku, a linię kolejową miasto miało w 1909.",
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

  districtsHeading: "Do których części Odolanowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich szesnastu sołectw w gminie. Nazywają się: Baby, Boników, Garki, Gliśnica, Gorzyce Małe, Huta, Kaczory, Nabyszyce, Nadstawki, Raczyce, Świeca I, Świeca II, Tarchały Małe, Tarchały Wielkie, Uciechów i Wierzbno. Wszędzie bez dopłaty.",
    "Dwie uwagi. Praktyczna: Świeca I i Świeca II to dwa odrębne sołectwa, więc przy adresie warto podać numer. I językowa: „ó” wypada z odmiany, czyli mówi się „do Odolanowa”, a nie „do Odolanówa”; przymiotnik brzmi „odolanowski”, ale powiat odolanowski to jednostka historyczna — Odolanów leży dziś w powiecie ostrowskim.",
  ],
  districts: [],

  nearbyHeading: "Poza Odolanów też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Ostrowa Wielkopolskiego, Nowych Skalmierzyc, Sulmierzyc, Ostrzeszowa, Mikstatu i Raszkowa — wszędzie bezpłatnie, tak samo jak w samym Odolanowie.",
  ],
  nearbyTowns: ["Ostrów Wielkopolski", "Nowe Skalmierzyce", "Sulmierzyce", "Ostrzeszów", "Mikstat", "Raszków"],

  about: blokOMnie("do Odolanowa", "w Odolanowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Odolanowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: „ó” wypada z odmiany, więc poprawnie jest „do Odolanowa”, a nie „do Odolanówa”; celownik brzmi „Odolanowowi”. I praktyczna: w gminie są dwa odrębne sołectwa o nazwie Świeca — Świeca I i Świeca II — więc przy adresie warto podać numer.",
    },
    ...faqWspolne("w Odolanowie"),
    {
      question: "Czuję się w kuchni początkująca, choć gotuję od lat. Skąd to się bierze?",
      answer:
        "Często z tego, od jakiej daty liczycie. Odolanów jest tu dobrym obrazem: w 2003 roku wzniesiono tam „Bramę 600-lecia”, licząc wiek miasta od 1403 roku — czyli od najpóźniejszej z czterech krążących dat, bo lokowano je prawdopodobnie już około 1373. To rozsądny wybór, bo 1403 to pierwsza pewna wzmianka. W kuchni robimy tak samo, tylko przeciw sobie: liczymy „odkąd gotuję” od kursu, od książki albo od zakupu sprzętu, bo to daty, które da się wskazać. A pierwsza zupa, którą zrobiłyście same i którą ktoś zjadł, była wcześniej — czasem o dwadzieścia lat. Policzcie od niej. Ta liczba zwykle zaskakuje.",
    },
    {
      question: "Czy kupno Thermomixa to dobry moment, żeby zacząć gotować?",
      answer:
        "To dobry moment, żeby zmienić narzędzie w czymś, co już robicie — i tak wolę o tym mówić, choć mam interes w sprzedaży. Urządzenie nie jest datą początkową i nie da poczucia „teraz umiem”; to poczucie i tak bierze się z tego, ile rzeczy zrobiliście wcześniej. Thermomix zdejmuje konkretną uciążliwość: konieczność stania przy garnku, bo temperaturę i mieszanie prowadzi sam. Jeśli ktoś liczy, że wraz z zakupem zacznie się nowe życie kuchenne, to kupuje z niewłaściwym oczekiwaniem i lepiej powiedzieć to przed, nie po.",
    },
  ],

  geo: { lat: 51.5743, lng: 17.6739 },
};
