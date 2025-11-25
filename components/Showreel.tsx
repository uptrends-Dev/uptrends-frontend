"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Showreel: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
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
      id="showreel"
      aria-labelledby="showreel-heading"
      className="py-24 px-6 bg-linear-to-br from-purple-900 via-slate-900 to-slate-800 text-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sm uppercase tracking-widest text-purple-300 font-semibold">
            Showreel
          </p>
          <h2
            id="showreel-heading"
            className="text-4xl lg:text-5xl font-extrabold leading-tight mt-3"
          >
            Let&apos;s build what&apos;s next together.
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            A short showreel of creative direction, campaigns, and platform
            launches that drove measurable results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Video/Card */}
          <motion.div
            className="relative group"
            variants={videoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative tilt-hover transform-gpu group-hover:-translate-y-1 group-hover:scale-[1.02] bg-slate-800 rounded-2xl shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
              {/* Poster / Placeholder */}
              <div className="absolute inset-0 bg-[url('/showreel-poster.jpg')] bg-cover bg-center opacity-90"></div>
              <div className="relative z-10 flex flex-col items-center gap-4">
                <button
                  type="button"
                  aria-label="Play showreel"
                  className="relative z-20 w-20 h-20 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-xl play-pulse"
                >
                  <span className="ml-1">▶</span>
                  <span className="sr-only">Play showreel</span>
                </button>
                <p className="text-sm text-gray-200/90">
                  3:12 — Creative Direction & Growth
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold">
                  UP
                </div>
                <div>
                  <div className="text-white font-medium">
                    Uptrends Showreel
                  </div>
                  <div className="text-gray-400 text-xs">
                    Creative direction • Campaigns • Platforms
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-400">Watch now →</div>
            </div>
          </motion.div>

          {/* Text / Highlights */}
          <motion.aside
            className="prose prose-invert max-w-none text-gray-200"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-semibold mb-3">What you will see</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-300">
              <li>Cinematic campaign pieces that elevated brand perception.</li>
              <li>Conversion-led product and platform launches.</li>
              <li>
                Cross-market storytelling tailored for GCC, Egypt and Europe.
              </li>
            </ul>
            <p className="mt-6 text-gray-300">
              Prefer reduced motion? Your system preference is respected —
              animations will be limited.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
