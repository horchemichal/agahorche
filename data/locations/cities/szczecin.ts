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
 * SZCZECIN — największe miasto zachodniego pogranicza, położone tuż przy
 * granicy państwa. Zakupy po obu stronach są tu codziennością.
 *
 * KĄT: „a nie taniej za granicą?". To jest pytanie, które w Szczecinie pada
 * naturalnie, a w całym serwisie nie ma dla niego innego miejsca.
 *
 * TWARDE GRANICE — WSZYSTKIE TRZY OBOWIĄZUJĄ BEZWZGLĘDNIE:
 * — ŻADNYCH CEN ZAGRANICZNYCH. Nie znam ich, zmieniają się i podanie
 *   ich byłoby zgadywaniem podanym jako fakt.
 * — ŻADNYCH TWIERDZEŃ O GWARANCJI I SERWISIE urządzenia kupionego poza
 *   Polską. Nie wiem, jak to wygląda, i nie wolno mi tego zgadywać —
 *   to jest pytanie do serwisu, nie do sprzedawcy.
 * — ŻADNEGO OCZERNIANIA sprzedawców po drugiej stronie granicy.
 *
 * CO ZOSTAJE, GDY ODEJMIE SIĘ POWYŻSZE: rzecz, którą naprawdę wiem.
 * Sprzęt jest wszędzie ten sam, ale WSZYSTKO WOKÓŁ NIEGO jest lokalne —
 * kto odbierze telefon, kto pokaże, jak tego używać, kto się pojawi, gdy
 * coś pójdzie nie tak. To jest jedyna uczciwa oś tej rozmowy.
 *
 * OBOWIĄZKOWE ZDANIE O WŁASNYM INTERESIE: wolałabym, żebyście kupili
 * u mnie, i mówię to wprost zamiast udawać bezstronną doradczynię.
 *
 * ROZGRANICZENIE. Terespol odpowiada na „a gdzie indziej pewnie taniej"
 * w sensie ogólnym — porównania cen u różnych sprzedawców. Zgorzelec
 * dotyczy przepisów w obcych jednostkach. Tutaj chodzi o zakup ZA GRANICĄ
 * i o to, co po zakupie zostaje po polskiej stronie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Szczecin leży blisko granicy państwa.
 */
export const SZCZECIN: CityContent = {
  slug: "szczecin",
  h1: "Thermomix Szczecin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szczecin — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Szczecinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczecin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szczecinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szczecina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic i do miejscowości wokół miasta.",

  highlights: highlightyStandardowe("Szczecin i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczecinie – jak wygląda prezentacja?",
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
      id: "zakup-za-granica",
      heading: "Miasto przy granicy — i pytanie, czy nie taniej po drugiej stronie",
      paragraphs: [
        "W Szczecinie zakupy po obu stronach granicy są codziennością, więc pytanie pada tu naturalnie i pada często: a nie da się tego kupić taniej za Odrą? Odpowiem na nie tak uczciwie, jak umiem — czyli zaczynając od tego, czego NIE wiem.",
        "Nie znam cen po drugiej stronie i nie będę ich podawać. Zmieniają się, zależą od promocji i podanie ich tutaj byłoby zgadywaniem podanym jako fakt. Nie powiem też Wam, jak wygląda gwarancja i serwis urządzenia kupionego poza Polską, bo tego również nie wiem — to jest pytanie do serwisu, a nie do sprzedawczyni, która ma interes w tym, żeby odpowiedź była dla niej korzystna.",
        "I od razu to drugie, żeby było jasne: mam w tej sprawie interes. Wolałabym, żebyście kupili u mnie. Mówię to wprost, bo tekst, który udaje bezstronne doradztwo, a jest ofertą, jest wart mniej niż nic.",
        "Teraz to, co naprawdę wiem i co jest w tej rozmowie jedynym sensownym argumentem. Samo urządzenie jest wszędzie takie samo — to ten sam produkt tej samej firmy. Różni się wszystko wokół niego, a to „wokół” zaczyna się dopiero po zakupie.",
        "Konkretnie: kto pokaże Wam, jak tego używać w Waszej własnej kuchni, w pierwszym tygodniu, kiedy jeszcze nic nie jest oczywiste. Kto odbierze telefon w środę wieczorem, gdy coś nie wychodzi. Kto pamięta, że u Was nie je się nabiału albo że dziecko jest małe. To nie są rzeczy zapisane w żadnej gwarancji — to jest po prostu obecność kogoś, kto mieszka po tej samej stronie granicy.",
        "Jeśli to dla Was nie ma wartości, kupujcie tam, gdzie taniej, i naprawdę nie mam z tym problemu. Jeśli ma — to jest właśnie to, za co się dopłaca, i wolę nazwać to po imieniu, niż opowiadać Wam historie o tym, że za granicą coś nie działa.",
      ],
      links: [{ href: "/kontakt", label: "Kontakt — ta sama osoba przed zakupem i po nim" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szczecinie?",
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
    sekcjaCena("w Szczecinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla szczecińskiej rodziny",
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

  districtsHeading: "Do których dzielnic Szczecina dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Pogodno",
    "Niebuszewo",
    "Gumieńce",
    "Warszewo",
    "Żelechowa",
    "Stołczyn",
    "Dąbie",
    "Podjuchy",
    "Zdroje",
    "Bezrzecze",
    "Krzekowo",
  ],

  nearbyHeading: "Poza Szczecin też przyjadę",
  nearbyParagraphs: [
    "Police, Goleniów, Stargard i Gryfino są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Police", "Goleniów", "Stargard", "Gryfino", "Świnoujście", "Nowogard"],

  about: blokOMnie("do Szczecina", "w Szczecinie i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szczecina bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Szczecinie"),
    {
      question: "Czy nie taniej kupić za granicą?",
      answer:
        "Nie znam cen po drugiej stronie i nie będę ich podawać — zmieniają się, a zgadywanie podane jako fakt jest gorsze niż milczenie. Nie powiem też, jak wygląda gwarancja i serwis urządzenia kupionego poza Polską, bo tego nie wiem; to pytanie do serwisu. Dodam uczciwie, że mam w tej sprawie interes: wolałabym, żebyście kupili u mnie.",
    },
    {
      question: "To za co właściwie się dopłaca, kupując na miejscu?",
      answer:
        "Samo urządzenie jest wszędzie takie samo. Lokalne jest wszystko wokół niego: kto pokaże, jak tego używać w Waszej kuchni w pierwszym tygodniu, kto odbierze telefon w środę wieczorem i kto pamięta, że u Was nie je się nabiału. Jeśli to dla Was nie ma wartości — kupujcie tam, gdzie taniej.",
    },
  ],

  geo: { lat: 53.4285, lng: 14.5528 },
};
