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
 * TYCHY — jedyne miasto w tym zestawie, które zostało ZAPROJEKTOWANE.
 * Nowe Tychy powstały w latach 50. jako miasto budowane od zera, a osiedla
 * dostały nazwy od kolejnych liter alfabetu z imionami (A — Anna,
 * B — Barbara, C — Cecylia i tak dalej). Do dziś tychowianie umawiają się
 * „na B" albo „na Zet", a nie na ulicy.
 *
 * To jest najlepszy możliwy punkt zaczepienia dla strony o Thermomiksie,
 * bo miasto projektowane oznacza mieszkania o powtarzalnych, znanych
 * rozkładach — a więc konkretną, sprawdzalną odpowiedź na pytanie „czy
 * to się zmieści na moim blacie". W mieście, które rosło samo, takiej
 * odpowiedzi nie da się udzielić.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Nowe Tychy budowano od lat 50. XX wieku jako zaplanowane miasto,
 * — osiedla oznaczono literami alfabetu z imionami żeńskimi i męskimi,
 * — Tyskie Browary Książęce działają w Tychach od XVII wieku,
 * — w Tychach mieści się duży zakład motoryzacyjny, jeden z największych
 *   pracodawców w regionie,
 * — Paprocany to dzielnica z jeziorem, rekreacyjna część miasta.
 *
 * CZEGO NIE MA: liczby zatrudnionych w fabryce, wielkości produkcji
 * browaru, metrażu mieszkań podanego jako fakt.
 */
export const TYCHY: CityContent = {
  slug: "tychy",
  h1: "Thermomix Tychy – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Tychy — prezentacja i cena",
  seoDescription:
    "Thermomix w Tychach: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie osiedla. Aktualna cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tychy — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Tychach. Sprawdzimy razem, czy zmieści się na Twoim blacie. Ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Tychów z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Anna, Barbara, Zet czy w Paprocanach. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("wszystkie osiedla Tychów, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tychach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami. Nie musisz nic kupować ani przygotowywać — wystarczy kawałek blatu, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę, nie pokazowo: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Jeśli powiesz mi wcześniej, ile osób siada u Was do stołu, dobiorę dania pod Was.",
        "Na koniec siadamy do liczb: cena, promocja i rata przy kilku okresach spłaty. Możesz powiedzieć „muszę to przemyśleć” — to pełna odpowiedź i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "osiedla-na-litery",
      heading: "Miasto zaprojektowane — czyli wiadomo, co się zmieści",
      paragraphs: [
        "Tychy są rzadkim przypadkiem miasta, które nie urosło samo, tylko zostało zaprojektowane. Nowe Tychy budowano od lat pięćdziesiątych według planu, a osiedla dostały nazwy od kolejnych liter alfabetu z imionami — stąd Anna, Barbara, Cecylia, aż po Zet. Do dziś umawiamy się „na B”, a nie przy ulicy, i jest to zupełnie normalne.",
        "Dla prezentacji Thermomixa ma to bardzo praktyczny skutek: mieszkania w tychowskich osiedlach mają powtarzalne, znane rozkłady kuchni. Jeśli powiesz mi, na którym osiedlu mieszkasz i z którego okresu jest budynek, potrafię jeszcze przez telefon powiedzieć, czy urządzenie zmieści się na blacie bez przestawiania czegokolwiek — a jeśli nie, to gdzie zwykle się je stawia.",
        "W mieście, które rosło przez sto lat kawałek po kawałku, takiej odpowiedzi nie da się udzielić. Tutaj się da i to jest realna przewaga tego miejsca.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tychach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — to zajmuje minutę. Możesz też zostawić kontakt w formularzu na dole strony i wskazać porę oddzwonienia.",
        "Podaj osiedle albo dzielnicę. Paprocany to inny kierunek niż Wilkowyje czy Czułów, a od tego zależy godzina, którą mogę zaproponować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tychach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tyskiej rodziny",
      paragraphs: [
        "Tychy są miastem, w którym bardzo dużo osób pracuje w systemie zmianowym — w zakładach na terenie miasta i w całej metropolii. W praktyce znaczy to, że obiad rzadko jest wspólnym wydarzeniem o stałej porze, a częściej czymś, co ma czekać gotowe.",
        "Thermomix nadaje się do tego dobrze, bo nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem — możesz je zrobić rano i odgrzać wieczorem na parze, bez wysuszania, które robi mikrofalówka.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla reszty domu, w jednym urządzeniu i bez drugiego pilnowania.",
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

  districtsHeading: "Do których osiedli i dzielnic Tychów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — zarówno na osiedla literowe, jak i do dawnych wsi włączonych do miasta.",
    "Możesz podać samą literę osiedla, tak jak się tu mówi. Rozumiem „na F” i „na Zet” bez tłumaczenia.",
  ],
  districts: [
    "Osiedle A (Anna)",
    "Osiedle B (Barbara)",
    "Osiedle C (Cecylia)",
    "Osiedle D (Dorota)",
    "Osiedle E (Ewa)",
    "Osiedle F (Franciszka)",
    "Osiedle H (Hanna)",
    "Osiedle K (Karolina)",
    "Osiedle L (Lucyna)",
    "Osiedle M (Magdalena)",
    "Osiedle N (Natalia)",
    "Osiedle O (Olga)",
    "Osiedle P (Paulina)",
    "Osiedle R (Regina)",
    "Osiedle T (Teresa)",
    "Osiedle U (Urszula)",
    "Osiedle W (Weronika)",
    "Osiedle Z (Zuzanna)",
    "Paprocany",
    "Wilkowyje",
    "Czułów",
    "Żwaków",
    "Mąkołowiec",
    "Cielmice",
    "Jaroszowice",
    "Urbanowice",
    "Wygorzele",
    "Glinka",
    "Stare Tychy",
  ],

  nearbyHeading: "Poza Tychy też przyjadę",
  nearbyParagraphs: [
    "Tychy leżą na południu metropolii, więc naturalnie obsługuję przy okazji Mikołów, Bieruń, Lędziny i Pszczynę, a na północ całą aglomerację aż po Katowice.",
  ],
  nearbyTowns: [
    "Mikołów",
    "Pszczyna",
    "Bieruń",
    "Lędziny",
    "Mysłowice",
    "Katowice",
    "Czechowice-Dziedzice",
  ],

  about: blokOMnie("do Tychów", "w Tychach i na południu metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tychów bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd na wszystkie osiedla i do wszystkich dzielnic Tychów jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Tychach"),
    {
      question: "Mam małą kuchnię w bloku na osiedlu — czy Thermomix się zmieści?",
      answer:
        "Prawie na pewno tak: urządzenie zajmuje mniej więcej tyle, co duży czajnik z podstawką. Powiedz przy umawianiu, na którym osiedlu mieszkasz i z którego okresu jest blok — rozkłady kuchni w Tychach są powtarzalne, więc zwykle potrafię odpowiedzieć jeszcze przez telefon.",
    },
    {
      question: "Pracuję zmianowo — czy da się umówić w nietypowej porze?",
      answer:
        "Tak. Umawiam się też przed południem w dni robocze i wieczorami. Wystarczy powiedzieć, kiedy realnie jesteś w domu.",
    },
  ],

  geo: { lat: 50.1357, lng: 18.9663 },
};
