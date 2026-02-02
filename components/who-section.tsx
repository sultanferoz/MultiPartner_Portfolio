"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { url } from "inspector";

export default function WhoAmI() {
  return (
    <section className="py-20 px-6 bg-[#f5f5f5]" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] lg:text-[48px] font-bold text-secondary  mb-4">
              <span className="text-muted">Who</span>
              {" "}
              m'I
            </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            I'm a results-driven Data Scientist and Microsoft certified Power BI
            Data Analyst with a passion for transforming complex data into
            actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative  rounded-xl overflow-hidden "
          >
            <Image
              src="/damei.webp"
              alt="Professional man"
              width={100}
              height={100}
               priority
              className="aspect-square object-cover object-top w-full h-full"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: "",
                title: "Education:",
                desc: "MSc Artificial Intelligence (Distinction) - University of East London (May 2023) \n BSc Mathematics - Bowen University (July 2014)",
              },
              {
                icon: "",
                title: "Certification:",
                desc: "Microsoft Certified: Power BI Data Analyst Associate \n his is to certify that  Damilola Emiola 680851 has achieved a Pass at level 3 in the following unit Derivatives Operations",
              },
              {
                icon: "",
                title: "Tech Stack:",
                desc: "Python Programming (Pandas, Pyspark, Cv2, Keras, Tensorflow) \n SQL, T-SQL \n Microsoft Power BI (DAX, M) \n MATLAB",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl ">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2332] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
