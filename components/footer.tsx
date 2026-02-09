"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";
import logo from "@/public/favicon.webp";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white pt-16 pb-2 px-6 z-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center justify-start  gap-2 cursor-pointer"
        >
          <Link href="/">
            <Image src={logo} alt="logo" width={99} height={99} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-3 lg:gap-14 justify-between  "
        >
          
         
          <h2 className="text-sm font-bold text-primary ">
            UK
            <br />
            <span className="text-xs hover:underline underline-offset-3 text-white/60">  +447831997881</span>
          </h2>
          <h2 className="text-sm font-bold text-primary ">
            Canada/US
            <br />
            <span className="text-xs hover:underline underline-offset-3 text-white/60"> +16472343153</span>
          </h2>
          <br />
          <h2 className="text-sm font-bold text-primary ">
            NG
            <br />
            <span className="text-xs hover:underline underline-offset-3 text-white/60"> +2349024892746</span>
          </h2>
          <h2 className="text-sm font-bold text-primary ">
            Email
            <br />
            <span className="text-xs hover:underline underline-offset-3 text-white/60"> damilola.emiola@xxx.com </span>
          </h2>
          <motion.div>
          <div className="flex items-end justify-end gap-4   ">
            {[Twitter, Mail, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, color: "#c4e962" }}
                className="text-white/60 hover:text-[#c4e962] transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-b border-white/10 py-2" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex py-2 flex-col md:flex-row justify-center  items-center text-sm text-white/60 gap-4"
        >
          <p>© 2026 All rights reserved</p>
          
        </motion.div>
      </div>
    </footer>
  );
}
