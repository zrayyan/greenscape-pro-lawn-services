"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Award, Users, Target, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with our customers. We listen, we care, and we deliver results that exceed expectations.",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "We believe in sustainable practices that protect our environment while providing beautiful, healthy lawns.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from equipment maintenance to customer service.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Users,
    title: "Community",
    description: "We're proud to be part of the communities we serve, supporting local initiatives and building lasting relationships.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We embrace new technologies and techniques to provide cutting-edge lawn care solutions.",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Honesty, transparency, and reliability are the foundation of everything we do.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  }
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core principles guide everything we do and shape the way we serve our customers
            and our community.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`${value.bgColor} rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-gray-200`}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${value.color} bg-white rounded-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 via-lime-50 to-green-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              To transform ordinary lawns into extraordinary landscapes through innovative,
              sustainable practices that enhance beauty, promote health, and preserve our environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">5000+</div>
                <div className="text-gray-600">Lush Lawns Created</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-lime-600 mb-1">50+</div>
                <div className="text-gray-600">Awards & Recognition</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-green-700 mb-1">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}