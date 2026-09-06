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
 * PRZEWORSK — miasto na żyznej, płaskiej ziemi między Łańcutem
 * a Jarosławiem. Cukrownia była tu przez dziesięciolecia największym
 * zakładem, a wokół miasta ciągną się pola.
 *
 * KĄT: warzywa korzeniowe i płaska ziemia. To odróżnia Przeworsk
 * od Jasła (owoce z sadów i pogórza) i od Rybnika (przydomowy ogród):
 * tu rosną BURAKI, MARCHEW, KAPUSTA, ZIEMNIAKI — czyli to, co się
 * przechowuje, a nie to, co trzeba przerobić w trzy dni. Kuchnia zimowa
 * jest tu naprawdę zimowa i opiera się na kilku prostych składnikach,
 * z których trzeba umieć zrobić wiele różnych rzeczy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Przeworsk leży na żyznych terenach rolniczych Podgórza Rzeszowskiego,
 *   między Łańcutem a Jarosławiem,
 * — cukrownia w Przeworsku była przez lata jednym z największych zakładów
 *   w okolicy, a uprawa buraka cukrowego jest tu tradycyjna,
 * — z Przeworska prowadzi kolej wąskotorowa w stronę Dynowa, dziś
 *   turystyczna,
 * — miasto jest siedzibą powiatu przeworskiego (m.in. Kańczuga, Sieniawa,
 *   Tryńcza, Gać, Jawornik Polski, Zarzecze),
 * — w mieście zachował się zespół pałacowo-parkowy Lubomirskich.
 *
 * CZEGO NIE MA: danych o produkcji rolnej, powierzchni upraw, informacji
 * o dzisiejszym stanie cukrowni.
 */
export const PRZEWORSK: CityContent = {
  slug: "przeworsk",
  h1: "Thermomix Przeworsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Przeworsk — prezentacja i cena",
  seoDescription:
    "Thermomix w Przeworsku: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat przeworski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Przeworsk — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Przeworsku i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Przeworska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Budach Przeworskich, Gwizdaju czy Podzamczu. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Przeworsk i cały powiat przeworski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Przeworsku – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu albo w piwnicy. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "warzywa-korzeniowe",
      heading: "Płaska, żyzna ziemia — czyli kuchnia z pięciu składników",
      paragraphs: [
        "Wokół Przeworska ciągną się pola, a nie sady czy lasy. To ziemia buraka, marchwi, kapusty i ziemniaka — czyli tego, co się przechowuje, a nie tego, co trzeba przerobić w trzy dni. Cukrownia przez dziesięciolecia była tu największym zakładem i nie wzięło się to znikąd.",
        "Kuchennie jest to zupełnie inna sytuacja niż w okolicach sadowniczych. Tam problemem jest nadmiar, który się psuje. Tu problem jest odwrotny i cichszy: przez pół roku ma się do dyspozycji te same kilka składników i trzeba z nich zrobić coś, czego rodzina nie odmówi po raz dwudziesty.",
        "Właśnie w tym miejscu urządzenie robi realną różnicę, choć nie brzmi to efektownie. Z tej samej marchwi i pietruszki wychodzi zupa krem, gęsty sos, pasta do chleba albo farsz — zależnie od tego, co się z nimi zrobi, a nie od tego, co się kupi. Zmiksowanie do gładkości, ugotowanie z ustawioną temperaturą i mieszaniem, wszystko w jednym naczyniu: te trzy rzeczy zamieniają worek warzyw w kilkanaście różnych obiadów.",
        "Na prezentacji chętnie zrobię to na tym, co macie w domu w danym momencie roku. To uczciwszy test niż gotowanie z produktów, które przywiozłam ze sobą.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Zobacz, co zrobisz z tego, co masz" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Przeworsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość — jeżdżę po całym powiecie przeworskim, a od kierunku zależy tylko godzina spotkania, nigdy jego cena.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Przeworsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla przeworskiej rodziny",
      paragraphs: [
        "W tej okolicy obiad wciąż bywa wspólnym posiłkiem, a gotuje się większe porcje i z własnych produktów. Przygotowuje go zwykle ta sama osoba, dzień po dniu.",
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

  districtsHeading: "Do których części Przeworska dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Podzamcze",
    "Budy Przeworskie",
    "Gwizdaj",
    "Osiedle Kombatantów",
    "Osiedle Lubomirskich",
    "Za Torem",
  ],

  nearbyHeading: "Cały powiat przeworski i okolice",
  nearbyParagraphs: [
    "Kańczuga, Sieniawa, Tryńcza, Gać, Jawornik Polski i Zarzecze są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Łańcuta, Jarosławia i Leżajska.",
  ],
  nearbyTowns: [
    "Łańcut",
    "Jarosław",
    "Leżajsk",
    "Dynów",
    "Rzeszów",
    "Przemyśl",
  ],

  about: blokOMnie("do Przeworska", "w Przeworsku i całym powiecie", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Przeworska bez dodatkowej opłaty?",
      answer:
        "Tak, do Przeworska i do całego powiatu przeworskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Przeworsku"),
    {
      question: "Gotuję zimą z tych samych kilku warzyw — czy da się z tego zrobić coś nowego?",
      answer:
        "Da i to jest ta część, którą lubię pokazywać najbardziej. Z tej samej marchwi i pietruszki wychodzi zupa krem, gęsty sos, pasta do chleba albo farsz — różnica jest w wykonaniu, nie w zakupach. Na prezentacji zrobimy to z tego, co akurat masz w domu.",
    },
    {
      question: "Czy przyjedziesz do Kańczugi albo Sieniawy?",
      answer:
        "Tak, jeżdżę po całym powiecie przeworskim. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 50.0589, lng: 22.4939 },
};
