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
 * PRUSZCZ GDAŃSKI — miejsce dawnej osady przy szlaku bursztynowym,
 * dziś z odtworzoną faktorią. Przez wieki wyrabiano tu i wymieniano
 * rzeczy robione ręcznie.
 *
 * KĄT: „ja lubię gotować i nie chcę, żeby maszyna mi to odebrała".
 * Zarzut osoby, która gotuje dużo i dobrze — najzupełniej uzasadniony,
 * a przez sprzedawców traktowany jak nieporozumienie do wyprostowania.
 *
 * SEKCJA MA POTRAKTOWAĆ TEN ZARZUT SERIO:
 * — dla części osób gotowanie jest odpoczynkiem, a nie obowiązkiem,
 *   i wtedy skracanie go nie jest żadną korzyścią,
 * — trzeba rozdzielić dwie rzeczy: czynności, które daje się lubić
 *   (krojenie, doprawianie, patrzenie), i czynności, których nie lubi
 *   nikt (mieszanie przez dwadzieścia minut, pilnowanie, zmywanie),
 * — urządzenie jest dobre w tych drugich i to jest cała prawda o nim,
 * — i uczciwie: dla kogoś, kto lubi cały proces łącznie z tą drugą
 *   częścią, to jest słaby zakup i powiem to wprost.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO PRZEKONYWANIA, że gotowanie ręczne jest gorsze, wolniejsze
 *   albo mniej wartościowe.
 * — ŻADNYCH PORÓWNAŃ SMAKU: nie twierdzę, że wychodzi lepiej.
 * — ŻADNYCH USTAWIEŃ ani obietnic o konkretnych technikach kuchennych.
 *
 * ROZGRANICZENIE. Żary mówi do osoby, która NIE UMIE gotować, Nowa Sól
 * do tej, która przestała, Oława do domu, w którym się nie je w domu.
 * Tutaj chodzi o osobę, która gotuje dużo i to lubi.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Pruszczu Gdańskim odtworzono faktorię przy dawnym szlaku
 *   bursztynowym.
 */
export const PRUSZCZ_GDANSKI: CityContent = {
  slug: "pruszcz-gdanski",
  h1: "Thermomix Pruszcz Gdański – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pruszcz Gdański — prezentacja i cena",
  seoDescription:
    "Thermomix w Pruszczu Gdańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pruszcz Gdański — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pruszczu Gdańskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pruszcza Gdańskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Pruszcz Gdański i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Danie przygotowane w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Jeśli lubicie cały proces, to jest słaby zakup — i tak powiem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pruszczu Gdańskim – jak wygląda prezentacja?",
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
      id: "lubie-gotowac",
      heading: "Miejsce dawnej faktorii — i zdanie „ja po prostu lubię gotować”",
      paragraphs: [
        "W Pruszczu Gdańskim odtworzono faktorię przy dawnym szlaku bursztynowym: miejsce, w którym przez wieki wyrabiano rzeczy ręcznie i na tym opierało się całe życie osady. Wykorzystam to do zarzutu, który słyszę od osób gotujących dużo i dobrze, a który sprzedawcy zbywają jak nieporozumienie: ja lubię gotować i nie chcę, żeby maszyna mi to odebrała.",
        "Ten zarzut jest w pełni uzasadniony i nie zamierzam go prostować. Dla części ludzi gotowanie nie jest obowiązkiem do skrócenia, tylko godziną, w której robi się coś swojego, rękami, bez pośpiechu. Jeśli tak jest u Was, to skracanie tej godziny nie jest żadną korzyścią — jest odbieraniem czegoś, za co się płaci własnymi pieniędzmi.",
        "Warto jednak rozdzielić dwie rzeczy, bo w praktyce mieszają się w jedno. Są czynności, które naprawdę da się lubić: krojenie, komponowanie, doprawianie, patrzenie, jak coś się zmienia. I są takie, których nie lubi nikt — mieszanie przez dwadzieścia minut, żeby nie przywarło, pilnowanie garnka w trakcie rozmowy, zmywanie trzech naczyń po jednym daniu. To jest ta druga część, którą się znosi, a nie lubi.",
        "Urządzenie jest dobre wyłącznie w tej drugiej części i to jest cała prawda o nim. Nie kroi za Was pomysłu na danie, nie decyduje o proporcjach i nie doprawia. Przejmuje robotę, przy której trzeba stać, a nie tę, przy której coś się wymyśla.",
        "Nie będę Wam też mówić, że wychodzi lepiej. Nie twierdzę tego i nie będę porównywać smaku z tym, co robicie od dwudziestu lat — to byłoby zarozumiałe, a przy tym niesprawdzalne. Gotowanie ręczne nie jest gorsze ani mniej wartościowe i nikt przy zdrowych zmysłach nie powinien Wam wmawiać, że jest.",
        "Dlatego uczciwy wniosek brzmi tak: jeśli lubicie cały proces, łącznie z pilnowaniem i mieszaniem, to jest dla Was słaby zakup i powiem to na spotkaniu. Jeśli natomiast lubicie pierwszą część, a druga jest tym, co Was zniechęca w środku tygodnia — wtedy to ma sens, i to konkretny. Przyjadę i sprawdzimy, do której grupy należycie, bez namawiania w żadną stronę.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pruszczu Gdańskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli gotujecie dużo, ugotujmy na spotkaniu Wasze danie i Wasz sposób — to uczciwszy test niż przepis dobrany przeze mnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pruszczu Gdańskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pruszczańskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Gdańska.",
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

  districtsHeading: "Do których części Pruszcza Gdańskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Osiedle Wschód",
    "Osiedle Zachód",
    "Rotmanka",
    "Juszkowo",
    "Cyplowa",
    "Osiedle Nad Radunią",
  ],

  nearbyHeading: "Poza Pruszcz Gdański też przyjadę",
  nearbyParagraphs: [
    "Gdańsk, Tczew, Żukowo i Kolbudy są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gdańsk", "Tczew", "Żukowo", "Kolbudy", "Sopot", "Gdynia"],

  about: blokOMnie("do Pruszcza Gdańskiego", "w Pruszczu Gdańskim i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pruszcza Gdańskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pruszczu Gdańskim"),
    {
      question: "Lubię gotować. Czy to mi tego nie odbierze?",
      answer:
        "Warto rozdzielić dwie rzeczy. Są czynności, które da się lubić — krojenie, komponowanie, doprawianie — i takie, których nie lubi nikt: mieszanie przez dwadzieścia minut, pilnowanie garnka, zmywanie trzech naczyń. Urządzenie jest dobre wyłącznie w tych drugich. Jeśli lubicie cały proces łącznie z nimi, to dla Was słaby zakup i powiem to wprost.",
    },
    {
      question: "Czy wychodzi lepiej niż z garnka?",
      answer:
        "Nie twierdzę tego i nie będę porównywać smaku z tym, co robicie od lat. Gotowanie ręczne nie jest gorsze ani mniej wartościowe. Różnica dotyczy liczby czynności, a nie jakości tego, co ląduje na talerzu.",
    },
  ],

  geo: { lat: 54.2617, lng: 18.6367 },
};
