import React from 'react'
import HeroPic from '../assets/didar.jpg'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaDownload, FaRocket } from "react-icons/fa";

function Hero() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../public/CV.pdf';
    link.download = 'CV-Abu Bakar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="p-6 sm:p-10 text-white">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Available for Work */}
          <div className="w-1/2 mb-6 border-2 border-white rounded-full px-6 py-2 
                bg-amber-900 text-amber-500 font-bold text-base sm:text-lg md:text-xl 
                mx-auto lg:mx-0 flex items-center gap-3">
  {/* Dot Circle */}
  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>

  {/* Text */}
  <span>Available for Work</span>
</div>


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Full Stack
            <br />
            <span className='text-transparent bg-gradient-to-r from-amber-500 via-amber-900 to-amber-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
              Mern Developer
            </span>
          </h1>

          <hr className="mt-4 w-full border-t border-slate-300" />

          <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-100">
            Crafting high-quality code and building innovative solutions to real-world problems. With a passion for programming and a commitment to excellence, I strive to create impactful software that makes a difference.
          </p>

          {/* Buttons */}
          <div className="mt-5 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 gap-4">
              <button
                
                className="w-50 bg-white text-amber-700 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition flex items-center gap-2"
              >
                <FaRocket size={18} className="text-amber-700 hover:text-white" />
                View Projects
              </button>
              <button
                onClick={handleDownload}
                className="w-50 flex items-center gap-2 bg-transparent border-2 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition"
              >
                <FaDownload size={20} className="hover:text-amber-300" />
                Download CV
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              <FaTwitter size={28} className="cursor-pointer hover:text-amber-300" />
              <FaFacebook size={28} className="cursor-pointer hover:text-amber-300" />
              <FaInstagram size={28} className="cursor-pointer hover:text-amber-300" />
              <FaYoutube size={28} className="cursor-pointer hover:text-amber-300" />
            </div>
          </div>
        </div>

        {/* Middle Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={HeroPic}
            alt="Hero"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full   shadow-lg hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_#ff8834]"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero