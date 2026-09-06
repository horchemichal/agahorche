import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * RZGÓW — małe miasto pod Łodzią, przy trasie na południe, znane w całej
 * Polsce z wielkich centrów handlu hurtowego odzieżą. Przyjeżdżają tu
 * kupować drobni handlowcy z całego kraju, a ruch zaczyna się bardzo
 * wcześnie rano.
 *
 * KĄT: dzień, który zaczyna się o czwartej. To jest rytm inny niż każdy
 * opisany dotąd w serwisie: nie zmiana w zakładzie, nie grafik, nie
 * rolnictwo, tylko HANDEL. Wstaje się przed świtem, najintensywniejsze
 * są weekendy i dni przed sezonem, a wolne wypada wtedy, gdy reszta
 * świata pracuje. Kuchennie oznacza to dwie rzeczy: śniadanie jest
 * najważniejszym posiłkiem dnia i je się je o piątej, a w soboty
 * i niedziele w domu po prostu nikogo nie ma.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Rzgowie i okolicy działają duże centra handlu hurtowego odzieżą,
 *   do których przyjeżdżają kupujący z całego kraju,
 * — ruch handlowy zaczyna się tam bardzo wcześnie rano,
 * — miasto leży tuż pod Łodzią, przy trasie na południe.
 *
 * CZEGO NIE MA: nazw centrów handlowych, danych o obrotach, twierdzeń
 * o zarobkach ani o tym, ilu mieszkańców pracuje w handlu.
 */
export const RZGOW: CityContent = {
  slug: "rzgow",
  h1: "Thermomix Rzgów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Rzgów — prezentacja i cena",
  seoDescription:
    "Thermomix w Rzgowie: bezpłatna prezentacja TM7 u Ciebie w domu, także w dni robocze. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rzgów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rzgowie. Prezentacja bezpłatna, termin dopasowany do handlu.",

  lead:
    "Przyjeżdżam do Rzgowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Starowej Góry, Guzewa, Gospodarza i pozostałych sołectw.",

  highlights: highlightyStandardowe("Rzgów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rzgowie – jak wygląda prezentacja?",
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
      id: "dzien-od-czwartej",
      heading: "Dzień, który zaczyna się o czwartej rano",
      paragraphs: [
        "Do Rzgowa przyjeżdża po towar pół Polski, a ruch zaczyna się tu, zanim gdzie indziej ktokolwiek wstanie. Jeśli u Was ktoś pracuje w handlu, to reszta tego akapitu nie będzie odkryciem — ale wolę to nazwać, bo jest to rytm zupełnie inny niż wszystko, o czym pisałam na innych stronach.",
        "Przy zmianie w zakładzie dzień jest przesunięty. Przy grafiku — nieregularny. W handlu jest inaczej: dzień zaczyna się przed świtem, kończy wtedy, kiedy się kończy, a najgorętsze są soboty i tygodnie przed sezonem. Wolne wypada wtedy, gdy reszta świata pracuje, i dlatego rodzina rzadko bywa w komplecie.",
        "Kuchennie wynikają z tego dwie rzeczy, których nie ma w żadnym poradniku. Pierwsza: to śniadanie jest tu najważniejszym posiłkiem dnia i je się je o piątej albo wcale. Kto wyjeżdża o wpół do piątej, ten albo ma coś przygotowane z wieczora, albo kupuje po drodze — i to drugie kosztuje potem i pieniądze, i samopoczucie.",
        "Druga: w weekend w domu nie ma nikogo, kto ugotowałby obiad. Więc albo powstał wcześniej, albo w niedzielę wieczorem wszyscy są głodni i zmęczeni jednocześnie.",
        "Urządzenie odpowiada na jedno i na drugie tym samym: pozwala przenieść gotowanie na porę, w której akurat jest czas. Zupa albo drugie danie przygotowane w czwartek wieczorem, bez stania nad garnkiem, czeka na sobotę. Owsianka, jajecznica albo coś ciepłego na piątą rano powstaje szybciej, niż zajmuje ubranie się. A odgrzewanie na parze sprawia, że to, co czeka od czwartku, w sobotę nadal jest jedzeniem.",
        "I rzecz praktyczna na koniec: umawiam się z Państwem w dni robocze i w środku dnia, bo wiem, że sobota jest tu dniem pracy. Nie musicie brać wolnego, żeby zobaczyć urządzenie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rzgowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Podajcie po prostu dzień, w którym macie spokojniej — także jeśli to wtorek albo środek dnia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Rzgowem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rzgowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rzgowskiej rodziny",
      paragraphs: [
        "Gdy dorośli pracują w handlu, dom bywa pusty właśnie wtedy, gdy w innych rodzinach je się wspólny obiad — a wieczorem sił jest najmniej.",
        "Thermomix pomaga tym, że pozwala przesunąć gotowanie na porę, w której jest czas. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i doczekać, a para odgrzewa bez wysuszania.",
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
    "Rzgów",
    "Starowa Góra",
    "Guzew",
    "Gospodarz",
    "Grodzisko",
    "Kalino",
    "Konstantyna",
    "Prawda",
    "Stara Gadka",
    "Romanów",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Łódź, Tuszyn, Pabianice i Koluszki są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łódź", "Tuszyn", "Pabianice", "Koluszki", "Piotrków Trybunalski"],

  about: blokOMnie("do Rzgowa", "w gminie Rzgów i okolicy Łodzi", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rzgowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rzgowie"),
    {
      question: "Soboty mam pracujące — czy przyjedziesz w tygodniu?",
      answer:
        "Tak i sama to proponuję. Umawiam się w dni robocze, także w środku dnia, bo wiem, że w handlu weekend jest szczytem. Nie musicie brać wolnego, żeby zobaczyć urządzenie.",
    },
    {
      question: "Wyjeżdżam z domu o wpół do piątej. Da się coś zjeść o tej porze?",
      answer:
        "Da się i to jest chyba najbardziej praktyczna rzecz w Waszym przypadku. Coś ciepłego powstaje szybciej, niż zajmuje ubranie się, a większe danie da się przygotować z wieczora i tylko odgrzać na parze — bez wysuszania.",
    },
  ],

  geo: { lat: 51.6664, lng: 19.4644 },
};
