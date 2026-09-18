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
 * RYPIN — powiat rypiński, woj. kujawsko-pomorskie.
 * GMINA MIEJSKA. 15 298 mieszkańców (GUS 31.12.2024),
 * 11,0 km², 1 395,8 os./km².
 * ⚠⚠ OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA RYPIN
 *   (7 289 osób, 132,1 km², 24 sołectwa) — I MA SIEDZIBĘ
 *   W TYM SAMYM MIEŚCIE, przy ul. Lipnowskiej.
 *   NIE MIESZAM TYCH DANYCH. TWARDA GRANICA.
 * ⚠ BRIEF PODAWAŁ „ok. 16 tys." — zawyżenie o ok. 700.
 *
 * ⚠ NAZWA PRAKTYCZNIE UNIKATOWA — nie znaleziono drugiej
 *   miejscowości Rypin w Polsce. Realne ryzyko mylenia to:
 *   gmina miejska kontra wiejska, Starorypin Rządowy kontra
 *   Starorypin Prywatny oraz podobieństwo do RYNU
 *   (warmińsko-mazurskie) w wyszukiwarce.
 * ⚠ ODMIANA: D. RYPINA, Ms. W RYPINIE, przym. RYPIŃSKI,
 *   mieszkaniec RYPINIANIN / RYPINIANKA (PWN).
 *   ⚠ sjp.pl notuje wariant „rypinian" — TRZYMAM SIĘ
 *   FORMY PWN. TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — gród pierwotnie w STARORYPINIE; prawa miejskie
 *   Starorypina około 1323–1326 r.,
 * — miasto przeniesiono na nowy teren NAD RZEKĘ RYPIENICĘ,
 *   ⚠⚠ PRZYCZYNĄ BYŁO ZNISZCZENIE GRODU W 1329 R.
 *   PISZĘ WYŁĄCZNIE „przeniesiono nad Rypienicę",
 *   BEZ PRZYCZYNY. TWARDA GRANICA.
 * — PRZYWILEJ LOKACYJNY ODNOWIONO 24 CZERWCA 1345 R.
 *   przez Władysława, księcia dobrzyńskiego.
 *   ⚠ 24 czerwca to dzień św. Jana Chrzciciela — klasyczna
 *   data targowa i graniczna w kalendarzu gospodarczym.
 *   PODAJĘ DATĘ; wzmiankę o dniu św. Jana podaję
 *   jako fakt kalendarzowy, bez wątku wyznaniowego,
 * — XIV w.: mury obronne z dwiema bramami-basztami, rynek
 *   jako centrum; ŚREDNIOWIECZNA SIATKA ULIC ZACHOWANA
 *   DO DZIŚ. ⚠ MURÓW NIE ROZWIJAM W STRONĘ OBLĘŻEŃ,
 * — koniec XVI w.: około 900 mieszkańców,
 * — położenie na SZLAKU HANDLOWYM TORUŃ–BRZEŚĆ,
 * — ⚠ MŁYNY — NAJMOCNIEJSZY WĄTEK MIASTA:
 *   MŁYN ZBOŻOWY Z 1900 R. przy ul. Mławskiej 27,
 *   w architekturze secesyjnej; w styczniu 2014 r. ruszyła
 *   przebudowa na obiekt handlowy o powierzchni około
 *   3 000 m², prowadzona pod nadzorem konserwatora zabytków
 *   z zachowaniem historycznego charakteru; obiekt nosi dziś
 *   nazwę GALERIA MŁYN — NAZWA MŁYNA PRZETRWAŁA JAKO NAZWA
 *   MIEJSCA. W II RP działał też Spółdzielczy Młyn Rolniczy,
 * — RZEMIOSŁO (dane z 1985 r.): cech rypiński skupiał
 *   230 zakładów budowlanych, 60 metalowych, 40 odzieżowych,
 *   40 drzewnych, 21 motoryzacyjnych i 73 inne; liczba
 *   zakładów w mieście rosła ze 156 w 1981 r. do 237
 *   w 1986. Rody rzemieślnicze: Gośliccy (kowalstwo
 *   i ślusarstwo), Bonowiczowie (stolarstwo i kołodziejstwo),
 *   Solarscy (krawiectwo).
 * ⚠ DNI TARGOWYCH ANI DAT JARMARKÓW NIE USTALONO.
 *
 * DZIŚ: przemysł lekki — odzieżowy, spożywczy, metalowy —
 * budownictwo oraz handel. Rzemiosło pozostaje silne:
 * budownictwo, metal, drewno, odzież. Powiat to rolnictwo
 * ziemi dobrzyńskiej.
 * ⚠⚠ NIE PISZĘ O PRZEMYŚLE MLECZARSKIM MIASTA — patrz
 *   sekcja etyczna. TWARDA GRANICA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: żaden produkt nie ma
 *   Rypina jako miejscowości pochodzenia. ALE region
 *   pochodzenia jednego produktu OBEJMUJE ziemię dobrzyńską:
 *   „TWARÓG Z KUJAW I ZIEMI DOBRZYŃSKIEJ", produkty mleczne,
 *   WPIS 31 LIPCA 2013 R.
 *   ⚠ MOGĘ NAPISAĆ, ŻE TO PRODUKT REGIONU, W KTÓRYM LEŻY
 *   RYPIN. NIE WOLNO NAPISAĆ „z Rypina".
 *   ⚠⚠ PODSTAWA KĄTA — OPIS Z KARTY PRODUKTU:
 *   wyłącznie mleko krowie i czyste kultury bakterii
 *   mlekowych; podgrzewanie do skrzepnięcia; SKRZEP
 *   PRZEKŁADANY DO WORECZKÓW PŁÓCIENNYCH; PRASOWANIE
 *   PRASAMI DREWNIANYMI, PIONOWYMI LUB POZIOMYMI,
 *   DLA ODCIŚNIĘCIA SERWATKI; krojenie ręczne; zawijanie
 *   w arkusze pergaminu; kształt prostopadłościanu lub klina.
 *   Z karty: w XIX i na początku XX w. gospodynie przerabiały
 *   w gospodarstwach produkty zbożowe, mleczne, mięso, owoce
 *   i warzywa, a metoda prasowania pozostała w zasadzie
 *   niezmieniona.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: SERWATKA — płyn, który zostaje i który prawie zawsze
 * ląduje w zlewie.
 * Kąt od karty produktu twarogu z Kujaw i ziemi dobrzyńskiej,
 * w której cała technologia sprowadza się do jednej decyzji:
 * ile serwatki odcisnąć. To, co zostaje w woreczku, decyduje
 * o serze — a to, co z niego wycieka, jest osobnym
 * składnikiem, o którym nikt nie myśli.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że twaróg z Kujaw i ziemi dobrzyńskiej, wpisany
 *   na ministerialną listę 31 lipca 2013 r., opisany jest
 *   w karcie produktu bardzo konkretnie: skrzep przekłada się
 *   do woreczków płóciennych i prasuje drewnianymi prasami,
 *   żeby odcisnąć serwatkę,
 * — ŻE CAŁA TECHNOLOGIA SPROWADZA SIĘ DO JEDNEJ DECYZJI —
 *   ILE ODCISNĄĆ — i że ta sama decyzja zapada w każdej
 *   kuchni, tylko bez nazwy,
 * — ŻE TEN SAM SKRZEP DAJE SER MOKRY albo SUCHY, w zależności
 *   wyłącznie od czasu i siły prasowania — i że to są dwa
 *   różne produkty do dwóch różnych rzeczy: mokry rozrabia się
 *   z dodatkami, suchy trzyma się w cieście,
 *   ⚠ ODSYŁAM DO STRONY O TWAROGU I DO STRONY
 *   O ODSĄCZANIU, NIE ROZWIJAM ROBIENIA SERA,
 * — ⚠⚠ ŻE TEMATEM JEST TO, CO WYCIEKA — SERWATKA.
 *   To jest rdzeń tekstu i rzecz, o której praktycznie
 *   nikt nie mówi,
 * — ŻE SERWATKA NIE JEST ODPADEM: zostaje w niej część
 *   tego, co było w mleku, plus kwas z ukwaszenia,
 *   ⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — mówię o SMAKU
 *   I O DZIAŁANIU W CIEŚCIE,
 * — DO CZEGO SIĘ NADAJE:
 *   — do CHLEBA I NALEŚNIKÓW zamiast części wody — jest
 *     lekko kwaśna, więc reaguje z sodą
 *     ⚠ ODSYŁAM DO STRONY O SPULCHNIACZACH,
 *   — do GOTOWANIA KASZY albo ziemniaków zamiast wody,
 *   — do ZALEWANIA płatków i do koktajli,
 *   — do PODLEWANIA roślin, gdy nie ma na nią pomysłu
 *     ⚠ BEZ ŻADNYCH PORAD OGRODNICZYCH, jedno zdanie,
 * — ŻE MA WYRAŹNY, KWASKOWATY SMAK, więc nie wchodzi
 *   wszędzie — w słodkim cieście będzie wyczuwalna
 *   i trzeba to zaplanować, a nie odkryć,
 * — ŻE TA SAMA ZASADA DOTYCZY WSZYSTKICH PŁYNÓW, KTÓRE
 *   ZOSTAJĄ PO ODCEDZENIU: wody po ugotowaniu ziemniaków,
 *   wody po makaronie, wody po namoczeniu grzybów
 *   ⚠ ODSYŁAM DO STRONY O WODZIE PO GOTOWANIU,
 *   NIE ROZWIJAM,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix podgrzeje mleko równo
 *   i z pilnowaniem temperatury, co przy skrzepie ma
 *   znaczenie. ALE NIE ODCEDZI I NIE ODCIŚNIE — to robi
 *   płótno i sito ⚠ ODSYŁAM DO STRONY O PŁÓTNIE.
 *   Serwatka to jest dokładnie ten moment, w którym
 *   urządzenie kończy pracę, a zaczyna ręka.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI:
 *   jak długo serwatka jest dobra, w czym ją trzymać,
 *   czy nadaje się dla dzieci. TWARDA GRANICA.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH —
 *   ZERO o białku, o wapniu, o „zdrowym napoju".
 *   Serwatka jest obrosła tego rodzaju treściami
 *   i trzymam się z dala. TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW NA SER.
 * — ŻADNYCH NAZW FIRM I MLECZARNI.
 * — ŻADNYCH PORAD OGRODNICZYCH POZA JEDNYM ZDANIEM.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO RYPIŃSKIEJ MLECZARNI, SPÓŁDZIELNI MLECZARSKIEJ
 *   I PRZEMYSŁU MLECZARSKIEGO MIASTA. Działająca od 1926 r.
 *   spółdzielnia ogłosiła upadłość 5 października 2018 r.;
 *   poszkodowanych jest ponad 1,1 tys. osób — pracowników
 *   i rolników — a w 2025 r. syndyk sprzedaje majątek.
 *   Rypin był miastem mleczarskim i ta historia skończyła się
 *   bardzo źle, w dodatku niedawno.
 *   ⚠ KONSEKWENCJA: temat twarogu prowadzę WYŁĄCZNIE
 *   jako domowy, regionalny i historyczny. To wąska ścieżka,
 *   ale przejezdna. TWARDA GRANICA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠ Muzeum Ziemi Dobrzyńskiej wolno wymienić z nazwy,
 *   ale ZERO genezy budynku, w którym się mieści.
 *   TWARDA GRANICA.
 * — ZERO najazdu z 1329 r. — piszę tylko „przeniesiono
 *   miasto nad Rypienicę".
 * — ZERO wyludniania i zamykania zakładów.
 * — ZERO wątków wyznaniowych.
 * — ZERO rozwijania murów obronnych w stronę oblężeń.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „TWARÓG" (Nowy Dwór Gdański) dotyczy ROBIENIA SERA
 *   W DOMU. ⚠ TUTAJ ser jest tylko punktem wyjścia;
 *   tematem jest PŁYN, KTÓRY ZOSTAJE. Odsyłam tam wprost.
 * — „ODSĄCZANIE I ODCISKANIE" (Łapy) dotyczy TEGO,
 *   ILE WODY TRZEBA WYGNAĆ Z PRODUKTU.
 * — „PŁÓTNO W KUCHNI" (Raciąż) dotyczy TKANINY
 *   JAKO NARZĘDZIA.
 * — „WODA PO GOTOWANIU" (Ryn) dotyczy WODY PO ODCEDZENIU
 *   ZIEMNIAKÓW I MAKARONU. ⚠ TO JEST NAJBLIŻSZY KĄT —
 *   tutaj chodzi o PŁYN Z PRODUKTU, nie o wodę, w której
 *   coś się gotowało. Odsyłam tam wprost.
 * — „MLEKO" (Łowicz) dotyczy MLEKA.
 * — „MASŁO" (Bychawa) dotyczy MASŁA.
 * TUTAJ chodzi o SERWATKĘ jako osobny składnik.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o rypińskiej mleczarni ani o jej losach.
 * — NIE PISZĘ „twaróg z Rypina" — to produkt regionu.
 * — NIE MIESZAM danych gminy miejskiej i wiejskiej.
 * — NIE PODAJĘ przyczyny przeniesienia miasta.
 * — NIE OPISUJĘ genezy budynku muzeum.
 * — NIE ORZEKAM niczego o wartości odżywczej serwatki.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE PISZĘ „rypinian" — poprawnie „rypinianin".
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Rypin jest gminą miejską i liczy 15 298 mieszkańców
 *   (GUS, 31.12.2024) na 11 km², czyli blisko tysiąc
 *   czterysta osób na kilometr kwadratowy; obok istnieje
 *   odrębna gmina wiejska o tej samej nazwie, z siedzibą
 *   w mieście,
 * — pierwotny gród stał w Starorypinie i uzyskał prawa
 *   miejskie około 1323–1326 roku, a potem miasto
 *   przeniesiono nad rzekę Rypienicę; przywilej lokacyjny
 *   odnowił 24 czerwca 1345 roku Władysław, książę
 *   dobrzyński — była to data dnia świętego Jana
 *   Chrzciciela, klasyczna w dawnym kalendarzu gospodarczym,
 * — w XIV wieku miasto otoczono murami z dwiema
 *   bramami-basztami, a jego średniowieczna siatka ulic
 *   zachowała się do dziś; pod koniec XVI wieku mieszkało
 *   tu około dziewięciuset osób, a Rypin leżał na szlaku
 *   handlowym z Torunia do Brześcia,
 * — przy ulicy Mławskiej stoi młyn zbożowy z 1900 roku,
 *   wzniesiony w architekturze secesyjnej; w 2014 roku
 *   przebudowano go na obiekt handlowy o powierzchni około
 *   trzech tysięcy metrów kwadratowych, pod nadzorem
 *   konserwatora zabytków i z zachowaniem historycznego
 *   charakteru — do dziś nosi nazwę Galeria Młyn;
 *   w dwudziestoleciu międzywojennym działał tu także
 *   Spółdzielczy Młyn Rolniczy,
 * — w 1985 roku cech rypiński skupiał dwieście trzydzieści
 *   zakładów budowlanych, sześćdziesiąt metalowych,
 *   czterdzieści odzieżowych i czterdzieści drzewnych,
 *   a liczba zakładów w samym mieście wzrosła ze stu
 *   pięćdziesięciu sześciu w 1981 roku do dwustu
 *   trzydziestu siedmiu w 1986; wśród rodów rzemieślniczych
 *   wymienia się Goślickich — kowali i ślusarzy,
 *   Bonowiczów — stolarzy i kołodziejów — oraz Solarskich,
 *   krawców,
 * — 31 lipca 2013 roku na ministerialną Listę Produktów
 *   Tradycyjnych wpisano „twaróg z Kujaw i Ziemi
 *   Dobrzyńskiej", czyli produkt regionu, w którym leży
 *   Rypin; z karty produktu wynika, że robi się go wyłącznie
 *   z mleka krowiego i czystych kultur bakterii mlekowych,
 *   a skrzep przekłada się do woreczków płóciennych
 *   i prasuje drewnianymi prasami, aby odcisnąć serwatkę;
 *   gotowy ser kroi się ręcznie i zawija w arkusze
 *   pergaminu, a metoda prasowania pozostała w zasadzie
 *   niezmieniona od XIX wieku.
 */
export const RYPIN: CityContent = {
  slug: "rypin",
  h1: "Thermomix Rypin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rypin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Rypinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rypin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rypinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rypina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Rypin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Serwatka nie jest odpadem — jest składnikiem, o którym nikt nie myśli.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rypinie – jak wygląda prezentacja?",
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
      id: "serwatka",
      heading: "Co zostaje w woreczku, a co z niego wycieka",
      paragraphs: [
        "31 lipca 2013 roku na ministerialną Listę Produktów Tradycyjnych wpisano twaróg z Kujaw i ziemi dobrzyńskiej — czyli produkt regionu, w którym leży Rypin. Karta produktu jest wyjątkowo konkretna: mleko krowie i czyste kultury bakterii, podgrzewanie do skrzepnięcia, a potem skrzep przekładany do woreczków płóciennych i prasowany drewnianymi prasami, żeby odcisnąć serwatkę. Gotowy ser kroi się ręcznie i zawija w pergamin, a metoda prasowania nie zmieniła się w zasadzie od XIX wieku.",
        "Cała ta technologia sprowadza się do jednej decyzji: ile odcisnąć. Ten sam skrzep daje ser mokry albo suchy, w zależności wyłącznie od czasu i siły prasowania — a to są dwa różne produkty do dwóch różnych rzeczy. Mokry rozrabia się z dodatkami, suchy trzyma się w cieście i nie rozwadnia go. O robieniu sera w domu i o samym odsączaniu pisałam osobno.",
        "Mnie interesuje to, co z woreczka wycieka. Serwatka.",
        "W każdej kuchni, w której powstaje twaróg, powstaje też półtora litra tej rzeczy — i w dziewięciu przypadkach na dziesięć ląduje w zlewie. A to nie jest odpad. To płyn, w którym została część tego, co było w mleku, plus kwas z ukwaszenia. I ten kwas jest tu najważniejszy, bo on decyduje, co da się z serwatką zrobić.",
        "Do chleba i do naleśników wchodzi zamiast części wody — i akurat tam jej lekka kwaśność pracuje, bo reaguje z sodą, o czym pisałam osobno. Kasza i ziemniaki ugotowane w serwatce zamiast w wodzie mają wyraźniejszy smak. Można nią zalać płatki albo wrzucić do koktajlu. A jeśli akurat nie ma na nią pomysłu — podlewa się nią rośliny i nie ma w tym nic złego.",
        "Ale trzeba wiedzieć jedno: serwatka ma wyraźny, kwaskowaty smak i nie wchodzi wszędzie. W słodkim cieście będzie wyczuwalna. To nie jest wada, tylko cecha, którą trzeba zaplanować, a nie odkryć po upieczeniu.",
        "I rzecz szersza, bo ta sama zasada dotyczy wszystkich płynów, które zostają po odcedzeniu: wody po ziemniakach, wody po makaronie, wody po namoczeniu suszonych grzybów. Każdy z nich coś w sobie ma i każdy standardowo idzie do zlewu — o tym też pisałam przy innym mieście.",
        "Na koniec o sprzęcie, bo tu granica przebiega bardzo wyraźnie. Thermomix podgrzeje mleko równo i z pilnowaniem temperatury, a przy skrzepie ma to realne znaczenie, bo przegrzanie psuje sprawę nieodwracalnie.",
        "Ale nie odcedzi i nie odciśnie. To robi płótno i sito — pisałam o tym osobno. Serwatka jest dokładnie tym momentem, w którym urządzenie kończy pracę, a zaczyna ręka. I chyba dobrze, że taki moment w ogóle jest.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rypinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz zobaczyć, gdzie urządzenie realnie wyręcza, a gdzie trzeba dołożyć rękę i sito — powiedz to przy umawianiu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rypinie"),
    sekcjaRaty("w Rypinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rypińskiej rodziny",
      paragraphs: [
        "Rypin jest gminą miejską i liczy ponad piętnaście tysięcy mieszkańców na jedenastu kilometrach kwadratowych, czyli blisko tysiąc czterysta osób na kilometr; obok istnieje odrębna gmina wiejska o tej samej nazwie, z siedzibą w mieście. Pierwotny gród stał w Starorypinie i uzyskał prawa miejskie około 1323–1326 roku, a potem miasto przeniesiono nad rzekę Rypienicę; przywilej lokacyjny odnowił 24 czerwca 1345 roku Władysław, książę dobrzyński — była to data dnia świętego Jana Chrzciciela, klasyczna w dawnym kalendarzu gospodarczym. W XIV wieku miasto otoczono murami z dwiema bramami-basztami, a jego średniowieczna siatka ulic zachowała się do dziś; pod koniec XVI wieku mieszkało tu około dziewięciuset osób, a Rypin leżał na szlaku handlowym z Torunia do Brześcia. Przy ulicy Mławskiej stoi młyn zbożowy z 1900 roku, wzniesiony w architekturze secesyjnej — w 2014 roku przebudowano go na obiekt handlowy pod nadzorem konserwatora zabytków, z zachowaniem historycznego charakteru, i do dziś nosi nazwę Galeria Młyn. W dwudziestoleciu międzywojennym działał tu także Spółdzielczy Młyn Rolniczy. W 1985 roku cech rypiński skupiał dwieście trzydzieści zakładów budowlanych, sześćdziesiąt metalowych, czterdzieści odzieżowych i czterdzieści drzewnych, a wśród rodów rzemieślniczych wymienia się Goślickich — kowali i ślusarzy, Bonowiczów — stolarzy i kołodziejów — oraz Solarskich, krawców.",
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

  districtsHeading: "Do których części Rypina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i średniowiecznej siatki ulic po osiedla przy wylotach dróg i okolice parku. Dojeżdżam też do wsi w okolicznej gminie wiejskiej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Rypin też przyjadę",
  nearbyParagraphs: [
    "Brodnica, Lipno, Golub-Dobrzyń, Skępe, Dobrzyń nad Wisłą, Sierpc i Żuromin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Brodnica", "Lipno", "Golub-Dobrzyń", "Sierpc"],

  about: blokOMnie("do Rypina", "w Rypinie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rypina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Rypin to gmina miejska w powiecie rypińskim, a obok istnieje odrębna gmina wiejska o tej samej nazwie — do obu przyjeżdżam tak samo.",
    },
    ...faqWspolne("w Rypinie"),
    {
      question: "Co zrobić z serwatką po zrobieniu twarogu?",
      answer:
        "Nie wylewać. Jest lekko kwaśna, więc dobrze wchodzi do chleba i do naleśników zamiast części wody — i tam ten kwas pracuje, bo reaguje z sodą. Można w niej ugotować kaszę albo ziemniaki, zalać nią płatki, dodać do koktajlu. Trzeba tylko pamiętać, że ma wyraźny, kwaskowaty smak i w słodkim cieście będzie wyczuwalna.",
    },
    {
      question: "Od czego zależy, czy twaróg będzie mokry czy suchy?",
      answer:
        "Wyłącznie od czasu i siły prasowania — ten sam skrzep daje jedno albo drugie. To dwa różne produkty do dwóch różnych rzeczy: mokry rozrabia się z dodatkami, suchy trzyma się w cieście i nie rozwadnia go. W opisie regionalnego twarogu z Kujaw i ziemi dobrzyńskiej skrzep przekłada się do woreczków płóciennych i prasuje drewnianymi prasami.",
    },
    {
      question: "Czy Thermomix odcedzi twaróg?",
      answer:
        "Nie. Podgrzeje mleko równo i przypilnuje temperatury, co przy skrzepie ma realne znaczenie, bo przegrzanie psuje sprawę nieodwracalnie. Ale odcedzanie i odciskanie to robota płótna i sita — o samym płótnie jako narzędziu pisałam osobno. To dokładnie ten moment, w którym urządzenie kończy pracę, a zaczyna ręka.",
    },
  ],

  geo: { lat: 53.067, lng: 19.45 },
};
