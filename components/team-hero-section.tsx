"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamHeroSection() {
  return (
    <section className="bgGridLines min-h-screen h-screen relative flex flex-col px-4 bg-muted overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-28 lg:pt-32 text-center mb-10 flex-shrink-0"
      >
        <h1 className="text-[32px] sm:text-[38px] md:text-4xl lg:text-5xl font-medium text-white leading-tight">
          Meet Our Team
        </h1>
        <p className="text-white/85 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-3">
          A diverse team of passionate professionals driving innovation and
          excellence in every project.
        </p>
      </motion.div>

      {/* Center Tile */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[36px] overflow-hidden shadow-2xl group"
          style={{
            width: "clamp(280px, 70vw, 420px)",
            height: "clamp(380px, 60vh, 520px)",
          }}
        >
          {/* Placeholder Image */}
          <Image
            src="/damei.webp"
            alt="Team Placeholder"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1">
              Damilola Emiola
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-white/90">
              Lead Data Scientist & AI Specialist
            </p>
          </div>

          {/* Ring Effect */}
          <div className="absolute inset-0 rounded-[36px] ring-1 ring-primary/40" />
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] rounded-[999px] blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(196,233,98,0.4) 0%, rgba(35,155,164,0.3) 40%, transparent 72%)",
        }}
      />
    </section>
  );
}
