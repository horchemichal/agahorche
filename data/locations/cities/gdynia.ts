import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * GDYNIA — miasto zbudowane od zera w dwudziestoleciu międzywojennym,
 * zaprojektowane modernistycznie, z mieszkaniami liczonymi co do metra.
 *
 * KĄT: ile rzeczy przychodzi razem z tym urządzeniem i gdzie to trzymać.
 * Nikt o tym nie myśli przed zakupem, a każdy się z tym mierzy w tygodniu
 * po dostawie.
 *
 * SEDNO, KTÓRE MA PAŚĆ WPROST: największym problemem nie jest samo
 * urządzenie, tylko ZESTAW DO GOTOWANIA NA PARZE. Jest duży, nie chowa
 * się byle gdzie i zaskakuje ludzi bardziej niż maszyna.
 *
 * DRUGIE SEDNO: samo urządzenie ma stać NA BLACIE. Schowane do szafki
 * przestaje być używane — to jest najczęstszy sposób, w jaki dobry sprzęt
 * umiera.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH WYMIARÓW W CENTYMETRACH ani litrach poza tym, co pada gdzie
 *   indziej w serwisie. Nie podaję liczb, których nie jestem pewna.
 * — TO NIE JEST LISTA ZAKUPOWA AKCESORIÓW. Głogów mówi wprost, żeby NIE
 *   dokupywać kompletu — ta strona tego nie podważa i nie wymienia rzeczy
 *   do dokupienia. Mowa wyłącznie o tym, co przychodzi w zestawie.
 *
 * ROZGRANICZENIE. Będzin — mała kuchnia i pytanie, gdzie postawić samo
 * urządzenie. Tarnowskie Góry — nowa kuchnia i co w niej postawić.
 * Głogów — nie kupujcie kompletu akcesoriów. Tutaj: co już macie
 * w pudełku i gdzie to wszystko wsadzić.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Gdynia powstała jako miasto zaprojektowane, zbudowane w dwudziestoleciu
 *   międzywojennym, znane z architektury modernistycznej.
 */
export const GDYNIA: CityContent = {
  slug: "gdynia",
  h1: "Thermomix Gdynia – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gdynia — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Gdyni: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gdynia — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gdyni. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gdyni z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic i do miejscowości wokół miasta.",

  highlights: highlightyStandardowe("Gdynia i okolica"),

  heroPhoto: {
    src: "/zdjecia/thermomix-tm7-varoma.webp",
    alt: "Thermomix TM7 z nałożonym zestawem Varoma do gotowania na parze",
    caption: "Zestaw do gotowania na parze to ta część, która zajmuje najwięcej miejsca w szafce.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gdyni – jak wygląda prezentacja?",
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
      id: "gdzie-to-wszystko",
      heading: "Miasto liczone co do metra — i pytanie, gdzie to wszystko schować",
      paragraphs: [
        "Gdynię zaprojektowano i zbudowano od zera, z mieszkaniami liczonymi co do metra — i ten sposób myślenia przydaje się przy zakupie, o którym mowa. Bo to nie jest jedno urządzenie. To jest urządzenie plus zestaw rzeczy, które przyjeżdżają razem z nim, i o tych rzeczach nikt nie myśli przed zakupem, a każdy myśli w tygodniu po dostawie.",
        "Powiem od razu, co zaskakuje ludzi najbardziej, bo to nie jest maszyna. Jest nim zestaw do gotowania na parze. Jest duży, ma kilka części i nie chowa się byle gdzie — to on, a nie samo urządzenie, jest prawdziwym problemem szafkowym. Dobra wiadomość jest taka, że jego części wkładają się jedna w drugą i wtedy zajmuje wyraźnie mniej. Zła jest taka, że i tak potrzebuje własnego miejsca.",
        "Do tego dochodzi naczynie, koszyczek, łopatka i pokrywa. Każda z tych rzeczy z osobna jest drobiazgiem, ale razem tworzą komplet, który rozrzucony po trzech szafkach doprowadza do szału — i, co gorsza, sprawia, że przestaje się z tego korzystać, bo za każdym razem trzeba czegoś szukać. Rada jest banalna i naprawdę działa: jedno miejsce na wszystko, najlepiej blisko blatu, na którym stoi urządzenie.",
        "Rzecz osobna i najważniejsza: samo urządzenie ma stać na blacie. Nie w szafce. Sprzęt schowany „bo na razie nie ma miejsca” bardzo szybko przestaje być używany — nie dlatego, że jest zły, tylko dlatego, że wyjęcie go z dolnej szafki jest o jedną czynność za dużo w środę wieczorem.",
        "I wniosek, który dla części osób będzie niewygodny, a dla mnie jest po prostu uczciwy: jeśli w Waszej kuchni nie ma wolnego kawałka blatu i wolnej półki, ten zakup będzie Was irytował. Nie jest to powód, żeby nie kupować — jest to powód, żeby zrobić miejsce przed dostawą, a nie po niej. Na spotkaniu mogę to z Wami po prostu obejrzeć.",
      ],
      links: [{ href: "/akcesoria", label: "Co jest w zestawie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gdyni?",
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
    sekcjaCena("w Gdyni"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gdyńskiej rodziny",
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

  districtsHeading: "Do których dzielnic Gdyni dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Orłowo",
    "Redłowo",
    "Witomino",
    "Chylonia",
    "Cisowa",
    "Obłuże",
    "Oksywie",
    "Karwiny",
    "Dąbrowa",
    "Wielki Kack",
    "Grabówek",
  ],

  nearbyHeading: "Poza Gdynię też przyjadę",
  nearbyParagraphs: [
    "Sopot, Rumia, Reda i Puck są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sopot", "Gdańsk", "Rumia", "Reda", "Wejherowo", "Puck"],

  about: blokOMnie("do Gdyni", "w Gdyni i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gdyni bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Gdyni"),
    {
      question: "Ile miejsca to wszystko zajmuje?",
      answer:
        "Najwięcej miejsca zajmuje nie samo urządzenie, tylko zestaw do gotowania na parze — i to on zaskakuje ludzi najbardziej. Jego części wkładają się jedna w drugą, więc schowany zajmuje wyraźnie mniej, ale i tak potrzebuje własnej półki. Do tego naczynie, koszyczek, łopatka i pokrywa — warto trzymać je w jednym miejscu, blisko blatu.",
    },
    {
      question: "Czy urządzenie można trzymać w szafce?",
      answer:
        "Można, ale odradzam. Sprzęt schowany bardzo szybko przestaje być używany — wyjmowanie go z dolnej szafki to jedna czynność za dużo w środę wieczorem. Jeśli nie ma wolnego kawałka blatu, warto zrobić miejsce przed dostawą, a nie po niej.",
    },
  ],

  geo: { lat: 54.5189, lng: 18.5305 },
};
