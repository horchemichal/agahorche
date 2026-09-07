import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * KOSZALIN — największe miasto środkowego Pomorza, oddalone od Szczecina
 * o kilka godzin drogi; własny biegun regionu, a nie przedmieście stolicy
 * województwa.
 *
 * KĄT: co się dzieje po zakupie. To jest jedyne miejsce w serwisie
 * na opis kroku, którego nie ma nigdzie: DOSTAWA I PIERWSZE URUCHOMIENIE.
 * Wszystkie strony opisują spotkanie, żadna nie opisuje tego, co potem.
 *
 * SEKCJA MA BYĆ KONKRETNA I POZBAWIONA OBIETNIC TERMINOWYCH. Nie podaję
 * liczby dni ani godzin, bo tego nie kontroluję i każda taka obietnica
 * kiedyś okaże się nieprawdą. Opisuję KOLEJNOŚĆ ZDARZEŃ i to, co robię ja.
 *
 * DLACZEGO AKURAT TUTAJ: bo w regionie o tak dużych odległościach pytanie
 * „a jak długo będę czekać i kto to przywiezie" jest realne, a nie
 * teoretyczne.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Koszalin jest największym miastem środkowego Pomorza i leży daleko
 *   od Szczecina.
 */
export const KOSZALIN: CityContent = {
  slug: "koszalin",
  h1: "Thermomix Koszalin – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Koszalin — prezentacja i cena",
  seoDescription:
    "Thermomix w Koszalinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Koszalin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Koszalinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Koszalina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Koszalin i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Koszalinie – jak wygląda prezentacja?",
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
      id: "co-po-zakupie",
      heading: "A co się dzieje potem? Krok po kroku, bez obietnic terminowych",
      paragraphs: [
        "Wszystkie strony w internecie opisują, jak wygląda prezentacja. Prawie żadna nie opisuje tego, co dzieje się po niej — a właśnie o to pytają ludzie w regionie, w którym odległości są realne, a nie teoretyczne. W Koszalinie to pytanie pada zawsze: kto to przywiezie i jak długo będę czekać.",
        "Zacznę od tego, czego nie obiecam: nie podam liczby dni. Nie dlatego, że nie chcę, tylko dlatego, że nie kontroluję magazynu ani przewoźnika, a obietnica terminu złożona na stronie prędzej czy później okazałaby się nieprawdą. Podam natomiast kolejność zdarzeń, bo ta jest stała, i powiem, co w każdym kroku należy do mnie.",
        "Krok pierwszy: zamówienie. Składamy je razem, po Waszej decyzji — nie na spotkaniu pod presją, tylko wtedy, gdy jesteście gotowi. Wtedy też wybieracie formę płatności i, jeśli decydujecie się na raty, przechodzimy przez dokumenty.",
        "Krok drugi: dostawa. Urządzenie jedzie do Was przesyłką, a nie w moim bagażniku, i to jest ważne — dostajecie sprzęt fabrycznie zapakowany, nowy, nieotwierany, a nie ten, na którym gotowaliśmy. Ten, którym jeżdżę, jest urządzeniem demonstracyjnym i zostaje ze mną.",
        "Krok trzeci, ten najczęściej pomijany przez sprzedających: pierwsze uruchomienie. Dzwonię po dostawie i pytam, czy dotarło i czy wszystko działa. Jeśli chcecie, mogę przyjechać i przejść z Wami pierwsze gotowanie na Waszym własnym urządzeniu — to jest bezpłatne i nie jest żadną łaską, tylko normalną częścią tej pracy.",
        "Krok czwarty jest bezterminowy: zostaje mój numer telefonu. Po tygodniu, po pół roku, przy pytaniu o ciasto, które nie wyszło. To jest jedyna rzecz, którą naprawdę mogę obiecać, bo zależy wyłącznie ode mnie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Koszalinie?",
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
    sekcjaCena("w Koszalinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla koszalińskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Koszalina i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Przylesie",
    "Rokosowo",
    "Wenedów",
    "Unii Europejskiej",
    "Lechitów",
    "Jamno",
    "Raduszka",
    "Nowobramskie",
    "Morskie",
  ],

  nearbyHeading: "Poza Koszalin też przyjadę",
  nearbyParagraphs: [
    "Sianów, Mielno, Polanów i Bobolice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sianów", "Mielno", "Polanów", "Bobolice", "Darłowo", "Sławno"],

  about: blokOMnie("do Koszalina", "w Koszalinie i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Koszalina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Koszalinie"),
    {
      question: "Ile czeka się na dostawę?",
      answer:
        "Nie podam liczby dni, bo nie kontroluję magazynu ani przewoźnika, a obietnica terminu wpisana na stronę prędzej czy później okazałaby się nieprawdą. Powiem, jak wygląda kolejność: zamówienie składamy razem po Twojej decyzji, urządzenie jedzie przesyłką, a po dostawie dzwonię i pytam, czy dotarło i działa.",
    },
    {
      question: "Czy dostanę to urządzenie, na którym gotowaliśmy?",
      answer:
        "Nie — dostajesz sprzęt fabrycznie zapakowany, nowy i nieotwierany, wysyłany przesyłką. To, którym jeżdżę, jest urządzeniem demonstracyjnym i zostaje ze mną. Po dostawie mogę przyjechać i przejść z Tobą pierwsze gotowanie na Twoim własnym — bezpłatnie.",
    },
  ],

  geo: { lat: 54.1943, lng: 16.1722 },
};
