"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const FinalCTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 px-6 bg-linear-to-br from-purple-900 via-slate-900 to-purple-900 text-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2
            id="contact-heading"
            className="text-4xl lg:text-5xl font-bold mb-6 text-center"
          >
            We help you lead your market.
          </h2>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            Every great story begins with a conversation. Let&apos;s shape the
            next chapter of your success—brand identity, conversion-first
            websites, or growth strategy.
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.a
            href="#contact-form"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            aria-label="Book a Free Consultation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Consultation
          </motion.a>
        </motion.div>
        <motion.form
          id="contact-form"
          className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl space-y-6"
          aria-describedby="contact-desc"
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p id="contact-desc" className="sr-only">
            Fill this form to start a project conversation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Name *
                <input
                  name="name"
                  required
                  className="w-full mt-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Company
                <input
                  name="company"
                  className="w-full mt-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email *
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full mt-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone
                <input
                  name="phone"
                  type="tel"
                  className="w-full mt-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Project Brief
              <textarea
                name="brief"
                rows={4}
                className="w-full mt-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </label>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Preferred Time
              <input
                name="time"
                type="text"
                className="w-full mt-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Send Inquiry
          </button>
        </motion.form>
        {/* <div
          className="flex justify-center gap-6 mt-12"
          aria-label="Social links"
        >
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            rel="noopener"
            target="_blank"
            className="w-12 h-12 bg-white/20 hover:bg-purple-600 rounded-full flex items-center justify-center font-semibold transition-all"
          >
            FB
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            rel="noopener"
            target="_blank"
            className="w-12 h-12 bg-white/20 hover:bg-purple-600 rounded-full flex items-center justify-center font-semibold transition-all"
          >
            IG
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            rel="noopener"
            target="_blank"
            className="w-12 h-12 bg-white/20 hover:bg-purple-600 rounded-full flex items-center justify-center font-semibold transition-all"
          >
            IN
          </a>
        </div> */}
      </div>
    </section>
  );
};
