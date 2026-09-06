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
 * WODZISŁAW ŚLĄSKI — dawne miasto książęce z zachowanym rynkiem,
 * otoczone pierścieniem mniejszych miast górniczych: Radlin, Rydułtowy,
 * Pszów, Marklowice. Siedziba powiatu wodzisławskiego, blisko granicy
 * z Czechami.
 *
 * KĄT: to jedyne miasto tej fali, gdzie kątem jest WYPIEK ODDAWANY DALEJ.
 * W tej części Śląska ciasto to nie jest tylko deser — to rzecz, którą
 * się roznosi: kołocz przed weselem, blacha do sąsiadki, coś na kościelną
 * okazję, coś do pracy. Kto piecze, ten piecze DUŻO i regularnie, a to
 * zupełnie inne wymaganie niż jedna szarlotka w niedzielę. Ciasto
 * drożdżowe wyrabiane ręcznie przy takich ilościach jest po prostu
 * ciężką pracą fizyczną.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Wodzisław Śląski był miastem książęcym i ma zachowany historyczny
 *   rynek z ratuszem,
 * — miasto jest siedzibą powiatu wodzisławskiego, do którego należą m.in.
 *   Radlin, Rydułtowy, Pszów, Marklowice, Gorzyce i Godów,
 * — kołocz śląski (kołacz) jest zarejestrowanym produktem regionalnym
 *   i tradycyjnie rozdaje się go gościom oraz sąsiadom przed weselem,
 * — okolica leży blisko granicy z Czechami,
 * — dzielnice takie jak Kokoszyce, Jedłownik, Zawada czy Turzyczka były
 *   wcześniej samodzielnymi miejscowościami.
 *
 * CZEGO NIE MA: przepisu na kołocz podanego jako „jedyny właściwy",
 * twierdzeń o tym, jak konkretna rodzina obchodzi wesele, danych
 * o górnictwie.
 */
export const WODZISLAW_SLASKI: CityContent = {
  slug: "wodzislaw-slaski",
  h1: "Thermomix Wodzisław Śląski – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Wodzisław Śląski — prezentacja i cena",
  seoDescription:
    "Thermomix w Wodzisławiu Śląskim: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wodzisław Śląski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wodzisławiu i w całym powiecie. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Wodzisławia Śląskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Piastowie, w Jedłowniku, Kokoszycach czy Zawadzie. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Wodzisław i cały powiat wodzisławski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wodzisławiu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś, co u Was w domu robi się od lat. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "ciasto-ktore-sie-roznosi",
      heading: "Ciasto, które się roznosi",
      paragraphs: [
        "W tej części Śląska ciasto nie jest tylko deserem po obiedzie. Kołocz rozdaje się przed weselem, blachę zanosi się sąsiadce, coś piecze się na kościelną okazję, coś zabiera do pracy. Kto tu piecze, ten zwykle piecze dużo i regularnie — a to zupełnie inne zadanie niż jedna szarlotka w niedzielę.",
        "I stąd bierze się rzecz, o której mało kto mówi wprost: wyrabianie drożdżowego przy takich ilościach jest po prostu ciężką pracą fizyczną. Kilogram mąki, wyrabianie do gładkości, potem drugie po wyrośnięciu — po dwóch blachach ręce naprawdę wiedzą, że pracowały. Bardzo wiele osób ogranicza pieczenie właśnie z tego powodu, a nie dlatego, że brakuje im chęci.",
        "Thermomix zdejmuje dokładnie tę część. Ciasto wyrabia się w naczyniu, bez rąk i bez obsypanego blatu, a Ty w tym czasie robisz nadzienie. Kruszonka, masa serowa, makowa — wszystko w tej samej misie, jedno po drugim. To nie zmienia przepisu i nie zmienia smaku; zmienia to, czy w sobotę stać Cię na trzy blachy zamiast jednej.",
        "Uczciwie: pieczenie zostaje w piekarniku i urządzenie tego nie zastąpi. Odpowiada za wyrobienie i za masy, nie za wypiek.",
      ],
    },
    {
      id: "powiat",
      heading: "Cały powiat wodzisławski",
      paragraphs: [
        "Jeżdżę też do Radlina, Rydułtów, Pszowa, Marklowic, Gorzyc, Godowa, Lubomi i Mszany. Wodzisław jest środkiem tego pierścienia miasteczek, więc jedna trasa spokojnie obsługuje dwa spotkania w jeden wieczór.",
        "Przy umawianiu wystarczy podać miejscowość. Dojazd jest wszędzie bezpłatny i wpływa tylko na godzinę, którą mogę zaproponować.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wodzisławiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy zrobili ciasto — powiedz o tym wcześniej. Wyrabianie trwa swoje, więc wtedy planuję spotkanie inaczej i przywożę składniki pod konkretny wypiek.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wodzisławiu Śląskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wodzisławskiej rodziny",
      paragraphs: [
        "Na co dzień wygląda to jak wszędzie w tej okolicy: praca w Wodzisławiu, Jastrzębiu albo Rybniku, powroty o różnych porach i obiad rozłożony na kilka tur.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
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

  districtsHeading: "Do których dzielnic Wodzisławia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do dzielnic, które wyglądają jak osobne wsie.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Piastów",
    "XXX-lecia",
    "Dąbrówki",
    "Jedłownik",
    "Kokoszyce",
    "Zawada",
    "Radlin II",
    "Turzyczka",
    "Wilchwy",
    "Karkoszka",
  ],

  nearbyHeading: "Cały powiat wodzisławski",
  nearbyParagraphs: [
    "Radlin, Rydułtowy, Pszów, Marklowice, Gorzyce, Godów, Lubomia i Mszana są tuż obok — jedna trasa, dwa spotkania w jeden wieczór.",
  ],
  nearbyTowns: [
    "Radlin",
    "Rydułtowy",
    "Pszów",
    "Marklowice",
    "Gorzyce",
    "Godów",
    "Jastrzębie-Zdrój",
    "Rybnik",
    "Racibórz",
  ],

  about: blokOMnie("do Wodzisławia", "w Wodzisławiu i całym powiecie", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wodzisławia Śląskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do całego powiatu wodzisławskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wodzisławiu Śląskim"),
    {
      question: "Piekę dużo ciasta — czy Thermomix realnie to ułatwi?",
      answer:
        "Ułatwi wyrabianie i przygotowanie mas, czyli tę część, która najbardziej męczy. Ciasto wyrabia się w naczyniu, bez rąk i bez obsypanego blatu, a kruszonkę czy masę serową robisz w tej samej misie. Nie zastąpi piekarnika i nie zmieni przepisu — zmieni tylko to, ile blach jesteś w stanie zrobić jednego popołudnia.",
    },
    {
      question: "Czy misa pomieści ciasto na dużą blachę?",
      answer:
        "Ma swoją pojemność, więc przy naprawdę dużych ilościach robi się to na dwa razy — ale bez wysiłku, bo wyrabia urządzenie, a nie Ty. Na prezentacji policzymy to na Twoim przepisie, żebyś wiedziała dokładnie, jak to u Ciebie wyjdzie.",
    },
  ],

  geo: { lat: 50.0022, lng: 18.4589 },
};
