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
 * ŻYRARDÓW — osada fabryczna zbudowana wokół zakładów lniarskich:
 * czerwona cegła, domy dla robotników, szkoła, kościół, wszystko
 * zaplanowane wokół jednego wielkiego przedsięwzięcia. Miasto, które
 * przez sto lat niosła jedna idea, a potem musiało nauczyć się żyć
 * bez niej.
 *
 * KĄT: „a czy mi się to nie znudzi?”. Zapał pierwszego miesiąca
 * i to, co zostaje po nim. Pytanie, którego żaden sprzedawca nie
 * podnosi sam z siebie, bo odpowiedź jest mniej efektowna niż zdjęcia
 * z prezentacji.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — tak, zapał opadnie, i to jest normalne, a nie oznaka pomyłki,
 * — po zapale zostaje wąski repertuar kilku dań robionych w kółko
 *   i to jest właśnie prawdziwa wartość, a nie tysiące przepisów,
 * — dlatego pytanie brzmi nie „ile rzeczy zrobię”, tylko „czy te kilka
 *   rzeczy, które będę robić co tydzień, są warte tych pieniędzy”,
 * — Aga mówi o sobie: sama gotuje wąsko i powtarzalnie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH LICZB O UŻYWANIU: ile procent osób używa, jak często,
 *   po ilu miesiącach. Nie mam takich danych i nie wolno mi ich zmyślać.
 * — ŻADNYCH OBIETNIC O TRWAŁOŚCI, latach pracy, gwarancji ani wartości
 *   odsprzedaży.
 *
 * ROZGRANICZENIE. Starogard Gdański mówi o szafce z nieużywanym
 * sprzętem (czy w ogóle wyląduje w szafce), Otwock o estetyce,
 * Jarocin o chwytach sprzedażowych. Tutaj chodzi o STAN USTALONY
 * po opadnięciu pierwszego zapału.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Żyrardów powstał jako osada fabryczna wokół zakładów lniarskich,
 *   z charakterystyczną zabudową z czerwonej cegły.
 */
export const ZYRARDOW: CityContent = {
  slug: "zyrardow",
  h1: "Thermomix Żyrardów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żyrardów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Żyrardowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żyrardów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żyrardowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żyrardowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Żyrardów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najważniejsze jest to, co zostanie po pierwszym miesiącu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żyrardowie – jak wygląda prezentacja?",
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
      id: "czy-mi-sie-nie-znudzi",
      heading: "Miasto zbudowane wokół jednego zapału — i pytanie, co zostaje po miesiącu",
      paragraphs: [
        "Żyrardów wyrósł jako osada fabryczna: czerwona cegła, domy dla robotników, szkoła, kościół — wszystko zaplanowane naraz wokół jednego wielkiego przedsięwzięcia. Przez dziesięciolecia niosło to całe miasto, a potem trzeba było nauczyć się żyć dalej, już bez tego rozpędu. Wykorzystam to do pytania, którego sprzedawcy nie zadają sami z siebie, bo odpowiedź jest mniej efektowna niż zdjęcia z prezentacji: a czy mi się to nie znudzi?",
        "Odpowiem od razu i bez owijania: tak, zapał opadnie. Przez pierwsze tygodnie robi się rzeczy, których się normalnie nie robi, przegląda przepisy wieczorami i próbuje wszystkiego po kolei. Potem to mija. Mija u wszystkich i nie jest oznaką pomyłki, tylko zwykłej kolei rzeczy — dokładnie tak samo jak z każdą nową rzeczą w domu.",
        "Ważne jest to, co zostaje potem, bo to jest prawdziwy zakup. A zostaje zwykle kilka dań robionych w kółko: zupa, jedno drugie danie, coś do chleba, ciasto na urodziny. Wąski, powtarzalny zestaw. Brzmi to skromnie, ale właśnie ten zestaw decyduje, czy pieniądze były sensownie wydane, bo to on wraca co tydzień przez lata.",
        "Dlatego namawiam do przestawienia pytania. Nie „ile różnych rzeczy dam radę na tym zrobić”, tylko „czy te trzy albo cztery rzeczy, które naprawdę będę robić co tydzień, są dla mnie warte tej kwoty”. To jest pytanie, na które da się uczciwie odpowiedzieć jeszcze przed zakupem, i chętnie policzę to z Wami na spotkaniu — nie na moich przykładach, tylko na Waszym normalnym tygodniu.",
        "Powiem też o sobie, żeby to nie brzmiało jak teoria. Ja też gotuję wąsko i powtarzalnie. Mam swoje kilka rzeczy, które robię bez zaglądania nigdzie, i to one się liczą, a nie długość listy przepisów. Ktoś, kto obiecuje, że będziecie codziennie gotować coś nowego przez najbliższe lata, po prostu Was okłamuje.",
        "I to, czego nie powiem: ile osób używa tego regularnie, po ilu miesiącach zapał opada u statystycznej klientki ani ile lat urządzenie pracuje. Nie mam takich danych, a wymyślanie liczb, które ładnie brzmią, jest dokładnie tym, czego przy takim wydatku nie chcę robić.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żyrardowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przy umawianiu powiedz, co gotujesz w zwykły tydzień — na spotkaniu policzymy to na Waszym repertuarze, a nie na moim.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żyrardowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla żyrardowskiej rodziny",
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

  districtsHeading: "Do których części Żyrardowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Osada Fabryczna",
    "Teklinów",
    "Piaski",
    "Nowe Miasto",
    "Osiedle Wschód",
    "Kanciasta",
    "Sokule",
  ],

  nearbyHeading: "Poza Żyrardów też przyjadę",
  nearbyParagraphs: [
    "Mszczonów, Grodzisk Mazowiecki, Sochaczew i Puszcza Mariańska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mszczonów", "Grodzisk Mazowiecki", "Sochaczew", "Milanówek", "Warszawa", "Skierniewice"],

  about: blokOMnie("do Żyrardowa", "w Żyrardowie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żyrardowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Żyrardowie"),
    {
      question: "Boję się, że po miesiącu przestanę tego używać.",
      answer:
        "Zapał opadnie i to jest normalne — mija u wszystkich. Zostaje zwykle wąski zestaw kilku dań robionych w kółko i to on decyduje, czy zakup miał sens. Dlatego warto pytać nie „ile rzeczy zrobię”, tylko „czy te trzy albo cztery, które będę robić co tydzień, są warte tej kwoty”. Policzymy to na spotkaniu na Waszym zwykłym tygodniu.",
    },
    {
      question: "Ile osób naprawdę używa tego regularnie?",
      answer:
        "Nie odpowiem, bo nie mam takich danych, a podanie liczby, która ładnie brzmi, byłoby zwykłym zmyślaniem. Mogę powiedzieć tylko o sobie: gotuję wąsko i powtarzalnie, i to właśnie te kilka rzeczy się liczy, a nie długość listy przepisów.",
    },
  ],

  geo: { lat: 52.0489, lng: 20.4463 },
};
