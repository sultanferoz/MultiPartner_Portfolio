"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    year: "2023",
    title: "MSc Artificial Intelligence (Distinction)",
    school: "University of East London",
    desc: "Advanced AI, machine learning, NLP, and scalable data systems with real-world deployment focus.",
  },
  {
    year: "2014",
    title: "BSc Mathematics",
    school: "Bowen University",
    desc: "Strong foundation in statistics, computational modelling, and analytical problem-solving.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    org: "Microsoft",
    year: "2025",
  },
  {
    title: "SheCodes AI Add-on",
    org: "SheCodes",
    year: "2024",
  },
  {
    title: "Accelerating End-to-End Data Science Workflows",
    org: "NVIDIA",
    year: "2024",
  },
  {
    title: "Applied Data Science",
    org: "WorldQuant University",
    year: "2020",
  },
  {
    title: "Derivatives Operations",
    org: "CISI",
    year: "2018",
  },
];

export default function EducationAndCerts() {
  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[32px] lg:text-[48px] font-bold text-secondary mb-4">
            <span className="text-muted">My</span> Education
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Academic foundations that power my data science, AI, and automation work.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-secondary/60 to-transparent -translate-x-1/2" />

          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              } mb-16`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-6 w-[90%] md:w-[45%]"
              >
                <span className="text-sm text-secondary font-semibold">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold text-[#1a2332] mt-2">
                  {edu.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{edu.school}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </motion.div>

              {/* Dot */}
              <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            </motion.div>
          ))}
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[32px] lg:text-[48px] font-bold text-secondary mb-4">
            <span className="text-muted">Professional</span> Certifications
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Industry-recognized credentials validating my technical and analytical expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#1a2332] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500">{cert.org}</p>
                </div>

                <span className="text-sm font-semibold text-secondary mt-4">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
