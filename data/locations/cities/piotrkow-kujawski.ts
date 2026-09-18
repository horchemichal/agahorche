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
 * PIOTRKÓW KUJAWSKI — powiat radziejowski,
 * woj. kujawsko-pomorskie, KUJAWY.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 167 mieszkańców (GUS 31.12.2024), 9,8 km²,
 * gęstość 426,9 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 8 579 osób.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ ZAWYŻENIE PODWÓJNE: BIP gminy podaje dla miasta
 *   4 573 (+9,7% wobec GUS) i dla gminy „ok. 10 000"
 *   (+16,6%). UŻYWAM GUS. TWARDA GRANICA.
 * ⚠ ODMIANA: D. PIOTRKOWA KUJAWSKIEGO,
 *   Ms. W PIOTRKOWIE KUJAWSKIM, przym. PIOTRKOWSKI.
 *   ⚠ NIE POTWIERDZONE SŁOWNIKOWO — formy regularne.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *
 * ⚠⚠⚠ RYZYKO POMYLENIA — NAJWIĘKSZE W CAŁEJ SERII:
 *   PIOTRKÓW TRYBUNALSKI (łódzkie, ok. 70 tys.) WYPIERA
 *   PIOTRKÓW KUJAWSKI Z WYNIKÓW WYSZUKIWANIA przy niemal
 *   każdym zapytaniu historycznym, a przymiotnik ma TEN SAM
 *   („piotrkowski").
 *   ⚠⚠ KONKRETNA PUŁAPKA: „kolej wąskotorowa Piotrków–
 *   Sulejów" to PIOTRKÓW TRYBUNALSKI. NIE PRZYPISUJĘ.
 *   ⚠ Istnieją też: Piotrków (wieś, lubelskie), Piotrkowice,
 *   Piotrkówko. ZAWSZE „powiat radziejowski" albo
 *   „Kujawski". TWARDA GRANICA.
 * ⚠⚠ ŹRÓDŁO DO ODRZUCENIA: infodlapolaka.pl FABRYKUJE
 *   dane o tym mieście — podaje „30 342 mieszkańców",
 *   „prawa miejskie 1417", nieistniejącą rzekę i muzea.
 *   NIE KORZYSTAM. Traktuję jak superpolonia.info.
 *   TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * ⚠⚠ PRAWA MIEJSKIE — ŹRÓDŁA SPRZECZNE, NIE ROZSTRZYGAM:
 *   wersja A: 5 kwietnia 1589 (Zygmunt III Waza),
 *   wersja B: 1738 (August III Sas).
 *   Pierwsza wzmianka również sporna: 1252 albo 1325.
 *   ⚠ PODAJĘ OBIE WERSJE Z ZASTRZEŻENIEM ALBO WCALE.
 * — ZGODNE W OBU ŹRÓDŁACH: utrata praw miejskich w 1867 r.
 *   i ODZYSKANIE 1 STYCZNIA 1998 R. — po 131 latach.
 *   ⚠⚠ ZERO PRZYCZYNY UTRATY (represja po powstaniu) —
 *   patrz etyka. Podaję sam fakt i daty.
 * — ⚠⚠ RDZEŃ KĄTA — Z WYKAZU ZABYTKÓW POWIATU:
 *   ul. Dworcowa 35/36 — DWORZEC z początku XX w.,
 *   a OBOK NIEGO ŁADOWNIA Z RAMPĄ.
 *   ⚠ RAMPA to platforma zbudowana na wysokości podłogi
 *   wagonu — żeby nie trzeba było niczego podnosić.
 *   TO JEST CAŁY FUNDAMENT KĄTA.
 * — ul. Sienkiewicza 14 — MŁYN ELEKTRYCZNY, ok. 1900;
 *   ul. Włocławska 76 — młyn z przełomu XIX i XX w.
 *   ⚠ DWA MŁYNY W MAŁYM MIASTECZKU, JEDEN JUŻ NA PRĄD.
 * — ul. Poznańska 28 — dawny dworzec kolejki wąskotorowej,
 *   po 1914, dziś dom mieszkalny.
 *   ⚠⚠ ZERO CUKROWNI I ZERO BURAKÓW — kąty zajęte
 *   i wątek zaniku. Kolejkę opisuję jako zakładową
 *   albo wcale.
 * — ul. Włocławska 21 — szkoła podstawowa, 1926.
 * — JEZIORO GŁUSZYŃSKIE (na granicy gmin): powierzchnia
 *   587–608,5 ha, głębokość maksymalna 36,5 m, średnia
 *   9,2 m, linia brzegowa 28 820 m.
 *   ⚠⚠ ZERO GŁĘBOKOŚCI MAKSYMALNEJ KONTRA ŚREDNIEJ —
 *   kąt zajęty (Więcbork). Podaję najwyżej powierzchnię.
 * ⚠ SPISÓW RZEMIEŚLNIKÓW, CECHÓW, LICZBY DOMÓW
 *   I WIATRAKÓW NIE USTALONO — NIE ZGADUJĘ.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Piotrków Kujawski. Sprawdzono wszystkie
 *   dziesięć kategorii wojewódzkich.
 *   ⚠⚠ PUŁAPKA ROZBROJONA: produkty „bronisławskie"
 *   (marmolada z buraków cukrowych — 20.05.2019,
 *   mniszek bronisławski — 18.01.2010) pochodzą
 *   z BRONISŁAWIA W GMINIE DOBRE. To TEN SAM POWIAT,
 *   ale INNA GMINA. NIE PRZYPISUJĘ. TWARDA GRANICA.
 *   ⚠ „Kulis — kwas z buraczków" (31.01.2013) — gminy
 *   pochodzenia NIE USTALONO. NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: WYSOKOŚĆ BLATU — na jakiej wysokości pracują ręce.
 * Kąt od ładowni z rampą przy dworcu: rampę buduje się
 * na wysokości podłogi wagonu, żeby nikt niczego nie
 * podnosił — ładunek jedzie w poziomie. Wysokość była
 * decyzją projektową i miała jeden cel: oszczędzić plecy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w wykazie zabytków przy tutejszym dworcu z początku
 *   XX wieku figuruje osobno ŁADOWNIA Z RAMPĄ, a rampa
 *   to platforma zbudowana równo z podłogą wagonu,
 * — ŻE CAŁY JEJ SENS POLEGAŁ NA TYM, ŻEBY NIKT NICZEGO
 *   NIE PODNOSIŁ: ładunek jechał w poziomie, nie do góry.
 *   Wysokość była decyzją projektową,
 * — ⚠⚠ ŻE W KUCHNI WYSOKOŚĆ BLATU TEŻ JEST DECYZJĄ,
 *   TYLKO PRAWIE NIGDY NASZĄ — TO JEST RDZEŃ TEKSTU.
 *   Blaty montuje się w jednej standardowej wysokości,
 *   a ludzie mają różny wzrost,
 * — CO Z TEGO WYNIKA, KONKRETNIE:
 *   — ZA WYSOKI BLAT PODNOSI ŁOKCIE i męczy barki;
 *     najbardziej przy czynnościach wymagających siły,
 *     czyli przy wyrabianiu i ugniataniu,
 *   — ZA NISKI BLAT ZMUSZA DO POCHYLANIA SIĘ i to jest
 *     ten przypadek, po którym bolą plecy, a nie ręce,
 *   — ⚠ NAJPROSTSZY SPRAWDZIAN, jaki znam: stanąć prosto
 *     przy blacie i położyć na nim dłonie. Jeśli trzeba
 *     unieść barki albo się pochylić — blat nie jest
 *     dopasowany. To trwa pięć sekund,
 * — ŻE ZMIENIĆ BLAT JEST TRUDNO, ALE ZMIENIĆ WYSOKOŚĆ
 *   PRACY JEST ŁATWO:
 *   — DESKA POŁOŻONA NA BLACIE PODNOSI GO o kilka
 *     centymetrów — czasem dokładnie tyle, ile brakuje,
 *   — MISKA POSTAWIONA NA STOLE, A NIE NA BLACIE,
 *     obniża pracę tam, gdzie trzeba się oprzeć ciężarem,
 *   — CIĘŻKIE RZECZY ROBI SIĘ NIŻEJ, PRECYZYJNE WYŻEJ —
 *     to jedna zasada, która porządkuje całą resztę,
 * — ⚠ UCZCIWIE O SPRZĘCIE — I TO JEST RZECZ, KTÓREJ
 *   NIKT NIE MÓWI PRZED ZAKUPEM: urządzenie ma swoją
 *   wysokość i staje na blacie, więc PRACUJE SIĘ NAD NIM,
 *   a nie na jego poziomie. Przy niskim blacie to zaleta.
 *   Przy wysokim — zaglądanie do naczynia i mieszanie
 *   spatułką wymaga uniesienia ręki wyżej, niż się
 *   spodziewasz.
 *   ⚠ DLATEGO NA PREZENTACJI STAWIAM URZĄDZENIE TAM,
 *   GDZIE MA POTEM STAĆ — nie na środku stołu.
 *   ⚠⚠ ZERO WYMIARÓW URZĄDZENIA I ZERO WAGI —
 *   kąt zajęty (Tczew). TWARDA GRANICA.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO WAGI URZĄDZENIA I ZERO PYTANIA, KTO JE
 *   PODNIESIE — kąt zajęty (Tczew). TWARDA GRANICA.
 * — ⚠⚠ ZERO MIEJSCA NA BLACIE I ZERO BAŁAGANU —
 *   kąty zajęte (Koluszki, Zawichost). Tutaj chodzi
 *   WYŁĄCZNIE O WYSOKOŚĆ.
 * — ⚠⚠ ZERO ŚWIATŁA PRZY BLACIE — kąt zajęty (Zbąszynek).
 * — ⚠ ZERO GŁĘBOKOŚCI JEZIORA — kąt zajęty (Więcbork).
 * — ⚠ ZERO CUKROWNICTWA I BURAKÓW — kąty zajęte.
 * — ⚠⚠⚠ ŻADNYCH PORAD ZDROWOTNYCH, MEDYCZNYCH ANI
 *   REHABILITACYJNYCH. Piszę o WYGODZIE I O ZMĘCZENIU,
 *   NIGDY o bólu jako dolegliwości, kręgosłupie,
 *   postawie ciała w sensie medycznym ani o leczeniu.
 *   TWARDA GRANICA BEZWZGLĘDNA — TO JEST NAJWIĘKSZE
 *   RYZYKO TEJ STRONY.
 * — ŻADNYCH KONKRETNYCH WYSOKOŚCI W CENTYMETRACH —
 *   nie mam ich zweryfikowanych i zależą od wzrostu.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ I ZERO HISTORYCZNEJ
 *   NAZWY MIASTA Z NIĄ ZWIĄZANEJ. Nazwa ta pojawia się
 *   w PIERWSZYM akapicie popularnego leksykonu miasta,
 *   czyli w materiale, do którego trafia się od razu.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠ ZERO PRZYCZYNY UTRATY PRAW MIEJSKICH W 1867 R.
 *   (represja po powstaniu, „kara wobec Polaków").
 *   Sam fakt utraty i odzyskania wolno podać —
 *   bez powstania, kary i represji. TWARDA GRANICA.
 * — ⚠⚠ ZERO UPADKU KOLEJKI WĄSKOTOROWEJ (zamknięcia
 *   w latach 80. i w 2002 r.). Kolejkę opisuję wyłącznie
 *   w czasie działania albo jako budynek dworca.
 * — ZERO bezrobocia (15,1% — najwyższe w okolicy)
 *   i wyludniania (−7,2%).
 * — ZERO lesistości jako „ubogiego krajobrazu".
 * — ZERO infodlapolaka.pl jako źródła.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „BLAT I ŚCIERECZKA" (Koluszki) dotyczy MIEJSCA,
 *   KTÓRE ZAJMUJE BAŁAGAN.
 * — „MAŁA KUCHNIA I BLAT" (Zawichost) dotyczy ILOŚCI
 *   MIEJSCA. ⚠ TUTAJ chodzi o WYSOKOŚĆ, nie o powierzchnię.
 * — „ŚWIATŁO PRZY BLACIE" (Zbąszynek) dotyczy WIDOCZNOŚCI.
 * — „WAGA URZĄDZENIA" (Tczew) dotyczy TEGO, KTO JE
 *   PODNIESIE. ⚠⚠ TO JEST NAJBLIŻSZY KĄT — tam chodzi
 *   o PRZENOSZENIE, tutaj o POZIOM, NA KTÓRYM STOI.
 * TUTAJ chodzi o WYSOKOŚĆ, NA KTÓREJ PRACUJĄ RĘCE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczb z BIP gminy.
 * — NIE ROZSTRZYGAM daty praw miejskich.
 * — NIE PODAJĘ przyczyny ich utraty w 1867 r.
 * — NIE PRZYPISUJĘ miastu kolejki Piotrków–Sulejów
 *   ani niczego z Piotrkowa Trybunalskiego.
 * — NIE PRZYPISUJĘ gminie produktów „bronisławskich".
 * — NIE DORADZAM niczego w sprawie zdrowia i pleców.
 * — NIE PODAJĘ wysokości blatu w centymetrach.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Piotrków Kujawski leży na Kujawach, w powiecie
 *   radziejowskim, jest miastem w gminie miejsko-wiejskiej
 *   i liczy 4 167 mieszkańców (GUS, 31.12.2024) na 9,8 km²,
 *   czyli niespełna czterysta trzydzieści osób na kilometr
 *   kwadratowy; cała gmina ma 8 579 osób,
 * — źródła podają sprzecznie datę nadania praw miejskich —
 *   5 kwietnia 1589 albo 1738 — i nie da się tego
 *   rozstrzygnąć; zgodnie natomiast podają, że miasto
 *   utraciło prawa miejskie w 1867 roku i odzyskało je
 *   1 stycznia 1998, po stu trzydziestu jeden latach,
 * — w wykazie zabytków przy ulicy Dworcowej figuruje
 *   dworzec z początku XX wieku, a obok niego ładownia
 *   z rampą,
 * — przy ulicy Sienkiewicza stoi młyn elektryczny z około
 *   1900 roku, a przy Włocławskiej drugi młyn z przełomu
 *   XIX i XX wieku; przy Poznańskiej zachował się dawny
 *   budynek dworca kolejki wąskotorowej, dziś mieszkalny,
 * — szkołę podstawową przy ulicy Włocławskiej zbudowano
 *   w 1926 roku,
 * — leżące na granicy gmin Jezioro Głuszyńskie ma około
 *   sześciuset hektarów powierzchni i blisko dwadzieścia
 *   dziewięć kilometrów linii brzegowej.
 */
export const PIOTRKOW_KUJAWSKI: CityContent = {
  slug: "piotrkow-kujawski",
  h1: "Thermomix Piotrków Kujawski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Piotrków Kujawski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Piotrkowie Kujawskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piotrków Kujawski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Piotrkowie Kujawskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Piotrkowa Kujawskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Piotrków Kujawski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ciężkie rzeczy robi się niżej, precyzyjne wyżej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piotrkowie Kujawskim – jak wygląda prezentacja?",
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
      id: "wysokosc-blatu",
      heading: "Rampa buduje się równo z podłogą wagonu",
      paragraphs: [
        "W wykazie zabytków przy dworcu w Piotrkowie Kujawskim, obok samego budynku z początku XX wieku, figuruje osobno ładownia z rampą. Rampa to platforma zbudowana równo z podłogą wagonu.",
        "Cały jej sens polegał na tym, żeby nikt niczego nie podnosił. Ładunek jechał w poziomie — przesuwany, a nie dźwigany. Wysokość nie wzięła się z przypadku; była decyzją projektową i miała jedno zadanie.",
        "W kuchni wysokość blatu też jest decyzją. Tyle że prawie nigdy naszą.",
        "Blaty montuje się w jednej mniej więcej standardowej wysokości, a ludzie mają różny wzrost. Efekt jest taki, że większość z nas pracuje na poziomie dobranym do kogoś innego — i przyzwyczaja się do tego na tyle, że przestaje zauważać.",
        "Za wysoki blat podnosi łokcie i męczy barki. Widać to najmocniej przy czynnościach wymagających siły — przy wyrabianiu, ugniataniu, rozwałkowywaniu — bo wtedy nie da się pracować ciężarem, tylko samymi rękami.",
        "Za niski zmusza do pochylania się. To ten przypadek, po którym męczą się plecy, a nie ręce, i po którym po godzinie gotowania chce się usiąść.",
        "Sprawdzian, który znam, trwa pięć sekund: stanąć prosto przy blacie i położyć na nim dłonie. Jeśli trzeba unieść barki albo się pochylić — blat nie jest dopasowany. Tyle. Nie trzeba mierzyć ani liczyć.",
        "Zmienić blat jest trudno. Ale zmienić wysokość pracy jest łatwo i to jest cała dobra wiadomość.",
        "Deska położona na blacie podnosi go o kilka centymetrów — czasem dokładnie tyle, ile brakowało. Miska postawiona na stole zamiast na blacie obniża pracę tam, gdzie trzeba oprzeć się ciężarem. A jedna zasada porządkuje resztę: ciężkie rzeczy robi się niżej, precyzyjne wyżej.",
        "I uczciwie o sprzęcie — rzecz, o której nikt nie mówi przed zakupem. Urządzenie ma swoją wysokość i staje na blacie, więc pracuje się NAD nim, a nie na jego poziomie.",
        "Przy niskim blacie to zaleta: naczynie samo podnosi się do wygodnej wysokości. Przy wysokim bywa odwrotnie — zaglądanie do środka i mieszanie spatułką wymaga uniesienia ręki wyżej, niż się człowiek spodziewa. Dlatego na prezentacji stawiam urządzenie tam, gdzie ma potem stać, a nie na środku stołu. To jedna z tych rzeczy, które lepiej sprawdzić u siebie niż na cudzym blacie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piotrkowie Kujawskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, gdzie urządzenie miałoby stać — postawię je od razu w tym miejscu, żebyś sprawdziła to na własnym blacie, a nie na moim opisie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piotrkowie Kujawskim"),
    sekcjaRaty("w Piotrkowie Kujawskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla piotrkowskiej rodziny",
      paragraphs: [
        "Piotrków Kujawski leży na Kujawach, w powiecie radziejowskim, jest miastem w gminie miejsko-wiejskiej i liczy ponad cztery tysiące mieszkańców na dziewięciu i ośmiu dziesiątych kilometra kwadratowego — niespełna czterysta trzydzieści osób na kilometr; cała gmina ma ponad osiem i pół tysiąca osób. Źródła podają sprzecznie datę nadania praw miejskich: jedno mówi o 5 kwietnia 1589 roku, drugie o 1738 — i nie da się tego rozstrzygnąć. Zgodnie natomiast podają, że miasto utraciło prawa miejskie w 1867 roku i odzyskało je 1 stycznia 1998, po stu trzydziestu jeden latach. W wykazie zabytków przy ulicy Dworcowej figuruje dworzec z początku XX wieku, a obok niego ładownia z rampą. Przy ulicy Sienkiewicza stoi młyn elektryczny z około 1900 roku, a przy Włocławskiej drugi młyn z przełomu wieków — dwa młyny w małym miasteczku, jeden już na prąd. Szkołę podstawową przy Włocławskiej zbudowano w 1926 roku. Leżące na granicy gmin Jezioro Głuszyńskie ma około sześciuset hektarów powierzchni i blisko dwadzieścia dziewięć kilometrów linii brzegowej.",
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

  districtsHeading: "Do których części Piotrkowa Kujawskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od centrum i okolic dworca po zabudowę przy wylotach dróg. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Piotrków Kujawski też przyjadę",
  nearbyParagraphs: [
    "Radziejów, Kruszwica, Strzelno, Izbica Kujawska, Brześć Kujawski, Inowrocław i Włocławek są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radziejów", "Kruszwica", "Strzelno", "Izbica Kujawska"],

  about: blokOMnie("do Piotrkowa Kujawskiego", "w Piotrkowie Kujawskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Piotrkowa Kujawskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Piotrków Kujawski w powiecie radziejowskim — nie o Piotrków Trybunalski, który w wyszukiwarce wypiera go niemal zawsze.",
    },
    ...faqWspolne("w Piotrkowie Kujawskim"),
    {
      question: "Jak sprawdzić, czy blat w kuchni jest dobrze dobrany?",
      answer:
        "Stanąć przy nim prosto i położyć na nim dłonie. Jeśli trzeba unieść barki albo się pochylić — blat nie jest dopasowany. Zmienić blat jest trudno, ale zmienić wysokość pracy łatwo: deska podnosi o kilka centymetrów, a miska postawiona na stole obniża pracę tam, gdzie trzeba oprzeć się ciężarem. Zasada jest jedna: ciężkie rzeczy niżej, precyzyjne wyżej.",
    },
    {
      question: "Gdzie najlepiej postawić Thermomix?",
      answer:
        "Tam, gdzie ma stać na stałe — i warto to sprawdzić przed zakupem. Urządzenie ma swoją wysokość i staje na blacie, więc pracuje się nad nim. Przy niskim blacie to zaleta, bo naczynie samo podnosi się do wygodnej wysokości; przy wysokim zaglądanie do środka wymaga uniesienia ręki wyżej, niż się człowiek spodziewa. Dlatego na prezentacji stawiam je od razu w docelowym miejscu.",
    },
  ],

  geo: { lat: 52.5511, lng: 18.4991 },
};
