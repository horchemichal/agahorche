import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * BUSKO-ZDRÓJ — największe uzdrowisko województwa, na Ponidziu.
 * Wody siarczkowe i jodkowe, park zdrojowy, sanatoria działające cały rok.
 * Obok, w Solcu-Zdroju, drugie uzdrowisko tej samej okolicy.
 *
 * KĄT: gość, który zostaje na trzy tygodnie. W wielu tutejszych domach
 * wynajmuje się pokoje kuracjuszom — i to jest kuchnia zupełnie inna
 * niż w domu, który gości przyjmuje od święta. Gotuje się REGULARNIE
 * DLA OBCYCH LUDZI, przez trzy tygodnie z rzędu, a potem od nowa dla
 * następnych. Wróg nie nazywa się „brak czasu”, tylko POWTARZALNOŚĆ:
 * po dziesiątym śniadaniu z rzędu kończą się pomysły, a nie siły.
 *
 * ROZGRANICZENIE WOBEC RYMANOWA. Rymanów-Zdrój dostał w tym serwisie kąt
 * „o lżejszym jedzeniu po prostu się tu rozmawia”. Busko NIE MOŻE dostać
 * tego samego, bo to byłaby druga wersja tej samej strony. Tu kąt jest
 * gospodarczy, nie dietetyczny: praca w domu, wynajem, śniadania.
 *
 * ŻADNYCH TREŚCI MEDYCZNYCH. Nie piszę, co komu wolno jeść, na co pomagają
 * wody siarczkowe ani co zaleca lekarz uzdrowiskowy. To nie jest moja rola
 * i nie mam do tego kompetencji.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Busko-Zdrój jest uzdrowiskiem z wodami siarczkowymi i jodkowymi,
 * — sanatoria pracują przez cały rok, a pobyty lecznicze są kilkutygodniowe,
 * — w mieście jest park zdrojowy i zabytkowa zabudowa uzdrowiskowa,
 * — obok leży drugie uzdrowisko — Solec-Zdrój,
 * — miasto leży na Ponidziu, w dolinie Nidy,
 * — do gminy należą m.in. Zbludowice, Mikułowice, Wełecz, Siesławice,
 *   Owczary, Bronina, Kołaczkowice.
 *
 * CZEGO NIE MA: liczby kuracjuszy, liczby kwater, cen noclegów,
 * czegokolwiek o wskazaniach i przeciwwskazaniach leczniczych.
 */
export const BUSKO_ZDROJ: CityContent = {
  slug: "busko-zdroj",
  h1: "Thermomix Busko-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Busko-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Busku-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Busko-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Busku-Zdroju. Prezentacja bezpłatna, termin pod Wasz grafik.",

  lead:
    "Przyjeżdżam do Buska-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Zbludowic, Mikułowic, Wełcza i pozostałych sołectw gminy.",

  highlights: highlightyStandardowe("Busko-Zdrój i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Busku-Zdroju – jak wygląda prezentacja?",
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
      id: "gosc-na-trzy-tygodnie",
      heading: "Gość, który zostaje na trzy tygodnie",
      paragraphs: [
        "Busko żyje w rytmie, którego nie ma ani miasto przemysłowe, ani miejscowość wakacyjna. Sanatoria pracują cały rok, a pobyty trwają tygodniami — więc w wielu tutejszych domach pokoje wynajmuje się nie na weekend, tylko na dwadzieścia jeden dni. Potem następni. I tak przez większość roku.",
        "To jest zupełnie inna kuchnia niż ta, o której piszą poradniki dla gospodarstw agroturystycznych. Nie chodzi o jednorazowe zrobienie wrażenia. Chodzi o to, żeby przez trzy tygodnie z rzędu podać komuś śniadanie i nie powtórzyć się dziesięć razy — a potem zacząć od początku dla kogoś nowego.",
        "I tu tkwi rzecz, o której mało kto mówi głośno: przy takim wynajmie nie brakuje przede wszystkim czasu. Brakuje pomysłów. Po którymś turnusie człowiek łapie się na tym, że robi to samo, bo tak jest szybciej i bezpieczniej — a potem sam siebie za to gani.",
        "Urządzenie ma tu dwa sensowne zastosowania i żadne z nich nie jest efektowne. Pierwsze: ciasto, pieczywo, pasty i twarożki powstają wieczorem, bez ubrudzenia rąk i bez rozstawiania połowy kuchni, więc rano zostaje samo podanie. Drugie, ważniejsze: baza przepisów, do której się zagląda, kiedy skończą się pomysły — i to jest właśnie ta część, którą przy wynajmie widać najszybciej.",
        "Jeżeli gotujecie dla gości, powiedzcie o tym przy umawianiu. Zrobimy wtedy prezentację pod to, a nie pod rodzinny obiad — bo to są dwa różne zestawy pytań.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy, które robię najczęściej" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Busku-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli macie gości, najprościej umówić się w przerwie między turnusami — ale jeśli nie chcecie czekać, przyjadę też w trakcie, byle o porze, w której nikomu nie wejdę w drogę.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Buskiem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Busku-Zdroju"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla buskiej rodziny",
      paragraphs: [
        "Nawet jeśli nie wynajmujecie pokoi, dom w uzdrowisku rzadko bywa pusty — ktoś przyjeżdża do rodziny na leczenie, ktoś odwiedza, ktoś zostaje na kilka dni. Liczba osób przy stole zmienia się częściej niż gdzie indziej.",
        "Thermomix pomaga tu przez to, że większa porcja nie kosztuje więcej pracy. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc nie trzeba przy nim stać, a wszystko dzieje się w jednym naczyniu — także wtedy, gdy gotujesz dla sześciu osób zamiast dla trzech.",
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

  districtsHeading: "Do których części miasta i gminy dojeżdżam?",
  districtsParagraphs: [
    "Do całego Buska i do wszystkich sołectw gminy, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość albo dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Dzielnica uzdrowiskowa",
    "Podgaje",
    "Zbludowice",
    "Mikułowice",
    "Wełecz",
    "Siesławice",
    "Owczary",
    "Bronina",
    "Kołaczkowice",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Pińczów, Stopnica, Wiślica, Nowy Korczyn, Chmielnik i Szydłów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pińczów", "Stopnica", "Wiślica", "Nowy Korczyn", "Chmielnik", "Szydłów", "Staszów"],

  about: blokOMnie("do Buska-Zdroju", "w Busku i na całym Ponidziu", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Buska-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Busku-Zdroju"),
    {
      question: "Wynajmuję pokoje kuracjuszom — czy prezentacja może być pod to?",
      answer:
        "Tak i wolę tak. Powiedz przy umawianiu, ile osób karmisz i o której podajesz śniadania, a przygotuję spotkanie pod to zamiast pod rodzinny obiad. Pokażę też, jak wygląda baza przepisów, bo przy wynajmie to jest ta część, z której korzysta się najczęściej.",
    },
    {
      question: "Czy to urządzenie robi dietetyczne jedzenie dla kuracjuszy?",
      answer:
        "Nie doradzam w sprawach leczenia i nie będę mówić, co komu wolno jeść — od tego są lekarze. Mogę pokazać, jak przygotować gotowanie na parze i dania z prostych składników, jeśli akurat tego potrzebujecie. Resztę zostawiam osobom, które się na tym znają.",
    },
  ],

  geo: { lat: 50.4703, lng: 20.7189 },
};
