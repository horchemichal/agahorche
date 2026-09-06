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
 * CHMIELNIK — małe miasto między Kielcami a Buskiem-Zdrojem. Najbardziej
 * znane z odrestaurowanej synagogi, w której działa ośrodek edukacyjny
 * Świętokrzyski Sztetl — miejsce stworzone po to, żeby zachować pamięć
 * o przedwojennych mieszkańcach miasta.
 *
 * KĄT: zapisywanie. Chmielnik jest miastem, które świadomie zbudowało
 * u siebie instytucję pamięci — i to jest jedyny powód, dla którego akurat
 * tutaj piszę o RODZINNYCH PRZEPISACH, KTÓRYCH NIKT NIE ZAPISAŁ.
 *
 * OSTROŻNOŚĆ — to jest najważniejsza uwaga w tym pliku. Historia, której
 * dotyczy chmielnicki ośrodek, jest historią Zagłady. Nie wolno jej użyć
 * jako ozdobnika ani jako wstępu do argumentu sprzedażowego. Tekst mówi
 * o niej krótko, rzeczowo i z szacunkiem, a potem WPROST zaznacza, że to,
 * o czym piszę dalej, jest zupełnie inną i nieporównywalnie mniejszą
 * sprawą. Bez tego zdania ta sekcja nie ma prawa istnieć.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Chmielniku znajduje się odrestaurowana synagoga, a w niej ośrodek
 *   edukacyjny poświęcony historii żydowskich mieszkańców miasta,
 * — Chmielnik leży przy trasie z Kielc do Buska-Zdroju,
 * — do gminy należą m.in. Piotrkowice, Suchowola, Lubania, Śladków Duży,
 *   Śladków Mały, Przededworze, Celiny.
 *
 * CZEGO NIE MA: dat, liczb, opisu ekspozycji, jakiegokolwiek zestawiania
 * historii miasta z tematem tej strony.
 */
export const CHMIELNIK: CityContent = {
  slug: "chmielnik",
  h1: "Thermomix Chmielnik – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Chmielnik — prezentacja i cena",
  seoDescription:
    "Thermomix w Chmielniku: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chmielnik — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chmielniku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chmielnika z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Piotrkowic, Suchowoli, Lubani i pozostałych sołectw gminy.",

  highlights: highlightyStandardowe("Chmielnik i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chmielniku – jak wygląda prezentacja?",
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
      id: "co-zostaje-zapisane",
      heading: "Miasto, które postanowiło pamiętać",
      paragraphs: [
        "W Chmielniku stoi odrestaurowana synagoga, a w niej ośrodek poświęcony historii żydowskich mieszkańców tego miasta. To miejsce powstało z jednego postanowienia: żeby nie przepadła pamięć o ludziach, których już nie ma. Wspominam o tym z szacunkiem i bez rozwijania, bo to jest historia, o której opowiadają tam osoby znacznie bardziej do tego powołane niż ja.",
        "Dodam więc od razu, żeby nie było nieporozumienia: to, o czym napiszę dalej, jest sprawą zupełnie innej i nieporównywalnie mniejszej wagi. Zestawiać tych dwóch rzeczy nie zamierzam. Chodzi mi tylko o samo słowo — zapisać.",
        "Bo w domowej, całkiem zwyczajnej skali dzieje się coś, co zna prawie każdy: przepisy babci przepadają. Nie dlatego, że ktoś ich nie chce. Dlatego, że nigdy nie były zapisane. Były w rękach, w oku, w „tyle, ile trzeba”. A potem zostaje pytanie, którego nie ma już kogo zadać, i drugie danie w roku, które nigdy nie wychodzi tak samo.",
        "Jeżeli w Waszej rodzinie ktoś jeszcze gotuje tę jedną rzecz, o którą wszyscy proszą — proszę, zważcie to raz i zapiszcie. To zajmuje jedno popołudnie i jest to najlepsza rzecz, jaką można zrobić z gramaturą w kuchni.",
        "Tu urządzenie ma jeden konkretny, niewielki udział, o którym mówię bez patosu: waga jest wbudowana, więc ważenie odbywa się w tym samym naczyniu, a własne przepisy da się zapisać z krokami i wracać do nich latami. Nie zastępuje to niczyich rąk i nie o to chodzi. Chodzi o to, żeby po latach ktoś w Waszej rodzinie mógł zrobić to samo ciasto i żeby wyszło.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy, które robię najczęściej" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chmielniku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Chmielnikiem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chmielniku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla chmielnickiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a robi go zwykle jedna osoba — często ta sama, która zna wszystkie rodzinne przepisy na pamięć.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Chmielnik",
    "Piotrkowice",
    "Suchowola",
    "Lubania",
    "Śladków Duży",
    "Śladków Mały",
    "Przededworze",
    "Celiny",
    "Zrecze Duże",
    "Borzykowa",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Busko-Zdrój, Morawica, Daleszyce, Pierzchnica, Szydłów i Staszów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Busko-Zdrój", "Morawica", "Daleszyce", "Pierzchnica", "Szydłów", "Kielce"],

  about: blokOMnie("do Chmielnika", "w gminie Chmielnik i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chmielnika bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Chmielniku"),
    {
      question: "Czy da się zapisać w urządzeniu własne, rodzinne przepisy?",
      answer:
        "Tak — z krokami, czasem i gramaturą, a waga jest wbudowana, więc ważysz w tym samym naczyniu. Pokażę Ci to na prezentacji na przykładzie Twojego przepisu, jeśli go przyniesiesz. To jest zwykle ta rzecz, która przekonuje bardziej niż cokolwiek innego.",
    },
    {
      question: "Nie chcę zmieniać sposobu, w jaki gotuję. Czy to ma wtedy sens?",
      answer:
        "Sens ma tylko wtedy, gdy urządzenie wchodzi w Wasz sposób gotowania, a nie odwrotnie. Dlatego na spotkaniu gotujemy to, co u Was się je — a jeśli okaże się, że Waszej kuchni nic to nie daje, powiem to wprost.",
    },
  ],

  geo: { lat: 50.6089, lng: 20.7222 },
};
