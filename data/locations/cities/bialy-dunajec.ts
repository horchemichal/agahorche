import type { CityContent } from "../city-content";
import {
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
 * BIAŁY DUNAJEC — gmina wiejska, powiat tatrzański. Najmniejsza
 * gmina powiatu: 6 828 mieszkańców (31.12.2024) na ok. 35,3 km².
 *
 * OŚ STRONY: PSTRĄG. To jedyna gmina Podhala z pstrągiem w herbie,
 * ma na to imprezę z dwudziestoma czterema edycjami i konkurs
 * kulinarny prowadzony przez koła gospodyń. Oś jest KULINARNA,
 * więc pasuje do serwisu o gotowaniu bez naciągania — i nie
 * koliduje z niczym w powiecie.
 *
 * ⚠️ HIPOTEZA „SYPIALNIA ZAKOPANEGO” ZOSTAŁA OBALONA DANYMI.
 * Zakładałam, że ludzie przenoszą się tu z Zakopanego przez ceny
 * mieszkań. Nieprawda: saldo migracji w 2024 r. wynosi −20,
 * a wzrost ludności w latach 2002–2024 to zaledwie +2,0%.
 * Gmina NIE GRANICZY z Zakopanem (graniczy z Poroninem, Szaflarami,
 * Bukowiną Tatrzańską i Czarnym Dunajcem). NIE BUDOWAĆ na tym strony.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — PSTRĄG W HERBIE GMINY. Rzeka Biały Dunajec: ok. 31 km, zlewnia
 *   224 km². Obowiązuje WYŁĄCZNIE wędkarstwo muchowe (sztuczna
 *   mucha), sezon 15.03–15.12,
 * — XXIV DZIEŃ PSTRĄGA, 23 sierpnia 2026 r., amfiteatr
 *   im. Władysława Trebuni-Tutki. Konkurs kulinarny, kategoria
 *   „Pstrąg tuczony”: I miejsce KGW Gliczarów Górny, II Nowe Bystre,
 *   III Sierockie. Zawody muchowe: I miejsce Marian Bogaczyk,
 *   największy pstrąg 46,2 cm (Robert Zyzik). W 2027 r. przypada
 *   jubileuszowa XXV edycja,
 * — GEN. ANDRZEJ GALICA, ur. 27.11.1873 w Białym Dunajcu, zm. 1945.
 *   W 1919 r. sformował w Nowym Targu pierwsze pułki strzelców
 *   podhalańskich i zaprojektował mundur łączący strój góralski
 *   z wojskowym. Patron Gminnego Ośrodka Kultury, tablica przy
 *   ul. Skupniowej, quest „Z Generałem Galicą po Białym Dunajcu”,
 * — ANDRZEJ SKUPIEŃ-FLOREK (ur. 1902) — gawędziarz, autor książki
 *   „Biały Dunajec – moja wieś rodzinna”, patron szkoły w Gliczarowie
 *   Górnym i koła Związku Podhalan w Ameryce Północnej,
 * — MIEJSCOWOŚCI (NSP 2021): Biały Dunajec 5 180 (siedziba,
 *   największa), Sierockie 652, Gliczarów Górny 631,
 *   Gliczarów Dolny 451, Leszczyny (brak danych),
 * — DEMOGRAFIA: 6 828 mieszkańców (31.12.2024), 193,3 os./km².
 *   PRZYROST NATURALNY DODATNI: +6 (0,88‰). Średni wiek 39,7 lat.
 *   Przeciętne mieszkanie 101,7 m², 30,0 m² na osobę,
 * — GOSPODARKA: 953 podmioty REGON (140 na 1000 mieszkańców).
 *   Struktura w samym Białym Dunajcu: zakwaterowanie i gastronomia
 *   27,7%, budownictwo 20,3%. Bezrobocie 8,1%. Zweryfikowany
 *   lokalny zakład: Tartak Usługowo-Handlowy Piszczór,
 * — KOLEJ: stacja Biały Dunajec przy ul. Jana Pawła II 254,
 *   linia nr 99 Chabówka–Zakopane. Do Zakopanego 10,1 km.
 *   Przez wieś przechodzi DK47 (zakopianka),
 * — SZKOŁA W GLICZAROWIE GÓRNYM na 1006 m n.p.m., założona w 1937 r.
 *   z inicjatywy Andrzeja Skupnia-Florka,
 * — POZOSTAŁE IMPREZY GOK: Parada Gazdowska (zima), Wielkanocna
 *   Kosołecka, Majówka Wędkarska, Wybory Nojświarniyjsyj Górolecki,
 *   Festyn Glycarowski, Festiwal Papieski, Konkurs Młodyk Toniecników.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WĄTKU LENINA. Lenin mieszkał w latach 1913–14 właśnie TUTAJ,
 *   w pensjonacie Teresy Skupień, a nie w Poroninie — ale temat
 *   muzeum i pomnika należy do strony Poronina (`poronin.ts`).
 *   Zostawiam JEDNO zdanie prostujące w sekcji o sąsiadach
 *   i ani słowa więcej, żeby strony się nie dublowały,
 * — TWIERDZENIA „NAJWYŻEJ POŁOŻONA SZKOŁA W POLSCE”. Sama szkoła
 *   pisze ostrożnie „jedna z najwyżej położonych”; konkurują Ząb
 *   i Sierockie. Podaję wysokość, nie superlatyw,
 * — LICZBY PAR POCIĄGÓW I CZASÓW PRZEJAZDU. Linia była
 *   modernizowana z zamknięciami — odsyłam do rozkładu,
 * — DANYCH O DOJAZDACH DO PRACY. Nie znalazłam,
 * — „DOMÓW ZA DOLARY”. Tradycja chicagowska jest potwierdzona
 *   (Koło nr 40 w ZPPA), ale liczb dla tej gminy nie ma,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak.
 *
 * PUŁAPKI:
 * — GEOTERMIA TO NIE TA GMINA. Odwierty i Termy Podhalańskie to
 *   Szaflary i Bańska Niżna. Strona gminy wspomina termy, ale leżą
 *   poza jej granicami,
 * — OSCYPEK, BRYNDZA I REDYKOŁKA są podhalańskie, nie białodunajeckie,
 * — GMINA NIE GRANICZY Z ZAKOPANEM (patrz wyżej),
 * — PSTRĄG POTOKOWY, nie tęczowy — to o nim mowa w herbie i w rzece.
 */

export const BIALY_DUNAJEC: CityContent = {
  slug: "bialy-dunajec",
  h1: "Thermomix Biały Dunajec – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Biały Dunajec — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Biały Dunajec: bezpłatna prezentacja TM7 u Ciebie w kuchni — Biały Dunajec, Sierockie, Gliczarów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Biały Dunajec — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Biały Dunajec. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Biały Dunajec przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich miejscowości gminy, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Biały Dunajec – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Białym Dunajcu, jak w Sierockiem czy w obu Gliczarowach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Gmina, która ma rybę w herbie",
      paragraphs: [
        "W herbie gminy Biały Dunajec pływa pstrąg potokowy. Nie jest to ozdobnik ani wymysł grafika — to jedyna gmina na Podhalu, która w ten sposób opisała samą siebie, i jedyna, w której z tego powodu odbywa się co roku impreza z numerem edycji dochodzącym już do dwudziestu czterech.",
        "Rzeka, od której gmina wzięła nazwę, ma trzydzieści jeden kilometrów i zlewnię ponad dwustu kilometrów kwadratowych. Obowiązuje na niej wyłącznie wędkarstwo muchowe — łowi się na sztuczną muchę, sezon trwa od połowy marca do połowy grudnia. To jest zasada, która sporo mówi o podejściu: nie chodzi o to, żeby złowić dużo, tylko żeby zrobić to trudniej.",
        "Dzień Pstrąga odbywa się w amfiteatrze imienia Władysława Trebuni-Tutki. I tu rzecz, która mnie w tym najbardziej cieszy: obok zawodów wędkarskich rozgrywany jest konkurs kulinarny. W ostatniej edycji w kategorii „pstrąg tuczony” wygrało koło gospodyń z Gliczarowa Górnego, drugie było Nowe Bystre, trzecie Sierockie. Największa złowiona ryba mierzyła czterdzieści sześć i dwie dziesiąte centymetra.",
        "Piszę o tym z przyjemnością, bo na kilkudziesięciu stronach tego serwisu musiałam już wielokrotnie tłumaczyć, że w danej gminie nie ma udokumentowanej potrawy lokalnej. Tutaj mam odwrotny problem: jest ryba, jest rzeka, jest konkurs i są nazwiska zwyciężczyń.",
        "Druga rzecz, którą warto o tej gminie wiedzieć, jest zupełnie innego rodzaju. To tutaj, dwudziestego siódmego listopada tysiąc osiemset siedemdziesiątego trzeciego roku, urodził się generał Andrzej Galica — człowiek, który w tysiąc dziewięćset dziewiętnastym sformował w Nowym Targu pierwsze pułki strzelców podhalańskich i zaprojektował ich mundur, łączący strój góralski z wojskowym. Peleryna i kapelusz z piórem, po których do dziś rozpoznaje się tę formację, wyszły z głowy człowieka stąd.",
        "Poza tym jest to gmina spokojna i, co w tej okolicy rzadkie, z dodatnim przyrostem naturalnym. Średni wiek mieszkańca to niecałe czterdzieści lat, a przeciętne mieszkanie ma ponad sto metrów.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Biały Dunajec?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę miejscowości i uważaj na jedno: Gliczarów jest podwójny — Górny i Dolny. To dwie osobne wsie, a Gliczarów Górny leży wysoko, ponad tysiąc metrów nad poziomem morza. Zimą warto mnie o tym uprzedzić, żebym wyjechała odpowiednio wcześniej.",
        "Jeśli pracujesz w turystyce albo w budowlance — a to dwie największe branże w tej gminie — powiedz po prostu, kiedy masz spokojne dwie godziny. Przedpołudnie w dzień roboczy jest dla mnie równie normalne jak wieczór.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Biały Dunajec"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Sto metrów mieszkania i dodatni przyrost naturalny",
      paragraphs: [
        "Ta gmina ma dwie liczby, które w powiecie tatrzańskim wyglądają nietypowo. Pierwsza: przyrost naturalny jest dodatni. Niewielki, ale dodatni — a w sąsiednim Zakopanem zgonów jest niemal dwa razy więcej niż urodzeń. Druga: średni wiek mieszkańca to niecałe czterdzieści lat.",
        "Trzecia liczba dopełnia obrazu: przeciętne mieszkanie ma tu ponad sto metrów kwadratowych, a na osobę przypada trzydzieści. To nie są mieszkania — to domy. W praktyce oznacza to rodzinę pod jednym dachem, często wielopokoleniową, i obiad, do którego siada więcej osób, niż wynikałoby ze statystyki gospodarstwa domowego.",
        "Gotowanie dla takiego stołu ma inną skalę. To nie są dwie porcje, tylko garnek. I to jest właśnie ta sytuacja, w której najbardziej przeszkadza konieczność stania w kuchni — zwłaszcza gdy w domu jednocześnie ktoś prowadzi noclegi, ktoś inny wraca z budowy, a dzieci wracają ze szkoły o różnych porach.",
        "Praktycznie najbardziej przydaje się to, że danie jednogarnkowe gotuje się bez nikogo i samo się wyłącza. Wstawiasz i wychodzisz. Nie trzeba wracać co dziesięć minut zamieszać ani pilnować, żeby nie przywarło.",
        "Druga rzecz to gotowanie z zapasem — sensowne wszędzie, ale w domu, który przyjmuje gości sezonowo, wręcz konieczne. Zupy do zamrożenia, sosy, pasty kanapkowe, ciasto na pierogi, chleb. Seriami, w jednym naczyniu.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a w gminie z tak młodą strukturą wieku to całkiem realny scenariusz.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Pstrąg — i co z nim zrobić, a czego nie",
    paragraphs: [
      "Skoro gmina ma pstrąga w herbie, wypada zacząć od uczciwego postawienia sprawy: ryby Thermomix nie usmaży. Pstrąg z patelni albo z grilla, ze skórą chrupiącą po brzegach, powstaje na ogniu i tak zostanie. Żadne urządzenie tego nie zastąpi i nie będę twierdzić inaczej.",
      "Co potrafi? Ugotować go na parze — i to akurat wychodzi bardzo dobrze, bo ryba nie wysycha, a przyprawy zostają na miejscu. W koszu do gotowania na parze mieści się cała porcja, a pod spodem może się w tym samym czasie gotować ziemniak albo warzywa. To jest dokładnie ten rodzaj wykorzystania, o którym w folderach się nie pisze, bo nie wygląda efektownie.",
      "Reszta pstrąga to już czysta robota przygotowawcza, którą urządzenie przejmuje w całości. Masło ziołowe do środka ryby, sos koperkowy, sos chrzanowy, pasta z wędzonego pstrąga na kanapki, zupa rybna. Wszystko to jest siekanie, miksowanie i podgrzewanie w stałej temperaturze — czyli rzeczy, przy których stoi się najdłużej, a które najmniej wymagają umiejętności.",
      "Muszę dodać uczciwe zastrzeżenie, które powtarzam na każdej takiej stronie: nie znalazłam wpisu z gminy Biały Dunajec na ministerialnej Liście Produktów Tradycyjnych. Oscypek, bryndza podhalańska i redykołka mają unijną ochronę nazwy, ale obejmuje ona całe Podhale — to nie jest produkt tej gminy. Konkurs „pstrąg tuczony” to nagroda kół gospodyń, nie wpis prawny. Różnica jest realna i wolę ją nazwać.",
      "Za to jedna rzecz jest tu prawdziwie miejscowa i nie wymaga żadnego certyfikatu: ryba złowiona w rzece, która płynie za domem, na sztuczną muchę, w sezonie od marca do grudnia. Tego nie ma żadna sąsiednia gmina.",
    ],
  },

  districtsHeading: "Gdzie w gminie Biały Dunajec dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich miejscowości gminy, bez żadnej dopłaty za odległość: Białego Dunajca, Sierockiego, Gliczarowa Górnego, Gliczarowa Dolnego i Leszczyn.",
    "Sam Biały Dunajec liczy ponad pięć tysięcy mieszkańców, czyli około trzech czwartych gminy — siedziba jest tu zdecydowanie największa. Pozostałe wsie mają po kilkaset osób. Cała gmina to niecałe trzydzieści pięć i pół kilometra kwadratowego, najmniej w powiecie, a mieszka tu blisko siedem tysięcy osób.",
    "Gliczarów Górny leży wysoko — tamtejsza szkoła stoi na tysiąc sześciu metrach nad poziomem morza i jest opisywana jako jedna z najwyżej położonych w Polsce. Świadomie nie piszę „najwyżej”, bo konkurują z nią Ząb i Sierockie, a nikt tego formalnie nie rozstrzygnął. Szkołę założono w tysiąc dziewięćset trzydziestym siódmym roku z inicjatywy Andrzeja Skupnia-Florka, tutejszego gawędziarza.",
    "Dojazd jest tu wygodny jak na Podhale. Przez wieś przechodzi zakopianka, a na linii z Chabówki do Zakopanego działa stacja Biały Dunajec przy ulicy Jana Pawła II. Do Zakopanego jest stąd dziesięć kilometrów. Liczby połączeń i czasu przejazdu świadomie nie podaję — linia była modernizowana z zamknięciami, więc sprawdź aktualny rozkład.",
  ],
  districts: [
    "Biały Dunajec",
    "Sierockie",
    "Gliczarów Górny",
    "Gliczarów Dolny",
    "Leszczyny",
  ],

  nearbyHeading: "Poronin, Szaflary i Zakopane też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Poroninem, Szaflarami, Bukowiną Tatrzańską i Czarnym Dunajcem — z samym Zakopanem nie, choć leży od niego dziesięć kilometrów. Do wszystkich tych gmin dojeżdżam bez dopłaty.",
    "Jedna ciekawostka na koniec, którą warto sprostować, bo krąży w błędnej wersji: Lenin, mieszkając na Podhalu w latach tysiąc dziewięćset trzynaście–czternaście, wynajmował dom właśnie w Białym Dunajcu, a do Poronina chodził po pocztę. Muzeum urządzono jednak w Poroninie i o tej dość zabawnej pomyłce piszę na tamtejszej stronie.",
  ],
  nearbyTowns: [
    "Poronin",
    "Szaflary",
    "Zakopane",
    "Bukowina Tatrzańska",
    "Czarny Dunajec",
    "Nowy Targ",
    "Kraków",
  ],

  about: blokOMnie("do gminy Biały Dunajec", "w powiecie tatrzańskim"),

  faq: [
    {
      question: "Czy w Thermomixie da się przyrządzić pstrąga?",
      answer:
        "Na parze tak i wychodzi dobrze — ryba nie wysycha, a pod spodem mogą się w tym samym czasie gotować ziemniaki. Usmażyć się nie da i mówię to wprost: pstrąg z patelni ze skórą chrupiącą po brzegach powstaje na ogniu. Urządzenie przejmuje za to całą robotę wokół: masło ziołowe, sos koperkowy, pastę z wędzonego pstrąga, zupę rybną.",
    },
    ...faqWspolne("w gminie Biały Dunajec"),
    {
      question: "Mieszkam w Gliczarowie Górnym, wysoko. Dojedziesz zimą?",
      answer:
        "Dojadę i bez dopłaty. Gliczarów Górny leży ponad tysiąc metrów nad poziomem morza, więc proszę tylko o uprzedzenie, jeśli podjazd bywa trudny — wtedy po prostu wyjeżdżam wcześniej. To teren górski i mam to policzone.",
    },
    {
      question: "Czy Biały Dunajec to część Zakopanego?",
      answer:
        "Nie, to osobna gmina w powiecie tatrzańskim i, co ciekawe, nie graniczy nawet bezpośrednio z Zakopanem — graniczy z Poroninem, Szaflarami, Bukowiną Tatrzańską i Czarnym Dunajcem. Do Zakopanego jest stąd około dziesięciu kilometrów. Dla umówienia prezentacji nie ma to znaczenia, dojeżdżam wszędzie.",
    },
  ],

  geo: { lat: 49.3583, lng: 19.9917 },
};
