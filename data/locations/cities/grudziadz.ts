import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * GRUDZIĄDZ — miasto nad Wisłą ze słynną panoramą spichrzów, budowanych
 * po to, żeby przechowywać zboże.
 *
 * KĄT: chleb. Miasto spichrzów jest jedynym właściwym miejscem na jedyną
 * rzecz, którą ludzie najczęściej wyobrażają sobie po zakupie i najczęściej
 * porzucają: PIECZENIE WŁASNEGO CHLEBA.
 *
 * SEKCJA MA ROZSTRZYGNĄĆ NIEPOROZUMIENIE, KTÓRE JEST ŹRÓDŁEM ROZCZAROWAŃ:
 * THERMOMIX NIE PIECZE. Wyrabia ciasto — i robi to bardzo dobrze — ale
 * pieczenie odbywa się w piekarniku. Kto kupuje go „na chleb", nie wiedząc
 * o tym, jest rozczarowany już przy pierwszym bochenku.
 *
 * DRUGA CZĘŚĆ, UCZCIWA: co realnie odpada z roboty (wyrabianie, mąka
 * na rękach, umyta miska), a co zostaje i nie zniknie (czas wyrastania,
 * rozgrzany piekarnik, blacha do umycia).
 *
 * ROZGRANICZENIE. Namysłów mówi „czego nie da się przyspieszyć" — tam
 * chodzi o czas jako składnik. Tutaj chodzi o podział pracy przy jednym
 * konkretnym wypieku i o rozwianie konkretnego złudzenia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Grudziądzu zachowała się panorama spichrzów nad Wisłą,
 * — spichrze służyły do przechowywania zboża.
 */
export const GRUDZIADZ: CityContent = {
  slug: "grudziadz",
  h1: "Thermomix Grudziądz – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Grudziądz — prezentacja i cena",
  seoDescription:
    "Thermomix w Grudziądzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Grudziądz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Grudziądzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Grudziądza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Grudziądz i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Grudziądzu – jak wygląda prezentacja?",
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
      id: "chleb",
      heading: "Miasto spichrzów — i najczęstsze nieporozumienie o chlebie",
      paragraphs: [
        "Grudziądz ma nad Wisłą rząd spichrzów, w których od stuleci trzymano zboże. To dobre miejsce na rozmowę o chlebie, a konkretnie na rozwianie nieporozumienia, przez które więcej osób bywa rozczarowanych niż przez cokolwiek innego w tym urządzeniu.",
        "Nieporozumienie brzmi tak: „kupię Thermomixa i będę piec chleb”. Otóż Thermomix nie piecze. Nie ma w nim funkcji pieczenia i nigdy nie było. Wyrabia ciasto, a chleb piecze się w piekarniku — dokładnie tak samo jak dotąd. Wolę powiedzieć to na stronie niż patrzeć, jak ktoś dowiaduje się o tym w domu przy pierwszym bochenku.",
        "Skoro to jasne, to teraz rzecz druga: wyrabianie ciasta jest jedną z najlepszych rzeczy, jakie ten sprzęt robi, i przy chlebie realnie zmienia sprawę.",
        "Co odpada z roboty. Odpada dziesięć minut wyrabiania przy misce, czyli ta część, przy której najczęściej się odpuszcza. Odpada mąka na rękach, na blacie i na podłodze. Odpada mycie miski i skrobaka. Odpada odmierzanie w szklankach, bo waga jest wbudowana, a przy chlebie proporcja mąki do wody decyduje o wszystkim. Odpada wreszcie zgadywanie, czy woda nie jest za gorąca dla drożdży — ustawia się temperaturę i tyle.",
        "A teraz to, co zostaje i nie zniknie, bo tego nie da się obejść. Zostaje czas wyrastania — godzina albo dwie, i żadne urządzenie tego nie skróci. Zostaje rozgrzanie piekarnika i sam wypiek. Zostaje blacha albo forma do umycia. Jeśli ktoś liczy, że chleb zrobi się „sam”, to nie zrobi: zrobi się bez wysiłku, ale nie bez czasu.",
        "Uczciwe podsumowanie: to urządzenie nie sprawia, że zaczynasz piec chleb. Sprawia, że przestajesz przestawać. Bo próg wejścia spada na tyle, że wieczorne nastawienie ciasta przestaje być decyzją, a robi się odruchem — i po dwóch miesiącach okazuje się, że pieczywa kupuje się o połowę mniej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Grudziądzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli interesuje Cię głównie pieczywo, powiedz to — nastawię ciasto na początku spotkania, żeby zdążyło wyrosnąć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Grudziądzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla grudziądzkiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że ciasto wyrabia się samo. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Grudziądza i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Tarpno",
    "Strzemięcin",
    "Rządz",
    "Lotnisko",
    "Kuntersztyn",
    "Mniszek",
    "Owczarki",
    "Sikorskiego",
  ],

  nearbyHeading: "Poza Grudziądz też przyjadę",
  nearbyParagraphs: [
    "Radzyń Chełmiński, Łasin, Chełmno i Jabłonowo Pomorskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radzyń Chełmiński", "Łasin", "Chełmno", "Jabłonowo Pomorskie", "Wąbrzeźno", "Kwidzyn"],

  about: blokOMnie("do Grudziądza", "w Grudziądzu i okolicy", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Grudziądza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Grudziądzu"),
    {
      question: "Czy Thermomix upiecze mi chleb?",
      answer:
        "Nie — i to jest najczęstsze nieporozumienie w tej sprawie. Thermomix nie piecze i nie ma takiej funkcji; wyrabia ciasto, a chleb piecze się w piekarniku, tak samo jak dotąd. Wolę powiedzieć to od razu niż patrzeć, jak ktoś dowiaduje się przy pierwszym bochenku.",
    },
    {
      question: "Co przy chlebie realnie odpada, a co zostaje?",
      answer:
        "Odpada dziesięć minut wyrabiania, mąka na rękach i blacie, mycie miski, odmierzanie w szklankach i zgadywanie temperatury wody. Zostaje czas wyrastania — godzina albo dwie, których nic nie skróci — rozgrzanie piekarnika i blacha do umycia. Chleb robi się bez wysiłku, ale nie bez czasu.",
    },
  ],

  geo: { lat: 53.4837, lng: 18.7536 },
};
