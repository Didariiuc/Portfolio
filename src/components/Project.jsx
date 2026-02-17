import React from 'react'

function Project() {
  const projects = [
    "Hospital Management System",
    "Bus Ticket Booking",
    "Hotel Management System",
    "E-Commerce Website"
  ];

  return (
    <div className="p-10 text-white ">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white/10 rounded-2xl shadow-md p-6 text-center font-bold text-xl hover:bg-white/20 transition"
          >
            {project}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
