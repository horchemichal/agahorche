import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * BOJANOWO — powiat rawicki, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ BOJANOWO NIE MA.
 * MIASTO: 2 782 mieszkańców (GUS 31.12.2024).
 *   ⚠⚠⚠ POWIERZCHNIĘ PODAJĘ ZA GMINĄ: 234 ha,
 *   czyli 2,34 km². Serwis statystyczny wyświetla
 *   2,3 km² (zaokrąglenie do 0,1) i gęstość
 *   1 188,9 os./km².
 *   ⚠⚠ PRZY 2,3 km² ILORAZ DAJE 1 209,6 — ROZBIEŻNOŚĆ
 *   20,7. PRZY 2,34 km² ILORAZ DAJE DOKŁADNIE 1 188,9 —
 *   ROZBIEŻNOŚĆ 0,0. DLATEGO PODAJĘ 2,34 km²
 *   I GĘSTOŚĆ RAZEM.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 8 163 osoby, 123,5 km², gęstość
 *   67 os./km².
 *   ⚠ [ZW — 8 163 / 123,5 = 66,1. Różnica 0,9.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 17 SOŁECTW i 28 MIEJSCOWOŚCI (GUS
 *   Vademecum). Serwis gminy mówi o 17 wsiach
 *   sołeckich i 3 przysiółkach. PODAJĘ 17 i 28.
 *   ⚠⚠ OBRĘBÓW EWIDENCYJNYCH JEST 16 — LICZBY TEJ
 *   NIE UŻYWAM, bo kąt „samorząd dzieli drobniej niż
 *   kataster" JEST ZAJĘTY (Lwówek, poprzednia fala).
 *   MIEJSCOWOŚCI (część): Golina Wielka, Golinka,
 *   Wydartowo Pierwsze, Wydartowo Drugie,
 *   Wydartowo-Charta, Sułów Mały.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP] —
 *   najsilniejszy kandydat to Golina Wielka, ale
 *   ŻADNE ŹRÓDŁO NIE MÓWI „NAJWIĘKSZA". NIE PODAJĘ.
 * ⚠ GEO: 51,7075 / 16,7483 (miasto i gmina identyczne).
 *
 * ⚠⚠ ODMIANA — RODZAJ NIJAKI:
 *   D. do BOJANOWA · Ms. w BOJANOWIE ·
 *   N. Bojanowem · C. Bojanowu.
 *   ⚠ POTWIERDZENIA: „Historia Bojanowa" (serwis
 *   gminy), „lokował obok Bojanowa drugie miasto",
 *   „OSP w Bojanowie".
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: TRAKTOWANIE NAZWY JAKO
 *   NIEODMIENNEJ — „do Bojanowo", „w Bojanowo".
 *   WSPOMINAM.
 *   PRZYMIOTNIK: BOJANOWSKI — potwierdzony jednym
 *   cytatem („bojanowskiego obwodu pocztowego").
 *   ⚠ UŻYWAM OSZCZĘDNIE, NAJWYŻEJ RAZ.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ PUŁAPKA NAZWISKOWA:
 *   Nazwa miasta i nazwisko założyciela są tożsame.
 *   ⚠⚠⚠ FIGURY „NAZWISKO OD MIEJSCA, NIE MIEJSCE OD
 *   NAZWISKA" NIE UŻYWAM — kąt ZAJĘTY (Miłosław),
 *   a tutaj relacja jest ODWROTNA, więc tym bardziej
 *   nie wolno jej powtarzać.
 *   ⚠⚠⚠ NAZWISK NIE WYMIENIAM W OGÓLE — piszę
 *   „założyciel miasta" i „jego syn". Imię BOGUSŁAW
 *   podaję TYLKO dlatego, że od niego pochodzi nazwa
 *   drugiego miasta i bez tego fakt jest niezrozumiały.
 *   ⚠⚠⚠ KRÓLA NADAJĄCEGO AKT NIE WYMIENIAM Z IMIENIA.
 *
 * ⚠⚠ DATY:
 *   — AKT LOKACYJNY: 16 KWIETNIA 1638 R.
 *   — DRUGIE MIASTO BOGUSŁAWÓW: 20 SIERPNIA 1663 R.
 *     ODSTĘP: 25 LAT. TO RDZEŃ KĄTA.
 *   — DANA HISTORYCZNA: „w ostatnim roku XX stulecia
 *     Bojanowo liczyło ok. 3030 mieszkańców" (serwis
 *     gminy). ⚠⚠⚠ NIE UŻYWAM — porównanie z dzisiejszą
 *     liczbą prowadziłoby do wątku wyludniania.
 *     ZERO TEGO WĄTKU.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠ RZEKI I LESISTOŚCI NIE USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DRUGIE OBOK, ZAMIAST WIĘKSZEGO
 *   W TYM SAMYM MIEJSCU:
 *   Bojanowo dostało akt lokacyjny 16 kwietnia 1638 r.
 *   Dwadzieścia pięć lat później, 20 sierpnia 1663 r.,
 *   syn założyciela nie rozbudował miasta ojca, tylko
 *   ULOKOWAŁ TUŻ OBOK DRUGIE, ODRĘBNE MIASTO
 *   o własnej nazwie — BOGUSŁAWÓW, od swojego imienia.
 *   Dwa miasta stały obok siebie.
 *   DZIŚ BOGUSŁAWÓW JEST CZĘŚCIĄ BOJANOWA — nazwa
 *   została w tekstach historycznych, a na mapie
 *   jest jedno miasto.
 *   ⚠⚠ NIE TWIERDZĘ, KIEDY DOKŁADNIE NASTĄPIŁO
 *   POŁĄCZENIE — daty nie ustalono [NP].
 *
 * KĄT: DRUGIE OBOK, ZAMIAST WIĘKSZEGO W TYM SAMYM
 * MIEJSCU — o tym, że gdy czegoś w kuchni brakuje,
 * najczęściej dokładamy drugą sztukę obok, zamiast
 * poprawić pierwszą. Kąt z Bojanowa: 1638 i 1663,
 * dwa miasta obok siebie, dziś jedno.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że akt lokacyjny jest z 16 kwietnia 1638 r.,
 *   a 20 sierpnia 1663 r. obok stanęło drugie miasto,
 *   nazwane od imienia syna założyciela. TO JEST RDZEŃ,
 * — że dziś to jedno miasto, a druga nazwa została
 *   tylko w opisach historii,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY TAK SAMO: drugi czajnik,
 *   druga deska, druga półka dostawiona do pierwszej —
 *   zamiast poprawienia tego, co już jest,
 * — ⚠⚠ ŻE PO KILKU LATACH I TAK ZLEWA SIĘ TO W JEDNO,
 *   tylko bez planu, bo nikt nie zaprojektował całości,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zanim dołożysz drugie,
 *   sprawdź, czy pierwsze da się poprawić; a jeśli
 *   dokładasz — powiedz sobie od razu, po co, i czy
 *   ma zastąpić, czy uzupełnić,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem drugie obok jest
 *   lepsze od przebudowy — gdy gotują dwie osoby naraz,
 *   dwa stanowiska naprawdę działają lepiej niż jedno
 *   duże,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie ma sens wtedy,
 *   gdy coś ZASTĘPUJE. Jeśli zostaje obok wszystkiego,
 *   co już macie, to jest dokładanie drugiego miasta,
 *   a nie porządkowanie pierwszego.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NADANE DWA RAZY — kąt zajęty (Wyrzysk).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam TEN SAM status dostawało TO SAMO
 *   miejsce dwukrotnie; tu są DWA RÓŻNE AKTY DLA DWÓCH
 *   RÓŻNYCH MIAST. JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO WZIĘTE Z CZĘŚCI, A CAŁOŚĆ ZOSTAŁA — kąt
 *   zajęty (Krzyż Wielkopolski). Tam miasto powstało
 *   Z CZĘŚCI wsi, która trwa dalej; tu obok powstało
 *   DRUGIE MIASTO, które się wchłonęło.
 * — ⚠⚠⚠ ZERO NAZWISKO OD MIEJSCA — kąt zajęty
 *   (Miłosław).
 * — ⚠⚠ ZERO SAMORZĄD DZIELI DROBNIEJ NIŻ KATASTER —
 *   kąt zajęty (Lwówek). DLATEGO LICZBY 16 OBRĘBÓW
 *   NIE PODAJĘ.
 * — ⚠⚠ ZERO JEDNA LICZBA, DWA RÓŻNE MIASTA — kąt
 *   zajęty (Stęszew). PORÓWNAŃ LICZBOWYCH MIĘDZY
 *   MIASTAMI NIE ROBIĘ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   NAMAWIANIA NA REMONT.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni 2,3 km² — podaję 2,34 km².
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE PODAJĘ największej wsi.
 * — NIE PODAJĘ daty połączenia obu miast.
 * — NIE WYMIENIAM nazwisk ani władcy.
 * — NIE PODAJĘ rzeki, lesistości ani wysokości n.p.m.
 * — NIE PORÓWNUJĘ liczby mieszkańców z rokiem 2000.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Bojanowo leży w powiecie rawickim i liczy 2 782
 *   mieszkańców (GUS, 31.12.2024) na 234 hektarach,
 *   czyli 2,34 kilometra kwadratowego, co daje
 *   1 188,9 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 8 163 osoby
 *   na 123,5 kilometra kwadratowego, czyli 67 osób
 *   na kilometr kwadratowy,
 * — gmina ma 17 sołectw i 28 miejscowości,
 * — akt lokacyjny miasto otrzymało 16 kwietnia 1638 r.,
 * — 20 sierpnia 1663 r. syn założyciela ulokował obok
 *   drugie, odrębne miasto nazwane od jego imienia —
 *   Bogusławów, dziś część Bojanowa,
 * — w gminie leżą m.in. Golina Wielka, Golinka,
 *   Wydartowo Pierwsze, Wydartowo Drugie,
 *   Wydartowo-Charta i Sułów Mały.
 */
export const BOJANOWO: CityContent = {
  slug: "bojanowo",
  h1: "Thermomix Bojanowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bojanowo — cena i prezentacja",
  seoDescription:
    "Thermomix w Bojanowie w powiecie rawickim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bojanowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bojanowie pod Rawiczem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bojanowa w powiecie rawickim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich siedemnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Bojanowo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwa miasta obok siebie, dziś jedno. 1638 i 1663.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bojanowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "drugie-obok",
      heading: "Drugie obok, zamiast większego w tym samym miejscu",
      paragraphs: [
        "Bojanowo dostało akt lokacyjny 16 kwietnia 1638 roku. Dwadzieścia pięć lat później, 20 sierpnia 1663 roku, syn założyciela nie rozbudował miasta ojca. Ulokował tuż obok drugie, osobne miasto, z własną nazwą wziętą od jego własnego imienia — Bogusławów.",
        "Przez jakiś czas stały obok siebie dwa miasta. Dziś jest jedno: Bogusławów jest częścią Bojanowa, a jego nazwa została w opisach historii. Kiedy dokładnie się połączyły, nie ustaliłam i nie będę zgadywać.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, któremu prawa nadano dwa razy — tam ten sam status dostawało dwukrotnie to samo miejsce. Tu są dwa różne akty dla dwóch różnych miast, które dopiero później stały się jednym.",
        "Piszę o tym, bo w kuchni robimy dokładnie to samo, tylko na mniejszą skalę.",
        "Czajnik zaczyna szwankować — kupujemy drugi i stawiamy obok. Deska się wysłużyła — dochodzi nowa, a stara zostaje „do mięsa”. Brakuje miejsca na przyprawy — dostawiamy półkę przy tej, która już jest. Za każdym razem to samo: łatwiej dołożyć obok, niż poprawić to, co już stoi.",
        "Po kilku latach i tak zlewa się to w jedno — tak jak Bogusławów z Bojanowem. Tylko że miasto ktoś przynajmniej lokował z planem, a kuchnia zrasta się sama, bez planu. Stąd szuflada, w której leżą trzy obieraczki i żadna nie jest ta dobra.",
        "Ruch jest jeden i mieści się w dwóch pytaniach. Przed dołożeniem: czy to, co mam, da się poprawić — naostrzyć, przestawić, wyczyścić? A jeśli naprawdę dokładam: czy ta nowa rzecz ma coś zastąpić, czy uzupełnić? Jeżeli zastąpić — to ta stara wychodzi z kuchni tego samego dnia, a nie „na razie zostaje”.",
        "Uczciwie o drugiej stronie, bo nie zawsze dokładanie jest błędem. Gdy w kuchni gotują dwie osoby naraz, dwa osobne stanowiska działają lepiej niż jedno duże — dwie deski, dwa noże, dwa miejsca przy blacie. Wtedy „drugie obok” nie jest bałaganem, tylko rozwiązaniem. Rzecz w tym, żeby to była decyzja, a nie przypadek.",
        "I uczciwie o sprzęcie, bo to ten sam problem. Thermomix ma sens wtedy, gdy coś zastępuje — kilka garnków, miskę, mikser, wagę. Jeśli miałby stanąć obok wszystkiego, co już macie, i niczego nie zdjąć z blatu, to jest dokładanie drugiego miasta zamiast uporządkowania pierwszego. Wtedy wolę to powiedzieć przed zakupem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bojanowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bojanowie"),
    sekcjaRaty("w Bojanowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Bojanowa",
      paragraphs: [
        "Bojanowo leży w powiecie rawickim i liczy 2 782 mieszkańców (GUS, 31.12.2024) na 234 hektarach, czyli na 2,34 kilometra kwadratowego — to daje tysiąc sto osiemdziesiąt osiem i dziewięć dziesiątych osoby na kilometr kwadratowy. Podaję powierzchnię za gminą, a nie zaokrągloną do jednego miejsca po przecinku, bo tylko z tą dokładniejszą liczbą gęstość się domyka. Cała gmina miejsko-wiejska to 8 163 osoby na 123,5 kilometra kwadratowego, czyli sześćdziesiąt siedem osób na kilometr. Ma siedemnaście sołectw i dwadzieścia osiem miejscowości. Akt lokacyjny miasto otrzymało 16 kwietnia 1638 roku, a 20 sierpnia 1663 roku obok stanęło drugie miasto — Bogusławów, dziś część Bojanowa.",
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

  districtsHeading: "Do których części Bojanowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedemnastu sołectw w gminie. Nazywają się między innymi: Golina Wielka, Golinka, Wydartowo Pierwsze, Wydartowo Drugie, Wydartowo-Charta i Sułów Mały. Wszędzie bez dopłaty.",
    "Dwie uwagi praktyczne. Pierwsza, adresowa: w gminie leżą aż trzy Wydartowa — Pierwsze, Drugie i Wydartowo-Charta — a osobno Golina Wielka i Golinka, więc przy umawianiu warto podać pełną nazwę, a nie samo „Wydartowo” czy „Golina”. Druga, językowa: nazwa miasta się odmienia, więc mówi się „do Bojanowa” i „w Bojanowie”, a nie „do Bojanowo”. I jeszcze jedno: nazwisko założyciela miasta brzmi tak samo jak nazwa — jeśli w rozmowie padnie „Bojanowski”, to zwykle chodzi o człowieka, a nie o miejsce.",
  ],
  districts: [],

  nearbyHeading: "Poza Bojanowo też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Rawicza, Miejskiej Górki, Krobi, Ponieca, Rydzyny i Leszna — wszędzie bezpłatnie, tak samo jak w samym Bojanowie.",
  ],
  nearbyTowns: ["Rawicz", "Miejska Górka", "Krobia", "Poniec", "Rydzyna", "Leszno"],

  about: blokOMnie("do Bojanowa", "w Bojanowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bojanowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedemnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Adresowa: w gminie są trzy Wydartowa — Pierwsze, Drugie i Wydartowo-Charta — oraz osobno Golina Wielka i Golinka, więc lepiej podać pełną nazwę wsi. Językowa: nazwa się odmienia, czyli „do Bojanowa” i „w Bojanowie”, nie „do Bojanowo”.",
    },
    ...faqWspolne("w Bojanowie"),
    {
      question: "Mam w kuchni trzy obieraczki i dwie deski. Jak to uporządkować?",
      answer:
        "To nie jest bałagan, tylko skutek dokładania. Bojanowo jest tu dobrym obrazem: miasto lokowano w 1638 roku, a w 1663 obok postawiono drugie, osobne miasto zamiast rozbudowywać pierwsze — i po latach zrosły się w jedno. W kuchni dzieje się to samo, tylko szybciej: czajnik szwankuje, więc dochodzi drugi; deska się wysłużyła, więc nowa staje obok starej. Ruch jest prosty i mieści się w dwóch pytaniach. Przed dołożeniem: czy to, co mam, da się poprawić — naostrzyć, przestawić, umyć? A jeśli naprawdę dokładam: czy nowa rzecz ma coś zastąpić, czy uzupełnić? Gdy zastąpić, stara wychodzi z kuchni tego samego dnia, a nie „na razie zostaje”. Wyjątek jest jeden i jest uczciwy: gdy gotują dwie osoby naraz, dwa osobne stanowiska naprawdę działają lepiej niż jedno.",
    },
    {
      question: "Czy Thermomix zastąpi mi sprzęt, który już mam?",
      answer:
        "Część sprzętu tak, i to jest cały sens — kilka garnków, misa, mikser, waga, a często też parowar. Ale warto sprawdzić to na sobie, a nie na ulotce. Jeśli po zakupie urządzenie stanie obok wszystkiego, co macie, i nic nie zejdzie z blatu ani z szafki, to znaczy, że dokładacie kolejną rzecz zamiast porządkować. Przy prezentacji zwykle pytam wprost, co u Was zniknie z blatu — i jeśli odpowiedź brzmi „nic”, mówię o tym otwarcie, bo to argument przeciwko zakupowi.",
    },
  ],

  geo: { lat: 51.7075, lng: 16.7483 },
};
