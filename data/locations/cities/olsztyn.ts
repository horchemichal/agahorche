import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * OLSZTYN — miasto, które ma jeziora i las w granicach administracyjnych,
 * a nie za rogatkami. Nic nie jest tu schowane na obrzeżach.
 *
 * KĄT: wstyd przed pokazaniem własnej kuchni. To jest najczęstsza rzecz,
 * którą słyszę przy umawianiu — „muszę posprzątać", „u nas remont",
 * „kuchnia stara" — i nigdzie w serwisie nie została nazwana wprost.
 *
 * SEKCJA MA ZROBIĆ TRZY RZECZY:
 * — wymienić KONKRETNIE, co nie ma znaczenia: stare meble, bałagan, brak
 *   zmywarki, mały blat, nieskończony remont, stół, który trzeba uprzątnąć.
 * — powiedzieć, co ma znaczenie i jest krótką listą: kawałek blatu,
 *   gniazdko, godzina.
 * — złożyć jedno konkretne zobowiązanie: NIE FOTOGRAFUJĘ CUDZYCH KUCHNI
 *   I NIGDZIE ICH NIE POKAZUJĘ.
 *
 * TON — TO JEST TU NAJWAŻNIEJSZE: ani jednego zdania z góry, ani jednej
 * sugestii, że ktoś ma się czegoś wstydzić albo że „nie ma czego".
 * Zdanie „to normalne, że tak się myśli" zamiast „nie ma powodu".
 *
 * ROZGRANICZENIE. Ostrołęka mówi o strachu przed ekranem i obsługą,
 * Będzin o małej kuchni jako problemie technicznym. Tutaj przedmiotem
 * jest KRĘPACJA, a nie technika.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Olsztyn ma jeziora i las w granicach miasta.
 */
export const OLSZTYN: CityContent = {
  slug: "olsztyn",
  h1: "Thermomix Olsztyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Olsztyn — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Olsztynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Olsztyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Olsztynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Olsztyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — takiej, jaka jest. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("Olsztyn i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Olsztynie – jak wygląda prezentacja?",
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
      id: "kuchnia-jaka-jest",
      heading: "Miasto, które ma las w środku — czyli o kuchni, której się wstydzicie",
      paragraphs: [
        "Olsztyn nie chowa lasu i jezior za rogatkami — ma je w granicach miasta, na widoku. Wykorzystam to do rzeczy, którą słyszę przy umawianiu częściej niż jakąkolwiek inną i której nikt nie nazywa wprost: „muszę najpierw posprzątać”, „u nas remont”, „kuchnia stara, wstyd pokazywać”.",
        "To jest zupełnie normalne, że tak się myśli, i nie mam zamiaru nikogo z tego wyśmiewać ani tłumaczyć, że „nie ma czego”. Chcę tylko powiedzieć, co widzę ja — bo widzę coś innego, niż się Wam wydaje.",
        "Wymienię więc konkretnie rzeczy, które nie mają żadnego znaczenia. Meble z lat dziewięćdziesiątych. Bałagan na blacie. Naczynia w zlewie. Brak zmywarki. Blat, na którym ledwo mieści się deska. Kuchnia w trakcie remontu, bez frontów. Stół, który trzeba uprzątnąć z papierów, bo wszyscy w domu przy nim pracują. Gotowałam w każdej z tych kuchni, po wielokroć, i żadna z nich nie zrobiła na mnie wrażenia, bo nie po to przyjeżdżam.",
        "Rzeczy, które mają znaczenie, są trzy i mieszczą się w jednym zdaniu: wolny kawałek blatu, gniazdko i godzina, w której nikt nie musi nigdzie biec.",
        "Dodam też jedno konkretne zobowiązanie, bo domyślam się, że część tej krępacji bierze się właśnie stąd: nie fotografuję cudzych kuchni. Nie robię zdjęć „do relacji”, nie wrzucam nikogo do social mediów i nie opowiadam o tym, jak u kogo wygląda. To, co widzę u Was w domu, zostaje u Was w domu.",
        "Piszę o tym z całkiem praktycznego powodu. Bardzo dużo osób odkłada to spotkanie o dwa tygodnie, potem o kolejne dwa, aż w końcu nie umawia się wcale — nie dlatego, że przestały być zainteresowane, tylko dlatego, że wciąż nie ma tego wymarzonego dnia z posprzątaną kuchnią. Szkoda, bo decyzja o zakupie i stan mebli nie mają ze sobą nic wspólnego.",
        "A jeśli u Was faktycznie trwa remont — to jest akurat dobry moment na rozmowę, a nie zły. Można wtedy od razu pomyśleć, gdzie ma być gniazdko i ile zostawić wolnego blatu, zamiast dorabiać to potem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Olsztynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Nie sprzątaj przed moim przyjazdem. Naprawdę — to jedyna prośba, jaką mam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Olsztynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla olsztyńskiej rodziny",
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

  districtsHeading: "Do których dzielnic Olsztyna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Zatorze",
    "Jaroty",
    "Nagórki",
    "Pieczewo",
    "Kortowo",
    "Podleśna",
    "Likusy",
    "Gutkowo",
    "Dajtki",
    "Generałów",
    "Grunwaldzkie",
  ],

  nearbyHeading: "Poza Olsztyn też przyjadę",
  nearbyParagraphs: [
    "Olsztynek, Barczewo, Dobre Miasto i Biskupiec są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Olsztynek", "Barczewo", "Dobre Miasto", "Biskupiec", "Ostróda", "Elbląg"],

  about: blokOMnie("do Olsztyna", "w Olsztynie i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Olsztyna bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Olsztynie"),
    {
      question: "Muszę posprzątać przed Twoim przyjazdem?",
      answer:
        "Nie i to jest moja jedyna prośba: nie sprzątajcie. Stare meble, bałagan na blacie, naczynia w zlewie, brak zmywarki, remont bez frontów — gotowałam w każdej takiej kuchni i żadna nie zrobiła na mnie wrażenia. Znaczenie mają trzy rzeczy: wolny kawałek blatu, gniazdko i godzina spokoju.",
    },
    {
      question: "Czy robisz zdjęcia w domach klientek?",
      answer:
        "Nie. Nie fotografuję cudzych kuchni, nie wrzucam nikogo do social mediów i nie opowiadam, jak u kogo wygląda. To, co widzę u Was w domu, zostaje u Was w domu.",
    },
  ],

  geo: { lat: 53.7784, lng: 20.4801 },
};
