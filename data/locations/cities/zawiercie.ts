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
 * ZAWIERCIE — miasto na Jurze Krakowsko-Częstochowskiej, które wyrosło
 * nie z węgla, tylko z PRZEMYSŁU WŁÓKIENNICZEGO i hutnictwa. Wielka
 * przędzalnia TAZ była tu przez dziesięciolecia największym pracodawcą.
 *
 * KĄT: to ma konsekwencję, o której się nie mówi, a która jest tu
 * naprawdę inna niż w miastach górniczych. W kopalni pracowali mężczyźni;
 * w przędzalni pracowały KOBIETY, i to masowo. W Zawierciu praca zawodowa
 * kobiet nie była wyjątkiem od pokoleń — więc gotowanie nigdy nie mogło
 * być tu założone jako czyjeś zajęcie na cały dzień. Kuchnia musiała się
 * mieścić w wieczorze i tak jest do dziś.
 *
 * Uwaga na ton: to jest obserwacja historyczna o mieście, nie teza
 * o tym, kto w czyim domu powinien gotować.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Zawiercie rozwinęło się dzięki przemysłowi włókienniczemu (Towarzystwo
 *   Akcyjne Zawiercie) i hutnictwu, a nie górnictwu węgla,
 * — przemysł włókienniczy zatrudniał na dużą skalę kobiety,
 * — miasto leży na Jurze Krakowsko-Częstochowskiej, w pobliżu zamku
 *   w Ogrodzieńcu i Szlaku Orlich Gniazd,
 * — Zawiercie jest siedzibą powiatu zawierciańskiego,
 * — przez miasto przepływa Warta, której źródła znajdują się w pobliskim
 *   Kromołowie — dziś dzielnicy Zawiercia.
 *
 * CZEGO NIE MA: liczby zatrudnionych w przędzalni, dat jej działania
 * podanych precyzyjnie, twierdzeń o strukturze dzisiejszego zatrudnienia.
 */
export const ZAWIERCIE: CityContent = {
  slug: "zawiercie",
  h1: "Thermomix Zawiercie – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Zawiercie — prezentacja i cena",
  seoDescription:
    "Thermomix w Zawierciu: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat zawierciański. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zawiercie — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zawierciu. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Zawiercia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Blanowicach, w Kromołowie czy Marciszowie. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Zawiercie i cały powiat zawierciański"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zawierciu – jak wygląda prezentacja?",
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
      id: "przedzalnia",
      heading: "Miasto przędzalni — czyli kuchnia zawsze musiała mieścić się w wieczorze",
      paragraphs: [
        "Zawiercie nie wyrosło z węgla, tylko z włókiennictwa i hutnictwa. Przez dziesięciolecia największym pracodawcą była tu wielka przędzalnia, a przemysł włókienniczy zatrudniał na masową skalę kobiety — inaczej niż kopalnie w miastach dalej na zachód.",
        "To pozornie drobna różnica, ale zostawia ślad na całych pokoleniach. W Zawierciu praca zawodowa kobiet nie była wyjątkiem ani nowinką; była normą od dawna. A skoro tak, to gotowanie nigdy nie mogło być tu założone jako czyjeś zajęcie na cały dzień. Musiało zmieścić się w wieczorze — i tak zostało do dziś.",
        "Dlatego na prezentacji w Zawierciu nie zaczynam od pokazywania, ile rzeczy urządzenie potrafi. Zaczynam od pytania, ile realnie macie czasu wieczorem i co w tym czasie musi powstać. Dopiero to pokazuje, czy Thermomix cokolwiek u Was zmienia — a jeśli nie, powiem to wprost.",
      ],
    },
    {
      id: "jura",
      heading: "Jura tuż za miastem",
      paragraphs: [
        "Zawiercie leży na Jurze Krakowsko-Częstochowskiej, a zamek w Ogrodzieńcu jest stąd kilkanaście minut. W praktyce znaczy to, że w weekendy pół miasta jest na dworze, a w domach częściej niż gdzie indziej pojawiają się goście z Katowic czy Sosnowca.",
        "Kuchennie sprowadza się to do dwóch prostych rzeczy: jedzenia, które da się zabrać ze sobą, i posiłku dla większej liczby osób niż zwykle. Zupa krem do termosu i pasta kanapkowa powstają w jednym naczyniu, a większa porcja obiadu nie wymaga większego pilnowania — może być gotowa wcześniej i poczekać.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zawierciu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość — Kromołów i Marciszów to inny kierunek niż centrum, a od tego zależy tylko godzina spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zawierciu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zawierciańskiej rodziny",
      paragraphs: [
        "Wąskie gardło jest tu bardzo konkretne: okno między powrotem z pracy a porą, o której dzieci powinny już jeść. Wszystko musi się w nim zmieścić razem z zakupami, lekcjami i całą resztą.",
        "Thermomix pomaga w tym oknie przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, blender i sitko.",
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

  districtsHeading: "Do których dzielnic Zawiercia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do dzielnic, które były kiedyś osobnymi wsiami.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stary Rynek",
    "Blanowice",
    "Kromołów",
    "Marciszów",
    "Bzów",
    "Karlin",
    "Skarżyce",
    "Pomrożyce",
    "Borowe Pole",
    "Warty",
    "Argentyna",
  ],

  nearbyHeading: "Cały powiat zawierciański i Jura",
  nearbyParagraphs: [
    "Ogrodzieniec, Poręba, Łazy, Włodowice, Kroczyce, Pilica i Szczekociny są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Ogrodzieniec",
    "Poręba",
    "Łazy",
    "Włodowice",
    "Kroczyce",
    "Myszków",
    "Dąbrowa Górnicza",
    "Olkusz",
  ],

  about: blokOMnie("do Zawiercia", "w Zawierciu i całym powiecie zawierciańskim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zawiercia bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do całego powiatu zawierciańskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zawierciu"),
    {
      question: "Wracam z pracy późno i mam godzinę na wszystko — czy to wystarczy?",
      answer:
        "Zwykle tak, ale wolę pokazać to na konkretach niż obiecywać. Na prezentacji ugotujemy danie, które faktycznie robisz w tygodniu, i zobaczysz na zegarku, ile z tej godziny zostaje. To uczciwsza odpowiedź niż jakakolwiek liczba, którą mogłabym tu napisać.",
    },
    {
      question: "Czy przyjedziesz do Ogrodzieńca albo Kroczyc?",
      answer:
        "Tak, jeżdżę po całym powiecie zawierciańskim. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz.",
    },
  ],

  geo: { lat: 50.4879, lng: 19.4189 },
};
