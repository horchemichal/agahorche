import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * BEŁCHATÓW — miasto, które w kilkanaście lat urosło wokół największej
 * w Polsce odkrywki węgla brunatnego i elektrowni. Obok leży Góra
 * Kamieńsk, usypana z nadkładu i zamieniona na stok narciarski.
 *
 * KĄT: rata, kiedy jutro nie jest pewne. O transformacji tego regionu
 * mówi się publicznie od lat i nikomu tutaj nie trzeba tłumaczyć, że
 * kopalnia ma swój horyzont. Dla strony sprzedażowej wynika z tego jedna
 * rzecz i jest niewygodna: W MIEŚCIE, W KTÓRYM LUDZIE NIE SĄ PEWNI
 * SWOJEJ PRACY ZA PIĘĆ LAT, NAMAWIANIE NA WIELOLETNIE RATY BYŁOBY
 * NIEPRZYZWOITE. Więc strona ma powiedzieć wprost: policz to na spokojnie,
 * krótszy okres jest bezpieczniejszy, a jeśli masz wątpliwości — nie bierz.
 *
 * CZEGO NIE ROBIĘ: nie podaję dat zamknięcia czegokolwiek, nie komentuję
 * polityki energetycznej, nie udaję doradcy finansowego i nie podaję
 * żadnych kwot ani RRSO. Warunki finansowania są w osobnej sekcji
 * i pochodzą z oficjalnych materiałów.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Bełchatów rozwinął się wraz z kopalnią odkrywkową węgla brunatnego
 *   i elektrownią; jest to największy tego typu kompleks w Polsce,
 * — obok leży Góra Kamieńsk, usypana z nadkładu i wykorzystywana
 *   rekreacyjnie,
 * — o przyszłości regionu i jego transformacji mówi się publicznie
 *   od wielu lat.
 *
 * CZEGO NIE MA: dat, liczb zatrudnienia, prognoz, ocen politycznych.
 */
export const BELCHATOW: CityContent = {
  slug: "belchatow",
  h1: "Thermomix Bełchatów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Bełchatów — prezentacja i cena",
  seoDescription:
    "Thermomix w Bełchatowie: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0% i uczciwa rozmowa o tym, czy warto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bełchatów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bełchatowie. Prezentacja bezpłatna, bez namawiania na raty.",

  lead:
    "Przyjeżdżam do Bełchatowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Bełchatów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bełchatowie – jak wygląda prezentacja?",
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
      id: "rata-kiedy-jutro-nie-jest-pewne",
      heading: "Miasto, które zna słowo „transformacja” — i uczciwa rozmowa o racie",
      paragraphs: [
        "Bełchatów urósł w kilkanaście lat wokół odkrywki i elektrowni, a obok stanęła góra usypana z tego, co trzeba było zdjąć z węgla. O przyszłości tego wszystkiego mówi się publicznie od lat i nikomu tutaj nie trzeba tego tłumaczyć — mieszkańcy wiedzą o tym więcej niż ktokolwiek piszący o tym z zewnątrz. Nie zamierzam więc niczego prognozować ani oceniać.",
        "Napiszę o czymś, co bezpośrednio dotyczy mojej pracy i wolę powiedzieć to sama. Sprzedaję drogie urządzenie, najczęściej na raty rozłożone na kilka lat. W mieście, w którym część ludzi nie ma pewności, jak będzie wyglądać ich praca za pięć lat, namawianie na najdłuższy możliwy okres spłaty byłoby zwyczajnie nieprzyzwoite.",
        "Dlatego mówię tutaj coś, czego nie mówi się na szkoleniach sprzedażowych. Jeśli zastanawiacie się nad ratami, policzcie to przy krótszym okresie, a nie przy najdłuższym — rata jest wtedy wyższa, ale zobowiązanie kończy się szybciej i mniej zależy od tego, co będzie za kilka lat. A jeśli po tej rozmowie zostaje choć cień wątpliwości, czy udźwigniecie to w gorszym miesiącu, to nie bierzcie. Naprawdę.",
        "Zawsze zostaje spokojniejsza droga: obejrzeć urządzenie teraz, nic nie podpisywać, a wrócić do tematu wtedy, kiedy sytuacja będzie jasna. Prezentacja jest bezpłatna również wtedy, a ja nie dzwonię potem co tydzień z pytaniem, czy już.",
        "Wszystkie liczby — cenę, aktualną promocję i wysokość raty przy kilku okresach — podam wprost, z oficjalnych materiałów, bez zaokrąglania w swoją stronę. Nie jestem doradcą finansowym i nie będę udawać, że nim jestem. Decyzję podejmujecie sami i to jest w porządku.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bełchatowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli pracujecie w ruchu ciągłym, podajcie kilka terminów z różnych tygodni — dopasuję się, także rano i w środku dnia roboczego.",
        "Powiedz przy umawianiu, czy chcesz w ogóle rozmawiać o ratach. Jeśli nie, po prostu pokażę urządzenie i podam cenę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bełchatowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bełchatowskiej rodziny",
      paragraphs: [
        "Gdy w domu ktoś pracuje w ruchu ciągłym, wspólny posiłek o jednej porze zdarza się rzadziej — jedzenie musi powstać wcześniej i doczekać, czasem do środka nocy.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wtedy, gdy akurat jest czas, a odgrzewanie na parze nie wysusza.",
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

  districtsHeading: "Do których części Bełchatowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Dolnośląskie",
    "Binków",
    "Ludwików",
    "Grocholice",
    "Politanice",
    "Okrzei",
    "Czapliniecka",
    "Przytorze",
    "Olsztyńskie",
  ],

  nearbyHeading: "Poza Bełchatów też przyjadę",
  nearbyParagraphs: [
    "Kamieńsk, Zelów, Radomsko, Pajęczno i Piotrków Trybunalski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kamieńsk", "Zelów", "Radomsko", "Pajęczno", "Piotrków Trybunalski", "Łask"],

  about: blokOMnie("do Bełchatowa", "w Bełchatowie i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bełchatowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bełchatowie"),
    {
      question: "Nie mam pewności co do pracy za kilka lat. Czy brać raty?",
      answer:
        "Jeśli macie wątpliwości, czy udźwigniecie ratę w gorszym miesiącu — nie bierzcie. Mówię to wprost, choć nie jest to w moim interesie. Jeśli już, policzcie krótszy okres spłaty zamiast najdłuższego: rata jest wyższa, ale zobowiązanie kończy się szybciej.",
    },
    {
      question: "Czy mogę obejrzeć urządzenie i wrócić do tematu za rok?",
      answer:
        "Oczywiście i to jest zupełnie normalna droga. Prezentacja jest bezpłatna, niczego się na niej nie podpisuje, a ja nie dzwonię potem co tydzień z pytaniem, czy już. Jak będziecie gotowi, po prostu odezwiecie się sami.",
    },
  ],

  geo: { lat: 51.3689, lng: 19.3564 },
};
