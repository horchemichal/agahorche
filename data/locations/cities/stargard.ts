import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * STARGARD — miasto z jednym z najlepiej zachowanych średniowiecznych
 * pierścieni murów obronnych w Polsce, z bramami, przez które od wieków
 * coś się z miasta wynosiło i do miasta wnosiło.
 *
 * KĄT: gotowanie dla dwóch domów. Porcja, którą się komuś zawozi —
 * rodzicom, dziecku na studiach, sąsiadce po operacji, córce po porodzie.
 * To jest sytuacja, która w polskich domach zdarza się stale, a w serwisie
 * nie ma jej nigdzie.
 *
 * SEKCJA MA BYĆ PRAKTYCZNA:
 * — gotowanie podwójnej porcji nie kosztuje dwa razy więcej pracy, tylko
 *   tyle samo plus przełożenie do pojemnika,
 * — ale naczynie ma swoją pojemność i przy dwóch domach robi się to
 *   partiami — to trzeba powiedzieć, zanim ktoś się rozczaruje,
 * — i rzecz najważniejsza: to jest robota, którą ktoś w rodzinie wykonuje
 *   REGULARNIE i której nikt nie liczy.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH ZALECEŃ O PRZECHOWYWANIU I TRANSPORCIE JEDZENIA. Ile godzin,
 *   w jakiej temperaturze, jak długo w lodówce — to jest dziedzina,
 *   w której zła rada szkodzi, a ja nie jestem od tego (zasada
 *   ze Skierniewic obowiązuje tu tak samo).
 * — ŻADNYCH SUGESTII ZDROWOTNYCH dotyczących osoby, której się wozi
 *   jedzenie. Nie wiem, dlaczego ktoś nie gotuje, i nie mam prawa zgadywać.
 *
 * ROZGRANICZENIE. Wieliczka i inne strony mówią o gotowaniu dla własnego
 * domu. Kartuzy — o dwóch gospodyniach w jednej kuchni. Tutaj chodzi
 * o jedzenie, które opuszcza dom.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Stargard ma zachowany średniowieczny pierścień murów obronnych z bramami.
 */
export const STARGARD: CityContent = {
  slug: "stargard",
  h1: "Thermomix Stargard – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Stargard — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Stargardzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stargard — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Stargardzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Stargardu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Stargard i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Stargardzie – jak wygląda prezentacja?",
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
      id: "dla-dwoch-domow",
      heading: "Miasto bram — i jedzenie, które wychodzi z domu",
      paragraphs: [
        "Stargard ma zachowany pierścień średniowiecznych murów z bramami, przez które od wieków coś z miasta wynoszono i do miasta wnoszono. Wykorzystam ten obraz do sytuacji, która zdarza się w polskich domach bez przerwy, a której nie opisuje żaden materiał o takim sprzęcie: gotowania dla dwóch domów.",
        "Chodzi o porcję, którą się komuś zawozi. Rodzicom w środę. Dziecku, które wynajmuje pokój w innym mieście. Siostrze po porodzie. Sąsiadce, która wróciła ze szpitala. To jest robota, którą ktoś w rodzinie wykonuje regularnie, przez lata, i której nikt nie liczy — a jest jej sporo, bo to nie jest jeden obiad, tylko dwa.",
        "Tutaj urządzenie robi rzecz prostą i niebanalną: podwójna porcja kosztuje mniej więcej tyle samo pracy, co pojedyncza. Nie trzeba stać dwa razy dłużej, bo i tak się nie stoi — zmienia się tylko to, że po wszystkim przekłada się część do pojemnika. Cała oszczędność siedzi w tym, że pilnowanie garnka nie mnoży się przez dwa.",
        "Powiem od razu, gdzie jest granica, żeby nikt nie liczył na cuda. Naczynie ma swoją pojemność — około dwóch litrów — więc podwójna porcja dla dwóch wieloosobowych domów to już są dwa podejścia, a nie jedno. Przy zupie dla czterech osób plus porcji dla rodziców zwykle wystarczy raz; przy obiedzie dla sześciu plus drugiego domu — nie. To jest liczba, którą warto sprawdzić na własnym przykładzie i chętnie policzę to z Wami na spotkaniu.",
        "Zaznaczę też, czego tu nie znajdziecie. Nie doradzam, jak długo przewozić ugotowane jedzenie ani jak je trzymać — to jest dziedzina, w której zła rada realnie komuś szkodzi, a ja nie jestem od tego. Robicie to tak, jak robiliście dotąd; urządzenie nie zmienia w tej sprawie nic.",
        "I rzecz ostatnia, mniej techniczna. Jeśli jesteście tą osobą, która co tydzień wozi komuś obiad, to prawdopodobnie nikt Wam za to nie podziękował ani razu. Nie sprzedam Wam za to sprzętu i nie o to chodzi — chcę tylko powiedzieć, że przy takim rozkładzie tygodnia to urządzenie ma sens większy niż w domu, w którym gotuje się wyłącznie dla siebie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Stargardzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz, dla ilu osób realnie gotujesz — łącznie z tymi, którym zawozisz. Od tego zależy, co warto na spotkaniu policzyć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Stargardzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla stargardzkiej rodziny",
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

  districtsHeading: "Do których części Stargardu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Zachód",
    "Kluczewo",
    "Lotnisko",
    "Pyrzyckie",
    "Chopina",
    "Letnie",
    "Tarnowskie",
    "Hallera",
  ],

  nearbyHeading: "Poza Stargard też przyjadę",
  nearbyParagraphs: [
    "Szczecin, Goleniów, Pyrzyce i Choszczno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Szczecin", "Goleniów", "Pyrzyce", "Choszczno", "Nowogard", "Maszewo"],

  about: blokOMnie("do Stargardu", "w Stargardzie i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Stargardu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Stargardzie"),
    {
      question: "Gotuję też dla rodziców. Czy da się zrobić podwójną porcję?",
      answer:
        "Da się i to jest jedna z tych sytuacji, w których taki sprzęt naprawdę pomaga: podwójna porcja kosztuje mniej więcej tyle samo pracy, co pojedyncza, bo i tak nie trzeba stać nad garnkiem. Granicą jest pojemność naczynia — około dwóch litrów — więc przy dwóch wieloosobowych domach robi się to w dwóch podejściach.",
    },
    {
      question: "Jak długo można przewozić ugotowane jedzenie?",
      answer:
        "Tego nie doradzam i mówię wprost dlaczego: to jest dziedzina, w której zła rada może komuś zaszkodzić, a ja nie jestem od bezpieczeństwa żywności. Róbcie tak, jak robiliście dotąd — urządzenie nie zmienia w tej sprawie niczego.",
    },
  ],

  geo: { lat: 53.3364, lng: 15.0322 },
};
