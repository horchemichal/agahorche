import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * KIELCE — stolica województwa świętokrzyskiego, największe miasto regionu
 * i jedyne powyżej stu tysięcy mieszkańców.
 *
 * KĄT: las w granicach miasta. Kielce są jedynym miastem wojewódzkim
 * w Polsce, w którym w granicach administracyjnych leży kilka rezerwatów
 * przyrody — Kadzielnia, Ślichowice, Wietrznia, Biesak-Białogon — a Góry
 * Świętokrzyskie zaczynają się dosłownie na skraju osiedli. To nie jest
 * ciekawostka turystyczna, tylko fakt organizujący weekend: sobota bardzo
 * często wychodzi z domu. Kuchennie oznacza to coś konkretnego i rzadko
 * nazywanego — WEEKENDOWY OBIAD JEST PRZESUNIĘTY, a wraca się głodnym
 * o osiemnastej, kiedy nikomu już się nie chce zaczynać od zera.
 *
 * DRUGA SEKCJA: wzgórza i dzielnice. Kielce leżą w kotlinie porozdzielanej
 * garbami i mapa kłamie tu bardziej niż w innych miastach tej wielkości —
 * dlatego przy umawianiu pytam o dzielnicę, nie o ulicę.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w granicach Kielc leżą rezerwaty przyrody: Kadzielnia, Ślichowice,
 *   Wietrznia, Biesak-Białogon; na Kadzielni działa amfiteatr,
 * — Karczówka to zalesione wzgórze z klasztorem, w granicach miasta,
 * — Góry Świętokrzyskie zaczynają się bezpośrednio przy mieście,
 * — w centrum stoi zachowany Pałac Biskupów Krakowskich,
 * — miasto leży w kotlinie i jest porozdzielane wzniesieniami,
 * — dzielnice: Centrum, Ślichowice, Barwinek, Baranówek, Bocianek,
 *   Szydłówek, Herby, Czarnów, Białogon, Zagórze, Dąbrowa, Niewachlów,
 *   Pakosz, Podkarczówka, Na Stoku, Sady, Uroczysko, Ostra Górka.
 *
 * CZEGO NIE MA: liczby mieszkańców dzielnic, czasów dojazdu w minutach,
 * twierdzeń o tym, ilu kielczan chodzi po górach.
 */
export const KIELCE: CityContent = {
  slug: "kielce",
  h1: "Thermomix Kielce – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kielce — prezentacja i cena",
  seoDescription:
    "Thermomix w Kielcach: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%, terminy pod Wasz grafik. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kielce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kielcach. Prezentacja i dojazd bezpłatne, we wszystkich dzielnicach.",

  lead:
    "Przyjeżdżam do Kielc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic, od Ślichowic po Białogon i Zagórze.",

  highlights: highlightyStandardowe("Kielce i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kielcach – jak wygląda prezentacja?",
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
      id: "sobota-w-lesie",
      heading: "Sobota wychodzi z domu — i wraca o osiemnastej",
      paragraphs: [
        "Kielce mają rzecz, której nie ma żadne inne miasto wojewódzkie w Polsce: kilka rezerwatów przyrody w granicach administracyjnych. Kadzielnia, Ślichowice, Wietrznia, Biesak-Białogon, do tego zalesiona Karczówka z klasztorem na szczycie — a zaraz za rogatkami zaczynają się Góry Świętokrzyskie. Nie trzeba nigdzie jechać, żeby być w lesie. Wystarczy wyjść.",
        "Dla kuchni ma to konsekwencję, o której nikt nie pisze, bo brzmi zbyt zwyczajnie. W mieście, z którego łatwo wyjść, weekendowy obiad jest przesunięty. Nie ma go o trzynastej, bo o trzynastej wszyscy są na szlaku albo na rowerach. Jest o osiemnastej, gdy rodzina wraca zmęczona, głodna i w stanie, w którym nikomu nie chce się zaczynać gotowania od zera.",
        "I to jest właśnie moment, w którym rozstrzyga się, czy ktoś kupi sobie obiad po drodze, czy zje w domu. Nie chodzi o zdrowie ani o oszczędność — chodzi o to, ile trzeba mieć siły, żeby o osiemnastej stanąć przy kuchence.",
        "Urządzenie nie robi tu cudu i nie będę tak mówić. Robi jedną rzecz: obniża próg. Zupa krem z tego, co jest w lodówce, powstaje w kilkanaście minut i bez pilnowania. Danie jednogarnkowe gotuje się, gdy Ty rozpakowujesz plecaki i wstawiasz pranie. A jeśli coś zostało z wczoraj, odgrzewanie na parze sprawia, że to nadal jest jedzenie, a nie odgrzewany kompromis.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz w lodówce" }],
    },
    {
      id: "wzgorza-i-dzielnice",
      heading: "Miasto rozłożone na garbach — dlatego pytam o dzielnicę",
      paragraphs: [
        "Kielce leżą w kotlinie porozdzielanej wzniesieniami i mapa kłamie tu bardziej niż w innych miastach tej wielkości. Z Ślichowic na Zagórze jest w linii prostej kawałek, a jedzie się dookoła. Białogon i Niewachlów to praktycznie osobne miejscowości wewnątrz miasta, a Na Stoku nazywa się tak nie bez powodu.",
        "Dlatego przy umawianiu pytam o dzielnicę, a nie tylko o ulicę. Nie po to, żeby liczyć kilometry — dojazd jest bezpłatny wszędzie, łącznie z obrzeżami. Chodzi o to, żebym nie obiecała Wam osiemnastej, jeśli realnie będę dwadzieścia minut później.",
        "Druga rzecz, o którą warto uprzedzić: winda albo jej brak, i piętro. To nie zmienia niczego w spotkaniu, ale zmienia, ile rzeczy wnoszę za jednym razem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kielcach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia — oddzwaniam także wieczorem.",
        "Podaj dzielnicę i kilka terminów, które Wam pasują. Umawiam się popołudniami, wieczorami i w weekendy, więc nie trzeba brać wolnego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kielcach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kieleckiej rodziny",
      paragraphs: [
        "W tygodniu wąskie gardło jest tu takie samo jak w każdym mieście: obiad musi powstać w oknie między pracą, szkołą i wieczorem, a robi go zwykle jedna osoba. Różnica jest w weekend — wtedy okno przesuwa się na późne popołudnie, bo dzień był poza domem.",
        "Thermomix pomaga w obu przypadkach tym samym: nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których dzielnic Kielc dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — łącznie z Białogonem, Niewachlowem i Zagórzem.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Ślichowice",
    "Barwinek",
    "Baranówek",
    "Bocianek",
    "Szydłówek",
    "Herby",
    "Czarnów",
    "Białogon",
    "Zagórze",
    "Dąbrowa",
    "Niewachlów",
    "Pakosz",
    "Podkarczówka",
    "Na Stoku",
    "Sady",
    "Uroczysko",
    "Ostra Górka",
  ],

  nearbyHeading: "Poza Kielce też przyjadę",
  nearbyParagraphs: [
    "Chęciny, Morawica, Daleszyce, Suchedniów, Bodzentyn i Jędrzejów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Chęciny",
    "Morawica",
    "Daleszyce",
    "Suchedniów",
    "Bodzentyn",
    "Jędrzejów",
    "Skarżysko-Kamienna",
  ],

  about: blokOMnie("do Kielc", "w Kielcach i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich dzielnic Kielc bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich — od Centrum po Białogon, Niewachlów i Zagórze. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kielcach"),
    {
      question: "W weekendy jesteśmy poza domem — kiedy możesz przyjechać?",
      answer:
        "Wtedy, kiedy Wam pasuje: w tygodniu wieczorem, w sobotę rano albo w niedzielę po powrocie. Podajcie kilka terminów, a wybiorę z nich. Nie musicie rezygnować z wyjścia, żeby się ze mną spotkać.",
    },
    {
      question: "Mieszkam w bloku i mam małą kuchnię — czy to się zmieści?",
      answer:
        "Urządzenie zajmuje mniej blatu, niż większość osób zakłada. Na prezentacji ustawimy je u Ciebie i po prostu zobaczysz, gdzie realnie stanie — a jeśli okaże się, że nie ma miejsca, powiem to wprost.",
    },
  ],

  geo: { lat: 50.8661, lng: 20.6286 },
};
