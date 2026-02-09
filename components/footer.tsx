"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Twitter,
  Phone,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import logo from "@/public/favicon.webp";
import Image from "next/image";
import Link from "next/link";

const contactInfo = [
  { label: "UK", value: "+447831997881", icon: Phone },
  { label: "Canada/US", value: "+16472343153", icon: Phone },
  { label: "NG", value: "+2349024892746", icon: Phone },
  { label: "Email", value: "damilola.emiola@xxx.com", icon: Mail },
];

const socialLinks = [
  { Icon: Twitter, href: "#" },
  { Icon: Mail, href: "mailto:damilola.emiola@xxx.com" },
  { Icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white pt-20 pb-10 px-6 sm:px-12 border-t border-white/5 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <Link href="/" className="hover:opacity-80 transition-opacity">
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

          {/* Contact Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                    <item.icon size={16} />
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

        {/* Divider */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Socials */}
          <div className="flex gap-4 order-2 md:order-1">
            {socialLinks.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
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

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] z-10" />
    </footer>
  );
}
