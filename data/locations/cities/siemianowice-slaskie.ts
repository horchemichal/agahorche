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
 * SIEMIANOWICE ŚLĄSKIE — jedno z najmniejszych powierzchniowo miast
 * metropolii i jedno z najgęściej zabudowanych. Z Bytkowa do Michałkowic
 * jedzie się kilka minut, a do Katowic czy Chorzowa jeszcze mniej.
 *
 * KĄT: w mieście tej wielkości rodzina zwykle nie mieszka razem, ale mieszka
 * BLISKO — mama kilka ulic dalej, siostra na sąsiednim osiedlu, babcia
 * w Michałkowicach. Gotowanie jest wtedy rozłożone na kilka mieszkań:
 * ktoś robi rosół, ktoś inny drugie danie, w niedzielę wszyscy siadają
 * u jednej osoby. To zupełnie inna sytuacja niż jedno gospodarstwo domowe
 * gotujące tylko dla siebie — i inna niż dom wielopokoleniowy w Bytomiu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Siemianowice Śląskie należą do najmniejszych powierzchniowo miast
 *   na prawach powiatu w regionie i graniczą m.in. z Katowicami, Chorzowem,
 *   Bytomiem i Piekarami Śląskimi,
 * — miasto powstało z połączenia Siemianowic z Michałkowicami, Bytkowem
 *   i Przełajką — dzielnice te były wcześniej samodzielne,
 * — działała tu Huta Laura, jeden z ważniejszych zakładów regionu; dziś
 *   po przemyśle zostały tereny zrekultywowane i Park Tradycji,
 * — Park Śląski w sąsiednim Chorzowie sąsiaduje z Bytkowem.
 *
 * CZEGO NIE MA: powierzchni miasta i gęstości zaludnienia podanych jako
 * liczby, danych o hucie, statystyk struktury gospodarstw domowych.
 */
export const SIEMIANOWICE_SLASKIE: CityContent = {
  slug: "siemianowice-slaskie",
  h1: "Thermomix Siemianowice Śląskie – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Siemianowice Śląskie — prezentacja i cena",
  seoDescription:
    "Thermomix w Siemianowicach Śląskich: bezpłatna prezentacja TM7 u Ciebie w kuchni, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Siemianowice Śląskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Siemianowicach. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Siemianowic Śląskich z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Centrum, na Bytkowie, w Michałkowicach czy na Bańgowie. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("całe Siemianowice, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Siemianowicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu, a dobiorę dania pod Was.",
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
      id: "rodzina-kilka-ulic-dalej",
      heading: "Miasto, w którym cała rodzina mieszka w promieniu kilku ulic",
      paragraphs: [
        "Siemianowice są małe i gęsto zabudowane — z Bytkowa do Michałkowic jedzie się kilka minut. Bardzo często oznacza to układ, którego nie ma w większych miastach: rodzina nie mieszka razem, ale mieszka blisko. Mama dwie ulice dalej, siostra na sąsiednim osiedlu, babcia w Michałkowicach.",
        "Gotowanie jest wtedy rozłożone na kilka mieszkań. Ktoś robi rosół, ktoś inny drugie danie, a w niedzielę wszyscy siadają u jednej osoby — i to zawsze u tej samej. Ta jedna osoba gotuje wtedy dla dziesięciu, w kuchni przewidzianej dla dwojga.",
        "Thermomix ma tu bardzo prosty sens: większa porcja nie oznacza większego pilnowania. Zupa czy sos gotuje się z ustawioną temperaturą i mieszaniem, ciasto wyrabia się samo, a wszystko dzieje się w jednym naczyniu — więc po niedzielnym obiedzie nie zostaje pół kuchni do zmywania.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Siemianowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — ustalenie terminu zajmuje kilka minut. Możesz też zostawić kontakt w formularzu i dopisać, o której oddzwonić.",
        "Miasto jest niewielkie, więc dojazd nigdy nie jest tu problemem. Przy umawianiu przydaje mi się tylko dzielnica i informacja, czy pod blokiem da się zaparkować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Siemianowicach Śląskich"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla siemianowickiej rodziny",
      paragraphs: [
        "W tygodniu wygląda to inaczej niż w niedzielę: każdy pracuje gdzie indziej, często w Katowicach albo Chorzowie, i wraca o innej porze. Obiad przestaje być jednym wydarzeniem, a staje się serią talerzy.",
        "Thermomix pomaga w obu trybach naraz. W tygodniu — bo danie może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. W niedzielę — bo podwojenie porcji nie oznacza podwojenia pracy.",
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

  districtsHeading: "Do których dzielnic Siemianowic dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Michałkowice, Bytków, Bańgów i Przełajka były kiedyś osobnymi miejscowościami i do dziś mają swój charakter — ale odległości są tu na tyle małe, że nie wpływają nawet na porę spotkania.",
  ],
  districts: [
    "Centrum",
    "Bytków",
    "Michałkowice",
    "Bańgów",
    "Przełajka",
    "Osiedle Chemik",
    "Osiedle Tuwima",
    "Pszczelnik",
    "Srokowiec",
  ],

  nearbyHeading: "Poza Siemianowice też przyjadę",
  nearbyParagraphs: [
    "Siemianowice graniczą z Katowicami, Chorzowem, Bytomiem i Piekarami Śląskimi — wszędzie stąd jest kilkanaście minut, więc spokojnie łączę dwa spotkania w jeden wieczór.",
  ],
  nearbyTowns: [
    "Katowice",
    "Chorzów",
    "Bytom",
    "Piekary Śląskie",
    "Czeladź",
    "Będzin",
    "Świętochłowice",
  ],

  about: blokOMnie("do Siemianowic", "w Siemianowicach i całej metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Siemianowic bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Siemianowicach Śląskich"),
    {
      question: "Gotuję w niedzielę dla całej rodziny — czy Thermomix da radę przy dużych porcjach?",
      answer:
        "Da, choć trzeba wiedzieć jak. Misa ma swoją pojemność, więc przy naprawdę dużej liczbie osób część rzeczy robi się na dwa razy — ale bez pilnowania, więc druga tura kosztuje Cię tylko czas urządzenia, a nie Twój. Na prezentacji pokażę to na konkretnym daniu, które faktycznie robisz w niedzielę.",
    },
    {
      question: "Czy mogę zaprosić mamę i siostrę na tę samą prezentację?",
      answer:
        "Jak najbardziej — i to najlepszy układ, jaki może być. Skoro gotujecie dla siebie nawzajem, decyzja też zwykle jest wspólna, a pytania w grupie padają odważniejsze.",
    },
  ],

  geo: { lat: 50.3268, lng: 19.0289 },
};
