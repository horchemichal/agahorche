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
 * WIŚLICA — jedna z najstarszych miejscowości w Polsce, przez wieki ważny
 * ośrodek, dziś jedno z najmniejszych miast w kraju. Jest tu gotycka
 * kolegiata, a pod nią romańska posadzka zwana płytą orantów.
 *
 * KĄT: obsługa po zakupie w bardzo małym miejscu. To najmniejsza
 * miejscowość, dla której piszę stronę, i właśnie dlatego trzeba tu
 * odpowiedzieć na obawę, której w Kielcach nikt nie ma: „kupię, a potem
 * zostanę sama". W miejscu na kilkaset osób nikt nie przyjeżdża z niczym
 * — ani serwis, ani doradca, ani kurier w pół godziny. Więc strona ma
 * powiedzieć konkretnie, JAK WYGLĄDA KONTAKT PO ZAKUPIE, a nie tylko
 * zapewnić, że „jestem do dyspozycji".
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Wiślica należy do najstarszych miejscowości w Polsce i była ważnym
 *   ośrodkiem w średniowieczu,
 * — jest tu kolegiata, a pod nią romańska płyta zwana płytą orantów,
 * — Wiślica jest jednym z najmniejszych miast w Polsce,
 * — leży nad Nidą, na Ponidziu, w pobliżu Buska-Zdroju i Pińczowa.
 *
 * CZEGO NIE MA: dat, liczby mieszkańców podanej jako argument, opisu
 * zabytków ponad to, co potrzebne do jednego zdania.
 */
export const WISLICA: CityContent = {
  slug: "wislica",
  h1: "Thermomix Wiślica – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Wiślica — prezentacja i cena",
  seoDescription:
    "Thermomix w Wiślicy: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Cena, raty 0%, stały kontakt po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wiślica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wiślicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wiślicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Szczytnik, Gorysławic, Kuchar i pozostałych sołectw gminy.",

  highlights: highlightyStandardowe("Wiślica i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wiślicy – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś, co u Was w domu robi się od lat. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "co-po-zakupie",
      heading: "Najmniejsze miasto — i pytanie, co będzie potem",
      paragraphs: [
        "Wiślica jest dziś jednym z najmniejszych miast w Polsce, choć kiedyś była jednym z ważniejszych miejsc w kraju — do dziś stoi tu kolegiata, a pod nią romańska płyta z rytami postaci. Piszę o tym w jednym zdaniu, bo interesuje mnie co innego: to, jak w takim miejscu wygląda obsługa po zakupie.",
        "W miasteczku tej wielkości ludzie mają uzasadnioną obawę i słyszę ją regularnie. Brzmi mniej więcej tak: „kupię, a potem zostanę z tym sama”. Tu przecież nikt nie przyjeżdża z niczym — nie ma salonu za rogiem, nie ma punktu serwisowego w sąsiedniej ulicy, a kurier bywa raz dziennie i to o swojej porze.",
        "Odpowiem konkretnie, bo ogólne zapewnienia nic nie znaczą. Po zakupie zostajesz z moim numerem telefonu — nie z infolinią. To ten sam numer, pod którym umawiasz prezentację, i odbieram go osobiście. Dzwoni się do mnie, kiedy nie wychodzi ciasto, kiedy coś zgrzyta, kiedy nie wiadomo, co wybrać w menu, i kiedy trzeba zgłosić urządzenie do serwisu — zgłoszenie robimy razem, a nie odsyłam Cię do formularza.",
        "Pierwsze uruchomienie i założenie konta z przepisami robimy przy mnie, przy zakupie. Nie zostawiam pudełka i nie odjeżdżam — bo w miejscu, w którym nie ma do kogo pójść po pomoc, to byłoby po prostu nieuczciwe.",
        "I ostatnia rzecz, którą mówię wszędzie, ale tutaj mówię głośniej: prezentacja jest bezpłatna również wtedy, gdy nic nie kupujecie. Wiem, że w małej miejscowości takie spotkanie bywa krępujące, bo trudno kogoś odesłać z niczym. Nie musicie się z tym zmagać. „Nie” jest pełną odpowiedzią i przyjmuję je bez dopytywania.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wiślicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość i kilka pasujących terminów — trasę w tę stronę planuję z wyprzedzeniem, ale dojazd jest bezpłatny do każdego sołectwa.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wiślicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wiślickiej rodziny",
      paragraphs: [
        "Obiad jest tu zwykle jednym wspólnym posiłkiem dnia, gotowanym z własnych produktów i z zapasu — a robi go ta sama osoba, przez cały rok.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie kilku naczyń po jednym daniu. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, więc może dziać się bez Was.",
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
    "Wiślica",
    "Szczytniki",
    "Gorysławice",
    "Kuchary",
    "Skotniki Dolne",
    "Skotniki Górne",
    "Chotel Czerwony",
    "Jurków",
    "Łatanice",
    "Kobylniki",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Busko-Zdrój, Pińczów, Nowy Korczyn, Stopnica i Kazimierza Wielka są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Busko-Zdrój", "Pińczów", "Nowy Korczyn", "Stopnica", "Kazimierza Wielka", "Skalbmierz"],

  about: blokOMnie("do Wiślicy", "w gminie Wiślica i na Ponidziu", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy naprawdę przyjedziesz do tak małej miejscowości?",
      answer:
        "Tak, i to bez żadnej dopłaty. Proszę tylko o umówienie terminu z wyprzedzeniem, bo trasę na Ponidzie planuję osobno. Jeśli ktoś z sąsiedztwa albo z rodziny też chce zobaczyć urządzenie, powiedzcie od razu — chętnie umówię kilka spotkań tego samego dnia.",
    },
    ...faqWspolne("w Wiślicy"),
    {
      question: "Co, jeśli po zakupie coś przestanie działać?",
      answer:
        "Dzwonisz do mnie pod ten sam numer co przy umawianiu i robimy zgłoszenie serwisowe razem. Nie odsyłam do infolinii ani do formularza. To jest ten sam kontakt również pół roku i trzy lata później.",
    },
    {
      question: "Czy będzie mi głupio powiedzieć „nie” po prezentacji?",
      answer:
        "Nie powinno i naprawdę mi to nie przeszkadza. Spotkanie jest bezpłatne także wtedy, gdy kończy się odmową, i nie wracam potem z telefonami. Wolę usłyszeć uczciwe „nie” niż wymuszone „przemyślę”.",
    },
  ],

  geo: { lat: 50.3494, lng: 20.6717 },
};
