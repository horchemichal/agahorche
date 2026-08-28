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
 * BRZESKO — rzadki przypadek: leży w zasięgu codziennych dojazdów do OBU
 * dużych ośrodków naraz (Kraków ok. 55 km, Tarnów ok. 30 km), a przy tym
 * ma własnych dużych pracodawców, więc nie jest czystą sypialnią. Tekst
 * jest zbudowany wokół tego „w dwie strony”, bo to jedyna rzecz, której
 * nie da się powiedzieć o żadnym innym mieście w tym zestawie.
 *
 * Fakty użyte w tekście:
 * — Browar Okocim działa od 1845 r. i mieści się w samym Brzesku, choć
 *   nazwę wziął od sąsiedniego Okocimia — dziś sołectwa tej samej gminy;
 *   stacja kolejowa nazywa się oficjalnie „Brzesko Okocim”,
 * — Can-Pack jako drugi duży pracodawca,
 * — gmina miejsko-wiejska: 7 osiedli miasta i 9 sołectw, z bardzo wysokim
 *   jak na miasto udziałem rolnictwa w strukturze pracujących,
 * — Szczepanów w granicach gminy jako miejsce urodzenia św. Stanisława.
 * Sekcji kulinarnej ta strona NIE dostaje: jedyny rozpoznawalny produkt
 * Brzeska to piwo, a budowanie wokół niego treści o gotowaniu w domu
 * byłoby naciąganiem.
 */
export const BRZESKO: CityContent = {
  slug: "brzesko",
  h1: "Thermomix Brzesko – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Brzesko — prezentacja i cena",
  seoDescription:
    "Thermomix w Brzesku: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brzesko — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brzesku lub okolicy. Bez dopłat za dojazd, bez zobowiązania. Ratę liczymy na miejscu.",

  lead:
    "Do Brzeska i całej gminy dojeżdżam bez dopłaty za dojazd. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Brzesko i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brzesku – jak wygląda prezentacja?",
      paragraphs: [
        "Wszystko, co potrzebne, jedzie ze mną — urządzenie, składniki, w razie potrzeby naczynia. Twoja rola sprowadza się do udostępnienia kawałka blatu i gniazdka; nie robisz zakupów i nie sprzątasz kuchni na tę okazję.",
        "Potem gotujemy naprawdę, a nie pokazowo: obiad, coś słodkiego i chętnie coś z tego, co akurat masz w domu. Powiedz mi wcześniej, ile osób siada u Was do stołu i czego nie jecie — dobiorę dania tak, żeby spotkanie odpowiadało na Wasze pytania, a nie na moje.",
        "Na końcu przechodzimy do liczb: cena, aktualna promocja i wysokość raty przy kilku okresach spłaty. To jest moment, w którym można powiedzieć „muszę to przegadać w domu” — i tyle. Spotkanie jest bezpłatne niezależnie od decyzji.",
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
      heading: "Miasto, z którego jeździ się w dwie strony",
      paragraphs: [
        "Brzesko jest w rzadkiej sytuacji: ma własnych dużych pracodawców — Browar Okocim działa tu od 1845 roku, a Can-Pack zatrudnia ludzi z całej okolicy — a jednocześnie leży przy węźle autostrady A4, w zasięgu codziennych dojazdów i do Krakowa, i do Tarnowa. W jednym domu potrafią więc mieszkać dwie osoby wyjeżdżające rano w przeciwne strony.",
        "Do tego dochodzi dziewięć sołectw gminy, gdzie rolnictwo jest realnym zajęciem, a nie wspomnieniem. To znaczy, że w gminie Brzesko obok siebie funkcjonują dwa zupełnie różne rytmy kuchni: miejski, w którym problemem jest brak czasu wieczorem, i wiejski, w którym problemem jest nadmiar warzyw i owoców w sezonie.",
        "Thermomix nadaje się do obu, bo w obu chodzi o to samo — o zdjęcie z człowieka konieczności stania przy garnku. W tygodniu oznacza to obiad, który gotuje się sam, gdy Ty robisz coś innego. W sierpniu — przecier, który nie przywrze do dna, choć nikt go nie miesza.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brzesku?",
      paragraphs: [
        "Zadzwoń lub napisz SMS — to zajmuje minutę. Alternatywa dla osób, które nie lubią rozmów telefonicznych: formularz na dole strony i wskazana pora oddzwonienia.",
        "Powiedz od razu, w którym rejonie gminy mieszkasz i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę — Jadowniki czy Szczepanów to inny kierunek niż osiedle Okocimskie — a drugie pozwala dobrać, co ugotujemy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brzesku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Brzeska",
      paragraphs: [
        "W mieście mieszka się w blokach na osiedlach Jagiełły, Okocimskim i Kościuszki-Ogrodowej albo w gęstej zabudowie jednorodzinnej; w sołectwach — w domach z ogrodem. Wąskie gardło jest jednak wspólne i bardzo proste: obiad dla kilku osób w dniu, w którym ktoś wraca z Tarnowa, ktoś z Krakowa, a dzieci wracają ze szkoły wcześniej niż jedno i drugie.",
        "Thermomix rozwiązuje to nie szybkością, tylko brakiem konieczności pilnowania. Danie może być gotowe wcześniej i poczekać, albo powstać wtedy, gdy Ty rozpakowujesz zakupy. Gotuje i miksuje w jednym naczyniu, więc nie ma przekładania gorących rzeczy z garnka do blendera.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla reszty domu, bez drugiego garnka i bez drugiego pilnowania.",
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

  districtsHeading: "Gdzie w gminie Brzesko dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — na wszystkie osiedla w mieście i do wszystkich sołectw. Za dojazd nie doliczam ani złotówki, bez różnicy, czy mieszkasz na Starym Mieście, w Jadownikach, czy w Szczepanowie.",
    "Nie ma Twojej miejscowości na liście? Zapytaj — lista wymienia sołectwa gminy, ale jeżdżę też do sąsiednich, zwłaszcza po drodze między Bochnią a Tarnowem.",
  ],
  districts: [
    "Stare Miasto",
    "Osiedle Jagiełły",
    "Osiedle Okocimskie",
    "Kościuszki-Ogrodowa",
    "Brzezowieckie",
    "Słotwina",
    "Zielonka",
    "Jadowniki",
    "Jasień",
    "Okocim",
    "Mokrzyska",
    "Bucze",
    "Poręba Spytkowska",
    "Sterkowiec",
    "Szczepanów",
    "Wokowice",
  ],

  nearbyHeading: "Poza gminą też przyjadę",
  nearbyParagraphs: [
    "Brzesko leży przy trasie, którą jeżdżę między Krakowem a Tarnowem, więc okolicę obsługuję przy okazji — w stronę Bochni i Nowego Wiśnicza na zachód, w stronę Wojnicza i Tarnowa na wschód, a przez Czchów także w dolinę Dunajca.",
  ],
  nearbyTowns: [
    "Bochnia",
    "Nowy Wiśnicz",
    "Wojnicz",
    "Tarnów",
    "Czchów",
    "Dębno",
    "Gnojnik",
    "Iwkowa",
    "Borzęcin",
    "Szczurowa",
  ],

  about: blokOMnie("do Brzeska", "w Brzesku, Bochni i Tarnowie"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Brzeska bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Brzeska i całej gminy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Brzesku"),
    {
      question: "Czy dojeżdżasz do Jadownik, Szczepanowa i pozostałych sołectw?",
      answer:
        "Tak, do całej gminy — Jadowniki, Jasień, Okocim, Mokrzyska, Bucze, Poręba Spytkowska, Sterkowiec, Szczepanów i Wokowice. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz.",
    },
    {
      question: "Czy Thermomix nadaje się do przetworów z ogrodu?",
      answer:
        "Tak. Przeciery, dżemy, powidła i pasty robią się z ustawioną temperaturą i czasem, z mieszaniem, które nie pozwala przywrzeć do dna — czyli bez tej części, przez którą przetwory zajmują całą sobotę.",
    },
    {
      question: "Czy da się umówić w weekend?",
      answer:
        "Tak. Sobotnie przedpołudnia i wieczory w tygodniu to najczęściej wybierane terminy — także dlatego, że w Brzesku często obie osoby w domu pracują poza gminą.",
    },
  ],

  geo: { lat: 49.9647, lng: 20.6034 },
};
