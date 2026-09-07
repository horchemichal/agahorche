import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * WARSZAWA — największe miasto w Polsce i miejsce, w którym najwięcej
 * spraw załatwia się bez wychodzenia z domu: pracę, bank, zakupy,
 * wizytę u lekarza.
 *
 * KĄT: po co w ogóle ta wizyta. To jest jedyne miejsce w serwisie
 * na pytanie, które w Warszawie pada częściej niż gdziekolwiek indziej:
 * „CZY NIE DA SIĘ TEGO ZAŁATWIĆ PRZEZ TELEFON ALBO WIDEO?".
 *
 * SEKCJA MA ODPOWIEDZIEĆ UCZCIWIE I W OBIE STRONY:
 * — co ekran ZAŁATWIA w zupełności: cena, rata, co urządzenie robi,
 *   umówienie terminu. Do tego naprawdę nie trzeba się spotykać
 *   i nie będę tego udawać.
 * — czego ekran NIE ZAŁATWI: czy zmieści się na Waszym blacie, czy da
 *   się otworzyć pod wiszącą szafką, jak brzmi w Waszej kuchni i — przede
 *   wszystkim — czy to jedzenie smakuje WAM. Cudzy obiad na filmie
 *   nie mówi o tym nic.
 *
 * OBOWIĄZKOWE ZDANIE O WŁASNYM INTERESIE: spotkanie jest korzystne dla
 * MNIE i trzeba to powiedzieć wprost, zamiast udawać, że proponuję je
 * wyłącznie dla dobra klientki.
 *
 * CZEGO NIE MA: obietnicy prezentacji online jako osobnej usługi — takiej
 * oferty nie ogłaszam i nie wolno jej tu wymyślać. Strona mówi tylko
 * o telefonie, mailu i o tym, co da się ustalić bez spotkania.
 *
 * ROZGRANICZENIE. Biała Podlaska mówi „nie jestem tu po drodze" — tam
 * chodzi o odległość. Jarocin wylicza chwyty, których nie używam — tam
 * o zachowanie na spotkaniu. Tutaj chodzi o to, CZY SPOTKANIE JEST
 * W OGÓLE POTRZEBNE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Warszawa jest największym miastem w Polsce.
 */
export const WARSZAWA: CityContent = {
  slug: "warszawa",
  h1: "Thermomix Warszawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Warszawa — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Warszawie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Warszawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Warszawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Warszawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic i do miejscowości wokół miasta.",

  highlights: highlightyStandardowe("Warszawa i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Warszawie – jak wygląda prezentacja?",
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
      id: "po-co-spotkanie",
      heading: "Miasto, które wszystko załatwia zdalnie — więc po co ta wizyta?",
      paragraphs: [
        "W Warszawie prawie wszystko da się dziś załatwić bez wychodzenia z domu: pracę, bank, zakupy, wizytę u lekarza. Dlatego to właśnie tutaj najczęściej słyszę pytanie, które gdzie indziej pada rzadko: „a nie da się tego załatwić przez telefon?”. Odpowiem na nie uczciwie, w obie strony.",
        "Zacznę od tego, co przez telefon załatwić się DA — i to w zupełności. Cena. Wysokość raty przy różnych okresach spłaty. Co urządzenie robi, a czego nie robi. Czym różni się od poprzedniego modelu. Ustalenie terminu. Jeśli potrzebujecie tylko tych rzeczy, zadzwońcie albo napiszcie — dostaniecie je bez spotkania i nie będę Was do niczego namawiać. Naprawdę nie musicie wpuszczać nikogo do domu po to, żeby poznać cenę.",
        "Teraz to, czego ekran nie załatwi, i tu robi się konkretnie. Nie sprawdzicie, czy urządzenie zmieści się na Waszym blacie i czy da się je otworzyć pod wiszącą szafką — a to jest najczęstsza niemiła niespodzianka po zakupie. Nie usłyszycie, jak brzmi w Waszej kuchni. Nie zobaczycie, ile miejsca zajmuje naczynie odstawione do wyschnięcia.",
        "Ale najważniejsze jest co innego. Na filmie zawsze widzicie cudzy obiad, ugotowany z cudzych składników, doprawiony pod cudze podniebienie. To nie mówi Wam nic o tym, czy TO JEDZENIE SMAKUJE WAM. A to jest jedyne pytanie, od którego naprawdę zależy, czy ten sprzęt się u Was przyjmie, czy stanie w szafce po miesiącu.",
        "Powiem też rzecz, którą sprzedawcy zwykle przemilczają: spotkanie jest korzystne dla mnie. Kiedy jestem w Waszej kuchni, szansa, że kupicie, rośnie — i byłoby nieuczciwe udawać, że proponuję je wyłącznie dla Waszego dobra. Proponuję je z obu powodów naraz i wolę to powiedzieć, niż zgrywać bezinteresowną.",
        "Wniosek jest więc prosty. Jeśli chcecie liczb — dzwońcie, nie musimy się widzieć. Jeśli chcecie wiedzieć, czy to pasuje do Waszej kuchni i do tego, jak jecie — muszę przyjechać, bo tego przez ekran nie da się rozstrzygnąć ani mnie, ani Wam.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez lukru" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Warszawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro, a przy blokach — czy jest winda. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Warszawie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla warszawskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po dojeździe, który zajął godzinę.",
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

  districtsHeading: "Do których dzielnic Warszawy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Mokotów",
    "Wola",
    "Praga-Południe",
    "Praga-Północ",
    "Ursynów",
    "Bielany",
    "Białołęka",
    "Bemowo",
    "Targówek",
    "Ochota",
    "Wilanów",
  ],

  nearbyHeading: "Poza Warszawę też przyjadę",
  nearbyParagraphs: [
    "Pruszków, Piaseczno, Legionowo i Otwock są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pruszków", "Piaseczno", "Legionowo", "Otwock", "Marki", "Ząbki"],

  about: blokOMnie("do Warszawy", "w Warszawie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Warszawy bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Warszawie"),
    {
      question: "Czy muszę się z Tobą spotykać, żeby poznać cenę i ratę?",
      answer:
        "Nie. Cenę, aktualną promocję, wysokość raty przy różnych okresach spłaty i to, co urządzenie robi, podam przez telefon albo SMS-em. Do tego naprawdę nie trzeba się widzieć i nie będę do spotkania namawiać.",
    },
    {
      question: "To po co w ogóle prezentacja u mnie w domu?",
      answer:
        "Bo trzech rzeczy przez ekran nie sprawdzicie: czy urządzenie zmieści się na Waszym blacie i otworzy pod szafką, jak brzmi w Waszej kuchni i — najważniejsze — czy to jedzenie smakuje Wam. Cudzy obiad na filmie nie mówi o tym nic. Dodam uczciwie, że spotkanie jest korzystne też dla mnie, bo wtedy częściej dochodzi do zakupu.",
    },
  ],

  geo: { lat: 52.2297, lng: 21.0122 },
};
