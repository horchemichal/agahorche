import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * KONIN — miasto nad Wartą, w którym stoi najstarszy zachowany znak drogowy
 * w Polsce: kamienny słup z dwunastego wieku, oznaczający połowę drogi
 * między Kaliszem a Kruszwicą.
 *
 * KĄT: trzeci tydzień. Miasto, którego symbolem jest znak „tu jest połowa
 * drogi", to jedyne właściwe miejsce na temat przemilczany przez całą
 * branżę: CO SIĘ DZIEJE, GDY MINIE PIERWSZY ZAPAŁ. Urządzenia nie umierają
 * przy zakupie ani po roku — umierają w trzecim tygodniu, gdy nowość się
 * kończy, a nawyk jeszcze się nie wytworzył.
 *
 * TO NIE MOŻE BYĆ SEKCJA MOTYWACYJNA. Ma podać konkretny, sprawdzalny
 * mechanizm (trzy dania, blat zamiast szafki, jeden wieczór przypomnienia)
 * i przyznać, że u części osób to i tak nie zadziała.
 *
 * ROZGRANICZENIE. Głogów dostał „nie kupujcie wszystkiego naraz", czyli
 * o AKCESORIACH przy zakupie. Wałbrzych — o wymianie starego sprzętu.
 * Tutaj chodzi o pierwsze tygodnie użytkowania i o porzucenie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Koninie stoi kamienny słup drogowy z dwunastego wieku, uznawany
 *   za najstarszy zachowany znak drogowy w Polsce, wyznaczający połowę
 *   drogi między Kaliszem a Kruszwicą,
 * — miasto leży nad Wartą.
 */
export const KONIN: CityContent = {
  slug: "konin",
  h1: "Thermomix Konin – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Konin — prezentacja i cena",
  seoDescription:
    "Thermomix w Koninie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Konin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Koninie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Konina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Konin i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Koninie – jak wygląda prezentacja?",
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
      id: "trzeci-tydzien",
      heading: "Słup, który mówi „tu jest połowa drogi” — i trzeci tydzień",
      paragraphs: [
        "W Koninie stoi kamienny słup z dwunastego wieku, uznawany za najstarszy zachowany znak drogowy w Polsce. Nie oznacza początku ani końca trasy, tylko jej połowę: między Kaliszem a Kruszwicą. To jest znak dla kogoś, kto już wyjechał, ale jeszcze nie dojechał — i dokładnie o takim momencie chcę napisać, bo w tej branży się o nim milczy.",
        "Sprzedawcy mówią o dniu zakupu. Klientki po roku mówią, że to najlepszy sprzęt w kuchni albo że stoi w piwnicy. Nikt nie mówi o trzecim tygodniu, a to właśnie tam wszystko się rozstrzyga.",
        "Wygląda to zawsze tak samo. Pierwszy tydzień: entuzjazm, pięć nowych dań, zdjęcia. Drugi: jeszcze dobrze, ale już bez fajerwerków. Trzeci: nowość się skończyła, a nawyk jeszcze się nie zrobił — i wtedy w któryś zmęczony wtorek sięga się po stary garnek, bo tak jest odruchowo szybciej. Po dwóch takich wtorkach urządzenie wraca do pudełka „na razie”, a „na razie” trwa potem latami.",
        "Mam na to trzy rady i wszystkie są przyziemne. Po pierwsze: wybierzcie trzy dania, które i tak jecie co tydzień, i przez pierwszy miesiąc róbcie w nim tylko je. Nie dwadzieścia nowych — trzy stare. Nawyk robi się na powtarzaniu, nie na nowościach. Po drugie: niech stoi na blacie, a nie w szafce. To brzmi trywialnie, ale sprzęt schowany do szafki jest sprzętem martwym i widzę tę zależność w każdym domu. Po trzecie: umówmy się na jeden telefon albo wiadomość po miesiącu. Nie żeby coś sprzedać — żeby zapytać, co się przyjęło, a co nie.",
        "I rzecz uczciwa na koniec: u części osób to i tak nie zadziała, bo w domu po prostu nie gotuje się na tyle często, żeby cokolwiek weszło w nawyk. Jeżeli po tych rozmowach będzie widać, że to Wasz przypadek, powiem to wprost przed zakupem, a nie po.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Koninie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Koninie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla konińskiej rodziny",
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

  districtsHeading: "Do których części Konina i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Starówka",
    "Nowy Konin",
    "Chorzeń",
    "Zatorze",
    "Glinka",
    "Laskówiec",
    "Gosławice",
    "Maliniec",
    "Wilków",
    "Niesłusz",
  ],

  nearbyHeading: "Poza Konin też przyjadę",
  nearbyParagraphs: [
    "Golina, Słupca, Kleczew, Ślesin i Rychwał są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Golina", "Słupca", "Kleczew", "Ślesin", "Rychwał", "Tuliszków"],

  about: blokOMnie("do Konina", "w Koninie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Konina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Koninie"),
    {
      question: "Boję się, że po miesiącu przestanę tego używać. Co wtedy?",
      answer:
        "To najczęstszy scenariusz i najczęściej rozstrzyga się w trzecim tygodniu, gdy nowość się kończy, a nawyk jeszcze się nie zrobił. Trzy rzeczy pomagają: przez pierwszy miesiąc róbcie tylko trzy dania, które i tak jecie co tydzień; trzymajcie urządzenie na blacie, nie w szafce; i odezwijcie się do mnie po miesiącu — sama zapytam, co się przyjęło.",
    },
    {
      question: "Czy jest sens kupować, jeśli gotujemy rzadko?",
      answer:
        "Zwykle nie, i powiem to przed zakupem, a nie po. Nawyk robi się na powtarzaniu — jeśli w domu gotuje się dwa razy w miesiącu, urządzenie nie zdąży wejść do rytmu i zostanie w szafce.",
    },
  ],

  geo: { lat: 52.2231, lng: 18.2511 },
};
