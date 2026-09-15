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
 * NAKŁO NAD NOTECIĄ — powiat nakielski, woj. kujawsko-pomorskie.
 * MIASTO 16 884 (GUS 31.12.2024), 10,8 km², 1 560,4 os./km².
 * Gmina miejsko-wiejska: 29 627 osób, 187,0 km², 29 wsi.
 * ⚠ BRIEF PODAWAŁ „ok. 18 tys." — ZAWYŻENIE O OK. 1 100.
 * ⚠ Angielska Wikipedia podaje 23 687 — to niemal na pewno
 *   dane GMINY, nie miasta. NIE UŻYWAĆ.
 *
 * ⚠ HOMONIM: NAKŁO ŚLĄSKIE w gminie Świerklaniec,
 *   woj. śląskie. Istnieje też kilka wsi o nazwie „Nakło".
 *   ⚠ W TEKŚCIE ZAWSZE PEŁNA NAZWA „Nakło nad Notecią".
 *   FAQ TO ROZRÓŻNIA.
 * Odmiana: „do Nakła nad Notecią", „w Nakle nad Notecią",
 *   „nakielski". ⚠ NAZWY MIESZKAŃCA NIE POTWIERDZONO
 *   SŁOWNIKOWO — NIE UŻYWAM JEJ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1299 R. — akt lokacyjny WŁADYSŁAWA ŁOKIETKA na prawie
 *   magdeburskim; dziedzicznym wójtem-zasadźcą był Piotr
 *   z Dusden; miasto książęce, potem królewskie,
 * — pierwsze rzemiosła: PIEKARNICTWO, RZEŹNICTWO,
 *   piwowarstwo i gorzelnictwo; dalej krawiectwo, szewstwo,
 *   GARNCARSTWO, sukiennictwo i RYBOŁÓWSTWO,
 * — ⚠⚠ PODSTAWA KĄTA — PIWOWARSTWO JAKO RZEMIOSŁO:
 *   3 STYCZNIA 1520 R. król potwierdził dawne i nadał nowe
 *   przywileje, w tym PRZYWILEJ WARZENIA PIWA W PROMIENIU
 *   JEDNEJ MILI WOKÓŁ MIASTA; w 1611 r. archiwalia dóbr
 *   królewskich potwierdzają istnienie CECHU PIWOWARÓW;
 *   w 1810 r. działały w mieście CZTERY BROWARY,
 *   a wśród przemysłowców wymieniono CZTERNASTU PIWOWARÓW.
 *   ⚠⚠ ROZBIEŻNOŚĆ W ŹRÓDLE: karty ministerialne nazywają
 *   władcę „Zygmuntem III", ale Zygmunt III Waza panował
 *   w latach 1587–1632. Przy dacie 1520 mógł to być
 *   wyłącznie Zygmunt I Stary. ⚠ PODAJĘ DATĘ, NIE IMIĘ
 *   WŁADCY. TWARDA GRANICA.
 *   ⚠⚠⚠ PIWO WYSTĘPUJE WYŁĄCZNIE JAKO HISTORIA RZEMIOSŁA:
 *   cech, przywilej, mila piwna, słód. NIGDY JAKO NAPÓJ
 *   ANI ZACHĘTA. ZERO OPISU SMAKU, ZERO NAMOWY.
 *   TEMATEM KUCHENNYM JEST SŁÓD I TEMPERATURA,
 *   NIE PIWO. TWARDA GRANICA — NAJWAŻNIEJSZA NA TEJ
 *   STRONIE.
 * — KANAŁ BYDGOSKI: budowa rozpoczęta 1 MARCA 1773 R.,
 *   ukończona wiosną 1774; długość pierwotna 26,77 km;
 *   PIERWOTNIE DZIEWIĘĆ ŚLUZ DREWNIANYCH; przebudowa
 *   w latach 1910–1914 dla statków do 400 ton,
 * — TRZY ŚLUZY W GMINIE NAKŁO: Józefinki (nr 7, z lat
 *   1773–1774, przebudowana 1910–1912, komora 57,4 × 9,6 m),
 *   Nakło Wschód (nr 8, z lat 1800–1801) i Nakło Zachód
 *   (nr 9, z lat 1811–1813, rozbudowana w latach 1878–1883
 *   na dwukomorową); przy Józefinkach około 1870–1871
 *   zbudowano ZAKŁAD PODNOSZENIA WODY z pompami,
 * — SPŁAWIANO DREWNO I ZBOŻE,
 * — NOTEĆ ma 391 km i jest największym dopływem Warty;
 *   Noteć Górna jest nieuregulowana i meandrująca,
 *   a NOTEĆ DOLNA — WŁAŚNIE OD NAKŁA — skanalizowana,
 *   przedzielona jazami i śluzami. Nakło jest punktem
 *   podziału. Międzynarodowa droga wodna E-70,
 * — 1 SIERPNIA 1851 R. uruchomiono linię kolejową
 *   Bydgoszcz–Nakło.
 *
 * DZIŚ: cukrownia po modernizacji z 2018 r. przerabia
 * osiem tysięcy ton buraka na dobę, zatrudnia 182 osoby
 * na stałe i około czterdziestu sezonowo, pracuje
 * czterozmianowo i skupuje od około 1 500 plantatorów
 * o średniej plantacji około ośmiu hektarów. Działa
 * przetwórstwo mięsne o tradycji od połowy XIX w.
 * Gospodarstwo rybackie w Ślesinie ma ponad 500 ha stawów
 * i produkuje 300–400 ton karpia rocznie, na obszarze
 * Natura 2000. Bydgoszcz leży około 30 km na wschód.
 * ⚠ KĄT „BURAKI" JEST ZAJĘTY (nowy-staw.ts) — cukrownię
 *   podaję jako fakt.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — TRZY TRAFIENIA,
 *   WSZYSTKIE ZWERYFIKOWANE:
 *   — „piwo nakielskie jasne" i „piwo nakielskie ciemne",
 *     oba wpisane 24.06.2008, pochodzenie: Nakło nad Notecią.
 *     ⚠⚠ NIE WYMIENIAM ICH W TREŚCI. Alkohol.
 *     TWARDA GRANICA.
 *   — „KARP NAKIELSKI", wpis 18.07.2016, pochodzenie:
 *     ŚLESIN k. Nakła nad Notecią. Z karty produktu:
 *     tradycja wywodzi się od Jeziora Ślesińskiego, hodowla
 *     według wzorców XIX-wiecznych, TRZYLETNI CYKL bez
 *     stymulatorów wzrostu, karp żywi się naturalnym
 *     pokarmem z TORFOWEGO DNA oraz ZBOŻEM Z OKOLICZNYCH
 *     PÓL; długość 40–60 cm, masa 1 100–1 800 g.
 *     ⚠ TO WYMIENIAM — z nazwą miejscowości pochodzenia.
 * ⚠ OSIEDLI NIE USTALONO. Ustalono natomiast SPOSÓB
 *   NAZEWNICTWA: jednostki pomocnicze miasta to „Samorządy
 *   Mieszkańców" oznaczone NUMERAMI, bez nazw własnych.
 *   districts PUSTE.
 *
 * KĄT: SŁODYCZ, KTÓRA SIĘ NIE DODAJE, TYLKO UWALNIA.
 * Kąt od nakielskiego cechu piwowarów i przywileju z 1520 r.
 * Zacieranie słodu polega na tym, że enzymy rozkładają
 * skrobię na cukry — ale robią to wyłącznie w wąskich
 * zakresach temperatury. Ta sama zasada rządzi w kuchni
 * wszystkim, co robi się słodkie samo z siebie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Nakło żyło z rzemiosła piwowarskiego: przywilej
 *   z 3 stycznia 1520 r. dawał prawo warzenia w promieniu
 *   jednej mili wokół miasta, w 1611 r. potwierdzono cech
 *   piwowarów, a w 1810 działały cztery browary,
 * — ŻE INTERESUJE MNIE TU WYŁĄCZNIE JEDEN ETAP TEGO
 *   RZEMIOSŁA — ZACIERANIE SŁODU — bo jest to najczystszy
 *   przykład zjawiska, które w kuchni działa bez przerwy,
 *   ⚠ MÓWIĘ WPROST, ŻE NIE PISZĘ O PICIU,
 * — ŻE ZACIERANIE POLEGA NA TYM, ŻE ENZYMY ZAWARTE
 *   W ZIARNIE ROZKŁADAJĄ SKROBIĘ NA CUKRY, ale pracują
 *   tylko w wąskim zakresie temperatury: za zimno —
 *   idzie zbyt wolno, za gorąco — enzymy przestają działać
 *   na dobre,
 * — ⚠⚠ ŻE DOKŁADNIE TO SAMO DZIEJE SIĘ W KUCHNI ZA KAŻDYM
 *   RAZEM, GDY COŚ ROBI SIĘ SŁODKIE SAMO — i że to jest
 *   rdzeń całego tekstu: SŁODYCZ W WARZYWACH NIE JEST
 *   DODAWANA, TYLKO UWALNIANA Z KROCHMALU,
 * — PRZYKŁADY, KTÓRE ZNA KAŻDY:
 *   — cebula duszona długo i powoli robi się słodka,
 *     a smażona szybko i mocno — nie,
 *   — marchew i pasternak pieczone są słodsze niż gotowane,
 *   — ziemniak trzymany w zimnie robi się słodkawy,
 *     bo skrobia zaczyna się w nim rozkładać,
 *   — bataty pieczone powoli są słodsze niż pieczone
 *     w wysokiej temperaturze,
 * — ⚠⚠ ŻE STĄD BIERZE SIĘ REGUŁA, KTÓRA WYGLĄDA
 *   NA SPRZECZNĄ Z INTUICJĄ: przy wydobywaniu słodyczy
 *   POWOLI I NIŻEJ daje więcej niż SZYBKO I MOCNIEJ.
 *   Mocny ogień przypieka powierzchnię, zanim środek
 *   zdąży cokolwiek uwolnić,
 * — ŻE DLATEGO CEBULI NA SŁODKO NIE DA SIĘ ZROBIĆ
 *   W DZIESIĘĆ MINUT i że przepisy, które to obiecują,
 *   po prostu opisują co innego,
 * — ŻE NIE MA TO NIC WSPÓLNEGO Z KARMELIZACJĄ CUKRU
 *   DODANEGO ⚠ ODSYŁAM DO STRONY O CUKRZE I KARMELU,
 *   NIE ROZWIJAM,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to jest jedno z tych zadań,
 *   w których urządzenie ma realną przewagę, bo polega ono
 *   na UTRZYMANIU NIEWYSOKIEJ TEMPERATURY PRZEZ DŁUGI CZAS
 *   PRZY CIĄGŁYM MIESZANIU — czyli na czymś, czego człowiek
 *   przy garnku nie wytrzyma. ⚠ ALE: cebula wyjdzie słodka
 *   i miękka, a NIE wyjdzie przyrumieniona, bo do tego
 *   potrzeba suchej patelni ⚠ ODSYŁAM DO STRONY
 *   O RUMIENIENIU.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZACHĘTY DO PICIA ALKOHOLU. Piwo pojawia się
 *   wyłącznie jako historia rzemiosła — cech, przywilej,
 *   liczba browarów. ŻADNEGO OPISU SMAKU, ŻADNEJ WZMIANKI
 *   O PRODUKTACH Z LISTY. TWARDA GRANICA.
 * — ⚠⚠ ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR —
 *   w szczególności ŻADNYCH KONKRETNYCH ZAKRESÓW
 *   TEMPERATUR ENZYMÓW. Mówię „wąski zakres" i nic więcej.
 *   TWARDA GRANICA.
 * — ŻADNYCH PRZEPISÓW I PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH —
 *   ZERO o cukrach prostych, indeksie glikemicznym
 *   i dietach. TWARDA GRANICA.
 * — ⚠ ŻADNYCH PORAD O PRZECHOWYWANIU ZIEMNIAKÓW
 *   W ZIMNIE OD STRONY BEZPIECZEŃSTWA — podaję sam fakt
 *   o słodkawym smaku.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEJ WZMIANKI O RZEŹNI — piszę „przetwórstwo".
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO pomników i miejsc pamięci wymienianych wśród
 *   obiektów miejskich.
 * — ZERO zamku w Nakle i jego zniszczeń; pożar z 1515 r.
 *   pomijam całkowicie — podaję samą datę przywileju
 *   z 1520 r.
 * — ZERO statystyk narodowościowych z lat 1839 i 1905.
 * — ZERO wyludniania i spadku liczby ludności gminy.
 * — ZERO tematów wojennych i wyznaniowych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CUKIER I KARMEL" (Koprzywnica) dotyczy CUKRU
 *   DODANEGO i tego, że się przypala. ⚠⚠ TUTAJ chodzi
 *   o CUKIER, KTÓREGO NIKT NIE DODAWAŁ — uwalniany
 *   ze skrobi. TWARDA GRANICA.
 * — „BURAKI" (Nowy Staw) dotyczą JEDNEGO WARZYWA.
 * — „WARZYWA KORZENIOWE" (Przeworsk) dotyczą GRUPY WARZYW
 *   i tego, skąd się biorą.
 * — „RUMIENIENIE" (Iłża) dotyczy BRĄZOWEGO KOLORU
 *   NA POWIERZCHNI.
 * — „DUSZENIE" (Łagów) dotyczy TECHNIKI.
 * — „DWA CIEPŁA W JEDNYM DANIU" (Lipsko) dotyczy
 *   KOLEJNOŚCI ETAPÓW.
 * — „SPULCHNIACZE" (Myszyniec) dotyczą SODY I PROSZKU.
 * TUTAJ chodzi o TEMPERATURĘ JAKO WARUNEK, W KTÓRYM
 * SKROBIA ZAMIENIA SIĘ W CUKIER.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ imienia władcy przy dacie 1520.
 * — NIE PODAJĘ konkretnych temperatur enzymów.
 * — NIE WYMIENIAM piw z Listy Produktów Tradycyjnych.
 * — NIE ZACHĘCAM do picia.
 * — NIE PISZĘ o pożarze zamku.
 * — NIE UŻYWAM liczby ludności z angielskiej Wikipedii.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE MYLĘ Nakła nad Notecią z Nakłem Śląskim.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nakło nad Notecią liczy 16 884 mieszkańców (GUS,
 *   31.12.2024) na 10,8 km², czyli ponad tysiąc pięćset
 *   osób na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 29 627 osób na 187 km² i obejmuje
 *   dwadzieścia dziewięć wsi,
 * — akt lokacyjny na prawie magdeburskim wydał w 1299 roku
 *   Władysław Łokietek, a dziedzicznym wójtem-zasadźcą był
 *   Piotr z Dusden; pierwszymi rzemiosłami były piekarnictwo,
 *   rzeźnictwo i piwowarstwo, a dalej krawiectwo, szewstwo,
 *   garncarstwo, sukiennictwo i rybołówstwo,
 * — 3 stycznia 1520 roku król potwierdził dawne i nadał
 *   nowe przywileje, w tym prawo warzenia piwa w promieniu
 *   jednej mili wokół miasta; w 1611 roku archiwalia dóbr
 *   królewskich potwierdzają istnienie cechu piwowarów,
 *   a w 1810 działały tu cztery browary i wymieniano
 *   czternastu piwowarów,
 * — budowę Kanału Bydgoskiego rozpoczęto 1 marca 1773 roku
 *   i ukończono wiosną 1774; kanał miał pierwotnie
 *   26,77 kilometra i dziewięć drewnianych śluz,
 *   a w latach 1910–1914 przebudowano go dla statków
 *   do czterystu ton; w gminie Nakło leżą trzy śluzy —
 *   Józefinki z lat 1773–1774, o komorze 57,4 na 9,6 metra,
 *   Nakło Wschód z lat 1800–1801 i Nakło Zachód z lat
 *   1811–1813, rozbudowane w latach 1878–1883 na
 *   dwukomorowe; przy Józefinkach około 1870 roku
 *   zbudowano zakład podnoszenia wody z pompami,
 * — spławiano tędy drewno i zboże; Noteć ma 391 kilometrów
 *   i jest największym dopływem Warty, przy czym jej górny
 *   bieg jest nieuregulowany i meandrujący, a dolny —
 *   właśnie od Nakła — skanalizowany i przedzielony jazami
 *   oraz śluzami; prowadzi tędy międzynarodowa droga wodna
 *   E-70,
 * — 1 sierpnia 1851 roku uruchomiono linię kolejową
 *   z Bydgoszczy do Nakła,
 * — dzisiejsza cukrownia po modernizacji z 2018 roku
 *   przerabia osiem tysięcy ton buraka na dobę, pracuje
 *   czterozmianowo i skupuje surowiec od około tysiąca
 *   pięciuset plantatorów o średniej plantacji ośmiu
 *   hektarów; w mieście działa też przetwórstwo mięsne
 *   o tradycji sięgającej połowy XIX wieku,
 * — gospodarstwo rybackie w Ślesinie ma ponad pięćset
 *   hektarów stawów na obszarze Natura 2000 i produkuje
 *   rocznie od trzystu do czterystu ton karpia; „karp
 *   nakielski" trafił 18 lipca 2016 roku na ministerialną
 *   Listę Produktów Tradycyjnych — hoduje się go według
 *   wzorców dziewiętnastowiecznych, w trzyletnim cyklu,
 *   a ryba żywi się naturalnym pokarmem z torfowego dna
 *   i zbożem z okolicznych pól.
 */
export const NAKLO_NAD_NOTECIA: CityContent = {
  slug: "naklo-nad-notecia",
  h1: "Thermomix Nakło nad Notecią – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nakło nad Notecią — przedstawiciel i prezentacja",
  seoDescription:
    "Thermomix w Nakle nad Notecią: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nakło nad Notecią — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nakle nad Notecią. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nakła nad Notecią z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Nakło nad Notecią"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Słodycz w warzywach nie jest dodawana. Jest uwalniana — i tylko w swojej temperaturze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nakle nad Notecią – jak wygląda prezentacja?",
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
      id: "slodycz",
      heading: "Słodycz, której nikt nie dodawał",
      paragraphs: [
        "Nakło przez wieki żyło z rzemiosła piwowarskiego. Przywilej z 3 stycznia 1520 roku dawał tutejszym mieszczanom prawo warzenia w promieniu jednej mili wokół miasta, w 1611 roku archiwalia dóbr królewskich potwierdzają istnienie cechu piwowarów, a w 1810 działały tu cztery browary i wymieniano czternastu piwowarów.",
        "Nie piszę o piciu i nie będę o nim pisać. Interesuje mnie jeden etap tego rzemiosła, bo jest najczystszym przykładem zjawiska, które w kuchni działa bez przerwy, a prawie nikt go nie nazywa.",
        "Chodzi o zacieranie słodu. Enzymy zawarte w ziarnie rozkładają skrobię na cukry — ale pracują tylko w wąskim zakresie temperatury. Za zimno: idzie tak wolno, że praktycznie nic się nie dzieje. Za gorąco: enzymy przestają działać, i to nieodwracalnie. Cała umiejętność polega na tym, żeby trafić pomiędzy.",
        "A teraz rzecz najważniejsza: dokładnie to samo dzieje się w kuchni za każdym razem, gdy coś robi się słodkie samo z siebie.",
        "Słodycz w warzywach nie jest dodawana. Ona jest uwalniana z krochmalu — i tylko wtedy, gdy panują po temu warunki.",
        "Przykłady zna każdy, tylko nikt ich ze sobą nie łączy. Cebula duszona długo i powoli robi się wyraźnie słodka; ta sama cebula usmażona szybko na mocnym ogniu — nie. Marchew i pasternak pieczone są słodsze niż gotowane w wodzie. Ziemniak, który poleżał w zimnie, robi się słodkawy, bo skrobia zaczyna się w nim rozkładać. Bataty pieczone powoli są słodsze niż te wrzucone do bardzo gorącego piekarnika.",
        "Z tego wynika reguła, która wygląda na sprzeczną z intuicją i dlatego rzadko się jej trzyma: przy wydobywaniu słodyczy powoli i niżej daje więcej niż szybko i mocniej. Mocny ogień przypieka powierzchnię, zanim środek zdąży cokolwiek uwolnić — i dostajemy ładny kolor bez tego smaku, po który sięgaliśmy.",
        "Dlatego cebuli na słodko nie da się zrobić w dziesięć minut. Przepisy, które to obiecują, po prostu opisują co innego — podsmażoną cebulę, która też jest dobra, tylko jest czymś innym.",
        "Zaznaczam wyraźnie, żeby nie było pomyłki: to nie ma nic wspólnego z karmelizacją cukru, który sami dosypaliśmy. O cukrze dodanym i o tym, jak się przypala, pisałam osobno. Tutaj chodzi o cukier, którego nikt nie dodawał.",
        "Teraz o sprzęcie — i to jest zadanie skrojone pod niego. Wydobywanie słodyczy polega na utrzymaniu niewysokiej temperatury przez długi czas przy ciągłym mieszaniu. Czyli dokładnie na tym, czego człowiek przy garnku po prostu nie wytrzymuje: nikt nie stoi czterdziestu minut nad cebulą, mieszając co pół minuty, żeby nie przywarła.",
        "Uczciwie tylko o granicy: cebula wyjdzie słodka i miękka, ale nie wyjdzie przyrumieniona. Do rumieńca potrzeba suchej, gorącej patelni, a w zamkniętym naczyniu jest wilgotno — pisałam o tym osobno. Jeśli w daniu ma być i jedno, i drugie, ostatnie minuty robi się na patelni.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nakle nad Notecią?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz zobaczyć, co urządzenie robi z cebulą duszoną długo i powoli — powiedz to przy umawianiu. To dobry sprawdzian i podstawa wielu sosów.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nakle nad Notecią"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nakielskiej rodziny",
      paragraphs: [
        "Nakło nad Notecią liczy blisko siedemnaście tysięcy mieszkańców na niespełna jedenastu kilometrach kwadratowych, czyli ponad tysiąc pięćset osób na kilometr, a cała gmina miejsko-wiejska blisko trzydzieści tysięcy osób na stu osiemdziesięciu siedmiu kilometrach i obejmuje dwadzieścia dziewięć wsi. Akt lokacyjny na prawie magdeburskim wydał w 1299 roku Władysław Łokietek, a dziedzicznym wójtem-zasadźcą był Piotr z Dusden; pierwszymi rzemiosłami były piekarnictwo i rzeźnictwo, a dalej krawiectwo, szewstwo, garncarstwo, sukiennictwo i rybołówstwo. Budowę Kanału Bydgoskiego rozpoczęto 1 marca 1773 roku i ukończono wiosną 1774; kanał miał pierwotnie blisko dwadzieścia siedem kilometrów i dziewięć drewnianych śluz, a w latach 1910–1914 przebudowano go dla statków do czterystu ton. W gminie leżą trzy śluzy — Józefinki z lat 1773–1774, o komorze ponad pięćdziesięciosiedmiometrowej, Nakło Wschód z lat 1800–1801 i Nakło Zachód z lat 1811–1813, rozbudowane w latach 1878–1883 na dwukomorowe; przy Józefinkach około 1870 roku zbudowano zakład podnoszenia wody z pompami. Spławiano tędy drewno i zboże. Noteć ma trzysta dziewięćdziesiąt jeden kilometrów i jest największym dopływem Warty — jej górny bieg jest nieuregulowany i meandrujący, a dolny, właśnie od Nakła, skanalizowany i przedzielony jazami oraz śluzami; prowadzi tędy międzynarodowa droga wodna E-70. W 1851 roku uruchomiono linię kolejową z Bydgoszczy. Dzisiejsza cukrownia przerabia osiem tysięcy ton buraka na dobę i skupuje surowiec od około tysiąca pięciuset plantatorów, a gospodarstwo rybackie w Ślesinie ma ponad pięćset hektarów stawów i produkuje rocznie do czterystu ton karpia — „karp nakielski” trafił 18 lipca 2016 roku na ministerialną Listę Produktów Tradycyjnych.",
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

  districtsHeading: "Do których części Nakła nad Notecią dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i okolic przystani po osiedla przy wylotach dróg i domy nad Notecią. Dojeżdżam też do wsi w gminie, w tym do Ślesina i Potulic.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Nakło nad Notecią też przyjadę",
  nearbyParagraphs: [
    "Bydgoszcz, Szubin, Kcynia, Mrocza, Sadki, Białe Błota i Wyrzysk są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bydgoszcz", "Szubin", "Kcynia", "Mrocza"],

  about: blokOMnie("do Nakła nad Notecią", "w Nakle nad Notecią", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nakła nad Notecią bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Nakło nad Notecią w powiecie nakielskim, około trzydziestu kilometrów od Bydgoszczy — nie o Nakło Śląskie.",
    },
    ...faqWspolne("w Nakle nad Notecią"),
    {
      question: "Dlaczego cebula duszona długo jest słodka, a smażona szybko nie?",
      answer:
        "Bo słodycz w warzywach nie jest dodawana, tylko uwalniana ze skrobi — a to zachodzi wyłącznie przy niewysokiej temperaturze i wymaga czasu. Mocny ogień przypieka powierzchnię, zanim środek zdąży cokolwiek uwolnić. Dlatego cebuli na słodko nie da się zrobić w dziesięć minut, a przepisy, które to obiecują, opisują po prostu podsmażoną cebulę.",
    },
    {
      question: "Dlaczego pieczona marchew jest słodsza niż gotowana?",
      answer:
        "Bo w wodzie część tego, co się uwalnia, po prostu wypływa do wywaru, a w piekarniku zostaje w warzywie i dodatkowo zagęszcza się przez odparowanie. Ta sama zasada tłumaczy, czemu ziemniak trzymany w zimnie robi się słodkawy — skrobia zaczyna się w nim rozkładać.",
    },
    {
      question: "Czy Thermomix dobrze udusi cebulę na słodko?",
      answer:
        "To zadanie skrojone pod niego: polega na utrzymaniu niewysokiej temperatury przez długi czas przy ciągłym mieszaniu, czego przy garnku nikt nie wytrzymuje. Uczciwie jednak — cebula wyjdzie słodka i miękka, ale nie przyrumieniona, bo do rumieńca potrzeba suchej, gorącej patelni. Jeśli w daniu ma być jedno i drugie, ostatnie minuty robi się na patelni.",
    },
  ],

  geo: { lat: 53.1403, lng: 17.5928 },
};
