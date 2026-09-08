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
 * ŚWIEBODZIN — miasto, które w 2010 r. miało najwyższą figurę Chrystusa
 * na świecie, a dziś już jej nie ma. Nie dlatego, że coś się tu zmieniło,
 * tylko dlatego, że gdzie indziej postawiono wyższe.
 *
 * KĄT: superlatyw, który przestał być prawdą. To jedyne miejsce
 * w serwisie, w którym tłumaczę, dlaczego nie piszę „najlepszy",
 * „jedyny" i „numer jeden" — na przykładzie, który mieszkańcy tego
 * miasta znają lepiej niż ktokolwiek inny w Polsce.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — figura ma 33 m (sama), 36 m z koroną, 52,5 m z kopcem — i te trzy
 *   liczby są w mediach nagminnie mieszane,
 * — w 2010 r. była najwyższa; w 2022 r. powstał Cristo Protetor
 *   w Encantado, a we wrześniu 2024 r. figura na Sumatrze Północnej
 *   o wysokości 61 m,
 * — wniosek: superlatywy się starzeją, więc opieram tekst na tym,
 *   co urządzenie robi, a nie na tym, które jest,
 * — czego NIE napiszę: „najlepszy robot kuchenny", „jedyne takie
 *   urządzenie", „numer jeden".
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORÓWNAŃ Z KONKRETNYMI MARKAMI konkurencji ani ocen ich
 *   sprzętu. Piszę o zdaniach, których sama nie używam, a nie o tym,
 *   że ktoś inny jest gorszy.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO KOMENTARZA RELIGIJNEGO. Figura jest tu przykładem
 *   mierzalnego rekordu, nie tematem światopoglądowym. Piszę o metrach,
 *   nie o wierze.
 *
 * ROZGRANICZENIE. Kilka stron mówi o pytaniach zakupowych („czy to
 * naprawdę jedyne takie urządzenie", „a może poczekać na następny
 * model"). Tutaj chodzi o coś innego: o STARZENIE SIĘ SUPERLATYWU
 * i o to, dlaczego w ogóle ich nie używam.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy ponad dwadzieścia tysięcy mieszkańców, gmina blisko
 *   dwadzieścia dziewięć tysięcy (GUS, 31.12.2024),
 * — figura: 33 m sama, +3 m korona, kopiec 16,5 m, razem 52,5 m;
 *   montaż 6 listopada 2010, poświęcenie 21 listopada 2010,
 * — koszt ok. 6 mln zł ze składek; inicjator ks. Sylwester Zawadzki,
 *   projektant Mirosław Patecki,
 * — Cristo Redentor w Rio ma 30 m samej figury, Cristo de la Concordia
 *   w Cochabambie 34,2 m,
 * — Cristo Protetor w Encantado ukończono 22 kwietnia 2022 r.;
 *   figurę na wzgórzu Sibea-bea na Sumatrze Północnej (61 m) odsłonięto
 *   19 września 2024 r.,
 * — bezrobocie w mieście wyniosło 2,2% w 2024 r., a przeciętne
 *   wynagrodzenie 90,6% średniej krajowej,
 * — węzeł Jordanowo (A2/S3) w gminie otwarto 27 maja 2013 r.,
 * — w Wityniu działa Winnica Łukasz, reaktywowana w 2009 r. po 164 latach
 *   od założenia pierwszej winnicy w tej wsi w 1845 r.,
 * — NIE POTWIERDZIŁAM żadnego wpisu z tej gminy na ministerialnej
 *   Liście Produktów Tradycyjnych.
 */
export const SWIEBODZIN: CityContent = {
  slug: "swiebodzin",
  h1: "Thermomix Świebodzin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Świebodzin — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Świebodzinie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i wsie. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świebodzin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świebodzinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Świebodzina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich wsi gminy.",

  highlights: highlightyStandardowe("Świebodzin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie piszę „najlepszy”. W tym mieście wiadomo, jak długo wytrzymuje taki tytuł.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świebodzinie – jak wygląda prezentacja?",
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
      id: "superlatywy",
      heading: "Rekord, który przestał być rekordem — i co z tego wynika",
      paragraphs: [
        "Świebodzin ma w Polsce jedną rzecz, o którą nikt go nie pyta dwa razy. Dwudziestego pierwszego listopada dwa tysiące dziesiątego roku poświęcono tu figurę Chrystusa Króla: trzydzieści trzy metry samej figury, trzy metry korony, szesnaście i pół metra kopca — razem pięćdziesiąt dwa i pół. Zbudowano ją za około sześć milionów złotych ze składek, bez pieniędzy publicznych.",
        "Wtedy była najwyższa na świecie. Licząc same figury, wyprzedzała Cristo Redentor z Rio o kilka metrów i Cristo de la Concordia z Cochabamby o niecałe dwa. To był rekord policzalny, nie hasło.",
        "Dziś już nim nie jest. W kwietniu dwa tysiące dwudziestego drugiego ukończono Cristo Protetor w brazylijskim Encantado, a we wrześniu dwa tysiące dwudziestego czwartego odsłonięto na Sumatrze Północnej figurę mierzącą sześćdziesiąt jeden metrów. W Świebodzinie nic się nie zmieniło — figura stoi tak samo i ma dokładnie te same metry. Zmieniło się tylko to, co postawiono gdzie indziej.",
        "Piszę o tym, bo to najlepszy przykład rzeczy, którą chcę tu powiedzieć o własnej branży. Superlatywy się starzeją, a najczęściej starzeją się po cichu — nikt nie wraca do folderu, żeby go poprawić. Do dziś w wielu miejscach w sieci przeczytacie, że w Świebodzinie stoi najwyższa figura Chrystusa na świecie. To po prostu nieaktualne.",
        "Dlatego na tej stronie nie znajdziecie zdań „najlepszy robot kuchenny”, „jedyne takie urządzenie” ani „numer jeden”. Nie dlatego, że uważam ten sprzęt za słaby — sprzedaję go i uważam, że jest dobry. Tylko dlatego, że takie zdania mają termin ważności, którego ja nie kontroluję, a Wy nie macie jak sprawdzić.",
        "Zamiast tego staram się pisać rzeczy, które zestarzeją się wolniej albo wcale: co urządzenie robi, czego nie robi, ile kosztuje, co obejmuje gwarancja i do kogo dzwonicie, jak coś pójdzie nie tak. To są zdania, które można sprawdzić dziś i za dwa lata.",
        "Przy okazji jedna rzecz, którą w tym mieście wypada powiedzieć dokładnie: te trzy liczby — trzydzieści trzy, trzydzieści sześć i pięćdziesiąt dwa i pół — są w mediach nagminnie mieszane. Trzydzieści trzy to sama figura, trzydzieści sześć z koroną, pięćdziesiąt dwa i pół razem z kopcem. Jeśli już ktoś przywołuje rekord, to niech przynajmniej przywoła właściwą liczbę.",
      ],
      links: [{ href: "/cena", label: "Cena i warunki" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świebodzinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Do wsi gminy dojeżdżam tak samo jak do miasta — Gościkowo, Wilkowo, Jordanowo, Wityń i pozostałe są w normalnej trasie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świebodzinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla świebodzińskiej rodziny",
      paragraphs: [
        "W Świebodzinie bezrobocie jest bardzo niskie, a wynagrodzenia poniżej średniej krajowej — czyli praca jest, tylko trzeba jej sporo. Obiad powstaje w oknie między zmianą a wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Świebodzina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy, bez dopłaty za dojazd.",
    "Ponad połowa mieszkańców bloków spółdzielczych mieszka na jednym osiedlu — Łużyckim. Przy umawianiu wystarczy podać osiedle albo nazwę wsi. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: ["Łużyckie", "Widok", "Centrum", "Kopernika"],

  nearbyHeading: "Poza Świebodzin też przyjadę",
  nearbyParagraphs: [
    "Lubrza, Skąpe, Szczaniec i Zbąszynek są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubrza", "Skąpe", "Szczaniec", "Zbąszynek", "Sulechów", "Międzyrzecz"],

  about: blokOMnie("do Świebodzina", "w Świebodzinie i okolicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Świebodzina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Świebodzinie"),
    {
      question: "Czy to najlepszy robot kuchenny na rynku?",
      answer:
        "Nie odpowiem na to twierdząco i wyjaśnię dlaczego. Takie zdania mają termin ważności, którego nie kontroluję — w tym mieście dobrze widać, jak szybko rekord przestaje być rekordem, choć sam obiekt się nie zmienia. Powiem za to dokładnie, co to urządzenie robi, czego nie robi i ile kosztuje. To da się sprawdzić dziś i za dwa lata.",
    },
    {
      question: "Czy dojeżdżasz do wsi gminy, na przykład do Gościkowa albo Wityniu?",
      answer:
        "Tak, do wszystkich. Wieś w tej gminie traktuję dokładnie tak samo jak miasto — bez dopłaty za odległość. Wystarczy podać nazwę przy umawianiu, żebym dobrze rozplanowała trasę.",
    },
  ],

  geo: { lat: 52.2472, lng: 15.5342 },
};
