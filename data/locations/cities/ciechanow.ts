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
 * CIECHANÓW — miasto z zamkiem książąt mazowieckich, a nieopodal
 * Opinogóra: zespół pałacowy Krasińskich i Muzeum Romantyzmu.
 *
 * KĄT: czy to urządzenie odbiera przyjemność z gotowania. To jest jedyne
 * miejsce w serwisie na zarzut, który stawiają osoby GOTUJĄCE DOBRZE
 * I Z PRZYJEMNOŚCIĄ — czyli te, których nie da się przekonać oszczędnością
 * czasu, bo one tego czasu wcale nie chcą oszczędzać.
 *
 * ODPOWIEDŹ MUSI BYĆ PODZIELONA I NIE MOŻE BYĆ WYKRĘTEM. Uczciwie:
 * TAK, część przyjemności znika — dotyk ciasta, ocena na oko, stanie
 * przy garnku. Nie odbiera natomiast tej części, która polega na doborze
 * składników, doprawianiu i decydowaniu. I jest jeden przypadek, w którym
 * urządzenie przyjemność ZWIĘKSZA: gdy zdejmuje z Was tę robotę, której
 * i tak nie lubicie, zostawiając czas na tę, którą lubicie.
 *
 * ZAKOŃCZENIE MA BYĆ WPROST: jeśli gotowanie jest Waszym odpoczynkiem
 * i nic Was w nim nie męczy — nie kupujcie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Ciechanowie stoi zamek książąt mazowieckich,
 * — w pobliskiej Opinogórze działa Muzeum Romantyzmu.
 */
export const CIECHANOW: CityContent = {
  slug: "ciechanow",
  h1: "Thermomix Ciechanów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Ciechanów — prezentacja i cena",
  seoDescription:
    "Thermomix w Ciechanowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ciechanów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ciechanowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ciechanowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Ciechanów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ciechanowie – jak wygląda prezentacja?",
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
      id: "przyjemnosc-z-gotowania",
      heading: "Zarzut, który słyszę od najlepiej gotujących",
      paragraphs: [
        "Pod Ciechanowem, w Opinogórze, mieści się Muzeum Romantyzmu — a romantyzm był w gruncie rzeczy sporem o to, czy wszystko warto usprawniać. Zaczynam od tego, bo najciekawszy zarzut wobec tego urządzenia stawiają mi zawsze te same osoby: te, które gotują dobrze i z przyjemnością.",
        "Brzmi on tak: „ja lubię gotować, a to mi tę przyjemność odbierze”. I to nie jest zarzut do zbycia jednym zdaniem, bo jest częściowo słuszny.",
        "Powiem więc, co naprawdę znika. Znika dotyk ciasta pod rękami — a dla wielu osób to jest właśnie ta najlepsza część. Znika ocenianie na oko i na węch, bo urządzenie odmierza za Was. Znika stanie przy garnku i mieszanie, czyli czynność, która dla części ludzi jest odpoczynkiem, a nie robotą. Jeśli to są te momenty, dla których gotujecie, nie będę udawać, że ich nie zabraknie.",
        "A teraz to, co nie znika, i tego jest więcej. Nie znika dobór składników — nadal Wy decydujecie, co wchodzi do naczynia i skąd to jest. Nie znika doprawianie, bo urządzenie nie ma smaku i nie spróbuje za Was. Nie znika komponowanie obiadu ani zmienianie przepisu po swojemu. Cała część, w której gotowanie jest decyzją, zostaje po Waszej stronie.",
        "Jest też przypadek, w którym urządzenie przyjemność zwiększa, i widzę go najczęściej u osób gotujących dużo. Bo w kuchni jest robota lubiana i robota nielubiana, a to są zwykle różne rzeczy. Ktoś uwielbia piec, ale nie znosi szatkować. Ktoś lubi wymyślać dania, ale nie lubi pilnować sosu. Kiedy nielubiana część przestaje zabierać wieczór, na lubianą zostaje więcej siły — i to jest jedyna uczciwa obietnica, jaką mogę tu złożyć.",
        "Na koniec rzecz najprostsza: jeśli gotowanie jest Waszym odpoczynkiem i nic Was w nim nie męczy, to nie kupujcie. Naprawdę. Nie mam nic sensownego do zaoferowania komuś, kto nie chce oszczędzać na tym czasu.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez lukru" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ciechanowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz, którą część gotowania lubisz najbardziej, a której nie znosisz. Od tego zacznę spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ciechanowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ciechanowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności — przejmuje tę część roboty, przy której trzeba stać, i zostawia tę, w której się decyduje.",
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

  districtsHeading: "Do których części Ciechanowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Zamkowa",
    "Bloki",
    "Podzamcze",
    "Szczurzynek",
    "Krubin",
    "Kwiatkowskiego",
    "Aleksandrówka",
    "Opinogóra",
    "Gąski",
  ],

  nearbyHeading: "Poza Ciechanów też przyjadę",
  nearbyParagraphs: [
    "Mława, Płońsk, Przasnysz i Raciąż są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mława", "Płońsk", "Przasnysz", "Raciąż", "Żuromin"],

  about: blokOMnie("do Ciechanowa", "w Ciechanowie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ciechanowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ciechanowie"),
    {
      question: "Lubię gotować. Czy to urządzenie odbierze mi przyjemność?",
      answer:
        "Częściowo tak i nie będę tego ukrywać: znika dotyk ciasta pod rękami, ocenianie na oko i stanie przy garnku. Nie znika za to dobór składników, doprawianie ani komponowanie dania — cała część, w której gotowanie jest decyzją, zostaje po Twojej stronie.",
    },
    {
      question: "Czy jest sens kupować, jeśli gotowanie jest dla mnie odpoczynkiem?",
      answer:
        "Jeśli nic Cię w nim nie męczy — nie. Nie mam nic sensownego do zaoferowania komuś, kto nie chce oszczędzać na tym czasu. Sens pojawia się wtedy, gdy w kuchni jest robota, której nie lubisz: wtedy na tę lubianą zostaje więcej siły.",
    },
  ],

  geo: { lat: 52.8811, lng: 20.6119 },
};
