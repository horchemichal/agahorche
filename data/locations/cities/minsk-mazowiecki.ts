import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * MIŃSK MAZOWIECKI — miasto na starym trakcie z Warszawy na wschód.
 * Od wieków przejeżdżali tędy obcy ludzie, a miasto z tego żyło.
 *
 * KĄT: wpuszczenie obcej osoby do domu. Prezentacja odbywa się
 * w mieszkaniu klientki i to jest realna bariera, o której nie pisze
 * żaden materiał sprzedażowy, bo brzmi niewygodnie dla sprzedawcy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ta obawa jest rozsądna, a nie przesadzona,
 * — co konkretnie robi Aga, żeby to było do sprawdzenia: podaje imię,
 *   nazwisko i numer wcześniej, przyjeżdża sama, umawia się na konkretną
 *   godzinę i nie chodzi po mieszkaniu poza kuchnią,
 * — że można poprosić o obecność drugiej osoby albo umówić się nie
 *   u siebie, tylko u mamy, siostry, koleżanki,
 * — i rzecz najuczciwsza: nie da się udowodnić z góry, że jest się
 *   w porządku. Sprawdza się tak samo jak każdego fachowca.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH ZAPEWNIEŃ O PROCEDURACH FIRMY, weryfikacji przedstawicieli,
 *   rejestrach, identyfikatorach czy „systemie sprawdzania”. Nie wiem,
 *   jak to jest urządzone, i nie wolno mi tego wymyślać — to dokładnie
 *   ten rodzaj obietnicy, na której ktoś mógłby polegać.
 * — ŻADNYCH PORAD DOTYCZĄCYCH BEZPIECZEŃSTWA OSOBISTEGO. Nie jestem
 *   od mówienia ludziom, jak mają się chronić.
 * — Nie straszę i nie robię z tego dramatu. To ma być rzeczowe.
 *
 * ROZGRANICZENIE. Olsztyn mówi o wstydzie przed pokazaniem kuchni,
 * Ząbki o prezentacji w grupie, Radom o zakupie bez prezentacji.
 * Tutaj chodzi wyłącznie o ZAUFANIE do osoby, która wchodzi do domu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Mińsk Mazowiecki leży przy trasie z Warszawy na wschód.
 */
export const MINSK_MAZOWIECKI: CityContent = {
  slug: "minsk-mazowiecki",
  h1: "Thermomix Mińsk Mazowiecki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mińsk Mazowiecki — prezentacja i cena",
  seoDescription:
    "Thermomix w Mińsku Mazowieckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mińsk Mazowiecki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mińsku Mazowieckim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mińska Mazowieckiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Mińsk Mazowiecki i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przyjeżdżam sama, o umówionej godzinie, i zostaję w kuchni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mińsku Mazowieckim – jak wygląda prezentacja?",
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
      id: "obca-osoba-w-domu",
      heading: "Miasto przy starym trakcie — i obca osoba w Twojej kuchni",
      paragraphs: [
        "Mińsk Mazowiecki leży przy trasie, którą od wieków jeżdżono z Warszawy na wschód: miasto oglądało obcych przejezdnych częściej niż większość miasteczek w okolicy. Dlatego akurat tutaj napiszę o czymś, o czym materiały sprzedażowe milczą, bo jest to dla sprzedawcy niewygodne: prezentacja oznacza wpuszczenie nieznajomej osoby do własnego mieszkania.",
        "Zacznę od tego, że to nie jest przewrażliwienie. Umawiacie się z kimś, kogo znacie wyłącznie z numeru telefonu i ze strony internetowej, i ta osoba spędzi u Was godzinę. Chęć zastanowienia się nad tym jest zwykłą rozsądnością i nie ma w niej nic obraźliwego dla mnie.",
        "Co robię, żeby to dało się sprawdzić. Podaję imię i nazwisko oraz numer telefonu, zanim przyjadę — możecie oddzwonić na ten numer, poszukać, zapytać znajomych, czy ktoś już mnie u siebie miał. Przyjeżdżam sama, o umówionej godzinie, i uprzedzam, jeśli mam się spóźnić. Zostaję w kuchni i nie proszę o pokazanie mi mieszkania.",
        "Możecie też zmienić warunki spotkania i nie musicie tego tłumaczyć. Ktoś drugi może być obecny — mąż, mama, sąsiadka, koleżanka, wszystko jedno kto. Prezentacja może się odbyć nie u Was, tylko u kogoś z rodziny albo u znajomej, która chętnie zobaczy przy okazji. Dla mnie to żadna różnica, a bywa, że tak jest po prostu wygodniej.",
        "I rzecz, na której nie będę udawać: nie da się z góry udowodnić, że jest się osobą w porządku. Nie mam na to żadnego zaklęcia i nie będę Wam opowiadać o procedurach ani systemach, których nie znam. Sprawdza się mnie tak samo jak hydraulika, elektryka czy kogokolwiek, kogo wpuszczacie do domu: po numerze, po opiniach i po tym, jak się zachowuje przez pierwsze pięć minut.",
        "Jeśli po tych pięciu minutach uznacie, że jednak nie — powiedzcie wprost. Spakuję się i pojadę, bez obrażania się i bez namawiania. Nic za spotkanie nie płacicie, więc nie ma tu żadnego rachunku do wyrównania.",
      ],
      links: [{ href: "/o-mnie", label: "Kim jestem" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mińsku Mazowieckim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli wolicie, żeby ktoś jeszcze był obecny albo żeby spotkanie odbyło się pod innym adresem, powiedzcie o tym przy umawianiu — to nie wymaga żadnego wyjaśniania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mińsku Mazowieckim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mińskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Warszawy.",
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

  districtsHeading: "Do których części Mińska Mazowieckiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Anielina",
    "Kędzierak",
    "Nowe Miasto",
    "Osiedle Konstytucji 3 Maja",
    "Piaski",
    "Targówka",
  ],

  nearbyHeading: "Poza Mińsk Mazowiecki też przyjadę",
  nearbyParagraphs: [
    "Sulejówek, Halinów, Kałuszyn i Stanisławów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sulejówek", "Halinów", "Kałuszyn", "Warszawa", "Siedlce", "Otwock"],

  about: blokOMnie("do Mińska Mazowieckiego", "w Mińsku Mazowieckim i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mińska Mazowieckiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Mińsku Mazowieckim"),
    {
      question: "Nie czuję się pewnie, wpuszczając obcą osobę do mieszkania.",
      answer:
        "To rozsądna obawa i nie traktuję jej jako braku zaufania. Podaję imię, nazwisko i numer wcześniej, przyjeżdżam sama i zostaję w kuchni. Możecie poprosić, żeby ktoś jeszcze był obecny, albo umówić spotkanie u mamy czy u koleżanki — bez tłumaczenia się. Jeśli po pięciu minutach uznacie, że jednak nie, spakuję się i pojadę.",
    },
    {
      question: "Czy prezentacja musi się odbyć u mnie w domu?",
      answer:
        "Nie. Może się odbyć u kogoś z rodziny albo u znajomej — dla mnie to żadna różnica, a bywa po prostu wygodniej. Ważny jest blat, gniazdko i godzina spokoju, a nie adres.",
    },
  ],

  geo: { lat: 52.1795, lng: 21.5714 },
};
