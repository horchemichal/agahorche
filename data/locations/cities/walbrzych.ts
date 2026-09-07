import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * WAŁBRZYCH — największe miasto regionu po Wrocławiu, rozłożone po dolinach
 * i wzgórzach, z zamkiem Książ i palmiarnią. Przez dziesięciolecia żyło
 * z węgla; kopalnie zamknięto w latach dziewięćdziesiątych i miasto musiało
 * stać się czymś innym, niż było.
 *
 * KĄT: co zrobić ze starym sprzętem. To jest jedyne miejsce, w którym mogę
 * uczciwie napisać sekcję o CZYMŚ, CO PRZESTAŁO BYĆ TYM, CZYM BYŁO —
 * i przenieść to na najczęstsze prawdziwe pytanie, jakie dostaję od osób,
 * które już mają Thermomixa: CZY WYMIENIAĆ STARSZY MODEL NA TM7.
 * Odpowiedź brzmi „to zależy" i musi zawierać zdanie, którego nie usłyszy
 * się w reklamie: BARDZO CZĘSTO NIE WARTO.
 *
 * DLACZEGO TUTAJ. Bo Wałbrzych zna z własnego doświadczenia różnicę między
 * „to się skończyło" a „to się zmieniło" — i nie da się go nabrać na
 * opowieść, że wszystko stare trzeba wyrzucić.
 *
 * CZEGO TU NIE MA I BYĆ NIE MOŻE: opowiadania mieszkańcom o restrukturyzacji,
 * biedzie ani o tym, jak im było. Jedno rzeczowe zdanie o zamknięciu kopalń
 * wystarcza. Nie ma też liczb o cenach odkupu ani obietnic rabatu wymiany,
 * bo to zmienia się co kwartał i nie wolno mi tego wpisywać na stałe.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Wałbrzych żył z górnictwa węgla kamiennego, kopalnie zamknięto
 *   w latach dziewięćdziesiątych,
 * — miasto leży w kotlinie, rozłożone po wzgórzach,
 * — nad miastem stoi zamek Książ.
 *
 * CZEGO NIE MA: dat dziennych, nazw kopalń, danych o bezrobociu.
 */
export const WALBRZYCH: CityContent = {
  slug: "walbrzych",
  h1: "Thermomix Wałbrzych – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Wałbrzych — prezentacja i cena",
  seoDescription:
    "Thermomix w Wałbrzychu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wałbrzych — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wałbrzychu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wałbrzycha z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Wałbrzych i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wałbrzychu – jak wygląda prezentacja?",
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
      id: "stary-sprzet",
      heading: "Masz starszy model? Bardzo często nie warto wymieniać",
      paragraphs: [
        "Wałbrzych przestał być miastem górniczym i musiał wymyślić się od nowa. Nie będę o tym pisać więcej, bo to Wasza historia, a nie mój temat — wspominam o niej dlatego, że miasto z takim doświadczeniem świetnie wyczuwa różnicę między „to się skończyło” a „to się zmieniło”. I dokładnie o tę różnicę chodzi w pytaniu, które słyszę tutaj najczęściej.",
        "Pytanie brzmi: mam TM5 albo TM6, czy przesiadać się na TM7. Odpowiedź, której nie usłyszycie w reklamie, brzmi: bardzo często nie warto.",
        "Jeżeli Wasze urządzenie działa, a Wy gotujecie w nim zupy, sosy, ciasta i obiady w tygodniu — TM7 zrobi Wam to samo. Będzie miał wygodniejszy ekran, będzie cichszy i szybciej się obsługuje, ale obiad wyjdzie ten sam. Za samą wygodę obsługi nie namawiam nikogo na wydatek tego rzędu i nie zamierzam zacząć.",
        "Wymiana ma sens w kilku konkretnych sytuacjach i wolę je wymienić po nazwisku, żeby było jasno: gdy stare urządzenie realnie się zużyło i naprawa zaczyna kosztować poważne pieniądze; gdy gotujecie codziennie i dla większej liczby osób, więc każde ułatwienie odrabia się w praktyce; albo gdy stary sprzęt ma przejąć ktoś w rodzinie, kto i tak by kupował. To ostatnie zdarza się najczęściej i jest najuczciwszym powodem.",
        "Jeśli natomiast Wasz Thermomix stoi w szafce i włącza się raz na miesiąc, to nowy model tego nie zmieni. Problemem nie jest wtedy urządzenie i nie kupi się na to rozwiązania.",
        "Powiedzcie przy umawianiu, co macie i jak często tego używacie. Umiem powiedzieć „proszę zostać przy tym, co macie” i mówię to regularnie.",
      ],
      links: [{ href: "/thermomix/tm7-vs-tm6", label: "Czym TM7 różni się od TM6 — bez marketingu" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wałbrzychu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Miasto jest rozłożone po wzgórzach, więc od dzielnicy zależy pora spotkania — nigdy jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wałbrzychu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wałbrzyskiej rodziny",
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

  districtsHeading: "Do których dzielnic Wałbrzycha dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Nowe Miasto",
    "Stary Zdrój",
    "Podgórze",
    "Sobięcin",
    "Biały Kamień",
    "Piaskowa Góra",
    "Podzamcze",
    "Szczawienko",
    "Rusinowa",
  ],

  nearbyHeading: "Poza Wałbrzych też przyjadę",
  nearbyParagraphs: [
    "Świdnica, Świebodzice, Boguszów-Gorce, Szczawno-Zdrój i Głuszyca są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świdnica", "Świebodzice", "Boguszów-Gorce", "Szczawno-Zdrój", "Głuszyca", "Jedlina-Zdrój"],

  about: blokOMnie("do Wałbrzycha", "w Wałbrzychu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wałbrzycha bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wałbrzychu"),
    {
      question: "Mam TM5. Czy warto przesiadać się na TM7?",
      answer:
        "Bardzo często nie warto i mówię to wprost. Jeśli stare urządzenie działa, a gotujecie w nim zwykłe obiady, TM7 zrobi Wam to samo — będzie tylko wygodniejszy w obsłudze i cichszy. Wymiana ma sens, gdy sprzęt realnie się zużył, gdy gotujecie codziennie dla większej liczby osób albo gdy stary przejmuje ktoś w rodzinie, kto i tak by kupował.",
    },
    {
      question: "Mój Thermomix stoi w szafce. Czy nowszy model to zmieni?",
      answer:
        "Nie. Jeśli urządzenie się nie używa, problemem nie jest model i nie kupi się na to rozwiązania. Wolę o tym powiedzieć przed zakupem niż po nim — chętnie natomiast pomogę znaleźć te kilka dań, przy których faktycznie by się przydało.",
    },
  ],

  geo: { lat: 50.7714, lng: 16.2845 },
};
