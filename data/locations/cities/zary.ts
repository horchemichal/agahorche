import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * ŻARY — jedno ze starszych miast regionu, z zespołem zamkowo-pałacowym
 * dobudowywanym i przebudowywanym przez stulecia. Nigdy nie powstało
 * naraz i w żadnym momencie nie było skończone.
 *
 * KĄT: „nie umiem gotować". Osoba, która nigdy się tego nie nauczyła —
 * nie przestała, tylko nie zaczęła — i boi się, że wyda duże pieniądze
 * na sprzęt, którego nie będzie umiała użyć.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — urządzenie zdejmuje TECHNIKĘ (mieszanie, pilnowanie, temperatura),
 *   a nie zdejmuje smaku: doprawianie i ocena „czy to dobre” zostają
 *   po stronie człowieka i tego trzeba się nauczyć samemu,
 * — przepis prowadzony krok po kroku sprawia, że pierwsze dania wychodzą
 *   nawet bez żadnego doświadczenia — i to jest uczciwa przewaga,
 * — nikt nie zaczyna kompletny; umiejętność dobudowuje się kawałkami,
 * — czego to NIE zrobi: nie nauczy planowania i nie zrobi zakupów.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH OBIETNIC W STYLU „każdemu wyjdzie za pierwszym razem”.
 * — ŻADNYCH USTAWIEŃ ANI PARAMETRÓW z pamięci.
 * — Nie robić z braku umiejętności wstydu ani problemu do naprawienia.
 *
 * ROZGRANICZENIE. Nowa Sól mówi o POWROCIE po latach przerwy (ktoś umiał
 * i przestał), Toruń o błędach pierwszego tygodnia po zakupie. Tutaj
 * chodzi o osobę, która nigdy nie zaczęła.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Żary mają zespół zamkowo-pałacowy powstawały etapami przez stulecia.
 */
export const ZARY: CityContent = {
  slug: "zary",
  h1: "Thermomix Żary – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żary — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Żarach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żary — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żarach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żar z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Żary i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nikt nie zaczyna kompletny — i nie trzeba.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żarach – jak wygląda prezentacja?",
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
      id: "nie-umiem-gotowac",
      heading: "Zamek dobudowywany przez stulecia — i zdanie „ja nie umiem gotować”",
      paragraphs: [
        "Żarski zespół zamkowo-pałacowy nie powstał naraz: kolejne pokolenia dostawiały do niego skrzydła, przerabiały to, co zastały, i w żadnym momencie nie było tak, żeby całość była skończona. Wykorzystam to do zdania, które słyszę na prezentacjach bardzo często, zwykle wypowiadanego półgłosem: ja przecież w ogóle nie umiem gotować.",
        "Najpierw jedna rzecz: to nie jest wstyd ani problem do naprawienia. Nie każdy musiał się tego nauczyć i nie ma w tym żadnej wady charakteru. Piszę o tym, bo z tego zdania robi się czasem powód do rezygnacji z zakupu, a bywa też — co gorsza — pretekst do wciskania sprzętu jako lekarstwa na wszystko. Ani jedno, ani drugie nie jest uczciwe.",
        "Co urządzenie realnie zdejmuje: technikę. Nie musicie umieć zahartować, zagęścić, utrzeć ani utrzymać temperatury, bo to robi maszyna, i to lepiej niż początkująca osoba przy garnku. Przepis prowadzony krok po kroku pokazuje, co po kolei wrzucić, i pierwsze dania potrafią wyjść komuś, kto wcześniej robił wyłącznie jajecznicę. To jest prawdziwa przewaga i nie muszę jej podkoloryzowywać.",
        "Czego nie zdejmuje: smaku. Doprawianie i ocena, czy to jest dobre, zostają po Waszej stronie i tego uczy tylko powtarzanie. Urządzenie nie powie Wam, że zupa jest mdła. To jest ta część, której naprawdę trzeba się nauczyć samemu, i wolę powiedzieć o niej wprost, niż obiecywać, że wszystko wyjdzie samo.",
        "Nie zrobi też za Was planowania ani zakupów. Jeśli głównym kłopotem jest to, że o osiemnastej nie ma w domu z czego gotować, to sprzęt tego nie rozwiąże i lepiej wiedzieć o tym przed wydaniem pieniędzy.",
        "I to, co dla mnie najważniejsze: nikt nie zaczyna kompletny. Umiejętność dobudowuje się kawałkami, jedno danie po drugim, dokładnie tak jak ten zamek — skrzydło po skrzydle, bez momentu, w którym wszystko jest już gotowe. Jeśli jesteście na samym początku, powiedzcie mi to przy umawianiu. Zrobimy coś prostego i pokażę uczciwie, gdzie kończy się pomoc urządzenia, a zaczyna Wasza własna robota.",
      ],
      links: [{ href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żarach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli dopiero zaczynasz, powiedz o tym od razu — dobiorę dania proste i pokażę, co da się zrobić bez żadnego doświadczenia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żarach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla żarskiej rodziny",
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

  districtsHeading: "Do których części Żar dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Kunice",
    "Zatorze",
    "Osiedle Muzyków",
    "Osiedle Wysockiego",
    "Kadłubia",
    "Grabik",
  ],

  nearbyHeading: "Poza Żary też przyjadę",
  nearbyParagraphs: [
    "Żagań, Lubsko, Jasień i Łęknica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żagań", "Lubsko", "Jasień", "Łęknica", "Zielona Góra", "Nowa Sól"],

  about: blokOMnie("do Żar", "w Żarach i okolicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żar bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Żarach"),
    {
      question: "W ogóle nie umiem gotować. Czy to nie będą zmarnowane pieniądze?",
      answer:
        "Urządzenie zdejmuje technikę — mieszanie, pilnowanie, temperaturę — a przepis prowadzony krok po kroku pokazuje, co po kolei wrzucić, więc pierwsze dania wychodzą nawet bez doświadczenia. Nie zdejmuje za to smaku: doprawianie i ocena, czy to dobre, zostają po Waszej stronie i tego uczy tylko powtarzanie.",
    },
    {
      question: "Czy nauczy mnie gotować?",
      answer:
        "Częściowo. Nauczy kolejności i tego, że danie może wyjść — ale nie nauczy planowania ani nie zrobi zakupów. Jeśli głównym kłopotem jest to, że o osiemnastej nie ma w domu z czego gotować, sam sprzęt tego nie rozwiąże.",
    },
  ],

  geo: { lat: 51.6419, lng: 15.1406 },
};
