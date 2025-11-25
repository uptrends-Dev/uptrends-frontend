"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const badges = [
  {
    text: "Multilingual Creative Team",
    icon: "🌍",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    text: "14+ Years Experience",
    icon: "⭐",
    gradient: "from-pink-500 to-pink-700",
  },
  {
    text: "Cross-Market Expertise (Egypt, GCC, EU)",
    icon: "🚀",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    text: "ROI-Focused Approach",
    icon: "📈",
    gradient: "from-purple-700 to-purple-900",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const badgeVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const Badges: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-linear-to-b from-slate-50 to-white"
      aria-labelledby="badges-heading"
    >
      <div className="container mx-auto">
        <h2 id="badges-heading" className="sr-only">
          Key Advantages
        </h2>
        <motion.ul
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {badges.map((b) => (
            <motion.li
              key={b.text}
              variants={badgeVariants}
              className={`group bg-linear-to-br ${b.gradient} text-white text-center font-bold px-6 py-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105`}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.25, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {b.icon}
              </motion.div>
              <div className="text-lg leading-snug">{b.text}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
