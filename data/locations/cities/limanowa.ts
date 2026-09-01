import type { CityContent } from "../city-content";
import {
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
 * LIMANOWA — jedyne miasto w tym zestawie z produktami mlecznymi noszącymi
 * jego nazwę na ministerialnej Liście Produktów Tradycyjnych (śmietana
 * z Limanowej, zsiadłe mleko z Limanowej). To realny, sprawdzalny wyróżnik,
 * więc sekcja kulinarna ma tu mocne pokrycie.
 *
 * UWAGA administracyjna: Limanowa to gmina MIEJSKA (8 osiedli), a wokół
 * niej istnieje osobna gmina WIEJSKA Limanowa z siedzibą w tym samym
 * mieście i 23 sołectwami. Obsługuję obie i tekst mówi o tym wprost,
 * bo mieszanie tych dwóch bytów jest tu najczęstszym błędem.
 *
 * Pozostałe fakty użyte w tekście:
 * — położenie w kotlinie, u zbiegu potoków, w Beskidzie Wyspowym,
 * — zabudowa rozproszona po stokach, drobne gospodarstwa,
 * — bundz i mleko od krów rasy polskiej czerwonej na Liście Produktów
 *   Tradycyjnych, miód spadziowy z Beskidu Wyspowego ze statusem ChNP,
 *   suska sechlońska ze statusem ChOG (gminy Laskowa, Iwkowa, Łososina
 *   Dolna, Żegocina — czyli okolica, nie samo miasto; tekst tego nie myli),
 * — Bazylika Matki Boskiej Bolesnej i krzyż na Miejskiej Górze.
 */
export const LIMANOWA: CityContent = {
  slug: "limanowa",
  h1: "Thermomix Limanowa – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Limanowa — prezentacja i cena",
  seoDescription:
    "Thermomix w Limanowej: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0,6%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Limanowa — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Limanowej lub okolicy. Bez dopłat za dojazd, bez zobowiązania. Ratę liczymy na miejscu.",

  lead:
    "Do Limanowej dojeżdżam bez dopłaty za dojazd — do miasta i do sołectw gminy wiejskiej wokół niego. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Limanowa i okolica, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Obiad przygotowany podczas prezentacji Thermomixa TM7 — potrawka i domowe pieczywo",
    caption: "Na spotkaniu powstaje pełny obiad, a nie próbka — to jedyny sensowny test.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Limanowej – jak wygląda prezentacja?",
      paragraphs: [
        "Urządzenie, produkty i w razie potrzeby naczynia przywożę ze sobą. Po Twojej stronie zostaje wyłącznie kawałek wolnego blatu i gniazdko — żadnych zakupów przed spotkaniem i żadnych przygotowań.",
        "Potem gotujemy, i to normalne jedzenie, a nie pokazowe. Obiad, coś słodkiego, a jeśli masz w domu własny nabiał, warzywa albo owoce — tym lepiej, bo właśnie na nich najlepiej widać, do czego to urządzenie się przyda akurat u Ciebie. Napisz mi wcześniej, ile osób jada w domu i czego nie jecie.",
        "Na koniec konkrety: cena, promocja obowiązująca w tym miesiącu i wysokość raty przy kilku wariantach spłaty. Nikt nie musi decydować od razu, a spotkanie nic nie kosztuje niezależnie od tego, co postanowisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Nabiał, sady i kuchnia, która robi wszystko od zera",
      paragraphs: [
        "Na ministerialnej Liście Produktów Tradycyjnych figurują produkty noszące nazwę tego miasta — śmietana z Limanowej i zsiadłe mleko z Limanowej. To nie jest hasło z folderu, tylko ślad po czymś, co tu naprawdę istniało i częściowo istnieje dalej: po gospodarstwach z krowami i po kuchni, która nie kupowała wszystkiego w sklepie.",
        "W takiej kuchni Thermomix jest przydatny w bardzo konkretny sposób, dużo mniej efektowny niż smoothie na pokazie. Robi masło i pasty z tego, co jest pod ręką, zagniata ciasto bez ubrudzenia rąk, gotuje kaszę i mleczne zupy bez przypalania — czyli obsługuje dokładnie tę półkę potraw, którą robi się od zera i której nikt nie zamawia z dowozem.",
        "Druga rzecz to sady. W powiecie limanowskim śliwki i jabłka są realnym plonem, nie ozdobą działki, a suszenie i przetwarzanie owoców ma tu udokumentowaną, sięgającą XIX wieku tradycję. Powidła i musy to praca polegająca na pilnowaniu — i to jest ta część, którą urządzenie przejmuje w całości.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Limanowej?",
      paragraphs: [
        "Zadzwoń albo wyślij SMS — zwykle jedna wiadomość wystarczy, żeby ustalić dzień i godzinę. Jest też formularz na dole strony, jeśli wolisz, żebym to ja oddzwoniła o wskazanej porze.",
        "Powiedz od razu, gdzie mieszkasz i ile osób będzie na spotkaniu. W Limanowej to ma większe znaczenie niż gdzie indziej: miasto leży w kotlinie, a zabudowa gminy ciągnie się po stokach i wzdłuż potoków, więc „pod Łysą Górą” i „w Pisarzowej” to dwa zupełnie różne dojazdy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Limanowej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Limanowej",
      paragraphs: [
        "Powiat limanowski od pokoleń wysyła ludzi do pracy poza dom — do Nowego Sącza, do Krakowa, za granicę. W praktyce oznacza to sporo domów, w których jedna osoba prowadzi kuchnię dla wszystkich, a druga bywa w domu tylko w weekendy. Gotowanie spada wtedy na jedną parę rąk i to jest realny ciężar, a nie kwestia wygody.",
        "Thermomix zmienia w tym tyle, że obiad przestaje wymagać obecności przy garnku. Można go nastawić i pójść zająć się dzieckiem albo gospodarstwem; można ugotować większą porcję i mieć spokój na dwa dni. Urządzenie gotuje i miksuje w jednym naczyniu, więc znika też część zmywania.",
        "Przy małym dziecku dochodzi Varoma — porcja na parze powstaje równolegle z obiadem dla reszty domu, w jednym urządzeniu i bez pilnowania dwóch garnków naraz.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Jedna para rąk, dwa posiłki naraz.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Limanowszczyzna i to, co się tu je",
    paragraphs: [
      "Trudno o lepszy dowód na to, że region ma własną kuchnię, niż produkty noszące jego nazwę w oficjalnym rejestrze. Śmietana z Limanowej i zsiadłe mleko z Limanowej są na ministerialnej Liście Produktów Tradycyjnych; w powiecie są też bundz, czyli ser z mleka owczego opisywany już w XIX wieku, i mleko od krów rasy polskiej czerwonej. Miód spadziowy z Beskidu Wyspowego ma unijną Chronioną Nazwę Pochodzenia.",
      "Osobny rozdział to owoce. Suska sechlońska — śliwka suszona w dymie — ma unijne Chronione Oznaczenie Geograficzne i pochodzi z gmin sąsiadujących z Limanową: Laskowej, Iwkowej, Łososiny Dolnej i Żegociny. Nie jest to więc produkt samego miasta, ale to ta sama okolica i ta sama tradycja sadownicza.",
      "Wszystkie te rzeczy łączy sposób powstawania: długo, powoli i pod nadzorem. Thermomix nie zrobi bundzu ani suszarni, ale zdejmuje z domowej kuchni tę część pracy, przez którą powidła zajmują całą sobotę — stanie nad garnkiem i mieszanie, żeby nie przywarło. Jeśli chcesz, na prezentacji ugotujemy coś z tej półki zamiast standardowego zestawu.",
    ],
  },

  districtsHeading: "Gdzie w Limanowej i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do sołectw gminy wiejskiej Limanowa, która otacza je ze wszystkich stron. Za dojazd nie doliczam ani złotówki — bez różnicy, czy mieszkasz na Sowlinach, czy w Pisarzowej.",
    "Limanowa to formalnie dwie gminy: miasto i osobna gmina wiejska z siedzibą w tym samym mieście. Dla umówienia spotkania nie ma to żadnego znaczenia; podaję to tylko dlatego, że lista poniżej łączy osiedla miasta z sołectwami wokół niego.",
  ],
  districts: [
    "Centrum",
    "Osiedle Grunwaldzkie",
    "Osiedle Dworskie",
    "Sowliny",
    "Osiedle Łososińskie",
    "Osiedle im. Tadeusza Kościuszki",
    "Pod Łysą Górą",
    "Osiedle Słoneczne",
    "Męcina",
    "Pisarzowa",
    "Mordarka",
    "Stara Wieś",
    "Siekierczyna",
    "Łososina Górna",
    "Młynne",
    "Kanina",
    "Rupniów",
    "Pasierbiec",
    "Nowe Rybie",
    "Stare Rybie",
    "Kłodne",
    "Wysokie",
  ],

  nearbyHeading: "Beskid Wyspowy i okolica",
  nearbyParagraphs: [
    "Poza gminą dojeżdżam w stronę Tymbarku, Dobrej i Laskowej, na północ ku Żegocinie i Łapanowowi, a na południe w kierunku Nowego Sącza. Przy dalszych trasach umawiam kilka spotkań w jednym rejonie tego samego dnia — dlatego czasem zaproponuję termin nieco późniejszy, ale za to pewny.",
  ],
  nearbyTowns: [
    "Tymbark",
    "Dobra",
    "Laskowa",
    "Słopnice",
    "Jodłownik",
    "Żegocina",
    "Łapanów",
    "Mszana Dolna",
    "Łukowica",
    "Nowy Sącz",
    "Bochnia",
  ],

  about: blokOMnie("do Limanowej", "w Limanowej, Nowym Sączu i Bochni"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Limanowej bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do miasta i do sołectw gminy wiejskiej Limanowa jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Limanowej"),
    {
      question: "Czy dojeżdżasz do sołectw, na przykład do Męciny albo Pisarzowej?",
      answer:
        "Tak, do całej gminy wiejskiej wokół miasta. Przy umawianiu podaj miejscowość i w miarę możliwości przysiółek — zabudowa ciągnie się tu po stokach, więc trasę układam z wyprzedzeniem.",
    },
    {
      question: "Czy Thermomix nadaje się do przetworów ze śliwek i jabłek?",
      answer:
        "Tak i w tej okolicy to jedno z najczęstszych zastosowań. Powidła, musy i przeciery robią się z ustawioną temperaturą i czasem, z mieszaniem, które nie pozwala przywrzeć do dna — czyli bez tej części, przez którą przetwory zajmują cały dzień.",
    },
    {
      question: "Czy zrobi też rzeczy z nabiału?",
      answer:
        "Tak — masło, pasty, twarożki, mleczne zupy i kasze bez przypalania. Jeśli zależy Ci akurat na czymś takim, powiedz przy umawianiu, a ugotujemy to zamiast standardowego zestawu.",
    },
  ],

  geo: { lat: 49.7059, lng: 20.4223 },
};
