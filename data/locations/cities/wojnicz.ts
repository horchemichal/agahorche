import type { CityContent } from "../city-content";
import {
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
 * WOJNICZ — najbardziej „dojazdowa” gmina z całego zestawu: przy szesnastu
 * kilometrach do Tarnowa zdecydowanie więcej osób stąd wyjeżdża do pracy,
 * niż do niej przyjeżdża. W praktyce jest to zaplecze mieszkaniowe Tarnowa
 * z dużymi domami jednorodzinnymi (średnia powierzchnia mieszkania w gminie
 * jest wyraźnie wyższa od typowej dla miast).
 *
 * Fakty użyte w tekście:
 * — 14 sołectw; prawa miejskie odzyskane 1 stycznia 2007 r. po utracie
 *   w okresie międzywojennym; osadnictwo sięga wczesnego średniowiecza,
 * — Wały Kasztelańskie — pozostałości grodu, drewniany kościół
 *   św. Leonarda z renesansowymi malowidłami, kolegiata św. Wawrzyńca,
 * — gminna strefa gospodarcza („Zielony Park Przemysłowy”),
 * — gmina leży w obszarze ChNP fasoli „Piękny Jaś” z Doliny Dunajca.
 *
 * ŚWIADOMIE bez osobnej sekcji kulinarnej: jedyny udokumentowany produkt
 * to wspólna z Zakliczynem fasola, a dwie sąsiadujące strony z niemal
 * identyczną sekcją o fasoli byłyby dokładnie tym powielaniem treści,
 * którego ta architektura ma unikać. Fasola jest tu wspomniana raz,
 * w sekcji lokalnej, i to wystarczy.
 */
export const WOJNICZ: CityContent = {
  slug: "wojnicz",
  h1: "Thermomix Wojnicz – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Wojnicz — prezentacja i cena",
  seoDescription:
    "Thermomix w Wojniczu: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0,6%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wojnicz — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wojniczu lub w którymś z sołectw gminy. Bez dopłat za dojazd, bez zobowiązania.",

  lead:
    "Do Wojnicza i całej gminy dojeżdżam bez dopłaty za dojazd. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Wojnicz i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Obiad przygotowany podczas prezentacji Thermomixa TM7 — potrawka i domowe pieczywo",
    caption: "Prezentacja odbywa się u Ciebie — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wojniczu – jak wygląda prezentacja?",
      paragraphs: [
        "Cały sprzęt i wszystkie produkty przywożę ze sobą, naczynia również, gdyby się przydały. Po Twojej stronie zostaje wolny kawałek blatu i gniazdko — nic więcej nie musisz organizować.",
        "Później gotujemy, i to na serio: pełne danie obiadowe, coś słodkiego i zwykle jeszcze coś z Twoich zapasów, bo dopiero wtedy widać, jak urządzenie radzi sobie z jedzeniem, które faktycznie jecie. Powiedz mi wcześniej, ile osób siada u Was do stołu i czego nie jecie.",
        "Liczby zostawiam na koniec: cena, promocja obowiązująca w danym miesiącu, rata przy różnych okresach spłaty. Nie ma pośpiechu i nie ma nacisku — spotkanie nic nie kosztuje niezależnie od decyzji.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Dom w Wojniczu, praca w Tarnowie",
      paragraphs: [
        "Z Wojnicza do Tarnowa jest kilkanaście kilometrów i niecałe dwadzieścia minut, i to w dużym stopniu definiuje gminę: znacznie więcej osób stąd wyjeżdża do pracy, niż do niej przyjeżdża. Wojnicz jest miejscem, w którym się mieszka — w domach większych niż mieszkania w mieście, często z ogrodem, w czternastu sołectwach rozłożonych między Dunajcem a pogórzem.",
        "Taki układ ma jedną konkretną konsekwencję dla kuchni. Dzień jest podzielony na dwie części — te kilkanaście kilometrów w jedną i w drugą stronę — a obiad wypada w tej gorszej, po powrocie. W dodatku gotuje się na kilka osób, bo domy są duże i często wielopokoleniowe.",
        "Thermomix nie skraca drogi z Tarnowa, ale sprawia, że obiad nie wymaga już obecności. Nastawiasz i zajmujesz się czymś innym: urządzenie sieka, miesza i trzyma temperaturę samo, a większa porcja kosztuje tyle samo pracy co mniejsza. W sezonie ta sama zasada dotyczy przetworów — również fasoli, bo gmina leży w obszarze objętym Chronioną Nazwą Pochodzenia dla fasoli z Doliny Dunajca.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wojniczu?",
      paragraphs: [
        "Najprościej telefonem albo SMS-em — zwykle jedna wiadomość i termin jest ustalony. Możesz też zostawić kontakt w formularzu na dole strony, podając porę, o której mam oddzwonić.",
        "Powiedz od razu, w której miejscowości mieszkasz i ile osób będzie na spotkaniu. Sołectwa gminy są rozrzucone dość szeroko — Biadoliny Radłowskie czy Olszyny to inny dojazd niż samo miasto — więc konkret pozwala mi ułożyć realny plan dnia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wojniczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Wojnicz",
      paragraphs: [
        "Mieszkania i domy są tu przeciętnie wyraźnie większe niż w mieście, a to zwykle znaczy jedno: mieszka w nich więcej osób. Obiad gotuje się dla całego domu, często dla trzech pokoleń, i robi się to od zera częściej niż w bloku w Tarnowie.",
        "Przy gotowaniu na kilka osób największym pożeraczem czasu jest obróbka wstępna, a nie samo gotowanie. Thermomix zabiera właśnie ją — sieka, szatkuje, uciera i miesza, a potem gotuje w tym samym naczyniu, więc nie ma przekładania gorących rzeczy ani drugiego garnka do umycia.",
        "Jeśli w domu jest małe dziecko, Varoma pozwala przygotować dla niego porcję na parze równolegle z obiadem dla reszty — w jednym urządzeniu i bez pilnowania dwóch rzeczy naraz.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla całego domu w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Wojnicz dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — do miasta i do wszystkich czternastu sołectw. Za dojazd nie doliczam ani złotówki, niezależnie od tego, czy mieszkasz w centrum, czy w Dębinie Zakrzowskiej.",
    "Jeśli Twojej miejscowości nie ma na liście, po prostu zapytaj. Wojnicz leży przy trasie, którą jeżdżę między Brzeskiem a Tarnowem, więc zwykle da się dopasować termin bez czekania.",
  ],
  districts: [
    "Wojnicz — rynek i centrum",
    "Wielka Wieś",
    "Zakrzów",
    "Łopoń",
    "Milówka",
    "Grabno",
    "Isep",
    "Rudka",
    "Sukmanie",
    "Więckowice",
    "Olszyny",
    "Łukanowice",
    "Dębina Łętowska",
    "Dębina Zakrzowska",
    "Biadoliny Radłowskie",
  ],

  nearbyHeading: "Między Tarnowem a Brzeskiem",
  nearbyParagraphs: [
    "Wojnicz leży dokładnie na trasie, którą jeżdżę na wschód Małopolski, więc okoliczne gminy obsługuję przy okazji — w stronę Tarnowa i Wierzchosławic na wschód, Dębna i Brzeska na zachód, a przez Zakliczyn także w dolinę Dunajca.",
  ],
  nearbyTowns: [
    "Tarnów",
    "Brzesko",
    "Zakliczyn",
    "Dębno",
    "Wierzchosławice",
    "Pleśna",
    "Borzęcin",
    "Wietrzychowice",
    "Bochnia",
  ],

  about: blokOMnie("do Wojnicza", "w Wojniczu, Tarnowie i Brzesku"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Wojnicza bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Wojnicza i całej gminy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wojniczu"),
    {
      question: "Czy dojeżdżasz do sołectw, na przykład do Olszyn albo Biadolin Radłowskich?",
      answer:
        "Tak, do wszystkich czternastu sołectw gminy. Wystarczy podać przy umawianiu nazwę miejscowości.",
    },
    {
      question: "Wracam z pracy w Tarnowie po godzinie szesnastej. Da się umówić?",
      answer:
        "Tak i tak umawia się tu większość spotkań. Podaj godzinę, o której realnie jesteś w domu — układam trasę tak, żeby prezentacja nie zaczynała się w biegu.",
    },
    {
      question: "Czy Thermomix nadaje się do przetworów i do fasoli?",
      answer:
        "Tak. Przeciery, dżemy i pasty robią się z ustawioną temperaturą i mieszaniem bez przywierania, a namoczona fasola gotuje się długo i powoli bez konieczności stania przy garnku.",
    },
  ],

  geo: { lat: 49.9583, lng: 20.8387 },
};
