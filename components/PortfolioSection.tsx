"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const categories = [
  "All",
  "Web UI & Digital Platforms",
  "Media Production",
  "Branding & Collateral",
];

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  bio: string;
  images: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web UI & Digital Platforms",
    description: "Complete UX/UI overhaul for a luxury retail brand",
    bio: "We transformed a traditional e-commerce platform into a modern, conversion-optimized experience. The project included user research, wireframing, high-fidelity design, and front-end development. Results: 45% increase in conversion rate, 60% reduction in cart abandonment.",
    images: [
      "/WebUI&DigitalPlatforms/WEBSITES/laptopScreebBlue.jpg",
      "/WebUI&DigitalPlatforms/WEBSITES/laptopScreebBlue.jpg",
      "/WebUI&DigitalPlatforms/WEBSITES/laptopScreebBlue.jpg",
      "/WebUI&DigitalPlatforms/WEBSITES/laptopScreebBlue.jpg",
    ],
    tags: ["UI/UX", "E-Commerce", "Responsive Design"],
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "Branding & Collateral",
    description: "Comprehensive brand identity for tech startup",
    bio: "Developed a complete brand identity system including logo design, color palette, typography, and brand guidelines. The modern, tech-forward design helped position the startup as an industry leader and attracted Series A funding.",
    images: [
      "/WebUI&DigitalPlatforms/WEBSITES/laptop_screen_mockup_100.jpg",
      "/WebUI&DigitalPlatforms/WEBSITES/laptop_screen_mockup_100.jpg",
      "/WebUI&DigitalPlatforms/WEBSITES/laptop_screen_mockup_100.jpg",
      "/WebUI&DigitalPlatforms/WEBSITES/laptop_screen_mockup_100.jpg",
    ],
    tags: ["Branding", "Logo Design", "Identity"],
  },
  {
    id: 3,
    title: "Corporate Video Production",
    category: "Media Production",
    description: "Cinematic brand story for Fortune 500 company",
    bio: "Created a compelling brand narrative through cinematic videography and post-production. The video showcased company culture, values, and impact, generating 2M+ views and significantly improving brand perception across key demographics.",
    images: [
      "/WebUI&DigitalPlatforms/WEBSITES/laptop_screen_mockup_1100.jpg",
      "/WebUI&DigitalPlatforms/WEBSITES/laptop_screen_mockup_1100.jpg",
      "/WebUI&DigitalPlatforms/WEBSITES/laptop_screen_mockup_1100.jpg",
      "/WebUI&DigitalPlatforms/WEBSITES/laptop_screen_mockup_1100.jpg",
    ],
    tags: ["Video Production", "Brand Story", "Corporate"],
  },
  {
    id: 4,
    title: "SaaS Dashboard Interface",
    category: "Web UI & Digital Platforms",
    description: "Analytics dashboard for data-driven decisions",
    bio: "Designed and developed an intuitive analytics dashboard that transforms complex data into actionable insights. Features include real-time data visualization, customizable widgets, and advanced filtering. User satisfaction increased by 85%.",
    images: [
      "/",
      "/",
      "/",
      "/",
    ],
    tags: ["Dashboard", "SaaS", "Data Visualization"],
  },
  {
    id: 5,
    title: "Product Photography Campaign",
    category: "Media Production",
    description: "High-end product photography for luxury brand",
    bio: "Executed a sophisticated product photography campaign featuring studio and lifestyle shots. The imagery elevated brand positioning and was used across e-commerce, social media, and print materials, resulting in 35% increase in online sales.",
    images: [
      "/",
      "/",
      "/",
      "/",
    ],
    tags: ["Photography", "Product", "Luxury"],
  },
  {
    
    id: 6,
    title: "Marketing Collateral Suite",
    category: "Branding & Collateral",
    description: "Complete marketing materials for global launch",
    bio: "Designed a comprehensive suite of marketing collateral including brochures, presentations, trade show materials, and digital assets. The cohesive design system supported a successful global product launch across 15 markets.",
    images: [
      "/",
      "/",
      "/",
      "/",
    ],
    tags: ["Marketing", "Print Design", "Collateral"],
  },
];

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      ref={ref}
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative py-24 px-6 bg-linear-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-20 -z-10"
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
            Our Work
          </p>
          <h2
            id="portfolio-heading"
            className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6"
          >
            See Results. See{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Reinventions
            </span>
            .
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project tells a story of refined ideas, reimagined visuals,
            and brands reborn.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-16"
          role="tablist"
          aria-label="Portfolio categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-purple-700 hover:bg-purple-100 border-2 border-purple-200"
              }`}
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-live="polite"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={activeCategory}
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              aria-labelledby={`portfolio-item-${project.id}-title`}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative aspect-video bg-linear-to-br from-purple-200 via-pink-200 to-slate-300 flex items-center justify-center text-slate-600 font-semibold overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg font-bold">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide mb-2">
                  {project.category}
                </div>
                <h3
                  id={`portfolio-item-${project.id}-title`}
                  className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors"
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <button
                  onClick={() => openModal(project)}
                  className="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  aria-label={`View Case Study for ${project.title}`}
                >
                  View Case Study <span className="text-lg">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-3xl z-10">
              <div>
                <h3
                  id="modal-title"
                  className="text-3xl font-bold text-slate-900"
                >
                  {selectedProject.title}
                </h3>
                <p className="text-purple-600 font-semibold mt-1">
                  {selectedProject.category}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Project Bio */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  Project Overview
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedProject.bio}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Gallery - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-shadow"
                  >
                    <Image
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
