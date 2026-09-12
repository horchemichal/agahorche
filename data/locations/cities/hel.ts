import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * HEL — gmina miejska w powiecie puckim, 2 755 mieszkańców
 * (31.12.2024, GUS). Brief mówił 3 000 — zawyżone.
 * Powierzchnia 21,72 km² wg BIP miasta (polskawliczbach podaje
 * 23,0; geoportal-krajowy podaje 95 km² i jest to wartość
 * niewiarygodna — nie używam tego serwisu dla Helu).
 * Około 33 km od stałego lądu.
 *
 * PRAWA MIEJSKIE — OBALONA NIEPRAWDA: krążący rok 1893 NIE
 * WYSTĘPUJE W ŻADNYM WIARYGODNYM ŹRÓDLE. Prawidłowo: prawa
 * miejskie w II poł. XIII w. od księcia ŚWIĘTOPEŁKA II (ok. 1266),
 * potwierdzone przywilejem krzyżackim w 1378 r.; UTRATA PRAW
 * W 1872 r.; ODZYSKANIE 22 MAJA 1963 r. rozporządzeniem Rady
 * Ministrów.
 *
 * PORT: Hel jest NAJWIĘKSZYM POLSKIM PORTEM RYBACKIM POD WZGLĘDEM
 * WIELKOŚCI WYŁADUNKÓW — 16 155 t pierwszej sprzedaży w 2025 r.
 * wobec 14 164 t w Kołobrzegu i 9 284 t we Władysławowie (dane
 * Komisji Europejskiej / EUMOFA, aktualizacja 19.02.2026).
 * UWAGA — TO WYMAGA DOPRECYZOWANIA I W TEKŚCIE JE PODAJĘ:
 * pod względem WARTOŚCI wyładunków pierwszy jest KOŁOBRZEG
 * (9 mln EUR wobec 6 mln EUR w Helu), a pod względem LICZBY
 * KUTRÓW — WŁADYSŁAWOWO. Hel łowi głównie szprota i śledzia.
 * Port prowadzi spółka, której 100% udziałów należy do gminy
 * miasta Hel (od 3 listopada 2010 r.). NAZWY SPÓŁKI NIE PODAJĘ.
 *
 * PRODUKT Z LISTY PRODUKTÓW TRADYCYJNYCH: HELSKIE ANCHOVIS
 * (zasolony filet ze szprota) — wpis 31 MAJA 2022 r., 184.
 * produkt z województwa pomorskiego. WYMIENIAM JEDNYM ZDANIEM,
 * ale NIE ROBIĘ Z NIEGO KĄTA: ryba ma w serwisie dwie własne
 * strony, a sól i wędzenie po jednej.
 *
 * FOKARIUM: placówka naukowa Stacji Morskiej im. prof. Krzysztofa
 * Skóry Instytutu Oceanografii UG, działa od 1999 r.; impulsem
 * była rehabilitacja foki podjętej z plaży w Juracie 31 marca
 * 1992 r. To NIE JEST zoo.
 *
 * MUZEUM RYBOŁÓWSTWA — oddział Narodowego Muzeum Morskiego
 * w Gdańsku, w dawnym kościele z XV w. (pierwsza wzmianka 1417),
 * w latach 1525–1945 świątyni ewangelickiej; wieża widokowa 21 m;
 * remont zakończony w 2016 r.
 *
 * KĄT: PANIERKA. Trzy miski, mąka, jajko, bułka tarta — jedna
 * z najbardziej uciążliwych czynności w polskiej kuchni, i taka,
 * przy której to urządzenie pomaga tylko częściowo, a smażyć
 * nie będzie w ogóle.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie NIE PANIERUJE i NIE SMAŻY, i że nie ma na to
 *   żadnej funkcji ani nakładki,
 * — że robi jedną część roboty naprawdę dobrze: bułkę tartą,
 *   mielone orzechy, płatki, sezam, zmielone przyprawy do panierki,
 * — że rozbełta jajko i wymiesza mąkę z przyprawami — ale że to
 *   drobiazg i nie warto go sprzedawać jako przewagi,
 * — że trzech misek nie unikniecie i że to jest normalne,
 * — że kotlet zostaje na patelni, a patelnia zostaje w kuchni,
 * — i ODMOWA: nic o surowym mięsie, o tym, jak głęboko ma być
 *   wysmażony, ani o tłuszczu do smażenia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O SUROWYM MIĘSIE, DROBIU I RYBIE: przechowywanie,
 *   temperatura obróbki, mycie deski. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PORAD O TŁUSZCZACH DO SMAŻENIA, temperaturze dymienia
 *   ani o ponownym użyciu oleju.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM, w tym spółki portowej.
 * — NIE DOTYKAM OBRONY HELU 1939 r. ANI WOJNY. Kapitulacja
 *   2 października 1939 r., 3 600 jeńców, wysadzona latarnia —
 *   to nie jest scenografia dla strony o sprzęcie kuchennym.
 * — NIE DOTYKAM wysiedleń i losów ludności kaszubskiej.
 * — NIE DOTYKAM raportu NIK z 18 marca 2024 r. o erozji i
 *   samowolach na Półwyspie ani cen mieszkań.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ciasto naleśnikowe —
 * i patelnia, której to urządzenie nie zastępuje" dotyczy CIASTA
 * LANEGO i naleśników. „Czerstwy chleb" (Bodzentyn) dotyczy
 * drugiego życia bochenka i marnowania — bułkę tartą wymieniam
 * tu tylko jako jeden ze składników panierki, a nie jako temat.
 * „Maszynka do mięsa" (Miastko) dotyczy mielenia. „Ryba" i „ryby"
 * mają własne strony. Tutaj chodzi o SAM PROCES PANIEROWANIA
 * i o trzy miski.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku 1893 jako praw miejskich. To nieprawda.
 * — NIE PISZĘ, że Hel jest największym portem rybackim bez
 *   doprecyzowania kryterium.
 * — NIE PODAJĘ nazwy spółki portowej ani liczby zatrudnionych.
 * — NIE PODAJĘ nazwiska burmistrza — nie potwierdzono.
 * — NIE PODAJĘ liczby fok ani frekwencji fokarium.
 * — NIE PODAJĘ powierzchni miasta jako liczby pewnej — źródła
 *   się różnią; w tekście jej nie ma.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 2 755 mieszkańców (31.12.2024, GUS), gmina miejska, ok. 33 km
 *   od stałego lądu,
 * — prawa miejskie w II poł. XIII w. od Świętopełka II, utracone
 *   w 1872 r., odzyskane 22 maja 1963 r.,
 * — największy polski port rybacki pod względem wielkości
 *   wyładunków (16,2 tys. t w 2025 r., dane KE/EUMOFA); pod
 *   względem wartości pierwszy jest Kołobrzeg,
 * — port prowadzi spółka w 100% należąca do gminy,
 * — helskie anchovis na Liście Produktów Tradycyjnych od 31 maja
 *   2022 r.,
 * — fokarium Stacji Morskiej Uniwersytetu Gdańskiego, od 1999 r.,
 * — Muzeum Rybołówstwa w dawnym kościele z XV w., wieża 21 m.
 */
export const HEL: CityContent = {
  slug: "hel",
  h1: "Thermomix Hel – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Hel (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Helu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Hel — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Helu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Helu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — trzydzieści kilometrów po mierzei też.",

  highlights: highlightyStandardowe("Hel i cały półwysep"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzech misek nie unikniecie. Patelni też nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Helu – jak wygląda prezentacja?",
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
      id: "panierka",
      heading: "Miasto, które przestało być miastem i wróciło — czyli o panierce i trzech miskach",
      paragraphs: [
        "Hel dostał prawa miejskie jeszcze od księcia Świętopełka II, w drugiej połowie trzynastego wieku, a Krzyżacy potwierdzili je w 1378 roku. W 1872 roku je stracił i przez dziewięćdziesiąt jeden lat miastem nie był. Odzyskał je 22 maja 1963 roku. Przy okazji sprostowanie, bo w sieci krąży inna data: rok 1893 nie ma z prawami miejskimi Helu nic wspólnego.",
        "Napiszę tu o panierce. O najzwyklejszej czynności, którą robi się w każdym domu i której nikt nie lubi — i o tym, że to urządzenie rozwiązuje z niej dokładnie jedną trzecią problemu.",
        "Zacznę od tego, czego nie zrobi, bo to jest cała reszta. Nie panieruje. Nie ma takiej funkcji, nie ma nakładki, nie ma sposobu. I nie smaży — o tym pisałam już przy innym mieście, ale powtórzę, bo tu jest to sedno: w środku nie ma jak wysuszyć powierzchni, więc panierka z tego urządzenia byłaby miękka. Kotlet zostaje na patelni. Patelnia zostaje w kuchni. Kto Wam mówi, że po zakupie odstawicie patelnię, po prostu nie robił schabowego.",
        "Trzech misek też nie unikniecie — mąka, jajko, bułka tarta — i to jest normalne. Żaden sprzęt tego nie skróci, bo to nie jest problem mocy, tylko kolejności.",
        "A teraz to, co robi, i robi dobrze, choć jest to jedna trzecia całości: przygotowuje to, co w tych miskach.",
        "Bułka tarta z suchego pieczywa, w kilkanaście sekund, o grubości, jaką sami wybierzecie — grubsza do kotleta, drobniejsza do ryby. Mielone orzechy i migdały, jeśli robicie panierkę bez bułki. Zmielone płatki owsiane. Sezam. I przyprawy do mąki: papryka, czosnek granulowany, pieprz, zioła — zmielone razem i wymieszane w jednym ruchu, zamiast dosypywania po szczypcie do miski. Rozbełta też jajko, choć powiem szczerze, że akurat tego nie warto nikomu sprzedawać jako przewagi — widelec robi to równie dobrze.",
        "I granica, przy której nie ustąpię. Nie doradzę Wam nic o surowym mięsie, drobiu ani rybie: ile mogą leżeć, w jakiej temperaturze, co robić z deską po nich, jak głęboko mają być wysmażone. Nie doradzę też nic o tłuszczu do smażenia — jakiego użyć, do jakiej temperatury go grzać, czy wolno użyć drugi raz. To wszystko należy do bezpieczeństwa żywności, ryzyko jest realne, a ja sprzedaję urządzenie kuchenne i tyle.",
        "Na marginesie, skoro Hel: helskie anchovis, czyli zasolony filet ze szprota, są na Liście Produktów Tradycyjnych od 31 maja 2022 roku. Wspominam, bo się należy — o samych rybach i o soleniu pisałam osobno.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Helu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Trzydzieści kilometrów mierzei to dla mnie jedna trasa i nie zmienia niczego w cenie. Jeżeli chcecie, umówię się z kilkoma osobami z półwyspu tego samego dnia — powiedzcie przy telefonie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Helu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla helskiej rodziny",
      paragraphs: [
        "Hel liczy niecałe dwa tysiące osiemset mieszkańców i leży około trzydziestu trzech kilometrów od stałego lądu. Prawa miejskie dostał w trzynastym wieku od księcia Świętopełka II, stracił je w 1872 roku i odzyskał dopiero 22 maja 1963. Tutejszy port jest największym polskim portem rybackim pod względem wielkości wyładunków — w 2025 roku ponad szesnaście tysięcy ton według danych Komisji Europejskiej; warto jednak dodać, że pod względem wartości wyładunków pierwszy jest Kołobrzeg, a pod względem liczby kutrów Władysławowo. Port prowadzi spółka należąca w całości do gminy. Działa tu także fokarium Stacji Morskiej Uniwersytetu Gdańskiego — placówka naukowa, nie zoo — oraz Muzeum Rybołówstwa w dawnym kościele z piętnastego wieku, z wieżą widokową.",
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

  districtsHeading: "Do których części Helu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — Hel jest na tyle niewielki, że nie ma tu dalszej i bliższej strony. Dojazd jest bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę. Dla porządku: chodzi o miasto Hel, a nie o cały Półwysep Helski, na którym leżą też Władysławowo, Chałupy, Kuźnica, Jastarnia i Jurata — ale tam również przyjeżdżam.",
  ],
  districts: [],

  nearbyHeading: "Poza Hel też przyjadę",
  nearbyParagraphs: [
    "Jastarnia, Jurata, Kuźnica, Władysławowo, Puck, Reda i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Jastarnia", "Władysławowo", "Puck", "Reda", "Rumia"],

  about: blokOMnie("do Helu", "w Helu i na półwyspie", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Helu bez dodatkowej opłaty?",
      answer:
        "Tak. Trzydzieści kilometrów mierzei to dla mnie jedna trasa i nie zmienia niczego w cenie ani w warunkach. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Helu"),
    {
      question: "Czy Thermomix panieruje albo smaży?",
      answer:
        "Nie i nie ma na to żadnej funkcji ani nakładki. W środku nie ma jak wysuszyć powierzchni, więc panierka wyszłaby miękka. Kotlet zostaje na patelni, a patelnia zostaje w kuchni.",
    },
    {
      question: "To w czym pomaga przy panierce?",
      answer:
        "W tym, co trafia do misek. Bułka tarta z suchego pieczywa w kilkanaście sekund i o grubości, jaką wybierzecie. Mielone orzechy, migdały, płatki owsiane, sezam. Przyprawy zmielone i wymieszane z mąką w jednym ruchu. Trzech misek nie unikniecie — to nie jest problem mocy, tylko kolejności.",
    },
    {
      question: "Jakiego tłuszczu użyć do smażenia?",
      answer:
        "Tego nie doradzę — ani jakiego, ani do jakiej temperatury grzać, ani czy wolno użyć drugi raz. Tak samo nie doradzę nic o surowym mięsie, drobiu i rybie. To bezpieczeństwo żywności, nie obsługa sprzętu kuchennego.",
    },
  ],

  geo: { lat: 54.6084, lng: 18.8008 },
};
