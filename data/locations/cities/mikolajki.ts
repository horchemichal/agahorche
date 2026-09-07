import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * MIKOŁAJKI — jedno z najbardziej znanych miasteczek mazurskich, między
 * jeziorami, z portem żeglarskim; w okolicy bardzo dużo domów letniskowych
 * i działek, na których mieszka się tylko część roku.
 *
 * KĄT: drugi dom. To jest jedyne miejsce w serwisie na sytuację, o której
 * nie pomyślał żaden folder: RODZINA, KTÓRA MA DWIE KUCHNIE — jedną
 * w mieście i drugą w domku, używaną kilka miesięcy w roku.
 *
 * SEKCJA MA ROZSTRZYGNĄĆ TRZY PYTANIA, KTÓRE STĄD PADAJĄ:
 * — czy wozić sprzęt tam i z powrotem (odpowiedź: da się, ale to jest
 *   dwadzieścia kilogramów i szkło; kto raz zapomni, ten gotuje bez),
 * — czy kupować drugi (uczciwie: dla większości osób to jest wydatek
 *   bez pokrycia i mówię to wprost, choć zarobiłabym na drugim),
 * — co zrobić ze sprzętem, który stoi zimą w nieogrzewanym domu
 *   (rzecz techniczna: wilgoć i mróz to nie jest dobre miejsce
 *   dla elektroniki, więc na zimę zabiera się go do domu).
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Mikołajki leżą między jeziorami mazurskimi, mają port żeglarski,
 *   a w okolicy jest dużo domów letniskowych.
 */
export const MIKOLAJKI: CityContent = {
  slug: "mikolajki",
  h1: "Thermomix Mikołajki – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Mikołajki — prezentacja i cena",
  seoDescription:
    "Thermomix w Mikołajkach: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mikołajki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mikołajkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mikołajek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Mikołajki i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mikołajkach – jak wygląda prezentacja?",
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
      id: "drugi-dom",
      heading: "Dwie kuchnie: jedna w mieście, druga nad jeziorem",
      paragraphs: [
        "W okolicy Mikołajek bardzo dużo domów jest używanych tylko część roku — od maja do września, w weekendy, na wakacje. To jest sytuacja, o której żaden folder nie pomyślał, a rodzi trzy konkretne pytania. Wszystkie trzy tu dostaję i na wszystkie odpowiem po kolei.",
        "Pytanie pierwsze: czy wozić sprzęt tam i z powrotem. Da się i sporo osób tak robi, ale warto wiedzieć, co się wozi. To jest urządzenie ważące około dwudziestu kilogramów w komplecie, ze szklanymi i delikatnymi elementami w środku, więc jedzie w bagażniku zapakowane, a nie luzem między torbami. W praktyce sprawdza się to u ludzi, którzy jeżdżą na dłużej — na dwa tygodnie tak, na weekend już mało kto się z tym targa. I jest tu jedna rzecz, o której warto pomyśleć z góry: kto raz zapomni zabrać, ten cały pobyt gotuje bez.",
        "Pytanie drugie: czy kupić drugi sprzęt na stałe do domku. Powiem to wprost, choć zarobiłabym na drugim: dla większości osób to jest wydatek bez pokrycia. Jeśli w domku spędzacie sześć tygodni w roku, to jest sprzęt pracujący sześć tygodni — a przez resztę czasu stojący i tracący na wartości. Sens robi się dopiero wtedy, gdy dom letniskowy jest w praktyce drugim domem, mieszka się w nim miesiącami i przyjmuje w nim gości.",
        "Pytanie trzecie jest techniczne i najczęściej lekceważone: co ze sprzętem, który zostaje na zimę w nieogrzewanym domu. Otóż nieogrzewany dom nad jeziorem to wilgoć, a wilgoć i mróz nie są dobrym miejscem dla elektroniki. Jeśli urządzenie ma zostać na miejscu, powinno stać w suchym pomieszczeniu, a nie w zamkniętej na klucz, zawilgoconej kuchni. Prościej i bezpieczniej jest zabrać je na zimę do domu — i tak zwykle radzę.",
        "Praktyczny wniosek z tych trzech odpowiedzi jest jeden: w domu letniskowym najlepiej sprawdza się urządzenie wożone, a nie drugie kupione. A ponieważ i tak najczęściej wozi się je na dłuższe pobyty, warto to przećwiczyć raz i zobaczyć, czy Wam się chce — bo jeśli nie, to nie ma sensu udawać, że będzie inaczej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mikołajkach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz, czy chodzi o dom całoroczny, czy o letniskowy — to zmienia całą rozmowę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mikołajkach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mikołajskiej rodziny",
      paragraphs: [
        "W sezonie dom bywa pełen ludzi, a poza sezonem gotuje się dla dwóch osób — i robi to zwykle jedna z nich.",
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
    "Mikołajki",
    "Woźnice",
    "Baranowo",
    "Prawdowo",
    "Stare Sady",
    "Tałty",
    "Inulec",
    "Lubiewo",
    "Zełwągi",
    "Grabówka",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Mrągowo, Ryn, Giżycko i Ruciane-Nida są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mrągowo", "Ryn", "Giżycko", "Ruciane-Nida", "Pisz"],

  about: blokOMnie("do Mikołajek", "w gminie Mikołajki i na Mazurach", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Mikołajek bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Mikołajkach"),
    {
      question: "Mamy dom letniskowy. Kupić drugie urządzenie na miejsce?",
      answer:
        "Dla większości osób to wydatek bez pokrycia i mówię to wprost, choć zarobiłabym na drugim. Sześć tygodni w roku to sprzęt pracujący sześć tygodni. Sens pojawia się dopiero wtedy, gdy dom letniskowy jest w praktyce drugim domem — mieszka się w nim miesiącami i przyjmuje gości.",
    },
    {
      question: "Czy można je zostawić na zimę w nieogrzewanym domu?",
      answer:
        "Odradzam. Nieogrzewany dom nad jeziorem to wilgoć, a wilgoć i mróz nie są dobrym miejscem dla elektroniki. Jeśli sprzęt ma zostać, niech stoi w suchym pomieszczeniu — ale prościej i bezpieczniej zabrać go na zimę do domu.",
    },
  ],

  geo: { lat: 53.8022, lng: 21.5722 },
};
