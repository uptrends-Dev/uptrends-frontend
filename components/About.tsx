"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About: React.FC = () => {
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

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 px-6 bg-white overflow-hidden"
    >
      {/* Minimalist Decorative Elements */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-32 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-15 -z-10"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-bold px-4 py-2 bg-purple-50 rounded-full">
              About Us
            </span>
          </div>
          <h2
            id="about-heading"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Building Tomorrow&apos;s{" "}
            <span className="text-purple-600">Digital Experiences</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with innovative solutions that drive growth
            and transform ideas into reality.
          </p>
        </motion.div>

        {/* Main Content - Single Column Layout */}
        <motion.div
          className="mb-20"
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-linear-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Born between Egypt&apos;s Red Sea and diverse markets across the
                GCC and Europe, Uptrends Solutions grew from a small collective
                of storytellers and problem-solvers into a regionally adaptive
                creative agency. Since 2011, we&apos;ve helped brands find their
                voice, refine identity, and thrive across cultures and
                platforms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We blend creative design, media production, and data-driven
                marketing to deliver measurable results. From brand identity and
                social campaigns to conversion-focused websites and enterprise
                dashboards, our work turns ideas into growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards - Grid Layout */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20"
          variants={cardContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              💡
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Insight-Driven Process
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Creative process prioritizing measurable outcomes and real
              business impact with data-backed decisions.
            </p>
          </motion.div>

          <motion.div
            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              🌍
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Cross-Market Expertise
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Deep understanding of Egypt, GCC, and European markets with
              cultural fluency and local insights.
            </p>
          </motion.div>

          <motion.div
            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Integrated Approach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Design and engineering unified for sustained performance,
              scalability, and seamless execution.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section - Redesigned */}
        <motion.div
          className="bg-linear-to-br from-slate-900 to-purple-900 rounded-3xl p-10 lg:p-16 shadow-2xl"
          variants={statsVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.01 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                14+
              </div>
              <div className="text-purple-200 font-medium text-sm uppercase tracking-wide">
                Years Experience
              </div>
              <div className="mt-1 text-xs text-purple-300/60">Since 2011</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                3
              </div>
              <div className="text-purple-200 font-medium text-sm uppercase tracking-wide">
                Global Regions
              </div>
              <div className="mt-1 text-xs text-purple-300/60">
                EG • GCC • EU
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                200+
              </div>
              <div className="text-purple-200 font-medium text-sm uppercase tracking-wide">
                Projects Delivered
              </div>
              <div className="mt-1 text-xs text-purple-300/60">
                And counting
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-purple-200 font-medium text-sm uppercase tracking-wide">
                Client Satisfaction
              </div>
              <div className="mt-1 text-xs text-purple-300/60">
                5-star rated
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
