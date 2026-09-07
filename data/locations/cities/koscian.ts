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
 * KOŚCIAN — jedno ze starszych miast Wielkopolski, z zachowanym rynkiem
 * i ratuszem. Rynek to miejsce, w którym cena jest wywieszona i widoczna
 * dla każdego.
 *
 * KĄT: dlaczego ceny nie ma na tej stronie. Pytanie, które irytuje
 * najbardziej i na które sprzedawcy odpowiadają wykrętem („bo oferta jest
 * indywidualna"). Zasługuje na odpowiedź uczciwą, także w tej części,
 * która jest dla mnie niewygodna.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — cena i promocje zmieniają się, a liczba wpisana na stronie zestarzeje
 *   się w kilka tygodni i wtedy wprowadza w błąd — to jest prawdziwy
 *   powód techniczny,
 * — ale jest też druga strona i trzeba ją nazwać: brak ceny działa
 *   na korzyść sprzedawcy, bo zmusza do kontaktu. Nie będę udawać,
 *   że robi się to dla dobra klientki,
 * — co z tego wynika praktycznie: cenę podaję przez telefon, jeśli ktoś
 *   o nią zapyta, i nie stawiam warunku, że najpierw musi być spotkanie,
 * — i uczciwie: jeśli ktoś odmawia podania ceny bez prezentacji, to jest
 *   informacja o nim, a nie o produkcie.
 *
 * TWARDE GRANICE:
 * — NA STRONIE NIE PADA ŻADNA KWOTA. Ani cena, ani rata, ani wysokość
 *   promocji, ani RRSO. Liczby regulowane i zmienne podaje się w rozmowie,
 *   nie w tekście, który zestarzeje się bez niczyjej wiedzy.
 * — ŻADNYCH PROGNOZ CENOWYCH i żadnego straszenia podwyżką.
 * — ŻADNYCH PORÓWNAŃ z cenami innych sprzedawców ani innych urządzeń.
 *
 * ROZGRANICZENIE. Bełchatów mówi o wysokości raty, Radom o zakupie bez
 * prezentacji, Łuków o tym, na czym Aga zarabia, Jarocin o chwytach
 * sprzedażowych. Tutaj chodzi wyłącznie o BRAK CENY NA STRONIE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kościan jest jednym ze starszych miast Wielkopolski i ma zachowany
 *   rynek z ratuszem.
 */
export const KOSCIAN: CityContent = {
  slug: "koscian",
  h1: "Thermomix Kościan – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kościan — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kościanie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kościan — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kościanie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kościana z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Kościan i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Cenę podam przez telefon, jeśli o nią zapytasz. Bez warunku spotkania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kościanie – jak wygląda prezentacja?",
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
      id: "dlaczego-nie-ma-ceny",
      heading: "Miasto z rynkiem i ratuszem — i pytanie, czemu nie ma tu ceny",
      paragraphs: [
        "Kościan należy do starszych miast Wielkopolski i ma rynek z ratuszem — a rynek to z definicji miejsce, w którym cena jest wywieszona i widoczna dla każdego, kto przechodzi. Wykorzystam to do rzeczy, która na tej stronie widoczna nie jest i która irytuje ludzi najbardziej: dlaczego nigdzie tu nie ma podanej kwoty?",
        "Zacznę od powodu, który jest prawdziwy. Cena i promocje się zmieniają, a liczba wpisana na stronę internetową zestarzeje się w kilka tygodni i nikt tego nie zauważy — łącznie ze mną. Wtedy strona przestaje informować, a zaczyna wprowadzać w błąd, i to w sprawie najważniejszej z możliwych. Wolę nie mieć tam liczby niż mieć nieaktualną.",
        "Ale jest też druga strona i nie zamierzam udawać, że jej nie ma. Brak ceny na stronie działa na korzyść sprzedawcy: zmusza do kontaktu, a kontakt jest tym, na czym mi zależy. Byłoby nieuczciwe opowiadać Wam, że robi się to dla Waszego dobra. Nie robi się. To po prostu układ, w którym jedna wygodna dla mnie rzecz zbiega się z jedną prawdziwą.",
        "Skoro tak, to powiem, co z tego wynika u mnie w praktyce. Cenę podaję przez telefon, jeśli ktoś o nią zapyta. Nie stawiam warunku, że najpierw musi się odbyć prezentacja, i nie robię z tego gry, w której trzeba się dopraszać. Zapytajcie wprost, a dostaniecie aktualną kwotę, promocję i wysokość raty przy kilku okresach — bez umawiania czegokolwiek.",
        "Na tej stronie mimo to żadnej liczby nie napiszę, i to dotyczy także raty i wysokości promocji. Nie z tajemniczości, tylko dlatego, że są to wartości zmienne i częściowo regulowane — a raz wpisane w tekst zaczynają żyć własnym życiem. Nie będę też prognozować, czy ceny pójdą w górę, ani używać tego jako argumentu za pośpiechem.",
        "I rzecz, która przyda się Wam także poza rozmową ze mną: jeśli ktokolwiek odmawia podania ceny inaczej niż na spotkaniu w domu, to jest informacja o tym sprzedawcy, a nie o produkcie. Cena nie jest tajemnicą handlową i nie ma powodu, żeby robić z niej nagrody za wpuszczenie kogoś do mieszkania.",
      ],
      links: [{ href: "/finansowanie", label: "Finansowanie i raty" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kościanie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz na razie tylko poznać cenę, napisz o tym wprost — podam ją bez umawiania spotkania i bez naciskania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kościanie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kościańskiej rodziny",
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

  districtsHeading: "Do których części Kościana dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Konstytucji 3 Maja",
    "Osiedle Jagiellońskie",
    "Łazienki",
    "Nowe Miasto",
    "Osiedle Piastowskie",
    "Kurza Góra",
  ],

  nearbyHeading: "Poza Kościan też przyjadę",
  nearbyParagraphs: [
    "Śmigiel, Czempiń, Krzywiń i Grodzisk Wielkopolski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Śmigiel", "Czempiń", "Krzywiń", "Leszno", "Śrem", "Grodzisk Wielkopolski"],

  about: blokOMnie("do Kościana", "w Kościanie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kościana bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kościanie"),
    {
      question: "Dlaczego na stronie nie ma podanej ceny?",
      answer:
        "Z dwóch powodów i oba powiem. Prawdziwy: cena i promocje się zmieniają, a liczba wpisana na stronę zestarzeje się w kilka tygodni i zacznie wprowadzać w błąd. Drugi, niewygodny dla mnie: brak ceny zmusza do kontaktu, a kontakt jest tym, na czym mi zależy — i byłoby nieuczciwe udawać, że robi się to dla Waszego dobra.",
    },
    {
      question: "Czy podasz cenę bez umawiania prezentacji?",
      answer:
        "Tak, przez telefon, bez żadnego warunku. Aktualna kwota, promocja i wysokość raty przy kilku okresach spłaty. Jeśli ktokolwiek odmawia podania ceny inaczej niż na spotkaniu w domu, to jest informacja o tym sprzedawcy, a nie o produkcie.",
    },
  ],

  geo: { lat: 52.0872, lng: 16.6461 },
};
