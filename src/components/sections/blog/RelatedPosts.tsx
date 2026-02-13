"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  season: string;
  image: string;
  tags: string[];
  featured: boolean;
  likes: number;
  comments: number;
}

interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
}

const getSeasonColor = (season: string) => {
  switch (season) {
    case "spring": return "bg-green-100 text-green-800";
    case "summer": return "bg-yellow-100 text-yellow-800";
    case "fall": return "bg-orange-100 text-orange-800";
    case "winter": return "bg-blue-100 text-blue-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export function RelatedPosts({ currentPost, allPosts }: RelatedPostsProps) {
  // Get related posts based on category and season
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .filter(post =>
      post.category === currentPost.category ||
      post.season === currentPost.season ||
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Related Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continue your learning journey with these related articles
          </p>
        </motion.div>

        {/* Related Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white group cursor-pointer h-full">
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-green-100 to-lime-100 flex items-center justify-center">
                  <span className="text-gray-400">Article Image</span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Season Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getSeasonColor(post.season)}>
                      {post.season.charAt(0).toUpperCase() + post.season.slice(1)}
                    </Badge>
                    {post.featured && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors flex-grow">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-3">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More */}
                  <Link href={`/blog/${post.slug}`} className="mt-auto">
                    <Button variant="outline" className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}