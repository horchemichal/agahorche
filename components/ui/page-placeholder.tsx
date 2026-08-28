import type { BreadcrumbItem } from "@/types/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";

/**
 * Foundation-stage placeholder for routes whose URL/metadata/schema wiring
 * is complete but whose final copy hasn't been written yet (spec §45/§47:
 * build the routing skeleton now, write full page content in later, scoped
 * tasks like "Zbuduj stronę TM7."). Every route using this still ships with
 * correct metadata, breadcrumbs and a working primary CTA — nothing here
 * is a dead end.
 */
export function PagePlaceholder({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={breadcrumbs} />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="lg" className="max-w-2xl">
          {title}
        </Heading>
        <Lead className="mt-4 max-w-2xl">{description}</Lead>
        <p className="mt-6 inline-flex items-center rounded-md bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-500">
          Treść tej strony zostanie uzupełniona w kolejnym etapie.
        </p>
        <div className="mt-8">
          <ButtonLink href="/prezentacja" size="lg">
            Umów bezpłatną prezentację
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
