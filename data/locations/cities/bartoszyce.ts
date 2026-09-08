import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * BARTOSZYCE — miasto nad Łyną. Najstarszy zabytek to dwie kamienne
 * figury zwane Babami, potocznie Bartkiem i Gustebaldą — para, kobieta
 * i mężczyzna, stojąca obok siebie od bardzo dawna.
 *
 * KĄT: gotuje mężczyzna. Cała ta strona — i cała ta branża — mówi
 * domyślnie do kobiety. Warto to nazwać i przestać zakładać.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — teksty o tym urządzeniu piszą się domyślnie do kobiety i moja strona
 *   też tak wygląda; to jest przyzwyczajenie branży, nie fakt o kuchni,
 * — w części domów, do których jeżdżę, gotuje mężczyzna — codziennie,
 *   nie od święta i nie przy grillu,
 * — praktyczny wniosek: pytam, KTO gotuje, i to z tą osobą rozmawiam,
 *   niezależnie od tego, kto do mnie zadzwonił,
 * — na prezentacji urządzenie prowadzi ta osoba, która będzie gotować.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH UOGÓLNIEŃ O TYM, JAK GOTUJĄ KOBIETY, A JAK MĘŻCZYŹNI. Bez
 *   żartów o grillu i bez „męskiego" gotowania. To ma być o tym, KOGO
 *   się pyta, a nie o cechach przypisanych płci.
 * — ŻADNYCH LICZB o tym, ile procent klientów to mężczyźni. Nie mam
 *   takich danych.
 * — Bez moralizowania i bez robienia z tego manifestu.
 *
 * ROZGRANICZENIE. Staszów mówi o tym, kto w domu umie obsłużyć sprzęt,
 * Grodzisk Mazowiecki o osobie nieobecnej na prezentacji, Gdańsk
 * o różnicy zdań w parze. Tutaj chodzi o DOMYŚLNE ZAŁOŻENIE, do kogo
 * mówi sprzedawca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Bartoszyce leżą nad Łyną,
 * — najstarszy zabytek miasta to dwie kamienne figury (baby pruskie)
 *   zwane Bartkiem i Gustebaldą, datowane na I tysiąclecie n.e.,
 * — Brama Lidzbarska (1468) jest jedyną zachowaną z trzech dawnych bram.
 */
export const BARTOSZYCE: CityContent = {
  slug: "bartoszyce",
  h1: "Thermomix Bartoszyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bartoszyce — prezentacja i cena",
  seoDescription:
    "Thermomix w Bartoszycach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bartoszyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bartoszycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bartoszyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Bartoszyce i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pytam, kto gotuje — i z tą osobą rozmawiam.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bartoszycach – jak wygląda prezentacja?",
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
      id: "kto-w-domu-gotuje",
      heading: "Bartek i Gustebalda — i pytanie, kto u Was właściwie gotuje",
      paragraphs: [
        "Najstarszą rzeczą w Bartoszycach nie jest żaden kościół ani brama, tylko dwie kamienne figury zwane Babami, a potocznie Bartkiem i Gustebaldą. Stoją obok siebie od bardzo dawna — para, dwie osoby, nie jedna. Wykorzystam to do rzeczy, którą widać na mojej własnej stronie i której wolę nie zamiatać pod dywan.",
        "Teksty o tym urządzeniu piszą się domyślnie do kobiety. Moja strona też tak wygląda: w wielu miejscach jest „klientka”, jest mowa o mamie, o gotowaniu dla dzieci. To nie jest wynik jakiegoś przekonania, tylko przyzwyczajenie całej branży, powtarzane od lat i przeze mnie także. Nazywam je, bo dopiero nazwane przestaje być niewidoczne.",
        "Tymczasem w części domów, do których jeżdżę, obiad robi mężczyzna. Codziennie, w tygodniu, a nie od święta i nie przy grillu w ogrodzie. Nie mam pojęcia, ilu ich jest, i nie będę podawać żadnych procentów, bo takich danych po prostu nie posiadam. Wiem tylko, że zdarza się to na tyle często, żeby przestać zakładać z góry.",
        "Nie zamierzam też opowiadać, że kobiety gotują tak, a mężczyźni inaczej. Nie widzę takiej różnicy i nie mam ochoty jej wymyślać, żeby tekst brzmiał ciekawiej. Kto gotuje codziennie, ten po prostu gotuje, i pytania ma dokładnie te same: ile to zajmuje, ile trzeba przy tym stać, co się potem myje.",
        "Praktyczny wniosek jest prosty i tak pracuję. Przy umawianiu pytam, kto w domu gotuje — nie kto dzwoni, nie kto płaci, tylko kto stoi w kuchni w środę o osiemnastej. Z tą osobą rozmawiam na spotkaniu i pod nią dobieram dania. Bywa, że dzwoni jedna osoba, a gotuje druga, i wtedy proszę, żeby ta druga też była.",
        "Na spotkaniu urządzenie prowadzi ta osoba, która będzie z niego korzystać, a ja się nie wtrącam. Nie dlatego, że tak wypada, tylko dlatego, że to jedyny sposób, żeby ktokolwiek dowiedział się czegoś sensownego. Patrzenie na cudze ręce niczego nie rozstrzyga — ani u kobiety, ani u mężczyzny.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bartoszycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, kto u Was gotuje na co dzień — dobiorę dania pod tę osobę i to ona poprowadzi urządzenie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bartoszycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bartoszyckiej rodziny",
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

  districtsHeading: "Do których części Bartoszyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie ma oficjalnego podziału na osiedla, więc przy umawianiu wystarczy podać ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  // Brak potwierdzonej listy osiedli — ani urząd, ani BIP jej nie publikują.
  // Wpisanie tu zgadywanych nazw byłoby podaniem niesprawdzonej informacji
  // jako faktu, więc lista zostaje pusta i szablon jej nie renderuje.
  districts: [],

  nearbyHeading: "Poza Bartoszyce też przyjadę",
  nearbyParagraphs: [
    "Sępopol, Bisztynek, Górowo Iławeckie i Lidzbark Warmiński są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sępopol", "Bisztynek", "Górowo Iławeckie", "Lidzbark Warmiński", "Korsze", "Kętrzyn"],

  about: blokOMnie("do Bartoszyc", "w Bartoszycach i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Bartoszyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bartoszycach"),
    {
      question: "U nas gotuje mąż. Czy to zmienia rozmowę?",
      answer:
        "Zmienia tylko tyle, że rozmawiam z nim, a nie z osobą, która do mnie zadzwoniła. Przy umawianiu pytam, kto gotuje na co dzień — nie kto dzwoni i nie kto płaci — i pod tę osobę dobieram dania. Na spotkaniu to ona prowadzi urządzenie, a ja się nie wtrącam.",
    },
    {
      question: "Dlaczego na stronie jest wszędzie „klientka”?",
      answer:
        "Bo tak pisze się w tej branży od lat i ja też tak pisałam, nie zastanawiając się nad tym. To przyzwyczajenie, a nie przekonanie — w części domów, do których jeżdżę, obiad robi mężczyzna, codziennie i w tygodniu. Nie zamierzam za to opowiadać, że kobiety gotują inaczej niż mężczyźni; nie widzę takiej różnicy.",
    },
  ],

  geo: { lat: 54.2517, lng: 20.8092 },
};
