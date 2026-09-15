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
 * CHEŁMŻA — powiat toruński, woj. kujawsko-pomorskie.
 * GMINA MIEJSKA. 13 620 mieszkańców (GUS 31.12.2024),
 * 7,8 km², 1 737,2 os./km² — ⚠ NAJGĘŚCIEJ ZALUDNIONE MIASTO
 * W TEJ FALI.
 * ⚠⚠ OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA CHEŁMŻA
 *   (9 446 osób, 178,9 km², 33 wsie) — TEŻ Z SIEDZIBĄ
 *   W MIEŚCIE. NIE MIESZAM DANYCH. TWARDA GRANICA.
 * ⚠ Serwis poland.gg podaje 13 386 osób „za 2026" —
 *   to dane PROGNOZOWANE, nie GUS. NIE UŻYWAĆ.
 *
 * ⚠⚠ NAJWIĘKSZE RYZYKO POMYŁKI W CAŁEJ FALI:
 *   CHEŁMŻA ≠ CHEŁMNO. Oba miasta leżą w województwie
 *   kujawsko-pomorskim, oba historycznie w ziemi
 *   chełmińskiej, oba mają ten sam rdzeń nazwy.
 *   ⚠ CHEŁMNO OPISUJĘ NA OSOBNEJ STRONIE.
 *   ⚠⚠ PRZYMIOTNIK OD CHEŁMŻY TO „CHEŁMŻYŃSKI"
 *   (jak Jezioro Chełmżyńskie), A NIE „CHEŁMIŃSKI" —
 *   ten drugi należy do Chełmna i do ziemi chełmińskiej.
 *   TWARDA GRANICA — SPRAWDZIĆ KAŻDE WYSTĄPIENIE.
 * ⚠ Inne pomyłki: CHEŁM (lubelskie), CHEŁMNO NAD NEREM
 *   (⚠ absolutny zakaz zbliżania się tematycznie),
 *   NOWA CHEŁMŻA (wieś w gminie wiejskiej).
 * ⚠ ODMIANA: D./Ms. CHEŁMŻY („do Chełmży", „w Chełmży"),
 *   B. Chełmżę, N. Chełmżą.
 *   ⚠ NAZWY MIESZKAŃCA NIE POTWIERDZONO SŁOWNIKOWO —
 *   NIE UŻYWAM JEJ. TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — pierwotna osada nazywała się ŁOZA; w 1246 r. biskup
 *   otrzymał ŁOZĘ WRAZ Z JEZIOREM i okolicznymi wsiami
 *   i wtedy pojawia się nazwa Culmsee, czyli Chełmża —
 *   ⚠ NAZWA MIASTA POCHODZI WPROST OD JEZIORA,
 * — PRAWA MIEJSKIE PRZED 22 LIPCA 1251 R.; w 1251 r.
 *   miasto wymieniono po raz pierwszy jako civitas,
 * — JEZIORO CHEŁMŻYŃSKIE MA 2,71 km²,
 * — pożary w latach 1286, 1531 i 1762 sprawiły, że na rynku
 *   nie zachowała się zabudowa średniowieczna, renesansowa
 *   ani barokowa — wcześniejsze domy były drewniane.
 *   ⚠ PODAJĘ TO JAKO WYJAŚNIENIE ARCHITEKTURY RYNKU,
 *   BEZ ROZWIJANIA WĄTKU KATASTROF,
 * — XIX w.: miasto funkcjonowało jako rolnicze zaplecze
 *   z siecią handlowo-rzemieślniczą dla okolicznych wsi,
 * — ⚠⚠ PODSTAWA KĄTA — CUKROWNIA: decyzja o budowie
 *   w 1881 r., PIERWSZA KAMPANIA 25 WRZEŚNIA 1882 R.;
 *   przed I wojną światową jedna z największych cukrowni
 *   w Europie. ⚠ LICZBY o przerobie 3 000 ton na dobę
 *   i o 2 000 pracowników sezonowych pochodzą z serwisu
 *   o niepewnej jakości redakcyjnej — NIE PODAJĘ ICH.
 *   Sam fakt, że była wówczas największym takim zakładem
 *   w Europie, potwierdza źródło niezależne,
 * — 1882 R. — uruchomienie linii kolejowej do Grudziądza;
 *   rozwój przełomu XIX i XX w. wynikał z kolei i cukrowni,
 *   stąd dzisiejsza pierzeja rynku z kamienicami z tamtego
 *   okresu,
 * — WIEŻA CIŚNIEŃ przy ul. Paderewskiego: budowa
 *   1900–1901, siedmiokondygnacyjna, czworoboczna, łącząca
 *   elementy neogotyckie ze stylem wernakularnym;
 *   w rejestrze zabytków od 2007 r.; renowacja 2018–2019;
 *   ⚠⚠ NADAL EKSPLOATOWANA — to jest dobry, żywy fakt.
 * ⚠ NAZW CECHÓW, DNI JARMARKÓW ANI KOLEI WĄSKOTOROWEJ
 *   CUKROWNICZEJ NIE POTWIERDZONO — NIE ZMYŚLAM ICH.
 *
 * DZIŚ: ⚠⚠ CUKROWNIA DZIAŁA I INWESTUJE — to jest fakt
 * POZYTYWNY i tak go podaję. Kampania 2020 dała około
 * 139 tysięcy ton cukru; właściciel przeznacza ponad
 * 180 mln zł na inwestycje w tym zakładzie, w tym projekt
 * rezygnacji z węgla w produkcji cukru. Zakład ma własną
 * elektrociepłownię, oczyszczalnię ścieków i laboratoria.
 * Sto czterdziestolecie obchodzono 8 września 2022 r.
 * ⚠ NAZWY WŁAŚCICIELA NIE PODAJĘ. TWARDA GRANICA.
 * W powiecie toruńskim użytki rolne zajmują ponad 56%
 * powierzchni, zboża — zwłaszcza pszenica — ponad 75%
 * zasiewów w części północnej, a rośliny przemysłowe,
 * głównie BURAKI CUKROWE I ZIEMNIAKI, około 15% zasiewów
 * w gminie Chełmża. Toruń leży około 20 km na południe.
 * ⚠ KĄT „BURAKI" JEST ZAJĘTY (nowy-staw.ts) — podaję
 *   jako fakt o uprawach.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — DWIE PUŁAPKI
 *   ZŁAPANE, OBIE BARDZO KUSZĄCE DLA MIASTA CUKROWNICZEGO:
 * — „FJUT / CYROP" — gęsty, ciemny syrop z buraka cukrowego,
 *   wpis 27.07.2012, województwo kujawsko-pomorskie.
 *   ⚠⚠ KARTA MINISTERIALNA PODAJE JAKO REGION POCHODZENIA
 *   POMORZE, ZWŁASZCZA BORY TUCHOLSKIE I KOCIEWIE —
 *   NIE CHEŁMŻĘ. Jeden z serwisów publikuje artykuł
 *   pod tytułem „Fjut z Chełmży" i wiąże produkt z tutejszą
 *   cukrownią — TO JEST NADINTERPRETACJA, NIE TREŚĆ KARTY.
 *   Dodatkowo na liście wojewódzkiej figuruje osobno
 *   „fjut kociewski". ⚠ NIE WOLNO NAPISAĆ, ŻE FJUT JEST
 *   Z CHEŁMŻY. TWARDA GRANICA.
 * — „MARMOLADA Z BURAKÓW CUKROWYCH" — wpis 20.05.2019,
 *   region pochodzenia: Kruszwica, Radziejów i okolice
 *   Brześcia Kujawskiego. ⚠ NIE Z CHEŁMŻY. Dodatkowo
 *   historia tego produktu to żywność z czasów wojennego
 *   niedostatku — PODWÓJNIE WYKLUCZONE.
 * ⚠ WNIOSEK: ŻADEN PRODUKT Z LISTY NIE MA CHEŁMŻY JAKO
 *   MIEJSCOWOŚCI POCHODZENIA. NIE WYMIENIAM ŻADNEGO.
 * ⚠ OSIEDLI NIE USTALONO — districts PUSTE.
 *
 * KĄT: KRYSTALIZACJA — dlaczego syrop nagle staje się
 * piaskiem.
 * Kąt od chełmżyńskiej cukrowni, w której cały proces kończy
 * się jednym zjawiskiem: gdy wody jest już za mało, cukier
 * przestaje być rozpuszczony i wypada w kryształach.
 * W kuchni to samo zjawisko psuje syropy, karmele, masy
 * i lody — i prawie nikt nie wie, dlaczego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że cukrownia w Chełmży ruszyła pierwszą kampanią
 *   25 września 1882 r. i przed I wojną światową była jedną
 *   z największych w Europie, a dziś działa i inwestuje,
 * — ŻE CAŁY PROCES CUKROWNICZY SPROWADZA SIĘ DO ODBIERANIA
 *   WODY: sok z buraka zagęszcza się, aż cukru będzie
 *   w wodzie więcej, niż może się w niej zmieścić —
 *   i WTEDY WYPADA W KRYSZTAŁACH,
 * — ⚠⚠ ŻE TO SAMO ZJAWISKO PSUJE W DOMU CZTERY RZECZY
 *   I ŻE PRAWIE NIKT NIE WIE, DLACZEGO. TO JEST RDZEŃ
 *   TEKSTU:
 *   — SYROP, który po ostygnięciu robi się piaszczysty,
 *   — MIÓD, który „skrystalizował" w słoiku,
 *   — MASA KAJMAKOWA albo krówkowa, która wychodzi ziarnista
 *     zamiast gładkiej,
 *   — LODY, które po kilku dniach chrupią,
 * — ŻE MECHANIZM JEST ZA KAŻDYM RAZEM TEN SAM: cukru jest
 *   w płynie więcej, niż może w nim pozostać rozpuszczone,
 *   więc szuka on czegoś, wokół czego mógłby się ułożyć,
 * — ⚠⚠ ŻE WYSTARCZY JEDNO ZIARENKO, ŻEBY SIĘ ZACZĘŁO —
 *   kryształek na ściance garnka, nierozpuszczony cukier
 *   na łyżce, drobinka z brzegu. Od tego jednego miejsca
 *   idzie reszta. TO JEST NAJUŻYTECZNIEJSZE ZDANIE
 *   W CAŁYM TEKŚCIE,
 * — CO Z TEGO WYNIKA PRAKTYCZNIE:
 *   — nie miesza się syropu, gdy już się gotuje —
 *     mieszanie roznosi kryształki po całości,
 *   — ścianki garnka warto zmyć wilgotnym pędzlem
 *     albo po prostu przykryć garnek na chwilę,
 *     żeby para sama je spłukała,
 *   — coś kwaśnego albo miód dodane do syropu utrudniają
 *     układanie się kryształów ⚠ BEZ PODAWANIA PROPORCJI,
 *   — im wolniej coś stygnie, tym większe kryształy —
 *     dlatego lody miesza się w czasie zamrażania,
 * — ŻE SKRYSTALIZOWANY MIÓD NIE JEST ZEPSUTY — to jest jego
 *   normalny stan i wraca do płynnego po łagodnym ogrzaniu,
 *   ⚠ ŻADNYCH TEMPERATUR, ŻADNYCH TWIERDZEŃ ZDROWOTNYCH
 *   ⚠ ODSYŁAM DO STRONY O MIODZIE, NIE ROZWIJAM,
 * — ŻE TO NIE JEST TO SAMO CO KARMELIZACJA
 *   ⚠ ODSYŁAM DO STRONY O CUKRZE I KARMELU — tam cukier
 *   się rozkłada, tutaj tylko zmienia stan,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie miesza i pilnuje
 *   temperatury, co przy masach cukrowych bardzo pomaga —
 *   ale mieszanie jest tu jednocześnie tym, czego przy
 *   syropie NIE wolno robić. To jeden z nielicznych
 *   przypadków, w których największa zaleta tego sprzętu
 *   działa przeciwko zadaniu. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH USTAWIEŃ, CZASÓW, TEMPERATUR I STOPNI
 *   CUKRU. Przy karmelu i syropach jest to szczególnie
 *   ważne, bo pomyłka kończy się oparzeniem.
 *   TWARDA GRANICA.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE PRZY GORĄCYM
 *   CUKRZE. Gorący syrop jest niebezpieczny, ale nie jestem
 *   od instruktażu — nie zachęcam też do robienia karmelu.
 *   TWARDA GRANICA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ZERO o cukrze
 *   w diecie, o „zdrowszych" słodzikach, o miodzie
 *   jako lekarstwie. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM, w tym właściciela cukrowni.
 * — ŻADNEJ KRYTYKI CUKRU ANI PRODUKTÓW SŁODZONYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO upadłości miejscowego zakładu przetwórstwa
 *   z 2024 r. („zakład upadł po blisko 80 latach").
 *   TWARDA GRANICA.
 *   ⚠ CUKROWNIA JEST BEZPIECZNA I POZYTYWNA — działa,
 *   inwestuje i obchodziła sto czterdziestolecie.
 * — ⚠⚠ ZERO jakiegokolwiek zbliżenia do Chełmna nad Nerem.
 * — ZERO tematów wojennych i wyznaniowych — w tym genezy
 *   budynków przy rynku.
 * — ZERO rozwijania wątku pożarów jako katastrof; podaję
 *   je wyłącznie jako wyjaśnienie, dlaczego rynek ma
 *   zabudowę z przełomu XIX i XX w.
 * — ZERO marmolady z buraków i jej wojennej genezy.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CUKIER I KARMEL" (Koprzywnica) dotyczy CUKRU, KTÓRY
 *   SIĘ PRZYPALA, czyli ROZKŁADU cukru pod wpływem ciepła.
 *   ⚠⚠ TUTAJ chodzi o ZMIANĘ STANU: z rozpuszczonego
 *   w krystaliczny. To dwa różne zjawiska i strona mówi
 *   to wprost. TWARDA GRANICA.
 * — „MIÓD" (Kluczbork) dotyczy MIODU JAKO SKŁADNIKA.
 *   ⚠ Odsyłam tam przy akapicie o krystalizacji miodu.
 * — „ŻELKI, GALARETKI I KISIELE" dotyczą TĘŻENIA.
 * — „DŻEMY, KONFITURY I POWIDŁA" (Paczków) dotyczą
 *   PRZETWORÓW OWOCOWYCH.
 * — „ODPAROWANIE" (Przysucha) dotyczy REDUKCJI SOSU
 *   I ZACHOWANIA SOLI.
 * — „BURAKI" (Nowy Staw) dotyczą WARZYWA.
 * — „SŁODYCZ, KTÓRA SIĘ UWALNIA" (Nakło nad Notecią)
 *   dotyczy CUKRU POWSTAJĄCEGO ZE SKROBI.
 * TUTAJ chodzi o MOMENT, W KTÓRYM CUKIER PRZESTAJE BYĆ
 * ROZPUSZCZONY.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „chełmiński" o Chełmży — poprawnie
 *   „chełmżyński".
 * — NIE MIESZAM danych gminy miejskiej i wiejskiej.
 * — NIE PODAJĘ liczb o przerobie i zatrudnieniu cukrowni
 *   sprzed wojny.
 * — NIE PRZYPISUJĘ Chełmży fjutu ani marmolady z buraków.
 * — NIE PODAJĘ nazwy właściciela cukrowni.
 * — NIE PODAJĘ temperatur ani proporcji przy syropach.
 * — NIE ORZEKAM niczego o cukrze w diecie.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Chełmża jest gminą miejską i liczy 13 620 mieszkańców
 *   (GUS, 31.12.2024) na 7,8 km², co daje ponad tysiąc
 *   siedemset osób na kilometr kwadratowy; obok istnieje
 *   odrębna gmina wiejska o tej samej nazwie, też z siedzibą
 *   w mieście,
 * — pierwotna osada nazywała się Łoza; w 1246 roku biskup
 *   otrzymał ją wraz z jeziorem i okolicznymi wsiami i wtedy
 *   pojawiła się nazwa, od której pochodzi dzisiejsza —
 *   nazwa miasta wzięła się wprost od jeziora, a Jezioro
 *   Chełmżyńskie ma 2,71 km²,
 * — prawa miejskie miasto uzyskało przed 22 lipca 1251 roku
 *   i w tym samym roku wymieniono je po raz pierwszy jako
 *   civitas; pożary z lat 1286, 1531 i 1762 sprawiły,
 *   że na rynku nie zachowała się dawna zabudowa —
 *   wcześniejsze domy były drewniane,
 * — decyzję o budowie cukrowni podjęto w 1881 roku,
 *   a pierwsza kampania ruszyła 25 września 1882; przed
 *   pierwszą wojną światową był to jeden z największych
 *   zakładów tego rodzaju w Europie. W tym samym 1882 roku
 *   uruchomiono linię kolejową do Grudziądza, a rozwój
 *   przełomu XIX i XX wieku wynikał właśnie z kolei
 *   i cukrowni — stąd dzisiejsza pierzeja rynku
 *   z kamienicami z tamtego okresu,
 * — przy ulicy Paderewskiego stoi wieża ciśnień z lat
 *   1900–1901: siedmiokondygnacyjna, czworoboczna, łącząca
 *   elementy neogotyckie ze stylem wernakularnym; od 2007
 *   roku jest w rejestrze zabytków, w latach 2018–2019
 *   przeszła renowację i nadal jest eksploatowana,
 * — cukrownia działa do dziś: kampania 2020 dała około
 *   stu trzydziestu dziewięciu tysięcy ton cukru, zakład
 *   ma własną elektrociepłownię, oczyszczalnię ścieków
 *   i laboratoria, a jego sto czterdziestolecie obchodzono
 *   8 września 2022 roku,
 * — w powiecie toruńskim użytki rolne zajmują ponad
 *   pięćdziesiąt sześć procent powierzchni, zboża —
 *   zwłaszcza pszenica — ponad trzy czwarte zasiewów
 *   w części północnej, a rośliny przemysłowe, głównie
 *   buraki cukrowe i ziemniaki, około piętnastu procent
 *   zasiewów w gminie Chełmża; Toruń leży około dwudziestu
 *   kilometrów na południe.
 */
export const CHELMZA: CityContent = {
  slug: "chelmza",
  h1: "Thermomix Chełmża – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Chełmża — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Chełmży: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chełmża — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chełmży. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chełmży z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Chełmża"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wystarczy jedno ziarenko na ściance garnka, żeby cały syrop się skrystalizował.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chełmży – jak wygląda prezentacja?",
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
      id: "krystalizacja",
      heading: "Moment, w którym cukier przestaje być rozpuszczony",
      paragraphs: [
        "Decyzję o budowie chełmżyńskiej cukrowni podjęto w 1881 roku, a pierwsza kampania ruszyła 25 września 1882. Przed pierwszą wojną światową był to jeden z największych zakładów tego rodzaju w Europie, a cukrownia działa do dziś i wciąż inwestuje — sto czterdziestolecie obchodziła w 2022 roku.",
        "Cały proces cukrowniczy, mimo skali, sprowadza się do jednej rzeczy: odbierania wody. Sok z buraka zagęszcza się tak długo, aż cukru będzie w wodzie więcej, niż zdoła się w niej zmieścić. I wtedy cukier wypada z roztworu w postaci kryształów.",
        "Dokładnie to samo zjawisko psuje w domowej kuchni cztery rzeczy — a prawie nikt nie wie, że to zawsze ten sam mechanizm.",
        "Syrop, który po ostygnięciu robi się piaszczysty zamiast gładki. Miód, który „skrystalizował” w słoiku. Masa kajmakowa albo krówkowa, która wychodzi ziarnista. I lody, które po kilku dniach w zamrażarce zaczynają chrupać.",
        "Za każdym razem dzieje się to samo: cukru jest w płynie więcej, niż może w nim pozostać rozpuszczone, więc zaczyna szukać czegoś, wokół czego mógłby się ułożyć.",
        "I tu jest rzecz najważniejsza, a zarazem najbardziej użyteczna. Wystarczy jedno ziarenko, żeby się zaczęło. Kryształek na ściance garnka, nierozpuszczony cukier na łyżce, drobinka przy brzegu. Od tego jednego miejsca idzie cała reszta i w kilkanaście sekund gładki syrop zamienia się w piasek.",
        "Z tego wynikają cztery praktyczne rzeczy.",
        "Nie miesza się syropu, kiedy już się gotuje. Mieszanie roznosi te ziarenka po całości i robi dokładnie to, czego nie chcemy — a instynkt podpowiada odwrotnie, bo przy wszystkim innym mieszanie pomaga.",
        "Ścianki garnka warto zmyć wilgotnym pędzelkiem albo po prostu przykryć garnek na chwilę, żeby para sama je spłukała. To tam najczęściej zaczyna się kłopot.",
        "Coś kwaśnego albo odrobina miodu dodane do syropu utrudniają cukrowi układanie się w kryształy. Nie podaję proporcji, bo to zależy od tego, co się robi — ale sama zasada jest stała.",
        "I czwarta: im wolniej coś stygnie, tym większe kryształy powstają. Dlatego lody miesza się w trakcie zamrażania — nie dla puszystości, tylko po to, żeby kryształki nie zdążyły urosnąć.",
        "Przy okazji warto powiedzieć, że skrystalizowany miód nie jest zepsuty. To jego normalny stan i po łagodnym ogrzaniu wraca do płynnego. O samym miodzie pisałam osobno.",
        "Zaznaczam też, żeby nie było pomyłki: to nie jest karmelizacja. Przy karmelu cukier się rozkłada i zmienia w coś innego — o tym pisałam przy innym mieście. Tutaj cukier pozostaje cukrem, tylko zmienia stan.",
        "Teraz o sprzęcie i jest to jeden z nielicznych przypadków, w których muszę powiedzieć coś niewygodnego. Thermomix miesza i pilnuje temperatury, i przy masach cukrowych — kajmaku, krówkach — bardzo to pomaga, bo one przypalają się błyskawicznie.",
        "Ale przy syropie mieszanie jest dokładnie tym, czego robić nie wolno. Największa zaleta tego sprzętu działa tu przeciwko zadaniu. Nie znam na to obejścia i nie zamierzam udawać, że znam: syrop na przezroczystą polewę robi się w garnku, bez mieszania, patrząc.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chełmży?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli robicie w domu masy słodkie i chcecie wiedzieć, przy których urządzenie pomaga, a przy których przeszkadza — powiedzcie to przy umawianiu. Powiem szczerze jedno i drugie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chełmży"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla chełmżyńskiej rodziny",
      paragraphs: [
        "Chełmża jest gminą miejską i liczy ponad trzynaście i pół tysiąca mieszkańców na niespełna ośmiu kilometrach kwadratowych, co daje ponad tysiąc siedemset osób na kilometr — najgęściej ze wszystkich miast, do których dojeżdżam w tej części województwa. Obok istnieje odrębna gmina wiejska o tej samej nazwie, też z siedzibą w mieście. Pierwotna osada nazywała się Łoza; w 1246 roku biskup otrzymał ją wraz z jeziorem i okolicznymi wsiami i wtedy pojawiła się nazwa, od której pochodzi dzisiejsza — wzięła się wprost od jeziora, a Jezioro Chełmżyńskie ma niespełna trzy kilometry kwadratowe. Prawa miejskie miasto uzyskało przed 22 lipca 1251 roku i w tym samym roku wymieniono je po raz pierwszy jako civitas; pożary z lat 1286, 1531 i 1762 sprawiły, że na rynku nie zachowała się dawna zabudowa, bo wcześniejsze domy były drewniane. Decyzję o budowie cukrowni podjęto w 1881 roku, a pierwsza kampania ruszyła 25 września 1882 — przed pierwszą wojną światową był to jeden z największych zakładów tego rodzaju w Europie. W tym samym roku uruchomiono linię kolejową do Grudziądza, a rozwój przełomu wieków wynikał właśnie z kolei i cukrowni; stąd dzisiejsza pierzeja rynku z kamienicami z tamtego okresu. Przy ulicy Paderewskiego stoi wieża ciśnień z lat 1900–1901, siedmiokondygnacyjna i czworoboczna, od 2007 roku w rejestrze zabytków, po renowacji z lat 2018–2019 — i nadal eksploatowana. Cukrownia działa do dziś, a jej sto czterdziestolecie obchodzono 8 września 2022 roku. W powiecie toruńskim użytki rolne zajmują ponad pięćdziesiąt sześć procent powierzchni, a rośliny przemysłowe — głównie buraki cukrowe i ziemniaki — około piętnastu procent zasiewów w gminie Chełmża; Toruń leży dwadzieścia kilometrów na południe.",
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

  districtsHeading: "Do których części Chełmży dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i okolic wieży ciśnień po osiedla przy wylotach dróg i domy nad Jeziorem Chełmżyńskim. Dojeżdżam też do wsi w okolicznej gminie wiejskiej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Chełmżę też przyjadę",
  nearbyParagraphs: [
    "Toruń, Wąbrzeźno, Kowalewo Pomorskie, Łubianka, Łysomice i Chełmno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Toruń", "Wąbrzeźno", "Chełmno", "Kowalewo Pomorskie"],

  about: blokOMnie("do Chełmży", "w Chełmży", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chełmży bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Chełmżę nad Jeziorem Chełmżyńskim, w powiecie toruńskim — nie o Chełmno, do którego też przyjeżdżam, ale które jest osobnym miastem.",
    },
    ...faqWspolne("w Chełmży"),
    {
      question: "Dlaczego syrop robi się piaszczysty po ostygnięciu?",
      answer:
        "Bo cukru jest w nim więcej, niż może pozostać rozpuszczone, i zaczyna układać się w kryształy. Wystarczy jedno ziarenko — kryształek na ściance garnka albo nierozpuszczony cukier na łyżce — żeby od tego miejsca poszła reszta. Dlatego gotującego się syropu się nie miesza, a ścianki garnka warto zmyć wilgotnym pędzelkiem albo przykryć garnek, żeby para sama je spłukała.",
    },
    {
      question: "Czy skrystalizowany miód jest zepsuty?",
      answer:
        "Nie, to jego normalny stan — po łagodnym ogrzaniu wraca do płynnego. To dokładnie ten sam mechanizm, który sprawia, że lody po kilku dniach chrupią, a masa krówkowa wychodzi ziarnista: cukier przestaje być rozpuszczony i układa się w kryształy.",
    },
    {
      question: "Czy Thermomix pomoże przy syropie i masach słodkich?",
      answer:
        "Przy masach typu kajmak czy krówki bardzo — pilnuje temperatury i miesza, a one przypalają się błyskawicznie. Ale przy syropie mieszanie jest dokładnie tym, czego robić nie wolno, bo roznosi kryształki po całości. To jeden z nielicznych przypadków, w których największa zaleta tego sprzętu działa przeciwko zadaniu, i nie zamierzam tego zamazywać.",
    },
  ],

  geo: { lat: 53.1847, lng: 18.6042 },
};
