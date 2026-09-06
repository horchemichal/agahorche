import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * JASTRZĘBIE-ZDRÓJ — miasto zbudowane w jednej dekadzie, w jednym celu.
 * Do lat 60. było uzdrowiskiem („Zdrój" w nazwie nie jest ozdobą), potem
 * powstały kopalnie i wielkie osiedla dla ściągniętych do pracy ludzi.
 * Miasto nie ma starówki, bo nigdy jej nie miało.
 *
 * KĄT: to jest miasto, w którym cała fala mieszkańców wprowadziła się
 * w tym samym czasie, w tym samym wieku, do prawie identycznych mieszkań.
 * Dziś ta sama fala jest o czterdzieści lat starsza, a dzieci wyjechały —
 * więc bardzo dużo tutejszych kuchni gotuje dla DWÓCH OSÓB w mieszkaniu
 * urządzonym dla czterech. To jedyne miejsce w tej fali, gdzie uczciwie
 * odpowiadamy na zarzut „nie opłaca mi się, gotuję dla siebie".
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Jastrzębie-Zdrój było uzdrowiskiem; funkcja ta zanikła po rozwoju
 *   górnictwa w drugiej połowie XX wieku,
 * — miasto rozbudowano na wielką skalę w latach 60. i 70. XX wieku
 *   w związku z budową kopalń Rybnickiego Okręgu Węglowego,
 * — w Jastrzębiu podpisano w 1980 roku Porozumienie jastrzębskie, jedno
 *   z porozumień sierpniowych,
 * — miasto leży przy granicy z Czechami, w subregionie zachodnim,
 * — dzielnice takie jak Ruptawa, Moszczenica, Szeroka czy Bzie były
 *   wcześniej samodzielnymi wsiami.
 *
 * CZEGO NIE MA: danych demograficznych podanych jako liczby, statystyk
 * zatrudnienia w górnictwie, twierdzeń o dochodach mieszkańców.
 */
export const JASTRZEBIE_ZDROJ: CityContent = {
  slug: "jastrzebie-zdroj",
  h1: "Thermomix Jastrzębie-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Jastrzębie-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Jastrzębiu-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie osiedla. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jastrzębie-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jastrzębiu. Prezentacja bezpłatna, terminy też dla pracujących zmianowo.",

  lead:
    "Przyjeżdżam do Jastrzębia-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Zdroju, Arki Bożka, Przyjaźni, Chrobrego czy w Ruptawie. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("całe Jastrzębie, wszystkie osiedla"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jastrzębiu – jak wygląda prezentacja?",
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
      id: "dla-dwoch-osob",
      heading: "„Nie opłaca mi się, gotuję dla dwojga” — uczciwa odpowiedź",
      paragraphs: [
        "Jastrzębie zbudowano w jednej dekadzie i zasiedlono jedną falą — młodzi ludzie ściągnięci do pracy wprowadzali się w tym samym czasie, w tym samym wieku, do prawie identycznych mieszkań. Czterdzieści lat później ta sama fala wciąż tu mieszka, tylko dzieci już wyjechały. Bardzo wiele tutejszych kuchni gotuje dziś dla dwóch osób w mieszkaniu urządzonym dla czterech.",
        "I stąd zdanie, które słyszę w Jastrzębiu częściej niż gdziekolwiek: „nie opłaca mi się, gotuję dla siebie”. To sensowny zarzut i nie będę udawać, że go nie ma. Odpowiedź jest taka: przy gotowaniu dla dwojga zmienia się to, co jest zaletą. Nie oszczędność czasu przy dużych porcjach, bo tych porcji nie ma — tylko to, że wraca sens gotowania czegokolwiek, gdy nie trzeba przy tym stać, a po zupie nie zostaje garnek, blender i sitko do umycia dla dwóch talerzy.",
        "Bardzo praktycznie liczą się dwie rzeczy. Małe porcje da się zrobić bez ceregieli — pojedyncza zupa, sos, deser na dwie osoby. I gotowanie na parze, gdy ktoś w domu musi jeść lżej: warzywa i ryba z ustawioną temperaturą, bez pilnowania i bez trzeciego garnka.",
        "Ale jeśli po rozmowie wyjdzie, że gotujecie raz dziennie coś prostego i naprawdę nic Wam to nie zmieni, powiem to wprost. Wolę stracić sprzedaż niż sprzedać urządzenie, które za pół roku stoi na blacie i wyrzuca komuś, że go nie używa.",
      ],
    },
    {
      id: "zmiany",
      heading: "Praca zmianowa i obiad, który ma poczekać",
      paragraphs: [
        "W wielu jastrzębskich domach ktoś pracuje na zmiany — a to znaczy trzy różne pory posiłku i osobę, która gotuje, choć sama zje dopiero za kilka godzin.",
        "Thermomix nadaje się do tego, bo nie wymaga obecności. Danie może powstać wcześniej i czekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. Dla kogoś, kto wraca po nocce, różnica między odgrzanym a wysuszonym obiadem jest bardzo realna.",
        "Przy umawianiu działa to tak samo: umawiam się przed południem w dni robocze, wieczorami i w weekendy. Powiedz, kiedy jesteś w domu, a nie kiedy jest „normalna pora”.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jastrzębiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj osiedle albo dzielnicę. Ruptawa i Bzie to inny kierunek niż osiedla w centrum, a od tego zależy tylko godzina spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jastrzębiu-Zdroju"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jastrzębskiej rodziny",
      paragraphs: [
        "Tam, gdzie w domu są jeszcze dzieci, wąskim gardłem jest zwykle nie brak pomysłu, tylko brak czasu w konkretnym oknie między pracą a wieczorem.",
        "Thermomix pomaga tu przez to, że gotuje bez pilnowania. Danie może powstać wcześniej i poczekać, a wszystko dzieje się w jednym naczyniu — po zupie nie zostaje stos garnków.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których dzielnic Jastrzębia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do dawnych wsi na obrzeżach.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Zdrój",
    "Górne",
    "Arki Bożka",
    "Przyjaźń",
    "Chrobrego",
    "Zofiówka",
    "Pionierów",
    "Barbary",
    "Staszica",
    "Ruptawa",
    "Cisówka",
    "Moszczenica",
    "Szeroka",
    "Bzie",
    "Skrzeczkowice",
    "Borynia",
  ],

  nearbyHeading: "Poza Jastrzębie też przyjadę",
  nearbyParagraphs: [
    "Żory, Wodzisław Śląski, Rybnik, Pawłowice i Mszana są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Żory",
    "Wodzisław Śląski",
    "Rybnik",
    "Pawłowice",
    "Mszana",
    "Pszczyna",
    "Racibórz",
  ],

  about: blokOMnie("do Jastrzębia", "w Jastrzębiu i całym subregionie zachodnim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jastrzębia-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Jastrzębiu-Zdroju"),
    {
      question: "Gotuję tylko dla siebie i męża — czy to ma sens?",
      answer:
        "Bywa, że ma, i bywa, że nie — zależy, jak gotujecie. Przy dwóch osobach zaletą nie jest oszczędność czasu na dużych porcjach, tylko to, że nie trzeba stać przy garnku i że po zupie nie ma trzech naczyń do umycia. Powiem Ci szczerze na miejscu, po zobaczeniu, co realnie jecie w tygodniu — a jeśli uznam, że nic Wam to nie zmieni, też to powiem.",
    },
    {
      question: "Pracuję na zmiany — czy umówisz się przed południem?",
      answer:
        "Tak i robię to często. Powiedz przy ustalaniu terminu, kiedy realnie jesteś w domu, a dopasuję godzinę.",
    },
  ],

  geo: { lat: 49.9553, lng: 18.5732 },
};
