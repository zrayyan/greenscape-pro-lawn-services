"use client";

import { motion } from "framer-motion";
import { Star, Users, Award, Shield } from "lucide-react";

export function SocialProofBar() {
  const stats = [
    { icon: Users, value: "2,400+", label: "Lawns Serviced" },
    { icon: Star, value: "4.9★", label: "Average Rating" },
    { icon: Award, value: "15", label: "Years Experience" },
  ];

  return (
    <section className="bg-white py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-green-100 rounded-full">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              Google Guaranteed
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Award className="h-4 w-4" />
              Yelp Elite
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              BBB A+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}