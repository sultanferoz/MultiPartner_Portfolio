"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Twitter,
  Phone,
} from "lucide-react";
import logo from "@/public/favicon.webp";
import Image from "next/image";
import Link from "next/link";

const contactColumnOne = [
  { label: "UK", value: "+44 (783) 199 7881", icon: Phone },
  { label: "Canada/US", value: "+1 (647) 234 3153", icon: Phone },
];

const contactColumnTwo = [
  { label: "NG", value: "+234 (902) 489 2746", icon: Phone },
  { label: "Email", value: "info@dcodeanalytics.xyz", icon: Mail },
];

const socialLinks = [
  { Icon: Mail, href: "mailto:info@dcodeanalytics.xyz" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/dcode-analytics/" },
];

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white pt-20 pb-10 px-6 sm:px-12 border-t border-white/5 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 items-start">
          
          {/* Column 1: Brand Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
                <Image
                  src={logo}
                  alt="logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </Link>
            </motion.div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Solution-driven consulting that makes your data work harder,
              smarter, faster BI Specialists.
            </p>
          </div>

          {/* Column 2: Contact Info Stack 1 */}
          <div className="flex flex-col gap-8 lg:pt-2">
            {contactColumnOne.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                    <item.icon size={14} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-white/80 group-hover:text-white transition-colors underline-offset-4 decoration-primary/30 hover:underline">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 3: Contact Info Stack 2 */}
          <div className="flex flex-col gap-8 lg:pt-2">
            {contactColumnTwo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx + 2) * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                    <item.icon size={14} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-white/80 group-hover:text-white transition-colors underline-offset-4 decoration-primary/30 hover:underline">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 order-2 md:order-1">
            {socialLinks.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4, color: "#c4e962" }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 transition-all border border-white/10"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-1 md:order-2">
            <p className="text-xs text-white/40 font-medium tracking-wide">
              © 2026 <span className="text-white/60">DCode Analytics</span>. ALL
              RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] z-10" />
    </footer>
  );
}