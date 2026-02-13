"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const beforeAfterPairs = [
  {
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
    title: "Residential Lawn Transformation",
    description: "Complete lawn renovation with overseeding and fertilization"
  },
  {
    before: "/images/before2.jpg",
    after: "/images/after2.jpg",
    title: "Commercial Property",
    description: "Professional landscaping for business premises"
  },
  {
    before: "/images/before3.jpg",
    after: "/images/after3.jpg",
    title: "Seasonal Maintenance",
    description: "Year-round care resulting in lush, healthy grass"
  }
];

export function BeforeAfterGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Before & After
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the dramatic difference our expert lawn care services make.
            From dull and damaged to lush and vibrant.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Comparison */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative mb-8"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src={beforeAfterPairs[activeIndex].before}
                  alt="Before"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BEFORE
                </div>
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <Image
                  src={beforeAfterPairs[activeIndex].after}
                  alt="After"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AFTER
                </div>
              </div>

              {/* Slider */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  const startX = e.clientX;
                  const startPosition = sliderPosition;

                  const handleMouseMove = (e: MouseEvent) => {
                    const deltaX = e.clientX - startX;
                    const newPosition = Math.max(0, Math.min(100, startPosition + (deltaX / 4)));
                    setSliderPosition(newPosition);
                  };

                  const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  };

                  document.addEventListener('mousemove', handleMouseMove);
                  document.addEventListener('mouseup', handleMouseUp);
                }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-0.5 bg-gray-400"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mb-8">
            {beforeAfterPairs.map((pair, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveIndex(index);
                  setSliderPosition(50);
                }}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  activeIndex === index ? 'border-green-500' : 'border-gray-200'
                }`}
              >
                <Image
                  src={pair.after}
                  alt={pair.title}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>

          {/* Description */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {beforeAfterPairs[activeIndex].title}
            </h3>
            <p className="text-gray-600">
              {beforeAfterPairs[activeIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}