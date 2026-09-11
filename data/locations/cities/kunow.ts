import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * KUNÓW — miasto w powiecie ostrowieckim, 2 701 mieszkańców
 * (31.12.2024, GUS), spadek o 13,6% od 2002 r. Prawa miejskie
 * 1365 r. od Kazimierza Wielkiego. Historyczny ośrodek
 * kamieniarski: w 1578 r. działało tu 65 rzemieślników, a piaskowiec
 * kunowski trafiał m.in. na budowę Łazienek Królewskich.
 *
 * KĄT: czekolada i polewy — czyli rzemiosło, którego urządzenie nie
 * przejmie. Miasto, w którym obróbka kamienia była przez wieki
 * zawodem, a dziś jest głównie dziedzictwem, jest właściwym
 * miejscem na składnik, przy którym o wyniku decyduje umiejętność,
 * a nie sprzęt.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że rozpuszczanie czekolady w kontrolowanej, niskiej
 *   temperaturze to realna pomoc: nad garnkiem z wodą trzeba stać
 *   i łatwo przegrzać,
 * — że urządzenie NIE JEST TEMPERÓWKĄ i czekolady nie zatemperuje —
 *   a bez temperowania polewa nie będzie błyszcząca ani nie pęknie
 *   przy łamaniu i po czasie pokryje się białym nalotem,
 * — że to nie jest usterka, tylko inna maszyna do innej roboty,
 * — i uczciwie: do polania ciasta i do masy trufli wystarczy
 *   w zupełności; do robienia tabliczek — nie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TEMPERATUR ANI USTAWIEŃ. Przy czekoladzie pokusa jest
 *   duża, bo cały temat kręci się wokół stopni. Liczby są
 *   w przepisach urządzenia i w literaturze cukierniczej.
 * — ŻADNEJ INSTRUKCJI TEMPEROWANIA. Nie umiem tego uczyć i nie
 *   będę udawać, że umiem.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o czekoladzie, kakao ani cukrze.
 * — ŻADNEJ KRYTYKI czekolad sklepowych ani producentów, ani
 *   podziału na „prawdziwą" i „nieprawdziwą" czekoladę.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU wyrobów czekoladowych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Sosy, które się warzą"
 * (Sędziszów Małopolski) dotyczy EMULSJI NA GORĄCO, gdzie problemem
 * jest zwarzenie białka i tłuszczu. Tutaj problemem jest KRYSTALIZACJA
 * TŁUSZCZU KAKAOWEGO przy stygnięciu — inny mechanizm, inny efekt
 * i inny wniosek (tam urządzenie rozwiązuje problem, tu go nie
 * rozwiązuje). „Lody i sorbety" to inny wyrób. „Masło" (Bychawa)
 * to inny tłuszcz i inna decyzja.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ O KAMIENIARSTWIE W CZASIE TERAŹNIEJSZYM. Nie udało
 *   się zidentyfikować ani jednego czynnego zakładu kamieniarskiego
 *   z siedzibą w samym Kunowie. To dziedzictwo, nie dzisiejsza
 *   branża, i tak jest w tekście napisane,
 * — NIE PISZĘ, że piaskowiec kunowski to marmur. Angielskie źródła
 *   tak go nazywają i jest to błąd,
 * — NIE PODAJĘ ROKU ODZYSKANIA PRAW MIEJSKICH JAKO PEWNIKA. Krąży
 *   1990, ale jedynym źródłem jest angielska Wikipedia, a strona
 *   miasta tego nie potwierdza. Podaję pewne: nadanie w 1365 r.
 *   przez Kazimierza Wielkiego i utratę po powstaniu styczniowym,
 * — NIE WSKAZUJĘ NAJWIĘKSZEGO PRACODAWCY. Nie ustalono. Historyczne
 *   zakłady (walcownia w Nietulisku, fabryka tektury) dawno nie
 *   działają i nie wymieniam ich jako czegokolwiek dzisiejszego,
 * — NIE PISZĘ, że mieszkańcy dojeżdżają do pracy do Ostrowca.
 *   Potwierdzone jest tylko, że ostrowiecka komunikacja miejska
 *   obsługuje Kunów na mocy porozumienia międzygminnego — to fakt
 *   o autobusach, nie o celu podróży. Wspominam więc wyłącznie
 *   o połączeniu,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Kunowa nic nie znaleziono,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1365 r. od Kazimierza Wielkiego; utrata po
 *   powstaniu styczniowym,
 * — w 1578 r. działało w Kunowie 65 rzemieślników,
 * — piaskowiec kunowski trafiał m.in. na budowę Łazienek
 *   Królewskich,
 * — Kunów jest obsługiwany przez komunikację miejską z Ostrowca
 *   Świętokrzyskiego na mocy porozumienia międzygminnego,
 * — 2 701 mieszkańców (31.12.2024), spadek o 13,6% od 2002 r.
 */
export const KUNOW: CityContent = {
  slug: "kunow",
  h1: "Thermomix Kunów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kunów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kunowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kunów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kunowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kunowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Kunów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rozpuści. Nie zatemperuje. To dwie różne maszyny.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kunowie – jak wygląda prezentacja?",
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
      id: "czekolada",
      heading: "Miasto kamieniarzy — czyli o czekoladzie i o rzemiośle, którego nie przejmę",
      paragraphs: [
        "Kunów dostał prawa miejskie w 1365 roku od Kazimierza Wielkiego. W 1578 roku pracowało tu sześćdziesięciu pięciu rzemieślników — jak na tak małą miejscowość to bardzo dużo. Głównie kamieniarzy: piaskowiec kunowski trafiał stąd między innymi na budowę Łazienek Królewskich. Dziś to zawód, który został w nazwach i w opracowaniach, a nie w warsztatach — czynnego zakładu kamieniarskiego z siedzibą w samym Kunowie nie udało mi się znaleźć.",
        "Napiszę tu o składniku, z którym jest podobnie: o czekoladzie. Bo przy czekoladzie o wyniku decyduje umiejętność, a nie sprzęt — i to jest rzecz, którą powinnam powiedzieć zamiast obiecywać.",
        "Zacznę od tego, co urządzenie robi dobrze, bo robi. Rozpuszczanie czekolady w kontrolowanej, niskiej temperaturze to realna pomoc. Nad garnkiem z wodą trzeba stać, a czekolada wybacza mało: przegrzana robi się zbrylona i matowa, i już się z tego nie podnosi. Urządzenie trzyma zadaną temperaturę i miesza, więc ten konkretny wypadek przestaje się zdarzać. Do polania ciasta, do masy na trufle, do ganaszu — w zupełności wystarczy.",
        "A teraz granica, i jest bardziej techniczna niż zwykle, ale warto ją znać. Urządzenie nie zatemperuje czekolady. Temperowanie to prowadzenie czekolady przez kilka temperatur w określonej kolejności po to, żeby tłuszcz kakaowy skrystalizował się we właściwej formie. Bez tego polewa nie będzie błyszcząca, nie pęknie czysto przy łamaniu i po kilku dniach pokryje się białawym nalotem. To nie jest usterka i nie jest to wina urządzenia — po prostu do temperowania robi się osobne maszyny, tak jak do obróbki kamienia robi się osobne narzędzia.",
        "Z tego wynika prosty podział. Jeśli chcecie polać babkę, zrobić trufle albo masę czekoladową do ciasta — urządzenie zrobi to bez problemu i zdejmie z Was pilnowanie. Jeśli chcecie robić tabliczki, figurki albo cokolwiek, co ma błyszczeć i strzelać przy przełamaniu — potrzebujecie umiejętności temperowania i innego sprzętu, a ja nie będę udawać, że jest inaczej.",
        "Instrukcji temperowania ode mnie nie dostaniecie. Nie umiem tego uczyć i nie mam zamiaru sobie tego przypisywać — to jest robota cukiernika.",
        "Nie usłyszycie tu też ani słowa o tym, która czekolada jest „prawdziwa”, ani niczego o zdrowiu. Pierwsze to nie moja rola, drugie to nie moja dziedzina.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kunowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pieczecie i polewacie ciasta, powiedzcie przy umawianiu — zrobimy polewę. Zajmuje moment, a od razu widać, czym to się różni od garnka z wodą.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kunowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kunowskiej rodziny",
      paragraphs: [
        "Kunów liczy nieco ponad dwa tysiące siedemset mieszkańców i od dwóch dekad ich ubywa. Prawa miejskie ma od 1365 roku, z przerwą po powstaniu styczniowym. Do miasta dojeżdża komunikacja miejska z Ostrowca Świętokrzyskiego, na mocy porozumienia między gminami.",
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

  districtsHeading: "Do których części Kunowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Nietuliska, Dołów Biskupich, Janika, Wymysłowa i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Kunów też przyjadę",
  nearbyParagraphs: [
    "Ostrowiec Świętokrzyski, Ćmielów, Opatów, Waśniów, Bodzechów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ostrowiec Świętokrzyski", "Ćmielów", "Opatów", "Starachowice", "Ożarów", "Sandomierz"],

  about: blokOMnie("do Kunowa", "w Kunowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kunowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kunowie"),
    {
      question: "Czy rozpuszczę w tym czekoladę?",
      answer:
        "Tak i to jest jedno z tych zastosowań, w których urządzenie realnie pomaga. Czekolada wybacza mało — przegrzana robi się zbrylona i matowa, a nad garnkiem z wodą trzeba stać. Tutaj temperatura jest trzymana, a masa mieszana, więc ten wypadek przestaje się zdarzać. Do polewy, ganaszu i masy na trufle w zupełności wystarczy.",
    },
    {
      question: "Czy zatemperuje czekoladę na tabliczki?",
      answer:
        "Nie. Temperowanie to prowadzenie czekolady przez kilka temperatur w określonej kolejności, żeby tłuszcz kakaowy skrystalizował się we właściwej formie — i robi się do tego osobne maszyny. Bez temperowania polewa nie będzie błyszczeć, nie pęknie czysto i po kilku dniach pokryje się białawym nalotem. Do polania ciasta to nie ma znaczenia; do robienia tabliczek ma decydujące. Instrukcji temperowania ode mnie nie dostaniecie — to robota cukiernika, nie przedstawicielki handlowej.",
    },
  ],

  geo: { lat: 50.9714, lng: 21.2814 },
};
