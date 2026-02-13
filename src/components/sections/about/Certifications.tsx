"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award, Shield, Leaf, Star, CheckCircle, Trophy } from "lucide-react";

const certifications = [
  {
    title: "Organic Land Care Certification",
    issuer: "Organic Land Care Association",
    year: "2020",
    description: "Certified for sustainable and organic lawn care practices",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Certified Lawn Care Professional",
    issuer: "Professional Landcare Network",
    year: "2018",
    description: "Advanced certification in professional lawn maintenance",
    icon: Award,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Eco-Friendly Business Certification",
    issuer: "Green Business Bureau",
    year: "2019",
    description: "Recognized for environmental stewardship and sustainable practices",
    icon: Shield,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Best Lawn Care Service 2022-2024",
    issuer: "Local Business Awards",
    year: "2024",
    description: "Three consecutive years of community recognition",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  }
];

const achievements = [
  "Carbon Neutral Operations",
  "Zero Waste to Landfill",
  "100% Organic Fertilizers",
  "Smart Irrigation Technology",
  "24/7 Emergency Service",
  "Mobile App Integration"
];

export function Certifications() {
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
            Certifications & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry certifications and
            community recognition that reflect our dedication to quality service.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${cert.bgColor} rounded-2xl`}>
                      <Icon className={`w-8 h-8 ${cert.color}`} />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {cert.year}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Achievements
            </h3>
            <p className="text-xl text-gray-600">
              Industry-leading standards and innovative practices that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center space-x-3 bg-green-50 rounded-xl p-4"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-lime-600 rounded-3xl p-8 text-white">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Trusted by Thousands
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join our community of satisfied customers who trust GreenScape Pro
              with their most valuable asset – their home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                Schedule Service
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-full font-semibold transition-all">
                Read Reviews
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}