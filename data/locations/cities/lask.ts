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
 * ŁASK — gmina miejsko-wiejska w powiecie łaskim. MIASTO 15 958
 * mieszkańców, CAŁA GMINA 26 843 (31.12.2024, GUS). Brief mówił
 * 17 000 — to jest liczba pośrednia; samo miasto ma niecałe 16
 * tysięcy, a 26 tysięcy to cała gmina. W tekście podaję OBIE
 * i mówię, która jest która.
 *
 * PRAWA MIEJSKIE 1422 r. — NADAWCY NIE PODAJĘ, źródło podaje
 * tylko rok.
 *
 * KOLEGIATA Niepokalanego Poczęcia NMP i św. Michała Archanioła
 * — wzniesiona 1517–1523 z fundacji prymasa JANA ŁASKIEGO;
 * po pożarze 1749 r. przebudowana barokowo.
 * PŁASKORZEŹBA Matki Bożej z Dzieciątkiem — dar papieża LEONA X
 * dla prymasa Łaskiego, przywieziona z Rzymu w PAŹDZIERNIKU
 * 1515 r.; kult od 1531 r.
 * ⚠️ MATERIAŁ PŁASKORZEŹBY JEST SPORNY: strona sanktuarium
 * mówi o pracowni Andrei della Robbia i o LAZUROWEJ TERAKOCIE,
 * a miasto i powiat o ALABASTRZE. Della Robbia pracowali
 * w glazurowanej terakocie — to sprzeczność wewnątrz źródeł.
 * PISZĘ: „płaskorzeźba z przełomu XV i XVI wieku, zwyczajowo
 * nazywana alabastrową". NIE PRZYPISUJĘ ANI MATERIAŁU,
 * ANI AUTORA.
 * OBALONE: ranga kolegiaty i sanktuarium jest WSPÓŁCZESNA —
 * z 2005 r., nie historyczna. Koronacja 25 września 2005 r.
 *
 * KOŚCIÓŁ ŚW. DUCHA z 1666 r., modrzewiowy, z prezbiterium
 * skierowanym na zachód (rzadkość). PARK MIEJSKI IM. RODU
 * ŁASKICH z przełomu XVIII i XIX w.
 *
 * DZIELNICA KOLUMNA — jednostka pomocnicza od 13 lutego 1992 r.,
 * z własną radą. To NIE jest osobna miejscowość.
 * GMINA MA 31 SOŁECTW.
 *
 * PIWO ŁASKIE na Liście Produktów Tradycyjnych od 25 września
 * 2008 r.; ok. 1500 r. tutejszy cech piwowarów liczył 41
 * członków; miejscowy browar działa. WSPOMINAM O TRADYCJI
 * PIWOWARSKIEJ JEDNYM ZDANIEM HISTORYCZNYM i NIE ZACHĘCAM
 * DO PICIA, nie podaję nazw ani parametrów.
 *
 * ⚠️ TEMAT BEZWZGLĘDNIE WYŁĄCZONY: w Łasku stacjonuje baza
 * lotnictwa taktycznego. NIE POJAWIA SIĘ NA TEJ STRONIE
 * W ŻADNEJ FORMIE. Konsekwencje, których pilnuję w całym pliku:
 *   1. Żadnych odniesień do wojska, lotnictwa, samolotów.
 *   2. ŻADNYCH METAFOR LOTNICZYCH — nawet niewinnych, w rodzaju
 *      „nabrać wysokości" czy „na pełnych obrotach". Czytelniczki
 *      natychmiast podstawiłyby bazę.
 *   3. NIE PISZĘ, że kościół św. Ducha jest kościołem
 *      garnizonowym, mimo że nim jest — to prowadzi wprost
 *      do tematu.
 *
 * KĄT: DWA DANIA Z JEDNEGO GOTOWANIA. Kąt bierze się z tego,
 * że Łask jest jednym organizmem złożonym z dwóch: miasta
 * i dzielnicy Kolumna, która ma własną radę od 1992 r.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najbardziej niedoceniana rzecz w tym urządzeniu to nie
 *   szybkość, tylko możliwość zrobienia DWÓCH RÓŻNYCH RZECZY
 *   w jednym przebiegu,
 * — konkretnie: pod pokrywką gotuje się zupa albo sos,
 *   a nad nią, w Varomie, drugie danie,
 * — że to nie jest to samo co „szybciej" — to jest inny
 *   sposób układania obiadu,
 * — że ma to twarde granice: zapachy się mieszają, więc ryba
 *   nad kompotem to zły pomysł,
 * — że nie wszystko da się zsynchronizować i czasem prościej
 *   zrobić po kolei,
 * — że przy dwóch różnych dietach w domu to jest najbardziej
 *   praktyczna funkcja, jaką znam,
 * — i ODMOWA: żadnych czasów, żadnych porad żywieniowych.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI przy gotowaniu
 *   surowego mięsa nad innym daniem. ODMOWA W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI DIETETYCZNYCH.
 * — ŻADNEJ WZMIANKI o bazie lotniczej i żadnych metafor
 *   lotniczych.
 * — ŻADNEGO ZACHĘCANIA DO ALKOHOLU.
 * — ŻADNYCH NAZW FIRM, w tym browaru.
 * — NIE ROBIĘ TŁA z bezrobocia (8,2%), z wynagrodzeń na poziomie
 *   80% średniej krajowej ani z depopulacji (−16,7%).
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Dwie rzeczy naraz" (inne
 * miasto) dotyczy ROBIENIA DWÓCH CZYNNOŚCI jednocześnie —
 * organizacji uwagi. „Dwa różne talerze przy jednym stole"
 * dotyczy domu, w którym ktoś je inaczej, i jest o relacjach.
 * Tutaj chodzi o KONKRETNY UKŁAD TECHNICZNY: naczynie plus
 * Varoma, czyli dwa dania w jednym przebiegu — i o jego granice.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ materiału ani autora płaskorzeźby.
 * — NIE PISZĘ, że kolegiata i sanktuarium mają rangę
 *   historyczną — pochodzi z 2005 r.
 * — NIE PODAJĘ nadawcy praw miejskich.
 * — NIE PODAJĘ nazwy pracodawcy — nie ustalono żadnego
 *   cywilnego.
 * — NIE PISZĘ o Kolumnie jako o dawnym letnisku ani uzdrowisku
 *   — tej opowieści nie potwierdziłam.
 * — NIE PISZĘ, że Grabia płynie przez samo miasto — nie
 *   potwierdzono.
 * — districts: wpisuję JEDYNĄ potwierdzoną jednostkę pomocniczą
 *   — dzielnicę Kolumna.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 15 958, gmina 26 843 mieszkańców (31.12.2024, GUS),
 * — prawa miejskie 1422 r.; gmina miejsko-wiejska z 31
 *   sołectwami,
 * — kolegiata wzniesiona 1517–1523 z fundacji prymasa Jana
 *   Łaskiego, po pożarze 1749 r. przebudowana barokowo,
 * — płaskorzeźba Matki Bożej z Dzieciątkiem — dar papieża
 *   Leona X, przywieziona z Rzymu w październiku 1515 r.,
 *   kult od 1531 r.; koronacja 25 września 2005 r.,
 * — kościół św. Ducha z 1666 r., modrzewiowy, z prezbiterium
 *   skierowanym na zachód,
 * — Park Miejski im. Rodu Łaskich z przełomu XVIII i XIX w.,
 * — dzielnica Kolumna jest jednostką pomocniczą od 13 lutego
 *   1992 r.,
 * — piwo łaskie na Liście Produktów Tradycyjnych od 25 września
 *   2008 r.; ok. 1500 r. cech piwowarów liczył 41 członków.
 */
export const LASK: CityContent = {
  slug: "lask",
  h1: "Thermomix Łask – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łask (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Łasku: bezpłatna prezentacja TM7 u Ciebie w domu, miasto, Kolumna i sołectwa gminy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łask — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łasku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łasku z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta, do Kolumny i do sołectw gminy.",

  highlights: highlightyStandardowe("Łask, Kolumna i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zupa pod spodem, drugie danie nad nią. Jeden przebieg.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łasku – jak wygląda prezentacja?",
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
      id: "dwa-dania",
      heading: "Jedno miasto, dwa organizmy — czyli o dwóch daniach z jednego gotowania",
      paragraphs: [
        "Łask jest jednym miastem złożonym z dwóch odrębnych części. Kolumna nie jest osobną miejscowością — to dzielnica, ale ma własną radę dzielnicy, powołaną 13 lutego 1992 roku, i własne życie. Jedna gmina, dwa organizmy, które funkcjonują równolegle.",
        "To jest dobry moment, żeby napisać o funkcji tego urządzenia, którą uważam za najbardziej niedocenianą — i o której na prezentacjach mówi się na końcu, choć powinno się mówić na początku.",
        "Nie chodzi o szybkość. Chodzi o to, że w jednym przebiegu można ugotować dwie różne rzeczy: pod pokrywką w naczyniu jedną, a nad nią, w nasadce do gotowania na parze, drugą. Zupa i ryba. Sos i warzywa. Kompot i pierogi. Ryż na dole, mięso na górze. To nie jest „szybciej” — to jest inny sposób układania obiadu, bo drugie danie nie potrzebuje ani osobnego garnka, ani osobnego palnika, ani osobnej uwagi.",
        "Najbardziej praktyczne jest to w domach, gdzie nie wszyscy jedzą to samo. Jedna osoba na lekkostrawnym, dziecko, które nie chce sosu, ktoś, kto nie je mięsa — dwa dania z jednego uruchomienia zamiast dwóch osobnych gotowań. Znam kuchnie, w których to jedno rozwiązanie zmieniło całe popołudnie.",
        "Ale ma to granice i wolę je wymienić od razu, bo w reklamach ich nie ma.",
        "Po pierwsze: zapachy przechodzą. Para z dołu idzie przez to, co jest na górze. Ryba nad kompotem to zły pomysł, kapusta pod delikatnym mięsem też. Trzeba dobierać rzeczy, które do siebie pasują, albo przynajmniej sobie nie przeszkadzają.",
        "Po drugie: nie wszystko da się zsynchronizować. Jeżeli jedno danie potrzebuje trzy razy więcej czasu niż drugie, kombinowanie nie ma sensu — prościej zrobić po kolei. Wprawa polega na tym, żeby wiedzieć, kiedy odpuścić.",
        "Po trzecie, i to jest granica twarda: nie doradzę Wam nic o gotowaniu surowego mięsa nad innym daniem. Czy soki mogą kapać w dół, co wolno łączyć, jak głęboko ma być wysmażone — to jest bezpieczeństwo żywności, nie obsługa sprzętu, i nie mam do tego kompetencji. Nie napiszę też, że któreś danie jest zdrowsze od innego. Od tego są lekarz i dietetyk.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łasku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli u Was w domu nie wszyscy jedzą to samo — powiedzcie o tym przy umawianiu. Pokażę wtedy dwa dania z jednego przebiegu na Waszym własnym przykładzie, a nie na moim.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łasku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łaskiej rodziny",
      paragraphs: [
        "Samo miasto Łask liczy blisko szesnaście tysięcy mieszkańców, a cała gmina — razem z trzydziestoma jeden sołectwami — prawie dwadzieścia siedem tysięcy; warto to rozróżniać, bo w internecie obie liczby bywają podawane zamiennie. Prawa miejskie Łask ma od 1422 roku. Najważniejszym zabytkiem jest kolegiata wzniesiona w latach 1517–1523 z fundacji prymasa Jana Łaskiego, przebudowana w stylu barokowym po pożarze z 1749 roku. Przechowywana w niej płaskorzeźba Matki Bożej z Dzieciątkiem, zwyczajowo nazywana alabastrową, była darem papieża Leona X i trafiła tu z Rzymu w październiku 1515 roku; kult sięga 1531 roku, a koronacja odbyła się 25 września 2005. Stoi tu też modrzewiowy kościół świętego Ducha z 1666 roku, z nietypowo skierowanym na zachód prezbiterium, i park miejski imienia rodu Łaskich z przełomu osiemnastego i dziewiętnastego wieku. Piwowarska tradycja Łasku sięga średniowiecza — około 1500 roku tutejszy cech piwowarów liczył czterdziestu jeden członków.",
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

  districtsHeading: "Do których części Łasku dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, do dzielnicy Kolumna i do wszystkich trzydziestu jeden sołectw gminy — Bałucza, Borszewic, Gorczyna, Okupu, Ostrowa, Wiewiórczyna, Wrzeszczewic i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę.",
  ],
  districts: ["Kolumna"],

  nearbyHeading: "Poza Łask też przyjadę",
  nearbyParagraphs: [
    "Pabianice, Zduńska Wola, Sieradz, Zelów, Szadek, Lutomiersk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pabianice", "Zduńska Wola", "Sieradz", "Zelów", "Konstantynów Łódzki"],

  about: blokOMnie("do Łasku", "w Łasku, Kolumnie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kolumny i do sołectw gminy Łask?",
      answer:
        "Tak — Kolumna jest dzielnicą Łasku z własną radą dzielnicy, a gmina ma trzydzieści jeden sołectw i do wszystkich przyjeżdżam. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Łasku"),
    {
      question: "Czy naprawdę ugotuję dwa dania naraz?",
      answer:
        "Tak — pod pokrywką jedno, a nad nim, w nasadce do gotowania na parze, drugie. Zupa i ryba, sos i warzywa, ryż na dole i mięso na górze. To nie jest po prostu „szybciej”; drugie danie nie potrzebuje osobnego garnka ani osobnej uwagi.",
    },
    {
      question: "Jakie są granice tego rozwiązania?",
      answer:
        "Dwie, i obie realne. Zapachy przechodzą — para z dołu idzie przez to, co na górze, więc ryba nad kompotem to zły pomysł. I nie wszystko da się zsynchronizować: jeśli jedno danie potrzebuje trzy razy więcej czasu, prościej zrobić po kolei.",
    },
    {
      question: "A jeśli w domu nie wszyscy jedzą to samo?",
      answer:
        "To jest właśnie sytuacja, w której ta funkcja ma największy sens: dwa dania z jednego uruchomienia zamiast dwóch osobnych gotowań. Nie doradzę natomiast nic o gotowaniu surowego mięsa nad innym daniem — to bezpieczeństwo żywności — ani o tym, co jest zdrowsze; od tego są lekarz i dietetyk.",
    },
  ],

  geo: { lat: 51.5906, lng: 19.1328 },
};
