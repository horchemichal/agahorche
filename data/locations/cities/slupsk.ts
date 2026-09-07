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
 * SŁUPSK — największe miasto środkowego Pomorza, kilkanaście kilometrów
 * od morza, z portem rybackim w pobliskiej Ustce.
 *
 * KĄT: ryba. To jest jedyne miejsce w serwisie na produkt, którego cała
 * reszta stron praktycznie nie tyka: RYBA — co się w tym urządzeniu udaje,
 * a czego nie zrobi nigdy.
 *
 * SEKCJA MA BYĆ TECHNICZNA I ROZSTRZYGAJĄCA. Na parze ryba wychodzi
 * bardzo dobrze, bo to metoda wybaczająca i kontrolowana czasem.
 * SMAŻENIA NIE MA I NIE BĘDZIE — dorsz w panierce zostaje przy patelni,
 * i tak trzeba to napisać, bo w mieście nadmorskim każda ściema zostanie
 * natychmiast zauważona.
 *
 * DRUGA CZĘŚĆ, MNIEJ OCZYWISTA I WARTA WIĘCEJ: zapach. Gotowanie ryby
 * w zamkniętym naczyniu nie roznosi zapachu po mieszkaniu tak jak
 * smażenie — a to jest u wielu osób jedyny prawdziwy powód, dla którego
 * ryby w domu nie robią.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Słupsk leży kilkanaście kilometrów od morza, a w pobliskiej Ustce
 *   jest port rybacki.
 *
 * CZEGO NIE MA: porad zdrowotnych, zaleceń dotyczących ilości ryb
 * w diecie ani niczego o świeżości i przechowywaniu jako normie sanitarnej.
 */
export const SLUPSK: CityContent = {
  slug: "slupsk",
  h1: "Thermomix Słupsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Słupsk — prezentacja i cena",
  seoDescription:
    "Thermomix w Słupsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Słupsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Słupsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Słupska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Słupsk i okolica"),

  heroPhoto: {
    src: "/zdjecia/thermomix-tm7-varoma.webp",
    alt: "Thermomix TM7 z nasadką Varoma — gotowanie na parze",
    caption: "Varoma pozwala ugotować osobną porcję równolegle z resztą obiadu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Słupsku – jak wygląda prezentacja?",
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
      id: "ryba",
      heading: "Blisko morza — więc porozmawiajmy o rybie",
      paragraphs: [
        "Ze Słupska do morza jest kilkanaście kilometrów, a w Ustce stoi port rybacki. W takim mieście nie da się opowiadać bajek o rybie, bo połowa rozmówców wie o niej więcej ode mnie. Napiszę więc krótko i rozstrzygająco, co to urządzenie z rybą robi, a czego nie zrobi nigdy.",
        "Zacznę od tego, czego nie zrobi, żeby nie było nieporozumień. Nie usmaży. Dorsz w panierce, płastuga na złoto, ryba z chrupiącą skórą — to jest robota dla patelni i tak zostanie, bo para nie robi skórki. Jeżeli w Waszym domu ryba znaczy „smażona”, to urządzenie nie zmieni w tej sprawie niczego i lepiej wiedzieć to od razu.",
        "A teraz to, co wychodzi naprawdę dobrze. Ryba na parze w Varomie udaje się prawie zawsze, i to z konkretnego powodu: przy parze najłatwiej przesuszyć rybę o kilka minut za długo, a tutaj czas jest ustawiony i nie zależy od tego, czy ktoś zajrzy do garnka. Filet wychodzi zwarty, a nie rozpadnięty. Można pod spodem gotować ziemniaki albo warzywa i mieć cały obiad naraz — bez drugiego garnka.",
        "Dobrze wychodzą też rzeczy, które robi się z ryby, a nie z rybą: pasta na kanapki z wędzonej makreli, farsz do pierogów albo krokietów, zupa rybna i wywar, który potem zostaje na drugi dzień. To są dania, przy których zwykle brudzi się pół kuchni.",
        "Zostaje sprawa, która według mnie jest tu najważniejsza, a mówi się o niej najrzadziej. Zapach. Bardzo wiele osób nie robi ryby w domu nie dlatego, że nie lubi, tylko dlatego, że po usmażeniu całe mieszkanie pachnie do następnego dnia — a przy małym mieszkaniu i praniu na suszarce to jest realny argument. W zamkniętym naczyniu ten problem po prostu znika. Nie mówię, że nie pachnie wcale; mówię, że nie pachnie w przedpokoju.",
        "Powiedzcie przy umawianiu, czy jecie rybę i jaką. Przywiozę i zrobimy ją razem, zamiast opowiadać o niej na sucho.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Słupsku?",
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
    sekcjaCena("w Słupsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla słupskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że drugi element obiadu może powstać równolegle na parze. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem.",
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

  districtsHeading: "Do których części Słupska i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Zatorze",
    "Nadrzecze",
    "Ryczewo",
    "Westerplatte",
    "Niepodległości",
    "Akademickie",
    "Kobylnica",
    "Redzikowo",
  ],

  nearbyHeading: "Poza Słupsk też przyjadę",
  nearbyParagraphs: [
    "Ustka, Kępice, Lębork i Sławno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ustka", "Kępice", "Lębork", "Sławno", "Miastko", "Łeba"],

  about: blokOMnie("do Słupska", "w Słupsku i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Słupska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Słupsku"),
    {
      question: "Czy w Thermomixie zrobię rybę?",
      answer:
        "Na parze tak i wychodzi bardzo dobrze — czas jest ustawiony, więc filet nie schodzi przesuszony, a pod spodem gotują się ziemniaki albo warzywa. Smażonej nie: dorsz w panierce i ryba z chrupiącą skórą zostają przy patelni, bo para nie robi skórki.",
    },
    {
      question: "Nie robię ryby w domu, bo potem wszystko pachnie. Czy to pomoże?",
      answer:
        "Tak i to jest według mnie najmocniejszy argument w tej sprawie. Gotowanie odbywa się w zamkniętym naczyniu, więc zapach nie roznosi się po mieszkaniu tak jak przy smażeniu. Nie twierdzę, że nie pachnie wcale — twierdzę, że nie pachnie w przedpokoju do następnego dnia.",
    },
  ],

  geo: { lat: 54.4641, lng: 17.0287 },
};
