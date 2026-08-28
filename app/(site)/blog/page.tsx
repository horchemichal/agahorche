import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { getBlogCategoriesRepository } from "@/lib/database/repositories/blog-categories-repository";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge, Card } from "@/components/ui/card";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Thermomix, gotowanie, porady",
  description: "Artykuły o Thermomixie, gotowaniu i prezentacjach — praktyczna wiedza od Agi.",
  path: "/blog",
});

export default async function BlogIndexPage() {
  const [posts, categories] = await Promise.all([
    getBlogRepository().listPublished(),
    getBlogCategoriesRepository().list(),
  ]);

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="lg">
          Blog
        </Heading>
        <Lead className="mt-4 max-w-xl">
          Praktyczna wiedza o Thermomixie, gotowaniu i organizacji kuchni.
        </Lead>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/blog/kategoria/${cat.slug}`}>
              <Badge tone="neutral">{cat.label}</Badge>
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="mt-10 text-sm text-muted">
            Pierwsze artykuły pojawią się wkrótce — struktura kategorii i klastrów tematycznych
            jest już gotowa. Artykuły dodaje się w Aga Admin → Blog.
          </p>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full transition-shadow hover:shadow-none">
                  <h2 className="mb-1.5 font-semibold text-neutral-900">{post.title}</h2>
                  <p className="text-sm text-muted">{post.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
