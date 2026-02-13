"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation, ZoomIn, ZoomOut } from "lucide-react";

const serviceAreas = [
  {
    name: "Downtown Greenville",
    coordinates: { x: 45, y: 40 },
    services: ["Full Service", "Emergency Response"],
    responseTime: "15-30 minutes"
  },
  {
    name: "North Greenville",
    coordinates: { x: 35, y: 25 },
    services: ["Full Service", "Commercial"],
    responseTime: "20-45 minutes"
  },
  {
    name: "South Greenville",
    coordinates: { x: 55, y: 60 },
    services: ["Full Service", "Residential"],
    responseTime: "25-50 minutes"
  },
  {
    name: "East Greenville",
    coordinates: { x: 70, y: 45 },
    services: ["Full Service", "Landscaping"],
    responseTime: "30-60 minutes"
  },
  {
    name: "West Greenville",
    coordinates: { x: 20, y: 50 },
    services: ["Full Service", "Commercial"],
    responseTime: "20-40 minutes"
  }
];

export function InteractiveMap() {
  const [selectedArea, setSelectedArea] = useState<typeof serviceAreas[0] | null>(null);
  const [zoom, setZoom] = useState(1);

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
            Service Area Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve the Greenville area and surrounding communities.
            Click on any location to learn more about our services in that area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-6 bg-gradient-to-br from-green-50 to-lime-50 border-0 shadow-xl">
              {/* Map Controls */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Greenville Service Areas</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
                    className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                  >
                    <ZoomOut className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setZoom(Math.min(2, zoom + 0.2))}
                    className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                  >
                    <ZoomIn className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative bg-gradient-to-br from-green-100 to-lime-100 rounded-2xl overflow-hidden shadow-inner" style={{ height: '500px' }}>
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231B4D3E' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    transform: `scale(${zoom})`
                  }} />
                </div>

                {/* Service Area Pins */}
                {serviceAreas.map((area, index) => (
                  <motion.button
                    key={area.name}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none group ${
                      selectedArea?.name === area.name ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      left: `${area.coordinates.x}%`,
                      top: `${area.coordinates.y}%`,
                      transform: `scale(${zoom}) translate(-50%, -50%)`
                    }}
                    onClick={() => setSelectedArea(area)}
                  >
                    <div className={`relative ${selectedArea?.name === area.name ? 'animate-bounce' : ''}`}>
                      <MapPin className={`w-8 h-8 ${
                        selectedArea?.name === area.name ? 'text-red-600' : 'text-green-600'
                      } drop-shadow-lg`} />
                      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        selectedArea?.name === area.name ? 'bg-red-600' : 'bg-green-600'
                      }`} />
                    </div>

                    {/* Area Label */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-white rounded-lg shadow-lg border whitespace-nowrap text-sm font-semibold ${
                      selectedArea?.name === area.name ? 'text-red-800 border-red-200' : 'text-gray-800 border-gray-200'
                    } opacity-0 group-hover:opacity-100 transition-opacity`}>
                      {area.name}
                    </div>
                  </motion.button>
                ))}

                {/* Central Office Marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                  style={{
                    left: '50%',
                    top: '45%',
                    transform: `scale(${zoom}) translate(-50%, -50%)`
                  }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg animate-pulse" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-red-600 text-white rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
                      Our Office
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-600" />
                    </div>
                  </div>
                </motion.div>

                {/* Zoom Level Indicator */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-gray-600 shadow">
                  Zoom: {Math.round(zoom * 100)}%
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Service Area Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white border-0 shadow-xl sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {selectedArea ? selectedArea.name : "Select an Area"}
              </h3>

              {selectedArea ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedArea.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time:</h4>
                    <p className="text-gray-600">{selectedArea.responseTime}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Schedule Service
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Navigation className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Click on any location pin to view service details and response times for that area.
                  </p>
                </div>
              )}

              {/* Coverage Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Service Coverage</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Radius:</span>
                    <span className="font-semibold">25 miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Areas:</span>
                    <span className="font-semibold">15+ neighborhoods</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Guarantee:</span>
                    <span className="font-semibold">Same day</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}