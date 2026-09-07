import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * SIEDLCE — miasto na skrzyżowaniu dróg i linii kolejowych między Warszawą
 * a wschodnią granicą, z dużym targowiskiem i wielowiekową tradycją
 * handlową.
 *
 * KĄT: dlaczego tego nie kupisz w markecie. Miasto handlu jest jedynym
 * właściwym miejscem, żeby wyjaśnić rzecz, która dla wielu osób jest
 * podejrzana: DLACZEGO TEGO URZĄDZENIA NIE MA W SKLEPIE I DLACZEGO
 * KTOŚ MUSI PRZYJECHAĆ DO DOMU.
 *
 * SEKCJA MA BYĆ UCZCIWA W OBIE STRONY. Ma wyjaśnić, co klient na tym
 * zyskuje (cena jest jedna w całej Polsce, nie ma negocjacji ani gorszej
 * oferty dla mniej wprawnych; gotuje się przed zakupem, a nie po),
 * ale MUSI TEŻ PRZYZNAĆ, co się na tym traci: nie da się porównać cen
 * u kilku sprzedawców, nie ma promocji w Czarny Piątek i nie obejrzy się
 * tego wcześniej na półce.
 *
 * CZEGO NIE MA: krytyki innych marek, porównań cenowych z konkurencją,
 * opisu systemu prowizji ani niczego, czego nie mogę potwierdzić.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Siedlce leżą przy trasie i linii kolejowej z Warszawy na wschód,
 * — miasto ma silne tradycje handlowe i duże targowisko.
 */
export const SIEDLCE: CityContent = {
  slug: "siedlce",
  h1: "Thermomix Siedlce – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Siedlce — prezentacja i cena",
  seoDescription:
    "Thermomix w Siedlcach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Siedlce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Siedlcach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Siedlec z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Siedlce i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Siedlcach – jak wygląda prezentacja?",
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
      id: "dlaczego-nie-w-sklepie",
      heading: "Miasto handlu — więc dlaczego tego nie ma na półce?",
      paragraphs: [
        "Siedlce od wieków żyją z handlu i z tego, że przez miasto coś przejeżdża. W mieście, w którym ludzie znają się na kupowaniu, wypada wyjaśnić rzecz, która wielu osobom wydaje się podejrzana: dlaczego tego urządzenia nie ma w markecie i dlaczego ktoś musi przyjechać do domu.",
        "Powód jest prosty i nie ma w nim tajemnicy: producent sprzedaje wyłącznie bezpośrednio, przez przedstawicieli. Nie ma tego w sieciach handlowych, nie ma w sklepie internetowym z AGD i nie ma promocji w Czarny Piątek. Kto oferuje Wam ten sprzęt gdzie indziej, sprzedaje albo używany, albo coś, co nim nie jest.",
        "Co na tym zyskujecie i mówię to bez skromności. Po pierwsze: cena jest jedna w całej Polsce. Nie ma negocjacji, nie ma lepszej oferty dla kogoś, kto umie się targować, i gorszej dla kogoś, kto nie umie. Po drugie: gotujecie na tym urządzeniu, zanim je kupicie, we własnej kuchni i z własnymi produktami — czego nie da się zrobić z żadnym sprzętem ze sklepowej półki. Po trzecie: po zakupie macie konkretną osobę z numerem telefonu, a nie infolinię.",
        "A teraz to, co na tym tracicie, bo to też trzeba powiedzieć. Nie porównacie ceny u trzech sprzedawców, bo jest jedna. Nie kupicie tego taniej na wyprzedaży. Nie obejrzycie tego wcześniej na wystawie, żeby się oswoić bez rozmowy z nikim. I nie da się tego kupić anonimowo, jednym kliknięciem — trzeba komuś otworzyć drzwi, a dla części osób to jest realna niedogodność, której nie zamierzam bagatelizować.",
        "Jeśli to Wam przeszkadza, mam propozycję: umówmy spotkanie tak, żeby było jak najkrócej i jak najbardziej rzeczowo. Godzina, konkretne gotowanie, liczby na koniec i wyjście. Bez rozmów o niczym i bez pytania o znajome.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Co dokładnie dzieje się na spotkaniu" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Siedlcach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Napisz, ile czasu chcesz na to przeznaczyć. Jeśli wolisz krótko i rzeczowo, tak to poprowadzę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Siedlcach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla siedleckiej rodziny",
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
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Siedlec i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Nowe Siedlce",
    "Roskosz",
    "Żytnia",
    "Piaski",
    "Sekuła",
    "Ujrzanów",
    "Strzała",
    "Białki",
    "Golice",
  ],

  nearbyHeading: "Poza Siedlce też przyjadę",
  nearbyParagraphs: [
    "Sokołów Podlaski, Węgrów, Łosice i Mordy są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sokołów Podlaski", "Węgrów", "Łosice", "Mordy", "Kałuszyn"],

  about: blokOMnie("do Siedlec", "w Siedlcach i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Siedlec bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Siedlcach"),
    {
      question: "Dlaczego nie mogę kupić tego w sklepie ani przez internet?",
      answer:
        "Bo producent sprzedaje wyłącznie bezpośrednio, przez przedstawicieli — nie ma tego w sieciach handlowych ani w sklepach z AGD. Kto oferuje ten sprzęt gdzie indziej, sprzedaje używany albo coś, co nim nie jest. W zamian cena jest jedna w całej Polsce, bez negocjacji, i gotujesz na urządzeniu przed zakupem, we własnej kuchni.",
    },
    {
      question: "Nie lubię wpuszczać obcych do domu. Da się to skrócić?",
      answer:
        "Da się i rozumiem tę niedogodność — nie będę jej bagatelizować. Napisz przy umawianiu, że wolisz krótko: godzina, konkretne gotowanie, liczby na koniec i wychodzę. Bez rozmów o niczym i bez pytania o znajome.",
    },
  ],

  geo: { lat: 52.1677, lng: 22.2902 },
};
