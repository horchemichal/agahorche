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
 * SOBÓTKA — powiat wrocławski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Sobótka.
 * MIASTO: 7 033 mieszkańców (GUS 31.12.2024), 32,2 km²,
 *   gęstość 218,4 os./km².
 *   ⚠ KONTROLA: 32,2 × 218,4 = 7 032,5 — DOMYKA SIĘ.
 * CAŁA GMINA: 13 043 osoby, 136,3 km².
 *   ⚠⚠ LICZBY WSI NIE PODAJĘ JAKO PEWNEJ — serwis
 *   deklaruje 23, a wymienia 22. PISZĘ „PONAD DWADZIEŚCIA".
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠⚠ OSOBLIWOŚĆ: MIASTO ZAJMUJE 32,2 km², czyli 23,6 %
 *   powierzchni swojej gminy — najwięcej w tej fali,
 *   przy najniższej gęstości (218,4). Przyczyna jest
 *   topograficzna: w granicach miasta mieszczą się
 *   zbocza masywu. ⚠ TO MÓJ WNIOSEK, nie fakt ze źródła —
 *   PODAJĘ POWIERZCHNIĘ, NIE WYJAŚNIENIE.
 *   ⚠⚠ NIE ROBIĘ Z TEGO KĄTA — proporcje i gęstość
 *   to obszar ograny.
 * ⚠ WYSOKOŚĆ MIASTA: 160–220 m n.p.m. ⚠ 30 km
 *   od Wrocławia. ⚠ GEO: 50,9 / 16,75.
 *
 * ⚠⚠⚠ NOTA ETYCZNA NAJWYŻSZEJ WAGI — DWIE WARSTWY:
 *   1) DOMINUJĄCY WĄTEK TURYSTYCZNY MIASTA TO KULT
 *      NA ŚLĘŻY: rzeźby kultowe, kamienny lew z XII w.,
 *      kaplica szczytowa, „święta góra". ⚠⚠⚠ POMIJAM
 *      TEN WĄTEK W CAŁOŚCI, BEZ WZMIANKI I BEZ ALUZJI.
 *   2) ⚠⚠⚠ SAMA NAZWA MIASTA PROWADZI DO WYKLUCZONEGO
 *      TEMATU: „sobótka" małą literą to noc świętojańska
 *      i obrzęd. ⚠⚠⚠ W CAŁYM TEKŚCIE NIE UŻYWAM SŁOWA
 *      „SOBÓTKA" MAŁĄ LITERĄ W ŻADNYM ZNACZENIU
 *      I UNIKAM SĄSIEDZTWA SŁÓW: ognisko, czerwiec, noc,
 *      wianek, obrzęd, tradycja ludowa.
 *      ⚠⚠⚠ RATUNEK: PRZYMIOTNIK „SOBÓCKI" — forma
 *      urzędowa (wieś Rogów Sobócki), BEZ HOMONIMU
 *      OBRZĘDOWEGO. Używam go wszędzie, gdzie się da.
 *      ⚠⚠ NIGDY „sobótkowy" — to przymiotnik od ogniska.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠⚠ ODMIANA: D. SOBÓTKI, Ms. W SOBÓTCE, B. SOBÓTKĘ.
 *   Liczba pojedyncza, rodzaj żeński: „Sobótka LEŻY",
 *   „TA Sobótka", „Sobótka ZOSTAŁA lokowana".
 *   ⚠⚠ LITERA ó ZOSTAJE WE WSZYSTKICH PRZYPADKACH —
 *   Sobótki, Sobótce, Sobótkę. TO ODWROTNA PUŁAPKA NIŻ
 *   PRZY SYCOWIE I CHOCIANOWIE, gdzie ó wypadało.
 *   Przymiotnik: SOBÓCKI [ZW]. ⚠ Zapis „sobocki" błędny.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠ POZOSTAŁE PUŁAPKI:
 *   — ⚠⚠ ISTNIEJE WIEŚ SOBOTA W WOJ. DOLNOŚLĄSKIM.
 *     A w tekście o kuchni słowo „sobota" pojawia się
 *     naturalnie. ⚠⚠⚠ NIE PISZĘ „w sobotę w Sobótce" —
 *     jeśli wymieniam terminy, piszę „w weekend".
 *   — ⚠⚠ TRZY INNE MIEJSCOWOŚCI O NAZWIE SOBÓTKA:
 *     wsie w wielkopolskiem (pow. ostrowski)
 *     i w podlaskiem (pow. bielski), oraz [NP]
 *     w świętokrzyskiem. TYLKO JEDNA JEST MIASTEM.
 *   — ⚠⚠⚠ ŚLĘŻA (przez ż) TO GÓRA, 718 m n.p.m.
 *     ŚLĘZA (przez z) TO RZEKA, a także WIEŚ ŚLĘZA
 *     W GMINIE KOBIERZYCE — w tym samym powiecie.
 *     RÓŻNICA JEDNEJ LITERY. SPRAWDZIĆ OSOBNYM
 *     PRZEBIEGIEM.
 *   — ⚠⚠ WIEŚ STRZEGOMIANY LEŻY W GMINIE SOBÓTKA
 *     i nie ma nic wspólnego ze STRZEGOMIEM (powiat
 *     świdnicki), opisanym wcześniej w tym cyklu.
 *   — ⚠ Sobótka-Górka to inne miejsce niż sama Sobótka.
 *   — ⚠⚠ TRZY MIASTA Z TEJ FALI LEŻĄ W POWIECIE
 *     WROCŁAWSKIM: Sobótka, Kąty Wrocławskie i Siechnice.
 *     NIGDY NIE PISZĘ SAMEGO „W POWIECIE".
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * PRAWA MIEJSKIE — ⚠⚠⚠ SPRZECZNOŚĆ POTRÓJNA:
 *   1221 (Henryk Brodaty) / 1254 (Henryk III Biały) /
 *   1399 (odnowienie przez Wacława IV). 178 lat
 *   rozpiętości i trzech różnych nadawców.
 *   ⚠⚠⚠ NIE KONSTRUUJĘ CIĄGU NA WŁASNĄ RĘKĘ.
 *   Piszę: „prawa miejskie w pierwszej połowie XIII w.,
 *   źródła podają 1221 albo 1254, a w 1399 odnowił je
 *   Wacław IV" — z podaniem obu wariantów.
 *   ⚠ Pierwsza wzmianka: 1148, jako „Sabath".
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZY SZLAKI Z MIASTA NA SZCZYT:
 *   niebieski — 4,1 km, 2 godziny 0 minut
 *   czerwony  — 5,2 km, 2 godziny 8 minut
 *   żółty     — 5,4 km, 2 godziny 16 minut
 *   ⚠⚠⚠ NAJKRÓTSZY JEST O 24 % KRÓTSZY OD NAJDŁUŻSZEGO,
 *   A SZYBSZY TYLKO O SZESNAŚCIE MINUT, CZYLI O 12 %.
 *   Przeliczone na tempo: 2,05 km/h na najkrótszym,
 *   2,44 km/h na najdłuższym — NA NAJKRÓTSZEJ DRODZE
 *   IDZIE SIĘ NAJWOLNIEJ. To jest cały kąt.
 *   ⚠ TEMPA W KM/H NIE PODAJĘ W TEKŚCIE — to mój
 *   przelicznik. Podaję trzy pary liczb i wniosek
 *   opisowy.
 *   ⚠ Pozostałe trasy: z Sulistrowic czerwony 3,6 km
 *   i 1:44; z Przełęczy Tąpadła żółty 3,1 km i 1:24,
 *   niebieski 4,7 km i 1:51. PODAJĘ WYBIÓRCZO.
 *
 * KAMIENIOŁOM — FAKT DRUGORZĘDNY, BEZ MORAŁU:
 *   Starożytny kamieniołom na zboczach masywu działał
 *   OD V W. P.N.E. PO WIEK XIII — około osiemnastu
 *   stuleci. Surowiec: miejscowy granit. GŁÓWNYM
 *   WYROBEM EKSPORTOWYM BYŁY KAMIENIE ŻARNOWE,
 *   czyli żarna do mielenia ziarna.
 *   ⚠⚠ NIE ZESTAWIAM TEGO GRANITU ZE STRZELIŃSKIM
 *   ANI STRZEGOMSKIM — petrografii masywu
 *   nie zweryfikowano. TWARDA GRANICA.
 *   ⚠⚠ WYMIARÓW, GŁĘBOKOŚCI ANI ILOŚCI PRODUKCJI
 *   NIE USTALONO — nie podaję.
 *   ⚠⚠ ŻARNA PODAJĘ JAKO FAKT HISTORYCZNY O WYROBIE
 *   EKSPORTOWYM. ⚠⚠⚠ ZERO PORAD O MIELENIU, MĄCE
 *   I ZIARNIE. TWARDA GRANICA.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ŚLĘŻAŃSKI PARK KRAJOBRAZOWY: utworzony 1988,
 *   powiększony 1994; 8 190 ha parku i 7 450 ha otuliny,
 *   razem 15 640 ha. ⚠ SUMA DOMYKA SIĘ CO DO HEKTARA.
 * — SZCZYTY: Ślęża 718 m n.p.m., Radunia 573, Szczytna
 *   466, Wieżyca 415.
 * — Zespół Przyrodniczo-Krajobrazowy Skalna: blisko 33 ha.
 *   ⚠ POWIERZCHNI TRZECH REZERWATÓW NIE USTALONO.
 * — Budynek muzeum: około 1568 r.
 * — Rezerwat archeologiczny w Będkowicach: utworzony
 *   1975, stanowisko datowane na VIII–XI w.
 *   ⚠⚠ OPISUJĘ WYŁĄCZNIE JAKO DATĘ UTWORZENIA.
 * — Zamek Sobótka-Górka: najstarsze fragmenty z X w.
 * — ⚠⚠ KOŚCIOŁÓW NIE OPISUJĘ — wątek wyznaniowy.
 * — ⚠⚠ POŻARÓW (1730, 1739) NIE WYMIENIAM.
 * — ⚠ DENIWELACJA W GRANICACH GMINY: od 160 m
 *   do 718 m, czyli 558 m. ⚠ TO MÓJ RACHUNEK —
 *   podaję obie liczby osobno, opisowo.
 *
 * LISTA PRODUKTÓW TRADYCYJNYCH — GMINA SOBÓTKA: TAK.
 *   „CHLEB CHŁOPSKI Z ROGOWA SOBÓCKIEGO", kategoria
 *   wyrobów piekarniczych i cukierniczych. Rogów Sobócki
 *   figuruje na urzędowej liście miejscowości gminy
 *   Sobótka i ma własną placówkę pocztową.
 *   ⚠⚠⚠ PODAJĘ WYŁĄCZNIE JAKO FAKT REJESTROWY.
 *   ZERO PORAD O PIECZENIU, ZERO PRZEPISÓW.
 *   ⚠ DATY WPISU I WNIOSKODAWCY NIE USTALONO —
 *   NIE PODAJĘ.
 *   ⚠⚠⚠ „KAPUSTY KWASZONEJ ŚLĘŻAŃSKIEJ" I „OGÓRKÓW
 *   KWASZONYCH ŚLĘŻAŃSKICH" NIE PRZYPISUJĘ GMINIE
 *   SOBÓTKA. Karta produktu na gov.pl NIE WYMIENIA
 *   ani gminy, ani miasta; jedyne źródło podające
 *   pochodzenie podało je błędnie („Gmina Ślęza" —
 *   taka gmina nie istnieje). To oznaczenie regionalne
 *   masywu, tak samo jak produkty „z Karkonoszy"
 *   i „sudeckie". TWARDA GRANICA.
 *
 * KĄT: KRÓTSZA DROGA NIE JEST PROPORCJONALNIE SZYBSZA
 * — o tym, że skracając procedurę wykreślamy to, co i tak
 * było krótkie, a zostaje to, czego wykreślić się nie da.
 * Kąt od trzech sobóckich szlaków na Ślężę: najkrótszy
 * jest krótszy o prawie jedną czwartą, a szybszy
 * o szesnaście minut.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że z miasta na szczyt Ślęży prowadzą trzy szlaki:
 *   niebieski 4,1 km w dwie godziny, czerwony 5,2 km
 *   w dwie godziny osiem minut, żółty 5,4 km w dwie
 *   godziny szesnaście,
 * — ŻE NAJKRÓTSZY JEST KRÓTSZY O PRAWIE JEDNĄ CZWARTĄ,
 *   A SZYBSZY TYLKO O SZESNAŚCIE MINUT — czyli
 *   na najkrótszej drodze idzie się najwolniej.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE DOKŁADNIE TO SAMO DZIEJE SIĘ PRZY SKRACANIU
 *   ROBOTY W KUCHNI: patrzysz na przepis na dwanaście
 *   kroków, wykreślasz cztery i spodziewasz się jednej
 *   trzeciej oszczędności,
 * — ⚠⚠ ŻE NIE DOSTAJESZ JEJ NIGDY, BO WYKREŚLASZ TO,
 *   CO KRÓTKIE: odmierzenie, przesypanie, przełożenie
 *   do miski. Zostaje to, czego wykreślić się nie da —
 *   nagrzanie, odpoczynek ciasta, redukcja, stygnięcie,
 * — ⚠⚠ ŻE TO ONE ZAJMUJĄ CZAS, A NIE LICZBA CZYNNOŚCI,
 * — ⚠⚠ ŻE PRAKTYCZNY RUCH JEST JEDEN I ROBI SIĘ GO RAZ:
 *   zmierz zegarkiem, nie na oko, ile trwa każdy krok
 *   osobno. Prawie zawsze okaże się, że większość czasu
 *   siedzi w dwóch krokach, w których nic nie robisz,
 * — ⚠⚠ ŻE SKRACANIE LISTY CZYNNOŚCI NIE SKRACA
 *   GOTOWANIA — skraca je przestawienie tych dwóch
 *   kroków na wcześniej,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: krótsza droga bywa lepsza
 *   z zupełnie innego powodu niż czas — mniej okazji
 *   do pomyłki, mniej naczyń, mniej do posprzątania.
 *   To są dobre powody. Po prostu nie są powodami
 *   czasowymi i nie należy ich tak liczyć,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie skraca tych
 *   dwóch nieusuwalnych kroków. MÓWIĘ TO WPROST —
 *   ciasto odpoczywa tyle samo, a sos redukuje się tyle
 *   samo. Zmienia co innego: podczas tych kroków nie
 *   trzeba stać obok.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno). Nie piszę o obciążeniu ani o wartości
 *   przeciętnej.
 * — ⚠⚠⚠ ZERO PRZELICZANIA PRZEPISU I SKALI — kąt zajęty
 *   (Kowary). Nie piszę o zmianie liczby porcji.
 * — ⚠⚠⚠ ZERO ROZMIARU SPRZĘTU I LICZBY TUR — kąt zajęty
 *   (Ziębice).
 * — ⚠⚠⚠ ZERO METODY I KOLEJNOŚCI CZYNNOŚCI — kąt zajęty
 *   (Milicz). ⚠⚠ TO JEST NAJBLIŻSZY OBSZAR: tamten tekst
 *   mówi „zanim dokupisz, sprawdź kolejność"; ten mówi
 *   „skracanie listy kroków nie skraca czasu, bo czas
 *   siedzi w krokach bezczynnych". ROZGRANICZAM JAWNIE.
 * — ⚠⚠ ZERO USTALONEJ PROCEDURY — kąt zajęty
 *   (Środa Śląska).
 * — ⚠⚠ ZERO CZASU ODTWORZENIA — kąt zajęty (Góra).
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS — kąt zajęty (Stopnica).
 * — ⚠⚠ ZERO ODEJMOWANIA I WYKREŚLANIA SKŁADNIKÓW —
 *   kąt zajęty (Strzegom). Piszę o wykreślaniu KROKÓW
 *   i o tym, że to nie działa — nie o usuwaniu
 *   składników. ROZGRANICZAM.
 * — ⚠⚠ ZERO CIENKIEGO, ALE PIERWSZEGO — kąt pisany
 *   w tej samej fali (Kąty Wrocławskie).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA —
 *   ⚠⚠⚠ piszę o czasie, więc pokusa jest duża.
 *   NIE PODAJĘ ANI JEDNEJ LICZBY MINUT DLA ŻADNEJ
 *   CZYNNOŚCI KUCHENNEJ. Minuty w tekście dotyczą
 *   WYŁĄCZNIE szlaków.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o stygnięciu i odpoczynku ciasta
 *   NIE MÓWIĘ NIC o przechowywaniu ani o świeżości.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO KULTU NA ŚLĘŻY, RZEŹB KULTOWYCH, KAPLICY
 *   SZCZYTOWEJ I OKREŚLENIA „ŚWIĘTA GÓRA".
 * — ⚠⚠⚠ ZERO SŁOWA „SOBÓTKA" MAŁĄ LITERĄ I ZERO
 *   SĄSIEDZTWA SŁÓW: ognisko, czerwiec, noc, wianek,
 *   obrzęd.
 * — ⚠⚠⚠ ZERO PORAD O MIELENIU, MĄCE I ZIARNIE — żarna
 *   podaję wyłącznie jako historyczny wyrób eksportowy.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów nie opisuję.
 * — ⚠⚠ ZERO POŻARÓW.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby wsi jako pewnej — 23 albo 22.
 * — NIE PODAJĘ jednej daty praw miejskich ani jednego
 *   nadawcy — źródła podają trzy warianty.
 * — NIE PODAJĘ tempa w kilometrach na godzinę —
 *   to mój przelicznik.
 * — NIE ZESTAWIAM granitu z Sobótki z granitem
 *   ze Strzelina ani ze Strzegomia.
 * — NIE PODAJĘ wymiarów ani wydajności kamieniołomu.
 * — NIE PODAJĘ powierzchni trzech rezerwatów.
 * — NIE PODAJĘ daty wpisu chleba na Listę Produktów
 *   Tradycyjnych ani wnioskodawcy — nie ustalono.
 * — NIE PRZYPISUJĘ gminie Sobótka kapusty ani ogórków
 *   „ślężańskich" — to oznaczenie masywu.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE MYLĘ Ślęży (góry) ze Ślęzą (rzeką i wsią).
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Sobótka leży u stóp Ślęży, w powiecie wrocławskim,
 *   30 km od Wrocławia, na wysokości od 160 do 220 m
 *   n.p.m.; miasto liczy 7 033 mieszkańców
 *   (GUS, 31.12.2024) i zajmuje 32,2 km² — blisko
 *   jedną czwartą powierzchni swojej gminy, która liczy
 *   13 043 osoby na 136,3 km² i ponad dwadzieścia wsi,
 * — pierwsza wzmianka pochodzi z 1148 r., w formie
 *   „Sabath"; prawa miejskie miasto otrzymało w pierwszej
 *   połowie XIII w. — źródła podają 1221 (Henryk Brodaty)
 *   albo 1254 (Henryk III Biały) — a w 1399 r. odnowił
 *   je Wacław IV,
 * — z miasta na szczyt Ślęży prowadzą trzy znakowane
 *   szlaki: niebieski o długości 4,1 km, na który podaje
 *   się dwie godziny; czerwony 5,2 km i dwie godziny
 *   osiem minut; żółty 5,4 km i dwie godziny szesnaście
 *   minut. Z Przełęczy Tąpadła szlak żółty ma 3,1 km
 *   i godzinę dwadzieścia cztery,
 * — na zboczach masywu działał starożytny kamieniołom:
 *   od V w. p.n.e. po wiek XIII, czyli około osiemnastu
 *   stuleci; wydobywano miejscowy granit, a głównym
 *   wyrobem eksportowym były kamienie żarnowe,
 * — Ślężański Park Krajobrazowy utworzono w 1988 r.
 *   i powiększono w 1994; obejmuje 8 190 ha, a otulina
 *   kolejne 7 450 ha — razem 15 640 ha. Ślęża ma 718 m
 *   n.p.m., Radunia 573, Szczytna 466, a Wieżyca 415;
 *   Zespół Przyrodniczo-Krajobrazowy Skalna liczy blisko
 *   33 ha, a rezerwat archeologiczny w Będkowicach
 *   utworzono w 1975 r.,
 * — budynek muzeum pochodzi z około 1568 r., a najstarsze
 *   fragmenty zamku w Sobótce-Górce z X w.,
 * — chleb chłopski z Rogowa Sobóckiego — wsi w gminie
 *   Sobótka — figuruje na Krajowej Liście Produktów
 *   Tradycyjnych w kategorii wyrobów piekarniczych
 *   i cukierniczych.
 */
export const SOBOTKA: CityContent = {
  slug: "sobotka",
  h1: "Thermomix Sobótka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sobótka — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sobótce: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sobótka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sobótce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sobótki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie, a jest ich ponad dwadzieścia.",

  highlights: highlightyStandardowe("Sobótka"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "O jedną czwartą krótsza droga, a szybsza tylko o szesnaście minut.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sobótce – jak wygląda prezentacja?",
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
      id: "krotsza-droga",
      heading: "Krótsza droga nie jest proporcjonalnie szybsza",
      paragraphs: [
        "Z Sobótki na szczyt Ślęży prowadzą trzy znakowane szlaki i wszystkie kończą się w tym samym miejscu.",
        "Niebieski ma cztery kilometry i sto metrów, a podaje się na niego dwie godziny. Czerwony ma pięć kilometrów dwieście i dwie godziny osiem minut. Żółty pięć czterysta i dwie godziny szesnaście minut.",
        "Najkrótszy jest krótszy od najdłuższego o prawie jedną czwartą. A szybszy — o szesnaście minut, czyli mniej więcej o jedną ósmą.",
        "Innymi słowy: na najkrótszej drodze idzie się najwolniej ze wszystkich trzech.",
        "W kuchni robimy dokładnie ten sam rachunek i dokładnie tak samo się mylimy.",
        "Patrzysz na przepis rozpisany na dwanaście kroków, wykreślasz cztery i spodziewasz się jednej trzeciej oszczędności. Nie dostajesz jej nigdy.",
        "Bo wykreślasz to, co krótkie. Odmierzenie. Przesypanie. Przełożenie do miski. Każda z tych czynności trwa chwilę i każda daje się usunąć — właśnie dlatego, że jest drobna.",
        "Zostaje to, czego wykreślić się nie da: nagrzanie, odpoczynek ciasta, redukcja sosu, stygnięcie. I to one zajmują czas, a nie liczba czynności na liście.",
        "Ruch, który to rozstrzyga, robi się raz: zmierz zegarkiem, nie na oko, ile trwa każdy krok osobno. Nie oszacuj — zmierz. Prawie zawsze okaże się, że większość czasu siedzi w dwóch krokach, w których w ogóle nic nie robisz.",
        "I wtedy widać, co naprawdę działa. Skracanie listy czynności nie skraca gotowania. Skraca je przestawienie tych dwóch bezczynnych kroków na wcześniej — tak, żeby trwały wtedy, kiedy i tak robisz co innego.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, w jakiej kolejności w ogóle gotować ani o usuwanie składników z przepisu. Chodzi o jedną konkretną pomyłkę rachunkową — o to, że liczymy kroki, a płacimy minutami, i że te dwie liczby nie są proporcjonalne.",
        "Uczciwie o drugiej stronie: krótsza droga bywa lepsza, tylko z innego powodu niż czas. Mniej okazji do pomyłki, mniej naczyń, mniej do posprzątania. To są dobre powody i warto po nie sięgać — po prostu nie należy ich zapisywać po stronie zegara.",
        "Na koniec o urządzeniu, i to nie jest wygodne dla mnie.",
        "Thermomix nie skraca tych dwóch nieusuwalnych kroków. Ciasto odpoczywa tyle samo, sos redukuje się tyle samo, stygnięcie trwa tyle, ile trwa — i żadne urządzenie tego nie obejdzie. Zmienia co innego: przez ten czas nie trzeba stać obok, bo gotuje z ustawioną temperaturą i mieszaniem. Czas zostaje ten sam, uwaga się zwalnia. To dwie różne rzeczy i wolę je rozdzielić.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sobótce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile czasu realnie macie na obiad w tygodniu. Nie ile chcielibyście mieć — ile macie. Z tego wynika dobór dań na spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sobótce"),
    sekcjaRaty("w Sobótce"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Sobótki",
      paragraphs: [
        "Sobótka leży u stóp Ślęży, w powiecie wrocławskim, trzydzieści kilometrów od Wrocławia, na wysokości od stu sześćdziesięciu do dwustu dwudziestu metrów nad poziomem morza. Miasto liczy 7 033 mieszkańców (GUS, 31.12.2024) i zajmuje trzydzieści dwa kilometry kwadratowe — blisko jedną czwartą powierzchni swojej gminy, co jest rzadkością; cała gmina miejsko-wiejska liczy ponad trzynaście tysięcy osób na stu trzydziestu sześciu kilometrach, z ponad dwudziestoma wsiami. Pierwsza wzmianka pochodzi z 1148 roku, w formie „Sabath”. Prawa miejskie miasto otrzymało w pierwszej połowie trzynastego wieku — źródła podają rok 1221 i księcia Henryka Brodatego albo rok 1254 i Henryka III Białego, więc nie rozstrzygam tego za nie — a w 1399 odnowił je Wacław IV. Na zboczach masywu działał starożytny kamieniołom: od piątego wieku przed naszą erą po wiek trzynasty, czyli około osiemnastu stuleci. Wydobywano miejscowy granit, a głównym wyrobem eksportowym były kamienie żarnowe. Ślężański Park Krajobrazowy utworzono w 1988 roku i powiększono w 1994; obejmuje osiem tysięcy sto dziewięćdziesiąt hektarów, a otulina kolejne siedem tysięcy czterysta pięćdziesiąt — razem piętnaście tysięcy sześćset czterdzieści. Ślęża ma siedemset osiemnaście metrów nad poziomem morza, Radunia pięćset siedemdziesiąt trzy, Szczytna czterysta sześćdziesiąt sześć, a Wieżyca czterysta piętnaście. Zespół Przyrodniczo-Krajobrazowy Skalna liczy blisko trzydzieści trzy hektary, rezerwat archeologiczny w Będkowicach utworzono w 1975 roku, budynek muzeum pochodzi z około 1568, a najstarsze fragmenty zamku w Sobótce-Górce z dziesiątego wieku. Chleb chłopski z Rogowa Sobóckiego, wsi w tej gminie, figuruje na Krajowej Liście Produktów Tradycyjnych.",
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

  districtsHeading: "Do których części Sobótki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — a jest ono obszarowo duże, trzydzieści dwa kilometry kwadratowe — i do wszystkich wsi w gminie, łącznie z Rogowem Sobóckim, Sulistrowicami, Strzegomianami i Będkowicami. Wszędzie bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Sobótkę też przyjadę",
  nearbyParagraphs: [
    "Do Wrocławia jest stąd trzydzieści kilometrów. Dojeżdżam też do Świdnicy, Kątów Wrocławskich, Kobierzyc, Jordanowa Śląskiego i Mietkowa — wszędzie bezpłatnie.",
  ],
  nearbyTowns: ["Wrocław", "Świdnica", "Kąty Wrocławskie", "Kobierzyce", "Mietków"],

  about: blokOMnie("do Sobótki", "w Sobótce i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sobótki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie, łącznie z Rogowem Sobóckim, Sulistrowicami, Strzegomianami i Będkowicami. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Sobótkę u stóp Ślęży, w powiecie wrocławskim — wsie o tej samej nazwie są też w Wielkopolsce i na Podlasiu. Dwie uwagi na koniec: Ślęża przez „ż” to góra, a Ślęza przez „z” to rzeka i wieś w gminie Kobierzyce; a wieś Strzegomiany w tej gminie nie ma nic wspólnego ze Strzegomiem w powiecie świdnickim.",
    },
    ...faqWspolne("w Sobótce"),
    {
      question: "Skróciłam przepis o kilka kroków i gotowanie wcale nie trwa krócej. Dlaczego?",
      answer:
        "Bo wykreśla się to, co i tak było krótkie. Z Sobótki na szczyt Ślęży prowadzą trzy szlaki: niebieski ma cztery kilometry sto i dwie godziny, żółty pięć czterysta i dwie godziny szesnaście — najkrótszy jest krótszy o prawie jedną czwartą, a szybszy tylko o szesnaście minut. W kuchni jest tak samo: znikają odmierzanie, przesypywanie i przekładanie, a zostaje nagrzewanie, odpoczynek ciasta, redukcja i stygnięcie. Zmierz raz zegarkiem każdy krok osobno, a zobaczysz, że większość czasu siedzi w dwóch krokach, w których nic nie robisz. Skraca nie wykreślanie kroków, tylko przestawienie tych dwóch na wcześniej.",
    },
    {
      question: "Czy Thermomix skraca czas gotowania?",
      answer:
        "Nie tam, gdzie liczy się najbardziej — ciasto odpoczywa tyle samo, sos redukuje się tyle samo, a stygnięcie trwa tyle, ile trwa. Żadne urządzenie tego nie obejdzie i nie będę udawać inaczej. Zmienia co innego: przez ten czas nie trzeba stać obok, bo gotuje z ustawioną temperaturą i mieszaniem. Czas zostaje ten sam, zwalnia się uwaga — i to dwie zupełnie różne rzeczy, które warto liczyć osobno.",
    },
  ],

  geo: { lat: 50.9, lng: 16.75 },
};
