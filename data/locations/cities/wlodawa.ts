import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * WŁODAWA — miasto nad Bugiem, w pobliżu styku trzech granic. Najbardziej
 * rozpoznawalny jest tu zespół trzech świątyń stojących blisko siebie:
 * kościoła, cerkwi i dawnej Wielkiej Synagogi, w której działa muzeum.
 * Odbywa się tu coroczny Festiwal Trzech Kultur. Kilka kilometrów dalej
 * leży Okuninka nad Jeziorem Białym.
 *
 * KĄT: jeden obiad, kilka wymagań. Trzy świątynie w jednym miejscu to
 * fakt historyczny i wspominam go krótko, z szacunkiem i bez robienia
 * z niego metafory — ale daje naturalne przejście do sprawy zupełnie
 * domowej, o której nikt nie pisze: DZISIAJ PRAWIE KAŻDY STÓŁ MA KILKA
 * RÓŻNYCH WYMAGAŃ NARAZ. Ktoś nie je mięsa, ktoś nie może nabiału, dziecko
 * je trzy rzeczy, a babcia uważa, że to wszystko wymysły. I to jedna osoba
 * musi to pogodzić w jednym obiedzie.
 *
 * ŻADNYCH TREŚCI ZDROWOTNYCH ANI ŚWIATOPOGLĄDOWYCH. Nie oceniam żadnego
 * sposobu odżywiania i nie doradzam w sprawach zdrowia. Piszę wyłącznie
 * o logistyce jednego garnka.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — we Włodawie stoją blisko siebie kościół, cerkiew i dawna Wielka
 *   Synagoga, w której mieści się muzeum,
 * — odbywa się tu coroczny festiwal poświęcony trzem kulturom,
 * — miasto leży nad Bugiem, niedaleko styku granic,
 * — w pobliżu leży Okuninka nad Jeziorem Białym.
 *
 * CZEGO NIE MA: historii poszczególnych społeczności, ocen religijnych,
 * porad dietetycznych.
 */
export const WLODAWA: CityContent = {
  slug: "wlodawa",
  h1: "Thermomix Włodawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Włodawa — prezentacja i cena",
  seoDescription:
    "Thermomix we Włodawie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Włodawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Włodawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Włodawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Orchówka, Różanki, Suszna i Okuninki.",

  highlights: highlightyStandardowe("Włodawa i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Włodawie – jak wygląda prezentacja?",
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
      id: "jeden-obiad-kilka-wymagan",
      heading: "Jeden obiad, przy którym każdy je co innego",
      paragraphs: [
        "We Włodawie stoją blisko siebie kościół, cerkiew i dawna Wielka Synagoga, w której dziś jest muzeum. To miejsce, w którym różne rzeczy przez wieki mieściły się obok siebie — i tyle o tym napiszę, bo mówią o tym ludzie, którzy znają się na tym lepiej ode mnie.",
        "Chcę za to napisać o czymś domowym, co dziś zdarza się przy prawie każdym stole i o czym nikt nie pisze uczciwie. O tym, że jeden obiad musi dziś pogodzić kilka różnych wymagań naraz. Ktoś nie je mięsa. Ktoś nie może nabiału. Dziecko je trzy rzeczy i żadna z nich nie jest warzywem. A ktoś przy tym samym stole uważa, że to wszystko wymysły — i mówi to głośno.",
        "Nie zamierzam nikogo z tych osób oceniać ani doradzać, kto ma rację. Zwrócę uwagę na coś innego: to wszystko spada na jedną osobę, która ma z tego zrobić jeden obiad, w jednej kuchni, w tym samym czasie. I to jest praca, o której się nie mówi, bo wygląda jak zwykłe gotowanie.",
        "Urządzenie ma tu jedną konkretną odpowiedź i nie jest nią żaden cud. To Varoma: nad gotującym się daniem stawia się drugie, gotowane na parze. Czyli w tym samym garnku i w tym samym czasie powstaje sos albo zupa dla wszystkich i osobna porcja dla tej jednej osoby, która je inaczej. Bez drugiego palnika i bez dodatkowego naczynia do umycia.",
        "To nie rozwiązuje sporu przy stole i nikt tego nie obiecuje. Zmniejsza tylko liczbę garnków, które trzeba pilnować naraz — a przy takim obiedzie to jest różnica między jedną a dwiema godzinami w kuchni.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Włodawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Powiedz przy umawianiu, czego u Was się nie je — dobiorę dania tak, żeby każdy przy stole mógł spróbować.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Do Włodawy i nad Bug jeżdżę planowo, więc proszę o termin z wyprzedzeniem — dojazd jest bezpłatny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Włodawie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla włodawskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — i to ona godzi wszystkie wymagania przy stole.",
        "Thermomix pomaga tym, że nie wymaga obecności, a dzięki Varomie dwa dania mogą powstawać jednocześnie w jednym urządzeniu.",
        "Przy małym dziecku działa to tak samo: porcja na parze powstaje równolegle z obiadem dla dorosłych.",
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

  districtsHeading: "Do których części miasta i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Orchówek",
    "Suszno",
    "Korolówka",
    "Różanka",
    "Szuminka",
    "Okuninka",
    "Stawki",
    "Żłobek",
    "Sobibór",
  ],

  nearbyHeading: "Poza Włodawę też przyjadę",
  nearbyParagraphs: [
    "Chełm, Parczew i Biała Podlaska są w zasięgu tego samego wyjazdu — a skoro i tak jadę nad Bug, chętnie umawiam kilka spotkań na jeden dzień.",
  ],
  nearbyTowns: ["Chełm", "Parczew", "Biała Podlaska", "Ostrów Lubelski", "Lubartów"],

  about: blokOMnie("do Włodawy", "we Włodawie i nad Bugiem", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Włodawy bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do okolicznych miejscowości. Dojazd jest bezpłatny niezależnie od odległości — proszę tylko o umówienie terminu z wyprzedzeniem, bo w tę stronę jeżdżę planowo.",
    },
    ...faqWspolne("we Włodawie"),
    {
      question: "U nas przy stole każdy je co innego. Czy to coś zmienia?",
      answer:
        "Zmienia tyle, że warto zobaczyć Varomę: nad gotującym się daniem powstaje drugie, na parze, w tym samym urządzeniu i czasie. Powiedz przy umawianiu, czego u Was się nie je, a ugotujemy dokładnie taki obiad — z osobną porcją dla tej jednej osoby.",
    },
    {
      question: "Czy to urządzenie jest do jakiejś konkretnej diety?",
      answer:
        "Nie. Gotuje to, co do niego włożycie, i nie doradzam w sprawach żywienia ani zdrowia — od tego są inne osoby. Pokażę tylko, jak przygotować dwie różne porcje naraz, jeśli tego właśnie potrzebujecie.",
    },
  ],

  geo: { lat: 51.5486, lng: 23.5528 },
};
