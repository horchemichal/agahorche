import { NextResponse } from "next/server";
import { z } from "zod";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";

/**
 * Inbound webhook FROM n8n for content-related automation (spec §35/§36):
 * "Social media → n8n → AI → blog → SEO". n8n posts a structured content
 * draft here; it is ALWAYS staged as `status: "draft"` — never
 * auto-published (spec §34). An admin publishes it from /admin/blog after
 * review.
 */
const CATEGORY_VALUES = [
  "thermomix", "tm7", "tm6", "gotowanie", "dla-rodzin", "dla-mam",
  "dla-poczatkujacych", "porady", "prezentacja", "zakup", "finansowanie",
  "przepisy", "aga-club", "lokalne",
] as const;

const CLUSTER_VALUES = [
  "tm7", "prezentacja", "zakup", "gotowanie", "dla-rodziny", "dla-mam",
  "thermomix-miasto", "aga-club",
] as const;

const payloadSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().default(""),
  content: z.string().default(""),
  category: z.enum(CATEGORY_VALUES),
  cluster: z.enum(CLUSTER_VALUES).default("thermomix-miasto"),
  relatedLocationSlug: z.string().optional(),
});

export async function POST(request: Request) {
  const secret = request.headers.get("x-n8n-secret");
  if (!process.env.N8N_INBOUND_SECRET || secret !== process.env.N8N_INBOUND_SECRET) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "Invalid payload", issues: parsed.error.issues }, { status: 422 });
  }

  const draft = await getBlogRepository().create(
    {
      slug: parsed.data.slug,
      title: parsed.data.title,
      excerpt: parsed.data.excerpt,
      content: parsed.data.content,
      category: parsed.data.category,
      cluster: parsed.data.cluster,
      relatedLocationSlug: parsed.data.relatedLocationSlug,
      author: "aga-horche",
      status: "draft",
      indexable: false,
      seoTitle: null,
      seoDescription: null,
      scheduledFor: null,
    },
    "n8n",
  );

  return NextResponse.json({ success: true, id: draft.id, status: draft.status });
}
