import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-na-prezent");

export default function Page() {
  return <PoradnikPage slug="thermomix-na-prezent" />;
}
