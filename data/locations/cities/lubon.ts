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
 * LUBOŃ — jedno z najmniejszych powierzchniowo miast w Wielkopolsce,
 * ściśnięte tuż przy granicy Poznania. Wszystko musi się tu zmieścić
 * na małym obszarze.
 *
 * KĄT: gotowanie mniejszych porcji, niż podaje przepis. Bardzo częste
 * pytanie w domach jedno- i dwuosobowych, a jednocześnie rzecz,
 * przy której najłatwiej o nieuczciwą odpowiedź.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — część rzeczy dzieli się bez problemu (zupy, sosy, dania,
 *   w których i tak wszystko się miesza),
 * — część nie: gdy składników jest tak mało, że nie mają kontaktu
 *   z tym, co je rozdrabnia, albo gdy proporcje decydują o strukturze,
 * — czego NIE zrobię: nie podam żadnych przeliczników ani minimalnych
 *   ilości z pamięci — to trzeba sprawdzić przy urządzeniu,
 * — rozwiązanie praktyczne: ugotować normalną porcję i podzielić ją
 *   na później, zamiast walczyć z połową przepisu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH LICZB: gramów, minimalnych ilości, przeliczników „połowa
 *   przepisu to tyle a tyle".
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I ODGRZEWANIU (zasada
 *   ze Skierniewic) — dzielenie porcji owszem, ale bez instrukcji,
 *   ile dni i w czym.
 * — ŻADNYCH TWIERDZEŃ O POJEMNOŚCI (to temat Gniezna).
 *
 * ROZGRANICZENIE. Gniezno mówi o dużych uroczystościach i pojemności,
 * kilka stron o gotowaniu dla jednej lub dwóch osób jako sytuacji
 * życiowej. Tutaj chodzi wyłącznie o TECHNICZNE dzielenie przepisu
 * na mniejszą porcję.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Luboń jest niewielkim powierzchniowo miastem przylegającym
 *   do Poznania.
 */
export const LUBON: CityContent = {
  slug: "lubon",
  h1: "Thermomix Luboń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Luboń — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Luboniu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Luboń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Luboniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lubonia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Luboń i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Część rzeczy dzieli się bez problemu. Część nie — i warto wiedzieć która.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Luboniu – jak wygląda prezentacja?",
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
      id: "mniejsze-porcje",
      heading: "Miasto, w którym wszystko musi się zmieścić — i połowa przepisu",
      paragraphs: [
        "Luboń jest jednym z mniejszych powierzchniowo miast w okolicy: przylega do Poznania i wszystko musi się tu zmieścić na niewielkim obszarze. Wykorzystam to do pytania, które wraca w każdym domu jedno- i dwuosobowym, a przy którym najłatwiej o odpowiedź naciąganą: czy da się gotować mniej, niż podaje przepis?",
        "Odpowiedź jest podzielona i wolę tak ją napisać, niż powiedzieć wygodne „oczywiście, że tak”. Część rzeczy dzieli się bez żadnego kłopotu: zupy, sosy, wszystko, co i tak zostanie razem wymieszane. Zmniejszacie ilości i wychodzi to samo, tylko mniej.",
        "Część rzeczy nie dzieli się dobrze i warto to wiedzieć przed, a nie po. Bywa, że składników jest po prostu za mało, żeby miały kontakt z tym, co je rozdrabnia — wtedy nic sensownego się nie stanie i zostaniecie z niedokończonym daniem. Bywa też, że proporcje odpowiadają za strukturę i zmiana jednej rzeczy psuje całość. To nie jest wada urządzenia, tylko zwykła właściwość gotowania, znana każdemu, kto próbował zrobić pół ciasta.",
        "Nie podam Wam natomiast żadnych liczb: ile minimum, ile gramów, jak przeliczyć połowę przepisu. Nie dlatego, że to tajemnica, tylko dlatego, że wymyślona z pamięci liczba oznacza dla Was zmarnowane produkty, a ja bym się o tym nie dowiedziała. Takie rzeczy sprawdza się przy urządzeniu, na konkretnym przepisie.",
        "Praktyczne wyjście bywa zresztą inne i bardzo proste: nie zmniejszać, tylko ugotować normalną porcję i podzielić ją na dwa razy. W domu dwuosobowym to zwykle wygodniejsze niż walka z połową przepisu, a przy okazji jeden wieczór w tygodniu robi się wolny. Nie będę Wam natomiast doradzać, jak i jak długo to trzymać — to jest dziedzina, w której zła rada szkodzi, a ja nie jestem od tego.",
        "Jeśli gotujecie na jedną albo dwie osoby, powiedzcie mi to przy umawianiu. Zrobimy na spotkaniu małą porcję zamiast pokazowej dużej — zobaczycie na własne oczy, gdzie jest granica, zamiast wierzyć mi na słowo.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Luboniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, dla ilu osób gotujecie — dobiorę wielkość porcji pod Was, a nie pod pokaz.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Luboniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubońskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Poznania.",
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

  districtsHeading: "Do których części Lubonia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Żabikowo",
    "Lasek",
    "Nowe Centrum",
    "Osiedle Kolejowa",
    "Buczka",
    "Wschodnia",
    "Kocie Doły",
  ],

  nearbyHeading: "Poza Luboń też przyjadę",
  nearbyParagraphs: [
    "Poznań, Komorniki, Puszczykowo i Mosina są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Poznań", "Komorniki", "Puszczykowo", "Mosina", "Swarzędz", "Kórnik"],

  about: blokOMnie("do Lubonia", "w Luboniu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubonia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Luboniu"),
    {
      question: "Czy da się gotować mniej, niż podaje przepis?",
      answer:
        "Część rzeczy dzieli się bez kłopotu: zupy, sosy, wszystko, co i tak zostanie wymieszane. Część nie — bywa, że składników jest za mało, żeby miały kontakt z tym, co je rozdrabnia, albo proporcje odpowiadają za strukturę. To zwykła właściwość gotowania, znana każdemu, kto próbował zrobić pół ciasta.",
    },
    {
      question: "Podasz przelicznik na połowę porcji?",
      answer:
        "Nie podam liczb z pamięci — wymyślona liczba oznacza zmarnowane produkty, a ja bym się o tym nie dowiedziała. Sprawdzimy to przy urządzeniu, na konkretnym przepisie. Często wygodniej jest zresztą ugotować normalną porcję i podzielić ją na dwa razy.",
    },
  ],

  geo: { lat: 52.3450, lng: 16.8853 },
};
