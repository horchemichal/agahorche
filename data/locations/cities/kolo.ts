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
 * KOŁO — miasto nad Wartą, lokowane w 1362 roku przez Kazimierza
 * Wielkiego. Od XV wieku aż do 1716 roku odbywały się tu sejmiki
 * generalne szlachty wielkopolskiej: zjazdy, na których decyzję
 * podejmowało wielu, a nie dwoje.
 *
 * KĄT: decyzja, w której głos ma więcej niż dwie osoby. Dom
 * wielopokoleniowy albo taki, w którym do zakupu dokłada się babcia,
 * siostra albo dorosłe dziecko.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — im więcej osób w decyzji, tym łatwiej o zakup, którego tak naprawdę
 *   nikt nie chciał — bo każdy zakłada, że chce ktoś inny,
 * — pytanie porządkujące: kto będzie z tego korzystał CODZIENNIE,
 * — kto dokłada pieniądze, a kto będzie gotował, to często dwie różne
 *   osoby i trzeba to rozdzielić, zamiast mieszać,
 * — Aga rozmawia z osobą gotującą, nawet jeśli płaci ktoś inny.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO WCHODZENIA W RODZINNE UKŁADY ani doradzania, kto ma
 *   dokładać i ile. To nie jest moja sprawa.
 * — ŻADNYCH TECHNIK PERSWAZJI („jak przekonać rodzinę") — zasada
 *   z Grodziska Mazowieckiego obowiązuje tak samo.
 * — ŻADNYCH PORAD FINANSOWYCH ani prawnych przy wspólnym zakupie
 *   i przy darowiznach.
 *
 * ROZGRANICZENIE. Wrocław mówi o dwóch osobach składających się
 * na zakup, Gdańsk o parze, w której jedno chce, a drugie nie,
 * Grodzisk Mazowiecki o osobie nieobecnej na prezentacji, Żagań
 * o przekazaniu sprzętu dziecku. Tutaj chodzi o DECYZJĘ WIELU OSÓB —
 * trzech pokoleń albo kilku dokładających się krewnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Koło zostało lokowane 18 lipca 1362 r. przez Kazimierza Wielkiego,
 * — od XV w. do 1716 r. odbywały się tu sejmiki generalne szlachty
 *   wielkopolskiej — w klasztorze bernardynów, a przy większej
 *   frekwencji na nadwarciańskich błoniach,
 * — miasto leży nad Wartą, a nazwa wiąże się z zakolem rzeki,
 * — działała tu fabryka fajansu (1842–2008); dziś jest Muzeum Technik
 *   Ceramicznych.
 */
export const KOLO: CityContent = {
  slug: "kolo",
  h1: "Thermomix Koło – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Koło — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kole: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Koło — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kole. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Koła z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Koło i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rozmawiam z osobą, która będzie gotować — nawet jeśli płaci ktoś inny.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kole – jak wygląda prezentacja?",
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
      id: "decyzja-calej-rodziny",
      heading: "Miasto sejmików generalnych — i zakup, o którym decyduje pół rodziny",
      paragraphs: [
        "W Kole od XV wieku aż do 1716 roku zjeżdżała się szlachta całej Wielkopolski na sejmiki generalne: obradowano w klasztorze bernardynów, a gdy przyjeżdżało zbyt wielu — na nadwarciańskich błoniach. Wykorzystam ten obraz do sytuacji, która przy takim zakupie zdarza się częściej, niż mogłoby się wydawać: decyduje nie jedna osoba i nie para, tylko pół rodziny.",
        "Wygląda to zwykle tak: dokłada się babcia, dorosła córka albo siostra, ktoś proponuje to jako wspólny prezent, ktoś inny dopłaca różnicę. Intencje są dobre i zwykle bardzo szczere. Problem polega na czymś innym i widuję to regularnie: im więcej osób w decyzji, tym łatwiej o zakup, którego tak naprawdę nikt nie chciał — bo każdy po cichu zakładał, że chce ktoś inny.",
        "Dlatego proponuję jedno pytanie porządkujące, które warto zadać na głos, zanim ktokolwiek do mnie zadzwoni: kto będzie z tego korzystał codziennie. Nie kto uważa, że to dobry pomysł, nie kto się ucieszy, tylko kto stanie przy tym w środę o osiemnastej. Jeżeli w rodzinie nie ma na to jednoznacznej odpowiedzi, to jest ważniejsza informacja niż cała reszta rozmowy.",
        "Warto też rozdzielić dwie rzeczy, które w takich rozmowach się zlewają: kto dokłada pieniądze, a kto będzie gotował. To bardzo często dwie różne osoby, i to całkiem normalne. Nienormalne robi się dopiero wtedy, gdy zdanie osoby płacącej zaczyna decydować o czymś, czego ona sama nie będzie używać.",
        "Ja w tym układzie zachowuję się prosto: rozmawiam z osobą, która będzie gotować, nawet jeśli płaci ktoś inny i nawet jeśli to ktoś inny do mnie zadzwonił. Pod nią dobieram dania i to ona prowadzi urządzenie na spotkaniu. Nie dlatego, że lekceważę osobę płacącą — tylko dlatego, że to jedyny sposób, żeby ktokolwiek dowiedział się czegoś sensownego.",
        "Nie będę natomiast wchodzić w Wasze rodzinne układy ani doradzać, kto ma się dokładać i ile. To nie jest moja sprawa i nie mam do tego żadnych kompetencji — ani finansowych, ani jakichkolwiek innych. Nie dostaniecie też ode mnie pomocy w przekonywaniu kogokolwiek. Jeśli w rodzinie nie ma zgody, radzę odłożyć decyzję: zakup przepchnięty mimo sprzeciwu wraca potem jako pretensja i psuje więcej, niż jest wart.",
      ],
      links: [{ href: "/prezentacja", label: "Umów prezentację" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kole?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w decyzji bierze udział więcej osób, powiedzcie mi to od razu — dopasuję godzinę tak, żeby mogli być obecni, albo przyjadę dwa razy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kole"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kolskiej rodziny",
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

  districtsHeading: "Do których części Koła dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle albo ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: ["Stare Miasto", "Osiedle Warszawskie", "Nagórna", "Blizna"],

  nearbyHeading: "Poza Koło też przyjadę",
  nearbyParagraphs: [
    "Kłodawa, Dąbie, Przedecz i Babiak są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kłodawa", "Dąbie", "Przedecz", "Konin", "Turek", "Sompolno"],

  about: blokOMnie("do Koła", "w Kole i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Koła bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kole"),
    {
      question: "Kupujemy całą rodziną, składamy się. Na co uważać?",
      answer:
        "Na to, że im więcej osób w decyzji, tym łatwiej o zakup, którego tak naprawdę nikt nie chciał — bo każdy zakłada, że chce ktoś inny. Warto zadać na głos jedno pytanie: kto będzie z tego korzystał codziennie. Jeśli nie ma na to jednoznacznej odpowiedzi, to ważniejsza informacja niż cała reszta rozmowy.",
    },
    {
      question: "Płaci jedna osoba, a gotuje druga. Z kim rozmawiasz?",
      answer:
        "Z osobą, która będzie gotować — nawet jeśli płaci ktoś inny i nawet jeśli ktoś inny do mnie zadzwonił. Pod nią dobieram dania i to ona prowadzi urządzenie na spotkaniu. Nie wchodzę przy tym w rodzinne układy ani nie doradzam, kto ma się dokładać: to nie moja sprawa.",
    },
  ],

  geo: { lat: 52.2000, lng: 18.6333 },
};
