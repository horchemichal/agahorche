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
 * KAŁUSZYN — powiat miński, woj. mazowieckie.
 * MIASTO 2 680 (GUS 31.12.2024), 12,3 km², 217,9 os./km².
 * Gmina miejsko-wiejska: 5 505 osób, 94,4 km², 28 sołectw.
 * ⚠ BRIEF PODAWAŁ „ok. 2,9 tys." — ZAWYŻENIE O 8%.
 *   OBOWIĄZUJE 2 680. TWARDA GRANICA.
 *
 * ⚠ HOMONIM: KAŁUSZYN to także WIEŚ w gminie Serock,
 *   powiat legionowski (to samo województwo!).
 *   ⚠ ZAWSZE „Kałuszyn w powiecie mińskim". FAQ TO ROZRÓŻNIA.
 * ⚠ ODMIANA wg Wielkiego słownika ortograficznego PWN:
 *   D. KAŁUSZYNA, Ms. W KAŁUSZYNIE, przym. KAŁUSZYŃSKI.
 *   ⚠ NAZWY MIESZKAŃCA SŁOWNIK NIE PODAJE — NIE UŻYWAM JEJ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — LOKACJA 1718 R. — prawa miejskie nadał król August II
 *   Mocny na sejmie w Grodnie, staraniem rodu Opackich,
 * — ⚠⚠ PODSTAWA KĄTA: „w mieście dobrze rozwijało się
 *   GARBARSTWO",
 * — dawne opisy miasta wymieniają też DWA MŁYNY,
 *   DWA TARGOWISKA i OSIEM KUŹNI,
 *   ⚠ TO ŹRÓDŁO POJEDYNCZE (portal genealogiczny,
 *   prawdopodobnie przedruk opracowania). PISZĘ
 *   „dawne opisy miasta wymieniają". TWARDA GRANICA.
 * — 1827 r.: 145 domów i 1 826 mieszkańców,
 * — ludność polska zajmowała się rolnictwem oraz
 *   RZEMIOSŁEM SZEWSKIM.
 * ⚠⚠ NAJMOCNIEJSZYM FAKTEM GOSPODARCZYM MIASTA BYŁO
 *   TKACTWO — pod koniec XIX w. przy wyrobie tkanin
 *   pracowało tu około czterystu osób. ⚠ CAŁA TA WARSTWA
 *   JEST NIEROZERWALNIE ZWIĄZANA ZE SPOŁECZNOŚCIĄ,
 *   KTÓRA ZOSTAŁA ZGŁADZONA. NIE PISZĘ O NIEJ ANI SŁOWA —
 *   ani o wyrobie, ani o „zniknięciu rzemiosła".
 *   TWARDA GRANICA — NAJWAŻNIEJSZA NA TEJ STRONIE.
 * ⚠⚠ NIE PISZĘ O „NOŻOWNI" ANI O WYTWÓRNI NOŻY. Fakt jest
 *   prawdopodobnie prawdziwy, ale słowo „nóż" w zestawieniu
 *   z historią tego miasta brzmi niefortunnie. Piszę
 *   WYŁĄCZNIE o kuźniach. TWARDA GRANICA.
 * ⚠ DNI TARGOWYCH ANI DAT JARMARKÓW NIE USTALONO —
 *   NIE ZGADUJĘ.
 *
 * DZIŚ: około 990 gospodarstw rolnych i około 400 podmiotów
 * gospodarczych. Kluczowy fakt pozytywny: po otwarciu
 * odcinka autostrady A2 TRANZYT ZOSTAŁ WYPROWADZONY
 * Z MIASTA. Rezerwat „Przełom Witówki", zbiornik retencyjny
 * Karczunek (około 7 ha, plaża, boiska). Trzynaście obiektów
 * w rejestrze zabytków — m.in. ratusz, dawna poczta, remiza.
 * ⚠ Dla powiatu mińskiego NIE ZNALEZIONO oficjalnej
 *   charakterystyki kierunków produkcji rolnej —
 *   NIE PRZYPISUJĘ MU ŻADNYCH LICZB.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: brak wpisu z gminy
 *   Kałuszyn. NIE WYMIENIAM ŻADNEGO.
 * ⚠ OSIEDLI W MIEŚCIE NIE USTALONO — districts PUSTE.
 *
 * KĄT: TKANKA ŁĄCZNA — dlaczego tańszy kawałek mięsa
 * bywa lepszy od droższego.
 * Kąt od kałuszyńskiego garbarstwa. Garbowanie to praca nad
 * skórą — nad tym, żeby przestała być tym, czym była.
 * W kuchni dokładnie ta sama tkanka decyduje o tym, czy mięso
 * będzie gumowate, czy rozpadające się.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w Kałuszynie dobrze rozwijało się garbarstwo, a dawne
 *   opisy miasta wymieniają też dwa młyny, dwa targowiska
 *   i osiem kuźni,
 * — ŻE GARBARZ PRACOWAŁ NAD TĄ SAMĄ TKANKĄ, KTÓRA W KUCHNI
 *   DECYDUJE O WSZYSTKIM — nad tkanką łączną,
 * — ⚠⚠ ŻE TKANKA ŁĄCZNA ZACHOWUJE SIĘ ODWROTNIE NIŻ MIĘSO:
 *   mięso od gotowania TWARDNIEJE I SIĘ KURCZY, a tkanka
 *   łączna przy długim i wilgotnym ogrzewaniu ZAMIENIA SIĘ
 *   W COŚ MIĘKKIEGO I KLEISTEGO. TO JEST RDZEŃ CAŁEGO
 *   TEKSTU,
 * — ŻE STĄD BIERZE SIĘ RZECZ, KTÓRA WYGLĄDA NA PARADOKS:
 *   kawałki tańsze — żylaste, z błonami, z kością — po
 *   długim duszeniu wychodzą LEPIEJ niż kawałki drogie
 *   i chude, które w tych samych warunkach robią się suche
 *   i włókniste,
 * — ŻE TO NIE JEST KWESTIA JAKOŚCI MIĘSA, TYLKO DOBORU
 *   METODY DO KAWAŁKA: chude i miękkie lubi krótko
 *   i mocno, twarde i żylaste lubi długo i wilgotno.
 *   Zamiana tych dwóch rzeczy miejscami psuje jedno
 *   i drugie,
 * — ŻE NAJCZĘSTSZY BŁĄD TO PRZERWANIE DUSZENIA W POŁOWIE:
 *   takie mięso jest wtedy TWARDSZE niż na początku,
 *   bo już się skurczyło, a tkanka łączna jeszcze nie
 *   zdążyła się zmienić. Kto się wtedy podda, wyciągnie
 *   najgorszą możliwą wersję,
 * — ŻE POTRZEBNA JEST WILGOĆ — w suchym gorącu tkanka
 *   łączna po prostu twardnieje. Dlatego duszenie odbywa się
 *   pod przykryciem i z płynem
 *   ⚠ ODSYŁAM DO STRONY O DUSZENIU, NIE ROZWIJAM,
 * — ŻE DLATEGO WYWAR Z KOŚCI TĘŻEJE W LODÓWCE
 *   ⚠ ODSYŁAM DO STRONY O ROSOLE, NIE ROZWIJAM —
 *   to jest ta sama substancja, tylko w płynie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to jest jedna z niewielu rzeczy,
 *   w których urządzenie ma przewagę bezdyskusyjną.
 *   Długie duszenie wymaga wyłącznie STAŁEJ TEMPERATURY
 *   I CZASU — czyli dokładnie tego, co ono robi samo,
 *   bez nikogo w kuchni. Dwie godziny przy garnku kontra
 *   dwie godziny, w których można robić coś innego.
 *   ALE: obsmażenie na początek i tak robi się na patelni
 *   ⚠ ODSYŁAM DO STRONY O RUMIENIENIU.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI I O TYM,
 *   CZY MIĘSO JEST „DOŚĆ ZROBIONE". Mówię wyłącznie
 *   o TWARDOŚCI I KRUCHOŚCI. TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH NAZW ELEMENTÓW ROZBIORU I TERMINOLOGII
 *   MASARSKIEJ — nie znam się i nie udaję.
 * — ŻADNYCH PORAD O CENACH I O TYM, GDZIE TANIEJ.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH,
 *   w szczególności ZERO o kolagenie jako suplemencie,
 *   o stawach, skórze i włosach. TO JEST DZIEDZINA
 *   MEDYCZNA. TWARDA GRANICA.
 * — ŻADNYCH DRASTYCZNYCH OPISÓW UBOJU I ROZBIORU.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO historii społeczności żydowskiej Kałuszyna
 *   i zagłady. Miasto było w znacznej większości żydowskie,
 *   a cała jego warstwa tkacka należała do tej społeczności.
 *   NIE DOTYKAM TEGO ANI POŚREDNIO — czyli NIE PISZĘ
 *   O TKACTWIE W OGÓLE. TWARDA GRANICA.
 * — ZERO spalenia synagogi i zniszczenia dziedzictwa.
 * — ZERO wydarzeń powojennych z lat 1944–1946.
 * — ZERO bitwy z 1831 r., obrony miasta z września 1939 r.,
 *   kampanii napoleońskich i powstania styczniowego.
 * — ZERO pomników wojennych.
 * — ZERO spadku liczby ludności.
 * — ⚠ ZERO wzmianek o nożowni i o wytwórni noży.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „TŁUSTE KONTRA CHUDE" (Rajgród) dotyczy ZAWARTOŚCI
 *   TŁUSZCZU. Tutaj chodzi o TKANKĘ ŁĄCZNĄ, czyli co innego.
 * — „WIEPRZOWINA" (Żuromin), „WOŁOWINA" (Szprotawa),
 *   „BARANINA" (Kożuchów), „KURCZAK" (Kostrzyn),
 *   „INDYK" (Sława), „GĘŚ" (Gostynin) dotyczą GATUNKÓW.
 *   Tutaj gatunek nie ma znaczenia.
 * — „ROSÓŁ I WYWAR" (Gniew) dotyczy WYWARU.
 * — „DUSZENIE" (Łagów) dotyczy TECHNIKI WOLNEGO GOTOWANIA
 *   POD PRZYKRYCIEM.
 * — „WIELKOŚĆ KAWAŁKÓW" (Orzysz) dotyczy WIELKOŚCI.
 * — „MIĘSO W KAWAŁKU" (Tarczyn) dotyczy DECYZJI ZAKUPOWEJ:
 *   całość czy plastry.
 * — „DWA CIEPŁA W JEDNYM DANIU" (Lipsko) dotyczy
 *   KOLEJNOŚCI ETAPÓW.
 * TUTAJ chodzi o JEDNĄ TKANKĘ i o to, że zachowuje się
 * odwrotnie niż mięso, w którym siedzi.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o tkactwie ani o wyrobach tkackich.
 * — NIE PISZĘ o nożowni.
 * — NIE PODAJĘ dni targowych.
 * — NIE PODAJĘ nazw elementów rozbioru.
 * — NIE MYLĘ Kałuszyna z wsią Kałuszyn w gminie Serock.
 * — NIE ORZEKAM niczego o zdrowotnym działaniu kolagenu.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kałuszyn liczy 2 680 mieszkańców (GUS, 31.12.2024)
 *   na 12,3 km², a cała gmina miejsko-wiejska 5 505 osób
 *   na 94,4 km² i dzieli się na dwadzieścia osiem sołectw,
 * — prawa miejskie nadał miastu w 1718 roku król August II
 *   Mocny na sejmie w Grodnie, staraniem rodu Opackich,
 * — w Kałuszynie dobrze rozwijało się garbarstwo,
 *   a dawne opisy miasta wymieniają dwa młyny, dwa
 *   targowiska i osiem kuźni; ludność zajmowała się
 *   rolnictwem i rzemiosłem szewskim, a w 1827 roku stało
 *   tu sto czterdzieści pięć domów i mieszkało tysiąc
 *   osiemset dwadzieścia sześć osób,
 * — dziś w gminie jest około dziewięciuset dziewięćdziesięciu
 *   gospodarstw rolnych i około czterystu podmiotów
 *   gospodarczych, a po otwarciu kolejnego odcinka autostrady
 *   A2 tranzyt został wyprowadzony z miasta,
 * — w gminie leżą rezerwat „Przełom Witówki" i zbiornik
 *   retencyjny Karczunek o powierzchni około siedmiu
 *   hektarów, z plażą i boiskami, a w rejestrze zabytków
 *   figuruje trzynaście obiektów, wśród nich ratusz, dawna
 *   poczta i remiza strażacka.
 */
export const KALUSZYN: CityContent = {
  slug: "kaluszyn",
  h1: "Thermomix Kałuszyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kałuszyn — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kałuszynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kałuszyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kałuszynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kałuszyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Kałuszyn"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Tańszy, żylasty kawałek po długim duszeniu bywa lepszy niż drogi i chudy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kałuszynie – jak wygląda prezentacja?",
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
      id: "tkanka-laczna",
      heading: "Dlaczego tańszy kawałek mięsa bywa lepszy",
      paragraphs: [
        "W Kałuszynie, który prawa miejskie otrzymał w 1718 roku od Augusta II Mocnego, dobrze rozwijało się garbarstwo. Dawne opisy miasta wymieniają obok niego dwa młyny, dwa targowiska i osiem kuźni.",
        "Garbarz pracował nad tkanką, która w kuchni decyduje o wszystkim, a której prawie nikt nie nazywa po imieniu. Nad tkanką łączną — błonami, ścięgnami, tym białawym, twardym, co widać na brzegu kawałka mięsa i co zwykle chce się odciąć.",
        "A rzecz z nią jest taka, że zachowuje się dokładnie odwrotnie niż mięso, w którym siedzi.",
        "Mięso od gotowania twardnieje i kurczy się — im dłużej, tym bardziej. Tkanka łączna przy długim i wilgotnym ogrzewaniu robi coś przeciwnego: rozkłada się i zamienia w coś miękkiego, kleistego, co oblepia włókna i trzyma w nich wilgoć.",
        "Z tego wynika rzecz, która wygląda na paradoks, a nim nie jest. Kawałki tańsze — żylaste, z błonami, z kością — po długim duszeniu wychodzą lepiej niż kawałki drogie i chude. Te drugie w tych samych warunkach po prostu się wysuszą, bo nie mają w sobie nic, co by je uratowało. Za duszenie płaci się czasem, nie pieniędzmi.",
        "To nie znaczy, że drogie mięso jest gorsze. Znaczy, że każdy kawałek ma swoją metodę: chude i miękkie lubi krótko i mocno, twarde i żylaste lubi długo i wilgotno. Zamiana tych dwóch rzeczy miejscami psuje jedno i drugie — i jest chyba najczęstszym powodem rozczarowania mięsem w domowej kuchni.",
        "Teraz błąd, który kosztuje najwięcej, a wygląda niewinnie: przerwanie duszenia w połowie.",
        "Mięso duszone przechodzi przez etap, w którym jest twardsze niż na samym początku. Zdążyło się już skurczyć, a tkanka łączna jeszcze nie zdążyła się zmienić. Kto sprawdzi widelcem właśnie wtedy i uzna, że „to się nie uda”, wyciągnie z garnka najgorszą możliwą wersję tego dania — i zapamięta, że mu nie wyszło. A brakowało czasu, nie umiejętności.",
        "Potrzebna jest przy tym wilgoć. W suchym gorącu tkanka łączna nie zmięknie, tylko stwardnieje jeszcze bardziej — dlatego duszenie odbywa się pod przykryciem i z płynem, o czym pisałam osobno.",
        "I jeszcze jedno, żeby domknąć obraz: to jest ta sama substancja, przez którą wywar z kości tężeje w lodówce. Nie dodaje jej nikt; ona wychodzi z kości i z błon. O samym wywarze też pisałam osobno.",
        "Teraz o sprzęcie — i tu mam do powiedzenia rzecz rzadką, bo na tej stronie przewaga jest bezdyskusyjna. Długie duszenie nie wymaga umiejętności. Wymaga wyłącznie stałej temperatury i czasu, czyli dokładnie tego, co urządzenie robi samo.",
        "Dwie godziny przy garnku, w czasie których trzeba pilnować, żeby nie wykipiało i nie przywarło, kontra dwie godziny, w których można zrobić coś zupełnie innego — to jest cała różnica. Przy tym akurat typie dań to nie jest wygoda, tylko powód, dla którego w ogóle się je robi.",
        "Uczciwie tylko dodam, że obsmażenie na początek i tak robi się na patelni. Urządzenie przejmuje długą część, nie tę pierwszą — o niej pisałam przy innym mieście.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kałuszynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć danie duszone długo, bez pilnowania garnka — powiedzcie to przy umawianiu. To najlepszy sprawdzian tego urządzenia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kałuszynie"),
    sekcjaRaty("w Kałuszynie"),
    {
      id: "rodzina",
      heading: "Thermomix dla kałuszyńskiej rodziny",
      paragraphs: [
        "Kałuszyn liczy blisko dwa tysiące siedemset mieszkańców na dwunastu kilometrach kwadratowych, a cała gmina miejsko-wiejska ponad pięć i pół tysiąca osób na dziewięćdziesięciu czterech kilometrach i dzieli się na dwadzieścia osiem sołectw. Prawa miejskie nadał miastu w 1718 roku król August II Mocny na sejmie w Grodnie, staraniem rodu Opackich. Dobrze rozwijało się tu garbarstwo, a dawne opisy miasta wymieniają dwa młyny, dwa targowiska i osiem kuźni; mieszkańcy zajmowali się rolnictwem i rzemiosłem szewskim, a w 1827 roku stało tu sto czterdzieści pięć domów i mieszkało tysiąc osiemset dwadzieścia sześć osób. Dziś w gminie jest około dziewięciuset dziewięćdziesięciu gospodarstw rolnych i około czterystu podmiotów gospodarczych, a po otwarciu kolejnego odcinka autostrady tranzyt został wyprowadzony z miasta. W gminie leżą rezerwat „Przełom Witówki” i zbiornik retencyjny Karczunek o powierzchni około siedmiu hektarów, z plażą i boiskami, a w rejestrze zabytków figuruje trzynaście obiektów — wśród nich ratusz, dawna poczta i remiza strażacka.",
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

  districtsHeading: "Do których części Kałuszyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku z ratuszem po domy przy wylotach dróg i okolice zbiornika Karczunek. Dojeżdżam też do wszystkich sołectw gminy.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kałuszyn też przyjadę",
  nearbyParagraphs: [
    "Mińsk Mazowiecki, Mrozy, Cegłów, Dobre, Kotuń, Siedlce i Węgrów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mińsk Mazowiecki", "Siedlce", "Węgrów", "Mrozy"],

  about: blokOMnie("do Kałuszyna", "w Kałuszynie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kałuszyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Kałuszyn w powiecie mińskim, przy dawnej drodze na Siedlce — nie o wieś Kałuszyn w gminie Serock.",
    },
    ...faqWspolne("w Kałuszynie"),
    {
      question: "Dlaczego tańsze mięso po długim duszeniu wychodzi lepiej?",
      answer:
        "Bo ma w sobie tkankę łączną, która zachowuje się odwrotnie niż mięso: mięso od gotowania twardnieje, a tkanka łączna przy długim i wilgotnym ogrzewaniu rozkłada się i zamienia w coś miękkiego, co oblepia włókna i trzyma w nich wilgoć. Chudy, drogi kawałek nie ma czym się bronić i po prostu się wysuszy. Za duszenie płaci się czasem, nie pieniędzmi.",
    },
    {
      question: "Duszę mięso już długo, a jest twarde — co robić?",
      answer:
        "Najczęściej dusić dalej. Mięso przechodzi przez etap, w którym jest twardsze niż na początku: zdążyło się skurczyć, a tkanka łączna jeszcze nie zdążyła zmięknąć. Kto sprawdzi widelcem właśnie wtedy i się podda, wyciągnie najgorszą możliwą wersję tego dania. Trzeba też pilnować wilgoci — w suchym gorącu nic nie zmięknie.",
    },
    {
      question: "Czy Thermomix nadaje się do dań duszonych?",
      answer:
        "To jest jedna z niewielu rzeczy, w których ma przewagę bezdyskusyjną. Długie duszenie nie wymaga umiejętności, tylko stałej temperatury i czasu — czyli dokładnie tego, co urządzenie robi samo, bez nikogo w kuchni. Obsmażenie na początek i tak robi się na patelni; urządzenie przejmuje tę długą część.",
    },
  ],

  geo: { lat: 52.2067, lng: 21.8084 },
};
