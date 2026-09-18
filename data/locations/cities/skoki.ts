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
 * SKOKI — powiat wągrowiecki, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ SKOKI NIE MA
 *   (GUS Vademecum).
 *   ⚠⚠⚠ UWAGA: TAKI PODZIAŁ MA W TYM POWIECIE
 *   WĄGROWIEC (gmina miejska + osobna gmina wiejska
 *   tej samej nazwy) I BYWA BŁĘDNIE PRZENOSZONY
 *   NA SKOKI. NIE PRZENOSZĘ.
 * MIASTO: 4 799 mieszkańców (GUS 31.12.2024), 11,2 km²,
 *   gęstość 428,5 os./km².
 *   ⚠ [ZW — 4 799 / 11,2 = 428,5. ZGODNOŚĆ CO DO
 *   SETNEJ (0,02). PODAJĘ OBIE LICZBY OBOK SIEBIE.]
 *   ⚠ POWIERZCHNIA POTWIERDZONA DRUGIM ŹRÓDŁEM
 *   (11,2 km²).
 *   ⚠⚠ NAJWIĘKSZE OBSZAROWO MIASTO TEJ FALI.
 *   MOGĘ TO POWIEDZIEĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 *   ⚠ POŁOŻENIE: ok. 40 km na północ od Poznania.
 *   PODAJĘ.
 * CAŁA GMINA: 10 212 osób, 198,5 km², gęstość
 *   51 os./km².
 *   ⚠ [ZW — 10 212 / 198,5 = 51,4 → 51. Różnica 0,45.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 27 SOŁECTW i 36 MIEJSCOWOŚCI
 *   (GUS Vademecum). PODAJĘ TĘ PARĘ Z ADNOTACJĄ
 *   „według GUS".
 *   ⚠⚠ Inne rejestry podają 25 obrębów i 44 albo 57
 *   pozycji — RÓŻNIC NIE ROBIĘ KĄTEM, figura „cztery
 *   rejestry, cztery liczby" należy do Kleczewa
 *   (ta sama fala).
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠⚠ ROZBICIE Z 2006 R.: miasto 3 866, obszar wiejski
 *   4 883 — WIEŚ MIAŁA WTEDY WIĘCEJ MIESZKAŃCÓW
 *   NIŻ MIASTO. PODAJĘ JAKO FAKT HISTORYCZNY.
 *   ⚠⚠⚠ DZISIEJSZEJ RÓŻNICY NIE LICZĘ SAMA —
 *   NIE ODEJMUJĘ MIASTA OD GMINY.
 * ⚠ GEO: 52,6723 / 17,1606.
 *   ⚠ Kontrola drugim źródłem tylko zgrubna
 *   (do minuty łuku) — zgodna w granicach własnej
 *   niepewności.
 * ⚠⚠⚠ PAŁACU NIE WYMIENIAM — informacja o jego
 *   dzisiejszym dysponencie pochodzi z jednego źródła
 *   i nie została potwierdzona [NP].
 * ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM — dotyczy to
 *   również kościoła z 1737 r.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DOWÓD LEŻY W SĄSIEDNIEJ NAZWIE:
 *   SKOKI TO PLURALE TANTUM, a przymiotnik od nazwy
 *   brzmi SKOCKI — nie „skokowy".
 *   I TO NIE JEST TYLKO ZALECENIE SŁOWNIKOWE:
 *   FORMA JEST ZAPISANA W URZĘDOWEJ NAZWIE WSI
 *   W TEJ SAMEJ GMINIE — PAWŁOWO SKOCKIE.
 *   CZYLI: dowód na to, jak brzmi poprawna forma, nie
 *   leży w mieście, o które toczy się spór, ale
 *   w nazwie sąsiedniej wsi, na którą nikt nie patrzył.
 *   ⚠⚠⚠ TO JEDYNY PRZYMIOTNIK W TEJ FALI, KTÓRY MAM
 *   POŚWIADCZONY URZĘDOWO. Golina, Kleczew i Krobia
 *   go nie mają. MOGĘ TO POWIEDZIEĆ.
 *   ⚠⚠ „skokowy" JEST ISTNIEJĄCYM WYRAZEM POSPOLITYM,
 *   więc autokorekta go nie wyłapuje. TO CZYNI BŁĄD
 *   TRWALSZYM. MÓWIĘ O TYM.
 *
 * ⚠⚠ ODMIANA — PLURALE TANTUM:
 *   M. SKOKI · D. SKOKÓW (⚠⚠⚠ nie „Skok", nie „Skoki") ·
 *   Ms. w SKOKACH · N. Skokami · C. Skokom.
 *   ⚠ POTWIERDZENIA: „informacje o Skokach",
 *   nazwa urzędowa „Gmina Skoki".
 *   Przymiotnik: SKOCKI — poświadczony urzędowo
 *   w nazwie wsi PAWŁOWO SKOCKIE.
 *   ⚠⚠⚠ BŁĄD 1: liczba pojedyncza — „do Skoki",
 *   „w Skoki", „ze Skokiej".
 *   ⚠⚠⚠ BŁĄD 2: przymiotnik „skokowy" albo „skokijski"
 *   zamiast „skocki".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM [NP].
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — SKOKI, woj. LUBUSKIE — wieś w gminie Międzyrzecz,
 *     powiat międzyrzecki, 50 mieszkańców.
 *     ZWERYFIKOWANE. PODAJĘ.
 *   — SKOKI, powiat radzyński (LUBELSKIE) — odrębna
 *     miejscowość. ⚠ SZCZEGÓŁÓW NIE MAM [NP] —
 *     wymieniam tylko powiat i województwo.
 *   — Skoki w kujawsko-pomorskim: NIE ZWERYFIKOWANO
 *     [NP]. NIE TWIERDZĘ.
 *   — SKOKOWA (dolnośląskie) — inna miejscowość
 *     o zbliżonej nazwie.
 *   — ⚠⚠⚠ PUŁAPKA WYSZUKIWARKOWA: „skoki" to wyraz
 *     pospolity. WSPOMINAM.
 *   — W gminie: PAWŁOWO SKOCKIE i SŁAWA WIELKOPOLSKA —
 *     obie mają członki odróżniające. NIE SKRACAM
 *     TYCH NAZW.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — LOKACJA: 1367 R. PODAJĘ.
 *     ⚠ Rok po Kleczewie (1366) i pięć lat po Golinie
 *     (1362) — ⚠⚠ ZESTAWIENIA TRZECH MIAST NIE ROBIĘ
 *     KĄTEM (figura „jedna liczba, dwa różne miasta"
 *     zajęta — Stęszew). MOGĘ WSPOMNIEĆ JEDNYM
 *     ZDANIEM W CZĘŚCI O RODZINIE.
 *   — ⚠⚠⚠ O UTRACIE PRAW MIEJSKICH ŹRÓDŁO MILCZY
 *     („no loss or regain mentioned") — ⚠⚠⚠ TO NIE
 *     JEST DOWÓD, ŻE PRAW NIE UTRACONO. NIE TWIERDZĘ,
 *     że Skoki miały nieprzerwany status miejski.
 *     NIE PISZĘ O TYM WCALE.
 *
 * KĄT: DOWÓD LEŻY W SĄSIEDNIEJ NAZWIE
 * — o tym, że dowód własnej wprawy zwykle leży
 * w rzeczach, których nie uznajemy za dowód. Kąt
 * ze Skoków: spór o to, czy przymiotnik brzmi „skocki"
 * czy „skokowy", rozstrzyga urzędowa nazwa wsi
 * Pawłowo Skockie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Skoki to plurale tantum, a przymiotnik brzmi
 *   „skocki", nie „skokowy",
 * — że dowód nie jest słownikowy, a urzędowy: leży
 *   w nazwie wsi Pawłowo Skockie w tej samej gminie.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ że to jedyny przymiotnik w tej okolicy, który
 *   mam poświadczony urzędowo,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: dowody na to, ile
 *   umiecie, leżą w rzeczach, których nie liczycie
 *   jako dowodów — w tym, o co Was proszą, w tym,
 *   co robicie bez przepisu, w tym, co ktoś zabiera
 *   do domu w słoiku,
 * — ⚠⚠ ŻE SZUKAMY POTWIERDZENIA W NIEWŁAŚCIWYM
 *   MIEJSCU: w kursie, w opinii, w porównaniu
 *   do kogoś,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wypisz trzy rzeczy, o które
 *   ktoś Cię poprosił, żebyś zrobiła. To jest
 *   świadectwo,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: takie dowody nie
 *   zastąpią wiedzy. To, że ktoś prosi o Twoją zupę,
 *   nie znaczy, że umiesz zrobić chleb — i nie ma
 *   w tym nic złego,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie jest
 *   świadectwem umiejętności i nikomu nic o Was nie
 *   mówi. Mówi tylko, że macie urządzenie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZGADZANIA SIĘ CO DO TEGO, CZEGO NIE
 *   WIDAĆ — kąt zajęty (Trzemeszno). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE:
 *   tam chodziło o rzecz niewidoczną, co do której
 *   wszyscy się zgadzają; TU o dowód, który jest
 *   doskonale widoczny, tylko leży nie tam, gdzie się
 *   patrzy. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO AKTU, KTÓRY DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń). ⚠⚠⚠ DRUGI BLISKI SĄSIAD: tam dokument
 *   o sąsiedniej miejscowości był PUŁAPKĄ; tu nazwa
 *   sąsiedniej wsi jest DOWODEM. ROZGRANICZAM DRUGIM
 *   ZDANIEM.
 * — ⚠⚠⚠ ZERO DOKUMENTU, KTÓRY ZOSTAŁ, A RZECZY NIE —
 *   kąt zajęty (Golina, ta sama fala).
 * — ⚠⚠⚠ ZERO OPISANYCH TYLKO NAJWIĘKSZYCH — kąt
 *   zajęty (Wronki).
 * — ⚠⚠ ZERO JEDNEJ LICZBY, DWÓCH RÓŻNYCH MIAST —
 *   kąt zajęty (Stęszew). DLATEGO ZESTAWIENIA LOKACJI
 *   1362/1366/1367 NIE ROZWIJAM.
 * — ⚠⚠ ZERO JEDNEGO MIEJSCA, KTÓRE SKUPIŁO WIĘKSZOŚĆ
 *   JEDNEGO ZAJĘCIA — kąt zajęty (Zduny).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO SCHLEBIANIA. Sekcja ma wskazywać
 *   realne świadectwa, nie zapewniać, że wszystko
 *   jest świetne.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO I OBIEKTÓW SAKRALNYCH · ZERO WĄTKU
 *   MILITARNEGO · ZERO ALKOHOLU · ZERO POŻARÓW ·
 *   ZERO BEZROBOCIA · ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE TWIERDZĘ, że Skoki nigdy nie utraciły praw
 *   miejskich.
 * — NIE PODAJĘ największej wsi.
 * — NIE ODEJMUJĘ ludności miasta od ludności gminy.
 * — NIE PODAJĘ nazwy mieszkańca.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE WYMIENIAM pałacu ani obiektów sakralnych.
 * — NIE TWIERDZĘ, ile miejscowości ma gmina poza
 *   liczbą GUS.
 * — NIE PODAJĘ, gdzie leżą Skoki w kujawsko-pomorskim.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Skoki leżą w powiecie wągrowieckim, około 40 km
 *   na północ od Poznania, liczą 4 799 mieszkańców
 *   (GUS, 31.12.2024) na 11,2 km², czyli 428,5 osoby
 *   na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 10 212 osób na
 *   198,5 km², czyli 51 osób na kilometr kwadratowy,
 *   i obejmuje według GUS 27 sołectw oraz 36
 *   miejscowości,
 * — w rozbiciu z 2006 r. miasto liczyło 3 866
 *   mieszkańców, a obszar wiejski gminy 4 883 — czyli
 *   więcej niż samo miasto,
 * — lokacja miasta przypada na 1367 r.,
 * — nazwa Skoki występuje tylko w liczbie mnogiej,
 *   dopełniacz brzmi „Skoków", miejscownik
 *   „w Skokach", a przymiotnik „skocki" — i ta ostatnia
 *   forma jest zapisana w urzędowej nazwie wsi Pawłowo
 *   Skockie, leżącej w tej samej gminie,
 * — w gminie leży też wieś Sława Wielkopolska,
 * — odrębna wieś Skoki o 50 mieszkańcach leży w gminie
 *   Międzyrzecz w województwie lubuskim, a kolejne
 *   Skoki w powiecie radzyńskim w lubelskim.
 */
export const SKOKI: CityContent = {
  slug: "skoki",
  h1: "Thermomix Skoki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Skoki — cena i prezentacja",
  seoDescription:
    "Thermomix w Skokach w powiecie wągrowieckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skoki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skokach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Skoków z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Skoki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pawłowo Skockie. Dowód leżał we wsi obok.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skokach – jak wygląda prezentacja?",
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
      id: "dowod-w-sasiedniej-nazwie",
      heading: "Dowód leży w sąsiedniej nazwie",
      paragraphs: [
        "Nazwa Skoki występuje tylko w liczbie mnogiej: mówi się „do Skoków” i „w Skokach”. A przymiotnik od niej brzmi „skocki” — nie „skokowy”, choć „skokowy” brzmi naturalniej i żadna autokorekta go nie podkreśli, bo to istniejący wyraz.",
        "I tu jest rzecz, którą lubię najbardziej. Dowód na tę formę nie jest słownikowy, a urzędowy — tylko leży poza samym miastem. W tej samej gminie jest wieś o oficjalnej nazwie Pawłowo Skockie. Sprawa jest rozstrzygnięta na mapie i była rozstrzygnięta od dawna. Przy okazji: to jedyny przymiotnik od nazwy miasta w tej okolicy, który mam poświadczony urzędowo — przy trzech sąsiednich miastach musiałam z niego zrezygnować, bo nie znalazłam potwierdzenia.",
        "Piszę o tym, bo w kuchni wszyscy szukamy potwierdzenia w niewłaściwym miejscu.",
        "„Czy ja w ogóle umiem gotować?” — i zaraz szukamy odpowiedzi w kursie, w opinii internetowej, w porównaniu z kimś, kto robi zdjęcia swoich dań. A dowody leżą obok i nie liczymy ich jako dowodów.",
        "Kto Was prosi, żebyście coś przywieźli na spotkanie rodzinne — i o co konkretnie prosi. Co robicie bez zaglądania do przepisu. Co ktoś zabiera do domu w słoiku. Czego dzieci nie chcą jeść nigdzie indziej. Co potraficie zrobić z tego, co zostało w lodówce, bez planu. Każda z tych rzeczy jest świadectwem i każda jest mocniejsza niż jakikolwiek dyplom, bo wystawili ją ludzie, którzy to jedli.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o rzeczy niewidocznej, co do której wszyscy się zgadzają. Tu jest odwrotnie — ten dowód jest doskonale widoczny, tylko leży nie tam, gdzie się patrzy. I pisałam też o dokumencie, który dotyczył sąsiedniej miejscowości i był pułapką; tu nazwa sąsiedniej wsi jest dowodem, nie pułapką.",
        "Ruch jest jeden i zajmuje minutę. Wypiszcie trzy rzeczy, o które ktoś Was poprosił, żebyście zrobiły. Nie trzy, które umiecie — trzy, o które ktoś poprosił. To jest świadectwo i nikt Wam go nie odbierze.",
        "Uczciwie o drugiej stronie, bo takie dowody mają granice. To, że ktoś prosi o Waszą zupę, nie znaczy, że umiecie upiec chleb — i nie ma w tym nic złego ani wstydliwego. Świadectwo z prośby mówi o tym, co robicie dobrze, a nie o wszystkim, co da się w kuchni zrobić. Kto chce więcej, musi się tego nauczyć normalnie, po kolei.",
        "I uczciwie o sprzęcie, bo tu bywa najwięcej nieporozumień. Thermomix nie jest świadectwem niczego i nie mówi o Was nic — poza tym, że macie urządzenie. Nikt nie zacznie uważać, że lepiej gotujecie, dlatego że stoi na blacie. Zmienia się to, ile trzeba stać przy garnku, a nie to, co ludzie o Waszym gotowaniu myślą.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skokach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o co ludzie Was proszą. To ugotujemy — i tak najlepiej widać, czy urządzenie zdejmuje z Was to, co miało zdjąć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Skokach"),
    sekcjaRaty("w Skokach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Skoków",
      paragraphs: [
        "Skoki leżą w powiecie wągrowieckim, około czterdziestu kilometrów na północ od Poznania, i liczą 4 799 mieszkańców (GUS, 31.12.2024) na 11,2 kilometra kwadratowego, czyli czterystu dwudziestu dziewięciu na kilometr — obie liczby podaję bez zastrzeżeń, bo zgadzają się z ilorazem co do setnej części, a powierzchnia jest potwierdzona drugim źródłem. To największe obszarowo miasto, o jakim pisałam w tej okolicy. Cała gmina miejsko-wiejska to 10 212 osób na 198,5 kilometra kwadratowego, czyli pięćdziesiąt jedna osoba na kilometr, i obejmuje według GUS dwadzieścia siedem sołectw oraz trzydzieści sześć miejscowości. Ciekawe rozbicie z 2006 roku: miasto liczyło wtedy trzy tysiące osiemset sześćdziesiąt sześć osób, a obszar wiejski gminy cztery tysiące osiemset osiemdziesiąt trzy — czyli więcej niż samo miasto. Lokacja przypada na 1367 rok, rok po Kleczewie i pięć lat po Golinie.",
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

  districtsHeading: "Do których części Skoków dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie — GUS podaje dwadzieścia siedem sołectw — w tym do Pawłowa Skockiego i Sławy Wielkopolskiej. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: nazwa występuje tylko w liczbie mnogiej, więc mówi się „do Skoków” i „w Skokach”, a nie „do Skoki”; przymiotnik brzmi „skocki”, nie „skokowy” — i dowodem na to jest urzędowa nazwa wsi Pawłowo Skockie. I praktyczna: Skoki są w Polsce także wsią — w gminie Międzyrzecz w lubuskim i w powiecie radzyńskim w lubelskim — a samo słowo jest wyrazem pospolitym, więc w wyszukiwarce warto dopisać powiat wągrowiecki.",
  ],
  districts: [],

  nearbyHeading: "Poza Skoki też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Wągrowca, Murowanej Gośliny, Rogoźna, Kłecka, Pobiedzisk i Gołańczy — wszędzie bezpłatnie, tak samo jak w samych Skokach.",
  ],
  nearbyTowns: ["Wągrowiec", "Murowana Goślina", "Rogoźno", "Kłecko", "Pobiedziska", "Gołańcz"],

  about: blokOMnie("do Skoków", "w Skokach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Skoków bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie — GUS podaje dwadzieścia siedem sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: nazwa występuje tylko w liczbie mnogiej, więc poprawnie jest „do Skoków” i „w Skokach”, a przymiotnik brzmi „skocki”, nie „skokowy” — dowodem jest urzędowa nazwa wsi Pawłowo Skockie w tej samej gminie. I praktyczna: Skoki to także nazwa wsi w lubuskim i w lubelskim, a przy tym wyraz pospolity, więc przy szukaniu warto dopisać powiat wągrowiecki.",
    },
    ...faqWspolne("w Skokach"),
    {
      question: "Jak sprawdzić, czy naprawdę umiem gotować?",
      answer:
        "Patrząc na to, o co ludzie Was proszą — a nie na kursy i porównania. Skoki są tu ładnym obrazem: spór o to, czy przymiotnik od tej nazwy brzmi „skocki” czy „skokowy”, rozstrzyga nie słownik, a urzędowa nazwa wsi Pawłowo Skockie w tej samej gminie. Dowód był widoczny, tylko leżał nie tam, gdzie wszyscy patrzyli. W kuchni tak samo: świadectwem jest to, o co Was proszą na spotkania rodzinne, co robicie bez zaglądania do przepisu, co ktoś zabiera do domu w słoiku i czego dzieci nie chcą jeść nigdzie indziej. Wypiszcie trzy rzeczy, o które ktoś Was poprosił. Jedno zastrzeżenie: to świadectwo mówi o tym, co robicie dobrze, a nie o wszystkim — prośba o zupę nie oznacza, że umiecie upiec chleb, i nie ma w tym nic wstydliwego.",
    },
    {
      question: "Czy z Thermomixem będę uchodzić za osobę, która dobrze gotuje?",
      answer:
        "Nie i nie będę tego sprzedawać. Urządzenie stojące na blacie nie mówi o Was nic poza tym, że je macie — nikt nie zacznie uważać, że gotujecie lepiej, bo je kupiliście. Zmienia się coś innego i całkiem konkretnego: nie trzeba stać przy garnku i pilnować, bo temperaturę i mieszanie prowadzi urządzenie, a danie powstaje w jednym naczyniu. Opinia ludzi o Waszym gotowaniu zależy dalej od tego, co im postawicie na stole.",
    },
  ],

  geo: { lat: 52.6723, lng: 17.1606 },
};
