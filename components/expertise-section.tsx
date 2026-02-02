"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiApachespark,
  SiDatabricks,
  SiGithub,
  SiJupyter,
  SiOpenai,
  SiPostgresql,
} from "react-icons/si";
import { FaProjectDiagram, FaRobot, FaDatabase, FaCogs } from "react-icons/fa";

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
            <h2 className="text-[32px] lg:text-[48px] font-bold text-[#1a2332] mb-8">
              <span className="text-[#4a9ba5]">Achievements &</span>
              <br />
              Dedicated Expertise
            </h2>
            

            {/* Checkmarks */}
            <div className="space-y-4 mb-8">
              {[
                "Transport Policy Shift: Influenced TfL's launch of Off-Peak Fridays through my “Friday Effect” analysis, helping reshape commuter patterns and drive post-pandemic recovery in Central London.",
                "AI Integration at Scale: Deployed GPT-4 automation to streamline data workflows, eliminating 96% of manual review time and setting the groundwork for AI-driven operations in planning.",
                "Civic Data Engagement: Delivered the technical backbone for a mayoral exhibition on planning services, translating complex datasets into accessible visuals viewed by over 1k+ Londoners (est.).",
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

            
          </motion.div>

          {/* Right Image */}
          {/* Right Expertise Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className=" p-8   flex items-center justify-center ">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6  ">
                {[
                  { name: "Python / Pandas", icon: <SiPython /> },
                  { name: "PySpark", icon: <SiApachespark /> },
                  { name: "SQL", icon: <SiPostgresql /> },
                  { name: "Data Pipelines", icon: <FaProjectDiagram /> },
                  { name: "ETL Automation", icon: <FaCogs /> },
                  { name: "Feature Eng.", icon: <FaDatabase /> },
                  { name: "ML Models", icon: <FaRobot /> },
                  { name: "Forecasting", icon: <FaProjectDiagram /> },
                  { name: "NLP", icon: <FaRobot /> },
                  { name: "Databricks", icon: <SiDatabricks /> },
                  { name: "GitHub", icon: <SiGithub /> },
                  { name: "Jupyter", icon: <SiJupyter /> },
                  { name: "Data Modeling", icon: <FaDatabase /> },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="flex flex-col items-center  gap-2 "
                  >
                    <div className="w-14 h-14 rounded-full bg-muted hover:text-primary flex items-center justify-center shadow-xl text-secondary text-2xl">
                      {item.icon}
                    </div>
                    <span className="text-xs   text-secondary font-semibold text-center">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
