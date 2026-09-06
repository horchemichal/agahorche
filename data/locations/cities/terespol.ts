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
 * TERESPOL — ostatnie polskie miasto przed przejściem granicznym na
 * Bugu, na trasie wschód–zachód. Bardzo małe, a jednocześnie przez cały
 * rok pełne ruchu: przejście drogowe, kolejowe i terminale towarowe
 * w okolicy.
 *
 * KĄT: „gdzie indziej taniej". W mieście, w którym granica jest widoczna
 * z okna, pytanie o tańszy zakup pada częściej i jest zadawane wprost.
 * Sekcja odpowiada na nie UCZCIWIE, bez straszenia i bez oczerniania
 * innych sprzedających: mówi, co dokładnie wiąże się z zakupem
 * u przedstawiciela, co warto sprawdzić przy urządzeniu z drugiej ręki,
 * i przyznaje, że używany sprzęt od uczciwej osoby jest normalną opcją.
 *
 * OSTROŻNOŚĆ: żadnych twierdzeń o cenach za granicą, o przepisach
 * celnych, o polityce gwarancyjnej producenta w konkretnych krajach.
 * Piszę wyłącznie o tym, co sama daję i co warto sprawdzić — bo tylko
 * za to mogę odpowiadać.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Terespol leży przy przejściu granicznym na Bugu i jest ostatnim
 *   polskim miastem na tej trasie,
 * — w okolicy działają terminale i przeładunek towarów,
 * — miasto jest bardzo małe, a ruch tranzytowy duży.
 *
 * CZEGO NIE MA: cen, przepisów celnych, porównań rynków, jakiejkolwiek
 * sugestii, że ktoś sprzedaje nieuczciwie.
 */
export const TERESPOL: CityContent = {
  slug: "terespol",
  h1: "Thermomix Terespol – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Terespol — prezentacja i cena",
  seoDescription:
    "Thermomix w Terespolu: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0%, gwarancja i serwis u oficjalnej przedstawicielki. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Terespol — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Terespolu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Terespola z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Koroszczyna, Małaszewicz, Neplów i okolicznych wsi.",

  highlights: highlightyStandardowe("Terespol i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Terespolu – jak wygląda prezentacja?",
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
      id: "gdzie-indziej-taniej",
      heading: "„A gdzie indziej pewnie taniej” — odpowiadam uczciwie",
      paragraphs: [
        "Terespol jest ostatnim polskim miastem przed przejściem i to widać w każdej rozmowie o zakupach. W miejscu, w którym granica jest częścią widoku z okna, pytanie „a nie taniej gdzie indziej?” pada częściej i jest zadawane wprost. Odpowiem więc równie wprost, bo to jest dobre pytanie.",
        "Nie będę nikogo straszyć ani sugerować, że inni sprzedają nieuczciwie. Powiem tylko, co dokładnie wiąże się z zakupem u przedstawiciela, żebyście mieli to czarno na białym i mogli porównać sami.",
        "Kupując u mnie, dostajecie fakturę i gwarancję producenta na swoje nazwisko, możliwość zgłoszenia urządzenia do serwisu — także moimi rękami, przez telefon — pierwsze uruchomienie i założenie konta z przepisami przy mnie, a potem kontakt do tej samej osoby przez lata. Cena i promocja są ogólnopolskie i ustala je producent, więc nie ma tu miejsca na targowanie się ani na to, żeby ktoś dostał gorzej.",
        "Jeśli rozważacie urządzenie z drugiej ręki, to jest normalna opcja i nie zamierzam nikogo od niej odwodzić — sama widzę używane sprzęty pracujące świetnie po latach. Warto tylko sprawdzić trzy rzeczy przed zapłatą: czy sprzedający ma dowód zakupu, jaki jest stan części, które się zużywają, i na jakich zasadach można zgłosić urządzenie do serwisu. Jeśli któraś z tych odpowiedzi brzmi „nie wiem”, to nie znaczy od razu, że coś jest nie tak — ale to jest ryzyko, które bierzecie na siebie i warto je świadomie policzyć.",
        "Możecie zresztą zrobić prościej: umówcie prezentację, zobaczcie urządzenie na żywo i dopiero potem decydujcie, gdzie i w jakiej formie je kupić. Spotkanie jest bezpłatne również wtedy, gdy kończy się takim wnioskiem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Terespolu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Do Terespola i na samą granicę jeżdżę planowo, razem z innymi spotkaniami na północy — proszę więc o termin z wyprzedzeniem.",
        "Jeśli ktoś jeszcze w okolicy chce zobaczyć urządzenie, powiedzcie od razu. Wtedy układam ten dzień wokół Was i termin robi się bliższy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Terespolu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla terespolskiej rodziny",
      paragraphs: [
        "W wielu tutejszych domach ktoś pracuje w rytmie, który nie ma nic wspólnego z ósmą rano — a obiad i tak musi być, i robi go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza.",
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

  districtsHeading: "Do których części miasta i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Osiedle Kolejowe",
    "Błotków",
    "Koroszczyn",
    "Małaszewicze",
    "Lebiedziew",
    "Neple",
    "Kobylany",
    "Michalków",
    "Kukuryki",
  ],

  nearbyHeading: "Poza Terespol też przyjadę",
  nearbyParagraphs: [
    "Biała Podlaska i Międzyrzec Podlaski są w zasięgu tego samego wyjazdu na północ — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Biała Podlaska", "Międzyrzec Podlaski", "Radzyń Podlaski", "Parczew", "Włodawa"],

  about: blokOMnie("do Terespola", "w Terespolu i przy granicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy naprawdę przyjedziesz aż na granicę i bez dopłaty?",
      answer:
        "Tak, dojazd jest bezpłatny niezależnie od odległości. Proszę tylko o umówienie terminu z wyprzedzeniem, bo na północ województwa jeżdżę planowo, a nie z dnia na dzień.",
    },
    ...faqWspolne("w Terespolu"),
    {
      question: "Co dokładnie dostaję, kupując u przedstawicielki?",
      answer:
        "Fakturę i gwarancję producenta na swoje nazwisko, pierwsze uruchomienie i założenie konta z przepisami przy mnie, możliwość zgłoszenia urządzenia do serwisu przeze mnie oraz stały kontakt telefoniczny — także po latach. Cena i promocje są ogólnopolskie, ustalane przez producenta.",
    },
    {
      question: "Zastanawiam się nad kupnem używanego. Odradzasz?",
      answer:
        "Nie odradzam — używane urządzenia potrafią pracować latami. Sprawdź tylko trzy rzeczy: czy sprzedający ma dowód zakupu, jaki jest stan części zużywających się i na jakich zasadach zgłosisz sprzęt do serwisu. To ryzyko, które bierzesz na siebie, i warto je policzyć świadomie.",
    },
  ],

  geo: { lat: 52.0744, lng: 23.6203 },
};
