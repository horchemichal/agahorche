import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * NOWA DĘBA — miasto zbudowane przy zakładach zbrojeniowych Centralnego
 * Okręgu Przemysłowego, w Puszczy Sandomierskiej. Obok miasta leży duży
 * poligon wojskowy, a miasto jest garnizonem.
 *
 * KĄT: dom, w którym kogoś regularnie NIE MA. Wojsko, poligon, ćwiczenia,
 * czasem misje — a obok tego praca w zakładach na zmiany. To zupełnie
 * inna sytuacja kuchenna niż wszystkie dotychczasowe: nie chodzi
 * o różne godziny powrotu w ciągu dnia, tylko o tygodnie nieobecności
 * i o powrót, po którym trzeba nadrobić.
 *
 * Piszemy o tym z szacunkiem i bez patosu: to po prostu układ życia
 * rodzinnego, który tu jest normą, a nie temat na wzruszenia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Nowa Dęba powstała przy zakładach budowanych w ramach Centralnego
 *   Okręgu Przemysłowego, w Puszczy Sandomierskiej,
 * — w sąsiedztwie miasta znajduje się duży poligon wojskowy, a Nowa Dęba
 *   jest miastem garnizonowym,
 * — miasto leży w powiecie tarnobrzeskim, między Tarnobrzegiem, Stalową
 *   Wolą, Mielcem i Kolbuszową,
 * — okolica jest w dużej mierze leśna,
 * — sołectwa gminy: Chmielów, Tarnowska Wola, Jadachy, Rozalin, Alfredówka,
 *   Cygany, Poręby Dębskie.
 *
 * CZEGO NIE MA: informacji o jednostkach, liczebności, ćwiczeniach ani
 * niczego, co dotyczy wojska poza faktem, że miasto jest garnizonem.
 */
export const NOWA_DEBA: CityContent = {
  slug: "nowa-deba",
  h1: "Thermomix Nowa Dęba – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Nowa Dęba — prezentacja i cena",
  seoDescription:
    "Thermomix w Nowej Dębie: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Cena, raty 0%, elastyczne terminy. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowa Dęba — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowej Dębie. Prezentacja bezpłatna, termin dopasowany do Waszego rytmu.",

  lead:
    "Przyjeżdżam do Nowej Dęby z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Chmielowa, Tarnowskiej Woli, Jadachów i pozostałych sołectw.",

  highlights: highlightyStandardowe("Nowa Dęba i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowej Dębie – jak wygląda prezentacja?",
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
      id: "kiedy-kogos-nie-ma",
      heading: "Dom, w którym kogoś regularnie nie ma",
      paragraphs: [
        "Nowa Dęba jest miastem garnizonowym i miastem zakładów zmianowych. W praktyce oznacza to układ, który tutaj jest normą, a gdzie indziej wyjątkiem: w wielu domach kogoś po prostu regularnie nie ma. Nie na kilka godzin, tylko na tydzień, dwa albo dłużej.",
        "Kuchennie to zupełnie co innego niż „każdy wraca o innej porze”. Dzielą się na dwa różne tryby. Kiedy jest się samemu z dziećmi, gotuje się prosto i wydajnie, często raz na kilka dni, bo nie ma nikogo do zmiany. A kiedy ktoś wraca, przychodzi tydzień, w którym chce się nadrobić — normalne obiady, ciasto, coś porządnego na stole.",
        "Thermomix pasuje do obu, choć z różnych powodów. W tygodniu samotnym: gotowanie z zapasem bez poświęcania na to całego wieczoru, bo większa porcja nie kosztuje więcej pilnowania, a jedno naczynie oznacza jedno zmywanie. W tygodniu, gdy wszyscy są w domu: ciasto wyrabia się samo, a obiad nie wymaga stania przy garnku, więc można go spędzić przy stole, a nie przy kuchence.",
        "Uczciwie: to nie jest urządzenie, które rozwiązuje nieobecność. Zdejmuje tylko część roboty, która i tak spada na jedną osobę — i to jest cała, ale niemała obietnica.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowej Dębie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli chcecie obejrzeć urządzenie oboje, powiedzcie od razu, kiedy będziecie w domu razem — dopasuję się do tego terminu, nawet jeśli to za dwa tygodnie. To zwykle decyzja na dwie osoby i lepiej, żeby obie ją podjęły.",
        "Podaj miejscowość — jeżdżę też do wszystkich sołectw gminy, a od kierunku zależy tylko godzina spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowej Dębie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dębskiej rodziny",
      paragraphs: [
        "Gdy przez część miesiąca jedna osoba prowadzi dom sama, wąskim gardłem nie jest pomysł na obiad, tylko to, że nie ma kogo poprosić o zmianę przy garnku.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się dziećmi, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu i w tym samym czasie.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części gminy dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich sołectw, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Osiedle Broniewskiego",
    "Osiedle Dęba",
    "Chmielów",
    "Tarnowska Wola",
    "Jadachy",
    "Rozalin",
    "Alfredówka",
    "Cygany",
    "Poręby Dębskie",
  ],

  nearbyHeading: "Poza Nową Dębę też przyjadę",
  nearbyParagraphs: [
    "Tarnobrzeg, Stalowa Wola, Mielec, Kolbuszowa i Nisko są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Tarnobrzeg",
    "Stalowa Wola",
    "Mielec",
    "Kolbuszowa",
    "Nisko",
  ],

  about: blokOMnie("do Nowej Dęby", "w Nowej Dębie i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowej Dęby bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nowej Dębie"),
    {
      question: "Mąż wraca dopiero za dwa tygodnie — czy poczekasz z prezentacją?",
      answer:
        "Oczywiście i wolę tak. To zwykle decyzja na dwie osoby, a urządzenie w tej cenie lepiej obejrzeć razem niż relacjonować przez telefon. Powiedz przy umawianiu, kiedy będziecie w domu oboje, a wtedy przyjadę.",
    },
    {
      question: "Gotuję sama dla siebie i dzieci przez większość miesiąca — co pokażesz?",
      answer:
        "Wtedy zaczynamy od gotowania z zapasem: jak zrobić raz i mieć na kilka dni, bez poświęcania na to całego wieczoru. Powiedz przy umawianiu, ile macie lat i czego dzieci nie jedzą, a dobiorę dania pod Was — nie pod folder.",
    },
  ],

  geo: { lat: 50.4283, lng: 21.7508 },
};
