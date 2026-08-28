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
 * LIBIĄŻ — gmina o najbardziej zwartej strukturze w tym zestawie: miasto
 * i dwie wsie, koniec. I gmina, w której co czwarta pracująca osoba
 * pracuje w jednym zakładzie. To jest oś tej strony.
 *
 * Tekst jest pisany dla domu, w którym ktoś wychodzi na szóstą i wraca
 * po czternastej, albo wychodzi na czternastą i wraca po dwudziestej
 * drugiej — i w którym o kolacji decyduje grafik, a nie apetyt.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — jednostki pomocnicze: miasto Libiąż + dwa sołectwa, Żarki (3 671)
 *   i Gromiec (1 509); miasto NIE ma osiedli jako jednostek pomocniczych
 *   (libiaz.pl, BIP),
 * — 20 978 mieszkańców gminy, GUS, stan na 31.12.2024; gminna ewidencja
 *   podaje 20 536; liczba spada — ok. 1 400 osób mniej niż w 2018 r.,
 * — ZG „Janina” — operatorem jest Południowy Koncern Węglowy S.A.
 *   (nazwa zmieniona w 2024 r.; spółka w rękach państwa od 1.01.2023),
 * — 1 113 mieszkańców gminy pracowało w ZG „Janina” — 24,1% wszystkich
 *   pracujących w gminie, w tym 187 kobiet (stan na 31.12.2019,
 *   dokumenty strategiczne gminy),
 * — od lutego 2025 r. wydobycie prowadzone jest w godzinach 6:00–22:00,
 *   noce przeznaczone na prace utrzymaniowe (komunikaty spółki),
 * — linia kolejowa nr 93 z dwoma przystankami na terenie gminy: Libiąż
 *   oraz Libiąż ZG Janina; pociągi Kolei Małopolskich na trasie
 *   Kraków–Trzebinia–Oświęcim,
 * — DW933 (nie DK79) przechodzi przez gminę; Kraków ok. 53 km,
 *   Oświęcim ok. 11 km, Chrzanów ok. 10 km,
 * — jedyny wpis gminy w wojewódzkim rejestrze zabytków to młyn wodny
 *   w Żarkach (WUOZ Kraków),
 * — z gminy Libiąż nie pochodzi żaden produkt z ministerialnej Listy
 *   Produktów Tradycyjnych.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — wstrząsów górniczych i szkód (236 wniosków w 2025 r., ściana pod
 *   Żarkami). To żywy spór między mieszkańcami a zakładem. Nie jest moją
 *   rolą stawać po którejkolwiek stronie, a wzmianka na stronie handlowej
 *   byłaby żerowaniem na czyjejś sytuacji,
 * — dat zamknięcia kopalni i rozmów o wygaszaniu górnictwa. Ludzie tu
 *   pracujący mają dość gadania o tym, kiedy stracą pracę,
 * — historii wojennej terenu zakładu — jest, jest znana i z zasady nie
 *   występuje w żadnym zdaniu obok oferty handlowej,
 * — zdania „w Libiążu nikt nie pracuje w nocy”. Byłoby nieprawdziwe:
 *   ograniczenie wydobycia do godzin 6–22 to rozwiązanie wprowadzone
 *   w 2025 r., a prace utrzymaniowe trwają nadal całą dobę.
 */
export const LIBIAZ: CityContent = {
  slug: "libiaz",
  h1: "Thermomix Libiąż – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Libiąż — prezentacja i cena",
  seoDescription:
    "Thermomix w Libiążu: bezpłatna prezentacja TM7 u Ciebie w kuchni — całe miasto, Żarki i Gromiec. Terminy także po zmianie. Tel. 517 185 691.",
  ogTitle: "Thermomix Libiąż — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Libiążu, Żarkach i Gromcu. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Libiąża przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do całego miasta oraz do Żarek i Gromca.",

  highlights: highlightyStandardowe("Libiąż, Żarki i Gromiec, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Libiążu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w bloku w centrum, jak w domu w Gromcu.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Gmina, w której o kolacji decyduje grafik",
      paragraphs: [
        "Libiąż jest gminą o bardzo prostej budowie: jedno miasto i dwie wsie — Żarki i Gromiec. Nie ma tu kilkunastu osiedli ani dziesięciu sołectw, w których trzeba się orientować. Jest za to coś, czego nie ma nigdzie indziej w okolicy w takiej skali: jeden zakład, w którym pracuje mniej więcej co czwarta pracująca osoba z całej gminy. Ponad tysiąc mieszkańców, w tym prawie dwieście kobiet.",
        "To zmienia rytm domu bardziej niż odległość do Krakowa. W rodzinie górniczej godziny posiłków nie wynikają z tego, kiedy się jest głodnym, tylko z tego, na którą się wychodzi. Śniadanie przed piątą, obiad w porze, w której inni piją kawę, kolacja po dwudziestej drugiej. A do tego zmiana grafiku co tydzień, czasem częściej, i konieczność ułożenia całej reszty domu wokół niej.",
        "Do tego dochodzą dojazdy w inną stronę: Oświęcim jest stąd o dziesięć kilometrów, Chrzanów o dziesięć, Kraków o pięćdziesiąt kilka. Na terenie gminy są dwa przystanki kolejowe na linii, którą jeżdżą pociągi z Krakowa przez Trzebinię do Oświęcimia. Sporo osób łączy jedno z drugim: praca gdzie indziej, dom tutaj.",
        "Rozmawiając z klientkami w Libiążu, słyszę najczęściej to samo zdanie: „ja nie mam kiedy gotować”. Nie znaczy ono „nie umiem” ani „nie lubię”. Znaczy: kiedy jestem w domu, jestem już bez sił, a kiedy mam siły, jestem w pracy. To jest zupełnie inny problem niż brak przepisu.",
        "Odpowiadam na to uczciwie: Thermomix nie gotuje za nikogo. Zabiera jedną konkretną rzecz — konieczność stania obok i pilnowania. Zupa może się gotować, kiedy Ty bierzesz prysznic po zmianie albo szykujesz drugie śniadanie na jutro, i sama się wyłączy. W domu, w którym ktoś zawsze albo dopiero wstaje, albo właśnie kładzie się spać, to jest różnica między obiadem a odgrzewaniem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Libiążu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, czy jesteś w mieście, w Żarkach czy w Gromcu, i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę, drugie — dobrać dania i wziąć odpowiednio więcej składników.",
        "Jeśli w domu ktoś pracuje na zmiany, powiedz o tym wprost i podaj, na której zmianie jest w tym tygodniu. W Libiążu umawiam się na przedpołudnia równie często jak na wieczory i nie mam z tym najmniejszego problemu — wolę przyjechać o dziesiątej rano niż zabierać komuś jedyne wolne popołudnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Libiążu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w rodzinie pracującej zmianowo",
      paragraphs: [
        "Najczęstsza sytuacja, jaką tu widzę: dwoje dorosłych, dzieci w szkole i trzy różne pory posiłków w jednym domu. Ktoś je o piątej rano, ktoś o piętnastej, ktoś o dwudziestej trzeciej. Zwykle kończy się tym, że jedna osoba odgrzewa to samo cztery razy, a i tak ktoś zjada kanapkę.",
        "Praktyczne jest tu przede wszystkim to, że danie jednogarnkowe albo zupa mogą się ugotować z wyprzedzeniem i po prostu poczekać, a każdy weźmie sobie porcję, kiedy wchodzi. Nie trzeba stać obok, nie trzeba mieszać, urządzenie samo wyłącza się w odpowiednim momencie.",
        "Druga rzecz to śniadaniówki. W domu, gdzie ktoś wychodzi przed świtem, kanapki robi się poprzedniego wieczora, na zmęczeniu. Pasty, smarowidła, domowe pasztety i sałatki dają się przygotować w jednym naczyniu w kilka minut i starczają na kilka dni — to akurat funkcja, o którą pytają tu najczęściej.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać — a w domu, gdzie jedno z rodziców jest akurat na popołudniówce, to bywa realną pomocą, nie ciekawostką.",
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

  districtsHeading: "Gdzie w gminie Libiąż dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta oraz do obu sołectw — Żarek i Gromca — i bez żadnej dopłaty za odległość. Gmina jest niewielka i zwarta, więc realnie mówimy o kilkunastu minutach różnicy między jednym a drugim adresem.",
    "Miasto Libiąż nie dzieli się formalnie na osiedla jako jednostki pomocnicze, choć w mowie funkcjonują nazwy poszczególnych rejonów. Przy umawianiu wystarczy więc ulica — nie trzeba szukać nazwy dzielnicy, której w dokumentach i tak nie ma.",
    "Żarki to największe z dwóch sołectw i osobna, dość rozległa miejscowość — stoi tam zabytkowy młyn wodny, jedyny obiekt z gminy w wojewódzkim rejestrze zabytków. Gromiec leży już przy Wiśle i jest wyraźnie mniejszy; dojazd zajmuje trochę więcej czasu, ale warunki są dokładnie te same.",
    "Na terenie gminy działają dwa przystanki kolejowe. Jeśli wracasz pociągiem i wolisz, żebym przyjechała po Twoim powrocie, powiedz przy umawianiu, o której realnie jesteś w domu. Wolę czekać kwadrans niż zastać Cię w drzwiach z torbami.",
  ],
  districts: ["Libiąż", "Żarki", "Gromiec"],

  nearbyHeading: "Chrzanów, Trzebinia i Oświęcim też są na mojej trasie",
  nearbyParagraphs: [
    "Libiąż leży dokładnie między Chrzanowem a Oświęcimiem i do obu miast mam stąd kilkanaście minut. Do Trzebini, Chełmka i Alwerni jeżdżę tak samo — to dla mnie jedna zachodnia pętla, a granice powiatów nie zmieniają niczego w warunkach.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Chrzanów",
    "Trzebinia",
    "Chełmek",
    "Oświęcim",
    "Alwernia",
    "Krzeszowice",
    "Kraków",
  ],

  about: blokOMnie("do Libiąża", "w powiecie chrzanowskim"),

  faq: [
    {
      question: "Czy dojeżdżasz do Żarek i Gromca?",
      answer:
        "Tak, do obu sołectw i na dokładnie tych samych warunkach co do miasta. Dojazd jest bezpłatny i nie zależy od odległości ani od tego, czy mieszkasz przy głównej drodze.",
    },
    ...faqWspolne("w Libiążu"),
    {
      question:
        "Pracuję na zmiany. Czy da się umówić w dzień, a nie wieczorem?",
      answer:
        "Tak i akurat w Libiążu jest to najczęstszy układ. Umawiam się tu na dziesiątą rano równie chętnie jak na dziewiętnastą, bo inaczej trzeba by czekać z terminem cały tydzień, aż grafik się przekręci. Podaj po prostu, na którą wychodzisz w najbliższych dniach, a resztę dopasuję.",
    },
    {
      question:
        "Mieszkamy w bloku, kuchnia jest mała. Czy jest gdzie to postawić?",
      answer:
        "Urządzenie zajmuje mniej więcej tyle, co duży czajnik z podstawką. Na prezentacji przywożę je ze sobą i stawiamy je dokładnie tam, gdzie stałoby na co dzień — od razu widać, czy się mieści i czy nie przeszkadza w otwieraniu szafki.",
    },
    {
      question: "Czy mogę zaprosić na prezentację koleżanki?",
      answer:
        "Jak najbardziej. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników — przy większej grupie robię po prostu więcej porcji.",
    },
  ],

  geo: { lat: 50.1, lng: 19.317 },
};
