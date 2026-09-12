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
 * DOBRE MIASTO — gmina miejsko-wiejska w powiecie olsztyńskim.
 * GMINA ok. 14 900 (dane GUS przetworzone przez geoportale;
 * dwa serwisy podają 14 886 i 14 955 — piszę „blisko
 * piętnaście tysięcy"). Powierzchnia 258,89 km²,
 * 28 miejscowości.
 * ⚠ LUDNOŚCI SAMEGO MIASTA NIE PODAJĘ — nie potwierdzono
 * osobnej liczby dla miasta.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ — serwis urzędowy niedostępny.
 *
 * PRAWA MIEJSKIE 26 GRUDNIA 1329 r.
 * ⚠ IMIENIA WYSTAWCY NIE PODAJĘ — nie potwierdzono.
 * PRZYNALEŻNOŚĆ: WARMIA, dominium biskupów warmińskich.
 *
 * KOLEGIATA NAJŚWIĘTSZEGO ZBAWICIELA I WSZYSTKICH ŚWIĘTYCH —
 * wzniesiona 1359–1389. Wymiary: 61,5 m długości, 25,5 m
 * szerokości, 18 m do sklepienia, ponad 42 m do kalenicy.
 * DRUGA CO DO WIELKOŚCI ŚWIĄTYNIA NA WARMII.
 * BAZYLIKA MNIEJSZA — tytuł nadany 19 MAJA 1989 r.
 * KAPITUŁA KOLEGIACKA: powołana 1341 w Pierzchałach,
 * 1343 Głotowo, przeniesiona do Dobrego Miasta do
 * 20 LISTOPADA 1347 r.
 * MURY MIEJSKIE — budowa po 1347 r.; trzy bramy: GŁOTOWSKA,
 * ORNECKA, ŁĄKOWA. OBALONE: „Brama Głogowska" — to
 * zniekształcenie nazwy Głotowska.
 * BASZTA BOCIANIA — na planie koła, pięć kondygnacji
 * strzelniczych i LOCH WIĘZIENNY na dole. To jest podstawa
 * kąta.
 * ⚠ OBALONE: „zachowane mury miejskie" — zachowały się
 * NIKŁE POZOSTAŁOŚCI: Baszta Bociania z krótkim odcinkiem
 * muru i ruiny drugiej baszty.
 * PAŁAC BISKUPI W SMOLAJNACH (gmina Dobre Miasto) —
 * 1741–1746, za bp. Adama Stanisława Grabowskiego; rezydencja
 * bp. IGNACEGO KRASICKIEGO w latach 1767–1795.
 * RELIKWIE ŚW. INNOCENTEGO sprowadzone 29 września 1739 r.
 * RZEKA ŁYNA.
 *
 * KĄT: DNO NACZYNIA — przywieranie i przypalanie. Kąt od
 * Baszty Bocianiej: wieży, w której najciekawsze jest to,
 * co na samym dole.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przypalone dno to najczęstsza awaria kuchenna
 *   i najbardziej nieodwracalna — bo smak spalenizny wchodzi
 *   w całe danie, nie tylko w warstwę przy dnie,
 * — że urządzenie ogranicza to ryzyko, ale go NIE USUWA
 *   — i że obietnica „nic się nie przypali" jest nieuczciwa,
 * — kiedy mimo mieszania grozi przywarcie: przy cukrze,
 *   mleku i nabiale, przy skrobi i zagęszczaczach, przy zbyt
 *   małej ilości płynu i przy gęstych masach,
 * — że gęste masy są najgorsze, bo mieszanie ich nie porusza
 *   przy samym dnie,
 * — że pierwszy sygnał to zapach, a nie wygląd,
 * — co robić, gdy już przywarło: przelać do innego naczynia
 *   BEZ ZESKROBYWANIA dna — bo zeskrobane wchodzi w całość,
 * — i ODMOWA: nie doradzam sposobów czyszczenia
 *   przypalonego naczynia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH DOMOWYCH SPOSOBÓW czyszczenia przypaleń —
 *   to prowadzi do porad, które mogą uszkodzić sprzęt.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także żadnych sugestii,
 *   że przypalone jedzenie jest szkodliwe. Mówię tylko
 *   o smaku.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ ludności miasta ani liczby sołectw.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945 i zniszczeń.
 * — ZERO wysiedleń i akcji „Wisła".
 * — NIE CYTUJĘ publicystycznych formuł o „powrocie do Polski
 *   po latach niemieckiego panowania".
 * — Loch więzienny w baszcie wymieniam jako element
 *   architektury, bez rozwijania wątku kar i tortur.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Cukier i karmel"
 * dotyczą jednego składnika, który się przypala. „Skropliny
 * i wykipienie" (Skarszewy) dotyczą tego, co pod pokrywką.
 * „Blat i ściereczka" (Koluszki) dotyczą sprzątania wokół.
 * „Ciepło, które zostaje" (Błaszki) dotyczy dochodzenia po
 * wyłączeniu. Tutaj chodzi o DNO NACZYNIA i o to, co się
 * przy nim dzieje mimo mieszania.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ ludności samego miasta.
 * — NIE PODAJĘ imienia biskupa, który nadał prawa w 1329 r.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PISZĘ „Brama Głogowska" — poprawna nazwa to Głotowska.
 * — NIE PISZĘ, że mury miejskie zachowały się w całości.
 * — NIE PRZYPISUJĘ Dobremu Miastu produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE PODAJĘ wydarzeń cyklicznych — nie sprawdzono.
 * — NIE MYLĘ Dobrego Miasta z gminą Dobre w mazowieckiem
 *   ani z gminami Dobra. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina liczy blisko piętnaście tysięcy mieszkańców
 *   i 258,89 km², obejmuje 28 miejscowości,
 * — prawa miejskie z 26 grudnia 1329 r.; Dobre Miasto leży
 *   na Warmii,
 * — kolegiata Najświętszego Zbawiciela i Wszystkich Świętych
 *   wzniesiona w latach 1359–1389; ma 61,5 m długości
 *   i ponad 42 m do kalenicy; to druga co do wielkości
 *   świątynia na Warmii,
 * — tytuł bazyliki mniejszej nadano jej 19 maja 1989 r.,
 * — kapitułę kolegiacką przeniesiono tu do 20 listopada
 *   1347 r.,
 * — z fortyfikacji zachowała się przede wszystkim Baszta
 *   Bociania z pięcioma kondygnacjami strzelniczymi,
 * — pałac biskupi w Smolajnach z lat 1741–1746 był rezydencją
 *   biskupa Ignacego Krasickiego w latach 1767–1795,
 * — przez miasto płynie Łyna.
 */
export const DOBRE_MIASTO: CityContent = {
  slug: "dobre-miasto",
  h1: "Thermomix Dobre Miasto – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dobre Miasto na Warmii — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Dobrym Mieście na Warmii: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dobre Miasto — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dobrym Mieście. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dobrego Miasta na Warmii z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Dobre Miasto i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Nic się nie przypali” to obietnica, której nie składam.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dobrym Mieście – jak wygląda prezentacja?",
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
      id: "dno-naczynia",
      heading: "Baszta Bociania i to, co na jej dnie — czyli o przypalaniu",
      paragraphs: [
        "Z murów obronnych Dobrego Miasta, budowanych po 1347 roku, zostało niewiele — najbardziej okazała jest Baszta Bociania, okrągła, z pięcioma kondygnacjami strzelniczymi i lochem na samym dole. Miasto ma prawa miejskie od 26 grudnia 1329 roku i leży na Warmii, a jego największą budowlą jest kolegiata z lat 1359–1389: sześćdziesiąt jeden i pół metra długości, ponad czterdzieści dwa metry do kalenicy, druga co do wielkości świątynia w całym regionie. Od 1989 roku ma tytuł bazyliki mniejszej.",
        "Wieża, w której najważniejsze jest to, co na dnie, pasuje mi do tematu, który w rozmowach o tym urządzeniu wraca stale: przypalanie.",
        "Zacznę od zdania, którego sprzedawcy nie lubią. To urządzenie zmniejsza ryzyko przypalenia, ale go nie usuwa. Obietnica „nic się nie przypali” jest po prostu nieprawdziwa i nie zamierzam jej powtarzać. Mieszanie w trakcie grzania robi bardzo dużo — ale nie wszystko.",
        "Przypalone dno jest zresztą najbardziej nieodwracalną awarią w całej kuchni i to jest istota problemu. Nie chodzi o to, że traci się warstwę przy dnie. Chodzi o to, że smak spalenizny w kilkanaście sekund przechodzi w całe danie i nie da się go już usunąć niczym. Można uratować rozwodnioną zupę, można uratować przesoloną. Przypalonej się nie da.",
        "Kiedy grozi to mimo mieszania? Zawsze w tych samych sytuacjach. Przy cukrze, bo karmelizuje się gwałtownie. Przy mleku i nabiale, bo osadzają się na gorących ściankach. Przy skrobi i wszystkim, co zagęszcza, bo gęstniejąca masa przestaje krążyć. Przy zbyt małej ilości płynu. I najczęściej przy masach gęstych — powidłach, gęstych sosach, budyniach — bo mieszadło porusza je u góry, a przy samym dnie już nie.",
        "Pierwszy sygnał to zapach, nie wygląd. Zanim cokolwiek zobaczycie, poczujecie zmianę — i to jest moment na reakcję. W zamkniętym naczyniu zapach dochodzi z opóźnieniem, więc przy takich potrawach warto być w kuchni, a nie w drugim pokoju. To jedna z niewielu sytuacji, w których nie korzystam z tego, że urządzenie nie wymaga obecności.",
        "A kiedy już przywarło, jest jedna zasada warta zapamiętania: przelać zawartość do innego naczynia i nie zeskrobywać dna. To, co przywarło, zostaje na dnie — jeśli je zeskrobiecie i wmieszacie, stracicie całą resztę. Górę zwykle da się uratować, dół nigdy.",
        "I granica: nie doradzę Wam, jak wyczyścić przypalone naczynie. Domowe sposoby, które krążą po internecie, bywają dla sprzętu szkodliwe, a ja nie zamierzam brać odpowiedzialności za czyjeś porysowane albo uszkodzone naczynie. W tej sprawie kierujcie się instrukcją.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dobrym Mieście?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie danie, które regularnie się Wam przypala — powiedzcie przy umawianiu. Zrobimy właśnie je, bo to uczciwszy test niż potrawa dobrana pod pokaz.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dobrym Mieście"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dobromiejskiej rodziny",
      paragraphs: [
        "Gmina Dobre Miasto liczy blisko piętnaście tysięcy mieszkańców i zajmuje niemal dwieście sześćdziesiąt kilometrów kwadratowych, obejmując dwadzieścia osiem miejscowości. Prawa miejskie miasto dostało 26 grudnia 1329 roku i przez wieki należało do dominium biskupów warmińskich. Kapitułę kolegiacką przeniesiono tu w 1347 roku, a dwanaście lat później zaczęto budować kolegiatę Najświętszego Zbawiciela i Wszystkich Świętych — dziś bazylikę mniejszą i drugą co do wielkości świątynię na Warmii. Z dawnych fortyfikacji została przede wszystkim Baszta Bociania. W należących do gminy Smolajnach stoi pałac biskupi z lat 1741–1746, w którym rezydował Ignacy Krasicki. Przez miasto płynie Łyna.",
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

  districtsHeading: "Do których części gminy Dobre Miasto dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy, w tym do Smolajn i Głotowa. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Dobre Miasto też przyjadę",
  nearbyParagraphs: [
    "Lidzbark Warmiński, Orneta, Olsztyn, Jeziorany i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lidzbark Warmiński", "Orneta", "Jeziorany", "Biskupiec"],

  about: blokOMnie("do Dobrego Miasta", "w Dobrym Mieście i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Dobrego Miasta bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwa bywa myląca: chodzi o Dobre Miasto na Warmii, w powiecie olsztyńskim — nie o gminę Dobre w mazowieckiem ani o żadną z gmin Dobra.",
    },
    ...faqWspolne("w Dobrym Mieście"),
    {
      question: "Czy w Thermomixie coś się może przypalić?",
      answer:
        "Może i nie będę twierdzić inaczej. Mieszanie w trakcie grzania bardzo zmniejsza ryzyko, ale go nie usuwa. Najbardziej narażone są cukier, mleko i nabiał, wszystko zagęszczane skrobią, dania ze zbyt małą ilością płynu oraz gęste masy — te ostatnie dlatego, że przy samym dnie już się nie poruszają.",
    },
    {
      question: "Po czym poznać, że coś się przypala?",
      answer:
        "Po zapachu, nie po wyglądzie — i to zanim cokolwiek zobaczycie. W zamkniętym naczyniu zapach dochodzi z opóźnieniem, więc przy gęstych masach warto zostać w kuchni. To jedna z niewielu sytuacji, w których nie korzystam z tego, że urządzenie nie wymaga obecności.",
    },
    {
      question: "Co zrobić, gdy danie już przywarło do dna?",
      answer:
        "Przelać do innego naczynia i nie zeskrobywać dna. Górę zwykle da się uratować, dół nigdy — a zeskrobane resztki wnoszą smak spalenizny w całość. Jak wyczyścić naczynie, nie doradzę: domowe sposoby z internetu bywają dla sprzętu szkodliwe, więc kierujcie się instrukcją.",
    },
  ],

  geo: { lat: 53.9836, lng: 20.3986 },
};
