import { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { InteractiveMap } from "@/components/sections/contact/InteractiveMap";
import { ServiceAreas } from "@/components/sections/contact/ServiceAreas";

export const metadata: Metadata = {
  title: "Contact Us | GreenScape Pro Lawn Services",
  description: "Get in touch with GreenScape Pro for premium lawn care services. Find our location, schedule a consultation, or request a quote. Serving the local community.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <InteractiveMap />
      <ServiceAreas />
    </main>
  );
}