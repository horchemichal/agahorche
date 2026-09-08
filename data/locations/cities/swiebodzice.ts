import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * ŚWIEBODZICE — od 1847 roku miasto fabryki zegarów Gustava Beckera.
 * Zegary z tej fabryki są do dziś zbierane i naprawiane, choć sama
 * firma dawno nie istnieje.
 *
 * KĄT: o co zapytać o serwis PRZED zakupem. Konkretna lista pytań,
 * którą warto zadać każdemu sprzedawcy drogiego sprzętu — także mnie.
 *
 * SEKCJA MA PODAĆ PYTANIA, A NIE ODPOWIEDZI:
 * — gdzie fizycznie odbywa się naprawa i czy trzeba sprzęt gdzieś wieźć,
 * — co dokładnie obejmują dokumenty, które podpisuję,
 * — do kogo dzwonię, gdy coś się stanie: do sprzedawcy czy gdzie indziej,
 * — czy to jest zapisane, czy tylko powiedziane.
 * Aga NIE odpowiada na te pytania w tekście — pokazuje, o co pytać,
 * i mówi wprost, że sama sprawdza, zamiast odpowiadać z głowy.
 *
 * TWARDE GRANICE — TU NAJOSTRZEJSZE NA CAŁEJ STRONIE:
 * — ŻADNYCH KONKRETÓW O SERWISIE, GWARANCJI, TERMINACH, ZAKRESIE NAPRAW
 *   ANI PROCEDURACH. Nie znam ich na tyle pewnie, żeby pisać, a ktoś
 *   by na tym polegał. Sekcja ma uczyć, o co pytać, a nie udawać
 *   odpowiedzi.
 * — ŻADNYCH OBIETNIC O DOSTĘPNOŚCI CZĘŚCI ani o tym, jak długo sprzęt
 *   da się naprawiać.
 * — ŻADNYCH TWIERDZEŃ O TRWAŁOŚCI (zasada z Kobyłki i Żyrardowa).
 *
 * ROZGRANICZENIE. Mława mówi „a jak się zepsuje" od strony obawy,
 * Brzeg o kontakcie z Agą po zakupie, Sieradz o odstąpieniu od umowy.
 * Tutaj chodzi o LISTĘ PYTAŃ DO ZADANIA PRZED PODPISEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Gustav Becker założył w Świebodzicach fabrykę zegarów w 1847 r.,
 * — w 1885 r. wyprodukowano tam półmilionowy zegar,
 * — zegary Beckera są do dziś rozpoznawalne wśród kolekcjonerów,
 * — miasto ma zachowane w znacznej części średniowieczne mury obronne,
 * — dwie dzielnice: Pełcznica i Ciernie.
 */
export const SWIEBODZICE: CityContent = {
  slug: "swiebodzice",
  h1: "Thermomix Świebodzice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Świebodzice — prezentacja i cena",
  seoDescription:
    "Thermomix w Świebodzicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świebodzice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świebodzicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Świebodzic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Świebodzice i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pytania o serwis zadaje się przed podpisem, nie po.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świebodzicach – jak wygląda prezentacja?",
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
      id: "o-co-zapytac-o-serwis",
      heading: "Miasto zegarów Beckera — i o co zapytać, zanim podpiszecie",
      paragraphs: [
        "W Świebodzicach od 1847 roku działała fabryka zegarów Gustava Beckera; do 1885 roku wyszedł z niej półmilionowy egzemplarz. Fabryki nie ma od bardzo dawna, a te zegary do dziś się kupuje, zbiera i naprawia. Wykorzystam to do rzeczy, o której przy drogim sprzęcie myśli się zwykle za późno: co się dzieje, kiedy trzeba go naprawić.",
        "Uprzedzam od razu, jak wygląda ta sekcja, bo różni się od innych. Nie ma tu odpowiedzi — są pytania. Nie napiszę Wam, co obejmuje serwis, ile trwa naprawa, jak długo dostępne są części ani co dokładnie mówi gwarancja. Nie znam tych rzeczy na tyle pewnie, żeby je opublikować, a Wy podjęlibyście na tej podstawie decyzję za duże pieniądze. To jest ten rodzaj informacji, przy którym pomyłka kosztuje kogoś innego niż mnie.",
        "Pytanie pierwsze: gdzie fizycznie odbywa się naprawa. Czy ktoś przyjeżdża, czy sprzęt trzeba gdzieś wysłać albo zawieźć, i kto się tym zajmuje. To brzmi banalnie, dopóki nie okaże się, że urządzenie waży swoje, a najbliższy punkt jest daleko.",
        "Pytanie drugie: co dokładnie obejmują dokumenty, które podpisujecie. Nie „co powiedział sprzedawca”, tylko co jest napisane. Poproście o te dokumenty przed podpisem i przeczytajcie je — nie ma sprzedawcy, który by się o to obraził, a jeśli jakiś się obraża, to jest właśnie odpowiedź na pytanie, czy warto u niego kupować.",
        "Pytanie trzecie: do kogo dzwonicie, gdy coś się stanie. Do osoby, która sprzedawała, czy gdzie indziej. I pytanie czwarte, które porządkuje trzy poprzednie: czy to, co usłyszeliście, jest gdzieś zapisane, czy tylko powiedziane. Ustne zapewnienia — także moje — nie są w tej sprawie warte tyle, co zapis w papierach.",
        "Powiem, jak sama się w tym zachowuję, bo to jest jedyna rzecz, za którą mogę odpowiadać. Jeśli zapytacie mnie o coś z tej listy, a nie będę pewna, powiem „nie wiem, sprawdzę” i sprawdzę. Nie odpowiadam z głowy, żeby brzmieć kompetentnie, i nie obiecuję w cudzym imieniu terminów ani zakresu serwisu. Nie powiem też, że sprzęt „starczy na lata” — to twierdzenie o trwałości, którego nie mam prawa składać.",
      ],
      links: [{ href: "/kontakt", label: "Kontakt" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świebodzicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przygotujcie pytania o serwis i dokumenty — na spotkaniu odpowiem na to, co wiem, a resztę sprawdzę i oddzwonię.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świebodzicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla świebodzickiej rodziny",
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

  districtsHeading: "Do których części Świebodzic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto ma dwie dzielnice — Pełcznicę i Ciernie — a poza nimi wystarczy podać ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: ["Centrum", "Pełcznica", "Ciernie"],

  nearbyHeading: "Poza Świebodzice też przyjadę",
  nearbyParagraphs: [
    "Świdnica, Szczawno-Zdrój, Strzegom i Jaworzyna Śląska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świdnica", "Szczawno-Zdrój", "Wałbrzych", "Strzegom", "Jaworzyna Śląska", "Bolków"],

  about: blokOMnie("do Świebodzic", "w Świebodzicach i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Świebodzic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Świebodzicach"),
    {
      question: "O co zapytać o serwis przed zakupem?",
      answer:
        "O cztery rzeczy. Gdzie fizycznie odbywa się naprawa i czy sprzęt trzeba gdzieś wieźć. Co dokładnie obejmują dokumenty, które podpisujecie — nie co powiedział sprzedawca, tylko co jest napisane. Do kogo dzwonicie, gdy coś się stanie. I czy to, co usłyszeliście, jest gdzieś zapisane, czy tylko powiedziane.",
    },
    {
      question: "Dlaczego sama nie odpowiadasz na te pytania?",
      answer:
        "Bo nie znam tych rzeczy na tyle pewnie, żeby je opublikować, a Wy podjęlibyście na tej podstawie decyzję za duże pieniądze. Jeśli zapytacie mnie wprost, powiem „nie wiem, sprawdzę” i sprawdzę. Nie obiecuję w cudzym imieniu terminów ani zakresu serwisu i nie twierdzę, że sprzęt „starczy na lata”.",
    },
  ],

  geo: { lat: 50.8575, lng: 16.3213 },
};
