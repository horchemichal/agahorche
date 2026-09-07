import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * BIAŁYSTOK — duże miasto z Puszczą Knyszyńską tuż za granicami,
 * w większości mieszkające w blokach.
 *
 * OBOWIĄZUJE TU NAJOSTRZEJSZA WERSJA ZASADY PODLASKIEJ: NIE PISZEMY
 * O TOŻSAMOŚCI, WYZNANIU ANI HISTORII MIESZKAŃCÓW. Ani jednego zdania.
 * Hak jest wyłącznie przyrodniczy i urbanistyczny — puszcza obok miasta
 * i mieszkanie w bloku.
 *
 * KĄT: zapach i para w mieszkaniu w bloku. Temat, o którym mówi się
 * w kuchni bez przerwy i którego nie ma nigdzie w serwisie.
 *
 * CO SEKCJA MOŻE POWIEDZIEĆ UCZCIWIE:
 * — urządzenie gotuje w zamkniętym naczyniu, więc pary w kuchni jest
 *   MNIEJ niż przy odkrytym garnku. Mniej, nie zero — i to trzeba napisać
 *   dokładnie tak.
 * — największym źródłem zapachu w kuchni jest smażenie, a tego urządzenie
 *   nie robi; smażenie zostaje na płycie niezależnie od zakupu.
 * — uszczelka jest tą częścią, która potrafi zatrzymać zapach.
 *
 * CZEGO SEKCJI NIE WOLNO POWIEDZIEĆ:
 * — że urządzenie „usuwa zapachy" — nie usuwa; ryba i kapusta pachną tak
 *   samo, tylko z zamkniętego naczynia.
 * — CZEGOKOLWIEK O JAKOŚCI POWIETRZA I ZDROWIU. Ani słowa.
 * — czegokolwiek o sąsiadach jako ludziach.
 *
 * ROZGRANICZENIE. Będzin ma małą kuchnię i pytanie „gdzie to postawić",
 * Pruszków hałas, Świnoujście stare instalacje. Tutaj przedmiotem jest
 * PARA I ZAPACH.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Puszcza Knyszyńska leży tuż przy granicach Białegostoku.
 */
export const BIALYSTOK: CityContent = {
  slug: "bialystok",
  h1: "Thermomix Białystok – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Białystok — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Białymstoku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Białystok — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Białymstoku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Białegostoku z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich osiedli i do miejscowości wokół miasta.",

  highlights: highlightyStandardowe("Białystok i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Białymstoku – jak wygląda prezentacja?",
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
      id: "para-i-zapach",
      heading: "Puszcza za oknem, a w kuchni para — o zapachach w bloku",
      paragraphs: [
        "Białystok ma puszczę tuż za granicami miasta i mieszka w większości w blokach. To zestawienie jest trochę zabawne i całkiem praktyczne: powietrza dookoła nie brakuje, ale w kuchni na siedmiu metrach z jednym oknem para nie ma dokąd pójść. To jest temat, o którym mówi się przy stole bez przerwy, a którego nie porusza żaden sprzedawca — więc go poruszę.",
        "Zacznę od tego, co rzeczywiście się zmienia, i będę tu precyzyjna, bo łatwo tu obiecać za dużo. To urządzenie gotuje w zamkniętym naczyniu, więc pary w kuchni jest MNIEJ niż przy odkrytym garnku. Mniej — nie zero. Para wychodzi otworem w pokrywie i to widać. Zimą oznacza to mniej skroplin na szybie, ale nie oznacza suchej kuchni.",
        "Druga rzecz jest ważniejsza i wcale nie dotyczy samego urządzenia. Największym źródłem zapachu w kuchni nie jest gotowanie, tylko smażenie — a tego to urządzenie nie robi. Jeśli więc u Was pachnie po obiedzie, to najprawdopodobniej od patelni, a patelnia zostaje na płycie niezależnie od tego, co kupicie. Mówię to wprost, żeby nikt nie kupował tego sprzętu jako sposobu na zapachy, bo się rozczaruje.",
        "I trzecia, uczciwa do końca: urządzenie niczego nie usuwa. Ryba pachnie rybą, a kapusta kapustą — po prostu robią to z zamkniętego naczynia zamiast z otwartego garnka. Różnica jest odczuwalna, ale to jest różnica stopnia, a nie znikanie problemu.",
        "Rzecz praktyczna na koniec, bo o tę pytają wszyscy, którzy już mają taki sprzęt. Częścią, która potrafi zatrzymać zapach, jest uszczelka w pokrywie. Wyjmuje się ją i myje osobno — i to jest cały sekret. Uszczelka myta razem z resztą, w pośpiechu, po tygodniu zaczyna przypominać o wczorajszym obiedzie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Białymstoku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj osiedle i piętro, a przy blokach — czy jest winda. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Białymstoku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla białostockiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często w kuchni, w której nie ma gdzie się rozłożyć.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że wszystko dzieje się w jednym naczyniu. Przy małym blacie to drugie bywa ważniejsze od pierwszego.",
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

  districtsHeading: "Do których osiedli Białegostoku dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Białostoczek",
    "Antoniuk",
    "Dziesięciny",
    "Wysoki Stoczek",
    "Piaski",
    "Bojary",
    "Nowe Miasto",
    "Słoneczny Stok",
    "Zielone Wzgórza",
    "Starosielce",
    "Skorupy",
  ],

  nearbyHeading: "Poza Białystok też przyjadę",
  nearbyParagraphs: [
    "Wasilków, Choroszcz, Supraśl i Łapy są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wasilków", "Choroszcz", "Supraśl", "Łapy", "Sokółka", "Bielsk Podlaski"],

  about: blokOMnie("do Białegostoku", "w Białymstoku i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Białegostoku bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich osiedli i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Białymstoku"),
    {
      question: "Czy w małej kuchni w bloku będzie mniej pary?",
      answer:
        "Mniej niż przy odkrytym garnku — bo gotowanie odbywa się w zamkniętym naczyniu. Ale nie zero: para wychodzi otworem w pokrywie i to widać. Zimą oznacza to mniej skroplin na szybie, a nie suchą kuchnię.",
    },
    {
      question: "Czy dzięki temu w mieszkaniu przestanie pachnieć po obiedzie?",
      answer:
        "Nie. Urządzenie niczego nie usuwa — ryba pachnie rybą, tylko z zamkniętego naczynia zamiast z otwartego garnka. Największym źródłem zapachu jest zresztą smażenie, a tego ten sprzęt nie robi, więc patelnia zostaje na płycie niezależnie od zakupu.",
    },
  ],

  geo: { lat: 53.1325, lng: 23.1688 },
};
