import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";

export const generateMetadata = () => poradnikMetadata("thermomix-mycie-i-obsluga");

export default function Page() {
  return <PoradnikPage slug="thermomix-mycie-i-obsluga" />;
}
