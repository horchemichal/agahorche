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
 * URZĘDÓW — miasto od 1405 r., które PRZESTAŁO nim być w 1869 r.
 * i odzyskało prawa miejskie dopiero 1 STYCZNIA 2016 R. — jako jedno
 * z pięciu miast w Polsce w tamtym roku. 147 lat jako wieś.
 * Gmina specjalizuje się w uprawie owoców miękkich.
 *
 * KĄT: truskawki i maliny — owoc, który trzeba obrobić tego samego
 * dnia. Nie za tydzień, nie jutro rano. Dziś.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że owoce miękkie mają najkrótszy termin ze wszystkiego, co
 *   wchodzi do kuchni, i że to jest ich jedyny prawdziwy problem,
 * — co realnie pomaga: rzeczy, które robi się w minuty, a nie
 *   w godziny — mus, sos, koktajl, nadzienie,
 * — czego NIE zrobi: nie wydrąży, nie umyje i nie przedłuży niczyjej
 *   świeżości,
 * — i odmowa: ani słowa o mrożeniu i przechowywaniu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O MROŻENIU, ROZMRAŻANIU, PRZECHOWYWANIU
 *   I PRZETWORACH. Przy owocach miękkich pokusa jest największa
 *   z całej serii, bo to pierwsze pytanie, jakie pada. Zasada
 *   z Hrubieszowa, Opola Lubelskiego i Annopola.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani nic o witaminach.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH PORAD SADOWNICZYCH — kiedy zbierać, jak zbierać,
 *   co z plonem. Nie jestem sadownikiem, a w tej gminie mieszkają
 *   ludzie, którzy robią to zawodowo.
 * — ŻADNYCH WYLICZEŃ opłacalności.
 *
 * ROZGRANICZENIE — TU NAPRAWDĘ GĘSTO, WIĘC PILNUJĘ:
 * — Hrubieszów: „kilogramy zamiast porcji" — o SKALI i rozdrabnianiu
 *   warzyw,
 * — Opole Lubelskie: „mieszanie" — o czynności CIĄGŁEJ przy długim
 *   gotowaniu,
 * — Annopol: „jabłko" — o JEDNYM składniku i jego wszechstronności,
 * — „owoc, który nie poszedł do skupu" i „soki i moszcze" — zajęte
 *   przez inne miasta.
 * Ta strona jest o CZASIE, jaki owoc daje: o tym, że truskawka nie
 * czeka do jutra. To jedyny wymiar, którego żadna z powyższych nie
 * dotyka, i tekst trzyma się go konsekwentnie.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE podaję liczby mieszkańców SAMEGO MIASTA. Znalezione dane
 *   to albo cała gmina (8 115 na 31.12.2024), albo liczba 1 060
 *   z angielskiej Wikipedii BEZ ROKU. W tekście jest liczba GMINNA,
 *   wyraźnie opisana jako gminna,
 * — NIE piszę o zachowanym średniowiecznym układzie urbanistycznym.
 *   Krąży to, ale żadne źródło nie potwierdza wpisu układu do
 *   rejestru ani nie opisuje go jako wyróżniającego,
 * — NIE robię kąta z garncarstwa, choć jest udokumentowane (jeden
 *   z pięciu cechów jeszcze w 1889 r., dziś Regionalna Izba Tradycji
 *   Garncarstwa). Powód: kąt garncarski jest już ZAJĘTY przez Janów
 *   Lubelski i Łążek Garncarski. Wspominam o izbie jednym zdaniem,
 * — NIE ma dziś potwierdzonych czynnych warsztatów garncarskich
 *   w mieście — i dlatego nie piszę o „żywej tradycji",
 * — NIE przypisuję miastu „jabłek kraśnickich". Wpis dotyczy REGIONU
 *   POWIATU. Warto natomiast odnotować w notatce, że wymienione we
 *   wpisie Moniaki i Boby leżą w gminie Urzędów — to doprecyzowanie
 *   tego, czego nie dało się ustalić przy stronie Annopola,
 * — NIE znalazłam ani jednego nazwanego, działającego zakładu
 *   w mieście — więc w tekście nie ma żadnego pracodawcy.
 *
 * FAKT, KTÓRY JEST NAPRAWDĘ NIETYPOWY: miasto straciło prawa
 * miejskie w 1869 r. i było wsią przez 147 lat, odzyskując status
 * dopiero od 1 stycznia 2016 r. — razem z Lubyczą Królewską,
 * Siedliszczem, Jaraczewem i Pieszycami. NIE wolno pisać „miasto
 * od 1405 r." bez tej przerwy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — lokacja 1405 r. przez Władysława Jagiełłę na prawie
 *   magdeburskim; od 1474 r. siedziba powiatu sądowego,
 * — w 1582 r. odnotowano tu 107 rzemieślników; w 1889 r. działało
 *   pięć cechów, w tym garncarski,
 * — utrata praw miejskich 1869 r., odzyskanie 1 stycznia 2016 r.,
 * — gmina liczyła 8 115 mieszkańców na 31.12.2024 i specjalizuje się
 *   w uprawie owoców miękkich,
 * — do Lublina 61–64 km, ok. 57 minut,
 * — kościół św. Mikołaja zbudowany w połowie XVIII w.
 */
export const URZEDOW: CityContent = {
  slug: "urzedow",
  h1: "Thermomix Urzędów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Urzędów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Urzędowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Urzędów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Urzędowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Urzędowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Urzędów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Truskawka nie czeka do jutra. To jest jej jedyny prawdziwy problem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Urzędowie – jak wygląda prezentacja?",
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
      id: "owoce-miekkie",
      heading: "Gmina owoców miękkich — czyli o składniku, który nie czeka do jutra",
      paragraphs: [
        "Urzędów jest miastem od 1405 roku, z przerwą, o której warto wiedzieć: prawa miejskie stracił w 1869 i przez sto czterdzieści siedem lat był wsią. Odzyskał je dopiero pierwszego stycznia 2016 roku, jako jedno z pięciu miast w Polsce w tamtym roczniku. Kiedyś było tu dziesięć cechów i stu siedmiu rzemieślników; po garncarstwie została Regionalna Izba Tradycji, choć czynnych warsztatów już nie znalazłam.",
        "Dzisiejsza specjalizacja gminy jest inna i dla kuchni znaczy więcej: owoce miękkie. Truskawki, maliny, porzeczki.",
        "A owoce miękkie mają jedną cechę, której nie ma nic innego, co wchodzi do kuchni. Nie dają czasu. Kilogram truskawek zerwanych rano jest wieczorem inną rzeczą niż był w południe, a nazajutrz jeszcze inną. Ziemniak poczeka tydzień. Cebula miesiąc. Truskawka nie poczeka do jutra i to jest jej jedyny prawdziwy problem — nie smak, nie cena, tylko zegar.",
        "I dlatego akurat tutaj sens ma tylko to, co da się zrobić OD RAZU, w kilka minut, bez planowania na wieczór. Mus. Sos do naleśników albo do lodów. Koktajl. Nadzienie do ciasta. To wszystko powstaje w jednym naczyniu w czasie krótszym, niż trwa zastanawianie się, co z tym zrobić — a właśnie to zastanawianie się jest zwykle powodem, dla którego owoce się psują.",
        "Czego urządzenie nie zrobi, i mówię to od razu: nie umyje i nie wydrąży. Cała ręczna, żmudna część — mycie, obrywanie szypułek, wybieranie tego, co już nie nadaje się do niczego — zostaje po Waszej stronie. I nie przedłuży niczyjej świeżości: to, co było wczorajsze, wczorajsze zostanie.",
        "Nie doradzam też nic o mrożeniu, rozmrażaniu i przechowywaniu — a wiem, że to pierwsze pytanie, które przy owocach pada. Ani jak długo, ani w czym, ani co potem. To jest dziedzina bezpieczeństwa żywności, w której zła podpowiedź komuś realnie szkodzi, a ja jestem przedstawicielką handlową, nie technologiem żywności. Tak samo nie doradzam w sprawach sadowniczych — kiedy i jak zbierać. W tej gminie mieszkają ludzie, którzy robią to zawodowo od trzydziestu lat i nie potrzebują ode mnie porad.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Urzędowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć akurat owoce, umówmy się w sezonie i przygotujcie garść tego, co macie pod ręką. Zrobimy to na miejscu i sami zobaczycie, ile to trwa — bo tu chodzi wyłącznie o czas, a czasu nie da się opisać w ulotce.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Urzędowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla urzędowskiej rodziny",
      paragraphs: [
        "Cała gmina Urzędów liczyła nieco ponad osiem tysięcy mieszkańców na koniec 2024 roku i od dwóch dekad ich ubywa. Do Lublina jest stąd ponad sześćdziesiąt kilometrów, czyli niecała godzina — a do Kraśnika znacznie bliżej.",
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

  districtsHeading: "Do których części Urzędowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Urzędów też przyjadę",
  nearbyParagraphs: [
    "Kraśnik, Dzierzkowice, Wilkołaz, Borzechów, Chodel, Józefów nad Wisłą i Opole Lubelskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kraśnik", "Dzierzkowice", "Chodel", "Opole Lubelskie", "Annopol", "Bełżyce"],

  about: blokOMnie("do Urzędowa", "w Urzędowie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Urzędowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Urzędowie"),
    {
      question: "Co realnie da się zrobić z truskawkami albo malinami?",
      answer:
        "To, co powstaje w minuty, a nie w godziny: mus, sos do naleśników, koktajl, nadzienie do ciasta — wszystko w jednym naczyniu. Przy owocach miękkich liczy się wyłącznie czas, bo one nie czekają do jutra. Urządzenie nie umyje ich natomiast ani nie wydrąży — ta część roboty zostaje ręczna.",
    },
    {
      question: "A mrożenie i przetwory?",
      answer:
        "Nie doradzam nic o mrożeniu, rozmrażaniu ani przechowywaniu i wiem, że to pierwsze pytanie, które przy owocach pada. To dziedzina bezpieczeństwa żywności, a ja jestem przedstawicielką handlową, nie technologiem żywności. Nie doradzam też w sprawach sadowniczych — w tej gminie mieszkają ludzie, którzy robią to zawodowo.",
    },
  ],

  geo: { lat: 51.0111, lng: 22.1467 },
};
