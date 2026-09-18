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
 * RACIĄŻ — powiat płoński, woj. mazowieckie. GMINA MIEJSKA.
 * MIASTO 3 954 (GUS 31.12.2024), 8,4 km², 470,7 os./km².
 *
 * ⚠⚠ NAJWAŻNIEJSZE ROZRÓŻNIENIE ADMINISTRACYJNE:
 *   W POWIECIE PŁOŃSKIM ISTNIEJĄ DWIE ODRĘBNE JEDNOSTKI
 *   O TEJ SAMEJ NAZWIE:
 *   — GMINA MIEJSKA RACIĄŻ = miasto, 3 954 osoby, 8,4 km²,
 *   — GMINA WIEJSKA RACIĄŻ = osobna jednostka, 71 wsi,
 *     7 773 osoby, 242,9 km².
 *   ⚠ NIE MIESZAM TYCH LICZB. Na stronie podaję WYŁĄCZNIE
 *   dane MIASTA, a o gminie wiejskiej piszę jako o okolicy,
 *   do której dojeżdżam. TWARDA GRANICA.
 *
 * ⚠⚠ ODMIANA — ROZSTRZYGNIĘTA SŁOWNIKOWO:
 *   D. RACIĄŻA, Ms. W RACIĄŻU, przymiotnik RACIĄSKI
 *   (NIE „raciążski"!), mieszkaniec RACIĄŻANIN,
 *   mieszkanka RACIĄŻANKA. Potwierdzenie w praktyce:
 *   oficjalna nazwa imprezy to „Jarmark Raciąski".
 *   ⚠ SPRAWDZIĆ KAŻDE WYSTĄPIENIE PRZYMIOTNIKA.
 *   TWARDA GRANICA.
 * ⚠ HOMONIMY: wieś RACIĄŻ w gminie Tuchola
 *   (woj. kujawsko-pomorskie) oraz RACIĄŻEK — gmina i wieś
 *   w powiecie aleksandrowskim, kujawsko-pomorskie.
 *   To INNE miejscowości.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1095 pierwsza wzmianka o Raciążu,
 * — 29 GRUDNIA 1425 — książę Ziemowit IV nadaje przywilej
 *   lokacyjny; potwierdzenie praw w 1439 r.,
 * — ⚠⚠ PODSTAWA KĄTA: „istniejący w mieście CECH TKACZY
 *   przyciągał kupców, którzy chętnie nabywali tu wysokiej
 *   jakości PŁÓTNO I SUKNO". ⚠ DATY ZAŁOŻENIA CECHU
 *   NIE USTALONO — NIE PODAJĘ ŻADNEJ.
 * — do XVI w. w okolicy występowała RUDA DARNIOWA,
 *   z której pozyskiwano surowiec do produkcji NARZĘDZI.
 *   ⚠ ŹRÓDŁO MÓWI O NARZĘDZIACH. NIE PISZĘ O BRONI
 *   ANI SŁOWA. TWARDA GRANICA.
 * — XVI w. — ponad tysiąc mieszkańców, jedno z najludniejszych
 *   miast województwa płockiego, siedziba sejmików ziemskich,
 * — 1837 — około tysiąca dwustu mieszkańców i czynne
 *   GARBARNIE.
 * ⚠ UTRATY PRAW MIEJSKICH (1869/1870) I ICH PRZYCZYNY
 *   NIE PODAJĘ. Przywrócenie 1 lipca 1922 — TEŻ POMIJAM,
 *   żeby nie otwierać tematu. TWARDA GRANICA.
 * ⚠ CZEGO NIE USTALONO: dni tygodnia targów i jarmarków,
 *   młyny, browary, olejarnie, data doprowadzenia kolei.
 *   NIE ZMYŚLAM ICH.
 *
 * DZIŚ — MLECZARSTWO JEST OSIĄ GOSPODARCZĄ MIASTA:
 * tutejszy zakład mleczarski przerabia około 800 tysięcy
 * litrów mleka dziennie i produkuje między innymi
 * 30–33 TONY TWAROGU DZIENNIE oraz mleko w proszku.
 * Rolnictwo powiatu płońskiego: zboża, ziemniaki, buraki
 * cukrowe, rośliny oleiste i włókniste, zioła, warzywa
 * i owoce; hodowla bydła i trzody chlewnej.
 * Ciepłownia miejska opalana zrębkami drzewnymi działa
 * od blisko dwudziestu lat. Jarmark Raciąski odbywa się
 * od 2013 roku.
 * ⚠⚠ KĄTY „TWARÓG" (nowy-dwor-gdanski.ts), „MASŁO"
 *   (bychawa.ts), „MLEKO" (lowicz.ts) i „ODSĄCZANIE
 *   I ODCISKANIE" (lapy.ts) SĄ ZAJĘTE. MLECZARNIĘ PODAJĘ
 *   JAKO FAKT, A TEMATEM JEST NARZĘDZIE, NIE PRODUKT.
 *   TWARDA GRANICA.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK jakiegokolwiek wpisu
 *   z gminy miejskiej ani z gminy wiejskiej Raciąż — i w ogóle
 *   z powiatu płońskiego. ⚠ MIASTO MA POTĘŻNĄ MLECZARNIĘ,
 *   ALE ŻADNEGO WPISU — NIE SUGERUJĘ, ŻE MA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: PŁÓTNO W KUCHNI — narzędzie, którego nie ma
 * w żadnym zestawie.
 * Kąt od raciąskiego cechu tkaczy, po którego płótno i sukno
 * przyjeżdżali kupcy. Kawałek tkaniny jest w kuchni
 * narzędziem — tyle że jedynym, którego nikt nie kupuje
 * w komplecie z garnkami.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Raciąż żył z tkactwa — kupcy przyjeżdżali tu
 *   po płótno i sukno — a dziś jest miastem mleczarskim,
 *   i że te dwie rzeczy spotykają się w jednym przedmiocie,
 * — ŻE KAWAŁEK PŁÓTNA JEST W KUCHNI NARZĘDZIEM, którego
 *   nie ma w żadnym zestawie garnków ani w żadnej wyprawce,
 * — DO CZEGO SŁUŻY:
 *   — do CEDZENIA drobniejszego, niż potrafi sitko,
 *   — do ODCISKANIA ⚠ ODSYŁAM DO STRONY O ODSĄCZANIU,
 *     NIE ROZWIJAM,
 *   — do OSUSZANIA SAŁATY I ZIELENINY, która inaczej
 *     rozwodni sos,
 *   — do PRZYKRYWANIA CIASTA, żeby wierzch nie obsychał,
 *   — do WYCISKANIA SOKU z owoców i z tartych warzyw,
 *   — do ODSTAWIENIA CZEGOŚ NA SITKU tak, żeby nie
 *     przywarło,
 * — ⚠⚠ ŻE KLUCZOWA JEST JEDNA RZECZ, O KTÓREJ MAŁO KTO
 *   MÓWI: PŁÓTNO MUSI BYĆ BEZ ZAPACHU. Ściereczka prana
 *   w mocno pachnącym proszku odda ten zapach jedzeniu,
 *   a gaza prosto z opakowania bywa sztywna od krochmalu
 *   i trzeba ją najpierw wyprać i wypłukać. TO JEST
 *   NAJUŻYTECZNIEJSZA RZECZ W CAŁYM TEKŚCIE,
 * — ŻE TKANINA MA MIEĆ SPLOT, NIE DZIURY: tetra, len,
 *   gęsta bawełna. Ręcznik frotté zostawi kłaczki,
 * — ŻE MOKRE PŁÓTNO PRZEPUSZCZA LEPIEJ NIŻ SUCHE, więc
 *   przed cedzeniem warto je zmoczyć i wykręcić —
 *   suche najpierw wypije to, co miało przelecieć,
 * — ŻE TO JEST NARZĘDZIE PRAWIE DARMOWE, a zastępuje
 *   kilka sprzętów, których większość z nas nie ma,
 * — ⚠ UCZCIWIE O SPRZĘCIE: THERMOMIX NIE CEDZI I NIE
 *   ODCISKA. Nie ma takiej funkcji i nie będzie miał —
 *   to jest naczynie zamknięte, a cedzenie polega
 *   na przepuszczeniu przez coś. Miksowanie nie jest
 *   cedzeniem: po miksowaniu wszystko zostaje w środku,
 *   tylko drobniejsze. MÓWIĘ TO WPROST,
 * — ŻE DLATEGO PRZY NIEKTÓRYCH DANIACH PŁÓTNO I SITKO
 *   SĄ NIEZBĘDNE MIMO URZĄDZENIA — i dobrze o tym wiedzieć
 *   przed, a nie po.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH PORAD O HIGIENIE I BEZPIECZEŃSTWIE
 *   ŻYWNOŚCI: w jakiej temperaturze prać, czym wyparzać,
 *   jak często wymieniać. Mówię wyłącznie o ZAPACHU
 *   I O TYM, CO PŁÓTNO ROBI ZE SMAKIEM. TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH NAZW FIRM, MAREK ANI ŚRODKÓW PIORĄCYCH.
 * — ŻADNYCH PRZEPISÓW NA SER I TWARÓG — kąt zajęty.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO utraty praw miejskich i jej przyczyn.
 * — ZERO tematów wojennych i wyznaniowych.
 * — ⚠ DREWNIANĄ ZABUDOWĘ przy Kilińskiego, Warszawskiej
 *   i Wolności opisuję WYŁĄCZNIE architektonicznie,
 *   bez kontekstu wyznaniowego. TWARDA GRANICA.
 * — ZERO historii finansowej mleczarni i zmian właściciela.
 *   Piszę o skali przerobu DZIŚ, nie o drodze do niej.
 * — ZERO bezrobocia, wyludniania i odpływu młodych.
 * — ZERO wątku zbrojeniowego przy rudzie darniowej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ODSĄCZANIE I ODCISKANIE" (Łapy) dotyczy TEGO,
 *   ILE WODY TRZEBA WYGNAĆ. TUTAJ chodzi o PRZEDMIOT,
 *   którym się to robi, i o pięć innych jego zastosowań.
 * — „BLAT I ŚCIERECZKA" (Koluszki) dotyczy BAŁAGANU
 *   I WYCIERANIA.
 * — „TWARÓG" (Nowy Dwór Gdański) dotyczy ROBIENIA SERA.
 * — „WOSK W KUCHNI" (Pułtusk) dotyczy WOSKOWANEJ
 *   ŚCIERECZKI JAKO OKRYCIA.
 * — „OSŁONA" (Lipsk) dotyczy PRZYKRYWANIA JEDZENIA.
 * — „ROSÓŁ I WYWAR" (Gniew) dotyczy WYWARU.
 * TUTAJ chodzi o KAWAŁEK TKANINY JAKO NARZĘDZIE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM danych gminy miejskiej i wiejskiej Raciąż.
 * — NIE PISZĘ „raciążski" — poprawnie „raciąski".
 * — NIE PODAJĘ daty założenia cechu tkaczy.
 * — NIE PODAJĘ dni targowych ani jarmarcznych.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE DORADZAM nic w sprawie prania i higieny.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Raciąż jest gminą miejską i liczy 3 954 mieszkańców
 *   (GUS, 31.12.2024) na 8,4 km²; obok istnieje odrębna
 *   gmina wiejska Raciąż, złożona z siedemdziesięciu jeden
 *   wsi, o powierzchni blisko dwustu czterdziestu trzech
 *   kilometrów kwadratowych,
 * — pierwsza wzmianka o Raciążu pochodzi z 1095 roku,
 *   a 29 grudnia 1425 roku książę Ziemowit IV nadał
 *   przywilej lokacyjny, potwierdzony w 1439 roku,
 * — działający w mieście cech tkaczy przyciągał kupców,
 *   którzy nabywali tu wysokiej jakości płótno i sukno;
 *   aż do XVI wieku w okolicy występowała ruda darniowa,
 *   z której pozyskiwano surowiec do produkcji narzędzi,
 * — w XVI wieku Raciąż liczył ponad tysiąc mieszkańców,
 *   był jednym z najludniejszych miast województwa
 *   płockiego i siedzibą sejmików ziemskich, a w 1837 roku
 *   mieszkało tu około tysiąca dwustu osób i działały
 *   garbarnie,
 * — cały układ urbanistyczny miasta jest wpisany do rejestru
 *   zabytków, a drewniana zabudowa przy ulicach Kilińskiego,
 *   Warszawskiej i Wolności bywa nazywana unikalną w skali
 *   europejskiej; przez miasto płynie Raciążnica, prawobrzeżny
 *   dopływ Wkry,
 * — dziś osią gospodarczą Raciąża jest mleczarstwo: tutejszy
 *   zakład przerabia około ośmiuset tysięcy litrów mleka
 *   dziennie i wytwarza między innymi trzydzieści kilka ton
 *   twarogu na dobę oraz mleko w proszku; w powiecie płońskim
 *   uprawia się zboża, ziemniaki, buraki cukrowe, rośliny
 *   oleiste i włókniste, zioła, warzywa i owoce, a hoduje
 *   bydło i trzodę chlewną,
 * — ciepłownia miejska opalana zrębkami drzewnymi działa
 *   od blisko dwudziestu lat, a Jarmark Raciąski odbywa się
 *   od 2013 roku.
 */
export const RACIAZ: CityContent = {
  slug: "raciaz",
  h1: "Thermomix Raciąż – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Raciąż — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Raciążu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Raciąż — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Raciążu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Raciąża z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Raciąż"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Płótno do cedzenia musi być bez zapachu — to ważniejsze niż splot.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Raciążu – jak wygląda prezentacja?",
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
      id: "plotno",
      heading: "Kawałek płótna — narzędzie, którego nie ma w żadnym zestawie",
      paragraphs: [
        "Raciąż przez wieki żył z tkactwa. Działający tu cech tkaczy przyciągał kupców, którzy przyjeżdżali po wysokiej jakości płótno i sukno — to była wizytówka miasta. Dziś Raciąż jest miastem mleczarskim: tutejszy zakład przerabia około ośmiuset tysięcy litrów mleka dziennie i wytwarza kilkadziesiąt ton twarogu na dobę.",
        "Te dwie rzeczy — tkanina i mleko — spotykają się w jednym przedmiocie, który w kuchni jest narzędziem, a którego nikt nie kupuje w komplecie z garnkami. Zwykły kawałek płótna.",
        "Jest to chyba jedyny sprzęt kuchenny, którego nie ma w żadnej wyprawce, w żadnym zestawie startowym i w żadnej liście „co kupić do nowej kuchni”. A robi co najmniej sześć rzeczy.",
        "Cedzi drobniej, niż potrafi sitko — tam, gdzie sitko przepuszcza zawiesinę, płótno zatrzyma ją całą. Odciska, o czym pisałam osobno. Osusza sałatę i zieleninę, która inaczej rozwodni sos i sprawi, że ten spłynie na dno miski. Przykrywa ciasto, żeby wierzch nie obsychał. Wyciska sok z owoców i z tartych warzyw. I pozwala odstawić coś na sitku tak, żeby nie przywarło.",
        "Teraz rzecz najważniejsza i najrzadziej mówiona: płótno musi być bez zapachu.",
        "Ściereczka prana w mocno pachnącym proszku albo z płynem zmiękczającym odda ten zapach wszystkiemu, co przez nią przejdzie — a przechodzi zwykle coś delikatnego, wywar albo mleko, czyli dokładnie to, co zapach chłonie najlepiej. Z kolei gaza prosto z opakowania bywa sztywna od krochmalu i też trzeba ją najpierw wyprać i porządnie wypłukać. To jedno zdanie ratuje więcej dań niż pół książki kucharskiej.",
        "Drugie kryterium: tkanina ma mieć splot, a nie dziury. Tetra, len, gęsta bawełna. Ręcznik frotté odpada, bo zostawi kłaczki w jedzeniu, a rzadka gaza przepuści to, co miała zatrzymać.",
        "I trzecia rzecz, którą warto znać: mokre płótno przepuszcza lepiej niż suche. Przed cedzeniem dobrze je zmoczyć i mocno wykręcić — suche najpierw wypije część tego, co miało przez nie przelecieć, a potem odda to niechętnie.",
        "To jest narzędzie praktycznie darmowe, a zastępuje kilka sprzętów, których większość z nas nie ma i nie będzie miała.",
        "Na koniec uczciwie o urządzeniu, bo tu granica jest ostra. Thermomix nie cedzi i nie odciska. Nie ma takiej funkcji i mieć nie będzie, bo to jest naczynie zamknięte, a cedzenie polega na przepuszczeniu czegoś przez coś.",
        "Warto to powiedzieć wyraźnie, bo bywa mylone: miksowanie nie jest cedzeniem. Po zmiksowaniu wszystko zostaje w środku, tylko drobniejsze. Jeśli coś ma być klarowne albo pozbawione pestek i włókien, musi przejść przez płótno albo przez sitko — urządzenie tego kroku nie wykona. Przy części dań płótno jest więc niezbędne mimo sprzętu i lepiej wiedzieć o tym wcześniej niż w połowie roboty.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Raciążu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz zobaczyć, gdzie urządzenie wyręcza, a gdzie trzeba dołożyć rękę i sitko — powiedz to przy umawianiu. Pokażę i jedno, i drugie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Raciążu"),
    sekcjaRaty("w Raciążu"),
    {
      id: "rodzina",
      heading: "Thermomix dla raciąskiej rodziny",
      paragraphs: [
        "Raciąż jest gminą miejską i liczy blisko cztery tysiące mieszkańców na ośmiu i pół kilometrach kwadratowych; obok istnieje odrębna gmina wiejska o tej samej nazwie, złożona z siedemdziesięciu jeden wsi. Pierwsza wzmianka o Raciążu pochodzi z 1095 roku, a 29 grudnia 1425 roku książę Ziemowit IV nadał mu przywilej lokacyjny, potwierdzony w 1439. Działający w mieście cech tkaczy przyciągał kupców, którzy nabywali tu wysokiej jakości płótno i sukno, a aż do XVI wieku w okolicy występowała ruda darniowa, z której pozyskiwano surowiec do produkcji narzędzi. W XVI wieku Raciąż liczył ponad tysiąc mieszkańców, był jednym z najludniejszych miast województwa płockiego i siedzibą sejmików ziemskich; w 1837 roku mieszkało tu około tysiąca dwustu osób i działały garbarnie. Cały układ urbanistyczny miasta jest wpisany do rejestru zabytków, a drewniana zabudowa przy ulicach Kilińskiego, Warszawskiej i Wolności bywa nazywana unikalną w skali europejskiej. Przez miasto płynie Raciążnica, prawobrzeżny dopływ Wkry. Dziś osią gospodarczą Raciąża jest mleczarstwo — tutejszy zakład przerabia około ośmiuset tysięcy litrów mleka dziennie — a w powiecie płońskim uprawia się zboża, ziemniaki, buraki cukrowe, rośliny oleiste i włókniste, zioła, warzywa i owoce. Ciepłownia miejska opalana zrębkami drzewnymi działa od blisko dwudziestu lat, a Jarmark Raciąski odbywa się od 2013 roku.",
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

  districtsHeading: "Do których części Raciąża dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od placu Mickiewicza i starej drewnianej zabudowy po domy przy wylotach dróg i nad Raciążnicą. Dojeżdżam też do wsi w okolicznej gminie wiejskiej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Raciąż też przyjadę",
  nearbyParagraphs: [
    "Płońsk, Drobin, Bielsk, Sierpc, Glinojeck i Sochocin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Płońsk", "Sierpc", "Płock", "Ciechanów"],

  about: blokOMnie("do Raciąża", "w Raciążu", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Raciąża bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Raciąż w powiecie płońskim — nie o wieś Raciąż koło Tucholi ani o Raciążek w kujawsko-pomorskiem.",
    },
    ...faqWspolne("w Raciążu"),
    {
      question: "Jakie płótno nadaje się do cedzenia w kuchni?",
      answer:
        "Takie, które ma splot, a nie dziury — tetra, len albo gęsta bawełna. Ręcznik frotté zostawi kłaczki. Najważniejsze jest jednak coś innego: płótno musi być bez zapachu, bo odda go wszystkiemu, co przez nie przejdzie. Gazę prosto z opakowania trzeba najpierw wyprać i wypłukać, bo bywa sztywna od krochmalu. Przed cedzeniem warto tkaninę zmoczyć i wykręcić — mokra przepuszcza lepiej niż sucha.",
    },
    {
      question: "Czy Thermomix odcedzi albo odciśnie?",
      answer:
        "Nie. To naczynie zamknięte, a cedzenie polega na przepuszczeniu czegoś przez coś — takiej funkcji nie ma i nie będzie. Warto też wiedzieć, że miksowanie nie jest cedzeniem: po zmiksowaniu wszystko zostaje w środku, tylko drobniejsze. Jeśli coś ma być klarowne albo bez pestek, musi przejść przez płótno lub sitko.",
    },
  ],

  geo: { lat: 52.7815, lng: 20.1178 },
};
