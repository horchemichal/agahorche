import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * GIŻYCKO — stolica żeglarska Mazur, miasto między jeziorami Niegocin
 * i Kisajno, z portem i mostem obrotowym.
 *
 * KĄT: czy zabrać na wakacje. To jest jedyne miejsce w serwisie na pytanie
 * praktyczne, które w miejscu wynajmu jachtów i domków pada naturalnie:
 * CZY TO URZĄDZENIE WOZI SIĘ ZE SOBĄ NA WYJAZD.
 *
 * ROZGRANICZENIE WOBEC MIKOŁAJEK — to jest ważne, bo tematy są sąsiednie.
 * Mikołajki mówią o WŁASNYM domu letniskowym i o decyzji „drugi sprzęt
 * czy wożenie". Tutaj chodzi o WYJAZD do cudzego miejsca: apartament,
 * pensjonat z aneksem, kwatera, jacht — czyli o kuchnię, której się nie zna.
 *
 * SEKCJA MA BYĆ SZCZERA I RACZEJ ODRADZAJĄCA. Uczciwa odpowiedź brzmi:
 * na krótki wyjazd nie warto, na jacht kategorycznie nie (waga, ruch,
 * gniazdko), a jedyny przypadek, w którym to ma sens, to dłuższy wyjazd
 * z małym dzieckiem albo z kimś, kto musi jeść inaczej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Giżycko leży między jeziorami, jest ośrodkiem żeglarskim i ma port.
 */
export const GIZYCKO: CityContent = {
  slug: "gizycko",
  h1: "Thermomix Giżycko – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Giżycko — prezentacja i cena",
  seoDescription:
    "Thermomix w Giżycku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Giżycko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Giżycku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Giżycka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Giżycko i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Domowa lemoniada przygotowana w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Na spotkaniu robimy też rzeczy proste — takie, które faktycznie robi się potem co tydzień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Giżycku – jak wygląda prezentacja?",
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
      id: "na-wakacje",
      heading: "Miasto, z którego się wypływa — czyli: brać to ze sobą na wyjazd?",
      paragraphs: [
        "Giżycko jest miejscem, z którego się wyrusza: na tydzień na jacht, na dwa tygodnie do apartamentu, na wakacje do kwatery z aneksem kuchennym. Dlatego pada tu pytanie, którego nie zadaje się nigdzie indziej: czy takie urządzenie zabiera się ze sobą na wyjazd.",
        "Odpowiem szczerze, choć odpowiedź jest w większości przypadków odmowna.",
        "Na jacht — nie. I nie chodzi o wygodę, tylko o zwykły rozsądek: to jest ciężki sprzęt ze szklanymi elementami, na jednostce, która się przechyla, a do tego wymaga stabilnego zasilania. To jest po prostu zły pomysł i nie będę udawać, że jest inaczej.",
        "Na krótki wyjazd, weekend albo tydzień w hotelu — też nie, i to z prostszego powodu. Wożenie dwudziestu kilogramów sprzętu po to, żeby zrobić trzy obiady, nie ma sensu, a poza tym wyjazd bywa właśnie po to, żeby przez tydzień nie gotować.",
        "Jest natomiast jedna sytuacja, w której to się faktycznie opłaca i widzę ją regularnie: dłuższy wyjazd z małym dzieckiem albo z kimś, kto musi jeść inaczej. Wtedy własne, znane urządzenie w wynajętym mieszkaniu oznacza, że posiłki wyglądają tak samo jak w domu, a Wy nie zgadujecie, co da się zrobić na cudzej, wyposażonej byle jak kuchence. Dwa tygodnie z niemowlakiem to jest właśnie ten przypadek.",
        "I rzecz praktyczna, jeśli już się decydujecie: warto wcześniej sprawdzić, jak wygląda kuchnia w miejscu, do którego jedziecie. Blat, wolne gniazdko i miejsce, żeby to postawić — brzmi banalnie, ale w wynajętych aneksach potrafi zabraknąć wszystkich trzech naraz.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Giżycku?",
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
    sekcjaCena("w Giżycku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla giżyckiej rodziny",
      paragraphs: [
        "W sezonie dzień bywa nieprzewidywalny, a poza sezonem obiad powstaje w oknie między pracą, szkołą i wieczorem — i robi go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym.",
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

  districtsHeading: "Do których części Giżycka i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Wilanów",
    "Białostocka",
    "Obwodowa",
    "Wodociągowa",
    "Kętrzyńskiego",
    "Wilkasy",
    "Bystry",
    "Sulimy",
    "Gajewo",
  ],

  nearbyHeading: "Poza Giżycko też przyjadę",
  nearbyParagraphs: [
    "Węgorzewo, Ryn, Mikołajki i Kętrzyn są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Węgorzewo", "Ryn", "Mikołajki", "Kętrzyn", "Orzysz"],

  about: blokOMnie("do Giżycka", "w Giżycku i na Mazurach", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Giżycka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Giżycku"),
    {
      question: "Czy warto brać Thermomix na wakacje?",
      answer:
        "Najczęściej nie. Na jacht kategorycznie odradzam — ciężki sprzęt ze szklanymi elementami na przechylającej się jednostce to zły pomysł. Na weekend albo tydzień w hotelu też nie warto wozić dwudziestu kilogramów dla trzech obiadów. Sens robi się przy dłuższym wyjeździe z małym dzieckiem albo z kimś, kto musi jeść inaczej.",
    },
    {
      question: "Co sprawdzić, jeśli jednak zabieram na dłuższy wyjazd?",
      answer:
        "Jak wygląda kuchnia w miejscu, do którego jedziecie: blat, wolne gniazdko i miejsce, żeby to postawić. Brzmi banalnie, ale w wynajętych aneksach potrafi zabraknąć wszystkich trzech naraz.",
    },
  ],

  geo: { lat: 54.0381, lng: 21.7614 },
};
