import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * TARNOGRÓD — 3 093 mieszkańców (2024), spadek o 10,6% od 2002 r.
 * Miasto lokowane w 1567 r., z zachowanym szachownicowym układem
 * i rynkiem o wymiarach ok. 160 × 140 m. Działa tu młyn zbożowy
 * z około siedemdziesięcioletnią tradycją.
 *
 * KĄT: mąka i mielenie. Miasto z czynnym młynem jest właściwym
 * miejscem, żeby powiedzieć konkretnie, co daje mielenie własnego
 * ziarna — i czego NIE obiecam.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie miele ziarno na mąkę i to realna funkcja,
 *   a nie chwyt reklamowy,
 * — co z tego wynika praktycznie: mąka świeżo zmielona i możliwość
 *   zmielenia tego, czego nie ma na półce w małym mieście,
 * — że NIE zastąpi młyna: ilości są domowe, a mąka wychodzi
 *   wyraźnie grubsza niż z młyna walcowego,
 * — i twarda odmowa: żadnych twierdzeń o zdrowotności mąki
 *   pełnoziarnistej ani o glutenie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o mące, otrębach ani glutenie.
 *   To dziedzina, w której marketing spożywczy kłamie najczęściej,
 *   a ja nie jestem dietetykiem.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU MĄKI, wilgotności ani szkodnikach.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNEJ KRYTYKI mąki kupnej ani konkretnych młynów i marek —
 *   zasada z Mrągowa, a tu tym ostrzejsza, bo młyn stoi w tym mieście.
 * — ŻADNYCH RECEPTUR NA CHLEB podawanych jako mój przepis.
 * — ŻADNEJ HISTORII WOJENNEJ.
 *
 * ROZGRANICZENIE. Kąt „chleb" jest ZAJĘTY przez miasto spichrzów
 * i tutaj się NIE pojawia — ta strona jest o MIELENIU i o mące jako
 * składniku, nie o pieczeniu chleba. Nie ma tu ani przepisu
 * na chleb, ani rozważań o zakwasie. Kąt „wypieki" też jest zajęty,
 * dlatego wypieki są wspomniane jednym zdaniem, bez rozwijania.
 *
 * HIPOTEZA OBALONA — I TO W NAJCIEKAWSZY SPOSÓB W CAŁEJ SERII.
 * Zakładałam, że miasto założył Jan Zamoyski. NIEPRAWDA, i jest to
 * błąd powtarzany w sieci nagminnie. Tarnogród lokował w 1567 r.
 * STANISŁAW TARNOWSKI, wojewoda sandomierski (stąd nazwa), na mocy
 * przywileju Zygmunta Augusta. Jan Zamoyski przejął miasto dopiero
 * w 1588 r., włączając je do Ordynacji Zamojskiej — DWADZIEŚCIA
 * JEDEN LAT PÓŹNIEJ. To klasyczne pomylenie lokatora z późniejszym
 * właścicielem i dokładnie ten typ błędu, który tępię w innych
 * plikach. W tekście jest poprawna wersja.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE piszę „jeden z największych rynków w Polsce". To powtarza
 *   się w źródłach opisowych, ale żadne nie podaje porównania
 *   z listą rynków. Podaję same WYMIARY jako fakt: ok. 160 × 140 m,
 * — NIE nazywam Tarnogrodu „stolicą teatru wiejskiego". To
 *   nieformalny przydomek z turystycznych znaczków, nie pozycja
 *   rankingowa. Piszę opisowo: gospodarz ogólnopolskiego sejmiku
 *   teatrów wsi polskiej od 1984 r.,
 * — NIE wymieniam Tarnogrodzkiego Zrzeszenia Producentów Owoców
 *   i Warzyw „Roztocze" — zostało WYKREŚLONE Z KRS 2 lutego 2026 r.
 *   Starsze bazy firm nadal je pokazują jako działające,
 * — NIE podaję roku utraty praw miejskich (źródła: 1869 albo 1870,
 *   bez rozstrzygnięcia). Podaję tylko odzyskanie: 1987 r.,
 * — NIE podaję odległości do Biłgoraja — kalkulatory zwracały zera
 *   i nie mam twardego źródła. Podaję tylko Lublin: 106 km,
 *   ok. 1 godz. 49 min,
 * — miasto NIE ma potwierdzonego wykazu osiedli, więc districts
 *   to PUSTA TABLICA,
 * — produkty z Listy Produktów Tradycyjnych („pieróg biłgorajski",
 *   „żurawinówka biłgorajska") są przypisane do CAŁEGO POWIATU
 *   biłgorajskiego, a nie do Tarnogrodu — i żurawinówkę źródła
 *   wiążą raczej z gminą Księżpol. Dlatego nie ma ich w tekście.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — lokacja 1567 r. na prawie magdeburskim, Stanisław Tarnowski,
 *   przywilej Zygmunta Augusta; Ordynacja Zamojska od 1588 r.,
 * — rynek ok. 160 × 140 m, szachownicowy układ ulic zachowany,
 * — działa tu młyn zbożowy z ok. siedemdziesięcioletnią tradycją
 *   oraz zakład przetwórstwa owocowo-warzywnego, rozbudowywany
 *   (decyzja środowiskowa burmistrza ze stycznia 2025 r.),
 * — Tarnogrodzki Ośrodek Kultury prowadzi teatry amatorskie
 *   i od 1984 r. jest gospodarzem ogólnopolskiego sejmiku;
 *   Nagroda Kolberga 2011,
 * — 3 093 mieszkańców w 2024 r.
 */
export const TARNOGROD: CityContent = {
  slug: "tarnogrod",
  h1: "Thermomix Tarnogród – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tarnogród — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Tarnogrodzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tarnogród — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tarnogrodzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tarnogrodu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Tarnogród i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zmieli ziarno na mąkę. Ale młyna nie zastąpi i nie będę tego obiecywać.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tarnogrodzie – jak wygląda prezentacja?",
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
      id: "mielenie",
      heading: "Miasto z czynnym młynem — czyli o mieleniu, konkretnie i bez obietnic",
      paragraphs: [
        "Tarnogród został założony w 1567 roku i od razu na planie: szachownica ulic i wielki, prostokątny rynek, który mierzy mniej więcej sto sześćdziesiąt na sto czterdzieści metrów i stoi tak do dziś. Przy okazji sprostuję rzecz, którą internet powtarza uparcie: miasta nie założył Jan Zamoyski. Lokował je Stanisław Tarnowski, wojewoda sandomierski — stąd zresztą nazwa — a Zamoyski przejął Tarnogród dopiero dwadzieścia jeden lat później, w 1588 roku, włączając go do Ordynacji.",
        "Ale najważniejsze dla tej strony jest coś innego: w mieście działa młyn zbożowy z około siedemdziesięcioletnią tradycją, a kilka ulic dalej zakład przetwórstwa owocowo-warzywnego, który wciąż się rozbudowuje. Zboże i mąka są tu obecne na co dzień.",
        "To jest więc właściwe miejsce na rozmowę o funkcji, którą przy takim sprzęcie chwali się najgłośniej, a wyjaśnia najrzadziej: o mieleniu. Tak, to urządzenie zmieli ziarno na mąkę. To nie chwyt reklamowy, tylko realna funkcja — noże pracują na tyle szybko, że rozbijają suche ziarno.",
        "Co z tego wynika praktycznie? Dwie rzeczy. Pierwsza: mąka jest zmielona wtedy, kiedy jej potrzebujecie, a nie kilka miesięcy wcześniej. Druga, moim zdaniem ważniejsza w mieście tej wielkości: możecie zmielić to, czego nie ma na półce. Kaszę gryczaną na mąkę gryczaną, ryż na ryżową, orkisz, żyto, ciecierzycę. W dużym mieście to się po prostu kupuje; tutaj bywa, że nie ma czego.",
        "Czego natomiast nie zrobi, i mówię to przed zakupem, a nie po. Nie zastąpi młyna. Ilości są domowe — kilkaset gramów naraz, nie worek. I nie wyjdzie z tego mąka tak drobna jak ta z młyna walcowego; będzie wyraźnie grubsza, co przy niektórych wypiekach ma znaczenie. Jeśli ktoś liczy, że przestanie kupować mąkę, to się rozczaruje.",
        "Nie usłyszycie też ode mnie ani słowa o tym, że świeżo zmielona mąka jest zdrowsza, że pełnoziarnista jest lepsza albo czegokolwiek o glutenie. Nie jestem dietetykiem, a to akurat dziedzina, w której marketing spożywczy opowiada najwięcej głupot. Mogę powiedzieć tylko tyle: wiadomo, co jest w środku, bo sami to wsypaliście.",
        "I granica, przy której nie ustąpię: nie doradzam nic o przechowywaniu mąki — ani jak długo, ani w czym, ani co robić, gdy coś się w niej zalęgnie. To pytanie do kogoś, kto zna się na tym zawodowo, a takich ludzi w tym mieście nie brakuje.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tarnogrodzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli mielenie to jest właśnie ta funkcja, która Was interesuje, powiedzcie o tym przy umawianiu i przygotujcie garść tego, co chcecie zmielić. Zmielimy to na miejscu i zobaczycie efekt na własne oczy, zamiast wierzyć mi na słowo.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tarnogrodzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tarnogrodzkiej rodziny",
      paragraphs: [
        "Tarnogród liczy nieco ponad trzy tysiące mieszkańców i powoli ich ubywa. Do Lublina jest stąd sto sześć kilometrów, czyli blisko dwie godziny jazdy — więc na większe zakupy jeździ się z listą, a nie z doskoku. Miasto ma za to własny ośrodek kultury z teatrami amatorskimi, który od 1984 roku gości ogólnopolski sejmik teatrów wsi polskiej.",
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

  districtsHeading: "Do których części Tarnogrodu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie ma opublikowanego wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Tarnogród też przyjadę",
  nearbyParagraphs: [
    "Biszcza, Księżpol, Łukowa, Obsza, a po drugiej stronie granicy województwa Adamówka, Kuryłówka i Stary Dzików są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Biłgoraj", "Księżpol", "Łukowa", "Obsza", "Józefów", "Leżajsk"],

  about: blokOMnie("do Tarnogrodu", "w Tarnogrodzie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Tarnogrodu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Tarnogrodzie"),
    {
      question: "Naprawdę zmieli ziarno na mąkę?",
      answer:
        "Tak, to realna funkcja — noże rozbijają suche ziarno. Największy sens ma to przy rzeczach, których nie ma na półce: mąka gryczana, ryżowa, orkiszowa, z ciecierzycy. Ale mąki wyjdzie kilkaset gramów naraz, nie worek, i będzie wyraźnie grubsza niż ta z młyna walcowego. Kto liczy, że przestanie kupować mąkę, ten się rozczaruje.",
    },
    {
      question: "Czy świeżo zmielona mąka jest zdrowsza?",
      answer:
        "Nie odpowiem na to i nie jest to unik — nie jestem dietetykiem, a akurat wokół mąki, otrębów i glutenu krąży najwięcej marketingowych bzdur. Mogę powiedzieć tylko tyle, że wiadomo, co jest w środku, bo sami to wsypaliście. O przechowywaniu mąki też nie doradzam.",
    },
  ],

  geo: { lat: 50.3639, lng: 22.7444 },
};
