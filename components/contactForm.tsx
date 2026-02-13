"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    
    setStatus("loading");

    try {
      // Configuration for the mailto link
      const recipient = "your-email@example.com"; // Replace with your email
      const subject = encodeURIComponent(`New Inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n\n` +
        `Message:\n${form.message}`
      );

      // Create the mailto URL
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Trigger the email client
      window.location.href = mailtoUrl;

      // Update UI state
      setStatus("success");
      if (onSuccess) onSuccess();

      // Reset form after a short delay
      setTimeout(() => {
        setForm({ name: "", email: "", message: "", honeypot: "" });
        setStatus("idle");
      }, 3000);

    } catch (err) {
      console.error("Mailto Error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[100px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Sidebar */}
          <div className="md:col-span-2 bg-primary/5 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
                Let's build <span className="text-primary">together.</span>
              </h2>
              <p className="text-white text-sm leading-relaxed">
                Have a vision? We have the tools. Drop us a line and let's start the conversation.
              </p>
            </div>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-sm text-white">
                <span className="p-2 text-card rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone size={16}/>
                </span>
                +44 (783) 199 7881
              </div>
              <div className="flex items-center gap-4 text-sm text-white">
                <span className="p-2 text-card rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone size={16}/>
                </span>
                +234 (902) 489 2746
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-3 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@studio.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white ml-1">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "success"}
                type="submit"
                className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl
                  ${status === "success" 
                    ? "bg-green-500 text-white" 
                    : "bg-primary text-secondary hover:shadow-primary/20"}
                  disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "success" ? "✓ Client Opened" : "Launch Inquiry"}
              </motion.button>

              <AnimatePresence>
                {status === "error" && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-center text-xs mt-2"
                  >
                    Something went wrong.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}