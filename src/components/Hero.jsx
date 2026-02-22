import React from 'react';
import HeroPic from "../assets/suit.jpeg"
import { motion } from 'framer-motion'; // For that smooth entrance
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaDownload, FaRocket, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Corrected path for public folder
    link.download = 'CV-Abu Bakar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 pt-24 sm:p-10 text-white overflow-hidden">
      
      <div className="z-10 flex flex-col-reverse lg:flex-row justify-around items-center gap-12 max-w-7xl w-full">

        {/* --- LEFT SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 mb-6 border border-[#a855f7]/30 rounded-full px-5 py-2 bg-[#a855f7]/10 backdrop-blur-md">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-sm md:text-base font-medium text-neutral-200">Available for Work</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            I'm <br />
            <span className='bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent'>
              Abu Bakar Siddik
            </span> <br />
            Front-End 
            <span className='bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] ml-5 bg-clip-text text-transparent'>
             Developer
            </span>
            <br />
            
          </h1>

          <div className="mt-6 h-1 w-20 bg-[#a855f7] rounded-full mx-auto lg:mx-0 shadow-[0_0_15px_#a855f7]"></div>

          <p className="mt-8 text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed">
            Crafting high-performance web applications with the 
            <span className="text-white font-semibold"> Front-End Developer</span>. 
            Passionate about turning complex problems into elegant, user-centric digital solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-10 gap-5">
            <Link
              to="/projects"
              className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#2dd4bf] px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <FaRocket size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              View Projects
            </Link>

            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 border border-neutral-700 bg-white/5 backdrop-blur-md hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all hover:border-neutral-500"
            >
              <FaDownload size={18} className="text-[#a855f7]" />
              Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start mt-10 space-x-6">
            {[
              { Icon: FaGithub, link: "https://github.com/Didariiuc", color: "hover:text-white" },
              { Icon: FaLinkedin, link: "https://www.linkedin.com/in/md-abu-bakar-siddik-didar-704863330?utm_source=share_via&utm_content=profile&utm_medium=member_ios", color: "hover:text-[#0077b5]" },
              { Icon: FaTwitter, link: "https://x.com/didduuuuu?s=21", color: "hover:text-[#1da1f2]" },
              { Icon: FaFacebook, link: "https://www.facebook.com/share/1EC5NwSCrN/?mibextid=wwXIfr", color: "hover:text-[#1877f2]" },
              { Icon: FaYoutube, link: "https://youtube.com/@diva_tune?si=IfjX1caapzn50es9", color: "hover:text-red-500" },
            ].map(({ Icon, link, color }, idx) => (
              <a key={idx} href={link} className={`text-neutral-500 text-2xl transition-all duration-300 ${color} hover:scale-125`}>
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT SECTION (Image) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Animated Glow Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur-[60px] opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          <div className="relative p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <img
              src={HeroPic}
              alt="Hero"
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 border-2 border-white/20"
            />
          </div>

          {/* Tech Badge Overlay */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-4 -right-4 bg-[#05050a] border border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-xl"
          >
             <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Experience</p>
             <p className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">0+ Years</p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

export default Hero;