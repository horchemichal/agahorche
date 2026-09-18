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
 * KRUSZWICA — powiat inowrocławski, woj. kujawsko-pomorskie,
 * KUJAWY, nad jeziorem GOPŁO.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 9 026 mieszkańców (GUS 31.12.2024), 10,2 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 17 692 osoby, 262,5 km²,
 * 72 miejscowości.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ KRUSZWICA.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ ROZBIEŻNOŚĆ POWIERZCHNI: en.wikipedia podaje 6,64 km²,
 *   GUS 10,2 km². UŻYWAM GUS. Różnica 54%.
 * ⚠ ODMIANA: D. KRUSZWICY, Ms. W KRUSZWICY,
 *   przym. KRUSZWICKI, mieszkaniec KRUSZWICZANIN /
 *   KRUSZWICZANKA — POŚWIADCZONE W SJP PWN.
 * ⚠ NAZWA UNIKATOWA — nie ma drugiej Kruszwicy.
 *   NIE MYLIĆ z gminą KRUSZYNA (śląskie).
 *
 * HISTORIA — FAKTY UŻYTE:
 * — DWIE LOKACJE: pierwsza pod koniec XIII w. (Władysław
 *   Łokietek), druga w 1422 r. (Władysław Jagiełło, prawo
 *   magdeburskie). ⚠ DAT DZIENNYCH NIE USTALONO.
 * — ⚠⚠ RDZEŃ KĄTA — RZEMIOSŁO WCZESNOŚREDNIOWIECZNE:
 *   „wiodącą gałęzią gospodarki było HUTNICTWO SZKŁA
 *   I WYTWARZANIE SZKLIWIONEJ CERAMIKI" (koniec XI w.).
 *   Monografia IAE PAN „Kruszwica wczesnośredniowieczna"
 *   wydziela osobne rozdziały o pracowniach: ceramiki
 *   budowlanej, kowalstwie, obróbce drewna, skórnictwie,
 *   SZKLARSTWIE i jubilerstwie.
 *   ⚠ KONKRETNYCH LICZB ZNALEZISK NIE USTALONO.
 * — MYSIA WIEŻA: 32 m wysokości, OŚMIOBOCZNA, z czerwonej
 *   cegły, ok. 1350 r., fundacja Kazimierza Wielkiego;
 *   109 STOPNI, sześć kondygnacji, wejście na wysokości
 *   10 m. Mur zamku: 11 m wysokości, 2,4 m grubości.
 *   ⚠⚠ ZERO LEGENDY O POPIELU — patrz etyka. BEZWZGLĘDNIE.
 *   ⚠⚠ ZERO KUL ARMATNICH W MURACH.
 * — KOLEGIATA ROMAŃSKA: budowa 1120–1140, GRANIT
 *   I PIASKOWIEC, przy czym piaskowiec sprowadzono
 *   prawdopodobnie DROGĄ WODNĄ; PIĘĆ ABSYD O RÓŻNEJ
 *   WIELKOŚCI; posadzkę podwyższono w XIX w. o 45 cm.
 *   ⚠ OPISUJĘ WYŁĄCZNIE JAKO ARCHITEKTURĘ I MATERIAŁ.
 * — GOPŁO: powierzchnia 2 154,5 ha, linia brzegowa ok. 91 km,
 *   najszersze miejsce 2,5 km, ⚠ NAJWĘŻSZE OK. 50 M —
 *   przy moście W SAMEJ KRUSZWICY; głębokość średnia 3,6 m,
 *   maksymalna 16,6 m; 11. co do wielkości jezioro w Polsce.
 * — KOLEJKA WĄSKOTOROWA O ROZSTAWIE 716 MM — przy sąsiedniej
 *   linii 600 mm i późniejszym standardzie 750 mm.
 *   ⚠⚠ ZERO KONTEKSTU BUDOWY (wojenny). Podaję WYŁĄCZNIE
 *   samą liczbę jako ciekawostkę o niezgodnych miarach.
 * — 1889 — linia kolejowa normalnotorowa.
 * — ZAKŁADY PRZEMYSŁU TŁUSZCZOWEGO: decyzja 1949, budowa
 *   1952–1956, otwarcie 1956; do 1963 dobudowano rafinerię,
 *   margarynownię i utwardzalnię z własnym wydziałem
 *   elektrolizerni do produkcji wodoru. Elewator 42 m.
 *   Zakład działa do dziś.
 *   ⚠⚠ ZERO NAZW FIRM I MAREK. ⚠ ZERO TWIERDZEŃ
 *   ZDROWOTNYCH O OLEJACH I MARGARYNIE.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Kruszwica.
 *   ⚠⚠ PUŁAPKA ROZBROJONA: „marmolada z buraków cukrowych"
 *   (wpis 20.05.2019) pochodzi z BRONISŁAWIA W GMINIE DOBRE,
 *   powiat radziejowski — NIE z Kruszwicy. Kruszwica figuruje
 *   w karcie tylko jako część szerszego obszaru występowania.
 *   NIE PRZYPISUJĘ. TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: SZKLIWO — dlaczego naczynie musi być gładkie.
 * Kąt od rzemiosła z końca XI w.: Kruszwica żyła z hutnictwa
 * szkła i ze szkliwionej ceramiki. Szkliwo to szkło przetopione
 * na glinie — cienka warstwa, dzięki której naczynie przestaje
 * pić wodę i oddawać smak poprzedniej potrawy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pod koniec XI wieku wiodącą gałęzią gospodarki
 *   Kruszwicy było hutnictwo szkła i wytwarzanie szkliwionej
 *   ceramiki, a monografia archeologiczna wydziela tu osobne
 *   pracownie szklarskie obok kowalskich i skórniczych,
 * — ŻE SZKLIWO TO PO PROSTU SZKŁO PRZETOPIONE NA GLINIE —
 *   cienka warstwa, która zamyka pory,
 * — ⚠⚠ ŻE NACZYNIE NIESZKLIWIONE JEST GĄBKĄ — TO JEST RDZEŃ:
 *   glina bez szkliwa pije wodę, a razem z wodą bierze
 *   w siebie tłuszcz, kwas i zapach tego, co się w niej
 *   gotowało,
 * — CO TO ZNACZY DZIŚ, KONKRETNIE:
 *   — GLINIANE NACZYNIA I DONICE do pieczenia bywają
 *     celowo nieszkliwione, bo mają nasiąkać wodą i oddawać
 *     ją w piekarniku — to nie wada, tylko cały ich sens,
 *   — ALE TO SAMO SPRAWIA, ŻE PRZEJMUJĄ ZAPACH i że
 *     czosnek z zeszłego tygodnia bywa wyczuwalny
 *     w następnym daniu,
 *   — DREWNIANA ŁYŻKA I DESKA DZIAŁAJĄ TAK SAMO — są
 *     porowate ⚠ ODSYŁAM DO STRONY O DREWNIE, NIE ROZWIJAM,
 *   — PLASTIK RYSUJE SIĘ, a każda rysa to nowy por,
 *   — SZKŁO, STAL I PORCELANA niczego nie wchłaniają
 *     i dlatego nie przenoszą smaku między daniami,
 * — ⚠ ŻE TO NIE JEST TO SAMO CO PRZYWIERANIE: tam chodzi
 *   o to, co zostaje NA dnie, tutaj o to, co wsiąka W ścianę
 *   ⚠ ODSYŁAM DO STRONY O DNIE NACZYNIA — ROZGRANICZENIE
 *   OBOWIĄZKOWE,
 * — ⚠ UCZCIWIE O SPRZĘCIE: naczynie Thermomixa jest ze stali
 *   nierdzewnej, więc nie wchłania nic — po umyciu jest
 *   naprawdę czyste i nie przenosi smaku z zupy czosnkowej
 *   do ciasta. ALE USZCZELKA POKRYWY I KOSZYCZEK SĄ Z INNEGO
 *   MATERIAŁU i to one potrafią zatrzymać zapach; uszczelkę
 *   się wyjmuje i myje osobno. To jest ta jedna rzecz,
 *   o której nikt nie mówi na pokazie, a ja mówię.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LEGENDY O POPIELU I O MYSZACH. BEZWZGLĘDNIE.
 * — ⚠⚠ ZERO SOLI I WARZENIA SOLI — kąt zajęty (Ciechocinek).
 *   Solanki nad Gopłem NIE WYMIENIAM w ogóle.
 * — ⚠⚠ ZERO DREWNA JAKO MATERIAŁU — kąt zajęty (Czersk).
 *   Drewno pojawia się w JEDNYM zdaniu z odesłaniem.
 * — ⚠ ZERO PRZYWIERANIA I PRZYPALANIA — kąt zajęty
 *   (Dobre Miasto). Odsyłam i rozgraniczam.
 * — ⚠ ZERO ZAPACHU W MIESZKANIU — kąt zajęty (Białystok).
 *   Tu chodzi o zapach W ŚCIANIE NACZYNIA, nie w powietrzu.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO LEGENDY O POPIELU. Wypływa jako PIERWSZY
 *   wynik przy każdym zapytaniu o Kruszwicę, a jej treścią
 *   jest zjedzenie człowieka żywcem. Sama wieża jako obiekt
 *   jest bezpieczna. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO CUKROWNI. Działała od 1881 r. i ZOSTAŁA
 *   ZAMKNIĘTA W 2015 R. po 134 latach — upadły zakład
 *   z pokrzywdzonymi ludźmi. Do tego kąt cukrownictwa jest
 *   zajęty (Chełmża). TWARDA GRANICA.
 * — ⚠⚠ ZERO SZWEDÓW 1657, ZERO POŻARÓW 1519 I 1591,
 *   ZERO SPALENIA GRODU 1271, ZERO KUL W MURACH.
 * — ZERO biskupstwa kujawskiego i wątków wyznaniowych.
 * — ZERO nazw firm i własności zagranicznej zakładu
 *   tłuszczowego.
 * — ZERO kontekstu wojennego przy kolejce wąskotorowej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „DNO NACZYNIA — PRZYWIERANIE I PRZYPALANIE"
 *   (Dobre Miasto) dotyczy TEGO, CO ZOSTAJE NA DNIE.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi o to,
 *   co WSIĄKA W ŚCIANĘ. Odsyłam tam wprost.
 * — „DREWNO W KUCHNI" (Czersk) dotyczy DREWNA.
 * — „ZAPACH I PARA W MIESZKANIU" (Białystok) dotyczy
 *   POWIETRZA W KUCHNI.
 * — „ŚCIĘTY NAROŻNIK" (Szubin) dotyczy KSZTAŁTU NACZYNIA.
 * TUTAJ chodzi o MATERIAŁ ŚCIANY NACZYNIA I O TO,
 * CZY ON COŚ WCHŁANIA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ powierzchni 6,64 km² — to błąd źródła.
 * — NIE PRZYPISUJĘ Kruszwicy marmolady z buraków.
 * — NIE PRZYWOŁUJĘ legendy o Popielu ani jednym słowem.
 * — NIE PISZĘ o cukrowni.
 * — NIE PODAJĘ nazw firm.
 * — NIE ORZEKAM niczego o zdrowiu olejów.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kruszwica leży na Kujawach nad Gopłem, jest miastem
 *   w gminie miejsko-wiejskiej i liczy 9 026 mieszkańców
 *   (GUS, 31.12.2024) na 10,2 km²; cała gmina ma 17 692
 *   osoby w 72 miejscowościach na 262,5 km²,
 * — miasto lokowano dwukrotnie: pod koniec XIII wieku
 *   i ponownie w 1422 roku, na prawie magdeburskim,
 * — pod koniec XI wieku wiodącą gałęzią tutejszej gospodarki
 *   było hutnictwo szkła i wytwarzanie szkliwionej ceramiki;
 *   monografia archeologiczna wydziela osobne pracownie
 *   szklarskie, kowalskie, skórnicze i jubilerskie,
 * — Mysia Wieża ma 32 metry wysokości, jest ośmioboczna,
 *   zbudowana z czerwonej cegły około 1350 roku z fundacji
 *   Kazimierza Wielkiego; na górę prowadzi 109 stopni,
 *   a wieża ma sześć kondygnacji,
 * — kolegiatę budowano w latach 1120–1140 z granitu
 *   i piaskowca, przy czym piaskowiec sprowadzono
 *   prawdopodobnie drogą wodną; ma pięć absyd o różnej
 *   wielkości, a jej posadzkę podwyższono w XIX wieku
 *   o czterdzieści pięć centymetrów,
 * — Gopło ma 2 154,5 hektara powierzchni i około
 *   dziewięćdziesięciu jeden kilometrów linii brzegowej;
 *   w najszerszym miejscu ma dwa i pół kilometra, a w
 *   najwęższym — w samej Kruszwicy — około pięćdziesięciu
 *   metrów; średnia głębokość to 3,6 metra,
 * — tutejsza kolejka wąskotorowa miała rozstaw szyn
 *   716 milimetrów, podczas gdy sąsiednia linia 600,
 *   a późniejszy standard 750; normalnotorowa linia kolejowa
 *   powstała w 1889 roku,
 * — zakłady przemysłu tłuszczowego otwarto w 1956 roku;
 *   do 1963 dobudowano do nich rafinerię, margarynownię
 *   i utwardzalnię z własnym wydziałem produkcji wodoru,
 *   a stojący na terenie elewator ma czterdzieści dwa metry.
 */
export const KRUSZWICA: CityContent = {
  slug: "kruszwica",
  h1: "Thermomix Kruszwica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kruszwica — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kruszwicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kruszwica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kruszwicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kruszwicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Kruszwica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Glina bez szkliwa jest gąbką. Bierze w siebie wodę, tłuszcz i zapach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kruszwicy – jak wygląda prezentacja?",
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
      id: "szkliwo",
      heading: "Szkło przetopione na glinie",
      paragraphs: [
        "Pod koniec jedenastego wieku Kruszwica żyła z rzeczy, której nikt by się tu nie spodziewał: z hutnictwa szkła i z wytwarzania szkliwionej ceramiki. To była wiodąca gałąź tutejszej gospodarki, a monografia archeologiczna miasta wydziela osobne pracownie szklarskie — obok kowalskich, skórniczych i jubilerskich.",
        "Szkliwo brzmi jak coś wyszukanego, a jest rzeczą całkiem prostą: to szkło przetopione na glinie. Cienka warstwa, która zamyka pory.",
        "I dopiero to pokazuje, co jest z naczyniem bez szkliwa. Ono jest gąbką.",
        "Glina bez szkliwa pije wodę — a razem z wodą bierze w siebie tłuszcz, kwas i zapach tego, co się w niej gotowało. Nie na powierzchni. W ścianie.",
        "Co ciekawe, czasem właśnie o to chodzi. Gliniane naczynia i donice do pieczenia bywają celowo nieszkliwione, bo mają nasiąknąć wodą przed włożeniem do piekarnika i oddawać ją w trakcie. To nie jest wada wykonania, tylko cały ich sens — takie naczynie nawilża potrawę zamiast ją wysuszać.",
        "Tyle że ta sama cecha ma drugą stronę. Naczynie, które umie coś przyjąć, umie też to oddać — i czosnek sprzed tygodnia potrafi być wyczuwalny w następnym daniu. Drewniana łyżka i deska zachowują się tak samo, bo też są porowate; pisałam o drewnie osobno przy innym mieście. Plastik z kolei rysuje się przy każdym myciu, a każda rysa to nowy por.",
        "Szkło, stal i porcelana nie wchłaniają niczego. Dlatego niczego nie przenoszą.",
        "I od razu rozgraniczenie, bo to bywa mylone: to nie jest to samo co przywieranie. Przywieranie i przypalanie dotyczą tego, co zostaje NA dnie i co się z niego zeskrobuje — pisałam o tym osobno. Tu chodzi o coś, czego nie widać: o to, co wsiąka W ścianę i zostaje tam po umyciu.",
        "Uczciwie o sprzęcie, bo jest tu jedna rzecz, o której na pokazach się nie mówi. Naczynie Thermomixa jest ze stali nierdzewnej, więc nie wchłania nic — po umyciu jest naprawdę czyste i nie przeniesie smaku zupy czosnkowej do ciasta. To jest realna zaleta i wynika po prostu z materiału.",
        "Ale uszczelka pokrywy i koszyczek są z czegoś innego i to one potrafią zatrzymać zapach. Uszczelkę się wyjmuje i myje osobno — i dobrze o tym wiedzieć zawczasu, a nie odkrywać przy cieście waniliowym, które pachnie cebulą.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje Thermomixa" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kruszwicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, pokażę na spotkaniu, co się wyjmuje i myje osobno — to zajmuje chwilę, a oszczędza sporo późniejszego zdziwienia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kruszwicy"),
    sekcjaRaty("w Kruszwicy"),
    {
      id: "rodzina",
      heading: "Thermomix dla kruszwickiej rodziny",
      paragraphs: [
        "Kruszwica leży na Kujawach nad Gopłem, jest miastem w gminie miejsko-wiejskiej i liczy ponad dziewięć tysięcy mieszkańców na dziesięciu kilometrach kwadratowych; cała gmina ma blisko osiemnaście tysięcy osób w siedemdziesięciu dwóch miejscowościach. Miasto lokowano dwukrotnie — pod koniec XIII wieku i ponownie w 1422 roku, na prawie magdeburskim. Pod koniec XI wieku wiodącą gałęzią tutejszej gospodarki było hutnictwo szkła i wytwarzanie szkliwionej ceramiki. Mysia Wieża ma trzydzieści dwa metry wysokości, jest ośmioboczna i zbudowana z czerwonej cegły około 1350 roku z fundacji Kazimierza Wielkiego; na górę prowadzi sto dziewięć stopni. Kolegiatę budowano w latach 1120–1140 z granitu i piaskowca sprowadzonego prawdopodobnie drogą wodną, ma pięć absyd o różnej wielkości, a jej posadzkę podwyższono w XIX wieku o czterdzieści pięć centymetrów. Gopło ma ponad dwa tysiące hektarów i około dziewięćdziesięciu jeden kilometrów linii brzegowej — w najszerszym miejscu dwa i pół kilometra, a w najwęższym, w samej Kruszwicy, około pięćdziesięciu metrów. Tutejsza kolejka wąskotorowa miała rozstaw szyn siedmiuset szesnastu milimetrów, podczas gdy sąsiednia linia sześciuset. Zakłady przemysłu tłuszczowego otwarto w 1956 roku, a stojący na ich terenie elewator ma czterdzieści dwa metry.",
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

  districtsHeading: "Do których części Kruszwicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic kolegiaty i wieży po zabudowę wzdłuż jeziora i osiedla przy wylotach dróg. Dojeżdżam też do wsi w gminie, a jest ich siedemdziesiąt kilka.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kruszwicę też przyjadę",
  nearbyParagraphs: [
    "Inowrocław, Strzelno, Janikowo, Radziejów, Piotrków Kujawski, Mogilno i Pakość są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Inowrocław", "Strzelno", "Janikowo", "Radziejów"],

  about: blokOMnie("do Kruszwicy", "w Kruszwicy", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kruszwicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Kruszwica jest miastem w gminie miejsko-wiejskiej, a gmina liczy siedemdziesiąt kilka miejscowości — przyjeżdżam wszędzie na tych samych zasadach.",
    },
    ...faqWspolne("w Kruszwicy"),
    {
      question: "Dlaczego gliniane naczynie przenosi zapach poprzedniej potrawy?",
      answer:
        "Bo glina bez szkliwa jest porowata i pije wodę, a razem z wodą bierze w siebie tłuszcz, kwas i zapach — nie na powierzchni, tylko w ścianie. Szkliwo to szkło przetopione na glinie, które te pory zamyka. Tak samo zachowują się drewniana łyżka i deska, a plastik rysuje się przy myciu i każda rysa to nowy por. Szkło, stal i porcelana nie wchłaniają niczego.",
    },
    {
      question: "Czy naczynie Thermomixa przejmuje zapachy?",
      answer:
        "Samo naczynie nie — jest ze stali nierdzewnej, więc po umyciu jest naprawdę czyste i nie przeniesie smaku zupy czosnkowej do ciasta. Ale uszczelka pokrywy i koszyczek są z innego materiału i to one potrafią zatrzymać zapach. Uszczelkę się wyjmuje i myje osobno — warto wiedzieć o tym od początku.",
    },
  ],

  geo: { lat: 52.6743, lng: 18.3316 },
};
