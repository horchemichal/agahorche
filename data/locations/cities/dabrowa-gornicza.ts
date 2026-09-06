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
 * DĄBROWA GÓRNICZA — miasto ogromne powierzchniowo i bardzo nierówne:
 * wielka huta i bloki po jednej stronie, jeziora Pogoria i dzielnice
 * o charakterze wiejskim po drugiej. Z Centrum do Tucznawy jedzie się
 * dłużej niż z Centrum do Sosnowca.
 *
 * KĄT: to jest miasto dwóch trybów życia w jednych granicach — praca
 * zmianowa w hucie i weekend nad wodą kilkaset metrów dalej. Kuchennie
 * daje to konkretną parę potrzeb: jedzenie, które ma poczekać na kogoś
 * po zmianie, i jedzenie, które da się zabrać nad Pogorię.
 *
 * Tak jak Sosnowiec, Dąbrowa leży w ZAGŁĘBIU, nie na Śląsku — i tak samo
 * jak tam nie wolno tego mylić.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Dąbrowa Górnicza jest jednym z największych powierzchniowo miast
 *   w Polsce, a znaczną część jej obszaru zajmują lasy i tereny otwarte,
 * — leży w Zagłębiu Dąbrowskim, nie na Górnym Śląsku,
 * — zespół jezior Pogoria to zbiorniki powstałe po eksploatacji piasku,
 *   dziś tereny rekreacyjne,
 * — w mieście działa duża huta, jeden z największych zakładów
 *   metalurgicznych w kraju,
 * — dzielnice takie jak Ząbkowice, Strzemieszyce czy Okradzionów były
 *   dawniej samodzielnymi miejscowościami.
 *
 * CZEGO NIE MA: powierzchni miasta i jezior podanych jako fakt, liczby
 * zatrudnionych w hucie, danych o produkcji.
 */
export const DABROWA_GORNICZA: CityContent = {
  slug: "dabrowa-gornicza",
  h1: "Thermomix Dąbrowa Górnicza – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Dąbrowa Górnicza — prezentacja i cena",
  seoDescription:
    "Thermomix w Dąbrowie Górniczej: bezpłatna prezentacja TM7 u Ciebie w kuchni, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dąbrowa Górnicza — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dąbrowie Górniczej. Prezentacja bezpłatna, terminy też dla pracujących zmianowo.",

  lead:
    "Przyjeżdżam do Dąbrowy Górniczej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Centrum, na Gołonogu, w Ząbkowicach czy w Strzemieszycach. Prezentacja i dojazd są bezpłatne, także do najdalszych dzielnic.",

  highlights: highlightyStandardowe("cała Dąbrowa, wszystkie dzielnice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dąbrowie Górniczej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "huta-i-jeziora",
      heading: "Zmiana w hucie i weekend nad Pogorią — w jednym mieście",
      paragraphs: [
        "Dąbrowa Górnicza jest miastem ogromnym i bardzo nierównym. Po jednej stronie wielka huta i osiedla, po drugiej jeziora Pogoria, lasy i dzielnice, które wciąż wyglądają jak osobne wsie. Z Centrum do Tucznawy jedzie się dłużej niż z Centrum do Sosnowca — i to nie jest przenośnia.",
        "W kuchni oznacza to dwie potrzeby naraz. Pierwsza: jedzenie, które ma poczekać na kogoś wracającego po zmianie, i nie zrobić się przy tym niejadalne. Druga: coś, co da się zabrać nad wodę w sobotę, gdy pół miasta jest nad Pogorią.",
        "Thermomix odpowiada na obie w ten sam sposób — przez to, że nie wymaga stania przy garnku. Obiad może być gotowy wcześniej i czekać, a odgrzewanie na parze nie wysusza go tak jak mikrofalówka. Zupę czy pastę na wynos robi się w jednym naczyniu, bez przekładania i bez sprzątania pół kuchni.",
      ],
    },
    {
      id: "zaglebie",
      heading: "To jest Zagłębie",
      paragraphs: [
        "Tak jak Sosnowiec, Dąbrowa leży w Zagłębiu Dąbrowskim, a nie na Górnym Śląsku. Granica historyczna biegła Brynicą i do dziś ma znaczenie dla ludzi stąd, nawet jeśli na mapie województw wszystko wygląda jednakowo.",
        "Dlatego nie przyjeżdżam z „regionalnym zestawem śląskim” i nie zakładam z góry, co u Was się gotuje. Przyjeżdżam z pytaniem, co jecie w środę i w niedzielę — to znacznie prostsza droga do prezentacji, która czemuś służy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dąbrowie Górniczej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli pracujesz zmianowo, napisz od razu, kiedy realnie jesteś w domu — dopasuję godzinę, także przed południem w dni robocze.",
        "Podaj dzielnicę. Miasto jest rozległe, więc od tego zależy pora spotkania, a nie jego cena.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dąbrowie Górniczej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dąbrowskiej rodziny",
      paragraphs: [
        "W dzielnicach na obrzeżach rodziny mieszkają częściej w domach z ogrodem, w Centrum i na Gołonogu — w blokach. Wąskie gardło jest jednak wspólne: obiad w domu, w którym ktoś pracuje na zmiany, a dzieci wracają ze szkoły o stałej porze.",
        "Thermomix zdejmuje z tego konieczność obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy robisz coś innego, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma — porcja na parze powstaje równolegle z obiadem dla dorosłych, bez drugiego garnka i bez drugiego pilnowania.",
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

  districtsHeading: "Do których dzielnic Dąbrowy Górniczej dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty — także do tych położonych daleko od centrum, które wyglądają jak osobna wieś.",
    "Dąbrowa jest jednym z największych powierzchniowo miast w Polsce, więc przy umawianiu przydaje mi się nazwa dzielnicy. Wpływa to na porę spotkania, a nie na cenę.",
  ],
  districts: [
    "Centrum",
    "Gołonóg",
    "Mydlice",
    "Reden",
    "Ząbkowice",
    "Strzemieszyce Wielkie",
    "Strzemieszyce Małe",
    "Łosień",
    "Okradzionów",
    "Trzebiesławice",
    "Tucznawa",
    "Ujejsce",
    "Błędów",
    "Łęka",
    "Antoniów",
    "Marianki",
    "Sikorka",
    "Kuźniczka Nowa",
    "Bugaj",
    "Korzeniec",
    "Zielona",
    "Ratanice",
  ],

  nearbyHeading: "Zagłębie i okolice",
  nearbyParagraphs: [
    "Sosnowiec, Będzin i Czeladź są tuż obok — jedna trasa spokojnie obsługuje dwa spotkania w jeden wieczór. Na wschód jadę też w stronę Zawiercia i Olkusza.",
  ],
  nearbyTowns: ["Sosnowiec", "Będzin", "Czeladź", "Zawiercie", "Olkusz", "Sławków", "Katowice"],

  about: blokOMnie("do Dąbrowy Górniczej", "w Dąbrowie i całym Zagłębiu", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dąbrowy Górniczej bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic. Nawet do tych najdalszych — to, że miasto jest rozległe, jest moim problemem przy układaniu trasy, a nie Twoim przy płaceniu.",
    },
    ...faqWspolne("w Dąbrowie Górniczej"),
    {
      question: "Pracuję na zmiany w hucie — czy umówisz się przed południem?",
      answer:
        "Tak i robię to często. Powiedz przy ustalaniu terminu, kiedy realnie jesteś w domu, a dopasuję godzinę.",
    },
    {
      question: "Czy przyjedziesz do Ząbkowic albo Okradzionowa?",
      answer:
        "Tak, do każdej dzielnicy. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz.",
    },
  ],

  geo: { lat: 50.3216, lng: 19.1951 },
};
