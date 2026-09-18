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
 * LWÓWEK — powiat nowotomyski, woj. wielkopolskie.
 * ⚠⚠⚠ NIE MYLIĆ Z LWÓWKIEM ŚLĄSKIM (dolnośląskie).
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ LWÓWEK NIE MA.
 * MIASTO: 2 912 mieszkańców (GUS 31.12.2024), 3,2 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   921,5 os./km², iloraz daje 910,0. ROZBIEŻNOŚĆ
 *   11,5. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚĆ: 100 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 8 691 osób, 183,6 km², gęstość
 *   48 os./km².
 *   ⚠ [ZW — 8 691 / 183,6 = 47,3 → 48. Różnica 0,66.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NAJWIĘKSZA OBSZAROWO GMINA TEJ FALI.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 19 SOŁECTW i 28 MIEJSCOWOŚCI (GUS
 *   Vademecum). ⚠ LICZBA 19 POTWIERDZONA NIEZALEŻNIE
 *   przez starostwo: „Składa się z 19 sołectw oraz
 *   oddzielnie wyodrębnionej jednostki – miasta
 *   Lwówek". PODAJĘ OBIE.
 *   ⚠⚠⚠ EWIDENCJA PODAJE 18 OBRĘBÓW. TO RDZEŃ KĄTA.
 *   MIEJSCOWOŚCI: Brody, Bródki, Chmielinko, Grońsko,
 *   Grudzianka, Józefowo, Komorowice, Komorowo,
 *   Konin, Krzywy Las, Linie, Lipka Wielka, Marszewo,
 *   Mokre Ogrody, Pakosław, Paryżewo, Pawłówek,
 *   Posadowo, Posadówek, Tarnowiec, Władysławowo,
 *   Wymyślanka, Zębowo, Zębówko, Zgierzynka,
 *   Zygmuntowo.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * REZERWAT JEZIORA ZGIERZYNIECKIEGO: 92 ha,
 *   utworzony w 1967 r. PODAJĘ. ⚠⚠ PORÓWNANIA
 *   Z POWIERZCHNIĄ MIASTA NIE LICZĘ.
 * ⚠ GEO: 52,4480 / 16,1810 (miasto i gmina identyczne).
 *
 * ⚠⚠⚠ ODMIANA — RUCHOME „E" WYPADA:
 *   D. do LWÓWKA (⚠⚠⚠ nie „Lwóweka") ·
 *   Ms. w LWÓWKU (⚠⚠⚠ nie „Lwóweku", nie „Lwówce") ·
 *   N. Lwówkiem · C. Lwówkowi.
 *   ⚠ POTWIERDZENIA: „powierzchnia Lwówka", „gęstość
 *   zaludnienia Lwówka", „ile osób mieszka w Lwówku".
 *   ⚠⚠⚠ PRZYIMEK: „W LWÓWKU", NIE „WE LWÓWKU".
 *   Forma „we Lwówku" to kalka z „we Lwowie", gdzie
 *   „we" wymusza zbitka „lw-" przed spółgłoską.
 *   W „Lwówku" po „lw-" następuje samogłoska „ó",
 *   więc przyimek zostaje krótki. NAJSUBTELNIEJSZY
 *   BŁĄD TEJ FALI. WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠⚠ PRZYMIOTNIKA „LWÓWECKI" NIE UŻYWAM —
 *   jest WSPÓLNY dla obu Lwówków, a „POWIAT LWÓWECKI"
 *   OZNACZA WYŁĄCZNIE JEDNOSTKĘ DOLNOŚLĄSKĄ.
 *   Lwówek wielkopolski leży w POWIECIE NOWOTOMYSKIM.
 *   MÓWIĘ TO WPROST I UŻYWAM FORM OPISOWYCH.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — NAJGROŹNIEJSZE W CAŁEJ FALI:
 *   — ⚠⚠⚠ LWÓWEK ŚLĄSKI — dolnośląskie, siedziba
 *     powiatu lwóweckiego. WSPOMINAM OBOWIĄZKOWO.
 *     ⚠⚠⚠ LICZB LWÓWKA ŚLĄSKIEGO NIE PODAJĘ
 *     I NIE PORÓWNUJĘ — figury porównawcze między
 *     miastami mam zajęte (Stęszew). WYMIENIAM SAMĄ
 *     NAZWĘ I WOJEWÓDZTWO.
 *     ⚠⚠ NAZWĘ „GOŁĄ", bez członu odróżniającego,
 *     NOSI TEN WIELKOPOLSKI — dlatego dopowiedzenie
 *     powiatu jest tu obowiązkowe.
 *   — ⚠⚠⚠ WIEŚ KONIN W GMINIE LWÓWEK — nazwa
 *     identyczna z Koninem, miastem na prawach powiatu
 *     w tym samym województwie. Od tej wsi nazwane jest
 *     też JEZIORO KONIŃSKIE w gminie Lwówek, NIEMAJĄCE
 *     NIC WSPÓLNEGO z jeziorami pod Koninem.
 *     ⚠⚠⚠ PUŁAPKA NAJWYŻSZEGO RYZYKA. WSPOMINAM.
 *   — ⚠⚠ WIEŚ PAKOSŁAW W GMINIE LWÓWEK — a gmina
 *     PAKOSŁAW leży w powiecie rawickim, czyli
 *     powiecie Miejskiej Górki z tej samej fali.
 *     WSPOMINAM.
 *   — PARY ZDROBNIENIOWE: Brody/Bródki,
 *     Komorowo/Komorowice, Posadowo/Posadówek,
 *     Zębowo/Zębówko.
 *     ⚠⚠⚠ FIGURY Z TYCH PAR NIE ROBIĘ — kąt „trzy
 *     pary, trzy kryteria" ZAJĘTY (Kobylin, ta sama
 *     fala). WYMIENIAM JAKO PUŁAPKI ADRESOWE.
 *
 * ⚠⚠ DATY:
 *   — ZAŁOŻENIE: 1406 R. · PRAWA MIEJSKIE: 1414 R.
 *     ⚠ Rok 1414 potwierdzony niezależnie przez
 *     starostwo. ODSTĘP 8 LAT — najkrótszy w tej fali.
 *     PODAJĘ OBIE DATY. ⚠⚠ RÓŻNICY NIE ROBIĘ FIGURĄ.
 *   — REZERWAT: 1967 R., 92 ha.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠ NADAWCY PRAW, RZEKI I LESISTOŚCI NIE USTALONO
 *     [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SAMORZĄD DZIELI DROBNIEJ
 *   NIŻ KATASTER:
 *   GMINA LWÓWEK MA 19 SOŁECTW PRZY 18 OBRĘBACH
 *   EWIDENCYJNYCH.
 *   SOŁECTWO to jednostka pomocnicza samorządu —
 *   ma sołtysa i zebranie. OBRĘB EWIDENCYJNY to
 *   jednostka katastru nieruchomości.
 *   TU SAMORZĄD DZIELI GMINĘ NA WIĘCEJ CZĘŚCI NIŻ
 *   KATASTER: co najmniej dwa sołectwa mieszczą się
 *   w jednym obrębie albo jedno sołectwo przecina
 *   granicę obrębu.
 *   FAKT DOPEŁNIAJĄCY: starostwo pisze o „19 sołectwach
 *   ORAZ oddzielnie wyodrębnionej jednostce — mieście
 *   Lwówek", czyli JEDNOSTEK POMOCNICZYCH JEST
 *   DWADZIEŚCIA, ale jedna z nich NIE JEST SOŁECTWEM
 *   I NIE MA SOŁTYSA.
 *   ⚠⚠⚠ PORÓWNANIA Z MARGONINEM (11 sołectw,
 *   14 obrębów — proporcja odwrotna) NIE ROBIĘ
 *   RDZENIEM. MOGĘ WSPOMNIEĆ JEDNYM ZDANIEM,
 *   bo to ta sama fala i czytelnik może je zestawić.
 *
 * KĄT: SAMORZĄD DZIELI DROBNIEJ NIŻ KATASTER
 * — o tym, że sposób, w jaki porządkujemy kuchnię,
 * rzadko pokrywa się z tym, jak kuchnia jest zbudowana.
 * Kąt z Lwówka: 19 sołectw przy 18 obrębach
 * ewidencyjnych.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gmina ma 19 sołectw przy 18 obrębach
 *   ewidencyjnych, czyli samorząd dzieli ją drobniej
 *   niż kataster. TO JEST RDZEŃ,
 * — czym różni się sołectwo od obrębu,
 * — że jednostek pomocniczych jest w sumie dwadzieścia,
 *   ale jedna z nich, samo miasto, nie jest sołectwem,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: kategorie, według
 *   których myślimy o jedzeniu, nie pokrywają się
 *   z półkami, na których ono stoi,
 * — ⚠⚠ ŻE „ŚNIADANIOWE" LEŻY W TRZECH MIEJSCACH,
 *   a jedna szafka mieści rzeczy z czterech różnych
 *   kategorii,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wybierzcie, co wygrywa —
 *   albo przestawiacie rzeczy pod kategorie, albo
 *   zmieniacie kategorie pod półki. Obie drogi działają;
 *   nie działa tylko udawanie, że się pokrywają,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem po prostu się
 *   nie da, bo półka jest za wysoka albo za płytka.
 *   Wtedy zostaje trzecia droga: pogodzić się
 *   i podpisać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zajmuje miejsce
 *   na blacie i wymusza własny układ wokół siebie.
 *   To realny koszt, o którym warto pomyśleć przed
 *   zakupem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ GŁOS —
 *   kąt zajęty (Gołańcz). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło
 *   o LICZBĘ DECYDENTÓW; tu o to, że DWA PODZIAŁY
 *   TEGO SAMEGO TERENU SIĘ NIE POKRYWAJĄ.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO DWÓCH NIEZGODNYCH STANDARDÓW W JEDNYM
 *   BUDYNKU — kąt zajęty (Nowe Skalmierzyce). Tam
 *   dwa standardy były PRAWIE ZGODNE i dlatego bolały;
 *   tu dwa podziały są PO PROSTU INNE. ROZGRANICZAM
 *   DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO TRZECH PAR, TRZECH KRYTERIÓW — kąt zajęty
 *   (Kobylin, ta sama fala). DLATEGO PAR
 *   ZDROBNIENIOWYCH NIE ROBIĘ FIGURĄ.
 * — ⚠⚠⚠ ZERO CZTERECH REJESTRÓW, CZTERECH LICZB —
 *   kąt zajęty (Kleczew).
 * — ⚠⚠ ZERO CZTERECH NAROŻY, SZEŚCIU ULIC — kąt zajęty
 *   (Miejska Górka, ta sama fala).
 * — ⚠⚠ ZERO POŁĄCZONEGO W JEDEN UKŁAD — kąt zajęty
 *   (Ślesin).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   NAMAWIANIA NA REMONT.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ liczb Lwówka Śląskiego.
 * — NIE UŻYWAM przymiotnika „lwówecki".
 * — NIE PODAJĘ rzeki, lesistości ani nadawcy praw.
 * — NIE PODAJĘ największej wsi.
 * — NIE PORÓWNUJĘ powierzchni rezerwatu z miastem.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lwówek leży w powiecie nowotomyskim, liczy 2 912
 *   mieszkańców (GUS, 31.12.2024) na 3,2 km² i leży
 *   100 m n.p.m.,
 * — cała gmina miejsko-wiejska to 8 691 osób
 *   na 183,6 km², czyli 48 osób na kilometr
 *   kwadratowy,
 * — gmina ma 19 sołectw przy 18 obrębach
 *   ewidencyjnych i 28 miejscowościach; starostwo
 *   opisuje ją jako złożoną z 19 sołectw oraz
 *   oddzielnie wyodrębnionej jednostki — miasta
 *   Lwówek,
 * — miasto założono w 1406 r., a prawa miejskie
 *   otrzymało w 1414,
 * — rezerwat Jeziora Zgierzynieckiego ma 92 ha
 *   i utworzono go w 1967 r.,
 * — w gminie leżą m.in. Zębowo, Zębówko, Posadowo,
 *   Posadówek, Brody, Bródki, Komorowo, Komorowice,
 *   Grońsko, Chmielinko, Zgierzynka, a także wsie
 *   Konin i Pakosław,
 * — odrębne miasto Lwówek Śląski leży w województwie
 *   dolnośląskim.
 */
export const LWOWEK: CityContent = {
  slug: "lwowek",
  h1: "Thermomix Lwówek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lwówek — cena i prezentacja",
  seoDescription:
    "Thermomix w Lwówku w powiecie nowotomyskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lwówek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lwówku pod Nowym Tomyślem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lwówka w powiecie nowotomyskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dziewiętnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Lwówek"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dziewiętnaście sołectw, osiemnaście obrębów. Dwa podziały, jeden teren.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lwówku – jak wygląda prezentacja?",
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
      id: "dwa-podzialy",
      heading: "Samorząd dzieli drobniej niż kataster",
      paragraphs: [
        "Gmina Lwówek ma dziewiętnaście sołectw. Obrębów ewidencyjnych ma osiemnaście.",
        "To dwie zupełnie różne rzeczy. Sołectwo jest jednostką pomocniczą samorządu — ma sołtysa i zebranie wiejskie. Obręb ewidencyjny jest jednostką katastru nieruchomości i służy do prowadzenia ewidencji gruntów. Oba podziały dotyczą tego samego terenu, a nie pokrywają się: albo dwa sołectwa mieszczą się w jednym obrębie, albo któreś sołectwo przecina granicę obrębu.",
        "Starostwo dorzuca do tego jeszcze jeden szczegół: pisze o dziewiętnastu sołectwach „oraz oddzielnie wyodrębnionej jednostce — mieście Lwówek”. Jednostek pomocniczych jest więc dwadzieścia, tylko jedna z nich nie jest sołectwem i nie ma sołtysa.",
        "Piszę o tym, bo w kuchni mamy dokładnie dwa takie podziały i one też się nie pokrywają.",
        "Pierwszy to sposób, w jaki myślimy o jedzeniu: śniadaniowe, obiadowe, do pieczenia, na szybko, dla dziecka, na święta. Drugi to sposób, w jaki kuchnia jest zbudowana: ta szafka, ta półka, ta szuflada, ten blat, ta lodówka.",
        "I wtedy „śniadaniowe” leży w trzech miejscach, bo dżem jest w spiżarni, masło w lodówce, a chleb na blacie. A jedna szafka mieści rzeczy z czterech różnych kategorii, bo tylko ona była wolna.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, ilu ma być decydentów przy jednej decyzji. Tu chodzi o coś innego — nie o liczbę osób, tylko o dwa podziały jednego terenu, które nie chcą się nałożyć. I jeszcze jedno rozróżnienie: pisałam o dwóch standardach, które były prawie zgodne i dlatego bolały; tu dwa podziały są po prostu inne i nikt nie próbuje ich zgrać.",
        "Ruch jest jeden i polega na wyborze, który podział wygrywa. Albo przestawiacie rzeczy tak, żeby pasowały do kategorii w głowie — wszystko śniadaniowe razem, choćby to znaczyło przenieść dżem do lodówki. Albo zmieniacie kategorie tak, żeby pasowały do półek — „to, co w tej szafce” staje się kategorią samo w sobie. Obie drogi działają. Nie działa tylko trzecia: udawanie, że podziały się pokrywają, i szukanie za każdym razem od nowa.",
        "Uczciwie o drugiej stronie, bo czasem po prostu się nie da. Półka bywa za wysoka dla dziecka, za płytka na garnki, a lodówka ma tyle miejsca, ile ma. Wtedy zostaje trzecia droga, całkiem godna: pogodzić się i podpisać. Kartka na drzwiach szafki załatwia sprawę, której nie załatwi żadne przestawianie.",
        "I uczciwie o sprzęcie, bo to jest realny koszt. Thermomix zajmuje miejsce na blacie i wymusza własny układ wokół siebie — musi mieć gniazdko, przestrzeń nad sobą i coś, na czym postawi się naczynie po. Jeśli w Waszej kuchni blat jest wąskim gardłem, to jest argument przeciwko zakupowi i wolę go powiedzieć wprost.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lwówku?",
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
    sekcjaCena("w Lwówku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Lwówka",
      paragraphs: [
        "Lwówek leży w powiecie nowotomyskim, liczy 2 912 mieszkańców (GUS, 31.12.2024) na 3,2 kilometra kwadratowego i leży sto metrów nad poziomem morza; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 8 691 osób na 183,6 kilometra kwadratowego, czyli czterdzieści osiem osób na kilometr — to największa obszarowo gmina, o jakiej pisałam w tej okolicy. Ma dziewiętnaście sołectw przy osiemnastu obrębach ewidencyjnych i dwadzieścia osiem miejscowości. Miasto założono w 1406 roku, a prawa miejskie otrzymało w 1414 — osiem lat później. Rezerwat Jeziora Zgierzynieckiego ma dziewięćdziesiąt dwa hektary i utworzono go w 1967 roku. W gminie leżą między innymi Zębowo, Zębówko, Posadowo, Posadówek, Brody, Bródki, Komorowo, Komorowice, Grońsko, Chmielinko i Zgierzynka.",
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

  districtsHeading: "Do których części Lwówka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziewiętnastu sołectw w gminie. Nazywają się między innymi: Zębowo, Zębówko, Posadowo, Posadówek, Brody, Bródki, Komorowo, Komorowice, Grońsko, Chmielinko, Zgierzynka, Konin i Pakosław. Wszędzie bez dopłaty.",
    "Trzy uwagi, bo to nazwa z kilkoma pułapkami naraz. Pierwsza: Lwówek Śląski to inne miasto, w województwie dolnośląskim — a ponieważ nazwę bez członu odróżniającego nosi właśnie ten wielkopolski, przy umawianiu warto powiedzieć „Lwówek w powiecie nowotomyskim”. Przymiotnika „lwówecki” świadomie nie używam, bo jest wspólny dla obu, a „powiat lwówecki” oznacza wyłącznie jednostkę dolnośląską. Druga, językowa: „e” wypada z odmiany — mówi się „do Lwówka” i „w Lwówku”, nie „do Lwóweka”; i uwaga na przyimek, bo poprawnie jest „w Lwówku”, a nie „we Lwówku” — ta druga forma to kalka z „we Lwowie”. Trzecia, praktyczna: w gminie leży wieś Konin, o nazwie identycznej z miastem na prawach powiatu w tym samym województwie, a także wieś Pakosław, której nazwę nosi też gmina w powiecie rawickim.",
  ],
  districts: [],

  nearbyHeading: "Poza Lwówek też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Nowego Tomyśla, Pniew, Opalenicy, Grodziska Wielkopolskiego, Międzychodu i Sierakowa — wszędzie bezpłatnie, tak samo jak w samym Lwówku.",
  ],
  nearbyTowns: ["Nowy Tomyśl", "Pniewy", "Opalenica", "Grodzisk Wielkopolski", "Międzychód", "Sieraków"],

  about: blokOMnie("do Lwówka", "w Lwówku i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lwówka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziewiętnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Trzy uwagi, bo nazwa ma kilka pułapek. Lwówek Śląski to inne miasto w dolnośląskim, a nazwę bez członu odróżniającego nosi właśnie ten wielkopolski — warto więc mówić „Lwówek w powiecie nowotomyskim”; przymiotnika „lwówecki” nie używam, bo „powiat lwówecki” oznacza wyłącznie jednostkę dolnośląską. Językowo: „e” wypada z odmiany, więc „do Lwówka” i „w Lwówku”, a nie „do Lwóweka” — i poprawnie jest „w Lwówku”, nie „we Lwówku”. Praktycznie: w gminie leży wieś Konin, o nazwie identycznej z miastem w tym samym województwie.",
    },
    ...faqWspolne("w Lwówku"),
    {
      question: "Porządkuję kuchnię i po tygodniu znowu nic nie mogę znaleźć. Co robię źle?",
      answer:
        "Prawdopodobnie próbujecie nałożyć na siebie dwa podziały, które się nie pokrywają. Lwówek jest tu dobrym obrazem: gmina ma dziewiętnaście sołectw przy osiemnastu obrębach ewidencyjnych, czyli samorząd dzieli ten sam teren drobniej niż kataster — oba podziały są poprawne i po prostu się nie nakładają. W kuchni pierwszym podziałem jest to, jak myślicie o jedzeniu (śniadaniowe, do pieczenia, dla dziecka), a drugim to, jak kuchnia jest zbudowana (ta szafka, ta półka, ta lodówka). Trzeba wybrać, który wygrywa: albo przestawiacie rzeczy pod kategorie, albo zmieniacie kategorie pod półki. Nie działa tylko udawanie, że to jedno i to samo. A jeśli się nie da — zostaje kartka na drzwiach szafki i to też jest dobre rozwiązanie.",
    },
    {
      question: "Ile miejsca zajmuje Thermomix i czy to problem?",
      answer:
        "Zajmuje stałe miejsce na blacie i to jest realny koszt, o którym wolę powiedzieć przed zakupem, a nie po. Potrzebuje gniazdka, przestrzeni nad sobą i czegoś, na czym postawi się naczynie po gotowaniu. Sprzęt chowany do szafki używany jest znacznie rzadziej niż stojący gotowy, więc „znajdzie się miejsce, jak będzie trzeba” zwykle nie działa. Jeśli w Waszej kuchni wąskim gardłem jest właśnie blat, to argument przeciwko zakupowi — i lepiej rozstrzygnąć to na spokojnie, jeszcze przed prezentacją.",
    },
  ],

  geo: { lat: 52.448, lng: 16.181 },
};
