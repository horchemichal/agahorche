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
 * BIAŁA RAWSKA — gmina miejsko-wiejska w powiecie rawskim.
 * MIASTO 2 972, GMINA 10 706 (GUS 31.12.2024). 57 SOŁECTW,
 * 60 miejscowości (dane urzędu) — najwięcej w tej fali.
 * UWAGA: strona urzędu ZANIŻA gminę o ok. 2 000 osób
 * i ZAWYŻA miasto. Korzystam wyłącznie z GUS.
 *
 * SADY — 5 000 ha powierzchni gminy, roczna produkcja ok.
 * 150 TYSIĘCY TON owoców, głównie jabłek. To jest tożsamość
 * tego miasta i najmocniejszy fakt strony.
 *
 * PRAWA MIEJSKIE — ROZBIEŻNE: 22 grudnia 1521 r. (Zygmunt I
 * Stary, sejm w Piotrkowie, na prośbę bpa Jakuba Buczackiego)
 * albo druga połowa XV w. (1472–1498). Piszę OBIE WERSJE.
 * UTRATA 1870, ODZYSKANIE: częściowo 1918, pełne 1925.
 *
 * OBALONE: kościół to św. WOJCIECHA, nie „Piotra i Pawła".
 * OBALONE: kolejką wąskotorową NIE DOJEDZIE się do Białej
 * Rawskiej — pociągi turystyczne kursują na odcinku
 * ROGÓW–JEŻÓW. Nie piszę o niej jako o połączeniu z miastem.
 * OBALONE: „760-letnia historia" ze strony urzędu liczy od
 * pierwszej wzmianki, nie od praw miejskich.
 * PAŁAC: poł. XIX w., proj. Franciszek Maria Linci, styl
 * włoski z krenelażem. OBECNEJ FUNKCJI NIE PODAJĘ —
 * nie potwierdzono na 2026 r.
 * Rzeka BIAŁKA. Wydarzenia: Festyn Bialski, Dożynki,
 * w Babsku „Spotkania z muzyką Chopina" — TERMINÓW NIE PODAJĘ.
 *
 * KĄT: SUROWE KONTRA GOTOWANE — co obróbka cieplna daje,
 * a co zabiera. Kąt z miasta, w którym owoc jest jednocześnie
 * surowcem i produktem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to urządzenie robi obie rzeczy i że wybór między nimi
 *   jest realną decyzją smakową, a nie oczywistością,
 * — co gotowanie DAJE: łączy smaki, zmiękcza, usuwa ostrość
 *   i goryczkę, wydobywa słodycz,
 * — co ZABIERA: zapach świeżości, chrupkość, kwasowość,
 *   wyrazistość pojedynczego składnika,
 * — że część rzeczy warto zostawić surowo NA KOŃCU, już po
 *   gotowaniu — i że to najprostszy sposób na uratowanie
 *   nudnego dania,
 * — że sok, mus i przecier to trzy różne decyzje, nie trzy
 *   nazwy tego samego,
 * — i ODMOWA: nie mówię nic o wartościach odżywczych,
 *   witaminach ani o tym, co jest „zdrowsze".
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ODŻYWCZYCH: witaminy,
 *   „utrata wartości", „zdrowsze". ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PORAD o surowych produktach ryzykownych
 *   mikrobiologicznie.
 * — ŻADNYCH NAZW FIRM ani grup producenckich.
 * — NIE PISZĘ o kolejce jako o dojeździe do miasta.
 * — NIE ROBIĘ TŁA z cen skupu ani z sytuacji sadowników.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Jabłko" i „odmiany"
 * mają własne miasta i dotyczą SUROWCA. „Kompoty i musy",
 * „soki i moszcze", „powidła" dotyczą PRZETWORÓW. „Owoc,
 * który nie poszedł do skupu" dotyczy jakości. Tutaj chodzi
 * o DECYZJĘ: gotować czy nie i co się przez to traci.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM daty praw miejskich — podaję obie wersje.
 * — NIE PODAJĘ obecnej funkcji pałacu.
 * — NIE PODAJĘ dat budowy kościoła ani numerów rejestru.
 * — NIE PODAJĘ terminów wydarzeń w 2026 r.
 * — NIE PRZYPISUJĘ Białej Rawskiej wpisu na Listę Produktów
 *   Tradycyjnych — nie ma własnego.
 * — NIE MYLĘ Białej Rawskiej z RAWĄ MAZOWIECKĄ, Białą
 *   Podlaską, Białą Piską ani Bielskiem-Białą.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 972, gmina 10 706 mieszkańców, 57 sołectw,
 * — sady zajmują 5 000 ha gminy, roczna produkcja ok. 150 tys.
 *   ton owoców, głównie jabłek,
 * — prawa miejskie: przywilej Zygmunta I Starego z 22 grudnia
 *   1521 r., choć część źródeł wskazuje drugą połowę XV w.;
 *   utrata w 1870 r., pełne przywrócenie w 1925 r.,
 * — kościół parafialny pod wezwaniem świętego Wojciecha,
 * — pałac z połowy XIX w., proj. Franciszek Maria Linci,
 * — przez gminę płynie Białka,
 * — początki osadnictwa to gród kasztelański z XII w.
 */
export const BIALA_RAWSKA: CityContent = {
  slug: "biala-rawska",
  h1: "Thermomix Biała Rawska – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Biała Rawska (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Białej Rawskiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Biała Rawska — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Białej Rawskiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Białej Rawskiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Biała Rawska i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gotowanie coś daje i coś zabiera. Warto wiedzieć co.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Białej Rawskiej – jak wygląda prezentacja?",
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
      id: "surowe-i-gotowane",
      heading: "Pięć tysięcy hektarów sadów — czyli o tym, co gotowanie daje, a co zabiera",
      paragraphs: [
        "Sady zajmują w gminie Biała Rawska pięć tysięcy hektarów, a roczne zbiory to około stu pięćdziesięciu tysięcy ton owoców, w większości jabłek. To nie jest miasto, które ma sady obok siebie — to miasto, które z nich się składa. Samo liczy niecałe trzy tysiące mieszkańców, cała gmina ponad dziesięć, w pięćdziesięciu siedmiu sołectwach.",
        "W takim miejscu warto napisać o rzeczy, o której przy urządzeniu do gotowania mówi się najmniej: o tym, że nie wszystko trzeba ugotować, i o tym, co się przez gotowanie zyskuje, a co traci.",
        "Bo to urządzenie robi obie rzeczy. Potrafi rozdrobnić na surowo i potrafi ugotować. I wybór między jednym a drugim to jest prawdziwa decyzja smakowa, a nie oczywistość — tylko nikt jej tak nie stawia, bo skoro sprzęt gotuje, to się gotuje.",
        "Co gotowanie daje. Łączy smaki: kilka składników przestaje być obok siebie, a zaczyna być jednym daniem. Zmiękcza to, czego inaczej się nie zje. Zdejmuje ostrość z cebuli i czosnku, zbiera goryczkę z niektórych warzyw, wydobywa słodycz z marchewki, dyni, buraka i właśnie z jabłek. To są rzeczy, których na surowo nie da się osiągnąć niczym.",
        "Co zabiera. Zapach świeżości — ten pierwszy, który czuć nad deską, a którego nad garnkiem już nie ma. Chrupkość. Kwasowość, która na surowo jest wyraźna, a po ugotowaniu robi się okrągła i grzeczna. I wyrazistość pojedynczego składnika: ugotowane warzywa upodabniają się do siebie bardziej, niż ktokolwiek się spodziewa.",
        "Z tego wynika najprostszy chwyt, jaki znam na nudne danie, i naprawdę warto go zapamiętać: część składników zostawić surowo i dodać na końcu, już po gotowaniu. Świeża natka, surowy czosnek, starte jabłko do gotowanej sałatki, odrobina surowej cebuli, skórka z cytryny, świeży ogórek. Danie od razu przestaje być jednorodne — i to zwykle wystarcza.",
        "Przy owocach dochodzi jeszcze jedno rozróżnienie, które w mieście sadowniczym nie wymaga tłumaczenia, ale gdzie indziej już tak: sok, mus i przecier to trzy różne decyzje, a nie trzy nazwy tego samego. Różnią się tym, co zostaje w środku, a co zostaje na sicie — i to jest właśnie decyzja, którą podejmujecie Wy, nie urządzenie.",
        "I granica: nie napiszę Wam ani słowa o tym, co jest zdrowsze, ile czego się przy gotowaniu traci ani co zrobić, żeby coś zachować. To są twierdzenia z dziedziny żywienia, a ja sprzedaję sprzęt kuchenny i o smaku mówię chętnie, o zdrowiu nie mówię wcale.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Białej Rawskiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie w domu owoce z własnego sadu — powiedzcie przy umawianiu. Na własnym surowcu widać różnicę najlepiej i nie trzeba niczego przyjmować na wiarę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Białej Rawskiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bialskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko trzy tysiące mieszkańców, a cała gmina ponad dziesięć i pół tysiąca, w pięćdziesięciu siedmiu sołectwach — dane ze strony urzędu są tu mocno rozjechane w obie strony, więc podaję te z GUS-u. Początki miejscowości to gród kasztelański z dwunastego wieku. O prawach miejskich źródła spierają się do dziś: część wskazuje drugą połowę piętnastego wieku, część przywilej Zygmunta I Starego z 22 grudnia 1521 roku, wydany na sejmie w Piotrkowie. Prawa zostały odebrane w 1870 roku i w pełni przywrócone w 1925. W mieście stoi kościół świętego Wojciecha oraz pałac z połowy dziewiętnastego wieku projektu Franciszka Marii Linciego, w stylu włoskim, z krenelażem. Przez gminę płynie Białka, a w Babsku odbywają się coroczne spotkania z muzyką Chopina.",
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

  districtsHeading: "Do których części gminy Biała Rawska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich pięćdziesięciu siedmiu sołectw gminy, łącznie z Babskiem. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Białą Rawską też przyjadę",
  nearbyParagraphs: [
    "Rawa Mazowiecka, Mszczonów, Nowe Miasto nad Pilicą, Skierniewice i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rawa Mazowiecka", "Skierniewice", "Drzewica"],

  about: blokOMnie("do Białej Rawskiej", "w Białej Rawskiej i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Białej Rawskiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich pięćdziesięciu siedmiu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Biała Rawska to osobne miasto, nie dzielnica Rawy Mazowieckiej — i nie ma nic wspólnego z Białą Podlaską, Białą Piską ani Bielskiem-Białą.",
    },
    ...faqWspolne("w Białej Rawskiej"),
    {
      question: "Czy w Thermomixie wszystko trzeba gotować?",
      answer:
        "Nie. Urządzenie rozdrabnia też na surowo i wybór między surowym a gotowanym to realna decyzja smakowa. Gotowanie łączy smaki, zmiękcza, zdejmuje ostrość i wydobywa słodycz — ale zabiera zapach świeżości, chrupkość, kwasowość i wyrazistość pojedynczego składnika.",
    },
    {
      question: "Jak uratować danie, które wyszło nijakie?",
      answer:
        "Najprostszy sposób: dodać coś surowego na samym końcu, już po gotowaniu. Świeżą natkę, surowy czosnek, starte jabłko, odrobinę surowej cebuli, skórkę z cytryny. Danie natychmiast przestaje być jednorodne i zwykle to wystarcza.",
    },
    {
      question: "Czy gotowanie w Thermomixie jest zdrowsze?",
      answer:
        "Tego nie powiem, bo nie mam do tego kompetencji. Mówię o smaku, konsystencji i o tym, ile pracy urządzenie zdejmuje z rąk. Twierdzenia o wartościach odżywczych i o tym, co zdrowsze, zostawiam dietetykom.",
    },
  ],

  geo: { lat: 51.8077, lng: 20.4725 },
};
