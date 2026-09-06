import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * GŁUBCZYCE — miasto na Płaskowyżu Głubczyckim, przy granicy z Czechami,
 * pośród jednych z najlepszych gleb w Polsce. Rolnictwo jest tu wielkopolowe
 * i towarowe: pszenica, rzepak, buraki, duże areały i mało ludzi
 * na kilometr kwadratowy.
 *
 * KĄT: wieś, która nie jest samowystarczalna. To jest ŚWIADOMA KOREKTA
 * założenia, które przewija się przez cały serwis. Strony wiejskie
 * z Małopolski opowiadają o gospodarstwach po dwa hektary, o ogrodzie
 * za domem, o piwnicy pełnej słoików i o tym, że jesienią jest co
 * przerabiać. Tutaj to po prostu nieprawda. Pole ma sto hektarów pszenicy,
 * a nie grządkę marchewki, więc TUTEJSZY DOM KUPUJE WARZYWA W SKLEPIE
 * DOKŁADNIE TAK SAMO JAK MIESZKANIE W BLOKU — tyle że sklep jest dalej.
 * Napisanie tego wprost jest uczciwsze niż udawanie sielanki, której tu
 * nie ma.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Płaskowyż Głubczycki ma jedne z najlepszych gleb w Polsce,
 *   a rolnictwo jest tu wielkopolowe, nie ogrodnicze,
 * — powiat głubczycki należy do najsłabiej zaludnionych w regionie,
 * — miasto leży przy granicy z Czechami.
 *
 * CZEGO NIE MA: statystyk rolnych, wielkości gospodarstw, plonów,
 * twierdzeń o dochodach.
 */
export const GLUBCZYCE: CityContent = {
  slug: "glubczyce",
  h1: "Thermomix Głubczyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Głubczyce — prezentacja i cena",
  seoDescription:
    "Thermomix w Głubczycach: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Głubczyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Głubczycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Głubczyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Grobnik, Lisięcic, Klisina i pozostałych sołectw.",

  highlights: highlightyStandardowe("Głubczyce i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Głubczycach – jak wygląda prezentacja?",
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
      id: "pole-a-nie-ogrod",
      heading: "Tu jest pole, a nie ogródek — i to zmienia całą rozmowę",
      paragraphs: [
        "Płaskowyż Głubczycki to jedne z najlepszych gleb w Polsce i widać to od razu: równe, wielkie łany po horyzont, mało zabudowań, mało ludzi na kilometr. Rolnictwo jest tu towarowe — pszenica, rzepak, buraki. Duże maszyny i duże areały.",
        "Muszę więc powiedzieć coś, co przeczy temu, co piszę na stronach wsi w Małopolsce — i lepiej, żebym powiedziała to sama, niż żeby ktoś to zauważył za mnie. Tam opowiadam o gospodarstwach po dwa hektary, o ogrodzie za domem i o wrześniu, w którym nie ma co zrobić z nadmiarem warzyw. Tutaj to byłoby zwyczajnie nieprawdziwe.",
        "Sto hektarów pszenicy nie daje marchewki na obiad. W bardzo wielu tutejszych domach warzywa i owoce kupuje się w sklepie dokładnie tak samo jak w bloku w mieście — z tą różnicą, że sklep jest dalej, a wybór mniejszy. Wieś nie znaczy tu samowystarczalności i nikt nie powinien Wam wciskać opowieści o piwnicy pełnej słoików, jeśli tej piwnicy po prostu nie ma.",
        "Praktyczny wniosek jest odwrotny, niż mogłoby się wydawać. Skoro kupuje się rzadziej i dalej, to najbardziej liczy się umiejętność zrobienia porządnego obiadu z tego, co akurat jest w domu — z paczki makaronu, z mrożonek, z jednego warzywa i śmietanki. I to jest dokładnie ta część, którą pokażę na spotkaniu: zupa krem z jednego składnika, sos, który gotuje się sam, danie z tego, co zostało.",
        "Reszta — planowanie, wielkie gotowanie na zapas — może się przydać, ale nie będę udawać, że to główny powód. Powodem jest środa, kiedy do sklepu się nie jechało.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz w lodówce" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Głubczycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Gmina jest rozległa, więc trasę planuję z góry — ale dojazd jest wszędzie bezpłatny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Głubczycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla głubczyckiej rodziny",
      paragraphs: [
        "Gdy do sklepu jedzie się, a nie idzie, obiad musi powstać z tego, co akurat jest w domu — a robi go zwykle jedna osoba, w oknie między pracą, szkołą i wieczorem.",
        "Thermomix pomaga tym, że nie wymaga obecności i że z prostych składników robi porządne danie. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Głubczyce",
    "Grobniki",
    "Gołuszowice",
    "Bogdanowice",
    "Klisino",
    "Lisięcice",
    "Zopowy",
    "Pomorzowice",
    "Ściborzyce Małe",
    "Nowa Wieś Głubczycka",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Baborów, Kietrz, Głogówek i Prudnik są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Baborów", "Kietrz", "Głogówek", "Prudnik", "Racibórz"],

  about: blokOMnie("do Głubczyc", "w gminie Głubczyce i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Głubczyc bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Głubczycach"),
    {
      question: "Nie mamy ogrodu ani przetworów. Czy to urządzenie jest wtedy dla nas?",
      answer:
        "Tak i to nawet bardziej, niż się wydaje. Cała część o przerabianiu plonów Was nie dotyczy i nie będę jej Wam sprzedawać. Liczy się to, żeby z tego, co jest w szafce i w lodówce, powstał porządny obiad bez stania nad garnkiem — i to pokażę na spotkaniu.",
    },
    {
      question: "Mieszkam w sołectwie kilkanaście kilometrów od miasta. Przyjedziesz?",
      answer:
        "Tak, do każdej miejscowości w gminie i bez dopłaty. Proszę tylko o umówienie terminu z wyprzedzeniem, bo trasy po tej części województwa planuję z góry.",
    },
  ],

  geo: { lat: 50.2006, lng: 17.8272 },
};
