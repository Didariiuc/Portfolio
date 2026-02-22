import React from 'react';
import { motion } from 'framer-motion';
import BehindPic from '../assets/didar.jpg';
import BusPic from "../assets/busTicket.jpg"
import MedicalPic from "../assets/medical.jpg"
import HotelPic from "../assets/hotel.jpg"
import { FaEye, FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Online Bus Ticketing System",
    desc: "A MERN stack–based online bus ticketing platform that allows users to search routes, view seat availability in real time, and securely book tickets with an intuitive, responsive interface.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: BusPic,
    live: "#",
    code: "#"
  },
  {
    title: "Medical Management System",
    desc: "A modern medical management system designed to handle patient records, appointments, and administrative workflows through a clean, responsive interface with smooth animations.",
    tech: ["Next.js", "OpenAI API", "Framer Motion"],
    image: MedicalPic,
    live: "#",
    code: "#"
  },
  {
    title: "Hotel Management System",
    desc: "A comprehensive hotel management system that streamlines booking, room assignments, and guest services with an intuitive UI.",
    tech: ["React", "Firebase", "Redux"],
    image: HotelPic,
    live: "#",
    code: "#"
  }
];

function FeatureProject() {
  return (
    <div className="p-6 sm:p-10 text-white max-w-7xl mx-auto">
      <div className="flex flex-col items-center lg:items-start mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Featured <span className='bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent'>Projects</span>
        </h2>
        <div className="h-1 w-20 bg-[#a855f7] mt-4 rounded-full shadow-[0_0_15px_#a855f7]"></div>
      </div>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 group`}
          >
            {/* Project Image Wrapper */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#a855f7] to-[#3b82f6] rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#05050a]/40 group-hover:bg-transparent transition-all duration-500"></div>
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#a855f7] font-mono text-sm font-bold">Project 0{index + 1}</span>
                <div className="h-[1px] w-12 bg-white/20"></div>
              </div>

              <h3 className="text-3xl md:text-4xl font-black group-hover:text-[#a855f7] transition-colors">
                {project.title}
              </h3>

              <p className="text-neutral-400 text-lg leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-4 py-1 rounded-full border border-white/5 bg-white/5 text-xs font-bold text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className='flex flex-wrap gap-4 pt-4'>
                <a
                  href={project.live}
                  className="bg-white text-black hover:bg-[#a855f7] hover:text-white font-black py-3 px-8 rounded-full transition-all flex items-center gap-2 shadow-xl"
                >
                  <FaEye size={18} />
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/40 text-white font-bold py-3 px-8 rounded-full transition-all backdrop-blur-md"
                >
                  <FaCode size={20} className="text-[#a855f7]" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FeatureProject;