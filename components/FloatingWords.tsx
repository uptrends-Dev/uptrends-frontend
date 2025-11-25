"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const words = [
  "Branding",
  "Storytelling",
  "Copywriting",
  "Strategy",
  "SEO",
  "SEM",
  "UI",
  "UX",
  "PPC",
  "Social Media",
  "Campaigns",
  "Production",
  "Photography",
  "Video",
  "Design",
  "Animation",
  "Web Design",
  "App Design",
  "CRM",
  "ERP",
  "Lead Generation",
  "Ads",
  "Optimization",
  "Insights",
  "Growth",
  "Content",
  "Data",
  "Automation",
  "Engagement",
  "Conversion",
  "Influencer",
  "Identity",
  "Activation",
  "Innovation",
  "Analytics",
  "Retargeting",
  "Performance",
];

export const FloatingWords: React.FC = () => {
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
      transition: { staggerChildren: 0.02, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 bg-linear-to-br from-purple-50 via-pink-50 to-slate-50 overflow-hidden"
      aria-hidden="true"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-10"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            Our Expertise Cloud
          </h3>
          <p className="text-gray-600">
            Technologies, strategies, and services we excel at
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {words.map((w) => (
            <motion.span
              key={w}
              variants={wordVariants}
              className="group text-xs lg:text-sm text-purple-700 font-semibold px-4 py-2 bg-white border-2 border-purple-100 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 shadow-sm hover:shadow-lg cursor-default"
              whileHover={{ scale: 1.1 }}
            >
              {w}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
