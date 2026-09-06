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
 * STALOWA WOLA — miasto zbudowane od zera w latach 30. XX wieku razem
 * z hutą, jako część Centralnego Okręgu Przemysłowego. Powstało w lesie,
 * w widłach Wisły i Sanu, z planu — nie z osady.
 *
 * KĄT: to jest miasto ciężkiej pracy fizycznej i tak było od pierwszego
 * dnia. Huta, stalownia, zmiany — a wraz z nimi kuchenna potrzeba, której
 * nie ma w mieście biurowym: JEDZENIE, KTÓRE MA NAPRAWDĘ NASYCIĆ. To nie
 * jest miejsce na lekkie sałatki i mikroporcje z reklamy. Uczciwa strona
 * musi mówić o porcjach, o sytości i o jedzeniu, które przetrwa dwanaście
 * godzin poza domem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Stalowa Wola powstała w drugiej połowie lat 30. XX wieku jako miasto
 *   przy zakładach budowanych w ramach Centralnego Okręgu Przemysłowego,
 * — miasto zbudowano na terenach leśnych w widłach Wisły i Sanu,
 * — Huta Stalowa Wola była i pozostaje jednym z największych zakładów
 *   przemysłowych regionu,
 * — układ miasta był planowany od podstaw, z osiedlami dla pracowników,
 * — Stalowa Wola sąsiaduje z Niskiem i Tarnobrzegiem.
 *
 * CZEGO NIE MA: liczby zatrudnionych, danych o produkcji, twierdzeń
 * o zarobkach ani zaleceń żywieniowych — od tego są dietetycy.
 */
export const STALOWA_WOLA: CityContent = {
  slug: "stalowa-wola",
  h1: "Thermomix Stalowa Wola – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Stalowa Wola — prezentacja i cena",
  seoDescription:
    "Thermomix w Stalowej Woli: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie osiedla. Cena, raty 0%, terminy też dla pracujących zmianowo. Aga, 517 185 691.",
  ogTitle: "Thermomix Stalowa Wola — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Stalowej Woli. Prezentacja bezpłatna, terminy też przed południem.",

  lead:
    "Przyjeżdżam do Stalowej Woli z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Poświętnem, Piaskach, Hutniku czy w Rozwadowie. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cała Stalowa Wola, wszystkie osiedla"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Stalowej Woli – jak wygląda prezentacja?",
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
      id: "jedzenie-ktore-nasyci",
      heading: "Jedzenie, które ma naprawdę nasycić",
      paragraphs: [
        "Stalowa Wola powstała w latach trzydziestych razem z hutą — nie wyrosła z wioski, tylko została zaprojektowana i postawiona w lesie, żeby było gdzie mieszkać ludziom, którzy przyszli do pracy. Od pierwszego dnia jest to miasto ciężkiej pracy fizycznej i to widać w kuchni bardziej, niż widać w folderach.",
        "Bo jeśli ktoś w domu wraca po dwunastu godzinach na hali, to obiad nie ma być lekki i efektowny. Ma nasycić. Reklamy urządzeń kuchennych pokazują mikroporcje na dużym talerzu i sałatki z pestkami — a tu pytanie brzmi zupełnie inaczej: czy po tym się najem i czy starczy na dokładkę.",
        "Mówię to wprost, bo od tego zależy, czy prezentacja ma sens. Thermomix bardzo dobrze robi rzeczy, które w takim domu są codziennością: gęste zupy z mięsem, gulasze i dania jednogarnkowe, sosy, ciasto na kluski i pierogi, większe porcje bez większego pilnowania. Nie robi natomiast kotleta i nie zastąpi patelni — a kotlet w Stalowej Woli jest ważniejszy niż smoothie i nie ma sensu udawać inaczej.",
        "Druga rzecz, która się tu liczy: jedzenie zabierane na zmianę. Gęsta zupa do termosu i pasta na kanapki powstają w jednym naczyniu i starczają na kilka dni.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Stalowej Woli?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli ktoś w domu pracuje na zmiany, napisz od razu, kiedy realnie jesteście w domu — umawiam się też przed południem w dni robocze.",
        "Podaj osiedle i piętro. Rozwadów to inny kierunek niż osiedla przy hucie, a przy sprzęcie w walizce informacja o windzie mi się przydaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Stalowej Woli"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla stalowowolskiej rodziny",
      paragraphs: [
        "Gdy w domu ktoś pracuje zmianowo, obiad musi umieć poczekać — czasem kilka godzin, czasem do następnego dnia. Gotuje zwykle jedna osoba, o porze niewygodnej dla siebie.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i czekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
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

  districtsHeading: "Do których osiedli Stalowej Woli dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — łącznie z Rozwadowem i Charzewicami.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Poświętne",
    "Piaski",
    "Hutnik",
    "Śródmieście",
    "Rozwadów",
    "Charzewice",
    "Fabryczne",
    "Zasanie",
    "Metalowiec",
    "Podlesie",
    "Swoły",
  ],

  nearbyHeading: "Poza Stalową Wolę też przyjadę",
  nearbyParagraphs: [
    "Nisko, Tarnobrzeg, Nowa Dęba, Rudnik nad Sanem i Leżajsk są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Nisko",
    "Tarnobrzeg",
    "Nowa Dęba",
    "Rudnik nad Sanem",
    "Leżajsk",
    "Nowa Sarzyna",
  ],

  about: blokOMnie("do Stalowej Woli", "w Stalowej Woli i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Stalowej Woli bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich osiedli jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Stalowej Woli"),
    {
      question: "U nas w domu je się konkretnie — czy to urządzenie nie jest do sałatek?",
      answer:
        "Nie jest i dobrze, że pytasz wprost. Gęste zupy z mięsem, gulasze, dania jednogarnkowe, sosy, ciasto na kluski i pierogi — to wszystko robi bardzo dobrze i w większych porcjach bez większego pilnowania. Nie usmaży natomiast kotleta i nie zastąpi patelni. Na prezentacji zrobimy to, co faktycznie u Was się je.",
    },
    {
      question: "Pracuję na zmiany — czy umówisz się przed południem?",
      answer:
        "Tak i robię to często. Powiedz przy ustalaniu terminu, kiedy realnie jesteś w domu, a dopasuję godzinę.",
    },
  ],

  geo: { lat: 50.5826, lng: 22.0533 },
};
