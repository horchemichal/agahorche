import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { getBlogCategoriesRepository } from "@/lib/database/repositories/blog-categories-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { PostDeleteButton } from "./post-delete-button";

export const metadata: Metadata = {
  title: "Blog — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminBlogPage() {
  await requireAdmin();
  const [posts, categories] = await Promise.all([getBlogRepository().list(), getBlogCategoriesRepository().list()]);
  const categoryLabel = new Map(categories.map((c) => [c.slug, c.label]));
  const sorted = [...posts].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  return (
    <>
      <PanelHeader
        title="Blog"
        description="Artykuły content hubu — kategorie i klastry SEO zasilają linkowanie wewnętrzne."
        action={
          <div className="flex gap-2">
            <ButtonLink href="/admin/blog/kategorie" variant="outline">
              Kategorie
            </ButtonLink>
            <ButtonLink href="/admin/blog/nowy">Dodaj artykuł</ButtonLink>
          </div>
        }
      />

      {sorted.length === 0 ? (
        <EmptyState
          title="Brak artykułów"
          description="Dodaj pierwszy artykuł ręcznie albo poprzez integrację n8n → AI (/api/n8n/content)."
          action={<ButtonLink href="/admin/blog/nowy">Dodaj artykuł</ButtonLink>}
        />
      ) : (
        <div className="space-y-2.5">
          {sorted.map((post) => (
            <Card key={post.id} className="flex flex-wrap items-center justify-between gap-4 !p-4">
              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Link href={`/admin/blog/${post.id}`} className="font-medium text-neutral-900 hover:underline">
                    {post.title}
                  </Link>
                  <Badge tone={post.status === "published" ? "brand" : "neutral"}>
                    {post.status === "published" ? "Opublikowany" : "Szkic"}
                  </Badge>
                  <Badge tone="neutral">{categoryLabel.get(post.category) ?? post.category}</Badge>
                </div>
                <p className="text-sm text-muted">/blog/{post.slug}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                {post.status === "published" && (
                  <ButtonLink href={`/blog/${post.slug}`} variant="ghost" size="md" className="h-9 px-3.5 text-sm">
                    Podgląd
                  </ButtonLink>
                )}
                <ButtonLink href={`/admin/blog/${post.id}`} variant="outline" size="md" className="h-9 px-3.5 text-sm">
                  Edytuj
                </ButtonLink>
                <PostDeleteButton id={post.id} title={post.title} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
