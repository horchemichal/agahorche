import type { MetadataRoute } from "next";
import { SITE, normalizujDate } from "@/lib/utils";
import { getIndexableLocations } from "@/lib/locations";
import { DISTRICT_CONTENT } from "@/data/locations/districts";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { getPagesRepository } from "@/lib/database/repositories/pages-repository";
import { getSeoSettingsRepository } from "@/lib/database/repositories/seo-settings-repository";

/**
 * Dynamic sitemap (spec §27, Aga Admin §12). Composed from four sources —
 * static routes, the location engine, the blog repository, and CMS pages —
 * and filters strictly on `indexable`/`status` flags so nothing noindex,
 * unbuilt, or thin ever lands in the sitemap. As locations/posts/pages are
 * promoted to indexable/published in Aga Admin, they appear here
 * automatically. Respects the global "Wyłącz sitemapę" kill switch in
 * /admin/seo.
 */

/**
 * Generowana przy żądaniu, nie w trakcie builda — z tego samego powodu co
 * `force-dynamic` w app/(site)/layout.tsx: obraz Dockera budowany bez
 * dostępu do bazy zamroziłby tu nieaktualną listę adresów.
 */
export const dynamic = "force-dynamic";

/**
 * Data ostatniej zmiany treści pisanej ręcznie — dla tras statycznych
 * i stron dzielnic, które nie mają własnego `updatedAt` w bazie.
 *
 * DLACZEGO STAŁA, A NIE `new Date()`. Sitemapa jest `force-dynamic`, więc
 * `new Date()` dawało w `<lastmod>` moment odpytania: przy każdym crawlu
 * siedemdziesiąt kilka adresów deklarowało „zmienione przed chwilą”, choć
 * nie zmieniło się od tygodni. Google traktuje `lastmod` jako sygnał
 * zaufany dopóki jest wiarygodny — a witryna, na której wszystko zawsze
 * jest świeże, uczy go, że `lastmod` można tu ignorować. Traciły na tym
 * także strony miast, które mają w bazie prawdziwe `updatedAt`.
 *
 * KOSZT: trzeba tę datę podbić, kiedy zmienia się treść stron statycznych
 * albo dzielnic. Lepsze to niż sygnał, który kłamie przy każdym crawlu.
 */
const TRESC_ZAKTUALIZOWANA = new Date("2026-08-31T00:00:00Z");

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/thermomix", priority: 0.9, changeFrequency: "weekly" },
  { path: "/thermomix/tm7", priority: 0.8, changeFrequency: "monthly" },
  { path: "/thermomix/tm6", priority: 0.65, changeFrequency: "monthly" },
  { path: "/thermomix/tm7-vs-tm6", priority: 0.8, changeFrequency: "monthly" },
  { path: "/thermomix/wady-i-zalety", priority: 0.7, changeFrequency: "monthly" },
  { path: "/thermomix/funkcje", priority: 0.7, changeFrequency: "monthly" },
  { path: "/thermomix/dla-rodziny", priority: 0.6, changeFrequency: "monthly" },
  { path: "/thermomix/dla-mamy", priority: 0.6, changeFrequency: "monthly" },
  { path: "/thermomix/dla-poczatkujacych", priority: 0.6, changeFrequency: "monthly" },
  { path: "/diety", priority: 0.8, changeFrequency: "weekly" },
  // Wyszukiwarka „Co ugotować dzisiaj?" — celuje we frazy typu „szybki obiad
  // thermomix", „co ugotować w 20 minut", więc trafia wysoko, nie na koniec.
  { path: "/przepisy", priority: 0.7, changeFrequency: "weekly" },
  { path: "/przepisy/co-mam-w-lodowce", priority: 0.7, changeFrequency: "weekly" },
  { path: "/poradnik", priority: 0.65, changeFrequency: "weekly" },
  { path: "/diety/keto", priority: 0.6, changeFrequency: "monthly" },
  { path: "/diety/wegetarianska", priority: 0.6, changeFrequency: "monthly" },
  { path: "/diety/odchudzajaca", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/niski-ig", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/hashimoto", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/zamienniki", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/bezglutenowa", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/dla-dzieci", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/kobiety-karmiace", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/niemowleta", priority: 0.45, changeFrequency: "monthly" },
  { path: "/prezentacja", priority: 0.9, changeFrequency: "weekly" },
  { path: "/prezentacja/jak-wyglada", priority: 0.75, changeFrequency: "monthly" },
  { path: "/prezentacja/w-domu", priority: 0.7, changeFrequency: "monthly" },
  { path: "/jak-kupic-thermomix", priority: 0.7, changeFrequency: "monthly" },
  { path: "/finansowanie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/akcesoria", priority: 0.6, changeFrequency: "monthly" },
  { path: "/o-mnie", priority: 0.6, changeFrequency: "monthly" },
  { path: "/opinie", priority: 0.5, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.5, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/aga-club", priority: 0.7, changeFrequency: "weekly" },
  { path: "/aga-club/30-dni-z-aga", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/miasta", priority: 0.6, changeFrequency: "weekly" },
  { path: "/wojewodztwa", priority: 0.6, changeFrequency: "weekly" },
  /*
   * Polityka prywatności — niski priorytet, bo to nie jest strona, po którą
   * ktoś przychodzi z wyszukiwarki. W mapie jest mimo to celowo: Google
   * traktuje jej obecność jako sygnał wiarygodności serwisu zbierającego
   * dane, a jej brak przy formularzu kontaktowym bywa odczytywany odwrotnie.
   */
  { path: "/polityka-prywatnosci", priority: 0.2, changeFrequency: "yearly" },
];

/**
 * `updatedAt` przychodzi z repozytoriów jako surowy string z Postgresa
 * ("2026-08-25 15:51:41.548993+00"), a nie jako ISO 8601. Next wstawia go
 * do <lastmod> dosłownie, przez co Google Search Console raportowało
 * "Nieprawidłowa data" dla 43 z 96 adresów (28.08.2026) — spacja zamiast "T"
 * i offset "+00" zamiast "+00:00".
 *
 * Sama normalizacja mieszka w lib/utils.ts — od 4.09.2026 dzieli ją
 * z schematem Article, w którym ten sam surowy string powodował ten sam
 * błąd. Tutaj zostaje wyłącznie decyzja, co zrobić z datą nieparsowalną:
 * podać datę budowania, a nie wysłać Google'owi śmiecia.
 */
function toSitemapDate(value: unknown, fallback: Date): Date {
  return normalizujDate(value) ?? fallback;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await getSeoSettingsRepository().get();
  if (!settings.sitemapEnabled) return [];

  const now = new Date();

  const [indexableLocations, publishedPosts, publishedPages] = await Promise.all([
    getIndexableLocations(),
    getBlogRepository().listPublished(),
    getPagesRepository().list(),
  ]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: TRESC_ZAKTUALIZOWANA,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const locationEntries: MetadataRoute.Sitemap = indexableLocations.map((location) => ({
    url: `${SITE.url}${location.urlPath}`,
    lastModified: toSitemapDate(location.updatedAt, now),
    changeFrequency: "monthly",
    priority: location.tier === "A" ? 0.7 : location.tier === "B" ? 0.55 : 0.4,
  }));

  /**
   * Dzielnice nie przechodzą przez `getIndexableLocations()`, bo nie mają
   * wierszy w tabeli lokalizacji (patrz komentarz w routingu). Każda ma
   * ręcznie napisaną treść — inaczej nie trafiłaby do `DISTRICT_CONTENT` —
   * więc wszystkie wchodzą do sitemapy. Priorytet niższy niż miasta:
   * to strony wspierające, a nie docelowe.
   */
  const districtEntries: MetadataRoute.Sitemap = DISTRICT_CONTENT.map((district) => ({
    url: `${SITE.url}${district.urlPath}`,
    lastModified: TRESC_ZAKTUALIZOWANA,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const blogEntries: MetadataRoute.Sitemap = publishedPosts
    .filter((p) => p.indexable)
    .map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: toSitemapDate(post.updatedAt, now),
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  const pageEntries: MetadataRoute.Sitemap = publishedPages
    .filter((p) => p.status === "published" && p.indexable)
    .map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified: toSitemapDate(page.updatedAt, now),
      changeFrequency: "monthly",
      priority: 0.4,
    }));

  /*
   * PORADNIK POZA SITEMAPĄ (4.09.2026, po południu).
   *
   * Rano dołożyłem tu 8 stron działów i 123 wpisy — sitemapa miała
   * z poradnika dokładnie jeden adres, a treść była dla Google
   * odkrywalna wyłącznie przez linki wewnętrzne.
   *
   * Po południu Aga zdecydowała, że poradnik jest częścią Aga Club
   * i „dalej niż /poradnik nie można wejść" bez logowania. Strony działów
   * i wpisów przekierowują teraz gościa na /poradnik — patrz
   * app/(site)/poradnik/[dzial]/page.tsx.
   *
   * Adres, który dla Googlebota jest przekierowaniem, nie ma czego szukać
   * w sitemapie: zgłaszalibyśmy do indeksu 131 stron, których robot i tak
   * nie przeczyta. Zostaje sam `/poradnik` (w `staticEntries` wyżej) —
   * ta strona dalej ma treść: wstęp, nazwy działów, opisy i liczby wpisów.
   *
   * Gdyby poradnik kiedyś wrócił do publicznego dostępu, wystarczy
   * przywrócić te dwie listy z historii tego pliku.
   */

  return [
    ...staticEntries,
    ...locationEntries,
    ...districtEntries,
    ...blogEntries,
    ...pageEntries,
  ];
}
