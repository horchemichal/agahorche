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
 * WRZEŚNIA — miasto znane z historii strajku dzieci wrzesińskich z początku
 * dwudziestego wieku: uczniowie odmówili odpowiadania w narzuconym języku
 * i postawili na swoim.
 *
 * KĄT: dziecko, które nie chce jeść. Miasto, którego najbardziej znana
 * historia dotyczy dzieci mających własne zdanie, jest jedynym właściwym
 * miejscem na temat, który wraca w co drugiej kuchni, a nie ma go w żadnym
 * folderze: WYBREDNE DZIECKO.
 *
 * ŻELAZNE GRANICE TEJ SEKCJI:
 * — ani słowa porady zdrowotnej, dietetycznej czy wychowawczej; nie jestem
 *   ani dietetykiem, ani psychologiem i mam to napisać wprost,
 * — nie sugerujemy ukrywania warzyw jako metody wychowawczej — wolno
 *   powiedzieć, że gładka konsystencja bywa łatwiej przyjmowana, i tyle,
 * — nie obiecujemy, że urządzenie rozwiąże problem; ma paść zdanie,
 *   że NIE ROZWIĄŻE.
 * Historię strajku traktujemy z szacunkiem: jedno rzeczowe zdanie,
 * bez robienia z niej metafory kaprysów przy stole.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — we Wrześni na początku dwudziestego wieku doszło do strajku szkolnego
 *   dzieci, które odmówiły nauki religii w języku niemieckim.
 */
export const WRZESNIA: CityContent = {
  slug: "wrzesnia",
  h1: "Thermomix Września – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Września — prezentacja i cena",
  seoDescription:
    "Thermomix we Wrześni: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Września — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Wrześni. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wrześni z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Września i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/thermomix-tm7-varoma.webp",
    alt: "Thermomix TM7 z nasadką Varoma — gotowanie na parze",
    caption: "Varoma pozwala ugotować osobną porcję równolegle z resztą obiadu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Wrześni – jak wygląda prezentacja?",
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
      id: "dziecko-ktore-nie-chce-jesc",
      heading: "Miasto, w którym dzieci postawiły na swoim",
      paragraphs: [
        "Najbardziej znana wrzesińska historia dotyczy dzieci, które na początku dwudziestego wieku odmówiły odpowiadania w narzuconym języku. Piszę o tym z szacunkiem i jednym zdaniem — nie zamierzam robić z tej sprawy metafory kaprysów przy stole, bo chodziło tam o coś zupełnie innego i poważniejszego. Zatrzymuję z niej tylko jedno: że dziecko ma własne zdanie i potrafi się przy nim upierać dłużej niż dorosły.",
        "Każdy, kto karmi dziecko, wie o tym lepiej ode mnie. Miesiącami je się to samo. Warzywo znika z talerza, jeśli tylko widać, że jest warzywem. Zupa ma być bez „kawałków”. A obiad, nad którym stało się czterdzieści minut, ląduje nietknięty.",
        "Powiem od razu rzecz najważniejszą: żadne urządzenie tego nie rozwiąże. To nie jest problem kuchenny i nie jestem osobą, która ma tu czegokolwiek doradzać — nie jestem ani dietetykiem, ani psychologiem, a od takich spraw są oni.",
        "Mogę powiedzieć tylko to, co widzę u klientek, i to trzy rzeczy praktyczne.",
        "Pierwsza: gładka konsystencja bywa przyjmowana łatwiej niż kawałki, a w tym urządzeniu zupa robi się gładka bez przekładania do blendera i bez przecierania przez sitko. To nie jest metoda wychowawcza, tylko mniej roboty przy tym samym obiedzie.",
        "Druga: Varoma pozwala ugotować dziecku osobną porcję równolegle z obiadem dorosłych — w tym samym urządzeniu, bez drugiego garnka i drugiej tury zmywania. W domu, w którym od dwóch lat gotuje się dwa obiady dziennie, to jest realna różnica.",
        "Trzecia jest najbardziej niedoceniana: dziecko, które samo wciska przyciski i patrzy, jak coś się kręci, chętniej próbuje tego, co powstało. Nie zawsze i nie u każdego — ale wystarczająco często, żeby o tym wspomnieć. Mój syn kilka rzeczy zjadł wyłącznie dlatego, że sam je „ugotował”.",
        "I na tym poprzestanę, bo dalej zaczyna się dziedzina, w której nie mam kompetencji.",
      ],
      links: [{ href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Wrześni?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz, ile dziecko ma lat i czego nie je. Dobiorę dania tak, żeby spotkanie miało sens także dla niego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Wrześni"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wrzesińskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często dwa razy, bo dziecko je co innego.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że obie porcje mogą powstać naraz. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla całego domu.",
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
    "Września",
    "Psary Polskie",
    "Kaczanowo",
    "Gutowo Małe",
    "Chwalibogowo",
    "Nowy Folwark",
    "Bierzglinek",
    "Marzenin",
    "Sokołowo",
    "Otoczna",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Gniezno, Miłosław, Nekla i Środa Wielkopolska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gniezno", "Miłosław", "Nekla", "Środa Wielkopolska", "Słupca", "Czerniejewo"],

  about: blokOMnie("do Wrześni", "w gminie Września i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wrześni bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("we Wrześni"),
    {
      question: "Moje dziecko jest bardzo wybredne. Czy to urządzenie pomoże?",
      answer:
        "Problemu nie rozwiąże i nie będę tego obiecywać — to nie jest sprawa kuchenna, a ja nie jestem dietetykiem ani psychologiem. Realnie ułatwia trzy rzeczy: zupa wychodzi gładka bez przekładania do blendera, osobna porcja dla dziecka powstaje równolegle w Varomie, a dziecko, które samo wciska przyciski, częściej próbuje tego, co powstało.",
    },
    {
      question: "Gotuję dwa obiady dziennie. Czy da się to skrócić?",
      answer:
        "Tak, i to jest tu najbardziej praktyczna rzecz. Nad gotującą się zawartością naczynia stawia się Varomę i gotuje na parze osobną porcję — bez drugiego garnka i bez drugiej tury zmywania.",
    },
  ],

  geo: { lat: 52.3256, lng: 17.5656 },
};
