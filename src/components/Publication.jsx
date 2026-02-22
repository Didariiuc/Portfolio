import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaExternalLinkAlt, FaMicrochip, FaQuoteLeft } from "react-icons/fa";

// Replace these placeholders with your actual publication images/screenshots
const publications = [
  {
    id: "PUB-2026-01",
    title: "A Comparative Study Using Classical Machine Learning with Explainable AI.",
    journal: "Running Journal of Classical ML Research",
    date: "Jan 2026",
    abstract: "A concise comparative analysis of classical machine learning models enhanced with Explainable AI techniques, focusing on performance evaluation, interpretability, and transparent decision-making across real-world datasets.",
    tags: ["Facial Emotion Recognition", "Machine Learning", "Explainable AI"],
    link: "#"
  },
  {
    id: "PUB-2025-04",
    title: "A Comprehensive Study of LLM And Evolution, Varieties, and Their Role in Software Engineering  and Cybersecurity.",
    journal: "Running Review Journal of Software Engineering and Cybersecurity",
    date: "Oct 2025",
    abstract: "An analytical overview of Large Language Models (LLMs), exploring their evolution, types, and practical applications in software engineering and cybersecurity, with a focus on security, automation, and system reliability.",
    tags: ["LLM", "Software Engineering", "Cybersecurity"],
    link: "#"
  }
];

function Publication() {
  return (
    <section className="py-24 bg-[#020205] text-white overflow-hidden" id="publications">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- CYBER HEADER (Consistent with Certifications) --- */}
        <div className="relative mb-2 max-w-max mx-auto lg:mx-0 group">
          <div className="absolute -left-12 -top-12 h-48 w-48 bg-[#3b82f6]/10 blur-[100px] -z-10" />
          
          <div className="flex flex-col items-center lg:items-start relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                {/* <div className="h-1.5 w-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
                <div className="h-1.5 w-1.5 bg-[#a855f7] rounded-full" /> */}
              </div>
              {/* <div className="h-[1px] w-16 bg-gradient-to-r from-[#3b82f6] to-transparent" /> */}
              {/* <span className="text-[10px] font-mono text-[#3b82f6] uppercase tracking-[0.5em] font-bold">
                Research_Archive
              </span> */}
            </div>

            <div className="relative">
              <div className="flex flex-col items-center lg:items-start mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Academic <span className='bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent'>Publications</span>
        </h2>
        <div className="h-1 w-20 bg-[#a855f7] mt-4 rounded-full shadow-[0_0_15px_#a855f7]"></div>
      </div>
            </div>
          </div>
        </div>

        {/* --- PUBLICATIONS GRID --- */}
        <div className="grid grid-cols-1 gap-12">
          {publications.map((pub, index) => (
            <motion.div 
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group flex flex-col md:flex-row bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#3b82f6]/40 transition-all duration-500"
            >
              {/* Left Side: Indicator & ID */}
              <div className="md:w-1/4 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="space-y-4 text-center md:text-left">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{pub.date}</span>
                  <div className="text-2xl font-black text-white/10 group-hover:text-[#3b82f6]/30 transition-colors">
                    {pub.id}
                  </div>
                </div>
                <FaMicrochip className="text-4xl text-neutral-800 self-center md:self-start group-hover:text-[#3b82f6]/50 transition-colors" />
              </div>

              {/* Right Side: Content */}
              <div className="md:w-3/4 p-8 md:p-12 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#3b82f6] text-xs font-bold uppercase tracking-widest">
                    <FaBookOpen /> {pub.journal}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black group-hover:text-[#a855f7] transition-colors">
                {pub.title}
              </h3>
                </div>

                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 -left-4 text-white/5 text-4xl" />
                  <p className="text-neutral-400 leading-relaxed italic pl-4">
                    {pub.abstract}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {pub.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono text-neutral-300 uppercase">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-end">
                  <a 
                    href={pub.link} 
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-[#3b82f6] transition-colors"
                  >
                    Read_Full_Paper <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Hover Scanline Effect */}
              <motion.div 
                className="absolute inset-y-0 left-0 w-[2px] bg-[#3b82f6] shadow-[0_0_15px_#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Publication;