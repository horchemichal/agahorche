import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * PRUSZKÓW — miasto na zachód od Warszawy, przecięte linią kolejową
 * i podmiejską koleją, z gęstą zabudową i cienkimi ścianami w blokach.
 *
 * KĄT: hałas. Miasto, które od stu lat żyje przy torach, jest jedynym
 * właściwym miejscem na rzecz przemilczaną na każdym pokazie: TO
 * URZĄDZENIE JEST GŁOŚNE. Przy rozdrabnianiu na wysokich obrotach
 * naprawdę hałasuje i nie ma sensu udawać, że jest inaczej.
 *
 * SEKCJA MUSI BYĆ KONKRETNA, A NIE PRZEPRASZAJĄCA. Ma powiedzieć: kiedy
 * jest głośno (krótko, przy rozdrabnianiu i ubijaniu), kiedy jest cicho
 * (przez większość gotowania), i co z tym praktycznie zrobić w domu,
 * w którym ktoś śpi za ścianą.
 *
 * ROZGRANICZENIE. Skarżysko-Kamienna wspomina o głośności przy okazji
 * kąta „dom, w którym ktoś śpi w dzień" — tam to jest jedno zdanie w tle.
 * Tutaj hałas jest tematem głównym i dostaje pełną, praktyczną odpowiedź.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Pruszków leży przy linii kolejowej i podmiejskiej kolei do Warszawy,
 * — miasto ma gęstą zabudowę wielorodzinną.
 *
 * CZEGO NIE MA: decybeli ani żadnych liczb, bo ich nie zmierzyłam.
 */
export const PRUSZKOW: CityContent = {
  slug: "pruszkow",
  h1: "Thermomix Pruszków – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Pruszków — prezentacja i cena",
  seoDescription:
    "Thermomix w Pruszkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pruszków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pruszkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pruszkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Pruszków i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pruszkowie – jak wygląda prezentacja?",
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
      id: "halas",
      heading: "Miasto przy torach — i uczciwie: to urządzenie jest głośne",
      paragraphs: [
        "Pruszków od stu lat mieszka przy torach i wie o hałasie wszystko: że da się do niego przyzwyczaić, ale że najpierw trzeba go komuś uczciwie zapowiedzieć. Zrobię więc coś, czego nie robi się na pokazach — powiem, że to urządzenie jest głośne.",
        "Nie „ciche jak nowoczesny sprzęt”, nie „przyjemnie brzmi”. Przy rozdrabnianiu na wysokich obrotach — gdy miele orzechy, ziarna, kruszy lód albo blenduje zupę na gładko — hałasuje wyraźnie i tego się nie da obejść. Podobnie przy ubijaniu.",
        "Ale to jest tylko połowa prawdy i druga połowa jest ważniejsza. Te głośne momenty trwają kilkanaście, czasem kilkadziesiąt sekund. Przez resztę czasu, czyli przez całe gotowanie z ustawioną temperaturą, urządzenie chodzi na wolnych obrotach i jest ciche — cichsze niż zmywarka i cichsze niż okap na drugim biegu. Zupa, która gotuje się dwadzieścia minut, hałasuje tylko wtedy, gdy na koniec ją zmiksujecie.",
        "W bloku z cienkimi ścianami albo w domu, gdzie ktoś śpi w ciągu dnia, ma to praktyczne konsekwencje i warto je znać z góry. Głośne czynności da się przesunąć na inną porę — orzechy zmielić z rana, a wieczorem tylko gotować. Zupę można zostawić z kawałkami zamiast miksować, jeśli akurat ktoś śpi. Można też po prostu zamknąć drzwi do kuchni, bo to nie jest hałas, który idzie przez cały dom.",
        "Na spotkaniu włączę wysokie obroty od razu, na początku, żebyście usłyszeli to na własne uszy przed decyzją, a nie po zakupie. Wolę, żeby ktoś zrezygnował z powodu hałasu w mojej obecności, niż żeby żałował po dwóch tygodniach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pruszkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz, czy w domu ktoś śpi w ciągu dnia albo czy ściany są cienkie — dobiorę porę i kolejność gotowania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pruszkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pruszkowskiej rodziny",
      paragraphs: [
        "Gdy dorośli dojeżdżają do pracy, dzień kończy się po powrocie, a obiad robi zwykle jedna osoba — często wtedy, gdy ktoś inny już śpi.",
        "Thermomix pomaga tym, że nie wymaga obecności i że przez większość czasu pracuje cicho. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Pruszkowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Ostoja",
    "Malichy",
    "Żbików",
    "Gąsin",
    "Bąki",
    "Tworki",
    "Wyględówek",
    "Osiedle Staszica",
    "Bolesława Prusa",
  ],

  nearbyHeading: "Poza Pruszków też przyjadę",
  nearbyParagraphs: [
    "Piastów, Brwinów, Grodzisk Mazowiecki, Milanówek i Podkowa Leśna są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Piastów", "Brwinów", "Grodzisk Mazowiecki", "Milanówek", "Podkowa Leśna", "Żyrardów"],

  about: blokOMnie("do Pruszkowa", "w Pruszkowie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pruszkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pruszkowie"),
    {
      question: "Czy Thermomix jest głośny?",
      answer:
        "Tak, przy wysokich obrotach — gdy miele ziarna, kruszy lód, blenduje zupę na gładko albo ubija — i nie będę udawać, że jest inaczej. Te momenty trwają jednak kilkanaście do kilkudziesięciu sekund. Przez całe gotowanie z ustawioną temperaturą chodzi na wolnych obrotach i jest cichszy niż zmywarka.",
    },
    {
      question: "Mieszkam w bloku, ktoś u nas śpi w ciągu dnia. Co z tym zrobić?",
      answer:
        "Głośne czynności da się przesunąć: orzechy zmielić rano, wieczorem tylko gotować. Zupę można zostawić z kawałkami zamiast miksować. Można też zamknąć drzwi do kuchni — to nie jest hałas, który niesie się po całym mieszkaniu. Na spotkaniu włączę wysokie obroty od razu, żebyś usłyszała to przed decyzją.",
    },
  ],

  geo: { lat: 52.1706, lng: 20.8117 },
};
