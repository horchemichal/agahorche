import type { CityContent } from "../city-content";
import {
  REGION_MALOPOLSKA,
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
 * WIELICZKA — miasto trzydziestotysięczne, do którego rocznie przyjeżdża
 * blisko dwa miliony ludzi. Kopalnia soli, UNESCO, trzynaście kilometrów
 * od Krakowa, kolej aglomeracyjna pod sam szyb.
 *
 * KĄT: goście, którzy przyjeżdżają na jeden dzień. Nie na trzy tygodnie
 * jak w Krynicy i nie za pieniądze jak w kwaterze — po prostu rodzina
 * i znajomi, którzy zwiedzają kopalnię i wpadają na obiad. Sytuacja,
 * której nie opisałam nigdzie indziej w serwisie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — w mieście, przez które przechodzi taki ruch, „wpadniemy na chwilę"
 *   zdarza się kilka razy w roku i zwykle z krótkim wyprzedzeniem,
 * — co realnie pomaga: danie jednogarnkowe na sześć osób, które gotuje
 *   się bez pilnowania, i podwojona porcja czegoś, co i tak było w planie,
 * — czego NIE zrobi: nie jest urządzeniem gastronomicznym; przy większej
 *   liczbie osób gotuje się partiami i trzeba to powiedzieć wprost,
 * — i granica: nie obiecuję, że dzięki temu obiad „powstaje sam".
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także o soli. O soli w gotowaniu
 *   pisałam przy Bochni i tam ten temat zostaje; tutaj sól jest tylko
 *   tłem historycznym miasta, nie tematem kuchennym.
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI w złotówkach.
 *
 * ROZGRANICZENIE. Krynica-Zdrój mówi o gościu, który zostaje na trzy
 * tygodnie, Bukowina o kuchni w domu przyjmującym płacących gości,
 * Bochnia o soli. Tutaj chodzi o NIEZAPOWIEDZIANYCH GOŚCI NA JEDEN DZIEŃ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy blisko dwadzieścia osiem tysięcy mieszkańców, gmina
 *   ponad sześćdziesiąt dziewięć tysięcy (GUS, 31.12.2024),
 * — kopalnię odwiedziło ponad 1,7 mln osób w 2024 r. i ok. 1,9 mln
 *   w 2025 r.,
 * — wpis na Listę UNESCO w 1978 r. — pierwszy polski obiekt na liście;
 *   rozszerzenie wpisu o Zamek Żupny i kopalnię w Bochni w 2013 r.,
 * — pierwsza wzmianka z lat dwudziestych XII w. jako Magnum Sal,
 *   lokacja miasta 1290, prawo magdeburskie 1361,
 * — wydobycie soli kamiennej zakończono w 1964 r., eksploatację złoża
 *   ostatecznie w 1996 r.,
 * — Wieliczka leży 13 km od Krakowa; kolej aglomeracyjna SKA1 działa
 *   od 2014 r., w dni robocze kursuje 68 pociągów,
 * — gmina ma 29 sołectw i 9 osiedli miejskich,
 * — NIE POTWIERDZIŁAM żadnego wpisu z tej gminy na ministerialnej
 *   Liście Produktów Tradycyjnych — i tak to w tekście napisane.
 */
export const WIELICZKA: CityContent = {
  slug: "wieliczka",
  h1: "Thermomix Wieliczka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wieliczka — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wieliczce: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i sołectwa. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wieliczka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wieliczce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wieliczki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich dwudziestu dziewięciu sołectw gminy.",

  highlights: highlightyStandardowe("Wieliczka i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Obiad dla sześciu osób, o którym dowiadujesz się przedwczoraj.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wieliczce – jak wygląda prezentacja?",
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
      id: "goscie",
      heading: "Miasto, przez które przewija się dwa miliony ludzi rocznie",
      paragraphs: [
        "Wieliczka ma blisko dwadzieścia osiem tysięcy mieszkańców, a samą kopalnię odwiedziło w dwa tysiące dwudziestym piątym roku około miliona dziewięciuset tysięcy osób. To nie jest ciekawostka z folderu, tylko coś, co widać w kalendarzu tutejszych domów.",
        "Bo z takiego miasta robi się punkt na trasie. Ktoś jedzie do Krakowa, kupuje bilet do kopalni, a przy okazji dzwoni: „będziemy w środę w okolicy, wpadniemy na chwilę”. I ta chwila zwykle wypada w porze obiadu. W innych miastach gość zostaje na tydzień i można się przygotować. Tutaj przyjeżdża na jedno popołudnie i dowiadujesz się o tym dwa dni wcześniej.",
        "Piszę o tym, bo to jedyna strona w tym serwisie, na której ten temat w ogóle się pojawia — a przy prezentacjach w Wieliczce wraca regularnie. Zwykle w formie: „jak coś ugotować dla sześciu osób, kiedy dowiaduję się w poniedziałek, że przyjadą w środę”.",
        "Realna odpowiedź jest mało efektowna i taka ją podam. Pomaga jedno: danie w jednym naczyniu, które gotuje się bez stania obok. Zupa, gulasz, danie jednogarnkowe — wstawiasz, urządzenie miesza i pilnuje temperatury, a Ty w tym czasie sprzątasz przedpokój albo w ogóle jesteś jeszcze w pracy. Druga rzecz to podwojenie czegoś, co i tak było w planie: jeśli w środę miała być zupa, robi się jej po prostu więcej.",
        "Teraz uczciwie o granicach, bo to nie jest urządzenie gastronomiczne. Naczynie ma swoją pojemność i przy większej liczbie osób gotuje się partiami — jedna partia, potem druga. Da się to zaplanować, ale nie da się udawać, że obiad na dziesięć osób powstaje za jednym razem. Kto obiecuje inaczej, mija się z prawdą.",
        "I druga granica, tym razem po mojej stronie. Nie powiem Wam, że dzięki temu obiad „powstaje sam”. Powstaje z Waszych składników, według Waszego pomysłu i w Waszym czasie — po prostu bez tej części, w której trzeba stać przy garnku i mieszać.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wieliczce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie, na spotkaniu zrobimy dokładnie to danie, które zwykle podajecie gościom. To uczciwszy test niż przepis, którego nikt u Was nie gotuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wieliczce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wielickiej rodziny",
      paragraphs: [
        "Wieliczka leży trzynaście kilometrów od Krakowa i bardzo wielu stąd tam pracuje — samochodem albo koleją aglomeracyjną, która w dni robocze wozi sześćdziesiąt osiem pociągów. Obiad powstaje więc w oknie między powrotem a wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Wieliczki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dziewięciu sołectw, bez dopłaty za dojazd.",
    "Gmina jest duża i rozłożysta — poza dziewięcioma osiedlami miejskimi ma sołectwa rozrzucone od Brzegów po Chorągwicę. Przy umawianiu wystarczy podać nazwę osiedla albo wsi. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: ["Śródmieście", "Bogucice", "Krzyszkowice", "Lekarka", "Zadory"],

  nearbyHeading: "Poza Wieliczkę też przyjadę",
  nearbyParagraphs: [
    "Niepołomice, Gdów, Biskupice i Siepraw są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Niepołomice", "Gdów", "Biskupice", "Siepraw", "Świątniki Górne", "Kraków"],

  about: blokOMnie("do Wieliczki", "w Wieliczce i okolicy", REGION_MALOPOLSKA),

  faq: [
    {
      question: "Czy dojeżdżasz do Wieliczki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dziewięciu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wieliczce"),
    {
      question: "Ugotuję w tym obiad dla sześciu osób, gdy niespodziewanie przyjadą goście?",
      answer:
        "Tak, jeśli to danie w jednym naczyniu: zupa, gulasz, danie jednogarnkowe. Wstawia się i nie trzeba stać obok, więc obiad może powstawać, gdy Ty robisz co innego. Przy większej liczbie osób gotuje się partiami — naczynie ma swoją pojemność i nie będę udawać, że jest inaczej.",
    },
    {
      question: "Czy z Wieliczki jest jakiś produkt na ministerialnej Liście Produktów Tradycyjnych?",
      answer:
        "Nie znalazłam żadnego wpisu przypisanego do tej gminy i wolę to powiedzieć wprost, niż wymyślić coś na potrzeby strony. W okolicy takie wpisy są — choćby obwarzanek krakowski czy kiełbasa lisiecka — ale to nie są produkty wielickie.",
    },
  ],

  geo: { lat: 49.9871, lng: 20.0644 },
};
