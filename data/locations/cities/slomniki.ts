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
 * SŁOMNIKI — gmina miejsko-wiejska, POWIAT KRAKOWSKI (nie miechowski!).
 * Ok. 13,7 tys. mieszkańców na 110,8 km².
 *
 * ⚠️ TA GMINA NIE NALEŻY DO POWIATU MIECHOWSKIEGO, choć leży przy
 * jego granicy i trafiła tu przy okazji fali miechowskiej.
 * Sprawdzone w BIP powiatu krakowskiego, TERYT 120612.
 *
 * OŚ STRONY: CZOSNEK GALICYJSKI — i to jest NAJMOCNIEJSZY DOKUMENT
 * KULINARNY W CAŁYM SERWISIE. Nie wpis krajowy, tylko CHRONIONE
 * OZNACZENIE GEOGRAFICZNE UNII EUROPEJSKIEJ, rozporządzenie
 * wykonawcze Komisji (UE) 2018/1202 z 22 sierpnia 2018 r.
 * Obszar: gmina Słomniki, gmina Radziemice oraz pięć wsi gminy
 * Koniusza. Wszystkie etapy — sadzenie, nawadnianie, zbiór,
 * suszenie — muszą odbywać się na tym obszarze.
 *
 * Druga oś: DWIE STACJE I TRZYDZIEŚCI MINUT DO KRAKOWA.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — CZOSNEK GALICYJSKI: ChOG UE, rozporządzenie wykonawcze
 *   2018/1202 z 22 sierpnia 2018 r. Obszar produkcji: gmina Słomniki
 *   i gmina Radziemice plus wsie Niegardów, Niegardów Kolonia,
 *   Piotrkowice Wielkie, Budziejowice i Muniaczkowice z gminy
 *   Koniusza. Gmina sama podaje czosnek jako podstawę rolnictwa,
 * — ⚠️ TO NIE JEST WPIS NA LISTĘ PRODUKTÓW TRADYCYJNYCH MRiRW.
 *   To dwa różne rejestry: LPT jest krajowa, ChOG unijna.
 *   Strona konsekwentnie je rozróżnia,
 * — KOLEJ: linia nr 8 (Warszawa–Kraków). DWIE CZYNNE STACJE:
 *   Słomniki (ul. Kolejowa 42) i Słomniki Miasto. SKA2
 *   Kraków Główny–Miechów–Sędziszów, obsługiwana przez Koleje
 *   Małopolskie; 28 pociągów w dni robocze na linii.
 *   Kraków Główny – Słomniki Miasto: ok. 30 min,
 * — AUTOBUS: linia 222 do Krakowa Czyżyn, bilet 3 zł,
 * — DEMOGRAFIA: 13 671 mieszkańców (GUS 2024), powierzchnia
 *   110,8 km², gęstość ok. 123 os./km². W 2024 r.: 96 urodzeń,
 *   przyrost naturalny −71, saldo migracji wewnętrznych +30
 *   (142 zameldowania, 112 wymeldowań), plus 4 z zagranicy.
 *   OGÓLNA ZMIANA LICZBY LUDNOŚCI −1,3‰ — GMINA SIĘ KURCZY,
 * — PODZIAŁ: 24 obręby ewidencyjne, 30 miejscowości; gmina mówi
 *   o „24 wsiach i mieście”,
 * — GOSPODARKA: 1 638 podmiotów REGON (2024), 1 305 osób fizycznych.
 *   Bezrobocie 4,3% (2024). Przeciętne wynagrodzenie 8 110 zł brutto,
 *   czyli 94% średniej krajowej — WYRAŹNIE WIĘCEJ niż w gminach
 *   powiatu miechowskiego (tam ok. 7 287 zł),
 * — PRACODAWCA ZWERYFIKOWANY: Amplus sp. z o.o., centrum logistyczne
 *   owocowo-warzywne w Prandocinie-Iłach, ponad 200 osób, obecnie
 *   rekrutuje. Gmina wymienia też inne firmy, ale dane pochodzą
 *   ze strony z lat 2012–2013 i ich nie weryfikowałam,
 * — MAŁOPOLSKIE ŚWIĘTO CZOSNKU: impreza ROTACYJNA między gminą
 *   Słomniki (wieś Prandocin, stadion LKS Juvenia) a gminą
 *   Radziemice (Obrażejowice). XV edycja 27 lipca 2025 r.
 *   w Prandocinie; XVI edycja w 2026 r. w Obrażejowicach,
 * — Gmina podaje, że w 1794 r. Kościuszko ogłosił w Słomnikach
 *   „Raport dla Narodu Polskiego” o zwycięstwie racławickim.
 *   Źródło: wyłącznie strona gminy — piszę z zastrzeżeniem.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA, ŻE GMINA ROŚNIE NAPŁYWEM Z KRAKOWA. Saldo migracji
 *   jest dodatnie (+30), ale przyrost naturalny wynosi −71,
 *   a ludność ogółem spada. NIE WOLNO tego przekręcić,
 * — LUDNOŚCI SAMEGO MIASTA. Nie znalazłam wiarygodnej liczby,
 * — DAT LOKACJI, UTRATY I ODZYSKANIA PRAW MIEJSKICH. Niepotwierdzone,
 * — DOKŁADNEJ LICZBY SOŁECTW. Gmina podaje 24 wsie, GUS 30
 *   miejscowości, obrębów ewidencyjnych 24. Piszę opisowo,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak — czosnek ma
 *   oznaczenie unijne, co jest czym innym,
 * — POTRAW NAGRODZONYCH NA ŚWIĘCIE CZOSNKU 2025. Wygrały je koła
 *   gospodyń z gminy RADZIEMICE (Łętkowice, Łętkowice Kolonia,
 *   Wierzbica), nie ze Słomnik. Nie przypisuję ich tej gminie,
 * — NAZW KÓŁ GOSPODYŃ ZE SŁOMNIK ani dat ich założenia.
 *
 * PUŁAPKI:
 * — POWIAT KRAKOWSKI, NIE MIECHOWSKI,
 * — NIE MYLIĆ ZE SŁABOSZOWEM (powiat miechowski),
 * — ŚWIĘTO CZOSNKU NIE ODBYWA SIĘ CO ROKU W SŁOMNIKACH — rotuje
 *   z Radziemicami. W 2026 r. jest w Obrażejowicach,
 * — ChOG ≠ LISTA PRODUKTÓW TRADYCYJNYCH. Nie mieszać rejestrów,
 * — SPRZECZNE POWIERZCHNIE: 110,8 / 111 / 113 km². Używam 110,8
 *   za GUS.
 */

export const SLOMNIKI: CityContent = {
  slug: "slomniki",
  h1: "Thermomix Słomniki – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Słomniki — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Słomniki: bezpłatna prezentacja TM7 u Ciebie w kuchni — Słomniki, Prandocin, Niedźwiedź, Smroków. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Słomniki — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Słomniki. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Słomniki przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do miasta i do wszystkich wsi gminy, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("miasto i wszystkie wsie, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Słomniki – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Słomnikach, jak w Prandocinie, Niedźwiedziu czy Smrokowie.",
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
      heading: "Czosnek, który ma ochronę w całej Unii Europejskiej",
      paragraphs: [
        "Dwudziestego drugiego sierpnia dwa tysiące osiemnastego roku Komisja Europejska zarejestrowała nazwę „czosnek galicyjski” jako chronione oznaczenie geograficzne. Obszar produkcji obejmuje gminę Słomniki, gminę Radziemice i pięć wsi gminy Koniusza. Wszystkie etapy — sadzenie, nawadnianie, zbiór i suszenie — muszą odbywać się właśnie tutaj.",
        "Piszę o tym z osobną satysfakcją, bo to jest najmocniejszy dokument kulinarny, jaki spotkałam na tych stronach. Na kilkudziesięciu gminach tłumaczyłam, że coś jest lokalną specjalnością, ale wpisu nie ma. W kilku znalazł się wpis na krajową Listę Produktów Tradycyjnych. Tutaj mamy poziom wyżej: ochronę prawną w całej Unii.",
        "I od razu rozróżnienie, bo bywa mylone. Lista Produktów Tradycyjnych to rejestr krajowy, prowadzony przez ministerstwo. Chronione oznaczenie geograficzne to rejestr unijny — inny system, wyższy próg dowodowy i realna ochrona nazwy w dwudziestu siedmiu krajach. Czosnek galicyjski ma to drugie.",
        "Druga rzecz, która tę gminę definiuje, to dojazd. Słomniki mają dwie czynne stacje kolejowe na magistrali z Warszawy do Krakowa, a Szybka Kolej Aglomeracyjna dowozi stąd do Krakowa Głównego w mniej więcej trzydzieści minut. Jeździ też autobus linii dwieście dwadzieścia dwa do Czyżyn, za trzy złote.",
        "To widać w zarobkach: przeciętne wynagrodzenie w tej gminie to ponad osiem tysięcy złotych brutto, czyli dziewięćdziesiąt cztery procent średniej krajowej. Dla porównania, w sąsiednich gminach powiatu miechowskiego jest to około siedmiu i pół tysiąca. Trzydzieści minut pociągiem robi tę różnicę.",
        "Muszę jednak dodać rzecz, którą łatwo przekręcić i którą wiele tekstów przekręca. Owszem, saldo migracji jest tu dodatnie — więcej osób się melduje niż wymeldowuje. Ale przyrost naturalny wynosi minus siedemdziesiąt jeden, a ludność gminy ogółem spada. Nie napiszę więc, że Słomniki rosną napływem z Krakowa, bo w sumie się kurczą.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Słomniki?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy to miasto, czy wieś, i podaj nazwę. Uważaj przy tym na Prandociny: są trzy — Prandocin, Prandocin-Iły i Prandocin-Wysiółek. To osobne miejscowości. Dopłaty nie ma nigdzie.",
        "Jeśli dojeżdżasz pociągiem do Krakowa, powiedz o której wracasz — umawiam się na wieczory bez problemu. Weekendy są równie normalnym terminem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Słomniki"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Trzydzieści minut pociągiem i co z tego wynika",
      paragraphs: [
        "Trzydzieści minut do Krakowa Głównego to jest ta odległość, przy której praca w mieście nie wymaga przeprowadzki, ale i tak zjada z dnia półtorej godziny w obie strony. Widać to w tutejszych zarobkach — są wyraźnie wyższe niż w sąsiednich gminach — i widać to w kuchniach.",
        "Dzień jest tu rozciągnięty z obu stron: wyjście przed siódmą, powrót po siedemnastej, a między jednym a drugim pytanie, kto i kiedy ugotuje obiad. To najczęstszy scenariusz, jaki spotykam w gminach wokół Krakowa, i ma dość oczywiste konsekwencje.",
        "Praktyczna korzyść jest prosta: danie jednogarnkowe wstawia się i wychodzi albo wstawia po powrocie i idzie zająć się czymś innym. Gotuje się bez pilnowania, samo wyłącza i czeka. Nie trzeba stać ani wracać co dziesięć minut zamieszać.",
        "Druga rzecz to gotowanie na zapas w weekend. Podwójna porcja zupy, sos na kilka dni, ciasto na pierogi, pasty kanapkowe, chleb — w jednym naczyniu, seriami. W domu, z którego dwie osoby dojeżdżają, zapas w lodówce jest wart więcej niż codzienne świeże gotowanie, na które i tak nie ma czasu.",
        "Jest tu jeszcze jedna rzecz, specyficzna dla tej gminy. Skoro rośnie tu czosnek z unijną ochroną nazwy, to znaczy, że w wielu domach czosnku po prostu jest dużo — z własnego pola albo od sąsiada. A obieranie i rozdrabnianie czosnku w większych ilościach to jedna z tych czynności, których wszyscy nie znoszą i które urządzenie przejmuje w całości.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a gdy oboje rodzice wracają wieczorem, to bywa realnie potrzebne.",
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
    heading: "Czosnek galicyjski — i co z nim zrobić w kuchni",
    paragraphs: [
      "Czosnek galicyjski jest chronionym oznaczeniem geograficznym Unii Europejskiej od dwa tysiące osiemnastego roku, a obszar produkcji to gmina Słomniki, gmina Radziemice i pięć wsi gminy Koniusza. Ochrona obejmuje cały cykl: sadzenie, nawadnianie, zbiór i suszenie muszą odbyć się na tym obszarze. To nie jest chwyt marketingowy, tylko akt prawny.",
      "Powtórzę jedno rozróżnienie, bo zdarza mi się je prostować na wielu stronach: to nie jest wpis na krajową Listę Produktów Tradycyjnych. To rejestr unijny, czyli poziom wyżej. Ze Słomnik nie znalazłam natomiast żadnego wpisu na listę ministerialną i nie zamierzam udawać, że jest.",
      "Raz do roku odbywa się tu Małopolskie Święto Czosnku — ale uczciwie: nie co roku w Słomnikach. Impreza rotuje między Prandocinem w tej gminie a Obrażejowicami w gminie Radziemice. W dwa tysiące dwudziestym piątym roku była w Prandocinie, w dwa tysiące dwudziestym szóstym jest po sąsiedzku.",
      "Co robi z czosnkiem urządzenie? Przede wszystkim to, czego nikt nie lubi robić: rozdrabnia go w ilościach większych niż dwa ząbki. Przy paście czosnkowej, przy zupie czosnkowej, przy marynatach i przy sosach idzie to w sekundy, a ręce nie pachną przez resztę dnia. Masło czosnkowe robi się w jednym naczyniu.",
      "Nie zrobi natomiast dwóch rzeczy i wolę je nazwać. Nie obierze czosnku — to trzeba zrobić rękami. I nie zrobi z niego niczego lepszego, niż jest sam w sobie. Czosnek z unijną ochroną nazwy nie potrzebuje pomocy w smaku; potrzebuje tylko, żeby przygotowanie go nie zniechęcało.",
    ],
  },

  districtsHeading: "Gdzie w gminie Słomniki dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich wsi gminy, bez żadnej dopłaty za odległość: Prandocina, Prandocina-Iłów, Prandocina-Wysiółka, Niedźwiedzia, Smrokowa, Kacic, Waganowic, Januszowic, Janikowic, Brończyc, Czech, Kępy, Lipnej Woli, Miłocic, Muniakowic, Orłowa, Polanowic, Ratajowa, Szczepanowic, Trątnowic, Wesołej, Wężerowa, Zaborza i Zagaj Smrokowskich.",
    "Warto uważać na nazwy: Prandociny są trzy — Prandocin, Prandocin-Iły i Prandocin-Wysiółek — i to trzy osobne miejscowości. W Prandocinie-Iłach mieści się zresztą największy zweryfikowany pracodawca gminy, centrum logistyczne owocowo-warzywne zatrudniające ponad dwieście osób.",
    "Cała gmina zajmuje sto dziesięć i osiem dziesiątych kilometra kwadratowego i liczy około trzynastu i pół tysiąca mieszkańców. Warto przy okazji sprostować jedno: Słomniki leżą w powiecie krakowskim, nie miechowskim, choć graniczą z gminą Miechów i bywają do tamtego powiatu zaliczane.",
    "Dojazd jest tu najlepszy z całej okolicy. Gmina ma dwie czynne stacje kolejowe na linii z Warszawy do Krakowa: Słomniki oraz Słomniki Miasto. Szybka Kolej Aglomeracyjna dowozi do Krakowa Głównego w mniej więcej trzydzieści minut, a na całej linii kursuje dwadzieścia osiem pociągów w dni robocze. Jeździ też autobus linii dwieście dwadzieścia dwa do Krakowa Czyżyn, za trzy złote.",
  ],
  districts: [
    "Słomniki (miasto)",
    "Prandocin",
    "Prandocin-Iły",
    "Prandocin-Wysiółek",
    "Niedźwiedź",
    "Smroków",
    "Kacice",
    "Waganowice",
    "Januszowice",
    "Janikowice",
    "Brończyce",
    "Czechy",
    "Kępa",
    "Lipna Wola",
    "Miłocice",
    "Muniakowice",
    "Orłów",
    "Polanowice",
    "Ratajów",
    "Szczepanowice",
    "Trątnowice",
    "Wesoła",
    "Wężerów",
    "Zaborze",
    "Zagaje Smrokowskie",
  ],

  nearbyHeading: "Miechów, Gołcza i Kraków też są na mojej trasie",
  nearbyParagraphs: [
    "Słomniki leżą w powiecie krakowskim, ale graniczą z Miechowem i Gołczą, więc jeżdżę stąd w obie strony — i do powiatu miechowskiego, i do samego Krakowa, do którego jest stąd bardzo blisko.",
    "Jest tu też ładny drobiazg historyczny, który spina tę okolicę: według gminy to właśnie w Słomnikach Kościuszko ogłosił w tysiąc siedemset dziewięćdziesiątym czwartym roku raport o zwycięstwie pod Racławicami. Racławice leżą kilkadziesiąt kilometrów stąd i też są na mojej trasie. Zaznaczam, że to informacja ze strony gminy, której nie potwierdziłam w drugim źródle.",
  ],
  nearbyTowns: [
    "Miechów",
    "Gołcza",
    "Racławice",
    "Kraków",
    "Michałowice",
    "Proszowice",
  ],

  about: blokOMnie("do gminy Słomniki", "pod Krakowem"),

  faq: [
    {
      question: "Czy czosnek galicyjski jest na liście produktów tradycyjnych?",
      answer:
        "Nie — ma coś mocniejszego. Czosnek galicyjski jest chronionym oznaczeniem geograficznym Unii Europejskiej, zarejestrowanym rozporządzeniem Komisji z dwudziestego drugiego sierpnia dwa tysiące osiemnastego roku. To rejestr unijny, czyli inny i wyższy niż krajowa Lista Produktów Tradycyjnych. Obszar produkcji obejmuje gminę Słomniki, gminę Radziemice i pięć wsi gminy Koniusza.",
    },
    ...faqWspolne("w gminie Słomniki"),
    {
      question: "Czy Słomniki są w powiecie miechowskim?",
      answer:
        "Nie, w krakowskim — choć graniczą z gminą Miechów i bywają do tamtego powiatu zaliczane. Prostuję to, bo pomyłka jest częsta. Dla umówienia prezentacji nie ma to zresztą żadnego znaczenia: dojeżdżam i tu, i tam, bez dopłaty.",
    },
    {
      question: "Dojeżdżam do Krakowa. Zdążymy wieczorem po pracy?",
      answer:
        "Spokojnie. Szybka Kolej Aglomeracyjna pokonuje trasę z Krakowa Głównego do Słomnik Miasto w mniej więcej trzydzieści minut, więc jeśli wracasz po siedemnastej, umawiamy się na osiemnastą albo później. Prezentacja trwa około dwóch godzin. To najczęstszy scenariusz w tej gminie.",
    },
  ],

  geo: { lat: 50.2436, lng: 20.0806 },
};
