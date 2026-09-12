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
 * ŻYCHLIN — gmina miejsko-wiejska w powiecie kutnowskim.
 * MIASTO 7 435 mieszkańców, GMINA 10 797 (31.12.2024, GUS).
 * Brief mówił 8 000 — zawyżone. 21 sołectw.
 *
 * PRAWA MIEJSKIE: źródło gminne pisze ostrożnie „przyjęto,
 * że 1397"; utrata 1870, przywrócenie 1924. W TEKŚCIE PISZĘ
 * „przyjmuje się, że od 1397 roku" i nie podaję nadawcy.
 * W 2026 r. miasto obchodziło 629. urodziny.
 *
 * FAKT OSIOWY DLA KĄTA: Żychlin robi SILNIKI ELEKTRYCZNE
 * od 1921–1922 r. Zakład działa w 2026 r. — NAZWY NIE PODAJĘ.
 * UWAGA: przy 68,5 mln zł przychodu za 2025 r. wykazał stratę
 * netto 2,5 mln zł, więc NIE PISZĘ NIC O KONDYCJI zakładu —
 * ani dobrze, ani źle. W gminie działa też cukrownia
 * w Dobrzelinie (oddział spółki skarbu państwa) — również bez
 * nazwy i bez komentarza.
 *
 * WIEŻA ZEGAROWA NA RYNKU Z 1929 r. — zbudowana jako stacja
 * transformatorowa z zegarem i syreną pożarową; dziś na parterze
 * piekarnia. To rozpoznawalny symbol miasta i najlepszy,
 * całkowicie neutralny obraz do wykorzystania.
 *
 * KĄT: DRGANIA I STABILNOŚĆ — czyli to, że urządzenie potrafi
 * „wędrować" po blacie. Kąt bierze się wprost z tego, że
 * Żychlin od stu lat produkuje silniki elektryczne: tu każdy
 * wie, że silnik to nie tylko moc, ale też drgania.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy najwyższych obrotach urządzenie drga i przy pustym
 *   albo nierówno obciążonym naczyniu potrafi przesunąć się
 *   po blacie,
 * — że to nie jest usterka, tylko skutek pracy silnika
 *   z nierównomiernym obciążeniem,
 * — kiedy się to zdarza: lód, twarde ziarna, zamrożone owoce
 *   w jednej bryle, za mała ilość w naczyniu,
 * — co z tym zrobić: równa, sucha i twarda powierzchnia, czyste
 *   nóżki, nic pod spodem — żadnych ściereczek ani mat,
 * — że urządzenie NIE powinno stać na samym skraju blatu ani
 *   na wysuwanej półce,
 * — i że przy pracy z lodem warto po prostu zostać w kuchni.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PARAMETRÓW TECHNICZNYCH: mocy silnika, obrotów,
 *   masy urządzenia, poziomu głośności w decybelach. Nie znam
 *   ich i nie będę zgadywać — od tego jest instrukcja
 *   producenta.
 * — ŻADNYCH INSTRUKCJI SERWISOWYCH ani rozkręcania sprzętu.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — NIE KOMENTUJĘ kondycji finansowej żadnego zakładu.
 * — NIE ROBIĘ TŁA z bezrobocia (powiat kutnowski 8,0%)
 *   ani z depopulacji (−18,8% od 2002 r.).
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — TU JEST NAJWAŻNIEJSZE.
 * „Hałas" (inne miasto, przy torach) dotyczy GŁOŚNOŚCI i tego,
 * jak brzmi praca urządzenia. „Waga urządzenia i kto je
 * podniesie" dotyczy CIĘŻARU i przenoszenia. „Mała kuchnia
 * i blat" (Zawichost) dotyczy METRAŻU. „Blat i ściereczka"
 * (Koluszki) dotyczy MIEJSCA OBOK i sprzątania. Tutaj chodzi
 * wyłącznie o RUCH: o to, że sprzęt pod obciążeniem drga
 * i przesuwa się, i o powierzchnię, na której stoi.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty praw miejskich jako pewnej ani nadawcy.
 * — NIE PODAJĘ nazwy zakładu, liczby zatrudnionych ani jego
 *   wyników.
 * — NIE PODAJĘ żadnych parametrów technicznych urządzenia.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla gminy Żychlin nie znalazłam żadnego.
 * — NIE MYLĘ tego Żychlina z Żychlinem w wielkopolskim
 *   (pałac Bronikowskich, Chopin) ani z wsią Żychlin w gminie
 *   Grabica w tym samym województwie. FAQ to rozróżnia.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 7 435, gmina 10 797 mieszkańców (31.12.2024, GUS),
 *   21 sołectw,
 * — prawa miejskie przyjmowane na 1397 r., utracone w 1870,
 *   przywrócone w 1924; w 2026 r. 629. urodziny miasta,
 * — zakład elektrotechniczny powstał w 1921 r., produkcja
 *   w Żychlinie ruszyła w 1922 r.; miasto do dziś produkuje
 *   silniki elektryczne,
 * — w gminie działa cukrownia w Dobrzelinie; osada przemysłowa
 *   w tym miejscu sięga 1853 r.,
 * — wieża zegarowa na rynku z 1929 r., pierwotnie stacja
 *   transformatorowa z zegarem i syreną pożarową; dziś
 *   na parterze piekarnia,
 * — kościół parafialny wznoszony w latach 1772–1782.
 */
export const ZYCHLIN: CityContent = {
  slug: "zychlin",
  h1: "Thermomix Żychlin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żychlin (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Żychlinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i sołectwa gminy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żychlin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żychlinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żychlina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Żychlin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przy lodzie potrafi ruszyć z miejsca. To nie usterka.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żychlinie – jak wygląda prezentacja?",
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
      id: "drgania",
      heading: "Sto lat silników elektrycznych — czyli o tym, że urządzenie potrafi ruszyć z miejsca",
      paragraphs: [
        "Żychlin robi silniki elektryczne od 1922 roku. Na rynku stoi wieża z 1929 — zbudowana jako stacja transformatorowa z zegarem i syreną pożarową, dziś z piekarnią na parterze. W mieście, w którym silnik jest zawodem, nie muszę tłumaczyć podstawowej rzeczy: silnik to nie tylko moc. To także drgania.",
        "I dlatego napiszę o czymś, o czym nie przeczytacie w żadnej ulotce: to urządzenie potrafi ruszyć z miejsca.",
        "Nie zawsze i nie przy każdej pracy. Ale przy najwyższych obrotach, gdy w naczyniu jest coś twardego i nierówno rozłożonego — kostki lodu, garść twardych ziaren, owoce zamrożone w jednej bryle — pojawiają się drgania. Naczynie nie obraca się wtedy równomiernie, tylko szarpie, a szarpnięcia przenoszą się na całą obudowę. Efekt bywa taki, że po kilkunastu sekundach sprzęt stoi dwa albo trzy centymetry dalej niż na początku.",
        "To nie jest usterka i nie znaczy, że coś jest zepsute. To zwykła konsekwencja pracy silnika z nierównomiernym obciążeniem, znana każdemu, kto kiedykolwiek uruchamiał pralkę z całym praniem po jednej stronie bębna.",
        "Co z tym zrobić — cztery rzeczy, wszystkie proste.",
        "Po pierwsze: równa, twarda i sucha powierzchnia. Blat, nie obrus, nie mata, nie ściereczka pod spodem. Wszystko, co się ugina albo ślizga, pogarsza sprawę zamiast ją poprawiać.",
        "Po drugie: czyste nóżki. Okruch mąki albo kropla oleju pod jedną z nich wystarczą, żeby sprzęt stanął krzywo i zaczął chodzić.",
        "Po trzecie, i to jest najważniejsze: urządzenie nie powinno stać na samym skraju blatu ani na wysuwanej półce. Kilka centymetrów zapasu z każdej strony to nie jest przesada, tylko zdrowy rozsądek.",
        "Po czwarte: przy lodzie i przy twardych rzeczach po prostu zostańcie w kuchni. To trwa kilkanaście sekund i nie warto w tym czasie iść do drugiego pokoju.",
        "Czego tu nie znajdziecie: żadnych parametrów. Nie podam Wam mocy silnika, liczby obrotów, masy urządzenia ani poziomu głośności — nie znam ich na pamięć, a podawanie takich liczb na wyczucie to jest dokładnie ten rodzaj usługi, przez który potem coś nie działa jak trzeba. Wszystko to jest w instrukcji producenta. Ja mówię o tym, co widać w kuchni.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żychlinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu postawimy urządzenie tam, gdzie realnie miałoby stać u Was, i sprawdzimy, czy blat jest równy. To zajmuje chwilę, a oszczędza późniejszych niespodzianek.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żychlinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla żychlińskiej rodziny",
      paragraphs: [
        "Samo miasto Żychlin liczy nieco ponad siedem tysięcy mieszkańców, a cała gmina, razem z dwudziestoma jeden sołectwami, blisko jedenaście. Przyjmuje się, że prawa miejskie ma od 1397 roku — w 2026 obchodzono tu 629. urodziny miasta; prawa utracono w 1870 i przywrócono w 1924. Przemysł zaczął się w 1921 roku, a produkcja silników elektrycznych ruszyła rok później i trwa do dziś. W gminie działa też cukrownia w Dobrzelinie, gdzie osada przemysłowa istnieje od 1853 roku. Symbolem miasta jest wieża zegarowa z 1929 roku, postawiona jako stacja transformatorowa z zegarem i syreną pożarową — dziś na jej parterze mieści się piekarnia. Kościół parafialny wznoszono w latach 1772–1782.",
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

  districtsHeading: "Do których części gminy Żychlin dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu jeden sołectw gminy — Dobrzelina, Grabowa, Śleszyna, Woli Popowej, Zagrobów i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Żychlin też przyjadę",
  nearbyParagraphs: [
    "Kutno, Krośniewice, Łęczyca, Gostynin, Łowicz i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kutno", "Krośniewice", "Łęczyca", "Gostynin", "Łowicz"],

  about: blokOMnie("do Żychlina", "w Żychlinie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żychlina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu jeden sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Żychlin w powiecie kutnowskim, a nie o Żychlin pod Koninem w wielkopolskim ani o wieś Żychlin w gminie Grabica.",
    },
    ...faqWspolne("w Żychlinie"),
    {
      question: "Dlaczego urządzenie przesuwa się po blacie?",
      answer:
        "Bo przy najwyższych obrotach i przy czymś twardym w środku — lodzie, twardych ziarnach, owocach zamrożonych w bryle — naczynie szarpie, a szarpnięcia przenoszą się na obudowę. To nie usterka, tylko zwykła konsekwencja nierównomiernego obciążenia, znana każdemu, kto uruchamiał pralkę z praniem po jednej stronie bębna.",
    },
    {
      question: "Jak temu zaradzić?",
      answer:
        "Równa, twarda i sucha powierzchnia — blat, nie obrus i nie mata, bo wszystko, co się ugina, pogarsza sprawę. Czyste nóżki: okruch mąki pod jedną wystarczy. Nie stawiać na skraju blatu ani na wysuwanej półce. I przy lodzie po prostu zostać w kuchni — to kilkanaście sekund.",
    },
    {
      question: "Jaką ma moc i ile waży?",
      answer:
        "Nie podam Ci tych liczb z pamięci i uważam, że żaden sprzedawca nie powinien. Parametry techniczne są w instrukcji producenta i tam warto po nie sięgnąć. Ja mówię o tym, co widać w kuchni.",
    },
  ],

  geo: { lat: 52.244, lng: 19.626 },
};
