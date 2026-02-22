import React from 'react'
import { FaHospital, FaBus, FaHotel, FaShoppingCart, FaBook, FaMusic, FaGamepad, FaFilm } from "react-icons/fa";

function Project() {
  const projects = [
    { name: "Hospital Management System", icon: <FaHospital className="text-amber-500 text-5xl mb-4" /> },
    { name: "Bus Ticket Booking", icon: <FaBus className="text-amber-500 text-5xl mb-4" /> },
    { name: "Hotel Management System", icon: <FaHotel className="text-amber-500 text-5xl mb-4" /> },
    { name: "E-Commerce Website", icon: <FaShoppingCart className="text-amber-500 text-5xl mb-4" /> },
    { name: "Library Management System", icon: <FaBook className="text-amber-500 text-5xl mb-4" /> },
    { name: "Music Streaming App", icon: <FaMusic className="text-amber-500 text-5xl mb-4" /> },
    { name: "Gaming Platform", icon: <FaGamepad className="text-amber-500 text-5xl mb-4" /> },
    { name: "Movie Review Website", icon: <FaFilm className="text-amber-500 text-5xl mb-4" /> },
  ];

  return (
    <div className="p-10 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Featured <span className="text-amber-500">Work</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-2xl shadow-lg p-8 text-center hover:bg-white/20 transition transform hover:scale-105"
          >
            {project.icon}
            <h3 className="font-bold text-xl">{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project