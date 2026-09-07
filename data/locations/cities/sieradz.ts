import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * SIERADZ — jedno z najstarszych miast w Polsce, nad Wartą. Odbywały się
 * tu zjazdy i sądy, spisywano dokumenty; miasto o wielowiekowej tradycji
 * urzędowej.
 *
 * KĄT: „a jeśli się rozmyślę?". Pytanie o możliwość wycofania się
 * z zakupu, którego nie ma na żadnej stronie sprzedażowej — bo jest
 * niewygodne — a które ludzie noszą w głowie i którego często się wstydzą.
 *
 * TWARDA GRANICA — NAJWAŻNIEJSZA NA TEJ STRONIE: NIE PODAJĘ ŻADNYCH
 * WARUNKÓW, TERMINÓW ANI LICZBY DNI. Prawo do odstąpienia zależy od tego,
 * gdzie i jak umowa została zawarta, a przepisy i procedury się zmieniają.
 * Podanie tu konkretnej liczby dni byłoby udawaniem prawniczki i mogłoby
 * komuś realnie zaszkodzić — bo ktoś by na tym polegał.
 *
 * CO STRONA MOŻE POWIEDZIEĆ UCZCIWIE I CO MA POWIEDZIEĆ:
 * — że takie uprawnienia w ogóle istnieją i zależą od sposobu zawarcia
 *   umowy,
 * — że wszystko, co obowiązuje, jest w dokumentach, które klientka
 *   dostaje i podpisuje — i że warto je przeczytać PRZED podpisem,
 * — że można o to zapytać wprost przed decyzją i że pytanie o to nie jest
 *   niczym niestosownym,
 * — i jak zachowuje się Aga: mówi, co wie, a przy czym nie jest pewna —
 *   sprawdza, zamiast zgadywać.
 *
 * ROZGRANICZENIE. Bełchatów mówi o wysokości raty, Radom o zakupie bez
 * prezentacji, Jarocin o chwytach sprzedażowych. Tutaj chodzi o WYCOFANIE
 * SIĘ po decyzji.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Sieradz jest jednym z najstarszych miast w Polsce, leży nad Wartą.
 */
export const SIERADZ: CityContent = {
  slug: "sieradz",
  h1: "Thermomix Sieradz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sieradz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sieradzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sieradz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sieradzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sieradza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Sieradz i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie musisz decydować tego samego dnia — i możesz o wszystko dopytać przed podpisem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sieradzu – jak wygląda prezentacja?",
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
      id: "a-jesli-sie-rozmysle",
      heading: "Miasto starych dokumentów — i pytanie „a jeśli się rozmyślę?”",
      paragraphs: [
        "Sieradz należy do najstarszych miast w Polsce; przez wieki zjeżdżano tu, żeby coś rozstrzygnąć i spisać. Wykorzystam to do pytania, które ludzie noszą w głowie przed takim zakupem, a zadają rzadko, bo wydaje im się niestosowne: a co, jeśli podpiszę i się rozmyślę?",
        "Zacznę od tego, że to jest normalne pytanie i zadawanie go nie oznacza braku zaufania ani niepoważnego podejścia. Przy wydatku tej wielkości chęć wiedzenia, jak się wycofać, jest po prostu rozsądna. Nigdy nie potraktowałam tego pytania jako obrazy i nie zamierzam zaczynać.",
        "Teraz rzecz, przy której muszę być bardzo precyzyjna, i proszę potraktować to poważnie. Nie podam tu żadnych terminów ani liczby dni. Uprawnienia do odstąpienia zależą od tego, gdzie i w jaki sposób umowa została zawarta, a przepisy i procedury bywają zmieniane. Gdybym wpisała tu konkretną liczbę, ktoś mógłby na niej polegać — i to jest dokładnie ten rodzaj szkody, którego nie chcę wyrządzić. Nie jestem prawniczką i nie będę nią udawać.",
        "Co mogę powiedzieć uczciwie: takie uprawnienia istnieją, ich zakres zależy od formy zakupu, a wszystko, co obowiązuje w Waszej konkretnej sytuacji, jest zapisane w dokumentach, które dostajecie do podpisu. To brzmi banalnie, ale wniosek z tego jest jak najbardziej praktyczny: przeczytajcie te dokumenty przed podpisem, nie po. Nie ma na świecie sprzedawcy, który by się na tym obraził, a jeśli jakiś się obraża — to jest właśnie odpowiedź na pytanie, czy warto u niego kupować.",
        "Jak ja się w tym zachowuję: jeśli zapytacie mnie o coś, czego jestem pewna, odpowiem od razu. Jeśli o coś, czego nie jestem pewna, powiem „nie wiem, sprawdzę” i sprawdzę — zamiast powiedzieć cokolwiek, żeby brzmieć kompetentnie. Przy pytaniach o umowy i terminy to jest jedyne uczciwe zachowanie.",
        "I rzecz, która rozwiązuje ten problem najlepiej ze wszystkich: nie musicie decydować tego samego dnia. Nigdy nie stawiam warunku, że oferta jest ważna tylko dziś, i nie robię niczego, co miałoby popchnąć do podpisu na miejscu. Decyzja podjęta po tygodniu jest lepsza dla Was i — szczerze mówiąc — lepsza także dla mnie, bo nie wraca potem jako żal.",
      ],
      links: [{ href: "/finansowanie", label: "Finansowanie i raty" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sieradzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie pytania o dokumenty, powiedzcie o tym przy umawianiu — przygotuję się i odpowiem konkretnie, a nie ogólnikami.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sieradzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sieradzkiej rodziny",
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

  districtsHeading: "Do których części Sieradza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Śródmieście",
    "Praga",
    "Osiedle Wojska Polskiego",
    "Jeziory",
    "Zapusta",
    "Dzigorzew",
    "Męka",
    "Woźniki",
    "Monice",
  ],

  nearbyHeading: "Poza Sieradz też przyjadę",
  nearbyParagraphs: [
    "Zduńska Wola, Warta, Błaszki i Złoczew są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zduńska Wola", "Warta", "Błaszki", "Złoczew", "Wieluń", "Łask"],

  about: blokOMnie("do Sieradza", "w Sieradzu i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sieradza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sieradzu"),
    {
      question: "A jeśli podpiszę i się rozmyślę?",
      answer:
        "To normalne pytanie i nigdy nie traktuję go jako braku zaufania. Nie podam tu jednak żadnych terminów ani liczby dni — uprawnienia zależą od formy zakupu, przepisy się zmieniają, a gdybyś polegała na liczbie z mojej głowy, mogłabym Ci realnie zaszkodzić. Wszystko, co obowiązuje w Twojej sytuacji, jest w dokumentach do podpisu i warto je przeczytać przed, a nie po.",
    },
    {
      question: "Czy muszę decydować w dniu prezentacji?",
      answer:
        "Nie. Nigdy nie stawiam warunku, że oferta jest ważna tylko dziś, i nie robię niczego, co miałoby popchnąć do podpisu na miejscu. Decyzja podjęta po tygodniu jest lepsza dla Ciebie i uczciwie mówiąc także dla mnie — bo nie wraca potem jako żal.",
    },
  ],

  geo: { lat: 51.5959, lng: 18.7302 },
};
