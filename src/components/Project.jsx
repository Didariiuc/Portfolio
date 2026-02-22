import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHospital, FaBus, FaHotel, FaShoppingCart, 
  FaBook, FaMusic, FaGamepad, FaFilm 
} from "react-icons/fa";

function Project() {
  const projects = [
    { name: "Hospital System", icon: <FaHospital />, color: "from-blue-500 to-cyan-400" },
    { name: "Bus Ticket Pro", icon: <FaBus />, color: "from-emerald-500 to-teal-400" },
    { name: "Hotel Luxury", icon: <FaHotel />, color: "from-[#a855f7] to-[#ec4899]" },
    { name: "E-Commerce Hub", icon: <FaShoppingCart />, color: "from-orange-500 to-yellow-400" },
    ];

  return (
    <div className="p-10 text-white max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          Work <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">Archive</span>
        </h2>
        <p className="text-neutral-500 mt-2 font-mono uppercase tracking-[0.3em] text-xs">
          Comprehensive project repository
        </p>
      </div>
      

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Background Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />
            
            {/* The Card */}
            <div className="relative h-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col items-center justify-center gap-6 group-hover:border-white/20 transition-all overflow-hidden">
              
              {/* Animated Icon Container */}
              <div className={`text-4xl p-4 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                {project.icon}
              </div>

              {/* Title with Gradient Text */}
              <h3 className="font-bold text-lg text-center leading-tight group-hover:text-white transition-colors">
                {project.name}
              </h3>

              {/* Decorative Scanline Effect on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional "View More" Link */}
      <div className="mt-16 text-center">
        <button className="text-neutral-500 hover:text-[#a855f7] font-mono text-sm tracking-widest uppercase transition-colors">
          + Explore GitHub for more source code
        </button>
      </div>
    </div>
  );
}

export default Project;