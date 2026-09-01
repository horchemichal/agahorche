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
 * ŻABNO — GMINA MIEJSKO-WIEJSKA w powiecie tarnowskim.
 * 18 345 mieszkańców (GUS, 31.12.2024), 101,6 km², 182 os./km².
 * −3,8% od 2002, średni wiek 42,2, REGON 1 518.
 * 1 MIASTO + 19 SOŁECTW.
 *
 * OŚ STRONY: NIECIECZA — WIEŚ NA OK. 700 OSÓB ZE STADIONEM NA OK. 4,6 TYS.
 * ⚠️⚠️ FORMUŁA OBOWIĄZKOWA: „NAJMNIEJSZA W HISTORII POLSKI miejscowość
 * z klubem w najwyższej klasie rozgrywkowej”. NIGDY „w Europie”.
 * Teza europejska jest OBALONA: WP SportoweFakty pisze wprost, że Nieciecza
 * „nie jest najmniejszą miejscowością na Starym Kontynencie”, i podaje
 * mniejsze: Streymnes na Wyspach Owczych (208 mieszk.), Carev Dvor
 * w Macedonii (605), Leirvik (867), Turnowo (941), Zavrč w Słowenii (1 338),
 * Ballinamallard (1 340), Petrovac (1 398). Poprzedni polski rekord
 * należał do Pniew (ok. 8 tys.).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — NIECIECZA: ok. 700–750 mieszkańców (rozbieżność: Łączy Nas Piłka
 *   i stadiony.net podają ok. 700, WP SportoweFakty 750),
 * — STADION: Stadion Sportowy Bruk-Bet Termalica, otwarty 26 SIERPNIA 2007
 *   (mecz LKS Bruk-Bet Nieciecza – Poprad Muszyna 3:0), przebudowany
 *   po awansie w 2015. Pojemność ok. 4,6 tys. (stadiony.net podaje 4 653,
 *   goal.pl 4 666 — rozbieżność 13 miejsc, użyta formuła zaokrąglona),
 * — WŁAŚCICIELE: Krzysztof i Danuta Witkowscy, właściciele firmy BRUK-BET
 *   (kostka brukowa i beton) z siedzibą w Niecieczy,
 * — AWANSE: pierwszy 30 maja 2015, debiut w Ekstraklasie 20 lipca 2015;
 *   trzy sezony 2015/16–2017/18, najwyżej 8. miejsce w 2017; drugi awans
 *   2021; trzeci po sezonie 2024/25. ⚠️ Chronologia dwóch późniejszych
 *   awansów składana z dwóch źródeł — w treści użyta ostrożnie,
 * — HISTORIA ŻABNA (zabno.pl): osadnictwo od kultury łużyckiej, grodzisko
 *   VII–X w.; XII w. nadanie rycerzowi Świętosławowi; 26 STYCZNIA 1385
 *   KRÓLOWA JADWIGA POTWIERDZA PRAWO MAGDEBURSKIE na prośbę Spytka
 *   z Melsztyna (miasto JUŻ JE MIAŁO — to potwierdzenie, nie nadanie);
 *   1394 przejazd Jagiełły; 1501 Tatarzy palą miasto; 1655 zniszczenia
 *   przez wojska Rakoczego; 1675 cech rzemieślników; 1799 pożar niszczy
 *   prawie całe miasto; 1873 cholera; 1905 cegielnia; 1934 powódź,
 * — ODPORYSZÓW: sanktuarium maryjne, cudowny obraz w kościele od 1570 r.,
 *   doroczne pielgrzymki na początku września. JAN WNĘK (1828–1869),
 *   ludowy rzeźbiarz; wg MIEJSCOWEJ TRADYCJI w 1866 r. zbudował lotnię
 *   z jesionowej ramy i płótna i startował z wieży kościelnej. Muzeum
 *   Jana Wnęka przy sanktuarium; część rzeźb w Muzeum Etnograficznym
 *   w Krakowie,
 * — NIEDOMICE: Niedomickie Zakłady Celulozy — decyzja rządowa 1932,
 *   budowa 1933/34, ruch od jesieni 1937; celuloza na proch bezdymny,
 *   uniezależnienie od importu; o lokalizacji zdecydowała czysta woda
 *   z Dunajca. 1939: 670 pracowników, zdolność 48 t na dobę, pierwszy rok
 *   14 200 t, 8. MIEJSCE NA ŚWIECIE w rankingu jakości Międzynarodowego
 *   Biura Jakości Celulozy w Londynie,
 * — POŁOŻENIE: nad Dunajcem, płn.-zach. część Kotliny Sandomierskiej,
 *   do 190 m n.p.m.; rzeki Dunajec i Wisła; drogi wojewódzkie 975 i 973;
 *   węzeł autostrady A4 „Krzyż” ok. 15 km; żyzne gleby, zboża, okopowe,
 *   warzywa, owoce,
 * — WSPÓŁRZĘDNE (UM, ul. Władysława Jagiełły 1): 50,1333820 / 20,8865789.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — „NAJMNIEJSZEJ MIEJSCOWOŚCI W EUROPIE”. OBALONE, patrz wyżej,
 * — KOLEI JAKO WĄTKU ROZBUDOWANEGO. Linia nr 115 Tarnów–Szczucin
 *   przechodzi przez Żabno, ale OŚ KOLEJOWA NALEŻY DO LISIEJ GÓRY
 *   z tej samej fali. Tu maksymalnie jedno zdanie,
 * — SKALI ZATRUDNIENIA I PRZYCHODÓW FIRMY BRUK-BET. Nie potwierdzono,
 * — DATY ZAMKNIĘCIA ZAKŁADÓW CELULOZY. Źródło urywa się na 1939 r.
 *   Nie pisać „działała do 1977”,
 * — NAZW 19 SOŁECTW ZE STATUTU. Potwierdzona jest tylko LICZBA 19;
 *   lista miejscowości pochodzi z GUS i pokrywa się prawdopodobnie,
 *   ale to założenie,
 * — LICZBY I NAZW KÓŁ GOSPODYŃ. Podstrona gminy niedostępna,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono żadnego,
 * — AKTUALNEJ LICZBY MIESZKAŃCÓW MIASTA ŻABNO. Archiwalny serwis podaje
 *   ok. 4,5 tys., ale to dane sprzed lat. Nie podana,
 * — UTRATY I ODZYSKANIA PRAW MIEJSKICH. Oficjalna historia gminy w ogóle
 *   o tym nie wspomina. Nie potwierdzono — pominięte,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA, identyczna
 *   dla wszystkich gmin powiatu tarnowskiego.
 *
 * PUŁAPKI:
 * — ŻABNO ISTNIEJE TEŻ w powiecie bytowskim (pomorskie) i w gminie
 *   Sławno. To realny problem dla wyszukiwarek,
 * — LOTY JANA WNĘKA to TRADYCJA LOKALNA, nie udokumentowany fakt
 *   naukowy. Twierdzenie „latał przed braćmi Wright” niezweryfikowane.
 *   Pisać „według miejscowej tradycji”,
 * — NAZWA OBRAZU w Odporyszowie: część źródeł podaje „Matka Boska
 *   Zwycięska”, inne „Matka Boża Odporyszowska”. Daty koronacji brak,
 * — PASIEKA OTFINOWSKA figuruje jako miejscowość i tej gminy,
 *   i gminy Wietrzychowice — sprawdzać ostrożnie.
 */

export const ZABNO: CityContent = {
  slug: "zabno",
  h1: "Thermomix Żabno – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Żabno — prezentacja i cena",
  seoDescription:
    "Thermomix w Żabnie i całej gminie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Żabno — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Żabnie i okolicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Żabna, Łęgu Tarnowskiego, Niecieczy, Niedomic i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie dziewiętnaście wsi, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żabnie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
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
      heading: "Wieś na siedemset osób i stadion na cztery i pół tysiąca",
      paragraphs: [
        "Nieciecza jest jednym z dziewiętnastu sołectw tej gminy i mieszka w niej mniej więcej siedemset osób. Stoi w niej stadion, który mieści ponad cztery i pół tysiąca widzów — czyli sześć razy więcej, niż liczy sama wieś.",
        "To najmniejsza w historii polskiej piłki miejscowość, która miała klub w najwyższej klasie rozgrywkowej. Poprzedni rekord należał do Pniew, liczących wtedy około ośmiu tysięcy mieszkańców.",
        "Od razu sprostuję rzecz, którą powtarzają media: Nieciecza nie jest najmniejszą taką miejscowością w Europie i żadne poważne źródło tego nie twierdzi. Na Wyspach Owczych klub najwyższej ligi ma Streymnes liczące dwieście osiem osób, w Macedonii Carev Dvor z sześciuset pięcioma. Rekord polski jest jednak faktem i sam w sobie robi wrażenie.",
        "Za klubem stoi konkretna firma i konkretni ludzie: Krzysztof i Danuta Witkowscy, właściciele przedsiębiorstwa Bruk-Bet produkującego kostkę brukową i beton, z siedzibą właśnie w Niecieczy. Stadion otwarto dwudziestego szóstego sierpnia dwa tysiące siódmego roku, a rozbudowano po pierwszym awansie do Ekstraklasy — trzydziestego maja dwa tysiące piętnastego. Debiut w najwyższej lidze wypadł dwudziestego lipca tego samego roku.",
        "Reszta gminy wygląda zupełnie inaczej. Żabno leży nad Dunajcem, w północno-zachodniej części Kotliny Sandomierskiej, na żyznych madach, gdzie uprawia się zboża, okopowe, warzywa i owoce. Miasto jest stare: dwudziestego szóstego stycznia tysiąc trzysta osiemdziesiątego piątego roku królowa Jadwiga potwierdziła mu prawo magdeburskie — potwierdziła, bo Żabno miało je już wcześniej.",
        "Historia bywała tu ciężka. W tysiąc pięćsetnym pierwszym miasto spalili Tatarzy, w tysiąc sześćset pięćdziesiątym piątym zniszczyły je wojska Rakoczego, a w tysiąc siedemset dziewięćdziesiątym dziewiątym pożar strawił niemal całe. W tysiąc dziewięćset trzydziestym czwartym przyszła wielka powódź.",
        "Dwie miejscowości gminy mają jeszcze własne, osobne historie. W Odporyszowie działa sanktuarium maryjne z obrazem, który trafił do kościoła w tysiąc pięćset siedemdziesiątym roku, i muzeum Jana Wnęka — ludowego rzeźbiarza, który według miejscowej tradycji zbudował w tysiąc osiemset sześćdziesiątym szóstym roku lotnię z jesionowej ramy i płótna. W Niedomicach od tysiąc dziewięćset trzydziestego siódmego roku działały Niedomickie Zakłady Celulozy, zbudowane po to, żeby Polska nie musiała importować surowca do prochu bezdymnego; o lokalizacji zdecydowała czysta woda z Dunajca, a już w dwa lata po uruchomieniu zakład zajął ósme miejsce na świecie w rankingu jakości celulozy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Żabno?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość. Gmina ma miasto i dziewiętnaście wsi rozłożonych na stu dwóch kilometrach kwadratowych — z Odporyszowa do Niedomic jedzie się zauważalnie dłużej niż przez samo Żabno.",
        "Jeśli w domu jest ktoś, kto w weekendy chodzi na mecze, warto to powiedzieć przy umawianiu. Sobotnie popołudnia w Niecieczy i okolicy bywają zajęte, a wolę zaproponować termin, który nikomu nie koliduje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żabnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiedy nie wiadomo, ile osób siądzie do stołu",
      paragraphs: [
        "W domu, w którym ogląda się mecze, obiad w weekend ma jedną specyficzną cechę: nie wiadomo z góry, ile osób go zje. Ktoś wpadnie po drodze, ktoś zostanie dłużej, ktoś zadzwoni po drugiej połowie. Plan na cztery porcje rzadko się sprawdza.",
        "Najbardziej pomaga w tym jedzenie, które czeka i nie traci na odgrzaniu. Bigos, gulasz, fasolka, zupa, sos do makaronu — rzeczy gotowane w większym garnku, które po godzinie smakują tak samo, a po dniu często lepiej.",
        "Urządzenie robi to bez pilnowania i samo się wyłącza, więc da się nastawić przed wyjściem i wrócić do gotowego. To jest cała sztuczka: nie trzeba stać nad garnkiem, żeby coś czekało.",
        "Druga rzecz to jedzenie do ręki, bo przy takich okazjach rzadko wszyscy siadają jednocześnie. Pasty na kanapki, smalec ze skwarkami, chleb, coś do maczania. Wszystko z rzeczy, które i tak są w domu, i wszystko robione w kilka minut.",
        "Trzecia dotyczy tego, co rośnie tu za oknem. Gmina leży na żyznych madach Dunajca, gdzie warzyw i owoców jest pod dostatkiem — a z warzyw krem, przecier czy zupa powstają bez stania przy kuchni. Latem to najprostszy sposób, żeby coś ciepłego było zawsze.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Żabno i gotowanie — mady Dunajca, warzywa i pielgrzymki",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z gminy Żabno na ministerialnej Liście Produktów Tradycyjnych ani nazw działających tu kół gospodyń — podstrona gminy z ich wykazem była niedostępna. Nie będę więc wymieniać rzeczy, których nie sprawdziłam.",
      "To, co o tutejszej kuchni da się powiedzieć na pewno, wynika z ziemi. Gmina leży nad Dunajcem, na madach należących do najżyźniejszych w regionie, a rolnictwo dominuje zwłaszcza w północnej części. Uprawia się tu zboża, okopowe, warzywa i owoce — czyli wszystko, z czego robi się codzienny obiad, bez sprowadzania czegokolwiek z daleka.",
      "Drugi tutejszy rytm wyznacza Odporyszów. Doroczne pielgrzymki do tamtejszego sanktuarium odbywają się na początku września, a obraz otaczany czcią trafił do kościoła jeszcze w tysiąc pięćset siedemdziesiątym roku. Pielgrzymi to zawsze więcej talerzy na stole.",
      "Poza tym gotuje się tu jak w całym Powiślu i Kotlinie Sandomierskiej: kapusta, ziemniaki, zupy na kościach, kluski, ciasto drożdżowe, przetwory z ogrodu. Nic wyszukanego i nic, czego trzeba by szukać poza gminą.",
      "Dla urządzenia najsensowniejsze są tu przetwory z własnych warzyw i owoców, dania jednogarnkowe robione w większej ilości oraz pasty i smarowidła. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których miejscowości gminy Żabno dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina liczy ponad osiemnaście tysięcy mieszkańców na stu dwóch kilometrach kwadratowych i składa się z miasta oraz dziewiętnastu wsi.",
    "Miejscowości to: Bobrowniki Wielkie, Chorążec, Czyżów, Goruszów, Gorzyce, Ilkowice, Janikowice, Kłyż, Nieciecza, Niedomice, Odporyszów, Otfinów, Pasieka Otfinowska, Pierszyce, Podlesie Dębowe, Siedliszowice, Sieradza, Studzienki i Łęg Tarnowski.",
    "W Niecieczy stoi stadion mieszczący ponad cztery i pół tysiąca widzów — sześć razy więcej, niż liczy sama wieś. W Odporyszowie jest sanktuarium maryjne i muzeum Jana Wnęka, ludowego rzeźbiarza, o którym miejscowa tradycja mówi, że zbudował lotnię i startował z wieży kościelnej.",
    "W Niedomicach działały od tysiąc dziewięćset trzydziestego siódmego roku Niedomickie Zakłady Celulozy, zbudowane po to, żeby uniezależnić kraj od importu surowca do produkcji prochu.",
    "Dojazd: gmina leży nad Dunajcem, przy drogach wojewódzkich dziewięćset siedemdziesiąt pięć i dziewięćset siedemdziesiąt trzy; do węzła autostrady A4 w Krzyżu jest około piętnastu kilometrów. Przez Żabno przechodzi też linia kolejowa numer sto piętnaście z Tarnowa do Szczucina, dziś bez ruchu pasażerskiego.",
  ],
  districts: [
    "Żabno",
    "Łęg Tarnowski",
    "Nieciecza",
    "Niedomice",
    "Odporyszów",
    "Otfinów",
    "Ilkowice",
    "Bobrowniki Wielkie",
    "Siedliszowice",
    "Sieradza",
    "Gorzyce",
    "Czyżów",
    "Goruszów",
    "Janikowice",
    "Chorążec",
    "Kłyż",
    "Pierszyce",
    "Podlesie Dębowe",
    "Studzienki",
    "Pasieka Otfinowska",
  ],

  nearbyHeading: "Radłów, Wietrzychowice i Lisia Góra też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Radłowem, Wietrzychowicami, Gręboszowem, Olesnem, Dąbrową Tarnowską, Lisią Górą i gminą Tarnów. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Uwaga na nazwę: to Żabno w powiecie tarnowskim, a nie Żabno w powiecie bytowskim na Pomorzu ani w gminie Sławno. Wyszukiwarki potrafią te miejscowości mylić.",
  ],
  nearbyTowns: [
    "Radłów",
    "Wietrzychowice",
    "Gręboszów",
    "Olesno",
    "Dąbrowa Tarnowska",
    "Lisia Góra",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Żabno", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Niecieczy albo w Łęgu Tarnowskim. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie miejscowości gminy traktuję tak samo jak samo miasto. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w Żabnie"),
    {
      question: "Czy Nieciecza to naprawdę najmniejsza taka miejscowość w Europie?",
      answer:
        "Nie i lepiej to wiedzieć, zanim ktoś sprostuje przy stole. Nieciecza jest najmniejszą w historii polskiej piłki miejscowością, która miała klub w najwyższej klasie rozgrywkowej — i to jest rekord w pełni prawdziwy, bo wcześniej należał do ośmiotysięcznych Pniew. Ale w Europie są mniejsze: na Wyspach Owczych klub najwyższej ligi ma miejscowość licząca nieco ponad dwieście osób. Media często skracają to do „najmniejszej w Europie”, co po prostu nie jest prawdą.",
    },
  ],

  geo: { lat: 50.133382, lng: 20.8865789 },
};
