"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Award, Clock } from "lucide-react";

const teamMembers = [
  {
    name: "John Martinez",
    role: "Founder & CEO",
    image: "/api/placeholder/300/300",
    bio: "With over 15 years in lawn care, John founded GreenScape Pro with a vision for sustainable, premium lawn services.",
    experience: "15+ years",
    certifications: ["Certified Lawn Care Professional", "Organic Land Care Specialist"],
    email: "john@greenscapepro.com",
    phone: "(555) 123-4567"
  },
  {
    name: "Sarah Chen",
    role: "Operations Director",
    image: "/api/placeholder/300/300",
    bio: "Sarah oversees all operations and ensures every lawn receives the highest quality care with precision and attention to detail.",
    experience: "12+ years",
    certifications: ["Landscape Management Professional", "Pesticide Applicator License"],
    email: "sarah@greenscapepro.com",
    phone: "(555) 123-4568"
  },
  {
    name: "Mike Rodriguez",
    role: "Lead Technician",
    image: "/api/placeholder/300/300",
    bio: "Mike leads our team of skilled technicians, bringing expertise in advanced lawn care techniques and equipment operation.",
    experience: "10+ years",
    certifications: ["Commercial Pesticide License", "Turfgrass Specialist"],
    email: "mike@greenscapepro.com",
    phone: "(555) 123-4569"
  },
  {
    name: "Emily Johnson",
    role: "Customer Experience Manager",
    image: "/api/placeholder/300/300",
    bio: "Emily ensures every customer interaction is exceptional, from initial consultation to final walkthrough.",
    experience: "8+ years",
    certifications: ["Customer Service Excellence", "Project Management Professional"],
    email: "emily@greenscapepro.com",
    phone: "(555) 123-4570"
  }
];

export function TeamSection() {
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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are passionate about lawn care and dedicated to
            delivering exceptional results for every customer.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-lime-100 flex items-center justify-center">
                    <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Experience */}
                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">{member.experience}</span>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Award className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-semibold text-gray-900">Certifications:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge
                          key={certIndex}
                          variant="secondary"
                          className="text-xs bg-green-50 text-green-700 border-green-200"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-green-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href={`tel:${member.phone}`} className="hover:text-green-600 transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;re always looking for passionate professionals to join our mission of
              providing exceptional lawn care services.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              View Career Opportunities
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}