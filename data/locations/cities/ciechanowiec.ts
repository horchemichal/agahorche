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
 * CIECHANOWIEC — gmina miejsko-wiejska w powiecie
 * WYSOKOMAZOWIECKIM.
 * MIASTO 4 340, GMINA 7 898 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 19,5 km², GMINY 201,2 km².
 * 38 MIEJSCOWOŚCI. ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 4 600 — ZAWYŻONE.
 * ⚠ Wrota Podlasia podają 9 787 dla gminy — DANE STARSZE
 * I NIEDATOWANE. Trzymam się GUS.
 *
 * PRAWA MIEJSKIE — ⚠ ROKU NIE PODAJĘ Z PEWNOŚCIĄ.
 * Strona miasta: 1429 r., książę mazowiecki JANUSZ I STARSZY.
 * Wrota Podlasia: „prawdopodobnie na początku XV wieku
 * z rąk księcia mazowieckiego Janusza I" — BEZ ROKU.
 * PISZĘ: „w pierwszej połowie XV wieku, z rąk księcia
 * mazowieckiego Janusza I Starszego".
 * ⚠ TYPU PRAWA NIE PODAJĘ.
 * PRZYNALEŻNOŚĆ: historycznie MAZOWSZE, kasztelania święcka;
 * dziś województwo podlaskie, kulturowo pogranicze
 * mazowiecko-podlaskie i nadbużańskie.
 *
 * ⚠⚠ MIASTO PODZIELONE GRANICĄ PAŃSTWA — CIEKAWOSTKA
 * ADMINISTRACYJNA PIERWSZEJ KLASY.
 * Lato 1807 r. — RZEKA NURZEC STAJE SIĘ GRANICĄ: lewobrzeżny
 * Stary Ciechanowiec trafia do Cesarstwa Rosyjskiego,
 * prawobrzeżny Nowy Ciechanowiec do Księstwa Warszawskiego.
 * Podział trwa do 1918 r.; potem miasto POZOSTAJE PODZIELONE
 * ADMINISTRACYJNIE (jedna strona miastem, druga osadą)
 * jeszcze ok. 20 lat, do ok. 1938 r.
 * DO DZIŚ NURZEC DZIELI MIASTO MIĘDZY DWIE DIECEZJE:
 * DROHICZYŃSKĄ I ŁOMŻYŃSKĄ.
 * ⚠ OPISUJĘ TO WYŁĄCZNIE JAKO CIEKAWOSTKĘ ADMINISTRACYJNĄ
 * I KOŚCIELNĄ. ZERO kontekstu zaborów jako krzywdy, ZERO
 * Napoleona jako postaci, ZERO polityki. Suchy fakt.
 * 1870 r. — prawobrzeżna część traci prawa miejskie.
 *
 * PRZYRODA: nad NURCEM, na północnym krańcu OBSZARU
 * CHRONIONEGO KRAJOBRAZU DOLINY BUGU I NURCA.
 *
 * ZABYTKI:
 * KOŚCIÓŁ TRÓJCY PRZENAJŚWIĘTSZEJ — murowany, 1739 r.,
 * fundacja FRANCISZKA MAKSYMILIANA OSSOLIŃSKIEGO.
 * SZPITAL SIÓSTR MIŁOSIERDZIA — XVIII w.
 * PAŁAC HRABIÓW STARZEŃSKICH — zespół pałacowo-parkowy
 * z poł. XIX w., przebudowany na siedzibę muzeum w 1964 r.
 * BUDYNEK SYNAGOGI — XVIII w., przebudowany w 2012 r.
 * na siedzibę ośrodka kultury. ⚠ WYŁĄCZNIE JAKO BUDYNEK.
 * CERKIEW WNIEBOWSTĄPIENIA PAŃSKIEGO — 1884 r.
 * DREWNIANY KOŚCIÓŁ ŚW. DOROTY W WINNEJ-POŚWIĘTNEJ — 1696 r.
 *
 * ⚠⚠ MUZEUM ROLNICTWA im. ks. KRZYSZTOFA KLUKA — RDZEŃ.
 * ⚠ SPRZECZNOŚĆ: strona muzeum podaje „rok założenia 1962",
 * inne źródło: starania od 1962, OFICJALNE OTWARCIE
 * 5 LIPCA 1964 r. PODAJĘ OBIE INFORMACJE JAKO JEDNĄ:
 * starania od 1962, otwarcie w 1964.
 * POWIERZCHNIA 26 ha. Ponad 10 000 eksponatów etnograficznych,
 * ponad 4 000 historycznych, ok. 700 MASZYN I NARZĘDZI
 * ROLNICZYCH. 11 DZIAŁÓW, w tym DZIAŁ TRADYCJI ZIELARSKICH.
 * SKANSEN MAZOWIECKO-PODLASKI — utworzony 1970 r.,
 * 51 OBIEKTÓW, w tym 47 BUDYNKÓW DREWNIANYCH, głównie
 * z XVIII i XIX w., konstrukcja zrębowa na jaskółczy ogon.
 * W tym: 9 chat, dwór ziemiański, 2 KIERATY (MANEŻE),
 * 2 lamusy dworskie, KUŹNIA, bróg na siano, 4 stodoły,
 * 3 obory, WIATRAK TYPU KOŹLAK, gajówka, spichlerze.
 * ⚠⚠ CZYNNY, PRACUJĄCY MŁYN WODNY z poł. XIX w. — JEDYNY
 * OBIEKT ZACHOWANY NA SWOIM PIERWOTNYM MIEJSCU.
 * Pierwszy obiekt przeniesiony w 1967 r.: WIELOBOCZNY MANEŻ
 * DREWNIANY ZE WSI USZA MAŁA.
 * MUZEUM WETERYNARII — otwarte 1982 r.
 * ⚠⚠ OGRÓD ZIOŁOWY — PODSTAWA KĄTA. Założony w CZERWCU
 * 1984 r., 680 KWATER, zaprojektowany na podstawie rejestru
 * z „DYKCYONARZA ROŚLINNEGO" ks. Kluka, wg systemu Linneusza.
 * Rośliny lecznicze, użytkowe I TRUJĄCE (tojad, szalej
 * jadowity, bieluń).
 * ⚠ O ROŚLINACH TRUJĄCYCH WSPOMINAM WYŁĄCZNIE JAKO O CZĘŚCI
 * EKSPOZYCJI MUZEALNEJ. ZERO instrukcji, ZERO zachęty
 * do zbierania czegokolwiek dziko rosnącego.
 *
 * ⚠⚠ KS. KRZYSZTOF KLUK — 1739–1796, urodzony i zmarły
 * w Ciechanowcu, PROBOSZCZ CIECHANOWIECKI OD 1770 r.
 * „DYKCYONARZ ROŚLINNY" (1786–1788, 3 tomy) z opisami
 * ok. 1500 GATUNKÓW. WPROWADZIŁ DO POLSZCZYZNY TERMINY
 * BOTANICZNE UŻYWANE DO DZIŚ: KWIATOSTAN, KORONA, KIELICH.
 * W 1780 r. honorowy doktorat nauk filozoficznych.
 * ⚠ DATY 1739–1803 z innego źródła są BŁĘDNE. Używam 1739–1796.
 *
 * LISTA PRODUKTÓW TRADYCYJNYCH — DWA POWIĄZANIA:
 * 1) NADBUŻAŃSKA KAWA ŻOŁĘDZIÓWKA — wpis 29 SIERPNIA 2008 r.
 *    Uzasadnienie tradycji opiera się WPROST na ks. Kluku,
 *    proboszczu ciechanowieckim. Miejscowości: Drohiczyn,
 *    CIECHANOWIEC, Siemiatycze.
 *    ⚠ KĄT ŻOŁĘDZIÓWKI WYKORZYSTANY W SIEMIATYCZACH —
 *    tutaj wymieniam ją tylko jako fakt, nie rozwijam.
 * 2) PIWO JAŁOWCOWE — wpis 5 KWIETNIA 2023 r., kategoria
 *    napoje. Wytwórcą wskazanym we wniosku jest MUZEUM
 *    ROLNICTWA, wytwarzające je od lat 60. XX w. wg receptury
 *    WŁADYSŁAWY RYBAK z Tworkowic.
 *    ⚠ SPRZECZNOŚĆ: karta gov.pl opisuje tradycję jako
 *    KURPIOWSKĄ, a wytwórcą jest muzeum w Ciechanowcu.
 *    NIE PRZYPISUJĘ TRADYCJI REGIONOWI — piszę wyłącznie,
 *    że muzeum wytwarza je od lat 60. wg receptury
 *    Władysławy Rybak.
 *    ⚠ ALKOHOL: wymieniam wpis jako fakt z Listy. ZERO
 *    zachęty do spożycia, ZERO instrukcji wytwarzania,
 *    ZERO opisu smaku jako rekomendacji.
 *
 * PODLASKIE ŚWIĘTO CHLEBA — XXIV edycja 9 SIERPNIA 2026 r.
 * Ok. 40 000 zwiedzających. Wypiek chleba w piecu polowym,
 * omłoty maszynami napędzanymi lokomobilą parową, parada
 * zabytkowych ciągników, konkurs na RÓWNIANKĘ.
 * ⚠ ROKU PIERWSZEJ EDYCJI NIE PODAJĘ — wyliczony.
 * Inne imprezy muzeum: Jarmark św. Wojciecha, Bazarek
 * Wielkanocny, WYKOPKI POD WIATRAKIEM.
 * W gminie: NAJSTARSZA W POLSCE HODOWLA ALPAK CHILIJSKICH
 * W BUJENCE, domowa olejarnia tłocząca oleje na zimno.
 * ⚠ OLEJARNI NIE NAZYWAM — bez nazw firm.
 * CIECHANOWIEC NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: ZIOŁA ŚWIEŻE KONTRA SUSZONE — i kiedy które dodawać.
 * Kąt od ogrodu ziołowego w 680 kwaterach, zaprojektowanego
 * według słownika roślin napisanego przez tutejszego
 * proboszcza w latach 1786–1788.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że świeże i suszone to nie są wersje tej samej rzeczy,
 *   tylko dwa różne składniki o tej samej nazwie,
 * — SUSZENIE ZABIERA to, co ulotne, i ZOSTAWIA to, co trwałe
 *   — dlatego suszony koperek jest prawie bez smaku,
 *   a suszone oregano bywa lepsze od świeżego,
 * — KTÓRE ZIOŁA SUSZENIE ZNOSZĄ: oregano, majeranek, tymianek,
 *   rozmaryn, lubczyk, cząber, laur — twarde, o mocnym olejku,
 * — KTÓRYCH NIE ZNOSZĄ: natka, koperek, bazylia, szczypiorek,
 *   kolendra — miękkie i wodniste,
 * — MOMENT DODANIA: suszone wcześnie, bo potrzebują czasu
 *   i płynu; świeże na końcu, bo gotowanie je zabija,
 * — że to jedna z najczęstszych przyczyn dania, w którym
 *   „ziół nie czuć" mimo dodania,
 * — ŻE ILOŚCI NIE PODAM — bo zależy od zioła i od tego,
 *   jak dawno zostało wysuszone,
 * — że suszone zioła się starzeją i po roku są tylko kolorem,
 * — UCZCIWIE: to urządzenie nie ma tu żadnej przewagi,
 *   a przy świeżych ziołach jest wręcz gorsze od noża —
 *   ostrze na obrotach rozbija liście i one ciemnieją,
 * — jedyne, co robi dobrze: rozprowadza suszone równomiernie
 *   w gorącym płynie, bo miesza bez przerwy.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ANI PRZELICZNIKÓW świeże–suszone.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI ZIELARSKICH.
 *   ZERO ziół jako leków, ZERO naparów na cokolwiek,
 *   ZERO „właściwości". Piszę WYŁĄCZNIE o smaku i aromacie.
 *   TWARDA GRANICA — to jest strona o gotowaniu, nie o ziołolecznictwie.
 * — ZERO zachęty do zbierania dziko rosnących roślin.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 *   SYNAGOGĘ wymieniam WYŁĄCZNIE jako budynek z XVIII w.,
 *   dziś siedzibę ośrodka kultury.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — CERKIEW wyłącznie jako zabytek z 1884 r.
 * — Podział miasta w 1807 r. — WYŁĄCZNIE jako ciekawostka
 *   administracyjna, bez zaborów jako tematu.
 * — ZERO biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Przyprawy całe kontra
 * mielone" (Pieniężno) dotyczą POSTACI przyprawy suchej.
 * „Doprawianie" (Węgorzewo) dotyczy momentu i ilości soli.
 * „Nieprecyzyjny język przepisów" (Pelplin) dotyczy słów
 * typu „szczypta". Tutaj chodzi o RÓŻNICĘ MIĘDZY ZIOŁEM
 * ŚWIEŻYM A SUSZONYM i o moment dodania każdego z nich.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku 1429 jako pewnego.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ roku pierwszej edycji Święta Chleba.
 * — NIE PRZYPISUJĘ tradycji piwa jałowcowego Ciechanowcowi
 *   ani Podlasiu — podaję tylko, kto je wytwarza.
 * — NIE OPISUJĘ ziół jako leków.
 * — NIE MYLĘ CIECHANOWCA (podlaskie, powiat wysokomazowiecki)
 *   z CIECHANOWEM (mazowieckie). FAQ to rozróżnia.
 * — NIE WIĄŻĘ ks. Kluka z Drohiczynem ani Siemiatyczami —
 *   proboszczem był w Ciechanowcu.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 4 340, gmina 7 898 mieszkańców na 201,2 km²,
 *   38 miejscowości,
 * — prawa miejskie w pierwszej połowie XV w. z rąk księcia
 *   mazowieckiego Janusza I Starszego; historycznie Mazowsze,
 * — latem 1807 r. Nurzec stał się granicą i podzielił miasto
 *   na dwie części należące do dwóch państw; podział trwał
 *   do 1918 r., a scalanie zajęło jeszcze około dwudziestu lat;
 *   do dziś rzeka dzieli miasto między diecezje drohiczyńską
 *   i łomżyńską,
 * — kościół Trójcy Przenajświętszej z 1739 r., fundacji
 *   Franciszka Maksymiliana Ossolińskiego; drewniany kościół
 *   świętej Doroty w Winnej-Poświętnej z 1696 r.,
 * — Muzeum Rolnictwa im. ks. Krzysztofa Kluka: starania
 *   od 1962 r., otwarte w 1964, mieści się w zespole
 *   pałacowo-parkowym Starzeńskich z połowy XIX w., zajmuje
 *   26 ha, ma jedenaście działów, ponad dziesięć tysięcy
 *   eksponatów etnograficznych i około siedmiuset maszyn
 *   i narzędzi rolniczych,
 * — Skansen Mazowiecko-Podlaski utworzony w 1970 r., liczy
 *   51 obiektów, w tym 47 budynków drewnianych, głównie
 *   z XVIII i XIX w., wśród nich wiatrak typu koźlak, kuźnię,
 *   dwa kieraty i czynny młyn wodny z połowy XIX w. — jedyny
 *   obiekt zachowany na swoim pierwotnym miejscu; pierwszym
 *   przeniesionym obiektem był w 1967 r. wieloboczny maneż
 *   ze wsi Usza Mała,
 * — ogród ziołowy założony w czerwcu 1984 r., liczy 680 kwater
 *   i został zaprojektowany na podstawie „Dykcyonarza
 *   roślinnego" ks. Kluka, według systemu Linneusza,
 * — ks. Krzysztof Kluk (1739–1796), urodzony i zmarły
 *   w Ciechanowcu, od 1770 r. tutejszy proboszcz, opisał
 *   w „Dykcyonarzu roślinnym" (1786–1788) około 1500 gatunków
 *   i wprowadził do polszczyzny terminy botaniczne używane
 *   do dziś: kwiatostan, korona, kielich,
 * — Podlaskie Święto Chleba gromadzi około czterdziestu
 *   tysięcy zwiedzających; w programie jest wypiek chleba
 *   w piecu polowym i omłoty maszynami napędzanymi lokomobilą
 *   parową,
 * — w gminie działa najstarsza w Polsce hodowla alpak
 *   chilijskich, w Bujence.
 */
export const CIECHANOWIEC: CityContent = {
  slug: "ciechanowiec",
  h1: "Thermomix Ciechanowiec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ciechanowiec — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ciechanowcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ciechanowiec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ciechanowcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ciechanowca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Ciechanowiec i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Świeże i suszone zioło to nie dwie wersje jednej rzeczy. To dwa składniki.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ciechanowcu – jak wygląda prezentacja?",
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
      id: "ziola-swieze-suszone",
      heading: "Ogród w sześciuset osiemdziesięciu kwaterach — czyli zioła świeże kontra suszone",
      paragraphs: [
        "Ksiądz Krzysztof Kluk urodził się w Ciechanowcu w 1739 roku, tu był od 1770 proboszczem i tu zmarł w 1796. W latach 1786–1788 wydał trzytomowy „Dykcyonarz roślinny”, w którym opisał około półtora tysiąca gatunków — i przy okazji dał polszczyźnie słowa, których używamy do dziś, nawet o tym nie wiedząc: kwiatostan, korona, kielich. W czerwcu 1984 roku przy tutejszym Muzeum Rolnictwa, które nosi jego imię, założono ogród ziołowy w sześciuset osiemdziesięciu kwaterach, zaprojektowany według jego rejestru i systemu Linneusza.",
        "Skoro więc jesteśmy w mieście, w którym rośliny nazwano po polsku, napiszę o różnicy, którą prawie wszyscy w kuchni lekceważą: świeże i suszone zioło to nie są dwie wersje tej samej rzeczy. To dwa różne składniki, które łączy tylko nazwa.",
        "Suszenie zabiera to, co ulotne, i zostawia to, co trwałe. Delikatne, lotne olejki znikają pierwsze; zostaje to, co cięższe i bardziej gorzkie. Dlatego suszony koperek jest niemal bez smaku i szkoda na niego miejsca w szafce, a suszone oregano bywa wyraźniejsze i lepsze od świeżego.",
        "Podział przebiega mniej więcej tak, jak wyglądają same rośliny. Suszenie znoszą zioła twarde, o mocnym olejku: oregano, majeranek, tymianek, rozmaryn, lubczyk, cząber, liść laurowy. Nie znoszą go zioła miękkie i wodniste: natka pietruszki, koperek, bazylia, szczypiorek, kolendra. Te drugie kupuje się świeże albo wcale.",
        "Z tego wynika najważniejsza rzecz praktyczna, czyli moment dodania. Suszone dodaje się wcześnie, bo potrzebują czasu i gorącego płynu, żeby oddać aromat — wrzucone na końcu zostaną tylko zielonym pyłkiem na wierzchu. Świeże dodaje się na końcu albo już po zdjęciu z ognia, bo gotowanie je zabija w kilkadziesiąt sekund.",
        "To jest, jak sądzę, najczęstsza przyczyna dania, w którym „ziół nie czuć” mimo że się je dodało. Nie za mało dodano. Dodano w złym momencie.",
        "Ilości Wam nie podam i to nie z przekory. Po prostu nie da się: przelicznik świeże–suszone zależy od zioła, od tego, jak zostało wysuszone, i przede wszystkim od tego, jak dawno. Bo suszone zioła się starzeją. Po roku w otwartym słoiku zostaje z nich głównie kolor. Jeśli macie w szafce coś, czego nie pamiętacie kiedy kupiliście — to już nie jest przyprawa.",
        "Teraz uczciwie o sprzęcie. W tej akurat sprawie nie ma on żadnej przewagi, a przy ziołach świeżych jest wręcz gorszy od noża. Ostrze na obrotach nie tnie delikatnych liści, tylko je rozbija — bazylia i natka ciemnieją, puszczają sok i tracą zapach. Deska i ostry nóż wygrywają bezdyskusyjnie i nie zamierzam twierdzić inaczej.",
        "Jedno robi dobrze: rozprowadza suszone zioła równomiernie w gorącym płynie, bo miesza bez przerwy i nic nie zostaje grudką na dnie. To wszystko. Uważam, że warto wiedzieć, gdzie sprzęt pomaga, a gdzie tylko przeszkadza — i zioła są dobrym przykładem tego drugiego.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ciechanowcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w domu zioła z ogródka albo z parapetu, powiedzcie o tym przy umawianiu — pokażę, przy których daniach ma sens używać ich świeżych, a przy których nie zrobi to różnicy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ciechanowcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ciechanowieckiej rodziny",
      paragraphs: [
        "Samo miasto liczy przeszło cztery tysiące trzysta mieszkańców, a cała gmina blisko osiem tysięcy, w trzydziestu ośmiu miejscowościach. Prawa miejskie Ciechanowiec dostał w pierwszej połowie piętnastego wieku z rąk księcia mazowieckiego Janusza I Starszego — historycznie to Mazowsze, dziś województwo podlaskie. Miasto ma za sobą rzadką historię administracyjną: latem 1807 roku Nurzec stał się granicą państwową i podzielił je na dwie części należące do dwóch państw; podział trwał do 1918 roku, a scalanie zajęło jeszcze około dwudziestu lat. Do dziś rzeka dzieli miasto między diecezje drohiczyńską i łomżyńską. Kościół Trójcy Przenajświętszej pochodzi z 1739 roku, z fundacji Franciszka Maksymiliana Ossolińskiego, a w Winnej-Poświętnej stoi drewniany kościół świętej Doroty z 1696. Najważniejsze jest jednak Muzeum Rolnictwa imienia księdza Krzysztofa Kluka: otwarte w 1964 roku, zajmuje dwadzieścia sześć hektarów, ma jedenaście działów i około siedmiuset maszyn i narzędzi rolniczych. Należy do niego Skansen Mazowiecko-Podlaski z 1970 roku — pięćdziesiąt jeden obiektów, w tym czterdzieści siedem budynków drewnianych, wiatrak typu koźlak i czynny młyn wodny z połowy dziewiętnastego wieku, jedyny zachowany na swoim pierwotnym miejscu — oraz ogród ziołowy w sześciuset osiemdziesięciu kwaterach. Podlaskie Święto Chleba gromadzi tu około czterdziestu tysięcy osób.",
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

  districtsHeading: "Do których części gminy Ciechanowiec dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach Nurca — i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Ciechanowiec też przyjadę",
  nearbyParagraphs: [
    "Siemiatycze, Brańsk, Czyżew i Wysokie Mazowieckie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Siemiatycze", "Brańsk", "Czyżew", "Wysokie Mazowieckie"],

  about: blokOMnie("do Ciechanowca", "w Ciechanowcu i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ciechanowca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta po obu stronach Nurca i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo to najczęstsza pomyłka: Ciechanowiec w powiecie wysokomazowieckim to nie Ciechanów w województwie mazowieckim — dzieli je około dwustu kilometrów.",
    },
    ...faqWspolne("w Ciechanowcu"),
    {
      question: "Czy suszone zioła można zastąpić świeżymi jeden do jednego?",
      answer:
        "Nie, bo to nie są dwie wersje tej samej rzeczy. Suszenie zabiera to, co ulotne, i zostawia to, co trwałe — dlatego suszony koperek jest prawie bez smaku, a suszone oregano bywa wyraźniejsze od świeżego. Suszenie znoszą zioła twarde: oregano, majeranek, tymianek, rozmaryn, lubczyk, cząber, laur. Nie znoszą go natka, koperek, bazylia, szczypiorek i kolendra.",
    },
    {
      question: "Kiedy dodawać zioła do dania?",
      answer:
        "Suszone wcześnie, bo potrzebują czasu i gorącego płynu, żeby oddać aromat. Świeże na końcu albo już po zdjęciu z ognia, bo gotowanie zabija je w kilkadziesiąt sekund. To najczęstsza przyczyna dania, w którym ziół nie czuć mimo że się je dodało — nie za mało, tylko w złym momencie.",
    },
    {
      question: "Czy w Thermomixie warto siekać świeże zioła?",
      answer:
        "Nie i mówię to wprost. Ostrze na obrotach nie tnie delikatnych liści, tylko je rozbija — bazylia i natka ciemnieją, puszczają sok i tracą zapach. Tu deska i ostry nóż wygrywają bezdyskusyjnie. Urządzenie robi dobrze co innego: rozprowadza suszone zioła równomiernie w gorącym płynie, bez grudek na dnie.",
    },
  ],

  geo: { lat: 52.6789, lng: 22.4972 },
};
