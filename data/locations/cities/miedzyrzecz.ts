import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * MIĘDZYRZECZ — miasto z zamkiem i muzeum, znane przede wszystkim
 * z podziemnych korytarzy Międzyrzeckiego Rejonu Umocnionego, w których
 * zimuje ogromna kolonia nietoperzy. Przez pół roku nic się tam nie dzieje,
 * a mimo to wszystko przetrwa do wiosny.
 *
 * KĄT: przerwa w używaniu. To jest jedyne miejsce w serwisie na sytuację,
 * którą przeżywa prawie każdy właściciel, a nikt jej nie opisuje:
 * URZĄDZENIE, KTÓRE PRZEZ JAKIŚ CZAS STOI NIEUŻYWANE — po wyjeździe,
 * po remoncie, po chorobie w domu albo po prostu dlatego, że życie się
 * zmieniło.
 *
 * SEKCJA MA MIEĆ DWIE CZĘŚCI I OBIE SĄ POTRZEBNE:
 * — TECHNICZNĄ: co zrobić przed dłuższą przerwą (umyć i wysuszyć,
 *   zwłaszcza uszczelkę, nie zamykać wilgotnego, nie trzymać w wilgoci),
 * — LUDZKĄ, WAŻNIEJSZĄ: powrót po przerwie jest trudniejszy niż start,
 *   bo dochodzi wstyd — „tyle to kosztowało, a stoi". Trzeba to nazwać
 *   i podać wyjście: jedno danie, nie dziesięć.
 *
 * ROZGRANICZENIE. Konin ma „trzeci tydzień" — czyli moment, w którym
 * nawyk się nie wytworzył. Tutaj chodzi o dom, w którym nawyk BYŁ,
 * a potem się urwał, i o powrót do niego.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w podziemiach Międzyrzeckiego Rejonu Umocnionego zimują nietoperze.
 */
export const MIEDZYRZECZ: CityContent = {
  slug: "miedzyrzecz",
  h1: "Thermomix Międzyrzecz – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Międzyrzecz — prezentacja i cena",
  seoDescription:
    "Thermomix w Międzyrzeczu: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Międzyrzecz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Międzyrzeczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Międzyrzecza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Międzyrzecz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Międzyrzeczu – jak wygląda prezentacja?",
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
      id: "przerwa",
      heading: "Podziemia, w których przez pół roku nic się nie dzieje",
      paragraphs: [
        "W podziemiach pod Międzyrzeczem zimują nietoperze: przez pół roku nie dzieje się tam nic, a mimo to na wiosnę wszystko rusza dalej. Zatrzymuję się przy tym obrazie, bo opisuje coś, o czym w tej branży nie mówi nikt — a przydarza się prawie każdemu, kto ma taki sprzęt.",
        "Bywa tak, że urządzenie przestaje być używane. Nie od razu i nie na zawsze — po prostu przez kilka tygodni albo miesięcy. Wyjazd, remont kuchni, choroba w domu, nowa praca, nowe dziecko, cokolwiek. Nawyk się urywa, sprzęt idzie do szafki, a potem mija czas.",
        "Zacznę od strony technicznej, bo ta jest prosta i warto ją znać. Przed dłuższą przerwą urządzenie trzeba umyć i, co ważniejsze, dokładnie wysuszyć — zwłaszcza uszczelkę i wszystko, co ma zagłębienia. Sprzęt zamknięty wilgotny i odstawiony na dwa miesiące potrafi nieprzyjemnie zapachnieć i to bywa trudne do usunięcia. Nie trzymajcie go też w wilgotnej piwnicy ani w nieogrzewanym pomieszczeniu; sucha szafka w mieszkaniu w zupełności wystarczy.",
        "Ale ważniejsza jest druga część, o której się milczy. Powrót po przerwie jest trudniejszy niż pierwszy start i nie chodzi wcale o obsługę. Chodzi o to, że dochodzi wstyd. „Tyle to kosztowało, a stoi”. To poczucie skutecznie blokuje sięgnięcie po sprzęt, bo każde spojrzenie na niego przypomina o wydatku — i im dłużej trwa, tym trudniej.",
        "Powiem więc rzecz, którą mówię klientkom przez telefon: to się zdarza wszystkim i nie jest niczyją winą. Życie ma okresy, w których się nie gotuje, i to jest normalne, a nie dowód na nietrafiony zakup.",
        "Wyjście jest jedno i jest banalne: wrócić na jednym daniu, nie na dziesięciu. Nie „od poniedziałku znowu gotuję”, tylko jedna zupa w środę. Postawić sprzęt z powrotem na blacie i zostawić go tam. Po dwóch takich środach wraca się do rytmu bez wysiłku — a po miesiącu nikt już nie pamięta, że była przerwa.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Międzyrzeczu?",
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
    sekcjaCena("w Międzyrzeczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla międzyrzeckiej rodziny",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Międzyrzecz",
    "Kaława",
    "Bukowiec",
    "Kęszyca Leśna",
    "Kalsko",
    "Nietoperek",
    "Pieski",
    "Święty Wojciech",
    "Wysoka",
    "Żółwin",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Skwierzyna, Świebodzin, Trzciel i Pszczew są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Skwierzyna", "Świebodzin", "Trzciel", "Pszczew", "Sulęcin", "Zbąszynek"],

  about: blokOMnie("do Międzyrzecza", "w gminie Międzyrzecz i okolicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Międzyrzecza bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Międzyrzeczu"),
    {
      question: "Co zrobić, jeśli urządzenie ma stać nieużywane przez kilka miesięcy?",
      answer:
        "Umyć i przede wszystkim dokładnie wysuszyć — zwłaszcza uszczelkę i wszystko, co ma zagłębienia. Sprzęt odstawiony wilgotny na dwa miesiące potrafi nieprzyjemnie zapachnieć i trudno to potem usunąć. Nie trzymać w wilgotnej piwnicy ani w nieogrzewanym pomieszczeniu; sucha szafka w mieszkaniu wystarczy.",
    },
    {
      question: "Przestałam używać po kilku miesiącach i teraz mi wstyd wrócić.",
      answer:
        "To się zdarza wszystkim i nie jest niczyją winą — życie ma okresy, w których się nie gotuje. Powrót robi się na jednym daniu, nie na dziesięciu: jedna zupa w środę, sprzęt z powrotem na blacie i tam zostaje. Po dwóch takich środach rytm wraca sam.",
    },
  ],

  geo: { lat: 52.4453, lng: 15.5772 },
};
