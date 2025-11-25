"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Placeholder logos with more details
const logos = [
  { name: "Client A", industry: "E-Commerce", icon: "🛍️" },
  { name: "Client B", industry: "Real Estate", icon: "🏢" },
  { name: "Client C", industry: "Hospitality", icon: "🏨" },
  { name: "Client D", industry: "Technology", icon: "💻" },
  { name: "Client E", industry: "Healthcare", icon: "🏥" },
  { name: "Client F", industry: "Finance", icon: "💰" },
];

export const LogoCarousel: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      id="clients"
      aria-labelledby="clients-heading"
      className="relative py-24 px-6 bg-linear-to-b from-white via-purple-50/30 to-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-wider text-purple-600 font-bold px-4 py-2 bg-purple-100 rounded-full">
              Trusted Partners
            </span>
          </div>
          <h2
            id="clients-heading"
            className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-4"
          >
            Trusted by{" "}
            <span className="bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with forward-thinking companies across multiple
            industries to deliver exceptional results
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          role="region"
          aria-label="Client logos"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {logos.map((client) => (
            <motion.div
              key={client.name}
              variants={logoVariants}
              className="group relative bg-white border border-gray-200 hover:border-purple-400 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
              aria-label={`${client.name} - ${client.industry}`}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {client.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {client.industry}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-purple-400/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats or testimonial teaser */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-8 bg-linear-to-r from-purple-50 via-pink-50 to-purple-50 px-8 py-6 rounded-2xl border border-purple-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600 font-medium">
                Client Retention
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600 font-medium">
                Active Projects
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-gray-600 font-medium">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
