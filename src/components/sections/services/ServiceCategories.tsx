"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sprout,
  Droplets,
  Zap,
  Shield
} from "lucide-react";

const categories = [
  {
    icon: Sprout,
    title: "Seasonal Care",
    description: "Spring cleanup, fall fertilization, winter protection",
    services: ["Spring Cleanup", "Fall Cleanup", "Winter Protection"]
  },
  {
    icon: Droplets,
    title: "Maintenance",
    description: "Regular mowing, edging, and basic lawn care",
    services: ["Weekly Mowing", "Bi-weekly Service", "Edging & Trimming"]
  },
  {
    icon: Zap,
    title: "Smart Technology",
    description: "AI-powered monitoring and automated systems",
    services: ["Smart Sensors", "Automated Watering", "App Monitoring"]
  },
  {
    icon: Shield,
    title: "Protection",
    description: "Pest control, weed management, and disease prevention",
    services: ["Organic Pest Control", "Weed Management", "Disease Prevention"]
  }
];

export function ServiceCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Service Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive lawn care solutions tailored to your needs and schedule
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                    <category.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:border-green-500 group-hover:text-green-600">
                  View Services
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}