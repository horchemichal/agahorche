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
 * LUBACZÓW — najdalej na wschód wysunięty zakątek Podkarpacia, na skraju
 * Roztocza, przy granicy. Okolica lasów, stawów i bardzo małych
 * miejscowości rozrzuconych na dużym obszarze.
 *
 * KĄT: to jest najdalsze miejsce w całym obszarze, do którego Aga
 * dojeżdża — i strona musi to powiedzieć wprost, zamiast udawać, że
 * wszędzie jest tak samo. Ale odległość ma tu drugą stronę, o której
 * warto powiedzieć uczciwie: to okolica, w której DO SKLEPU TEŻ SIĘ
 * JEDZIE. Jeżeli po jeden brakujący składnik trzeba wsiąść w samochód,
 * to gotowanie z tego, co jest w domu, przestaje być modą, a staje się
 * po prostu sposobem życia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Lubaczów leży w najdalej na wschód wysuniętej części województwa
 *   podkarpackiego, na skraju Roztocza, w pobliżu granicy państwa,
 * — miasto jest siedzibą powiatu lubaczowskiego (m.in. Cieszanów,
 *   Narol, Oleszyce, Horyniec-Zdrój, Wielkie Oczy, Stary Dzików),
 * — Horyniec-Zdrój to uzdrowisko w tym powiecie,
 * — okolica jest słabo zurbanizowana, z dużymi kompleksami leśnymi
 *   i rozproszoną zabudową,
 * — powiat lubaczowski należy do najmniej gęsto zaludnionych w regionie.
 *
 * CZEGO NIE MA: danych o gęstości zaludnienia podanych jako liczby,
 * odległości w kilometrach, tematów granicznych.
 */
export const LUBACZOW: CityContent = {
  slug: "lubaczow",
  h1: "Thermomix Lubaczów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Lubaczów — prezentacja i cena",
  seoDescription:
    "Thermomix w Lubaczowie: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat lubaczowski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubaczów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubaczowie i w okolicy. Prezentacja bezpłatna, terminy umawiane z wyprzedzeniem.",

  lead:
    "Przyjeżdżam do Lubaczowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Cieszanowa, Narola, Oleszyc i Horyńca-Zdroju.",

  highlights: highlightyStandardowe("Lubaczów i cały powiat lubaczowski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lubaczowie – jak wygląda prezentacja?",
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
      id: "kiedy-do-sklepu-tez-sie-jedzie",
      heading: "Okolica, w której do sklepu też się jedzie",
      paragraphs: [
        "Powiat lubaczowski to najdalszy wschodni kraniec Podkarpacia: Roztocze, lasy, stawy i niewielkie miejscowości rozrzucone na dużym obszarze. Jest tu pięknie i jest tu daleko — jedno i drugie naraz.",
        "Kuchennie ma to bardzo praktyczne przełożenie, o którym nie pisze żaden poradnik pisany w mieście. Jeżeli po jeden brakujący składnik trzeba wsiąść w samochód, to „ugotuję z tego, co mam” nie jest modą ani oszczędnością — jest po prostu sposobem, w jaki się tu żyje.",
        "I dlatego akurat tutaj urządzenie warto oceniać inaczej niż w reklamie. Nie po tym, ile ma funkcji, tylko po tym, ile różnych rzeczy zrobi z tych samych podstawowych produktów, które i tak macie w domu: mąki, jajek, warzyw, mleka. Chleb, ciasto, makaron, sosy, pasty, zupy — z jednej misy i bez biegania po zapomniany słoiczek.",
        "Do tego dochodzi wszystko, co rośnie i rodzi się na miejscu — owoce, warzywa, jesienią grzyby. Przetwory gotują się z ustawioną temperaturą i mieszaniem, bez stania przy garnku.",
      ],
    },
    {
      id: "uczciwie-o-odleglosci",
      heading: "Uczciwie o odległości",
      paragraphs: [
        "Nie będę udawać, że wpadam tu po drodze — tędy żadna moja droga nie prowadzi. To najdalszy punkt obszaru, po którym jeżdżę.",
        "Znaczy to tyle: dojazd jest bezpłatny tak samo jak wszędzie, ale wyjazd w tę stronę planuję osobno i z wyprzedzeniem. Przy pierwszym telefonie od razu powiem, kiedy realnie mogę być, zamiast obiecywać termin, którego nie dotrzymam.",
        "Jedna rzecz działa na Waszą korzyść: skoro jadę kawał drogi, chętnie umawiam tego samego dnia dwa albo trzy spotkania. Jeśli ktoś z rodziny albo znajomych też chce zobaczyć urządzenie, powiedzcie od razu — łatwiej wtedy o dogodny termin dla wszystkich i zwykle jest to szybciej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubaczowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — najlepiej z kilkoma pasującymi Wam terminami, bo wtedy od razu dogadamy konkret.",
        "Podaj miejscowość. Narol i Horyniec to inny kierunek niż Oleszyce, a przy takich odległościach planuję trasę z góry.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubaczowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubaczowskiej rodziny",
      paragraphs: [
        "W tej okolicy obiad wciąż bywa jednym wspólnym posiłkiem, a gotuje się większe porcje i częściej z własnych produktów niż z codziennych zakupów.",
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

  districtsHeading: "Do których części Lubaczowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd. Miasto jest niewielkie, więc dojazd nie wpływa nawet na porę spotkania.",
    "Przy umawianiu przydaje mi się natomiast nazwa miejscowości, jeśli mieszkacie poza samym Lubaczowem.",
  ],
  districts: [
    "Centrum",
    "Osiedle Mazury",
    "Osiedle Piaski",
    "Podlesie",
    "Zagrody",
    "Załuże",
  ],

  nearbyHeading: "Cały powiat lubaczowski",
  nearbyParagraphs: [
    "Cieszanów, Narol, Oleszyce, Horyniec-Zdrój, Wielkie Oczy i Stary Dzików są w zasięgu tej samej trasy — a skoro i tak jadę w tę stronę, chętnie umawiam kilka spotkań na jeden dzień.",
  ],
  nearbyTowns: [
    "Cieszanów",
    "Oleszyce",
    "Narol",
    "Horyniec-Zdrój",
    "Jarosław",
    "Przeworsk",
  ],

  about: blokOMnie("do Lubaczowa", "w Lubaczowie i całym powiecie", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubaczowa bez dodatkowej opłaty?",
      answer:
        "Tak, do Lubaczowa i do całego powiatu — dojazd jest bezpłatny niezależnie od tego, jak daleko mam. Proszę tylko o umówienie terminu z wyprzedzeniem, bo to najdalszy punkt obszaru, po którym jeżdżę, i takie wyjazdy planuję osobno.",
    },
    ...faqWspolne("w Lubaczowie"),
    {
      question: "Mieszkam we wsi, kilkanaście kilometrów od Lubaczowa — czy przyjedziesz?",
      answer:
        "Przyjadę i nie doliczam za to ani złotówki. Powiem tylko uczciwie: wolę podać przedział godzin niż konkretną minutę, bo w tej okolicy droga potrafi zająć więcej, niż pokazuje nawigacja.",
    },
    {
      question: "Czy możemy umówić prezentację dla kilku osób naraz?",
      answer:
        "Bardzo chętnie i tutaj szczególnie. Skoro i tak jadę kawał drogi, dwa czy trzy spotkania w jednym dniu są dla mnie łatwiejsze do zaplanowania — a dla Was to zwykle znacznie szybszy termin.",
    },
  ],

  geo: { lat: 50.1572, lng: 23.1233 },
};
