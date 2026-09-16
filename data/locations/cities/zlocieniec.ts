import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * ZŁOCIENIEC — powiat drawski, woj. zachodniopomorskie,
 * Pojezierze Drawskie, nad Drawą.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 11 984 mieszkańców (GUS 31.12.2024), 32,3 km²,
 * gęstość 371,3 os./km² — MIASTO ROZLEGŁE I RZADKO
 * ZALUDNIONE. 130 m n.p.m.
 * CAŁA GMINA: 15 128 osób, 279,9 km².
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,5326 / 16,0106.
 * ⚠⚠ LICZBY SOŁECTW NIE PODAJĘ — źródła podają różnie
 *   (polskawliczbach: 9 sołectw / 20 miejscowości;
 *   pomeranica.pl za 2012 r.: 27 miejscowości).
 *   Piszę opisowo „miasto i wsie w gminie".
 * ⚠ en.wikipedia podaje ok. 12 000 za 2006 r. — wartość
 *   prawdopodobnie zaokrąglona. NIE WYCIĄGAM Z NIEJ
 *   WNIOSKU O STABILNOŚCI DEMOGRAFICZNEJ.
 *
 * ⚠ ODMIANA: D. ZŁOCIEŃCA, Ms. W ZŁOCIEŃCU,
 *   przym. ZŁOCIENIECKI — potwierdzone w PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   „złocieńczanin" nie jest potwierdzony w PWN.
 * ⚠ HOMONIMU BRAK — nazwa unikatowa.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — VII–VI w. p.n.e. — osada na zboczach Góry Rakowskiej;
 *   cmentarzysko odkryto w 1877 r.
 *   ⚠ CMENTARZYSKA NIE UŻYWAM W TREŚCI — wątek grobowy.
 *   Zostaje sama osada.
 * — 13 GRUDNIA 1333 — LOKACJA MIASTA na prawie
 *   magdeburskim przez braci Hasso i Ludeke von Wedel.
 *   ⚠ DATA DZIENNA POTWIERDZONA W DWÓCH ŹRÓDŁACH.
 * — ⚠⚠ POŻARU NIE PODAJĘ — źródła podają 1658 ALBO 1668,
 *   rozbieżność dziesięciu lat. NIE WYBIERAM JEDNEJ DATY.
 * — ⚠⚠⚠ RDZEŃ KĄTA: 1838 — PIERWSZA NA POMORZU
 *   PRZĘDZALNIA WYPOSAŻONA W MASZYNĘ PAROWĄ.
 *   Właściciel: Ludwik Ferdynand Klatt.
 *   ⚠ „PIERWSZA NA POMORZU" — podaję za źródłem,
 *   z przypisaniem, nie jako fakt bezsporny.
 * — 1851 — fabryka włókiennicza Gruetzmachera.
 * — 1877–1878 — linia kolejowa Runowo–Chojnice.
 * — 1885 — pierwsza cegielnia ręczna;
 *   1896 — CEGIELNIA NAPĘDZANA PARĄ (Krüger & Treptow).
 *   ⚠⚠ TA PARA CEGIELNI — RĘCZNA I PAROWA, ODDALONE
 *   O JEDENAŚCIE LAT — JEST DRUGĄ NOGĄ KĄTA.
 *
 * JEZIORO WILCZKOWO (w gminie):
 * — powierzchnia ok. 300 ha, głębokość maksymalna 26,7 m,
 *   długość ok. 4 km.
 *   ⚠⚠ SZEROKOŚCI NIE USTALONO — dlatego NIE UŻYWAM
 *   PROPORCJI DŁUGOŚĆ:SZEROKOŚĆ (to zresztą kąt zajęty:
 *   Choszczno, ta sama fala).
 *   ⚠ GŁĘBOKOŚCI ŚREDNIEJ NIE PODAJĘ — kąt „maksymalna
 *   kontra średnia" zajęty (Więcbork).
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu dla Złocieńca i gminy. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: SKĄD BIERZE SIĘ SIŁA — co się zmienia, gdy pracę
 * wykonuje maszyna, a nie ręka, i czego przy tym ubywa.
 * Kąt od 1838 r.: w Złocieńcu stanęła pierwsza na Pomorzu
 * przędzalnia z maszyną parową. Pół wieku później to samo
 * powtórzyło się w cegielni: ręczna w 1885, parowa w 1896.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1838 r. uruchomiono tu przędzalnię z maszyną
 *   parową — według źródła pierwszą na Pomorzu — a w 1885
 *   i 1896 r. powtórzyła się ta sama para: cegielnia
 *   ręczna, a jedenaście lat później parowa,
 * — ŻE MASZYNA NIE ZMIENIA PRODUKTU, TYLKO ŹRÓDŁO SIŁY —
 *   to jest rdzeń. Cegła zostaje cegłą. Zmienia się to,
 *   ile można zrobić i jak równo,
 * — ⚠⚠ ŻE W KUCHNI SĄ CZYNNOŚCI, W KTÓRYCH RÓŻNICA
 *   JEST OGROMNA, I TAKIE, W KTÓRYCH NIE MA JEJ WCALE.
 *   Ogromna tam, gdzie liczy się WYTRWAŁOŚĆ i RÓWNOMIERNOŚĆ
 *   — długie mieszanie, ucieranie, rozdrabnianie na jednolitą
 *   masę. Żadna tam, gdzie liczy się DECYZJA: co dodać,
 *   kiedy przestać, czy już wystarczy,
 * — ⚠⚠ ŻE COŚ SIĘ PRZY TYM TRACI I TRZEBA TO POWIEDZIEĆ:
 *   ręka czuje, kiedy ciasto zgęstniało, a maszyna nie
 *   informuje o tym sama. Przy pracy ręcznej kontrola jest
 *   ciągła i mimowolna; przy maszynowej trzeba jej chcieć
 *   — czyli zajrzeć,
 * — ⚠⚠ ŻE Z TEGO WYNIKA KONKRETNA RADA: przy nowym daniu
 *   warto zaglądać częściej, niż się wydaje potrzebne,
 *   a przy znanym — rzadziej. Nie odwrotnie, choć
 *   odruch bywa odwrotny,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to urządzenie jest dokładnie
 *   maszyną parową tej historii — przejmuje siłę
 *   i wytrwałość, nie przejmuje decyzji. Kto liczy,
 *   że zdejmie mu z głowy pytanie „co dziś ugotować",
 *   będzie rozczarowany, bo to pytanie zostaje po stronie
 *   człowieka.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO KUCHNI ZASILANEJ Z BUTLI I ŹRÓDEŁ ENERGII —
 *   kąt zajęty (Grodków). Tam chodzi o TO, SKĄD BIERZE SIĘ
 *   CIEPŁO; TUTAJ o TO, SKĄD BIERZE SIĘ RUCH.
 *   Ani jednego zdania o gazie, prądzie i ogrzewaniu.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO UBIJANIA PIANY I MASŁA — kąty zajęte
 *   (Ostrów Lubelski, Bychawa). Piszę o mieszaniu
 *   i ucieraniu ogólnie, bez wchodzenia w te dwie rzeczy.
 * — ⚠⚠ ZERO MIELENIA MIĘSA I MASZYNKI — kąt zajęty
 *   (Miastko).
 * — ⚠⚠ ZERO PRZYPRAW CAŁYCH KONTRA MIELONYCH — kąt zajęty
 *   (Pieniężno).
 * — ⚠ ZERO PRODUKTÓW GOTOWYCH KONTRA ROBIONYCH SAMEMU —
 *   kąt zajęty (Łabiszyn), i ZERO „DOMOWE KONTRA
 *   PRZEMYSŁOWE" — kąt zajęty (Mrągowo). To jest
 *   NAJBLIŻSZE SĄSIEDZTWO: tam rozstrzyga się, CZY ROBIĆ
 *   SAMEMU; TUTAJ wyłącznie CZYM się to robi, przy
 *   założeniu, że robi się samemu.
 * — ⚠ ZERO PIERWSZEŃSTWA I BYCIA ZAPOMNIANYM — kąt zajęty
 *   (Zgierz). „Pierwsza na Pomorzu" podaję jako fakt,
 *   bez morału o pierwszeństwie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK — ⚠ nazwiska właścicieli
 *   zakładów z XIX w. podaję jako fakt historyczny,
 *   to nie są marki obecne na rynku.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO OŚRODKA SZKOLENIOWEGO NSDAP Z 1934 R.
 *   W OKOLICY MIASTA I ZERO WYDARZEŃ Z LISTOPADA 1938.
 *   To są najcięższe tematy w materiale źródłowym.
 *   NIE WSPOMINAM. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO 5 MARCA 1945 I ZERO PRZESIEDLEŃ.
 * — ⚠⚠ ZERO PORÓWNANIA LICZBY MIESZKAŃCÓW Z 1939 R.
 *   Prowadzi prosto do wątku wymiany ludności.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI (−12,0 % w latach
 *   2002–2024) I JEGO PRZYCZYN.
 * — ⚠ ZERO CMENTARZYSKA Z GÓRY RAKOWSKIEJ.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby sołectw — źródła się rozchodzą.
 * — NIE PODAJĘ roku wielkiego pożaru — 1658 albo 1668.
 * — NIE PODAJĘ szerokości ani głębokości średniej
 *   jeziora Wilczkowo.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PRZYPISUJĘ Złocieńcowi produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Złocieniec leży nad Drawą na Pojezierzu Drawskim,
 *   w powiecie drawskim, jest miastem w gminie
 *   miejsko-wiejskiej i liczy 11 984 mieszkańców
 *   (GUS, 31.12.2024) na 32,3 km², 130 m n.p.m.; cała
 *   gmina ma 15 128 osób na 279,9 km²,
 * — najstarsza osada w tym miejscu sięga VII–VI w. p.n.e.,
 *   a lokacja miasta na prawie magdeburskim nastąpiła
 *   13 grudnia 1333 r. za sprawą braci Hasso i Ludeke
 *   von Wedel,
 * — w 1838 r. uruchomiono tu przędzalnię z maszyną parową,
 *   według źródła pierwszą na Pomorzu; jej właścicielem
 *   był Ludwik Ferdynand Klatt, a w 1851 r. powstała
 *   fabryka włókiennicza Gruetzmachera,
 * — linia kolejowa Runowo–Chojnice powstała w latach
 *   1877–1878,
 * — pierwsza cegielnia ręczna ruszyła w 1885 r.,
 *   a cegielnia napędzana parą w 1896 r.,
 * — w gminie leży jezioro Wilczkowo: około 300 ha
 *   powierzchni, 26,7 m głębokości maksymalnej
 *   i około 4 km długości.
 */
export const ZLOCIENIEC: CityContent = {
  slug: "zlocieniec",
  h1: "Thermomix Złocieniec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Złocieniec — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Złocieńcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Złocieniec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Złocieńcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Złocieńca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Złocieniec"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Maszyna przejmuje siłę i wytrwałość. Decyzji nie przejmuje żadna.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Złocieńcu – jak wygląda prezentacja?",
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
      id: "skad-sila",
      heading: "Rok 1838, czyli skąd bierze się siła",
      paragraphs: [
        "W 1838 roku uruchomiono w Złocieńcu przędzalnię wyposażoną w maszynę parową — według źródeł pierwszą taką na całym Pomorzu. Jej właścicielem był Ludwik Ferdynand Klatt.",
        "Pół wieku później to samo powtórzyło się w innej branży i widać to jak na dłoni. W 1885 roku ruszyła w mieście pierwsza cegielnia ręczna, a w 1896 — cegielnia napędzana parą. Jedenaście lat różnicy między tym samym wyrobem robionym dwoma sposobami.",
        "I to jest ten szczegół, który warto zauważyć: cegła została cegłą. Maszyna nie zmieniła produktu. Zmieniła wyłącznie to, ile można go zrobić i jak równo.",
        "W kuchni działa dokładnie ta sama zasada i z niej wynika coś praktycznego.",
        "Są czynności, w których różnica między ręką a maszyną jest ogromna. To wszystko, co wymaga wytrwałości i równomierności: długie mieszanie, ucieranie, rozdrabnianie czegoś na naprawdę jednolitą masę. Ręka się męczy i zwalnia — i dlatego wynik bywa nierówny nie dlatego, że ktoś nie umie, tylko dlatego, że po dziesiątej minucie każdy miesza wolniej.",
        "I są czynności, w których różnicy nie ma żadnej, bo nie chodzi w nich o siłę, tylko o decyzję. Co dodać. Kiedy przestać. Czy już wystarczy soli. Tego żadna maszyna za nikogo nie rozstrzygnie i nie warto na to liczyć.",
        "Teraz rzecz, którą trzeba powiedzieć uczciwie, bo się ją pomija: przy przejściu na maszynę coś się traci.",
        "Ręka czuje. Kiedy miesza się samemu, wiadomo w połowie ruchu, że ciasto właśnie zgęstniało albo że masa się rozwarstwiła — nie trzeba tego sprawdzać, bo informacja przychodzi sama. Maszyna tego nie mówi. Przy pracy ręcznej kontrola jest ciągła i mimowolna; przy maszynowej trzeba jej chcieć, czyli po prostu zajrzeć.",
        "Wynika z tego konkretna rada, odwrotna do odruchu. Przy nowym daniu warto zaglądać częściej, niż wydaje się potrzebne — bo nie wiadomo jeszcze, jak ma wyglądać po drodze. Przy daniu znanym można zaglądać rzadziej, bo wiadomo. Odruch bywa odwrotny: pilnujemy tego, co znamy, a nowe zostawiamy samo sobie.",
        "Uczciwie o urządzeniu, bez owijania. Ono jest dokładnie maszyną parową z tej historii. Przejmuje siłę i wytrwałość — mieszanie bez zmęczenia, rozdrabnianie równo, trzymanie tempa przez kwadrans tak samo jak przez pierwszą minutę.",
        "Nie przejmuje natomiast decyzji i nie będę twierdzić, że przejmuje. Kto kupuje je z nadzieją, że zdejmie mu z głowy pytanie „co dziś ugotować”, będzie rozczarowany — to pytanie zostaje po stronie człowieka i żadna maszyna go nie odbierze.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Złocieńcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, która robota w Waszej kuchni jest najbardziej męcząca — od niej zacznę, bo tam różnicę widać najszybciej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Złocieńcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla złocienieckiej rodziny",
      paragraphs: [
        "Złocieniec leży nad Drawą, na Pojezierzu Drawskim, w powiecie drawskim, i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko dwanaście tysięcy mieszkańców na trzydziestu dwóch i trzech dziesiątych kilometra kwadratowego — to jedno z najbardziej rozległych i najrzadziej zaludnionych miast regionu, sto trzydzieści metrów nad poziomem morza — a cała gmina ponad piętnaście tysięcy osób na dwustu osiemdziesięciu kilometrach kwadratowych. Najstarsza osada w tym miejscu sięga siódmego i szóstego wieku przed naszą erą, a lokacja miasta na prawie magdeburskim nastąpiła trzynastego grudnia 1333 roku za sprawą braci Hasso i Ludeke von Wedel. W 1838 roku uruchomiono tu przędzalnię z maszyną parową — według źródeł pierwszą na Pomorzu — której właścicielem był Ludwik Ferdynand Klatt, a w 1851 powstała fabryka włókiennicza Gruetzmachera. Linia kolejowa Runowo–Chojnice powstała w latach 1877–1878, pierwsza cegielnia ręczna ruszyła w 1885, a cegielnia napędzana parą w 1896. W gminie leży jezioro Wilczkowo: około trzystu hektarów powierzchni, dwadzieścia sześć metrów siedemdziesiąt w najgłębszym miejscu i blisko cztery kilometry długości.",
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

  districtsHeading: "Do których części Złocieńca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — a jest rozległe, ponad trzydzieści kilometrów kwadratowych — i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Złocieniec też przyjadę",
  nearbyParagraphs: [
    "Drawsko Pomorskie jest jedenaście kilometrów stąd, a Szczecinek, Koszalin i Wałcz mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Drawsko Pomorskie", "Szczecinek", "Koszalin", "Wałcz"],

  about: blokOMnie("do Złocieńca", "w Złocieńcu", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Złocieńca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Złocieniec w powiecie drawskim w województwie zachodniopomorskim.",
    },
    ...faqWspolne("w Złocieńcu"),
    {
      question: "W czym urządzenie robi realną różnicę, a w czym żadnej?",
      answer:
        "Ogromną tam, gdzie liczy się wytrwałość i równomierność: długie mieszanie, ucieranie, rozdrabnianie na jednolitą masę. Ręka po dziesiątej minucie zwalnia i dlatego wynik bywa nierówny — nie z braku umiejętności. Żadnej tam, gdzie chodzi o decyzję: co dodać, kiedy przestać, czy już wystarczy. Tego nie rozstrzygnie żadna maszyna.",
    },
    {
      question: "Co się traci, przechodząc z ręki na urządzenie?",
      answer:
        "Ciągłą informację z ręki. Kiedy mieszasz sama, wiesz w połowie ruchu, że ciasto zgęstniało — nie musisz tego sprawdzać. Maszyna tego nie mówi, więc kontrola przestaje być mimowolna i trzeba jej chcieć. Stąd rada odwrotna do odruchu: przy nowym daniu zaglądaj częściej, niż wydaje się potrzebne, a przy znanym możesz rzadziej.",
    },
  ],

  geo: { lat: 53.5326, lng: 16.0106 },
};
