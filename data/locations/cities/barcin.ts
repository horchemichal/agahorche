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
 * BARCIN — powiat żniński, woj. kujawsko-pomorskie,
 * PAŁUKI, nad Notecią.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 6 869 mieszkańców (GUS 31.12.2024),
 * ⚠ 3,7 KM² — NAJMNIEJSZA POWIERZCHNIA MIASTA
 *   Z CAŁEJ TEJ FALI.
 * CAŁA GMINA MIEJSKO-WIEJSKA: 14 078 osób, 120,9 km²,
 * 20 miejscowości w 15 sołectwach.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ BARCIN, ale ISTNIEJE
 *   ODRĘBNA WIEŚ „BARCIN-WIEŚ" w tej samej gminie —
 *   TO NIE JEST DZIELNICA MIASTA. TWARDA GRANICA.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ ZAWYŻENIE: barcin.pl podaje „około 14 680 osób"
 *   w gminie (+4,3% wobec GUS). Powierzchnia z tej samej
 *   strony (12 088 ha) ZGADZA SIĘ z GUS. UŻYWAM GUS
 *   dla ludności.
 * ⚠ ODMIANA: D. BARCINA, Ms. W BARCINIE,
 *   przym. BARCIŃSKI, mieszkaniec BARCINIANIN —
 *   forma poświadczona w tytule prasowym.
 * ⚠⚠ NIE UŻYWAM NIEMIECKICH NAZW MIASTA.
 * ⚠ RYZYKO POMYLENIA: BARCINEK (dolnośląskie),
 *   BARCIANY i BARCZEWO (warmińsko-mazurskie),
 *   oraz BARCIN-WIEŚ w tej samej gminie.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1325 r. — pierwsza wzmianka pisana
 *   ⚠ inne źródło podaje 1390 — ZAZNACZAM ROZBIEŻNOŚĆ.
 * — ⚠ 1472 R. — PRZYWILEJ TARGOWO-JARMARCZNY,
 *   a PRAWA MIEJSKIE DOPIERO 12 CZERWCA 1541 R.
 *   (data dzienna). Miasto targowało 69 LAT, ZANIM
 *   ZOSTAŁO MIASTEM.
 * — 24 STYCZNIA 1671 R. — Michał Korybut Wiśniowiecki
 *   odnawia przywileje miasta (data dzienna).
 * — 1635 — Władysław IV potwierdza przywilej targowy.
 * — LUDNOŚĆ HISTORYCZNA: 1772 — 267 mieszkańców;
 *   około 1890 po raz pierwszy przekroczono tysiąc.
 * — ⚠⚠⚠ RDZEŃ KĄTA — WAPIENNICTWO:
 *   1858 — odkrycie złóż w Wapiennie i Bielawach
 *   PRZY WIERCENIU NOWEJ STUDNI, gdzie „natrafiono
 *   na przeszkodę nie do pokonania"
 *   ⚠ inne źródło datuje odkrycie na koniec XVIII w. —
 *   ZAZNACZAM ROZBIEŻNOŚĆ;
 *   1860 — rozpoczęcie eksploatacji;
 *   ⚠ 1864 — PIERWSZY PIEC KRĘGOWY HOFFMANNA w Wapiennie;
 *   1882–1910 — kolejne piece, RAZEM DZIEWIĘĆ,
 *   każdy z PODWÓJNYM PALENISKIEM, po OK. 30 TON DZIENNIE;
 *   ⚠⚠ W LATACH 30. XX W. SAMA ZMIANA SYSTEMU OPALANIA
 *   PODNIOSŁA ŁĄCZNĄ WYDAJNOŚĆ TYCH SAMYCH DZIEWIĘCIU
 *   PIECÓW DO OK. 300 TON DZIENNIE — dziesięciokrotnie,
 *   bez budowania czegokolwiek nowego. TO JEST CAŁY
 *   FUNDAMENT KĄTA;
 *   1909 — modernizacja kamieniołomu: wyciągi elektryczne,
 *   młoty pneumatyczne, sprężarki; wydobycie 160 tys. ton
 *   rocznie; własna elektrownia.
 *   ⚠ ARYTMETYKA ŹRÓDŁA SIĘ NIE DOMYKA (sześć w Piechcinie
 *   + dwa w Wapiennie = osiem, a mowa o dziewięciu) —
 *   PODAJĘ TYLKO „DZIEWIĘĆ PIECÓW", BEZ ROZBICIA.
 *   TWARDA GRANICA.
 * — region nazywany „Białym Zagłębiem", tradycja ponad
 *   165 lat.
 * — 1889 — linia kolejowa Inowrocław–Wągrowiec.
 * — kościół z 1901 r., neogotycki, wieża ok. 50 m
 *   ⚠ WYMIENIAM WYŁĄCZNIE JAKO WYSOKOŚĆ I DATĘ.
 * — struktura gruntów gminy: użytki rolne 76%, lasy 9,6%.
 * — Piechcin — 2 600 mieszkańców, druga co do wielkości
 *   miejscowość gminy.
 * — NOTEĆ przepływa przez Barcin.
 *   ⚠ DANYCH O PORCIE, PRZEŁADUNKU I ŚLUZACH NIE USTALONO.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Barcin. Sprawdzono pełną listę wojewódzką —
 *   żadna pozycja nie wskazuje Barcina, Piechcina, Wolic
 *   ani Sadłogoszczy. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 * ⚠ SPISÓW RZEMIEŚLNIKÓW, DNI TARGOWYCH, LICZBY DOMÓW
 *   I WYMIARÓW RYNKU NIE USTALONO — NIE ZGADUJĘ.
 *
 * KĄT: DRUGA PARTIA — dlaczego pierwsza blacha wychodzi
 * najgorzej.
 * Kąt od pieca kręgowego: w takim piecu ogień wędruje
 * po komorach i nigdy nie gaśnie — a w latach 30. sama
 * zmiana sposobu palenia dała dziesięciokrotny wzrost
 * na tych samych dziewięciu piecach. Największy zysk nie
 * wziął się z nowego sprzętu, tylko z nieprzerwania ciepła.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1864 roku stanął tu pierwszy piec kręgowy
 *   Hoffmanna, a do 1910 było ich dziewięć, każdy
 *   z podwójnym paleniskiem i wydajnością około trzydziestu
 *   ton dziennie,
 * — ⚠⚠ ŻE W LATACH 30. SAMA ZMIANA SYSTEMU OPALANIA
 *   PODNIOSŁA ŁĄCZNĄ WYDAJNOŚĆ TYCH SAMYCH DZIEWIĘCIU
 *   PIECÓW DO OKOŁO TRZYSTU TON DZIENNIE — dziesięć razy
 *   więcej, bez budowania czegokolwiek nowego,
 * — ŻE SEDNEM PIECA KRĘGOWEGO JEST TO, ŻE OGIEŃ WĘDRUJE
 *   PO KOMORACH I NIGDY NIE GAŚNIE: gdy jedna komora
 *   stygnie, druga już się nagrzewa tym samym ciepłem,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA DOKŁADNIE TA SAMA ZASADA
 *   I ŻE WIDAĆ JĄ NA PIERWSZEJ BLASZE — TO JEST RDZEŃ,
 * — CO KONKRETNIE SIĘ DZIEJE:
 *   — PIERWSZA PARTIA NALEŚNIKÓW ALBO PLACKÓW prawie
 *     zawsze wychodzi najgorzej, bo patelnia jeszcze
 *     nie doszła do swojej temperatury
 *     ⚠ ODSYŁAM DO STRONY O CIEŚCIE NALEŚNIKOWYM,
 *     NIE ROZWIJAM,
 *   — KAŻDA NOWA PORCJA WRZUCONA NA PATELNIĘ JĄ WYCHŁADZA
 *     — im zimniejszy produkt i im więcej go naraz, tym
 *     głębszy spadek,
 *   — PATELNIA POTRZEBUJE CHWILI, ŻEBY WRÓCIĆ — i to jest
 *     ten moment, którego nikt nie czeka,
 *   — PIEKARNIK OTWIERANY CO CHWILĘ traci ciepło tak samo,
 * — ⚠⚠ ŻE Z TEGO WYNIKAJĄ TRZY PRAKTYCZNE RZECZY:
 *   — pierwszą partię traktować jako próbną i nie wyciągać
 *     z niej wniosków o przepisie,
 *   — nie kłaść za dużo naraz, bo wtedy spadek jest
 *     największy ⚠ ODSYŁAM DO STRONY O ROZMIARZE NACZYNIA,
 *   — dać patelni wrócić między partiami — kilkanaście
 *     sekund nicnierobienia zwykle daje więcej niż
 *     podkręcenie ognia,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix ten problem w dużej
 *   części omija, bo gotuje w zamkniętym naczyniu
 *   z pilnowaną temperaturą — nie ma partii i nie ma
 *   wychładzania. ALE WSZYSTKO, CO SIĘ SMAŻY NA PATELNI
 *   I PIECZE W PIEKARNIKU, DZIAŁA PO STAREMU I URZĄDZENIE
 *   NIC TU NIE ZMIENIA. Mówię to wprost, bo to jest
 *   dokładnie ta granica, której na pokazach się nie
 *   rysuje.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ WAPNO WYŁĄCZNIE JAKO CHEMIA I TECHNOLOGIA
 *   PRZEMYSŁOWA. Wapno palone jest silnie żrące, a gaszenie
 *   wapna wydziela dużo ciepła — NIGDY NIE SUGERUJĘ
 *   KUCHENNEGO ZASTOSOWANIA WAPNA BUDOWLANEGO ani jednym
 *   słowem. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO PIEKARNIKA JAKO TEMATU — kąt zajęty.
 *   Piekarnik pojawia się w JEDNYM zdaniu jako analogia.
 * — ⚠⚠ ZERO CIASTA NALEŚNIKOWEGO JAKO TEMATU — kąt zajęty
 *   (Cieszanów). Odsyłam jednym zdaniem.
 * — ⚠ ZERO ROZMIARU NACZYNIA — kąt zajęty (Żnin).
 *   Odsyłam jednym zdaniem.
 * — ⚠ ZERO RUMIENIENIA — kąt zajęty (Iłża).
 * — ⚠ ZERO PROGU TEMPERATURY JAKO OSOBNEGO TEMATU —
 *   za blisko rumienienia. Piszę o POWROCIE DO TEMPERATURY
 *   MIĘDZY PARTIAMI, nie o progu, od którego coś się zaczyna.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I KONCERNÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ZBRODNI NIEMIECKICH 1939–1945. To jest
 *   PIERWSZA RZECZ, jaką podają o Barcinie źródła
 *   encyklopedyczne po akapicie wstępnym: egzekucje
 *   z 1939 r., zbrodnia katyńska, zmiana nazwy miasta
 *   w 1943 r. TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ. Portale poświęcone
 *   tej historii mają osobne hasło dla Barcina.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO WĄTKU ŚRODOWISKOWEGO I CEMENTOWNI: pylenie,
 *   hałas, odstrzały w kamieniołomie, postępowania
 *   środowiskowe, skargi mieszkańców. Nazwy koncernu
 *   NIE PODAJĘ. TWARDA GRANICA.
 * — ⚠⚠ ZERO DEPOPULACJI (−13,7%, najwyższa z tej fali).
 * — ZERO Braci Czeskich i wątków wyznaniowych.
 * — ZERO niemieckich nazw miasta.
 * — ZERO głębokości zalanego kamieniołomu (nie ustalono,
 *   a temat prowadzi do wypadków).
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CIEPŁE NA STÓŁ" (Węgrów) dotyczy STYGNIĘCIA DANIA
 *   MIĘDZY KUCHNIĄ A STOŁEM. ⚠ TUTAJ chodzi o STYGNIĘCIE
 *   NACZYNIA W TRAKCIE SMAŻENIA.
 * — „CIASTO NALEŚNIKOWE" (Cieszanów) dotyczy SAMEGO CIASTA.
 *   Odsyłam tam wprost.
 * — „RUMIENIENIE" (Iłża) dotyczy KOLORU.
 * — „ZA DUŻE NACZYNIE" (Żnin) dotyczy ROZMIARU NACZYNIA
 *   WZGLĘDEM ILOŚCI. Odsyłam tam wprost.
 * — „ZA CZWARTYM RAZEM" (Koronowo) dotyczy KOLEJNYCH PODEJŚĆ
 *   DO PRZEPISU INNEGO DNIA. ⚠ TUTAJ chodzi o KOLEJNE
 *   PARTIE TEGO SAMEGO DANIA, w ciągu jednego smażenia.
 * TUTAJ chodzi o TO, ŻE NACZYNIE STYGNIE MIĘDZY PARTIAMI
 * I POTRZEBUJE CHWILI, ŻEBY WRÓCIĆ.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE MYLĘ miasta z Barcinem-Wsią.
 * — NIE PODAJĘ rozbicia dziewięciu pieców na lokalizacje.
 * — NIE ROZSTRZYGAM daty pierwszej wzmianki ani daty
 *   odkrycia złóż — zaznaczam rozbieżności.
 * — NIE SUGERUJĘ kuchennego użycia wapna.
 * — NIE PODAJĘ nazw firm.
 * — NIE PODAJĘ spisów rzemieślników — nie ustalono.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Barcin leży na Pałukach nad Notecią, jest miastem
 *   w gminie miejsko-wiejskiej i liczy 6 869 mieszkańców
 *   (GUS, 31.12.2024) na 3,7 km²; cała gmina ma 14 078 osób
 *   na 120,9 km², w dwudziestu miejscowościach i piętnastu
 *   sołectwach, a użytki rolne zajmują 76% jej powierzchni,
 * — pierwsza wzmianka pisana pochodzi z 1325 roku, choć
 *   inne źródło podaje 1390; przywilej targowo-jarmarczny
 *   miasto dostało w 1472 roku, a prawa miejskie dopiero
 *   12 czerwca 1541 — targowało więc sześćdziesiąt dziewięć
 *   lat, zanim zostało miastem; Władysław IV potwierdził
 *   przywilej targowy w 1635 roku, a Michał Korybut
 *   Wiśniowiecki odnowił przywileje 24 stycznia 1671,
 * — w 1772 roku mieszkało tu dwustu sześćdziesięciu siedmiu
 *   ludzi, a tysiąc przekroczono dopiero około 1890 roku,
 * — w 1858 roku, przy wierceniu nowej studni, natrafiono
 *   tu na złoża wapienia — „na przeszkodę nie do pokonania";
 *   eksploatację zaczęto w 1860, a w 1864 stanął pierwszy
 *   piec kręgowy Hoffmanna. Do 1910 roku pracowało
 *   dziewięć pieców, każdy z podwójnym paleniskiem
 *   i wydajnością około trzydziestu ton dziennie.
 *   W latach trzydziestych sama zmiana systemu opalania
 *   podniosła ich łączną wydajność do około trzystu ton
 *   dziennie. W 1909 roku zmodernizowano kamieniołom —
 *   wyciągi elektryczne, młoty pneumatyczne i sprężarki
 *   podniosły wydobycie do stu sześćdziesięciu tysięcy ton
 *   rocznie, a zakład dostał własną elektrownię,
 * — okolicę nazywa się Białym Zagłębiem, a tradycja
 *   wapiennicza liczy tu ponad sto sześćdziesiąt pięć lat,
 * — linia kolejowa Inowrocław–Wągrowiec powstała w 1889
 *   roku, a neogotycki kościół z wieżą wysokości około
 *   pięćdziesięciu metrów — w 1901.
 */
export const BARCIN: CityContent = {
  slug: "barcin",
  h1: "Thermomix Barcin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Barcin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Barcinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Barcin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Barcinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Barcina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Barcin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dziesięć razy więcej z tych samych dziewięciu pieców — bo ciepło przestało się przerywać.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Barcinie – jak wygląda prezentacja?",
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
      id: "druga-partia",
      heading: "Ogień, który wędruje po komorach",
      paragraphs: [
        "Złoża wapienia odkryto pod Barcinem w 1858 roku przypadkiem — przy wierceniu nowej studni natrafiono, jak podaje źródło, „na przeszkodę nie do pokonania”. Eksploatację zaczęto dwa lata później, a w 1864 roku stanął tu pierwszy piec kręgowy Hoffmanna. Do 1910 roku pracowało ich dziewięć, każdy z podwójnym paleniskiem i wydajnością około trzydziestu ton dziennie.",
        "A potem, w latach trzydziestych, stała się rzecz, która mnie w tej historii zatrzymała. Sama zmiana systemu opalania podniosła łączną wydajność tych samych dziewięciu pieców do około trzystu ton dziennie. Dziesięć razy więcej. Bez budowania czegokolwiek nowego.",
        "Sedno pieca kręgowego polega na tym, że ogień wędruje po komorach i nigdy nie gaśnie. Kiedy jedna komora stygnie, druga już się nagrzewa tym samym ciepłem. Nic się nie zaczyna od zera.",
        "W kuchni działa dokładnie ta sama zasada i widać ją na pierwszej blasze.",
        "Pierwsza partia naleśników albo placków prawie zawsze wychodzi najgorzej — bo patelnia jeszcze nie doszła do swojej temperatury. Wszyscy to wiemy i prawie wszyscy uznajemy to za wadę przepisu albo własnej ręki. A to po prostu zimne żeliwo. O samym cieście naleśnikowym pisałam osobno przy innym mieście.",
        "Druga rzecz jest mniej oczywista: każda nowa porcja wrzucona na patelnię ją wychładza. Im zimniejszy produkt i im więcej go naraz, tym głębszy spadek — i tym dłużej trwa powrót. Dlatego przeładowana patelnia daje duszone zamiast smażonego; pisałam o tym osobno, przy rozmiarze naczynia.",
        "I trzecia: patelnia potrzebuje chwili, żeby wrócić. To jest ten moment, którego nikt nie czeka. Piekarnik otwierany co chwilę traci ciepło tak samo.",
        "Wynikają z tego trzy rzeczy, wszystkie do zrobienia od razu. Pierwszą partię traktować jako próbną i nie wyciągać z niej wniosków o przepisie — ona służy do tego, żeby patelnia doszła. Nie kłaść za dużo naraz, bo wtedy spadek jest największy. I dać naczyniu wrócić między partiami: kilkanaście sekund nicnierobienia zwykle daje więcej niż podkręcenie ognia, bo podkręcony ogień grzeje dno, a nie całą masę.",
        "Uczciwie o sprzęcie i bez owijania. Thermomix ten problem w dużej części omija, bo gotuje w zamkniętym naczyniu z pilnowaną temperaturą — nie ma partii, więc nie ma wychładzania.",
        "Ale wszystko, co się smaży na patelni i piecze w piekarniku, działa po staremu i urządzenie nie zmienia w tym absolutnie nic. To jest dokładnie ta granica, której na pokazach się nie rysuje, a którą warto znać przed zakupem, a nie po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Barcinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz wiedzieć, co zostaje przy patelni, a co przechodzi do urządzenia — powiedz to przy umawianiu. To dobra rzecz do przejścia na spokojnie, zanim cokolwiek zdecydujesz.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Barcinie"),
    sekcjaRaty("w Barcinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla barcińskiej rodziny",
      paragraphs: [
        "Barcin leży na Pałukach nad Notecią, jest miastem w gminie miejsko-wiejskiej i liczy blisko siedem tysięcy mieszkańców na zaledwie trzech i siedmiu dziesiątych kilometra kwadratowego; cała gmina ma ponad czternaście tysięcy osób w dwudziestu miejscowościach i piętnastu sołectwach, a użytki rolne zajmują trzy czwarte jej powierzchni. Pierwsza wzmianka pisana pochodzi z 1325 roku, choć inne źródło podaje 1390. Przywilej targowo-jarmarczny miasto dostało w 1472 roku, a prawa miejskie dopiero 12 czerwca 1541 — targowało więc sześćdziesiąt dziewięć lat, zanim zostało miastem; Władysław IV potwierdził przywilej targowy w 1635 roku, a Michał Korybut Wiśniowiecki odnowił przywileje 24 stycznia 1671. W 1772 roku mieszkało tu dwustu sześćdziesięciu siedmiu ludzi, a tysiąc przekroczono dopiero około 1890. W 1858 roku, przy wierceniu studni, natrafiono na złoża wapienia; eksploatację zaczęto w 1860, a w 1864 stanął pierwszy piec kręgowy Hoffmanna — do 1910 roku pracowało ich dziewięć. W 1909 zmodernizowano kamieniołom, co podniosło wydobycie do stu sześćdziesięciu tysięcy ton rocznie. Okolicę nazywa się Białym Zagłębiem, a tradycja wapiennicza liczy tu ponad sto sześćdziesiąt pięć lat. Linia kolejowa Inowrocław–Wągrowiec powstała w 1889 roku, neogotycki kościół z wieżą wysokości około pięćdziesięciu metrów — w 1901.",
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

  districtsHeading: "Do których części Barcina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — jest niewielkie, niecałe cztery kilometry kwadratowe, więc dojazd wszędzie zajmuje tyle samo. Dojeżdżam też do wszystkich sołectw gminy, w tym do Piechcina.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Barcin też przyjadę",
  nearbyParagraphs: [
    "Pakość, Janikowo, Łabiszyn, Żnin, Mogilno, Inowrocław i Szubin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pakość", "Janikowo", "Łabiszyn", "Żnin"],

  about: blokOMnie("do Barcina", "w Barcinie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Barcina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw gminy, w tym do Piechcina. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Barcin jest miastem w gminie miejsko-wiejskiej, a Barcin-Wieś to osobna miejscowość w tej samej gminie — do obu przyjeżdżam tak samo.",
    },
    ...faqWspolne("w Barcinie"),
    {
      question: "Dlaczego pierwsza partia naleśników zawsze wychodzi najgorzej?",
      answer:
        "Bo patelnia nie doszła jeszcze do swojej temperatury. To nie jest wada przepisu ani ręki — to zimne żeliwo. Warto traktować pierwszą partię jako próbną i nie wyciągać z niej wniosków; ona służy właśnie do tego, żeby naczynie doszło.",
    },
    {
      question: "Czy Thermomix rozwiązuje problem stygnącej patelni?",
      answer:
        "Przy tym, co gotuje sam — tak, bo pracuje w zamkniętym naczyniu z pilnowaną temperaturą, więc nie ma partii i nie ma wychładzania. Ale wszystko, co się smaży na patelni i piecze w piekarniku, działa po staremu i urządzenie nie zmienia w tym nic. Mówię to wprost, bo to jest granica, którą lepiej znać przed zakupem.",
    },
  ],

  geo: { lat: 52.8661, lng: 17.9464 },
};
