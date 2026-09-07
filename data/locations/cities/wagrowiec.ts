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
 * WĄGROWIEC — miasto na Pałukach, w którym rzeki Wełna i Nielba krzyżują
 * się pod kątem prostym. To zjawisko znane w całej Polsce: dwa nurty
 * przecinają się i płyną dalej każdy swoją stroną.
 *
 * KĄT: dwie rzeczy naraz. Miasto skrzyżowania rzek jest jedynym właściwym
 * miejscem na konkretny, techniczny opis GOTOWANIA RÓWNOLEGŁEGO — czyli
 * tego, co dzieje się, gdy nad gotującą się zawartością naczynia stoi
 * Varoma z drugim daniem.
 *
 * SEKCJA MA BYĆ TECHNICZNA, A NIE POETYCKA. Ma powiedzieć, co się w tym
 * układzie sprawdza, w jakiej kolejności to układać i — koniecznie —
 * czego w ten sposób zrobić się NIE DA. Bez tej drugiej części byłaby
 * to reklama.
 *
 * ROZGRANICZENIE. Świdnica używa Varomy przy temacie „gdy z jadłospisu
 * trzeba coś wykreślić", Września przy dziecku. Tutaj Varoma jest tematem
 * samym w sobie: jak to działa i jak to zaplanować.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Wągrowcu Wełna i Nielba krzyżują się pod kątem prostym,
 * — miasto leży na Pałukach.
 */
export const WAGROWIEC: CityContent = {
  slug: "wagrowiec",
  h1: "Thermomix Wągrowiec – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Wągrowiec — prezentacja i cena",
  seoDescription:
    "Thermomix w Wągrowcu: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wągrowiec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wągrowcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wągrowca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Wągrowiec i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/thermomix-tm7-varoma.webp",
    alt: "Thermomix TM7 z nasadką Varoma — gotowanie na parze",
    caption: "Varoma pozwala ugotować osobną porcję równolegle z resztą obiadu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wągrowcu – jak wygląda prezentacja?",
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
      id: "dwie-rzeczy-naraz",
      heading: "Miasto, w którym dwie rzeki się krzyżują",
      paragraphs: [
        "W Wągrowcu Wełna i Nielba przecinają się pod kątem prostym i płyną dalej, każda swoją stroną. To zjawisko, po które przyjeżdża się tu z całej Polski. Wykorzystuję je do rzeczy najbardziej praktycznej, jaką mam do opowiedzenia o tym urządzeniu — a mianowicie do tego, że potrafi robić dwie rzeczy w tym samym czasie.",
        "Wygląda to tak. W naczyniu gotuje się jedna rzecz, a para, która i tak z niego ucieka, przechodzi wyżej — do nasadki zwanej Varomą, w której leży druga rzecz i gotuje się na tej parze. Jedno źródło ciepła, jedno gniazdko, dwa dania.",
        "Podam konkretnie, co się w tym układzie sprawdza najlepiej, bo to nie jest oczywiste. W naczyniu: zupa, sos, rosół, kasza albo ryż z wodą. Na górze, w Varomie: ryba, pierś z kurczaka, pulpety, warzywa na parze, ziemniaki, pierogi albo knedle. Klasyczny obiad z tego układu to sos w naczyniu i mięso z warzywami nad nim, gotowe w tym samym momencie.",
        "Kolejność też ma znaczenie i to jest rzecz, której nikt nie mówi. Warzywa gotują się krócej niż mięso, więc jeśli mają być gotowe naraz, mięso wkłada się wcześniej, a warzywa dokłada w trakcie. Brzmi banalnie, ale to jedyna rzecz, przy której na początku wszyscy się mylą.",
        "A teraz czego się w ten sposób nie da zrobić, żeby nie było rozczarowania. Nie da się usmażyć — para nie robi skórki i nie zrumieni niczego, więc kotlet schabowy nadal jest robotą dla patelni. Nie da się upiec. Nie da się też ugotować równolegle dwóch rzeczy o zupełnie różnym czasie, jeśli obie mają wyjść w punkt — coś trzeba wtedy wstawić osobno.",
        "I uczciwa uwaga na koniec: to nie jest funkcja, którą wykorzystuje się codziennie. U większości osób wchodzi do rytmu dopiero po kilku tygodniach, gdy przestaje się myśleć o obiedzie jako o kolejnych garnkach. Ale kiedy już wejdzie, to jest to ta rzecz, o której klientki mówią mi najczęściej po roku.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wągrowcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wągrowcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wągrowieckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności i że dwa elementy obiadu mogą powstać naraz. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7 po kolei" },
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Wągrowiec",
    "Łekno",
    "Tarnowo Pałuckie",
    "Kobylec",
    "Rgielsko",
    "Bracholin",
    "Grylewo",
    "Pawłowo Żońskie",
    "Sienno",
    "Werkowo",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Rogoźno, Skoki, Gołańcz i Chodzież są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rogoźno", "Skoki", "Gołańcz", "Chodzież", "Murowana Goślina", "Margonin"],

  about: blokOMnie("do Wągrowca", "w gminie Wągrowiec i na Pałukach", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wągrowca bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wągrowcu"),
    {
      question: "Jak dokładnie działa gotowanie dwóch dań naraz?",
      answer:
        "W naczyniu gotuje się jedna rzecz, a para, która i tak z niego ucieka, przechodzi do nasadki Varoma stojącej wyżej i gotuje drugą. W naczyniu najlepiej wychodzi zupa, sos, rosół albo kasza; w Varomie ryba, mięso, pulpety, warzywa, ziemniaki i pierogi. Mięso wkłada się wcześniej, warzywa dokłada w trakcie — to jedyna rzecz, przy której na początku wszyscy się mylą.",
    },
    {
      question: "Czego nie da się zrobić na parze?",
      answer:
        "Usmażyć ani upiec — para nie robi skórki, więc schabowy nadal jest robotą dla patelni. Nie ugotujecie też równolegle dwóch rzeczy o zupełnie różnych czasach, jeśli obie mają wyjść w punkt; coś trzeba wtedy wstawić osobno.",
    },
  ],

  geo: { lat: 52.8103, lng: 17.1997 },
};
