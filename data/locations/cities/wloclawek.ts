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
 * WŁOCŁAWEK — miasto nad Wisłą, znane z fajansu malowanego ręcznie,
 * wzorem, którego uczono się od podstaw, ucząc się jednego motywu naraz.
 *
 * KĄT: nauka gotowania od zera. To jest jedyne miejsce w serwisie dla
 * osoby, która NIE UMIE GOTOWAĆ i wstydzi się do tego przyznać —
 * a takich osób jest znacznie więcej, niż widać, bo nikt tego nie mówi
 * na głos przy stole.
 *
 * SEKCJA MA UNIKNĄĆ DWÓCH BŁĘDÓW. Pierwszy: obiecywanie, że urządzenie
 * nauczy gotować. Nie nauczy — nauczy odtwarzać przepisy, a to jest
 * co innego i trzeba to rozróżnić. Drugi: protekcjonalność.
 *
 * CO SEKCJA MA DAĆ NAPRAWDĘ: konkretną, wykonalną ścieżkę pierwszych
 * tygodni oraz nazwanie tej jednej rzeczy, której urządzenie nie zastąpi
 * nigdy — próbowania i decydowania, czy już dobrze.
 *
 * ROZGRANICZENIE. Piła pyta „kto w domu umie to obsłużyć" (podział ról).
 * Ostrołęka — o strachu przed ekranem (obsługa techniczna). Legionowo —
 * o kolejności wyposażania kuchni. Tutaj chodzi o samą umiejętność
 * gotowania i o wstyd, który się z jej brakiem wiąże.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Włocławek słynie z fajansu zdobionego ręcznie malowanym wzorem.
 */
export const WLOCLAWEK: CityContent = {
  slug: "wloclawek",
  h1: "Thermomix Włocławek – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Włocławek — prezentacja i cena",
  seoDescription:
    "Thermomix we Włocławku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Włocławek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Włocławku. Także wtedy, gdy dopiero się uczysz.",

  lead:
    "Przyjeżdżam do Włocławka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Włocławek i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Domowa lemoniada przygotowana w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Na spotkaniu robimy też rzeczy proste — takie, które faktycznie robi się potem co tydzień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Włocławku – jak wygląda prezentacja?",
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
      id: "nauka-od-zera",
      heading: "Wzoru uczono się po jednym motywie — i tak samo uczy się gotować",
      paragraphs: [
        "Włocławski fajans malowano ręcznie, a wzoru uczono się po jednym motywie naraz, latami. Zaczynam od tego, bo chcę napisać do osób, o których w tej branży nie pisze nikt: do tych, które po prostu nie umieją gotować i wolałyby, żeby nikt o tym nie wiedział.",
        "Takich osób jest znacznie więcej, niż widać. Nie mówi się tego przy stole, bo brzmi jak przyznanie się do czegoś wstydliwego, a nie jest — po prostu nikt nie nauczył, w domu gotował ktoś inny albo przez piętnaście lat wystarczało coś odgrzać. To nie jest wada charakteru.",
        "Powiem od razu, czego to urządzenie nie zrobi, żeby nie było fałszywej obietnicy. Ono nie nauczy Was gotować. Nauczy odtwarzać przepisy — i to jest zupełnie co innego. Odtwarzanie polega na tym, że wykonujecie kroki i wychodzi. Gotowanie zaczyna się wtedy, gdy wiecie, dlaczego wychodzi i co zmienić, gdy nie wyszło.",
        "Ale odtwarzanie jest właściwym pierwszym krokiem i dla kogoś, kto zaczyna od zera, jest to krok ogromny. Bo najtrudniejsze na początku nie są proporcje — najtrudniejsze jest wszystko naraz: pilnowanie, żeby się nie przypaliło, ocena, czy już wrze, decyzja, czy dosypać, i poczucie, że każda z tych rzeczy może zepsuć obiad. Urządzenie zdejmuje właśnie tę część i zostawia jedną rzecz do zrobienia w danym momencie.",
        "Praktycznie proponuję taką ścieżkę i wiem, że działa. Pierwszy tydzień: trzy dania, które lubicie jeść, robione dokładnie z przepisu, bez żadnych zmian. Drugi i trzeci: te same trzy dania, ale spróbowane w połowie i doprawione po swojemu. Miesiąc drugi: jedno z nich zrobione bez patrzenia na ekran. To wystarczy, żeby przestać się bać kuchni.",
        "Została jedna rzecz, której nie zastąpi żadne urządzenie i mówię to każdemu: trzeba próbować. Sprzęt nie ma smaku i nie powie Wam, czy już dobrze. To Wy musicie wziąć łyżkę i zdecydować — a tego uczy się wyłącznie przez robienie tego wiele razy.",
      ],
      links: [{ href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Włocławku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Nie musisz nic umieć ani niczego przygotowywać. Powiedz tylko, co lubisz jeść — to wystarczy, żebym dobrała dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Włocławku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla włocławskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że prowadzi przez przepis krok po kroku i nie wymaga obecności — a przy nauce najbardziej tym, że zostawia jedną rzecz do zrobienia naraz.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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

  districtsHeading: "Do których części Włocławka i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Zazamcze",
    "Południe",
    "Michelin",
    "Kazimierza Wielkiego",
    "Wschód Mieszkaniowy",
    "Zawiśle",
    "Rybnica",
    "Krzywa Góra",
  ],

  nearbyHeading: "Poza Włocławek też przyjadę",
  nearbyParagraphs: [
    "Kowal, Brześć Kujawski, Lubraniec i Chodecz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kowal", "Brześć Kujawski", "Lubraniec", "Chodecz", "Lipno", "Radziejów"],

  about: blokOMnie("do Włocławka", "we Włocławku i okolicy", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Włocławka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("we Włocławku"),
    {
      question: "Zupełnie nie umiem gotować. Czy Thermomix mnie nauczy?",
      answer:
        "Nauczy odtwarzać przepisy — i dla kogoś, kto zaczyna od zera, to jest ogromny pierwszy krok, bo zdejmuje pilnowanie, ocenianie i strach, że wszystko naraz się zepsuje. Nie nauczy natomiast gotować w pełnym sensie: to zaczyna się wtedy, gdy wiesz, dlaczego wyszło i co zmienić, gdy nie wyszło.",
    },
    {
      question: "Od czego zacząć?",
      answer:
        "Pierwszy tydzień: trzy dania, które lubisz jeść, dokładnie z przepisu i bez zmian. Drugi i trzeci: te same trzy, ale spróbowane w połowie i doprawione po swojemu. Drugi miesiąc: jedno z nich bez patrzenia na ekran. Jedna rzecz zostaje po Twojej stronie na zawsze — trzeba próbować, bo urządzenie nie ma smaku i nie powie, czy już dobrze.",
    },
  ],

  geo: { lat: 52.6483, lng: 19.0678 },
};
