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
 * WOŁÓW — powiat wołowski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ (NIE MA odrębnej
 *   gminy wiejskiej Wołów — polskawliczbach wyświetla
 *   osobno listę „miasta" i „gminy", co może mylić).
 * MIASTO: 11 947 mieszkańców (GUS 31.12.2024), 18,5 km²,
 *   gęstość 644,4 os./km².
 * CAŁA GMINA: 21 380 osób, 331,1 km², 45 wsi.
 * ⚠⚠ NIE MIESZAM TYCH LICZB. TWARDA GRANICA.
 * ⚠⚠ MIASTO ZAJMUJE 5,6 % POWIERZCHNI GMINY, a mieszka
 *   w nim 55,9 % jej ludności; gęstość miasta jest
 *   9,9× wyższa niż gminy.
 *   ⚠⚠⚠ TEGO ZESTAWIENIA NIE UŻYWAM JAKO KĄTA —
 *   gęstość i przestrzeń to obszar zajęty WIELOKROTNIE
 *   (Koluszki, Tychowo, Cedynia, Nowe Warpno, Chojnów).
 *   Podaję jako fakt. TWARDA GRANICA.
 * ⚠ WYSOKOŚĆ: 96–169 m n.p.m. ⚠ GEO: 51,3364 / 16,644.
 * ⚠⚠ FAKT: WOŁÓW JEST SIEDZIBĄ POWIATU, ALE NIE JEST
 *   JEGO NAJWIĘKSZYM MIASTEM — Brzeg Dolny ma 12 476,
 *   Wołów 11 947. ⚠ PODAJĘ JAKO FAKT, nie robię kąta.
 *
 * ⚠⚠⚠ ODMIANA — PUŁAPKA REDAKCYJNA NAJWYŻSZEJ WAGI:
 *   D. WOŁOWA, Ms. W WOŁOWIE.
 *   ⚠⚠⚠ PRZYMIOTNIK „WOŁOWSKI" JEST IDENTYCZNY
 *   Z PRZYMIOTNIKIEM OD „WÓŁ" / „WOŁOWINA".
 *   ⚠⚠⚠ W TEKŚCIE O GOTOWANIU NIE UŻYWAM GO ANI RAZU —
 *   „kuchnia wołowska" czyta się jako „z wołowiny".
 *   PISZĘ „w Wołowie", „z Wołowa".
 *   ⚠ Wyjątek: „powiat wołowski" jako nazwa własna
 *   jednostki administracyjnej — dopuszczalne,
 *   ale używam oszczędnie.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ Źródło odmiany: eodmiany.pl — NIE SŁOWNIK PWN,
 *   ale forma regularna.
 *
 * ⚠⚠ HOMONIM: WOŁÓW ≠ WOŁOMIN (mazowieckie)
 *   ≠ WOŁOWICE (małopolskie).
 *   ⚠⚠⚠ W TEJ SAMEJ GMINIE LEŻY WIEŚ STARY WOŁÓW —
 *   prawdziwa pułapka adresowa.
 *   ⚠ Pary bliźniacze w gminie: KRZYDLINA MAŁA
 *   i KRZYDLINA WIELKA, USKORZ MAŁY i USKORZ WIELKI.
 *   ⚠ LUBIĄŻ ≠ LUBIN (miasto, 30 km) ≠ LUBIŃ
 *   (wielkopolskie, też z opactwem — kolizja pewna).
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1285 — prawa miejskie.
 * — ZAMEK: początek XII w. — Władysław II Wygnaniec
 *   nakazał budowę drewnianego zamku nad rzeką Juszką;
 *   murowany wzniesiony przez Henryka III głogowskiego
 *   pod koniec XIII w.
 *   ⚠⚠ ŹRÓDŁA PODAJĄ RÓŻNYCH FUNDATORÓW — to dwie fazy,
 *   nie sprzeczność. NIE ŁĄCZĘ ICH W JEDNYM ZDANIU.
 *   Budynek trzykondygnacyjny z wieżą o wysokości
 *   około 15 m; renesansowe sklepienia, piaskowcowy
 *   portal. Dziś mieści Starostwo Powiatowe.
 *   ⚠ FIGURY MARYJNEJ (1733 albo XVII w.) NIE PODAJĘ —
 *   źródła sprzeczne i wątek wyznaniowy.
 *   ⚠⚠ ZERO WĄTKU OBRONNEGO.
 * — RATUSZ: wzniesiony w II połowie XV w., budowa
 *   dwukondygnacyjna. ⚠ WYSOKOŚCI WIEŻY NIE USTALONO.
 * — MURY MIEJSKIE: I połowa XV w., wzmocnione basztami,
 *   z trzema bramami.
 *   ⚠⚠⚠ DŁUGOŚCI, GRUBOŚCI, WYSOKOŚCI I LICZBY BASZT
 *   NIE USTALONO — ANI JEDNEGO WYMIARU. NIE PODAJĘ.
 *   ⚠⚠ MURÓW I TAK NIE UŻYWAM JAKO KĄTA — obszar zajęty
 *   (Recz, Moryń, Resko, Strzegom z poprzedniej fali).
 * — ⚠⚠ KOŚCIOŁÓW NIE OPISUJĘ — wątek wyznaniowy.
 *   ⚠⚠ ORGANÓW CASPARINIEGO (1715–1717) I FESTIWALU
 *   ORGANOWEGO NIE UŻYWAM — wyposażenie kościelne.
 *   ⚠⚠ SKLEPIEŃ (1406–1408, przebudowane 1701–1711)
 *   NIE UŻYWAM JAKO KĄTA — „różne rzeczy mają różny
 *   cykl życia" ociera się o Chojnów (trwałość
 *   i powroty, poprzednia fala).
 *
 * ⚠⚠ OPACTWO W LUBIĄŻU — Lubiąż to WIEŚ W GMINIE WOŁÓW:
 *   fasada 223 m, około 300 pomieszczeń, ponad 600 okien,
 *   około 2,5 ha dachu (wszystko zgodne w trzech
 *   źródłach); Sala Książęca 400 m² i 13,4 m wysokości
 *   (jedno źródło). Cystersi sprowadzeni 1163
 *   przez Bolesława I Wysokiego; kościół ok. 1200;
 *   przebudowa barokowa od 1649; nowe obiekty 1681–1739.
 *   ⚠⚠⚠ SUPERLATYWÓW („największe opactwo cysterskie
 *   na świecie", „drugi obiekt sakralny w Europie",
 *   „trzykrotnie większe od Wawelu", „najdłuższa fasada
 *   w Europie") NIE CYTUJĘ — pochodzą z portali
 *   popularnych, nie z opracowań naukowych.
 *   PODAJĘ WYŁĄCZNIE LICZBY.
 *   ⚠⚠ OPACTWA NIE UŻYWAM JAKO KĄTA — morał „wielkość
 *   widoczna kontra używalna" jest zajęty (Nowe Warpno:
 *   pojemność kontra gabaryt). Podaję jako fakt.
 *   ⚠ ZAKONU I ŻYCIA KLASZTORNEGO NIE ROZWIJAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — POLDER TARCHALICE:
 *   POWIERZCHNIA 600 HA, POJEMNOŚĆ 12 MILIONÓW METRÓW
 *   SZEŚCIENNYCH WODY, WAŁ PONAD 6 KM, KOSZT PRAWIE
 *   45 MLN ZŁ.
 *   ⚠⚠ POLDER TO TEREN CELOWO UTRZYMYWANY JAKO WOLNY —
 *   po to, żeby było gdzie przyjąć wodę, kiedy przyjdzie.
 *   To jest cały kąt.
 *   ⚠⚠⚠ OPISUJĘ GO WYŁĄCZNIE JAKO BUDOWLĘ
 *   HYDROTECHNICZNĄ. ZERO POWODZI, ZERO KATASTROF,
 *   ZERO ZAGROŻENIA. TWARDA GRANICA BEZWZGLĘDNA.
 *   ⚠ 12 mln m³ na 600 ha daje średnio dwa metry słupa
 *   wody — TO MÓJ RACHUNEK, podaję opisowo albo pomijam.
 *
 * PRZYRODA — POZOSTAŁE FAKTY:
 * — Park Krajobrazowy Dolina Jezierzycy: 7 953 ha,
 *   w tym stawy 150 ha — około 24 % powierzchni gminy.
 * — Rezerwat Odrzyska: 5,15 ha.
 * — Uroczysko Wrzosy: ponad 400 gatunków roślin.
 * — Szlaki rowerowe: żółty 57 km i kilka krótszych.
 * — ⚠⚠ ZESTAWIENIA REZERWATU Z PARKIEM NIE UŻYWAM —
 *   „skala nie decyduje o dbałości" zajęte (Cedynia).
 * — ⚠ DRZEW POMNIKOWYCH Z OBWODAMI DLA GMINY WOŁÓW
 *   NIE USTALONO.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: gmina Wołów NIE MA
 *   ani jednego z 52 wpisów dolnośląskich.
 *   ⚠⚠⚠ NIE PISZĘ TEGO W TEKŚCIE. TEMAT NIE POJAWIA SIĘ.
 *   ⚠ „Ogórki konserwowe ścinawskie" pochodzą ze Ścinawy
 *   w powiecie lubińskim — NIE PRZYPISUJĘ ICH WOŁOWOWI.
 * ⚠ ODLEGŁOŚCI: Brzeg Dolny 9,3 km, Wińsko 13,4,
 *   Ścinawa 17,4, Oborniki Śląskie 17,6, Miękinia 19,5.
 *   ⚠ TO ODLEGŁOŚCI MIĘDZY SIEDZIBAMI GMIN.
 * ⚠ KOLEI: ROKU OTWARCIA NIE USTALONO — nie podaję.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: MIEJSCE, KTÓRE MA BYĆ PUSTE — o tym, że celowo
 * wolne miejsce nie jest marnotrawstwem, tylko
 * pojemnością na to, czego nie da się zaplanować.
 * Kąt od polderu w Tarchalicach: sześćset hektarów
 * utrzymywanych jako wolne, z wałem długim na ponad
 * sześć kilometrów, po to, żeby zmieścić dwanaście
 * milionów metrów sześciennych wody.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w Tarchalicach w gminie Wołów zbudowano polder
 *   o powierzchni 600 ha i pojemności dwunastu milionów
 *   metrów sześciennych, otoczony wałem długim
 *   na ponad sześć kilometrów, za blisko czterdzieści
 *   pięć milionów złotych,
 * — ŻE CAŁA JEGO FUNKCJA POLEGA NA TYM, ŻEBY BYŁ PUSTY
 *   — to jest rdzeń. Przez większość czasu nie robi nic
 *   i właśnie to jest w nim wartościowe,
 * — ⚠⚠ ŻE W KUCHNI NIE UMIEMY TAK MYŚLEĆ I TRAKTUJEMY
 *   WOLNE MIEJSCE JAK NIEWYKORZYSTANE. Pusta półka
 *   prosi się, żeby coś na niej postawić. Wolne miejsce
 *   w zamrażarce prosi się, żeby coś dokupić,
 * — ⚠⚠ ŻE SKUTEK JEST ZAWSZE TEN SAM: kiedy przychodzi
 *   coś nieplanowanego — większe zakupy, gar zupy,
 *   rzeczy przyniesione przez kogoś — nie ma tego gdzie
 *   położyć. I wtedy zaczyna się przekładanie,
 * — ⚠⚠ ŻE ROZWIĄZANIEM NIE JEST WIĘCEJ MIEJSCA, TYLKO
 *   UZNANIE, ŻE CZĘŚĆ MIEJSCA MA ZOSTAĆ PUSTA — jedna
 *   półka, jeden poziom w zamrażarce, jeden kawałek
 *   blatu. Nie „na razie wolne", tylko przeznaczone
 *   do tego, żeby było wolne,
 * — ⚠⚠ ŻE NAJTRUDNIEJSZE JEST TO, ŻE TAKA REZERWA
 *   WYGLĄDA NA MARNOTRAWSTWO DOKŁADNIE WTEDY, GDY
 *   DZIAŁA NAJLEPIEJ. Polder, który stoi pusty
 *   dwadzieścia lat, wygląda na wyrzucone
 *   czterdzieści pięć milionów,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: REZERWA MA GRANICE.
 *   Polder ma sześćset hektarów, nie sześć tysięcy —
 *   ktoś policzył, ile wystarczy. W małej kuchni pusta
 *   półka to realny koszt i nie każdy może sobie na nią
 *   pozwolić,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zajmuje miejsce
 *   i to jest uczciwy argument przeciwko niemu —
 *   szczególnie w małej kuchni. MÓWIĘ TO WPROST.
 *   Zmniejsza natomiast liczbę naczyń używanych
 *   jednocześnie, więc mniej blatu jest zajęte w trakcie
 *   pracy. To dwie różne rzeczy i warto policzyć obie
 *   osobno.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GĘSTOŚCI, PRZESTRZENI I STREFY ROBOCZEJ —
 *   obszar zajęty WIELOKROTNIE (Koluszki, Tychowo,
 *   Cedynia, Nowe Warpno, Chojnów).
 *   ⚠⚠ TO JEST NAJBLIŻSZY OBSZAR. Piszę o REZERWIE
 *   POJEMNOŚCI, nigdy o tym, jak urządzić kuchnię,
 *   gdzie co postawić i która strefa jest najważniejsza.
 *   Nie używam słów „strefa robocza" ani „ciąg".
 *   ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW I FUNKCJI MIEJSC —
 *   kąt zajęty (Tychowo). Nie przypisuję funkcji
 *   miejscom; piszę o jednym miejscu bez funkcji.
 * — ⚠⚠⚠ ZERO POD RĘKĄ CZY SCHOWANE — kąt zajęty (Płoty).
 * — ⚠⚠ ZERO PUNKTÓW WEJŚCIA I TEGO, CO WCHODZI DO DOMU —
 *   kąt zajęty (Moryń). ⚠ Wymieniam „rzeczy przyniesione
 *   przez kogoś" jednym półzdaniem jako przykład
 *   nieplanowanego, i nie rozwijam.
 * — ⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno). Nie piszę o naczyniach.
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów).
 * — ⚠⚠ ZERO CO DA SIĘ POLICZYĆ, A CZEGO NIE — kąt zajęty
 *   (Dobrzany). Nie piszę o inwentaryzacji zapasów.
 * — ⚠⚠ ZERO SKALI I DBAŁOŚCI — kąt zajęty (Cedynia).
 *   Zestawienia rezerwatu z parkiem NIE UŻYWAM.
 * — ⚠ ZERO STAREGO I NOWEGO OBOK SIEBIE — kąt zajęty
 *   (Brzeg Dolny, ta sama fala, sąsiednia gmina!).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO PODZIAŁU MIEJSCA — podaję
 *   WYŁĄCZNIE zasadę: jedna półka przeznaczona
 *   na to, żeby była pusta.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o zamrażarce i o zapasach NIE MÓWIĘ NIC
 *   o przechowywaniu, terminach ani mrożeniu.
 *   Piszę WYŁĄCZNIE o miejscu.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO POWODZI, PODTOPIEŃ I ZAGROŻENIA —
 *   polder opisuję jako budowlę o wymiarach i funkcji.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO I ZAKONNEGO — kościołów,
 *   organów, cystersów i życia klasztornego nie
 *   wprowadzam; opactwo w Lubiążu podaję jako budowlę
 *   z wymiarami.
 * — ⚠⚠ ZERO MURÓW I ZAMKU JAKO TEMATU OBRONNEGO.
 * — ⚠⚠ ZERO PRZYMIOTNIKA „WOŁOWSKI" W KONTEKŚCIE
 *   KUCHENNYM.
 * — ⚠ ZERO SUPERLATYWÓW O LUBIĄŻU.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ żadnych wymiarów murów miejskich —
 *   nie ustalono ani jednego.
 * — NIE PODAJĘ wysokości wieży ratusza.
 * — NIE PODAJĘ liczby głosów organów.
 * — NIE CYTUJĘ superlatywów o opactwie w Lubiążu —
 *   tylko liczby.
 * — NIE ŁĄCZĘ dwóch fundatorów zamku w jednym zdaniu —
 *   to dwie fazy budowy.
 * — NIE PODAJĘ daty figury maryjnej — źródła sprzeczne.
 * — NIE PODAJĘ roku otwarcia kolei.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE OPISUJĘ herbu.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika
 *   w kontekście kuchennym.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wołów leży w powiecie wołowskim, na wysokości
 *   od 96 do 169 m n.p.m.; miasto liczy 11 947
 *   mieszkańców (GUS, 31.12.2024) na 18,5 km², a cała
 *   gmina 21 380 osób na 331,1 km², z czterdziestoma
 *   pięcioma wsiami; jest siedzibą powiatu, choć
 *   największym miastem powiatu jest Brzeg Dolny,
 * — prawa miejskie miasto otrzymało w 1285 r.; zamek
 *   ma dwie fazy — drewniany wzniesiono na początku
 *   XII w. z rozkazu Władysława II Wygnańca, a murowany
 *   pod koniec XIII w. za Henryka III głogowskiego;
 *   budynek jest trzykondygnacyjny, z wieżą wysoką
 *   na około 15 m, zachowanymi renesansowymi sklepieniami
 *   i piaskowcowym portalem, a dziś mieści Starostwo
 *   Powiatowe. Ratusz wzniesiono w drugiej połowie
 *   XV w., a mury miejskie z basztami i trzema bramami
 *   pochodzą z pierwszej połowy tego stulecia,
 * — we wsi Lubiąż w gminie Wołów stoi opactwo
 *   pocysterskie: fasada ma 223 m długości, budynek
 *   około 300 pomieszczeń, ponad 600 okien i około
 *   2,5 ha dachu; cystersi przybyli tu w 1163 r.
 *   na zaproszenie Bolesława I Wysokiego, kościół
 *   pochodzi z około 1200 r., przebudowę barokową
 *   rozpoczęto w 1649 r., a kolejne obiekty wznoszono
 *   w latach 1681–1739,
 * — Park Krajobrazowy Dolina Jezierzycy obejmuje
 *   7 953 ha, w tym 150 ha stawów — około jednej
 *   czwartej powierzchni gminy; rezerwat Odrzyska ma
 *   5,15 ha, a w uroczysku Wrzosy rośnie ponad
 *   czterysta gatunków roślin. Przez gminę prowadzi
 *   żółty szlak rowerowy o długości 57 km,
 * — w Tarchalicach zbudowano polder zalewowy
 *   o powierzchni 600 ha i pojemności dwunastu milionów
 *   metrów sześciennych, otoczony wałem o długości
 *   ponad sześciu kilometrów; kosztował blisko
 *   czterdzieści pięć milionów złotych.
 */
export const WOLOW: CityContent = {
  slug: "wolow",
  h1: "Thermomix Wołów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wołów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Wołowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wołów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wołowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wołowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czterdziestu pięciu wsi w gminie.",

  highlights: highlightyStandardowe("Wołów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sześćset hektarów, których cała funkcja polega na tym, żeby były puste.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wołowie – jak wygląda prezentacja?",
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
      id: "miejsce-ktore-ma-byc-puste",
      heading: "Sześćset hektarów, które mają stać puste",
      paragraphs: [
        "W Tarchalicach w gminie Wołów zbudowano polder: sześćset hektarów terenu, wał długi na ponad sześć kilometrów, pojemność dwunastu milionów metrów sześciennych. Kosztowało to blisko czterdzieści pięć milionów złotych.",
        "I cała jego funkcja polega na tym, żeby był pusty.",
        "Przez większość czasu ten polder nie robi nic. Nie produkuje, nie obsługuje, nie przynosi. Po prostu jest wolny — i właśnie to jest w nim warte czterdziestu pięciu milionów, bo pojemność, której nie ma, kiedy jest potrzebna, jest warta zero.",
        "W kuchni nie umiemy tak myśleć i chyba nikt nas tego nie uczył.",
        "Wolne miejsce traktujemy jak niewykorzystane. Pusta półka prosi się, żeby coś na niej postawić. Wolny poziom w zamrażarce prosi się, żeby coś dokupić. Kawałek pustego blatu jest niedokończony, więc coś tam ląduje — i zostaje.",
        "Skutek jest zawsze ten sam i wszyscy go znamy.",
        "Kiedy przychodzi coś nieplanowanego — większe zakupy, gar zupy, który trzeba gdzieś odstawić, rzeczy przyniesione przez kogoś — nie ma tego gdzie położyć. I wtedy zaczyna się przekładanie: wyjmowanie, przestawianie, szukanie miejsca kosztem czegoś innego. Przez piętnaście minut cała kuchnia zajmuje się sama sobą.",
        "Rozwiązaniem nie jest więcej miejsca, bo miejsca zawsze będzie tyle, ile jest. Rozwiązaniem jest uznanie, że część miejsca ma zostać pusta.",
        "Jedna półka. Jeden poziom w zamrażarce. Jeden kawałek blatu. Nie „na razie wolne”, bo to znaczy „do zapełnienia przy najbliższej okazji” — tylko przeznaczone do tego, żeby było wolne. To jedyna różnica, ale to ona decyduje.",
        "Najtrudniejsze jest przy tym coś, czego nie da się obejść: taka rezerwa wygląda na marnotrawstwo dokładnie wtedy, kiedy działa najlepiej. Polder, który stoi pusty przez dwadzieścia lat, wygląda jak wyrzucone czterdzieści pięć milionów. Pusta półka, na którą przez miesiąc nic nie trafiło, wygląda jak zmarnowana półka.",
        "Uczciwie o drugiej stronie: rezerwa ma granice i ktoś je policzył. Polder ma sześćset hektarów, nie sześć tysięcy. W małej kuchni pusta półka to realny koszt i nie każdy może sobie na nią pozwolić — wtedy rezerwą bywa pół półki albo jedna szuflada, i to też jest w porządku.",
        "Na koniec o urządzeniu, i tu muszę powiedzieć rzecz, która działa przeciwko mnie.",
        "Thermomix zajmuje miejsce. W małej kuchni to jest uczciwy argument przeciwko niemu i nie zamierzam go omijać. Zmniejsza natomiast liczbę naczyń używanych jednocześnie, więc w trakcie gotowania mniej blatu jest zajęte. To są dwie różne rzeczy i warto policzyć je osobno — miejsce stałe i miejsce w trakcie pracy.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wołowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu na stałe — nie po posprzątaniu, tylko na co dzień. To najważniejsza liczba przed takim zakupem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wołowie"),
    sekcjaRaty("w Wołowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Wołowa",
      paragraphs: [
        "Wołów leży w powiecie wołowskim, na wysokości od dziewięćdziesięciu sześciu do stu sześćdziesięciu dziewięciu metrów nad poziomem morza. Samo miasto liczy blisko dwanaście tysięcy mieszkańców (GUS, 31.12.2024) na osiemnastu i pół kilometra kwadratowego, a cała gmina ponad dwadzieścia jeden tysięcy osób na trzystu trzydziestu jeden, z czterdziestoma pięcioma wsiami; miasto jest siedzibą powiatu, choć największym miastem powiatu jest Brzeg Dolny. Prawa miejskie Wołów otrzymał w 1285 roku. Zamek ma dwie fazy: drewniany wzniesiono na początku dwunastego wieku z rozkazu Władysława II Wygnańca, a murowany pod koniec trzynastego, za Henryka III głogowskiego — budynek jest trzykondygnacyjny, z wieżą wysoką na około piętnaście metrów, zachowanymi renesansowymi sklepieniami i piaskowcowym portalem, a dziś mieści Starostwo Powiatowe. Ratusz wzniesiono w drugiej połowie piętnastego wieku, a mury miejskie z basztami i trzema bramami pochodzą z pierwszej połowy tego stulecia. We wsi Lubiąż stoi opactwo pocysterskie: fasada ma dwieście dwadzieścia trzy metry długości, budynek około trzystu pomieszczeń, ponad sześćset okien i mniej więcej dwa i pół hektara dachu; cystersi przybyli tu w 1163 roku, kościół pochodzi z około 1200, a przebudowę barokową rozpoczęto w 1649. Park Krajobrazowy Dolina Jezierzycy obejmuje niecałe osiem tysięcy hektarów — mniej więcej jedną czwartą gminy — a w uroczysku Wrzosy rośnie ponad czterysta gatunków roślin.",
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

  districtsHeading: "Do których części Wołowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu pięciu wsi w gminie — a gmina jest duża, ponad trzysta trzydzieści kilometrów kwadratowych. Do Lubiąża, Tarchalic i najdalszych miejscowości też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Wołów też przyjadę",
  nearbyParagraphs: [
    "Brzeg Dolny jest około dziewięciu kilometrów stąd, Wińsko trzynaście, Ścinawa i Oborniki Śląskie po siedemnaście. Do Wrocławia też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Brzeg Dolny", "Ścinawa", "Oborniki Śląskie", "Środa Śląska", "Wrocław"],

  about: blokOMnie("do Wołowa", "w Wołowie", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wołowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu pięciu wsi w gminie, łącznie z Lubiążem i Tarchalicami. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu warto podać pełną nazwę miejscowości: w tej samej gminie leży wieś Stary Wołów, a także pary Krzydlina Mała i Krzydlina Wielka oraz Uskorz Mały i Uskorz Wielki. Chodzi o Wołów na Dolnym Śląsku, nie o Wołomin.",
    },
    ...faqWspolne("w Wołowie"),
    {
      question: "Ciągle brakuje mi miejsca w kuchni — co z tym zrobić?",
      answer:
        "Najczęściej nie brakuje miejsca, tylko rezerwy. W Tarchalicach zbudowano polder o powierzchni sześciuset hektarów, którego cała funkcja polega na tym, żeby był pusty — bo pojemność, której nie ma, kiedy jest potrzebna, jest warta zero. W kuchni działa to tak samo: warto mieć jedną półkę albo jeden kawałek blatu przeznaczony do tego, żeby był wolny. Nie „na razie wolny”, bo to znaczy „do zapełnienia”.",
    },
    {
      question: "Czy Thermomix zajmuje dużo miejsca na blacie?",
      answer:
        "Zajmuje stałe miejsce i w małej kuchni jest to uczciwy argument przeciwko niemu — nie będę tego omijać. Zmniejsza natomiast liczbę naczyń używanych jednocześnie, więc w trakcie gotowania mniej blatu jest zajęte. To dwie różne rzeczy: miejsce stałe i miejsce w trakcie pracy. Warto policzyć obie osobno, a najlepiej zobaczyć urządzenie na własnym blacie.",
    },
  ],

  geo: { lat: 51.3364, lng: 16.644 },
};
