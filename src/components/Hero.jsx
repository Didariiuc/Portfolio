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
    <div className="p-10 text-white ">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">

        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Availeable for Work */}
          <div className="mb-8 border-2 border-white-700 rounded-full px-11 py-2 w-70 bg-amber-900 text-amber-500 font-bold text-xl">
            Available for Work
          </div>

          <h1 className="text-5xl font-bold">Full Stak 
           <br /> <span className='text-transparent bg-gradient-to-r from-amber-500 via-amber-900 to-amber-500 bg-clip-text text-7xl'>Mern Developer</span></h1>
          <hr className="mt-4 w-full border-t border-slate-300" />
          <p className="mt-6 text-lg text-slate-100">
            Crafting high-quality code and building innovative solutions to real-world problems. With a passion for programming and a commitment to excellence, I strive to create impactful software that makes a difference.
          </p>
          <div className=" mt-5 text-center lg:text-left">


            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              <button
                onClick={handleDownload}
                className="mr-3 bg-white text-amber-700 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition flex items-center gap-2"
              >
                <FaRocket size={18} className="text-amber-700 hover:text-white" />
                View Projects
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-transparent border-2 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition"
              >
                <FaDownload size={20} className="hover:text-amber-300" />
                Download CV
              </button>
            </div>
            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              <FaTwitter size={30} className="cursor-pointer hover:text-amber-300" />
              <FaFacebook size={30} className="cursor-pointer hover:text-amber-300" />
              <FaInstagram size={30} className="cursor-pointer hover:text-amber-300" />
              <FaYoutube size={30} className="cursor-pointer hover:text-amber-300" />
            </div>
          </div>
        </div>

        {/* Middle Section (Image) */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={HeroPic}
            alt="Hero"
            width={350}
            height={350}
            className="rounded-full border-8 border-white shadow-lg hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_#ec4899]"
          />
        </div>

        {/* Right Section */}

      </div>
    </div>
  )
}

export default Hero
