import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * ZAKROCZYM — powiat nowodworski, woj. mazowieckie.
 * MIASTO 3 127 (GUS 31.12.2024), 20,0 km², 156,6 os./km².
 * Gmina miejsko-wiejska: 5 845 osób, 71,7 km², 17 sołectw.
 * Leży na skarpie nadwiślańskiej, około 35 km na północny
 * zachód od Warszawy; charakterystyczne są wąwozy lessowe.
 *
 * ⚠⚠ ODMIANA — POTWIERDZONA SŁOWNIKOWO, UWAGA NA DOPEŁNIACZ:
 *   D. ZAKROCZYMIA (⚠ NIE „Zakroczymu"!),
 *   Ms. W ZAKROCZYMIU, N. Zakroczymiem,
 *   przymiotnik ZAKROCZYMSKI,
 *   mieszkaniec ZAKROCZYMIANIN / ZAKROCZYMIANKA.
 *   ⚠ SPRAWDZIĆ KAŻDY DOPEŁNIACZ W PLIKU. TWARDA GRANICA.
 * ⚠ HOMONIMY MYLĄCE: ZAKRZEW (kilka, m.in. pod Radomiem —
 *   to samo województwo), ZAKRZÓWEK (lubelskie i dzielnica
 *   Krakowa), ZAKRZEWO (kujawsko-pomorskie, wielkopolskie,
 *   pomorskie). Wyszukiwarka miesza je z Zakroczymiem.
 *
 * HISTORIA — NAJBOGATSZA W CAŁEJ FALI:
 * — podgrodzie; PRAWA MIEJSKIE 1422 od Janusza I,
 *   potwierdzenie na prawie chełmińskim 1448 od Bolesława IV,
 * — CECHY: szewców (1448), krawców, kuśnierzy
 *   i HANDLARZY SOLĄ (1525),
 * — Władysław IV zezwolił na wolny handel solą bez opłat
 *   na rzecz skarbu; Jan Kazimierz ustanowił dwa jarmarki;
 *   Michał Korybut nadał przywilej opłat targowych;
 *   JAN III SOBIESKI W 1679 R. potwierdził przywileje
 *   dla kupców i solarzy,
 *   ⚠⚠ KĄT „SÓL W GOTOWANIU" JEST ZAJĘTY (inowroclaw.ts,
 *   wprost „jedyne właściwe miejsce"). SÓL PODAJĘ
 *   WYŁĄCZNIE JAKO FAKT HISTORYCZNY O MIEŚCIE.
 *   NIE ROBIĘ Z NIEJ TEMATU. TWARDA GRANICA.
 * — pod koniec XIX w. odbywało się SZEŚĆ JARMARKÓW —
 *   handlowano zbożem, bydłem i wyrobami rzemieślniczymi,
 *   ⚠ DNI TYGODNIA JARMARKÓW NIE USTALONO,
 * — OSIEM MŁYNÓW NA WIŚLE, każdy dziedziczny, pobierający
 *   „trzecią miarę" od zmielonego zboża,
 *   ⚠ KĄTY „PROPORCJA" (malogoszcz.ts) I „PRZEPISY
 *   W CUDZYCH MIARACH" (zgorzelec.ts) SĄ ZAJĘTE —
 *   PODAJĘ JAKO FAKT,
 * — przeprawa przez Wisłę między Zakroczymiem a Kazuniem;
 *   handlowano drewnem, skórami, woskiem, miodem, futrami
 *   i zbożem; miasto leżało na skrzyżowaniu szlaków wodnych
 *   i lądowych,
 * — 1564 r.: 256 RZEMIEŚLNIKÓW w mieście; zapiski z 1565 r.
 *   wymieniają szewców płacących czynsz świętomarski
 *   oraz piekarzy,
 *   ⚠ ŹRÓDŁO WYMIENIA TEŻ PIWOWARÓW I „DOSKONAŁE PIWO" —
 *   NIE PISZĘ O TYM. ZERO TEMATU ALKOHOLU. TWARDA GRANICA,
 * — XVI w. — szczyt: 371 domów, ponad 1 500 mieszkańców,
 * — GARNCARSTWO: wyroby Wisłą wędrowały do Gdańska,
 *   a potem morzem do Danii, Szwecji i Szkocji,
 *   ⚠ KĄT „RUMIENIENIE" oparty na wypale bez dostępu
 *   powietrza jest ZAJĘTY (ilza.ts) — tutaj garncarstwo
 *   pojawia się wyłącznie jako fakt o eksporcie,
 * — ⚠⚠ PODSTAWA KĄTA: pod koniec XIX w. powstały
 *   w Zakroczymiu FABRYKA PAPIERU, FABRYKA CYKORII
 *   i GARBARNIE,
 * — w międzywojniu największym przedsiębiorstwem była
 *   cegielnia, a w mieście działało około stu warsztatów
 *   rzemieślniczych.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   produktu z gminy Zakroczym.
 *   ⚠⚠⚠ OSTRZEŻENIE: jeden z serwisów internetowych
 *   twierdzi, że „podchmielone wiśnie zakroczymskie"
 *   są produktem tradycyjnym. NIE UDAŁO SIĘ TEGO POTWIERDZIĆ
 *   W ŻADNYM ŹRÓDLE URZĘDOWYM, a serwis ma cechy generatora
 *   treści. TO PRAWDOPODOBNA KONFABULACJA.
 *   NIE UŻYWAM TEJ INFORMACJI POD ŻADNYM POZOREM.
 *   TWARDA GRANICA.
 * ⚠ OSIEDLI W MIEŚCIE NIE USTALONO — districts PUSTE.
 *
 * KĄT: PRAŻENIE — sucha patelnia i kilkanaście sekund
 * między „idealnie" a „spalone".
 * Kąt od zakroczymskiej fabryki cykorii z końca XIX wieku:
 * cykoria to korzeń, który po wypraniu, pokrojeniu
 * i wypaleniu na sucho zmienia się nie do poznania.
 * W kuchni domowej ta sama czynność wraca przy orzechach,
 * nasionach i przyprawach — i prawie zawsze kończy się
 * tak samo, czyli o pół minuty za późno.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pod koniec XIX wieku działały w Zakroczymiu fabryka
 *   papieru, garbarnie i fabryka cykorii,
 * — że cykoria to palony korzeń, znany jako namiastka kawy,
 *   i że cała zmiana zachodzi w nim przez suche wypalenie
 *   ⚠ ŻADNYCH TWIERDZEŃ O WŁAŚCIWOŚCIACH CYKORII,
 * — ⚠⚠ ŻE PRAŻENIE TO NIE JEST SMAŻENIE BEZ TŁUSZCZU —
 *   to osobna technika: sucha patelnia, średnie ciepło
 *   i ciągły ruch. TO JEST RDZEŃ TEKSTU,
 * — DLACZEGO TRZEBA RUSZAĆ: bo na patelni dotyka jej
 *   tylko część powierzchni każdego kawałka, a reszta
 *   czeka. Bez ruchu jedna strona jest spalona, a druga
 *   surowa,
 * — ⚠⚠ ŻE DROGA OD „IDEALNE" DO „SPALONE" TRWA
 *   KILKANAŚCIE SEKUND i że to jest jedyna rzecz, którą
 *   trzeba o prażeniu wiedzieć. Nic innego w kuchni nie
 *   psuje się tak szybko,
 * — ŻE SYGNAŁEM JEST ZAPACH, NIE KOLOR: zapach pojawia się
 *   wcześniej niż wyraźna zmiana barwy, a przy orzechach
 *   kolor i tak zmienia się nierówno,
 * — ⚠⚠ ŻE PRAŻONE RZECZY DOCHODZĄ PO ZDJĘCIU Z OGNIA
 *   i dlatego zdejmuje się je WCZEŚNIEJ, niż wyglądają
 *   na gotowe, a potem NATYCHMIAST WYSYPUJE NA ZIMNY
 *   TALERZ. Zostawione na gorącej patelni dopalą się same.
 *   TO JEST NAJBARDZIEJ UŻYTECZNA RZECZ W CAŁYM TEKŚCIE,
 * — CO SIĘ PRAŻY W ZWYKŁEJ KUCHNI: orzechy, migdały,
 *   pestki dyni i słonecznika, sezam, wiórki kokosowe,
 *   przyprawy w całości przed zmieleniem, kasza przed
 *   gotowaniem,
 * — ŻE PRAŻONA PRZYPRAWA PACHNIE INACZEJ NIŻ SUROWA
 *   i że to jest najtańszy sposób, żeby danie zaczęło
 *   pachnieć — a nie kosztuje żadnego dodatkowego
 *   składnika,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix nie praży tak jak
 *   sucha patelnia. To jest technika oparta na kontakcie
 *   z gorącą powierzchnią i na patrzeniu, a tu brakuje
 *   obu tych rzeczy. Patelnia albo piekarnik zrobią to
 *   lepiej. MÓWIĘ TO WPROST,
 * — ale że urządzenie przejmuje krok następny: zmieli
 *   wystudzone, uprażone przyprawy albo orzechy —
 *   i to akurat robi lepiej niż moździerz.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 *   ⚠ „Kilkanaście sekund" to opis tempa zmiany,
 *   NIE instrukcja — nie podaję, ile czegokolwiek prażyć.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — w szczególności
 *   ZERO o cykorii, kofeinie i „zdrowszej kawie".
 *   TWARDA GRANICA.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE I O PRZYPALONYM
 *   JEDZENIU OD STRONY ZDROWOTNEJ. Mówię wyłącznie
 *   o SMAKU. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ZERO TEMATU ALKOHOLU.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO zbrodni z września 1939 r. To jest dominujące
 *   skojarzenie z nazwą tego miasta w polskim internecie
 *   i KATEGORYCZNIE JE OMIJAM — również pośrednio,
 *   przez wzmianki o zniszczeniu miasta. TWARDA GRANICA.
 * — ⚠⚠ ZERO twierdzy Modlin i fortu w Zakroczymiu; ZERO
 *   całego wątku fortyfikacyjnego. TWARDA GRANICA.
 * — ⚠⚠ XIX-WIECZNY ROZKWIT RZEMIOSŁA MIAŁ PRZYCZYNĘ
 *   W ZAOPATRYWANIU POBLISKIEJ TWIERDZY. To jest ta sama
 *   pułapka co zbrojeniówka w Przysusze: PISZĘ O ZAKŁADACH,
 *   NIE PODAJĘ PRZYCZYNY ICH POWSTANIA. TWARDA GRANICA.
 * — ZERO klasztoru kapucynów i ośrodka trzeźwości —
 *   wątek wyznaniowy plus tematyka uzależnień, podwójnie
 *   nietaktowny przy stronie o gotowaniu.
 * — ZERO historii społeczności żydowskiej miasta.
 * — ZERO upadku miasta w XVII–XVIII w. i depopulacji.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „RUMIENIENIE" (Iłża) dotyczy BRĄZOWEGO KOLORU
 *   NA WILGOTNEJ POWIERZCHNI dużych kawałków. TUTAJ chodzi
 *   o SUCHE, DROBNE RZECZY na suchej patelni.
 * — „SMAŻENIE W GŁĘBOKIM TŁUSZCZU" (Sulęcin) dotyczy
 *   FRYTOWANIA.
 * — „KAWA — MIELENIE I ŚWIEŻOŚĆ" (Czerwieńsk) dotyczy
 *   MIELENIA KAWY.
 * — „GORYCZ W KUCHNI" (Kleszczele) dotyczy GORYCZY
 *   JAKO SMAKU.
 * — „ORZECHY" (Suchedniów) dotyczą ORZECHA JAKO SUROWCA.
 * — „MĄKA I MIELENIE" (Tarnogród) dotyczy MIELENIA.
 * — „ZIOŁA ŚWIEŻE KONTRA SUSZONE" (Ciechanowiec, Skórcz)
 *   dotyczą ZIÓŁ.
 * TUTAJ chodzi o JEDNĄ TECHNIKĘ — suche wypalanie
 * na patelni — i o to, jak szybko się ona kończy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „do Zakroczymu" — poprawnie „do Zakroczymia".
 * — NIE WYMIENIAM żadnego produktu tradycyjnego,
 *   w szczególności rzekomych „wiśni zakroczymskich".
 * — NIE PODAJĘ przyczyny XIX-wiecznego rozkwitu rzemiosła.
 * — NIE PISZĘ o piwowarstwie ani o piwie.
 * — NIE ORZEKAM niczego o zdrowotnych skutkach prażenia
 *   ani o właściwościach cykorii.
 * — NIE PODAJĘ dni jarmarcznych.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Zakroczym liczy 3 127 mieszkańców (GUS, 31.12.2024)
 *   na 20 km², a cała gmina miejsko-wiejska 5 845 osób
 *   na 71,7 km² i dzieli się na siedemnaście sołectw;
 *   miasto leży na skarpie nadwiślańskiej, a jego okolicę
 *   rzeźbią wąwozy lessowe,
 * — prawa miejskie nadał Zakroczymiowi w 1422 roku
 *   Janusz I, a w 1448 potwierdził je na prawie chełmińskim
 *   Bolesław IV; w tym samym roku powstał cech szewców,
 *   a w 1525 cech handlarzy solą — obok cechów krawców
 *   i kuśnierzy,
 * — Władysław IV zezwolił tutejszym kupcom na wolny handel
 *   solą bez opłat na rzecz skarbu, Jan Kazimierz ustanowił
 *   dwa jarmarki, a Jan III Sobieski w 1679 roku potwierdził
 *   przywileje kupców i solarzy; pod koniec XIX wieku
 *   odbywało się w mieście sześć jarmarków, na których
 *   handlowano zbożem, bydłem i wyrobami rzemieślniczymi,
 * — na Wiśle pracowało osiem młynów, każdy dziedziczny,
 *   pobierający „trzecią miarę" od zmielonego zboża,
 *   a przeprawa między Zakroczymiem a Kazuniem obsługiwała
 *   handel zbożem; miasto leżało na skrzyżowaniu szlaków
 *   wodnych i lądowych, a handlowano tu drewnem, skórami,
 *   woskiem, miodem, futrami i zbożem,
 * — w 1564 roku pracowało w Zakroczymiu dwustu
 *   pięćdziesięciu sześciu rzemieślników, a zapiski z roku
 *   następnego wymieniają szewców i piekarzy; w XVI wieku
 *   miasto liczyło trzysta siedemdziesiąt jeden domów
 *   i ponad tysiąc pięciuset mieszkańców,
 * — zakroczymskie wyroby garncarskie płynęły Wisłą
 *   do Gdańska, a stamtąd morzem do Danii, Szwecji
 *   i Szkocji,
 * — pod koniec XIX wieku powstały tu fabryka papieru,
 *   fabryka cykorii i garbarnie, a w międzywojniu
 *   największym przedsiębiorstwem była cegielnia i działało
 *   około stu warsztatów rzemieślniczych.
 */
export const ZAKROCZYM: CityContent = {
  slug: "zakroczym",
  h1: "Thermomix Zakroczym – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zakroczym — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Zakroczymiu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zakroczym — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zakroczymiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zakroczymia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Zakroczym"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prażone zdejmuje się wcześniej, niż wygląda na gotowe — i od razu na zimny talerz.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zakroczymiu – jak wygląda prezentacja?",
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
      id: "prazenie",
      heading: "Prażenie — kilkanaście sekund między „idealnie” a „spalone”",
      paragraphs: [
        "Pod koniec XIX wieku działały w Zakroczymiu fabryka papieru, garbarnie i fabryka cykorii. Ta ostatnia mnie zatrzymała, bo cykoria to po prostu korzeń — pokrojony, wysuszony i wypalony na sucho, aż zmieni się nie do poznania. Znamy go jako namiastkę kawy, a cała ta przemiana zachodzi w nim wyłącznie przez ciepło, bez żadnego dodatku.",
        "W kuchni domowej ta sama czynność wraca stale i nazywa się prażeniem. I jest to chyba jedyna technika, przy której właściwie wszyscy spóźniają się o pół minuty.",
        "Zacznijmy od tego, czym prażenie nie jest. Nie jest smażeniem bez tłuszczu. To osobna rzecz: sucha patelnia, średnie ciepło i ciągły ruch.",
        "Ruch jest tu obowiązkowy i warto wiedzieć dlaczego. Kawałek orzecha albo ziarnko pieprzu dotyka patelni tylko małym fragmentem swojej powierzchni — reszta wisi w powietrzu i czeka. Jeśli nic się nie porusza, jedna strona jest już spalona, a druga wciąż surowa. Nie ma mowy o odejściu.",
        "A teraz rzecz najważniejsza i w zasadzie jedyna, którą trzeba o prażeniu wiedzieć: droga od „idealnie” do „spalone” trwa kilkanaście sekund. Nic innego w kuchni nie psuje się tak szybko. Mięso daje kilka minut zapasu, ciasto daje minutę. Orzechy nie dają nic.",
        "Dlatego nie należy patrzeć na kolor, tylko wąchać. Zapach pojawia się wcześniej niż wyraźna zmiana barwy, a przy orzechach kolor i tak zmienia się nierówno — jeden bok bywa już brązowy, a drugi jasny. Nos jest w tym przypadku dokładniejszy od oka.",
        "I druga rzecz z tej samej półki, którą znają wszyscy, którzy raz się przejechali: prażone dochodzą po zdjęciu z ognia. Trzeba więc zdejmować je wcześniej, niż wyglądają na gotowe, i natychmiast wysypać na zimny talerz. Zostawione na gorącej patelni, nawet zdjętej z palnika, dopalą się same — bo patelnia dalej grzeje.",
        "Co się praży w zwykłej kuchni: orzechy, migdały, pestki dyni i słonecznika, sezam, wiórki kokosowe, kasza przed gotowaniem oraz przyprawy w całości, zanim się je zmieli.",
        "Ta ostatnia rzecz jest moim zdaniem najbardziej niedoceniona. Uprażona przyprawa pachnie zupełnie inaczej niż surowa i jest to najtańszy znany mi sposób, żeby danie zaczęło pachnieć. Nie kosztuje żadnego dodatkowego składnika ani żadnych pieniędzy — tylko dwie minuty uwagi i tę jedną minutę, w której nie wolno odejść.",
        "Na koniec uczciwie o sprzęcie. Thermomix nie praży tak jak sucha patelnia i nie ma sensu udawać, że praży. Ta technika opiera się na kontakcie z gorącą powierzchnią i na patrzeniu — a w zamkniętym naczyniu brakuje jednego i drugiego. Patelnia albo piekarnik zrobią to lepiej.",
        "Za to urządzenie przejmuje krok następny, i tu jest bezkonkurencyjne: zmieli wystudzone, uprażone przyprawy albo orzechy równo i w kilka sekund. Moździerz robi to dłużej i nierówno. Podział pracy jest więc prosty — patelnia praży, urządzenie miele.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zakroczymiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz zobaczyć, jak urządzenie radzi sobie z mieleniem przypraw i orzechów — powiedz to przy umawianiu. To jedna z rzeczy, w których wypada naprawdę dobrze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zakroczymiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zakroczymskiej rodziny",
      paragraphs: [
        "Zakroczym liczy nieco ponad trzy tysiące sto mieszkańców na dwudziestu kilometrach kwadratowych, a cała gmina miejsko-wiejska blisko sześć tysięcy osób na siedemdziesięciu jeden kilometrach i dzieli się na siedemnaście sołectw. Miasto leży na skarpie nadwiślańskiej, a jego okolicę rzeźbią wąwozy lessowe. Prawa miejskie nadał mu w 1422 roku Janusz I, a w 1448 potwierdził je na prawie chełmińskim Bolesław IV; w tym samym roku powstał cech szewców, a w 1525 cech handlarzy solą — obok cechów krawców i kuśnierzy. Władysław IV zezwolił tutejszym kupcom na wolny handel solą bez opłat na rzecz skarbu, Jan Kazimierz ustanowił dwa jarmarki, a Jan III Sobieski w 1679 roku potwierdził przywileje kupców i solarzy; pod koniec XIX wieku odbywało się tu sześć jarmarków, na których handlowano zbożem, bydłem i wyrobami rzemieślniczymi. Na Wiśle pracowało osiem młynów, każdy dziedziczny, pobierający „trzecią miarę” od zmielonego zboża, a przeprawa między Zakroczymiem a Kazuniem obsługiwała handel zbożem; miasto leżało na skrzyżowaniu szlaków wodnych i lądowych i handlowano tu drewnem, skórami, woskiem, miodem, futrami i zbożem. W 1564 roku pracowało w mieście dwustu pięćdziesięciu sześciu rzemieślników, a zapiski z roku następnego wymieniają szewców i piekarzy; w XVI wieku stało tu trzysta siedemdziesiąt jeden domów i mieszkało ponad tysiąc pięciuset ludzi. Zakroczymskie wyroby garncarskie płynęły Wisłą do Gdańska, a stamtąd morzem do Danii, Szwecji i Szkocji. Pod koniec XIX wieku powstały fabryka papieru, fabryka cykorii i garbarnie, a w międzywojniu największym przedsiębiorstwem była cegielnia i działało około stu warsztatów rzemieślniczych.",
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

  districtsHeading: "Do których części Zakroczymia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od historycznego układu w górnej części po domy przy skarpie i wąwozach oraz przy wylotach dróg. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Zakroczym też przyjadę",
  nearbyParagraphs: [
    "Nowy Dwór Mazowiecki, Czerwińsk nad Wisłą, Leoncin, Pomiechówek, Nasielsk i Płońsk są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nowy Dwór Mazowiecki", "Nasielsk", "Płońsk", "Legionowo"],

  about: blokOMnie("do Zakroczymia", "w Zakroczymiu", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zakroczymia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Zakroczym nad Wisłą w powiecie nowodworskim — nie o Zakrzew, Zakrzówek ani Zakrzewo, z którymi wyszukiwarki lubią go mylić.",
    },
    ...faqWspolne("w Zakroczymiu"),
    {
      question: "Jak prażyć orzechy, żeby się nie spaliły?",
      answer:
        "Na suchej patelni, przy średnim ogniu i w ciągłym ruchu — bez ruchu jedna strona jest spalona, a druga surowa. Kierować się zapachem, nie kolorem, bo zapach pojawia się wcześniej, a orzechy brązowieją nierówno. I najważniejsze: zdejmować wcześniej, niż wyglądają na gotowe, a potem od razu wysypać na zimny talerz, bo na gorącej patelni dopalą się same.",
    },
    {
      question: "Po co prażyć przyprawy przed zmieleniem?",
      answer:
        "Bo uprażona przyprawa pachnie zupełnie inaczej niż surowa. To najtańszy sposób, żeby danie zaczęło pachnieć — nie kosztuje żadnego dodatkowego składnika, tylko dwie minuty uwagi i tę jedną minutę, w której nie wolno odejść od patelni.",
    },
    {
      question: "Czy Thermomix upraży orzechy albo przyprawy?",
      answer:
        "Nie tak jak sucha patelnia i nie warto go do tego zmuszać. Prażenie opiera się na kontakcie z gorącą powierzchnią i na patrzeniu, a w zamkniętym naczyniu brakuje obu tych rzeczy — patelnia albo piekarnik zrobią to lepiej. Urządzenie przejmuje za to krok następny: mieli wystudzone, uprażone przyprawy i orzechy równiej i szybciej niż moździerz.",
    },
  ],

  geo: { lat: 52.438, lng: 20.612 },
};
