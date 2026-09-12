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
 * ZDZIESZOWICE — miasto w powiecie krapkowickim, 10 082
 * mieszkańców (31.12.2024, GUS); cała gmina 14 009. PRAWA
 * MIEJSKIE 1962 r. — miasto jest MŁODSZE OD SWOJEJ KOKSOWNI
 * o trzydzieści lat (budowa zakładu 1931–1932). Koksownia
 * działa do dziś i jest największym producentem koksu
 * w Polsce; zatrudnia rząd wielkości tysiąca sześciuset osób
 * przy dziesięciu tysiącach mieszkańców miasta.
 *
 * KĄT: brak piekarnika — czyli czego to urządzenie nie upiecze,
 * nie przypiecze i nie zapiecze. Miasto zbudowane wokół baterii
 * pieców koksowniczych jest jedynym właściwym miejscem na stronę
 * o tym, że sprzęt, który sprzedaję, pieca nie ma.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie grzeje od dołu i miesza, więc gotuje,
 *   dusi i gotuje na parze, ale NIE PIECZE,
 * — czego konkretnie nie zrobi: skórki, rumieniu, zapiekanki,
 *   ciasta w formie, mięsa z chrupiącą powierzchnią,
 * — że wyrobi ciasto, ale upiec je trzeba w piekarniku,
 * — że smażenie też odpada i zostaje przy patelni,
 * — i uczciwie: kto kupuje to urządzenie zamiast piekarnika,
 *   kupuje nieporozumienie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o pieczeniu, smażeniu ani
 *   gotowaniu na parze. Nie porównuję metod pod kątem zdrowia.
 * — ŻADNEGO STRASZENIA MIESZKAŃCÓW ZAKŁADEM. Koksownia ma status
 *   zakładu dużego ryzyka i bywa tematem sporów o emisje —
 *   to jest prawda, ale strona handlowa o sprzęcie kuchennym
 *   nie jest miejscem, w którym wolno tego używać. Nie ma tu
 *   ani słowa o smogu, zdrowiu ani awariach.
 * — ŻADNYCH SPEKULACJI O PRZYSZŁOŚCI ZAKŁADU. Nie sugeruję
 *   ludziom w mieście jednego pracodawcy, że mogą stracić pracę.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Piec" (Piekary Śląskie)
 * dotyczy PIECA KAFLOWEGO jako serca dawnego domu — grzał
 * i gotował naraz. „Pieczenie własnego chleba" należy do
 * Grudziądza. „Czerstwy chleb" do Bodzentyna. „Żeliwo"
 * (Stąporków) dotyczy konkretnego naczynia. Tutaj chodzi
 * o JEDNĄ FUNKCJĘ, której w tym urządzeniu nie ma, i o wszystkie
 * potrawy, które przez to odpadają.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że koksownia jest największa w Europie. Prasa
 *   powtarzała to jeszcze w 2025 r., ale sama spółka w 2026 r.
 *   pisze „największy producent koksu w POLSCE", a deklarowana
 *   skala spadła z 4,2 mln ton (2014) do ok. 2,6 mln (2026).
 *   Piszę „największa w Polsce".
 * — NIE PODAJĘ NAZWY WŁAŚCICIELA ZAKŁADU. Jest ustalona,
 *   ale nie reklamuję ani nie oceniam cudzych firm.
 * — NIE PODAJĘ dokładnej liczby zatrudnionych. Ostatnia znana
 *   pochodzi z 2025 r. Piszę „rząd wielkości tysiąca sześciuset".
 * — NIE PODAJĘ dziennej daty praw miejskich. Jedyne źródło
 *   z datą to prasa z 2012 r.; BIP gminy podaje sprzeczny
 *   rok 1967 (to rok praw miejskich sąsiedniego Gogolina).
 *   Piszę: 1962.
 * — NIE PISZĘ, że Zdzieszowice mają dwujęzyczne tablice.
 *   NIE MAJĄ — gmina zdecydowała przeciw, mimo że sąsiednie mają.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Zdzieszowic nic nie znaleziono.
 * — OSIEDLA SĄ PRAWDZIWE. To jedyne miasto tej fali z OFICJALNYM
 *   wykazem sześciu osiedli jako jednostek pomocniczych
 *   (statut gminy, uchwała z 17 października 2018 r.).
 *   districts jest tu WYPEŁNIONE i to nie jest zmyślone.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1962 r.; koksownia budowana 1931–1932,
 *   pierwsza bateria uruchomiona w 1932 r. — czyli zakład jest
 *   starszy od miasta o trzydzieści lat,
 * — koksownia to największy producent koksu w Polsce,
 * — elektrociepłownia zakładu jest podstawowym źródłem ciepła
 *   dla około siedmiu tysięcy mieszkańców,
 * — sześć osiedli jako jednostki pomocnicze: Piastów I,
 *   Piastów II, Stara Część Miasta, Stare Osiedle,
 *   Akacjowa-Zielona, Kościuszki-Korfantego,
 * — miasto leży nad Odrą, w sąsiedztwie Parku Krajobrazowego
 *   Góra Świętej Anny,
 * — 10 082 mieszkańców (31.12.2024).
 */
export const ZDZIESZOWICE: CityContent = {
  slug: "zdzieszowice",
  h1: "Thermomix Zdzieszowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zdzieszowice — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Zdzieszowicach: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie osiedla i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zdzieszowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zdzieszowicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zdzieszowic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — na wszystkie osiedla i do sołectw gminy.",

  highlights: highlightyStandardowe("Zdzieszowice i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Miasto pieców. A to urządzenie pieca nie ma.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zdzieszowicach – jak wygląda prezentacja?",
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
      id: "bez-piekarnika",
      heading: "Miasto zbudowane wokół pieców — i urządzenie, które pieca nie ma",
      paragraphs: [
        "Zdzieszowice są młodsze od swojego zakładu. Koksownię budowano tu w latach 1931–1932, a prawa miejskie miejscowość dostała dopiero w 1962 roku — trzydzieści lat po tym, jak ruszyła pierwsza bateria. Dziś to największa koksownia w Polsce, a jej elektrociepłownia ogrzewa około siedmiu tysięcy mieszkańców. Trudno o miasto bardziej związane z piecami.",
        "I właśnie dlatego to jest właściwe miejsce, żeby powiedzieć rzecz, którą sprzedawcy mówią najniechętniej: to urządzenie nie ma piekarnika. Grzeje od dołu i miesza. Gotuje, dusi, gotuje na parze, miksuje — ale nie piecze.",
        "Co z tego wynika w praktyce, konkretnie:",
        "Nie zrobi skórki ani rumieniu. Żadnego przypieczonego wierzchu, żadnej chrupiącej powierzchni na mięsie, żadnej zapiekanki z serem, który się zaciągnął. Wszystko, co ma być brązowe od góry, wymaga piekarnika albo grilla.",
        "Nie upiecze ciasta ani chleba. Wyrobi ciasto — i to dobrze, bo wyrabianie to najnudniejsza część — ale formę wstawia się do piekarnika i to się nie zmieni.",
        "Nie usmaży. Kotlet, placki, naleśniki, jajecznica z przypieczonym spodem — patelnia zostaje na swoim miejscu.",
        "I nie przypiecze niczego, co ugotował. Danie wychodzi z niego miękkie i wilgotne, bo takie właśnie ma być. Jeżeli w Waszym domu połowa obiadów kończy się w piekarniku, to warto o tym pomyśleć przed zakupem, a nie po.",
        "Powiem to jeszcze prościej, bo wolę stracić sprzedaż niż mieć rozczarowaną klientkę: kto kupuje to urządzenie zamiast piekarnika, kupuje nieporozumienie. Ono nie zastępuje piekarnika — ono zastępuje stanie przy garnku. To dwie różne rzeczy i tylko jedna z nich jest tu na sprzedaż.",
        "A rzeczy, które robi dobrze, są dokładnie po przeciwnej stronie: wszystko, co mokre, gorące i wymagające mieszania. Zupy, sosy, gulasze, risotto, kremy, przeciery, dania jednogarnkowe. Nie jest to mało — po prostu nie jest to piekarnik.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/tm7", label: "Co potrafi TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zdzieszowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, co u Was najczęściej ląduje w piekarniku — wtedy od razu rozstrzygniemy, czy to urządzenie ma u Was sens, czy nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zdzieszowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zdzieszowickiej rodziny",
      paragraphs: [
        "Zdzieszowice liczą nieco ponad dziesięć tysięcy mieszkańców, a cała gmina czternaście. Miasto powstało wokół jednego zakładu i to widać do dziś — także w tym, że w odróżnieniu od większości małych miast, o których piszę, ma prawdziwy, uchwalony podział na sześć osiedli. Leży nad Odrą, w sąsiedztwie Parku Krajobrazowego Góra Świętej Anny, co daje dość nietypowe sąsiedztwo ciężkiego przemysłu i terenu chronionego.",
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

  districtsHeading: "Do których osiedli Zdzieszowic dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu osiedli miasta i do sołectw gminy — Januszkowic, Krępnej, Rozwadzy, Żyrowej i pozostałych — bez dopłaty za dojazd.",
    "Zdzieszowice są jednym z niewielu tak małych miast z prawdziwym, uchwalonym podziałem na osiedla, więc przy umawianiu wystarczy podać nazwę swojego.",
  ],
  districts: [
    "Piastów I",
    "Piastów II",
    "Stara Część Miasta",
    "Stare Osiedle",
    "Akacjowa-Zielona",
    "Kościuszki-Korfantego",
  ],

  nearbyHeading: "Poza Zdzieszowice też przyjadę",
  nearbyParagraphs: [
    "Krapkowice, Gogolin, Kędzierzyn-Koźle, Strzelce Opolskie, Opole i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krapkowice", "Gogolin", "Kędzierzyn-Koźle", "Strzelce Opolskie", "Opole", "Ozimek"],

  about: blokOMnie("do Zdzieszowic", "w Zdzieszowicach i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zdzieszowic bez dodatkowej opłaty?",
      answer:
        "Tak, na wszystkie sześć osiedli miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zdzieszowicach"),
    {
      question: "Czy Thermomix zastąpi piekarnik?",
      answer:
        "Nie i nie będę tego obiecywać. Urządzenie grzeje od dołu i miesza — gotuje, dusi, gotuje na parze, ale nie piecze. Nie zrobi skórki, rumieniu, zapiekanki ani ciasta w formie. Zastępuje stanie przy garnku, nie piekarnik.",
    },
    {
      question: "Czy upiekę w nim ciasto albo chleb?",
      answer:
        "Wyrobi ciasto — i to jest realna pomoc, bo wyrabianie to najnudniejsza część — ale formę i tak wstawia się do piekarnika. Tego się nie obejdzie.",
    },
    {
      question: "Czy w takim razie w czym jest naprawdę dobry?",
      answer:
        "We wszystkim, co mokre, gorące i wymagające mieszania: zupy, sosy, gulasze, risotto, kremy, przeciery, dania jednogarnkowe. To niemało — po prostu leży dokładnie po przeciwnej stronie niż pieczenie i smażenie.",
    },
  ],

  geo: { lat: 50.4242, lng: 18.1248 },
};
