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
 * PIEŃSK — powiat zgorzelecki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 5 430 mieszkańców (GUS 31.12.2024), 9,9 km²
 *   (dokładnie 9,92), gęstość 547,4 os./km².
 * CAŁA GMINA: 8 683 osoby, 109,7 km², gęstość 79 os./km².
 *   ⚠ OBIE GĘSTOŚCI DOMYKAJĄ SIĘ: 5 430 / 9,92 = 547,4;
 *   8 683 / 109,7 = 79,2. ⚠⚠ TO JEDYNA GMINA
 *   MIEJSKO-WIEJSKA TEJ FALI BEZ ROZBIEŻNOŚCI —
 *   PODAJĘ OBIE.
 *   ⚠ JEDENAŚCIE WSI w wykazie GUS: Bielawa Dolna,
 *   Bielawa Górna, Dłużyna Dolna, Dłużyna Górna, Lasów,
 *   Prędocice, Sośniak, Stojanów, Strzelno, Żarka nad
 *   Nysą, Żarki Średnie.
 *   ⚠⚠ PISZĘ „wykaz GUS wymienia jedenaście wsi",
 *   NIE „jedenaście sołectw" — liczba sołectw [NP].
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ PROPORCJI „9 % powierzchni, 62,5 % ludności"
 *   NIE ROBIĘ KĄTEM — ta sama figura wypada w Głuszycy
 *   i Lubawce W TEJ SAMEJ FALI. PODAJĘ SUROWE LICZBY.
 * ⚠ Zachodnia granica gminy to Nysa Łużycka — granica
 *   państwowa. ⚠⚠ DŁUGOŚCI ODCINKA NIE PODAJĘ [NP].
 *   ⚠⚠ WĄTKU GRANICZNEGO NIE ROZWIJAM.
 * ⚠ GEO: 51,247222 / 15,046667 [ZW do sekundy — jedyne
 *   miasto tej fali ze współrzędnymi tej dokładności].
 *
 * ⚠⚠ ODMIANA — TYP MĘSKI JAK GDAŃSK/SŁUPSK:
 *   D. do Pieńska · Ms. w PIEŃSKU · B. Pieńsk ·
 *   N. Pieńskiem.
 *   ⚠⚠⚠ BŁĘDY: „w Pieńscu", „w Pieńsce".
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: PIEŃSKI [ZW].
 *   ⚠ KOLIZJA Z „PIEŃ": przymiotnik da się odczytać jako
 *   utworzony od pnia. ⚠⚠ Zbieżność JEST etymologicznie
 *   uzasadniona (nazwę wiąże się ze słowiańskim „pień"),
 *   więc jej NIE UKRYWAM — ale i nie robię z niej żartu.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — PIEŃSKO — wieś w woj. lubuskim. RÓŻNICA JEDNEJ
 *     LITERY. GŁÓWNA KOLIZJA.
 *   — PIEŃKI — bardzo liczna nazwa wsi w Polsce.
 *   — PIENIĘŻNO — miasto w warmińsko-mazurskiem.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠⚠⚠ NIE TWIERDZĘ, że nazwa pochodzi od „pieńki"
 *   (dawnego określenia włókna konopnego) — TO [NP]
 *   i kusząca, ale niepotwierdzona zbieżność.
 *   ⚠ WSIE W GMINIE KOLIDUJĄ Z INNYMI MIASTAMI:
 *   Bielawa Dolna/Górna z miastem BIELAWA (powiat
 *   dzierżoniowski — sąsiedztwo Piławy Górnej Z TEJ SAMEJ
 *   FALI), Żarka nad Nysą i Żarki Średnie z ŻARAMI
 *   (lubuskie) i ŻARKAMI (śląskie). OSTRZEGAM W SEKCJI
 *   O DZIELNICACH.
 *
 * ⚠⚠⚠ DATY USTROJOWE — NAJWIĘKSZA PUŁAPKA TEJ FALI:
 *   — WERSJA A: „najstarsza wzmianka z 965 r."
 *     — powtarzana przez trzy źródła, ale wszystkie
 *     wtórne wobec jednego opracowania gminnego,
 *   — WERSJA B: pierwsze ZAPISY NAZWY pochodzą
 *     z konkretnych dokumentów: „Penzig" (1241),
 *     „Penzik" (1268), „Pancek" (1350).
 *   ⚠⚠⚠ TE DWIE INFORMACJE STOJĄ W TYM SAMYM TEKŚCIE
 *   I SOBIE PRZECZĄ. Rok 965 nie jest wsparty ŻADNĄ
 *   formą nazwy.
 *   ⚠⚠⚠ PODAJĘ OBIE, JAWNIE, Z ZAZNACZENIEM RÓŻNICY.
 *   NIE WYBIERAM JEDNEJ I NIE ROBIĘ Z TEGO KĄTA —
 *   „data, której nie da się rozstrzygnąć" byłaby
 *   drugim kątem w jednym tekście.
 *   — PRAWA MIEJSKIE: 7 LIPCA 1962 r. [ZW, data dzienna].
 *   ⚠⚠ GŁUSZYCA DOSTAŁA PRAWA TEGO SAMEGO DNIA.
 *   ⚠⚠⚠ TEGO FAKTU NIE WYKORZYSTUJĘ W ŻADNYM Z DWÓCH
 *   TEKSTÓW — byłby to ten sam smaczek dwa razy.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — KOLEJNOŚĆ, NIE SZKŁO:
 *   — 1830 — doprowadzenie DRÓG JEZDNYCH do osady,
 *   — 1847 — POŁĄCZENIE KOLEJOWE (Węgliniec – Pieńsk),
 *   — 1858 — DOPIERO WTEDY pierwsza huta szkła,
 *   — 1860 — trzy kolejne (dwa lata później).
 *   ⚠⚠⚠ PRZEMYSŁ NIE PRZYCIĄGNĄŁ KOLEI. KOLEJ BYŁA
 *   PIERWSZA, I TO O JEDENAŚCIE LAT. Przez jedenaście
 *   lat jeździły tędy pociągi, zanim pojawiło się
 *   cokolwiek, co można było nimi wozić. Potem, w dwa
 *   lata, liczba zakładów wzrosła z jednego do czterech.
 *   To jest cały kąt.
 *   ⚠⚠⚠ SZKŁO JEST TU WYŁĄCZNIE TREŚCIĄ DATY, NIE TEMATEM.
 *   Szklarska Poręba ma kąt oparty na spisie zawodów przy
 *   szkle. ⚠⚠⚠ DLATEGO: ZERO ARYTMETYKI HUTNICZEJ
 *   (żadnych pieców, żadnego zatrudnienia, żadnego
 *   przelicznika „osoby na piec"), ZERO OPISU ASORTYMENTU,
 *   ZERO ROZGAŁĘZIANIA BRANŻY. Piszę „huta szkła"
 *   i idę dalej.
 *   ⚠⚠ NIE TWIERDZĘ, że kolej spowodowała powstanie hut —
 *   twierdzę WYŁĄCZNIE, że była wcześniej.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ZAMEK: wybudowany 1250 r., koniec funkcjonowania
 *   1514 r. — 264 LATA. Dziś nie występuje w wykazie
 *   zabytków miasta [SP — jedno źródło].
 *   ⚠⚠ „NAJSZYBCIEJ ZNIKA TO, CZEGO JEST PO JEDNYM" —
 *   kąt zajęty (Lwówek Śląski). PODAJĘ JAKO FAKT,
 *   BEZ MORAŁU.
 * — 1491 — Hans von Penzig sprzedaje Pieńsk miastu
 *   Görlitz [SP — jedno źródło]. Ród, który dał nazwę,
 *   sprzedał miejscowość.
 *   ⚠⚠ „MOMENT PRZEKAZANIA" — kąt zajęty (Żmigród).
 *   PODAJĘ JAKO FAKT, BEZ MORAŁU.
 * — NAZWY WSI CHODZĄ PARAMI: Bielawa Dolna i Górna,
 *   Dłużyna Dolna i Górna, Żarka nad Nysą i Żarki Średnie
 *   — sześć z jedenastu. ⚠⚠ PODAJĘ JAKO OSTRZEŻENIE
 *   PRAKTYCZNE PRZY UMAWIANIU, NIE JAKO KĄT.
 * — ⚠⚠⚠ KOŚCIOŁA NIE OPISUJĘ: dwa źródła podają początek
 *   budowy jako 1882 albo 1822 — RÓŻNICA 60 LAT.
 *   Do tego wątek wyznaniowy. PODWÓJNY POWÓD.
 * — ⚠⚠ ZESPOŁU DAWNEJ HUTY (1900–1930) NIE OPISUJĘ —
 *   prowadzi z powrotem w wątek szklarski.
 * — ⚠ POŻARU Z 1841 R. NIE WYMIENIAM.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO DLA ŻADNEGO
 *   KIERUNKU. ANI JEDNEJ LICZBY KILOMETRÓW.
 *
 * KĄT: NAJPIERW DROGA, POTEM RUCH
 * — o tym, że przestawienie wyprzedza zwyczaj, a nie
 * odwrotnie. Kąt od pieńskich dat: drogi w 1830, kolej
 * w 1847, pierwsza huta dopiero w 1858. Tor był o jedenaście
 * lat wcześniejszy niż cokolwiek, co dało się nim wozić.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że drogi jezdne doprowadzono tu w 1830 r., kolej
 *   w 1847, a pierwszą hutę uruchomiono w 1858,
 * — ŻE PRZEZ JEDENAŚCIE LAT JEŹDZIŁY TĘDY POCIĄGI, ZANIM
 *   POJAWIŁO SIĘ COKOLWIEK, CO MOŻNA BYŁO NIMI WOZIĆ —
 *   a potem w dwa lata zakładów było cztery zamiast
 *   jednego. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI PRÓBUJEMY ODWROTNEJ KOLEJNOŚCI: „zacznę
 *   gotować częściej, a jak zacznę, to sobie przestawię
 *   szafki". I to nigdy nie działa,
 * — ⚠⚠ ŻE ZWYCZAJ IDZIE ZA UKŁADEM, NIE ZA POSTANOWIENIEM
 *   — sięgasz po to, co masz pod ręką, a nie po to,
 *   co postanowiłaś,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ROBI SIĘ GO ZANIM COKOLWIEK
 *   SIĘ ZMIENI: przestaw układ pod czynność, której
 *   jeszcze nie wykonujesz. Przenieś to, czego chcesz
 *   używać, na wysokość ręki, zanim zaczniesz tego używać,
 * — ⚠⚠ ŻE NAJPIERW WYGLĄDA TO NA MARNOWANIE MIEJSCA,
 *   dokładnie jak pusty tor. To jest normalna część
 *   procesu, nie dowód pomyłki,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie każdy pusty tor
 *   się zapełnia. Czasem przestawienie okazuje się
 *   nietrafione i trzeba je cofnąć — dlatego robi się
 *   je na jednej półce, a nie w całej kuchni naraz,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to jest też odpowiedź
 *   na pytanie, czy urządzenie „zmusi" do gotowania.
 *   MÓWIĘ WPROST, że nie zmusi — może natomiast zmienić
 *   układ, bo stoi gotowe, i to jest cała jego przewaga
 *   w tej sprawie. Żadnej magii.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka, TA SAMA FALA). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tamten tekst mówi,
 *   CO MA STAĆ GOTOWE; ten mówi, W JAKIEJ KOLEJNOŚCI —
 *   że przestawienie idzie PRZED zmianą zwyczaju.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE W TEKŚCIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice, ta sama fala). ⚠⚠ Tamten tekst
 *   mówi o SPRAWDZANIU PO CZASIE; ten o KOLEJNOŚCI
 *   NA POCZĄTKU. NIE MÓWIĘ ANI SŁOWA o terminach
 *   i sprawdzaniu.
 * — ⚠⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT I ZERO
 *   ARYTMETYKI HUTNICZEJ — kąt zajęty (Szklarska Poręba).
 * — ⚠⚠ ZERO MOMENTU PRZEKAZANIA — kąt zajęty (Żmigród).
 * — ⚠⚠ ZERO ZAPASOWE POWINNO BYĆ INNE — kąt zajęty
 *   (Chocianów).
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS — kąt zajęty (Stopnica).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO PLANU URZĄDZANIA KUCHNI — podaję
 *   WYŁĄCZNIE zasadę: układ przed zwyczajem, jedna półka
 *   naraz.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, ODBUDOWY POWOJENNEJ, PRZESIEDLEŃ.
 *   Nazwa „Penzig" pojawia się WYŁĄCZNIE jako zapis
 *   źródłowy z 1241 r., obok „Penzik" i „Pancek".
 * — ⚠⚠ ZERO WĄTKU GRANICZNEGO I NARODOWOŚCIOWEGO.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU (1841).
 * — ⚠ ZERO UPADKU PRZEMYSŁU, BEZROBOCIA I DEMOGRAFII
 *   WSPÓŁCZESNEJ.
 * — ⚠ ZERO HERBU — mimo znanej daty zatwierdzenia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE WYBIERAM jednej daty pierwszej wzmianki —
 *   podaję obie wersje i różnicę między nimi.
 * — NIE TWIERDZĘ, że kolej spowodowała powstanie hut.
 * — NIE PODAJĘ żadnej liczby pieców ani zatrudnionych.
 * — NIE OPISUJĘ asortymentu hut.
 * — NIE PODAJĘ dat budowy kościoła.
 * — NIE TWIERDZĘ, że nazwa miasta pochodzi od włókna
 *   konopnego.
 * — NIE PODAJĘ długości granicznego odcinka Nysy.
 * — NIE PODAJĘ liczby sołectw jako urzędowej.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pieńsk leży w powiecie zgorzeleckim; miasto liczy
 *   5 430 mieszkańców (GUS, 31.12.2024) na 9,9 km²,
 *   czyli 547 osób na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 8 683 osoby na 109,7 km², czyli
 *   79 osób na kilometr; wykaz GUS wymienia w niej
 *   jedenaście wsi, a zachodnią granicą gminy jest Nysa
 *   Łużycka,
 * — najstarszą wzmiankę datuje się niekiedy na 965 r., ale
 *   pierwsze zapisy nazwy pochodzą z dokumentów
 *   późniejszych: „Penzig" z 1241 r., „Penzik" z 1268
 *   i „Pancek" z 1350; prawa miejskie nadano 7 lipca
 *   1962 r.,
 * — zamek zbudowano w 1250 r., a jego funkcjonowanie
 *   skończyło się w 1514 — po 264 latach; w wykazie
 *   zabytków miasta dziś nie występuje,
 * — w 1491 r. Hans von Penzig sprzedał Pieńsk miastu
 *   Görlitz,
 * — drogi jezdne doprowadzono w 1830 r., połączenie
 *   kolejowe z Węglińcem w 1847, pierwszą hutę szkła
 *   uruchomiono w 1858, a w 1860 powstały trzy kolejne.
 */
export const PIENSK: CityContent = {
  slug: "piensk",
  h1: "Thermomix Pieńsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pieńsk — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Pieńsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pieńsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pieńsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pieńska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich jedenastu wsi w gminie.",

  highlights: highlightyStandardowe("Pieńsk"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jedenaście lat pustego toru. Potem dwa lata i cztery zakłady.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pieńsku – jak wygląda prezentacja?",
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
      id: "najpierw-droga-potem-ruch",
      heading: "Najpierw droga, potem ruch",
      paragraphs: [
        "Drogi jezdne doprowadzono do Pieńska w 1830 roku. Połączenie kolejowe z Węglińcem — w 1847. Pierwszą hutę szkła uruchomiono w 1858.",
        "Jedenaście lat. Przez jedenaście lat jeździły tędy pociągi, zanim pojawiło się tu cokolwiek, co można było nimi wozić.",
        "A potem, w 1860 roku, zakładów było już cztery. Dwa lata od pierwszego do czwartego.",
        "Nie twierdzę, że to kolej sprawiła, że powstały — nie wiem tego i nikt tego nie zapisał. Twierdzę tylko tyle, ile widać w datach: tor był pierwszy.",
        "W kuchni próbujemy odwrotnej kolejności i dziwimy się, że nie wychodzi.",
        "„Zacznę gotować częściej, a jak już zacznę, to sobie przestawię szafki.” „Najpierw wejdę w rytm, potem coś zmienię.” To nigdy nie działa, bo zwyczaj idzie za układem, a nie za postanowieniem. Sięgasz po to, co masz pod ręką — nie po to, co sobie obiecałaś.",
        "Ruch jest jeden i robi się go, zanim cokolwiek się zmieni. Przestaw układ pod czynność, której jeszcze nie wykonujesz. Przenieś na wysokość ręki to, czego chcesz używać, zanim zaczniesz tego używać.",
        "Przez pierwsze tygodnie będzie to wyglądało na marnowanie miejsca. Dokładnie jak pusty tor. To jest zwyczajna część tej kolejności, a nie dowód, że się pomyliłaś.",
        "Dopowiem, bo to leży blisko: nie chodzi tu o to, co ma stać gotowe na blacie. To osobne pytanie. Tu chodzi wyłącznie o kolejność — że przestawienie idzie przed zmianą zwyczaju, a nie po niej.",
        "Uczciwie o drugiej stronie: nie każdy pusty tor się zapełnia. Czasem przestawienie okazuje się nietrafione i trzeba je cofnąć. Dlatego robi się je na jednej półce, a nie w całej kuchni naraz — cofnięcie jednej półki kosztuje kwadrans, cofnięcie całej kuchni kosztuje weekend i dobry humor.",
        "I uczciwie o sprzęcie, bo to jest w gruncie rzeczy odpowiedź na pytanie, czy Thermomix „zmusi” do gotowania. Nie zmusi. Żadne urządzenie nie zmusza. Może natomiast zmienić układ — stoi gotowe, na wysokości ręki, bez wyjmowania. To cała jego przewaga w tej konkretnej sprawie i nie ma w tym nic magicznego.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pieńsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy mieszkasz w samym Pieńsku, czy w którejś ze wsi — nazwy w tej gminie chodzą parami i łatwo o nieporozumienie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pieńsku"),
    sekcjaRaty("w Pieńsku"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Pieńska",
      paragraphs: [
        "Pieńsk leży w powiecie zgorzeleckim. Samo miasto liczy 5 430 mieszkańców (GUS, 31.12.2024) na niecałych dziesięciu kilometrach kwadratowych, czyli pięćset czterdzieści siedem osób na kilometr, a cała gmina miejsko-wiejska 8 683 osoby na stu dziesięciu — siedemdziesiąt dziewięć osób na kilometr. Obie te gęstości podaję, bo obie zgadzają się z arytmetyką, co w tej okolicy nie jest regułą. Wykaz GUS wymienia w gminie jedenaście wsi, a zachodnią granicą gminy jest Nysa Łużycka. Z datami początku bywa kłopot i wolę powiedzieć to wprost: najstarszą wzmiankę datuje się niekiedy na 965 rok, ale pierwsze zapisy samej nazwy pochodzą z późniejszych dokumentów — „Penzig” z 1241 roku, „Penzik” z 1268 i „Pancek” z 1350. Różnica sięga blisko trzystu lat i nie jest rozstrzygnięta, więc podaję obie wersje. Prawa miejskie nadano 7 lipca 1962 roku. Zamek zbudowano w 1250 roku, a jego funkcjonowanie skończyło się w 1514 — po dwustu sześćdziesięciu czterech latach; w dzisiejszym wykazie zabytków miasta nie występuje. W 1491 roku Hans von Penzig sprzedał Pieńsk miastu Görlitz. Drogi jezdne doprowadzono tu w 1830 roku, połączenie kolejowe z Węglińcem w 1847, pierwszą hutę szkła uruchomiono w 1858, a w 1860 powstały trzy kolejne.",
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

  districtsHeading: "Do których części Pieńska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich jedenastu wsi w gminie: Bielawy Dolnej i Górnej, Dłużyny Dolnej i Górnej, Lasowa, Prędocic, Sośniaka, Stojanowa, Strzelna, Żarki nad Nysą i Żarek Średnich. Wszędzie bez dopłaty.",
    "Warto podać pełną nazwę, bo sześć z jedenastu wsi chodzi tu parami: są dwie Bielawy, dwie Dłużyny i dwie miejscowości na „Żark-”. Do tego Bielawa bez członu to osobne miasto w powiecie dzierżoniowskim, a Żary i Żarki leżą w zupełnie innych województwach.",
  ],
  districts: [],

  nearbyHeading: "Poza Pieńsk też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Zgorzelca, Bolesławca, Lubania, Węglińca i Nowogrodźca — wszędzie bezpłatnie, tak samo jak w samym Pieńsku.",
  ],
  nearbyTowns: ["Zgorzelec", "Bolesławiec", "Lubań", "Węgliniec", "Nowogrodziec"],

  about: blokOMnie("do Pieńska", "w Pieńsku i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pieńska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich jedenastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: mówi się „w Pieńsku”, a nie „w Pieńscu” — tak jak „w Gdańsku”. I uwaga na podobne nazwy: Pieńsko to wieś w województwie lubuskim, różniąca się jedną literą, a Pieniężno to miasto w warmińsko-mazurskiem. Przy umawianiu warto też podać pełną nazwę wsi, bo w gminie są dwie Bielawy i dwie Dłużyny.",
    },
    ...faqWspolne("w Pieńsku"),
    {
      question: "Postanawiam gotować częściej i za każdym razem to się rozmywa. Co robię źle?",
      answer:
        "Prawdopodobnie odwracasz kolejność. Do Pieńska drogi doprowadzono w 1830 roku, kolej w 1847, a pierwszą hutę uruchomiono dopiero w 1858 — tor był o jedenaście lat wcześniejszy niż cokolwiek, co dało się nim wozić. Zwyczaj idzie za układem, nie za postanowieniem: sięgasz po to, co masz pod ręką. Przestaw jedną półkę pod czynność, której jeszcze nie wykonujesz, i pogódź się z tym, że przez kilka tygodni będzie to wyglądało na marnowanie miejsca. Jedną półkę, nie całą kuchnię — cofnięcie jednej kosztuje kwadrans.",
    },
    {
      question: "Czy Thermomix zmusi mnie do gotowania?",
      answer:
        "Nie i nikt uczciwy tego nie obieca. Żadne urządzenie nie zmusza. To, co realnie robi, jest prostsze: zmienia układ kuchni, bo stoi gotowe na blacie, na wysokości ręki, bez wyjmowania i składania. Jeśli u Was problemem jest brak pomysłu albo brak czasu, to pomoże; jeśli problemem jest to, że nie chcecie gotować — nie pomoże i lepiej wiedzieć to przed zakupem. Na prezentacji widać, która z tych sytuacji jest Wasza.",
    },
  ],

  geo: { lat: 51.2472, lng: 15.0467 },
};
