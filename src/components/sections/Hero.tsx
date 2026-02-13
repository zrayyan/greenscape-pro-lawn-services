"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Hero() {
  const [lawnSize, setLawnSize] = useState(5000);

  const calculateEstimate = (size: number) => {
    // Base rate of $0.015 per sq ft, minimum $149
    const basePrice = Math.max(size * 0.015, 149);
    return Math.round(basePrice);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-lime-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-poster.jpg)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Precision Lawn Care.
            <br />
            <span className="text-lime-300">Elevated Curb Appeal.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional lawn services with smart monitoring, organic treatments,
            and 24/7 emergency care for your perfect green space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-4 text-lg" asChild>
              <Link href="/quote">
                Get Instant Quote
                <Calculator className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-black/30 backdrop-blur-sm" asChild>
              <Link href="/services">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Floating Quote Calculator Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto border border-white/20"
        >
          <h3 className="text-white font-semibold mb-4">Quick Estimate</h3>
          <div className="space-y-4">
            <div>
              <label className="text-white/80 text-sm block mb-2">Lawn Size (sq ft)</label>
              <input
                type="range"
                min="1000"
                max="20000"
                step="500"
                value={lawnSize}
                onChange={(e) => setLawnSize(parseInt(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-white/60 text-xs mt-2">
                <span>1,000</span>
                <span className="font-medium">{lawnSize.toLocaleString()}</span>
                <span>20,000+</span>
              </div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-3 border border-white/10">
              <div className="text-3xl font-bold text-lime-300">
                ${calculateEstimate(lawnSize).toLocaleString()}
              </div>
              <div className="text-white/70 text-sm">Starting price</div>
              <div className="text-white/50 text-xs mt-1">
                ${((lawnSize * 0.015)).toFixed(2)} base + services
              </div>
            </div>
            <Button size="sm" className="w-full bg-lime-500 hover:bg-lime-600 text-black font-medium" asChild>
              <Link href="/quote">
                Get Detailed Quote
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}