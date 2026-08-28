import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCta } from "@/components/layout/sticky-cta";
import { JsonLdScript } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import type { ReactNode } from "react";

/**
 * Renderowanie na żądanie dla całej publicznej części serwisu.
 *
 * Wcześniej strony były prerenderowane w trakcie `docker build`. Build nie
 * widzi bazy (kontener `agahorche-postgres` nie istnieje na etapie
 * budowania obrazu), więc dane do HTML-a brał ostatni działający fallback —
 * czyli Supabase. Efekt: publiczne strony pokazywały treści i zdjęcia
 * sprzed migracji, a zmiany zapisane w Aga Admin nie pojawiały się na
 * stronie aż do kolejnego przebudowania obrazu.
 *
 * `force-dynamic` w layoucie dotyczy wszystkich tras pod app/(site), więc
 * każda podstrona renderuje się z aktualnej bazy przy żądaniu i nie da się
 * przypadkiem „zamrozić” treści w obrazie Dockera. Baza stoi w tej samej
 * sieci Dockera, a ruch jest niewielki, więc koszt renderu jest pomijalny.
 */
export const dynamic = "force-dynamic";

/** Public marketing site chrome — every route under app/(site) gets this; app/admin does not. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <Footer />
      <StickyMobileCta />
      <JsonLdScript data={[organizationSchema(), websiteSchema()]} />
    </>
  );
}
