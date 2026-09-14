import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * IŁOWA — gmina miejsko-wiejska w powiecie żagańskim.
 * MIASTO 3 578, GMINA 6 324 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 9,2 km², GMINY 153,1 km², 10 SOŁECTW:
 * Borowe, Czerna, Czyżówek, Jankowa Żagańska, Klików, Konin
 * Żagański, Kowalice, Szczepanów, Wilkowisko, Żaganiec.
 * ⚠ Strona gminy podaje 6 545 mieszkańców bez daty —
 *   NIE CYTUJĘ, trzymam się GUS.
 *
 * ⚠⚠ HOMONIMY — AŻ TRZY: IŁOWA (miasto, lubuskie, powiat
 * żagański) ≠ IŁÓW (wieś i gmina wiejska, powiat sochaczewski,
 * mazowieckie) ≠ IŁOWA (wieś w powiecie chełmskim, lubelskie).
 * Wyszukiwarki podstawiają też IŁAWĘ i IŁŻĘ. FAQ to rozróżnia.
 * Nazwa niemiecka: Halbau.
 *
 * PRAWA MIEJSKIE 1679 r. (dwa źródła zgodnie).
 * PRZYWRÓCENIE 1962 r. — Iłowa stała się wtedy 37. miastem
 * województwa (dwa źródła zgodnie).
 * ⚠⚠ DATY UTRATY NIE PODAJĘ — źródła sprzeczne: 1830
 *   kontra „po 1945". Piszę tylko o utracie i przywróceniu
 *   w 1962, bez daty utraty.
 * HISTORIA: od X w. osada leśna; 1567 sprzedana Krzysztofowi
 * von Schellendorf; 1679–1902 rodzina VON PROMNITZ;
 * od 1902 FRIEDRICH VON HOCHBERG.
 * Wydobycie i wytop RUDY DARNIOWEJ udokumentowane od XV w.
 * ⚠ To metalurgia — jedyna udokumentowana historyczna gałąź
 *   wytwórcza. Podaję jako fakt.
 *
 * GEOGRAFIA: nad CZERNĄ MAŁĄ, dopływem Bobru; w gminie także
 * CZERNA WIELKA. BORY DOLNOŚLĄSKIE.
 * ⚠⚠ LASY ZAJMUJĄ NIEMAL 67% POWIERZCHNI GMINY — piąte
 * miejsce w województwie lubuskim i pierwsza dwudziestka
 * w Polsce.
 * ⚠ KĄTA GRZYBOWEGO NIE UŻYWAM — ZAJĘTY TRZYKROTNIE, a źródła
 *   i tak nie opisują tradycji grzybowych gminy.
 * Autostrada A18, linia kolejowa Zielona Góra–Węgliniec.
 * Gmina należy do Euroregionu Sprewa–Nysa–Bóbr.
 * POMNIKI PRZYRODY: stare dęby i lipy, w tym DĄB JERZY
 * o obwodzie 490 cm.
 *
 * ⚠⚠ PARK PAŁACOWY I OGRÓD JAPOŃSKI — PODSTAWA KĄTA:
 * PAŁAC wzniesiony w 1626 r., rozbudowywany etapami.
 * PARK PAŁACOWY — 12,5 ha na terenie płaskim; założony
 * na początku XX w. przez FRIEDRICHA VON HOCHBERGA,
 * właściciela w latach 1902–1921, miłośnika sztuki ogrodowej
 * i znawcy kultury Orientu.
 * OGRÓD JAPOŃSKI: staw o nieregularnej linii brzegowej
 * z CZTEREMA WYSEPKAMI, dwie połączone mostkami (jeden
 * oryginalny, piaskowcowy), LATARNIA JAPOŃSKA na wyspie,
 * symbolicznie układane kamienie. GAJ RÓŻANECZNIKOWY
 * zajmujący blisko hektar, okazy 4–5 m wysokości, określany
 * jako unikatowy w skali województwa.
 * ⚠⚠ OKREŚLENIA „PIERWSZY OGRÓD JAPOŃSKI W EUROPIE"
 * NIE UŻYWAM — to twierdzenie strony gminy, niepotwierdzone
 * i wysoce wątpliwe. Źródło konserwatorskie mówi TYLKO,
 * że ogród japoński we WROCŁAWIU (1913) powstał w oparciu
 * o wcześniejsze założenie z Iłowej z 1905 r. TĘ WERSJĘ
 * PODAJĘ, i to ostrożnie.
 * Gatunki drzew w parku: dąb szypułkowy, grab pospolity,
 * dąb czerwony, klon zwyczajny, olsza czarna.
 *
 * ŚWIĘTO KWITNĄCYCH AZALII — coroczna majowa impreza
 * w szkółce krzewów ozdobnych; pokaz obejmuje ok. 150 odmian
 * azalii i różaneczników NA PIĘCIU HEKTARACH, w tym sekcję
 * AZALII GANDAWSKICH LICZĄCYCH OK. 200 LAT. W weekendy
 * muzyka na żywo, rękodzieło i LOKALNA KUCHNIA.
 * ⚠ NAZWY SZKÓŁKI NIE PODAJĘ — ŻADNYCH NAZW FIRM.
 * ⚠ NUMERU EDYCJI ANI ROKU PIERWSZEJ NIE PODAJĘ.
 * FESTIWAL MUZYKI ORGANOWEJ I KAMERALNEJ — XXVI edycja
 * w 2024 r., w kościele Chrystusa Króla, wstęp wolny.
 *
 * ⚠⚠ W GMINIE IŁOWA NIE MA UDOKUMENTOWANEGO MŁYNA, BROWARU,
 * GORZELNI, PIEKARNI, MLECZARNI, PASIEKI, WINNICY ANI ZAKŁADU
 * PRZETWÓRSTWA SPOŻYWCZEGO. Sprawdzono celowo. NIE WYMYŚLAM
 * ŻADNEGO. ⚠ Żadnego produktu z gminy nie ma na Liście
 * Produktów Tradycyjnych.
 *
 * KĄT: UMAMI — SKĄD SIĘ BIERZE GŁĘBIA SMAKU.
 * Kąt od parku, w którym właściciel zafascynowany kulturą
 * Orientu założył na początku XX wieku ogród japoński — a więc
 * od miejsca, w którym japońskie pojęcie trafiło do lubuskiej
 * miejscowości sto lat przed tym, zanim trafiło do polskich
 * kuchni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że każdy zna sytuację, w której danie jest doprawione,
 *   a mimo to „czegoś w nim nie ma" — i że to „coś" ma nazwę,
 * — ŻE JEST TO SMAK NAZWANY W JAPONII I NIEOBECNY W SZKOLNYM
 *   PODZIALE na słodki, słony, kwaśny i gorzki — a przecież
 *   znany polskiej kuchni od zawsze,
 * — ŻE NIE JEST TO ŻADEN EGZOTYCZNY DODATEK: pełno go
 *   w suszonych grzybach, dojrzewającym serze, pomidorach,
 *   wywarze na kościach, kiszonkach, wędzonce i cebuli
 *   smażonej długo,
 * — ŻE POLSKA KUCHNIA OD ZAWSZE GO UŻYWA, tylko go nie nazywa
 *   — dlatego do rosołu idą kości, a do bigosu suszone grzyby,
 * — PRAKTYCZNY WNIOSEK: gdy daniu „czegoś brakuje",
 *   odruchowo dosalamy — a częściej brakuje właśnie tego,
 *   a nie soli,
 * — CO ZROBIĆ ZAMIAST DOSALANIA: dodać łyżkę czegoś
 *   z tej listy — kilka suszonych grzybów, trochę startego
 *   dojrzewającego sera, koncentrat pomidorowy, kawałek
 *   wędzonki,
 * — ŻE TE SKŁADNIKI SIĘ WZMACNIAJĄ: dwa z nich razem robią
 *   więcej niż każdy z osobna, i na tym polega cała sztuczka
 *   dobrych wywarów,
 * — ŻE SUSZENIE I DOJRZEWANIE TO PROCESY, KTÓRE TEN SMAK
 *   ZAGĘSZCZAJĄ — dlatego suszony grzyb daje więcej niż
 *   świeży, a stary ser więcej niż młody,
 * — OSTRZEŻENIE: w nadmiarze robi się z tego ciężko i mdło
 *   — to nie jest przyprawa, którą się sypie,
 * — ŻE NAJPROSTSZYM DOMOWYM ŹRÓDŁEM JEST DOBRZE ZROBIONY
 *   WYWAR I NIC GO NIE ZASTĄPI,
 * — UCZCIWIE: urządzenie nie doda smaku, którego w składnikach
 *   nie ma, i żadna funkcja tego nie załatwi,
 * — ale robi dwie rzeczy: gotuje wywar bez pilnowania
 *   i miele suszone grzyby oraz ser na proszek, którym można
 *   doprawiać — a to jest najprostszy sposób, żeby mieć
 *   ten smak pod ręką.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO glutaminianu jako
 *   tematu zdrowotnego, ZERO „czy to szkodzi", ZERO chemii
 *   spożywczej. Piszę WYŁĄCZNIE o SMAKU i o SKŁADNIKACH,
 *   nigdy o substancjach. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM, MAREK ANI KOSTEK ROSOŁOWYCH.
 * — ⚠ ZERO EGZOTYZOWANIA KUCHNI JAPOŃSKIEJ. Piszę, że smak
 *   został tam NAZWANY, a nie że jest japoński.
 * — ZERO żargonu naukowego.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Równowaga smaków"
 * dotyczy czterech smaków — słonego, kwaśnego, słodkiego
 * i gorzkiego — jako narzędzia korygowania dania. „Gorycz
 * w kuchni" dotyczy jednego z nich. „Doprawianie" dotyczy
 * próbowania i korygowania. „Rosół i wywar" dotyczą podstawy
 * jako produktu. „Zamienniki" dotyczą braku składnika.
 * „Grzyby" dotyczą jednego surowca. Tutaj chodzi o SMAK,
 * KTÓREGO NIE MA W SZKOLNYM PODZIALE, i o listę zwykłych
 * składników, które go niosą.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty utraty praw miejskich.
 * — NIE NAZYWAM ogrodu japońskiego pierwszym w Europie.
 * — NIE PODAJĘ nazwy szkółki ani numeru edycji Święta Azalii.
 * — NIE WYMYŚLAM młyna, browaru ani pasieki — w tej gminie
 *   nie ma udokumentowanych.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych.
 * — NIE MYLĘ IŁOWEJ z IŁOWEM, IŁAWĄ ani IŁŻĄ.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad trzy i pół tysiąca mieszkańców
 *   na 9,2 km², cała gmina ponad sześć tysięcy na 153,1 km²,
 *   z dziesięcioma sołectwami; lasy zajmują niemal 67%
 *   powierzchni gminy — to piąty wynik w województwie
 *   i pierwsza dwudziestka w kraju,
 * — prawa miejskie Iłowa otrzymała w 1679 r. i odzyskała
 *   je w 1962, stając się trzydziestym siódmym miastem
 *   województwa; osada leśna istniała tu od X w., w 1567
 *   dobra sprzedano Krzysztofowi von Schellendorf, w latach
 *   1679–1902 należały do rodziny von Promnitz, a od 1902
 *   do Friedricha von Hochberga. Wydobycie i wytop rudy
 *   darniowej udokumentowano tu od XV w.,
 * — miasto leży nad Czerną Małą, dopływem Bobru, w Borach
 *   Dolnośląskich; wśród pomników przyrody jest dąb Jerzy
 *   o obwodzie 490 cm,
 * — pałac wzniesiono w 1626 r., a otaczający go park o
 *   powierzchni 12,5 ha założył na początku XX w. Friedrich
 *   von Hochberg, właściciel w latach 1902–1921, miłośnik
 *   sztuki ogrodowej i znawca kultury Orientu. W parku jest
 *   ogród japoński: staw o nieregularnej linii brzegowej
 *   z czterema wysepkami, dwie z nich połączone mostkami
 *   — jeden oryginalny, piaskowcowy — latarnia japońska
 *   i symbolicznie układane kamienie; rośnie tu także gaj
 *   różanecznikowy zajmujący blisko hektar, z okazami wysokimi
 *   na cztery, pięć metrów, uznawany za unikatowy w skali
 *   województwa. Według ustaleń konserwatorskich ogród
 *   japoński we Wrocławiu, urządzony w 1913 r., powstał
 *   w oparciu o wcześniejsze założenie z Iłowej z 1905 r.,
 * — co roku w maju odbywa się tu Święto Kwitnących Azalii:
 *   pokaz obejmuje około stu pięćdziesięciu odmian azalii
 *   i różaneczników na pięciu hektarach, w tym azalie
 *   gandawskie liczące około dwustu lat, a w weekendy
 *   towarzyszą mu muzyka na żywo, rękodzieło i lokalna kuchnia;
 *   w październiku 2024 r. odbyła się dwudziesta szósta edycja
 *   Festiwalu Muzyki Organowej i Kameralnej w kościele
 *   Chrystusa Króla.
 */
export const ILOWA: CityContent = {
  slug: "ilowa",
  h1: "Thermomix Iłowa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Iłowa — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Iłowej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Iłowa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Iłowej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Iłowej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Iłowa i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gdy daniu „czegoś brakuje”, najczęściej nie brakuje mu soli.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Iłowej – jak wygląda prezentacja?",
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
      id: "umami",
      heading: "Ogród japoński z początku XX wieku — czyli o smaku, którego nie ma w szkolnym podziale",
      paragraphs: [
        "Park pałacowy w Iłowej zajmuje dwanaście i pół hektara, a założył go na początku XX wieku Friedrich von Hochberg, właściciel majątku w latach 1902–1921, miłośnik sztuki ogrodowej i znawca kultury Orientu. Jest w nim ogród japoński: staw z czterema wysepkami, dwie połączone mostkami — jeden oryginalny, piaskowcowy — latarnia japońska i symbolicznie układane kamienie. Według ustaleń konserwatorskich wrocławski ogród japoński, urządzony w 1913 roku, powstał w oparciu właśnie o to wcześniejsze, iłowskie założenie z 1905.",
        "Skoro więc japońskie pojęcie trafiło do lubuskiego miasteczka ponad sto lat temu, napiszę o innym japońskim pojęciu, które do polskich kuchni trafiło znacznie później — a opisuje coś, co znamy od zawsze.",
        "Każdy zna tę sytuację: danie jest doprawione, sól jest, pieprz jest, a mimo to „czegoś w nim nie ma”. To „coś” ma nazwę — umami — i jest smakiem, którego nie było w szkolnym podziale na słodki, słony, kwaśny i gorzki. Nazwano go w Japonii, ale nie ma w nim nic egzotycznego.",
        "Pełno go bowiem w rzeczach, które stoją w każdej polskiej kuchni: w suszonych grzybach, w dojrzewającym serze, w pomidorach — zwłaszcza suszonych i w koncentracie — w wywarze gotowanym na kościach, w kiszonkach, w wędzonce i w cebuli smażonej naprawdę długo.",
        "Polska kuchnia używa go od zawsze, tylko go nie nazywa. Do rosołu idą kości, a nie samo mięso. Do bigosu suszone grzyby. Do sosu łyżka koncentratu. Nikt tego nie tłumaczy teorią, ale wszyscy wiedzą, że bez tego jest inaczej.",
        "Praktyczny wniosek jest jeden i naprawdę zmienia gotowanie. Gdy daniu „czegoś brakuje”, odruchowo dosalamy — a bardzo często brakuje mu właśnie tego, a nie soli. Dosalanie w takiej sytuacji prowadzi tylko do dania słonego, któremu nadal czegoś brakuje.",
        "Zamiast tego warto dodać łyżkę czegoś z tej listy: kilka suszonych grzybów, trochę startego dojrzewającego sera, odrobinę koncentratu pomidorowego, kawałek wędzonki. Efekt jest natychmiastowy i zwykle zaskakujący dla kogoś, kto robi to pierwszy raz.",
        "Jest przy tym rzecz, na której opiera się cała sztuka dobrych wywarów: te składniki się wzmacniają. Dwa z nich użyte razem dają więcej niż każdy osobno — grzyby z pomidorem, kości z cebulą, ser z wędzonką. Stąd bierze się głębia, której nie da się osiągnąć jednym składnikiem, choćby najlepszym.",
        "Warto też wiedzieć, że suszenie i dojrzewanie ten smak zagęszczają. Dlatego suszony grzyb daje go znacznie więcej niż świeży, a stary, twardy ser więcej niż młody i łagodny. To nie jest kwestia jakości, tylko czasu.",
        "I ostrzeżenie, bo łatwo tu przesadzić. W nadmiarze robi się z tego ciężko i mdło — danie zaczyna być duszne, jednostajne, męczące po kilku kęsach. To nie jest przyprawa, którą się sypie; to jest coś, czego dodaje się odrobinę i przestaje.",
        "Najprostszym domowym źródłem pozostaje dobrze zrobiony wywar i nic go nie zastąpi. Kto ma w zamrażarce porcję porządnego wywaru, ma pod ręką rozwiązanie na większość dań, którym „czegoś brakuje”.",
        "Teraz uczciwie o sprzęcie. Thermomix nie doda smaku, którego w składnikach nie ma. Żadna funkcja tego nie załatwi i żadne urządzenie tego nie potrafi — to zostaje po stronie tego, co włożysz do naczynia.",
        "Robi natomiast dwie rzeczy, które akurat tutaj są praktyczne. Gotuje wywar bez pilnowania, przez długi czas i bez stania obok. I miele suszone grzyby oraz twardy ser na proszek, którym można doprawiać jak przyprawą — a to jest najprostszy sposób, żeby mieć ten smak stale pod ręką, w małym słoiczku obok soli.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Iłowej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy gotujecie zupy na wywarze. Jeśli tak, pokażę wywar robiony bez pilnowania — to jedna z najbardziej praktycznych rzeczy w tym urządzeniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Iłowej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla iłowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad trzy i pół tysiąca mieszkańców na dziewięciu kilometrach kwadratowych, a cała gmina ponad sześć tysięcy na stu pięćdziesięciu trzech, z dziesięcioma sołectwami; lasy zajmują tu niemal sześćdziesiąt siedem procent powierzchni — to piąty wynik w województwie i pierwsza dwudziestka w kraju. Prawa miejskie Iłowa otrzymała w 1679 roku i odzyskała je w 1962, stając się trzydziestym siódmym miastem województwa. Osada leśna istniała tu od X wieku, w 1567 dobra sprzedano Krzysztofowi von Schellendorf, w latach 1679–1902 należały do rodziny von Promnitz, a od 1902 do Friedricha von Hochberga; wydobycie i wytop rudy darniowej udokumentowano tu od XV wieku. Miasto leży nad Czerną Małą, dopływem Bobru, w Borach Dolnośląskich, a wśród pomników przyrody jest dąb Jerzy o obwodzie blisko pięciu metrów. Pałac wzniesiono w 1626 roku, a otaczający go park o powierzchni dwunastu i pół hektara założył na początku XX wieku Friedrich von Hochberg — właściciel w latach 1902–1921, miłośnik sztuki ogrodowej i znawca kultury Orientu. W parku jest ogród japoński ze stawem o czterech wysepkach, mostkami — z których jeden zachował się w oryginale, piaskowcowy — latarnią japońską i symbolicznie układanymi kamieniami, a także gaj różanecznikowy zajmujący blisko hektar, z okazami wysokimi na cztery, pięć metrów, uznawany za unikatowy w skali województwa; według ustaleń konserwatorskich wrocławski ogród japoński z 1913 roku powstał w oparciu o wcześniejsze założenie z Iłowej z 1905. Co roku w maju odbywa się tu Święto Kwitnących Azalii — pokaz około stu pięćdziesięciu odmian azalii i różaneczników na pięciu hektarach, w tym azalii gandawskich liczących około dwustu lat, z muzyką na żywo, rękodziełem i lokalną kuchnią w weekendy. W październiku 2024 roku odbyła się dwudziesta szósta edycja Festiwalu Muzyki Organowej i Kameralnej.",
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

  districtsHeading: "Do których części gminy Iłowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziesięciu sołectw. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Iłową też przyjadę",
  nearbyParagraphs: [
    "Żagań, Żary, Gozdnica, Wymiarki i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żagań", "Żary", "Gozdnica", "Wymiarki"],

  about: blokOMnie("do Iłowej", "w Iłowej i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Iłowej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziesięciu sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo te nazwy mylą się wyjątkowo łatwo: Iłowa w powiecie żagańskim to nie Iłów na Mazowszu, nie Iława i nie Iłża.",
      },
    ...faqWspolne("w Iłowej"),
    {
      question: "Dlaczego daniu „czegoś brakuje”, choć jest doprawione?",
      answer:
        "Bo brakuje mu zwykle nie soli, tylko głębi — smaku nazwanego w Japonii umami, którego nie ma w szkolnym podziale na słodki, słony, kwaśny i gorzki. Dosalanie w takiej sytuacji daje tylko danie słone, któremu nadal czegoś brakuje.",
    },
    {
      question: "Skąd wziąć ten smak w domowej kuchni?",
      answer:
        "Ze zwykłych składników: suszonych grzybów, dojrzewającego sera, pomidorów i koncentratu, wywaru na kościach, kiszonek, wędzonki, długo smażonej cebuli. Polska kuchnia używa ich od zawsze — dlatego do rosołu idą kości, a do bigosu suszone grzyby.",
    },
    {
      question: "Czy można z tym przesadzić?",
      answer:
        "Można i łatwo. W nadmiarze danie robi się ciężkie, jednostajne i męczące po kilku kęsach. To nie jest przyprawa, którą się sypie — dodaje się odrobinę i przestaje. Warto natomiast pamiętać, że te składniki się wzmacniają: dwa razem dają więcej niż każdy osobno.",
    },
  ],

  geo: { lat: 51.4747, lng: 15.2019 },
};
