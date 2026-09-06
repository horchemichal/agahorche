import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * RADOMSKO — miasto na południu województwa, od końca XIX wieku ośrodek
 * produkcji mebli giętych; tutejsze krzesła sprzedawano w całej Europie.
 * Działał tu również duży zakład metalowy.
 *
 * KĄT: krzesło — a konkretnie to, kto na nim siada. W mieście, które
 * od stu kilkudziesięciu lat robi krzesła, mogę napisać o rzeczy, która
 * jest w każdym domu i o której nikt nie mówi: OSOBA, KTÓRA UGOTOWAŁA
 * OBIAD, SIADA OSTATNIA ALBO NIE SIADA WCALE. Dokłada, dolewa, wstaje
 * po sól, zjada na stojąco przy kuchence.
 *
 * MECHANIZM, KTÓRY TO ZMIENIA, jest bardzo konkretny i wart nazwania:
 * jeśli danie kończy się samo, w czasie gdy nakrywa się do stołu, to
 * gotujący siada w tym samym momencie co wszyscy. Nie chodzi o czas —
 * chodzi o to, że ostatnie dziesięć minut przed obiadem nie należy
 * do garnka.
 *
 * ROZGRANICZENIE WOBEC ĆMIELOWA: tam chodziło o obiad dla gości od święta
 * i o to, że wszystko musi być gotowe naraz. Tu o zwykły wtorek i o jedną
 * osobę, która nie siada.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Radomsko jest od końca XIX wieku ośrodkiem produkcji mebli giętych,
 *   a tutejsze krzesła sprzedawano w wielu krajach,
 * — działał tu także duży zakład metalowy,
 * — miasto leży na południu województwa, blisko granicy ze śląskim.
 *
 * CZEGO NIE MA: nazw firm, dat, danych o produkcji i zatrudnieniu.
 */
export const RADOMSKO: CityContent = {
  slug: "radomsko",
  h1: "Thermomix Radomsko – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Radomsko — prezentacja i cena",
  seoDescription:
    "Thermomix w Radomsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radomsko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Radomsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Radomska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Radomsko i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Radomsku – jak wygląda prezentacja?",
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
      id: "kto-siada-ostatni",
      heading: "Miasto krzeseł — i pytanie, kto na nich siada",
      paragraphs: [
        "Radomsko robi krzesła od końca dziewiętnastego wieku i tutejsze meble gięte trafiały do kawiarni w całej Europie. Skoro więc piszę do miasta krzeseł, napiszę o czymś, co dzieje się przy każdym stole i o czym się nie mówi: o tym, kto na tych krzesłach faktycznie siada.",
        "W bardzo wielu domach osoba, która ugotowała obiad, siada ostatnia. Albo nie siada wcale. Dokłada, dolewa, wstaje po sól, zdejmuje coś z ognia w połowie własnego talerza, a często zjada na stojąco przy kuchence, kiedy reszta już wstała. To nie jest niczyja złośliwość ani brak wychowania — to po prostu wynika z tego, jak ustawione jest ostatnie dziesięć minut przed obiadem.",
        "Bo w tych dziesięciu minutach dzieje się najwięcej: sos się kończy, ziemniaki dochodzą, coś trzeba odcedzić i przełożyć. Ktoś musi przy tym być. I ta osoba siada do stołu wtedy, gdy inni są już w połowie.",
        "Tu jest jedyna rzecz, którą urządzenie realnie w tej sprawie zmienia — i jest zaskakująco konkretna. Jeśli danie kończy się samo, w czasie gdy ktoś inny nakrywa do stołu, to gotujący nie ma czego pilnować w ostatniej chwili. Siada razem z resztą, bo nie ma powodu, żeby stać.",
        "To nie jest oszczędność czasu i nie będę tego tak nazywać. To jest przesunięcie jednej osoby z pozycji obsługującej na pozycję siedzącą przy stole. W mieście, które robi krzesła, wydaje mi się to niezłym argumentem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Radomsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Jeżdżę po mieście i po okolicy, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Radomsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla radomszczańskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — ta sama, która potem jako ostatnia siada do stołu.",
        "Thermomix pomaga tym, że nie wymaga obecności, także w tych ostatnich minutach przed podaniem. Danie gotuje się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Radomska i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Kowalowiec",
    "Bartodzieje",
    "Stobiecko Miejskie",
    "Folwarki",
    "Wymysłówek",
    "Saniki",
    "Zakrzówek",
    "Bogwidzowy",
    "Górka",
  ],

  nearbyHeading: "Poza Radomsko też przyjadę",
  nearbyParagraphs: [
    "Kamieńsk, Bełchatów, Pajęczno i Przedbórz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kamieńsk", "Bełchatów", "Pajęczno", "Przedbórz", "Piotrków Trybunalski"],

  about: blokOMnie("do Radomska", "w Radomsku i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Radomska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Radomsku"),
    {
      question: "Zawsze jem ostatnia i na stojąco. Czy to coś zmieni?",
      answer:
        "Zmienia jedną konkretną rzecz: ostatnie dziesięć minut przed obiadem nie należy już do garnka. Jeśli danie kończy się samo, gdy ktoś nakrywa do stołu, nie masz czego pilnować i siadasz razem z resztą. To niewiele, ale codziennie.",
    },
    {
      question: "Czy urządzenie samo poda i posprząta?",
      answer:
        "Nie — nakrywanie, podawanie i zmywanie zostaje po Waszej stronie. Zmniejsza się liczba naczyń i znika pilnowanie w trakcie, ale nikt nie powinien Wam obiecywać, że obiad zrobi się sam od początku do końca.",
    },
  ],

  geo: { lat: 51.0678, lng: 19.4447 },
};
