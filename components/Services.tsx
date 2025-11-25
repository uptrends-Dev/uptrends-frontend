"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceProps {
  title: string;
  tagline: string;
  subTag: string;
  description: string;
  cta: string;
  icon: string;
  gradient: string;
}

const ServiceCard: React.FC<ServiceProps> = ({
  title,
  tagline,
  subTag,
  description,
  // cta,
  icon,
  gradient,
}) => (
  <motion.article
    className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300 overflow-hidden"
    aria-labelledby={title.replace(/\s+/g, "-").toLowerCase() + "-title"}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    {/* Background gradient on hover */}
    <div
      className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      aria-hidden="true"
    ></div>

    <header className="mb-6 relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-100 to-pink-100 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3
        id={title.replace(/\s+/g, "-").toLowerCase() + "-title"}
        className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3"
      >
        {title}
      </h3>
      <p className="text-xl text-purple-700 font-bold mb-1">{tagline}</p>
      <p className="text-sm text-gray-500 italic">{subTag}</p>
    </header>
    <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
      {description}
    </p>
    {/* <a
      href="#contact"
      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-xl group-hover:gap-3 relative z-10"
      aria-label={cta}
    >
      {cta}
      <span className="text-lg">→</span>
    </a> */}
  </motion.article>
);

export const Services: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      id="services"
      aria-labelledby="services-heading"
      className="relative py-24 px-6 bg-linear-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-20 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -z-10"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-20 right-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20 -z-10"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sm uppercase tracking-widest text-purple-600 font-semibold mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6"
          >
            Services That{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From brand storytelling to conversion-driven platforms, we deliver
            integrated solutions that perform.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants}>
            <ServiceCard
              title="Creative Media & Brand Experiences"
              tagline="Capture. Design. Connect."
              subTag="Powerful storytelling, elevated."
              description="Visual stories that shape how brands are seen, felt, and remembered. We deliver branding systems, art direction, photography, cinematic video, and social-first campaigns that connect emotion with measurable results. From logos and identity systems to multi-channel campaigns, we craft experiences that elevate recognition, engagement, and long-term growth."
              cta="Explore Creative Work"
              icon="🎨"
              gradient="bg-linear-to-br from-purple-400 to-pink-400"
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ServiceCard
              title="Digital Solutions & Growth Platforms"
              tagline="Solutions That Convert."
              subTag="Digital Experiences Built for Impact."
              description="Websites, dashboards, and enterprise systems that unite front-end experience with back-end clarity. We build user-friendly interfaces backed by scalable architecture to monitor, manage, and optimize growth. Each product provides measurable insight, automation, and conversion-focused design."
              cta="See Digital Platforms"
              icon="💻"
              gradient="bg-linear-to-br from-blue-400 to-purple-400"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
