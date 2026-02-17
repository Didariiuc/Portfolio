import React from 'react'

function Skills() {
  const skills = [
    "Competitive Programming",
    "Data Structures & Algorithms",
    "C++",
    "Videography",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Prisma",
    "JWT Authentication",
    "HTML & CSS",
    "Bootstrap / Tailwind",
    
  ];

  return (
    <div className="p-10 text-white ">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white/10 rounded-lg shadow-md p-4 text-center hover:bg-white/20 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
