import { getHomepageContentRepository } from "@/lib/database/repositories/homepage-content-repository";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { SITE } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/marketing/icons";
import { ReelsGrid } from "./instagram-reel-embed";

const SOCIAL_BUTTONS = [
  { key: "instagram", Icon: InstagramIcon, label: "Instagram" },
  { key: "facebook", Icon: FacebookIcon, label: "Facebook" },
  { key: "tiktok", Icon: TikTokIcon, label: "TikTok" },
  { key: "youtube", Icon: YouTubeIcon, label: "YouTube" },
] as const;

/**
 * "Zostań ze mną na dłużej..." homepage module (placed between the offer
 * grid and the installment calculator per Aga's explicit placement
 * request). Single block, top to bottom: heading + intro text → the latest
 * reels (first 4 of content.instagramReelUrls, editable at
 * /admin/strona-glowna — see homepage-content-repository.ts) → follow-
 * buttons row (SITE.social links). Reels are an interim manual-paste
 * workflow rather than a true Instagram Graph API auto-feed (that needs a
 * connected Business account + access token Aga hasn't set up yet — agreed
 * in chat); the grid simply renders nothing until at least one reel link is
 * saved, never a placeholder (spec §42). The whole section renders nothing
 * if no social link exists at all either.
 */
export async function SocialFollowSection() {
  const hasAnySocialLink = SOCIAL_BUTTONS.some(({ key }) => SITE.social[key]);
  if (!hasAnySocialLink) return null;

  const content = await getHomepageContentRepository().get();
  const reelUrls = content.instagramReelUrls.slice(0, 4);

  return (
    <Section tone="surface" className="pt-6 pb-14 md:pt-8 md:pb-20">
      <div className="text-center">
        <Heading as="h2" size="md" align="center" className="mb-3 text-brand-700">
          Zostań ze mną na dłużej 💚
        </Heading>
        <Lead className="mx-auto mb-8 max-w-xl">Obserwuj Agę w swoich ulubionych mediach społecznościowych.</Lead>

        {reelUrls.length > 0 && (
          <div className="mb-8">
            <ReelsGrid urls={reelUrls} />
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          {SOCIAL_BUTTONS.map(({ key, Icon, label }) => {
            const href = SITE.social[key];
            if (!href) return null;
            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:border-brand-500 hover:text-brand-700"
              >
                <Icon width={18} height={18} />
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
