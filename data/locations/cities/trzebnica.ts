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
 * TRZEBNICA — powiat trzebnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ (gmina ZAWIERA
 *   miasto).
 * MIASTO: 13 583 mieszkańców (GUS 31.12.2024), 10,6 km²,
 *   gęstość 1 280,2 os./km².
 * CAŁA GMINA: 25 068 osób, 200,0 km², 48 sołectw.
 * ⚠⚠ RÓŻNICA: 11 485 osób mieszka poza miastem —
 *   prawie tyle samo, co w mieście. MIASTO TO ZALEDWIE
 *   54 % LUDNOŚCI GMINY. NIE MIESZAM TYCH LICZB.
 * ⚠ GEO: 51,3103 / 17,0622.
 *
 * ⚠⚠ HOMONIM: TRZEBNICA ≠ TRZEBINIA (małopolskie) —
 *   najsilniejsza pułapka, podobne brzmienie i skala.
 *   ≠ TRZEBIATÓW (zachodniopomorskie, JUŻ OPISANY
 *   W TYM SERWISIE) ≠ wieś TRZEBNICE (dolnośląskie,
 *   liczba mnoga!) ≠ TRZEBIEŻ ≠ TRZEBIEŃ.
 *   ROZGRANICZAM W FAQ.
 *
 * ⚠ ODMIANA: „w TRZEBNICY", „do TRZEBNICY".
 *   PRZYMIOTNIK: TRZEBNICKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   piszę „dla rodziny z Trzebnicy".
 *
 * ⚠⚠⚠ ETYKA — TEMAT DOMINUJĄCY, POMIJANY JAKO TEMAT:
 *   TRZEBNICA JEST W WYNIKACH WYSZUKIWANIA PRZEDE
 *   WSZYSTKIM MIASTEM KULTU ŚW. JADWIGI I SANKTUARIUM.
 *   ⚠⚠⚠ NIE UŻYWAM TEGO WĄTKU. Sama bazylika jako
 *   budowla z datą i wymiarami jest dopuszczalna
 *   i wymieniam ją skrótowo w sekcji rodzinnej.
 *   ⚠⚠ ZERO KULTU, ZERO SANKTUARIUM, ZERO PIELGRZYMEK,
 *   ZERO CYSTEREK JAKO ZAKONU. TWARDA GRANICA.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — STANOWISKO „TRZEBNICA 2":
 *   BLISKO 1 500 KAMIENNYCH ARTEFAKTÓW Z POZIOMU
 *   SPRZED OKOŁO 500 000 LAT i około 210 z poziomu
 *   sprzed około 350 000 lat.
 *   ⚠⚠ NAJSTARSZE ZNANE NA ZIEMIACH POLSKICH ŚLADY
 *   BYTOWANIA CZŁOWIEKA PIERWOTNEGO.
 *   ⚠ Odkryte w 1988 r.; wykopaliska 1988–1994
 *   (sześć sezonów). Poziom górny leży około metra
 *   wyżej od dolnego. Warstwa lessowa 1,9–5,7 m.
 *   Ściana wyrobiska: długość około 50 m, wysokość
 *   przeciętnie 6 m. Badania pod kierunkiem
 *   prof. J. M. Burdukiewicza (Uniwersytet Wrocławski).
 *   Artefakty w Trzebnickim Muzeum Regionalnym.
 *   Lokalizacja: u podnóża Winnej Góry (Kociej Góry).
 *   ⚠⚠⚠ NIE PISZĘ, ŻE TO NARZĘDZIA DO OBRÓBKI JEDZENIA —
 *   źródło mówi o „kamiennych artefaktach" i o kulturze
 *   klaktońskiej, NIE o ich przeznaczeniu.
 *   PISZĘ „obrobione kamienie", „wytworzone przedmioty",
 *   i wyraźnie zaznaczam, czego nie wiadomo.
 *   TO JEST NAJWAŻNIEJSZE ZASTRZEŻENIE NA TEJ STRONIE.
 *   ⚠⚠ NIE PISZĘ „gotowanie jest starsze niż mowa" —
 *   to twierdzenie, którego nie mam z czego wyprowadzić.
 *   TO JEST CAŁY KĄT — ale ostrożnie sformułowany.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1138 — pierwsza wzmianka pisana, forma „Trebnicha".
 * — 1250 — nadanie praw miejskich.
 * — 1202 — fundacja klasztoru przez Henryka Brodatego.
 *   ⚠ PODAJĘ SAM ROK FUNDACJI JAKO DATĘ BUDOWLANĄ.
 *   ⚠⚠ PRZYBYCIA CYSTEREK Z BAMBERGU (1203), KASACJI
 *   ZAKONU (1810) I BOROMEUSZEK (1861) NIE UŻYWAM.
 * — 1886 — uruchomienie linii kolejowej do Wrocławia.
 * — ⚠ NARODZIN MARII KAROLINY LESZCZYŃSKIEJ (1703)
 *   NIE UŻYWAM — postać historyczna, wątek dynastyczny.
 *
 * BAZYLIKA — FAKTY UŻYTE (wyłącznie jako budowla):
 * — Długość 80,4 m; szerokość 23,8 m; szerokość
 *   transeptu 31,6 m. Materiał: cegła w układzie
 *   wendyjskim.
 * — Fundacja 1202; prezbiterium ukończone 1219;
 *   nawy w latach 30. XIII w.; kaplica 1268–1269;
 *   wieża 1789. Budynek klasztoru 1696–1726.
 *   ⚠ WYSOKOŚCI NAW I WIEŻ NIE USTALONO.
 *   ⚠⚠ „PIERWSZEJ GOTYCKIEJ KAPLICY W POLSCE"
 *   NIE UŻYWAM JAKO KĄTA.
 *   ⚠⚠ ODSTĘPU 570 LAT MIĘDZY PREZBITERIUM A WIEŻĄ
 *   NIE UŻYWAM JAKO KĄTA — „dokładane po kolei"
 *   zajęte (Zamość).
 *   ⚠⚠⚠ POCHÓWKÓW 22 PRZEDSTAWICIELI DYNASTII PIASTÓW
 *   NIE WYMIENIAM — groby.
 *   ⚠⚠ ORGANÓW (1903) I OŁTARZY (1730–1760)
 *   NIE WPROWADZAM.
 *
 * WZGÓRZA TRZEBNICKIE — FAKTY UŻYTE:
 * — Ciemna Góra 258 m n.p.m. (najwyższa);
 *   Farna Góra 257 m n.p.m.
 * — ⚠⚠ WINNA GÓRA: ŹRÓDŁA SPRZECZNE — 219 M albo 217 M.
 *   PISZĘ „około 219 m" albo pomijam liczbę.
 * — Pasmo ciągnie się na około 10 km; wysokości
 *   względne przekraczają 100 m. Geneza: formacje
 *   morenowe zlodowacenia środkowopolskiego.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: na liście
 *   dolnośląskiej figuruje „Jabłecznik trzebnicki
 *   (cydr)" — ⚠⚠⚠ TO PRODUKT ALKOHOLOWY, WYKLUCZONY.
 *   NIE WYMIENIAM GO ANI RAZU. Poza nim brak wpisu
 *   odnoszącego się do gminy Trzebnica.
 *   ⚠⚠⚠ TEMAT LPT NIE POJAWIA SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ ODLEGŁOŚCI: Wrocław ok. 25 km (ZWERYFIKOWANE).
 *   Pozostałe szacunkowe (±3 km): Prusice ok. 14 km,
 *   Oborniki Śląskie ok. 14, Żmigród ok. 25,
 *   Oleśnica ok. 35, Wołów ok. 35, Milicz ok. 40.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: PÓŁ MILIONA LAT STAŻU — o tym, że codzienna,
 * niewdzięczna robota przygotowywania jedzenia jest
 * starsza od wszystkiego, co uznajemy za kulturę,
 * i że warto o tym wiedzieć w środę o siedemnastej.
 * Kąt od stanowiska „Trzebnica 2": najstarszy znany
 * ślad człowieka na ziemiach polskich to nie budowla
 * i nie ozdoba, tylko blisko półtora tysiąca obrobionych
 * kamieni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że u podnóża Winnej Góry w Trzebnicy odkryto
 *   w 1988 r. stanowisko archeologiczne, badane przez
 *   sześć sezonów do 1994 r., z którego wydobyto blisko
 *   1 500 kamiennych artefaktów sprzed około 500 000 lat
 *   i około 210 z warstwy sprzed 350 000,
 * — ŻE SĄ TO NAJSTARSZE ZNANE NA ZIEMIACH POLSKICH
 *   ŚLADY BYTOWANIA CZŁOWIEKA — to jest rdzeń,
 * — ⚠⚠ ŻE NAJSTARSZYM ŚLADEM NIE JEST BUDOWLA,
 *   GRÓB ANI OZDOBA, TYLKO PÓŁTORA TYSIĄCA PRZEDMIOTÓW,
 *   KTÓRE KTOŚ OBROBIŁ. Pierwsze, co po człowieku
 *   zostaje, to ślad pracy rękami,
 * — ⚠⚠⚠ ŻE NIE WIEMY, DO CZEGO DOKŁADNIE SŁUŻYŁY —
 *   i mówię to wprost, zamiast dopowiadać. Wiadomo,
 *   że zostały wytworzone, nie po co,
 * — ⚠⚠ ŻE MIMO TO JEDNA RZECZ JEST PEWNA: CZYNNOŚĆ
 *   PRZYGOTOWYWANIA CZEGOŚ RĘKAMI, ZANIM SIĘ TO ZJE,
 *   JEST W TYM KRAJU STARSZA OD WSZYSTKIEGO INNEGO,
 *   CO POTRAFIMY DATOWAĆ,
 * — ⚠⚠ ŻE TO NIE JEST PODNIOSŁOŚĆ, TYLKO SKALA.
 *   Codzienne gotowanie wydaje się drobne i nienazwane:
 *   nie ma w nim awansu, nie ma dyplomu, nikt za to
 *   nie chwali. A ma pół miliona lat stażu i nic
 *   go dotąd nie zastąpiło,
 * — ⚠⚠ ŻE Z TEGO WYNIKA JEDNA PRAKTYCZNA RZECZ,
 *   A NIE MORAŁ: skoro ta czynność nie zniknie,
 *   to jedyne sensowne pytanie brzmi, ile ma kosztować.
 *   Nie „czy gotować", tylko „ile ma zabierać",
 * — ⚠ UCZCIWIE, DRUGA STRONA: WIEK CZYNNOŚCI NIE JEST
 *   ARGUMENTEM ZA NICZYM. To, że coś robi się od pół
 *   miliona lat, nie znaczy, że trzeba to robić tak samo
 *   ani że ma to robić akurat ta sama osoba w domu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zdejmie
 *   tej czynności z nikogo i nie udaję, że zdejmie.
 *   Zmienia za to jej cenę — ile kosztuje jedno
 *   powtórzenie. Przy czymś, co ma pół miliona lat
 *   i jutro też będzie, to jedyna zmienna, na którą
 *   ktokolwiek ma wpływ. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NIE MA KOŃCA, JEST RYTM — kąt zajęty
 *   (Maszewo). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o TO, ŻE GOTOWANIE JEST CYKLEM, KTÓREGO NIE DA SIĘ
 *   ODHACZYĆ, i o pytanie „czy to przetrwa zły tydzień";
 *   TUTAJ o WIEK CZYNNOŚCI i o to, że jest starsza
 *   od wszystkiego. Ani słowa o cyklu, o odhaczaniu,
 *   o systemach na tydzień i o złym tygodniu.
 *   ⚠ Jedno zdanie o „koszcie jednego powtórzenia"
 *   jest dopuszczalne, bo pada też w Maszewie —
 *   ale NIE ROZWIJAM GO i nie buduję na nim morału.
 *   ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO PRZEPISÓW RODZINNYCH, TRADYCJI
 *   I ODTWARZANIA — obszar zajęty PIĘCIOKROTNIE.
 *   ⚠⚠ „Pół miliona lat" aż się prosi o morał
 *   o dziedziczeniu. NIE WCHODZĘ. Ani słowa o babci,
 *   o pokoleniach i o przekazywaniu.
 * — ⚠⚠⚠ ZERO TRADYCJI KONTRA DOWODU I TEGO,
 *   CO NAPRAWDĘ JEST STARE — ten sam obszar.
 * — ⚠⚠ ZERO CZEGO NIE WIDAĆ NA TALERZU — kąt zajęty
 *   (Mirosławiec). ⚠ Nie piszę o niewidocznej robocie
 *   ani o liczeniu czasu przygotowań.
 * — ⚠⚠ ZERO NARZĘDZI I ICH KONSERWACJI — kąt zajęty
 *   (Chojnów, ta sama fala). Piszę o artefaktach jako
 *   o ŚLADZIE, nigdy jako o sprzęcie do utrzymania.
 * — ⚠⚠ ZERO SKALI I DBAŁOŚCI — kąt zajęty (Cedynia).
 * — ⚠⚠ ZERO WARSTW, ROTACJI I LODÓWKI CZYTANEJ OD GÓRY —
 *   ⚠⚠⚠ warstwy lessu aż się o to proszą, ale to
 *   prowadzi wprost do porad o przechowywaniu żywności.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO OSI KUCHNI I TRASY LODÓWKA–BLAT–ZLEW —
 *   to układ kuchni, obszar zajęty (Tychowo, Płoty).
 * — ⚠ ZERO PRZYROSTU WPRAWY — kąt zajęty (Chojna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH PORAD ORGANIZACYJNYCH — ta sekcja nie daje
 *   ani jednej rady. Podaje skalę i jedno pytanie.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNYCH TWIERDZEŃ O PRZEZNACZENIU ARTEFAKTÓW.
 *   Źródło mówi, że zostały wytworzone, nie po co.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO KULTU ŚW. JADWIGI, SANKTUARIUM
 *   I PIELGRZYMEK — to dominujący wątek w wynikach.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO POCHÓWKÓW I GROBÓW PIASTÓW.
 * — ⚠⚠ ZERO ZAKONU CYSTEREK, BOROMEUSZEK I KASACJI.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (poza „Trebnicha" z 1138 r. jako zapisem źródłowym).
 * — ⚠⚠ ZERO JABŁECZNIKA TRZEBNICKIEGO — to cydr,
 *   czyli alkohol.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — ⚠⚠⚠ NIE PISZĘ, do czego służyły artefakty
 *   z „Trzebnicy 2" — źródła podają, że zostały
 *   wytworzone, nie po co.
 * — NIE PISZĘ, że „gotowanie jest starsze niż mowa"
 *   ani niczego podobnego — nie mam z czego tego
 *   wyprowadzić.
 * — NIE PODAJĘ wysokości Winnej Góry jako liczby
 *   pewnej — źródła podają 219 albo 217 m.
 * — NIE PODAJĘ wysokości naw ani wież bazyliki.
 * — NIE PODAJĘ liczby głosów organów.
 * — NIE WYMIENIAM produktu z Listy — to alkohol.
 * — NIE PODAJĘ odległości jako pomiarów drogowych
 *   poza Wrocławiem.
 * — NIE OPISUJĘ herbu.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE DAJĘ ŻADNEJ RADY ORGANIZACYJNEJ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Trzebnica leży w powiecie trzebnickim, około
 *   dwudziestu pięciu kilometrów od Wrocławia; miasto
 *   liczy 13 583 mieszkańców (GUS, 31.12.2024)
 *   na 10,6 km², a cała gmina 25 068 osób na 200 km²,
 *   z czterdziestoma ośmioma sołectwami — w mieście
 *   mieszka niewiele ponad połowa ludności gminy,
 * — pierwsza wzmianka pisana pochodzi z 1138 r.
 *   i zapisuje nazwę jako „Trebnicha", a prawa miejskie
 *   nadano w 1250 r.; linię kolejową do Wrocławia
 *   uruchomiono w 1886 r.,
 * — u podnóża Winnej Góry, zwanej też Kocią Górą,
 *   leży stanowisko archeologiczne „Trzebnica 2",
 *   odkryte w 1988 r. i badane przez sześć sezonów,
 *   do 1994 r., przez zespół pod kierunkiem
 *   prof. J. M. Burdukiewicza z Uniwersytetu
 *   Wrocławskiego; z poziomu dolnego, datowanego
 *   na około 500 000 lat, wydobyto blisko 1 500
 *   kamiennych artefaktów, a z poziomu górnego,
 *   leżącego około metra wyżej i datowanego na około
 *   350 000 lat — około 210; są to najstarsze znane
 *   na ziemiach polskich ślady bytowania człowieka,
 *   a znaleziska trafiły do Trzebnickiego Muzeum
 *   Regionalnego; ściana wyrobiska ma około 50 m
 *   długości i przeciętnie 6 m wysokości, a warstwa
 *   lessowa od 1,9 do 5,7 m,
 * — Wzgórza Trzebnickie ciągną się na około dziesięć
 *   kilometrów, a ich wysokości względne przekraczają
 *   100 m; najwyższa jest Ciemna Góra — 258 m n.p.m.,
 *   a Farna Góra ma 257 m,
 * — bazylika ma 80,4 m długości i 23,8 m szerokości,
 *   przy transepcie szerokim na 31,6 m; zbudowano ją
 *   z cegły w układzie wendyjskim, fundacja pochodzi
 *   z 1202 r., prezbiterium ukończono w 1219 r.,
 *   nawy powstały w latach trzydziestych XIII w.,
 *   a wieżę dostawiono w 1789 r.; budynek klasztorny
 *   wzniesiono w latach 1696–1726.
 */
export const TRZEBNICA: CityContent = {
  slug: "trzebnica",
  h1: "Thermomix Trzebnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Trzebnica — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Trzebnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Trzebnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Trzebnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Trzebnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czterdziestu ośmiu sołectw w gminie.",

  highlights: highlightyStandardowe("Trzebnica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najstarszy ślad człowieka w tym kraju to półtora tysiąca obrobionych kamieni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Trzebnicy – jak wygląda prezentacja?",
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
      id: "pol-miliona-lat",
      heading: "Półtora tysiąca obrobionych kamieni",
      paragraphs: [
        "U podnóża Winnej Góry w Trzebnicy leży stanowisko archeologiczne odkryte w 1988 roku i badane przez sześć sezonów, do 1994, przez zespół z Uniwersytetu Wrocławskiego.",
        "Z niższej warstwy — datowanej na około pięćset tysięcy lat — wydobyto blisko półtora tysiąca kamiennych artefaktów. Z warstwy leżącej metr wyżej, o jakieś sto pięćdziesiąt tysięcy lat młodszej, około dwustu dziesięciu. Są to najstarsze znane na ziemiach polskich ślady bytowania człowieka.",
        "I warto zwrócić uwagę, czym ten ślad jest.",
        "Nie budowlą. Nie ozdobą. Nie grobem. Półtora tysiąca przedmiotów, które ktoś wziął do ręki i obrobił — i to zostało po pół miliona lat, bo akurat to przetrwało.",
        "Do czego dokładnie służyły, nie wiadomo, i uczciwie to powiem zamiast dopowiadać. Wiemy, że zostały wytworzone. Nie wiemy, po co. To jest różnica, którą archeolodzy pilnują, a popularne opisy chętnie zacierają.",
        "Jedna rzecz jest jednak pewna i nie wymaga żadnych domysłów: czynność przygotowywania czegoś rękami, zanim się to zje, jest w tym kraju starsza od wszystkiego innego, co potrafimy datować.",
        "To nie jest podniosłość. To jest po prostu skala — i przydaje się akurat wtedy, kiedy się jej najmniej spodziewamy.",
        "Bo codzienne gotowanie wydaje się drobne i jest z gruntu nienazwane. Nie ma w nim awansu ani dyplomu. Nikt za to nie chwali, bo nie ma czego zauważyć — obiad był, więc nie było problemu. To jest praca, której istnienie widać dopiero wtedy, gdy jej zabraknie.",
        "A ma pół miliona lat stażu i nic jej dotąd nie zastąpiło.",
        "Wynika z tego jedna rzecz praktyczna, i nie jest to żaden morał. Skoro ta czynność nie zniknie z niczyjego życia, to jedyne pytanie, które da się sensownie zadać, brzmi nie „czy gotować”, tylko „ile to ma zabierać”. Pierwsze pytanie jest rozstrzygnięte od pięciuset tysięcy lat. Drugie jest otwarte.",
        "Uczciwie o drugiej stronie: wiek czynności nie jest argumentem za niczym. To, że coś robi się od pół miliona lat, nie znaczy, że trzeba to robić tak samo, ani — tym bardziej — że ma to robić akurat ta sama osoba w domu. Skala mówi, że tego nie da się wyłączyć. Nie mówi, jak ma wyglądać.",
        "Na koniec o urządzeniu, bez patosu. Ono nie zdejmie tej czynności z nikogo i nie będę udawać, że zdejmie.",
        "Zmienia natomiast jej cenę — to, ile kosztuje jedno powtórzenie. Przy czymś, co ma pół miliona lat i jutro też będzie, to właściwie jedyna zmienna, na którą ktokolwiek ma wpływ.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Trzebnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile czasu zajmuje u Was zwykły obiad w dzień pracujący. To jedyna liczba, która naprawdę coś zmienia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Trzebnicy"),
    sekcjaRaty("w Trzebnicy"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Trzebnicy",
      paragraphs: [
        "Trzebnica leży w powiecie trzebnickim, około dwudziestu pięciu kilometrów od Wrocławia. Samo miasto liczy ponad trzynaście i pół tysiąca mieszkańców (GUS, 31.12.2024) na dziesięciu i sześciu dziesiątych kilometra kwadratowego, a cała gmina ponad dwadzieścia pięć tysięcy osób na dwustu kilometrach, z czterdziestoma ośmioma sołectwami — w mieście mieszka niewiele ponad połowa ludności gminy. Pierwsza wzmianka pisana pochodzi z 1138 roku i zapisuje nazwę jako „Trebnicha”, prawa miejskie nadano w 1250, a linię kolejową do Wrocławia uruchomiono w 1886. U podnóża Winnej Góry leży stanowisko archeologiczne „Trzebnica 2”, odkryte w 1988 i badane przez sześć sezonów do 1994: z poziomu sprzed około pięciuset tysięcy lat wydobyto blisko półtora tysiąca kamiennych artefaktów, a z leżącego metr wyżej — około dwustu dziesięciu; to najstarsze znane na ziemiach polskich ślady bytowania człowieka, a znaleziska trafiły do Trzebnickiego Muzeum Regionalnego. Wzgórza Trzebnickie ciągną się na około dziesięć kilometrów, a ich wysokości względne przekraczają sto metrów; najwyższa jest Ciemna Góra — dwieście pięćdziesiąt osiem metrów nad poziomem morza. Bazylika ma osiemdziesiąt metrów czterdzieści długości i dwadzieścia trzy osiemdziesiąt szerokości, przy transepcie szerokim na trzydzieści jeden metrów sześćdziesiąt; zbudowano ją z cegły, fundacja pochodzi z 1202 roku, prezbiterium ukończono w 1219, a wieżę dostawiono dopiero w 1789.",
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

  districtsHeading: "Do których części Trzebnicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu ośmiu sołectw w gminie — a mieszka w nich prawie tyle samo osób co w samym mieście. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Trzebnicę też przyjadę",
  nearbyParagraphs: [
    "Wrocław jest dwadzieścia pięć kilometrów stąd, Prusice i Oborniki Śląskie po czternaście, a Żmigród mniej więcej dwadzieścia pięć. Do Milicza i Oleśnicy też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Wrocław", "Oborniki Śląskie", "Prusice", "Żmigród", "Milicz"],

  about: blokOMnie("do Trzebnicy", "w Trzebnicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Trzebnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu ośmiu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Trzebnicę w powiecie trzebnickim na Dolnym Śląsku — nie o Trzebinię w małopolskiem ani o Trzebiatów w zachodniopomorskiem. W samym województwie jest też wieś Trzebnice, w liczbie mnogiej.",
    },
    ...faqWspolne("w Trzebnicy"),
    {
      question: "Czy Thermomix sprawi, że przestanę gotować?",
      answer:
        "Nie i nie będę udawać, że tak. Przygotowywanie jedzenia rękami jest w tym kraju starsze od wszystkiego, co potrafimy datować — najstarsze znane ślady człowieka na ziemiach polskich, odkryte właśnie w Trzebnicy, to blisko półtora tysiąca obrobionych kamieni sprzed pół miliona lat. Ta czynność nie zniknie. Zmienia się tylko jej cena, czyli to, ile kosztuje jedno powtórzenie — i to akurat da się policzyć przed zakupem.",
    },
    {
      question: "Ile czasu zajmuje obiad zrobiony w Thermomiksie?",
      answer:
        "To zależy od dania i od tego, ile zajmuje u Was teraz — dlatego przy umawianiu pytam właśnie o to. Najuczciwsze porównanie robi się na czymś, co gotujecie w zwykły dzień pracujący, a nie na potrawie od święta. Na prezentacji możemy dokładnie taką rzecz ugotować i porównać na miejscu.",
    },
  ],

  geo: { lat: 51.3103, lng: 17.0622 },
};
