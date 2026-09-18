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
 * PONIEC — powiat gostyński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ PONIEC NIE MA.
 *   ⚠ PONIEC JEST JEDNYM Z PIĘCIU MIAST POWIATU
 *   GOSTYŃSKIEGO.
 * MIASTO: 2 910 mieszkańców (GUS 31.12.2024),
 *   3,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   836,2 os./km², iloraz z 3,5 km² daje 831,4.
 *   ROZBIEŻNOŚĆ 4,8. Dokładnej powierzchni
 *   NIE USTALONO [NP] (3,48 km² to rekonstrukcja
 *   z gęstości, NIE CYTAT — NIE UŻYWAM).
 *   ⚠⚠⚠ PODAJĘ POWIERZCHNIĘ ALBO GĘSTOŚĆ, NIE OBIE.
 *   WYBIERAM POWIERZCHNIĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 7 428 osób, 132,0 km², gęstość
 *   57 os./km².
 *   ⚠ [ZW — 7 428 / 132,0 = 56,3. Różnica 0,7.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 19 SOŁECTW i 32 MIEJSCOWOŚCI
 *   (GUS Vademecum, zgodnie z TERYT).
 *   ⚠⚠ OBRĘBÓW EWIDENCYJNYCH (16) NIE PODAJĘ —
 *   kąt „samorząd dzieli drobniej niż kataster"
 *   ZAJĘTY (Lwówek).
 *   MIEJSCOWOŚCI (część): Żytowiecko, Rokosowo,
 *   Dzięczyna, Bogdanki, Miechcin, Teodozewo,
 *   Bączylas, Czarkowo.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 51,7634 / 16,8088 (miasto i gmina identyczne).
 *
 * ⚠⚠⚠ ODMIANA — „E" NIE JEST RUCHOME:
 *   D. do PONIECA (⚠⚠⚠ nie „do Pońca") ·
 *   Ms. w PONIECU (⚠⚠⚠ nie „w Pońcu", nie „w Poniecie") ·
 *   N. Poniecem · C. Poniecowi.
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD JEST HIPERPOPRAWNY:
 *   wypuszczanie „e" przez analogię do Chełmiec →
 *   Chełmca, Kobylec → Kobylca. POWSTAJĄ FORMY
 *   „do Pońca", „w Pońcu", „pod Pońcem". WSZYSTKIE
 *   BŁĘDNE. WSPOMINAM OBOWIĄZKOWO.
 *   ⚠ POTWIERDZENIA: „Ratusz w Poniecu",
 *   „w Poniecu ludności", „gminy Poniec".
 *   ⚠ DOPEŁNIACZ „PONIECA" POTWIERDZONY
 *   REFERUJĄCO, nie dosłownym cytatem urzędowym.
 *   UŻYWAM, ALE OSZCZĘDNIE.
 *   PRZYMIOTNIK: PONIECKI — potwierdzony.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ RATUSZ I WAGA — ŹRÓDŁO KĄTA:
 *   — KAMIEŃ WĘGIELNY: 6 WRZEŚNIA 1842 R.
 *   — ODDANIE DO UŻYTKU: 15 PAŹDZIERNIKA 1843 R.
 *   — W SIENI: WAGA MIEJSKA Z 1777 R. Z KAMIENNYMI
 *     ODWAŻNIKAMI. POTWIERDZONA DWOMA ŹRÓDŁAMI.
 *   RÓŻNICA: 66 LAT. TO RDZEŃ KĄTA.
 *   ⚠⚠⚠ ZEGARA NA WIEŻY NIE OPISUJĘ — został
 *     przeniesiony z wieży kościelnej, a to wątek
 *     wyznaniowy. ZERO TEGO.
 *   ⚠⚠⚠ TABLICY NA RATUSZU NIE CYTUJĘ — treść
 *     militarna. ZERO TEGO.
 *   ⚠⚠ NIE TWIERDZĘ, W ILU BUDYNKACH WAGA STAŁA
 *     WCZEŚNIEJ — wiem tylko, że jest starsza
 *     od obecnego ratusza.
 *
 * ⚠⚠ ROKOSOWO — ROZBIEŻNOŚĆ DAT:
 *   Serwis gminy podaje dla pałacu rok 1847;
 *   inne źródło mówi o budowie w latach 1849–1854
 *   i dacie 1850 na fasadzie.
 *   ⚠⚠⚠ NIE WYBIERAM PO CICHU — PODAJĘ ROZBIEŻNOŚĆ
 *   WPROST I MÓWIĘ, ŻE JEJ NIE ROZSTRZYGAM.
 *   ⚠⚠ FIGURY Z TEGO NIE ROBIĘ — to dopowiedzenie,
 *   nie drugi kąt.
 *   ⚠⚠⚠ RODU ROKOSOWSKICH NIE WYMIENIAM — kąt
 *   „nazwisko od miejsca" ZAJĘTY (Miłosław).
 *
 * ⚠⚠⚠ ŻYTOWIECKA NIE OPISUJĘ SZERZEJ — jedyny
 *   udokumentowany obiekt to kościół z lat 1773–1777.
 *   ZERO WĄTKU WYZNANIOWEGO. Dodatkowo rok 1777
 *   zbiega się z rokiem wagi i mógłby wprowadzić
 *   w błąd. WYMIENIAM SAMĄ NAZWĘ WSI.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SPRZĘT STARSZY OD BUDYNKU,
 *   W KTÓRYM STOI:
 *   RATUSZ W PONIECU ODDANO DO UŻYTKU
 *   15 PAŹDZIERNIKA 1843 R. W jego sieni stoi
 *   WAGA MIEJSKA Z 1777 R. z kamiennymi odważnikami.
 *   WAGA JEST OD BUDYNKU STARSZA O 66 LAT — czyli
 *   działała już wtedy, gdy władze miasta urzędowały
 *   gdzie indziej, i przetrwała zmianę siedziby.
 *   NARZĘDZIE OKAZAŁO SIĘ TRWALSZE OD ŚCIAN.
 *
 * KĄT: NARZĘDZIE PRZEŻYWA KUCHNIĘ — o tym, że rzeczy,
 * których używa się codziennie, zostają z nami dłużej
 * niż meble, mieszkania i remonty. Kąt z Ponieca:
 * waga z 1777 r. w ratuszu z 1843 r.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ratusz oddano 15 października 1843 r.,
 *   a stojąca w jego sieni waga miejska pochodzi
 *   z 1777 r. — jest starsza o 66 lat. TO JEST RDZEŃ,
 * — że waga przetrwała zmianę siedziby władz miasta,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: garnek, nóż
 *   i durszlak przeprowadzają się razem z nami, a meble
 *   i blaty zostają w poprzednim mieszkaniu,
 * — ⚠⚠ ŻE Z TEGO WYNIKA PRAKTYCZNY WNIOSEK O PIENIĄDZACH:
 *   opłaca się dobrze kupić to, czego używa się
 *   codziennie, bo to przeżyje kuchnię — a nie to,
 *   co robi wrażenie,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wypisać trzy rzeczy,
 *   po które sięgacie każdego dnia, i to w nie
 *   zainwestować,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie wszystko warto mieć
 *   na lata. Rzecz używana raz w roku spokojnie może
 *   być tania albo pożyczona,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie kosztuje tyle
 *   co mebel, więc pytanie brzmi, do której grupy
 *   trafi — codziennej czy odświętnej. Jeśli
 *   odświętnej, to zły zakup i mówię to wprost.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO INSTYTUCJA MŁODSZA OD SWOICH ŚCIAN —
 *   kąt zajęty. ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam INSTYTUCJA była
 *   młodsza od BUDYNKU; tu PRZEDMIOT jest STARSZY
 *   od budynku. Relacja odwrotna, a porównywana rzecz
 *   inna. JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NAJMŁODSZY PRZY RYNKU — kąt zajęty
 *   (Szamocin). Tam porównywano BUDYNKI MIĘDZY SOBĄ.
 * — ⚠⚠ ZERO CZYNNE, NIE TYLKO ZACHOWANE — kąt zajęty
 *   (Krajenka). ⚠⚠⚠ DLATEGO NIE TWIERDZĘ, ŻE WAGA
 *   DZIAŁA DZIŚ. PISZĘ TYLKO, ŻE STOI.
 * — ⚠⚠ ZERO OCALAŁE DOSTAŁO NAJMNIEJSZĄ FUNKCJĘ —
 *   kąt zajęty (Sieraków).
 * — ⚠⚠ ZERO NAZWISKO OD MIEJSCA — kąt zajęty
 *   (Miłosław).
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
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE PODAJĘ powierzchni 3,48 km² (rekonstrukcja).
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE TWIERDZĘ, że waga dziś działa.
 * — NIE TWIERDZĘ, w ilu budynkach stała wcześniej.
 * — NIE ROZSTRZYGAM daty pałacu w Rokosowie.
 * — NIE OPISUJĘ zegara ani tablicy z ratusza.
 * — NIE PODAJĘ największej wsi ani wysokości n.p.m.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Poniec leży w powiecie gostyńskim, liczy 2 910
 *   mieszkańców (GUS, 31.12.2024) i zajmuje 3,5 km²,
 * — cała gmina miejsko-wiejska to 7 428 osób
 *   na 132 km², czyli 57 osób na kilometr kwadratowy,
 * — gmina ma 19 sołectw i 32 miejscowości,
 * — kamień węgielny pod ratusz położono 6 września
 *   1842 r., a budynek oddano do użytku 15 października
 *   1843 r.,
 * — w sieni ratusza stoi waga miejska z 1777 r.
 *   z kamiennymi odważnikami — o 66 lat starsza
 *   od budynku,
 * — pałac w Rokosowie bywa datowany na 1847 r.,
 *   a bywa na lata 1849–1854, z datą 1850 na fasadzie,
 * — w gminie leżą m.in. Żytowiecko, Rokosowo,
 *   Dzięczyna, Bogdanki, Miechcin, Teodozewo,
 *   Bączylas i Czarkowo.
 */
export const PONIEC: CityContent = {
  slug: "poniec",
  h1: "Thermomix Poniec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Poniec — cena i prezentacja",
  seoDescription:
    "Thermomix w Poniecu w powiecie gostyńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Poniec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Poniecu pod Gostyniem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ponieca w powiecie gostyńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dziewiętnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Poniec"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Waga z 1777 roku w ratuszu z 1843. Sześćdziesiąt sześć lat różnicy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Poniecu – jak wygląda prezentacja?",
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
      id: "narzedzie-trwalsze",
      heading: "Narzędzie bywa trwalsze od ścian",
      paragraphs: [
        "Kamień węgielny pod ratusz w Poniecu położono 6 września 1842 roku, a budynek oddano do użytku 15 października 1843. W jego sieni stoi waga miejska z 1777 roku, z kamiennymi odważnikami.",
        "Waga jest więc starsza od budynku o sześćdziesiąt sześć lat. Ważyła już wtedy, gdy władze miasta urzędowały gdzie indziej, i przetrwała zmianę siedziby. Czy dziś działa, nie sprawdzałam — piszę tylko, że stoi. Ile razy wcześniej się przeprowadzała, też nie wiem.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o instytucji, która jest młodsza od budynku, w którym się mieści. Tutaj relacja jest odwrotna i dotyczy czegoś innego — nie urzędu, tylko przedmiotu, i to przedmiot jest tu stroną starszą.",
        "Piszę o tym, bo dokładnie tak wygląda majątek każdej kuchni, tylko nikt tego tak nie liczy.",
        "Przeprowadzka pokazuje to najlepiej. Zabudowa zostaje. Blat zostaje. Płytki, szafki, zlew — wszystko zostaje. A do pudełka pakuje się garnek, w którym gotuje się od piętnastu lat, nóż, który był prezentem, drewnianą łyżkę i durszlak. Te rzeczy przeżywają dwa mieszkania i jeden remont.",
        "Z tego wynika prosty wniosek o pieniądzach, który zwykle mówimy sobie odwrotnie. Najwięcej wydajemy na to, co widać — fronty, uchwyty, płytę, oświetlenie — a najmniej na to, co trzymamy w ręce codziennie. A to właśnie te drugie rzeczy zostaną z Wami, gdy kuchni już dawno nie będzie.",
        "Ruch jest jeden i zajmuje pięć minut. Wypiszcie trzy rzeczy, po które sięgacie każdego dnia bez wyjątku. U większości ludzi to nóż, jeden garnek i jedna deska. I w te trzy rzeczy warto zainwestować naprawdę, nawet jeśli reszta szuflady jest tania. Bo tych trzech używacie po kilkaset razy w roku, a efektownego półmiska — dwa razy.",
        "Uczciwie o drugiej stronie, bo nie wszystko warto mieć na lata. Rzecz używana raz w roku spokojnie może być tania, może być pożyczona od sąsiadki, a czasem po prostu nie musi jej być. Forma do jednego konkretnego ciasta, obieraczka do jednego warzywa, urządzenie do jednej czynności — to są zakupy, których zwykle się żałuje, niezależnie od ceny.",
        "I uczciwie o sprzęcie, bo Thermomix kosztuje tyle, co mebel, więc pytanie jest dokładnie to samo. Do której grupy u Was trafi: codziennej czy odświętnej? Jeśli codziennej, to wydatek rozkłada się na tysiące użyć i broni się sam. Jeśli odświętnej — to zły zakup i wolę powiedzieć to przed prezentacją, a nie po niej.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Poniecu?",
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
    sekcjaCena("w Poniecu"),
    sekcjaRaty("w Poniecu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Ponieca",
      paragraphs: [
        "Poniec leży w powiecie gostyńskim, liczy 2 910 mieszkańców (GUS, 31.12.2024) i zajmuje trzy i pół kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 7 428 osób na stu trzydziestu dwóch kilometrach kwadratowych, czyli pięćdziesiąt siedem osób na kilometr, przy dziewiętnastu sołectwach i trzydziestu dwóch miejscowościach. Kamień węgielny pod ratusz położono 6 września 1842 roku, a budynek oddano do użytku 15 października 1843; w jego sieni stoi waga miejska z 1777 roku z kamiennymi odważnikami. Pałac w Rokosowie bywa datowany na 1847 rok, a bywa na lata 1849–1854, z datą 1850 na fasadzie — tej rozbieżności nie rozstrzygam.",
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

  districtsHeading: "Do których części Ponieca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziewiętnastu sołectw w gminie. Nazywają się między innymi: Żytowiecko, Rokosowo, Dzięczyna, Bogdanki, Miechcin, Teodozewo, Bączylas i Czarkowo. Wszędzie bez dopłaty.",
    "Jedna uwaga językowa, bo przy tej nazwie błąd jest wyjątkowo częsty i bierze się z nadgorliwości. „E” w Poniecu nie wypada z odmiany: mówi się „do Ponieca” i „w Poniecu”, a nie „do Pońca” ani „w Pońcu” — ta druga forma powstaje przez analogię do nazw typu Chełmiec czy Kobylec, gdzie „e” faktycznie znika. Tutaj zostaje. Nie mówi się też „w Poniecie”.",
  ],
  districts: [],

  nearbyHeading: "Poza Poniec też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Gostynia, Krobi, Rydzyny, Bojanowa, Miejskiej Górki i Leszna — wszędzie bezpłatnie, tak samo jak w samym Poniecu.",
  ],
  nearbyTowns: ["Gostyń", "Krobia", "Rydzyna", "Bojanowo", "Miejska Górka", "Leszno"],

  about: blokOMnie("do Ponieca", "w Poniecu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ponieca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziewiętnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga językowa: „e” w tej nazwie nie wypada z odmiany, więc poprawnie jest „do Ponieca” i „w Poniecu”, a nie „do Pońca” ani „w Pońcu”. Ten błąd bierze się z analogii do nazw typu Chełmiec, gdzie „e” rzeczywiście znika — tutaj zostaje.",
    },
    ...faqWspolne("w Poniecu"),
    {
      question: "Na co w kuchni naprawdę warto wydać pieniądze?",
      answer:
        "Na to, czego używacie codziennie — i to jest zwykle odwrotność tego, co robimy. Poniec jest tu dobrym obrazem: ratusz oddano do użytku w 1843 roku, a w jego sieni stoi waga miejska z 1777 — starsza od budynku o sześćdziesiąt sześć lat. Narzędzie okazało się trwalsze od ścian. W kuchni jest tak samo: przy przeprowadzce zabudowa, blat i płytki zostają, a do pudełka pakuje się garnek, nóż i durszlak, które przeżyją dwa mieszkania. Ruch zajmuje pięć minut: wypiszcie trzy rzeczy, po które sięgacie każdego dnia — u większości to nóż, jeden garnek i jedna deska — i w te trzy zainwestujcie naprawdę. Reszta szuflady spokojnie może być tania, a rzecz używana raz w roku często wystarczy pożyczyć.",
    },
    {
      question: "Czy taki wydatek na jedno urządzenie się opłaca?",
      answer:
        "To zależy wyłącznie od tego, do której grupy u Was trafi: codziennej czy odświętnej. Thermomix kosztuje tyle co mebel, więc pytanie jest dokładnie takie samo jak przy każdej rzeczy używanej w kuchni. Jeśli stanie na blacie i będzie pracował codziennie, wydatek rozkłada się na tysiące użyć i broni się sam. Jeśli miałby wyjeżdżać z szafki na święta, to zły zakup — i mówię to przed prezentacją, a nie po niej. Dlatego zwykle pytam wprost, co gotujecie w zwykły wtorek, a nie co chcielibyście ugotować od święta.",
    },
  ],

  geo: { lat: 51.7634, lng: 16.8088 },
};
