import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo opolskie — piąty region poza Małopolską (wrzesień 2026,
 * polecenie Michała: „teraz opolskie i łódzkie", po zamknięciu czwórki
 * śląskie–podkarpackie–świętokrzyskie–lubelskie).
 *
 * DLACZEGO OPOLSKIE. Bo przylega bezpośrednio do śląskiego, dla którego
 * strony już mamy, i jest najmniejszym województwem w Polsce — cały region
 * mieści się w promieniu, który na Podkarpaciu obejmuje jeden powiat.
 * Z Kędzierzyna do Raciborza jedzie się krócej niż z Katowic do Gliwic.
 * Dla tras oznacza to coś, czego nie ma nigdzie indziej: TU NAPRAWDĘ DA SIĘ
 * ZROBIĆ KILKA SPOTKAŃ W JEDEN DZIEŃ i nie jest to obietnica na wyrost.
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH — i dlaczego strony muszą to
 * uwzględniać. Opolskie ma dwie cechy, których nie ma żadne z czterech
 * wcześniejszych województw. Po pierwsze: mniejszość niemiecka, dwujęzyczne
 * tablice i żywa śląska tożsamość w gminach na wschód od Opola. Po drugie,
 * i to jest ważniejsze dla treści: to region, z którego bardzo wiele osób
 * wyjechało do pracy za granicę. W praktyce znaczy to domy, w których
 * jedno miejsce przy stole jest puste przez większość roku — i to jest kąt,
 * którego nie da się użyć nigdzie indziej tak uczciwie jak tutaj.
 *
 * CZEGO W TREŚCIACH NIE ROBIMY. Nie piszemy o tożsamości narodowej,
 * o polityce ani o historii 1945 roku inaczej niż jednym rzeczowym zdaniem,
 * gdy jest potrzebne. To jest strona o gotowaniu, a nie o Śląsku Opolskim,
 * i nie mam kompetencji, żeby opowiadać ludziom o nich samych.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną. Flaga `indexable` wynika z tego,
 * czy dla sluga istnieje wpis w `city-content`.
 */
function miastoOpolskie(input: {
  name: string;
  slug: string;
  population: number;
  neighborSlugs?: string[];
  largerCitySlug?: string;
}): Location {
  const now = "2026-09-06T00:00:00.000Z";
  const maTresc = CITIES_WITH_CONTENT.includes(input.slug);
  return {
    locationId: `miasto-${input.slug}`,
    name: input.name,
    slug: input.slug,
    unitType: "miasto",
    wojewodztwoSlug: "opolskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Śląsk Opolski",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    /*
     * Za lubelskim (24). Najmniejsze województwo w Polsce, więc rynek jest
     * niewielki — ale leży tuż przy konurbacji, w której już pracujemy,
     * i dojazd jest tu tani czasowo. Dlatego nie spada niżej.
     */
    seoPriority: 26,
    tier: "B",
    seo: maTresc
      ? { indexable: true, inSitemap: true, contentStatus: "published" as const }
      : { indexable: false, inSitemap: false, contentStatus: "draft" as const },
    urlPath: `/thermomix/${input.slug}`,
    createdAt: now,
    updatedAt: now,
  };
}

/*
 * DWÓCH MIAST TU NIE MA I OBA POWODY SĄ TECHNICZNE.
 *
 * OPOLE siedzi już w `miasta.ts` jako część ogólnopolskiej próbki i ma tam
 * tę samą regułę indeksowania. Drugi wiersz o tym samym `locationId`
 * oznaczałby miasto pokazujące się dwa razy na listach i w sitemapie.
 * To już piąty raz ta sama historia — po Katowicach, Rzeszowie, Kielcach
 * i Lublinie.
 *
 * OLESNA (opolskiego) nie ma, bo slug `olesno` zajmuje wdrożona już gmina
 * Olesno w powiecie dąbrowskim, w Małopolsce. Dokładnie ten sam problem
 * co ze świętokrzyskim Osiekiem. Gdyby opolskie Olesno miało kiedyś dostać
 * stronę, musi wejść pod innym slugiem — i wtedy trzeba świadomie
 * zdecydować, jak to pogodzić z tym, co ludzie wpisują w wyszukiwarkę.
 */
export const OPOLSKIE_AGI: Location[] = [
  // ——— Największe miasta regionu ———
  miastoOpolskie({
    name: "Kędzierzyn-Koźle",
    slug: "kedzierzyn-kozle",
    population: 58_000,
    neighborSlugs: ["zdzieszowice", "krapkowice", "ujazd", "raciborz", "glogowek"],
  }),
  miastoOpolskie({
    name: "Nysa",
    slug: "nysa",
    population: 43_000,
    neighborSlugs: ["otmuchow", "paczkow", "glucholazy", "korfantow", "grodkow"],
  }),
  miastoOpolskie({
    name: "Brzeg",
    slug: "brzeg",
    population: 35_000,
    neighborSlugs: ["lewin-brzeski", "grodkow", "niemodlin"],
  }),
  miastoOpolskie({
    name: "Kluczbork",
    slug: "kluczbork",
    population: 23_000,
    neighborSlugs: ["wolczyn", "byczyna", "praszka", "namyslow"],
  }),
  miastoOpolskie({
    name: "Prudnik",
    slug: "prudnik",
    population: 20_000,
    neighborSlugs: ["glogowek", "biala-opolska", "korfantow", "glucholazy"],
  }),
  miastoOpolskie({
    name: "Strzelce Opolskie",
    slug: "strzelce-opolskie",
    population: 18_000,
    neighborSlugs: ["zawadzkie", "lesnica", "ujazd", "kolonowskie", "gogolin"],
  }),
  miastoOpolskie({
    name: "Krapkowice",
    slug: "krapkowice",
    population: 16_000,
    neighborSlugs: ["gogolin", "zdzieszowice", "proszkow", "glogowek"],
  }),
  miastoOpolskie({
    name: "Namysłów",
    slug: "namyslow",
    population: 16_000,
    neighborSlugs: ["wolczyn", "kluczbork", "brzeg"],
  }),
  miastoOpolskie({
    name: "Głuchołazy",
    slug: "glucholazy",
    population: 13_000,
    neighborSlugs: ["nysa", "prudnik", "otmuchow"],
  }),
  miastoOpolskie({
    name: "Głubczyce",
    slug: "glubczyce",
    population: 12_000,
    neighborSlugs: ["baborow", "kietrz", "prudnik", "glogowek"],
  }),
  miastoOpolskie({
    name: "Zdzieszowice",
    slug: "zdzieszowice",
    population: 11_000,
    neighborSlugs: ["krapkowice", "gogolin", "lesnica", "kedzierzyn-kozle"],
  }),

  // ——— Miasta powiatowe i mniejsze ośrodki ———
  miastoOpolskie({
    name: "Ozimek",
    slug: "ozimek",
    population: 8_500,
    neighborSlugs: ["kolonowskie", "dobrodzien", "strzelce-opolskie"],
    largerCitySlug: "opole",
  }),
  miastoOpolskie({
    name: "Grodków",
    slug: "grodkow",
    population: 8_500,
    neighborSlugs: ["brzeg", "niemodlin", "nysa", "lewin-brzeski"],
  }),
  miastoOpolskie({
    name: "Paczków",
    slug: "paczkow",
    population: 7_500,
    neighborSlugs: ["otmuchow", "nysa"],
  }),
  miastoOpolskie({
    name: "Praszka",
    slug: "praszka",
    population: 7_500,
    neighborSlugs: ["kluczbork", "byczyna", "wielun"],
  }),
  miastoOpolskie({
    name: "Zawadzkie",
    slug: "zawadzkie",
    population: 7_000,
    neighborSlugs: ["strzelce-opolskie", "kolonowskie", "dobrodzien"],
  }),
  miastoOpolskie({
    name: "Gogolin",
    slug: "gogolin",
    population: 6_600,
    neighborSlugs: ["krapkowice", "zdzieszowice", "strzelce-opolskie", "proszkow"],
  }),
  miastoOpolskie({
    name: "Otmuchów",
    slug: "otmuchow",
    population: 6_400,
    neighborSlugs: ["nysa", "paczkow", "glucholazy"],
  }),
  miastoOpolskie({
    name: "Niemodlin",
    slug: "niemodlin",
    population: 6_400,
    neighborSlugs: ["grodkow", "tulowice", "brzeg"],
    largerCitySlug: "opole",
  }),
  miastoOpolskie({
    name: "Kietrz",
    slug: "kietrz",
    population: 5_900,
    neighborSlugs: ["glubczyce", "baborow", "raciborz"],
  }),
  miastoOpolskie({
    name: "Wołczyn",
    slug: "wolczyn",
    population: 5_700,
    neighborSlugs: ["kluczbork", "namyslow", "byczyna"],
  }),
  miastoOpolskie({
    name: "Lewin Brzeski",
    slug: "lewin-brzeski",
    population: 5_700,
    neighborSlugs: ["brzeg", "grodkow", "niemodlin"],
  }),
  miastoOpolskie({
    name: "Głogówek",
    slug: "glogowek",
    population: 5_500,
    neighborSlugs: ["prudnik", "biala-opolska", "krapkowice", "glubczyce"],
  }),
  miastoOpolskie({
    name: "Tułowice",
    slug: "tulowice",
    population: 3_800,
    neighborSlugs: ["niemodlin", "grodkow"],
  }),
  miastoOpolskie({
    name: "Dobrodzień",
    slug: "dobrodzien",
    population: 3_700,
    neighborSlugs: ["ozimek", "zawadzkie", "kolonowskie"],
  }),
  miastoOpolskie({
    name: "Byczyna",
    slug: "byczyna",
    population: 3_500,
    neighborSlugs: ["kluczbork", "wolczyn", "praszka"],
  }),
  miastoOpolskie({
    name: "Kolonowskie",
    slug: "kolonowskie",
    population: 3_300,
    neighborSlugs: ["ozimek", "zawadzkie", "strzelce-opolskie"],
  }),
  miastoOpolskie({
    name: "Baborów",
    slug: "baborow",
    population: 2_900,
    neighborSlugs: ["glubczyce", "kietrz"],
  }),
  miastoOpolskie({
    name: "Prószków",
    slug: "proszkow",
    population: 2_700,
    neighborSlugs: ["krapkowice", "gogolin", "tulowice"],
    largerCitySlug: "opole",
  }),
  miastoOpolskie({
    name: "Leśnica",
    slug: "lesnica",
    population: 2_600,
    neighborSlugs: ["strzelce-opolskie", "zdzieszowice", "ujazd"],
  }),
  /*
   * BIAŁA ma slug `biala-opolska`, choć sam `biala` jest wolny — i to jest
   * decyzja, nie pomyłka. Oficjalna nazwa miasta to samo „Biała", ale
   * w Polsce są jeszcze Biała Podlaska, Biała Rawska i Bielsko-Biała,
   * więc adres `/thermomix/biala` nie mówiłby nikomu, o które miasto chodzi
   * — ani czytelnikowi, ani wyszukiwarce. Potocznie mówi się zresztą
   * „Biała Opolska" i tak też ludzie szukają.
   */
  miastoOpolskie({
    name: "Biała",
    slug: "biala-opolska",
    population: 2_500,
    neighborSlugs: ["prudnik", "glogowek", "korfantow"],
  }),
  miastoOpolskie({
    name: "Korfantów",
    slug: "korfantow",
    population: 1_800,
    neighborSlugs: ["nysa", "prudnik", "biala-opolska"],
  }),
  miastoOpolskie({
    name: "Ujazd",
    slug: "ujazd",
    population: 1_600,
    neighborSlugs: ["strzelce-opolskie", "lesnica", "kedzierzyn-kozle"],
  }),
];
