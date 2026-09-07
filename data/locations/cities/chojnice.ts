import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * CHOJNICE — miasto na skraju Borów Tucholskich, z zachowanymi murami
 * i bramą, ośrodek dla całej okolicy.
 *
 * KĄT: kupowanie używanego. To jest jedyne miejsce w serwisie na temat,
 * którego sprzedawca zwykle nie tyka wcale albo tyka nieuczciwie:
 * THERMOMIX Z DRUGIEJ RĘKI — co warto sprawdzić i czego się boję.
 *
 * WARUNEK UCZCIWOŚCI, BEZ KTÓREGO TA SEKCJA NIE MA PRAWA ISTNIEĆ:
 * mam tu oczywisty konflikt interesów i muszę go nazwać w pierwszym
 * zdaniu sekcji. Nie wolno pisać „nie kupujcie używanego" bez powodu,
 * bo to byłoby zwykłe pilnowanie własnej prowizji. Wolno podać rzeczowe
 * ryzyka (brak gwarancji, nieznana historia, kradzione sztuki,
 * uszkodzone naczynie) i uczciwie przyznać, że dla części osób używany
 * sprzęt jest po prostu rozsądny.
 *
 * CZEGO TU NIE MA: cen rynku wtórnego, nazw serwisów ogłoszeniowych,
 * porad prawnych ani twierdzeń o tym, co producent uznaje za ważne —
 * bo tego nie mogę potwierdzić.
 *
 * ROZGRANICZENIE. Wałbrzych mówi o wymianie WŁASNEGO starszego modelu.
 * Tutaj chodzi o zakup cudzego, używanego sprzętu zamiast nowego.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Chojnice leżą na skraju Borów Tucholskich i mają zachowane mury
 *   miejskie z bramą.
 */
export const CHOJNICE: CityContent = {
  slug: "chojnice",
  h1: "Thermomix Chojnice – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Chojnice — prezentacja i cena",
  seoDescription:
    "Thermomix w Chojnicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chojnice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chojnicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chojnic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Chojnice i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chojnicach – jak wygląda prezentacja?",
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
      id: "uzywany",
      heading: "A jeśli kupię używany? Zaczynam od tego, że mam tu interes",
      paragraphs: [
        "Zacznę od rzeczy, którą trzeba powiedzieć na początku, a nie na końcu: jeśli kupicie sprzęt z drugiej ręki, ja na tym nie zarobię. Mam więc w tej sprawie oczywisty konflikt interesów i wolę go nazwać, niż udawać bezstronną. Wszystko, co napiszę niżej, warto czytać z tą świadomością.",
        "Rozumiem, skąd bierze się to pytanie. Kwota jest duża, a ogłoszeń jest sporo — i dla części osób używany sprzęt jest po prostu rozsądny. Nie będę więc mówić „nigdy”, bo to byłoby pilnowanie własnej prowizji.",
        "Powiem natomiast, czego bym się na Waszym miejscu bała i co sprawdzała.",
        "Po pierwsze: co zostaje z uprawnień. Sprzęt kupiony od osoby prywatnej to nie to samo co sprzęt kupiony u przedstawiciela i zakres uprawnień bywa inny — dokładnie jaki, trzeba sprawdzić w dokumentach konkretnej sztuki, a nie wierzyć mi ani sprzedającemu na słowo.",
        "Po drugie: historia. Nie wiadomo, ile godzin przepracowało, czy było zalane, czy stało w wilgotnej piwnicy i czy ktoś przy nim nie majstrował. Przy sprzęcie, który miesza gorącą zawartość na wysokich obrotach, to nie jest drobiazg.",
        "Po trzecie, i to jest rzecz najczęściej pomijana: naczynie i nóż. To one się zużywają, a nie obudowa. Naczynie z rysami, luźny nóż albo zmęczona uszczelka potrafią kosztować później tyle, że oszczędność znika.",
        "Po czwarte, przykro mi to pisać, ale zdarza się: sztuki pochodzące z kradzieży. Warto wiedzieć, od kogo się kupuje.",
        "Moja praktyczna rada brzmi tak: jeżeli decydujecie się na używany, obejrzyjcie go włączonego, z gorącą wodą, i posłuchajcie, czy nic nie stuka. A jeżeli sprzedający nie chce, żebyście uruchomili urządzenie przed zapłatą, to jest jedyna informacja, jakiej potrzebujecie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chojnicach?",
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
    sekcjaCena("w Chojnicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla chojnickiej rodziny",
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

  districtsHeading: "Do których części Chojnic i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Kaszubska",
    "Bytowska",
    "Osiedle Kolejarz",
    "Charzykowy",
    "Nowe Miasto",
    "Angowice",
    "Lichnowy",
    "Ogrodowa",
  ],

  nearbyHeading: "Poza Chojnice też przyjadę",
  nearbyParagraphs: [
    "Człuchów, Brusy, Czersk i Debrzno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Człuchów", "Brusy", "Czersk", "Debrzno", "Tuchola", "Miastko"],

  about: blokOMnie("do Chojnic", "w Chojnicach i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chojnic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Chojnicach"),
    {
      question: "Zastanawiam się nad używanym Thermomixem. Co o tym sądzisz?",
      answer:
        "Zacznę od tego, że mam tu konflikt interesów — na używanym nie zarobię — więc nie powiem „nigdy”. Sprawdź, co zostaje z uprawnień przy zakupie od osoby prywatnej, i pytaj o historię sprzętu: godziny pracy, zalanie, wilgotną piwnicę, majsterkowanie. Najważniejsze są naczynie i nóż, bo to one się zużywają, a nie obudowa.",
    },
    {
      question: "Jak sprawdzić urządzenie przed zakupem od kogoś prywatnie?",
      answer:
        "Obejrzeć włączone, z gorącą wodą, i posłuchać, czy nic nie stuka. Jeśli sprzedający nie chce, żebyś uruchomiła urządzenie przed zapłatą, to jest jedyna informacja, jakiej potrzebujesz.",
    },
  ],

  geo: { lat: 53.6958, lng: 17.5572 },
};
