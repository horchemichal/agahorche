import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * SOKOŁÓW MAŁOPOLSKI — miasto w powiecie rzeszowskim, 4 363
 * mieszkańców (31.12.2024, GUS). Założone w 1569 r. przez Jana
 * Pileckiego, prawa miejskie zatwierdził Zygmunt August; miasto
 * NIGDY ich nie utraciło. W gminie ponad 1 200 podmiotów
 * gospodarczych, ale zdominowanych przez MIKROPRZEDSIĘBIORSTWA:
 * tylko JEDNA firma zatrudnia 250+ osób. Do tego 3 394
 * gospodarstwa rolne o średniej powierzchni 3,75 ha.
 *
 * UWAGA — DWA SOKOŁOWY. Ten (małopolski, podkarpackie) i Sokołów
 * PODLASKI (mazowieckie), gdzie działa Grupa Sokołów S.A. Materiały
 * o „potentacie mięsnym" i „największym zakładzie w Polsce"
 * dotyczą TAMTEGO miasta. Sprawdzone i odrzucone.
 *
 * KĄT: dom, w którym ktoś pracuje na swoim. Miasto, w którym prawie
 * każdy pracuje u siebie albo w firmie na kilka osób, jest jedynym
 * właściwym miejscem na tekst o kuchni bez stałych godzin — gdzie
 * praca i dom są w jednym miejscu, a obiad jest wtedy, kiedy się da.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że problemem nie jest brak czasu, tylko BRAK PRZEWIDYWALNOŚCI:
 *   nie wiadomo z góry, kiedy będzie przerwa,
 * — że urządzenie pomaga tu jedną konkretną rzeczą: danie może
 *   czekać ugotowane, zamiast wymagać obecności w danej minucie,
 * — że praca w domu ma odwrotny problem niż praca poza domem —
 *   kuchnia jest zawsze pod ręką i to bywa kłopotem, nie zaletą,
 * — i uczciwie: sprzęt nie ustawi Wam godzin. To nie jest problem
 *   do rozwiązania zakupem.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU ugotowanych dań i o tym, ile
 *   mogą stać — to dziedzina bezpieczeństwa żywności.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani o regularności posiłków,
 *   ani o podjadaniu. To jest ta strona, na której pokusa jest
 *   duża, i dlatego zakaz stoi tu wprost.
 * — ŻADNEGO OCENIANIA, jak ktoś prowadzi firmę ani jak układa dzień.
 * — ŻADNYCH PORAD BIZNESOWYCH ANI PODATKOWYCH.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Dom, w którym ktoś pracuje
 * zdalnie" dotyczy PRACY ETATOWEJ wykonywanej z domu — tam godziny
 * są narzucone z zewnątrz. Tutaj nikt ich nie narzuca i to jest
 * sedno różnicy. „Praca przy jedzeniu" dotyczy zawodu związanego
 * z gastronomią. „Sprzedawanie własnych wypieków" — zarobkowania
 * NA jedzeniu. „Dwunastogodzinna zmiana" i „dom, w którym ktoś
 * śpi w dzień" dotyczą pracy zmianowej, czyli rytmu narzuconego
 * i stałego. „To jest miasto pracy wykonywanej W DOMU" (wiklina)
 * dotyczy pracy chałupniczej na zlecenie.
 *
 * ŚWIADOME POMINIĘCIA — ODNOTOWANE, NIEUŻYTE:
 * — CMENTARZ ŻYDOWSKI w Sokołowie (ok. 300 nagrobków z XVII–XX w.,
 *   podobno najlepiej zachowany w województwie) i losy tutejszej
 *   społeczności żydowskiej. Fakt sprawdzony. NIE UŻYWAM GO jako
 *   ciekawostki na stronie o sprzęcie AGD.
 * — WIELKI POŻAR 25 lipca 1904 r., który w trzy godziny zniszczył
 *   miasto doszczętnie. Fakt sprawdzony; wspominam go JEDNYM
 *   zdaniem w bloku o mieście, bo to element tożsamości miasta,
 *   ale NIE robię z niego metafory kuchennej.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że mieszkańcy dojeżdżają do pracy DO RZESZOWA.
 *   Saldo dojazdów jest ujemne (1 514 wyjeżdża, 651 przyjeżdża),
 *   ale ŻADNE ŹRÓDŁO NIE PODAJE KIERUNKU. Istnienie połączeń
 *   autobusowych nie jest dowodem na cel podróży. To jest ta sama
 *   pułapka co „sypialnia Rzeszowa" przy Sędziszowie,
 * — NIE PODAJĘ NAZWY ŻADNEGO ZAKŁADU. Portal inwestycyjny gminy
 *   mówi, że jedna firma zatrudnia 250+ osób, ale jej nazwy nie
 *   ujawnia i nie udało się jej ustalić,
 * — NIE PISZĘ O GARNCARSTWIE I TKACTWIE W CZASIE TERAŹNIEJSZYM.
 *   Cech garncarski istniał tu naprawdę (jest dokument
 *   w Podkarpackiej Bibliotece Cyfrowej), ale to fakt HISTORYCZNY.
 *   Nie znalazłem dowodu na żywą dziś tradycję. Uwaga: żywe
 *   garncarstwo w tym województwie to MEDYNIA GŁOGOWSKA — inna
 *   miejscowość, częsta pomyłka,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Sprawdzona podkarpacka lista (248 pozycji) NIE ZAWIERA nic
 *   z Sokołowa Małopolskiego,
 * — NIE MYLĘ NAZW OSIEDLI Z PLANAMI ZAGOSPODAROWANIA. Na BIP
 *   widnieją „Osiedle Słoneczne V" i „Osiedle Południe II", ale to
 *   są NAZWY MIEJSCOWYCH PLANÓW, a nie jednostki pomocnicze.
 *   Gmina ma 9 sołectw, a samo miasto jest jedną, niepodzieloną
 *   jednostką. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto założone w 1569 r. przez Jana Pileckiego, prawa miejskie
 *   zatwierdził Zygmunt August; miasto nigdy ich nie utraciło,
 * — 25 lipca 1904 r. miasto spłonęło doszczętnie w ciągu trzech
 *   godzin,
 * — gospodarka zdominowana przez mikroprzedsiębiorstwa; ponad
 *   1 200 podmiotów gospodarczych; tylko jedna firma zatrudnia
 *   250+ osób,
 * — 3 394 gospodarstwa rolne o średniej powierzchni 3,75 ha,
 * — Towarzystwo Gimnastyczne „Sokół" założone w 1894 r. i nadal
 *   istniejące,
 * — miasto leży na skraju dawnej Puszczy Sandomierskiej; lasy
 *   iglaste to ok. 23% powierzchni gminy,
 * — 4 363 mieszkańców (31.12.2024).
 */
export const SOKOLOW_MALOPOLSKI: CityContent = {
  slug: "sokolow-malopolski",
  h1: "Thermomix Sokołów Małopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sokołów Małopolski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sokołowie Małopolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sokołów Małopolski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sokołowie Małopolskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sokołowa Małopolskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Sokołów Małopolski i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Obiad wtedy, kiedy się da. Nie o trzynastej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sokołowie Małopolskim – jak wygląda prezentacja?",
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
      id: "na-swoim",
      heading: "Miasto bez jednego dużego zakładu — czyli o gotowaniu, gdy pracuje się na swoim",
      paragraphs: [
        "W gminie Sokołów Małopolski działa ponad tysiąc dwieście podmiotów gospodarczych, a zatrudniających więcej niż dwieście pięćdziesiąt osób jest wśród nich dokładnie jeden. Do tego trzy tysiące czterysta gospodarstw rolnych o średniej wielkości niecałych czterech hektarów. To znaczy jedno: tutaj bardzo wiele osób pracuje u siebie albo w firmie, która liczy kilka osób.",
        "A to jest zupełnie inny rytm dnia niż etat — i inny problem w kuchni, niż się zwykle opisuje.",
        "Pisałam już osobno o pracy zdalnej i o pracy zmianowej. Tam godziny są narzucone: są niewygodne, ale są. Kiedy pracuje się na swoim, nikt ich nie narzuca — i to nie jest wolność, tylko brak przewidywalności. Rano nie wiadomo, czy przerwa wypadnie o dwunastej, o piętnastej, czy w ogóle. Klient zadzwoni, dostawa przyjedzie, coś się zepsuje. Obiad nie tyle „nie ma kiedy się odbyć”, ile nie da się go zaplanować na konkretną godzinę.",
        "I druga rzecz, której na etacie nie ma: kuchnia jest cały czas pod ręką. Wbrew pozorom to bywa kłopotem, a nie ułatwieniem — bo łatwiej przechodzić obok niej dwadzieścia razy i nic nie zrobić, niż raz usiąść i zjeść.",
        "Co tu realnie zmienia urządzenie? Jedną rzecz, węższą niż w reklamie, ale w tej sytuacji akurat tę właściwą: danie może być gotowe i czekać, zamiast wymagać Waszej obecności w konkretnej minucie. Nastawiacie rano albo między jednym a drugim telefonem, gotuje się bez pilnowania i bez przywierania, a Wy siadacie wtedy, kiedy się da. Przesunięcie obiadu o dwie godziny przestaje cokolwiek psuć.",
        "I rzecz, której nie powiem inaczej, choć sprzedaję ten sprzęt: żadne urządzenie nie ustawi Wam godzin. Jeśli problemem jest to, że dzień rozjeżdża się od siódmej rano do dwudziestej drugiej, to jest problem z organizacją pracy, a nie z kuchnią — i nie rozwiązuje się go zakupem. Mogę pomóc w tym, żeby jedzenie nie było kolejną rzeczą, która się nie udaje. Nie w tym, żeby dzień wyglądał inaczej.",
        "Czego nie doradzę: niczego o tym, jak długo ugotowane danie może czekać. To jest dziedzina bezpieczeństwa żywności, nie moja.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sokołowie Małopolskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli prowadzicie firmę i dzień jest nieprzewidywalny, powiedzcie to przy umawianiu — dopasuję godzinę, także wieczorną. I nie mam nic przeciwko temu, żeby w trakcie zadzwonił Wam telefon.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sokołowie Małopolskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sokołowskiej rodziny",
      paragraphs: [
        "Sokołów Małopolski liczy ponad cztery tysiące trzysta mieszkańców. Miasto założył w 1569 roku Jan Pilecki, a prawa miejskie zatwierdził Zygmunt August — i nigdy ich potem nie utraciło, w odróżnieniu od większości okolicznych miasteczek. Dwudziestego piątego lipca 1904 roku spłonęło doszczętnie w ciągu trzech godzin i nigdy już nie wróciło do dawnej wielkości. Leży na skraju dawnej Puszczy Sandomierskiej; lasy iglaste to blisko jedna czwarta powierzchni gminy. Towarzystwo Gimnastyczne „Sokół” działa tu od 1894 roku.",
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

  districtsHeading: "Do których części Sokołowa Małopolskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Górna, Nienadówki, Trzebosi, Trzebuskiej, Turzy, Wólki Sokołowskiej i pozostałych — bez dopłaty za dojazd.",
    "Samo miasto nie dzieli się formalnie na osiedla. Nazwy w rodzaju „Osiedle Słoneczne” czy „Osiedle Południe”, które można spotkać w dokumentach, to nazwy planów zagospodarowania, a nie dzielnic — więc ich tu nie wymieniam. Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Sokołów Małopolski też przyjadę",
  nearbyParagraphs: [
    "Rzeszów, Głogów Małopolski, Kolbuszowa, Leżajsk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rzeszów", "Głogów Małopolski", "Kolbuszowa", "Leżajsk", "Łańcut", "Nowa Sarzyna"],

  about: blokOMnie("do Sokołowa Małopolskiego", "w Sokołowie Małopolskim i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sokołowa Małopolskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sokołowie Małopolskim"),
    {
      question: "Prowadzę firmę i nie wiem z góry, o której zjem. Czy to urządzenie w tym pomaga?",
      answer:
        "Pomaga w jednej konkretnej rzeczy: danie może być ugotowane i czekać, zamiast wymagać Waszej obecności w danej minucie. Nastawiacie, gdy jest chwila, gotuje się bez pilnowania i bez przywierania, a Wy siadacie wtedy, kiedy się da — przesunięcie obiadu o dwie godziny przestaje cokolwiek psuć. Nie ustawi Wam natomiast godzin. Jeśli problemem jest to, że dzień rozjeżdża się od rana do późnego wieczora, to nie jest problem do rozwiązania zakupem sprzętu i nie będę tego udawać.",
    },
    {
      question: "Czy możesz przyjechać wieczorem albo w weekend?",
      answer:
        "Tak. W okolicy, gdzie bardzo wiele osób pracuje na swoim, stałe godziny urzędowe nie mają sensu. Powiedzcie przy umawianiu, kiedy Wam pasuje, i dopasuję się — również do tego, że w trakcie może zadzwonić telefon.",
    },
  ],

  geo: { lat: 50.2308, lng: 22.1206 },
};
