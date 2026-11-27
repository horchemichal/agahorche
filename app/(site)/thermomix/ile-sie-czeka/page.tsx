import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-ile-sie-czeka");

export default function Page() {
  return <PoradnikPage slug="thermomix-ile-sie-czeka" />;
}
