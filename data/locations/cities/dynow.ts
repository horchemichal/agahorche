import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * DYNÓW — miasto w powiecie rzeszowskim, 5 995 mieszkańców
 * (31.12.2024, GUS). Prawa miejskie prawdopodobnie przed 1429 r.,
 * UTRACONE W 1919 r. i ODZYSKANE W 1946 r. Leży na Pogórzu
 * Dynowskim. Kursuje stąd kolejka wąskotorowa do Przeworska.
 *
 * KĄT: jajka. Jedyne miejsce w serwisie, gdzie ten składnik jest
 * tematem, a nie dodatkiem. Miasto na pogórzu, w okolicy drobnych
 * gospodarstw, jest do tego właściwym miejscem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — co urządzenie z jajkami ROBI: kremy, masy, farsze, pasty,
 *   jajecznicę, gotowanie na parze,
 * — czego NIE zrobi: jajka sadzonego, omletu z brzegiem, niczego
 *   smażonego — bo nie rumieni,
 * — że przy jednym jajku na śniadanie patelnia jest szybsza
 *   i tak powiem,
 * — i twarda odmowa: nic o bezpieczeństwie surowych jajek ani
 *   o stopniu ścięcia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O SUROWYCH JAJKACH: świeżość, przechowywanie,
 *   mycie, salmonella, stopień ścięcia, „czy można na surowo".
 *   To jest dziedzina bezpieczeństwa żywności. Ta sama rodzina
 *   odmów co podroby w Piaskach, surowe mięso w Modliborzycach
 *   i przetwory w Hrubieszowie. Przy jajkach ta granica jest
 *   szczególnie łatwa do przekroczenia i dlatego stoi tu na wprost.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (cholesterol, białko, „ile jajek
 *   tygodniowo"). To nie jest strona dietetyczna.
 * — ŻADNEGO PORÓWNYWANIA jajek „wiejskich" i sklepowych. Nie mam
 *   na to danych i nie moja rola.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Beza / ubijanie piany" (Ostrów
 * Lubelski) dotyczy WYŁĄCZNIE napowietrzania białka i tam ten wątek
 * został wyczerpany — tu go NIE powtarzam i piszę o tym wprost.
 * „Sosy, które się warzą" (Sędziszów Małopolski) dotyczy
 * TEMPERATURY w emulsjach. „Śniadanie" jest zajęte przez inne
 * miasto i dotyczy PORY DNIA, nie składnika. „Mleko i nabiał" to
 * inny surowiec.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — MASAKRA W DYNOWIE, 15–28 września 1939 r. (ok. 170–200
 *   zamordowanych osób, akcja zbiegła się z Rosz Haszana).
 *   Przed wojną Żydzi stanowili prawie połowę mieszkańców miasta
 *   (2066 osób w 1900 r.). Fakty sprawdzone. NIE UŻYWAM ICH —
 *   to nie są ozdobniki do strony o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ liczby 6 186 mieszkańców, mimo że jest na OFICJALNEJ
 *   STRONIE MIASTA. Pochodzi z 2014 r. GUS na 31.12.2024: 5 995.
 *   To dobry przykład na to, że nawet urzędowe źródło bywa
 *   nieaktualne o dziesięć lat,
 * — NIE PODAJĘ OPERATORA ANI CZĘSTOTLIWOŚCI KURSÓW kolejki
 *   wąskotorowej. Potwierdzone jest, że kursuje w 2026 r.
 *   (obchodzono 122-lecie) — i tylko to piszę,
 * — NIE PISZĘ, że Dynów żyje z sadownictwa ani z przetwórstwa
 *   owoców. Oficjalna charakterystyka miasta wymienia przetwórstwo
 *   spożywcze jako POTENCJALNY KIERUNEK, a nie istniejącą branżę,
 * — NIE WSKAZUJĘ NAJWIĘKSZEGO PRACODAWCY. Dawny największy zakład,
 *   Spółdzielnia Inwalidów (ponad 150 osób), UPADŁ ok. 2017 r.
 *   Co go zastąpiło — nieustalone,
 * — NIE PISZĘ, że „Pogórze Dynowskie" to gmina albo powiat.
 *   To mezoregion fizycznogeograficzny; Dynów leży na jego obszarze,
 * — WYMIENIAM chleb żytni z dynowskiej Gminnej Spółdzielni jako
 *   wpis na Liście Produktów Tradycyjnych, ale NIE PISZĘ, że
 *   piekarnia nadal działa — tego nie potwierdziłem. W tekście
 *   jest to sformułowane w czasie przeszłym dokonanym („trafił
 *   na listę"),
 * — OSIEDLA: miasto dzieli się na cztery jednostki pomocnicze,
 *   ale ONE NIE MAJĄ NAZW — to Osiedle Nr 1, 2, 3 i 4. Podaję je
 *   tak, jak są, bez wymyślania nazw własnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie utracone w 1919 r., odzyskane w 1946 r.,
 * — kolejka wąskotorowa Przeworsk–Dynów kursuje w 2026 r.,
 * — chleb żytni tradycyjny z dynowskiej Gminnej Spółdzielni
 *   „Samopomoc Chłopska" trafił na Listę Produktów Tradycyjnych,
 * — miasto dzieli się na Osiedla Nr 1–4 (bez nazw własnych),
 * — 5 995 mieszkańców (31.12.2024).
 */
export const DYNOW: CityContent = {
  slug: "dynow",
  h1: "Thermomix Dynów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dynów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Dynowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dynów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dynowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dynowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Dynów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jajko sadzone? Nie. I nigdy nie będzie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dynowie – jak wygląda prezentacja?",
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
      id: "jajka",
      heading: "Miasto na pogórzu — czyli o jajkach, i o tym, czego z nich nie zrobię",
      paragraphs: [
        "Dynów leży na Pogórzu Dynowskim, wśród drobnych gospodarstw, i to jest właściwe miejsce, żeby napisać o składniku, który w tym serwisie nigdzie indziej nie jest tematem: o jajkach.",
        "Zacznę od tego, czego to urządzenie z jajkami NIE zrobi, bo lista jest krótka i bardzo konkretna. Nie zrobi jajka sadzonego. Nie zrobi omletu z przyrumienionym brzegiem. Nie usmaży niczego — ono gotuje i gotuje na parze, ale nie rumieni, i żadne ustawienie tego nie obejdzie. Kto szuka sprzętu do jajka na patelni, powinien to wiedzieć w pierwszym akapicie, a nie po zakupie.",
        "To, co robi, jest jednak szersze, niż większość ludzi zakłada. Jajecznica — tak, i wychodzi bardziej kremowa niż z patelni, bo powstaje w niższej temperaturze przy stałym mieszaniu. Jajka na parze — tak. Kremy, masy do ciast, farsze, pasty jajeczne — tak, i to są rzeczy, przy których robi realną różnicę, bo jednocześnie miesza i pilnuje ciepła.",
        "Ubijania piany celowo tu nie rozwijam — napisałam o tym osobno przy innym mieście i nie będę powtarzać tej samej rzeczy dwa razy tylko po to, żeby strona wyglądała na pełniejszą.",
        "I uczciwie o skali: przy jednym jajku na śniadanie patelnia jest szybsza. Nie ma w tym żadnej wątpliwości i nie zamierzam tego owijać. Sens pojawia się wtedy, gdy jajka są częścią czegoś większego — masy, kremu, farszu — albo gdy równolegle w tym samym urządzeniu dzieje się coś jeszcze.",
        "Teraz granica, przy której nie ustąpię, bo przy jajkach jest szczególnie łatwo ją przekroczyć: nie doradzam nic o bezpieczeństwie. Ani o świeżości, ani o przechowywaniu, ani o myciu, ani o tym, czy coś jest wystarczająco ścięte, ani o jajkach na surowo w deserach. To jest dziedzina bezpieczeństwa żywności, a ja jestem przedstawicielką handlową. W okolicy takiej jak ta jest sporo osób, które wiedzą o tym więcej ode mnie, i to do nich należy takie pytanie.",
        "Nie porównuję też jajek z gospodarstwa ze sklepowymi. Nie mam na to danych, a rzucanie takich zdań z pozycji sprzedawcy sprzętu byłoby zwykłym naciąganiem.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dynowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, co robicie u siebie najczęściej. Jeśli to coś, czego urządzenie nie zrobi, powiem to od razu przez telefon — zamiast jechać i przekonywać się na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dynowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dynowskiej rodziny",
      paragraphs: [
        "Dynów liczy blisko sześć tysięcy mieszkańców — nieco mniej, niż podaje wiele źródeł, łącznie z oficjalną stroną miasta, na której wisi liczba z 2014 roku. Prawa miejskie miasto straciło w 1919 roku i odzyskało w 1946. Kolejka wąskotorowa do Przeworska kursuje tu do dziś; w 2026 roku obchodzono jej sto dwudziestą drugą rocznicę. Chleb żytni z dynowskiej Gminnej Spółdzielni trafił na ministerialną Listę Produktów Tradycyjnych.",
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

  districtsHeading: "Do których części Dynowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto dzieli się na cztery osiedla, ale one nie mają nazw własnych — są po prostu ponumerowane. Nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę.",
  ],
  districts: ["Osiedle Nr 1", "Osiedle Nr 2", "Osiedle Nr 3", "Osiedle Nr 4"],

  nearbyHeading: "Poza Dynów też przyjadę",
  nearbyParagraphs: [
    "Przeworsk, Brzozów, Błażowa, Kańczuga, Nozdrzec i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Przeworsk", "Brzozów", "Błażowa", "Kańczuga", "Rzeszów", "Sanok"],

  about: blokOMnie("do Dynowa", "w Dynowie i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dynowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Dynowie"),
    {
      question: "Zrobię w tym jajecznicę albo jajko sadzone?",
      answer:
        "Jajecznicę tak — wychodzi bardziej kremowa niż z patelni, bo powstaje w niższej temperaturze przy stałym mieszaniu. Jajka sadzonego nie i nigdy nie będzie: urządzenie gotuje i gotuje na parze, ale nie rumieni. Przy jednym jajku na śniadanie patelnia jest zresztą po prostu szybsza i tak to powiem.",
    },
    {
      question: "Ile gotować jajka i czy są bezpieczne na surowo w kremie?",
      answer:
        "Tego nie doradzę i wolę powiedzieć dlaczego. Świeżość, przechowywanie, stopień ścięcia i wszystko, co dotyczy surowych jajek, to dziedzina bezpieczeństwa żywności — a ja sprzedaję sprzęt kuchenny. Czasy gotowania znajdziecie w przepisach urządzenia; po resztę idźcie do rzetelnego źródła.",
    },
  ],

  geo: { lat: 49.8156, lng: 22.2333 },
};
