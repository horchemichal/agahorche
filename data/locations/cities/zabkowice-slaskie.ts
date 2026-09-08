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
 * ZĄBKOWICE ŚLĄSKIE — miasto z Krzywą Wieżą, przechyloną o ponad dwa metry
 * od pionu. Dawna niemiecka nazwa miasta brzmiała Frankenstein, co do dziś
 * obrasta legendami — z których większość jest po prostu nieprawdziwa.
 *
 * KĄT: rzeczy, które mają złą sławę bez pokrycia. Miasto obrośnięte
 * legendami jest jedynym właściwym miejscem na sekcję, której nigdzie
 * indziej nie ma: LISTA NAJCZĘSTSZYCH ZDAŃ O THERMOMIXIE, z uczciwym
 * podziałem na te fałszywe i te PRAWDZIWE. Sekcja jest bezwartościowa,
 * jeśli wszystkie mity zostaną obalone — jej sens polega na tym, że część
 * zarzutów jest słuszna i zostaje potwierdzona.
 *
 * ROZGRANICZENIE WOBEC BIŁGORAJA. Biłgoraj (sitarze) przesiewał OBIETNICE
 * sprzedażowe na prawdę, półprawdę i nieprawdę — to, co mówi się, żeby
 * sprzedać. Tutaj jest odwrotnie: przesiewam ZARZUTY, czyli to, co mówi
 * się przeciw. Inny materiał, inna funkcja.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Ząbkowicach Śląskich stoi Krzywa Wieża, odchylona od pionu,
 * — dawna nazwa miasta to Frankenstein i obrosła legendami.
 *
 * CZEGO NIE MA: opowiadania legend, danych o odchyleniu, historii miasta.
 */
export const ZABKOWICE_SLASKIE: CityContent = {
  slug: "zabkowice-slaskie",
  h1: "Thermomix Ząbkowice Śląskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ząbkowice Śląskie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ząbkowicach Śląskich: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ząbkowice Śląskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ząbkowicach Śląskich. Prezentacja bezpłatna — i uczciwa lista zarzutów.",

  lead:
    "Przyjeżdżam do Ząbkowic Śląskich z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Ząbkowice Śląskie i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ząbkowicach Śląskich – jak wygląda prezentacja?",
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
      id: "zla-slawa",
      heading: "Miasto legend — więc sprawdźmy, co z tych zarzutów jest prawdą",
      paragraphs: [
        "Ząbkowice Śląskie mają Krzywą Wieżę i mają dawną nazwę, wokół której narosło więcej opowieści niż wokół niejednego zamku. Sporo z nich to zwykłe zmyślenia, ale nie wszystkie — i właśnie ten podział mnie tu interesuje, bo o Thermomixie ludzie mówią dokładnie w ten sam sposób.",
        "Zebrałam więc zarzuty, które słyszę najczęściej, i przechodzę przez nie po kolei. Uprzedzam od razu: nie wszystkie obalam.",
        "„Jest strasznie drogi”. To jest prawda i nie zamierzam z niej robić nieprawdy. To urządzenie kosztuje tyle, co porządny sprzęt AGD, a nie tyle, co blender. Cała rozmowa sprowadza się do tego, czy przy Waszym sposobie gotowania to się zwraca — u części osób nie zwraca się nigdy i wtedy mówię, żeby nie kupować.",
        "„Wszystko z niego smakuje tak samo”. To jest półprawda i pochodzi z prawdziwej obserwacji. Jeśli ktoś robi wyłącznie zupy krem i wyłącznie z przepisów aplikacji, faktycznie po miesiącu wszystko jest gładkie i podobne. Winne są jednak nawyki, a nie urządzenie — bo na tej samej maszynie robi się chleb, kotlety mielone, risotto, pastę do kanapek i kompot, i nic z tego nie jest gładkim kremem.",
        "„To dla kogoś, kto nie umie gotować”. To jest nieprawda, i to odwrotność prawdy. Osoby, które gotują dobrze, wyciągają z niego najwięcej, bo wiedzą, kiedy przestać się trzymać przepisu. Osoba, która nie umie gotować, dostaje tu tylko punkt startowy — i to jest zresztą sensowny punkt startowy.",
        "„Bez internetu nic nie zrobisz”. To jest nieprawda, choć rozumiem, skąd się bierze. Przepisy z aplikacji wymagają połączenia, ale samo gotowanie nie: temperaturę, czas i mieszanie ustawia się ręcznie i to działa zawsze.",
        "„Kupują to tylko dlatego, że ktoś je namówił na pokazie”. To jest zarzut, który biorę na siebie, a nie na urządzenie. Dlatego u mnie prezentacja nie kończy się prośbą o decyzję i dlatego wolę, żebyście się zastanawiali kilka dni. Sprzęt sprzedany pod presją wraca do mnie w najgorszej możliwej formie — jako żal, który ktoś opowie dwudziestu osobom.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Pełna lista wad i zalet" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ząbkowicach Śląskich?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ząbkowicach Śląskich"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ząbkowickiej rodziny",
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
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Ząbkowice Śląskie",
    "Braszowice",
    "Stolec",
    "Sulisławice",
    "Bobolice",
    "Jaworek",
    "Olbrachcice Wielkie",
    "Zwrócona",
    "Brodziszów",
    "Strąkowa",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Ziębice, Niemcza, Kłodzko, Strzelin i Dzierżoniów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ziębice", "Niemcza", "Kłodzko", "Strzelin", "Dzierżoniów", "Piława Górna"],

  about: blokOMnie("do Ząbkowic Śląskich", "w gminie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ząbkowic Śląskich bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ząbkowicach Śląskich"),
    {
      question: "Słyszałam, że wszystko z niego smakuje tak samo. To prawda?",
      answer:
        "To półprawda z prawdziwej obserwacji: jeśli ktoś robi wyłącznie zupy krem z przepisów aplikacji, po miesiącu faktycznie wszystko jest gładkie i podobne. Winne są nawyki, nie urządzenie — na tym samym sprzęcie powstaje chleb, kotlety mielone, risotto i pasta do kanapek.",
    },
    {
      question: "Czy to sprzęt dla kogoś, kto nie umie gotować?",
      answer:
        "Odwrotnie — najwięcej wyciągają z niego osoby, które gotować umieją, bo wiedzą, kiedy odejść od przepisu. Komuś początkującemu daje sensowny punkt startowy, ale nie zastąpi wprawy.",
    },
  ],

  geo: { lat: 50.5906, lng: 16.8125 },
};
