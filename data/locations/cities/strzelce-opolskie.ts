import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * STRZELCE OPOLSKIE — miasto powiatowe w środkowej części województwa,
 * z ruinami zamku w dużym parku. Leży w tej części Opolszczyzny, gdzie
 * tablice z nazwami miejscowości bywają dwujęzyczne, a w domach mówi się
 * po śląsku.
 *
 * KĄT: potrawa, która ma dwie nazwy. Ściśle kuchenny i ściśle praktyczny.
 * W tej okolicy to samo danie bywa nazywane inaczej w zależności od domu
 * i od pokolenia — i to samo danie bywa też robione inaczej. Dla mnie
 * ma to konkretny skutek: PYTAM, ZAMIAST ZAKŁADAĆ, i proszę, żeby nazwać
 * potrawę po swojemu, a nie „poprawnie".
 *
 * CZEGO TU NIE MA I NIE MOŻE BYĆ: opowiadania mieszkańcom o ich własnej
 * tożsamości, historii, języku ani polityce. Nie mam do tego kompetencji
 * ani prawa. Piszę wyłącznie o tym, jak umawiam prezentację i o czym pytam
 * przy stole. Jeżeli ktoś kiedyś będzie chciał tę stronę „wzbogacić"
 * o wywód o Śląsku Opolskim — nie należy tego robić.
 *
 * ROZGRANICZENIE WOBEC CIESZYNA I PRZEMYŚLA. Cieszyn dostał kąt „to jest
 * Śląsk Cieszyński i to znaczy inną kuchnię", Przemyśl „nie przywożę tu
 * gotowej opowieści". Tutaj chodzi o coś węższego: o NAZWY potraw i o to,
 * że pytam o nie przed przyjazdem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w części gmin województwa opolskiego funkcjonują dwujęzyczne tablice
 *   z nazwami miejscowości,
 * — w Strzelcach Opolskich zachowały się ruiny zamku w parku,
 * — miasto jest siedzibą powiatu, leży przy trasie w kierunku Gliwic.
 *
 * CZEGO NIE MA: nazw potraw podawanych jako „poprawne", przepisów
 * regionalnych, danych o mniejszości.
 */
export const STRZELCE_OPOLSKIE: CityContent = {
  slug: "strzelce-opolskie",
  h1: "Thermomix Strzelce Opolskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Strzelce Opolskie — prezentacja i cena",
  seoDescription:
    "Thermomix w Strzelcach Opolskich: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Strzelce Opolskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Strzelcach Opolskich. Prezentacja bezpłatna — gotujemy to, co u Was się je.",

  lead:
    "Przyjeżdżam do Strzelec Opolskich z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Strzelce Opolskie i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Strzelcach Opolskich – jak wygląda prezentacja?",
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
      id: "potrawa-ma-dwie-nazwy",
      heading: "Powiedzcie mi, jak to danie nazywa się u Was",
      paragraphs: [
        "Jadąc w tę stronę, mija się tablice z nazwami miejscowości zapisanymi na dwa sposoby. Nie będę o tym pisać nic więcej, bo to jest Wasza sprawa i Wasza historia, a ja przyjeżdżam tu z garnkiem, nie z wykładem.",
        "Zwrócę uwagę tylko na jedną rzecz, czysto kuchenną, którą zauważyłam, jeżdżąc po tej okolicy. Bardzo wiele potraw ma tu dwie nazwy — jedną, której używa babcia, i drugą, którą wpisuje się w wyszukiwarkę. A do tego to samo danie robi się inaczej w domu po jednej i po drugiej stronie tej samej ulicy: inne proporcje, inny dodatek, inna gęstość.",
        "Dla mnie ma to bardzo praktyczny skutek. Nie przyjeżdżam z gotowym pomysłem na „danie regionalne”, bo trafiłabym w wersję jednej rodziny, a pozostałym pokazała coś, czego u siebie nie robią — i jeszcze zabrzmiałabym, jakbym ich uczyła ich własnej kuchni.",
        "Dlatego proszę o coś prostego przy umawianiu: powiedzcie, jak to danie nazywa się u Was, i opiszcie je swoimi słowami. Nie „poprawnie” — po swojemu. Ja to zapiszę i przywiozę składniki dokładnie na to, a nie na wersję z książki.",
        "Na spotkaniu ugotujemy to razem i wtedy zobaczycie rzecz najważniejszą: nie czy urządzenie robi jakieś ładne dania z folderu, tylko czy skraca robotę przy tym jednym, które u Was jest naprawdę robione.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Strzelcach Opolskich?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Powiedz przy okazji, co u Was gotuje się najczęściej i jak to nazywacie — przywiozę składniki na to danie.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Strzelcach Opolskich"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla strzeleckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — ta sama, która zna wszystkie rodzinne wersje przepisów.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Strzelce Opolskie",
    "Szymiszów",
    "Kalinowice",
    "Rozmierz",
    "Rozmierka",
    "Sucha",
    "Warmątowice",
    "Dziewkowice",
    "Błotnica Strzelecka",
    "Kadłub",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Zawadzkie, Leśnica, Ujazd, Kolonowskie i Gogolin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zawadzkie", "Leśnica", "Ujazd", "Kolonowskie", "Gogolin", "Ozimek"],

  about: blokOMnie("do Strzelec Opolskich", "w gminie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Strzelec Opolskich bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Strzelcach Opolskich"),
    {
      question: "Czy ugotujemy nasze danie, a nie Twoje?",
      answer:
        "Bardzo o to proszę. Powiedz przy umawianiu, co u Was robi się najczęściej i jak to nazywacie — przywiozę składniki dokładnie na to. Danie z folderu wyjdzie zawsze; dopiero Wasze pokaże, czy urządzenie coś Wam realnie skróci.",
    },
    {
      question: "Czy znasz tutejsze przepisy?",
      answer:
        "Nie na tyle, żeby kogokolwiek uczyć jego własnej kuchni, i nie zamierzam udawać, że jest inaczej. Wolę zapytać, jak robicie to u siebie, i pod to przygotować spotkanie.",
    },
  ],

  geo: { lat: 50.5122, lng: 18.3011 },
};
