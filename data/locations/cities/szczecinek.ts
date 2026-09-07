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
 * SZCZECINEK — miasto nad jeziorem Trzesiecko, w środku Pojezierza
 * Drawskiego, w połowie drogi między Szczecinem, Koszalinem i Piłą.
 * Do każdego z nich jest daleko.
 *
 * KĄT: jak układam trasę. To jest jedyne miejsce w serwisie, w którym
 * wyjaśniam rzecz wyglądającą na moją prywatną sprawę, a mającą realny
 * wpływ na klientkę: DLACZEGO PROPONUJĘ KONKRETNY DZIEŃ, a nie ten,
 * o który ktoś prosi.
 *
 * SEKCJA MA BYĆ SZCZERA CO DO WŁASNEGO INTERESU. Trasa układa się tak,
 * żeby kilka spotkań wypadło blisko siebie — bo inaczej ta praca po prostu
 * się nie spina. Klientka na tym nie traci nic, ale ma prawo wiedzieć,
 * dlaczego dostaje propozycję „czwartek albo za dwa tygodnie".
 *
 * ROZGRANICZENIE. Kłodzko mówi o zimie i przejezdności dróg. Biała
 * Podlaska — „nie jestem tu po drodze" (odległość jako fakt). Tutaj chodzi
 * o mechanikę układania kalendarza i o to, co z niej wynika dla terminu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Szczecinek leży nad jeziorem Trzesiecko, w środku Pojezierza
 *   Drawskiego, daleko od Szczecina, Koszalina i Piły.
 */
export const SZCZECINEK: CityContent = {
  slug: "szczecinek",
  h1: "Thermomix Szczecinek – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Szczecinek — prezentacja i cena",
  seoDescription:
    "Thermomix w Szczecinku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczecinek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szczecinku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szczecinka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Szczecinek i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczecinku – jak wygląda prezentacja?",
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
      id: "jak-ukladam-trase",
      heading: "Dlaczego proponuję konkretny dzień, a nie ten, o który prosisz",
      paragraphs: [
        "Szczecinek leży mniej więcej w połowie drogi między Szczecinem, Koszalinem i Piłą, co w praktyce znaczy, że do wszystkiego jest stąd daleko. Dlatego wyjaśnię rzecz, która wygląda na moją prywatną sprawę, a Was dotyczy bezpośrednio: jak układam kalendarz i dlaczego czasem proponuję termin zamiast przyjąć ten, o który prosicie.",
        "Zasada jest prosta i nie ma w niej nic wstydliwego: staram się, żeby kilka spotkań w tej samej okolicy wypadło jednego dnia albo w kolejnych dniach. Jeżeli przyjeżdżam tu na trzysta kilometrów po jedno spotkanie, to ta praca się nie spina — i wolę powiedzieć to wprost, niż udawać, że jestem wszędzie i zawsze.",
        "Co z tego wynika dla Was. Czasami usłyszycie ode mnie propozycję: „mogę w czwartek albo dopiero za dwa tygodnie”. To nie jest technika sprzedażowa ani sztuczna presja — to jest zwykły rozkład jazdy jednej osoby, która jeździ samochodem. Jeśli czwartek nie pasuje, umawiamy się za dwa tygodnie i nic złego się nie dzieje.",
        "Co z tego wynika dla mnie i dlaczego to mówię. Bo mam do Was prośbę, która na tym korzysta: jeśli ktoś ze znajomych albo z rodziny też chce zobaczyć urządzenie, warto powiedzieć o tym przy umawianiu. Nie po to, żebym miała komu sprzedawać — nie zamierzam Was o kontakty prosić — tylko dlatego, że dwa spotkania w jednej okolicy tego samego dnia oznaczają, że termin znajdzie się szybciej.",
        "I rzecz ostatnia, żeby nie było wątpliwości: odległość nigdy nie wpływa na cenę ani na to, czy przyjadę. Wpływa wyłącznie na to, kiedy. Prezentacja w Szczecinku kosztuje tyle samo co w Krakowie, czyli nic.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szczecinku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj kilka terminów, które Wam pasują, zamiast jednego. Wtedy dużo łatwiej dopasować to do trasy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szczecinku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla szczecineckiej rodziny",
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
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Szczecinka i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Trzesieka",
    "Świątki",
    "Marcelin",
    "Bugno",
    "Wilcze Laski",
    "Dąbie",
    "Turowo",
    "Gałowo",
    "Parsęcko",
  ],

  nearbyHeading: "Poza Szczecinek też przyjadę",
  nearbyParagraphs: [
    "Borne Sulinowo, Czaplinek, Biały Bór i Połczyn-Zdrój są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Borne Sulinowo", "Czaplinek", "Biały Bór", "Połczyn-Zdrój", "Złocieniec"],

  about: blokOMnie("do Szczecinka", "w Szczecinku i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szczecinka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Odległość nigdy nie wpływa na cenę ani na to, czy przyjadę — wpływa wyłącznie na to, kiedy.",
    },
    ...faqWspolne("w Szczecinku"),
    {
      question: "Dlaczego proponujesz konkretny dzień zamiast tego, o który proszę?",
      answer:
        "Bo staram się, żeby kilka spotkań w tej samej okolicy wypadło jednego dnia — przy trzystu kilometrach po jedno spotkanie ta praca się nie spina. To nie jest technika sprzedażowa ani presja, tylko rozkład jazdy jednej osoby jeżdżącej samochodem. Jeśli proponowany termin nie pasuje, umawiamy się później i nic złego się nie dzieje.",
    },
    {
      question: "Da się przyspieszyć termin?",
      answer:
        "Najczęściej tak, jeśli ktoś ze znajomych albo z rodziny też chce zobaczyć urządzenie — dwa spotkania w jednej okolicy tego samego dnia znajdują się w kalendarzu szybciej. Nie proszę Cię o kontakty i nie będę o nie pytać; mówię tylko, jak to działa.",
    },
  ],

  geo: { lat: 53.7075, lng: 16.7003 },
};
