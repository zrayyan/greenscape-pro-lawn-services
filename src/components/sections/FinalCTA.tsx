"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900">
        <div className="absolute inset-0 bg-black/20" />
        {/* Floating leaves animation would go here */}
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Lawn?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust GreenScape Pro
            for premium lawn care. Get your free quote today and see the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-4 text-lg">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              Call Now: (555) 123-4567
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-lime-300 mb-2">24/7</div>
              <div className="text-white/90">Emergency Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-lime-300 mb-2">50mi</div>
              <div className="text-white/90">Service Radius</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-lime-300 mb-2">100%</div>
              <div className="text-white/90">Satisfaction Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
        <div className="flex gap-3">
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <MessageCircle className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
          <Button variant="outline" className="flex-1">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}