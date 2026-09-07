import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * LEGIONOWO — jedno z najmłodszych miast w Polsce, wyrosłe w dwudziestym
 * wieku wokół koszar, dziś w dużej części zamieszkane przez ludzi, którzy
 * kupili tu swoje pierwsze mieszkanie.
 *
 * KĄT: pierwsza własna kuchnia. Najmłodsze miasto jest jedynym właściwym
 * miejscem na temat, którego nie ma nigdzie w serwisie: CO NAPRAWDĘ
 * POTRZEBNE JEST NA START, a co się kupuje i potem nie używa.
 *
 * WNIOSEK, KTÓRY MUSI PAŚĆ I JEST NIEWYGODNY DLA SPRZEDAWCY: przy pustej
 * kuchni to urządzenie zwykle NIE jest pierwszym zakupem. Najpierw
 * porządny nóż, deska, dwa garnki i patelnia. Dopiero potem to.
 *
 * ROZGRANICZENIE. Zamość ma „szufladę pełną urządzeń" (co Thermomix
 * zastępuje w kuchni już urządzonej). Głogów — „nie kupujcie kompletu
 * akcesoriów". Tutaj chodzi o kuchnię, w której jeszcze nic nie ma,
 * i o kolejność wydatków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Legionowo jest miastem młodym, powstałym w dwudziestym wieku wokół
 *   koszar,
 * — leży na północ od Warszawy.
 */
export const LEGIONOWO: CityContent = {
  slug: "legionowo",
  h1: "Thermomix Legionowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Legionowo — prezentacja i cena",
  seoDescription:
    "Thermomix w Legionowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Legionowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Legionowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Legionowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Legionowo i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Domowa lemoniada przygotowana w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Na spotkaniu robimy też rzeczy proste — takie, które faktycznie robi się potem co tydzień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Legionowie – jak wygląda prezentacja?",
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
      id: "pierwsza-kuchnia",
      heading: "Najmłodsze miasto — i pierwsza własna kuchnia",
      paragraphs: [
        "Legionowo jest miastem młodym: wyrosło w dwudziestym wieku i do dziś jest miejscem, w którym bardzo wiele osób kupuje swoje pierwsze mieszkanie. Piszę więc do tych, którzy właśnie urządzają pierwszą własną kuchnię — i powiem coś, czego sprzedawca mówić nie powinien.",
        "Przy pustej kuchni to urządzenie zwykle nie jest pierwszym zakupem. I nie jest też drugim.",
        "Pierwsze powinny być rzeczy tanie i niewymienne. Jeden porządny nóż, taki, który się ostrzy, a nie wyrzuca. Deska. Dwa garnki z grubym dnem. Jedna dobra patelnia. Sitko, obieraczka, łyżka drewniana. To wszystko kosztuje ułamek ceny Thermomixa, a bez tego nie ugotujecie nic, także w nim — bo nawet z nim trzeba coś usmażyć, odcedzić i pokroić.",
        "Dopiero gdy to jest, warto rozmawiać o urządzeniu, które robi resztę. I wtedy rozmowa jest zupełnie inna, bo staje się konkretna: ile razy w tygodniu naprawdę gotujecie i czy stanie przy garnku jest tym, czego Wam żal.",
        "Jest natomiast jedna sytuacja, w której kolejność się odwraca, i widzę ją regularnie. To moment, w którym ludzie kupują na start dziesięć małych urządzeń — blender, mikser, robot, młynek, parowar, maszynkę do mielenia — i po roku okazuje się, że wydali podobne pieniądze, mają zapchane szafki i połowy nie używają. Jeśli stoicie właśnie przed takim zestawem zakupów, to warto policzyć to inaczej i wtedy ta rozmowa ma sens od pierwszego dnia.",
        "Powiedzcie mi przy umawianiu, na jakim etapie jesteście. Jeśli wyjdzie, że najpierw nóż i garnki, to właśnie to Wam powiem i wrócimy do tematu za rok.",
      ],
      links: [{ href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Legionowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Napisz, czy kuchnia jest już urządzona, czy dopiero ją kompletujecie. To zmienia całą rozmowę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Legionowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla legionowskiej rodziny",
      paragraphs: [
        "Gdy dorośli dojeżdżają do pracy, dzień kończy się po powrocie, a obiad przygotowuje zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności, i tym, że prowadzi przez przepis krok po kroku — co ma znaczenie, gdy gotowania dopiero się uczycie. Wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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

  districtsHeading: "Do których części Legionowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Piaski",
    "Bukowiec",
    "Jagiellońska",
    "Kozłówka",
    "Grudzie",
    "Łajski",
    "Michałów-Reginów",
    "Chotomów",
    "Jabłonna",
  ],

  nearbyHeading: "Poza Legionowo też przyjadę",
  nearbyParagraphs: [
    "Nowy Dwór Mazowiecki, Łomianki, Zielonka i Wołomin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nowy Dwór Mazowiecki", "Łomianki", "Zielonka", "Wołomin", "Marki", "Radzymin"],

  about: blokOMnie("do Legionowa", "w Legionowie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Legionowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Legionowie"),
    {
      question: "Urządzamy pierwszą kuchnię. Czy zacząć od Thermomixa?",
      answer:
        "Zwykle nie i mówię to jako osoba, która na tym zarabia. Najpierw jeden porządny nóż, deska, dwa garnki z grubym dnem i dobra patelnia — bez tego nie ugotujesz nic także w Thermomixie, bo coś trzeba usmażyć, odcedzić i pokroić. Do tej rozmowy warto wrócić, gdy podstawy już są.",
    },
    {
      question: "A jeśli i tak zamierzamy kupić kilka mniejszych urządzeń?",
      answer:
        "Wtedy kolejność się odwraca i warto policzyć to od razu. Blender, mikser, robot, młynek i parowar kupione osobno kosztują podobnie, zapychają szafki, a po roku połowy się nie używa. Powiedz przy umawianiu, na jakim etapie jesteście — to zmienia całą rozmowę.",
    },
  ],

  geo: { lat: 52.4000, lng: 20.9264 },
};
