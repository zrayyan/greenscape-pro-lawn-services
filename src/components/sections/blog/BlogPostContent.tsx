"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Heart, MessageCircle, Share2, ArrowLeft, Bookmark } from "lucide-react";

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

interface BlogPostContentProps {
  post: BlogPost;
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

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-lime-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </motion.div>

            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              {/* Badges */}
              <div className="flex items-center justify-center gap-2 mb-4">
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
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-center gap-6 text-gray-500 mb-8">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <div className="aspect-video bg-gradient-to-br from-green-100 to-lime-100 rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Article Featured Image</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Social Share & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </motion.div>

            {/* Article Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{post.author}</div>
                    <div className="text-sm text-gray-600">Lawn Care Specialist</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline">
                    <Heart className="w-4 h-4 mr-2" />
                    Like Article
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </article>
  );
}