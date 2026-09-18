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
 * UJŚCIE — powiat pilski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ UJŚCIE NIE MA.
 * MIASTO: 3 335 mieszkańców (GUS 31.12.2024), 5,8 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   577,0 os./km², iloraz daje 575,0. ROZBIEŻNOŚĆ 2,0.
 *   NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠⚠⚠ WYSOKOŚĆ: 47–98 m n.p.m. — PRZEDZIAŁ, NIE
 *   PUNKT. TO RDZEŃ KĄTA. PODAJĘ OBIE WARTOŚCI
 *   I RÓŻNICĘ 51 M.
 * CAŁA GMINA: 7 558 osób, 126,0 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — źródło podaje 61,
 *   iloraz daje 60,0. ROZBIEŻNOŚĆ 1,02, TUŻ POWYŻEJ
 *   PROGU. Trzecie źródło podaje 7 527 osób i 59,8.
 *   NIE PODAJĘ ŻADNEJ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 12 w rejestrze TERYT, 9 obrębów
 *   ewidencyjnych — NAJMNIEJ Z GMIN TEJ FALI.
 *   ⚠⚠ SOŁECTW NIE USTALONO [NP] — NIE PODAJĘ.
 *   ⚠ LICZBĘ 12 MIEJSCOWOŚCI PODAJĘ (jedno źródło,
 *   spójne z wykazem nazw).
 *   WSIE: Bronisławki, Byszki, Chrustowo, Jabłonowo,
 *   Kruszewo, Ługi Ujskie, Mirosław, Nowa Wieś Ujska,
 *   Nowie, Śluza Nowe, Węglewo.
 *   ⚠⚠ PUŁAPKA WEWNĘTRZNA: NOWIE i ŚLUZA NOWE — dwie
 *   osobne, mylące nazwy. WSPOMINAM.
 *   ⚠⚠⚠ PUŁAPKA ZEWNĘTRZNA: wieś MIROSŁAW w tej gminie
 *   różni się JEDNĄ LITERĄ od miasta MIŁOSŁAW
 *   w powiecie wrzesińskim, o którym piszę w tej samej
 *   fali. WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * POŁOŻENIE: ok. 10 km na południe od Piły. PODAJĘ.
 * ⚠ GEO: 53,0531 / 16,7323.
 *
 * ⚠⚠⚠ ODMIANA — RODZAJ NIJAKI, HOMONIM Z RZECZOWNIKIEM
 *   POSPOLITYM:
 *   M. UJŚCIE · D. UJŚCIA · Ms. w UJŚCIU ·
 *   N. pod UJŚCIEM · C. Ujściu.
 *   ⚠ POTWIERDZENIA: „historia Ujścia", „w Ujściu",
 *   „Urząd Miejski w Ujściu", „pod Ujściem".
 *   Przymiotnik: UJSKI — ⚠ FORMA RZADKA, ale
 *   POŚWIADCZONA URZĘDOWO w nazwach wsi: NOWA WIEŚ
 *   UJSKA, ŁUGI UJSKIE.
 *   ⚠⚠⚠ BŁĄD 1: pisanie nazwy małą literą (bo to
 *   zarazem rzeczownik pospolity). NAJCZĘSTSZY.
 *   ⚠⚠ BŁĄD 2: „Ujściego" zamiast „Ujścia".
 *   ⚠⚠ BŁĄD 3: „ujścieński"/„ujściowy" zamiast „ujski".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM [NP].
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — ⚠⚠⚠ „UJŚCIE" JEST POSPOLITYM RZECZOWNIKIEM —
 *     NAJBARDZIEJ KOLIZYJNA NAZWA W CAŁYM CYKLU.
 *     WSPOMINAM.
 *   — Wsi o nazwie „Ujście" w innych województwach
 *     NIE USTALONO [NP]. NIE TWIERDZĘ, ŻE ICH NIE MA.
 *   — NOWIE i ŚLUZA NOWE w gminie.
 *   — MIROSŁAW w gminie wobec MIŁOSŁAWIA w powiecie
 *     wrzesińskim.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1108 R., u Galla Anonima.
 *   — PRAWA MIEJSKIE: 1413 R., WŁADYSŁAW JAGIEŁŁO.
 *     RÓŻNICA 305 LAT. PODAJĘ OBIE DATY.
 *     ⚠⚠ RÓŻNICY NIE ROBIĘ FIGURĄ — kąty „rocznicę
 *     liczono od późniejszej daty" (Odolanów) i „data
 *     przyjęta, nie znaleziona" (Krobia) ZAJĘTE.
 *   — RATUSZ: 1903 R., NA RZUCIE TRAPEZU. PODAJĘ —
 *     rzut trapezu to rzadkość i dobry detal.
 *   — HUTA SZKŁA: 1809 R. ⚠⚠ PODAJĘ WYŁĄCZNIE ROK
 *     I RODZAJ ZAKŁADU, BEZ NAZWY WŁASNEJ I BEZ
 *     TWIERDZEŃ O DZISIEJSZEJ DZIAŁALNOŚCI.
 *   — WIEŻA WIDOKOWA: 2006 R. PODAJĘ.
 *   ⚠⚠⚠ KALWARII NIE WYMIENIAM — wątek wyznaniowy.
 *     Dotyczy to również obu rozbieżnych dat jej
 *     powstania.
 *   ⚠⚠⚠ „BITWY POD UJŚCIEM" NIE WYMIENIAM — wątek
 *     militarny. Cytat z niej służy mi wyłącznie jako
 *     potwierdzenie formy narzędnika i NIE TRAFIA
 *     DO TEKSTU.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — MAŁA CAŁOŚĆ, DUŻA ROZPIĘTOŚĆ
 *   W ŚRODKU:
 *   MIASTO MA 5,8 km² — a w jego granicach wysokość
 *   waha się od 47 DO 98 M N.P.M.
 *   RÓŻNICA: 51 METRÓW.
 *   Niezależny opis terenowy mówi o wzgórzach
 *   wznoszących się „około 50 metrów nad doliną" —
 *   DRUGIE ŹRÓDŁO ZGODNE CO DO RZĘDU WIELKOŚCI.
 *   CZYLI: bardzo mała całość, a w środku rozpiętość,
 *   której po samej nazwie i po powierzchni nikt by
 *   się nie spodziewał.
 *   ⚠⚠⚠ NIE ROBIĘ Z TEGO FIGURY „NAZWA OBIECUJE COŚ
 *   INNEGO" — kąt „obietnica w nazwie" ZAJĘTY
 *   (Międzychód). MOGĘ RAZ ZAZNACZYĆ, że nazwa kojarzy
 *   się z doliną, ALE RDZEŃ TO ROZPIĘTOŚĆ WEWNĄTRZ
 *   MAŁEJ CAŁOŚCI, NIE ROZJAZD MIĘDZY NAZWĄ
 *   A RZECZYWISTOŚCIĄ.
 *
 * KĄT: MAŁA CAŁOŚĆ, DUŻA ROZPIĘTOŚĆ W ŚRODKU
 * — o tym, że mały zespół nie znaczy jednorodny.
 * Kąt z Ujścia: 51 metrów różnicy wysokości na
 * 5,8 kilometra kwadratowego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że miasto ma 5,8 km², a wysokość w jego granicach
 *   waha się od 47 do 98 m n.p.m., czyli 51 metrów,
 * — że drugie źródło niezależnie mówi o wzgórzach
 *   około 50 m nad doliną. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: mały dom nie
 *   znaczy jednorodny. Trzy osoby potrafią mieć trzy
 *   różne pory głodu, trzy różne progi ostrości i trzy
 *   różne rzeczy, których nie jedzą,
 * — ⚠⚠ ŻE PLANOWANIE „DLA WSZYSTKICH TAK SAMO" JEST
 *   PRZY MAŁEJ LICZBIE OSÓB NAJBARDZIEJ KUSZĄCE
 *   I NAJCZĘŚCIEJ ZAWODZI,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wypisz, czego nie je każda
 *   osoba z osobna. Przy trzech osobach to trzy linijki
 *   i zwykle nikt tego nigdy nie zrobił,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie jest wezwanie
 *   do gotowania trzech obiadów. Wręcz przeciwnie —
 *   chodzi o jedno danie z rozdzielonym dodatkiem,
 *   a nie o trzy osobne,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie ułatwia rozdzielenie
 *   przez Varomę — porcja na parze powstaje równolegle
 *   z daniem w naczyniu. To realna pomoc, ale dotyczy
 *   jednego konkretnego układu, nie wszystkich.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SZEROKIEGO A PŁYTKIEGO — kąt zajęty
 *   (Pniewy). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam chodziło o kształt
 *   jednego obiektu — szeroki, ale płytki; TU o to,
 *   że mała całość mieści w sobie dużą rozpiętość.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód).
 * — ⚠⚠⚠ ZERO ŚREDNIEJ, KTÓRA OPISUJE CIĄG, KTÓREGO
 *   NIE BYŁO — kąt zajęty (Oborniki). ŻADNEJ ŚREDNIEJ
 *   WYSOKOŚCI NIE LICZĘ.
 * — ⚠⚠⚠ ZERO ZMIANY KSZTAŁTU W POŁOWIE WYSOKOŚCI —
 *   kąt zajęty (Ostrzeszów).
 * — ⚠⚠ ZERO NAJWYŻSZE NIE ZNACZY WYSOKIE — kąt zajęty
 *   (Chodzież).
 * — ⚠⚠ ZERO JEDNEJ LICZBY, DWÓCH RÓŻNYCH MIAST —
 *   kąt zajęty (Stęszew).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ SZCZEGÓLNIE:
 *   ANI SŁOWA O ALERGIACH, NIETOLERANCJACH
 *   I DIETACH MEDYCZNYCH. Piszę „czego ktoś nie je",
 *   nigdy „czego komuś nie wolno".
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA WYBIÓRCZOŚCI DZIECI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO (KALWARII NIE WYMIENIAM) · ZERO WĄTKU
 *   MILITARNEGO (BITWY NIE WYMIENIAM) · ZERO ALKOHOLU ·
 *   ZERO POWODZI I POŻARÓW · ZERO BEZROBOCIA ·
 *   ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta ani gminy.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ największej wsi.
 * — NIE LICZĘ średniej wysokości.
 * — NIE WYMIENIAM kalwarii ani bitwy.
 * — NIE PODAJĘ nazwy zakładu ani jego dzisiejszego
 *   stanu.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE TWIERDZĘ, że nie ma innych miejscowości
 *   o nazwie Ujście.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Ujście leży w powiecie pilskim, około 10 km
 *   na południe od Piły, i liczy 3 335 mieszkańców
 *   (GUS, 31.12.2024) na 5,8 km²,
 * — w granicach miasta wysokość waha się od 47
 *   do 98 m n.p.m., czyli o 51 metrów; niezależny opis
 *   mówi o wzgórzach wznoszących się około 50 m
 *   nad doliną,
 * — cała gmina miejsko-wiejska to 7 558 osób
 *   na 126 km², a rejestr wymienia w niej
 *   12 miejscowości i 9 obrębów ewidencyjnych,
 * — pierwsza wzmianka pochodzi z 1108 r., od Galla
 *   Anonima, a prawa miejskie nadał w 1413 r.
 *   Władysław Jagiełło,
 * — ratusz z 1903 r. zbudowano na rzucie trapezu,
 * — hutę szkła założono tu w 1809 r., a wieżę widokową
 *   wzniesiono w 2006 r.,
 * — w gminie leżą m.in. Kruszewo, Chrustowo, Byszki,
 *   Węglewo, Jabłonowo, Nowa Wieś Ujska, Ługi Ujskie,
 *   Mirosław, Nowie i Śluza Nowe.
 */
export const UJSCIE: CityContent = {
  slug: "ujscie",
  h1: "Thermomix Ujście – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ujście — cena i prezentacja",
  seoDescription:
    "Thermomix w Ujściu w powiecie pilskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ujście — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ujściu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ujścia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Ujście"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pięć i osiem dziesiątych kilometra. Pięćdziesiąt jeden metrów różnicy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ujściu – jak wygląda prezentacja?",
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
      id: "rozpietosc",
      heading: "Mała całość, duża rozpiętość w środku",
      paragraphs: [
        "Ujście ma pięć i osiem dziesiątych kilometra kwadratowego. To niewiele — tyle, że całe miasto da się obejść pieszo w jedno popołudnie.",
        "A wysokość w jego granicach waha się od czterdziestu siedmiu do dziewięćdziesięciu ośmiu metrów nad poziomem morza. Pięćdziesiąt jeden metrów różnicy na tej garstce kilometrów. Niezależny opis terenowy mówi o wzgórzach wznoszących się mniej więcej pięćdziesiąt metrów nad doliną, więc dwa źródła zgadzają się co do rzędu wielkości. Nazwa miasta kojarzy się z doliną i płaskim, ale nie o to tu chodzi — chodzi o to, że w tak małej całości mieści się różnica, której nikt by się po jej rozmiarze nie spodziewał.",
        "Piszę o tym, bo w małych domach zakłada się jednorodność najczęściej i najbardziej się na tym przejeżdża.",
        "Trzy osoby to nie jest „wszyscy tak samo”. To zwykle trzy różne pory głodu, trzy różne progi ostrości, trzy różne rzeczy, których ktoś po prostu nie je, i trzy różne poziomy tolerancji dla tego samego dania drugi dzień z rzędu. Przy dwudziestu osobach nikt by nie próbował ugotować jednego dla wszystkich. Przy trzech wydaje się to oczywiste — i właśnie dlatego zawodzi.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o rzeczy szerokiej, a płytkiej — o kształcie jednego obiektu. Tu jest inaczej: całość jest mała, a różnica w jej środku duża.",
        "Ruch jest jeden i zajmuje trzy linijki. Wypiszcie, czego nie je każda osoba z osobna — nie „u nas nie jemy grzybów”, tylko kto konkretnie. Przy trzech osobach to trzy linijki, a mimo to prawie nikt tego nigdy nie zrobił i wszyscy nosimy tę listę w głowie w wersji uśrednionej.",
        "Uczciwie o drugiej stronie, bo to nie jest wezwanie do gotowania trzech obiadów. Wręcz odwrotnie. Chodzi o jedno danie z rozdzielonym dodatkiem albo z przyprawą dosypywaną na talerzu, a nie o trzy osobne garnki. Kto zacznie gotować osobno dla każdego, skończy szybciej, niż zaczął, i wcale nie z powodu braku chęci.",
        "I uczciwie o sprzęcie. Thermomix pomaga tu w jednym konkretnym układzie: Varoma pozwala zrobić porcję na parze równolegle z daniem gotującym się w naczyniu, więc jedna osoba może dostać swoją wersję bez osobnego garnka i bez dodatkowej pracy. To realna pomoc, ale dotyczy właśnie tego układu — nie wszystkich różnic w domu i nie każdego dnia.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ujściu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego nie je każda osoba z osobna. Nie zbiorczo — osobno. Pod to dobieram dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ujściu"),
    sekcjaRaty("w Ujściu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Ujścia",
      paragraphs: [
        "Ujście leży w powiecie pilskim, około dziesięciu kilometrów na południe od Piły, i liczy 3 335 mieszkańców (GUS, 31.12.2024) na 5,8 kilometra kwadratowego; gęstości nie podaję ani dla miasta, ani dla gminy, bo liczby ze źródeł nie zgadzają się z ilorazami. Cała gmina miejsko-wiejska to 7 558 osób na stu dwudziestu sześciu kilometrach kwadratowych, a rejestr wymienia w niej tylko dwanaście miejscowości i dziewięć obrębów ewidencyjnych — najmniej ze wszystkich gmin, o jakich pisałam w tej okolicy. Pierwsza wzmianka pochodzi z 1108 roku, od Galla Anonima, a prawa miejskie nadał w 1413 Władysław Jagiełło. Ratusz z 1903 roku ma rzadki rzut trapezu. Hutę szkła założono tu w 1809 roku, a wieżę widokową wzniesiono dopiero w 2006. W gminie leżą między innymi Kruszewo, Chrustowo, Byszki, Węglewo, Nowa Wieś Ujska i Ługi Ujskie.",
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

  districtsHeading: "Do których części Ujścia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Kruszewa, Chrustowa, Byszek, Węglewa, Jabłonowa, Nowej Wsi Ujskiej, Ługów Ujskich, Bronisławek, Mirosławia, Nowia i Śluzy Nowe. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: nazwa jest rodzaju nijakiego i odmienia się jak rzeczownik pospolity — „do Ujścia”, „w Ujściu”, „pod Ujściem”, nigdy „Ujściego”; przymiotnik brzmi „ujski”, co widać w urzędowych nazwach Nowa Wieś Ujska i Ługi Ujskie. Warto też pamiętać o wielkiej literze, bo „ujście” jest zarazem zwykłym rzeczownikiem. I praktyczna: w gminie są dwie mylące nazwy, Nowie i Śluza Nowe, a wieś Mirosław różni się jedną literą od miasta Miłosław w powiecie wrzesińskim.",
  ],
  districts: [],

  nearbyHeading: "Poza Ujście też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Piły, Chodzieży, Szamocina, Wyrzyska, Trzcianki i Czarnkowa — wszędzie bezpłatnie, tak samo jak w samym Ujściu.",
  ],
  nearbyTowns: ["Piła", "Chodzież", "Szamocin", "Wyrzysk", "Trzcianka", "Czarnków"],

  about: blokOMnie("do Ujścia", "w Ujściu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ujścia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: nazwa jest rodzaju nijakiego, więc poprawnie jest „do Ujścia”, „w Ujściu” i „pod Ujściem”, a nie „Ujściego”; przymiotnik brzmi „ujski” — potwierdzają to urzędowe nazwy Nowa Wieś Ujska i Ługi Ujskie. Warto też pisać nazwę wielką literą, bo „ujście” jest zarazem zwykłym rzeczownikiem. I praktyczna: wieś Mirosław w tej gminie różni się jedną literą od miasta Miłosław w powiecie wrzesińskim.",
    },
    ...faqWspolne("w Ujściu"),
    {
      question: "Jesteśmy małą rodziną, a i tak nie umiem ugotować jednego dania dla wszystkich. Dlaczego?",
      answer:
        "Bo mały dom nie znaczy jednorodny, a przy małej liczbie osób najłatwiej o tym zapomnieć. Ujście jest tu dobrym obrazem: miasto ma pięć i osiem dziesiątych kilometra kwadratowego, a wysokość w jego granicach waha się od czterdziestu siedmiu do dziewięćdziesięciu ośmiu metrów — pięćdziesiąt jeden metrów różnicy na tak małym terenie. Trzy osoby to zwykle trzy różne pory głodu, trzy progi ostrości i trzy rzeczy, których ktoś nie je. Wypiszcie to osobno dla każdej osoby — przy trzech osobach to trzy linijki, a prawie nikt tego nie robi. I od razu zastrzeżenie: to nie znaczy gotować trzy obiady. Chodzi o jedno danie z rozdzielonym dodatkiem albo przyprawą dosypywaną na talerzu.",
    },
    {
      question: "Czy da się w Thermomixie zrobić dwie wersje jednego dania naraz?",
      answer:
        "W jednym konkretnym układzie tak: Varoma pozwala ugotować porcję na parze równolegle z daniem, które gotuje się w naczyniu poniżej. Jedna osoba może więc dostać swoją wersję bez osobnego garnka i bez dodatkowej pracy — to się najczęściej sprawdza przy małym dziecku albo przy kimś, kto nie je czegoś, co jedzą pozostali. Ale nie każdą różnicę da się tak rozwiązać i nie będę udawać, że urządzenie robi dwa osobne obiady.",
    },
  ],

  geo: { lat: 53.0531, lng: 16.7323 },
};
