"use client";

import { motion } from "framer-motion";
import { url } from "inspector";

export default function ScaleSection() {
  return (
    <section className="py-20 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[42px] md:text-5xl font-bold text-seecondery mb-4">
            Who m'I
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
            className="relative  rounded-3xl overflow-hidden "
          >
            <img
              src="/damei.png"
              alt="Professional man"
              className="aspect-square object-cover object-top w-full h-"
            />

            {/* Floating Cards */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="absolute left-4 bottom-20 bg-white rounded-lg p-4 shadow-xl max-w-xs"
            >
              <p className="text-xs text-gray-500 mb-2">Detail Investment</p>
              <p className="text-xs text-gray-600">Nunc</p>
              <p className="text-xs text-gray-600">Purchased</p>
              <p className="text-xs text-gray-600">Rent</p>
              <div className="flex justify-between mt-2 text-xs font-semibold">
                <span>$367,336.12</span>
              </div>
              <div className="mt-2 text-xs">
                <input type="checkbox" checked readOnly className="mr-1" />
                <span className="text-gray-600">Terms and Policy</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-3 w-full bg-[#c4e962] text-[#1a2332] rounded-full text-xs font-bold py-2 hover:bg-[#b4d952]"
              >
                Invest Now from $200.00
              </motion.button>
            </motion.div> */}

            {/* Floating Icons */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-4">
              {[
                {
                  icon: "🔐",
                  url: "https://clammy-tent-c59.notion.site/Damie-s-Digital-Playground-3b9a8f33ec0146d58cd8e24c1c826b5b",
                },
                {
                  icon: "💰",
                  url: "https://file.notion.so/f/f/5dd03b36-67a8-4465-afd0-9d5383cb8c85/e205840c-881c-41e0-a10a-0e33b9c9043a/Microsoft_PBI_Associate_Certificate.pdf",
                },
                {
                  icon: "🏗️",
                  url: "https://file.notion.so/f/f/5dd03b36-67a8-4465-afd0-9d5383cb8c85/bce16a67-1331-4c1f-a173-6433eb0b8767/Derivatives_Operations_Certificate.pdf",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="w-8 h-8 bg-[#1a2332] text-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>

            {/* Top Right Price Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-6 right-6 bg-[#c4e962] text-[#1a2332] rounded-full px-4 py-2 font-bold"
            >
              $50.40
            </motion.div> */}
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
                icon: "🎓",
                title: "Education",
                desc: "MSc Artificial Intelligence (Distinction) - University of East London (May 2023) \n BSc Mathematics - Bowen University (July 2014)",
              },
              {
                icon: "📜",
                title: "Certification",
                desc: "Microsoft Certified: Power BI Data Analyst Associate \n his is to certify that  Damilola Emiola 680851 has achieved a Pass at level 3 in the following unit Derivatives Operations",
              },
              {
                icon: "🧠",
                title: "Tech Stack",
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
