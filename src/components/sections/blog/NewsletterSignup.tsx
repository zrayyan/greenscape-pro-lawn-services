"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubscribed(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-lime-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl p-8 md:p-12">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 mx-auto">
              <Mail className="w-8 h-8 text-green-600" />
            </div>

            {/* Content */}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Stay Informed with Lawn Care Tips
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get weekly lawn care advice, seasonal tips, and exclusive content delivered
              straight to your inbox. Join thousands of homeowners who trust our expertise.
            </p>

            {/* Form */}
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to Our Community!
                </h3>
                <p className="text-gray-600">
                  Check your email for a confirmation link and start receiving our latest tips.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-4 mb-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 text-lg border-2 border-gray-200 focus:border-green-500 rounded-xl"
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Subscribing...
                      </div>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>

                {error && (
                  <div className="flex items-center justify-center text-red-600 text-sm mb-4">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {error}
                  </div>
                )}

                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-gray-900 mb-1">Weekly Tips</h4>
                <p className="text-sm text-gray-600">Seasonal lawn care advice</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-gray-900 mb-1">Expert Insights</h4>
                <p className="text-sm text-gray-600">Professional recommendations</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔔</div>
                <h4 className="font-semibold text-gray-900 mb-1">Early Access</h4>
                <p className="text-sm text-gray-600">New articles and resources</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}