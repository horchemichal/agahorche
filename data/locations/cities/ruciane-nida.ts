import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * RUCIANE-NIDA — gmina miejsko-wiejska w powiecie piskim.
 * MIASTO 4 047, GMINA 7 278 (GUS 31.12.2024).
 * Gmina 358 km², gęstość 21 os./km² — jedna z najrzadziej
 * zaludnionych w Polsce. LICZBY SOŁECTW NIE PODAJĘ.
 *
 * ⚠ PRAWA MIEJSKIE 1 STYCZNIA 1966 r. — jedno z najmłodszych
 * miast w Polsce. Miasto POWSTAŁO Z POŁĄCZENIA Rucianego,
 * Nidy i kilku sąsiednich osad; połączenie i nadanie praw to
 * JEDNO ZDARZENIE administracyjne, nie dwa. Ludność w chwili
 * nadania: ok. 3 050 osób.
 * ⚠ AKTU PRAWNEGO NIE PODAJĘ — nie potwierdzono numeru
 * rozporządzenia ani pozycji Dziennika Ustaw. Piszę tylko
 * „prawa miejskie z dniem 1 stycznia 1966 r.".
 * ⚠ LICZBY POŁĄCZONYCH OSAD NIE PODAJĘ — źródła podają trzy
 * albo siedem. Piszę „i kilku sąsiednich osad".
 * NIDA — założona 1699 r. Ruciane — starsza osada leśna.
 * PRZYNALEŻNOŚĆ: MAZURY.
 * OBALONE: „stare mazurskie miasteczko" — miasto ma prawa
 * od 1966 r., nie ma zamku, murów ani lokacji.
 * OBALONE: „nazwa od rzeki Nidy" — rzeka Nida płynie
 * w świętokrzyskiem, 500 km stąd. Nida to nazwa osady z 1699.
 *
 * JEZIORO NIDZKIE — główny akwen miasta. KANAŁ NIDZKI ze
 * ŚLUZĄ GUZIANKA. ROKU BUDOWY ŚLUZY NIE PODAJĘ.
 * SZLAK WODNY Giżycko–Mikołajki–Ruciane–Pisz otwarty 1898 r.
 * TARTAK z końca XIX w. — należał do największych zakładów
 * tego typu na Pojezierzu Mazurskim.
 * MAZURSKI PARK KRAJOBRAZOWY — utworzony 1977 r., obejmuje
 * m.in. gminę Ruciane-Nida; rezerwaty w parku: KRUTYNIA
 * (969,33 ha) i PIERWOS (605,48 ha), utworzone w latach 80.
 * ⚠ NIE PISZĘ o rezerwacie „Jezioro Nidzkie" — nie
 * potwierdzono daty ani powierzchni.
 *
 * KĄT: ROZMRAŻANIE — czego urządzenie nie zrobi i co robić
 * zamiast tego. Kąt od krainy jezior, w której wszystko
 * zamarza i odmarza w swoim tempie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że rozmrażanie to jedna z rzeczy, w których urządzenie
 *   pomaga najmniej, i że warto to wiedzieć przed zakupem,
 * — dlaczego: bo grzeje od ścianek, a bryła jest w środku —
 *   zewnętrzna warstwa zaczyna się gotować, zanim środek
 *   przestanie być lodem,
 * — że zamrożona bryła może też uszkodzić nóż, o czym
 *   pisałam osobno,
 * — co działa: rozmrażanie w lodówce, z wyprzedzeniem,
 * — że najważniejsza decyzja zapada nie przy rozmrażaniu,
 *   tylko przy MROŻENIU: w płaskich, cienkich porcjach
 *   zamiast w kostce, i w porcjach na jedno użycie,
 * — że część rzeczy w ogóle nie wymaga rozmrażania i idzie
 *   prosto do gotowania: warzywa do zupy, owoce do musu,
 *   zioła,
 * — i ODMOWA: nie doradzam nic o rozmrażaniu mięsa, ryb
 *   i o ponownym zamrażaniu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD o rozmrażaniu mięsa i ryb, o czasie
 *   rozmrażania w temperaturze pokojowej ani o ponownym
 *   zamrażaniu. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ aktu prawnego z 1966 r. ani liczby osad.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckich nazw obu miejscowości ani nie
 *   piszę o zmianie nazw w 1938 r. — to element germanizacji
 *   nazewnictwa mazurskiego, temat obciążony.
 * — ZERO roku 1945 i wysiedleń ludności mazurskiej.
 * — ZERO obiektów militarnych w okolicy.
 * — NIE ROBIĘ TŁA z wyludniania (−16,4% w latach 2002–2024).
 * — NIE PISZĘ o tym, skąd wzięli się mieszkańcy miasta
 *   powstałego w 1966 r.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowanie z mrożonek"
 * dotyczy produktu kupionego jako mrożonka. „Gotowanie
 * na zapas i odkładanie porcji do zamrażarki" dotyczy
 * odkładania własnych porcji. „Twarde rzeczy" (Nidzica)
 * dotyczą granicy wytrzymałości noża. Tutaj chodzi
 * o SAM PROCES ROZMRAŻANIA i o to, że urządzenie w nim
 * nie pomaga.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ numeru aktu nadającego prawa miejskie.
 * — NIE PODAJĘ liczby połączonych osad.
 * — NIE PODAJĘ roku budowy śluzy Guzianka.
 * — NIE PISZĘ o rezerwacie Jezioro Nidzkie.
 * — NIE PODAJĘ jezior Bełdany i Guzianka jako leżących
 *   w gminie — nie potwierdzono.
 * — NIE PODAJĘ wydarzeń cyklicznych ani znanych osób —
 *   żadnych nie potwierdzono.
 * — NIE PRZYPISUJĘ miastu produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Nidy z rzeką Nidą w świętokrzyskiem, z Nidą
 *   na Mierzei Kurońskiej ani z Nidzicą. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 4 047, gmina 7 278 mieszkańców; gmina ma 358 km²
 *   i jest jedną z najrzadziej zaludnionych w Polsce,
 * — miasto uzyskało prawa miejskie 1 stycznia 1966 r.,
 *   powstając z połączenia Rucianego, Nidy i kilku sąsiednich
 *   osad; mieszkało w nim wtedy około trzech tysięcy osób,
 * — Nidę założono w 1699 r.,
 * — miasto leży nad Jeziorem Nidzkim; jest tu Kanał Nidzki
 *   ze śluzą Guzianka,
 * — szlak wodny z Giżycka przez Mikołajki i Ruciane do Pisza
 *   otwarto w 1898 r.,
 * — tartak z końca XIX w. należał do największych zakładów
 *   tego typu na Pojezierzu Mazurskim,
 * — gmina leży w Mazurskim Parku Krajobrazowym, utworzonym
 *   w 1977 r.; w parku są rezerwaty Krutynia i Pierwos.
 */
export const RUCIANE_NIDA: CityContent = {
  slug: "ruciane-nida",
  h1: "Thermomix Ruciane-Nida – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ruciane-Nida (Mazury) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Rucianem-Nidzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ruciane-Nida — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rucianem-Nidzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rucianego-Nidy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Ruciane-Nida i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rozmrażanie to jedna z rzeczy, w których to urządzenie pomaga najmniej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rucianem-Nidzie – jak wygląda prezentacja?",
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
      id: "rozmrazanie",
      heading: "Kraina jezior, które odmarzają w swoim tempie — czyli o rozmrażaniu",
      paragraphs: [
        "Ruciane-Nida to jedno z najmłodszych miast w Polsce: prawa miejskie dostało 1 stycznia 1966 roku i tego samego dnia powstało z połączenia Rucianego, Nidy i kilku sąsiednich osad — to było jedno zdarzenie administracyjne, nie dwa. Mieszkało tu wtedy około trzech tysięcy osób. Nida, starsza z dwóch części, została założona w 1699 roku; nie ma zresztą nic wspólnego z rzeką Nidą, która płynie pięćset kilometrów stąd, w świętokrzyskiem. Miasto leży nad Jeziorem Nidzkim, w gminie o powierzchni trzystu pięćdziesięciu ośmiu kilometrów kwadratowych i dwudziestu jeden mieszkańcach na kilometr — jednej z najrzadziej zaludnionych w Polsce.",
        "W krainie, w której zimą zamarzają całe jeziora, a wiosną odmarzają tygodniami, chcę napisać o rozmrażaniu — i zacząć od zdania, którego sprzedawca zwykle nie mówi: to jest jedna z tych rzeczy, w których urządzenie pomaga najmniej.",
        "Powód jest czysto fizyczny. Sprzęt grzeje od ścianek, a zamrożona bryła jest w środku, nie przy nich. Zanim ciepło dojdzie do środka, warstwa zewnętrzna zaczyna się już gotować. Efekt: z jednej strony ugotowane, z drugiej lód. Nie ma tu żadnej sztuczki, która by to obeszła.",
        "Do tego dochodzi rzecz, o której pisałam osobno: zamrożona bryła jest po prostu twarda i potrafi uszkodzić nóż. Kostki lodu wrzucone luzem to co innego niż zbity blok warzyw, który uderza w ostrze całym ciężarem naraz.",
        "Co działa naprawdę, jest nudne i wymaga wyprzedzenia: rozmrażanie w lodówce, przez noc. Powoli, równomiernie, bez różnicy temperatur między brzegiem a środkiem. Nie ma na to skrótu, którego mogłabym Wam uczciwie polecić.",
        "Ale jest coś ważniejszego i to jest sedno tej strony: najważniejsza decyzja przy rozmrażaniu zapada dużo wcześniej, przy mrożeniu. Bryła rozmraża się długo, a płaska warstwa krótko — więc jeśli mrozicie w płaskich, cienkich porcjach zamiast w kostce, problem znika prawie w całości. Druga zasada jest równie prosta: mrozić w porcjach na jedno użycie, żeby nie trzeba było odłupywać połowy.",
        "Warto też wiedzieć, że sporo rzeczy w ogóle nie wymaga rozmrażania. Warzywa do zupy, owoce do musu albo koktajlu, zioła — one idą prosto do gotowania i rozmrażanie ich nie tylko nie pomaga, ale często szkodzi, bo rozmrożone warzywo puszcza wodę i traci strukturę.",
        "I granica: nie doradzę Wam nic o rozmrażaniu mięsa i ryb, o tym, jak długo mogą leżeć w temperaturze pokojowej, ani o tym, czy wolno coś zamrozić ponownie. To jest bezpieczeństwo żywności i akurat w tej dziedzinie błędne zdanie na stronie internetowej może kogoś realnie skrzywdzić.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rucianem-Nidzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Gmina jest rozległa i rzadko zaludniona, więc przy umawianiu podajcie miejscowość — ułożę trasę tak, żeby przyjechać o porze, która Wam pasuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rucianem-Nidzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Rucianego-Nidy",
      paragraphs: [
        "Samo miasto liczy nieco ponad cztery tysiące mieszkańców, a cała gmina ponad siedem, na trzystu pięćdziesięciu ośmiu kilometrach kwadratowych. Ruciane-Nida ma prawa miejskie od 1 stycznia 1966 roku i tego samego dnia powstało z połączenia Rucianego, Nidy i kilku sąsiednich osad — to jedno z najmłodszych miast w kraju, bez zamku, murów i średniowiecznej lokacji. Nidę założono w 1699 roku. Miasto leży nad Jeziorem Nidzkim, ma Kanał Nidzki ze śluzą Guzianka, a szlak wodny z Giżycka przez Mikołajki aż do Pisza otwarto tu w 1898 roku. Działał tu też tartak z końca dziewiętnastego wieku, jeden z największych na Pojezierzu Mazurskim. Cała gmina leży w Mazurskim Parku Krajobrazowym z 1977 roku, z rezerwatami Krutynia i Pierwos.",
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

  districtsHeading: "Do których części gminy Ruciane-Nida dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — i do Rucianego, i do Nidy — oraz do wsi gminy, także tych w głębi Mazurskiego Parku Krajobrazowego. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Ruciane-Nidę też przyjadę",
  nearbyParagraphs: [
    "Pisz, Mikołajki, Orzysz, Mrągowo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pisz", "Orzysz", "Mrągowo", "Biała Piska"],

  about: blokOMnie("do Rucianego-Nidy", "w Rucianem-Nidzie i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Rucianego-Nidy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo pomyłek jest tu sporo: chodzi o mazurskie Ruciane-Nidę w powiecie piskim. Tutejsza Nida nie ma nic wspólnego z rzeką Nidą w świętokrzyskiem ani z Nidą na Mierzei Kurońskiej, a Jezioro Nidzkie to nie Nidzica.",
    },
    ...faqWspolne("w Rucianem-Nidzie"),
    {
      question: "Czy Thermomix rozmrozi jedzenie?",
      answer:
        "Bardzo słabo i mówię to wprost. Urządzenie grzeje od ścianek, a bryła jest w środku — zanim ciepło do niej dojdzie, warstwa zewnętrzna zaczyna się gotować. Do tego zamrożony blok jest twardy i może uszkodzić nóż. Działa za to nudna metoda: rozmrażanie w lodówce, przez noc.",
    },
    {
      question: "Jak sobie ułatwić rozmrażanie?",
      answer:
        "Decyzja zapada przy mrożeniu, nie przy rozmrażaniu. Mrożcie w płaskich, cienkich porcjach zamiast w kostce — płaska warstwa rozmraża się nieporównanie szybciej. I w porcjach na jedno użycie, żeby nie trzeba było odłupywać połowy.",
    },
    {
      question: "Co nie wymaga rozmrażania?",
      answer:
        "Warzywa do zupy, owoce do musu albo koktajlu i zioła — one idą prosto do gotowania, a rozmrażanie często im szkodzi, bo puszczają wodę i tracą strukturę. Przy mięsie i rybach nie doradzam nic: rozmrażanie, czas w temperaturze pokojowej i ponowne zamrażanie to bezpieczeństwo żywności, nie technika kuchenna.",
    },
  ],

  geo: { lat: 53.6417, lng: 21.54 },
};
