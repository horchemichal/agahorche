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
 * JAROSŁAW — dawne wielkie miasto kupieckie nad Sanem. W XVI i XVII wieku
 * jarmarki jarosławskie były jednymi z największych w Europie Środkowej,
 * a pod rynkiem do dziś ciągną się podziemne piwnice kupieckie, dziś
 * udostępnione jako trasa turystyczna.
 *
 * KĄT: piwnica. To brzmi jak ciekawostka, ale prowadzi do bardzo
 * praktycznej i wciąż żywej rzeczy: PRZECHOWYWANIA. W Jarosławiu
 * i okolicy dużo domów wciąż ma piwnicę z prawdziwego zdarzenia —
 * z ziemniakami, słoikami i zapasem na zimę. To zupełnie inne podejście
 * do jedzenia niż lodówka i zakupy na trzy dni, i wymaga innej rozmowy:
 * nie o szybkości, tylko o robieniu zapasu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Jarosław był w XVI i XVII wieku jednym z najważniejszych ośrodków
 *   handlowych tej części Europy, słynącym z jarmarków,
 * — pod rynkiem znajdują się wielopoziomowe podziemia kupieckie,
 *   udostępnione jako Podziemna Trasa Turystyczna,
 * — miasto leży nad Sanem i jest siedzibą powiatu jarosławskiego,
 * — Opactwo Benedyktynek to jeden z charakterystycznych zabytków miasta,
 * — Jarosław sąsiaduje z Przemyślem, Przeworskiem i Radymnem.
 *
 * CZEGO NIE MA: dat i liczb dotyczących jarmarków, głębokości piwnic,
 * porad dotyczących przechowywania żywności podanych jako zalecenia.
 */
export const JAROSLAW: CityContent = {
  slug: "jaroslaw",
  h1: "Thermomix Jarosław – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Jarosław — prezentacja i cena",
  seoDescription:
    "Thermomix w Jarosławiu: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat jarosławski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jarosław — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jarosławiu i w okolicy. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Jarosławia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Kombatantów, Widnej Górze czy Garbarzach. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Jarosław i cały powiat jarosławski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jarosławiu – jak wygląda prezentacja?",
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
      id: "piwnica",
      heading: "Miasto piwnic — czyli rozmowa o zapasie, nie o pośpiechu",
      paragraphs: [
        "Pod jarosławskim rynkiem ciągną się wielopoziomowe piwnice kupieckie — zostały po czasach, gdy tutejsze jarmarki należały do największych w tej części Europy, a towar trzeba było gdzieś trzymać. Dziś można je zwiedzać, ale ważniejsze jest to, że sama idea nigdzie nie zniknęła.",
        "W Jarosławiu i okolicy wciąż bardzo dużo domów ma prawdziwą piwnicę: ziemniaki w skrzyni, słoiki na półkach, zapas na zimę. To zupełnie inne podejście do jedzenia niż lodówka i zakupy na trzy dni — i wymaga innej rozmowy o urządzeniu w kuchni.",
        "Bo argument „ugotujesz szybciej” w takim domu niewiele znaczy. Znaczy natomiast to, że robienie zapasu przestaje wymagać całego dnia. Powidła, przeciery, sosy i musy gotują się z ustawioną temperaturą i mieszaniem, bez stania przy garnku i bez przypalonego dna. Można wstawić po kolacji, a nie poświęcać na to sobotę. Kiszonki, wędzenie i to, co dzieje się w samej piwnicy, zostają oczywiście po Waszej stronie.",
        "Druga rzecz: gotowanie z tego, co z piwnicy już wyjęte. Zupa z warzyw korzeniowych, farsz do pierogów, ciasto — w jednym naczyniu, bez przekładania. To jest ta kuchnia, którą tu widzę najczęściej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jarosławiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Jeżdżę po całym powiecie jarosławskim, a od kierunku zależy tylko godzina, którą mogę zaproponować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jarosławiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jarosławskiej rodziny",
      paragraphs: [
        "W jarosławskich domach obiad częściej niż w wielkim mieście jest wspólnym posiłkiem o mniej więcej stałej porze, a gotuje się z zapasu, nie z codziennych zakupów.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie trzech naczyń po jednej zupie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których dzielnic Jarosławia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Kombatantów",
    "Widna Góra",
    "Garbarze",
    "Głęboka",
    "Zamiechów",
    "Kruhel Pełkiński",
    "Leżajska",
    "Pruchnicka",
  ],

  nearbyHeading: "Cały powiat jarosławski i okolice",
  nearbyParagraphs: [
    "Radymno, Pruchnik, Sieniawa, Laszki i Wiązownica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Przemyśla, Przeworska i Lubaczowa.",
  ],
  nearbyTowns: [
    "Przemyśl",
    "Przeworsk",
    "Radymno",
    "Lubaczów",
    "Leżajsk",
    "Oleszyce",
    "Rzeszów",
  ],

  about: blokOMnie("do Jarosławia", "w Jarosławiu i całym powiecie", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jarosławia bez dodatkowej opłaty?",
      answer:
        "Tak, do Jarosławia i do całego powiatu jarosławskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja — proszę tylko o umówienie terminu z kilkudniowym wyprzedzeniem, bo to daleki kraniec regionu.",
    },
    ...faqWspolne("w Jarosławiu"),
    {
      question: "Robimy zapasy na zimę — czy Thermomix to ułatwi?",
      answer:
        "Ułatwi część, która zajmuje najwięcej czasu: gotowanie powideł, przecierów, musów i sosów z ustawioną temperaturą i mieszaniem, bez stania przy garnku. Wyparzanie słoików, kiszenie i to, co dzieje się w piwnicy, zostają po Twojej stronie — i tak powinno być, bo tego żadne urządzenie nie zrobi.",
    },
    {
      question: "Czy możemy umówić prezentację dla kilku osób naraz?",
      answer:
        "Bardzo chętnie. Skoro i tak jadę w tę stronę kawał drogi, dwa czy trzy spotkania w jednym dniu są dla mnie łatwiejsze do zaplanowania — a dla Was to zwykle szybszy termin.",
    },
  ],

  geo: { lat: 50.0173, lng: 22.6778 },
};
