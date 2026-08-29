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
 * IWKOWA — gmina wiejska, najdalej na południe wysunięta część
 * powiatu brzeskiego. 6 650 mieszkańców (31.12.2024) na 47,2 km²,
 * gęstość 140 os./km². Siedem sołectw.
 *
 * OŚ STRONY: STO OSIEMDZIESIĄT PIĘĆ SUSZARNI ŚLIWEK. Z sześciuset
 * siedemdziesięciu siedmiu tradycyjnych suszarni całego obszaru
 * chronionego oznaczenia suski sechlońskiej sto osiemdziesiąt pięć
 * stoi w gminie Iwkowa — najwięcej ze wszystkich czterech gmin.
 * Iwkowa skupia też 42,2% sadów śliwowych obszaru.
 *
 * DRUGA OŚ: gmina z DODATNIM przyrostem naturalnym (+12 w 2024)
 * I DODATNIM saldem migracji (+15) — rzadkość w wiejskiej Małopolsce.
 *
 * ⚠️ TRZY BŁĘDY, KTÓRYCH NIE WOLNO POPEŁNIĆ:
 * 1. SUSKA SECHLOŃSKA NIE JEST PRODUKTEM IWKOWSKIM. Nazwa pochodzi
 *    od wsi SECHNA w gminie LASKOWA (powiat limanowski). Iwkowa jest
 *    jedną z czterech gmin obszaru — współwłaścicielem, nie właścicielem.
 * 2. W IWKOWEJ NIE MA KOŚCIOŁA ŚW. JANA CHRZCICIELA. Zabytkowy
 *    drewniany kościół to KOŚCIÓŁ CMENTARNY PW. NAWIEDZENIA NMP.
 *    Parafia nosi wezwanie PODWYŻSZENIA KRZYŻA ŚWIĘTEGO.
 * 3. OBSZAR ChOG TO CZTERY GMINY, NIE SIEDEM. Polska Wikipedia podaje
 *    siedem — jest to sprzeczne ze specyfikacją produktu i stroną
 *    Komisji Europejskiej. Cztery: Laskowa, Iwkowa, Łososina Dolna,
 *    Żegocina.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 6 650
 *   mieszkańców, 47,2 km², 140 os./km², średni wiek 38,5 lat.
 *   W 2024: 64 urodzenia, 52 zgony (+12), saldo migracji +15.
 *   Dla porównania 2019: 94 urodzenia, 44 zgony (+50) — przyrost
 *   naturalny wyraźnie osłabł, ale wciąż jest dodatni,
 * — SOŁECTWA (7): Iwkowa, Wojakowa, Dobrociesz, Kąty, Drużków Pusty,
 *   Połom Mały, Porąbka Iwkowska. ⚠️ Grabie to odrębna miejscowość,
 *   ale NIE odrębne sołectwo,
 * — GOSPODARKA (2024): 793 podmioty REGON, 688 osób fizycznych;
 *   45 nowych rejestracji, 30 wyrejestrowań. Bezrobocie 5,0%.
 *   Wynagrodzenie 6 953,88 zł brutto. Pracujących 99 na 1000
 *   mieszkańców (2021) — bardzo niski wskaźnik,
 * — SUSKA SECHLOŃSKA: ChOG, rozporządzenie Komisji (UE) nr 897/2010
 *   z 8 października 2010 r. (Dz.U. L 266 z 9.10.2010, s. 46);
 *   zmiana specyfikacji rozporządzeniem 2020/1591 z 23.10.2020.
 *   Obszar: Laskowa, Iwkowa, Łososina Dolna, Żegocina — 239,55 km².
 *   Wnioskodawca: Stowarzyszenie Producentów Owoców i Warzyw
 *   w Ujanowicach,
 * — SPECYFIKACJA: śliwka suszona i WĘDZONA, długość 1,5–4,5 cm,
 *   44–99 sztuk na kg, wilgotność 24–42%; suszenie gorącym dymem
 *   w temperaturze 45–70°C przez 4–6 dni; owoce w warstwie 30–50 cm,
 *   przewracane codziennie; opał wyłącznie twarde drewno liściaste.
 *   Odmiany dopuszczone: Promis, Tolar, Nektawit, Valjevka, Stanley.
 *   ⚠️ Wikipedia podaje 45–60°C — używam specyfikacji (45–70°C),
 * — SUSZARNIE: 185 z 677 na obszarze ChOG stoi w gminie Iwkowa;
 *   gmina skupia 42,2% sadów śliwowych obszaru (specyfikacja
 *   produktu). Historycznie suszono w ziemiankach zwanych
 *   „luftówka”, z tunelem do paleniska; dziś suszarnie są
 *   dwukondygnacyjne. Skupione w Dobrocieszu, Wojakowej i Kątach,
 * — SUSORKI IWKOWSKIE — mieszanka suszonych śliwek, jabłek i gruszek,
 *   na Liście Produktów Tradycyjnych MRiRW. Do tego WĘDZONKA
 *   IWKOWSKA. IMBIRÓWKA IWKOWSKA w maju 2013 oczekiwała na wpis —
 *   ⚠️ nie potwierdzono, czy została wpisana. To susorki są produktem
 *   WYŁĄCZNIE iwkowskim,
 * — ŚWIĘTO SUSZONEJ ŚLIWKI: XXV (jubileuszowa) edycja 21 września
 *   2025 r., stadion KS „Olimpia” w Kątach, organizator Gmina
 *   Iwkowa. IV edycja odbyła się 12 września 2004 r. w Dobrocieszu —
 *   dwa niezależne źródła zgadzają się, że impreza istnieje OD 2001 R.
 *   Termin zwyczajowy: trzecia niedziela września,
 * — KOŚCIÓŁ CMENTARNY PW. NAWIEDZENIA NMP: drewniany, konstrukcja
 *   zrębowa, koniec XV w., na miejscu wcześniejszego z XIV w.;
 *   pierwsza wzmianka pisemna 1596; wieża dobudowana 1619;
 *   POLICHROMIA PÓŹNORENESANSOWA Z 1629 R.; krucyfiks i figury
 *   Matki Boskiej oraz św. Jana Ewangelisty z XV w. Obiekt nr 118
 *   Szlaku Architektury Drewnianej,
 * — PIERWSZA WZMIANKA O WSI IWKOWA: 1334 r.,
 * — WIEŻA WIDOKOWA NA SZPILÓWCE: otwarta w maju 2019 r., 30 m
 *   wysokości, szczyt 516 m n.p.m.,
 * — KAPLICZKA/PUSTELNIA ŚW. URBANA — XVIII w., zbocza góry Bukowiec,
 * — TRANSPORT: gmina leży ok. 8 km od DK75. Dojazd z Tarnowa 48 km.
 *   Kolei w gminie nie ma,
 * — SĄSIEDZI potwierdzeni: Lipnica Murowana (pow. bocheński),
 *   Czchów (pow. brzeski), Laskowa (pow. limanowski). Gmina graniczy
 *   też z powiatem nowosądeckim.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZW PRODUCENTÓW I SUSZARNI. Nie potwierdzono ani jednego
 *   producenta z gminy Iwkowa z nazwy. Nie wymieniam żadnego,
 * — LICZBY CERTYFIKOWANYCH PRODUCENTÓW. Ta sama strona podaje
 *   „15 członków, 10 z certyfikatem” i „ok. 80 producentów”.
 *   Nie używam żadnej,
 * — DAT WPISU SUSOREK, WĘDZONKI I IMBIRÓWKI NA LPT. Nie potwierdzone,
 * — NAZW KÓŁ GOSPODYŃ. Strona gminy nie wymienia żadnego KGW,
 * — ODLEGŁOŚCI I CZASÓW DO BRZESKA, BOCHNI, NOWEGO SĄCZA I KRAKOWA.
 *   Potwierdzony jest tylko Tarnów (48 km) i osiem kilometrów do DK75,
 * — NAJBLIŻSZEJ STACJI KOLEJOWEJ Z ODLEGŁOŚCIĄ. Kandydatem jest
 *   Brzesko Okocim, ale odległości nie potwierdzono,
 * — DATY BUDOWY KOŚCIOŁA W WOJAKOWEJ (1363). Jedno słabe źródło,
 * — PRACODAWCÓW Z NAZWY I DANYCH O DOJAZDACH DO PRACY,
 * — EDYCJI ŚWIĘTA SUSZONEJ ŚLIWKI W 2026 R. To byłaby ekstrapolacja.
 *
 * PUŁAPKI:
 * — „SUSKA SECHLOŃSKA Z IWKOWEJ” TO BŁĄD. Poprawnie: „Iwkowa jest
 *   jedną z czterech gmin obszaru ChOG i skupia 185 z 677 suszarni”,
 * — RAJBROT NALEŻY DO GMINY LIPNICA MUROWANA, nie do Iwkowej.
 *   Jedno ze źródeł podaje to błędnie,
 * — SECHNA I UJANOWICE TO GMINA LASKOWA,
 * — WĘDZONE JABŁKO SECHLOŃSKIE (ChOG) to osobny, późniejszy produkt
 *   spod Laskowej — nie mylić z susorkami iwkowskimi,
 * — ŁUKOWICKA ŚLIWKA SUSZONA to gmina Łukowica, powiat limanowski —
 *   produkt konkurencyjny, nie iwkowski,
 * — „7 SOŁECTW” ≠ „8 MIEJSCOWOŚCI”. Grabie jest miejscowością
 *   bez statusu sołectwa,
 * — GNOJNIK, DĘBNO, BORZĘCIN I SZCZUROWA to inne gminy powiatu
 *   brzeskiego — nie sąsiedzi Iwkowej (poza Czchowem).
 */

export const IWKOWA: CityContent = {
  slug: "iwkowa",
  h1: "Thermomix Iwkowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Iwkowa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Iwkowa: bezpłatna prezentacja TM7 u Ciebie w kuchni — Iwkowa, Wojakowa, Dobrociesz, Kąty, Połom Mały. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Iwkowa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Iwkowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Iwkowa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedmiu sołectw, także we wrześniu, kiedy dymią suszarnie.",

  highlights: highlightyStandardowe("wszystkie siedem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Iwkowa – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Iwkowej, jak w Wojakowej, Dobrocieszu, Kątach czy Połomiu Małym.",
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
      heading: "Sto osiemdziesiąt pięć suszarni w jednej gminie",
      paragraphs: [
        "Na całym obszarze objętym chronionym oznaczeniem suski sechlońskiej stoi sześćset siedemdziesiąt siedem tradycyjnych suszarni. Sto osiemdziesiąt pięć z nich — czyli ponad co czwarta — jest w gminie Iwkowa. Gmina skupia też czterdzieści dwa procent sadów śliwowych całego obszaru. To nie jest opowieść z folderu, tylko dane z oficjalnej specyfikacji produktu.",
        "Uczciwie od razu wyjaśnię, co to znaczy i czego nie znaczy. Suska sechlońska bierze nazwę od wsi Sechna, a ta leży w gminie Laskowa, w powiecie limanowskim. Prawo do nazwy mają producenci z czterech gmin: Laskowej, Iwkowej, Łososiny Dolnej i Żegociny. Iwkowa jest więc współwłaścicielem tej nazwy, a nie jej właścicielem — i tak trzeba o tym mówić.",
        "Co Iwkowa ma naprawdę swojego, to susorki iwkowskie: mieszanka suszonych śliwek, jabłek i gruszek, wpisana na ministerialną Listę Produktów Tradycyjnych. Do tego wędzonka iwkowska. To są produkty tej gminy i tylko tej.",
        "Sama technologia jest zaskakująco surowa. Śliwki suszy się gorącym dymem, w temperaturze od czterdziestu pięciu do siedemdziesięciu stopni, przez cztery do sześciu dni, w warstwie trzydziestu do pięćdziesięciu centymetrów, przewracanej codziennie. Pali się wyłącznie twardym drewnem liściastym. Dawniej robiono to w ziemiankach zwanych luftówkami — z tunelem prowadzącym do paleniska; dziś suszarnie są dwukondygnacyjne, ale zasada się nie zmieniła.",
        "Od dwa tysiące pierwszego roku gmina organizuje Święto Suszonej Śliwki — w dwa tysiące dwudziestym piątym roku odbyła się dwudziesta piąta, jubileuszowa edycja, na stadionie w Kątach. Zwyczajowy termin to trzecia niedziela września, w programie jest „Wielkie Śliwkowe Gotowanie” i parada traktorów. We wrześniu w Dobrocieszu, Wojakowej i Kątach nad domami po prostu wisi dym.",
        "I rzecz, która w wiejskiej Małopolsce jest rzadkością. Iwkowa ma dodatni przyrost naturalny — w dwa tysiące dwudziestym czwartym roku sześćdziesiąt cztery urodzenia przy pięćdziesięciu dwóch zgonach — i dodatnie saldo migracji. Gmina rośnie, choć powoli. Średni wiek mieszkańca to trzydzieści osiem i pół roku, czyli mniej niż w większości gmin, o których pisałam.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Iwkowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa: Iwkowa, Wojakowa, Dobrociesz, Kąty, Drużków Pusty, Połom Mały albo Porąbka Iwkowska. Gmina ma czterdzieści siedem kilometrów kwadratowych i dojazd wszędzie zajmuje kilkanaście minut. Nigdzie nie doliczam za odległość.",
        "Jeśli macie sad i suszarnię, powiedzcie to od razu. Wrzesień i pierwsza połowa października to u Was najgorszy możliwy termin i doskonale to rozumiem — wtedy proponuję listopad albo luty. Poza sezonem umawiam się o dowolnej porze, także w dzień roboczy przed południem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Iwkowa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom z sadem, czyli rok podzielony na dwie części",
      paragraphs: [
        "W gminie, w której stoi sto osiemdziesiąt pięć suszarni, rok dzieli się na dwie nierówne części. Od końca sierpnia do października jest sezon: zbiór, suszenie, doglądanie ognia, przewracanie owoców codziennie przez cztery do sześciu dni. Reszta roku wygląda zupełnie inaczej.",
        "W sezonie nikt nie gotuje porządnie i nie ma się co oszukiwać. Dzień schodzi w sadzie i przy suszarni, a jedzenie robi się w przerwach albo wcale. To jest dokładnie ta sytuacja, w której urządzenie gotujące bez obecności ma sens praktyczny, a nie folderowy: wstawiasz zupę rano, wychodzisz do roboty, wracasz i jest ciepły obiad. Nie trzeba przy nim stać ani go pilnować.",
        "Poza sezonem wraca zwykłe pytanie: co ugotować dzisiaj. W gminie, w której pracujących na miejscu jest dziewięćdziesięciu dziewięciu na tysiąc mieszkańców, większość dorosłych i tak dojeżdża — a to znaczy powrót po siedemnastej i wybór między gotowaniem a odgrzaniem.",
        "Druga rzecz to przetwory, i tu akurat nie muszę nikogo przekonywać. W domu z sadem powidła, musy, dżemy i przeciery robi się i tak, tylko zwykle całymi dniami. Urządzenie miesza samo, w stałej temperaturze, i nie pozwala się przypalić — a przy powidłach właśnie o to chodzi, bo tam nie ma trudności, tylko godziny przy garnku.",
        "Powiem też, czego nie zrobi, bo w tej gminie to pytanie jest najważniejsze ze wszystkich. Nie ususzy śliwek. Suska powstaje z dymu, z drewna liściastego i z czterech do sześciu dni pilnowania — tego nie da się zrobić elektrycznie i nikt tu nie potrzebuje, żeby mu to obiecywano. Urządzenie przetworzy natomiast owoc suszony na masę, nadzienie albo przecier w kilka minut.",
        "Trzecia rzecz to dzieci. Iwkowa jest jedną z niewielu gmin wiejskich w okolicy z dodatnim przyrostem naturalnym i średnim wiekiem poniżej czterdziestu lat. W domu, w którym rodzice w sezonie pracują od świtu, nastolatek jest w stanie sam wstawić obiad — bez otwartego ognia i bez rozgrzanej patelni, bo przepis prowadzi krok po kroku.",
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
    heading: "Iwkowa i gotowanie — susorki są tutejsze, suska jest wspólna",
    paragraphs: [
      "Zacznę od rozróżnienia, na którym w tej gminie zależy najbardziej. Suska sechlońska ma chronione oznaczenie geograficzne od dwa tysiące dziesiątego roku, ale jej nazwa pochodzi od wsi Sechna w gminie Laskowa. Obszar obejmuje cztery gminy: Laskową, Iwkową, Łososinę Dolną i Żegocinę. Pisanie „suska sechlońska z Iwkowej” jest po prostu nieścisłe — poprawnie brzmi to tak, że Iwkowa jest jedną z czterech gmin i skupia sto osiemdziesiąt pięć z sześciuset siedemdziesięciu siedmiu suszarni.",
      "Własnym produktem tej gminy są natomiast susorki iwkowskie: mieszanka suszonych śliwek, jabłek i gruszek, wpisana na ministerialną Listę Produktów Tradycyjnych. Jest też wędzonka iwkowska. Nie znalazłam potwierdzenia, czy imbirówka iwkowska, zgłoszona w dwa tysiące trzynastym roku, ostatecznie na listę weszła — więc nie piszę, że weszła.",
      "Nie potwierdziłam też ani jednego producenta ani suszarni z gminy Iwkowa z nazwy. Wiem, ile ich jest, bo to policzono w specyfikacji unijnej, ale kto konkretnie prowadzi które — tego nie wiem i nie będę zgadywać. Podobnie z kołami gospodyń: strona gminy nie wymienia żadnego, choć organizacji jest tu sporo.",
      "Warto od razu odróżnić Iwkową od produktów sąsiadów, bo mieszają się nagminnie. Wędzone jabłko sechlońskie to znowu Laskowa. Łukowicka śliwka suszona to gmina Łukowica w powiecie limanowskim — produkt konkurencyjny, nie tutejszy.",
      "Co z tego wynika dla urządzenia? Powiem uczciwie: przy samym suszeniu — nic. Suski nie zrobi, bo suska powstaje z dymu i z kilku dni pilnowania ognia, a nie z prądu. Nie ma sensu tego owijać w bawełnę.",
      "Sens zaczyna się krok dalej, przy tym, co się z suszonym owocem robi potem. Nadzienie do ciasta, masa na pierogi, kompot, mus, sos do mięsa, powidła z owocu świeżego — to jest rozdrabnianie i podgrzewanie w stałej temperaturze, czyli dokładnie to, do czego urządzenie służy. I to przy owocach, których w tej gminie jest pod dostatkiem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Iwkowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu sołectw, bez żadnej dopłaty za odległość: Iwkowej, Wojakowej, Dobrociesza, Kątów, Drużkowa Pustego, Połomia Małego i Porąbki Iwkowskiej. Grabie to odrębna miejscowość, choć nie osobne sołectwo — tam też dojeżdżam.",
    "Gmina zajmuje czterdzieści siedem kilometrów kwadratowych i liczy sześć tysięcy sześćset pięćdziesiąt osób. To najdalej na południe wysunięty kawałek powiatu brzeskiego — dalej są już powiaty limanowski i nowosądecki. Teren jest górzysty: nad gminą stoi Szpilówka o wysokości pięciuset szesnastu metrów, a od maja dwa tysiące dziewiętnastego roku także trzydziestometrowa wieża widokowa na jej szczycie.",
    "Najstarszą rzeczą w gminie jest drewniany kościół cmentarny pod wezwaniem Nawiedzenia Najświętszej Marii Panny z końca piętnastego wieku, obiekt numer sto osiemnaście na Szlaku Architektury Drewnianej. Ma późnorenesansową polichromię z tysiąc sześćset dwudziestego dziewiątego roku i piętnastowieczny krucyfiks. Uwaga na wezwania: kościół parafialny to Podwyższenie Krzyża Świętego, a kościoła świętego Jana Chrzciciela w Iwkowej nie ma — to częsty błąd.",
    "O dojeździe uczciwie: do drogi krajowej numer siedemdziesiąt pięć mamy stąd około ośmiu kilometrów, a z Tarnowa jedzie się tu czterdzieści osiem. Kolei w gminie nie ma i nie podam odległości do najbliższej stacji, bo nie znalazłam wiarygodnego źródła. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "I rzecz, którą warto rozstrzygnąć od razu: Rajbrot nie należy do gminy Iwkowa, tylko do Lipnicy Murowanej. Podobnie Sechna i Ujanowice to gmina Laskowa. Do wszystkich tych miejsc i tak dojeżdżam, ale przy umawianiu lepiej wiedzieć, gdzie się jest.",
  ],
  districts: [
    "Iwkowa",
    "Wojakowa",
    "Dobrociesz",
    "Kąty",
    "Drużków Pusty",
    "Połom Mały",
    "Porąbka Iwkowska",
    "Grabie",
  ],

  nearbyHeading: "Czchów, Lipnica Murowana i Laskowa też są na mojej trasie",
  nearbyParagraphs: [
    "Do Czchowa, Lipnicy Murowanej i Laskowej mam stąd blisko, dalej są Gnojnik, Nowy Wiśnicz i Żegocina. Do żadnej z tych gmin nie doliczam kosztu dojazdu — a do trzech z nich, bo Iwkowa, Laskowa i Żegocina to trzy z czterech gmin obszaru suski, jeżdżę i tak.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Iwkowa, czy już Czchów albo Lipnica Murowana — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Czchów",
    "Lipnica Murowana",
    "Laskowa",
    "Żegocina",
    "Gnojnik",
    "Nowy Wiśnicz",
    "Brzesko",
    "Bochnia",
  ],

  about: blokOMnie("do gminy Iwkowa", "w powiecie brzeskim"),

  faq: [
    {
      question: "Czy Thermomix ususzy śliwki na suskę?",
      answer:
        "Nie i wolę powiedzieć to wprost, bo w tej gminie to pytanie jest najważniejsze. Suska sechlońska powstaje przez suszenie gorącym dymem w temperaturze od czterdziestu pięciu do siedemdziesięciu stopni przez cztery do sześciu dni, przy paleniu twardym drewnem liściastym — tego nie da się zrobić elektrycznie w naczyniu. Urządzenie przetworzy natomiast owoc już suszony: na nadzienie, masę do ciasta, mus, kompot albo sos, i zrobi to w kilka minut.",
    },
    ...faqWspolne("w gminie Iwkowa"),
    {
      question: "Mamy sad i suszarnię. Kiedy najlepiej się umówić?",
      answer:
        "Poza sezonem, czyli od listopada do sierpnia — i sama to proponuję, zamiast namawiać we wrześniu. Od końca sierpnia do października macie zbiór i suszenie, przy którym trzeba doglądać ognia i przewracać owoce codziennie. Nie ma sensu wciskać wtedy dwóch godzin na kuchnię. Listopad i luty są u Was najspokojniejsze i wtedy umawiam się chętnie, także w dzień roboczy przed południem.",
    },
    {
      question: "Czy suska sechlońska to produkt z Iwkowej?",
      answer:
        "Nie do końca i warto to rozróżnić. Nazwa pochodzi od wsi Sechna w gminie Laskowa, a chronione oznaczenie geograficzne obejmuje cztery gminy: Laskową, Iwkową, Łososinę Dolną i Żegocinę. Iwkowa jest współwłaścicielem tej nazwy, i to bardzo istotnym — stoi tu sto osiemdziesiąt pięć z sześciuset siedemdziesięciu siedmiu suszarni całego obszaru. Wyłącznie iwkowskim produktem są natomiast susorki: mieszanka suszonych śliwek, jabłek i gruszek z Listy Produktów Tradycyjnych.",
    },
  ],

  geo: { lat: 49.8142, lng: 20.595 },
};
