"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";

export function LiveAvailabilityWidget() {
  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-semibold">Live Availability</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Next Available Appointment
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="h-8 w-8 text-green-600" />
              <div className="text-4xl font-bold text-green-600">Tomorrow 2:00 PM</div>
            </div>

            <p className="text-gray-600 mb-8 text-lg">
              Only <span className="font-semibold text-red-500">3 slots</span> left this week.
              Book now to secure your preferred time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Free consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">50-mile radius</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Satisfaction guaranteed</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                Book Now - Tomorrow
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                Call (555) 123-4567
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}