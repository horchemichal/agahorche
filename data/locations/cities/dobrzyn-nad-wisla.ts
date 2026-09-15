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
 * DOBRZYŃ NAD WISŁĄ — powiat lipnowski,
 * woj. kujawsko-pomorskie, ZIEMIA DOBRZYŃSKA, nad Wisłą.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 940 mieszkańców (GUS 31.12.2024) —
 * NAJMNIEJSZE MIASTO Z TEJ FALI, 5,4 km²,
 * gęstość 358,6 os./km² — NAJNIŻSZA Z FALI.
 * CAŁA GMINA MIEJSKO-WIEJSKA: 7 034 osoby, 116,1 km²,
 * 31 MIEJSCOWOŚCI i 24 sołectwa, 62 os./km².
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ DOBRZYŃ NAD WISŁĄ.
 * ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY — przy 1 940
 *   kontra 7 034 pomyłka daje błąd rzędu 263 %.
 *   TWARDA GRANICA.
 * ⚠ Urząd NIE PODAJE liczby mieszkańców w ogóle —
 *   zawyżenia nie da się sprawdzić. NIE PISZĘ O NIM.
 * ⚠ en.wikipedia podaje 2 025 (XII 2021) — o 4,4 % więcej
 *   niż GUS, ale z podaną datą, więc rozbieżność jest
 *   wyjaśnialna. UŻYWAM GUS: 1 940.
 * ⚠ GEO: 52,63778 / 19,32139 — WSPÓŁRZĘDNE POCHODZĄ
 *   WYŁĄCZNIE Z en.wikipedia, nie udało się ich pobrać
 *   z polskawliczbach. Mieszczą się w mieście, ale to
 *   jedno źródło.
 * ⚠ ODMIANA: D. DOBRZYNIA NAD WISŁĄ,
 *   Ms. W DOBRZYNIU NAD WISŁĄ, przym. DOBRZYŃSKI.
 *   ⚠⚠ CZŁON „NAD WISŁĄ" JEST NIEODMIENNY: „z Dobrzynia
 *   nad Wisłą", „w Dobrzyniu nad Wisłą". NIGDY „nad
 *   Wisły" ani „nad Wiśle".
 *   ⚠ NIE POTWIERDZONE W PWN — hasła nie ma w słowniku;
 *   przymiotnik potwierdzony w utrwalonej nazwie „ziemia
 *   dobrzyńska" i w nazwie cechu szewców dobrzyńskich.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 * ⚠⚠⚠ RYZYKA POMYLENIA — DRUGIE NAJPOWAŻNIEJSZE
 *   W TEJ FALI:
 *   GOLUB-DOBRZYŃ to ZUPEŁNIE INNE MIASTO, siedziba
 *   powiatu golubsko-dobrzyńskiego, około dziewięćdziesiąt
 *   kilometrów stąd, znacznie bardziej znane turystycznie.
 *   ⚠⚠ „DOBRZYŃ NAD DRWĘCĄ" TO HISTORYCZNA NAZWA CZĘŚCI
 *   GOLUBIA-DOBRZYNIA — dokładnie ta sama konstrukcja
 *   „Dobrzyń nad [rzeką]", tylko inna rzeka i inne miasto.
 *   ZAWSZE PEŁNA NAZWA „DOBRZYŃ NAD WISŁĄ", NIGDY SAMO
 *   „DOBRZYŃ".
 *   ⚠ ZIEMIA DOBRZYŃSKA to REGION HISTORYCZNY, nie miasto.
 *   ⚠ GMINA DOBRE (pow. radziejowski) to inna gmina
 *   o myląco podobnej nazwie — i to ona ma produkty
 *   tradycyjne, nie Dobrzyń.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1065 — najstarsza zapisana wzmianka o Dobrzyniu.
 * — ok. 1230 — lokacja miasta.
 *   ⚠⚠ ŹRÓDŁA ROZBIEŻNE CO DO PRAWA (chełmińskie
 *   albo lubeckie) — NIE ROZSTRZYGAM.
 *   ⚠⚠ LOKACJI DOKONALI BRACIA DOBRZYŃSCY — ZAKON
 *   RYCERSKI. NIE WYMIENIAM ICH. Piszę „miasto lokowano
 *   około 1230 roku". TWARDA GRANICA.
 * — 1239 — pierwsza wzmianka o sołtysie miasta.
 * — 1252 — wzmianki o kasztelanie.
 *   ⚠⚠ ŹRÓDŁO WYMIENIA TEŻ KOMORĘ CELNĄ — NIE UŻYWAM,
 *   bo „komora celna" to kąt Kowala z poprzedniej fali.
 * — przed 1390 — ponowna lokacja na prawie chełmińskim.
 * — 1390, 1425, 1455, 1519, 1580 i 1587 — SZEŚĆ dat
 *   nadania przywilejów miejskich przez kolejnych książąt
 *   i królów.
 * — XV–XVI w. — rozkwit dzięki handlowi zbożem z Gdańskiem;
 *   miasto królewskie.
 * — Szczyt rozwoju: OK. 600 DOMÓW.
 * — ⭐ 1731 — król August II nadaje STATUT DLA CECHU
 *   SZEWCÓW DOBRZYŃSKICH.
 * — DWA MŁYNY WODNE i TRZY WIATRAKI.
 * — Magazyn przy ul. Płockiej 26 z czwartej ćwierci
 *   XIX w. oraz MAGAZYN ZBOŻOWY przy ul. Płockiej 11b
 *   z 1911 r. — dwa magazyny przy tej samej ulicy.
 * — ⚠⚠⚠ RDZEŃ KĄTA — 1902:
 *   FABRYKA ORGANÓW DOMINIKA BIERNACKIEGO,
 *   ZATRUDNIAJĄCA „AŻ 80 OSÓB" — w mieście, które
 *   w szczycie liczyło około sześciuset domów.
 *   ⚠ DOMINIK BIERNACKI JEST POSTACIĄ BEZPIECZNĄ:
 *   sprawdzone, jedyne wystąpienie w źródłach to fakt
 *   gospodarczy. Mogę podać nazwisko.
 *   ⚠ ORGANY: instrument, którego nie buduje się
 *   „uniwersalnie" — każdy egzemplarz dostraja się
 *   pod konkretne wnętrze, w którym stanie, i rozstraja
 *   wraz ze zmianą temperatury i wilgotności tego wnętrza.
 *   ⚠ TO JEST WIEDZA OGÓLNA O INSTRUMENCIE, NIE CYTAT
 *   ZE ŹRÓDŁA O DOBRZYNIU. Piszę o tym ostrożnie i bez
 *   przypisywania nikomu konkretnych słów.
 * — Młyn przy ul. Słowackiego 9 z pierwszej ćwierci XX w.
 * — Na przełomie XIX i XX w. działały w mieście octownia
 *   i cegielnia.
 *   ⚠⚠ ŹRÓDŁO WYMIENIA TEŻ BROWAR — POMIJAM (alkohol)
 *   ORAZ KOPALNIĘ WĘGLA BRUNATNEGO — pomijam (prowadzi
 *   do warunków pracy).
 *   ⚠ OCTOWNIĘ WYMIENIAM WYŁĄCZNIE JAKO ZAKŁAD —
 *   kąt „kwas w kuchni" jest zajęty (Łęknica).
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Dobrzyń nad Wisłą na Liście MRiRW. Sprawdzono
 *   wszystkie dziesięć kategorii. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠⚠ PUŁAPKA NAJWAŻNIEJSZA W TEJ FALI: KATALOG KPODR
 *   („Produkty Tradycyjne z Pomorza i Kujaw", prowadzony
 *   przez ośrodek doradztwa rolniczego) PRZYPISUJE GMINIE
 *   DOBRZYŃ NAD WISŁĄ CZTERY PRODUKTY — babkę gotowaną,
 *   chleb wiejski, groch z kapustą i ser topiony —
 *   Z KTÓRYCH NA LIŚCIE MRiRW NIE MA ANI JEDNEGO
 *   przypisanego do tej gminy. KPODR TO NIE JEST LISTA
 *   MRiRW. Napisanie „Dobrzyń ma cztery produkty
 *   tradycyjne" byłoby NIEPRAWDĄ. TWARDA GRANICA
 *   BEZWZGLĘDNA.
 *   ⚠⚠ DRUGA PUŁAPKA: „TWARÓG Z KUJAW I ZIEMI
 *   DOBRZYŃSKIEJ" (31.07.2013) JEST na Liście, ale ma
 *   ZASIĘG REGIONALNY i karta NIE WYMIENIA ŻADNEJ GMINY.
 *   Nazwa aż się prosi o przypisanie miastu — NIE WOLNO.
 *   ⚠ „Groch z kapustą" (28.09.2012) jest na Liście jako
 *   produkt regionalny województwa, bez gminy.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: TEMPERATURA KUCHNI — dlaczego ten sam przepis
 * zachowuje się inaczej w styczniu i w lipcu.
 * Kąt od fabryki organów z 1902 r.: organów nie buduje się
 * uniwersalnie. Każdy instrument dostraja się pod
 * konkretne wnętrze, w którym stanie — a potem rozstraja
 * się razem z nim, gdy zmienia się w nim temperatura
 * i wilgotność.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1902 r. działała tu fabryka organów zatrudniająca
 *   osiemdziesiąt osób, w mieście liczącym w szczycie
 *   około sześciuset domów,
 * — że organy stroi się pod jedno wnętrze i że razem z nim
 *   reagują na ciepło i wilgoć — ⚠ podaję to jako wiedzę
 *   o instrumencie, nie jako cytat o Dobrzyniu,
 * — ⚠⚠ ŻE KUCHNIA JEST TAKIM SAMYM WNĘTRZEM I ŻE JEJ
 *   TEMPERATURA ZMIENIA WYNIK TEGO SAMEGO PRZEPISU —
 *   TO JEST RDZEŃ. Przepis tego nie zapisuje, bo autor
 *   miał swoją kuchnię,
 * — KONKRETY, PO KOLEI:
 *   — CIASTO DROŻDŻOWE rośnie wyraźnie wolniej w chłodnej
 *     kuchni; „godzina wyrastania" znaczy co innego
 *     w styczniu i w lipcu,
 *   — „MIĘKKIE MASŁO" to zupełnie inna rzecz przy
 *     osiemnastu i przy dwudziestu sześciu stopniach —
 *     stąd bierze się to, że ucieranie raz wychodzi,
 *     a raz nie,
 *   — CIASTO KRUCHE w ciepłej kuchni rozpada się, bo
 *     tłuszcz mięknie, zanim skończysz zagniatać,
 *   — CUKIER PUDER I SÓL ZBRYLAJĄ SIĘ przy wilgotnym
 *     powietrzu,
 *   — POLEWY I CZEKOLADA tężeją inaczej,
 * — ⚠⚠ PRAKTYCZNY WNIOSEK: NIE ZMIENIAĆ PRZEPISU, TYLKO
 *   PATRZEĆ NA KUCHNIĘ. Termometr ścienny za kilkanaście
 *   złotych mówi o wyniku więcej niż większość uwag
 *   w przepisach. W ciepłej kuchni pracuj szybciej
 *   i częściej chłodź; w chłodnej daj więcej czasu
 *   i nie popędzaj,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie trzyma temperaturę
 *   WEWNĄTRZ SWOJEGO NACZYNIA i to realnie usuwa część
 *   zmienności — nie muszę tego wyolbrzymiać, bo to
 *   po prostu prawda. ALE WSZYSTKO, CO DZIEJE SIĘ POZA
 *   NACZYNIEM — wyrastanie na blacie, masło czekające
 *   w temperaturze pokojowej, tężenie polewy — dzieje się
 *   w temperaturze kuchni i żadne urządzenie tego
 *   nie kontroluje.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO PORY ROKU JAKO TEMATU — kąt zajęty (Żywiec).
 *   Tam chodzi o to, CO SIĘ GOTUJE W DANYM SEZONIE;
 *   TUTAJ o to, JAK ZACHOWUJE SIĘ TEN SAM PRZEPIS.
 *   Rozgraniczam wprost. TWARDA GRANICA.
 * — ⚠⚠ ZERO GORĄCEJ KUCHNI LATEM JAKO UCIĄŻLIWOŚCI —
 *   kąt zajęty (Wałcz). Nie piszę o tym, że w upał nikt
 *   nie chce gotować. Piszę o FIZYCE, nie o komforcie.
 * — ⚠⚠ ZERO NIERÓWNEGO PIECZENIA I ZACHOWANIA PIEKARNIKA
 *   — kąt zajęty (Zielonka). Nie piszę o tym, że piekarnik
 *   kłamie ani o termometrze piekarnikowym. Termometr,
 *   o którym piszę, WISI NA ŚCIANIE I MIERZY POKÓJ.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO SMAKU Z PAMIĘCI — kąt zajęty (Gozdnica).
 * — ⚠ ZERO TEMPERATURY SKŁADNIKÓW — kąt zajęty (Mogilno).
 *   Tam chodzi o to, CZY SKŁADNIK JEST ZIMNY Z LODÓWKI;
 *   TUTAJ o TEMPERATURĘ POMIESZCZENIA. Rozgraniczam.
 * — ⚠ ZERO ODPOCZYNKU PO UPIECZENIU — kąt zajęty
 *   (Młynary).
 * — ⚠ ZERO KWASU I OCTU W KUCHNI — kąt zajęty (Łęknica).
 *   Octownię wymieniam wyłącznie jako zakład.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠⚠ Temperatury pomieszczenia (18, 26 stopni) podaję
 *   jako TEMPERATURY POKOJU, nigdy jako ustawienia sprzętu
 *   ani jako parametry obróbki. TWARDA GRANICA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠ szczególnie przy maśle stojącym w cieple:
 *   piszę WYŁĄCZNIE o konsystencji, ZERO o psuciu się.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ. To jedyna
 *   wyodrębniona sekcja społeczna w haśle en.wikipedii
 *   o Dobrzyniu, a informacja o strukturze ludności stoi
 *   TAKŻE w tym samym tekście na stronie miasta, z którego
 *   pochodzą fakty o cechu szewców i fabryce organów —
 *   czyli w źródle, do którego trzeba było sięgnąć.
 *   CZYTAM TAM WYŁĄCZNIE AKAPITY GOSPODARCZE.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠ ZERO RZEŹNI. Wymieniona w bieżącym profilu
 *   gospodarczym miasta obok fabryki obuwia, spółdzielni
 *   rybackiej i młyna. NIE PRZEPISUJĘ TEJ LISTY W CAŁOŚCI.
 * — ⚠⚠ ZERO BROWARU I KOPALNI WĘGLA BRUNATNEGO.
 * — ⚠⚠ ZERO BRACI DOBRZYŃSKICH — zakon rycerski, wątek
 *   i wyznaniowy, i militarny.
 * — ⚠ ZERO KLASZTORU Z 1795 R. I KOŚCIOŁÓW jako wątku
 *   wyznaniowego.
 * — ⚠ ZERO KOMORY CELNEJ — kąt zajęty (Kowal).
 * — ⚠ ZERO STRUKTURY WIEKU MIESZKAŃCÓW.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *   ⚠ Katalog KPODR to NIE jest Lista MRiRW.
 * — ZERO bezrobocia, salda migracji, przyrostu naturalnego
 *   i porównań liczby mieszkańców między latami.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „PORA ROKU" (Żywiec) dotyczy TEGO, CO SIĘ GOTUJE
 *   W DANYM SEZONIE. ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ
 *   chodzi o TEN SAM PRZEPIS ZACHOWUJĄCY SIĘ INACZEJ.
 * — „LATO I GORĄCA KUCHNIA" (Wałcz) dotyczy KOMFORTU.
 * — „NIERÓWNE PIECZENIE" (Zielonka) dotyczy PIEKARNIKA.
 * — „TEMPERATURA SKŁADNIKÓW" (Mogilno) dotyczy TEGO,
 *   CZY SKŁADNIK JEST ZIMNY.
 * TUTAJ chodzi o TEMPERATURĘ I WILGOĆ POMIESZCZENIA —
 * czyli o coś, czego przepis nigdy nie podaje, bo autor
 * miał swoją kuchnię i uważał ją za normalną.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SKRACAM nazwy do „Dobrzyń".
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PISZĘ, czy urząd zawyża — nie podaje liczb.
 * — NIE ROZSTRZYGAM, na jakim prawie lokowano miasto
 *   około 1230 r., ani kto tego dokonał.
 * — NIE PODAJĘ komory celnej.
 * — NIE PRZYPISUJĘ Dobrzyniowi produktów z katalogu KPODR
 *   ani „twarogu z Kujaw i Ziemi Dobrzyńskiej".
 * — NIE CYTUJĘ w całości bieżącego profilu gospodarczego
 *   miasta.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 * — NIE TWIERDZĘ, że źródło o Dobrzyniu pisze cokolwiek
 *   o strojeniu organów — to wiedza o instrumencie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Dobrzyń nad Wisłą leży w ziemi dobrzyńskiej,
 *   w powiecie lipnowskim, nad Wisłą; jest miastem
 *   w gminie miejsko-wiejskiej i liczy 1 940 mieszkańców
 *   (GUS, 31.12.2024) na 5,4 km²; cała gmina ma 7 034
 *   osoby, trzydzieści jeden miejscowości i dwadzieścia
 *   cztery sołectwa na 116,1 km²,
 * — najstarsza zapisana wzmianka o Dobrzyniu pochodzi
 *   z 1065 roku, miasto lokowano około 1230, a w 1239
 *   wzmiankowano po raz pierwszy jego sołtysa;
 *   przed 1390 rokiem lokowano je ponownie, na prawie
 *   chełmińskim,
 * — przywileje miejskie nadawano tu sześciokrotnie:
 *   w 1390, 1425, 1455, 1519, 1580 i 1587 roku,
 * — w XV i XVI wieku miasto rozkwitło dzięki handlowi
 *   zbożem z Gdańskiem i w szczycie rozwoju miało około
 *   sześciuset domów,
 * — w 1731 roku król August II nadał statut dla cechu
 *   szewców dobrzyńskich,
 * — pracowały tu dwa młyny wodne i trzy wiatraki;
 *   przy ulicy Płockiej stoją dwa magazyny — jeden
 *   z czwartej ćwierci XIX wieku, drugi, zbożowy,
 *   z 1911 roku — a przy ulicy Słowackiego młyn
 *   z pierwszej ćwierci XX wieku,
 * — w 1902 roku działała w mieście fabryka organów
 *   Dominika Biernackiego, zatrudniająca osiemdziesiąt
 *   osób,
 * — na przełomie XIX i XX wieku działały tu także
 *   octownia i cegielnia.
 */
export const DOBRZYN_NAD_WISLA: CityContent = {
  slug: "dobrzyn-nad-wisla",
  h1: "Thermomix Dobrzyń nad Wisłą – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dobrzyń nad Wisłą — prezentacja i cena",
  seoDescription:
    "Thermomix w Dobrzyniu nad Wisłą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dobrzyń nad Wisłą — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dobrzyniu nad Wisłą. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dobrzynia nad Wisłą z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Dobrzyń nad Wisłą"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepis nie zapisuje temperatury kuchni, bo autor miał swoją i uważał ją za normalną.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dobrzyniu nad Wisłą – jak wygląda prezentacja?",
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
      id: "temperatura-kuchni",
      heading: "Instrument strojony pod jedno wnętrze",
      paragraphs: [
        "W 1902 roku działała w Dobrzyniu nad Wisłą fabryka organów Dominika Biernackiego, zatrudniająca osiemdziesiąt osób — w mieście, które w szczycie swojego rozwoju liczyło około sześciuset domów.",
        "Organy mają pewną własność, która mnie zawsze uderzała: nie buduje się ich uniwersalnie. Każdy instrument dostraja się pod konkretne wnętrze, w którym stanie. A potem rozstraja się razem z nim — bo drewno i metal reagują na to, jak ciepło i jak wilgotno jest w środku.",
        "Zaznaczam, że to wiedza o instrumencie, nie cytat ze źródła o Dobrzyniu. Ale skojarzenie jest zbyt trafne, żeby je zostawić, bo dokładnie tak działa kuchnia.",
        "Kuchnia też jest wnętrzem o swojej temperaturze i wilgotności, i te dwie rzeczy zmieniają wynik tego samego przepisu. Żaden przepis tego nie zapisuje, bo autor miał swoją kuchnię i uważał ją za normalną.",
        "Najwyraźniej widać to przy cieście drożdżowym. W chłodnej kuchni rośnie wyraźnie wolniej, w ciepłej szybciej — więc „godzina wyrastania” znaczy co innego w styczniu i co innego w lipcu. To nie jest błąd przepisu ani Twój; to jest niedopowiedzenie.",
        "Drugi przykład jest jeszcze częstszy: „miękkie masło”. Przy osiemnastu stopniach w pomieszczeniu to zupełnie inna rzecz niż przy dwudziestu sześciu. Stąd bierze się to, że ucieranie raz wychodzi gładko, a raz masa się warzy albo rozpływa, choć robisz to samo.",
        "Ciasto kruche w ciepłej kuchni rozpada się, bo tłuszcz mięknie, zanim skończysz zagniatać. Cukier puder i sól zbrylają się przy wilgotnym powietrzu. Polewy i czekolada tężeją raz szybciej, raz wolniej. To wszystko jedna przyczyna.",
        "Wniosek praktyczny jest odwrotny do tego, co zwykle robimy. Nie zmieniaj przepisu — popatrz na kuchnię.",
        "Termometr ścienny za kilkanaście złotych mówi o tym, co się wydarzy, więcej niż większość uwag w przepisach. A reguła jest prosta: w ciepłej kuchni pracuj szybciej i częściej chłodź, w chłodnej daj więcej czasu i nie popędzaj.",
        "Uczciwie o sprzęcie, bo tu akurat jest realna przewaga i nie ma powodu jej umniejszać. Urządzenie trzyma temperaturę wewnątrz swojego naczynia, a to usuwa sporą część tej zmienności — masy, kremy i sosy wychodzą powtarzalnie niezależnie od tego, jaki jest dzień.",
        "Ale wszystko, co dzieje się poza naczyniem, dzieje się w temperaturze Twojej kuchni. Ciasto wyrastające na blacie, masło czekające na ucieranie, polewa tężejąca na torcie — tego żadne urządzenie nie kontroluje i nie ma jak.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dobrzyniu nad Wisłą?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy Twoja kuchnia jest raczej ciepła, czy chłodna — to naprawdę zmienia dobór dań na spotkanie i chętnie pokażę, w którym miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dobrzyniu nad Wisłą"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dobrzyńskiej rodziny",
      paragraphs: [
        "Dobrzyń nad Wisłą leży w ziemi dobrzyńskiej, w powiecie lipnowskim, nad Wisłą; jest miastem w gminie miejsko-wiejskiej i liczy niecałe dwa tysiące mieszkańców na pięciu i czterech dziesiątych kilometra kwadratowego, a cała gmina — ponad siedem tysięcy osób w trzydziestu jeden miejscowościach i dwudziestu czterech sołectwach. Najstarsza zapisana wzmianka pochodzi z 1065 roku, miasto lokowano około 1230, a w 1239 wzmiankowano po raz pierwszy jego sołtysa; przed 1390 rokiem lokowano je ponownie, na prawie chełmińskim. Przywileje miejskie nadawano tu sześciokrotnie: w 1390, 1425, 1455, 1519, 1580 i 1587 roku. W XV i XVI wieku miasto rozkwitło dzięki handlowi zbożem z Gdańskiem i w szczycie rozwoju miało około sześciuset domów. W 1731 roku król August II nadał statut dla cechu szewców dobrzyńskich. Pracowały tu dwa młyny wodne i trzy wiatraki, a przy ulicy Płockiej stoją dwa magazyny — jeden z czwartej ćwierci XIX wieku, drugi, zbożowy, z 1911 roku; przy ulicy Słowackiego zachował się młyn z pierwszej ćwierci XX wieku. W 1902 roku działała w mieście fabryka organów Dominika Biernackiego, zatrudniająca osiemdziesiąt osób, a na przełomie XIX i XX wieku także octownia i cegielnia.",
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

  districtsHeading: "Do których części Dobrzynia nad Wisłą dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — jest rozłożyste jak na swoją wielkość, więc podaj proszę ulicę. Dojeżdżam też do wszystkich trzydziestu jeden miejscowości w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Dobrzyń nad Wisłą też przyjadę",
  nearbyParagraphs: [
    "Lipno, Skępe, Włocławek, Rypin i Płock są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lipno", "Skępe", "Włocławek", "Rypin"],

  about: blokOMnie("do Dobrzynia nad Wisłą", "w Dobrzyniu nad Wisłą", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dobrzynia nad Wisłą bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu jeden miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Dobrzyń nad Wisłą jest miastem w gminie miejsko-wiejskiej w powiecie lipnowskim — i to zupełnie inne miasto niż Golub-Dobrzyń, oddalony o jakieś dziewięćdziesiąt kilometrów.",
    },
    ...faqWspolne("w Dobrzyniu nad Wisłą"),
    {
      question: "Dlaczego ciasto raz wyrasta, a raz nie, choć robię to samo?",
      answer:
        "Najczęściej dlatego, że kuchnia ma inną temperaturę niż poprzednio. W chłodnym pomieszczeniu drożdże pracują wyraźnie wolniej, więc „godzina wyrastania” znaczy co innego w styczniu i co innego w lipcu. Ta sama przyczyna stoi za tym, że „miękkie masło” raz uciera się gładko, a raz masa się rozpływa — przy osiemnastu stopniach w pokoju to zupełnie inna rzecz niż przy dwudziestu sześciu.",
    },
    {
      question: "Czy Thermomix usuwa ten problem?",
      answer:
        "Częściowo i naprawdę zauważalnie. Urządzenie trzyma temperaturę wewnątrz swojego naczynia, więc masy, kremy i sosy wychodzą powtarzalnie niezależnie od dnia. Ale to, co dzieje się poza naczyniem — ciasto rosnące na blacie, masło czekające na ucieranie, polewa tężejąca na torcie — nadal dzieje się w temperaturze Twojej kuchni i tego nie kontroluje żadne urządzenie.",
    },
  ],

  geo: { lat: 52.6378, lng: 19.3214 },
};
