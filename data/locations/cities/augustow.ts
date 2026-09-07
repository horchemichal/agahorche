import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * AUGUSTÓW — miasto nad jeziorami, przy Kanale Augustowskim: drodze wodnej
 * wykopanej w dziewiętnastym wieku łopatami, ze śluzami obsługiwanymi
 * ręcznie do dziś.
 *
 * KĄT: co nadal robię ręcznie. Miasto ręcznie obsługiwanych śluz jest
 * jedynym właściwym miejscem na sekcję, której nie napisze żaden
 * sprzedawca: LISTA CZYNNOŚCI, KTÓRE MIMO POSIADANIA TEGO URZĄDZENIA
 * NADAL WYKONUJĘ RĘKĄ — i dlaczego.
 *
 * SEKCJA MA BYĆ KONKRETNA I OSOBISTA. To ma być lista Agi, a nie ogólne
 * rozważania: ziemniaki na sałatkę, cebula do surówki, mięso na kotlety,
 * ubijanie jednego białka, siekanie natki. Powody są różne i trzeba
 * je podać: raz chodzi o konsystencję, raz o to, że mycie naczynia trwa
 * dłużej niż sama czynność.
 *
 * PO CO TO JEST: bo dokładnie ta lista jest dowodem, że urządzenie
 * NIE ZASTĘPUJE kuchni, tylko część roboty — a strona, która tego nie
 * mówi, kłamie przez przemilczenie.
 *
 * ROZGRANICZENIE. Nowa Słupia ma „czego to urządzenie NIE zastąpi"
 * — tam chodzi o sprzęty i o granice możliwości. Tutaj chodzi o czynności,
 * które urządzenie WYKONAĆ POTRAFI, a mimo to nie warto mu ich zlecać.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kanał Augustowski powstał w dziewiętnastym wieku, a jego śluzy
 *   są obsługiwane ręcznie.
 */
export const AUGUSTOW: CityContent = {
  slug: "augustow",
  h1: "Thermomix Augustów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Augustów — prezentacja i cena",
  seoDescription:
    "Thermomix w Augustowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Augustów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Augustowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Augustowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Augustów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Augustowie – jak wygląda prezentacja?",
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
      id: "co-robie-recznie",
      heading: "Śluzy otwierane ręcznie — i lista tego, co ja nadal robię ręką",
      paragraphs: [
        "Kanał Augustowski wykopano łopatami dwieście lat temu, a jego śluzy do dziś otwiera się ręcznie — bo tak po prostu jest sensowniej. Wykorzystam to do sekcji, której nie napisze żaden sprzedawca: do listy rzeczy, które mimo posiadania tego urządzenia nadal robię ręką.",
        "Ziemniaki na sałatkę kroję nożem. Urządzenie potrafi je pokroić, ale przy sałatce chodzi o równe kostki, a nie o to, żeby było szybko — i po rozdrobnieniu wychodzi z tego coś między kostką a papką. Nóż i deska są tu po prostu lepsze.",
        "Cebulę do surówki i do sałatki też kroję ręcznie, z tego samego powodu. Rozdrobniona cebula puszcza sok i robi się ostra w smaku; pokrojona nożem zostaje cebulą. Do sosu czy do zupy — owszem, wtedy rozdrabniam, bo i tak się rozgotuje.",
        "Mięso na kotlety mielone przepuszczam przez maszynkę, jeśli mam ją pod ręką. Urządzenie zmieli, ale różnica w strukturze jest wyczuwalna i to nie jest kwestia gustu.",
        "Jednego białka nie ubijam w urządzeniu, bo przy tak małej ilości robi to gorzej niż zwykła trzepaczka — a do tego myje się potem całe naczynie zamiast jednej miski.",
        "I rzecz, która brzmi najgłupiej, a jest najczęstsza: natki, koperku i szczypiorku nie siekam maszyną. Nóż zajmuje piętnaście sekund, a mycie naczynia po zieleninie — trzy minuty. To jest zasada, którą warto stosować szeroko: jeśli mycie trwa dłużej niż sama czynność, nie warto.",
        "Po co Wam ta lista przed zakupem. Bo jest jedynym uczciwym dowodem na to, że to urządzenie nie zastępuje kuchni, tylko przejmuje jej część — tę, przy której trzeba stać, mieszać i pilnować. Reszta zostaje po Waszej stronie i tak ma być.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez lukru" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Augustowie?",
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
    sekcjaCena("w Augustowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla augustowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix przejmuje tę część roboty, przy której trzeba stać i pilnować — a nie całą kuchnię. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Augustowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Śródmieście",
    "Lipowiec",
    "Klonownica",
    "Zarzecze",
    "Borki",
    "Wojciech",
    "Białobrzegi",
    "Studzieniczna",
    "Sajenek",
  ],

  nearbyHeading: "Poza Augustów też przyjadę",
  nearbyParagraphs: [
    "Suwałki, Sztabin, Lipsk i Rączki są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Suwałki", "Sztabin", "Lipsk", "Rączki", "Dąbrowa Białostocka"],

  about: blokOMnie("do Augustowa", "w Augustowie i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Augustowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Augustowie"),
    {
      question: "Czy po zakupie wszystko robi się już w urządzeniu?",
      answer:
        "Nie i sama sporo rzeczy robię ręką: ziemniaki i cebulę na sałatkę kroję nożem, bo po rozdrobnieniu wychodzi z nich coś między kostką a papką; mięso na kotlety przepuszczam przez maszynkę; jednego białka nie ubijam, bo trzepaczka robi to lepiej; natki nie siekam, bo nóż zajmuje piętnaście sekund, a mycie naczynia trzy minuty.",
    },
    {
      question: "Jaka jest zasada, kiedy warto użyć urządzenia?",
      answer:
        "Najprostsza brzmi tak: jeśli mycie naczynia trwa dłużej niż sama czynność, nie warto. Urządzenie przejmuje tę część roboty, przy której trzeba stać, mieszać i pilnować — nie całą kuchnię.",
    },
  ],

  geo: { lat: 53.8433, lng: 22.9794 },
};
