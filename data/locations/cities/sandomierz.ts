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
 * SANDOMIERZ — jedno z najstarszych miast w Polsce, na lessowej skarpie
 * nad Wisłą. Zachowany układ Starego Miasta z rynkiem, ratuszem, Bramą
 * Opatowską, katedrą i zamkiem; pod miastem podziemna trasa w dawnych
 * piwnicach kupieckich.
 *
 * KĄT ODRZUCONY I DLACZEGO. Sady. To najbardziej oczywisty temat dla
 * Sandomierza i właśnie dlatego go tu nie ma — o wrześniu, koszu owoców
 * i przetworach napisałam już przy Nowym Sączu, Jaśle, Lublińcu, Łąckiem
 * i Łukowicy. Piąta wersja tego samego akapitu byłaby dokładnie tym,
 * co zarzucam konkurencji.
 *
 * KĄT WYBRANY: koniec województwa. Sandomierz leży w miejscu, w którym
 * schodzą się trzy województwa — świętokrzyskie, podkarpackie i lubelskie
 * — a przez Wisłę patrzy na Tarnobrzeg. Dla mieszkańca oznacza to rzecz,
 * której nie ma w miastach leżących w środku regionu: NIC NIE MIEŚCI SIĘ
 * W GRANICACH. Praca, szpital, szkoła, rodzina i zakupy rozkładają się
 * na trzy strony, a dzień układa się w pętlę przez kilka miejscowości
 * zamiast w prostą trasę dom–praca–dom.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Sandomierz leży nad Wisłą, na lessowej skarpie, w południowo-wschodnim
 *   krańcu województwa świętokrzyskiego,
 * — po drugiej stronie Wisły leży Tarnobrzeg (województwo podkarpackie),
 *   a granica lubelskiego biegnie tuż na wschód od miasta,
 * — zachował się układ Starego Miasta z rynkiem, ratuszem, Bramą Opatowską,
 *   katedrą i zamkiem,
 * — pod miastem działa podziemna trasa turystyczna w dawnych piwnicach,
 * — miasto jest znane jako plener filmowy i przyjmuje gości cały rok,
 * — dzielnice: Stare Miasto, Śródmieście, Nadbrzezie, Mokoszyn, Chwałki,
 *   Kamień Plebański, Gołębice, Ostrówek, Krakówka, Zarzekowice.
 *
 * CZEGO NIE MA: czasów przejazdu w minutach, liczby turystów, danych
 * o dojazdach do pracy, nazw zakładów.
 */
export const SANDOMIERZ: CityContent = {
  slug: "sandomierz",
  h1: "Thermomix Sandomierz – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Sandomierz — prezentacja i cena",
  seoDescription:
    "Thermomix w Sandomierzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sandomierz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sandomierzu. Prezentacja i dojazd bezpłatne, termin pod Wasz grafik.",

  lead:
    "Przyjeżdżam do Sandomierza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, od Starego Miasta po Nadbrzezie i Mokoszyn.",

  highlights: highlightyStandardowe("Sandomierz i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sandomierzu – jak wygląda prezentacja?",
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
      id: "koniec-wojewodztwa",
      heading: "Miasto, na którym kończy się województwo",
      paragraphs: [
        "Sandomierz leży w miejscu, w którym schodzą się trzy województwa. Za Wisłą jest już podkarpackie i Tarnobrzeg, kawałek na wschód zaczyna się lubelskie, a świętokrzyskie kończy się tutaj. Na mapie wygląda to niewinnie. W codzienności robi konkretną różnicę.",
        "W mieście położonym w środku regionu wszystko jest po jednej stronie: praca, szkoła, szpital, sklep, rodzina. Tutaj nie jest. Jedno bywa za rzeką, drugie w innym powiecie, trzecie w województwie, w którym nie jesteście zameldowani. Dzień nie układa się więc w prostą trasę dom–praca–dom, tylko w pętlę przez kilka miejscowości, a jej długość zależy od tego, co akurat trzeba załatwić.",
        "Kuchennie wychodzi z tego jedna rzecz i warto ją nazwać wprost: godzina powrotu nie jest tu wielkością, na której można cokolwiek oprzeć. Nie chodzi o to, że wraca się późno — chodzi o to, że nie wiadomo. A na czymś, czego nie wiadomo, nie da się zaplanować obiadu o siedemnastej.",
        "Sposób, który przy takim układzie realnie działa, jest banalnie prosty: przesunąć gotowanie tam, gdzie akurat jest czas. Rano, poprzedniego wieczoru, w niedzielę. Urządzenie pomaga o tyle, że gotuje bez pilnowania i w jednym naczyniu, więc przygotowanie czegoś z wyprzedzeniem przestaje być osobnym projektem na dwie godziny. A odgrzewanie na parze sprawia, że to, co czeka, nadal jest obiadem, a nie karą za spóźnienie.",
      ],
      links: [
        { href: "/thermomix/tarnobrzeg", label: "Thermomix Tarnobrzeg" },
        { href: "/thermomix/opatow", label: "Thermomix Opatów" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sandomierzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i kilka pasujących terminów. Jeśli mieszkacie na Starym Mieście, uprzedźcie o dojeździe i parkowaniu — to zmienia tylko to, o której zapukam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sandomierzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sandomierskiej rodziny",
      paragraphs: [
        "Gdy dzień rozkłada się na kilka miejscowości, obiad rzadko powstaje po powrocie. Częściej musi być gotowy wcześniej i doczekać — a robi go zwykle ta sama osoba, niezależnie od tego, kto wrócił pierwszy.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać rano albo poprzedniego wieczoru, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których dzielnic Sandomierza dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — łącznie ze Starym Miastem i z Nadbrzeziem po drugiej stronie Wisły.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Śródmieście",
    "Nadbrzezie",
    "Mokoszyn",
    "Chwałki",
    "Kamień Plebański",
    "Gołębice",
    "Ostrówek",
    "Krakówka",
    "Zarzekowice",
  ],

  nearbyHeading: "Poza Sandomierz też przyjadę",
  nearbyParagraphs: [
    "Opatów, Zawichost, Koprzywnica, Klimontów, Ożarów, a za rzeką Tarnobrzeg — wszystko w zasięgu jednej trasy i wszędzie dojazd bezpłatny.",
  ],
  nearbyTowns: [
    "Opatów",
    "Zawichost",
    "Koprzywnica",
    "Klimontów",
    "Ożarów",
    "Tarnobrzeg",
    "Stalowa Wola",
  ],

  about: blokOMnie("do Sandomierza", "w Sandomierzu i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sandomierza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych gmin, także za Wisłę. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sandomierzu"),
    {
      question: "Mieszkam po drugiej stronie województwa — w podkarpackim albo lubelskim. Przyjedziesz?",
      answer:
        "Tak. Granica województwa nie jest dla mnie żadną granicą — jeżdżę po świętokrzyskim, podkarpackim i dalej. Powiedz przy umawianiu, gdzie dokładnie mieszkasz, a ustalimy termin, który mi się mieści w trasie.",
    },
    {
      question: "Nigdy nie wiem, o której wrócę — czy da się w ogóle umówić?",
      answer:
        "Da się i nie musisz podawać jednej godziny. Podaj przedział albo dwa różne dni, a ja się dopasuję. Wolę przełożyć spotkanie o godzinę niż kazać Ci gnać do domu z drugiego końca powiatu.",
    },
  ],

  geo: { lat: 50.6797, lng: 21.7492 },
};
