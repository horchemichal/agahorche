import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getBlogCategoriesRepository } from "@/lib/database/repositories/blog-categories-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { PostForm } from "../post-form";

export const metadata: Metadata = {
  title: "Nowy artykuł — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function NewPostPage() {
  await requireAdmin();
  const categories = await getBlogCategoriesRepository().list();
  return (
    <>
      <PanelHeader title="Nowy artykuł" />
      <PostForm categories={categories} />
    </>
  );
}
