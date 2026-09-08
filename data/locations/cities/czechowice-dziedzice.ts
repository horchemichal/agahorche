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
 * CZECHOWICE-DZIEDZICE — dwa miasta w jednej nazwie, połączone w 1950 roku.
 * Dziedzice to przede wszystkim kolej: duży węzeł na trasie w stronę
 * Bielska, Katowic i granicy. Czechowice to rafineria i tereny nadwiślańskie
 * ze stawami.
 *
 * KĄT: kolejowy węzeł oznacza coś bardzo konkretnego dla kuchni —
 * WYJAZD O NIELUDZKIEJ PORZE. Pociąg o piątej rano to śniadanie, którego
 * nikt nie ma ochoty robić, i jedzenie pakowane poprzedniego wieczoru.
 * To zupełnie inny problem niż obiad dla rodziny: nie „co ugotować", tylko
 * „co przygotować wieczorem, żeby rano tylko wziąć".
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Czechowice-Dziedzice powstały z połączenia Czechowic i Dziedzic
 *   w 1950 roku,
 * — Dziedzice są ważnym węzłem kolejowym w południowej Polsce,
 * — w mieście działa rafineria, jeden z większych zakładów regionu,
 * — miasto leży w powiecie bielskim, między Bielskiem-Białą a Pszczyną,
 *   w pobliżu doliny Wisły i terenów stawowych,
 * — sołectwa i dzielnice: Zabrzeg, Ligota, Bronów.
 *
 * CZEGO NIE MA: rozkładów jazdy, danych o przewozach i o rafinerii,
 * twierdzeń o liczbie dojeżdżających.
 */
export const CZECHOWICE_DZIEDZICE: CityContent = {
  slug: "czechowice-dziedzice",
  h1: "Thermomix Czechowice-Dziedzice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czechowice-Dziedzice — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Czechowicach-Dziedzicach: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%, terminy też wcześnie rano. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czechowice-Dziedzice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czechowicach-Dziedzicach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Czechowic-Dziedzic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Czechowicach, Dziedzicach, Zabrzegu czy Ligocie. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("całe miasto i sołectwa"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czechowicach-Dziedzicach – jak wygląda prezentacja?",
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
      id: "poranek",
      heading: "Pociąg o piątej — czyli kuchnia, która musi zdążyć poprzedniego wieczoru",
      paragraphs: [
        "Dziedzice to węzeł kolejowy i w bardzo wielu domach tutaj dzień zaczyna się od pociągu — do Bielska, do Katowic, dalej. Wyjście z domu przed świtem nie jest tu wyjątkiem, tylko rozkładem jazdy.",
        "Kuchennie to zupełnie inny problem niż obiad dla rodziny, o którym pisze każdy poradnik. Nikt nie gotuje o wpół do piątej rano. Pytanie brzmi: co przygotować wieczorem, żeby rano tylko wziąć — i żeby po czterech godzinach w torbie nadal nadawało się do jedzenia.",
        "Thermomix trafia tu w kilka bardzo konkretnych rzeczy. Pasty kanapkowe z jajek, twarogu albo warzyw — kilkanaście sekund, jedno naczynie, starczają na kilka dni. Gęste zupy do termosu, gotowe wieczorem. Ciasto drożdżowe wyrobione po kolacji, upieczone rano albo tego samego wieczoru. Owsianka albo koktajl na śniadanie, które da się zrobić w pięć minut bez otwierania trzech szafek.",
        "Powiedz przy umawianiu, jak wygląda Wasz poranek. Zrobimy na prezentacji dokładnie to, co realnie Wam się przyda, a nie efektowną zupę, której nigdy nie ugotujecie.",
      ],
    },
    {
      id: "dwa-miasta",
      heading: "Dwa miasta w jednej nazwie",
      paragraphs: [
        "Czechowice i Dziedzice połączono w jedno pierwszego stycznia 1951 roku, a wspólną nazwę miasto nosi od 1958 i do dziś są to dwa różne miejsca w jednych granicach: kolej i przemysł po jednej stronie, tereny nadwiślańskie ze stawami po drugiej. Sołectwa takie jak Zabrzeg czy Ligota wciąż mają swój charakter.",
        "Praktycznie oznacza to dla mnie tyle, że przy umawianiu proszę o nazwę dzielnicy albo sołectwa. Wpływa to na porę spotkania, którą mogę zaproponować — na cenę nie wpływa nigdy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czechowicach-Dziedzicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli wyjeżdżasz z domu bardzo wcześnie, powiedz o tym — umawiam się także w weekendy i wieczorami, żeby nie odbierać Ci jedynej wolnej soboty.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czechowicach-Dziedzicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla czechowickiej rodziny",
      paragraphs: [
        "Gdy jedna osoba wychodzi przed świtem, a druga wraca późno, obiad rzadko jest wspólnym wydarzeniem. Częściej jest czymś, co musi poczekać i przetrwać odgrzanie.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
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

  districtsHeading: "Do których dzielnic i sołectw dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo sołectwo. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Czechowice",
    "Dziedzice",
    "Zabrzeg",
    "Ligota",
    "Bronów",
    "Lipowiec",
    "Osiedle Północ",
    "Barbara",
    "Renardowice",
  ],

  nearbyHeading: "Poza miasto też przyjadę",
  nearbyParagraphs: [
    "Bielsko-Biała, Pszczyna, Goczałkowice-Zdrój, Bestwina, Jasienica i Wilamowice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Bielsko-Biała",
    "Pszczyna",
    "Goczałkowice-Zdrój",
    "Bestwina",
    "Jasienica",
    "Wilamowice",
    "Kobiór",
  ],

  about: blokOMnie("do Czechowic-Dziedzic", "w Czechowicach i okolicy", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czechowic-Dziedzic bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Czechowicach-Dziedzicach"),
    {
      question: "Wychodzę z domu przed piątą — czy Thermomix cokolwiek tu zmieni?",
      answer:
        "Nie rano, bo o tej porze nikt nie gotuje. Zmienia natomiast wieczór poprzedniego dnia: pasty kanapkowe na kilka dni, gęsta zupa do termosu i ciasto wyrobione po kolacji powstają w jednym naczyniu i w kilkanaście minut. To jest ta część, którą realnie da się przesunąć.",
    },
    {
      question: "Czy możemy umówić się w weekend?",
      answer:
        "Tak, w soboty i niedziele też jeżdżę. Powiedz przy ustalaniu terminu, kiedy Wam pasuje — dopasuję się do Waszego rozkładu, nie odwrotnie.",
    },
  ],

  geo: { lat: 49.9147, lng: 19.0006 },
};
