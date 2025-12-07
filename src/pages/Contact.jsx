import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Let’s build something great together. You can message me directly using this form.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE — CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 shadow-2xl border border-white/20 dark:border-gray-700/20"
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
              My Information
            </h3>

            <div className="space-y-5 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-600 text-xl" />
                <a href="mailto:Nazih.abboud97@gmail.com" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
                  Nazih.abboud97@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-indigo-600 text-xl" />
                <a href="tel:+96171755743" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
                  +961 71755743
                </a>
              </div>
            </div>

            <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-10 mb-3">Social Media</h4>

            <div className="flex gap-6 text-2xl">
              <div className="flex gap-6 text-2xl">
  <a
    href="https://www.linkedin.com/in/nazih-abboud-04b31834a"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform transform hover:scale-110"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>
</div>

          <a
  href="https://github.com/nazih6"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform transform hover:scale-110"
  aria-label="GitHub"
>
  <FaGithub />
</a>

            </div>
          </motion.div>

          {/* RIGHT SIDE — PREMIUM CONTACT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 shadow-2xl border border-white/20 dark:border-gray-700/20 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Send a Message
            </h3>

            {/* Input Field */}
            <div className="relative">
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 peer"
              />
              <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all peer-focus:top-[-10px] peer-focus:text-sm peer-valid:top-[-10px] peer-valid:text-sm bg-gray-50 dark:bg-gray-900 px-1">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 peer"
              />
              <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all peer-focus:top-[-10px] peer-focus:text-sm peer-valid:top-[-10px] peer-valid:text-sm bg-gray-50 dark:bg-gray-900 px-1">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                required
                rows="5"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 peer resize-none"
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all peer-focus:top-[-10px] peer-focus:text-sm peer-valid:top-[-10px] peer-valid:text-sm bg-gray-50 dark:bg-gray-900 px-1">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:opacity-90 active:scale-95 transition-all"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
