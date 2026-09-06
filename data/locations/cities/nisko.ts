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
 * NISKO — starsze miasto tuż obok Stalowej Woli, którą zbudowano od zera
 * w latach 30. na sąsiednich gruntach. Dwa organizmy, jeden rynek pracy:
 * bardzo wiele osób mieszka w Nisku, a pracuje w Stalowej.
 *
 * KĄT: Nisko jest cichszą połową tej pary — i to nie jest wada, tylko
 * powód, dla którego ludzie tu zostają. Kuchennie oznacza to układ
 * odwrotny niż w mieście przemysłowym: dom jest miejscem odpoczynku,
 * a nie zapleczem zakładu. Rozmowa nie idzie więc o wydajności, tylko
 * o tym, żeby wieczór po pracy naprawdę był wieczorem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Nisko otrzymało prawa miejskie przed powstaniem Stalowej Woli, która
 *   została zbudowana od podstaw w drugiej połowie lat 30. XX wieku
 *   w ramach Centralnego Okręgu Przemysłowego,
 * — oba miasta sąsiadują ze sobą i tworzą wspólny rynek pracy,
 * — Nisko leży nad Sanem, w otoczeniu Puszczy Sandomierskiej,
 * — miasto jest siedzibą powiatu niżańskiego (m.in. Rudnik nad Sanem,
 *   Ulanów, Jeżowe, Krzeszów, Jarocin, Harasiuki),
 * — dzielnice i osiedla: Podwolina, Malce, Barce, Racławice, Nowosielec,
 *   Zarzecze.
 *
 * CZEGO NIE MA: danych o dojazdach do pracy, statystyk zatrudnienia,
 * dat podanych precyzyjnie.
 */
export const NISKO: CityContent = {
  slug: "nisko",
  h1: "Thermomix Nisko – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Nisko — prezentacja i cena",
  seoDescription:
    "Thermomix w Nisku: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat niżański. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nisko — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nisku i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Niska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Podwolinie, Malcach czy w Racławicach. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Nisko i cały powiat niżański"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nisku – jak wygląda prezentacja?",
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
      id: "cichsza-polowa",
      heading: "Cichsza połowa pary — i co to znaczy w kuchni",
      paragraphs: [
        "Nisko jest starsze od Stalowej Woli, którą zbudowano od zera na sąsiednich gruntach. Dziś to dwa organizmy i jeden rynek pracy: bardzo wiele osób mieszka tutaj, a pracuje kilka kilometrów dalej, w zakładach.",
        "Ludzie zostają w Nisku właśnie dlatego, że jest ciszej — bliżej Sanu i lasu, mniej blokowisk, więcej domów. Dom jest tu miejscem odpoczynku, a nie przedłużeniem zakładu, i to zmienia rozmowę o kuchni.",
        "Bo w takim układzie nie chodzi o wydajność. Chodzi o to, żeby wieczór po pracy naprawdę był wieczorem, a nie drugą zmianą przy garnku. Danie, które gotuje się z ustawioną temperaturą i mieszaniem, nie wymaga stania przy kuchence — a jedno naczynie zamiast trzech oznacza, że po kolacji nie ma pół godziny zmywania.",
        "Jeśli ktoś w domu pracuje zmianowo, dochodzi druga rzecz: obiad, który ma poczekać kilka godzin i nie zrobić się przy tym niejadalny. Odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nisku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli ktoś w domu pracuje na zmiany, napisz od razu, kiedy realnie jesteście w domu — umawiam się też przed południem w dni robocze.",
        "Podaj dzielnicę albo miejscowość. Jeżdżę po całym powiecie niżańskim, a od kierunku zależy tylko godzina spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nisku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla niżańskiej rodziny",
      paragraphs: [
        "W domach z ogrodem gotuje się większe porcje i częściej z własnych produktów, a obiad bywa wspólnym posiłkiem. Przygotowuje go zwykle ta sama osoba — po pracy albo przed nią.",
        "Thermomix zdejmuje z tego stanie przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których części Niska dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Podwolina",
    "Malce",
    "Barce",
    "Racławice",
    "Nowosielec",
    "Zarzecze",
    "Warchoły",
    "Osiedle Tysiąclecia",
  ],

  nearbyHeading: "Cały powiat niżański i okolice",
  nearbyParagraphs: [
    "Rudnik nad Sanem, Ulanów, Jeżowe, Krzeszów, Jarocin i Harasiuki są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Stalowej Woli i Leżajska.",
  ],
  nearbyTowns: [
    "Stalowa Wola",
    "Rudnik nad Sanem",
    "Leżajsk",
    "Nowa Sarzyna",
    "Tarnobrzeg",
    "Nowa Dęba",
  ],

  about: blokOMnie("do Niska", "w Nisku i całym powiecie niżańskim", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Niska bez dodatkowej opłaty?",
      answer:
        "Tak, do Niska i do całego powiatu niżańskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nisku"),
    {
      question: "Pracuję na zmiany w Stalowej Woli — czy umówisz się przed południem?",
      answer:
        "Tak i robię to często. Powiedz przy ustalaniu terminu, kiedy realnie jesteś w domu, a dopasuję godzinę — także w dni robocze przed południem.",
    },
    {
      question: "Czy przyjedziesz do Ulanowa albo Krzeszowa?",
      answer:
        "Tak, jeżdżę po całym powiecie. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 50.5197, lng: 22.1400 },
};
