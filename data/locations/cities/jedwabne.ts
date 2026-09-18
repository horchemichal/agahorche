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
 * ⚠⚠⚠ JEDWABNE — NAJTRUDNIEJSZE MIASTO W CAŁYM PROJEKCIE.
 *
 * TWARDA, NIEPRZEKRACZALNA GRANICA:
 * Nazwa tego miasta jest w Polsce jednoznacznie kojarzona
 * z jednym wydarzeniem z 1941 roku. TA STRONA NIE ZAWIERA
 * I NIE MOŻE ZAWIERAĆ ŻADNEJ WZMIANKI, ŻADNEJ ALUZJI
 * I ŻADNEGO ODNIESIENIA DO TEGO TEMATU — w żadnym kierunku,
 * w żadnym kontekście, także „ostrożnościowym".
 * ZERO roku 1941. ZERO lat czterdziestych. ZERO wojny.
 * ZERO słów „pamięć", „historia trudna", „przeszłość",
 * „to, co się wydarzyło", „mimo wszystko", „pomimo".
 * ZERO jakiegokolwiek zdania, które dałoby się odczytać
 * jako komentarz.
 * Strona stoi WYŁĄCZNIE na faktach neutralnych: administracja,
 * geografia, rzemiosło, rolnictwo, zabytki z datami.
 * Ton: dokładnie taki sam jak na każdej innej stronie —
 * rzeczowy, spokojny, bez żadnej szczególnej ostrożności
 * widocznej w tekście. Wyjątkowość tej strony ma być
 * NIEWIDOCZNA dla czytelnika.
 *
 * MIASTO 1 668, GMINA 4 839 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 4,5 km² (gęstość 367,4 os./km²),
 * GMINY 159,2 km² (gęstość 31 os./km²) — najgęściej
 * zaludniona gmina tej partii.
 * 57 WSI I OSAD, m.in. Bartki, Biodry, BRZOSTOWO, Janczewo,
 * Kotowo. ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 1 600 — blisko, używam GUS.
 * POWIAT ŁOMŻYŃSKI.
 *
 * NAZWA I POCZĄTKI: osada założona w XV w. przez BYLICÓW,
 * którzy przyjęli nazwisko JEDWABIŃSCY.
 * ⚠⚠ HIPOTEZA ZABITA: nazwa NIE POCHODZI od jedwabiu
 * ani od sukiennictwa — jest odimienna i STARSZA
 * niż tutejsze warsztaty tkackie (XV w. kontra koniec XVIII w.).
 * NIE PISZĘ, że miasto nazwano od jedwabiu.
 *
 * PRAWA MIEJSKIE 1736 r. — potwierdzone dwoma niezależnymi
 * źródłami. ⚠ NADAWCY ANI RODZAJU PRAWA NIE PODAJĘ.
 * ⚠ NIE PODAJĘ, czy prawa były tracone i przywracane.
 *
 * SUKIENNICTWO: „OD KOŃCA XVIII WIEKU W JEDWABNEM POWSTAWAŁY
 * WARSZTATY TKACKIE I FABRYKI SUKNA".
 * ⚠ SKALI (liczby warsztatów, zatrudnienia) NIE PODAJĘ.
 * Miasto pełni dziś funkcję ośrodka działającego na rzecz
 * rolnictwa; gmina ma charakter typowo rolniczy.
 *
 * GEOGRAFIA: RZEKA BIEBRZA STANOWI GRANICĘ między
 * Biebrzańskim Parkiem Narodowym a gminą. Gmina położona
 * wzdłuż BbPN — „największego w Europie Środkowej kompleksu
 * naturalnych bagien i torfowisk".
 * ⚠⚠ NIE PODAJĘ, nad jaką rzeką leży SAMO MIASTO —
 * nie potwierdzono. Nie zgaduję.
 *
 * ⚠⚠ BRZOSTOWO — PODSTAWA KĄTA. „ŚWIAT SZCZĘŚLIWYCH KRÓW":
 * we wsi Brzostowo (gmina Jedwabne) OK. 150 KRÓW CODZIENNIE
 * PRZEPRAWIA SIĘ WPŁAW PRZEZ BIEBRZĘ na pastwiska.
 * Obory i pastwiska leżą PO PRZECIWNYCH STRONACH RZEKI.
 * Rano stado gromadzi się na brzegu i wchodzi do wody;
 * w dzień pasie się na łąkach, często brodząc po pierś
 * w wodzie; wieczorem SAMODZIELNIE WRACA przez rzekę
 * do obór, gnane potrzebą doju.
 * BEZ NADZORU LUDZI I BEZ PSÓW. Bydło nie jest ogrodzone
 * ani uwiązane. KAŻDA KROWA SAMA ODNAJDUJE SWOJĄ OBORĘ.
 * Najlepiej oglądać po godz. 16 w miesiącach letnich.
 * Podobna praktyka: Targonie Wielkie i Niwków.
 * Wypas utrzymuje naturalny charakter bagien biebrzańskich.
 * ⚠ DATY POCZĄTKU TEJ PRAKTYKI NIE PODAJĘ — nie potwierdzono.
 *
 * ZABYTKI: KOŚCIÓŁ PARAFIALNY ŚW. JAKUBA APOSTOŁA
 * — 1925–1935. PLEBANIA — koniec XIX w. MUR KOŚCIELNY
 * — 1926–1935. ZABYTKOWY KOŚCIÓŁ W BURZYNIE — w rejestrze
 * zabytków klasy „A". ⚠ BURZYNA NIE DATUJĘ.
 * WYDARZENIA: styczeń — przegląd pieśni i kolęd;
 * LIPIEC — DNI JEDWABNEGO i plener malarski;
 * październik — festiwal pieśni patriotycznych.
 * ⚠ FESTIWALU PIEŚNI PATRIOTYCZNYCH NIE WYMIENIAM —
 * przy tym mieście każdy wątek narodowy jest niepotrzebnym
 * ryzykiem. Wymieniam tylko Dni Jedwabnego i plener.
 * ⚠ ROKU PIERWSZEJ EDYCJI NIE PODAJĘ.
 * JEDWABNE NIE NALEŻY DO CITTASLOW (nie potwierdzono).
 * ⚠ NIE PRZYPISUJĘ Jedwabnemu produktu z Listy Produktów
 * Tradycyjnych — nie ma takiego.
 *
 * KĄT: SKĄD TO JEST — czy warto wiedzieć, skąd pochodzi
 * to, co gotujemy.
 * Kąt od Brzostowa: stu pięćdziesięciu krów, które dwa razy
 * dziennie przepływają rzekę, bo pastwisko jest po drugiej
 * stronie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że większość z nas nie wie o swoim jedzeniu prawie nic
 *   poza ceną, i że to jest zjawisko nowe, nie odwieczne,
 * — że wiedza o pochodzeniu składnika zmienia dwie rzeczy:
 *   sposób obchodzenia się z nim i to, ile się go marnuje,
 * — że nikt nie wyrzuca jedzenia, o którym wie, skąd jest —
 *   to jest obserwacja, nie moralizowanie,
 * — CO REALNIE DA SIĘ ZROBIĆ: kupować jedną albo dwie rzeczy
 *   u kogoś, kogo się zna — jajka, ser, miód, warzywa —
 *   a resztę normalnie,
 * — ŻE NIE CHODZI O IDEOLOGIĘ ANI O KUPOWANIE WSZYSTKIEGO
 *   NA TARGU. Większość ludzi nie ma na to czasu ani pieniędzy
 *   i to jest w porządku. TO MUSI ZABRZMIEĆ WYRAŹNIE,
 * — że etykieta mówi mniej, niż się wydaje, a rozmowa
 *   ze sprzedającym więcej,
 * — że najlepszym pytaniem nie jest „czy to ekologiczne",
 *   tylko „kiedy to zostało zrobione",
 * — UCZCIWIE: urządzenie nie ma z tym nic wspólnego —
 *   nie zmienia jakości wsadu i nie wie, skąd on jest,
 * — ALE jedno robi: ułatwia przerobienie tego, co się dostało
 *   w dużej ilości i naraz, a przy kupowaniu u ludzi
 *   właśnie tak się kupuje.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO o tym, że lokalne
 *   albo ekologiczne jest „zdrowsze". ZERO o mleku surowym.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM, GOSPODARSTW ANI TARGOWISK.
 * — ⚠ ZERO MORALIZOWANIA I ZERO OCENIANIA CZYICHŚ ZAKUPÓW.
 *   Wyraźnie napisane, że kupowanie w sklepie jest w porządku.
 * — ⚠ ZERO SUGESTII, ŻE CZYTELNIK POWINIEN WYDAWAĆ WIĘCEJ.
 *
 * ⚠⚠⚠ ETYKA:
 * — PATRZ NAGŁÓWEK. Zero 1941, zero wojny, zero aluzji.
 * — ZERO Zagłady, gett, pogromów, cmentarzy.
 * — ZERO wysiedleń i pacyfikacji.
 * — ZERO granicy, wojska, podziemia, powstań.
 * — ZERO festiwalu pieśni patriotycznych i wszelkich wątków
 *   narodowych.
 * — ZERO konfliktów jakiegokolwiek rodzaju.
 * — ZERO bezrobocia i wyludniania.
 * — ⚠ ZWIERZĘTA: krowy opisuję rzeczowo, bez antropomorfizacji
 *   ponad to, co jest w źródle, i bez wątku dobrostanu
 *   jako sporu. Nazwy „świat szczęśliwych krów" NIE UŻYWAM
 *   — jest zbyt sentymentalna i pochodzi z materiału
 *   turystycznego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Składnik zależny
 * od miejsca" (Choroszcz) dotyczy tego, że ten sam produkt
 * gdzie indziej smakuje inaczej. „Mleko i nabiał" dotyczy
 * obróbki nabiału. „Marnowanie jedzenia" dotyczy tego,
 * co ląduje w koszu. „Nadmiar jednego składnika" (Wysokie
 * Mazowieckie) dotyczy rozdysponowania. Tutaj chodzi
 * o WIEDZĘ O POCHODZENIU: czy warto wiedzieć, skąd jest to,
 * co gotujemy, i co ta wiedza realnie zmienia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że nazwa miasta pochodzi od jedwabiu.
 * — NIE PODAJĘ nadawcy praw miejskich ani rodzaju prawa.
 * — NIE PODAJĘ, nad jaką rzeką leży samo miasto.
 * — NIE PODAJĘ skali sukiennictwa ani liczby sołectw.
 * — NIE PODAJĘ, od kiedy trwa wypas w Brzostowie.
 * — NIE UŻYWAM określenia „świat szczęśliwych krów".
 * — NIE WYMIENIAM festiwalu pieśni patriotycznych.
 * — NIE PRZYPISUJĘ Jedwabnemu produktu z Listy Produktów
 *   Tradycyjnych.
 * — NIE MYLĘ JEDWABNEGO z JEDWABNEM w warmińsko-mazurskiem
 *   ani w kujawsko-pomorskiem. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 668 mieszkańców na 4,5 km², gmina 4 839
 *   na 159,2 km², obejmująca 57 wsi i osad; powiat łomżyński,
 * — osadę założyli w XV w. Bylicowie, którzy przyjęli nazwisko
 *   Jedwabińscy; prawa miejskie miasto otrzymało w 1736 r.,
 * — od końca XVIII w. powstawały tu warsztaty tkackie
 *   i fabryki sukna; dziś gmina ma charakter rolniczy,
 * — Biebrza stanowi granicę między gminą a Biebrzańskim
 *   Parkiem Narodowym, chroniącym największy w Europie
 *   Środkowej kompleks naturalnych bagien i torfowisk,
 * — we wsi Brzostowo około stu pięćdziesięciu krów codziennie
 *   przeprawia się wpław przez Biebrzę na pastwiska, bo obory
 *   i łąki leżą po przeciwnych stronach rzeki; wieczorem
 *   stado samodzielnie wraca, bez nadzoru ludzi i bez psów,
 *   a każda krowa sama odnajduje swoją oborę; ten wypas
 *   utrzymuje naturalny charakter biebrzańskich bagien,
 * — kościół parafialny świętego Jakuba Apostoła z lat
 *   1925–1935, plebania z końca XIX w., mur kościelny
 *   z lat 1926–1935; w Burzynie zabytkowy kościół wpisany
 *   do rejestru klasy „A",
 * — w lipcu odbywają się Dni Jedwabnego i plener malarski.
 */
export const JEDWABNE: CityContent = {
  slug: "jedwabne",
  h1: "Thermomix Jedwabne – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jedwabne — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Jedwabnem: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jedwabne — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jedwabnem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jedwabnego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Jedwabne i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nikt nie wyrzuca jedzenia, o którym wie, skąd jest.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jedwabnem – jak wygląda prezentacja?",
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
      id: "skad-to-jest",
      heading: "Krowy, które przepływają rzekę — czyli skąd bierze się to, co gotujemy",
      paragraphs: [
        "We wsi Brzostowo, w gminie Jedwabne, dzieje się coś, co warto zobaczyć na własne oczy. Obory stoją po jednej stronie Biebrzy, a pastwiska po drugiej — więc około stu pięćdziesięciu krów codziennie przeprawia się przez rzekę wpław. Rano stado gromadzi się na brzegu i wchodzi do wody, w dzień pasie się na łąkach, często brodząc po pierś, a wieczorem wraca przez rzekę do obór. Samo. Bez nadzoru ludzi i bez psów. Każda krowa odnajduje swoją oborę. Ten wypas jest zresztą powodem, dla którego tamtejsze bagna zachowują naturalny charakter.",
        "Nie przywołuję tego dla widoku, choć widok podobno jest niezwykły. Przywołuję, bo to jest najbardziej dosłowna odpowiedź na pytanie, o którym w kuchni prawie nie myślimy: skąd bierze się to, co jemy.",
        "Bo prawda jest taka, że o większości swojego jedzenia nie wiemy nic poza ceną. I to jest zjawisko nowe, nie odwieczne — jeszcze dwa, trzy pokolenia temu spora część tego, co lądowało na stole, pochodziła z miejsca, które znało się z widzenia.",
        "Wiedza o pochodzeniu składnika zmienia dwie rzeczy i obie są całkiem praktyczne. Pierwsza: sposób obchodzenia się z nim. Jajka od kogoś, kogo się zna, traktuje się inaczej niż jajka z półki — dokładniej, uważniej, z większą uwagą przy gotowaniu.",
        "Druga jest ważniejsza i jest to obserwacja, nie morał: nikt nie wyrzuca jedzenia, o którym wie, skąd jest. Ser kupiony od konkretnej osoby leży w lodówce, dopóki się go nie zje. Ten sam ser kupiony anonimowo bywa zapomniany. Nie wiem, dlaczego tak działamy, ale działamy tak wszyscy.",
        "I teraz rzecz, którą chcę napisać wyraźnie, bo temat łatwo osuwa się w kazanie: nie chodzi o to, żeby kupować wszystko na targu i od rolników. Większość ludzi nie ma na to ani czasu, ani pieniędzy, ani takiego targu w pobliżu — i to jest zupełnie w porządku. Nie mam zamiaru oceniać niczyich zakupów i nie uważam kupowania w sklepie za gorsze.",
        "To, co realnie działa i co widzę u klientek, jest znacznie skromniejsze: jedna albo dwie rzeczy kupowane u kogoś, kogo się zna. Jajka. Ser. Miód. Ziemniaki na zimę. Reszta normalnie, w sklepie. To wystarczy, żeby te dwie czy trzy rzeczy w kuchni zaczęły znaczyć coś innego, a nie wywraca nikomu życia.",
        "Warto też wiedzieć, że etykieta mówi mniej, niż się wydaje. Kraj pochodzenia na opakowaniu to często kraj pakowania. Za to rozmowa z kimś, kto sprzedaje, mówi bardzo dużo — i nie chodzi o pytanie „czy to ekologiczne”, bo na to każdy odpowie tak samo. Najlepsze pytanie brzmi: kiedy to zostało zrobione. Data mówi więcej niż deklaracja.",
        "I uczciwie o sprzęcie, bo tutaj nie ma z tym nic wspólnego. Urządzenie nie zmienia jakości wsadu i nie wie, skąd on pochodzi. Z gorszego składnika nie zrobi lepszego i żaden program tego nie zmieni.",
        "Jedną rzecz ułatwia i akurat ona ma tu znaczenie. Kupując u ludzi, kupuje się inaczej: nie po sztuce, tylko naraz i dużo — skrzynkę, wiadro, pół barana, dziesięć litrów mleka. Przerobienie takiej ilości bez pomocy potrafi zająć cały dzień. To urządzenie robi z tego przecier, mus albo pastę bez stania nad garnkiem, i dzięki temu decyzja o wzięciu całej skrzynki przestaje być ryzykowna.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jedwabnem?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w domu produkty z własnego gospodarstwa albo od sąsiadów — powiedzcie o tym przy umawianiu. Chętnie ugotuję z tego, co u Was jest, zamiast przywozić wszystko ze sobą.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jedwabnem"),
    sekcjaRaty("w Jedwabnem"),
    {
      id: "rodzina",
      heading: "Thermomix dla jedwabieńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad tysiąc sześćset mieszkańców na czterech i pół kilometrach kwadratowych, a cała gmina blisko pięć tysięcy na stu pięćdziesięciu dziewięciu, w pięćdziesięciu siedmiu wsiach i osadach. Osadę założyli w piętnastym wieku Bylicowie, którzy wkrótce przyjęli nazwisko Jedwabińscy — od nich, a nie od jedwabiu, pochodzi nazwa miasta. Prawa miejskie Jedwabne otrzymało w 1736 roku. Od końca osiemnastego wieku powstawały tu warsztaty tkackie i fabryki sukna; dziś gmina ma charakter rolniczy. Biebrza stanowi granicę między gminą a Biebrzańskim Parkiem Narodowym, chroniącym największy w Europie Środkowej kompleks naturalnych bagien i torfowisk. We wsi Brzostowo około stu pięćdziesięciu krów codziennie przeprawia się wpław przez rzekę na pastwiska i wieczorem samo wraca do obór. Kościół parafialny świętego Jakuba Apostoła wzniesiono w latach 1925–1935, plebania pochodzi z końca dziewiętnastego wieku, a mur kościelny z lat 1926–1935; w Burzynie stoi zabytkowy kościół wpisany do rejestru klasy „A”. W lipcu odbywają się Dni Jedwabnego i plener malarski.",
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

  districtsHeading: "Do których części gminy Jedwabne dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy, w tym do Brzostowa i Burzyna. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Jedwabne też przyjadę",
  nearbyParagraphs: [
    "Łomża, Stawiski, Kolno, Wizna i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łomża", "Stawiski", "Kolno", "Szczuczyn"],

  about: blokOMnie("do Jedwabnego", "w Jedwabnem i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jedwabnego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Jedwabne w powiecie łomżyńskim, w województwie podlaskim, a nie o Jedwabno w warmińsko-mazurskiem.",
    },
    ...faqWspolne("w Jedwabnem"),
    {
      question: "Czy warto wiedzieć, skąd pochodzą składniki?",
      answer:
        "Zmienia to dwie praktyczne rzeczy: sposób obchodzenia się z produktem i to, ile się go marnuje. Nikt nie wyrzuca jedzenia, o którym wie, skąd jest — ser kupiony od konkretnej osoby leży w lodówce, dopóki się go nie zje, a ten sam ser kupiony anonimowo bywa zapomniany.",
    },
    {
      question: "Czy trzeba kupować wszystko na targu i od rolników?",
      answer:
        "Nie i nie zamierzam nikogo do tego namawiać. Większość ludzi nie ma na to czasu ani pieniędzy, a kupowanie w sklepie nie jest gorsze. Realnie działa coś znacznie skromniejszego: jedna albo dwie rzeczy kupowane u kogoś, kogo się zna — jajka, ser, miód, ziemniaki na zimę — a reszta normalnie.",
    },
    {
      question: "Czy Thermomix poprawi jakość składników?",
      answer:
        "Nie. Nie zmienia jakości wsadu i z gorszego składnika nie zrobi lepszego. Ułatwia natomiast co innego: kupując bezpośrednio, bierze się dużo naraz — skrzynkę, wiadro, kilka kilogramów — a przerobienie takiej ilości bez pomocy zajmuje cały dzień. To urządzenie robi z tego przecier, mus albo pastę bez stania nad garnkiem.",
    },
  ],

  geo: { lat: 53.2864, lng: 22.3053 },
};
