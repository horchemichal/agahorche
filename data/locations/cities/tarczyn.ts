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
 * TARCZYN — powiat piaseczyński, woj. mazowieckie.
 * MIASTO 4 379 (GUS 31.12.2024), 5,2 km², 837,3 os./km².
 * Gmina miejsko-wiejska: 12 555 osób, 114,3 km².
 * ⚠ GMINA ROŚNIE — +22,5% ludności w latach 2003–2024.
 *   TO DOBRY, BEZPIECZNY FAKT (rzadkość w tej serii).
 *
 * ⚠ HOMONIM ODWROTNY: w gminie Tarczyn leży wieś ŻELECHÓW —
 *   nie mylić z MIASTEM Żelechów w powiecie garwolińskim,
 *   które opisuję w tej samej fali. ⚠ SPRAWDZONE.
 * Odmiana: „do Tarczyna", „w Tarczynie", „tarczyński".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1284 pierwsza wzmianka (zapis „Tarczin"),
 * — ⚠ ROZBIEŻNOŚĆ DATY LOKACJI: strona gminy i PTTK podają
 *   1353, Słownik historyczno-geograficzny IH PAN podaje 1355.
 *   ⚠ NIE ROZSTRZYGAM — PISZĘ „w połowie XIV wieku,
 *   za księcia Kazimierza I". TWARDA GRANICA.
 * — ⚠⚠ PODSTAWA KĄTA: przywilej lokacyjny wymienia wprost
 *   „targu, karczem, JATEK Z MIĘSEM, kramów szewców
 *   i sukienników",
 * — 1473 — książę Bolesław V nadaje jarmark
 *   na św. Aleksego (17 lipca),
 * — 1525 — drugi jarmark, na św. Doroty (6 lutego),
 * — w haśle słownikowym wymienione też młyny oraz drogi
 *   do Warszawy i do Warki.
 *
 * DZIŚ: gmina leży w rejonie grójecko-wareckim, nazywanym
 * „największym sadem Europy"; miasto jest ośrodkiem
 * sadowniczym z dorocznym Świętem Owoców we wrześniu;
 * od 1966 r. działa tu przetwórstwo owocowo-warzywne.
 * ⚠⚠ KĄTY „JABŁKO" (annopol.ts), „ODMIANY", „SOKI I MOSZCZE"
 *   (sulechow.ts), „POWIETRZE/TLEN" (grojec.ts) SĄ ZAJĘTE.
 *   SADOWNICTWO PODAJĘ WYŁĄCZNIE JAKO FAKT W BLOKU
 *   O MIEŚCIE. TWARDA GRANICA.
 * ⚠ NIE PISZĘ O PRZENIESIENIU PRODUKCJI ZNANEJ MARKI
 *   NAPOJÓW DO INNEGO MIASTA — brzmiałoby jak upadek
 *   zakładu. TWARDA GRANICA. ŻADNYCH NAZW MAREK.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: nie potwierdzono wpisu
 *   z gminy Tarczyn. ⚠ „Jabłka grójeckie" to inna gmina
 *   i inny rejestr (oznaczenie unijne), a pochodzenia
 *   „cydru mazowieckiego" nie ustalono. NIE WYMIENIAM
 *   ŻADNEGO PRODUKTU. TWARDA GRANICA.
 * ⚠ OSIEDLI I SOŁECTW NIE POTWIERDZONO (BIP niedostępny) —
 *   districts PUSTE, w tekście nie podaję nazw wsi
 *   poza najbardziej oczywistymi kierunkami.
 *
 * KĄT: MIĘSO W KAWAŁKU — dlaczego opłaca się kupić całość
 * i podzielić samemu.
 * Kąt od przywileju lokacyjnego, w którym obok targu
 * i karczem wymieniono wprost jatki z mięsem. Jatka była
 * miejscem, w którym mięso dzielono przy kliencie —
 * i to jest dokładnie ta czynność, którą dziś oddaliśmy
 * komuś innemu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w dokumencie lokacyjnym Tarczyna jatki z mięsem
 *   wymieniono jednym tchem z targiem i karczmami — były
 *   podstawowym urządzeniem miasta,
 * — ŻE JATKA BYŁA MIEJSCEM DZIELENIA MIĘSA PRZY KLIENCIE,
 *   a dziś kupujemy je już podzielone i to zmienia więcej,
 *   niż się wydaje,
 * — ⚠⚠ ŻE KUPUJĄC W PLASTRACH, ODDAJEMY DECYZJĘ O GRUBOŚCI
 *   KOMUŚ INNEMU — a grubość decyduje o tym, co da się
 *   z tego zrobić. TO JEST NAJUŻYTECZNIEJSZA RZECZ
 *   W TEKŚCIE,
 * — ŻE Z JEDNEGO KAWAŁKA ZWYKLE WYCHODZĄ DWA RÓŻNE DANIA,
 *   bo kawałek nie jest jednorodny: część chudsza i część
 *   z tłuszczem nadają się do czego innego,
 * — ŻE KOŚĆ I OBRZYNKI TO NIE ODPAD — z nich robi się wywar
 *   ⚠ ODSYŁAM DO STRONY O ROSOLE, NIE ROZWIJAM,
 * — ŻE MIĘSO W CAŁOŚCI ŁATWIEJ PODZIELIĆ NA PORCJE
 *   DO ZAMROŻENIA, bo my decydujemy, jak duże mają być,
 * — ŻE ZIMNE MIĘSO KROI SIĘ RÓWNIEJ NIŻ CIEPŁE — to jedyna
 *   naprawdę przydatna sztuczka przy dzieleniu w domu,
 * — ŻE NIE TRZEBA UMIEĆ ROZBIERAĆ TUSZY, ŻEBY NA TYM
 *   SKORZYSTAĆ — wystarczy poprosić o kawałek w całości
 *   zamiast w plastrach,
 * — ⚠ UCZCIWIE: dzielenie mięsa to robota noża i ręki.
 *   Urządzenie nie pokroi kawałka i nie oddzieli go
 *   od kości. Robi natomiast to, co przy takim kawałku
 *   jest najdłuższe: długie, wolne gotowanie bez stania
 *   przy garnku.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI: jak długo
 *   mięso może leżeć, w jakiej temperaturze, jak rozmrażać,
 *   czy jest „dość zrobione". TO JEST DZIEDZINA, W KTÓREJ
 *   ZŁA PODPOWIEDŹ SZKODZI. TWARDA GRANICA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH NAZW ELEMENTÓW ROZBIORU I FACHOWEJ TERMINOLOGII
 *   MASARSKIEJ — nie znam się i nie udaję.
 * — ŻADNYCH PORAD O CENACH I O TYM, GDZIE TANIEJ.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 * — ŻADNYCH NAZW FIRM, MAREK I SKLEPÓW.
 * — ŻADNEJ KRYTYKI MIĘSA PAKOWANEGO — zasada z Mrągowa.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ZERO wątku przeniesienia produkcji do innego miasta.
 * — ZERO drastycznych opisów uboju i rozbioru. Piszę
 *   o kawałku mięsa na blacie, nie o tym, skąd się wziął.
 *   TWARDA GRANICA.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „WIELKOŚĆ KAWAŁKÓW" (Orzysz) dotyczy TEGO, JAK WIELKOŚĆ
 *   WPŁYWA NA CZAS GOTOWANIA. TUTAJ chodzi o DECYZJĘ
 *   ZAKUPOWĄ: całość czy plastry.
 * — „MIELONE MIĘSO I MASZYNKA" (Miastko) dotyczy MIELENIA.
 * — „CO OBOK CZEGO" (Góra Kalwaria) dotyczy SĄSIEDZTWA
 *   JATEK I PIEKARNI, czyli układu miasta.
 * — „TARG" (Tuszyn) dotyczy KUPOWANIA NA TARGU
 *   KONTRA W SKLEPIE.
 * — „WIEPRZOWINA" (Żuromin), „WOŁOWINA" (Szprotawa),
 *   „GĘŚ" (Gostynin), „KURCZAK" (Kostrzyn) dotyczą
 *   KONKRETNYCH GATUNKÓW MIĘSA. Tutaj gatunek nie ma
 *   znaczenia.
 * — „ROSÓŁ I WYWAR" (Gniew) dotyczy WYWARU.
 * TUTAJ chodzi o to, CZY KUPUJEMY KAWAŁEK, CZY PLASTRY —
 * i co tracimy, oddając komuś decyzję o grubości.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ jednej daty lokacji (1353 czy 1355).
 * — NIE WYMIENIAM żadnego produktu tradycyjnego.
 * — NIE PODAJĘ nazw elementów rozbioru.
 * — NIE DORADZAM nic w sprawie przechowywania mięsa.
 * — NIE MYLĘ miasta Żelechów ze wsią Żelechów w gminie
 *   Tarczyn.
 * — NIE PODAJĘ nazw osiedli ani sołectw.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Tarczyn liczy 4 379 mieszkańców (GUS, 31.12.2024)
 *   na 5,2 km², czyli ponad osiemset trzydzieści osób
 *   na kilometr kwadratowy, a cała gmina miejsko-wiejska
 *   12 555 osób na 114,3 km² i od 2003 roku urosła
 *   o ponad jedną piątą,
 * — pierwsza wzmianka o Tarczynie pochodzi z 1284 roku,
 *   a lokację na prawie niemieckim nadał mu w połowie
 *   XIV wieku książę Kazimierz I; przywilej wymieniał
 *   targ, karczmy, jatki z mięsem oraz kramy szewców
 *   i sukienników,
 * — w 1473 roku książę Bolesław V nadał miastu jarmark
 *   na świętego Aleksego, czyli 17 lipca, a w 1525 roku
 *   doszedł drugi — na świętą Dorotę, 6 lutego; w źródłach
 *   wymienia się też tutejsze młyny oraz drogi prowadzące
 *   do Warszawy i do Warki,
 * — dziś gmina leży w rejonie grójecko-wareckim, nazywanym
 *   największym sadem Europy, samo miasto jest ośrodkiem
 *   sadowniczym z dorocznym Świętem Owoców we wrześniu,
 *   a od 1966 roku działa tu przetwórstwo owocowo-warzywne.
 */
export const TARCZYN: CityContent = {
  slug: "tarczyn",
  h1: "Thermomix Tarczyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tarczyn — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Tarczynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tarczyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tarczynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tarczyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Tarczyn"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kupując w plastrach, oddajemy komuś decyzję o grubości.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tarczynie – jak wygląda prezentacja?",
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
      id: "jatki",
      heading: "Kawałek zamiast plastrów",
      paragraphs: [
        "Przywilej lokacyjny Tarczyna, nadany w połowie XIV wieku przez księcia Kazimierza I, wymienia cztery rzeczy jednym tchem: targ, karczmy, jatki z mięsem oraz kramy szewców i sukienników. Jatki nie były dodatkiem — były podstawowym urządzeniem miasta, wymienionym w dokumencie założycielskim obok targu.",
        "Jatka była miejscem, w którym mięso dzielono przy kliencie. Widziało się, z czego jest ten kawałek, i mówiło, jak ma być pokrojony. Dziś kupujemy mięso już podzielone i to zmienia więcej, niż się wydaje.",
        "Bo kiedy kupujemy plastry, oddajemy komuś innemu decyzję o grubości. A grubość decyduje o tym, co z tego w ogóle da się zrobić. Cienki plaster nadaje się do szybkiego smażenia i do niczego więcej — duszony rozpadnie się na włókna. Gruby kawałek można dusić godzinę i dopiero wtedy pokazuje, co potrafi. To są dwa różne dania, a różnica zapadła w sklepie, nie w kuchni.",
        "Druga rzecz, mniej oczywista: z jednego kawałka zwykle wychodzą dwa różne obiady. Mięso nie jest jednorodne — jedna część jest chudsza, druga ma więcej tłuszczu i tkanki łącznej. Chudsza część woli krótko i mocno, ta druga woli długo i wolno. Kupując kawałek w całości, mamy oba te mięsa za jedną cenę i sami decydujemy, które trafi na kiedy.",
        "Trzecia: kość i obrzynki nie są odpadem. To jest materiał na wywar, o którym pisałam osobno — i który przy kupowaniu plastrów po prostu nie istnieje, bo zostaje u kogoś innego.",
        "Czwarta, czysto praktyczna: kawałek w całości dużo łatwiej podzielić na porcje do zamrożenia w takim rozmiarze, jaki naprawdę pasuje do naszego domu. Gotowe opakowania są zawsze albo za duże, albo za małe.",
        "A jeśli chodzi o samo dzielenie — jedyna naprawdę przydatna sztuczka jest taka, że zimne mięso kroi się równiej niż ciepłe albo miękkie. Nic więcej nie trzeba wiedzieć. Nie trzeba umieć rozbierać tuszy, żeby na tym wszystkim skorzystać; wystarczy poprosić o kawałek w całości zamiast o plastry.",
        "Teraz uczciwie o sprzęcie, bo granica jest prosta. Thermomix nie pokroi kawałka mięsa i nie oddzieli go od kości. To jest robota noża i ręki, i nic tego nie zastąpi.",
        "Robi natomiast tę część, która przy dużym kawałku trwa najdłużej: długie, wolne gotowanie z pilnowaniem temperatury i z mieszaniem, przez które nie trzeba stać przy garnku. Kupując kawałek w całości, bierzemy na siebie dziesięć minut przy desce i oddajemy urządzeniu dwie godziny przy garnku. Wymiana jest korzystna.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tarczynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć danie duszone długo, bez stania przy garnku — powiedzcie to przy umawianiu, zrobimy właśnie takie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tarczynie"),
    sekcjaRaty("w Tarczynie"),
    {
      id: "rodzina",
      heading: "Thermomix dla tarczyńskiej rodziny",
      paragraphs: [
        "Tarczyn liczy blisko cztery i pół tysiąca mieszkańców na nieco ponad pięciu kilometrach kwadratowych, czyli ponad osiemset trzydzieści osób na kilometr, a cała gmina miejsko-wiejska ponad dwanaście i pół tysiąca osób na stu czternastu kilometrach — i od 2003 roku urosła o ponad jedną piątą. Pierwsza wzmianka o Tarczynie pochodzi z 1284 roku, a lokację na prawie niemieckim nadał mu w połowie XIV wieku książę Kazimierz I; przywilej wymieniał targ, karczmy, jatki z mięsem oraz kramy szewców i sukienników. W 1473 roku książę Bolesław V nadał miastu jarmark na świętego Aleksego, czyli 17 lipca, a w 1525 roku doszedł drugi — na świętą Dorotę, 6 lutego. W źródłach wymienia się też tutejsze młyny oraz drogi prowadzące do Warszawy i do Warki. Dziś gmina leży w rejonie grójecko-wareckim, nazywanym największym sadem Europy, samo miasto jest ośrodkiem sadowniczym z dorocznym Świętem Owoców we wrześniu, a od 1966 roku działa tu przetwórstwo owocowo-warzywne.",
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

  districtsHeading: "Do których części Tarczyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic rynku po domy przy wylotach dróg na Warszawę, Grójec i Warkę. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Tarczyn też przyjadę",
  nearbyParagraphs: [
    "Piaseczno, Góra Kalwaria, Grójec, Prażmów, Mszczonów, Warka i Konstancin-Jeziorna są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Piaseczno", "Grójec", "Góra Kalwaria", "Warka"],

  about: blokOMnie("do Tarczyna", "w Tarczynie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tarczyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Tarczyn w powiecie piaseczyńskim, między Piasecznem a Grójcem.",
    },
    ...faqWspolne("w Tarczynie"),
    {
      question: "Czy warto kupować mięso w kawałku zamiast w plastrach?",
      answer:
        "Zwykle tak, bo kupując plastry, oddajemy komuś innemu decyzję o grubości — a od grubości zależy, co da się z tego zrobić. Cienki plaster nadaje się tylko do szybkiego smażenia, gruby kawałek można dusić długo. Z jednego kawałka wychodzą też zwykle dwa różne dania, bo część chudsza i część z tłuszczem lubią co innego.",
    },
    {
      question: "Czy Thermomix pokroi mięso?",
      answer:
        "Nie — dzielenie kawałka to robota noża i ręki, i nic tego nie zastąpi. Urządzenie przejmuje natomiast część najdłuższą: wolne gotowanie z pilnowaniem temperatury i mieszaniem, przez które nie trzeba stać przy garnku. Przy dzieleniu w domu przydaje się tylko jedno: zimne mięso kroi się równiej niż ciepłe.",
    },
  ],

  geo: { lat: 51.9784, lng: 20.8337 },
};
