import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * WITNICA — gmina miejsko-wiejska w powiecie gorzowskim.
 * MIASTO 6 417, GMINA 12 150 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 8,2 km², GMINY 278,7 km².
 * W rolnictwie pracuje 13,2% zatrudnionych.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ — dostępny wykaz pochodzi
 *   z 1973 r., aktualnego nie ustalono.
 *
 * ⚠⚠ HOMONIMY — AŻ TRZY: WITNICA (miasto, lubuskie, powiat
 * gorzowski) kontra WITNICA (wieś, gmina MORYŃ, powiat
 * gryfiński, zachodniopomorskie) kontra WITNICA (wieś, gmina
 * RZGÓW, powiat koniński, wielkopolskie). FAQ to rozróżnia.
 *
 * PRAWA MIEJSKIE 1 LIPCA 1935 r. — potwierdzone dwoma
 * źródłami, w tym niemieckim opracowaniem miejskim.
 * Witnica liczyła wtedy 6 500 mieszkańców.
 * PIERWSZA WZMIANKA 1262 r., jako wieś rybacka.
 * ETYMOLOGIA: od „wić", „witka" — wierzbowa gałązka.
 *
 * ⚠⚠ BROWAR — fakty, ale KĄTA BROWARNICZEGO NIE UŻYWAM:
 * ZERO ZACHĘTY DO ALKOHOLU to twarda zasada w całym serwisie.
 * Browar założony w 1848 r. przez Ernsta Ferdinanda Handkego,
 * od 1856 jego własność. W 1589 r. w Witnicy były już DWA
 * BROWARY. Wspominam WYŁĄCZNIE jako fakt gospodarczy,
 * bez marek, bez degustacji, bez zachęty.
 * ⚠⚠ WĄTKU CYSTERSKIEGO („piwowarstwo od XIV w.")
 * NIE POWTARZAM — niemieckie opracowanie datuje pierwsze
 * browary dopiero na 1589 r. To niepotwierdzony marketing.
 * ⚠ „ŚWIĘTA WITNICKIEGO PIWA" NIE OPISUJĘ — strona gminy
 *   niedostępna, brak edycji, terminu i ciągłości.
 *
 * MŁYNY I RZEMIOSŁO: 1298 r. — młyny nad rzeczką WITNĄ
 * przekazane w dokumencie. 1867 r. — jeden młyn wodny
 * (mlewny i tartaczny) oraz dwa wiatraki. Od XVI do połowy
 * XIX w. działał młyn papierniczy na Witnie.
 * SPIS RZEMIEŚLNIKÓW Z 1795 r. wymienia PIEKARZY, BEDNARZY
 * I RZEŹNIKÓW, a także kowali, szewców, murarzy i cieśli.
 * MELIORACJA BAGIEN KOTLINY GORZOWSKIEJ w XVIII w. podniosła
 * rangę gospodarczą osady.
 * ⚠ KĄTA MELIORACYJNEGO NIE UŻYWAM — Kostrzyn nad Odrą ma
 *   już kąt od osuszenia doliny. Podaję jako fakt.
 * ⚠ KĄTA MŁYNARSKIEGO NIE UŻYWAM — „mąka i mielenie" ZAJĘTE.
 *
 * DOŻYNKI GMINNE odbywają się w PARKU DROGOWSKAZÓW,
 * z korowodem i wieńcami dożynkowymi.
 *
 * ⚠⚠ PARK DROGOWSKAZÓW I SŁUPÓW MILOWYCH CYWILIZACJI —
 * PODSTAWA KĄTA. Założony na początku lat 90. XX w. przez
 * ZBIGNIEWA CZARNUCHA, ówczesnego prezesa Towarzystwa
 * Przyjaciół Witnicy. 7 HEKTARÓW, OKOŁO 60 OBIEKTÓW.
 * CZTERY STREFY: kultura drogi, refleksja, SŁUPY MILOWE
 * CYWILIZACJI (od koła przez maszynę parową po anteny),
 * fantazja. Eksponaty: maszyna parowa, lokomotywa wożąca
 * cegłę do 1999 r., ponadstuletnie lampy gazowe.
 * ⚠ DAT ŻYCIA ZAŁOŻYCIELA NIE PODAJĘ — zmarł w 2024 r.,
 *   ale to nie jest temat tej strony.
 *
 * ZABYTKI: ŻÓŁTY PAŁACYK z Regionalną Izbą Pamięci, kościół
 * Matki Bożej Nieustającej Pomocy (XIX w., organy Sauera),
 * neogotycki dawny sąd — dziś ratusz.
 * Gmina sąsiaduje z PARKIEM NARODOWYM „UJŚCIE WARTY".
 *
 * KĄT: LODÓWKA — CO GDZIE STOI I DLACZEGO.
 * Kąt od parku, w którym stoją obok siebie słupy milowe
 * cywilizacji — od koła po maszynę parową. Chłodzenie jest
 * takim słupem milowym w kuchni, a korzystamy z niego
 * najbardziej bezmyślnie ze wszystkich urządzeń.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że lodówka zmieniła domową kuchnię bardziej niż
 *   jakikolwiek inny sprzęt, a jest jedynym, którego nikt
 *   nie uczy używać,
 * — ŻE W LODÓWCE SĄ STREFY O RÓŻNEJ TEMPERATURZE i że to
 *   nie jest szczegół: na górze jest najcieplej, przy tylnej
 *   ścianie najzimniej, w drzwiach najcieplej ze wszystkiego,
 * — WNIOSEK: w drzwiach nie trzyma się rzeczy wrażliwych,
 *   bo to najbardziej zmienne miejsce w całym urządzeniu,
 * — ŻE CZĘŚĆ PRODUKTÓW W LODÓWCE TRACI: pieczywo czerstwieje
 *   szybciej niż w chlebaku, pomidory tracą aromat,
 *   ziemniaki i cebula nie mają tam czego szukać,
 * — ŻE ZAPACHY WĘDRUJĄ: masło i mleko przejmują zapach
 *   wszystkiego, co stoi obok, i to jest najczęstsza
 *   przyczyna dziwnego smaku,
 * — ŻE SZCZELNE POJEMNIKI ROBIĄ WIĘCEJ NIŻ JAKIKOLWIEK
 *   SPRZĘT — banał, który naprawdę działa,
 * — ŻE PRZEŁADOWANA LODÓWKA CHŁODZI GORZEJ, bo powietrze
 *   musi krążyć,
 * — ŻE NAJWAŻNIEJSZA ZASADA JEST ORGANIZACYJNA, nie
 *   techniczna: to, czego nie widać, zostaje zapomniane
 *   — i dlatego rzeczy do zjedzenia najpierw stawia się
 *   z przodu, na wysokości wzroku,
 * — UCZCIWIE: urządzenie nie chłodzi i nie ma z lodówką nic
 *   wspólnego — to jest sprzęt od ciepła, nie od zimna,
 * — ale jedno robi: gorące danie schłodzone przed wstawieniem
 *   nie podgrzewa reszty półki — a przelewanie gorącego
 *   z garnka do pojemnika to akurat ta czynność, przy której
 *   urządzenie bywa wygodniejsze niż garnek.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. ⚠⚠ ZERO STOPNI
 *   CELSJUSZA — także przy lodówce. Piszę „najzimniej",
 *   „najcieplej", nigdy liczbami.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ O BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   I ZDROWIU. ZERO bakterii, ZERO zatruć, ZERO „ile dni
 *   można trzymać", ZERO dat przydatności. Piszę WYŁĄCZNIE
 *   o SMAKU, ZAPACHU I ORGANIZACJI. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI MODELI LODÓWEK.
 * — ZERO ZACHĘTY DO ALKOHOLU przy wątku browarniczym.
 * — ZERO porad o oszczędzaniu prądu — to osobny temat
 *   i jest już zajęty.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Spiżarnia" dotyczy
 * gotowania z tego, co jest w domu. „Marnowanie jedzenia"
 * dotyczy tego, co ląduje w koszu. „Gotowanie na zapas
 * i odkładanie porcji do zamrażarki" dotyczy mrożenia.
 * „Gotowanie z mrożonek" dotyczy produktów mrożonych.
 * „Różnica temperatur — zimne do gorącego" dotyczy szoku
 * termicznego przy gotowaniu. „Resztki" dotyczą tego,
 * co zostało po obiedzie. Tutaj chodzi o SAMO WNĘTRZE
 * LODÓWKI: gdzie co stoi i co przez to traci.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw.
 * — NIE POWTARZAM wątku cysterskiego przy browarnictwie.
 * — NIE OPISUJĘ „Święta Witnickiego Piwa".
 * — NIE PODAJĘ marek piwa ani nie zachęcam do alkoholu.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE MYLĘ WITNICY-MIASTA z dwiema wsiami o tej nazwie
 *   w zachodniopomorskiem i wielkopolskiem.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad sześć tysięcy mieszkańców na 8,2 km²,
 *   cała gmina ponad dwanaście tysięcy na 278,7 km²;
 *   w rolnictwie pracuje tu 13,2% zatrudnionych,
 * — pierwsza wzmianka pochodzi z 1262 r. i dotyczy wsi
 *   rybackiej, a prawa miejskie nadano 1 lipca 1935 r., gdy
 *   Witnica liczyła sześć i pół tysiąca mieszkańców; nazwę
 *   wywodzi się od „wici”, czyli wierzbowej gałązki,
 * — młyny nad rzeczką Witną przekazano dokumentem już
 *   w 1298 r.; w 1867 działał tu młyn wodny, mlewny
 *   i tartaczny, oraz dwa wiatraki, a od XVI do połowy XIX w.
 *   pracował młyn papierniczy; spis rzemieślników z 1795 r.
 *   wymienia piekarzy, bednarzy i rzeźników, a także kowali,
 *   szewców, murarzy i cieśli; w XVIII w. osuszono bagna
 *   Kotliny Gorzowskiej, co podniosło rangę gospodarczą osady,
 * — w 1589 r. działały w Witnicy dwa browary, a browar
 *   założony w 1848 r. przez Ernsta Ferdinanda Handkego stał
 *   się w 1856 jego własnością,
 * — Park Drogowskazów i Słupów Milowych Cywilizacji założył
 *   na początku lat dziewięćdziesiątych Zbigniew Czarnuch,
 *   ówczesny prezes Towarzystwa Przyjaciół Witnicy; park
 *   zajmuje siedem hektarów i ma około sześćdziesięciu
 *   obiektów w czterech strefach, w tym słupy milowe
 *   cywilizacji — od koła przez maszynę parową po anteny
 *   — a wśród eksponatów są maszyna parowa, lokomotywa wożąca
 *   miejscową cegłę do 1999 r. i ponadstuletnie lampy gazowe;
 *   w parku odbywają się też dożynki gminne, z korowodem
 *   i wieńcami,
 * — w mieście stoją Żółty Pałacyk z Regionalną Izbą Pamięci,
 *   dziewiętnastowieczny kościół Matki Bożej Nieustającej
 *   Pomocy z organami Sauera i neogotycki dawny sąd, dziś
 *   ratusz; gmina sąsiaduje z Parkiem Narodowym „Ujście
 *   Warty”.
 */
export const WITNICA: CityContent = {
  slug: "witnica",
  h1: "Thermomix Witnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Witnica — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Witnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Witnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Witnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Witnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Witnica i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "To, czego w lodówce nie widać, zostaje zapomniane.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Witnicy – jak wygląda prezentacja?",
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
      id: "lodowka",
      heading: "Park słupów milowych cywilizacji — czyli o lodówce, której nikt nie uczy używać",
      paragraphs: [
        "Na początku lat dziewięćdziesiątych Zbigniew Czarnuch założył tutaj Park Drogowskazów i Słupów Milowych Cywilizacji: siedem hektarów, około sześćdziesięciu obiektów, a wśród nich cała strefa poświęcona wynalazkom, które zmieniły życie — od koła przez maszynę parową po anteny. Stoją tam prawdziwa maszyna parowa, lokomotywa wożąca miejscową cegłę jeszcze w 1999 roku i ponadstuletnie lampy gazowe.",
        "W kuchni takim słupem milowym jest chłodzenie. Lodówka zmieniła domowe gotowanie bardziej niż jakiekolwiek inne urządzenie — i jest jedynym, którego nikt nas nie uczy używać. Kupujemy ją, wstawiamy i przez piętnaście lat wkładamy rzeczy gdzie popadnie.",
        "A w lodówce są strefy o różnej temperaturze i to nie jest szczegół dla pedantów. Na górze jest najcieplej, bo ciepłe powietrze idzie do góry. Przy tylnej ścianie najzimniej. A najcieplejszym i najbardziej zmiennym miejscem są drzwi, bo otwierają się kilkanaście razy dziennie.",
        "Z tego wynika pierwsza praktyczna zasada: w drzwiach nie trzyma się rzeczy wrażliwych. To jest miejsce na słoiki i butelki, a nie na to, czego smak łatwo popsuć.",
        "Druga rzecz, o której się nie mówi: część produktów w lodówce po prostu traci. Pieczywo czerstwieje w chłodzie szybciej niż w chlebaku. Pomidory tracą aromat i robią się mączyste. Ziemniaki i cebula nie mają tam czego szukać i czują się znacznie lepiej w ciemnej szafce.",
        "Trzecia — moim zdaniem najczęstsza przyczyna „dziwnego smaku” w domowej kuchni: zapachy wędrują. Masło i mleko przejmują zapach wszystkiego, co stoi obok, a robią to zaskakująco szybko. Masło leżące obok otwartej wędliny po dniu smakuje wędliną.",
        "Lekarstwo jest banalne i naprawdę działa: szczelne pojemniki. Przy jedzeniu robią więcej niż niejeden sprzęt kuchenny, a kosztują tyle co nic.",
        "Warto też wiedzieć, że przeładowana lodówka chłodzi gorzej. Powietrze musi mieć jak krążyć, a wciśnięte na siłę zakupy blokują mu drogę — im bardziej upchana półka, tym mniej równomiernie działa całość.",
        "Najważniejsza zasada jest jednak organizacyjna, nie techniczna: to, czego nie widać, zostaje zapomniane. Dlatego rzeczy przeznaczone do zjedzenia w najbliższych dniach stawia się z przodu i na wysokości wzroku, a nie w głębi za trzema słoikami. Ta jedna zmiana robi w domu więcej niż wszystkie pozostałe razem wzięte.",
        "Teraz uczciwie o sprzęcie. Thermomix nie chłodzi i z lodówką nie ma nic wspólnego — to jest urządzenie od ciepła, nie od zimna, i żadna jego funkcja tego nie zmieni.",
        "Jedno drobne połączenie jednak istnieje. Gorące danie warto schłodzić przed wstawieniem, żeby nie podgrzewało reszty półki — a przelewanie gorącego do pojemnika jest akurat tą czynnością, przy której naczynie z uchwytem bywa wygodniejsze i bezpieczniejsze niż garnek trzymany przez ścierkę.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Witnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, ile osób jada u Was w tygodniu. Od tego zależy, jakie porcje warto pokazać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Witnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla witnickiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad sześć tysięcy mieszkańców na ośmiu kilometrach kwadratowych, a cała gmina ponad dwanaście tysięcy na dwustu siedemdziesięciu ośmiu; w rolnictwie pracuje tu trzynaście procent zatrudnionych. Pierwsza wzmianka o Witnicy pochodzi z 1262 roku i dotyczy wsi rybackiej, a prawa miejskie nadano 1 lipca 1935, gdy miasteczko liczyło sześć i pół tysiąca mieszkańców; nazwę wywodzi się od „wici”, czyli wierzbowej gałązki. Młyny nad rzeczką Witną przekazano dokumentem już w 1298 roku; w 1867 działał tu młyn wodny, mlewny i tartaczny, oraz dwa wiatraki, a od XVI do połowy XIX wieku pracował młyn papierniczy. Spis rzemieślników z 1795 roku wymienia piekarzy, bednarzy i rzeźników, a także kowali, szewców, murarzy i cieśli; w XVIII wieku osuszono bagna Kotliny Gorzowskiej, co podniosło rangę gospodarczą osady. W 1589 roku działały w Witnicy dwa browary, a browar założony w 1848 roku przez Ernsta Ferdinanda Handkego stał się w 1856 jego własnością. Park Drogowskazów i Słupów Milowych Cywilizacji założył na początku lat dziewięćdziesiątych Zbigniew Czarnuch — park zajmuje siedem hektarów i mieści około sześćdziesięciu obiektów w czterech strefach; odbywają się w nim również dożynki gminne, z korowodem i wieńcami. W mieście stoją Żółty Pałacyk z Regionalną Izbą Pamięci, dziewiętnastowieczny kościół Matki Bożej Nieustającej Pomocy z organami Sauera i neogotycki dawny sąd, dziś ratusz; gmina sąsiaduje z Parkiem Narodowym „Ujście Warty”.",
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

  districtsHeading: "Do których części gminy Witnica dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Witnicę też przyjadę",
  nearbyParagraphs: [
    "Kostrzyn nad Odrą, Gorzów Wielkopolski, Słońsk, Bogdaniec i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kostrzyn nad Odrą", "Gorzów Wielkopolski", "Słońsk", "Bogdaniec"],

  about: blokOMnie("do Witnicy", "w Witnicy i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Witnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo ta nazwa powtarza się w Polsce: chodzi o Witnicę-miasto w powiecie gorzowskim, a nie o wsie o tej samej nazwie w zachodniopomorskiem i wielkopolskiem.",
    },
    ...faqWspolne("w Witnicy"),
    {
      question: "Gdzie w lodówce co stawiać?",
      answer:
        "Na górze jest najcieplej, przy tylnej ścianie najzimniej, a drzwi są miejscem najcieplejszym i najbardziej zmiennym — nie trzyma się w nich rzeczy wrażliwych. Najważniejsza zasada jest jednak organizacyjna: to, czego nie widać, zostaje zapomniane, więc rzeczy do zjedzenia w najbliższych dniach stawia się z przodu, na wysokości wzroku.",
    },
    {
      question: "Czego nie trzymać w lodówce?",
      answer:
        "Pieczywa — czerstwieje w chłodzie szybciej niż w chlebaku. Pomidorów — tracą aromat i robią się mączyste. Ziemniaków i cebuli — czują się znacznie lepiej w ciemnej szafce.",
    },
    {
      question: "Dlaczego masło z lodówki dziwnie smakuje?",
      answer:
        "Bo zapachy w lodówce wędrują, a masło i mleko przejmują je zaskakująco szybko — masło leżące obok otwartej wędliny po dniu smakuje wędliną. Pomagają szczelne pojemniki; przy jedzeniu robią więcej niż niejeden sprzęt kuchenny.",
    },
  ],

  geo: { lat: 52.6739, lng: 14.8969 },
};
