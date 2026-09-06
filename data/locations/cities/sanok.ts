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
 * SANOK — brama Bieszczadów, nad Sanem, z Muzeum Budownictwa Ludowego
 * (największym skansenem w Polsce) i Muzeum Historycznym w zamku.
 * Miasto przemysłowe (Autosan, Stomil) i jednocześnie turystyczne.
 *
 * KĄT: Sanok jest ostatnim dużym miastem przed Bieszczadami — i to nie
 * jest hasło z folderu, tylko realia zaopatrzenia. Dla ludzi z Leska,
 * Zagórza, Ustrzyk i całych Bieszczadów Sanok jest miejscem, gdzie robi
 * się PORZĄDNE ZAKUPY. Kuchennie oznacza to rzadsze, większe wyprawy
 * i konieczność planowania — zupełnie inaczej niż w mieście, gdzie sklep
 * jest na dole.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Sanok leży nad Sanem, u wrót Bieszczadów, i jest siedzibą powiatu
 *   sanockiego,
 * — Muzeum Budownictwa Ludowego w Sanoku to największy skansen w Polsce,
 * — miasto ma tradycje przemysłowe (produkcja autobusów, wyrobów gumowych),
 * — w zamku sanockim mieści się Muzeum Historyczne ze zbiorem ikon
 *   i pracami Zdzisława Beksińskiego, który pochodził z Sanoka,
 * — dzielnice: Śródmieście, Wójtostwo, Posada, Dąbrówka, Olchowce,
 *   Białagóra, Zatorze.
 *
 * CZEGO NIE MA: danych o zatrudnieniu w zakładach, liczby turystów,
 * odległości podanych w kilometrach jako fakt.
 */
export const SANOK: CityContent = {
  slug: "sanok",
  h1: "Thermomix Sanok – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Sanok — prezentacja i cena",
  seoDescription:
    "Thermomix w Sanoku: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat sanocki i Bieszczady. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sanok — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sanoku i w okolicy. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Sanoka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Posadzie, Wójtostwie czy Dąbrówce. Prezentacja i dojazd są bezpłatne, także do Leska, Zagórza i Ustrzyk.",

  highlights: highlightyStandardowe("Sanok, powiat i Bieszczady"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sanoku – jak wygląda prezentacja?",
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
      id: "ostatnie-miasto",
      heading: "Ostatnie duże miasto przed Bieszczadami",
      paragraphs: [
        "Sanok jest bramą Bieszczadów i to nie jest hasło z folderu turystycznego, tylko codzienna praktyka. Dla ludzi z Leska, Zagórza, Ustrzyk i z całych Bieszczadów Sanok jest miejscem, w którym robi się porządne zakupy, załatwia sprawy i kupuje to, czego nie da się kupić bliżej.",
        "Kuchennie zmienia to jedną fundamentalną rzecz: zakupy nie są tu czymś, co robi się po drodze. To wyprawa — rzadsza, większa i wymagająca planowania. Nie da się o dwudziestej stwierdzić, że brakuje jednego składnika, i zbiec po niego na dół.",
        "Thermomix pasuje do takiego rytmu lepiej, niż wygląda w reklamach, ale z konkretnego powodu. Nie dlatego, że gotuje szybciej — tylko dlatego, że z tych samych podstawowych produktów, które i tak przywozicie z większych zakupów, robi się w nim bardzo różne rzeczy. Chleb, ciasto, makaron, sosy, pasty, zupy. Mniej zależy się od tego jednego brakującego słoiczka, po który nie ma jak pojechać.",
        "To samo dotyczy przetworów i mrożenia: większa porcja nie kosztuje więcej pilnowania, więc gotowanie z zapasem przestaje być całodniową operacją.",
      ],
    },
    {
      id: "powiat-i-gory",
      heading: "Powiat sanocki i Bieszczady",
      paragraphs: [
        "Jeżdżę do Leska, Zagórza, Ustrzyk Dolnych i dalej w góry. Dojazd jest wszędzie bezpłatny, także do miejscowości położonych daleko od głównych dróg.",
        "Proszę tylko o zapas czasu przy umawianiu, zwłaszcza zimą. Wolę uczciwie powiedzieć „będę między siedemnastą a osiemnastą” niż obiecać konkretną godzinę i nie dotrzymać jej przez pogodę albo drogę.",
        "W okolicy jest też sporo domów przyjmujących gości — kwatery, agroturystyka. Jeżeli tak u Was jest, powiedzcie przy umawianiu: prezentacja wygląda wtedy inaczej i rozmawiamy raczej o śniadaniach dla kilku osób i o przygotowaniu z wyprzedzeniem niż o rodzinnym obiedzie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sanoku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość i dzielnicę — Olchowce to inny kierunek niż Posada, a przy wyjazdach w góry planuję trasę z wyprzedzeniem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sanoku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sanockiej rodziny",
      paragraphs: [
        "W Sanoku i okolicy obiad częściej niż w dużym mieście jest wspólnym posiłkiem o mniej więcej stałej porze. Przygotowuje go zwykle ta sama osoba — dzień po dniu, przez lata.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie trzech naczyń po jednej zupie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których dzielnic Sanoka dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Posada",
    "Wójtostwo",
    "Dąbrówka",
    "Olchowce",
    "Białagóra",
    "Zatorze",
    "Błonie",
    "Stróże Małe",
  ],

  nearbyHeading: "Powiat sanocki i Bieszczady",
  nearbyParagraphs: [
    "Lesko, Zagórz, Ustrzyki Dolne, Rymanów, Brzozów i Bukowsko są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny, także w góry.",
  ],
  nearbyTowns: [
    "Lesko",
    "Zagórz",
    "Ustrzyki Dolne",
    "Rymanów",
    "Brzozów",
    "Krosno",
    "Dukla",
  ],

  about: blokOMnie("do Sanoka", "w Sanoku, powiecie i Bieszczadach", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sanoka bez dodatkowej opłaty?",
      answer:
        "Tak, do Sanoka, do powiatu i w Bieszczady. Dojazd jest bezpłatny tak samo jak sama prezentacja — proszę tylko o zapas czasu przy umawianiu, zwłaszcza zimą.",
    },
    ...faqWspolne("w Sanoku"),
    {
      question: "Mieszkam daleko, w górskiej miejscowości — czy przyjedziesz?",
      answer:
        "Przyjadę i nie doliczam za to ani złotówki. Powiem tylko uczciwie: takie wyjazdy planuję z wyprzedzeniem i wolę podać przedział godzin niż konkretną minutę, bo w tej okolicy droga potrafi zająć więcej, niż pokazuje nawigacja.",
    },
    {
      question: "Prowadzę kwaterę dla gości — czy prezentacja może być pod tym kątem?",
      answer:
        "Jak najbardziej, powiedz o tym przy umawianiu. Rozmawiamy wtedy o śniadaniach dla kilku osób, o tym, co da się przygotować wieczorem, i o powtarzalności — a nie o rodzinnym obiedzie.",
    },
  ],

  geo: { lat: 49.5558, lng: 22.2058 },
};
