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
 * MYSZYNIEC — powiat ostrołęcki, woj. mazowieckie.
 * MIASTO 3 179 (GUS 31.12.2024), 11,2 km², 283,3 os./km².
 * Gmina miejsko-wiejska: 9 930 osób, 226,8 km², 18 sołectw.
 * Serce KURPIOWSZCZYZNY — Puszczy Zielonej.
 * ⚠ PRAWA MIEJSKIE 1798, ODZYSKANE 1993.
 *   ⚠⚠ PRZYCZYNY UTRATY NIE PODAJĘ. TWARDA GRANICA.
 *
 * ⚠⚠ PUŁAPKI NAZEWNICZE:
 * — MYSZYNIEC (miasto) vs MYSZYNIEC STARY vs
 *   MYSZYNIEC-KORYTA — TRZY RÓŻNE MIEJSCOWOŚCI W TEJ SAMEJ
 *   GMINIE, wszystkie sołectwa. BARDZO ŁATWO POMYLIĆ,
 * — MYSZYNIEC ≠ MYSZĘCIN (lubuskie) ≠ MYŚLENICE,
 * — ⚠⚠ KURPIE ZIELONE (Puszcza Zielona — wokół Myszyńca,
 *   Kadzidła i Łysych) to CO INNEGO niż KURPIE BIAŁE
 *   (Puszcza Biała — wokół Pułtuska i Wyszkowa).
 *   TA POMYŁKA PRZEKREŚLA POŁOWĘ ŹRÓDEŁ. TWARDA GRANICA.
 * Odmiana: „do Myszyńca", „w Myszyńcu", „myszyniecki".
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — piszę „mieszkańcy
 *   Myszyńca". TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠ ROZBIEŻNOŚĆ DATY ZAŁOŻENIA: jedne źródła podają 1650,
 *   inne 1654. ⚠ PISZĘ „w połowie XVII wieku".
 *   NIE PODAJĘ ROKU. TWARDA GRANICA.
 *   ⚠⚠ OSADĘ ZAŁOŻYLI ZAKONNICY, A NAZWA POCHODZI OD SŁOWA
 *   „MISJA" — TEGO NIE PISZĘ. WĄTEK WYZNANIOWY.
 *   Piszę neutralnie: „osada powstała w połowie XVII wieku
 *   wśród puszczy". TWARDA GRANICA.
 * — ⚠ MIEJSCOWOŚĆ NOSIŁA PIERWOTNIE NAZWĘ „MARTUNY" —
 *   OD SMOLARZA, KTÓRY SIĘ TU OSIEDLIŁ. DOBRY, BEZPIECZNY
 *   I EFEKTOWNY FAKT,
 * — 1719 — August II zezwolił na jarmarki na rynku,
 * — ⚠⚠ PODSTAWA KĄTA — SPRAWOZDANIE O GOSPODARCE PUSZCZY
 *   ZIELONEJ Z 1690 R. WYMIENIA:
 *   — siedemnaście pieców, „w których pędzą smołę",
 *   — dziesięć zakładów zajmujących się „przygotowywaniem
 *     żelaza" (z rudy darniowej),
 *   — PRODUKCJĘ POTAŻU — osady „wypalały popiół",
 *   — wypalanie węgla drzewnego,
 *   — wydobycie oraz obróbkę bursztynu,
 *   — myślistwo i rybołówstwo na bagnach nadrzecznych.
 * — bartnicy kurpiowscy mieli własne prawo zwyczajowe,
 *   spisane w 1559 i 1616 r., zatwierdzone przez Zygmunta III
 *   Wazę w 1630 r.
 *   ⚠⚠ KĄTY „MIÓD" (kluczbork.ts) I „WOSK W KUCHNI"
 *   (pultusk.ts) SĄ ZAJĘTE. Przy Myszyńcu miód wypełza
 *   zewsząd — ŚWIADOMIE GO ODSUWAM. Bartnictwo wymieniam
 *   JEDNYM ZDANIEM jako fakt. TWARDA GRANICA.
 * — Leśnictwo Zawodzie istniało już w 1839 r., Leśnictwo
 *   Myszyniec powstało w 1887 r.
 *
 * DZIŚ: gleby piaszczyste i podmokłe; historycznie i dziś
 * dominują ŻYTO, GRYKA I ZIEMNIAKI — klimat i gleba nie
 * pozwalają na pszenicę. Powiat ostrołęcki to region hodowli
 * bydła mlecznego i produkcji mleka. Regionalne Centrum
 * Kultury Kurpiowskiej działa od 2012 r. i ma minimuzeum
 * z narzędziami pracy z dawnych lat; organizuje Jarmark
 * Kurpiowski (maj), Noc Sobótkową (czerwiec) i Miodobranie
 * Kurpiowskie (koniec sierpnia). Rynek to plac Wolności.
 * ⚠ To NIE jest sypialnia Warszawy — około 150 km od stolicy.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — CZTERY PUŁAPKI,
 *   SPRAWDZONE POJEDYNCZO:
 * — FAFERNUCHY (wpis 2010) — pochodzą z PUSZCZY BIAŁEJ,
 *   wytwórca we wsi Lemany w powiecie PUŁTUSKIM.
 *   ⚠ NIE WOLNO ICH PRZYPISAĆ MYSZYŃCOWI. TWARDA GRANICA.
 * — PIWO KOZICOWE (03.07.2015) — gmina STERDYŃ, powiat
 *   sokołowski, region nadbużański. NIE KURPIE.
 *   ⚠ NIE WYMIENIAM (także z powodu alkoholu).
 * — REJBAK KURPIOWSKI (wpis 07.11.2023) — karta produktu
 *   podaje „Kurpiowszczyznę", ALE NIE WSKAZUJE GMINY.
 *   ⚠ MOGĘ NAPISAĆ, ŻE TO PRODUKT KURPIOWSZCZYZNY,
 *   NIE WOLNO NAPISAĆ „z Myszyńca". TWARDA GRANICA.
 *   Użyteczny szczegół z karty: nazwa pochodzi
 *   od „REJBOWANIA" — tarcia ziemniaków.
 * — MIÓD KURPIOWSKI (10.06.2007) — obszar „Kurpie Zielone
 *   i Kurpie Białe", bez wykazu gmin. ⚠ NIE WYMIENIAM,
 *   bo kąt „miód" jest zajęty.
 * ⚠ OSIEDLI W MIEŚCIE NIE USTALONO — districts PUSTE.
 *
 * KĄT: OD CZEGO CIASTO ROŚNIE — potaż, soda i proszek.
 * Kąt od sprawozdania z 1690 r., w którym wśród zajęć
 * Puszczy Zielonej wymieniono produkcję potażu: tutejsze
 * osady wypalały popiół. Potaż to węglan potasu — a więc
 * bezpośredni przodek tego, co dziś stoi w kuchennej szafce
 * pod nazwą „proszek do pieczenia".
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w sprawozdaniu o gospodarce Puszczy Zielonej z 1690 r.
 *   wymieniono, obok smolarni i wytopu żelaza, produkcję
 *   potażu: osady „wypalały popiół",
 * — ŻE POTAŻ TO WĘGLAN POTASU, OTRZYMYWANY Z POPIOŁU
 *   DRZEWNEGO, i że był historycznym przodkiem dzisiejszych
 *   spulchniaczy — używano go m.in. w piekarnictwie,
 * — ⚠⚠ ŻE DZIŚ W SZAFCE STOJĄ TRZY RÓŻNE RZECZY, KTÓRE
 *   WSZYSCY MYLĄ, I ŻE RÓŻNIĄ SIĘ MECHANIZMEM,
 *   NIE SIŁĄ. TO JEST RDZEŃ TEKSTU:
 *   — SODA OCZYSZCZONA działa TYLKO W OBECNOŚCI CZEGOŚ
 *     KWAŚNEGO. Sama z siebie nie zrobi nic poza
 *     posmakiem. Dlatego w przepisach z sodą pojawiają się
 *     maślanka, kefir, jogurt, kakao, miód albo ocet —
 *     to nie są dodatki dla smaku, tylko część mechanizmu,
 *   — PROSZEK DO PIECZENIA to soda, kwas już z nią
 *     zmieszany i skrobia, która ich pilnuje. Działa sam,
 *     bo kwas ma w środku,
 *   — AMONIAK (węglan amonu) używany jest do ciastek
 *     PŁASKICH I CIENKICH, bo jego zapach musi mieć
 *     którędy odejść — w wysokim cieście zostanie,
 * — ⚠⚠ ŻE SODY I PROSZKU NIE ZAMIENIA SIĘ JEDNO
 *   NA DRUGIE — to nie jest kwestia przeliczenia, tylko
 *   dwóch różnych mechanizmów. Przepis z sodą ma gdzieś
 *   swój kwas; przepis z proszkiem nie musi go mieć,
 *   ⚠ ŻADNYCH PRZELICZNIKÓW ANI ILOŚCI,
 * — ŻE ZA DUŻO SODY DAJE MYDLANY, LEKKO METALICZNY
 *   POSMAK — i że to jest najczęstsza przyczyna dziwnego
 *   smaku domowego ciasta, o której nikt nie myśli,
 * — ⚠⚠ ŻE CIASTA NA SODZIE I PROSZKU NIE ODSTAWIA SIĘ
 *   PRZED PIECZENIEM: reakcja zaczyna się w misce,
 *   a nie w piekarniku. Piekarnik ma być nagrzany WCZEŚNIEJ.
 *   TO JEST NAJUŻYTECZNIEJSZA RZECZ W CAŁYM TEKŚCIE,
 * — ŻE DLATEGO TAKIE CIASTA MIESZA SIĘ KRÓTKO — im dłużej
 *   się miesza, tym więcej gazu ucieka, zanim cokolwiek
 *   trafi do formy,
 * — ⚠ ODSYŁAM DO STRON O DROŻDŻACH I O CIEŚCIE
 *   DROŻDŻOWYM, NIE ROZWIJAM — drożdże to zupełnie inny
 *   mechanizm,
 * — ⚠ UCZCIWIE O SPRZĘCIE — DWIE STRONY NARAZ:
 *   — urządzenie miesza szybko i równo, co przy cieście
 *     na proszku jest realną zaletą, bo krótkie mieszanie
 *     to dokładnie to, o co chodzi,
 *   — ale kusi, żeby mieszać dłużej „dla pewności" — a to
 *     jest przy tych ciastach najgorsze, co można zrobić,
 *   — i oczywiście NIE PIECZE ⚠ ODSYŁAM DO STRONY
 *     O FORMIE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH ILOŚCI, PROPORCJI ANI PRZELICZNIKÓW
 *   SPULCHNIACZY. To jest dokładnie ten rodzaj porady,
 *   przy którym pomyłka psuje wypiek, a ja nie jestem
 *   od dyktowania receptur. TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR PIECZENIA.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — w szczególności
 *   ZERO o sodzie oczyszczonej jako środku na cokolwiek,
 *   ZERO o „naturalnych" kontra „chemicznych" dodatkach.
 *   TWARDA GRANICA.
 * — ŻADNEJ KRYTYKI GOTOWYCH PROSZKÓW DO PIECZENIA —
 *   zasada z Mrągowa.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ⚠ ZERO TEMATU ALKOHOLU (w tym piwa kozicowego).
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO spalenia miasta przez Szwedów w 1708 r.
 * — ⚠⚠ ZERO Kurpiów jako „znakomitych strzelców", walk
 *   ze Szwedami i powstania styczniowego. To jeden
 *   z filarów tożsamości kurpiowskiej i CAŁY GO OMIJAM.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO przyczyny utraty praw miejskich w 1869 r.
 *   Podaję neutralnie: prawa miejskie od 1798, odzyskane
 *   w 1993.
 * — ⚠⚠ ZERO emigracji zarobkowej i tego, że gospodarstwa
 *   były o połowę za małe, by wyżywić rodzinę.
 *   TO JEST OPOWIEŚĆ O GŁODZIE. TWARDA GRANICA.
 * — ZERO bezrobocia i poziomu płac.
 * — ZERO II wojny światowej.
 * — ZERO wątku zakonnego i genezy osady jako misji.
 * — ZERO rankingów przestępczości.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „DROŻDŻE ŚWIEŻE KONTRA SUSZONE" (Pasym) i „CIASTO
 *   DROŻDŻOWE" (Wołczyn) dotyczą DROŻDŻY, czyli zupełnie
 *   innego mechanizmu — żywego organizmu, nie reakcji.
 * — „PRZAŚNE" (Przasnysz) dotyczy PIECZYWA BEZ ZAKWASU
 *   I BEZ DROŻDŻY, czyli braku spulchniania w ogóle.
 * — „PĘCZNIENIE" (Mszczonów) dotyczy ROŚNIĘCIA OD WODY.
 * — „FORMA" (Żelechów) dotyczy KSZTAŁTU NACZYNIA.
 * — „ZAGĘSZCZANIE" (Barczewo) dotyczy GĘSTOŚCI DANIA.
 * — „POPIÓŁ" (Kozienice) dotyczy POPIOŁU JAKO NAJSTARSZEGO
 *   SUROWCA KUCHNI. ⚠ TO JEST NAJBLIŻSZY KĄT — TUTAJ
 *   popiół pojawia się WYŁĄCZNIE jako surowiec do potażu,
 *   w jednym akapicie historycznym, a tematem jest
 *   TRÓJKA: SODA, PROSZEK, AMONIAK. TWARDA GRANICA.
 * TUTAJ chodzi o TO, OD CZEGO CIASTO ROŚNIE, kiedy nie ma
 * w nim drożdży.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku założenia osady ani tego, kto ją założył.
 * — NIE PODAJĘ przyczyny utraty praw miejskich.
 * — NIE PRZYPISUJĘ Myszyńcowi fafernuchów ani piwa
 *   kozicowego.
 * — NIE PISZĘ, że rejbak pochodzi „z Myszyńca" — karta
 *   produktu nie wskazuje gminy.
 * — NIE ROBIĘ tematu z miodu ani z wosku.
 * — NIE PODAJĘ ilości spulchniaczy ani przeliczników.
 * — NIE MYLĘ Kurpi Zielonych z Kurpiami Białymi.
 * — NIE MYLĘ Myszyńca ze Starym Myszyńcem
 *   ani z Myszyńcem-Korytami.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Myszyniec liczy 3 179 mieszkańców (GUS, 31.12.2024)
 *   na 11,2 km², a cała gmina miejsko-wiejska 9 930 osób
 *   na 226,8 km² i dzieli się na osiemnaście sołectw;
 *   prawa miejskie miasto ma od 1798 roku, a odzyskało
 *   je w 1993,
 * — osada powstała w połowie XVII wieku wśród Puszczy
 *   Zielonej i nosiła pierwotnie nazwę Martuny — od smolarza,
 *   który się tu osiedlił; w 1719 roku August II zezwolił
 *   na jarmarki na tutejszym rynku,
 * — sprawozdanie o gospodarce Puszczy Zielonej z 1690 roku
 *   wymienia siedemnaście pieców, „w których pędzą smołę",
 *   dziesięć zakładów zajmujących się przygotowywaniem
 *   żelaza, wypalanie węgla drzewnego, wydobycie i obróbkę
 *   bursztynu oraz produkcję potażu — tutejsze osady
 *   wypalały popiół,
 * — kurpiowscy bartnicy mieli własne prawo zwyczajowe,
 *   spisane w 1559 i 1616 roku i zatwierdzone przez
 *   Zygmunta III Wazę w 1630,
 * — Leśnictwo Zawodzie istniało już w 1839 roku,
 *   a Leśnictwo Myszyniec powstało w 1887,
 * — gleby są tu piaszczyste i podmokłe, więc dawniej i dziś
 *   uprawia się przede wszystkim żyto, grykę i ziemniaki,
 *   a powiat ostrołęcki jest regionem hodowli bydła mlecznego,
 * — Regionalne Centrum Kultury Kurpiowskiej działa od 2012
 *   roku i prowadzi minimuzeum z dawnymi narzędziami pracy;
 *   organizuje Jarmark Kurpiowski w maju, Noc Sobótkową
 *   w czerwcu i Miodobranie Kurpiowskie pod koniec sierpnia,
 * — rejbak kurpiowski, wpisany na ministerialną Listę
 *   Produktów Tradycyjnych 7 listopada 2023 roku, jest
 *   potrawą Kurpiowszczyzny, a jego nazwa pochodzi
 *   od „rejbowania", czyli tarcia ziemniaków.
 */
export const MYSZYNIEC: CityContent = {
  slug: "myszyniec",
  h1: "Thermomix Myszyniec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Myszyniec — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Myszyńcu na Kurpiach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Myszyniec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Myszyńcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Myszyńca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Myszyniec"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ciasta na proszku nie odstawia się przed pieczeniem — reakcja zaczyna się w misce.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Myszyńcu – jak wygląda prezentacja?",
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
      id: "spulchniacze",
      heading: "Od czego ciasto rośnie, kiedy nie ma w nim drożdży",
      paragraphs: [
        "Sprawozdanie o gospodarce Puszczy Zielonej z 1690 roku wylicza, czym tutejsze osady żyły. Siedemnaście pieców, „w których pędzą smołę”. Dziesięć zakładów przygotowujących żelazo. Wypalanie węgla drzewnego, wydobycie bursztynu, myślistwo. I jedna pozycja, która mnie zatrzymała: produkcja potażu — osady wypalały popiół.",
        "Potaż to węglan potasu, otrzymywany właśnie z popiołu drzewnego. Był towarem eksportowym, a w kuchni bezpośrednim przodkiem tego, co dziś stoi w szafce pod nazwą „proszek do pieczenia”. Ludzie z tych lasów wypalali surowiec, dzięki któremu gdzie indziej rosło ciasto.",
        "A skoro tak, to warto poświęcić chwilę trzem rzeczom, które dziś stoją w tej szafce obok siebie i które prawie wszyscy mylą. Różnią się nie siłą, tylko mechanizmem — i dlatego nie są wymienne.",
        "Soda oczyszczona działa wyłącznie wtedy, gdy ma w cieście coś kwaśnego. Sama z siebie nie zrobi nic poza posmakiem. To dlatego w przepisach z sodą pojawiają się maślanka, kefir, jogurt, kakao, miód albo odrobina octu — i to nie są dodatki dla smaku. To jest część mechanizmu, bez której nic nie urośnie.",
        "Proszek do pieczenia to ta sama soda, ale z już dołożonym kwasem i ze skrobią, która trzyma je osobno, dopóki jest sucho. Działa sam, bo swój kwas ma w środku.",
        "Amoniak, czyli węglan amonu, używany jest do ciastek płaskich i cienkich — i to nie z przyzwyczajenia. Jego zapach musi mieć którędy odejść w czasie pieczenia; w cieście wysokim po prostu w nim zostanie.",
        "Z tego wynika rzecz najważniejsza: sody i proszku nie zamienia się jedno na drugie. To nie jest kwestia przeliczenia ilości, tylko dwóch różnych sposobów działania. Przepis z sodą ma gdzieś ukryty swój kwas — czasem w maślance, czasem w kakao — a przepis z proszkiem nie musi go mieć wcale.",
        "Przy okazji wyjaśnia się rzecz, o której nikt nie myśli, gdy domowe ciasto dziwnie smakuje. Za dużo sody daje mydlany, lekko metaliczny posmak. Nie jest to wina mąki ani jajek — to po prostu soda, której nie miał kto zneutralizować.",
        "Teraz to, co uważam za najbardziej użyteczne zdanie na tej stronie. Ciasta na sodzie albo na proszku nie odstawia się przed pieczeniem. Reakcja zaczyna się w misce, w momencie, gdy mokre spotyka suche — nie w piekarniku. Każda minuta stania na blacie to gaz, który ucieka w powietrze zamiast podnieść ciasto. Piekarnik ma być nagrzany wcześniej, a ciasto ma iść do niego od razu.",
        "Z tego samego powodu takie ciasta miesza się krótko. Im dłużej pracuje mikser, tym więcej już powstałego gazu wybija się z masy — i tym mniej go zostaje na to, po co był.",
        "To wszystko dotyczy wyłącznie spulchniaczy chemicznych. Drożdże działają zupełnie inaczej, bo są żywym organizmem, a nie reakcją — pisałam o nich osobno i tych dwóch rzeczy nie należy mieszać.",
        "Na koniec uczciwie o sprzęcie, bo ma tu dwie strony. Thermomix miesza szybko i równo, a przy cieście na proszku krótkie mieszanie jest dokładnie tym, o co chodzi — więc pod tym względem wypada bardzo dobrze.",
        "Ale właśnie dlatego kusi, żeby pomieszać jeszcze chwilę „dla pewności”, skoro to nic nie kosztuje. Przy tych ciastach jest to najgorsze, co można zrobić, i trzeba sobie to powiedzieć wprost. No i oczywiście urządzenie nie piecze — o tym, co robi z ciastem forma i piekarnik, pisałam przy innym mieście.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Myszyńcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pieczecie i chcecie zobaczyć, którą część roboty urządzenie realnie zdejmuje z rąk — powiedzcie to przy umawianiu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Myszyńcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla myszynieckiej rodziny",
      paragraphs: [
        "Myszyniec liczy blisko trzy tysiące dwieście mieszkańców na jedenastu kilometrach kwadratowych, a cała gmina miejsko-wiejska prawie dziesięć tysięcy osób na dwustu dwudziestu siedmiu kilometrach i dzieli się na osiemnaście sołectw. Prawa miejskie miasto ma od 1798 roku, a odzyskało je w 1993. Osada powstała w połowie XVII wieku wśród Puszczy Zielonej i nosiła pierwotnie nazwę Martuny — od smolarza, który się tu osiedlił; w 1719 roku August II zezwolił na jarmarki na tutejszym rynku. Sprawozdanie o gospodarce Puszczy Zielonej z 1690 roku wymienia siedemnaście pieców, „w których pędzą smołę”, dziesięć zakładów zajmujących się przygotowywaniem żelaza, wypalanie węgla drzewnego, wydobycie i obróbkę bursztynu oraz produkcję potażu — tutejsze osady wypalały popiół. Kurpiowscy bartnicy mieli własne prawo zwyczajowe, spisane w 1559 i 1616 roku i zatwierdzone przez Zygmunta III Wazę w 1630. Leśnictwo Zawodzie istniało już w 1839 roku, a Leśnictwo Myszyniec powstało w 1887. Gleby są tu piaszczyste i podmokłe, więc dawniej i dziś uprawia się przede wszystkim żyto, grykę i ziemniaki, a powiat ostrołęcki jest regionem hodowli bydła mlecznego. Regionalne Centrum Kultury Kurpiowskiej działa od 2012 roku i prowadzi minimuzeum z dawnymi narzędziami pracy; organizuje Jarmark Kurpiowski w maju, Noc Sobótkową w czerwcu i Miodobranie Kurpiowskie pod koniec sierpnia. Rejbak kurpiowski, wpisany na ministerialną Listę Produktów Tradycyjnych 7 listopada 2023 roku, jest potrawą całej Kurpiowszczyzny, a jego nazwa pochodzi od „rejbowania”, czyli tarcia ziemniaków.",
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

  districtsHeading: "Do których części Myszyńca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od placu Wolności po domy przy wylotach dróg. Dojeżdżam też do wsi w gminie, w tym do Wolkowych, Wydmus, Wykrotu i Zalesia. Dla porządku: Myszyniec Stary i Myszyniec-Koryta to osobne miejscowości w tej samej gminie i do nich również przyjadę.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Myszyniec też przyjadę",
  nearbyParagraphs: [
    "Kadzidło, Łyse, Baranowo, Czarnia, Lelis, Ostrołęka i Chorzele są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ostrołęka", "Chorzele", "Kolno", "Przasnysz"],

  about: blokOMnie("do Myszyńca", "w Myszyńcu", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Myszyńca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie — także do Myszyńca Starego i do Myszyńca-Koryt, które są osobnymi miejscowościami. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Myszyniec na Kurpiach Zielonych, w powiecie ostrołęckim.",
    },
    ...faqWspolne("w Myszyńcu"),
    {
      question: "Czym różni się soda oczyszczona od proszku do pieczenia?",
      answer:
        "Mechanizmem, nie siłą. Soda działa wyłącznie wtedy, gdy ma w cieście coś kwaśnego — dlatego w przepisach z sodą pojawiają się maślanka, kefir, jogurt, kakao czy miód; to część mechanizmu, a nie dodatek dla smaku. Proszek do pieczenia to soda z już dołożonym kwasem i ze skrobią, więc działa sam. Z tego powodu nie zamienia się ich jedno na drugie.",
    },
    {
      question: "Dlaczego ciasto na proszku nie urosło?",
      answer:
        "Najczęściej dlatego, że postało na blacie. Reakcja zaczyna się już w misce, w chwili gdy mokre spotyka suche, więc każda minuta czekania to gaz uchodzący w powietrze zamiast do ciasta. Piekarnik ma być nagrzany wcześniej, a ciasto iść do niego od razu. Z tego samego powodu takie ciasta miesza się krótko — długie mieszanie wybija z masy to, co już powstało.",
    },
    {
      question: "Dlaczego domowe ciasto bywa mydlane w smaku?",
      answer:
        "To zwykle za dużo sody, której nie miał kto zneutralizować — daje wtedy mydlany, lekko metaliczny posmak. Nie jest to wina mąki ani jajek. Warto sprawdzić, czy przepis rzeczywiście ma w sobie coś kwaśnego, bo bez tego soda nie ma z czym zareagować.",
    },
  ],

  geo: { lat: 53.3805, lng: 21.3495 },
};
