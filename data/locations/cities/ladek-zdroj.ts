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
 * LĄDEK-ZDRÓJ — powiat kłodzki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 914 mieszkańców (GUS 31.12.2024), 20,3 km²,
 *   gęstość 241,8 os./km² [ZW, domyka się przy
 *   powierzchni 20,32 km²]. PODAJĘ.
 * CAŁA GMINA: 7 434 osoby, 117,3 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 7 434 / 117,3 = 63,4,
 *   a serwis podaje 65. NIE DOMYKA SIĘ.
 *   ⚠ Miasto to 66,1 % ludności gminy na 17,3 % jej
 *   powierzchni. ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM.
 *   ⚠ JEDENAŚCIE WSI w wykazie GUS: Karpno, Konradów,
 *   Kąty Bystrzyckie, Lutynia, Orłowiec, Radochów,
 *   Skrzynka, Stójków, Trzebieszowice, Wrzosówka,
 *   Wójtówka. ⚠⚠ PISZĘ „wykaz GUS wymienia jedenaście
 *   wsi" — inne spisy dorzucają Marcinków, a Rogóżka
 *   leży DZIŚ W GMINIE STRONIE ŚLĄSKIE.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ RYNEK: 426 m n.p.m.
 * ⚠ GEO: 50,345852 / 16,872315.
 *
 * ⚠⚠⚠ ODMIANA — OBA CZŁONY, Z UCIECZKĄ „E":
 *   D. do LĄDKA-ZDROJU · Ms. w LĄDKU-ZDROJU ·
 *   B. Lądek-Zdrój · N. Lądkiem-Zdrojem.
 *   ⚠⚠⚠ BŁĘDY: „do Lądeka", „w Lądeku", „w Lądku Zdrój",
 *   „w Lądku Zdroju" (bez łącznika). ŁĄCZNIK OBOWIĄZKOWY.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: LĄDECKI [ZW] (por. Biała Lądecka).
 *   ⚠ Mieszkaniec: lądczanin / lądczanka [ZW] —
 *   ⚠⚠ ale NAZWY MIESZKAŃCA I TAK NIE UŻYWAM, zgodnie
 *   z zasadą całego cyklu.
 *
 * ⚠⚠⚠⚠ CAŁY WĄTEK UZDROWISKOWY JEST WYKLUCZONY.
 *   ZERO WÓD, ZERO KURACJI, ZERO ZABIEGÓW, ZERO PIJALNI,
 *   ZERO PROMENAD ZDROJOWYCH (34 km w latach 40. XIX w. —
 *   NIE UŻYWAM), ZERO „najstarszego uzdrowiska".
 *   Nie piszę nawet, że miasto jest uzdrowiskiem.
 *   TO SAMO ZASTOSOWANO W DUSZNIKACH-ZDROJU,
 *   KUDOWIE-ZDROJU I POLANICY-ZDROJU.
 *   ⚠ Człon „-Zdrój" w nazwie własnej ZOSTAJE.
 *   ⚠⚠ TO JUŻ CZWARTE MIASTO POWIATU KŁODZKIEGO
 *   Z CZŁONEM „-ZDRÓJ" W TYM CYKLU. Nie powtarzam
 *   żadnej figury z tamtych trzech.
 *
 * ⚠⚠⚠ MOSTU ŚW. JANA NIE UŻYWAM W OGÓLE. DWA POWODY,
 *   KAŻDY WYSTARCZAJĄCY:
 *   — most (1565) ZOSTAŁ ZNISZCZONY WE WRZEŚNIU 2024 r.
 *     Wszystkie starsze opisy („stoi od 1565 roku",
 *     „przetrwał wszystko") SĄ NIEAKTUALNE. Pisanie
 *     o nim w czasie teraźniejszym byłoby nieprawdą,
 *     a pisanie o przyczynie zniszczenia wchodzi
 *     w wykluczony wątek żywiołu.
 *   — „NAJSTARSZY MOST KAMIENNY W POLSCE" TO KŁODZKO
 *     (wzmianka 1286, obecny kształt ok. 1390),
 *     NIE LĄDEK. Oba nazywają się „most św. Jana",
 *     oba leżą w powiecie kłodzkim, dzieli je 25 km.
 *     To najgroźniejsza pomyłka faktograficzna tego
 *     miasta.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — LOKACJA: POŁOWA XIII w. [ZW, strona gminy].
 *   — ⚠⚠⚠ ROKU 1282 NIE PODAJĘ: pochodzi z JEDNEGO
 *     źródła turystycznego, a oficjalna strona gminy
 *     roku nie podaje w ogóle. PISZĘ „w drugiej połowie
 *     XIII wieku".
 *   — NADAWCY PRAW NIE PODAJĘ — [NP].
 *   — 1337 — dokument księcia Bolka potwierdzający
 *     przywileje [ZW].
 *   — 1946 — ustalenie urzędowej nazwy „Lądek-Zdrój".
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — MICHAŁ KLAHR W RYNKU:
 *   — mieszkał w kamienicy nr 1 w lądeckim rynku
 *     w latach 1724–1742 — OSIEMNAŚCIE LAT,
 *   — figurę Trójcy Świętej, która stoi na tym rynku,
 *     wykonał w latach 1739–1742 — czyli w OSTATNICH
 *     TRZECH z tych osiemnastu.
 *   ⚠⚠⚠ Z OSIEMNASTU LAT OBECNOŚCI ZOSTAŁY TRZY.
 *   I to trzy ostatnie. To jest cały kąt.
 *   ⚠⚠ NIE TWIERDZĘ, że przez pozostałych piętnaście lat
 *   nie zrobił nic — twierdzę WYŁĄCZNIE, że to, co stoi
 *   w tym rynku, powstało w ostatnich trzech.
 *   ⚠⚠ NIE WYLICZAM innych jego dzieł — nie ustalono ich
 *   dla tego miasta.
 *   ⚠ „Michał Klahr" podaję w formie spolszczonej, tak
 *   jak robi to źródło.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — RATUSZ: 1537 · przebudowa 1739 · przebudowa 1872.
 *   Odstępy: 202 lata i 133 lata.
 *   ⚠⚠ „TRZY POSTACI TEGO SAMEGO BUDYNKU" JAKO KĄT —
 *   NIE UŻYWAM: ociera się o „dołożone po latach
 *   używania" (Syców). PODAJĘ DATY BEZ MORAŁU.
 *   ⚠ WYSOKOŚCI WIEŻY RATUSZOWEJ NIE USTALONO.
 * — ZAMEK KARPIEŃ: 775 m n.p.m.; zamek górny ok. 35 m
 *   długości i 21 m szerokości; budynek wschodni
 *   ok. 8,5–9 × 21 m; pierwsza wzmianka 14 lutego
 *   1346 r., koniec funkcjonowania 15 czerwca 1443 r.
 *   ⚠⚠⚠ PRZYCZYNY KOŃCA NIE PODAJĘ — data na osi,
 *   bez opisu zdarzenia. Wątek zbrojny wykluczony.
 *   ⚠⚠ „BUDYNEK TEJ SAMEJ SZEROKOŚCI CO CAŁY ZAMEK"
 *   JAKO KĄT — NIE UŻYWAM: ociera się o „wymiary
 *   stykających się rzeczy" (Głuszyca). PODAJĘ WYMIARY
 *   JAKO FAKTY.
 *   ⚠ GŁĘBOKOŚCI STUDNI I WYMIARÓW DZIEDZIŃCA
 *   NIE USTALONO.
 * — ⚠⚠ SPISU WSI OKRĘGU KARPIEŃSKIEGO (lista wymienia
 *   czternaście, dokument z 1337 r. mówi o dwudziestu
 *   czterech) NIE ROBIĘ KĄTEM: „ile umiemy nazwać"
 *   ociera się o „siedem nazw na jeden przedmiot"
 *   (Szklarska Poręba). SZKODA, ALE ZAJĘTE.
 * — KOLEJ, LINIA NR 322 (Kłodzko Nowe – Stronie
 *   Śląskie): 31,316 km, dziewięć posterunków,
 *   przewyższenie 187 m (295 → 482 m n.p.m.);
 *   otwarcie 14 listopada 1897 r., W CAŁOŚCI, nie
 *   etapami; stacja Lądek Zdrój na 25,31 km; ruch
 *   osobowy zawieszono 15 marca 2004 r. — po 106 latach
 *   i 4 miesiącach.
 *   ⚠⚠ „OTWARTE W CAŁOŚCI JEDNEGO DNIA" JAKO KĄT —
 *   NIE UŻYWAM: ociera się o „najpierw droga, potem
 *   ruch" (Pieńsk). PODAJĘ JAKO FAKTY.
 *   ⚠⚠ TA SAMA LINIA OBSŁUGUJE STRONIE ŚLĄSKIE, KTÓRE
 *   MA WŁASNĄ STRONĘ. Fakty kolejowe są WSPÓLNE dla obu
 *   miast — nie przypisuję Lądkowi tego, co dotyczy
 *   całej linii.
 * — ŚNIEŻNICKI PARK KRAJOBRAZOWY: utworzony 1981,
 *   28 800 ha, otulina 14 900 ha, obejmuje pięć gmin
 *   (w tym Lądek-Zdrój i Stronie Śląskie).
 * — ODLEGŁOŚĆ [ZW]: Kłodzko 25 km. POZOSTAŁYCH
 *   KIERUNKÓW NIE PODAJĘ. ⚠ Do Stronia Śląskiego jest
 *   ok. 6 km, ale to wyliczenie własne z kilometrażu —
 *   NIE PODAJĘ GO JAKO ZMIERZONEJ ODLEGŁOŚCI.
 *
 * KĄT: OSIEMNAŚCIE LAT MIESZKANIA, TRZY LATA ROBOTY
 * — o tym, że z długiej obecności zostaje drobny i późny
 * ułamek, którego nie da się wybrać z góry. Kąt od
 * rzeźbiarza Michała Klahra: mieszkał w lądeckim rynku
 * osiemnaście lat, a stojąca tam figura powstała
 * w ostatnich trzech.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Michał Klahr mieszkał w kamienicy nr 1 w rynku
 *   w latach 1724–1742, a figurę Trójcy Świętej wykonał
 *   w latach 1739–1742,
 * — ŻE Z OSIEMNASTU LAT ZOSTAŁY TRZY — I TO TRZY
 *   OSTATNIE. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI OBOWIĄZUJE TO SAMO: z tysięcy
 *   ugotowanych obiadów dzieci zapamiętają kilka dań,
 *   i prawie nigdy nie są to te, przy których stało się
 *   najdłużej,
 * — ⚠⚠ ŻE NIE DA SIĘ TEGO WYBRAĆ Z GÓRY — zapamiętuje
 *   się zwykle to, co się powtarzało, a nie to, co było
 *   wyjątkowe,
 * — ⚠⚠ ŻE Z TEGO PŁYNIE JEDEN WNIOSEK, I JEST ULGĄ,
 *   A NIE ZADANIEM: nie trzeba optymalizować pod
 *   zapamiętywanie. Nie ma czego celować,
 * — ⚠⚠ ŻE PRESJA NA „WYJĄTKOWE OKAZJE" JEST DLATEGO
 *   ŹLE ULOKOWANA — świąteczny obiad robi się raz
 *   w roku, a wtorkowy dwieście razy, i to ten drugi
 *   zostaje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie znaczy, że
 *   wyjątkowe okazje są bez znaczenia. Znaczy tylko,
 *   że nie są tym, z czego zbudowana jest pamięć
 *   o kuchni,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE — TO MUSI PADAĆ WPROST
 *   I DZIAŁA PRZECIWKO SPRZEDAŻY NA EMOCJACH:
 *   urządzenie kupione „na święta i na gości" się nie
 *   zwróci. Zwraca się to, czego używa się we wtorek.
 *   MÓWIĘ, że przed zakupem warto policzyć zwykłe dni,
 *   a nie okazje.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice). ⚠⚠ TO NAJBLIŻSZY OBSZAR:
 *   tamten tekst mówi, KIEDY SPRAWDZIĆ, czy rzecz jest
 *   używana; ten mówi, CO Z DŁUGIEJ OBECNOŚCI ZOSTAJE.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt zajęty
 *   (Szklarska Poręba). Dlatego spis wsi okręgu
 *   karpieńskiego w ogóle nie wchodzi do tekstu.
 * — ⚠⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców). Ratusz ociera się o to wprost.
 * — ⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk).
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS — kąt zajęty (Stopnica).
 * — ⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNEGO MORALIZOWANIA O RODZINIE I WYCHOWANIU —
 *   mówię o gotowaniu i o pamięci smaku, nie o tym, jak
 *   prowadzić dom ani jak wychowywać dzieci.
 *   TO JEST TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠⚠ ZERO WĄTKU UZDROWISKOWEGO W CAŁOŚCI.
 * — ⚠⚠⚠ ZERO MOSTU ŚW. JANA.
 * — ⚠⚠ ZERO ZNISZCZEŃ Z LAT 1241, 1428, 1431 —
 *   wątek zbrojny.
 * — ⚠⚠ ZERO POŻARU Z 1739 R. I ZERO POWODZI.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — figurę Trójcy Świętej
 *   traktuję WYŁĄCZNIE jako datowaną rzeźbę stojącą
 *   w rynku, bez opisu treści religijnej i bez
 *   komentarza. TO JEST GRANICA, KTÓREJ PILNUJĘ.
 * — ⚠ ZERO DEMOGRAFII WSPÓŁCZESNEJ I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PISZĘ ANI SŁOWA o uzdrowisku i wodach.
 * — NIE WSPOMINAM mostu św. Jana.
 * — NIE TWIERDZĘ, że Klahr przez piętnaście lat nic
 *   nie zrobił.
 * — NIE PODAJĘ wysokości wieży ratuszowej.
 * — NIE PODAJĘ odległości do Stronia Śląskiego —
 *   to wyliczenie, nie pomiar.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ Wpisy „kłodzkie", „sudeckie"
 *   i „z Ziemi Kłodzkiej" są REGIONALNE, NIE GMINNE —
 *   nie przypisuję ich Lądkowi.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lądek-Zdrój leży w powiecie kłodzkim; miasto liczy
 *   4 914 mieszkańców (GUS, 31.12.2024) na 20,3 km²,
 *   czyli 241,8 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 7 434 osoby na 117,3 km²;
 *   wykaz GUS wymienia w niej jedenaście wsi; rynek leży
 *   na 426 m n.p.m.,
 * — miasto lokowano w połowie XIII w., a w 1337 r.
 *   książę Bolko potwierdził jego przywileje; urzędową
 *   nazwę „Lądek-Zdrój" ustalono w 1946 r.,
 * — ratusz pochodzi z 1537 r. i był przebudowywany
 *   w 1739 oraz 1872 r.,
 * — rzeźbiarz Michał Klahr mieszkał w kamienicy nr 1
 *   w rynku w latach 1724–1742, a stojącą tam figurę
 *   Trójcy Świętej wykonał w latach 1739–1742,
 * — zamek Karpień leżał na 775 m n.p.m.; zamek górny
 *   miał około 35 m długości i 21 m szerokości,
 *   a budynek wschodni około 8,5–9 m przy tej samej
 *   dwudziestojednometrowej szerokości; pierwsza
 *   wzmianka pochodzi z 14 lutego 1346 r., a koniec
 *   jego funkcjonowania z 15 czerwca 1443 r.,
 * — linia kolejowa nr 322 z Kłodzka Nowego do Stronia
 *   Śląskiego ma 31,316 km, dziewięć posterunków
 *   i 187 m przewyższenia; otwarto ją w całości
 *   14 listopada 1897 r., stacja Lądek Zdrój leży
 *   na 25,31 km, a ruch osobowy zawieszono 15 marca
 *   2004 r. — po 106 latach i 4 miesiącach,
 * — Śnieżnicki Park Krajobrazowy utworzono w 1981 r.;
 *   ma 28 800 ha i otulinę 14 900 ha, a obejmuje pięć
 *   gmin,
 * — do Kłodzka jest stąd 25 km.
 */
export const LADEK_ZDROJ: CityContent = {
  slug: "ladek-zdroj",
  h1: "Thermomix Lądek-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lądek-Zdrój — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Lądku-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lądek-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lądku-Zdroju. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lądka-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Lądek-Zdrój"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Osiemnaście lat w tym rynku. Zostały trzy ostatnie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lądku-Zdroju – jak wygląda prezentacja?",
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
      id: "osiemnascie-lat-trzy-lata",
      heading: "Osiemnaście lat mieszkania, trzy lata roboty",
      paragraphs: [
        "Rzeźbiarz Michał Klahr mieszkał w kamienicy numer jeden w lądeckim rynku od 1724 do 1742 roku. Osiemnaście lat.",
        "Figura Trójcy Świętej, która stoi na tym samym rynku, powstała w latach 1739–1742. W ostatnich trzech z tych osiemnastu.",
        "Nie twierdzę, że przez wcześniejsze piętnaście lat nic nie robił — pewnie robił bardzo dużo. Twierdzę tylko tyle, ile widać: z osiemnastu lat obecności w tym miejscu zostało trzy. I to trzy ostatnie.",
        "W kuchni jest dokładnie tak samo, tylko liczby są większe.",
        "Przez dwadzieścia lat ugotujesz kilka tysięcy obiadów. Dzieci zapamiętają kilka dań. Może osiem, może dwanaście. I prawie nigdy nie są to te, przy których stało się najdłużej.",
        "Nie da się tego wybrać z góry. Zapamiętuje się to, co się powtarzało — zapach, konsystencję, to, że w czwartek zawsze było to samo. Nie to, co było wyjątkowe.",
        "Z tego płynie jeden wniosek i jest on ulgą, a nie kolejnym zadaniem: nie ma czego optymalizować. Nie ma jak wycelować. Można tylko gotować dalej i pozwolić powtórzeniu zdecydować.",
        "Dlatego cała presja wokół „wyjątkowych okazji” jest źle ulokowana. Świąteczny obiad robi się raz w roku. Wtorkowy — dwieście razy. I to ten drugi zostaje.",
        "Dopowiem, bo to leży blisko: to nie jest pytanie o to, czy nowa rzecz w domu się przyjęła. To osobna sprawa. Tutaj chodzi o coś innego — o to, która część długiej obecności w ogóle zostaje.",
        "Uczciwie o drugiej stronie: nie twierdzę, że wyjątkowe okazje są bez znaczenia. Są, i bywają najlepszymi dniami w roku. Znaczy to tylko tyle, że nie z nich zbudowana jest pamięć o czyjejś kuchni.",
        "I uczciwie o sprzęcie, bo to akurat działa przeciwko mnie. Urządzenie kupione „na święta i na gości” się nie zwróci — ani finansowo, ani inaczej. Zwraca się to, czego używa się we wtorek o wpół do siódmej. Przed zakupem warto policzyć zwykłe dni, a nie okazje, i jeśli zwykłych dni z gotowaniem jest u Was mało, powiem to na spotkaniu wprost.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lądku-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was pojawia się na stole najczęściej. Nie co najlepszego — co najczęściej. To dwie różne rzeczy i dla doboru dań liczy się ta druga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lądku-Zdroju"),
    sekcjaRaty("w Lądku-Zdroju"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Lądka-Zdroju",
      paragraphs: [
        "Lądek-Zdrój leży w powiecie kłodzkim. Samo miasto liczy 4 914 mieszkańców (GUS, 31.12.2024) na dwudziestu kilometrach kwadratowych z okładem, czyli dwieście czterdzieści dwie osoby na kilometr, a cała gmina miejsko-wiejska 7 434 osoby na stu siedemnastu. Wykaz GUS wymienia w gminie jedenaście wsi — piszę „wymienia”, bo inne spisy podają inną liczbę, a Rogóżka, kojarzona tu historycznie, leży dziś w gminie Stronie Śląskie. Rynek jest na czterystu dwudziestu sześciu metrach nad poziomem morza. Miasto lokowano w połowie trzynastego wieku; roku nadania praw miejskich nie podaję, bo źródła nie są zgodne, a oficjalna strona gminy go nie wymienia. W 1337 roku książę Bolko potwierdził tutejsze przywileje, a urzędową nazwę „Lądek-Zdrój” ustalono w 1946. Ratusz pochodzi z 1537 roku i był przebudowywany w 1739 oraz 1872. Rzeźbiarz Michał Klahr mieszkał w kamienicy numer jeden w rynku w latach 1724–1742, a stojącą tam figurę Trójcy Świętej wykonał w latach 1739–1742. Zamek Karpień leżał na siedmiuset siedemdziesięciu pięciu metrach; jego górna część miała około trzydziestu pięciu metrów długości i dwudziestu jeden szerokości, a budynek wschodni około dziewięciu metrów przy tej samej szerokości. Pierwsza wzmianka o nim pochodzi z 14 lutego 1346 roku, koniec funkcjonowania z 15 czerwca 1443 — obie daty dzienne, co przy czternastym wieku zdarza się rzadko. Linia kolejowa numer 322 z Kłodzka Nowego do Stronia Śląskiego ma trzydzieści jeden kilometrów i trzysta szesnaście metrów, dziewięć posterunków i sto osiemdziesiąt siedem metrów przewyższenia; otwarto ją w całości 14 listopada 1897 roku, a ruch osobowy zawieszono 15 marca 2004, po stu sześciu latach i czterech miesiącach. Śnieżnicki Park Krajobrazowy utworzono w 1981 roku; ma dwadzieścia osiem tysięcy osiemset hektarów i otulinę liczącą czternaście tysięcy dziewięćset. Do Kłodzka jest stąd dwadzieścia pięć kilometrów.",
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

  districtsHeading: "Do których części Lądka-Zdroju dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Konradowa, Kątów Bystrzyckich, Lutyni, Orłowca, Radochowa, Skrzynki, Stójkowa, Trzebieszowic, Wrzosówki, Wójtówki i Karpna. Wszędzie bez dopłaty.",
    "Gmina ma sto siedemnaście kilometrów kwadratowych i jest rozciągnięta wzdłuż doliny, więc przy umawianiu warto podać nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Lądek-Zdrój też przyjadę",
  nearbyParagraphs: [
    "Do Kłodzka jest stąd dwadzieścia pięć kilometrów. Dojeżdżam też do Stronia Śląskiego, Bystrzycy Kłodzkiej, Złotego Stoku i Międzylesia — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Kłodzko", "Stronie Śląskie", "Bystrzyca Kłodzka", "Złoty Stok", "Międzylesie"],

  about: blokOMnie("do Lądka-Zdroju", "w Lądku-Zdroju i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lądka-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: pisze się z łącznikiem i odmienia oba człony — „do Lądka-Zdroju”, „w Lądku-Zdroju”, a nie „do Lądeka” czy „w Lądku Zdrój”. I uwaga na zbieżność: Lądek bez drugiego członu to osobna wieś gminna w województwie wielkopolskim, kilkaset kilometrów stąd.",
    },
    ...faqWspolne("w Lądku-Zdroju"),
    {
      question: "Chcę, żeby dzieci zapamiętały moje gotowanie. Na czym się skupić?",
      answer:
        "Na powtarzalności, nie na okazjach — i to jest raczej ulga niż zadanie. Rzeźbiarz Michał Klahr mieszkał w lądeckim rynku osiemnaście lat, a figura, która tam stoi, powstała w ostatnich trzech. Z długiej obecności zostaje drobny ułamek i nie da się go wybrać z góry. W kuchni zapamiętuje się to, co się powtarzało: zapach, konsystencję, to, że w czwartek zawsze było to samo. Świąteczny obiad robi się raz w roku, wtorkowy dwieście razy — i to ten drugi zostaje.",
    },
    {
      question: "Czy warto kupić Thermomix głównie na święta i na gości?",
      answer:
        "Nie i powiem to wprost, choć nie działa to na moją korzyść. Urządzenie kupione na okazje się nie zwróci, bo okazji jest kilkanaście w roku. Zwraca się to, czego używa się we wtorek o wpół do siódmej. Przed zakupem warto policzyć zwykłe dni z gotowaniem, a nie święta — i jeśli tych zwykłych dni jest u Was mało, powiem to na spotkaniu, zamiast zachwalać funkcje, z których nie będziecie korzystać.",
    },
  ],

  geo: { lat: 50.3459, lng: 16.8723 },
};
