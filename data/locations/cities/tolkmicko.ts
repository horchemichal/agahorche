import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * TOLKMICKO — gmina miejsko-wiejska w powiecie elbląskim.
 * MIASTO 2 375, GMINA 5 952 (GUS 31.12.2024). 10 SOŁECTW
 * (dane starostwa). Miasto tylko 2,3 km².
 * ⚠ Notatka projektowa podawała 2 600 — ZAWYŻONE.
 * NIE MA osobnej gminy wiejskiej.
 *
 * LOKACJA ok. 1296–1300 na prawie chełmińskim, w państwie
 * zakonu krzyżackiego; zlecający lokację Ludwik von Schippe.
 * 1351 — wielki mistrz HEINRICH DUSEMER ODNOWIŁ przywilej
 * i przyznał uprawnienia rybackie.
 * ⚠ OBALONE: „miasto założone w 1351" — to odnowienie.
 * 1440 — przystąpienie do Związku Pruskiego.
 * PRZYNALEŻNOŚĆ: POGEZANIA, potem państwo zakonne i Prusy
 * Królewskie. Geograficznie WYSOCZYZNA ELBLĄSKA.
 * ⚠ OBALONE: „Tolkmicko na Warmii" — to najczęstszy błąd
 * przy tym mieście. NIGDY nie było dominium biskupów.
 * PRAWA MIEJSKIE NIEPRZERWANE — jedyne takie w tej dziesiątce
 * obok Bisztynka.
 *
 * PORT — budowany 1862–1883; NAJWIĘKSZY PORT NAD ZALEWEM
 * WIŚLANYM. Opisuję go WYŁĄCZNIE jako rybacki i historyczny.
 * KOLEJ NADZALEWOWA — otwarta na przełomie XIX i XX w.
 * ⚠ ROK ROZBIEŻNY (1899 vs 1900) — nie podaję.
 * KOŚCIÓŁ ŚW. JAKUBA APOSTOŁA — gotycki, XIV w.; kościół
 * istniał tu już w 1330 r.
 * BASZTA OBRONNA — pozostałość murów miejskich, XIV w.
 * PARK KRAJOBRAZOWY WYSOCZYZNY ELBLĄSKIEJ — utworzony 1985 r.,
 * 13 732 ha plus otulina 22 948 ha; cztery rezerwaty: Buki
 * Wysoczyzny Elbląskiej, Kadyński Las, Dolina Stradanki,
 * Nowinka. DAT ICH UTWORZENIA NIE PODAJĘ.
 * ⚠ CITTASLOW: NIE NALEŻY.
 *
 * ⚠⚠ ZAKAZ: PRZEKOP MIERZEI WIŚLANEJ. Sam przekop leży
 * w innej gminie, ale tor wodny biegnie tuż obok Tolkmicka,
 * a temat wraca w każdym współczesnym tekście o tutejszym
 * porcie. JEST POLITYCZNIE SPORNY — omijam całkowicie.
 * NIE PISZĘ o „nowych możliwościach żeglugowych", „otwarciu
 * na Bałtyk" ani o rozwoju portu dzięki inwestycji.
 * ⚠ ZAKAZ: KADYNY jako rezydencja cesarska. Jeśli wymieniam
 * Kadyny, to wyłącznie jako wieś w gminie — bez wątku
 * cesarskiego i niemieckiego.
 *
 * KĄT: KLUSKI LANE, ZACIERKI I KLUSKI KŁADZIONE — najprostsze
 * ciasta z mąki i jajka, i to, czego urządzenie w nich nie
 * zrobi. Kąt od małego portowego miasteczka o prostej kuchni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to są najtańsze i najszybsze kluski, jakie istnieją,
 *   i że prawie zniknęły z domowych kuchni,
 * — czym się różnią: lane to ciasto rzadkie wlewane strumieniem,
 *   kładzione to ciasto gęste zbierane łyżką, zacierki to
 *   ciasto rozcierane palcami na okruchy,
 * — że urządzenie zrobi CIASTO, ale nie zrobi KLUSEK —
 *   bo wlewanie, kładzenie i rozcieranie to ruch ręki
 *   nad garnkiem,
 * — że to jest dobry przykład podziału pracy: maszyna
 *   przygotowuje, człowiek formuje,
 * — że najczęstszy błąd to złe zagęszczenie ciasta — i że
 *   sprawdza się je na łyżce, nie w misce,
 * — że kluski wrzuca się na wrzątek, nie do zupy, jeśli zupa
 *   ma zostać klarowna,
 * — i ODMOWA: nie podaję proporcji ani przepisu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ani przepisu.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO Przekopu Mierzei Wiślanej i tematów żeglugowych.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945 i zniszczeń.
 * — ZERO granicy — Zalew Wiślany jest podzielony granicą.
 * — ZERO wysiedleń i akcji „Wisła".
 * — ZERO wątku egzekucji teologa spalonego w 1426 r.
 * — ZERO cesarskiej rezydencji w Kadynach.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Pyzy i kluski
 * ziemniaczane" dotyczą ciasta z ziemniaków. „Knedle"
 * dotyczą kuchni czeskiej i morawskiej. „Makaron" ma własne
 * miasto. „Ciasto naleśnikowe" dotyczy patelni. Tutaj chodzi
 * o KLUSKI Z SAMEJ MĄKI I JAJKA formowane ręką nad garnkiem.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dokładnego roku lokacji (przedział 1296–1300).
 * — NIE PODAJĘ roku otwarcia kolei nadzalewowej.
 * — NIE PISZĘ, czy pociągi pasażerskie kursują w 2026 r.
 * — NIE PODAJĘ dat utworzenia czterech rezerwatów.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PODAJĘ wydarzeń cyklicznych — nie potwierdzono.
 * — NIE PRZYPISUJĘ Tolkmicku produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Tolkmicka z Tolkowcem ani z Fromborkiem
 *   i Krynicą Morską. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 375, gmina 5 952 mieszkańców, 10 sołectw;
 *   miasto zajmuje 2,3 km²,
 * — lokacja na przełomie XIII i XIV w. na prawie chełmińskim;
 *   w 1351 r. wielki mistrz Heinrich Dusemer odnowił przywilej
 *   i przyznał miastu uprawnienia rybackie,
 * — w 1440 r. miasto przystąpiło do Związku Pruskiego,
 * — historycznie to Pogezania i Wysoczyzna Elbląska, nie Warmia,
 * — port budowano w latach 1862–1883; to największy port
 *   nad Zalewem Wiślanym,
 * — gotycki kościół świętego Jakuba Apostoła z XIV w.;
 *   świątynia istniała tu już w 1330 r.,
 * — zachowała się baszta obronna z XIV w.,
 * — gmina leży w Parku Krajobrazowym Wysoczyzny Elbląskiej,
 *   utworzonym w 1985 r., z czterema rezerwatami.
 */
export const TOLKMICKO: CityContent = {
  slug: "tolkmicko",
  h1: "Thermomix Tolkmicko – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tolkmicko (pow. elbląski) — przedstawiciel",
  seoDescription:
    "Thermomix w Tolkmicku nad Zalewem Wiślanym: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tolkmicko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tolkmicku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tolkmicka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Tolkmicko i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Urządzenie zrobi ciasto na kluski. Klusek nie zrobi — to ruch ręki nad garnkiem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tolkmicku – jak wygląda prezentacja?",
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
      id: "kluski-lane",
      heading: "Miasteczko rybackie na dwóch kilometrach kwadratowych — czyli o klusek trzech rodzajach",
      paragraphs: [
        "Tolkmicko zajmuje dwa i trzy dziesiąte kilometra kwadratowego i mieszka w nim niecałe dwa i pół tysiąca osób, a mimo to ma największy port nad Zalewem Wiślanym — budowany od 1862 do 1883 roku. Lokację dostało na przełomie trzynastego i czternastego wieku, a w 1351 wielki mistrz Heinrich Dusemer odnowił jej przywilej i przyznał miastu uprawnienia rybackie. Od razu prostuję najczęstszy błąd: to nie jest Warmia. Tolkmicko leży na Wysoczyźnie Elbląskiej, na terenie dawnej Pogezanii, i nigdy nie należało do dominium biskupów warmińskich.",
        "Małe portowe miasteczko o prostej kuchni pasuje mi do potraw, które prawie zniknęły z domowych stołów, choć są najtańsze i najszybsze ze wszystkich: do klusek z mąki i jajka.",
        "Zacznę od uporządkowania, bo nazwy mieszają się nagminnie. Kluski lane to ciasto rzadkie, wlewane do wrzątku cienkim strumieniem — te z rosołu, które robi się w minutę. Kluski kładzione to ciasto gęste, zbierane łyżką i strząsane do garnka. Zacierki to ciasto najtwardsze, rozcierane palcami na nierówne okruchy. Trzy różne konsystencje jednego ciasta, trzy różne dania.",
        "I teraz rzecz, którą mówię wprost, choć nie jest dla mnie korzystna: urządzenie zrobi ciasto, ale klusek nie zrobi. Zrobi je szybko, gładko, bez grudek i bez brudzenia miski — a potem trzeba wziąć łyżkę i stanąć nad garnkiem. Wlewanie, kładzenie i rozcieranie to ruch ręki, którego żadna maszyna nie zastąpi.",
        "Uważam to zresztą za jeden z najlepszych przykładów tego, jak ten sprzęt naprawdę działa. On przygotowuje, człowiek formuje. Przy kluskach ta granica jest wyjątkowo czytelna, bo widać ją w tej samej minucie.",
        "Najczęstszy błąd nie leży w kluskach, tylko w cieście: złe zagęszczenie. Za rzadkie rozpłynie się w garnku i zostanie mętna zupa. Za gęste da twarde grudy. Sprawdza się to nie w misce, tylko na łyżce — ciasto na lane ma spływać nieprzerwaną wstążką, na kładzione zsuwać się ciężko i niechętnie.",
        "Druga rzecz, o której warto wiedzieć: jeśli zupa ma zostać klarowna, kluski gotuje się w osobnym garnku z wrzątkiem i dopiero potem przekłada. Wrzucone prosto do rosołu oddają mu mąkę i zmętnią go nieodwracalnie. To wybór, nie błąd — tylko trzeba go podjąć świadomie.",
        "I granica: nie podam Wam proporcji ani przepisu. Kluski z mąki i jajka to potrawa, którą w każdym domu robi się trochę inaczej, a różnica bierze się z jajek i z mąki, nie z liczby w tabelce. Chcę, żebyście wiedzieli, na co patrzeć na łyżce.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tolkmicku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć coś prostego zamiast popisowego — powiedzcie przy umawianiu. Kluski lane robię chętnie, bo widać na nich dokładnie, gdzie kończy się maszyna, a zaczyna ręka.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tolkmicku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tolkmickiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe dwa i pół tysiąca mieszkańców na zaledwie dwóch kilometrach kwadratowych, a cała gmina blisko sześć tysięcy, w dziesięciu sołectwach. Tolkmicko lokowano na przełomie trzynastego i czternastego wieku, a w 1351 roku wielki mistrz Heinrich Dusemer odnowił przywilej i przyznał miastu uprawnienia rybackie; w 1440 miasto przystąpiło do Związku Pruskiego. Historycznie to Pogezania i Wysoczyzna Elbląska, a nie Warmia. Port budowano od 1862 do 1883 roku i jest największym nad Zalewem Wiślanym. Z zabytków stoją gotycki kościół świętego Jakuba Apostoła z czternastego wieku — świątynia istniała tu już w 1330 — oraz baszta, pozostałość dawnych murów. Cała gmina leży w Parku Krajobrazowym Wysoczyzny Elbląskiej, utworzonym w 1985 roku.",
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

  districtsHeading: "Do których części gminy Tolkmicko dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziesięciu sołectw gminy, w tym do Kadyn i Łęcza. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Tolkmicko też przyjadę",
  nearbyParagraphs: [
    "Elbląg, Frombork, Młynary, Braniewo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Elbląg", "Frombork", "Młynary", "Braniewo"],

  about: blokOMnie("do Tolkmicka", "w Tolkmicku i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Tolkmicka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziesięciu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Tolkmicko leży nad Zalewem Wiślanym w powiecie elbląskim, na Wysoczyźnie Elbląskiej — a nie na Warmii, wbrew temu, co często się pisze. Nie mylić też z pobliską wsią Tolkowiec.",
    },
    ...faqWspolne("w Tolkmicku"),
    {
      question: "Czym różnią się kluski lane, kładzione i zacierki?",
      answer:
        "Konsystencją ciasta. Lane to ciasto rzadkie, wlewane do wrzątku cienkim strumieniem. Kładzione to ciasto gęste, zbierane łyżką i strząsane do garnka. Zacierki to ciasto najtwardsze, rozcierane palcami na nierówne okruchy. Trzy konsystencje jednego ciasta, trzy różne dania.",
    },
    {
      question: "Czy Thermomix zrobi kluski?",
      answer:
        "Zrobi ciasto — szybko, gładko, bez grudek i bez brudzenia miski. Klusek nie zrobi, bo wlewanie, kładzenie i rozcieranie to ruch ręki nad garnkiem. To zresztą dobry przykład podziału pracy: maszyna przygotowuje, człowiek formuje.",
    },
    {
      question: "Dlaczego kluski rozpływają mi się w zupie?",
      answer:
        "Albo ciasto było za rzadkie, albo wrzuciliście je prosto do zupy. Zagęszczenie sprawdza się na łyżce, nie w misce: ciasto na lane ma spływać nieprzerwaną wstążką. A jeśli zupa ma zostać klarowna, kluski gotuje się w osobnym garnku z wrzątkiem i dopiero potem przekłada — inaczej oddadzą mąkę do rosołu.",
    },
  ],

  geo: { lat: 54.3202, lng: 19.5273 },
};
