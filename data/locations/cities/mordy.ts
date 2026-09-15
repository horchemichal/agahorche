import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * MORDY — powiat siedlecki, woj. mazowieckie.
 * MIASTO 1 592 (GUS 31.12.2024), 4,5 km², 350,7 os./km².
 * Gmina miejsko-wiejska: 5 305 osób, 170,0 km², 32 os./km²,
 * 32 miejscowości statystyczne.
 * ⚠ NAJMNIEJSZE MIASTO W CAŁEJ SERII MAZOWIECKIEJ.
 * ⚠ BRIEF PODAWAŁ „ok. 1,8 tys." — ZAWYŻENIE O 13%.
 *   OBOWIĄZUJE 1 592. TWARDA GRANICA.
 * ⚠ CIEKAWY KONTRAST: gmina jest najrzadziej zaludniona
 *   (32 os./km²), a samo miasto najgęściej z tej czwórki
 *   (350,7) — bo ma tylko 4,5 km².
 *
 * ⚠⚠⚠ NAZWA MIASTA — NAJWAŻNIEJSZA OSTROŻNOŚĆ:
 *   Nazwa brzmi drastycznie i JEST TO CZYSTY PRZYPADEK.
 *   Przyjmuje się, że pochodzi OD NAZWY OSOBOWEJ
 *   (przezwiska) „MORDA" — osadnika, który założył
 *   miejscowość przed XV wiekiem. Samo słowo „morda"
 *   jako pożyczka weszło do polszczyzny dopiero w XV w.,
 *   czyli PO powstaniu nazwy.
 *   ⚠⚠ NIE ROZWIJAM ETYMOLOGII W STRONĘ „MORDU".
 *   NIE CYTUJĘ LEGENDY O BITWIE I POCHÓWKU RYCERZY.
 *   NIE ŻARTUJĘ Z NAZWY. Jedno zdanie o imieniu osadnika
 *   i idę dalej. TWARDA GRANICA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 *
 * ⚠⚠ ODMIANA — rozstrzygnięta w artykule onomastycznym:
 *   D. MORDÓW (nazwa pochodzi od męskiego przezwiska,
 *   więc bierze końcówkę -ów), Ms. W MORDACH,
 *   przymiotnik MORDZKI (nie „mordecki").
 *   ⚠ TEZĘ, ŻE NAZWA JEST NIEODMIENNA, ODRZUCAM —
 *   pochodzi z bloga i przeczy praktyce urzędowej.
 *   ⚠ OSOBNEJ NAZWY MIESZKAŃCA NIE ZNALEZIONO —
 *   PISZĘ „mieszkańcy Mordów". TWARDA GRANICA.
 * ⚠ W Polsce nie znaleziono drugiej miejscowości o tej
 *   nazwie. ⚠ Przy wyszukiwaniu po angielsku mieszają się
 *   wyniki o ludzie ugrofińskim — bez znaczenia dla treści.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — pierwsza wzmianka WRZESIEŃ 1434 R. — wielki książę
 *   litewski nadał Mordy rycerzowi,
 * — PRAWA MIEJSKIE 1488 R. na prawie magdeburskim:
 *   Stanisław Korczewski otrzymał przywilej na lokalizację
 *   miasta od KAZIMIERZA JAGIELLOŃCZYKA,
 * — ⚠ DWA PRZYWILEJE JARMARCZNE: 1664 I 1684 R.
 *   ⚠ DNI TYGODNIA ANI DAT DZIENNYCH ŹRÓDŁA NIE PODAJĄ,
 * — od lat trzydziestych XIX w. właściciel majątku uruchomił
 *   GARBARNIĘ I DWIE KARCZMY,
 *   ⚠ ŹRÓDŁO WYMIENIA TEŻ BROWAR I GORZELNIĘ —
 *   NIE WYMIENIAM ICH. ZERO TEMATU ALKOHOLU.
 *   TWARDA GRANICA.
 *   ⚠ ROZBIEŻNOŚĆ: 1837 (gov.pl) kontra 1838 (blog) —
 *   PISZĘ „od lat trzydziestych XIX wieku",
 * — PAŁAC z 1717 r., wzniesiony w stylu barokowym przez
 *   Baltazara Ciecierskiego; gruntowna przebudowa
 *   klasycystyczna w pierwszej połowie XIX w.; tympanon
 *   z herbem Doliwa, balkon tarasowy z kutą balustradą;
 *   dobudowane dwa trzykondygnacyjne skrzydła boczne.
 *   W rejestrze zabytków osobno: pałac, oficyna, zespół
 *   pałacowo-parkowy, brama wjazdowa i park ze stawami.
 *   ⚠⚠ PAŁAC JEST DZIŚ W ZŁYM STANIE — NIE OPISUJĘ JEGO
 *   STANU, OPISUJĘ ARCHITEKTURĘ I PARK. TWARDA GRANICA.
 * ⚠ MŁYNA W MORDACH NIE POTWIERDZONO — NIE ZAKŁADAM GO.
 * ⚠ CECHÓW RZEMIEŚLNICZYCH W MORDACH NIE POTWIERDZONO —
 *   źródła mówią ogólnie „gospodarka rolna oraz rzemiosło",
 *   bez specjalności. NIE ZMYŚLAM ICH.
 *
 * ⚠⚠ DZIŚ — PODSTAWA KĄTA. Oficjalna charakterystyka
 *   powiatu siedleckiego podaje wprost:
 *   — w produkcji roślinnej dominuje UPRAWA ZBÓŻ
 *     I ZIEMNIAKÓW, w zwierzęcej HODOWLA TRZODY CHLEWNEJ
 *     I BYDŁA MLECZNEGO,
 *   — użytki rolne to około 77,5% powierzchni powiatu,
 *     grunty orne 70,8% użytków, łąki i pastwiska 24,7%,
 *     a SADY ZALEDWIE OKOŁO 0,8%,
 *   — około 15 000 GOSPODARSTW, ŚREDNIO PO 9 HEKTARÓW,
 *     przy czym 40% MA PONIŻEJ 5 HEKTARÓW,
 *   — ⚠⚠ ROLNICY TO PONAD 80% PRACUJĄCYCH.
 *   Gmina Mordy sąsiaduje z siedmioma gminami.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: brak wpisu z gminy Mordy.
 *   ⚠⚠ PUŁAPKI: „rosół z prośnianek z Jastrząbki" pochodzi
 *   z majątku Jastrzębie Kąty pod Siedlcami — to POWIAT
 *   SIEDLECKI, ALE NIE GMINA MORDY. „Chleb razowiec żytni
 *   na zakwasie z Siedlec" pochodzi z MIASTA SIEDLCE.
 *   NIE PRZYPISUJĘ ŻADNEGO Z NICH. TWARDA GRANICA.
 * ⚠⚠ PEŁNEGO WYKAZU SOŁECTW NIE USTALONO — BIP gminy
 *   nie publikuje listy. NIE PODAJĘ ICH JAKO WYKAZU;
 *   wymieniam tylko kilka nazw, które pojawiają się
 *   w oficjalnej charakterystyce gminy, i to jako przykłady.
 *   Osiedli w mieście nie ustalono. districts PUSTE.
 *
 * KĄT: ŻNIWA — tygodnie w roku, kiedy nikt nie ma czasu
 * gotować, a wszyscy są najbardziej głodni.
 * Kąt od struktury zatrudnienia powiatu siedleckiego,
 * w którym rolnicy stanowią ponad osiemdziesiąt procent
 * pracujących, a gospodarstwa są małe — średnio
 * dziewięciohektarowe, w czterdziestu procentach
 * poniżej pięciu hektarów.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w powiecie siedleckim rolnicy to ponad osiemdziesiąt
 *   procent pracujących, gospodarstwa mają średnio dziewięć
 *   hektarów, a cztery na dziesięć poniżej pięciu — czyli
 *   są to gospodarstwa, w których pracuje rodzina, nie firma,
 * — ŻE JEST W ROKU KILKA TYGODNI, KIEDY W TAKIM DOMU
 *   KUCHNIA PRZESTAJE ISTNIEĆ — bo wszyscy są w polu
 *   od rana do nocy, a pogoda nie czeka,
 * — ⚠⚠ ŻE TO JEST DOKŁADNIE TEN MOMENT, W KTÓRYM
 *   ZAPOTRZEBOWANIE NA JEDZENIE JEST NAJWIĘKSZE,
 *   A MOŻLIWOŚĆ JEGO ZROBIENIA NAJMNIEJSZA. TO JEST
 *   RDZEŃ CAŁEGO TEKSTU,
 * — CO SIĘ W TAKICH TYGODNIACH SPRAWDZA:
 *   — dania JEDNOGARNKOWE, których nie trzeba komponować
 *     ⚠ ODSYŁAM DO STRONY O DANIACH JEDNOGARNKOWYCH,
 *   — dania, które SĄ DOBRE TAKŻE ZIMNE — bo nikt nie wie,
 *     o której się je,
 *   — dania, które ZNOSZĄ STANIE i drugie podgrzanie
 *     ⚠ ODSYŁAM DO STRONY O PODGRZEWANIU,
 *   — coś, co da się WYNIEŚĆ I ZJEŚĆ BEZ STOŁU,
 * — CZEGO SIĘ NIE SPRAWDZA: wszystkiego, co trzeba zjeść
 *   natychmiast, wszystkiego smażonego na ostatnią chwilę
 *   i wszystkiego, co wymaga, żeby ktoś siedział w kuchni
 *   o konkretnej godzinie,
 * — ⚠⚠ ŻE NAJWAŻNIEJSZA DECYZJA ZAPADA PRZED, NIE W TRAKCIE:
 *   to, co uda się zrobić wcześniej, jest jedyną rzeczą,
 *   na którą można liczyć. W trakcie nie powstaje nic nowego,
 * — ŻE W TAKICH TYGODNIACH WODA JEST WAŻNIEJSZA OD DANIA —
 *   przy pracy fizycznej w upale pije się dużo więcej,
 *   niż się pamięta ⚠ MÓWIĘ TO JAKO ZWYKŁĄ PRAKTYKĘ,
 *   BEZ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH,
 * — ŻE NIKT W TAKIM TYGODNIU NIE POWINIEN SOBIE ROBIĆ
 *   WYRZUTÓW, ŻE „NIE GOTUJE" — to nie jest zaniedbanie,
 *   tylko sezon,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to jest sytuacja, w której
 *   przewaga urządzenia jest największa z możliwych,
 *   bo polega ona dokładnie na jednym: NA TYM, ŻE NIKT
 *   NIE MUSI STAĆ W KUCHNI. Można zacząć przed wyjściem
 *   i wrócić do gotowego. ALE uczciwie też: ktoś musi
 *   składniki włożyć i ktoś musi to potem umyć. Urządzenie
 *   nie robi zakupów i nie sprząta.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI: jak długo
 *   jedzenie może stać w polu, w upale, w jakiej temperaturze
 *   je wozić. TO JEST DZIEDZINA SANEPIDU. Mówię wyłącznie
 *   o SMAKU, KONSYSTENCJI I WYGODZIE. TWARDA GRANICA —
 *   NAJWAŻNIEJSZA PRAKTYCZNA GRANICA TEJ STRONY.
 * — ⚠⚠ ŻADNYCH PORAD ZDROWOTNYCH O PRACY FIZYCZNEJ,
 *   NAWADNIANIU, UPALE I WYSIŁKU. To jest dziedzina
 *   medyczna. O piciu piszę jako o zwykłej praktyce,
 *   jednym zdaniem. TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PRZEPISÓW I PROPORCJI.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TEMATU ALKOHOLU.
 * — ŻADNEJ RETORYKI WSTYDU I POCZUCIA WINY.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO rozwijania nazwy miasta w stronę „mordu",
 *   ZERO legendy o bitwie i pochówku rycerzy, ZERO żartów.
 * — ⚠⚠ ZERO historii społeczności żydowskiej Mordów
 *   i wszystkiego, co z nią związane. TWARDA GRANICA.
 * — ⚠⚠ ZERO utraty praw miejskich i jej przyczyny.
 * — ZERO wydarzeń z listopada 1918 r. i z czasów wojny.
 * — ZERO upaństwowienia majątku po 1945 r. i wysiedlenia
 *   właścicieli; ZERO opisu stanu pałacu.
 * — ZERO wyludniania i spadku liczby ludności.
 * — ⚠ ZERO wątku pogranicza narodowościowego Podlasia,
 *   również przy etymologii.
 * — ZERO sugestii, że praca w gospodarstwie jest ciężkim
 *   losem — piszę o rytmie roku, nie o trudzie.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „GOTOWANIE DLA EKIPY" (Krasnystaw) dotyczy KARMIENIA
 *   GRUPY PRACOWNIKÓW przy pracy sezonowej — czyli
 *   gotowania DLA KOGOŚ. ⚠⚠ TUTAJ chodzi o WŁASNĄ KUCHNIĘ
 *   DOMU, KTÓREGO WSZYSCY DOMOWNICY SĄ W POLU — czyli
 *   o sytuację, w której nie ma KOGO gotować.
 *   TWARDA GRANICA — TO JEST NAJBLIŻSZY KĄT.
 * — „PORA ROKU" (Żywiec) i „POZA SEZONEM" (Ustka) dotyczą
 *   SEZONOWOŚCI TURYSTYCZNEJ I PRODUKTÓW.
 * — „DWUNASTOGODZINNA ZMIANA" (Kutno) i „POSIŁEK PRZED
 *   WYJŚCIEM NA ZMIANĘ" (Łęczna) dotyczą PRACY ZMIANOWEJ.
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy MROŻENIA.
 * — „JEDZENIE ZABRANE W DROGĘ" (Daleszyce) i „DRUGIE
 *   ŚNIADANIE DO PRACY" (Grajewo) dotyczą JEDZENIA
 *   ZABIERANEGO ZE SOBĄ.
 * — „SYNCHRONIZACJA" (Biała Piska) dotyczy TEGO, ŻEBY
 *   WSZYSTKO BYŁO GOTOWE NARAZ.
 * TUTAJ chodzi o KILKA TYGODNI W ROKU, w których dom
 * przestaje gotować, i o to, co się wtedy sprawdza.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZWIJAM etymologii nazwy.
 * — NIE PISZĘ „w Mordy" — poprawnie „w Mordach";
 *   dopełniacz to „Mordów", przymiotnik „mordzki".
 * — NIE PISZĘ o browarze i gorzelni.
 * — NIE PODAJĘ dni jarmarcznych.
 * — NIE ZAKŁADAM istnienia młyna ani cechów.
 * — NIE OPISUJĘ stanu pałacu.
 * — NIE PRZYPISUJĘ Mordom produktów z Jastrząbki
 *   ani z Siedlec.
 * — NIE PODAJĘ wykazu sołectw ani osiedli.
 * — NIE DORADZAM nic w sprawie przechowywania jedzenia
 *   ani pracy w upale.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mordy liczą 1 592 mieszkańców (GUS, 31.12.2024)
 *   na 4,5 km², a cała gmina miejsko-wiejska 5 305 osób
 *   na 170 km² i obejmuje trzydzieści dwie miejscowości;
 *   gmina sąsiaduje z siedmioma innymi,
 * — pierwsza wzmianka pochodzi z września 1434 roku,
 *   a prawa miejskie na prawie magdeburskim uzyskał tutejszy
 *   właściciel Stanisław Korczewski w 1488 roku
 *   od Kazimierza Jagiellończyka; przyjmuje się, że nazwa
 *   miasta pochodzi od przezwiska osadnika, który założył
 *   miejscowość przed XV wiekiem,
 * — miasto otrzymało dwa przywileje jarmarczne — w 1664
 *   i w 1684 roku — a od lat trzydziestych XIX wieku
 *   właściciel majątku uruchomił tu garbarnię i dwie karczmy,
 * — stoi tu pałac z 1717 roku, wzniesiony w stylu barokowym
 *   przez Baltazara Ciecierskiego i gruntownie przebudowany
 *   w stylu klasycystycznym w pierwszej połowie XIX wieku,
 *   z tympanonem z herbem Doliwa, balkonem tarasowym z kutą
 *   balustradą i dwoma trzykondygnacyjnymi skrzydłami
 *   bocznymi; w rejestrze zabytków figurują osobno pałac,
 *   oficyna, zespół pałacowo-parkowy, brama wjazdowa i park
 *   ze stawami,
 * — w powiecie siedleckim użytki rolne zajmują około
 *   siedemdziesięciu ośmiu procent powierzchni, grunty orne
 *   stanowią blisko trzy czwarte użytków, łąki i pastwiska
 *   jedną czwartą, a sady zaledwie około 0,8 procent;
 *   w produkcji roślinnej dominuje uprawa zbóż i ziemniaków,
 *   a w zwierzęcej hodowla trzody chlewnej i bydła mlecznego,
 * — w powiecie jest około piętnastu tysięcy gospodarstw
 *   o średniej wielkości dziewięciu hektarów, z czego
 *   czterdzieści procent ma poniżej pięciu hektarów,
 *   a rolnicy stanowią ponad osiemdziesiąt procent
 *   pracujących.
 */
export const MORDY: CityContent = {
  slug: "mordy",
  h1: "Thermomix Mordy – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mordy — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mordach w powiecie siedleckim: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mordy — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mordach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mordów z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Mordy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W żniwa najważniejsze jest to, co uda się zrobić wcześniej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mordach – jak wygląda prezentacja?",
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
      id: "zniwa",
      heading: "Tygodnie, w których kuchnia przestaje istnieć",
      paragraphs: [
        "W powiecie siedleckim rolnicy stanowią ponad osiemdziesiąt procent pracujących. Gospodarstwa mają tu średnio dziewięć hektarów, a cztery na dziesięć — poniżej pięciu. To znaczy, że w większości przypadków pracuje w nich rodzina, a nie firma: te same osoby, które wieczorem siadają do stołu.",
        "I dlatego jest w roku kilka tygodni, kiedy w takim domu kuchnia po prostu przestaje istnieć. Wszyscy są w polu od rana do nocy, pogoda nie czeka, a dzień kończy się wtedy, kiedy się kończy, a nie o osiemnastej.",
        "Rzecz w tym — i to jest sedno — że jest to dokładnie ten moment, w którym zapotrzebowanie na jedzenie jest największe, a możliwość jego zrobienia najmniejsza. Nigdy indziej te dwie rzeczy nie rozjeżdżają się tak bardzo.",
        "Co się w takich tygodniach sprawdza? Cztery rzeczy i właściwie tylko cztery.",
        "Dania jednogarnkowe, których nie trzeba komponować z kilku elementów — pisałam o nich osobno i akurat tu pokazują, po co powstały. Dania, które są dobre także zimne, bo nikt nie wie, o której ktoś przyjdzie i czy będzie miał siłę cokolwiek podgrzewać. Dania, które znoszą stanie i drugie podgrzanie — o tym też pisałam osobno, bo nie wszystkie znoszą. I coś, co da się wynieść i zjeść bez stołu, jedną ręką, opierając się o cokolwiek.",
        "Co się nie sprawdza: wszystko, co trzeba zjeść natychmiast. Wszystko smażone na ostatnią chwilę. I wszystko, co wymaga, żeby ktoś stał w kuchni o konkretnej godzinie — bo w te tygodnie nie ma konkretnych godzin.",
        "Najważniejsza decyzja zapada przed, nie w trakcie. To, co uda się zrobić wcześniej — w niedzielę, wieczorem, o świcie — jest jedyną rzeczą, na którą można potem liczyć. W trakcie nie powstaje nic nowego i nie ma sensu planować, że powstanie.",
        "Jedna rzecz praktyczna na marginesie: w takich tygodniach woda bywa ważniejsza od dania. Przy pracy fizycznej w upale pije się dużo więcej, niż się pamięta, a butelka zabrana rano kończy się przed południem. To zwykłe doświadczenie, nie porada — ale warto o tym pomyśleć, pakując cokolwiek.",
        "I rzecz, którą chcę powiedzieć wprost, bo rzadko ktoś ją mówi: nikt nie powinien mieć do siebie pretensji, że w te tygodnie „nie gotuje”. To nie jest zaniedbanie ani odpuszczenie sobie. To jest sezon, a sezon ma swoje prawa. Kanapka zjedzona na przyczepie o czternastej jest w lipcu lepszą decyzją niż obiad, którego nikt nie zdążył zrobić.",
        "Teraz o sprzęcie — i to jest chyba jedyna strona w tym serwisie, gdzie przewaga urządzenia jest największa z możliwych, bo polega dokładnie na jednej rzeczy: na tym, że nikt nie musi stać w kuchni.",
        "Można wstawić składniki, ustawić i wyjść. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc nie wykipi i nie przywrze, choć nikogo nie ma w domu. Wraca się do gotowego. W tygodniu, w którym nie ma ani jednej wolnej godziny, to nie jest wygoda — to jest różnica między obiadem a jego brakiem.",
        "Ale uczciwie do końca: ktoś musi te składniki włożyć, a potem ktoś musi naczynie umyć. Urządzenie nie robi zakupów, nie planuje i nie sprząta. Zdejmuje z rąk czas stania nad garnkiem i nic poza tym — tyle że akurat w żniwa jest to ta jedna rzecz, której naprawdę brakuje.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mordach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "W okresie prac polowych umawiam się elastycznie — również wieczorem. Powiedz przy umawianiu, kiedy realnie macie godzinę spokoju, a dopasuję się do tego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mordach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Mordów",
      paragraphs: [
        "Mordy liczą blisko tysiąc sześćset mieszkańców na czterech i pół kilometrach kwadratowych, a cała gmina miejsko-wiejska ponad pięć tysięcy osób na stu siedemdziesięciu kilometrach i obejmuje trzydzieści dwie miejscowości; sąsiaduje z siedmioma innymi gminami. Pierwsza wzmianka pochodzi z września 1434 roku, a prawa miejskie na prawie magdeburskim uzyskał tutejszy właściciel Stanisław Korczewski w 1488 roku od Kazimierza Jagiellończyka; przyjmuje się, że nazwa miasta pochodzi od przezwiska osadnika, który założył miejscowość jeszcze przed XV wiekiem. Miasto otrzymało dwa przywileje jarmarczne — w 1664 i w 1684 roku — a od lat trzydziestych XIX wieku właściciel majątku uruchomił tu garbarnię i dwie karczmy. Stoi tu pałac z 1717 roku, wzniesiony w stylu barokowym przez Baltazara Ciecierskiego i gruntownie przebudowany w stylu klasycystycznym w pierwszej połowie XIX wieku, z tympanonem z herbem Doliwa, balkonem tarasowym z kutą balustradą i dwoma trzykondygnacyjnymi skrzydłami bocznymi; w rejestrze zabytków figurują osobno pałac, oficyna, zespół pałacowo-parkowy, brama wjazdowa i park ze stawami. W powiecie siedleckim użytki rolne zajmują około siedemdziesięciu ośmiu procent powierzchni, a w produkcji roślinnej dominuje uprawa zbóż i ziemniaków; gospodarstw jest tu około piętnastu tysięcy, o średniej wielkości dziewięciu hektarów.",
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

  districtsHeading: "Do których części gminy Mordy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic pałacu i parku po domy przy wylotach dróg — oraz do wszystkich miejscowości w gminie, między innymi do Czepielina, Czołomyj, Głuchowa, Klimont, Krzymoszy i Starej Wsi.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Mordy też przyjadę",
  nearbyParagraphs: [
    "Siedlce, Łosice, Zbuczyn, Suchożebry, Paprotnia, Przesmyki i Olszanka są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Siedlce", "Łosice", "Sokołów Podlaski", "Międzyrzec Podlaski"],

  about: blokOMnie("do Mordów", "w Mordach", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mordów bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Mordy w powiecie siedleckim — przyjmuje się, że nazwa miasta pochodzi od przezwiska osadnika, który założył je jeszcze przed XV wiekiem.",
    },
    ...faqWspolne("w Mordach"),
    {
      question: "Co gotować w tygodniach, kiedy nie ma na to czasu?",
      answer:
        "Sprawdzają się cztery rzeczy: dania jednogarnkowe, dania dobre także na zimno, dania znoszące stanie i drugie podgrzanie oraz coś, co da się zjeść bez stołu. Nie sprawdza się nic, co trzeba zjeść natychmiast ani co wymaga, żeby ktoś stał w kuchni o konkretnej godzinie. Najważniejsze zapada wcześniej — w trakcie nie powstaje nic nowego.",
    },
    {
      question: "Czy Thermomix pomaga w okresie prac polowych?",
      answer:
        "To akurat sytuacja, w której jego przewaga jest największa, bo polega dokładnie na jednym: nikt nie musi stać w kuchni. Można wstawić składniki, ustawić i wyjść — danie gotuje się z ustawioną temperaturą i mieszaniem, więc nie wykipi i nie przywrze. Uczciwie jednak: ktoś musi je włożyć, a potem umyć naczynie. Urządzenie nie robi zakupów i nie sprząta.",
    },
  ],

  geo: { lat: 52.2117, lng: 22.5178 },
};
