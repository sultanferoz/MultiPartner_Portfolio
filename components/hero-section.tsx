"use client";

import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import heroimg from "@/public/now.png";
import { MdPermPhoneMsg } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return alert("Please enter your email");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return alert("Please enter a valid email");
    }

    const subject = "New Contact Request";
    const body = `Hello,\n\nMy email is: ${email}\n\nI would like to get in touch.`;

    window.location.href = `mailto:damilola.emiola@xxx.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="dark-section herosection bgGridLines  h-screen  relative pt-32 lg:pt-16 pb-4 px-6   flex items-start">
      <div className="max-w-7xl mx-auto w-full self-center relative z-10">
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
              <h1 className=" text-[42px]  lg:text-6xl font-medium text-white md:leading-tight  !capitalize">
                DCode Analytics
                <span className="block text-primary  text-sm  lg:text-base leading-wide">
                  Data Scientists | AI Automation Developers
                </span>
              </h1>
              <p className="text-xs lg:text-base text-white/80 max-w-2xl">
                We deliver data solutions that work smarter, faster, and drive real impact. By combining analytics, automation, and scalable tools, we help businesses turn raw data into actionable insights, empowering better decisions and tangible results.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-white"
            >
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[#1a2332]">
                ✓
              </div>
              <span className="text-sm text-primary">
                AI Software Development
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-white"
            >
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[#1a2332]">
                ✓
              </div>
              <span className="text-sm text-primary">
                AI Automation 
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-white"
            >
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[#1a2332]">
                ✓
              </div>
              <span className="text-sm text-primary">
                Computer Vision
              </span>
            </motion.div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bottom-0"
          >
            <motion.div className="relative z-4 overflow-visible">
              <Image
                src={heroimg}
                alt="Hero"
                priority
                sizes="100vw"
                quality={75}
                className="relative md:-bottom-12  md:left-0 bottom-2 -left-4"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="absolute md:top-10 lg:top-20 xl:right-16 lg:right-0 md:-right-2 -right-2 -top-4 rounded-2xl p-8 bg-gradient-to-r from-[#1e9fa8]/70 to-[#1a7f8f]/70 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <p className="text-xs text-card mb-1">Monthly Report</p>
              <div className="flex items-end gap-1 h-16">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-8 bg-primary rounded" />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: 10 }}
              className="absolute lg:top-70 xl:left-30 md:left-1 md:top-50 top-30 -left-2 rounded-3xl p-4 bg-gradient-to-r from-[#1e9fa8]/70 to-[#1a7f8f]/70 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#1a2332] flex items-center justify-center text-sm">
                💼
              </div>
              <div>
                <p className="text-xs text-card">9 Years</p>
                <p className="font-bold text-primary">
                  Experience {"   "} .....
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="absolute z-10 xl:bottom-61 xl:-right-8 lg:bottom-21 lg:right-2 md:-bottom-4 md:right-0 bottom-0 right-0 bg-primary rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#1a2332] items-center justify-center flex text-xl text-center">
                💁🏻
              </div>
              <p className="text-base font-medium text-[#1a2332]">About Me</p>
              <p className="text-xs text-[#1a2332] mt-1 max-w-xs">
                Data Scientist, Data Analyst <br /> & Machine Learning
              </p>
            </motion.div>
          </motion.div>  */}
        </div>
      </div>
    </section>
  );
}
