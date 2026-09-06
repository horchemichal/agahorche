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
 * ŁAŃCUT — miasto zamku Lubomirskich i Potockich, jednej z najlepiej
 * zachowanych rezydencji arystokratycznych w Polsce. Leży kilkanaście
 * kilometrów od Rzeszowa, przy autostradzie.
 *
 * KĄT: Łańcut stał się w praktyce sypialnią Rzeszowa. Ludzie wyprowadzają
 * się tu z miasta po dom z ogrodem, a potem dojeżdżają do pracy. Kuchennie
 * daje to paradoks, którego nie ma ani w bloku, ani na wsi: WRESZCIE MASZ
 * KUCHNIĘ, O JAKIEJ MARZYŁAŚ, I NIE MA CIĘ W NIEJ. Duży blat, wyspa,
 * miejsce na wszystko — i godzina dziennie zjedzona przez dojazd.
 * To jest uczciwy temat i nie trzeba go owijać.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Zamek w Łańcucie to jedna z najlepiej zachowanych rezydencji
 *   arystokratycznych w Polsce, dziś muzeum z parkiem i powozownią,
 * — w Łańcucie odbywa się doroczny festiwal muzyczny w zamkowej sali
 *   balowej,
 * — miasto leży przy autostradzie A4, kilkanaście kilometrów na wschód
 *   od Rzeszowa, i jest siedzibą powiatu łańcuckiego,
 * — w mieście działa gorzelnia o wieloletniej tradycji,
 * — powiat obejmuje m.in. Białobrzegi, Czarną, Markową, Rakszawę,
 *   Żołynię i Sokołów Małopolski w sąsiedztwie.
 *
 * CZEGO NIE MA: czasów dojazdu podanych w minutach jako fakt, danych
 * o migracji z Rzeszowa, cen nieruchomości.
 */
export const LANCUT: CityContent = {
  slug: "lancut",
  h1: "Thermomix Łańcut – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Łańcut — prezentacja i cena",
  seoDescription:
    "Thermomix w Łańcucie: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat łańcucki. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łańcut — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łańcucie i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Łańcuta z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Podzwierzyńcu, Przedmieściu czy w nowych osiedlach domów. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("Łańcut i cały powiat łańcucki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łańcucie – jak wygląda prezentacja?",
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
      id: "duza-kuchnia-bez-czasu",
      heading: "Wreszcie duża kuchnia — i nikogo w niej nie ma",
      paragraphs: [
        "Łańcut jest dziś w dużej mierze sypialnią Rzeszowa. Ludzie wyprowadzają się tu z miasta po dom z ogrodem i po spokój, a potem codziennie jadą do pracy w drugą stronę. Autostrada jest tuż obok, więc na papierze wszystko się zgadza.",
        "W kuchni daje to paradoks, którego nie ma ani w bloku, ani na wsi. Wreszcie macie kuchnię, o jakiej myśleliście przez lata: duży blat, miejsce na sprzęt, czasem wyspa. I wreszcie nie ma Was w niej, bo dojazd w obie strony zjada godzinę dziennie, a wieczorem chce się już tylko usiąść.",
        "Mówię o tym wprost, bo to zmienia sensowną rozmowę o urządzeniu. W dużej kuchni nie chodzi o miejsce ani o to, że coś zastąpi trzy sprzęty — miejsca macie dość. Chodzi o to, żeby obiad powstawał wtedy, gdy Was nie ma przy garnku: nastawiony wcześniej, gotujący się z ustawioną temperaturą i mieszaniem, gotowy na powrót.",
        "Druga rzecz, którą widzę w takich domach najczęściej: weekend jako jedyny moment na gotowanie. Większa porcja nie kosztuje więcej pilnowania, więc niedzielne gotowanie na trzy dni przestaje być całym dniem w kuchni — a to jest różnica między planem a rzeczywistością.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łańcucie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli wracacie późno, powiedz o tym przy umawianiu — umawiam się też w weekendy, żeby nie odbierać Wam jedynego spokojnego wieczoru w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łańcucie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łańcuckiej rodziny",
      paragraphs: [
        "Gdy oboje rodzice dojeżdżają, a dzieci wracają ze szkoły o stałej porze, wąskim gardłem nie jest pomysł na obiad, tylko okno czasowe, w którym może powstać.",
        "Thermomix pomaga w tym oknie przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może być gotowe wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
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

  districtsHeading: "Do których części Łańcuta dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do nowych osiedli domów na obrzeżach.",
    "Przy umawianiu wystarczy podać dzielnicę albo ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Podzwierzyniec",
    "Przedmieście",
    "Wschód",
    "Osiedle Kolejowe",
    "Osiedle Piastów",
    "Górne",
    "Podzamcze",
  ],

  nearbyHeading: "Cały powiat łańcucki i okolice",
  nearbyParagraphs: [
    "Białobrzegi, Czarna, Markowa, Rakszawa, Żołynia i Sokołów Małopolski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Rzeszowa i Przeworska.",
  ],
  nearbyTowns: [
    "Rzeszów",
    "Przeworsk",
    "Sokołów Małopolski",
    "Leżajsk",
    "Głogów Małopolski",
    "Jarosław",
  ],

  about: blokOMnie("do Łańcuta", "w Łańcucie i całym powiecie", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łańcuta bez dodatkowej opłaty?",
      answer:
        "Tak, do Łańcuta i do całego powiatu łańcuckiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Łańcucie"),
    {
      question: "Mam dużą kuchnię i sporo sprzętu — czy to jeszcze ma sens?",
      answer:
        "Ma, ale z innego powodu niż w małej kuchni. U Was argument „zastąpi trzy sprzęty” nie działa, bo miejsca macie dość. Działa natomiast to, że danie może powstawać wtedy, gdy nie stoicie przy garnku — a przy godzinie dziennie zjedzonej przez dojazd to jest realna różnica. Na prezentacji zobaczycie to na własnym daniu i sami ocenicie.",
    },
    {
      question: "Czy możemy umówić się w weekend?",
      answer:
        "Tak, w soboty i niedziele też jeżdżę i w Łańcucie robię to często. Powiedz przy ustalaniu terminu, kiedy Wam pasuje.",
    },
  ],

  geo: { lat: 50.0682, lng: 22.2294 },
};
