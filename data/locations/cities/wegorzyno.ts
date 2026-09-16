import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * WĘGORZYNO — powiat łobeski,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 611 mieszkańców (GUS 31.12.2024), 6,9 km²,
 *   gęstość 381,2 os./km².
 * CAŁA GMINA: 6 283 osoby, 256,2 km², 18 sołectw,
 *   33 miejscowości.
 * ⚠⚠ RÓŻNICA MIASTO/GMINA TO +141 %.
 *   NIE MIESZAM TYCH LICZB. TWARDA GRANICA.
 * ⚠ GEO: 53,5411 / 15,5581.
 *
 * ⚠⚠⚠ HOMONIM KRYTYCZNY — POTWIERDZONY EMPIRYCZNIE:
 *   WĘGORZYNO ≠ WĘGORZEWO (warmińsko-mazurskie)
 *   ≠ POWIAT WĘGORZEWSKI ≠ WĘGRÓW (mazowieckie)
 *   ≠ WĄGROWIEC (wielkopolskie).
 *   ⚠⚠ Wyszukiwarki podstawiają Węgorzewo i Węgrów przy
 *   KAŻDYM zapytaniu o herb — sprawdzone dwukrotnie.
 *   ⚠⚠ ROZGRANICZAM W FAQ — obowiązkowo.
 *   ⚠⚠ Dodatkowo: w TEJ SAMEJ GMINIE leży JEZIORO MIELNO
 *   (74 ha) — nie mylić z miastem Mielno w powiecie
 *   koszalińskim, które powstaje w tej samej fali.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI — „to Węgorzyno".
 *   D. WĘGORZYNA, Ms. W WĘGORZYNIE.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — forma regularna,
 *   potwierdzona pośrednio (Urząd Miejski w Węgorzynie).
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Węgorzyna".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — Prawo lubeckie uzyskane „przed 1460 r."; wg Rosponda
 *   w 1460. ⚠ PISZĘ „OKOŁO POŁOWY XV W." —
 *   to najpóźniejsza lokacja w całej fali.
 * — 1569 — wyrok księcia Barnima IX uwolnił mieszkańców
 *   od pańszczyzny.
 * — 1593 — wielki pożar; kościół odbudowany w 1598.
 * — ok. 1693 — miasto zniszczone pożarem ponownie,
 *   dokładnie sto lat później; odbudowa 1705–1715.
 *   ⚠⚠ STU LAT ODSTĘPU NIE UŻYWAM JAKO KĄTA — prowadzi
 *   w obszar powtarzalności (Maszewo, Konin).
 *   Podaję obie daty jako fakty.
 * — 1750 — wieża szachulcowa kościoła.
 *   ⚠ KOŚCIOŁA NIE OPISUJĘ — wątek wyznaniowy.
 *   Wieżę szachulcową wymieniam jako konstrukcję.
 * — Kowalstwo, bednarstwo i stolarstwo — XVIII w.
 * — Po 1900 r.: dwa młyny, gazownia, mleczarnia,
 *   fabryka maszyn, komunalne ujęcie wody.
 * — ⚠⚠ DZIESIĘCIU JARMARKÓW ROCZNIE (2. poł. XIX w.)
 *   NIE UŻYWAM JAKO KĄTA — obszar częstotliwości
 *   i rytmu zajęty (Nowy Targ, Chojna, Lipnica
 *   Murowana). Wymieniam co najwyżej jako fakt.
 * — ⚠⚠ DEMOGRAFII HISTORYCZNEJ (645 w 1740, 1 395
 *   w 1840, 2 932 w 1919, 3 554 w 1939) NIE UŻYWAM —
 *   ostatnia liczba prowadzi w rok 1945.
 *   ⚠⚠⚠ TWARDA GRANICA: ZERO PORÓWNAŃ LUDNOŚCI W CZASIE.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEZIORO WĘGORZYNO:
 *   POWIERZCHNIA 68,32 HA, DŁUGOŚĆ 1 820 M,
 *   SZEROKOŚĆ 540 M, LUSTRO WODY 88,5 M N.P.M.,
 *   GŁĘBOKOŚĆ MAKSYMALNA 7,7 M,
 *   GŁĘBOKOŚĆ ŚREDNIA 4,2 M.
 *   ⚠⚠ RÓŻNICA MIĘDZY MAKSIMUM A ŚREDNIĄ TO 3,5 M —
 *   maksimum jest o 83 % większe od średniej.
 *   ⚠ TO JEST MÓJ RACHUNEK Z DWÓCH LICZB ŹRÓDŁOWYCH,
 *   nie dana ze źródła — podaję opisowo albo pomijam.
 * — W gminie jest 27 jezior powyżej 1 ha. Największe:
 *   Woświn 831 ha, Okrzeja 100,7, Brzeźno 98,6,
 *   Połchowskie 90,54, Mielno 74, Zajezierze 70,03,
 *   Węgorzyno 68,32.
 * — Gmina leży w dorzeczu Regi; dopływy: Reska Węgorza,
 *   Brzeźnicka Węgorza, Ukleja.
 * — Sąsiednie gminy: Drawsko Pomorskie (wschód), Ińsko
 *   (południe), Chociwel i Dobra (zachód), Łobez
 *   i Radowo Małe (północ).
 * — Odległości: Ińsko 14 km, Łobez 14, Chociwel 19,
 *   Drawsko Pomorskie 22, Resko 38, Stargard 44,
 *   Szczecin 69. ⚠ ŹRÓDŁO: kalkulator tras,
 *   wiarygodność średnia — podaję „około".
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: gminie Węgorzyno NIE
 *   JEST przypisany żaden wpis. ⚠⚠⚠ PRZYNALEŻNOŚCI GMINY
 *   DO POJEZIERZA DRAWSKIEGO NIE ZWERYFIKOWANO, więc
 *   wpisów „Miody Pojezierza Drawskiego" i „Sielawa
 *   wędzona z Pojezierza Drawskiego" NIE UŻYWAM.
 *   NIE SUGERUJĘ ISTNIENIA PRODUKTU Z WĘGORZYNA.
 * ⚠⚠⚠ HERB: NIE ZWERYFIKOWANY. Węgorz w herbie to
 *   HIPOTEZA Z ETYMOLOGII, NIE FAKT — mimo że nazwy
 *   dwóch rzek w gminie zawierają „węgorz".
 *   ⚠⚠⚠ NIE PISZĘ O HERBIE ANI SŁOWA.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: ŚREDNIA, NIE MAKSIMUM — o tym, że sprzęt do
 * kuchni kupuje się pod najrzadszy przypadek, a używa
 * przy najczęstszym.
 * Kąt od jeziora Węgorzyno: głębokość maksymalna 7,7 m,
 * średnia 4,2 m. Jeśli wyobrazić sobie to jezioro,
 * wyobraża się siedem i siedem — a pływa się nad czterema
 * i dwoma.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że jezioro Węgorzyno ma 68,32 ha, 1 820 m długości
 *   i 540 m szerokości, a głębokość maksymalną 7,7 m
 *   przy średniej 4,2 m,
 * — ŻE OBIE LICZBY SĄ PRAWDZIWE, ALE OPISUJĄ CO INNEGO:
 *   maksimum opisuje jeden punkt, średnia całą resztę —
 *   to jest rdzeń,
 * — ⚠⚠ ŻE W KUCHNI KUPUJEMY POD MAKSIMUM: naczynie,
 *   które pomieści obiad na dwanaście osób, choć takich
 *   obiadów są dwa w roku. Sprzęt dobiera się do
 *   największej rzeczy, jaką kiedykolwiek się robiło,
 * — ⚠⚠ ŻE SKUTEK JEST DWOJAKI I OBA SĄ KOSZTOWNE:
 *   rzecz kupiona pod maksimum jest przy codziennym
 *   użyciu za duża, za ciężka i za trudna do umycia,
 *   więc stoi. A skoro stoi, to i tak trzeba mieć drugą,
 *   mniejszą, do średniej,
 * — ⚠⚠ ŻE PYTANIE, KTÓRE ROZWIĄZUJE SPRAWĘ, JEST JEDNO:
 *   ile razy w miesiącu to się zdarza. Nie „czy się
 *   zdarza", bo zdarza się zawsze. Ile razy w miesiącu,
 * — ⚠⚠ ŻE PRZY RZECZACH RZADKICH ZWYKLE LEPIEJ WYCHODZI
 *   ZROBIĆ COŚ DWA RAZY NIŻ KUPIĆ SPRZĘT POD JEDEN RAZ.
 *   Dwie tury są niewygodne dwa razy w roku; za duże
 *   naczynie jest niewygodne codziennie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: SĄ SYTUACJE, W KTÓRYCH
 *   MAKSIMUM DECYDUJE NAPRAWDĘ. Jeśli u kogoś „obiad na
 *   dziesięć osób" wypada dwa razy w miesiącu, to nie
 *   jest maksimum, tylko średnia — i wtedy trzeba
 *   kupować pod to. Reguła jest o liczeniu, nie
 *   o oszczędzaniu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TO JEST PYTANIE, KTÓRE
 *   POWINNAŚ ZADAĆ TAKŻE MNIE. Thermomix ma jedno
 *   naczynie o określonej pojemności i przy bardzo
 *   dużych ilościach robi się w turach — MÓWIĘ TO
 *   WPROST, bo to jest dokładnie ta rozmowa, której
 *   ta sekcja dotyczy. Sensowne pytanie brzmi: ile razy
 *   w miesiącu gotujecie tyle, żeby to miało znaczenie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Choszczno).
 *   ⚠⚠ Wymiary jeziora 1 820 × 540 m podaję JAKO WYMIARY
 *   JEZIORA. Ani jednego zdania o tym, że coś jest
 *   „szerokie i płytkie" albo „wąskie i głębokie"
 *   w odniesieniu do garnka. TWARDA GRANICA.
 * — ⚠⚠⚠ ZERO SKALOWANIA PORCJI I GOTOWANIA DLA WIELU
 *   OSÓB JAKO TEMATU — kąt zajęty (Świdwin, „dwieście
 *   miejsc zamiast czterech"). ⚠⚠ TO JEST NAJBLIŻSZY
 *   KĄT. Tam chodzi o TO, JAK PRZELICZYĆ PRZEPIS NA
 *   WIĘKSZĄ LICZBĘ OSÓB; TUTAJ o TO, POD KTÓRĄ LICZBĘ
 *   KUPUJE SIĘ SPRZĘT. Ani słowa o przeliczaniu,
 *   proporcjach ani o tym, jak ugotować dla wielu osób.
 *   ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO GRUBOŚCI DNA — kąt zajęty (Resko).
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU I TEGO, CZEGO SIĘ
 *   UŻYWA — kąt zajęty (Polanów, ta sama fala). Tam
 *   chodzi o TO, KTÓRYCH RZECZY SIĘ UŻYWA; TUTAJ
 *   o TO, POD JAKĄ WIELKOŚĆ SIĘ JE DOBIERA.
 *   Ani słowa o półce, szafce ani przeglądzie sprzętu.
 * — ⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI — kąt zajęty
 *   (Międzyzdroje).
 * — ⚠⚠ ZERO CZĘSTOTLIWOŚCI I RYTMU JAKO MORAŁU — obszar
 *   zajęty (Nowy Targ, Lipnica Murowana, Chojna).
 *   ⚠⚠ Liczbę „ile razy w miesiącu" podaję WYŁĄCZNIE
 *   jako kryterium zakupu, nigdy jako zalecany rytm
 *   gotowania. Dziesięciu jarmarków nie rozwijam.
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno, ta sama fala).
 * — ⚠⚠ ZERO CZEGO NIE WIDAĆ NA TALERZU — kąt zajęty
 *   (Mirosławiec, ta sama fala).
 * — ⚠ ZERO POWTARZALNOŚCI BŁĘDU I DRUGIEGO RAZU — kąt
 *   zajęty (Maszewo, Konin). Dwóch pożarów w odstępie
 *   stu lat NIE ROZWIJAM.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ POJEMNOŚCI W LITRACH — mówię o naczyniu
 *   opisowo, bez liczb.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO DEMOGRAFII HISTORYCZNEJ — liczba z 1939 r.
 *   prowadzi prosto w rok 1945.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościoła nie opisuję,
 *   wieżę szachulcową wymieniam jako konstrukcję.
 * — ⚠⚠ ZERO PAŃSZCZYZNY JAKO WĄTKU — wyrok z 1569 r.
 *   podaję jako fakt prawny w jednym zdaniu albo pomijam.
 * — ⚠⚠⚠ ZERO HERBU — węgorz jest hipotezą, nie faktem.
 * — ⚠ ZERO POŻARÓW JAKO WĄTKU EMOCJONALNEGO.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku lokacji jako daty pewnej —
 *   „przed 1460" albo „w 1460".
 * — NIE OPISUJĘ herbu — niezweryfikowany.
 * — NIE SUGERUJĘ, że gmina należy do Pojezierza
 *   Drawskiego — nie zweryfikowano.
 * — NIE PODAJĘ procentowej różnicy między głębokością
 *   maksymalną a średnią — to mój rachunek.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ POJEMNOŚCI NACZYNIA W LITRACH.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Węgorzyno leży w powiecie łobeskim; miasto liczy
 *   2 611 mieszkańców (GUS, 31.12.2024) na 6,9 km²,
 *   a cała gmina 6 283 osoby na 256,2 km², z osiemnastoma
 *   sołectwami i trzydziestoma trzema miejscowościami,
 * — prawo lubeckie miasto uzyskało około połowy XV w. —
 *   to najpóźniejsza lokacja wśród okolicznych miast,
 * — jezioro Węgorzyno ma 68,32 ha powierzchni, 1 820 m
 *   długości i 540 m szerokości, a lustro wody leży
 *   88,5 m n.p.m.; głębokość maksymalna wynosi 7,7 m,
 *   a średnia 4,2 m,
 * — w gminie jest dwadzieścia siedem jezior powyżej
 *   hektara, a największe z nich, Woświn, ma 831 ha;
 *   dalej Okrzeja (100,7 ha), Brzeźno (98,6),
 *   Połchowskie (90,54), Mielno (74), Zajezierze (70,03)
 *   i samo Węgorzyno (68,32),
 * — gmina leży w dorzeczu Regi, a płyną przez nią
 *   Reska Węgorza, Brzeźnicka Węgorza i Ukleja,
 * — pożary nawiedziły miasto w 1593 r. i około 1693 r.;
 *   po pierwszym kościół odbudowano w 1598 r.,
 *   po drugim odbudowa trwała w latach 1705–1715,
 *   a wieżę szachulcową postawiono w 1750 r.,
 * — kowalstwo, bednarstwo i stolarstwo rozwinęły się
 *   tu w XVIII w., a po 1900 r. powstały dwa młyny,
 *   gazownia, mleczarnia i fabryka maszyn; miasto miało
 *   też komunalne ujęcie wody,
 * — Ińsko i Łobez są około czternastu kilometrów stąd,
 *   Chociwel dziewiętnaście, Drawsko Pomorskie
 *   dwadzieścia dwa, a Szczecin około sześćdziesięciu
 *   dziewięciu.
 */
export const WEGORZYNO: CityContent = {
  slug: "wegorzyno",
  h1: "Thermomix Węgorzyno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Węgorzyno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Węgorzynie (powiat łobeski): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Węgorzyno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Węgorzynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Węgorzyna w powiecie łobeskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich osiemnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Węgorzyno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jezioro ma siedem metrów siedemdziesiąt w najgłębszym miejscu. I cztery dwadzieścia średnio.",
  },

  sections: [
    {
      id: "srednia-nie-maksimum",
      heading: "Siedem siedemdziesiąt i cztery dwadzieścia",
      paragraphs: [
        "Jezioro Węgorzyno leży przy samym mieście: sześćdziesiąt osiem hektarów, tysiąc osiemset dwadzieścia metrów długości, pięćset czterdzieści szerokości, lustro wody osiemdziesiąt osiem i pół metra nad poziomem morza.",
        "Ma dwie głębokości i obie są prawdziwe. Maksymalna: siedem metrów siedemdziesiąt. Średnia: cztery metry dwadzieścia.",
        "Tylko że opisują zupełnie co innego. Maksimum opisuje jeden punkt na sześćdziesięciu ośmiu hektarach. Średnia opisuje całą resztę — czyli to, nad czym się faktycznie pływa.",
        "A w kuchni kupujemy pod maksimum. Prawie wszyscy i prawie zawsze.",
        "Naczynie ma pomieścić obiad na dwanaście osób, bo raz w roku jest taki obiad. Blacha ma być największa, bo kiedyś było ciasto na trzydzieści kawałków. Sprzęt dobieramy do największej rzeczy, jaką kiedykolwiek robiliśmy — i uznajemy to za rozsądek, bo przecież „wtedy się przyda”.",
        "Skutek jest podwójny i oba kosztują.",
        "Rzecz kupiona pod maksimum jest przy codziennym użyciu za duża, za ciężka i za trudna do umycia. Więc stoi. A skoro stoi, to i tak trzeba mieć drugą, mniejszą, do średniej — i w efekcie ma się dwie rzeczy zamiast jednej, z czego jedna pracuje, a druga zajmuje miejsce i czeka na okazję dwa razy w roku.",
        "Pytanie, które to rozstrzyga, jest jedno i brzmi nieprzyjemnie prosto: ile razy w miesiącu to się zdarza. Nie „czy się zdarza”, bo zdarza się zawsze — każdy miał kiedyś dwanaście osób przy stole. Ile razy w miesiącu.",
        "Przy rzeczach naprawdę rzadkich zwykle lepiej wychodzi zrobić coś w dwóch turach niż kupować sprzęt pod jeden raz. Dwie tury są niewygodne dwa razy w roku. Za duże naczynie jest niewygodne codziennie.",
        "Uczciwie o drugiej stronie, bo reguła nie jest o oszczędzaniu, tylko o liczeniu. Są domy, w których „obiad na dziesięć osób” wypada dwa razy w miesiącu — i wtedy to nie jest maksimum, tylko średnia. Wtedy trzeba kupować dokładnie pod to i nie ma w tym nic nierozsądnego. Cała rzecz w tym, żeby wiedzieć, którą z tych dwóch liczb się patrzy.",
        "I to jest pytanie, które powinnaś zadać także mnie.",
        "Thermomix ma jedno naczynie o określonej pojemności. Przy naprawdę dużych ilościach robi się w turach — mówię to wprost, zanim ktokolwiek zapyta, bo to jest dokładnie ta rozmowa, o której jest ten tekst. Sensowne pytanie nie brzmi więc „czy zmieści się obiad dla dwunastu osób”, tylko: ile razy w miesiącu u Was taki obiad w ogóle jest. Odpowiedź na to pytanie mówi więcej niż wszystkie parametry razem wzięte — i możemy ją sprawdzić na prezentacji, gotując dokładnie tyle, ile gotujecie na co dzień.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Węgorzynie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu na co dzień, a nie od święta — i czego nie jecie.",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Węgorzynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, dla ilu osób gotujecie w zwykły wtorek — nie w święta. Pod tę liczbę dobiorę dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Węgorzynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Węgorzyna",
      paragraphs: [
        "Węgorzyno leży w powiecie łobeskim: samo miasto liczy ponad dwa tysiące sześciuset mieszkańców (GUS, 31.12.2024) na sześciu i dziewięciu dziesiątych kilometra kwadratowego, a cała gmina ponad sześć tysięcy osób na dwustu pięćdziesięciu sześciu, z osiemnastoma sołectwami i trzydziestoma trzema miejscowościami. Prawo lubeckie miasto uzyskało około połowy piętnastego wieku — to najpóźniejsza lokacja wśród okolicznych miast. Jezioro Węgorzyno ma sześćdziesiąt osiem hektarów, tysiąc osiemset dwadzieścia metrów długości i pięćset czterdzieści szerokości, a jego głębokość maksymalna to siedem metrów siedemdziesiąt przy średniej cztery dwadzieścia. W całej gminie jest dwadzieścia siedem jezior powyżej hektara, a największe z nich, Woświn, ma osiemset trzydzieści jeden; dalej Okrzeja, Brzeźno, Połchowskie, Mielno, Zajezierze i samo Węgorzyno. Gmina leży w dorzeczu Regi, a płyną przez nią Reska Węgorza, Brzeźnicka Węgorza i Ukleja. Pożary nawiedziły miasto w 1593 roku i około 1693; po pierwszym kościół odbudowano w 1598, po drugim odbudowa trwała w latach 1705–1715, a wieżę szachulcową postawiono w 1750. Kowalstwo, bednarstwo i stolarstwo rozwinęły się tu w osiemnastym wieku, a po 1900 roku powstały dwa młyny, gazownia, mleczarnia i fabryka maszyn.",
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

  districtsHeading: "Do których części Węgorzyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich osiemnastu sołectw w gminie — a gmina ma dwieście pięćdziesiąt sześć kilometrów kwadratowych i trzydzieści trzy miejscowości. Do najdalszych też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Węgorzyno też przyjadę",
  nearbyParagraphs: [
    "Ińsko i Łobez są około czternastu kilometrów stąd, Chociwel dziewiętnaście, Drawsko Pomorskie dwadzieścia dwa, a Resko trzydzieści osiem. Do każdego z nich dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Łobez", "Ińsko", "Chociwel", "Drawsko Pomorskie", "Resko"],

  about: blokOMnie("do Węgorzyna", "w Węgorzynie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Węgorzyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich osiemnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Doprecyzowanie jest tu wyjątkowo potrzebne, bo wyszukiwarki notorycznie mylą tę nazwę: chodzi o Węgorzyno w powiecie łobeskim w województwie zachodniopomorskim — nie o Węgorzewo w warmińsko-mazurskiem, nie o Węgrów na Mazowszu i nie o Wągrowiec w wielkopolskiem.",
    },
    ...faqWspolne("w Węgorzynie"),
    {
      question: "Czy Thermomix wystarczy, gdy gotuję dla większej rodziny?",
      answer:
        "Ma jedno naczynie o określonej pojemności i przy naprawdę dużych ilościach robi się w turach — mówię to wprost. Właściwe pytanie brzmi jednak nie „czy zmieści się obiad dla dwunastu osób”, tylko: ile razy w miesiącu taki obiad u Was jest. Sprzęt warto dobierać pod to, co dzieje się co tydzień, a nie pod to, co dwa razy w roku. Na prezentacji możemy ugotować dokładnie tyle, ile gotujecie na co dzień.",
    },
    {
      question: "Jak dobrać wielkość naczynia albo blachy do własnej kuchni?",
      answer:
        "Licząc, ile razy w miesiącu zdarza się największa porcja, a nie czy w ogóle się zdarza. Jezioro Węgorzyno ma siedem metrów siedemdziesiąt w najgłębszym punkcie i cztery dwadzieścia średnio — obie liczby są prawdziwe, ale pływa się nad tą drugą. Rzecz kupiona pod maksimum bywa przy codziennym użyciu za duża i za trudna do umycia, więc stoi, a do zwykłego obiadu i tak trzeba mieć drugą.",
    },
  ],

  geo: { lat: 53.5411, lng: 15.5581 },
};
