import React from "react";
import { motion } from "framer-motion";

const certs = [
  {name:"React Developer Certificate", link:"#"},
  {name:"Flutter Mobile Apps", link:"#"}
];

export default function Certifications(){
  return (
    <motion.section initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {certs.map((c,i)=>(
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 className="font-semibold">{c.name}</h4>
              <a href={c.link} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 text-sm">View</a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
