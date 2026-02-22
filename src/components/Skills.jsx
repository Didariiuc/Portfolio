import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCuttlefish, FaVideo, FaJs, FaReact, FaNodeJs, FaLock } from "react-icons/fa";
import { SiExpress, SiPrisma, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiMongodb } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", glow: "group-hover:shadow-yellow-400/20" },
    { name: "React", icon: <FaReact />, color: "text-blue-400", glow: "group-hover:shadow-blue-400/20" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", glow: "group-hover:shadow-green-500/20" },
    { name: "Express", icon: <SiExpress />, color: "text-neutral-400", glow: "group-hover:shadow-neutral-400/20" },
    { name: "C++", icon: <FaCuttlefish />, color: "text-blue-600", glow: "group-hover:shadow-blue-600/20" },
    
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400", glow: "group-hover:shadow-teal-400/20" },
    
    { name: "JWT Auth", icon: <FaLock />, color: "text-purple-500", glow: "group-hover:shadow-purple-500/20" },
    { name: "HTML & CSS", icon: <SiHtml5 />, color: "text-orange-500", glow: "group-hover:shadow-orange-500/20" },
    { name: "DSA", icon: <FaCode />, color: "text-cyan-400", glow: "group-hover:shadow-cyan-400/20" },
    { name: "Videography", icon: <FaVideo />, color: "text-red-500", glow: "group-hover:shadow-red-500/20" },
  ];

  return (
    <div className="p-10 text-white max-w-7xl mx-auto">
      {/* Header */}
      <div className="relative mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Tech <span className='bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent'>Stack</span>
        </h2>
        <p className="text-neutral-500 font-mono text-sm mt-2">
          // Technologies I use to bring ideas to life
        </p>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className={`group relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col items-center gap-4 ${skill.glow} hover:shadow-2xl`}
          >
            {/* Holographic Background Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <span className={`text-4xl ${skill.color} transition-transform duration-500 group-hover:rotate-[12deg]`}>
              {skill.icon}
            </span>
            <span className="text-xs md:text-sm font-bold tracking-wider text-neutral-400 group-hover:text-white transition-colors uppercase">
              {skill.name}
            </span>

            {/* Bottom Glow Bar */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-current group-hover:w-1/2 transition-all duration-300 opacity-50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;