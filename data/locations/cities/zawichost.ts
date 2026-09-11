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
 * ZAWICHOST — miasto w powiecie sandomierskim, 1 584 mieszkańców
 * (31.12.2024, GUS). Istniało przed 1255 r.; przywilej Bolesława
 * Wstydliwego z 1257 r. Prawa miejskie UTRACONE W 1888 r.
 * i ODZYSKANE JUŻ W 1926 r. — czyli sto lat temu, a nie
 * w XXI wieku jak większość miast tego regionu. Nie ma tu mostu
 * na Wiśle; jedyną przeprawą jest sezonowy prom do Kosiny.
 *
 * KĄT: mała kuchnia i blat — czyli ile miejsca to naprawdę
 * zajmuje i co z blatu znika. Miasto, które od wieków ma jedno
 * wąskie przejście na drugą stronę rzeki i układa wokół niego
 * całą resztę, jest właściwym miejscem na stronę o kuchni,
 * w której wolnego blatu jest półtora metra.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie zajmuje miejsce i że to jest realny koszt,
 *   o którym sprzedawcy mówią niechętnie,
 * — że mierzy się nie tylko szerokość, ale i WYSOKOŚĆ pod szafką,
 *   bo pokrywę trzeba otworzyć do góry,
 * — co ono z blatu ZDEJMUJE, a czego nie zdejmie,
 * — i że urządzenie schowane do szafki przestaje być używane —
 *   to jest najważniejsze zdanie tej strony.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH WYMIARÓW W CENTYMETRACH. Nie podaję z pamięci
 *   wysokości, szerokości ani wagi urządzenia. Na stronie jest
 *   wprost: „przyjadę z nim i zmierzymy u Ciebie". To jest
 *   uczciwsze niż liczba, której nie zweryfikowałam.
 * — ŻADNYCH PORAD O INSTALACJI ELEKTRYCZNEJ. Temat starej
 *   instalacji należy do innego miasta i celowo go tu nie ruszam.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNEJ OBIETNICY, że urządzenie zastąpi wszystko i że
 *   pozbędziecie się reszty sprzętu. Nie zastąpi patelni,
 *   piekarnika, czajnika przy jednej filiżance ani tostera.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Cmentarzysko sprzętów
 * kuchennych" (inne miasto) pyta, co z kupionych urządzeń
 * naprawdę pracuje. Tutaj chodzi o FIZYCZNE MIEJSCE: ile blatu
 * zostaje i gdzie to stoi. „Zmywanie" należy do miasta porcelany.
 * „Skala i pojemność" dotyczy wielkości porcji, nie wielkości
 * urządzenia.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że prom kursuje i w jakich godzinach. Jest
 *   sezonowy, zamykany przy wysokiej wodzie i zimą, a aktualnego
 *   rozkładu na 2026 r. nie potwierdziłam. Piszę, że przeprawa
 *   jest promowa i zależna od wody.
 * — NIE PODAJĘ największego pracodawcy. Brak jakichkolwiek
 *   danych.
 * — NIE PISZĘ, że Zawichost żyje z sadownictwa. Potwierdzone
 *   jest tylko to, że miasto jest końcowym punktem Sandomierskiego
 *   Szlaku Jabłkowego — a to fakt turystyczny, nie gospodarczy.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Zawichostu nic nie potwierdzono.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA
 *   TABLICA. Historyczny podział na „miasto polskie"
 *   i „żydowskie" jest sprzed 1942 r. i nie jest podziałem
 *   administracyjnym — nie używam go jako listy dzielnic.
 *
 * ŚWIADOMIE POMINIĘTE. W czasie okupacji istniało tu getto,
 * zlikwidowane 22 października 1942 r. To jest prawda o tym
 * mieście, ale strona handlowa o sprzęcie kuchennym nie jest
 * miejscem, w którym wolno tego używać jako tła dla oferty.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto istniało przed 1255 r., przywilej Bolesława
 *   Wstydliwego 1257 r., utrata praw miejskich 1888 r.,
 *   odzyskanie 1926 r.,
 * — brak mostu na Wiśle; przeprawa promowa do Kosiny,
 *   sezonowa i zależna od stanu wody,
 * — kościół Wniebowzięcia NMP w formie barokowej z lat
 *   1738–1744 stoi na fundamentach romańskiej świątyni
 *   z drugiej połowy XI w.,
 * — miasto jest końcowym punktem Sandomierskiego Szlaku
 *   Jabłkowego,
 * — 1 584 mieszkańców (31.12.2024).
 */
export const ZAWICHOST: CityContent = {
  slug: "zawichost",
  h1: "Thermomix Zawichost – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zawichost — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Zawichoście: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zawichost — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zawichoście. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zawichostu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Zawichost i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zanim porozmawiamy o cenie — zmierzmy blat.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zawichoście – jak wygląda prezentacja?",
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
      id: "blat",
      heading: "Miasto z jedną przeprawą — czyli o kuchni, w której wolnego blatu jest półtora metra",
      paragraphs: [
        "Zawichost leży nad Wisłą i nie ma mostu. Na drugą stronę przepływa się promem, tak jak od czasów Zygmunta Augusta, a prom pływa wtedy, kiedy pozwala woda — przy wysokim stanie i zimą nie pływa wcale. Miasto od wieków układa swoje sprawy wokół jednego wąskiego przejścia. To jest dokładnie ta umiejętność, której wymaga mała kuchnia.",
        "Powiem więc rzecz, którą sprzedawcy mówią najniechętniej: to urządzenie zajmuje miejsce. Na stałe. I to jest realny koszt, obok ceny — bo w kuchni o dwóch metrach blatu każde stałe urządzenie to jedna trzecia przestrzeni roboczej.",
        "Nie podam Wam tu wymiarów z pamięci, bo nie chcę podać złych. Przywiozę urządzenie i zmierzymy u Was. Ale powiem, co mierzyć: nie samą szerokość. Przede wszystkim WYSOKOŚĆ pod górną szafką — bo pokrywę otwiera się do góry i to ona decyduje, czy urządzenie stanie tam, gdzie chcecie, czy piętnaście centymetrów dalej. Ludzie mierzą blat, zapominają o szafce i potem przestawiają sprzęt co drugi dzień.",
        "Teraz druga strona rachunku, bo ona jest realna. Z blatu i z szafek zwykle znika kilka rzeczy naraz: blender kielichowy, mikser ręczny, waga kuchenna, czasem malakser i maszynka do mielenia. To nie jest marketingowa obietnica, tylko obserwacja z domów, do których wracam po roku.",
        "I od razu to, czego nie zdejmie, żeby nie było rozczarowania: patelni, piekarnika, czajnika przy jednej filiżance herbaty ani tostera. Kto liczy, że kuchnia zrobi się pusta, ten będzie zawiedziony.",
        "Zdanie najważniejsze na tej stronie: urządzenie schowane do szafki przestaje być używane. Widzę to regularnie. Jeżeli po zmierzeniu wyjdzie, że nie ma go gdzie postawić na stałe — lepiej powiedzieć to sobie przed zakupem niż po. Wolę stracić sprzedaż niż mieć klientkę, która co wieczór wyciąga kilkanaście kilogramów z dolnej szafki i po miesiącu przestaje.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/tm7", label: "Co potrafi TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zawichoście?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie małą kuchnię, powiedzcie to przy umawianiu — zaczniemy od zmierzenia miejsca, a dopiero potem będziemy gotować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zawichoście"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zawichojskiej rodziny",
      paragraphs: [
        "Zawichost liczy niespełna tysiąc sześćset mieszkańców i jest jednym z najstarszych miast regionu — istniał już przed 1255 rokiem, a przywilej dostał od Bolesława Wstydliwego w 1257. Prawa miejskie stracił w 1888 roku, ale odzyskał je już w 1926 — czyli sto lat temu, a nie, jak większość sąsiadów, dopiero w tym stuleciu. Barokowy kościół z lat 1738–1744 stoi na fundamentach romańskiej świątyni z drugiej połowy XI wieku. Tutaj też kończy się Sandomierski Szlak Jabłkowy.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu — co przy małym blacie ma znaczenie podwójne, bo nie rozstawia się wokół trzech misek.",
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

  districtsHeading: "Do których części Zawichostu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Linowa, Czyżowa, Piotrowic, Pawłowa i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Zawichost też przyjadę",
  nearbyParagraphs: [
    "Sandomierz, Koprzywnica, Ożarów, Annopol i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sandomierz", "Koprzywnica", "Ożarów", "Annopol", "Klimontów", "Opatów"],

  about: blokOMnie("do Zawichostu", "w Zawichoście i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zawichostu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zawichoście"),
    {
      question: "Ile miejsca zajmuje Thermomix na blacie?",
      answer:
        "Nie podam Wam wymiarów z pamięci, żeby nie podać złych — przywiozę urządzenie i zmierzymy u Was na miejscu. Powiem za to, co mierzyć: przede wszystkim wysokość pod górną szafką, bo pokrywę otwiera się do góry. To ona najczęściej decyduje o tym, gdzie sprzęt ostatecznie stanie.",
    },
    {
      question: "Czy Thermomix zastąpi inne sprzęty w małej kuchni?",
      answer:
        "Część tak: blender kielichowy, mikser, wagę, często malakser i maszynkę do mielenia. Ale nie zastąpi patelni, piekarnika, czajnika przy jednej filiżance ani tostera. Kto liczy, że kuchnia zrobi się pusta, będzie rozczarowany.",
    },
    {
      question: "Mam bardzo mało blatu — czy w ogóle warto?",
      answer:
        "Powiem szczerze: jeżeli po zmierzeniu wyjdzie, że nie ma go gdzie postawić na stałe, lepiej się wstrzymać. Urządzenie schowane do dolnej szafki przestaje być używane po kilku tygodniach — widzę to regularnie i wolę powiedzieć to przed zakupem niż po.",
    },
  ],

  geo: { lat: 50.8056, lng: 21.8531 },
};
