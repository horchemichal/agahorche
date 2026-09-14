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
 * BRODY — ⚠⚠ OD 1 STYCZNIA 2024 r. ZNOWU MIASTO.
 * Powiat żarski, woj. lubuskie.
 * Prawa miejskie posiadało od 1454 r. do 1945 r.,
 * a status miasta odzyskało decyzją Rady Ministrów
 * z dniem 1.01.2024.
 * MIASTO 839 (GUS 31.12.2024) — jedno z najmniejszych
 * miast w Polsce.
 * GMINA 3 109 (GUS 31.12.2024), 240,2 km², ok. 13 os./km².
 * ⚠ PRZYCZYN UTRATY PRAW W 1945 r. NIE OPISUJĘ.
 *
 * ⚠⚠ HOMONIMY — KLUCZOWE, BO NAZWA JEST CZĘSTA:
 * BRODY (miasto, gmina Brody, powiat żarski, lubuskie)
 * ≠ BRODY koło Sulechowa (druga wieś o tej nazwie
 *   W TYM SAMYM WOJEWÓDZTWIE!)
 * ≠ BRODY w świętokrzyskim
 * ≠ BRODY w wielkopolskim (gmina Lwówek)
 * ≠ BRODY na Ukrainie.
 * FAQ MUSI TO ROZRÓŻNIAĆ. TWARDA GRANICA.
 *
 * HISTORIA — PODSTAWA KĄTA:
 * — 1398 — pierwsza wzmianka; 1454 — prawa miejskie,
 * — von Biebersteinowie od 1370/80; pierwsza wzmianka
 *   o domu pańskim 1622; ok. 1670 początek budowy pałacu
 *   przez Ulricha Hiparcha von Promnitz, korpus główny
 *   ukończony 1680,
 * — 20 kwietnia 1740 — Heinrich von Brühl (1700–1763),
 *   minister Augusta III, nabywa Brody; przebudowa pałacu
 *   1741–1749 wg projektu drezdeńskiego architekta
 *   Johanna Christopha Knöffela,
 * — ⚠⚠ OGRODNIKIEM W BRODACH BYŁ JAN JAKUB MENCKE,
 *   KTÓRY W 1713 r. PROJEKTOWAŁ OGRÓD SASKI DLA AUGUSTA II,
 * — ⚠⚠ PLAN Z 1740 r. (Christian Conrad Francke)
 *   DOKUMENTUJE OSIOWĄ KOMPOZYCJĘ ZAŁOŻENIA: parterre
 *   między pałacem a jeziorem, symetryczne boskiety,
 *   ORANŻERIĘ I OGRÓD WARZYWNY. Wcześniej, za Promnitza:
 *   SAD od strony jeziora, OGRÓD WARZYWNY od północy.
 *   TO JEST KOTWICA — warzywnik jako równoprawny element
 *   barokowego planu, nie dodatek,
 * — Brühl rozbudował park o teatr letni, labirynty,
 *   bażanciarnię oraz budynek teatru z oranżerią i szklarnią,
 * — 1807 — początek przekształcania ogrodu barokowego
 *   w krajobrazowy; od 1816 parkiem opiekuje się angielski
 *   ogrodnik Klemenson; ok. 1832 powstaje „Ustronie
 *   Krystyny"; arboretum z drzewami z Ameryki i Anglii,
 * — park ok. 100 ha; aleje lipowe przecinające się pod kątem
 *   prostym; dąb biały z Ameryki Północnej,
 * — brama miejska 1753; barokowy kościół 1721 w Bieczu,
 * — gmina leży w Geoparku UNESCO Łuk Mużakowa.
 *   ⚠ DATY NADANIA STATUSU GEOPARKU NIE PODAJĘ.
 *
 * ⚠⚠ PAŁAC ZOSTAŁ ZNISZCZONY W 1945 r. — PISZĘ WYŁĄCZNIE
 *   „zachowały się ruiny oranżerii i park", BEZ PODAWANIA
 *   PRZYCZYNY ANI ROKU. TWARDA GRANICA ETYCZNA.
 * ⚠⚠ ZESPOŁU OK. 400 BUNKRÓW DAWNEJ FABRYKI AMUNICJI
 *   W BROŻKU-ZASIEKACH NIE WYMIENIAM W OGÓLE — temat
 *   wojenny. TWARDA GRANICA.
 * ⚠ ORANŻERII NIE ROBIĘ TEMATEM — kąt „cytrusy" ZAJĘTY.
 * ⚠ BAŻANCIARNI NIE ROBIĘ TEMATEM — kąt „dziczyzna"
 *   ZAJĘTY.
 * ⚠ NIE TWIERDZĘ, CO UPRAWIANO W TUTEJSZYCH CIEPLARNIACH
 *   — nieustalone.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE MA NA LIŚCIE PRODUKTÓW
 * TRADYCYJNYCH. NIE WYMYŚLAM ŻADNEGO.
 *
 * KĄT: WARZYWNIK PRZY DOMU — co ma sens uprawiać samemu,
 * jeśli się gotuje na co dzień.
 * Kąt od planu Brodów z 1740 roku, na którym ogród warzywny
 * jest równoprawnym elementem barokowego założenia — obok
 * parterów, boskietów i oranżerii — a wcześniej między
 * dworem a jeziorem rósł regularnie założony sad.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że warzywnik traktuje się dziś jako hobby albo dodatek,
 *   a na planie sprzed niemal trzystu lat był wpisany
 *   w kompozycję na równi z ozdobną częścią ogrodu,
 * — ŻE NIE WSZYSTKO OPŁACA SIĘ UPRAWIAĆ — i że to jest
 *   pierwsza rzecz, którą warto sobie powiedzieć,
 * — CO MA NAJWIĘKSZY SENS DLA KOGOŚ, KTO GOTUJE:
 *   — ZIOŁA — bo kupuje się je w pęczkach, a używa
 *     szczyptami, i reszta zwykle się marnuje,
 *     ⚠ PISZĘ O NICH KRÓTKO, BEZ WCHODZENIA W TEMAT
 *       „świeże kontra suszone" (KĄT ZAJĘTY),
 *   — SAŁATY I ROSZPONKA — bo psują się najszybciej
 *     ze wszystkiego, co się kupuje,
 *   — RZODKIEWKA I SZCZYPIOR — bo rosną szybko,
 *   — CUKINIA I DYNIA — bo wymagają najmniej pracy
 *     w stosunku do plonu,
 * — CO ZWYKLE NIE MA SENSU W MAŁYM OGRODZIE: ziemniaki,
 *   cebula, marchew, kapusta — zajmują dużo miejsca,
 *   są tanie i dobrze się przechowują,
 * — ŻE NAJWIĘKSZY BŁĄD TO POSADZIĆ ZA DUŻO NA POCZĄTKU
 *   — jedna grządka doglądana bije trzy zapuszczone,
 * — ŻE DRUGI BŁĄD TO POSADZIĆ TO, CZEGO SIĘ NIE JE,
 *   bo „rośnie łatwo",
 * — ŻE WARZYWNIK ZMIENIA SPOSÓB GOTOWANIA, a nie tylko
 *   zaopatrzenie: zaczyna się od tego, co dojrzało,
 *   a nie od przepisu,
 * — ŻE NADMIAR JEST NIEUNIKNIONY — wszystko dojrzewa naraz
 *   — i że to jest jedyny realny problem warzywnika,
 * — ŻE BALKON I PARAPET TEŻ SIĘ LICZĄ: zioła i sałaty
 *   nie potrzebują ogrodu,
 * — UCZCIWIE: urządzenie nie ma nic wspólnego z uprawą,
 * — ale rozwiązuje dokładnie ten jeden problem, który
 *   warzywnik tworzy: przerabia nadmiar — pesto, przecier,
 *   zupę, mus — w kilka minut, więc to, co dojrzało naraz,
 *   trafia do zamrażarki zamiast na kompost.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH PORAD OGRODNICZYCH CO DO TERMINÓW SIEWU,
 *   NAWOZÓW I ŚRODKÓW OCHRONY ROŚLIN. Piszę WYŁĄCZNIE
 *   z perspektywy kuchni: co warto mieć, bo się to zużyje.
 *   TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI TEZ, ŻE „WŁASNE
 *   JEST ZDROWSZE". TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI ODMIAN HANDLOWYCH.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ⚠⚠ ZERO PRZYCZYN ZNISZCZENIA PAŁACU.
 * — ⚠⚠ ZERO BUNKRÓW I FABRYKI AMUNICJI.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ SĄSIEDZTWA NIEMIECKIEGO POWIATU NIE PORUSZAM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „działka. Nie ogród przy domu — działka" dotyczy
 *   DZIAŁKI JAKO MIEJSCA I ZWYCZAJU. Tutaj chodzi
 *   o WARZYWNIK PRZY DOMU I O DOBÓR TEGO, CO SIĘ SADZI,
 *   Z PUNKTU WIDZENIA KUCHNI.
 * — „ZIOŁA ŚWIEŻE KONTRA SUSZONE" dotyczą FORMY ZIÓŁ.
 * — „składniki prosto z gospodarstwa" dotyczą KUPOWANIA
 *   OD ROLNIKA.
 * — „kompoty i musy z własnych owoców" dotyczą OWOCÓW
 *   I PRZETWORÓW.
 * — „NADMIAR JEDNEGO SKŁADNIKA" dotyczy SYTUACJI
 *   W KUCHNI, nie planowania upraw.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ przyczyny ani roku zniszczenia pałacu.
 * — NIE PODAJĘ, co uprawiano w cieplarniach Brodów.
 * — NIE PODAJĘ powierzchni ani lokalizacji stawów rybnych.
 * — NIE PODAJĘ daty nadania statusu Geoparku UNESCO.
 * — NIE WYMIENIAM bunkrów w Brożku-Zasiekach.
 * — NIE WYMYŚLAM produktu lokalnego ani imprezy kulinarnej.
 * — NIE MYLĘ BRODÓW w powiecie żarskim z Brodami koło
 *   Sulechowa, w świętokrzyskim ani w wielkopolskim.
 * — districts: brak osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka o Brodach pochodzi z 1398 r.,
 *   prawa miejskie miejscowość otrzymała w 1454 r.,
 *   utraciła je w 1945 r., a status miasta odzyskała
 *   z dniem 1 stycznia 2024 r.; miasto liczy niespełna
 *   osiemset czterdzieści osób,
 * — pałac zaczął budować około 1670 r. Ulrich Hiparch
 *   von Promnitz, a korpus główny ukończono w 1680 r.;
 *   20 kwietnia 1740 r. majątek nabył Heinrich von Brühl,
 *   minister Augusta III, i przebudował rezydencję
 *   w latach 1741–1749 według projektu drezdeńskiego
 *   architekta Johanna Christopha Knöffela,
 * — ogrodnikiem w Brodach był Jan Jakub Mencke, który
 *   w 1713 r. projektował Ogród Saski dla Augusta II,
 * — plan założenia z 1740 r., sporządzony przez Christiana
 *   Conrada Francke, dokumentuje osiową kompozycję:
 *   parterre między pałacem a jeziorem, symetryczne boskiety,
 *   oranżerię i ogród warzywny; wcześniej, za Promnitza,
 *   od strony jeziora rósł sad, a ogród warzywny znajdował
 *   się od północy,
 * — w 1807 r. zaczęto przekształcać ogród barokowy
 *   w krajobrazowy, od 1816 r. opiekował się nim angielski
 *   ogrodnik Klemenson, a około 1832 r. powstało „Ustronie
 *   Krystyny"; park liczy dziś około stu hektarów, ma aleje
 *   lipowe przecinające się pod kątem prostym i arboretum
 *   z drzewami sprowadzonymi z Ameryki i Anglii, w tym
 *   dębem białym; zachowały się ruiny oranżerii,
 * — w Brodach stoi brama miejska z 1753 r., a w Bieczu
 *   barokowy kościół z 1721 r.; gmina leży w Geoparku
 *   UNESCO Łuk Mużakowa.
 */
export const BRODY: CityContent = {
  slug: "brody",
  h1: "Thermomix Brody – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Brody (lubuskie) — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Brodach w powiecie żarskim: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brody — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brodach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Brodów w powiecie żarskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całej gminy.",

  highlights: highlightyStandardowe("Brody"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na planie z 1740 roku warzywnik jest równie ważny jak część ozdobna.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brodach – jak wygląda prezentacja?",
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
      id: "warzywnik",
      heading: "Ogród warzywny na planie z 1740 roku — czyli co warto uprawiać samemu",
      paragraphs: [
        "Plan brodzkiego założenia sporządzony w 1740 roku przez Christiana Conrada Francke pokazuje rzecz, która dziś wydaje się zaskakująca. Obok parterru rozciągniętego między pałacem a jeziorem, obok symetrycznych boskietów i oranżerii, wrysowany jest ogród warzywny. Nie gdzieś z boku, nie jako zaplecze — jako element kompozycji. Wcześniej, za Promnitzów, od strony jeziora rósł regularnie założony sad, a warzywnik zajmował część północną. Ogrodnikiem bywał tu Jan Jakub Mencke, ten sam, który w 1713 roku projektował Ogród Saski dla Augusta II.",
        "Dziś warzywnik traktuje się jako hobby albo miły dodatek. Wtedy był po prostu częścią tego, jak dom działa. I chciałabym napisać o nim właśnie z tej strony — nie ogrodniczej, tylko kuchennej: co ma sens uprawiać samemu, jeśli się naprawdę gotuje.",
        "Pierwsza rzecz, którą warto sobie powiedzieć: nie wszystko się opłaca. To nie jest zniechęcanie — to jest warunek, żeby warzywnik przetrwał drugi rok.",
        "Największy sens mają cztery grupy. Zioła — bo kupuje się je w pęczkach, a używa szczyptami, więc reszta zwykle ląduje w koszu; dwie donice rozwiązują to całkowicie. Sałaty i roszponka — bo psują się najszybciej ze wszystkiego, co się przynosi ze sklepu, a zerwane wprost przed obiadem są czymś zupełnie innym. Rzodkiewka i szczypior — bo rosną szybko i dają efekt, zanim zdąży się zniechęcić. I wreszcie cukinia z dynią — bo wymagają najmniej pracy w stosunku do tego, co dają.",
        "A co zwykle nie ma sensu w małym ogrodzie? Ziemniaki, cebula, marchew, kapusta. Zajmują dużo miejsca, są tanie przez cały rok i dobrze się przechowują, więc nie ma czego ratować. To nie znaczy, że nie wolno — znaczy tylko, że ta sama grządka pod sałatą zwróci się wielokrotnie szybciej.",
        "Dwa najczęstsze błędy są przy tym zawsze te same. Pierwszy: posadzić za dużo na początku. Jedna grządka, którą się dogląda, bije trzy zapuszczone — a zapał z marca ma to do siebie, że w lipcu bywa mniejszy. Drugi: posadzić to, czego się nie je, dlatego że „rośnie łatwo”. Botwina, której nikt w domu nie lubi, rośnie wspaniale i idzie na kompost.",
        "Warto też wiedzieć, że warzywnik zmienia nie tyle zaopatrzenie, ile sposób gotowania. Przestaje się zaczynać od przepisu, a zaczyna od tego, co dojrzało. To bywa niewygodne przez pierwszy sezon i bardzo wciągające potem.",
        "Z tego bierze się jedyny realny problem, jaki warzywnik tworzy: nadmiar. Wszystko dojrzewa naraz. Przez trzy tygodnie nie ma pomidorów, a potem jest ich dwadzieścia kilogramów; cukinia potrafi w tydzień urosnąć do rozmiarów, których nikt nie planował. I to nie jest żart — to najczęstszy powód, dla którego ludzie po dwóch latach rezygnują.",
        "Jeszcze jedno, dla porządku: balkon i parapet też się liczą. Zioła i sałaty nie potrzebują ogrodu, a to właśnie one dają największą różnicę w codziennym gotowaniu.",
        "Teraz uczciwie o sprzęcie. Thermomix nie ma nic wspólnego z uprawą i byłoby nieuczciwe udawać inaczej.",
        "Rozwiązuje natomiast dokładnie ten jeden problem, który warzywnik tworzy — nadmiar. Pesto z całego pęczka bazylii w dwie minuty. Przecier z pomidorów, które dojrzały wszystkie w tym samym tygodniu. Zupa krem z cukinii, której było za dużo. Mus z owoców z sadu. To wszystko idzie potem do zamrażarki albo do słoików — i właśnie dlatego warzywnik przestaje być sezonową gonitwą, a zaczyna mieć sens przez cały rok. Szczerze mówiąc, nie znam lepszego zastosowania dla tego urządzenia niż sierpień w domu z ogrodem.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brodach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w ogrodzie coś, czego jest w tym tygodniu za dużo — powiedzcie przy umawianiu. Chętnie z tego ugotuję zamiast przywozić swoje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brodach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla brodzkiej rodziny",
      paragraphs: [
        "Brody są jednym z najmniejszych miast w Polsce — liczą niespełna osiemset czterdzieści osób, a cała gmina nieco ponad trzy tysiące na dwustu czterdziestu kilometrach kwadratowych. Pierwsza wzmianka o miejscowości pochodzi z 1398 roku, prawa miejskie otrzymała w 1454, utraciła w 1945, a status miasta odzyskała z dniem 1 stycznia 2024 roku. Tutejszy pałac zaczął budować około 1670 roku Ulrich Hiparch von Promnitz, a korpus główny ukończono w 1680; 20 kwietnia 1740 majątek nabył Heinrich von Brühl, minister Augusta III, i przebudował rezydencję w latach 1741–1749 według projektu drezdeńskiego architekta Johanna Christopha Knöffela. Ogrodnikiem bywał tu Jan Jakub Mencke, który w 1713 roku projektował Ogród Saski dla Augusta II, a plan założenia z 1740 roku sporządzony przez Christiana Conrada Francke dokumentuje osiową kompozycję z parterrem między pałacem a jeziorem, symetrycznymi boskietami, oranżerią i ogrodem warzywnym. Od 1807 roku ogród barokowy przekształcano w krajobrazowy, od 1816 opiekował się nim angielski ogrodnik Klemenson, a około 1832 powstało „Ustronie Krystyny”. Park liczy dziś około stu hektarów, ma aleje lipowe przecinające się pod kątem prostym i arboretum z drzewami sprowadzonymi z Ameryki i Anglii, w tym dębem białym; zachowały się ruiny oranżerii. W mieście stoi brama miejska z 1753 roku, w Bieczu barokowy kościół z 1721, a cała gmina leży w Geoparku UNESCO Łuk Mużakowa.",
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

  districtsHeading: "Do których miejscowości gminy Brody dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — Brodów, Biecza, Brożka, Datynia, Grodziszcza, Jałowic, Janiszowic, Jasienicy, Jezior Dolnych i Wysokich, Koła, Kumiałtowic, Nabłota, Proszowa, Suchodołu, Wierzchna, Żytniego Młyna i Marianki.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza gminę Brody też przyjadę",
  nearbyParagraphs: [
    "Lubsko, Tuplice, Trzebiel, Gubin, Żary i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubsko", "Tuplice", "Trzebiel", "Gubin", "Żary"],

  about: blokOMnie("do Brodów", "w Brodach", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Brodów bez dodatkowej opłaty?",
      answer:
        "Tak, do całej gminy — Biecza, Grodziszcza, Jasienicy, Jezior Wysokich i pozostałych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja. Nazwa jest częsta, więc dla porządku: chodzi o Brody w powiecie żarskim w województwie lubuskim, a nie o Brody koło Sulechowa, w świętokrzyskim ani w wielkopolskim.",
    },
    ...faqWspolne("w Brodach"),
    {
      question: "Co najbardziej opłaca się uprawiać samemu?",
      answer:
        "Zioła, bo kupuje się je w pęczkach, a używa szczyptami. Sałaty i roszponkę, bo psują się najszybciej ze wszystkiego, co przynosimy ze sklepu. Rzodkiewkę i szczypior, bo rosną szybko. Oraz cukinię i dynię, bo wymagają najmniej pracy w stosunku do plonu. Ziemniaki, cebula, marchew i kapusta zwykle się nie opłacają — są tanie i dobrze się przechowują.",
    },
    {
      question: "Jaki jest największy problem z własnym warzywnikiem?",
      answer:
        "Nadmiar. Wszystko dojrzewa naraz: przez trzy tygodnie nie ma pomidorów, a potem jest ich kilkanaście kilogramów. To najczęstszy powód, dla którego ludzie po dwóch sezonach rezygnują — i dokładnie ten problem rozwiązuje szybkie przerobienie plonu na pesto, przecier, zupę albo mus do zamrożenia.",
    },
    {
      question: "Czy warzywnik jest możliwy bez ogrodu?",
      answer:
        "Tak — zioła i sałaty rosną na balkonie i na parapecie, a to właśnie one dają największą różnicę w codziennym gotowaniu. Warzywnik zmienia zresztą nie tyle zaopatrzenie, ile sposób gotowania: przestaje się zaczynać od przepisu, a zaczyna od tego, co dojrzało.",
    },
  ],

  geo: { lat: 51.7869, lng: 14.7753 },
};
