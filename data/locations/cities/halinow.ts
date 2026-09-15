import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * HALINÓW — powiat miński, woj. mazowieckie.
 * MIASTO 3 736 (GUS 31.12.2024), 2,8 km², 1 315,5 os./km² —
 * ⚠ NAJWIĘKSZA GĘSTOŚĆ ZALUDNIENIA W CAŁEJ SERII.
 * Gmina miejsko-wiejska: 18 304 osoby, 63,1 km², 22 sołectwa.
 * ⚠⚠ PRAWA MIEJSKIE 1 STYCZNIA 2001 — jedno z najmłodszych
 *   miast Polski. TO JEST DOBRY, BEZPIECZNY FAKT.
 * ⚠⚠ GMINA UROSŁA O 56% W LATACH 2002–2024 — najsilniej
 *   rosnąca z całej serii mazowieckiej.
 *
 * ⚠⚠ ROZBIEŻNOŚĆ ODWROTNA NIŻ ZWYKLE: portal Wrota Mazowsza
 *   podaje dla gminy 14 137 mieszkańców — to liczba
 *   ZAMROŻONA I PRZESTARZAŁA, nie zawyżona meldunkowo.
 *   OBOWIĄZUJE GUS: 18 304. TWARDA GRANICA.
 *
 * ⚠ HOMONIMY I POMYŁKI:
 * — HALINÓW ≠ HALLEROWO (dzielnica Władysławowa) —
 *   przy haśle „letnisko Halinów" wyszukiwarka podaje
 *   Hallerowo,
 * — OKUNIEW ≠ OKUNINKA (lubelskie) ≠ OKONEK (wielkopolskie),
 * — ⚠ DŁUGA KOŚCIELNA i DŁUGA SZLACHECKA to DWIE RÓŻNE WSIE
 *   w tej samej gminie, oba sołectwa. ŁATWO POMYLIĆ.
 * Odmiana: „do Halinowa", „w Halinowie", „halinowski".
 *   ⚠ NAZWY MIESZKAŃCA NIE POTWIERDZONO — NIE UŻYWAM JEJ.
 *
 * HISTORIA — ⚠ SAM HALINÓW JEST MŁODY, MOCNY MATERIAŁ
 * POCHODZI Z OKUNIEWA, DAWNEGO MIASTA W GRANICACH GMINY:
 * — dawniej SKRUDA / SKRUDZIANKI; w 1580 r. należała
 *   do kanonika warszawskiego Jana Góreckiego,
 * — parafia DŁUGA KOŚCIELNA powstała w 1453 r. i obejmowała
 *   czternaście wsi; były tu STAWY RYBNE i lasy,
 *   ⚠ STAWY NALEŻAŁY DO DUCHOWIEŃSTWA — OPISUJĘ JE JAKO
 *   GOSPODARSTWO RYBNE, BEZ KONTEKSTU WYZNANIOWEGO.
 *   TWARDA GRANICA,
 * — ⚠⚠ PODSTAWA KĄTA: linię kolejową Warszawa–Brześć
 *   PLANOWANO POPROWADZIĆ PRZEZ OKUNIEW, ale poprowadzono
 *   ją W LINII PROSTEJ — i bezimienna Skruda znalazła się
 *   na torze, a Okuniew został poza nim. To przesądziło
 *   o losie obu miejscowości.
 *   ⚠ ROZBIEŻNOŚĆ ROKU: strona gminy podaje 1866, PTTK 1867.
 *   ⚠ PISZĘ „w latach sześćdziesiątych XIX wieku".
 *   NIE PODAJĘ ROKU. TWARDA GRANICA,
 * — 1933 — parcelacja; działki kupowali rzemieślnicy,
 *   urzędnicy i warszawska inteligencja; powstało letnisko
 *   „Wille Halinów"; nazwa Halinów oficjalnie od 1946 r.,
 *   gmina od 1952 r.,
 * — OKUNIEW: pierwotnie Długa Wola; nazwę otrzymał w 1538 r.
 *   przy lokacji miasta przez Stanisława Okunia, urzędnika
 *   czerskiego; przez Okuniew poprowadzono szlak handlowy
 *   z Warszawy przez Stanisławów i Dobre na Ruś; miasto
 *   „słynęło z jarmarków i targów"; zachowały się RELIKTY
 *   DUŻEGO RYNKU Z PROMIENIŚCIE ROZCHODZĄCYMI SIĘ ULICAMI.
 *   ⚠ UTRATĘ PRAW MIEJSKICH W 1869 R. PODAJĘ NEUTRALNIE
 *   ALBO WCALE — BEZ PRZYCZYNY. TWARDA GRANICA.
 *   ⚠ DNI TARGOWYCH ANI NAZW CECHÓW OKUNIEWA
 *   NIE USTALONO — NIE ZMYŚLAM ICH,
 * — Imieniny Haliny 1 lipca są dorocznym świętem miasta,
 *   obok Dnia Miasta 2 maja.
 *
 * DZIŚ: klasyczna gmina sypialniana metropolii warszawskiej.
 * 2 377 podmiotów REGON, z czego 1 963 to samozatrudnieni;
 * tylko 125 pracujących na tysiąc mieszkańców. Mikroprzed-
 * siębiorstwa usługowe i handlowe, piekarnie. Część gminy
 * w Warszawskim Obszarze Chronionego Krajobrazu: 46 pomników
 * przyrody, chronione wydmy z borem sosnowym, tereny
 * podmokłe. Rozległe stawy rybne i kluby jeździeckie.
 * Rzeka Długa.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: nie znaleziono produktu
 *   z gminy Halinów. NIE WYMIENIAM ŻADNEGO.
 * ⚠ JEDNOSTKAMI POMOCNICZYMI SĄ WYŁĄCZNIE SOŁECTWA (22) —
 *   osiedli w mieście wykaz nie wymienia. districts PUSTE.
 *
 * KĄT: DROGA NA SKRÓTY — które skróty w kuchni kosztują,
 * a które nie.
 * Kąt od decyzji, która stworzyła to miasto: linię kolejową
 * planowano przez Okuniew, ale poprowadzono w linii prostej.
 * Skrót zadziałał — tyle że dla kogoś innego, niż zakładano.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Halinów istnieje dzięki skrótowi: linię kolejową
 *   planowano przez Okuniew, stare miasto z 1538 r.,
 *   ale poprowadzono ją prosto — i bezimienna Skruda
 *   znalazła się na torze, a Okuniew poza nim,
 * — że dziś Halinów ma ponad osiemnaście tysięcy mieszkańców
 *   w gminie, a Okuniew jest jednym z jej sołectw
 *   ⚠ PODAJĘ TO BEZ ZŁOŚLIWOŚCI I BEZ ŻALU — jako fakt,
 * — ŻE KUCHNIA JEST PEŁNA SKRÓTÓW i że pytanie nie brzmi,
 *   czy je stosować, tylko KTÓRE Z NICH COŚ KOSZTUJĄ,
 * — ⚠⚠ SKRÓTY, KTÓRE NIC NIE KOSZTUJĄ — i to jest rdzeń
 *   tekstu:
 *   — mrożone warzywa tam, gdzie i tak trafią do zupy
 *     czy sosu,
 *   — gotowe ciasto francuskie,
 *   — mielone przyprawy zamiast całych, jeśli danie i tak
 *     gotuje się krótko,
 *   — pomidory z puszki poza sezonem,
 *   — jedno danie z trzema składnikami zamiast pięciu,
 * — SKRÓTY, KTÓRE KOSZTUJĄ WIĘCEJ, NIŻ DAJĄ:
 *   — pominięcie obsmażenia przed duszeniem — to nie jest
 *     oszczędność czasu, tylko rezygnacja z połowy smaku
 *     ⚠ ODSYŁAM DO STRONY O RUMIENIENIU, NIE ROZWIJAM,
 *   — wrzucenie wszystkiego naraz, gdy składniki mają różne
 *     czasy ⚠ ODSYŁAM DO STRONY O WIELKOŚCI KAWAŁKÓW,
 *   — podniesienie ognia, żeby poszło szybciej — prawie
 *     zawsze kończy się gorszym daniem, nie krótszym,
 *   — solenie „na oko" na końcu, gdy dania już nie da się
 *     poprawić,
 * — ⚠⚠ ŻE NAJDROŻSZY SKRÓT TO REZYGNACJA Z CZEKANIA:
 *   odpoczęcie mięsa, wyrośnięcie ciasta, przegryzienie się
 *   sosu — to są etapy, w których nic się nie robi, więc
 *   wyglądają na darmowe do wycięcia. A są jedynymi,
 *   których nie da się niczym zastąpić,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix JEST SKRÓTEM i nie
 *   zamierzam udawać, że jest inaczej. Skraca dokładnie
 *   jedną rzecz — obecność przy garnku. Nie skraca
 *   czekania, nie zastępuje obsmażania i nie robi dania
 *   lepszym, niż wynika ze składników. Warto wiedzieć,
 *   za który skrót się płaci.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠ ŻADNEJ KRYTYKI PRODUKTÓW PRZEMYSŁOWYCH I GOTOWYCH —
 *   zasada z Mrągowa. Mówię, GDZIE SKRÓT DZIAŁA, a nie
 *   że gotowe jest gorsze. TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNEJ RETORYKI WSTYDU: skróty nie są porażką.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO walk z 1920 r. na terenie dzisiejszej gminy.
 * — ⚠⚠ ZERO militarnej historii Okuniewa: Czarniecki
 *   i Szwedzi 1656, kwatera Karola XII w 1703, powstania.
 *   Okuniew ma gęstą historię wojenną i CAŁĄ JĄ OMIJAM.
 *   TWARDA GRANICA.
 * — ZERO losów rzeźbiarza urodzonego w Okuniewie.
 * — ZERO cmentarzy i wątków wyznaniowych.
 * — ⚠ UTRATĘ PRAW MIEJSKICH PRZEZ OKUNIEW pomijam
 *   albo podaję neutralnie: „przestał być miastem".
 *   BEZ PRZYCZYNY.
 * — ZERO sugestii, że Okuniew na czymś stracił.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „GOTOWANIE Z MROŻONEK" (Płońsk) dotyczy JEDNEGO
 *   RODZAJU SKŁADNIKA.
 * — „GOTOWE DANIE ZE SŁOIKA" (Stoczek Łukowski) dotyczy
 *   REZYGNACJI Z GOTOWANIA W OGÓLE.
 * — „SYNCHRONIZACJA" (Biała Piska) dotyczy TEGO, ŻEBY
 *   WSZYSTKO BYŁO GOTOWE NARAZ.
 * — „PORZĄDEK PRACY" (Sulejów) dotyczy PRZYGOTOWANIA
 *   PRZED STARTEM.
 * — „WOLNO CZY SZYBKO" (Lidzbark) dotyczy PRĘDKOŚCI PRACY.
 * — „PONIEDZIAŁEK" (Białobrzegi) dotyczy JEDNEGO DNIA
 *   TYGODNIA.
 * TUTAJ chodzi o KONKRETNE SKRÓTY i o to, które z nich
 * są darmowe, a za które się płaci smakiem.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku doprowadzenia kolei.
 * — NIE UŻYWAM liczby ludności z portalu samorządowego.
 * — NIE PODAJĘ dni targowych ani cechów Okuniewa.
 * — NIE PISZĘ o wojennej historii Okuniewa.
 * — NIE KRYTYKUJĘ produktów gotowych.
 * — NIE MYLĘ Długiej Kościelnej z Długą Szlachecką.
 * — NIE PODAJĘ nazw osiedli miasta — ich nie ma.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Halinów liczy 3 736 mieszkańców (GUS, 31.12.2024)
 *   na 2,8 km², co daje ponad tysiąc trzysta osób
 *   na kilometr kwadratowy, a cała gmina miejsko-wiejska
 *   18 304 osoby na 63,1 km² i dzieli się na dwadzieścia
 *   dwa sołectwa; prawa miejskie Halinów otrzymał
 *   1 stycznia 2001 roku, a liczba mieszkańców gminy
 *   wzrosła od 2002 roku o pięćdziesiąt sześć procent,
 * — dawniej miejscowość nazywała się Skruda; parafia
 *   w Długiej Kościelnej powstała w 1453 roku i obejmowała
 *   czternaście wsi, a w okolicy były stawy rybne i lasy,
 * — linię kolejową z Warszawy planowano poprowadzić przez
 *   Okuniew, ale w latach sześćdziesiątych XIX wieku
 *   poprowadzono ją w linii prostej — i to Skruda znalazła
 *   się przy torze,
 * — w 1933 roku rozparcelowano tu grunty; działki kupowali
 *   rzemieślnicy, urzędnicy i warszawska inteligencja,
 *   powstało letnisko „Wille Halinów", a nazwa Halinów
 *   obowiązuje oficjalnie od 1946 roku; gmina istnieje
 *   od 1952 roku,
 * — Okuniew, dziś jedno z sołectw gminy, nosił pierwotnie
 *   nazwę Długa Wola, a obecną otrzymał w 1538 roku przy
 *   lokacji miasta przez Stanisława Okunia, urzędnika
 *   czerskiego; prowadził przez niego szlak handlowy
 *   z Warszawy przez Stanisławów i Dobre na Ruś, miasto
 *   słynęło z jarmarków i targów, a do dziś zachowały się
 *   relikty dużego rynku z promieniście rozchodzącymi się
 *   ulicami,
 * — imieniny Haliny, 1 lipca, są dorocznym świętem miasta
 *   obok Dnia Miasta 2 maja,
 * — w gminie jest czterdzieści sześć pomników przyrody,
 *   chronione wydmy z borem sosnowym, rozległe stawy rybne
 *   i kluby jeździeckie, a przez teren płynie rzeka Długa.
 */
export const HALINOW: CityContent = {
  slug: "halinow",
  h1: "Thermomix Halinów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Halinów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Halinowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Halinów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Halinowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Halinowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Halinów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najdroższy skrót w kuchni to rezygnacja z czekania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Halinowie – jak wygląda prezentacja?",
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
      id: "skroty",
      heading: "Które skróty coś kosztują, a które nie",
      paragraphs: [
        "Halinów istnieje dzięki skrótowi. Linię kolejową z Warszawy planowano poprowadzić przez Okuniew — stare miasto, lokowane w 1538 roku, przez które biegł szlak handlowy na Ruś i które słynęło z jarmarków i targów. Poprowadzono ją jednak w linii prostej. Bezimienna wtedy Skruda znalazła się przy torze, Okuniew został poza nim.",
        "Dziś gmina Halinów ma ponad osiemnaście tysięcy mieszkańców, a Okuniew jest jednym z jej dwudziestu dwóch sołectw, z zachowanymi reliktami rozległego rynku, z którego promieniście rozchodzą się ulice. Mówię o tym bez złośliwości i bez żalu: skrót zadziałał, tylko dla kogoś innego, niż zakładano.",
        "Kuchnia jest pełna skrótów i pytanie nigdy nie brzmi, czy je stosować. Brzmi: które z nich coś kosztują.",
        "Zacznę od tych, które nie kosztują nic, bo o nich mówi się najmniej, a warto.",
        "Mrożone warzywa tam, gdzie i tak trafią do zupy albo sosu — nikt nigdy nie rozpozna różnicy, a poza sezonem bywają lepsze od świeżych z półki. Gotowe ciasto francuskie, bo robienie go w domu to osobne rzemiosło i mało kto na tym zyskuje. Mielone przyprawy zamiast całych, jeśli danie gotuje się krótko. Pomidory z puszki poza sezonem. I ten najbardziej niedoceniany: jedno danie z trzech składników zamiast z pięciu. Skrócenie listy to też skrót, a prawie nigdy nie pogarsza wyniku.",
        "Teraz te, które kosztują więcej, niż dają.",
        "Pominięcie obsmażenia przed duszeniem — to nie jest oszczędność czasu, tylko rezygnacja z połowy smaku, o czym pisałam osobno. Wrzucenie wszystkiego naraz, kiedy składniki mają różne czasy: część wyjdzie rozgotowana, część twarda, i nic tego nie posklada. Podniesienie ognia, żeby poszło szybciej — prawie zawsze kończy się gorszym daniem, a nie krótszym. I solenie na oko dopiero na końcu, kiedy dania nie da się już poprawić.",
        "Ale najdroższy skrót jest inny i prawie nikt go nie widzi jako skrótu. To rezygnacja z czekania.",
        "Odpoczęcie mięsa po zdjęciu z ognia. Wyrośnięcie ciasta. Przegryzienie się sosu. Wszystkie te etapy mają jedną wspólną cechę: nic się w nich nie robi. Stoi się obok i patrzy. Wyglądają więc na darmowe do wycięcia — bo skoro nikt nic nie robi, to niby czego się pozbywamy.",
        "A to są jedyne etapy, których nie da się zastąpić niczym: ani sprzętem, ani wyższą temperaturą, ani lepszymi składnikami. Czas jest tu składnikiem, tylko niewidocznym.",
        "Teraz uczciwie o sprzęcie. Thermomix jest skrótem i nie zamierzam udawać, że jest inaczej — po to się go kupuje.",
        "Warto tylko wiedzieć, co dokładnie skraca. Skraca jedną rzecz: obecność przy garnku. To, co normalnie wymaga stania, mieszania i pilnowania, dzieje się bez nikogo. I to jest dużo, bo właśnie na tym najczęściej brakuje.",
        "Nie skraca natomiast czekania — ciasto wyrośnie w swoim czasie, a mięso odpocznie w swoim. Nie zastąpi obsmażania na patelni. I nie zrobi dania lepszym, niż wynika ze składników, które się do niego włożyło. Za każdy skrót gdzieś się płaci; przy tym akurat płaci się pieniędzmi, a nie smakiem, i dlatego uważam go za uczciwy.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Halinowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli wracacie późno i najbardziej brakuje Wam czasu przy garnku — powiedzcie to przy umawianiu. Pokażę dokładnie tę część, którą urządzenie zdejmuje z rąk.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Halinowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla halinowskiej rodziny",
      paragraphs: [
        "Halinów liczy blisko trzy tysiące siedemset mieszkańców na niespełna trzech kilometrach kwadratowych, co daje ponad tysiąc trzysta osób na kilometr — najgęściej ze wszystkich miast, do których dojeżdżam. Cała gmina miejsko-wiejska to ponad osiemnaście tysięcy osób na sześćdziesięciu trzech kilometrach i dwadzieścia dwa sołectwa. Prawa miejskie Halinów otrzymał 1 stycznia 2001 roku, a od 2002 roku liczba mieszkańców gminy wzrosła o pięćdziesiąt sześć procent. Dawniej miejscowość nazywała się Skruda; parafia w Długiej Kościelnej powstała w 1453 roku i obejmowała czternaście wsi, a w okolicy były stawy rybne i lasy. Linię kolejową z Warszawy planowano poprowadzić przez Okuniew, ale w latach sześćdziesiątych XIX wieku poprowadzono ją w linii prostej — i to Skruda znalazła się przy torze. W 1933 roku rozparcelowano tutejsze grunty; działki kupowali rzemieślnicy, urzędnicy i warszawska inteligencja, powstało letnisko „Wille Halinów”, a nazwa Halinów obowiązuje oficjalnie od 1946 roku. Okuniew, dziś jedno z sołectw gminy, nosił pierwotnie nazwę Długa Wola, a obecną otrzymał w 1538 roku przy lokacji miasta przez Stanisława Okunia, urzędnika czerskiego; prowadził przez niego szlak handlowy z Warszawy przez Stanisławów i Dobre na Ruś, słynął z jarmarków i targów, a do dziś zachowały się relikty dużego rynku z promieniście rozchodzącymi się ulicami. Imieniny Haliny, 1 lipca, są dorocznym świętem miasta obok Dnia Miasta 2 maja. W gminie jest czterdzieści sześć pomników przyrody, chronione wydmy z borem sosnowym, rozległe stawy rybne i kluby jeździeckie, a przez teren płynie rzeka Długa.",
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

  districtsHeading: "Do których części gminy Halinów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dwóch sołectw — w tym do Okuniewa, Długiej Kościelnej, Długiej Szlacheckiej, Cisia, Hipolitowa, Kazimierowa, Nowego i Starego Konika oraz Wielgolasu.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Halinów też przyjadę",
  nearbyParagraphs: [
    "Sulejówek, Wesoła, Mińsk Mazowiecki, Wiązowna, Dębe Wielkie, Zielonka i Warszawa są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sulejówek", "Mińsk Mazowiecki", "Zielonka", "Otwock"],

  about: blokOMnie("do Halinowa", "w Halinowie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Halinowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw gminy — od Okuniewa i Długiej Kościelnej po Cisie, Hipolitów i Wielgolas. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Halinowie"),
    {
      question: "Na których skrótach w kuchni nic się nie traci?",
      answer:
        "Na mrożonych warzywach, jeśli i tak trafią do zupy albo sosu. Na gotowym cieście francuskim. Na mielonych przyprawach przy daniach gotowanych krótko. Na pomidorach z puszki poza sezonem. I na skróceniu samej listy składników — trzy zamiast pięciu prawie nigdy nie pogarszają wyniku.",
    },
    {
      question: "A które skróty kosztują najwięcej?",
      answer:
        "Pominięcie obsmażenia przed duszeniem, wrzucenie wszystkiego naraz mimo różnych czasów i podniesienie ognia, żeby poszło szybciej. Ale najdroższa jest rezygnacja z czekania — odpoczęcia mięsa, wyrośnięcia ciasta, przegryzienia się sosu. Te etapy wyglądają na darmowe do wycięcia, bo nic się w nich nie robi, a są jedynymi, których nie zastąpi żaden sprzęt.",
    },
    {
      question: "Czy Thermomix to skrót?",
      answer:
        "Tak i nie zamierzam udawać, że jest inaczej — po to się go kupuje. Skraca jedną konkretną rzecz: obecność przy garnku. Nie skraca czekania, nie zastąpi obsmażania na patelni i nie zrobi dania lepszym, niż wynika ze składników. Za ten skrót płaci się pieniędzmi, a nie smakiem — i dlatego uważam go za uczciwy.",
    },
  ],

  geo: { lat: 52.2283, lng: 21.3552 },
};
