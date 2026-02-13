"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  MapPin,
  Calculator,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  User,
  Home,
  Clock
} from "lucide-react";

const steps = [
  { id: 1, title: "Property Details", icon: Home },
  { id: 2, title: "Service Selection", icon: CheckCircle },
  { id: 3, title: "Contact Information", icon: User },
  { id: 4, title: "Quote Results", icon: Calculator }
];

const services = [
  { id: "mowing", name: "Lawn Mowing", price: 65, description: "Weekly/bi-weekly mowing service" },
  { id: "fertilization", name: "Fertilization", price: 89, description: "Organic fertilization program" },
  { id: "aeration", name: "Aeration", price: 149, description: "Core aeration and overseeding" },
  { id: "pest-control", name: "Pest Control", price: 95, description: "Organic pest management" },
  { id: "snow-removal", name: "Snow Removal", price: 149, description: "24/7 emergency snow removal" }
];

export function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    address: "",
    lawnSize: 5000,
    frequency: "bi-weekly",
    selectedServices: [] as string[],
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const calculateQuote = () => {
    const basePrice = formData.lawnSize * 0.015; // $0.015 per sq ft base
    const frequencyMultiplier = formData.frequency === "weekly" ? 1.3 : 1;
    const serviceTotal = formData.selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);

    return Math.round((basePrice + serviceTotal) * frequencyMultiplier);
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string | number | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Get Your Instant Quote
          </h1>
          <p className="text-xl text-gray-600">
            Tell us about your lawn and receive a personalized price estimate in minutes
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step.id <= currentStep
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <span className={`text-sm font-medium ${
                  step.id <= currentStep ? "text-green-600" : "text-gray-500"
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <Progress value={(currentStep / steps.length) * 100} className="h-2" />
        </div>

        {/* Form Steps */}
        <Card className="p-8">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Property Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={(e) => updateFormData("address", e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lawn Size (square feet)
                    </label>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          ${calculateQuote().toLocaleString()}
                        </div>
                        <div className="text-sm text-green-700">
                          Estimated total per service
                        </div>
                      </div>
                    </div>
                    <Input
                      type="range"
                      min="1000"
                      max="20000"
                      step="500"
                      value={formData.lawnSize}
                      onChange={(e) => updateFormData("lawnSize", parseInt(e.target.value))}
                      className="w-full h-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>1,000 sq ft</span>
                      <span className="font-semibold">{formData.lawnSize.toLocaleString()} sq ft</span>
                      <span>20,000+ sq ft</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-center">
                      ${((formData.lawnSize * 0.015) * (formData.frequency === "weekly" ? 1.3 : 1)).toFixed(2)} base cost
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Frequency
                    </label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {["weekly", "bi-weekly", "monthly"].map((freq) => (
                        <button
                          key={freq}
                          onClick={() => updateFormData("frequency", freq)}
                          className={`p-3 rounded-lg border-2 text-center transition-colors ${
                            formData.frequency === freq
                              ? "border-green-500 bg-green-50 text-green-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="font-medium">{freq.charAt(0).toUpperCase() + freq.slice(1)}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            ${Math.round(calculateQuote() * (freq === "weekly" ? 1.3 : freq === "bi-weekly" ? 1 : 0.8)).toLocaleString()}
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 text-center">
                      Prices shown are estimates and may vary based on specific lawn conditions
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Select Services
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ${calculateQuote().toLocaleString()}
                    </div>
                    <div className="text-sm text-green-700">
                      Current estimate • {formData.selectedServices.length} service{formData.selectedServices.length !== 1 ? 's' : ''} selected
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        formData.selectedServices.includes(service.id)
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={formData.selectedServices.includes(service.id)}
                            onChange={() => toggleService(service.id)}
                          />
                          <div>
                            <h3 className="font-medium text-gray-900">{service.name}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">
                            ${service.price}
                          </div>
                          <div className="text-sm text-gray-500">starting</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <Textarea
                      placeholder="Tell us about any specific needs or concerns..."
                      value={formData.message}
                      onChange={(e) => updateFormData("message", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Your Instant Quote
                  </h2>
                  <p className="text-gray-600">
                    Based on your property details and selected services
                  </p>
                </div>

                <div className="bg-green-50 rounded-2xl p-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ${calculateQuote()}
                    </div>
                    <div className="text-gray-600">
                      {formData.frequency} service • {formData.lawnSize.toLocaleString()} sq ft
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Selected Services:</h3>
                  {formData.selectedServices.map((serviceId) => {
                    const service = services.find(s => s.id === serviceId);
                    return service ? (
                      <div key={serviceId} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span>{service.name}</span>
                        <span className="font-semibold">${service.price}</span>
                      </div>
                    ) : null;
                  })}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-blue-800 font-medium">Next Steps</p>
                      <p className="text-blue-700 text-sm">
                        We&apos;ll send your detailed quote to {formData.email} within 24 hours.
                        A representative will call you at {formData.phone} to schedule your service.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            {currentStep < steps.length ? (
              <Button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !formData.address) ||
                  (currentStep === 3 && (!formData.name || !formData.email || !formData.phone))
                }
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700">
                Send Quote to My Email
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}