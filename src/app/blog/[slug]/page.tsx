import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/sections/blog/BlogPostContent";
import { RelatedPosts } from "@/components/sections/blog/RelatedPosts";

// Mock blog post data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: "spring-lawn-preparation-essential-steps",
    title: "Spring Lawn Preparation: Essential Steps for a Healthy Start",
    excerpt: "Get your lawn ready for spring with these essential preparation steps. Learn about soil testing, overseeding, and early fertilization techniques.",
    content: `
      <h2>Why Spring Preparation Matters</h2>
      <p>Spring is the most critical time for lawn care. Proper preparation sets the foundation for a healthy, vibrant lawn throughout the growing season.</p>

      <h2>Step 1: Soil Testing</h2>
      <p>Before you do anything else, test your soil. Understanding your soil's pH and nutrient levels will guide your fertilization and amendment decisions.</p>

      <h2>Step 2: Dethatching and Aeration</h2>
      <p>Remove thatch buildup and aerate compacted soil to improve water and nutrient absorption.</p>

      <h2>Step 3: Overseeding</h2>
      <p>Fill in bare spots and thicken your lawn with high-quality grass seed appropriate for your region.</p>

      <h2>Step 4: Early Fertilization</h2>
      <p>Apply a balanced, slow-release fertilizer to provide essential nutrients for healthy growth.</p>
    `,
    author: "Sarah Chen",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "seasonal",
    season: "spring",
    image: "/api/placeholder/800/400",
    tags: ["Spring Care", "Preparation", "Fertilization"],
    featured: true,
    likes: 124,
    comments: 8
  },
  {
    slug: "understanding-your-soil-foundation",
    title: "Understanding Your Soil: The Foundation of Lawn Health",
    excerpt: "Soil health is crucial for a thriving lawn. Learn how to test your soil, understand pH levels, and create the perfect growing environment.",
    content: `
      <h2>The Importance of Soil Health</h2>
      <p>Your lawn's health begins beneath the surface. Understanding and optimizing your soil is the key to a beautiful, resilient lawn.</p>

      <h2>Soil Testing Basics</h2>
      <p>Regular soil testing provides valuable insights into pH levels, nutrient content, and organic matter composition.</p>

      <h2>pH Levels and Their Impact</h2>
      <p>Different grass types thrive at different pH levels. Most lawn grasses prefer slightly acidic to neutral soil.</p>

      <h2>Nutrient Management</h2>
      <p>Essential nutrients like nitrogen, phosphorus, and potassium are crucial for healthy grass growth.</p>
    `,
    author: "Mike Rodriguez",
    date: "2024-03-10",
    readTime: "12 min read",
    category: "maintenance",
    season: "all",
    image: "/api/placeholder/800/400",
    tags: ["Soil Health", "Testing", "pH Balance"],
    featured: false,
    likes: 89,
    comments: 15
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | GreenScape Pro Blog",
    };
  }

  return {
    title: `${post.title} | GreenScape Pro Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <BlogPostContent post={post} />
      <RelatedPosts currentPost={post} allPosts={blogPosts} />
    </main>
  );
}