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
 * CZĘSTOCHOWA — administracyjnie województwo śląskie, kulturowo i kuchennie
 * nie ma z Górnym Śląskiem wiele wspólnego. Leży siedemdziesiąt kilometrów
 * od Katowic, nie należy do metropolii, a historycznie to ziemia krakowska.
 * Strona, która wita częstochowiankę śląskimi kluskami, mija się z celem
 * tak samo jak w Sosnowcu — tylko z innego powodu.
 *
 * KĄT TEJ STRONY: Częstochowa to miasto, w którym goście w domu są
 * normalnym elementem roku. Jasna Góra ściąga pielgrzymki i odwiedziny
 * rodziny z całej Polski, a to znaczy powtarzalną sytuację kuchenną,
 * której nie ma w Zabrzu ani w Gliwicach: nagle trzeba ugotować dla ośmiu
 * osób zamiast czterech, często bez zapowiedzi i bez wolnego dnia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Jasna Góra jest najważniejszym sanktuarium maryjnym w Polsce
 *   i celem pielgrzymek przez cały rok, ze szczytem w sierpniu,
 * — Aleja Najświętszej Maryi Panny to główna oś miasta prowadząca
 *   od Starego Rynku pod klasztor,
 * — Częstochowa leży na Wyżynie Krakowsko-Częstochowskiej, u wrót Jury,
 * — historycznie miasto wchodziło w skład ziemi krakowskiej, a nie Śląska,
 * — do województwa śląskiego trafiło przy reformie administracyjnej.
 *
 * CZEGO NIE MA: liczby pielgrzymów podanej jako fakt, dat i godzin
 * uroczystości, danych o ruchu turystycznym.
 */
export const CZESTOCHOWA: CityContent = {
  slug: "czestochowa",
  h1: "Thermomix Częstochowa – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Częstochowa — prezentacja i cena",
  seoDescription:
    "Thermomix w Częstochowie: bezpłatna prezentacja TM7 u Ciebie w kuchni, wszystkie dzielnice. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Częstochowa — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Częstochowie. Prezentacja bezpłatna, ratę liczymy na miejscu, decyzja należy do Ciebie.",

  lead:
    "Przyjeżdżam do Częstochowy z Thermomixem TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy koszty. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic, od Parkitki po Raków.",

  highlights: highlightyStandardowe("cała Częstochowa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Częstochowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów i nie sprzątasz kuchni na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy realnie: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz mi wcześniej, ile osób siada u Was do stołu i czego nie jecie — dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. „Muszę to przegadać w domu” jest pełną odpowiedzią, a spotkanie jest bezpłatne niezależnie od decyzji.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "goscie",
      heading: "Miasto, w którym goście pojawiają się przez cały rok",
      paragraphs: [
        "Częstochowa ma kuchenny problem, którego nie mają miasta konurbacji: gości. Jasna Góra ściąga ludzi z całej Polski przez okrągły rok, a przy okazji przyjeżdża rodzina, znajomi rodziny i znajomi znajomych — czasem z zapowiedzią, czasem z telefonem sprzed godziny. W wielu tutejszych domach „ugotować nagle dla ośmiu osób zamiast czterech” to nie jest sytuacja wyjątkowa, tylko coś, co zdarza się kilka razy w roku.",
        "To jest dokładnie ten scenariusz, w którym Thermomix pokazuje, po co jest. Podwojenie porcji nie oznacza podwojenia pilnowania — zupa dla ośmiu osób gotuje się tak samo bezobsługowo jak dla czterech, a ciasto wyrabia się w tym samym czasie, w którym normalnie dopiero szukałabyś miski.",
        "Na spotkaniu chętnie policzę to na Twoim przykładzie: powiedz, co zwykle robisz, gdy przyjeżdżają goście, a pokażę, która część tej roboty znika, a która zostaje.",
      ],
    },
    {
      id: "nie-slask",
      heading: "Województwo śląskie, ale kuchnia zupełnie inna",
      paragraphs: [
        "Częstochowa leży w województwie śląskim od reformy administracyjnej, ale historycznie to ziemia krakowska, a do Katowic jest stąd siedemdziesiąt kilometrów. Nikt tu nie mówi „u nas na Śląsku” i nie robi rolady z kluskami jako niedzielnego kanonu.",
        "Piszę o tym, bo to jest różnica, której nie widać na mapie województw — a widać ją od razu przy stole. Na prezentacji nie przyjeżdżam z gotowym „regionalnym zestawem”. Przyjeżdżam z pytaniem, co Wy jecie w środę i w niedzielę, i to gotujemy.",
        "Blisko stąd na Jurę i do Małopolski — czyli tam, gdzie pracuję na co dzień. Dojazd do Częstochowy jest dla mnie naturalnym kierunkiem, a nie wyprawą.",
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Częstochowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla częstochowskiej rodziny",
      paragraphs: [
        "Częstochowa jest miastem rozłożystym: bloki na Tysiącleciu, Północy i Wrzosowiaku, kamienice wzdłuż Alei, domy jednorodzinne na obrzeżach i całe dzielnice o charakterze niemal małomiasteczkowym. Wspólne jest tempo — spokojniejsze niż w konurbacji, ale z tym samym wąskim gardłem: obiadem w dniu, w którym wszyscy wracają o innej porze.",
        "Thermomix pomaga tu nie szybkością, tylko brakiem konieczności pilnowania. Danie może być gotowe wcześniej i poczekać albo powstawać w tle, gdy robisz coś innego. Gotowanie i miksowanie dzieje się w jednym naczyniu, więc po zupie nie zostaje stos garnków.",
        "Przy małym dziecku dochodzi Varoma — porcja na parze powstaje równolegle z obiadem dla dorosłych, bez drugiego garnka.",
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

  districtsHeading: "Do których dzielnic Częstochowy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — od Starego Miasta i Alei po Gnaszyn, Kiedrzyn i Mirów.",
    "Częstochowa jest rozciągnięta, więc przy umawianiu przydaje mi się nazwa dzielnicy. Reszta to moja sprawa.",
  ],
  districts: [
    "Stare Miasto",
    "Śródmieście",
    "Podjasnogórska",
    "Tysiąclecie",
    "Północ",
    "Wrzosowiak",
    "Parkitka",
    "Raków",
    "Ostatni Grosz",
    "Trzech Wieszczów",
    "Zawodzie-Dąbie",
    "Błeszno",
    "Stradom",
    "Gnaszyn-Kawodrza",
    "Grabówka",
    "Kiedrzyn",
    "Mirów",
    "Lisiniec",
    "Wyczerpy-Aniołów",
    "Dźbów",
  ],

  nearbyHeading: "Poza Częstochowę też przyjadę",
  nearbyParagraphs: [
    "Do Myszkowa, Kłobucka, Blachowni i Lublińca, a przez Jurę także w stronę Zawiercia i dalej do Małopolski — to trasa, którą i tak jeżdżę.",
  ],
  nearbyTowns: ["Myszków", "Kłobuck", "Blachownia", "Lubliniec", "Zawiercie", "Koniecpol"],

  about: blokOMnie("do Częstochowy", "w Częstochowie i okolicy", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Częstochowy bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Częstochowy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Częstochowie"),
    {
      question: "Czy Thermomix pomoże, gdy często mam gości?",
      answer:
        "To jedna z sytuacji, w których widać go najlepiej. Podwojenie porcji nie oznacza podwojenia pracy — zupa czy danie jednogarnkowe dla ośmiu osób gotuje się tak samo bezobsługowo jak dla czterech. Na spotkaniu policzymy to na Twoim konkretnym przykładzie.",
    },
    {
      question: "Czy przyjedziesz do dzielnic na obrzeżach, na przykład do Mirowa albo Kiedrzyna?",
      answer:
        "Tak, do każdej dzielnicy. Częstochowa jest rozległa, więc przy umawianiu powiedz, gdzie dokładnie mieszkasz — od tego zależy tylko pora, którą mogę zaproponować, a nie cena.",
    },
  ],

  geo: { lat: 50.8118, lng: 19.1203 },
};
