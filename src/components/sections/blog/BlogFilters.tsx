"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X, Calendar, Leaf, Droplets, Scissors, Snowflake } from "lucide-react";

const categories = [
  { id: "all", name: "All Topics", icon: null, count: 50 },
  { id: "seasonal", name: "Seasonal Care", icon: Calendar, count: 12 },
  { id: "maintenance", name: "Maintenance", icon: Scissors, count: 15 },
  { id: "fertilization", name: "Fertilization", icon: Leaf, count: 8 },
  { id: "watering", name: "Watering", icon: Droplets, count: 6 },
  { id: "winter", name: "Winter Care", icon: Snowflake, count: 9 }
];

const seasons = [
  { id: "spring", name: "Spring", color: "bg-green-100 text-green-800" },
  { id: "summer", name: "Summer", color: "bg-yellow-100 text-yellow-800" },
  { id: "fall", name: "Fall", color: "bg-orange-100 text-orange-800" },
  { id: "winter", name: "Winter", color: "bg-blue-100 text-blue-800" }
];

export function BlogFilters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const toggleSeason = (seasonId: string) => {
    setSelectedSeasons(prev =>
      prev.includes(seasonId)
        ? prev.filter(id => id !== seasonId)
        : [...prev, seasonId]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedSeasons([]);
    setSortBy("newest");
  };

  const activeFiltersCount = (searchTerm ? 1 : 0) + (selectedCategory !== "all" ? 1 : 0) + selectedSeasons.length;

  return (
    <section id="blog-filters" className="py-12 bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Search and Filter Toggle */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-green-500 rounded-xl"
            />
          </div>

          {/* Filter Toggle */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 hover:border-green-500 rounded-xl"
          >
            <Filter className="w-5 h-5" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
            <option value="az">A-Z</option>
          </select>
        </div>

        {/* Expanded Filters */}
        <motion.div
          initial={false}
          animate={{ height: showFilters ? "auto" : 0, opacity: showFilters ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t border-gray-100 pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Topics</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                          selectedCategory === category.id
                            ? "bg-green-100 border-2 border-green-500 text-green-800"
                            : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <div className="flex items-center">
                          {Icon && <Icon className="w-5 h-5 mr-3" />}
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="bg-gray-200 text-gray-600">
                          {category.count}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Seasons */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Seasons</h3>
                <div className="grid grid-cols-2 gap-2">
                  {seasons.map((season) => (
                    <button
                      key={season.id}
                      onClick={() => toggleSeason(season.id)}
                      className={`p-3 rounded-lg text-center font-medium transition-all ${
                        selectedSeasons.includes(season.id)
                          ? `${season.color} border-2 border-current`
                          : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {season.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters & Clear */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Filters</h3>
                <div className="space-y-2">
                  {searchTerm && (
                    <div className="flex items-center justify-between bg-blue-50 px-3 py-2 rounded-lg">
                      <span className="text-blue-800 text-sm">Search: &quot;{searchTerm}&quot;</span>
                      <button
                        onClick={() => setSearchTerm("")}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {selectedCategory !== "all" && (
                    <div className="flex items-center justify-between bg-green-50 px-3 py-2 rounded-lg">
                      <span className="text-green-800 text-sm">
                        Category: {categories.find(c => c.id === selectedCategory)?.name}
                      </span>
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className="text-green-600 hover:text-green-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {selectedSeasons.map((seasonId) => (
                    <div key={seasonId} className="flex items-center justify-between bg-orange-50 px-3 py-2 rounded-lg">
                      <span className="text-orange-800 text-sm">
                        Season: {seasons.find(s => s.id === seasonId)?.name}
                      </span>
                      <button
                        onClick={() => toggleSeason(seasonId)}
                        className="text-orange-600 hover:text-orange-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {activeFiltersCount > 0 && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="w-full mt-4 border-red-300 text-red-600 hover:bg-red-50"
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Summary */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">24</span> of{" "}
            <span className="font-semibold text-gray-900">50</span> articles
            {activeFiltersCount > 0 && (
              <span className="ml-2 text-green-600">
                ({activeFiltersCount} filter{activeFiltersCount > 1 ? "s" : ""} applied)
              </span>
            )}
          </div>
          <div className="text-sm text-gray-500">
            Sorted by: {sortBy === "newest" ? "Newest First" :
                        sortBy === "oldest" ? "Oldest First" :
                        sortBy === "popular" ? "Most Popular" : "A-Z"}
          </div>
        </div>
      </div>
    </section>
  );
}