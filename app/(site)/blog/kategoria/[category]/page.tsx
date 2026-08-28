import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { BLOG_CATEGORIES } from "@/data/blog/categories";
import { getBlogCategoriesRepository } from "@/lib/database/repositories/blog-categories-repository";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const found = BLOG_CATEGORIES.find((c) => c.slug === category);
  if (!found) return {};

  return buildMetadata({
    title: `${found.label} — blog`,
    description: `Artykuły z kategorii ${found.label} na blogu Agi Horche.`,
    path: `/blog/kategoria/${category}`,
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const categories = await getBlogCategoriesRepository().list();
  const found = categories.find((c) => c.slug === category);
  if (!found) notFound();

  const posts = (await getBlogRepository().listPublished()).filter((p) => p.category === found.slug);

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Blog", path: "/blog" },
            { name: found.label, path: `/blog/kategoria/${found.slug}` },
          ]}
        />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="lg">
          {found.label}
        </Heading>
        {posts.length === 0 ? (
          <p className="mt-6 text-sm text-muted">Artykuły z tej kategorii pojawią się wkrótce.</p>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
