import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * KOLNO — gmina MIEJSKA, siedziba powiatu kolneńskiego.
 * MIASTO 9 805 (GUS 31.12.2024), powierzchnia 25,1 km².
 * ⚠ Notatka projektowa podawała 10 000 — lekko ZAWYŻONE.
 * ⚠⚠ GMINA WIEJSKA KOLNO TO ODRĘBNA JEDNOSTKA: 7 848
 * mieszkańców, 282,2 km², urząd w mieście, ale MIASTO
 * DO NIEJ NIE NALEŻY. NIE SUMOWAĆ.
 * ⚠ LICZBY SOŁECTW GMINY WIEJSKIEJ NIE PODAJĘ.
 *
 * PRAWA MIEJSKIE CZERWIEC 1425 r., NA PRAWIE CHEŁMIŃSKIM,
 * nadał KSIĄŻĘ MAZOWIECKI JANUSZ I STARSZY.
 * ⚠ DNIA NIE PODAJĘ — sam urząd miasta podaje raz 30, raz
 * 28 czerwca. SPRZECZNOŚĆ W ŹRÓDLE URZĘDOWYM.
 * ⚠⚠ PRZYWILEJ WYMIENIAŁ WPROST: ŁAŹNIE, MŁYNY I POŁÓW RYB,
 * zwalniał mieszczan spod jurysdykcji książęcej i od ceł.
 *
 * ⚠ PRZYNALEŻNOŚĆ: HISTORYCZNIE MAZOWSZE, ziemia łomżyńska,
 * rejon Puszczy Kurpiowskiej — nie Podlasie. Podlaskie
 * to przynależność ADMINISTRACYJNA. Prawa nadał książę
 * mazowiecki. Fizycznogeograficznie: WYSOCZYZNA KOLNEŃSKA,
 * dorzecze PISY.
 *
 * ⚠⚠ MIASTO PRZENIESIONE: pierwotna lokacja NAD PISĄ,
 * w latach 1434–1443 książę BOLESŁAW IV przeniósł miasto
 * NAD RZEKĘ ŁABNĄ, z powodu przesunięcia szlaków handlowych
 * z wodnych na lądowe.
 *
 * ⚠⚠ JARMARKI USTANOWIONE W 1553 r. PRZEZ ZYGMUNTA AUGUSTA,
 * W TRZECH KONKRETNYCH TERMINACH: 3 LUTEGO, 1 MARCA
 * I 21 WRZEŚNIA. TO JEST PODSTAWA KĄTA — dwa z trzech
 * przypadają na luty i marzec.
 * W poł. XVI w. miasto liczyło 260 domów; DZIEWIĘĆ MŁYNÓW
 * działało w okolicy; BROWARY od wczesnego średniowiecza.
 *
 * ZABYTKI (rejestr):
 * KOŚCIÓŁ ŚW. ANNY — murowany, 1834–1835, KLASYCYSTYCZNY,
 * wg projektu typowego PIOTRA AIGNERA. Nr rej. 67 z 28.04.1980.
 * DZWONNICA — 1862, neobarokowa, ten sam nr rejestru.
 * SYNAGOGA — II poł. XVIII w. ⚠ WYŁĄCZNIE JAKO BUDYNEK.
 * OGRODZENIE I BRAMA CMENTARZA PARAFIALNEGO — 1809.
 * ⚠ UWAGA NA PUŁAPKĘ: 1425 to prawa miejskie, 1834–1835
 * to kościół. Popularne opisy je mylą.
 * ⚠ NIE PODAJĘ, czy Kolno traciło prawa miejskie.
 * KOLNO NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: PRZEDNÓWEK — luty i marzec w kuchni.
 * Kąt od trzech jarmarków wyznaczonych przez króla na 3 lutego,
 * 1 marca i 21 września: dwa z nich wypadają dokładnie
 * w miesiącach, w których nic nie rośnie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że luty i marzec są najtrudniejszymi miesiącami w kuchni
 *   i nikt o tym nie pisze, bo blogi kulinarne żyją latem,
 * — co jest wtedy naprawdę dobre: kiszonki, korzeniowe,
 *   kapusta, cebula, jabłka z przechowalni, suszone grzyby,
 *   strączki, kasze,
 * — a co jest wtedy złe mimo obecności w sklepie: pomidory,
 *   truskawki, sałata, papryka — kupione zimą smakują wodą,
 * — że to nie jest ideologia „sezonowości", tylko obserwacja
 *   smaku: te same warzywa w lipcu są innym produktem,
 * — że przednówek jest historycznie POWODEM istnienia
 *   kiszenia, suszenia i przetworów — nie odwrotnie,
 * — że dania zimowe są z natury długie i duszone, i że to
 *   jest jedyna pora roku, kiedy to naprawdę ma sens,
 * — UCZCIWIE: dlatego akurat zimą to urządzenie zarabia
 *   na siebie najbardziej, a latem najmniej,
 * — i że warto to policzyć przed zakupem, jeśli kupuje się
 *   w czerwcu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także ŻADNYCH
 *   o witaminach, odporności ani „oczyszczaniu".
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO wątku głodu i niedostatku — przednówek opisuję
 *   jako porę roku w kuchni, nie jako biedę.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 *   SYNAGOGĘ wymieniam WYŁĄCZNIE jako budynek z II poł.
 *   XVIII w., bez kontekstu wojennego.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Poza sezonem" dotyczy
 * miasta turystycznego i jego roku gospodarczego. „Sezon"
 * dotyczy podziału roku w innym mieście. „Owoce leśne"
 * i „grzyby i jesień" dotyczą konkretnych surowców.
 * „Kiszonki i zakwas" dotyczą techniki fermentacji.
 * Tutaj chodzi o DWA KONKRETNE MIESIĄCE i o to, co w nich
 * naprawdę warto gotować.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dnia nadania praw miejskich.
 * — NIE PODAJĘ, czy Kolno traciło prawa miejskie.
 * — NIE PODAJĘ liczby sołectw gminy wiejskiej.
 * — NIE PRZYPISUJĘ Kolnu produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PODAJĘ roku rozpoczęcia Dni Kolna.
 * — NIE MYLĘ Kolna podlaskiego z KOLNEM w warmińsko-mazurskiem
 *   (wieś, powiat olsztyński) ani miasta Kolno z gminą wiejską
 *   Kolno. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 9 805 mieszkańców na 25,1 km²,
 * — prawa miejskie na prawie chełmińskim nadane w czerwcu
 *   1425 r. przez księcia mazowieckiego Janusza I Starszego;
 *   przywilej wymieniał wprost łaźnie, młyny i połów ryb
 *   oraz zwalniał mieszczan od ceł,
 * — historycznie Mazowsze, ziemia łomżyńska; dziś województwo
 *   podlaskie,
 * — w latach 1434–1443 książę Bolesław IV przeniósł miasto
 *   znad Pisy nad Łabną, bo szlaki handlowe przesunęły się
 *   z wodnych na lądowe,
 * — w 1553 r. Zygmunt August ustanowił trzy jarmarki roczne:
 *   3 lutego, 1 marca i 21 września,
 * — w połowie XVI w. miasto liczyło 260 domów, w okolicy
 *   pracowało dziewięć młynów, a browary działały tu
 *   od wczesnego średniowiecza,
 * — klasycystyczny kościół świętej Anny z lat 1834–1835,
 *   wzniesiony według projektu typowego Piotra Aignera,
 *   z neobarokową dzwonnicą z 1862 r.,
 * — synagoga z drugiej połowy XVIII w. oraz ogrodzenie
 *   i brama cmentarza parafialnego z 1809 r.
 */
export const KOLNO: CityContent = {
  slug: "kolno",
  h1: "Thermomix Kolno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kolno (podlaskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kolnie w powiecie kolneńskim: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kolno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kolnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kolna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Kolno i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Luty i marzec to najtrudniejsze miesiące w kuchni. Nikt o tym nie pisze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kolnie – jak wygląda prezentacja?",
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
      id: "przednowek",
      heading: "Jarmark 3 lutego i 1 marca — czyli o dwóch najtrudniejszych miesiącach w kuchni",
      paragraphs: [
        "W 1553 roku Zygmunt August ustanowił w Kolnie trzy jarmarki w roku i wyznaczył im konkretne dni: 3 lutego, 1 marca i 21 września. Warto się nad tym zatrzymać. Jeden przypada po żniwach, kiedy jest wszystko. Dwa pozostałe wypadają dokładnie wtedy, kiedy nie ma nic — w lutym i na początku marca. Nie przez przypadek: to były miesiące, w których trzeba było kupić, bo z własnego już nie było czego wziąć.",
        "Cztery i pół wieku później problem jest ten sam, tylko nikt o nim nie pisze. Luty i marzec są najtrudniejszymi miesiącami w domowej kuchni, a strony kulinarne żyją latem — bo latem wszystko jest ładne, kolorowe i samo smakuje.",
        "Co jest wtedy naprawdę dobre? Kiszonki, i to one są bohaterem tej pory roku. Warzywa korzeniowe: marchew, pietruszka, seler, burak, brukiew. Kapusta w każdej postaci. Cebula i por. Jabłka z przechowalni. Suszone grzyby i suszone owoce. Wszystkie strączki. Kasze. To są produkty, które w lutym są dokładnie tak dobre, jak były w październiku, bo takie miały być.",
        "A co jest wtedy złe, mimo że leży w sklepie? Pomidory, truskawki, sałata, papryka, ogórki gruntowe. Kupione w lutym smakują wodą i nic się na to nie poradzi — nie dlatego, że ktoś je źle wyprodukował, tylko dlatego, że warzywo dojrzewające w słońcu i to samo warzywo dowożone z daleka to po prostu dwa różne produkty.",
        "Nie chcę z tego robić ideologii. Nie twierdzę, że zimą nie wolno kupić pomidora — czasem trzeba i tyle. Mówię tylko o smaku: jeśli sałatka w lutym Was rozczarowuje, to zwykle nie jest Wasza wina.",
        "Warto też zobaczyć, że cała nasza tradycja przetworów wzięła się właśnie z tych dwóch miesięcy. Kiszenie, suszenie, wekowanie, piwnica z korzeniowymi — to nie jest folklor ani hobby. To są rozwiązania problemu lutego, wymyślone przez ludzi, którzy nie mieli innego wyjścia. My mamy wybór i tym bardziej warto z nich korzystać świadomie.",
        "Praktycznie wychodzi z tego jeszcze jedna rzecz. Kuchnia lutowa jest z natury długa: gulasze, kapusty, grochówki, dania duszone, wszystko, co wymaga godziny na małym ogniu i co robi się z twardych, tanich składników. Latem takie gotowanie nie ma sensu, bo pomidor jest dobry sam z siebie. Zimą ma sens absolutny, bo z marchewki i kapusty trzeba coś zrobić.",
        "I stąd uczciwa uwaga o sprzęcie, którą powtarzam każdemu, kto pyta o zakup w czerwcu. To urządzenie najbardziej zarabia na siebie zimą. Dania długie, duszone, mieszane godzinami, zupy, kasze, przetwory z tego, co zostało — to jest dokładnie jego repertuar. Latem, gdy połowa posiłków to sałatka i coś z grilla, stoi na blacie znacznie częściej niż pracuje. Jeśli więc liczycie, czy Wam się przyda, policzcie na lutym, nie na lipcu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kolnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli umawiacie się latem, a zastanawiacie się nad zakupem — powiedzcie mi, co jadacie w lutym. To lepszy sprawdzian niż lipcowe menu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kolnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kolneńskiej rodziny",
      paragraphs: [
        "Miasto liczy blisko dziesięć tysięcy mieszkańców i zajmuje ponad dwadzieścia pięć kilometrów kwadratowych. Prawa miejskie na prawie chełmińskim nadał Kolnu w czerwcu 1425 roku książę mazowiecki Janusz I Starszy, a przywilej wymieniał wprost łaźnie, młyny i połów ryb. Historycznie to Mazowsze, ziemia łomżyńska — do województwa podlaskiego Kolno należy administracyjnie. Miasto zostało zresztą przeniesione: pierwotnie leżało nad Pisą, a w latach 1434–1443 książę Bolesław IV przesunął je nad Łabną, bo szlaki handlowe przeniosły się z wody na ląd. W 1553 roku Zygmunt August ustanowił trzy jarmarki: na 3 lutego, 1 marca i 21 września. W połowie szesnastego wieku było tu dwieście sześćdziesiąt domów, a w okolicy pracowało dziewięć młynów. Klasycystyczny kościół świętej Anny z lat 1834–1835 wzniesiono według projektu typowego Piotra Aignera; dzwonnica pochodzi z 1862 roku.",
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

  districtsHeading: "Do których części Kolna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych wsi. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Kolno też przyjadę",
  nearbyParagraphs: [
    "Stawiski, Szczuczyn, Nowogród, Grajewo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Stawiski", "Szczuczyn", "Nowogród", "Grajewo"],

  about: blokOMnie("do Kolna", "w Kolnie i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kolna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych wsi. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo to bardzo częsta pomyłka: chodzi o Kolno w powiecie kolneńskim, w województwie podlaskim, a nie o wieś Kolno pod Olsztynem. Osobną jednostką jest też gmina wiejska Kolno — do niej również dojeżdżam.",
    },
    ...faqWspolne("w Kolnie"),
    {
      question: "Co warto gotować w lutym i marcu?",
      answer:
        "To, co w tych miesiącach jest naprawdę dobre: kiszonki, warzywa korzeniowe, kapustę, cebulę, jabłka z przechowalni, suszone grzyby, strączki i kasze. Pomidory, truskawki i sałata kupione zimą smakują wodą i nie jest to niczyja wina — warzywo dojrzewające w słońcu i to samo warzywo dowożone z daleka to po prostu dwa różne produkty.",
    },
    {
      question: "Czy zimą Thermomix przydaje się bardziej niż latem?",
      answer:
        "Tak i mówię to wprost. Dania długie i duszone, gulasze, kapusty, zupy i kasze to jego repertuar, a to są potrawy zimowe. Latem, gdy połowa posiłków to sałatka i coś z grilla, stoi na blacie znacznie częściej, niż pracuje. Jeśli liczycie, czy Wam się przyda, policzcie na lutym, nie na lipcu.",
    },
    {
      question: "Skąd wzięły się kiszonki i przetwory?",
      answer:
        "Właśnie z lutego i marca. Kiszenie, suszenie i wekowanie to nie folklor, tylko rozwiązanie problemu miesięcy, w których nic nie rośnie — wymyślone przez ludzi, którzy nie mieli innego wyjścia. My mamy wybór, więc tym bardziej warto z nich korzystać świadomie.",
    },
  ],

  geo: { lat: 53.4108, lng: 21.9331 },
};
