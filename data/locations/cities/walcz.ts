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
 * WAŁCZ — miasto położone między jeziorami, w okolicy, do której latem
 * przyjeżdża się nad wodę. Lato jest tu porą roku, którą widać
 * najbardziej.
 *
 * KĄT: lato i gorąca kuchnia. Miesiące, w których nikt nie chce
 * rozgrzewać piekarnika ani stać nad płytą, a jeść trzeba tak samo.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — gotowanie odbywa się w zamkniętym naczyniu, więc kuchnia nie robi się
 *   od tego tak gorąca jak od piekarnika i od palników — to obserwacja,
 *   nie pomiar, i tak ma być nazwana,
 * — realna letnia korzyść jest inna: nie trzeba przy tym STAĆ, a stanie
 *   nad garnkiem w upale jest najgorszą częścią gotowania latem,
 * — dobrze wychodzą wtedy chłodniki, przeciery, pasty, lody z owoców —
 *   rzeczy robione bez grzania albo z krótkim grzaniem,
 * — CZEGO NIE POWIEM: żadnych stopni, żadnych porównań zużycia prądu
 *   i żadnych porad o przechowywaniu jedzenia w upale.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH LICZB: temperatur w kuchni, stopni, zużycia energii.
 *   „Mniej gorąco niż od piekarnika" to obserwacja, nie pomiar.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I PSUCIU SIĘ JEDZENIA W UPALE.
 *   To dziedzina, w której zła rada szkodzi (zasada ze Skierniewic).
 * — ŻADNYCH PORÓWNAŃ RACHUNKU ZA PRĄD (to temat innego miasta).
 *
 * ROZGRANICZENIE. Sulechów mówi o wrześniowym przerobie owoców
 * z ogrodu, Krynica o gościach w sezonie, Ustka o zabieraniu sprzętu
 * na wyjazd. Tutaj chodzi o UPAŁ i o to, że latem nie chce się grzać
 * kuchni.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Wałcz leży wśród jezior, w okolicy odwiedzanej latem.
 */
export const WALCZ: CityContent = {
  slug: "walcz",
  h1: "Thermomix Wałcz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wałcz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wałczu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wałcz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wałczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wałcza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Wałcz i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Danie przygotowane w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Latem najbardziej męczy nie gotowanie, tylko stanie nad garnkiem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wałczu – jak wygląda prezentacja?",
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
      id: "lato-i-goraca-kuchnia",
      heading: "Miasto między jeziorami — i lipiec, w którym nikt nie chce grzać kuchni",
      paragraphs: [
        "Wałcz leży wśród jezior i lato jest tu porą roku, którą widać najbardziej — także w kuchni, choć akurat o tym nikt nie pisze. Bo latem problem nie polega na tym, że nie ma co ugotować. Polega na tym, że przy trzydziestu stopniach nikt nie chce włączać piekarnika ani stać nad palnikiem, a jeść trzeba dokładnie tak samo jak w listopadzie.",
        "Powiem najpierw rzecz, którą da się powiedzieć uczciwie. Gotowanie odbywa się tu w zamkniętym naczyniu, więc kuchnia nie nagrzewa się od tego tak, jak nagrzewa się od godziny pracy piekarnika albo od dwóch garnków parujących na płycie. To jest moja obserwacja z własnej kuchni, a nie pomiar — i nie podam Wam żadnych stopni ani porównań, bo ich po prostu nie mam.",
        "Prawdziwa letnia korzyść jest jednak inna i o niej mówię na spotkaniach. Nie trzeba przy tym stać. Stanie nad garnkiem w upale jest najgorszą częścią całego gotowania latem — gorszą niż samo ciepło, bo nie da się w tym czasie wyjść z kuchni. Danie, które pilnuje się samo, zmienia lipcowy obiad bardziej niż jakakolwiek różnica temperatur.",
        "Dobrze wychodzą wtedy rzeczy, które robi się bez grzania albo z krótkim grzaniem: chłodniki, przeciery i musy z owoców, pasty do chleba, sorbety z zamrożonych owoców. To są dania, przy których urządzenie jest w swoim żywiole, bo cała robota polega na rozdrobnieniu, a nie na gotowaniu.",
        "Nie doradzę Wam za to niczego o przechowywaniu jedzenia w upale — ile może stać, co jeszcze nadaje się do zjedzenia, jak to trzymać. To jest dziedzina, w której zła podpowiedź komuś realnie szkodzi, a ja nie jestem od tego i nie zamierzam udawać, że jestem. Kierujcie się tym, czym kierowaliście się dotąd.",
        "I nie będę porównywać rachunku za prąd między piekarnikiem a tym urządzeniem. Nie mam takich danych, a liczby wyciągnięte z rękawa przy okazji upału brzmią przekonująco i są zwykle nieprawdziwe. Jeśli latem szukacie w kuchni ulgi, to szukajcie jej w tym, że nie trzeba stać — a nie w wyliczeniach, których nikt Wam nie sprawdzi.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wałczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Latem chętnie umawiam się rano albo wieczorem — powiedzcie, co Wam pasuje, a dopasuję godzinę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wałczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wałeckiej rodziny",
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

  districtsHeading: "Do których części Wałcza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Osiedle Tysiąclecia",
    "Dolne Miasto",
    "Zatorze",
    "Osiedle Piastowskie",
    "Raduń",
    "Bukowina",
  ],

  nearbyHeading: "Poza Wałcz też przyjadę",
  nearbyParagraphs: [
    "Człopa, Tuczno, Mirosławiec i Piła są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Człopa", "Tuczno", "Mirosławiec", "Piła", "Złotów", "Drawsko Pomorskie"],

  about: blokOMnie("do Wałcza", "w Wałczu i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wałcza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wałczu"),
    {
      question: "Czy latem kuchnia nagrzewa się od tego mniej?",
      answer:
        "Gotowanie odbywa się w zamkniętym naczyniu, więc kuchnia nie nagrzewa się tak jak od godziny pracy piekarnika czy od dwóch garnków na płycie. To moja obserwacja, a nie pomiar — stopni ani porównań nie podam, bo ich nie mam. Większą letnią ulgą jest zresztą to, że nie trzeba przy tym stać.",
    },
    {
      question: "Co dobrze wychodzi latem?",
      answer:
        "Rzeczy robione bez grzania albo z krótkim grzaniem: chłodniki, przeciery i musy owocowe, pasty do chleba, sorbety z mrożonych owoców. Cała robota polega tam na rozdrobnieniu, a nie na gotowaniu. O przechowywaniu jedzenia w upale nie doradzam — to nie moja dziedzina.",
    },
  ],

  geo: { lat: 53.2764, lng: 16.4756 },
};
