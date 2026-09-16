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
 * LUBIEŃ KUJAWSKI — powiat włocławski,
 * woj. kujawsko-pomorskie, KUJAWY.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 305 mieszkańców (GUS 31.12.2024) —
 * NAJMNIEJSZE MIASTO Z TEJ FALI, 2,3 km²,
 * gęstość 564,9 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 6 706 osób, 150,9 km²,
 * 45 os./km², 28 SOŁECTW i 58 WSI.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ LUBIEŃ KUJAWSKI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ ZAWYŻENIE PO STRONIE BIP URZĘDU: „8,6 tys. osób"
 *   wobec 6 706 u GUS — ZAWYŻENIE O 28,2 %.
 *   To jeden z dwóch najostrzejszych przypadków w fali
 *   i, co ciekawe, drugi (Chodecz, +28,1 %) leży
 *   w TYM SAMYM POWIECIE WŁOCŁAWSKIM. Powierzchnia
 *   podawana przez BIP (150 km²) jest zgodna.
 *   UŻYWAM GUS.
 * ⚠ en.wikipedia podaje 1 298 (2010) — przypadkowo
 *   bliskie dzisiejszym 1 305, bo spadek 2002–2024
 *   wyniósł tu tylko 4,1 %, najmniej z całej fali.
 *   Szereg historyczny z tego samego źródła JEST
 *   UŻYTECZNY: 1860 — 1 095 osób; 1931 — 2 241.
 * ⚠ GEO: 52,4047 / 19,1647.
 *   ⚠ Ta sama szerokość geograficzna co Chodecz —
 *   oba miasta leżą niemal na jednym równoleżniku,
 *   ok. 10 km od siebie. To zbieg okoliczności,
 *   nie błąd kopiowania.
 * ⚠ ODMIANA: D. LUBIENIA KUJAWSKIEGO,
 *   Ms. W LUBIENIU KUJAWSKIM, przym. LUBIEŃSKI.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — hasła nie ma w słowniku;
 *   formy poparte uzusem (nazwa parafii, tytuły stron
 *   statystycznych).
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 * ⚠⚠⚠ RYZYKO POMYLENIA NAJGROŹNIEJSZE:
 *   LUBRANIEC to INNE MIASTO W TYM SAMYM POWIECIE
 *   WŁOCŁAWSKIM (ok. 2,7 tys. mieszkańców). Obie nazwy
 *   zaczynają się od „Lub-", obie są gminami
 *   miejsko-wiejskimi tego samego powiatu.
 *   POMYŁKA NIE WYGLĄDA NA POMYŁKĘ. ZAWSZE PEŁNA NAZWA.
 *   ⚠⚠ LUBIEŃ w małopolskim (pow. myślenicki, przy
 *   zakopiance) dominuje w wynikach przy haśle samego
 *   „Lubień".
 *   ⚠ JEZIORO LUBIEŃSKIE to akwen przy mieście, nie
 *   miejscowość. RÓD LUBIEŃSKICH wziął nazwisko właśnie
 *   od Lubienia — wyszukiwanie „Lubieński" prowadzi
 *   do biografii rodu, nie do miasta.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1399 — najstarszy zapis o osadzie Lubień.
 * — przed 1489 — nadanie statusu miasta.
 *   ⚠⚠ ŹRÓDŁA ROZBIEŻNE: „przed 1489", „1489" albo 1566.
 *   NIE ROZSTRZYGAM — piszę „pod koniec XV wieku".
 * — 1539 — przywilej na jarmarki i targi.
 *   ⚠⚠ ŹRÓDŁO PRZYPISUJE GO ZYGMUNTOWI AUGUSTOWI,
 *   ale w 1539 r. panował Zygmunt I Stary. PODAJĘ ROK
 *   BEZ IMIENIA KRÓLA. TWARDA GRANICA.
 * — 1788 — przywilej określający liczbę jarmarków.
 *   ⚠ SAMEJ LICZBY NIE USTALONO.
 * — 1810 — 53 DOMY W MIEŚCIE.
 * — 1820 — 51 DOMÓW, WSZYSTKIE DREWNIANE.
 *   ⚠⚠ W ŹRÓDLE TE LICZBY SĄSIADUJĄ Z POŻAREM Z 1809 R.
 *   UŻYWAM SAMYCH LICZB, BEZ PRZYCZYNY. TWARDA GRANICA.
 * — 1860 — 1 095 mieszkańców; 1931 — 2 241 (maksimum).
 * — 1862 — przeprowadzenie linii kolejowej TRZY KILOMETRY
 *   OD LUBIENIA. ⚠ MIASTO NIE MA WŁASNEJ STACJI.
 * — 1867 — utrata praw miejskich; 1919 — przywrócenie.
 *   ⚠⚠ BEZ POWODU I BEZ KONTEKSTU REPRESYJNEGO.
 * — ⚠⚠⚠ RDZEŃ KĄTA — KOŚCIÓŁ MUROWANY:
 *   1884 — ROZPOCZĘCIE BUDOWY, architekt ARTUR GOEBEL
 *   Z WARSZAWY;
 *   1886 — UKOŃCZENIE PRAC BUDOWLANYCH (DWA LATA);
 *   1909 — KONSEKRACJA, DWADZIEŚCIA TRZY LATA
 *   PO UKOŃCZENIU BUDOWY.
 *   Budynek stał i działał; formalnie nie był gotowy.
 *   ⚠⚠ KOŚCIÓŁ UŻYWAM WYŁĄCZNIE JAKO BUDOWLĘ Z DATAMI
 *   I NAZWISKIEM ARCHITEKTA. ZERO WĄTKU WYZNANIOWEGO,
 *   ZERO WEZWANIA, ZERO PARAFII. Słowo „konsekracja"
 *   pada jako termin formalny odbioru, nie jako obrzęd.
 *   TWARDA GRANICA.
 * — WCZEŚNIEJSZE KOŚCIOŁY: drewniany z XIV w.,
 *   konsekracja nowego w 1638, odbudowa ukończona
 *   w 1675. ⚠ ZERO POŻARU Z 1670 R. i ZERO ZAWALENIA
 *   SIĘ WIEŻY W 1827 R. — katastrofy.
 * — SZKOLNICTWO: 1839 — szkoła DREWNIANA, DWUIZBOWA;
 *   lata 20. XX w. — murowany budynek szkolny postawiony
 *   przez miejscowego budowniczego JANA SZPERLINGA;
 *   1978–1980 — nowe budynki szkolne.
 * — ZESPÓŁ DWORSKO-PARKOWY: dwór SZACHULCOWO-MUROWANY
 *   z przełomu XVIII i XIX w.; skrzydło południowe
 *   z połowy XIX w.; SKRZYDŁO PÓŁNOCNE Z LAT 1924–1925;
 *   rządcówka drewniana ok. 1850; park z połowy XIX w.
 *   z ALEJĄ GRABOWĄ i ALTANĄ LIPOWĄ.
 *   ⚠ POWIERZCHNI PARKU W HA NIE USTALONO.
 * — ⚠ LICZB MŁYNÓW, WIATRAKÓW, CECHÓW I RZEMIEŚLNIKÓW,
 *   DNI TARGOWYCH ORAZ DAT URUCHOMIENIA WODOCIĄGÓW,
 *   GAZOWNI, ELEKTROWNI, CEGIELNI I MLECZARNI
 *   NIE USTALONO. Danych Jeziora Lubieńskiego również
 *   NIE USTALONO.
 * — ⚠ BIP wspomina o „bogatych pokładach soli w okolicy"
 *   bez liczb. NIE UŻYWAM — kąt „sól i solenie" zajęty.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Lubień Kujawski. Sprawdzono wszystkie dziesięć
 *   kategorii wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ PODWÓJNA PUŁAPKA: miasto jest „Kujawski"
 *   z nazwy I leży na Kujawach, więc przyciąga wszystkie
 *   produkty regionalne z tym przymiotnikiem. ŻADEN
 *   z nich nie wskazuje gminy w karcie. NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: SKOŃCZONE TO NIE TO SAMO CO GOTOWE DO PODANIA.
 * Kąt od kościoła: budowę ukończono w 1886 r., po dwóch
 * latach pracy. Konsekracja odbyła się w 1909 —
 * dwadzieścia trzy lata później. Budynek przez ten czas
 * stał i działał, a formalnie nie był odebrany.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że murowany kościół w Lubieniu zbudowano w dwa lata,
 *   a odebrano formalnie po dwudziestu trzech,
 * — ⚠⚠ ŻE W KUCHNI MYLIMY DWA MOMENTY: KONIEC PRACY
 *   I MOMENT, W KTÓRYM DANIE JEST GOTOWE DO POSTAWIENIA
 *   NA STOLE — TO JEST RDZEŃ. Uznajemy danie
 *   za skończone wtedy, gdy skończyła się czynność,
 * — ⚠⚠ ŻE ODSTĘP MIĘDZY TYMI DWOMA MOMENTAMI JEST INNY
 *   DLA KAŻDEGO DANIA I ŻE IDZIE W OBIE STRONY:
 *   — SĄ DANIA, KTÓRE TEN ODSTĘP ZYSKUJĄ: ciasto,
 *     którego nie da się pokroić na gorąco; zapiekanka,
 *     która musi się ustabilizować; gulasz i zupa,
 *     które nazajutrz są lepsze,
 *   — SĄ DANIA, KTÓRE W TYM ODSTĘPIE TRACĄ, I TO SZYBKO:
 *     wszystko smażone i chrupiące, makaron, naleśniki —
 *     tam każda minuta czekania to strata,
 * — ⚠⚠ PRAKTYCZNY RUCH, KTÓRY TO PORZĄDKUJE: PLANOWAĆ
 *   NIE GODZINĘ OBIADU, TYLKO GODZINĘ ZAKOŃCZENIA PRACY
 *   — i zapisać u siebie, ile minut dzieli jedno od
 *   drugiego przy daniach, które robi się często.
 *   Bez tego zawsze jest o kwadrans za wcześnie albo
 *   o godzinę za późno,
 * — ⚠ ŻE DANIA NA GOŚCI DOBIERA SIĘ WŁAŚNIE POD TĘ CECHĘ:
 *   te, które zyskują na czekaniu, są jedynymi, które
 *   wolno zrobić wcześniej,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie skraca czas PRACY
 *   i to widać. ALE NIE ZMIENIA ODSTĘPU — ciasto i tak
 *   musi ostygnąć przed krojeniem, a usmażone i tak
 *   traci z każdą minutą. Skrócenie pracy bez policzenia
 *   odstępu daje ten sam efekt co wcześniej, tylko
 *   z większym zdziwieniem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO ODPOCZYNKU PO UPIECZENIU JAKO TEMATU —
 *   kąt zajęty (Młynary). ⚠⚠ TO JEST NAJBLIŻSZY KĄT.
 *   Tam chodzi o JEDEN KONKRETNY KROK po wyjęciu
 *   z piekarnika; TUTAJ o OGÓLNE ROZRÓŻNIENIE dwóch
 *   momentów, obejmujące także dania, które na czekaniu
 *   TRACĄ. Odpoczynek wymieniam jednym członem
 *   wyliczenia i nie rozwijam. Rozgraniczam wprost.
 * — ⚠⚠ ZERO CZASU W PRZEPISIE I MINUT GOTOWANIA —
 *   kąt zajęty (Mońki). Nie piszę o wiarygodności
 *   podanych czasów ani o poznawaniu gotowości.
 * — ⚠⚠ ZERO ZMYSŁÓW I ROZPOZNAWANIA, ŻE JEST GOTOWE —
 *   kąt zajęty (Poddębice).
 * — ⚠⚠ ZERO CZASU PRACY KONTRA CZASU CZEKANIA — kąt
 *   zajęty (Lubraniec, ta sama fala i ten sam powiat!).
 *   Tam chodzi o CZEKANIE, KTÓREGO WYMAGA SKŁADNIK
 *   PRZED gotowaniem i W TRAKCIE; TUTAJ o odstęp
 *   MIĘDZY KOŃCEM PRACY A PODANIEM. Odsyłam tam wprost
 *   jednym zdaniem. TWARDA GRANICA.
 * — ⚠ ZERO GOTOWANIA NA ZAPAS — kąt zajęty (Stopnica).
 * — ⚠ ZERO ROZŁOŻENIA ROBOTY NA KILKA DNI — kąt zajęty
 *   (Izbica Kujawska).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠⚠ Przy odstępie podaję WYŁĄCZNIE rzędy wielkości
 *   znane każdemu („kwadrans", „do ostygnięcia"), nigdy
 *   konkretnych minut obróbki.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   przy daniu czekającym na podanie to najkrótsza droga
 *   do wpadki. Piszę WYŁĄCZNIE o smaku i konsystencji.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z 1940 R. Sekcja historyczna
 *   en.wikipedii o Lubieniu ma dwa akapity, a drugi mówi
 *   o wysiedleniu trzystu Polaków. Co gorsza, ten sam
 *   akapit zawiera JEDYNE liczby historyczne w całym
 *   haśle — pokusa jest podwójna.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO POŻARU Z 1809 R. Liczby domów (53 i 51)
 *   to bardzo dobry materiał, ale w źródle stoją
 *   bezpośrednio po pożarze. UŻYWAM SAMYCH LICZB.
 * — ⚠⚠ ZERO POŻARU KOŚCIOŁA Z 1670 R. I ZERO ZAWALENIA
 *   SIĘ WIEŻY W 1827 R.
 * — ⚠⚠ ZERO WOJNY ZE SZWECJĄ 1655–1660 I ZNISZCZENIA
 *   MIASTA.
 * — ⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ — Wirtualny Sztetl
 *   w pierwszej ósemce wyników.
 * — ⚠⚠ ZERO POWODU UTRATY PRAW MIEJSKICH W 1867 R.
 * — ⚠ ZERO KOŚCIOŁA JAKO WĄTKU WYZNANIOWEGO — wyłącznie
 *   jako budowli z datami i nazwiskiem architekta.
 * — ⚠ ZERO DZIAŁALNOŚCI CHARYTATYWNEJ DLA RODZIN
 *   W POTRZEBIE — wątek wyznaniowy plus ubóstwo.
 * — ⚠ ZERO BEZROBOCIA (13,2 %) I UJEMNEGO PRZYROSTU
 *   NATURALNEGO.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl (wypłynął w wynikach dla tego
 *   miasta), gminya1.pl, nonsa.pl.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ODPOCZYNEK PO UPIECZENIU" (Młynary) dotyczy JEDNEGO
 *   KROKU. ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi
 *   o ROZRÓŻNIENIE DWÓCH MOMENTÓW przy każdym daniu,
 *   także tym, które na czekaniu traci.
 * — „CZAS, KTÓREGO NIE DA SIĘ SKRÓCIĆ" (Lubraniec)
 *   dotyczy CZEKANIA WYMAGANEGO PRZEZ SKŁADNIK.
 *   Odsyłam tam wprost — to sąsiednie miasto i sąsiedni
 *   temat.
 * — „CZAS W PRZEPISIE" (Mońki) dotyczy MINUT.
 * — „ZMYSŁY" (Poddębice) dotyczy ROZPOZNANIA GOTOWOŚCI.
 * TUTAJ chodzi o ODSTĘP MIĘDZY KOŃCEM PRACY A PODANIEM —
 * i o to, że dla jednych dań jest on zyskiem,
 * a dla innych stratą.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE UŻYWAM liczby 8,6 tysiąca z BIP-u.
 * — NIE ROZSTRZYGAM, kiedy miasto dostało prawa miejskie.
 * — NIE PODAJĘ imienia króla przy przywileju z 1539 r.
 * — NIE PODAJĘ liczby jarmarków po 1788 r. — nie ustalono.
 * — NIE PISZĘ, dlaczego w 1820 r. domów było mniej
 *   niż w 1810.
 * — NIE PISZĘ, dlaczego miasto straciło prawa w 1867 r.
 * — NIE PODAJĘ powierzchni parku ani danych jeziora.
 * — NIE PISZĘ o soli.
 * — NIE PRZYPISUJĘ Lubieniowi żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lubień Kujawski leży na Kujawach, w powiecie
 *   włocławskim; jest miastem w gminie miejsko-wiejskiej
 *   i liczy 1 305 mieszkańców (GUS, 31.12.2024)
 *   na 2,3 km²; cała gmina ma 6 706 osób, dwadzieścia
 *   osiem sołectw i pięćdziesiąt osiem wsi na 150,9 km²,
 * — najstarszy zapis o osadzie pochodzi z 1399 roku,
 *   a status miasta Lubień dostał pod koniec XV wieku,
 * — w 1539 roku miasto otrzymało przywilej na jarmarki
 *   i targi, a w 1788 kolejny, określający ich liczbę,
 * — w 1810 roku stały tu pięćdziesiąt trzy domy,
 *   a w 1820 pięćdziesiąt jeden — wszystkie drewniane,
 * — w 1860 roku mieszkało w Lubieniu tysiąc dziewięćdziesiąt
 *   pięć osób, a w 1931 dwa tysiące dwieście czterdzieści
 *   jeden — to historyczne maksimum,
 * — w 1862 roku poprowadzono linię kolejową trzy kilometry
 *   od miasta; własnej stacji Lubień nie ma,
 * — prawa miejskie miasto utraciło w 1867 roku i odzyskało
 *   je w 1919,
 * — murowany kościół budowano w latach 1884–1886 według
 *   projektu Artura Goebla z Warszawy, a konsekrowano
 *   dopiero w 1909 — dwadzieścia trzy lata po ukończeniu
 *   prac,
 * — w 1839 roku działała tu drewniana, dwuizbowa szkoła,
 *   w latach dwudziestych XX wieku murowany budynek
 *   szkolny postawił miejscowy budowniczy Jan Szperling,
 *   a nowe budynki szkolne powstały w latach 1978–1980,
 * — w mieście stoi zespół dworsko-parkowy: dwór
 *   szachulcowo-murowany z przełomu XVIII i XIX wieku,
 *   skrzydło południowe z połowy XIX wieku, skrzydło
 *   północne z lat 1924–1925 i drewniana rządcówka
 *   z około 1850 roku, a w parku z połowy XIX wieku
 *   zachowały się aleja grabowa i altana lipowa.
 */
export const LUBIEN_KUJAWSKI: CityContent = {
  slug: "lubien-kujawski",
  h1: "Thermomix Lubień Kujawski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lubień Kujawski — prezentacja i cena",
  seoDescription:
    "Thermomix w Lubieniu Kujawskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubień Kujawski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubieniu Kujawskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lubienia Kujawskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Lubień Kujawski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Planuje się godzinę zakończenia pracy, a nie godzinę obiadu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lubieniu Kujawskim – jak wygląda prezentacja?",
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
      id: "skonczone-a-gotowe",
      heading: "Zbudowany w dwa lata, odebrany po dwudziestu trzech",
      paragraphs: [
        "Murowany kościół w Lubieniu Kujawskim zaczęto stawiać w 1884 roku według projektu Artura Goebla z Warszawy. Prace budowlane skończyły się w 1886 — po dwóch latach. Konsekrowano go w 1909, czyli dwadzieścia trzy lata później.",
        "Przez ten czas budynek stał i działał. Był skończony, a formalnie nie był odebrany. To dwie różne rzeczy i w kuchni mylimy je codziennie, tylko w drugą stronę.",
        "W kuchni uznajemy danie za gotowe w chwili, w której skończyła się czynność. Zdjęłam z ognia, wyjęłam z piekarnika, odstawiłam łyżkę — czyli obiad. A między „przestałam pracować” a „to jest gotowe do postawienia na stole” bywa odstęp, i to różny dla różnych dań.",
        "Co ważne, ten odstęp działa w obie strony i to jest cała rzecz do zapamiętania.",
        "Są dania, które na nim zyskują. Ciasto, którego nie da się pokroić na gorąco, bo się rozpada. Zapiekanka, która musi się ustabilizować, żeby dało się wyjąć porcję, a nie kleks. Gulasz albo zupa, które nazajutrz są po prostu lepsze. Tu odstęp jest częścią przepisu, nawet jeśli przepis o nim nie wspomina.",
        "I są dania, które w tym samym odstępie tracą, i to szybko. Wszystko smażone i chrupiące. Makaron. Naleśniki. Tam każda minuta czekania to strata, a „zrobię wcześniej, żeby zdążyć” kończy się czymś gorszym niż to, co miało być.",
        "Praktyczny ruch jest jeden i zmienia więcej niż jakikolwiek trik: planować nie godzinę obiadu, tylko godzinę zakończenia pracy. Obiad o osiemnastej znaczy co innego przy cieście, a co innego przy kotletach — i warto mieć zapisane, ile minut dzieli u Was jedno od drugiego przy daniach, które robicie często.",
        "Z tego samego wynika reguła na gości, o której rzadko się mówi wprost: wcześniej wolno zrobić tylko to, co na czekaniu zyskuje. Reszta musi poczekać na ludzi, a nie ludzie na nią.",
        "Osobna sprawa to czekanie, którego wymaga sam składnik — namaczanie, wyrastanie, chłodzenie przed pracą. O tym pisałam przy sąsiednim mieście, bo to inna część tego samego rachunku.",
        "Uczciwie o sprzęcie. Urządzenie skraca czas pracy i to widać od pierwszego dnia. Ale odstępu nie zmienia: ciasto i tak musi ostygnąć przed krojeniem, a usmażone i tak traci z każdą minutą.",
        "Skrócenie samej pracy bez policzenia odstępu daje dokładnie ten sam efekt co wcześniej — tylko z większym zdziwieniem, bo przecież „miało być szybciej”.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubieniu Kujawskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o której siadacie do stołu — dobiorę dania tak, żeby było widać różnicę między tym, co zyskuje na czekaniu, a tym, co traci.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubieniu Kujawskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubieńskiej rodziny",
      paragraphs: [
        "Lubień Kujawski leży na Kujawach, w powiecie włocławskim; jest miastem w gminie miejsko-wiejskiej i liczy nieco ponad tysiąc trzysta mieszkańców na dwóch i trzech dziesiątych kilometra kwadratowego — to najmniejsze miasto tej okolicy; cała gmina ma blisko sześć i pół tysiąca osób, dwadzieścia osiem sołectw i pięćdziesiąt osiem wsi. Najstarszy zapis o osadzie pochodzi z 1399 roku, a status miasta Lubień dostał pod koniec XV wieku. W 1539 otrzymał przywilej na jarmarki i targi, a w 1788 kolejny, określający ich liczbę. W 1810 roku stały tu pięćdziesiąt trzy domy, a w 1820 pięćdziesiąt jeden — wszystkie drewniane. W 1860 mieszkało w mieście tysiąc dziewięćdziesiąt pięć osób, a w 1931 dwa tysiące dwieście czterdzieści jeden, i to jest historyczne maksimum. W 1862 poprowadzono linię kolejową trzy kilometry od miasta; własnej stacji Lubień nie ma. Prawa miejskie utracił w 1867 roku i odzyskał je w 1919. Murowany kościół budowano w latach 1884–1886 według projektu Artura Goebla z Warszawy, a konsekrowano dopiero w 1909. W 1839 działała tu drewniana, dwuizbowa szkoła, w latach dwudziestych XX wieku murowany budynek szkolny postawił miejscowy budowniczy Jan Szperling, a nowe budynki szkolne powstały w latach 1978–1980. W mieście stoi zespół dworsko-parkowy: dwór szachulcowo-murowany z przełomu XVIII i XIX wieku, skrzydło południowe z połowy XIX wieku, skrzydło północne z lat 1924–1925 i drewniana rządcówka z około 1850 roku, a w parku zachowały się aleja grabowa i altana lipowa.",
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

  districtsHeading: "Do których części Lubienia Kujawskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — ma nieco ponad dwa kilometry kwadratowe, więc wszędzie jest blisko. Dojeżdżam też do wszystkich pięćdziesięciu ośmiu wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Lubień Kujawski też przyjadę",
  nearbyParagraphs: [
    "Chodecz, Kowal, Lubraniec, Włocławek i Kutno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chodecz", "Kowal", "Włocławek", "Kutno"],

  about: blokOMnie("do Lubienia Kujawskiego", "w Lubieniu Kujawskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubienia Kujawskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich pięćdziesięciu ośmiu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Lubień Kujawski jest miastem w gminie miejsko-wiejskiej w powiecie włocławskim — i nie należy go mylić z Lubrańcem, który leży w tym samym powiecie.",
    },
    ...faqWspolne("w Lubieniu Kujawskim"),
    {
      question: "Dlaczego obiad bywa gotowy o złej porze, choć wszystko trwało tyle, ile miało?",
      answer:
        "Bo planujemy godzinę obiadu, a liczy się godzina zakończenia pracy — i odstęp między jednym a drugim jest inny dla każdego dania. Ciasto, zapiekanka czy gulasz na tym odstępie zyskują i trzeba im go dać. Wszystko smażone, chrupiące, makaron i naleśniki tracą z każdą minutą. Warto raz zapisać, ile ten odstęp wynosi przy daniach, które robicie często.",
    },
    {
      question: "Co można spokojnie zrobić wcześniej, gdy przychodzą goście?",
      answer:
        "Tylko to, co na czekaniu zyskuje — zupy, gulasze, zapiekanki, ciasta, które i tak muszą ostygnąć przed krojeniem. Wszystko, co ma być chrupiące, musi poczekać na ludzi, a nie ludzie na nie. Thermomix skróci tu czas pracy, ale nie zmieni tego odstępu: ciasto i tak stygnie tyle, ile stygnie.",
    },
  ],

  geo: { lat: 52.4047, lng: 19.1647 },
};
