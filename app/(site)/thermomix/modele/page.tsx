import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-modele");

export default function Page() {
  return <PoradnikPage slug="thermomix-modele" />;
}
