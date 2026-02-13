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
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "smart-monitoring",
    icon: Sprout,
    title: "Smart Lawn Monitoring",
    description: "AI-powered sensors track soil health, moisture levels, and growth patterns for optimal care.",
    features: ["Real-time monitoring", "Automated alerts", "Data-driven decisions"],
    video: "/videos/monitoring.mp4"
  },
  {
    id: "organic-fertilization",
    icon: Droplets,
    title: "Organic Fertilization",
    description: "Eco-friendly nutrients that promote healthy root growth and vibrant green color.",
    features: ["Organic compounds", "Slow-release formula", "Environmentally safe"],
    video: "/videos/fertilization.mp4"
  },
  {
    id: "precision-mowing",
    icon: Scissors,
    title: "Precision Mowing",
    description: "Expert mowing with specialized equipment for the perfect cut every time.",
    features: ["Sharp blades", "Height optimization", "Clean edges"],
    video: "/videos/mowing.mp4"
  },
  {
    id: "landscape-design",
    icon: TreePine,
    title: "Landscape Design",
    description: "Custom landscape design services to enhance your property's beauty and value.",
    features: ["Custom designs", "Plant selection", "Hardscaping"],
    video: "/videos/landscape.mp4"
  },
  {
    id: "snow-removal",
    icon: Snowflake,
    title: "24/7 Snow Removal",
    description: "Emergency snow removal services available around the clock.",
    features: ["24/7 availability", "Quick response", "Safe clearing"],
    video: "/videos/snow.mp4"
  },
  {
    id: "equipment-service",
    icon: Wrench,
    title: "Equipment Service",
    description: "Professional maintenance and repair of your lawn care equipment.",
    features: ["Tune-ups", "Repairs", "Maintenance plans"],
    video: "/videos/equipment.mp4"
  }
];

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Premium Lawn Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From smart monitoring to emergency snow removal, we provide comprehensive
            lawn care solutions with cutting-edge technology and traditional expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full p-6 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                    <service.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-2xl transition-colors cursor-pointer">
                    <Play className="absolute top-2 right-2 h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:bg-green-50 dark:group-hover:bg-green-900/20 group-hover:border-green-300 dark:group-hover:border-green-600" asChild>
                  <Link href={`/services/${service.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}