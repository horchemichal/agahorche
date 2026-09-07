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
 * BYDGOSZCZ — miasto z filharmonią i akademią muzyczną, w którym uczenie
 * dzieci od najmłodszych lat jest częścią miejskiej tradycji.
 *
 * KĄT: co dziecko REALNIE może robić przy tym urządzeniu. „Gotuj
 * z dzieckiem" to hasło, które w tej branży pada bez przerwy i nigdy nie
 * zostaje rozpisane na konkrety. Tutaj zostaje.
 *
 * SEKCJA MA MIEĆ TRZY CZĘŚCI I ŻADNEJ NIE WOLNO POMINĄĆ:
 * — CO DZIECKO MOŻE: ważyć (waga jest dla dzieci najlepszą częścią całego
 *   sprzętu), wkładać składniki, patrzeć przez pokrywę, uruchomić przy
 *   dorosłym.
 * — CZEGO NIE MOŻE I TU NIE MA MIĘKKICH SFORMUŁOWAŃ: dotykać naczynia
 *   i okolic pokrywy, kiedy jest gorące, oraz brać do ręki noża. Nóż jest
 *   ostry i siedzi na dnie naczynia — to jest jedyny punkt, przy którym
 *   jestem stanowcza.
 * — CZEGO NIE OBIECUJĘ: że to urządzenie jest „bezpieczne dla dzieci".
 *   Żadne nie jest. To jest sprzęt dorosłego, przy którym dziecko pomaga.
 *
 * TWARDE GRANICE:
 * — NIE PODAJĘ GRANIC WIEKOWYCH. Zależą od dziecka, a ja nie jestem od
 *   ich ustalania.
 * — ŻADNYCH PORAD ŻYWIENIOWYCH ANI ZDROWOTNYCH dotyczących dzieci.
 * — NIE OBIECUJĘ, że dziecko „nauczy się gotować" — obiecuję jedną rzecz,
 *   która jest prawdziwa: dzieci chętniej jedzą to, co same robiły.
 *
 * ROZGRANICZENIE. Legionowo mówi o pierwszej własnej kuchni, Ciechanów
 * o tym, kiedy nie kupować, Ostrołęka o strachu przed ekranem. Tutaj
 * przedmiotem jest DZIECKO PRZY BLACIE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Bydgoszcz ma filharmonię i akademię muzyczną, jest miastem
 *   o silnej tradycji muzycznej.
 */
export const BYDGOSZCZ: CityContent = {
  slug: "bydgoszcz",
  h1: "Thermomix Bydgoszcz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bydgoszcz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Bydgoszczy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bydgoszcz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bydgoszczy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bydgoszczy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic i do miejscowości wokół miasta.",

  highlights: highlightyStandardowe("Bydgoszcz i okolica"),

  heroPhoto: {
    src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
    alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
    caption: "Dziecko może przy tym pomagać — ale nie wszystko i nie samo.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bydgoszczy – jak wygląda prezentacja?",
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
      id: "dziecko-przy-blacie",
      heading: "Miasto, które uczy od małego — i co dziecko może przy tym robić",
      paragraphs: [
        "W Bydgoszczy uczenie dzieci od najmłodszych lat jest częścią miejskiej tradycji — filharmonia i akademia muzyczna nie wzięły się znikąd. Wykorzystam to do hasła, które w mojej branży pada bez przerwy i nigdy nie zostaje rozpisane na konkrety: „gotuj z dzieckiem”. Rozpiszę je, bo składa się z trzech części i tylko jedną z nich ktokolwiek wymienia.",
        "Zacznę od tego, co dziecko naprawdę może. Ważyć — i to jest, wbrew pozorom, najlepsza część całego sprzętu dla kilkulatka. Waga jest w naczyniu, cyfry rosną na ekranie i sypanie mąki, aż pokaże się właściwa liczba, potrafi zająć dziecko na dłużej niż cokolwiek innego w kuchni. Może też wkładać składniki, zamykać pokrywę, patrzeć przez nią, jak to się kręci, i uruchomić urządzenie, kiedy dorosły stoi obok.",
        "Teraz część, przy której nie mam zamiaru używać miękkich sformułowań. Naczynie i okolice pokrywy w trakcie gotowania są gorące i dziecko nie ma tam czego szukać. A nóż — nóż jest ostry, siedzi na dnie naczynia i wyjmuje się go przy myciu. To jest jedyny punkt na całej tej stronie, przy którym jestem stanowcza: nóż wyjmuje i myje dorosły, zawsze, bez wyjątków i bez „no ale on jest już duży”.",
        "I rzecz trzecia, której nie powie Wam żaden sprzedawca: to urządzenie nie jest „bezpieczne dla dzieci”. Żadne nie jest. To jest sprzęt dorosłego, przy którym dziecko może pomagać — i tak trzeba o nim myśleć, także wtedy, gdy stoi na blacie i wygląda niewinnie.",
        "Nie podam Wam też granicy wieku, bo jej nie znam. Jedno dziecko w wieku pięciu lat potrafi skupić się na ważeniu, inne w wieku ośmiu nie usiedzi. To Wy wiecie, jak jest u Was, a ja jestem ostatnią osobą, która powinna to rozstrzygać.",
        "Na koniec jedyna obietnica, którą mogę złożyć uczciwie — i akurat ta się sprawdza. Dzieci chętniej jedzą to, co same robiły. Nie dlatego, że nauczyły się gotować, bo nie nauczyły, i nie dlatego, że jedzenie jest lepsze, bo jest takie samo. Po prostu ważenie mąki do naleśników zmienia stosunek do naleśników. To niewiele, ale to prawda, a ja wolę obiecywać rzeczy prawdziwe.",
      ],
      links: [{ href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bydgoszczy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu są dzieci, powiedzcie o tym — nie przeszkadzają mi na spotkaniu, a często to one najbardziej chcą przy tym stać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bydgoszczy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bydgoskiej rodziny",
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

  districtsHeading: "Do których dzielnic Bydgoszczy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Fordon",
    "Szwederowo",
    "Bartodzieje",
    "Wyżyny",
    "Kapuściska",
    "Błonie",
    "Okole",
    "Bielawy",
    "Miedzyń",
    "Osowa Góra",
    "Glinki",
  ],

  nearbyHeading: "Poza Bydgoszcz też przyjadę",
  nearbyParagraphs: [
    "Toruń, Solec Kujawski, Koronowo i Nakło nad Notecią są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Toruń", "Solec Kujawski", "Koronowo", "Nakło nad Notecią", "Inowrocław", "Świecie"],

  about: blokOMnie("do Bydgoszczy", "w Bydgoszczy i okolicy", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bydgoszczy bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bydgoszczy"),
    {
      question: "Co dziecko może robić przy tym urządzeniu?",
      answer:
        "Ważyć — to zwykle najlepsza część dla kilkulatka, bo waga jest w naczyniu, a cyfry rosną na ekranie. Może też wkładać składniki, zamykać pokrywę i uruchomić urządzenie, kiedy dorosły stoi obok. Nie ma natomiast czego szukać przy gorącym naczyniu, a nóż wyjmuje i myje wyłącznie dorosły — przy tym punkcie jestem stanowcza.",
    },
    {
      question: "Czy to urządzenie jest bezpieczne dla dzieci?",
      answer:
        "Nie i nie powie tego uczciwie żaden sprzedawca — żadne takie urządzenie nie jest. To sprzęt dorosłego, przy którym dziecko może pomagać. Nie podam też granicy wieku, bo zależy ona od konkretnego dziecka, a nie ode mnie.",
    },
  ],

  geo: { lat: 53.1235, lng: 18.0084 },
};
