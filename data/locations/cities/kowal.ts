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
 * KOWAL — powiat włocławski, woj. kujawsko-pomorskie,
 * KUJAWY, 15 km na południe od Włocławka, przy węźle
 * autostrady A1.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZE OSTRZEŻENIE ADMINISTRACYJNE
 *   W CAŁYM SERWISIE — PODWÓJNA GMINA:
 *   KOWAL TO GMINA MIEJSKA obejmująca WYŁĄCZNIE MIASTO.
 *   OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA KOWAL — inna
 *   jednostka samorządowa, z siedzibą W MIEŚCIE, które
 *   do niej NIE NALEŻY.
 *   MIASTO (gmina miejska): 3 266 mieszkańców
 *   (GUS 31.12.2024), 4,7 km², gęstość 697,9 os./km².
 *   GMINA WIEJSKA KOWAL: 3 852 osoby (WIĘCEJ NIŻ MIASTO),
 *   114,9 km², 20 miejscowości, 34 os./km².
 *   ⚠⚠ ZDANIE „w gminie Kowal mieszka ponad siedem tysięcy
 *   osób" JEST NIEPRAWDZIWE. To dwie różne gminy i nie
 *   wolno ich sumować. KAŻDE ZDANIE O GMINIE MUSI MIEĆ
 *   PRZYMIOTNIK: MIEJSKA ALBO WIEJSKA.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠ ZAWYŻENIE PO STRONIE URZĘDU: strona miasta podaje
 *   „ponad 3500 osób" wobec 3 266 u GUS — co najmniej
 *   +7,2 %. UŻYWAM GUS.
 * ⚠ GEO: 52,5325 / 19,1450.
 * ⚠ ODMIANA: D. KOWALA (POTWIERDZONE W PWN, hasło
 *   oznaczone „(miasto)"), przym. KOWALSKI (PWN).
 *   Ms. W KOWALU — forma regularna, NIE POTWIERDZONA
 *   WPROST W HAŚLE PWN.
 *   ⚠⚠⚠ NIE UŻYWAM PRZYMIOTNIKA „KOWALSKI" W TEKŚCIE.
 *   Jest identyczny z przymiotnikiem od ZAWODU kowala,
 *   więc zdanie „kowalska rodzina" jest w tym mieście
 *   nierozstrzygalne. PISZĘ OPISOWO: „rodzina w Kowalu".
 *   TWARDA GRANICA.
 *   ⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — urząd używa formy
 *   „Kowalanie", ale NIE JEST ONA POTWIERDZONA SŁOWNIKOWO.
 *   ⚠⚠ ZAWSZE „KOWAL" — NIGDY „KOWALEWO POMORSKIE".
 *   To dwa różne miasta w tym samym województwie, 130 km
 *   od siebie, i oba są w tej fali. Przymiotnik
 *   od Kowalewa brzmi „kowalewski".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1185 — pierwsza wzmianka źródłowa.
 * — ⚠⚠⚠ 30 KWIETNIA 1310 — WEDŁUG JANA DŁUGOSZA urodził
 *   się w Kowalu Kazimierz III Wielki.
 *   ⚠⚠⚠ LIMIT BEZWZGLĘDNY: JEDNO ZDANIE, ZAWSZE
 *   Z ZASTRZEŻENIEM „WEDŁUG DŁUGOSZA" (kronikarz pisał
 *   150 lat po fakcie, a miejsce bywa kwestionowane)
 *   I ANI SŁOWA WIĘCEJ O ŻYCIU TEGO CZŁOWIEKA.
 *   Powód w sekcji ETYKA. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⭐⭐ LOKACJA: miasto ZAŁOŻONO NA 52 ŁANACH, na prawie
 *   magdeburskim.
 *   ⚠ ROZBIEŻNOŚĆ W OBRĘBIE JEDNEGO ŹRÓDŁA: jedna
 *   podstrona urzędu podaje lokację w 1343 r., druga
 *   „przed 1370". NIE ROZSTRZYGAM — piszę „w XIV wieku".
 *   ⚠ DATY DZIENNEJ NIE USTALONO.
 * — ⚠⚠⚠ RDZEŃ KĄTA — LATA 80. XIV W.:
 *   KOWAL OPISYWANY JAKO MIASTO MAJĄCE ZAMEK, KOŚCIÓŁ
 *   I KOMORĘ CELNĄ. Miejsce, w którym towar zatrzymywano,
 *   ZANIM WJECHAŁ — oglądano, ważono i decydowano, czy
 *   go wpuścić. Po wjeździe było już za późno.
 * — XIV w. — Kowal siedzibą kasztelanii i znaczącym
 *   ośrodkiem handlu.
 * — Początek XVII w. — ok. 1 400 mieszkańców
 *   i 240 DOMOSTW, czyli 5,8 osoby na dom.
 * — ⭐⭐ WSPÓLNOTA LEŚNA: mieszkańcy otrzymali od króla
 *   rozległe lasy, które POZOSTAJĄ W ICH POSIADANIU
 *   DO DZIŚ, przez wspólnotę leśną. Nadanie sprzed
 *   sześciuset pięćdziesięciu lat, które nadal działa.
 *   ⚠ POWIERZCHNI WSPÓLNOTY W HA NIE USTALONO.
 * — 1870 — utrata praw miejskich; LUTY 1919 — odzyskanie.
 *   ⚠⚠ BEZ POWSTANIA, KARY I REPRESJI — sam fakt prawny.
 *   ⚠ DNIA W 1919 R. NIE USTALONO.
 * — GRUDZIEŃ 2007 — otwarcie obwodnicy.
 * — Miasto podaje własny wzrost liczbą ulic (48, wcześniej
 *   31) i długością dróg (30 km, wcześniej 19 km).
 *   ⚠ BEZ ROKU ODNIESIENIA — podaję z zastrzeżeniem
 *   albo wcale.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   miejskiej Kowal ORAZ z gminy wiejskiej Kowal.
 *   Sprawdzono wszystkie dziesięć kategorii wojewódzkich.
 *   NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠⚠ KOWAL MA NAJWIĘCEJ PUŁAPEK W CAŁYM WOJEWÓDZTWIE,
 *   BO LEŻY NA KUJAWACH — a KAŻDY produkt z przymiotnikiem
 *   „kujawski" wygląda na jego. ŻADEN NIM NIE JEST.
 *   „Kujawy" to region obejmujący kilkadziesiąt gmin,
 *   a karty produktów mają zasięg REGIONALNY i nie
 *   wskazują gminy: zakwas kujawski, bułki na parze
 *   z Kujaw, szary smalec po kujawsku, kujawskie pierniki
 *   z ziemniakami, kujawskie grzybki wigilijne, kujawskie
 *   cukierki, placki z ciasta kluskowego pieczone
 *   na fajerkach, twaróg z Kujaw i Ziemi Dobrzyńskiej.
 *   ⚠⚠ DALEJ, KONKRETNE GMINY: „zupa fasolowa po kujawsku"
 *   (15.06.2023) i „ryba w zalewie po kujawsku"
 *   (29.05.2023) to BRONISŁAW W GMINIE DOBRE, powiat
 *   radziejowski; „ser kozi z Mikanowa" (24.06.2013) to
 *   gmina BĄDKOWO, powiat aleksandrowski; „masło wiejskie
 *   z Wołuszewa" to gmina ALEKSANDRÓW KUJAWSKI.
 *   NIE PRZYPISUJĘ KOWALOWI ŻADNEGO.
 *   ⚠ Kujawska Spółdzielnia Mleczarska to WŁOCŁAWEK,
 *   nie Kowal.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: CO SPRAWDZA SIĘ OSOBNO — czyli jedyne miejsce
 * w kuchni, w którym kontrola jest tania.
 * Kąt od komory celnej: w latach osiemdziesiątych XIV w.
 * Kowal opisywano jako miasto mające zamek, kościół
 * i komorę celną. Komora zatrzymywała towar ZANIM wjechał.
 * Po wjeździe nie było już czego sprawdzać — towar zniknął
 * w mieście.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że komora celna działała WYŁĄCZNIE na wejściu i że
 *   na tym polegał cały jej sens,
 * — ⚠⚠ ŻE KUCHNIA MA DOKŁADNIE JEDNO TAKIE MIEJSCE:
 *   MOMENT, W KTÓRYM SKŁADNIK PRZECHODZI Z OPAKOWANIA
 *   DO NACZYNIA Z RESZTĄ — TO JEST RDZEŃ,
 * — ⚠⚠ ŻE ZASADA BRZMI: CO SIĘ NIE DA WYJĄĆ, SPRAWDZA SIĘ
 *   OSOBNO. Jedna rzecz wrzucona do dwunastu innych
 *   przestaje być osobną rzeczą,
 * — KONKRETNIE, CO WARTO SPRAWDZAĆ OSOBNO — I DLACZEGO
 *   AKURAT TO:
 *   — jajka rozbijane do osobnej szklanki, nie nad miską
 *     z resztą,
 *   — wszystko, co dominuje smakiem i czego siła BYWA
 *     RÓŻNA: ostra papryka, ocet, skórka cytrusowa,
 *     mieszanka przypraw z nowej torebki,
 *   — bulion albo baza, która MOŻE JUŻ BYĆ SŁONA —
 *     sprawdzana ZANIM dosolisz,
 *   — zawartość słoika bez etykiety, zanim wpadnie
 *     do ciasta,
 * — ⚠⚠ UCZCIWIE O GRANICY — OBOWIĄZKOWE: TO NIE JEST
 *   WEZWANIE DO SPRAWDZANIA WSZYSTKIEGO. Rzeczy, które
 *   da się potem wyjąć albo poprawić — ziemniak, marchewka,
 *   liść laurowy — nie wymagają żadnej ceremonii.
 *   Sprawdza się WYŁĄCZNIE to, co po wrzuceniu jest
 *   nie do odzyskania,
 * — ⚠⚠⚠ ŻE TO NIE JEST TEKST O ŚWIEŻOŚCI, PRZECHOWYWANIU
 *   ANI O TYM, CO SIĘ NADAJE DO JEDZENIA — na te tematy
 *   nie wypowiadam się w ogóle. Mówię WYŁĄCZNIE o tym,
 *   żeby nie stracić całej miski przez jedną rzecz.
 *   TWARDA GRANICA BEZWZGLĘDNA,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie tej kontroli
 *   NIE WYRĘCZA i wręcz podnosi jej cenę, bo wszystko
 *   ląduje w jednym naczyniu i miesza się od razu.
 *   Nie ma etapu, na którym dałoby się coś wyłowić.
 *   Pięć sekund przed wrzuceniem jest warte więcej
 *   niż przy gotowaniu w trzech garnkach.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO PRZYGOTOWANIA PRZED GOTOWANIEM — to kąt
 *   Jabłonowa Pomorskiego z tej samej fali. Tam chodzi
 *   o STAN BLATU I GOTOWOŚĆ; TUTAJ o JAKOŚĆ I SIŁĘ
 *   TEGO, CO WRZUCASZ. Odsyłam tam wprost jednym zdaniem.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO SKŁADNIKÓW, KTÓRE ŁATWO POMYLIĆ W SKLEPIE —
 *   kąt zajęty (Zalewo). Słoik bez etykiety to jedno
 *   zdanie o WŁASNEJ KUCHNI, nie o półce w sklepie.
 * — ⚠⚠ ZERO PANIEROWANIA I TRZECH MISEK — kąt zajęty
 *   (Hel). Jajko pojawia się WYŁĄCZNIE jako przykład
 *   rzeczy sprawdzanej osobno.
 * — ⚠⚠ ZERO RÓWNOWAGI SMAKÓW I RATOWANIA PRZESOLONEGO —
 *   kąt zajęty (Suchowola). Piszę o SPRAWDZANIU PRZED,
 *   nie o naprawianiu po.
 * — ⚠ ZERO CO ROBIĆ, GDY SIĘ ZEPSUJE — kąt zajęty (Mława),
 *   i tam chodzi o SPRZĘT.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI,
 *   ŚWIEŻOŚCI, PSUCIU SIĘ, TERMINACH I PRZECHOWYWANIU.
 *   NA TEJ STRONIE JEST TO NAJWIĘKSZE RYZYKO, BO TEMAT
 *   SAM SIĘ PROSI. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ KAZIMIERZ WIELKI TO PUŁAPKA TEGO MIASTA.
 *   Kowal opiera całą tożsamość na jednym człowieku,
 *   a jego biografia prowadzi PROSTO w pięć zakazanych
 *   tematów naraz: śmierć duchownego z rozkazu króla,
 *   konflikt z Kościołem i ekskomunikę, bigamię,
 *   wątek żydowski w dwóch osobnych postaciach oraz
 *   śmierć króla po wypadku. WOLNO NAPISAĆ JEDNO ZDANIE:
 *   że WEDŁUG DŁUGOSZA urodził się tu 30 kwietnia 1310 r.
 *   I NIC WIĘCEJ. Tekst opieram na LOKACJI NA 52 ŁANACH
 *   I NA KOMORZE CELNEJ, nie na osobie króla.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z LAT 1939–1940. Hasło
 *   en.wikipedia mówi wprost o egzekucjach i o wysiedleniach
 *   do obozu przejściowego. ŻADNYCH SŁÓW „egzekucja",
 *   „okupacja", „obóz". TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO OŚMIU PIESZYCH ZBROJNYCH, których miasto
 *   miało wystawiać — wątek zbrojny.
 * — ⚠⚠ ZERO POWODU UTRATY PRAW MIEJSKICH W 1870 R.
 * — ⚠⚠ ZERO UZDROWISKA WIENIEC-ZDRÓJ (sąsiednia gmina) —
 *   twierdzenia zdrowotne.
 * — ⚠ ZERO POMNIKA KRÓLA Z 2010 R. — nie przywołuję
 *   osoby króla poza tym jednym dozwolonym zdaniem.
 * — ZERO kościoła i zamku jako wątków innych niż
 *   wyliczenie z opisu miasta.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info, infodlapolaka.pl,
 *   gminya1.pl, nonsa.pl.
 * — ZERO bezrobocia, salda migracji i przyrostu naturalnego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „KILOMETR ZEROWY" (Jabłonowo Pomorskie, ta sama fala)
 *   dotyczy TEGO, CZY WSZYSTKO JEST WYJĘTE I ODMIERZONE.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ nie ma ani słowa
 *   o gotowości blatu — jest wyłącznie PYTANIE, CZY TO,
 *   CO WRZUCASZ, JEST TYM, CZYM MYŚLISZ, ŻE JEST.
 *   Odsyłam tam wprost.
 * — „SKŁADNIKI, KTÓRE ŁATWO POMYLIĆ W SKLEPIE" (Zalewo)
 *   dotyczy PÓŁKI SKLEPOWEJ.
 * — „RÓWNOWAGA SMAKÓW" (Suchowola) dotyczy NAPRAWIANIA PO.
 * — „PANIERKA" (Hel) dotyczy TRZECH MISEK.
 * TUTAJ chodzi o JEDEN MOMENT — PRZEJŚCIE SKŁADNIKA
 * DO WSPÓLNEGO NACZYNIA — I O TO, ŻE PO NIM KONTROLA
 * PRZESTAJE ISTNIEĆ.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SUMUJĘ gminy miejskiej i gminy wiejskiej Kowal.
 * — NIE PISZĘ „gmina Kowal" bez przymiotnika.
 * — NIE UŻYWAM przymiotnika „kowalski" jako określenia
 *   miasta.
 * — NIE ROZSTRZYGAM daty lokacji (1343 czy przed 1370).
 * — NIE TWIERDZĘ, że Kazimierz Wielki urodził się
 *   w Kowalu — piszę „według Długosza".
 * — NIE PODAJĘ powierzchni wspólnoty leśnej.
 * — NIE PODAJĘ dnia odzyskania praw miejskich.
 * — NIE PRZYPISUJĘ Kowalowi żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 * — NIE WYPOWIADAM SIĘ o świeżości, przechowywaniu
 *   i przydatności produktów do spożycia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kowal leży na Kujawach, w powiecie włocławskim,
 *   piętnaście kilometrów na południe od Włocławka,
 *   przy węźle autostrady A1; jest gminą miejską
 *   obejmującą wyłącznie miasto i liczy 3 266 mieszkańców
 *   (GUS, 31.12.2024) na 4,7 km²; osobna gmina wiejska
 *   Kowal to kolejne 3 852 osoby w dwudziestu
 *   miejscowościach na 114,9 km²,
 * — pierwsza wzmianka o Kowalu pochodzi z 1185 roku,
 * — według Jana Długosza 30 kwietnia 1310 roku urodził się
 *   tu Kazimierz III Wielki,
 * — w XIV wieku miasto lokowano na prawie magdeburskim
 *   i założono je na pięćdziesięciu dwóch łanach,
 * — w latach osiemdziesiątych XIV wieku Kowal opisywano
 *   jako miasto mające zamek, kościół i komorę celną,
 *   a samo miasto było siedzibą kasztelanii i znaczącym
 *   ośrodkiem handlu,
 * — na początku XVII wieku mieszkało tu około tysiąca
 *   czterystu osób w dwustu czterdziestu domostwach,
 * — mieszkańcy otrzymali od króla rozległe lasy, które
 *   do dziś pozostają w ich posiadaniu przez wspólnotę
 *   leśną,
 * — prawa miejskie Kowal utracił w 1870 roku i odzyskał
 *   je w lutym 1919,
 * — w grudniu 2007 roku otwarto obwodnicę miasta.
 */
export const KOWAL: CityContent = {
  slug: "kowal",
  h1: "Thermomix Kowal – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kowal — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kowalu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kowal — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kowalu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kowala z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w okolicy.",

  highlights: highlightyStandardowe("Kowal"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Co się nie da wyjąć, sprawdza się osobno. Reszta nie wymaga ceremonii.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kowalu – jak wygląda prezentacja?",
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
      id: "komora-celna",
      heading: "Komora celna",
      paragraphs: [
        "W latach osiemdziesiątych XIV wieku Kowal opisywano jako miasto mające zamek, kościół i komorę celną. Ta trzecia jest w tym zestawieniu najciekawsza, bo mówi o tym, jak miasto pracowało.",
        "Komora celna zatrzymywała towar, zanim wjechał. Oglądano go, ważono i decydowano, czy w ogóle wpuścić. Po wjeździe nie było już czego sprawdzać — towar znikał w mieście, w czyimś spichlerzu, wśród innych.",
        "Kuchnia ma dokładnie jedno takie miejsce i większość z nas go nie obsadza: moment, w którym składnik przechodzi z opakowania do naczynia z resztą.",
        "Zasada jest jednozdaniowa: co się nie da wyjąć, sprawdza się osobno. Jedna rzecz wrzucona do dwunastu innych przestaje być osobną rzeczą i od tej chwili albo całe danie jest dobre, albo całe jest nie takie.",
        "Stąd bierze się nawyk, który wygląda na fanaberię, a nią nie jest: jajka rozbija się do osobnej szklanki, a nie nad miską z resztą. Nie dlatego, że się komuś nie ufa — dlatego, że jajka z miski pełnej ubitych białek już nie wyjmiesz.",
        "Tak samo warto traktować wszystko, co dominuje smakiem i czego siła bywa różna. Ostra papryka z nowej torebki potrafi być dwa razy mocniejsza niż z poprzedniej. Ocet bywa łagodny albo bezczelny. Skórka z cytryny czasem gorzknieje. Mieszanka przypraw z nieznanego słoika może mieć w środku dowolne proporcje. Jedno liźnięcie przed wrzuceniem kosztuje pięć sekund.",
        "Osobna sprawa to bulion albo gotowa baza, która może już być słona. Sprawdza się ją, zanim się dosoli — nie po. To najczęstsza przyczyna przesolonych zup, jakie widzę.",
        "I tu ważna granica, bo nie chcę nikomu zafundować kuchni pełnej ceremonii. To nie jest wezwanie do sprawdzania wszystkiego. Ziemniak, marchewka, liść laurowy — te rzeczy da się potem wyjąć albo poprawić i nie wymagają żadnej procedury. Sprawdza się wyłącznie to, co po wrzuceniu jest nie do odzyskania.",
        "Powiem też jasno, o czym ten tekst nie jest: nie o świeżości, nie o przechowywaniu i nie o tym, co się nadaje do jedzenia. Na te tematy się nie wypowiadam. Tu chodzi wyłącznie o to, żeby nie stracić całej miski przez jedną rzecz.",
        "O tym, żeby wszystko było wyjęte i odmierzone, zanim zaczniesz, pisałam osobno przy innym mieście — to inna decyzja niż ta tutaj.",
        "Uczciwie o sprzęcie, bo akurat tu nie ma dobrej wiadomości. Urządzenie tej kontroli nie wyręcza i szczerze mówiąc podnosi jej cenę: wszystko ląduje w jednym naczyniu i miesza się od razu, więc nie ma etapu, na którym dałoby się coś wyłowić. Te pięć sekund przed wrzuceniem jest tu warte więcej niż przy gotowaniu w trzech garnkach.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kowalu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy zdarzyło Wam się wylać całe danie przez jeden składnik — ugotujemy coś, przy czym to ryzyko jest największe, i pokażę, gdzie dokładnie się je zatrzymuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kowalu"),
    sekcjaRaty("w Kowalu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny w Kowalu",
      paragraphs: [
        "Kowal leży na Kujawach, w powiecie włocławskim, piętnaście kilometrów na południe od Włocławka i przy węźle autostrady A1. Jest gminą miejską obejmującą wyłącznie miasto i liczy ponad trzy tysiące dwieście mieszkańców na czterech i siedmiu dziesiątych kilometra kwadratowego; obok istnieje odrębna gmina wiejska o tej samej nazwie, licząca kolejne blisko cztery tysiące osób w dwudziestu miejscowościach — to dwie różne jednostki i nie sumuje się ich. Pierwsza wzmianka o Kowalu pochodzi z 1185 roku, a według Jana Długosza 30 kwietnia 1310 roku urodził się tu Kazimierz III Wielki. W XIV wieku miasto lokowano na prawie magdeburskim i założono je na pięćdziesięciu dwóch łanach; w latach osiemdziesiątych tego stulecia opisywano je jako miasto mające zamek, kościół i komorę celną, a samo było siedzibą kasztelanii i znaczącym ośrodkiem handlu. Na początku XVII wieku mieszkało tu około tysiąca czterystu osób w dwustu czterdziestu domostwach. Mieszkańcy otrzymali od króla rozległe lasy, które do dziś pozostają w ich posiadaniu przez wspólnotę leśną — nadanie sprzed sześciuset pięćdziesięciu lat, które nadal działa. Prawa miejskie miasto utraciło w 1870 roku i odzyskało w lutym 1919, a w grudniu 2007 otwarto obwodnicę.",
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

  districtsHeading: "Do których części Kowala dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — ma niecałe pięć kilometrów kwadratowych, więc wszędzie jest blisko. Dojeżdżam też do wszystkich dwudziestu miejscowości w sąsiedniej gminie wiejskiej Kowal, która jest osobną jednostką, ale leży tuż obok.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kowal też przyjadę",
  nearbyParagraphs: [
    "Włocławek, Brześć Kujawski, Lipno, Kutno i Gostynin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Włocławek", "Brześć Kujawski", "Lipno", "Kutno"],

  about: blokOMnie("do Kowala", "w Kowalu", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kowala bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Kowal jest gminą miejską obejmującą wyłącznie miasto, a obok istnieje odrębna gmina wiejska o tej samej nazwie — przyjeżdżam i tu, i tam. I nie należy mylić Kowala z Kowalewem Pomorskim, które leży sto trzydzieści kilometrów dalej.",
    },
    ...faqWspolne("w Kowalu"),
    {
      question: "Które składniki naprawdę warto sprawdzać przed wrzuceniem?",
      answer:
        "Wyłącznie te, których potem nie da się wyjąć ani poprawić. Jajka — stąd stary nawyk rozbijania do osobnej szklanki. Wszystko, co dominuje smakiem i czego siła bywa różna: ostra papryka z nowej torebki, ocet, skórka cytrusowa, nieznana mieszanka przypraw. I bulion albo gotowa baza, która może już być słona — sprawdzana zanim dosolisz, nie po. Ziemniaka czy liścia laurowego nie trzeba sprawdzać, bo je po prostu wyjmiesz.",
    },
    {
      question: "Czy przy Thermomixie to ma większe znaczenie?",
      answer:
        "Trochę tak, i wolę to powiedzieć wprost. Wszystko trafia do jednego naczynia i miesza się od razu, więc nie ma etapu, na którym dałoby się coś wyłowić. Urządzenie nie sprawdzi za Ciebie tego, co wrzucasz — te pięć sekund przed wrzuceniem jest tu warte więcej niż przy gotowaniu w trzech garnkach.",
    },
  ],

  geo: { lat: 52.5325, lng: 19.145 },
};
