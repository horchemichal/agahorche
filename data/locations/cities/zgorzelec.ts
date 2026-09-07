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
 * ZGORZELEC — miasto nad Nysą Łużycką, oddzielone rzeką od niemieckiego
 * Görlitz. Przez most przechodzi się pieszo i robi się to codziennie.
 *
 * KĄT: przepisy w cudzych miarach. Miasto, w którym codziennie ma się
 * do czynienia z drugim krajem, jest jedynym właściwym miejscem
 * na rzecz czysto techniczną i bardzo praktyczną: CO ZROBIĆ Z PRZEPISEM,
 * KTÓRY PODAJE SKŁADNIKI W SZKLANKACH, ŁYŻKACH, KUBKACH ALBO UNCJACH.
 * Waga wbudowana w urządzenie kończy ten temat, bo wszystko sprowadza
 * się do gramów w tym samym naczyniu.
 *
 * ROZGRANICZENIE WOBEC OPOCZNA. Opoczno dostało powtarzalność WYNIKU
 * (danie wychodzi tak samo, przepis da się przekazać dalej). Tutaj chodzi
 * o coś węższego i innego: o PRZELICZANIE cudzych miar i o to, że przepis
 * z zagranicznej strony przestaje być zgadywanką.
 *
 * CZEGO TU NIE MA I BYĆ NIE MOŻE: porównywania cen po dwóch stronach
 * granicy, doradzania, gdzie robić zakupy, ani niczego o różnicach
 * między krajami poza jednym zdaniem o moście. Terespol ma już sekcję
 * „a gdzie indziej taniej" i nie dublujemy jej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Zgorzelec leży nad Nysą Łużycką, po drugiej stronie rzeki jest Görlitz,
 * — miasta łączy most dla pieszych.
 */
export const ZGORZELEC: CityContent = {
  slug: "zgorzelec",
  h1: "Thermomix Zgorzelec – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Zgorzelec — prezentacja i cena",
  seoDescription:
    "Thermomix w Zgorzelcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zgorzelec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zgorzelcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zgorzelca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Zgorzelec i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zgorzelcu – jak wygląda prezentacja?",
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
      id: "cudze-miary",
      heading: "Przepis w szklankach, kubkach i uncjach — koniec zgadywania",
      paragraphs: [
        "Zgorzelec leży nad rzeką, przez którą przechodzi się mostem, i połowa spraw załatwia się tu w dwóch miejscach naraz. Nie będę pisać o granicy nic więcej, bo mnie to nie dotyczy — mam z tego natomiast pretekst do rzeczy czysto kuchennej, którą znają wszyscy, kto zagląda do przepisów spoza polskich stron.",
        "Przepis podaje „dwie szklanki mąki”. Której szklanki? Do herbaty czy tej dużej z kredensu? „Kubek cukru” w przepisie zza oceanu to zupełnie inna miara niż nasz kubek do kawy, a uncji nikt normalny w kuchni nie przelicza w pamięci. Do tego dochodzi klasyczne „łyżka mąki” — a łyżka mąki może ważyć od dziesięciu do dwudziestu gramów, zależnie od tego, jak ją nabrać.",
        "W efekcie robi się to, co wszyscy: bierze się na oko i albo wychodzi, albo nie. Przy zupie nie ma to znaczenia, przy cieście ma decydujące.",
        "Ta sprawa kończy się w urządzeniu z wbudowaną wagą. Naczynie stoi na wadze, a składniki dosypuje się wprost do niego, patrząc na gramy — nie ma szklanek, nie ma miseczek, nie ma przeliczania i nie ma trzech dodatkowych naczyń do umycia. Przepis z zagranicznej strony przelicza się raz na gramy i od tej pory jest po prostu przepisem.",
        "Dodam jeszcze jedno, żeby było uczciwie: to nie znaczy, że wszystko trzeba ważyć co do grama. Do zupy nadal wrzuca się, ile się chce. Rzecz w tym, że przy wypiekach macie wreszcie wybór, a nie konieczność zgadywania.",
        "Jeśli macie w domu przepis, który nigdy nie wychodzi tak samo — przynieście go na spotkanie. Sprawdzimy, czy problemem nie jest właśnie miara.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zgorzelcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zgorzelcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zgorzeleckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że odmierza sam. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Zgorzelca i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Ujazd",
    "Osiedle Ludwikowo",
    "Łagów",
    "Koźlice",
    "Żarska Wieś",
    "Jerzmanki",
    "Gronów",
    "Trójca",
    "Radomierzyce",
  ],

  nearbyHeading: "Poza Zgorzelec też przyjadę",
  nearbyParagraphs: [
    "Bogatynia, Pieńsk, Zawidów, Lubań i Węgliniec są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bogatynia", "Pieńsk", "Zawidów", "Lubań", "Węgliniec", "Bolesławiec"],

  about: blokOMnie("do Zgorzelca", "w Zgorzelcu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zgorzelca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zgorzelcu"),
    {
      question: "Korzystam z przepisów w szklankach i uncjach. Czy to problem?",
      answer:
        "Przestaje nim być. Waga jest wbudowana w urządzenie, więc składniki dosypuje się wprost do naczynia, patrząc na gramy — bez szklanek, przeliczania i dodatkowych miseczek do umycia. Przepis przelicza się raz i od tej pory po prostu działa.",
    },
    {
      question: "Czy wszystko trzeba teraz ważyć co do grama?",
      answer:
        "Nie. Do zupy nadal wrzuca się tyle, ile się chce. Rzecz w tym, że przy wypiekach masz wybór zamiast zgadywania — a jeśli masz w domu przepis, który nigdy nie wychodzi tak samo, przynieś go na spotkanie i sprawdzimy, czy nie chodzi właśnie o miarę.",
    },
  ],

  geo: { lat: 51.1494, lng: 15.0069 },
};
