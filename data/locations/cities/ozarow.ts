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
 * OŻARÓW — miasto w powiecie opatowskim, woj. świętokrzyskie,
 * 4 172 mieszkańców (31.12.2024, GUS), spadek o 17,4% od 2002 r.
 * Prawa miejskie 1569 r. od Zygmunta Augusta; miasto prywatne
 * założone przez Józefa Ożarowskiego na gruntach wsi Wyszmontów.
 * Działa tu duża cementownia.
 *
 * UWAGA — DWA OŻAROWY. Ten (świętokrzyski, powiat opatowski)
 * i OŻARÓW MAZOWIECKI pod Warszawą. Częsta pomyłka.
 *
 * KĄT: wiśnie i drylowanie — czyli czynność, której urządzenie nie
 * tknie, choć jest całą robotą. Ożarów jest do tego JEDYNYM
 * właściwym miejscem w Polsce: producentem wiśni „nadwiślanki"
 * wpisanej na ministerialną Listę Produktów Tradycyjnych jest
 * spółdzielnia Z TEGO MIASTA.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie NIE WYDRĄŻY PESTEK i że przy wiśniach to jest
 *   dziewięćdziesiąt procent roboty,
 * — że wszystko PO drylowaniu robi bardzo dobrze: konfitura, sos,
 *   nadzienie, mus — bez przywierania i bez stania przy garnku,
 * — że jeśli ktoś liczy na skrócenie wiśniowego popołudnia,
 *   to się rozczaruje,
 * — i fakt świeży i twardy: wiosną 2026 r. przymrozki zniszczyły
 *   do 90% tutejszych sadów wiśniowych.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI PROPORCJI CUKRU.
 * — ŻADNYCH PORAD O PRZETWORACH, PASTERYZACJI I ZAKRĘCANIU SŁOIKÓW.
 *   To dziedzina bezpieczeństwa żywności i odmowa postawiona wprost
 *   przy Hrubieszowie — tu ją powtarzam, bo przy wiśniach pytanie
 *   pada najczęściej.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEJ RECEPTURY na nalewkę ani niczego o alkoholu.
 * — ŻADNEGO KOMENTOWANIA CEN SKUPU ANI SYTUACJI SADOWNIKÓW poza
 *   podaniem samego faktu o przymrozkach. Nie jestem od oceniania
 *   cudzej sytuacji finansowej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — TU TRZEBA UWAŻAĆ.
 * „Truskawki i maliny" (Urzędów) dotyczą owoców, które trzeba
 * obrobić TEGO SAMEGO DNIA — osią jest CZAS. „Jabłko" (Annopol)
 * to jeden składnik i co z niego zrobić. „Odmiany" (Józefów nad
 * Wisłą) to wybór odmiany. „Owoc, który nie poszedł do skupu" —
 * nadwyżka. „Powidła" i „soki i moszcze" — przerób na zapas.
 * Tutaj osią jest JEDNA KONKRETNA CZYNNOŚĆ RĘCZNA: drylowanie —
 * i to, że urządzenie jej nie dotyka. To jest strona o granicy
 * maszyny, nie o owocu jako składniku i nie o sezonie.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — GETTO W OŻAROWIE (1942) i wywózka mieszkańców do obozu zagłady
 *   w Treblince; przed rozbiorami Żydzi stanowili większość
 *   mieszkańców miasta. Zachowana synagoga z końca XVIII w.
 *   Fakty sprawdzone. NIE UŻYWAM ICH — to nie są ozdobniki
 *   do strony o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ liczby mieszkańców inaczej niż z GUS. Źródła podają
 *   4 172 (GUS 31.12.2024), ok. 5 200 (strona gminy, bez daty)
 *   i 10 399 (angielska Wikipedia — to najwyraźniej dane CAŁEJ
 *   GMINY błędnie podpisane jako miasto). Biorę GUS,
 * — NIE PODAJĘ ROKU UTRATY PRAW MIEJSKICH. Źródła podają 1869 albo
 *   1870. Rok odzyskania (1988) ma tylko JEDNO źródło, więc też go
 *   nie podaję jako pewnika — w tekście piszę opisowo,
 * — NIE PODAJĘ NAZWY CEMENTOWNI ANI JEJ WŁAŚCICIELA, mimo że oba
 *   są ustalone i pewne. Piszę opisowo: „duża cementownia".
 *   Nie reklamuję cudzych działalności i nie robię z zakładu
 *   argumentu sprzedażowego,
 * — NIE PODAJĘ liczby zatrudnionych w cementowni — nie ustalono,
 * — NIE PODAJĘ NAZWY SPÓŁDZIELNI sadowniczej. Sam fakt wpisu
 *   „wiśni sokowej nadwiślanki" na Listę Produktów Tradycyjnych
 *   i to, że producent pochodzi z Ożarowa, jest sprawdzony i jest
 *   w tekście — bez nazwy podmiotu,
 * — NIE ROZWIJAM WĄTKU KRZEMIENIA OŻAROWSKIEGO. To ciekawostka
 *   archeologiczna (osobno nazwany typ krzemienia turońskiego,
 *   badany od 1937 r., jakościowo gorszy od pasiastego), ale nie
 *   ma nic wspólnego z kuchnią i nie będę jej doklejać,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1569 r. od Zygmunta Augusta; miasto założone
 *   przez Józefa Ożarowskiego na gruntach wsi Wyszmontów,
 * — „wiśnia sokowa nadwiślanka" figuruje na Liście Produktów
 *   Tradycyjnych, a producentem jest spółdzielnia z Ożarowa,
 * — wiosną 2026 r. przymrozki zniszczyły do 90% sadów z tą wiśnią
 *   w gminie Ożarów,
 * — w mieście działa duża cementownia, uruchomiona w 1978 r.,
 * — gmina leży w części w Małopolskim Przełomie Wisły i graniczy
 *   m.in. z Annopolem i Zawichostem,
 * — 4 172 mieszkańców (31.12.2024).
 */
export const OZAROW: CityContent = {
  slug: "ozarow",
  h1: "Thermomix Ożarów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ożarów (świętokrzyskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ożarowie w świętokrzyskiem: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ożarów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ożarowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ożarowa w świętokrzyskiem z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Ożarów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pestek nie wydrąży. A to jest cała robota.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ożarowie – jak wygląda prezentacja?",
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
      id: "wisnie",
      heading: "Miasto wiśni nadwiślanki — czyli o drylowaniu, którego nie zrobię",
      paragraphs: [
        "Wiśnia sokowa nadwiślanka jest wpisana na ministerialną Listę Produktów Tradycyjnych, a producentem, który za tym wpisem stoi, jest spółdzielnia sadownicza z Ożarowa. To znaczy, że nie piszę tu o wiśniach jako o czymś, co się kojarzy z okolicą — piszę o nich w mieście, które ma je w państwowym rejestrze pod własnym adresem.",
        "Trzeba przy tym dodać rzecz świeżą i przykrą: wiosną 2026 roku przymrozki zniszczyły w tej gminie do dziewięćdziesięciu procent sadów z tą wiśnią. Podaję to, bo to fakt, a nie po to, żeby cokolwiek na nim budować — nie jestem od komentowania cudzych strat.",
        "A teraz do rzeczy, i zacznę od granicy, bo przy wiśniach jest ona wyjątkowo ostra: to urządzenie nie wydrąży pestek. Nie ma takiej funkcji, nie będzie jej miało i żadna sztuczka tego nie obejdzie. A drylowanie to przy wiśniach nie jest jeden z etapów — to jest właściwie cała robota. Kto siedział pół popołudnia z drylownicą i miską, ten wie, o czym mówię, i wie też, że reszta zajmuje już tylko chwilę.",
        "Piszę to tak dobitnie, bo przy owocach pestkowych słyszę to pytanie najczęściej i zawsze z nadzieją w głosie. Odpowiedź brzmi nie. Jeśli ktoś liczy, że ten zakup skróci wiśniowe popołudnie, będzie rozczarowany — i lepiej, żeby był rozczarowany teraz, czytając, niż w lipcu, stojąc nad skrzynką.",
        "Co natomiast urządzenie robi bardzo dobrze — wszystko, co jest PO drylowaniu. Konfitura, która nie przywrze do dna, bo miesza się sama. Sos do mięsa albo do deseru. Mus. Nadzienie do ciasta. Owoce gotują się z ustawioną temperaturą i bez stania przy garnku, a przy owocach z cukrem to akurat oszczędza sporo pilnowania, bo cukier przypala się chętnie i szybko.",
        "Czyli podział jest prosty i warto go znać przed zakupem: ręce robią to, co najdłuższe, maszyna to, co najbardziej męczące do pilnowania.",
        "Czego nie doradzę, i przy wiśniach powtarzam to z naciskiem: niczego o przetworach. Ani o pasteryzacji, ani o zakręcaniu słoików, ani o tym, jak długo coś się trzyma. To jest dziedzina bezpieczeństwa żywności, w której amatorska podpowiedź może kogoś realnie skrzywdzić, a ja jestem przedstawicielką handlową. W tej okolicy jest mnóstwo osób, które wiedzą o tym więcej ode mnie — i to do nich należy takie pytanie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ożarowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przy umawianiu warto zaznaczyć, że chodzi o Ożarów w świętokrzyskiem — bo drugi Ożarów leży pod Warszawą i pomyłka zdarza się częściej, niż można przypuszczać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ożarowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ożarowskiej rodziny",
      paragraphs: [
        "Ożarów liczy nieco ponad cztery tysiące mieszkańców i od dwóch dekad ich ubywa. Prawa miejskie dostał w 1569 roku od Zygmunta Augusta — miasto założył Józef Ożarowski na gruntach wsi Wyszmontów. Od 1978 roku pracuje tu duża cementownia. Gmina sięga Wisły i graniczy z Annopolem oraz Zawichostem.",
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

  districtsHeading: "Do których części Ożarowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Wyszmontowa, Janowic, Lasocina i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Ożarów też przyjadę",
  nearbyParagraphs: [
    "Opatów, Zawichost, Annopol, Sandomierz, Ćmielów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Opatów", "Zawichost", "Annopol", "Sandomierz", "Ćmielów", "Ostrowiec Świętokrzyski"],

  about: blokOMnie("do Ożarowa", "w Ożarowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ożarowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu warto zaznaczyć, że chodzi o Ożarów w świętokrzyskiem, a nie o Ożarów Mazowiecki.",
    },
    ...faqWspolne("w Ożarowie"),
    {
      question: "Czy urządzenie wydryluje wiśnie?",
      answer:
        "Nie. Nie ma takiej funkcji i nie będzie jej miało — a przy wiśniach drylowanie to właściwie cała robota, nie jeden z etapów. Jeśli liczycie, że ten zakup skróci wiśniowe popołudnie, wolę powiedzieć od razu, że nie skróci. Wszystko po drylowaniu urządzenie robi za to bardzo dobrze: konfitura nie przywrze, bo miesza się sama, a cukier przypala się chętnie i to jest realna pomoc.",
    },
    {
      question: "Doradzisz coś w sprawie przetworów z wiśni?",
      answer:
        "Nie i przy tym akurat pytaniu jestem szczególnie stanowcza. Pasteryzacja, zakręcanie słoików, trwałość — to jest dziedzina bezpieczeństwa żywności, w której amatorska podpowiedź może komuś realnie zaszkodzić. Jestem przedstawicielką handlową, nie technologiem żywności. W tej okolicy jest mnóstwo osób, które wiedzą o tym więcej ode mnie.",
    },
  ],

  geo: { lat: 50.8853, lng: 21.6544 },
};
