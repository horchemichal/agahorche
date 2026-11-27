import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("jak-zostac-przedstawicielem-thermomix");

export default function Page() {
  return <PoradnikPage slug="jak-zostac-przedstawicielem-thermomix" />;
}
