"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- DATA ---

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
    certs: "https://learn.microsoft.com/en-us/users/damieemiola/credentials/698aaeb90efa8254?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    id: "microsoft"
  },
  {
    title: "WorldQuant University",
    review: "Scientific Computing and Python for Data Science",
    image: "/certs7.webp",
    certs: "https://wqu.thedataincubator.com/certificate/6516213173714944",
    id: "worldquant"
  },
  {
    title: "Nvidia",
    review: "Demonstrating competence in the completion of Accelerating End-to-End Data Science Workflow",
    image: "/certs8.webp",
    certs: "https://learn.nvidia.com/certificates?id=HoDHqNJORLCSvgyDBwFFuA",
    id: "nvidia"
  },
  {
    title: "SheCodes Plus AI",
    review: "Looking forward to using our new AI bot building skills in our current role.",
    image: "/certs1.webp",
    certs: "https://www.shecodes.io/graduates/136683-damilola-emiola",
    id: "shecodes-ai"
  },
  {
    title: "SheCodes Python Advanced",
    review: "Enjoyed every minute of it!",
    image: "/certs2.webp",
    certs: "https://www.shecodes.io/graduates/136683-damilola-emiola",
    id: "python-adv"
  },
  {
    title: "SheCodes Python Basics",
    review: "Fantastic course! Great new knowledge to add to our python repertoire 😊",
    image: "/certs3.webp",
    certs: "https://www.shecodes.io/graduates/136683-damilola-emiola",
    id: "python-basics"
  },
  {
    title: "SheCodes Plus Add-on",
    review: "Great course, very easy to follow and instructive!",
    image: "/certs4.webp",
    certs: "https://www.shecodes.io/graduates/136683-damilola-emiola",
    id: "shecodes-addon"
  },
  {
    title: "SheCodes Plus",
    review: "Challenging but I'm glad I stuck with it. I look forward to building more apps with the knowledge I've gained!",
    image: "/certs5.webp",
    certs: "https://www.shecodes.io/graduates/136683-damilola-emiola",
    id: "shecodes-plus"
  },
];

// --- MAIN COMPONENT ---

export default function PortfolioPage() {
  const [showAll, setShowAll] = useState(false);

  // Automatically expand certificates if a hash is in the URL on load
  useEffect(() => {
    if (window.location.hash) {
      setShowAll(true);
    }
  }, []);

  const displayedCerts = showAll ? SHECODES_CERTS : SHECODES_CERTS.slice(0, 2);

  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      
      {/* SECTION 1: WHO AM I */}
      <section className="py-20 px-6" id="about">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] lg:text-[48px] font-bold text-[#1a2332] mb-4">
              <span className="text-blue">Damilola </span> Emiola
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Skilled at translating complex data into actionable insights for product, operational, and executive teams, with experience in Agile environments and a strong focus on data quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden"
            >
              <Image
                src="/damei.webp"
                alt="Damilola Emiola"
                width={600}
                height={600}
                priority
                className="aspect-square object-cover object-top w-full h-full"
              />
            </motion.div>

            <div className="space-y-8">
              {/* Education Summary */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-2">Education:</h3>
                <p className="text-gray-600">
                  MSc Artificial Intelligence (Distinction) - UEL <br />
                  BSc Mathematics - Bowen University
                </p>
              </div>

              {/* CLICKABLE CERTIFICATIONS LIST */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-2">Certifications:</h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {SHECODES_CERTS.map((cert, index) => (
                    <span key={cert.id} className="text-gray-600">
                      <Link 
                        href={`#${cert.id}`}
                        onClick={() => setShowAll(true)} 
                        className="text-blue hover:underline font-medium transition-all"
                      >
                        {cert.title}
                      </Link>
                      {index < SHECODES_CERTS.length - 1 && ","}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-2">Tech Stack:</h3>
                <p className="text-gray-600">
                  Python (Pandas, Pyspark, Tensorflow) | SQL | Power BI (DAX)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* SECTION 2: EDUCATION & CERTIFICATES */}
      <section className="py-24 px-6 bg-white" id="qualifications">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Timeline Education */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-blue-100 -translate-x-1/2" />
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`relative flex ${i % 2 === 0 ? "justify-start" : "justify-end"} mb-16`}
              >
                <div className="bg-[#fcfcfc] border border-gray-100 rounded-2xl shadow-sm p-6 w-[90%] md:w-[45%]">
                  <span className="text-sm text-blue font-semibold">{edu.year}</span>
                  <h3 className="text-lg font-bold text-[#1a2332] mt-1">{edu.title}</h3>
                  <p className="text-sm text-gray-500">{edu.school}</p>
                </div>
                <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-blue shadow-md" />
              </motion.div>
            ))}
          </div>

          {/* Detailed Certificates List */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2332] mb-4">Professional Certificates</h2>
              <p className="text-gray-500">Verified credentials and industry-standard training.</p>
            </div>

            <div className="flex flex-col space-y-10">
              {displayedCerts.map((cert, i) => (
                <motion.div
                  key={i}
                  id={cert.id} // This matches the Link href
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row items-center gap-8 bg-[#fdfdfd] border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-shadow scroll-mt-24"
                >
                  <div className="flex-1 order-2 lg:order-1">
                    <h3 className="text-2xl font-bold text-[#1a2332] mb-3">{cert.title}</h3>
                    <div className="flex items-center mb-4 text-yellow-500">
                      ★★★★★ <span className="text-gray-400 text-sm ml-2">Verified</span>
                    </div>
                    <p className="text-gray-600 italic mb-6">"{cert.review}"</p>
                    <Link 
                      href={cert.certs} 
                      target="_blank" 
                      className="inline-block px-6 py-3 bg-blue text-white font-medium rounded-xl hover:bg-secondary transition"
                    >
                      View Full Certificate
                    </Link>
                  </div>
                  <div className="flex-1 order-1 lg:order-2">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-lg border border-gray-100"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LOAD MORE BUTTON */}
            {SHECODES_CERTS.length > 2 && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-4 bg-[#1a2332] text-white font-semibold rounded-full hover:opacity-90 transition"
                >
                  {showAll ? "Show Less" : "View All Certificates"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}