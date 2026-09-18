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
 * ZAGÓRÓW — powiat słupecki, woj. wielkopolskie.
 * ⚠⚠⚠ NIE MYLIĆ Z ZAGÓRZEM (powiat sanocki,
 *   podkarpackie) — inna odmiana: „do Zagórza,
 *   w Zagórzu", przymiotnik „zagórski".
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ ZAGÓRÓW NIE MA.
 * MIASTO: 2 721 mieszkańców (GUS 31.12.2024).
 *   ⚠⚠⚠ POWIERZCHNIĘ PODAJĘ ZA GMINĄ: 3,44 km².
 *   Serwis statystyczny wyświetla 3,4 km²
 *   (zaokrąglenie) i gęstość 791,0 os./km².
 *   ⚠⚠ PRZY 3,4 km² ILORAZ DAJE 800,3 — ROZBIEŻNOŚĆ
 *   9,3. PRZY 3,44 km² ILORAZ DAJE DOKŁADNIE 791,0 —
 *   ROZBIEŻNOŚĆ 0,0. PODAJĘ 3,44 km² I GĘSTOŚĆ RAZEM.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠⚠⚠ SERWIS GMINY PODAJE 2 985 MIESZKAŃCÓW MIASTA
 *   BEZ DATY. NIE UŻYWAM — trzymam się GUS 31.12.2024.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 8 438 osób, 159,7 km², gęstość
 *   53 os./km².
 *   ⚠ [ZW — 8 438 / 159,7 = 52,8. Różnica 0,2.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 29 SOŁECTW i 48 MIEJSCOWOŚCI (GUS
 *   Vademecum).
 *   ⚠⚠⚠ TERYT PODAJE 52 MIEJSCOWOŚCI. RÓŻNICY NIE
 *   UŻYWAM — kąt „cztery rejestry, cztery liczby"
 *   JEST ZAJĘTY (Kleczew). PODAJĘ TYLKO 48.
 *   ⚠⚠⚠ OSIEDLE ZAGÓRÓW jest osobną jednostką
 *   pomocniczą miasta, NIE SOŁECTWEM — ⚠⚠⚠ FAKTU
 *   TEGO NIE UŻYWAM, bo jest niemal identyczny
 *   z dopełnieniem kąta w LWÓWKU („jednostek
 *   pomocniczych jest dwadzieścia, jedna nie jest
 *   sołectwem"). RYZYKO POWTÓRKI. POMIJAM.
 *   ⚠⚠ OBRĘBÓW EWIDENCYJNYCH (38) NIE PODAJĘ —
 *   z tego samego powodu co wyżej (Lwówek).
 *   MIEJSCOWOŚCI (część): Trąbczyn, Wrąbczyn, Łukom,
 *   Oleśnica, Łazińsk Pierwszy, Łazińsk Drugi,
 *   Szetlew, Szetlewek, Michalinów Oleśnicki,
 *   Michalinów Trąbczyński, Łazy, Nowa Wieś.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * POŁOŻENIE: miasto leży nad Wartą, układ
 *   urbanistyczny wydłużony, równoległy do rzeki.
 *   PODAJĘ.
 * ⚠ GEO: 52,1683 / 17,8956 (miasto i gmina identyczne).
 *
 * ⚠⚠ ODMIANA — RODZAJ MĘSKI:
 *   D. do ZAGÓROWA · B. Zagórów · Ms. w ZAGÓROWIE ·
 *   N. Zagórowem · C. Zagórowowi.
 *   ⚠ POTWIERDZENIA: „Układ urbanistyczny Zagórowa",
 *   „Rys historyczny miasta Zagórowa",
 *   „informacje o Zagórowie".
 *   ⚠⚠⚠ BŁĘDY: „w Zagórowiu", „do Zagórowu".
 *   ⚠⚠⚠ PRZYMIOTNIKA „ZAGÓROWSKI" NIE UŻYWAM —
 *   forma oczekiwana, ale BRAK CYTATU URZĘDOWEGO [NP].
 *   UŻYWAM FORM OPISOWYCH.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 23 WRZEŚNIA 1240 R. PODAJĘ.
 *     ⚠⚠⚠ WYSTAWCÓW DOKUMENTU (KSIĄŻĘ, ARCYBISKUP)
 *     NIE WYMIENIAM.
 *   — ZEZWOLENIE NA LOKACJĘ: 1407 R.
 *     ⚠⚠⚠ ODBIORCY ZEZWOLENIA (OPAT) ANI KRÓLA
 *     NIE WYMIENIAM — ZERO WĄTKU WYZNANIOWEGO,
 *     ZERO POSTACI POLITYCZNYCH.
 *   — PRZYWILEJ LOKACYJNY: 3 WRZEŚNIA 1445 R.
 *     ODSTĘP: 38 LAT. TO RDZEŃ KĄTA.
 *   ⚠⚠⚠ TREŚCI PRZYWILEJU NIE CYTUJĘ — zawiera
 *     uprawnienie dotyczące alkoholu. ZERO ALKOHOLU.
 *   ⚠⚠⚠ UTRATY PRAW MIEJSKICH W 1870 R. NIE
 *     WSPOMINAM — wątek zaborczy, a dodatkowo
 *     sąsiaduje z zajętą figurą „przerwa nie kasuje
 *     początku".
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠ LESISTOŚCI NIE USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ZGODA WCZEŚNIEJ, DOKUMENT
 *   TRZYDZIEŚCI OSIEM LAT PÓŹNIEJ:
 *   Królewskie zezwolenie na założenie miasta zapadło
 *   w 1407 r. Przywilej lokacyjny — dokument, od
 *   którego miasto faktycznie zaczyna działać —
 *   wystawiono dopiero 3 WRZEŚNIA 1445 R.
 *   MIĘDZY JEDNYM A DRUGIM MINĘŁO 38 LAT.
 *   ⚠⚠ CO SIĘ DZIAŁO W TYM CZASIE — NIE WIEM
 *   I NIE ZGADUJĘ. To jest część kąta, nie luka:
 *   zgoda była, a wykonania przez prawie cztery
 *   dekady nie ma w źródłach.
 *
 * KĄT: ZGODA TO JESZCZE NIE WYKONANIE — o tym, że
 * między „ustaliliśmy, że tak zrobimy" a „zrobione"
 * potrafi minąć bardzo dużo czasu, jeśli nikt nie
 * dopisał terminu i osoby. Kąt z Zagórowa: 1407 i 1445.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zezwolenie na lokację jest z 1407 r., a przywilej
 *   lokacyjny z 3 września 1445 r. — trzydzieści osiem
 *   lat później. TO JEST RDZEŃ,
 * — że nie wiadomo, co działo się w tym czasie,
 *   i że tego nie zmyślam,
 * — ⚠⚠ ŻE W DOMU DZIAŁA TO SAMO: „trzeba zrobić coś
 *   z tym obiadem w tygodniu" to zgoda, a nie plan —
 *   wszyscy się zgadzają i nic się nie dzieje,
 * — ⚠⚠ ŻE ZGODA JEST ŁATWA, BO NIKOGO NIC NIE KOSZTUJE,
 *   a wykonanie kosztuje czas konkretnej osoby
 *   w konkretny dzień,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: do każdej rodzinnej zgody
 *   dopisać dwie rzeczy — kto i kiedy. Bez tego zgoda
 *   jest tylko dobrym samopoczuciem,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem odstęp jest
 *   potrzebny i nic złego się nie dzieje. Zgoda
 *   zapadła, warunki jeszcze nie dojrzały — wtedy
 *   lepiej nazwać to odłożeniem z terminem powrotu
 *   niż udawać, że sprawa jest w toku,
 * — ⚠ UCZCIWIE O SPRZĘCIE: zakup urządzenia też bywa
 *   taką zgodą bez terminu. „Kiedyś to kupimy"
 *   potrafi trwać latami i nie jest ani decyzją na
 *   tak, ani na nie — a obie są lepsze.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SZEŚĆ LAT STARAŃ O JEDNĄ ZMIANĘ — kąt
 *   zajęty (Nekla). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam przez cały czas
 *   TRWAŁY UDOKUMENTOWANE STARANIA; tu o tych 38 latach
 *   NIE WIADOMO NIC. JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ROCZNICĘ LICZONO OD PÓŹNIEJSZEJ DATY —
 *   kąt zajęty (Odolanów). Tam chodziło o LICZENIE
 *   ROCZNICY; tu nikt rocznicy nie liczy.
 *   ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO DOKUMENT ZOSTAŁ, RZECZY NIE — kąt zajęty
 *   (Golina).
 * — ⚠⚠ ZERO DATA PRZYJĘTA, NIE ZNALEZIONA — kąt zajęty
 *   (Krobia).
 * — ⚠⚠ ZERO AKT DOTYCZY SĄSIADA — kąt zajęty (Czempiń).
 * — ⚠⚠ ZERO NADANE DWA RAZY — kąt zajęty (Wyrzysk).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   NAMAWIANIA NA REMONT.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW I POWODZI ·
 *   ZERO BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH · ZERO WĄTKU ZABORCZEGO.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni 3,4 km² — podaję 3,44 km².
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ liczby 2 985 ze strony gminy.
 * — NIE PODAJĘ liczby miejscowości z TERYT.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE PISZĘ, co działo się w latach 1407–1445.
 * — NIE UŻYWAM przymiotnika „zagórowski".
 * — NIE PODAJĘ największej wsi, lesistości ani
 *   wysokości n.p.m.
 * — NIE WYMIENIAM osób z dokumentów.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Zagórów leży w powiecie słupeckim nad Wartą
 *   i liczy 2 721 mieszkańców (GUS, 31.12.2024)
 *   na 3,44 kilometra kwadratowego, czyli 791 osób
 *   na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 8 438 osób
 *   na 159,7 kilometra kwadratowego, czyli 53 osoby
 *   na kilometr kwadratowy,
 * — gmina ma 29 sołectw i 48 miejscowości,
 * — pierwsza wzmianka o Zagórowie pochodzi
 *   z 23 września 1240 r.,
 * — zezwolenie na lokację miasta zapadło w 1407 r.,
 *   a przywilej lokacyjny wystawiono 3 września 1445 r.,
 * — układ urbanistyczny miasta jest wydłużony
 *   i równoległy do Warty,
 * — w gminie leżą m.in. Trąbczyn i Wrąbczyn, Łukom,
 *   Oleśnica, Łazińsk Pierwszy i Łazińsk Drugi,
 *   Szetlew i Szetlewek.
 */
export const ZAGOROW: CityContent = {
  slug: "zagorow",
  h1: "Thermomix Zagórów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zagórów — cena i prezentacja",
  seoDescription:
    "Thermomix w Zagórowie w powiecie słupeckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zagórów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zagórowie nad Wartą. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zagórowa w powiecie słupeckim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu dziewięciu sołectw w gminie.",

  highlights: highlightyStandardowe("Zagórów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zgoda w 1407 roku, dokument w 1445. Trzydzieści osiem lat przerwy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zagórowie – jak wygląda prezentacja?",
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
      id: "zgoda-i-wykonanie",
      heading: "Zgoda to jeszcze nie wykonanie",
      paragraphs: [
        "Zezwolenie na założenie miasta Zagórów zapadło w 1407 roku. Przywilej lokacyjny — czyli dokument, od którego miasto faktycznie zaczyna działać — wystawiono 3 września 1445 roku. Między jednym a drugim minęło trzydzieści osiem lat.",
        "Co działo się w tym czasie, nie wiem. Źródła, do których dotarłam, o tych trzydziestu ośmiu latach milczą, a ja niczego nie dopowiem. I to jest właśnie ciekawa część: zgoda była, a wykonania przez prawie cztery dekady nie widać.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, które sześć lat starało się o jedną zmianę — tam przez cały ten czas coś się działo i zostały tego ślady. Tu jest odwrotnie: między jedną datą a drugą nie ma nic, o czym mogłabym napisać. To inna historia, choć obie są o odstępie. I jeszcze jedno rozróżnienie: pisałam też o mieście, które rocznicę liczyło od późniejszej z dwóch dat — tutaj nikt rocznicy nie liczy, obie daty spokojnie stoją obok siebie.",
        "Piszę o tym, bo w każdym domu są takie ustalenia.",
        "„Trzeba coś zrobić z tym obiadem w tygodniu.” „Powinniśmy gotować raz na dwa dni i mrozić.” „Od września bierzemy się za to na poważnie.” Wszyscy się zgadzają. Nikt nie protestuje. I nic się nie dzieje — czasem przez rok, czasem przez trzy.",
        "Dzieje się tak, bo zgoda nic nie kosztuje. Zgodzić się może każdy, w każdej chwili, przy stole, po pracy, jednym kiwnięciem głowy. Wykonanie kosztuje czas konkretnej osoby w konkretny dzień — i dopóki nie wiadomo, kto i kiedy, nie ma czego wykonać.",
        "Ruch jest jeden i mieści się w dwóch słowach dopisanych do każdej rodzinnej zgody: kto i kiedy. Nie „ugotujemy więcej na zapas”, tylko „w niedzielę po południu robię to ja i robię dwa razy tyle”. Bez tych dwóch słów zgoda jest tylko dobrym samopoczuciem, a nie planem.",
        "Uczciwie o drugiej stronie, bo nie każde odłożenie jest porażką. Czasem zgoda zapada, a warunki naprawdę jeszcze nie dojrzały — jest małe dziecko, jest remont, jest zmiana pracy. Wtedy lepiej nazwać rzecz po imieniu: to nie jest „w toku”, to jest odłożone, i wracamy do tego w konkretnym miesiącu. To uczciwsze niż trzydzieści osiem lat udawania, że sprawa się toczy.",
        "I uczciwie o sprzęcie, bo zakup urządzenia bywa dokładnie taką zgodą bez terminu. „Kiedyś to kupimy” potrafi trwać latami i nie jest ani decyzją na tak, ani na nie — a obie te decyzje są lepsze od zawieszenia. Dlatego po prezentacji zwykle proponuję ustalić datę, do której odpowiecie sobie na to pytanie, nawet jeśli odpowiedź brzmi „nie teraz”.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zagórowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zagórowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Zagórowa",
      paragraphs: [
        "Zagórów leży w powiecie słupeckim nad Wartą i liczy 2 721 mieszkańców (GUS, 31.12.2024) na 3,44 kilometra kwadratowego, czyli siedemset dziewięćdziesiąt jeden osób na kilometr kwadratowy. Podaję powierzchnię za gminą, bo dopiero z nią gęstość się domyka. Układ miasta jest wydłużony i biegnie równolegle do rzeki. Cała gmina miejsko-wiejska to 8 438 osób na 159,7 kilometra kwadratowego, czyli pięćdziesiąt trzy osoby na kilometr, przy dwudziestu dziewięciu sołectwach i czterdziestu ośmiu miejscowościach. Pierwsza wzmianka o Zagórowie pochodzi z 23 września 1240 roku, zezwolenie na lokację miasta zapadło w 1407, a przywilej lokacyjny wystawiono 3 września 1445 roku.",
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

  districtsHeading: "Do których części Zagórowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dziewięciu sołectw w gminie. Nazywają się między innymi: Trąbczyn, Wrąbczyn, Łukom, Oleśnica, Łazińsk Pierwszy, Łazińsk Drugi, Szetlew, Szetlewek, Michalinów Oleśnicki, Michalinów Trąbczyński, Łazy i Nowa Wieś. Wszędzie bez dopłaty.",
    "Dwie uwagi, bo to nazwy z pułapkami. Pierwsza, adresowa i najostrzejsza: w gminie są osobno Trąbczyn i Wrąbczyn — jedna litera różnicy, dwie różne wsie. Podobnie Szetlew i Szetlewek oraz Łazińsk Pierwszy i Drugi, a Michalinów występuje w dwóch wersjach: Oleśnicki i Trąbczyński. Warto podać pełną nazwę. Druga, językowa: nazwa miasta odmienia się „do Zagórowa” i „w Zagórowie”, a nie „w Zagórowiu” — i nie należy jej mylić z Zagórzem, osobnym miastem w województwie podkarpackim, które odmienia się zupełnie inaczej.",
  ],
  districts: [],

  nearbyHeading: "Poza Zagórów też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Słupcy, Pyzdr, Goliny, Kleczewa, Konina i Wrześni — wszędzie bezpłatnie, tak samo jak w samym Zagórowie.",
  ],
  nearbyTowns: ["Słupca", "Pyzdry", "Golina", "Kleczew", "Konin", "Września"],

  about: blokOMnie("do Zagórowa", "w Zagórowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zagórowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dziewięciu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Adresowa: w gminie są osobno Trąbczyn i Wrąbczyn, a także Szetlew i Szetlewek oraz Łazińsk Pierwszy i Drugi — warto podać pełną nazwę wsi. Językowa: mówi się „do Zagórowa” i „w Zagórowie”, a Zagórz w województwie podkarpackim to inne miasto.",
    },
    ...faqWspolne("w Zagórowie"),
    {
      question: "Ciągle ustalamy w domu, że będziemy gotować inaczej, i nic z tego nie wychodzi. Dlaczego?",
      answer:
        "Bo ustalenie i wykonanie to dwie różne rzeczy, a wy macie tylko to pierwsze. Zagórów jest tu dobrym obrazem: zezwolenie na założenie miasta zapadło w 1407 roku, a dokument, od którego miasto naprawdę zaczęło działać, wystawiono dopiero w 1445 — trzydzieści osiem lat później. Zgoda nic nie kosztuje, bo zgodzić się może każdy jednym kiwnięciem głowy. Wykonanie kosztuje czas konkretnej osoby w konkretny dzień. Ruch jest prosty: do każdej rodzinnej zgody dopiszcie kto i kiedy. Nie „ugotujemy więcej na zapas”, tylko „w niedzielę po południu robię to ja i robię dwa razy tyle”. A jeśli teraz naprawdę się nie da, powiedzcie to wprost i ustalcie miesiąc powrotu — to uczciwsze niż udawanie, że sprawa jest w toku.",
    },
    {
      question: "Od dwóch lat zastanawiamy się nad zakupem i nic nie postanowiliśmy. Co z tym zrobić?",
      answer:
        "Postanowić cokolwiek, bo zawieszenie jest gorsze od obu odpowiedzi. „Kiedyś to kupimy” nie jest decyzją: nie daje ani urządzenia, ani spokoju, że temat zamknięty. Dlatego po prezentacji zwykle proponuję ustalić konkretną datę, do której odpowiecie sobie na to pytanie — i uznać „nie teraz, wracamy do tego w marcu” za pełnoprawną odpowiedź. Ze swojej strony nie dzwonię z naciskiem i nie przyspieszam decyzji; po prezentacji nic nie płacicie i do niczego się nie zobowiązujecie.",
    },
  ],

  geo: { lat: 52.1683, lng: 17.8956 },
};
