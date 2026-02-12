"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const SHECODES_CERTS = [
  {
    title: "Microsoft Certified",
    review: "Power BI Data Analyst Associate",
    image: "/certs6.webp", 
    certs :"https://learn.microsoft.com/en-us/users/damieemiola/credentials/698aaeb90efa8254?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  },
  {
    title: "WorldQuant University",
    review: "Scientific Computing and Python for Data Science",
    image: "/certs7.webp", 
    certs :"https://wqu.thedataincubator.com/certificate/6516213173714944"
  },
  {
    title: "Nvidia",
    review: "Demonstrating competence in the completion of Accelerating End-to-End Data Science Workflow",
    image: "/certs8.webp", 
    certs :"https://learn.nvidia.com/certificates?id=HoDHqNJORLCSvgyDBwFFuA"
  },
  {
    title: "SheCodes Plus AI",
    review: "Looking forward to using our new AI bot building skills in our current role.",
    image: "/certs1.webp", 
    certs :"https://www.shecodes.io/graduates/136683-damilola-emiola"
  },
  {
    title: "SheCodes Python Advanced",
    review: "Enjoyed every minute of it!",
    image: "/certs2.webp",
    certs :"https://www.shecodes.io/graduates/136683-damilola-emiola"
  },
  {
    title: "SheCodes Python Basics",
    review: "Fantastic course! Great new knowledge to add to our python repertoire 😊",
    image: "/certs3.webp",
    certs :"https://www.shecodes.io/graduates/136683-damilola-emiola"
  },
  {
    title: "SheCodes Plus Add-on",
    review: "Great course, very easy to follow and instructive!",
    image: "/certs4.webp",
    certs :"https://www.shecodes.io/graduates/136683-damilola-emiola"
  },
  {
    title: "SheCodes Plus",
    review: "Challenging but I'm glad I stuck with it. I look forward to building more apps with the knowledge I've gained!",
    image: "/certs5.webp",
    certs :"https://www.shecodes.io/graduates/136683-damilola-emiola"
  },
];

export default function EducationAndCerts() {
  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll ? SHECODES_CERTS : SHECODES_CERTS.slice(0, 2);

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto space-y-24">
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
            Academic foundations that power our data science, AI, and automation work.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-secondary/60 to-transparent -translate-x-1/2" />
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex ${i % 2 === 0 ? "justify-start" : "justify-end"} mb-16`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-6 w-[90%] md:w-[45%]"
              >
                <span className="text-sm text-secondary font-semibold">{edu.year}</span>
                <h3 className="text-xl font-bold text-[#1a2332] mt-2">{edu.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{edu.school}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{edu.desc}</p>
              </motion.div>
              <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[32px] lg:text-[48px] font-bold text-secondary mb-4">
            <span className="text-muted">Professional</span> Certificates
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            My completed SheCodes courses with verified certificates and reviews.
          </p>
        </motion.div>

        <div className="flex flex-col space-y-10">
          {displayedCerts.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-6 bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#1a2332] mb-2">{cert.title}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 mr-2">★★★★★</span>
                  <span className="text-gray-500 text-sm">5/5</span>
                </div>
                <p className="text-gray-600 italic mb-4">“{cert.review}”</p>
                <div className="flex gap-4">
                  <Link href={cert.certs} target="_blank" className="px-4 py-2 bg-secondary text-white rounded-full hover:bg-muted transition">
                    View Certificate
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={500}
                  height={300}
                  className="rounded-xl border border-gray-200 shadow-md"
                />
              </div>
            </motion.div>
          ))}
        </div>
        {SHECODES_CERTS.length > 2 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-label="Load cta"
              className="px-6 py-3 bg-secondary text-white font-semibold rounded-full hover:bg-secondary/80 transition"
            >
              {showAll ? "Load Less" : "Load More"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
