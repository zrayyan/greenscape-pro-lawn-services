"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Heart, MessageCircle } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Spring Lawn Preparation: Essential Steps for a Healthy Start",
    excerpt: "Get your lawn ready for spring with these essential preparation steps. Learn about soil testing, overseeding, and early fertilization techniques.",
    author: "Sarah Chen",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "seasonal",
    season: "spring",
    image: "/api/placeholder/400/250",
    tags: ["Spring Care", "Preparation", "Fertilization"],
    featured: true,
    likes: 124,
    comments: 8
  },
  {
    id: 2,
    title: "Understanding Your Soil: The Foundation of Lawn Health",
    excerpt: "Soil health is crucial for a thriving lawn. Learn how to test your soil, understand pH levels, and create the perfect growing environment.",
    author: "Mike Rodriguez",
    date: "2024-03-10",
    readTime: "12 min read",
    category: "maintenance",
    season: "all",
    image: "/api/placeholder/400/250",
    tags: ["Soil Health", "Testing", "pH Balance"],
    featured: false,
    likes: 89,
    comments: 15
  },
  {
    id: 3,
    title: "Watering Wisely: Efficient Irrigation for Summer",
    excerpt: "Master the art of summer watering. Learn about deep root watering, drought-resistant grasses, and smart irrigation systems.",
    author: "Emily Johnson",
    date: "2024-03-08",
    readTime: "10 min read",
    category: "watering",
    season: "summer",
    image: "/api/placeholder/400/250",
    tags: ["Irrigation", "Water Conservation", "Summer Care"],
    featured: false,
    likes: 156,
    comments: 22
  },
  {
    id: 4,
    title: "Organic vs. Synthetic Fertilizers: Making the Right Choice",
    excerpt: "Compare organic and synthetic fertilizers to determine what's best for your lawn and the environment.",
    author: "John Martinez",
    date: "2024-03-05",
    readTime: "15 min read",
    category: "fertilization",
    season: "all",
    image: "/api/placeholder/400/250",
    tags: ["Organic", "Fertilizers", "Environment"],
    featured: true,
    likes: 203,
    comments: 31
  },
  {
    id: 5,
    title: "Winter Lawn Care: Protecting Your Investment",
    excerpt: "Essential winter care tips to protect your lawn during the cold months and prepare for spring growth.",
    author: "Sarah Chen",
    date: "2024-03-01",
    readTime: "9 min read",
    category: "winter",
    season: "winter",
    image: "/api/placeholder/400/250",
    tags: ["Winter Care", "Protection", "Preparation"],
    featured: false,
    likes: 78,
    comments: 12
  },
  {
    id: 6,
    title: "Fall Lawn Maintenance: Preparing for Winter Dormancy",
    excerpt: "Complete guide to fall lawn care including leaf removal, final fertilization, and winter preparation.",
    author: "Mike Rodriguez",
    date: "2024-02-25",
    readTime: "11 min read",
    category: "seasonal",
    season: "fall",
    image: "/api/placeholder/400/250",
    tags: ["Fall Care", "Leaf Removal", "Winter Prep"],
    featured: false,
    likes: 145,
    comments: 19
  }
];

const getSeasonColor = (season: string) => {
  switch (season) {
    case "spring": return "bg-green-100 text-green-800";
    case "summer": return "bg-yellow-100 text-yellow-800";
    case "fall": return "bg-orange-100 text-orange-800";
    case "winter": return "bg-blue-100 text-blue-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const filters = {
      searchTerm: "",
      category: "all",
      seasons: [] as string[],
      sortBy: "newest"
    };

    let filtered = blogPosts;

    // Apply search filter
    if (filters.searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(filters.searchTerm.toLowerCase()))
      );
    }

    // Apply category filter
    if (filters.category !== "all") {
      filtered = filtered.filter(post => post.category === filters.category);
    }

    // Apply season filter
    if (filters.seasons.length > 0) {
      filtered = filtered.filter(post => filters.seasons.includes(post.season));
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "popular":
          return b.likes - a.likes;
        case "az":
          return a.title.localeCompare(b.title);
        default: // newest
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, []);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden shadow-xl border-0 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-green-100 text-green-800">
                    Featured Article
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {filteredPosts.find(post => post.featured)?.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {filteredPosts.find(post => post.featured)?.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      {filteredPosts.find(post => post.featured)?.author}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(filteredPosts.find(post => post.featured)?.date || "").toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {filteredPosts.find(post => post.featured)?.readTime}
                    </div>
                  </div>
                  <Button className="w-fit bg-green-600 hover:bg-green-700">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-lime-100 flex items-center justify-center p-8">
                  <div className="w-full h-64 bg-white/50 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-400 text-lg">Featured Image</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white group cursor-pointer">
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-green-100 to-lime-100 flex items-center justify-center">
                  <span className="text-gray-400">Article Image</span>
                </div>

                {/* Content */}
                <div className="p-6">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2"
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 ${currentPage === page ? "bg-green-600 hover:bg-green-700" : ""}`}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2"
            >
              Next
            </Button>
          </div>
        )}

        {/* Load More (Alternative to pagination) */}
        {filteredPosts.length > postsPerPage && (
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8 py-3">
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}