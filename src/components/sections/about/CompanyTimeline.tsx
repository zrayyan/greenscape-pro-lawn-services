"use client";

import { motion } from "framer-motion";
import { Calendar, Award, Users, TrendingUp, Leaf, Star } from "lucide-react";

const timelineEvents = [
  {
    year: "2012",
    title: "The Beginning",
    description: "GreenScape Pro was founded by John Martinez with a single mission: to provide premium lawn care services using eco-friendly practices.",
    icon: Calendar,
    color: "bg-green-500"
  },
  {
    year: "2014",
    title: "First Major Expansion",
    description: "Expanded our service area and hired our first team of certified lawn care specialists. Introduced organic fertilization programs.",
    icon: Users,
    color: "bg-lime-500"
  },
  {
    year: "2016",
    title: "Innovation Award",
    description: "Received the 'Innovation in Lawn Care' award from the National Landscape Association for our sustainable practices.",
    icon: Award,
    color: "bg-green-600"
  },
  {
    year: "2018",
    title: "Technology Integration",
    description: "Launched our proprietary lawn health monitoring system and mobile app for real-time service updates.",
    icon: TrendingUp,
    color: "bg-lime-600"
  },
  {
    year: "2020",
    title: "Eco-Certification",
    description: "Achieved full organic certification and became the first lawn care company in the region to offer carbon-neutral services.",
    icon: Leaf,
    color: "bg-green-700"
  },
  {
    year: "2022",
    title: "Community Recognition",
    description: "Named 'Best Lawn Care Service' by local residents for three consecutive years. Expanded to serve 5 neighboring communities.",
    icon: Star,
    color: "bg-lime-700"
  },
  {
    year: "2024",
    title: "Future Forward",
    description: "Launched AI-powered lawn analysis and introduced our premium 'Smart Lawn' subscription service with predictive maintenance.",
    icon: TrendingUp,
    color: "bg-green-800"
  }
];

export function CompanyTimeline() {
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
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to industry leaders, discover the milestones that have shaped
            GreenScape Pro into the premium lawn care service we are today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-200 via-lime-300 to-green-400 rounded-full" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${event.color} rounded-full border-4 border-white shadow-lg z-10`} />

                {/* Content Card */}
                <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    {/* Year Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.year}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${event.color} rounded-full mb-4 ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-lime-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Be Part of Our Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust GreenScape Pro with their lawn care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Get Your Quote
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all">
                View Our Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}