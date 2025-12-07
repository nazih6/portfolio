import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactCard(){
  return (
    <motion.section initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="py-12 bg-blue-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Feel free to say hi — I usually reply quickly.</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="mailto:your.email@example.com" className="hover:text-blue-600 dark:hover:text-blue-400"><FaEnvelope /></a>
          <a href="https://github.com/username" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400"><FaGithub /></a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400"><FaLinkedin /></a>
        </div>
      </div>
    </motion.section>
  );
}
