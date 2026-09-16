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
 * CHOSZCZNO — powiat choszczeński, woj. zachodniopomorskie,
 * Pojezierze Choszczeńskie. MIASTO W GMINIE
 * MIEJSKO-WIEJSKIEJ, siedziba powiatu.
 * MIASTO: 13 822 mieszkańców (GUS 31.12.2024), 9,6 km²,
 * gęstość 1 442,8 os./km² — NAJWYŻSZA Z TEJ FALI.
 * CAŁA GMINA: 20 038 osób, 246,3 km².
 * Gmina to 40,7 % ludności powiatu na 18,5 % jego
 * powierzchni.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,1693 / 15,4198.
 * ⚠ en.wikipedia podaje 14 831 za 31.12.2021 — różnica
 *   wynika z DATY, nie z metody. NIE PISZĘ o zawyżaniu.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI. D. CHOSZCZNA,
 *   Ms. W CHOSZCZNIE, przym. CHOSZCZEŃSKI,
 *   mieszkaniec CHOSZCZNIANIN/CHOSZCZNIANKA —
 *   potwierdzone w PWN.
 * ⚠ HOMONIMU BRAK, ale nazwa bywa mylona ze Szczecinem
 *   i Szczecinkiem w wyszukiwaniu — doprecyzowuję powiat.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1233 — cystersi uposażeni dobrami sięgającymi jezior
 *   Klukom i Sowno. ⚠ PODAJĘ JAKO DATĘ W CHRONOLOGII
 *   GRANIC WŁASNOŚCI, BEZ ROZWIJANIA WĄTKU WYZNANIOWEGO.
 * — 1237 — uposażenie ziemiami na wschód od jeziora
 *   Klukom. ⚠ JAK WYŻEJ.
 * — 1291 — LOKACJA MIASTA. ⚠ DRUGIE ŹRÓDŁO PODAJE
 *   OGÓLNIE „2. POŁOWA XIII W." — niesprzeczne,
 *   ale bez dokumentu z datą dzienną. Piszę „1291",
 *   bez dnia.
 * — MIASTO LOKACYJNE: 400 × 600 METRÓW.
 * — 1700 — hejnał miejski grywany z wieży kościelnej.
 * — 1847 — linia kolejowa.
 * — 1913 — fontanna z figurą żniwiarki.
 *
 * MURY MIEJSKIE — DANE UŻYTE:
 * — obwód ok. 1900 m (drugie źródło: 1800 m —
 *   ⚠ ROZBIEŻNOŚĆ ok. 5 %, PODAJĘ „blisko dwa kilometry",
 *   NIE PODAJĘ DWÓCH LICZB NARAZ),
 * — wysokość osiągnięta w XVI w.: 8 m (drugie źródło: 9 m
 *   — ⚠ PODAJĘ „osiem metrów", z zastrzeżeniem
 *   „według jednego ze źródeł"),
 * — największy zachowany fragment: ponad 300 m długości,
 *   do 5 m wysokości,
 * — ⚠ CZATOWNIE: OD 36 DO 41, prostokątnych i półkolistych,
 *   rozmieszczonych NIEREGULARNIE.
 *   ⚠⚠ NIE ROBIĘ Z TEGO KĄTA — „odstęp / przestrzeń
 *   między" jest zajęte (Kowalewo Pomorskie), a „nierówne
 *   pieczenie" (Zielonka). Podaję liczby w bloku
 *   faktograficznym, bez rozwijania w morał.
 * — 3 baszty narożne, 3 bramy: Kamienna, Wysoka, Młyńska,
 * — baszta przy przedbramiu: średnica 8,6 m, wysokość
 *   7,5 m, trzy kondygnacje.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEZIORO KLUKOM, W GRANICACH MIASTA:
 *   — powierzchnia 85,2 ha,
 *   — DŁUGOŚĆ MAKSYMALNA 2,42 KM,
 *   — SZEROKOŚĆ MAKSYMALNA 0,25 KM,
 *     czyli PROPORCJA BLISKO DZIESIĘĆ DO JEDNEGO,
 *   — GŁĘBOKOŚĆ MAKSYMALNA 17,9 M, ŚREDNIA 8,2 M,
 *   — objętość ok. 6 990,3 tys. m³,
 *   — jezioro rynnowe, przepływowe.
 *   ⚠⚠ GŁĘBOKOŚĆ MAKSYMALNĄ I ŚREDNIĄ PODAJĘ RAZ,
 *   W BLOKU FAKTOGRAFICZNYM — kąt „głębokość maksymalna
 *   kontra średnia" jest zajęty (Więcbork). W sekcji
 *   kątowej używam WYŁĄCZNIE proporcji długość:szerokość.
 *   ⚠ KLASY CZYSTOŚCI WODY NIE PODAJĘ — badanie z 2000 r.,
 *   dane sprzed ćwierćwiecza.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu dla Choszczna, gminy ani powiatu choszczeńskiego.
 *   NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: KSZTAŁT NACZYNIA — wąskie i głębokie kontra
 * szerokie i płaskie, przy tej samej objętości.
 * Kąt od jeziora Klukom: dwa i cztery dziesiąte kilometra
 * długości przy ćwierci kilometra szerokości. Ta sama woda
 * rozłożona inaczej zachowuje się inaczej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że jezioro Klukom leży w granicach miasta i ma
 *   2,42 km długości przy 0,25 km szerokości,
 * — ŻE OBJĘTOŚĆ NIE OPISUJE NACZYNIA — to jest rdzeń.
 *   Dwa naczynia mieszczące tyle samo mogą dawać zupełnie
 *   różny wynik, bo różnią się powierzchnią styku
 *   z powietrzem i wysokością słupa,
 * — ⚠⚠ ŻE Z TEGO WYNIKAJĄ TRZY PRAKTYCZNE RZECZY,
 *   PODANE JAKOŚCIOWO, BEZ ŻADNYCH LICZB:
 *   (1) szerokie i płaskie odparowuje szybciej,
 *       więc sos gęstnieje prędzej,
 *   (2) wąskie i wysokie trzyma płyn przy sobie,
 *       więc lepiej sprawdza się tam, gdzie płyn ma zostać,
 *   (3) w szerokim naczyniu kawałki leżą jedną warstwą
 *       i rumienią się; w wąskim leżą na sobie i puszczają
 *       wodę zamiast się rumienić — to jest ta jedna rzecz,
 *       która najczęściej psuje danie bez winy przepisu,
 * — ⚠⚠ ŻE TO TŁUMACZY CZĘSTĄ SYTUACJĘ: przepis wykonany
 *   dokładnie wychodzi inaczej niż u autora, bo naczynie
 *   było inne. Nikt tego w przepisie nie zapisuje,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TO URZĄDZENIE MA JEDEN
 *   KSZTAŁT NACZYNIA I NIE DA SIĘ GO ZMIENIĆ.
 *   To jest realne ograniczenie i mówię o nim wprost:
 *   dania, które mają się zrumienić jedną warstwą, robi się
 *   na patelni albo w piekarniku, nie w tym urządzeniu.
 *   Za to wszystko, co ma zostać w płynie i być mieszane,
 *   dzieje się w nim bez pilnowania.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GŁĘBOKOŚCI MAKSYMALNEJ KONTRA ŚREDNIEJ —
 *   kąt zajęty (Więcbork). ⚠⚠ TO JEST NAJBLIŻSZY KĄT
 *   I MATERIAŁ AŻ SIĘ PROSI. W sekcji kątowej NIE PADA
 *   ANI JEDNA GŁĘBOKOŚĆ. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO „ZA DUŻE NACZYNIE DO MAŁEJ PORCJI" —
 *   kąt zajęty (Żnin). Tam chodzi o WIELKOŚĆ naczynia
 *   wobec porcji; TUTAJ o KSZTAŁT przy tej samej
 *   objętości. Rozgraniczam wprost.
 * — ⚠⚠ ZERO POJEMNIKÓW DOBIERANYCH DO PORCJI —
 *   kąt zajęty (Nieszawa).
 * — ⚠⚠ ZERO FORMY DO CIASTA — kąt zajęty (Żelechów).
 * — ⚠ ZERO ODSTĘPU I PRZESTRZENI MIĘDZY — kąt zajęty
 *   (Kowalewo Pomorskie).
 * — ⚠ ZERO NIERÓWNEGO PIECZENIA — kąt zajęty (Zielonka).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH WYMIARÓW NACZYŃ W CENTYMETRACH — piszę
 *   wyłącznie jakościowo: szerokie/wąskie, płaskie/wysokie.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO OFLAGU II B — niemiecki obóz jeniecki
 *   działał w tym mieście. NIE WSPOMINAM.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO 22 LUTEGO 1945, ZERO WYMIANY LUDNOŚCI
 *   1945–1947, ZERO WYSIEDLEŃ.
 * — ⚠⚠ ZERO NIEMIECKIEJ NAZWY MIASTA. W materiałach
 *   historycznych pojawia się nieuchronnie; na stronie
 *   używam WYŁĄCZNIE nazwy Choszczno.
 * — ⚠⚠ ZERO ZAMKU KRZYŻACKIEGO Z LAT 1443–1445
 *   I ZERO HOŁDU LENNEGO Z 1433 R. — wątki władzy
 *   i podległości, bez wartości dla strony o gotowaniu.
 * — ⚠ ZERO WĄTKU ZAKONNEGO — daty 1233 i 1237 podaję
 *   wyłącznie jako granice własności ziemi przy jeziorze.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI I JEGO PRZYCZYN.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ dziennej daty lokacji — nie ma dokumentu.
 * — NIE PODAJĘ dwóch wartości obwodu murów naraz.
 * — NIE PODAJĘ klasy czystości wody — badanie z 2000 r.
 * — NIE PRZYPISUJĘ Choszcznu żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Choszczno leży na Pojezierzu Choszczeńskim, jest
 *   siedzibą powiatu i miastem w gminie miejsko-wiejskiej;
 *   liczy 13 822 mieszkańców (GUS, 31.12.2024) na 9,6 km²,
 *   a cała gmina 20 038 osób na 246,3 km² — to 40,7 %
 *   ludności powiatu na 18,5 % jego powierzchni,
 * — pierwsze uposażenia ziemią sięgającą jezior Klukom
 *   i Sowno pochodzą z 1233 i 1237 r., a lokacja miasta
 *   z 1291 r.,
 * — miasto lokacyjne miało 400 na 600 metrów,
 * — mury miejskie miały blisko dwa kilometry obwodu
 *   i osiągnęły w XVI w. osiem metrów wysokości; zachowany
 *   fragment ma ponad 300 m długości i do 5 m wysokości,
 *   a w murach było od 36 do 41 czatowni, trzy baszty
 *   narożne i trzy bramy: Kamienna, Wysoka i Młyńska;
 *   baszta przy przedbramiu ma 8,6 m średnicy, 7,5 m
 *   wysokości i trzy kondygnacje,
 * — jezioro Klukom leży w granicach miasta, ma 85,2 ha,
 *   2,42 km długości, 0,25 km szerokości, 17,9 m
 *   głębokości maksymalnej i 8,2 m średniej, a jego
 *   objętość to blisko siedem milionów metrów sześciennych,
 * — hejnał grywano z wieży kościelnej od 1700 r., kolej
 *   dotarła tu w 1847, a fontanna z figurą żniwiarki
 *   stanęła w 1913 r.
 */
export const CHOSZCZNO: CityContent = {
  slug: "choszczno",
  h1: "Thermomix Choszczno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Choszczno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Choszcznie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Choszczno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Choszcznie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Choszczna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Choszczno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ta sama ilość rozłożona inaczej zachowuje się inaczej — w jeziorze i w garnku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Choszcznie – jak wygląda prezentacja?",
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
      id: "ksztalt-naczynia",
      heading: "Jezioro Klukom, czyli kształt ma znaczenie",
      paragraphs: [
        "W granicach Choszczna leży jezioro Klukom. Ma dwa kilometry i czterysta dwadzieścia metrów długości przy dwustu pięćdziesięciu metrach szerokości — czyli jest blisko dziesięć razy dłuższe niż szersze. To jezioro rynnowe: woda wypełniła wąską bruzdę wyżłobioną przez lodowiec.",
        "Gdyby tę samą wodę rozlać na okrągłym, szerokim niecce, byłoby jej tyle samo — a jezioro byłoby zupełnie innym jeziorem. Inaczej by się nagrzewało, inaczej parowało, inaczej mieszało.",
        "Dokładnie to samo dzieje się w garnku i to jest najbardziej niedoceniana rzecz w gotowaniu.",
        "Objętość nie opisuje naczynia. Dwa garnki, w które wchodzi tyle samo, potrafią dać zupełnie różny wynik z tego samego przepisu — bo różnią się powierzchnią, którą zawartość styka się z powietrzem, i wysokością słupa, który trzeba przegrzać.",
        "W praktyce wychodzą z tego trzy rzeczy. Pierwsza: szerokie i płaskie odparowuje szybciej, więc sos gęstnieje wcześniej, a zupa robi się bardziej skoncentrowana. Druga: wąskie i wysokie trzyma płyn przy sobie, więc lepiej sprawdza się tam, gdzie płyn ma zostać — przy gotowaniu w wywarze albo pod przykryciem.",
        "Trzecia jest najważniejsza i psuje najwięcej dań. W szerokim naczyniu kawałki leżą jedną warstwą i mają gdzie się zrumienić. W wąskim leżą jedne na drugich, każdy puszcza wodę, woda nie ma jak odparować — i zamiast rumienienia dostajemy duszenie. Mięso, które miało być brązowe, jest szare, choć wszystko zrobiło się zgodnie z przepisem.",
        "I to jest właśnie wyjaśnienie sytuacji, którą zna chyba każdy: przepis wykonany co do joty wychodzi inaczej niż u osoby, która go podała. Zwykle nie chodzi o składniki ani o rękę. Chodzi o to, że naczynie było inne — a tego nikt w przepisie nie zapisuje, bo autorowi wydaje się oczywiste.",
        "Teraz uczciwie o tym urządzeniu, bo tu akurat mam do powiedzenia rzecz niewygodną. Ono ma jeden kształt naczynia i nie da się go zmienić. To jest realne ograniczenie, nie szczegół.",
        "Wniosek jest prosty i nie ma w nim żadnej magii: wszystko, co ma się zrumienić rozłożone jedną warstwą, robi się na patelni albo w piekarniku. Tego to urządzenie nie zrobi i nie będę udawać, że zrobi.",
        "Za to wszystko, co ma zostać w płynie i być przy tym mieszane — zupy, sosy, gulasze, kremy, masy — dzieje się w nim bez stania nad garnkiem, bo mieszanie i temperatura są utrzymywane same. To jest dokładnie ta połowa gotowania, w której kształt naczynia i tak nie miał nic do rzeczy.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Choszcznie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was ostatnio nie wyszło mimo trzymania się przepisu — całkiem często odpowiedź leży w naczyniu i da się to sprawdzić na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Choszcznie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla choszczeńskiej rodziny",
      paragraphs: [
        "Choszczno leży na Pojezierzu Choszczeńskim, jest siedzibą powiatu i miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko czternaście tysięcy mieszkańców na dziewięciu i sześciu dziesiątych kilometra kwadratowego, a cała gmina ponad dwadzieścia tysięcy osób na dwustu czterdziestu sześciu kilometrach kwadratowych — to czterdzieści procent ludności powiatu na niespełna jednej piątej jego powierzchni. Pierwsze uposażenia ziemią sięgającą jezior Klukom i Sowno pochodzą z 1233 i 1237 roku, a lokacja miasta z 1291. Miasto lokacyjne miało czterysta na sześćset metrów. Mury miejskie liczyły blisko dwa kilometry obwodu i osiągnęły w szesnastym wieku osiem metrów wysokości; zachowany fragment ma ponad trzysta metrów długości i do pięciu metrów wysokości, a w murach było od trzydziestu sześciu do czterdziestu jeden czatowni, trzy baszty narożne i trzy bramy — Kamienna, Wysoka i Młyńska. Baszta przy przedbramiu ma osiem metrów sześćdziesiąt średnicy, siedem i pół metra wysokości i trzy kondygnacje. Jezioro Klukom leży w granicach miasta: osiemdziesiąt pięć hektarów, dwa kilometry czterysta dwadzieścia metrów długości przy dwustu pięćdziesięciu metrach szerokości, siedemnaście metrów dziewięćdziesiąt w najgłębszym miejscu przy średniej ośmiu metrów dwudziestu, blisko siedem milionów metrów sześciennych wody. Hejnał grywano z wieży kościelnej od 1700 roku, kolej dotarła tu w 1847, a fontanna z figurą żniwiarki stanęła w 1913.",
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

  districtsHeading: "Do których części Choszczna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — także do części leżących nad jeziorem Klukom — i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Choszczno też przyjadę",
  nearbyParagraphs: [
    "Stargard, Barlinek, Szczecin i Gorzów Wielkopolski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Stargard", "Barlinek", "Szczecin", "Gorzów Wielkopolski"],

  about: blokOMnie("do Choszczna", "w Choszcznie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Choszczna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Choszczno, siedzibę powiatu choszczeńskiego w województwie zachodniopomorskim.",
    },
    ...faqWspolne("w Choszcznie"),
    {
      question: "Dlaczego to samo danie wychodzi inaczej niż u kogoś innego?",
      answer:
        "Bardzo często przez naczynie, a nie przez składniki. Objętość nie opisuje garnka: szerokie i płaskie odparowuje szybciej, więc sos gęstnieje wcześniej, a wąskie i wysokie trzyma płyn przy sobie. Najczęstszy przypadek to kawałki ułożone jedne na drugich — każdy puszcza wodę, woda nie ma jak odparować i zamiast rumienienia wychodzi duszenie. Nikt tego w przepisie nie zapisuje, bo autorowi wydaje się oczywiste.",
    },
    {
      question: "Czy w Thermomixie zrobię wszystko, co robię w garnku i na patelni?",
      answer:
        "Nie i wolę powiedzieć to wprost. Urządzenie ma jeden kształt naczynia, którego nie da się zmienić, więc dania, które mają zrumienić się rozłożone jedną warstwą, dalej robi się na patelni albo w piekarniku. Za to wszystko, co ma zostać w płynie i być mieszane — zupy, sosy, gulasze, kremy — dzieje się w nim bez stania nad garnkiem.",
    },
  ],

  geo: { lat: 53.1693, lng: 15.4198 },
};
