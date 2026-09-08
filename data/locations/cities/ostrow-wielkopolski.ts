import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * OSTRÓW WIELKOPOLSKI — duży węzeł kolejowy z zakładami naprawczymi taboru;
 * miasto, które przez półtora wieku żyło z kolei, czyli z rzeczy działającej
 * wyłącznie dlatego, że wszystko jest ułożone w rozkład.
 *
 * KĄT: planowanie tygodnia. Miasto rozkładów jazdy jest jedynym właściwym
 * miejscem na temat, który w internecie występuje wyłącznie w wersji
 * naiwnej: GOTOWANIE Z WYPRZEDZENIEM. Sekcja ma być praktyczna i musi
 * zawierać podział na to, co realnie zyskuje na przygotowaniu wcześniej,
 * i to, CO NA TYM TRACI — bo druga lista jest dłuższa, niż się mówi.
 *
 * CZEGO NIE ROBIMY: nie podajemy zaleceń dotyczących przechowywania
 * żywności ani terminów — to dziedzina, w której nie mam kompetencji.
 * Piszemy o smaku i konsystencji, nie o bezpieczeństwie.
 *
 * ROZGRANICZENIE. Leszno dostało resztki PO obiedzie. Tutaj chodzi
 * o świadome gotowanie PRZED — o niedzielę wieczorem, nie o czwartek.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Ostrów Wielkopolski jest ważnym węzłem kolejowym z zakładami
 *   naprawczymi taboru.
 */
export const OSTROW_WIELKOPOLSKI: CityContent = {
  slug: "ostrow-wielkopolski",
  h1: "Thermomix Ostrów Wielkopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ostrów Wielkopolski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ostrowie Wielkopolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ostrów Wielkopolski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ostrowie Wielkopolskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ostrowa Wielkopolskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Ostrów Wielkopolski i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ostrowie Wielkopolskim – jak wygląda prezentacja?",
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
      id: "planowanie-tygodnia",
      heading: "Miasto rozkładów jazdy — i uczciwie o gotowaniu z wyprzedzeniem",
      paragraphs: [
        "Ostrów przez półtora wieku żył z kolei, a kolej działa wyłącznie dlatego, że wszystko jest wcześniej ułożone w rozkład. Wykorzystuję to do tematu, który w internecie występuje prawie zawsze w wersji naiwnej: do gotowania na kilka dni do przodu.",
        "Wersja naiwna brzmi tak: w niedzielę robi się garnek wszystkiego, rozkłada do pudełek i przez tydzień tylko odgrzewa. Po dwóch tygodniach większość ludzi tego nie znosi i wraca do gotowania na bieżąco — bo w czwartek jedzenie z niedzieli smakuje jak jedzenie z niedzieli.",
        "Moje doświadczenie jest inne i sprowadza się do rozdzielenia dwóch rzeczy: nie przygotowuje się z wyprzedzeniem gotowych dań, tylko ich składowe.",
        "Rzeczy, które naprawdę zyskują na zrobieniu wcześniej: sos pomidorowy i każdy inny sos na bazie warzyw, bo po dwóch dniach są lepsze niż w dniu zrobienia. Wywar, bulion, koncentrat do zup. Pasty na kanapki i hummus. Ciasto na pizzę albo bułki, które spokojnie poczeka w lodówce. Mielone mięso z przyprawami, gotowe do usmażenia. Kasza i ryż na dwa dni. Mus owocowy i kompot.",
        "Rzeczy, które na tym tracą, i o których się nie mówi: wszystko smażone — po odgrzaniu jest to inne danie i gorsze. Makaron, który dochodzi w pudełku i robi się miękki. Sałatki z surowych warzyw, które puszczają wodę. Naleśniki, które sklejają się w kostkę. Ziemniaki, które po drugim dniu mają dziwną, słodkawą konsystencję. Ryba, która po odgrzaniu przestaje być tą samą rybą.",
        "Praktyczny wniosek jest więc taki: w niedzielę robicie sos, wywar, kaszę i pastę. W środę dorzucacie do tego świeże mięso albo warzywa, i macie obiad w kwadrans, który smakuje jak zrobiony w środę, a nie w niedzielę. To jest cała tajemnica.",
        "Rola urządzenia jest tu prosta i nie zamierzam jej wyolbrzymiać: sos, wywar, pasta i ciasto powstają w nim jedno po drugim, w tym samym naczyniu, płukanym między nimi. Godzina w niedzielę wieczorem zamiast czterech garnków.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz w lodówce" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ostrowie Wielkopolskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ostrowie Wielkopolskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ostrowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że kilka rzeczy powstaje jedna po drugiej w tym samym naczyniu. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem.",
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

  districtsHeading: "Do których części Ostrowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Nowe Parcele",
    "Krępa",
    "Pruślin",
    "Zacharzew",
    "Wenecja",
    "Zębców",
    "Szczygliczka",
    "Kamienice",
    "Lamki",
  ],

  nearbyHeading: "Poza Ostrów też przyjadę",
  nearbyParagraphs: [
    "Kalisz, Odolanów, Nowe Skalmierzyce, Raszków i Pleszew są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kalisz", "Odolanów", "Nowe Skalmierzyce", "Raszków", "Pleszew", "Ostrzeszów"],

  about: blokOMnie("do Ostrowa Wielkopolskiego", "w Ostrowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ostrowa Wielkopolskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ostrowie Wielkopolskim"),
    {
      question: "Czy da się w niedzielę ugotować na cały tydzień?",
      answer:
        "Da się, ale nie w wersji, którą pokazuje internet. Nie warto robić gotowych dań na pięć dni, bo w czwartek smakują jak jedzenie z niedzieli. Warto robić składowe: sos, wywar, pastę, kaszę, ciasto — a w środę dorzucić do nich świeże mięso albo warzywa. Obiad powstaje wtedy w kwadrans i smakuje jak zrobiony w środę.",
    },
    {
      question: "Czego nie warto przygotowywać wcześniej?",
      answer:
        "Wszystkiego smażonego, makaronu, sałatek z surowych warzyw, naleśników, ziemniaków i ryby — to są rzeczy, które po odgrzaniu są po prostu inne i gorsze. Sosy na bazie warzyw są odwrotnie: po dwóch dniach lepsze niż w dniu zrobienia.",
    },
  ],

  geo: { lat: 51.6547, lng: 17.8100 },
};
