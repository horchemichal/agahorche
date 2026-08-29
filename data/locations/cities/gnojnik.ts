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
 * GNOJNIK — gmina wiejska, powiat brzeski, wschodni skraj Pogórza
 * Wiśnickiego, w dolinie Uszwicy. 8 099 mieszkańców (31.12.2024, GUS)
 * na 55 km², gęstość 147 os./km². Siedem sołectw.
 *
 * OŚ STRONY: KUKIEŁKA USZEWSKA — jedyny w powiecie brzeskim
 * potwierdzony wpis na ministerialnej Liście Produktów Tradycyjnych,
 * i to wpis o pieczywie, które tradycyjnie było DAREM KUMOSZKI
 * DLA MATKI PO PORODZIE. Do tego druga oś: gospodarstwo ma tu
 * średnio jeden hektar i siedemdziesiąt dziewięć arów, a
 * siedemdziesiąt jeden procent gospodarstw mieści się w przedziale
 * jednego do pięciu hektarów. To nie jest gmina rolnicza w sensie
 * dochodu — to gmina, w której prawie każdy ma kawałek ziemi.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA: 8 099 mieszkańców (31.12.2024, GUS za
 *   polskawliczbach) — gmina podaje 7 989 z ewidencji ludności.
 *   ⚠️ Podaję „około ośmiu tysięcy”. 55 km², 147 os./km².
 *   Ludność wzrosła o 13,2% w latach 2002–2024, sama wieś Gnojnik
 *   o 54,8% w latach 1998–2021,
 * — ⚠️ URODZENIA I ZGONY 2024: GUS podaje 72/107 (przyrost −35),
 *   gmina 68/72 (przyrost −4). ROZBIEŻNOŚĆ POWAŻNA — na stronie
 *   NIE PODAJĘ ŻADNEJ Z TYCH LICZB,
 * — SOŁECTWA (7, z ludnością wg Raportu o stanie gminy za 2024):
 *   Gnojnik 2 649, Uszew 1 596, Gosprzydowa 1 072, Lewniowa 991,
 *   Biesiadki 827, Zawada Uszewska 563, Żerków 291,
 * — GOSPODARKA (2024): 755 podmiotów REGON, 636 osób fizycznych,
 *   93 podmioty na 1000 mieszkańców. CEIDG: 476 aktywnych wpisów,
 *   dominują budownictwo, handel i naprawa pojazdów. Bezrobocie
 *   5,0%. Wynagrodzenie 6 953,88 zł brutto = 80,6% średniej,
 * — ROLNICTWO (2024, Raport o stanie gminy): 1 698 gospodarstw,
 *   ŚREDNIA POWIERZCHNIA 1,79 HA, 71% gospodarstw w przedziale
 *   1–5 ha. Lasy publiczne 441 ha (2019),
 * — KUKIEŁKA USZEWSKA: Lista Produktów Tradycyjnych MRiRW,
 *   województwo małopolskie, kategoria wyroby piekarnicze
 *   i cukiernicze; wpis 2014 r. (Dz. Urz. MRiRW 2014, poz. 9,
 *   ogłoszenie ministra z 13 maja 2014). Podłużne pieczywo pszenne
 *   z warkoczem, ok. 300 g, mąka pszenna, drożdże, woda, sól,
 *   wypiek w piecu opalanym drewnem sosnowym. Tradycyjnie DAR
 *   KUMOSZKI Z OKAZJI NARODZIN DZIECKA, pokarm dla chorych
 *   i starszych. ⚠️ Wiązanie z wojskami Kazimierza Wielkiego
 *   to LEGENDA, nie fakt — na stronie oznaczone jako legenda,
 * — KOŚCIÓŁ ŚW. MARCINA W GNOJNIKU: konsekrowany 1382 r. przez
 *   biskupa Jana Radlicę; parafia od 1160 r.; W LATACH 1594–1616
 *   ZAJĘTY PRZEZ ARIAN i używany jako spichlerz; kamienny portal
 *   i drewniana figura Madonny z początku XIV w.; organy 1854;
 *   rejestr zabytków A-278 z 14.12.1961,
 * — DWA DREWNIANE KOŚCIOŁY NA SZLAKU ARCHITEKTURY DREWNIANEJ:
 *   Gosprzydowa — św. Urszuli, 1697 r., rejestr A-10 z 8.04.1968;
 *   Biesiadki — św. Mateusza, przełom XV/XVI w., zniszczony 1657
 *   przez wojska siedmiogrodzkie, odbudowany 1661; obraz św. Rozalii
 *   z 1676 r.; rejestr A-203 z 5.12.1979. Układ ruralistyczny wsi
 *   Biesiadki wpisany osobno: A-83 z 30.03.1976,
 * — METRYKI: 1215 r. — biskup Wincenty Kadłubek przekazuje kapitule
 *   krakowskiej dziesięciny z 19 wsi, w tym Gnojnika, Gosprzydowej
 *   i Lewniowej; Uszew 1255 (nadanie Bolesława Wstydliwego);
 *   Biesiadki 1269,
 * — ZESPÓŁ DWORSKI: założony ok. 1732 przez Jana Bogusława
 *   Petryczego; w poł. XIX w. Edward Homolacs założył sześciohektarowy
 *   park krajobrazowy; DWÓR ROZEBRANY W 1954 R., zostały spichlerz
 *   i drewniana oficyna; park zrewitalizowany 2013–2014,
 * — KGW POTWIERDZONE: „Uszwianki” (Uszew), „Zawadzianki”
 *   (Zawada Uszewska), „Krajanki” (Gnojnik),
 * — DK75 „Sądeczanka” przez gminę. Lipiec 2026: GDDKiA zleciła
 *   analizę wariantów odcinka Uszew–Wytrzyszczka (19,7 km),
 *   dokumentacja za 891 750 zł, wykonawca DATABOUT, termin
 *   10 miesięcy. Samorządy Gnojnika, Czchowa i Iwkowej protestują
 *   od 2019 r. Uzasadnienie inwestycji: 34 ofiary śmiertelne
 *   na DK75 w latach 2017–2024,
 * — KOLEI W GMINIE NIE MA. Najbliższa stacja Brzesko Okocim,
 *   ok. 10 km. Gnojnik leży ok. 10 km na południe od Brzeska
 *   i ok. 52 km od Krakowa,
 * — SĄSIEDZI: Brzesko (północ), Dębno (wschód), Czchów (południe),
 *   Nowy Wiśnicz (zachód), plus krótki styk z Lipnicą Murowaną.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — URODZEŃ I ZGONÓW ZA 2024. Dwa źródła podają liczby różniące się
 *   o rząd wielkości w przyroście naturalnym. Nie wybieram,
 * — STRUKTURY ZATRUDNIENIA DLA SAMEJ GMINY. Dostępne dane
 *   (21,2% rolnictwo itd.) są POWIATOWE — nie przypisuję ich gminie,
 * — ODLEGŁOŚCI I CZASÓW DO BOCHNI, TARNOWA I NOWEGO SĄCZA.
 *   Nie potwierdzone źródłowo. Piszę tylko o Brzesku i Krakowie,
 * — KIERUNKÓW DOJAZDÓW DO PRACY. Brak danych GUS o przepływach,
 * — SADOWNICTWA JAKO SPECJALIZACJI GMINY. Nie potwierdzone.
 *   Członkostwo w LGD „Na Śliwkowym Szlaku” to nie to samo,
 * — POTWIERDZENIA, ŻE KONKRETNA PIEKARNIA PIECZE KUKIEŁKI.
 *   Piekarnia w Uszwi istnieje, ale związku z produktem nie
 *   potwierdzono. Nie wymieniam nazwy,
 * — LICZBY OSÓB W OBOZIE PRACY 1944–45. Źródła gminne podają
 *   „ok. 12 tys. przez cały okres” i „ok. 500 jednorazowo”,
 *   niepotwierdzone niezależnie. Nie podaję liczby,
 * — DEKLARACJI, ŻE POWSTANIE NOWA DK75. Wariant nie jest wybrany.
 *
 * PUŁAPKI:
 * — „USZEW” ODMIENIA SIĘ „W USZWI”. Stąd „kościół w Uszwi”
 *   i „kukiełki z Uszwi”. Przymiotnik: uszewski,
 * — PORĄBKA USZEWSKA TO GMINA DĘBNO, nie Gnojnik. Mimo nazwy,
 * — ZAWADA USZEWSKA TO OSOBNE SOŁECTWO, nie przysiółek Uszwi,
 * — KUKIEŁKA USZEWSKA ≠ KUKIEŁKA LISIECKA ≠ KUKIEŁKA PODEGRODZKA.
 *   Trzy różne małopolskie produkty tradycyjne,
 * — SUSKA SECHLOŃSKA NIE JEST STĄD. Obszar ChOG to Laskowa,
 *   Iwkowa, Łososina Dolna i Żegocina. Podobnie imbirówka
 *   i susorki iwkowskie to gmina Iwkowa,
 * — STOWARZYSZENIE „NA ŚLIWKOWYM SZLAKU” MA SIEDZIBĘ W IWKOWEJ,
 * — ŻERKÓW (291 osób) ≠ ŻERKÓW W WIELKOPOLSCE,
 * — GNOJNIK ≠ GNOJNO (świętokrzyskie),
 * — GMINA LEŻY NA POGÓRZU WIŚNICKIM, nie w Beskidzie Wyspowym —
 *   Beskid tylko widać z punktu widokowego.
 */

export const GNOJNIK: CityContent = {
  slug: "gnojnik",
  h1: "Thermomix Gnojnik – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Gnojnik — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Gnojnik: bezpłatna prezentacja TM7 u Ciebie w kuchni — Gnojnik, Uszew, Gosprzydowa, Lewniowa, Biesiadki. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gnojnik — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Gnojnik. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Gnojnik przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedmiu sołectw, tak samo do Gnojnika, jak do Uszwi czy Żerkowa.",

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
      heading: "Thermomix w gminie Gnojnik – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Gnojniku, jak w Uszwi, Gosprzydowej, Lewniowej czy Biesiadkach.",
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
      heading: "Gmina, w której gospodarstwo ma średnio niecałe dwa hektary",
      paragraphs: [
        "Gnojnik ma tysiąc sześćset dziewięćdziesiąt osiem gospodarstw rolnych. Średnia powierzchnia takiego gospodarstwa to jeden hektar i siedemdziesiąt dziewięć arów, a siedemdziesiąt jeden procent z nich mieści się w przedziale od jednego do pięciu hektarów. To znaczy, że rolnictwo nie jest tu zawodem — jest tłem codzienności. Prawie każdy ma kawałek ziemi, prawie nikt z niej nie żyje.",
        "Zawodowo ludzie robią co innego. W gminie działa czterysta siedemdziesiąt sześć aktywnych działalności gospodarczych, a najczęstsze branże to budownictwo, handel i naprawa pojazdów. Siedemset pięćdziesiąt pięć podmiotów zarejestrowanych ogółem, z tego sześćset trzydzieści sześć to osoby fizyczne. Dużego zakładu przemysłowego w gminie nie ma żadnego i nie będę udawać, że jest.",
        "Gmina rośnie i to jest fakt wart odnotowania, bo w wiejskiej Małopolsce nie jest to reguła. Od dwa tysiące drugiego do dwa tysiące dwudziestego czwartego roku ludność wzrosła o trzynaście procent, a sama wieś Gnojnik między tysiąc dziewięćset dziewięćdziesiątym ósmym a dwa tysiące dwudziestym pierwszym rokiem o ponad połowę. Ludzie się tu budują — dziesięć kilometrów od Brzeska, przy drodze krajowej.",
        "Ta droga to numer siedemdziesiąt pięć, ta sama, którą jedzie się z Brzeska do Nowego Sącza. Jest wygodna i jest problemem naraz: od dwa tysiące dziewiętnastego roku samorządy Gnojnika, Czchowa i Iwkowej spierają się z drogowcami o przebieg nowego odcinka, a w lipcu dwa tysiące dwudziestego szóstego roku zlecono kolejną analizę wariantów. Powód budowy jest smutny i konkretny: trzydzieści cztery ofiary śmiertelne na tej trasie w latach dwa tysiące siedemnaście–dwadzieścia cztery.",
        "Historia jest tu za to bardzo stara i dobrze udokumentowana. W tysiąc dwieście piętnastym roku biskup Wincenty Kadłubek przekazał kapitule krakowskiej dziesięciny z dziewiętnastu wsi — wśród nich były Gnojnik, Gosprzydowa i Lewniowa. Kościół świętego Marcina w Gnojniku konsekrowano w tysiąc trzysta osiemdziesiątym drugim roku, a w latach tysiąc pięćset dziewięćdziesiąt cztery–tysiąc sześćset szesnaście zajęli go arianie i używali jako spichlerza.",
        "Dwa sołectwa mają drewniane kościoły na Szlaku Architektury Drewnianej: Gosprzydowa świętej Urszuli z tysiąc sześćset dziewięćdziesiątego siódmego roku i Biesiadki świętego Mateusza z przełomu piętnastego i szesnastego wieku, zniszczone przez wojska siedmiogrodzkie w tysiąc sześćset pięćdziesiątym siódmym i odbudowane cztery lata później. W Biesiadkach wpisany do rejestru zabytków jest nie tylko kościół, ale i cały układ wsi.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Gnojnik?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa: Gnojnik, Uszew, Gosprzydowa, Lewniowa, Biesiadki, Zawada Uszewska albo Żerków. Gmina ma pięćdziesiąt pięć kilometrów kwadratowych, więc dojazd wszędzie zajmuje kilkanaście minut i nigdzie nie doliczam za odległość.",
        "Jeśli dojeżdżasz do pracy albo prowadzisz działalność — a w tej gminie jedno albo drugie dotyczy większości domów — powiedz to od razu. Wieczór w tygodniu i sobotnie przedpołudnie są tu najczęściej wybieranymi terminami.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Gnojnik"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom z kawałkiem pola i z pracą gdzie indziej",
      paragraphs: [
        "Typowy dom w tej gminie ma dwie rzeczy naraz: kilkadziesiąt arów albo hektar z kawałkiem ziemi i pracę poza gospodarstwem. Ktoś prowadzi jednoosobową działalność budowlaną, ktoś dojeżdża do Brzeska, ktoś pracuje na miejscu w handlu. A ziemia i tak rodzi — ziemniaki, warzywa, owoce z kilku drzew.",
        "Z tego bierze się bardzo konkretny rytm. Latem i jesienią w domu naraz pojawia się więcej warzyw i owoców, niż da się na bieżąco zjeść, i albo się to przerobi, albo zmarnuje. Zimą wracają zwykłe pytania: co na obiad, kiedy oboje wracamy po siedemnastej.",
        "Na pierwsze urządzenie odpowiada najmocniej. Przeciery, zupy do zamrożenia, powidła, musy, przeciery pomidorowe, dżemy — to jest robota, w której nie chodzi o trudność, tylko o godziny stania i mieszania, żeby się nie przypaliło. Urządzenie miesza samo, w stałej temperaturze, i pilnuje tego zamiast Was.",
        "Na drugie odpowiada inaczej: gotuje bez obecności. Wstawiasz danie jednogarnkowe rano albo dziecko wstawia po szkole, przepis prowadzi krok po kroku i nie ma czego przypalić. Wracasz i jest ciepły obiad. To nie jest oszczędność czasu, tylko różnica między obiadem ugotowanym a odpuszczonym.",
        "Trzecia rzecz to gmina, która rośnie. Ludność Gnojnika wzrosła o trzynaście procent w dwie dekady, a sama wieś o ponad połowę — to znaczy sporo nowych domów i sporo młodych rodzin. W domu z małym dzieckiem najbardziej przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami.",
        "I rzecz, którą mówię wprost: przy dwuosobowym gospodarstwie domowym nie zaoszczędzisz godziny dziennie, bo tej godziny tam nie ma. Zmienia się co innego — łatwiej ugotować porządnie, kiedy nie chce się stać w kuchni, a na niedzielę da się zrobić duży obiad bez spędzenia przy nim całego przedpołudnia.",
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
    heading: "Gnojnik i gotowanie — kukiełka uszewska, czyli chleb po porodzie",
    paragraphs: [
      "Ta gmina ma coś, czego nie ma żadna inna w powiecie brzeskim: własny wpis na ministerialnej Liście Produktów Tradycyjnych. Kukiełka uszewska, wpisana w dwa tysiące czternastym roku w kategorii wyrobów piekarniczych, pochodzi z Uszwi — sołectwa tej gminy.",
      "To podłużne pieczywo pszenne z zaplecionym warkoczem na wierzchu, ważące około trzystu gramów. Składniki są zwyczajne do granic: mąka pszenna, drożdże, woda i sól. Cała różnica jest w wypieku — w piecu opalanym drewnem sosnowym.",
      "Najciekawsze jest jednak to, po co ją pieczono. Kukiełka była darem kumoszki dla matki po narodzinach dziecka i pokarmem dla chorych oraz starszych. Czyli: chleb, który nosiło się komuś, kto właśnie nie miał siły gotować. Trudno o lepsze wprowadzenie do rozmowy o kuchni, która ma odciążać, a nie zabawiać.",
      "Uczciwie oznaczę granicę faktu. Miejscowa opowieść wiąże kukiełki z wojskami Kazimierza Wielkiego w czternastym wieku — to legenda, nie potwierdzony przekaz, i tak ją traktuję. Nie potwierdziłam też, która konkretnie piekarnia dziś je piecze, więc nie wymieniam żadnej nazwy. Wiem natomiast, że w gminie działają koła gospodyń: „Uszwianki” w Uszwi, „Zawadzianki” w Zawadzie Uszewskiej i „Krajanki” w Gnojniku, i że to one gotują na dożynkach.",
      "Prostuję jeszcze jedno, bo pomyłka jest częsta. Suska sechlońska, imbirówka i susorki iwkowskie nie pochodzą z tej gminy — to Laskowa i Iwkowa. Gnojnik należy do stowarzyszenia „Na Śliwkowym Szlaku”, ale szlak turystyczny to nie to samo co obszar chronionej nazwy.",
      "Co z tego wynika dla urządzenia? Ciasta drożdżowego nie upiecze, bo nie ma pieca — i kukiełki też nie zrobi, bo ta wymaga drewna sosnowego. Wyrobi za to ciasto, i to jest ta część roboty, która przy pieczeniu w domu odstrasza najbardziej. Reszta należy do piekarnika i do rąk.",
    ],
  },

  districtsHeading: "Gdzie w gminie Gnojnik dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu sołectw, bez żadnej dopłaty za odległość: Gnojnika, Uszwi, Gosprzydowej, Lewniowej, Biesiadek, Zawady Uszewskiej i Żerkowa.",
    "Gmina zajmuje pięćdziesiąt pięć kilometrów kwadratowych i liczy około ośmiu tysięcy mieszkańców. Największy jest Gnojnik z blisko dwoma tysiącami sześciuset osobami, najmniejszy Żerków z dwustoma dziewięćdziesięcioma jeden. Przejechanie gminy z końca na koniec to kilkanaście minut.",
    "Leżymy na wschodnim skraju Pogórza Wiśnickiego, w dolinie Uszwicy — teren jest pofałdowany i poprzecinany wąwozami. Beskid Wyspowy stąd widać, ale gmina do niego nie należy i nie będę tego naciągać.",
    "Przez gminę biegnie droga krajowa numer siedemdziesiąt pięć, ta z Brzeska do Nowego Sącza. Do Brzeska jest stąd około dziesięciu kilometrów, do Krakowa około pięćdziesięciu dwóch. Kolei w gminie nie ma — najbliższa stacja to Brzesko Okocim. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Jedna uwaga językowa, która bardzo pomaga przy umawianiu: sołectwo nazywa się Uszew, ale mówi się „w Uszwi” i „kukiełki z Uszwi”. I nie mylcie go z Porąbką Uszewską — ta leży już w gminie Dębno — ani Zawady Uszewskiej z samą Uszwią, bo to osobne sołectwo.",
  ],
  districts: [
    "Gnojnik",
    "Uszew",
    "Gosprzydowa",
    "Lewniowa",
    "Biesiadki",
    "Zawada Uszewska",
    "Żerków",
  ],

  nearbyHeading: "Brzesko, Czchów, Dębno i Nowy Wiśnicz też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Gnojnik graniczy z Brzeskiem od północy, Dębnem od wschodu, Czchowem od południa i Nowym Wiśniczem od zachodu, a krótkim odcinkiem także z Lipnicą Murowaną. Do wszystkich tych gmin dojeżdżam i do żadnej nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Gnojnik, czy już Czchów albo Nowy Wiśnicz — po prostu zapytaj. Dla mnie to jedna trasa wzdłuż siedemdziesiątki piątki i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Brzesko",
    "Czchów",
    "Dębno",
    "Nowy Wiśnicz",
    "Lipnica Murowana",
    "Iwkowa",
    "Bochnia",
  ],

  about: blokOMnie("do gminy Gnojnik", "w powiecie brzeskim"),

  faq: [
    {
      question: "Czy kukiełka uszewska to naprawdę produkt z tej gminy?",
      answer:
        "Tak i to jedyny potwierdzony wpis na ministerialnej Liście Produktów Tradycyjnych z całego powiatu brzeskiego. Kukiełka uszewska pochodzi z Uszwi, sołectwa gminy Gnojnik, a wpisano ją w dwa tysiące czternastym roku. To podłużne pieczywo pszenne z warkoczem, około trzystu gramów, wypiekane w piecu opalanym drewnem sosnowym. Nie mylcie jej z kukiełką lisiecką ani podegrodzką — to trzy różne produkty.",
    },
    ...faqWspolne("w gminie Gnojnik"),
    {
      question: "Mam kilkadziesiąt arów i sporo warzyw z ogrodu. Przyda się?",
      answer:
        "Najbardziej właśnie przy tym. W tej gminie tysiąc sześćset dziewięćdziesiąt osiem gospodarstw ma średnio niecałe dwa hektary, więc pytanie pada często. Zupy do zamrożenia, przeciery, powidła, musy i dżemy urządzenie miesza samo, w stałej temperaturze i bez przypalania — a przy przetworach to jest cała różnica, bo tam nie chodzi o trudność, tylko o godziny przy garnku.",
    },
    {
      question: "Mieszkam w Uszwi. Dojedziesz, czy tylko do Gnojnika?",
      answer:
        "Dojadę, bez dopłaty, tak samo jak do Gnojnika. Obsługuję wszystkie siedem sołectw: Gnojnik, Uszew, Gosprzydową, Lewniową, Biesiadki, Zawadę Uszewską i Żerków. Cała gmina mieści się w kilkunastu minutach jazdy, więc odległość nie ma tu znaczenia — proszę tylko o punkt orientacyjny przy umawianiu.",
    },
  ],

  geo: { lat: 49.8953, lng: 20.6069 },
};
