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
 * LIPIANY — powiat pyrzycki, woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 766 mieszkańców (GUS 31.12.2024), 5,5 km²,
 * gęstość 679,8 os./km².
 * CAŁA GMINA: 5 413 osób, 94,9 km², 16 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,0003 / 14,9586.
 *   ⚠⚠ ŹRÓDŁEM JEST en.wikipedia — NIE POTWIERDZONE
 *   DRUGIM ŹRÓDŁEM. Wartości mieszczą się w granicach
 *   powiatu i zgadzają z położeniem miasta.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 *
 * ⭐ ODMIANA — POTWIERDZONA W PWN: LIPIANY to PLURALE
 *   TANTUM. D. LIPIAN, Ms. W LIPIANACH,
 *   przym. LIPIAŃSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — hasło PWN jej
 *   nie podaje.
 * ⚠ HOMONIM: istnieją też Lipiany w woj. dolnośląskim.
 *   ROZGRANICZAM W FAQ.
 *
 * ⚠⚠⚠ POPRAWKA DO ZLECENIA: JEZIORO „WIERZCHLIN"
 *   NIE ISTNIEJE. Przy mieście leżą JEZIORO WĄDÓŁ
 *   (nazywane też Lipiańskim) i JEZIORO KOŚCIELNE.
 *   NIE UŻYWAM NAZWY „Wierzchlin" ANI RAZU.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — IX w. — gród Pomorzan na półwyspie jeziora, część
 *   systemu obronnego plemienia Pyrzyczan.
 *   ⚠ WYMIENIAM JAKO OSADĘ, bez wątku obronnego.
 * — LATA 80. XIII W. — lokacja miasta.
 *   ⚠ ŹRÓDŁO PODAJE DEKADĘ, NIE ROK. Piszę „w latach
 *   osiemdziesiątych XIII wieku".
 * — 1. połowa XIV w. — ukształtowanie rady miejskiej.
 * — ⚠⚠⚠ RDZEŃ KĄTA — MURY MIEJSKIE:
 *   — OBWÓD 1,6 KM, wysokość około 8 M,
 *   — GRUBOŚĆ U PODSTAWY 130–150 CM,
 *     A JUŻ NA WYSOKOŚCI JEDNEGO METRA OKOŁO 110 CM —
 *     MUR ZWĘŻA SIĘ KU GÓRZE,
 *   — OKOŁO 40 PROSTOKĄTNYCH BASZT ŁUPINOWYCH,
 *     trzykondygnacyjnych, ROZSTAWIONYCH CO 30–40 M,
 *   — DWIE BRAMY: PYRZYCKA 8 × 9 M i MYŚLIBORSKA 9 × 9 M,
 *   — materiał: kamień polny na zaprawie wapiennej,
 *     później nadbudowy ceglane; modernizacja
 *     na przełomie XV i XVI w.
 *   ⚠⚠ GRUBOŚĆ PODAJĘ JAKO ROZKŁAD OBCIĄŻENIA, NIE JAKO
 *   TEMAT SAM W SOBIE — „grubość" jest zajęta (Resko,
 *   poprzednia fala, o grubości dna naczynia).
 *   TAM CHODZI O BEZWŁADNOŚĆ CIEPLNĄ NACZYNIA;
 *   TUTAJ O NIERÓWNY ROZKŁAD WYSIŁKU. Rozgraniczam wprost.
 * — 1881 — połączenie kolejowe na linii Stargard–Kostrzyn.
 * — 1890 — fabryka rur i odlewnia żeliwa.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: gmina Lipiany MA
 *   WPIS — „lipiańskie piwo Zaczynaj", 17 marca 2017 r.
 *   ⚠⚠⚠ TO ALKOHOL. NIE UŻYWAM GO ANI RAZU I NIE
 *   PORUSZAM TEMATU LISTY NA TEJ STRONIE.
 *   ⚠⚠ Nie piszę też, że gmina nie ma produktu — ma.
 *   Po prostu ten temat nie występuje.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: WZMACNIAĆ TAM, GDZIE OBCIĄŻENIE — o rozkładaniu
 * wysiłku nierówno, świadomie i z premedytacją.
 * Kąt od lipiańskich murów: przy podstawie mają od stu
 * trzydziestu do stu pięćdziesięciu centymetrów, a już
 * metr wyżej około stu dziesięciu. Nikt nie budował
 * równo, bo równo byłoby głupio.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że mur ma 1,6 km obwodu i około ośmiu metrów
 *   wysokości, że przy podstawie jest grubszy o jakieś
 *   czterdzieści centymetrów niż metr wyżej, i że stoi
 *   w nim około czterdziestu baszt co trzydzieści
 *   do czterdziestu metrów,
 * — ŻE NIERÓWNOŚĆ NIE JEST NIEDBAŁOŚCIĄ, TYLKO RACHUNKIEM
 *   — to jest rdzeń. Materiał idzie tam, gdzie jest
 *   obciążenie, a nie równo po całości,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY ODWROTNIE I NAZYWAMY TO
 *   PORZĄDKIEM: staramy się, żeby każdy dzień wyglądał
 *   tak samo, każdy obiad był równie dobry i na wszystko
 *   starczyło tyle samo czasu,
 * — ⚠⚠ ŻE TO SIĘ NIE UDAJE Z POWODU, KTÓRY NIE MA NIC
 *   WSPÓLNEGO Z ORGANIZACJĄ: tygodnie po prostu nie są
 *   równe. Są dni, w których obiad ma szansę, i takie,
 *   w których nie ma jej wcale,
 * — ⚠⚠ ŻE ROZWIĄZANIE POLEGA NA ŚWIADOMEJ NIERÓWNOŚCI:
 *   wskazać z góry, które dni w tygodniu są „przy
 *   podstawie", i tam włożyć wysiłek — a w pozostałe
 *   odpuścić bez poczucia winy. ⚠⚠⚠ NIE PODAJĘ,
 *   KTÓRE TO MAJĄ BYĆ DNI ANI CO W NIE GOTOWAĆ,
 * — ⚠⚠ ŻE NAJTRUDNIEJSZA JEST DRUGA POŁOWA TEJ ZASADY,
 *   nie pierwsza: nie „gdzie się postarać", tylko
 *   „gdzie świadomie nie". Bez tej drugiej połowy
 *   pierwsza jest tylko dokładaniem sobie roboty,
 * — ⚠ UCZCIWIE, DRUGA STRONA: TEN PODZIAŁ TRZEBA UZGODNIĆ
 *   Z DOMOWNIKAMI. Nierówność ustalona po cichu przez
 *   jedną osobę jest po prostu rozczarowaniem
 *   dla pozostałych,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie wyrówna
 *   tygodnia i nie zrobi z każdego dnia niedzieli.
 *   Podnosi za to dolną granicę — czyli poprawia przede
 *   wszystkim te dni, w których obiad i tak miał być
 *   byle jaki. NIE PODNOSI GÓRNEJ i mówię to wprost.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GRUBOŚCI DNA NACZYNIA — kąt zajęty (Resko,
 *   poprzednia fala). Grubość muru używam WYŁĄCZNIE
 *   jako obrazu rozkładu obciążenia, ani razu nie
 *   przechodząc na naczynia. TWARDA GRANICA.
 * — ⚠⚠ ZERO NAJWĘŻSZEGO MIEJSCA — kąt zajęty (Darłowo).
 *   Tam chodzi o TO, CO BLOKUJE JEDEN OBIAD; TUTAJ
 *   o ROZKŁAD WYSIŁKU NA TYDZIEŃ.
 * — ⚠⚠ ZERO SUMOWANIA SIĘ DROBNYCH ZYSKÓW — kąt zajęty
 *   (Bobolice).
 * — ⚠⚠ ZERO PORY ROKU I SEZONU — kąty zajęte (Żywiec,
 *   Lesko).
 * — ⚠⚠ ZERO GODZINY POWROTU Z PRACY I RYTMU DNIA —
 *   kąty zajęte (Głogów Małopolski i inne).
 * — ⚠ ZERO GOTOWANIA NA ZAPAS — kąt zajęty (Stopnica).
 * — ⚠ ZERO ZWYKŁEGO DNIA BEZ OKAZJI — kąt zajęty
 *   (Miłakowo).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO WSKAZANIA KONKRETNYCH DNI TYGODNIA
 *   ANI KONKRETNYCH DAŃ.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ „odpuścić w któreś
 *   dni" nie może zamienić się w ocenę tego, co ktoś je.
 *   NIE OCENIAM ŻADNEGO POSIŁKU.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO PIWA I ZERO WPISU NA LISTĘ PRODUKTÓW
 *   TRADYCYJNYCH — alkohol. To jedyny produkt tej gminy
 *   na liście, więc temat listy nie pojawia się wcale.
 * — ⚠⚠ ZERO TRADYCJI WARZENIA OD 1369 R. — ten sam wątek.
 * — ⚠⚠ ZERO GRODU JAKO SYSTEMU OBRONNEGO I ZERO MURÓW
 *   JAKO TEMATU MILITARNEGO — opisuję je jako
 *   konstrukcję z wymiarami.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   MIASTA.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI.
 * — ⚠ ZERO MIĘDZYWOJENNEJ FUNKCJI KURORTU DLA
 *   MIESZKAŃCÓW BERLINA — wątek narodowościowy sprzed
 *   1945 r.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku lokacji — źródło podaje dekadę.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM nazwy „Wierzchlin" — takiego jeziora
 *   tu nie ma.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PORUSZAM tematu Listy Produktów Tradycyjnych.
 * — NIE WSKAZUJĘ KONKRETNYCH DNI ANI DAŃ.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lipiany leżą w powiecie pyrzyckim, między jeziorami
 *   Wądół i Kościelne; są miastem w gminie
 *   miejsko-wiejskiej i liczą 3 766 mieszkańców
 *   (GUS, 31.12.2024) na 5,5 km², a cała gmina 5 413 osób
 *   na 94,9 km² w 16 miejscowościach,
 * — w IX w. na półwyspie jeziora istniała osada Pomorzan,
 *   lokacja miasta nastąpiła w latach osiemdziesiątych
 *   XIII w., a rada miejska ukształtowała się w pierwszej
 *   połowie XIV w.,
 * — mury miejskie mają 1,6 km obwodu i około ośmiu metrów
 *   wysokości; przy podstawie liczą od 130 do 150 cm
 *   grubości, a już na wysokości jednego metra około
 *   110 cm. Stoi w nich około czterdziestu prostokątnych,
 *   trzykondygnacyjnych baszt łupinowych rozstawionych
 *   co trzydzieści do czterdziestu metrów, a dwie bramy —
 *   Pyrzycka i Myśliborska — mają odpowiednio 8 na 9
 *   i 9 na 9 metrów. Zbudowano je z kamienia polnego
 *   na zaprawie wapiennej, a nadbudowy ceglane dołożono
 *   przy modernizacji na przełomie XV i XVI w.,
 * — połączenie kolejowe na linii Stargard–Kostrzyn
 *   miasto otrzymało w 1881 r., a w 1890 powstała tu
 *   fabryka rur i odlewnia żeliwa.
 */
export const LIPIANY: CityContent = {
  slug: "lipiany",
  h1: "Thermomix Lipiany – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lipiany — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Lipianach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lipiany — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lipianach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lipian z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Lipiany"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mur jest grubszy tam, gdzie nosi więcej. Tydzień też nie musi być równy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lipianach – jak wygląda prezentacja?",
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
      id: "gdzie-obciazenie",
      heading: "Sto pięćdziesiąt u podstawy, sto dziesięć metr wyżej",
      paragraphs: [
        "Lipiańskie mury mają kilometr sześćset metrów obwodu i około ośmiu metrów wysokości. Stoi w nich około czterdziestu baszt, rozstawionych co trzydzieści do czterdziestu metrów.",
        "Ale najciekawsza liczba jest inna. Przy samej podstawie mur ma od stu trzydziestu do stu pięćdziesięciu centymetrów grubości — a już na wysokości jednego metra około stu dziesięciu. Zwęża się ku górze.",
        "Nikt nie budował tu równo, i nie dlatego, że zabrakło kamienia. Równo byłoby po prostu głupio: materiał idzie tam, gdzie jest obciążenie, a nie równomiernie po całości.",
        "W kuchni robimy odwrotnie i nazywamy to porządkiem.",
        "Staramy się, żeby każdy dzień wyglądał podobnie. Żeby każdy obiad był mniej więcej równie dobry. Żeby na wszystko starczyło tyle samo czasu i tyle samo uwagi.",
        "I to się nie udaje — ale nie z powodu, który sobie zwykle wmawiamy. Nie chodzi o brak organizacji ani o to, że ktoś się nie postarał. Chodzi o to, że tygodnie po prostu nie są równe. Są dni, w których obiad ma realną szansę, i są takie, w których nie ma jej żadnej, choćby wszystko zaplanować co do minuty.",
        "Rozwiązanie polega na świadomej nierówności. Wskazać z góry, które dni w tygodniu są „przy podstawie” — i tam włożyć wysiłek. A w pozostałe odpuścić, z premedytacją i bez poczucia winy.",
        "Nie napiszę, które to mają być dni ani co w nie gotować, bo to zależy od tego, jak wygląda Wasz tydzień, a nie mój.",
        "Napiszę za to, która połowa tej zasady jest trudniejsza, bo prawie zawsze wybiera się łatwiejszą. Łatwa jest ta pierwsza: gdzie się postarać. Trudna jest druga: gdzie świadomie nie. Bez tej drugiej całość zamienia się w zwykłe dokładanie sobie roboty — z planem, ale dalej dokładanie.",
        "I rzecz, którą trzeba powiedzieć uczciwie: taki podział trzeba uzgodnić z domownikami. Nierówność ustalona po cichu przez jedną osobę nie jest strategią, tylko rozczarowaniem dla wszystkich pozostałych, którzy o niczym nie wiedzieli.",
        "Na koniec o urządzeniu, bez obiecywania cudów. Ono nie wyrówna tygodnia i nie zrobi z każdego dnia niedzieli.",
        "Robi coś innego i warto wiedzieć co: podnosi dolną granicę. Poprawia przede wszystkim te dni, w których obiad i tak miał być byle jaki — bo w nich najbardziej liczy się to, że coś powstaje bez stania przy garnku. Górnej granicy nie podnosi i nie będę twierdzić, że podnosi.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lipianach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, który dzień tygodnia jest u Was najtrudniejszy — pod ten dzień dobiorę dania, a nie pod niedzielę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lipianach"),
    sekcjaRaty("w Lipianach"),
    {
      id: "rodzina",
      heading: "Thermomix dla lipiańskiej rodziny",
      paragraphs: [
        "Lipiany leżą w powiecie pyrzyckim, między jeziorami Wądół i Kościelne, i są miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad trzy i pół tysiąca mieszkańców na pięciu i pięciu dziesiątych kilometra kwadratowego, a cała gmina ponad pięć tysięcy osób na dziewięćdziesięciu pięciu kilometrach kwadratowych, w szesnastu miejscowościach. W dziewiątym wieku na półwyspie jeziora istniała osada Pomorzan; lokacja miasta nastąpiła w latach osiemdziesiątych trzynastego wieku, a rada miejska ukształtowała się w pierwszej połowie czternastego. Mury miejskie mają kilometr sześćset metrów obwodu i około ośmiu metrów wysokości: przy podstawie liczą od stu trzydziestu do stu pięćdziesięciu centymetrów grubości, a już na wysokości jednego metra około stu dziesięciu. Stoi w nich około czterdziestu prostokątnych, trzykondygnacyjnych baszt łupinowych rozstawionych co trzydzieści do czterdziestu metrów, a dwie bramy — Pyrzycka i Myśliborska — mają odpowiednio osiem na dziewięć i dziewięć na dziewięć metrów. Zbudowano je z kamienia polnego na zaprawie wapiennej, a nadbudowy ceglane dołożono przy modernizacji na przełomie piętnastego i szesnastego wieku. Połączenie kolejowe na linii ze Stargardu do Kostrzyna miasto otrzymało w 1881 roku, a w 1890 powstała tu fabryka rur i odlewnia żeliwa.",
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

  districtsHeading: "Do których części Lipian dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w obrębie dawnych murów i poza nimi — i do wszystkich szesnastu miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Lipiany też przyjadę",
  nearbyParagraphs: [
    "Pyrzyce i Myślibórz są tuż obok, a Barlinek i Szczecin mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pyrzyce", "Myślibórz", "Barlinek", "Szczecin"],

  about: blokOMnie("do Lipian", "w Lipianach", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lipian bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Lipiany w powiecie pyrzyckim w województwie zachodniopomorskim — miejscowość o tej samej nazwie jest też w dolnośląskiem.",
    },
    ...faqWspolne("w Lipianach"),
    {
      question: "Jak rozłożyć gotowanie na tydzień, żeby dało się je udźwignąć?",
      answer:
        "Nierówno i świadomie. Tygodnie po prostu nie są równe: są dni, w których obiad ma realną szansę, i takie, w których nie ma jej żadnej — i nie ma to nic wspólnego z organizacją. Wskażcie z góry, które dni są „przy podstawie”, i tam włóżcie wysiłek, a w pozostałe odpuśćcie bez poczucia winy. Trudniejsza jest zawsze ta druga połowa, nie pierwsza. I koniecznie uzgodnijcie ten podział z domownikami.",
    },
    {
      question: "Czy Thermomix wyrówna trudne dni z niedzielą?",
      answer:
        "Nie i nie będę tego obiecywać. Podnosi dolną granicę, nie górną — poprawia przede wszystkim te dni, w których obiad i tak miał być byle jaki, bo w nich najbardziej liczy się to, że coś powstaje bez stania przy garnku. Z niedzieli nie zrobi czegoś lepszego, niż zrobicie sami.",
    },
  ],

  geo: { lat: 53.0003, lng: 14.9586 },
};
