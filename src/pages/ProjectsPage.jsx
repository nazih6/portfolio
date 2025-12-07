import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Replace with your real projects; add `category` and `tech` for better filtering/badges
const projects = [
  {
    name: "Real Estate Explorer",
    desc: "website for exploring properties with filters and favorites.",
    github: "https://github.com/username/real-estate-app",
    live: "#",
    category: "Web",
    tech: ["React", "XAMPP", "JSON", "CSS"],
    img: "/projects/real-estate.jpg",
    images: Array.from({ length: 11 }, (_, i) => `/projects/real-estate/${i + 1}.png`)
  },
  
 {
 
  name: "Ask & Receive",
  desc: "A React-based food delivery app where users can request and receive meals efficiently.",
  github: "https://github.com/username/ask-and-receive",
  category: "Web App",
  tech: ["JavaScript", "React", "Tailwind", "Framer Motion"],
  img: "/projects/ask-receive/ask-receive.jpg", // main image inside the folder
  images: Array.from({ length: 7 }, (_, i) => `/projects/ask-receive/${i + 1}.png`) // carousel images


    
  },
  
{
  name: "Pline",
  desc: "Full-stack fitness website for tracking workouts, exercises. ",
  github: "https://github.com/username/pline",
  live: "#", // Replace with live demo URL if available
  category: "Web",
  tech: ["React", "Node.js", "PHP", "MongoDB"],
  img: "/projects/fitness.jpg", // main project image
  images: Array.from({ length: 11 }, (_, i) => `/projects/fitness/${i + 1}.png`) // carousel images
}

];

// Carousel component for projects with multiple images
const ProjectCarousel = ({ images, projectName }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleModalPrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleModalNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation while modal is open
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (ev) => {
      if (ev.key === "Escape") setIsModalOpen(false);
      if (ev.key === "ArrowLeft") setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (ev.key === "ArrowRight") setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, images.length]);

  return (
    <>
      <div className="relative w-full h-auto bg-gray-900 group cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <img
          src={images[currentIdx]}
          alt={`${projectName} - ${currentIdx + 1}`}
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
        
        {/* Navigation buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
          {currentIdx + 1} / {images.length}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal={true}
          aria-label={`${projectName} images`}
        >
          <div ref={modalRef} className="relative max-w-4xl max-h-screen w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIdx]}
              alt={`${projectName} - ${currentIdx + 1}`}
              className="max-w-full max-h-full object-contain"
              loading="eager"
              decoding="async"
            />
            
            {/* Modal Navigation buttons */}
            <button
              onClick={handleModalPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={handleModalNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition text-2xl"
            >
              ✕
            </button>

            {/* Image counter in modal */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full">
              {currentIdx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [requestNote, setRequestNote] = useState(null);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category || "Other")) )];

  const backendKeywords = ["node", "express", "django", "flask", "php", "java", "spring", "c#", "laravel", "ruby", "rails"];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Selected work showing architecture, UI and engineering choices.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === cat ? 'bg-indigo-600 text-white shadow' : 'bg-white/60 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => filter === 'All' || (p.category || 'Other') === filter).map((project, idx) => {
            const isBackend = project.tech && project.tech.some(t => backendKeywords.some(k => t.toLowerCase().includes(k)));
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all cursor-default flex flex-col"
              >
                <div className="relative">
                  {project.images ? (
                    <ProjectCarousel images={project.images} projectName={project.name} />
                  ) : (
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {(project.tech || []).slice(0,3).map((t) => (
                      <span key={t} className="bg-white/90 dark:bg-black/60 text-xs px-2 py-1 rounded-lg font-medium">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{project.desc}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">{project.category}</div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:underline"
                      aria-label={`Open ${project.name} on GitHub`}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <button
                      onClick={() => setRequestNote(requestNote === idx ? null : idx)}
                      className="ml-1 inline-flex items-center text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded hover:bg-gray-200 transition"
                      aria-expanded={requestNote === idx}
                      aria-controls={`backend-note-${idx}`}
                    >
                      Request backend
                    </button>

                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline"
                        aria-label={`Open ${project.name} live demo`}
                      >
                        <FaExternalLinkAlt />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                  {/* Backend note revealed on request */}
                  {requestNote === idx && (
                    <div id={`backend-note-${idx}`} className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Backend source available upon request — contact me via the Contact page or open an issue on the repository.
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* No Projects Message */}
        {projects.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-300 mt-10">
            No projects added yet.
          </p>
        )}
      </div>
    </motion.section>
  );
}
