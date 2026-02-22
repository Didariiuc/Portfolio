import React from 'react';
import { motion } from 'framer-motion';
import { FaRegCommentDots } from 'react-icons/fa';

function Ending() {
  return (
    <div className="relative py-20 px-6 sm:px-10 text-white overflow-hidden">
      
      {/* Decorative Background Glow for the Footer Area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#6366f1]/20 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
          Let's <span className='text-white'>Build Something</span>
        </h2>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-[#a855f7] via-[#2dd4bf] to-[#6366f1] bg-clip-text text-transparent">
            Amazing Together
          </span>
        </h2>

        <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
          Let’s turn your ideas into a digital reality.
        </p>

        <div className='flex justify-center mt-10'>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-[#a855f7]/50 py-4 px-10 rounded-full font-black text-lg transition-all backdrop-blur-md"
          >
            {/* Animated Icon */}
            <FaRegCommentDots size={24} className="text-[#a855f7] group-hover:rotate-12 transition-transform" />
            
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Say Hello
            </span>

            {/* Subtle bottom border glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a855f7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Branding - Small detail to make it look pro */}
      <div className="mt-32 border-t border-white/5 pt-8 text-center">
        <p className="text-xs font-mono text-neutral-600 tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Didar • Crafted with MERN
        </p>
      </div>
    </div>
  );
}

export default Ending;