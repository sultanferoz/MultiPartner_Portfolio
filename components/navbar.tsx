"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
// import logo from "../../public/logo.svg"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <nav className=" backdrop-blur-md  shadow-lg rounded-3xl p-[20px] flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 bg-[#1a2332] rounded-full flex items-center justify-center">
            <span className="text-yellow-500 font-bold">⚡</span>
          </div>
          <span className="text-[#1a2332] hover:text-white font-bold text-lg">
            Damie
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link
            href="#my-work"
            className="text-[#1a2332] hover:text-white transition-colors text-[16px] font-sans medium "
          >
            My Works
          </Link>
          <Link
            href="#about"
            className="text-[#1a2332] hover:text-white transition-colors text-[16px] font-sans medium"
          >
            About
          </Link>
          <Link
            href="#clients"
            className="text-[#1a2332] hover:text-white transition-colors text-[16px] font-sans medium"
          >
            Clients
          </Link>
          <Link
            href="#faq"
            className="text-[#1a2332] hover:text-white transition-colors text-[16px] font-sans medium"
          >
            FAQ
          </Link>
        </div>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-button water-effect px-8 py-3 rounded-full font-bold text-card bg-[#c4e962] hover:bg-[#94cf7f] hover:text-[#1a2332] border-0 whitespace-nowrap hidden md:flex "
        >
          <Link href="#contact">Contact</Link>
        </motion.button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-[#1a2332]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-bg-[#1a2332] backdrop-blur-md border border-white/20 shadow-xl rounded-3xl mt-2 px-6 py-4"
        >
          <div className="flex flex-col items-center gap-4 text-sm font-medium text-muted-foreground">
            <Link
              onClick={() => setOpen(false)}
              href="#my-work"
              className="text-[#1a2332] hover:text-white transition-colors text-[16px] font-sans medium "
            >
              My Works
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="#about"
              className="text-[#1a2332] hover:text-white transition-colors text-[16px] font-sans medium "
            >
              About
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="#clients"
              className="text-[#1a2332] hover:text-white transition-colors text-[16px] font-sans medium "
            >
              Clients
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="#faq"
              className="text-[#1a2332] hover:text-white transition-colors text-[16px] font-sans medium "
            >
              FAQ
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button water-effect px-8 py-3 rounded-full font-bold text-[#1a2332] bg-[#c4e962] border-0 whitespace-nowrap"
            >
              <Link onClick={() => setOpen(false)} href="#contact">
                Contact
              </Link>
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
