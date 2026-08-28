/**
 * Blog / content-hub domain types (spec §14-15).
 * Categories and clusters are separate axes: a category is where the post
 * lives editorially, a cluster is the topical SEO grouping used for
 * internal linking (§15 requires every article belongs to exactly one
 * cluster, but it may still be tagged into multiple categories).
 */

export type BlogCategory =
  | "thermomix"
  | "tm7"
  | "tm6"
  | "gotowanie"
  | "dla-rodzin"
  | "dla-mam"
  | "dla-poczatkujacych"
  | "porady"
  | "prezentacja"
  | "zakup"
  | "finansowanie"
  | "przepisy"
  | "aga-club"
  | "lokalne";

export type ContentCluster =
  | "tm7"
  | "prezentacja"
  | "zakup"
  | "gotowanie"
  | "dla-rodziny"
  | "dla-mam"
  | "thermomix-miasto"
  | "aga-club";

export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  cluster: ContentCluster;
  /** Related location slug, only set for cluster === "thermomix-miasto". */
  relatedLocationSlug?: string;
  publishedAt: string;
  updatedAt: string;
  status: "draft" | "published";
  indexable: boolean;
  coverImage?: string;
  author: "aga-horche";
}
