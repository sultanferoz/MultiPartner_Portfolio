"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamHeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-10 overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 lg:w-[40%] text-left mb-14 lg:mb-0"
      >
        <h1 className="text-[34px] sm:text-[42px] lg:text-[52px] font-semibold tracking-tight text-primary leading-[1.1]">
          Meet Our Team
        </h1>

        <p className="mt-4 max-w-md text-black/70 text-base lg:text-lg leading-relaxed">
          A carefully selected group of engineers, designers, and data experts
          dedicated to building intelligent, impactful solutions.
        </p>
      </motion.div>

      {/* Image Card */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="group relative rounded-[40px] overflow-hidden"
          style={{
            width: "clamp(360px, 60vw, 440px)",
            height: "clamp(480px, 65vh, 560px)",
          }}
        >
          {/* Image */}
          <Image
            src="/lady.webp"
            alt="Team Member"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Glass Border */}
          <div className="absolute inset-0 rounded-[40px] ring-1 ring-white/20" />

          {/* Soft shadow */}
          <div className="absolute inset-0 rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.25)]" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
              Damilola Emiola
            </h3>
            <p className="mt-1 text-sm md:text-base text-white/80">
              Lead Data Scientist & AI Specialist
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
