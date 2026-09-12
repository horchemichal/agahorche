import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * BRUSY — miasto w powiecie chojnickim, na Kaszubach, 5 053
 * mieszkańców (31.12.2024, GUS); gmina 14 245. Brief mówił
 * 5 000 — trafiony.
 *
 * PRAWA MIEJSKIE 1 STYCZNIA 1988 r. — jedno z najmłodszych
 * miast Pomorza. OBALONE: Brusy NIE są starym kaszubskim
 * miasteczkiem, mimo że tak brzmią.
 *
 * OBALONE, WAŻNE: Brusy NIE WYLUDNIAJĄ SIĘ. Miasto UROSŁO
 * O 11,0% w latach 2002–2024 — wyjątek na tle całego regionu.
 * Ma też najmłodszą strukturę wieku z okolicznych miast:
 * 20,3% mieszkańców w wieku 0–14 lat, mediana 38,1 roku.
 *
 * OBALONE: Brusy NIE LEŻĄ NAD WDZYDZAMI. W wykazie 23 obrębów
 * ewidencyjnych i 77 miejscowości gminy nie ma żadnych Wdzydz.
 *
 * FAKT OSIOWY: gmina jest ogromna i bardzo rozproszona —
 * 400,5 km², 77 MIEJSCOWOŚCI, 36 osób na km². 51% powierzchni
 * powiatu chojnickiego to lasy.
 *
 * KĄT: SPIŻARNIA — gotowanie z tego, co już jest w domu,
 * gdy do sklepu jest daleko. Kąt bierze się wprost z geografii:
 * 77 miejscowości rozsypanych po czterystu kilometrach
 * kwadratowych.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w rozproszonej gminie problemem nie jest brak czasu,
 *   tylko brak SKŁADNIKA — i że to zupełnie inny problem,
 * — że urządzenie tego problemu NIE ROZWIĄZUJE i nie zrobi
 *   obiadu z niczego,
 * — że rozwiązuje go natomiast pośrednio: obniża próg
 *   przetworzenia tego, co jest — z mąki chleb, z resztek
 *   warzyw zupa, z twarogu obiad, z jabłek mus,
 * — że wtedy zapas w spiżarni faktycznie staje się jedzeniem,
 *   a nie tylko leży,
 * — że najbardziej opłaca się tu gotowanie „na dwa razy",
 * — i ODMOWA: nie doradzam nic o przechowywaniu zapasów,
 *   terminach przydatności ani o tym, co jeszcze nadaje się
 *   do zjedzenia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU ŻYWNOŚCI, TERMINACH
 *   PRZYDATNOŚCI, OCENIE „czy to jeszcze dobre". ODMOWA
 *   STOI W TEKŚCIE.
 * — ŻADNYCH PORAD O PRZETWORACH I PASTERYZACJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PISZĘ O TRUSKAWCE KASZUBSKIEJ. Nie potwierdziłam,
 *   czy ChOG obejmuje gminę Brusy, a kąt truskawkowy jest
 *   i tak zajęty przez inne miasto.
 * — NIE OPOWIADAM KASZUBOM O KASZUBACH.
 * — NIE ROBIĘ TŁA z bezrobocia kobiet (13,8%) ani z niższych
 *   wynagrodzeń.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Planowanie tygodnia"
 * (miasto rozkładów jazdy) dotyczy HARMONOGRAMU i układania
 * dni. „Gotowanie na zapas i odkładanie porcji do zamrażarki"
 * (Stopnica) dotyczy zamrażarki jako magazynu. „Czerstwy chleb"
 * (Bodzentyn) dotyczy marnowania jednego produktu. Tutaj chodzi
 * o SYTUACJĘ, GDY CZEGOŚ PO PROSTU NIE MA W DOMU, a do sklepu
 * jest dwadzieścia kilometrów — i o zamiany.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Brusy to stare miasto. Prawa miejskie 1988 r.
 * — NIE PISZĘ, że Brusy leżą nad Wdzydzami.
 * — NIE PISZĘ, że Brusy się wyludniają. Rosną.
 * — NIE PODAJĘ nazwy żadnego pracodawcy — nie ustaliłam.
 * — NIE PISZĘ o Zaborskim Parku Krajobrazowym, o „stolicy
 *   Zaborów" ani o Chacie Kaszubskiej — nic z tego nie zostało
 *   potwierdzone.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 * — NIE PODAJĘ listy sołectw — mam wykaz obrębów, a to nie
 *   to samo. Nazwy miejscowości podaję jako miejscowości.
 * — districts: PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 5 053 mieszkańców miasta, 14 245 gminy (31.12.2024, GUS),
 * — prawa miejskie 1 stycznia 1988 r.,
 * — miasto urosło o 11,0% w latach 2002–2024,
 * — gmina 400,5 km², 77 miejscowości, 36 os./km²,
 * — 20,3% mieszkańców w wieku 0–14 lat, mediana wieku 38,1,
 * — 51% powierzchni powiatu chojnickiego to lasy,
 * — miejscowości gminy m.in.: Czyczkowy, Kosobudy, Leśno,
 *   Lubnia, Męcikał, Przymuszewo, Wielkie i Małe Chełmy,
 *   Rolbik, Widno, Zalesie.
 */
export const BRUSY: CityContent = {
  slug: "brusy",
  h1: "Thermomix Brusy – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Brusy (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Brusach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brusy — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brusach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Brus z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości gminy.",

  highlights: highlightyStandardowe("Brusy i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Obiadu z niczego nie zrobi. Z tego, co macie — owszem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brusach – jak wygląda prezentacja?",
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
      id: "spizarnia",
      heading: "Siedemdziesiąt siedem miejscowości na czterystu kilometrach — czyli o spiżarni",
      paragraphs: [
        "Gmina Brusy ma czterysta kilometrów kwadratowych i siedemdziesiąt siedem miejscowości. Trzydzieści sześć osób na kilometr kwadratowy. Samo miasto jest młode — prawa miejskie dostało dopiero 1 stycznia 1988 roku — i, co w tej okolicy rzadkie, rośnie: od 2002 roku przybyło mu jedenaście procent mieszkańców, a jedna piąta z nich to dzieci do czternastego roku życia. Czyczkowy, Kosobudy, Leśno, Lubnia, Męcikał, Przymuszewo, Rolbik.",
        "W takiej gminie kuchenny problem wygląda inaczej niż w mieście. W mieście brakuje czasu. Tutaj często brakuje po prostu składnika — i sklep jest dwadzieścia minut drogi, a wieczorem już zamknięty.",
        "Powiem wprost: tego problemu urządzenie nie rozwiązuje. Obiadu z niczego nie zrobi i żaden sprzęt nie zrobi. Jeżeli ktoś sprzedaje Wam Thermomix hasłem, że „zawsze coś z tego wyjdzie” — to jest slogan, nie odpowiedź.",
        "Rozwiązuje go natomiast pośrednio i to jest realne. Obniża próg przy rzeczach, które w spiżarni już leżą, ale których zwykle się nie robi, bo szkoda zachodu.",
        "Mąka. Chleb i bułki własne to zwykle nie kwestia umiejętności, tylko wyrabiania — a wyrabianie tu odpada. Nagle worek mąki naprawdę jest jedzeniem, a nie tylko workiem mąki. Podobnie makaron.",
        "Warzywa z końca skrzynki — trzy marchewki, pół selera, cebula, ziemniak. To jest zupa krem, i to porządna, a nie awaryjna. Twaróg, jajko i mąka to leniwe albo kopytka. Jabłka z ogrodu to mus i nadzienie. Kasza i to, co zostało z niedzieli, to danie jednogarnkowe.",
        "Druga rzecz, bardzo prozaiczna: gdy jazda do sklepu kosztuje pół godziny, opłaca się gotować na dwa razy. Nie „na zapas” w sensie mrożenia — po prostu podwójna porcja tego, co i tak robicie. Wtedy dzień, w którym czegoś zabrakło, po prostu nie boli.",
        "Czego nie zrobię: nie doradzę Wam nic o przechowywaniu zapasów, o terminach przydatności ani o tym, czy coś jeszcze nadaje się do zjedzenia. To jest bezpieczeństwo żywności i nie mam do tego kompetencji, choćby pytanie było najprostsze.",
        "I jedno zdanie, bo jesteśmy na Kaszubach: nie będę Wam opowiadać, co się tu gotuje i jak. Wy wiecie lepiej ode mnie. Ja przyjeżdżam z urządzeniem i pytam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brusach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Do wszystkich siedemdziesięciu siedmiu miejscowości gminy dojazd jest tak samo bezpłatny jak do samego miasta — odległość nie ma tu znaczenia i nie zmienia ceny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brusach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bruskiej rodziny",
      paragraphs: [
        "Brusy liczą nieco ponad pięć tysięcy mieszkańców, a cała gmina ponad czternaście — rozsypanych po siedemdziesięciu siedmiu miejscowościach i czterystu kilometrach kwadratowych, z czego duża część to lasy. Miasto jest młode w dwóch znaczeniach: prawa miejskie otrzymało 1 stycznia 1988 roku, a jedna piąta jego mieszkańców to dzieci poniżej piętnastego roku życia, przy medianie wieku trzydziestu ośmiu lat. I jeszcze jedno, co w tej części Pomorza rzadkie: Brusy nie tracą ludzi, tylko od 2002 roku urosły o jedenaście procent.",
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

  districtsHeading: "Do których części gminy Brusy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy — Czyczkowów, Kosobud, Leśna, Lubni, Męcikału, Przymuszewa, Wielkich i Małych Chełmów, Rolbika, Widna, Zalesia i pozostałych. Dojazd jest wszędzie bezpłatny, także do tych najdalszych.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Brusy też przyjadę",
  nearbyParagraphs: [
    "Chojnice, Czersk, Kościerzyna, Bytów, Czarna Woda i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chojnice", "Czersk", "Kościerzyna", "Bytów", "Czarna Woda"],

  about: blokOMnie("do Brus", "w Brusach i całej gminie", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich miejscowości gminy Brusy?",
      answer:
        "Tak, do wszystkich siedemdziesięciu siedmiu — od miasta po Przymuszewo i Rolbik. Dojazd jest bezpłatny niezależnie od odległości i nie zmienia ceny urządzenia.",
    },
    ...faqWspolne("w Brusach"),
    {
      question: "Do sklepu mam daleko. Czy to urządzenie w tym pomoże?",
      answer:
        "Nie w tym sensie, w jakim sprzedaje się to w reklamach — obiadu z niczego nie zrobi. Pomaga inaczej: obniża próg przy rzeczach, które w domu już leżą. Chleb z mąki, zupa krem z końcówek warzyw, kopytka z twarogu, mus z jabłek. Wtedy zapas w spiżarni faktycznie staje się jedzeniem.",
    },
    {
      question: "Co się tu najbardziej opłaca?",
      answer:
        "Gotowanie na dwa razy. Nie w sensie mrożenia — po prostu podwójna porcja tego, co i tak robicie. Gdy jazda do sklepu kosztuje pół godziny, dzień, w którym czegoś zabrakło, przestaje boleć.",
    },
    {
      question: "Czy poradzisz, jak przechowywać zapasy?",
      answer:
        "Nie. Przechowywanie żywności, terminy przydatności i ocena, czy coś jeszcze nadaje się do zjedzenia, to bezpieczeństwo żywności — nie mam do tego kompetencji i nie będę udawać, że mam.",
    },
  ],

  geo: { lat: 53.8866, lng: 17.7193 },
};
