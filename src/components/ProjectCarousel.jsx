import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Real Estate Explorer",
    desc: "A Flutter mobile app allowing users to browse, filter, and save properties. Built with Firebase backend.",
    github: "https://github.com/username/real-estate-app",
    live: ""
  },
  {
    name: "My Portfolio",
    desc: "A modern responsive portfolio built with React, TailwindCSS, and Framer Motion animations.",
    github: "https://github.com/username/my-portfolio",
    live: ""
  }
];

export default function ProjectCarousel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">
          Projects
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="max-w-4xl mx-auto"
        >
          {projects.map((p, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {p.name}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-8 flex justify-center gap-4">
                  {/* GitHub button */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-200"
                  >
                    <FaGithub />
                    Code
                  </a>

                  {/* Live link */}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:opacity-90 transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
