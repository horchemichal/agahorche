import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * ZGIERZ — miasto tuż przy Łodzi, połączone z nią linią tramwajową.
 * To tutaj w 1821 roku podpisano umowę, która uruchomiła osadnictwo
 * tkackie i dała początek całemu okręgowi włókienniczemu. Zachowały się
 * drewniane domy tkaczy z tamtego czasu.
 *
 * KĄT: być pierwszym i nie być zapamiętanym. Zgierz zaczął to, z czego
 * potem zasłynęła Łódź — i mało kto o tym pamięta. To jest jedyne miejsce,
 * w którym mogę napisać o czymś, o czym nie mówi żadna strona sprzedażowa:
 * O CODZIENNYM OBIEDZIE, KTÓREGO NIKT NIE ZAUWAŻA. Świąteczny stół
 * dostaje pochwały, a dwieście pięćdziesiąt zwykłych obiadów w roku
 * nie dostaje nic. A to właśnie przy nich urządzenie robi różnicę.
 *
 * WARUNEK UCZCIWOŚCI: ta sekcja nie może przechodzić w moralizowanie
 * o niedocenianiu ani w namawianie kogokolwiek, żeby chwalił. Ma nazwać
 * fakt i zostać przy nim.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — umowa zawarta w Zgierzu w 1821 roku dała początek osadnictwu
 *   tkackiemu i rozwojowi okręgu włókienniczego,
 * — zachowały się drewniane domy tkaczy,
 * — miasto sąsiaduje z Łodzią i jest z nią połączone tramwajem.
 *
 * CZEGO NIE MA: szczegółów historycznych ponad jedno zdanie, dat innych
 * niż rok umowy, danych o mieście.
 */
export const ZGIERZ: CityContent = {
  slug: "zgierz",
  h1: "Thermomix Zgierz – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Zgierz — prezentacja i cena",
  seoDescription:
    "Thermomix w Zgierzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zgierz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zgierzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zgierza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Zgierz i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zgierzu – jak wygląda prezentacja?",
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
      id: "obiad-ktorego-nikt-nie-zauwaza",
      heading: "Zaczęło się tutaj — i mało kto o tym pamięta",
      paragraphs: [
        "W Zgierzu podpisano w tysiąc osiemset dwudziestym pierwszym roku umowę, od której zaczęło się osadnictwo tkackie i cały późniejszy okręg włókienniczy. Zostały po tym drewniane domy tkaczy, które można zobaczyć do dziś. A sławę z tego, co się tutaj zaczęło, zebrała Łódź.",
        "Nie piszę tego ze złośliwością, bo tak to zwykle wygląda: pierwszy krok robi ktoś inny niż ten, kogo się potem pamięta. Piszę, bo w kuchni działa dokładnie ten sam mechanizm i wart jest nazwania.",
        "Świąteczny stół dostaje pochwały. Ciasto na urodziny dostaje zdjęcie. A dwieście pięćdziesiąt zwykłych obiadów w roku — wtorkowa zupa, środowy makaron, czwartkowe naleśniki, bo nic innego nie było — nie dostaje nic. Nikt ich nie komentuje, nikt nie dziękuje, i słusznie, bo są normalne. Tylko że to właśnie one zajmują cały ten czas i całą tę energię.",
        "I dlatego, kiedy ktoś pyta mnie, czy warto, odpowiadam pytaniem o wtorek, a nie o święta. Przy świątecznym obiedzie urządzenie pomaga trochę. Przy dwustu pięćdziesięciu zwykłych — pomaga codziennie po parę minut i po jednym naczyniu mniej, i to się składa w coś, czego nie widać, ale co czuje osoba, która to robi.",
        "To nie jest efektowny argument i nie nadaje się na pokaz. Uważam go za najuczciwszy z możliwych.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zgierzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Przy starszej zabudowie brak windy zmienia tylko to, ile rzeczy wnoszę za jednym razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zgierzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zgierskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — i robi to codziennie, a nie od święta.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których części Zgierza i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Nowe Miasto",
    "Kurak",
    "Chełmy",
    "Rudunki",
    "Podleśna",
    "Proboszczewice",
    "Adelmówek",
    "Krzywie",
  ],

  nearbyHeading: "Poza Zgierz też przyjadę",
  nearbyParagraphs: [
    "Łódź, Ozorków, Aleksandrów Łódzki, Stryków i Głowno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łódź", "Ozorków", "Aleksandrów Łódzki", "Stryków", "Głowno", "Brzeziny"],

  about: blokOMnie("do Zgierza", "w Zgierzu i okolicy Łodzi", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zgierza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zgierzu"),
    {
      question: "Gotuję zwyczajnie, nic wyszukanego. Czy to urządzenie jest dla mnie?",
      answer:
        "Właśnie dla Ciebie najbardziej. Przy świątecznym obiedzie pomaga trochę, a przy zwykłej wtorkowej zupie codziennie po parę minut i po jedno naczynie mniej. To się nie nadaje na pokaz, ale to jest cała prawda o tym sprzęcie.",
    },
    {
      question: "Czy będziesz mnie namawiać na drogie, wyszukane przepisy?",
      answer:
        "Nie. Na spotkaniu gotujemy to, co u Was normalnie się je — powiedz przy umawianiu co, a przywiozę składniki. Efektowne dania z folderu robią wrażenie i po dwóch miesiącach nikt do nich nie wraca.",
    },
  ],

  geo: { lat: 51.8556, lng: 19.4064 },
};
