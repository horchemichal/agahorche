import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * ŁAGÓW — miasto w powiecie kieleckim, woj. świętokrzyskie,
 * 1 511 mieszkańców (31.12.2024, GUS). Prawa miejskie nadane
 * 28 LIPCA 1375 r. przywilejem królowej Elżbiety (potwierdzone
 * przez Władysława Jagiełłę w 1390 r.), utracone po powstaniu
 * styczniowym, ODZYSKANE 1 STYCZNIA 2018 r. Jan Długosz
 * odnotował tu w XV w. DWADZIEŚCIA SIEDEM WARSZTATÓW
 * GARNCARSKICH — miejscowa biała glina pozwalała robić naczynia
 * sprzedawane w Krakowie, Sandomierzu i Wrocławiu.
 *
 * UWAGA — HOMONIM: istnieje ŁAGÓW W WOJ. LUBUSKIM (powiat
 * świebodziński), znany z zamku joannitów. To INNE MIASTO.
 * Wszystkie fakty na tej stronie dotyczą Łagowa świętokrzyskiego.
 *
 * KĄT: duszenie — czyli wolne gotowanie pod przykryciem.
 * Miasto, które przez wieki robiło garnki, jest właściwym
 * miejscem na stronę o tym, co się w garnku dzieje przez dwie
 * godziny i czego urządzenie w tym nie zrobi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że duszenie to jest dokładnie ten rodzaj gotowania, w którym
 *   urządzenie wygrywa, bo trzyma temperaturę i miesza samo,
 * — że NIE PRZYSMAŻY mięsa na początku i że ten krok zostaje
 *   przy patelni — a on w duszeniu naprawdę coś zmienia,
 * — że pod zamkniętą pokrywą prawie nic nie odparowuje, więc
 *   sos wychodzi rzadszy niż z garnka i trzeba to uwzględnić,
 * — że mieszanie rozdrabnia — im dłużej dusicie, tym bardziej
 *   kawałki przestają być kawałkami.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW, TEMPERATUR ANI PRĘDKOŚCI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o wolnym gotowaniu.
 * — ŻADNEJ OBIETNICY, że wyjdzie tak samo jak w żeliwnym garnku
 *   albo w piekarniku. Nie wyjdzie tak samo i strona to mówi.
 * — ŻADNEGO ROBIENIA Z BIEDY MIASTA ARGUMENTU SPRZEDAŻOWEGO.
 *   Łagów jest w rankingach finansowych samorządów na samym
 *   końcu stawki i to jest fakt, ale przedstawicielka handlowa,
 *   która przy sprzedaży drogiego sprzętu przypomina ludziom,
 *   że mieszkają w biednej gminie, robi rzecz nieprzyzwoitą.
 *   Tego wątku w treści NIE MA.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Żeliwo" (Stąporków) dotyczy
 * KONKRETNEGO NACZYNIA i tego, czego urządzenie nie zastąpi jako
 * przedmiot. „Ciasto naleśnikowe i patelnia" (Cieszanów) dotyczy
 * smażenia. „Zmywanie" należy do miasta porcelany, więc wątku
 * naczyń jako wyrobu NIE ruszam — garncarstwo jest tu wyłącznie
 * historycznym tłem, nie tematem. Tutaj tematem jest TECHNIKA:
 * długie gotowanie w niskiej temperaturze, pod przykryciem.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że w Łagowie nadal działa garncarstwo. Nie działa
 *   — to dziedzictwo, nie żywa branża. Piszę w czasie przeszłym.
 * — NIE PODAJĘ największego pracodawcy. Nie ma takiego: niemal
 *   wszystkie zarejestrowane tu firmy to mikroprzedsiębiorstwa.
 *   Piszę o tym neutralnie, jako o strukturze, albo wcale.
 * — NIE ROZSTRZYGAM liczby mieszkańców. GUS podaje 1 511
 *   (31.12.2024), strona gminy 1 609 bez roku. Używam GUS.
 * — NIE PISZĘ, że Łagów był przedwojennym letniskiem. Tego nie
 *   potwierdzono. Piszę o dzisiejszej bazie kwaterowej
 *   i agroturystycznej, bo ta jest udokumentowana.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Łagowa nic nie potwierdzono.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA
 *   TABLICA; 19 sołectw gminy to sołectwa, nie dzielnice.
 *
 * ŚWIADOMIE POMINIĘTE. W czasie okupacji niemieckiej miasto
 * zostało niemal całkowicie zniszczone i zginęło około tysiąca
 * pięciuset osób. To jest prawda o tym miejscu, ale strona
 * handlowa o sprzęcie kuchennym nie jest miejscem, w którym
 * wolno tego używać jako tła dla oferty.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 28 lipca 1375 r. (przywilej królowej
 *   Elżbiety, wydany w Sandomierzu), potwierdzenie 1390 r.,
 *   utrata po powstaniu styczniowym, odzyskanie 1.01.2018,
 * — Jan Długosz odnotował w XV w. 27 warsztatów garncarskich;
 *   miejscowa biała glina, wyroby sprzedawane w Krakowie,
 *   Sandomierzu i Wrocławiu,
 * — w 1598 r. działały tu cztery huty żelaza,
 * — Jaskinia Zbójecka i wąwóz Dule leżą w Łagowie,
 * — miasto leży u wrót Łysogór, ok. 13 km od Nowej Słupi,
 * — 1 511 mieszkańców (31.12.2024).
 */
export const LAGOW: CityContent = {
  slug: "lagow",
  h1: "Thermomix Łagów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łagów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Łagowie (świętokrzyskie): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łagów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łagowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łagowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Łagów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwie godziny pod przykryciem — bez stania przy garnku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łagowie – jak wygląda prezentacja?",
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
      id: "duszenie",
      heading: "Miasto dwudziestu siedmiu garncarzy — czyli o duszeniu",
      paragraphs: [
        "Jan Długosz, pisząc w XV wieku o Łagowie, odnotował z podziwem dwadzieścia siedem warsztatów garncarskich. Tutejsza biała glina była na tyle dobra, że łagowskie naczynia sprzedawano w Krakowie, Sandomierzu i Wrocławiu. Dziś garncarstwa tu nie ma — zostało wspomnienie i gliniane naczynia na rynku. Ale skoro miasto przez wieki robiło garnki, to jest właściwe miejsce, żeby napisać o tym, co się w garnku dzieje przez dwie godziny.",
        "Duszenie — czyli długie gotowanie w niskiej temperaturze, pod przykryciem — to akurat ta technika, w której urządzenie wygrywa najwyraźniej. Bo duszenie nie wymaga umiejętności, tylko czasu i pilnowania, żeby nie przywarło. Urządzenie trzyma temperaturę i miesza samo, więc gulasz, potrawka czy warzywa duszone mogą się robić, kiedy Was nie ma w kuchni. Nastawiacie i odchodzicie. To jest cała przewaga i ona jest prawdziwa.",
        "A teraz trzy rzeczy, których Wam nikt przy sprzedaży nie powie, a które w duszeniu mają znaczenie.",
        "Po pierwsze: mięsa na początku nie przysmaży. Ten pierwszy krok — mocno rozgrzana patelnia i skórka na mięsie — zostaje przy patelni. W duszeniu to nie jest ozdobnik, tylko rzecz, która realnie zmienia smak gotowego dania. Jeśli Wam na tym zależy, robicie to osobno i przekładacie. Jeśli nie zależy — pomijacie i też będzie dobrze, tylko inaczej.",
        "Po drugie: pod zamkniętą pokrywą prawie nic nie odparowuje. W garnku sos przez dwie godziny gęstnieje sam, bo woda ucieka. Tutaj nie ucieka prawie wcale, więc na końcu sos bywa rzadszy, niż się spodziewacie. Dlatego wody dolewa się mniej, niż podaje przepis z tradycyjnego garnka.",
        "Po trzecie, i to jest najważniejsze: mieszanie rozdrabnia. Im dłużej dusicie, tym bardziej kawałki przestają być kawałkami. Przy gulaszu, który ma się rozpaść, to dobrze. Przy daniu, w którym marchewka ma zostać marchewką, trzeba to wziąć pod uwagę — albo dorzucić ją później, albo w większych kawałkach.",
        "I uczciwe podsumowanie: w żeliwnym garnku w piekarniku wyjdzie inaczej. Nie gorzej i nie lepiej — inaczej. Ja nie sprzedaję Wam obietnicy, że jedno urządzenie zastąpi wszystko.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łagowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu częściej dusicie niż smażycie, powiedzcie to przy umawianiu — zrobimy właśnie coś takiego i zobaczycie, jak wygląda konsystencja na końcu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łagowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łagowskiej rodziny",
      paragraphs: [
        "Łagów liczy nieco ponad półtora tysiąca mieszkańców. Prawa miejskie dostał 28 lipca 1375 roku przywilejem królowej Elżbiety, wydanym w Sandomierzu, a Władysław Jagiełło potwierdził je w 1390. Stracił je po powstaniu styczniowym i odzyskał dopiero 1 stycznia 2018 roku. Oprócz garncarstwa działały tu kiedyś huty żelaza — w 1598 roku były cztery. Dziś to raczej punkt wypadowy w Łysogóry: stąd około trzynastu kilometrów do Nowej Słupi, a tuż obok miasta leżą Jaskinia Zbójecka i wąwóz Dule.",
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

  districtsHeading: "Do których części Łagowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Piotrowa, Sędka, Zamkowej Woli, Nowej i Starej Zbelutki i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Łagów też przyjadę",
  nearbyParagraphs: [
    "Kielce, Nowa Słupia, Opatów, Daleszyce i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kielce", "Nowa Słupia", "Opatów", "Daleszyce", "Bodzentyn", "Ostrowiec Świętokrzyski"],

  about: blokOMnie("do Łagowa", "w Łagowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łagowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Łagów w województwie świętokrzyskim, nie o Łagów lubuski.",
    },
    ...faqWspolne("w Łagowie"),
    {
      question: "Czy Thermomix nadaje się do duszenia?",
      answer:
        "To jedna z tych technik, w których wypada najlepiej — trzyma temperaturę i miesza sam, więc gulasz czy potrawka robią się bez pilnowania. Trzeba tylko wiedzieć, że nie przysmaży mięsa na początku i że pod zamkniętą pokrywą prawie nic nie odparowuje, więc wody dolewa się mniej niż w tradycyjnym garnku.",
      },
    {
      question: "Dlaczego warzywa rozpadają się przy długim duszeniu?",
      answer:
        "Bo urządzenie miesza przez cały czas, a mieszanie rozdrabnia. Przy gulaszu, który ma się rozpaść, to zaleta. Jeśli marchewka ma zostać marchewką, dodajcie ją później albo w większych kawałkach.",
    },
    {
      question: "Czy wyjdzie tak samo jak w żeliwnym garnku w piekarniku?",
      answer:
        "Nie. Wyjdzie inaczej — nie gorzej i nie lepiej, ale inaczej, głównie przez brak przysmażenia i brak odparowania. Nie sprzedaję obietnicy, że jedno urządzenie zastąpi wszystko.",
    },
  ],

  geo: { lat: 50.7833, lng: 21.1167 },
};
