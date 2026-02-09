"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

const PORTFOLIO_ITEMS = [
  {
    src: "/portfolio/PMO App Welcome Page.jpg",
    title: "PMO Weekly Reporting App",
    category: "Power Apps",
    desc: "Visual asset editing and layout refinement for PMO App ecosystem.",
    url: "https://clammy-tent-c59.notion.site/Power-Apps-PMO-Weekly-Reporting-App-4185a7c216214957b99a774ddda55a6c"
  },
  {
    src: "/portfolio/PMO App Update Page.png",
    title: "PMO App Update Page",
    category: "Power Apps",
    desc: "Visual asset editing and layout refinement for PMO App Update Page",
    url: "https://clammy-tent-c59.notion.site/Power-Apps-PMO-Weekly-Reporting-App-4185a7c216214957b99a774ddda55a6c"
  },
  {
    src: "/portfolio/CX Benefits.png",
    title: "Customer Management Portal",
    category: "Power BI",
    desc: "End-to-end CX dashboard showcasing KPIs, churn analytics, and demographics.",
    url: "https://clammy-tent-c59.notion.site/Power-BI-Customer-Management-Portal-4d133a7dea7f486bbd29fa22975c2e5a"
  },
  {
    src: "/portfolio/CX Churn Analytics.png",
    title: "CX Churn Analytics",
    url: "https://clammy-tent-c59.notion.site/Power-BI-Customer-Management-Portal-4d133a7dea7f486bbd29fa22975c2e5a"
  },
  {
    src: "/portfolio/GLA 1.2.png",
    title: "Natural Images Predictive Modelling",
    category: "Deep Learning",
    desc: "Deep Learning model for predictive analysis on natural image datasets.",
    url: "https://clammy-tent-c59.notion.site/Deep-Learning-Natural-Images-Predictive-Modelling-40d4f1572de84e55b09b21e4e4192ceb"
  },
  {
    src: "/portfolio/GLA 2.png",
    title: "Internet Domain Price Prediction",
    category: "Data Science",
    desc: "Machine learning model to predict domain valuation based on market trends.",
    url: "https://colab.research.google.com/drive/1X_oHPsZwcjjU7J9BdO5crDkKYviAnRfG#scrollTo=HuwgmRq6cik4"
  },
  {
    src: "/portfolio/WhatsApp Image 2023-07-05 at 18.17.15.jpg",
    title: "Asphalt Distress Detection",
    category: "Computer Vision",
    desc: "Computer Vision research for automated distress detection in pavement images.",
    url: "https://clammy-tent-c59.notion.site/Computer-Vision-Distress-Detection-in-Asphalt-Pavement-Images-Abridged-Research-Paper-ddce266eebb042b88c42042ccd4d086c"
  },
];

export default function PortfolioPage() {
  // Combine items with the same URL
  const combinedItems = useMemo(() => {
    const map = new Map();
    PORTFOLIO_ITEMS.forEach((item) => {
      if (!map.has(item.url)) {
        map.set(item.url, { ...item, images: [item.src] });
      } else {
        const existing = map.get(item.url);
        existing.images.push(item.src);
      }
    });
    return Array.from(map.values());
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-6">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          
           <h2 className="text-[42px] lg:text-5xl font-bold  text-muted tracking-tight leading-[1.1] mb-4">
              Selected {" "}
              <span className="text-secondary">Works</span>
            </h2>
          <p className="text-lg text-slate-600 leading-relaxed border-l-2 border-primary pl-6">
            A fusion of data science and visual precision. Exploring the intersection of 
            predictive modelling, UI refinement, and actionable analytics.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {combinedItems.map((project, idx) => (
          <ProjectCard key={project.url} project={project} index={idx} />
        ))}
      </section>
    </main>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(project.url, "_blank")}
      className="group cursor-pointer relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* URL Stack Indicator (if multiple images) */}
        {project.images.length > 1 && (
          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-800 shadow-sm">
            +{project.images.length - 1} View Variation
          </div>
        )}

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center p-8"
            >
              <div className="text-center">
                <p className="text-white/80 text-sm mb-4 line-clamp-3 font-light leading-relaxed">
                  {project.desc || "Click to view full case study and documentation on Notion."}
                </p>
                <span className="inline-block px-6 py-2 bg-white text-slate-900 text-xs font-bold rounded-full">
                  VIEW PROJECT
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6 flex justify-between items-start">
        <div>
          <span className="text-[10px]  uppercase tracking-[0.2em] text-muted mb-2 block">
            {project.category || "Case Study"}
          </span>
          <h3 className="text-xl font-semibold text-muted group-hover:text-secondary transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="p-4 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all">
          <svg 
            width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="text-slate-400 group-hover:text-white transition-colors rotate-[-45deg] group-hover:rotate-0"
          >
            <path d="M3.5 7.5H11.5M11.5 7.5L8.5 4.5M11.5 7.5L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}