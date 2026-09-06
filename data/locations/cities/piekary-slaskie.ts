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
 * PIEKARY ŚLĄSKIE — miasto sanktuaryjne. Bazylika NMP i św. Bartłomieja
 * ściąga dwie wielkie pielgrzymki stanowe w roku: mężczyzn w maju i kobiet
 * w sierpniu. Kalwaria piekarska jest jednym z ważniejszych miejsc kultu
 * w regionie.
 *
 * KĄT: różnica wobec Częstochowy jest istotna i celowa. Tam goście
 * rozkładają się na cały rok. Tu są DWIE KONKRETNE DATY, o których wiadomo
 * z rocznym wyprzedzeniem — i wtedy do domu przyjeżdża rodzina z pół
 * województwa naraz. To zupełnie inne zadanie kuchenne: nie „częściej
 * gotuję dla gości", tylko „dwa razy w roku gotuję dla piętnastu osób
 * i wiem o tym od dawna". Da się do tego przygotować — i o tym jest
 * ta strona.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — bazylika NMP i św. Bartłomieja w Piekarach Śląskich jest sanktuarium
 *   maryjnym, a pielgrzymki stanowe mężczyzn i kobiet to wydarzenia
 *   przyciągające dziesiątki tysięcy osób,
 * — przy sanktuarium znajduje się kalwaria,
 * — Piekary powstały z połączenia kilku miejscowości; Brzeziny Śląskie,
 *   Dąbrówka Wielka, Kozłowa Góra i Brzozowice-Kamień były wcześniej
 *   samodzielne,
 * — miasto graniczy m.in. z Bytomiem, Siemianowicami, Tarnowskimi Górami
 *   i Radzionkowem,
 * — zbiornik Kozłowa Góra leży na północy miasta.
 *
 * CZEGO NIE MA: liczby pielgrzymów podanej jako fakt, dat pielgrzymek
 * z dokładnością do dnia, danych o parafiach.
 */
export const PIEKARY_SLASKIE: CityContent = {
  slug: "piekary-slaskie",
  h1: "Thermomix Piekary Śląskie – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Piekary Śląskie — prezentacja i cena",
  seoDescription:
    "Thermomix w Piekarach Śląskich: bezpłatna prezentacja TM7 u Ciebie w kuchni, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piekary Śląskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Piekarach. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Piekar Śląskich z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Centrum, na Osiedlu Wieczorka, w Brzezinach, Dąbrówce Wielkiej czy Kozłowej Górze. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("całe Piekary, wszystkie dzielnice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piekarach Śląskich – jak wygląda prezentacja?",
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
      id: "dwie-daty",
      heading: "Dwie daty w roku, o których wiadomo z góry",
      paragraphs: [
        "W Piekarach kalendarz kuchenny wygląda inaczej niż gdzie indziej. Sanktuarium na wzgórzu ściąga dwie wielkie pielgrzymki stanowe — mężczyzn i kobiet — a wtedy do wielu piekarskich domów przyjeżdża rodzina z pół województwa. Nie „wpada ktoś na kawę”, tylko siada piętnaście osób.",
        "To zupełnie inne zadanie niż codzienne gotowanie i ma jedną wielką zaletę: wiadomo o nim z rocznym wyprzedzeniem. Da się przygotować — i to jest różnica między dniem, który się przetrwa, a dniem, który się przeżyje razem z gośćmi zamiast w kuchni.",
        "Thermomix przydaje się tu najbardziej tam, gdzie liczy się powtarzalność i brak pilnowania: ciasto drożdżowe wyrabia się samo, kilka litrów zupy gotuje się z ustawioną temperaturą i mieszaniem, a pasty i sałatki robi się seriami w tym samym naczyniu. Można też zrobić część dzień wcześniej — a to zwykle ratuje cały poranek.",
      ],
    },
    {
      id: "dzielnice-jak-wsie",
      heading: "Miasto z kilku miejscowości",
      paragraphs: [
        "Piekary powstały z połączenia osobnych miejscowości i do dziś to widać. Brzeziny Śląskie, Dąbrówka Wielka czy Kozłowa Góra mają swój charakter, częściej są tam domy z ogrodem niż bloki, a do centrum jedzie się kawałek.",
        "Praktycznie oznacza to dla mnie tyle, że przy umawianiu proszę o nazwę dzielnicy, a nie tylko o ulicę. Wpływa to na porę spotkania, którą mogę zaproponować — na cenę nie wpływa nigdy, bo dojazd jest bezpłatny do każdej części miasta.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piekarach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — ustalenie terminu zajmuje kilka minut. Możesz też zostawić kontakt w formularzu i dopisać, o której oddzwonić.",
        "Jeśli chcesz, żebyśmy przećwiczyli konkretne danie na większą liczbę osób, powiedz o tym wcześniej — przywiozę wtedy pod to składniki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piekarach Śląskich"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla piekarskiej rodziny",
      paragraphs: [
        "Na co dzień Piekary żyją jak reszta metropolii: praca w Bytomiu, Katowicach albo Tarnowskich Górach, powroty o różnych porach i obiad rozłożony na kilka tur.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. Wszystko dzieje się w jednym naczyniu, więc po zupie nie zostaje garnek, blender i sitko.",
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

  districtsHeading: "Do których dzielnic Piekar dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do Kozłowej Góry i Dąbrówki Wielkiej.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Szarlej",
    "Józefka",
    "Osiedle Wieczorka",
    "Brzeziny Śląskie",
    "Brzozowice-Kamień",
    "Dąbrówka Wielka",
    "Kozłowa Góra",
  ],

  nearbyHeading: "Poza Piekary też przyjadę",
  nearbyParagraphs: [
    "Piekary sąsiadują z Bytomiem, Radzionkowem, Siemianowicami, Wojkowicami i Tarnowskimi Górami — to jedna trasa i spokojnie dwa spotkania w jedno popołudnie.",
  ],
  nearbyTowns: [
    "Bytom",
    "Radzionków",
    "Tarnowskie Góry",
    "Siemianowice Śląskie",
    "Wojkowice",
    "Będzin",
    "Chorzów",
  ],

  about: blokOMnie("do Piekar", "w Piekarach i całej metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Piekar Śląskich bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Piekar jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Piekarach Śląskich"),
    {
      question: "Gotuję kilka razy w roku dla kilkunastu osób — czy Thermomix w tym pomoże?",
      answer:
        "Pomoże, ale w konkretnych miejscach, a nie we wszystkim. Najbardziej przy cieście drożdżowym, zupach, sosach, pastach i sałatkach — czyli tam, gdzie trzeba pilnować, mieszać albo powtarzać tę samą czynność. Nie zastąpi piekarnika przy pieczeni ani patelni przy kotletach. Na prezentacji przejdziemy przez Wasze menu na takie okazje i powiem szczerze, co realnie ułatwi, a co nie.",
    },
    {
      question: "Czy mogę zaprosić na prezentację rodzinę z innych miast?",
      answer:
        "Jak najbardziej. W grupie pytania padają odważniejsze, a osoby, które przyjechały z innego miasta, mogą potem umówić się u siebie — jeżdżę po całym regionie.",
    },
  ],

  geo: { lat: 50.3801, lng: 18.9553 },
};
