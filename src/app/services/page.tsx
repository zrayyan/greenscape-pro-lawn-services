import { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ServiceCategories } from "@/components/sections/services/ServiceCategories";
import { ServiceProcess } from "@/components/sections/services/ServiceProcess";

export const metadata: Metadata = {
  title: "Lawn Care Services | GreenScape Pro",
  description: "Professional lawn care services including smart monitoring, organic fertilization, precision mowing, and more. Book your service today.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceCategories />
      <ServicesGrid />
      <ServiceProcess />
    </main>
  );
}