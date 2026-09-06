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
 * USTRZYKI DOLNE — brama Bieszczadów Wysokich, siedziba powiatu
 * bieszczadzkiego, najmniej zaludnionego powiatu w Polsce. Miasto żyje
 * w dużej mierze z turystyki górskiej.
 *
 * KĄT: sezon. To jedyne miejsce w obu falach, gdzie rok dzieli się nie
 * na pory roku i nie na dni tygodnia, tylko na SEZON I POZA SEZONEM.
 * W lipcu i sierpniu, w ferie i długie weekendy dom pracuje na pełnych
 * obrotach — gotuje się dla obcych ludzi, codziennie, do godziny.
 * Potem przychodzi listopad i nie ma nikogo. To zupełnie inna kuchnia
 * niż wszędzie indziej i wymaga innej rozmowy: o powtarzalności
 * i o wydajności w tygodniu, w którym nie ma chwili przerwy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Ustrzyki Dolne są siedzibą powiatu bieszczadzkiego, najsłabiej
 *   zaludnionego powiatu w Polsce,
 * — miasto jest jedną z głównych baz wypadowych w Bieszczady Wysokie,
 * — działa tu ośrodek narciarski, więc ruch turystyczny jest także zimą,
 * — Bieszczadzki Park Narodowy i Jezioro Solińskie leżą w pobliżu,
 * — bardzo wiele gospodarstw w powiecie prowadzi kwatery i agroturystykę.
 *
 * CZEGO NIE MA: liczby turystów, danych o kwaterach, statystyk sezonu,
 * porad z zakresu przepisów sanitarnych dotyczących żywienia gości —
 * to rzecz dla sanepidu, nie dla strony sprzedażowej.
 */
export const USTRZYKI_DOLNE: CityContent = {
  slug: "ustrzyki-dolne",
  h1: "Thermomix Ustrzyki Dolne – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Ustrzyki Dolne — prezentacja i cena",
  seoDescription:
    "Thermomix w Ustrzykach Dolnych: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat bieszczadzki. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ustrzyki Dolne — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ustrzykach i w Bieszczadach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Ustrzyk Dolnych z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Czarnej, Lutowisk, Ustrzyk Górnych i dalej w Bieszczady.",

  highlights: highlightyStandardowe("Ustrzyki i cały powiat bieszczadzki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ustrzykach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś, co u Was w domu robi się od lat. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "sezon",
      heading: "Rok podzielony na sezon i poza sezonem",
      paragraphs: [
        "Tutaj rok nie dzieli się na pory roku ani na dni tygodnia, tylko na sezon i na resztę. W lipcu, w sierpniu, w ferie i w długie weekendy dom pracuje na pełnych obrotach: śniadania o ustalonej godzinie, obiady na zamówienie, ktoś zawsze wchodzi i wychodzi. Potem przychodzi listopad i jest cicho.",
        "To zupełnie inna kuchnia niż wszędzie indziej i wymaga innej rozmowy o urządzeniu. W sezonie nie liczy się kreatywność ani to, że coś da się zrobić na piętnaście sposobów. Liczy się, żeby dziesiąte śniadanie wyszło tak samo jak pierwsze, żeby dało się przygotować część wieczorem, i żeby jedna osoba dała radę bez pomocy, gdy druga akurat sprząta pokoje.",
        "Tu urządzenie ma sens bardzo konkretny i ograniczony, więc powiem to uczciwie. Nie zrobi za Was jajecznicy dla dwunastu osób ani nie usmaży naleśników — to zostaje na patelni. Robi natomiast wszystko, co da się przygotować wcześniej i powtarzać identycznie: ciasto na chleb i bułki wyrobione wieczorem, pasty i smarowidła na kilka dni, zupy, kremy, kompoty, sosy. To jest ta część, która w sezonie zjada najwięcej czasu.",
        "A poza sezonem wraca zwykłe domowe gotowanie i przetwory z tego, co urosło. Jedno i drugie w tym samym naczyniu.",
      ],
    },
    {
      id: "uczciwie-o-odleglosci",
      heading: "Uczciwie o dojeździe w góry",
      paragraphs: [
        "Bieszczady to najdalszy i najtrudniejszy komunikacyjnie zakątek, po którym jeżdżę. Dojazd jest bezpłatny tak samo jak wszędzie, ale wyjazd tutaj planuję osobno i z wyprzedzeniem — nie da się tu wpaść po drodze.",
        "Zimą proszę dodatkowo o zapas czasu. Wolę powiedzieć „będę między siedemnastą a osiemnastą” niż obiecać konkretną godzinę i nie dotrzymać jej przez pogodę albo drogę.",
        "Skoro i tak jadę kawał drogi, chętnie umawiam tego samego dnia kilka spotkań. Jeżeli ktoś z sąsiedztwa albo z rodziny też chce zobaczyć urządzenie, powiedzcie od razu — to zwykle znacznie szybszy termin dla wszystkich.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ustrzykach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — najlepiej z kilkoma pasującymi Wam terminami, bo wtedy od razu dogadamy konkret.",
        "Jeśli prowadzicie kwaterę, powiedzcie o tym przy umawianiu i podajcie, kiedy macie ciszej. Prezentacja poza sezonem jest spokojniejsza i zwykle bardziej Wam się przyda.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ustrzykach Dolnych"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bieszczadzkiej rodziny",
      paragraphs: [
        "Poza sezonem wraca zwykłe życie: obiad dla swoich, o mniej więcej stałej porze, gotowany często z własnych produktów i z zapasu.",
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

  districtsHeading: "Do których części Ustrzyk dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, bez dopłaty za dojazd. Ustrzyki są niewielkie, więc dojazd nie wpływa nawet na porę spotkania.",
    "Przy umawianiu przydaje mi się natomiast nazwa miejscowości, jeśli mieszkacie poza samym miastem — w Bieszczadach odległości bywają mylące.",
  ],
  districts: [
    "Centrum",
    "Osiedle Pod Dębami",
    "Osiedle 600-lecia",
    "Strwiążyk",
    "Jasień",
    "Łodyna",
  ],

  nearbyHeading: "Cały powiat bieszczadzki",
  nearbyParagraphs: [
    "Czarna, Lutowiska, Ustrzyki Górne, Solina, Polańczyk i Lesko są w zasięgu tej samej trasy — a skoro i tak jadę w góry, chętnie umawiam kilka spotkań na jeden dzień.",
  ],
  nearbyTowns: [
    "Lesko",
    "Solina",
    "Czarna",
    "Lutowiska",
    "Zagórz",
    "Sanok",
  ],

  about: blokOMnie("do Ustrzyk", "w Ustrzykach i całych Bieszczadach", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ustrzyk Dolnych bez dodatkowej opłaty?",
      answer:
        "Tak, do Ustrzyk i w głąb Bieszczadów — dojazd jest bezpłatny niezależnie od odległości. Proszę tylko o umówienie terminu z wyprzedzeniem i o zapas czasu zimą; takie wyjazdy planuję osobno.",
    },
    ...faqWspolne("w Ustrzykach Dolnych"),
    {
      question: "Prowadzę kwaterę — czy Thermomix pomoże w sezonie?",
      answer:
        "W części pracy tak i powiem uczciwie, w której. Nie usmaży naleśników ani jajecznicy dla dwunastu osób — to zostaje na patelni. Zrobi natomiast wszystko, co da się przygotować wcześniej i powtarzać identycznie: ciasto na chleb i bułki wyrobione wieczorem, pasty na kilka dni, zupy, kompoty i sosy. To zwykle najbardziej czasochłonna część poranka.",
    },
    {
      question: "Kiedy najlepiej umówić prezentację?",
      answer:
        "Poza sezonem, jeśli tylko możecie. W lipcu i sierpniu i tak nie macie godziny spokoju, a wtedy prezentacja jest tylko kolejnym obowiązkiem zamiast czymś, z czego coś wyniesiecie.",
    },
  ],

  geo: { lat: 49.4297, lng: 22.5936 },
};
