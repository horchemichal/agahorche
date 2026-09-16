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
 * GÓRZNO — powiat brodnicki, woj. kujawsko-pomorskie,
 * ZIEMIA DOBRZYŃSKA, w Górznieńsko-Lidzbarskim Parku
 * Krajobrazowym.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 378 mieszkańców (GUS 31.12.2024),
 * 3,4 km² — NAJWIĘKSZE OBSZAROWO MIASTO Z TEJ FALI,
 * gęstość 401,7 os./km² — NAJNIŻSZA. 134 m n.p.m.
 * CAŁA GMINA MIEJSKO-WIEJSKA: 3 718 osób, 119,7 km²,
 * 31 os./km² — najrzadziej zaludniona gmina tej fali.
 * MIEJSCOWOŚCI: miasto + OSIEM WSI — Czarny Bryńsk,
 * Fiałki, Gołkowo, Górzno-Wybudowanie, Miesiączkowo,
 * Szczutowo, Szynkówko, Zaborowo.
 * ⚠ LICZBY SOŁECTW NIE USTALONO.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ GÓRZNO
 *   W TYM WOJEWÓDZTWIE.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,1981 / 19,6386.
 * ⚠ Serwis gminy NIE PODAJE liczby mieszkańców —
 *   kierunku ewentualnego błędu urzędu NIE DA SIĘ
 *   USTALIĆ. Nie piszę o zawyżaniu.
 * ⚠ en.wikipedia podaje dla gminy 3 955 (spis 2011)
 *   przy 119,38 km² — spójne z trendem. Brak błędu.
 *
 * ⚠⚠⚠ PUŁAPKA POTWIERDZONA EKSPERYMENTALNIE —
 *   DWA GÓRZNA I PRZEJĘTE ADRESY:
 *   ISTNIEJE ODRĘBNA GMINA WIEJSKA GÓRZNO
 *   W WOJ. MAZOWIECKIM (powiat garwoliński) — i to ONA
 *   zajmuje adres samorzad.gov.pl/web/gmina-gorzno
 *   ORAZ gorzno.ugm.pl. Jej wykaz sołectw (Chęciny,
 *   Gąsów, Goździk, Górzno-Kolonia, Józefów, Kobyla Wola,
 *   Łąki, Mierżączka, Piaski) nie ma ani jednej nazwy
 *   wspólnej z gminą brodnicką, a ten sam serwis
 *   publikuje artykuł o „MAZOWIECKIM Kongresie KGW
 *   w Górznie".
 *   WŁAŚCIWY SERWIS GMINY BRODNICKIEJ TO gorzno.pl.
 *   ⚠ Powiat garwoliński leży w MAZOWIECKIM, nie
 *   w lubelskim — konkurencyjna gmina jest JEDNA,
 *   za to groźniejsza, niż się wydaje.
 *   ⚠ GÓRZNO-WYBUDOWANIE (wieś gminy brodnickiej) kontra
 *   GÓRZNO-KOLONIA (sołectwo gminy mazowieckiej) —
 *   nazwy niemal bliźniacze.
 * ⚠ ODMIANA: D. GÓRZNA, Ms. W GÓRZNIE,
 *   przym. GÓRZNIEŃSKI.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — hasła nie ma w słowniku.
 *   ⭐ ALE PRZYMIOTNIK „GÓRZNIEŃSKI" JEST PRZESĄDZONY
 *   URZĘDOWĄ NAZWĄ GÓRZNIEŃSKO-LIDZBARSKIEGO PARKU
 *   KRAJOBRAZOWEGO. Nie „górzneński", nie „górzniański".
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 * ⚠ JEZIORO PRZY MIEŚCIE MA TRZY NAZWY W OBIEGU:
 *   Górzeńskie (rejestr nazw geograficznych),
 *   Górznieńskie i po prostu Górzno. NIE ROZSTRZYGAM —
 *   piszę opisowo „jezioro przy mieście".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1239 — pierwsze wzmianki o Górznie.
 * — 1327 — PRAWA MIEJSKIE OD BISKUPA PŁOCKIEGO FLORIANA.
 *   ⚠ NADAWCĘ WYMIENIAM JAKO OSOBĘ NADAJĄCĄ PRAWA,
 *   bez rozwijania wątku wyznaniowego.
 * — 1385 — ponowne nadanie praw miejskich.
 * — Za Zygmunta III — TRZY JARMARKI DOROCZNE
 *   I TARG TYGODNIOWY. ⚠ DNIA TYGODNIA NIE USTALONO.
 * — ⚠⚠⚠ RDZEŃ KĄTA — SPIS RZEMIOSŁA Z 1595 R.
 *   (DWA NIEZALEŻNE ŹRÓDŁA, LICZBY IDENTYCZNE):
 *   11 SZEWCÓW
 *    8 KRAWCÓW
 *    3 KOWALI
 *    2 KUŚNIERZY
 *   = 24 RZEMIEŚLNIKÓW
 *   oraz 43 MIESZCZAN UTRZYMUJĄCYCH SIĘ Z UPRAWY PÓL.
 *   ⚠ WYJAŚNIENIE („szewców jest najwięcej, bo buty
 *   zużywały się najszybciej") TO MOJE ODCZYTANIE
 *   PROPORCJI, nie cytat ze źródła. Piszę o nim
 *   jako o własnym wniosku.
 * — 1580 — wizyta króla Stefana Batorego.
 * — 1810 — około 673 mieszkańców.
 * — 1921 — wybory do Rady Miejskiej, wybrano 10 radnych.
 * — UKŁAD MIASTA: DWIE BRAMY MIEJSKIE, PROSTOKĄTNY RYNEK.
 * — Zamek biskupów płockich stał na wzgórzu nad jeziorem.
 *   ⚠ WYMIARÓW NIE USTALONO.
 * — ⚠⚠ XVIII w.: źródło pisze o „coraz większej liczbie
 *   młynów, browarów, rzeźni, gorzelni i cegielni" —
 *   JEDNO ZDANIE ZAWIERA TRZY TEMATY Z LISTY WYŁĄCZONEJ.
 *   Zostają młyny i cegielnie, ale BEZ LICZB, więc
 *   NIE UŻYWAM TEGO FAKTU WCALE. TWARDA GRANICA.
 * — ⚠ WODOCIĄGÓW, GAZOWNI, ELEKTROWNI, KOLEI
 *   I MLECZARNI NIE USTALONO.
 *
 * GÓRZNIEŃSKO-LIDZBARSKI PARK KRAJOBRAZOWY:
 * — utworzony w 1990 r. na mocy porozumienia dwóch
 *   wojewodów; leży w TRZECH WOJEWÓDZTWACH
 *   (kujawsko-pomorskim, mazowieckim,
 *   warmińsko-mazurskim) i obejmuje sześć gmin,
 * — POWIERZCHNIA: ok. 27,8 TYS. HA.
 *   ⚠⚠ TRZY RÓŻNE LICZBY W OBIEGU: 27 764,3 ha,
 *   27 966 ha oraz 18 966 ha (en.wikipedia). Ta ostatnia
 *   różni się od pozostałych o dziewięć tysięcy hektarów
 *   i wygląda na literówkę w cyfrze wiodącej.
 *   PODAJĘ ZAOKRĄGLONE „blisko dwadzieścia osiem tysięcy
 *   hektarów". NIE PODAJĘ TRZECH WARTOŚCI NARAZ.
 * — lesistość ok. 70 %; SIEDEM REZERWATÓW
 *   (⚠ en.wikipedia podaje sześć — używam siedmiu,
 *   za dwoma zgodnymi źródłami); największy to MSZAR
 *   PŁOCICZNO, ponad 182 ha,
 * — ok. 900 gatunków roślin naczyniowych i ok. 250
 *   gatunków kręgowców, w tym ponad 200 pod ochroną,
 * — NAJWYŻSZE WZNIESIENIE: SARNIA GÓRA, 190,4 m n.p.m.
 *   Miasto leży na 134 m n.p.m. — RÓŻNICA 56,4 M
 *   w promieniu kilku kilometrów,
 * — WODY: 29 JEZIOR POWYŻEJ 1 HA o łącznej powierzchni
 *   ok. 490 ha; mokradła ok. 5 % powierzchni parku;
 *   rzeka BRYNICA ma w granicach parku ok. 18 km
 *   i „nabiera charakteru potoku górskiego",
 * — największe jeziora: LEŹNO WIELKIE 86,2 ha
 *   (głęb. maks. 14,5 m, średnia 5,5 m) i SAMIŃSKIE
 *   55,6 ha.
 *   ⚠⚠ GŁĘBOKOŚCI POZOSTAŁYCH JEZIOR NIE UŻYWAM —
 *   kąt „głębokość maksymalna kontra średnia" jest zajęty
 *   (Więcbork). TWARDA GRANICA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Górzno. Sprawdzono wszystkie dziesięć kategorii
 *   wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠⚠ PUŁAPKA ROZBROJONA BEZPOŚREDNIO NA KARCIE:
 *   „TWARÓG Z KUJAW I ZIEMI DOBRZYŃSKIEJ" (31.07.2013,
 *   Produkty mleczne) kusi podwójnie, bo Górzno LEŻY
 *   w ziemi dobrzyńskiej. Karta produktu na gov.pl podaje
 *   WYŁĄCZNIE WOJEWÓDZTWO — pola „powiat" i „gmina"
 *   są PUSTE. Produkt ma zasięg regionalny i NIE MOŻE
 *   być przypisany Górznu. NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: JEDENASTU SZEWCÓW, DWÓCH KUŚNIERZY —
 * proporcje zapasu wynikają z tempa zużycia, a nie
 * z tego, co ciekawe.
 * Kąt od spisu z 1595 r.: w Górznie pracowało jedenastu
 * szewców i dwóch kuśnierzy. Pięć i pół raza więcej
 * szewców, bo buty zużywały się najszybciej, a kożuch
 * służył latami. Struktura warsztatów odbijała tempo
 * zużycia, nie prestiż zawodu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że spis z 1595 r. podaje jedenastu szewców, ośmiu
 *   krawców, trzech kowali i dwóch kuśnierzy — razem
 *   dwudziestu czterech rzemieślników przy czterdziestu
 *   trzech mieszczanach żyjących z pola,
 * — ⚠ że wyjaśnienie tych proporcji tempem zużycia
 *   jest MOIM ODCZYTANIEM, nie cytatem,
 * — ⚠⚠ ŻE DOMOWA SZAFKA BUDUJE SIĘ ODWROTNIE:
 *   KUPUJEMY TO, CO CIEKAWE, A NIE TO, CO SCHODZI —
 *   TO JEST RDZEŃ. Stąd cztery rodzaje octu i jeden
 *   zapas mąki,
 * — ⚠⚠ ZASADA: PROPORCJE USTALA SIĘ WEDŁUG TEMPA
 *   ZUŻYCIA. Sprawdzić, co kończy się pierwsze
 *   i najczęściej — i tylko tego trzymać podwójnie.
 *   Wszystko inne po jednym,
 * — JAK TO SPRAWDZIĆ BEZ WYSIŁKU: przez dwa tygodnie
 *   zapisywać wyłącznie to, co się skończyło.
 *   Nie listy zakupów, nie stanu szafki — tylko rzeczy,
 *   które wyszły. Ta lista jest krótka i zaskakująco
 *   powtarzalna,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA TEJ SAMEJ ZASADY:
 *   PODWAJANIE CZEGOŚ, CO SCHODZI WOLNO, TO PIENIĄDZE
 *   STOJĄCE W SZAFCE. Przyprawa kupiona „bo była
 *   w promocji" i używana dwa razy w roku nie jest
 *   zapasem, tylko dekoracją,
 * — ⚠ ŻE NIKOGO Z TEGO NIE ROZLICZAM i że nie namawiam
 *   do wyrzucania czegokolwiek — chodzi wyłącznie
 *   o to, czego dokupywać podwójnie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie potrafi zmienić tę
 *   listę i warto o tym wiedzieć z góry. Rzeczy, które
 *   zaczyna się robić samemu — starte, zmielone,
 *   rozdrobnione — przesuwają zużycie z produktów
 *   gotowych na surowce. Lista „co się kończy pierwsze"
 *   po kilku miesiącach wygląda inaczej i trzeba ją
 *   przejrzeć drugi raz.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO SUCHEGO ZAPASU I SPIŻARNI — kąt zajęty
 *   (Dobiegniew). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o TO, JAK TRZYMAĆ kasze i mąki i po czym poznać,
 *   że są stare; TUTAJ wyłącznie o TO, ILE CZEGO MIEĆ.
 *   Ani jednego zdania o przechowywaniu.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS I MROŻENIA — kąt zajęty
 *   (Stopnica).
 * — ⚠⚠ ZERO SPRZĘTU JEDNOZADANIOWEGO I PYTAŃ O ZAKUP —
 *   kąt zajęty (Łasin, ta sama fala). Tam rozstrzyga się,
 *   CZY KUPIĆ URZĄDZENIE; TUTAJ ILE CZEGO TRZYMAĆ
 *   W SZAFCE. NIE POWTARZAM pytania „ile razy w ostatnim
 *   półroczu".
 * — ⚠⚠ ZERO ZAKUPÓW I LIST ZAKUPÓW — kąty zajęte (Kock,
 *   Czeladź, Opole, Goniądz, Wejherowo). Dwa tygodnie
 *   zapisywania dotyczy TEGO, CO SIĘ SKOŃCZYŁO, nie
 *   tego, co się kupuje.
 * — ⚠⚠ ZERO GŁĘBOKOŚCI JEZIOR — kąt zajęty (Więcbork).
 * — ⚠ ZERO PRZYPRAW CAŁYCH KONTRA MIELONYCH — kąt zajęty
 *   (Pieniężno).
 * — ⚠ ZERO PRODUKTÓW GOTOWYCH KONTRA ROBIONYCH SAMEMU —
 *   kąt zajęty (Łabiszyn). Wspominam o tym jednym
 *   zdaniem przy sprzęcie i nie rozwijam.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   przy zapasie to najkrótsza droga do wpadki. Piszę
 *   o ILOŚCI, nigdy o tym, jak długo coś się nadaje.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO BITWY ZE SZWEDAMI Z 11–12 LUTEGO 1629 R.
 *   Na stronie urzędu podana z liczbami: cztery tysiące
 *   żołnierzy polskich przeciwko dziesięciu tysiącom
 *   Szwedów. TO JEST NAJBARDZIEJ „DUMNY", NAJBARDZIEJ
 *   LICZBOWY I NAJBARDZIEJ RZUCAJĄCY SIĘ W OCZY FAKT
 *   O GÓRZNIE — i jest w całości wojenny. Stoi
 *   w pierwszym akapicie historii miasta.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠ ZERO BITWY PRUSAKÓW Z FRANCUZAMI Z 1806 R.
 * — ⚠⚠ ZERO POŻARU MIASTA Z 1773 R.
 * — ⚠⚠ ZERO „WYZWOLENIA PRZEZ ARMIĘ RADZIECKĄ
 *   21 STYCZNIA 1945".
 * — ⚠⚠ ZERO BROWARÓW, RZEŹNI I GORZELNI — jedno zdanie
 *   na stronie urzędu zawiera je wszystkie naraz.
 * — ⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ — Wirtualny Sztetl
 *   w pierwszej dziesiątce wyników.
 * — ⚠ ZERO SZPITALA DLA UBOGICH Z 1618 R. — wątek
 *   ubóstwa. Szkołę z tego samego roku też pomijam,
 *   bo źródło wymienia je razem.
 * — ⚠ ZERO USTANOWIENIA PATRONKI MIASTA (2015) —
 *   wątek wyznaniowy.
 * — ⚠ ZERO ZAMKU JAKO WĄTKU WŁADZY BISKUPIEJ —
 *   wymieniam go raz, jako budowlę na wzgórzu.
 * — ⚠ SŁYNNYCH MIESZKAŃCÓW NIE USTALONO — brak ryzyka
 *   afery, ale też brak materiału. ⚠ UWAGA: zapytania
 *   o „znanych z Górzna" zwracają wyniki z GMINY
 *   MAZOWIECKIEJ. To szum, nie materiał.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 * — ZERO bezrobocia, salda migracji i przyrostu
 *   naturalnego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „SUCHY ZAPAS" (Dobiegniew) dotyczy PRZECHOWYWANIA
 *   I ROZPOZNAWANIA STAROŚCI. ⚠⚠ TO JEST NAJBLIŻSZY KĄT.
 *   TUTAJ nie ma ani jednego zdania o tym, jak coś
 *   trzymać — jest wyłącznie PYTANIE, ILE CZEGO.
 * — „LINIA BOCZNA" (Łasin) dotyczy DECYZJI O ZAKUPIE
 *   SPRZĘTU.
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy ZAMRAŻARKI.
 * — „PRZYPRAWY CAŁE KONTRA MIELONE" (Pieniężno) dotyczy
 *   POSTACI PRZYPRAWY.
 * TUTAJ chodzi o PROPORCJE MIĘDZY PRODUKTAMI W SZAFCE —
 * i o to, że wyznacza je tempo zużycia, a nie ciekawość.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby sołectw — nie ustalono.
 * — NIE PODAJĘ powierzchni parku z en.wikipedii —
 *   różni się od dwóch innych źródeł o 9 000 ha.
 * — NIE PODAJĘ głębokości jezior.
 * — NIE ROZSTRZYGAM nazwy jeziora przy mieście.
 * — NIE TWIERDZĘ, że źródło z 1595 r. wyjaśnia proporcje
 *   rzemiosł — to moje odczytanie.
 * — NIE PISZĘ o młynach, browarach, rzeźniach ani
 *   gorzelniach z XVIII w.
 * — NIE PRZYPISUJĘ Górznu twarogu z Kujaw i Ziemi
 *   Dobrzyńskiej ani żadnego innego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 * — NIE CYTUJĘ serwisów gminy mazowieckiej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Górzno leży w ziemi dobrzyńskiej, w powiecie
 *   brodnickim, w Górznieńsko-Lidzbarskim Parku
 *   Krajobrazowym; jest miastem w gminie miejsko-wiejskiej
 *   i liczy 1 378 mieszkańców (GUS, 31.12.2024)
 *   na 3,4 km², sto trzydzieści cztery metry nad poziomem
 *   morza; cała gmina ma 3 718 osób na 119,7 km²
 *   i obejmuje miasto oraz osiem wsi,
 * — pierwsze wzmianki o Górznie pochodzą z 1239 roku,
 *   prawa miejskie nadał mu w 1327 biskup płocki Florian,
 *   a w 1385 nadano je ponownie,
 * — za panowania Zygmunta III miasto miało trzy jarmarki
 *   doroczne i targ tygodniowy,
 * — spis z 1595 roku wykazał w Górznie jedenastu szewców,
 *   ośmiu krawców, trzech kowali i dwóch kuśnierzy —
 *   razem dwudziestu czterech rzemieślników — oraz
 *   czterdziestu trzech mieszczan utrzymujących się
 *   z uprawy pól,
 * — w 1580 roku odwiedził miasto król Stefan Batory,
 *   w 1810 mieszkało tu około sześciuset siedemdziesięciu
 *   trzech ludzi, a w 1921 wybrano dziesięciu radnych
 *   Rady Miejskiej,
 * — miasto miało dwie bramy i prostokątny rynek,
 *   a na wzgórzu nad jeziorem stał zamek,
 * — Górznieńsko-Lidzbarski Park Krajobrazowy utworzono
 *   w 1990 roku; obejmuje blisko dwadzieścia osiem
 *   tysięcy hektarów w trzech województwach i sześciu
 *   gminach, lesistość sięga siedemdziesięciu procent,
 *   jest w nim siedem rezerwatów — największy, Mszar
 *   Płociczno, ma ponad sto osiemdziesiąt dwa hektary —
 *   oraz około dziewięciuset gatunków roślin naczyniowych
 *   i około dwustu pięćdziesięciu gatunków kręgowców,
 * — najwyższe wzniesienie parku, Sarnia Góra, ma
 *   sto dziewięćdziesiąt i cztery dziesiąte metra nad
 *   poziomem morza — o pięćdziesiąt sześć metrów więcej
 *   niż samo miasto,
 * — w parku jest dwadzieścia dziewięć jezior większych
 *   niż hektar o łącznej powierzchni około czterystu
 *   dziewięćdziesięciu hektarów; największe to Leźno
 *   Wielkie (86,2 ha) i Samińskie (55,6 ha), a rzeka
 *   Brynica płynie w granicach parku przez około
 *   osiemnaście kilometrów.
 */
export const GORZNO: CityContent = {
  slug: "gorzno",
  h1: "Thermomix Górzno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Górzno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Górznie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Górzno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Górznie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Górzna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Górzno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Podwójnie warto trzymać to, co kończy się pierwsze — nie to, co najciekawsze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Górznie – jak wygląda prezentacja?",
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
      id: "jedenastu-szewcow",
      heading: "Jedenastu szewców, dwóch kuśnierzy",
      paragraphs: [
        "Spis z 1595 roku podaje dokładny skład rzemieślniczy Górzna: jedenastu szewców, ośmiu krawców, trzech kowali i dwóch kuśnierzy. Razem dwudziestu czterech rzemieślników, przy czterdziestu trzech mieszczanach żyjących z uprawy pól.",
        "Szewców jest pięć i pół raza więcej niż kuśnierzy. To moje odczytanie, nie zapis w źródle — ale trudno o inne wyjaśnienie niż najprostsze: buty zużywały się najszybciej, a kożuch służył latami. Struktura warsztatów odbijała tempo zużycia, nie prestiż zawodu.",
        "Domowa szafka buduje się dokładnie odwrotnie i to jest cała rzecz, o którą tu chodzi. Kupujemy to, co ciekawe, a nie to, co schodzi.",
        "Stąd bierze się widok, który znam z wielu kuchni: cztery rodzaje octu i jeden zapas mąki. Trzy gatunki papryki w proszku i jedna paczka soli. Rzeczy kupione z zaciekawienia stoją, a te używane codziennie kończą się w najgorszym momencie.",
        "Zasada jest jednozdaniowa: proporcje zapasu ustala się według tempa zużycia. Sprawdź, co kończy się pierwsze i najczęściej — i tylko tego trzymaj podwójnie. Wszystko inne po jednym.",
        "Sprawdzenie nie wymaga żadnego wysiłku ani tabelki. Przez dwa tygodnie zapisuj wyłącznie to, co się skończyło. Nie listę zakupów, nie stan szafki — tylko rzeczy, które faktycznie wyszły. Ta lista jest krótka i zaskakująco powtarzalna, a po dwóch tygodniach wiadomo, kto w Waszej kuchni jest szewcem, a kto kuśnierzem.",
        "Teraz druga strona tej samej zasady, bo sama w sobie jest tylko połową. Podwajanie czegoś, co schodzi wolno, to pieniądze stojące w szafce. Przyprawa kupiona w promocji i używana dwa razy w roku nie jest zapasem, tylko dekoracją — i zajmuje miejsce tam, gdzie powinna stać druga paczka czegoś, co naprawdę się kończy.",
        "Nie zamierzam przy tym nikogo z tego rozliczać ani namawiać do wyrzucania czegokolwiek. Rzecz dotyczy wyłącznie tego, czego dokupywać podwójnie przy najbliższych zakupach.",
        "Uczciwie o sprzęcie, bo tu jest realna zmiana, o której warto wiedzieć z góry. Urządzenie potrafi tę listę przestawić.",
        "Rzeczy, które zaczyna się robić samemu — starte, zmielone, rozdrobnione — przesuwają zużycie z produktów gotowych na surowce. Po kilku miesiącach lista „co kończy się pierwsze” wygląda inaczej niż dziś i warto ją wtedy przejrzeć drugi raz, zamiast kupować dalej po staremu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Górznie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego u Was kończy się najczęściej — dobiorę dania właśnie z tego, zamiast przywozić składniki, których i tak nie kupujecie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Górznie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla górznieńskiej rodziny",
      paragraphs: [
        "Górzno leży w ziemi dobrzyńskiej, w powiecie brodnickim, w Górznieńsko-Lidzbarskim Parku Krajobrazowym; jest miastem w gminie miejsko-wiejskiej i liczy blisko tysiąc czterysta mieszkańców na trzech i czterech dziesiątych kilometra kwadratowego, sto trzydzieści cztery metry nad poziomem morza. Cała gmina ma ponad trzy i pół tysiąca osób na stu dwudziestu kilometrach kwadratowych i obejmuje miasto oraz osiem wsi. Pierwsze wzmianki pochodzą z 1239 roku, prawa miejskie nadał miastu w 1327 biskup płocki Florian, a w 1385 nadano je ponownie. Za panowania Zygmunta III Górzno miało trzy jarmarki doroczne i targ tygodniowy, a spis z 1595 roku wykazał tu jedenastu szewców, ośmiu krawców, trzech kowali i dwóch kuśnierzy — razem dwudziestu czterech rzemieślników — oraz czterdziestu trzech mieszczan utrzymujących się z uprawy pól. W 1580 roku odwiedził miasto król Stefan Batory, w 1810 mieszkało tu około sześciuset siedemdziesięciu trzech ludzi, a w 1921 wybrano dziesięciu radnych Rady Miejskiej. Miasto miało dwie bramy i prostokątny rynek, a na wzgórzu nad jeziorem stał zamek. Park krajobrazowy utworzono w 1990 roku: obejmuje blisko dwadzieścia osiem tysięcy hektarów w trzech województwach i sześciu gminach, lesistość sięga siedemdziesięciu procent, jest w nim siedem rezerwatów — największy, Mszar Płociczno, ma ponad sto osiemdziesiąt dwa hektary — oraz około dziewięciuset gatunków roślin naczyniowych i około dwustu pięćdziesięciu gatunków kręgowców. Najwyższe wzniesienie, Sarnia Góra, ma sto dziewięćdziesiąt i cztery dziesiąte metra nad poziomem morza, czyli o pięćdziesiąt sześć metrów więcej niż samo miasto. Jezior większych niż hektar jest dwadzieścia dziewięć, o łącznej powierzchni około czterystu dziewięćdziesięciu hektarów — największe to Leźno Wielkie i Samińskie — a rzeka Brynica płynie w granicach parku przez około osiemnaście kilometrów.",
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

  districtsHeading: "Do których części Górzna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich ośmiu wsi w gminie: Czarnego Bryńska, Fiałek, Gołkowa, Górzna-Wybudowania, Miesiączkowa, Szczutowa, Szynkówka i Zaborowa.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Górzno też przyjadę",
  nearbyParagraphs: [
    "Brodnica, Rypin, Lidzbark i Nowe Miasto Lubawskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Brodnica", "Rypin", "Lidzbark", "Nowe Miasto Lubawskie"],

  about: blokOMnie("do Górzna", "w Górznie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Górzna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich ośmiu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Górzno jest miastem w gminie miejsko-wiejskiej w powiecie brodnickim — i to inna miejscowość niż gmina Górzno w województwie mazowieckim.",
    },
    ...faqWspolne("w Górznie"),
    {
      question: "Czego warto trzymać w szafce podwójnie?",
      answer:
        "Tego, co kończy się pierwsze i najczęściej — a nie tego, co najciekawsze. Najprostszy sposób, żeby to ustalić: przez dwa tygodnie zapisuj wyłącznie rzeczy, które się skończyły. Nie listę zakupów ani stanu szafki, tylko to, co faktycznie wyszło. Lista jest krótka i powtarzalna. Podwajanie czegoś, co schodzi wolno, to tylko pieniądze stojące w szafce.",
    },
    {
      question: "Czy Thermomix zmienia to, co trzeba mieć w domu?",
      answer:
        "Tak i warto o tym wiedzieć z góry. Rzeczy, które zaczyna się robić samemu — starte, zmielone, rozdrobnione — przesuwają zużycie z produktów gotowych na surowce. Po kilku miesiącach lista „co kończy się pierwsze” wygląda inaczej niż dziś, więc warto ją wtedy przejrzeć drugi raz, zamiast kupować dalej po staremu.",
    },
  ],

  geo: { lat: 53.1981, lng: 19.6386 },
};
