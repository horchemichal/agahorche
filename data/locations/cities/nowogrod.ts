import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * NOWOGRÓD — gmina miejsko-wiejska w powiecie łomżyńskim.
 * MIASTO 2 093, GMINA 3 852 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 20,6 km², GMINY 101,2 km².
 * 51,4% pracujących w rolnictwie i leśnictwie.
 *
 * PRAWA MIEJSKIE 1427 r., UTRATA 1869 r., PRZYWRÓCENIE
 * PO I WOJNIE ŚWIATOWEJ.
 * ⚠ ROKU PRZYWRÓCENIA NIE PODAJĘ — źródła podają 1927,
 *   ale nie potwierdzono. Piszę „po pierwszej wojnie".
 *
 * GEOGRAFIA: U UJŚCIA PISY DO NARWI. Skarpa 40–50 m.
 * ETNOGRAFICZNIE KURPIE, historycznie MAZOWSZE.
 *
 * ⚠⚠ SKANSEN KURPIOWSKI im. ADAMA CHĘTNIKA — PODSTAWA KĄTA:
 * OTWARTY 19 CZERWCA 1927 r. DRUGIE NAJSTARSZE MUZEUM
 * NA WOLNYM POWIETRZU W POLSCE (⚠ NIE PIERWSZE!).
 * Ok. 3 000 eksponatów. Odbudowa od 1956 (ocalały tylko dwie
 * stare barcie i wrota od strony rzeki), udostępniony 1958,
 * dział bartnictwa i smolarstwa od października 1963.
 * Dziś ok. 3,5 ha i 23 obiekty drewniane
 * (⚠ źródła podają też 4,5 ha / 21 obiektów — piszę „ponad
 * dwadzieścia" i nie podaję powierzchni).
 * ⚠⚠ OBIEKTY — TO JEST KOTWICA KĄTA:
 * WIATRAK PALTRAK, MŁYN WODNY, OLEJARNIA, SPICHLERZE
 * Z PODCIENIAMI, KUŹNIA, ULE KŁODOWE, DRZEWA BARTNE.
 * Od 1 czerwca 2022 instytucja województwa podlaskiego.
 * „Kurpiowski Tydzień w Skansenie" — III edycja w 2025,
 * czyli od 2023.
 *
 * ŁOMŻYŃSKI PARK KRAJOBRAZOWY DOLINY NARWI: grudzień 1994,
 * 7 354 ha, otulina 12 311 ha.
 *
 * BARTNICTWO: pierwszy przywilej bartny księcia JANUSZA
 * MAZOWIECKIEGO z 1401 r.
 * „MIÓD KURPIOWSKI" — ChOG UE od lipca 2010, obejmuje TYLKO
 * gminy Zbójna, NOWOGRÓD i Turośl.
 * ⚠⚠ KĄTA MIODOWEGO NIE UŻYWAM — ZAJĘTY. Miód podaję
 *   wyłącznie jako fakt w bloku „rodzina".
 * ⚠ MIODOBRANIE KURPIOWSKIE jest w MYSZYŃCU (mazowieckie) —
 *   NIE PRZYPISUJĘ go Nowogrodowi.
 * Potrawy kurpiowskie: fafernuchy, psiwo kozicowe, rejbak.
 *
 * KĄT: ILE PRACY JEST W SKŁADNIKU, ZANIM GO KUPISZ.
 * Kąt od skansenu, w którym stoi obok siebie CAŁY ŁAŃCUCH:
 * wiatrak i młyn (mąka), olejarnia (olej), ule i barcie (miód),
 * spichlerze (przechowywanie), kuźnia (narzędzia).
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że skansen pokazuje rzecz, której nie widać w sklepie:
 *   ile etapów dzieli surowiec od produktu,
 * — ŻE KAŻDY SKŁADNIK KUPOWANY W SKLEPIE JEST JUŻ PO KILKU
 *   ETAPACH PRZETWORZENIA, o których nie myślimy,
 * — konkretnie: mąka to ziarno plus mielenie plus przesianie;
 *   olej to nasiona plus tłoczenie; kasza to ziarno
 *   plus obłuskanie,
 * — że „nieprzetworzone" jest słowem mylącym, bo mąka też
 *   jest przetworzona i nikt nie ma z tym problemu,
 * — CO Z TEGO WYNIKA PRAKTYCZNIE: że część tej pracy można
 *   sobie wziąć z powrotem, i że to zmienia smak — mielenie
 *   przypraw i zboża tuż przed użyciem to jedyna różnica,
 *   której naprawdę nie da się kupić w gotowym produkcie,
 * — że nie chodzi o robienie wszystkiego samemu — to jest
 *   fantazja, nie plan,
 * — ŻE WARTO WYBRAĆ JEDNĄ, DWIE RZECZY, które robi się
 *   u siebie, a resztę kupować spokojnie,
 * — jak wybrać które: te, w których świeżość słychać
 *   najbardziej,
 * — UCZCIWIE: urządzenie nie zastąpi młyna ani olejarni
 *   i nie wytłoczy oleju,
 * — ale mielenie zboża na mąkę i przypraw na proszek robi
 *   naprawdę — i to jest ten jeden etap łańcucha, który
 *   wraca do domowej kuchni.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO „zdrowsze",
 *   ZERO witamin, ZERO „przetworzona żywność szkodzi".
 *   Piszę o SMAKU i o PRACY, nigdy o zdrowiu. TWARDA GRANICA.
 * — ⚠ ZERO KRYTYKI PRZEMYSŁU SPOŻYWCZEGO i zero moralizowania
 *   o „prawdziwym jedzeniu". Ton rzeczowy i życzliwy.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ⚠ ZNISZCZENIA SKANSENU NIE OPISUJĘ. Piszę tylko,
 *   że odbudowywano go od 1956 r. i otwarto w 1958 —
 *   bez przyczyny i bez dat wojennych.
 * — ZERO granicy, wojska, podziemia, powstań.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Składniki, które trzeba
 * przygotować, zanim w ogóle" dotyczy pracy w TWOJEJ kuchni
 * po zakupie. „Marnowanie jedzenia" dotyczy tego, co ląduje
 * w koszu. „Surowe kontra gotowane" dotyczy obróbki cieplnej.
 * „Kasza" i „orzechy" dotyczą jednego surowca. Tutaj chodzi
 * o ŁAŃCUCH PRZED SKLEPEM i o to, które jego ogniwo warto
 * wziąć z powrotem do siebie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku przywrócenia praw miejskich.
 * — NIE PODAJĘ powierzchni skansenu ani dokładnej liczby
 *   obiektów (sprzeczne źródła).
 * — NIE NAZYWAM skansenu najstarszym — jest DRUGI.
 * — NIE PRZYPISUJĘ Nowogrodowi Miodobrania Kurpiowskiego.
 * — NIE MYLĘ NOWOGRODU (podlaskie) z NOWOGRODEM BOBRZAŃSKIM
 *   (lubuskie) ani z NOWOGRODEM WIELKIM. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad dwa tysiące mieszkańców, cała gmina
 *   blisko cztery tysiące na 101,2 km²; ponad połowa
 *   pracujących zajmuje się rolnictwem i leśnictwem,
 * — prawa miejskie z 1427 r., utracone w 1869 i przywrócone
 *   po pierwszej wojnie światowej,
 * — miasto leży u ujścia Pisy do Narwi, na skarpie
 *   czterdziestu do pięćdziesięciu metrów; etnograficznie
 *   to Kurpie, historycznie Mazowsze,
 * — Skansen Kurpiowski imienia Adama Chętnika otwarto
 *   19 czerwca 1927 r.; to drugie najstarsze muzeum na wolnym
 *   powietrzu w Polsce, dziś ponad dwadzieścia drewnianych
 *   obiektów i około trzech tysięcy eksponatów; odbudowywano
 *   go od 1956 r., udostępniono w 1958, a dział bartnictwa
 *   i smolarstwa doszedł w październiku 1963; od 1 czerwca
 *   2022 r. jest instytucją województwa podlaskiego,
 * — w skansenie stoją wiatrak paltrak, młyn wodny, olejarnia,
 *   spichlerze z podcieniami, kuźnia, ule kłodowe i drzewa
 *   bartne,
 * — Łomżyński Park Krajobrazowy Doliny Narwi utworzono
 *   w grudniu 1994 r.: 7 354 ha i 12 311 ha otuliny,
 * — pierwszy przywilej bartny wydał książę Janusz Mazowiecki
 *   w 1401 r., a „Miód kurpiowski" ma unijne chronione
 *   oznaczenie geograficzne od lipca 2010 r., obejmujące
 *   gminy Zbójna, Nowogród i Turośl,
 * — kuchnia kurpiowska to fafernuchy, psiwo kozicowe i rejbak.
 */
export const NOWOGROD: CityContent = {
  slug: "nowogrod",
  h1: "Thermomix Nowogród – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowogród — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Nowogrodzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowogród — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowogrodzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowogrodu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Nowogród i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Każdy składnik ze sklepu ma za sobą kilka etapów pracy.",
  },

  sections: [
    {
      id: "praca-w-skladniku",
      heading: "Wiatrak, młyn i olejarnia obok siebie — czyli ile pracy jest w składniku, zanim go kupisz",
      paragraphs: [
        "Skansen kurpiowski imienia Adama Chętnika, otwarty tutaj 19 czerwca 1927 roku i drugi najstarszy w Polsce, ma cechę, której zwykle się nie zauważa. Stoi w nim obok siebie cały łańcuch: wiatrak paltrak i młyn wodny, olejarnia, spichlerze z podcieniami, kuźnia, ule kłodowe i drzewa bartne. Nie pojedyncze budynki, tylko kolejne etapy jednej drogi — od tego, co rośnie, do tego, co ląduje na stole.",
        "Sklep tę drogę ukrywa całkowicie. Torebka mąki wygląda jak rzecz, która po prostu jest, i nic w niej nie mówi, że ktoś zboże zasiał, zżął, wysuszył, zmielił i przesiał.",
        "Każdy składnik, który kupujesz, jest już po kilku etapach przetworzenia — nawet te, które uważamy za najprostsze. Mąka to ziarno plus mielenie plus przesianie. Olej to nasiona plus tłoczenie. Kasza to ziarno plus obłuskanie i często plus prażenie. To nie są półprodukty przemysłu, tylko czynności, które kiedyś wykonywano w budynku po sąsiedzku.",
        "Dlatego słowo „nieprzetworzone” jest w kuchni raczej mylące niż pomocne. Mąka jest przetworzona i nikt rozsądny nie ma z tym problemu. Pytanie brzmi nie „czy”, tylko „przez kogo i jak dawno temu”.",
        "I tu robi się praktycznie. Część tej pracy można sobie wziąć z powrotem — i wtedy okazuje się, że zmienia to smak bardziej, niż by się wydawało. Przyprawy zmielone tuż przed użyciem i mąka zmielona tego samego dnia mają zapach, którego nie ma w żadnym gotowym odpowiedniku, choćby najlepszym. To jest jedyna różnica, której naprawdę nie da się kupić, bo ona polega wyłącznie na czasie.",
        "Nie chodzi jednak o robienie wszystkiego samemu. To jest fantazja, nie plan — i kończy się zwykle po dwóch tygodniach, poczuciem winy i szafką pełną słoików.",
        "Sensowna wersja jest inna: wybrać jedną albo dwie rzeczy, które robi się u siebie, a całą resztę kupować spokojnie i bez wyrzutów. Dwie rzeczy robione stale są warte więcej niż dziesięć robionych przez miesiąc.",
        "Które wybrać? Te, w których świeżość słychać najbardziej. Przyprawy — bo mielony pieprz i mielony kmin tracą zapach szybciej niż cokolwiek innego w kuchni. Cukier puder, bo to dosłownie kwestia minuty. Bułka tarta, bo ta domowa jest po prostu inna. Mąka z pełnego ziarna, jeśli ktoś piecze regularnie.",
        "Teraz uczciwie o sprzęcie. Thermomix nie zastąpi młyna ani olejarni — oleju nie wytłoczy, ziarna nie wysuszy i nie zrobi z niego kaszy.",
        "Mieli natomiast naprawdę: zboże na mąkę, przyprawy na proszek, cukier na puder, ryż i suche nasiona. To jest dokładnie ten jeden etap starego łańcucha, który da się wrócić do domowej kuchni bez oddzielnego sprzętu i bez zamieniania mieszkania w warsztat. Reszta łańcucha niech zostanie tam, gdzie jest — w skansenie i w sklepie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Nowogrodzie – jak wygląda prezentacja?",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowogrodzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy w domu ktoś piecze. Jeśli tak, pokażę mielenie — to najlepiej widać na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowogrodzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nowogrodzkiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad dwa tysiące mieszkańców, a cała gmina blisko cztery tysiące na stu jeden kilometrach kwadratowych; ponad połowa pracujących zajmuje się tu rolnictwem i leśnictwem. Prawa miejskie Nowogród otrzymał w 1427 roku, utracił w 1869 i odzyskał po pierwszej wojnie światowej. Miasto stoi u ujścia Pisy do Narwi, na skarpie sięgającej czterdziestu do pięćdziesięciu metrów; etnograficznie to Kurpie, historycznie Mazowsze. Skansen kurpiowski imienia Adama Chętnika otwarto 19 czerwca 1927 roku — to drugie najstarsze muzeum na wolnym powietrzu w Polsce; dziś stoi w nim ponad dwadzieścia drewnianych obiektów i mieści się około trzech tysięcy eksponatów, odbudowywano je od 1956 roku, udostępniono w 1958, a dział bartnictwa i smolarstwa doszedł w październiku 1963. Od 1 czerwca 2022 roku skansen jest instytucją województwa podlaskiego. Dolinę chroni Łomżyński Park Krajobrazowy Doliny Narwi, utworzony w grudniu 1994 roku: 7 354 hektary i ponad dwanaście tysięcy hektarów otuliny. Pierwszy przywilej bartny wydał tu książę Janusz Mazowiecki w 1401 roku, a „Miód kurpiowski” ma od lipca 2010 unijne chronione oznaczenie geograficzne, obejmujące gminy Zbójna, Nowogród i Turośl. Z kuchni kurpiowskiej znane są fafernuchy, psiwo kozicowe i rejbak.",
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

  districtsHeading: "Do których części gminy Nowogród dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowogród też przyjadę",
  nearbyParagraphs: [
    "Łomża, Kolno, Stawiski, Jedwabne i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łomża", "Kolno", "Stawiski", "Jedwabne"],

  about: blokOMnie("do Nowogrodu", "w Nowogrodzie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowogrodu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Nowogród nad Narwią w powiecie łomżyńskim to nie Nowogród Bobrzański w lubuskiem.",
    },
    ...faqWspolne("w Nowogrodzie"),
    {
      question: "Czy warto robić składniki samemu w domu?",
      answer:
        "Nie wszystkie — to fantazja, nie plan, i kończy się zwykle szafką pełną słoików. Sensowniej wybrać jedną albo dwie rzeczy i robić je stale. Najbardziej opłacają się te, w których słychać świeżość: przyprawy, cukier puder, bułka tarta, mąka z pełnego ziarna przy regularnym pieczeniu.",
    },
    {
      question: "Czy Thermomix miele zboże na mąkę?",
      answer:
        "Tak — miele zboże, przyprawy, cukier na puder, ryż i suche nasiona. Nie zastąpi natomiast młyna ani olejarni: oleju nie wytłoczy, ziarna nie wysuszy i nie zrobi z niego kaszy.",
    },
    {
      question: "Czy świeżo mielone przyprawy naprawdę różnią się smakiem?",
      answer:
        "Tak, i to jest różnica, której nie da się kupić w gotowym produkcie, bo polega wyłącznie na czasie. Mielony pieprz i mielony kmin tracą zapach szybciej niż cokolwiek innego w kuchni — dlatego akurat przyprawy warto mielić tuż przed użyciem.",
    },
  ],

  geo: { lat: 53.2244, lng: 21.8781 },
};
