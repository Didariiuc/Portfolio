import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

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
          <div className="flex justify-center lg:justify-start mt-6 space-x-4">
                        <a href="https://github.com/Didariiuc">
                          <FaGithub size={28} className="hover:text-black transition-colors duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/md-abu-bakar-siddik-didar-704863330?utm_source=share_via&utm_content=profile&utm_medium=member_ios">
                          <FaLinkedin size={28} className="cursor-pointer hover:text-amber-300" />
                        </a>
          
                        <a href="https://x.com/didduuuuu?s=21npm run dev
                        ">
                          <FaTwitter size={28} className="cursor-pointer hover:text-amber-300" />
                        </a>
          
                        <a href="https://www.facebook.com/share/1EC5NwSCrN/?mibextid=wwXIfr">
                          <FaFacebook size={28} className="cursor-pointer hover:text-amber-300" />
                        </a>
          
                        <a href="https://youtube.com/@diva_tune?si=IfjX1caapzn50es9">
                          <FaYoutube size={28} className="cursor-pointer hover:text-amber-300" />
                        </a>
          
                      </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
