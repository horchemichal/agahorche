import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * RADOM — miasto, w którym odbywają się duże pokazy lotnicze: raz w roku
 * cała okolica patrzy w górę.
 *
 * KĄT: czy da się kupić BEZ prezentacji. Pytanie, które pada często,
 * a którego żaden sprzedawca nie stawia u siebie na stronie, bo odpowiedź
 * jest wbrew jego interesowi.
 *
 * ODPOWIEDŹ MA PAŚĆ W PIERWSZYM ZDANIU SEKCJI I MA BRZMIEĆ „TAK".
 * Wszystko inne jest dopiero po niej.
 *
 * SEKCJA MA WYMIENIĆ, CO SIĘ PRZEZ TO TRACI, ale bez straszenia: nikt
 * nie pokaże pierwszego dania, nikt nie sprawdzi blatu i szafki, pierwszy
 * tydzień jest trudniejszy w pojedynkę.
 *
 * MA TEŻ WYMIENIĆ, KOMU TO SIĘ REALNIE OPŁACA, i uznać te powody:
 * wymiana starszego sprzętu, gotowanie na cudzym przez lata, niechęć do
 * wpuszczania obcych do domu. Ta trzecia jest całkowicie w porządku i tak
 * ma zostać nazwana.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH WYMYŚLONYCH WARUNKÓW HANDLOWYCH. Nie twierdzę, że cena jest
 *   „taka sama" ani że spotkanie coś zmienia w cenie — nie wiem tego
 *   i nie wolno mi tego zgadywać. Mówię wyłącznie o SWOIM zachowaniu:
 *   promocję podaję tak samo przez telefon, jak na spotkaniu.
 * — ŻADNYCH OBIETNIC TERMINÓW DOSTAWY (to zasada z Koszalina).
 *
 * ROZGRANICZENIE. Warszawa pyta, PO CO jest spotkanie, i broni jego
 * sensu. Tutaj pytanie jest odwrotne: czy można je pominąć — i odpowiedź
 * brzmi, że można.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Radomiu odbywają się duże pokazy lotnicze.
 */
export const RADOM: CityContent = {
  slug: "radom",
  h1: "Thermomix Radom – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Radom — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Radomiu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radom — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Radomiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Radomia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — a jeśli wolisz załatwić wszystko przez telefon, też się da.",

  highlights: highlightyStandardowe("Radom i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — ale nie jest obowiązkowa.",
  },

  sections: [
    {
      id: "bez-prezentacji",
      heading: "Miasto pokazów — i pytanie, czy pokaz jest obowiązkowy",
      paragraphs: [
        "Raz w roku cały Radom patrzy w górę na pokazy lotnicze. Pokaz jest wtedy najważniejszy — ale decyzje o czymkolwiek zapadają zwykle gdzie indziej i spokojniej. Dlatego akurat tutaj odpowiem na pytanie, którego żaden sprzedawca nie stawia u siebie na stronie, bo odpowiedź jest wbrew jego interesowi: czy da się kupić bez prezentacji.",
        "Tak. Da się. Zadzwońcie albo napiszcie SMS — podam cenę, aktualną promocję i wysokość raty przy kilku okresach spłaty, a zamówienie i dostawę ogarniemy bez tego, żebym siedziała w Waszej kuchni. Nie będę Was do spotkania namawiać ani przekonywać, że „to tylko godzinka”. Promocję podaję tak samo przez telefon, jak przy stole.",
        "Powiem jednak uczciwie, co przez to tracicie, bo przemilczenie tego byłoby drugą stroną tej samej nieuczciwości. Nikt nie ugotuje z Wami pierwszego dania — a pierwsze danie zrobione razem z kimś jest zwykle łatwiejsze niż pierwsze danie zrobione z instrukcją. Nikt nie sprawdzi, czy urządzenie zmieści się na Waszym blacie i czy otworzy się pod wiszącą szafką. I pierwszy tydzień jest po prostu trudniejszy w pojedynkę.",
        "Jest za to grupa osób, u których pomijanie spotkania ma pełny sens, i nie mam zamiaru odwodzić ich od tego. Ci, którzy wymieniają starsze urządzenie i wiedzą dokładnie, co kupują. Ci, którzy przez lata gotowali na takim sprzęcie u siostry albo u koleżanki. I ci, którzy po prostu nie chcą wpuszczać obcej osoby do domu — to jest całkowicie w porządku, nie wymaga tłumaczenia się i nie robi z nikogo trudnego klienta.",
        "Jednej rzeczy natomiast nie tracicie niezależnie od tego, którą drogę wybierzecie: po zakupie odbieram telefon tak samo. Jeśli w środę wieczorem coś nie wychodzi, dzwoni się do tej samej osoby — bez różnicy, czy widzieliśmy się wcześniej przy stole, czy nie.",
        "O terminach dostawy nic tu nie obiecuję, bo zależą od rzeczy, na które nie mam wpływu, a obietnica, której nie kontroluję, jest gorsza niż jej brak. Powiem, jak wygląda sytuacja w dniu, w którym będziemy rozmawiać.",
      ],
      links: [{ href: "/kontakt", label: "Zadzwoń albo napisz — bez spotkania" }],
    },
    {
      id: "prezentacja",
      heading: "A jeśli jednak prezentacja — jak wygląda w Radomiu?",
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
      id: "jak-umowic",
      heading: "Jak się odezwać?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Napisz od razu, czy chcesz spotkanie, czy wolisz załatwić wszystko przez telefon — obie drogi są w porządku.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Radomiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla radomskiej rodziny",
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

  districtsHeading: "Do których dzielnic Radomia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Ustronie",
    "Gołębiów",
    "Michałów",
    "Planty",
    "Młodzianów",
    "Południe",
    "Zamłynie",
    "Idalin",
    "Borki",
    "Wośniki",
    "Prędocinek",
  ],

  nearbyHeading: "Poza Radom też przyjadę",
  nearbyParagraphs: [
    "Skaryszew, Pionki, Kozienice i Szydłowiec są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Skaryszew", "Pionki", "Kozienice", "Szydłowiec", "Zwoleń", "Warszawa"],

  about: blokOMnie("do Radomia", "w Radomiu i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy da się kupić bez prezentacji?",
      answer:
        "Tak. Zadzwoń albo napisz SMS — podam cenę, aktualną promocję i ratę przy kilku okresach spłaty, a zamówienie i dostawę ogarniemy bez spotkania. Nie namawiam i nie przekonuję, że „to tylko godzinka”.",
    },
    ...faqWspolne("w Radomiu"),
    {
      question: "Co tracę, rezygnując ze spotkania?",
      answer:
        "Nikt nie ugotuje z Tobą pierwszego dania, nikt nie sprawdzi, czy urządzenie zmieści się na blacie i otworzy pod szafką, a pierwszy tydzień jest trudniejszy w pojedynkę. Nie tracisz natomiast kontaktu po zakupie — telefon odbieram tak samo.",
    },
    {
      question: "Czy dojeżdżasz do Radomia bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
  ],

  geo: { lat: 51.4027, lng: 21.1471 },
};
