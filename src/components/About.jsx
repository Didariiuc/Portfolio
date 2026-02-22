import React from 'react';
import AboutPic from '../assets/didar.jpg';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Skills from './Skills';

function About() {

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Corrected path for public folder
    link.download = 'CV-Abu Bakar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return (
        <div className="relative pt-20">
            {/* About Section */}
            <div className='p-6 sm:p-10 text-white flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto'>
                
                {/* Image Section with Glow */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className='w-full sm:w-2/3 lg:w-1/3 relative group'
                >
                    <div className="absolute inset-0 bg-[#a855f7]/20 blur-[50px] rounded-full"></div>
                    <img 
                        src={AboutPic} 
                        alt="About Me" 
                        className="relative z-10 rounded-2xl border border-white/10 shadow-2xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" 
                    />
                </motion.div>

                {/* Text Section */}
                <div className='w-full lg:w-1/2 flex flex-col gap-8'>
                    <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left leading-tight">
                        Crafting Digital Experiences with
                        <br /> 
                        <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl font-black">
                            Code & Passion
                        </span>
                    </h1>
                    
                    <p className='text-center lg:text-left text-neutral-400 text-lg leading-relaxed'>
                        I am a dedicated MERN Stack developer focused on building scalable, user-centric web applications. My goal is to bridge the gap between complex backend logic and intuitive frontend design.
                    </p>

                    {/* Stats Cards - New Glassmorphism Style */}
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                        {[
                            { label: "Year Experience", value: "0+", color: "from-blue-500" },
                            { label: "Projects", value: "3+", color: "from-[#a855f7]" },
                            { label: "Commitment", value: "100%", color: "from-cyan-500" }
                        ].map((stat, i) => (
                            <div key={i} className='p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:border-white/20 transition-all'>
                                <span className={`block text-3xl font-black bg-gradient-to-b ${stat.color} to-white bg-clip-text text-transparent`}>
                                    {stat.value}
                                </span>
                                <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className='flex flex-wrap gap-4 justify-center lg:justify-start'>
                        <button
                        onClick={handleDownload} className="flex items-center gap-2 bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                            <FaDownload size={18} />
                            Download CV
                        </button>
                        <a
                           href="mailto:mdabubakarsiddikdidar@gmail.com"
                         className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-all">
                            <FaEnvelope size={18} className="text-[#a855f7]" />
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <Skills />

            {/* Experience & Education Section */}
            <div className='max-w-7xl mx-auto p-6 sm:p-10 text-white grid grid-cols-1 md:grid-cols-2 gap-10'>
                
                {/* Experience Card */}
                <div className='flex flex-col gap-6'>
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <div className="p-2 bg-[#a855f7]/20 rounded-lg">
                            <FaBriefcase className="text-[#a855f7]" />
                        </div> 
                        Experience
                    </h2>
                    <div className='relative group overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all'>
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaBriefcase size={80} />
                        </div>
                        <h3 className='text-[#a855f7] text-xl font-bold'>Web Developer</h3>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-tighter">2024 - Present</span>
                        <p className="mt-4 text-neutral-400 leading-relaxed">
                            Developing modern web applications using React, Node.js, and MongoDB. Specialized in creating responsive layouts and optimizing performance.
                        </p>
                    </div>
                </div>

                {/* Education Card */}
                <div className='flex flex-col gap-6'>
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <FaGraduationCap className="text-blue-500" />
                        </div> 
                        Education
                    </h2>
                    <div className='relative group overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all'>
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaGraduationCap size={80} />
                        </div>
                        <h3 className='text-blue-500 text-xl font-bold'>BSc in Computer Science</h3>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-tighter">2022 - 2026</span>
                        <p className="mt-4 text-neutral-400 leading-relaxed">
                            Focused on software engineering principles, data structures, and algorithms. Actively participating in web development workshops and hackathons.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;