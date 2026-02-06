"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const FEATURES_PER_LOAD = 4

const features = [
  {
    icon: "📊",
    title: "Power BI",
    description:
      "The Customer Management Portal was built to make customer information more accessible to the business’s customer experience team.",
    url: "https://clammy-tent-c59.notion.site/Power-BI-Customer-Management-Portal-4d133a7dea7f486bbd29fa22975c2e5a",
  },
  {
    icon: "🧩",
    title: "Power Apps",
    description:
      "The project management office required a dynamic platform on which they could capture their weekly project status for reporting purposes.",
    url: "https://clammy-tent-c59.notion.site/Power-Apps-PMO-Weekly-Reporting-App-4185a7c216214957b99a774ddda55a6c",
  },
  {
    icon: "💼",
    title: "Investment Management Dashboard",
    description:
      "This investment dashboard back-end plug-in enables customers to view returns on their investments over a 10-year period.",
    url: "https://clammy-tent-c59.notion.site/Back-End-Web-Plug-In-Investment-Management-Dashboard-8e417d4ec12644b983baa510206a4b9c",
  },
  {
    icon: "🧠",
    title: "Deep Learning",
    description:
      "Natural images classification using convolutional neural networks for predictive modelling.",
    url: "https://clammy-tent-c59.notion.site/Deep-Learning-Natural-Images-Predictive-Modelling-40d4f1572de84e55b09b21e4e4192ceb",
  },
  {
    icon: "💰",
    title: "Domain Price Prediction Model",
    description:
      "A machine learning model that predicts prices of newly registered domain names using multiple algorithms.",
    url: "https://colab.research.google.com/drive/1X_oHPsZwcjjU7J9BdO5crDkKYviAnRfG",
  },
  {
    icon: "📈",
    title: "Time Series Analysis",
    description:
      "Time series analysis on blogging activity data to identify trends, seasonality, and publishing behavior.",
    url: "https://colab.research.google.com/drive/1nkHQ2tnxLs-KFMG3vLYRrU47VmIRWU5T",
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "https://clammy-tent-c59.notion.site/Computer-Vision-Distress-Detection-in-Asphalt-Pavement-Images-Abridged-Research-Paper-ddce266eebb042b88c42042ccd4d086c",
  },
   {
    icon: "👁️",
    title: "Applcation App Generator",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "/",
  },
   {
    icon: "👁️",
    title: "Cybersecurity Threat Detection using ML Algorithms",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "/",
  },
   {
    icon: "👁️",
    title: "Data Streaming",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "/",
  },
   {
    icon: "👁️",
    title: "Domain Price Prediction",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "/",
  },
   {
    icon: "👁️",
    title: "friday effect jupyter",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "/",
  },
   {
    icon: "👁️",
    title: "friday_effect_workbook (Pyspark)",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "/",
  },
  {
    icon: "👁️",
    title: "Internet Domain Value Classification Model",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "/",
  },
  {
    icon: "👁️",
    title: "Time_Series_Analysis",
    description:
      "Computer vision system for detecting distress in asphalt pavement images using deep learning techniques.",
    url: "/",
  },
]

export default function PortfolioData() {
  const [visibleCount, setVisibleCount] = useState(FEATURES_PER_LOAD)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const visibleFeatures = features.slice(0, visibleCount)

  const toggleReadMore = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="md:pb-20 md:pt-40 py-10 px-6 bg-[#f5f5f5] mb-[80px]" id="my-work">
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
             Relatable & Captivate
              <span className="block text-secondary">
                 Portfolio of Works
              </span>
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleFeatures.map((feature, index) => {
            const isLong = feature.description.length > 70
            const isExpanded = expandedIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="h-full rounded-2xl p-8 bg-white text-secondary border-l-4 border-muted shadow-lg hover:bg-muted hover:text-card hover:border-primary transition-all">
                  <p className="text-4xl mb-4">{feature.icon}</p>

                  {/* Clickable Title */}
                  <a
                    
                    rel="noopener noreferrer"
                    className="block text-lg font-bold mb-3 hover:text-primary hover:pl-2 hover:border-l-2 hover:border-primary hover:underline underline-offset-4"
                  >
                    {feature.title}
                  </a>

                  <p className="text-sm leading-relaxed mb-2">
                    {isLong && !isExpanded
                      ? feature.description.slice(0, 40) + ""
                      : feature.description}
                       {isLong && (
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="mt-0 text-sm font-semibold"
                    >
                      {isExpanded ? "" : "..."}
                    </button>
                  )}
                  </p>

                  <Link
                  href={feature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" underline underline-offset-4 hover:text-primary "
                  >Read more</Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
