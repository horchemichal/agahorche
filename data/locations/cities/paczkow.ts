import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * PACZKÓW — miasto w powiecie nyskim, 6 592 mieszkańców
 * (31.12.2024, GUS); cała gmina 11 350. Prawa miejskie
 * 8 MARCA 1254 r., lokacja biskupa wrocławskiego TOMASZA I
 * na prawie flamandzkim — nieprzerwanie od tego czasu; miasto
 * obchodzi urodziny 8 marca. Zachowany wewnętrzny pierścień
 * murów o obwodzie ok. 1200 m z DZIEWIĘTNASTOMA z pierwotnych
 * dwudziestu czterech baszt. Działa tu MUZEUM GAZOWNICTWA
 * w budynkach gazowni z 1902 r. — jedyny w Polsce obiekt
 * z zachowanym kompletnym ciągiem produkcyjnym.
 *
 * UWAGA — HOMONIMY: nie mylić z Paczkowem (wieś w wielkopolskim,
 * gmina Swarzędz) ani z Paczkowem na Dolnym Śląsku. Stary
 * Paczków jest sołectwem TEJ gminy.
 *
 * KĄT: dżemy, konfitury i powidła — czyli robienie czegoś,
 * co ma przetrwać. Miasto, które zamiast złomować gazownię
 * z 1902 r. zachowało z niej cały ciąg produkcyjny co do
 * ostatniego licznika, jest właściwym miejscem na stronę
 * o gotowaniu na przetrwanie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to jest ten jeden przypadek, w którym urządzenie robi
 *   rzecz naprawdę uciążliwą za Was: dżem trzeba mieszać przez
 *   cały czas, bo cukier przywiera i przypala się w minutę,
 * — że owoce trzeba samemu umyć, wydrylować i obrać,
 * — że masa PIENI SIĘ I ROŚNIE, więc naczynia nie wolno
 *   napełniać tak, jak przy zupie — gotuje się mniej naraz,
 *   niż się wydaje,
 * — że gorący cukier jest niebezpieczny i przy przelewaniu
 *   trzeba uważać,
 * — i że o samym pasteryzowaniu i przechowywaniu NIE DORADZAM.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O PASTERYZACJI, WYPARZANIU SŁOIKÓW,
 *   TRWAŁOŚCI PRZETWORÓW ANI O TYM, JAK POZNAĆ, ŻE SIĘ ZEPSUŁO.
 *   To bezpieczeństwo żywności — jedno zdanie odmowy.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI CUKRU. To już jest przepis, a przepisy
 *   z gwarancją trwałości to nie moja działka.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ani o cukrze, ani
 *   o „domowym bez konserwantów".
 * — ŻADNEJ KRYTYKI dżemów sklepowych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowe danie ze słoika"
 * (inne miasto) dotyczy DAŃ kupowanych w słoikach. „Soki
 * i moszcze" należą do regionu winorośli. „Cukier" (Koprzywnica)
 * dotyczy cukru jako składnika i poparzenia karmelem —
 * dlatego tutaj ostrzeżenie o gorącej masie jest KRÓTKIE,
 * jednozdaniowe, i odsyła dalej. „Drylowanie wiśni" (Ożarów)
 * dotyczy przygotowania owoców — i dlatego tutaj drylowanie
 * jest tylko wymienione jako to, czego urządzenie nie robi.
 * „Gotowanie na zapas" (Stopnica) dotyczy mrożenia porcji dań.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że pierścień murów jest kompletny. NIE JEST:
 *   zostało 19 z 24 baszt, pięć zburzono w XX w. przy rozbudowie
 *   szkół, w 1870 i 1873 r. przebito cztery nowe przejścia,
 *   a zewnętrzną linię obronną rozebrano.
 * — NIE UŻYWAM OKREŚLENIA „POLSKIE CARCASSONNE" jako faktu.
 *   To etykieta marketingowa bez oparcia naukowego, do której
 *   pretendują też Szydłów i Chełmno. Jeśli w ogóle o niej piszę,
 *   to jako o przydomku.
 * — NIE PISZĘ, że w mieście działa cegielnia. Produkcję
 *   wstrzymano jesienią 2023 r., wznowienia NIE potwierdzono,
 *   mimo że zakład figuruje na liście fabryk producenta.
 * — NIE PISZĘ o strefie ekonomicznej jako o działającej.
 *   To 37 ha w przygotowaniu; budowa infrastruktury planowana
 *   na 2027 r.
 * — NIE WSKAZUJĘ największego pracodawcy. Nie ustalono go.
 * — NIE PODAJĘ godzin ani cen muzeum. Dane były niedatowane.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Paczkowa nic nie znaleziono.
 * — NIE PISZĘ, że Paczków ma dwujęzyczne tablice. NIE MA.
 * — NIE wymyślam osiedli. Brak wykazu; gmina ma tylko sołectwa.
 *   districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 8 marca 1254 r., biskup wrocławski Tomasz I,
 *   prawo flamandzkie, nieprzerwanie do dziś,
 * — zachowany wewnętrzny pierścień murów ok. 1200 m,
 *   19 z pierwotnych 24 baszt, cztery bramy,
 * — kościół św. Jana Ewangelisty budowany od 1350 r. z inicjatywy
 *   biskupa Przecława z Pogorzeli, w XVI w. zmilitaryzowany;
 *   w nawie południowej stoi STUDNIA, dzięki której można było
 *   przetrwać oblężenie,
 * — Muzeum Gazownictwa w budynkach gazowni z 1902 r., która
 *   zasilała miasto w gaz do połowy 1977 r.; jedyny w Polsce
 *   obiekt z kompletnym zachowanym ciągiem produkcyjnym,
 *   w zbiorach ok. 600 liczników gazowych; muzeum czynne
 *   (potwierdzone wydarzeniem z maja 2026 r.),
 * — ten sam biskup Przecław z Pogorzeli kupił w 1344 r. Grodków —
 *   oba miasta należały do księstwa nyskiego biskupów
 *   wrocławskich,
 * — 6 592 mieszkańców miasta, 11 350 gminy (31.12.2024).
 */
export const PACZKOW: CityContent = {
  slug: "paczkow",
  h1: "Thermomix Paczków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Paczków — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Paczkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Paczków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Paczkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Paczkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Paczków i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dżem trzeba mieszać przez godzinę. Tego akurat nie musicie robić sami.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Paczkowie – jak wygląda prezentacja?",
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
      id: "dzemy",
      heading: "Miasto, które zachowało całą gazownię — czyli o robieniu rzeczy, które mają przetrwać",
      paragraphs: [
        "Kiedy w połowie 1977 roku paczkowska gazownia przestała zasilać miasto w gaz, nie rozebrano jej na złom. Zostawiono wszystko — cały ciąg produkcyjny, co do ostatniego urządzenia, i do tego kolekcję sześciuset liczników gazowych. Dziś jest tam muzeum i podobno jedyny w Polsce obiekt tego rodzaju z kompletnym zachowanym wyposażeniem. To miasto najwyraźniej umie zachowywać rzeczy — tak jak umiało zachować dziewiętnaście z dwudziestu czterech baszt swojego muru.",
        "Więc napiszę tu o jedynym gotowaniu, którego cały sens polega na tym, żeby coś przetrwało: o dżemach, konfiturach i powidłach.",
        "I to jest akurat ten przypadek, w którym urządzenie naprawdę robi za Was rzecz uciążliwą, a nie tylko wygodną. Dżem trzeba mieszać przez cały czas gotowania — bo cukier osiada na dnie, przywiera i przypala się dosłownie w minutę, a przypalony dżem nadaje się do wyrzucenia w całości. Klasyczne robienie powideł to stanie przy garnku z drewnianą łyżką przez godzinę albo dłużej. Tutaj ustawiacie i odchodzicie, a ono miesza i pilnuje temperatury samo. Nic się nie przypali, bo nic nie ma szansy osiąść.",
        "Trzy rzeczy, o których trzeba wiedzieć wcześniej.",
        "Owoce przygotowujecie sami. Umycie, obranie, wydrylowanie — to zostaje przy Waszych rękach i to jest zwykle dłuższa część roboty niż samo gotowanie.",
        "Masa się pieni i rośnie. To nie jest zupa — gorący dżem podnosi się w naczyniu znacznie wyżej, niż wskazuje objętość owoców. Gotuje się więc mniejsze partie, niż podpowiada rozsądek, i raczej dwa razy niż raz. Kto napełni naczynie po brzegi jak do rosołu, będzie zmywał blat.",
        "I krótko, ale poważnie: gorąca słodka masa parzy dotkliwiej niż wrzątek i trzyma się skóry. Przy przelewaniu do słoików miejcie na to uwagę — piszę o tym szerzej przy innym mieście, ale wolę powtórzyć.",
        "Czego natomiast nie doradzę i przy czym nie ustąpię: niczego o pasteryzacji, wyparzaniu słoików, trwałości przetworów ani o tym, po czym poznać, że coś się zepsuło. To jest bezpieczeństwo żywności, a ja jestem przedstawicielką handlową, nie technologiem. Po tę wiedzę idźcie do rzetelnego źródła — ta część roboty jest ważniejsza niż samo gotowanie i nie zamierzam przy niej zgadywać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Paczkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie swoje owoce, powiedzcie to przy umawianiu — zrobimy z nich małą partię i zobaczycie, ile masa naprawdę rośnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Paczkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla paczkowskiej rodziny",
      paragraphs: [
        "Paczków liczy niecałe sześć i pół tysiąca mieszkańców, a cała gmina ponad jedenaście. Prawa miejskie dostał 8 marca 1254 roku od biskupa wrocławskiego Tomasza I, na prawie flamandzkim, i nigdy ich nie stracił — miasto obchodzi urodziny dokładnie tego dnia. Zachował się wewnętrzny pierścień murów o obwodzie około tysiąca dwustu metrów z dziewiętnastoma z pierwotnych dwudziestu czterech baszt; pięć zburzono w XX wieku przy rozbudowie szkół, więc pierścień nie jest kompletny, choć bywa tak reklamowany. Najbardziej niezwykły detal jest w środku kościoła świętego Jana Ewangelisty: w nawie południowej stoi studnia. Kościół zmilitaryzowano w XVI wieku, a własna woda oznaczała, że oblężenie dało się przetrwać bez wychodzenia za mury.",
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

  districtsHeading: "Do których części Paczkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w murach i poza nimi — oraz do sołectw gminy, w tym Kamienicy, Trzeboszowic, Starego Paczkowa i pozostałych, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Paczków też przyjadę",
  nearbyParagraphs: [
    "Nysa, Głuchołazy, Otmuchów, Grodków, Prudnik i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nysa", "Głuchołazy", "Grodków", "Prudnik", "Brzeg", "Opole"],

  about: blokOMnie("do Paczkowa", "w Paczkowie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Paczkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Paczkowie"),
    {
      question: "Czy Thermomix nadaje się do robienia dżemów?",
      answer:
        "To jeden z niewielu przypadków, w których naprawdę wyręcza z rzeczy uciążliwej. Dżem trzeba mieszać przez cały czas, bo cukier osiada, przywiera i przypala się w minutę — urządzenie miesza i trzyma temperaturę samo, więc nic nie ma szansy osiąść na dnie.",
    },
    {
      question: "Ile owoców można wsypać naraz?",
      answer:
        "Mniej, niż podpowiada rozsądek. Gorąca masa mocno się pieni i podnosi w naczyniu, więc lepiej zrobić dwie mniejsze partie niż jedną dużą. Kto napełni naczynie po brzegi jak do rosołu, będzie zmywał blat.",
    },
    {
      question: "Czy urządzenie wypasteryzuje słoiki?",
      answer:
        "Nie doradzam niczego w sprawie pasteryzacji, wyparzania słoików ani trwałości przetworów — to bezpieczeństwo żywności, a nie moja dziedzina. Owoce trzeba też umyć, obrać i wydrylować samodzielnie; urządzenie zajmuje się wyłącznie gotowaniem i mieszaniem.",
    },
  ],

  geo: { lat: 50.4636, lng: 17.0058 },
};
