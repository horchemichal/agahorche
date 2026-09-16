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
 * GÓRA — powiat górowski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Góra — to inna sytuacja niż
 *   w Kamiennej Górze (opisana wcześniej), gdzie gmina
 *   miejska i gmina wiejska o tej samej nazwie istnieją
 *   równolegle. TWARDA GRANICA.
 * MIASTO: 13,7 km², gęstość 781,6 os./km².
 *   ⚠⚠⚠ LUDNOŚĆ MIASTA — LICZBA SPORNA. polskawliczbach
 *   podaje 10 669 (GUS 31.12.2024), ale 13,7 × 781,6
 *   daje 10 708. RÓŻNICA 39 OSÓB — NIE DOMYKA SIĘ.
 *   ⚠⚠⚠ DLATEGO W TEKŚCIE PISZĘ „OKOŁO DZIESIĘCIU
 *   I PÓŁ TYSIĄCA" I NIE PODAJĘ LICZBY CO DO OSOBY.
 * CAŁA GMINA: 18 382 osoby, 266,0 km², 36 wsi.
 *   ⚠ Kontrola: geoportal-krajowy podaje 18 294 —
 *   zbieżne co do rzędu, podaję „ponad osiemnaście
 *   tysięcy". ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠⚠ ODSETKA „51,5 % ludności powiatu" NIE PODAJĘ —
 *   nie domyka się z ludnością powiatu (18 382 / 32 250
 *   to 57 %). ŹRÓDŁO WEWNĘTRZNIE SPRZECZNE.
 * ⚠ GEO: 51,6667 / 16,5333.
 *
 * ⚠⚠⚠ ODMIANA I HOMONIM — NAJTRUDNIEJSZA NAZWA
 *   W CAŁYM CYKLU. „Góra" jest rzeczownikiem pospolitym
 *   o bardzo wysokiej frekwencji, a jej formy zależne
 *   pokrywają się z utrwalonymi wyrażeniami:
 *     z Góry / z góry („z góry dziękuję", „z góry wiadomo")
 *     do Góry / do góry („ręce do góry")
 *     w Górze / w górze („w górze" = wysoko)
 *     na Górze / na górze („na górze" = na piętrze)
 *   ⚠⚠⚠ NAJGROŹNIEJSZE W TEKŚCIE O KUCHNI SĄ
 *   „z góry" (odmierzyć z góry, przygotować z góry)
 *   I „do góry" (postawić do góry dnem).
 *   ⚠⚠⚠ ZASADA BEZWZGLĘDNA: NIGDY NIE ZOSTAWIAM
 *   „Góra" SAMEJ W PRZYPADKU ZALEŻNYM.
 *   Piszę: „miasto Góra", „w Górze na Dolnym Śląsku",
 *   „w Górze w powiecie górowskim", „do miasta Góra".
 *   ⚠⚠ NAJLEPSZYM NARZĘDZIEM JEST PRZYMIOTNIK
 *   „GÓROWSKI" — NIE MA ŻADNEGO HOMONIMU.
 *   ⚠ Forma „Góra Śląska" żyje na kolei (stacja Kolei
 *   Dolnośląskich), ALE NIE JEST NAZWĄ URZĘDOWĄ —
 *   NIE UŻYWAM JEJ JAKO GŁÓWNEJ NAZWY.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — forma
 *   niezweryfikowana w słowniku.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE: Góra ≠ Kamienna Góra
 *   (już opisana, też dolnośląska!) ≠ Zielona Góra
 *   ≠ Jelenia Góra ≠ Góra Kalwaria ≠ Tarnowskie Góry.
 *   ⚠ Wsie o nazwie Góra są w wielkopolskiem,
 *   kujawsko-pomorskiem, lubelskiem, opolskiem
 *   i śląskiem. ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — Pierwsza wzmianka 1155 (bulla papieska).
 *   ⚠ JEDNO ŹRÓDŁO — piszę „pojawia się w źródłach
 *   w połowie dwunastego wieku", nie podaję roku
 *   jako pewnego.
 * — ⚠⚠ LOKACJA: źródła podają „przed 1298" i NIE PODAJĄ
 *   ROKU NADANIA PRAW MIEJSKICH. ⚠⚠⚠ NIE ZMYŚLAM ROKU.
 *   Piszę wprost, że twardej daty nie ma.
 * — MURY: 12 (albo 13) baszt i wież wznoszonych
 *   w latach 1375–1477. ⚠ Liczba sporna między
 *   źródłami — piszę „kilkanaście".
 * — CZTERY BRAMY: zachodnia Głogowska, wschodnia Polska
 *   oraz dwie mniejsze furty, północna i południowa.
 * — ⚠⚠ ROZBIÓRKA BRAM ROZŁOŻONA NA DEKADY: wieża Bramy
 *   Polskiej 1818, sama Brama Polska 1828, Brama
 *   Głogowska 1851 — 33 lata.
 * — WIEŻA GŁOGOWSKA: jedyna zachowana; 38 m wraz
 *   z iglicą, na podstawie wysokiej na 1,5 m, wykonanej
 *   z kamieni narzutowych.
 *   ⚠ DATOWANIE SPORNE (XIV albo XV w.) — nie podaję.
 *   ⚠ LICZBA KONDYGNACJI SPORNA (6 albo 4) — nie podaję.
 *   ⚠ HEJNAŁU O 12.00 NIE PODAJĘ — jedno źródło.
 * — ⚠⚠ „OKOŁO 10 HA — NAJWIĘKSZE OBSZAROWO OBWAROWANE
 *   MIASTO DOLNEGO ŚLĄSKA" — ⚠⚠⚠ NIE UŻYWAM.
 *   Stoi na JEDNYM źródle turystycznym, bez potwierdzenia
 *   w literaturze. TWARDA GRANICA — ani liczby,
 *   ani superlatywu.
 * — WIEŻA CIŚNIEŃ: wzniesiona 1915, w użyciu do 2013.
 *   ⚠ Jedno źródło — podaję opisowo („blisko sto lat").
 * — ⚠ STUDNI Z XIII W. ODKRYTEJ W 2011 NIE UŻYWAM —
 *   jedno źródło, brak wymiarów.
 * — KOLEJ: do Bojanowa 1885, ruch zawieszony 1992.
 *   ⚠ DRUGIEJ LINII (1906) NIE PODAJĘ — nazwa
 *   miejscowości w źródle podejrzana.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — KOŚCIÓŁ ŚW. KATARZYNY JAKO BUDOWLA:
 *   pierwsza wzmianka w dokumentach 1302; poprzednia
 *   świątynia spłonęła w 1457; obecną bryłę wznoszono
 *   w latach 1457–1552, czyli 95 lat; w 1963 częściowo
 *   runęły sklepienia i wieża zachodnia, a odbudowa
 *   zajęła lata 1964–1965.
 *   ⚠⚠⚠ OPISUJĘ WYŁĄCZNIE JAKO BUDOWLĘ I JEJ HARMONOGRAM.
 *   ZERO WĄTKU WYZNANIOWEGO, ZERO KULTU, ZERO WNĘTRZA,
 *   ZERO OŁTARZY. TWARDA GRANICA BEZWZGLĘDNA.
 *   ⚠ WYSOKOŚCI WIEŻY, WYMIARÓW NAWY, DZWONÓW I ORGANÓW
 *   NIE USTALONO — NIE PODAJĘ ANI JEDNEGO.
 * ⚠ POŻAR MIASTA 1759 I ODBUDOWA „OK. 25 LAT" —
 *   jedno źródło [NP]. PODAJĘ OPISOWO („ćwierć wieku"),
 *   z zaznaczeniem, że to szacunek.
 *
 * KĄT: ROZEBRAĆ IDZIE SZYBCIEJ, NIŻ ZŁOŻYĆ Z POWROTEM
 * — o tym, że planując porządki liczymy czas rozbierania,
 * a zajmuje nas czas składania z powrotem. Kąt od
 * górowskich harmonogramów: budowa 95 lat, zawalenie
 * jednej nocy, odbudowa dwa lata.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kościół św. Katarzyny w Górze budowano 95 lat
 *   (1457–1552), że w 1963 runęła część sklepień i wieża
 *   zachodnia, a odbudowa zajęła dwa lata (1964–1965),
 * — że mury z kilkunastoma basztami wznoszono ponad
 *   sto lat (1375–1477), a same bramy rozbierano
 *   przez trzydzieści trzy lata (1818, 1828, 1851) —
 *   ⚠ TU UWAGA: to przykład, że nawet rozbiórka bywa
 *   długa, ale ROZBIÓRKA PLANOWA. Zawalenie jest szybkie.
 *   ROZRÓŻNIAM TE DWIE RZECZY JAWNIE,
 * — ⚠⚠ ŻE W KUCHNI LICZYMY ZAWSZE TĘ KRÓTSZĄ STRONĘ:
 *   „wyjmę wszystko z szafek" to jedno popołudnie
 *   i tak to sobie planujemy,
 * — ⚠⚠ ŻE POWRÓT DO STANU UŻYWALNOŚCI JEST WIELOKROTNIE
 *   DŁUŻSZY: trzeba zdecydować o każdej rzeczy, znaleźć
 *   jej miejsce, a w międzyczasie i tak trzeba w tej
 *   kuchni gotować,
 * — ⚠⚠ ŻE STĄD BIERZE SIĘ ZNANY STAN: rozbabrane
 *   na trzy tygodnie, bo rozbieranie poszło zgodnie
 *   z planem, a składanie nie miało własnego planu,
 * — ⚠⚠ ŻE JEDYNA REGUŁA, KTÓRA TU DZIAŁA, JEST PROSTA:
 *   nie zaczynaj większego odcinka, niż domkniesz tego
 *   samego dnia. Jedna szafka domknięta bije trzy
 *   otwarte,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem trzeba rozebrać
 *   więcej naraz, bo inaczej się nie da — przy remoncie,
 *   przy przeprowadzce. Wtedy warto po prostu wiedzieć,
 *   że kuchnia będzie niezdatna tygodniami, i mieć na to
 *   plan, zamiast się zdziwić,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie skraca
 *   porządków. Skraca natomiast czas, w którym kuchnia
 *   jest rozbabrana przy zwykłym gotowaniu, bo mniej
 *   naczyń wychodzi na blat. MÓWIĘ WPROST, że to nie
 *   to samo co porządki.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MURÓW JAKO TEMATU OBRONNEGO I ZERO OBWODU
 *   JAKO KĄTA — obszar zajęty (Recz, Moryń, Resko,
 *   Strzegom). Mury podaję WYŁĄCZNIE jako harmonogram
 *   w latach, nigdy jako granicę, obwód ani ochronę.
 *   ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO PUNKTÓW WEJŚCIA I BRAM JAKO WEJŚĆ —
 *   kąt zajęty (Moryń). Bramy podaję WYŁĄCZNIE
 *   jako daty rozbiórki.
 * — ⚠⚠⚠ ZERO TRZECH RENOWACJI I CYKLI SERWISOWYCH —
 *   kąt zajęty (Chojnów). Piszę o JEDNYM zdarzeniu
 *   i o czasie powrotu, nie o powtarzalności napraw.
 *   ⚠⚠ TO JEST NAJBLIŻSZY OBSZAR — rozgraniczam jawnie.
 * — ⚠⚠ ZERO DOKŁADANIA PO KOLEI I ROZBUDOWY ETAPAMI —
 *   kąt zajęty (Zamość) i pisany w tej samej fali
 *   (Syców). Nie piszę o dokładaniu.
 * — ⚠⚠ ZERO INNEJ METODY NA INNYM ETAPIE — kąt zajęty
 *   (Golczewo).
 * — ⚠⚠ ZERO ZOSTAWIANIA JEDNEGO EGZEMPLARZA Z SERII —
 *   kusi przy jedynej ocalałej wieży, ale ociera się
 *   o odejmowanie (Strzegom). Wieżę podaję jako fakt
 *   z wymiarem, BEZ MORAŁU.
 * — ⚠⚠ ZERO GĘSTOŚCI I PRZESTRZENI KUCHNI — obszar
 *   zajęty wielokrotnie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ GOTOWEJ LISTY, CO WYRZUCIĆ — podaję
 *   WYŁĄCZNIE zasadę o wielkości odcinka.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o opróżnianiu szafek NIE MÓWIĘ NIC
 *   o terminach, przydatności ani przechowywaniu.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościół wyłącznie
 *   jako budowla i harmonogram robót.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO KATASTROFY I ZAGROŻENIA — zawalenie
 *   sklepień w 1963 podaję jako fakt budowlany,
 *   bez dramatyzowania, bez ofiar, bez okoliczności.
 * — ⚠⚠ ZERO POŻARU JAKO ŻYWIOŁU — daty pożarów podaję
 *   wyłącznie jako punkty na osi czasu.
 * — ⚠ ZERO DEMOGRAFII I WYLUDNIANIA.
 * — ⚠ ZERO SUPERLATYWÓW O OBWAROWANIU (10 ha).
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ ludności miasta co do osoby —
 *   źródło nie domyka się z gęstością.
 * — NIE PODAJĘ roku nadania praw miejskich —
 *   źródła podają tylko „przed 1298".
 * — NIE PODAJĘ, że Góra była największym obwarowanym
 *   miastem Dolnego Śląska — jedno źródło turystyczne.
 * — NIE PODAJĘ powierzchni obwarowanego terenu.
 * — NIE PODAJĘ datowania ani liczby kondygnacji
 *   Wieży Głogowskiej — źródła sprzeczne.
 * — NIE PODAJĘ dokładnej liczby baszt — 12 albo 13.
 * — NIE PODAJĘ wysokości wieży kościoła ani wymiarów
 *   nawy — nie ustalono.
 * — NIE PODAJĘ odsetka ludności powiatu.
 * — NIE PODAJĘ odległości drogowych — kalkulatory
 *   zwracały zera dla par z miastem Góra.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto Góra leży w powiecie górowskim i jest jego
 *   siedzibą; zajmuje 13,7 km², mieszka w nim około
 *   dziesięciu i pół tysiąca osób (GUS, 31.12.2024),
 *   a cała gmina miejsko-wiejska liczy ponad osiemnaście
 *   tysięcy mieszkańców na 266 km², z trzydziestoma
 *   sześcioma wsiami,
 * — miasto pojawia się w źródłach w połowie dwunastego
 *   wieku, a źródła nie podają roku nadania praw
 *   miejskich — mówią tylko, że lokacja nastąpiła
 *   przed 1298 rokiem,
 * — mury miejskie z kilkunastoma basztami wznoszono
 *   w latach 1375–1477; z czterech bram — Głogowskiej,
 *   Polskiej i dwóch mniejszych furt — rozebrano kolejno
 *   wieżę Bramy Polskiej w 1818, Bramę Polską w 1828
 *   i Bramę Głogowską w 1851; zachowała się Wieża
 *   Głogowska, wysoka na 38 m wraz z iglicą, stojąca
 *   na wykonanej z kamieni narzutowych podstawie
 *   wysokiej na półtora metra,
 * — kościół św. Katarzyny pojawia się w dokumentach
 *   w 1302 r.; poprzednia budowla spłonęła w 1457,
 *   obecną wznoszono w latach 1457–1552, a po częściowym
 *   zawaleniu sklepień i wieży zachodniej w 1963 r.
 *   odbudowa zajęła lata 1964–1965,
 * — wieżę ciśnień wzniesiono w 1915 r. i była w użyciu
 *   do 2013; kolej do Bojanowa otwarto w 1885 r.,
 *   a ruch zawieszono w 1992.
 */
export const GORA: CityContent = {
  slug: "gora",
  h1: "Thermomix Góra – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Góra — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Górze na Dolnym Śląsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Góra — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Górze na Dolnym Śląsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do miasta Góra z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzydziestu sześciu wsi w gminie.",

  highlights: highlightyStandardowe("Góra"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dziewięćdziesiąt pięć lat budowania, dwa lata odbudowy — i ani jednej nocy na zawalenie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Górze – jak wygląda prezentacja?",
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
      id: "czas-skladania",
      heading: "Rozebrać idzie szybciej, niż złożyć z powrotem",
      paragraphs: [
        "Górowski kościół świętej Katarzyny budowano dziewięćdziesiąt pięć lat — od 1457 do 1552 roku. W 1963 część jego sklepień i wieża zachodnia częściowo runęły. Postawienie tego z powrotem zajęło dwa lata: 1964 i 1965.",
        "Trzy liczby, trzy zupełnie różne skale czasu. I to jest dokładnie ta rzecz, której w kuchni nie umiemy policzyć.",
        "Warto przy tym rozróżnić dwie rzeczy, bo łatwo je pomylić. Rozbiórka planowa też bywa długa — górowskie bramy znikały przez trzydzieści trzy lata: najpierw wieża Bramy Polskiej w 1818 roku, potem sama brama w 1828, a Brama Głogowska dopiero w 1851. Ale zawalenie się nie planuje i nie trwa. Trwa to, co po nim.",
        "W kuchni planujemy zawsze tę krótszą stronę.",
        "„W sobotę wyjmę wszystko z szafek” — i to jest prawda, to rzeczywiście jedno popołudnie. Wyjęcie wszystkiego z trzech szafek zajmuje czterdzieści minut i człowiek ma wtedy poczucie, że robota idzie.",
        "Tylko że robotą nie było wyjmowanie.",
        "Robotą jest podjęcie decyzji o każdej pojedynczej rzeczy, która teraz stoi na podłodze. Znalezienie jej miejsca. Zdecydowanie, czy to miejsce jest sensowne. A w międzyczasie trzeba w tej kuchni gotować obiad, bo życie nie zatrzymuje się na czas porządków.",
        "Stąd bierze się stan, który zna każdy: rozbabrane na trzy tygodnie. Nie dlatego, że ktoś jest niekonsekwentny. Dlatego, że rozbieranie poszło zgodnie z planem, a składanie nie miało własnego planu — nikt mu nie przypisał ani godzin, ani kolejności.",
        "Reguła, która to rozwiązuje, jest jedna i brzmi banalnie: nie zaczynaj większego odcinka, niż domkniesz tego samego dnia.",
        "Jedna szafka domknięta bije trzy otwarte. Po jednej domkniętej kuchnia jest o jedną szafkę lepsza i w pełni używalna. Po trzech otwartych jest gorsza niż przed rozpoczęciem — i taka zostaje do następnej wolnej soboty.",
        "Uczciwie o drugiej stronie: czasem naprawdę trzeba rozebrać więcej naraz. Przy remoncie, przy przeprowadzce, przy wymianie zabudowy nie ma jak zrobić tego po kawałku. Wtedy jedyne, co można zrobić, to policzyć zawczasu — kuchnia będzie niezdatna tygodniami, nie dniami. To nie jest powód, żeby nie zaczynać. To powód, żeby się nie zdziwić w środku.",
        "Na koniec o urządzeniu, i tu powiem rzecz, która nie brzmi jak argument sprzedażowy, bo nim nie jest.",
        "Thermomix nie skraca porządków. Ani o godzinę. Skraca co innego: czas, przez który kuchnia jest rozbabrana przy zwykłym, codziennym gotowaniu — bo na blat wychodzi mniej naczyń i mniej rzeczy trzeba potem z powrotem poskładać. To nie to samo co porządki generalne i nie chcę udawać, że to samo.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Górze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o której zwykle jecie obiad w tygodniu. To zwykle wystarczy, żebym dobrała dania, które zdążymy zjeść razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Górze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Góry na Dolnym Śląsku",
      paragraphs: [
        "Miasto Góra jest siedzibą powiatu górowskiego. Zajmuje niecałe czternaście kilometrów kwadratowych i mieszka w nim około dziesięciu i pół tysiąca osób (GUS, 31.12.2024), a cała gmina miejsko-wiejska liczy ponad osiemnaście tysięcy mieszkańców na dwustu sześćdziesięciu sześciu kilometrach kwadratowych, z trzydziestoma sześcioma wsiami. W źródłach miasto pojawia się w połowie dwunastego wieku, natomiast roku nadania praw miejskich żadne ze źródeł nie podaje — mówią tylko, że lokacja nastąpiła przed 1298 rokiem, i nie zamierzam tu wpisywać daty, której nie ma. Mury miejskie z kilkunastoma basztami wznoszono w latach 1375–1477. Z czterech bram — Głogowskiej, Polskiej i dwóch mniejszych furt — rozbierano kolejno wieżę Bramy Polskiej w 1818 roku, samą Bramę Polską w 1828 i Bramę Głogowską w 1851. Została Wieża Głogowska: trzydzieści osiem metrów wraz z iglicą, na podstawie z kamieni narzutowych wysokiej na półtora metra. Kościół świętej Katarzyny pojawia się w dokumentach w 1302 roku, poprzednia budowla spłonęła w 1457, obecną wznoszono do 1552, a po częściowym zawaleniu sklepień i wieży zachodniej w 1963 odbudowa zajęła dwa kolejne lata. Wieżę ciśnień postawiono w 1915 roku i służyła do 2013 — blisko sto lat. Kolej do Bojanowa otwarto w 1885 roku, ruch zawieszono w 1992.",
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

  districtsHeading: "Do których części miasta Góra dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu sześciu wsi w gminie — a gmina jest duża, dwieście sześćdziesiąt sześć kilometrów kwadratowych. Do najdalszych miejscowości też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza miasto Góra też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam też do Wąsosza, drugiego miasta powiatu górowskiego, oraz do Rawicza, Leszna, Głogowa i Ścinawy. Wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Wąsosz", "Rawicz", "Leszno", "Głogów", "Ścinawa"],

  about: blokOMnie("do miasta Góra", "w Górze i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do miasta Góra bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu sześciu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Górę w powiecie górowskim na Dolnym Śląsku — nie o Kamienną Górę, Jelenią Górę ani Zieloną Górę. Na kolei ta sama stacja bywa podpisana jako Góra Śląska, choć urzędowa nazwa miasta brzmi po prostu Góra. Wsie o tej nazwie leżą też w kilku innych województwach, więc przy umawianiu warto dodać powiat.",
    },
    ...faqWspolne("w Górze"),
    {
      question: "Chcę zrobić porządek w kuchni i zawsze kończy się bałaganem na tygodnie. Dlaczego?",
      answer:
        "Bo planujemy czas rozbierania, a zajmuje nas czas składania. Górowski kościół świętej Katarzyny budowano dziewięćdziesiąt pięć lat, a po zawaleniu części sklepień w 1963 roku odbudowa zajęła dwa lata — rozbierania nikt nie planował, planować trzeba było to, co po nim. W kuchni działa jedna reguła: nie zaczynaj większego odcinka, niż domkniesz tego samego dnia. Jedna szafka domknięta jest warta więcej niż trzy otwarte.",
    },
    {
      question: "Czy Thermomix skraca sprzątanie kuchni?",
      answer:
        "Porządków generalnych nie skraca wcale i nie będę twierdzić inaczej. Skraca co innego: przy codziennym gotowaniu na blat wychodzi mniej naczyń, więc kuchnia krócej jest rozbabrana po zwykłym obiedzie. To dwie różne rzeczy i warto je liczyć osobno.",
    },
  ],

  geo: { lat: 51.6667, lng: 16.5333 },
};
