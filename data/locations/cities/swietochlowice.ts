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
 * ŚWIĘTOCHŁOWICE — najmniejsze powierzchniowo miasto na prawach powiatu
 * w Polsce i jednocześnie najgęściej zaludnione. Wszystko jest tu blisko:
 * sklep, przystanek, szkoła, rodzina.
 *
 * KĄT: gęstość zabudowy ma bardzo praktyczną konsekwencję kuchenną, o której
 * nikt nie pisze. W mieście, gdzie do sklepu idzie się pieszo, zakupy robi
 * się MAŁYMI PARTIAMI i CZĘSTO — kupuje się to, co się uniesie w rękach,
 * a nie bagażnik na tydzień. Gotuje się więc z tego, co akurat jest,
 * a nie z zaplanowanego jadłospisu. To dokładnie sytuacja, pod którą
 * napisaliśmy „Co mam w lodówce" — i naturalne miejsce, żeby do tego
 * odesłać.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Świętochłowice są najmniejszym powierzchniowo miastem na prawach powiatu
 *   w Polsce i mają jedną z najwyższych gęstości zaludnienia w kraju,
 * — miasto graniczy z Chorzowem, Rudą Śląską i Bytomiem,
 * — dzielnice: Centrum, Lipiny, Chropaczów, Zgoda, Piaśniki — historycznie
 *   osobne osady robotnicze,
 * — Lipiny to jedna z najstarszych dzielnic o zabudowie robotniczej,
 * — nad stawem Kalina i w rejonie Skałka są tereny rekreacyjne miasta.
 *
 * CZEGO NIE MA: powierzchni i gęstości podanych jako liczby, danych
 * o dochodach i strukturze zatrudnienia.
 */
export const SWIETOCHLOWICE: CityContent = {
  slug: "swietochlowice",
  h1: "Thermomix Świętochłowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Świętochłowice — prezentacja i cena",
  seoDescription:
    "Thermomix w Świętochłowicach: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świętochłowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świętochłowicach. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Świętochłowic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Centrum, na Zgodzie, w Lipinach, Chropaczowie czy Piaśnikach. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("całe Świętochłowice, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świętochłowicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz akurat w lodówce. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "zakupy-w-rekach",
      heading: "Miasto, w którym po zakupy idzie się pieszo",
      paragraphs: [
        "Świętochłowice są najmniejszym powierzchniowo miastem na prawach powiatu w Polsce i jednym z najgęściej zaludnionych. W praktyce znaczy to, że wszystko jest tu w zasięgu spaceru — sklep, przystanek, szkoła, rodzina.",
        "Ma to konsekwencję kuchenną, o której nikt nie pisze, a która zmienia wszystko. Skoro do sklepu idzie się pieszo, kupuje się tyle, ile da się unieść w rękach — i chodzi się częściej. Nie ma tu zaplanowanego jadłospisu na tydzień i wielkiego bagażnika z sobotnich zakupów. Jest lodówka, w której zawsze coś jest, i pytanie „co z tego dziś zrobić”.",
        "Thermomix pasuje do takiego rytmu lepiej, niż wygląda w reklamach. Nie wymaga listy zakupów na tydzień — z tego samego zestawu warzyw robi się zupę krem, pastę do kanapek albo sos do makaronu, w zależności od tego, czego dziś chcecie. A skoro gotuje i miksuje w jednym naczyniu, decyzja „zrobię coś z tego, co mam” nie kończy się stosem garnków.",
      ],
      links: [
        { href: "/przepisy/co-mam-w-lodowce", label: "Sprawdź, co ugotujesz z tego, co masz w lodówce" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świętochłowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — ustalenie terminu zajmuje kilka minut. Możesz też zostawić kontakt w formularzu i dopisać, o której oddzwonić.",
        "Miasto jest małe, więc dojazd nie ma tu żadnego znaczenia. Przydaje mi się tylko informacja, czy pod blokiem da się zaparkować i na którym piętrze mieszkasz.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świętochłowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla świętochłowickiej rodziny",
      paragraphs: [
        "Świętochłowice to miasto, z którego bardzo wiele osób pracuje w Chorzowie, Katowicach albo Rudzie — kilkanaście minut drogi, ale różne godziny powrotu. Obiad przestaje być jednym wydarzeniem i staje się serią talerzy.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. W małej kuchni liczy się też to, że wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których dzielnic Świętochłowic dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — miasto jest na tyle małe, że dojazd nie wpływa nawet na porę spotkania.",
    "Lipiny i Chropaczów mają zabudowę starszą niż Zgoda czy osiedla przy Centrum, więc przy umawianiu przydaje mi się informacja o kuchni: czy jest ciasna i gdzie stoi gniazdko.",
  ],
  districts: [
    "Centrum",
    "Zgoda",
    "Lipiny",
    "Chropaczów",
    "Piaśniki",
    "Kolonia Zgoda",
    "Skałka",
  ],

  nearbyHeading: "Poza Świętochłowice też przyjadę",
  nearbyParagraphs: [
    "Chorzów, Ruda Śląska i Bytom są tuż za granicą miasta — z każdego z nich jest tu kilka minut, więc spokojnie łączę dwa spotkania w jeden wieczór.",
  ],
  nearbyTowns: [
    "Chorzów",
    "Ruda Śląska",
    "Bytom",
    "Katowice",
    "Zabrze",
    "Siemianowice Śląskie",
    "Piekary Śląskie",
  ],

  about: blokOMnie("do Świętochłowic", "w Świętochłowicach i całej metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Świętochłowic bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Świętochłowicach"),
    {
      question: "Nie planuję posiłków na tydzień — czy Thermomix ma wtedy sens?",
      answer:
        "Ma, choć inny niż w reklamach. Największą wartością nie jest wtedy planowanie, tylko to, że z jednego zestawu produktów robisz kilka różnych rzeczy w jednym naczyniu — zupę, pastę albo sos, zależnie od tego, na co macie ochotę. Na prezentacji chętnie ugotuję z tego, co akurat masz w lodówce.",
    },
    {
      question: "Mam małą kuchnię w starej kamienicy — czy to problem?",
      answer:
        "Nie, ale powiedz o tym przy umawianiu. Przywiozę mniej naczyń i będziemy gotować prościej. Ważne, żeby przy blacie było wolne gniazdko.",
    },
  ],

  geo: { lat: 50.2919, lng: 18.9169 },
};
