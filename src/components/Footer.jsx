import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
        
        {/* Left Section */}
        <p className="text-sm">© 2026 Md Abu Bakar Siddik Didar. All Rights Reserved.</p>
        
        {/* Middle Section */}
        <p className="text-sm italic">Building reliable software with precision</p>
        
        {/* Right Section */}
        <div className="flex space-x-4">
          <FaGithub size={22} className="cursor-pointer hover:text-amber-500" />
          <FaLinkedin size={22} className="cursor-pointer hover:text-amber-500" />
          <FaTwitter size={22} className="cursor-pointer hover:text-amber-500" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
