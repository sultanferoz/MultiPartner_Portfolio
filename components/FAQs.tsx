"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

const faqs_section = [
  {
    question: "What is Damie’s professional background?",
    answer:
      "Damie is a Data Scientist and Microsoft Certified Power BI Data Analyst with over 7 years of experience in transforming complex data into actionable business insights through analytics, dashboards, and machine learning models.",
  },
  {
    question: "What technologies and tools does Damie specialize in?",
    answer:
      "Damie specializes in Python (Pandas, PySpark, TensorFlow, Keras, OpenCV), SQL and T-SQL, Microsoft Power BI (DAX, M), and MATLAB for advanced data analysis, visualization, and predictive modeling.",
  },
  {
    question: "What kind of projects has Damie worked on?",
    answer:
      "Damie has worked on Power BI dashboards, Power Apps solutions, backend investment management systems, deep learning image models, time series analysis, machine learning classification models, and computer vision research projects.",
  },
  {
    question: "What is Damie’s educational background?",
    answer:
      "Damie holds an MSc in Artificial Intelligence (Distinction) from the University of East London and a BSc in Mathematics from Bowen University.",
  },
  {
    question: "Is Damie open to relocation and collaboration?",
    answer:
      "Yes, Damie is willing to relocate and is open to collaborating on data-driven projects involving analytics, machine learning, business intelligence, and digital transformation.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#3a8b95] to-[#2a6b75]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4">
              faqs_section
            </span>

            <h2 className="text-5xl font-bold text-white mb-6">
              Frequently asked
              <br />
              <span className="text-[#c4e962]">questions</span>
            </h2>

            <p className="text-white/80 max-w-md">
              Feel free to ask about my services, experience, technical skills,
              and availability for collaboration or relocation.
            </p>
          </motion.div>

          {/* Right FAQ Panel (Scroll Container) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative  max-h-[320px] md:max-h-[400px] overflow-y-auto scrollbar-hide space-y-4"
          >
            {faqs_section.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-2xl border border-gray-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-[#1a2332] text-sm md:text-base">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-white"
                    >
                      <ChevronUp size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="px-5 pb-5 text-gray-600 text-sm leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
