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
 * POŁANIEC — małe miasto nad Wisłą, które w drugiej połowie XX wieku urosło
 * wokół dużej elektrowni. Historycznie znane z Uniwersału połanieckiego,
 * ogłoszonego przez Kościuszkę w 1794 roku.
 *
 * KĄT: święta. Elektrownia jest zakładem pracującym bez przerwy — prąd
 * musi płynąć również dwudziestego czwartego grudnia. To daje konsekwencję,
 * której nie ma w mieście fabrycznym pracującym od poniedziałku do piątku:
 * W CZĘŚCI TUTEJSZYCH DOMÓW WIGILIA NIE JEST DLA WSZYSTKICH NARAZ.
 * Ktoś jest na zmianie, wraca po północy albo wychodzi w środku kolacji.
 * Kuchennie oznacza to konkretny problem: jedzenie musi przetrwać kilka
 * godzin i nadal nadawać się do jedzenia o trzeciej nad ranem.
 *
 * TON: bez czułostkowości i bez robienia z tego dramatu. To po prostu
 * układ, który tutaj wiele rodzin zna — i warto go nazwać, zamiast pisać
 * o „rodzinnej atmosferze świąt" jak w reklamie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Połańcu działa duża elektrownia, a miasto rozwinęło się wraz z nią,
 * — elektrownie pracują w ruchu ciągłym, także w dni świąteczne,
 * — Uniwersał połaniecki ogłoszono w 1794 roku,
 * — Połaniec leży nad Wisłą, w powiecie staszowskim,
 * — do gminy należą m.in. Zrębin, Ruszcza, Rudniki, Winnica, Tursko Małe.
 *
 * CZEGO NIE MA: nazwy właściciela elektrowni, danych o zatrudnieniu,
 * opisu konkretnego systemu zmianowego w zakładzie.
 */
export const POLANIEC: CityContent = {
  slug: "polaniec",
  h1: "Thermomix Połaniec – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Połaniec — prezentacja i cena",
  seoDescription:
    "Thermomix w Połańcu: bezpłatna prezentacja TM7 u Ciebie w domu, terminy pod grafik zmianowy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Połaniec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Połańcu. Prezentacja bezpłatna, termin dopasowany do zmian.",

  lead:
    "Przyjeżdżam do Połańca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Zrębina, Ruszczy, Rudnik i pozostałych sołectw gminy.",

  highlights: highlightyStandardowe("Połaniec i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Połańcu – jak wygląda prezentacja?",
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
      id: "wigilia-na-dwie-tury",
      heading: "Zakład, który nie staje — także dwudziestego czwartego grudnia",
      paragraphs: [
        "Połaniec urósł wokół elektrowni i to zdanie mówi o tutejszym życiu więcej niż jakikolwiek opis. Elektrownia pracuje bez przerwy, bo prąd musi płynąć również w Wigilię, w Wielkanoc i w Nowy Rok. Ktoś więc zawsze jest na zmianie. W wielu domach w tym mieście to nie jest abstrakcja, tylko coś, co po prostu wraca co kilka lat.",
        "Kuchennie oznacza to sytuację, o której w świątecznych poradnikach nie ma ani słowa. Kolacja nie jest dla wszystkich naraz. Ktoś wychodzi w jej środku, ktoś wraca po północy, a ktoś siada do stołu następnego dnia rano i je to samo, tylko sam.",
        "Nie zamierzam z tego robić dramatu, bo tutejsze rodziny mają to poukładane od dawna. Zwrócę tylko uwagę na rzecz, która przy takim układzie naprawdę doskwiera: część świątecznych potraw po kilku godzinach jest już tylko cieniem siebie. Odgrzewane na patelni wysychają, w mikrofali robią się gumowate, a ta osoba, która wraca najpóźniej, dostaje najgorszą wersję kolacji.",
        "Para radzi sobie z tym lepiej niż cokolwiek innego w kuchni i to jest cała moja teza — bez fajerwerków. Odgrzewanie na parze nie wysusza, więc pierogi, ryba i kluski wracają do stanu, w którym da się je jeść z przyjemnością, a nie z obowiązku. To samo dotyczy porcji odkładanej dla kogoś, kto ma nocną zmianę w zwykły wtorek.",
        "Druga rzecz jest bardziej prozaiczna: przy świątecznym gotowaniu w jednym urządzeniu można prowadzić jedno danie, podczas gdy płyta i piekarnik są zajęte. W kuchni, w której robi się dwanaście potraw, jeden wolny palnik potrafi zdecydować o całym dniu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Połańcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli pracujecie w ruchu ciągłym, podajcie kilka terminów z różnych tygodni — dopasuję się, także rano i w środku dnia roboczego.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Połańcem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Połańcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla połanieckiej rodziny",
      paragraphs: [
        "Gdy w domu ktoś pracuje w ruchu ciągłym, wspólny posiłek o jednej porze zdarza się rzadziej niż w innych rodzinach. Jedzenie musi powstać wcześniej, poczekać i przetrwać odgrzanie — a przygotowuje je zwykle ta sama osoba.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności, a odgrzewanie na parze nie wysusza. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wtedy, gdy akurat jest czas.",
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
    "Połaniec",
    "Zrębin",
    "Ruszcza",
    "Rudniki",
    "Winnica",
    "Brzozowa",
    "Łęg",
    "Tursko Małe",
    "Kamieniec",
    "Zawada",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Staszów, Koprzywnica, Klimontów, Szydłów i Stopnica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Staszów", "Koprzywnica", "Klimontów", "Szydłów", "Stopnica", "Sandomierz"],

  about: blokOMnie("do Połańca", "w gminie Połaniec i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Połańca bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Połańcu"),
    {
      question: "Pracuję w ruchu ciągłym — czy przyjedziesz o nietypowej porze?",
      answer:
        "Tak, łącznie z porankiem i środkiem dnia roboczego. Podajcie kilka terminów z różnych tygodni, a wybiorę z nich. Wolę dopasować się do Waszego grafiku, niż prosić, żebyście brali wolne.",
    },
    {
      question: "Czy odgrzewane jedzenie naprawdę smakuje inaczej po parze?",
      answer:
        "Tak i to jest jedna z rzeczy, które najłatwiej sprawdzić na spotkaniu. Para nie wysusza, więc kluski i pierogi nie robią się gumowate jak w mikrofali. Możemy to porównać u Was, na Waszym jedzeniu — to zajmuje kilka minut.",
    },
  ],

  geo: { lat: 50.4342, lng: 21.2761 },
};
