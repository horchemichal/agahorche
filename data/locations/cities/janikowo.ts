import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * JANIKOWO — powiat inowrocławski, woj. kujawsko-pomorskie,
 * KUJAWY, nad Jeziorem Pakoskim.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 8 071 mieszkańców (GUS 31.12.2024), 9,5 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 12 344 osoby, 92,0 km²,
 * 12 sołectw.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ JANIKOWO.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ ZAWYŻENIE: strona powiatu inowrocławskiego podaje
 *   dla gminy 13 855 osób — to +12,2% wobec GUS.
 *   UŻYWAM GUS. TWARDA GRANICA.
 * ⚠ ODMIANA: D. JANIKOWA, Ms. W JANIKOWIE,
 *   przym. JANIKOWSKI.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO SŁOWNIKOWO —
 *   NIE UŻYWAM ŻADNEJ.
 * ⚠⚠ RYZYKO POMYLENIA WYSOKIE: JANIKOWO to także wieś
 *   w gminie Swarzędz pod POZNANIEM (wielkopolskie),
 *   która w wyszukiwarce wypada równie wysoko.
 *   Istnieją też JANIKÓW i JANIKOWICE.
 *
 * HISTORIA — FAKTY UŻYTE:
 * ⚠⚠ TO MIASTO NIE MA HISTORII RZEMIEŚLNICZEJ
 *   W KLASYCZNYM SENSIE. Pierwszy dokument potwierdzający
 *   istnienie Janikowa pochodzi z 1472 r., ale do XX w.
 *   była to WIEŚ. Opracowanie określa Janikowo jako
 *   „typowe powojenne miasto, zbudowane od podstaw".
 *   NIE WYMYŚLAM CECHÓW ANI SPISÓW RZEMIEŚLNIKÓW.
 * — 1872–1873 — budowa linii Poznań–Bydgoszcz–Toruń;
 *   powstała stacja z ajencją pocztową i bocznicą
 *   do Pakości ⚠ NIEMIECKIEJ NAZWY STACJI NIE UŻYWAM.
 * — 1875 — uruchomienie cukrowni, 1876 — ukończenie budowy
 *   ⚠⚠ PODAJĘ WYŁĄCZNIE JAKO DATĘ. ZERO CUKROWNICTWA
 *   JAKO TEMATU — kąt zajęty (Chełmża). TWARDA GRANICA.
 * — ZAKŁADY SODOWE — chronologia z datami dziennymi:
 *   26 września 1957 — uruchomienie elektrociepłowni,
 *   2 października 1957 — rozruch pieca wapiennego,
 *   27 października 1957 — pierwsze kilogramy sody,
 *   4 listopada 1957 — przekazanie gospodarce narodowej.
 *   Surowce: sól kamienna z Inowrocławia, wapień z Piechcina
 *   w gminie Barcin, woda z Jeziora Pakoskiego.
 *   ⚠⚠ ZERO NAZW FIRM. ⚠⚠⚠ ZERO KRYZYSU I PRZYSZŁOŚCI
 *   ZAKŁADU — patrz etyka. ⚠⚠ ZERO UMOWY Z 1949 R.
 *   (kontekst polityczny).
 * — ⚠⚠ RDZEŃ KĄTA — KOLEJKA LINOWA JANIKOWO–PIECHCIN:
 *   uruchomiona w 1960 r., DŁUGOŚĆ 7,5 KM, dostarczała
 *   PONAD 2 TYS. TON WAPIENIA DZIENNIE — wisząc
 *   w powietrzu między dwoma miastami.
 *   ⚠ JEDNO ŹRÓDŁO (opracowanie historyczne w PDF).
 *   ZAZNACZAM, ŻE FAKT MA JEDNO ŹRÓDŁO.
 * — LUDNOŚĆ I STATUS: 1945 — 1 790 mieszkańców;
 *   1957 — 3 240; 21 stycznia 1959 — status osiedla typu
 *   miejskiego, obszar 944,88 ha;
 *   ⚠ 7 LIPCA 1962 — NADANIE PRAW MIEJSKICH (data dzienna).
 *   NAJMŁODSZE MIASTO POWIATU.
 * — JEZIORO PAKOSKIE: powierzchnia 750 ha, DŁUGOŚĆ 14,5 KM,
 *   głębokość maksymalna 19 m; w latach 70. XX w.
 *   SZTUCZNIE PODPIĘTRZONE O OK. 4,5 M.
 * — w gminie: kościół murowany z 1460 r. w Ostrowie,
 *   zespół dworski w Kołudzie Wielkiej.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Janikowo.
 *   ⚠⚠⚠ PUŁAPKA ROZBROJONA: „PLACKI NA SODZIE"
 *   (wpis 24.11.2011, wyroby piekarnicze i cukiernicze)
 *   — KARTA WSKAZUJE TYLKO WOJEWÓDZTWO, NIE GMINĘ.
 *   TO NIE JEST PRODUKT JANIKOWA I NIE WOLNO GO TAK
 *   PRZEDSTAWIĆ. NIE UŻYWAM GO W OGÓLE — do tego kąt
 *   spulchniaczy jest zajęty (Myszyniec).
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: PO TROCHU CZY WSZYSTKO NARAZ — dodawanie stopniowe.
 * Kąt od kolejki linowej: przez 7,5 km wapień jechał
 * strumieniem, po trochu i bez przerwy — ponad dwa tysiące
 * ton dziennie, ale nigdy naraz. W kuchni jest cała grupa
 * rzeczy, które udają się wyłącznie wtedy, gdy dodaje się
 * je stopniowo — i cała druga grupa, przy których to nie ma
 * żadnego znaczenia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że od 1960 roku wapień jechał do Janikowa kolejką
 *   linową o długości siedmiu i pół kilometra, ponad dwa
 *   tysiące ton dziennie — wisząc w powietrzu, bez drogi
 *   i bez torów ⚠ ZAZNACZAM, ŻE FAKT MA JEDNO ŹRÓDŁO,
 * — ŻE CIEKAWE JEST TO, ŻE TO SZŁO STRUMIENIEM: dwa
 *   tysiące ton dziennie, ale nigdy dwa tysiące ton naraz,
 * — ⚠⚠ ŻE W KUCHNI JEST GRUPA RZECZY, KTÓRE UDAJĄ SIĘ
 *   WYŁĄCZNIE STOPNIOWO — TO JEST RDZEŃ,
 * — GDZIE TO NAPRAWDĘ DECYDUJE:
 *   — OLEJ DO SOSU NA ZIMNO: wlany naraz nie połączy się
 *     z resztą, wlewany cienką strużką — połączy
 *     ⚠ ODSYŁAM DO STRONY O EMULSJI, NIE ROZWIJAM,
 *   — GORĄCY PŁYN DO ZAWIESINY Z MĄKI: dolany naraz daje
 *     grudki, dolewany po trochu daje gładko,
 *   — MĄKA DO CIASTA: wsypana jednym ruchem zostawia
 *     suche gniazda na dnie miski,
 *   — PŁYN DO KASZY I RYŻU, gdy chce się je mieć kremowe,
 *     a nie odcedzone,
 * — ⚠⚠ I GRUPA ODWROTNA — GDZIE TO NIE MA ZNACZENIA
 *   I GDZIE NIEPOTRZEBNIE TRACIMY CZAS:
 *   — warzywa do zupy, która i tak będzie się gotować
 *     godzinę,
 *   — przyprawy sypkie, które i tak się rozejdą,
 *   — woda do garnka,
 *   ŻE WARTO WIEDZIEĆ, KIEDY SIĘ NIE SPIESZYĆ — i kiedy
 *   spokojnie można wsypać wszystko naraz,
 * — ŻE REGUŁA, KTÓRA TO PORZĄDKUJE, JEST JEDNA:
 *   STOPNIOWO DODAJE SIĘ TAM, GDZIE DWIE RZECZY MAJĄ SIĘ
 *   POŁĄCZYĆ W JEDNO. Gdzie mają tylko obok siebie leżeć
 *   albo się ugotować — kolejność i tempo są obojętne,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to jest rzecz, w której
 *   urządzenie z otworem w pokrywie realnie pomaga —
 *   można dolewać przy pracujących ostrzach, czego przy
 *   misce i trzepaczce nie da się zrobić w pojedynkę.
 *   ALE UCZCIWIE TEŻ: tempo dolewania ustawia człowiek,
 *   nie urządzenie. Za szybko wlany olej nie połączy się
 *   tak samo w Thermomixie jak w misce — fizyka jest ta
 *   sama, zmienia się tylko to, że masz wolną drugą rękę.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SODY JAKO TEMATU — kąt zajęty (Myszyniec).
 *   „Placki na sodzie" NIE POJAWIAJĄ SIĘ w ogóle.
 *   ⚠⚠ ZERO MIESZANIA SODY KAUSTYCZNEJ ZE SPOŻYWCZĄ.
 *   Soda kaustyczna jest żrąca i NIE WOLNO jej zestawiać
 *   z gotowaniem ani jednym zdaniem. TWARDA GRANICA
 *   BEZWZGLĘDNA.
 * — ⚠⚠ ZERO EMULSJI JAKO TEMATU — kąt zajęty (Sępopol).
 *   Odsyłam jednym zdaniem.
 * — ⚠⚠ ZERO CUKROWNICTWA — kąt zajęty (Chełmża).
 * — ⚠ ZERO MIESZANIA JAKO TEMATU — kąt zajęty
 *   (Opole Lubelskie). Tu chodzi o TEMPO DODAWANIA,
 *   nie o samo mieszanie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO KRYZYSU ZAKŁADÓW SODOWYCH. To są PIERWSZE
 *   WYNIKI WYSZUKIWANIA dla hasła „Janikowo": nagłówki
 *   o upadku, o dramacie miasta i mieszkańców, o zagrożeniu
 *   dla samorządu. ZERO upadku, ZERO zwolnień, ZERO budżetu
 *   gminy, ZERO przyszłości miasta.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO WĄTKU ŚRODOWISKOWEGO: wapno posodowe, stawy
 *   osadowe, „białe morza", pylenie, postępowania
 *   środowiskowe. TWARDA GRANICA.
 * — ⚠⚠ ZERO NAZW FIRM. Zakład ma rozpoznawalną nazwę
 *   własną występującą w każdym źródle — piszę najwyżej
 *   „zakłady sodowe" i możliwie najmniej.
 * — ⚠⚠ ZERO UMOWY Z 27 CZERWCA 1949 R. i sowieckiej genezy
 *   inwestycji — wątek polityczny.
 * — ZERO depopulacji (−11,2%) i bezrobocia.
 * — ZERO niemieckiej nazwy stacji kolejowej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „EMULSJA — MAJONEZ I WINEGRET" (Sępopol) dotyczy
 *   ŁĄCZENIA TŁUSZCZU Z WODĄ. ⚠⚠ TO JEST NAJBLIŻSZY KĄT.
 *   TUTAJ chodzi o TEMPO DODAWANIA W OGÓLE — emulsja jest
 *   jednym z czterech przykładów i odsyłam tam wprost.
 * — „MIESZANIE" (Opole Lubelskie) dotyczy SAMEJ CZYNNOŚCI
 *   MIESZANIA.
 * — „OD CZEGO CIASTO ROŚNIE" (Myszyniec) dotyczy
 *   SPULCHNIACZY, w tym sody.
 * — „RODZAJE MĄKI" (Korsze) dotyczy MĄKI.
 * TUTAJ chodzi o TO, CZY COŚ DODAJE SIĘ NARAZ, CZY PO TROCHU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ danych ze strony powiatu.
 * — NIE PRZYPISUJĘ Janikowu „placków na sodzie".
 * — NIE PISZĘ o sodzie kuchennej w ogóle.
 * — NIE PISZĘ o kondycji ani przyszłości zakładów.
 * — NIE PODAJĘ nazw firm.
 * — NIE WYMYŚLAM historii rzemieślniczej, której nie ma.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Janikowo leży na Kujawach nad Jeziorem Pakoskim, jest
 *   miastem w gminie miejsko-wiejskiej i liczy 8 071
 *   mieszkańców (GUS, 31.12.2024) na 9,5 km²; cała gmina
 *   ma 12 344 osoby na 92 km² i dwanaście sołectw,
 * — pierwszy dokument potwierdzający istnienie Janikowa
 *   pochodzi z 1472 roku, ale do XX wieku była to wieś;
 *   opracowania nazywają je typowym powojennym miastem,
 *   zbudowanym od podstaw,
 * — w latach 1872–1873 zbudowano linię kolejową
 *   Poznań–Bydgoszcz–Toruń i powstała tu stacja z ajencją
 *   pocztową oraz bocznicą do Pakości; w 1875 roku
 *   uruchomiono cukrownię,
 * — jesienią 1957 roku ruszyły zakłady sodowe: 26 września
 *   elektrociepłownia, 2 października piec wapienny,
 *   a 27 października wyprodukowano pierwsze kilogramy
 *   sody; surowce pochodziły z Inowrocławia, z Piechcina
 *   w gminie Barcin i z Jeziora Pakoskiego,
 * — od 1960 roku wapień dostarczała kolejka linowa
 *   Janikowo–Piechcin o długości 7,5 kilometra, przewożąc
 *   ponad dwa tysiące ton dziennie (fakt z jednego źródła),
 * — w 1945 roku mieszkało tu 1 790 osób, w 1957 — 3 240;
 *   21 stycznia 1959 miejscowość otrzymała status osiedla
 *   typu miejskiego o obszarze 944,88 hektara, a prawa
 *   miejskie — 7 lipca 1962 roku, co czyni Janikowo
 *   najmłodszym miastem powiatu,
 * — Jezioro Pakoskie ma 750 hektarów powierzchni,
 *   14,5 kilometra długości i do dziewiętnastu metrów
 *   głębokości; w latach siedemdziesiątych XX wieku
 *   podpiętrzono je sztucznie o około cztery i pół metra.
 */
export const JANIKOWO: CityContent = {
  slug: "janikowo",
  h1: "Thermomix Janikowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Janikowo — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Janikowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Janikowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Janikowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Janikowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Janikowo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwa tysiące ton dziennie — ale nigdy dwa tysiące ton naraz.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Janikowie – jak wygląda prezentacja?",
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
      id: "po-trochu",
      heading: "Siedem i pół kilometra w powietrzu",
      paragraphs: [
        "Od 1960 roku wapień jechał do Janikowa kolejką linową o długości siedmiu i pół kilometra — wisząc w powietrzu między dwoma miastami, bez drogi i bez torów. Ponad dwa tysiące ton dziennie. (Ten fakt znalazłam w jednym opracowaniu, więc podaję go z zastrzeżeniem.)",
        "Najciekawsze jest w nim to, że szło strumieniem. Dwa tysiące ton dziennie — ale nigdy dwa tysiące ton naraz.",
        "W kuchni jest cała grupa rzeczy, które udają się wyłącznie w ten sposób.",
        "Olej do sosu na zimno wlany jednym ruchem po prostu się nie połączy — będzie pływał osobno, choćby się mieszało bardzo długo. Ten sam olej wlewany cienką strużką połączy się bez problemu. O samym łączeniu tłuszczu z wodą pisałam osobno przy innym mieście, bo to temat sam w sobie.",
        "Gorący płyn dolany naraz do zawiesiny z mąki daje grudki, a dolewany po trochu daje gładko. Mąka wsypana do ciasta jednym ruchem zostawia suche gniazda na dnie miski, które wychodzą na jaw dopiero po upieczeniu. Płyn do kaszy albo ryżu, jeśli mają być kremowe, a nie odcedzone, też dodaje się partiami.",
        "Ale — i to jest część, o której się w ogóle nie mówi — istnieje też grupa odwrotna. Rzeczy, przy których stopniowe dodawanie nie daje nic, poza straconym czasem.",
        "Warzywa do zupy, która i tak będzie się gotować godzinę. Przyprawy sypkie, które i tak się rozejdą. Woda do garnka. Tu można spokojnie wsypać wszystko naraz i zająć się czymś innym, a mimo to widuję, jak ludzie dokładają marchewkę po kawałku, bo „tak się robi”.",
        "Regułę, która to porządkuje, da się zapisać w jednym zdaniu: stopniowo dodaje się tam, gdzie dwie rzeczy mają się połączyć w jedno. Tam, gdzie mają tylko obok siebie leżeć albo się ugotować — tempo jest obojętne.",
        "Uczciwie o sprzęcie. To jest jedna z tych rzeczy, w których urządzenie z otworem w pokrywie realnie pomaga: da się dolewać przy pracujących ostrzach, czego przy misce i trzepaczce nie zrobisz w pojedynkę, bo nie masz trzeciej ręki.",
        "Tyle że tempo dolewania i tak ustawia człowiek, nie urządzenie. Za szybko wlany olej nie połączy się w Thermomixie ani odrobinę lepiej niż w misce — fizyka jest ta sama. Zmienia się tylko to, że masz wolną drugą rękę, i to jest cała różnica. Warto wiedzieć, na czym ona naprawdę polega.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Janikowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli coś u Was regularnie się nie łączy albo robi grudki — powiedz to przy umawianiu. Przyczyna bywa wyłącznie w tempie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Janikowie"),
    sekcjaRaty("w Janikowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla janikowskiej rodziny",
      paragraphs: [
        "Janikowo leży na Kujawach nad Jeziorem Pakoskim, jest miastem w gminie miejsko-wiejskiej i liczy ponad osiem tysięcy mieszkańców na dziewięciu i pół kilometra kwadratowego; cała gmina ma ponad dwanaście tysięcy osób i dwanaście sołectw. Pierwszy dokument potwierdzający istnienie Janikowa pochodzi z 1472 roku, ale do XX wieku była to wieś — opracowania nazywają je typowym powojennym miastem, zbudowanym od podstaw. W latach 1872–1873 zbudowano linię kolejową Poznań–Bydgoszcz–Toruń i powstała tu stacja z ajencją pocztową oraz bocznicą do Pakości; w 1875 uruchomiono cukrownię. Jesienią 1957 roku ruszyły zakłady sodowe: 26 września elektrociepłownia, 2 października piec wapienny, a 27 października wyprodukowano pierwsze kilogramy sody. Od 1960 roku wapień dostarczała kolejka linowa do Piechcina o długości siedmiu i pół kilometra. W 1945 roku mieszkało tu tysiąc siedemset dziewięćdziesiąt osób, a prawa miejskie miejscowość otrzymała dopiero 7 lipca 1962 roku — to najmłodsze miasto powiatu. Jezioro Pakoskie ma siedemset pięćdziesiąt hektarów, czternaście i pół kilometra długości i do dziewiętnastu metrów głębokości; w latach siedemdziesiątych podpiętrzono je sztucznie o około cztery i pół metra.",
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

  districtsHeading: "Do których części Janikowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od centrum i zabudowy nad jeziorem po osiedla przy wylotach dróg. Dojeżdżam też do wszystkich dwunastu sołectw gminy.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Janikowo też przyjadę",
  nearbyParagraphs: [
    "Inowrocław, Pakość, Kruszwica, Barcin, Mogilno, Strzelno i Gniewkowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Inowrocław", "Pakość", "Kruszwica", "Barcin"],

  about: blokOMnie("do Janikowa", "w Janikowie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Janikowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwunastu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Janikowo jest miastem w gminie miejsko-wiejskiej w powiecie inowrocławskim — nie mylić z Janikowem pod Poznaniem.",
    },
    ...faqWspolne("w Janikowie"),
    {
      question: "Kiedy naprawdę trzeba dodawać po trochu, a kiedy nie?",
      answer:
        "Reguła jest jedna: stopniowo dodaje się tam, gdzie dwie rzeczy mają się połączyć w jedno — olej do sosu na zimno, gorący płyn do zawiesiny z mąki, mąka do ciasta, płyn do kremowej kaszy. Tam, gdzie składniki mają tylko obok siebie leżeć albo się ugotować — warzywa do zupy, przyprawy, woda — tempo jest obojętne i można wsypać wszystko naraz.",
    },
    {
      question: "Czy Thermomix ułatwia dolewanie w trakcie?",
      answer:
        "Tak, bo ma otwór w pokrywie i można dolewać przy pracujących ostrzach — czego przy misce i trzepaczce nie zrobisz w pojedynkę. Ale tempo i tak ustawia człowiek: za szybko wlany olej nie połączy się tam ani odrobinę lepiej niż w misce. Zmienia się tylko to, że masz wolną drugą rękę.",
    },
  ],

  geo: { lat: 52.7538, lng: 18.1133 },
};
