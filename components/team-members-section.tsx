"use client";

import { motion } from "framer-motion";

const TEAM_MEMBERS = [
  {
    name: "Damilola Emiola",
    role: "Lead Data Scientist & AI Specialist",
    bio: "Data professional with 9+ years in Python scripting, SQL, and Data Modelling. Expert in GPT-4 automation and public sector digital services.",
    initial: "ME",
  },
];

export default function TeamMembersSection() {
  return (
    <section className="pt-16 mb-[80px] sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[var(--urit-dark)] mb-3">
            Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            A diverse group of passionate professionals, each bringing unique skills and
            experiences to drive innovation and excellence in every project we undertake.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Avatar */}
              <div className="aspect-square sm:aspect-[4/3] bg-gradient-to-br from-[var(--urit-teal)]/20 to-[var(--urit-teal)]/5 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[var(--urit-teal)]/30 border-2 border-[var(--urit-teal)]/50 flex items-center justify-center text-[var(--urit-dark)] font-bold text-xl sm:text-2xl">
                  {member.initial}
                </div>
              </div>
              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[var(--urit-dark)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--urit-teal)] font-medium text-sm sm:text-base mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
