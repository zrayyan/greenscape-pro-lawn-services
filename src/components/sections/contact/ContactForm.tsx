"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    "Lawn Mowing",
    "Fertilization",
    "Aeration & Overseeding",
    "Pest Control",
    "Snow Removal",
    "Landscaping",
    "Other"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
        newsletter: false
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Need a quote? We&apos;d love to hear from you.
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 md:p-12 shadow-xl border-0 bg-gradient-to-br from-white to-green-50/30">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`w-full ${errors.name ? "border-red-500" : ""}`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <div className="flex items-center mt-1 text-red-600 text-sm">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`w-full ${errors.email ? "border-red-500" : ""}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <div className="flex items-center mt-1 text-red-600 text-sm">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleInputChange("service", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="w-full"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`w-full min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                      placeholder="Tell us about your lawn care needs..."
                    />
                    {errors.message && (
                      <div className="flex items-center mt-1 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Newsletter Signup */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Subscribe to our newsletter for lawn care tips and seasonal updates
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}