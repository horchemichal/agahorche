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
 * JAROCIN — miasto, którego nazwa w całej Polsce oznacza jedno: festiwal,
 * na który od lat osiemdziesiątych zjeżdżała młodzież nieufna wobec
 * wszystkiego, co oficjalne.
 *
 * KĄT: czego NIE powiem na prezentacji. Miasto festiwalu nieufności jest
 * jedynym właściwym miejscem na sekcję meta: LISTA CHWYTÓW SPRZEDAŻOWYCH,
 * KTÓRYCH NIE UŻYWAM, wraz z powodem. To jest deklaracja weryfikowalna —
 * klientka może sprawdzić na spotkaniu, czy któryś padł.
 *
 * DLACZEGO TO NIE JEST PUSTA DEKLARACJA. Bo każdy punkt na tej liście jest
 * konkretną techniką, którą da się rozpoznać: sztuczna presja czasu,
 * „ostatnia taka cena", liczenie oszczędności na jedzeniu, pokazywanie
 * dań, których nikt nie robi, i wciąganie w rekrutację.
 *
 * ROZGRANICZENIE. Biłgoraj przesiewa OBIETNICE o urządzeniu, Ząbkowice
 * ZARZUTY wobec urządzenia. Tutaj przedmiotem jest MOJE ZACHOWANIE
 * na spotkaniu, a nie sprzęt.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Jarocinie od lat siedemdziesiątych i osiemdziesiątych odbywa się
 *   festiwal muzyczny, z którego miasto jest znane w całym kraju.
 *
 * CZEGO NIE MA: nazw zespołów, dat, ocen politycznych tamtego czasu.
 */
export const JAROCIN: CityContent = {
  slug: "jarocin",
  h1: "Thermomix Jarocin – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Jarocin — prezentacja i cena",
  seoDescription:
    "Thermomix w Jarocinie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jarocin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jarocinie. Bez presji i bez chwytów — lista jest na stronie.",

  lead:
    "Przyjeżdżam do Jarocina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Jarocin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jarocinie – jak wygląda prezentacja?",
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
      id: "czego-nie-powiem",
      heading: "Miasto festiwalu — więc lista chwytów, których u Was nie użyję",
      paragraphs: [
        "Jarocin w całej Polsce znaczy jedno: festiwal, na który zjeżdżała młodzież z gruntowną nieufnością wobec wszystkiego, co brzmi jak oficjalny komunikat. Uważam tę nieufność za zdrową i uznaję, że wobec sprzedaży domowej jest jak najbardziej na miejscu. Dlatego zamiast przekonywać, że jestem inna, wypiszę konkretnie, czego u Was nie zrobię — żebyście mogli to sprawdzić na spotkaniu.",
        "Nie powiem, że ta cena obowiązuje tylko dzisiaj. Promocje w tej firmie trwają zwykle miesiąc i wiszą na stronie. Jeśli któraś naprawdę się kończy, podam datę, a Wy możecie ją sprawdzić przy mnie.",
        "Nie policzę Wam, że urządzenie zwróci się na jedzeniu. To ulubiona sztuczka tej branży: zestawienie, z którego wychodzi, że po ośmiu miesiącach oszczędności na gotowych daniach spłaca sprzęt. Takie wyliczenia zakładają, że jecie inaczej, niż jecie naprawdę, i nie mam zamiaru ich Wam pokazywać.",
        "Nie ugotuję dania, którego sama nie robię w domu. Efektowne rzeczy z folderu robią wrażenie na godzinę i nikt do nich nie wraca po dwóch miesiącach — dlatego wolę gotować to, co u Was normalnie się je.",
        "Nie będę pytać o znajome, którym mogłabym to pokazać. Jeśli same z siebie kogoś polecicie, będzie mi bardzo miło; naciskać nie będę, bo to zamienia gościnę w transakcję.",
        "Nie zaproponuję Wam pracy przy tym sprzęcie. Zdarza się to na takich spotkaniach nagminnie i uważam to za nieuczciwe wobec kogoś, kto zaprosił mnie do kuchni po prezentację.",
        "I nie poproszę o decyzję tego samego dnia. Mogę zostawić wyliczenie na piśmie i zadzwonić za tydzień, jeśli sobie tego życzycie. Jeśli nie — nie zadzwonię.",
        "Tyle. Jeśli którykolwiek z tych punktów u Was padnie, macie prawo mi to wypomnieć i będziecie mieli rację.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Jak dokładnie wygląda spotkanie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jarocinie?",
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
    sekcjaCena("w Jarocinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jarocińskiej rodziny",
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
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
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
    "Jarocin",
    "Siedlemin",
    "Golina",
    "Wilkowyja",
    "Witaszyce",
    "Cielcza",
    "Mieszków",
    "Roszków",
    "Prusy",
    "Potarzyca",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Pleszew, Żerków, Koźmin Wielkopolski i Borek Wielkopolski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pleszew", "Żerków", "Koźmin Wielkopolski", "Borek Wielkopolski", "Środa Wielkopolska"],

  about: blokOMnie("do Jarocina", "w gminie Jarocin i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jarocina bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Jarocinie"),
    {
      question: "Czy będzie presja na decyzję tego samego dnia?",
      answer:
        "Nie. Nie powiem, że cena obowiązuje tylko dzisiaj, bo promocje trwają zwykle miesiąc i wiszą na stronie — a jeśli któraś naprawdę się kończy, podam datę do sprawdzenia przy mnie. Mogę zostawić wyliczenie na piśmie i zadzwonić za tydzień tylko wtedy, gdy sobie tego życzysz.",
    },
    {
      question: "Czy będziesz mnie pytać o znajome albo proponować pracę?",
      answer:
        "Nie i uważam obie te rzeczy za nieuczciwe wobec kogoś, kto zaprosił mnie do kuchni po prezentację. Jeśli sama kogoś polecisz, będzie mi bardzo miło, ale naciskać nie będę.",
    },
  ],

  geo: { lat: 51.9739, lng: 17.5044 },
};
