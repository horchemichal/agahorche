import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * PRZEMYŚL — jedno z najstarszych miast w Polsce, na wzgórzach nad Sanem,
 * kilkanaście kilometrów od granicy. Twierdza Przemyśl, wielokulturowa
 * historia, prawosławna i greckokatolicka obecność obok rzymskokatolickiej.
 *
 * KĄT: to jest miasto pogranicza i zawsze nim było — ale bez egzotyki.
 * Kuchnia ma tu warstwy: ukraińską, austriacką, żydowską, łemkowską,
 * i dla ludzi stąd nie jest to ciekawostka regionalna, tylko po prostu
 * to, co się je. Strona sprzedażowa, która przyjeżdża tu z „polską kuchnią
 * domową", brzmi jak ktoś z zewnątrz.
 *
 * DRUGI, BARDZO PRAKTYCZNY WĄTEK: Przemyśl leży daleko od reszty regionu.
 * Do Rzeszowa jest ponad godzina, do Krosna jeszcze dalej. Uczciwa strona
 * musi to powiedzieć wprost przy umawianiu — jeżdżę tu rzadziej i planuję
 * te wyjazdy z wyprzedzeniem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Przemyśl należy do najstarszych miast w Polsce i leży nad Sanem,
 *   na wzgórzach,
 * — Twierdza Przemyśl była jedną z największych twierdz Europy,
 * — miasto leży kilkanaście kilometrów od granicy z Ukrainą; najbliższe
 *   przejście to Medyka,
 * — Przemyśl ma wielowiekową historię wielokulturową: obok kościołów
 *   rzymskokatolickich działają tu parafie greckokatolickie,
 * — Kopiec Tatarski i Zamek Kazimierzowski to charakterystyczne punkty
 *   miasta.
 *
 * CZEGO NIE MA: przepisów podanych jako „autentyczne", tez o tożsamości
 * mieszkańców, tematów politycznych ani liczb dotyczących granicy.
 */
export const PRZEMYSL: CityContent = {
  slug: "przemysl",
  h1: "Thermomix Przemyśl – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Przemyśl — prezentacja i cena",
  seoDescription:
    "Thermomix w Przemyślu: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Przemyśl — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Przemyślu. Prezentacja bezpłatna, terminy umawiane z wyprzedzeniem.",

  lead:
    "Przyjeżdżam do Przemyśla z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Zasaniu, Kmiecie, Salezjańskim czy w Śródmieściu. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Przemyśl, wszystkie dzielnice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Przemyślu – jak wygląda prezentacja?",
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
      id: "kuchnia-pogranicza",
      heading: "Kuchnia pogranicza — i dlaczego nie przywożę tu gotowej opowieści",
      paragraphs: [
        "Przemyśl jest miastem pogranicza i był nim zawsze. Przez stulecia mieszali się tu ludzie różnych języków i obrządków, a granice państw przesuwały się dookoła miasta, nie odwrotnie. W kuchni zostawiło to warstwy — i dla ludzi stąd nie jest to żadna ciekawostka regionalna, tylko po prostu to, co się je.",
        "Dlatego robię tu coś, czego nie muszę robić w Tarnowie: nie przywożę gotowej opowieści o „polskiej kuchni domowej”. Przyjeżdżam z pytaniem, co u Was gotuje się na co dzień i co na święta — a to potrafi się różnić dom od domu bardziej niż gdzie indziej w Polsce.",
        "Praktycznie zmienia to prezentację w jednej rzeczy: zamiast pokazywać dziesięć funkcji, gotuję jedno albo dwa Wasze dania i przy nich mówię, gdzie urządzenie pomaga, a gdzie nic nie zmienia. To uczciwsza droga niż demonstracja z folderu — i zwykle znacznie ciekawsza dla obu stron.",
      ],
    },
    {
      id: "daleko",
      heading: "Uczciwie o odległości",
      paragraphs: [
        "Przemyśl leży daleko od reszty regionu — do Rzeszowa jest stąd ponad godzina drogi, a do Krosna jeszcze dalej. Nie będę udawać, że wpadam tu po drodze, bo tędy żadna droga nie prowadzi.",
        "Znaczy to tyle: wyjazdy do Przemyśla planuję z wyprzedzeniem, a nie z dnia na dzień. Dojazd jest bezpłatny, tak jak wszędzie, ale termin ustalamy zwykle na kilka dni do przodu. Jeżeli zależy Wam na konkretnym dniu, powiedzcie od razu przy pierwszym telefonie.",
        "Jedna rzecz działa tu na Waszą korzyść. Skoro i tak jadę kawał drogi, chętnie robię tego samego dnia dwa albo trzy spotkania. Jeśli ktoś ze znajomych też chce zobaczyć urządzenie, powiedzcie — łatwiej wtedy o dogodny termin dla wszystkich.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Przemyślu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — najlepiej z kilkoma pasującymi Wam terminami, bo wtedy od razu powiem, kiedy realnie jestem w stanie przyjechać.",
        "Podaj dzielnicę i piętro. Przemyśl leży na wzgórzach, a przy sprzęcie w walizce informacja o windzie i dojściu naprawdę mi się przydaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Przemyślu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla przemyskiej rodziny",
      paragraphs: [
        "W przemyskich domach obiad częściej niż w wielkim mieście jest wspólnym posiłkiem o mniej więcej stałej porze. Przygotowuje go zwykle ta sama osoba — dzień po dniu, przez lata.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie trzech naczyń po jednej zupie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których dzielnic Przemyśla dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — po obu stronach Sanu.",
    "Przy umawianiu wystarczy podać dzielnicę i piętro. Miasto jest rozpięte na wzgórzach, więc te dwie informacje pomagają mi zaplanować dzień.",
  ],
  districts: [
    "Śródmieście",
    "Zasanie",
    "Kmiecie",
    "Salezjańskie",
    "Rycerskie",
    "Winna Góra",
    "Lipowica",
    "Zielonka",
    "Bakończyce",
    "Ostrów",
    "Krakowskie",
    "Błonie",
  ],

  nearbyHeading: "Poza Przemyśl też przyjadę",
  nearbyParagraphs: [
    "Jarosław, Radymno, Przeworsk i okoliczne gminy są w zasięgu tej samej trasy — a skoro i tak jadę w tę stronę, chętnie umawiam kilka spotkań na jeden dzień.",
  ],
  nearbyTowns: ["Jarosław", "Radymno", "Przeworsk", "Lubaczów", "Rzeszów"],

  about: blokOMnie("do Przemyśla", "w Przemyślu i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Przemyśla bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd jest bezpłatny, tak samo jak sama prezentacja — niezależnie od tego, jak daleko mam. Proszę tylko o umówienie terminu z kilkudniowym wyprzedzeniem, bo Przemyśl leży daleko od moich zwykłych tras i planuję te wyjazdy osobno.",
    },
    ...faqWspolne("w Przemyślu"),
    {
      question: "Czy Thermomix poradzi sobie z tym, co gotuje się u nas w domu?",
      answer:
        "Na to nie odpowiem uczciwie przez internet, bo nie wiem jeszcze, co u Was się gotuje — a w Przemyślu potrafi się to różnić dom od domu. Powiedz mi to przy umawianiu, a przywiozę składniki właśnie na to danie i zobaczymy razem, gdzie urządzenie pomaga, a gdzie nie zmienia nic.",
    },
    {
      question: "Czy możemy umówić prezentację dla kilku osób naraz?",
      answer:
        "Bardzo chętnie, zwłaszcza tutaj. Skoro i tak jadę kawał drogi, dwa czy trzy spotkania w jednym dniu są dla mnie łatwiejsze do zaplanowania — a dla Was to zwykle szybszy termin.",
    },
  ],

  geo: { lat: 49.7838, lng: 22.7677 },
};
