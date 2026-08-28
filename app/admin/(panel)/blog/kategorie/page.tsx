import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getBlogCategoriesRepository } from "@/lib/database/repositories/blog-categories-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { CategoryRow } from "./category-row";

export const metadata: Metadata = {
  title: "Kategorie bloga — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminBlogCategoriesPage() {
  await requireAdmin();
  const categories = await getBlogCategoriesRepository().list();

  return (
    <>
      <PanelHeader
        title="Kategorie bloga"
        description="Zestaw slugów kategorii jest ustalony w kodzie — tutaj edytujesz tylko wyświetlaną etykietę."
      />
      <div className="max-w-xl space-y-2">
        {categories.map((c) => (
          <CategoryRow key={c.slug} slug={c.slug} label={c.label} />
        ))}
      </div>
    </>
  );
}
