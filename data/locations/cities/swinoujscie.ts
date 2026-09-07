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
 * ŚWINOUJŚCIE — jedyne polskie miasto leżące na kilkudziesięciu wyspach,
 * z dużą liczbą starej, przedwojennej zabudowy w części uzdrowiskowej.
 *
 * KĄT: stara instalacja elektryczna. To jest jedyne miejsce w serwisie
 * na przeszkodę czysto techniczną, o której nikt nie uprzedza, a która
 * potrafi popsuć pierwsze dni: STARE MIESZKANIE, SŁABA INSTALACJA
 * I PRZEDŁUŻACZ.
 *
 * ŻELAZNA GRANICA: NIE JESTEM ELEKTRYKIEM I MUSZĘ TO NAPISAĆ WPROST.
 * Nie podaję wymagań co do przekroju przewodów, mocy zabezpieczeń ani
 * niczego, co byłoby poradą instalacyjną. Wolno mi napisać dokładnie
 * tyle: sprzęt grzejący nie powinien pracować przez cienki przedłużacz
 * ani przez rozgałęziacz obciążony innymi urządzeniami, a jeśli w domu
 * wybija bezpiecznik, to jest to pytanie do elektryka, nie do mnie.
 *
 * DRUGA CZĘŚĆ, PRAKTYCZNA I W MOICH KOMPETENCJACH: to sprawdzam
 * na prezentacji, bo prezentacja odbywa się w tej samej kuchni, w której
 * urządzenie potem stanie. Jeśli coś ma nie zadziałać, lepiej, żeby
 * okazało się to przede mną, a nie po dostawie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Świnoujście leży na wyspach, a w części uzdrowiskowej jest dużo
 *   starej zabudowy.
 */
export const SWINOUJSCIE: CityContent = {
  slug: "swinoujscie",
  h1: "Thermomix Świnoujście – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Świnoujście — prezentacja i cena",
  seoDescription:
    "Thermomix w Świnoujściu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świnoujście — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świnoujściu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Świnoujścia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Świnoujście i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świnoujściu – jak wygląda prezentacja?",
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
      id: "gniazdko-i-instalacja",
      heading: "Stare mieszkanie, jedno gniazdko i przedłużacz",
      paragraphs: [
        "W dzielnicy nadmorskiej Świnoujścia stoi sporo starej, przedwojennej zabudowy, a w takich mieszkaniach kuchnia bywa mała i ma jedno albo dwa gniazdka, do których podpięte jest już wszystko. To wygląda na drobiazg, a potrafi popsuć pierwsze dni po zakupie — i nikt o tym nie uprzedza.",
        "Zaznaczam od razu granicę: nie jestem elektrykiem i nie będę udawać, że się na tym znam. Nie powiem Wam, jakie zabezpieczenia ani jaka instalacja są potrzebne, bo to nie moja dziedzina i porada z mojej strony mogłaby być szkodliwa.",
        "Powiem tylko dwie rzeczy, które są zwykłym rozsądkiem i nie wymagają uprawnień. Pierwsza: urządzenie, które grzeje, nie powinno pracować przez cienki przedłużacz ani przez rozgałęziacz obciążony jednocześnie czajnikiem i mikrofalówką. Druga: jeśli u Was zdarza się, że przy dwóch włączonych sprzętach wybija bezpiecznik, to jest pytanie do elektryka i lepiej zadać je przed zakupem niż po.",
        "A teraz część, która należy do mnie i którą naprawdę mogę załatwić. Prezentacja odbywa się w tej samej kuchni, w której urządzenie potem stanie, i na tym samym gniazdku. Podłączamy je tam, gdzie ma docelowo stać, a nie tam, gdzie akurat wygodnie — i gotujemy pełne dania przez godzinę. Jeśli coś ma nie zadziałać, wolę, żeby okazało się to przy mnie, a nie w tygodniu po dostawie.",
        "Przy okazji sprawdza się druga rzecz, o której też mało kto myśli przed zakupem: czy w tej kuchni w ogóle jest miejsce, żeby urządzenie stało na stałe, i czy da się je otworzyć pod wiszącą szafką. Bo sprzęt, który trzeba za każdym razem wyjmować i wstawiać, przestaje być używany po miesiącu — i to jest wtedy nie wina sprzętu, tylko złego miejsca.",
        "Napiszcie mi przy umawianiu, w jakim domu mieszkacie i ile macie gniazdek w kuchni. To brzmi dziwnie jak na pytanie od sprzedawcy, ale oszczędza kłopotów.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świnoujściu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Przy starszej zabudowie brak windy zmienia tylko to, ile rzeczy wnoszę za jednym razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świnoujściu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla świnoujskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności i że wszystko dzieje się w jednym naczyniu — co w małej kuchni ma znaczenie większe niż gdziekolwiek indziej.",
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

  districtsHeading: "Do których części Świnoujścia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Dzielnica Nadmorska",
    "Posejdon",
    "Warszów",
    "Przytór",
    "Łunowo",
    "Karsibór",
    "Ognica",
    "Zachodnia",
    "Uzdrowisko",
  ],

  nearbyHeading: "Poza Świnoujście też przyjadę",
  nearbyParagraphs: [
    "Międzyzdroje, Wolin i Kamień Pomorski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Międzyzdroje", "Wolin", "Kamień Pomorski", "Dziwnów", "Golczewo"],

  about: blokOMnie("do Świnoujścia", "w Świnoujściu i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Świnoujścia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Świnoujściu"),
    {
      question: "Mam stare mieszkanie i jedno gniazdko w kuchni. Czy to problem?",
      answer:
        "Sprawdzimy to na spotkaniu, bo prezentacja odbywa się na tym samym gniazdku, na którym urządzenie potem stanie, i trwa godzinę pełnego gotowania. Nie jestem elektrykiem, więc nie doradzę w sprawie instalacji — powiem tylko tyle, że sprzęt grzejący nie powinien pracować przez cienki przedłużacz ani rozgałęziacz obciążony czajnikiem. Jeśli wybija Wam bezpiecznik, to pytanie do elektryka i lepiej zadać je przed zakupem.",
    },
    {
      question: "Co jeszcze warto sprawdzić przed zakupem?",
      answer:
        "Czy w kuchni jest miejsce, żeby urządzenie stało na stałe, i czy da się je otworzyć pod wiszącą szafką. Sprzęt, który trzeba za każdym razem wyjmować i chować, przestaje być używany po miesiącu — a to nie jest wtedy wina sprzętu, tylko złego miejsca.",
    },
  ],

  geo: { lat: 53.9106, lng: 14.2472 },
};
