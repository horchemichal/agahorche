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
 * ŁASIN — powiat grudziądzki, woj. kujawsko-pomorskie,
 * ZIEMIA CHEŁMIŃSKA.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 036 mieszkańców (GUS 31.12.2024) —
 * NAJMNIEJSZE MIASTO Z TEJ FALI, 4,8 km²,
 * gęstość 633,8 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 7 264 osoby, 136,4 km²,
 * 22 miejscowości i 18 sołectw.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ ŁASIN.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 *
 * ⚠⚠⚠ ŻADNEJ LICZBY LUDNOŚCIOWEJ ZE STRONY URZĘDU:
 *   urząd podaje MIASTO 3 540 (zawyżenie o 16,6 % wobec
 *   GUS) ORAZ GMINĘ 5 500 (zaniżenie o 24,3 %). Te dwie
 *   liczby mylą się W PRZECIWNYCH KIERUNKACH, co znaczy,
 *   że strona nie była aktualizowana od bardzo dawna
 *   i prawdopodobnie miesza gminę z jej obszarem wiejskim.
 *   UŻYWAM WYŁĄCZNIE GUS.
 * ⚠ GEO: 53,5164 / 19,0900.
 * ⚠ ODMIANA (POTWIERDZONA W PWN): D. ŁASINA,
 *   Ms. W ŁASINIE, przym. ŁASIŃSKI.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *   ⚠⚠ NIE UŻYWAM NIEMIECKIEJ NAZWY MIASTA.
 * ⚠⚠ PUŁAPKI NAZEWNICZE: „WYBUDOWANIE ŁASIŃSKIE" to
 *   ODRĘBNA WIEŚ W GMINIE, nie dzielnica miasta.
 *   „JEZIORO ŁASIŃSKIE" to akwen, nie miejscowość.
 *   Zapis bez diakrytyku („Lasin") myli się z innymi
 *   miejscowościami. ŁASKARZEW (mazowieckie) wychodzi
 *   w wynikach przy pytaniach o historię Łasina —
 *   jego przywilej lokacyjny NIE MA Z ŁASINEM NIC
 *   WSPÓLNEGO.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⭐ 1298 — osada otrzymała pierwszy przywilej i stała
 *   się miastem NA PRAWIE MAGDEBURSKIM (TRZY ŹRÓDŁA).
 * — ⭐⭐ 1306 — PONOWNY PRZYWILEJ LOKACYJNY, TYM RAZEM
 *   NA PRAWIE CHEŁMIŃSKIM. W ciągu ośmiu lat miasto
 *   zmieniło podstawę prawną.
 *   ⚠⚠ PODAJĘ SAM FAKT PRAWNY — BEZ NADAWCY, BEZ ZAKONU
 *   I BEZ CIĄGU WOJENNEGO (1454, 1461, 1466).
 *   TWARDA GRANICA.
 *   ⚠ DAT DZIENNYCH NIE USTALONO.
 * — 1314 — rozszerzenie włości miejskich.
 *   ⚠ BEZ NADAWCY.
 * — ⭐⭐⭐ SZEŚĆ ZORGANIZOWANYCH CECHÓW: PIEKARSKI,
 *   KRAWIECKI, KOŁODZIEJSKI, SZEWSKI, KUŚNIERSKI
 *   I KOWALSKI. Piekarski wymieniony jako pierwszy.
 *   ⚠ KUŚNIERSKI WYMIENIAM W WYLICZENIU I NIE ROZWIJAM
 *   (skóry; sąsiedni kąt garbarski jest zresztą zajęty).
 *   ⚠ Zbieżność: cech KOWALSKI w Łasinie, a KOWAL
 *   to osobne miasto z tej samej fali. Nie mylę.
 *   ⚠ LICZB RZEMIEŚLNIKÓW I DAT POWSTANIA CECHÓW
 *   NIE USTALONO.
 * — Początek XVII w. — CZTERY TARGI ROCZNIE.
 * — ⚠⚠⚠ RDZEŃ KĄTA — 1886:
 *   URUCHOMIENIE BOCZNEJ LINII KOLEJOWEJ GARDEJA–ŁASIN.
 *   JEDNO POŁĄCZENIE, W JEDNĄ STRONĘ, DO JEDNEGO CELU.
 *   LINIA DZIAŁAŁA DO 1985 R. — DZIEWIĘĆDZIESIĄT DZIEWIĘĆ
 *   LAT. ŁASIN NIGDY NIE BYŁ WĘZŁEM KOLEJOWYM.
 *   ⚠⚠ ZAMKNIĘCIE W 1985 R. PODAJĘ JAKO KONIEC OKRESU
 *   SŁUŻBY, NIGDY JAKO UPADEK — liczy się DZIEWIĘĆDZIESIĄT
 *   DZIEWIĘĆ LAT DZIAŁANIA. TWARDA GRANICA.
 * — 1892 — rozebranie murów miejskich.
 *   ⚠ PODAJĘ NEUTRALNIE ALBO WCALE.
 * — Koniec XIX / początek XX w. — wodociągi i gazownia.
 *   ⚠ DOKŁADNYCH LAT NIE USTALONO.
 * — 1900 — wybudowanie RATUSZA.
 * — 1833–1860 — miasto nie posiadało praw miejskich
 *   (27 lat). ⚠⚠ BEZ POWODU I BEZ KONTEKSTU REPRESYJNEGO.
 * — 1871 — 2 385 mieszkańców.
 *   ⚠⚠⚠ SAMA LICZBA, NIGDY ROZBICIE ETNICZNE, które
 *   podaje źródło. TWARDA GRANICA BEZWZGLĘDNA.
 * — Oczyszczalnia ścieków o wydajności 5 328 m³/dobę;
 *   kanalizacja obejmuje 97 % miasta; cztery jeziora
 *   na terenie gminy; 552 podmioty REGON w gminie (2019).
 *   ⚠⚠ ZERO CIEPŁOWNI I JEJ MOCY — kąt „moc" jest zajęty
 *   (Bledzew). NIE UŻYWAM liczb 9,2 MW i 3 MW.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Łasin. Sprawdzono wszystkie dziesięć kategorii
 *   wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ PUŁAPKI ROZBROJONE: „przetarte powidła wiśniowe
 *   ze Strzelec Górnych" (19.12.2024) to GMINA DOBRCZ,
 *   powiat bydgoski — a w gminie Łasin jest wieś
 *   HUTA-STRZELCE, więc zbieżność nazwy myli.
 *   „Chleb z kminkiem ze Stolna" (25.06.2009) i „chleb
 *   z makiem ze Stolna" (04.03.2008) to GMINA STOLNO,
 *   powiat chełmiński — ta sama ziemia chełmińska, inna
 *   gmina. „Mięta pieprzowa unisławska" (06.08.2018)
 *   to UNISŁAW. „Fjut kociewski" (09.05.2023) to KOCIEWIE,
 *   a Łasin leży na ziemi chełmińskiej. „Powidła śliwkowe
 *   z Doliny Dolnej Wisły" i „miody z rejonu Dolnej Wisły"
 *   mają zasięg regionalny i nie wskazują gminy.
 *   NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: LINIA BOCZNA — czy w ogóle mieć sprzęt do jednej
 * rzeczy.
 * Kąt od kolei: Łasin nigdy nie był węzłem. W 1886 r.
 * dostał jedną boczną linię, w jedną stronę, do jednego
 * celu — i ta linia przewoziła ludzi i towar przez
 * dziewięćdziesiąt dziewięć lat. Jednozadaniowość nie była
 * wadą. Pytanie brzmiało tylko, jak często to jedno
 * zadanie występuje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Łasin dostał w 1886 r. jedną linię boczną — jedno
 *   połączenie do jednego celu — i że działała dziewięćdziesiąt
 *   dziewięć lat,
 * — ⚠⚠ ŻE SPRZĘT JEDNOZADANIOWY NIE JEST ZŁY Z DEFINICJI
 *   I ŻE PYTANIE BRZMI INACZEJ, NIŻ SIĘ ZWYKLE ZADAJE —
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE PYTANIE „CZY MI SIĘ PRZYDA" JEST BEZUŻYTECZNE,
 *   BO ODPOWIEDŹ ZAWSZE BRZMI „TAK". Zamiast niego dwa
 *   pytania, które naprawdę rozstrzygają:
 *   — ILE RAZY W OSTATNIM PÓŁROCZU ROBIŁAM TĘ RZECZ —
 *     nie „będę robić", tylko „robiłam",
 *   — CZY NARZĘDZIE, KTÓRE JUŻ MAM, ZROBI TO O MINUTĘ
 *     WOLNIEJ, CZY NIE ZROBI TEGO WCALE. Pierwsze nie
 *     uzasadnia zakupu. Drugie uzasadnia,
 * — ⚠ PRZYKŁADY OBU STRON, UCZCIWIE: są sprzęty
 *   jednozadaniowe, które pracują latami, i są takie,
 *   które przez pół roku nie wyjeżdżają z szafki —
 *   i różnica nie leży w sprzęcie, tylko w częstotliwości,
 * — ⚠⚠ ŻE NIE OCENIAM NICZYJEJ SZAFKI I NIKOGO NIE NAMAWIAM
 *   DO WYRZUCANIA. Rzecz kupiona i nieużywana nie jest
 *   błędem moralnym. ZERO MORALIZOWANIA,
 * — ⚠⚠ UCZCIWIE O SPRZĘCIE — I TU MUSZĘ BYĆ NAJOSTROŻNIEJSZA,
 *   BO SPRZEDAJĘ URZĄDZENIE WIELOZADANIOWE: piszę WPROST,
 *   że to samo pytanie należy zadać JEMU, i podaję,
 *   CZEGO NIE ZASTĄPI — dobrego noża, patelni i piekarnika.
 *   Piszę też, że po jego kupieniu SZAFKA SIĘ NIE OPRÓŻNIA
 *   i że kto obiecuje inaczej, obiecuje za dużo.
 *   ODSYŁAM DO STRONY O WADACH I ZALETACH.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO UKŁADANIA I ORGANIZACJI SZUFLAD — kąt zajęty
 *   (Lipno). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o TO, CO SIĘ JUŻ MA; TUTAJ o DECYZJĘ, CZY W OGÓLE
 *   TO MIEĆ. Rozgraniczam wprost i nie piszę ani zdania
 *   o porządkowaniu.
 * — ⚠⚠ ZERO MOCY I MOCNIEJSZEGO OGNIA — kąt zajęty
 *   (Bledzew). Nie używam liczb ciepłowni.
 * — ⚠ ZERO WAGI URZĄDZENIA I PODNOSZENIA — kąt zajęty
 *   (Tczew).
 * — ⚠ ZERO CENY I RACHUNKU DOMOWEGO jako tematu — piszę
 *   o CZĘSTOTLIWOŚCI UŻYCIA, nie o budżecie.
 * — ⚠ ZERO PŁACENIA ZA POMINIĘTY KROK — kąt zajęty
 *   (Łabiszyn, poprzednia fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM, MAREK I MODELI SPRZĘTU — piszę
 *   o KATEGORIACH narzędzi, nigdy o konkretnych wyrobach.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO MUZEUM POŻARNICTWA. To jest wymieniana jako
 *   pierwsza i najbardziej rozpoznawalna atrakcja miasta,
 *   więc kusi najbardziej ze wszystkiego — i jest tematem
 *   zakazanym (pożary, katastrofy). ŻADNEJ WZMIANKI.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z PAŹDZIERNIKA 1939 R. I ZERO LICZBY
 *   OFIAR. Hasło en.wikipedia podaje ją w tym samym
 *   akapicie co inne liczby historyczne, więc łatwo
 *   przepisać ją machinalnie. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ.
 *   ⚠⚠ SYTUACJA SZCZEGÓLNA: najlepsze źródło gospodarcze
 *   o Łasinie — lista sześciu cechów, cztery targi rocznie,
 *   linia kolejowa z 1886 r. i ratusz z 1900 — znajduje się
 *   w serwisie poświęconym społeczności żydowskiej.
 *   WOLNO BRAĆ Z NIEGO FAKTY GOSPODARCZE, NIE WOLNO BRAĆ
 *   Z NIEGO TEMATU. Czytam tam wyłącznie akapity
 *   o rzemiośle.
 * — ⚠⚠⚠ ZERO ROZBICIA ETNICZNEGO ZE SPISU 1871 R. —
 *   sama liczba 2 385, nigdy procenty.
 * — ⚠⚠ ZERO POWODU UTRATY PRAW MIEJSKICH W 1833 R.
 * — ⚠⚠ ZERO ZAKONU, KOMTURA I WIELKIEGO MISTRZA przy
 *   lokacjach z 1298 i 1306 r. — sam fakt prawny.
 * — ⚠ ZERO ROZBIÓRKI MURÓW JAKO STRATY.
 * — ⚠⚠ ZERO SPORTOWCÓW Z TUTEJSZEGO KLUBU. Klub prowadzi
 *   m.in. trójbój siłowy — dyscyplinę o historycznie
 *   podwyższonym ryzyku afer dopingowych. Dziś nie ma
 *   w źródłach żadnego nazwiska, ale kierunek jest znany
 *   i nie wchodzę w niego wcale.
 * — ZERO kościołów jako wątku wyznaniowego.
 * — ZERO bezrobocia, salda migracji, przyrostu naturalnego
 *   i porównań liczby mieszkańców między latami.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „SZUFLADA" (Lipno) dotyczy ORGANIZACJI NARZĘDZI,
 *   KTÓRE SIĘ MA. ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ nie ma
 *   ani słowa o układaniu — jest wyłącznie DECYZJA
 *   O POSIADANIU.
 * — „MOC" (Bledzew) dotyczy SIŁY OGNIA.
 * — „WAGA URZĄDZENIA" (Tczew) dotyczy PODNOSZENIA.
 * — „PŁACENIE ZA POMINIĘCIE KROKU" (Łabiszyn) dotyczy
 *   KUPOWANIA GOTOWYCH PRODUKTÓW, nie sprzętu.
 * TUTAJ chodzi o SPRZĘT DO JEDNEJ CZYNNOŚCI I O DWA
 * PYTANIA, KTÓRE ROZSTRZYGAJĄ, CZY WARTO GO MIEĆ.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE UŻYWAM żadnej liczby ludnościowej ze strony urzędu.
 * — NIE PODAJĘ dat dziennych lokacji — nie ustalono.
 * — NIE PODAJĘ, kto nadał przywileje z 1298 i 1306 r.
 * — NIE PODAJĘ liczb rzemieślników ani dat powstania
 *   cechów — nie ustalono.
 * — NIE PODAJĘ dokładnych lat uruchomienia wodociągów
 *   i gazowni — nie ustalono.
 * — NIE PISZĘ o zamknięciu linii kolejowej jako o upadku.
 * — NIE PRZYPISUJĘ Łasinowi żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 * — NIE WYMIENIAM żadnego sportowca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Łasin leży na ziemi chełmińskiej, w powiecie
 *   grudziądzkim; jest miastem w gminie miejsko-wiejskiej
 *   i liczy 3 036 mieszkańców (GUS, 31.12.2024) na 4,8 km²;
 *   cała gmina ma 7 264 osoby, dwadzieścia dwie
 *   miejscowości i osiemnaście sołectw na 136,4 km²,
 *   a na jej terenie są cztery jeziora,
 * — w 1298 roku osada otrzymała pierwszy przywilej i stała
 *   się miastem na prawie magdeburskim, a już w 1306 roku
 *   dostała przywilej lokacyjny po raz drugi — tym razem
 *   na prawie chełmińskim; w 1314 rozszerzono włości
 *   miejskie,
 * — w mieście działało sześć zorganizowanych cechów:
 *   piekarski, krawiecki, kołodziejski, szewski,
 *   kuśnierski i kowalski,
 * — na początku XVII wieku odbywały się tu cztery targi
 *   rocznie,
 * — w 1886 roku uruchomiono boczną linię kolejową
 *   z Gardei do Łasina; linia działała do 1985 roku, czyli
 *   dziewięćdziesiąt dziewięć lat, a Łasin nigdy nie był
 *   węzłem kolejowym,
 * — na przełomie XIX i XX wieku zbudowano w mieście
 *   wodociągi i gazownię, a w 1900 roku ratusz,
 * — w latach 1833–1860, przez dwadzieścia siedem lat,
 *   miasto nie posiadało praw miejskich,
 * — w 1871 roku mieszkało tu 2 385 osób,
 * — dzisiejsza oczyszczalnia ścieków ma wydajność
 *   5 328 m³ na dobę, a kanalizacja obejmuje
 *   dziewięćdziesiąt siedem procent miasta.
 */
export const LASIN: CityContent = {
  slug: "lasin",
  h1: "Thermomix Łasin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łasin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Łasinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łasin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łasinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łasina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Łasin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jednozadaniowość nie jest wadą. Pytanie brzmi, jak często to jedno zadanie występuje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łasinie – jak wygląda prezentacja?",
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
      id: "linia-boczna",
      heading: "Jedna linia, w jedną stronę, przez dziewięćdziesiąt dziewięć lat",
      paragraphs: [
        "Łasin nigdy nie był węzłem kolejowym. W 1886 roku dostał jedną boczną linię — z Gardei, w jedną stronę, do jednego celu. Bez rozgałęzień, bez przesiadek, bez wyboru kierunku.",
        "I ta jedna linia woziła ludzi i towar do 1985 roku. Dziewięćdziesiąt dziewięć lat służby przy jednym jedynym zadaniu.",
        "Piszę o tym, bo w kuchni mamy dokładnie ten sam dylemat i zwykle rozstrzygamy go złym pytaniem. Sprzęt do jednej rzeczy — do jednej czynności, do jednego rodzaju dania — nie jest zły z definicji. Bywa świetną decyzją i bywa fatalną, a różnica nie leży w tym, że robi tylko jedno.",
        "Pytanie „czy mi się przyda” jest bezużyteczne, bo odpowiedź zawsze brzmi „tak”. Przyda się wszystko. Dlatego zamiast niego warto zadać dwa inne, które naprawdę rozstrzygają.",
        "Pierwsze: ile razy w ostatnim półroczu naprawdę robiłam tę rzecz. Nie „ile będę robić” — tylko ile razy już zrobiłam. To jedno przestawienie czasu gramatycznego zmienia odpowiedź częściej, niż się wydaje.",
        "Drugie jest ostrzejsze: czy narzędzie, które już mam, zrobi to o minutę wolniej, czy nie zrobi tego wcale. Jeśli o minutę wolniej — to nie uzasadnia zakupu. Jeśli w ogóle nie zrobi — uzasadnia, i wtedy nie ma o czym dyskutować.",
        "Bo są sprzęty jednozadaniowe, które pracują latami i nikt ich nie kwestionuje, i są takie, które od pół roku nie wyjeżdżają z szafki. Różnica nie tkwi w nich, tylko w tym, jak często pada ich jedno zadanie.",
        "I od razu: nie oceniam niczyjej szafki i nikogo nie namawiam do wyrzucania. Rzecz kupiona i nieużywana nie jest błędem moralnym, tylko informacją na przyszłość.",
        "Teraz część, którą muszę napisać uczciwie, bo sprzedaję urządzenie wielozadaniowe i byłoby wygodnie tego nie mówić. To samo pytanie należy zadać również jemu.",
        "Thermomix robi wiele rzeczy i dlatego zastępuje sporo sprzętów. Ale nie zastąpi dobrego noża, nie zastąpi patelni i nie zastąpi piekarnika. Po jego kupieniu szafka się nie opróżnia, a kto obiecuje inaczej, obiecuje za dużo. Napisałam o tym osobno i bez upiększeń.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co dokładnie robi to urządzenie" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łasinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego w kuchni używasz najczęściej — na spotkaniu spokojnie przejdziemy przez to, co urządzenie zastąpi, a co zostanie u Was tak jak było.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łasinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łasińskiej rodziny",
      paragraphs: [
        "Łasin leży na ziemi chełmińskiej, w powiecie grudziądzkim; jest miastem w gminie miejsko-wiejskiej i liczy ponad trzy tysiące mieszkańców na czterech i ośmiu dziesiątych kilometra kwadratowego, a cała gmina — ponad siedem tysięcy osób w dwudziestu dwóch miejscowościach i osiemnastu sołectwach, z czterema jeziorami na swoim terenie. W 1298 roku osada otrzymała pierwszy przywilej i stała się miastem na prawie magdeburskim, a już w 1306 dostała przywilej lokacyjny po raz drugi — tym razem na prawie chełmińskim; w 1314 rozszerzono włości miejskie. W mieście działało sześć zorganizowanych cechów: piekarski, krawiecki, kołodziejski, szewski, kuśnierski i kowalski, a na początku XVII wieku odbywały się tu cztery targi rocznie. W 1871 roku mieszkało w Łasinie 2 385 osób. W 1886 uruchomiono boczną linię kolejową z Gardei — działała przez dziewięćdziesiąt dziewięć lat, a miasto nigdy nie było węzłem kolejowym. Na przełomie XIX i XX wieku zbudowano wodociągi i gazownię, a w 1900 roku ratusz. W latach 1833–1860, przez dwadzieścia siedem lat, miasto nie posiadało praw miejskich. Dzisiejsza oczyszczalnia ścieków ma wydajność pięciu tysięcy trzystu dwudziestu ośmiu metrów sześciennych na dobę, a kanalizacja obejmuje dziewięćdziesiąt siedem procent miasta.",
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

  districtsHeading: "Do których części Łasina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — jest zwarte i przejście go na piechotę zajmuje kwadrans, więc dojadę wszędzie. To samo dotyczy wszystkich dwudziestu dwóch miejscowości w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Łasin też przyjadę",
  nearbyParagraphs: [
    "Grudziądz, Jabłonowo Pomorskie, Wąbrzeźno, Kwidzyn i Prabuty są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Grudziądz", "Jabłonowo Pomorskie", "Wąbrzeźno", "Kwidzyn"],

  about: blokOMnie("do Łasina", "w Łasinie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łasina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dwóch miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Łasin jest miastem w gminie miejsko-wiejskiej w powiecie grudziądzkim.",
    },
    ...faqWspolne("w Łasinie"),
    {
      question: "Jak rozstrzygnąć, czy warto kupić sprzęt do jednej czynności?",
      answer:
        "Pytanie „czy mi się przyda” nic nie rozstrzyga, bo odpowiedź zawsze brzmi „tak”. Lepsze są dwa inne. Pierwsze: ile razy w ostatnim półroczu naprawdę to robiłam — nie „będę robić”, tylko „robiłam”. Drugie: czy narzędzie, które już mam, zrobi to o minutę wolniej, czy nie zrobi wcale. O minutę wolniej nie uzasadnia zakupu; „wcale” uzasadnia.",
    },
    {
      question: "Czy Thermomix zastąpi resztę sprzętów w kuchni?",
      answer:
        "Sporo z nich tak, ale nie wszystko i nie będę tego koloryzować. Nie zastąpi dobrego noża, nie zastąpi patelni i nie zastąpi piekarnika. Szafka się po jego kupieniu nie opróżnia. Dokładne rozpisanie, co realnie przejmuje, a czego nie, mam na stronie o wadach i zaletach.",
    },
  ],

  geo: { lat: 53.5164, lng: 19.09 },
};
