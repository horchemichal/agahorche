import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * PODDĘBICE — gmina miejsko-wiejska, siedziba powiatu
 * poddębickiego. MIASTO 6 720 mieszkańców, GMINA 14 470
 * (31.12.2024, GUS). Brief mówił 7 500 — zawyżone.
 *
 * PRAWA MIEJSKIE — ZŁOŻONA HISTORIA: pierwsza wzmianka 1388;
 * nadanie prywatne rodu Chebdów pod koniec XIV w.; FORMALNIE
 * 1822 staraniem Klemensa Zakrzewskiego; utrata 1870;
 * przywrócenie 1934. W TEKŚCIE PISZĘ o 1822 jako o dacie
 * formalnej i wspominam o wcześniejszym nadaniu prywatnym —
 * samo „1400" bez kontekstu byłoby błędem.
 *
 * ⚠️ OBALONE, NAJWAŻNIEJSZE: PODDĘBICE NIE SĄ UZDROWISKIEM.
 * Kompleks jest opisywany jako centrum wodolecznictwa
 * i rekreacji, ale nigdzie nie ma statusu uzdrowiska
 * w rozumieniu ustawy. NIE PISZĘ „uzdrowisko", „sanatorium",
 * „kuracja". Uzdrowiskiem jest sąsiedni UNIEJÓW w tym samym
 * powiecie — i to jest źródło pomyłki.
 * OBALONE: termy otwarto 1 MAJA 2022 r., a nie „od dawna" —
 * ciepłownia geotermalna działa od 2012 r., ale baseny są
 * od 2022.
 *
 * ODWIERT: 2 101 m, woda 71–72°C, mineralizacja poniżej 0,5 g/l.
 * PODAJĘ TYLKO TEMPERATURĘ I GŁĘBOKOŚĆ jako fakt geologiczny.
 *
 * FAKT OSIOWY DLA KĄTA: OGRÓD ZMYSŁÓW przy ul. Mickiewicza —
 * pięć stref (orientacja, słuch, wzrok, węch, dotyk):
 * megakalejdoskop, gniazda muzyczne, ściana wodna, tunel
 * zapachowy, ogród różany, ścieżki sensoryczne. WSTĘP BEZPŁATNY.
 *
 * PRODUKT Z LISTY PRODUKTÓW TRADYCYJNYCH: POWIDŁA
 * Z PAPIERÓWEK Z KOBYLNIK, wpis 25 września 2015 r.; Kobylniki
 * leżą w gminie Poddębice. WYMIENIAM JEDNYM ZDANIEM — powidła,
 * dżemy i jabłka mają w serwisie własne strony.
 *
 * KĄT: ZMYSŁY — jak poznać, że jest gotowe, bez zaglądania
 * do przepisu. Kąt bierze się wprost z Ogrodu Zmysłów.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie odbiera nam jedną rzecz, o której nikt nie
 *   mówi: ODZWYCZAJA OD PATRZENIA I PRÓBOWANIA,
 * — bo skoro program się skończył, zakładamy, że jest gotowe,
 * — że zamknięta pokrywka realnie utrudnia zaglądanie i wąchanie
 *   — i to jest wada, nie zaleta,
 * — co robić: próbować mimo wszystko, przed podaniem, zawsze,
 * — że każdy zmysł mówi w kuchni co innego: wzrok o kolorze
 *   i gęstości, dotyk łyżki o konsystencji, smak o przyprawieniu,
 * — że zapachu w tym urządzeniu jest MNIEJ niż w garnku i to
 *   też trzeba wiedzieć — pod zamknięciem nie czuć, że coś się
 *   dzieje,
 * — i ODMOWA: nie podam żadnych czasów ani „oznak gotowości"
 *   dla mięsa czy drobiu — to bezpieczeństwo żywności.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH „SPOSOBÓW NA SPRAWDZENIE, CZY MIĘSO JEST GOTOWE".
 *   To bezpieczeństwo żywności. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH, w szczególności ŻADNYCH
 *   O WODACH TERMALNYCH. Nie piszę, że woda coś leczy, wspomaga
 *   ani na coś działa.
 * — NIE UŻYWAM SŁÓW „uzdrowisko", „sanatorium", „lecznicze",
 *   „kuracja" w odniesieniu do Poddębic.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH CEN BILETÓW ani godzin otwarcia term.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Zapach i para w mieszkaniu
 * w bloku" (inne miasto) dotyczy tego, co zapach robi
 * w MIESZKANIU — wentylacji i sąsiadów. Tutaj zapach jest
 * jednym z pięciu zmysłów i chodzi o ROZPOZNAWANIE STANU
 * POTRAWY. „Jak to wygląda na zdjęciu, a jak na talerzu"
 * (Frampol) dotyczy rozczarowania wyglądem względem reklamy.
 * „Nieprecyzyjny język przepisów" (Pelplin) dotyczy zapisu
 * i wagi. Tutaj chodzi o MOMENT, w którym decydujemy,
 * że danie jest skończone.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Poddębice są uzdrowiskiem. NIE SĄ.
 * — NIE PRZYPISUJĘ wodzie żadnego działania.
 * — NIE PODAJĘ nazwy największego pracodawcy — nie ustalono.
 * — NIE PODAJĘ listy sołectw — BIP niedostępny.
 * — NIE PODAJĘ numeru edycji festiwalu GEOTermalia — źródło
 *   jest wewnętrznie sprzeczne.
 * — NIE PISZĘ, że zakład produkujący izolacje jest
 *   w Poddębicach — stoi w gminie Uniejów.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 6 720, gmina 14 470 mieszkańców (31.12.2024, GUS),
 * — pierwsza wzmianka 1388 r.; prawa miejskie formalnie
 *   od 1822 r., utracone w 1870, przywrócone w 1934,
 * — odwiert geotermalny o głębokości 2 101 m, woda 71–72°C;
 *   ciepłownia geotermalna od 2012 r., baseny otwarte
 *   1 maja 2022 r.,
 * — Ogród Zmysłów przy ul. Mickiewicza: pięć stref —
 *   orientacji, słuchu, wzroku, węchu i dotyku; wstęp bezpłatny,
 * — pałac Grudzińskich z ok. 1610 r. z wieżą i loggiami;
 *   kościół św. Katarzyny z 1610 r.,
 * — miasto leży w dolinie Neru, ok. 35 km na zachód od Łodzi,
 * — powidła z papierówek z Kobylnik na Liście Produktów
 *   Tradycyjnych od 25 września 2015 r.,
 * — rezerwat „Dąbrowa Napoleonów" na terenie gminy.
 */
export const PODDEBICE: CityContent = {
  slug: "poddebice",
  h1: "Thermomix Poddębice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Poddębice (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Poddębicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Poddębice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Poddębicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Poddębic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Poddębice i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Program się skończył. To jeszcze nie znaczy, że jest gotowe.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Poddębicach – jak wygląda prezentacja?",
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
      id: "zmysly",
      heading: "Ogród Zmysłów przy Mickiewicza — czyli jak poznać, że jest gotowe",
      paragraphs: [
        "W Poddębicach jest miejsce, którego nie ma prawie nigdzie indziej: Ogród Zmysłów przy ulicy Mickiewicza, podzielony na pięć stref — orientacji, słuchu, wzroku, węchu i dotyku. Megakalejdoskop, gniazda muzyczne, ściana wodna, tunel zapachowy, ścieżki sensoryczne. Wstęp jest bezpłatny. Cały pomysł polega na tym, żeby przez godzinę używać zmysłów osobno i zauważyć, ile każdy z nich mówi.",
        "W kuchni jest dokładnie odwrotnie: używamy ich wszystkich naraz i nie zauważamy, kiedy przestajemy.",
        "I to jest wada tego urządzenia, o której nie usłyszycie na prezentacji — a ja uważam, że powinno się o niej mówić na początku, nie na końcu. Thermomix odzwyczaja od patrzenia i próbowania.",
        "Mechanizm jest prosty. Program się skończył, urządzenie zapiszczało, więc zakładamy, że jest gotowe. Przekładamy na talerz i dopiero przy stole okazuje się, że sos jest za rzadki, zupa niedoprawiona, a ryż o dwie minuty za twardy. W garnku takie rzeczy wyłapuje się po drodze, bo w garnek się zagląda. Tu pokrywka jest zamknięta, a przez nią nie widać i nie czuć.",
        "Zapachu też jest mniej, i to jest osobna sprawa. W garnku człowiek wie, że coś się dzieje, bo pachnie na całe mieszkanie. Tutaj nie pachnie prawie wcale, dopóki się nie otworzy — więc znika ten cichy sygnał, który przez lata mówił nam, na jakim etapie jest obiad.",
        "Rozwiązanie jest nudne i skuteczne: próbować mimo wszystko. Zawsze, przed podaniem, łyżeczką. To zajmuje pięć sekund i ratuje więcej obiadów niż jakakolwiek funkcja.",
        "Warto przy tym pamiętać, że każdy zmysł mówi co innego. Wzrok mówi o kolorze i o gęstości — czy sos oblewa łyżkę, czy z niej spływa. Dotyk łyżki mówi o konsystencji: czy ziemniak stawia opór, czy się rozpada. Smak mówi o przyprawieniu i tylko o nim — a przyprawienie jest jedyną rzeczą, której żadne urządzenie za nikogo nie ustali, bo pomidory mają różną kwasowość, a ser różną słoność.",
        "I granica, przy której nie ustąpię: nie podam Wam żadnych „oznak gotowości” dla mięsa, drobiu ani ryby. Ani koloru soku, ani sprężystości, ani żadnego domowego sposobu. To jest bezpieczeństwo żywności, ryzyko jest realne, a ja sprzedaję urządzenie kuchenne. Po tę wiedzę trzeba pójść do właściwego źródła.",
        "Na marginesie, bo o Poddębicach krąży pomyłka: to nie jest uzdrowisko. Działa tu centrum wodolecznictwa i rekreacji z basenami otwartymi w maju 2022 roku, zasilane wodą z odwiertu o głębokości ponad dwóch kilometrów — ale statusu uzdrowiska ma w tym powiecie sąsiedni Uniejów, nie Poddębice. Ja o wodzie i tak nic więcej nie napiszę, bo o zdrowiu się nie wypowiadam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Poddębicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu będziemy próbować w trakcie, a nie na końcu — chcę, żebyście zobaczyli, w którym momencie danie jest jeszcze za rzadkie i co się z nim wtedy robi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Poddębicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla poddębickiej rodziny",
      paragraphs: [
        "Samo miasto Poddębice liczy niecałe siedem tysięcy mieszkańców, a cała gmina ponad czternaście. Pierwsza wzmianka pochodzi z 1388 roku; prawa miejskie miasto uzyskało formalnie w 1822 roku, choć wcześniej istniało nadanie prywatne dawnych właścicieli — potem prawa utraciło w 1870 i odzyskało w 1934. Leży w dolinie Neru, około trzydziestu pięciu kilometrów na zachód od Łodzi. Z zabytków zachował się pałac Grudzińskich z około 1610 roku, z charakterystyczną wieżą i arkadowymi loggiami, oraz kościół świętej Katarzyny z tego samego czasu. Z odwiertu o głębokości ponad dwóch kilometrów wydobywa się tu wodę o temperaturze przekraczającej siedemdziesiąt stopni — ciepłownia działa od 2012 roku, a baseny otwarto 1 maja 2022. Miasto ma też bezpłatny Ogród Zmysłów, a z gminnej wsi Kobylniki pochodzą powidła z papierówek, wpisane na Listę Produktów Tradycyjnych we wrześniu 2015 roku.",
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

  districtsHeading: "Do których części gminy Poddębice dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy, w tym do Kobylnik. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Poddębice też przyjadę",
  nearbyParagraphs: [
    "Uniejów, Łęczyca, Zgierz, Wartkowice, Szadek, Łódź i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Uniejów", "Łęczyca", "Zgierz", "Szadek", "Łódź"],

  about: blokOMnie("do Poddębic", "w Poddębicach i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Poddębic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Poddębice w łódzkiem, siedzibę powiatu poddębickiego, a nie o wieś Poddębice w kujawsko-pomorskim ani o Dębicę na Podkarpaciu.",
    },
    ...faqWspolne("w Poddębicach"),
    {
      question: "Skąd wiadomo, że danie jest gotowe?",
      answer:
        "Nie z tego, że program się skończył. To najczęstszy błąd przy tym sprzęcie: pokrywka jest zamknięta, więc nie widać i nie czuć, a my zakładamy, że skoro zapiszczało, to koniec. Trzeba spróbować łyżeczką przed podaniem — pięć sekund, a ratuje więcej obiadów niż jakakolwiek funkcja.",
    },
    {
      question: "Czy w Thermomiksie mniej pachnie?",
      answer:
        "Tak, i to jest realna zmiana. W garnku człowiek wie, że coś się dzieje, bo pachnie na całe mieszkanie; tutaj nie pachnie prawie wcale, dopóki się nie otworzy. Znika przez to cichy sygnał, który przez lata mówił, na jakim etapie jest obiad.",
    },
    {
      question: "Po czym poznać, że mięso jest już dobre?",
      answer:
        "Tego nie podam — ani koloru soku, ani sprężystości, ani żadnego domowego sposobu. To bezpieczeństwo żywności, ryzyko jest realne i nie mam do tego kompetencji. I dla porządku: Poddębice nie są uzdrowiskiem, a o wodzie termalnej nie napiszę nic poza tym, jak jest głęboko i jak gorąca — o zdrowiu się nie wypowiadam.",
    },
  ],

  geo: { lat: 51.8933, lng: 18.9572 },
};
