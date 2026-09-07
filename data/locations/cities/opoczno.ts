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
 * OPOCZNO — miasto na południowym wschodzie województwa, znane w całej
 * Polsce z produkcji płytek ceramicznych. Jest też ośrodkiem regionu
 * opoczyńskiego, z bardzo wyrazistymi, powtarzalnymi wzorami tkanin
 * i strojów ludowych.
 *
 * KĄT: powtarzalność. Miasto, które robi wzory — i to takie, które muszą
 * wychodzić identycznie milion razy — jest jedynym właściwym miejscem
 * na sekcję o tym, co powtarzalność daje w kuchni i czego NIE daje.
 * Daje: waga i ustawiona temperatura sprawiają, że danie wychodzi tak
 * samo za każdym razem, a przepis da się przekazać komuś innemu i wyjdzie.
 * Nie daje: POWTARZALNE NIE ZNACZY DOBRE. Powtarzalnie mierne danie jest
 * nadal mierne, a urządzenie nie ma smaku i nie poprawi przepisu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Opoczno jest znanym ośrodkiem produkcji płytek ceramicznych,
 * — region opoczyński ma wyraziste wzory tkanin i strojów ludowych,
 * — miasto leży na południowym wschodzie województwa łódzkiego.
 *
 * CZEGO NIE MA: nazw firm, danych o produkcji, opisu strojów.
 */
export const OPOCZNO: CityContent = {
  slug: "opoczno",
  h1: "Thermomix Opoczno – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Opoczno — prezentacja i cena",
  seoDescription:
    "Thermomix w Opocznie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Opoczno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Opocznie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Opoczna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Opoczno i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Opocznie – jak wygląda prezentacja?",
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
      id: "powtarzalnosc",
      heading: "Miasto wzorów — i co powtarzalność daje w kuchni",
      paragraphs: [
        "Opoczno robi płytki, które muszą wychodzić identycznie milion razy, a region opoczyński słynie z wzorów tak wyrazistych, że rozpoznaje się je z drugiego końca sali. Powtarzalność jest tu więc zawodem. Warto z tego skorzystać, bo w kuchni jest ona chwalona bezrefleksyjnie, a zasługuje na rozdzielenie na dwie części.",
        "Zacznę od tego, co powtarzalność naprawdę daje — i jest tego więcej, niż się wydaje. Waga wbudowana w urządzenie i ustawiona temperatura sprawiają, że ciasto wychodzi tak samo w marcu i w listopadzie, niezależnie od tego, czy tego dnia ktoś się śpieszył. Sos nie wychodzi raz gęsty, raz wodnisty. A przepis zapisany z gramaturą można przekazać córce albo synowej i u nich też wyjdzie — czego o „szczypcie tego i tyle, ile trzeba” powiedzieć się nie da.",
        "Dla osoby, która piecze na zamówienie albo gotuje dla gości, to jest realna wartość: mniej niespodzianek i mniej wyrzuconego jedzenia.",
        "A teraz druga część, o której się nie mówi. Powtarzalne nie znaczy dobre. Jeśli przepis jest mierny, urządzenie odtworzy go miernie — za każdym razem tak samo. Nie ma smaku, nie spróbuje, nie doprawi i nie powie, że zabrakło kwasu albo że tego dnia marchewka była słodsza. To wszystko nadal należy do Was.",
        "Uczciwe podsumowanie brzmi więc tak: urządzenie zdejmuje z gotowania przypadek, ale nie zdejmuje myślenia. Kto liczył, że przejmie także tę drugą część, będzie rozczarowany — i wolę powiedzieć to teraz niż po zakupie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Opocznie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Opocznie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla opoczyńskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności, a danie wychodzi tak samo niezależnie od tego, ile czasu miałaś tego dnia. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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
    "Opoczno",
    "Bielowice",
    "Januszewice",
    "Kruszewiec",
    "Libiszów",
    "Mroczków",
    "Ogonowice",
    "Sielec",
    "Wygnanów",
    "Kraśnica",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Drzewica, Tomaszów Mazowiecki, Przedbórz i Sulejów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Drzewica", "Tomaszów Mazowiecki", "Przedbórz", "Sulejów", "Piotrków Trybunalski"],

  about: blokOMnie("do Opoczna", "w gminie Opoczno i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Opoczna bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Opocznie"),
    {
      question: "Czy dzięki temu ciasto zawsze wyjdzie tak samo?",
      answer:
        "Tak — waga jest wbudowana, a temperatura ustawiona, więc znika przypadek i „na oko”. Przepis zapisany z gramaturą można też przekazać komuś innemu i u niego również wyjdzie. To jest realna zaleta, zwłaszcza jeśli pieczesz na zamówienie.",
    },
    {
      question: "Czy urządzenie poprawi mój przepis?",
      answer:
        "Nie. Nie ma smaku, nie spróbuje i nie doprawi — odtworzy dokładnie to, co mu każesz, także wtedy, gdy przepis jest kiepski. Zdejmuje przypadek, ale nie zdejmuje myślenia, i lepiej wiedzieć to przed zakupem.",
    },
  ],

  geo: { lat: 51.3775, lng: 20.2814 },
};
