import React from 'react';
import BehindPic from '../assets/diase.jpeg';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

function Behind() {
  return (
    <div className="p-6 sm:p-10 text-white max-w-7xl mx-auto">
      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative overflow-hidden bg-white/5 border border-white/10 flex flex-col lg:flex-row justify-between rounded-[2rem] p-6 lg:p-12 space-y-8 lg:space-y-0 lg:space-x-12 backdrop-blur-xl'
      >
        {/* Subtle inner background glow */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#a855f7]/10 blur-[50px] -z-10" />
        
        {/* Written portion */}
        <div className='w-full lg:w-3/5 text-base sm:text-lg text-neutral-400 leading-relaxed'>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
            Behind the <span className='bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent'>Code</span>
          </h2>
          
          <div className="space-y-6">
            <p>
              Beyond the lines of code, I am a passionate programmer with a love for problem-solving and creativity. 
            </p>
            <p>
              I thrive on challenges and enjoy exploring new technologies to create innovative solutions. When I'm not coding, you can find me indulging in my hobbies, which include <span className="text-white font-medium">competitive programming</span>, <span className="text-white font-medium">videography</span>, and mastering complex data structures.
            </p>
            <p>
              I believe that programming is not just a profession but a way of life, and I am committed to continuously learning and growing in this ever-evolving field.
            </p>
          </div>

          {/* Social Icons - Updated Colors */}
          <div className="flex justify-center lg:justify-start mt-10 space-x-6">
            {[
              { icon: <FaGithub />, link: "https://github.com/Didariiuc", hover: "hover:text-white" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/...", hover: "hover:text-[#0077b5]" },
              { icon: <FaTwitter />, link: "https://x.com/...", hover: "hover:text-[#1da1f2]" },
              { icon: <FaFacebook />, link: "https://www.facebook.com/...", hover: "hover:text-[#1877f2]" },
              { icon: <FaYoutube />, link: "https://youtube.com/...", hover: "hover:text-red-500" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-neutral-500 text-3xl transition-all duration-300 transform hover:scale-125 ${social.hover}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Image portion */}
        <div className='w-full lg:w-2/5 flex justify-center items-center relative group'>
          {/* Outer Ring Animation */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#a855f7] to-[#2dd4bf] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
          
          <img
            src={BehindPic}
            alt="Didar's behind the scenes"
            className='relative z-10 w-full max-w-[300px] aspect-square object-cover rounded-2xl shadow-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700'
          />
          
          {/* Decorative Corner Element */}
          <div className="absolute -bottom-2 -right-2 w-24 h-24 border-b-2 border-r-2 border-[#a855f7] rounded-br-2xl -z-0 opacity-50 group-hover:scale-110 transition-transform" />
        </div>
      </motion.div>
    </div>
  );
}

export default Behind;