"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Calendar, Wrench } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-GROW", "(555) 123-HELP"],
    description: "Call us for immediate assistance",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@greenscapepro.com", "support@greenscapepro.com"],
    description: "Email us anytime",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Lawn Street", "Greenville, GC 12345"],
    description: "Visit our office",
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
];

const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Emergency Only" }
];

const emergencyServices = [
  "Storm damage cleanup",
  "Tree removal emergencies",
  "Flooded lawn recovery",
  "24/7 emergency response"
];

export function ContactInfo() {
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
            Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us. Choose the method that works best for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${info.bgColor} rounded-2xl mb-6 mx-auto`}>
                    <Icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-lg text-gray-700 mb-1">
                      {detail}
                    </div>
                  ))}
                  <p className="text-gray-600 mt-4">
                    {info.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Business Hours & Emergency Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white border-0 shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center text-green-800">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Extended Hours Available</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  We offer flexible scheduling to accommodate your needs
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Emergency Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white border-0 shadow-lg">
              <div className="flex items-center mb-6">
                <Wrench className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  24/7 Emergency Services
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                When you need immediate assistance, our emergency response team is available around the clock.
              </p>
              <div className="space-y-3">
                {emergencyServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <div className="flex items-center text-red-800">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Emergency Hotline: (555) 911-GROW</span>
                </div>
                <p className="text-red-700 text-sm mt-1">
                  Call anytime for urgent lawn care emergencies
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}