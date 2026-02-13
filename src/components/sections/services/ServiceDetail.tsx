"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  Phone
} from "lucide-react";
import Link from "next/link";

interface ServiceDetailProps {
  service: {
    title: string;
    description: string;
    longDescription: string;
    price: string;
    features: string[];
    benefits: string[];
    process: string[];
  };
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Professional Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                {service.description}
              </p>
              <div className="text-3xl font-bold mb-8">{service.price}</div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Book This Service
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                  Get Free Quote
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                    About This Service
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.longDescription}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    What&apos;s Included
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Key Benefits
                  </h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Our Process
                  </h3>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 font-semibold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <Card className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Service Details</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting Price</span>
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">Service Dependent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Related Services */}
                <Card className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Related Services</h4>
                  <div className="space-y-3">
                    <Link href="/services/organic-fertilization" className="block">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-gray-700">Organic Fertilization</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                    <Link href="/services/precision-mowing" className="block">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-gray-700">Precision Mowing</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                  </div>
                </Card>

                {/* CTA */}
                <Card className="p-6 bg-green-50 border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Schedule your service today and transform your lawn.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Book Appointment
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}