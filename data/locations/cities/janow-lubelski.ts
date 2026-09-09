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
 * JANÓW LUBELSKI — gmina miejsko-wiejska, ok. czternastu tysięcy
 * mieszkańców, trend spadkowy. Zalew i Park Rekreacji Zoom Natury.
 * W tej samej gminie, ale w osobnej wsi, leży Łążek Garncarski —
 * jeden z niewielu żywych ośrodków garncarstwa ludowego w Polsce.
 *
 * KĄT: wprawa — czyli to, czego nie da się kupić razem z urządzeniem.
 * Miasto, w którego gminie garncarze toczą na kole od XVIII wieku,
 * jest właściwym miejscem, żeby powiedzieć wprost, gdzie kończy się
 * to, co maszyna załatwia, a zaczyna to, czego nie załatwi nigdy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — co urządzenie realnie zdejmuje z człowieka: technikę,
 *   czyli siekanie, ucieranie, pilnowanie garnka, temperaturę,
 * — czego NIE da: smaku, oceny, wiedzy, kiedy coś jest dobre,
 *   i pomysłu, co ugotować,
 * — że to nie jest wada — po prostu tak wygląda podział pracy,
 * — i że początkujący zyskuje na tym najwięcej, bo brak wprawy
 *   przestaje być przeszkodą w części zadań.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O UŻYWANIU NACZYŃ GLINIANYCH do gotowania,
 *   wypalaniu, szkliwieniu ani o tym, co jest bezpieczne w kontakcie
 *   z żywnością. To dziedzina, w której nie mam kompetencji,
 *   a szkliwa to poważna sprawa. W tekście nie ma o tym słowa.
 * — ŻADNEGO ROMANTYZOWANIA rzemiosła kosztem ludzi, którzy nie mają
 *   czasu gotować od zera.
 *
 * ROZGRANICZENIE. Kąty „nie umiem gotować", „nie ucz się na wigilii"
 * i „co się dzieje PO zakupie (kto uczy obsługi)" są zajęte i tutaj
 * się NIE pojawiają. Ta strona nie jest o nauce obsługi ani o osobie,
 * która nigdy nie gotowała — jest o granicy między techniką
 * a wprawą. Zajęty jest też kąt „zmywanie" przy mieście robiącym
 * naczynia; tu o zmywaniu nie ma ani zdania.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE piszę, że Łążek Garncarski leży w mieście. To ODRĘBNA WIEŚ
 *   w gminie miejsko-wiejskiej Janów Lubelski. W tekście jest
 *   „w gminie", i to jest jedyna uczciwa forma,
 * — NIE piszę „największy ani jedyny ośrodek garncarstwa w Polsce".
 *   Superlatyw nie do obrony: żywym, porównywalnym ośrodkiem jest
 *   choćby Medynia Głogowska na Podkarpaciu, z którą Łążek wymienia
 *   się garncarzami na tych samych spotkaniach. W tekście jest
 *   „jeden z niewielu", bez rankingu,
 * — NIE mylę Łążka z Medynią. To Medynia ma potwierdzony wpis
 *   dotyczący dziedzictwa niematerialnego, nie Łążek,
 * — NIE podaję liczby czynnych garncarzy jako „ośrodka" —
 *   to realnie kilka nazwisk (rodzina Żelazko, Paweł Urbanik),
 *   a nie skala przemysłowa. Tekst mówi „kilku", bo tylu jest,
 * — NIE mylę frekwencji Ogólnopolskich Spotkań Garncarskich z liczbą
 *   miejscowych rzemieślników — to impreza z udziałem garncarzy
 *   z całej Polski,
 * — NIE podaję liczby mieszkańców samego miasta. Dane GUS są dla
 *   CAŁEJ gminy miejsko-wiejskiej, a nowsza liczba pochodzi
 *   z agregatora. W tekście jest „około czternastu tysięcy w gminie",
 *   bez fałszywej precyzji,
 * — garncarstwo NIE MOŻE być na Liście Produktów Tradycyjnych —
 *   ta lista obejmuje wyłącznie żywność. Researcher słusznie zauważył,
 *   że pytanie było bezprzedmiotowe.
 *
 * ODRZUCONE KĄTY:
 * — zalew i Zoom Natury: sezon i turystyka zajęte przez Lesko,
 *   Ustrzyki i Mrągowo, a danych o frekwencji brak,
 * — lasy janowskie i grzyby: grzybowa zajęta przez Goleniów.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — pierwszy udokumentowany garncarz w Łążku to Wincenty Cierpski,
 *   zapis z 1799 r.; w XIX w. napływ garncarzy m.in. z Medyni,
 * — tradycja niemal wygasła wraz z konkurencją ceramiki przemysłowej
 *   i odżyła dzięki programowi „Ginące Zawody" w latach 90.,
 * — czynni dziś garncarze z Łążka to m.in. rodzina Żelazko
 *   (Adam, Barbara, Mieczysław) i Leon Żelazko, uczeń Józefa Noworola,
 * — Ogólnopolskie Spotkania Garncarskie odbywają się co roku
 *   od około 2008 r.; edycja z 2026 r. odbyła się 1–3 lipca,
 * — Park Rekreacji Zoom Natury nad zalewem działa, ponad 10 ha,
 *   kąpielisko jest w rejestrze sanitarnym; danych o frekwencji brak,
 * — z Lublina jest tu ok. 70 km,
 * — powiat janowski to siedem gmin: Janów Lubelski, Batorz, Chrzanów,
 *   Dzwola, Godziszów, Modliborzyce, Potok Wielki,
 * — miasto NIE publikuje wykazu osiedli — districts to PUSTA TABLICA.
 */
export const JANOW_LUBELSKI: CityContent = {
  slug: "janow-lubelski",
  h1: "Thermomix Janów Lubelski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Janów Lubelski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Janowie Lubelskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Janów Lubelski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Janowie Lubelskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Janowa Lubelskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Janów Lubelski i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Technikę można kupić. Wprawy nie — i nikt uczciwy nie powie inaczej.",
  },

  sections: [
    {
      id: "wprawa",
      heading: "Gmina, w której ktoś jeszcze toczy na kole — i granica, o której wolę powiedzieć od razu",
      paragraphs: [
        "W gminie Janów Lubelski, w osobnej wsi o nazwie Łążek Garncarski, od ponad dwustu lat robi się garnki na kole. Pierwszy garncarz zapisany z nazwiska to Wincenty Cierpski, zapis pochodzi z 1799 roku. Rzemiosło niemal wygasło, kiedy ceramika przemysłowa zrobiła się tańsza, i odżyło dopiero w latach dziewięćdziesiątych dzięki programowi „Ginące Zawody”. Dziś toczących jest kilku — między innymi rodzina Żelazków — i co roku, od mniej więcej 2008 roku, zjeżdżają tam garncarze z całej Polski na Ogólnopolskie Spotkania Garncarskie.",
        "Od razu dwa zastrzeżenia, żeby było uczciwie. Łążek to osobna wieś, a nie część miasta — leży w tej samej gminie i tyle. I nie napiszę, że to największy ani jedyny taki ośrodek w Polsce, bo to nieprawda: żywe ośrodki garncarstwa są też gdzie indziej, choćby w Medyni Głogowskiej na Podkarpaciu, i garncarze wymieniają się między nimi. „Jeden z niewielu” — tak, to się obroni. „Jedyny” — nie.",
        "Piszę o tym, bo garncarz jest najlepszym możliwym przykładem czegoś, co przy sprzedaży sprzętu AGD zwykle się przemilcza. Ktoś, kto toczy trzydzieści lat, ma w rękach coś, czego nie da się kupić, przekazać ani przyspieszyć. Nazywa się to wprawa i to jest osobna rzecz od techniki.",
        "Więc powiem wprost, gdzie w tym urządzeniu przebiega granica. Ono zdejmuje z człowieka TECHNIKĘ: siekanie, ucieranie, miksowanie, pilnowanie temperatury, mieszanie, żeby nie przywarło, stanie przy garnku. To jest ta część gotowania, którą trzeba było mieć wyćwiczoną — i po którą nie trzeba już mieć wprawy, bo robi to maszyna. Dla kogoś, kto zaczyna, to jest ogromna różnica: brak wprawy przestaje być przeszkodą w połowie zadań.",
        "Ale nie da Wam smaku. Nie oceni, czy zupa jest dobra, czy trzeba jeszcze kwasu albo soli. Nie podpowie, że tym razem pomidory są mniej słodkie i przydałaby się szczypta cukru. Nie wymyśli, co ugotować w czwartek, kiedy nikt nie ma pomysłu. Ta część zostaje po Waszej stronie i po prostu przychodzi z czasem — dokładnie tak jak u tego garncarza, tylko szybciej, bo garnków w tygodniu robicie więcej niż on.",
        "To nie jest wada urządzenia i nie mówię tego, żeby nikogo zniechęcić. Mówię, bo z doświadczenia wiem, że ludzie, którym się obieca „ono ugotuje za Ciebie”, są potem rozczarowani — nie sprzętem, tylko obietnicą. Uczciwy podział jest taki: technika po stronie maszyny, smak i decyzje po Waszej. I przy takim podziale ten sprzęt naprawdę się sprawdza.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Janowie Lubelskim – jak wygląda prezentacja?",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Janowie Lubelskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, kto w domu gotuje najczęściej i czego nie lubi w gotowaniu najbardziej. Pokażę wtedy dokładnie tę część, która komuś realnie zejdzie z głowy, zamiast robić pokaz dania, którego i tak nikt nie powtórzy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Janowie Lubelskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla janowskiej rodziny",
      paragraphs: [
        "Gmina Janów Lubelski liczy około czternastu tysięcy mieszkańców i od lat ich ubywa. Latem miasto ożywa przy zalewie i Parku Rekreacji Zoom Natury, ale przez resztę roku jest to spokojne miejsce, z którego do Lublina jedzie się siedemdziesiąt kilometrów.",
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

  districtsHeading: "Do których części Janowa Lubelskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości w gminie, bez dopłaty za dojazd.",
    "Miasto nie publikuje oficjalnego wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Janów Lubelski też przyjadę",
  nearbyParagraphs: [
    "Modliborzyce, Dzwola, Godziszów, Batorz, Chrzanów i Potok Wielki są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Modliborzyce", "Dzwola", "Godziszów", "Batorz", "Kraśnik", "Biłgoraj"],

  about: blokOMnie("do Janowa Lubelskiego", "w Janowie Lubelskim i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Janowa Lubelskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Janowie Lubelskim"),
    {
      question: "Czy to ugotuje za mnie?",
      answer:
        "Nie i wolę powiedzieć to od razu, niż żebyście się rozczarowali po zakupie. Urządzenie zdejmuje technikę: siekanie, ucieranie, mieszanie, pilnowanie temperatury i stanie przy garnku. Nie da smaku, nie oceni, czy trzeba jeszcze soli, i nie wymyśli, co ugotować w czwartek. Ta część zostaje po Waszej stronie i przychodzi z czasem.",
    },
    {
      question: "Nigdy dużo nie gotowałam. To nie jest sprzęt dla kogoś z wprawą?",
      answer:
        "Odwrotnie — najwięcej zyskuje na nim osoba bez wprawy, bo cała wyćwiczona część roboty przestaje być potrzebna, a przepis jest prowadzony krok po kroku. Wprawa przydaje się przy doprawianiu i przy decyzjach, i tę zdobywa się po prostu gotując.",
    },
  ],

  geo: { lat: 50.7069, lng: 22.4136 },
};
