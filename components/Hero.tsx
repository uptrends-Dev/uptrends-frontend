"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 py-20"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-purple-300 font-semibold"
          >
            We Build Up Next.
          </motion.p>
          <motion.h1
            variants={itemVariants}
            id="hero-heading"
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            Uptrends Solutions
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-2xl lg:text-3xl text-gray-200"
          >
            Turning Stories into Performance & Growth.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed"
          >
            From brand identity to high-converting digital platforms, we pair
            creative storytelling with measurable performance. Serving tourism,
            hospitality, real estate and startups across Egypt, the GCC and
            Europe since 2011.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-center"
              aria-label="Request a Strategy Call"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Strategy Call
            </motion.a>
            <motion.a
              href="#showreel"
              className="border-2 border-purple-400 hover:bg-purple-400/10 text-white font-semibold px-8 py-4 rounded-lg transition-all text-center"
              aria-label="Watch our showreel"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Showreel
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/WebUI&DigitalPlatforms/230copy.jpg"
            alt="Cinematic snapshot from Uptrends showreel"
            width={960}
            height={540}
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
