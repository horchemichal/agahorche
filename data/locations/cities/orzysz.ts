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
 * ORZYSZ — gmina miejsko-wiejska w powiecie piskim.
 * MIASTO 5 235, GMINA 8 328 (GUS 31.12.2024).
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * WIEŚ ZAŁOŻONA 1443 r. przez Wawrzyńca Polaka.
 * PARAFIA od 1544 r. PRAWA MIEJSKIE 1725 r., nadał
 * FRYDERYK WILHELM I, KRÓL W PRUSACH.
 * PRZYNALEŻNOŚĆ: MAZURY (Prusy Książęce, potem Królestwo
 * Prus). NIE WARMIA — prawa nadał król pruski, nie biskup.
 *
 * JEZIORA: ORZYSZ, SAJNO, WIERZBIŃSKIE. RZEKA ORZYSZA.
 * ⚠ OBALONE: „Orzysz leży nad Śniardwami" — Śniardwy są
 * ok. 8 km dalej; nad nimi leży Okartowo, wieś w tej gminie.
 * KAMIENNY KOŚCIÓŁ sprzed 1565 r.
 * MICHAŁ KAJKA — poeta mazurski; tablica pamiątkowa
 * z 1986 r.; Muzeum Michała Kajki w OGRÓDKU (ok. 10,5 km),
 * wieś w gminie Orzysz.
 * MAZURSKI PARK KRAJOBRAZOWY — utworzony w 1977 r.
 * (uchwały WRN z 5 i 8 grudnia 1977 r.), obejmuje m.in.
 * gminę Orzysz. POWIERZCHNI NIE PODAJĘ — źródła podają
 * ok. 49 000 ha przy utworzeniu i ok. 54 000 ha później.
 * PUSZCZA PISKA i Rezerwat Biosfery Jezioro Łuknajno
 * w zasięgu okolicy — ALE TO INNE GMINY, nie przypisuję.
 * MARIUSZ PATYRA (ur. 1977) — skrzypek, ur. w Orzyszu.
 * POŻAR 1826 r. zniszczył znaczną część miasta.
 *
 * ⚠⚠ ZAKAZ BEZWZGLĘDNY — WOJSKO. Orzysz jest w powszechnym
 * odbiorze przede wszystkim garnizonem i poligonem. NIE UŻYWAM
 * ANI JEDNEGO SŁOWA o wojsku, poligonie, NATO, granicy,
 * bezpieczeństwie, „przesmyku suwalskim". NIE UŻYWAM też fraz
 * typu „strategiczne położenie", „burzliwa historia", „miasto
 * na pierwszej linii". Nie wymieniam też dwóch znanych osób
 * urodzonych w Orzyszu, których biografie prowadzą wprost
 * do tematów wojennych — bezpieczny jest wyłącznie skrzypek.
 *
 * KĄT: WIELKOŚĆ KAWAŁKÓW — dlaczego jedno jest gotowe,
 * a drugie twarde. Kąt od trzech jezior różnej wielkości
 * w jednej gminie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najczęstsza przyczyna nierówno ugotowanego dania to
 *   nie czas ani temperatura, tylko RÓŻNA WIELKOŚĆ KAWAŁKÓW,
 * — że decyduje nie objętość, tylko GRUBOŚĆ — bo ciepło
 *   wchodzi od zewnątrz do środka,
 * — że dwa razy grubszy kawałek potrzebuje znacznie więcej
 *   niż dwa razy dłużej,
 * — że reguła praktyczna jest odwrotna do odruchu: nie
 *   „wszystko na równo", tylko TWARDE DROBNIEJ, MIĘKKIE
 *   GRUBIEJ — wtedy kończą razem,
 * — że przy zamkniętym naczyniu ta decyzja jest ważniejsza
 *   niż w garnku, bo nie da się dołożyć niczego w trakcie
 *   ani sprawdzić widelcem,
 * — że urządzenie tnie na kawałki nierówne i że przy daniach
 *   wymagających równości deska zostaje,
 * — i ODMOWA: nie podaję rozmiarów w centymetrach ani czasów.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH ROZMIARÓW W CENTYMETRACH.
 * — ŻADNYCH PORAD o surowym mięsie i o tym, po czym poznać,
 *   że mięso jest gotowe w środku. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO WOJSKA — patrz zakaz wyżej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Konsystencja: gładko
 * czy z kawałkami" (Stryków) dotyczy decyzji o rozdrobnieniu.
 * „Wolno czy szybko" (Lidzbark) dotyczy prędkości pracy.
 * „Kolejność dodawania składników" (Wolbórz) dotyczy tego,
 * co idzie kiedy. „Noże i ostrzenie" (Drzewica) dotyczą
 * narzędzia. Tutaj chodzi o ROZMIAR kawałka jako o wielkość,
 * która decyduje o czasie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw gminy.
 * — NIE PISZĘ, że miasto leży nad Śniardwami.
 * — NIE PODAJĘ powierzchni Mazurskiego Parku Krajobrazowego.
 * — NIE PRZYPISUJĘ Orzyszowi Puszczy Piskiej ani rezerwatu
 *   Łuknajno — to inne gminy.
 * — NIE PODAJĘ jezior Tyrkło i Buwełno — nie potwierdzono,
 *   że leżą w tej gminie.
 * — NIE PODAJĘ wydarzeń cyklicznych — żadnego nie
 *   potwierdzono, więc nie wymyślam nazw.
 * — NIE PRZYPISUJĘ Orzyszowi produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ Orzysza z jeziorem Orzysz, rzeką Orzyszą
 *   ani z ORZESZEM w śląskiem. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 5 235, gmina 8 328 mieszkańców,
 * — wieś założona w 1443 r., parafia od 1544 r., prawa
 *   miejskie z 1725 r. od króla pruskiego Fryderyka
 *   Wilhelma I; Orzysz leży na Mazurach,
 * — w gminie leżą jeziora Orzysz, Sajno i Wierzbińskie oraz
 *   płynie rzeka Orzysza,
 * — Śniardwy, największe jezioro Polski, są około ośmiu
 *   kilometrów od miasta; nad nimi leży Okartowo,
 * — kamienny kościół pochodzi sprzed 1565 r.,
 * — w Ogródku, wsi w gminie Orzysz, działa Muzeum Michała
 *   Kajki, poety mazurskiego; w mieście stoi tablica
 *   pamiątkowa z 1986 r.,
 * — gmina leży w granicach Mazurskiego Parku Krajobrazowego,
 *   utworzonego w 1977 r.,
 * — w Orzyszu urodził się skrzypek Mariusz Patyra,
 * — pożar z 1826 r. zniszczył znaczną część miasta.
 */
export const ORZYSZ: CityContent = {
  slug: "orzysz",
  h1: "Thermomix Orzysz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Orzysz (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Orzyszu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Orzysz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Orzyszu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Orzysza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Orzysz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nierówno ugotowane danie to najczęściej nie kwestia czasu, tylko rozmiaru.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Orzyszu – jak wygląda prezentacja?",
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
      id: "wielkosc-kawalkow",
      heading: "Trzy jeziora różnej wielkości — czyli o rozmiarze kawałków",
      paragraphs: [
        "W gminie Orzysz leżą trzy jeziora: Orzysz, Sajno i Wierzbińskie, każde innej wielkości, a osiem kilometrów dalej zaczynają się Śniardwy — największe jezioro w Polsce, choć nad nimi leży już Okartowo, nie samo miasto. Każde z tych jezior wiosną nagrzewa się w swoim tempie: małe szybciej, duże wolniej. To ta sama woda i to samo słońce, a różnica bierze się wyłącznie z rozmiaru.",
        "Dokładnie ta sama fizyka rządzi tym, co wkładacie do naczynia — i jest najczęstszą przyczyną dania, w którym jedno jest już rozgotowane, a drugie jeszcze twarde.",
        "Bo kiedy coś wyszło nierówno, ludzie zwykle winią czas albo temperaturę. A prawie zawsze winna jest różna wielkość kawałków. Ciepło wchodzi od zewnątrz do środka i potrzebuje na tę drogę tyle czasu, ile ma do przebycia.",
        "Z tego wynika rzecz, która zaskakuje: liczy się nie objętość kawałka, tylko jego grubość. Płaski plaster i gruby słupek mogą ważyć tyle samo, a gotować się zupełnie inaczej. I dlatego dwa razy grubszy kawałek potrzebuje znacznie więcej niż dwa razy dłużej — to nie jest zależność prosta.",
        "Praktyczna reguła jest przy tym odwrotna do odruchu. Odruch mówi: pokroić wszystko na równo. A powinno być: twarde drobniej, miękkie grubiej. Marchewka i ziemniak w mniejszą kostkę, cukinia i pomidor w większą — wtedy wszystko kończy w tym samym momencie. Równa kostka wszystkiego oznacza, że jedno będzie gotowe, a drugie nie.",
        "Przy zamkniętym naczyniu ta decyzja waży więcej niż przy garnku i to jest uczciwa różnica. W garnku możecie zajrzeć, dźgnąć widelcem, dorzucić coś w trakcie. Tutaj wszystko idzie na początku i przez cały czas nie widzicie nic — więc to, jak pokroicie, przesądza o wyniku, zanim urządzenie w ogóle ruszy.",
        "I jeszcze uwaga, którą powtarzam często: samo urządzenie kroi nierówno. Ono rozdrabnia, a nie tnie — z jednego przebiegu wychodzą kawałki różnej wielkości. Przy zupie kremie nie ma to znaczenia. Przy daniu, w którym kawałki mają być widoczne i równe, deska i nóż zostają w robocie.",
        "I granica: nie podam Wam rozmiarów w centymetrach ani czasów gotowania, a przede wszystkim nie doradzę, po czym poznać, że mięso jest gotowe w środku. To pytanie o bezpieczeństwo żywności, przy którym zgadywanie na stronie internetowej byłoby nie w porządku.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Orzyszu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie danie, w którym zawsze coś wychodzi nierówno — powiedzcie przy umawianiu. To jest problem, który da się pokazać w piętnaście minut i zwykle rozwiązać jeszcze szybciej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Orzyszu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla orzyskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad pięć tysięcy dwustu mieszkańców, a cała gmina ponad osiem tysięcy. Orzysz zaczynał jako wieś założona w 1443 roku, parafię ma od 1544, a prawa miejskie dopiero od 1725 — nadał je król pruski Fryderyk Wilhelm I, bo to Mazury, a nie biskupia Warmia. Kamienny kościół pochodzi sprzed 1565 roku; wielki pożar w 1826 zniszczył znaczną część zabudowy. W gminie leżą jeziora Orzysz, Sajno i Wierzbińskie, płynie rzeka Orzysza, a cały ten teren należy do Mazurskiego Parku Krajobrazowego utworzonego w 1977 roku. W Ogródku, kilkanaście kilometrów od miasta, działa Muzeum Michała Kajki, poety mazurskiego; w samym Orzyszu urodził się skrzypek Mariusz Patyra.",
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

  districtsHeading: "Do których części gminy Orzysz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy, w tym do Okartowa nad Śniardwami i do Ogródka. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Orzysz też przyjadę",
  nearbyParagraphs: [
    "Pisz, Ełk, Mikołajki, Biała Piska, Ruciane-Nida i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pisz", "Biała Piska", "Ruciane-Nida", "Ełk"],

  about: blokOMnie("do Orzysza", "w Orzyszu i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Orzysza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: miasto Orzysz, jezioro Orzysz i rzeka Orzysza to trzy różne rzeczy o niemal tej samej nazwie — a Orzesze, z którym bywa mylone, leży w województwie śląskim.",
    },
    ...faqWspolne("w Orzyszu"),
    {
      question: "Dlaczego jedno wychodzi rozgotowane, a drugie twarde?",
      answer:
        "Najczęściej dlatego, że kawałki miały różną grubość, a nie dlatego, że czas był zły. Ciepło wchodzi od zewnątrz do środka i potrzebuje tyle czasu, ile ma drogi. Liczy się przy tym nie objętość kawałka, tylko jego grubość.",
    },
    {
      question: "Czy wszystko kroić na równo?",
      answer:
        "Odwrotnie, niż podpowiada odruch: twarde drobniej, miękkie grubiej. Marchewka i ziemniak w mniejszą kostkę, cukinia i pomidor w większą — wtedy wszystko kończy w tym samym momencie. Równa kostka wszystkiego oznacza, że jedno będzie gotowe, a drugie nie.",
    },
    {
      question: "Czy urządzenie pokroi warzywa równo?",
      answer:
        "Nie — ono rozdrabnia, a nie tnie, więc z jednego przebiegu wychodzą kawałki różnej wielkości. Przy zupie kremie nie ma to znaczenia; przy daniu, w którym kawałki mają być widoczne, deska i nóż zostają w robocie. I jeszcze jedno: po czym poznać, że mięso jest gotowe w środku, nie doradzę — to bezpieczeństwo żywności.",
    },
  ],

  geo: { lat: 53.8099, lng: 21.9474 },
};
