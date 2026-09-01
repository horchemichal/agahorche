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
 * SUŁOSZOWA — GMINA WIEJSKA w powiecie krakowskim.
 * 5 651 mieszkańców gminy (GUS, 31.12.2024), 53,4 km².
 * Sama wieś Sułoszowa: 3 499 mieszkańców (NSP 2021).
 * 5 SOŁECTW w 3 miejscowościach: Sułoszowa I, Sułoszowa II, Sułoszowa III,
 * Wielmoża, Wola Kalinowska. Przysiółek Podzamcze.
 *
 * OŚ STRONY: ADRES. Do końca 2015 r. wieś NIE MIAŁA NAZW ULIC — tylko numery
 * domów, liczone OSOBNO w każdym sołectwie, przez co ten sam numer powtarzał
 * się pięciokrotnie. Od 1.01.2016 nadano nazwy ulic i przemeldowano
 * ok. 6 000 osób. Zabudowa ciągnie się ponad 9 km wzdłuż DW 773.
 * To jest oś: umawianie się pod konkretny adres w gminie, w której
 * „gdzieś w Sułoszowej” przez lata nic nie znaczyło.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — UKŁAD WSI: „jedna z najdłuższych wsi ulicówek w Polsce, przekraczająca
 *   9 km” — suloszowa.pl/o-gminie-suloszowa/. TA FORMUŁA I TYLKO TA,
 * — BRAK ULIC DO 2015: numeracja Sułoszowa I 1–388, II 1–285, III 1–247
 *   (Dziennik Polski); MSW: „te same numery domów powtarzają się
 *   pięciokrotnie”. Przyczyna: zmiana zasad meldunkowych z marca 2015 r.,
 *   znosząca oznaczenia „część miejscowości”. Nazwy od 1.01.2016,
 *   przemeldowano ok. 6 000 osób; Wola Kalinowska (ok. 600 osób) miała
 *   ulice wcześniej. Uchwała Rady Gminy nr XI/75/2015 z 20.10.2015,
 *   zmieniona nr XII/94/2015 z 24.11.2015,
 * — PRZYKŁADOWE NAZWY ULIC: Krakowska, Olkuska, Wichrowe Wzgórza,
 *   Świerkotówka, Orczykówka; w Wielmoży: Wesoła, Widokowa, Dolina Zachwytu,
 * — HISTORIA: 25.01.1315 nadanie Władysława Łokietka (700-lecie w 2015);
 *   1325–1327 parafia św. Wawrzyńca; Szafrańcowie ok. 230 lat, ród wygasł
 *   1608; Wielopolscy 1661–1841; ok. 1748 szpital dla ubogich; 1906 uchwała
 *   o nauczaniu po polsku; I wojna — zniszczonych 120 gospodarstw;
 *   1934 samodzielna gmina,
 * — PIESKOWA SKAŁA leży W TEJ GMINIE (osada Podzamcze) — suloszowa.pl.
 *   Dziś oddział Zamku Królewskiego na Wawelu. Maczuga Herkulesa obok,
 * — OPN: 508,29 ha = 23,69% powierzchni parku leży w gminie Sułoszowa
 *   (opn.gov.pl/powierzchnia-i-uzytkowanie),
 * — ROLNICTWO: grunty orne to 97,5% rolniczej przestrzeni gminy; studium
 *   wskazuje „tradycyjną uprawę ziemniaka” i owoce miękkie,
 * — ŚWIĘTO TRUSKAWKI SUŁOSZOWSKIEJ — I edycja 23.06.2019; konkurs
 *   „Największa truskawka sezonu 2019” wygrał owoc 93 g; konkurs
 *   „Najszybszy szypułkarz”; konkurs potraw KGW. Organizator m.in.
 *   KGW Sułoszowa I,
 * — DOŻYNKI Gminno-Parafialne w ostatnią niedzielę sierpnia, z Turniejem
 *   Sołectw (pięć drużyn, puchar przechodni),
 * — DEMOGRAFIA: −4,5% ludności od 2002; średni wiek 41,2; saldo migracji
 *   2024 minus 17. Lesistość 7,6% (GUS 2019),
 * — DOJAZD: DW 773 (Sieniczno – Sułoszowa – Pieskowa Skała – Skała –
 *   Iwanowice), 37 km do Krakowa wg gminy, 12 km do Olkusza. Busy
 *   Kraków MDA – Olkusz co ok. 10 minut w dni robocze. KOLEI BRAK,
 * — WSPÓŁRZĘDNE (UG, ul. Krakowska 139): 50,25522 / 19,75452.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — „NAJDŁUŻSZA WIEŚ W POLSCE”. TO NIEPRAWDA. Biuro Rekordów wskazuje
 *   Ochotnicę (ok. 25 km), rankingi otwiera Zawoja (18 km), a Sułoszowej
 *   w pierwszej dziesiątce nie ma. Nagłówek RMF „najdłuższa ulicówka”
 *   to teza dziennikarska bez pokrycia w rejestrze,
 * — LICZBY ULIC. Żadne źródło jej nie podaje. NIE PODAWAĆ,
 * — „WIEŚ Z JEDNĄ ULICĄ”. Nieaktualne od 2016 r. Jedna jest DROGA
 *   PRZELOTOWA, ulic z nazwami jest wiele,
 * — TRUSKAWKA SUŁOSZOWSKA JAKO PRODUKT TRADYCYJNY. Nie ma jej na
 *   ministerialnej Liście Produktów Tradycyjnych. To lokalna marka,
 * — AREAŁU TRUSKAWEK, LICZBY PLANTATORÓW, WIELKOŚCI ZBIORÓW. Nie
 *   potwierdzono. Potwierdzone z nazwy tylko KGW Sułoszowa I,
 * — NAZWANYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WYSOKOŚCI MACZUGI HERKULESA. Nie potwierdzona w wiarygodnym źródle,
 * — DATY I TYTUŁU ARTYKUŁU „DAILY MAIL”. Polskie media cytują z drugiej
 *   ręki. Użyta wyłącznie sama treść cytatu, bez daty i bez listy redakcji,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje dla tej gminy
 *   8 110,12 zł i 4,3% — TE SAME LICZBY CO DLA SKAŁY I CAŁEGO POWIATU.
 *   To dane POWIATOWE. NIE UŻYWAĆ jako gminnych.
 *
 * PUŁAPKI:
 * — ZAMEK PIESKOWA SKAŁA NIE LEŻY W GMINIE SKAŁA, tylko tutaj. Nazwa
 *   pochodzi od skały, nie od miasta. Najczęstszy błąd portali,
 * — 5 SOŁECTW, ale 3 MIEJSCOWOŚCI. Wikipedia i polskawliczbach podają
 *   „trzy miejscowości” — to prawda o miejscowościach, nie o sołectwach,
 * — „14 km i 6 tysięcy mieszkańców” to Sułoszowa w II RP, nie dziś,
 * — LEGENDA O MACZUDZE I TWARDOWSKIM to legenda, nie fakt,
 * — DOLINA PRĄDNIKA przebiega przez tę gminę I przez gminę Skała —
 *   nie nadaje się na wątek różnicujący.
 */

export const SULOSZOWA: CityContent = {
  slug: "suloszowa",
  h1: "Thermomix Sułoszowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Sułoszowa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Sułoszowa: bezpłatna prezentacja TM7 u Ciebie w kuchni, raty 0,6%. Dojazd do Wielmoży i Woli Kalinowskiej bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Sułoszowa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Sułoszowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Sułoszowej, Wielmoży i Woli Kalinowskiej przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina, na całej długości, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sułoszowej – jak wygląda prezentacja?",
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
      heading: "Wieś, w której numer domu powtarzał się pięć razy",
      paragraphs: [
        "Sułoszowa ciągnie się ponad dziewięć kilometrów wzdłuż jednej drogi wojewódzkiej. Sama gmina opisuje ją jako jedną z najdłuższych wsi ulicówek w Polsce — i to jest ostrożne, uczciwe sformułowanie, bo dłuższe wsie w kraju są, choćby Ochotnica czy Zawoja.",
        "Znacznie ciekawszy jest jednak inny fakt, o którym rzadko się pisze. Do końca dwa tysiące piętnastego roku ta wieś nie miała nazw ulic. W ogóle. Adresem był sam numer domu — a numery liczono osobno w Sułoszowej pierwszej, drugiej i trzeciej. Pierwsza miała numery od jednego do trzystu osiemdziesięciu ośmiu, druga do dwustu osiemdziesięciu pięciu, trzecia do dwustu czterdziestu siedmiu.",
        "Efekt był taki, że ten sam numer domu występował w gminie pięciokrotnie. Ministerstwo Spraw Wewnętrznych zwracało na to uwagę wprost. Przez lata dawało się z tym żyć, bo listonosz i sąsiedzi wiedzieli swoje, ale w marcu dwa tysiące piętnastego zmieniono w Polsce zasady meldunkowe i zniesiono oznaczenia części miejscowości. Trzy Sułoszowy przestały być rozróżnialne w systemie.",
        "Rada gminy podjęła więc uchwałę i od pierwszego stycznia dwa tysiące szesnastego roku ulice dostały nazwy. Przemeldowano przy tej okazji około sześciu tysięcy osób. Wola Kalinowska, gdzie mieszka około sześciuset, miała nazwy już wcześniej i zmiana jej nie objęła.",
        "Nazwy są zresztą ładne i bardzo lokalne. Obok oczywistych Krakowskiej i Olkuskiej, wskazujących po prostu kierunek, pojawiły się Wichrowe Wzgórza, Świerkotówka i Orczykówka, a w Wielmoży — Wesoła, Widokowa i Dolina Zachwytu.",
        "Historia gminy sięga znacznie dalej niż jej adresy. Pierwsza wzmianka pochodzi z dwudziestego piątego stycznia tysiąc trzysta piętnastego roku, kiedy Władysław Łokietek nadał tę wieś do zasadzenia; w dwa tysiące piętnastym Sułoszowa obchodziła więc siedemsetlecie. Przez blisko dwieście trzydzieści lat panowali tu Szafrańcowie, ród wygasł w tysiąc sześćset ósmym; po nich Wielopolscy, aż do tysiąc osiemset czterdziestego pierwszego.",
        "I jeszcze jedno, bo bywa mylące: zamek Pieskowa Skała leży właśnie tutaj, w przysiółku Podzamcze, a nie w sąsiedniej gminie Skała. Nazwa pochodzi od skały, nie od miasta. W granicach gminy leży też blisko jedna czwarta powierzchni Ojcowskiego Parku Narodowego.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Sułoszowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Przy umawianiu podaj ulicę i numer, a nie samą nazwę wsi. W gminie, która ciągnie się dziewięć kilometrów, różnica między jednym a drugim krańcem to kilkanaście minut jazdy, a nawigacja bez ulicy potrafi zawieźć w zupełnie inne miejsce.",
        "Jeśli mieszkasz w Wielmoży albo w Woli Kalinowskiej, powiedz to od razu — to osobne miejscowości, nie części Sułoszowej, i trasa wygląda inaczej. Dopłaty nie ma żadnej, chodzi wyłącznie o zaplanowanie dnia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Sułoszowa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Czerwiec, kiedy wszystko dzieje się naraz",
      paragraphs: [
        "W gminie, w której uprawia się owoce miękkie, rok kuchenny nie rozkłada się równo. Przez większość miesięcy gotuje się normalnie, a potem przychodzi czerwiec i przez trzy tygodnie wszystko dzieje się jednocześnie: zbiory, sprzedaż, i te kilkanaście kilogramów, które zostają w domu i trzeba je przerobić dzisiaj, bo jutro już nie będą się nadawać.",
        "To jest moment, w którym urządzenie faktycznie pomaga, i to w bardzo prozaiczny sposób. Dżem gotuje się bez stania nad garnkiem i bez pilnowania, żeby nie przywarł — a przy owocach z dużą ilością cukru przywiera chętnie. Nastawia się i idzie zrobić coś innego.",
        "Druga rzecz to mrożenie w formie, która się potem przyda. Owoce zmiksowane na mus i rozlane do pojemników zajmują w zamrażarce o wiele mniej miejsca niż całe, a zimą wchodzą prosto do ciasta, do jogurtu albo do naleśników bez rozmrażania po pół dnia.",
        "Trzecia jest najbardziej domowa: kiedy w czerwcu w domu jest ruch, obiad i tak musi być. Danie jednogarnkowe, które gotuje się samo i samo się wyłącza, to w takim tygodniu nie jest wygoda, tylko warunek, żeby ktokolwiek zdążył usiąść do stołu.",
        "Poza sezonem gotuje się tu jak wszędzie na tej wysokości: ziemniaki, kapusta, zupy na kościach, ciasto drożdżowe. Ziemniak ma zresztą w gminie status osobny — studium rozwoju wymienia jego tradycyjną uprawę jako jeden z kierunków, na których gmina chce się opierać.",
        "Jeśli w domu jest małe dziecko, przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między garnkiem a blenderem.",
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
    heading: "Sułoszowa i gotowanie — truskawka, ziemniak i święto w czerwcu",
    paragraphs: [
      "Zacznę od sprostowania, bo w internecie krąży inaczej: truskawka sułoszowska nie jest wpisana na ministerialną Listę Produktów Tradycyjnych. To lokalna marka promocyjna, a nie status prawny — i moim zdaniem wcale nie mniej wartościowa, tylko trzeba ją nazywać po imieniu.",
      "Za to samo święto jest jak najbardziej prawdziwe. Święto Truskawki Sułoszowskiej odbyło się po raz pierwszy dwudziestego trzeciego czerwca dwa tysiące dziewiętnastego roku i od tamtej pory wraca w połowie czerwca. Na pierwszej edycji rozstrzygnięto konkurs na największą truskawkę sezonu — wygrał owoc ważący dziewięćdziesiąt trzy gramy. Był też konkurs na najszybszego szypułkarza, quiz i konkurs potraw kół gospodyń.",
      "Drugim filarem tutejszej kuchni jest ziemniak. Studium rozwoju gminy wprost wymienia jego tradycyjną uprawę obok owoców miękkich jako kierunek, na którym opiera się tutejsze rolnictwo. To nie folklor, tylko zapis w dokumencie planistycznym.",
      "Dożynki gminno-parafialne odbywają się w ostatnią niedzielę sierpnia, z korowodem wieńców i Turniejem Sołectw, w którym startuje pięć drużyn i gra się o puchar przechodni. Pięć drużyn przy trzech miejscowościach to zresztą kolejny ślad po tym, że Sułoszowa jest podzielona na trzy osobne sołectwa.",
      "Dla urządzenia najciekawszy jest tu czerwiec: dżemy i musy bez pilnowania garnka, przecierane owoce do mrożenia, koktajle. Czego nie zrobi, mówię wprost: nie zbierze truskawek i nie zastąpi wprawy przy cieście. Zabiera tę część roboty, która jest wyłącznie czasem i staniem przy kuchni.",
    ],
  },

  districtsHeading: "Do których części gminy Sułoszowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, na całej dziewięciokilometrowej długości i bez żadnej dopłaty za odległość. Gmina liczy około pięciu i pół tysiąca mieszkańców na pięćdziesięciu trzech kilometrach kwadratowych.",
    "Sołectw jest pięć, ale miejscowości trzy: sama Sułoszowa dzieli się na Sułoszową pierwszą, drugą i trzecią, a poza nią są Wielmoża i Wola Kalinowska. Do tego przysiółek Podzamcze przy zamku.",
    "Od stycznia dwa tysiące szesnastego roku wszystkie te miejsca mają nazwy ulic — wcześniej adresem był sam numer domu. Przy umawianiu prezentacji podaj więc ulicę: to jedyna rzecz, która realnie skraca szukanie.",
    "W granicach gminy leży zamek Pieskowa Skała z Maczugą Herkulesa oraz blisko jedna czwarta powierzchni Ojcowskiego Parku Narodowego — dokładnie pięćset osiem hektarów z dwóch tysięcy stu czterdziestu pięciu.",
    "Dojazd: kolei w gminie nie ma. Samochodem drogą wojewódzką siedemset siedemdziesiąt trzy — do Krakowa około trzydziestu siedmiu kilometrów, do Olkusza dwanaście. Kursują też busy na trasie Kraków–Olkusz.",
  ],
  districts: [
    "Sułoszowa I",
    "Sułoszowa II",
    "Sułoszowa III",
    "Wielmoża",
    "Wola Kalinowska",
    "Podzamcze",
  ],

  nearbyHeading: "Skała, Jerzmanowice i Wolbrom też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje ze Skałą, Jerzmanowicami-Przeginią, Trzyciążem i Wolbromiem. Dojeżdżam do wszystkich gmin powiatu krakowskiego bez doliczania kosztu dojazdu; blisko jest też do Olkusza.",
    "Jedno rozróżnienie, bo myli się nagminnie: zamek Pieskowa Skała leży w gminie Sułoszowa, a nie w gminie Skała. Nazwa pochodzi od skały, nie od sąsiedniego miasta.",
  ],
  nearbyTowns: [
    "Skała",
    "Jerzmanowice-Przeginia",
    "Trzyciąż",
    "Wolbrom",
    "Olkusz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Sułoszowa", "w powiecie krakowskim"),

  faq: [
    {
      question: "Mieszkam w Wielmoży albo w Woli Kalinowskiej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. To osobne miejscowości, nie części Sułoszowej, więc przy umawianiu warto podać nazwę wprost — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Sułoszowa"),
    {
      question: "Sułoszowa jest bardzo długa. Jak podać adres, żebyś trafiła?",
      answer:
        "Najlepiej ulicą i numerem. Od stycznia dwa tysiące szesnastego roku wszystkie ulice w gminie mają nazwy — wcześniej adresem był sam numer domu, a ten sam numer powtarzał się w gminie kilkakrotnie. Jeśli masz jeszcze stary adres w formie samego numeru, podaj przy okazji nazwę sąsiada albo najbliższy punkt orientacyjny, a resztę dopytam przez telefon.",
    },
  ],

  geo: { lat: 50.25522, lng: 19.75452 },
};
