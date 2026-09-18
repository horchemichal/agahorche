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
 * JELCZ-LASKOWICE — powiat oławski,
 * woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ (gmina ZAWIERA
 *   miasto; NIE MA odrębnej gminy wiejskiej o tej
 *   nazwie).
 * MIASTO: 14 949 mieszkańców (GUS 31.12.2024), 17,1 km²,
 *   gęstość 876,3 os./km².
 * CAŁA GMINA: 23 752 osoby, 167,7 km².
 * ⚠⚠ NIE MIESZAM TYCH LICZB. TWARDA GRANICA.
 * ⚠⚠⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — źródło
 *   zapowiada 18, a wymienia 17. Piszę „wsie w gminie".
 * ⚠ GEO: 51,0213 / 17,316.
 * ⚠⚠ PUŁAPKA SĄSIEDNIA: W POWIECIE OŁAWSKIM ISTNIEJE
 *   ODRĘBNA GMINA WIEJSKA OŁAWA obok miasta Oława.
 *   Przy researchu łatwo podstawić jej dane.
 *
 * ⚠⚠⚠ ODMIANA — SPRAWDZONA W PORADNI JĘZYKOWEJ UŁ:
 *   D. JELCZA-LASKOWIC, Ms. W JELCZU-LASKOWICACH.
 *   ⚠⚠ ODMIENIAJĄ SIĘ OBA CZŁONY: pierwszy jak
 *   rzeczownik rodzaju męskiego w liczbie pojedynczej
 *   (Jelcz → Jelcza), drugi jak rzeczownik w liczbie
 *   mnogiej (Laskowice → Laskowic, Laskowicach).
 *   ⚠⚠⚠ TO NAJTRUDNIEJSZA GRAMATYCZNIE NAZWA
 *   W CAŁYM SERWISIE — jeden człon w liczbie
 *   pojedynczej, drugi w mnogiej.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   nieustalone. Piszę „dla rodziny z Jelcza-Laskowic".
 *
 * ⚠⚠ HOMONIM: JELCZ ≠ marka pojazdów Jelcz (spółka
 *   działa do dziś) ≠ JELENIA GÓRA.
 *   LASKOWICE — nazwa bardzo pospolita: Laskowice
 *   Pomorskie (kujawsko-pomorskie, węzeł kolejowy),
 *   Laskowice w opolskim, śląskim i wielkopolskim;
 *   historyczna nazwa TEGO miejsca to Laskowice Oławskie.
 *   ⚠ W gminie są MIŁOCICE i MIŁOCICE MAŁE (para)
 *   oraz MINKOWICE OŁAWSKIE i BISKUPICE OŁAWSKIE —
 *   dwie wsie z przymiotnikiem „Oławskie" w gminie,
 *   która NIE jest gminą Oława.
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠⚠ POWSTANIE MIASTA — MECHANIZM INNY NIŻ
 *   W BOGUSZOWIE-GORCACH (ta sama fala!):
 *   Laskowice wzmiankowane 1203, Jelcz 1245 (42 lata
 *   różnicy). W 1987 POŁĄCZONO DWIE WSIE i JEDNOCZEŚNIE
 *   NADANO POWSTAŁEJ CAŁOŚCI PRAWA MIEJSKIE.
 *   ⚠⚠⚠ ANI JELCZ, ANI LASKOWICE NIGDY WCZEŚNIEJ
 *   NIE BYŁY MIASTAMI. To odwrotność Boguszowa-Gorc,
 *   gdzie łączono istniejące miasta.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — „miasto z dwóch
 *   członów" byłoby bliźniacze z Boguszowem-Gorcami.
 *   Podaję jako fakt.
 * — 1268 — zamek na wyspie pośrodku Odry, na skraju
 *   Jelcza; funkcjonował do końca XVII w.
 *   ⚠ Inne źródło datuje go „XIV–XIX w." — SPRZECZNE.
 *   PODAJĘ ROK BUDOWY 1268 (zgodny) i nic więcej.
 * — Od 1508 zamek należał do Sauermanów.
 * — 1909 — linia kolejowa do Laskowic.
 *
 * ⚠⚠⚠ ETYKA — WĄTEK POMINIĘTY W CAŁOŚCI:
 *   ŹRÓDŁA PODAJĄ ROK 1943 I ZAKŁADY ZBROJENIOWE
 *   JAKO POPRZEDNIKA FABRYKI. ⚠⚠⚠ ZERO TEGO WĄTKU.
 *   Wszystkie dane dotyczą wyłącznie produkcji cywilnej
 *   od 1952 r. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * FABRYKA — FAKTY UŻYTE (wyłącznie część cywilna):
 * — 15 marca 1952 — powstanie Jelczańskich Zakładów
 *   Samochodowych. 1 stycznia 1958 — oficjalna nazwa.
 * — 6 grudnia 1958 — umowa licencyjna na Škodę-Karosę
 *   706 RTO. Grudzień 1959 — produkcja seryjna
 *   Jelcza 043, zwanego „ogórkiem".
 * — 1960 — około 100 autobusów międzymiastowych.
 * — 1973 — szczyt produkcji: 2 861 autobusów w jednym
 *   roku. 1983 — koniec produkcji Jelcza 043.
 * — 1988 — struktura produkcji: M11 950 szt.,
 *   PR110D 606, L11 519, PR110M 200.
 * — 2008 — zaprzestanie produkcji autobusów;
 *   ostatni rok: 32 sztuki.
 * — Produkcja autobusów 1959–2008: łącznie ponad
 *   61 000 sztuk.
 * — ⚠⚠ UPADŁOŚCI DYWIZJI AUTOBUSOWEJ (2005)
 *   NIE UŻYWAM JAKO WĄTKU — to upadek firmy.
 *   Podaję sam rok zakończenia produkcji.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — POJEMNOŚĆ AUTOBUSÓW:
 *   JELCZ PR110: DŁUGOŚĆ 12 M, POJEMNOŚĆ 110 OSÓB,
 *   W TYM TYLKO 36 NA MIEJSCACH SIEDZĄCYCH.
 *   ⚠⚠ CZYLI 74 OSOBY STOJĄCE NA 36 SIEDZĄCYCH —
 *   dwie trzecie pasażerów stoi. To jest cały kąt.
 *   ⚠ Dla porównania Jelcz 043 „ogórek": 10 870 mm
 *   długości, 2 500 mm szerokości.
 *   ⚠⚠ LICZBY MIEJSC W „OGÓRKU" (46 siedzących
 *   + 5 stojących + 2 obsługi) NIE PODAJĘ —
 *   „5 stojących" jest podejrzanie niskie jak
 *   na autobus miejski, źródło niepewne.
 *   ⚠⚠⚠ ZESTAWIENIA „10 % DŁUŻSZY, DWA RAZY
 *   POJEMNIEJSZY" NIE UŻYWAM — opiera się na
 *   niepewnej liczbie miejsc w „ogórku", a morał
 *   „pojemność z odejmowania" jest zajęty
 *   (Strzegom: z granitu się tylko odejmuje;
 *   Nowe Warpno: pojemność kontra gabaryt).
 *   TWARDA GRANICA.
 *
 * PRZYRODA I ZABYTKI — FAKTY UŻYTE:
 * — Pałac w Jelczu: 1886–1894, zastąpił XVII-wieczny
 *   drewniany budynek myśliwski; park w stylu
 *   angielskim o powierzchni 9,5 ha, z dawną oranżerią.
 *   ⚠ WYMIARÓW PAŁACU NIE USTALONO.
 * — Rezerwat Łacha Jelcz: 6,9 ha, w starorzeczu Odry.
 * — ⚠ KOŚCIOŁÓW NIE OPISUJĘ — wątek wyznaniowy.
 * — POMNIKI PRZYRODY (10 w gminie), z obwodami pni:
 *   dąb szypułkowy „Słowianin" w Dębinie — 706 cm
 *   obwodu, ok. 25 m wysokości, chroniony od 1979;
 *   dąb w Jelczu-Laskowicach — 655 cm, 23 m, od 1965;
 *   lipa „Matczyna Lipa" w Jelczu-Laskowicach —
 *   450 cm, 20 m, od 1997; dwa dęby w Nowym Dworze —
 *   635 i 548 cm, od 1964; grupa 13 drzew w Miłocicach
 *   (3 dęby, 6 jesionów, 4 lipy), obwody 140–320 cm,
 *   od 1982; głaz narzutowy w Grędzinie — obwód 520 cm.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — „obwód pnia jako
 *   zapis czasu, powtarzanie bez wydarzeń" prowadzi
 *   w obszar zajęty (Chojna: co rośnie niezauważalnie).
 *   Podaję jako fakty.
 *   ⚠ „SŁOWIANIN" ROŚNIE W DĘBINIE — nazwa wsi i nazwa
 *   gatunku mają ten sam rdzeń, uważać przy redakcji.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: gmina
 *   Jelcz-Laskowice NIE MA ani jednego z 52 wpisów.
 *   ⚠⚠⚠ NIE PISZĘ TEGO W TEKŚCIE. TEMAT NIE POJAWIA SIĘ.
 *   ⚠⚠⚠ PUŁAPKA REALNA: „Ryczyński miód lipowy"
 *   (wpis 21.04.2016) pochodzi z RYCZYNA W GMINIE OŁAWA
 *   — TEN SAM POWIAT, INNA GMINA.
 *   NIE PRZYPISUJĘ GO JELCZOWI-LASKOWICOM.
 * ⚠ ODLEGŁOŚCI: Czernica 8,3 km, Oława 11,6,
 *   Siechnice 15,1, Bierutów 15,8, Oleśnica 19,3.
 *   ⚠ TO ODLEGŁOŚCI MIĘDZY SIEDZIBAMI GMIN.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: TRZYDZIEŚCI SZEŚĆ MIEJSC NA STO DZIESIĘĆ OSÓB —
 * o tym, że przy planowaniu spotkania liczy się liczba
 * miejsc przy stole, a nie liczba zaproszonych.
 * Kąt od autobusu PR110: mieścił sto dziesięć osób,
 * z czego trzydzieści sześć siedziało. Ktoś tak
 * zaprojektował, świadomie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że produkowany tu Jelcz PR110 miał dwanaście metrów
 *   długości i mieścił sto dziesięć osób, z czego
 *   trzydzieści sześć na miejscach siedzących,
 * — ŻE TO BYŁA DECYZJA, NIE PRZYPADEK: konstruktor
 *   wiedział, że dwie trzecie pasażerów pojedzie stojąc,
 *   i uznał to za właściwe dla trasy miejskiej.
 *   To jest rdzeń,
 * — ⚠⚠ ŻE PRZY ZAPRASZANIU LUDZI DO DOMU NIKT TAKIEJ
 *   DECYZJI ŚWIADOMIE NIE PODEJMUJE. Liczymy, ile osób
 *   zapraszamy, i to jest jedyna liczba, jaką mamy.
 *   Ile z nich usiądzie, okazuje się dopiero przy stole,
 * — ⚠⚠ ŻE TO JEST NAJCZĘSTSZY POWÓD, DLA KTÓREGO
 *   DOMOWE SPOTKANIA SIĘ SYPIĄ — nie jedzenie
 *   i nie gospodarze, tylko to, że część gości stoi
 *   przez trzy godziny, a nikt tego nie zaplanował,
 * — ⚠⚠ ŻE ROZWIĄZANIE NIE POLEGA NA DOSTAWIANIU
 *   KRZESEŁ W OSTATNIEJ CHWILI, TYLKO NA ODWRÓCENIU
 *   KOLEJNOŚCI: najpierw policzyć miejsca, potem
 *   ustalić liczbę zaproszeń. Albo świadomie przyjąć,
 *   że to spotkanie na stojąco — i wtedy zupełnie
 *   inaczej wygląda jedzenie, które się podaje,
 * — ⚠⚠ ŻE PR110 BYŁ POD TYM WZGLĘDEM UCZCIWY:
 *   miał trzydzieści sześć miejsc i nikt nie udawał,
 *   że będzie ich więcej. Wiadomo było, na co się
 *   wsiada,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: SPOTKANIE NA STOJĄCO
 *   NIE JEST GORSZE. Bywa swobodniejsze i krótsze,
 *   a ludzie więcej ze sobą rozmawiają. Chodzi
 *   wyłącznie o to, żeby to była decyzja, a nie skutek
 *   uboczny,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie dostawi
 *   krzeseł i nie ma z tym nic wspólnego. Przy większej
 *   liczbie gości zmienia natomiast jedno: część pracy
 *   da się zrobić wcześniej i bez pilnowania, więc
 *   gospodarz częściej siedzi przy stole razem z nimi.
 *   MÓWIĘ TO WPROST i wąsko.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno). ⚠⚠ Zestawienia długości autobusu
 *   z liczbą pasażerów NIE UŻYWAM jako morału.
 * — ⚠⚠⚠ ZERO ODEJMOWANIA I WYKREŚLANIA — kąt zajęty
 *   (Strzegom). Nie piszę, że pojemność wzięła się
 *   z wyjęcia siedzeń.
 * — ⚠⚠⚠ ZERO SKALOWANIA PORCJI I GOTOWANIA DLA WIELU
 *   OSÓB — kąt zajęty (Świdwin). ⚠⚠ TO JEST NAJBLIŻSZY
 *   KĄT. Tam chodzi o TO, JAK PRZELICZYĆ PRZEPIS
 *   NA WIĘKSZĄ LICZBĘ OSÓB; TUTAJ o TO, ILE OSÓB
 *   USIĄDZIE. Ani słowa o przeliczaniu, o porcjach
 *   i o tym, jak ugotować dla wielu. ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM I OBIADU
 *   DLA DWUNASTU OSÓB — kąt zajęty (Węgorzyno).
 *   Nie piszę, jak często zdarzają się duże spotkania
 *   ani jak pod nie dobierać sprzęt.
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty (Kamienna
 *   Góra).
 * — ⚠⚠ ZERO CO ROŚNIE NIEZAUWAŻALNIE — kąt zajęty
 *   (Chojna). Obwodów pni NIE UŻYWAM jako morału.
 * — ⚠⚠ ZERO NAZWY Z DWÓCH CZŁONÓW — byłoby bliźniacze
 *   z Boguszowem-Gorcami (ta sama fala).
 * — ⚠ ZERO PRZESTRZENI I UKŁADU KUCHNI — obszar zajęty
 *   (Koluszki, Tychowo, Płoty).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO MENU NA PRZYJĘCIE ANI LICZBY PORCJI —
 *   podaję WYŁĄCZNIE kolejność: najpierw miejsca,
 *   potem zaproszenia.
 * — ŻADNYCH NAZW FIRM I MAREK. ⚠ „Jelcz" i „Škoda-Karosa"
 *   to nazwy historyczne pojazdów i zakładu, podawane
 *   jako fakt lokalny — nie jako rekomendacja marki.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠ pisząc „jedzenie na stojąco" NIE MÓWIĘ NIC
 *   o tym, co wolno podawać ani jak długo może stać.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ROKU 1943 I ZAKŁADÓW ZBROJENIOWYCH.
 * — ⚠⚠⚠ ZERO PRODUKCJI WOJSKOWEJ — także współczesnej.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO UPADŁOŚCI ZAKŁADU JAKO WĄTKU — podaję sam
 *   rok zakończenia produkcji autobusów.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów nie opisuję.
 * — ⚠ ZERO DEMOGRAFII I WYLUDNIANIA.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby miejscowości w gminie — źródło
 *   zapowiada 18, wymienia 17.
 * — NIE PODAJĘ liczby miejsc w Jelczu 043 — dane
 *   niepewne.
 * — NIE ZESTAWIAM długości autobusów z pojemnością.
 * — NIE PODAJĘ wymiarów pałacu ani zamku na wyspie.
 * — NIE PODAJĘ daty końca funkcjonowania zamku —
 *   źródła sprzeczne.
 * — NIE SUGERUJĘ, że „Ryczyński miód lipowy" pochodzi
 *   z tej gminy — to gmina Oława.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE OPISUJĘ herbu.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Jelcz-Laskowice leży w powiecie oławskim, nad Odrą;
 *   miasto liczy 14 949 mieszkańców (GUS, 31.12.2024)
 *   na 17,1 km², a cała gmina 23 752 osoby na 167,7 km²,
 * — Laskowice wzmiankowano po raz pierwszy w 1203 r.,
 *   a Jelcz w 1245 — dzieliły je czterdzieści dwa lata;
 *   w 1987 r. połączono obie wsie i jednocześnie nadano
 *   powstałej całości prawa miejskie, więc żadna z nich
 *   nigdy wcześniej miastem nie była,
 * — w 1268 r. na wyspie pośrodku Odry, na skraju Jelcza,
 *   zbudowano zamek; od 1508 r. należał do Sauermanów.
 *   Pałac w Jelczu wzniesiono w latach 1886–1894
 *   w miejscu XVII-wiecznego drewnianego budynku
 *   myśliwskiego, a otaczający go park w stylu
 *   angielskim ma 9,5 ha. Linię kolejową doprowadzono
 *   do Laskowic w 1909 r.,
 * — Jelczańskie Zakłady Samochodowe powstały 15 marca
 *   1952 r.; 6 grudnia 1958 r. podpisano umowę licencyjną
 *   na Škodę-Karosę 706 RTO, a w grudniu 1959 r.
 *   ruszyła seryjna produkcja Jelcza 043, nazywanego
 *   „ogórkiem" — pojazdu o długości 10 870 mm
 *   i szerokości 2 500 mm. W 1973 r. zakład osiągnął
 *   szczyt produkcji: 2 861 autobusów w ciągu roku;
 *   produkcję Jelcza 043 zakończono w 1983 r.,
 *   a produkcję autobusów w 2008 r. Łącznie w latach
 *   1959–2008 powstało tu ponad 61 000 autobusów,
 * — Jelcz PR110 miał 12 m długości i mieścił 110 osób,
 *   z czego 36 na miejscach siedzących,
 * — w gminie jest dziesięć pomników przyrody;
 *   najokazalszy to dąb szypułkowy „Słowianin"
 *   w Dębinie o obwodzie pnia 706 cm i wysokości
 *   około 25 m, chroniony od 1979 r. W samym mieście
 *   rosną dąb o obwodzie 655 cm, chroniony od 1965 r.,
 *   i lipa drobnolistna zwana „Matczyną Lipą"
 *   o obwodzie 450 cm, chroniona od 1997 r.,
 * — w starorzeczu Odry leży rezerwat Łacha Jelcz
 *   o powierzchni 6,9 ha.
 */
export const JELCZ_LASKOWICE: CityContent = {
  slug: "jelcz-laskowice",
  h1: "Thermomix Jelcz-Laskowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jelcz-Laskowice — prezentacja i cena",
  seoDescription:
    "Thermomix w Jelczu-Laskowicach (powiat oławski): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jelcz-Laskowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jelczu-Laskowicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jelcza-Laskowic w powiecie oławskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Jelcz-Laskowice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sto dziesięć osób, trzydzieści sześć miejsc siedzących. Ktoś tak zdecydował.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jelczu-Laskowicach – jak wygląda prezentacja?",
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
      id: "miejsca-siedzace",
      heading: "Sto dziesięć osób, trzydzieści sześć miejsc",
      paragraphs: [
        "Jelcz PR110, produkowany w tym mieście, miał dwanaście metrów długości i mieścił sto dziesięć osób. Z czego trzydzieści sześć siedziało.",
        "To nie było niedopatrzenie. Konstruktor doskonale wiedział, że dwie trzecie pasażerów pojedzie na stojąco, i uznał, że dla trasy miejskiej tak jest właściwie. Liczba trzydzieści sześć była decyzją, którą ktoś podjął przy biurku, na długo przed tym, zanim pierwszy pasażer wsiadł.",
        "Przy zapraszaniu ludzi do domu nikt takiej decyzji świadomie nie podejmuje.",
        "Liczymy, ile osób zapraszamy — i to jest jedyna liczba, jaką mamy w głowie. Dwanaście osób. Osiem osób. Rodzina i jeszcze sąsiedzi. A ile z nich usiądzie, okazuje się dopiero wtedy, gdy wszyscy już przyszli i stoją w przedpokoju.",
        "To jest, moim zdaniem, najczęstszy powód, dla którego domowe spotkania idą gorzej, niż mogły. Nie jedzenie. Nie gospodarze. To, że część gości stoi przez trzy godziny, a nikt tego nie zaplanował — więc nikt też nie przygotował się na to, że będą stali.",
        "Rozwiązanie nie polega na dostawianiu krzeseł w ostatniej chwili. Polega na odwróceniu kolejności.",
        "Najpierw policzyć miejsca, potem ustalić liczbę zaproszeń. Albo — i to jest równie dobra droga — świadomie przyjąć, że to spotkanie na stojąco. Bo wtedy zupełnie inaczej wygląda wszystko, co się podaje: inne jedzenie, inne naczynia, inne rozstawienie w mieszkaniu. To są dwa różne wieczory i warto wiedzieć, który się organizuje.",
        "PR110 był pod tym względem uczciwy. Miał trzydzieści sześć miejsc, nikt nie udawał, że będzie ich więcej, i każdy wsiadający wiedział, na co się pisze.",
        "Uczciwie o drugiej stronie: spotkanie na stojąco nie jest gorsze. Bywa swobodniejsze, ludzie więcej się przemieszczają i więcej ze sobą rozmawiają, a całość zwykle kończy się wcześniej — co też bywa zaletą. Chodzi wyłącznie o to, żeby to była decyzja, a nie skutek uboczny.",
        "Na koniec o urządzeniu, wąsko. Krzeseł nie dostawi i z tą sprawą nie ma nic wspólnego.",
        "Przy większej liczbie gości zmienia natomiast jedną rzecz: część pracy da się zrobić wcześniej i bez stania przy garnku, więc gospodarz częściej siedzi przy stole razem z resztą, zamiast wracać do kuchni co dziesięć minut. Czyli w praktyce jedno miejsce siedzące więcej — akurat to własne.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jelczu-Laskowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile osób siada u Was do stołu w zwykły dzień — nie ile bywa od święta. Pod tę liczbę dobiorę dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jelczu-Laskowicach"),
    sekcjaRaty("w Jelczu-Laskowicach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Jelcza-Laskowic",
      paragraphs: [
        "Jelcz-Laskowice leżą w powiecie oławskim, nad Odrą. Samo miasto liczy blisko piętnaście tysięcy mieszkańców (GUS, 31.12.2024) na siedemnastu kilometrach kwadratowych, a cała gmina ponad dwadzieścia trzy tysiące osób na stu sześćdziesięciu ośmiu. Laskowice wzmiankowano po raz pierwszy w 1203 roku, a Jelcz w 1245 — dzieliły je czterdzieści dwa lata. W 1987 połączono obie wsie i jednocześnie nadano powstałej całości prawa miejskie, więc żadna z nich nigdy wcześniej miastem nie była. W 1268 na wyspie pośrodku Odry zbudowano zamek, a od 1508 należał on do Sauermanów; pałac w Jelczu wzniesiono w latach 1886–1894 w miejscu siedemnastowiecznego drewnianego budynku myśliwskiego, a otaczający go park w stylu angielskim ma dziewięć i pół hektara. Kolej doprowadzono do Laskowic w 1909. Jelczańskie Zakłady Samochodowe powstały 15 marca 1952 roku; w grudniu 1959 ruszyła seryjna produkcja Jelcza 043, nazywanego „ogórkiem” — pojazdu o długości niespełna jedenastu metrów. W 1973 zakład osiągnął szczyt: dwa tysiące osiemset sześćdziesiąt jeden autobusów w ciągu jednego roku, a łącznie w latach 1959–2008 powstało ich tu ponad sześćdziesiąt jeden tysięcy. W gminie jest dziesięć pomników przyrody — najokazalszy to dąb „Słowianin” w Dębinie o obwodzie pnia siedmiu metrów i sześciu centymetrów, chroniony od 1979 roku; w samym mieście rosną dąb o obwodzie sześciu metrów pięćdziesięciu pięciu i „Matczyna Lipa” o obwodzie czterech i pół metra. W starorzeczu Odry leży rezerwat Łacha Jelcz — niecałe siedem hektarów.",
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

  districtsHeading: "Do których części Jelcza-Laskowic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — i do części dawnego Jelcza, i do dawnych Laskowic — oraz do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Jelcz-Laskowice też przyjadę",
  nearbyParagraphs: [
    "Oława jest około dwunastu kilometrów stąd, Siechnice piętnaście, Bierutów szesnaście, a Oleśnica dziewiętnaście. Do Wrocławia też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Oława", "Siechnice", "Bierutów", "Oleśnica", "Wrocław"],

  about: blokOMnie("do Jelcza-Laskowic", "w Jelczu-Laskowicach", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jelcza-Laskowic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto podać pełną nazwę: Laskowice to nazwa bardzo pospolita — są też Laskowice Pomorskie i Laskowice w trzech innych województwach. W samej gminie leżą zaś Minkowice Oławskie i Biskupice Oławskie, choć to nie jest gmina Oława, a także Miłocice i Miłocice Małe.",
    },
    ...faqWspolne("w Jelczu-Laskowicach"),
    {
      question: "Ile osób zaprosić, żeby spotkanie się udało?",
      answer:
        "Tyle, ile macie miejsc — i to jest jedyna liczba, którą warto policzyć pierwszą. Produkowany tu Jelcz PR110 mieścił sto dziesięć osób, ale miejsc siedzących miał trzydzieści sześć; ktoś tak zdecydował świadomie i każdy wsiadający o tym wiedział. W domu zwykle liczymy tylko zaproszenia, a liczba krzeseł okazuje się dopiero przy stole. Warto odwrócić kolejność albo świadomie przyjąć, że to spotkanie na stojąco — to dwa zupełnie różne wieczory.",
    },
    {
      question: "Czy Thermomix pomaga, gdy przyjmuje się więcej gości?",
      answer:
        "Krzeseł nie dostawi. Zmienia natomiast jedno: część pracy da się zrobić wcześniej i bez stania przy garnku, więc gospodarz częściej siedzi przy stole razem z resztą, zamiast wracać do kuchni co dziesięć minut. W praktyce to jedno miejsce siedzące więcej — akurat to własne.",
    },
  ],

  geo: { lat: 51.0213, lng: 17.316 },
};
