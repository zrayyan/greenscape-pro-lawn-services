"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, CheckCircle, Star } from "lucide-react";

const neighborhoods = [
  {
    name: "Downtown Greenville",
    type: "Commercial & Residential",
    features: ["24/7 Emergency Service", "Commercial Accounts", "Historic District"],
    rating: 4.9,
    responseTime: "15-30 min"
  },
  {
    name: "Riverside Estates",
    type: "Luxury Residential",
    features: ["Premium Services", "Landscape Design", "Irrigation Systems"],
    rating: 5.0,
    responseTime: "20-40 min"
  },
  {
    name: "Oakwood Hills",
    type: "Family Neighborhoods",
    features: ["Family Discounts", "Seasonal Programs", "Pet-Friendly"],
    rating: 4.8,
    responseTime: "25-45 min"
  },
  {
    name: "Maple Grove",
    type: "Suburban Community",
    features: ["Weekly Maintenance", "Organic Treatments", "Community Events"],
    rating: 4.9,
    responseTime: "20-35 min"
  },
  {
    name: "Cedar Ridge",
    type: "Executive Homes",
    features: ["High-End Services", "Custom Solutions", "Priority Scheduling"],
    rating: 5.0,
    responseTime: "15-30 min"
  },
  {
    name: "Pine Valley",
    type: "Mixed Residential",
    features: ["Flexible Scheduling", "Eco-Friendly Options", "Senior Discounts"],
    rating: 4.7,
    responseTime: "30-50 min"
  }
];

const serviceHighlights = [
  {
    title: "Same-Day Service",
    description: "Available in most areas for urgent needs",
    icon: "⚡"
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed professionals with insurance coverage",
    icon: "🛡️"
  },
  {
    title: "Eco-Certified",
    description: "Organic and sustainable lawn care practices",
    icon: "🌱"
  },
  {
    title: "5-Star Rated",
    description: "Consistently rated 4.8+ stars by customers",
    icon: "⭐"
  }
];

export function ServiceAreas() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Communities We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving Greenville and surrounding areas with premium lawn care services
            tailored to each community&apos;s unique needs.
          </p>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {serviceHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {neighborhood.name}
                    </h3>
                    <p className="text-green-600 font-semibold text-sm">
                      {neighborhood.type}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold ml-1">{neighborhood.rating}</span>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">
                    Response time: {neighborhood.responseTime}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {neighborhood.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                  Service This Area
                </button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coverage Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-lime-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Expanding Our Reach
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Don&apos;t see your neighborhood listed? We&apos;re continuously expanding our service areas.
              Contact us to check availability in your location.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">25+</div>
                <div className="text-sm opacity-90">Square Miles Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm opacity-90">Neighborhoods Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">5000+</div>
                <div className="text-sm opacity-90">Properties Maintained</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}