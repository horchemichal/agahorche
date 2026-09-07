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
 * POZNAŃ — miasto targów. Od ponad stu lat zjeżdżają się tu wystawcy
 * z całej Europy, a mieszkańcy znają format pokazu handlowego lepiej
 * niż gdziekolwiek indziej w Polsce.
 *
 * KĄT: dlaczego takiego sprzętu nie kupuje się na stoisku. To jest jedyne
 * miejsce w serwisie na uczciwą analizę FORMATU POKAZU: co pokaz targowy
 * pokazuje dobrze, czego nie pokazuje w ogóle i dlaczego jest najgorszym
 * możliwym miejscem na podjęcie decyzji o takim wydatku.
 *
 * TWARDA GRANICA — ABSOLUTNIE OBOWIĄZUJE: NIE OCENIAM LUDZI ANI FIRM.
 * Ani jednego słowa o tym, że ktoś na stoisku oszukuje, naciska albo
 * kłamie. Nie wymieniam nazw, nie insynuuję, nie opowiadam historii
 * o „pewnym sprzedawcy". Przedmiotem sekcji jest FORMAT, nie ludzie.
 *
 * OBOWIĄZKOWE ZDANIE O SOBIE: pokazy działają i ja też z nich korzystam
 * — bez tego zdania cały tekst byłby hipokryzją.
 *
 * ROZGRANICZENIE. Jarocin wylicza chwyty sprzedażowe, których nie używam
 * (moje zachowanie). Ząbkowice sprawdzają zarzuty wobec urządzenia.
 * Warszawa pyta, czy spotkanie jest w ogóle potrzebne. Tutaj przedmiotem
 * jest jedno konkretne miejsce zakupu i jego ograniczenia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Poznań jest miastem międzynarodowych targów o ponadstuletniej tradycji.
 */
export const POZNAN: CityContent = {
  slug: "poznan",
  h1: "Thermomix Poznań – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Poznań — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Poznaniu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Poznań — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Poznaniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Poznania z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic i do miejscowości wokół miasta.",

  highlights: highlightyStandardowe("Poznań i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Poznaniu – jak wygląda prezentacja?",
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
      id: "pokaz-a-kuchnia",
      heading: "Miasto targów — i dlaczego takiego sprzętu nie kupuje się na stoisku",
      paragraphs: [
        "Poznań zna pokazy handlowe lepiej niż jakiekolwiek inne miasto w Polsce. Od ponad stu lat zjeżdżają się tu wystawcy z całej Europy, a mieszkańcy widzieli w życiu więcej stoisk niż większość z nas. To dobre miejsce, żeby powiedzieć rzecz, której sprzedawca zwykle nie mówi: pokaz na stoisku to zły moment na decyzję o takim wydatku. I nie dlatego, że ktokolwiek tam oszukuje.",
        "Zacznę od tego, żeby nikogo nie oczerniać, bo to nie jest tekst o ludziach. Pokaz targowy jest po prostu innym gatunkiem. Trwa kilkanaście minut. Składniki są odmierzone wcześniej. Prowadzący robił to samo danie dwieście razy i wie, co się uda. Publiczność stoi. Wszystko jest tak przygotowane, żeby zadziałało — i działa. To nie jest oszustwo, to jest rzemiosło.",
        "Problem polega na tym, co się w tym formacie nie mieści. Nie mieści się Wasz blat i pytanie, czy urządzenie otworzy się pod Waszą szafką. Nie mieszczą się Wasze składniki ani to, czy jedzenie smakuje akurat Wam. Nie mieści się głupie pytanie zadane bez dwudziestu osób słuchających obok. I nie mieści się cisza potrzebna do tego, żeby się nad czymś zastanowić.",
        "Jest jeszcze rzecz, o której warto pomyśleć osobno: warunki decyzji. Na stoisku decyduje się na stojąco, w hałasie, z kolejką za plecami i ze świadomością, że za chwilę trzeba iść dalej. To są najgorsze możliwe warunki do wydania takich pieniędzy — niezależnie od tego, co się kupuje i od kogo.",
        "Powiem też uczciwie o sobie, bo inaczej cały ten tekst byłby hipokryzją: pokazy działają, ja też czasem gotuję dla większej grupy i wiem, jak dobrze to wygląda. Nie stawiam się ponad tym. Mówię tylko, że pokaz i prezentacja u Was w kuchni odpowiadają na dwa różne pytania.",
        "Wniosek jest więc taki: pokaz na stoisku traktujcie jak zwiastun filmu. Warto obejrzeć, robi wrażenie, pokazuje najlepsze fragmenty. Ale decyzję podejmuje się w miejscu, w którym potem naprawdę będzie się gotować — czyli u siebie, przy własnym blacie, bez kolejki za plecami.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja u Ciebie w domu" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Poznaniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Poznaniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla poznańskiej rodziny",
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

  districtsHeading: "Do których dzielnic Poznania dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Nowe Miasto",
    "Jeżyce",
    "Grunwald",
    "Wilda",
    "Winogrady",
    "Rataje",
    "Piątkowo",
    "Naramowice",
    "Łazarz",
    "Dębiec",
    "Górczyn",
  ],

  nearbyHeading: "Poza Poznań też przyjadę",
  nearbyParagraphs: [
    "Swarzędz, Luboń, Kórnik i Mosina są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Swarzędz", "Luboń", "Kórnik", "Mosina", "Oborniki", "Września"],

  about: blokOMnie("do Poznania", "w Poznaniu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Poznania bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Poznaniu"),
    {
      question: "Widziałam pokaz na targach. Czy to nie wystarczy?",
      answer:
        "Pokaz odpowiada na pytanie, co urządzenie potrafi przy najlepszym możliwym przygotowaniu — składniki odmierzone, danie przećwiczone, kilkanaście minut. Nie odpowiada na pytanie, czy zmieści się na Waszym blacie, czy otworzy się pod szafką i czy to jedzenie smakuje akurat Wam. To dwa różne pytania.",
    },
    {
      question: "Dlaczego akurat u mnie w domu, a nie gdzieś na mieście?",
      answer:
        "Bo w domu widać rzeczy, których nigdzie indziej nie widać: ile macie blatu, gdzie jest gniazdko, jak wysoko wisi szafka i co naprawdę jecie. A do tego można spokojnie zadać każde pytanie, bez kolejki za plecami.",
    },
  ],

  geo: { lat: 52.4064, lng: 16.9252 },
};
