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
 * NOWY DWÓR MAZOWIECKI — miasto u ujścia Narwi do Wisły, z Twierdzą
 * Modlin. Fortyfikacja jest zbiorem osobnych elementów, które działały
 * tylko razem — i którą ogląda się, sprawdzając kolejno każdy z nich.
 *
 * KĄT: danie nie wyszło i nie wiadomo dlaczego. Co sprawdzić po kolei,
 * zanim uzna się, że sprzęt jest do niczego albo że „ja się do tego
 * nie nadaję".
 *
 * SEKCJA MA PODAĆ KOLEJNOŚĆ SPRAWDZANIA — BEZ ŻADNYCH PARAMETRÓW:
 * — czy przepis był z materiałów urządzenia, czy przepisany skądinąd
 *   i tłumaczony samodzielnie (to najczęstsza przyczyna),
 * — czy ilości się zgadzały: czy nie było za mało albo za dużo
 *   w stosunku do przepisu,
 * — czy kolejność i moment dodawania składników były zachowane,
 * — czy składnik nie był inny niż w przepisie (zamiennik),
 * — a jeśli to wszystko się zgadza — to jest pytanie do materiałów
 *   urządzenia albo do mnie, a nie do zgadywania.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR, PRĘDKOŚCI ANI CZASÓW.
 * — ŻADNYCH DIAGNOZ TECHNICZNYCH („to pewnie uszczelka", „to pewnie
 *   czujnik"). Nie jestem serwisem i nie zgaduję awarii.
 * — ŻADNEGO SUGEROWANIA, ŻE TO WINA UŻYTKOWNICZKI.
 *
 * ROZGRANICZENIE. Toruń mówi o typowych błędach pierwszego tygodnia
 * (czego się spodziewać), Wołomin o tłumaczeniu własnych przepisów,
 * Kwidzyn o zamiennikach. Tutaj chodzi o KOLEJNOŚĆ SPRAWDZANIA,
 * gdy konkretne danie nie wyszło.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Nowy Dwór Mazowiecki leży u ujścia Narwi do Wisły, a na jego
 *   terenie znajduje się Twierdza Modlin.
 */
export const NOWY_DWOR_MAZOWIECKI: CityContent = {
  slug: "nowy-dwor-mazowiecki",
  h1: "Thermomix Nowy Dwór Mazowiecki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowy Dwór Mazowiecki — prezentacja",
  seoDescription:
    "Thermomix w Nowym Dworze Mazowieckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowy Dwór Mazowiecki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowym Dworze Mazowieckim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowego Dworu Mazowieckiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Nowy Dwór Mazowiecki i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gdy danie nie wyszło, sprawdza się po kolei — a nie zgaduje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Dworze Mazowieckim – jak wygląda prezentacja?",
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
      id: "danie-nie-wyszlo",
      heading: "Miasto twierdzy — i co sprawdzić, gdy danie nie wyszło",
      paragraphs: [
        "Twierdza Modlin jest zbiorem osobnych elementów, które działały tylko wtedy, gdy każdy z nich robił swoje. Ogląda się ją zresztą tak samo: idąc po kolei i sprawdzając jedno po drugim. Wykorzystam ten porządek do sytuacji, która przytrafia się każdemu i o której nikt nie mówi przed zakupem: danie nie wyszło i nie wiadomo dlaczego.",
        "Najpierw rzecz najważniejsza: to nie znaczy, że sprzęt jest do niczego, i nie znaczy, że Wy się do tego nie nadajecie. Zdarza się to wszystkim, także po latach, a wyciąganie wtedy wniosków o sobie jest najgorszym możliwym odruchem. Zamiast tego warto po prostu sprawdzić kilka rzeczy w ustalonej kolejności.",
        "Pierwsze i najczęstsze: skąd był przepis. Jeżeli pochodził z materiałów urządzenia i był prowadzony krok po kroku, to jedno. Jeżeli przepisaliście go skądinąd i sami przełożyli na kolejność czynności, to zupełnie co innego — i wtedy przyczyna prawie zawsze leży właśnie tam, w tłumaczeniu, a nie w sprzęcie.",
        "Drugie: ilości. Czy zgadzały się z przepisem, czy zostały „na oko” zmniejszone albo zwiększone. Przy niektórych daniach zmiana ilości zmienia wszystko, i to jest zwykła właściwość gotowania, a nie kaprys urządzenia. Trzecie: kolejność i moment dodawania składników — to, co u garnka wybacza się bez trudu, tutaj potrafi zdecydować o wyniku.",
        "Czwarte: czy któryś składnik był inny niż w przepisie. Zamiana bywa niewinna, a bywa właśnie tą jedną rzeczą, która wszystko rozstrzygnęła — zwłaszcza gdy dotyczy czegoś, co odpowiadało za gęstość albo za związanie całości.",
        "A jeśli te cztery rzeczy się zgadzają i danie nadal nie wychodzi, to jest pytanie do materiałów urządzenia albo do mnie — a nie do dalszego zgadywania. Nie postawię Wam diagnozy technicznej przez telefon i nie będę wróżyć, co się zepsuło: nie jestem serwisem. Zadzwońcie, przejdziemy to razem po kolei i sprawdzę to, czego nie wiem, zamiast zgadywać.",
      ],
      links: [{ href: "/kontakt", label: "Kontakt" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Dworze Mazowieckim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie danie, które nigdy Wam nie wychodzi, weźmy je na spotkanie — sprawdzimy przy urządzeniu, gdzie jest problem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Dworze Mazowieckim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nowodworskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Warszawy.",
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

  districtsHeading: "Do których części Nowego Dworu Mazowieckiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Modlin Twierdza",
    "Modlin Stary",
    "Osiedle Młodych",
    "Nowy Dwór",
    "Okunin",
    "Osiedle Piaski",
    "Bielany",
  ],

  nearbyHeading: "Poza Nowy Dwór Mazowiecki też przyjadę",
  nearbyParagraphs: [
    "Legionowo, Zakroczym, Pomiechówek i Płońsk są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Legionowo", "Zakroczym", "Pomiechówek", "Płońsk", "Łomianki", "Warszawa"],

  about: blokOMnie("do Nowego Dworu Mazowieckiego", "w Nowym Dworze Mazowieckim i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowego Dworu Mazowieckiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nowym Dworze Mazowieckim"),
    {
      question: "Danie mi nie wyszło. Co sprawdzić?",
      answer:
        "Po kolei cztery rzeczy: skąd był przepis (najczęstsza przyczyna to przepis przełożony samodzielnie skądinąd), czy ilości zgadzały się z przepisem, czy zachowana była kolejność i moment dodawania składników, i czy któryś składnik nie był zamieniony na inny. To nie znaczy, że sprzęt jest zły ani że Wy się nie nadajecie — zdarza się wszystkim.",
    },
    {
      question: "A jeśli wszystko się zgadza, a danie nadal nie wychodzi?",
      answer:
        "Wtedy to pytanie do materiałów urządzenia albo do mnie, a nie do dalszego zgadywania. Nie postawię diagnozy technicznej przez telefon — nie jestem serwisem. Zadzwońcie, przejdziemy to razem i sprawdzę to, czego nie wiem.",
    },
  ],

  geo: { lat: 52.4364, lng: 20.7156 },
};
