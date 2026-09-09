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
 * KRASNOBRÓD — 2 935 mieszkańców MIASTA (2024). Uzdrowisko
 * STATUTOWE od 30 lipca 2002 r. Ponad 2 300 miejsc noclegowych
 * w gminie — czyli mniej więcej tyle, ilu jest mieszkańców miasta.
 *
 * KĄT: kuchnia w domu, który przez pół roku jest też kwaterą.
 * Miasto z liczbą łóżek zbliżoną do liczby mieszkańców jest jedynym
 * miejscem w serwisie na sytuację, w której ta sama kuchnia obsługuje
 * najpierw rodzinę, a potem obcych ludzi — i wraca do rodziny
 * w listopadzie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to nie jest gotowanie zawodowe i strona nie udaje, że nim
 *   jest,
 * — co realnie pomaga: powtarzalność i to, że urządzenie nie wymaga
 *   obecności, gdy trzeba zrobić dwie rzeczy naraz,
 * — czego NIE zrobi: nie zwiększy pojemności kuchni, misa ma swoją
 *   objętość i przy większej liczbie osób pracuje się seriami,
 * — i TWARDA ODMOWA, która jest tu najważniejsza: nic o wymogach
 *   sanitarnych, przechowywaniu i bezpieczeństwie żywności podawanej
 *   obcym. To jest dziedzina prawa i sanepidu, nie moja.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O WYMOGACH SANITARNYCH, HACCP, rejestracji
 *   działalności ani o tym, co wolno podać gościom. Zła podpowiedź
 *   tutaj kosztuje kogoś realne pieniądze albo zdrowie gościa.
 * — ŻADNYCH TREŚCI MEDYCZNYCH. Krasnobród jest uzdrowiskiem, ale
 *   na tej stronie nie ma ani słowa o wskazaniach, zabiegach,
 *   dietach sanatoryjnych czy chorobach. Status uzdrowiska pojawia
 *   się WYŁĄCZNIE jako fakt formalny z datą.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH WYLICZEŃ, ile można zarobić na wynajmie.
 * — ŻADNEGO KOMENTARZA RELIGIJNEGO przy sanktuarium.
 *
 * ROZGRANICZENIE. Kąt „praca przy jedzeniu" jest ZAJĘTY przez inne
 * miasto — tam chodzi o osobę, która z jedzenia żyje zawodowo.
 * Tutaj chodzi o DOM, w którym kuchnia sezonowo obsługuje więcej
 * osób, niż była przewidziana. Zajęte są też „goście w domu"
 * (Częstochowa) i „sezon" (Lesko, Ustrzyki, Mrągowo) — dlatego
 * sezonowość jest tu tłem w jednym zdaniu, a nie tematem, i nie ma
 * ani słowa o tym, co miasto robi poza sezonem.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE piszę „największa baza noclegowa na Roztoczu". To
 *   twierdzenie własne gminy, bez porównania ze Zwierzyńcem
 *   czy Zamościem,
 * — NIE nazywam Krasnobrodu „obszarem ochrony uzdrowiskowej". To
 *   pełne UZDROWISKO STATUTOWE od 2002 r. i mylenie tych dwóch
 *   statusów jest częstym błędem — ale w tekście i tak jest to tylko
 *   jedno zdanie,
 * — NIE podaję imienia władcy, który nadał pierwsze prawa miejskie.
 *   Krąży, że był to Zygmunt III Waza w 1576 r., co jest
 *   chronologicznie niemożliwe — objął tron w 1587. Sama gmina pisze
 *   ostrożniej o „potwierdzeniu" praw. Podaję tylko to, co pewne:
 *   ponowne nadanie w 1763 r. przez Augusta III i przywrócenie praw
 *   1 stycznia 1995 r.,
 * — NIE podaję roku utraty praw miejskich — źródła podają 1868, 1869
 *   i 1869/1870 zamiennie i nie ma aktu z datą dla tego miasta,
 * — NIE mylę liczby mieszkańców MIASTA (2 935) z liczbą dla GMINY
 *   (ok. 7 tys.). Większość zestawień podaje tę drugą,
 * — NIE podaję liczby turystów rocznie — takich danych nie ma.
 *   Podaję liczbę MIEJSC NOCLEGOWYCH, bo ta jest udokumentowana,
 * — produktów z Listy Produktów Tradycyjnych dla powiatu zamojskiego
 *   NIE POTWIERDZIŁAM — nie ma o nich w tekście ani słowa,
 * — miasto NIE publikuje wykazu osiedli (gmina ma 15 sołectw,
 *   to co innego), więc districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — uzdrowisko statutowe od 30 lipca 2002 r. (Dz.U. 2002 nr 129,
 *   poz. 1103),
 * — ponad 2 300 miejsc noclegowych i ponad sześćdziesiąt obiektów;
 *   GUS notował 28 obiektów w latach 2017–2019,
 * — gmina pobiera opłatę uzdrowiskową,
 * — 2 935 mieszkańców miasta w 2024 r., trend spadkowy,
 * — do Zamościa ok. 28 km (ok. pół godziny), do Lublina ok. 111 km
 *   (ok. 1 godz. 45 min),
 * — sanatorium działa od 1957 r. i jest czynne.
 */
export const KRASNOBROD: CityContent = {
  slug: "krasnobrod",
  h1: "Thermomix Krasnobród – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krasnobród — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Krasnobrodzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krasnobród — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krasnobrodzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krasnobrodu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Krasnobród i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ta sama kuchnia gotuje dla rodziny i dla gości. Tylko liczba talerzy się zmienia.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krasnobrodzie – jak wygląda prezentacja?",
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
      id: "dom-i-kwatera",
      heading: "Tyle łóżek, ilu mieszkańców — czyli kuchnia, która gotuje dla dwóch różnych stołów",
      paragraphs: [
        "Krasnobród jest uzdrowiskiem statutowym od 2002 roku i ma dziś ponad dwa i pół tysiąca miejsc noclegowych przy niecałych trzech tysiącach mieszkańców samego miasta. To znaczy, że jeśli policzyć łóżka, wychodzi mniej więcej tyle, ilu jest tu ludzi. W kilkudziesięciu domach pokoje wynajmuje się gościom, a gmina pobiera od nich opłatę uzdrowiskową.",
        "Z tego wynika sytuacja, o której nie mówi się na żadnym pokazie kuchennym: ta sama kuchnia obsługuje przez część roku dwa różne stoły. Najpierw swoich, potem obcych ludzi — a w listopadzie wraca do samego gotowania dla rodziny.",
        "Zacznę od granicy, bo jest tu najważniejsza i nie chcę, żeby ktoś sobie coś dopowiedział. Nie doradzam nic o wymogach sanitarnych, o tym, co wolno podać gościom, jak i jak długo przechowywać jedzenie ani jakie przepisy obowiązują przy wynajmie z wyżywieniem. To jest dziedzina sanepidu i prawa, a nie przedstawicielki handlowej — a zła podpowiedź kosztuje tu kogoś realne pieniądze albo czyjeś zdrowie. Po tę wiedzę trzeba iść gdzie indziej i nie będę udawać, że ją mam.",
        "To, o czym mogę mówić, jest węższe, ale konkretne. Kiedy w domu jest więcej osób niż zwykle, zmienia się nie trudność, tylko liczba rzeczy dziejących się naraz. I właśnie tu urządzenie coś daje: nie wymaga stania przy sobie. Zupa gotuje się z ustawioną temperaturą i mieszaniem, a Wy w tym czasie robicie coś zupełnie innego — pościel, śniadanie, rozmowę przy drzwiach. Jedno naczynie zamiast trzech garnków to też mniej zmywania, a to akurat przy większej liczbie osób odczuwa się najbardziej.",
        "Pomaga też powtarzalność. Przepis prowadzony krok po kroku wychodzi tak samo za każdym razem, również wtedy, gdy robi go ktoś inny w domu — a w sezonie zwykle gotuje się na zmianę.",
        "Czego natomiast nie zrobi: nie zwiększy pojemności Waszej kuchni. Misa ma swoją objętość i przy większej liczbie osób pracuje się seriami. Mówię o tym przed zakupem, bo to jest najczęstsze rozczarowanie u ludzi, którzy liczyli, że jedno urządzenie załatwi obiad dla piętnastu osób. Nie załatwi.",
        "I na koniec rzecz oczywista, o której warto powiedzieć: to nie jest gotowanie zawodowe i strona nie udaje, że nim jest. To jest domowa kuchnia, która przez kilka miesięcy w roku ma więcej pracy.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krasnobrodzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Najlepiej umówić się poza szczytem sezonu, kiedy macie w domu spokojną godzinę. Powiedzcie przy umawianiu, dla ilu osób gotujecie w lipcu, a dla ilu w listopadzie — pokażę wtedy rzeczy sensowne przy obu tych liczbach, a nie jedno efektowne danie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krasnobrodzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla krasnobrodzkiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe trzy tysiące mieszkańców i powoli ich ubywa. Do Zamościa jest stąd niecałe trzydzieści kilometrów, czyli około pół godziny; do Lublina ponad sto dziesięć, czyli blisko dwie godziny — więc to nie jest miasto, z którego skacze się do dużego sklepu.",
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

  districtsHeading: "Do których części Krasnobrodu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Krasnobród też przyjadę",
  nearbyParagraphs: [
    "Zwierzyniec, Józefów, Susiec, Adamów, Krynice, Tarnawatka i Tomaszów Lubelski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zwierzyniec", "Józefów", "Susiec", "Tomaszów Lubelski", "Zamość", "Szczebrzeszyn"],

  about: blokOMnie("do Krasnobrodu", "w Krasnobrodzie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Krasnobrodu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Krasnobrodzie"),
    {
      question: "Wynajmuję pokoje. Czy to się przyda przy gościach?",
      answer:
        "W tym zakresie, w jakim mogę uczciwie odpowiedzieć — tak: urządzenie nie wymaga stania przy sobie, więc gotuje, gdy zajmujecie się czymś innym, a przepis prowadzony krok po kroku wychodzi tak samo, również gdy robi go ktoś inny w domu. Nie zwiększy natomiast pojemności kuchni: misa ma swoją objętość i przy większej liczbie osób pracuje się seriami.",
    },
    {
      question: "Co z wymogami sanitarnymi przy podawaniu jedzenia gościom?",
      answer:
        "Nie doradzam w tej sprawie i nie będę zgadywać — ani co wolno podać, ani jak przechowywać, ani jakie przepisy obowiązują przy wynajmie z wyżywieniem. To dziedzina sanepidu i prawa, a zła podpowiedź kosztuje kogoś realne pieniądze albo czyjeś zdrowie. Jestem przedstawicielką handlową i tyle.",
    },
  ],

  geo: { lat: 50.5442, lng: 23.2139 },
};
