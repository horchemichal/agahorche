import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * GLIWICE — miasto akademickie w środku regionu przemysłowego. Politechnika
 * Śląska sprawia, że struktura gospodarstw domowych jest tu inna niż
 * w sąsiednim Zabrzu czy Bytomiu: dużo mieszkań jedno- i dwuosobowych,
 * dużo osób, które przyjechały skądinąd i nie mają tu babci gotującej
 * niedzielny obiad. Strona jest zbudowana wokół tego, bo to jedyna rzecz,
 * której nie da się powiedzieć o pozostałych miastach konurbacji.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Politechnika Śląska ma siedzibę w Gliwicach i jest największą uczelnią
 *   techniczną regionu,
 * — Radiostacja Gliwice to najwyższa drewniana konstrukcja na świecie,
 * — Kanał Gliwicki łączy miasto z Odrą; port rzeczny działa do dziś,
 * — Wilcze Gardło to osiedle patronackie z lat 30. XX wieku o czytelnym,
 *   promienistym układzie ulic,
 * — Łabędy to dzielnica z własną, odrębną historią, przyłączona do miasta
 *   w połowie XX wieku.
 *
 * CZEGO NIE MA: liczby studentów (zmienna, nie mam potwierdzonej), nazw
 * konkretnych firm z podaną liczbą zatrudnionych, cen mieszkań.
 */
export const GLIWICE: CityContent = {
  slug: "gliwice",
  h1: "Thermomix Gliwice – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Gliwice — prezentacja i cena",
  seoDescription:
    "Thermomix w Gliwicach: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Aktualna cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gliwice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Gliwicach. Gotujemy razem u Ciebie, ratę liczymy na miejscu, bez zobowiązania.",

  lead:
    "Przyjeżdżam do Gliwic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Sikorniku, w Łabędach czy w Sośnicy. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("całe Gliwice, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gliwicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i składnikami, więc nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy realnie: obiad, coś słodkiego i chętnie coś z tego, co masz pod ręką. Jeśli powiesz wcześniej, ile osób siada u Was do stołu i czego nie jecie, dobiorę dania pod Was.",
        "Na koniec przechodzimy do liczb — cena, promocja, rata przy różnych okresach spłaty. Nie musisz decydować tego samego dnia i nie płacisz za spotkanie niezależnie od tego, co postanowisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "miasto-akademickie",
      heading: "Miasto, w którym gotuje się dla jednej i dla dwóch osób",
      paragraphs: [
        "Gliwice są miastem Politechniki Śląskiej i to widać w kuchniach. Bardzo dużo tutejszych gospodarstw to jedna albo dwie osoby — studenci, doktoranci, młodzi inżynierowie, którzy przyjechali skądinąd. W takim domu nie ma babci, która przekazała, jak się robi rosół, i nie ma niedzielnego rytuału gotowania na sześć osób.",
        "To zmienia całą rozmowę o Thermomiksie. Najczęstsze pytanie nie brzmi „czy przyspieszy niedzielny obiad”, tylko „czy w ogóle ma sens, skoro gotuję dla siebie”. Odpowiadam na nie uczciwie: przy jednej osobie urządzenie nie zwraca się oszczędnością na dużych obiadach. Zwraca się wtedy, gdy sprawia, że zaczynasz gotować zamiast zamawiać — bo znika etap, który zniechęca, czyli stanie przy garnku i mycie trzech naczyń po jednym daniu.",
        "Jeżeli po rozmowie uznam, że przy Twoim trybie życia to się nie opłaci, powiem to wprost. Wolę stracić sprzedaż niż mieć klientkę, która po miesiącu odstawia urządzenie na szafkę.",
      ],
      links: [{ href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gliwicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — ustalenie terminu zajmuje kilka minut. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj przy okazji dzielnicę. Łabędy to zupełnie inny kierunek niż Sośnica, a od tego zależy, jaką godzinę mogę Ci zaproponować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gliwicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gliwickiej rodziny",
      paragraphs: [
        "Obok mieszkań jednoosobowych Gliwice mają całe dzielnice domów jednorodzinnych i rodzin z dziećmi — Ostropa, Bojków, Wilcze Gardło, Brzezinka. Tam problem jest odwrotny: nie „czy warto dla jednej osoby”, tylko „jak zdążyć z obiadem, gdy każdy wraca o innej porze”.",
        "Thermomix rozwiązuje to brakiem konieczności pilnowania. Obiad może być gotowy wcześniej i poczekać albo powstawać w tle. Gotowanie i miksowanie dzieje się w jednym naczyniu, więc nie ma przekładania gorącej zupy do blendera.",
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

  districtsHeading: "Do których dzielnic Gliwic dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — od Śródmieścia po Łabędy i Bojków.",
    "Gliwice mają zarówno gęstą zabudowę wielorodzinną, jak i dzielnice o charakterze niemal wiejskim. Powiedz przy umawianiu, gdzie mieszkasz i jak wygląda dojazd — resztę zaplanuję sama.",
  ],
  districts: [
    "Śródmieście",
    "Zatorze",
    "Trynek",
    "Sikornik",
    "Sośnica",
    "Łabędy",
    "Kopernika",
    "Politechnika",
    "Szobiszowice",
    "Baildona",
    "Ligota Zabrska",
    "Wojska Polskiego",
    "Żerniki",
    "Wilcze Gardło",
    "Brzezinka",
    "Ostropa",
    "Bojków",
    "Czechowice",
    "Stare Gliwice",
    "Wójtowa Wieś",
  ],

  nearbyHeading: "Poza Gliwice też przyjadę",
  nearbyParagraphs: [
    "Gliwice leżą na zachodnim krańcu konurbacji, więc naturalnie obsługuję przy okazji Zabrze, Knurów i Pyskowice, a dalej całą metropolię aż po Katowice.",
  ],
  nearbyTowns: ["Zabrze", "Knurów", "Pyskowice", "Bytom", "Ruda Śląska", "Rybnik", "Katowice"],

  about: blokOMnie("do Gliwic", "w Gliwicach i całej metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gliwic bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Gliwic jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Gliwicach"),
    {
      question: "Czy Thermomix ma sens, jeśli gotuję tylko dla siebie?",
      answer:
        "Bywa, że tak, a bywa, że nie — i to jest uczciwa odpowiedź. Przy jednej osobie urządzenie zarabia na siebie nie ilością, tylko tym, że znika bariera przed gotowaniem: nie stoisz przy garnku i nie zostaje Ci stos naczyń. Na spotkaniu przeliczymy to na Twoim tygodniu, a nie na ogólnych hasłach.",
    },
    {
      question: "Czy przyjedziesz do Łabęd albo do Bojkowa?",
      answer:
        "Tak, do każdej dzielnicy. Powiedz tylko przy umawianiu, gdzie dokładnie — Gliwice są rozległe i od tego zależy pora, którą mogę zaproponować.",
    },
  ],

  geo: { lat: 50.2945, lng: 18.6714 },
};
