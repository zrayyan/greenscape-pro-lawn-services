import { Metadata } from "next";
import { QuoteWizard } from "@/components/sections/quote/QuoteWizard";

export const metadata: Metadata = {
  title: "Instant Quote | GreenScape Pro Lawn Services",
  description: "Get an instant quote for professional lawn care services. Enter your lawn details and receive a personalized price estimate.",
};

export default function QuotePage() {
  return (
    <main>
      <QuoteWizard />
    </main>
  );
}