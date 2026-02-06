"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

const faqs_section = [
  {
    question: "What is DCode Analytics?",
    answer:
      "DCode Analytics is a consulting firm specializing in data science, AI automation, and analytics solutions. We help organizations transform complex data into actionable insights, streamline operations with automation, and build scalable data-driven tools.",
  },
  {
    question: "What services does DCode Analytics offer?",
    answer:
      "DCode Analytics provides services in data analytics, AI and machine learning, Power BI dashboards, ETL and data pipeline automation, feature engineering, classification and forecasting models, natural language processing, and cloud-based data solutions.",
  },
  {
    question: "What technologies and tools does DCode Analytics specialize in?",
    answer:
      "We specialize in Python (Pandas, PySpark, NLTK, TensorFlow, Keras, OpenCV), SQL and T-SQL, Microsoft Power BI (DAX, M), Azure Data Services, Databricks, Jupyter Notebooks, and AI tools like GPT-4 for automation and advanced analytics.",
  },
  {
    question: "What kind of projects has DCode Analytics worked on?",
    answer:
      "Our projects include developing interactive dashboards and web applications, automating data workflows, deploying AI-driven tools to streamline operations, designing scalable data models, and providing technical solutions for public sector and corporate clients.",
  },
  {
    question: "Is DCode Analytics open to collaboration and consulting engagements?",
    answer:
      "Yes, DCode Analytics collaborates with organizations globally, offering consulting and hybrid engagement models to support analytics, AI automation, digital transformation, and data-driven decision-making.",
  },
];


export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-muted mb-[80px]" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative   space-y-4 overflow-hidden  "
          >
            {/* <div className="pointer-events-none absolute rounded-2xl  top-1 left-0 w-full h-12 bg-gradient-to-b from-white/80 to-transparent blur-lg z-10" /> */}

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
            {/* <div className="pointer-events-none rounded-2xl  absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/30 to-transparent blur-2xl z-10" /> */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
