import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * GORZÓW WIELKOPOLSKI — największe miasto województwa lubuskiego, siedziba
 * wojewody; miasto, do którego po 1945 roku wszyscy skądś się sprowadzili
 * i które do dziś ma dużą rotację mieszkańców.
 *
 * KĄT: przeprowadzka. To jest jedyne miejsce w serwisie na sytuację
 * całkowicie praktyczną, o której nikt nie pisze, a która dotyczy każdego
 * właściciela takiego sprzętu prędzej czy później: JAK PRZEWIEŹĆ TO
 * URZĄDZENIE I CO ZROBIĆ Z KUCHNIĄ W NOWYM MIESZKANIU.
 *
 * SEKCJA MA BYĆ LISTĄ RZECZOWYCH WSKAZÓWEK, a nie ogólnikami: wyjąć nóż
 * i uszczelkę, wyschnąć przed spakowaniem, wozić naczynie osobno,
 * nie kłaść na boku, oryginalne pudełko jest najlepsze i warto je
 * zatrzymać. Plus rzecz organizacyjna: przy zmianie adresu warto
 * to zgłosić, żeby ewentualny serwis wiedział, gdzie jesteście.
 *
 * CZEGO NIE MA: obietnic dotyczących gwarancji przy uszkodzeniu
 * w transporcie ani twierdzeń o tym, co producent uzna — tego nie wiem
 * i nie wolno mi zgadywać.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Gorzów jest największym miastem województwa lubuskiego,
 * — po 1945 roku ludność regionu wymieniła się niemal całkowicie.
 */
export const GORZOW_WIELKOPOLSKI: CityContent = {
  slug: "gorzow-wielkopolski",
  h1: "Thermomix Gorzów Wielkopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Gorzów Wielkopolski — prezentacja i cena",
  seoDescription:
    "Thermomix w Gorzowie Wielkopolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gorzów Wielkopolski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gorzowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gorzowa Wielkopolskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Gorzów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gorzowie – jak wygląda prezentacja?",
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
      id: "przeprowadzka",
      heading: "Miasto, do którego wszyscy skądś przyjechali — i jak przewieźć ten sprzęt",
      paragraphs: [
        "Gorzów jest miastem, w którym po wojnie zaczynali wszyscy i do którego do dziś sporo osób się sprowadza albo z niego wyjeżdża. To dobre miejsce na rzecz czysto praktyczną, o której nie pisze nikt, a która prędzej czy później dotyczy każdego właściciela takiego sprzętu: jak go przewieźć przy przeprowadzce.",
        "Zacznę od tego, co warto zrobić od razu przy zakupie: zatrzymać oryginalne pudełko z wkładkami. Zajmuje miejsce w piwnicy i wszyscy je wyrzucają, a przy przeprowadzce, przy wysyłce do serwisu i przy ewentualnej odsprzedaży jest najlepszym możliwym opakowaniem. Nic, co złożycie sami z ręcznika i folii, nie będzie równie dobre.",
        "Przy samym pakowaniu jest kilka rzeczy, których warto pilnować. Naczynie wozi się osobno, wyjęte z podstawy — razem stanowi wysoką, chwiejną całość, która przy hamowaniu przewraca się jako pierwsza. Nóż i uszczelkę też lepiej wyjąć i zapakować oddzielnie, żeby nie obijały się w środku. Wszystko musi być suche: sprzęt spakowany wilgotny i stojący dwa dni w kartonie potrafi się nieprzyjemnie zapachnieć. I rzecz najprostsza: nie kłaść urządzenia na boku ani do góry nogami, tylko wozić je tak, jak stoi.",
        "Zaznaczę uczciwie granicę swojej wiedzy: nie powiem Wam, jak wygląda sprawa gwarancji przy uszkodzeniu w transporcie, bo tego nie wiem i nie będę zgadywać. To jest pytanie do serwisu, a nie do mnie.",
        "Jest jeszcze rzecz organizacyjna, o której się zapomina: jeśli zmieniacie adres, warto to zgłosić. Nie z powodu formalności, tylko dlatego, że gdy kiedyś potrzebna będzie naprawa albo dostawa czegoś, ktoś musi wiedzieć, gdzie jesteście. Mnie wystarczy SMS.",
        "I na koniec sprawa, która przy przeprowadzce bywa ważniejsza od samego transportu: nowa kuchnia. Zanim wstawicie sprzęt gdziekolwiek, sprawdźcie, czy da się go otworzyć pod wiszącą szafką i czy jest tam wolne gniazdko. Urządzenie schowane, bo „na razie nie ma miejsca”, potrafi zostać schowane na rok — i to jest najczęstszy sposób, w jaki dobry sprzęt przestaje być używany.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gorzowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gorzowie Wielkopolskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gorzowskiej rodziny",
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

  districtsHeading: "Do których części Gorzowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Górczyn",
    "Zawarcie",
    "Piaski",
    "Manhattan",
    "Staszica",
    "Wieprzyce",
    "Zakanale",
    "Chróścik",
    "Janice",
  ],

  nearbyHeading: "Poza Gorzów też przyjadę",
  nearbyParagraphs: [
    "Witnica, Skwierzyna, Strzelce Krajeńskie i Kostrzyn nad Odrą są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Witnica", "Skwierzyna", "Strzelce Krajeńskie", "Kostrzyn nad Odrą", "Drezdenko", "Sulęcin"],

  about: blokOMnie("do Gorzowa Wielkopolskiego", "w Gorzowie i okolicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gorzowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Gorzowie Wielkopolskim"),
    {
      question: "Jak przewieźć Thermomix przy przeprowadzce?",
      answer:
        "Najlepiej w oryginalnym pudełku, dlatego warto je zatrzymać już przy zakupie. Naczynie wozi się osobno, wyjęte z podstawy, bo razem tworzą wysoką, chwiejną całość. Nóż i uszczelkę też lepiej wyjąć. Wszystko musi być suche, a urządzenie wozi się tak, jak stoi — nie na boku.",
    },
    {
      question: "Zmieniam adres. Trzeba coś zgłaszać?",
      answer:
        "Wystarczy mi SMS — nie chodzi o formalność, tylko o to, żeby przy ewentualnej naprawie albo dostawie ktoś wiedział, gdzie jesteś. Przy okazji warto od razu sprawdzić w nowej kuchni, czy urządzenie da się otworzyć pod wiszącą szafką i czy jest wolne gniazdko.",
    },
  ],

  geo: { lat: 52.7368, lng: 15.2288 },
};
