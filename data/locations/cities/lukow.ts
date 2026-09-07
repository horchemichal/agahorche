import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * ŁUKÓW — stare miasto na Równinie Łukowskiej, od wieków miejsce
 * targowe dla okolicznych wsi. Tam, gdzie się handluje, każdy wie,
 * że sprzedający ma swój interes — i nikt nie udaje inaczej.
 *
 * KĄT: na czym Aga zarabia i co to znaczy dla klientki. Konflikt
 * interesów nazwany wprost, zamiast udawania bezinteresownej doradczyni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — prezentacja jest bezpłatna dla Was, ale nie jest bezinteresowna:
 *   Aga zarabia wtedy, gdy dochodzi do zakupu, i to trzeba wiedzieć,
 * — dlatego wszystko, co mówi na spotkaniu, warto słyszeć z tą wiedzą
 *   w tle — także pochwały,
 * — co z tego wynika praktycznie: pytajcie o wady i sprawdzajcie mnie;
 *   jeżeli ktoś nie umie wymienić wad, to nie znaczy, że ich nie ma,
 * — i czego Aga w związku z tym nie robi: nie stawia terminów „tylko
 *   dziś", nie dzwoni po kilka razy, nie namawia po odmowie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH KWOT, PROCENTÓW ANI SZCZEGÓŁÓW WYNAGRODZENIA. Nie podaję
 *   liczb i nie opisuję zasad rozliczeń — to nie moja sprawa
 *   do rozgłaszania, a wymyślanie byłoby kłamstwem.
 * — ŻADNEGO PORÓWNYWANIA SIĘ Z INNYMI PRZEDSTAWICIELAMI ani sugerowania,
 *   że inni robią to gorzej.
 * — Nie robić z tej szczerości kolejnego chwytu sprzedażowego
 *   („jestem szczera, więc mi zaufaj"). Ma być rzeczowo i sucho.
 *
 * ROZGRANICZENIE. Jarocin wymienia chwyty sprzedażowe, których Aga nie
 * używa, Bielawa mówi o poczuciu, że to fanaberia (i przy okazji
 * przyznaje brak bezstronności), Sieradz o wycofaniu się z umowy.
 * Tutaj chodzi wprost o INTERES SPRZEDAJĄCEJ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Łuków jest starym miastem targowym dla okolicznych miejscowości.
 */
export const LUKOW: CityContent = {
  slug: "lukow",
  h1: "Thermomix Łuków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łuków — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Łukowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łuków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łukowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łukowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Łuków i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Bezpłatna nie znaczy bezinteresowna — i lepiej to wiedzieć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łukowie – jak wygląda prezentacja?",
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
      id: "na-czym-zarabiam",
      heading: "Miasto targowe — i uczciwie o tym, na czym zarabiam",
      paragraphs: [
        "Łuków od wieków był miejscem, do którego zjeżdżało się z okolicy, żeby coś kupić albo sprzedać. Na targu nikt nie udaje, że sprzedający nie ma swojego interesu — to jest oczywiste i właśnie dlatego rozmowa jest tam prostsza. Wykorzystam to do rzeczy, o której na stronach przedstawicieli się nie pisze: do tego, na czym ja zarabiam.",
        "Prezentacja jest dla Was bezpłatna i to jest prawda. Nie jest natomiast bezinteresowna, i to też jest prawda. Zarabiam wtedy, gdy dochodzi do zakupu — nie za przyjazd, nie za rozmowę, nie za czas. Nie podam tu żadnych kwot ani procentów, bo to nie jest moja sprawa do rozgłaszania, a wymyślanie liczb byłoby zwykłym kłamstwem. Sam fakt jednak jest istotny i powinniście go znać.",
        "Co z tego wynika dla Was: wszystko, co mówię na spotkaniu, warto słyszeć z tą wiedzą w tle. Także pochwały. Nie jestem niezależną doradczynią, która obiektywnie porównuje rynek, tylko osobą, która sprzedaje jedno konkretne urządzenie, i byłoby nieuczciwe udawać coś innego.",
        "Praktyczny wniosek jest prosty: pytajcie o wady i sprawdzajcie mnie. Jeżeli ktokolwiek — ja czy ktoś inny — nie potrafi wymienić wad tego, co sprzedaje, to nie znaczy, że wad nie ma. Znaczy, że nie zamierza o nich mówić. Ja swoją listę mam i podaję ją bez proszenia, ale i tak zachęcam, żebyście pytali dalej.",
        "Z tego samego powodu nie robię kilku rzeczy. Nie mówię, że oferta jest ważna tylko dziś. Nie dzwonię po kilka razy z pytaniem, czy już się zdecydowaliście. Po odmowie nie wracam z nowymi argumentami. To nie jest wielkoduszność, tylko konsekwencja: skoro przyznaję, że mam w tym interes, to nie mogę jednocześnie naciskać i twierdzić, że robię to dla Was.",
        "Nie zamierzam też porównywać się z innymi przedstawicielami ani sugerować, że ktoś robi to gorzej. Nie znam ich pracy i nie mam prawa jej oceniać. Piszę wyłącznie o tym, jak pracuję ja — resztę oceńcie sami, po godzinie w Waszej kuchni.",
      ],
      links: [{ href: "/o-mnie", label: "Kim jestem" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łukowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przygotujcie na spotkanie pytania o wady — chętnie na nie odpowiem i uznam to za normalną część rozmowy, a nie za nieufność.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łukowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łukowskiej rodziny",
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

  districtsHeading: "Do których części Łukowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Osiedle Sienkiewicza",
    "Zapowiednik",
    "Osiedle Chącińskiego",
    "Klimki",
    "Ławki",
    "Malcanów",
  ],

  nearbyHeading: "Poza Łuków też przyjadę",
  nearbyParagraphs: [
    "Radzyń Podlaski, Stoczek Łukowski, Adamów i Serokomla są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radzyń Podlaski", "Stoczek Łukowski", "Adamów", "Siedlce", "Biała Podlaska", "Garwolin"],

  about: blokOMnie("do Łukowa", "w Łukowie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Łukowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Łukowie"),
    {
      question: "Czy zarabiasz na tym, że kupię?",
      answer:
        "Tak. Prezentacja jest dla Was bezpłatna, ale nie jest bezinteresowna — zarabiam wtedy, gdy dochodzi do zakupu, nie za przyjazd czy rozmowę. Nie podam kwot ani procentów, bo to nie moja sprawa do rozgłaszania, ale sam fakt powinniście znać i słuchać mnie z tą wiedzą w tle, także wtedy, gdy chwalę.",
    },
    {
      question: "Skoro tak, to jak sprawdzić, czy mówisz uczciwie?",
      answer:
        "Pytajcie o wady. Jeżeli ktokolwiek nie potrafi ich wymienić, to nie znaczy, że ich nie ma — znaczy, że nie zamierza o nich mówić. Swoją listę podaję bez proszenia, a i tak zachęcam do dalszych pytań.",
    },
  ],

  geo: { lat: 51.9294, lng: 22.3806 },
};
