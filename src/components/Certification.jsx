import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward, FaCheckCircle } from "react-icons/fa";
import RamadaCert from "../assets/ramadan.jpeg"
import FaangCert from "../assets/cps.png"
import EdgeCert from "../assets/edge.png"
// 1. IMPORT YOUR IMAGES HERE
// import MernCert from '../assets/mern-certificate.jpg'; 
// import JsCert from '../assets/javascript-cert.jpg';

function Certification() {
  const certifications = [
    {
      title: "Ramadan Fest 2025",
      issuer: "IIUC Computer Club",
      date: "2025",
      image: RamadaCert,
      description: "This certification recognizes active participation and contribution in Ramadan Fest 2025, an event organized by the IIUC Computer Club, featuring cultural, technical, and community-focused activities. The program emphasized teamwork, creativity, event coordination, and engagement within the academic and tech community during the holy month of Ramadan.",
      id: "CERT-001"
    },
    {
      title: "Road to FAANG Companies",
      issuer: "IIUC Computer Club & IIUC CPS",
      date: "2025",
      image: FaangCert,
      description: "This certification recognizes active participation and contribution in the Road to FAANG Companies program, an initiative organized by the IIUC Computer Club. The program focused on preparing students for careers in top-tier technology companies through workshops, mentorship, and skill-building activities.",
      id: "CERT-002"
    },
     {
      title: "Edge Mobile App Development Workshop 2025",
      issuer: "Computer Science & Engineering Department, IIUC",
      date: "2025",
      image: EdgeCert,
      description: "This certification recognizes active participation and contribution in the Edge Computing Workshop, an initiative organized by the IIUC Computer Club. The workshop focused on introducing students to the fundamentals of edge computing, including its applications, architecture, and practical implementation in modern technology environments.",
      id: "CERT-003"
    }
  ];

  return (
    <section className="py-20 bg-[#020205] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center lg:items-start mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Verified <span className='bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent'>Credentials</span>
        </h2>
        <div className="h-1 w-20 bg-[#a855f7] mt-4 rounded-full shadow-[0_0_15px_#a855f7]"></div>
      </div>

        <div className="space-y-24">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
              
              {/* LEFT SIDE: THE PHOTO */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
                  {/* The actual certificate image */}
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Glowing Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Verified Watermark */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">Authentic</span>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE: THE INFO */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-cyan-400 font-mono text-[10px] uppercase tracking-widest">
                    <FaAward /> Official_Release
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase leading-none">
                    {cert.title}
                  </h3>
                </div>

                <div className="h-px w-20 bg-gradient-to-r from-cyan-500 to-transparent" />

                <p className="text-neutral-400 text-lg leading-relaxed font-medium">
                  {cert.description}
                </p>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500 font-mono">Issuer:</span>
                    <span className="text-white font-bold">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500 font-mono">ID_Ref:</span>
                    <span className="text-white font-bold">{cert.id}</span>
                  </div>
                </div>

                <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-cyan-400 transition-all">
                  Validated Online
                </button>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certification;