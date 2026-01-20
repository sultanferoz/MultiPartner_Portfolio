"use client";

import { motion } from "framer-motion";
import { TextField } from "@mui/material";

export default function OfferSection() {
  return (
    <section className="pt-[80px] px-6 bg-card -mb-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl  bg-muted px-8  md:px-16"
        >
          

          {/* GRID CONTAINER */}
          <div className="relative bgGridLines z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-12 overflow-visible">

            {/* LEFT TEXT */}
            
           
              <h2 className="text-4xl font-bold text-primary ">
              Have a Project Idea?
              <br />
              <span className="text-secondary">Let's Talk!</span>
            </h2>

            {/* CENTER IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-start relative -top-4 -left-21 w-64 h-80 md:w-95 md:h-100"
            >
              
                <img
                  src="/professional-woman-in-business-outfit-pointing.jpg"
                  alt="Special offer"
                  className="w-full h-full object-cover object-start"
                />
            
            </motion.div>

            {/* RIGHT CONTENT */}
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
              className="text-card text-base max-w-sm text-center lg:text-left"
            >
              Mattis ante vel malesuada vestibulum sed. Ac velit eget dis nunc
              vulputate felis.
            </motion.p>

              {/* INPUT GROUP */}
              <div className="w-full max-w-sm mt-4">
                <div className="flex items-center w-full rounded-full p-1 bg-gradient-to-r from-[#1e9fa8]/70 to-[#1a7f8f]/70 backdrop-blur-md border border-white/20 shadow-lg">
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
                        "& fieldset": { border: "none" },
                      },
                      "& .MuiOutlinedInput-input::placeholder": {
                        color: "rgba(255,255,255,0.65)",
                        opacity: 1,
                      },
                    }}
                  />

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
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
