import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { LiveAvailabilityWidget } from "@/components/sections/LiveAvailabilityWidget";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ServicesShowcase />
      <BeforeAfterGallery />
      <LiveAvailabilityWidget />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
