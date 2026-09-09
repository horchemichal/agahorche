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
 * OPOLE LUBELSKIE — 7 844 mieszkańców (koniec 2023, raport gminy),
 * spadek o 10,6% w latach 2014–2023. Cukrownia zamknięta w 2007 r.
 * Powiat opolski jest czwartym w Polsce pod względem powierzchni
 * sadów śliwkowych (743,17 ha, dane ARiMR 2025).
 *
 * KĄT: mieszanie. Jedyna rzecz, której człowiek nie zrobi, a maszyna
 * tak: mieszać bez przerwy przez godzinę i nie odejść. Powiat śliwkowy
 * jest właściwym miejscem, żeby o tym napisać, bo to tutaj gotuje się
 * rzeczy, które trzeba mieszać, żeby nie przywarły.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to nie jest efektowna funkcja, tylko najbardziej praktyczna,
 * — co realnie zmienia: dania długie i gęste przestają wymagać
 *   stania przy garnku — a to jest jedyny powód, dla którego wiele
 *   osób ich nie robi,
 * — że urządzenie nie skraca czasu gotowania, tylko UWALNIA ten czas,
 *   i że to dwie różne rzeczy,
 * — i odmowa: nic o przetworach.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O PRZETWORACH, PASTERYZACJI, WEKOWANIU
 *   I PRZECHOWYWANIU. Przy śliwkach i powidłach pokusa jest ogromna,
 *   a zasada jest ta sama co w Hrubieszowie i Zambrowie.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW — mimo że sekcja jest
 *   o długim gotowaniu.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani nic o cukrze i słodzeniu,
 *   mimo cukrowniczej historii miasta.
 * — ŻADNEGO ŻEROWANIA na zamknięciu cukrowni. Pojawia się jako fakt
 *   z historii miasta, bez komentarza o czyjejś winie.
 *
 * ROZGRANICZENIE — WAŻNE, BO SĄSIEDZTWO BLISKIE:
 * — kąt „czas" jest ZAJĘTY przez inne miasto, więc ta strona NIE jest
 *   o oszczędzaniu czasu jako takim. Jest o konkretnej czynności:
 *   MIESZANIU. Tekst wprost mówi, że gotowanie nie trwa krócej,
 * — Hrubieszów ma kąt „kilogramy zamiast porcji" — tam chodzi
 *   o ILOŚĆ i rozdrabnianie. Tu o czynność ciągłą,
 * — kąty „owoc, który nie poszedł do skupu" i „soki i moszcze"
 *   są zajęte — dlatego śliwki są TŁEM, a nie tematem, i nie ma tu
 *   nic o skupie ani o sokach.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE podaję roku budowy cukrowni. Źródła podają 1844 ALBO 1884 —
 *   różnica czterdziestu lat i żadnego rozstrzygnięcia. W tekście
 *   jest tylko rok zamknięcia (2007), który jest pewny,
 * — NIE podaję liczby zatrudnionych w cukrowni — nie znalazłam
 *   jej nigdzie,
 * — NIE mylę DWÓCH pałaców Lubomirskich, co robi wiele źródeł:
 *   pałac w samym mieście (przebudowa 1766–1773 dla Antoniego
 *   Lubomirskiego, arch. Merlini i Fontana, dziś liceum) to CO INNEGO
 *   niż pałac w NIEZDOWIE (1785–1787, Aleksander Lubomirski, dziś
 *   prywatny i niedostępny). W tekście jest tylko ten miejski,
 *   z funkcją dzisiejszą,
 * — NIE piszę o „dużych pracodawcach". Research ich nie znalazł —
 *   dziś to gospodarka drobna, usługowo-handlowa. Zamiast wymyślać,
 *   piszę o tym, co jest: sady,
 * — barszcz czereśniowy: karta produktu na gov.pl podaje tylko
 *   WOJEWÓDZTWO, bez gminy. Przypisanie go Poniatowej, którego użyłam
 *   na tamtej stronie, opiera się na materiałach urzędu
 *   marszałkowskiego i NIE zostało tu potwierdzone ani obalone.
 *   Dlatego w tekście Opola Lubelskiego nie ma o nim ani słowa —
 *   do wyjaśnienia przy okazji,
 * — uwaga: dwa oficjalne dokumenty tej samej gminy podają 7 844
 *   i 7 864 mieszkańców. W tekście jest „blisko osiem tysięcy".
 *
 * PUŁAPKA NAZEWNICZA. Opole Lubelskie to NIE Opole na Opolszczyźnie.
 * Wyszukiwarki mieszają je nagminnie — wszystkie wyniki o fabrykach
 * i strefie ekonomicznej „w Opolu" dotyczyły innego miasta i trzeba
 * je było odsiewać ręcznie. Serwis ma osobną stronę dla Opola
 * opolskiego i nie wolno tych dwóch mylić.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — powiat opolski (lubelski) jest CZWARTY W POLSCE pod względem
 *   powierzchni sadów śliwkowych: 743,17 ha, dane ARiMR 2025 —
 *   to rzadki przypadek superlatywu z twardym, porównywalnym źródłem,
 * — cukrownia zamknięta w 2007 r.; na jej terenie działa dziś
 *   „Centrum Cukrownia" z restauracją,
 * — pałac w mieście, przebudowany w latach 1766–1773, mieści dziś
 *   liceum,
 * — miasto publikuje wykaz DZIESIĘCIU osiedli — dlatego districts
 *   NIE jest tu pustą tablicą.
 */
export const OPOLE_LUBELSKIE: CityContent = {
  slug: "opole-lubelskie",
  h1: "Thermomix Opole Lubelskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Opole Lubelskie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Opolu Lubelskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Opole Lubelskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Opolu Lubelskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Opola Lubelskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Opole Lubelskie i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gotowanie nie trwa krócej. Po prostu nie trzeba przy nim stać.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Opolu Lubelskim – jak wygląda prezentacja?",
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
      id: "mieszanie",
      heading: "Powiat śliwkowy — i jedyna czynność, której człowiek nie wytrzyma, a maszyna tak",
      paragraphs: [
        "Powiat opolski jest czwartym w Polsce pod względem powierzchni sadów śliwkowych — siedemset czterdzieści trzy hektary według danych Agencji z 2025 roku. To jedna z niewielu rzeczy, jakie piszę na tych stronach z twardym porównaniem do reszty kraju, bo zwykle takich danych po prostu nie ma. W samym mieście stoi jeszcze dawna cukrownia, zamknięta w 2007 roku; dziś mieści się w niej restauracja.",
        "Śliwki są tu jednak tłem, nie tematem. Temat jest inny i dotyczy każdej kuchni: mieszania.",
        "To najmniej efektowna funkcja tego urządzenia i jednocześnie ta, która realnie zmienia najwięcej. Maszyna miesza w kółko przez godzinę i nie odchodzi. Człowiek nie wytrzyma — nie dlatego, że nie potrafi, tylko dlatego, że ma inne rzeczy do zrobienia i po dziesięciu minutach idzie po telefon.",
        "Zastanówcie się, ile dań wypadło z Waszej kuchni właśnie z tego powodu. Nie dlatego, że są trudne — bo nie są. Dlatego, że trzeba przy nich stać: wszystko gęste, wszystko długie, wszystko, co przywiera do dna, jeśli się odejdzie. Gęste sosy, kremy, masy, dania duszone godzinami, rzeczy z owocami, które trzeba odparować.",
        "Powiem od razu, czego to NIE robi, bo tu się najczęściej sprzedaje ludziom bajkę: gotowanie nie trwa krócej. Jeśli coś ma się gotować godzinę, będzie się gotować godzinę. Zmienia się co innego — ta godzina przestaje być Wasza. Możecie w tym czasie wyjść z kuchni, zrobić lekcje z dzieckiem, pójść do ogrodu. To nie jest oszczędność czasu, tylko jego uwolnienie, i wolę to nazwać po imieniu.",
        "I odmowa, przy której nie ustąpię, bo w powiecie śliwkowym padnie to pytanie: nie doradzam nic o przetworach, pasteryzacji, wekowaniu ani przechowywaniu. Ani jak długo, ani w czym, ani co jest bezpieczne. Błąd w tej dziedzinie kończy się zatruciem, a nie niesmacznym obiadem — a ja jestem przedstawicielką handlową, nie technologiem żywności. To, o czym mogę mówić, kończy się w momencie, gdy garnek schodzi z ognia.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Opolu Lubelskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli jest u Was danie, którego nie robicie, bo trzeba przy nim stać — powiedzcie mi o nim przy umawianiu. To jest dokładnie ta rzecz, którą warto sprawdzić na prezentacji, zamiast oglądać efektowny deser.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Opolu Lubelskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla opolskiej rodziny",
      paragraphs: [
        "Opole Lubelskie ma blisko osiem tysięcy mieszkańców i traci ludność — w ciągu dekady ubyło ponad dziewięćset osób. Po zamknięciu cukrowni nie ma tu jednego wielkiego zakładu; gospodarka jest drobna, a wokół miasta ciągną się sady.",
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

  districtsHeading: "Do których części Opola Lubelskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości w gminie, bez dopłaty za dojazd.",
    "Miasto dzieli się na dziesięć osiedli — przy umawianiu wystarczy podać osiedle albo ulicę.",
  ],
  districts: [
    "Centrum",
    "Błonie",
    "Ogrody",
    "Zajezierze",
    "Lipki",
    "Przy Lipowej",
    "Zagłobin",
    "Młodzieżowe",
    "Janiszkowice",
    "Zagrody",
  ],

  nearbyHeading: "Poza Opole Lubelskie też przyjadę",
  nearbyParagraphs: [
    "Poniatowa, Chodel, Karczmiska, Łaziska, Józefów nad Wisłą i Urzędów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Poniatowa", "Chodel", "Karczmiska", "Józefów nad Wisłą", "Kazimierz Dolny", "Bełżyce"],

  about: blokOMnie("do Opola Lubelskiego", "w Opolu Lubelskim i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Opola Lubelskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Opolu Lubelskim"),
    {
      question: "Czy dzięki temu obiad gotuje się szybciej?",
      answer:
        "Nie i nie będę tego obiecywać. Jeśli coś ma się gotować godzinę, będzie się gotować godzinę. Zmienia się to, że ta godzina przestaje być Wasza — urządzenie miesza samo i pilnuje temperatury, więc można wyjść z kuchni. To nie oszczędność czasu, tylko jego uwolnienie.",
    },
    {
      question: "Zrobię w tym powidła i przetwory ze śliwek?",
      answer:
        "Ugotować da się wiele rzeczy, ale nie doradzam nic o przetworach — ani o pasteryzacji, ani o wekowaniu, ani o tym, jak długo co stoi. Błąd w tej dziedzinie kończy się zatruciem, a ja jestem przedstawicielką handlową, nie technologiem żywności. To, o czym mogę mówić, kończy się w momencie, gdy garnek schodzi z ognia.",
    },
  ],

  geo: { lat: 51.1472, lng: 21.9694 },
};
