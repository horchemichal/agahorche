import type { CityContent } from "../city-content";
import {
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
 * LANCKORONA — gmina wiejska, 6 251 mieszkańców (GUS, 31.12.2024),
 * 40,5 km², powiat wadowicki. Pięć miejscowości.
 *
 * OŚ STRONY: rynek z drewnianymi domami podcieniowymi — ALE
 * opowiedziany UCZCIWIE, czyli z datą, która obala popularny mit.
 * Te domy nie są średniowieczne. Powstały w większości w latach
 * 1869–1872, PO POŻARZE, który strawił miasteczko w 1869 r.
 * To jest lepsza historia niż mit, bo prawdziwa: miasteczko,
 * które spłonęło i odbudowało się w trzy lata w jednym stylu.
 *
 * Druga oś: ŻYWE środowisko twórcze — ale znów z prawdziwą
 * metryką (Terra Artis od 2010, festiwal od ok. 2004),
 * nie z legendą o hipisach.
 *
 * ⚠️ TRZY RZECZY, KTÓRE TA STRONA ŚWIADOMIE PROSTUJE:
 * 1. LANCKORONA NIE JEST POMNIKIEM HISTORII. Sprawdzone na
 *    liście NID — nie figuruje. Chroniony jest UKŁAD
 *    URBANISTYCZNY wpisem do rejestru zabytków. To co innego
 *    i nie wolno tych rzeczy mylić.
 * 2. HIPISI, „POLSKIE ZAKOPANE LAT 70.” — ZERO POTWIERDZENIA
 *    w jakimkolwiek źródle. To legenda internetowa. NIE POWTARZAM
 *    jej, nawet w formie „mówi się, że”.
 * 3. „MIASTECZKO ANIOŁÓW” — nazwa REALNA i używana przez gminę,
 *    ale WSPÓŁCZESNA. Wzięła się od zimowego festiwalu
 *    organizowanego od ok. 2004 r., a punktem wyjścia był wiersz
 *    mieszkańca Jacka Wojsa z 2004 r. z muzyką Jacka Zielińskiego.
 *    Piszę o niej jako o czymś z lat dwutysięcznych, NIE jako
 *    o dawnej tradycji.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — UKŁAD URBANISTYCZNY w rejestrze zabytków (karta NID,
 *   zabytek.pl). Datowanie z karty: „Domy o wartości zabytkowej
 *   powstały w większości w latach 1869–1872, tj. po ostatnim
 *   pożarze miasteczka” (pożar 1869). Dachy półszczytowe z mocno
 *   wysuniętym okapem tworzącym podcienia; układ oceniony jako
 *   dobrze zachowany. Najlepiej zachowana wschodnia pierzeja
 *   rynku i przyległe uliczki,
 * — jeden z najstarszych drewnianych budynków pochodzi SPRZED
 *   pożaru 1869 — dziś Izba Regionalna, jeden z nielicznych
 *   krytych gontem, które ocalały,
 *   ⚠️ LICZBY DOMÓW NIE PODAJĘ. Jedyne źródło z liczbą (79) to
 *   blog turystyczny. Piszę „kilkadziesiąt”,
 * — LOKACJA: 1361 przywilej na założenie miasta; 31 marca 1366
 *   prawo magdeburskie, wolny wyrąb drzewa i TARGI CZWARTKOWE;
 *   1537 Zygmunt I przenosi targi z czwartku NA NIEDZIELĘ
 *   z powodu konkurencji sąsiednich miast,
 * — ZAMEK: XIV w., wpis do rejestru 9.03.1981, dziś ruiny.
 *   W 2026 r. gmina oddała nową trasę spacerową wokół ruin —
 *   utwardzona ścieżka z materiałów naturalnych, ławki, tablice,
 *   dostosowana dla osób o ograniczonej mobilności,
 * — kościół z 1336 r., wpis 12.08.1971. 21 obiektów w rejestrze,
 * — ŚRODOWISKO TWÓRCZE DZIŚ: Stowarzyszenie Terra Artis
 *   założone 2010 (muzyka, plastyka, taniec, ceramika);
 *   Międzynarodowe Warsztaty Gitarowe i Festiwal Terra Artis —
 *   muzycy z ok. 10 krajów, współpraca z Operą Krakowską;
 *   Nagroda Województwa Małopolskiego 2010. Pracownie ceramiki
 *   czynne dziś: FARFURKA, „Ceramika z Lanckorony”, Art Studio
 *   Klucowicz,
 * — IMPREZY (kalendarium GOK Lanckorona, edycje na 2026):
 *   Zimowy Festiwal „Anioł w Miasteczku” — XXIII edycja,
 *   11–13.12.2026 (kontrola: XXI edycja była w 2024 — zgadza się);
 *   Międzynarodowe Warsztaty Filmu Animowanego — XXXIV edycja,
 *   4–9.09.2026; „Ocalić od zapomnienia” — VII; Biesiada
 *   z Mistrzami — VI. Festiwal obejmuje Anielski Jarmark
 *   Rękodzieła na rynku, warsztaty, koncerty, wystawy,
 * — MIEJSCOWOŚCI (5): Izdebnik 2 279, Lanckorona 2 059,
 *   Skawinki 1 063, Jastrzębia 740, Podchybie 125,
 * — ludność +8,8% (2002–2024), mediana wieku 39,8, mieszkania
 *   95,9 m², 20 oddanych w 2024. 767 podmiotów REGON,
 *   przetwórstwo przemysłowe 28,1% jednoosobowych działalności,
 * — DK52 przechodzi przez sąsiedni IZDEBNIK, nie przez samą
 *   Lanckoronę. Stacja „Kalwaria Zebrzydowska Lanckorona” leży
 *   po kalwaryjskiej stronie. Do Kalwarii 3,7 km, do Wadowic 16,5 km.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — HIPISI I KONTRKULTURA. Zero podstaw źródłowych. Nie ma tego
 *   na stronie w żadnej formie,
 * — „POMNIK HISTORII”. Nie jest. Piszę „układ urbanistyczny
 *   wpisany do rejestru zabytków”,
 * — LICZBA DOMÓW PODCIENIOWYCH. Nie potwierdzona instytucjonalnie,
 * — PARK KULTUROWY. Nie znaleziono uchwały. Nie wspominam,
 * — POTRAWA LOKALNA. Sprawdzone: BRAK. Sekcja `culinary` mówi
 *   o tym wprost i przechodzi do jarmarku i rękodzieła,
 * — KGW. Nie znaleziono wykazu ani nagród. Nie wymyślam,
 * — FABRYKA WÓDEK W IZDEBNIKU. Istniała historycznie (dobra
 *   arcyksiążęce), ale NIE potwierdzono, czy działa dziś.
 *   Nie wymieniam. Tym samym nie tłumaczę, skąd 28,1%
 *   przetwórstwa — bo nie wiem,
 * — DOŻYNKI WOJEWÓDZKIE 2026. Figurują w kalendarium GOK, ale
 *   nie potwierdzono drugim źródłem, że Lanckorona jest
 *   gospodarzem. Nie wspominam.
 *
 * PUŁAPKI:
 * — NAJWIĘKSZĄ MIEJSCOWOŚCIĄ GMINY JEST IZDEBNIK (2 279), nie
 *   Lanckorona (2 059). Strona nie może traktować Lanckorony jako
 *   oczywistego środka ciężkości,
 * — STACJA „Kalwaria Zebrzydowska Lanckorona” NIE LEŻY w gminie
 *   Lanckorona. Nazwa jest myląca — mówię o tym wprost,
 * — DK52 idzie przez Izdebnik, nie przez Lanckoronę,
 * — domy przy rynku NIE SĄ średniowieczne — są z lat 1869–1872.
 */

export const LANCKORONA: CityContent = {
  slug: "lanckorona",
  h1: "Thermomix Lanckorona – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Lanckorona — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Lanckorona: bezpłatna prezentacja TM7 u Ciebie w kuchni — Lanckorona, Izdebnik, Skawinki, Jastrzębia. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lanckorona — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Lanckorona. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Lanckorona przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich miejscowości gminy, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Lanckorona, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Lanckorona – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Lanckoronie, jak w Izdebniku, Skawinkach czy Jastrzębiej.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Miasteczko odbudowane w trzy lata po pożarze",
      paragraphs: [
        "Rynek w Lanckoronie z drewnianymi domami pod szerokimi okapami zna chyba każdy, kto był kiedyś w tej okolicy. Warto natomiast wiedzieć o nim rzecz, którą pomija większość opisów, a która jest ciekawsza od legendy: te domy nie są średniowieczne. Powstały w większości w latach tysiąc osiemset sześćdziesiąt dziewięć — tysiąc osiemset siedemdziesiąt dwa, po pożarze, który strawił miasteczko.",
        "To znaczy, że cały ten układ — jednolity, z tymi samymi dachami i tymi samymi podcieniami — jest dziełem trzech lat i decyzji ludzi, którzy właśnie stracili domy. Odbudowali je w jednym stylu, jeden przy drugim. Ocalał jeden budynek sprzed pożaru, dziś mieści Izbę Regionalną, i jest jednym z nielicznych krytych jeszcze gontem.",
        "Sama Lanckorona była kiedyś miastem naprawdę: przywilej na założenie dostała w tysiąc trzysta sześćdziesiątym pierwszym, a prawo magdeburskie i targi czwartkowe w tysiąc trzysta sześćdziesiątym szóstym roku. W tysiąc pięćset trzydziestym siódmym Zygmunt Stary przeniósł te targi z czwartku na niedzielę, bo sąsiednie miasta robiły zbyt dużą konkurencję. Powyżej rynku stoją ruiny czternastowiecznego zamku, wokół których gmina oddała w tym roku nową trasę spacerową.",
        "Powiem też, czego tu nie ma, bo krąży o Lanckoronie sporo rzeczy, których nie udało mi się potwierdzić w żadnym źródle. Nie znalazłam podstaw dla opowieści o hipisach ani o „polskim Zakopanem lat siedemdziesiątych”. Nie jest też Pomnikiem Historii — chroniony jest układ urbanistyczny, wpisany do rejestru zabytków, co brzmi mniej efektownie, ale jest prawdą.",
        "Za to środowisko twórcze jest tu jak najbardziej realne, tylko młodsze, niż się opowiada. Stowarzyszenie Terra Artis działa od dwa tysiące dziesiątego roku i organizuje międzynarodowe warsztaty gitarowe z muzykami z około dziesięciu krajów. Działają pracownie ceramiki. A zimowy festiwal „Anioł w Miasteczku” — od którego wzięło się określenie „miasteczko aniołów” — ma w tym roku dwudziestą trzecią edycję i zaczął się na początku lat dwutysięcznych, od wiersza napisanego przez mieszkańca.",
        "Praktycznie dla mnie oznacza to gminę o dwóch prędkościach: spokojną przez większość roku i bardzo ruchliwą w grudniu oraz w weekendy sezonu. Przy umawianiu biorę na to poprawkę — w festiwalowy weekend do rynku po prostu nie da się podjechać.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Lanckorona?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, gdzie mieszkasz: w samej Lanckoronie, w Izdebniku, Skawinkach, Jastrzębiej czy w Podchybiu. To nie są duże odległości, ale teren jest pagórkowaty i dojazd bywa dłuższy, niż wynika z kilometrów.",
        "Jeśli umawiamy się w grudniu albo w sezonowy weekend, uprzedź mnie, jak wygląda dojazd pod Twój dom — w czasie festiwalu okolice rynku bywają zamknięte i wolę to wiedzieć wcześniej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Lanckorona"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, w którym coś się robi rękami",
      paragraphs: [
        "W gminie z pracowniami ceramiki, warsztatami i jarmarkiem rękodzieła częsty jest układ, w którym praca dzieje się w domu albo tuż obok, a dzień nie ma wyraźnego końca. Do tego dochodzi sezonowość: są tygodnie spokojne i takie, w których wszystko dzieje się naraz.",
        "W takim rytmie obiad wypada wtedy, kiedy wypadnie, i często ktoś je sam, o innej porze niż reszta. To jest właśnie ta sytuacja, w której gotowanie od zera przegrywa z czymś odgrzanym — nie dlatego, że ktoś nie umie gotować, tylko dlatego, że nie da się przerwać roboty na czterdzieści minut.",
        "Praktyczne bywa tu przede wszystkim to, że danie może dochodzić samo, kiedy Ty jesteś przy swoim, i samo się wyłączyć. Nie trzeba wracać co dziesięć minut zamieszać. Rozdrabnianie, ucieranie, gotowanie w jednym naczyniu — to wszystko dzieje się bez stania przy garnku, a ręce zostają wolne.",
        "Druga rzecz to zapas w lodówce. Zupa na dwa dni, sos do zamrożenia, ciasto na pierogi, pasta kanapkowa, chleb — da się to robić seriami w spokojniejszym tygodniu, żeby w tym gorączkowym nie zaczynać od zera. W domu, w którym sezon zmienia wszystko, ta różnica jest odczuwalna od razu.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — i to jest zwykle pierwsza rzecz, którą rodzice zauważają po miesiącu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Lanckorona i gotowanie — jarmark zamiast wymyślonej potrawy",
    paragraphs: [
      "Zacznę od tego, czego tu nie ma, bo to uczciwsze. Gmina Lanckorona nie ma wpisu na ministerialnej Liście Produktów Tradycyjnych i nie znalazłam udokumentowanej potrawy, którą można by nazwać wyłącznie lanckorońską. Znalazłam za to opis oferty jednej z restauracji, obiecujący „dania inspirowane przepisami z Lanckorony” — ale to jest marketing lokalu, nie źródło. Nie zbuduję na tym akapitu.",
      "Jest natomiast coś realnego i całkiem konkretnego: weekendowe kiermasze z produktami lokalnymi i rękodziełem, a w grudniu Anielski Jarmark Rękodzieła na rynku, w ramach festiwalu, który ma w tym roku dwudziestą trzecią edycję. To znaczy, że jedzenie w tej gminie jest związane nie tyle z jedną potrawą, ile z tym, że ludzie regularnie wystawiają to, co zrobili sami.",
      "Dla domu ma to praktyczny skutek. Kiedy się coś na taki jarmark albo kiermasz przygotowuje — ciasta, przetwory, słoiki — robi się to partiami i zwykle w ostatniej chwili wieczorem. To jest dokładnie ta praca, która wypełnia kuchnię na pół dnia: ucieranie, wyrabianie, pilnowanie, żeby się nie przypaliło.",
      "I w tym miejscu urządzenie faktycznie coś wnosi. Ciasto wyrabia się w kilkadziesiąt sekund bez ubrudzonego blatu. Masy i kremy powstają bez ucierania. Konfitury i sosy gotują się w stałej temperaturze, więc nie trzeba nad nimi stać. Nie zrobi za Ciebie niczego, czego nie umiesz — ale zrobi to, przy czym zwykle traci się wieczór.",
      "Poza sezonem zostaje zwyczajna kuchnia domowa i tak też do tego podchodzę. Na prezentacji gotuję to, co u Was faktycznie się jada, a nie to, co ładnie wygląda na zdjęciu.",
    ],
  },

  districtsHeading: "Gdzie w gminie Lanckorona dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu miejscowości, bez żadnej dopłaty za odległość: Lanckorona, Izdebnik, Skawinki, Jastrzębia i Podchybie.",
    "Warto wiedzieć jedno, bo bywa zaskakujące: największą miejscowością gminy nie jest Lanckorona, tylko Izdebnik. Mieszka tam ponad dwa tysiące dwieście osób i to przez Izdebnik, a nie przez Lanckoronę, przechodzi droga krajowa. Podchybie jest z kolei najmniejsze — mieszka tam sto dwadzieścia pięć osób.",
    "Sama Lanckorona leży wyżej, na pagórku, i dojazd pod rynek bywa dłuższy, niż wynika z mapy — zwłaszcza zimą. W weekend festiwalowy w grudniu okolice rynku potrafią być zamknięte dla ruchu, więc wtedy proszę o wskazówkę, którędy podjechać.",
    "Dojazd z Krakowa: droga krajowa w stronę Bielska przechodzi przez Izdebnik, a stamtąd do Lanckorony jest już blisko. Do Kalwarii Zebrzydowskiej niecałe cztery kilometry, do Wadowic szesnaście. Jest też stacja kolejowa o nazwie „Kalwaria Zebrzydowska Lanckorona” — z tym że mimo nazwy leży ona po kalwaryjskiej stronie, a nie w gminie Lanckorona. Warto o tym wiedzieć, umawiając się „koło dworca”.",
  ],
  districts: [
    "Lanckorona",
    "Izdebnik",
    "Skawinki",
    "Jastrzębia",
    "Podchybie",
  ],

  nearbyHeading: "Kalwaria, Stryszów i Skawina też są na mojej trasie",
  nearbyParagraphs: [
    "Kalwarię Zebrzydowską mam stąd cztery kilometry, do Stryszowa i Wadowic też blisko, a Skawina i Mogilany leżą po drodze z Krakowa. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy gminy — a przy tak małych odległościach łatwo się pomylić — po prostu zapytaj. Traktuję całą tę okolicę jako jeden obszar dojazdu.",
  ],
  nearbyTowns: [
    "Kalwaria Zebrzydowska",
    "Stryszów",
    "Wadowice",
    "Skawina",
    "Mogilany",
    "Kraków",
  ],

  about: blokOMnie("do Lanckorony", "w powiecie wadowickim"),

  faq: [
    {
      question: "Mieszkam w Izdebniku, nie w samej Lanckoronie. Przyjedziesz?",
      answer:
        "Przyjadę i bez dopłaty za odległość — do wszystkich pięciu miejscowości gminy tak samo. Izdebnik jest zresztą największą miejscowością gminy i leży bezpośrednio przy drodze krajowej, więc mam tam bardzo wygodny dojazd z Krakowa.",
    },
    ...faqWspolne("w gminie Lanckorona"),
    {
      question: "Robię ciasta i przetwory na kiermasze. Da się to robić szybciej?",
      answer:
        "Da się i to jest akurat sytuacja, w której widać różnicę najwyraźniej. Ciasto wyrabia się w kilkadziesiąt sekund, masy i kremy powstają bez ucierania, a konfitury gotują się w stałej temperaturze, więc nie trzeba nad nimi stać. Przy pracy partiami — a tak się robi na kiermasz — to jest różnica liczona w godzinach, nie w minutach. Na prezentacji chętnie pokażę to na Twoim przepisie.",
    },
    {
      question: "Czy da się dojechać do Lanckorony pociągiem?",
      answer:
        "Częściowo — jest stacja o nazwie „Kalwaria Zebrzydowska Lanckorona”, ale mimo nazwy leży ona po kalwaryjskiej stronie, nie w gminie Lanckorona, więc trzeba stamtąd jeszcze kawałek dojechać. Piszę to wprost, bo nazwa jest myląca i lepiej wiedzieć wcześniej. Mnie to zresztą nie dotyczy — ja przyjeżdżam autem, pod sam dom.",
    },
  ],

  geo: { lat: 49.8456, lng: 19.7164 },
};
