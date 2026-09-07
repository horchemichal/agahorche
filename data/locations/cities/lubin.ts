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
 * LUBIN — miasto w zagłębiu miedziowym, jedno z zamożniejszych w Polsce,
 * z bardzo dużym zakładem pracy i wysokim odsetkiem mieszkańców pracujących
 * w jednej branży.
 *
 * KĄT: „stać nas" nie jest wystarczającym powodem. To jest jedyne miejsce,
 * w którym mogę napisać sekcję odwrotną do całej reszty tej strony:
 * NIE PRZEKONUJĘ, ŻE TO TANIE, TYLKO MÓWIĘ, ŻE SAMA MOŻLIWOŚĆ KUPIENIA
 * TO ZŁY POWÓD DO KUPIENIA. Urządzenie kupione dlatego, że po prostu
 * było na nie stać, stoi w szafce częściej niż jakiekolwiek inne.
 *
 * ROZGRANICZENIE. Pińczów dostał kąt „rzeczy kupowane raz — jeśli gotujesz
 * dwa razy w miesiącu, nie kupuj". Bełchatów — „rata, kiedy jutro nie jest
 * pewne". Tutaj jest sytuacja odwrotna do Bełchatowa: pieniądze NIE są
 * problemem, i właśnie dlatego trzeba pytać o co innego.
 *
 * CZEGO TU NIE MA: liczb o zarobkach, nazw zakładów, ocen czyjejś
 * zamożności ani sugestii, że ktoś tu wydaje bez namysłu. Piszę o mechanizmie
 * zakupowym, a nie o mieszkańcach.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Lubin leży w zagłębiu miedziowym i jest ośrodkiem górnictwa miedzi,
 * — jest to jedno z zamożniejszych miast w kraju.
 */
export const LUBIN: CityContent = {
  slug: "lubin",
  h1: "Thermomix Lubin – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Lubin — prezentacja i cena",
  seoDescription:
    "Thermomix w Lubinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubinie. Prezentacja bezpłatna — i uczciwa rozmowa, czy warto.",

  lead:
    "Przyjeżdżam do Lubina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Lubin i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lubinie – jak wygląda prezentacja?",
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
      id: "stac-nas-to-zly-powod",
      heading: "„Stać nas” to najgorszy z możliwych powodów zakupu",
      paragraphs: [
        "Lubin jest miastem miedzi i miastem, w którym pytanie o pieniądze bywa mniej dramatyczne niż gdzie indziej. Piszę o tym raz i bez komplementów, bo z tej sytuacji wynika coś, o czym sprzedawcy milczą, a co widzę u klientek regularnie.",
        "Urządzenie kupione dlatego, że akurat było na nie stać, stoi w szafce najczęściej ze wszystkich. Częściej niż kupione na raty, częściej niż kupione po długim namyśle. Powód jest prosty: skoro decyzja nic nie kosztowała emocjonalnie, to nic za nią nie stoi — żadnego postanowienia, żadnego planu, żadnego „skoro już wydaliśmy tyle pieniędzy, to się nauczę”.",
        "Dlatego u Was zadam inne pytania niż zwykle. Nie „czy Was stać”, bo to nie jest ciekawe pytanie. Zapytam, ile razy w tygodniu ktoś w domu gotuje coś od zera. Zapytam, co jecie w te wieczory, kiedy nikomu się nie chce. I zapytam, kto konkretnie miałby tego używać — bo jeśli odpowiedź brzmi „no, zobaczymy”, to zwykle nikt.",
        "Jeśli z tych odpowiedzi wyjdzie, że gotujecie rzadko i nie planujecie tego zmieniać, powiem to na głos: nie kupujcie. Nie stracę na tym nic, czego bym nie stracił, sprzedając Wam sprzęt, który po pół roku pójdzie do piwnicy — a przy okazji nie stracę czegoś, co jest dla mnie warte więcej, czyli tego, że możecie mnie komuś polecić.",
        "Natomiast jeśli okaże się, że w domu gotuje się dużo, dla kilku osób, i że komuś to zabiera wieczory — wtedy rozmowa robi się konkretna i wtedy warto. Zamożność nie jest tu argumentem ani w jedną, ani w drugą stronę. Argumentem jest to, ile razy w tygodniu ktoś stoi przy garnku.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez lukru" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz od razu, ile razy w tygodniu ktoś u Was gotuje. To pytanie, od którego i tak zacznę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubińskiej rodziny",
      paragraphs: [
        "Gdy w domu pracuje się na zmiany, obiad rzadko powstaje o jednej porze, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Lubina i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Przylesie",
    "Ustronie",
    "Polna",
    "Krzeczyn",
    "Małomice",
    "Osiek",
    "Księginice",
    "Obora",
  ],

  nearbyHeading: "Poza Lubin też przyjadę",
  nearbyParagraphs: [
    "Polkowice, Legnica, Głogów, Ścinawa i Chocianów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Polkowice", "Legnica", "Głogów", "Ścinawa", "Chocianów", "Prochowice"],

  about: blokOMnie("do Lubina", "w Lubinie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Lubinie"),
    {
      question: "Stać nas na taki wydatek. Czy to wystarczający powód?",
      answer:
        "Moim zdaniem nie — i mówię to jako osoba, która na tym zarabia. Sprzęt kupiony tylko dlatego, że było na niego stać, najczęściej trafia do szafki, bo za decyzją nic nie stało. Lepszym pytaniem jest, ile razy w tygodniu ktoś u Was gotuje coś od zera i kto konkretnie miałby z tego korzystać.",
    },
    {
      question: "A jeśli po rozmowie wyjdzie, że nie warto?",
      answer:
        "To powiem to wprost i nie będę naciskać. Prezentacja nic nie kosztuje i nie zobowiązuje, a ja wolę usłyszeć od Was później polecenie niż sprzedać urządzenie, które po pół roku wyląduje w piwnicy.",
    },
  ],

  geo: { lat: 51.4009, lng: 16.2011 },
};
