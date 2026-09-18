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
 * GRABÓW NAD PROSNĄ — powiat ostrzeszowski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA (TERYT
 *   3018034 / 3018033 — różnica tylko w ostatniej
 *   cyfrze).
 * MIASTO: 1 899 mieszkańców (GUS 31.12.2024),
 *   2,58 km², gęstość 736,0 os./km².
 *   ⚠⚠⚠ POWIERZCHNIĘ PODAJĘ Z DOKŁADNOŚCIĄ DO SETNYCH.
 *   PRZY 2,6 km² ILORAZ DAJE 730,4, ROZBIEŻNOŚĆ 5,6.
 *   PRZY 2,58 km² ILORAZ DAJE 736,05 — ROZBIEŻNOŚĆ
 *   0,05. PODAJĘ 2,58 I GĘSTOŚĆ RAZEM.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   WYSOKOŚĆ: 219 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 7 706 osób, 123,8 km², gęstość
 *   62 os./km².
 *   ⚠ [ZW — 7 706 / 123,8 = 62,25. Różnica 0,25.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠⚠ LICZBY 7 992 ZE STRONY GMINY NIE UŻYWAM —
 *   pochodzi z 2012 r.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * LESISTOŚĆ GMINY: 22,6 %. PODAJĘ.
 * SOŁECTWA I OBRĘBY: 16 SOŁECTW i 16 OBRĘBÓW
 *   EWIDENCYJNYCH, przy 21 MIEJSCOWOŚCIACH.
 *   ⚠⚠⚠ TO RDZEŃ KĄTA — ale nie liczba, tylko SKŁAD:
 *   KOPEĆ i ZAWADY są sołectwami, a nie mają własnego
 *   obrębu; KAMOLA LAS i GRABÓW-MIASTO mają obręb,
 *   a nie są sołectwami.
 *   ⚠⚠ O GRABOWIE-MIEŚCIE MÓWIĘ WPROST, ŻE TO
 *   NATURALNE — miasto nie bywa sołectwem. INACZEJ
 *   FIGURA BYŁABY NIEUCZCIWA.
 *   ⚠⚠⚠ RÓŻNICY LICZB NIE ROBIĘ FIGURĄ — kąt
 *   „samorząd dzieli drobniej niż kataster" ZAJĘTY
 *   (Lwówek). TU LICZBY SĄ RÓWNE.
 *   MIEJSCOWOŚCI (część): Bukownica, Chlewo, Giżyce,
 *   Grabów-Pustkowie, Grabów-Wójtostwo, Kamola,
 *   Kamola Las, Kopeć, Marszałki, Palaty, Smolniki,
 *   Zawady.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 51,5061 / 18,1194.
 *
 * ⚠⚠ ODMIANA — ODMIENIA SIĘ TYLKO PIERWSZY CZŁON:
 *   D. do GRABOWA NAD PROSNĄ ·
 *   Ms. w GRABOWIE NAD PROSNĄ ·
 *   B. GRABÓW NAD PROSNĄ.
 *   ⚠⚠⚠ CZŁON „NAD PROSNĄ" NIE ODMIENIA SIĘ NIGDY —
 *   to wyrażenie przyimkowe. WSPOMINAM.
 *   ⚠ „Ó" RUCHOME WYPADA: Grabów → Grabowa.
 *   ⚠⚠ BŁĘDY: „do Grabówa", „w Grabowie nad Prosnej".
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — niepotwierdzony [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1264 R.
 *   — PRAWA MIEJSKIE: 20 SIERPNIA 1416 R., na prawie
 *     magdeburskim; przywilej wystawiono w WIŚLICY.
 *     ⚠⚠⚠ NADAWCY NIE WYMIENIAM Z IMIENIA —
 *     ZERO POSTACI POLITYCZNYCH. Miejsce wystawienia
 *     PODAJĘ, bo jest częścią faktu.
 *     ⚠⚠⚠ ODLEGŁOŚCI WIŚLICY NIE PODAJĘ — szacunek
 *     agenta, nie cytat [NP].
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠ RZEKI (poza Prosną w nazwie) I RATUSZA NIE
 *     USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ZGADZA SIĘ SUMA, NIE ZGADZA SIĘ
 *   SKŁAD:
 *   GMINA MA 16 SOŁECTW I 16 OBRĘBÓW EWIDENCYJNYCH.
 *   LICZBA JEST TA SAMA PO OBU STRONACH — A ZBIORY
 *   SĄ RÓŻNE.
 *   KOPEĆ i ZAWADY są sołectwami bez własnego obrębu.
 *   KAMOLA LAS i GRABÓW-MIASTO mają obręb, a sołectwem
 *   nie są (w przypadku miasta to zresztą naturalne).
 *   RÓWNA LICZBA PO OBU STRONACH NIE ZNACZY, ŻE PO
 *   OBU STRONACH SĄ TE SAME RZECZY.
 *   ⚠⚠ NIE TWIERDZĘ, DLACZEGO TAK JEST — nie ustalono.
 *
 * KĄT: ZGADZA SIĘ SUMA, NIE ZGADZA SIĘ SKŁAD
 * — o tym, że policzona liczba pozycji niczego nie
 * sprawdza. Kąt z Grabowa: szesnaście i szesnaście,
 * a to nie te same szesnaście.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że sołectw jest szesnaście i obrębów szesnaście,
 *   ale to nie są te same jednostki; że Kopeć i Zawady
 *   są sołectwami bez obrębu, a Kamola Las obrębem bez
 *   sołectwa. TO JEST RDZEŃ,
 * — że w przypadku samego miasta brak sołectwa jest
 *   naturalny i nie udaję, że to zagadka,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: dwanaście rzeczy
 *   na liście i dwanaście w koszyku, a i tak czegoś
 *   brakuje, bo dwie są nie te,
 * — ⚠⚠ ŻE LICZENIE SZTUK DAJE FAŁSZYWE POCZUCIE
 *   SPRAWDZENIA,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: odhaczać pozycje, nie liczyć
 *   sztuk. Sprawdzenie zajmuje tyle samo, a wyłapuje
 *   podmianę,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie wszystko trzeba
 *   sprawdzać co do pozycji. Przy sześciu rzeczach
 *   liczenie wystarczy; dopiero przy dużych zakupach
 *   zaczyna się rozjeżdżać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: waga w urządzeniu pokazuje
 *   sumę, nigdy skład. Zważy dokładnie także to,
 *   co wsypaliście przez pomyłkę.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SAMORZĄD DZIELI DROBNIEJ NIŻ KATASTER —
 *   kąt zajęty (Lwówek). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam LICZBY BYŁY
 *   RÓŻNE; tu są RÓWNE, a różni się zawartość.
 *   JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO CZTERY REJESTRY, CZTERY LICZBY — kąt
 *   zajęty (Kleczew). ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠ ZERO PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ GŁOS —
 *   kąt zajęty (Gołańcz).
 * — ⚠⚠ ZERO LICZBA NIEZGODNA SAMA ZE SOBĄ — kąt zajęty
 *   (Rychwał). Tam liczba BYŁA BŁĘDNA; tu obie są
 *   poprawne.
 * — ⚠⚠ ZERO JEDNO POLE TO ZA MAŁO — kąt zajęty
 *   (Osieczna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK. ⚠⚠⚠ KĄT DOTYCZY ZAKUPÓW —
 *   NIE WYMIENIAM ŻADNEGO SKLEPU ANI SIECI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni 2,6 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby ludności ze strony gminy.
 * — NIE PODAJĘ, dlaczego zbiory się nie pokrywają.
 * — NIE WYMIENIAM nadawcy praw miejskich.
 * — NIE PODAJĘ odległości do Wiślicy.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE PODAJĘ największej wsi.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Grabów nad Prosną leży w powiecie ostrzeszowskim,
 *   liczy 1 899 mieszkańców (GUS, 31.12.2024)
 *   na 2,58 km², czyli 736 osób na kilometr kwadratowy,
 *   i leży 219 m n.p.m.,
 * — cała gmina miejsko-wiejska to 7 706 osób
 *   na 123,8 km², czyli 62 osoby na kilometr
 *   kwadratowy, przy lesistości 22,6 %,
 * — gmina ma 16 sołectw, 16 obrębów ewidencyjnych
 *   i 21 miejscowości; Kopeć i Zawady są sołectwami
 *   bez własnego obrębu, a Kamola Las i Grabów-Miasto
 *   obrębami, które sołectwami nie są,
 * — pierwsza wzmianka pochodzi z 1264 r., a prawa
 *   miejskie na prawie magdeburskim miasto otrzymało
 *   20 sierpnia 1416 r. przywilejem wystawionym
 *   w Wiślicy,
 * — w gminie leżą m.in. Bukownica, Chlewo, Giżyce,
 *   Grabów-Pustkowie, Grabów-Wójtostwo, Kamola,
 *   Kamola Las, Marszałki, Palaty i Smolniki.
 */
export const GRABOW_NAD_PROSNA: CityContent = {
  slug: "grabow-nad-prosna",
  h1: "Thermomix Grabów nad Prosną – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Grabów nad Prosną — cena",
  seoDescription:
    "Thermomix w Grabowie nad Prosną w powiecie ostrzeszowskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Grabów nad Prosną — prezentacja u Ciebie",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Grabowie nad Prosną. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Grabowa nad Prosną w powiecie ostrzeszowskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich szesnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Grabów nad Prosną"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Szesnaście i szesnaście — a to nie te same szesnaście.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Grabowie nad Prosną – jak wygląda prezentacja?",
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
      id: "suma-i-sklad",
      heading: "Zgadza się suma, nie zgadza się skład",
      paragraphs: [
        "Gmina Grabów nad Prosną ma szesnaście sołectw. Obrębów ewidencyjnych ma też szesnaście. Liczba jest ta sama po obu stronach — a zbiory są różne.",
        "Kopeć i Zawady są sołectwami i nie mają własnego obrębu. Kamola Las i Grabów-Miasto mają obręb, a sołectwami nie są. W przypadku samego miasta to zresztą naturalne i nie będę udawać, że to zagadka — miasto po prostu nie bywa sołectwem. Ale reszta układa się tak, że równa liczba po obu stronach nie znaczy, że po obu stronach są te same rzeczy.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o gminie, w której samorząd dzieli teren na więcej części niż kataster — tam różniły się liczby i od razu było widać, że coś się nie zgadza. Tutaj liczby są równe i właśnie dlatego nic nie rzuca się w oczy. I drugie rozróżnienie: pisałam też o mieście, dla którego cztery rejestry podawały cztery różne liczby; tu rejestry podają tę samą i obie są poprawne.",
        "Piszę o tym, bo w kuchni sprawdzamy sumy zamiast pozycji i potem się dziwimy.",
        "Na liście zakupów jest dwanaście rzeczy. W koszyku też dwanaście. Wszystko się zgadza — a w domu okazuje się, że dwóch rzeczy brakuje, bo dwie inne wskoczyły zamiast nich. Nie pomyliliście się w liczeniu. Pomyliliście się w tym, co liczyliście.",
        "To samo dzieje się przy planowaniu tygodnia. Pięć obiadów zaplanowanych, pięć kompletów produktów kupionych — a w czwartek brakuje jednej rzeczy, bo wchodziła w dwa dania naraz i policzyliście ją raz.",
        "Ruch jest jeden i nie zajmuje ani sekundy więcej: odhaczać pozycje zamiast liczyć sztuki. Palcem po liście, nazwa po nazwie. Ta sama czynność, ale wyłapuje podmianę, której liczenie nigdy nie wyłapie.",
        "Uczciwie o drugiej stronie, bo to nie jest reguła na wszystko. Przy sześciu rzeczach liczenie w zupełności wystarcza i nie ma sensu robić z zakupów inwentaryzacji. Rozjeżdżać zaczyna się dopiero przy dużych zakupach, przy liście pisanej przez dwie osoby i przy planowaniu na kilka dni naraz. Tam warto, wcześniej szkoda czasu.",
        "I uczciwie o sprzęcie, bo tu jest dokładnie ta sama pułapka. Waga w Thermomixie pokazuje sumę, nigdy skład. Zważy co do grama także to, co wsypaliście przez pomyłkę, i nie mrugnie okiem. Precyzja dotyczy ilości, nie tego, czy sięgnęliście po właściwy pojemnik — i wolę powiedzieć to wprost.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Grabowie nad Prosną?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Grabowie nad Prosną"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Grabowa nad Prosną",
      paragraphs: [
        "Grabów nad Prosną leży w powiecie ostrzeszowskim, liczy 1 899 mieszkańców (GUS, 31.12.2024) na dwóch i pięćdziesięciu ośmiu setnych kilometra kwadratowego, czyli siedemset trzydzieści sześć osób na kilometr kwadratowy, i leży dwieście dziewiętnaście metrów nad poziomem morza; powierzchnię podaję z dokładnością do setnych, bo tylko z nią gęstość się domyka. Cała gmina miejsko-wiejska to 7 706 osób na stu dwudziestu trzech i ośmiu dziesiątych kilometra kwadratowego, czyli sześćdziesiąt dwie osoby na kilometr, przy lesistości dwudziestu dwóch i sześciu dziesiątych procenta. Ma szesnaście sołectw, szesnaście obrębów ewidencyjnych i dwadzieścia jeden miejscowości. Pierwsza wzmianka pochodzi z 1264 roku, a prawa miejskie na prawie magdeburskim miasto otrzymało 20 sierpnia 1416 — przywilej wystawiono w Wiślicy, a więc daleko stąd.",
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

  districtsHeading: "Do których części gminy Grabów nad Prosną dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich szesnastu sołectw w gminie. Nazywają się między innymi: Bukownica, Chlewo, Giżyce, Grabów-Pustkowie, Grabów-Wójtostwo, Kamola, Kamola Las, Kopeć, Marszałki, Palaty, Smolniki i Zawady. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa: w gminie są osobno Grabów-Pustkowie i Grabów-Wójtostwo, czyli dwie miejscowości z członem „Grabów”, które nie są miastem, a także osobno Kamola i Kamola Las — przy umawianiu warto podać pełną nazwę. Druga, językowa: odmienia się tylko pierwszy człon, więc mówi się „do Grabowa nad Prosną” i „w Grabowie nad Prosną”, nigdy „nad Prosnej”. I uwaga na „ó”: wypada z odmiany, czyli „do Grabowa”, a nie „do Grabówa”.",
  ],
  districts: [],

  nearbyHeading: "Poza Grabów nad Prosną też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Ostrzeszowa, Mikstatu, Kępna, Ostrowa Wielkopolskiego, Odolanowa i Sycowa — wszędzie bezpłatnie, tak samo jak w samym Grabowie nad Prosną.",
  ],
  nearbyTowns: ["Ostrzeszów", "Mikstat", "Kępno", "Ostrów Wielkopolski", "Odolanów", "Syców"],

  about: blokOMnie("do Grabowa nad Prosną", "w Grabowie nad Prosną i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Grabowa nad Prosną bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Adresowa: w gminie są osobno Grabów-Pustkowie i Grabów-Wójtostwo oraz Kamola i Kamola Las — warto podać pełną nazwę. Językowa: odmienia się tylko pierwszy człon, czyli „do Grabowa nad Prosną” i „w Grabowie nad Prosną”, nigdy „nad Prosnej”.",
    },
    ...faqWspolne("w Grabowie nad Prosną"),
    {
      question: "Wszystko odhaczam na liście zakupów, a w domu i tak czegoś brakuje. Dlaczego?",
      answer:
        "Najczęściej dlatego, że liczycie sztuki zamiast sprawdzać pozycje. Grabów nad Prosną jest tu dobrym obrazem: gmina ma szesnaście sołectw i szesnaście obrębów ewidencyjnych, ale to nie są te same jednostki — Kopeć i Zawady są sołectwami bez obrębu, a Kamola Las obrębem bez sołectwa. Równa liczba po obu stronach nie znaczy, że po obu stronach są te same rzeczy. W koszyku działa to identycznie: dwanaście na liście, dwanaście w koszyku, a dwie rzeczy są nie te. Ruch nie kosztuje ani sekundy więcej — palcem po liście, nazwa po nazwie, zamiast liczenia. Przy sześciu rzeczach nie ma to znaczenia; zaczyna mieć przy dużych zakupach i przy liście pisanej przez dwie osoby.",
    },
    {
      question: "Czy wbudowana waga zabezpiecza przed pomyłką?",
      answer:
        "Przed pomyłką w ilości — tak, i to bardzo dobrze, bo waży w trakcie i nie trzeba brudzić dodatkowych naczyń. Przed pomyłką w składzie — nie. Waga pokazuje sumę, nigdy skład: zważy co do grama także to, co wsypaliście przez pomyłkę, i nie da żadnego sygnału. To jest granica, której żadne urządzenie nie przekracza, i wolę o niej powiedzieć wprost, zamiast zostawiać wrażenie, że sprzęt pilnuje wszystkiego.",
    },
  ],

  geo: { lat: 51.5061, lng: 18.1194 },
};
