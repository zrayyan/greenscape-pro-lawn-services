"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "How often should I have my lawn mowed?",
    answer: "Most lawns benefit from mowing every 5-7 days during the growing season (April-October). However, this depends on grass type, weather, and your desired height. We recommend weekly service for optimal results."
  },
  {
    question: "Do you use organic fertilizers?",
    answer: "Yes! We offer both organic and traditional fertilization options. Our organic program uses slow-release, environmentally friendly nutrients that promote healthy root growth without harming beneficial insects or waterways."
  },
  {
    question: "What's included in your smart monitoring service?",
    answer: "Our smart monitoring includes soil moisture sensors, growth tracking, automated watering recommendations, and real-time alerts for optimal lawn health. You'll receive a dashboard to monitor your lawn's progress."
  },
  {
    question: "How far in advance should I book seasonal services?",
    answer: "We recommend booking seasonal services 2-3 months in advance, especially for popular times like spring cleanup or fall fertilization. Emergency services are available 24/7 with same-day response."
  },
  {
    question: "Do you offer snow removal in winter?",
    answer: "Absolutely! We provide 24/7 emergency snow removal services within our 50-mile service radius. Our team is equipped with professional snow removal equipment and responds quickly to keep your property safe."
  },
  {
    question: "What's your service area?",
    answer: "We proudly serve a 50-mile radius from our main office, covering Springfield and surrounding communities. Real-time route optimization ensures efficient service scheduling."
  },
  {
    question: "Can you help with landscape design?",
    answer: "Yes! Our landscape design service includes consultation, custom design plans, plant selection, and installation. We work with both residential and commercial properties to enhance curb appeal and functionality."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, checks, and offer convenient online payment options. For recurring services, we also offer automatic billing arrangements."
  }
];

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Get answers to common questions about our lawn care services,
            scheduling, and maintenance programs.
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-green-500"
            />
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500">No FAQs found matching your search.</p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              Call (555) 123-4567
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-semibold transition-colors">
              Send a Message
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}