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
 * GDAŃSK — miasto portowe, w którym od wieków dobijano targu: kupcy
 * z różnych stron siadali do stołu i dochodzili do ceny.
 *
 * KĄT: dom, w którym jedna osoba chce, a druga nie. To jest najczęstsza
 * realna przeszkoda przy tym zakupie i nigdzie w serwisie nie została
 * opisana wprost.
 *
 * NAJWAŻNIEJSZE ZDANIE CAŁEJ SEKCJI, BEZ NIEGO NIE MA SENSU:
 * NIE JESTEM SOJUSZNICZKĄ JEDNEJ OSOBY PRZECIWKO DRUGIEJ. Sprzedawca,
 * który wchodzi do domu i pomaga jednej stronie „przekonać" drugą, robi
 * coś nieprzyzwoitego. Strona ma to mówić otwarcie.
 *
 * SEKCJA MA ROZBIĆ SCEPTYCYZM NA KONKRETY, bo „nie chcę" prawie nigdy nie
 * znaczy „nie chcę": zwykle znaczy „za drogo", „będzie stać nieużywane"
 * albo „lubię gotować po swojemu". Każdy z tych trzech zarzutów jest
 * uzasadniony i każdy dostaje osobną odpowiedź.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD RELACYJNYCH. Nie doradzam, jak rozmawiać z partnerem,
 *   nie oceniam, kto w domu „decyduje", nie sugeruję żadnego podziału ról.
 * — ŻADNYCH STEREOTYPÓW PŁCIOWYCH. Sceptyczna bywa dowolna osoba i tekst
 *   nie przypisuje tej roli nikomu.
 * — NIE NAMAWIAM DO PONOWNEJ PRÓBY, jeśli odpowiedź brzmi „nie".
 *
 * ROZGRANICZENIE. Ciechanów mówi „jeśli gotowanie jest Waszym odpoczynkiem,
 * nie kupujcie" — tam sceptyk ma rację i na tym się kończy. Konin opisuje
 * trzeci tydzień, w którym nawyk się nie wytwarza. Tutaj chodzi o SYTUACJĘ
 * DWOJGA LUDZI PRZY JEDNYM STOLE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Gdańsk jest starym miastem portowym i handlowym.
 */
export const GDANSK: CityContent = {
  slug: "gdansk",
  h1: "Thermomix Gdańsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gdańsk — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Gdańsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gdańsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gdańsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gdańska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic i do miejscowości wokół miasta.",

  highlights: highlightyStandardowe("Gdańsk i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "jedno-chce-drugie-nie",
      heading: "Miasto, w którym od wieków dobijano targu — a w domu jedno chce, drugie nie",
      paragraphs: [
        "Przez wieki siadali tu do stołu ludzie z różnych stron i dochodzili do ceny. Wykorzystam to do sytuacji, która jest najczęstszą realną przeszkodą przy tym zakupie i o której nikt nie pisze: w domu jedna osoba chce, a druga nie.",
        "Zacznę od zdania, które jest tu najważniejsze: nie jestem niczyją sojuszniczką przeciwko drugiej osobie w tym domu. Zdarza się, że ktoś dzwoni i mówi „przyjedź, może Ciebie posłucha”. Nie robię tego. Sprzedawca, który wchodzi do mieszkania i pomaga jednej stronie przycisnąć drugą, robi coś nieprzyzwoitego, a przy okazji szkodzi też kupującym — bo sprzęt kupiony w ten sposób bywa potem obciążony pretensją i stoi.",
        "To, co robię, wygląda inaczej. Wolę, żeby osoba sceptyczna była na spotkaniu, niż żeby jej nie było. Nie po to, żeby ją obrobić, tylko dlatego, że inaczej będzie się wypowiadać o czymś, czego nie widziała — a to nigdy nie kończy się dobrze.",
        "Druga rzecz: „nie chcę” prawie nigdy nie znaczy po prostu „nie chcę”. Zwykle stoi za tym jeden z trzech konkretów i warto go wydobyć, bo każdy wymaga innej odpowiedzi.",
        "Najczęstszy jest pierwszy: za drogo. To nie jest zarzut do obalania, tylko fakt do policzenia. Wtedy siadamy do liczb — cena, rata przy różnych okresach, co się zmienia w domowym budżecie — i albo to wychodzi, albo nie wychodzi. Jeśli nie wychodzi, mówię to wprost.",
        "Drugi: „kupimy i będzie stać”. Ten zarzut jest uzasadniony, bo tak się rzeczywiście zdarza i nie mam zamiaru temu zaprzeczać. Odpowiadam na niego jedynym sensownym sposobem: pytam, co jecie w tygodniu, i sprawdzamy na spotkaniu, czy to, co gotujecie naprawdę, da się w tym zrobić. Jeśli okaże się, że Wasza kuchnia to głównie smażenie i pieczenie — powiem, że ten sprzęt nie jest dla Was.",
        "Trzeci: „lubię gotować po swojemu i nie chcę tego zmieniać”. To jest najbardziej uczciwy z zarzutów i najmniej podatny na argumenty, bo dotyczy nie sprzętu, tylko przyjemności. Jeśli ktoś odpoczywa przy krojeniu, żadna oszczędność czasu nie jest dla niego zyskiem — to jest strata. Wtedy naprawdę lepiej nie kupować.",
        "I rzecz ostatnia, praktyczna: jeśli po spotkaniu odpowiedź nadal brzmi „nie”, to jest normalne zakończenie, a nie porażka. Nie dzwonię potem z ofertą, która „ważna tylko do piątku”, i nie wracam do tematu przez znajomych. Zostawiam telefon i tyle.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez lukru" }],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Gdańsku – jak wygląda prezentacja?",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gdańsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu ktoś jest sceptyczny, powiedzcie o tym przy umawianiu i wybierzcie porę, o której ta osoba nie wraca właśnie z pracy. To jedyna rada organizacyjna, jakiej tu udzielę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gdańsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gdańskiej rodziny",
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

  districtsHeading: "Do których dzielnic Gdańska dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Wrzeszcz",
    "Oliwa",
    "Przymorze",
    "Zaspa",
    "Chełm",
    "Jasień",
    "Ujeścisko",
    "Orunia",
    "Brzeźno",
    "Stogi",
    "Osowa",
  ],

  nearbyHeading: "Poza Gdańsk też przyjadę",
  nearbyParagraphs: [
    "Sopot, Gdynia, Pruszcz Gdański i Tczew są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sopot", "Gdynia", "Pruszcz Gdański", "Tczew", "Kartuzy", "Wejherowo"],

  about: blokOMnie("do Gdańska", "w Gdańsku i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gdańska bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Gdańsku"),
    {
      question: "Partner jest przeciwny. Przyjedziesz go przekonać?",
      answer:
        "Nie i mówię to wprost. Nie jestem niczyją sojuszniczką przeciwko drugiej osobie w domu — pomaganie jednej stronie w przyciśnięciu drugiej jest nieprzyzwoite, a sprzęt kupiony w ten sposób i tak zwykle stoi nieużywany. Wolę, żeby osoba sceptyczna była na spotkaniu i sama zobaczyła, o czym mowa.",
    },
    {
      question: "A jeśli po prezentacji nadal będzie „nie”?",
      answer:
        "To normalne zakończenie. Nie dzwonię potem z ofertą ważną „tylko do piątku” i nie wracam do tematu przez znajomych. Zostawiam telefon i tyle — jeśli kiedyś sytuacja się zmieni, odezwiecie się sami.",
    },
  ],

  geo: { lat: 54.352, lng: 18.6466 },
};
