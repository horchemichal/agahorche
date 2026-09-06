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
 * RZESZÓW — stolica Podkarpacia i jedyne duże miasto regionu. Rośnie
 * szybciej niż reszta województwa, w dużej mierze przez przyłączanie
 * okolicznych sołectw i napływ ludzi z mniejszych miejscowości.
 *
 * KĄT: to jest miasto, w którym prawie nikt nie jest stąd od pokoleń.
 * Osiedla zapełniają ludzie z podkarpackich wsi i miasteczek — i stąd
 * zjawisko, którego nie ma w Katowicach: WEEKEND U RODZICÓW I BAGAŻNIK
 * PEŁEN JEDZENIA. Wracasz w niedzielę wieczorem z warzywami, słoikami,
 * ćwiartką mięsa i workiem jabłek, których nikt nie planował. To jest
 * realny, codzienny problem kuchenny i nikt o nim nie pisze.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Rzeszów jest stolicą województwa podkarpackiego i jego największym
 *   miastem; przez ostatnie dekady wielokrotnie powiększał granice
 *   o okoliczne sołectwa,
 * — miasto jest ośrodkiem akademickim (Politechnika Rzeszowska,
 *   Uniwersytet Rzeszowski) i centrum Doliny Lotniczej,
 * — leży nad Wisłokiem,
 * — dzielnice takie jak Budziwój, Słocina, Załęże, Zwięczyca czy Przybyszówka
 *   były wcześniej odrębnymi miejscowościami.
 *
 * CZEGO NIE MA: danych o wzroście liczby ludności, statystyk migracji,
 * liczby studentów.
 */
export const RZESZOW: CityContent = {
  slug: "rzeszow",
  h1: "Thermomix Rzeszów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Rzeszów — prezentacja i cena",
  seoDescription:
    "Thermomix w Rzeszowie: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie osiedla. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rzeszów — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rzeszowie. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Rzeszowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Nowym Mieście, Baranówce, Zalesiu czy w Budziwoju. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Rzeszów, wszystkie osiedla"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rzeszowie – jak wygląda prezentacja?",
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
      id: "bagaznik-od-rodzicow",
      heading: "Niedziela wieczorem i bagażnik, którego nikt nie planował",
      paragraphs: [
        "Rzeszów rośnie inaczej niż miasta na Śląsku. Tam ludzie mieszkają w tym samym mieście od pokoleń; tutaj osiedla zapełniają w dużej części osoby, które przyjechały z podkarpackich wsi i miasteczek — na studia, do pracy w Dolinie Lotniczej, do pierwszego własnego mieszkania. Miasto zresztą samo przyłączało kolejne sołectwa, więc granica między „miastem” a „wsią” bywa tu kwestią jednej ulicy.",
        "Ma to bardzo konkretną konsekwencję kuchenną, o której nikt nie pisze, a którą zna tu każdy: niedzielny powrót od rodziców. Wracasz z bagażnikiem, którego nikt nie planował — worek jabłek, dwa kilo ziemniaków, słoiki, ćwiartka mięsa, cukinia wielkości przedramienia. Wszystko dobre i wszystko naraz.",
        "I w poniedziałek zaczyna się prawdziwe pytanie: co z tym zrobić, zanim się zepsuje, mając trzy wieczory w tygodniu i małą kuchnię w bloku. Bo wyrzucić szkoda podwójnie — raz jedzenie, dwa czyjąś pracę.",
        "Thermomix odpowiada dokładnie na to. Zupa krem z warzyw, które zaraz zwiotczeją, przecier z nadmiaru pomidorów, mus jabłkowy do słoików, farsz z mięsa — wszystko w jednym naczyniu, z ustawioną temperaturą i mieszaniem, więc nie trzeba przy tym stać po pracy. Nie zmienia tego, ile dostajesz od rodziców. Zmienia to, ile z tego faktycznie zjecie.",
      ],
      links: [
        { href: "/przepisy/co-mam-w-lodowce", label: "Sprawdź, co ugotujesz z tego, co masz" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rzeszowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj osiedle i piętro — Budziwój czy Słocina to inny kierunek niż Baranówka, a przy sprzęcie w walizce przydaje mi się też informacja, czy w bloku jest winda. Na cenę spotkania nie wpływa to nigdy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rzeszowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rzeszowskiej rodziny",
      paragraphs: [
        "W rzeszowskich blokach mieszka dużo młodych rodzin, często bez babci na miejscu — a to zmienia więcej, niż się wydaje. Nie ma kto odebrać dziecka ani przywieźć garnka zupy w środę, więc wszystko musi się zmieścić w wieczorze dwojga zmęczonych ludzi.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się dzieckiem, a wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, blender i sitko.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu i w tym samym czasie.",
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

  districtsHeading: "Do których osiedli Rzeszowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do dzielnic przyłączonych do miasta, które wciąż wyglądają jak wsie.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Nowe Miasto",
    "Baranówka",
    "Zalesie",
    "Krakowska Południe",
    "Pobitno",
    "Staroniwa",
    "Drabinianka",
    "Wilkowyja",
    "Słocina",
    "Załęże",
    "Budziwój",
    "Zwięczyca",
    "Przybyszówka",
    "Biała",
    "Miłocin",
    "Dworzysko",
  ],

  nearbyHeading: "Poza Rzeszów też przyjadę",
  nearbyParagraphs: [
    "Łańcut, Boguchwała, Głogów Małopolski, Sokołów Małopolski, Strzyżów, Ropczyce i Sędziszów Małopolski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Łańcut",
    "Boguchwała",
    "Głogów Małopolski",
    "Sokołów Małopolski",
    "Strzyżów",
    "Ropczyce",
    "Sędziszów Małopolski",
    "Kolbuszowa",
    "Dębica",
  ],

  about: blokOMnie("do Rzeszowa", "w Rzeszowie i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rzeszowa bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich osiedli Rzeszowa jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rzeszowie"),
    {
      question: "Dostaję dużo jedzenia od rodziców i część się marnuje — czy to się da ogarnąć?",
      answer:
        "Da i to jest tutaj jeden z częstszych powodów zakupu. Zupa krem z warzyw, które zaraz zwiotczeją, mus jabłkowy do słoików albo przecier z pomidorów powstają w jednym naczyniu i bez pilnowania — czyli mieszczą się w zwykłym wieczorze po pracy. Na prezentacji chętnie zrobię to z tego, co akurat przywiozłaś.",
    },
    {
      question: "Mieszkam na osiedlu bez windy — czy to problem?",
      answer:
        "Nie, ale powiedz o tym przy umawianiu, żebym wiedziała, ile czasu zająć mi zajmie wniesienie sprzętu. Na cenę ani na przebieg spotkania to nie wpływa.",
    },
  ],

  geo: { lat: 50.0413, lng: 21.9990 },
};
