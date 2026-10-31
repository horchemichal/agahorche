import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-czego-nie-zrobi");

export default function Page() {
  return <PoradnikPage slug="thermomix-czego-nie-zrobi" />;
}
