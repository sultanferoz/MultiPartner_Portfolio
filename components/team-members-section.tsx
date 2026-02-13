"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Damilola Emiola",
    role: "Lead Data Scientist & AI Specialist",
    bio: "Data professional with 9+ years in Python scripting, SQL, and Data Modelling. Expert in GPT-4 automation and public sector digital services.",
    image: "/lady.webp",
    url: "/about"
  },
];

export default function TeamMembersSection() {
  const router = useRouter();

  return (
    <section className="relative  py-32 lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] px-4">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        <header className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[42px] lg:text-5xl font-bold  text-blue tracking-tight leading-[1.1]">
              Our <br className="hidden lg:block" />
              <span className="text-secondary">Visionaries</span>
            </h2>
            <p className="mt-6 text-xs lg:text-base text-secondary max-w-2xl">
              Expert minds driving the future of AI and data through 
              innovation and technical excellence. killed at translating complex data into actionable insights for product, operational, and executive teams, with experience in Agile environments and a strong focus on data quality, governance, and stakeholder collaboration.
            </p>
            
            {/* Decorative line for desktop */}
            <div className="hidden lg:block w-24 h-1.5 bg-secondary mt-10 rounded-full" />
          </motion.div>
        </header>

        {/* RIGHT SIDE: Team Member Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.article
              key={member.name}
              onClick={() => router.push(member.url)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative w-full max-w-[400px] cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-200 shadow-5xl transition-all duration-500 group-hover:shadow-secondary/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  priority
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
            
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-2xl border border-black/20 px-4 py-2 rounded-full">
                  <span className="text-secondary text-xs font-bold tracking-widest uppercase">
                    {member.role.split('&')[0]}
                  </span>
                </div>
              </div>

              {/* Floating Info Box */}
              <div className="mt-[-120px] relative z-10 px-4 sm:px-8">
                <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-gray-100 transition-all duration-300 group-hover:border-secondary/30 group-hover:translate-y-[-5px]">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue group-hover:text-secondary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-bold text-sm sm:text-base mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="mt-6 flex items-center text-blue font-black text-xs uppercase tracking-[0.2em] group-hover:text-secondary transition-all">
                    View Full Profile 
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}