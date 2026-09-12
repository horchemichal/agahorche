import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * ZAWADZKIE — miasto w powiecie strzeleckim, 6 308 mieszkańców
 * (31.12.2024, GUS); cała gmina 10 369. Prawa miejskie 1962 r.
 * Miasto nosi nazwę od nazwiska FRANCISZKA VON ZAWADZKIEGO,
 * pierwszego dyrektora generalnego tutejszej huty założonej
 * w 1836 r. przez hrabiego Andrzeja Renarda. Ponad 60% powierzchni
 * gminy to lasy; nad Małą Panwią działają trzy stanice kajakowe.
 *
 * KĄT: grill i ognisko — czyli czego to urządzenie nie zrobi
 * na dworze i co przygotowuje, zanim się z domu wyjdzie.
 * Gmina, w której lasy zajmują ponad sześćdziesiąt procent
 * powierzchni, a nad rzeką stoją stanice kajakowe, jest
 * właściwym miejscem na stronę o gotowaniu, które kończy się
 * poza kuchnią.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to jest urządzenie domowe, wymaga gniazdka i nie jedzie
 *   z Wami nad wodę,
 * — że ognia, dymu i przypieczenia nie zastąpi nic,
 * — że robota, którą realnie zdejmuje, dzieje się DZIEŃ WCZEŚNIEJ:
 *   marynaty, sosy, pasty, surówki, ciasto na coś słodkiego,
 * — i uczciwie: to nie jest powód do zakupu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE OGNIA, rozpalaniu w lesie
 *   ani o tym, gdzie wolno rozpalać ognisko. To jest sprawa
 *   przepisów i nadleśnictwa, nie sprzedawczyni sprzętu.
 * — ŻADNYCH PORAD O STOPNIU WYSMAŻENIA MIĘSA ani o tym, jak długo
 *   marynata może stać. Bezpieczeństwo żywności — jedno zdanie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNEGO UŻYWANIA ZAMKNIĘCIA WALCOWNI JAKO TŁA. W połowie
 *   2024 r. zlikwidowano tutejszą walcownię rur i pracę straciło
 *   ponad czterysta osób; w 2026 r. zakład sprzedano pod
 *   wyburzenie. To jest prawda o tym mieście i nie zaprzeczam
 *   jej — ale przedstawicielka handlowa, która przy sprzedaży
 *   drogiego sprzętu przypomina ludziom o zwolnieniach, robi rzecz
 *   nieprzyzwoitą. W treści strony NIE MA o tym ani słowa.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Jedzenie zabrane w drogę"
 * (Daleszyce) dotyczy termosu i wycieczki. „Czy zabrać na wakacje"
 * dotyczy wożenia samego urządzenia. „Ciasto naleśnikowe
 * i patelnia" (Cieszanów) dotyczy smażenia w kuchni. Tutaj chodzi
 * o OGIEŃ NA DWORZE i o przygotowanie dnia poprzedniego.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w Zawadzkiem działa huta ani walcownia rur.
 *   NIE DZIAŁA.
 * — NIE PODAJĘ NAZW FIRM. Zakład rozjazdów kolejowych i spółka
 *   paliwowa mająca tu siedzibę są ustalone, ale ich nie reklamuję.
 * — NIE PODAJĘ dziennej daty praw miejskich. Podawana data
 *   7 lipca 1962 r. pochodzi wyłącznie z prasy; aktu prawnego
 *   nie ustalono. Piszę: 1962.
 * — NIE PISZĘ, że gmina ma dwujęzyczne tablice. NIE MA, choć
 *   działa tu koło mniejszości niemieckiej.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — NIE wymyślam osiedli. Brak wykazu; gmina to miasto plus
 *   sołectwa Kielcza i Żędowice. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1962 r.; huta założona w 1836 r. przez
 *   hr. Andrzeja Renarda; nazwa miasta od nazwiska pierwszego
 *   dyrektora generalnego, Franciszka von Zawadzkiego,
 * — ponad 60% powierzchni gminy to lasy; trzy stanice kajakowe
 *   nad Małą Panwią (Kielcza, Żędowice, Zawadzkie); ok. 60 km
 *   ścieżek rowerowych,
 * — Kielcza w tej gminie to prawdopodobne miejsce urodzenia
 *   Wincentego z Kielczy, autora hymnu „Gaude Mater Polonia",
 * — 6 308 mieszkańców (31.12.2024).
 */
export const ZAWADZKIE: CityContent = {
  slug: "zawadzkie",
  h1: "Thermomix Zawadzkie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zawadzkie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Zawadzkiem: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zawadzkie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zawadzkiem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zawadzkiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, Kielczy i Żędowic.",

  highlights: highlightyStandardowe("Zawadzkie i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nad wodę nie pojedzie. Ale dzień wcześniej się przyda.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zawadzkiem – jak wygląda prezentacja?",
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
      id: "grill",
      heading: "Gmina, która w dwóch trzecich jest lasem — czyli o gotowaniu, które kończy się poza kuchnią",
      paragraphs: [
        "Ponad sześćdziesiąt procent powierzchni gminy Zawadzkie to las, nad Małą Panwią stoją trzy stanice kajakowe, a przez okolicę biegnie około sześćdziesięciu kilometrów ścieżek rowerowych. W takim miejscu spora część jedzenia latem nie powstaje w kuchni, tylko nad wodą albo przy ognisku. Więc powiem od razu rzecz najprostszą i najuczciwszą.",
        "To urządzenie nie pojedzie z Wami nad rzekę. Jest domowe, waży swoje i potrzebuje gniazdka. Nie ma sensu udawać, że jest inaczej.",
        "I drugie zdanie, jeszcze ważniejsze: ognia nie zastąpi nic. Dym, przypieczona skórka, ten smak, którego nie da się opisać, a wszyscy go znają — to jest domena rusztu i węgla. Żadne urządzenie kuchenne tego nie robi i moje też nie. Kto próbuje sprzedawać sprzęt argumentem „grill niepotrzebny”, ten Was okłamuje.",
        "Robota, którą to urządzenie realnie zdejmuje, dzieje się dzień wcześniej — i akurat tej roboty jest przy grillu najwięcej.",
        "Marynaty i pasty: cebula, czosnek, zioła, olej, przyprawy — kilkanaście sekund zamiast siekania i tarcia. Sosy do mięsa: majonezowe, jogurtowe, pomidorowe, chrzanowe. Surówki i sałatki, których zawsze brakuje, bo nikomu się nie chce szatkować dla dziesięciu osób. Pasta do pieczywa. Coś słodkiego na koniec, zrobione rano i schłodzone.",
        "To wszystko powstaje w jednym naczyniu, po kolei, bez rozstawiania czterech misek na blacie — a przy grillu dla większej grupy właśnie te miski są problemem, nie samo mięso.",
        "Czego nie doradzę: jak długo marynata może stać ani jak sprawdzić, czy mięso jest dosmażone. To jest bezpieczeństwo żywności i nie moja działka. Nie będę też pisać, gdzie wolno rozpalać ogień w lesie — od tego są przepisy i nadleśnictwo.",
        "I skala, jak zawsze: samo grillowanie nie jest powodem, żeby kupić sprzęt tej klasy. Jest powodem, żeby nie spędzić całego sobotniego przedpołudnia przy desce do krojenia.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zawadzkiem?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was często jest grill, powiedzcie to przy umawianiu — zrobimy dwa sosy i surówkę, czyli dokładnie to, co przy ruszcie zabiera najwięcej czasu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zawadzkiem"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zawadzkiej rodziny",
      paragraphs: [
        "Zawadzkie liczy nieco ponad sześć tysięcy trzysta mieszkańców, a cała gmina — miasto plus Kielcza i Żędowice — ponad dziesięć tysięcy. Prawa miejskie miasto dostało w 1962 roku, ale jego historia zaczyna się od huty założonej w 1836 przez hrabiego Andrzeja Renarda. Nazwa jest nietypowa: pochodzi nie od „zawady”, tylko od nazwiska Franciszka von Zawadzkiego, pierwszego dyrektora generalnego zakładu. Warto też wiedzieć, że pobliska Kielcza uchodzi za prawdopodobne miejsce urodzenia Wincentego z Kielczy — autora hymnu „Gaude Mater Polonia”.",
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

  districtsHeading: "Do których części Zawadzkiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta oraz do Kielczy i Żędowic — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Zawadzkie też przyjadę",
  nearbyParagraphs: [
    "Strzelce Opolskie, Kolonowskie, Ozimek, Olesno, Opole i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Strzelce Opolskie", "Kolonowskie", "Ozimek", "Olesno", "Opole", "Kluczbork"],

  about: blokOMnie("do Zawadzkiego", "w Zawadzkiem i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zawadzkiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta oraz do Kielczy i Żędowic. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zawadzkiem"),
    {
      question: "Czy Thermomix zastąpi grilla?",
      answer:
        "Nie i nie będę tego obiecywać. Ognia, dymu i przypieczonej skórki nie zastąpi żadne urządzenie kuchenne. To sprzęt domowy, który potrzebuje gniazdka i nad wodę z Wami nie pojedzie.",
    },
    {
      question: "To w czym pomaga przy grillu?",
      answer:
        "W robocie z dnia poprzedniego, której przy ruszcie jest najwięcej: marynaty i pasty w kilkanaście sekund, sosy, surówki i sałatki dla większej grupy, coś słodkiego zrobione rano. Wszystko w jednym naczyniu, bez czterech misek na blacie.",
    },
    {
      question: "Doradzisz, jak długo marynować mięso?",
      answer:
        "Nie. To dziedzina bezpieczeństwa żywności, a nie sprzętu kuchennego — po tę wiedzę trzeba pójść do rzetelnego źródła. Nie będę też pisać, gdzie wolno rozpalać ognisko; od tego są przepisy i nadleśnictwo.",
    },
  ],

  geo: { lat: 50.6044, lng: 18.4851 },
};
