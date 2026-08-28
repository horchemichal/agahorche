import { SITE } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/marketing/icons";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS = [
  { key: "facebook", Icon: FacebookIcon, label: "Facebook" },
  { key: "instagram", Icon: InstagramIcon, label: "Instagram" },
  { key: "tiktok", Icon: TikTokIcon, label: "TikTok" },
  { key: "youtube", Icon: YouTubeIcon, label: "YouTube" },
] as const;

/**
 * Renders the brand's social icon row. None of the URLs are confirmed yet
 * (SITE.social — spec §42: never invent a link), so each icon is shown for
 * visual/brand consistency with the design but only becomes a real link
 * once Aga provides the URL — until then it's inert, not a fake href.
 */
export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_ICONS.map(({ key, Icon, label }) => {
        const href = SITE.social[key];
        const icon = <Icon width={16} height={16} />;
        if (href) {
          return (
            <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="opacity-90 transition-opacity hover:opacity-100">
              {icon}
            </a>
          );
        }
        return (
          <span key={key} aria-hidden className="opacity-50">
            {icon}
          </span>
        );
      })}
    </div>
  );
}
