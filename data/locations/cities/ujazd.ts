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
 * UJAZD — miasto w powiecie strzeleckim, 1 829 mieszkańców
 * (31.12.2024, GUS); cała gmina 6 359. PRAWA MIEJSKIE
 * 25 MAJA 1223 r. od biskupa wrocławskiego WAWRZYŃCA — jedne
 * z najstarszych na Śląsku; pierwsza wzmianka 23 kwietnia 1155 r.
 * w bulli papieża Hadriana IV. Gmina jest DWUJĘZYCZNA: urzędowa
 * nazwa niemiecka UJEST wpisana 19 listopada 2008 r., język
 * pomocniczy od 2006 r. W Zimnej Wódce, przy autostradzie A4,
 * działa duży zakład motoryzacyjny produkujący wały napędowe
 * do samochodów premium. GMINA UJAZD JAKO JEDYNA W TEJ FALI
 * NIE STRACIŁA LUDNOŚCI w latach 2002–2024.
 *
 * UWAGA — HOMONIMY, wyjątkowo groźne: istnieją UJAZD W ŁÓDZKIM
 * (który prawa miejskie odzyskał 1 stycznia 2023 r.) oraz UJAZD
 * W ŚWIĘTOKRZYSKIM — i to tam, a NIE TUTAJ, stoi zamek
 * KRZYŻTOPÓR. Zamek w Ujeździe opolskim to zupełnie inny obiekt:
 * dawna rezydencja biskupów wrocławskich, dziś ruina.
 *
 * KĄT: wesele i przyjęcie w domu — co realnie da się zrobić
 * samemu, a czego nie. Jedyna gmina w tej fali, która się nie
 * wyludnia, jest właściwym miejscem na stronę o rodzinnych
 * uroczystościach.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy przyjęciu na kilkadziesiąt osób urządzenie nie jest
 *   rozwiązaniem i mówię to jako sprzedawczyni,
 * — że jego miejsce jest w PRZYGOTOWANIACH DZIEŃ WCZEŚNIEJ
 *   i przy dwudziestu osobach, nie przy stu,
 * — co konkretnie robi: pasty, sosy, farsze, kremy, sałatki,
 *   masy do ciast,
 * — że pojemność naczynia jest twardą granicą i trzeba gotować
 *   w turach,
 * — i że przy dużym weselu należy wynająć kogoś, a nie kupować
 *   sprzęt.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU JEDZENIA NA PRZYJĘCIU
 *   ani o tym, jak długo może stać na stole. Bezpieczeństwo
 *   żywności przy dużej liczbie gości jest poważne — odmowa
 *   stoi w tekście.
 * — ŻADNEJ POJEMNOŚCI W LITRACH z pamięci.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Skala i pojemność" (inne
 * miasto) to strona TECHNICZNA o wielkości porcji. „Jedzenie
 * zbiorowe" dotyczy stołówek i gotowania zawodowego. „Tort
 * na okazję" (Byczyna) dotyczy jednego wypieku. „Niedzielne
 * popołudnie" (Leśnica) dotyczy podwieczorku dla kilku osób.
 * Tutaj chodzi o CAŁE PRZYJĘCIE jako przedsięwzięcie i o uczciwą
 * odpowiedź, kiedy nie robić go samemu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ NAZWY ZAKŁADU ani liczby zatrudnionych. Zakład
 *   jest ustalony, a w kwietniu 2026 r. jego niemiecka grupa
 *   właścicielska została przejęta przez amerykański koncern —
 *   ale nazw firm nie reklamuję i nie znam stanu zatrudnienia
 *   po fuzji.
 * — NIE PISZĘ, że zakład stoi w Olszowej. Stoi w ZIMNEJ WÓDCE;
 *   Olszowa to węzeł autostrady i potoczna nazwa strefy.
 * — NIE PISZĘ, że zamek jest udostępniony do zwiedzania.
 *   Ruiny zabezpieczono i dobudowano taras widokowy w 2015 r.,
 *   ale stanu na 2026 r. nie potwierdzono.
 * — NIE PISZĘ, że mniejszość niemiecka przekracza tu 20%.
 *   W spisie 2021 r. było to 14,97%; tablice zostają jako prawo
 *   nabyte.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — districts: miasto Ujazd stanowi JEDNĄ jednostkę pomocniczą
 *   i nie dzieli się na osiedla; Stary Ujazd to odrębne sołectwo,
 *   nie dzielnica. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka 23 kwietnia 1155 r. w bulli Hadriana IV;
 *   prawa miejskie 25 maja 1223 r. od biskupa wrocławskiego
 *   Wawrzyńca,
 * — zamek biskupów wrocławskich: początki ok. 1155 r., do 1443 r.
 *   w rękach biskupich, przebudowany w latach 1837–1838 przez
 *   Hohenlohe; spłonął 23 stycznia 1945 r. i pozostał ruiną,
 * — gmina dwujęzyczna, nazwa Ujest od 19 listopada 2008 r.,
 *   język pomocniczy od 2006 r., 10 miejscowości z tablicami;
 *   w 1937 r. naziści przemianowali Ujest na Bischofstal,
 * — w Zimnej Wódce, w strefie ekonomicznej przy A4, działa
 *   od 2017 r. zakład produkujący wały napędowe do samochodów
 *   klasy premium,
 * — 45% pracujących w gminie to przemysł i budownictwo,
 *   a przeciętne wynagrodzenie jest tu najwyższe w okolicy,
 * — gmina jako jedyna w tej fali nie straciła ludności
 *   w latach 2002–2024,
 * — 1 829 mieszkańców miasta, 6 359 gminy (31.12.2024).
 */
export const UJAZD: CityContent = {
  slug: "ujazd",
  h1: "Thermomix Ujazd – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ujazd (opolskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ujeździe w powiecie strzeleckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ujazd — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ujeździe. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ujazdu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Ujazd i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na dwadzieścia osób — tak. Na sto — wynajmijcie kogoś.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ujeździe – jak wygląda prezentacja?",
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
      id: "przyjecie",
      heading: "Jedyna gmina w okolicy, która się nie wyludnia — czyli o przyjęciu robionym w domu",
      paragraphs: [
        "Wszystkie sąsiednie gminy straciły w tym stuleciu od dziesięciu do dwudziestu procent mieszkańców. Ujazd — praktycznie nic. Ludzie tu zostają i przyjeżdżają, głównie dzięki dużemu zakładowi przy autostradzie. A tam, gdzie mieszkają młode rodziny, są też chrzciny, komunie, osiemnastki i wesela. Więc napiszę o przyjęciu robionym w domu — i zacznę od zdania, które psuje mi sprzedaż.",
        "Na duże wesele tego urządzenia nie kupujcie. Jeżeli ma przyjść sto osób, to nie jest zadanie dla żadnego sprzętu domowego, tylko dla firmy cateringowej albo lokalu. Sprzedawca, który sugeruje inaczej, sprzedaje Wam wyobrażenie, a Wy zapłacicie za nie dwoma zarwanymi nocami. Mówię to wprost, bo widziałam, jak to się kończy.",
        "Teraz to, co jest prawdą.",
        "Po pierwsze: przy przyjęciu na kilkanaście, dwadzieścia osób — chrzciny, urodziny, kolacja rodzinna, poprawiny w węższym gronie — urządzenie ma sens i to duży.",
        "Po drugie, i to jest ważniejsze: nawet przy dużym przyjęciu jego miejsce jest dzień wcześniej. Bo przy przyjęciu nie chodzi o gotowanie w dniu imprezy — chodzi o piątkowy wieczór, kiedy trzeba zrobić dziesięć rzeczy naraz. Pasty i dipy. Sosy do mięsa. Farsze. Sałatki. Kremy do ciast. Masy serowe. Mielone orzechy. Wszystko to powstaje po kolei w jednym naczyniu, bez rozstawiania sześciu misek po całej kuchni i bez zmywania między jednym a drugim. To jest realnie kilka godzin różnicy w jednym wieczorze.",
        "Twarda granica, którą trzeba znać: pojemność naczynia. Przy większych ilościach gotuje się w turach — dwa razy, trzy razy. Nie podam Wam liczby litrów z pamięci; pokażę naczynie na spotkaniu i sami ocenicie, ile tur wyjdzie przy Waszej liczbie gości.",
        "I ostatnia rzecz, przy której nie ustąpię: nie doradzę Wam niczego o tym, jak długo jedzenie może stać na stole ani jak je przechowywać między piątkiem a sobotą. Przy kilkudziesięciu osobach to jest poważna sprawa i należy do bezpieczeństwa żywności, a nie do sprzętu kuchennego. Po tę wiedzę trzeba pójść gdzie indziej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ujeździe?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli szykuje się u Was uroczystość, powiedzcie ilu będzie gości — powiem uczciwie, czy to jeszcze zadanie dla domowej kuchni, czy już nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ujeździe"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ujazdowskiej rodziny",
      paragraphs: [
        "Ujazd liczy nieco ponad tysiąc osiemset mieszkańców, a cała gmina ponad sześć tysięcy — i jest jednym z najstarszych miast Śląska. Pierwsza wzmianka pochodzi z 23 kwietnia 1155 roku, z bulli papieża Hadriana IV, a prawa miejskie nadał 25 maja 1223 roku biskup wrocławski Wawrzyniec. Zamek biskupów wrocławskich, przebudowany w latach trzydziestych XIX wieku przez rodzinę Hohenlohe, spłonął 23 stycznia 1945 roku i pozostał ruiną. Gmina jest dwujęzyczna: urzędowa nazwa niemiecka Ujest została wpisana 19 listopada 2008 roku, a język niemiecki ma tu status pomocniczego od 2006 — warto przy tym wiedzieć, że w 1937 roku naziści przemianowali Ujest na Bischofstal, żeby zatrzeć polskie pochodzenie nazwy, i że dzisiejsza nazwa dodatkowa to ta sprzed tej zmiany. Dziś gmina żyje głównie z przemysłu: w Zimnej Wódce, w strefie ekonomicznej przy autostradzie A4, produkuje się wały napędowe do samochodów klasy premium.",
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

  districtsHeading: "Do których części Ujazdu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Olszowej, Zimnej Wódki, Jaryszowa, Starego Ujazdu, Klucza i pozostałych — bez dopłaty za dojazd.",
    "Miasto stanowi jedną jednostkę pomocniczą i nie dzieli się na osiedla; Stary Ujazd jest osobnym sołectwem, nie dzielnicą. Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Ujazd też przyjadę",
  nearbyParagraphs: [
    "Strzelce Opolskie, Leśnica, Zdzieszowice, Kędzierzyn-Koźle, Gogolin i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Strzelce Opolskie", "Leśnica", "Zdzieszowice", "Kędzierzyn-Koźle", "Gogolin", "Kolonowskie"],

  about: blokOMnie("do Ujazdu", "w Ujeździe i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ujazdu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy, w tym do Olszowej i Zimnej Wódki. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Ujazd w powiecie strzeleckim, nie o Ujazd w łódzkim ani ten w świętokrzyskim, gdzie stoi zamek Krzyżtopór.",
    },
    ...faqWspolne("w Ujeździe"),
    {
      question: "Czy dam radę zrobić wesele w domu z Thermomixem?",
      answer:
        "Jeżeli gości ma być sto — nie, i mówię to jako sprzedawczyni. To zadanie dla firmy cateringowej albo lokalu, a nie dla sprzętu domowego. Przy kilkunastu, dwudziestu osobach urządzenie ma sens i to duży.",
    },
    {
      question: "To gdzie jest jego miejsce przy większym przyjęciu?",
      answer:
        "Dzień wcześniej. Pasty, dipy, sosy, farsze, sałatki, kremy do ciast, masy serowe, mielone orzechy — wszystko po kolei w jednym naczyniu, bez sześciu misek po kuchni i bez zmywania między jednym a drugim. To realnie kilka godzin różnicy w piątkowy wieczór.",
    },
    {
      question: "Ile porcji zrobi naraz?",
      answer:
        "Pojemność naczynia jest twardą granicą i przy większych ilościach gotuje się w turach. Nie podam liczby litrów z pamięci — pokażę naczynie na spotkaniu i sami ocenicie, ile tur wyjdzie przy Waszej liczbie gości.",
    },
  ],

  geo: { lat: 50.3906, lng: 18.3542 },
};
