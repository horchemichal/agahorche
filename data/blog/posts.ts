import type { BlogPostMeta } from "@/types/blog";

/**
 * Blog post index — intentionally empty (spec §47: "nie generuj jeszcze...
 * 1000 artykułów"). The content-hub engine (categories, clusters, related
 * internal links) is fully wired below and in /lib/seo/internal-linking.ts;
 * only the actual articles are missing, by design, until real posts are
 * written in a later, scoped task.
 */
export const BLOG_POSTS: BlogPostMeta[] = [];
