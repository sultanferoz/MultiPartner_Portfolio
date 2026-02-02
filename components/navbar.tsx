"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/public/favicon.webp"
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed  bg-muted z-50 w-full backdrop-blur-md shadow-lg "
    >
      <nav className=" max-w-7xl mx-auto py-3  px-[20px] flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
        <Link
        href="/"
         >
         <Image
         src={logo}
         alt="logo"
         width={90}
         height={90}
         />
        
        </Link>
          
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-16 text-sm font-medium text-muted-foreground">
          <Link
            href="/"
            className="text-secondary font-medium hover:text-primary hover:underline hover:underline-offset-4 transition-colors text-lg leading-wider font-sans medium "
          >
            Home
          </Link>
          <Link
            href="/team"
            className="text-secondary font-medium hover:text-primary hover:underline hover:underline-offset-4 transition-colors text-lg leading-wider font-sans medium"
          >
            Team
          </Link>
          <Link
            href="/portfolio"
            className="text-secondary font-medium hover:text-primary hover:underline hover:underline-offset-4 transition-colors text-lg leading-wider font-sans medium"
          >
            Portfolio
          </Link>
           <Link
            href="/about"
            className="text-secondary font-medium hover:text-primary hover:underline hover:underline-offset-4 transition-colors text-lg leading-wider font-sans medium"
          >
            About
          </Link>
         
        </div>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-button water-effect px-8 py-3 rounded-full font-bold text-secondary bg-[#c4e962] hover:bg-[#94cf7f]  border-0 whitespace-nowrap hidden md:flex "
        >
          <Link href="/">Contact</Link>
        </motion.button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-secondary font-bold"
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
          className="md:hidden bg-bg-secondary font-bold backdrop-blur-md border border-white/20 shadow-xl rounded-3xl mt-2 px-6 py-4"
        >
          <div className="flex flex-col items-center gap-4 text-sm font-medium text-muted-foreground">
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className="text-secondary font-bold hover:text-primary  transition-colors text-lg font-sans medium "
            >
              Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/team"
              className="text-secondary font-bold hover:text-primary  transition-colors text-lg font-sans medium "
            >
              Team
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/portfolio"
              className="text-secondary font-bold hover:text-primary  transition-colors text-lg font-sans medium "
            >
              Portfolio
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/about"
              className="text-secondary font-bold hover:text-primary  transition-colors text-lg font-sans medium "
            >
              Aboout
            </Link>
           

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button water-effect px-8 py-3 rounded-full font-bold text-secondary  bg-[#c4e962] border-0 whitespace-nowrap"
            >
              <Link onClick={() => setOpen(false)} href="/">
                Contact
              </Link>
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
