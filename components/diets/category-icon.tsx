import type { ReactElement, SVGProps } from "react";
import type { DietCategoryIconKey } from "@/types/diet";
import {
  TargetIcon,
  LeafIcon,
  ScaleIcon,
  LightningIcon,
  CheckCircleIcon,
  SwapIcon,
  BadgeIcon,
  UsersIcon,
  HeartHandsIcon,
  SproutIcon,
} from "@/components/marketing/icons";

const ICONS: Record<DietCategoryIconKey, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  keto: TargetIcon,
  leaf: LeafIcon,
  scale: ScaleIcon,
  lightning: LightningIcon,
  check: CheckCircleIcon,
  swap: SwapIcon,
  badge: BadgeIcon,
  users: UsersIcon,
  heart: HeartHandsIcon,
  sprout: SproutIcon,
};

export function CategoryIcon({ icon, ...props }: { icon: DietCategoryIconKey } & SVGProps<SVGSVGElement>) {
  const Icon = ICONS[icon];
  return <Icon {...props} />;
}
