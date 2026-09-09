import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * TOMASZÓW LUBELSKI — 17 324 mieszkańców (31.12.2025), trend spadkowy.
 * Niespodziewane zagłębie precyzyjnej obróbki metalu dla lotnictwa:
 * WSK Tomaszów Lubelski (od 1969) i RST Roztocze (od 1991), razem
 * ok. 600 zatrudnionych, części do Airbusa A320 i śmigłowców.
 *
 * KĄT: precyzja — i to, gdzie ona NIE jest potrzebna. Miasto, w którym
 * toczy się części z tolerancją setnych milimetra, jest jedynym
 * właściwym miejscem, żeby powiedzieć wprost: gotowanie nie jest
 * inżynierią i nie wymaga takiej dokładności.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w kuchni „dokładnie" znaczy coś zupełnie innego niż w hali,
 * — że gram w tę czy w tę stronę nie zepsuje obiadu, a przekonanie,
 *   że zepsuje, skutecznie odstrasza ludzi od gotowania,
 * — gdzie dokładność JEST potrzebna: wypieki i ciasta, bo tam
 *   proporcje realnie decydują, a waga jest wbudowana,
 * — i gdzie nie jest: zupa, sos, gulasz, wszystko, co się doprawia
 *   do smaku.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW. Tu szczególnie łatwo
 *   byłoby się w to wpuścić, skoro sekcja jest o dokładności.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORÓWNAŃ z konkretnymi wagami kuchennymi ani markami.
 * — ANI SŁOWA o bitwach 1939 roku i historii wojennej. Nie zbierałam
 *   nawet materiału — na stronie o kuchni nie ma to czego szukać.
 *
 * ROZGRANICZENIE. Kąt „powtarzalność" jest zajęty przez inne miasto
 * (to, które robi wzory) i tutaj się NIE pojawia — ta strona nie jest
 * o tym, że coś wychodzi tak samo za każdym razem, tylko o tym, ILE
 * dokładności jest w kuchni realnie potrzebne. To dwie różne rzeczy
 * i tekst pilnuje, żeby ich nie zlać.
 *
 * TRZY HIPOTEZY SPRAWDZONE, DWIE PADŁY:
 * — CHŁÓD: krąży twierdzenie, że to jedno z najzimniejszych miast
 *   w Polsce. OBALONE — nie ma ani jednego źródła z danymi, a oficjalny
 *   biegun zimna to Litworowy Kocioł w Tatrach; dla terenów
 *   zamieszkanych mówi się o Suwałkach i Żywcu. Tomaszów nie pojawia
 *   się w żadnym zestawieniu. W tekście nie ma o tym słowa,
 * — ROZTOCZE I RUCH WEEKENDOWY: ZA SŁABA. Wszystkie dane o ruchu
 *   turystycznym dotyczą REGIONU albo POWIATU, nie miasta — a to jest
 *   dokładnie ta podmiana, którą tępię w innych plikach. Raport
 *   o stanie miasta za 2025 r. nie zawiera takich statystyk,
 * — PRECYZJA LOTNICZA: POTWIERDZONA i najlepsza z trzech.
 *
 * BŁĄD, KTÓRY BY MNIE KOSZTOWAŁ STRONĘ. Zabytkowy drewniany kościół
 * w Tomaszowie to kościół ZWIASTOWANIA NMP z 1727 r., ufundowany przez
 * Michała Zdzisława Zamoyskiego — a NIE „kościół św. Józefa", którym
 * bywa nazywany w sieci. Kościół św. Józefa jest współczesny i murowany
 * (budowa 1988–1990, wykończenie 2005–2007). Gdybym pisała z pamięci,
 * napisałabym „drewniany kościół św. Józefa z XVIII wieku" i byłby to
 * błąd rzeczowy w widocznym miejscu. W tekście jest poprawna nazwa
 * i poprawna data BUDOWY — nie mylona z datą wpisu do rejestru
 * (A/34/156, 1956 i 1967).
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE piszę „najcenniejszy drewniany kościół w Polsce". Takie
 *   porównanie nie istnieje. Zostaje to, co sprawdzalne: jedyny
 *   na Zamojszczyźnie drewniany kościół dwuwieżowy w formach
 *   barokowych,
 * — NIE rozbijam 600 zatrudnionych na dwie firmy, bo znam tylko
 *   liczbę łączną,
 * — miasto NIE publikuje wykazu jednostek pomocniczych, więc
 *   districts jest PUSTĄ TABLICĄ,
 * — uwaga na liczbę mieszkańców: starsze strony podają „ok. 21 tys.",
 *   aktualna z raportu miasta to 17 324. Używam nowszej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — WSK Tomaszów Lubelski działa od 1969 r. (jako filia WSK PZL
 *   Świdnik, samodzielna od 1991), RST Roztocze od 1991; razem
 *   ok. 600 zatrudnionych; części do Airbusa A320 i do śmigłowców,
 * — SVZ Tomaszów (przetwórstwo owoców i warzyw) i RST Roztocze są
 *   wymienieni jako najwięksi pracodawcy w Raporcie o stanie miasta
 *   za 2025 r.,
 * — 17 324 mieszkańców na 31.12.2025; 71 urodzeń wobec 223 zgonów
 *   w 2025 r.,
 * — z Lublina ok. 126 km; czasu przejazdu NIE ZNALAZŁAM i go nie
 *   podaję,
 * — produkty z Listy Produktów Tradycyjnych w powiecie — „karp wędzony
 *   z Bełżca" i „pierogi z farszem z karpia", oba z GMINY BEŁŻEC,
 *   wpisane 1 kwietnia 2020 r. Nie z Tomaszowa. W tekście ich nie ma,
 *   bo to nie moje i nie stąd.
 */
export const TOMASZOW_LUBELSKI: CityContent = {
  slug: "tomaszow-lubelski",
  h1: "Thermomix Tomaszów Lubelski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tomaszów Lubelski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Tomaszowie Lubelskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tomaszów Lubelski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tomaszowie Lubelskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tomaszowa Lubelskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Tomaszów Lubelski i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Obiad to nie część do samolotu. Gram w tę czy w tę stronę niczego nie psuje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tomaszowie Lubelskim – jak wygląda prezentacja?",
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
      id: "precyzja",
      heading: "Miasto, które toczy części do samolotów — i kuchnia, która tyle dokładności nie potrzebuje",
      paragraphs: [
        "W siedemnastotysięcznym Tomaszowie Lubelskim działają dwa zakłady, o których w Polsce mało kto wie: WSK Tomaszów Lubelski, powstały w 1969 roku jako filia świdnickiej WSK i samodzielny od 1991, oraz RST Roztocze, założone w tym samym 1991 roku. Razem zatrudniają około sześciuset osób i robią elementy do samolotów i śmigłowców — części, które trafiają między innymi do Airbusa A320. To jest praca, w której dokładność mierzy się w setnych milimetra i w której pomyłka o włos dyskwalifikuje element.",
        "Piszę o tym, bo to najlepsze możliwe tło dla zdania, które w tej branży wypowiada się rzadko: gotowanie nie jest inżynierią i nie wymaga takiej dokładności. Nawet w przybliżeniu.",
        "Spotykam mnóstwo osób, które nie gotują, bo boją się, że coś zrobią „źle”. Że doleją za dużo, że dosypią nie tyle, ile trzeba, że przepis mówi trzysta gramów, a oni mają dwieście osiemdziesiąt i już nie wiadomo, co robić. To przekonanie skutecznie odstrasza od kuchni i chcę je tu rozbroić: w zupie, w sosie, w gulaszu, w duszonym mięsie i w prawie wszystkim, co się doprawia do smaku, dwadzieścia gramów w jedną albo drugą stronę nie zmienia nic. Naprawdę nic. Obiad nie ma tolerancji wykonania.",
        "Jest jedno miejsce, gdzie dokładność faktycznie ma znaczenie, i nie będę udawać, że jest inaczej: wypieki. Ciasta, chleb, wszystko z mąką, cukrem i proszkiem do pieczenia — tam proporcje decydują i tam „na oko” kończy się zakalcem. I akurat tam urządzenie pomaga w sposób bardzo prozaiczny, bo ma wbudowaną wagę: składniki waży się w tym samym naczyniu, w którym się je potem miesza, bez trzech misek i bez osobnej wagi na blacie.",
        "Czyli krótko: dokładność jest wtedy, kiedy jest potrzebna, i nie trzeba jej pilnować, kiedy nie jest. To brzmi jak drobiazg, a jest jedną z tych rzeczy, które w praktyce najbardziej zmieniają, czy ktoś gotuje, czy tylko planuje, że kiedyś zacznie.",
        "I żeby nie było, że wszystko sprowadzam do maszyn — w środku miasta stoi drewniany kościół Zwiastowania Najświętszej Marii Panny z 1727 roku, ufundowany przez Michała Zdzisława Zamoyskiego, jedyny na Zamojszczyźnie drewniany kościół dwuwieżowy zbudowany w formach barokowych. Nikt go nie robił z tolerancją setnych milimetra, a stoi trzysta lat. To też coś mówi o tym, ile precyzji rzeczy naprawdę potrzebują.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tomaszowie Lubelskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli ktoś w domu mówi „ja się do gotowania nie nadaję, bo zawsze coś przesolę”, weźcie go na to spotkanie. To jest dokładnie ta osoba, której najbardziej przyda się zobaczyć, jak mało to naprawdę wymaga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tomaszowie Lubelskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tomaszowskiej rodziny",
      paragraphs: [
        "Tomaszów Lubelski liczy nieco ponad siedemnaście tysięcy mieszkańców i wyraźnie się kurczy — w samym 2025 roku urodziło się tu siedemdziesiąt jeden osób, a zmarły dwieście dwadzieścia trzy. Do Lublina jest stąd ponad sto dwadzieścia kilometrów, więc to nie jest miasto, z którego wpada się gdzieś na zakupy po pracy.",
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

  districtsHeading: "Do których części Tomaszowa Lubelskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie publikuje oficjalnego wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Tomaszów Lubelski też przyjadę",
  nearbyParagraphs: [
    "Bełżec, Susiec, Tarnawatka, Krynice, Rachanie, Łaszczów, Jarczów i Lubycza Królewska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bełżec", "Susiec", "Tarnawatka", "Łaszczów", "Lubycza Królewska", "Zamość"],

  about: blokOMnie("do Tomaszowa Lubelskiego", "w Tomaszowie Lubelskim i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Tomaszowa Lubelskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Tomaszowie Lubelskim"),
    {
      question: "Trzeba wszystko dokładnie odmierzać?",
      answer:
        "W zupie, sosie, gulaszu i we wszystkim, co się doprawia do smaku — nie, i dwadzieścia gramów w jedną czy drugą stronę nie zmienia niczego. Dokładność ma znaczenie przy wypiekach, gdzie proporcje realnie decydują, i tam pomaga wbudowana waga: składniki waży się w tym samym naczyniu, w którym się je potem miesza.",
    },
    {
      question: "Nie umiem gotować „na oko”. To się nadaje dla mnie?",
      answer:
        "Właśnie dla Was. Przepis jest prowadzony krok po kroku, więc nie trzeba niczego oceniać ani zgadywać — jest lista i się ją wykonuje. Najlepiej przyjść na prezentację z tą osobą w domu, która mówi, że się do gotowania nie nadaje.",
    },
  ],

  geo: { lat: 50.447, lng: 23.418 },
};
