import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * STARACHOWICE — miasto nad Kamienną, na północnym skraju Gór
 * Świętokrzyskich, otoczone lasami z każdej strony. Powstało ze zrośnięcia
 * dawnego miasteczka Wierzbnik z osadą przemysłową; zakład samochodowy
 * zbudowano tu w ramach Centralnego Okręgu Przemysłowego.
 *
 * KĄT: grzyby. To jedyne miejsce w całym serwisie, gdzie ten temat jest
 * naprawdę na miejscu — miasto leży w środku lasów, a wrzesień i październik
 * organizują tu weekendy tak samo jak sady organizują wrzesień
 * w Sandomierzu. Kuchennie to konkretny problem, o którym nikt nie pisze
 * uczciwie: nie „jak zbierać”, tylko CO ZROBIĆ Z PIĘCIOMA KILOGRAMAMI
 * W NIEDZIELĘ WIECZOREM, kiedy jutro praca.
 *
 * WAŻNE DLA UCZCIWOŚCI: Thermomix nie suszy grzybów i nie wolno sugerować,
 * że zastępuje suszarkę ani że przyspiesza samo czyszczenie. Robi trzy
 * rzeczy, które w tym momencie realnie pomagają — miele suszone na proszek,
 * gotuje zupę i sos bez pilnowania, i przygotowuje farsz. To trzeba
 * napisać wprost razem z tym, czego nie robi.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Starachowice leżą nad Kamienną, na skraju Gór Świętokrzyskich,
 *   w otoczeniu dużych kompleksów leśnych,
 * — miasto powstało ze zrośnięcia Wierzbnika z osadą fabryczną,
 * — zakład samochodowy powstał w ramach Centralnego Okręgu Przemysłowego,
 * — w mieście i przy nim są zalewy (Pasternik, Lubianka),
 * — nieopodal leży Świętokrzyski Park Narodowy.
 *
 * CZEGO NIE MA: nazw firm, danych o zatrudnieniu, twierdzeń o tym, ilu
 * mieszkańców chodzi na grzyby, i jakichkolwiek porad, które grzyby są
 * jadalne — od tego są atlasy i punkty skupu, nie strona o Thermomixie.
 */
export const STARACHOWICE: CityContent = {
  slug: "starachowice",
  h1: "Thermomix Starachowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Starachowice — prezentacja i cena",
  seoDescription:
    "Thermomix w Starachowicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Starachowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Starachowicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Starachowic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, od Wierzbnika po Michałów i Bugaj.",

  highlights: highlightyStandardowe("Starachowice i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Starachowicach – jak wygląda prezentacja?",
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
      id: "kosz-z-lasu",
      heading: "Wrzesień, pełen kosz i niedzielny wieczór",
      paragraphs: [
        "Starachowice są otoczone lasem z każdej strony — miasto leży na skraju Gór Świętokrzyskich, a za ostatnimi blokami zaczynają się kompleksy, do których nie trzeba nigdzie jechać. We wrześniu i październiku to organizuje weekend równie skutecznie jak sady organizują jesień pod Sandomierzem.",
        "Tylko że o zbieraniu pisze każdy, a o tym, co dzieje się potem — nikt. A dzieje się to: w niedzielę o siedemnastej stoi w kuchni kosz, jutro jest praca, i trzeba zdecydować, co z tym zrobić dzisiaj. Czyszczenie zajmuje tyle, ile zajmuje, i nie ma na to sposobu. Ale reszta wieczoru już da się skrócić.",
        "Powiem od razu, czego to urządzenie NIE robi, bo to ważniejsze niż to, co robi. Nie suszy. Nie czyści. Nie zastępuje suszarki ani sznurka nad piecem — jeśli ktoś Wam mówi inaczej, mija się z prawdą. Do suszenia potrzebujecie tego, co macie zawsze.",
        "Robi natomiast trzy rzeczy, które akurat wtedy naprawdę oszczędzają wieczór. Mieli suszone grzyby na proszek — a to jest przyprawa, która zimą ratuje zwykłą zupę i sos. Gotuje zupę bez pilnowania, więc nie trzeba stać i mieszać, żeby się nie przypaliło na dnie. I przygotowuje farsz — na uszka, na pierogi, na to, co u Was robi się przed świętami i zawsze zabiera pół dnia.",
        "To nie jest rewolucja. To jest kilka godzin odzyskanych w miesiącu, w którym akurat ich brakuje.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy, które robię najczęściej" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Starachowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i kilka pasujących terminów. Umawiam się popołudniami, wieczorami i w weekendy — a jesienią chętnie w tygodniu, bo wtedy soboty macie zajęte.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Starachowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla starachowickiej rodziny",
      paragraphs: [
        "W tygodniu obiad musi powstać w oknie między pracą, szkołą i wieczorem, a robi go zwykle jedna osoba. Jesienią do tego dochodzi wszystko, co przyjeżdża z lasu i z działki i co trzeba przerobić od razu.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy Ty zajmujesz się czymś innym — a przy przerabianiu zapasów to jest różnica między jednym a trzema wieczorami.",
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

  districtsHeading: "Do których dzielnic Starachowic dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — od Wierzbnika po osiedla na wzgórzach.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Wierzbnik",
    "Michałów",
    "Majówka",
    "Bugaj",
    "Orłowo",
    "Łazy",
    "Południe",
    "Wzgórze",
    "Lubianka",
    "Pasternik",
  ],

  nearbyHeading: "Okolica Starachowic",
  nearbyParagraphs: [
    "Wąchock, Skarżysko-Kamienna, Kunów, Ostrowiec Świętokrzyski i Suchedniów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Wąchock",
    "Skarżysko-Kamienna",
    "Kunów",
    "Ostrowiec Świętokrzyski",
    "Suchedniów",
    "Bodzentyn",
  ],

  about: blokOMnie("do Starachowic", "w Starachowicach i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Starachowic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych gmin. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Starachowicach"),
    {
      question: "Czy Thermomix suszy grzyby?",
      answer:
        "Nie i nie chcę, żeby ktoś kupił go w tym przekonaniu. Do suszenia potrzebujesz suszarki albo miejsca nad piecem, tak jak dotąd. Thermomix przydaje się dopiero potem: miele suszone na proszek, gotuje zupę bez pilnowania i robi farsz.",
    },
    {
      question: "Mam mało miejsca na blacie — czy to się zmieści?",
      answer:
        "Na spotkaniu ustawimy urządzenie u Ciebie i zobaczysz to na własne oczy, zamiast zgadywać z centymetrów w internecie. Jeśli okaże się, że w Twojej kuchni realnie nie ma na to miejsca, powiem to wprost.",
    },
  ],

  geo: { lat: 51.0361, lng: 21.0708 },
};
