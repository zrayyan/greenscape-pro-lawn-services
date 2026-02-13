import { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { CompanyTimeline } from "@/components/sections/about/CompanyTimeline";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { Certifications } from "@/components/sections/about/Certifications";

export const metadata: Metadata = {
  title: "About Us | GreenScape Pro Lawn Services",
  description: "Learn about GreenScape Pro's journey, our experienced team, and our commitment to premium eco-modern lawn care services. Serving the community for over a decade.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyTimeline />
      <TeamSection />
      <ValuesSection />
      <Certifications />
    </main>
  );
}