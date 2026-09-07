import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * GNIEZNO — pierwsza stolica Polski, miasto koronacji i katedry z Drzwiami
 * Gnieźnieńskimi. Miejsce, które od tysiąca lat kojarzy się z wielkimi
 * uroczystościami i wielkimi zjazdami.
 *
 * KĄT: skala i pojemność. Miasto koronacji jest jedynym właściwym miejscem
 * na twardą, techniczną odpowiedź na pytanie zadawane na każdym spotkaniu:
 * CZY DA SIĘ W TYM UGOTOWAĆ NA WIĘKSZĄ IMPREZĘ. Odpowiedź brzmi: NIE,
 * I NIE POWINNO SIĘ TEGO OBIECYWAĆ. Naczynie ma około dwóch litrów.
 *
 * CO ZA TO JEST PRAWDĄ: przy dużym gotowaniu urządzenie jest świetne jako
 * SPRZĘT POMOCNICZY obok garnków — miele, sieka, wyrabia ciasto, robi masy
 * i kremy, i robi to, gdy Wy zajmujecie się resztą. Ta rola jest mniej
 * efektowna i o niej się nie mówi, bo nie brzmi jak hasło reklamowe.
 *
 * ROZGRANICZENIE WOBEC KARPACZA. Karpacz mówi „nie do obsługi płacących
 * gości, ale do własnego posiłku gospodarzy". Tutaj chodzi o jednorazową
 * uroczystość rodzinną i o konkretny podział pracy w kuchni tego dnia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Gniezno było pierwszą stolicą Polski i miejscem koronacji,
 * — stoi w nim katedra z Drzwiami Gnieźnieńskimi.
 */
export const GNIEZNO: CityContent = {
  slug: "gniezno",
  h1: "Thermomix Gniezno – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Gniezno — prezentacja i cena",
  seoDescription:
    "Thermomix w Gnieźnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gniezno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gnieźnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gniezna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Gniezno i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Drożdżowa plecionka z kruszonką przygotowana z ciasta wyrobionego w Thermomixie",
    caption: "Ciasto drożdżowe wyrabia się samo — to jedna z rzeczy, które najłatwiej sprawdzić na miejscu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gnieźnie – jak wygląda prezentacja?",
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
      id: "skala",
      heading: "Miasto wielkich uroczystości — i uczciwie o pojemności",
      paragraphs: [
        "Gniezno od tysiąca lat kojarzy się z koronacjami i zjazdami, czyli z okazjami, na które przyjeżdża bardzo dużo ludzi naraz. To dobry pretekst, żeby odpowiedzieć na pytanie, które słyszę na co drugim spotkaniu: czy da się w tym ugotować na komunię, chrzciny albo osiemdziesiątkę babci.",
        "Odpowiedź brzmi: nie, jeśli chodzi o samo gotowanie dużych ilości. Naczynie mieści około dwóch litrów. Bigos dla czterdziestu osób, dwadzieścia litrów rosołu, mięso na dwa blachy — to jest robota dla wielkich garnków i piekarnika. Kto Wam obieca, że urządzenie zrobi przyjęcie, wprowadza Was w błąd i sprawdzicie to na własnej skórze najgorszego możliwego dnia.",
        "Ale to nie znaczy, że przy takim dniu jest bezużyteczne — znaczy tylko, że pełni zupełnie inną rolę, niż się reklamuje.",
        "Przy dużym gotowaniu jest świetnym sprzętem pomocniczym, i to naprawdę odciąża. Rozdrabnia w kilkanaście sekund to, co inaczej trzeba szatkować kwadrans. Wyrabia ciasto — a przy większej ilości drożdżowego to jest ta część, przy której najbardziej boli kręgosłup. Ubija masy i robi kremy do tortu, w tym te, które trzeba jednocześnie grzać i mieszać, czyli dokładnie te, przy których zwykle stoi się bez ruchu z termometrem. Robi też farsze i pasty na zimno, gdy wszystkie palniki są zajęte.",
        "Innymi słowy: przy uroczystości pracuje obok garnków, a nie zamiast nich. Robi te zadania, które przykuwają jedną osobę do blatu — i uwalnia ją do reszty.",
        "Jeśli szykujecie u siebie takie przyjęcie, powiedzcie mi o tym przy umawianiu. Ugotujemy na spotkaniu coś, co realnie zamierzacie podać, i od razu zobaczycie, co się w tym opłaca robić, a czego lepiej nie ruszać.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gnieźnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gnieźnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gnieźnieńskiej rodziny",
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
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla całego domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Gniezna i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Grunwald",
    "Winiary",
    "Pustachowa",
    "Osiniec",
    "Dalki",
    "Piekary",
    "Konikowo",
    "Skiereszewo",
    "Arkuszewo",
  ],

  nearbyHeading: "Poza Gniezno też przyjadę",
  nearbyParagraphs: [
    "Września, Czerniejewo, Trzemeszno, Kłecko i Witkowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Września", "Czerniejewo", "Trzemeszno", "Kłecko", "Witkowo", "Pobiedziska"],

  about: blokOMnie("do Gniezna", "w Gnieźnie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gniezna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Gnieźnie"),
    {
      question: "Czy ugotuję w tym obiad na komunię albo chrzciny?",
      answer:
        "Dużych ilości nie — naczynie mieści około dwóch litrów, więc bigos dla czterdziestu osób i dwadzieścia litrów rosołu robi się w garnkach. Kto obiecuje inaczej, wprowadza w błąd. Przy takim dniu urządzenie pracuje jednak obok garnków: rozdrabnia, wyrabia ciasto, ubija masy i robi kremy, czyli te zadania, które przykuwają jedną osobę do blatu.",
    },
    {
      question: "Szykujemy przyjęcie. Czy to dobry moment na spotkanie?",
      answer:
        "Bardzo dobry — powiedz przy umawianiu, co zamierzacie podać, a ugotujemy właśnie to. Od razu zobaczycie, co w tym urządzeniu opłaca się robić, a czego lepiej nie ruszać.",
    },
  ],

  geo: { lat: 52.5348, lng: 17.5826 },
};
