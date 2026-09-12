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
 * SZADEK — gmina miejsko-wiejska w powiecie zduńskowolskim.
 * MIASTO 1 745, GMINA 7 025 (GUS 31.12.2024). Miasto zajmuje
 * 17,9 km² — największe obszarowo w fali przy najmniejszej
 * liczbie mieszkańców. 27 SOŁECTW + osiedle
 * Szadkowice–Ogrodzim (dokument gminny z 2020 r.).
 *
 * ⚠ HIPOTEZA Z BRIEFU OBALONA: Szadek NIE odzyskał praw
 * miejskich po 2010 r. Odzyskał je W 1919 r., po odzyskaniu
 * niepodległości. Utrata 1870 r. Pierwsza zachowana wzmianka
 * 1295 r., DOKUMENT LOKACYJNY ZAGINĄŁ — nie znamy daty
 * lokacji i tego nie ukrywam.
 * 1331 r. — miasto zniszczone; piszę o tym neutralnie,
 * bez akcentów narodowościowych.
 *
 * KOŚCIÓŁ par. pw. Wniebowzięcia NMP i św. Jakuba Apostoła —
 * zbudowany 1333–1335, gotycki, rozbudowa poł. XV w.,
 * przebudowy 1551, 1738 i w XIX w., sklepienia gwiaździste
 * i sieciowe. NID: „jeden z najcenniejszych i najlepiej
 * zachowanych obiektów gotyckich na ziemi sieradzkiej".
 * NIE PRZYPISUJĘ FUNDACJI KAZIMIERZOWI WIELKIEMU.
 *
 * PRODUKTY TRADYCYJNE MRiRW — najbogatsze miasto w całej fali:
 * „wędzonki szadkowskie" (wpis 21 września 2010 r., produkty
 * mięsne), „kiełbasy szadkowskie wędzone podsuszane", „boczek
 * wędzony łuskany z Szadku", „słonina wędzona z Szadku",
 * „chleby żytnie szadkowskie". DAT POZOSTAŁYCH WPISÓW
 * NIE PODAJĘ.
 * ⚠ Opis MRiRW wymienia wyciąg ze skrzypu i pokrzywy przy
 * peklowaniu — NIE SUGERUJĘ ŻADNYCH WŁAŚCIWOŚCI ZDROWOTNYCH
 * tych składników ani wędlin.
 *
 * REZERWAT „JAMNO" — utworzony 1959 r., 22,35 ha, las
 * dębowo-jodłowy, Nadleśnictwo Poddębice.
 * OBALONE: rezerwat NIE powstał w 2010 r. — 2010 to data
 * zarządzenia porządkującego.
 *
 * „BIULETYN SZADKOWSKI" — recenzowany rocznik naukowy
 * poświęcony Szadkowi, wydawany przez Wydawnictwo
 * Uniwersytetu Łódzkiego. Miasto liczące 1 745 mieszkańców
 * ma własne czasopismo naukowe — to jest oś tej strony.
 *
 * KĄT: KUCHENNE PRZEKONANIA, KTÓRYCH NIKT NIE SPRAWDZIŁ.
 * Miasto z własnym recenzowanym rocznikiem jest jedynym
 * właściwym miejscem na stronę o tym, skąd biorą się kuchenne
 * pewniki i które z nich potrafię obronić, a których nie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w każdej kuchni funkcjonują zdania powtarzane jako
 *   pewniki, których nikt nigdy nie sprawdził,
 * — że część z nich jest prawdziwa, część jest przesądem,
 *   a największa część to zasady prawdziwe kiedyś i przeniesione
 *   na sprzęt, którego wtedy nie było,
 * — trzy konkretne przykłady, przy których mogę powiedzieć,
 *   skąd się wzięły: mieszanie w jedną stronę, „nie zaglądaj
 *   pod pokrywkę", „sól dopiero na końcu",
 * — że najuczciwsza odpowiedź na wiele z nich brzmi
 *   „nie wiem" i że wolę ją niż wymyśloną,
 * — że przy nowym urządzeniu warto sprawdzać samemu, bo to
 *   jedyny sposób, żeby odróżnić zasadę od nawyku,
 * — i ODMOWA: nie rozstrzygam przekonań zdrowotnych ani
 *   dotyczących bezpieczeństwa żywności.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — NIE ROZSTRZYGAM przekonań o zdrowiu, wartościach
 *   odżywczych ani bezpieczeństwie żywności. ODMOWA STOI
 *   W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także przy wędlinach
 *   i ziołach z opisu produktu tradycyjnego.
 * — ŻADNYCH NAZW FIRM ani zakładów masarskich.
 * — NIE PISZĘ o utracie jednej trzeciej mieszkańców podczas
 *   II wojny ani o niczym z tym związanym.
 * — NIE ROBIĘ TŁA z wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Porady z grup
 * internetowych" dotyczą źródła współczesnego i wymiany
 * między użytkownikami. „Zapisywanie" (Chmielnik) dotyczy
 * archiwum własnych przepisów. „Danie nie wyszło i nie
 * wiadomo dlaczego" dotyczy diagnozy. Tutaj chodzi
 * o PRZEKAZ USTNY: o zdania, które zna każdy, a których
 * źródła nie zna nikt.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty lokacji miasta — dokument zaginął.
 * — NIE PRZYPISUJĘ budowy kościoła Kazimierzowi Wielkiemu.
 * — NIE PODAJĘ podstawy prawnej przywrócenia praw w 1919 r.
 * — NIE PODAJĘ dat wpisu czterech z pięciu produktów.
 * — NIE PODAJĘ nazwy rzeki — źródła jej nie wymieniają.
 * — NIE PODAJĘ imprez cyklicznych — brak potwierdzenia.
 * — NIE MYLĘ Szadku z SZADKIEM w gminie Blizanów
 *   (wielkopolskie) ani z Szadkiem-Kolonią.
 * — districts: osiedle Szadkowice–Ogrodzim to jednostka
 *   gminy, nie dzielnica miasta. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 745, gmina 7 025 mieszkańców; 27 sołectw,
 * — pierwsza zachowana wzmianka z 1295 r.; dokument lokacyjny
 *   zaginął; utrata praw miejskich w 1870 r., odzyskanie
 *   w 1919 r.,
 * — kościół parafialny pw. Wniebowzięcia NMP i świętego Jakuba
 *   Apostoła zbudowany w latach 1333–1335, ze sklepieniami
 *   gwiaździstymi i sieciowymi; Narodowy Instytut Dziedzictwa
 *   nazywa go jednym z najcenniejszych obiektów gotyckich
 *   ziemi sieradzkiej,
 * — na Liście Produktów Tradycyjnych Ministerstwa Rolnictwa
 *   figuruje pięć produktów z Szadku, w tym wędzonki
 *   szadkowskie wpisane 21 września 2010 r. i chleby żytnie
 *   szadkowskie,
 * — rezerwat przyrody Jamno utworzony w 1959 r., 22,35 ha,
 * — „Biuletyn Szadkowski" to recenzowany rocznik naukowy
 *   poświęcony miastu, wydawany przez Wydawnictwo
 *   Uniwersytetu Łódzkiego.
 */
export const SZADEK: CityContent = {
  slug: "szadek",
  h1: "Thermomix Szadek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szadek (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Szadku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szadek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szadku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szadku z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Szadek i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Część kuchennych pewników to zasady sprzed sprzętu, którego wtedy nie było.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szadku – jak wygląda prezentacja?",
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
      id: "kuchenne-przekonania",
      heading: "Miasto na tysiąc siedemset osób z własnym rocznikiem naukowym — o kuchennych pewnikach",
      paragraphs: [
        "Szadek liczy tysiąc siedemset czterdzieści pięć mieszkańców i ma coś, czego nie ma większość miast stukrotnie od niego większych: własne recenzowane czasopismo naukowe. „Biuletyn Szadkowski” ukazuje się jako rocznik nakładem Wydawnictwa Uniwersytetu Łódzkiego i jest poświęcony wyłącznie temu jednemu miastu. Ktoś tu uznał, że rzeczy, które wszyscy wiedzą, warto raz sprawdzić i zapisać porządnie.",
        "To najlepsze miejsce w całym moim serwisie na jedyną stronę o kuchennych pewnikach — zdaniach, które zna każdy i których pochodzenia nie zna nikt.",
        "Bo w każdej kuchni takie zdania są. Mieszaj w jedną stronę. Nie zaglądaj pod pokrywkę. Sól dopiero na końcu. Nie dolewaj zimnej wody. Ciasto musi odpocząć. Powtarzamy je z pełnym przekonaniem, bo powtarzała je osoba, która nauczyła nas gotować, a ona powtarzała je za swoją. Nikt nie pyta dlaczego, bo nie ma powodu — one po prostu działają albo się wydaje, że działają.",
        "Z mojego doświadczenia dzielą się na trzy grupy. Część jest po prostu prawdziwa i ma dobre uzasadnienie. Część jest przesądem, uroczym, ale bez znaczenia — mieszanie w jedną stronę należy do tej grupy i nie znam żadnego powodu, dla którego kierunek miałby cokolwiek zmieniać. A największa grupa jest najciekawsza: to zasady, które były prawdziwe, ale w innych warunkach. Przy innym garnku, przy innym piecu, przy innej mące, przy sprzęcie, którego dzisiaj nikt nie ma.",
        "Świetny przykład to „nie zaglądaj pod pokrywkę”. Przy piecu, w którym trudno było odzyskać temperaturę, to była poważna rada. W zamkniętym naczyniu tego urządzenia sytuacja jest inna: zaglądanie nie tyle wychładza, ile wypuszcza parę i skropliny, więc konsekwencje są zupełnie inne niż te, o których myślała babcia. Zasada została, powód się zmienił.",
        "Podobnie z solą na końcu. To jest zdanie, które w różnych kuchniach znaczy trzy różne rzeczy: raz chodzi o strukturę, raz o to, żeby smak nie skoncentrował się przy odparowaniu, raz o zwykłą kolejność doprawiania. A w zamkniętym naczyniu prawie nic nie odparowuje, więc jeden z tych trzech powodów po prostu odpada.",
        "I teraz rzecz, którą uważam za najważniejszą na tej stronie: przy bardzo wielu takich zdaniach najuczciwsza odpowiedź brzmi „nie wiem”. Nie wiem, skąd się wzięło. Nie wiem, czy to działa. Wolę to powiedzieć, niż dopowiedzieć wyjaśnienie, które brzmi mądrze i którego nie umiem obronić — a takich wyjaśnień krąży w internecie mnóstwo i część z nich wygląda bardzo profesjonalnie.",
        "Nowe urządzenie w kuchni to dobra okazja, żeby część tych zdań sprawdzić samemu. Zrobić raz tak, raz inaczej i zobaczyć, czy jest różnica. To jedyny sposób, żeby odróżnić zasadę od nawyku — i, szczerze mówiąc, jedna z przyjemniejszych rzeczy w gotowaniu.",
        "Granica jest jedna i twarda: nie rozstrzygam przekonań, które dotyczą zdrowia albo bezpieczeństwa jedzenia. Co jest zdrowsze, co szkodzi, jak długo coś może stać, czy wolno coś odgrzewać drugi raz — tego nie skomentuję nawet wtedy, gdy „wszyscy wiedzą”. To nie jest teren, na którym moja opinia ma jakąkolwiek wartość.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szadku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie w głowie kuchenne zdanie, które Was zawsze intrygowało — zapytajcie przy spotkaniu. Odpowiem albo powiem, że nie wiem, i to drugie zdarza się częściej, niż sprzedawcy przyznają.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szadku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla szadkowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy tysiąc siedemset czterdzieści pięć mieszkańców, a cała gmina ponad siedem tysięcy, w dwudziestu siedmiu sołectwach. Pierwsza zachowana wzmianka o Szadku pochodzi z 1295 roku, ale dokument lokacyjny zaginął, więc daty nadania praw miejskich zwyczajnie nie znamy — prawa odebrano miastu w 1870 roku i odzyskało je w 1919, po odzyskaniu niepodległości. Najcenniejszy zabytek to kościół pod wezwaniem Wniebowzięcia Najświętszej Marii Panny i świętego Jakuba Apostoła, zbudowany w latach 1333–1335, ze sklepieniami gwiaździstymi i sieciowymi; Narodowy Instytut Dziedzictwa nazywa go jednym z najlepiej zachowanych obiektów gotyckich ziemi sieradzkiej. W gminie leży też rezerwat Jamno, utworzony w 1959 roku na dwudziestu dwóch hektarach lasu dębowo-jodłowego. Na Liście Produktów Tradycyjnych Ministerstwa Rolnictwa figuruje pięć produktów z Szadku — więcej niż w niejednym dużym mieście.",
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

  districtsHeading: "Do których części gminy Szadek dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu siedmiu sołectw gminy, w tym do Szadkowic i Ogrodzimia. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Szadek też przyjadę",
  nearbyParagraphs: [
    "Zduńska Wola, Sieradz, Poddębice, Łask, Warta i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zduńska Wola", "Sieradz", "Poddębice", "Łask", "Warta"],

  about: blokOMnie("do Szadku", "w Szadku i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szadku bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu siedmiu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Szadek w powiecie zduńskowolskim — nie o wieś Szadek w gminie Blizanów w wielkopolskim ani o Szadek-Kolonię.",
    },
    ...faqWspolne("w Szadku"),
    {
      question: "Czy trzeba mieszać w jedną stronę?",
      answer:
        "Nie znam żadnego powodu, dla którego kierunek miałby cokolwiek zmieniać, i zaliczam to zdanie do uroczych przesądów. W tym urządzeniu i tak nie mieszacie ręcznie, więc pytanie odpada samo.",
    },
    {
      question: "Czy można zaglądać w trakcie gotowania?",
      answer:
        "Można, ale konsekwencje są inne, niż zakłada stara zasada. Przy dawnym piecu chodziło o utratę temperatury; tutaj zaglądanie wypuszcza przede wszystkim parę i skropliny. Zasada została, powód się zmienił — i to jest typowe dla wielu kuchennych pewników.",
    },
    {
      question: "Czy Thermomix jest zdrowszy niż zwykłe gotowanie?",
      answer:
        "Tego nie rozstrzygnę i nie będę udawać, że umiem. O smaku, konsystencji i o tym, ile pracy urządzenie zdejmuje z rąk, powiem chętnie. Twierdzenia o zdrowiu, wartościach odżywczych i bezpieczeństwie żywności zostawiam ludziom, którzy się na tym znają.",
    },
  ],

  geo: { lat: 51.6916, lng: 18.9765 },
};
