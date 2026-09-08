import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * OPOLE — najmniejsza stolica województwa w Polsce, nad Odrą. Amfiteatr
 * na wzgórzu i Krajowy Festiwal Polskiej Piosenki, przez który miasto zna
 * cały kraj; zachowany rynek z ratuszem wzorowanym na florenckim.
 *
 * KĄT: małe zakupy, częściej. Opole jest na tyle małe, że centrum obchodzi
 * się pieszo, a sklep, praca i szkoła bywają w promieniu kilkunastu minut.
 * To daje odwrotność tego, co opisałam w Czeladzi („całe zakupy w jedną
 * sobotę"): TU KUPUJE SIĘ MAŁO I CZĘSTO, po drodze. I to jest bardzo
 * konkretna wskazówka handlowa, o której nikt nie myśli — bo osobie, która
 * kupuje codziennie na wieczór, funkcje do planowania tygodnia są prawie
 * niepotrzebne, a liczy się co innego: ugotować z tego, co się właśnie
 * przyniosło, w dwadzieścia minut.
 *
 * ŚWIADOMA PARA Z CZELADZIĄ. Tamta strona mówi „jedna sobota, pełen
 * bagażnik", ta mówi „codziennie po kawałku". Obie są prawdziwe w swoich
 * miastach i właśnie dlatego muszą prowadzić do innych argumentów.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Opole jest JEDNYM z najmniejszych miast wojewódzkich (ok. 125 tys.);
 *   najmniejszy jest Gorzów Wielkopolski (ok. 115 tys.). Leży nad Odrą,
 * — odbywa się tu Krajowy Festiwal Polskiej Piosenki, a amfiteatr stoi
 *   przy wzgórzu w centrum,
 * — ratusz na rynku wzorowano na florenckim Palazzo Vecchio,
 * — dzielnice: Śródmieście, Zaodrze, Nowa Wieś Królewska, Szczepanowice,
 *   Gosławice, Kolonia Gosławicka, Groszowice, Grudzice, Malina, Zakrzów,
 *   Półwieś, Wróblin, Bierkowice, Chmielowice, Winów, Sławice, Wrzoski,
 *   Czarnowąsy, Brzezie.
 *
 * CZEGO NIE MA: dat festiwalu, liczby mieszkańców jako argumentu, czasów
 * przejazdu, twierdzeń o tym, gdzie opolanie robią zakupy.
 */
export const OPOLE: CityContent = {
  slug: "opole",
  h1: "Thermomix Opole – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Opole — prezentacja i cena",
  seoDescription:
    "Thermomix w Opolu: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%, terminy pod Wasz grafik. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Opole — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Opolu. Prezentacja i dojazd bezpłatne, we wszystkich dzielnicach.",

  lead:
    "Przyjeżdżam do Opola z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic, od Śródmieścia po Zaodrze, Gosławice i Czarnowąsy.",

  highlights: highlightyStandardowe("Opole i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Opolu – jak wygląda prezentacja?",
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
      id: "male-zakupy-czesciej",
      heading: "Najmniejsza stolica województwa — i kuchnia kupowana po kawałku",
      paragraphs: [
        "Opole jest jednym z najmniejszych miast wojewódzkich w Polsce — mieszka tu około stu dwudziestu pięciu tysięcy osób — i to nie jest wada, tylko konkretna właściwość codzienności. Centrum obchodzi się pieszo. Praca, szkoła i sklep bywają w promieniu kilkunastu minut. Nie trzeba planować wyprawy, żeby cokolwiek załatwić.",
        "Dla kuchni wynika z tego rzecz, o której nikt nie pisze, bo wygląda na zbyt oczywistą: tutaj kupuje się mało i często. Nie ma jednej wielkiej soboty z pełnym bagażnikiem, po której lodówka jest zapchana na tydzień. Jest wpadnięcie po drodze po to, co się dziś zje.",
        "Piszę o tym, bo to zmienia, co w urządzeniu jest dla Was warte pieniędzy, a co nie. Cała ta część, którą sprzedawcy lubią najbardziej — plan tygodnia, lista zakupów, gotowanie na zapas w niedzielę — u kogoś, kto kupuje codziennie na wieczór, po prostu leży odłogiem. I nie zamierzam Wam jej sprzedawać jako głównej zalety.",
        "Zostaje natomiast to, co przy takim trybie liczy się naprawdę: żeby z tego, co właśnie przyniesiono, dało się zrobić obiad w dwadzieścia minut i bez stania nad garnkiem. Zupa krem z jednego warzywa i śmietanki. Sos do makaronu, który gotuje się sam, gdy woda dochodzi. Danie jednogarnkowe z tego, co zostało w lodówce z wczoraj.",
        "Jeśli więc na prezentacji zapytacie, po co Wam planowanie tygodnia, odpowiem szczerze: prawdopodobnie po nic. Pokażę Wam za to tę drugą część i to ona zdecyduje, czy zakup ma sens.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz w lodówce" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Opolu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia — oddzwaniam także wieczorem.",
        "Podaj dzielnicę i kilka terminów. Opolskie jest małe, więc do Opola i okolicy dojeżdżam często i terminy bywają bliskie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Opolu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla opolskiej rodziny",
      paragraphs: [
        "Wąskie gardło jest tu takie jak w każdym mieście: obiad musi powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których dzielnic Opola dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — łącznie z Czarnowąsami, Sławicami i Wrzoskami.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Zaodrze",
    "Nowa Wieś Królewska",
    "Szczepanowice",
    "Gosławice",
    "Kolonia Gosławicka",
    "Groszowice",
    "Grudzice",
    "Malina",
    "Zakrzów",
    "Półwieś",
    "Wróblin",
    "Bierkowice",
    "Chmielowice",
    "Winów",
    "Sławice",
    "Wrzoski",
    "Czarnowąsy",
    "Brzezie",
  ],

  nearbyHeading: "Poza Opole też przyjadę",
  nearbyParagraphs: [
    "Prószków, Ozimek, Niemodlin, Krapkowice, Gogolin i Brzeg są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Prószków", "Ozimek", "Niemodlin", "Krapkowice", "Gogolin", "Brzeg", "Strzelce Opolskie"],

  about: blokOMnie("do Opola", "w Opolu i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich dzielnic Opola bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich — od Śródmieścia po Czarnowąsy, Sławice i Wrzoski. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Opolu"),
    {
      question: "Kupuję codziennie na bieżąco, nie planuję tygodnia. Czy to urządzenie ma wtedy sens?",
      answer:
        "Ma, tylko z zupełnie innego powodu, niż zwykle się mówi. Planowanie tygodnia będzie Ci wtedy niepotrzebne i nie będę Cię do niego namawiać. Liczy się druga część: żeby z tego, co właśnie przyniosłaś, powstał obiad w dwadzieścia minut i bez stania przy garnku.",
    },
    {
      question: "Mieszkam w bloku i mam małą kuchnię — czy to się zmieści?",
      answer:
        "Urządzenie zajmuje mniej blatu, niż większość osób zakłada, ale potrzebuje swojego miejsca i własnego gniazdka. Na prezentacji ustawimy je u Ciebie i po prostu zobaczysz, gdzie realnie stanie — a jeśli okaże się, że nie ma miejsca, powiem to wprost.",
    },
  ],

  geo: { lat: 50.6751, lng: 17.9213 },
};
