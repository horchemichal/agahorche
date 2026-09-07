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
 * IŁAWA — miasto nad Jeziorakiem, najdłuższym jeziorem w Polsce,
 * i duży węzeł kolejowy. Miejsce, w którym wszystko zależy od tego,
 * czy zdąży się na czas.
 *
 * KĄT: nie ucz się na wigilii. Kupowanie sprzętu tuż przed wielkim
 * gotowaniem i próbowanie nowego urządzenia w dniu, w którym najbardziej
 * zależy, żeby wyszło. Błąd popełniany masowo, a nikt o nim nie pisze,
 * bo sprzedaż przed świętami jest dla sprzedawcy wygodna.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — nowy sprzęt w dniu wielkiego gotowania to najgorszy możliwy moment
 *   na naukę i lepiej wtedy zrobić wszystko po staremu,
 * — realna pomoc jest w DNIACH PRZED, nie w samym dniu: to wtedy robi
 *   się ciasta, pasty, farsze i to daje się rozłożyć,
 * — jeśli kupujecie przed świętami, warto mieć kilka tygodni na spokojne
 *   przećwiczenie zwykłych dań, zanim przyjdzie ta jedna kolacja,
 * — i uczciwie: sprzedawcy lubią sprzedaż przedświąteczną, więc to
 *   zdanie jest wbrew mojemu interesowi i właśnie dlatego je piszę.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH ŚWIĄTECZNYCH PRZEPISÓW Z USTAWIENIAMI ani obietnic, ile
 *   czasu zajmie konkretna potrawa.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I ODGRZEWANIU (bezpieczeństwo
 *   żywności — zasada ze Skierniewic).
 * — ŻADNYCH DEKLARACJI O TERMINACH DOSTAWY przed świętami.
 * — ŻADNYCH TWIERDZEŃ O POJEMNOŚCI — to temat Gniezna.
 *
 * ROZGRANICZENIE. Toruń mówi o błędach pierwszego tygodnia w ogóle,
 * Gniezno o pojemności przy dużych uroczystościach, Żyrardów o zapale,
 * który opada. Tutaj chodzi o MOMENT ZAKUPU względem wielkiego
 * gotowania i o naukę pod presją.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Iława leży nad Jeziorakiem, najdłuższym jeziorem w Polsce,
 *   i jest węzłem kolejowym.
 */
export const ILAWA: CityContent = {
  slug: "ilawa",
  h1: "Thermomix Iława – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Iława — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Iławie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Iława — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Iławie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Iławy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Iława i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nowego sprzętu nie warto poznawać w dniu, w którym musi wyjść.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Iławie – jak wygląda prezentacja?",
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
      id: "nie-ucz-sie-przed-swietami",
      heading: "Miasto rozkładów i przesiadek — i rada, żeby nie uczyć się na wigilii",
      paragraphs: [
        "Iława leży nad Jeziorakiem, ale w codziennym życiu jest przede wszystkim węzłem: miejscem, w którym wszystko zależy od tego, czy się zdąży i czy przesiadka się zgra. Wykorzystam to do rady, która jest wprost wbrew mojemu interesowi, i właśnie dlatego chcę ją napisać: nie poznawajcie nowego sprzętu w dniu, w którym najbardziej Wam zależy, żeby wyszło.",
        "Wielkie gotowanie — wigilia, komunia, urodziny na dwadzieścia osób — to najgorszy możliwy moment na naukę. Nie dlatego, że urządzenie jest trudne, tylko dlatego, że wtedy w kuchni nie ma miejsca na żadną niespodziankę. Jeśli macie sprzęt od tygodnia, a przed sobą taki dzień, zróbcie wszystko po staremu. Naprawdę.",
        "Prawdziwa pomoc jest gdzie indziej i to warto wiedzieć: nie w samym dniu, tylko w dniach przed nim. To wtedy powstają ciasta, pasty, farsze i te wszystkie rzeczy, które da się porozkładać na kilka wieczorów. Ten etap jest zwykle najbardziej męczący i to on daje się skrócić — dzień główny i tak polega głównie na piekarniku i na tym, żeby wszystko trafiło na stół równocześnie.",
        "Stąd konkretny wniosek dla kogoś, kto myśli o zakupie przed świętami. Warto mieć kilka tygodni na spokojne przećwiczenie zwykłych dań: zupy, sosu, ciasta w środę o osiemnastej, bez gości i bez presji. Wtedy przy dużym gotowaniu sięgacie po rzecz, którą już znacie, a nie po nowość, którą trzeba rozgryzać między jednym telefonem a drugim.",
        "Nie podam Wam tutaj świątecznych przepisów z ustawieniami ani nie obiecam, ile zajmie konkretna potrawa — to są rzeczy, których nie wypisuję z pamięci. Nie doradzę też, co i jak przechowywać po świętach, bo w tej dziedzinie zła rada realnie szkodzi, a ja nie jestem od tego. I nie będę deklarować terminów dostawy przed świętami, bo to nie zależy ode mnie.",
        "Wiem, że sprzedaż przedświąteczna jest dla sprzedawcy wygodna i że wiele osób właśnie wtedy się decyduje. Powiem mimo to: jeśli zostały dwa tygodnie, spokojnie umówmy spotkanie po świętach. Nic mi się nie stanie, a Wy nie będziecie się uczyć nowego urządzenia w najgorszym możliwym tygodniu roku.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Iławie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli szykuje się u Was duża uroczystość, powiedzcie mi kiedy — doradzę uczciwie, czy warto się z tym spieszyć, czy spotkać się później.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Iławie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla iławskiej rodziny",
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

  districtsHeading: "Do których części Iławy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Podleśna",
    "Lipowy Dwór",
    "Osiedle Ostródzkie",
    "Gajerek",
    "Piaskowa",
    "Kwidzyńska",
  ],

  nearbyHeading: "Poza Iławę też przyjadę",
  nearbyParagraphs: [
    "Ostróda, Susz, Lubawa i Kisielice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ostróda", "Susz", "Lubawa", "Kisielice", "Nowe Miasto Lubawskie", "Kwidzyn"],

  about: blokOMnie("do Iławy", "w Iławie i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Iławy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Iławie"),
    {
      question: "Chcę kupić przed świętami. Zdążę się nauczyć?",
      answer:
        "Powiem wbrew własnemu interesowi: wielkie gotowanie to najgorszy moment na naukę nowego sprzętu. Jeśli macie go od tygodnia, a przed sobą taki dzień, zróbcie wszystko po staremu. Warto mieć kilka tygodni na spokojne przećwiczenie zwykłych dań — bez gości i bez presji.",
    },
    {
      question: "To w czym pomaga przy dużej uroczystości?",
      answer:
        "W dniach przed nią, nie w samym dniu. To wtedy powstają ciasta, pasty i farsze, które da się porozkładać na kilka wieczorów, i ten etap jest zwykle najbardziej męczący. Dzień główny i tak polega głównie na piekarniku i na zgraniu wszystkiego w czasie.",
    },
  ],

  geo: { lat: 53.5964, lng: 19.5697 },
};
