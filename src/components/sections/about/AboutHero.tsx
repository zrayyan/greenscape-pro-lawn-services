"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-lime-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4D3E' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Our Story of
              <span className="block text-green-600">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              For over a decade, GreenScape Pro has been transforming lawns and elevating curb appeal
              with precision care, innovative techniques, and an unwavering commitment to excellence.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">12+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Learn Our Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-lime-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}