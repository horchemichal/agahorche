import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { getBlogCategoriesRepository } from "@/lib/database/repositories/blog-categories-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { PostForm } from "../post-form";

export const metadata: Metadata = {
  title: "Edytuj artykuł — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const [post, categories] = await Promise.all([getBlogRepository().get(id), getBlogCategoriesRepository().list()]);
  if (!post) notFound();

  return (
    <>
      <PanelHeader title={`Edytuj: ${post.title}`} />
      <PostForm post={post} categories={categories} />
    </>
  );
}
