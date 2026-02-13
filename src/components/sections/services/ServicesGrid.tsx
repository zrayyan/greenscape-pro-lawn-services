"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sprout,
  Droplets,
  Scissors,
  TreePine,
  Snowflake,
  Wrench,
  Play,
  ArrowRight,
  Star
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "smart-monitoring",
    icon: Sprout,
    title: "Smart Lawn Monitoring",
    shortDesc: "AI-powered sensors track soil health and growth patterns",
    price: "Starting at $49/month",
    rating: 4.9,
    reviewCount: 47,
    features: ["Real-time monitoring", "Automated alerts", "Data-driven decisions"],
    popular: true
  },
  {
    id: "organic-fertilization",
    icon: Droplets,
    title: "Organic Fertilization",
    shortDesc: "Eco-friendly nutrients for healthy root growth",
    price: "Starting at $89",
    rating: 4.8,
    reviewCount: 32,
    features: ["Organic compounds", "Slow-release formula", "Environmentally safe"],
    popular: false
  },
  {
    id: "precision-mowing",
    icon: Scissors,
    title: "Precision Mowing",
    shortDesc: "Expert mowing with specialized equipment",
    price: "Starting at $65",
    rating: 4.9,
    reviewCount: 89,
    features: ["Sharp blades", "Height optimization", "Clean edges"],
    popular: false
  },
  {
    id: "landscape-design",
    icon: TreePine,
    title: "Landscape Design",
    shortDesc: "Custom landscape design and installation",
    price: "Starting at $299",
    rating: 5.0,
    reviewCount: 23,
    features: ["Custom designs", "Plant selection", "Hardscaping"],
    popular: false
  },
  {
    id: "snow-removal",
    icon: Snowflake,
    title: "24/7 Snow Removal",
    shortDesc: "Emergency snow removal services",
    price: "Starting at $149",
    rating: 4.7,
    reviewCount: 56,
    features: ["24/7 availability", "Quick response", "Safe clearing"],
    popular: false
  },
  {
    id: "equipment-service",
    icon: Wrench,
    title: "Equipment Service",
    shortDesc: "Professional maintenance and repair",
    price: "Starting at $75",
    rating: 4.8,
    reviewCount: 41,
    features: ["Tune-ups", "Repairs", "Maintenance plans"],
    popular: false
  }
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of professional lawn care services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full p-6 bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-2xl transition-colors cursor-pointer">
                    <Play className="absolute top-2 right-2 h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({service.reviewCount} reviews)</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.shortDesc}
                </p>

                <div className="text-2xl font-bold text-green-600 mb-4">
                  {service.price}
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Link href={`/services/${service.id}`}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 group-hover:bg-green-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full">
                    Book Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Bundle & Save Up to 25%
            </h3>
            <p className="text-gray-600 mb-6">
              Combine multiple services for significant savings and comprehensive lawn care coverage.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              View Service Bundles
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}