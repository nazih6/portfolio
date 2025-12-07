import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// VALID icons
import {
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiCsharp
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

export default function About() {
  // -----------------------
  // SKILLS
  // -----------------------
  const skills = [
    { name: "React", icon: <SiReact size={20} className="text-blue-500" />, pct: 90 },
    { name: "Flutter", icon: <SiFlutter size={20} className="text-sky-600" />, pct: 78 },
    { name: "Node.js", icon: <SiNodedotjs size={20} className="text-green-500" />, pct: 85 },
    { name: "Python", icon: <SiPython size={20} className="text-yellow-500" />, pct: 72 },
    { name: "HTML5", icon: <SiHtml5 size={20} className="text-orange-500" />, pct: 95 },
    { name: "CSS3", icon: <SiCss3 size={20} className="text-blue-600" />, pct: 88 },
    { name: "Java", icon: <FaJava size={20} className="text-red-600" />, pct: 80 },
  ];

  // -----------------------
  // TIMELINE
  // -----------------------
  const timeline = [
    { year: "2024", title: "Senior Full-Stack Developer", org: "Acme Apps", desc: "Led frontend and backend efforts for a B2B dashboard." },
    { year: "2022", title: "Full-Stack Developer", org: "Freelance", desc: "Built multiple client projects using React and Node.js." },
    { year: "2020", title: "Graduated — B.Sc. Computer Science", org: "University", desc: "Focused on software engineering and distributed systems." },
  ];

  // -----------------------
  // COUNTERS
  // -----------------------
  const [counters, setCounters] = useState({ projects: 0, years: 0, clients: 0 });

  useEffect(() => {
    const targets = { projects: 10, years: 3, clients: 8 };
    const duration = 1200;
    const start = Date.now();

    const tick = () => {
      const now = Date.now();
      const t = Math.min(1, (now - start) / duration);
      setCounters({
        projects: Math.floor(targets.projects * t),
        years: Math.floor(targets.years * t),
        clients: Math.floor(targets.clients * t),
      });
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  // -----------------------
  // PROFILE IMAGE FIX
  // -----------------------
  function ProfileImage({ src, alt }) {
    const imgRef = useRef(null);
    const [padPct, setPadPct] = useState(100);

    useEffect(() => {
      const img = imgRef.current;
      if (!img) return;
      const onLoad = () => {
        if (img.naturalWidth && img.naturalHeight) {
          const pct = (img.naturalHeight / img.naturalWidth) * 100;
          setPadPct(pct);
        }
      };
      img.complete ? onLoad() : img.addEventListener("load", onLoad);
      return () => img.removeEventListener("load", onLoad);
    }, [src]);

    return (
      <div className="w-full rounded-xl overflow-hidden border-4 border-white dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
        <div style={{ width: "100%", position: "relative", paddingTop: `${padPct}%` }}>
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute left-0 top-0 w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  // -----------------------
  // RETURN UI
  // -----------------------
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto p-6 py-16 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* LEFT SIDEBAR */}
        <div className="flex-shrink-0 w-full md:w-56">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
            <ProfileImage src="/images/profile.jpg" alt="Nazih Abboud — developer profile" />

            <div className="mt-4 text-center">
              <h1 id="about-heading" className="text-xl font-semibold text-gray-900 dark:text-white">Nazih Abboud</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Full-Stack Developer </p>

              <div className="mt-3 flex items-center justify-center gap-2">
               <a
  href="/Nazih abboud cv.pdf"  // must be exactly the same as your file in /public
  download="Nazih_Abboud_CV.pdf"  className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm">Download CV</a>
                <a href="/contact" className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-md text-sm">Contact</a>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow">
              <div className="text-2xl font-semibold text-blue-600">{counters.projects}+</div>
              <div className="text-xs text-gray-500">Projects</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow">
              <div className="text-2xl font-semibold text-blue-600">{counters.years}</div>
              <div className="text-xs text-gray-500">Years</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow">
              <div className="text-2xl font-semibold text-blue-600">{counters.clients}+</div>
              <div className="text-xs text-gray-500">Clients</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1">
          {/* ABOUT */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I build reliable, accessible, and beautiful web and mobile applications.
              I focus on performance, clean UI, and smart engineering.
            </p>

            {/* SKILLS */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Skills & Proficiency</h3>
              <div className="space-y-3">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {s.icon}
                        <span className="font-medium text-gray-800 dark:text-gray-100">{s.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{s.pct}%</span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        transition={{ duration: 1.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </motion.section>
  );
}
