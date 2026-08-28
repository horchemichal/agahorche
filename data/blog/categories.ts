import type { BlogCategory } from "@/types/blog";

export const BLOG_CATEGORIES: { slug: BlogCategory; label: string }[] = [
  { slug: "thermomix", label: "Thermomix" },
  { slug: "tm7", label: "TM7" },
  { slug: "tm6", label: "TM6" },
  { slug: "gotowanie", label: "Gotowanie" },
  { slug: "dla-rodzin", label: "Dla rodzin" },
  { slug: "dla-mam", label: "Dla mam" },
  { slug: "dla-poczatkujacych", label: "Dla początkujących" },
  { slug: "porady", label: "Porady" },
  { slug: "prezentacja", label: "Prezentacja" },
  { slug: "zakup", label: "Zakup" },
  { slug: "finansowanie", label: "Finansowanie" },
  { slug: "przepisy", label: "Przepisy" },
  { slug: "aga-club", label: "Aga Club" },
  { slug: "lokalne", label: "Lokalne" },
];
