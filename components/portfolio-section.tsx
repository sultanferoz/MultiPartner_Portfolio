"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const PORTFOLIO_ITEMS = [
     {
      src: "/portfolio/PMO App Welcome Page.jpg",
      title: "PMO App Welcome Page",
      desc: "Visual asset editing and layout refinement for PMO App Welcome Page"
    },
     {
      src: "/portfolio/PMO App Update Page.png",
      title: "PMO App Update Page",
      desc: "Visual asset editing and layout refinement for PMO App Update Page"
    },
     {
      src: "/portfolio/PMO App Thank you Page.png",
      title: "PMO App Thank you Page",
      desc: "Visual asset editing and layout refinement for PMO App Update Page"
    },
  {
    src: "/portfolio/CX Benefits.png",
    title: "CX Benefits",
    desc: "Customer experience benefits dashboard showcasing KPIs and performance insights."
  },
  {
    src: "/portfolio/CX Churn Analytics.png",
    title: "CX Churn Analytics",
    desc: "Churn analytics visualizing retention, drop-off patterns, and engagement metrics."
  },
  {
    src: "/portfolio/CX Demographics.png",
    title: "CX Demographics",
    desc: "Demographic breakdown of customers with regional and behavioral data."
  },
  {
      src: "/portfolio/CX Interactions.png",
      title: "CX Interactions",
      desc: "Customer interaction flows and communication touchpoints overview."
    },
    {
        src: "/portfolio/CX Transactions.png",
        title: "CX Transactions",
        desc: "Transaction monitoring dashboard highlighting volume and trends."
    },
    {
        src: "/portfolio/GLA 1.2.png",
        title: "GLA 1.2",
        desc: "Geo-location analytics visualization with layered data insights."
    },
    {
        src: "/portfolio/GLA 1.png",
        title: "GLA 1",
        desc: "Geographic mapping with clustered performance metrics."
    },
    {
        src: "/portfolio/GLA 2.png",
        title: "GLA 2",
        desc: "Advanced regional analytics with comparative overlays."
    },
    {
        src: "/portfolio/GLA 3.png",
        title: "GLA 3",
        desc: "Spatial data visualization with trend-based indicators."
    },
    {
        src: "/portfolio/WhatsApp Image 2023-07-05 at 18.17.15.jpg",
        title: "Live Report",
        desc: "Mobile-based reporting snapshot for real-time insights."
    },
    {
        src: "/portfolio/data map.gif",
        title: "Data Map",
        desc: "Animated data mapping showing live geographic data flow."
    },
    {
        src: "/portfolio/RSA Perf Script 1.jpeg",
        title: "RSA Perf Script ",
        desc: "RSA Perf Script 1.jpeg"
    },
    {
        src: "/portfolio/RSA Perf Script 2.jpeg",
        title: "RSA Perf Script ",
        desc: "RSA Perf Script 1.jpeg"
    },
    {
        src: "/portfolio/RSA Perf Script 3.jpeg",
        title: "RSA Perf Script ",
        desc: "RSA Perf Script 1.jpeg"
    },
    {
        src: "/portfolio/RSA Perf Script 4.jpeg",
        title: "RSA Perf Script ",
        desc: "RSA Perf Script 1.jpeg"
    },
    {
        src: "/portfolio/RSA Perf Script 5.jpeg",
        title: "RSA Perf Script ",
        desc: "RSA Perf Script 1.jpeg"
    },
];

export default function PortfolioPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main className="w-screen min-h-screen bg-white mt-32">
     
           <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center my-16 sm:my-24"
        >
           <h1 className=" text-[42px]  lg:text-6xl font-medium text-secondray md:leading-tight  !capitalize mb-4">
               Portfolio
              
              </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            A diverse group of passionate professionals, each bringing unique skills and
            experiences to drive innovation and excellence in every project we undertake.
          </p>
        </motion.div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">


        {PORTFOLIO_ITEMS.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[35vh] sm:h-[40vh] md:h-[33vh] lg:h-[25vh] overflow-hidden group border-1 border-secondary"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={index < 4}
            />

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/70 transition-opacity duration-300 px-6 text-center ${
                hovered === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-white">
                <h3 className="text-sm md:text-base font-semibold tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}


