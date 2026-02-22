import React from 'react'
import { FaCode, FaCuttlefish, FaVideo, FaJs, FaReact, FaNodeJs, FaLock } from "react-icons/fa";
import { SiExpress, SiPrisma, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Competitive Programming", icon: <FaCode className="text-gray-300" /> },
    { name: "Data Structures & Algorithms", icon: <FaCode className="text-gray-300" /> },
    { name: "C++", icon: <FaCuttlefish className="text-blue-600" /> },
    { name: "Videography", icon: <FaVideo className="text-red-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    { name: "Prisma", icon: <SiPrisma className="text-indigo-500" /> },
    { name: "JWT Authentication", icon: <FaLock className="text-purple-500" /> },
    { name: "HTML & CSS", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  return (
    <div className="p-10 text-white">
      <h2 className="text-4xl font-bold mb-3"><span className='text-amber-600'>Tech</span> Stack</h2>
      <p className="mb-6">Here are the technologies I've worked with:</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white/10 rounded-lg
           shadow-md p-3 text-center hover:bg-white/20 transition flex flex-col items-center gap-2"
          >
            <span className="text-3xl">{skill.icon}</span>
            <span className="font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills