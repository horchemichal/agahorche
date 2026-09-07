import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * KOŚCIERZYNA — jedno z głównych miast Kaszub, z muzeum kolejnictwa,
 * w którym stare parowozy stoją obok czynnej linii. Stare i nowe
 * obok siebie, bez wyrzucania jednego z nich.
 *
 * KĄT: w kuchni stoi już inny robot. Mikser, blender kielichowy,
 * malakser albo robot planetarny — kupiony wcześniej, często drogi
 * i wciąż sprawny. Pytanie, czy trzeba go teraz wyrzucić.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — nie, nie trzeba, i namawianie do tego byłoby marnowaniem cudzych
 *   pieniędzy,
 * — te sprzęty realnie się nakładają w części zastosowań i to trzeba
 *   przyznać, zamiast udawać, że każdy robi coś innego,
 * — ale są rzeczy, w których stary sprzęt zostaje lepszy: robot
 *   planetarny przy dużych partiach ciasta, blender kielichowy przy
 *   jednym koktajlu, mikser ręczny przy drobnej robocie,
 * — i pytanie właściwe przed decyzją: co z tego, co macie, naprawdę
 *   działa co tydzień — a nie ile sprzętów „zniknie".
 *
 * TWARDE GRANICE:
 * — ŻADNEGO DEPRECJONOWANIA INNYCH URZĄDZEŃ ani marek. Nie porównuję
 *   się z konkretnymi produktami i nie mówię, że coś jest gorsze.
 * — ŻADNYCH TWIERDZEŃ, ŻE COŚ ZASTĘPUJE, jeśli nie jestem pewna.
 * — ŻADNYCH PORAD O SPRZEDAŻY UŻYWANEGO SPRZĘTU ani wycen.
 *
 * ROZGRANICZENIE. Police mówią o tym, czego to nie zastąpi (piekarnik,
 * patelnia, nóż), Ostrowiec o „jednym urządzeniu zamiast pięciu",
 * Bolesławiec o wymianie starszego modelu tej samej marki, Starogard
 * Gdański o szafce z nieużywanym sprzętem. Tutaj chodzi o INNY,
 * SPRAWNY ROBOT, który już stoi w kuchni.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kościerzyna jest jednym z głównych miast Kaszub i ma muzeum
 *   kolejnictwa.
 */
export const KOSCIERZYNA: CityContent = {
  slug: "koscierzyna",
  h1: "Thermomix Kościerzyna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kościerzyna — prezentacja i cena",
  seoDescription:
    "Thermomix w Kościerzynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kościerzyna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kościerzynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kościerzyny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Kościerzyna i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sprawnego sprzętu nie trzeba wyrzucać, żeby zrobić miejsce.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kościerzynie – jak wygląda prezentacja?",
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
      id: "mam-juz-inny-robot",
      heading: "Miasto, w którym parowozy stoją obok czynnej linii — a w kuchni stoi już robot",
      paragraphs: [
        "W Kościerzynie stare parowozy stoją w muzeum obok linii, po której nadal jeździ się na co dzień. Nikt nie uznał, że jedno wyklucza drugie. Wykorzystam ten obraz do sytuacji, którą zastaję w co drugiej kuchni: stoi tam już robot planetarny, malakser, blender kielichowy albo dobry mikser — kupiony wcześniej, często niemały wydatek, i wciąż całkiem sprawny.",
        "Odpowiem od razu na pytanie, które za tym stoi: nie, nie trzeba go wyrzucać. Namawianie kogokolwiek do pozbycia się działającego sprzętu, żeby zrobić miejsce dla mojego, byłoby marnowaniem cudzych pieniędzy i nie zamierzam tego robić. Nie będę też mówić, że tamte urządzenia są gorsze — nie porównuję się z konkretnymi produktami i nie mam do tego ani podstaw, ani ochoty.",
        "Uczciwie za to przyznam rzecz, którą sprzedawcy zwykle pomijają: te sprzęty naprawdę się nakładają. W części zastosowań — rozdrabnianie, miksowanie, ubijanie, wyrabianie — robią to samo, tylko inaczej. Udawanie, że każdy z nich zajmuje się czymś zupełnie innym, jest po prostu nieprawdą i wystarczy tydzień, żeby to zauważyć.",
        "Są jednak rzeczy, w których to, co macie, zostaje wygodniejsze. Robot planetarny przy dużej partii ciasta ma po prostu większą misę. Blender kielichowy do jednego koktajlu jest szybszy, bo mniej się go potem myje. Mikser ręczny przy drobnej robocie wyciąga się z szuflady w sekundę. To są prawdziwe przewagi i nie widzę powodu, żeby ich nie wymienić.",
        "Właściwe pytanie przed decyzją brzmi więc inaczej, niż zwykle się je stawia. Nie „ile sprzętów mi zniknie”, tylko „co z tego, co mam, naprawdę pracuje co tydzień”. Jeśli robot planetarny wychodzi z szafki dwa razy w roku, to nie jest argument przeciw niczemu — to jest informacja o tym, jak wygląda Wasza kuchnia. A jeśli pracuje co niedzielę, niech pracuje dalej.",
        "Na spotkaniu chętnie zrobimy rzecz, która to rozstrzygnie szybciej niż rozmowa: ugotujmy coś, co normalnie robicie na tamtym sprzęcie. Wtedy sami zobaczycie, gdzie jest różnica, gdzie jej nie ma i czy w Waszej kuchni w ogóle jest miejsce na oba. Nie będę też doradzać, co zrobić ze starym urządzeniem, gdyby jednak miało odejść — sprzedaż i wyceny to nie moja dziedzina.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kościerzynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, jaki sprzęt już macie i co na nim robicie — zrobimy na spotkaniu właśnie to.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kościerzynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kościerskiej rodziny",
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

  districtsHeading: "Do których części Kościerzyny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Tysiąclecia",
    "Kaliska",
    "Osiedle Kościuszki",
    "Sikorskiego",
    "Wybudowanie",
    "Osiedle Nad Jeziorem",
  ],

  nearbyHeading: "Poza Kościerzynę też przyjadę",
  nearbyParagraphs: [
    "Kartuzy, Skarszewy, Stara Kiszewa i Nowa Karczma są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kartuzy", "Skarszewy", "Bytów", "Starogard Gdański", "Gdańsk", "Chojnice"],

  about: blokOMnie("do Kościerzyny", "w Kościerzynie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kościerzyny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kościerzynie"),
    {
      question: "Mam już dobry robot kuchenny. Czy muszę się go pozbyć?",
      answer:
        "Nie i nie będę do tego namawiać — pozbywanie się sprawnego sprzętu, żeby zrobić miejsce dla mojego, to marnowanie cudzych pieniędzy. Przyznam za to, że te urządzenia naprawdę się nakładają w części zastosowań; udawanie, że każde robi coś zupełnie innego, jest nieprawdą.",
    },
    {
      question: "W czym mój dotychczasowy sprzęt zostaje lepszy?",
      answer:
        "Robot planetarny przy dużej partii ciasta ma większą misę. Blender kielichowy do jednego koktajlu jest szybszy, bo mniej się go potem myje. Mikser ręczny przy drobnej robocie wyciąga się z szuflady w sekundę. To prawdziwe przewagi i nie widzę powodu, żeby ich nie wymienić.",
    },
  ],

  geo: { lat: 54.1219, lng: 17.9814 },
};
