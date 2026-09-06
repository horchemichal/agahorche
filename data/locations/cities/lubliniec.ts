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
 * LUBLINIEC — miasto na północnym skraju województwa, otoczone Lasami
 * Lublinieckimi, częścią wielkiego kompleksu leśnego ciągnącego się
 * w stronę Opolszczyzny. Najbardziej „leśne" miasto tej fali.
 *
 * KĄT: grzyby i jesień. Nie „ogród pełen śliwek" jak w Rybniku i nie
 * „zioła z parapetu" jak w Mikołowie — tu chodzi o coś, co przynosi się
 * z lasu w koszu i co trzeba przerobić TEGO SAMEGO DNIA, bo jutro będzie
 * za późno. To jedyny w tej fali produkt, który nie czeka.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Lubliniec leży wśród Lasów Lublinieckich, w północnej części
 *   województwa śląskiego, na skraju wielkiego kompleksu leśnego,
 * — miasto jest siedzibą powiatu lublinieckiego (m.in. Woźniki, Koszęcin,
 *   Herby, Kochanowice, Ciasna, Pawonków, Boronów),
 * — w Koszęcinie ma siedzibę Zespół Pieśni i Tańca „Śląsk”,
 * — Lubliniec jest miastem garnizonowym,
 * — dzielnice takie jak Kokotek, Steblów, Wymyślacz czy Droniowiczki mają
 *   charakter leśny i podmiejski.
 *
 * CZEGO NIE MA: porad dotyczących rozpoznawania grzybów — to nie jest
 * temat, w którym strona sprzedażowa ma cokolwiek do powiedzenia.
 */
export const LUBLINIEC: CityContent = {
  slug: "lubliniec",
  h1: "Thermomix Lubliniec – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Lubliniec — prezentacja i cena",
  seoDescription:
    "Thermomix w Lublińcu: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat lubliniecki. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubliniec — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lublińcu i w całym powiecie. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Lublińca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Wymyślaczu, w Kokotku czy Steblowie. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Lubliniec i cały powiat lubliniecki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lublińcu – jak wygląda prezentacja?",
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
      id: "las",
      heading: "Wrzesień, kosz i wieczór, który już się nie przesunie",
      paragraphs: [
        "Lubliniec leży wśród lasów i to nie jest tło z pocztówki — to część roku. Od późnego lata w bardzo wielu domach pojawia się kosz, a razem z nim rzecz, której nie ma przy warzywach z ogrodu: grzyby nie czekają. Zebrane rano trzeba przerobić tego samego dnia, bo jutro będzie za późno.",
        "I stąd bierze się wieczór, który zna tu każdy: wracacie z lasu zmęczeni i zaczyna się druga robota. Czyszczenie, krojenie, smażenie partiami, słoiki. Nie da się tego odłożyć i nie da się tego przyspieszyć siłą woli.",
        "Thermomix nie zbierze grzybów i nie oczyści ich za Was — to zostaje. Zdejmuje natomiast część, która ciągnie się najdłużej: duszenie i gotowanie z ustawioną temperaturą i mieszaniem, więc nie trzeba stać i nic nie przywrze do dna, gdy odejdziecie do drugiej partii. Zupa grzybowa, sos, farsz do pierogów albo pasta powstają w jednym naczyniu, jedno po drugim, bez zmywania między jednym a drugim.",
        "Uczciwie: to nie jest urządzenie do przerabiania grzybów. To urządzenie, które zabiera z tego wieczoru pilnowanie i połowę zmywania. Czy to warte tych pieniędzy, ocenisz sama — a ja powiem, co realnie zrobi, a czego nie.",
      ],
    },
    {
      id: "powiat",
      heading: "Cały powiat lubliniecki",
      paragraphs: [
        "Jeżdżę też do Woźnik, Koszęcina, Herbów, Kochanowic, Ciasnej, Pawonkowa i Boronowa. To okolica domów z ogrodami i sporych odległości między miejscowościami — a jednocześnie taka, z której wiele osób dojeżdża do pracy do Lublińca, Tarnowskich Gór albo Częstochowy.",
        "Przy umawianiu wystarczy podać miejscowość. Dojazd jest wszędzie bezpłatny i wpływa tylko na godzinę, którą mogę zaproponować.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lublińcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu jest ktoś, kto pracuje w systemie wyjazdowym i bywa nieobecny przez dłuższy czas, powiedz o tym przy umawianiu — dopasuję termin tak, żebyście mogli obejrzeć urządzenie razem. To zwykle decyzja na dwie osoby.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lublińcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lublinieckiej rodziny",
      paragraphs: [
        "W domach z ogrodem gotuje się częściej i większe porcje niż w bloku, ale wąskie gardło jest to samo: obiad musi powstać po powrocie z pracy, a dojazd z okolicznych gmin zabiera swoje.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których dzielnic Lublińca dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do tych położonych przy lesie, daleko od centrum.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Wymyślacz",
    "Kokotek",
    "Steblów",
    "Droniowiczki",
    "Kokotek-Leśna",
    "Osiedle Piłsudskiego",
    "Osiedle Sadowa",
    "Rusinowice",
  ],

  nearbyHeading: "Cały powiat lubliniecki",
  nearbyParagraphs: [
    "Woźniki, Koszęcin, Herby, Kochanowice, Ciasna, Pawonków i Boronów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Koszęcin",
    "Woźniki",
    "Herby",
    "Kochanowice",
    "Ciasna",
    "Pawonków",
    "Boronów",
    "Tarnowskie Góry",
    "Częstochowa",
  ],

  about: blokOMnie("do Lublińca", "w Lublińcu i całym powiecie lublinieckim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lublińca bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do całego powiatu lublinieckiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Lublińcu"),
    {
      question: "Czy Thermomix pomoże przy grzybach?",
      answer:
        "Przy części pracy tak, przy części nie. Nie oczyści ich i nie posortuje — to zostaje. Zabiera natomiast duszenie i gotowanie z pilnowaniem: zupa, sos, farsz do pierogów czy pasta powstają z ustawioną temperaturą i mieszaniem, w jednym naczyniu, jedno po drugim.",
    },
    {
      question: "Czy przyjedziesz do Koszęcina albo Ciasnej?",
      answer:
        "Tak, jeżdżę po całym powiecie lublinieckim. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 50.6708, lng: 18.6858 },
};
