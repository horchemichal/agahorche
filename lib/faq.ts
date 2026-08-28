import { getFaqRepository, toFaqItem } from "@/lib/database/repositories/faq-repository";
import type { FaqItem } from "@/types/seo";

/** Global, site-wide FAQ — managed from Aga Admin → FAQ (entityType "global"). */
export async function getGlobalFaq(): Promise<FaqItem[]> {
  const entries = await getFaqRepository().listForEntity("global", null);
  return entries.map(toFaqItem);
}
