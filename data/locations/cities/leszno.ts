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
 * LESZNO — miasto uważane za stolicę polskiego szybownictwa; szybowiec
 * leci bez silnika, wykorzystując to, co i tak jest w powietrzu.
 *
 * KĄT: resztki. Miasto latania na tym, co darmowe, jest jedynym właściwym
 * miejscem na temat, który w Wielkopolsce trafia w sedno, a nigdzie indziej
 * w serwisie jeszcze nie padł: CO ZROBIĆ Z TYM, CO ZOSTAŁO — i, co równie
 * ważne, CZEGO NIE ODGRZEWAĆ ANI NIE PRZERABIAĆ.
 *
 * SEKCJA MUSI MIEĆ DRUGĄ POŁOWĘ. Sama lista pomysłów na resztki byłaby
 * poradnikiem z internetu. Wartość jest w granicy: są rzeczy, których
 * nie wolno ratować, i trzeba je wymienić.
 *
 * ROZGRANICZENIE. Pabianice mają „ile da się unieść" (zakupy i lekkie
 * produkty), Proszowice „skrzynkę warzyw, której nie ma kto przerobić"
 * (nadmiar świeżych warzyw). Tutaj chodzi o UGOTOWANE JEDZENIE PO OBIEDZIE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Leszno jest ośrodkiem szybownictwa,
 * — szybowiec lata bez własnego napędu.
 *
 * CZEGO NIE MA: porad o przechowywaniu żywności podawanych jako normy
 * sanitarne, terminów przydatności, twierdzeń zdrowotnych.
 */
export const LESZNO: CityContent = {
  slug: "leszno",
  h1: "Thermomix Leszno – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Leszno — prezentacja i cena",
  seoDescription:
    "Thermomix w Lesznie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Leszno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lesznie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Leszna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Leszno i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Domowa lemoniada przygotowana w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Na spotkaniu robimy też rzeczy proste — takie, które faktycznie robi się potem co tydzień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lesznie – jak wygląda prezentacja?",
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
      id: "resztki",
      heading: "Miasto szybowców — czyli lecieć na tym, co i tak jest",
      paragraphs: [
        "Leszno jest stolicą polskiego szybownictwa, a szybowiec leci bez własnego napędu: wykorzystuje to, co i tak jest w powietrzu. Wykorzystuję ten obraz do rzeczy, która w wielkopolskim domu jest zupełnie oczywista, a w folderach reklamowych nie występuje: do resztek po obiedzie.",
        "Zacznę od tego, co się w tym urządzeniu ratuje naprawdę dobrze. Warzywa z rosołu, które nikt nie chce jeść drugi raz w tej postaci — po zmiksowaniu z odrobiną wywaru robi się z nich zupa krem, i to jest zupa, a nie „przerobione resztki”, bo nikt nie rozpozna, co w niej było. Pieczone mięso, które wysycha przy odgrzewaniu — po rozdrobnieniu z odrobiną sosu jest farszem do pierogów, naleśników albo pastą na kanapki. Czerstwy chleb — bułka tarta w kilkanaście sekund, bez pyłu po całej kuchni. Nadmiar owoców, który zaraz się zepsuje — mus albo sorbet, bez cukru albo z minimalnym.",
        "A teraz druga połowa, bez której to byłby zwykły poradnik z internetu. Są rzeczy, których nie ratuję i Wam też odradzam.",
        "Nie przerabiam smażonych rzeczy — panierka po odgrzaniu jest już tylko rozmokłym ciastem i żadne urządzenie tego nie odwróci. Nie miksuję sałatek z majonezem ani niczego, co stało w cieple na stole przez pół dnia; tu nie chodzi o smak i nie będę udawać eksperta od bezpieczeństwa żywności — po prostu odradzam. Nie ratuję też rzeczy, które przestały ładnie pachnieć, i uważam, że każda próba „uratowania” takiego jedzenia przyprawami kończy się gorzej niż wyrzucenie.",
        "I rzecz najuczciwsza: to urządzenie nie sprawi, że przestaniecie marnować jedzenie. To robi planowanie zakupów, a nie sprzęt. Ono tylko obniża próg — bo drugie danie z resztek przestaje wymagać wyciągania blendera i mycia trzech rzeczy, a przez to faktycznie się je robi.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz w lodówce" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lesznie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lesznie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla leszczyńskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — ta sama, która potem patrzy, co zostało w lodówce.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że drugie danie z resztek przestaje być osobnym przedsięwzięciem. Gotowanie odbywa się w jednym naczyniu, z ustawioną temperaturą i mieszaniem.",
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

  districtsHeading: "Do których części Leszna i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Zatorze",
    "Gronowo",
    "Zaborowo",
    "Podwale",
    "Nowe Miasto",
    "Grzybowo",
    "Zamenhofa",
    "Antoniny",
    "Strzyżewice",
  ],

  nearbyHeading: "Poza Leszno też przyjadę",
  nearbyParagraphs: [
    "Rydzyna, Osieczna, Kościan, Śmigiel i Rawicz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rydzyna", "Osieczna", "Kościan", "Śmigiel", "Rawicz", "Bojanowo"],

  about: blokOMnie("do Leszna", "w Lesznie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Leszna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Lesznie"),
    {
      question: "Co da się zrobić z resztek po obiedzie?",
      answer:
        "Z warzyw z rosołu — zupę krem, w której nikt nie rozpozna, co było wcześniej. Z pieczonego mięsa — farsz do pierogów albo pastę na kanapki. Z czerstwego chleba — bułkę tartą w kilkanaście sekund. Z nadmiaru owoców — mus albo sorbet.",
    },
    {
      question: "Czego nie warto przerabiać?",
      answer:
        "Smażonych rzeczy — panierka po odgrzaniu jest już rozmokłym ciastem i tego się nie odwróci. Odradzam też miksowanie sałatek z majonezem i wszystkiego, co stało pół dnia w cieple, a także ratowanie przyprawami czegoś, co przestało ładnie pachnieć. Samo urządzenie nie sprawi, że przestaniecie marnować jedzenie — to robi planowanie zakupów.",
    },
  ],

  geo: { lat: 51.8404, lng: 16.5748 },
};
