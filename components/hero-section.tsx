"use client";

import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import heroimg from "@/public/lady.webp";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bgGridLines relative pt-32 lg:pt-16 pb-4 px-6 bg-[#239ba4]  flex items-start">
      

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className=" text-[42px]  lg:text-6xl md:text-6xl font-bold text-white md:leading-tight">
                Damie’s Digital
                <span className="block text-[#c4e962]">Playground</span>
              </h1>
              <p className="tex-base lg:text-lg text-white/80 max-w-lg">
                Hi! I'm Damie, a dynamic and passionate data scientist with a
                knack for transforming complex information into actionable
                intelligence. Welcome to my digital playground, where data comes
                alive and insights take flight 😃.
              </p>
            </div>

            {/* Email Input & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md w-full"
            >
              
              <div className="flex items-center w-full rounded-full p-1 bg-gradient-to-r from-[#1e9fa8]/70 to-[#1a7f8f]/70 backdrop-blur-md border border-white/20 shadow-lg">
                {/* Email Input */}
                <TextField
                  placeholder="Enter Your Email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 52,
                      borderRadius: "9999px",
                      color: "white",
                      background: "transparent",
                      paddingLeft: "12px",
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "14px 12px",
                    },
                    "& .MuiOutlinedInput-input::placeholder": {
                      color: "rgba(255,255,255,0.65)",
                      opacity: 1,
                    },
                  }}
                />

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
        h-[52px]
        px-8
        rounded-full
        font-semibold
        text-[#1a2332]
        bg-[#c4e962]
        shadow-[0_0_25px_rgba(196,233,98,0.5)]
        whitespace-nowrap
      "
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>

            {/* Free Consultation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-white"
            >
              <div className="w-5 h-5 rounded-full bg-[#c4e962] flex items-center justify-center text-[#1a2332]">
                ✓
              </div>
              <span className="text-sm text-[#c4e962]">
                Come on in and explore my portfolio.
              </span>
            </motion.div>

            {/* Customer Review */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-white border-2 border-[#4a9ba5]"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    4.8 Customer Review
                  </p>
                  <p className="text-white/70 text-xs">
                    They felt satisfied and helped
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Content - Image & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bottom-0"
          >
            {/* Main Image Placeholder */}
            <motion.div className="relative   z-4 overflow-visible">
              <Image
                src={heroimg}
                alt="heroimage"
                 priority
                className="relative md:-bottom-24 xl:-left-20 md:-left-8 bottom-2 -left-4"
              />
            </motion.div>

            {/* Monthly Report Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="absolute md:top-10 lg:top-20 xl:right-16 lg:right-0 md:-right-2 -right-2 -top-4   rounded-2xl p-8 bg-gradient-to-r from-[#1e9fa8]/70 to-[#1a7f8f]/70 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <p className="text-xs text-card mb-1">Monthly Report</p>
              <div className="flex items-end gap-1 h-16">
                <div className="w-1 h-8 bg-[#c4e962] rounded" />
                <div className="w-1 h-12 bg-[#c4e962] rounded" />
                <div className="w-1 h-10 bg-[#c4e962] rounded" />
                <div className="w-1 h-8 bg-[#c4e962] rounded" />
                <div className="w-1 h-12 bg-[#c4e962] rounded" />
                <div className="w-1 h-10 bg-[#c4e962] rounded" />
                <div className="w-1 h-8 bg-[#c4e962] rounded" />
                <div className="w-1 h-12 bg-[#c4e962] rounded" />
                <div className="w-1 h-10 bg-[#c4e962] rounded" />
                <div className="w-1 h-8 bg-[#c4e962] rounded" />
                <div className="w-1 h-12 bg-[#c4e962] rounded" />
                <div className="w-1 h-10 bg-[#c4e962] rounded" />
              </div>
            </motion.div>

            {/* New Clients Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: 10 }}
              className="absolute lg:top-70 xl:left-30 md:left-1 md:top-50 top-30 -left-2 rounded-3xl p-4 bg-gradient-to-r from-[#1e9fa8]/70 to-[#1a7f8f]/70 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#1a2332]  flex items-center justify-center text-sm">
                💼
              </div>
              <div>
                <p className="text-xs text-card">7 Years</p>
                <p className="font-bold text-primary">
                  Experience {"   "} .....
                </p>
              </div>
            </motion.div>

            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="absolute z-10 xl:bottom-61 xl:-right-8 lg:bottom-21 lg:right-2 md:-bottom-4 md:right-0 bottom-0 right-0 bg-[#c4e962] rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center "
            >
              <div className="w-10 h-10 rounded-full bg-[#1a2332] items-center justify-center flex  text-xl text-center">
                💁🏻
              </div>
              <p className="text-base font-medium text-[#1a2332]">About Me</p>
              <p className="text-xs text-[#1a2332] mt-1 max-w-xs">
                Data Scientist, Data Analyst <br /> & Machine Learning
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
