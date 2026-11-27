import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-gwarancja");

export default function Page() {
  return <PoradnikPage slug="thermomix-gwarancja" />;
}
