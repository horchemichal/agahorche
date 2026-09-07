import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * EŁK — miasto nad Jeziorem Ełckim, z promenadą biegnącą brzegiem
 * i z zabytkową koleją wąskotorową. Życie toczy się tu na widoku.
 *
 * KĄT: kuchnia otwarta na salon. Coraz więcej mieszkań i domów ma kuchnię
 * połączoną z pokojem — i to zmienia sposób, w jaki należy myśleć o takim
 * sprzęcie, bo przestaje być wyłącznie narzędziem, a zaczyna być też
 * meblem. Nikt o tym nie pisze.
 *
 * SEKCJA MA POWIEDZIEĆ TRZY RZECZY:
 * — urządzenie stoi na widoku i widać je z kanapy; jeśli komuś przeszkadza,
 *   schowa je, a schowane przestaje być używane,
 * — w kuchni otwartej pojawia się realna PRZEWAGA: danie gotuje się samo,
 *   więc można wrócić do stołu i do gości, zamiast stać samemu w kuchni,
 * — i rzecz techniczna: w kuchniach otwartych gniazdka bywają w wyspie,
 *   więc warto to sprawdzić PRZED, a nie po.
 *
 * TWARDE GRANICE:
 * — HAŁAS TYLKO W JEDNYM ZDANIU. Głośność jest kątem Pruszkowa i nie wolno
 *   go tu przejmować.
 * — ŻADNYCH WYMIARÓW w centymetrach — nie podaję liczb, których nie jestem
 *   pewna.
 * — ŻADNYCH PORAD ELEKTRYCZNYCH poza „sprawdźcie, gdzie jest gniazdko"
 *   (zasada ze Świnoujścia: nie jestem elektrykiem).
 *
 * ROZGRANICZENIE. Będzin — mała kuchnia i pytanie „gdzie to postawić".
 * Tarnowskie Góry — nowa kuchnia i co w niej postawić. Gdynia — ile rzeczy
 * przychodzi w zestawie i gdzie je trzymać. Tutaj chodzi o to, że kuchnia
 * jest WIDOCZNA z pokoju i że to zmienia zarówno wady, jak i zalety.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Ełk leży nad Jeziorem Ełckim, wzdłuż brzegu biegnie promenada.
 */
export const ELK: CityContent = {
  slug: "elk",
  h1: "Thermomix Ełk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ełk — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ełku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ełk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ełku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ełku z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Ełk i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Thermomix TM7 stojący na blacie w kuchni, obok przygotowane składniki",
    caption: "W kuchni otwartej na pokój ten sprzęt jest też meblem — i warto to wziąć pod uwagę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ełku – jak wygląda prezentacja?",
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
      id: "kuchnia-otwarta",
      heading: "Miasto z promenadą — i kuchnia, którą widać z kanapy",
      paragraphs: [
        "W Ełku sporo życia toczy się na widoku, wzdłuż brzegu jeziora. To dobry punkt wyjścia do rzeczy, o której przy tym zakupie nie mówi się wcale, a która dotyczy coraz większej liczby mieszkań: kuchni połączonej z pokojem. W takim układzie sprzęt kuchenny przestaje być tylko narzędziem i staje się też meblem — a to zmienia rachunek w obie strony.",
        "Zacznę od strony niewygodnej. To urządzenie nie jest małe i nie jest niewidoczne. Stoi na blacie, widać je z kanapy i ma kabel, który musi gdzieś iść. Jeśli komuś w domu będzie to przeszkadzać wizualnie, skończy się chowaniem do szafki — a sprzęt schowany przestaje być używany, i to zwykle w ciągu kilku tygodni. Lepiej rozstrzygnąć to przed zakupem, patrząc na własny blat, niż po.",
        "Dorzucę jedno zdanie, którego nie będę rozwijać, bo to temat na osobną rozmowę: przy rozdrabnianiu urządzenie jest głośne, a w otwartej przestrzeni słychać je w całym pokoju. Samo gotowanie jest ciche i to ono trwa najdłużej.",
        "Teraz strona, dla której warto było to wszystko napisać — bo w kuchni otwartej ten sprzęt ma przewagę, jakiej nie ma nigdzie indziej. Danie gotuje się bez pilnowania, więc można je wstawić i wrócić do stołu, do rozmowy, do gości. W zamkniętej kuchni oszczędność czasu jest abstrakcyjna; w otwartej widać ją natychmiast, bo różnica polega na tym, czy stoi się samemu przy garnku, podczas gdy reszta siedzi obok, czy siedzi się razem z nimi.",
        "I rzecz czysto techniczna, o której warto pomyśleć wcześniej: w kuchniach otwartych gniazdka bywają w wyspie albo w nietypowych miejscach, a przedłużacz ciągnący się przez przejście to zły pomysł niezależnie od sprzętu. Nie jestem elektrykiem i nie będę doradzać w tej sprawie nic ponad jedno: sprawdźcie, gdzie jest wolne gniazdko, zanim wybierzecie miejsce na blacie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ełku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ełku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ełckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności — a w kuchni otwartej na pokój znaczy to dosłownie tyle, że można być przy stole zamiast przy garnku.",
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

  districtsHeading: "Do których części Ełku dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Zatorze",
    "Jeziorna",
    "Konieczki",
    "Baranki",
    "Bogdanowicza",
    "Kajki",
    "Grunwaldzka",
    "Szyba",
    "Wschód",
  ],

  nearbyHeading: "Poza Ełk też przyjadę",
  nearbyParagraphs: [
    "Olecko, Grajewo, Pisz i Gołdap są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Olecko", "Grajewo", "Pisz", "Gołdap", "Giżycko", "Augustów"],

  about: blokOMnie("do Ełku", "w Ełku i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Ełku bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ełku"),
    {
      question: "Mam kuchnię otwartą na salon. Czy to problem?",
      answer:
        "Raczej przewaga. Danie gotuje się bez pilnowania, więc można je wstawić i wrócić do stołu zamiast stać samemu przy garnku, podczas gdy reszta siedzi obok. Warto tylko pamiętać, że urządzenie stoi na widoku i przy rozdrabnianiu jest głośne — samo gotowanie jest ciche.",
    },
    {
      question: "Gdzie najlepiej je postawić?",
      answer:
        "Na blacie, blisko wolnego gniazdka i tak, żeby dało się otworzyć pokrywę bez uderzania w wiszącą szafkę. W kuchniach otwartych gniazdka bywają w wyspie — warto to sprawdzić przed zakupem. Sprzęt chowany do szafki przestaje być używany zwykle w ciągu kilku tygodni.",
    },
  ],

  geo: { lat: 53.8281, lng: 22.3647 },
};
