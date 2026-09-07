import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * POLICE — miasto z wielkim zakładem chemicznym, który robi jedną
 * rzecz na ogromną skalę. Wszystko poza nim w mieście i tak muszą
 * robić inni.
 *
 * KĄT: czego to NIE zastąpi w kuchni. Odwrotność hasła „jedno
 * urządzenie zamiast pięciu": rzetelna lista sprzętów, które zostają,
 * bo tego nikt nie mówi przed zakupem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST — I WYŁĄCZNIE O TYM, CZEGO NIE ROBI:
 * — piekarnik zostaje: rzeczy, które mają się zrumienić i zapiec,
 *   powstają w piekarniku, a nie tutaj,
 * — patelnia zostaje: smażenie i to, co się na nim robi, to inna
 *   dziedzina,
 * — nóż i deska zostają: część rzeczy szybciej pokroić ręką, niż
 *   składać i myć urządzenie,
 * — czajnik i drobiazgi zostają, bo do szklanki herbaty nikt tego
 *   nie włącza.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TWIERDZEŃ, ŻE COŚ ZASTĘPUJE, jeśli nie jestem pewna.
 *   Cała sekcja ma iść w drugą stronę i ma być zachowawcza.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNEGO WYLICZANIA, ile sprzętów „znika" — to jest chwyt
 *   sprzedażowy i tutaj obowiązuje zakaz jego używania.
 *
 * ROZGRANICZENIE. Ostrowiec mówi „jedno urządzenie zamiast pięciu"
 * (co upraszcza), Gdynia o tym, co jest w pudełku, Starogard Gdański
 * o szafce z nieużywanym sprzętem. Tutaj chodzi o RZECZY, KTÓRE
 * ZOSTAJĄ NA BLACIE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Police są miastem z dużym zakładem przemysłu chemicznego.
 */
export const POLICE: CityContent = {
  slug: "police",
  h1: "Thermomix Police – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Police — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Policach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Police — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Policach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Polic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Police i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Piekarnik, patelnia i nóż zostają. I dobrze o tym wiedzieć przed.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Policach – jak wygląda prezentacja?",
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
      id: "czego-nie-zastapi",
      heading: "Miasto jednego wielkiego zakładu — i to, czego ten sprzęt nie zastąpi",
      paragraphs: [
        "Police żyją obok ogromnego zakładu, który robi jedną rzecz na wielką skalę — a całą resztę w mieście i tak muszą robić wszyscy inni. Wykorzystam to do listy, której nie zobaczycie w żadnej ulotce, bo idzie pod prąd sprzedaży: co zostaje w kuchni, mimo że pojawia się w niej to urządzenie.",
        "Piekarnik zostaje. Wszystko, co ma się zapiec i zrumienić na wierzchu — pieczeń, zapiekanka, ciasto z chrupiącą górą — powstaje w piekarniku. Tutaj przygotujecie ciasto albo farsz, ale ostatni etap należy do piekarnika i nic tego nie zmieni.",
        "Patelnia zostaje. Smażenie to osobna dziedzina i tak trzeba to nazwać: kotlet, naleśnik, jajecznica z przypieczonym brzegiem to nie jest to samo, co gotowanie w naczyniu z mieszadłem. Kto lubi patelnię, będzie jej używał dalej i nie ma w tym nic złego.",
        "Nóż i deska zostają, i to jest rzecz, którą początkujący najczęściej odkrywają dopiero po kilku tygodniach. Przy dwóch marchewkach szybciej jest pokroić ręką niż złożyć urządzenie, użyć go i potem umyć. Sprzęt naprawdę się opłaca przy większej robocie, a nie przy każdej czynności po kolei.",
        "Zostaje też cała drobnica: czajnik, bo do jednej szklanki herbaty nikt tego nie włącza, i te wszystkie rzeczy, które macie pod ręką od lat. Nie będę Wam wyliczać, ile sprzętów „znika” po zakupie — to jest chwyt sprzedażowy i nie zamierzam go używać, bo za pół roku i tak sami byście policzyli.",
        "Piszę to nie po to, żeby zniechęcać, tylko dlatego, że rozczarowanie bierze się prawie zawsze z nadmiernych obietnic, a nie ze sprzętu. Jeśli wiecie z góry, że to przejmuje określoną robotę, a nie całą kuchnię, to zostaje Wam realna korzyść zamiast żalu. A na spotkaniu chętnie pokażę i jedno, i drugie: co robi dobrze i gdzie kończy się jego rola.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Policach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie konkretne danie, o które chodzi, powiedzcie mi — sprawdzimy, czy to w ogóle robota dla tego urządzenia, czy dla piekarnika.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Policach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla polickiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie ze Szczecina.",
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

  districtsHeading: "Do których części Polic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Osiedle Anny Jagiellonki",
    "Osiedle Gryfitów",
    "Mścięcino",
    "Jasienica",
    "Osiedle Chrobrego",
    "Osiedle Księcia Bogusława",
  ],

  nearbyHeading: "Poza Police też przyjadę",
  nearbyParagraphs: [
    "Szczecin, Goleniów, Nowe Warpno i Dobra są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Szczecin", "Goleniów", "Nowe Warpno", "Dobra", "Stargard", "Gryfino"],

  about: blokOMnie("do Polic", "w Policach i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Polic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Policach"),
    {
      question: "Czego to nie zastąpi w kuchni?",
      answer:
        "Piekarnika — wszystko, co ma się zapiec i zrumienić, powstaje tam. Patelni — smażenie to osobna dziedzina. Noża i deski, bo przy dwóch marchewkach szybciej pokroić ręką, niż złożyć urządzenie i potem je umyć. I czajnika, bo do jednej szklanki herbaty nikt tego nie włącza.",
    },
    {
      question: "Ile sprzętów zniknie z mojej kuchni?",
      answer:
        "Nie będę tego wyliczać — to chwyt sprzedażowy, a Wy i tak sprawdzilibyście go sami po pół roku. Rozczarowanie bierze się prawie zawsze z nadmiernych obietnic, a nie ze sprzętu.",
    },
  ],

  geo: { lat: 53.5525, lng: 14.5719 },
};
