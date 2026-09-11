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
 * DALESZYCE — miasto w powiecie kieleckim, 2 737 mieszkańców
 * (31.12.2024, GUS). Prawa miejskie 1569 r. (biskup Filip Padniewski
 * za zgodą Zygmunta Augusta), utracone w 1865 r., ODZYSKANE
 * 1 STYCZNIA 2007 r. W mieście działa zakład produkujący ŻYWNOŚĆ
 * LIOFILIZOWANĄ dla wypraw wysokogórskich — a firma, do której
 * należy, przygotowywała też posiłki dla polskiego astronauty
 * na Międzynarodowej Stacji Kosmicznej.
 *
 * KĄT: jedzenie zabrane w drogę — termos, wycieczka, plecak.
 * Miasto, w którym produkuje się jedzenie dla himalaistów
 * i dla astronauty, jest jedynym właściwym miejscem na stronę
 * o tym, co się bierze ze sobą — i o granicy, za którą domowa
 * kuchnia nie sięga i sięgać nie musi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że liofilizacja to proces przemysłowy i urządzenie kuchenne
 *   nie robi i nie będzie robić nic podobnego,
 * — że dla wycieczki jednodniowej to nie ma znaczenia, bo wystarczy
 *   termos — a do termosu urządzenie pasuje idealnie, bo gotuje
 *   gęste i gorące bez pilnowania,
 * — co się w termosie sprawdza, a co nie,
 * — i uczciwie: to nie jest powód do zakupu sam w sobie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O TYM, JAK DŁUGO JEDZENIE MOŻE STAĆ W TERMOSIE
 *   ANI W JAKIEJ TEMPERATURZE. To jest dziedzina bezpieczeństwa
 *   żywności i przy jedzeniu zabieranym z domu na cały dzień
 *   akurat wcale nie błaha. Odmowa stoi tu wprost i jest
 *   najważniejszym zdaniem tej strony.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani o liofilizatach, ani
 *   o jedzeniu turystycznym.
 * — ŻADNEJ KRYTYKI gotowych liofilizatów ani producentów — tym
 *   bardziej że jeden z nich pracuje w tym mieście.
 * — ŻADNYCH PORAD TURYSTYCZNYCH. Nie chodzę po górach zawodowo
 *   i nie będę udawać, że wiem, co się bierze na dłuższą wyprawę.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Czy zabrać na wakacje"
 * (inne miasto) dotyczy zabierania ze sobą SAMEGO URZĄDZENIA.
 * „Jedzenie zabierane ze sobą do pracy" dotyczy codziennego
 * rytmu pracy i drugiego śniadania. Tutaj chodzi o WYJŚCIE NA CAŁY
 * DZIEŃ — wycieczkę, spacer, wyjazd — i o jedzenie, które ma
 * przetrwać kilka godzin w plecaku. „Suszenie" należy do Iwkowej
 * i celowo go tu NIE ruszam; liofilizacja to zupełnie inny proces
 * i piszę o niej wyłącznie po to, żeby powiedzieć, że jej NIE ma
 * w kuchni domowej.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ NAZW FIRM. Zakład liofilizacji i zakład przetwórstwa
 *   mięsa są ustalone i pewne, ale nie reklamuję cudzych
 *   działalności. Piszę opisowo,
 * — NIE PISZĘ, że Daleszyce leżą w Świętokrzyskim Parku Narodowym.
 *   NIE LEŻĄ — park jest wyraźnie dalej. Na terenie gminy jest
 *   natomiast Cisowsko-Orłowiński Park Krajobrazowy, ale NIE
 *   POTWIERDZONO, czy jego granice obejmują samo miasto, więc
 *   piszę o nim ostrożnie, jako o terenie gminy,
 * — NIE PODAJĘ liczby zatrudnionych w żadnym z zakładów,
 * — NIE PODAJĘ odległości z Borkowa do Kielc w kilometrach —
 *   żadne źródło nie podaje jej wprost,
 * — NIE PISZĘ o przemyśle drzewnym jako o osi gospodarki miasta.
 *   Działa tu nadleśnictwo, ale znaczącego tartaku w samym mieście
 *   nie potwierdzono — potwierdzony jest za to przemysł spożywczy,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Daleszyc nic nie potwierdzono,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1569 r. (biskup Filip Padniewski za zgodą
 *   Zygmunta Augusta), utrata 1865 r., odzyskanie 1 stycznia 2007 r.,
 * — w mieście działa zakład produkujący żywność liofilizowaną
 *   dla wypraw wysokogórskich; firma, do której należy, przygotowywała
 *   posiłki dla polskiego astronauty na Międzynarodowej Stacji
 *   Kosmicznej,
 * — działa tu także zakład przetwórstwa mięsa,
 * — zalew w Borkowie, w tej gminie, jest jednym z najpopularniejszych
 *   kąpielisk województwa,
 * — 2 737 mieszkańców (31.12.2024).
 */
export const DALESZYCE: CityContent = {
  slug: "daleszyce",
  h1: "Thermomix Daleszyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Daleszyce — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Daleszycach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Daleszyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Daleszycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Daleszyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Daleszyce i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na wyprawę — przemysł. Na wycieczkę — termos.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Daleszycach – jak wygląda prezentacja?",
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
      id: "w-droge",
      heading: "Miasto, które gotuje dla himalaistów — czyli o jedzeniu zabranym w drogę",
      paragraphs: [
        "W Daleszycach produkuje się żywność liofilizowaną — taką, jaką biorą ze sobą ludzie wchodzący na ośmiotysięczniki. Firma, do której należy tutejszy zakład, przygotowywała też posiłki dla polskiego astronauty na Międzynarodowej Stacji Kosmicznej. Jak na miasto liczące niecałe dwa tysiące osiemset mieszkańców, które prawa miejskie odzyskało dopiero pierwszego stycznia 2007 roku, to zaskakujące sąsiedztwo.",
        "I dobre miejsce, żeby powiedzieć rzecz, którą sprzedawcy sprzętu mówią niechętnie: liofilizacja to proces przemysłowy. Mrożenie w bardzo niskiej temperaturze i odciąganie wody pod próżnią — to się dzieje w maszynach wielkości pokoju, nie na blacie. Żadne urządzenie kuchenne tego nie robi i robić nie będzie, moje też nie.",
        "Tylko że na wycieczkę jednodniową to nie ma najmniejszego znaczenia. Do lasu, nad zalew, na cały dzień w drodze — nie potrzeba jedzenia, które przetrwa miesiąc w plecaku. Potrzeba czegoś ciepłego w termosie.",
        "I tutaj urządzenie akurat pasuje dobrze, z prostego powodu: rzeczy, które najlepiej znoszą termos, to te gęste i gorące — zupy krem, gulasze, dania jednogarnkowe, coś ciepłego do picia. Czyli dokładnie ta rodzina dań, którą gotuje się z ustawioną temperaturą i mieszaniem, bez stania przy garnku. Nastawiacie rano, przelewacie i wychodzicie.",
        "Co się w termosie sprawdza gorzej, żeby było uczciwie: wszystko, co ma zostać chrupiące albo osobno. Panierka zmięknie, makaron się rozklei, sałata zwiędnie. Termos jest naczyniem do rzeczy mokrych i gorących i lepiej z nim nie walczyć.",
        "A teraz zdanie najważniejsze na tej stronie i jedyne, przy którym nie ustąpię: nie doradzę Wam, jak długo jedzenie może stać w termosie ani w jakiej temperaturze. To jest dziedzina bezpieczeństwa żywności, przy jedzeniu wożonym cały dzień naprawdę nie błaha, a ja jestem przedstawicielką handlową, nie technologiem. Po tę wiedzę idźcie do rzetelnego źródła — nie do osoby, która sprzedaje sprzęt.",
        "I skala, jak zawsze: same wycieczki nie są powodem, żeby kupować urządzenie tej klasy. Są powodem, żeby nie musieć wybierać między kanapką a niczym.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Daleszycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli często wyjeżdżacie na cały dzień, powiedzcie to przy umawianiu — zrobimy coś gęstego i gorącego, czyli dokładnie to, co się do termosu nadaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Daleszycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla daleszyckiej rodziny",
      paragraphs: [
        "Daleszyce liczą nieco ponad dwa tysiące siedemset mieszkańców. Prawa miejskie dostały w 1569 roku od biskupa Filipa Padniewskiego, straciły je w 1865 i odzyskały dopiero z początkiem 2007 roku. Oprócz zakładu liofilizacji pracuje tu przetwórstwo mięsa, a zalew w Borkowie, w tej samej gminie, jest jednym z najpopularniejszych kąpielisk w województwie.",
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

  districtsHeading: "Do których części Daleszyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Borkowa, Sierakowa, Niestachowa, Mójczy i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Daleszyce też przyjadę",
  nearbyParagraphs: [
    "Kielce, Morawica, Chmielnik, Łagów, Raków i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kielce", "Morawica", "Chmielnik", "Łagów", "Bodzentyn", "Staszów"],

  about: blokOMnie("do Daleszyc", "w Daleszycach i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Daleszyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Daleszycach"),
    {
      question: "Czy urządzenie zrobi jedzenie liofilizowane, takie jak na wyprawy?",
      answer:
        "Nie. Liofilizacja to proces przemysłowy — mrożenie w bardzo niskiej temperaturze i odciąganie wody pod próżnią, w maszynach wielkości pokoju. Żadne urządzenie kuchenne tego nie robi. Na wycieczkę jednodniową nie ma to jednak znaczenia: tam wystarczy termos, a do termosu najlepiej nadają się rzeczy gęste i gorące, czyli akurat to, co w tym urządzeniu gotuje się bez pilnowania.",
    },
    {
      question: "Jak długo jedzenie może stać w termosie?",
      answer:
        "Tego nie doradzę i przy tym pytaniu nie ustąpię. To jest dziedzina bezpieczeństwa żywności, przy jedzeniu wożonym cały dzień naprawdę nie błaha, a ja jestem przedstawicielką handlową, nie technologiem żywności. Mogę powiedzieć tylko, co się w termosie sprawdza pod względem konsystencji: rzeczy gęste i gorące tak, panierka i makaron — nie.",
    },
  ],

  geo: { lat: 50.7994, lng: 20.8078 },
};
