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
 * SKĘPE — powiat lipnowski, woj. kujawsko-pomorskie,
 * ZIEMIA DOBRZYŃSKA, nad ciągiem jezior skępskich.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 390 mieszkańców (GUS 31.12.2024),
 * 7,5 KM² — NAJWIĘKSZE OBSZAROWO MIASTO Z TEJ FALI,
 * za to o NAJNIŻSZEJ GĘSTOŚCI: 453,2 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 7 001 osób, 178,8 km²,
 * 26 miejscowości, 40 os./km².
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ SKĘPE.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 *
 * ⚠⚠⚠ NAJGROŹNIEJSZA PUŁAPKA LICZBOWA TEJ FALI:
 *   EN.WIKIPEDIA PODAJE DLA MIASTA SKĘPE LUDNOŚĆ
 *   7 790 (2012). TO NIE JEST LUDNOŚĆ MIASTA — to mniej
 *   więcej ludność CAŁEJ GMINY. Wobec faktycznych 3 390
 *   to zawyżenie o ponad 130 %. Liczba stoi w infoboksie
 *   obok POPRAWNEJ powierzchni, więc wygląda wiarygodnie.
 *   NIE UŻYWAM JEJ. UŻYWAM GUS: MIASTO 3 390.
 * ⚠ Urząd i BIP liczb ludnościowych NIE PODAJĄ W OGÓLE
 *   (zdanie w BIP jest urwane) — rozbieżności urząd–GUS
 *   nie da się policzyć. To nietypowe i warte odnotowania.
 *
 * ⚠⚠⚠ ODMIANA — NAJCZĘSTSZY BŁĄD W CAŁYM SERWISIE:
 *   MIEJSCOWNIK BRZMI „W SKĘPEM", NIE „W SKĘPIE".
 *   Odmiana jest przymiotnikowa, jak „Zakopane →
 *   w Zakopanem". PWN podaje wprost końcówkę -pem.
 *   D. SKĘPEGO, Ms. W SKĘPEM, przym. SKĘPSKI.
 *   ⚠⚠ PRZED PUBLIKACJĄ SPRAWDZIĆ KAŻDE WYSTĄPIENIE.
 *   ⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — forma „skępianin"
 *   figuruje w sjp.pl, ale NIE W PWN.
 * ⚠⚠ RYZYKO POMYLENIA: istnieje GMINA WIEJSKA SKĄPE
 *   w lubuskiem, a historyczne zapisy nazwy naszego miasta
 *   to m.in. „Skąpe". Źródło mówiące o „Skąpem" może
 *   dotyczyć lubuskiej gminy. SPRAWDZAM WOJEWÓDZTWO.
 * ⚠⚠ WYMYŚLIN — do 1997 r. ODRĘBNA MIEJSCOWOŚĆ, dopiero
 *   wtedy przyłączona do Skępego. Starsze materiały
 *   adresowane są „Wymyślin". NIE MYLĘ TEGO.
 * ⚠⚠ NIE UŻYWAM OKUPACYJNEJ NAZWY MIASTA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1445 — Mikołaj Kościelecki herbu Ogończyk uzyskał
 *   od Kazimierza Jagiellończyka przywilej na założenie
 *   miasteczka. Miasto sądziło się PRAWEM CHEŁMIŃSKIM.
 *   ⚠ DATY DZIENNEJ NIE USTALONO.
 * — ⚠⚠⚠ RDZEŃ KĄTA — ROK 1631:
 *   W MIEŚCIE STAŁY 84 DOMY, A PLACÓW BYŁO 66.
 *   Dwie trzecie tego, co zabudowane — wymierzone,
 *   zapisane i puste.
 *   ⚠⚠ ŹRÓDŁO WYMIENIA TEŻ 28 DOMÓW OPUSTOSZAŁYCH.
 *   TEJ LICZBY NIE UŻYWAM — to pustostany i wyludnienie.
 *   TWARDA GRANICA. Piszę WYŁĄCZNIE o 84 domach
 *   i 66 placach.
 * — 1775 — 85 domów.
 * — 1824 — 130 domów i 924 mieszkańców, czyli 7,1 osoby
 *   na dom.
 * — TARGI I JARMARKI: w XV w. dwa jarmarki rocznie —
 *   13 lipca i 8 września — oraz targ cotygodniowy
 *   w soboty; od 1530 trzeci jarmark 28 kwietnia;
 *   od 1559 przeniesiony na pierwszą niedzielę
 *   po Wielkanocy; później targ przeniesiono z soboty
 *   na czwartek; w 1730 jarmarki były trzy.
 *   ⚠⚠ UŻYWAM WYŁĄCZNIE JAKO TŁA W SEKCJI O MIEŚCIE,
 *   NIGDY JAKO KĄTA — „jeden stały dzień tygodnia" to kąt
 *   Mroczy z poprzedniej fali, a „czas w przepisie" to kąt
 *   Moniek. TWARDA GRANICA.
 * — RZEMIOSŁO PO 1815 R.: szewcy, kowale, krawcy,
 *   piekarze, stolarze, bednarze, sitarze, kołodzieje,
 *   bartnicy, smolarze.
 *   ⚠⚠ POMIJAM RZEŹNIKÓW (ubój) I WARZELNICTWO (alkohol).
 *   ⚠⚠ SITARZY WYMIENIAM, ALE NIE ROZWIJAM — sito jest
 *   kątem Biłgoraja i nie podbieram mu tematu.
 * — 1880 — DWA MŁYNY WODNE.
 *   ⚠⚠⚠ ŹRÓDŁOWE ZDANIE BRZMI „dwa młyny wodne, dwa
 *   zajazdy i dziewięć karczem". CYTUJĘ WYŁĄCZNIE MŁYNY.
 *   NIGDY CAŁEGO ZDANIA. TWARDA GRANICA BEZWZGLĘDNA.
 * — 1867 — utrata praw miejskich; 1997 — przywrócenie.
 *   ⚠⚠ BEZ POWSTANIA, KARY I REPRESJI — sam fakt prawny.
 *   ⚠ DNIA W 1997 R. NIE PODAJĘ — źródła podają 13 lutego
 *   jako datę aktu, ale rozporządzenia wchodzą w życie
 *   zwyczajowo 1 stycznia i tego nie rozstrzygnięto.
 * — RYNEK CZWOROBOCZNY. Lata 20. XX w. — usypanie grobli.
 *   1979 — metalowa figura koziołka.
 * — JEZIORA: Wielkie (112 m n.p.m.), Patana (113 m n.p.m.),
 *   a także Małe, Święte, Mielno i Sarnowskie; łączy je
 *   rzeka odprowadzająca wody do Wisły.
 *   ⚠ POWIERZCHNI I GŁĘBOKOŚCI NIE USTALONO — i tak
 *   kąt „głębokość maksymalna kontra średnia" jest zajęty.
 *   ⚠ NAZWY RZEKI NIE ROZSTRZYGAM: PWN odmienia „Mienią",
 *   urząd pisze „Mień". Piszę OPISOWO.
 * — LASY ok. 30 % powierzchni gminy; grunty orne ok. 43 %.
 *   Rezerwat torfowiskowy z brzozą karłowatą.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Skępe. Sprawdzono wszystkie dziesięć kategorii
 *   wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠⚠ PUŁAPKA NUMER JEDEN: „TWARÓG Z KUJAW I ZIEMI
 *   DOBRZYŃSKIEJ" (31.07.2013) wygląda na strzał
 *   w dziesiątkę, BO SKĘPE LEŻY W ZIEMI DOBRZYŃSKIEJ.
 *   ALE KARTA PRODUKTU NIE WYMIENIA ŻADNEJ GMINY —
 *   zasięg jest regionalny i obejmuje kilkadziesiąt gmin.
 *   NIE WOLNO NAPISAĆ „twaróg ze Skępego" ANI „skępski
 *   twaróg". TWARDA GRANICA.
 *   ⚠⚠ DALEJ: „marmolada z buraków cukrowych" (20.05.2019),
 *   „mniszek bronisławski" (18.01.2010), „dziady"
 *   (20.04.2023), „zupa fasolowa po kujawsku" (15.06.2023)
 *   i „chruściki" (12.06.2023) to wszystko BRONISŁAW
 *   W GMINIE DOBRE, powiat radziejowski.
 *   „Kujawskie pierniki z ziemniakami" (16.11.2018) to
 *   KUJAWY — a Skępe leży w ziemi dobrzyńskiej, nie
 *   na Kujawach. NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: SZEŚĆDZIESIĄT SZEŚĆ PLACÓW — co zrobić z listą
 * przepisów, których się nigdy nie ugotowało.
 * Kąt od spisu z 1631 r.: w Skępem stały wtedy 84 domy,
 * a placów było 66. Miejsca wymierzone, zapisane
 * i nazwane — i puste. Nikt nie uważał ich za wyrzut
 * sumienia; były po prostu miejscem, które istnieje
 * na wypadek, gdyby ktoś chciał.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1631 r. miasto miało 84 domy i 66 wymierzonych,
 *   pustych placów,
 * — ⚠⚠ ŻE LISTA ZAPISANYCH PRZEPISÓW DZIAŁA TAK SAMO
 *   I NIE JEST LISTĄ ZOBOWIĄZAŃ — TO JEST RDZEŃ.
 *   Plac to nie jest niezapłacony rachunek,
 * — ⚠⚠ DLACZEGO PRZEPISY ZOSTAJĄ NIEZROBIONE — I ŻE
 *   PRAWIE NIGDY NIE CHODZI O LENISTWO. Trzy prawdziwe
 *   powody: brakuje jednego składnika, wymaga dużego
 *   kawałka czasu, albo zapisało się je pod nastrój,
 *   który nie wrócił,
 * — PRAKTYCZNY RUCH, NIE MORAŁ: ROZDZIELIĆ LISTĘ
 *   NA TRZY KUPKI:
 *   — brakuje jednego składnika → te zrobisz, dopisz
 *     składnik przy najbliższej okazji,
 *   — wymaga półtorej godziny → tym trzeba wyznaczyć
 *     konkretny dzień, bo z samej chęci się nie zrobią,
 *   — spodobało mi się zdjęcie → te można skasować
 *     bez żalu i to jest cała sztuka,
 * — ⚠⚠ ŻE WIĘKSZOŚĆ ZAPISANYCH PRZEPISÓW NIGDY NIE ZOSTANIE
 *   UGOTOWANA I ŻE TO JEST W PORZĄDKU. Lista jest miejscem
 *   do zaglądania, nie obietnicą. ⚠⚠ ZERO MORALIZOWANIA,
 *   ZERO ROZLICZANIA, ZERO „weź się wreszcie",
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie przenosi część
 *   przepisów z kupki „za długo" do kupki „da się" —
 *   i to jest realny zysk, którego nie muszę wyolbrzymiać.
 *   ALE NIE ZROBI NIC z kupką „brakuje składnika"
 *   ani z kupką „wcale nie chcę tego jeść". Odblokowuje
 *   jedną trzecią listy, nie całą.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO JEDNEGO STAŁEGO DNIA W TYGODNIU — kąt zajęty
 *   (Mrocza, poprzednia fala). Przy kupce „wymaga
 *   półtorej godziny" piszę „wyznaczyć konkretny dzień"
 *   i NIE ROZWIJAM tego w system tygodniowy.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO KALENDARZA KUCHENNEGO NA ROK — kąt zajęty
 *   (Brwinów).
 * — ⚠⚠ ZERO POWSTAWANIA NAWYKU — kąt zajęty (Żukowo).
 * — ⚠⚠ ZERO ZAKUPÓW I LIST ZAKUPÓW — kąty zajęte (Kock,
 *   Czeladź, Opole, Goniądz, Wejherowo). „Dopisz składnik"
 *   to jedno zdanie, nie temat.
 * — ⚠⚠ ZERO SITA I PRZESIEWANIA — kąt zajęty (Biłgoraj).
 *   Sitarzy wymieniam w wyliczeniu zawodów i nic więcej.
 * — ⚠ ZERO ZAMIENNIKÓW — kąt zajęty (Kwidzyn). Przy kupce
 *   „brakuje składnika" nie doradzam podmiany, tylko
 *   dopisanie go.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM, MAREK, APLIKACJI I PORTALI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SANKTUARIUM, KULTU, KORONACJI FIGURY,
 *   PIELGRZYMEK, ODPUSTÓW I BERNARDYNÓW. To najtrudniejsze
 *   miasto tej fali: z ośmiu pierwszych wyników
 *   o historii Skępego CZTERY SĄ RELIGIJNE, a tożsamość
 *   miasta na zewnątrz to kult maryjny. NIE WCHODZĘ W TO
 *   ANI JEDNYM ZDANIEM — nie wymieniam nawet kościoła
 *   o sześciu wieżach, bo każde zdanie o nim prowadzi
 *   dalej. TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z LAT 1939–1945. Hasło
 *   en.wikipedia mówi wprost o licznych masakrach
 *   i o okupacyjnej nazwie miasta.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ — liczby i cmentarz
 *   podaje jeden z pierwszych polskich wyników o mieście.
 * — ⚠⚠ ZERO ZAMKNIĘCIA KLASZTORU W 1864 R. I ZERO
 *   POWSTANIA STYCZNIOWEGO. Utratę praw miejskich podaję
 *   jako sam fakt prawny.
 * — ⚠⚠ ZERO CMENTARZY I GROBÓW — regionalny portal ma
 *   o tym osobny tekst, wysoko w wynikach.
 * — ⚠⚠ ZERO KARCZEM, ZAJAZDÓW, GORZELNI I WARZELNICTWA.
 * — ⚠ ZERO RZEŹNIKÓW I RZEŹNICTWA.
 * — ⚠⚠ ZERO KS. JANA TWARDOWSKIEGO I ZERO JERZEGO
 *   PIETRKIEWICZA — miasto promuje ich jako swoich,
 *   a ŻADEN Z NICH NIE URODZIŁ SIĘ W SKĘPEM. Dodatkowo
 *   pierwszy jest postacią z definicji religijną.
 *   NIE BUDUJĘ TEKSTU NA SŁYNNYM MIESZKAŃCU.
 * — ⚠ ZERO „ZANIKANIA JEZIOR" I ZATORFOWIENIA — wątek
 *   zaniku.
 * — ⚠ ZERO KLAS GLEBOWYCH V I VI JAKO „SŁABEJ ZIEMI".
 * — ZERO bezrobocia, salda migracji i przyrostu naturalnego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „JEDEN STAŁY DZIEŃ W TYGODNIU" (Mrocza) dotyczy
 *   SIATKI TYGODNIA. ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ
 *   nie ma żadnego systemu ani rytmu — jest WYŁĄCZNIE
 *   LISTA ZAPISANYCH PRZEPISÓW I TO, CO Z NIĄ ZROBIĆ.
 * — „KALENDARZ KUCHENNY NA ROK" (Brwinów) dotyczy MIESIĘCY.
 * — „NAWYK" (Żukowo) dotyczy POWSTAWANIA NAWYKU.
 * — „SITO" (Biłgoraj) dotyczy PRZESIEWANIA.
 * TUTAJ chodzi o RÓŻNICĘ MIĘDZY MIEJSCEM WYMIERZONYM
 * A MIEJSCEM ZABUDOWANYM — I O TO, ŻE PIERWSZE NIE JEST
 * DŁUGIEM WOBEC DRUGIEGO.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby 7 790 — to ludność gminy, nie miasta.
 * — NIE PODAJĘ liczby domów opustoszałych z 1631 r.
 * — NIE PODAJĘ dnia przywrócenia praw miejskich.
 * — NIE PISZĘ, dlaczego miasto straciło prawa w 1867 r.
 * — NIE ROZSTRZYGAM nazwy rzeki — piszę opisowo.
 * — NIE PRZYPISUJĘ Skępemu żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 * — NIE PRZYPISUJĘ miastu żadnego słynnego mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Skępe leży w ziemi dobrzyńskiej, w powiecie lipnowskim,
 *   nad ciągiem jezior; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 3 390 mieszkańców
 *   (GUS, 31.12.2024) na 7,5 km²; cała gmina ma 7 001 osób
 *   i dwadzieścia sześć miejscowości na 178,8 km², a lasy
 *   zajmują w niej około trzydziestu procent powierzchni,
 * — w 1445 roku Mikołaj Kościelecki herbu Ogończyk uzyskał
 *   od Kazimierza Jagiellończyka przywilej na założenie
 *   miasteczka; sądziło się ono prawem chełmińskim,
 * — spis z 1631 roku wykazał w mieście osiemdziesiąt cztery
 *   domy i sześćdziesiąt sześć placów,
 * — w 1775 roku domów było osiemdziesiąt pięć,
 *   a w 1824 — sto trzydzieści, przy dziewięciuset
 *   dwudziestu czterech mieszkańcach,
 * — w XV wieku miasto miało dwa jarmarki rocznie,
 *   13 lipca i 8 września, oraz targ cotygodniowy;
 *   od 1530 roku doszedł trzeci jarmark, a w 1730 było
 *   ich trzy,
 * — po 1815 roku pracowali tu szewcy, kowale, krawcy,
 *   piekarze, stolarze, bednarze, sitarze, kołodzieje,
 *   bartnicy i smolarze,
 * — w 1880 roku działały w Skępem dwa młyny wodne,
 * — prawa miejskie miasto utraciło w 1867 roku
 *   i odzyskało je w 1997,
 * — rynek jest czworoboczny; w latach dwudziestych
 *   XX wieku usypano groblę, a w 1979 stanęła metalowa
 *   figura koziołka,
 * — jeziora skępskie leżą na wysokości stu dwunastu
 *   i stu trzynastu metrów nad poziomem morza, a łączy je
 *   rzeka odprowadzająca wody do Wisły; w gminie jest też
 *   rezerwat torfowiskowy z brzozą karłowatą.
 */
export const SKEPE: CityContent = {
  slug: "skepe",
  h1: "Thermomix Skępe – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Skępe — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Skępem: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skępe — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skępem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Skępego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Skępe"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Lista zapisanych przepisów jest miejscem do zaglądania, nie obietnicą.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skępem – jak wygląda prezentacja?",
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
      id: "szescdziesiat-szesc-placow",
      heading: "Osiemdziesiąt cztery domy i sześćdziesiąt sześć placów",
      paragraphs: [
        "Spis z 1631 roku wykazał w Skępem osiemdziesiąt cztery domy — i sześćdziesiąt sześć placów. Miejsca wymierzone, zapisane, mające swoje granice, a na nich nic.",
        "Nikt wtedy nie traktował tego jako zaległości. Plac był po prostu miejscem, które istnieje na wypadek, gdyby ktoś chciał. Nie był niezapłaconym rachunkiem.",
        "Piszę o tym, bo prawie każda z nas ma dziś taką samą listę: zapisane przepisy, których nigdy nie ugotowała. I bardzo często ta lista zamienia się w coś, czym nigdy nie miała być — w wyrzut sumienia.",
        "Więc powiem od razu: ta lista nie jest listą zobowiązań i nie zamierzam nikogo z niej rozliczać. Warto tylko wiedzieć, dlaczego przepisy na niej zostają, bo powody prawie nigdy nie mają nic wspólnego z lenistwem.",
        "Są trzy i dają się rozróżnić. Pierwszy: brakuje jednego składnika i nigdy akurat nie było go pod ręką. Drugi: przepis wymaga dużego, nieprzerwanego kawałka czasu, a taki kawałek sam się nie pojawia. Trzeci: zapisałaś go pod konkretny nastrój albo pod ładne zdjęcie, a ten nastrój nie wrócił.",
        "Praktyczny ruch jest jeden i zajmuje kwadrans: rozdzielić listę na trzy kupki, dokładnie według tych trzech powodów.",
        "Kupka „brakuje jednego składnika” jest najłatwiejsza — te przepisy naprawdę zrobisz, wystarczy dopisać ten składnik przy najbliższej okazji. Kupka „wymaga półtorej godziny” potrzebuje konkretnego dnia w kalendarzu, bo z samej chęci te dania się nie ugotują; wpisz je, zamiast o nich myśleć.",
        "A kupka trzecia — „spodobało mi się zdjęcie” — jest tą, o którą chodzi najbardziej. Te przepisy można skasować i to jest cała sztuka. Nie musisz chcieć jeść wszystkiego, co kiedyś ładnie wyglądało.",
        "Bo prawda jest taka, że większość zapisanych przepisów nigdy nie zostanie ugotowana, i to jest zupełnie w porządku. Osiemdziesiąt cztery domy stały, sześćdziesiąt sześć placów czekało, i miasto od tego nie było gorsze.",
        "Uczciwie o sprzęcie, bo tu bywa obiecywane za dużo. Urządzenie przenosi część przepisów z kupki „za długo” do kupki „da się” — i to jest zysk prawdziwy, którego nie muszę wyolbrzymiać. Rzeczy, które wymagały godziny stania i mieszania, przestają tego wymagać.",
        "Ale z kupką „brakuje składnika” nie zrobi nic, a z kupką „wcale nie chcę tego jeść” tym bardziej. Odblokowuje mniej więcej jedną trzecią listy. To dużo — i to nie jest cała lista.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skępem?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jaki przepis odkładasz najdłużej — jeśli da się go zrobić w godzinę, ugotujemy właśnie ten i będzie o jeden plac mniej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Skępem"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla skępskiej rodziny",
      paragraphs: [
        "Skępe leży w ziemi dobrzyńskiej, w powiecie lipnowskim, nad ciągiem jezior; jest miastem w gminie miejsko-wiejskiej i liczy blisko trzy i pół tysiąca mieszkańców na siedmiu i pół kilometra kwadratowego, a cała gmina — siedem tysięcy osób w dwudziestu sześciu miejscowościach, przy czym lasy zajmują w niej około trzydziestu procent powierzchni. W 1445 roku Mikołaj Kościelecki herbu Ogończyk uzyskał od Kazimierza Jagiellończyka przywilej na założenie miasteczka; sądziło się ono prawem chełmińskim. Spis z 1631 roku wykazał osiemdziesiąt cztery domy i sześćdziesiąt sześć placów, w 1775 domów było osiemdziesiąt pięć, a w 1824 — sto trzydzieści, przy dziewięciuset dwudziestu czterech mieszkańcach. W XV wieku miasto miało dwa jarmarki rocznie, 13 lipca i 8 września, oraz targ cotygodniowy; od 1530 roku doszedł trzeci jarmark, a w 1730 było ich trzy. Po 1815 roku pracowali tu szewcy, kowale, krawcy, piekarze, stolarze, bednarze, sitarze, kołodzieje, bartnicy i smolarze, a w 1880 działały dwa młyny wodne. Prawa miejskie miasto utraciło w 1867 roku i odzyskało w 1997. Rynek jest czworoboczny, w latach dwudziestych XX wieku usypano groblę, a w 1979 stanęła metalowa figura koziołka. Jeziora skępskie leżą na wysokości stu dwunastu i stu trzynastu metrów nad poziomem morza, a łączy je rzeka odprowadzająca wody do Wisły; w gminie jest też rezerwat torfowiskowy z brzozą karłowatą.",
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

  districtsHeading: "Do których części Skępego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — ma siedem i pół kilometra kwadratowego i jest rozłożyste, więc podaj proszę ulicę. Dojeżdżam też do wszystkich dwudziestu sześciu miejscowości w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Skępe też przyjadę",
  nearbyParagraphs: [
    "Lipno, Rypin, Dobrzyń nad Wisłą, Włocławek i Sierpc są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lipno", "Rypin", "Włocławek"],

  about: blokOMnie("do Skępego", "w Skępem", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Skępego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sześciu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Skępe jest miastem w gminie miejsko-wiejskiej w powiecie lipnowskim, a miejscownik od tej nazwy brzmi „w Skępem” — tak jak „w Zakopanem”.",
    },
    ...faqWspolne("w Skępem"),
    {
      question: "Co zrobić z listą przepisów, których nigdy nie ugotowałam?",
      answer:
        "Rozdzielić ją na trzy kupki, bo powody są trzy i każdy wymaga czego innego. Brakuje jednego składnika — dopisz go i te przepisy naprawdę zrobisz. Wymaga półtorej godziny — wpisz konkretny dzień, bo z samej chęci się nie ugotują. Spodobało Ci się zdjęcie — te można skasować bez żalu. Większość zapisanych przepisów nigdy nie powstaje i to jest normalne; lista jest miejscem do zaglądania, nie obietnicą.",
    },
    {
      question: "Czy Thermomix sprawi, że wreszcie ugotuję to, co odkładam?",
      answer:
        "Część tak, i nie będę obiecywać więcej. Przepisy odkładane dlatego, że wymagają długiego stania i mieszania, przechodzą do kategorii wykonalnych — to realna zmiana. Ale te odkładane dlatego, że stale brakuje jednego składnika, zostaną tam, gdzie były. A te zapisane pod ładne zdjęcie warto po prostu skasować.",
    },
  ],

  geo: { lat: 52.8661, lng: 19.3469 },
};
