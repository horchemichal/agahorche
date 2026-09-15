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
 * MOGIELNICA — powiat grójecki, woj. mazowieckie.
 * MIASTO 2 119 (GUS 31.12.2024), 13,0 km², 163,3 os./km².
 * Gmina miejsko-wiejska: 8 128 osób, 140,9 km².
 * ⚠ BRIEF PODAWAŁ „ok. 2,4 tys." — ZAWYŻENIE O 13%.
 *   OBOWIĄZUJE 2 119. TWARDA GRANICA.
 *
 * ⚠⚠ HOMONIMY:
 * — ⚠⚠ MOGIELNICA w POWIECIE SIEDLECKIM — TA SAMA NAZWA,
 *   TO SAMO WOJEWÓDZTWO. NAJGROŹNIEJSZA PUŁAPKA,
 *   a leży blisko Mordów z tej samej fali,
 * — MOGIELNICA w woj. PODKARPACKIM (gmina Baligród)
 *   oraz sołectwo Mogielnica w gminie Boguchwała,
 * — MOGILNICA to RZEKA, nie miasto,
 * — MOGILNO to miasto w KUJAWSKO-POMORSKIM,
 * — ⚠ MOGIELANKA (rzeka) ≠ MOGIELNICA (miasto).
 *   FAQ MUSI TO ROZRÓŻNIAĆ. TWARDA GRANICA.
 * ⚠ ODMIANA wg PWN: D. MOGIELNICY, B. MOGIELNICĘ,
 *   Ms. W MOGIELNICY, przymiotnik MOGIELNICKI
 *   (potwierdzony osobnym hasłem słownikowym).
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1249 r. pierwsza wzmianka pisana,
 * — PRAWA MIEJSKIE 1317 R. na prawie niemieckim,
 *   od księcia Ziemowita II; utrata 1869, ODZYSKANIE 1919,
 *   ⚠ PRZYCZYNY UTRATY NIE PODAJĘ. TWARDA GRANICA.
 * — miasto prosperowało na szlaku handlowym CZERSK–KRAKÓW,
 * — XV–XVI w. — pomyślny rozwój handlu i rzemiosła,
 *   a zwłaszcza TKACTWA; działały CECHY skupiające KRAWCÓW,
 *   KUŚNIERZY, KOWALI I SZEWCÓW,
 * — GARBARSTWO I GARNCARSTWO; pod koniec XIX w. powstało
 *   PIĘĆ GARBARNI,
 *   ⚠⚠ CIĄGŁOŚĆ DO DZIŚ: wśród dzisiejszych gałęzi gospodarki
 *   gmina wymienia „usługi branży skórzanej". SIEDEMSET LAT
 *   TEJ SAMEJ LINII RZEMIEŚLNICZEJ — RZADKI, MOCNY FAKT,
 * — KOLEJ WĄSKOTOROWA: połączenie z Warszawą przez Grójec
 *   tuż przed końcem I wojny światowej, a w 1924 r.
 *   z Nowym Miastem nad Pilicą,
 * — ⚠ NAZWA: przyjmuje się, że pochodzi od pagórkowatego,
 *   „mogiłowatego" ukształtowania terenu.
 *   ⚠⚠ ŹRÓDŁO POJEDYNCZE — PISZĘ „przyjmuje się".
 *   ⚠⚠ NIE ROZWIJAM SKOJARZENIA Z MOGIŁĄ. Przy stronie
 *   o gotowaniu jest nietaktowne. TWARDA GRANICA.
 * ⚠ MŁYNÓW W MOGIELNICY NIE POTWIERDZONO mimo rzeki
 *   Mogielanki — NIE ZAKŁADAM ICH ISTNIENIA.
 * ⚠ DNI TARGOWYCH ANI DAT JARMARKÓW NIE USTALONO.
 *
 * ⚠⚠ DZIŚ — PODSTAWA KĄTA. Oficjalna strona gminy podaje,
 *   że dominuje „przetwórstwo owocowo-warzywne,
 *   PRODUKCJA PIECZAREK, usługi branży skórzanej";
 *   kierunkiem rozwoju jest przemysł rolno-spożywczy,
 *   a w rejestrze figuruje ponad tysiąc podmiotów
 *   gospodarczych. Wśród największych zakładów gmina
 *   wymienia zakład przemysłu cukierniczego, dwa zakłady
 *   przetwórstwa owoców, producenta soków i napojów
 *   oraz zakład chemii rolnej.
 *   ⚠ NAZW FIRM NIE PODAJĘ. TWARDA GRANICA.
 * ⚠⚠ POWIAT GRÓJECKI TO ZAGŁĘBIE SADOWNICZE, ALE KĄTY
 *   „JABŁKO" (annopol.ts), „ODMIANY", „SADY", „SOKI"
 *   (sulechow.ts) I „POWIETRZE/TLEN" (grojec.ts)
 *   SĄ ZAJĘTE. SADOWNICTWA NIE ROBIĘ TEMATEM.
 *   PIECZARKARSTWO TO OSOBNA, WOLNA ŚCIEŻKA.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: brak wpisu z gminy
 *   Mogielnica. ⚠⚠ PUŁAPKI: „powidła jabłkowe" (25.06.2024)
 *   i „mazowieckie powidła śliwkowe" (27.10.2023) NIE MAJĄ
 *   potwierdzonego pochodzenia z Mogielnicy, a „jabłka
 *   grójeckie" to oznaczenie dla CAŁEGO REGIONU, nie produkt
 *   tej gminy. NIE PRZYPISUJĘ ŻADNEGO. TWARDA GRANICA.
 * ⚠ SOŁECTWA: BIP deklaruje 34, a wypisuje 37 nazw —
 *   ⚠ NIE PODAJĘ LICZBY. Osiedli w mieście nie ustalono.
 *   districts PUSTE.
 *
 * KĄT: PIECZARKA — grzyb, który rośnie w ciemności i psuje
 * się na patelni.
 * Kąt od tego, że produkcja pieczarek jest dziś jedną z trzech
 * głównych gałęzi gospodarki gminy — wymienioną przez nią
 * samą obok przetwórstwa i branży skórzanej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gmina wymienia produkcję pieczarek wśród swoich
 *   trzech głównych gałęzi gospodarki, obok przetwórstwa
 *   owocowo-warzywnego i usług branży skórzanej,
 * — ŻE PIECZARKA TO GRZYB HODOWANY, NIE ZBIERANY —
 *   i że to zmienia wszystko, co się z nią robi w kuchni:
 *   jest dostępna cały rok, jest przewidywalna i nie ma
 *   z nią żadnego ryzyka pomyłki
 *   ⚠ ODSYŁAM DO STRON O GRZYBACH LEŚNYCH, NIE ROZWIJAM,
 * — ⚠⚠ ŻE PIECZARKI NIE MOCZY SIĘ W WODZIE. Grzyb jest
 *   w większości wodą i nasiąka jak gąbka, a potem oddaje
 *   to wszystko na patelni. Wystarczy przetrzeć albo
 *   opłukać szybko. TO JEST NAJUŻYTECZNIEJSZA RZECZ
 *   W CAŁYM TEKŚCIE,
 * — ⚠⚠ ŻE NIE TRZEBA ICH OBIERAĆ ZE SKÓRKI — to nawyk,
 *   nie konieczność, i zabiera najwięcej czasu ze wszystkiego,
 *   co się z pieczarką robi,
 * — ŻE NA PATELNI PIECZARKI PUSZCZAJĄ WODĘ I PRZEZ CHWILĘ
 *   SIĘ GOTUJĄ — i to jest normalne, a nie błąd. Rzecz
 *   w tym, żeby POCZEKAĆ, AŻ TA WODA ODPARUJE; dopiero
 *   potem zaczyna się smażenie i dopiero wtedy pojawia się
 *   smak,
 * — ŻE DLATEGO NIE TŁOCZY SIĘ ICH NA PATELNI I NIE SMAŻY
 *   NA MAŁYM OGNIU: przy stłoczeniu para nie ma którędy
 *   uciec i pieczarki duszą się we własnej wodzie do końca
 *   ⚠ ODSYŁAM DO STRONY O RUMIENIENIU,
 * — ŻE SOLI SIĘ JE NA KOŃCU, bo sól wyciąga z nich wodę
 *   i przedłuża tę pierwszą, mokrą fazę,
 * — ŻE POKROJONA PIECZARKA CIEMNIEJE — to zwykła reakcja
 *   z powietrzem, nie oznaka zepsucia
 *   ⚠ ODSYŁAM DO STRONY O KOLORZE JEDZENIA, NIE ROZWIJAM,
 * — ŻE CIEMNE PIECZARKI (brązowe) SĄ WYRAZISTSZE W SMAKU
 *   NIŻ BIAŁE i lepiej znoszą mocne smażenie,
 * — ŻE NÓŻKI SĄ TWARDSZE OD KAPELUSZY, więc jeśli coś ma
 *   być delikatne, warto je rozdzielić — a jeśli i tak idzie
 *   do farszu albo do sosu, nie ma to znaczenia,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie posieka pieczarki
 *   w kilka sekund i jest to realna oszczędność przy farszu
 *   czy pasztecie. ALE: nie usmaży ich tak, żeby odparowała
 *   woda i pojawiło się przypieczenie — to robota szerokiej,
 *   gorącej patelni. Przy pieczarkach podział jest ostry:
 *   urządzenie sieka, patelnia smaży.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH PORAD O ROZPOZNAWANIU GRZYBÓW, JADALNOŚCI
 *   I ZBIERANIU. Piszę WYŁĄCZNIE o pieczarce kupowanej
 *   w sklepie. TWARDA GRANICA — NAJWAŻNIEJSZA NA TEJ
 *   STRONIE.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI:
 *   jak długo pieczarki są dobre, kiedy się psują, czy
 *   ciemna pieczarka nadaje się do jedzenia. Mówię, że
 *   ciemnienie to reakcja z powietrzem — i nic więcej.
 *   TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 * — ŻADNYCH NAZW FIRM I ODMIAN HANDLOWYCH.
 * — ŻADNEJ KRYTYKI PIECZAREK MROŻONYCH I MARYNOWANYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO września 1939 r. i spalenia synagogi.
 * — ⚠⚠ ZERO getta, wywózek i historii społeczności
 *   żydowskiej Mogielnicy; ZERO cmentarza; ZERO wątku
 *   ośrodka chasydzkiego. TWARDA GRANICA.
 * — ZERO przyczyny utraty praw miejskich w 1869 r.
 * — ZERO spadku liczby ludności.
 * — ⚠ ZERO rozwijania etymologii w stronę mogiły.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „GRZYBY I JESIEŃ" (Lubliniec), „GRZYBY" (Starachowice,
 *   wprost „jedyne miejsce w serwisie") i „GRZYBY, KTÓRE JUŻ
 *   MACIE" (Goleniów) dotyczą GRZYBÓW LEŚNYCH — zbierania,
 *   sezonu i obróbki tego, co przyniesione z lasu.
 *   ⚠⚠ TUTAJ chodzi o PIECZARKĘ HODOWANĄ, kupowaną
 *   w sklepie przez cały rok. Strona MÓWI TO WPROST
 *   i odsyła do tamtych. TWARDA GRANICA.
 * — „KOLOR JEDZENIA" (Konstantynów Łódzki) dotyczy
 *   SZARZENIA WARZYW.
 * — „RUMIENIENIE" (Iłża) dotyczy BRĄZOWEGO KOLORU.
 * — „WIELKOŚĆ KAWAŁKÓW" (Orzysz) dotyczy WIELKOŚCI.
 * — „SZATKOWANIE WARZYW NA SUROWO" (Pilzno) dotyczy
 *   SURÓWEK.
 * TUTAJ chodzi o JEDEN SKŁADNIK — pieczarkę — i o wodę,
 * którą w sobie ma.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o zbieraniu i rozpoznawaniu grzybów.
 * — NIE PRZYPISUJĘ Mogielnicy powideł ani jabłek grójeckich.
 * — NIE PODAJĘ liczby sołectw ani nazw osiedli.
 * — NIE PODAJĘ nazw zakładów.
 * — NIE ZAKŁADAM, że w Mogielnicy działały młyny.
 * — NIE ROZWIJAM etymologii nazwy.
 * — NIE MYLĘ Mogielnicy grójeckiej z siedlecką
 *   ani z Mogilnem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mogielnica liczy 2 119 mieszkańców (GUS, 31.12.2024)
 *   na 13 km², a cała gmina miejsko-wiejska 8 128 osób
 *   na 140,9 km²,
 * — pierwsza wzmianka pisana pochodzi z 1249 roku,
 *   a prawa miejskie na prawie niemieckim nadał miastu
 *   w 1317 roku książę Ziemowit II; Mogielnica utraciła
 *   je w 1869 i odzyskała w 1919 roku,
 * — miasto prosperowało na szlaku handlowym z Czerska
 *   do Krakowa; w XV i XVI wieku rozwijały się tu handel
 *   i rzemiosło, zwłaszcza tkactwo, a cechy skupiały
 *   krawców, kuśnierzy, kowali i szewców,
 * — rozwinęły się tu również garbarstwo i garncarstwo,
 *   a pod koniec XIX wieku powstało pięć garbarni;
 *   do dziś wśród gałęzi gospodarki gminy wymienia się
 *   usługi branży skórzanej,
 * — kolej wąskotorowa połączyła Mogielnicę z Warszawą przez
 *   Grójec tuż przed końcem pierwszej wojny światowej,
 *   a w 1924 roku z Nowym Miastem nad Pilicą,
 * — dziś w gospodarce gminy dominują przetwórstwo
 *   owocowo-warzywne, produkcja pieczarek i usługi branży
 *   skórzanej, a w rejestrze figuruje ponad tysiąc podmiotów
 *   gospodarczych,
 * — przy rynku stoi klasycystyczny ratusz z lat 1823–1827,
 *   ufundowany przez Klementynę Walicką — murowany,
 *   na planie kwadratu, z czterospadowym dachem i wieżyczką;
 *   rynek otacza stara drewniana zabudowa małomiasteczkowa,
 * — przez gminę płynie Mogielanka, lewobrzeżny dopływ Pilicy
 *   o długości 38,6 kilometra, wzmiankowana już w 1249 roku;
 *   utworzono tu zespół przyrodniczo-krajobrazowy „Dolina
 *   Rzeki Mogielanki" o powierzchni czterystu piętnastu
 *   hektarów.
 */
export const MOGIELNICA: CityContent = {
  slug: "mogielnica",
  h1: "Thermomix Mogielnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mogielnica — przedstawiciel i prezentacja",
  seoDescription:
    "Thermomix w Mogielnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mogielnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mogielnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mogielnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Mogielnica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pieczarek się nie moczy — nasiąkają jak gąbka i oddają wszystko na patelni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mogielnicy – jak wygląda prezentacja?",
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
      id: "pieczarka",
      heading: "Pieczarka — i woda, którą w sobie ma",
      paragraphs: [
        "Gmina Mogielnica wymienia trzy główne gałęzie swojej gospodarki: przetwórstwo owocowo-warzywne, produkcję pieczarek i usługi branży skórzanej. Ta środkowa pozycja jest tu warta osobnej rozmowy, bo pieczarka to najczęściej kupowany grzyb w Polsce i jednocześnie ten, który najczęściej wychodzi źle.",
        "Na początek rzecz podstawowa: pieczarka jest grzybem hodowanym, nie zbieranym. Rośnie w ciemności, w kontrolowanych warunkach, i jest dostępna przez cały rok. To zupełnie inna sytuacja niż z grzybami z lasu — o tamtych pisałam osobno i nie mieszam tych dwóch rzeczy. Tu nie ma sezonu, nie ma ryzyka pomyłki i nie ma niespodzianek. Jest za to jeden problem, o którym prawie nikt nie mówi.",
        "Pieczarka jest w większości wodą. I stąd biorą się wszystkie kłopoty.",
        "Po pierwsze: pieczarek się nie moczy. Włożone do miski z wodą nasiąkają jak gąbka, a potem oddają to wszystko na patelni. Wystarczy przetrzeć je wilgotną ściereczką albo opłukać bardzo szybko i od razu osuszyć.",
        "Po drugie, i to jest dobra wiadomość: nie trzeba ich obierać ze skórki. To jest nawyk, nie konieczność — i przy okazji najbardziej czasochłonna rzecz, jaką ludzie z pieczarką robią. Kto raz przestanie, już do tego nie wróci.",
        "Po trzecie — najważniejsze. Na patelni pieczarki najpierw puszczają wodę i przez chwilę się w niej gotują. To jest normalne, a nie błąd i nie znak, że coś poszło źle. Rzecz w tym, żeby po prostu poczekać, aż ta woda odparuje. Dopiero wtedy zaczyna się prawdziwe smażenie i dopiero wtedy pojawia się smak, dla którego się je w ogóle smaży.",
        "Większość ludzi nie czeka. Wyjmuje pieczarki w fazie mokrej i zastanawia się, dlaczego są gumowate i bez wyrazu.",
        "Z tego wynikają dwie reguły. Nie tłoczyć ich na patelni — przy stłoczeniu para nie ma którędy uciec i pieczarki duszą się we własnej wodzie do samego końca. Lepiej w dwóch turach niż w jednej. I nie smażyć na małym ogniu, bo wtedy dzieje się dokładnie to samo, tylko wolniej. O tym, dlaczego wilgoć uniemożliwia przypieczenie, pisałam osobno.",
        "Czwarta rzecz: soli się je na końcu. Sól wyciąga z pieczarek wodę, więc dosypana na początku przedłuża tę mokrą fazę, którą właśnie chcemy skrócić.",
        "Dwie uwagi na marginesie. Pokrojona pieczarka ciemnieje — to zwykła reakcja z powietrzem, o której pisałam przy innym mieście, i nie oznacza niczego poza tym, że leżała pokrojona. A pieczarki brązowe są wyraźniejsze w smaku od białych i lepiej znoszą mocne smażenie, więc jeśli mają być głównym składnikiem dania, warto sięgnąć po nie.",
        "I ostatnia, praktyczna: nóżki są twardsze od kapeluszy. Jeśli danie ma być delikatne, warto je rozdzielić i wykorzystać osobno. Jeśli wszystko i tak idzie do farszu albo do sosu, nie ma to najmniejszego znaczenia.",
        "Na koniec uczciwie o sprzęcie, bo przy pieczarkach podział pracy jest wyjątkowo ostry. Thermomix posieka je w kilka sekund i przy farszu, pasztecie czy sosie jest to realna oszczędność — siekanie kilograma pieczarek nożem to zajęcie na kwadrans.",
        "Ale ich nie usmaży tak, żeby odparowała woda i pojawiło się przypieczenie. To wymaga szerokiej, gorącej patelni i miejsca, z którego para może uciec — a więc dokładnie tego, czego w zamkniętym naczyniu nie ma. Urządzenie sieka, patelnia smaży. Tyle i aż tyle.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mogielnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć, jak szybko urządzenie sieka warzywa i grzyby do farszu — powiedzcie to przy umawianiu. Zrobimy coś, gdzie to widać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mogielnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mogielnickiej rodziny",
      paragraphs: [
        "Mogielnica liczy nieco ponad dwa tysiące sto mieszkańców na trzynastu kilometrach kwadratowych, a cała gmina miejsko-wiejska ponad osiem tysięcy osób na stu czterdziestu jeden kilometrach. Pierwsza wzmianka pisana pochodzi z 1249 roku, a prawa miejskie na prawie niemieckim nadał miastu w 1317 roku książę Ziemowit II; Mogielnica utraciła je w 1869 i odzyskała w 1919. Miasto prosperowało na szlaku handlowym z Czerska do Krakowa; w XV i XVI wieku rozwijały się tu handel i rzemiosło, zwłaszcza tkactwo, a cechy skupiały krawców, kuśnierzy, kowali i szewców. Rozwinęły się tu również garbarstwo i garncarstwo — pod koniec XIX wieku powstało pięć garbarni, a usługi branży skórzanej wymienia się wśród gałęzi gospodarki gminy do dziś. Kolej wąskotorowa połączyła Mogielnicę z Warszawą przez Grójec tuż przed końcem pierwszej wojny światowej, a w 1924 roku z Nowym Miastem nad Pilicą. Współcześnie w gospodarce gminy dominują przetwórstwo owocowo-warzywne, produkcja pieczarek i usługi branży skórzanej, a w rejestrze figuruje ponad tysiąc podmiotów gospodarczych. Przy rynku stoi klasycystyczny ratusz z lat 1823–1827, ufundowany przez Klementynę Walicką — murowany, na planie kwadratu, z czterospadowym dachem i wieżyczką; rynek otacza stara drewniana zabudowa małomiasteczkowa. Przez gminę płynie Mogielanka, lewobrzeżny dopływ Pilicy o długości blisko trzydziestu dziewięciu kilometrów, wzmiankowana już w 1249 roku, a wokół niej utworzono zespół przyrodniczo-krajobrazowy „Dolina Rzeki Mogielanki” o powierzchni czterystu piętnastu hektarów.",
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

  districtsHeading: "Do których części Mogielnicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku z klasycystycznym ratuszem po domy przy wylotach dróg i nad Mogielanką. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Mogielnicę też przyjadę",
  nearbyParagraphs: [
    "Nowe Miasto nad Pilicą, Grójec, Warka, Białobrzegi, Goszczyn, Belsk Duży i Rawa Mazowiecka są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Grójec", "Nowe Miasto nad Pilicą", "Warka", "Białobrzegi"],

  about: blokOMnie("do Mogielnicy", "w Mogielnicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mogielnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Mogielnicę w powiecie grójeckim, nad Mogielanką — nie o Mogielnicę w powiecie siedleckim, która nosi tę samą nazwę w tym samym województwie.",
    },
    ...faqWspolne("w Mogielnicy"),
    {
      question: "Czy pieczarki trzeba moczyć i obierać?",
      answer:
        "Ani jedno, ani drugie. Moczenie jest wręcz szkodliwe — pieczarka jest w większości wodą i nasiąka jak gąbka, a potem oddaje to wszystko na patelni; wystarczy przetrzeć ją wilgotną ściereczką albo bardzo szybko opłukać i osuszyć. Obieranie ze skórki to nawyk, nie konieczność, i zabiera najwięcej czasu ze wszystkiego, co się z pieczarką robi.",
    },
    {
      question: "Dlaczego pieczarki na patelni wychodzą gumowate?",
      answer:
        "Bo najpierw puszczają wodę i przez chwilę się w niej gotują — to normalne. Trzeba poczekać, aż ta woda odparuje, bo dopiero potem zaczyna się prawdziwe smażenie i pojawia się smak. Pomaga też niestłaczanie ich na patelni i mocny ogień, a soli się je na końcu, bo sól wyciąga wodę i przedłuża tę mokrą fazę.",
    },
    {
      question: "Czy Thermomix usmaży pieczarki?",
      answer:
        "Posieka je w kilka sekund i przy farszu czy pasztecie jest to realna oszczędność. Ale nie usmaży ich tak, żeby odparowała woda i pojawiło się przypieczenie — to wymaga szerokiej, gorącej patelni, z której para może uciec. Przy pieczarkach podział jest prosty: urządzenie sieka, patelnia smaży.",
    },
  ],

  geo: { lat: 51.6941, lng: 20.7236 },
};
