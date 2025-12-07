import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function InteractiveCard() {
  const cardRef = useRef(null);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });
  const [pressed, setPressed] = useState(false);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const ry = ((x - cx) / cx) * 10; // horizontal tilt
    const rx = -((y - cy) / cy) * 8; // vertical tilt
    setRot({ rx, ry });
  };

  const reset = () => setRot({ rx: 0, ry: 0 });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setPressed(true);
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setPressed(false);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      role="button"
      tabIndex={0}
      aria-label="Interactive profile card"
      style={{ transform: `perspective(900px) rotateX(${rot.rx}deg) rotateY(${rot.ry}deg) scale(${pressed ? 0.995 : 1})` }}
      className="relative cursor-pointer transform-gpu max-w-[320px] md:max-w-[384px] focus:outline-none"
    >
      {/* animated gradient behind card */}
      <div className="absolute -inset-4 rounded-3xl animated-gradient blur-2xl opacity-60 -z-20" aria-hidden={true} />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="w-full rounded-3xl overflow-visible shadow-2xl border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-center"
      >
        <picture>
          <img
            src="/images/profile.jpg"
            alt="Nazih Abboud — profile"
            className="w-full h-auto object-contain object-center rounded-2xl"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 -z-10 pointer-events-none" aria-hidden={true} />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[75vh] flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Nazih Abboud
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Full-Stack Developer
            </span>
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-xl text-lg leading-relaxed">
            I build fast, modern, and user-friendly applications using React,
            Python, and Node.js. My focus is clean UI, performance, and exceptional
            user experience.
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-wrap gap-4">
           <a
  href="/Nazih abboud cv.pdf"  // must be exactly the same as your file in /public
  download="Nazih_Abboud_CV.pdf"  // the name it will have when downloaded
  className="px-6 py-3 bg-white dark:bg-gray-800 border rounded-lg font-medium shadow hover:shadow-lg hover:scale-[1.03] transition-all"
>
  Download CV
</a>

            <Link
              to="/projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:shadow-lg hover:opacity-90 transition-all"
            >
              See Projects
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE – Floating 3D Profile Card */}
        <div className="flex flex-col items-center">
          <InteractiveCard />

          {/* Social / contact icons */}
          <div className="mt-4 flex items-center justify-center gap-4" aria-label="Social links">
          <a
  href="https://github.com/nazih6"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  aria-label="GitHub"
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.287-.01-1.046-.016-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23A11.52 11.52 0 0112 5.8c1.02.004 2.045.138 3.003.405 2.289-1.554 3.295-1.23 3.295-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.814 1.102.814 2.222 0 1.606-.014 2.903-.014 3.296 0 .323.216.701.825.582C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
</a>


            <a
  href="https://www.linkedin.com/in/nazih-abboud-04b31834a"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  aria-label="LinkedIn"
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}>
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-2.5v-9h2.5v9zm-1.25-10.29c-.8 0-1.45-.66-1.45-1.46 0-.8.65-1.45 1.45-1.45s1.46.65 1.46 1.45c0 .8-.66 1.46-1.46 1.46zm13 10.29h-2.5v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.17-1.72 2.38v4.56h-2.5v-9h2.4v1.23h.03c.33-.62 1.14-1.27 2.35-1.27 2.51 0 2.97 1.65 2.97 3.8v5.24z" />
  </svg>
</a>

           
          </div>
        </div>

      </div>
    </motion.section>
  );
}
