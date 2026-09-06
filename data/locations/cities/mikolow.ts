import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * MIKOŁÓW — zielone miasto na styku konurbacji i lasów pszczyńskich,
 * z rynkiem, dużą ilością zieleni i Śląskim Ogrodem Botanicznym
 * w dzielnicy Mokre.
 *
 * KĄT: to jedyne miasto tej fali, gdzie kątem są ZIOŁA I WŁASNE UPRAWY.
 * Nie „ogród pełen śliwek jak w Rybniku" — tam chodziło o nadmiar
 * i przetwory. Tu chodzi o coś mniejszego i codziennego: doniczka
 * bazylii na parapecie, grządka ziół, warzywa z własnej działki,
 * i pytanie, co z tym zrobić poza posypaniem sałatki.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Śląski Ogród Botaniczny ma siedzibę w Mikołowie (dzielnica Mokre),
 * — Mikołów należy do najbardziej zielonych miast aglomeracji, sąsiaduje
 *   z Lasami Kobiórsko-Pszczyńskimi,
 * — miasto ma zachowany historyczny rynek i jest jednym ze starszych
 *   ośrodków tej części Śląska,
 * — dzielnice Bujaków, Paniowy, Śmiłowice, Mokre i Borowa Wieś mają
 *   charakter wiejski i były wcześniej samodzielnymi wsiami,
 * — Mikołów graniczy m.in. z Katowicami, Tychami, Rudą Śląską,
 *   Łaziskami Górnymi i Orzeszem.
 *
 * CZEGO NIE MA: powierzchni terenów zielonych podanej jako liczba,
 * porad ogrodniczych, których nie mam potwierdzonych.
 */
export const MIKOLOW: CityContent = {
  slug: "mikolow",
  h1: "Thermomix Mikołów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Mikołów — prezentacja i cena",
  seoDescription:
    "Thermomix w Mikołowie: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mikołów — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mikołowie. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Mikołowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Kamionce, w Mokrem, Bujakowie czy Paniowach. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Mikołów, wszystkie dzielnice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mikołowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu albo w ogrodzie. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "ziola-i-grzadka",
      heading: "Bazylia na parapecie i grządka, z której nic nie wynika",
      paragraphs: [
        "Mikołów jest zielony i to nie jest slogan z folderu — Śląski Ogród Botaniczny ma siedzibę w Mokrem, lasy zaczynają się kilka minut od rynku, a dzielnice takie jak Bujaków czy Paniowy wciąż wyglądają jak wsie. W bardzo wielu domach jest tu ogród, działka albo przynajmniej parapet z ziołami.",
        "I bardzo często kończy się to tak samo: bazylia rośnie, koperek rośnie, a używa się ich do posypania sałatki raz na tydzień. Nie dlatego, że komuś nie zależy — tylko dlatego, że zrobienie z tego czegoś większego wymaga sprzętu i sprzątania, których wieczorem po pracy się nie chce.",
        "Tu Thermomix ma sens bardzo konkretny. Pesto z tego, co akurat urosło, powstaje w kilkanaście sekund w jednym naczyniu. Masło ziołowe, zielony sos do ziemniaków, hummus z natką, zupa z młodych warzyw — wszystko to jest kwestią jednej misy i jednego mycia, a nie blendera, deski i tarki. Nagle grządka zaczyna coś znaczyć.",
        "Na prezentacji chętnie zrobię to na tym, co u Was rośnie. Powiedz przy umawianiu, co masz w ogrodzie albo na parapecie — resztę składników przywiozę.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mikołowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę. Bujaków i Śmiłowice to inny kierunek niż centrum, a od tego zależy tylko godzina spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mikołowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mikołowskiej rodziny",
      paragraphs: [
        "Mikołów leży kwadrans od Katowic i kwadrans od Tychów, więc bardzo wiele osób mieszka tu, a pracuje gdzie indziej. Wracają o różnych porach i obiad przestaje być jednym wydarzeniem.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
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

  districtsHeading: "Do których dzielnic Mikołowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do dzielnic, które wyglądają jak osobne wsie.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Kamionka",
    "Reta",
    "Mokre",
    "Bujaków",
    "Paniowy",
    "Śmiłowice",
    "Borowa Wieś",
    "Goj",
    "Regielowiec",
  ],

  nearbyHeading: "Poza Mikołów też przyjadę",
  nearbyParagraphs: [
    "Łaziska Górne, Orzesze, Wyry, Tychy, Katowice i Ruda Śląska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Łaziska Górne",
    "Orzesze",
    "Wyry",
    "Tychy",
    "Katowice",
    "Ruda Śląska",
    "Gliwice",
  ],

  about: blokOMnie("do Mikołowa", "w Mikołowie i okolicy", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mikołowa bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Mikołowa jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Mikołowie"),
    {
      question: "Mam zioła i warzywa z ogrodu — pokażesz, co z nich zrobić?",
      answer:
        "Bardzo chętnie i to jest u mnie ulubiona część prezentacji. Powiedz przy umawianiu, co u Ciebie rośnie, a przywiozę resztę składników. Pesto, masło ziołowe czy zielony sos powstają w kilkanaście sekund w jednym naczyniu — a to zwykle jest cała różnica między „mam zioła” a „używam ziół”.",
    },
    {
      question: "Czy Thermomix nadaje się do przetworów z działki?",
      answer:
        "Tak. Przeciery, dżemy i powidła gotują się z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć do dna — czyli bez tej części, przez którą przetwory zajmują całą sobotę.",
    },
  ],

  geo: { lat: 50.1717, lng: 18.9053 },
};
