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
 * DRWINIA — świadome przeciwieństwo Rzezawy.
 *
 * Rzezawa to gmina tranzytowa: autostrada, krajowa droga, kolej.
 * Drwinia leży kilkanaście kilometrów dalej i nie ma nic z tych rzeczy:
 * żadnej linii kolejowej, żadnej drogi krajowej, jedna droga wojewódzka
 * do Bochni i druga do Niepołomic. Trzynaście sołectw rozłożonych na
 * ponad stu kilometrach kwadratowych, gęstość zaludnienia dwa razy niższa
 * niż u sąsiadów, prawie połowa powierzchni pod lasem.
 *
 * Oś tekstu: tutaj wyjazd „do miasta” jest wyprawą na pół dnia, więc
 * argument z dojazdem odwraca się — to nie klient jedzie obejrzeć
 * urządzenie, tylko urządzenie przyjeżdża do klienta. W gminie, która
 * się wyludnia i starzeje, to jest realna wartość, a nie slogan.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 13 sołectw: Bieńkowice, Drwinia, Dziewin, Gawłówek, Grobla, Ispina,
 *   Mikluszowice, Niedary, Świniary, Trawniki, Wola Drwińska, Wyżyce,
 *   Zielona (drwinia.pl, wykaz miejscowości),
 * — powierzchnia ok. 109 km², gęstość zaludnienia ok. 58–60 os./km²
 *   (GUS / polskawliczbach.pl, 2024),
 * — lesistość ok. 44% — najwyższa w tej części powiatu (GUS),
 * — gmina leży w widłach Wisły i Raby, przy wschodnim skraju Puszczy
 *   Niepołomickiej (drwinia.pl; zespół przyrodniczo-krajobrazowy
 *   „W widłach Wisły i Raby”),
 * — trzy rezerwaty przyrody na terenie gminy: Lipówka, Dębina,
 *   Wiślisko Kobyle (Nadleśnictwo Niepołomice; geoportal krajowy),
 * — brak linii kolejowej i brak drogi krajowej; główne osie to DW965
 *   (Bochnia – Gawłówek – Dziewin – Drwinia – Zielona – Świniary)
 *   i DW964 (Niepołomice – Ispina – Świniary – Niedary),
 *   conadrogach.pl, przebiegi dróg,
 * — most Ispina – Nowe Brzesko na Wiśle: ograniczenie 3,5 t i ruch
 *   wahadłowy; nowa przeprawa jest dopiero w fazie projektowej
 *   (ZDW Kraków; prasa lokalna),
 * — gminna linia komunikacyjna uruchomiona w 2023 r., z przesiadką
 *   w Ispinie w stronę Niepołomic, Wieliczki i Krakowa (prasa lokalna),
 * — ubytek ludności: ujemny przyrost naturalny i ujemne saldo migracji
 *   w 2024 r., mediana wieku wyższa niż w gminach sąsiednich
 *   (polskawliczbach.pl, dane GUS),
 * — Strefa Aktywności Gospodarczej Zielona (ok. 9,45 ha) włączona
 *   do Krakowskiej SSE w 2017 r. (drwinia.pl; terenyinwestycyjne.info),
 * — powódź 2010: odbudowa wałów w Grobli, Świniarach, Niedarach
 *   i Zielonej, remont śluz w Grobli i Ispinie (drwinia.pl),
 * — kościoły w rejestrze zabytków: Grobla (1906–1909, neogotyk wg
 *   projektu Jana Sas-Zubrzyckiego) i Mikluszowice (1859–1864);
 *   zespół dworski w Bieńkowicach (WUOZ Kraków; drwinia.pl),
 * — „gałki sadczane” z Grobli — ministerialna Lista Produktów
 *   Tradycyjnych (gov.pl/web/rolnictwo).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — żubrów. Ośrodek Hodowli Żubrów leży w uroczysku Poszyna w GMINIE
 *   KŁAJ, nie w Drwini, i NIE JEST udostępniony do zwiedzania — mimo
 *   że strona gminy wymienia go wśród swoich atrakcji,
 * — Czarnego Stawu — również gmina Kłaj,
 * — koników polskich w Puszczy Niepołomickiej — NIE POTWIERDZONE
 *   w żadnym źródle. Mylone z Roztoczem i Popielnem,
 * — zwiedzania rezerwatów. Lipówka i Dębina to rezerwaty ścisłe,
 *   wstęp jest zabroniony; Lipówkę można jedynie obejść drogą polną,
 * — zwiedzania dworu w Bieńkowicach — brak potwierdzenia dostępności,
 * — dokładnej liczby mieszkańców: w obiegu są trzy różne wartości.
 *
 * PUŁAPKA: sołectwo nazywa się „Grobla”, nie „Groble” — nawet strona
 * powiatu zapisuje to błędnie przy okazji produktu tradycyjnego.
 */
export const DRWINIA: CityContent = {
  slug: "drwinia",
  h1: "Thermomix Drwinia – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Drwinia — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Drwinia: bezpłatna prezentacja TM7 u Ciebie w kuchni — Mikluszowice, Grobla, Dziewin, Ispina i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Drwinia — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Drwinia. Nigdzie nie musisz jechać — przyjeżdżam do Ciebie, także do najdalszych sołectw.",

  lead:
    "Do gminy Drwinia przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich trzynastu sołectw, także tych najdalej od drogi wojewódzkiej.",

  highlights: highlightyStandardowe("cała gmina Drwinia, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Drwini – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Mikluszowicach, jak w Ispinie na końcu gminy.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce albo w spiżarni. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Gmina w widłach dwóch rzek — i co to znaczy dla zakupów",
      paragraphs: [
        "Drwinia leży w kącie między Wisłą a Rabą, przy wschodnim skraju Puszczy Niepołomickiej. Prawie połowa powierzchni gminy to las — więcej niż gdziekolwiek indziej w tej części powiatu. Trzynaście sołectw jest rozłożonych na ponad stu kilometrach kwadratowych, a mieszka tu mniej niż sześćdziesiąt osób na kilometrze. Dla porównania: w sąsiedniej Rzezawie jest ich ponad dwa razy więcej.",
        "Nie ma tu linii kolejowej ani drogi krajowej. Są dwie drogi wojewódzkie: jedna prowadzi do Bochni przez Dziewin i Gawłówek, druga do Niepołomic przez Ispinę. Most na Wiśle w Ispinie ma ograniczenie do trzech i pół tony i ruch wahadłowy — na mapie wygląda jak zwykła przeprawa, w praktyce nie każdy samochód nim przejedzie. Nowy most jest dopiero projektowany.",
        "To wszystko sprowadza się do jednej rzeczy, którą tutaj słyszę częściej niż gdzie indziej: żeby cokolwiek obejrzeć, trzeba gdzieś pojechać, a wyjazd „do miasta” zajmuje pół dnia. Salon ze sprzętem to Bochnia albo Kraków, autobus jeździ kilka razy dziennie i wymaga przesiadki, a jeśli w domu jest jeden samochód, to zwykle jest akurat w pracy.",
        "Dlatego u mnie ta kolejność jest odwrócona i nie jest to uprzejmość, tylko sposób pracy. Nie musisz nigdzie jechać ani niczego oglądać na zdjęciach. Urządzenie przyjeżdża do Twojej kuchni, gotuje na Twoim blacie i wyjeżdża, jeśli nie przekonało. Kosztuje to Ciebie dwie godziny i ani złotówki.",
        "Druga rzecz, która wychodzi tu w rozmowach: sporo domów w tej gminie to domy, w których gotuje się dużo i od zawsze — z własnych warzyw, z przetworów, z tego, co daje ogród. Nie przyjeżdżam nikogo uczyć gotować. Przyjeżdżam pokazać urządzenie, które zdejmuje z człowieka stanie przy garnku, a nie samo gotowanie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Drwinia?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w którym sołectwie mieszkasz. W tej gminie ma to większe znaczenie niż gdzie indziej: z Gawłówka do Ispiny jedzie się przez pół gminy, a część adresów leży kawałek od drogi wojewódzkiej, przy drogach, których nawigacja nie zawsze podaje sensownie. Krótki opis dojazdu przy umawianiu oszczędza nam obojgu telefonów po drodze.",
        "Jeśli masz w domu kogoś starszego, kto rzadko wychodzi, a chciałby zobaczyć urządzenie — powiedz o tym. Spokojnie da się poprowadzić spotkanie wolniej i bez pośpiechu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Drwinia"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w domu, w którym gotuje się dla wielu",
      paragraphs: [
        "W gminie takiej jak Drwinia dom rzadko bywa dwuosobowy przez cały rok. Zjeżdżają dzieci, wnuki, przyjeżdża rodzina z Krakowa na weekend — i nagle zamiast dwóch talerzy trzeba postawić osiem. Gotowanie dla większej liczby osób to tutaj normalna sytuacja, a nie święto.",
        "Najbardziej praktyczne bywa to, że zupa albo danie jednogarnkowe może się gotować bez pilnowania, kiedy Ty nakrywasz do stołu albo zajmujesz się gośćmi. Nie trzeba stać obok, nie trzeba mieszać, a urządzenie samo wyłącza się w odpowiednim momencie.",
        "Rodzicom najmłodszych dzieci najczęściej przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci z kolei często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać.",
        "Osobny wątek to przetwory. W domach z ogrodem urządzenie bywa używane najintensywniej w sierpniu i we wrześniu — przy powidłach, sokach i zupach do zamrożenia. Pokazuję to na prezentacji, jeśli akurat jest sezon i macie na to ochotę.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Drwinia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzynastu sołectw i bez żadnej dopłaty za odległość — od Gawłówka i Mikluszowic po Ispinę, Świniary i Niedary na drugim końcu gminy.",
    "To jest gmina, w której odległość naprawdę coś znaczy, więc powiem wprost: dla mnie nic nie zmienia. Dojazd do Woli Drwińskiej kosztuje tyle samo co dojazd do Drwini, czyli nic. Jedyna różnica jest w planowaniu — do dalszych sołectw rezerwuję po prostu więcej czasu na trasę.",
    "Mikluszowice i Grobla mają swoje zabytkowe kościoły, ten w Grobli z początku XX wieku, projektu Jana Sas-Zubrzyckiego. W Bieńkowicach stoi dawny zespół dworski. Wspominam o tym nie jako przewodnik, tylko dlatego, że to najprostsze punkty orientacyjne przy umawianiu — „koło kościoła w Grobli” mówi mi więcej niż numer domu.",
    "Sołectwa przy wałach — Grobla, Świniary, Niedary, Zielona, Dziewin — mają swoją historię z 2010 rokiem i odbudową wałów. Nie wchodzę w to na spotkaniach, chyba że ktoś sam zacznie. Wspominam tylko dlatego, że część dróg dojazdowych w tamtej okolicy wygląda dziś inaczej niż na starszych mapach.",
  ],
  districts: [
    "Drwinia",
    "Mikluszowice",
    "Grobla",
    "Dziewin",
    "Gawłówek",
    "Ispina",
    "Świniary",
    "Niedary",
    "Bieńkowice",
    "Wola Drwińska",
    "Wyżyce",
    "Trawniki",
    "Zielona",
  ],

  nearbyHeading: "Bochnia, Niepołomice i okolice też są na mojej trasie",
  nearbyParagraphs: [
    "Drwinia leży między dwoma kierunkami, w które i tak jeżdżę: Bochnią na wschodzie i Niepołomicami na zachodzie. Do obu dojeżdżam na co dzień, więc dołożenie tej gminy do trasy nie jest dla mnie żadnym problemem.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Bochnia",
    "Niepołomice",
    "Rzezawa",
    "Wieliczka",
    "Kraków",
    "Brzesko",
    "Nowy Wiśnicz",
    "Proszowice",
  ],

  about: blokOMnie("do Drwini", "w gminach wokół Bochni"),

  faq: [
    {
      question: "Mieszkam w dalekim sołectwie. Czy naprawdę dojedziesz?",
      answer:
        "Tak, do każdego z trzynastu — łącznie z Ispiną, Świniarami, Niedarami i Wyżycami. Dojazd jest bezpłatny niezależnie od odległości; jedyne, o co proszę, to nazwa sołectwa przy umawianiu, żebym dobrze zaplanowała trasę.",
    },
    ...faqWspolne("w gminie Drwinia"),
    {
      question: "Czy muszę gdzieś pojechać, żeby zobaczyć Thermomix na żywo?",
      answer:
        "Nie i to jest cały sens tej wizyty. Przywożę urządzenie do Ciebie, gotujemy na Twoim blacie i na Twoim prądzie. Nie trzeba jechać do Bochni ani do Krakowa, żeby zobaczyć, jak to działa.",
    },
    {
      question: "Gotuję dużo i z własnych warzyw. Czy to urządzenie ma sens w takim domu?",
      answer:
        "Zwykle tak, ale nie z tego powodu, z którego myślą sprzedawcy. Nie zastąpi Ci umiejętności ani smaku — zdejmie stanie przy garnku i pilnowanie. Najbardziej widać to przy zupach, powidłach i przecierach, czyli tam, gdzie normalnie trzeba mieszać przez godzinę.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki?",
      answer:
        "Jak najbardziej i w tej gminie często tak to wygląda — jedno spotkanie u kogoś, kto ma większą kuchnię, i kilka osób naraz. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 50.0962, lng: 20.4493 },
};
