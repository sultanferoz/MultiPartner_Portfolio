"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ExpertiseSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#1a2332] mb-6">
              <span className="text-[#4a9ba5]">Powered By</span>
              <br />
              Dedicated Expertise
            </h2>
            <p className="text-gray-600 mb-8">
              We're seasoned real estate experts who understand that the landscape is changing—and believe it's for the
              better.
            </p>

            {/* Checkmarks */}
            <div className="space-y-4 mb-8">
              {[
                "We partner with forward-thinking companies to scale",
                "Empower their customers with transparency and predictability",
                "Consultative approach on emerging technology.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#c4e962] text-[#1a2332] flex items-center justify-center mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#1a2332] text-white rounded-full font-semibold hover:bg-[#2a3342] transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#4a9ba5] to-[#3a8b95] p-8 h-96 md:h-[500px] flex items-center justify-center">
              <Image
                src="/professional-team-working-together-with-laptop.jpg"
                alt="Professional team"
                width={100}
                height={100}
                 priority
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Team member badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#4a9ba5]/20" />
                  <span className="font-semibold text-sm text-[#1a2332]">Kenneth Allen</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#c4e962]/40 text-white text-xs flex items-center justify-center">
                    💬
                  </div>
                  <span className="font-semibold text-sm text-[#1a2332]">James Hall</span>
                </div>
              </motion.div>

              {/* Icon badges */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                {["📊", "📄", "📈"].map((icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg text-lg"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
