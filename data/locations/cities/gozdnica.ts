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
 * GOZDNICA — ⚠ GMINA MIEJSKA, JEDNOMIEJSCOWA, powiat żagański.
 * MIASTO 2 692 (GUS 31.12.2024), 23,9 km².
 * ⚠⚠ BRAK SOŁECTW — gmina obejmuje jedną miejscowość.
 * Jedyna wyodrębniona część miasta nosi nazwę DĘBÓWEK.
 * ⚠ CZTERY RÓŻNE LICZBY LUDNOŚCI W ŹRÓDŁACH (2 692 / 2 681 /
 *   2 636 / 3 000 z 2019 r.) — UŻYWAM WYŁĄCZNIE 2 692
 *   z datą 31.12.2024.
 * Szczyt ludnościowy: 3 649 osób w 1997 r.
 * ⚠ TEGO NIE PODAJĘ — prowadziłoby do tematu wyludniania.
 *
 * ⚠ HOMONIMY: GOZDNICA (miasto, powiat żagański) ≠ GOZD
 * ≠ GOZDOWO ≠ wsie o nazwie Gozdnica poza powiatem żagańskim.
 * FAQ to rozróżnia.
 *
 * ⚠⚠ PRAW MIEJSKICH NIE DATUJĘ PRECYZYJNIE — jedno źródło
 * (konserwator) podaje, że miejscowość była określana miastem
 * w XVI w., potem status utraciła, a W 1954 r. PONOWNIE
 * UZYSKAŁA PRAWA MIEJSKIE — dzięki rozkwitowi przemysłu
 * ceramicznego. Brak drugiego potwierdzenia. Piszę o tym
 * ostrożnie, jako o jednym przekazie.
 *
 * GEOGRAFIA: ⚠⚠ LESISTOŚĆ 67,9% — 55. MIEJSCE W POLSCE.
 * To jedno z najbardziej zalesionych miast w kraju.
 * (GUS za 2019: lasy 1 614 ha, lesistość 67,5% — zbieżne.)
 * Teren pofalowany. Gmina należy do Euroregionu
 * Sprewa–Nysa–Bóbr.
 * ⚠ REZERWATU „ŻURAWIE BAGNO" NIE PRZYPISUJĘ GOZDNICY —
 *   leży w Nadleśnictwie Wymiarki, czyli poza gminą.
 * ⚠ RZEKI NIE PODAJĘ — nie ustalono.
 *
 * ⚠⚠ DAWNY MŁYN WODNY, UL. MŁYŃSKA 1 — PODSTAWA KĄTA:
 * ZBUDOWANY W POŁOWIE XVIII w., murowany, prostokątny
 * w planie, DWUTRAKTOWY, NAKRYTY DACHEM MANSARDOWYM,
 * w części wnętrz DREWNIANE STROPY BELKOWE.
 * ⚠⚠ OBECNIE JEST DOMEM MIESZKALNYM. Figuruje w wykazie
 * zabytków techniki Lubuskiego Wojewódzkiego Konserwatora
 * Zabytków. TO JEST KOTWICA — budynek, który zachował nazwę
 * ulicy i stracił funkcję.
 * ⚠ KĄTA MŁYNARSKIEGO NIE UŻYWAM — „mąka i mielenie" ZAJĘTE.
 *   Młyn jest KOTWICĄ METAFORYCZNĄ, nie tematem.
 *
 * GOSPODARKA TO CERAMIKA, NIE JEDZENIE. Przemysł ceramiczny
 * powstał w XIX stuleciu i przywrócił miejscowości znaczenie
 * gospodarcze. Kierunki działalności gminy: ceramika,
 * leśnictwo, handel, edukacja, usługi.
 * ⚠ NAZW ZAKŁADÓW CERAMICZNYCH NIE PODAJĘ — nieustalone.
 * ⚠ ZERO tematów upadku zakładów.
 * UKŁAD URBANISTYCZNY w wykazie konserwatora: rozplanowanie
 * odzwierciedla WIEJSKO-MIEJSKI CHARAKTER; historyczne domy
 * głównie z XIX w., murowane, parterowe lub piętrowe,
 * sytuowane w większości KALENICOWO, o eklektycznym detalu.
 * Baza sportowa: stadion piłkarski, letni basen odkryty,
 * hale sportowe, kort tenisowy.
 *
 * ⚠⚠ W GOZDNICY NIE ZNALEZIONO ŻADNEJ IMPREZY CYKLICZNEJ,
 * DOŻYNEK, JARMARKU, KOŁA GOSPODYŃ, TARGOWISKA, PIEKARNI
 * ANI PASIEKI. Żadnego produktu z gminy nie ma na Liście
 * Produktów Tradycyjnych. NIE WYMYŚLAM ŻADNEGO.
 *
 * KĄT: SMAK Z PAMIĘCI — dlaczego to samo danie nie smakuje
 * tak jak kiedyś.
 * Kąt od młyna z połowy XVIII wieku, który stoi przy ulicy
 * Młyńskiej i jest dziś zwykłym domem — czyli od budynku,
 * który zachował nazwę, a stracił funkcję.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że prawie każdy ma danie, które „kiedyś smakowało
 *   inaczej" — i że po odtworzeniu przepisu co do joty
 *   i tak nie smakuje tak samo,
 * — ŻE PRZYCZYN JEST KILKA I ŻADNA NIE JEST WINĄ GOTUJĄCEGO,
 * — PIERWSZA: ZMIENIŁY SIĘ SKŁADNIKI. Odmiany warzyw, mąka,
 *   mięso, nabiał — to nie są dziś te same produkty co
 *   trzydzieści lat temu,
 * — DRUGA: ZMIENIŁ SIĘ SPRZĘT. Piekarnik grzeje inaczej,
 *   garnek ma inne dno, kuchenka inną moc,
 * — TRZECIA I NAJWAŻNIEJSZA: ZMIENILIŚMY SIĘ MY. Zmysł smaku
 *   dziecka i dorosłego to nie to samo, a przyzwyczajenia
 *   do słodyczy i soli przesuwają się przez całe życie,
 * — CZWARTA: TAMTO DANIE JADŁO SIĘ RZADKO, a rzadkość sama
 *   w sobie robi połowę wrażenia,
 * — ŻE PAMIĘTAMY NIE SMAK, TYLKO SYTUACJĘ — kto był przy
 *   stole, jaka była pora roku, co się wtedy działo,
 * — CO Z TEGO WYNIKA PRAKTYCZNIE: nie ma sensu gonić
 *   za identycznym smakiem, bo nie da się odtworzyć całej
 *   reszty,
 * — CO MA SENS: odtworzyć TECHNIKĘ, nie efekt — jak długo
 *   to się gotowało, w czym, czy było zasmażane, czy stało
 *   do następnego dnia,
 * — ŻE WARTO PYTAĆ O SZCZEGÓŁY, DOPÓKI JEST KOGO PYTAĆ,
 *   i zapisywać nie przepis, tylko sposób,
 * — I ŻE CZASEM DANIE SMAKUJE GORZEJ, BO ROBIMY JE LEPIEJ
 *   — wersja dopracowana bywa dalsza od wspomnienia niż
 *   ta niedbała,
 * — UCZCIWIE: urządzenie nie odtworzy smaku z dzieciństwa
 *   i żadna funkcja tego nie zrobi,
 * — ale pomaga w jednej rzeczy: gdy już trafisz w wersję,
 *   która jest bliska, powtórzy ją dokładnie — a przy takich
 *   daniach to jest cała stawka.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO tez o zmysłach
 *   i starzeniu jako temacie medycznym — piszę o smaku
 *   i przyzwyczajeniach, nigdy o fizjologii. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠⚠ ZERO NOSTALGII I ZERO TEZY „DAWNIEJ BYŁO LEPIEJ".
 *   Piszę, że było INACZEJ i że wspomnienie zawiera więcej
 *   niż smak. TWARDA GRANICA TONU.
 * — ⚠ ZERO tematów żałoby i straty bliskich. Piszę „dopóki
 *   jest kogo pytać" i na tym poprzestaję.
 * — ZERO tematów upadku miasta i wyludniania.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Odtwarzanie przepisu,
 * którego nikt nie zapisał" dotyczy pracy rekonstrukcyjnej
 * — jak dojść do przepisu. „Skąd wiemy, co jedzono dawniej"
 * dotyczy źródeł historycznych. „Czy dawniej gotowało się
 * lepiej" dotyczy porównania epok. „Dania, które zniknęły
 * z domowych stołów" dotyczą potraw wycofanych z użycia.
 * „Jak przepis wędruje" dotyczy zapożyczeń. Tutaj chodzi
 * o ROZJAZD MIĘDZY WSPOMNIENIEM A TALERZEM — o to, dlaczego
 * wierne odtworzenie przepisu nie przywraca smaku.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dokładnych dat praw miejskich.
 * — NIE PODAJĘ rzeki ani nazw zakładów ceramicznych.
 * — NIE PRZYPISUJĘ Gozdnicy rezerwatu „Żurawie Bagno".
 * — NIE PODAJĘ szczytu ludnościowego z 1997 r.
 * — NIE WYMYŚLAM imprezy, dożynek ani produktu lokalnego.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE MYLĘ GOZDNICY z GOZDEM ani GOZDOWEM.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Gozdnica jest gminą miejską obejmującą jedną miejscowość,
 *   liczy blisko dwa tysiące siedemset mieszkańców na 23,9 km²,
 *   a jedyna wyodrębniona część miasta nosi nazwę Dębówek,
 * — według przekazu konserwatorskiego miejscowość była
 *   określana miastem w XVI w., później status utraciła,
 *   a w 1954 r. odzyskała prawa miejskie dzięki rozkwitowi
 *   przemysłu ceramicznego, który powstał tu w XIX stuleciu,
 * — lasy zajmują 67,9% powierzchni gminy, co daje jej
 *   pięćdziesiąte piąte miejsce w Polsce; teren jest pofalowany,
 *   a gmina należy do Euroregionu Sprewa–Nysa–Bóbr,
 * — przy ulicy Młyńskiej 1 stoi dawny młyn wodny z połowy
 *   XVIII w. — murowany, prostokątny, dwutraktowy, nakryty
 *   dachem mansardowym, z drewnianymi stropami belkowymi
 *   w części wnętrz; dziś jest domem mieszkalnym i figuruje
 *   w wykazie zabytków techniki Lubuskiego Wojewódzkiego
 *   Konserwatora Zabytków,
 * — układ urbanistyczny miasta, również ujęty w wykazie
 *   konserwatora, odzwierciedla jego wiejsko-miejski charakter:
 *   historyczne domy pochodzą głównie z XIX w., są murowane,
 *   parterowe lub piętrowe, w większości sytuowane kalenicowo,
 *   o eklektycznym detalu; w mieście działają stadion
 *   piłkarski, odkryty basen letni, hale sportowe i kort
 *   tenisowy.
 */
export const GOZDNICA: CityContent = {
  slug: "gozdnica",
  h1: "Thermomix Gozdnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gozdnica — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Gozdnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gozdnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gozdnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gozdnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Gozdnica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pamiętamy nie smak, tylko sytuację, w której się go jadło.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gozdnicy – jak wygląda prezentacja?",
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
      id: "smak-z-pamieci",
      heading: "Młyn przy ulicy Młyńskiej, w którym dziś się mieszka — czyli o smaku z pamięci",
      paragraphs: [
        "Przy ulicy Młyńskiej 1 w Gozdnicy stoi dawny młyn wodny z połowy XVIII wieku — murowany, dwutraktowy, pod dachem mansardowym, z drewnianymi stropami belkowymi w części wnętrz. Figuruje w wykazie zabytków techniki, ale dziś jest po prostu domem, w którym ktoś mieszka. Została nazwa ulicy, została bryła, zniknęła funkcja.",
        "To dobry obraz na temat, o którym chcę napisać: rzeczy potrafią zostać tym samym i przestać być tym samym. Prawie każdy ma danie, które „kiedyś smakowało inaczej” — i które, odtworzone co do joty, i tak nie smakuje tak samo.",
        "Przyczyn jest kilka i żadna z nich nie jest winą gotującego. Warto je znać, bo oszczędzają sporo frustracji.",
        "Pierwsza: zmieniły się składniki. Odmiany warzyw i owoców, mąka, mięso, nabiał — to naprawdę nie są dziś te same produkty co trzydzieści lat temu. Nie gorsze, po prostu inne, wyhodowane pod inne wymagania.",
        "Druga: zmienił się sprzęt. Piekarnik grzeje inaczej niż tamten, garnek ma inne dno, kuchenka inną moc. Ten sam przepis w innym sprzęcie to w praktyce inny przepis, choć nikt tego tak nie zapisuje.",
        "Trzecia i moim zdaniem najważniejsza: zmieniliśmy się my. Zmysł smaku dziecka i dorosłego to nie to samo, a przyzwyczajenia do słodyczy i do soli przesuwają się przez całe życie. Danie, które kiedyś było wyraziste, dziś bywa po prostu przeciętne — i to my się przesunęliśmy, nie ono.",
        "Czwarta, często decydująca: tamto danie jadło się rzadko. Raz na tydzień, raz na miesiąc, raz w roku. Rzadkość sama w sobie robi połowę wrażenia, a dzisiaj większość rzeczy mamy na wyciągnięcie ręki.",
        "Z tego wszystkiego wynika rzecz, którą warto sobie powiedzieć wprost: pamiętamy nie smak, tylko sytuację. Kto był przy stole, jaka była pora roku, co się wtedy działo, ile mieliśmy lat. Smak jest w tym wspomnieniu jednym ze składników, i wcale nie głównym.",
        "Praktyczny wniosek jest więc taki, że nie ma sensu gonić za identycznym smakiem — bo nie da się odtworzyć całej reszty. To nie jest porażka w kuchni, to jest po prostu niemożliwe.",
        "Ma natomiast ogromny sens odtwarzanie techniki, a nie efektu. Jak długo to się gotowało. W czym. Czy było zasmażane. Czy stało do następnego dnia. Czy dodawano to na początku, czy na końcu. To są rzeczy, które da się przenieść — w odróżnieniu od tamtej kuchni i tamtej niedzieli.",
        "Dlatego warto pytać o szczegóły, dopóki jest kogo pytać, i zapisywać nie sam przepis, tylko sposób. Lista składników przetrwa wszędzie; sposób znika razem z osobą, która go znała.",
        "I rzecz, która brzmi przewrotnie, a zdarza się bardzo często: czasem danie smakuje gorzej, bo robimy je lepiej. Wersja dopracowana, z lepszym mięsem i staranniej zrobiona, bywa dalsza od wspomnienia niż tamta niedbała, gotowana w pośpiechu i z tego, co było.",
        "Teraz uczciwie o sprzęcie. Thermomix nie odtworzy smaku z dzieciństwa. Żadne urządzenie tego nie potrafi i nikt nie powinien Wam tego obiecywać.",
        "Pomaga natomiast w jednej rzeczy, konkretnej i niemałej: kiedy już trafisz w wersję, która jest blisko, powtórzy ją dokładnie za każdym razem. A przy takich daniach — tych, które próbuje się odtworzyć latami — trafienie raz i utrata przepisu jest najczęstszym rozczarowaniem ze wszystkich.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gozdnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy jest danie, które próbujecie odtworzyć. Chętnie zrobię je z Wami i poszukamy, gdzie leży różnica.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gozdnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gozdnickiej rodziny",
      paragraphs: [
        "Gozdnica jest gminą miejską obejmującą jedną miejscowość i liczy blisko dwa tysiące siedemset mieszkańców na dwudziestu czterech kilometrach kwadratowych; jedyna wyodrębniona część miasta nosi nazwę Dębówek. Według przekazu konserwatorskiego miejscowość była określana miastem już w XVI wieku, później status utraciła, a w 1954 roku odzyskała prawa miejskie dzięki rozkwitowi przemysłu ceramicznego, który powstał tu w XIX stuleciu. Lasy zajmują niemal sześćdziesiąt osiem procent powierzchni gminy, co daje jej pięćdziesiąte piąte miejsce w Polsce — to jedno z najbardziej zalesionych miast w kraju; teren jest pofalowany, a gmina należy do Euroregionu Sprewa–Nysa–Bóbr. Przy ulicy Młyńskiej 1 stoi dawny młyn wodny z połowy XVIII wieku: murowany, prostokątny, dwutraktowy, nakryty dachem mansardowym, z drewnianymi stropami belkowymi w części wnętrz — dziś jest domem mieszkalnym i figuruje w wykazie zabytków techniki Lubuskiego Wojewódzkiego Konserwatora Zabytków. Układ urbanistyczny miasta, również ujęty w tym wykazie, odzwierciedla jego wiejsko-miejski charakter: historyczne domy pochodzą głównie z XIX wieku, są murowane, parterowe lub piętrowe, w większości sytuowane kalenicowo, o eklektycznym detalu. Działają tu stadion piłkarski, odkryty basen letni, hale sportowe i kort tenisowy.",
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

  districtsHeading: "Do których części Gozdnicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, łącznie z Dębówkiem. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Gozdnicę też przyjadę",
  nearbyParagraphs: [
    "Iłowa, Wymiarki, Żagań, Żary i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Iłowa", "Wymiarki", "Żagań", "Żary"],

  about: blokOMnie("do Gozdnicy", "w Gozdnicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gozdnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Gozdnicę-miasto w powiecie żagańskim, a nie o Gozd czy Gozdowo.",
    },
    ...faqWspolne("w Gozdnicy"),
    {
      question: "Dlaczego to samo danie nie smakuje jak kiedyś?",
      answer:
        "Bo zmieniło się kilka rzeczy naraz i żadna nie jest winą gotującego: składniki (odmiany, mąka, nabiał), sprzęt (inny piekarnik, inne dno garnka) i przede wszystkim my sami — zmysł smaku dziecka i dorosłego to nie to samo. Do tego tamto danie jadło się rzadko, a rzadkość robi połowę wrażenia.",
    },
    {
      question: "Jak odtworzyć rodzinne danie?",
      answer:
        "Odtwarzając technikę, a nie efekt: jak długo się gotowało, w czym, czy było zasmażane, czy stało do następnego dnia. Warto pytać o takie szczegóły, dopóki jest kogo pytać, i zapisywać nie sam przepis, tylko sposób — lista składników przetrwa wszędzie, sposób znika razem z osobą, która go znała.",
    },
    {
      question: "Czy Thermomix odtworzy smak z dzieciństwa?",
      answer:
        "Nie i nikt nie powinien tego obiecywać. Pomaga natomiast w czymś konkretnym: kiedy już trafisz w wersję bliską wspomnieniu, powtórzy ją dokładnie. Przy daniach odtwarzanych latami trafienie raz i utrata przepisu jest najczęstszym rozczarowaniem.",
    },
  ],

  geo: { lat: 51.4361, lng: 15.0982 },
};
