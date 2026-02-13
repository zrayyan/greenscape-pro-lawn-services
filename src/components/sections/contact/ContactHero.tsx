"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowDown } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-lime-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4D3E' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Get In
              <span className="block text-green-600">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your lawn? Contact our expert team for personalized
              lawn care solutions tailored to your property.
            </p>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold text-gray-900 mb-1">Call Us</div>
              <div className="text-green-600 font-medium">(555) 123-GROW</div>
              <div className="text-sm text-gray-600 mt-1">Mon-Fri 8AM-6PM</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold text-gray-900 mb-1">Email Us</div>
              <div className="text-green-600 font-medium">hello@greenscapepro.com</div>
              <div className="text-sm text-gray-600 mt-1">24/7 Response</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold text-gray-900 mb-1">Visit Us</div>
              <div className="text-green-600 font-medium">123 Lawn Street</div>
              <div className="text-sm text-gray-600 mt-1">Greenville, GC 12345</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Send Message
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Emergency Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-red-600 mr-2" />
              <span className="text-red-800 font-semibold">24/7 Emergency Service</span>
            </div>
            <p className="text-red-700 text-center">
              Need immediate assistance? Our emergency line is available around the clock for urgent lawn care needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-lime-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}