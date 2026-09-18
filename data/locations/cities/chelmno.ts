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
 * CHEŁMNO — powiat chełmiński, woj. kujawsko-pomorskie.
 * GMINA MIEJSKA. 17 952 mieszkańców (GUS 31.12.2024),
 * 13,6 km², około 1 324 os./km².
 *
 * ⚠⚠ TRZY PUŁAPKI DEMOGRAFICZNE NARAZ:
 * — BIP miasta podaje 18 995 osób, ale ZE STANEM
 *   NA 4 WRZEŚNIA 2018 R. NIE UŻYWAĆ,
 * — starostwo podaje dla powiatu 51 456 przy GUS 48 924,
 * — serwis poland.gg pod adresem miasta podaje 6 063 osoby —
 *   TO SĄ DANE GMINY WIEJSKIEJ, w dodatku prognozowane.
 * ⚠⚠ OBOK MIASTA ISTNIEJE ODRĘBNA GMINA WIEJSKA CHEŁMNO
 *   (6 064 osoby, 113,7 km²). NIE MIESZAM TYCH DANYCH.
 *   TWARDA GRANICA.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZA OSTROŻNOŚĆ TEJ STRONY — HOMONIM:
 *   CHEŁMNO ≠ CHEŁMNO NAD NEREM (powiat kolski,
 *   woj. wielkopolskie). Ta druga miejscowość ma skrajnie
 *   ciężką historię wojenną i przy wyszukiwaniu hasła
 *   „Chełmno" wychodzi na czołowych pozycjach.
 *   ⚠ ABSOLUTNY ZAKAZ ZBLIŻANIA SIĘ TEMATYCZNIE.
 *   FAQ MUSI ROZRÓŻNIĆ MIASTO PRZEZ POŁOŻENIE
 *   (nad Wisłą, powiat chełmiński). TWARDA GRANICA.
 * ⚠ Inne pomyłki: CHEŁMNO w powiecie szamotulskim (wieś),
 *   CHEŁM w lubelskiem (tam mieszkaniec to „chełmianin"),
 *   oraz CHEŁMŻA — drugie miasto w tym samym województwie
 *   o podobnie brzmiącej nazwie.
 * ⚠ ODMIANA (Dobry słownik + WSO PWN): D. CHEŁMNA,
 *   Ms. W CHEŁMNIE, przym. CHEŁMIŃSKI, mieszkaniec
 *   CHEŁMNIANIN / CHEŁMNIANKA.
 *
 * HISTORIA — NAJMOCNIEJSZY MATERIAŁ Z CAŁEJ FALI:
 * — 28 GRUDNIA 1233 R. — dokument lokacyjny dla Chełmna
 *   (i Torunia) wystawiony przez Hermanna von Salzę
 *   i Hermanna Balka; ⚠ ORYGINAŁ SPŁONĄŁ OKOŁO 1244 R.,
 * — 1 PAŹDZIERNIKA 1251 R. — przywilej odnowiony, tym razem
 *   osobnymi dokumentami; Chełmno określono jako „miasto
 *   główne i godniejsze od pozostałych". Oryginał przechowuje
 *   od 1959 r. Archiwum Państwowe w Toruniu — W ZABYTKOWEJ
 *   DĘBOWEJ TUBIE Z XVI W., okutej żelazem, z blaszkami
 *   wentylacyjnymi; wpisany na Listę Krajową Programu UNESCO
 *   „Pamięć Świata",
 * — ⚠⚠ PODSTAWA KĄTA: prawo chełmińskie wprowadziło
 *   JEDNOLITE WZORCE MIERNICZE DLA CAŁEGO PAŃSTWA
 *   ZAKONNEGO — włókę chełmińską, PRĘT CHEŁMIŃSKI
 *   (około 4,35 m), KORZEC CHEŁMIŃSKI jako miarę zboża
 *   oraz wspólną monetę, denara chełmińskiego,
 * — WŁÓKA CHEŁMIŃSKA = 30 mórg = 17,955 ha;
 *   MORGA CHEŁMIŃSKA = 59,85 ara,
 * — ⚠ WARTOŚCI KORCA CHEŁMIŃSKIEGO W LITRACH NIE USTALONO.
 *   Znaleziono tylko „korzec toruński = 54,8 litra"
 *   w jednym źródle popularyzatorskim.
 *   ⚠ NIE PODAJĘ ŻADNEJ LICZBY LITRÓW. TWARDA GRANICA.
 * — na prawie chełmińskim lokowano DO KOŃCA XVIII W.
 *   225 MIAST I 1364 WSIE,
 * — UKŁAD URBANISTYCZNY JAKO ZASTOSOWANIE MIARY:
 *   szachownica ulic przecinających się pod kątem prostym,
 *   RYNEK 111 × 156 M, a SZEROKOŚĆ KAŻDEJ ULICY
 *   TO 2,5 PRĘTA CHEŁMIŃSKIEGO,
 * — mury miejskie: około 1 700 m obwodu, siedem bram
 *   i ⚠ ROZBIEŻNOŚĆ: 23 albo 25 baszt. PISZĘ
 *   „ponad dwadzieścia baszt". TWARDA GRANICA.
 * — MŁYNARSTWO POWIATU W MIĘDZYWOJNIU: 19 MŁYNÓW WODNYCH,
 *   34 WIATRAKI I 6 MŁYNÓW KONNYCH,
 * — zakłady w mieście: fabryka cukierków i konserw,
 *   cegielnia, fabryka maszyn; ⚠ ŹRÓDŁO WYMIENIA TEŻ
 *   BROWAR — NIE WYMIENIAM GO. ZERO TEMATU ALKOHOLU,
 * — Chełmno było członkiem Hanzy.
 * ⚠ NAZW CECHÓW ANI DNI JARMARCZNYCH NIE USTALONO.
 *
 * DZIŚ: w mieście nie ma dużego przemysłu; podstawą są
 * turystyka, handel i funkcje powiatowe. Zespół staromiejski
 * uznano za POMNIK HISTORII rozporządzeniem Prezydenta RP
 * z 18 kwietnia 2005 r. Ratusz renesansowo-manierystyczny,
 * przebudowany w latach 1567–1570, z barokowym hełmem wieży
 * z 1721 r., mieści Muzeum Ziemi Chełmińskiej. W okolicznej
 * gminie wiejskiej użytki rolne zajmują 68,6% powierzchni,
 * a gleby to mady nadwiślańskie.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: ŻADEN produkt nie pochodzi
 *   z gminy miejskiej Chełmno. W powiecie, ale W INNYCH
 *   GMINACH: „mięta pieprzowa unisławska" (gmina UNISŁAW,
 *   wpis 24.07.2018) oraz trzy chleby ze STOLNA.
 *   ⚠ NIE PRZYPISUJĘ ICH CHEŁMNU. Wolno wspomnieć o miętcie
 *   unisławskiej JAKO O PRODUKCIE SĄSIEDNIEJ GMINY, z nazwą
 *   gminy w tym samym zdaniu. TWARDA GRANICA.
 * ⚠ OSIEDLI NIE USTALONO — districts PUSTE. Nazwy krążące
 *   po mapach nie są potwierdzone jako jednostki pomocnicze.
 *
 * KĄT: SZKLANKA CZY WAGA — miara objętości kontra miara masy.
 * Kąt od prawa chełmińskiego, które dało tej części Europy
 * jednolite wzorce miernicze — w tym korzec, czyli miarę
 * zboża liczoną OBJĘTOŚCIĄ. Dokładnie ten sam wybór robimy
 * w kuchni za każdym razem, gdy sięgamy po szklankę zamiast
 * po wagę.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przywilej chełmiński z 1251 r. dał całemu państwu
 *   zakonnemu jednolite wzorce miernicze: włókę, pręt,
 *   korzec i wspólną monetę, a układ samego miasta jest
 *   ich zastosowaniem — rynek ma 111 na 156 metrów,
 *   a każda ulica szerokość dwóch i pół pręta,
 * — ŻE KORZEC BYŁ MIARĄ OBJĘTOŚCI, a nie masy — mierzył,
 *   ile zboża wchodzi do naczynia, nie ile ono waży,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY DOKŁADNIE TEN SAM WYBÓR
 *   PRZY KAŻDYM PRZEPISIE i że to jest powód numer jeden,
 *   dla którego wypieki wychodzą raz tak, a raz inaczej.
 *   TO JEST RDZEŃ TEKSTU,
 * — DLACZEGO SZKLANKA MĄKI NIE JEST STAŁĄ WIELKOŚCIĄ:
 *   mąka nabrana szklanką prosto z torebki jest ubita,
 *   przesiana jest napowietrzona, a wilgotna waży więcej —
 *   ta sama szklanka może zawierać wyraźnie różną ilość,
 * — ŻE PRZY PŁYNACH PROBLEMU NIE MA, bo płyn się nie ubija —
 *   szklanka mleka to zawsze tyle samo mleka. ⚠ TO JEST
 *   WAŻNE ROZRÓŻNIENIE I MUSI PAŚĆ,
 * — ŻE DLATEGO KŁOPOT DOTYCZY GŁÓWNIE RZECZY SYPKICH:
 *   mąki, cukru pudru, kakao, płatków, orzechów, wiórków,
 * — ŻE PRZY GOTOWANIU OBIADU TO NIE MA ZNACZENIA — zupa
 *   wybaczy wszystko. ZNACZENIE MA PRZY WYPIEKACH,
 *   bo tam proporcja mąki do reszty decyduje o strukturze
 *   ⚠ MÓWIĘ TO WPROST, ŻEBY NIE ROBIĆ Z WAGI FETYSZU,
 * — ŻE WAGA JEST TANIA I ROZWIĄZUJE PROBLEM RAZ NA ZAWSZE —
 *   a przy okazji pozwala ważyć wprost do miski, bez
 *   brudzenia kolejnych naczyń,
 * — ŻE STARE PRZEPISY PISANE W SZKLANKACH NIE SĄ ZŁE —
 *   one po prostu zakładały, że ktoś zna swoją szklankę
 *   i swoją mąkę. To jest miara lokalna, jak korzec:
 *   działa w jednej kuchni,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix ma wbudowaną wagę
 *   i to jest jedna z jego najbardziej niedocenianych
 *   zalet — waży wszystko po kolei do tego samego naczynia,
 *   więc problem znika sam. ⚠ ALE: waga ma swoją dokładność
 *   i przy bardzo małych ilościach — szczypta drożdży,
 *   parę gramów proszku — trzeba liczyć się z tym,
 *   że nie odczyta ich precyzyjnie. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH KONKRETNYCH PRZELICZNIKÓW: ile gramów
 *   ma szklanka mąki, cukru czy kaszy. To zależy od mąki,
 *   od szklanki i od sposobu nabrania — podanie liczby
 *   byłoby pozorną precyzją. TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNEJ LICZBY LITRÓW KORCA.
 * — ŻADNYCH NAZW FIRM, MAREK ANI MODELI WAG.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ZERO TEMATU ALKOHOLU (browar).
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO KLAMR. To wieś w sąsiedniej gminie wiejskiej
 *   i miejsce masowych egzekucji z jesieni 1939 r.
 *   NIE WYMIENIAM TEJ NAZWY W OGÓLE — nawet jako nazwy
 *   sołectwa na liście miejscowości. TWARDA GRANICA.
 * — ⚠⚠⚠ ZERO jakiegokolwiek zbliżenia do Chełmna nad Nerem.
 * — ZERO wojen polsko-krzyżackich, zniszczeń i powstań.
 * — ZERO wątków narodowościowych z międzywojnia (podziału
 *   własności ziemi i mleczarstwa, podziału firm z 1905 r.).
 * — ⚠ ZERO osadnictwa menonickiego i olęderskiego — mimo
 *   że temat jest kuszący (odwadnianie, mleczarstwo, sery),
 *   to wątek wyznaniowy. TWARDA GRANICA.
 * — ZERO „miasta siedmiu kościołów", klasztorów i ich
 *   późniejszych funkcji.
 * — ZERO spadku liczby ludności.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „PRZEPISY W CUDZYCH MIARACH" (Zgorzelec) dotyczy MIAR
 *   ZAGRANICZNYCH — cups, uncji, przeliczania przepisów
 *   z innego kraju. ⚠⚠ TUTAJ chodzi o WYBÓR MIĘDZY
 *   OBJĘTOŚCIĄ A MASĄ w polskich przepisach.
 *   TWARDA GRANICA.
 * — „KILOGRAMY ZAMIAST PORCJI" (Hrubieszów) dotyczy
 *   PRZELICZANIA WIELKOŚCI PORCJI.
 * — „UBYTEK PRZY OBRÓBCE" (Milanówek) dotyczy TEGO,
 *   ILE Z KILOGRAMA ZOSTAJE.
 * — „RYŻ — PROPORCJA" (Małogoszcz) dotyczy JEDNEGO
 *   SUROWCA.
 * — „PĘCZNIENIE" (Mszczonów) dotyczy ZMIANY OBJĘTOŚCI
 *   OD WODY.
 * — „WAGA URZĄDZENIA" (Tczew) dotyczy CIĘŻARU SPRZĘTU
 *   I TEGO, KTO GO PODNIESIE.
 * TUTAJ chodzi o DWA SPOSOBY MIERZENIA i o to, dlaczego
 * przy wypiekach nie są równoważne.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE UŻYWAM liczb z BIP-u miasta ani ze starostwa.
 * — NIE MIESZAM danych miasta i gminy wiejskiej.
 * — NIE PODAJĘ wartości korca w litrach.
 * — NIE PODAJĘ przeliczników szklanek na gramy.
 * — NIE WYMIENIAM Klamr.
 * — NIE PRZYPISUJĘ Chełmnu mięty unisławskiej ani chlebów
 *   ze Stolna.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE MYLĘ Chełmna z Chełmnem nad Nerem, Chełmem
 *   ani Chełmżą.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Chełmno jest gminą miejską i liczy 17 952 mieszkańców
 *   (GUS, 31.12.2024) na 13,6 km², co daje ponad tysiąc
 *   trzysta osób na kilometr kwadratowy; obok istnieje
 *   odrębna gmina wiejska o tej samej nazwie,
 * — dokument lokacyjny dla Chełmna wystawiono 28 grudnia
 *   1233 roku, a ponieważ oryginał spłonął około 1244 roku,
 *   przywilej odnowiono 1 października 1251, określając
 *   Chełmno jako „miasto główne i godniejsze od pozostałych";
 *   ten dokument przechowuje od 1959 roku Archiwum Państwowe
 *   w Toruniu — w zabytkowej dębowej tubie z XVI wieku,
 *   okutej żelazem i zaopatrzonej w blaszki wentylacyjne —
 *   a wpisano go na Listę Krajową Programu UNESCO „Pamięć
 *   Świata",
 * — prawo chełmińskie wprowadziło jednolite wzorce miernicze
 *   dla całego państwa zakonnego: włókę chełmińską równą
 *   trzydziestu morgom, czyli blisko osiemnastu hektarom,
 *   pręt chełmiński o długości około czterech i pół metra,
 *   korzec chełmiński jako miarę zboża oraz wspólną monetę —
 *   denara chełmińskiego; na tym prawie lokowano do końca
 *   XVIII wieku dwieście dwadzieścia pięć miast i tysiąc
 *   trzysta sześćdziesiąt cztery wsie,
 * — układ miasta jest zastosowaniem tej miary: ulice
 *   przecinają się pod kątem prostym, rynek ma sto jedenaście
 *   na sto pięćdziesiąt sześć metrów, a każda ulica szerokość
 *   dwóch i pół pręta chełmińskiego; mury miejskie liczą
 *   około tysiąca siedmiuset metrów obwodu, siedem bram
 *   i ponad dwadzieścia baszt,
 * — w międzywojniu w powiecie chełmińskim pracowało
 *   dziewiętnaście młynów wodnych, trzydzieści cztery
 *   wiatraki i sześć młynów konnych, a w samym mieście
 *   działały fabryka cukierków i konserw, cegielnia
 *   i fabryka maszyn; Chełmno należało do Hanzy,
 * — zespół staromiejski uznano za Pomnik Historii
 *   rozporządzeniem Prezydenta RP z 18 kwietnia 2005 roku;
 *   renesansowo-manierystyczny ratusz, przebudowany w latach
 *   1567–1570 i zwieńczony barokowym hełmem wieży z 1721,
 *   mieści dziś Muzeum Ziemi Chełmińskiej,
 * — w sąsiedniej gminie Unisław uprawia się miętę pieprzową,
 *   wpisaną na ministerialną Listę Produktów Tradycyjnych
 *   24 lipca 2018 roku.
 */
export const CHELMNO: CityContent = {
  slug: "chelmno",
  h1: "Thermomix Chełmno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Chełmno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Chełmnie nad Wisłą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chełmno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chełmnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chełmna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Chełmno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Szklanka mleka to zawsze tyle samo mleka. Szklanka mąki — nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chełmnie – jak wygląda prezentacja?",
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
      id: "miara",
      heading: "Szklanka czy waga — miasto, które dało Europie wzorzec miary",
      paragraphs: [
        "Przywilej chełmiński, odnowiony 1 października 1251 roku, dał całemu państwu zakonnemu coś, czego wcześniej nie było: jednolite wzorce miernicze. Włókę, pręt, korzec i wspólną monetę. Na tym prawie lokowano potem dwieście dwadzieścia pięć miast i tysiąc trzysta sześćdziesiąt cztery wsie.",
        "Samo Chełmno jest zastosowaniem tej miary. Ulice przecinają się pod kątem prostym, rynek ma sto jedenaście na sto pięćdziesiąt sześć metrów, a każda ulica ma z góry przyjętą szerokość dwóch i pół pręta chełmińskiego. Miasto zostało wymierzone, zanim je zbudowano.",
        "Interesuje mnie tu jedna rzecz: korzec był miarą objętości. Mierzył, ile zboża wchodzi do naczynia — a nie ile ono waży.",
        "I dokładnie ten sam wybór robimy w kuchni przy każdym przepisie, sięgając po szklankę zamiast po wagę. To jest, moim zdaniem, powód numer jeden, dla którego to samo ciasto raz wychodzi, a raz nie.",
        "Bo szklanka mąki nie jest stałą wielkością. Mąka nabrana szklanką prosto z torebki jest ubita. Przesiana jest napowietrzona i tej samej szklanki wchodzi wyraźnie mniej. Mąka, która stała w wilgotnej kuchni, waży więcej niż ta z suchej szafki. Jedna szklanka, trzy różne ilości — a przepis nie ma jak o tym wiedzieć.",
        "Przy płynach problem nie istnieje i warto to powiedzieć wyraźnie, żeby nie wpaść w drugą skrajność. Płynu nie da się ubić ani napowietrzyć. Szklanka mleka to zawsze tyle samo mleka i nikt nie musi go ważyć.",
        "Kłopot dotyczy więc wyłącznie rzeczy sypkich: mąki, cukru pudru, kakao, płatków, orzechów, wiórków. Wszystkiego, co można nasypać luźno albo ubić.",
        "I jeszcze jedno zastrzeżenie, żeby nie robić z wagi fetyszu: przy gotowaniu obiadu to nie ma najmniejszego znaczenia. Zupa wybaczy wszystko, gulasz też, a garść to zupełnie sensowna jednostka. Znaczenie ma przy wypiekach, bo tam proporcja mąki do reszty decyduje o strukturze — i tam jedna szklanka za dużo zamienia ciasto w coś zupełnie innego.",
        "Waga kuchenna jest przy tym tania i rozwiązuje sprawę raz na zawsze. Ma też drugą zaletę, o której mało kto myśli przy zakupie: pozwala ważyć wszystko po kolei wprost do jednej miski, zamiast brudzić kolejne naczynia po drodze.",
        "Nie znaczy to, że stare przepisy pisane w szklankach są złe. One po prostu zakładały, że ktoś zna swoją szklankę i swoją mąkę. To jest miara lokalna — dokładnie jak korzec, który działał w granicach jednego państwa i przestawał działać za nimi.",
        "Teraz o sprzęcie. Thermomix ma wbudowaną wagę i uważam to za jedną z jego najbardziej niedocenianych funkcji — nikt jej nie sprzedaje, a używa się jej przy każdym pieczeniu. Waży wszystko po kolei do tego samego naczynia, więc cały ten problem znika sam, razem z górą brudnych miarek.",
        "Uczciwie tylko dodam, że waga ma swoją dokładność. Przy bardzo małych ilościach — szczypcie drożdży, kilku gramach proszku — trzeba liczyć się z tym, że nie odczyta ich precyzyjnie, i takie rzeczy odmierza się miarką albo łyżeczką. To nie wada, tylko fizyka; żadna waga kuchenna tego nie robi inaczej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chełmnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pieczesz i chcesz zobaczyć, jak działa ważenie wszystkiego do jednego naczynia — powiedz to przy umawianiu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chełmnie"),
    sekcjaRaty("w Chełmnie"),
    {
      id: "rodzina",
      heading: "Thermomix dla chełmińskiej rodziny",
      paragraphs: [
        "Chełmno jest gminą miejską i liczy blisko osiemnaście tysięcy mieszkańców na niespełna czternastu kilometrach kwadratowych, co daje ponad tysiąc trzysta osób na kilometr; obok istnieje odrębna gmina wiejska o tej samej nazwie. Dokument lokacyjny wystawiono 28 grudnia 1233 roku, a ponieważ oryginał spłonął około 1244, przywilej odnowiono 1 października 1251, określając Chełmno jako „miasto główne i godniejsze od pozostałych”. Ten dokument przechowuje od 1959 roku Archiwum Państwowe w Toruniu — w zabytkowej dębowej tubie z XVI wieku, okutej żelazem i zaopatrzonej w blaszki wentylacyjne — i wpisano go na Listę Krajową Programu UNESCO „Pamięć Świata”. Prawo chełmińskie wprowadziło jednolite wzorce miernicze dla całego państwa zakonnego: włókę równą trzydziestu morgom, czyli blisko osiemnastu hektarom, pręt o długości około czterech i pół metra, korzec jako miarę zboża oraz denara chełmińskiego; lokowano na nim do końca XVIII wieku dwieście dwadzieścia pięć miast i tysiąc trzysta sześćdziesiąt cztery wsie. Układ miasta jest zastosowaniem tej miary — rynek ma sto jedenaście na sto pięćdziesiąt sześć metrów, a każda ulica szerokość dwóch i pół pręta; mury liczą około tysiąca siedmiuset metrów obwodu, siedem bram i ponad dwadzieścia baszt. W międzywojniu w powiecie pracowało dziewiętnaście młynów wodnych, trzydzieści cztery wiatraki i sześć młynów konnych, a w mieście działały fabryka cukierków i konserw, cegielnia i fabryka maszyn; Chełmno należało do Hanzy. Zespół staromiejski uznano za Pomnik Historii rozporządzeniem Prezydenta RP z 18 kwietnia 2005 roku, a renesansowo-manierystyczny ratusz z barokowym hełmem wieży z 1721 roku mieści Muzeum Ziemi Chełmińskiej.",
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

  districtsHeading: "Do których części Chełmna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i starówki w obrębie murów po osiedla poza nimi i domy przy drogach wylotowych. Dojeżdżam też do wsi w okolicznej gminie wiejskiej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Chełmno też przyjadę",
  nearbyParagraphs: [
    "Świecie, Grudziądz, Unisław, Stolno, Papowo Biskupie, Wąbrzeźno i Toruń są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świecie", "Grudziądz", "Wąbrzeźno", "Toruń"],

  about: blokOMnie("do Chełmna", "w Chełmnie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chełmna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Chełmno nad Wisłą, stolicę powiatu chełmińskiego — nie o Chełm w lubelskiem i nie o inne miejscowości o podobnej nazwie.",
    },
    ...faqWspolne("w Chełmnie"),
    {
      question: "Dlaczego ciasto raz wychodzi, a raz nie, choć przepis ten sam?",
      answer:
        "Bardzo często dlatego, że szklanka mąki nie jest stałą wielkością. Mąka nabrana prosto z torebki jest ubita, przesiana napowietrzona, a wilgotna waży więcej — jedna szklanka, trzy różne ilości. Przy płynach problemu nie ma, bo płynu nie da się ubić. Kłopot dotyczy tylko rzeczy sypkich i tylko tam, gdzie proporcja decyduje o strukturze, czyli w wypiekach.",
    },
    {
      question: "Czy trzeba ważyć wszystko?",
      answer:
        "Nie. Przy gotowaniu obiadu to bez znaczenia — zupa i gulasz wybaczą wszystko, a garść to sensowna jednostka. Waga ma sens przy wypiekach. Stare przepisy pisane w szklankach nie są złe: one zakładały, że ktoś zna swoją szklankę i swoją mąkę. To miara lokalna, dokładnie jak dawny korzec.",
    },
    {
      question: "Czy Thermomix ma wagę?",
      answer:
        "Ma wbudowaną i jest to jedna z jego najbardziej niedocenianych funkcji — waży wszystko po kolei wprost do naczynia, więc znika i problem szklanek, i góra brudnych miarek. Uczciwie: przy bardzo małych ilościach, jak szczypta drożdży czy kilka gramów proszku, żadna waga kuchenna nie odczyta ich precyzyjnie i takie rzeczy odmierza się łyżeczką.",
    },
  ],

  geo: { lat: 53.3492, lng: 18.4231 },
};
