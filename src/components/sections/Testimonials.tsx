"use client";

import { motion } from "framer-motion";
import { Star, Play, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Springfield, IL",
    rating: 5,
    text: "GreenScape Pro transformed our yard from a patchy mess to a lush paradise. Their smart monitoring system keeps everything perfect year-round.",
    image: "/images/testimonial1.jpg",
    video: "/videos/testimonial1.mp4"
  },
  {
    name: "Mike Chen",
    location: "Riverside, CA",
    rating: 5,
    text: "The organic fertilization program has made our lawn so much healthier. No more chemicals, and it looks amazing. Highly recommend!",
    image: "/images/testimonial2.jpg",
    video: "/videos/testimonial2.mp4"
  },
  {
    name: "Jennifer Davis",
    location: "Austin, TX",
    rating: 5,
    text: "Their 24/7 snow removal saved us during that surprise winter storm. Professional, fast, and reliable. Best lawn service we've ever had.",
    image: "/images/testimonial3.jpg",
    video: "/videos/testimonial3.mp4"
  },
  {
    name: "Robert Wilson",
    location: "Denver, CO",
    rating: 5,
    text: "The precision mowing and landscape design elevated our home's curb appeal significantly. Neighbors are always asking who we use.",
    image: "/images/testimonial4.jpg",
    video: "/videos/testimonial4.mp4"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what homeowners across our service
            area are saying about their GreenScape Pro experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center cursor-pointer">
                      <Play className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-green-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-6">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{String.fromCharCode(65 + i)}</span>
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9★ from 500+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}