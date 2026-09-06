import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * DĘBICA — miasto na granicy Podkarpacia i Małopolski, przy autostradzie
 * i głównej linii kolejowej. Do Tarnowa bliżej niż do Rzeszowa, a Aga
 * ma już napisane strony dla całego powiatu tarnowskiego.
 *
 * KĄT: to jest miasto NA GRANICY DWÓCH ŚWIATÓW i pierwsze podkarpackie,
 * do którego Aga dojeżdża w ramach tras, którymi i tak jeździ. Warto to
 * powiedzieć wprost, bo dla klientki oznacza to konkret: krótsze terminy
 * niż w Przemyślu czy Sanoku. To jedyna strona podkarpacka, na której
 * kątem jest DOSTĘPNOŚĆ — i jest to uczciwe, bo różnica jest realna.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Dębica leży w zachodniej części województwa podkarpackiego, przy
 *   autostradzie A4 i magistrali kolejowej,
 * — miasto ma tradycje przemysłowe sięgające Centralnego Okręgu
 *   Przemysłowego; działają tu zakłady chemiczne i oponiarskie,
 * — Dębica jest siedzibą powiatu dębickiego (m.in. Pilzno, Brzostek,
 *   Czarna, Żyraków, Jodłowa),
 * — do Tarnowa jest stąd bliżej niż do Rzeszowa,
 * — dzielnice: Śródmieście, Kędzierz, Wolica, Latoszyn, Świętosław,
 *   Krzywa, Matejki.
 *
 * CZEGO NIE MA: nazw firm, danych o zatrudnieniu, czasów przejazdu
 * podanych w minutach jako fakt.
 */
export const DEBICA: CityContent = {
  slug: "debica",
  h1: "Thermomix Dębica – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Dębica — prezentacja i cena",
  seoDescription:
    "Thermomix w Dębicy: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat dębicki. Cena, raty 0%, szybkie terminy. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dębica — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dębicy. Prezentacja bezpłatna, terminy zwykle w ciągu kilku dni.",

  lead:
    "Przyjeżdżam do Dębicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Kędzierzu, Wolicy czy w Latoszynie. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Dębica i cały powiat dębicki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dębicy – jak wygląda prezentacja?",
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
      id: "blisko",
      heading: "Dębica leży bliżej, niż wygląda na mapie województw",
      paragraphs: [
        "Na mapie administracyjnej Dębica jest podkarpacka, ale w praktyce leży na granicy dwóch światów: do Tarnowa jest stąd bliżej niż do Rzeszowa, a autostrada i magistrala kolejowa przechodzą tuż obok.",
        "Dla Was oznacza to bardzo konkretną rzecz i nie ma powodu jej ukrywać. Jeżdżę po Małopolsce na co dzień — mam napisane strony dla całego powiatu tarnowskiego i bocheńskiego — więc Dębica leży na trasie, którą i tak pokonuję. Terminy są tu zwykle krótsze niż w Przemyślu czy Sanoku, gdzie każdy wyjazd trzeba planować osobno.",
        "Praktycznie: jeśli zadzwonicie w poniedziałek, zwykle jestem w stanie zaproponować coś w tym samym tygodniu. Nie obiecuję tego z góry, bo kalendarz bywa różny — ale mówię, jak jest, zamiast udawać, że wszędzie mam tak samo blisko.",
      ],
      links: [
        { href: "/thermomix/tarnow", label: "Thermomix Tarnów" },
        { href: "/prezentacja", label: "Umów prezentację" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dębicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — ustalenie terminu zajmuje kilka minut. Możesz też zostawić kontakt w formularzu i dopisać, o której oddzwonić.",
        "Podaj dzielnicę albo miejscowość. Pilzno i Brzostek to inny kierunek niż Kędzierz, a od tego zależy tylko godzina spotkania — nigdy jego cena.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dębicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dębickiej rodziny",
      paragraphs: [
        "W Dębicy dużo osób pracuje w zakładach na miejscu, a sporo dojeżdża do Tarnowa albo Rzeszowa. Daje to znany wszędzie efekt: obiad rozłożony na kilka tur, bo każdy wraca o innej porze.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. Wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, blender i sitko.",
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

  districtsHeading: "Do których dzielnic Dębicy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Kędzierz",
    "Wolica",
    "Latoszyn",
    "Świętosław",
    "Krzywa",
    "Matejki",
    "Gawrzyłowa",
    "Kawęczyn",
  ],

  nearbyHeading: "Cały powiat dębicki i okolice",
  nearbyParagraphs: [
    "Pilzno, Brzostek, Czarna, Żyraków, Jodłowa i Ropczyce są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też w stronę Tarnowa i Mielca.",
  ],
  nearbyTowns: [
    "Pilzno",
    "Ropczyce",
    "Mielec",
    "Sędziszów Małopolski",
    "Tarnów",
    "Jasło",
    "Rzeszów",
  ],

  about: blokOMnie("do Dębicy", "w Dębicy i całym powiecie dębickim", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dębicy bez dodatkowej opłaty?",
      answer:
        "Tak, do Dębicy i do całego powiatu dębickiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Dębicy"),
    {
      question: "Jak szybko można umówić prezentację?",
      answer:
        "W Dębicy zwykle szybciej niż w dalszych częściach regionu, bo miasto leży na trasie, którą i tak jeżdżę po Małopolsce. Nie obiecuję konkretnego dnia z góry, ale przy telefonie od razu powiem, co realnie mam wolne — zamiast umawiać na termin, którego nie dotrzymam.",
    },
    {
      question: "Czy przyjedziesz do Pilzna albo Brzostku?",
      answer:
        "Tak, jeżdżę po całym powiecie dębickim. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 50.0517, lng: 21.4111 },
};
