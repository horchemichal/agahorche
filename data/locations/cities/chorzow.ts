import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * CHORZÓW — miasto, do którego przyjeżdża cała metropolia. Park Śląski,
 * Stadion Śląski, planetarium, zoo i wesołe miasteczko leżą w granicach
 * miasta, a w weekend ludzie z Katowic, Bytomia i Rudy jadą właśnie tutaj.
 *
 * KĄT: to odwraca zwykłą logikę weekendu. W większości miast konurbacji
 * weekend oznacza wyjazd; w Chorzowie oznacza gości i wspólne wyjścia
 * z rodziną, która przyjechała. Kuchennie przekłada się to na coś bardzo
 * konkretnego: jedzenie zabierane ze sobą do parku i posiłek po powrocie
 * dla większej liczby osób niż zwykle.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Park Śląski w Chorzowie jest jednym z największych parków miejskich
 *   w Europie i mieści zoo, planetarium oraz wesołe miasteczko,
 * — Stadion Śląski leży na terenie parku,
 * — Chorzów powstał z połączenia Królewskiej Huty z Chorzowem i sąsiednimi
 *   miejscowościami, stąd dzielnice o odrębnej historii (Chorzów Stary,
 *   Chorzów Batory, Maciejkowice),
 * — miasto graniczy bezpośrednio z Katowicami, Bytomiem, Rudą Śląską,
 *   Świętochłowicami i Siemianowicami.
 *
 * CZEGO NIE MA: powierzchni parku podanej jako fakt, liczby odwiedzających,
 * cen biletów.
 */
export const CHORZOW: CityContent = {
  slug: "chorzow",
  h1: "Thermomix Chorzów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Chorzów — prezentacja i cena",
  seoDescription:
    "Thermomix w Chorzowie: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chorzów — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chorzowie. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Chorzowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Centrum, na Batorym, Klimzowcu czy w Chorzowie Starym. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Chorzów, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chorzowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy realnie: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Jeśli powiesz wcześniej, ile osób siada u Was do stołu, dobiorę dania pod Was.",
        "Na koniec liczby: cena, promocja i rata przy kilku okresach spłaty. Nie musisz decydować od razu i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "weekend-u-ciebie",
      heading: "Miasto, do którego w weekend przyjeżdżają inni",
      paragraphs: [
        "W większości miast metropolii weekend oznacza wyjazd. W Chorzowie jest odwrotnie — to tutaj przyjeżdżają: do Parku Śląskiego, do zoo, na stadion, do planetarium. A skoro przyjeżdżają, to bardzo często zaglądają też do rodziny, która akurat mieszka na miejscu.",
        "Kuchennie oznacza to dwie powtarzalne sytuacje. Pierwsza: jedzenie zabierane ze sobą, bo cały dzień w parku z dziećmi to nie jest dzień na kupowanie obiadu na miejscu. Druga: posiłek po powrocie, dla większej liczby osób, niż siada do stołu w tygodniu — i zwykle wtedy, gdy wszyscy są już zmęczeni.",
        "Thermomix nadaje się do obu. Zupę krem czy pastę kanapkową robi się w jednym naczyniu, bez bałaganu, a większa porcja obiadu nie wymaga większego pilnowania — może być gotowa wcześniej i poczekać, aż wrócicie.",
      ],
      links: [{ href: "/przepisy", label: "Zobacz, co można ugotować" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chorzowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę — Maciejkowice i Chorzów Stary to inny kierunek niż Batory, a od tego zależy tylko godzina, którą mogę zaproponować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chorzowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla chorzowskiej rodziny",
      paragraphs: [
        "Chorzów jest miastem zwartym — z jednego końca na drugi jedzie się kilkanaście minut, a do Katowic jeszcze mniej. Bardzo dużo osób pracuje poza miastem i wraca o różnych porach, co daje znany wszędzie w metropolii efekt: obiad nie jest jednym wydarzeniem, tylko serią talerzy.",
        "Thermomix pomaga tu brakiem konieczności pilnowania. Danie może powstać wcześniej i czekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. Gotowanie i miksowanie dzieje się w jednym naczyniu, więc po zupie nie zostaje stos garnków.",
        "Przy małym dziecku dochodzi Varoma — porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
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

  districtsHeading: "Do których dzielnic Chorzowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Chorzów jest niewielki i zwarty, więc dojazd nigdy nie jest problemem — wystarczy, że powiesz, gdzie mieszkasz i jak wygląda dojście pod blok.",
  ],
  districts: [
    "Centrum",
    "Chorzów Batory",
    "Chorzów II",
    "Chorzów Stary",
    "Klimzowiec",
    "Maciejkowice",
    "Chorzów IV",
    "Osiedle Irys",
    "Park Śląski",
  ],

  nearbyHeading: "Poza Chorzów też przyjadę",
  nearbyParagraphs: [
    "Chorzów graniczy z Katowicami, Bytomiem, Rudą Śląską, Świętochłowicami i Siemianowicami — z każdego z tych miast do Ciebie jest kilkanaście minut, więc spokojnie łączę spotkania w jedno popołudnie.",
  ],
  nearbyTowns: [
    "Katowice",
    "Bytom",
    "Ruda Śląska",
    "Świętochłowice",
    "Siemianowice Śląskie",
    "Zabrze",
    "Piekary Śląskie",
  ],

  about: blokOMnie("do Chorzowa", "w Chorzowie i całej metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chorzowa bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Chorzowa jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Chorzowie"),
    {
      question: "Czy da się zaprosić na prezentację rodzinę spoza Chorzowa?",
      answer:
        "Jak najbardziej — to nawet lepszy układ. W grupie pytania padają odważniejsze, a osoby, które przyjechały z innego miasta, i tak mogą potem umówić się u siebie.",
    },
    {
      question: "Czy Thermomix nadaje się do jedzenia zabieranego ze sobą?",
      answer:
        "Tak. Zupy kremy, pasty kanapkowe i dania jednogarnkowe robi się w jednym naczyniu, bez przekładania i bez bałaganu — a to zwykle jest cała różnica między „zrobię coś na wynos” a „kupimy coś na miejscu”.",
    },
  ],

  geo: { lat: 50.2974, lng: 18.9541 },
};
