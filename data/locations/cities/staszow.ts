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
 * STASZÓW — miasto w powiecie staszowskim, 13 463 mieszkańców
 * (31.12.2024, GUS). Prawa miejskie 11 kwietnia 1525 r. od Hieronima
 * Łaskiego; 26 stycznia 1526 r. Zygmunt I Stary dodał przywilej
 * cotygodniowych targów czwartkowych.
 *
 * KĄT: koktajle i smoothie — czyli jedyna strona w serwisie, która
 * ODRADZA ten zakup. Jeśli ktoś kupuje to urządzenie po koktajle,
 * kupuje je z niewłaściwego powodu i powiem mu to wprost. Staszów
 * jest do tego właściwym miejscem, bo to miasto, w którym duży zakup
 * wymaga dziś szczególnej trzeźwości (patrz: Siarkopol niżej).
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że koktajle robi każdy blender kielichowy za kilkaset złotych
 *   i robi je równie dobrze,
 * — że różnica pojawia się dopiero przy rzeczach GORĄCYCH i przy
 *   tym, że nie trzeba przekładać między naczyniami,
 * — że jeśli koktajle są JEDYNYM powodem zakupu, to jest to zły
 *   powód i lepiej kupić blender,
 * — i konkretnie: co w koktajlach to urządzenie robi lepiej
 *   (twarde składniki, lód, drobne nasiona), a co bez różnicy.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o koktajlach, „detoksie",
 *   zielonych smoothie, błonniku ani witaminach. Ta kategoria jest
 *   obrośnięta pseudonauką bardziej niż jakakolwiek inna w kuchni
 *   i dlatego zakaz stoi tu na samym wierzchu.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI OBROTÓW.
 * — ŻADNEJ KRYTYKI konkretnych marek blenderów.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU koktajli — bezpieczeństwo
 *   żywności to nie moja dziedzina.
 * — ŻADNEGO PISANIA O SIARKOPOLU JAKO O ZAGROŻONYM ZAKŁADZIE.
 *   Uzasadnienie niżej — to jest granica, której pilnuję najmocniej
 *   na tej stronie.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Napoje domowe" (Nałęczów)
 * dotyczą kompotów, lemoniad, syropów i mleka roślinnego — czyli
 * rzeczy GOTOWANYCH albo nastawianych. Tutaj chodzi wyłącznie
 * o miksowanie na zimno i o to, że do tego sprzęt tej klasy jest
 * zbędny. „Stać nas nie jest wystarczającym powodem" dotyczy
 * PIENIĘDZY, „kiedy Aga radzi poczekać" — SYTUACJI ŻYCIOWYCH.
 * Tu chodzi o KONKRETNE ZASTOSOWANIE, które nie uzasadnia zakupu.
 *
 * ŚWIADOMA GRANICA — SIARKOPOL. Sprawdzone i potwierdzone: Grupa
 * Azoty KiZCHS „Siarkopol" ma siedzibę w Grzybowie (sołectwo gminy
 * Staszów), działa od 1966 r., zatrudnia ponad 800 osób i jest
 * jednym z dwóch zakładów na świecie stosujących podziemny wytop
 * siarki. Sprawdzone jest też to, że w styczniu 2026 r. związkowcy
 * alarmowali o możliwej likwidacji (złoże Osiek się wyczerpuje,
 * nowe złoże pod Połańcem dopiero od ok. 2030 r., decyzja
 * inwestycyjna w 2027 r.).
 * W TEKŚCIE PISZĘ TYLKO O TYM, ŻE ZAKŁAD ISTNIEJE I ILU ZATRUDNIA.
 * ANI SŁOWA O ZAGROŻENIU. Powód: przedstawicielka handlowa, która
 * przy sprzedaży drogiego sprzętu wspomina ludziom, że ich zakład
 * może zostać zlikwidowany, robi rzecz nieprzyzwoitą — niezależnie
 * od tego, czy chciałaby przez to sprzedać, czy odradzić. To nie
 * jest mój temat i nie mam prawa go ruszać.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE ŁĄCZĘ STASZOWA ZE STANISŁAWEM STASZICEM. To skojarzenie
 *   czysto fonetyczne i FAŁSZYWE. Nazwa pochodzi od imienia
 *   Stanisław (zdrobnienie „Stasz") jako imienia dziedzica,
 *   nie od pisarza i działacza. Hipoteza sprawdzona i obalona,
 * — NIE PISZĘ, że kopalnia siarki leży w gminie Staszów. Siedziba
 *   i zakład przetwórczy są w Grzybowie (gmina Staszów), ale samo
 *   złoże Osiek leży w SĄSIEDNIEJ GMINIE OSIEK,
 * — NIE PODAJĘ NAZWY HUTY SZKŁA. W Grzybowie fizycznie działa huta
 *   szkła gospodarczego (potwierdzone raportem PSP z pożaru hali
 *   w maju 2024 r.), ale nazwy ani statusu spółki NIE USTALIŁEM —
 *   firmy o podobnych nazwach mają siedziby pod Tarnowem
 *   i w Skarżysku. Nie wymieniam jej,
 * — NIE PISZĘ, że Staszów stracił i odzyskał prawa miejskie.
 *   Sprawdzone: nie ma na to źródła. Straciły je natomiast sąsiednie
 *   KUROZWĘKI (miasto od przed 1400 r. do 1870 r.), dziś sołectwo
 *   gminy Staszów — i to jest w tekście, bo to ciekawsze,
 * — NIE PISZĘ, że zalew Chańcza leży w gminie Staszów. Leży
 *   na pograniczu TRZECH gmin: Raków, Staszów i Szydłów,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla powiatu staszowskiego nie udało się nic potwierdzić.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 11 kwietnia 1525 r. (Hieronim Łaski), przywilej
 *   targów czwartkowych 26 stycznia 1526 r. (Zygmunt I Stary),
 * — w Grzybowie, sołectwie gminy Staszów, działa od 1966 r. zakład
 *   siarkowy zatrudniający ponad 800 osób; to jeden z dwóch
 *   zakładów na świecie stosujących podziemny wytop siarki,
 * — Kurozwęki, dziś sołectwo gminy, były miastem od przed 1400 r.
 *   do 1870 r.,
 * — zalew Chańcza powstał w latach 1974–1984 na Czarnej Staszowskiej,
 *   na pograniczu gmin Raków, Staszów i Szydłów,
 * — oficjalny wykaz sześciu osiedli miasta,
 * — 13 463 mieszkańców (31.12.2024).
 */
export const STASZOW: CityContent = {
  slug: "staszow",
  h1: "Thermomix Staszów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Staszów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Staszowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Staszów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Staszowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Staszowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Staszów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jeśli chodzi Wam o koktajle — kupcie blender.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Staszowie – jak wygląda prezentacja?",
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
      id: "koktajle",
      heading: "Jedyna strona, na której odradzam ten zakup — czyli o koktajlach",
      paragraphs: [
        "Staszów ma prawa miejskie od jedenastego kwietnia 1525 roku, a rok później Zygmunt I Stary dorzucił do nich przywilej cotygodniowych targów czwartkowych. W Grzybowie, jednym z sołectw gminy, od 1966 roku pracuje zakład siarkowy zatrudniający ponad osiemset osób — jeden z dwóch na świecie, które stosują podziemny wytop siarki. To duże miasto jak na ten region i poważne miejsce pracy.",
        "Dlatego napiszę tutaj rzecz, której na żadnej innej stronie nie napisałam: jest zastosowanie, dla którego tego urządzenia kupować NIE warto. Koktajle.",
        "Powiem prosto. Jeśli jedynym powodem, dla którego myślicie o Thermomixie, są smoothie i koktajle owocowe — kupcie blender kielichowy. Dobry blender kosztuje kilkaset złotych, robi to samo i robi to równie dobrze. Żadna różnica, którą mogłabym Wam pokazać na prezentacji, nie uzasadni dopłaty rzędu kilkunastu tysięcy złotych za tę jedną rzecz.",
        "Żeby było uczciwie do końca, powiem też, gdzie różnica jednak jest — bo jest, tylko wąska. Po pierwsze: twarde składniki. Marchew, burak, całe migdały, drobne nasiona, lód — tu mocniejszy nóż i cięższa konstrukcja robią zauważalną robotę, a tańszy blender potrafi zostawić drobinki. Po drugie: rzeczy gorące. Zupa krem miksowana na gorąco wprost w tym samym naczyniu, w którym się gotowała, to jest coś, czego blender kielichowy nie zrobi bezpiecznie ani wygodnie. I po trzecie: nie ma przekładania. Ugotowane zostaje zmiksowane w miejscu.",
        "Ale to są argumenty za urządzeniem do GOTOWANIA, które przy okazji miksuje. Nie za drogim blenderem. Jeśli nie zamierzacie w nim gotować, cała reszta ceny idzie na funkcje, których nie użyjecie — i nie będę udawać inaczej.",
        "I rzecz, która akurat przy tej kategorii jest ważniejsza niż zwykle: nie usłyszycie ode mnie ani słowa o zdrowiu. Koktajle są obrośnięte opowieściami o oczyszczaniu, witaminach i cudownym wpływie na wszystko, i to jest dziedzina, w której przedstawicielka handlowa nie ma nic do powiedzenia. Sprzedaję sprzęt kuchenny, nie zdrowie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Staszowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, po co realnie chcecie to urządzenie. Jeśli usłyszę coś, do czego się nie nadaje, powiem to przez telefon — zanim ktokolwiek straci godzinę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Staszowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla staszowskiej rodziny",
      paragraphs: [
        "Staszów liczy ponad trzynaście tysięcy mieszkańców. Sąsiednie Kurozwęki, dziś sołectwo tej gminy, były miastem od przed 1400 roku aż do 1870 — i to stamtąd, przez małżeństwo z Anną Kurozwęcką, Staszów w ogóle dostał swoje prawa miejskie. Zalew Chańcza, zbudowany w latach 1974–1984 na Czarnej Staszowskiej, leży na pograniczu trzech gmin: Rakowa, Staszowa i Szydłowa.",
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

  districtsHeading: "Do których części Staszowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich osiedli miasta i do sołectw gminy — Grzybowa, Kurozwęk, Oględowa i pozostałych — bez dopłaty za dojazd.",
    "Miasto ma oficjalny wykaz osiedli, więc podaję je poniżej dokładnie tak, jak brzmią w dokumentach.",
  ],
  districts: [
    "Osiedle Nr 1 „Północ”",
    "Osiedle Nr 2 „Ogrody”",
    "Osiedle Nr 3 „Stare Miasto”",
    "Osiedle Nr 4 „Staszówek”",
    "Osiedle Nr 5 „Wschód”",
    "Osiedle Nr 6 „Oględowska”",
  ],

  nearbyHeading: "Poza Staszów też przyjadę",
  nearbyParagraphs: [
    "Połaniec, Osiek, Sandomierz, Busko-Zdrój, Opatów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Połaniec", "Osiek", "Sandomierz", "Busko-Zdrój", "Opatów", "Kielce"],

  about: blokOMnie("do Staszowa", "w Staszowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Staszowa bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich osiedli miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Staszowie"),
    {
      question: "Chcę to głównie do koktajli. Czy warto?",
      answer:
        "Nie i wolę powiedzieć to od razu. Do samych koktajli wystarczy dobry blender kielichowy za kilkaset złotych — robi to samo i równie dobrze. Różnica pojawia się przy twardych składnikach i lodzie, a przede wszystkim przy rzeczach gorących: zupę krem zmiksujecie wprost w naczyniu, w którym się gotowała, i nie ma przekładania. Ale to są argumenty za urządzeniem do gotowania, nie za drogim blenderem. Jeśli nie zamierzacie w nim gotować, reszta ceny idzie na funkcje, których nie użyjecie.",
    },
    {
      question: "Czy koktajle z tego urządzenia są zdrowsze?",
      answer:
        "Nie odpowiem na to pytanie, bo nie jest do mnie. Koktajle obrosły opowieściami o oczyszczaniu i witaminach bardziej niż jakakolwiek inna rzecz w kuchni, a ja sprzedaję sprzęt kuchenny, nie zdrowie. Mogę powiedzieć tylko, co urządzenie robi z owocami — resztę zostawiam ludziom z odpowiednim wykształceniem.",
    },
  ],

  geo: { lat: 50.5606, lng: 21.1667 },
};
