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
 * NOWA SŁUPIA — miasteczko u stóp Łysej Góry, przy wejściu do Świętokrzyskiego
 * Parku Narodowego i przy drodze prowadzącej na Święty Krzyż. W starożytności
 * działało tu jedno z największych w tej części Europy centrów wytopu żelaza
 * w dymarkach; jest muzeum starożytnego hutnictwa i coroczne Dymarki.
 *
 * KĄT: czego nowe narzędzie NIE zastępuje. Dymarka odeszła, ale kowalstwo
 * zostało; nowe narzędzia nie unieważniają starych, tylko biorą na siebie
 * część roboty. W miejscu, które ma muzeum najstarszej znanej tu technologii,
 * mogę więc napisać sekcję, jakiej nie ma nigdzie indziej w serwisie:
 * UCZCIWĄ LISTĘ TEGO, CZEGO THERMOMIX NIE ROBI. Patelni, piekarnika, grilla
 * i rąk nie zastąpi — i klientka, która usłyszy to przed zakupem, nie będzie
 * rozczarowana po.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w okolicy Nowej Słupi w starożytności wytapiano żelazo w dymarkach,
 *   na dużą skalę, a dziś działa tu muzeum starożytnego hutnictwa
 *   i odbywają się Dymarki Świętokrzyskie,
 * — miejscowość leży u stóp Łysej Góry, przy drodze na Święty Krzyż
 *   i przy granicy Świętokrzyskiego Parku Narodowego,
 * — do gminy należą m.in. Stara Słupia, Rudki, Jeziorko, Baszowice, Dębno.
 *
 * CZEGO NIE MA: datowania stanowisk, liczby pieców, opisu technologii
 * wytopu — od tego jest muzeum, nie strona o Thermomixie.
 */
export const NOWA_SLUPIA: CityContent = {
  slug: "nowa-slupia",
  h1: "Thermomix Nowa Słupia – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Nowa Słupia — prezentacja i cena",
  seoDescription:
    "Thermomix w Nowej Słupi: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Cena, raty 0%, uczciwa rozmowa. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowa Słupia — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowej Słupi. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowej Słupi z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Starej Słupi, Rudek, Jeziorka i pozostałych sołectw.",

  highlights: highlightyStandardowe("Nowa Słupia i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowej Słupi – jak wygląda prezentacja?",
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
      id: "czego-nie-zastapi",
      heading: "Czego to urządzenie NIE zastąpi — lista uczciwa",
      paragraphs: [
        "Pod Łysą Górą wytapiano żelazo dwa tysiące lat temu, na skalę, która do dziś robi wrażenie. Dymarki odeszły dawno, ale rzemiosło nie zniknęło — po prostu przeszło do innych narzędzi. Nowe nie unieważnia starego. Bierze na siebie kawałek roboty i tyle.",
        "Piszę to, bo w tym miejscu wypada powiedzieć na głos rzecz, którą sprzedawcy zwykle omijają. Thermomix nie zastępuje kuchni. Zastępuje kilka czynności — i lepiej, żebyście wiedzieli które, ZANIM go kupicie, a nie po.",
        "Czego nie zrobi. Nie usmaży kotleta na złoto — do tego jest patelnia i tak zostanie. Nie upiecze ciasta ani chleba: wyrobi ciasto, ale piec musi piekarnik. Nie zrumieni mięsa w piekarniku, nie zrobi karkówki z grilla i nie ugotuje dużego rosołu na chrzciny, bo jego naczynie ma swoją pojemność. Nie obierze ziemniaków, nie wydrąży pestek i nie posprząta kuchni.",
        "Co robi. Gotuje, dusi i gotuje na parze bez pilnowania, z ustawioną temperaturą i mieszaniem. Miksuje, sieka, miele i wyrabia ciasto w tym samym naczyniu, w którym potem gotuje. Waży w trakcie. I trzyma wszystko w jednym garnku, przez co zmywania jest realnie mniej.",
        "Jeśli te dwie listy zestawić uczciwie, wychodzi wniosek, który mówię każdej osobie: to jest sprzęt dla kogoś, kto gotuje dużo i codziennie, a nie dla kogoś, kto szuka jednego urządzenia zamiast całej kuchni. Takie nie istnieje i nie mam go w bagażniku.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowej Słupi?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość — do gminy należy kilkanaście wsi rozłożonych wokół góry i planuję trasę z góry. Dojazd jest wszędzie bezpłatny, odległość zmienia tylko porę spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowej Słupi"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Nowa Słupia",
      paragraphs: [
        "Obiad jest tu zwykle jednym wspólnym posiłkiem, gotowanym z tego, co w domu — a przygotowuje go ta sama osoba, przez cały rok i niezależnie od pogody.",
        "Thermomix zdejmuje z tego stanie przy garnku i część zmywania. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
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
    "Nowa Słupia",
    "Stara Słupia",
    "Rudki",
    "Jeziorko",
    "Baszowice",
    "Dębno",
    "Paprocice",
    "Serwis",
    "Trzcianka",
    "Cząstków",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Bodzentyn, Łagów, Opatów, Daleszyce i Ostrowiec Świętokrzyski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bodzentyn", "Łagów", "Opatów", "Daleszyce", "Ostrowiec Świętokrzyski", "Kielce"],

  about: blokOMnie("do Nowej Słupi", "w gminie i pod Świętym Krzyżem", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowej Słupi bez dodatkowej opłaty?",
      answer:
        "Tak, do miasteczka i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja — proszę tylko o umówienie terminu z wyprzedzeniem, bo trasę w tę stronę planuję osobno.",
    },
    ...faqWspolne("w Nowej Słupi"),
    {
      question: "Czy Thermomix zastąpi mi piekarnik i patelnię?",
      answer:
        "Nie i nikt nie powinien Ci mówić inaczej. Wyrobi ciasto, ale upiecze je piekarnik. Ugotuje i uduszy, ale kotleta usmażysz na patelni. Zastępuje kilka czynności, a nie całą kuchnię — i właśnie dlatego warto zobaczyć go na żywo, zanim podejmiesz decyzję.",
    },
    {
      question: "Gotuję dla dwóch osób. Czy to nie za duże urządzenie?",
      answer:
        "Może być, i powiem to szczerze zamiast przekonywać. Przy małych porcjach część przepisów trzeba przeliczyć, żeby noże miały co mieszać. Na spotkaniu ugotujemy w Waszej wielkości porcji i sami zobaczycie, czy to ma sens.",
    },
  ],

  geo: { lat: 50.8617, lng: 21.09 },
};
