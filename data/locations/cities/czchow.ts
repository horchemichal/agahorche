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
 * CZCHÓW — gmina miejsko-wiejska, powiat brzeski.
 * 9 699 mieszkańców (31.12.2024) na 66,4 km², gęstość 147 os./km².
 * Miasto Czchów liczy ok. 2 270 osób (31.12.2023).
 *
 * OŚ STRONY: MIASTO, KTÓRE PRZESTAŁO BYĆ MIASTEM I WRÓCIŁO PO
 * SIEDEMDZIESIĘCIU DWÓCH LATACH. Prawa miejskie przed 1333 r.,
 * utrata w 1928 r., odzyskanie 1 stycznia 2000 r. To jedyna taka
 * historia w powiecie i daje naturalne przejście do tego, jak
 * dziś wygląda tu codzienność: dwa i pół tysiąca ludzi w mieście,
 * siedem tysięcy na wsi wokół, wszyscy dojeżdżają.
 *
 * Twarde liczby, na których stoi ta strona:
 *   — 593 osoby wyjeżdżają do pracy, 306 przyjeżdża (dane z 2006 r.!),
 *   — sady to 8,3% użytków rolnych — wyraźnie powyżej średniej powiatu,
 *   — 973 podmioty REGON, z tego 949 to mikrofirmy do 9 osób,
 *   — przyrost naturalny 2024: +1 (69 urodzeń, 68 zgonów).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 9 699 mieszkańców,
 *   66,4 km², 147 os./km², średni wiek 39,2 lat. W 2024: 69 urodzeń,
 *   68 zgonów (+1), saldo migracji ogółem −39. Ludność w latach
 *   2002–2024 wzrosła o 7,5%, ale od 2020 r. łagodnie spada
 *   (9 921 → 9 757 → 9 699),
 * — PRAWA MIEJSKIE: przed 1333 r.; prawo magdeburskie od Kazimierza
 *   Wielkiego w 1355 r.; utrata praw w 1928 r.; odzyskanie
 *   1 stycznia 2000 r. (czchow.pl, ZGJR),
 * — SOŁECTWA (9 + dzielnica Czchów): Będzieszyna, Biskupice
 *   Melsztyńskie, Domosławice, Jurków, Piaski-Drużków, Tworkowa,
 *   Tymowa, Wytrzyszczka, Złota (wykaz jednostek pomocniczych gminy),
 * — GOSPODARKA (2024): 973 podmioty REGON, 839 osób fizycznych,
 *   949 mikrofirm. Bezrobocie rejestrowane 5,0%. Przeciętne
 *   wynagrodzenie 6 953,88 zł brutto = 80,6% średniej wojewódzkiej.
 *   Pracujących 105 na 1000 mieszkańców,
 * — DOJAZDY DO PRACY: 593 wyjeżdża, 306 przyjeżdża, saldo −287.
 *   ⚠️ TO DANE Z 2006 ROKU — jedyne dostępne. Na stronie mówię
 *   o kierunku zjawiska, nie o liczbach,
 * — ROLNICTWO: użytki rolne 61,5% powierzchni gminy, sady 8,3%
 *   użytków rolnych (Strategia Rozwoju Gminy 2016–2024).
 *   Lesistość 25,7% (1 709 ha, GUS 2019),
 * — WIEŻA (BASZTA) W CZCHOWIE: zamek z przełomu XIII/XIV w.,
 *   pierwsza wzmianka o burgrabim 1356 r.; wieża o podstawie 12,5 m,
 *   dziś ok. 20 m, górna część ośmioboczna. Schody zrekonstruowane
 *   1998, udostępnienie do zwiedzania grudzień 2018, oficjalne
 *   otwarcie 18 maja 2019 (zamkipolskie.com),
 * — KOŚCIÓŁ NARODZENIA NMP: gotycki, 1346 r.; chrzcielnica 1506,
 *   dzwony 1420 i 1600 (czchow.pl),
 * — DREWNIANE KOŚCIOŁY: Złota — św. Michała Archanioła, 1649,
 *   fundacja Tarłów; Tymowa — św. Mikołaja, XVIII w.; Jurków —
 *   sprzed 1586 r. (MOKSiR Czchów),
 * — ZAMEK TROPSZTYN w Wytrzyszczce: XIII–XIV w., odbudowany,
 *   WŁASNOŚĆ PRYWATNA, udostępniany sezonowo (czchow.pl),
 * — JEZIORO CZCHOWSKIE: zbiornik wyrównawczy poniżej Rożnowskiego,
 *   zapora budowana 1936–1949; elektrownia wodna Czchów — dwie
 *   turbiny Kaplana, hydrozespoły z 1950 i 1954 r., moc łączna
 *   9 MW (TAURON Ekoenergia),
 * — BASZTA JAZZ FESTIVAL: pierwsza edycja 1 lipca 2000 r.,
 *   pomysłodawca Jacek Mazur (Jazz Band Ball Orchestra),
 *   czchowianin; organizator MOKSiR; 26. edycja w 2025 r.,
 * — FASOLA „PIĘKNY JAŚ Z DOLINY DUNAJCA” — ChNP, rozporządzenie
 *   wykonawcze Komisji (UE) nr 1073/2011 z 25 października 2011 r.
 *   Czchów jest JEDNĄ Z JEDENASTU gmin obszaru i JEDYNĄ z powiatu
 *   brzeskiego,
 * — REZERWAT „BUKOWIEC”: 5,53 ha, utworzony 1959, buczyna karpacka
 *   i kwitnący bluszcz (Nadleśnictwo Brzesko),
 * — TRANSPORT: DK75 Kraków–Brzesko–Nowy Sącz przechodzi przez
 *   Tymową, Jurków i Czchów. DW966 z Wieliczki przez Gdów kończy się
 *   w Tymowej. W gminie NIE MA stacji kolejowej — najbliższa to
 *   Brzesko Okocim, ok. 20 km. Odległości drogowe: Brzesko 20–21 km
 *   (ok. 21 min), Bochnia 29 km (ok. 34 min), Nowy Sącz 31–38 km,
 *   Tarnów 38 km, Kraków 74 km (conadrogach.pl),
 * — SĄSIEDZI (7): Dębno, Gnojnik, Gródek nad Dunajcem, Iwkowa,
 *   Lipnica Murowana, Łososina Dolna, Zakliczyn.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZW WIĘKSZYCH PRACODAWCÓW. Ani Raport o stanie Gminy 2023,
 *   ani Strategia Rozwoju, ani BIP nie podają takiego wykazu.
 *   Nie wymieniam żadnej firmy jako „największej”,
 * — ŚWIEŻYCH LICZB O DOJAZDACH DO PRACY. Dostępne są tylko dane
 *   z 2006 r. Podaję kierunek zjawiska, nie liczby,
 * — WPISU NA MINISTERIALNĄ LISTĘ PRODUKTÓW TRADYCYJNYCH.
 *   Nie potwierdzono żadnego przypisanego wprost gminie Czchów.
 *   Nie piszę ani że jest, ani że na pewno nie ma,
 * — GODZIN OTWARCIA I CEN BILETÓW DO WIEŻY I NA TROPSZTYN.
 *   Zmieniają się sezonowo; Tropsztyn jest prywatny,
 * — POWIERZCHNI I POJEMNOŚCI JEZIORA CZCHOWSKIEGO. Źródła podają
 *   346 albo 364 ha oraz 8 albo 12 mln m³. Nie podaję żadnej,
 * — WYSOKOŚCI N.P.M. Źródła podają 269 m i 210–220 m — najpewniej
 *   różne punkty pomiaru,
 * — AKTUALNOŚCI PROMU PRZEZ DUNAJEC. Wzmiankowany na stronie gminy,
 *   nie potwierdzony na 2026 r.
 *
 * PUŁAPKI:
 * — SUSKA SECHLOŃSKA NIE JEST Z CZCHOWA. Obszar ChOG to cztery
 *   gminy: Laskowa, Iwkowa, Łososina Dolna, Żegocina. Czchów należy
 *   do turystycznego „Śliwkowego Szlaku”, co bywa mylone
 *   z pochodzeniem produktu,
 * — ZAMEK MELSZTYN LEŻY W GMINIE ZAKLICZYN (Charzewice), mimo że
 *   sołectwo Biskupice Melsztyńskie należy do gminy Czchów.
 *   Do gminy Czchów należą Czchów i Tropsztyn,
 * — JEZIORO CZCHOWSKIE ≠ JEZIORO ROŻNOWSKIE. Rożnowskie leży
 *   w gminie Gródek nad Dunajcem, powiat nowosądecki,
 * — JURKÓW JEST DWA: w gminie Czchów (powiat brzeski) i w gminie
 *   Dobra (powiat limanowski). Obie miejscowości mamy na stronach,
 * — „ZAMEK” W CZCHOWIE TO W PRAKTYCE WIEŻA z fragmentami murów.
 *   Stąd nazwa festiwalu jazzowego,
 * — PIASKI-DRUŻKÓW — oficjalna pisownia z dywizem,
 * — BĘDZIESZYNA, nie „Będziszyna”,
 * — ROK 2000 TO ODZYSKANIE, A NIE NADANIE PRAW MIEJSKICH.
 */

export const CZCHOW: CityContent = {
  slug: "czchow",
  h1: "Thermomix Czchów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Czchów — prezentacja i cena",
  seoDescription:
    "Thermomix w Czchowie: bezpłatna prezentacja TM7 u Ciebie w kuchni — Czchów, Jurków, Tymowa, Złota, Domosławice. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czchów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Czchów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Czchowa i do całej gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam tak samo do miasta, jak do Jurkowa, Tymowej czy Złotej.",

  highlights: highlightyStandardowe("miasto i wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czchowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Czchowie, jak w Jurkowie, Tymowej, Złotej czy Wytrzyszczce.",
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
      heading: "Miasto, które przez siedemdziesiąt dwa lata nie było miastem",
      paragraphs: [
        "Czchów był miastem, zanim został miastem po raz drugi. Prawa miejskie miał już przed tysiąc trzysta trzydziestym trzecim rokiem, a w tysiąc trzysta pięćdziesiątym piątym Kazimierz Wielki nadał mu prawo magdeburskie. W tysiąc dziewięćset dwudziestym ósmym roku prawa odebrano — i przez siedemdziesiąt dwa lata Czchów był wsią. Odzyskał je pierwszego stycznia dwutysięcznego roku.",
        "Warto o tym pamiętać, bo to nie jest ciekawostka z tablicy informacyjnej, tylko opis tego, jak ta gmina jest zbudowana. W samym mieście mieszka około dwóch tysięcy trzystu osób. W dziewięciu sołectwach wokół — ponad siedem tysięcy. Czchów jest ośrodkiem, ale niewielkim: takim, w którym jest urząd, szkoła, przychodnia i kilka sklepów, a po resztę jedzie się gdzie indziej.",
        "Nad miastem stoi wieża — pozostałość zamku z przełomu trzynastego i czternastego wieku, o podstawie dwunastu i pół metra, dziś wysoka na jakieś dwadzieścia. Ciekawe jest to, że udostępniono ją do zwiedzania dopiero w grudniu dwa tysiące osiemnastego roku, a oficjalnie otwarto w maju roku następnego. Czyli przez całe stulecia stała, a wejść do niej można od siedmiu lat.",
        "Kościół parafialny jest jeszcze starszy niż odzyskane prawa miejskie i starszy niż większość tego, co się w Małopolsce zwiedza: gotycki, z tysiąc trzysta czterdziestego szóstego roku, z chrzcielnicą z tysiąc pięćset szóstego i dzwonem z tysiąc czterysta dwudziestego. Do tego trzy drewniane kościoły w sołectwach — w Złotej z tysiąc sześćset czterdziestego dziewiątego roku, w Tymowej z osiemnastego wieku i w Jurkowie sprzed tysiąc pięćset osiemdziesiątego szóstego.",
        "Dziewięćset siedemdziesiąt trzy firmy zarejestrowane w gminie brzmi dużo, dopóki nie sprawdzi się, że dziewięćset czterdzieści dziewięć z nich to mikrofirmy do dziewięciu osób, a osiemset trzydzieści dziewięć to jednoosobowe działalności. To gmina jednoosobowych firm budowlanych, usług i sadów — a nie zakładów.",
        "I stąd bierze się rzecz, która najbardziej kształtuje tutejszy dzień: stąd się dojeżdża. Do Brzeska jest dwadzieścia kilometrów i dwadzieścia minut, do Bochni dwadzieścia dziewięć, do Nowego Sącza i Tarnowa niecałe czterdzieści, do Krakowa siedemdziesiąt kilka. Wszystko po DK siedemdziesiąt pięć, tej samej, którą w weekendy jedzie pół Polski w stronę Krynicy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Czchów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której części gminy mieszkasz: w mieście, w Jurkowie, Tymowej, Złotej, Domosławicach, Tworkowej, Będzieszynie, Biskupicach Melsztyńskich, Piaskach-Drużkowie czy w Wytrzyszczce. Dojeżdżam wszędzie i nigdzie nie doliczam za odległość, ale łatwiej mi wtedy ułożyć trasę.",
        "Jeśli dojeżdżasz do pracy do Brzeska, Bochni albo Krakowa, powiedz to od razu — wtedy proponuję wieczór albo sobotę i nie umawiam się na porę, o której i tak jesteś w drodze. W weekendy w sezonie warto też wziąć poprawkę na ruch na siedemdziesiątce piątce.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czchowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiedy obiad musi poczekać, aż wrócisz z Brzeska albo z Krakowa",
      paragraphs: [
        "W gminie Czchów pracujących jest sto pięć na tysiąc mieszkańców. To znaczy, że miejsc pracy na miejscu jest niewiele i większość dorosłych codziennie stąd wyjeżdża. Ostatnie dostępne liczby o dojazdach mają dwadzieścia lat, więc ich nie cytuję — ale kierunek zjawiska widać w każdym rozkładzie jazdy i na porannym korku na siedemdziesiątce piątce.",
        "Praktycznie oznacza to dzień, który zaczyna się przed siódmą, a kończy dobrze po siedemnastej. Do domu wraca się z zapasem energii wystarczającym na odgrzanie czegoś, a nie na gotowanie od zera. I to jest moment, w którym dom przechodzi na jedzenie „byle było”.",
        "Zmienia to jedna prosta rzecz: urządzenie, które gotuje bez obecności. Wstawiasz zupę albo danie jednogarnkowe, wychodzisz, a ono gotuje się samo, samo się wyłącza i czeka. Wracasz i jest ciepły obiad — nie „szybszy obiad”, tylko obiad zamiast kanapki.",
        "Druga rzecz to gotowanie z zapasem w weekend. Podwójna porcja zupy, sos na kilka dni, pasty kanapkowe, ciasto — robione seriami w jednym naczyniu w sobotę, a jedzone przez pół tygodnia. W domu, z którego wszyscy dojeżdżają, to działa lepiej niż codzienne stanie przy garnku.",
        "Trzecia dotyczy sadów, których w tej gminie jest sporo — osiem procent użytków rolnych to sady, wyraźnie powyżej średniej powiatu. Kto ma śliwy albo jabłonie, ten zna sierpień i wrzesień, w których owoców jest naraz więcej, niż da się zjeść. Przetwory, powidła, musy i mrożonki robi się wtedy seriami, a nie po słoiku.",
        "I rzecz, o której mówię rodzicom nastolatków. W domu, w którym oboje rodzice dojeżdżają, dziecko często zostaje samo na kilka godzin po szkole. Przy prowadzeniu krok po kroku nastolatek jest w stanie wstawić obiad bez otwartego ognia i bez rozgrzanej patelni. Nie jest to argument z folderu, tylko realny powód, dla którego kupują to konkretne rodziny.",
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
    heading: "Czchów i gotowanie — fasola z chronioną nazwą i sady",
    paragraphs: [
      "Zacznę od jedynej rzeczy z tej gminy, która ma unijną ochronę nazwy. Fasola „Piękny Jaś z Doliny Dunajca” od dwa tysiące jedenastego roku ma chronioną nazwę pochodzenia, a Czchów jest jedną z jedenastu gmin obszaru — i jedyną z powiatu brzeskiego. To nie jest marketing gminny, tylko rozporządzenie Komisji Europejskiej.",
      "Uczciwie dodam, że to nie znaczy „fasola z Czchowa”. Prawo do nazwy mają producenci z całej doliny, od Gródka nad Dunajcem po Gręboszów. Czchów jest w tym gronie, ale nie jest jego środkiem, i tak to należy mówić.",
      "Drugą rzeczą są sady. Osiem procent użytków rolnych gminy to sady — dużo jak na powiat brzeski — a Czchów należy do „Śliwkowego Szlaku”. I tu od razu prostuję częste nieporozumienie: suska sechlońska, czyli suszona i wędzona śliwka z chronionym oznaczeniem, pochodzi z czterech gmin, wśród których Czchowa nie ma. Są to Laskowa, Iwkowa, Łososina Dolna i Żegocina. Szlak turystyczny to co innego niż obszar chroniony.",
      "Nie znalazłam żadnego wpisu przypisanego wprost gminie Czchów na ministerialnej Liście Produktów Tradycyjnych. Mogłabym wstawić w to miejsce coś ogólnie małopolskiego i pewnie nikt by nie sprawdził. Nie zrobię tego — piszę o tym, co potwierdzone.",
      "Co z tego wynika dla urządzenia? Najwięcej przy owocach. Fasola gotuje się w garnku i nikt tego nie zmieni, ale przecier ze śliwek, powidła, musy jabłkowe, dżemy i przeciery do zamrożenia to dokładnie ta robota, przy której najbardziej boli nie trudność, tylko liczba godzin przy blacie. Urządzenie miesza samo, w stałej temperaturze i nie przypala — a przy powidłach to jest cała różnica.",
    ],
  },

  districtsHeading: "Gdzie w gminie Czchów dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich dziewięciu sołectw, bez żadnej dopłaty za odległość: Będzieszyny, Biskupic Melsztyńskich, Domosławic, Jurkowa, Piask-Drużkowa, Tworkowej, Tymowej, Wytrzyszczki i Złotej.",
    "Gmina liczy sześćdziesiąt sześć kilometrów kwadratowych i niespełna dziesięć tysięcy mieszkańców, z czego w samym mieście mieszka około dwóch tysięcy trzystu. Rozciąga się wzdłuż Dunajca i doliny, więc przejechanie jej z końca na koniec to kilkanaście minut.",
    "Przez gminę biegnie droga krajowa numer siedemdziesiąt pięć z Brzeska do Nowego Sącza — przez Tymową, Jurków i sam Czchów. W Tymowej kończy się też droga wojewódzka numer dziewięćset sześćdziesiąt sześć, ta z Wieliczki przez Gdów. To wygodne dla mnie i niewygodne dla Was w weekendy, bo w sezonie ruch bywa duży.",
    "Kolei w gminie nie ma. Najbliższa stacja to Brzesko Okocim na linii Kraków–Tarnów, jakieś dwadzieścia kilometrów stąd. Ja przyjeżdżam samochodem i nie doliczam za to ani złotówki — do Brzeska mam stąd dwadzieścia minut, do Bochni pół godziny.",
    "Warto od razu rozstrzygnąć dwie pomyłki, bo są nagminne. Zamek Melsztyn leży w gminie Zakliczyn, mimo że sołectwo Biskupice Melsztyńskie jest tutejsze. A Jezioro Rożnowskie to gmina Gródek nad Dunajcem — tutejsze jest Jezioro Czchowskie, mniejszy zbiornik wyrównawczy poniżej, z elektrownią wodną o mocy dziewięciu megawatów.",
  ],
  districts: [
    "Czchów",
    "Jurków",
    "Tymowa",
    "Złota",
    "Domosławice",
    "Tworkowa",
    "Wytrzyszczka",
    "Biskupice Melsztyńskie",
    "Piaski-Drużków",
    "Będzieszyna",
  ],

  nearbyHeading: "Iwkowa, Gnojnik, Dębno i Zakliczyn też są na mojej trasie",
  nearbyParagraphs: [
    "Do Iwkowej, Gnojnika, Lipnicy Murowanej i Zakliczyna mam stąd po kilkanaście kilometrów, do Dębna i Brzeska trochę dalej. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Czchów, czy już Iwkowa albo Lipnica Murowana — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Iwkowa",
    "Gnojnik",
    "Lipnica Murowana",
    "Zakliczyn",
    "Dębno",
    "Brzesko",
    "Nowy Wiśnicz",
    "Bochnia",
  ],

  about: blokOMnie("do Czchowa", "w powiecie brzeskim"),

  faq: [
    {
      question: "Dojeżdżam do pracy do Brzeska. Kiedy da się umówić?",
      answer:
        "Wieczorem w tygodniu albo w sobotę przed południem — to najczęściej wybierane terminy w tej gminie i mam je rozpracowane. W Czchowie pracujących na miejscu jest sto pięć na tysiąc mieszkańców, więc dojeżdża stąd większość dorosłych i nie umawiam nikogo na porę, o której i tak jest w drodze. Powiedz po prostu, o której masz spokojne dwie godziny.",
    },
    ...faqWspolne("w gminie Czchów"),
    {
      question: "Mam sad. Czy to się przyda przy przetworach?",
      answer:
        "Najbardziej właśnie przy nich. W tej gminie sady to osiem procent użytków rolnych, więc pytanie pada często. Powidła, musy, przeciery i dżemy urządzenie miesza samo, w stałej temperaturze i bez przypalania — a przy powidłach to jest cała różnica, bo tam nie chodzi o trudność, tylko o liczbę godzin przy garnku. Owoców nie zbierze i pestek nie wyjmie, więc tego nie obiecuję.",
    },
    {
      question: "Mieszkam w Jurkowie. Dojedziesz, czy tylko do miasta?",
      answer:
        "Dojadę i to bez dopłaty, tak samo jak do Czchowa. Obsługuję całą gminę: Jurków, Tymową, Złotą, Domosławice, Tworkową, Wytrzyszczkę, Biskupice Melsztyńskie, Piaski-Drużków i Będzieszynę. Przy umawianiu proszę tylko o nazwę miejscowości, żeby dobrze ułożyć trasę — no i o rozróżnienie, bo Jurków jest też w gminie Dobra pod Limanową.",
    },
  ],

  geo: { lat: 49.8341, lng: 20.6741 },
};
