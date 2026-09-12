import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * SKÓRCZ — GMINA MIEJSKA w powiecie starogardzkim, na Kociewiu,
 * 3 422 mieszkańców (31.12.2024, GUS). Brief mówił 3 400 —
 * niemal trafiony. Powierzchnia zaledwie 3,6 km², 88 m n.p.m.
 *
 * PRAWA MIEJSKIE 15 MAJA 1934 r. — o status zabiegał burmistrz
 * Jan Grzankowski. Lokacja wsi na prawie chełmińskim
 * 25 LISTOPADA 1339 r.; pod władzą Zakonu od 1305 r.
 *
 * OBALONE: portal skorcz.jesttu.eu podaje rok 1926 i „pierwszą
 * wzmiankę z XVI w." — TO NIEPRAWDA i ten portal jest ogólnie
 * niewiarygodny (podaje też 10 km² powierzchni zamiast 3,6).
 *
 * OBALONE: „węzeł kolejowy" — urząd miasta wymienia WYŁĄCZNIE
 * drogi wojewódzkie 214 i 222, autostradę A1 (ok. 10 km)
 * i autobusy. Kolej nie występuje ani w opisie położenia,
 * ani w historii. NIE PISZĘ o Skórczu jako o czynnym węźle
 * kolejowym.
 *
 * POŁOŻENIE: północny skraj BORÓW TUCHOLSKICH, na pograniczu
 * z Pojezierzem Kociewskim, w dolinie rzeki SZORYCA (dopływ
 * Węgiermucy, dorzecze Wierzycy). NIE „w środku Borów".
 *
 * FAKT OSIOWY: STUDNIE ARTEZYJSKIE o uznanych walorach
 * smakowych; naturalne wypływy wód polodowcowych. Teren
 * podmokły uformowany przez lądolód. — UWAGA: kąt „TWARDA
 * WODA" jest już ZAJĘTY przez inne miasto, więc wody NIE robię
 * tematem. Wspominam studnie jednym zdaniem w bloku o mieście.
 *
 * ZABYTKI: gotycki kościół Wszystkich Świętych, drewniany dwór
 * z XIX w., układ urbanistyczny w rejestrze zabytków, grodzisko
 * Kranek. Po 1945 r. działał warsztat ceramiczny twórcy
 * ludowego A. Eichlera.
 *
 * GOSPODARKA: 398 z 415 podmiotów REGON to mikrofirmy do
 * 9 osób. Miasto bez dużego zakładu w swoich granicach.
 *
 * KĄT: ZIOŁA — świeże i suszone. Najtańszy składnik w kuchni
 * i jedyny, który rośnie na parapecie. Kąt pasuje do miasta
 * o powierzchni 3,6 km², złożonego z domów z ogródkami
 * i czterystu mikrofirm.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy ziołach urządzenie bywa ZA MOCNE i to jest jego
 *   wada, nie zaleta: bazylia i natka rozbite nożem robią się
 *   papką i ciemnieją,
 * — że delikatne zioła siecze się nożem i ja tak robię,
 * — co robi dobrze: pesto, masła ziołowe, zielone sosy,
 *   marynaty, ziołowe pasty, mielenie ziół suszonych,
 * — że różnica między ziołem świeżym a suszonym to nie jest
 *   ta sama ilość i nie podam przelicznika,
 * — że suszenie ziół nie odbywa się w tym urządzeniu,
 * — i ODMOWA: żadnych właściwości leczniczych ziół, żadnych
 *   naparów „na coś", żadnego doradzania w zbieraniu roślin.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH O ZIOŁACH. To jest przy tym
 *   temacie największe ryzyko i odmowa musi być wyraźna.
 * — ŻADNEGO DORADZANIA W ROZPOZNAWANIU ROŚLIN dziko rosnących.
 * — ŻADNYCH PRZELICZNIKÓW świeże/suszone.
 * — ŻADNYCH PORAD O SUSZENIU I PRZECHOWYWANIU.
 * — ŻADNYCH NAZW FIRM.
 * — WODY NIE ROBIĘ TEMATEM (kąt zajęty gdzie indziej).
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Herbaty, napary i gorące
 * napoje" (Głuchołazy) dotyczą temperatury wody i picia.
 * „Przyprawy" pojawiają się jako wątek przy piernikach (Sztum),
 * ale tam chodzi o przyprawy korzenne do wypieku. „Twarda woda"
 * ma własne miasto. Tutaj chodzi o ZIOŁA ŚWIEŻE I SUSZONE jako
 * składnik dania — i o to, że to jedyny przypadek, w którym
 * nóż tego urządzenia bywa ZA DOBRY.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku 1926 jako praw miejskich. To 15 maja 1934.
 * — NIE PISZĘ o czynnym węźle kolejowym.
 * — NIE PISZĘ, że Skórcz leży w środku Borów Tucholskich.
 * — NIE PODAJĘ nazwy żadnego zakładu. Nie ustaliłam żadnego,
 *   a 398 z 415 firm to mikrofirmy.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych jako
 *   skórczowskim; wpisy kociewskie są regionalne.
 * — NIE MYLĘ miasta Skórcz z GMINĄ WIEJSKĄ SKÓRCZ — to dwie
 *   odrębne jednostki o tej samej siedzibie. FAQ to rozróżnia.
 * — NIE UŻYWAM postaci burmistrza Grzankowskiego (1886–1943)
 *   — data śmierci przypada na okupację, a okoliczności nie
 *   są przeze mnie sprawdzone.
 * — districts: gmina miejska bez sołectw; osiedli statutowych
 *   nie potwierdzono. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 3 422 mieszkańców (31.12.2024, GUS), 3,6 km², 88 m n.p.m.,
 * — prawa miejskie 15 maja 1934 r.; lokacja wsi 25 listopada
 *   1339 r.; pod Zakonem od 1305 r.,
 * — położenie na północnym skraju Borów Tucholskich, w dolinie
 *   Szorycy,
 * — studnie artezyjskie o uznanych walorach smakowych,
 * — gotycki kościół Wszystkich Świętych; układ urbanistyczny
 *   w rejestrze zabytków; grodzisko Kranek,
 * — 398 z 415 podmiotów to mikrofirmy do 9 osób.
 */
export const SKORCZ: CityContent = {
  slug: "skorcz",
  h1: "Thermomix Skórcz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Skórcz (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Skórczu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skórcz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skórczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Skórcza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Skórcz i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Bazylii w nim nie siekam. To jedyny raz, gdy nóż jest za dobry.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skórczu – jak wygląda prezentacja?",
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
      id: "ziola",
      heading: "Miasto trzech i pół kilometra kwadratowego — czyli o ziołach z parapetu",
      paragraphs: [
        "Skórcz ma trzy i sześć dziesiątych kilometra kwadratowego powierzchni i trzy i pół tysiąca mieszkańców. Prawa miejskie dostał 15 maja 1934 roku — dla porządku, bo w sieci krąży błędna data 1926 — a jako wieś został lokowany na prawie chełmińskim jeszcze 25 listopada 1339 roku. Cały układ urbanistyczny jest wpisany do rejestru zabytków. Z czterystu piętnastu zarejestrowanych tu firm trzysta dziewięćdziesiąt osiem to mikrofirmy do dziewięciu osób. To jest miasto domów z ogródkami, nie miasto zakładu.",
        "Więc napiszę o najtańszym składniku w kuchni, jedynym, który rośnie na parapecie i w skrzynce za oknem: o ziołach. I zacznę od wady, bo to jedyny temat, w którym nóż tego urządzenia bywa za dobry.",
        "Delikatnych ziół w nim nie siekam. Bazylia, natka, koperek, mięta rozbite nożem w naczyniu zamieniają się w papkę i ciemnieją, bo ostrze je miażdży, zamiast ciąć. Jeżeli chcecie zielonej, sypkiej natki na ziemniaki — weźcie nóż i deskę, zajmie to trzydzieści sekund. Sprzedawca, który mówi, że urządzenie zastępuje nóż we wszystkim, nigdy nie siekał bazylii.",
        "A teraz to, co robi z ziołami naprawdę dobrze — i tu jest tego sporo, bo wszędzie tam, gdzie zioło ma być rozbite, a nie pokrojone, ta sama „wada” staje się zaletą.",
        "Pesto. To jest chyba najlepszy przykład: bazylia, orzechy, czosnek, ser, oliwa — wszystko naraz, w jednym naczyniu, w kilkadziesiąt sekund, bez moździerza i bez zmywania trzech rzeczy. Masła ziołowe. Zielone sosy do ryb i mięsa. Marynaty. Pasty ziołowe do smarowania. I mielenie ziół suszonych — oregano, tymianku, majeranku — z całych listków na proszek, tuż przed użyciem, co słychać od razu.",
        "Jedna rzecz techniczna, o której warto wiedzieć: zioło świeże i to samo zioło suszone to nie jest ta sama ilość. Suszone jest zdecydowanie mocniejsze. Przelicznika Wam nie podam, bo zależy od zioła i od tego, jak długo leży w szafce — trzeba próbować i dosypywać, a nie liczyć.",
        "I na koniec granica, przy której nie ustąpię, bo przy ziołach jest najbardziej kusząco. Nie napiszę Wam, że jakiekolwiek zioło na cokolwiek działa. Żadnych naparów „na coś”, żadnych właściwości, żadnego wspierania czegokolwiek. Mówię wyłącznie o smaku i o zapachu. Nie doradzę też nic w sprawie zbierania roślin dziko rosnących ani ich rozpoznawania — to nie moja dziedzina i pomyłka bywa tu poważna.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skórczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie zioła w ogródku albo w skrzynce, zerwijcie garść przed moim przyjazdem — zrobimy z nich pesto i od razu zobaczycie, co ten sprzęt z ziołami robi, a czego nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Skórczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla skórczowskiej rodziny",
      paragraphs: [
        "Skórcz liczy nieco ponad trzy i pół tysiąca mieszkańców i jest gminą miejską — dla porządku warto o tym pamiętać, bo obok istnieje osobna gmina wiejska Skórcz z siedzibą w tym samym mieście. Leży na północnym skraju Borów Tucholskich, w dolinie rzeki Szorycy, na terenie uformowanym przez lądolód; miasto ma studnie artezyjskie o uznanych walorach smakowych. Główny zabytek to gotycki kościół Wszystkich Świętych, a cały układ urbanistyczny jest wpisany do rejestru zabytków. Nieopodal leży chronione grodzisko Kranek, a po wojnie działał tu warsztat ceramiczny twórcy ludowego A. Eichlera.",
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

  districtsHeading: "Do których części Skórcza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — przy trzech i pół kilometrach kwadratowych nie ma tu dalekiej strony — oraz do wsi okolicznej gminy wiejskiej Skórcz. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Skórcz też przyjadę",
  nearbyParagraphs: [
    "Starogard Gdański, Czarna Woda, Pelplin, Gniew, Tczew i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Starogard Gdański", "Czarna Woda", "Pelplin", "Gniew", "Skarszewy"],

  about: blokOMnie("do Skórcza", "w Skórczu i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Skórcza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi okolicznej gminy wiejskiej Skórcz — to dwie odrębne jednostki o tej samej siedzibie, ale przyjeżdżam do obu. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Skórczu"),
    {
      question: "Czy posieka mi natkę i bazylię?",
      answer:
        "Posieka, ale nie polecam. Delikatne zioła nóż w naczyniu miażdży, zamiast ciąć — robi się papka i ciemnieje. Na zieloną, sypką natkę weźcie nóż i deskę, to trzydzieści sekund.",
    },
    {
      question: "To co robi z ziołami dobrze?",
      answer:
        "Wszystko, gdzie zioło ma być rozbite, a nie pokrojone. Pesto — bazylia, orzechy, czosnek, ser, oliwa naraz w jednym naczyniu, bez moździerza. Masła ziołowe, zielone sosy, marynaty, pasty. I mielenie ziół suszonych tuż przed użyciem, co naprawdę słychać.",
    },
    {
      question: "Ile suszonego zioła zamiast świeżego?",
      answer:
        "Przelicznika nie podam — suszone jest zdecydowanie mocniejsze, ale ile dokładnie, zależy od zioła i od tego, jak długo leży w szafce. Trzeba próbować i dosypywać. I nie napiszę Wam, że jakiekolwiek zioło na cokolwiek działa — mówię o smaku i zapachu, nie o zdrowiu.",
    },
  ],

  geo: { lat: 53.7937, lng: 18.5249 },
};
