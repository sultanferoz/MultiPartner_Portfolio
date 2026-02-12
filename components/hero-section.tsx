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
        </div>
      </div>
    </section>
  );
}
