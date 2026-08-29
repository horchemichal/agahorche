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
 * KSIĄŻ WIELKI — gmina miejsko-wiejska, powiat miechowski.
 * 22 sołectwa, 5 019 mieszkańców na 138 km², gęstość 36,4 os./km².
 *
 * OŚ STRONY: MIASTO, KTÓRE WRÓCIŁO NA MAPĘ PO 153 LATACH.
 * Prawa miejskie 1385 → utrata 1869 (represje po powstaniu
 * styczniowym) → odzyskanie 1 stycznia 2023 r. To rzadki, świeży
 * i w pełni udokumentowany fakt.
 *
 * Druga oś: PAŁAC MIRÓW, w którym DZIŚ DZIAŁA SZKOŁA. Renesansowa
 * rezydencja biskupa krakowskiego, projektu Santi Gucciego, od 1949 r.
 * pełni funkcje szkolne — i to jest znacznie ciekawsze niż opisywanie
 * jej jako zabytku do zwiedzania (którym zresztą nie jest, patrz niżej).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — PAŁAC MIRÓW wzniesiony w latach 1585–1595 (część źródeł: do 1599)
 *   dla PIOTRA MYSZKOWSKIEGO, biskupa krakowskiego i mecenasa
 *   Jana Kochanowskiego. Architekt: SANTI GUCCI. Styl renesansowy
 *   (manieryzm), z późniejszymi neogotyckimi przekształceniami.
 *   Od 1729 r. własność Wielopolskich,
 * — OD 1949 R. budynek pełni funkcje szkolne. Publiczna szkoła
 *   zakończyła działalność w 2015 r., nauczanie wznowiono w 2016 r.
 *   Obecnie mieści się tam Zespół Niepublicznych Szkół i Placówek
 *   Oświatowych, prowadzony przez Stowarzyszenie „Mirów” (zał. 2015),
 *   które zajmuje się też konserwacją zabytku. Profile: liceum
 *   mundurowe, technikum rolnicze, technikum informatyczne,
 * — PRAWA MIEJSKIE 1385 r. (za panowania królowej Jadwigi) → utrata
 *   1869 r. (ukaz carski, represje po powstaniu styczniowym) →
 *   ODZYSKANIE 1 STYCZNIA 2023 R. Konsultacje: 535 uczestników,
 *   371 za, 119 przeciw, 32 wstrzymujące się. Wójt stał się
 *   burmistrzem, gmina jest dziś miejsko-wiejska,
 * — DEMOGRAFIA: 5 019 mieszkańców (31.12.2024), powierzchnia 138 km²
 *   (13 750 ha), gęstość 36,4 os./km². Przyrost naturalny −43 (2024),
 *   średni wiek 43,7 lat. Prognoza GUS 2023–2040: −619 osób (−12,8%),
 * — 22 SOŁECTWA, 24 miejscowości. Największe: Książ Wielki 836,
 *   Moczydło 306, Antolka 278, Rzędowice 259, Zaryszyn 250,
 * — ROLNICTWO: użytki rolne 67% powierzchni, grunty orne 94,5%
 *   użytków. Zboża, ziemniaki, trzoda chlewna; gleby wysokiej klasy
 *   bonitacyjnej,
 * — GOSPODARKA: 443 podmioty REGON (2023), w tym 428
 *   mikroprzedsiębiorstw i 348 osób fizycznych. Budownictwo 27,6%,
 *   handel i naprawa pojazdów 23,9%. SALDO DOJAZDÓW DO PRACY −222,
 * — DOJAZD: DK7 przechodzi przez Książ Wielki, obok przebiega S7
 *   z węzłem Książ Wielki. Ok. 49 km do Krakowa, ok. 45–50 min
 *   samochodem. BRAK STACJI KOLEJOWEJ w gminie; najbliższe to Tunel
 *   i Kozłów, w gminach sąsiednich,
 * — KGW działają m.in. w Mianocicach, Konaszówce, Antolce
 *   i Giebułtowie,
 * — DOŻYNKI miejsko-gminne: 16 sierpnia 2025 i 16 sierpnia 2026.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ZAPROSZENIA DO ZWIEDZANIA PAŁACU. Obiekt jest czynną szkołą;
 *   regularnej oferty turystycznej z godzinami i biletami
 *   nie potwierdzono. Piszę o nim jako o budynku, w którym się uczy,
 *   nie jako o atrakcji do odwiedzenia,
 * — NAZW PRACODAWCÓW. Nie zidentyfikowano żadnego znaczącego zakładu,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ. Nieznane,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak,
 * — POTRAWY LOKALNEJ. Brak udokumentowanej. Jedyny ślad kulinarny
 *   to nagrodzony „prosiak z Antolki” na dożynkach powiatowych,
 *   czyli konkurs, nie danie,
 * — NUMERU EDYCJI DOŻYNEK.
 *
 * ⚠️ DO SPRAWDZENIA KIEDYŚ: sołectwo RZĘDOWICE w tej gminie nosi
 * tę samą nazwę co wieś, z której pochodził Wojciech Bartos
 * (Bartosz Głowacki) spod Racławic. NIE ZWERYFIKOWAŁAM, czy to
 * ta sama miejscowość — dlatego na stronie NIE MA o tym ani słowa.
 * Gdyby się potwierdziło, byłby to znakomity link między stronami
 * Książa Wielkiego i Racławic.
 *
 * PUŁAPKI:
 * — ZAMEK KSIĄŻ W WAŁBRZYCHU to zupełnie inny obiekt, trzeci
 *   co do wielkości zamek w Polsce. NAJCZĘSTSZA POMYŁKA.
 *   Nasz obiekt to pałac Mirów w Książu Wielkim,
 * — ZAMEK W MIROWIE KOŁO CZĘSTOCHOWY to ruiny na Szlaku Orlich
 *   Gniazd, województwo śląskie. Nasz Mirów to zachowany pałac,
 * — KSIĄŻ WIELKOPOLSKI to inna gmina miejsko-wiejska,
 * — KSIĄŻ MAŁY i KSIĄŻ MAŁY-KOLONIA to sołectwa TEJ SAMEJ gminy —
 *   nie mylić z Książem Wielkim,
 * — „ZAMEK” vs „PAŁAC”: źródła używają obu nazw dla tego samego
 *   budynku. To nie są dwa obiekty,
 * — STATUS MIEJSCOWOŚCI: źródła sprzed 2023 r. opisują Książ Wielki
 *   jako wieś. Dziś to miasto,
 * — DATA BUDOWY: rozbieżność 1595 vs 1599. Piszę „koniec XVI wieku”.
 */

export const KSIAZ_WIELKI: CityContent = {
  slug: "ksiaz-wielki",
  h1: "Thermomix Książ Wielki – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Książ Wielki — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Książ Wielki: bezpłatna prezentacja TM7 u Ciebie w kuchni — Książ Wielki, Moczydło, Antolka, Giebułtów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Książ Wielki — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Książ Wielki. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Książ Wielki przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dwudziestu dwóch sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie dwadzieścia dwa sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Książ Wielki – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Książu Wielkim, jak w Moczydle, Antolce czy Giebułtowie.",
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
      heading: "Miasto, które wróciło na mapę po stu pięćdziesięciu trzech latach",
      paragraphs: [
        "Pierwszego stycznia dwa tysiące dwudziestego trzeciego roku Książ Wielki odzyskał prawa miejskie. Stracił je w tysiąc osiemset sześćdziesiątym dziewiątym, w ramach carskich represji po powstaniu styczniowym — wtedy w Królestwie Polskim odebrano je kilkuset miasteczkom naraz, żeby ukarać je za udział w zrywie. Przerwa trwała sto pięćdziesiąt trzy lata.",
        "Decyzję poprzedziły konsultacje. Wzięło w nich udział pięćset trzydzieści pięć osób: trzysta siedemdziesiąt jeden za, sto dziewiętnaście przeciw, trzydzieści dwie się wstrzymały. Wójt został burmistrzem, a gmina z wiejskiej stała się miejsko-wiejską. Prawa miejskie Książ dostał zresztą po raz pierwszy w tysiąc trzysta osiemdziesiątym piątym roku, za panowania królowej Jadwigi.",
        "Drugą rzeczą, którą trzeba tu zobaczyć, jest pałac Mirów. Renesansową rezydencję postawiono pod koniec szesnastego wieku dla Piotra Myszkowskiego, biskupa krakowskiego — tego samego, który był mecenasem Jana Kochanowskiego. Projekt przypisuje się Santi Gucciemu, jednemu z najważniejszych architektów polskiego renesansu.",
        "I teraz rzecz najciekawsza, a zarazem taka, o której foldery milczą: od tysiąc dziewięćset czterdziestego dziewiątego roku w tym pałacu działa szkoła. Nie muzeum, nie hotel — szkoła. Publiczna zakończyła działalność w dwa tysiące piętnastym, ale rok później nauczanie wznowiono, tym razem prowadzone przez stowarzyszenie, które zajmuje się także konserwacją budynku. Uczą tam dziś do matury i do zawodu: klasa mundurowa, technikum rolnicze, technikum informatyczne.",
        "Piszę o tym z uznaniem, bo to jest bardzo trzeźwe rozwiązanie. Zabytek, w którym codziennie ktoś jest, ogrzewa się i pilnuje, ma się lepiej niż zamknięty zabytek czekający na dotację. Nie zapraszam natomiast do zwiedzania — nie znalazłam potwierdzonej oferty z godzinami i biletami, a wchodzenie do czynnej szkoły to co innego niż wizyta w muzeum.",
        "Gmina jest przy tym rolnicza i rozległa: sto trzydzieści osiem kilometrów kwadratowych, dwadzieścia dwa sołectwa, a użytki rolne zajmują dwie trzecie powierzchni, przy czym aż dziewięćdziesiąt cztery i pół procent tych użytków to grunty orne. To znaczy: pole, nie łąka.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Książ Wielki?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa i uważaj na jedną rzecz: w tej samej gminie są Książ Wielki, Książ Mały i Książ Mały-Kolonia. Trzy różne miejscowości o mylących nazwach. Są też dwa Głogowiany, Stara Wieś i Wrzosy. Dopłaty nie ma nigdzie, ale wolę raz zapytać.",
        "Jeśli masz gospodarstwo, powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się do prac polowych, nie odwrotnie. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Książ Wielki"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dwustu dwudziestu dwóch, którzy wyjeżdżają",
      paragraphs: [
        "W tej gminie saldo dojazdów do pracy wynosi minus dwieście dwadzieścia dwa. To znaczy, że o tylu więcej osób stąd wyjeżdża, niż tu przyjeżdża. Nie ma tu dużego zakładu, nie ma go zresztą w całym powiecie poza Miechowem — pracuje się w polu albo dojeżdża.",
        "Dojeżdża się natomiast wygodniej, niż mogłoby się wydawać, bo przez gminę przechodzi droga krajowa numer siedem, a obok biegnie ekspresówka z własnym węzłem Książ Wielki. Do Krakowa jest stąd około czterdziestu dziewięciu kilometrów, czyli mniej więcej trzy kwadranse jazdy. Kolei natomiast w gminie nie ma — najbliższe stacje leżą w sąsiednich gminach.",
        "Dzień w takim domu jest rozciągnięty z obu stron dojazdem, a między jednym a drugim jest pytanie, kto ugotuje obiad. Praktyczna korzyść jest tu prosta: danie jednogarnkowe wstawia się i wychodzi. Gotuje się bez pilnowania, samo wyłącza i czeka. Nie trzeba wracać co dziesięć minut zamieszać.",
        "Druga rzecz to gotowanie na zapas w weekend. Podwójna porcja zupy, sos na kilka dni, ciasto na pierogi, pasty kanapkowe, chleb — w jednym naczyniu, seriami. W domu, z którego ktoś codziennie dojeżdża, zapas w lodówce jest wart więcej niż codzienne świeże gotowanie, na które i tak nie ma czasu.",
        "Trzeba też powiedzieć rzecz trudniejszą, bo ona kształtuje tutejsze domy: gmina się wyludnia. Przyrost naturalny wynosi minus czterdzieści trzy rocznie, a prognoza Głównego Urzędu Statystycznego do dwa tysiące czterdziestego roku mówi o utracie prawie trzynastu procent mieszkańców. To znaczy, że jeżdżę tu i do domów z dziećmi, i do takich, w których zostały dwie osoby, a dzieci mieszkają w Krakowie.",
        "Dla tych drugich argument brzmi inaczej i wolę go nazwać wprost. Przy gotowaniu dla dwojga nie chodzi o oszczędność czasu, tylko o to, żeby ciepły obiad w ogóle powstawał — zamiast ustąpić kanapce, bo dla dwóch osób szkoda było zachodu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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
    heading: "Książ Wielki i gotowanie — pole, nie łąka",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych ani udokumentowanej potrawy, którą można by nazwać wyłącznie tutejszą. Jedyny ślad kulinarny, jaki znalazłam, to nagrodzony na dożynkach powiatowych „prosiak z Antolki” — czyli konkurs, nie danie z przepisem.",
      "To, co da się o tej kuchni powiedzieć na pewno, wynika z tego, co tu rośnie. Użytki rolne zajmują dwie trzecie gminy, a wśród nich dziewięćdziesiąt cztery i pół procent to grunty orne. To jest ziemia pod pług, nie pod wypas. Uprawia się zboża i ziemniaki, hoduje trzodę.",
      "Z takiej gospodarki wychodzi kuchnia mączna i ziemniaczana: kluski, pierogi, placki, chleb, kasza, mięso wieprzowe raczej na niedzielę niż codziennie. To nie jest kuchnia górska ani nadwiślańska — to kuchnia płaskiej, żyznej wsi, która przez wieki jadła to, co sama wyprodukowała.",
      "I dokładnie w tym miejscu urządzenie coś wnosi, choć nie wszędzie tyle samo. Ciasto na kluski i pierogi wyrabia się samo — to jest największa różnica, bo wyrabianie ciasta jest tu czynnością codzienną, a nie odświętną. Farsz miele się i miesza bez maszynki. Chleb wyrasta w naczyniu. Placki ziemniaczane wciąż trzeba usmażyć na patelni, ale ziemniaki nie idą już na tarkę.",
      "Nie zmienia to niczego w smaku i nie ma zmieniać. Zmienia tylko to, ile czasu spędzasz przy blacie zanim zaczniesz gotować.",
    ],
  },

  districtsHeading: "Gdzie w gminie Książ Wielki dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu dwóch sołectw, bez żadnej dopłaty za odległość: Książa Wielkiego, Antolki, Boczkowic, Cisiej Woli, Cisia, Częstoszowic, Giebułtowa, Głogowian-Starej Wsi, Głogowian-Wrzosów, Konaszówki, Krzeszówki, Książa Małego, Książa Małego-Kolonii, Łazów, Małoszowa, Mianocic, Moczydła, Rzędowic, Tochołowa, Trzonowa, Wielkiej Wsi i Zaryszyna.",
    "Skala jest tu bardzo rozproszona i warto to wiedzieć. Sam Książ Wielki liczy niecałe dziewięćset mieszkańców, kolejne wsie — Moczydło, Antolka, Rzędowice, Zaryszyn — po dwieście pięćdziesiąt do trzystu. Cała gmina to nieco ponad pięć tysięcy osób rozłożonych na stu trzydziestu ośmiu kilometrach kwadratowych, czyli trzydziestu sześciu mieszkańców na kilometr. To jedna z rzadziej zaludnionych gmin w Małopolsce.",
    "Od pierwszego stycznia dwa tysiące dwudziestego trzeciego roku Książ Wielki jest znowu miastem, po stu pięćdziesięciu trzech latach przerwy. W jego centrum stoi renesansowy pałac Mirów, w którym od siedemdziesięciu kilku lat mieści się szkoła.",
    "O dojeździe wprost: w gminie nie ma stacji kolejowej — najbliższe, Tunel i Kozłów, leżą w gminach sąsiednich. Za to przez Książ Wielki przechodzi droga krajowa numer siedem, a obok biegnie ekspresówka z osobnym węzłem o nazwie Książ Wielki. Do Krakowa jest stąd około czterdziestu dziewięciu kilometrów, czyli mniej więcej trzy kwadranse.",
  ],
  districts: [
    "Książ Wielki",
    "Antolka",
    "Boczkowice",
    "Cisia Wola",
    "Cisie",
    "Częstoszowice",
    "Giebułtów",
    "Głogowiany-Stara Wieś",
    "Głogowiany-Wrzosy",
    "Konaszówka",
    "Krzeszówka",
    "Książ Mały",
    "Książ Mały-Kolonia",
    "Łazy",
    "Małoszów",
    "Mianocice",
    "Moczydło",
    "Rzędowice",
    "Tochołów",
    "Trzonów",
    "Wielka Wieś",
    "Zaryszyn",
  ],

  nearbyHeading: "Miechów, Charsznica i Kozłów też są na mojej trasie",
  nearbyParagraphs: [
    "Do Miechowa mam stąd kilkanaście kilometrów, do Charsznicy, Kozłowa i Słaboszowa podobnie. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli jedziesz stąd pociągiem, wsiadasz w Tunelu albo w Kozłowie — obie stacje leżą w gminach sąsiednich, ale blisko. Do Krakowa dojedziesz też wprost siódemką.",
  ],
  nearbyTowns: [
    "Miechów",
    "Charsznica",
    "Kozłów",
    "Słaboszów",
    "Racławice",
    "Kraków",
  ],

  about: blokOMnie("do gminy Książ Wielki", "w powiecie miechowskim"),

  faq: [
    {
      question: "Czy chodzi o ten sam zamek Książ, co koło Wałbrzycha?",
      answer:
        "Nie i to najczęstsza pomyłka przy tej gminie. Zamek Książ w Wałbrzychu to obiekt na Dolnym Śląsku, trzeci co do wielkości zamek w Polsce. Tutaj, w Książu Wielkim w powiecie miechowskim, stoi pałac Mirów — renesansowa rezydencja z końca szesnastego wieku, w której od tysiąc dziewięćset czterdziestego dziewiątego roku mieści się szkoła. Bywa też mylony z ruinami zamku w Mirowie koło Częstochowy, a to znowu co innego.",
    },
    ...faqWspolne("w gminie Książ Wielki"),
    {
      question: "Mieszkam w Książu Małym. To ta sama gmina?",
      answer:
        "Ta sama i nawet dwa sołectwa noszą podobną nazwę: Książ Mały oraz Książ Mały-Kolonia. To osobne miejscowości, obie w gminie Książ Wielki, i obie odwiedzam bez dopłaty. Przy umawianiu powiedz dokładnie którą — właśnie dlatego, że nazwy są mylące.",
    },
    {
      question: "Czy pałac Mirów można zwiedzać?",
      answer:
        "Nie znalazłam potwierdzonej oferty zwiedzania z godzinami i biletami, więc nie będę nikogo tam wysyłać. W pałacu działa szkoła — liceum i technika — a stowarzyszenie, które ją prowadzi, zajmuje się przy okazji konserwacją budynku. Jeśli planujesz wizytę, najlepiej zapytać wprost w szkole albo w urzędzie miasta.",
    },
  ],

  geo: { lat: 50.4553, lng: 20.1183 },
};
