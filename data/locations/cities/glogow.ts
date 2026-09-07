import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * GŁOGÓW — miasto niemal całkowicie zniszczone w 1945 roku. Stare Miasto
 * odbudowywane jest od dziesięcioleci, kamienica po kamienicy, i wciąż
 * nie jest skończone. To odbudowa rozpisana na pokolenia, a nie na projekt.
 *
 * KĄT: nie kupujcie wszystkiego naraz. Miasto, które odbudowuje się kawałek
 * po kawałku, jest jedynym właściwym miejscem, żeby powiedzieć rzecz
 * niewygodną dla sprzedawcy: NIE POTRZEBUJECIE KOMPLETU AKCESORIÓW
 * NA START. Większość dokupuje się później albo nigdy.
 *
 * WARUNEK UCZCIWOŚCI: nie wymieniam nazw akcesoriów jako listy zakupowej
 * i nie podaję cen. Piszę o zasadzie: najpierw gotujcie kilka tygodni
 * podstawowym zestawem, potem sami zobaczycie, czego brakuje — albo nie
 * zobaczycie i to też jest odpowiedź.
 *
 * ROZGRANICZENIE. Zamość dostał kąt „szuflada pełna urządzeń", czyli
 * o sprzętach, które Thermomix zastępuje. Tutaj chodzi o coś odwrotnego:
 * o dokupywanie DO NIEGO.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Głogów został niemal całkowicie zniszczony w 1945 roku,
 * — Stare Miasto odbudowywane jest od dziesięcioleci i wciąż trwa.
 *
 * CZEGO NIE MA: opisu działań wojennych, dat, liczb o zniszczeniach.
 */
export const GLOGOW: CityContent = {
  slug: "glogow",
  h1: "Thermomix Głogów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Głogów — prezentacja i cena",
  seoDescription:
    "Thermomix w Głogowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Głogów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Głogowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Głogowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Głogów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Głogowie – jak wygląda prezentacja?",
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
      id: "nie-wszystko-naraz",
      heading: "Miasto odbudowywane kawałek po kawałku — i po co ten pośpiech",
      paragraphs: [
        "Głogów odbudowuje swoje Stare Miasto od dziesięcioleci, kamienica po kamienicy, i wciąż nie jest z tym gotowy. Nie oceniam tego ani słowem, bo to nie moja sprawa — zwracam uwagę na sam sposób: robi się jedną rzecz, potem następną, a nie wszystko naraz. I to jest dokładnie ta rada, którą powinnam Wam dać przy zakupie, choć sprzedawcy dają odwrotną.",
        "Przy takim zakupie zawsze pojawia się pokusa dobrania od razu kompletu: wszystkich dodatkowych akcesoriów, wszystkich pojemników, wszystkiego, co „na pewno się przyda”. Otóż większość z tego nie przyda się nigdy albo przyda się po roku, gdy będziecie już wiedzieć, jak naprawdę gotujecie.",
        "Moja rada jest niepopularna, ale szczera: weźcie podstawowy zestaw i gotujcie w nim przez kilka tygodni to, co jecie normalnie. Nie dania z folderu, tylko zwykłe obiady. Po tym czasie sami powiecie mi, czego Wam brakuje — i będzie to zwykle jedna rzecz, a nie osiem. Wtedy ją dokupimy i będzie to świadomy zakup, a nie pudełko przewiązane wstążką.",
        "Jest w tym też mój interes i nie będę udawać, że go nie ma. Klientka, która wydała więcej, niż zamierzała, i połowy nie używa, nie poleci mnie nikomu. Klientka, która dokupiła jedną rzecz pół roku później, bo naprawdę jej potrzebowała, wraca po następną.",
        "Ta sama zasada dotyczy zresztą samego gotowania. Nie trzeba w pierwszym tygodniu przerabiać całej książki. Wystarczą trzy dania, które wchodzą na stałe — reszta dojdzie sama.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Głogowie?",
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
    sekcjaCena("w Głogowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla głogowskiej rodziny",
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

  districtsHeading: "Do których części Głogowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Śródmieście",
    "Kopernik",
    "Hutnik",
    "Piastów Śląskich",
    "Chrobry",
    "Żarków",
    "Brzostów",
    "Krzepów",
    "Nosocice",
  ],

  nearbyHeading: "Poza Głogów też przyjadę",
  nearbyParagraphs: [
    "Polkowice, Lubin, Góra i Ścinawa są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Polkowice", "Lubin", "Góra", "Ścinawa", "Chocianów"],

  about: blokOMnie("do Głogowa", "w Głogowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Głogowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Głogowie"),
    {
      question: "Czy muszę od razu dokupić akcesoria?",
      answer:
        "Nie i odradzam. Weźcie podstawowy zestaw, gotujcie w nim kilka tygodni to, co jecie normalnie, a potem powiedzcie mi, czego brakuje — zwykle jest to jedna rzecz, a nie osiem. Dokupienie czegoś po pół roku jest świadomym zakupem, a komplet na start najczęściej leży.",
    },
    {
      question: "Ile dań trzeba opanować na początku?",
      answer:
        "Trzy, które wejdą na stałe. Nie trzeba w pierwszym tygodniu przerabiać całej książki — reszta dochodzi sama, kiedy urządzenie stoi na blacie i jest pod ręką.",
    },
  ],

  geo: { lat: 51.6636, lng: 16.0847 },
};
