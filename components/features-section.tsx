"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FEATURES_PER_LOAD = 4;

const features = [
  {
    icon: "📊",
    title: "Data Visualization",
    description:
      "The Customer Management Portal was built to make customer information more accessible to the business’s customer experience team.",
    url: "/portfolio",
  },
  {
    icon: "🧩",
    title: "Bespoke Applications",
    description:
      "The project management office required a dynamic platform on which they could capture their weekly project status for reporting purposes.",
    url: "/portfolio",
  },
  {
    icon: "💼",
    title: "Web Apps",
    description:
      "This investment dashboard back-end plug-in enables customers to view returns on their investments over a 10-year period.",
    url: "/portfolio",
  },
  {
    icon: "🧠",
    title: "Deep Learning",
    description:
      "Natural images classification using convolutional neural networks for predictive modelling.",
    url: "/portfolio",
  },
  {
    icon: "💰",
    title: "Domain Price Prediction Model",
    description:
      "A machine learning model that predicts prices of newly registered domain names using multiple algorithms.",
    url: "/portfolio",
  },
  {
    icon: "📈",
    title: "Time Series Analysis",
    description:
      "Time series analysis on blogging activity data to identify trends, seasonality, and publishing behavior.",
    url: "/portfolio",
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "/portfolio",
  },
];

export default function FeaturesSection() {
  const [visibleCount, setVisibleCount] = useState(FEATURES_PER_LOAD);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const visibleFeatures = features.slice(0, visibleCount);

  const toggleReadMore = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="md:pb-20 md:pt-40 py-10 px-6 bg-[#f5f5f5]" id="my-work">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <h2 className=" text-[42px] lg:text-5xl font-bold text-muted leading-tight lg:leading-normal">
              Our
              <span className="block text-secondary">Portfolio Of Works</span>
            </h2>

            <div className="max-w-md">
              <p className="text-gray-700 md:text-lg text-base">
                This portfolio will take you through my exhilarating journey
                through the realms of data.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                {visibleCount < features.length && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setVisibleCount((prev) => prev + FEATURES_PER_LOAD)
                    }
                    className="md:text-lg text-base px-8 py-3 bg-[#1a2332] text-white rounded-full font-semibold hover:bg-[#2a3342] transition-colors"
                  >
                    Load More
                  </motion.button>
                )}

                {visibleCount > FEATURES_PER_LOAD && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVisibleCount(FEATURES_PER_LOAD)}
                    className="px-8 py-3 border border-[#1a2332] text-[#1a2332] rounded-full font-semibold hover:bg-[#1a2332] hover:text-white transition-colors"
                  >
                    Load Less
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* The Glass Card */}
              <div
                className="relative h-full flex flex-col p-8 
                      bg-white/40 backdrop-blur-md 
                      rounded-[2rem] border border-white/20 
                      shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] 
                      transition-all duration-300 
                      hover:bg-white/60 hover:border-white/40"
              >
                {/* Soft Glow Ornament */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                {/* Icon with Glass Circle */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600/90 text-sm leading-relaxed line-clamp-4 font-medium">
                    {feature.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="mt-8 pt-6 border-t border-[#1a2332]/5">
                  <a
                    href={feature.url}
                    aria-label="Explore Case Study"
                    className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#1a2332] group/link"
                  >
                    Explore Case Study
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
