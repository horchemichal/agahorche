import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { getPagesRepository } from "@/lib/database/repositories/pages-repository";
import { JsonLdScript } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { SimpleContent } from "@/components/ui/simple-content";

/**
 * Renders CMS pages created in /admin/strony (spec §7). This is a
 * catch-all at the (site) group root, so Next.js only reaches it when no
 * more specific static/dynamic route matched first — every hand-built
 * page (thermomix, blog, prezentacja, ...) still wins over this.
 */
interface Props {
  params: Promise<{ slug: string[] }>;
}

/**
 * Bez generateStaticParams: strony CMS renderują się na żądanie z aktualnej
 * bazy. Prerender listy adresów w trakcie `docker build` (bez dostępu do
 * bazy) dawał pustą listę albo zamrażał nieaktualne treści — patrz komentarz
 * przy `force-dynamic` w app/(site)/layout.tsx.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPagesRepository().getBySlug(slug.join("/"));
  if (!page) return {};

  return buildMetadata({
    title: page.seoTitle || page.title,
    description: page.seoDescription || page.title,
    path: `/${page.slug}`,
    robots: page.indexable ? "index,follow" : "noindex,follow",
  });
}

export default async function CmsPageRoute({ params }: Props) {
  const { slug } = await params;
  const page = await getPagesRepository().getBySlug(slug.join("/"));
  if (!page) notFound();

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: page.title, path: `/${page.slug}` }]} />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="lg" className="mb-8 max-w-2xl">
          {page.title}
        </Heading>
        <SimpleContent content={page.content} className="max-w-2xl" />
      </Section>

      <JsonLdScript
        data={webPageSchema({
          path: `/${page.slug}`,
          name: page.seoTitle || page.title,
          description: page.seoDescription || page.title,
        })}
      />
    </>
  );
}
