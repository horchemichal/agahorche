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
 * UNISŁAW — powiat chełmiński, woj. kujawsko-pomorskie,
 * ZIEMIA CHEŁMIŃSKA, w pradolinie Wisły.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZE USTALENIE NA TEJ STRONIE:
 *   UNISŁAW NIE JEST MIASTEM. TO WIEŚ — SIEDZIBA
 *   GMINY WIEJSKIEJ UNISŁAW.
 *   W grudniu 2025 r. rada gminy podjęła uchwałę
 *   o rozpoczęciu procedury nadania praw miejskich,
 *   konsultacje planowano na styczeń 2026, a prawa nadaje
 *   Rada Ministrów. NA WRZESIEŃ 2026 BRAK POTWIERDZENIA,
 *   ŻE PROCEDURA SIĘ ZAKOŃCZYŁA.
 *   ⚠⚠ DLATEGO W CAŁYM TEKŚCIE PISZĘ „WIEŚ",
 *   „MIEJSCOWOŚĆ", „GMINA" — NIGDY „MIASTO",
 *   „MIESZCZANIE", „RATUSZ", „RYNEK MIEJSKI",
 *   „PRAWA MIEJSKIE".
 *   ⚠⚠ NIE WSPOMINAM TEŻ O TRWAJĄCEJ PROCEDURZE —
 *   jej stanu nie potwierdzono, a pisanie „stara się
 *   o prawa miejskie" może być nieaktualne w obie strony.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * WIEŚ: 3 573 mieszkańców (spis powszechny 2021).
 * ⚠ GUS NA 31.12.2024 NIE PODAJE ODRĘBNEJ LICZBY
 *   DLA SAMEJ WSI — dlatego podaję liczbę spisową
 *   i zawsze z zaznaczeniem, że to spis.
 * CAŁA GMINA WIEJSKA: ok. 6,5 tysiąca osób, 72,6 km²,
 * 10 MIEJSCOWOŚCI, z których KAŻDA TWORZY ODRĘBNE
 * SOŁECTWO (Unisław, Raciniewo, Grzybno, Głażewo,
 * Stablewice, Gołoty, Bruki Unisławskie, Bruki Kokocka,
 * Błoto, Kokocko).
 * ⚠⚠ LICZBĘ LUDNOŚCI GMINY PODAJĘ ZAOKRĄGLONĄ.
 *   Źródła podają 6 662, 6 479 i 6 428, a strona
 *   z liczbą 6 662 jest wewnętrznie niespójna (jej własny
 *   procent udziału w powiecie i własna gęstość dają
 *   inne wyniki). NIE CYTUJĘ PROCENTU UDZIAŁU W POWIECIE.
 * ⚠ ODWROTNIE NIŻ ZWYKLE: urząd podaje liczby NIŻSZE
 *   niż GUS (6 479 na 31.12.2023), nie wyższe. To pierwszy
 *   taki przypadek od dwudziestu miejscowości. NIE PISZĘ
 *   O ZAWYŻANIU.
 * ⚠ NIE MA ODRĘBNEJ GMINY MIEJSKIEJ UNISŁAW.
 * ⚠ NIE MIESZAM LICZB WSI I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,2097 / 18,3831 — to WSPÓŁRZĘDNE WSI.
 *   NIE 53,2103 / 18,3906 — tamto jest centroid gminy.
 * ⚠ ODMIANA: D. UNISŁAWIA, Ms. W UNISŁAWIU,
 *   przym. UNISŁAWSKI.
 *   ⚠ D. i Ms. NIE POTWIERDZONE W PWN (brak hasła);
 *   formy regularne.
 *   ⭐ PRZYMIOTNIK „UNISŁAWSKI" JEST POTWIERDZONY
 *   URZĘDOWO — w nazwie produktu z Listy MRiRW („mięta
 *   pieprzowa unisławska") oraz w utrwalonej nazwie
 *   geograficznej „Basen Unisławski". To mocniejsze
 *   potwierdzenie niż zwykle.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 * ⚠⚠ RYZYKA POMYLENIA — TRZY UNISŁAWY:
 *   UNISŁAW ŚLĄSKI to wieś w DOLNOŚLĄSKIM (gm. Mieroszów)
 *   — ma przystanek kolejowy i XIX-wieczny tunel, więc
 *   materiały o „kolei w Unisławiu" mogą dotyczyć JEJ.
 *   UNISŁAW w WIELKOPOLSKIM to trzecia miejscowość
 *   o tej nazwie.
 *   ⚠⚠ „UNISŁAW POMORSKI" TO NAZWA STACJI KOLEJOWEJ,
 *   NIE MIEJSCOWOŚCI. Wieś nazywa się po prostu Unisław.
 *   NIE PISZĘ „Unisław Pomorski".
 *   ⚠ BRUKI UNISŁAWSKIE to ODRĘBNA WIEŚ I ODRĘBNE
 *   SOŁECTWO W TEJ SAMEJ GMINIE.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1222 — pierwsza wzmianka o Unisławiu, w dokumencie
 *   Konrada I Mazowieckiego dotyczącym ziemi chełmińskiej
 *   (dwa źródła zgodne).
 * — 1902 — uruchomienie połączenia kolejowego z Chełmnem.
 *   ⚠⚠ NIE PISZĘ, CZY DZIŚ JEŹDZI TU POCIĄG — źródła są
 *   sprzeczne (jedno mówi o braku czynnych linii, dwa
 *   o reaktywacji w 2008 r.). NIE ROZSTRZYGAM I NIE
 *   OBIECUJĘ NIKOMU DOJAZDU KOLEJĄ. TWARDA GRANICA.
 * — 1920 — Unisław staje się siedzibą gminy.
 * — 1946 — utworzenie ośrodka zdrowia.
 *   ⚠ PODAJĘ JAKO FAKT ADMINISTRACYJNY ALBO WCALE —
 *   ZERO wątku zdrowotnego.
 * — Do rejestru zabytków wpisano dwa obiekty: kościół
 *   z XIV w. i stanowisko archeologiczne Grodzisko
 *   Unisław. ⚠ KOŚCIÓŁ WYŁĄCZNIE JAKO ARCHITEKTURA.
 * — W gminie jest jedenaście form ochrony przyrody,
 *   głównie rezerwaty mokradłowe utworzone w 1996 r.
 * — Użytki rolne zajmują 79,37 % powierzchni gminy,
 *   lasy 11,01 %; gospodarstw rolnych jest ponad 600.
 *
 * ⭐⭐⭐ LISTA PRODUKTÓW TRADYCYJNYCH — TRAFIENIE:
 *   „MIĘTA PIEPRZOWA UNISŁAWSKA"
 *   kategoria: WARZYWA I OWOCE
 *   data wpisu: 24 LIPCA 2018
 *   ⚠⚠ ROZBIEŻNOŚĆ DAT: karta produktu podaje 24.07.2018,
 *   strona listująca kategorię renderuje 06.08.2018.
 *   UŻYWAM DATY Z KARTY (źródło nadrzędne) i nie
 *   eksponuję jej, bo nie jest kluczowa.
 *   gmina z karty: UNISŁAW ✔
 *
 *   SZCZEGÓŁY Z KARTY (dosłowne):
 *   — WYGLĄD: całe lub rozdrobnione suszone liście
 *     i ulistnione pędy,
 *   — KSZTAŁT: liście podłużne jajowate, brzegiem ostro
 *     ząbkowane,
 *   — ROZMIAR: liście całe DO 5 CM, rozdrobnione
 *     OD 1 DO 12 MM,
 *   — BARWA: ciemnozielona,
 *   — KONSYSTENCJA: krucha, sucha w dotyku,
 *   — ⭐ ZAPACH: „szczególnie po roztarciu intensywnie
 *     mentolowy"; SMAK: „początkowo palący, a następnie
 *     chłodzący",
 *   — GLEBA: typ gleby pradoliny Wisły w rejonie Basenu
 *     Unisławskiego, zwany „moras",
 *   — TECHNOLOGIA TRADYCYJNA, TRZY ETAPY: ścinanie
 *     sierpem lub kosą, WIĘDNIĘCIE, suszenie na poddaszu
 *     W ZACIEMNIONYCH MIEJSCACH,
 *   — region Unisławia wskazany jako główny obszar
 *     koncentracji uprawy mięty w Polsce.
 *   ⚠ KARTA NIE PODAJE temperatur suszenia, terminów
 *   siewu, liczby zbiorów ani powierzchni upraw.
 *   NIE ZMYŚLAM TYCH LICZB.
 *
 * ⚠⚠ PUŁAPKA ROZBROJONA: „chleb z kminkiem ze Stolna"
 *   i „chleb z makiem ze Stolna" (oba 03.06.2018)
 *   pochodzą z GMINY STOLNO — sąsiedniej gminy wiejskiej
 *   W TYM SAMYM POWIECIE CHEŁMIŃSKIM. To jedyne produkty
 *   piekarnicze z tego powiatu i najłatwiej je przygarnąć
 *   jako „lokalne". NIE SĄ Z UNISŁAWIA. NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI WSI NIE USTALONO — districts PUSTE.
 *
 * KĄT: DWA RAZY — czynności, które z założenia wykonuje
 * się dwukrotnie, a nie dlatego, że za pierwszym razem
 * się nie udało.
 * Kąt od opisu miejscowej obróbki mięty: „trzeba to ściąć,
 * przywieźć na suszarnię, rozłożyć, wysuszyć, DWA RAZY
 * WYCZYŚCIĆ, a potem spakować". Podwójne czyszczenie jest
 * elementem normalnej procedury — jednym z wymienionych
 * kroków, a nie poprawką po błędzie.
 * ⚠⚠ OPIS PROCESU UŻYWAM BEZ ATRYBUCJI: NIE PODAJĘ
 * NAZWISKA ANI NAZWY GOSPODARSTWA. To żyjąca osoba
 * i działające przedsiębiorstwo, a wymienienie ich
 * na stronie przedstawicielki czytałoby się jak
 * rekomendacja handlowa udzielona bez ich zgody.
 * TWARDA GRANICA BEZWZGLĘDNA.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w opisie miejscowej obróbki mięty „dwa razy
 *   wyczyścić" stoi jako jeden z kroków, na równi
 *   ze ścięciem i suszeniem,
 * — ⚠⚠ ŻE W KUCHNI TEŻ SĄ CZYNNOŚCI, KTÓRYCH JEDNO
 *   PRZEJŚCIE FIZYCZNIE NIE MOŻE ZAŁATWIĆ — I ŻE TO NIE
 *   JEST NIEDBALSTWO, TYLKO WŁAŚCIWOŚĆ CZYNNOŚCI.
 *   TO JEST RDZEŃ,
 * — DLACZEGO TAK JEST: PIERWSZE PRZEJŚCIE ZBIERA TO,
 *   CO DUŻE I LUŹNE, DRUGIE TO, CO DROBNE I OPADŁE
 *   ALBO PRZYWARTE. To są dwa różne zadania, tylko
 *   wykonywane tym samym ruchem,
 * — KONKRETY: pory i natka (pierwsze płukanie zdejmuje
 *   ziemię, drugie piasek, który zdążył opaść), kasza
 *   i ryż, zbieranie szumowin, przecedzanie wywaru,
 *   wycieranie deski po surowym,
 * — ⚠⚠ JAK POZNAĆ, ŻE DRUGIE PRZEJŚCIE JEST POTRZEBNE —
 *   TO JEST NAJBARDZIEJ UŻYTECZNA CZĘŚĆ: PATRZY SIĘ
 *   NA WODĘ I NA DNO MISKI, NIE NA PRODUKT. Produkt
 *   po pierwszym płukaniu zawsze wygląda czysto,
 * — ⚠ UCZCIWIE O GRANICY: NIE WSZYSTKO WYMAGA DWÓCH RAZY.
 *   Rzeczy gładkie i mało pofałdowane wystarczy raz.
 *   Zasada dotyczy tego, co ma zakamarki albo co osadza
 *   się na dnie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie robi pierwsze
 *   przejście szybko i dokładnie, ALE NIE POWIE,
 *   CZY POTRZEBNE JEST DRUGIE — to zostaje po stronie
 *   człowieka i zostanie tam na zawsze.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TWIERDZEŃ ZDROWOTNYCH — TO JEST NAJWIĘKSZE
 *   RYZYKO TEJ STRONY. Mięta pieprzowa jest rośliną
 *   zielarską i PRAKTYCZNIE KAŻDE ŹRÓDŁO O NIEJ przechodzi
 *   w trawienie, działanie rozkurczowe i ziołolecznictwo.
 *   PISZĘ WYŁĄCZNIE O ZAPACHU, SMAKU, WYGLĄDZIE
 *   I OBRÓBCE. ZERO O DZIAŁANIU NA ORGANIZM.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ZIÓŁ ŚWIEŻYCH KONTRA SUSZONYCH — kąt zajęty
 *   (Ciechanowiec, Skórcz). ⚠⚠ TO JEST NAJBLIŻSZY KĄT.
 *   Mięta pojawia się WYŁĄCZNIE jako produkt tej gminy
 *   i jako źródło opisu procesu. NIE PISZĘ, kiedy dodawać
 *   świeże, a kiedy suszone. TWARDA GRANICA.
 * — ⚠⚠ ZERO WŁASNYCH UPRAW I DONICZKI NA PARAPECIE —
 *   kąt zajęty (Mikołów).
 * — ⚠⚠ ZERO PRZYPRAW CAŁYCH KONTRA MIELONYCH — kąt zajęty
 *   (Pieniężno). Rozmiar rozdrobnienia z karty (1–12 mm)
 *   podaję jako cechę produktu, nie jako temat.
 * — ⚠⚠ ZERO SITA I PRZESIEWANIA — kąt zajęty (Biłgoraj).
 * — ⚠⚠ ZERO ODSĄCZANIA I ODCISKANIA — kąt zajęty (Łapy).
 *   Piszę o PŁUKANIU, nie o wyganianiu wody.
 * — ⚠ ZERO KOLORU JEDZENIA jako tematu — kąt zajęty
 *   (Konstantynów Łódzki). Barwę ciemnozieloną podaję
 *   jako cechę z karty i nie rozwijam.
 * — ⚠ ZERO CUKROWNICTWA — kąt zajęty; dlatego nie
 *   wspominam zakładu z 1883 r. wcale.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM, MAREK, GOSPODARSTW I NAZWISK.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   w szczególności przy płukaniu i przy wycieraniu deski
 *   piszę WYŁĄCZNIE o piasku i o resztkach, ZERO
 *   o bakteriach, zakażeniach i zatruciach.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z LAT 1939–1945. Sekcja
 *   historyczna en.wikipedii o Unisławiu składa się
 *   niemal wyłącznie z tematów wyłączonych: masakry
 *   z 1939 r., wysiedlenia z października 1940,
 *   okupacyjna zmiana nazwy w 1942. To jest dosłownie
 *   cała jej treść poza wzmianką z 1222 r.
 *   ŻADNYCH SŁÓW „okupacja", „wysiedlenie", ŻADNEJ
 *   NAZWY OKUPACYJNEJ. TWARDA GRANICA BEZWZGLĘDNA —
 *   NAJWAŻNIEJSZA NA TEJ STRONIE.
 * — ⚠⚠ ZERO ZAMKU I ZAKONU KRZYŻACKIEGO, ZERO KOMTURA
 *   Z 1285 R., ZERO ROKU 1410 — wątek wojenny.
 *   Grodzisko wymieniam wyłącznie jako stanowisko
 *   archeologiczne w rejestrze zabytków.
 * — ⚠⚠ ZERO NAZWISKA I NAZWY GOSPODARSTWA przy opisie
 *   obróbki mięty.
 * — ⚠ ZERO OŚRODKA ZDROWIA jako wątku — najwyżej jako
 *   data administracyjna, a najlepiej wcale.
 * — ⚠ ZERO KOŚCIOŁA jako wątku wyznaniowego.
 * — ⚠ ZERO PISANIA O POCIĄGACH DO UNISŁAWIA DZISIAJ.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *   ⚠ Katalog KPODR to NIE jest Lista MRiRW.
 * — ZERO bezrobocia, salda migracji i przyrostu
 *   naturalnego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ZIOŁA ŚWIEŻE KONTRA SUSZONE" (Ciechanowiec, Skórcz)
 *   dotyczy WYBORU MIĘDZY NIMI. ⚠⚠ TO JEST NAJBLIŻSZY
 *   KĄT. TUTAJ nie ma ani jednego zdania o tym wyborze.
 * — „ZIOŁA I WŁASNE UPRAWY" (Mikołów) dotyczy HODOWANIA.
 * — „PRZYPRAWY CAŁE KONTRA MIELONE" (Pieniężno) dotyczy
 *   STOPNIA ROZDROBNIENIA.
 * — „SITO" (Biłgoraj) dotyczy PRZESIEWANIA.
 * — „ODSĄCZANIE I ODCISKANIE" (Łapy) dotyczy WODY,
 *   KTÓRĄ TRZEBA WYGNAĆ.
 * TUTAJ chodzi o CZYNNOŚCI WYKONYWANE DWA RAZY
 * Z ZAŁOŻENIA — I O TO, PO CZYM POZNAĆ, ŻE DRUGIE
 * PRZEJŚCIE JEST POTRZEBNE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE NAZYWAM Unisławia miastem.
 * — NIE PISZĘ o procedurze nadania praw miejskich.
 * — NIE MIESZAM liczb wsi i gminy.
 * — NIE PODAJĘ dokładnej liczby ludności gminy ani
 *   procentu jej udziału w powiecie.
 * — NIE PISZĘ o dzisiejszych połączeniach kolejowych.
 * — NIE PODAJĘ temperatur ani terminów uprawy mięty —
 *   karta ich nie zawiera.
 * — NIE PISZĘ o działaniu mięty na organizm.
 * — NIE PODAJĘ nazwiska ani nazwy gospodarstwa.
 * — NIE PRZYPISUJĘ Unisławiowi chlebów ze Stolna.
 * — NIE PODAJĘ nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Unisław jest wsią i siedzibą gminy wiejskiej
 *   w powiecie chełmińskim, na ziemi chełmińskiej,
 *   w pradolinie Wisły; sam Unisław liczył w spisie
 *   z 2021 roku 3 573 mieszkańców, a cała gmina ma około
 *   sześciu i pół tysiąca osób na 72,6 km²,
 * — w gminie jest dziesięć miejscowości i każda z nich
 *   tworzy odrębne sołectwo; użytki rolne zajmują niemal
 *   osiemdziesiąt procent jej powierzchni, a gospodarstw
 *   rolnych jest ponad sześćset,
 * — pierwsza wzmianka o Unisławiu pochodzi z 1222 roku,
 *   z dokumentu Konrada I Mazowieckiego dotyczącego
 *   ziemi chełmińskiej,
 * — w 1902 roku uruchomiono stąd połączenie kolejowe
 *   z Chełmnem, a w 1920 Unisław stał się siedzibą gminy,
 * — do rejestru zabytków wpisano dwa obiekty: kościół
 *   z XIV wieku i stanowisko archeologiczne Grodzisko
 *   Unisław; w gminie jest jedenaście form ochrony
 *   przyrody, głównie rezerwaty mokradłowe utworzone
 *   w 1996 roku,
 * — na Liście Produktów Tradycyjnych Ministerstwa
 *   Rolnictwa figuruje „mięta pieprzowa unisławska",
 *   wpisana w 2018 roku w kategorii warzyw i owoców,
 *   a region Unisławia wskazano w karcie jako główny
 *   obszar koncentracji uprawy mięty w Polsce,
 * — karta opisuje produkt jako całe lub rozdrobnione
 *   suszone liście i ulistnione pędy o barwie
 *   ciemnozielonej, kruchej i suchej w dotyku
 *   konsystencji; liście całe mają do pięciu centymetrów,
 *   rozdrobnione od jednego do dwunastu milimetrów,
 * — tradycyjna technologia miała trzy etapy: ścinanie
 *   sierpem lub kosą, więdnięcie i suszenie na poddaszu
 *   w zaciemnionych miejscach; gleba tego rejonu,
 *   nazywana „moras", pochodzi z pradoliny Wisły,
 * — miejscowy opis dzisiejszej obróbki wymienia kroki:
 *   ściąć, przywieźć na suszarnię, rozłożyć, wysuszyć,
 *   dwa razy wyczyścić i spakować.
 */
export const UNISLAW: CityContent = {
  slug: "unislaw",
  h1: "Thermomix Unisław – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Unisław — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Unisławiu: bezpłatna prezentacja TM7 u Ciebie w domu, cały Unisław i wszystkie wsie w gminie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Unisław — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Unisławiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Unisławia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całej gminy.",

  highlights: highlightyStandardowe("Unisław"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Są czynności, których jedno przejście fizycznie nie może załatwić.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Unisławiu – jak wygląda prezentacja?",
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
      id: "dwa-razy",
      heading: "Dwa razy wyczyścić",
      paragraphs: [
        "Na Liście Produktów Tradycyjnych Ministerstwa Rolnictwa figuruje „mięta pieprzowa unisławska”, a karta produktu wskazuje region Unisławia jako główny obszar koncentracji uprawy mięty w Polsce. Tradycyjnie ścinano ją sierpem lub kosą, zostawiano do zwiędnięcia i suszono na poddaszu, w zaciemnionych miejscach.",
        "Ale najciekawsze zdanie o tej miejscowości nie jest w karcie, tylko w opisie dzisiejszej obróbki. Kroki wymieniono tam tak: ściąć, przywieźć na suszarnię, rozłożyć, wysuszyć, dwa razy wyczyścić, a potem spakować.",
        "„Dwa razy wyczyścić” stoi w tym wyliczeniu na równi ze ścięciem i suszeniem. Nie jako poprawka po niedoróbce, tylko jako normalny krok procedury.",
        "I to jest rzecz, którą w kuchni przegapiamy niemal zawsze. Są czynności, których jedno przejście fizycznie nie może załatwić — i to nie jest niedbalstwo z naszej strony, tylko właściwość samej czynności.",
        "Powód jest prosty, gdy się go raz zobaczy: pierwsze przejście zbiera to, co duże i luźne, a drugie to, co drobne, opadło albo przywarło. To są dwa różne zadania, tylko wykonywane tym samym ruchem.",
        "Najczystszy przykład to pory i natka. Pierwsze płukanie zdejmuje ziemię. Ale piasek, który przy tym spłynął, zdążył opaść na dno miski — i jeżeli wyjmiesz zieleninę do góry, zbierzesz go z powrotem. Drugie płukanie, w świeżej wodzie, istnieje wyłącznie po to.",
        "Tak samo działa płukanie kaszy i ryżu, zbieranie szumowin, przecedzanie wywaru i wycieranie deski po surowym. Za każdym razem druga tura zajmuje się czymś innym niż pierwsza.",
        "Najbardziej użyteczna jest jednak odpowiedź na pytanie, po czym poznać, że drugie przejście w ogóle jest potrzebne. Otóż patrzy się na wodę i na dno miski, nie na produkt.",
        "Produkt po pierwszym płukaniu zawsze wygląda czysto — dlatego właśnie się na nim kończy. Woda mówi prawdę: jeśli jest mętna albo na dnie coś zostało, druga tura nie jest marnowaniem czasu, tylko brakującą połową czynności.",
        "Uczciwie o granicy: nie wszystko tego wymaga. Rzeczy gładkie i mało pofałdowane wystarczy raz i nie ma sensu robić z tego rytuału. Zasada dotyczy tego, co ma zakamarki, i tego, co osadza się na dnie.",
        "Uczciwie o sprzęcie: urządzenie zrobi pierwsze przejście szybko i równo, ale nie powie Ci, czy potrzebne jest drugie. To zostaje po Twojej stronie i zostanie tam na zawsze — a wystarczy spojrzeć na wodę.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Unisławiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy gotujecie dużo z warzyw z własnego ogrodu — przy nich rzecz z dwoma płukaniami widać najwyraźniej i pokażę ją na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Unisławiu"),
    sekcjaRaty("w Unisławiu"),
    {
      id: "rodzina",
      heading: "Thermomix dla unisławskiej rodziny",
      paragraphs: [
        "Unisław jest wsią i siedzibą gminy wiejskiej w powiecie chełmińskim, na ziemi chełmińskiej, w pradolinie Wisły. Sam Unisław liczył w spisie z 2021 roku ponad trzy i pół tysiąca mieszkańców, a cała gmina ma około sześciu i pół tysiąca osób na siedemdziesięciu dwóch kilometrach kwadratowych. Miejscowości w gminie jest dziesięć i każda z nich tworzy odrębne sołectwo; użytki rolne zajmują niemal osiemdziesiąt procent powierzchni, a gospodarstw rolnych jest ponad sześćset. Pierwsza wzmianka o Unisławiu pochodzi z 1222 roku, z dokumentu Konrada I Mazowieckiego dotyczącego ziemi chełmińskiej. W 1902 roku uruchomiono stąd połączenie kolejowe z Chełmnem, a w 1920 Unisław stał się siedzibą gminy. Do rejestru zabytków wpisano dwa obiekty: kościół z XIV wieku i stanowisko archeologiczne Grodzisko Unisław, a w gminie jest jedenaście form ochrony przyrody — głównie rezerwaty mokradłowe utworzone w 1996 roku. Na Liście Produktów Tradycyjnych figuruje „mięta pieprzowa unisławska”, wpisana w 2018 roku; karta opisuje ją jako całe lub rozdrobnione suszone liście o barwie ciemnozielonej, kruchej i suchej w dotyku, a gleba tego rejonu, nazywana „moras”, pochodzi z pradoliny Wisły.",
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

  districtsHeading: "Do których części gminy Unisław dojeżdżam?",
  districtsParagraphs: [
    "Do całego Unisławia i do wszystkich dziesięciu miejscowości w gminie — każda z nich jest osobnym sołectwem, więc wystarczy podać jej nazwę.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Unisław też przyjadę",
  nearbyParagraphs: [
    "Chełmno, Chełmża, Toruń, Bydgoszcz i Kowalewo Pomorskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chełmno", "Chełmża", "Toruń", "Kowalewo Pomorskie"],

  about: blokOMnie("do Unisławia", "w Unisławiu", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Unisławia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego Unisławia i do wszystkich dziesięciu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Unisław jest wsią i siedzibą gminy wiejskiej w powiecie chełmińskim — i nie należy go mylić z Unisławiem Śląskim na Dolnym Śląsku.",
    },
    ...faqWspolne("w Unisławiu"),
    {
      question: "Po czym poznać, że coś trzeba wypłukać drugi raz?",
      answer:
        "Patrząc na wodę i na dno miski, nie na produkt. Produkt po pierwszym płukaniu zawsze wygląda czysto i dlatego właśnie na nim kończymy. Jeśli woda jest mętna albo na dnie coś zostało, druga tura nie jest marnowaniem czasu — pierwsze przejście zbiera to, co duże i luźne, drugie to, co drobne i opadłe. Najwyraźniej widać to przy porach i natce.",
    },
    {
      question: "Czy Thermomix zastąpi to drugie przejście?",
      answer:
        "Zrobi pierwsze szybko i równo, ale nie powie Ci, czy potrzebne jest drugie — a to jest tu cała decyzja. Ocena zostaje po Twojej stronie i wystarczy do niej spojrzenie na wodę. Warto to wiedzieć przed zakupem, żeby nie liczyć na coś, czego żadne urządzenie nie robi.",
    },
  ],

  geo: { lat: 53.2097, lng: 18.3831 },
};
