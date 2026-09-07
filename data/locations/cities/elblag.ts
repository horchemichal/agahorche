import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * ELBLĄG — największe miasto regionu po Olsztynie, z odbudowywaną
 * starówką i Kanałem Elbląskim, po którego pochylniach statki pokonują
 * różnicę poziomów po lądzie.
 *
 * KĄT: nastolatek, który je o każdej porze. To jest jedyne miejsce
 * w serwisie na etap życia rodziny, którego nikt nie opisał: DOM
 * Z DOROSŁYM DZIECKIEM, KTÓRE JE PIĘĆ RAZY DZIENNIE, ZAWSZE POZA
 * PORAMI POSIŁKÓW I ZAWSZE SAMO.
 *
 * SEKCJA MA UNIKNĄĆ MORALIZOWANIA. Nie oceniamy nastolatków, nie
 * doradzamy rodzicom w wychowaniu i nie mówimy nic o tym, co powinni
 * jeść — to nie moja rola i nie moje kompetencje.
 *
 * TREŚĆ PRAKTYCZNA: wspólny obiad przestaje być realny, więc przestaje
 * być punktem odniesienia. Sensowniejsze jest coś, co stoi w lodówce
 * i daje się odgrzać samodzielnie o dowolnej porze — a to zmienia to,
 * CO warto gotować, a nie tylko jak.
 *
 * ROZGRANICZENIE. Ropczyce mają „obiad, którego nikt nie je razem"
 * — tam kąt jest smutny i dotyczy tego, co to robi z jedzeniem.
 * Tutaj podchodzimy do tego czysto praktycznie: jak ugotować pod taki
 * rozkład, zamiast z nim walczyć.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kanał Elbląski ma pochylnie, po których statki pokonują różnicę
 *   poziomów lądem.
 */
export const ELBLAG: CityContent = {
  slug: "elblag",
  h1: "Thermomix Elbląg – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Elbląg — prezentacja i cena",
  seoDescription:
    "Thermomix w Elblągu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Elbląg — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Elblągu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Elbląga z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Elbląg i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Elblągu – jak wygląda prezentacja?",
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
      id: "nastolatek",
      heading: "Kanał, po którym statki jadą lądem — i dom, w którym nikt nie je o tej samej porze",
      paragraphs: [
        "Kanał Elbląski działa dlatego, że ktoś zamiast walczyć z różnicą poziomów, przewiózł statki po lądzie. Trzymam się tego obrazu, bo dokładnie tak trzeba podejść do etapu życia rodziny, przy którym najwięcej osób się zacina: do domu z nastolatkiem.",
        "Wygląda to zawsze podobnie. Do niedawna był obiad o określonej porze i wszyscy siadali. Teraz jedno dziecko wraca o piętnastej, drugie o osiemnastej, jedno ma trening, drugie było u kolegi i już jadło, a wszyscy zaglądają do lodówki pięć razy dziennie o porach, które z posiłkami nie mają nic wspólnego.",
        "Nie zamierzam nikomu doradzać, jak ma to zmienić, ani oceniać, czy tak powinno być. To nie moja rola. Napiszę tylko, co z tego wynika dla gotowania, bo to akurat jest konkretne.",
        "Wynika jedna rzecz: wspólny obiad przestaje być użytecznym punktem odniesienia. Gotowanie „na osiemnastą” prowadzi do tego, że danie stoi i stygnie, a potem i tak jest odgrzewane pojedynczo. Sensowniejsze jest gotowanie pod inne kryterium: czy to da się odgrzać samemu, o dowolnej porze, i czy będzie wtedy dobre.",
        "A to zmienia nie tylko sposób, ale i to, CO się gotuje. Dobrze wychodzą rzeczy, które po odgrzaniu są takie same albo lepsze: gulasze, sosy, dania jednogarnkowe, zupy, farsze, mielone. Źle wychodzi wszystko smażone, panierowane i sałatki — czyli akurat to, co wielu rodzicom kojarzy się z porządnym obiadem.",
        "Rola urządzenia jest w tym prosta i nie będę jej wyolbrzymiać: takie dania robi się w nim bez stania przy garnku, a więc da się je zrobić w niedzielę albo w środę wieczorem, kiedy akurat jest chwila, i to niezależnie od tego, o której kto wraca. Do tego nastolatek jest w stanie sam sobie coś w nim zrobić — przepis prowadzi krok po kroku, a to bywa pierwszy raz, kiedy w ogóle coś ugotuje.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz w lodówce" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Elblągu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Elblągu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla elbląskiej rodziny",
      paragraphs: [
        "W domu ze starszymi dziećmi nikt nie je o tej samej porze, a obiad i tak przygotowuje zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że dobrze wychodzą w nim dania nadające się do odgrzania. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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

  districtsHeading: "Do których części Elbląga i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Zawada",
    "Zatorze",
    "Nad Jarem",
    "Dąbrowa",
    "Warszawska",
    "Bielany",
    "Próchnik",
    "Rubno",
  ],

  nearbyHeading: "Poza Elbląg też przyjadę",
  nearbyParagraphs: [
    "Pasłęk, Tolkmicko, Młynary i Braniewo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pasłęk", "Tolkmicko", "Młynary", "Braniewo", "Frombork", "Malbork"],

  about: blokOMnie("do Elbląga", "w Elblągu i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Elbląga bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Elblągu"),
    {
      question: "U nas nikt nie je o tej samej porze. Co wtedy gotować?",
      answer:
        "Rzeczy, które po odgrzaniu są takie same albo lepsze: gulasze, sosy, dania jednogarnkowe, zupy, farsze, mielone. Źle wychodzi wszystko smażone, panierowane i sałatki — czyli akurat to, co wielu z nas kojarzy się z porządnym obiadem. Gotowanie „na osiemnastą” przestaje mieć sens, gdy i tak każdy odgrzewa sobie sam.",
    },
    {
      question: "Czy nastolatek zrobi sobie coś sam?",
      answer:
        "Tak i to bywa pierwszy raz, kiedy w ogóle coś ugotuje — przepis prowadzi krok po kroku, nic się nie przypala i nie trzeba niczego pilnować. Na spotkaniu chętnie dam mu urządzenie do ręki zamiast gotować samej.",
    },
  ],

  geo: { lat: 54.1522, lng: 19.4088 },
};
