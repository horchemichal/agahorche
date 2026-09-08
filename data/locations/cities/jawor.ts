import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * JAWOR — Kościół Pokoju, wpisany na listę UNESCO w 2001 roku.
 * Zbudowany w latach 1654–1655 pod ostrymi warunkami narzuconymi
 * z góry: wyłącznie z materiałów nietrwałych (drewno, glina, słoma),
 * bez wieży i bez dzwonów, poza murami miasta, w ciągu jednego roku
 * i na koszt samych zainteresowanych. Wyszła z tego budowla, którą
 * po czterech wiekach ogląda cały świat.
 *
 * KĄT: kuchnia, której się nie wybierało. Warunki narzucone z góry —
 * ciasno, jedno gniazdko, stary blat, kuchnia po poprzednikach —
 * i uczciwe rozróżnienie: które z nich da się obejść, a które są
 * powodem, żeby nie kupować.
 *
 * SEKCJA MA ROZRÓŻNIĆ DWIE LISTY:
 * — ograniczenia, które NIE przeszkadzają: mała kuchnia, brzydka
 *   kuchnia, wynajęte mieszkanie, brak zmywarki, stara zabudowa,
 * — ograniczenia, które są POWODEM, ŻEBY ODPUŚCIĆ: brak stałego miejsca
 *   na blacie, dom, w którym się nie gotuje, zakup dla kogoś, kto
 *   o niego nie prosił.
 * — I zdanie najważniejsze: pierwsza lista jest dłuższa, ale to druga
 *   rozstrzyga.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD ELEKTRYCZNYCH (zasada z Wyszkowa) — o gniazdkach
 *   i instalacji decyduje elektryk, nie ja.
 * — ŻADNYCH WYMIARÓW ANI PARAMETRÓW z pamięci.
 * — Nie robić z ograniczeń romantycznej opowieści. Kościół Pokoju jest
 *   hakiem, nie morałem: nie twierdzę, że ograniczenia są dobre.
 *
 * ROZGRANICZENIE. Będzin mówi o małej kuchni w bloku, Otwock
 * o estetyce, Wyszków o kuchni tymczasowej w budowie, Kętrzyn o trzech
 * pytaniach przed spotkaniem. Tutaj chodzi o UPORZĄDKOWANIE, które
 * ograniczenia w ogóle mają znaczenie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Kościół Pokoju w Jaworze zbudowano w latach 1654–1655,
 * — warunki cesarskie: materiały nietrwałe, bez wieży i dzwonów, poza
 *   murami miasta, budowa w rok, na koszt ewangelików,
 * — wpis na listę UNESCO w 2001 r. (razem z kościołem w Świdnicy),
 * — Jawor leży nad Nysą Szaloną, u podnóża Pogórza Kaczawskiego.
 */
export const JAWOR: CityContent = {
  slug: "jawor",
  h1: "Thermomix Jawor – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jawor — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Jaworze: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jawor — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jaworze. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jawora z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Jawor i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Większość kuchennych ograniczeń da się obejść. Kilku nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jaworze – jak wygląda prezentacja?",
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
      id: "kuchnia-ktorej-sie-nie-wybieralo",
      heading: "Kościół zbudowany pod cudze warunki — i kuchnia, której nie wybieraliście",
      paragraphs: [
        "Kościół Pokoju w Jaworze powstał w latach 1654–1655 pod warunkami narzuconymi z góry i wyjątkowo nieprzyjaznymi: wyłącznie z materiałów nietrwałych, bez wieży i bez dzwonów, poza murami miasta, w ciągu jednego roku i na koszt tych, którzy go potrzebowali. W 2001 roku trafił na listę UNESCO. Nie robię z tego morału — nie twierdzę, że ograniczenia są dobre. Wykorzystuję to do rzeczy praktycznej: do kuchni, której nikt z Was sobie nie wybierał.",
        "Bo tak to zwykle wygląda. Kuchnia jest taka, jaka była w mieszkaniu, albo taka, jaką ktoś urządził dziesięć lat temu, albo taka, na jaką wtedy starczyło. I przy takim zakupie wraca pytanie, czy to w ogóle ma sens „w czymś takim”. Uporządkuję to na dwie listy, bo one nie są równorzędne.",
        "Lista pierwsza — rzeczy, które naprawdę nie przeszkadzają. Mała kuchnia: urządzenie potrzebuje kawałka blatu, a nie przestronnego pomieszczenia. Brzydka albo stara zabudowa: nie ma to żadnego wpływu na to, jak gotuje. Wynajęte mieszkanie: sprzęt nie jest przymocowany do niczego i jedzie z Wami. Brak zmywarki: naczynie myje się w sobie samym, a to akurat wtedy pomaga bardziej, nie mniej. Płyta gazowa albo bardzo stara kuchenka: nieistotne, bo urządzenie z nich nie korzysta.",
        "Lista druga jest krótsza i to ona rozstrzyga. Brak stałego miejsca na blacie — sprzęt chowany po każdym użyciu przestaje być używany w kilka tygodni i żadne dobre chęci tego nie zmieniają. Dom, w którym się nie gotuje i nie zapowiada się, żeby to się zmieniło — wtedy nie ma czego usprawniać. I zakup dla kogoś, kto o niego nie prosił, bo taki sprzęt trafia do szafki najszybciej ze wszystkich.",
        "Zwracam uwagę na proporcje tych list, bo są mylące. Pierwsza jest dłuższa i to ona zwykle spędza ludziom sen z powiek — a składa się z rzeczy, które można spokojnie odpuścić. Druga ma trzy pozycje i to w niej zapada decyzja. Jeśli macie ciasno i brzydko, ale jest gdzie to postawić i ktoś w domu gotuje, to jest dobra sytuacja, mimo pozorów.",
        "Nie doradzę Wam natomiast niczego w sprawach elektrycznych: ani co podłączyć, ani czy dane gniazdko wytrzyma, ani jak rozwiązać brak gniazdka w wygodnym miejscu. Przy instalacji zła podpowiedź kończy się realnym niebezpieczeństwem, a ja nie mam żadnych uprawnień w tej dziedzinie. Nie podam też żadnych wymiarów z pamięci — na spotkaniu po prostu postawimy urządzenie u Was na blacie i zobaczycie, jak jest.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jaworze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Nie sprzątajcie kuchni na tę okazję i nie tłumaczcie się z niej — przyjeżdżam do kuchni takich, jakie są, i to jest właśnie sensowny test.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jaworze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jaworskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Jawora dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie ma oficjalnego podziału na dzielnice, więc przy umawianiu wystarczy podać ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  // Brak potwierdzonej listy osiedli — urząd i BIP jej nie publikują, a nazwy
  // krążące po portalach nieruchomości nie są podziałem administracyjnym.
  // Zgadywanie oznaczałoby podanie niesprawdzonej informacji jako faktu.
  districts: [],

  nearbyHeading: "Poza Jawor też przyjadę",
  nearbyParagraphs: [
    "Bolków, Strzegom, Złotoryja i Świerzawa są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bolków", "Strzegom", "Złotoryja", "Świerzawa", "Legnica", "Świebodzice"],

  about: blokOMnie("do Jawora", "w Jaworze i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jawora bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Jaworze"),
    {
      question: "Mam małą i starą kuchnię. Czy to problem?",
      answer:
        "Zwykle nie. Mała kuchnia, stara zabudowa, wynajęte mieszkanie, brak zmywarki i stara kuchenka nie mają tu znaczenia — urządzenie potrzebuje kawałka blatu i gniazdka, a z płyty nie korzysta. To są rzeczy, które spędzają ludziom sen z powiek, a spokojnie da się je odpuścić.",
    },
    {
      question: "To co jest realnym powodem, żeby nie kupować?",
      answer:
        "Trzy rzeczy. Brak stałego miejsca na blacie — sprzęt chowany po każdym użyciu przestaje być używany w kilka tygodni. Dom, w którym się nie gotuje i nie zapowiada się zmiana. I zakup dla kogoś, kto o niego nie prosił. Ta lista jest krótsza od poprzedniej, ale to w niej zapada decyzja.",
    },
  ],

  geo: { lat: 51.0545, lng: 16.1863 },
};
