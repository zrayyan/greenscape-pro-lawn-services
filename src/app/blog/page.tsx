import { Metadata } from "next";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { BlogFilters } from "@/components/sections/blog/BlogFilters";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { NewsletterSignup } from "@/components/sections/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Lawn Care Blog & Resources | GreenScape Pro",
  description: "Expert lawn care tips, seasonal guides, and educational resources from GreenScape Pro. Learn about lawn maintenance, seasonal care, and sustainable practices.",
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogFilters />
      <BlogGrid />
      <NewsletterSignup />
    </main>
  );
}