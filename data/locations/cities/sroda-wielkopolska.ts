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
 * ŚRODA WIELKOPOLSKA — miasto sejmików szlacheckich, z kolegiatą,
 * czynną koleją wąskotorową od 1902 roku i jedynym w Polsce konnym
 * pomnikiem generała Jana Henryka Dąbrowskiego.
 *
 * UWAGA REDAKCYJNA — NAJWAŻNIEJSZA W TYM PLIKU:
 * SKARB ŚREDZKI NIE MA ZWIĄZKU ZE ŚRODĄ WIELKOPOLSKĄ. To znalezisko
 * ze ŚRODY ŚLĄSKIEJ (woj. dolnośląskie), przechowywane w Muzeum
 * Narodowym we Wrocławiu. To najczęstsza pomyłka przy tej nazwie
 * i nie wolno jej tutaj popełnić.
 *
 * KĄT: „czy to naprawdę jest jedyne takie urządzenie?". Pytanie
 * o wyjątkowość — zadawane przez ludzi, którzy widzieli w sklepie
 * tańsze wielofunkcyjne garnki.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — nie, nie jest jedyne: wielofunkcyjnych urządzeń jest na rynku
 *   sporo i udawanie, że ich nie ma, byłoby obrażaniem czyjejś
 *   inteligencji,
 * — Aga NIE porównuje się z konkretnymi produktami i nie mówi, że coś
 *   jest gorsze — nie zna ich na tyle, żeby oceniać,
 * — co MOŻE powiedzieć: czym jest to urządzenie od strony działania
 *   i co warto porównać samodzielnie,
 * — i uczciwie: sprzedaje jedno urządzenie, więc nie jest niezależną
 *   doradczynią rynku.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO WYMIENIANIA MAREK I MODELI konkurencji, w żadną stronę.
 * — ŻADNYCH TWIERDZEŃ O PRZEWADZE ani o tym, że coś jest „lepsze".
 * — ŻADNYCH LICZB o rynku, udziałach, sprzedaży.
 * — Nie deprecjonować tańszych urządzeń ani osób, które je kupują.
 *
 * ROZGRANICZENIE. Kościerzyna mówi o sprzęcie, który klientka JUŻ MA
 * w kuchni (i nie trzeba go wyrzucać), Police o tym, czego to urządzenie
 * nie zastąpi, Łuków o interesie sprzedającej. Tutaj chodzi o PYTANIE
 * O WYJĄTKOWOŚĆ przed zakupem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — w Środzie Wielkopolskiej odbywały się sejmiki szlacheckie
 *   dla województw poznańskiego i kaliskiego, obradowano w kolegiacie,
 *   bo była największą salą w mieście,
 * — od 1902 r. działa Średzka Kolej Powiatowa (kolej wąskotorowa),
 * — stoi tu jedyny w Polsce konny pomnik gen. Jana Henryka Dąbrowskiego
 *   (odsłonięty w 1997 r.).
 */
export const SRODA_WIELKOPOLSKA: CityContent = {
  slug: "sroda-wielkopolska",
  h1: "Thermomix Środa Wielkopolska – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Środa Wielkopolska — prezentacja",
  seoDescription:
    "Thermomix w Środzie Wielkopolskiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Środa Wielkopolska — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Środzie Wielkopolskiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Środy Wielkopolskiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Środa Wielkopolska i okolica"),

  heroPhoto: {
    src: "/zdjecia/thermomix-tm7-vs-tm6.webp",
    alt: "Thermomix TM7 obok TM6 — porównanie urządzeń",
    caption: "Nie jest jedyne. Udawanie, że jest, byłoby obrażaniem czyjejś inteligencji.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Środzie Wielkopolskiej – jak wygląda prezentacja?",
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
      id: "czy-to-jedyne-takie",
      heading: "Jedyny taki pomnik w Polsce — i pytanie, czy to jedyne takie urządzenie",
      paragraphs: [
        "W Środzie Wielkopolskiej stoi jedyny w Polsce konny pomnik generała Dąbrowskiego. Rzeczy naprawdę jedynych w swoim rodzaju jest niewiele i właśnie dlatego warto uważać na to słowo. Wykorzystam to do pytania, które pada na spotkaniach coraz częściej, odkąd w sklepach stoją tańsze wielofunkcyjne garnki: czy to naprawdę jest jedyne takie urządzenie?",
        "Odpowiedź brzmi: nie. Urządzeń wielofunkcyjnych, które gotują, mieszają i rozdrabniają, jest na rynku sporo, w bardzo różnych cenach. Wiecie o tym, bo je widzieliście, więc udawanie, że ich nie ma, byłoby po prostu obrażaniem Waszej inteligencji. Sprzedawca, który twierdzi, że nie ma na świecie niczego podobnego, mówi Wam coś nieprawdziwego już w pierwszym zdaniu.",
        "Nie będę za to wymieniać marek ani modeli i nie powiem, że którekolwiek z tych urządzeń jest gorsze. Nie znam ich na tyle, żeby uczciwie oceniać, a ocenianie cudzego produktu z pozycji sprzedawcy własnego to nie jest opinia, tylko reklama w przebraniu. Nie mam też złego zdania o ludziach, którzy kupują tańszy sprzęt — bardzo często jest to rozsądna decyzja.",
        "Mogę natomiast powiedzieć, czym to urządzenie jest od strony działania, i to jest sprawdzalne: naczyniem, które waży, rozdrabnia, podgrzewa do zadanej temperatury i miesza w zadanym tempie, z prowadzonymi przepisami i z możliwością gotowania na parze nad naczyniem. Reszta — obudowa, ekran, wielkość misy, jakość wykonania — to rzeczy, które porównuje się w rękach, a nie w opisie.",
        "Jak porównać sensownie: weźcie trzy dania, które naprawdę robicie co tydzień, i sprawdźcie każde urządzenie na nich, a nie na tym, co pokazuje sprzedawca. Policzcie czynności, nie funkcje z listy. Zwróćcie uwagę na to, ile trzeba potem umyć. Lista funkcji jest najgorszym możliwym kryterium, bo prawie żadnej z nich nie użyjecie.",
        "I rzecz, którą muszę powiedzieć, żeby całość była uczciwa: sprzedaję jedno konkretne urządzenie i zarabiam, gdy je kupicie. Nie jestem niezależną doradczynią rynku i nie zamierzam nią udawać. Jeśli chcecie bezstronnego porównania, poszukajcie go u kogoś, kto nie ma w tym interesu — ja mogę tylko pokazać, jak to działa u Was w kuchni, i uczciwie odpowiedzieć na pytania.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Środzie Wielkopolskiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie, jakie trzy dania robicie co tydzień — zrobimy je na spotkaniu, żeby porównanie miało sens.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Środzie Wielkopolskiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla średzkiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Poznania.",
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

  districtsHeading: "Do których części Środy Wielkopolskiej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie ma oficjalnego podziału na osiedla, więc przy umawianiu wystarczy podać ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  // Brak potwierdzonej listy osiedli — BIP wymienia wyłącznie sołectwa gminy.
  districts: [],

  nearbyHeading: "Poza Środę Wielkopolską też przyjadę",
  nearbyParagraphs: [
    "Kórnik, Kostrzyn, Zaniemyśl i Miłosław są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kórnik", "Kostrzyn", "Miłosław", "Września", "Śrem", "Poznań"],

  about: blokOMnie("do Środy Wielkopolskiej", "w Środzie Wielkopolskiej i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Środy Wielkopolskiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Środzie Wielkopolskiej"),
    {
      question: "Czy to jedyne takie urządzenie na rynku?",
      answer:
        "Nie. Urządzeń wielofunkcyjnych, które gotują, mieszają i rozdrabniają, jest sporo, w bardzo różnych cenach — widzieliście je, więc udawanie, że ich nie ma, byłoby obrażaniem Waszej inteligencji. Nie będę za to wymieniać marek ani mówić, że któreś jest gorsze: nie znam ich na tyle, żeby uczciwie oceniać.",
    },
    {
      question: "Jak sensownie porównać takie urządzenia?",
      answer:
        "Weźcie trzy dania, które naprawdę robicie co tydzień, i sprawdźcie każde urządzenie na nich, a nie na tym, co pokazuje sprzedawca. Policzcie czynności, nie funkcje z listy, i zwróćcie uwagę, ile trzeba potem umyć. Lista funkcji jest najgorszym kryterium, bo prawie żadnej z nich nie użyjecie.",
    },
  ],

  geo: { lat: 52.2286, lng: 17.2811 },
};
