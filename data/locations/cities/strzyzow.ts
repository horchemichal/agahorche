import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * STRZYŻÓW — miasto powiatowe nad Wisłokiem, między Rzeszowem
 * a Krosnem, na Pogórzu Strzyżowskim. Zabudowa okolicy jest rozłożona
 * po wzgórzach i dolinach, a Strzyżów jest dla niej ośrodkiem: tu są
 * szkoły średnie, urząd i szpital.
 *
 * KĄT: autobus szkolny. Skoro szkoły średnie dla całego powiatu są
 * w Strzyżowie, to w bardzo wielu domach dzień rodziny układa się wokół
 * kursu autobusu — wyjazd o szóstej rano, powrót po piętnastej.
 * To zupełnie inny rytm niż praca zmianowa czy dojazd do korporacji:
 * ŚNIADANIE JEST O NIELUDZKIEJ PORZE, a prawdziwy posiłek dopiero
 * po powrocie, gdy dziecko jest głodne jak wilk.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Strzyżów leży nad Wisłokiem, na Pogórzu Strzyżowskim, między
 *   Rzeszowem a Krosnem,
 * — miasto jest siedzibą powiatu strzyżowskiego (m.in. Czudec, Frysztak,
 *   Niebylec, Wiśniowa, Strzyżów-gmina),
 * — w pobliskiej Stępinie zachował się schron kolejowy z czasów II wojny
 *   światowej, dziś udostępniony do zwiedzania,
 * — zabudowa powiatu jest rozproszona, rozłożona wzdłuż dolin i na
 *   wzgórzach,
 * — Strzyżów jest ośrodkiem szkolnictwa średniego dla okolicznych gmin.
 *
 * CZEGO NIE MA: rozkładów jazdy, danych o liczbie uczniów, porad
 * żywieniowych dla dzieci — od tego są lekarz i dietetyk.
 */
export const STRZYZOW: CityContent = {
  slug: "strzyzow",
  h1: "Thermomix Strzyżów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Strzyżów — prezentacja i cena",
  seoDescription:
    "Thermomix w Strzyżowie: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat strzyżowski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Strzyżów — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Strzyżowie i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Strzyżowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Czudca, Frysztaka, Niebylca i Wiśniowej.",

  highlights: highlightyStandardowe("Strzyżów i cały powiat strzyżowski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Strzyżowie – jak wygląda prezentacja?",
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
      id: "autobus",
      heading: "Dzień ułożony wokół autobusu",
      paragraphs: [
        "Strzyżów jest ośrodkiem dla całego powiatu: tu są szkoły średnie, urząd i szpital, a wsie rozłożone są po wzgórzach i dolinach dookoła. W bardzo wielu domach dzień układa się więc nie wokół pracy, tylko wokół kursu autobusu.",
        "Wygląda to tak: pobudka przed szóstą, śniadanie o porze, o której nikt nie ma ochoty jeść, kanapka do plecaka, a potem długa przerwa. Prawdziwy posiłek jest dopiero po powrocie, po piętnastej, gdy dziecko wraca głodne jak wilk i musi coś zjeść od razu — nie za czterdzieści minut.",
        "To jest bardzo konkretne zadanie kuchenne i nie ma z nim nic wspólnego „szybki obiad dla zapracowanych”. Chodzi o dwie rzeczy: żeby o szóstej rano dało się podać coś ciepłego bez stania przy kuchence, i żeby po piętnastej obiad był gotowy albo dał się odgrzać tak, by nadal był obiadem.",
        "Owsianka albo kakao z rana powstaje w kilka minut, w tym samym naczyniu, bez pilnowania mleka. Obiad ugotowany wcześniej może czekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. To nie jest rewolucja — to jest po prostu ta część poranka i popołudnia, którą da się z kogoś zdjąć.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Strzyżowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość — jeżdżę po całym powiecie strzyżowskim, a zabudowa jest tu rozłożona po wzgórzach, więc od kierunku zależy pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Strzyżowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla strzyżowskiej rodziny",
      paragraphs: [
        "Gdy dzieci wracają o stałej porze, a rodzice o różnych, obiad musi być gotowy wcześniej i musi przetrwać czekanie. To zwykle robota jednej osoby, codziennie.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać rano albo w południe i poczekać, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których części Strzyżowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych wsi, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Zawiśle",
    "Żarnowa",
    "Dobrzechów",
    "Godowa",
    "Glinik Charzewski",
    "Tropie",
    "Grodzisko",
  ],

  nearbyHeading: "Cały powiat strzyżowski i okolice",
  nearbyParagraphs: [
    "Czudec, Frysztak, Niebylec i Wiśniowa są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Rzeszowa, Krosna, Jasła i Brzozowa.",
  ],
  nearbyTowns: [
    "Rzeszów",
    "Krosno",
    "Brzozów",
    "Jasło",
    "Ropczyce",
    "Boguchwała",
  ],

  about: blokOMnie("do Strzyżowa", "w Strzyżowie i całym powiecie", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Strzyżowa bez dodatkowej opłaty?",
      answer:
        "Tak, do Strzyżowa i do całego powiatu strzyżowskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Strzyżowie"),
    {
      question: "Dzieci wyjeżdżają autobusem o szóstej — co da się zrobić z rana?",
      answer:
        "Owsiankę, kakao albo koktajl w kilka minut, w jednym naczyniu i bez pilnowania mleka. To nie brzmi jak rewolucja i nią nie jest — ale o szóstej rano różnica między „coś ciepłego” a „kanapka na sucho” jest większa, niż się wydaje. Na prezentacji zrobimy to, co Wasze dzieci realnie jedzą.",
    },
    {
      question: "Czy przyjedziesz do Czudca albo Frysztaka?",
      answer:
        "Tak, jeżdżę po całym powiecie strzyżowskim. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 49.8722, lng: 21.7911 },
};
