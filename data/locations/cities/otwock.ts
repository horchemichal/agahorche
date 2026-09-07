import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * OTWOCK — miasto drewnianej architektury zwanej świdermajerem: domów
 * z ozdobnymi werandami i gankami, budowanych z rozmachem i bez dwóch
 * takich samych.
 *
 * KĄT: „to mi nie pasuje do kuchni". Zarzut estetyczny, który pada
 * naprawdę często i którego nie traktuje poważnie żaden sprzedawca —
 * a bywa realnym powodem, dla którego sprzęt trafia do szafki.
 *
 * SEKCJA MA POTRAKTOWAĆ TEN ZARZUT SERIO:
 * — w kuchni urządzonej z pomysłem — starej, drewnianej, klimatycznej —
 *   nowoczesny sprzęt z ekranem bywa zgrzytem i nie ma sensu udawać,
 *   że tak nie jest,
 * — schowanie go do szafki „na co dzień" kończy się nieużywaniem,
 *   więc to nie jest rozwiązanie,
 * — rozsądne wyjścia są dwa i oba trzeba nazwać: znaleźć mu miejsce
 *   mniej eksponowane, ale nadal na blacie, albo pogodzić się z tym,
 *   że narzędzie robocze wygląda jak narzędzie robocze.
 *
 * TWARDE GRANICE:
 * — NIE PRZEKONUJĘ, ŻE TO JEST ŁADNE. To kwestia gustu, a spieranie się
 *   o gust z klientką jest bez sensu.
 * — ŻADNYCH OBIETNIC O WERSJACH KOLORYSTYCZNYCH, obudowach czy
 *   akcesoriach zmieniających wygląd — nie wiem, co jest dostępne,
 *   i nie wolno mi tego wymyślać.
 *
 * ROZGRANICZENIE. Ełk mówi o kuchni otwartej na salon (sprzęt widoczny
 * z kanapy), Będzin o małej kuchni, Gdynia o miejscu na akcesoria,
 * Tarnowskie Góry o nowej kuchni. Tutaj chodzi wyłącznie o ESTETYKĘ
 * i o zarzut „nie pasuje".
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Otwock jest znany z drewnianej architektury zwanej świdermajerem.
 */
export const OTWOCK: CityContent = {
  slug: "otwock",
  h1: "Thermomix Otwock – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Otwock — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Otwocku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Otwock — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Otwocku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Otwocka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Otwock i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — takiej, jaką macie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Otwocku – jak wygląda prezentacja?",
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
      id: "nie-pasuje-do-kuchni",
      heading: "Miasto drewnianych werand — i zarzut „to mi nie pasuje do kuchni”",
      paragraphs: [
        "Otwock zna się na tym, że dom może być urządzony z pomysłem: świdermajery z rzeźbionymi gankami i werandami budowano tak, żeby żaden nie był taki sam jak sąsiedni. Dlatego akurat tutaj napiszę o zarzucie, który pada częściej, niż sprzedawcy chcą przyznać, i który zwykle zbywa się machnięciem ręki: „to mi po prostu nie pasuje do kuchni”.",
        "Zacznę od przyznania racji. W kuchni urządzonej świadomie — w starym drewnianym domu, w kuchni z frontami w kolorze drewna, w takiej, do której ktoś dobierał klamki — nowoczesne urządzenie z ekranem potrafi być zgrzytem. To nie jest wymysł ani wymówka. To jest po prostu prawda i nie mam zamiaru przekonywać nikogo, że jest inaczej, bo o gust się nie dyskutuje.",
        "Powiem natomiast, dlaczego to ma znaczenie większe, niż się wydaje. Jeśli sprzęt Wam przeszkadza wizualnie, schowacie go — a schowany przestaje być używany, i to zwykle w ciągu kilku tygodni. Estetyka nie jest tu więc kaprysem, tylko czynnikiem, który decyduje o tym, czy zakup ma sens. Warto rozstrzygnąć to przed, a nie po.",
        "Rozsądne wyjścia są dwa i żadne z nich nie polega na chowaniu. Pierwsze: znaleźć mu miejsce na blacie, ale mniej eksponowane — w rogu, przy ścianie, poza główną osią widzenia, byle blisko gniazdka i z możliwością otwarcia pokrywy. W wielu kuchniach to wystarcza całkowicie.",
        "Drugie jest mniej wygodne, ale bywa uczciwsze: pogodzić się z tym, że narzędzie robocze wygląda jak narzędzie robocze. Tak samo jak czajnik, mikrofalówka i suszarka do naczyń, które też nie są ozdobą, a stoją. Kuchnia jest pomieszczeniem do pracy i część rzeczy w niej po prostu musi być widoczna.",
        "Nie obiecam Wam natomiast, że da się to jakoś przykryć, obudować albo dobrać w innym kolorze — nie wiem, co jest dostępne, a wymyślanie takich rzeczy skończyłoby się rozczarowaniem przy zamówieniu. Jeśli to dla Was ważne, zapytajcie mnie na spotkaniu, a sprawdzę i odpowiem konkretnie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Otwocku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli zależy Wam na tym, jak to będzie wyglądać w kuchni, powiedzcie od razu — na spotkaniu ustawimy urządzenie w kilku miejscach i po prostu zobaczycie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Otwocku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla otwockiej rodziny",
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

  districtsHeading: "Do których części Otwocka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Śródborów",
    "Świder",
    "Soplicowo",
    "Kresy",
    "Ługi",
    "Wólka Mlądzka",
    "Mlądz",
    "Jabłonna",
    "Teklin",
  ],

  nearbyHeading: "Poza Otwock też przyjadę",
  nearbyParagraphs: [
    "Józefów, Karczew, Celestynów i Wiązowna są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Józefów Mazowiecki", "Karczew", "Celestynów", "Wiązowna", "Warszawa", "Piaseczno"],

  about: blokOMnie("do Otwocka", "w Otwocku i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Otwocka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Otwocku"),
    {
      question: "Boję się, że to nie będzie pasować do mojej kuchni.",
      answer:
        "To uzasadniona obawa i nie będę Was przekonywać, że urządzenie jest ładne — o gust się nie dyskutuje. Ma to jednak praktyczne znaczenie: sprzęt, który przeszkadza wizualnie, ląduje w szafce, a schowany przestaje być używany. Warto więc na spotkaniu ustawić go w kilku miejscach i po prostu zobaczyć.",
    },
    {
      question: "Czy są inne wersje kolorystyczne albo obudowy?",
      answer:
        "Nie odpowiem z głowy, bo nie chcę wymyślić czegoś, co potem nie istnieje przy zamówieniu. Zapytajcie na spotkaniu — sprawdzę i odpowiem konkretnie.",
    },
  ],

  geo: { lat: 52.1057, lng: 21.2612 },
};
