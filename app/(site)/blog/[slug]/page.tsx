import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { getLocationById } from "@/lib/locations";
import { blogRelatedLinks } from "@/lib/seo/internal-linking";
import { articleSchema } from "@/lib/seo/schema";
import { JsonLdScript } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { SimpleContent } from "@/components/ui/simple-content";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Bez generateStaticParams — wpisy bloga renderują się na żądanie z bazy;
 * patrz komentarz przy `force-dynamic` w app/(site)/layout.tsx.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogRepository().getBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    robots: post.indexable && post.status === "published" ? "index,follow" : "noindex,follow",
    ogType: "article",
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    ogImage: post.coverImage,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogRepository().getBySlug(slug);
  if (!post || post.status !== "published") notFound();

  const relatedLocation = post.relatedLocationSlug ? await getLocationById(post.relatedLocationSlug) : null;
  const links = blogRelatedLinks(relatedLocation ?? null);

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]}
        />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="lg">
          {post.title}
        </Heading>
        <p className="mt-4 text-muted">{post.excerpt}</p>

        <div className="mt-8 max-w-2xl">
          <SimpleContent content={post.content} />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-border px-4 py-2 text-sm text-neutral-700 hover:border-brand-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      <JsonLdScript
        data={articleSchema({
          path: `/blog/${post.slug}`,
          title: post.title,
          description: post.excerpt,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          image: post.coverImage,
        })}
      />
    </>
  );
}
