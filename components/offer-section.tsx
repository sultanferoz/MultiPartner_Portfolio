"use client";

import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import { MdPermPhoneMsg } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

export default function OfferSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return alert("Please enter your email");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return alert("Please enter a valid email");
    }

    const subject = "New Contact Request";
    const body = `Hello,\n\nMy email is: ${email}\n\nI would like to get in touch.`;

    window.location.href = `mailto:info@dcodeanalytics.xyz.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="  rounded-4xl bg-card -mb-8 " id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-blue px-2 lg:px-4"
        >
          <div className="relative bgGridLines grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-12 overflow-visible">
            <h2 className="text-2xl md:text-4xl font-bold text-primary text-center pt-4">
              Have a Idea?
              <br />
              <span className="text-secondary">Let's Talk!</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="hidden md:flex justify-start relative top-0   -left-21 w-64 h-80 md:w-95 md:h-100  "
            >
              <Image
                src="/professional-woman-in-business-outfit-pointing.webp"
                alt="Special offer"
                height={100}
                width={100}
                priority
                className="w-full h-full object-cover object-start"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-end text-center lg:text-right"
            >
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="hidden md:flex text-card text-base max-w-sm text-center lg:text-left"
              >
               Do you have a project We can help you with? Let's talk about it.
              </motion.p>
              <div className="w-full max-w-sm mt-4">
                <div className="mb-20 md:mb-0 flex items-center w-full rounded-full p-1 bg-gradient-to-r from-[#1e9fa8]/70 to-[#1a7f8f]/70 backdrop-blur-md border border-white/20 shadow-lg">
                  <TextField
                    placeholder="Enter Your Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: 52,
                        borderRadius: "9999px",
                        color: "white",
                        background: "transparent",
                        paddingLeft: "12px",
                        "& fieldset": { border: "none" },
                      },
                      "& .MuiOutlinedInput-input::placeholder": {
                        color: "rgba(255,255,255,0.65)",
                        opacity: 1,
                      },
                    }}
                  />

                  <motion.button
                    onClick={handleSubmit}
                    aria-label="handleSubmit"
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
                      text-2xl
                    "
                  >
                    <MdPermPhoneMsg />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
