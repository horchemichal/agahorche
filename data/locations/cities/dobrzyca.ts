import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * DOBRZYCA — powiat pleszewski, woj. wielkopolskie.
 * ⚠⚠ ISTNIENIA INNEJ DOBRZYCY W POLSCE NIE
 *   ZWERYFIKOWANO [NP] — NIE TWIERDZĘ, ŻE JEST,
 *   ANI ŻE JEJ NIE MA. ZALECAM DOPISYWANIE POWIATU.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA.
 * MIASTO: 2 919 mieszkańców (GUS 31.12.2024),
 *   19,7 km², gęstość 148,2 os./km², 132 m n.p.m.
 *   ⚠ [ZW — 2 919 / 19,7 = 148,2. Różnica 0,03.
 *   NAJDOKŁADNIEJSZE DOMKNIĘCIE TEJ FALI.
 *   PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 * CAŁA GMINA: 7 596 osób, 116,79 km², gęstość
 *   66 os./km².
 *   ⚠⚠⚠ POWIERZCHNI 116,9 km² NIE UŻYWAM — przy niej
 *   iloraz daje 65,0, ROZBIEŻNOŚĆ 1,02, POWYŻEJ PROGU.
 *   PRZY 116,79 km² ROZBIEŻNOŚĆ WYNOSI 0,96 — MIEŚCI
 *   SIĘ. UŻYWAM WYŁĄCZNIE 116,79.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * UDZIAŁ MIASTA W POWIERZCHNI GMINY: 19,7 ze 116,79,
 *   czyli PRAWIE JEDNA SZÓSTA. ⚠ PODAJĘ OPISOWO,
 *   BEZ PROCENTU.
 * SOŁECTWA: 17 SOŁECTW i 19 MIEJSCOWOŚCI
 *   (GUS Vademecum i TERYT zgodnie).
 *   SOŁECTWA: Czarnuszka, Dobrzyca, Dobrzyca – Nowy
 *   Świat, Fabianów, Galew, Izbiczno, Karmin,
 *   Karminek, Karminiec, Koźminiec, Lutynia, Polskie
 *   Olędry, Sośnica, Sośniczka, Strzyżew, Trzebin,
 *   Trzebowa.
 *   ⚠⚠⚠ OBRĘBÓW EWIDENCYJNYCH JEST RÓWNIEŻ 17,
 *   CZYLI TYLE, CO SOŁECTW. ⚠⚠⚠ ZGODNOŚCI TEJ
 *   NIE PODAJĘ I NIE ROBIĘ Z NIEJ FIGURY — kąt
 *   „samorząd dzieli drobniej niż kataster" ZAJĘTY
 *   (Lwówek), a zgodność jest jego lustrem.
 *   ⚠⚠ NAJWIĘKSZE SOŁECTWO: DOBRZYCA („Dobrzyca jest
 *   największym sołectwem a zarazem siedzibą Urzędu
 *   Miejskiego Gminy"). PODAJĘ.
 * LESISTOŚĆ GMINY: 7,0 %.
 *   ⚠⚠⚠ ŹRÓDŁO PODAJE OBOK TEGO 2 125 ha, CO DAWAŁOBY
 *   18,2 %. SPRZECZNOŚĆ. PODAJĘ SAM PROCENT, BEZ
 *   HEKTARÓW, I NIE PRZELICZAM.
 * RZEKA: PATOKA. PODAJĘ.
 * ⚠ GEO: 51,8650 / 17,6019 (punkt miasta).
 *
 * ⚠⚠ ODMIANA — RODZAJ ŻEŃSKI, TEMAT NA -c-:
 *   D. DOBRZYCY · C. DOBRZYCY · B. DOBRZYCĘ ·
 *   N. Dobrzycą · Ms. w DOBRZYCY.
 *   ⚠⚠⚠ D., C. I Ms. SĄ IDENTYCZNE — to źródło
 *   większości błędów.
 *   ⚠ POTWIERDZENIA: „przywileju lokacyjnego dla
 *   Dobrzycy", „1,5 km od centrum Dobrzycy",
 *   „W Dobrzycy znajduje się pałac", „pierwsza
 *   wzmianka o Dobrzycy".
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: DOPEŁNIACZ W MIEJSCU
 *   MIANOWNIKA — „dla gminy Dobrzycy" zamiast
 *   „dla gminy Dobrzyca". Po słowie „gmina" nazwa
 *   stoi W MIANOWNIKU. WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠ BŁĄD DRUGI, HIPERPOPRAWNY: „w Dobrzycej" —
 *   forma nie istnieje.
 *   ⚠⚠ BŁĄD TRZECI: nieodmienianie — „do Dobrzyca".
 *   ⚠⚠⚠ PRZYMIOTNIKA „DOBRZYCKI" NIE UŻYWAM —
 *   potwierdzony tylko pośrednio [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1327 R.
 *   — PRAWA MIEJSKIE: 8 MAJA 1440 R. (data dzienna).
 *     ⚠⚠⚠ ŹRÓDŁA SĄ NIEZGODNE CO DO TEGO, KTO JE
 *     NADAŁ — jedno wskazuje monarchę, drugie
 *     właściciela prywatnego. ⚠⚠⚠ NIE ROZSTRZYGAM
 *     I NIE WYMIENIAM ŻADNEGO Z NICH Z NAZWISKA.
 *     ZERO POSTACI POLITYCZNYCH.
 *   — UTRATA PRAW: 1934 R.
 *   — ODZYSKANIE PRAW: 1 STYCZNIA 2014 R.
 *     ⚠⚠⚠ FIGURY Z PRZERWY NIE ROBIĘ — kąt „przerwa
 *     nie kasuje początku" ZAJĘTY. PODAJĘ DATY JAKO
 *     FAKT, RDZENIEM JEST CO INNEGO.
 *   ⚠⚠⚠ OBCHODÓW ROCZNICY W MARCU NIE WSPOMINAM —
 *     kąt „rocznicę liczono od późniejszej daty"
 *     ZAJĘTY (Odolanów).
 *   — PAŁAC: KLASYCYSTYCZNY, PRZEBUDOWANY W KOŃCU
 *     XVIII W. ZE STAREGO ZAMKU. PODAJĘ JEDNYM
 *     ZDANIEM.
 *     ⚠⚠⚠ NIE ROZWIJAM — kąt „to, co rzuca się
 *     w oczy, dobudowano później" ZAJĘTY
 *     (Czerniejewo, ta sama fala).
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — STATUS ZMIENIA SIĘ Z DNIA NA
 *   DZIEŃ, UKŁAD ZOSTAJE:
 *   DOBRZYCA ODZYSKAŁA PRAWA MIEJSKIE 1 STYCZNIA
 *   2014 R. Ponad dekadę później CAŁY JEJ OBSZAR
 *   MIEJSKI NADAL DZIELI SIĘ NA DWA SOŁECTWA:
 *   DOBRZYCA oraz DOBRZYCA – NOWY ŚWIAT.
 *   Sołectwo to jednostka pomocnicza o wiejskim
 *   rodowodzie, z sołtysem i zebraniem — a tutaj
 *   dwa takie sołectwa leżą WEWNĄTRZ MIASTA.
 *   DOBRZYCA – NOWY ŚWIAT jest opisana wprost jako
 *   „część miasta Dobrzyca", leży 1,5 KM OD CENTRUM
 *   i mieszka w niej 700 OSÓB.
 *   STATUS ZMIENIŁ SIĘ W JEDEN DZIEŃ. SPOSÓB, W JAKI
 *   MIEJSCE JEST ZORGANIZOWANE, NIE ZMIENIŁ SIĘ WCALE.
 *   ⚠⚠ NIE OCENIAM, CZY TO DOBRZE CZY ŹLE — TO NIE
 *   JEST WADA, TYLKO FAKT O TEMPIE.
 *
 * KĄT: STATUS ZMIENIA SIĘ W JEDEN DZIEŃ, NAWYK NIE
 * — o tym, że decyzja o zmianie i sama zmiana to dwie
 * różne rzeczy, rozłożone na zupełnie inny czas.
 * Kąt z Dobrzycy: miasto od 1 stycznia 2014 r.,
 * a w środku wciąż dwa sołectwa.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Dobrzyca jest miastem od 1 stycznia 2014 r.,
 *   a jej obszar dzieli się na dwa sołectwa, z których
 *   jedno leży 1,5 km od centrum i liczy 700 osób.
 *   TO JEST RDZEŃ,
 * — że to nie jest wada ani zaniedbanie, tylko różnica
 *   temp: status zmienia się datą, układ zmienia się
 *   latami,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: nowa kuchnia,
 *   nowy sprzęt albo nowe postanowienie nie zmieniają
 *   nawyku, bo nawyk siedzi w rękach, a nie w decyzji,
 * — ⚠⚠ ŻE DLATEGO PIERWSZE TYGODNIE PO ZMIANIE
 *   WYGLĄDAJĄ DOKŁADNIE JAK POPRZEDNIE — i to nie
 *   znaczy, że zmiana się nie udała,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nie zmieniać wszystkiego
 *   naraz, tylko przypiąć nowy sposób do jednego
 *   stałego punktu w tygodniu, aż przestanie wymagać
 *   decydowania,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: niektóre stare układy
 *   są po prostu dobre i nie ma powodu ich ruszać.
 *   Nie każdy nawyk trzeba zmieniać tylko dlatego,
 *   że jest stary,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zmienia
 *   nawyków samo z siebie. Kupione bez pomysłu,
 *   co konkretnie ma zastąpić w tygodniu, stoi
 *   nieużywane. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PODZIAŁ ZNIESIONY, NAZWA ZOSTAŁA — kąt
 *   zajęty (Wieleń). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam po zniesionym podziale
 *   została SAMA NAZWA; tu po zmianie statusu został
 *   CAŁY DZIAŁAJĄCY PODZIAŁ, z sołtysami i zebraniami.
 *   JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty.
 *   DATY 1934 I 2014 PODAJĘ, ALE FIGURY Z PRZERWY
 *   NIE ROBIĘ.
 * — ⚠⚠⚠ ZERO SAMORZĄD DZIELI DROBNIEJ NIŻ KATASTER —
 *   kąt zajęty (Lwówek). DLATEGO ZGODNOŚCI 17 = 17
 *   NIE PODAJĘ.
 * — ⚠⚠ ZERO PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ GŁOS —
 *   kąt zajęty (Gołańcz).
 * — ⚠⚠ ZERO ROCZNICĘ LICZONO OD PÓŹNIEJSZEJ DATY —
 *   kąt zajęty (Odolanów).
 * — ⚠⚠ ZERO TO, CO RZUCA SIĘ W OCZY, DOBUDOWANO
 *   PÓŹNIEJ — kąt zajęty (Czerniejewo, ta sama fala).
 *   DLATEGO PAŁACU NIE ROZWIJAM.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ TU RYZYKO
 *   PODWYŻSZONE, BO KĄT DOTYCZY NAWYKÓW. PISZĘ
 *   O NAWYKACH KUCHENNYCH, NIGDY O ODŻYWIANIU,
 *   DIECIE ANI SAMOPOCZUCIU.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   NAMAWIANIA NA REMONT.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH · ZERO OBELISKÓW.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni gminy 116,9 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ powierzchni lasów w hektarach.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE ROZSTRZYGAM, kto nadał prawa miejskie.
 * — NIE OPISUJĘ obchodów rocznicy.
 * — NIE ROZWIJAM wątku pałacu.
 * — NIE TWIERDZĘ, czy istnieje inna Dobrzyca.
 * — NIE UŻYWAM przymiotnika „dobrzycki".
 * — NIE OCENIAM podziału gminy.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Dobrzyca leży w powiecie pleszewskim, liczy
 *   2 919 mieszkańców (GUS, 31.12.2024) na 19,7 km²,
 *   czyli 148,2 osoby na kilometr kwadratowy, i leży
 *   132 m n.p.m.,
 * — cała gmina miejsko-wiejska to 7 596 osób
 *   na 116,79 km², czyli 66 osób na kilometr
 *   kwadratowy, przy lesistości 7 %; przez gminę
 *   płynie Patoka,
 * — gmina ma 17 sołectw i 19 miejscowości, a samo
 *   miasto zajmuje prawie jedną szóstą jej
 *   powierzchni,
 * — dwa z tych sołectw leżą wewnątrz miasta: Dobrzyca
 *   oraz Dobrzyca – Nowy Świat, opisana wprost jako
 *   część miasta Dobrzyca, położona 1,5 km od centrum
 *   i zamieszkana przez 700 osób,
 * — Dobrzyca jest największym sołectwem gminy
 *   i siedzibą urzędu,
 * — pierwsza wzmianka pochodzi z 1327 r., prawa
 *   miejskie nadano 8 maja 1440 r., miasto utraciło
 *   je w 1934 r., a odzyskało 1 stycznia 2014 r.,
 * — w gminie leżą m.in. Karmin, Karminek, Karminiec,
 *   Sośnica, Sośniczka, Trzebin, Trzebowa, Koźminiec,
 *   Fabianów, Galew, Izbiczno, Lutynia, Strzyżew
 *   i Polskie Olędry.
 */
export const DOBRZYCA: CityContent = {
  slug: "dobrzyca",
  h1: "Thermomix Dobrzyca – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dobrzyca — cena i prezentacja",
  seoDescription:
    "Thermomix w Dobrzycy w powiecie pleszewskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dobrzyca — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dobrzycy pod Pleszewem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dobrzycy w powiecie pleszewskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich siedemnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Dobrzyca"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Miastem od 1 stycznia 2014 roku. W środku wciąż dwa sołectwa.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dobrzycy – jak wygląda prezentacja?",
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
      id: "status-i-uklad",
      heading: "Status zmienia się w jeden dzień, nawyk nie",
      paragraphs: [
        "Dobrzyca jest miastem od 1 stycznia 2014 roku. Prawa miejskie miała już wcześniej, od 8 maja 1440 roku, i straciła je w 1934.",
        "A teraz rzecz, która jest tu najciekawsza. Ponad dekadę po odzyskaniu praw cały obszar miejski nadal dzieli się na dwa sołectwa: Dobrzyca oraz Dobrzyca – Nowy Świat. Sołectwo to jednostka pomocnicza o wiejskim rodowodzie, z sołtysem i zebraniem wiejskim — a te dwa leżą wewnątrz miasta. Drugie z nich opisane jest wprost jako „część miasta Dobrzyca”, leży półtora kilometra od centrum i mieszka w nim siedemset osób.",
        "To nie jest zaniedbanie ani wada. To jest różnica temp. Status zmienia się datą w dzienniku ustaw — jednego dnia jest wieś, następnego miasto. Sposób, w jaki miejsce jest naprawdę zorganizowane, zmienia się latami albo nie zmienia się wcale, bo nie ma po co.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, w którym zniesiono podział administracyjny, a została po nim sama nazwa. Tutaj jest odwrotnie — zmieniono status, a został cały działający podział, z sołtysami i zebraniami.",
        "Piszę o tym, bo w kuchni mylimy te dwa tempa właściwie zawsze.",
        "Nowa kuchnia nie zmienia sposobu gotowania. Nowy sprzęt też nie. Postanowienie od poniedziałku nie zmienia go tym bardziej. Dzieje się tak dlatego, że nawyk nie siedzi w decyzji ani w wyposażeniu, tylko w rękach: w tym, po co sięgacie odruchowo, w której kolejności to robicie i o której godzinie w ogóle zaczynacie.",
        "Dlatego pierwsze tygodnie po każdej zmianie wyglądają dokładnie jak poprzednie. To normalne i nie znaczy, że zmiana się nie udała — znaczy tylko, że status zmienił się szybciej niż układ. Dokładnie jak w mieście, które ma prawa miejskie od dziesięciu lat i wciąż ma w środku sołtysów.",
        "Ruch jest jeden i jest wbrew pokusie: nie zmieniać wszystkiego naraz. Zamiast tego przypiąć nowy sposób do jednego stałego punktu w tygodniu — na przykład do niedzielnego popołudnia — i robić to tylko wtedy, przez kilka tygodni z rzędu. Nawyk powstaje wtedy, gdy przestaje wymagać decydowania, a to wymaga powtórzeń w tym samym miejscu i o tej samej porze, nie silnej woli.",
        "Uczciwie o drugiej stronie, bo nie każdy stary układ trzeba ruszać. Część sposobów, które macie w domu od lat, jest po prostu dobra — działa, wszyscy je znają i nikt się przy nich nie zastanawia. To, że coś jest stare, nie jest powodem do zmiany. Powodem jest tylko to, że coś realnie przeszkadza.",
        "I uczciwie o sprzęcie, bo to najczęstszy powód nieudanych zakupów. Thermomix nie zmieni nawyków sam z siebie. Jeśli kupicie go bez pomysłu na to, co konkretnie ma zastąpić w zwykłym tygodniu — które danie, w który dzień — to będzie stał i będzie wyrzutem sumienia. Dlatego przy prezentacji pytam o wtorek, a nie o święta.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dobrzycy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co gotujecie w zwykły tydzień. To dla mnie ważniejsza informacja niż to, co chcielibyście ugotować od święta.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dobrzycy"),
    sekcjaRaty("w Dobrzycy"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Dobrzycy",
      paragraphs: [
        "Dobrzyca leży w powiecie pleszewskim, liczy 2 919 mieszkańców (GUS, 31.12.2024) na dziewiętnastu i siedmiu dziesiątych kilometra kwadratowego, czyli sto czterdzieści osiem i dwie dziesiąte osoby na kilometr kwadratowy, i leży sto trzydzieści dwa metry nad poziomem morza. Cała gmina miejsko-wiejska to 7 596 osób na stu szesnastu i siedemdziesięciu dziewięciu setnych kilometra kwadratowego, czyli sześćdziesiąt sześć osób na kilometr, przy lesistości siedmiu procent; płynie przez nią Patoka. Gmina ma siedemnaście sołectw i dziewiętnaście miejscowości, a samo miasto zajmuje prawie jedną szóstą jej powierzchni. Pierwsza wzmianka pochodzi z 1327 roku, prawa miejskie nadano 8 maja 1440 — źródła nie są zgodne co do tego, kto je nadał, więc tego nie rozstrzygam — miasto utraciło je w 1934 roku, a odzyskało 1 stycznia 2014. W Dobrzycy stoi też klasycystyczny pałac, przebudowany pod koniec XVIII wieku z dawnego zamku.",
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

  districtsHeading: "Do których części Dobrzycy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedemnastu sołectw w gminie. Nazywają się: Czarnuszka, Dobrzyca, Dobrzyca – Nowy Świat, Fabianów, Galew, Izbiczno, Karmin, Karminek, Karminiec, Koźminiec, Lutynia, Polskie Olędry, Sośnica, Sośniczka, Strzyżew, Trzebin i Trzebowa. Wszędzie bez dopłaty.",
    "Trzy uwagi praktyczne. Pierwsza: dwa z tych sołectw leżą wewnątrz miasta — Dobrzyca i Dobrzyca – Nowy Świat — więc samo „w Dobrzycy” może znaczyć trzy różne rzeczy: miasto, gminę albo to jedno sołectwo. Warto dopowiedzieć, o które chodzi. Druga, adresowa: w gminie są osobno Karmin, Karminek i Karminiec, a do tego Sośnica i Sośniczka oraz Trzebin i Trzebowa — nigdy nie warto mówić samego „Karmin”. Trzecia, językowa: dopełniacz, celownik i miejscownik brzmią tak samo, „Dobrzycy”, ale po słowie „gmina” nazwa stoi w mianowniku — poprawnie jest „gmina Dobrzyca”, a nie „gminy Dobrzycy”. Formy „w Dobrzycej” nie ma w ogóle.",
  ],
  districts: [],

  nearbyHeading: "Poza Dobrzycę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Pleszewa, Koźmina Wielkopolskiego, Jarocina, Krotoszyna, Kobylina i Ostrowa Wielkopolskiego — wszędzie bezpłatnie, tak samo jak w samej Dobrzycy.",
  ],
  nearbyTowns: ["Pleszew", "Koźmin Wielkopolski", "Jarocin", "Krotoszyn", "Ostrów Wielkopolski", "Kobylin"],

  about: blokOMnie("do Dobrzycy", "w Dobrzycy i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dobrzycy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedemnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Pierwsza: „w Dobrzycy” może oznaczać miasto, gminę albo sołectwo o tej samej nazwie, bo dwa sołectwa leżą wewnątrz miasta — warto dopowiedzieć, o które chodzi. Druga, adresowa: w gminie są osobno Karmin, Karminek i Karminiec, więc lepiej podać pełną nazwę wsi.",
    },
    ...faqWspolne("w Dobrzycy"),
    {
      question: "Postanowiłam gotować inaczej i po tygodniu wróciłam do starego. Dlaczego tak trudno to zmienić?",
      answer:
        "Bo postanowienie zmienia się w jeden dzień, a nawyk nie. Dobrzyca jest tu dobrym obrazem: jest miastem od 1 stycznia 2014 roku, a ponad dekadę później jej obszar wciąż dzieli się na dwa sołectwa, z sołtysami i zebraniami. Status zmienił się datą, sposób organizacji nie zmienił się wcale. W kuchni działa to identycznie: nawyk siedzi nie w decyzji i nie w sprzęcie, tylko w rękach — w tym, po co sięgacie odruchowo i w jakiej kolejności. Dlatego pierwsze tygodnie po zmianie wyglądają jak poprzednie i to normalne. Ruch jest wbrew pokusie: nie zmieniajcie wszystkiego naraz, tylko przypnijcie nowy sposób do jednego stałego punktu w tygodniu i powtarzajcie go tylko wtedy. I jeszcze jedno — nie każdy stary sposób trzeba zmieniać. Powodem do zmiany jest to, że coś realnie przeszkadza, a nie to, że jest stare.",
    },
    {
      question: "Czy Thermomix sprawi, że będę gotować częściej?",
      answer:
        "Sam z siebie nie sprawi i nie będę tego obiecywać. Ułatwia bardzo dużo, bo danie gotuje się bez pilnowania i w jednym naczyniu, ale to nadal Wy decydujecie, czy w środę coś się ugotuje. Różnicę robi konkretny plan: które danie, w który dzień, zamiast czego. Jeśli kupicie urządzenie bez takiego pomysłu, jest spora szansa, że będzie stało i będzie wyrzutem sumienia — widziałam to i wolę o tym uprzedzić. Dlatego przy prezentacji pytam, co gotujecie w zwykły wtorek, a nie co chcielibyście ugotować od święta.",
    },
  ],

  geo: { lat: 51.865, lng: 17.6019 },
};
