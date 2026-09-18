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
 * IZBICA KUJAWSKA — powiat włocławski,
 * woj. kujawsko-pomorskie, KUJAWY.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 445 mieszkańców (GUS 31.12.2024), 2,2 km²,
 * gęstość 1 091,5 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 7 129 osób, 132,1 km².
 * ⚠ LICZBY MIEJSCOWOŚCI I SOŁECTW NIE USTALONO —
 *   NIE PODAJĘ ŻADNEJ. Piszę „wsie w gminie".
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ IZBICA KUJAWSKA.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ EN.WIKIPEDIA PODAJE 2 783 (2006) — to +13,8 %
 *   wobec GUS. Liczba jest sprzed dwudziestu lat.
 *   NIE UŻYWAM JEJ. UŻYWAM GUS: 2 445.
 * ⚠ Zawyżenia po stronie urzędu NIE USTALONO — strona
 *   raportu o stanie gminy zwracała błąd. Nie ma podstaw,
 *   by pisać o zawyżaniu.
 * ⚠ GEO: 52,4207 / 18,7627.
 * ⚠ ODMIANA: D. IZBICY KUJAWSKIEJ, Ms. W IZBICY
 *   KUJAWSKIEJ, przym. IZBICKI.
 *   ⚠ Człon „Kujawska" NIE TWORZY PRZYMIOTNIKA —
 *   nie piszę „izbicko-kujawski".
 *   ⚠⚠ NIE POTWIERDZONE W PWN — hasła nie ma w słowniku.
 *   Formy zgodne z zasadą PWN o odmianie wielowyrazowych
 *   nazw geograficznych (odmieniają się oba człony).
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZA ZASADA NA TEJ STRONIE —
 *   ZAWSZE PEŁNA NAZWA „IZBICA KUJAWSKA".
 *   NIGDY SAMO „IZBICA" — ANI W TYTULE, ANI W OPISIE,
 *   ANI W NAGŁÓWKU, ANI W ŚRODKU ZDANIA.
 *   POWÓD: w woj. lubelskim istnieje IZBICA — od 2022 r.
 *   również gmina miejsko-wiejska, o ludności gminy
 *   7 816 wobec naszych 7 129, czyli różnica raptem
 *   9,6 %. Obie mają prawa miejskie i obie nazywają się
 *   „Miasto i Gmina Izbica…". A tamta Izbica ma historię,
 *   która jest na tej stronie całkowicie wyłączona:
 *   samo zapytanie o „Izbica" zwraca w pierwszej
 *   dziesiątce hasło o tamtejszym getcie.
 *   ⚠⚠ NIE SZUKAM PO SAMYM „IZBICA".
 *   ⚠⚠ NIE CYTUJĘ I NIE LINKUJĘ DOMENY gminaizbica.pl —
 *   to lubelskie.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠⚠ DALSZE PUŁAPKI: „NOWA IZBICA" to lokacja z 1754 r.
 *   OBOK starego miasta, dziś jego część.
 *   „IZBICA-ZAGRODNICA" to dwór na zachodnim skraju
 *   miasta, występujący w źródłach jako osobna nazwa.
 *   „IZBICKO" to gmina w woj. opolskim.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — XI w. — założenie osady.
 * — 1394 — LOKACJA MIASTA NA PRAWIE MAGDEBURSKIM,
 *   akt lokacyjny Władysława Jagiełły (TRZY ŹRÓDŁA).
 *   W 2024 r. miasto obchodziło 630-lecie praw miejskich.
 * — ⚠⚠⚠ RDZEŃ KĄTA — DWA PRZYWILEJE, CZTERYSTA LAT
 *   ODSTĘPU, ODWROTNY UKŁAD:
 *   1398 — JEDEN JARMARK ROCZNIE I TARG SIEDMIODNIOWY.
 *   1798 — TRZY JARMARKI JEDNODNIOWE W ROKU.
 *   Ta sama funkcja handlowa raz rozciągnięta na siedem
 *   dni, raz ściśnięta w pojedyncze dni.
 *   ⚠⚠ ŹRÓDŁO PODAJE PRZY 1798 R. NAZWY TRZECH ŚWIĄT,
 *   NA KTÓRE PRZYPADAŁY JARMARKI. NIE WYMIENIAM ICH —
 *   wątek wyznaniowy. Piszę „trzy jednodniowe jarmarki
 *   w roku". TWARDA GRANICA.
 * — 1754 — LOKACJA MIASTA „NOWA IZBICA" przez Augusta III:
 *   cotygodniowy targ i dziewięć jarmarków rocznie.
 *   ⚠⚠ PRZYCZYNĄ BYŁ POŻAR Z 1735 R. — TEMAT WYŁĄCZONY.
 *   PISZĘ O DECYZJI I O JEJ EFEKCIE, NIGDY O PRZYCZYNIE.
 * — Lata 60. XVIII w. — targi odbywały się co środę.
 * — 1820 — SIEDEMNAŚCIE JARMARKÓW ROCZNIE. Przedmiot
 *   handlu: sprzęty gospodarcze, sukno różnych gatunków
 *   i towary łokciowe.
 *   ⚠ ŹRÓDŁO WYMIENIA TEŻ KONIE I BYDŁO — POMIJAM
 *   (wątek zwierzęcy prowadzi do uboju).
 * — Lata 20. XX w. — sześć jarmarków kwartalnych
 *   i osiemnaście miesięcznych, targi co czwartek.
 * — Dziś jarmarki wypadają po dziesiątym każdego miesiąca,
 *   w czwartek.
 * — 1867 albo 1870 — utrata praw miejskich.
 *   ⚠⚠ ŹRÓDŁA ROZBIEŻNE — NIE ROZSTRZYGAM, piszę
 *   „w drugiej połowie XIX wieku". BEZ POWODU
 *   I BEZ KONTEKSTU REPRESYJNEGO.
 * — 1973 — odzyskanie praw miejskich.
 * — Grobowce kultury pucharów lejkowatych: PIĘĆ
 *   w Wietrzychowicach i JEDEN w Gaju, datowane
 *   na ok. 4000 r. p.n.e. Potocznie „polskie piramidy".
 * — ⭐ JUSTYNA KRZYŻANOWSKA, matka Fryderyka Chopina,
 *   mieszkała i pracowała przez ok. osiem lat w dworze
 *   w zachodniej części miasta; Izbica Kujawska leży
 *   na Kujawsko-Pomorskim Szlaku Fryderyka Chopina.
 *   ⚠ TO NAJBEZPIECZNIEJSZY „DUMNY FAKT" O TYM MIEŚCIE —
 *   sprawdzone, zero afer i zero tematów wyłączonych.
 * — Brak stacji kolejowej; najbliższa we Włocławku.
 *   Drogi wojewódzkie 269 i 270.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Izbica Kujawska. Sprawdzono wszystkie dziesięć
 *   kategorii wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ Produkty „kujawskie" — żur kujawski, czarnina
 *   kujawska, kujawska parzybroda, kujawskie pierogi,
 *   zakwas kujawski i kilkadziesiąt innych — mają ZASIĘG
 *   REGIONALNY, a ich karty NIE WYMIENIAJĄ ŻADNEJ GMINY.
 *   ŻADEN NIE JEST PRODUKTEM IZBICY KUJAWSKIEJ.
 *   ⚠⚠ „Pyzok — placek ziemniaczany z Dobrego"
 *   (08.05.2017) i „mniszek bronisławski" (18.01.2010)
 *   pochodzą z GMINY DOBRE w powiecie radziejowskim.
 *   NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: ROZŁOŻONE NA KILKA DNI KONTRA JEDEN ZRYW — i czym
 * różni się wynik, nie tylko zmęczenie.
 * Kąt od dwóch przywilejów: w 1398 r. Izbica Kujawska
 * dostała jeden jarmark rocznie i targ SIEDMIODNIOWY.
 * Czterysta lat później, w 1798, ta sama funkcja handlowa
 * działała w odwrotnym układzie: trzy jarmarki JEDNODNIOWE.
 * Raz rozciągnięte, raz ściśnięte.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przywilej z 1398 r. dał targ siedmiodniowy,
 *   a w 1798 r. handel zamknął się w trzech pojedynczych
 *   dniach — i że to jest ta sama robota w dwóch układach,
 * — ⚠⚠ ŻE W KUCHNI TEN SAM WYBÓR ROBIMY PRZY KAŻDYM
 *   WIĘKSZYM GOTOWANIU I ŻE RÓŻNICA NIE SPROWADZA SIĘ
 *   DO ZMĘCZENIA — TO JEST RDZEŃ: WYNIK TEŻ JEST INNY,
 * — CO DAJE ROZCIĄGNIĘCIE: rzeczy zdążą ostygnąć,
 *   a wtedy smak ocenia się inaczej i uczciwiej; zostaje
 *   miejsce na poprawkę następnego dnia; nie trzeba
 *   decydować wszystkiego na gorąco,
 * — CO KOSZTUJE ROZCIĄGNIĘCIE — UCZCIWIE: więcej mycia,
 *   więcej naczyń, więcej miejsca w lodówce i konieczność
 *   wrócenia do tematu,
 * — CO DAJE ZRYW: mniej sprzątania w sumie, jeden
 *   rozgrzany blat, jedno zmywanie,
 * — CO ODBIERA ZRYW: nie zostawia miejsca na korektę.
 *   Wszystko jest oceniane raz, na gorąco, w pośpiechu —
 *   a na gorąco wszystko smakuje inaczej,
 * — ⚠⚠ ZASADA PRAKTYCZNA, KTÓRA TO PORZĄDKUJE:
 *   ROZCIĄGAJ TO, CO WYMAGA OCENY (smak, gęstość,
 *   czy wystarczy); ŚCISKAJ TO, CO JEST CZYSTĄ MECHANIKĄ
 *   (obieranie, krojenie, porcjowanie),
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie potania właśnie
 *   tę mechaniczną część, więc naturalny ruch jest taki,
 *   żeby ścisnąć ją jeszcze bardziej, a zaoszczędzony czas
 *   oddać temu, co wymaga oceny. ALE SAMO NIE ZDECYDUJE,
 *   co jest czym — ten podział trzeba zrobić w głowie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS I MROŻENIA — kąt zajęty
 *   (Stopnica). Nie piszę o odkładaniu porcji ani
 *   o zamrażarce. TWARDA GRANICA.
 * — ⚠⚠ ZERO CZASU PRACY KONTRA CZASU CZEKANIA — to kąt
 *   Lubrańca z tej samej fali. Tam chodzi o czas, KTÓREGO
 *   WYMAGA SKŁADNIK; TUTAJ o to, JAK ROZKŁADASZ SWOJĄ
 *   WŁASNĄ ROBOTĘ. Odsyłam tam jednym zdaniem.
 * — ⚠⚠ ZERO PRZYGOTOWANIA PRZED GOTOWANIEM — kąt zajęty
 *   (Jabłonowo Pomorskie).
 * — ⚠⚠ ZERO RATOWANIA NIEUDANEGO DANIA — kąt zajęty
 *   (Pszczew). Piszę o MIEJSCU NA POPRAWKĘ, nie
 *   o odkręcaniu pomyłek. TWARDA GRANICA.
 * — ⚠⚠ ZERO DOPRAWIANIA JAKO TEMATU — kąt zajęty
 *   (Węgorzewo). Smak pojawia się wyłącznie jako przykład
 *   rzeczy wymagającej oceny, bez porad o korygowaniu.
 * — ⚠ ZERO JEDNEGO STAŁEGO DNIA W TYGODNIU — kąt zajęty
 *   (Mrocza). Dni targowe podaję WYŁĄCZNIE jako fakt
 *   historyczny w sekcji o mieście.
 * — ⚠ ZERO KALENDARZA KUCHENNEGO NA ROK — kąt zajęty
 *   (Brwinów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   w szczególności przy trzymaniu dania do następnego
 *   dnia piszę WYŁĄCZNIE o smaku i o pracy, ZERO
 *   o przechowywaniu, psuciu się i terminach.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SKRACANIA NAZWY DO „IZBICA" — patrz wyżej.
 *   TWARDA GRANICA BEZWZGLĘDNA, NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ I ZERO SYNAGOGI.
 *   Portal dziedzictwa żydowskiego wychodzi w pierwszej
 *   dziesiątce dwukrotnie, a synagoga jest trzecim
 *   obiektem na oficjalnej liście zabytków miasta.
 *   DLATEGO NIE PISZĘ O ZABYTKACH — wymieniam wyłącznie
 *   grobowce i dwór. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO PRZYWILEJU Z 1796 R. — stoi w tym samym
 *   akapicie co przywileje targowe, więc najłatwiej
 *   go przepisać przez nieuwagę.
 * — ⚠⚠ ZERO POŻARU Z 1735 R., mimo że to on jest
 *   przyczyną lokacji z 1754 r. Piszę o skutku,
 *   nie o przyczynie.
 * — ⚠⚠ ZERO KOŚCIOŁA EWANGELICKIEGO Z LAT 1907–1909 —
 *   w jego otoczeniu są resztki cmentarza.
 * — ⚠⚠ ZERO NAZWISKA WŁAŚCICIELA DÓBR Z PRZEŁOMU XVIII
 *   I XIX W. — postać wojskowa, biografia prowadzi
 *   do powstania listopadowego; to samo nazwisko wraca
 *   przy Lubrańcu. Piszę „ówczesny właściciel dóbr"
 *   albo nie piszę wcale.
 * — ⚠⚠ ZERO RODU SKARBKÓW.
 * — ⚠ ZERO KOŚCIOŁA PARAFIALNEGO jako wątku wyznaniowego.
 * — ⚠ ZERO NAZW ŚWIĄT przy jarmarkach z 1798 r.
 * — ⚠ ZERO OKUPACJI 1939–1945.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 * — ZERO bezrobocia, salda migracji, przyrostu naturalnego
 *   i porównań liczby mieszkańców między latami.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CZAS, KTÓREGO NIE DA SIĘ SKRÓCIĆ" (Lubraniec,
 *   ta sama fala) dotyczy CZEKANIA, KTÓREGO WYMAGA
 *   SKŁADNIK. ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi
 *   o ROZKŁAD WŁASNEJ PRACY, a nie o to, ile czegoś
 *   trzeba moczyć. Odsyłam tam wprost.
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy ZAMRAŻARKI.
 * — „RATOWANIE NIEUDANEGO DANIA" (Pszczew) dotyczy BŁĘDU.
 * — „DOPRAWIANIE" (Węgorzewo) dotyczy KORYGOWANIA SMAKU.
 * TUTAJ chodzi o WYBÓR MIĘDZY SIEDMIOMA DNIAMI
 * A JEDNYM — I O TO, ŻE TEN WYBÓR ZMIENIA NIE TYLKO
 * ZMĘCZENIE, ALE I TO, CO STOI NA STOLE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SKRACAM nazwy miasta.
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby miejscowości w gminie — nie ustalono.
 * — NIE PODAJĘ liczby 2 783 — jest sprzed dwudziestu lat.
 * — NIE ROZSTRZYGAM, czy prawa miejskie utracono w 1867
 *   czy w 1870.
 * — NIE PISZĘ, dlaczego założono Nową Izbicę.
 * — NIE WYMIENIAM nazw świąt przy jarmarkach z 1798 r.
 * — NIE PODAJĘ nazwiska właściciela dóbr.
 * — NIE PRZYPISUJĘ Izbicy Kujawskiej żadnego produktu
 *   z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Izbica Kujawska leży na Kujawach, w powiecie
 *   włocławskim; jest miastem w gminie miejsko-wiejskiej
 *   i liczy 2 445 mieszkańców (GUS, 31.12.2024)
 *   na 2,2 km²; cała gmina ma 7 129 osób na 132,1 km²,
 * — osadę założono w XI wieku, a w 1394 roku Władysław
 *   Jagiełło lokował miasto na prawie magdeburskim;
 *   w 2024 roku obchodzono tu 630-lecie praw miejskich,
 * — przywilej z 1398 roku dał miastu jeden jarmark
 *   rocznie i targ siedmiodniowy, a w 1798 roku
 *   odbywały się już trzy jarmarki jednodniowe,
 * — w 1754 roku August III lokował obok miasto „Nowa
 *   Izbica", z cotygodniowym targiem i dziewięcioma
 *   jarmarkami rocznie; w latach sześćdziesiątych
 *   XVIII wieku targi odbywały się co środę,
 * — w 1820 roku jarmarków było siedemnaście, a handlowano
 *   sprzętami gospodarczymi, suknem różnych gatunków
 *   i towarami łokciowymi,
 * — w latach dwudziestych XX wieku działało sześć
 *   jarmarków kwartalnych i osiemnaście miesięcznych,
 *   a targi wypadały co czwartek; dziś jarmarki
 *   są po dziesiątym każdego miesiąca, również w czwartek,
 * — prawa miejskie miasto utraciło w drugiej połowie
 *   XIX wieku i odzyskało je w 1973 roku,
 * — w pobliżu, w Wietrzychowicach i Gaju, stoi sześć
 *   grobowców kultury pucharów lejkowatych sprzed
 *   około sześciu tysięcy lat, zwanych potocznie
 *   polskimi piramidami,
 * — w dworze w zachodniej części miasta mieszkała
 *   i pracowała przez osiem lat Justyna Krzyżanowska,
 *   matka Fryderyka Chopina; miasto leży
 *   na Kujawsko-Pomorskim Szlaku Fryderyka Chopina,
 * — najbliższa stacja kolejowa znajduje się we Włocławku,
 *   a przez miasto biegną drogi wojewódzkie 269 i 270.
 */
export const IZBICA_KUJAWSKA: CityContent = {
  slug: "izbica-kujawska",
  h1: "Thermomix Izbica Kujawska – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Izbica Kujawska — prezentacja i cena",
  seoDescription:
    "Thermomix w Izbicy Kujawskiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Izbica Kujawska — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Izbicy Kujawskiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Izbicy Kujawskiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Izbica Kujawska"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rozciągaj to, co wymaga oceny. Ściskaj to, co jest czystą mechaniką.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Izbicy Kujawskiej – jak wygląda prezentacja?",
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
      id: "siedem-dni-albo-jeden",
      heading: "Targ siedmiodniowy i jarmark jednodniowy",
      paragraphs: [
        "Przywilej z 1398 roku dał Izbicy Kujawskiej jeden jarmark w roku i targ siedmiodniowy. Czterysta lat później, w 1798, ta sama funkcja handlowa działała w układzie odwrotnym: trzy jarmarki, każdy jednodniowy.",
        "Ta sama robota, dwa zupełnie różne rozkłady w czasie. Raz rozciągnięta na tydzień, raz ściśnięta w pojedyncze dni.",
        "W kuchni robimy dokładnie ten wybór przy każdym większym gotowaniu — i zwykle myślimy, że chodzi tylko o zmęczenie. Otóż nie tylko. Wynik też jest inny.",
        "Co daje rozciągnięcie na dwa dni. Przede wszystkim to, że rzeczy zdążą ostygnąć — a zimne albo letnie danie smakuje inaczej niż prosto z garnka i ocenia się je uczciwiej. Zostaje też miejsce na poprawkę nazajutrz, na spokojnie. I nie trzeba decydować wszystkiego naraz, w oparach i w pośpiechu.",
        "Co rozciągnięcie kosztuje, bo nie zamierzam udawać, że nic. Więcej mycia, więcej naczyń, więcej miejsca w lodówce i konieczność wrócenia do tematu, gdy głowa jest już przy czymś innym.",
        "Co daje zryw. Mniej sprzątania w sumie, jeden rozgrzany blat, jedno zmywanie na końcu i sprawa zamknięta.",
        "Co zryw odbiera. Nie zostawia miejsca na korektę. Wszystko jest oceniane raz, na gorąco i w biegu — a na gorąco po prostu nie da się dobrze ocenić, czy to już jest to.",
        "Zasada, która to porządkuje, jest jednozdaniowa: rozciągaj to, co wymaga oceny, a ściskaj to, co jest czystą mechaniką.",
        "Oceny wymaga smak, gęstość, to, czy wystarczy dla wszystkich, i to, czy coś do siebie pasuje. Czystą mechaniką jest obieranie, krojenie, tarcie i porcjowanie — tu nie ma czego oceniać, więc im bardziej w jednym kawałku, tym lepiej.",
        "Osobna sprawa to czas, którego wymaga sam składnik — namaczanie, wyrastanie, chłodzenie. Tego nie rozkłada się dowolnie i pisałam o tym przy innym mieście.",
        "Uczciwie o sprzęcie. Urządzenie potania właśnie tę mechaniczną część i to jest jego prawdziwa robota. Naturalny ruch jest więc taki, żeby mechanikę ścisnąć jeszcze bardziej, a zaoszczędzony czas oddać temu, co wymaga oceny.",
        "Ale samo nie zdecyduje, co jest czym. Ten podział trzeba zrobić w głowie, raz, przy konkretnym daniu — i potem już wraca sam.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Izbicy Kujawskiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy gotujecie raczej codziennie po trochu, czy raz na kilka dni większą porcją — dobiorę dania pod ten układ, a nie pod książkowy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Izbicy Kujawskiej"),
    sekcjaRaty("w Izbicy Kujawskiej"),
    {
      id: "rodzina",
      heading: "Thermomix dla izbickiej rodziny",
      paragraphs: [
        "Izbica Kujawska leży na Kujawach, w powiecie włocławskim; jest miastem w gminie miejsko-wiejskiej i liczy blisko dwa i pół tysiąca mieszkańców na dwóch i dwóch dziesiątych kilometra kwadratowego, a cała gmina — ponad siedem tysięcy osób na stu trzydziestu dwóch kilometrach kwadratowych. Osadę założono w XI wieku, a w 1394 roku Władysław Jagiełło lokował miasto na prawie magdeburskim; w 2024 obchodzono tu 630-lecie praw miejskich. Przywilej z 1398 roku dał miastu jeden jarmark rocznie i targ siedmiodniowy, a w 1798 odbywały się już trzy jarmarki jednodniowe. W 1754 roku August III lokował obok miasto „Nowa Izbica”, z cotygodniowym targiem i dziewięcioma jarmarkami rocznie; w latach sześćdziesiątych XVIII wieku targi wypadały co środę. W 1820 roku jarmarków było siedemnaście, a handlowano sprzętami gospodarczymi, suknem różnych gatunków i towarami łokciowymi. W latach dwudziestych XX wieku działało sześć jarmarków kwartalnych i osiemnaście miesięcznych, a targi odbywały się co czwartek — dziś jarmarki wypadają po dziesiątym każdego miesiąca, również w czwartek. Prawa miejskie miasto utraciło w drugiej połowie XIX wieku i odzyskało je w 1973. W pobliżu, w Wietrzychowicach i Gaju, stoi sześć grobowców kultury pucharów lejkowatych sprzed około sześciu tysięcy lat, zwanych potocznie polskimi piramidami. A w dworze w zachodniej części miasta mieszkała i pracowała przez osiem lat Justyna Krzyżanowska, matka Fryderyka Chopina — Izbica Kujawska leży na Kujawsko-Pomorskim Szlaku Fryderyka Chopina.",
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

  districtsHeading: "Do których części Izbicy Kujawskiej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — jest zwarte, ma nieco ponad dwa kilometry kwadratowe, więc wszędzie jest blisko. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Izbicę Kujawską też przyjadę",
  nearbyParagraphs: [
    "Lubraniec, Radziejów, Włocławek, Koło i Przedecz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubraniec", "Radziejów", "Włocławek", "Koło"],

  about: blokOMnie("do Izbicy Kujawskiej", "w Izbicy Kujawskiej", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Izbicy Kujawskiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Izbica Kujawska jest miastem w gminie miejsko-wiejskiej w powiecie włocławskim — i to zupełnie inna miejscowość niż Izbica w województwie lubelskim, dlatego zawsze piszę pełną nazwę.",
    },
    ...faqWspolne("w Izbicy Kujawskiej"),
    {
      question: "Lepiej ugotować wszystko naraz czy rozłożyć na dwa dni?",
      answer:
        "Zależy, czego dane danie wymaga. Rozciągnięcie na dwa dni daje to, że rzeczy zdążą ostygnąć — a ostygłe ocenia się uczciwiej — i zostawia miejsce na poprawkę nazajutrz; kosztuje za to więcej mycia i miejsca w lodówce. Zryw jest oszczędniejszy w sprzątaniu, ale nie zostawia miejsca na korektę, bo wszystko oceniasz raz, na gorąco. Zasada: rozciągaj to, co wymaga oceny, ściskaj to, co jest czystą mechaniką.",
    },
    {
      question: "Co konkretnie jest „czystą mechaniką”?",
      answer:
        "Obieranie, krojenie, tarcie, rozdrabnianie, porcjowanie — czyli wszystko, przy czym nie ma czego oceniać, bo albo jest zrobione, albo nie. Tę część opłaca się robić w jednym kawałku i to właśnie ją urządzenie potania najbardziej. Ocena — smak, gęstość, to, czy wystarczy — potrzebuje odstępu i najlepiej znosi rozłożenie na raty.",
    },
  ],

  geo: { lat: 52.4207, lng: 18.7627 },
};
