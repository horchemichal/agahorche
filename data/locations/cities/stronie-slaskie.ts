import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * STRONIE ŚLĄSKIE — powiat kłodzki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 956 mieszkańców (GUS 31.12.2024), 2,4 km²,
 *   gęstość 2 082,4 os./km².
 *   ⚠⚠⚠ TO NAJMNIEJSZE POWIERZCHNIOWO MIASTO I NAJWYŻSZA
 *   GĘSTOŚĆ W CAŁYM CYKLU DOLNOŚLĄSKIM. Domyka się
 *   (4 956 / 2,38 = 2 082). ⚠⚠⚠ GĘSTOŚĆ PODAJĘ ZAWSZE
 *   RAZEM Z POWIERZCHNIĄ — sama liczba 2 082 wygląda
 *   jak błąd.
 * CAŁA GMINA: 6 721 osób, 146,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 6 721 / 146,1 = 46,0,
 *   a serwis podaje 47. NIE DOMYKA SIĘ.
 *   ⚠ Miasto to 1,64 % powierzchni gminy i 73,7 % jej
 *   ludności; gmina jest od miasta 60,9 raza większa
 *   powierzchniowo [przeliczenia własne z GUS].
 *   ⚠⚠ PODAJĘ TO JAKO FAKT, ale ⚠⚠⚠ NIE ROBIĘ Z TEGO
 *   KĄTA — figura „mało ziemi, dużo ludzi" wypadła już
 *   w Pieńsku, Głuszycy i Lubawce.
 *   ⚠ CZTERNAŚCIE WSI w wykazie GUS: Bielice, Bolesławów,
 *   Goszów, Janowa Góra, Kamienica, Kletno, Młynowiec,
 *   Nowa Morawa, Nowy Gierałtów, Rogóżka, Sienna, Stara
 *   Morawa, Stary Gierałtów, Strachocin.
 *   ⚠⚠ PISZĘ „wykaz GUS wymienia czternaście wsi" —
 *   inne źródło podaje siedemnaście sołectw.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ WYSOKOŚĆ MIASTA: 500–520 m n.p.m.
 * ⚠ GEO: 50,29556 / 16,87750.
 *
 * ⚠⚠⚠ ODMIANA — PIERWSZY CZŁON RODZAJU NIJAKIEGO:
 *   D. do STRONIA Śląskiego · Ms. w STRONIU Śląskim ·
 *   N. Stroniem Śląskim.
 *   ⚠⚠⚠ BŁĘDY: „do Stronie Śląskiego", „w Stronie
 *   Śląskim". Odmienia się jak „zdanie".
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠⚠ PRZYMIOTNIKA „STROŃSKI" NIE UŻYWAM — [NP],
 *   w źródłach nieobecny. ZAWSZE KONSTRUKCJA PRZYIMKOWA:
 *   „w Stroniu Śląskim", „ze Stronia Śląskiego".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠⚠ KOLIZJE NAZEWNICZE — NAJTRUDNIEJSZE W CYKLU:
 *   — ⚠⚠⚠ STRONIA — WIEŚ W GMINIE BIERUTÓW, czyli
 *     w mieście opisywanym W TEJ SAMEJ FALI. Nazwa
 *     różni się jedną literą.
 *   — ⚠⚠ STRONIE ŚLĄSKIE-WIEŚ — OSOBNA MIEJSCOWOŚĆ
 *     W TEJ SAMEJ GMINIE. ⚠⚠⚠ TO TAM LEŻY KAMIENIOŁOM.
 *     NIGDY nie piszę „kamieniołom w Stroniu Śląskim" —
 *     ZAWSZE „przy Stroniu Śląskim-Wsi".
 *   — STRONIE (świętokrzyskie) i STRONIE (małopolskie) —
 *     wsie o identycznej nazwie bez członu „Śląskie".
 *   — ⚠⚠ „stronie" (od „strona") i „stronić" — kolizja
 *     z leksyką pospolitą. Dlatego formy skróconej
 *     „Stronie" używam oszczędnie.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ ŚNIEŻNIK (1 425 m) to NIE ŚNIEŻKA (1 603 m,
 *   Karkonosze). Dwa różne szczyty, stale mylone.
 *
 * ⚠⚠ DATY USTROJOWE — RÓŻNICA 621 LAT:
 *   — PIERWSZA WZMIANKA o Stroniu: 1346 r. [ZW],
 *   — PRAWA MIEJSKIE: 1967 r. [ZW].
 *   ⚠ To NAJMŁODSZE MIASTO CAŁEGO CYKLU DOLNOŚLĄSKIEGO
 *   i największa rozpiętość wzmianka–prawa.
 *   ⚠⚠⚠ ALE KĄTA Z TEGO NIE ROBIĘ — „X lat bez statusu"
 *   to figura Szklarskiej Poręby. PODAJĘ OBIE DATY
 *   JAKO FAKTY, Z ROZRÓŻNIENIEM.
 *   ⚠ Pierwsza wzmianka o Strachocinie (dziś wieś
 *   w gminie): 1264 r. — starsza od wzmianki o samym
 *   Stroniu o 82 lata.
 *
 * ⚠⚠⚠⚠ WĄTEK HUTY SZKŁA JEST WYKLUCZONY W CAŁOŚCI.
 *   Huta kryształowa (1864, wznowienie 1950) to
 *   najgłośniejszy temat miasta, ALE: Szklarska Poręba
 *   ma kąt oparty na spisie zawodów przy szkle, a Pieńsk
 *   kąt o kolejności (kolej przed hutą). TRZECI TEKST
 *   O HUCIE W JEDNYM CYKLU BYŁBY POWTÓRZENIEM.
 *   ANI JEDNEGO ZDANIA O SZKLE.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — MARMUR Z KRZYŻNIKA:
 *   — złoże przy STRONIU ŚLĄSKIM-WSI, góra Krzyżnik,
 *   — dwa pasma złoża o długości ok. 1 200 m,
 *   — ZASOBY: ponad 6 500 000 ton,
 *   — ROCZNE WYDOBYCIE (stan na 31.12.2002): ok. 7 000 t,
 *   — nadkład gruntowy ok. 20 m.
 *   ⚠⚠⚠ ILORAZ SPRAWDZONY: 6 500 000 / 7 000 = 928,6.
 *   PONAD DZIEWIĘĆSET DWADZIEŚCIA LAT ZAPASU.
 *   To jest cały kąt.
 *   ⚠⚠⚠ TO NIE JEST PROGNOZA ANI MOJA TEZA — to iloraz
 *   dwóch liczb podanych obok siebie w jednym opisie
 *   złoża. MÓWIĘ TO W TEKŚCIE WPROST.
 *   ⚠⚠ ZASTRZEGAM, że tempo wydobycia pochodzi ze stanu
 *   na koniec 2002 r. i mogło się zmienić. NIE TWIERDZĘ,
 *   że dziś jest takie samo.
 *   ⚠ NAZWY ZŁOŻA („Biała Marianna", „Zielona Marianna")
 *   UŻYWAM — to nazwy historyczne odmian kamienia,
 *   nie marki działających firm.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ZIELONA ODMIANA: wydobycie zakończono w latach 70.
 *   XX w., a ostatnie bloki zużyto w 1996/97 r. przy
 *   odbudowie Teatru Narodowego w Warszawie.
 *   ⚠ Materiał przeżył własne wydobycie o ok. ćwierć
 *   wieku. ⚠⚠ PODAJĘ JAKO FAKT — nie robię z tego
 *   drugiego kąta.
 * — GDZIE TRAFIŁ KAMIEŃ: Sejm, Filharmonia Narodowa,
 *   Teatr Wielki, Teatr Narodowy i przejścia podziemne
 *   Dworca Centralnego w Warszawie.
 *   ⚠⚠ HOTELI NIE WYMIENIAM — to działające firmy.
 * — ⚠⚠ „PIĘĆ BARW POD NAZWĄ BIAŁA" — NIE UŻYWAM JAKO
 *   KĄTA: ociera się o „nie musi wyglądać jednolicie"
 *   (Głuszyca). Wspominam JEDNYM ZDANIEM jako ciekawostkę
 *   nazewniczą, bez morału.
 * — JASKINIA NIEDŹWIEDZIA W KLETNIE (wieś w gminie):
 *   odkryta 14 października 1966 r. podczas eksploatacji
 *   marmuru; znana długość korytarzy rosła: 200 m
 *   (koniec 1966) → 350 m (3 grudnia 1967) → ponad 800 m
 *   (grudzień 1971) → ponad 2 500 m (26–29 stycznia
 *   1972); rezerwat 1977; udostępnienie turystom
 *   11 czerwca 1983 r.
 *   ⚠⚠⚠ CAŁKOWITEJ DZISIEJSZEJ DŁUGOŚCI NIE PODAJĘ —
 *   NIE USTALONO. W obiegu krążą wartości 5,7 km i 3,7 km,
 *   ŻADNEJ NIE POTWIERDZONO. ANI JEDNEJ LICZBY
 *   O STANIE OBECNYM.
 *   ⚠⚠ „MIARA OPISUJE STAN WIEDZY, NIE OBIEKT" —
 *   to byłby świetny kąt, ALE to drugi kąt liczbowy
 *   w jednym tekście. PODAJĘ CIĄG JAKO FAKT,
 *   BEZ MORAŁU.
 * — ŚNIEŻNIK: 1 425 m n.p.m.
 *   ⚠⚠ DWÓCH WIEŻ NA ŚNIEŻNIKU (33,5 m z 1899 i 34,0 m
 *   z 2022) NIE ZESTAWIAM: po pierwsze ociera się to
 *   o „nie musi wyglądać jednolicie" (Głuszyca),
 *   po drugie wieża w Szczawnie-Zdroju Z TEJ SAMEJ FALI
 *   ma niemal identyczne parametry. NIE UŻYWAM WIEŻ
 *   W OGÓLE.
 * — MASYW ŚNIEŻNIKA: wody spływają stąd do trzech mórz —
 *   Czarnego, Bałtyckiego i Północnego [ZW].
 * — KOLEJ: stacja Stronie Śląskie leży na 482 m n.p.m.,
 *   na 31,316 km linii nr 322 z Kłodzka Nowego; linię
 *   otwarto 14 listopada 1897 r.
 *   ⚠⚠ TA SAMA LINIA OBSŁUGUJE LĄDEK-ZDRÓJ, KTÓRY MA
 *   WŁASNĄ STRONĘ. Fakty kolejowe są WSPÓLNE — nie
 *   przypisuję Stroniu tego, co dotyczy całej linii.
 * — ŚNIEŻNICKI PARK KRAJOBRAZOWY: 1981, 28 800 ha,
 *   otulina 14 900 ha, pięć gmin.
 * — ODLEGŁOŚĆ [ZW]: Kłodzko 31 km, trasą prowadzącą
 *   przez Lądek-Zdrój. POZOSTAŁYCH NIE PODAJĘ.
 *
 * KĄT: PODZIEL PRZEZ TEMPO
 * — o tym, że zapas nabiera sensu dopiero podzielony przez
 * tempo zużycia. Kąt od złoża marmuru: ponad sześć i pół
 * miliona ton zasobów przy siedmiu tysiącach ton rocznie
 * to nie „dużo kamienia", tylko dziewięćset dwadzieścia
 * osiem lat.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w opisie złoża przy Stroniu Śląskim-Wsi stoją obok
 *   siebie dwie liczby: ponad 6,5 mln ton zasobów
 *   i ok. 7 tys. ton rocznego wydobycia według stanu
 *   na koniec 2002 r.,
 * — ŻE DOPIERO PODZIELONE DAJĄ LICZBĘ, KTÓRA COŚ ZNACZY:
 *   ponad dziewięćset dwadzieścia osiem lat. TO JEST
 *   RDZEŃ. ⚠ Zaznaczam, że to zwykły iloraz, nie prognoza,
 * — ⚠⚠ ŻE W KUCHNI MAMY DOKŁADNIE TEN SAM PROBLEM:
 *   „pół kilo" nie znaczy nic, dopóki nie wiadomo,
 *   ile schodzi tygodniowo,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ROBI SIĘ GO W SKLEPIE,
 *   PRZED WŁOŻENIEM DO KOSZYKA: podziel wielkość
 *   opakowania przez to, ile zużywasz w tygodniu,
 *   i przeczytaj wynik w tygodniach albo miesiącach,
 * — ⚠⚠ ŻE PROMOCJE DZIAŁAJĄ WŁAŚNIE NA TYM: pokazują
 *   cenę za kilogram, nigdy zapas w miesiącach. Trzy
 *   w cenie dwóch to często zapas na półtora roku,
 * — ⚠⚠ ŻE KOSZTUJE TO MIEJSCE I PIENIĄDZE ZAMROŻONE
 *   DZIŚ ZA KORZYŚĆ PÓŹNIEJ — i że to jest cała kalkulacja,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część rzeczy warto mieć
 *   w zapasie i dzielenie to pokazuje równie wyraźnie.
 *   Przy czymś, co schodzi co tydzień, duże opakowanie
 *   to zapas na dwa miesiące i decyzja jest oczywista,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE — I O TYM, ŻE TEN SAM RUCH
 *   BYWA UŻYWANY PRZECIWKO KLIENTOWI: cenę urządzenia
 *   też da się podzielić, i handlowcy robią to, żeby
 *   wyszło „kilka złotych dziennie". MÓWIĘ WPROST, że
 *   uczciwe dzielenie wymaga uczciwego mianownika —
 *   liczby dni, w których naprawdę będziesz gotować,
 *   a nie tych, w których chciałabyś. I że jeśli ten
 *   mianownik jest mały, wynik wychodzi na niekorzyść
 *   urządzenia, i to jest prawidłowa odpowiedź.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GOTOWANIA NA ZAPAS — kąt zajęty (Stopnica).
 *   ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tamten tekst mówi o GOTOWANIU WIĘKSZEJ
 *   PORCJI NA PÓŹNIEJ; ten o KUPOWANIU ZAPASU
 *   PRODUKTÓW I O DZIELENIU PRZEZ TEMPO.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE W TEKŚCIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO TA SAMA POWIERZCHNIA, PIĘĆ RAZY WIĘCEJ —
 *   kąt zajęty (Milicz).
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno).
 * — ⚠⚠ ZERO PRZELICZANIA PRZEPISU I SKALI — kąt zajęty
 *   (Kowary).
 * — ⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra).
 * — ⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka).
 * — ⚠⚠ ZERO NIE MUSI WYGLĄDAĆ JEDNOLICIE — kąt zajęty
 *   (Głuszyca). Dlatego pięć barw „Białej Marianny"
 *   zostaje ciekawostką bez morału.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNYCH PORAD O PRZECHOWYWANIU, TERMINACH
 *   PRZYDATNOŚCI ANI PSUCIU SIĘ PRODUKTÓW. Pisząc
 *   o zapasach mówię WYŁĄCZNIE o miejscu i pieniądzach.
 *   TO JEST TWARDA GRANICA — bezpieczeństwo żywności.
 * — ŻADNYCH NAZW DZIAŁAJĄCYCH FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU SZKLARSKIEGO.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW.
 * — ⚠⚠ ZERO WYPADKÓW I ZAGROŻEŃ W KAMIENIOŁOMIE
 *   I W JASKINI.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO POWODZI I POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠ ZERO UPADKU PRZEMYSŁU, BEZROBOCIA I DEMOGRAFII
 *   WSPÓŁCZESNEJ.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE TWIERDZĘ, że tempo wydobycia z 2002 r. obowiązuje
 *   dziś.
 * — NIE PRZEDSTAWIAM ilorazu jako prognozy.
 * — NIE PODAJĘ dzisiejszej długości Jaskini
 *   Niedźwiedziej — nieustalona.
 * — NIE PRZYPISUJĘ MIASTU kamieniołomu — leży przy
 *   Stroniu Śląskim-Wsi.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE PODAJĘ odległości innych niż Kłodzko.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ Wpisy „kłodzkie", „sudeckie"
 *   i „z Ziemi Kłodzkiej" są REGIONALNE, NIE GMINNE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Stronie Śląskie leży w powiecie kłodzkim; miasto
 *   liczy 4 956 mieszkańców (GUS, 31.12.2024) na 2,4 km²,
 *   czyli 2 082 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 6 721 osób na 146,1 km²; wykaz
 *   GUS wymienia w niej czternaście wsi; miasto leży
 *   na wysokości 500–520 m n.p.m.,
 * — pierwsza wzmianka o Stroniu pochodzi z 1346 r.,
 *   a prawa miejskie nadano w 1967; wzmianka
 *   o Strachocinie, dziś wsi w gminie, jest o 82 lata
 *   starsza (1264),
 * — złoże marmuru na górze Krzyżnik przy Stroniu
 *   Śląskim-Wsi tworzą dwa pasma o długości ok. 1 200 m;
 *   zasoby wynoszą ponad 6,5 mln ton przy rocznym
 *   wydobyciu ok. 7 tys. ton według stanu na 31 grudnia
 *   2002 r., a nadkład gruntowy sięga ok. 20 m,
 * — wydobycie odmiany zielonej zakończono w latach 70.
 *   XX w., a ostatnie bloki zużyto w 1996/97 r. przy
 *   odbudowie Teatru Narodowego w Warszawie,
 * — kamień stąd trafił m.in. do gmachu Sejmu,
 *   Filharmonii Narodowej, Teatru Wielkiego i przejść
 *   podziemnych Dworca Centralnego,
 * — Jaskinię Niedźwiedzią w Kletnie odkryto
 *   14 października 1966 r. podczas eksploatacji
 *   marmuru; znana długość jej korytarzy rosła od 200 m
 *   pod koniec 1966 r. przez 350 m (3 grudnia 1967)
 *   i ponad 800 m (grudzień 1971) do ponad 2 500 m
 *   w dniach 26–29 stycznia 1972 r.; rezerwat utworzono
 *   w 1977, a trasę udostępniono 11 czerwca 1983 r.,
 * — Śnieżnik ma 1 425 m n.p.m., a wody z jego masywu
 *   spływają do trzech mórz: Czarnego, Bałtyckiego
 *   i Północnego,
 * — stacja kolejowa leży na 482 m n.p.m., na 31,316 km
 *   linii nr 322 z Kłodzka Nowego, otwartej 14 listopada
 *   1897 r.,
 * — Śnieżnicki Park Krajobrazowy utworzono w 1981 r.;
 *   ma 28 800 ha i otulinę 14 900 ha,
 * — do Kłodzka jest stąd 31 km, drogą prowadzącą przez
 *   Lądek-Zdrój.
 */
export const STRONIE_SLASKIE: CityContent = {
  slug: "stronie-slaskie",
  h1: "Thermomix Stronie Śląskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Stronie Śląskie — prezentacja i cena",
  seoDescription:
    "Thermomix w Stroniu Śląskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stronie Śląskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Stroniu Śląskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Stronia Śląskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Stronie Śląskie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sześć i pół miliona ton to nie liczba. Dziewięćset lat — to liczba.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Stroniu Śląskim – jak wygląda prezentacja?",
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
      id: "podziel-przez-tempo",
      heading: "Podziel przez tempo",
      paragraphs: [
        "W opisie złoża marmuru na górze Krzyżnik, przy Stroniu Śląskim-Wsi, stoją obok siebie dwie liczby. Zasoby: ponad sześć i pół miliona ton. Roczne wydobycie według stanu na koniec 2002 roku: około siedmiu tysięcy ton.",
        "Osobno żadna z nich nic nie mówi. Sześć i pół miliona ton to abstrakcja. Siedem tysięcy rocznie też.",
        "Dopiero podzielone dają liczbę, którą da się zrozumieć: dziewięćset dwadzieścia osiem lat. To zwykły iloraz dwóch liczb podanych obok siebie, nie prognoza i nie moja teza — i tempo z 2002 roku mogło się od tamtej pory zmienić.",
        "W kuchni mamy dokładnie ten sam problem, tylko codziennie.",
        "„Pół kilo” nie znaczy nic. „Duże opakowanie” nie znaczy nic. „Trzy w cenie dwóch” nie znaczy zupełnie nic, dopóki nie wiadomo, ile tego schodzi w tygodniu.",
        "Ruch jest jeden i robi się go w sklepie, przed włożeniem do koszyka. Podziel wielkość opakowania przez to, ile zużywasz tygodniowo, i przeczytaj wynik nie w kilogramach, tylko w tygodniach albo miesiącach.",
        "Promocje działają właśnie na tym. Pokazują cenę za kilogram — nigdy zapas w miesiącach. Trzy w cenie dwóch to przy wielu produktach zapas na półtora roku, za który płacisz dziś i który dziś zajmuje miejsce.",
        "I to jest cała kalkulacja: zamrożone pieniądze i zajęta półka teraz, w zamian za korzyść kiedyś.",
        "Dopowiem, bo to leży blisko: nie chodzi o gotowanie większej porcji na później. To osobna sprawa. Tu chodzi wyłącznie o kupowanie zapasu produktów i o jedno dzielenie przed kasą.",
        "Uczciwie o drugiej stronie: to samo dzielenie równie wyraźnie pokazuje, kiedy zapas ma sens. Przy czymś, co schodzi co tydzień, największe opakowanie to zapas na dwa miesiące — i decyzja jest oczywista w drugą stronę. Dzielenie nie jest po to, żeby kupować mniej. Jest po to, żeby wiedzieć, co się kupuje.",
        "I uczciwie o sprzęcie, bo dokładnie ten sam ruch bywa używany przeciwko klientowi. Cenę urządzenia też da się podzielić i handlowcy to robią, żeby wyszło „kilka złotych dziennie”. Tyle że uczciwe dzielenie wymaga uczciwego mianownika: liczby dni, w których naprawdę będziesz gotować, a nie tych, w których chciałabyś. Jeśli ten mianownik jest mały, wynik wychodzi na niekorzyść urządzenia — i to jest prawidłowa odpowiedź, a nie błąd w rachunku.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Stroniu Śląskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile razy w tygodniu u Was się gotuje. Nie ile powinno — ile się gotuje. Na tym opieram wszystko, co mówię o cenie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Stroniu Śląskim"),
    sekcjaRaty("w Stroniu Śląskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Stronia Śląskiego",
      paragraphs: [
        "Stronie Śląskie leży w powiecie kłodzkim i jest najmniejszym powierzchniowo miastem, o jakim pisałam na tych stronach: 4 956 mieszkańców (GUS, 31.12.2024) na dwóch i czterech dziesiątych kilometra kwadratowego. To daje dwa tysiące osiemdziesiąt dwie osoby na kilometr — podaję tę gęstość razem z powierzchnią, bo sama wygląda jak pomyłka. Cała gmina miejsko-wiejska ma 6 721 osób na stu czterdziestu sześciu kilometrach kwadratowych, czyli jest od miasta sześćdziesiąt razy większa, a mieszka w nim mimo to trzy czwarte jej ludności. Wykaz GUS wymienia w gminie czternaście wsi. Miasto leży między pięciuset a pięciuset dwudziestoma metrami nad poziomem morza. Pierwsza wzmianka o Stroniu pochodzi z 1346 roku, a prawa miejskie nadano dopiero w 1967 — to najmłodsze miasto w tym cyklu. Wzmianka o Strachocinie, dziś wsi w tej gminie, jest o osiemdziesiąt dwa lata starsza. Złoże marmuru na górze Krzyżnik przy Stroniu Śląskim-Wsi tworzą dwa pasma o długości około tysiąca dwustu metrów; zasoby przekraczają sześć i pół miliona ton przy rocznym wydobyciu około siedmiu tysięcy ton według stanu na koniec 2002 roku, a nadkład gruntowy sięga dwudziestu metrów. Wydobycie odmiany zielonej zakończono w latach siedemdziesiątych, a ostatnie bloki zużyto w latach 1996–97 przy odbudowie Teatru Narodowego w Warszawie — kamień przeżył własną kopalnię o ćwierć wieku. Trafił stąd także do gmachu Sejmu, Filharmonii Narodowej, Teatru Wielkiego i przejść podziemnych Dworca Centralnego. Nazwa „Biała Marianna” obejmuje przy tym kilka odmian barwnych, z których większość biała nie jest. Jaskinię Niedźwiedzią w Kletnie odkryto 14 października 1966 roku podczas eksploatacji marmuru; znana długość jej korytarzy rosła od dwustu metrów pod koniec 1966 roku przez trzysta pięćdziesiąt w grudniu 1967 i ponad osiemset w grudniu 1971 do ponad dwóch i pół tysiąca w dniach 26–29 stycznia 1972. Dzisiejszej długości nie podaję, bo źródła podają sprzeczne wartości. Śnieżnik ma tysiąc czterysta dwadzieścia pięć metrów, a wody z jego masywu spływają do trzech mórz: Czarnego, Bałtyckiego i Północnego. Stacja kolejowa leży na czterystu osiemdziesięciu dwóch metrach, na końcu linii numer 322 z Kłodzka Nowego, otwartej 14 listopada 1897 roku. Do Kłodzka jest stąd trzydzieści jeden kilometrów, drogą przez Lądek-Zdrój.",
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

  districtsHeading: "Do których części Stronia Śląskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Bielic, Bolesławowa, Goszowa, Janowej Góry, Kamienicy, Kletna, Młynowca, Nowej Morawy, Nowego i Starego Gierałtowa, Rogóżki, Sienny, Starej Morawy i Strachocina. Wszędzie bez dopłaty.",
    "Warto przy umawianiu powiedzieć, czy chodzi o miasto, czy o Stronie Śląskie-Wieś — to osobna miejscowość w tej samej gminie i mylą się regularnie.",
  ],
  districts: [],

  nearbyHeading: "Poza Stronie Śląskie też przyjadę",
  nearbyParagraphs: [
    "Do Kłodzka jest stąd trzydzieści jeden kilometrów, drogą przez Lądek-Zdrój. Dojeżdżam też do Bystrzycy Kłodzkiej, Międzylesia i Złotego Stoku — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Lądek-Zdrój", "Kłodzko", "Bystrzyca Kłodzka", "Międzylesie", "Złoty Stok"],

  about: blokOMnie("do Stronia Śląskiego", "w Stroniu Śląskim i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Stronia Śląskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie, łącznie z Kletnem, Bielicami i Sienną. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: pierwszy człon jest rodzaju nijakiego i odmienia się jak „zdanie” — mówi się „do Stronia Śląskiego” i „w Stroniu Śląskim”, a nie „do Stronie Śląskiego”. I uwaga na mylące nazwy: Stronie Śląskie-Wieś to osobna miejscowość w tej samej gminie, a Stronia to wieś pod Bierutowem, zupełnie gdzie indziej na Dolnym Śląsku.",
    },
    ...faqWspolne("w Stroniu Śląskim"),
    {
      question: "Jak sprawdzić, czy opłaca się kupić większe opakowanie?",
      answer:
        "Jednym dzieleniem przed kasą. W opisie złoża marmuru przy Stroniu Śląskim-Wsi stoją obok siebie zasoby — ponad sześć i pół miliona ton — i roczne wydobycie, około siedmiu tysięcy ton. Osobno żadna z tych liczb nic nie mówi; podzielone dają dziewięćset dwadzieścia osiem lat. W sklepie zrób to samo: podziel wielkość opakowania przez tygodniowe zużycie i przeczytaj wynik w miesiącach. „Trzy w cenie dwóch” bywa zapasem na półtora roku. Czasem dzielenie wychodzi w drugą stronę i wtedy duże opakowanie jest oczywiste — o to właśnie chodzi.",
    },
    {
      question: "Czy da się policzyć, czy Thermomix mi się opłaci?",
      answer:
        "Da się, ale trzeba pilnować mianownika. Dzielenie ceny przez liczbę dni to standardowa sztuczka sprzedażowa — wychodzi „kilka złotych dziennie” i brzmi niewinnie. Uczciwa wersja wymaga wpisania tam liczby dni, w których naprawdę gotujecie, a nie tych, w których chcielibyście gotować. Jeśli ta liczba jest mała, wynik wypada na niekorzyść urządzenia i tak to wtedy powiem. Dlatego przy umawianiu pytam, ile razy w tygodniu u Was się gotuje.",
    },
  ],

  geo: { lat: 50.2956, lng: 16.8775 },
};
