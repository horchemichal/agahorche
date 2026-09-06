import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * SZYDŁÓW — jedno z najmniejszych miast w Polsce, otoczone zachowanym
 * pierścieniem średniowiecznych murów obronnych z Bramą Krakowską.
 * Bywa nazywany polskim Carcassonne. Okolica słynie ze śliwek — jest tu
 * coroczne Święto Śliwki.
 *
 * KĄT: powidła. Iwkowa dostała już stronę o suszarniach i suszonych
 * śliwkach, więc DRUGI raz o suszeniu pisać nie wolno. Ale powidła to jest
 * zupełnie inna robota i akurat ta, przy której urządzenie robi realną
 * różnicę: masę smaży się godzinami, mieszając bez przerwy, bo inaczej
 * przywiera do dna. MIESZANIE Z USTAWIONĄ TEMPERATURĄ JEST DOKŁADNIE TYM,
 * CZEGO TA ROBOTA WYMAGA — i to jest uczciwy, sprawdzalny argument,
 * a nie obietnica.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Szydłów zachował pierścień średniowiecznych murów miejskich z Bramą
 *   Krakowską i bywa nazywany polskim Carcassonne,
 * — jest to jedno z najmniejszych miast w Polsce,
 * — okolica słynie ze śliwek, a w mieście odbywa się Święto Śliwki,
 * — Szydłów leży między Staszowem, Chmielnikiem i Buskiem-Zdrojem.
 *
 * CZEGO NIE MA: odmian śliwek, wielkości zbiorów, konkretnych proporcji
 * przepisu (bo powidła robi się u każdego inaczej i nie moja rzecz
 * poprawiać tutejsze domowe sposoby).
 */
export const SZYDLOW: CityContent = {
  slug: "szydlow",
  h1: "Thermomix Szydłów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Szydłów — prezentacja i cena",
  seoDescription:
    "Thermomix w Szydłowie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szydłów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szydłowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szydłowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Solca, Kotuszowa, Rudek i pozostałych sołectw gminy.",

  highlights: highlightyStandardowe("Szydłów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szydłowie – jak wygląda prezentacja?",
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
      id: "powidla",
      heading: "Powidła — czyli garnek, przy którym trzeba stać cztery godziny",
      paragraphs: [
        "Szydłów ma dwie rzeczy, których nie ma prawie nikt: pierścień średniowiecznych murów wokół małego miasteczka i śliwki, które doczekały się własnego święta. O suszeniu nie będę tu pisać, bo w każdym tutejszym domu wiedzą o tym więcej niż ja. Ale o powidłach powiem, bo to jest akurat ta robota, przy której mam coś konkretnego do zaproponowania.",
        "Powidła to nie jest gotowanie. To jest pilnowanie. Masa smaży się godzinami, gęstnieje i im jest gęstsza, tym łatwiej przywiera do dna — więc trzeba mieszać, i to nie raz na kwadrans, tylko właściwie bez przerwy. Kto raz przypalił garnek pod koniec, ten wie, że przepada nie tylko masa, ale i cały dzień pracy.",
        "I dokładnie na to Thermomix ma odpowiedź, która nie jest obietnicą, tylko opisem tego, co robi: utrzymuje ustawioną temperaturę i mieszać może przez cały czas, sam. Nie stoisz przy garnku. Nie zdrapujesz dna. Nie musisz wybierać między pilnowaniem masy a odebraniem dziecka ze szkoły.",
        "Powiem też, czego nie zrobi, żeby nie było rozczarowań. Nie wydrąży pestek — to nadal robota rąk. I nie zmieści całego wiadra naraz, więc przy dużej ilości robi się to partiami. Ale każda partia dzieje się bez Was, a nie z Wami przy kuchence.",
        "Jeśli u Was we wrześniu i tak stoi garnek, to jest najlepszy moment, żeby zobaczyć to na własne oczy. Umówcie prezentację akurat wtedy i zrobimy to na Waszych śliwkach, a nie na moich składnikach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szydłowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Szydłowem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szydłowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla szydłowskiej rodziny",
      paragraphs: [
        "Obiad jest tu zwykle jednym wspólnym posiłkiem, gotowanym z własnych produktów i z zapasu, a przygotowuje go ta sama osoba — codziennie i przez cały rok.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie kilku naczyń po jednym daniu. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, więc może pracować bez Was, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Szydłów",
    "Solec",
    "Kotuszów",
    "Rudki",
    "Potok",
    "Osówka",
    "Grabki Duże",
    "Mokre",
    "Wola Żyzna",
    "Gacki",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Staszów, Chmielnik, Busko-Zdrój, Stopnica i Pierzchnica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Staszów", "Chmielnik", "Busko-Zdrój", "Stopnica", "Pierzchnica", "Połaniec"],

  about: blokOMnie("do Szydłowa", "w gminie Szydłów i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szydłowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Szydłowie"),
    {
      question: "Czy w Thermomixie da się zrobić powidła?",
      answer:
        "Tak i to jest jedna z tych rzeczy, przy których widać różnicę najwyraźniej: masa gotuje się z ustawioną temperaturą i mieszaniem, więc nie trzeba przy niej stać ani zdrapywać dna. Pestki trzeba wydrążyć samodzielnie, a przy większej ilości robi się to partiami — ale każda partia dzieje się bez Was.",
    },
    {
      question: "Czy możemy ugotować coś z moich składników zamiast Twoich?",
      answer:
        "Bardzo chętnie. Jeśli akurat macie śliwki albo cokolwiek, co czeka na przerobienie, powiedzcie przy umawianiu — zrobimy to na Waszym, bo wtedy naprawdę widać, czy urządzenie się u Was sprawdzi.",
    },
  ],

  geo: { lat: 50.5931, lng: 20.8556 },
};
