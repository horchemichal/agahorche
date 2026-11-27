import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-na-firme");

export default function Page() {
  return <PoradnikPage slug="thermomix-na-firme" />;
}
