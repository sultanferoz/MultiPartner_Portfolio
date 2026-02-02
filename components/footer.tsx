"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white py-16 px-6 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#c4e962] rounded-full flex items-center justify-center">
                <span className="text-[#1a2332] font-bold">⚡</span>
              </div>
              <span className="font-bold text-lg">Urit</span>
            </div>
            <p className="text-sm text-white/60">
            Contact Info
            </p>
              <h2 className="text-base font-bold text-primary ">
              Mobile: 07831997881
              <br />
              <span className="text-card">Email: dammie.emiola@gmail.com</span>
            </h2>
            <div className="flex gap-4 mt-6">
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

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-6 text-[#c4e962]">Company</h3>
            <ul className="space-y-3">
              {["Works", "Clients", "FAQs", "Contact"].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Who We Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-6 text-[#c4e962]">Who We Help</h3>
            <ul className="space-y-3">
              {["Lenders", "Investors", "Proptech", "Brokers"].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-6 text-[#c4e962]">Resources</h3>
            <ul className="space-y-3">
              {["Power BI", " PMO", "BWPI", "NIPM","IDPPM",""].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-4"
        >
          <p>© 2026 All rights reserved</p>
          <div className="flex gap-6">
            <motion.a href="#" whileHover={{ color: "#c4e962" }} className="hover:text-[#c4e962] transition-colors">
              Privacy Policy
            </motion.a>
            <motion.a href="#" whileHover={{ color: "#c4e962" }} className="hover:text-[#c4e962] transition-colors">
              Terms & Conditions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
