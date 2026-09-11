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
 * STĄPORKÓW — miasto w powiecie koneckim, 5 052 mieszkańców
 * (31.12.2024, GUS). Prawa miejskie w 1967 r. — miasto młode,
 * wyrosłe z osiedla przy zakładach. Wielki piec zbudowany
 * w latach 1738–1739 przez kanclerza Jana Małachowskiego działał
 * do 1938 r.; w 1781 r. produkował więcej surówki tygodniowo niż
 * porównywalne huty górnośląskie. W lokalnych mediach miasto bywa
 * nazywane „miastem grzejników".
 *
 * KĄT: żeliwo — czyli czego to urządzenie nie zastąpi, i dlaczego
 * nie próbuję. Miasto, które przez dwa stulecia odlewało żeliwo,
 * jest jedynym właściwym miejscem na stronę o materiale, który
 * w kuchni robi dokładnie to, czego ten sprzęt zrobić nie może.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że żeliwna patelnia i garnek trzymają ciepło i rumienią,
 *   a to urządzenie ma naczynie ze stali i NIE RUMIENI,
 * — że to nie są konkurenci: jedno gotuje i miesza bez obecności,
 *   drugie przypieka i trzyma temperaturę po zdjęciu z ognia,
 * — że NIE trzeba się pozbywać żeliwa po takim zakupie — wręcz
 *   przeciwnie, to jest ten sprzęt, który zostaje na blacie,
 * — i uczciwie: są domy, w których dobra żeliwna patelnia zrobi
 *   dla codziennego gotowania więcej niż to urządzenie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O SEZONOWANIU I KONSERWACJI ŻELIWA. Krąży wokół
 *   tego mnóstwo sprzecznych porad, a ja nie jestem od cudzych
 *   garnków. Odsyłam do producenta.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o żeliwie, powłokach ani żelazie
 *   przenikającym do jedzenia. To pytanie medyczne i materiałowe,
 *   nie handlowe.
 * — ŻADNEJ KRYTYKI żadnego typu naczyń ani producentów.
 * — ŻADNEGO NAMAWIANIA DO WYRZUCANIA CZEGOKOLWIEK.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — TU MUSZĘ UWAŻAĆ NAJBARDZIEJ.
 * „Czego to NIE zastąpi w kuchni" (inne miasto) to strona
 * o OBIETNICY MARKETINGOWEJ „jedno urządzenie zamiast wielu".
 * „W kuchni stoi już inny robot" dotyczy SPRZĘTU ELEKTRYCZNEGO,
 * który już stoi. „Co zrobić ze starym sprzętem" dotyczy
 * POZBYWANIA SIĘ rzeczy. „Cmentarzysko sprzętów kuchennych" —
 * nieużywanych zakupów. „Ciasto naleśnikowe" (Cieszanów) wspomina
 * patelnię, ale tam osią jest CIASTO i podział pracy przy jednym
 * daniu. Tutaj tematem jest KONKRETNY MATERIAŁ i jego fizyczna
 * właściwość — pojemność cieplna — której stal w tym urządzeniu
 * nie ma i mieć nie będzie. To jest strona o naczyniu, nie
 * o obietnicy i nie o daniu.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ O ODLEWNI ŻELIWA „STĄPORKÓW" JAKO O DZIAŁAJĄCEJ.
 *   Spółka ma w KRS status WYKREŚLONA, po upadłości. To dokładnie
 *   ten typ „faktu", który krąży w sieci długo po tym, jak przestał
 *   być prawdą. Działa natomiast zakład urządzeń kotłowych
 *   i osobna, mniejsza odlewnia rodzinna — piszę o nich opisowo,
 *   bez nazw, bo nie reklamuję cudzych działalności,
 * — NIE PODAJĘ DZIENNEJ DATY nadania praw miejskich w 1967 r. ani
 *   numeru aktu — nie ustalono. Miasto NIE traciło potem praw,
 * — NIE WSKAZUJĘ NAJWIĘKSZEGO PRACODAWCY. Brak rankingu i brak
 *   liczby zatrudnionych,
 * — NIE PODAJĘ wskaźnika lesistości gminy Stąporków. Dostępne dane
 *   dotyczą całej dyrekcji regionalnej lasów, nie tej gminy,
 * — NIE PRZYPISUJĘ STĄPORKOWOWI PRODUKTÓW Z LISTY TRADYCYJNEJ.
 *   Wpisy z powiatu koneckiego („chleb wiejski konecki", „karp
 *   małyszyński", „karp z Rudy Malenieckiej") pochodzą z INNYCH
 *   GMIN tego powiatu. Dla gminy Stąporków nie ma ani jednego
 *   wpisu i tak jest w tekście,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — wielki piec wzniesiony w latach 1738–1739 przez kanclerza
 *   Jana Małachowskiego; w 1781 r. zakład produkował więcej surówki
 *   tygodniowo niż porównywalne huty górnośląskie; działał do 1938 r.,
 * — prawa miejskie w 1967 r.,
 * — powojenna odlewnia żeliwa już nie istnieje; działa zakład
 *   urządzeń kotłowych i mniejsza odlewnia rodzinna,
 * — miasto bywa nazywane „miastem grzejników",
 * — 5 052 mieszkańców (31.12.2024).
 */
export const STAPORKOW: CityContent = {
  slug: "staporkow",
  h1: "Thermomix Stąporków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Stąporków — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Stąporkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stąporków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Stąporkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Stąporkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Stąporków i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Żeliwnej patelni nie wyrzucajcie. Nawet po takim zakupie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Stąporkowie – jak wygląda prezentacja?",
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
      id: "zeliwo",
      heading: "Miasto, które odlewało żeliwo — czyli o naczyniu, którego nie zastąpię",
      paragraphs: [
        "Wielki piec stanął w Stąporkowie w latach 1738–1739, postawił go kanclerz Jan Małachowski, a w 1781 roku ten zakład produkował więcej surówki tygodniowo niż porównywalne huty na Górnym Śląsku. Piec pracował do 1938 roku. Lokalne media do dziś nazywają Stąporków miastem grzejników — od żeliwnych grzejników, które się tu odlewało. Prawa miejskie przyszły dopiero w 1967 roku, dużo później niż przemysł.",
        "To jest jedyne miejsce w tym serwisie, w którym chcę napisać o materiale, a nie o daniu — bo w kuchni żeliwo robi dokładnie to, czego urządzenie, które sprzedaję, zrobić nie może.",
        "Żeliwna patelnia albo garnek mają dużą pojemność cieplną. Po prostu: są ciężkie i długo trzymają ciepło. Kiedy wrzucacie na rozgrzane żeliwo kawałek mięsa, temperatura nie spada — i dlatego mięso się przypieka, a nie dusi we własnym soku. To samo żeliwo po zdjęciu z ognia stygnie powoli, więc danie dochodzi samo.",
        "Naczynie w Thermomixie jest ze stali i jest lekkie. Gotuje, dusi, miesza, gotuje na parze — i nie rumieni. Pisałam to już przy kilku innych miastach i tu powiem to ostatni raz, ale najdosłowniej: to nie jest kwestia ustawień ani mocy. To jest kwestia materiału i konstrukcji, i nic się z tym nie zrobi.",
        "Dlatego nie uważam tych dwóch rzeczy za konkurentów. Jedna gotuje bez Waszej obecności — nastawiacie i wychodzicie z kuchni. Druga przypieka i trzyma temperaturę, ale wymaga stania przy niej. To są dwie różne prace i dom, w którym gotuje się poważnie, potrzebuje obu.",
        "Stąd rzecz, której nie usłyszycie od sprzedawcy sprzętu: po takim zakupie nie pozbywajcie się żeliwa. Żaden z moich argumentów go nie dotyczy. Jeśli macie w domu starą żeliwną patelnię po kimś, to jest prawdopodobnie najlepsze naczynie, jakie stoi w tej kuchni, i przeżyje wszystko inne — łącznie z tym, co Wam sprzedaję.",
        "I zdanie, które powiem, choć nie sprzyja sprzedaży: są domy, w których dobra żeliwna patelnia zrobi dla codziennego gotowania więcej niż urządzenie za kilkanaście tysięcy. Jeśli u Was większość obiadów powstaje na patelni i nikomu to nie przeszkadza, to jest właśnie taki dom. Mówię to na stronie, na której mam sprzedawać.",
        "Czego nie doradzę: niczego o sezonowaniu i konserwacji żeliwa. Krąży wokół tego mnóstwo sprzecznych porad, a ja nie jestem od cudzych garnków — po tę wiedzę idźcie do producenta. Nie wypowiem się też o niczym zdrowotnym w związku z materiałami naczyń.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Stąporkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, na czym gotujecie u siebie najczęściej. Jeśli usłyszę, że prawie wszystko robicie na patelni, powiem to wprost przez telefon — bo wtedy różnica będzie mniejsza, niż się spodziewacie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Stąporkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla stąporkowskiej rodziny",
      paragraphs: [
        "Stąporków liczy nieco ponad pięć tysięcy mieszkańców i jest miastem od 1967 roku — czyli od znacznie później, niż działał tu przemysł. Powojenna odlewnia żeliwa już nie istnieje; dziś pracuje zakład urządzeń kotłowych i mniejsza, rodzinna odlewnia.",
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

  districtsHeading: "Do których części Stąporkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Stąporków też przyjadę",
  nearbyParagraphs: [
    "Końskie, Skarżysko-Kamienna, Suchedniów, Przysucha i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Końskie", "Skarżysko-Kamienna", "Suchedniów", "Przysucha", "Kielce", "Szydłowiec"],

  about: blokOMnie("do Stąporkowa", "w Stąporkowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Stąporkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Stąporkowie"),
    {
      question: "Czy po zakupie mogę pozbyć się żeliwnej patelni?",
      answer:
        "Nie radzę i mówię to jako osoba, która ten sprzęt sprzedaje. Żeliwo ma dużą pojemność cieplną: rozgrzane nie traci temperatury po włożeniu mięsa, więc przypieka zamiast dusić, i po zdjęciu z ognia stygnie powoli. Naczynie w Thermomixie jest ze stali i nie rumieni — to kwestia materiału, nie ustawień. To są dwie różne prace i dom, w którym gotuje się poważnie, potrzebuje obu.",
    },
    {
      question: "Gotujemy prawie wszystko na patelni. Czy w ogóle warto?",
      answer:
        "Możliwe, że nie — i wolę to powiedzieć, niż przekonywać. Jeśli większość obiadów powstaje u Was na patelni i nikomu to nie przeszkadza, różnica będzie mniejsza, niż wygląda w reklamie: urządzenie nie zastąpi smażenia. Zyskujecie natomiast tam, gdzie trzeba stać nad garnkiem — zupy, sosy, dania duszone. Warto to sobie policzyć na spokojnie przed prezentacją, a nie po niej.",
    },
  ],

  geo: { lat: 51.1550, lng: 20.5486 },
};
