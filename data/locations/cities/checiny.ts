import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * CHĘCINY — miasteczko pod Kielcami z ruinami zamku królewskiego na
 * wzgórzu, jedną z najbardziej rozpoznawalnych sylwetek w regionie.
 * W okolicy wydobywano marmur chęciński, w pobliżu leży jaskinia Raj,
 * a w Tokarni — skansen wsi kieleckiej.
 *
 * KĄT: „widziane z góry". Chęciny mają rzadką sytuację — dziesiątki tysięcy
 * ludzi rocznie oglądają to miasto z murów zamku i prawie nikt nie schodzi
 * do niego na dłużej niż kwadrans. Widok z góry jest prawdziwy i zupełnie
 * nic nie mówi o tym, jak się tu mieszka. To jest dokładnie ta sama
 * różnica, co między FILMIKIEM O THERMOMIXIE A THERMOMIXEM W TWOJEJ
 * KUCHNI — i to jest sekcja o tym, dlaczego prezentacja odbywa się u Ciebie,
 * a nie w salonie ani na ekranie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — nad Chęcinami stoją ruiny zamku królewskiego, widoczne z daleka,
 * — w okolicy wydobywano wapień zwany marmurem chęcińskim,
 * — w pobliżu znajdują się jaskinia Raj i skansen w Tokarni,
 * — miasto leży niedaleko Kielc, przy trasie w kierunku Krakowa,
 * — do gminy należą m.in. Podzamcze, Starochęciny, Korzecko, Bolmin,
 *   Radkowice, Siedlce, Wolica.
 *
 * CZEGO NIE MA: liczby turystów, dat budowy zamku, czasów przejazdu.
 */
export const CHECINY: CityContent = {
  slug: "checiny",
  h1: "Thermomix Chęciny – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Chęciny — prezentacja i cena",
  seoDescription:
    "Thermomix w Chęcinach: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chęciny — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chęcinach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chęcin z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Podzamcza, Starochęcin, Korzecka i pozostałych sołectw.",

  highlights: highlightyStandardowe("Chęciny i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chęcinach – jak wygląda prezentacja?",
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
      id: "widziane-z-gory",
      heading: "Miasto, które prawie wszyscy widzą tylko z góry",
      paragraphs: [
        "Z murów chęcińskiego zamku widać całe miasteczko jak na dłoni. Przyjeżdżają tu ludzie z całej Polski, wchodzą, robią zdjęcie, patrzą na dachy i na okoliczne wzgórza — i jadą dalej. Widok jest prawdziwy. I zupełnie nic nie mówi o tym, jak się tu mieszka: gdzie się robi zakupy, którędy dziecko chodzi do szkoły, jak wąska jest brama wjazdowa i co się dzieje w kuchni o siedemnastej.",
        "Piszę o tym, bo z Thermomixem jest dokładnie tak samo. Prawie wszyscy znają go „z góry”: z filmiku, z reklamy, z opowieści koleżanki, z komentarza pod postem. To też jest prawdziwe — i też nic nie mówi o tym, czy sprawdzi się w Waszej kuchni.",
        "Z filmiku nie da się dowiedzieć, ile miejsca urządzenie naprawdę zajmie na Waszym blacie. Ani jak głośno brzmi w Waszym mieszkaniu. Ani czy da się w nim ugotować to, co u Was faktycznie się jada — bo w reklamach gotuje się dania, których większość z nas nie robi nigdy. Ani ile trwa mycie, kiedy się śpieszy.",
        "Dlatego prezentacja odbywa się u Was, a nie w salonie i nie na ekranie. Nie dlatego, że to ładny gest — dlatego, że tylko wtedy sprawdzacie to, o co naprawdę chodzi. Gotujemy Wasze danie, na Waszym blacie, w Waszym oświetleniu, a Wy stoicie obok i sami próbujecie. Zejście z góry na dół kosztuje godzinę i nic więcej.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja krok po kroku" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chęcinach?",
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
    sekcjaCena("w Chęcinach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla chęcińskiej rodziny",
      paragraphs: [
        "W wielu tutejszych domach ktoś pracuje w Kielcach, więc dzień kończy się po dojeździe, a obiad powstaje później, niż by chciała osoba, która go robi.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Chęciny",
    "Podzamcze",
    "Starochęciny",
    "Korzecko",
    "Bolmin",
    "Radkowice",
    "Siedlce",
    "Wolica",
    "Tokarnia",
    "Zelejowa",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Kielce, Morawica, Małogoszcz, Jędrzejów i Daleszyce są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kielce", "Morawica", "Małogoszcz", "Jędrzejów", "Daleszyce", "Pińczów"],

  about: blokOMnie("do Chęcin", "w gminie Chęciny i okolicy Kielc", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chęcin bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Chęcinach"),
    {
      question: "Widziałam już filmiki — po co mi prezentacja?",
      answer:
        "Żeby sprawdzić rzeczy, których na filmiku nie ma: ile miejsca zajmie na Twoim blacie, jak brzmi w Twoim mieszkaniu, ile trwa mycie i czy da się w nim ugotować to, co naprawdę jadacie. Godzina u Ciebie w kuchni odpowiada na to lepiej niż dziesięć nagrań.",
    },
    {
      question: "Czy mogę ugotować na prezentacji swoje danie, a nie Twoje?",
      answer:
        "Bardzo proszę i wolę tak. Powiedz przy umawianiu, co u Was robi się najczęściej, a przywiozę składniki właśnie na to. Wtedy naprawdę widać, czy urządzenie pasuje do Waszej kuchni.",
    },
  ],

  geo: { lat: 50.8, lng: 20.4667 },
};
