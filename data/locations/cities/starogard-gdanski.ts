import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * STAROGARD GDAŃSKI — główne miasto Kociewia, regionu leżącego między
 * Borami Tucholskimi a Wisłą, często mylonego z Kaszubami. Miasto
 * o starym rodowodzie i długiej tradycji wytwórczej.
 *
 * KĄT: cmentarzysko sprzętów kuchennych. Najuczciwsze pytanie, jakie można
 * zadać przed tym zakupem, brzmi: „a co z tamtymi urządzeniami, które
 * kupiliście i których używacie dwa razy w roku?". Wypiekacz do chleba,
 * sokowirówka, frytkownica, robot planetarny — prawie każdy dom ma taki
 * kąt w szafce i prawie nikt o nim głośno nie mówi.
 *
 * SEKCJA MA ZROBIĆ RZECZ NIEWYGODNĄ DLA SPRZEDAWCY: zamiast zapewniać,
 * że „tym razem będzie inaczej", ma podać SPRAWDZALNE ROZRÓŻNIENIE między
 * sprzętem, który zostaje w użyciu, a tym, który ląduje w szafce.
 * Kryterium jest jedno i da się je zastosować przed zakupem:
 * CZY TO ROBI COŚ, CO ROBICIE CO TYDZIEŃ, CZY COŚ, CO ROBICIE OD ŚWIĘTA.
 *
 * OBOWIĄZKOWA KONSEKWENCJA: jeśli z tego testu wyjdzie „od święta",
 * strona ma powiedzieć wprost — nie kupujcie.
 *
 * TWARDE GRANICE:
 * — NIE OCENIAM INNYCH URZĄDZEŃ ANI MAREK. Wypiekacz nie jest zły;
 *   po prostu piecze chleb, a chleb piecze się rzadziej, niż się planuje.
 * — NIE OBIECUJĘ, że ten sprzęt „na pewno" będzie używany. Nie wiem tego
 *   i nikt nie wie.
 *
 * ROZGRANICZENIE. Głogów mówi „nie dokupujcie kompletu akcesoriów",
 * Konin opisuje trzeci tydzień, w którym nawyk się nie wytwarza, Nowa
 * Słupia wylicza, czego ten sprzęt nie zastąpi. Tutaj przedmiotem są
 * INNE, JUŻ KUPIONE URZĄDZENIA i wniosek, jaki z nich płynie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Starogard Gdański jest głównym miastem Kociewia.
 */
export const STAROGARD_GDANSKI: CityContent = {
  slug: "starogard-gdanski",
  h1: "Thermomix Starogard Gdański – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Starogard Gdański — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Starogardzie Gdańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Starogard Gdański — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Starogardzie Gdańskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Starogardu Gdańskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Starogard Gdański i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najważniejsze pytanie brzmi: czy to robi coś, co robicie co tydzień?",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Starogardzie Gdańskim – jak wygląda prezentacja?",
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
      id: "szafka-ze-sprzetem",
      heading: "A co z tamtymi urządzeniami, które stoją w szafce?",
      paragraphs: [
        "Zadam pytanie, którego sprzedawca zwykle unika, bo nie działa na jego korzyść. Prawie każdy dom ma w szafce kąt, w którym stoi wypiekacz do chleba używany cztery razy, sokowirówka z zeszłego lata, frytkownica i robot, który wyszedł z użycia, kiedy skończył się zapał. Skoro tamte urządzenia tam stoją, to czemu z tym miałoby być inaczej?",
        "Nie odpowiem na to zapewnieniem, bo zapewnienie nic nie kosztuje. Odpowiem kryterium, które możecie zastosować sami, jeszcze przed zakupem — i które równie dobrze może wypaść przeciwko mnie.",
        "Kryterium brzmi tak: sprzęt zostaje w użyciu wtedy, gdy robi coś, co robicie CO TYDZIEŃ. Ląduje w szafce wtedy, gdy robi coś, co robicie OD ŚWIĘTA. To jest cała różnica i nie ma w niej nic o marce ani o jakości.",
        "Spójrzmy na tym tle na tamte urządzenia, bez ich obrażania — bo żadne z nich nie jest złe. Wypiekacz piecze chleb, a chleb w polskim domu piecze się rzadziej, niż się planuje przy zakupie. Sokowirówka robi sok, czyli rzecz sezonową i pracochłonną w myciu. Frytkownica robi jedną kategorię dania. Każde z nich jest dobre w czymś wąskim — i dlatego czeka na okazję, która przychodzi rzadko.",
        "Teraz uczciwie o tym sprzęcie. On nie robi jednej rzeczy od święta, tylko przejmuje fragment zwykłego, tygodniowego gotowania: zupę, sos, danie w jednym naczyniu, ciasto na drożdżach, przecier dla dziecka. Jeśli te rzeczy powstają u Was regularnie, będzie używany. Jeśli u Was gotuje się głównie w niedzielę, a w tygodniu je się na mieście albo odgrzewa — pójdzie do szafki, tak jak tamte, i będzie to droga szafka.",
        "Dlatego na spotkaniu pytam, co jecie w zwykłą środę, a nie co byście chcieli gotować. To dwie różne odpowiedzi i tylko pierwsza cokolwiek przewiduje. Jeśli z niej wyjdzie, że Wasza kuchnia to głównie patelnia i piekarnik — powiem, żebyście nie kupowali, i to nie jest kokieteria.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez lukru" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Starogardzie Gdańskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przygotuj jedną odpowiedź: co jedliście w tym tygodniu od poniedziałku do piątku. Od tego zacznę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Starogardzie Gdańskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla starogardzkiej rodziny",
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

  districtsHeading: "Do których części Starogardu i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Kopernika",
    "Piastowskie",
    "Konstytucji 3 Maja",
    "Zblewska",
    "Lubichowska",
    "Żabno",
    "Południe",
    "Skarszewska",
  ],

  nearbyHeading: "Poza Starogard też przyjadę",
  nearbyParagraphs: [
    "Tczew, Skarszewy, Zblewo i Pelplin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Tczew", "Skarszewy", "Zblewo", "Pelplin", "Gniew", "Czarna Woda"],

  about: blokOMnie("do Starogardu Gdańskiego", "w Starogardzie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Starogardu Gdańskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Starogardzie Gdańskim"),
    {
      question: "Mam już w szafce sprzęty, których nie używam. Czemu z tym miałoby być inaczej?",
      answer:
        "Bo różnica nie leży w marce, tylko w tym, jak często robi się to, co dane urządzenie robi. Sprzęt zostaje w użyciu, gdy przejmuje coś z tygodniowego gotowania; ląduje w szafce, gdy robi coś od święta. Wypiekacz piecze chleb, a chleb piecze się rzadziej, niż się planuje — i to nie jest wada wypiekacza.",
    },
    {
      question: "A jeśli okaże się, że u nas też będzie stać?",
      answer:
        "To Wam to powiem, zanim kupicie. Na spotkaniu pytam, co jedliście w zwykłym tygodniu — nie co chcielibyście gotować. Jeśli z odpowiedzi wyjdzie, że Wasza kuchnia to głównie patelnia i piekarnik, powiem, żebyście nie kupowali.",
    },
  ],

  geo: { lat: 53.9622, lng: 18.5297 },
};
