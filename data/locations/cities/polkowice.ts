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
 * POLKOWICE — miasto Legnicko-Głogowskiego Okręgu Miedziowego, przy
 * kopalni miedzi i fabryce silników. W rankingu zamożności samorządów
 * tygodnika „Wspólnota" gmina od lat zajmuje pierwsze miejsce wśród
 * gmin miejsko-wiejskich o statusie miasta powiatowego.
 *
 * KĄT: kiedy pieniądze nie są problemem. Sytuacja, w której cena
 * nie boli — i dlaczego to wcale nie upraszcza decyzji, tylko ją
 * utrudnia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — gdy kwota nie boli, znika naturalny hamulec: nikt nie liczy, czy
 *   będzie tego używał, bo nie musi,
 * — a to jest dokładnie ta droga, którą sprzęt trafia do szafki,
 * — Aga NIE sprzedaje mocniej komuś, kto może sobie pozwolić, i mówi
 *   to wprost, bo pokusa jest oczywista,
 * — pytanie zostaje to samo, niezależnie od zasobności: ile razy
 *   w tygodniu naprawdę gotujecie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD FINANSOWYCH ani oceniania, kogo na co stać.
 * — ŻADNYCH LICZB O ZAROBKACH mieszkańców ani sugestii, że „tu ludzi
 *   stać". O zamożności mówi się na poziomie GMINY (ranking budżetowy),
 *   nigdy mieszkańców.
 * — ŻADNEGO SCHLEBIANIA. Sekcja ma być chłodna, nie komplementująca.
 *
 * ROZGRANICZENIE. Bełchatów mówi o wysokości raty, Bielawa o poczuciu,
 * że to fanaberia (wydatek na siebie), Kobyłka o kupnie „na wyrost",
 * Reda o sytuacjach, w których lepiej poczekać. Tutaj chodzi o BRAK
 * BARIERY CENOWEJ jako o osobny problem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — pod Polkowicami działa kopalnia miedzi (ZG Polkowice-Sieroszowice),
 * — w Polkowicach działa fabryka silników Volkswagena (od 1999 r.),
 * — gmina od lat zajmuje czołowe miejsce w rankingu zamożności
 *   samorządów tygodnika „Wspólnota",
 * — najstarszy zabytek to kościół św. Michała Archanioła.
 */
export const POLKOWICE: CityContent = {
  slug: "polkowice",
  h1: "Thermomix Polkowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Polkowice — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Polkowicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Polkowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Polkowicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Polkowic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Polkowice i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-7.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Cena, która nie boli, potrafi być gorszym doradcą niż cena, która boli.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Polkowicach – jak wygląda prezentacja?",
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
      id: "gdy-cena-nie-boli",
      heading: "Gmina z czołówki rankingów — i zakup, przy którym cena nie boli",
      paragraphs: [
        "Polkowice leżą w okręgu miedziowym: obok kopalnia, w mieście fabryka silników, a gmina od lat zajmuje czołowe miejsca w rankingu zamożności samorządów tygodnika „Wspólnota”. To są liczby budżetu gminy, nie niczyjej wypłaty, i nie zamierzam z nich wyciągać wniosków o kieszeniach mieszkańców. Wykorzystam je natomiast do sytuacji, która przy takim zakupie jest osobnym problemem: co, jeśli ta kwota po prostu nie boli.",
        "Zwykle myśli się o tym jak o ułatwieniu i to jest błąd. Cena, która boli, robi jedną pożyteczną rzecz: zmusza do policzenia, czy będziecie tego używać. Człowiek, który musi się zastanowić, zastanawia się naprawdę — nad tym, ile razy w tygodniu gotuje, co konkretnie zrobi i czy warto. Kiedy kwota nie boli, ten hamulec znika i decyzja zapada w dziesięć minut, bo może.",
        "A to jest dokładnie ta droga, którą sprzęt trafia do szafki. Nie przez zły produkt i nie przez złego sprzedawcę — przez brak momentu, w którym ktoś zapytał sam siebie, po co mu to. Widuję takie zakupy i są dla mnie gorsze niż odmowa, bo po pół roku wracają jako opinia, że „to się nie sprawdza”.",
        "Powiem też o sobie rzecz, której wolałabym nie mówić, ale która jest tu najważniejsza. Pokusa, żeby sprzedawać mocniej komuś, kto może sobie pozwolić, jest oczywista — mniej pytań, szybsza decyzja, ten sam zarobek. Nie robię tego i pilnuję się w tej sprawie bardziej niż w jakiejkolwiek innej. Rozmowa u kogoś zamożnego wygląda u mnie tak samo jak każda inna: te same pytania i ta sama lista wad.",
        "Nie oceniam przy tym niczyjego budżetu i nie doradzam w sprawach finansowych — nie mam do tego kompetencji i nie zamierzam ich udawać. Nie interesuje mnie, na co kogo stać. Interesuje mnie jedno pytanie i jest ono identyczne w każdym domu: ile razy w minionym miesiącu w Waszej kuchni powstał obiad.",
        "Jeśli ta liczba jest duża, zakup ma sens niezależnie od tego, czy kwota boli, czy nie. Jeśli jest mała, to brak bariery cenowej niczego nie naprawia — kupujecie wtedy przedmiot, a nie rozwiązanie. Policzcie to przed spotkaniem, a ja na spotkaniu powiem to samo, co tutaj.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Polkowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jak wygląda Wasz zwykły tydzień w kuchni — od tego zaczniemy rozmowę, a nie od liczb.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Polkowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla polkowickiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po zmianie.",
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

  districtsHeading: "Do których części Polkowic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum – Stare Miasto",
    "Sienkiewicza",
    "Dąbrowskiego – Hubala",
    "Polanka",
    "Krupińskiego",
    "Gwarków",
    "Polkowice Dolne",
  ],

  nearbyHeading: "Poza Polkowice też przyjadę",
  nearbyParagraphs: [
    "Lubin, Chocianów, Grębocice i Rudna są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubin", "Chocianów", "Głogów", "Przemków", "Legnica", "Ścinawa"],

  about: blokOMnie("do Polkowic", "w Polkowicach i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Polkowic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Polkowicach"),
    {
      question: "Stać nas na to bez zastanowienia. Czy to upraszcza decyzję?",
      answer:
        "Utrudnia. Cena, która boli, zmusza do policzenia, czy będziecie tego używać — gdy nie boli, ten hamulec znika i decyzja zapada w dziesięć minut. To jest dokładnie ta droga, którą sprzęt trafia do szafki: nie przez zły produkt, tylko przez brak momentu, w którym ktoś zapytał sam siebie, po co mu to.",
    },
    {
      question: "Czy sprzedajesz inaczej komuś, kogo stać?",
      answer:
        "Nie i pilnuję się w tej sprawie bardziej niż w jakiejkolwiek innej, bo pokusa jest oczywista: mniej pytań, szybsza decyzja, ten sam zarobek. Rozmowa wygląda u mnie tak samo w każdym domu — te same pytania i ta sama lista wad. Nie oceniam przy tym niczyjego budżetu i nie doradzam w sprawach finansowych.",
    },
  ],

  geo: { lat: 51.5000, lng: 16.0667 },
};
