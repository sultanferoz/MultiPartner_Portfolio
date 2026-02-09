"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  onSuccess?: () => void; // callback to close modal
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // spam trap
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simple honeypot check
    if (form.honeypot) {
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "", honeypot: "" });

      // auto-close modal after 2.5s
      if (onSuccess) setTimeout(onSuccess, 2500);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Let's Talk 👋
        </h2>
        <p className="text-card mt-2 text-sm md:text-base">
          Have a project in mind? Send us a message.
        </p>
      </div>

      {/* Success Message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 text-center text-green-600 font-medium text-lg"
        >
          ✅ Message sent successfully!
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 text-center text-red-500 font-medium text-lg">
          ❌ {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        {/* Honeypot (hidden field) */}
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          className="hidden"
          autoComplete="off"
        />

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-secondary">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl px-4 py-3 bg-white/70 backdrop-blur-md
                       border border-white/30 focus:border-primary
                       focus:ring-2 focus:ring-primary/30
                       outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-secondary">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-xl px-4 py-3 bg-white/70 backdrop-blur-md
                       border border-white/30 focus:border-primary
                       focus:ring-2 focus:ring-primary/30
                       outline-none transition-all"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-secondary">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full rounded-xl px-4 py-3 bg-white/70 backdrop-blur-md
                       border border-white/30 focus:border-primary
                       focus:ring-2 focus:ring-primary/30
                       outline-none transition-all resize-none"
          />
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          disabled={loading || success}
          type="submit"
          className="w-full py-4 rounded-full font-bold text-secondary
                     bg-primary hover:bg-primary/50
                     transition-colors shadow-lg
                     disabled:opacity-60"
        >
          {loading ? "Sending..." : success ? "Sent!" : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
}
