"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Licensed & Insured Professionals",
  "100% Satisfaction Guarantee",
  "Eco-Friendly Practices",
  "24/7 Emergency Service"
];

export function ServicesHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 to-lime-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Professional Lawn Care
              <span className="block text-green-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              From smart monitoring to emergency snow removal, we provide comprehensive
              lawn care solutions with cutting-edge technology and traditional expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                View Service Areas
              </Button>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}