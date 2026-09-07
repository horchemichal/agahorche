import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * BRODNICA — miasto nad Drwęcą, u wrót Pojezierza Brodnickiego,
 * z wieżą zamkową górującą nad starówką. Miejsce, gdzie wszyscy się
 * znają i wiadomo, kto co ma.
 *
 * KĄT: presja otoczenia. „Wszystkie koleżanki już mają" jako powód
 * zakupu — najsłabszy z możliwych, a jednocześnie jeden z najczęstszych.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — kupowanie dlatego, że inni mają, kończy się sprzętem w szafce,
 *   bo nie stoi za tym żadna własna potrzeba,
 * — to działa też w drugą stronę: nie warto rezygnować tylko dlatego,
 *   że ktoś się nabija albo uważa to za snobizm,
 * — jedyne pytanie, które ma znaczenie, dotyczy Waszego tygodnia,
 *   a nie cudzej kuchni,
 * — Aga przyznaje, że polecenia są jej najlepszym źródłem klientek,
 *   i właśnie dlatego mówi to wprost, zamiast na tym grać.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO PODSYCANIA PORÓWNAŃ: nie ma zdań o tym, że „u sąsiadki
 *   już stoi" ani o dołączaniu do grona.
 * — ŻADNYCH LICZB O POPULARNOŚCI, sprzedaży ani o tym, ile osób ma.
 * — Nie oceniać ani osób, które mają, ani tych, które się nabijają.
 *
 * ROZGRANICZENIE. Rumia mówi o poleceniu od konkretnej znajomej
 * („u koleżanki działa"), Lębork o znajomej, która się zawiodła,
 * Ząbki o prezentacji w grupie. Tutaj chodzi o PRESJĘ OTOCZENIA
 * jako powód zakupu albo rezygnacji.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Brodnica leży nad Drwęcą, przy Pojezierzu Brodnickim, a nad
 *   starówką góruje wieża zamkowa.
 */
export const BRODNICA: CityContent = {
  slug: "brodnica",
  h1: "Thermomix Brodnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Brodnica — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Brodnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brodnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brodnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Brodnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Brodnica i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "To, co stoi u koleżanki, nie mówi nic o Waszym tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brodnicy – jak wygląda prezentacja?",
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
      id: "wszyscy-juz-maja",
      heading: "Miasto, w którym wszyscy się znają — i zdanie „wszystkie już mają”",
      paragraphs: [
        "Brodnica jest miastem, w którym wiele osób zna się nawzajem, a wiadomości rozchodzą się szybciej niż gdziekolwiek indziej. Wykorzystam to do powodu zakupu, który słyszę dość często i który uważam za najsłabszy z możliwych: bo wszystkie koleżanki już mają.",
        "Powiem od razu, dlaczego to jest kiepski powód. Za takim zakupem nie stoi żadna Wasza potrzeba, tylko cudza kuchnia i cudzy tydzień. Sprzęt kupiony w ten sposób trafia do szafki najszybciej ze wszystkich, bo w pierwszym miesiącu robi się to, co widziało się u innych, a potem nie ma powodu, żeby po niego sięgać. Widziałam to i nie chcę, żeby to był Wasz przypadek.",
        "To samo działa jednak w drugą stronę i o tym mówi się rzadziej. Nie warto też rezygnować dlatego, że ktoś w rodzinie się nabija albo uważa to za snobizm i wydawanie pieniędzy na pokaz. Cudza kpina jest równie kiepskim doradcą jak cudzy zachwyt — jedno i drugie mówi o osobie, która to powiedziała, a nie o Waszej kuchni.",
        "Nie ocenię przy tym nikogo: ani osób, które mają i są zadowolone, ani tych, które uważają to za fanaberię. Każdy wydaje własne pieniądze i nikomu nic do tego. Nie podam też żadnych liczb o tym, ile osób to ma ani jak się sprzedaje — takie liczby służą wyłącznie robieniu presji i nie zamierzam ich używać.",
        "Jedyne pytanie, które naprawdę coś rozstrzyga, dotyczy Was: ile razy w tygodniu gotujecie, ile z tego czasu schodzi na stanie przy garnku i czy zdejmowanie akurat tej części jest dla Was warte takich pieniędzy. Na to pytanie odpowiedź w Waszym domu jest inna niż u koleżanki, choćbyście mieli identyczne kuchnie.",
        "Przyznam też rzecz, która osłabia moją pozycję: polecenia od zadowolonych klientek są moim najlepszym źródłem nowych spotkań. Właśnie dlatego mówię o tym wprost, zamiast na tym grać. Gdybym opierała sprzedaż na tym, że u sąsiadki już stoi, miałabym więcej podpisów i więcej sprzętu stojącego bezużytecznie w cudzych szafkach.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brodnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jak wygląda Wasz zwykły tydzień — od tego zaczniemy, a nie od tego, co ktoś ma u siebie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brodnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla brodnickiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Brodnicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Sady",
    "Osiedle Karbowo",
    "Michałowo",
    "Nad Drwęcą",
    "Osiedle Ustronie",
    "Podgórz",
  ],

  nearbyHeading: "Poza Brodnicę też przyjadę",
  nearbyParagraphs: [
    "Jabłonowo Pomorskie, Górzno, Golub-Dobrzyń i Bobrowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Jabłonowo Pomorskie", "Górzno", "Golub-Dobrzyń", "Rypin", "Nowe Miasto Lubawskie", "Toruń"],

  about: blokOMnie("do Brodnicy", "w Brodnicy i okolicy", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Brodnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Brodnicy"),
    {
      question: "Wszystkie moje koleżanki już to mają. Czy to dobry powód?",
      answer:
        "Najsłabszy z możliwych. Za takim zakupem nie stoi Wasza potrzeba, tylko cudzy tydzień — i taki sprzęt najszybciej ląduje w szafce. Liczy się jedno pytanie: ile razy w tygodniu gotujecie, ile czasu schodzi na stanie przy garnku i czy zdjęcie akurat tej części jest dla Was warte tych pieniędzy.",
    },
    {
      question: "A jeśli ktoś w rodzinie się z tego nabija?",
      answer:
        "To też nie jest powód, żeby rezygnować. Cudza kpina jest równie kiepskim doradcą jak cudzy zachwyt — jedno i drugie mówi o osobie, która to powiedziała, a nie o Waszej kuchni. Nie ocenię przy tym nikogo: każdy wydaje własne pieniądze.",
    },
  ],

  geo: { lat: 53.2572, lng: 19.3961 },
};
