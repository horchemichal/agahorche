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
 * MYSŁOWICE — miasto na styku wszystkiego. Trójkąt Trzech Cesarzy, czyli
 * miejsce, w którym do 1918 roku schodziły się granice trzech państw,
 * leży dokładnie tutaj, przy ujściu Białej Przemszy do Czarnej.
 *
 * KĄT: Mysłowice nigdy nie były centrum niczego i to nie jest zarzut —
 * to praktyczna cecha życia tutaj. Po kino, po restaurację, po zakupy
 * jedzie się gdzie indziej: do Katowic, do Sosnowca, do Tychów, do
 * Jaworzna. Każdy w inną stronę, bo z Mysłowic wszędzie jest blisko.
 * Kuchenna konsekwencja jest prosta i uczciwa: skoro „wyjście na obiad"
 * oznacza tutaj wsiąść w samochód, to jedzenie w domu ma większy ciężar
 * niż w mieście, gdzie knajpa jest na dole.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Trójkąt Trzech Cesarzy w Mysłowicach to miejsce zbiegu granic Rosji,
 *   Prus i Austro-Węgier do 1918 roku,
 * — miasto leży przy ujściu Białej Przemszy do Czarnej Przemszy,
 * — Mysłowice graniczą m.in. z Katowicami, Sosnowcem, Jaworznem, Imielinem
 *   i Lędzinami — czyli i ze Śląskiem, i z Zagłębiem, i z Małopolską,
 * — dzielnice takie jak Dziećkowice, Kosztowy czy Krasowy mają charakter
 *   podmiejski i były dawniej samodzielnymi miejscowościami,
 * — w XIX i na początku XX wieku przez mysłowicki dworzec przechodziła
 *   duża emigracja zarobkowa za ocean.
 *
 * CZEGO NIE MA: liczby emigrantów, dat granicznych podanych z dokładnością,
 * której nie mam potwierdzonej, statystyk dojazdów do pracy.
 */
export const MYSLOWICE: CityContent = {
  slug: "myslowice",
  h1: "Thermomix Mysłowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Mysłowice — prezentacja i cena",
  seoDescription:
    "Thermomix w Mysłowicach: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mysłowice — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mysłowicach. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Mysłowic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Centrum, na Piasku, w Brzezince, Kosztowach czy Dziećkowicach. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("całe Mysłowice, wszystkie dzielnice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mysłowicach – jak wygląda prezentacja?",
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
      id: "na-styku",
      heading: "Miasto, z którego wszędzie jest blisko",
      paragraphs: [
        "W Mysłowicach zbiegały się granice trzech państw — Trójkąt Trzech Cesarzy przy ujściu Białej Przemszy do Czarnej jest tego bardzo dosłownym śladem. Do dziś miasto leży na styku: Katowice po jednej stronie, Sosnowiec po drugiej, Jaworzno po trzeciej. Śląsk, Zagłębie i Małopolska w promieniu kilkunastu minut.",
        "To ma bardzo praktyczne przełożenie na kuchnię, choć brzmi jak ciekawostka. Mysłowice nigdy nie były miejscem, do którego się przyjeżdża — po kino, po restaurację, po większe zakupy jedzie się stąd gdzie indziej. „Wyjście na obiad” oznacza tu wsiąść w samochód, a nie zejść na dół.",
        "Dlatego jedzenie robione w domu waży tu więcej niż w centrum dużego miasta. I dlatego pytanie, ile realnie zajmuje przygotowanie obiadu w tygodniu, jest tu poważniejsze niż gdzie indziej — to nie jest wybór między gotowaniem a knajpą, tylko między gotowaniem a czymś odgrzanym.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mysłowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — ustalenie terminu zajmuje kilka minut. Możesz też zostawić kontakt w formularzu i dopisać, o której oddzwonić.",
        "Podaj dzielnicę. Dziećkowice i Kosztowy to inny kierunek niż Centrum czy Brzezinka, a od tego zależy tylko godzina, którą mogę zaproponować — nigdy cena.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mysłowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mysłowickiej rodziny",
      paragraphs: [
        "W Mysłowicach bardzo często jest tak, że każdy członek rodziny pracuje w innym mieście — jedno w Katowicach, drugie w Jaworznie, trzecie na miejscu. Wracają o różnych porach i obiad przestaje być jednym wydarzeniem, a staje się serią talerzy rozłożoną na trzy godziny.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
        "Przy małym dziecku dochodzi Varoma — porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu i bez drugiego garnka do umycia.",
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

  districtsHeading: "Do których dzielnic Mysłowic dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — także do tych po drugiej stronie miasta, które wyglądają jak osobna wieś.",
    "Mysłowice są rozciągnięte, więc przy umawianiu przydaje mi się nazwa dzielnicy. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Piasek",
    "Bończyk",
    "Janów Miejski",
    "Ćmok",
    "Słupna",
    "Brzezinka",
    "Brzęczkowice",
    "Stare Miasto",
    "Wesoła",
    "Morgi",
    "Larysz",
    "Hajdowizna",
    "Kosztowy",
    "Krasowy",
    "Dziećkowice",
  ],

  nearbyHeading: "Poza Mysłowice też przyjadę",
  nearbyParagraphs: [
    "Mysłowice sąsiadują z Katowicami, Sosnowcem, Jaworznem, Imielinem, Lędzinami i Tychami — to jedna trasa i spokojnie dwa spotkania w jedno popołudnie.",
  ],
  nearbyTowns: ["Katowice", "Sosnowiec", "Jaworzno", "Imielin", "Lędziny", "Tychy", "Chełm Śląski"],

  about: blokOMnie("do Mysłowic", "w Mysłowicach i okolicy", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mysłowic bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Mysłowic jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Mysłowicach"),
    {
      question: "Czy przyjedziesz do Dziećkowic albo Kosztów?",
      answer:
        "Tak, do każdej dzielnicy. To, że miasto jest rozciągnięte, jest moim problemem przy układaniu trasy, a nie Twoim przy płaceniu.",
    },
    {
      question: "Pracuję w Katowicach i wracam późno — czy umówisz się wieczorem?",
      answer:
        "Tak, wieczory to najczęstsza pora moich spotkań. Powiedz przy ustalaniu terminu, o której realnie jesteś w domu, a dopasuję godzinę.",
    },
  ],

  geo: { lat: 50.2075, lng: 19.1663 },
};
