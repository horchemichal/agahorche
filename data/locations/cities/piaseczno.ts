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
 * PIASECZNO — miasto na południe od Warszawy, z zabytkową kolejką
 * wąskotorową, która dziś wozi już tylko dla przyjemności.
 *
 * KĄT: kupowanie w prezencie. To jest jedyne miejsce w serwisie na temat
 * całkowicie przemilczany, a bardzo częsty: THERMOMIX KUPOWANY KOMUŚ
 * INNEMU — mamie, żonie, córce, na ślub albo na okrągłą rocznicę.
 *
 * SEKCJA MA MIEĆ WYRAŹNĄ, NIEWYGODNĄ TEZĘ: to bywa piękny prezent
 * i bywa prezentem fatalnym, a różnica jest przewidywalna. Fatalny jest
 * wtedy, gdy obdarowana nie wiedziała o zakupie i gdy prezent w istocie
 * mówi „gotuj więcej". Dobry jest wtedy, gdy ona sama o tym myślała.
 *
 * KONKRETNA RADA, KTÓRA MUSI PAŚĆ: przy takim wydatku lepszy jest udział
 * obdarowanej w decyzji niż niespodzianka — a jeśli niespodzianka ma być,
 * to niech dotyczy tego, że ktoś dołożył się do zakupu, a nie tego,
 * co stanie na blacie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Piasecznie działa zabytkowa kolejka wąskotorowa, dziś turystyczna.
 */
export const PIASECZNO: CityContent = {
  slug: "piaseczno",
  h1: "Thermomix Piaseczno – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Piaseczno — prezentacja i cena",
  seoDescription:
    "Thermomix w Piasecznie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piaseczno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Piasecznie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Piaseczna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Piaseczno i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Drożdżowa plecionka z kruszonką przygotowana z ciasta wyrobionego w Thermomixie",
    caption: "Ciasto drożdżowe wyrabia się samo — to jedna z rzeczy, które najłatwiej sprawdzić na miejscu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piasecznie – jak wygląda prezentacja?",
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
      id: "w-prezencie",
      heading: "Kupuję to komuś w prezencie — kiedy to dobry pomysł, a kiedy fatalny",
      paragraphs: [
        "W Piasecznie stoi kolejka, która od dawna nie wozi niczego pożytecznego i wozi ludzi dla przyjemności. Prezenty bywają podobne: sensowne wtedy, gdy sprawiają komuś radość, a nie wtedy, gdy sprawiają wrażenie pożytecznych. Dlatego chcę tu napisać o czymś, o czym rozmawiam z klientami bardzo często, a czego nie ma w żadnym folderze: o kupowaniu tego urządzenia komuś innemu.",
        "Zacznę od przypadku fatalnego, bo widzę go regularnie. Ktoś kupuje Thermomixa żonie albo mamie w niespodziance, na urodziny, bez jej wiedzy. Obdarowana rozpakowuje, dziękuje, a po miesiącu urządzenie stoi nieużywane. Powodów są dwa i oba są zrozumiałe. Po pierwsze: prezent w postaci sprzętu do pracy, której i tak wykonuje najwięcej, potrafi zabrzmieć jak „gotuj więcej”, nawet jeśli ofiarodawca myślał dokładnie odwrotnie. Po drugie: to jest sprzęt, którego trzeba się nauczyć, a nauka narzucona z zewnątrz idzie źle.",
        "A teraz przypadek, w którym jest to prezent naprawdę dobry i takich też mam sporo. Ona o tym mówiła. Zaglądała, pytała, może była na czyjejś prezentacji. Wtedy kupienie jej tego — albo dołożenie się rodziny do zakupu — jest zdjęciem z niej decyzji o wydatku, a nie narzuceniem sprzętu. To jest zupełnie inna sytuacja i kończy się zupełnie inaczej.",
        "Stąd moja rada, która brzmi antyprezentowo, ale jest szczera: przy wydatku tego rzędu lepiej, żeby obdarowana brała udział w decyzji. Niespodzianką niech będzie to, że ktoś za to płaci, a nie to, co stanie na blacie.",
        "Praktycznie da się to zrobić w dwóch krokach. Umawiamy prezentację normalnie, we dwoje albo w większym gronie, i ona sama gotuje. Jeśli po spotkaniu powie, że chce — kupujecie, a Wy zostajecie z rolą tych, którzy sfinansowali. Jeśli powie, że nie — zaoszczędziliście sobie prezentu, który stałby w piwnicy, i nic Was to nie kosztowało.",
        "Na ślub działa to tak samo, z jedną różnicą: warto zapytać parę wcześniej, czy w ogóle gotują. Piękny sprzęt w domu, w którym je się na mieście, jest tylko pięknym sprzętem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piasecznie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli myślisz o prezencie, powiedz to od razu — poprowadzę spotkanie tak, żeby osoba obdarowana sama gotowała i sama się wypowiedziała.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piasecznie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla piaseczyńskiej rodziny",
      paragraphs: [
        "Gdy dorośli dojeżdżają do pracy, dzień kończy się po powrocie, a obiad przygotowuje zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla całego domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Piaseczna i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Zalesie Dolne",
    "Zalesie Górne",
    "Józefosław",
    "Julianów",
    "Głosków",
    "Chylice",
    "Jazgarzew",
    "Runów",
    "Bobrowiec",
  ],

  nearbyHeading: "Poza Piaseczno też przyjadę",
  nearbyParagraphs: [
    "Konstancin-Jeziorna, Góra Kalwaria, Tarczyn i Józefów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Konstancin-Jeziorna", "Góra Kalwaria", "Tarczyn", "Józefów", "Grójec"],

  about: blokOMnie("do Piaseczna", "w Piasecznie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Piaseczna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Piasecznie"),
    {
      question: "Chcę kupić Thermomix żonie w niespodziance. Dobry pomysł?",
      answer:
        "Zwykle nie i mówię to wprost. Sprzęt do pracy, której ona i tak wykonuje najwięcej, potrafi zabrzmieć jak „gotuj więcej”, choćbyś myślał dokładnie odwrotnie — a nauki obsługi narzuconej z zewnątrz nikt nie lubi. Lepiej, żeby brała udział w decyzji, a niespodzianką było to, że Ty za to płacisz.",
    },
    {
      question: "Jak to ugryźć, żeby wyszło dobrze?",
      answer:
        "W dwóch krokach: umawiamy prezentację, na której to ona gotuje i sama się wypowiada. Powie „chcę” — kupujecie, a Ty zostajesz z rolą tego, kto sfinansował. Powie „nie” — oszczędziłeś sobie prezentu, który stałby w piwnicy, i nic Cię to nie kosztowało.",
    },
  ],

  geo: { lat: 52.0810, lng: 21.0236 },
};
