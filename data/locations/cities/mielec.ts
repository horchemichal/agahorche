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
 * MIELEC — miasto lotnicze. Zakłady lotnicze powstały tu jeszcze przed
 * wojną, w ramach Centralnego Okręgu Przemysłowego, a w 1995 roku
 * uruchomiono w Mielcu pierwszą w Polsce specjalną strefę ekonomiczną.
 *
 * KĄT: strefa ściągnęła tu ludzi z zewnątrz — z okolicznych powiatów,
 * z innych województw, na kontrakty i na stałe. To miasto, w którym
 * bardzo wiele osób nie ma rodziny na miejscu. Kuchennie oznacza to coś
 * konkretnego i rzadko nazywanego: NIE MA KOMU PRZYWIEŹĆ GARNKA ZUPY.
 * Nie ma babci pod ręką, nie ma niedzielnego obiadu u rodziców, a przy
 * chorobie dziecka nie ma kto pomóc. Wszystko jest na dwie osoby albo
 * na jedną.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — zakłady lotnicze w Mielcu powstały w ramach Centralnego Okręgu
 *   Przemysłowego w drugiej połowie lat 30. XX wieku,
 * — w 1995 roku utworzono w Mielcu pierwszą w Polsce specjalną strefę
 *   ekonomiczną,
 * — Mielec należy do Doliny Lotniczej, klastra przemysłu lotniczego
 *   Podkarpacia,
 * — miasto leży nad Wisłoką, w północno-zachodniej części województwa,
 * — Mielec sąsiaduje z Dębicą, Tarnobrzegiem, Kolbuszową i Nową Dębą.
 *
 * CZEGO NIE MA: liczby zatrudnionych w strefie, nazw firm, danych
 * o migracjach ani twierdzeń o zarobkach.
 */
export const MIELEC: CityContent = {
  slug: "mielec",
  h1: "Thermomix Mielec – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Mielec — prezentacja i cena",
  seoDescription:
    "Thermomix w Mielcu: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie osiedla. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mielec — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mielcu. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Mielca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Smoczce, Kusocińskiego, Lotnikach czy w Wojsławiu. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Mielec, wszystkie osiedla"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mielcu – jak wygląda prezentacja?",
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
      id: "bez-babci",
      heading: "Miasto, w którym wielu nie ma rodziny na miejscu",
      paragraphs: [
        "Mielec od lat trzydziestych jest miastem lotniczym, a od 1995 roku ma pierwszą w Polsce specjalną strefę ekonomiczną. Strefa ściągnęła tu ludzi z zewnątrz — z okolicznych powiatów, z innych województw, na kontrakt i na stałe. W bardzo wielu mieleckich mieszkaniach nie mieszka więc rodzina z pokoleniami, tylko dwoje ludzi, którzy przyjechali za pracą.",
        "To zmienia kuchnię bardziej, niż się wydaje, i prawie nikt o tym nie pisze. Nie ma babci pod ręką. Nie ma niedzielnego obiadu u rodziców, po którym wraca się z zapasem na środę. Gdy dziecko zachoruje albo tydzień jest ciężki, nie ma kto przywieźć garnka zupy. Wszystko jest na dwie osoby, a często na jedną.",
        "Thermomix nie zastąpi rodziny i nie będę udawać, że zastąpi. Robi natomiast rzecz, która przy takim układzie waży sporo: pozwala mieć jedzenie ugotowane wcześniej, bez poświęcania na to wolnego wieczoru. Większa porcja nie kosztuje więcej pilnowania, więc niedzielne gotowanie na trzy dni przestaje być całym dniem w kuchni — a to jest właśnie ten zapas, którego nikt tu za Was nie zrobi.",
        "Druga rzecz, praktyczna przy pracy zmianowej w strefie: obiad może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mielcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli pracujesz zmianowo, napisz od razu, kiedy realnie jesteś w domu — umawiam się też przed południem w dni robocze.",
        "Podaj osiedle i piętro. Przy sprzęcie w walizce informacja o windzie naprawdę mi się przydaje, a na cenę spotkania nie wpływa.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mielcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mieleckiej rodziny",
      paragraphs: [
        "Młoda rodzina bez babci na miejscu ma jeden bardzo konkretny problem: wszystko musi zmieścić się w wieczorze dwojga zmęczonych ludzi, a jeśli jedno wypadnie, drugie zostaje ze wszystkim.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się dzieckiem, a wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, blender i sitko.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu i w tym samym czasie.",
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

  districtsHeading: "Do których osiedli Mielca dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Smoczka",
    "Kusocińskiego",
    "Lotników",
    "Kilińskiego",
    "Niepodległości",
    "Borek",
    "Wojsław",
    "Rzochów",
    "Mościska",
    "Cyranka",
    "Dziubków",
  ],

  nearbyHeading: "Poza Mielec też przyjadę",
  nearbyParagraphs: [
    "Dębica, Tarnobrzeg, Nowa Dęba, Kolbuszowa i okoliczne gminy są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Dębica",
    "Tarnobrzeg",
    "Nowa Dęba",
    "Kolbuszowa",
    "Stalowa Wola",
    "Ropczyce",
  ],

  about: blokOMnie("do Mielca", "w Mielcu i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mielca bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich osiedli Mielca jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Mielcu"),
    {
      question: "Gotujemy we dwoje i nie mamy nikogo w pobliżu — czy to ma sens?",
      answer:
        "Często ma, ale z innego powodu, niż mówią reklamy. Nie chodzi o wielkie porcje dla rodziny, tylko o to, żeby dało się ugotować na kilka dni bez poświęcania całego wolnego wieczoru — bo nikt nie przywiezie Wam zupy, gdy tydzień będzie ciężki. Na prezentacji policzymy to na Waszym tygodniu, a jeśli uznam, że nic Wam to nie zmieni, powiem to wprost.",
    },
    {
      question: "Pracuję zmianowo w strefie — czy umówisz się przed południem?",
      answer:
        "Tak i robię to często. Powiedz przy ustalaniu terminu, kiedy realnie jesteś w domu, a dopasuję godzinę.",
    },
  ],

  geo: { lat: 50.2872, lng: 21.4239 },
};
