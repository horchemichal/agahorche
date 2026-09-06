import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * SOSNOWIEC — strona zbudowana wokół jednej rzeczy, na której wykłada się
 * każdy szablon: SOSNOWIEC NIE JEST NA ŚLĄSKU. Leży w Zagłębiu Dąbrowskim,
 * po drugiej stronie dawnej granicy zaborów, i mieszkańcy pilnują tego
 * rozróżnienia. Tekst, który wita sosnowiczankę słowami „śląska kuchnia”
 * i „u nas na Śląsku”, przegrywa w pierwszym zdaniu — a dokładnie tak
 * wygląda strona wygenerowana przez podmianę nazwy miasta.
 *
 * To jest zarazem najlepszy dowód, że tę stronę pisał człowiek: różnicy
 * Śląsk–Zagłębie nie da się wyczytać z listy miast w województwie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Sosnowiec leży w Zagłębiu Dąbrowskim, historycznie w zaborze rosyjskim,
 *   podczas gdy Katowice były po stronie pruskiej; granica biegła Brynicą,
 * — miasto powstało z połączenia kilku odrębnych osad, stąd do dziś układ
 *   wielu ośrodków zamiast jednego centrum (Pogoń, Sielec, Środula,
 *   Zagórze, Klimontów, Niwka, Kazimierz Górniczy, Maczki),
 * — Zamek Sielecki i Egzotarium jako rozpoznawalne punkty miasta,
 * — Sosnowiec sąsiaduje bezpośrednio z Katowicami, Będzinem, Czeladzią,
 *   Dąbrową Górniczą i Mysłowicami.
 *
 * CZEGO NIE MA: liczby mieszkańców jako faktu, dat rozbiórki i budowy
 * konkretnych zakładów, twierdzeń o „kuchni zagłębiowskiej” jako osobnej
 * tradycji kulinarnej — takiej ustalonej listy dań, jak śląska, Zagłębie
 * nie ma i udawanie, że ma, byłoby wypełniaczem.
 */
export const SOSNOWIEC: CityContent = {
  slug: "sosnowiec",
  h1: "Thermomix Sosnowiec – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Sosnowiec — prezentacja i cena",
  seoDescription:
    "Thermomix w Sosnowcu: bezpłatna prezentacja TM7 u Ciebie w kuchni, we wszystkich dzielnicach. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sosnowiec — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sosnowcu. Prezentacja bezpłatna, ratę liczymy na miejscu, decyzja należy do Ciebie.",

  lead:
    "Przyjeżdżam do Sosnowca z Thermomixem TM7, gotujemy razem u Ciebie w kuchni i liczymy, ile to naprawdę kosztuje. Dojazd do wszystkich dzielnic — od Pogoni po Kazimierz — jest bezpłatny, tak samo jak samo spotkanie.",

  highlights: highlightyStandardowe("cały Sosnowiec, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sosnowcu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami. Nie musisz nic kupować ani przygotowywać — wystarczy kawałek blatu, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę, a nie pokazowo: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Jeśli powiesz mi wcześniej, ile osób siada u Was do stołu i czego nie jecie, dobiorę dania pod Was.",
        "Na końcu liczby: aktualna cena, promocja i rata przy kilku okresach spłaty. Możesz powiedzieć „muszę to przemyśleć” i to jest pełna odpowiedź — spotkanie jest bezpłatne niezależnie od decyzji.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "zaglebie",
      heading: "Sosnowiec to Zagłębie, nie Śląsk — i to nie jest drobiazg",
      paragraphs: [
        "Wiem, że dla kogoś z zewnątrz Sosnowiec i Katowice to jedno. Dla mieszkańców nie są i nigdy nie były: przez Brynicę biegła granica zaborów, Katowice były po stronie pruskiej, a Sosnowiec po rosyjskiej. Zagłębie ma własną historię, własne poczucie odrębności i szczerze mówiąc — własną irytację, gdy ktoś tego nie odróżnia.",
        "Piszę o tym na stronie o Thermomiksie, bo to jest dokładnie ten szczegół, po którym poznaje się, czy tekst pisał ktoś, kto tu bywa, czy skrypt podmieniający nazwy miast. Nie zaproponuję Ci „śląskiego obiadu”, jeśli u Was w domu nigdy się go nie robiło.",
        "Praktyczny wniosek jest prosty: na spotkaniu gotujemy to, co Wy jecie. Nie mam gotowego zestawu regionalnego, który wyciągam z torby — mam pytanie, co u Was ląduje na stole w środę.",
      ],
    },
    {
      id: "miasto-wielu-osrodkow",
      heading: "Miasto bez jednego centrum",
      paragraphs: [
        "Sosnowiec powstał ze zrośnięcia kilku osobnych osad i widać to do dziś: Pogoń, Sielec, Środula, Zagórze, Klimontów, Niwka, Kazimierz Górniczy czy Maczki to nie są „części miasta” w takim sensie jak dzielnice Krakowa. Każda ma własny charakter zabudowy, a droga z jednej na drugą potrafi zająć tyle, co wyjazd do sąsiedniego miasta.",
        "Dla prezentacji ma to konkretne znaczenie: inaczej wygląda spotkanie w bloku na Środuli, inaczej w domu na Kazimierzu. Dlatego przy umawianiu pytam o dzielnicę — nie po to, żeby liczyć kilometry, tylko żeby dobrze zaplanować porę i wiedzieć, czego się spodziewać w kuchni.",
        "Bezpłatny dojazd obejmuje całe miasto, łącznie z tymi dzielnicami, do których „nikt nie jeździ”. Maczki są od centrum dalej niż Katowice — i to nie zmienia niczego w cenie spotkania.",
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sosnowcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Sosnowca",
      paragraphs: [
        "Sosnowiec jest miastem, z którego bardzo dużo osób dojeżdża do pracy gdzie indziej — do Katowic, do Dąbrowy, do Mysłowic — a spora część pracuje zmianowo. To znaczy, że w jednym domu obiad bywa potrzebny o trzech różnych porach, a osoba, która go zrobi, nie zawsze jest tą, która go zje.",
        "Thermomix pomaga tu nie tym, że gotuje szybciej, tylko tym, że nie trzeba przy nim stać. Danie może powstać wcześniej i poczekać, albo gotować się wtedy, gdy robisz coś zupełnie innego. Wszystko dzieje się w jednym naczyniu, więc po zupie nie zostają trzy garnki i blender.",
        "Przy małym dziecku dochodzi Varoma — porcja na parze powstaje równolegle z obiadem dla reszty domu, bez drugiego garnka i bez drugiego pilnowania.",
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

  districtsHeading: "Do których dzielnic Sosnowca dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty. Sosnowiec jest rozciągnięty i dojazd na Maczki to co innego niż na Pogoń — ale dla Ciebie kosztuje tyle samo, czyli nic.",
    "Przy umawianiu wystarczy podać dzielnicę i orientacyjnie, jak wygląda dojazd pod blok albo dom. Reszta to już moja sprawa.",
  ],
  districts: [
    "Pogoń",
    "Śródmieście",
    "Sielec",
    "Środula",
    "Zagórze",
    "Klimontów",
    "Milowice",
    "Niwka",
    "Modrzejów",
    "Dańdówka",
    "Bobrek",
    "Kazimierz Górniczy",
    "Porąbka",
    "Ostrowy Górnicze",
    "Maczki",
    "Juliusz",
    "Radocha",
    "Stary Sosnowiec",
  ],

  nearbyHeading: "Zagłębie i okolice",
  nearbyParagraphs: [
    "Sosnowiec, Będzin, Czeladź i Dąbrowa Górnicza zrosły się do tego stopnia, że granicę widać tylko na tablicy. Jeżdżę do wszystkich na tych samych zasadach, a jedna trasa spokojnie obsługuje dwa spotkania w jeden wieczór.",
    "Jeśli chcesz zaprosić koleżankę z sąsiedniego miasta — to najlepszy możliwy układ. W grupie pytania padają odważniejsze.",
  ],
  nearbyTowns: [
    "Będzin",
    "Czeladź",
    "Dąbrowa Górnicza",
    "Katowice",
    "Mysłowice",
    "Siemianowice Śląskie",
    "Zawiercie",
  ],

  about: blokOMnie("do Sosnowca", "w Sosnowcu i całym Zagłębiu", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sosnowca bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do całego Sosnowca i sąsiednich miast Zagłębia jest bezpłatny, tak samo jak prezentacja. Mieszkam w Małopolsce, ale w tę stronę jeżdżę regularnie.",
    },
    ...faqWspolne("w Sosnowcu"),
    {
      question: "Czy przyjedziesz na Maczki albo Kazimierz Górniczy?",
      answer:
        "Tak, do każdej dzielnicy. To, że jedna jest dalej od centrum niż sąsiednie miasto, jest moim problemem przy układaniu trasy, a nie Twoim przy płaceniu.",
    },
    {
      question: "Pracuję na zmiany — czy da się umówić poza standardowymi godzinami?",
      answer:
        "Tak. Umawiam się też przed południem w dni robocze i wieczorami. Powiedz przy ustalaniu terminu, kiedy realnie jesteś w domu.",
    },
  ],

  geo: { lat: 50.2863, lng: 19.1041 },
};
