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
 * REDA — miasto, które przez ostatnie dziesięciolecia urosło bardzo
 * szybko, wciśnięte między Wejherowo a Rumię. Prawie wszystko jest tu
 * młode i wciąż w ruchu.
 *
 * KĄT: kiedy Aga radzi POCZEKAĆ. Lista sytuacji życiowych, w których
 * lepiej odłożyć zakup — zebrana w jednym miejscu, czego żaden
 * sprzedawca nie robi.
 *
 * SEKCJA MA WYMIENIĆ KONKRETNIE:
 * — przeprowadzka w najbliższych miesiącach: sprzęt przeleży w kartonie,
 * — dziecko na dniach: pierwsze tygodnie to nie moment na naukę
 *   czegokolwiek nowego,
 * — niepewność co do pracy albo dochodów — Aga nie ocenia niczyjego
 *   budżetu, ale nie będzie też udawać, że to nieistotne,
 * — kupno pod czyjś zapał albo pod cudzą namowę,
 * — a także: gdy druga osoba w domu jest przeciw.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD FINANSOWYCH, oceny zdolności kredytowej, doradzania
 *   co do rat ani liczb. Można powiedzieć „to nie moja dziedzina"
 *   i na tym poprzestać.
 * — ŻADNYCH PORAD ZDROWOTNYCH ani okołoporodowych — tylko to, że przy
 *   noworodku nikt nie ma głowy do nauki nowego sprzętu.
 * — Nie robić z tej listy chwytu („patrzcie, jaka jestem uczciwa,
 *   więc kupujcie"). Ma być rzeczowo.
 *
 * ROZGRANICZENIE. Oleśnica mówi o czekaniu NA NOWSZY MODEL, Iława
 * o zakupie tuż przed świętami, Oława o domu, w którym się nie gotuje.
 * Tutaj chodzi o SYTUACJE ŻYCIOWE, w których lepiej odłożyć decyzję.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Reda leży między Wejherowem a Rumią i szybko rosła w ostatnich
 *   dziesięcioleciach.
 */
export const REDA: CityContent = {
  slug: "reda",
  h1: "Thermomix Reda – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Reda — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Redzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Reda — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Redzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Redy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Reda i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Bywają momenty, w których uczciwa odpowiedź brzmi: poczekajcie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Redzie – jak wygląda prezentacja?",
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
      id: "kiedy-poczekac",
      heading: "Miasto, które urosło w kilkanaście lat — i kiedy radzę poczekać",
      paragraphs: [
        "Reda urosła szybko i wiele osób trafiło tu w momencie, w którym akurat wszystko się zmieniało: nowe mieszkanie, nowa praca, nowe dziecko. Wykorzystam to, żeby zebrać w jednym miejscu coś, czego sprzedawcy nie zbierają: sytuacje, w których radzę odłożyć ten zakup.",
        "Pierwsza: przeprowadzka w najbliższych miesiącach. Sprzęt kupiony teraz przeleży ten czas w kartonie, a Wy zapłacicie za coś, czego nie używacie — i, co gorsza, stracicie właśnie ten pierwszy okres, w którym najłatwiej wejść w nowy sposób gotowania. Lepiej wrócić do tematu po przeprowadzce.",
        "Druga: dziecko na dniach. Pierwsze tygodnie z noworodkiem to nie jest moment na uczenie się czegokolwiek nowego, choćby najprostszego. Wiem, że w tym akurat okresie takie zakupy bywają rozważane najczęściej, i mimo to mówię: albo wyraźnie wcześniej, żeby zdążyć się oswoić, albo wyraźnie później. Nie w środku.",
        "Trzecia: niepewność co do pracy albo dochodów. Nie oceniam niczyjego budżetu i nie jestem od doradzania w sprawach finansowych — nie mam do tego kompetencji i nie będę udawać, że mam. Powiem tylko tyle, że nie będę też udawać, że to nieistotne, i że nikt nie powinien Was popychać do decyzji w takim momencie. Ja tego nie robię.",
        "Czwarta: kupno pod czyjś zapał. Jeżeli głównym powodem jest zachwyt siostry, koleżanki albo mój na spotkaniu, a nie Wasz własny tydzień — poczekajcie. Zapał cudzy mija szybciej niż rata.",
        "Piąta: druga osoba w domu jest przeciw. Zakup przepchnięty mimo sprzeciwu wraca potem jako pretensja i psuje więcej, niż jest wart. Tu też lepiej odłożyć decyzję i wrócić do niej spokojnie.",
        "Piszę to nie dla efektu, tylko dlatego, że przy takim wydatku moment ma znaczenie porównywalne z samą decyzją. Jeśli któraś z tych sytuacji jest teraz Waszą — powiem to samo na spotkaniu i nie będę wracać z telefonem za tydzień. Możecie się umówić także wtedy: obejrzeć, zapytać i odłożyć na później.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Redzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Możecie się umówić także po to, żeby tylko zobaczyć i odłożyć decyzję na później — to normalny przebieg spotkania, a nie strata mojego czasu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Redzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla redzkiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Trójmiasta.",
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

  districtsHeading: "Do których części Redy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Ciechocino",
    "Pieleszewo",
    "Rekowo Górne",
    "Osiedle Betlejem",
    "Moście Błota",
    "Osiedle 12 Marca",
    "Zbychowo",
  ],

  nearbyHeading: "Poza Redę też przyjadę",
  nearbyParagraphs: [
    "Wejherowo, Rumia, Puck i Kosakowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wejherowo", "Rumia", "Puck", "Kosakowo", "Gdynia", "Lębork"],

  about: blokOMnie("do Redy", "w Redzie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Redy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Redzie"),
    {
      question: "Kiedy radzisz poczekać z zakupem?",
      answer:
        "Przy przeprowadzce w najbliższych miesiącach — sprzęt przeleży ten czas w kartonie. Przy dziecku na dniach — pierwsze tygodnie to nie moment na naukę czegokolwiek nowego. Gdy głównym powodem jest czyjś zapał, a nie Wasz własny tydzień. I gdy druga osoba w domu jest przeciw.",
    },
    {
      question: "A jeśli nie jestem pewna swojej sytuacji finansowej?",
      answer:
        "Nie oceniam niczyjego budżetu i nie doradzam w sprawach finansowych — nie mam do tego kompetencji. Nie będę też udawać, że to nieistotne. Nikt nie powinien Was popychać do decyzji w takim momencie; ja tego nie robię i nie dzwonię potem z przypomnieniami.",
    },
  ],

  geo: { lat: 54.6069, lng: 18.3486 },
};
