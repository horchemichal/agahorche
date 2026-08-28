/**
 * Editable copy + images for the two homepage blocks Aga asked to manage
 * herself: the hero and "Gdzie pracuje Aga". A singleton row (always id
 * "global"), same pattern as SeoSettings. `heroImageMediaId` /
 * `serviceAreaImageMediaId` are null until Aga picks a real photo from the
 * Media library — until then the public components fall back to their
 * existing placeholder visuals (spec §31/§42: never a fake stock photo).
 */
export interface HomepageContent {
  id: "global";
  heroHeadline: string;
  heroDescription: string;
  heroImageMediaId: string | null;
  serviceAreaIntro: string;
  serviceAreaImageMediaId: string | null;
  /** Ordered city names shown as chips — only ones with a real /thermomix/[miasto] page render as links (see ServiceAreaSection). */
  serviceAreaCities: string[];
  /** Latest Instagram reel permalinks (newest first) shown in the "Zostań ze mną na dłużej" module — up to the first 4 render (see SocialFollowSection). */
  instagramReelUrls: string[];
  updatedAt: string;
  updatedBy: string | null;
}

export type HomepageContentInput = Omit<HomepageContent, "id" | "updatedAt" | "updatedBy">;
