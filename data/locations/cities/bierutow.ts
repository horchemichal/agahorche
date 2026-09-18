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
 * BIERUTÓW — powiat oleśnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 431 mieszkańców (GUS 31.12.2024), 8,4 km²,
 *   gęstość 530,0 os./km² [ZW, domyka się przy
 *   powierzchni 8,36 km²]. PODAJĘ.
 * CAŁA GMINA: 9 226 osób, 147,0 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 9 226 / 147,0 = 62,8,
 *   a serwis podaje 64. NIE DOMYKA SIĘ.
 *   ⚠⚠ MIASTO TO 48,0 % LUDNOŚCI GMINY — MNIEJ NIŻ
 *   POŁOWA. Poza miastem mieszka 4 795 osób, o 364 więcej
 *   niż w samym Bierutowie. PODAJĘ JAKO FAKT.
 *   ⚠ Proporcja jest trwała, nie jednoroczna — w 2019 r.
 *   też wieś była liczniejsza.
 *   ⚠ SZESNAŚCIE WSI, przy czym ⚠⚠ TO JEDYNA GMINA TEJ
 *   FALI, DLA KTÓREJ DWA ŹRÓDŁA PODAJĄ IDENTYCZNĄ LISTĘ:
 *   Gorzesław, Jemielna, Karwiniec, Kijowice, Kruszowice,
 *   Paczków, Posadowice, Radzieszyn, Sątok, Solniki Małe,
 *   Solniki Wielkie, Stronia, Strzałkowa, Wabienice,
 *   Zawidowice, Zbytowa. MOGĘ PODAĆ LICZBĘ JAKO PEWNĄ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ WYSOKOŚCI MIASTA N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 51,133 / 17,533.
 *
 * ⚠ ODMIANA — REGULARNA, BEZ PUŁAPEK:
 *   D. do Bierutowa · Ms. w Bierutowie · B. Bierutów.
 *   ⚠⚠ PRZYMIOTNIKA „BIERUTOWSKI" NIE UŻYWAM — [NP],
 *   w źródłach nieobecny. KONSTRUKCJA PRZYIMKOWA.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 * ⚠⚠⚠ ETYMOLOGII NAZWY NIE ROZWIJAM ANI SŁOWEM.
 *   Nazwę ustalono po 1945 r. i pochodzi od nazwiska
 *   polityka — TO JEST WĄTEK POLITYCZNY I WYKLUCZONY.
 *   Nie piszę też, jak miasto nazywało się wcześniej.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE — BARDZO GĘSTE POLE:
 *   — ⚠⚠⚠ BIERUTOWICE — dawna nazwa części Karpacza
 *     (Karpacz Górny), TO SAMO WOJEWÓDZTWO, różnica
 *     dwóch liter. GŁÓWNA KOLIZJA.
 *   — ⚠⚠ BIERUŃ (śląskie) — miasto, ten sam rdzeń.
 *   — ⚠⚠⚠ PACZKÓW — WIEŚ W TEJ GMINIE, ale też MIASTO
 *     w woj. opolskim, znane z zachowanych murów
 *     miejskich. ⚠ Bierutów też ma mury — pomyłka
 *     bardzo łatwa. OSTRZEGAM W SEKCJI O DZIELNICACH.
 *   — ⚠⚠⚠ STRONIA — WIEŚ W TEJ GMINIE, a STRONIE
 *     ŚLĄSKIE to miasto z własną stroną w tym cyklu.
 *     Różnica jednej litery.
 *   — ⚠ PARA BLIŹNIACZA: Solniki Małe i Solniki Wielkie.
 *   — ⚠ KIJOWICE — wieś w gminie, myląco podobna
 *     do Kijowa.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ SYCÓW I TWARDOGÓRA (ten sam powiat oleśnicki)
 *   MAJĄ JUŻ STRONY — nie powtarzam ich figur.
 *
 * ⚠⚠ DATY USTROJOWE — DWIE LOKACJE:
 *   — PIERWSZA WZMIANKA: 1214 r., „osada targowa
 *     z kościołem" [ZW],
 *   — PIERWSZA LOKACJA: ok. 1250 r., na prawie
 *     niemieckim — ⚠⚠ NIEUDANA,
 *   — DRUGA, SKUTECZNA: 1266 r., NA PRAWIE FRANKOŃSKIM,
 *     książę HENRYK III WROCŁAWSKI [ZW].
 *   ⚠⚠ Szesnaście lat przerwy i ZMIANA PODSTAWY PRAWNEJ.
 *   ⚠⚠⚠ „DRUGA PRÓBA NA INNEJ PODSTAWIE" BYŁABY DOBRYM
 *   KĄTEM, ALE TO DRUGI KĄT W JEDNYM TEKŚCIE — a do tego
 *   ociera się o „zapasowe powinno być inne" (Chocianów).
 *   PODAJĘ JAKO FAKT, BEZ MORAŁU.
 *   ⚠⚠ RÓŻNICY 52 LAT (1214 → 1266) NIE ROBIĘ KĄTEM.
 *   ⚠ PRZYWILEJU SĄDOWNICTWA (1333) NIE WYMIENIAM —
 *   wątek sądowniczy.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SPIS Z 1323 ROKU:
 *   Liczbę mieszkańców Bierutowa w 1323 r. — ok. 600 osób
 *   — ustalono NIE ZE SPISU LUDNOŚCI, tylko z liczby
 *   punktów handlowych:
 *   — 13 JATEK RZEŹNICZYCH,
 *   — 10 PIEKARNI,
 *   — 2 KRAMY SZEWSKIE,
 *   RAZEM 25 PUNKTÓW → ok. 600 osób, czyli 24 osoby
 *   na punkt.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 13+10+2 = 25;
 *   600 / 25 = 24.
 *   ⚠⚠⚠ NIKT NIE POLICZYŁ LUDZI. Policzono stragany —
 *   bo stragany liczono z zupełnie innych powodów —
 *   a liczba mieszkańców jest produktem ubocznym.
 *   To jest cały kąt.
 *   ⚠⚠ NIE TWIERDZĘ, W JAKIM CELU spisano stragany —
 *   źródło tego nie podaje. Piszę ostrożnie: „liczono
 *   je z innych powodów niż demograficzne".
 *   ⚠⚠ NIE PODAJĘ liczby 600 jako pomiaru ludności —
 *   ZAWSZE z zaznaczeniem, że to szacunek z przelicznika.
 *   ⚠ W tym samym 1323 r. prawdopodobnie założono zamek.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ZABUDOWA 1785 r.: 201 domów, z czego 40 murowanych
 *   — czyli co piąty.
 *   ⚠⚠⚠ DANYCH Z 1473 I 1843 R. NIE PODAJĘ — obie
 *   liczby budynków pochodzą z opisów pożarów,
 *   a pożar jako żywioł jest wykluczony. Nie chcę też
 *   wyliczać liczby budynków wstecz z ułamka.
 * — ZAMEK: założony ok. 1323 r. za księcia Konrada I;
 *   przebudowa renesansowa 1534–1540; nowe skrzydła
 *   wschodnie i południowe 1622–1624; barokowa brama
 *   wjazdowa, trzyosiowa, ceglana, ok. 1680 r.;
 *   pod koniec XIX w. rozebrano zniszczone skrzydło
 *   wschodnie; zachowane jest dwukondygnacyjne skrzydło
 *   południowe z renesansową kamieniarką; park
 *   krajobrazowy ok. 1,2 ha.
 *   ⚠ POŻARU Z 1603 R. I ZAWALEŃ GANKÓW (1829, 1852)
 *   NIE WYMIENIAM.
 * — WIEŻA ZAMKOWA: pięć kondygnacji; dolna część
 *   kwadratowa, wyżej przechodzi w ośmiobok; barokowy
 *   hełm z podwójną latarnią; w 2005 r. zdemontowano
 *   zabytkową kopułę z powodu przechylenia, a w 2007
 *   wróciła zrekonstruowana — wieża stała dwa lata bez
 *   szczytu.
 *   ⚠ WYSOKOŚCI NIE USTALONO — NIE PODAJĘ.
 * — WIEŻA RATUSZOWA: ceglana, datowana PRAWDOPODOBNIE
 *   na I poł. XV w.; restauracja 2004–2006 wraz z nowym
 *   mechanizmem zegarowym.
 *   ⚠⚠⚠ W REJESTRZE ZABYTKÓW FIGURUJE SAMODZIELNIE,
 *   BEZ BUDYNKU RATUSZA. NIGDY nie piszę „ratusz
 *   w Bierutowie" — ZAWSZE „wieża ratuszowa".
 *   ⚠ WYSOKOŚCI I DATY WPISU NIE USTALONO.
 * — MURY OBRONNE: prawdopodobnie I poł. XIV w.,
 *   wzmocnione basztami bramnymi w XV i na początku
 *   XVI w.; trzy główne bramy rozebrano w XIX w.
 *   ⚠ DŁUGOŚCI, GRUBOŚCI I LICZBY BASZT NIE USTALONO.
 *   ⚠⚠ „NAJSZYBCIEJ ZNIKA TO, CZEGO JEST PO JEDNYM" —
 *   kąt zajęty (Lwówek Śląski). BEZ MORAŁU.
 * — INFRASTRUKTURA: 1868 — kolej do Wrocławia
 *   i Namysłowa; 1883 — cukrownia; 1901 — dwa tartaki
 *   i rzeźnia; 1928 — wieże ciśnień; 1931 — stacja
 *   uzdatniania wody i oczyszczalnia ścieków; 1935 —
 *   wybrukowanie większości ulic.
 *   ⚠⚠ NAZWY CUKROWNI NIE PODAJĘ — nie ustalono,
 *   a i tak nie wymieniam firm.
 *   ⚠⚠ „WODA W DWÓCH RATACH" (1928 → 1931) — ładne,
 *   ale to drugi kąt. PODAJĘ DATY BEZ MORAŁU.
 * — KOLEJ DZIŚ: odcinek Bierutów – Oleśnica linii nr 143
 *   ma 12 km, od km 120,490 do km 132,542.
 *   ⚠⚠ KOSZTU MODERNIZACJI NIE PODAJĘ — to bieżący
 *   kontrakt, liczba szybko się zestarzeje.
 * — ⚠⚠ KOŚCIOŁÓW NIE OPISUJĘ — wyznaniowe; wymiarów
 *   i tak nie ustalono dla żadnego.
 * — ODLEGŁOŚĆ [ZW]: Wrocław 51 km. ⚠⚠ TRZECH WARIANTÓW
 *   TRASY NIE ZESTAWIAM — „krótsza droga nie jest
 *   proporcjonalnie szybsza" to kąt ZAJĘTY (Sobótka).
 *   POZOSTAŁYCH KIERUNKÓW NIE PODAJĘ.
 *
 * KĄT: LICZ TO, CO I TAK JEST POLICZONE
 * — o tym, że zamiast zakładać nowy rejestr, którego
 * i tak nie poprowadzisz, warto przeczytać ten, który
 * już istnieje. Kąt od spisu z 1323 roku: ludność
 * Bierutowa znamy dlatego, że ktoś policzył jatki,
 * piekarnie i kramy — a nie ludzi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że liczbę mieszkańców Bierutowa w 1323 r. — około
 *   sześciuset — ustalono z liczby punktów handlowych:
 *   trzynastu jatek rzeźniczych, dziesięciu piekarni
 *   i dwóch kramów szewskich, razem dwudziestu pięciu,
 * — ŻE NIKT NIE LICZYŁ LUDZI. Policzono stragany,
 *   z powodów, które z demografią nie miały nic
 *   wspólnego, a liczba mieszkańców wyszła z tego
 *   ubocznie — dwadzieścia cztery osoby na punkt.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI RUSZAMY ZAWSZE OD ZAŁOŻENIA NOWEGO
 *   REJESTRU: notatnik, tabelka, aplikacja. I że
 *   praktycznie nikt nie prowadzi tego dłużej niż dwa
 *   tygodnie,
 * — ⚠⚠ ŻE TYMCZASEM KILKA REJESTRÓW JUŻ ISTNIEJE
 *   I PROWADZI SIĘ SAMO: lista zakupów, którą i tak
 *   piszesz; to, co dokupujesz najczęściej; to, co stoi
 *   w zamrażarce; paragony,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ZAJMUJE KWADRANS: zamiast
 *   zaczynać nowy zapis, przeczytaj jeden z tych, które
 *   już masz. Trzy ostatnie listy zakupów powiedzą
 *   o Waszym jedzeniu więcej niż miesiąc notowania,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: rejestr założony w innym
 *   celu odpowiada tylko na swoje pytanie. Paragony
 *   mówią, co kupiliście, nie co zjedliście. Ten szacunek
 *   jest tak samo przybliżony jak dwadzieścia cztery
 *   osoby na stragan — i trzeba o tym pamiętać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: na prezentacji pytam, co
 *   gotujecie najczęściej, i prawie nikt nie wie.
 *   Wszyscy natomiast wiedzą, co najczęściej kupują.
 *   MÓWIĘ WPROST, że to drugie pytanie jest lepsze
 *   i że na nim opieram dobór dań.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tamten tekst mówi, CO DOPISAĆ
 *   PRZY LICZBIE, KTÓRĄ ZAPISUJESZ; ten mówi, ŻEBY
 *   W OGÓLE NIE ZACZYNAĆ NOWEGO ZAPISU.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE W TEKŚCIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ZAPISZ WARUNEK, NIE ZDARZENIE — kąt zajęty
 *   (Gryfów Śląski). ⚠⚠ ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna).
 * — ⚠⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt zajęty
 *   (Szklarska Poręba).
 * — ⚠⚠ ZERO PODZIEL PRZEZ TEMPO — kąt zajęty (Stronie
 *   Śląskie, ta sama fala).
 * — ⚠⚠ ZERO ZAPASOWE POWINNO BYĆ INNE — kąt zajęty
 *   (Chocianów). Dlatego dwie lokacje zostają faktem
 *   bez morału.
 * — ⚠⚠ ZERO KRÓTSZA DROGA NIE JEST PROPORCJONALNIE
 *   SZYBSZA — kąt zajęty (Sobótka).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO SYSTEMU — podaję WYŁĄCZNIE zasadę:
 *   przeczytaj rejestr, który już masz.
 * — ⚠⚠⚠ ŻADNYCH PORAD O PRZECHOWYWANIU, TERMINACH
 *   I MARNOWANIU ŻYWNOŚCI. Pisząc o zamrażarce
 *   i paragonach mówię WYŁĄCZNIE o tym, co się w nich
 *   da policzyć. TWARDA GRANICA — bezpieczeństwo
 *   żywności.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ETYMOLOGII NAZWY MIASTA I ZERO DAWNEJ
 *   NAZWY — wątek polityczny.
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU (1473, 1603, 1843).
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO SĄDOWNICTWA (przywilej 1333).
 * — ⚠ ZERO PRZYWILEJU PIWOWARSKIEGO (1499) — alkohol.
 * — ⚠ ZERO DEMOGRAFII WSPÓŁCZESNEJ I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ liczby 600 jako pomiaru ludności.
 * — NIE TWIERDZĘ, w jakim celu spisano stragany.
 * — NIE PODAJĘ liczb budynków z 1473 i 1843 r.
 * — NIE PISZĘ „ratusz w Bierutowie" — jest wieża
 *   ratuszowa, samodzielnie.
 * — NIE PODAJĘ wysokości żadnej z wież.
 * — NIE PODAJĘ nazwy cukrowni ani kosztu modernizacji
 *   linii kolejowej.
 * — NIE PODAJĘ wysokości miasta n.p.m.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Pszenno-żytnie pierniki z Oleśnicy"
 *   pochodzą z gminy Oleśnica — TEN SAM POWIAT, INNA
 *   GMINA. NIE PRZYPISUJĘ ICH BIERUTOWOWI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Bierutów leży w powiecie oleśnickim; miasto liczy
 *   4 431 mieszkańców (GUS, 31.12.2024) na 8,4 km²,
 *   czyli 530 osób na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 9 226 osób na 147 km², z szesnastoma
 *   wsiami; w mieście mieszka 48 % ludności gminy, czyli
 *   mniej niż połowa,
 * — pierwsza wzmianka pochodzi z 1214 r. i mówi o osadzie
 *   targowej; pierwsza lokacja, ok. 1250 r. na prawie
 *   niemieckim, nie powiodła się, a druga — skuteczna —
 *   nastąpiła w 1266 r. na prawie frankońskim, za księcia
 *   Henryka III wrocławskiego,
 * — liczbę mieszkańców w 1323 r., około sześciuset,
 *   oszacowano na podstawie liczby punktów handlowych:
 *   trzynastu jatek rzeźniczych, dziesięciu piekarni
 *   i dwóch kramów szewskich,
 * — w 1785 r. miasto liczyło 201 domów, z czego
 *   40 murowanych,
 * — zamek założono około 1323 r. za księcia Konrada I;
 *   przebudowano go na renesansowy w latach 1534–1540,
 *   nowe skrzydła wzniesiono w latach 1622–1624,
 *   a barokową trzyosiową bramę wjazdową około 1680 r.;
 *   zachowało się dwukondygnacyjne skrzydło południowe,
 *   a park krajobrazowy ma około 1,2 ha,
 * — wieża zamkowa ma pięć kondygnacji i zmienia przekrój
 *   w połowie wysokości: dół jest kwadratowy, góra
 *   ośmioboczna; w 2005 r. zdemontowano jej zabytkową
 *   kopułę z powodu przechylenia, a zrekonstruowany hełm
 *   wrócił w 2007,
 * — wieża ratuszowa, ceglana, datowana prawdopodobnie
 *   na I poł. XV w., figuruje w rejestrze zabytków
 *   samodzielnie; odrestaurowano ją w latach 2004–2006
 *   wraz z nowym mechanizmem zegarowym,
 * — mury obronne pochodzą prawdopodobnie z I poł. XIV w.
 *   i były wzmacniane basztami bramnymi w XV
 *   i na początku XVI w.; trzy główne bramy rozebrano
 *   w XIX w.,
 * — kolej do Wrocławia i Namysłowa doprowadzono w 1868 r.,
 *   cukrownię uruchomiono w 1883, dwa tartaki i rzeźnię
 *   w 1901, wieże ciśnień w 1928, stację uzdatniania wody
 *   i oczyszczalnię ścieków w 1931, a w 1935 wybrukowano
 *   większość ulic,
 * — odcinek Bierutów – Oleśnica linii kolejowej nr 143
 *   ma 12 km, od 120,490 do 132,542 kilometra tej linii,
 * — do Wrocławia jest stąd 51 km.
 */
export const BIERUTOW: CityContent = {
  slug: "bierutow",
  h1: "Thermomix Bierutów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bierutów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Bierutowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bierutów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bierutowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bierutowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich szesnastu wsi w gminie.",

  highlights: highlightyStandardowe("Bierutów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzynaście jatek, dziesięć piekarni, dwa kramy. Sześćset osób.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bierutowie – jak wygląda prezentacja?",
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
      id: "licz-to-co-policzone",
      heading: "Licz to, co i tak jest policzone",
      paragraphs: [
        "Wiadomo, ile osób mieszkało w Bierutowie w 1323 roku. Około sześciuset.",
        "Nikt ich nie liczył.",
        "Policzono co innego: trzynaście jatek rzeźniczych, dziesięć piekarni i dwa kramy szewskie. Dwadzieścia pięć punktów handlowych. Stragany spisano z powodów, które z demografią nie miały nic wspólnego, a liczba mieszkańców wyszła z tego ubocznie — po dwadzieścia cztery osoby na punkt.",
        "Sześćset to nie jest pomiar ludności. To przelicznik zastosowany do pomiaru czegoś innego, który akurat przetrwał siedemset lat.",
        "W kuchni ruszamy zawsze od czegoś odwrotnego: od założenia nowego rejestru. Notatnik na lodówce. Tabelka. Aplikacja. I prawie nikt nie prowadzi tego dłużej niż dwa tygodnie — ja też nie prowadziłam.",
        "Tymczasem kilka rejestrów już istnieje i prowadzi się samo.",
        "Lista zakupów, którą i tak piszesz. To, co dokupujesz najczęściej, bo ciągle się kończy. To, co stoi w zamrażarce. Paragony, które leżą w torbie.",
        "Ruch jest jeden i zajmuje kwadrans. Zamiast zaczynać nowy zapis, przeczytaj jeden z tych, które już masz. Trzy ostatnie listy zakupów powiedzą o Waszym jedzeniu więcej niż miesiąc sumiennego notowania — i nie kosztują ani jednego dnia dyscypliny.",
        "Dopowiem dwie rzeczy, bo obie leżą blisko. Po pierwsze: to nie jest rada, co dopisać obok zapisanej liczby. Po drugie: to nie jest rada, co zanotować, kiedy coś nie wyszło. Obie te sprawy są osobne. Tutaj chodzi o coś wcześniejszego — o to, żeby w ogóle nie zaczynać nowego zapisu.",
        "Uczciwie o drugiej stronie: rejestr założony w innym celu odpowiada tylko na swoje pytanie. Paragony mówią, co kupiliście, nie co zjedliście. Zamrażarka mówi, co zostało, nie co się udało. Ten szacunek jest dokładnie tak samo przybliżony jak dwadzieścia cztery osoby na stragan — trzeba z niego korzystać, wiedząc o tym.",
        "I uczciwie o tym, jak to wygląda u mnie. Na prezentacji pytam, co gotujecie najczęściej, i prawie nikt nie wie. Wszyscy natomiast wiedzą, co najczęściej kupują. Drugie pytanie jest po prostu lepsze i to na nim opieram dobór dań na spotkanie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bierutowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Zerknij przed rozmową na ostatnią listę zakupów. Powiedz mi, co się na niej powtarza — to wystarczy, żebym dobrała dania na spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bierutowie"),
    sekcjaRaty("w Bierutowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Bierutowa",
      paragraphs: [
        "Bierutów leży w powiecie oleśnickim. Samo miasto liczy 4 431 mieszkańców (GUS, 31.12.2024) na ośmiu i czterech dziesiątych kilometra kwadratowego, czyli pięćset trzydzieści osób na kilometr, a cała gmina miejsko-wiejska 9 226 osób na stu czterdziestu siedmiu, z szesnastoma wsiami. W samym mieście mieszka czterdzieści osiem procent ludności gminy — mniej niż połowa, co jest tu rzadkością i nie jest przypadkiem jednego roku. Pierwsza wzmianka pochodzi z 1214 roku i mówi o osadzie targowej. Pierwsza lokacja, około 1250 roku na prawie niemieckim, nie powiodła się; skuteczna nastąpiła w 1266 na prawie frankońskim, za księcia Henryka III wrocławskiego — zmieniono nie tylko podejście, ale i podstawę prawną. Liczbę mieszkańców w 1323 roku, około sześciuset, oszacowano z liczby punktów handlowych: trzynastu jatek rzeźniczych, dziesięciu piekarni i dwóch kramów szewskich. W 1785 roku miasto liczyło dwieście jeden domów, z czego czterdzieści murowanych — co piąty. Zamek założono około 1323 roku za księcia Konrada I, przebudowano na renesansowy w latach 1534–1540, nowe skrzydła wzniesiono w latach 1622–1624, a barokową trzyosiową bramę wjazdową około 1680. Zachowało się dwukondygnacyjne skrzydło południowe z renesansową kamieniarką, a park krajobrazowy ma około hektara z okładem. Wieża zamkowa ma pięć kondygnacji i zmienia przekrój w połowie wysokości: dół jest kwadratowy, góra ośmioboczna. W 2005 roku zdemontowano jej zabytkową kopułę z powodu przechylenia, a zrekonstruowany hełm wrócił w 2007 — wieża stała dwa lata bez szczytu. Osobno stoi ceglana wieża ratuszowa, datowana prawdopodobnie na pierwszą połowę piętnastego wieku; figuruje w rejestrze zabytków samodzielnie, bez budynku, do którego kiedyś należała, i odrestaurowano ją w latach 2004–2006 wraz z nowym mechanizmem zegarowym. Mury obronne pochodzą prawdopodobnie z pierwszej połowy czternastego wieku, a trzy główne bramy rozebrano w dziewiętnastym. Kolej do Wrocławia i Namysłowa doprowadzono w 1868 roku, cukrownię uruchomiono w 1883, dwa tartaki i rzeźnię w 1901, wieże ciśnień w 1928, stację uzdatniania wody i oczyszczalnię ścieków w 1931, a w 1935 wybrukowano większość ulic. Odcinek do Oleśnicy liczy dwanaście kilometrów, od stu dwudziestego do sto trzydziestego drugiego kilometra linii, której początek leży grubo ponad sto kilometrów stąd. Do Wrocławia jest stąd pięćdziesiąt jeden kilometrów.",
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

  districtsHeading: "Do których części Bierutowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich szesnastu wsi w gminie: Gorzesławia, Jemielnej, Karwińca, Kijowic, Kruszowic, Paczkowa, Posadowic, Radzieszyna, Sątoka, Solnik Małych i Wielkich, Stroni, Strzałkowej, Wabienic, Zawidowic i Zbytowej. Wszędzie bez dopłaty.",
    "Dwie nazwy w tej gminie potrafią zmylić przez telefon. Paczków to tutaj wieś, a nie miasto w województwie opolskim. A Stronia to wieś pod Bierutowem, nie Stronie Śląskie spod Śnieżnika. Do obu tamtych też jeżdżę, ale to zupełnie inne strony.",
  ],
  districts: [],

  nearbyHeading: "Poza Bierutów też przyjadę",
  nearbyParagraphs: [
    "Do Wrocławia jest stąd pięćdziesiąt jeden kilometrów. Dojeżdżam też do Oleśnicy, Sycowa, Namysłowa i Brzegu — wszędzie bezpłatnie, tak samo jak w samym Bierutowie.",
  ],
  nearbyTowns: ["Oleśnica", "Syców", "Namysłów", "Brzeg", "Wrocław"],

  about: blokOMnie("do Bierutowa", "w Bierutowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bierutowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto podawać pełne nazwy, bo kilka tutejszych myli się z innymi miejscowościami: Paczków to w tej gminie wieś, a nie miasto w opolskiem; Stronia to wieś pod Bierutowem, a nie Stronie Śląskie spod Śnieżnika; są też Solniki Małe i Solniki Wielkie. Samo miasto bywa mylone z Bierutowicami, czyli dawną nazwą części Karpacza.",
    },
    ...faqWspolne("w Bierutowie"),
    {
      question: "Chcę się zorientować, co u nas naprawdę się je, ale nigdy nie wytrzymuję z notowaniem. Jest inny sposób?",
      answer:
        "Jest i zajmuje kwadrans. Wiadomo, ilu ludzi mieszkało w Bierutowie w 1323 roku — około sześciuset — ale nikt ich nie liczył: policzono trzynaście jatek, dziesięć piekarni i dwa kramy szewskie, a ludność wyszła z przelicznika. W domu też macie już gotowe rejestry, tylko założone w innym celu: listy zakupów, to, co ciągle się kończy, zawartość zamrażarki, paragony. Przeczytajcie trzy ostatnie listy zakupów zamiast zaczynać miesiąc notowania. Zastrzeżenie: paragony mówią, co kupiliście, a nie co zjedliście — szacunek jest przybliżony, dokładnie tak jak te dwadzieścia cztery osoby na stragan.",
    },
    {
      question: "Co powiedzieć przed prezentacją, żeby dobrać dobre dania?",
      answer:
        "Najlepiej to, co najczęściej kupujecie. Pytam zwykle, co gotujecie najczęściej, i prawie nikt nie wie — to pytanie brzmi prosto, a odpowiedź wymaga pamięci, której nikt nie ma. Za to każdy wie, co ciągle ląduje w koszyku. Wystarczy zerknąć na ostatnią listę zakupów i powiedzieć, co się na niej powtarza. Na tym opieram dobór dań na spotkanie i wychodzi z tego zwykle obiad, który naprawdę byście zjedli.",
    },
  ],

  geo: { lat: 51.133, lng: 17.533 },
};
