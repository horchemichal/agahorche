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
 * NOWOGRODZIEC — powiat bolesławiecki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 077 mieszkańców (GUS 31.12.2024), 16,1 km²,
 *   gęstość 253,2 os./km² [ZW — DOMYKA SIĘ DOKŁADNIE:
 *   4 077 / 16,1 = 253,2]. PODAJĘ.
 * CAŁA GMINA: 14 591 osób, 176,6 km², gęstość ok. 83.
 *   ⚠ 14 591 / 176,6 = 82,6, serwis podaje 83 — MIEŚCI
 *   SIĘ W ZAOKRĄGLENIU. ⚠⚠ TO RZADKI PRZYPADEK: gęstość
 *   gminy miejsko-wiejskiej, która się domyka. PODAJĘ,
 *   ale ZAOKRĄGLONĄ SŁOWNIE („około osiemdziesięciu
 *   trzech").
 *   ⚠⚠⚠ LICZBY WSI NIE PODAJĘ JAKO PEWNEJ: BIP urzędu
 *   podaje 12, inna podstrona tego samego urzędu 13,
 *   serwis statystyczny wymienia 13 nazw. PISZĘ
 *   „KILKANAŚCIE WSI".
 *   ⚠⚠ „SPIS WŁASNEJ GMINY NIE ZGADZA SIĘ SAM ZE SOBĄ"
 *   JAKO KĄT — NIE UŻYWAM: w tej samej fali Olszyna
 *   ma kąt o rozbieżności dwóch spisów. PODAJĘ JAKO
 *   POWÓD, DLA KTÓREGO NIE PODAJĘ LICZBY.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ WYSOKOŚĆ: miasto 180 m n.p.m., teren gminy
 *   200–250 m n.p.m. ⚠⚠ MIASTO LEŻY NIŻEJ NIŻ PODANY
 *   PRZEDZIAŁ DLA GMINY. Podaję oba, z jawnym
 *   zaznaczeniem — BEZ MORAŁU (ociera się o „średnia
 *   kontra maksimum", Węgorzyno).
 * ⚠ GEO: 51,1974 / 15,398.
 *
 * ⚠⚠⚠ ODMIANA — WYMIANA DZ → DŹ:
 *   D. do NOWOGRODŹCA · Ms. w NOWOGRODŹCU ·
 *   N. Nowogrodźcem · B. Nowogrodziec.
 *   ⚠⚠⚠ BŁĘDY: „do Nowogrodzca", „w Nowogrodzcu"
 *   (bez zmiękczenia) — bardzo częste.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: NOWOGRODZIECKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — NOWOGARD (zachodniopomorskie) — MA JUŻ STRONĘ.
 *   — NOWOGRÓD (podlaskie) — MA JUŻ STRONĘ.
 *     ⚠⚠ Wyszukiwarki mieszają oba: zapytanie o historię
 *     Nowogrodźca zwraca stronę urzędu w Nowogrodzie.
 *   — NOWOGRÓD BOBRZAŃSKI (lubuskie).
 *   — ⚠ NOWOGRODZIEC-ZEBRZYDOWA — nazwa stacji kolejowej,
 *     myląca: Zebrzydowa to wieś w tej gminie.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: 1233 r., nadał HENRYK BRODATY
 *     [SP — jedno mocne źródło; PODAJĘ Z ZASTRZEŻENIEM].
 *   — ⚠⚠⚠ PIERWSZEJ WZMIANKI NIE PODAJĘ — [NP], nie
 *     udało się oddzielić jej od daty lokacji. Serwis
 *     urzędu był niedostępny.
 *   — ⚠⚠ KLASZTORU MAGDALENEK NIE OPISUJĘ: wyznaniowe,
 *     a dat i tak nie ustalono.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — STAŻ KONTRA ROZMIAR:
 *   — NOWOGRODZIEC: prawa miejskie 1233 r., 4 077
 *     mieszkańców (GUS 31.12.2024),
 *   — OLSZYNA (powiat lubański, MA WŁASNĄ STRONĘ W TYM
 *     CYKLU): prawa miejskie 1 stycznia 2005 r., 4 280
 *     mieszkańców (GUS 31.12.2024).
 *   ⚠⚠⚠ RÓŻNICA STAŻU: 772 LATA. RÓŻNICA WIELKOŚCI:
 *   203 OSOBY — NA KORZYŚĆ MŁODSZEGO.
 *   To jest cały kąt.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 2005−1233 = 772;
 *   4 280−4 077 = 203.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE STARSZEŃSTWO SZKODZI ani że
 *   Olszyna „wyprzedziła" Nowogrodziec. Twierdzę
 *   WYŁĄCZNIE, że jedno nie przewiduje drugiego.
 *   ⚠⚠ OBIE LICZBY LUDNOŚCI POCHODZĄ Z TEGO SAMEGO
 *   ŹRÓDŁA I TEJ SAMEJ DATY — to warunek uczciwości
 *   tego zestawienia. MÓWIĘ TO W TEKŚCIE.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — WSIE WIĘKSZE OD MIASTA: miasto ma 16,1 km², czyli
 *   ok. 1 610 ha. Gościszów ponad 3 000 ha, Wykroty
 *   2 300 ha, Czerna ponad 2 100 ha.
 *   ⚠⚠ „NAJWIĘKSZA CZĘŚĆ NIE JEST TĄ, OD KTÓREJ NAZWA"
 *   JAKO KĄT — NIE UŻYWAM: ociera się o „jedna nazwa
 *   obejmująca kilka miejsc" (Szczytna). PODAJĘ JAKO
 *   FAKTY.
 * — LUDNOŚĆ WSI: Wykroty ponad 1 700, Zebrzydowa ponad
 *   1 500, Gościszów ponad 1 400.
 * — MIASTO TO 27,9 % LUDNOŚCI GMINY; poza miastem
 *   mieszka 10 514 osób.
 *   ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM — figura wypadła już
 *   w Pieńsku, Głuszycy, Lubawce i Bierutowie.
 * — MURY OBRONNE: początek XIV w., z ciosów piaskowca,
 *   wysokie do 5 m, dziewięć półkolistych baszt, dwie
 *   bramy (Dolna od wschodu, Górna od zachodu);
 *   ok. 1500 r. odnowione i rozbudowane; w XIX w.
 *   rozebrano obie bramy; do dziś zostały relikty
 *   czterech baszt.
 *   ⚠⚠⚠ „NAJSZYBCIEJ ZNIKA TO, CZEGO JEST PO JEDNYM" —
 *   kąt ZAJĘTY (Lwówek Śląski). PODAJĘ SUCHE LICZBY,
 *   BEZ MORAŁU I BEZ ZESTAWIANIA PROCENTÓW.
 * — GMINA zajmuje ponad 13,5 % powierzchni powiatu
 *   bolesławieckiego.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW. Ustalono tylko sąsiedztwa gmin.
 *
 * KĄT: STAŻ NIE PRZEKŁADA SIĘ NA ROZMIAR
 * — o tym, że to, jak długo coś robisz, nie przewiduje,
 * jak daleko zaszłaś. Kąt od dwóch dolnośląskich miast:
 * Nowogrodziec ma prawa miejskie od 1233 roku, Olszyna
 * od 2005 — a mieszkańców ma więcej Olszyna.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Nowogrodziec ma prawa miejskie od 1233 r.,
 *   a Olszyna w sąsiednim powiecie — od 1 stycznia
 *   2005 r.; różnica siedemset siedemdziesiąt dwa lata,
 * — ŻE MIESZKAŃCÓW MA WIĘCEJ OLSZYNA: 4 280 wobec 4 077,
 *   przy czym obie liczby pochodzą z tego samego źródła
 *   i tej samej daty. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NIE TWIERDZĘ, ŻE STARSZEŃSTWO SZKODZI. Mówię
 *   tylko, że jedno nie przewiduje drugiego,
 * — ⚠⚠ ŻE W KUCHNI MIERZYMY SIĘ WŁAŚNIE STAŻEM:
 *   „gotuję od trzydziestu lat", „nigdy nie umiałam
 *   gotować". Obie te miary są bezużyteczne,
 * — ⚠⚠ ŻE TYM, CO REALNIE ODRÓŻNIA, JEST CZĘSTOTLIWOŚĆ:
 *   ktoś, kto zaczął trzy lata temu i gotuje pięć razy
 *   w tygodniu, ma za sobą więcej powtórzeń niż ktoś
 *   z trzydziestoletnim stażem i obiadem w niedzielę,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: jeśli chcesz w czymś być
 *   lepsza, nie czekaj na lata. Podnieś częstotliwość —
 *   nawet kosztem ambicji dania,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA — I TO JEST WAŻNE: lata
 *   dają coś, czego częstotliwość nie daje. Dają liczbę
 *   RÓŻNYCH sytuacji: nieudanych ciast, nieznanych
 *   składników, gości z dziwnymi wymaganiami. Staż daje
 *   szerokość, częstotliwość daje biegłość. To nie są
 *   rzeczy wymienne,
 * — ⚠ UCZCIWIE O SPRZĘCIE: stąd bierze się złe pytanie
 *   „czy to jest dla początkujących, czy dla
 *   zaawansowanych". MÓWIĘ WPROST, że lepsze pytanie
 *   brzmi „ile razy w tygodniu" — i że doświadczona
 *   osoba gotująca codziennie wyciągnie z urządzenia
 *   więcej niż początkująca gotująca dwa razy
 *   w miesiącu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO OSIEMNASTU LAT MIESZKANIA, TRZECH LAT
 *   ROBOTY — kąt zajęty (Lądek-Zdrój). ⚠⚠⚠ TO NAJBLIŻSZY
 *   OBSZAR I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tamten tekst
 *   mówi, KTÓRA CZĘŚĆ DŁUGIEJ OBECNOŚCI ZOSTAJE; ten
 *   mówi, ŻE DŁUGOŚĆ OBECNOŚCI NICZEGO NIE PRZEWIDUJE.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO RÓŻNICA SIEDZI PO JEDNEJ STRONIE — kąt
 *   zajęty (Olszyna, TA SAMA FALA). Dlatego rozbieżność
 *   „12 czy 13 wsi" nie wchodzi do sekcji kątowej.
 * — ⚠⚠⚠ ZERO NAJSZYBCIEJ ZNIKA TO, CZEGO JEST PO JEDNYM
 *   — kąt zajęty (Lwówek Śląski).
 * — ⚠⚠ ZERO JEDNEJ NAZWY OBEJMUJĄCEJ KILKA MIEJSC —
 *   kąt zajęty (Szczytna).
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno).
 * — ⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna).
 * — ⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNEGO WARTOŚCIOWANIA LUDZI: nie piszę, że
 *   ktoś gotuje „lepiej" albo „gorzej" od kogoś innego.
 *   Mówię WYŁĄCZNIE o liczbie powtórzeń i o tym,
 *   co dają. TO JEST TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO (klasztor magdalenek).
 * — ⚠⚠ ZERO OBLĘŻEŃ I DZIAŁAŃ ZBROJNYCH przy murach.
 * — ⚠⚠ ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU.
 * — ⚠ ZERO BEZROBOCIA I DEMOGRAFII WSPÓŁCZESNEJ.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby wsi jako pewnej.
 * — NIE PODAJĘ daty pierwszej wzmianki.
 * — NIE TWIERDZĘ, że starszeństwo praw miejskich
 *   czemukolwiek szkodzi.
 * — NIE ZESTAWIAM liczby zachowanych baszt z liczbą
 *   pierwotną w procentach.
 * — NIE OPISUJĘ klasztoru.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nowogrodziec leży w powiecie bolesławieckim; miasto
 *   liczy 4 077 mieszkańców (GUS, 31.12.2024) na 16,1 km²,
 *   czyli 253,2 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 14 591 osób na 176,6 km²,
 *   czyli około 83 osoby na kilometr; do gminy należy
 *   kilkanaście wsi, a zajmuje ona ponad 13,5 %
 *   powierzchni powiatu,
 * — największe wsie to Wykroty (ponad 1 700 mieszkańców),
 *   Zebrzydowa (ponad 1 500) i Gościszów (ponad 1 400);
 *   Gościszów ma ponad 3 000 ha, Wykroty 2 300 ha,
 *   a Czerna ponad 2 100 ha, podczas gdy miasto —
 *   około 1 610 ha,
 * — prawa miejskie nadał w 1233 r. Henryk Brodaty,
 * — mury obronne z początku XIV w., z ciosów piaskowca
 *   i wysokie do 5 m, miały dziewięć półkolistych baszt
 *   i dwie bramy; około 1500 r. je odnowiono,
 *   w XIX w. rozebrano obie bramy, a do dziś zachowały
 *   się relikty czterech baszt,
 * — miasto leży na 180 m n.p.m., a teren gminy
 *   na 200–250 m n.p.m.
 */
export const NOWOGRODZIEC: CityContent = {
  slug: "nowogrodziec",
  h1: "Thermomix Nowogrodziec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowogrodziec — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Nowogrodźcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowogrodziec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowogrodźcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowogrodźca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Nowogrodziec"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Siedemset siedemdziesiąt dwa lata przewagi. I dwieście osób mniej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowogrodźcu – jak wygląda prezentacja?",
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
      id: "staz-a-rozmiar",
      heading: "Staż nie przekłada się na rozmiar",
      paragraphs: [
        "Nowogrodziec ma prawa miejskie od 1233 roku. Nadał je Henryk Brodaty.",
        "Olszyna, miasto w sąsiednim powiecie, ma je od 1 stycznia 2005 roku. Różnica: siedemset siedemdziesiąt dwa lata.",
        "A mieszkańców ma więcej Olszyna. Cztery tysiące dwieście osiemdziesiąt wobec czterech tysięcy siedemdziesięciu siedmiu — obie liczby z tego samego źródła i z tej samej daty, bo inaczej takie zestawienie nie miałoby sensu.",
        "Nie twierdzę, że starszeństwo w czymkolwiek przeszkadza. Twierdzę tylko, że jedno nie przewiduje drugiego.",
        "W kuchni mierzymy się właśnie stażem, i to obie strony.",
        "„Gotuję od trzydziestu lat.” „Ja nigdy nie umiałam gotować.” Pierwsze brzmi jak kwalifikacja, drugie jak wyrok. Obie miary są mniej więcej tak samo bezużyteczne.",
        "Tym, co realnie odróżnia, jest częstotliwość. Ktoś, kto zaczął trzy lata temu i gotuje pięć razy w tygodniu, ma za sobą więcej powtórzeń niż ktoś z trzydziestoletnim stażem i obiadem w niedzielę. Powtórzenia to jedyna waluta, która się tu liczy.",
        "Ruch jest jeden i jest nieprzyjemnie prosty: jeśli chcesz w czymś być pewniejsza, nie czekaj na lata. Podnieś częstotliwość — nawet kosztem ambicji dania. Cztery proste obiady w tygodniu robią więcej niż jeden skomplikowany raz na miesiąc.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, która część długiej obecności gdzieś zostaje. To osobna sprawa. Tu chodzi o coś prostszego — o to, że sama długość niczego nie przewiduje.",
        "Uczciwie o drugiej stronie, i to jest ważniejsze niż cała reszta: lata dają coś, czego częstotliwość nie da. Dają liczbę różnych sytuacji. Nieudane ciasta, nieznane składniki, goście z wymaganiami, awarie w najgorszym momencie. Trzydzieści lat to trzydzieści okazji, żeby zobaczyć coś po raz pierwszy. Staż daje szerokość, częstotliwość daje biegłość, i nie są wymienne.",
        "I uczciwie o sprzęcie. Stąd bierze się pytanie, które słyszę najczęściej i które uważam za źle postawione: „czy to jest dla początkujących, czy dla zaawansowanych”. Lepsze brzmi: ile razy w tygodniu. Osoba z długim stażem gotująca codziennie wyciągnie z tego urządzenia więcej niż początkująca gotująca dwa razy w miesiącu — i odwrotnie, żaden staż nie sprawi, że przyda się komuś, kto nie gotuje.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowogrodźcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile razy w tygodniu u Was się gotuje. To jedyna liczba, która naprawdę zmienia moją odpowiedź na pytanie o cenę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowogrodźcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Nowogrodźca",
      paragraphs: [
        "Nowogrodziec leży w powiecie bolesławieckim. Samo miasto liczy 4 077 mieszkańców (GUS, 31.12.2024) na szesnastu kilometrach kwadratowych, czyli dwieście pięćdziesiąt trzy osoby na kilometr, a cała gmina miejsko-wiejska 14 591 osób na stu siedemdziesięciu sześciu — około osiemdziesięciu trzech osób na kilometr. Liczby wsi nie podaję jako pewnej, bo dwie podstrony tego samego urzędu wymieniają dwanaście i trzynaście; piszę więc „kilkanaście”. Gmina zajmuje ponad trzynaście i pół procent powierzchni powiatu, a w samym mieście mieszka niecałe dwadzieścia osiem procent jej ludności. Największe wsie to Wykroty z ponad tysiącem siedmiuset mieszkańcami, Zebrzydowa z ponad tysiącem pięciuset i Gościszów z ponad tysiącem czterystu. Powierzchniowo jest jeszcze ciekawiej: Gościszów ma ponad trzy tysiące hektarów, Wykroty dwa tysiące trzysta, a Czerna ponad dwa tysiące sto — podczas gdy miasto około tysiąca sześciuset dziesięciu. Prawa miejskie nadał w 1233 roku Henryk Brodaty; daty pierwszej wzmianki nie podaję, bo nie udało się jej oddzielić od daty lokacji. Mury obronne z początku czternastego wieku, z ciosów piaskowca i wysokie do pięciu metrów, miały dziewięć półkolistych baszt i dwie bramy — Dolną od wschodu i Górną od zachodu. Około 1500 roku je odnowiono i rozbudowano, w dziewiętnastym wieku rozebrano obie bramy, a do dziś zachowały się relikty czterech baszt. Miasto leży na stu osiemdziesięciu metrach nad poziomem morza, choć dla terenu gminy podaje się przedział od dwustu do dwustu pięćdziesięciu — czyli miasto leży niżej niż przedział opisujący gminę, w której się znajduje.",
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

  districtsHeading: "Do których części Nowogrodźca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Wykrot, Zebrzydowej, Gościszowa, Czernej, Gierałtowa, Godzieszowa, Nowej Wsi, Parzyc, Milikowa, Zabłocia, Bieńca, Kierżna i Zagajnika. Wszędzie bez dopłaty.",
    "Gmina ma sto siedemdziesiąt sześć kilometrów kwadratowych i kilka wsi jest powierzchniowo większych od samego miasta, więc przy umawianiu warto podać nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowogrodziec też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Bolesławca, Lubania, Gryfowa Śląskiego, Węglińca i Pieńska — wszędzie bezpłatnie, tak samo jak w samym Nowogrodźcu.",
  ],
  nearbyTowns: ["Bolesławiec", "Lubań", "Gryfów Śląski", "Węgliniec", "Pieńsk"],

  about: blokOMnie("do Nowogrodźca", "w Nowogrodźcu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowogrodźca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie, łącznie z Wykrotami, Zebrzydową i Gościszowem. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: w przypadkach zależnych pojawia się zmiękczenie — mówi się „do Nowogrodźca” i „w Nowogrodźcu”, a nie „do Nowogrodzca”. I uwaga na podobne nazwy: Nowogard leży w zachodniopomorskiem, Nowogród w podlaskiem, a Nowogród Bobrzański w lubuskiem. Wyszukiwarki mylą je regularnie.",
    },
    ...faqWspolne("w Nowogrodźcu"),
    {
      question: "Gotuję od lat i nadal czuję się niepewnie. Czy to normalne?",
      answer:
        "Całkiem normalne, bo staż nie jest tą miarą, o której myślimy. Nowogrodziec ma prawa miejskie od 1233 roku, Olszyna w sąsiednim powiecie od 2005 — siedemset siedemdziesiąt dwa lata różnicy — a mieszkańców ma więcej Olszyna. Długość niczego nie przewiduje. W kuchni liczy się częstotliwość: cztery proste obiady w tygodniu dają więcej powtórzeń niż jeden ambitny raz na miesiąc. Zastrzeżenie, i ważne: lata dają coś innego — liczbę różnych sytuacji, które się już widziało. Staż daje szerokość, częstotliwość daje biegłość.",
    },
    {
      question: "Czy Thermomix jest dla początkujących, czy dla zaawansowanych?",
      answer:
        "Uważam, że to źle postawione pytanie, i wolę powiedzieć to wprost niż odpowiedzieć „dla obu”. Lepsze pytanie brzmi: ile razy w tygodniu u Was się gotuje. Osoba z długim stażem gotująca codziennie wyciągnie z tego urządzenia więcej niż początkująca gotująca dwa razy w miesiącu — i żaden poziom umiejętności nie sprawi, że przyda się komuś, kto po prostu nie gotuje. Dlatego przy umawianiu pytam o częstotliwość, a nie o doświadczenie.",
    },
  ],

  geo: { lat: 51.1974, lng: 15.398 },
};
