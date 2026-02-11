"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/public/favicon.webp";
import Image from "next/image";
import ContactForm from "./contactForm";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  // 🔥 AUTO DETECT BACKGROUND BRIGHTNESS
  useEffect(() => {
    const navbarHeight = 100; // adjust if needed

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
          
          // 🔹 Manual override for image/video sections
          if (section.classList.contains("dark-section")) {
            setTheme("dark");
            return;
          }

          const style = window.getComputedStyle(section);
          const bgColor = style.backgroundColor;

          if (!bgColor || bgColor === "transparent") return;

          const rgb = bgColor.match(/\d+/g);
          if (!rgb) return;

          const brightness =
            (parseInt(rgb[0]) * 299 +
              parseInt(rgb[1]) * 587 +
              parseInt(rgb[2]) * 114) /
            1000;

          if (brightness < 128) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor =
    theme === "dark" ? "text-white" : "text-black";

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full z-50 bg-white/20 backdrop-blur-3xl border-b border-white/20 shadow-xl transition-colors duration-500"
      >
        <nav className="max-w-7xl mx-auto py-3 px-5 flex items-center justify-between">

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={90}
                height={90}
                className={`transition duration-500 ${
                  theme === "dark" ? "invert" : ""
                }`}
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center gap-16 text-lg font-medium transition-colors duration-500 ${textColor}`}
          >
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/team" className="hover:opacity-70 transition-opacity">
              Team
            </Link>
            <Link href="/portfolio" className="hover:opacity-70 transition-opacity">
              Portfolio
            </Link>
          </div>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className={`px-8 py-3 rounded-full font-bold bg-primary/60 hover:bg-primary ${textColor} hidden md:flex `}>
            Contact
          </motion.button>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl border transition-colors duration-500 ${textColor}`}
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
            className="md:hidden bg-white/20 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl mt-2 px-6 py-4"
          >
            <div className={`flex flex-col items-center gap-4 text-lg font-medium ${textColor}`}>
              <Link onClick={() => setOpen(false)} href="/" className="hover:opacity-70">
                Home
              </Link>
              <Link onClick={() => setOpen(false)} href="/team" className="hover:opacity-70">
                Team
              </Link>
              <Link onClick={() => setOpen(false)} href="/portfolio" className="hover:opacity-70">
                Portfolio
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setOpen(false);
                  openModal();
                }}
                className="px-8 py-3 rounded-full font-bold bg-primary text-white"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-[100] bg-black/40"
            />

            <div className="fixed inset-0 z-[101] flex items-center justify-center p-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white z-40"
                >
                  <X className="w-5 h-5" />
                </button>

                <ContactForm />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
