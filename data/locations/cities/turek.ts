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
 * TUREK — miasto o tradycjach tkackich; wnętrze tutejszego kościoła
 * zaprojektował Józef Mehoffer, a wykonali je rzemieślnicy. Projekt
 * jednego człowieka, ręce wielu.
 *
 * KĄT: kiedy wolno odejść od przepisu. Miasto, w którym projekt i wykonanie
 * są dwiema osobnymi rzeczami, jest jedynym właściwym miejscem na temat,
 * którego nie ma w instrukcji: KTÓRE PRZEPISY MOŻNA ZMIENIAĆ DOWOLNIE,
 * A KTÓRYCH RUSZAĆ NIE WOLNO. To jest realna wiedza kuchenna, a nie
 * marketing — i akurat ta granica decyduje o tym, czy urządzenie stanie
 * się narzędziem, czy zostanie automatem do odtwarzania.
 *
 * ROZGRANICZENIE WOBEC OPOCZNA. Opoczno mówi, że powtarzalne nie znaczy
 * dobre, i że urządzenie nie poprawi kiepskiego przepisu. Tutaj chodzi
 * o coś innego i praktyczniejszego: o to, w których daniach improwizacja
 * jest bezpieczna, a w których kończy się wyrzuconym jedzeniem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Turek ma tradycje tkackie,
 * — wystrój tutejszego kościoła zaprojektował Józef Mehoffer.
 */
export const TUREK: CityContent = {
  slug: "turek",
  h1: "Thermomix Turek – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Turek — prezentacja i cena",
  seoDescription:
    "Thermomix w Turku: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Turek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Turku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Turku z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Turek i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Drożdżowa plecionka z kruszonką przygotowana z ciasta wyrobionego w Thermomixie",
    caption: "Ciasto drożdżowe wyrabia się samo — to jedna z rzeczy, które najłatwiej sprawdzić na miejscu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Turku – jak wygląda prezentacja?",
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
      id: "kiedy-wolno-zmieniac",
      heading: "Projekt i wykonanie — czyli kiedy wolno odejść od przepisu",
      paragraphs: [
        "Wnętrze tutejszego kościoła zaprojektował Józef Mehoffer, a wykonali je rzemieślnicy — projekt jednego człowieka, ręce wielu. To rozdzielenie jest dobrym wstępem do sprawy, o której nie mówi żadna instrukcja, a która decyduje o tym, czy urządzenie będzie w Waszym domu narzędziem, czy automatem do odtwarzania.",
        "Rzecz w tym, że przepis prowadzony krok po kroku bardzo łatwo zamienia się w rozkaz. Człowiek robi dokładnie to, co na ekranie, i po roku nadal nie wie, co się stanie, jeśli zrobi inaczej. A przecież połowa gotowania polega na odejściu od przepisu.",
        "Podam więc granicę, którą znam z praktyki. Są dania, w których można zmieniać prawie wszystko, i takie, w których nie wolno ruszać niczego.",
        "Zmieniać można swobodnie w zupach, sosach, gulaszach, potrawkach, farszach i wszystkim, co jest w gruncie rzeczy „warzywa plus płyn plus przyprawy”. Tam proporcje są orientacyjne: więcej marchewki, mniej ziemniaka, inne mięso, inna przyprawa — wyjdzie inaczej, ale wyjdzie. Ilość płynu warto trzymać mniej więcej z przepisu, bo od niej zależy gęstość, i to wszystko.",
        "Nie wolno zmieniać w wypiekach i we wszystkim, co wyrasta albo tężeje. Ciasto drożdżowe, biszkopt, bezy, budynie, kremy i wszystko z żelatyną to jest chemia, a nie uznaniowość: proporcja mąki do płynu, ilość drożdży, ilość cukru w bezie i temperatura mają konkretne konsekwencje. Tu przepis jest przepisem, a nie propozycją, i pierwsze pół roku warto trzymać się go co do grama.",
        "Trzecia grupa to dania z mięsem, przy których zmienia się czas, a nie skład — bo kawałek mięsa dwa razy większy potrzebuje więcej czasu, a nie więcej przypraw.",
        "Ta granica jest w gruncie rzeczy prosta: gdzie chodzi o smak, można improwizować; gdzie chodzi o strukturę, nie można. Kto to sobie ułoży w pierwszym miesiącu, przestaje być zależny od przepisów i zaczyna gotować po swojemu — a to jest, moim zdaniem, jedyny sensowny cel takiego zakupu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Turku?",
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
    sekcjaCena("w Turku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tureckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Turek",
    "Słodków",
    "Obrębizna",
    "Chlebów",
    "Cisew",
    "Grabieniec",
    "Kaczki Średnie",
    "Żuki",
    "Albertów",
    "Kalinowa",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Tuliszków, Koło, Konin i Rychwał są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Tuliszków", "Koło", "Konin", "Rychwał", "Kłodawa", "Dąbie"],

  about: blokOMnie("do Turku", "w gminie Turek i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Turku bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Turku"),
    {
      question: "Czy muszę trzymać się przepisu co do grama?",
      answer:
        "Zależy od dania. W zupach, sosach, gulaszach i farszach proporcje są orientacyjne — można zmieniać warzywa, mięso i przyprawy, warto tylko trzymać ilość płynu, bo od niej zależy gęstość. W wypiekach, biszkoptach, bezach, budyniach i wszystkim z żelatyną przepis jest przepisem i pierwsze pół roku warto trzymać się go dokładnie.",
    },
    {
      question: "A co przy większym kawałku mięsa?",
      answer:
        "Zmienia się czas, a nie skład — dwa razy większy kawałek potrzebuje dłuższego gotowania, a nie więcej przypraw. To najczęstsza pomyłka na początku.",
    },
  ],

  geo: { lat: 52.0139, lng: 18.5000 },
};
