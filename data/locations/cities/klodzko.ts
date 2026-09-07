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
 * KŁODZKO — stolica Kotliny Kłodzkiej, miasto z twierdzą i podziemnymi
 * korytarzami, węzeł dróg schodzących się z kilku dolin. Do sąsiednich
 * miejscowości jedzie się tu przez przełęcze, a zimą pogoda potrafi
 * przestawić cały plan dnia.
 *
 * KĄT: zima i dojazd. To jest jedyne miejsce w serwisie, gdzie warto
 * opisać rzecz czysto organizacyjną, o której nikt nie pisze, a która
 * dla klientki jest konkretna: JAK UMAWIAM SIĘ ZIMĄ, CO ROBIĘ, GDY
 * DROGA JEST NIEPRZEJEZDNA, I CO Z DOSTAWĄ URZĄDZENIA W GÓRACH.
 *
 * TON: rzeczowy i bez heroizmu. Nie chwalę się, że dojadę wszędzie
 * w każdych warunkach, bo to nieprawda i bywa niebezpieczne. Piszę,
 * jak to układam.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kłodzko leży w kotlinie otoczonej górami i jest węzłem dróg,
 * — do sąsiednich miejscowości jedzie się przez przełęcze,
 * — w mieście zachowała się twierdza z podziemnymi korytarzami.
 *
 * CZEGO NIE MA: konkretnych dróg, warunków drogowych, obietnic terminów.
 */
export const KLODZKO: CityContent = {
  slug: "klodzko",
  h1: "Thermomix Kłodzko – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kłodzko — prezentacja i cena",
  seoDescription:
    "Thermomix w Kłodzku: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała Kotlina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kłodzko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kłodzku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kłodzka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do miejscowości w całej Kotlinie.",

  highlights: highlightyStandardowe("Kłodzko i cała Kotlina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kłodzku – jak wygląda prezentacja?",
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
      id: "zima-i-dojazd",
      heading: "Kotlina, przełęcze i zima — czyli jak się tu umawiam",
      paragraphs: [
        "Kłodzko leży w kotlinie, do której drogi schodzą się z kilku dolin, a do sąsiednich miejscowości jedzie się przez przełęcze. Przez pół roku nie ma to najmniejszego znaczenia. Przez drugie pół — ma, i wolę napisać o tym wprost, zamiast obiecywać, że u mnie pogoda nie istnieje.",
        "Zimą umawiam się tu inaczej niż na nizinie i wygląda to tak. Po pierwsze, proponuję godziny wcześniejsze, dzienne, a nie wieczorne — nie z ostrożności o siebie, tylko dlatego, że spotkanie ma się skończyć spokojnie, a nie w pośpiechu przed zmrokiem. Po drugie, dzwonię rano w dniu spotkania. Jeśli robi się nieprzejezdnie, mówię to od razu i przekładamy — zwykle na najbliższy możliwy termin, nie na „kiedyś”.",
        "Nie będę udawać bohaterki, która dojedzie wszędzie i w każdych warunkach. To nieprawda, a przy okazji głupota, bo w górach kończy się to rowem. Wolę zadzwonić i przełożyć, i nikt na tym nic nie traci, bo prezentacja nic nie kosztuje.",
        "Druga sprawa to dostawa samego urządzenia po zakupie. Tu również nie ma czarów: jeśli mieszkacie na przysiółku, do którego zimą trudno dojechać, powiedzcie mi o tym przy umawianiu. Ustalamy wtedy dogodny adres i porę, a nie zostawiamy tego przypadkowi.",
        "I rzecz, którą warto powiedzieć na koniec, bo w tej okolicy ma sens: dom, w którym zimą siedzi się dłużej, gotuje więcej. Tu urządzenie zarabia na siebie nie w lipcu, tylko w styczniu — przy zupach, wypiekach i obiadach robionych, kiedy za oknem i tak nie ma dokąd wyjść.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kłodzku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość i dopisz, czy zimą dojazd bywa trudny. To zmienia porę spotkania, nigdy jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kłodzku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kłodzkiej rodziny",
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

  districtsHeading: "Do których miejscowości Kotliny dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Kłodzko",
    "Ścinawka",
    "Jaszkowa Dolna",
    "Krosnowice",
    "Ołdrzychowice",
    "Bierkowice",
    "Ruszowice",
    "Wojbórz",
    "Szalejów Górny",
    "Żelazno",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Polanica-Zdrój, Bystrzyca Kłodzka, Nowa Ruda, Duszniki-Zdrój i Kudowa-Zdrój są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Polanica-Zdrój", "Bystrzyca Kłodzka", "Nowa Ruda", "Duszniki-Zdrój", "Kudowa-Zdrój", "Lądek-Zdrój"],

  about: blokOMnie("do Kłodzka", "w Kłodzku i całej Kotlinie", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kłodzka bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do miejscowości w całej Kotlinie. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kłodzku"),
    {
      question: "A jeśli zimą droga do nas będzie nieprzejezdna?",
      answer:
        "Dzwonię rano w dniu spotkania i jeśli warunki są złe, mówię to od razu i przekładamy na najbliższy możliwy termin. Nie będę udawać, że dojadę wszędzie w każdą pogodę — w górach kończy się to rowem. Nic przy tym nie tracicie, bo prezentacja i tak nic nie kosztuje.",
    },
    {
      question: "Mieszkamy na przysiółku, dostawa może być problemem.",
      answer:
        "Powiedz o tym przy umawianiu, a ustalimy dogodny adres i porę zamiast zostawiać to przypadkowi. To standardowa sprawa w tej okolicy i da się ją spokojnie ułożyć.",
    },
  ],

  geo: { lat: 50.4353, lng: 16.6597 },
};
