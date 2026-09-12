import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * GRODKÓW — miasto w powiecie brzeskim, 7 856 mieszkańców
 * (31.12.2024, GUS); cała gmina 17 839. Prawa miejskie
 * 22 WRZEŚNIA 1268 r. od księcia HENRYKA IV PROBUSA, na prawie
 * niemieckim (średzkim), potwierdzone w 1278 r. — nieprzerwanie
 * od tego czasu. Od 1344 r. miasto należało do biskupów
 * wrocławskich, którzy tytułowali się KSIĄŻĘTAMI NYSY
 * I GRODKOWA. Największy zakład w mieście produkuje BUTLE
 * GAZOWE I ZBIORNIKI LPG.
 *
 * KĄT: kuchnia zasilana z butli — czyli co się zmienia, gdy
 * do domu gotującego na gazie z butli wchodzi urządzenie
 * elektryczne. Miasto, którego największy zakład od pokoleń
 * robi butle, jest jedynym właściwym miejscem na ten rachunek.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że poza siecią gazową gotowanie ma inną arytmetykę: butla
 *   kończy się w środku obiadu i trzeba mieć zapasową,
 * — że to urządzenie jest elektryczne i to jest zarówno zaleta
 *   (jedno źródło, nie trzeba wymieniać), jak i wada (bez prądu
 *   nie zrobi nic),
 * — że palnik gazowy zagotuje duży garnek szybciej i nie ma co
 *   z tym walczyć,
 * — i że urządzenie NIE ZASTĘPUJE kuchenki — stoi obok niej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD DOTYCZĄCYCH INSTALACJI GAZOWEJ, PODŁĄCZANIA
 *   BUTLI, WĘŻY, REDUKTORÓW ANI PRZECHOWYWANIA BUTLI. To jest
 *   sprawa uprawnionego instalatora i strona mówi to wprost.
 *   To jest najważniejsza odmowa tej strony.
 * — ŻADNYCH WYLICZEŃ, CO SIĘ BARDZIEJ OPŁACA — gaz czy prąd.
 *   Nie znam Waszej taryfy, nie znam ceny butli u Was i nie będę
 *   zgadywać. Nie jestem od liczenia cudzych rachunków.
 * — ŻADNYCH PORAD O INSTALACJI ELEKTRYCZNEJ — ten temat należy
 *   do innego miasta i celowo go tu nie ruszam.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o gotowaniu na gazie.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Stara instalacja
 * elektryczna" (inne miasto) dotyczy tego, czy urządzenie da się
 * w ogóle podłączyć. „Ile to zżera prądu" i „prąd" (dwa inne
 * miasta) dotyczą zużycia i rachunku. Tutaj chodzi o DOM POZA
 * SIECIĄ GAZOWĄ i o współistnienie dwóch źródeł energii
 * w jednej kuchni.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ NAZWY ZAKŁADU. Jest ustalona, ale go nie
 *   reklamuję — tym bardziej że firma jest obecnie
 *   w restrukturyzacji, a pisanie o cudzych kłopotach
 *   finansowych na stronie handlowej byłoby nieprzyzwoite.
 *   Piszę opisowo i bez oceny.
 * — NIE PISZĘ, ilu ludzi zatrudnia. Dane są z połowy 2026 r.,
 *   a sytuacja firmy jest niestabilna.
 * — NIE ROZSTRZYGAM pierwszej wzmianki o Grodkowie. Źródła
 *   podają 1250 albo 1210. Podaję tylko pewną datę praw
 *   miejskich: 22 września 1268 r.
 * — NIE PISZĘ, że Grodków ma dwujęzyczne tablice. NIE MA —
 *   to zachodnia część województwa, wymieniona ludnościowo
 *   po 1945 r., inaczej niż środkowe i wschodnie opolskie.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Grodkowa nic nie znaleziono.
 * — NIE PISZĘ, że pałac w Kopicach jest udostępniony do
 *   zwiedzania na stałe. Trwa odbudowa, a wejścia są
 *   organizowane w wyznaczonych terminach. Konserwatorzy mówią
 *   o co najmniej dekadzie prac.
 * — districts: gmina ma 35 sołectw i JEDNO osiedle jako
 *   jednostkę pomocniczą — Półwiosek, dawną wieś wchłoniętą
 *   przez miasto. Wpisuję TYLKO Półwiosek, bo tylko on jest
 *   jednostką miejską. Sołectw nie podaję jako dzielnic.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 22 września 1268 r. (Henryk IV Probus),
 *   prawo niemieckie (średzkie), potwierdzenie 1278 r.,
 *   nieprzerwanie do dziś,
 * — od 1344 r. miasto biskupów wrocławskich, którzy tytułowali
 *   się książętami Nysy i Grodkowa,
 * — mury miejskie o obwodzie ok. 1200 m z siedmioma wieżami;
 *   zachowane Brama Lewińska, Brama Ziębicka i Wieża Więzienna,
 * — Józef Elsner, nauczyciel Chopina i założyciel Konserwatorium
 *   Warszawskiego, urodził się w Grodkowie 1 czerwca 1769 r.;
 *   Chopin zadedykował mu Sonatę c-moll op. 4; miasto ma jego
 *   pomnik przed ratuszem i organizuje Dni Elsnera,
 * — w mieście działa zakład produkujący butle gazowe i zbiorniki
 *   LPG oraz fabryka styropianu otwarta w 2021 r.,
 * — w Kopicach, w tej gminie, trwa odbudowa neogotyckiego pałacu,
 * — 7 856 mieszkańców miasta, 17 839 gminy (31.12.2024).
 */
export const GRODKOW: CityContent = {
  slug: "grodkow",
  h1: "Thermomix Grodków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Grodków — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Grodkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Grodków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Grodkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Grodkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Grodków i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Butla się kończy w środku obiadu. Prąd zwykle nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Grodkowie – jak wygląda prezentacja?",
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
      id: "butla",
      heading: "Miasto, w którym robi się butle — czyli o kuchni poza siecią gazową",
      paragraphs: [
        "W Grodkowie od pokoleń produkuje się butle gazowe i zbiorniki na gaz płynny. To nie jest przypadkowy szczegół z folderu — w gminie z trzydziestoma pięcioma sołectwami bardzo wiele domów gotuje właśnie z butli, bo do sieci gazowej po prostu nie mają jak się podłączyć. A gotowanie z butli ma swoją arytmetykę, o której w miastach się zapomina.",
        "Butla nie kończy się o wygodnej porze. Kończy się w niedzielę, w środku obiadu, kiedy rosół jest w połowie. Kto gotuje z butli, ten ma drugą w komórce i zna ten dzwonek w głowie: „chyba już schodzi”.",
        "Urządzenie, które sprzedaję, jest elektryczne. I to jest dokładnie ta różnica, którą warto policzyć u siebie — nie w złotówkach, tylko w spokoju. Zupa, gulasz, sos czy przecier gotują się z gniazdka, więc nie wchodzą do rachunku butli w ogóle. W domu, w którym wymiana butli to wyprawa, to jest realna zmiana.",
        "Ale zaraz druga strona tego samego medalu, żeby nie było, że sprzedaję cudowny środek: bez prądu ono nie zrobi zupełnie nic. Kuchenka gazowa działa przy wyłączonym prądzie, a to urządzenie nie. Jeżeli u Was prąd bywa niepewny, to jest argument w drugą stronę i uczciwie go tutaj stawiam.",
        "I trzecia rzecz, prosta: palnik gazowy zagotuje duży garnek wody szybciej niż to urządzenie i nie ma co z tym walczyć. Ono nie zastępuje kuchenki — ono stoi obok niej. Zabiera jej dania, przy których trzeba stać i mieszać, i zostawia jej to, co wymaga dużego ognia albo dużego garnka.",
        "Czego natomiast Wam nie doradzę i przy czym nie ustąpię: niczego, co dotyczy samej instalacji gazowej. Ani jak podłączyć butlę, ani jaki wąż, ani jaki reduktor, ani gdzie ją trzymać. To jest robota uprawnionego instalatora, a nie przedstawicielki handlowej sprzętu kuchennego. Przy gazie nie ma miejsca na porady z internetu i nie zamierzam ich udzielać.",
        "Nie policzę Wam też, co się bardziej opłaca — gaz czy prąd. Nie znam Waszej taryfy ani ceny butli u Was w okolicy, a rzucanie liczbami, których się nie sprawdziło, to jest dokładnie to, czego w tej branży nie znoszę.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/tm7", label: "Co potrafi TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Grodkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli gotujecie z butli, powiedzcie to przy umawianiu — pokażę konkretnie te dania, które przestaną z niej schodzić.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Grodkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla grodkowskiej rodziny",
      paragraphs: [
        "Grodków liczy niecałe osiem tysięcy mieszkańców, cała gmina prawie osiemnaście. Prawa miejskie dostał 22 września 1268 roku od księcia Henryka IV Probusa i nigdy ich nie stracił, a od 1344 roku należał do biskupów wrocławskich, którzy tytułowali się książętami Nysy i Grodkowa — czyli to miasto dało nazwę połowie biskupiego tytułu książęcego. Z murów o obwodzie około tysiąca dwustu metrów zostały Brama Lewińska, Brama Ziębicka i Wieża Więzienna. I fakt, którego nikt się tu nie spodziewa: 1 czerwca 1769 roku urodził się w Grodkowie Józef Elsner — nauczyciel Chopina, założyciel Konserwatorium Warszawskiego. Chopin zadedykował mu Sonatę c-moll opus 4. Miasto ma jego pomnik przed ratuszem i co roku organizuje Dni Elsnera.",
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

  districtsHeading: "Do których części Grodkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — łącznie z Półwioskiem, który jest jedynym osiedlem miasta jako jednostką pomocniczą — i do sołectw gminy, w tym Kopic, Tarnowa Grodkowskiego i Gnojnej.",
    "Poza Półwioskiem miasto nie ma podziału na osiedla, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: ["Półwiosek"],

  nearbyHeading: "Poza Grodków też przyjadę",
  nearbyParagraphs: [
    "Brzeg, Nysa, Niemodlin, Opole, Paczków i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Brzeg", "Nysa", "Opole", "Paczków", "Namysłów", "Prudnik"],

  about: blokOMnie("do Grodkowa", "w Grodkowie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Grodkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy — także do Kopic i dalszych wsi. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Grodkowie"),
    {
      question: "Gotujemy z butli — czy Thermomix coś tu zmienia?",
      answer:
        "Tak, i to konkretnie: jest elektryczny, więc zupy, gulasze, sosy i przeciery przestają schodzić z butli w ogóle. W domu, w którym wymiana butli to wyprawa, to realna różnica. Ale bez prądu urządzenie nie zrobi nic — kuchenka gazowa działa przy wyłączonym prądzie, a ono nie.",
    },
    {
      question: "Czy Thermomix zastąpi kuchenkę gazową?",
      answer:
        "Nie. Palnik zagotuje duży garnek wody szybciej i nie ma co z tym walczyć. Urządzenie stoi obok kuchenki i zabiera jej te dania, przy których trzeba stać i mieszać — a zostawia jej duży ogień i duże garnki.",
    },
    {
      question: "Doradzisz coś w sprawie podłączenia butli?",
      answer:
        "Nie i przy tym nie ustąpię. Wąż, reduktor, podłączenie, przechowywanie butli — to robota uprawnionego instalatora, nie przedstawicielki handlowej sprzętu kuchennego. Nie policzę Wam też, co się bardziej opłaca, gaz czy prąd: nie znam Waszej taryfy ani cen butli w Waszej okolicy.",
    },
  ],

  geo: { lat: 50.6963, lng: 17.3853 },
};
