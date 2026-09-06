import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * GOGOLIN — małe miasto między Krapkowicami a Strzelcami Opolskimi,
 * w pasie wapiennym, znane w całej Polsce z ludowej piosenki
 * o Karolince, która poszła do Gogolina. W mieście stoi pomnik Karolinki
 * i Karliczka.
 *
 * KĄT: puste miejsce przy stole. Opolskie jest regionem, z którego bardzo
 * wiele osób wyjechało do pracy za granicę — to fakt powszechnie znany
 * i tutejsi mieszkańcy nie potrzebują, żeby im go tłumaczyć. Piosenka,
 * z której miasto zna cały kraj, opowiada zresztą o kimś, kto wyrusza
 * w drogę, i to jest jedyne miejsce, gdzie mogę połączyć te dwie rzeczy
 * bez naciągania.
 *
 * KUCHENNIE oznacza to dwie rzeczy, o których nikt nie pisze: przez
 * większość roku gotuje się dla mniejszej liczby osób, niż mieszka
 * pod tym adresem, a kilka razy w roku — nagle dla wszystkich naraz,
 * przez dwa tygodnie z rzędu.
 *
 * TON: bez współczucia, bez politycznych komentarzy i bez ocen. To jest
 * po prostu układ życia, który tutaj wiele rodzin zna, i traktuję go
 * jako fakt, a nie jako dramat.
 *
 * ROZGRANICZENIE WOBEC NOWEJ DĘBY („dom, w którym kogoś regularnie nie
 * ma"): tam chodziło o wyjazdy służbowe na dni i tygodnie, tutaj o pracę
 * za granicą i o rytm roczny — powroty na święta i urlop.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — ludowa piosenka o Karolince, która poszła do Gogolina, jest znana
 *   w całej Polsce; w mieście stoi pomnik Karolinki i Karliczka,
 * — Gogolin leży w pasie wapiennym, między Krapkowicami a Strzelcami,
 * — województwo opolskie jest regionem o bardzo dużej skali wyjazdów
 *   zarobkowych za granicę.
 *
 * CZEGO NIE MA: liczb dotyczących emigracji, komentarzy politycznych,
 * cytowania piosenki poza jej powszechnie znanym pierwszym wersem.
 */
export const GOGOLIN: CityContent = {
  slug: "gogolin",
  h1: "Thermomix Gogolin – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Gogolin — prezentacja i cena",
  seoDescription:
    "Thermomix w Gogolinie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gogolin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gogolinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gogolina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Gogolin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gogolinie – jak wygląda prezentacja?",
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
      id: "puste-miejsce-przy-stole",
      heading: "Miasto, które cała Polska zna z piosenki o wyjeździe",
      paragraphs: [
        "Gogolin zna każdy, kto był kiedykolwiek na weselu — z tej jednej piosenki o Karolince, która poszła do Gogolina. W mieście stoi jej pomnik. I chyba nigdzie indziej w Polsce nie ma miasta, którego najbardziej znana wizytówka opowiada o kimś, kto ruszył w drogę.",
        "Piszę o tym, bo na Opolszczyźnie ma to całkiem dosłowny wymiar, którego nikomu tutaj nie trzeba tłumaczyć. Z tego regionu wyjechało do pracy za granicę więcej ludzi niż z jakiegokolwiek innego. W bardzo wielu domach oznacza to jedno konkretne miejsce przy stole, które przez większość roku jest puste.",
        "Nie zamierzam nad tym ubolewać ani tego oceniać — to po prostu układ, w którym żyje tu mnóstwo rodzin i który mają dawno poukładany. Zwrócę uwagę na coś, co z niego wynika w kuchni, a o czym nie pisze żaden poradnik.",
        "Po pierwsze: przez większość roku gotuje się dla mniejszej liczby osób, niż mieszka pod tym adresem. Dwie, czasem jedna. A przepisy, garnki i przyzwyczajenia zostały z czasów, gdy było ich pięć — więc albo się marnuje, albo je się to samo cztery dni.",
        "Po drugie, i to jest ta trudniejsza część: kilka razy w roku wszystko odwraca się w jeden dzień. Wracają na dwa tygodnie i nagle gotuje się dla ośmiu osób, codziennie, plus święta w środku. Ta sama kuchnia i ta sama osoba przy garnku.",
        "Urządzenie odpowiada dokładnie na tę różnicę i to jest cała jego rola tutaj. Mała porcja da się zrobić bez wyciągania trzech garnków, a duża nie kosztuje więcej pilnowania niż mała — bo gotuje się bez stania nad nią. Przy takim rytmie roku to jest różnica między świętami spędzonymi z rodziną a świętami spędzonymi w kuchni.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gogolinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli chcecie, żeby przy spotkaniu był ktoś, kto akurat jest w domu na urlopie, powiedzcie — dopasuję termin do tych dwóch tygodni.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Gogolinem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gogolinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gogolińskiej rodziny",
      paragraphs: [
        "Liczba osób przy stole zmienia się tu bardziej niż gdzie indziej — przez większość roku jest mniejsza, a kilka razy do roku nagle podwaja się na dwa tygodnie.",
        "Thermomix pomaga w obu przypadkach tym samym: mała porcja nie wymaga rozstawiania połowy kuchni, a duża nie kosztuje więcej pilnowania. Danie gotuje się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Gogolin",
    "Karłubiec",
    "Chorula",
    "Malnia",
    "Obrowiec",
    "Odrowąż",
    "Kamionek",
    "Górażdże",
    "Zakrzów",
    "Dąbrówka",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Krapkowice, Zdzieszowice, Strzelce Opolskie, Prószków i Opole są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krapkowice", "Zdzieszowice", "Strzelce Opolskie", "Prószków", "Opole", "Leśnica"],

  about: blokOMnie("do Gogolina", "w gminie Gogolin i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gogolina bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Gogolinie"),
    {
      question: "Przez większość roku gotuję dla dwóch osób. Czy to nie za duże urządzenie?",
      answer:
        "Przy bardzo małych porcjach część przepisów trzeba przeliczyć i powiem to uczciwie. Ale jeśli kilka razy w roku gotujecie nagle dla ośmiu osób, to właśnie wtedy widać różnicę najmocniej — większa porcja nie wymaga większego pilnowania. Ugotujmy na spotkaniu obie wielkości i sami zobaczcie.",
    },
    {
      question: "Czy możemy umówić się wtedy, gdy rodzina będzie w komplecie?",
      answer:
        "Oczywiście i chętnie. Powiedzcie przy umawianiu, w jakim terminie wszyscy są w domu, a dopasuję się do tych dni — łącznie ze świętami i weekendami.",
    },
  ],

  geo: { lat: 50.4906, lng: 18.0169 },
};
