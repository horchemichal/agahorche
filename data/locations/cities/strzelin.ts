import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * STRZELIN — powiat strzeliński, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Strzelin.
 * MIASTO: 11 917 mieszkańców (GUS 31.12.2024),
 *   gęstość 935,4 os./km².
 *   ⚠⚠⚠ POWIERZCHNI MIASTA NIE PODAJĘ — ŹRÓDŁA SPRZECZNE:
 *   12,7 km² (polskawliczbach) kontra 10,34 km²
 *   (en.wikipedia). RÓŻNICA PONAD 2 km². TWARDA GRANICA.
 * CAŁA GMINA: 21 411 osób, 171,3 km², 42 wsie i osady.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ GEO: 50,7833 / 17,0667.
 *
 * ⚠⚠⚠ PUŁAPKA NAJWYŻSZEJ WAGI — STRZELIN ≠ STRZEGOM.
 *   OBA SĄ DOLNOŚLĄSKIMI „MIASTAMI GRANITU",
 *   A STRZEGOM JEST JUŻ OPISANY (poprzednia fala).
 *   Strzelin: powiat strzeliński, rzeka Oława, prawa
 *     miejskie 1292, granit DROBNOZIARNISTY, szary
 *     o stalowoniebieskim odcieniu, TWARDSZY.
 *   Strzegom: powiat świdnicki, rzeka Strzegomka, prawa
 *     miejskie 1242, granit GRUBOZIARNISTY, żółtawo-szary,
 *     łatwiejszy w obróbce.
 *   ⚠⚠⚠ NIGDY NIE PISZĘ SAMEGO „ŚLĄSKI GRANIT".
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠ ODMIANA: D. STRZELINA, Ms. W STRZELINIE.
 *   Przymiotnik: STRZELIŃSKI (powiat strzeliński, granit
 *   strzeliński, Wzgórza Strzelińskie — formy urzędowe).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 * ⚠ INNE KOLIZJE: Strzelce Opolskie, Strzelce Krajeńskie,
 *   Strzelno, Strzelniki, Strzelce Wielkie.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1292 — prawa miejskie od księcia Bolka I Surowego.
 *   ⚠⚠ TEN SAM ROK bywa podawany jako data potwierdzająca
 *   tradycję kamieniarską. ⚠⚠⚠ TO JEDNA I TA SAMA DATA —
 *   NIE ŁĄCZĘ ICH JAKO DWÓCH NIEZALEŻNYCH POTWIERDZEŃ.
 * — WIEŻA RATUSZOWA: prawdopodobnie początek XIV w.,
 *   ponad 70 m wysokości, taras widokowy na ponad 40 m;
 *   przebudowa wczesnorenesansowa 1520–1526; pożar 1548
 *   i odbudowa 1549; rekonstrukcja renesansowa 1564;
 *   zegar słoneczny na ścianie południowej 1593; wymiana
 *   mechanizmu zegarowego 1864; dolna, czworoboczna część
 *   z kamienia łamanego.
 *   ⚠⚠ ŹRÓDŁA ROZCHODZĄ SIĘ CO DO LOSU KORPUSU RATUSZA —
 *   PISZĘ WYŁĄCZNIE O WIEŻY, NIGDY O RATUSZU JAKO CAŁOŚCI.
 *   ⚠⚠⚠ LOCHU GŁODOWEGO I STOŁU SĘDZIOWSKIEGO NIE UŻYWAM —
 *   wątek kar i sądownictwa. TWARDA GRANICA.
 * — CEGIELNIA 1868, CUKROWNIA 1871, KOLEJ 1871.
 *   ⚠⚠ CUKROWNIA I KOLEJ W TYM SAMYM ROKU — ŹRÓDŁO ICH
 *   NIE ŁĄCZY. NIE TWIERDZĘ PRZYCZYNOWOŚCI.
 *   ⚠ WIELKOŚCI PRODUKCJI ANI DATY ZAMKNIĘCIA CUKROWNI
 *   NIE USTALONO — nie podaję.
 *
 * KAMIENIOŁOM — LICZBY:
 * — Głębokość ponad 120 m. ⚠ ŹRÓDŁA: 120 albo 123 m —
 *   PISZĘ „PONAD STO DWADZIEŚCIA".
 * — Wyrobisko 650 × 300 m, powierzchnia 19,5 ha.
 * — Około kilometra od centrum, w granicach
 *   administracyjnych miasta.
 * — Wydobycie około 8 000 ton miesięcznie.
 * — Materiał blokowy: najwyżej 30 % urobku; około 90 %
 *   granitu trafia na kruszywo budowlane.
 *   ⚠⚠ TO DWIE RÓŻNE LICZBY O TYM SAMYM ZJAWISKU —
 *   górny pułap i praktyka. NIE SUMUJĘ ICH.
 *   ⚠⚠⚠ TEGO ZESTAWIENIA NIE UŻYWAM JAKO KĄTA —
 *   „większość tego, co przerabiasz, to produkt uboczny"
 *   ociera się o odejmowanie (Strzegom) i o krótką listę
 *   (Polanów). PODAJĘ JAKO FAKT, BEZ MORAŁU.
 * — Eksploatacja rzemieślnicza od XIII w., przemysłowa
 *   od XIX w.
 * — ⚠⚠⚠ „NAJGŁĘBSZE WYROBISKO GRANITU W EUROPIE"
 *   I „DRUGIE NA ŚWIECIE" — NIE CYTUJĘ ANI JEDNEGO.
 *   Żadne źródło nie podaje rankingu ani odniesienia.
 *   TWARDA GRANICA — ZERO SUPERLATYWÓW.
 * — ⚠⚠⚠ NAZWY OPERATORA NIE PODAJĘ — ZERO NAZW FIRM.
 * — ⚠ ZASTOSOWAŃ (Pałac Kultury, Biblioteka Jagiellońska)
 *   NIE PODAJĘ — źródła turystyczne bez dokumentacji.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PARAMETRY GRANITU STRZELIŃSKIEGO:
 *   wytrzymałość na ściskanie 217,0 MPa (207,0 MPa
 *   po 56 cyklach zamrażania), nasiąkliwość 0,29 %,
 *   wytrzymałość na zginanie 16,2 MPa (14,5 po cyklach),
 *   ścieralność na tarczy Boehmego 6 725 mm³, gęstość
 *   objętościowa 2 655 kg/m³, mrozoodporność całkowita.
 *   ⚠⚠⚠ I KLUCZOWA LICZBA: ZUŻYCIE NARZĘDZI WYŻSZE
 *   O OKOŁO 30 % NIŻ PRZY PORÓWNYWALNYCH GRANITACH.
 *   To jest cały kąt: materiał odporniejszy jest
 *   bezwzględniejszy dla tego, czym się go obrabia.
 *
 * ROTUNDA ŚW. GOTARDA — FAKT DODATKOWY, BEZ MORAŁU:
 *   pierwsza połowa XII w.; wnętrze o średnicy 6 m,
 *   wysokość nawy około 8 m, apsyda o średnicy 3,3 m,
 *   mur nawy 0,9–1 m, mur apsydy 1–1,1 m; wykonana
 *   z granitu narzutowego spajanego zaprawą wapienną;
 *   trzy półkoliste okna na wysokości 5 m; otwór między
 *   nawą a apsydą 2,5 m.
 *   ⚠⚠⚠ OPISUJĘ WYŁĄCZNIE JAKO BUDOWLĘ I JEJ WYMIARY.
 *   ZERO WĄTKU WYZNANIOWEGO, ZERO KULTU, ZERO WNĘTRZA.
 *   ⚠⚠ ZESTAWIENIA „NAJPIERW BIERZESZ TO, CO LEŻY,
 *   POTEM KOPIESZ" NIE UŻYWAM JAKO KĄTA — ociera się
 *   o inną metodę na innym etapie (Golczewo)
 *   i o przegląd zapasów (Dobrzany). PODAJĘ JAKO FAKT.
 *
 * KĄT: TWARDSZE ZUŻYWA SZYBCIEJ TO, CZYM SIĘ GO OBRABIA
 * — o tym, że wybierając w kuchni rzeczy najodporniejsze,
 * kupujemy sobie zużycie po drugiej stronie: w nożach,
 * w łopatkach, w szczotkach. Kąt od granitu strzelińskiego:
 * 217 MPa i 0,29 % nasiąkliwości kosztują trzydzieści
 * procent szybsze zużycie narzędzi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że granit ze Strzelina wytrzymuje 217 MPa na ściskanie
 *   i wchłania 0,29 % wody, jest w pełni mrozoodporny —
 *   i że dokładnie dlatego zużywa narzędzia o około
 *   trzydzieści procent szybciej niż granity porównywalne,
 * — że to nie jest wada materiału. To jest jego cena,
 *   zapisana po drugiej stronie rachunku,
 * — ⚠⚠ ŻE W KUCHNI DOKŁADNIE TAK SAMO: deska, która się
 *   nie rysuje, tępi noże szybciej niż drewniana. Naczynie,
 *   którego nic nie ima, nie znosi metalu i wymaga innej
 *   łopatki. Blat odporny na wszystko bywa odporny także
 *   na szczotkę, więc trzeba innej,
 * — ⚠⚠ ŻE BŁĄD NIE POLEGA NA WYBIERANIU TRWAŁYCH RZECZY.
 *   Polega na wybieraniu ich POJEDYNCZO, bez sprawdzenia,
 *   czym się ich używa i czym się je czyści,
 * — ⚠⚠ ŻE PRAKTYCZNA ZASADA JEST JEDNA: kupując coś
 *   wyraźnie trwalszego niż to, co miałeś, sprawdź od razu,
 *   które z dotychczasowych narzędzi przestaje do tego
 *   pasować. Zwykle jest jedno,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie jest argument
 *   za kupowaniem rzeczy delikatnych. Twarde ma sens,
 *   bo starcza dłużej. Chodzi tylko o to, żeby policzyć
 *   obie pozycje, a nie jedną,
 * — ⚠ UCZCIWIE O SPRZĘCIE: naczynie mieszające
 *   w urządzeniu też ma swoją stronę zużycia — nóż
 *   i uszczelka to części eksploatacyjne i wymienia się
 *   je po latach. MÓWIĘ TO WPROST, ZANIM KTOŚ ZAPYTA.
 *   ⚠⚠⚠ NIE PODAJĘ ŻADNYCH TERMINÓW ANI CZĘSTOTLIWOŚCI
 *   WYMIANY — tego nie ustalono i nie zmyślam.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ODEJMOWANIA I WYKREŚLANIA — kąt zajęty
 *   (Strzegom, to samo województwo, ta sama branża!).
 *   Nie piszę o usuwaniu niczego. Piszę o DOBIERANIU PARY:
 *   materiał plus narzędzie. ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO CYKLI RENOWACJI I POWROTÓW DO TEJ SAMEJ
 *   NAPRAWY — kąt zajęty (Chojnów). Piszę o zużyciu
 *   narzędzia, nigdy o harmonogramie konserwacji.
 *   ⚠⚠ TO JEST NAJBLIŻSZY OBSZAR — rozgraniczam jawnie.
 * — ⚠⚠⚠ ZERO USTALONEGO WYMIARU I TRZYMANIA SIĘ JEDNEJ
 *   MIARY — kąt zajęty (Kamienna Góra).
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty (Polanów).
 *   Nie sugeruję, ile narzędzi mieć.
 * — ⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno).
 * — ⚠⚠ ZERO MURÓW, OBWODU I PUNKTÓW WEJŚCIA — kąty zajęte
 *   (Recz, Moryń).
 * — ⚠⚠ ZERO CZASU ODTWORZENIA I PORZĄDKÓW — kąt pisany
 *   w tej samej fali (Góra).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ LISTY POLECANYCH MATERIAŁÓW — nie mówię,
 *   z czego ma być deska ani blat. Podaję WYŁĄCZNIE
 *   zasadę: dobierz narzędzie do twardości.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o deskach i naczyniach NIE MÓWIĘ NIC
 *   o higienie, bakteriach ani myciu w kontekście
 *   zdrowotnym. Piszę WYŁĄCZNIE o zużyciu.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — rotunda wyłącznie
 *   jako budowla z wymiarami.
 * — ⚠⚠ ZERO SĄDOWNICTWA I KAR — lochu głodowego
 *   ani stołu sędziowskiego nie wymieniam.
 * — ⚠⚠ ZERO WYPADKÓW, ZAGROŻEŃ I WARUNKÓW PRACY
 *   W KAMIENIOŁOMIE — opisuję wyłącznie parametry
 *   materiału i wymiary wyrobiska.
 * — ⚠ ZERO SUPERLATYWÓW O GŁĘBOKOŚCI.
 * — ⚠ ZERO NAZW FIRM WYDOBYWCZYCH.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni miasta — źródła sprzeczne.
 * — NIE PODAJĘ, że to najgłębszy kamieniołom granitu
 *   w Europie ani na świecie.
 * — NIE PODAJĘ nazwy firmy prowadzącej wydobycie.
 * — NIE SUMUJĘ 30 % materiału blokowego i 90 % kruszywa.
 * — NIE ŁĄCZĘ daty praw miejskich z datą tradycji
 *   kamieniarskiej jako dwóch faktów — to jedna data.
 * — NIE TWIERDZĘ, że kolej powstała z powodu cukrowni.
 * — NIE PISZĘ o ratuszu jako całości — tylko o wieży.
 * — NIE PODAJĘ długości ani liczby baszt murów miejskich
 *   — nie ustalono ani jednego wymiaru.
 * — NIE PODAJĘ terminów wymiany części eksploatacyjnych
 *   w urządzeniu.
 * — NIE MYLĘ granitu strzelińskiego ze strzegomskim.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Kapusta kwaszona ślężańska"
 *   i „ogórki kwaszone ślężańskie" pochodzą z rejonu
 *   Ślęży w gminie Sobótka — NIE ZE STRZELINA.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Strzelin leży nad Oławą i jest siedzibą powiatu
 *   strzelińskiego; miasto liczy 11 917 mieszkańców
 *   (GUS, 31.12.2024) przy gęstości 935,4 os./km²,
 *   a cała gmina miejsko-wiejska 21 411 osób
 *   na 171,3 km², z czterdziestoma dwoma wsiami
 *   i osadami; prawa miejskie otrzymał w 1292 r.
 *   od księcia Bolka I Surowego,
 * — kamieniołom granitu leży około kilometra od centrum,
 *   w granicach miasta: wyrobisko ma 650 m długości,
 *   300 m szerokości, 19,5 ha powierzchni i ponad 120 m
 *   głębokości; wydobywa się z niego około 8 000 ton
 *   miesięcznie, przy czym materiał blokowy stanowi
 *   najwyżej trzydziestą część urobku, a około
 *   dziewięćdziesięciu procent granitu trafia
 *   na kruszywo; wydobycie rzemieślnicze potwierdzone
 *   jest od XIII w., przemysłowe od XIX,
 * — granit strzeliński jest drobnoziarnisty i szary
 *   o stalowoniebieskim odcieniu; wytrzymuje 217 MPa
 *   na ściskanie (207 MPa po 56 cyklach zamrażania),
 *   16,2 MPa na zginanie, ma nasiąkliwość 0,29 %,
 *   gęstość objętościową 2 655 kg/m³ i pełną
 *   mrozoodporność; zużywa narzędzia o około 30 %
 *   szybciej niż granity porównywalne,
 * — wieża dawnego ratusza liczy ponad 70 m, z tarasem
 *   widokowym na ponad 40 m; powstała prawdopodobnie
 *   na początku XIV w., przebudowano ją w latach
 *   1520–1526, odbudowano po pożarze w 1549,
 *   zrekonstruowano w 1564; zegar słoneczny na ścianie
 *   południowej pochodzi z 1593 r., a mechanizm zegarowy
 *   wymieniono w 1864,
 * — rotunda św. Gotarda z pierwszej połowy XII w. ma
 *   wnętrze o średnicy 6 m i wysokości około 8 m, apsydę
 *   o średnicy 3,3 m oraz mur grubości od 0,9 do 1,1 m;
 *   zbudowano ją z granitu narzutowego spajanego zaprawą
 *   wapienną, z trzema półkolistymi oknami na wysokości
 *   5 m,
 * — cegielnię uruchomiono w 1868 r., cukrownię i połączenie
 *   kolejowe w 1871.
 */
export const STRZELIN: CityContent = {
  slug: "strzelin",
  h1: "Thermomix Strzelin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Strzelin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Strzelinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Strzelin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Strzelinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Strzelina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czterdziestu dwóch wsi i osad w gminie.",

  highlights: highlightyStandardowe("Strzelin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwieście siedemnaście megapaskali po jednej stronie, trzydzieści procent szybsze zużycie narzędzi po drugiej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Strzelinie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "twardsze-zuzywa-szybciej",
      heading: "Twardsze zużywa szybciej to, czym się go obrabia",
      paragraphs: [
        "Granit ze strzelińskiego kamieniołomu wytrzymuje dwieście siedemnaście megapaskali na ściskanie, wchłania dwadzieścia dziewięć setnych procenta wody i jest w pełni mrozoodporny. Po pięćdziesięciu sześciu cyklach zamrażania i rozmrażania traci raptem dziesięć megapaskali.",
        "I ten sam kamień zużywa narzędzia o mniej więcej trzydzieści procent szybciej niż granity, które się z nim porównuje.",
        "To nie jest wada materiału. To jest jego cena, tyle że zapisana po drugiej stronie rachunku — nie w tym, co się kupuje, tylko w tym, czym się to obrabia.",
        "W kuchni działa to identycznie i mało kto to liczy.",
        "Deska, która się nie rysuje, tępi noże szybciej niż drewniana — bo skoro nóż nie zostawia na niej śladu, to ślad zostaje na nożu. Naczynie, którego nic nie ima, nie znosi metalowej łyżki i wymaga innej łopatki. Blat odporny na wszystko bywa odporny także na szczotkę, więc trzeba nowej szczotki. Za każdym razem to samo: odporność nie znika, tylko przenosi się na coś innego.",
        "Błąd nie polega na wybieraniu trwałych rzeczy. Trwałe rzeczy mają sens i starczają dłużej.",
        "Błąd polega na wybieraniu ich pojedynczo — jako jednej pozycji na liście zakupów, bez sprawdzenia, czym się ich używa i czym się je czyści. Kupuje się jedną rzecz, a zmienia się trzy.",
        "Zasada, która to porządkuje, jest krótka: kupując coś wyraźnie trwalszego niż to, co miałaś do tej pory, sprawdź od razu, które z dotychczasowych narzędzi przestaje do tego pasować.",
        "Zwykle jest jedno. Czasem żadne. Rzadko wszystkie — ale kiedy się okaże, że wszystkie, lepiej wiedzieć o tym przed zakupem niż po.",
        "Uczciwie o drugiej stronie: nie jest to argument za kupowaniem rzeczy delikatnych. Delikatne zużywa się samo i wychodzi drożej. Chodzi wyłącznie o to, żeby policzyć obie pozycje zamiast jednej — cenę rzeczy i cenę tego, co będzie z nią pracować.",
        "Na koniec o urządzeniu, i powiem to, zanim ktoś zapyta.",
        "W Thermomixie też jest strona zużycia. Nóż i uszczelka to części eksploatacyjne — pracują, więc po latach się je wymienia, tak samo jak wymienia się narzędzia do twardego kamienia. Nie podam, po ilu latach, bo to zależy od tego, jak często i co się miele, a wolę nie rzucać liczbą, której nie sprawdzę. Chcę tylko, żeby to nie było niespodzianką.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Strzelinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego u Was w kuchni brakuje najczęściej — to zwykle wystarczy, żebym dobrała dania pod Wasz sprzęt, a nie pod swój.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Strzelinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Strzelina",
      paragraphs: [
        "Strzelin leży nad Oławą i jest siedzibą powiatu strzelińskiego. Samo miasto liczy blisko dwanaście tysięcy mieszkańców (GUS, 31.12.2024) przy gęstości ponad dziewięciuset trzydziestu osób na kilometr kwadratowy, a cała gmina miejsko-wiejska ponad dwadzieścia jeden tysięcy osób na stu siedemdziesięciu jeden kilometrach kwadratowych, z czterdziestoma dwoma wsiami i osadami. Prawa miejskie miasto dostało w 1292 roku od księcia Bolka I Surowego. Kamieniołom granitu leży około kilometra od centrum, w granicach miasta: wyrobisko ma sześćset pięćdziesiąt metrów długości, trzysta szerokości, dziewiętnaście i pół hektara powierzchni i ponad sto dwadzieścia metrów głębokości; wydobywa się z niego około ośmiu tysięcy ton miesięcznie, z czego materiał blokowy stanowi najwyżej trzydziestą część, a około dziewięćdziesięciu procent granitu trafia na kruszywo. Wydobycie rzemieślnicze potwierdzone jest tu od trzynastego wieku, przemysłowe od dziewiętnastego. Wieża dawnego ratusza mierzy ponad siedemdziesiąt metrów, z tarasem widokowym na ponad czterdziestu; przebudowano ją w latach 1520–1526, odbudowano po pożarze w 1549 i zrekonstruowano w 1564, zegar słoneczny na ścianie południowej pochodzi z 1593 roku, a mechanizm zegarowy wymieniono w 1864. Rotunda świętego Gotarda z pierwszej połowy dwunastego wieku ma wnętrze o średnicy sześciu metrów i wysokości około ośmiu, apsydę o średnicy trzech metrów i trzydziestu centymetrów oraz mur grubości od dziewięćdziesięciu centymetrów do metra z okładem — zbudowano ją z granitu narzutowego spajanego zaprawą wapienną. Cegielnię uruchomiono w 1868 roku, cukrownię i połączenie kolejowe w 1871.",
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

  districtsHeading: "Do których części Strzelina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu dwóch wsi i osad w gminie — a gmina ma ponad sto siedemdziesiąt kilometrów kwadratowych. Do najdalszych miejscowości też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Strzelin też przyjadę",
  nearbyParagraphs: [
    "Do Wrocławia jest stąd około czterdziestu czterech kilometrów drogami, do Ziębic około dwudziestu czterech. Dojeżdżam też do Ząbkowic Śląskich, Oławy i Niemczy — wszędzie bezpłatnie.",
  ],
  nearbyTowns: ["Wrocław", "Oława", "Ziębice", "Ząbkowice Śląskie", "Niemcza"],

  about: blokOMnie("do Strzelina", "w Strzelinie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Strzelina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu dwóch wsi i osad w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Strzelin w powiecie strzelińskim, nad Oławą — nie o Strzegom w powiecie świdnickim. Oba są dolnośląskimi miastami granitu i mylą się nawet w przewodnikach, a dzieli je kilkadziesiąt kilometrów. Nie chodzi też o Strzelce Opolskie, Strzelce Krajeńskie ani Strzelno.",
    },
    ...faqWspolne("w Strzelinie"),
    {
      question: "Kupiłam bardzo twardą deskę i noże tępią się szybciej niż wcześniej. Czy to normalne?",
      answer:
        "Normalne i przewidywalne. Granit ze Strzelina wytrzymuje dwieście siedemnaście megapaskali i wchłania niecałe trzy dziesiąte procenta wody — i dokładnie dlatego zużywa narzędzia o około trzydzieści procent szybciej niż granity, z którymi się go porównuje. Odporność nie znika, tylko przenosi się na to, czym się materiał obrabia. Praktyczny wniosek: kupując coś wyraźnie trwalszego niż to, co miałaś, warto od razu sprawdzić, które z dotychczasowych narzędzi przestaje do tego pasować.",
    },
    {
      question: "Czy w Thermomixie coś się zużywa?",
      answer:
        "Tak — nóż i uszczelka są częściami eksploatacyjnymi i po latach się je wymienia. Nie podam, po ilu, bo zależy to od tego, jak często i co się miele, a nie chcę rzucać liczbą, której nie sprawdzę. Mówię o tym z góry, bo wolę, żeby to nie było niespodzianką: każda rzecz, która pracuje z twardym materiałem, oddaje część zużycia po swojej stronie.",
    },
  ],

  geo: { lat: 50.7833, lng: 17.0667 },
};
