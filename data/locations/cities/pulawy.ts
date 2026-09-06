import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * PUŁAWY — miasto nad Wisłą z zespołem pałacowo-parkowym Czartoryskich,
 * w którym Izabela Czartoryska urządziła Świątynię Sybilli i Domek Gotycki
 * — zbiory uznawane za początek muzealnictwa w Polsce. Dziś Puławy są
 * przede wszystkim miastem instytutów naukowych i dużych zakładów.
 *
 * KĄT: pytania o konkret. W mieście, w którym pracuje wyjątkowo dużo osób
 * z instytutów badawczych, rozmowa o urządzeniu wygląda inaczej niż gdzie
 * indziej — pada więcej pytań o parametry, a mniej o wrażenia. Sekcja ma
 * na to odpowiedzieć w jedyny uczciwy sposób: podać, co wiem, powiedzieć
 * skąd to wiem, i ZOBOWIĄZAĆ SIĘ DO „NIE WIEM, SPRAWDZĘ” zamiast
 * improwizowania. To jest jedyna strona w serwisie, na której ta obietnica
 * jest wprost wypisana — i dobrze, żeby taka została.
 *
 * ŻADNYCH PARAMETRÓW W TEKŚCIE. Nie podaję mocy, pojemności, wagi ani
 * czasów — bo to są dane producenta, które się zmieniają między wersjami,
 * a strona ma żyć dłużej niż jeden model. Mówię, że je podam na spotkaniu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Puławach zachował się zespół pałacowo-parkowy Czartoryskich
 *   ze Świątynią Sybilli i Domkiem Gotyckim,
 * — zbiory Izabeli Czartoryskiej uznaje się za początek muzealnictwa
 *   w Polsce,
 * — w mieście działają instytuty badawcze oraz duży zakład przemysłowy,
 * — Puławy leżą nad Wisłą, niedaleko Kazimierza Dolnego i Nałęczowa.
 *
 * CZEGO NIE MA: nazw instytutów, danych o zatrudnieniu, parametrów
 * technicznych urządzenia.
 */
export const PULAWY: CityContent = {
  slug: "pulawy",
  h1: "Thermomix Puławy – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Puławy — prezentacja i cena",
  seoDescription:
    "Thermomix w Puławach: bezpłatna prezentacja TM7 u Ciebie w domu, konkretne odpowiedzi na pytania. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Puławy — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Puławach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Puław z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, od Centrum po Włostowice i Górną Niwę.",

  highlights: highlightyStandardowe("Puławy i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Puławach – jak wygląda prezentacja?",
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
      id: "nie-wiem-sprawdze",
      heading: "Miasto, które pyta o konkret",
      paragraphs: [
        "Puławy mają dwie twarze i obie są o zbieraniu wiedzy. W parku stoi Świątynia Sybilli, gdzie Izabela Czartoryska urządziła zbiory uznawane za początek polskiego muzealnictwa. A dziś miasto żyje w dużej mierze z instytutów badawczych i z przemysłu, w którym „mniej więcej” nie jest odpowiedzią. To widać w rozmowie — nigdzie indziej nie słyszę tylu pytań o konkret.",
        "Nie traktuję tego jako utrudnienia — wolę takie spotkania. Pytania brzmią zwykle podobnie: ile ma mocy, jaka jest pojemność naczynia, ile waży, jak dokładna jest waga, co dokładnie obejmuje gwarancja, co jest z częściami eksploatacyjnymi i po jakim czasie zwykle wymienia się uszczelki i noże.",
        "Na wszystkie te pytania mam odpowiedzi i podam je na spotkaniu — z materiałów producenta, a nie z pamięci, żeby nie pomylić się o jedną cyfrę. Świadomie nie wpisuję ich na tę stronę: parametry różnią się między wersjami urządzenia i zmieniają się w czasie, a strona ma być prawdziwa także za dwa lata.",
        "I najważniejsze zobowiązanie, jedyne wypisane u mnie wprost. Jeśli zapytacie o coś, czego nie wiem, powiem „nie wiem” i sprawdzę — a potem oddzwonię z odpowiedzią. Nie będę zgadywać ani odpowiadać ogólnikiem. W mieście, w którym połowa moich rozmówców rozpozna improwizację po trzech zdaniach, byłoby to zresztą wyjątkowo głupie.",
        "Jeśli macie listę pytań, przygotujcie ją przed spotkaniem i przejdźmy przez nią po kolei. Wolę godzinę pytań niż godzinę zachwytów.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Puławach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i kilka pasujących terminów. Umawiam się popołudniami, wieczorami i w weekendy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Puławach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla puławskiej rodziny",
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

  districtsHeading: "Do których dzielnic Puław dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Włostowice",
    "Górna Niwa",
    "Niwa",
    "Wólka Profecka",
    "Piaski",
    "Zielona",
    "Kolonia Włostowice",
  ],

  nearbyHeading: "Poza Puławy też przyjadę",
  nearbyParagraphs: [
    "Nałęczów, Kazimierz Dolny, Ryki, Dęblin i Opole Lubelskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nałęczów", "Kazimierz Dolny", "Ryki", "Dęblin", "Opole Lubelskie", "Lublin"],

  about: blokOMnie("do Puław", "w Puławach i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Puław bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych gmin. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Puławach"),
    {
      question: "Podasz mi dokładne parametry techniczne?",
      answer:
        "Tak, na spotkaniu i z materiałów producenta, a nie z pamięci — moc, pojemność, wagę, zakres gwarancji i to, jakie części się zużywają. Na stronie ich nie wpisuję, bo różnią się między wersjami i szybko się dezaktualizują.",
    },
    {
      question: "A jeśli zapytam o coś, czego nie wiesz?",
      answer:
        "Powiem, że nie wiem, sprawdzę i oddzwonię z odpowiedzią. Nie będę zgadywać ani zbywać ogólnikiem — wolę oddzwonić za dwa dni niż powiedzieć coś, co się potem nie sprawdzi.",
    },
  ],

  geo: { lat: 51.4167, lng: 21.9694 },
};
