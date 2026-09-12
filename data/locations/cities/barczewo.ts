import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * BARCZEWO — gmina miejsko-wiejska w powiecie olsztyńskim.
 * MIASTO 7 356, GMINA 18 327 (GUS 31.12.2024). 32 SOŁECTWA.
 * Miasto 4,6 km², gmina 320,1 km².
 *
 * PRAWA MIEJSKIE: przywilej lokacyjny 6 CZERWCA 1364 r.,
 * biskup warmiński JAN II STRYPROCK; prawa miejskie
 * 4 LIPCA 1364 r.
 * ⚠ RODZAJU PRAWA NIE PODAJĘ — strona gminy mówi
 * o magdeburskim, co na Warmii jest nietypowe. Nie rozstrzygam.
 * WCZEŚNIEJSZA LOKACJA: Wartberg (dziś BARCZEWKO), prawa
 * quasi-miejskie 26 grudnia 1329 r. od bp. Eberharda z Nysy.
 * Obecne miasto to lokacja PRZENIESIONA na nowe miejsce.
 * PRZYNALEŻNOŚĆ: WARMIA, dominium biskupów warmińskich.
 *
 * ZABYTKI: kościół par. św. Anny i św. Szczepana — 1386,
 * gotyk ceglany; zamek biskupi — 1380, dziś relikty; kościół
 * św. Andrzeja Apostoła (pofranciszkański) z manierystycznym
 * cenotafium.
 * POŻAR 9–10 MAJA 1798 r. zniszczył zamek, farę i klasztor;
 * miasto odbudowano szerszymi ulicami.
 * FELIKS NOWOWIEJSKI — ur. 7 lutego 1877 r. w Barczewie,
 * kompozytor muzyki do „Roty" i „Hymnu Warmii".
 * ⚠ OBALONE: „kompozytor hymnu Polski" — to błąd krążący
 * w źródłach obcojęzycznych. „Rota" NIE JEST hymnem Polski.
 * SALON MUZYCZNY IM. FELIKSA NOWOWIEJSKIEGO — otwarty
 * 15 lipca 1961 r., obecna nazwa od 2007 r.; jednostka
 * Centrum Kulturalno-Bibliotecznego.
 * ⚠ OBALONE: to NIE JEST „muzeum" — nazwa urzędowa to
 * Salon Muzyczny.
 * MIĘDZYNARODOWY FESTIWAL MUZYKI CHÓRALNEJ im. Nowowiejskiego
 * — od 2002 r.; XXV edycja 28–30 maja 2026 r.
 * CITTASLOW od 2013 r.
 * DWIE RZEKI: PISA WARMIŃSKA i KIERMAS; 14 MOSTÓW —
 * stąd przydomek „Wenecja Północy".
 *
 * KĄT: ZAGĘSZCZANIE — co zrobić, gdy w daniu jest za dużo
 * płynu. Kąt od miasta na dwóch rzekach, z czternastoma
 * mostami.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w zamkniętym naczyniu nadmiar płynu jest problemem
 *   częstszym niż w garnku, bo nic nie odparowuje,
 * — że są cztery różne drogi i mylenie ich psuje danie:
 *   odparowanie, mąka lub skrobia, warzywo zmiksowane
 *   z dania, nabiał i żółtko,
 * — że każda z nich coś kosztuje: odparowanie czasu,
 *   mąka smaku, warzywo koloru, nabiał ryzyka zwarzenia,
 * — że skrobię i mąkę zawsze rozprowadza się w ZIMNYM
 *   płynie, nigdy prosto do gorącego,
 * — że najbardziej niedoceniana metoda to zmiksowanie części
 *   dania i wlanie z powrotem — bo nic nie dodaje,
 * — że zagęszczacze działają dopiero po zagotowaniu i że
 *   dlatego łatwo przesadzić,
 * — i ODMOWA: nie podaję proporcji ani ilości.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ rodzaju prawa lokacyjnego.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — ZERO ZAKŁADU KARNEGO. To jedno z dwóch najsilniejszych
 *   skojarzeń z miastem w wyszukiwarce i temat całkowicie
 *   nieprzystający. Nie wspominam o nim w żadnej formie,
 *   także przy festiwalu.
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945, wysiedleń, cmentarzy wojennych.
 * — ZERO wątku synagogi i społeczności żydowskiej.
 * — ZERO zmiany nazwy miasta w 1946 r.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ile wody naprawdę
 * potrzeba" (Warta) dotyczy tego, ILE WLAĆ na starcie.
 * Tutaj chodzi o RATUNEK, gdy płynu jest już za dużo.
 * „Zasmażka" (Ozorków) dotyczy mąki z tłuszczem jako bazy
 * polskiej kuchni. „Konsystencja" (Stryków) dotyczy
 * rozdrobnienia. „Ciepło, które zostaje" (Błaszki) dotyczy
 * tężenia po wyłączeniu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ rodzaju prawa lokacyjnego z 1364 r.
 * — NIE PISZĘ o Nowowiejskim jako autorze hymnu Polski.
 * — NIE NAZYWAM Salonu Muzycznego muzeum.
 * — NIE PODAJĘ godzin otwarcia ani numerów rejestru zabytków.
 * — NIE PISZĘ o rezerwatach w gminie — nie potwierdzono.
 * — NIE PRZYPISUJĘ Barczewu produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ Barczewa z BARCZEWKIEM (wieś w tej samej
 *   gminie) ani z Barczewem jako gminą. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 7 356, gmina 18 327 mieszkańców, 32 sołectwa,
 * — przywilej lokacyjny z 6 czerwca 1364 r. od biskupa
 *   warmińskiego Jana II Stryprocka, prawa miejskie
 *   z 4 lipca 1364 r.; wcześniejsza lokacja w dzisiejszym
 *   Barczewku pochodzi z 1329 r.,
 * — kościół świętej Anny i świętego Szczepana z 1386 r.,
 * — zamek biskupi z 1380 r., dziś zachowany w reliktach,
 * — pożar z 9 i 10 maja 1798 r. zniszczył zamek, farę
 *   i klasztor,
 * — Feliks Nowowiejski urodził się tu 7 lutego 1877 r.;
 *   skomponował muzykę do „Roty” i „Hymnu Warmii”,
 * — Salon Muzyczny jego imienia otwarto 15 lipca 1961 r.,
 * — Międzynarodowy Festiwal Muzyki Chóralnej odbywa się
 *   od 2002 r.; dwudziesta piąta edycja przypada
 *   na 28–30 maja 2026 r.,
 * — Barczewo należy do sieci Cittaslow od 2013 r.,
 * — przez miasto płyną Pisa Warmińska i Kiermas, jest tu
 *   czternaście mostów.
 */
export const BARCZEWO: CityContent = {
  slug: "barczewo",
  h1: "Thermomix Barczewo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Barczewo (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Barczewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Barczewo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Barczewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Barczewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Barczewo i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Za dużo płynu można naprawić na cztery sposoby. Każdy coś kosztuje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Barczewie – jak wygląda prezentacja?",
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
      id: "zageszczanie",
      heading: "Dwie rzeki i czternaście mostów — czyli co zrobić, gdy płynu jest za dużo",
      paragraphs: [
        "Barczewo leży na dwóch rzekach — Pisie Warmińskiej i Kiermasie — i ma czternaście mostów na czterech i pół kilometra kwadratowego, przez co bywa nazywane Wenecją Północy. Prawa miejskie dostało 4 lipca 1364 roku od biskupa warmińskiego Jana II Stryprocka, choć pierwsza lokacja, w dzisiejszym Barczewku, była o trzydzieści pięć lat wcześniejsza. Urodził się tu Feliks Nowowiejski, kompozytor muzyki do „Roty” — i od razu prostuję błąd, który powtarza nawet część encyklopedii: „Rota” nigdy nie była hymnem Polski.",
        "Miasto, w którym wody jest za dużo, jest właściwym miejscem na stronę o daniu, w którym płynu jest za dużo. To zdarza się w tym urządzeniu częściej niż w garnku i warto rozumieć dlaczego.",
        "Powód jest ten sam, który tłumaczy większość nieudanych pierwszych tygodni: w zamkniętym naczyniu prawie nic nie odparowuje. W garnku zupa gęstnieje sama, przez godzinę. Tutaj to, co wlejecie, zostaje — a warzywa dolewają jeszcze od siebie.",
        "Dróg wyjścia są cztery i różnią się bardziej, niż się wydaje. Pierwsza to odparowanie: gotować dalej przy otwartym naczyniu, aż nadmiar ujdzie. Nic nie dodajecie, smak się nawet zagęszcza — kosztuje tylko czas i uwagę.",
        "Druga to mąka albo skrobia. Działa najszybciej i jest najczęstsza, ale ma cenę: rozcieńcza smak i przy nadmiarze daje kleistą, mączną konsystencję. Tu jest zresztą jedna twarda zasada, której złamanie kończy się grudkami zawsze: skrobię i mąkę rozprowadza się najpierw w zimnym płynie, a dopiero potem wlewa do gorącego. Nigdy odwrotnie.",
        "Trzecia jest najbardziej niedoceniana i najczęściej najlepsza: wyjąć część tego, co w daniu jest, zmiksować i wlać z powrotem. Ziemniak, marchewka, fasola, część warzyw z zupy. Danie gęstnieje własnym składnikiem, nic obcego nie dochodzi, smak nie jest rozcieńczony. Kosztuje tylko kolor i trochę struktury — zupa robi się mętniejsza.",
        "Czwarta to nabiał albo żółtko. Daje gładkość i głębię, ale niesie ryzyko: przy zbyt wysokiej temperaturze się warzy, a wtedy nie ma odwrotu. To droga na koniec gotowania, nie na środek.",
        "I rzecz, która zaskakuje najbardziej: zagęszczacze zaczynają działać dopiero, gdy danie się zagotuje. Dlatego tak łatwo przesadzić — człowiek patrzy, widzi, że nic się nie dzieje, dosypuje jeszcze, a po chwili ma budyń zamiast sosu. Dodać zawsze można, odjąć nie.",
        "I granica: nie podam Wam proporcji. Ile mąki na ile płynu zależy od tego, co gotujecie i jak gęste ma być — a każda liczba, którą bym tu wpisała, byłaby zgadywaniem udającym przepis.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Barczewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli Waszym stałym problemem jest zbyt rzadka zupa albo sos — powiedzcie przy umawianiu. Zrobimy właśnie to danie, bo prawdziwy problem pokazuje więcej niż potrawa dobrana pod prezentację.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Barczewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla barczewskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad siedem tysięcy mieszkańców, a cała gmina ponad osiemnaście, w trzydziestu dwóch sołectwach. Barczewo leży na Warmii i było miastem biskupim: przywilej lokacyjny wydał 6 czerwca 1364 roku biskup Jan II Stryprock, a prawa miejskie nadano miesiąc później. Wcześniejsza lokacja, z 1329 roku, znajdowała się w dzisiejszym Barczewku — to osobna wieś, dziś w tej samej gminie. Z zabytków został kościół świętej Anny i świętego Szczepana z 1386 roku oraz relikty zamku biskupiego z 1380; wielki pożar w maju 1798 roku zniszczył większość starej zabudowy. W Barczewie urodził się Feliks Nowowiejski, a od 1961 roku działa Salon Muzyczny jego imienia; od 2002 odbywa się tu Międzynarodowy Festiwal Muzyki Chóralnej, którego dwudziesta piąta edycja przypada na koniec maja 2026. Miasto należy do sieci Cittaslow od 2013 roku.",
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

  districtsHeading: "Do których części gminy Barczewo dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu dwóch sołectw gminy, w tym do Barczewka. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Barczewo też przyjadę",
  nearbyParagraphs: [
    "Olsztyn, Biskupiec, Jeziorany, Dobre Miasto i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Biskupiec", "Jeziorany", "Dobre Miasto", "Reszel"],

  about: blokOMnie("do Barczewa", "w Barczewie i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Barczewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu dwóch sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Barczewo to miasto, a Barczewko — osobna wieś w tej samej gminie, w której stała pierwsza, czternastowieczna lokacja. Przyjeżdżam i tu, i tam.",
    },
    ...faqWspolne("w Barczewie"),
    {
      question: "Zupa wyszła za rzadka — co zrobić?",
      answer:
        "Są cztery drogi i każda coś kosztuje. Odparowanie przy otwartym naczyniu kosztuje czas, ale nic nie dodaje. Mąka albo skrobia działa najszybciej, lecz rozcieńcza smak. Zmiksowanie części dania i wlanie z powrotem gęstnieje własnym składnikiem — kosztuje tylko kolor. Nabiał albo żółtko daje gładkość, ale grozi zwarzeniem.",
    },
    {
      question: "Dlaczego przy zagęszczaniu robią mi się grudki?",
      answer:
        "Prawie zawsze dlatego, że mąka albo skrobia trafiły prosto do gorącego płynu. Zasada jest twarda: najpierw rozprowadzić w zimnym płynie, dopiero potem wlać do gorącego. Nigdy odwrotnie.",
    },
    {
      question: "Dosypałem skrobi i nic się nie stało — dosypać więcej?",
      answer:
        "Nie od razu. Zagęszczacze zaczynają działać dopiero, gdy danie się zagotuje, więc łatwo przesadzić i zamiast sosu dostać budyń. Dodać zawsze można, odjąć nie. Proporcji nie podam — zależą od tego, co gotujecie i jak gęste ma być.",
    },
  ],

  geo: { lat: 53.8302, lng: 20.6903 },
};
