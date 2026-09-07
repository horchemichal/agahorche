import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * ŚREM — miasto nad Wartą z odlewnią, jednym z większych zakładów
 * tego typu w kraju. W odlewni nic nie idzie na produkcję bez formy
 * sprawdzonej wcześniej.
 *
 * KĄT: „czy mogę to wypożyczyć albo wypróbować przez tydzień?".
 * Pytanie zupełnie rozsądne przy takiej kwocie, na które uczciwa
 * odpowiedź brzmi: nie mogę tego obiecać — i trzeba to powiedzieć
 * wprost, zamiast zbywać.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — Aga nie może obiecać wypożyczenia ani okresu próbnego: nie ustala
 *   takich zasad i nie będzie składać obietnic w cudzym imieniu,
 * — co MOŻE zaoferować sama i co robi: prezentację z Waszych składników,
 *   drugi przyjazd bez warunków i ugotowanie Waszego zwykłego dania
 *   zamiast pokazowego,
 * — to nie jest to samo co tydzień w domu i nie będę udawać, że jest,
 * — jeśli ktoś obiecuje „zwrot bez pytań" albo „tydzień na próbę",
 *   trzeba to mieć na piśmie w dokumentach, a nie z czyichś ust.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH OBIETNIC O WYPOŻYCZENIACH, okresach próbnych, zwrotach
 *   i warunkach odstąpienia. To są rzeczy z dokumentów, nie z rozmowy
 *   (zasada z Sieradza — żadnych terminów ani liczby dni).
 * — ŻADNYCH SUGESTII, że da się to jakoś załatwić.
 *
 * ROZGRANICZENIE. Sieradz mówi o wycofaniu się PO podpisaniu umowy,
 * Radom o zakupie bez prezentacji, Grodzisk Mazowiecki o drugim
 * przyjeździe dla nieobecnej osoby. Tutaj chodzi o SPRAWDZENIE SPRZĘTU
 * PRZED decyzją.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Śremie działa duża odlewnia, a miasto leży nad Wartą.
 */
export const SREM: CityContent = {
  slug: "srem",
  h1: "Thermomix Śrem – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Śrem — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Śremie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Śrem — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Śremie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Śremu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Śrem i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-7.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie obiecam tygodnia na próbę. Obiecam Wasze danie z Waszych składników.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Śremie – jak wygląda prezentacja?",
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
      id: "czy-moge-wyprobowac",
      heading: "Miasto odlewni — i pytanie „czy mogę to najpierw wypróbować?”",
      paragraphs: [
        "W Śremie działa duża odlewnia, a w odlewni nic nie idzie na produkcję bez formy sprawdzonej wcześniej. Wykorzystam to do pytania, które przy takiej kwocie jest najzupełniej rozsądne, a bywa zbywane ogólnikiem: czy mogę to wypożyczyć albo wypróbować przez tydzień, zanim zdecyduję?",
        "Odpowiem wprost, choć nie jest to odpowiedź, jakiej byście chcieli: nie mogę tego obiecać. Nie ustalam takich zasad i nie będę składać obietnic w cudzym imieniu — a obietnica złożona lekko wraca potem jako pretensja, i to słusznie. Jeśli macie takie pytanie, zadajcie je i sprawdzę, co jest możliwe, ale nie usłyszycie ode mnie „jakoś to załatwimy”.",
        "Powiem za to dokładnie, co mogę zaoferować sama, bo to jest w mojej mocy i z tego korzystajcie do woli. Po pierwsze: gotujemy z Waszych składników, nie z moich. Przywożę je na wszelki wypadek, ale jeśli chcecie zrobić to, co i tak mieliście dziś na obiad, jest to dla mnie lepszy przebieg spotkania niż popis.",
        "Po drugie: przyjeżdżam drugi raz i nie stawiam przy tym żadnych warunków. Nie musicie deklarować, że wtedy będzie decyzja, ani niczego tłumaczyć. Jeśli po pierwszym spotkaniu zostały wątpliwości, drugie kosztuje mnie tylko paliwo, a Wam daje drugie podejście na spokojnie.",
        "Po trzecie: robimy Wasze zwykłe danie, nie efektowne. Danie pokazowe zawsze wychodzi dobrze i właśnie dlatego niczego nie dowodzi. Jeśli w Waszym domu liczy się rosół, kotlet i zupa krem, to zróbmy rosół, a nie coś, czego nigdy więcej nie ugotujecie.",
        "Nie będę natomiast twierdzić, że to jest to samo co tydzień z urządzeniem w domu. Nie jest — godzina to godzina, a codzienność sprawdza się dopiero w codzienności. Jeżeli ktokolwiek obiecuje Wam „tydzień na próbę” albo „zwrot bez pytań”, żądajcie tego na piśmie w dokumentach, które podpisujecie. Ustne zapewnienia, także moje, nie są w takiej sprawie warte tyle, co zapis w papierach.",
      ],
      links: [{ href: "/prezentacja", label: "Umów prezentację" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Śremie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz, co dziś i tak macie na obiad — zróbmy to na spotkaniu zamiast dania pokazowego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Śremie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla śremskiej rodziny",
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

  districtsHeading: "Do których części Śremu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Jeziorany",
    "Helenki",
    "Osiedle Chełmońskiego",
    "Nowe Miasto",
    "Zamenhofa",
    "Psarskie",
  ],

  nearbyHeading: "Poza Śrem też przyjadę",
  nearbyParagraphs: [
    "Kórnik, Książ Wielkopolski, Dolsk i Brodnica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kórnik", "Książ Wielkopolski", "Dolsk", "Mosina", "Poznań", "Kościan"],

  about: blokOMnie("do Śremu", "w Śremie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Śremu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Śremie"),
    {
      question: "Czy mogę wypożyczyć urządzenie na próbę?",
      answer:
        "Nie mogę tego obiecać — nie ustalam takich zasad i nie składam obietnic w cudzym imieniu. Mogę za to zaoferować rzeczy, które są w mojej mocy: gotowanie z Waszych składników, Wasze zwykłe danie zamiast pokazowego i drugi przyjazd bez żadnych warunków.",
    },
    {
      question: "Ktoś obiecuje mi tydzień na próbę albo zwrot bez pytań. Czy to prawda?",
      answer:
        "Nie wiem i nie będę zgadywać. Żądajcie takich zapewnień na piśmie, w dokumentach, które podpisujecie. Ustne obietnice, także moje, nie są w tej sprawie warte tyle, co zapis w papierach.",
    },
  ],

  geo: { lat: 52.0886, lng: 17.0142 },
};
