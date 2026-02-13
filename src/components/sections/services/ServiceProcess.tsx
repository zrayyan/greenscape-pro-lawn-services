"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, User, Wrench, Star } from "lucide-react";

const processSteps = [
  {
    icon: User,
    title: "Consultation & Assessment",
    description: "We visit your property to assess your lawn's specific needs and discuss your goals.",
    duration: "30-45 minutes",
    details: ["Free on-site evaluation", "Custom recommendations", "Budget planning"]
  },
  {
    icon: Wrench,
    title: "Service Planning",
    description: "Our experts create a tailored service plan with scheduling and pricing details.",
    duration: "1-2 days",
    details: ["Detailed service plan", "Timeline scheduling", "Pricing breakdown"]
  },
  {
    icon: CheckCircle,
    title: "Professional Service",
    description: "Our certified technicians perform the service using premium equipment and techniques.",
    duration: "Service dependent",
    details: ["Certified technicians", "Premium equipment", "Quality assurance"]
  },
  {
    icon: Star,
    title: "Follow-up & Support",
    description: "We ensure your satisfaction and provide ongoing support for optimal results.",
    duration: "Ongoing",
    details: ["Satisfaction guarantee", "24/7 support", "Maintenance tips"]
  }
];

export function ServiceProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From consultation to completion, we ensure every step is handled with
            professionalism and care
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-green-200 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                )}

                <div className="bg-gray-50 rounded-2xl p-6 text-center relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-green-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{step.duration}</span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <div className="w-1 h-1 bg-green-500 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and discover how we can transform your lawn
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                Call (555) 123-4567
              </button>
            </div>

            <div className="mt-8 text-green-100">
              <p className="text-sm">✓ No obligation • ✓ Free estimates • ✓ Satisfaction guaranteed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}