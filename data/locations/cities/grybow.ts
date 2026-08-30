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
 * GRYBÓW — GMINA MIEJSKA w powiecie nowosądeckim.
 * 5 928 mieszkańców (31.12.2024), 17 km², 5 OSIEDLI.
 *
 * ⚠️ UWAGA NA BLIŹNIAKA: obok istnieje GMINA WIEJSKA GRYBÓW
 * (plik `grybow-gmina.ts`) — 16 sołectw, ponad 25 tys. mieszkańców,
 * 153,2 km², a jej urząd mieści się W TYM MIEŚCIE, przy
 * ul. Jakubowskiego 33. WSI O NAZWIE GRYBÓW NIE ISTNIEJE.
 * To ten sam układ co przy dwóch Nowych Targach i dwóch Jordanowach.
 * Osie obu stron są rozłączne:
 *   — MIASTO: zwartość i gęstość, lokacja 1340, bazylika,
 *   — GMINA WIEJSKA: Stróże z miodem na eksport i Florynka.
 *
 * OŚ STRONY: NAJMNIEJSZA I NAJGĘŚCIEJ ZALUDNIONA GMINA POWIATU.
 * Miasto-wyspa na 17 km², otoczone własną gminą wiejską.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 15 MAJA 1340 R. — LOKACJA PRZEZ KAZIMIERZA WIELKIEGO,
 *   pierwotna nazwa „GRYNBERG”. Przywileje: 15 lat wolnizny, targi,
 *   prawo składowe i mostowe.
 *   ⚠️ SPRZECZNOŚĆ W ŹRÓDLE: podstrona „Historia” serwisu miasta
 *   podaje jako zasadźcę sądeckiego mieszczanina Hanka Bogacza,
 *   podstrona „Wizytówka” — krakowskiego patrycjusza Wierzynka.
 *   NIEROZSTRZYGNIĘTE — ZASADŹCA POMINIĘTY,
 * — GĘSTOŚĆ ZALUDNIENIA 349,7 OS./KM² — NAJWYŻSZA W POWIECIE
 *   NOWOSĄDECKIM (średnia powiatu ok. 137). Potwierdzone przez
 *   sam urząd miasta,
 * — POWIERZCHNIA 17 KM²: 63% użytki rolne, 20% lasy,
 * — POŁOŻENIE: pogranicze Beskidu Niskiego i Pogórza Rożnowskiego,
 *   u stóp Gór Grybowskich (>700 m), nad BIAŁĄ TARNOWSKĄ,
 *   ok. 360 m n.p.m.,
 * — XVI–XVII W. — rozkwit: sukiennictwo, saletra, wapno; transport
 *   suszonych śliwek, budulca i skór,
 * — POTOP SZWEDZKI — spalenie północnej pierzei rynku, ratusza,
 *   kramów i kościoła; w XVIII w. miasto płaciło kontrybucje 65 razy,
 * — 1876 — kolej Tarnów–Muszyna (dziś LINIA 96),
 * — 6–7 WRZEŚNIA 1939 I STYCZEŃ 1945 — ok. 500 bomb i 2000 pocisków,
 *   ZNISZCZONE 2/3 ZABUDOWY,
 * — BAZYLIKA ŚW. KATARZYNY ALEKSANDRYJSKIEJ: gotycki kościół z XIV w.
 *   rozebrany od 1908; obecny budowany 1909–1921, NEOGOTYK;
 *   projekt JÓZEF PIUS DZIEKOŃSKI, następnie ZDZISŁAW MĄCZEŃSKI;
 *   wykonawca — budowniczy ROMAN OLSZEWSKI z Grybowa; konsekracja
 *   1921, bp tarnowski Leon Wałęga. PODNIESIONY DO GODNOŚCI
 *   BAZYLIKI MNIEJSZEJ W 2013 R.,
 * — ARTUR GROTTGER — SIERPIEŃ 1866 R., pobyt w Grybowie u narzeczonej
 *   WANDY MONNÉ; powstały szkice okolicy oraz rysunki „Nad grobem
 *   Kościuszki” i „Na chórze”. 14 LISTOPADA 1971 R. — miejscowe
 *   liceum jako PIERWSZA SZKOŁA W POLSCE przyjęło Grottgera
 *   za patrona,
 * — HISTORIA ŻYDOWSKA: zidentyfikowano PONAD 2 500 imion i nazwisk
 *   Żydów Grybowa od XIX w. do 1942 r. W getcie ok. 2 000 osób.
 *   ⚠️ 20 SIERPNIA 1942 R. — likwidacja: 360 OSÓB ROZSTRZELANYCH
 *   W BIAŁEJ NIŻNEJ (to sołectwo GMINY WIEJSKIEJ, nie osiedle
 *   miasta!), reszta pieszo do Nowego Sącza, następnie do Bełżca.
 *   Cmentarz żydowski w Siołkowej. 3 LISTOPADA 2019 R. —
 *   odsłonięcie pomnika z 1 774 NAZWISKAMI ofiar.
 *   PISAĆ RZECZOWO, BEZ ORNAMENTU,
 * — 5 OSIEDLI: Biała Wyżna, Sośnie, Strzylawki, Śródmieście,
 *   Śródmieście II,
 * — REGON: 548 podmiotów (31.12.2024),
 * — ZABYTKI: rynek z XIX-wiecznymi kamienicami, MODRZEWIOWA
 *   PLEBANIA Z XVII W., dwór Hoschów, Muzeum Parafialne,
 * — DOŻYNKI MIEJSKIE — 2026: 16 sierpnia, Osiedle Biała Wyżna.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. ŻADNEGO NIE POTWIERDZONO,
 * — „LUDWIKA MIECZYSŁAWA PAWLIKOWSKIEGO”. Nie potwierdzono
 *   żadnego źródła wiążącego tę postać z Grybowem,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — LICZBY „OK. 6,4 TYS. MIESZKAŃCÓW” ZE STRONY MIASTA.
 *   Nieaktualna — dane urzędu kończą się na 2014 r.
 *
 * PUŁAPKI:
 * — BIAŁA WYŻNA vs BIAŁA NIŻNA. Biała WYŻNA to OSIEDLE TEGO MIASTA.
 *   Biała NIŻNA to SOŁECTWO GMINY WIEJSKIEJ. Rozstrzelanie 360 osób
 *   w 1942 r. miało miejsce w Białej NIŻNEJ,
 * — GMINA WIEJSKA GRYBÓW TO OSOBNA JEDNOSTKA (patrz wyżej).
 */

export const GRYBOW: CityContent = {
  slug: "grybow",
  h1: "Thermomix Grybów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Grybów — prezentacja i cena",
  seoDescription:
    "Thermomix w Grybowie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd po całym mieście bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Grybów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Grybowie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Grybowa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("całe miasto, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Grybowie – jak wygląda prezentacja?",
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
      heading: "Miasto na siedemnastu kilometrach kwadratowych",
      paragraphs: [
        "Grybów jest najmniejszą terytorialnie gminą powiatu nowosądeckiego: siedemnaście kilometrów kwadratowych, na których mieszka blisko sześć tysięcy osób. To daje niecałe trzysta pięćdziesiąt osób na kilometr kwadratowy — najwyższą gęstość zaludnienia w całym powiecie, gdzie średnia wynosi mniej więcej sto trzydzieści siedem.",
        "Jest to zarazem miasto-wyspa: ze wszystkich stron otacza je gmina wiejska o tej samej nazwie, która ma szesnaście sołectw, ponad dwadzieścia pięć tysięcy mieszkańców i urząd mieszczący się w tym mieście. Wsi o nazwie Grybów nie ma wcale.",
        "Lokował je Kazimierz Wielki piętnastego maja tysiąc trzysta czterdziestego roku, pod pierwotną nazwą Grynberg. Miasto dostało piętnaście lat zwolnienia od danin, prawo targów, prawo składowe i mostowe. Kto był zasadźcą, nie umiem powiedzieć — sam serwis miasta podaje w dwóch miejscach dwie różne wersje.",
        "Przez szesnasty i siedemnasty wiek Grybów żył z sukiennictwa, saletry i wapna, a przez miasto szedł transport suszonych śliwek, budulca i skór. Potem zaczęły się nieszczęścia: potop szwedzki spalił północną pierzeję rynku, ratusz, kramy i kościół, a w osiemnastym wieku miasto płaciło kontrybucje sześćdziesiąt pięć razy.",
        "Dwudziesty wiek dołożył swoje. Podczas nalotów we wrześniu tysiąc dziewięćset trzydziestego dziewiątego i walk w styczniu czterdziestego piątego spadło tu około pięciuset bomb i dwóch tysięcy pocisków; zniszczeniu uległy dwie trzecie zabudowy. To, co dziś stoi wokół rynku, jest w dużej części odbudową.",
        "Przetrwała za to bazylika. Gotycki kościół świętej Katarzyny rozebrano w tysiąc dziewięćset ósmym roku, a na jego miejscu stanął w latach tysiąc dziewięćset dziewięć–dwadzieścia jeden neogotycki, zaprojektowany przez Józefa Piusa Dziekońskiego i dokończony przez Zdzisława Mączeńskiego, a postawiony przez miejscowego budowniczego Romana Olszewskiego. W dwa tysiące trzynastym roku podniesiono go do godności bazyliki mniejszej.",
        "Jest tu też historia, o której trzeba powiedzieć wprost. Przed wojną Grybów był w dużej części miastem żydowskim; badacze zidentyfikowali ponad dwa i pół tysiąca imion i nazwisk. Dwudziestego sierpnia tysiąc dziewięćset czterdziestego drugiego roku getto zlikwidowano: trzysta sześćdziesiąt osób rozstrzelano w pobliskiej Białej Niżnej, resztę popędzono pieszo do Nowego Sącza, a stamtąd koleją do Bełżca. W dwa tysiące dziewiętnastym odsłonięto pomnik z tysiąc siedmiuset siedemdziesięcioma czterema nazwiskami.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Grybowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o miasto, czy o gminę wiejską. To dwie osobne jednostki o tej samej nazwie i obie obsługuję — ale jeśli mieszkasz w Stróżach, Ptaszkowej czy Florynce, to jest gmina wiejska i ma u mnie osobną stronę.",
        "Miasto jest małe, więc adres wystarczy. Przyda się tylko informacja, czy to blok, czy dom — od tego zależy, gdzie zaparkuję i którędy wniosę sprzęt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
        {
          href: "/thermomix/grybow-gmina",
          label: "Mieszkasz w gminie wiejskiej Grybów? Tu jest jej strona",
        },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Grybowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Wszystko w zasięgu spaceru",
      paragraphs: [
        "Siedemnaście kilometrów kwadratowych to niewiele, a większość z nich to i tak pola i lasy. Zabudowa mieści się w kilku osiedlach wokół rynku i dworca — z jednego końca miasta na drugi idzie się kwadrans.",
        "To ma bardzo praktyczne konsekwencje. Dzieci wracają ze szkoły same, do sklepu chodzi się pieszo, a do pracy wielu mieszkańców dojeżdża — do Nowego Sącza, Gorlic albo pociągiem dalej. W domu bywa więc pusto przez pół dnia i pełno przez drugie pół.",
        "Najbardziej praktyczna rzecz jest tu prosta. Danie jednogarnkowe wstawia się rano i wychodzi. Gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie przypala się i nikt nie musi wracać, żeby zamieszać.",
        "Druga to gotowanie z zapasem. Podwójna porcja zupy, sos na kilka dni, pasty do kanapek, chleb — robione seriami w weekend, w jednym naczyniu. W tygodniu tylko się to odgrzewa.",
        "Trzecia dotyczy tego, kto gotuje. Ponieważ przepis prowadzi krok po kroku, obiad może zrobić nastolatek, który wraca do domu pierwszy. W małym mieście, gdzie dzieci są samodzielne wcześnie, to bywa realnym odciążeniem.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Grybów i gotowanie — miasto na styku dwóch krain",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost temu miastu. Grybów jest małą gminą miejską, bez kół gospodyń, bo to struktura wiejska — te działają w sąsiedniej gminie wiejskiej.",
      "Ciekawsze jest położenie. Miasto leży dokładnie na styku Beskidu Niskiego i Pogórza Rożnowskiego, nad Białą Tarnowską, u stóp Gór Grybowskich. Z jednej strony ciągnie się kraina łemkowska, z drugiej pogórzańska — i tutejsza kuchnia domowa ma po trochu z obu.",
      "Historycznie zresztą przez to miasto szły suszone śliwki, skóry i budulec, a mieszczanie żyli z sukiennictwa i handlu. Nie było to nigdy miejsce produkujące własne specjały, tylko takie, przez które one przechodziły — i to widać do dziś, bo kuchnia jest tu mieszana, a nie kanoniczna.",
      "Co się gotuje: zupy na kościach, ziemniaki, kapusta, fasola, wędliny robione w domu, ciasto drożdżowe. Rzecz robiona sezonami i w większych partiach — bo tak się gotuje w miejscu, gdzie do jednego obiadu siada kilka osób o różnych porach.",
      "Dla urządzenia najciekawsze jest to, co powtarzalne: farsze, pasty, ciasto na pierogi, zupy na zapas, przetwory z tego, co rośnie w ogródku. Czyli rozdrabnianie, mielenie, wyrabianie i mieszanie. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Gdzie w Grybowie dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, bez żadnej dopłaty za odległość. Grybów jest gminą miejską i dzieli się na pięć osiedli: Śródmieście, Śródmieście II, Biała Wyżna, Sośnie i Strzylawki.",
    "Miasto zajmuje siedemnaście kilometrów kwadratowych i liczy blisko sześć tysięcy mieszkańców — to najmniejsza terytorialnie i najgęściej zaludniona gmina powiatu. Leży na wysokości około trzystu sześćdziesięciu metrów nad poziomem morza, nad Białą Tarnowską.",
    "Warto rozróżnić dwie podobne nazwy, bo bywają mylone. Biała Wyżna to osiedle tego miasta. Biała Niżna to sołectwo sąsiedniej gminy wiejskiej. To dwie różne jednostki.",
    "Najważniejsze budynki stoją blisko siebie: rynek z dziewiętnastowiecznymi kamienicami, bazylika świętej Katarzyny z lat tysiąc dziewięćset dziewięć–dwadzieścia jeden, siedemnastowieczna modrzewiowa plebania, dwór Hoschów i muzeum parafialne. Dojazd: stacja kolejowa na linii z Tarnowa do Leluchowa, czynnej tu od tysiąc osiemset siedemdziesiątego szóstego roku.",
  ],
  districts: [
    "Śródmieście",
    "Śródmieście II",
    "Biała Wyżna",
    "Sośnie",
    "Strzylawki",
  ],

  nearbyHeading: "Gmina wiejska Grybów, Kamionka i Korzenna też są na mojej trasie",
  nearbyParagraphs: [
    "Wokół miasta leży gmina wiejska o tej samej nazwie — szesnaście sołectw, od Stróż i Ptaszkowej po Florynkę i Krużlową. To osobna jednostka, której urząd mieści się zresztą w tym mieście. Nie ma natomiast wsi o nazwie Grybów.",
    "Dalej są Kamionka Wielka, Korzenna, Łabowa i Krynica-Zdrój. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
  ],
  nearbyTowns: [
    "Kamionka Wielka",
    "Korzenna",
    "Łabowa",
    "Krynica-Zdrój",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do Grybowa", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Czym miasto Grybów różni się od gminy Grybów?",
      answer:
        "To dwie osobne gminy o tej samej nazwie. Miasto ma siedemnaście kilometrów kwadratowych i blisko sześć tysięcy mieszkańców. Gmina wiejska ma sto pięćdziesiąt trzy kilometry, ponad dwadzieścia pięć tysięcy mieszkańców i szesnaście sołectw — od Stróż po Florynkę — a jej urząd mieści się w mieście. Wsi o nazwie Grybów nie ma wcale. Dojeżdżam i tu, i tam, bez dopłaty.",
    },
    ...faqWspolne("w Grybowie"),
    {
      question: "Mieszkam w bloku, mam małą kuchnię. Zmieści się?",
      answer:
        "Zmieści. Urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, a zastępuje blender, malakser, mikser i część garnków — w małej kuchni zwykle zwalnia blat, zamiast go zajmować. Na prezentacji zobaczysz to na własnym blacie, a nie na zdjęciu.",
    },
  ],

  geo: { lat: 49.6241, lng: 20.9479 },
};
