import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * NOWA RUDA — miasto pogórnicze w Sudetach, rozciągnięte po dolinach
 * na trzy oddzielne dzielnice. W 2025 r. urodziło się tu siedemdziesiąt
 * dzieci, a zmarło trzysta pięć osób.
 *
 * KĄT: dzieci, które wyjechały. Dom, w którym gotowało się dla czworga,
 * a od kilku lat gotuje dla dwojga — i dwa razy w roku znowu dla ośmiu.
 * To NIE jest to samo co „gość, który zostaje na trzy tygodnie"
 * (Krynica) ani „gotowanie mniejszych porcji" (osobna strona). Tu chodzi
 * o dom, w którym zmieniła się liczba osób przy stole na stałe.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — liczby: w 2025 r. 70 urodzeń i 305 zgonów, w pięć lat ubyło ponad
 *   dwa tysiące osób. To nie jest smutna anegdota, tylko opis tego,
 *   ile osób siada do obiadu,
 * — co się realnie zmienia w kuchni: gotuje się rzadziej, ale wciąż
 *   za dużo, bo ręka pamięta większe porcje,
 * — co pomaga: mniejsze porcje bez przeliczania w głowie, mrożenie
 *   nadmiaru, i te dwa razy w roku, gdy trzeba nagle ugotować dla ośmiu,
 * — czego NIE zrobi: nie sprawi, że gotowanie dla dwojga stanie się
 *   znowu ciekawe. To jest kwestia chęci, nie sprzętu.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO ŻALU, WSPÓŁCZUCIA ANI KOMENTOWANIA CZYJEGOŚ ŻYCIA. Piszę
 *   o liczbie talerzy, nie o samotności. Ton ma być rzeczowy.
 * — ŻADNYCH PORAD O MROŻENIU, ROZMRAŻANIU I PRZECHOWYWANIU (zasada
 *   ze Skierniewic) — wspominam mrożenie jako czynność, nie doradzam,
 *   co i jak długo trzymać.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ROZGRANICZENIE. Krynica mówi o gościu na trzy tygodnie, Wieliczka
 * o gościach na jeden dzień, inna strona o gotowaniu mniejszych porcji
 * niż podaje przepis. Tutaj chodzi o TRWAŁĄ ZMIANĘ LICZBY OSÓB W DOMU.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy ok. dwudziestu tysięcy mieszkańców wg GUS (31.12.2024);
 *   ewidencja meldunkowa urzędu daje 19 006 osób na 29.12.2025,
 * — w 2025 r. urodziło się 70 dzieci, zmarło 305 osób; w pięć lat
 *   ubyło 2 049 osób,
 * — mediana wieku 46,5 lat,
 * — kopalnia „Ruben" powstała w 1781 r.; ostatni wózek węgla wyjechał
 *   z pola „Piast" 15 września 1994 r., wydobycie w polu „Słupiec"
 *   zakończono w lutym 2000 r.,
 * — Podziemna Trasa Turystyczna w Drogosławiu przyjęła pierwszych
 *   turystów 9 lutego 1996 r.,
 * — miasto ma trzy dzielnice: Centrum, Drogosław i Słupiec; Słupiec miał
 *   prawa miejskie od 1967 r. i został włączony do Nowej Rudy w 1973 r.,
 * — jedna linia autobusowa spina całe miasto: trasa 35,5 km, przejazd
 *   ok. 38 minut, 22 kursy dziennie, częstotliwość co jedną–dwie godziny,
 * — od 2015 r. odbywa się tu festiwal Góry Literatury,
 * — NIE POTWIERDZIŁAM żadnego produktu spożywczego z miasta na
 *   ministerialnej Liście Produktów Tradycyjnych; wpisy z powiatu
 *   kłodzkiego (pstrąg, ciasto z kruszonką, miody) nie są noworudzkie.
 */
export const NOWA_RUDA: CityContent = {
  slug: "nowa-ruda",
  h1: "Thermomix Nowa Ruda – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowa Ruda — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowej Rudzie: bezpłatna prezentacja TM7 u Ciebie w domu — Centrum, Drogosław, Słupiec. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowa Ruda — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowej Rudzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowej Rudy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do Centrum, Drogosławia i Słupca tak samo.",

  highlights: highlightyStandardowe("Nowa Ruda i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Garnek został ten sam, a osób przy stole jest mniej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowej Rudzie – jak wygląda prezentacja?",
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
      id: "dwie-osoby",
      heading: "Kuchnia w domu, z którego dzieci wyjechały",
      paragraphs: [
        "Podam jedną liczbę, bo ona mówi o tym mieście więcej niż cały akapit. W dwa tysiące dwudziestym piątym roku urodziło się w Nowej Rudzie siedemdziesiąt dzieci, a zmarło trzysta pięć osób. W ciągu pięciu lat ubyło ponad dwa tysiące mieszkańców. Kopalnia zamknęła się ostatecznie w dwutysięcznym roku i pokolenie, które wtedy kończyło szkołę, w większości wyjechało — najpierw na Górny Śląsk, potem dalej.",
        "Piszę o tym nie po to, żeby komukolwiek współczuć, tylko dlatego, że to jest opis czegoś zupełnie konkretnego: liczby talerzy na stole. W bardzo wielu tutejszych domach przez dwadzieścia lat gotowało się dla czworga albo pięciorga, a od kilku lat gotuje się dla dwojga. Ta zmiana jest cicha i nikt o niej nie mówi na prezentacjach jako o problemie — ale wraca w rozmowie za każdym razem.",
        "Wygląda to zawsze podobnie. Ręka pamięta stare proporcje, więc zupy wychodzi za dużo. Gotuje się rzadziej, bo szkoda zachodu dla dwóch osób, a potem trzy dni z rzędu je się to samo. Duży garnek stoi w szafce, bo jest za duży, ale nikt go nie wyrzuca — bo przecież święta.",
        "Co realnie pomaga i powiem to bez ubarwiania. Po pierwsze: mniejsza porcja bez przeliczania w głowie. Przepis prowadzi krok po kroku i można ugotować mało bez tego wrażenia, że się „bawi w gotowanie”. Po drugie: to, co i tak wyjdzie za duże, da się od razu podzielić i schować do zamrażarki, a potem odgrzać. Nie doradzam, co i jak długo można trzymać — od tego są etykiety i osoby, które się na tym znają — mówię tylko o samej czynności dzielenia i chowania.",
        "Po trzecie i najważniejsze: te dwa razy w roku. Kiedy dzieci przyjeżdżają z rodzinami i nagle trzeba ugotować dla ośmiu osób w domu, w którym od miesięcy gotuje się dla dwóch. Wtedy działa to samo, co przy małej porcji — danie w jednym naczyniu, które gotuje się bez pilnowania, więc można w tym czasie zajmować się gośćmi zamiast stać przy kuchence. Przy większej liczbie osób gotuje się partiami i tego nie ukrywam.",
        "I rzecz, której to urządzenie nie zrobi. Nie sprawi, że gotowanie dla dwojga znowu stanie się ciekawe. To nie jest kwestia sprzętu, tylko chęci, a chęć wraca albo nie wraca niezależnie od tego, co stoi na blacie. Mogę obiecać tylko tyle, że kiedy chęć wróci, mniej rzeczy będzie stało na przeszkodzie.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowej Rudzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, dla ilu osób gotujecie na co dzień. Jeśli dla dwóch, to dla dwóch będziemy gotować na spotkaniu — nie ma sensu pokazywać garnka na osiem porcji komuś, kto ich nie potrzebuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowej Rudzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla noworudzkiej rodziny",
      paragraphs: [
        "Nowa Ruda jest rozciągnięta po dolinach i trasa jednej linii autobusowej z końca na koniec miasta liczy ponad trzydzieści pięć kilometrów, a przejazd zajmuje blisko czterdzieści minut. To znaczy, że zakupy robi się rzadziej i większe, a obiad powstaje z tego, co jest w domu.",
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

  districtsHeading: "Do których części Nowej Rudy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzech dzielnic tak samo, bez dopłaty za dojazd.",
    "Miasto jest rozciągnięte po dolinach, a Słupiec był jeszcze w latach sześćdziesiątych osobnym miastem i dołączył do Nowej Rudy dopiero w siedemdziesiątym trzecim. Przy umawianiu wystarczy podać dzielnicę i ulicę — to wpływa na porę spotkania, a nie na jego koszt.",
  ],
  districts: ["Centrum", "Drogosław", "Słupiec", "Zdrojowisko"],

  nearbyHeading: "Poza Nową Rudę też przyjadę",
  nearbyParagraphs: [
    "Wsie gminy wiejskiej otaczają miasto pierścieniem — Jugów, Ludwikowice Kłodzkie, Wolibórz, Bożków i pozostałe są w zasięgu jednej trasy, bez dopłaty za odległość.",
  ],
  nearbyTowns: ["Jugów", "Ludwikowice Kłodzkie", "Wolibórz", "Bożków", "Radków", "Kłodzko"],

  about: blokOMnie("do Nowej Rudy", "w Nowej Rudzie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowej Rudy bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich trzech dzielnic — Centrum, Drogosławia i Słupca — oraz do okolicznych wsi. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nowej Rudzie"),
    {
      question: "Czy to ma sens, jeśli gotuję tylko dla dwóch osób?",
      answer:
        "Może mieć, ale nie z powodów, które zwykle się podaje. Przepis prowadzi krok po kroku, więc małą porcję da się ugotować bez przeliczania w głowie, a to, co wyjdzie za duże, można od razu podzielić i schować. Nie obiecam natomiast, że dzięki temu gotowanie dla dwojga znowu stanie się ciekawe — to nie zależy od sprzętu.",
    },
    {
      question: "Ugotuję w tym dla całej rodziny, kiedy przyjadą na święta?",
      answer:
        "Tak, choć przy ośmiu osobach gotuje się partiami — naczynie ma swoją pojemność i nie będę udawać, że jest inaczej. Zaletą jest co innego: danie w jednym naczyniu gotuje się bez stania obok, więc można w tym czasie być z gośćmi, a nie w kuchni.",
    },
  ],

  geo: { lat: 50.5806, lng: 16.5028 },
};
